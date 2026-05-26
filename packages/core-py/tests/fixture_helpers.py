# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from qi_vc_core.policy import load_policy_profile
from qi_vc_core.verifier import VerifyGraphOptions, verify_credential_graph

JsonObject = dict[str, Any]

ROOT = Path(__file__).resolve().parents[3]
EXAMPLES = ROOT / "testdata" / "examples"


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

    options = VerifyGraphOptions(
        fetch_document=fetch,
        resolve_trust_registry=lambda _issuer, _context=None: registry,
        skip_proof=True,
        **kwargs,
    )
    return verify_credential_graph(target, policy, options)


def codes(trace: JsonObject) -> list[str]:
    return [str(result["code"]) for result in trace["results"]]
