# SPDX-License-Identifier: Apache-2.0
from qi_vc_core.presentation_query import (
    policy_to_dcql,
    policy_to_presentation_definition,
    validate_presentation_submission,
)

from .fixture_helpers import codes, load_fixture
from qi_vc_core.verifier import VerifyGraphOptions, verify_credential_graph


def test_presentation_passes_but_qi_validation_fails():
    target, policy, registry, documents = load_fixture("calibration-capability", "failing-target-credential.json")
    definition = policy_to_presentation_definition(policy)
    dcql = policy_to_dcql(policy)
    submission = {
        "descriptor_map": [
            {"id": descriptor["id"], "path": f"$.verifiableCredential[{index}]"}
            for index, descriptor in enumerate(definition["input_descriptors"])
        ]
    }
    presentation = validate_presentation_submission(definition, submission)
    trace = verify_credential_graph(
        target,
        policy,
        VerifyGraphOptions(fetch_document=lambda uri: documents[uri], resolve_trust_registry=lambda _i, _c=None: registry, skip_proof=True),
    )
    assert dcql["credentials"]
    assert presentation["valid"] is True
    assert trace["verified"] is False
    assert "DERIVATION_VIOLATION" in codes(trace)
