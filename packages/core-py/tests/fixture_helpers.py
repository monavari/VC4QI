# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from qi_vc_core.policy import load_policy_profile
from qi_vc_core.utils.document_loader import build_document_loader
from qi_vc_core.verifier import VerifyGraphOptions, verify_credential_graph

JsonObject = dict[str, Any]

ROOT = Path(__file__).resolve().parents[3]
EXAMPLES = ROOT / "testdata" / "examples"

# Public half of the TEST ONLY key that signs the trust-registry fixtures
# (tests/fixtures/keys/test-ed25519-key.json; see
# packages/core-ts/scripts/sign-trust-registries.ts).
#
# The registry is a signed credential and its proof is verified before any entry
# is read (SEC-1), so fixtures must resolve a key even when skip_proof suppresses
# proof checks on the graph's own credentials.
TEST_REGISTRY_PUBLIC_KEY = bytes.fromhex(
    "2152f8d19b791d24453242e15f2eab6cb7cffa7b6a5ed30097960e069881db12"
)

TEST_DOCUMENT_LOADER = build_document_loader()


def resolve_test_registry_key(_verification_method: str) -> bytes:
    return TEST_REGISTRY_PUBLIC_KEY


def read_json(path: Path) -> JsonObject:
    return json.loads(path.read_text())


def fixture_path(name: str, *parts: str) -> Path:
    return EXAMPLES / name / Path(*parts)


def load_fixture(name: str, target_file: str = "target-credential.json") -> tuple[JsonObject, Any, JsonObject, dict[str, JsonObject]]:
    base = EXAMPLES / name
    target = read_json(base / target_file)
    policy = load_policy_profile(read_json(base / "policy.json"))
    trust_registry = read_json(base / "trust-registry.json")
    documents: dict[str, JsonObject] = {}
    for file in (base / "evidence").glob("*.json"):
        document = read_json(file)
        documents[str(document["id"])] = document
    return target, policy, trust_registry, documents


def verify_fixture(name: str, target_file: str = "target-credential.json", **kwargs: Any) -> JsonObject:
    target, policy, registry, documents = load_fixture(name, target_file)

    def fetch(uri: str) -> JsonObject:
        if uri not in documents:
            raise KeyError(f"Unknown fixture URI {uri}")
        return documents[uri]

    defaults: dict[str, Any] = {
        "resolve_key": resolve_test_registry_key,
        "document_loader": TEST_DOCUMENT_LOADER,
    }
    defaults.update(kwargs)
    options = VerifyGraphOptions(
        fetch_document=fetch,
        resolve_trust_registry=lambda _issuer, _context=None: registry,
        skip_proof=True,
        **defaults,
    )
    return verify_credential_graph(target, policy, options)


def codes(trace: JsonObject) -> list[str]:
    return [str(result["code"]) for result in trace["results"]]
