# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

from typing import Any

from .types import PolicyProfile

JsonObject = dict[str, Any]


def load_policy_profile(document: JsonObject) -> PolicyProfile:
    return PolicyProfile.model_validate(document)
