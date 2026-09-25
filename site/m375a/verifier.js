var To = Object.defineProperty;
var _i = (e) => {
  throw TypeError(e);
};
var ko = (e, t, i) => t in e ? To(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var Ae = (e, t, i) => ko(e, typeof t != "symbol" ? t + "" : t, i), $i = (e, t, i) => t.has(e) || _i("Cannot " + i);
var Re = (e, t, i) => ($i(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Rt = (e, t, i) => t.has(e) ? _i("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Wn = (e, t, i, a) => ($i(e, t, "write to private field"), a ? a.call(e, i) : t.set(e, i), i);
const kn = { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/rm/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/BINDING_MANIFEST.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Contexts and schemas are pinned in catalog.json; controller documents and signed A/H/O/S/D178 fixtures are pinned in test-vectors/signed/catalog.json and verify in TypeScript and Python. Status resources, a full independent transformation vector and the I2-I4 evaluators are still required before selection.", pendingResources: ["https://producer.vc4qi.example/status/1"] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/rm/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/rm/1#RmAccreditation", "https://vc4qi.example/bindings/rm/1#RmOperationalScope", "https://vc4qi.example/bindings/rm/1#RmCertificate", "https://vc4qi.example/bindings/rm/1#RmStudy", "https://vc4qi.example/bindings/rm/1#RmLabAuthority"], schemaUris: ["https://vc4qi.example/schemas/rm/1/accreditation.json", "https://vc4qi.example/schemas/rm/1/operational-scope.json", "https://vc4qi.example/schemas/rm/1/certificate.json", "https://vc4qi.example/schemas/rm/1/study.json", "https://vc4qi.example/schemas/rm/1/lab-authority.json", "https://vc4qi.example/schemas/rm/1/authorization-policy.json", "https://vc4qi.example/schemas/rm/1/study-reference.json"], composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/rm-v1/catalog.json", decimalEncoding: "JSON strings typed xsd:decimal for every quantity, bound and uncertainty", orderedCollections: ["materials", "materialPropertiesList", "results"] }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/rm/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/rm/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/bindings/rm/1#authorizationCredential" }, { fact: "requiredStudy", nativePath: "/evidence/*/id", expandedIri: "https://www.w3.org/2018/credentials#evidence" }, { fact: "validFrom", nativePath: "/validFrom", expandedIri: "https://www.w3.org/2018/credentials#validFrom" }, { fact: "validUntil", nativePath: "/validUntil", expandedIri: "https://www.w3.org/2018/credentials#validUntil" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/rm/1#activityTime" }, { fact: "selectedResult", nativePath: "/credentialSubject/materialPropertiesList/*/results/*", expandedIri: "https://vc4qi.example/bindings/rm/1#results" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, material: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 1 }, supportReferences: { minimum: 1 }, multipleRecognizedDeclarations: "unsupported-unless-exact-deterministic-composition-is-listed", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "evidence", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", independentGrantBinding: "authenticated-grant-must-name-the-exercising-actor-and-activity" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/bindings/rm/1#RmAuthorizationPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], supportEvidence: "https://vc4qi.example/bindings/rm/1#RmStudyReference", supportEvidenceEstablishes: ["support-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "support-applicability", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { issueRmCertificate: "https://vc4qi.example/bindings/rm/1#issueRmCertificate", maintainRmScope: "https://vc4qi.example/bindings/rm/1#maintainRmScope", issueRmStudy: "https://vc4qi.example/bindings/rm/1#issueRmStudy" }, rules: ["A grantee equals the producer exercising certificate issuance and scope maintenance.", "O issuer and grantee equal that producer and O is contained by A.", "D issuer equals O grantee.", "S issuer equals H laboratory grantee.", "Commissioning a study grants no laboratory competence."] }, scopeAndMapping: { mappingVersion: "rm-experimental-mapping-1", recordEvaluator: "https://vc4qi.example/evaluators/rm-complete-record/1", quantityEvaluator: "https://vc4qi.example/evaluators/exact-mass-fraction/1", dimensions: ["matrixIri", "formIri", "propertyIri", "methodIri", "quantityKindIri", "range"], units: { "mg/kg": "1e-6", "kg/kg": "1" }, boundaries: "inclusive", missingOrEmptyRestrictedDimension: "not_established", recordCombination: "one-complete-record-per-claim-no-splicing", uncertainty: { requiredCoverageFactor: "2", nonnegative: !0, accreditationCeiling: "none" }, unsupported: ["asymmetric-uncertainty", "display-label-equality", "substring-matching", "implicit-method-succession"] }, routesAndRestrictions: { certificateRoute: ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A"], studyRoute: ["H-authorizes-S"], requiredSupport: ["S", "H"], globalRestrictions: ["applicable-suspension", "request-time-policy"], routeComposition: "AND-within-route-OR-between-complete-routes", baselineAlternatives: 1, provenanceDoesNotEstablish: ["permission", "containment"] }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, proofCollections: "unsupported-in-initial-slice", status: "authenticated-current-status-required-for-non-anchor-A-O-D-S-H", validity: ["validFrom", "validUntil"], freshness: "explicit-request-profile-value-no-default", historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { objectApplicability: ["materialBatch", "activity", "method", "activityTime"], supportSubjectNeedNotEqualTargetIssuer: !0, mandatoryDisclosure: ["issuer", "credentialSubject/id", "activityTime", "selectedResult", "restrictions", "authorizingReference", "requiredStudy", "relatedResource", "proof"], missingMandatoryDisclosure: "not_established", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/plans/standards-first-acceptance.csv", testVectorRoots: ["testdata/regressions", "bindings/experimental/rm-v1/test-vectors"], implementationEvidence: "docs/plans/standards-first-i1-signed-slice-evidence.md", unsupported: ["production-accreditation", "legal-effect", "physical-sample-truth", "public-example-namespace-resolution", "general-ontology-reasoning", "wallet-interoperability", "external-recognition-adapter", "timestamp-service"] } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
  "@context": {
    "@protected": true,

    "id": "@id",
    "type": "@type",

    "description": "https://schema.org/description",
    "digestMultibase": {
      "@id": "https://w3id.org/security#digestMultibase",
      "@type": "https://w3id.org/security#multibase"
    },
    "digestSRI": {
      "@id": "https://www.w3.org/2018/credentials#digestSRI",
      "@type": "https://www.w3.org/2018/credentials#sriString"
    },
    "mediaType": {
      "@id": "https://schema.org/encodingFormat"
    },
    "name": "https://schema.org/name",

    "VerifiableCredential": {
      "@id": "https://www.w3.org/2018/credentials#VerifiableCredential",
      "@context": {
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "confidenceMethod": {
          "@id": "https://www.w3.org/2018/credentials#confidenceMethod",
          "@type": "@id"
        },
        "credentialSchema": {
          "@id": "https://www.w3.org/2018/credentials#credentialSchema",
          "@type": "@id"
        },
        "credentialStatus": {
          "@id": "https://www.w3.org/2018/credentials#credentialStatus",
          "@type": "@id"
        },
        "credentialSubject": {
          "@id": "https://www.w3.org/2018/credentials#credentialSubject",
          "@type": "@id"
        },
        "description": "https://schema.org/description",
        "evidence": {
          "@id": "https://www.w3.org/2018/credentials#evidence",
          "@type": "@id"
        },
        "issuer": {
          "@id": "https://www.w3.org/2018/credentials#issuer",
          "@type": "@id"
        },
        "name": "https://schema.org/name",
        "proof": {
          "@id": "https://w3id.org/security#proof",
          "@type": "@id",
          "@container": "@graph"
        },
        "refreshService": {
          "@id": "https://www.w3.org/2018/credentials#refreshService",
          "@type": "@id"
        },
        "relatedResource": {
          "@id": "https://www.w3.org/2018/credentials#relatedResource",
          "@type": "@id"
        },
        "renderMethod": {
          "@id": "https://www.w3.org/2018/credentials#renderMethod",
          "@type": "@id"
        },
        "termsOfUse": {
          "@id": "https://www.w3.org/2018/credentials#termsOfUse",
          "@type": "@id"
        },
        "validFrom": {
          "@id": "https://www.w3.org/2018/credentials#validFrom",
          "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "validUntil": {
          "@id": "https://www.w3.org/2018/credentials#validUntil",
          "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        }
      }
    },

    "EnvelopedVerifiableCredential":
      "https://www.w3.org/2018/credentials#EnvelopedVerifiableCredential",

    "VerifiablePresentation": {
      "@id": "https://www.w3.org/2018/credentials#VerifiablePresentation",
      "@context": {
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "holder": {
          "@id": "https://www.w3.org/2018/credentials#holder",
          "@type": "@id"
        },
        "proof": {
          "@id": "https://w3id.org/security#proof",
          "@type": "@id",
          "@container": "@graph"
        },
        "termsOfUse": {
          "@id": "https://www.w3.org/2018/credentials#termsOfUse",
          "@type": "@id"
        },
        "verifiableCredential": {
          "@id": "https://www.w3.org/2018/credentials#verifiableCredential",
          "@type": "@id",
          "@container": "@graph",
          "@context": null
        }
      }
    },

    "EnvelopedVerifiablePresentation":
      "https://www.w3.org/2018/credentials#EnvelopedVerifiablePresentation",

    "JsonSchemaCredential":
      "https://www.w3.org/2018/credentials#JsonSchemaCredential",

    "JsonSchema": {
      "@id": "https://www.w3.org/2018/credentials#JsonSchema",
      "@context": {
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "jsonSchema": {
          "@id": "https://www.w3.org/2018/credentials#jsonSchema",
          "@type": "@json"
        }
      }
    },

    "BitstringStatusListCredential":
      "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential",

    "BitstringStatusList": {
      "@id": "https://www.w3.org/ns/credentials/status#BitstringStatusList",
      "@context": {
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "encodedList": {
          "@id": "https://www.w3.org/ns/credentials/status#encodedList",
          "@type": "https://w3id.org/security#multibase"
        },
        "statusPurpose":
          "https://www.w3.org/ns/credentials/status#statusPurpose",
        "ttl": "https://www.w3.org/ns/credentials/status#ttl"
      }
    },

    "BitstringStatusListEntry": {
      "@id":
        "https://www.w3.org/ns/credentials/status#BitstringStatusListEntry",
      "@context": {
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "statusListCredential": {
          "@id":
            "https://www.w3.org/ns/credentials/status#statusListCredential",
          "@type": "@id"
        },
        "statusListIndex":
          "https://www.w3.org/ns/credentials/status#statusListIndex",
        "statusPurpose":
          "https://www.w3.org/ns/credentials/status#statusPurpose",
        "statusMessage": {
          "@id": "https://www.w3.org/ns/credentials/status#statusMessage",
          "@context": {
            "@protected": true,

            "id": "@id",
            "type": "@type",

            "message": "https://www.w3.org/ns/credentials/status#message",
            "status": "https://www.w3.org/ns/credentials/status#status"
          }
        },
        "statusReference": {
          "@id": "https://www.w3.org/ns/credentials/status#statusReference",
          "@type": "@id"
        },
        "statusSize": {
          "@id": "https://www.w3.org/ns/credentials/status#statusSize",
          "@type": "https://www.w3.org/2001/XMLSchema#integer"
        }
      }
    },

    "DataIntegrityProof": {
      "@id": "https://w3id.org/security#DataIntegrityProof",
      "@context": {
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "challenge": "https://w3id.org/security#challenge",
        "created": {
          "@id": "http://purl.org/dc/terms/created",
          "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "cryptosuite": {
          "@id": "https://w3id.org/security#cryptosuite",
          "@type": "https://w3id.org/security#cryptosuiteString"
        },
        "domain": "https://w3id.org/security#domain",
        "expires": {
          "@id": "https://w3id.org/security#expiration",
          "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "nonce": "https://w3id.org/security#nonce",
        "previousProof": {
          "@id": "https://w3id.org/security#previousProof",
          "@type": "@id"
        },
        "proofPurpose": {
          "@id": "https://w3id.org/security#proofPurpose",
          "@type": "@vocab",
          "@context": {
            "@protected": true,

            "id": "@id",
            "type": "@type",

            "assertionMethod": {
              "@id": "https://w3id.org/security#assertionMethod",
              "@type": "@id",
              "@container": "@set"
            },
            "authentication": {
              "@id": "https://w3id.org/security#authenticationMethod",
              "@type": "@id",
              "@container": "@set"
            },
            "capabilityDelegation": {
              "@id": "https://w3id.org/security#capabilityDelegationMethod",
              "@type": "@id",
              "@container": "@set"
            },
            "capabilityInvocation": {
              "@id": "https://w3id.org/security#capabilityInvocationMethod",
              "@type": "@id",
              "@container": "@set"
            },
            "keyAgreement": {
              "@id": "https://w3id.org/security#keyAgreementMethod",
              "@type": "@id",
              "@container": "@set"
            }
          }
        },
        "proofValue": {
          "@id": "https://w3id.org/security#proofValue",
          "@type": "https://w3id.org/security#multibase"
        },
        "verificationMethod": {
          "@id": "https://w3id.org/security#verificationMethod",
          "@type": "@id"
        }
      }
    },

    "...": {
      "@id": "https://www.iana.org/assignments/jwt#..."
    },
    "_sd": {
      "@id": "https://www.iana.org/assignments/jwt#_sd",
      "@type": "@json"
    },
    "_sd_alg": {
      "@id": "https://www.iana.org/assignments/jwt#_sd_alg"
    },
    "aud": {
      "@id": "https://www.iana.org/assignments/jwt#aud",
      "@type": "@id"
    },
    "cnf": {
      "@id": "https://www.iana.org/assignments/jwt#cnf",
      "@context": {
        "@protected": true,

        "kid": {
          "@id": "https://www.iana.org/assignments/jwt#kid",
          "@type": "@id"
        },
        "jwk": {
          "@id": "https://www.iana.org/assignments/jwt#jwk",
          "@type": "@json"
        }
      }
    },
    "exp": {
      "@id": "https://www.iana.org/assignments/jwt#exp",
      "@type": "https://www.w3.org/2001/XMLSchema#nonNegativeInteger"
    },
    "iat": {
      "@id": "https://www.iana.org/assignments/jwt#iat",
      "@type": "https://www.w3.org/2001/XMLSchema#nonNegativeInteger"
    },
    "iss": {
      "@id": "https://www.iana.org/assignments/jose#iss",
      "@type": "@id"
    },
    "jku": {
      "@id": "https://www.iana.org/assignments/jose#jku",
      "@type": "@id"
    },
    "kid": {
      "@id": "https://www.iana.org/assignments/jose#kid",
      "@type": "@id"
    },
    "nbf": {
      "@id": "https://www.iana.org/assignments/jwt#nbf",
      "@type": "https://www.w3.org/2001/XMLSchema#nonNegativeInteger"
    },
    "sub": {
      "@id": "https://www.iana.org/assignments/jose#sub",
      "@type": "@id"
    },
    "x5u": {
      "@id": "https://www.iana.org/assignments/jose#x5u",
      "@type": "@id"
    }
  }
}` }, { uri: "https://vc4qi.example/contexts/rm/1", mediaType: "application/ld+json", origin: "VC4QI experimental RM binding (repository-owned fictional fixture)", version: "1", digestSRI: "sha384-ed6stvFITUQ+j3YktAakPVW76KnIBeW5r3WZLMmjfkDcxb/uxJfhTIMiA2nlZN1M", text: `{
  "@context": {
    "@version": 1.1,
    "@protected": true,
    "rm": "https://vc4qi.example/bindings/rm/1#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",

    "RmAccreditation": "rm:RmAccreditation",
    "RmOperationalScope": "rm:RmOperationalScope",
    "RmCertificate": "rm:RmCertificate",
    "RmStudy": "rm:RmStudy",
    "RmLabAuthority": "rm:RmLabAuthority",
    "RmAuthorizationPolicy": "rm:RmAuthorizationPolicy",
    "RmStudyReference": "rm:RmStudyReference",

    "permittedActivity": {"@id": "rm:permittedActivity", "@type": "@id", "@container": "@set"},
    "scope": {"@id": "rm:scope", "@container": "@set"},
    "matrixIri": {"@id": "rm:matrixIri", "@type": "@id"},
    "formIri": {"@id": "rm:formIri", "@type": "@id"},
    "allowedPropertyIris": {"@id": "rm:allowedPropertyIris", "@type": "@id", "@container": "@set"},
    "allowedMethodIris": {"@id": "rm:allowedMethodIris", "@type": "@id", "@container": "@set"},
    "quantityKindIri": {"@id": "rm:quantityKind", "@type": "@id"},
    "range": "rm:range",
    "from": {"@id": "rm:from", "@type": "xsd:decimal"},
    "to": {"@id": "rm:to", "@type": "xsd:decimal"},
    "unit": "rm:unit",

    "authorizationCredential": "rm:authorizationCredential",
    "activityTime": {"@id": "rm:activityTime", "@type": "xsd:dateTime"},

    "materials": {"@id": "rm:materials", "@container": "@list"},
    "materialPropertiesList": {"@id": "rm:materialPropertiesList", "@container": "@list"},
    "isCertified": {"@id": "rm:isCertified", "@type": "xsd:boolean"},
    "results": {"@id": "rm:results", "@container": "@list"},
    "propertyIri": {"@id": "rm:propertyIri", "@type": "@id"},
    "methodIri": {"@id": "rm:methodIri", "@type": "@id"},
    "studyTypeIri": {"@id": "rm:studyTypeIri", "@type": "@id"},
    "studyTypeIris": {"@id": "rm:studyTypeIris", "@type": "@id", "@container": "@set"},
    "outcomeIri": {"@id": "rm:outcomeIri", "@type": "@id"},
    "data": "rm:data",
    "quantity": "rm:quantity",
    "quantityKind": {"@id": "rm:quantityKind", "@type": "@id"},
    "value": {"@id": "rm:value", "@type": "xsd:decimal"},
    "ucumCode": "rm:ucumCode",
    "uncertainty": "rm:uncertainty",
    "expandedUncertainty": {"@id": "rm:expandedUncertainty", "@type": "xsd:decimal"},
    "coverageFactor": {"@id": "rm:coverageFactor", "@type": "xsd:decimal"}
  }
}
` }, { uri: "https://vc4qi.example/schemas/rm/1/accreditation.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-7zIxep5IN0Wfz+nyfE8rizVrhukfwPzWV8mC42uqhS7zREyz8pSEsagn99mxCdoq", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/rm/1/accreditation.json",
  "title": "RM producer accreditation (A)",
  "description": "Experimental VC4QI RM binding v1 fixture schema. Not an external standard.",
  "type": "object",
  "required": [
    "@context",
    "id",
    "type",
    "issuer",
    "validFrom",
    "validUntil",
    "credentialSchema",
    "credentialSubject"
  ],
  "properties": {
    "@context": {
      "const": [
        "https://www.w3.org/ns/credentials/v2",
        "https://vc4qi.example/contexts/rm/1"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "RmAccreditation"
      ]
    },
    "issuer": {
      "type": "string",
      "format": "uri"
    },
    "validFrom": {
      "type": "string",
      "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
    },
    "validUntil": {
      "type": "string",
      "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
    },
    "credentialSchema": {
      "type": "object",
      "required": [
        "id",
        "type"
      ],
      "properties": {
        "id": {
          "const": "https://vc4qi.example/schemas/rm/1/accreditation.json"
        },
        "type": {
          "const": "JsonSchema"
        }
      },
      "additionalProperties": false
    },
    "credentialSubject": {
      "type": "object",
      "required": [
        "id",
        "permittedActivity",
        "scope"
      ],
      "properties": {
        "id": {
          "type": "string",
          "format": "uri"
        },
        "permittedActivity": {
          "type": "array",
          "minItems": 1,
          "uniqueItems": true,
          "items": {
            "enum": [
              "https://vc4qi.example/bindings/rm/1#issueRmCertificate",
              "https://vc4qi.example/bindings/rm/1#maintainRmScope"
            ]
          }
        },
        "scope": {
          "type": "array",
          "minItems": 1,
          "uniqueItems": true,
          "items": {
            "type": "object",
            "required": [
              "id",
              "matrixIri",
              "formIri",
              "allowedPropertyIris",
              "allowedMethodIris",
              "quantityKindIri",
              "range"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uri"
              },
              "matrixIri": {
                "type": "string",
                "format": "uri"
              },
              "formIri": {
                "type": "string",
                "format": "uri"
              },
              "allowedPropertyIris": {
                "type": "array",
                "minItems": 1,
                "uniqueItems": true,
                "items": {
                  "type": "string",
                  "format": "uri"
                }
              },
              "allowedMethodIris": {
                "type": "array",
                "minItems": 1,
                "uniqueItems": true,
                "items": {
                  "type": "string",
                  "format": "uri"
                }
              },
              "quantityKindIri": {
                "type": "string",
                "format": "uri"
              },
              "range": {
                "type": "object",
                "required": [
                  "from",
                  "to",
                  "unit"
                ],
                "properties": {
                  "from": {
                    "type": "string",
                    "pattern": "^(0|[1-9][0-9]*)(\\\\.[0-9]+)?$"
                  },
                  "to": {
                    "type": "string",
                    "pattern": "^(0|[1-9][0-9]*)(\\\\.[0-9]+)?$"
                  },
                  "unit": {
                    "enum": [
                      "mg/kg",
                      "kg/kg"
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          }
        }
      },
      "additionalProperties": false
    },
    "proof": {
      "type": "object",
      "required": [
        "type",
        "cryptosuite",
        "proofPurpose",
        "verificationMethod",
        "created",
        "proofValue"
      ],
      "properties": {
        "type": {
          "const": "DataIntegrityProof"
        },
        "cryptosuite": {
          "const": "eddsa-rdfc-2022"
        },
        "proofPurpose": {
          "const": "assertionMethod"
        },
        "verificationMethod": {
          "type": "string",
          "format": "uri"
        },
        "created": {
          "type": "string",
          "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
        },
        "proofValue": {
          "type": "string",
          "pattern": "^z[1-9A-HJ-NP-Za-km-z]+$"
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}
` }, { uri: "https://vc4qi.example/schemas/rm/1/operational-scope.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-rpBBBGBqgaRWFHDkfnTyMncCVcyOEkmGYIH+6puIcUFLZy3HCYmra+Kfve7PHD9m", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/rm/1/operational-scope.json",
  "title": "RM operational scope (O)",
  "description": "Experimental VC4QI RM binding v1 fixture schema. Not an external standard.",
  "type": "object",
  "required": [
    "@context",
    "id",
    "type",
    "issuer",
    "validFrom",
    "validUntil",
    "credentialSchema",
    "credentialSubject",
    "termsOfUse",
    "relatedResource"
  ],
  "properties": {
    "@context": {
      "const": [
        "https://www.w3.org/ns/credentials/v2",
        "https://vc4qi.example/contexts/rm/1"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "RmOperationalScope"
      ]
    },
    "issuer": {
      "type": "string",
      "format": "uri"
    },
    "validFrom": {
      "type": "string",
      "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
    },
    "validUntil": {
      "type": "string",
      "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
    },
    "credentialSchema": {
      "type": "object",
      "required": [
        "id",
        "type"
      ],
      "properties": {
        "id": {
          "const": "https://vc4qi.example/schemas/rm/1/operational-scope.json"
        },
        "type": {
          "const": "JsonSchema"
        }
      },
      "additionalProperties": false
    },
    "credentialSubject": {
      "type": "object",
      "required": [
        "id",
        "permittedActivity",
        "scope"
      ],
      "properties": {
        "id": {
          "type": "string",
          "format": "uri"
        },
        "permittedActivity": {
          "type": "array",
          "minItems": 1,
          "uniqueItems": true,
          "items": {
            "enum": [
              "https://vc4qi.example/bindings/rm/1#issueRmCertificate"
            ]
          }
        },
        "scope": {
          "type": "array",
          "minItems": 1,
          "uniqueItems": true,
          "items": {
            "type": "object",
            "required": [
              "id",
              "matrixIri",
              "formIri",
              "allowedPropertyIris",
              "allowedMethodIris",
              "quantityKindIri",
              "range"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uri"
              },
              "matrixIri": {
                "type": "string",
                "format": "uri"
              },
              "formIri": {
                "type": "string",
                "format": "uri"
              },
              "allowedPropertyIris": {
                "type": "array",
                "minItems": 1,
                "uniqueItems": true,
                "items": {
                  "type": "string",
                  "format": "uri"
                }
              },
              "allowedMethodIris": {
                "type": "array",
                "minItems": 1,
                "uniqueItems": true,
                "items": {
                  "type": "string",
                  "format": "uri"
                }
              },
              "quantityKindIri": {
                "type": "string",
                "format": "uri"
              },
              "range": {
                "type": "object",
                "required": [
                  "from",
                  "to",
                  "unit"
                ],
                "properties": {
                  "from": {
                    "type": "string",
                    "pattern": "^(0|[1-9][0-9]*)(\\\\.[0-9]+)?$"
                  },
                  "to": {
                    "type": "string",
                    "pattern": "^(0|[1-9][0-9]*)(\\\\.[0-9]+)?$"
                  },
                  "unit": {
                    "enum": [
                      "mg/kg",
                      "kg/kg"
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          }
        }
      },
      "additionalProperties": false
    },
    "termsOfUse": {
      "type": "array",
      "minItems": 1,
      "maxItems": 1,
      "items": {
        "type": "object",
        "required": [
          "type",
          "authorizationCredential"
        ],
        "properties": {
          "type": {
            "const": "RmAuthorizationPolicy"
          },
          "authorizationCredential": {
            "type": "object",
            "required": [
              "id"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false
          }
        },
        "additionalProperties": false
      }
    },
    "relatedResource": {
      "type": "array",
      "minItems": 1,
      "uniqueItems": true,
      "items": {
        "type": "object",
        "required": [
          "id",
          "digestSRI"
        ],
        "properties": {
          "id": {
            "type": "string",
            "format": "uri"
          },
          "digestSRI": {
            "type": "string",
            "pattern": "^sha384-[A-Za-z0-9+/]{64}$"
          }
        },
        "additionalProperties": false
      }
    },
    "proof": {
      "type": "object",
      "required": [
        "type",
        "cryptosuite",
        "proofPurpose",
        "verificationMethod",
        "created",
        "proofValue"
      ],
      "properties": {
        "type": {
          "const": "DataIntegrityProof"
        },
        "cryptosuite": {
          "const": "eddsa-rdfc-2022"
        },
        "proofPurpose": {
          "const": "assertionMethod"
        },
        "verificationMethod": {
          "type": "string",
          "format": "uri"
        },
        "created": {
          "type": "string",
          "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
        },
        "proofValue": {
          "type": "string",
          "pattern": "^z[1-9A-HJ-NP-Za-km-z]+$"
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}
` }, { uri: "https://vc4qi.example/schemas/rm/1/certificate.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-tIdFTFgX9Np0dYM1J7NnSQFu3ccBvIBHaOLApmjeBu5Nmn/j984l7BEOVZvWDySi", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/rm/1/certificate.json",
  "title": "RM certificate (D)",
  "description": "Experimental VC4QI RM binding v1 fixture schema. Not an external standard.",
  "type": "object",
  "required": [
    "@context",
    "id",
    "type",
    "issuer",
    "validFrom",
    "validUntil",
    "credentialSchema",
    "credentialSubject",
    "termsOfUse",
    "evidence",
    "relatedResource"
  ],
  "properties": {
    "@context": {
      "const": [
        "https://www.w3.org/ns/credentials/v2",
        "https://vc4qi.example/contexts/rm/1"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "RmCertificate"
      ]
    },
    "issuer": {
      "type": "string",
      "format": "uri"
    },
    "validFrom": {
      "type": "string",
      "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
    },
    "validUntil": {
      "type": "string",
      "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
    },
    "credentialSchema": {
      "type": "object",
      "required": [
        "id",
        "type"
      ],
      "properties": {
        "id": {
          "const": "https://vc4qi.example/schemas/rm/1/certificate.json"
        },
        "type": {
          "const": "JsonSchema"
        }
      },
      "additionalProperties": false
    },
    "credentialSubject": {
      "type": "object",
      "required": [
        "id",
        "activityTime",
        "materials",
        "materialPropertiesList"
      ],
      "properties": {
        "id": {
          "type": "string",
          "format": "uri"
        },
        "activityTime": {
          "type": "string",
          "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
        },
        "materials": {
          "type": "array",
          "minItems": 1,
          "maxItems": 1,
          "items": {
            "type": "object",
            "required": [
              "matrixIri",
              "formIri"
            ],
            "properties": {
              "matrixIri": {
                "type": "string",
                "format": "uri"
              },
              "formIri": {
                "type": "string",
                "format": "uri"
              },
              "name": {
                "type": "string",
                "minLength": 1
              }
            },
            "additionalProperties": false
          }
        },
        "materialPropertiesList": {
          "type": "array",
          "minItems": 1,
          "items": {
            "type": "object",
            "required": [
              "isCertified",
              "results"
            ],
            "properties": {
              "isCertified": {
                "type": "boolean"
              },
              "results": {
                "type": "array",
                "minItems": 1,
                "items": {
                  "type": "object",
                  "required": [
                    "propertyIri",
                    "methodIri",
                    "data"
                  ],
                  "properties": {
                    "propertyIri": {
                      "type": "string",
                      "format": "uri"
                    },
                    "methodIri": {
                      "type": "string",
                      "format": "uri"
                    },
                    "data": {
                      "type": "object",
                      "required": [
                        "quantity"
                      ],
                      "properties": {
                        "quantity": {
                          "type": "object",
                          "required": [
                            "quantityKind",
                            "value",
                            "unit",
                            "uncertainty"
                          ],
                          "properties": {
                            "quantityKind": {
                              "type": "string",
                              "format": "uri"
                            },
                            "value": {
                              "type": "string",
                              "pattern": "^(0|[1-9][0-9]*)(\\\\.[0-9]+)?$"
                            },
                            "unit": {
                              "type": "object",
                              "required": [
                                "ucumCode"
                              ],
                              "properties": {
                                "ucumCode": {
                                  "enum": [
                                    "mg/kg",
                                    "kg/kg"
                                  ]
                                }
                              },
                              "additionalProperties": false
                            },
                            "uncertainty": {
                              "type": "object",
                              "required": [
                                "expandedUncertainty",
                                "coverageFactor"
                              ],
                              "properties": {
                                "expandedUncertainty": {
                                  "type": "string",
                                  "pattern": "^(0|[1-9][0-9]*)(\\\\.[0-9]+)?$"
                                },
                                "coverageFactor": {
                                  "type": "string",
                                  "pattern": "^(0|[1-9][0-9]*)(\\\\.[0-9]+)?$"
                                }
                              },
                              "additionalProperties": false
                            }
                          },
                          "additionalProperties": false
                        }
                      },
                      "additionalProperties": false
                    }
                  },
                  "additionalProperties": false
                }
              }
            },
            "additionalProperties": false
          }
        }
      },
      "additionalProperties": false
    },
    "termsOfUse": {
      "type": "array",
      "minItems": 1,
      "maxItems": 1,
      "items": {
        "type": "object",
        "required": [
          "type",
          "authorizationCredential"
        ],
        "properties": {
          "type": {
            "const": "RmAuthorizationPolicy"
          },
          "authorizationCredential": {
            "type": "object",
            "required": [
              "id"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false
          }
        },
        "additionalProperties": false
      }
    },
    "evidence": {
      "type": "array",
      "minItems": 1,
      "uniqueItems": true,
      "items": {
        "type": "object",
        "required": [
          "id",
          "type"
        ],
        "properties": {
          "id": {
            "type": "string",
            "format": "uri"
          },
          "type": {
            "const": "RmStudyReference"
          }
        },
        "additionalProperties": false
      }
    },
    "relatedResource": {
      "type": "array",
      "minItems": 1,
      "uniqueItems": true,
      "items": {
        "type": "object",
        "required": [
          "id",
          "digestSRI"
        ],
        "properties": {
          "id": {
            "type": "string",
            "format": "uri"
          },
          "digestSRI": {
            "type": "string",
            "pattern": "^sha384-[A-Za-z0-9+/]{64}$"
          }
        },
        "additionalProperties": false
      }
    },
    "proof": {
      "type": "object",
      "required": [
        "type",
        "cryptosuite",
        "proofPurpose",
        "verificationMethod",
        "created",
        "proofValue"
      ],
      "properties": {
        "type": {
          "const": "DataIntegrityProof"
        },
        "cryptosuite": {
          "const": "eddsa-rdfc-2022"
        },
        "proofPurpose": {
          "const": "assertionMethod"
        },
        "verificationMethod": {
          "type": "string",
          "format": "uri"
        },
        "created": {
          "type": "string",
          "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
        },
        "proofValue": {
          "type": "string",
          "pattern": "^z[1-9A-HJ-NP-Za-km-z]+$"
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}
` }, { uri: "https://vc4qi.example/schemas/rm/1/study.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-CWstTTdy5D85Dr3RDxujun3MbVnYtf0y8Fx3AVZS1DckgI0La/6z1IDLnG36YJ8m", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/rm/1/study.json",
  "title": "RM homogeneity/stability study (S)",
  "description": "Experimental VC4QI RM binding v1 fixture schema. Not an external standard.",
  "type": "object",
  "required": [
    "@context",
    "id",
    "type",
    "issuer",
    "validFrom",
    "validUntil",
    "credentialSchema",
    "credentialSubject",
    "termsOfUse",
    "relatedResource"
  ],
  "properties": {
    "@context": {
      "const": [
        "https://www.w3.org/ns/credentials/v2",
        "https://vc4qi.example/contexts/rm/1"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "RmStudy"
      ]
    },
    "issuer": {
      "type": "string",
      "format": "uri"
    },
    "validFrom": {
      "type": "string",
      "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
    },
    "validUntil": {
      "type": "string",
      "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
    },
    "credentialSchema": {
      "type": "object",
      "required": [
        "id",
        "type"
      ],
      "properties": {
        "id": {
          "const": "https://vc4qi.example/schemas/rm/1/study.json"
        },
        "type": {
          "const": "JsonSchema"
        }
      },
      "additionalProperties": false
    },
    "credentialSubject": {
      "type": "object",
      "required": [
        "id",
        "activityTime",
        "studyTypeIri",
        "propertyIri",
        "matrixIri",
        "outcomeIri"
      ],
      "properties": {
        "id": {
          "type": "string",
          "format": "uri"
        },
        "activityTime": {
          "type": "string",
          "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
        },
        "studyTypeIri": {
          "type": "string",
          "format": "uri"
        },
        "propertyIri": {
          "type": "string",
          "format": "uri"
        },
        "matrixIri": {
          "type": "string",
          "format": "uri"
        },
        "outcomeIri": {
          "type": "string",
          "format": "uri"
        }
      },
      "additionalProperties": false
    },
    "termsOfUse": {
      "type": "array",
      "minItems": 1,
      "maxItems": 1,
      "items": {
        "type": "object",
        "required": [
          "type",
          "authorizationCredential"
        ],
        "properties": {
          "type": {
            "const": "RmAuthorizationPolicy"
          },
          "authorizationCredential": {
            "type": "object",
            "required": [
              "id"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uri"
              }
            },
            "additionalProperties": false
          }
        },
        "additionalProperties": false
      }
    },
    "relatedResource": {
      "type": "array",
      "minItems": 1,
      "uniqueItems": true,
      "items": {
        "type": "object",
        "required": [
          "id",
          "digestSRI"
        ],
        "properties": {
          "id": {
            "type": "string",
            "format": "uri"
          },
          "digestSRI": {
            "type": "string",
            "pattern": "^sha384-[A-Za-z0-9+/]{64}$"
          }
        },
        "additionalProperties": false
      }
    },
    "proof": {
      "type": "object",
      "required": [
        "type",
        "cryptosuite",
        "proofPurpose",
        "verificationMethod",
        "created",
        "proofValue"
      ],
      "properties": {
        "type": {
          "const": "DataIntegrityProof"
        },
        "cryptosuite": {
          "const": "eddsa-rdfc-2022"
        },
        "proofPurpose": {
          "const": "assertionMethod"
        },
        "verificationMethod": {
          "type": "string",
          "format": "uri"
        },
        "created": {
          "type": "string",
          "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
        },
        "proofValue": {
          "type": "string",
          "pattern": "^z[1-9A-HJ-NP-Za-km-z]+$"
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}
` }, { uri: "https://vc4qi.example/schemas/rm/1/lab-authority.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-ceXcVxVa4latPGhYnNHdxQIDDCPhEZDy83xZpdKDX+U+BujDtmv+TEH9L7dVihVW", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/rm/1/lab-authority.json",
  "title": "Study laboratory authority (H)",
  "description": "Experimental VC4QI RM binding v1 fixture schema. Not an external standard.",
  "type": "object",
  "required": [
    "@context",
    "id",
    "type",
    "issuer",
    "validFrom",
    "validUntil",
    "credentialSchema",
    "credentialSubject"
  ],
  "properties": {
    "@context": {
      "const": [
        "https://www.w3.org/ns/credentials/v2",
        "https://vc4qi.example/contexts/rm/1"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "RmLabAuthority"
      ]
    },
    "issuer": {
      "type": "string",
      "format": "uri"
    },
    "validFrom": {
      "type": "string",
      "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
    },
    "validUntil": {
      "type": "string",
      "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
    },
    "credentialSchema": {
      "type": "object",
      "required": [
        "id",
        "type"
      ],
      "properties": {
        "id": {
          "const": "https://vc4qi.example/schemas/rm/1/lab-authority.json"
        },
        "type": {
          "const": "JsonSchema"
        }
      },
      "additionalProperties": false
    },
    "credentialSubject": {
      "type": "object",
      "required": [
        "id",
        "permittedActivity",
        "scope"
      ],
      "properties": {
        "id": {
          "type": "string",
          "format": "uri"
        },
        "permittedActivity": {
          "type": "array",
          "minItems": 1,
          "uniqueItems": true,
          "items": {
            "enum": [
              "https://vc4qi.example/bindings/rm/1#issueRmStudy"
            ]
          }
        },
        "scope": {
          "type": "array",
          "minItems": 1,
          "uniqueItems": true,
          "items": {
            "type": "object",
            "required": [
              "id",
              "matrixIri",
              "allowedPropertyIris",
              "studyTypeIris"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uri"
              },
              "matrixIri": {
                "type": "string",
                "format": "uri"
              },
              "allowedPropertyIris": {
                "type": "array",
                "minItems": 1,
                "uniqueItems": true,
                "items": {
                  "type": "string",
                  "format": "uri"
                }
              },
              "studyTypeIris": {
                "type": "array",
                "minItems": 1,
                "uniqueItems": true,
                "items": {
                  "type": "string",
                  "format": "uri"
                }
              }
            },
            "additionalProperties": false
          }
        }
      },
      "additionalProperties": false
    },
    "proof": {
      "type": "object",
      "required": [
        "type",
        "cryptosuite",
        "proofPurpose",
        "verificationMethod",
        "created",
        "proofValue"
      ],
      "properties": {
        "type": {
          "const": "DataIntegrityProof"
        },
        "cryptosuite": {
          "const": "eddsa-rdfc-2022"
        },
        "proofPurpose": {
          "const": "assertionMethod"
        },
        "verificationMethod": {
          "type": "string",
          "format": "uri"
        },
        "created": {
          "type": "string",
          "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
        },
        "proofValue": {
          "type": "string",
          "pattern": "^z[1-9A-HJ-NP-Za-km-z]+$"
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}
` }, { uri: "https://vc4qi.example/schemas/rm/1/authorization-policy.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-KJlurJ5hEIs0xjUxO8HF/Rjo/JNK0o+L2Wj6Ey5PWJsu+seBRLmcwxG/EUucM7pp", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/rm/1/authorization-policy.json",
  "title": "RM authorization policy entry in termsOfUse",
  "type": "object",
  "required": [
    "type",
    "authorizationCredential"
  ],
  "properties": {
    "type": {
      "const": "RmAuthorizationPolicy"
    },
    "authorizationCredential": {
      "type": "object",
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "type": "string",
          "format": "uri"
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}
` }, { uri: "https://vc4qi.example/schemas/rm/1/study-reference.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-DrU3OpDyZW6xFW/ctX/9c/KWJT9Oi2jfKIL7HSwGNQjVUhR1V1nlfRzkeLC0lxQm", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/rm/1/study-reference.json",
  "title": "RM required-study reference entry in evidence",
  "type": "object",
  "required": [
    "id",
    "type"
  ],
  "properties": {
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": "RmStudyReference"
    }
  },
  "additionalProperties": false
}
` }, { uri: "https://nab.vc4qi.example/controller", mediaType: "application/json", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-JN9CUEm46w9tiQyEqtklb0/EIVmBU6rnd5OEo8Cvus6gbhdWPAuaEtP9g7AYRAcd", text: `{
  "@context": "https://www.w3.org/ns/cid/v1",
  "id": "https://nab.vc4qi.example/controller",
  "verificationMethod": [
    {
      "id": "https://nab.vc4qi.example/controller#key-1",
      "type": "Multikey",
      "controller": "https://nab.vc4qi.example/controller",
      "publicKeyMultibase": "z6MkpUmf1eA7Ge6yJdfDkRyADs7yQ86SEw5Gi2uzm2MuDuEc"
    }
  ],
  "assertionMethod": [
    "https://nab.vc4qi.example/controller#key-1"
  ]
}
` }, { uri: "https://producer.vc4qi.example/controller", mediaType: "application/json", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-wDW71oH10Q/2d42008HOLrxD/0gdIXETBs95PLNO0pSARB/+VOL751YglxoMIwXo", text: `{
  "@context": "https://www.w3.org/ns/cid/v1",
  "id": "https://producer.vc4qi.example/controller",
  "verificationMethod": [
    {
      "id": "https://producer.vc4qi.example/controller#key-1",
      "type": "Multikey",
      "controller": "https://producer.vc4qi.example/controller",
      "publicKeyMultibase": "z6MkrnrMDqELd6X47F2jVotBjgtnSu8FNZDgVpRsxnZeX8Kq"
    }
  ],
  "assertionMethod": [
    "https://producer.vc4qi.example/controller#key-1"
  ]
}
` }, { uri: "https://lab.vc4qi.example/controller", mediaType: "application/json", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-6/dmFJ9/4URc5YhNJ4MQDEskjj2p7CL+P08q7J0VnSvD8iz2Hj0EJZ+/HkOBways", text: `{
  "@context": "https://www.w3.org/ns/cid/v1",
  "id": "https://lab.vc4qi.example/controller",
  "verificationMethod": [
    {
      "id": "https://lab.vc4qi.example/controller#key-1",
      "type": "Multikey",
      "controller": "https://lab.vc4qi.example/controller",
      "publicKeyMultibase": "z6MkrrqWhTvhGUHjb7mWXr7uC2bb2911g8jvTFiR1a4chh1b"
    }
  ],
  "assertionMethod": [
    "https://lab.vc4qi.example/controller#key-1"
  ]
}
` }, { uri: "https://nab.vc4qi.example/credentials/A", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-9IiXskR9lVIOYpA84MxIjWSwxr1EBkphpyiDGLhP20yAoi/zsFhqNWBhGnVdt6rE", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/rm/1"
  ],
  "id": "https://nab.vc4qi.example/credentials/A",
  "type": [
    "VerifiableCredential",
    "RmAccreditation"
  ],
  "issuer": "https://nab.vc4qi.example/controller",
  "validFrom": "2025-01-01T00:00:00Z",
  "validUntil": "2030-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/rm/1/accreditation.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://producer.vc4qi.example/controller",
    "permittedActivity": [
      "https://vc4qi.example/bindings/rm/1#issueRmCertificate",
      "https://vc4qi.example/bindings/rm/1#maintainRmScope"
    ],
    "scope": [
      {
        "id": "https://nab.vc4qi.example/credentials/A#scope-as",
        "matrixIri": "https://vc4qi.example/bindings/rm/1#CuZn39Pb3",
        "formIri": "https://vc4qi.example/bindings/rm/1#Disc",
        "allowedPropertyIris": [
          "https://vc4qi.example/bindings/rm/1#As"
        ],
        "allowedMethodIris": [
          "https://vc4qi.example/bindings/rm/1#M1",
          "https://vc4qi.example/bindings/rm/1#M2"
        ],
        "quantityKindIri": "https://vc4qi.example/bindings/rm/1#MassFraction",
        "range": {
          "from": "50",
          "to": "500",
          "unit": "mg/kg"
        }
      }
    ]
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://nab.vc4qi.example/controller#key-1",
    "created": "2025-01-01T00:00:00Z",
    "proofValue": "z35ZZJx2eiJTgGWzEC6xYkVf5vcSxjF2KXKPaSMAQQD4dJTjizpfmUJoS8PQNLnUCcU1fsoVjw1DeTEek93QAVNB1"
  }
}
` }, { uri: "https://nab.vc4qi.example/credentials/H", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-828J57k7rGoxe3pY5/asFg5BWK3ITEwEKYiMm8Hcbh515IcuZq7AZjQZowkkfuYh", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/rm/1"
  ],
  "id": "https://nab.vc4qi.example/credentials/H",
  "type": [
    "VerifiableCredential",
    "RmLabAuthority"
  ],
  "issuer": "https://nab.vc4qi.example/controller",
  "validFrom": "2025-01-01T00:00:00Z",
  "validUntil": "2030-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/rm/1/lab-authority.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://lab.vc4qi.example/controller",
    "permittedActivity": [
      "https://vc4qi.example/bindings/rm/1#issueRmStudy"
    ],
    "scope": [
      {
        "id": "https://nab.vc4qi.example/credentials/H#scope-homogeneity",
        "matrixIri": "https://vc4qi.example/bindings/rm/1#CuZn39Pb3",
        "allowedPropertyIris": [
          "https://vc4qi.example/bindings/rm/1#As"
        ],
        "studyTypeIris": [
          "https://vc4qi.example/bindings/rm/1#Homogeneity"
        ]
      }
    ]
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://nab.vc4qi.example/controller#key-1",
    "created": "2025-01-01T00:00:00Z",
    "proofValue": "z31RFWbwkpWt46wpQjEJn2KB56KHPnEcTp3e5tMBJ34jwZdY7jnEWX4eg7tNEFDxFMvY9p5fnipT4oCeimaCggj35"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/O", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-HN+O7zuYmhdMtmX1N2Ic23VHSin3NTol6zmpk/hRwSRk+IwJ+S83aOM4v9lED1GY", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/rm/1"
  ],
  "id": "https://producer.vc4qi.example/credentials/O",
  "type": [
    "VerifiableCredential",
    "RmOperationalScope"
  ],
  "issuer": "https://producer.vc4qi.example/controller",
  "validFrom": "2025-06-01T00:00:00Z",
  "validUntil": "2030-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/rm/1/operational-scope.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://producer.vc4qi.example/controller",
    "permittedActivity": [
      "https://vc4qi.example/bindings/rm/1#issueRmCertificate"
    ],
    "scope": [
      {
        "id": "https://producer.vc4qi.example/credentials/O#scope-as-m1",
        "matrixIri": "https://vc4qi.example/bindings/rm/1#CuZn39Pb3",
        "formIri": "https://vc4qi.example/bindings/rm/1#Disc",
        "allowedPropertyIris": [
          "https://vc4qi.example/bindings/rm/1#As"
        ],
        "allowedMethodIris": [
          "https://vc4qi.example/bindings/rm/1#M1"
        ],
        "quantityKindIri": "https://vc4qi.example/bindings/rm/1#MassFraction",
        "range": {
          "from": "50",
          "to": "500",
          "unit": "mg/kg"
        }
      }
    ]
  },
  "termsOfUse": [
    {
      "type": "RmAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://nab.vc4qi.example/credentials/A"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://nab.vc4qi.example/credentials/A",
      "digestSRI": "sha384-9IiXskR9lVIOYpA84MxIjWSwxr1EBkphpyiDGLhP20yAoi/zsFhqNWBhGnVdt6rE"
    }
  ],
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://producer.vc4qi.example/controller#key-1",
    "created": "2025-06-01T00:00:00Z",
    "proofValue": "z3sn6k1qbx5fAVUaY8oYnSzQLmJUoZpSPp8WYpvtt5ZQxepyYnpwADpe3JSkPZEgyF5GnjZYVHUuUmg3Uihn9Umx7"
  }
}
` }, { uri: "https://lab.vc4qi.example/credentials/S", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-xybuG9y0KT/XWASXf7HKAu0yDfZ14ftn11Z5gSxMBvDROOphvDBcJDCxMSvPF/eN", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/rm/1"
  ],
  "id": "https://lab.vc4qi.example/credentials/S",
  "type": [
    "VerifiableCredential",
    "RmStudy"
  ],
  "issuer": "https://lab.vc4qi.example/controller",
  "validFrom": "2026-01-15T00:00:00Z",
  "validUntil": "2031-01-15T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/rm/1/study.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "urn:vc4qi-example:batch:cuzn39pb3-disc-lot-1",
    "activityTime": "2026-01-10T00:00:00Z",
    "studyTypeIri": "https://vc4qi.example/bindings/rm/1#Homogeneity",
    "propertyIri": "https://vc4qi.example/bindings/rm/1#As",
    "matrixIri": "https://vc4qi.example/bindings/rm/1#CuZn39Pb3",
    "outcomeIri": "https://vc4qi.example/bindings/rm/1#Homogeneous"
  },
  "termsOfUse": [
    {
      "type": "RmAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://nab.vc4qi.example/credentials/H"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://nab.vc4qi.example/credentials/H",
      "digestSRI": "sha384-828J57k7rGoxe3pY5/asFg5BWK3ITEwEKYiMm8Hcbh515IcuZq7AZjQZowkkfuYh"
    }
  ],
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://lab.vc4qi.example/controller#key-1",
    "created": "2026-01-15T00:00:00Z",
    "proofValue": "zK3uczZnSHvkBus1tk4eMuSp9ZNz4YSWw66qGfpXdUchJ7CTG9vmRpKC1efJvWuvZF9CMFdxEKrDbLnyVZa8iwgg"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D178", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-/OY+ZE8k+vk41I2/+GPXr63cvr8S5jPh+bZYCx9/Ew0iSBkKXu3tImRYmObOAzJ6", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/rm/1"
  ],
  "id": "https://producer.vc4qi.example/credentials/D178",
  "type": [
    "VerifiableCredential",
    "RmCertificate"
  ],
  "issuer": "https://producer.vc4qi.example/controller",
  "validFrom": "2026-02-01T00:00:00Z",
  "validUntil": "2028-02-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/rm/1/certificate.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "urn:vc4qi-example:batch:cuzn39pb3-disc-lot-1",
    "activityTime": "2026-01-20T00:00:00Z",
    "materials": [
      {
        "matrixIri": "https://vc4qi.example/bindings/rm/1#CuZn39Pb3",
        "formIri": "https://vc4qi.example/bindings/rm/1#Disc",
        "name": "Fictional CuZn39Pb3 brass disc"
      }
    ],
    "materialPropertiesList": [
      {
        "isCertified": true,
        "results": [
          {
            "propertyIri": "https://vc4qi.example/bindings/rm/1#As",
            "methodIri": "https://vc4qi.example/bindings/rm/1#M1",
            "data": {
              "quantity": {
                "quantityKind": "https://vc4qi.example/bindings/rm/1#MassFraction",
                "value": "178",
                "unit": {
                  "ucumCode": "mg/kg"
                },
                "uncertainty": {
                  "expandedUncertainty": "5",
                  "coverageFactor": "2"
                }
              }
            }
          }
        ]
      }
    ]
  },
  "termsOfUse": [
    {
      "type": "RmAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://producer.vc4qi.example/credentials/O"
      }
    }
  ],
  "evidence": [
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "type": "RmStudyReference"
    }
  ],
  "relatedResource": [
    {
      "id": "https://producer.vc4qi.example/credentials/O",
      "digestSRI": "sha384-HN+O7zuYmhdMtmX1N2Ic23VHSin3NTol6zmpk/hRwSRk+IwJ+S83aOM4v9lED1GY"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "digestSRI": "sha384-xybuG9y0KT/XWASXf7HKAu0yDfZ14ftn11Z5gSxMBvDROOphvDBcJDCxMSvPF/eN"
    }
  ],
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://producer.vc4qi.example/controller#key-1",
    "created": "2026-02-01T00:00:00Z",
    "proofValue": "z4wJL7sN4HB7kQVE2P3WiruxsEUZZmk1gLbha148miXALvRAzAboHcGeT4PrvHpUaRJvWnXkfDD8ELGKV5zPztJYW"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D197", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-TsIEaedBujWCXCODetr90esDWAXwin9tC9Zf42nuo6xLVSnTt12+lbjb7lhGge9c", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/rm/1"
  ],
  "id": "https://producer.vc4qi.example/credentials/D197",
  "type": [
    "VerifiableCredential",
    "RmCertificate"
  ],
  "issuer": "https://producer.vc4qi.example/controller",
  "validFrom": "2026-02-01T00:00:00Z",
  "validUntil": "2028-02-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/rm/1/certificate.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "urn:vc4qi-example:batch:cuzn39pb3-disc-lot-1",
    "activityTime": "2026-01-20T00:00:00Z",
    "materials": [
      {
        "matrixIri": "https://vc4qi.example/bindings/rm/1#CuZn39Pb3",
        "formIri": "https://vc4qi.example/bindings/rm/1#Disc",
        "name": "Fictional CuZn39Pb3 brass disc"
      }
    ],
    "materialPropertiesList": [
      {
        "isCertified": true,
        "results": [
          {
            "propertyIri": "https://vc4qi.example/bindings/rm/1#As",
            "methodIri": "https://vc4qi.example/bindings/rm/1#M1",
            "data": {
              "quantity": {
                "quantityKind": "https://vc4qi.example/bindings/rm/1#MassFraction",
                "value": "197",
                "unit": {
                  "ucumCode": "mg/kg"
                },
                "uncertainty": {
                  "expandedUncertainty": "5",
                  "coverageFactor": "2"
                }
              }
            }
          }
        ]
      }
    ]
  },
  "termsOfUse": [
    {
      "type": "RmAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://producer.vc4qi.example/credentials/O"
      }
    }
  ],
  "evidence": [
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "type": "RmStudyReference"
    }
  ],
  "relatedResource": [
    {
      "id": "https://producer.vc4qi.example/credentials/O",
      "digestSRI": "sha384-HN+O7zuYmhdMtmX1N2Ic23VHSin3NTol6zmpk/hRwSRk+IwJ+S83aOM4v9lED1GY"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "digestSRI": "sha384-xybuG9y0KT/XWASXf7HKAu0yDfZ14ftn11Z5gSxMBvDROOphvDBcJDCxMSvPF/eN"
    }
  ],
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://producer.vc4qi.example/controller#key-1",
    "created": "2026-02-01T00:00:00Z",
    "proofValue": "z3tY6oQQZD1BRmT74qXL4GKsQynqPav75JW985Nv5qyf4QTLr97KH38CRgRLcH3kvELKg7Db1GVCpR59i6pcbyoW1"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D520", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-IGdgOLQxhhvQIYA+CV07RtrfTdOadITyxzS1eoar/rgiS7/W6h10fLN48OxhDw+3", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/rm/1"
  ],
  "id": "https://producer.vc4qi.example/credentials/D520",
  "type": [
    "VerifiableCredential",
    "RmCertificate"
  ],
  "issuer": "https://producer.vc4qi.example/controller",
  "validFrom": "2026-02-01T00:00:00Z",
  "validUntil": "2028-02-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/rm/1/certificate.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "urn:vc4qi-example:batch:cuzn39pb3-disc-lot-1",
    "activityTime": "2026-01-20T00:00:00Z",
    "materials": [
      {
        "matrixIri": "https://vc4qi.example/bindings/rm/1#CuZn39Pb3",
        "formIri": "https://vc4qi.example/bindings/rm/1#Disc",
        "name": "Fictional CuZn39Pb3 brass disc"
      }
    ],
    "materialPropertiesList": [
      {
        "isCertified": true,
        "results": [
          {
            "propertyIri": "https://vc4qi.example/bindings/rm/1#As",
            "methodIri": "https://vc4qi.example/bindings/rm/1#M1",
            "data": {
              "quantity": {
                "quantityKind": "https://vc4qi.example/bindings/rm/1#MassFraction",
                "value": "520",
                "unit": {
                  "ucumCode": "mg/kg"
                },
                "uncertainty": {
                  "expandedUncertainty": "5",
                  "coverageFactor": "2"
                }
              }
            }
          }
        ]
      }
    ]
  },
  "termsOfUse": [
    {
      "type": "RmAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://producer.vc4qi.example/credentials/O"
      }
    }
  ],
  "evidence": [
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "type": "RmStudyReference"
    }
  ],
  "relatedResource": [
    {
      "id": "https://producer.vc4qi.example/credentials/O",
      "digestSRI": "sha384-HN+O7zuYmhdMtmX1N2Ic23VHSin3NTol6zmpk/hRwSRk+IwJ+S83aOM4v9lED1GY"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "digestSRI": "sha384-xybuG9y0KT/XWASXf7HKAu0yDfZ14ftn11Z5gSxMBvDROOphvDBcJDCxMSvPF/eN"
    }
  ],
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://producer.vc4qi.example/controller#key-1",
    "created": "2026-02-01T00:00:00Z",
    "proofValue": "z4f4HnDmFneyjrRdnV8c7aa7RZR8B2d7R1DubYixDVnyyNVQ6AB3HWFdUz1RPid5hrNbFPowCYJCQFPDbeNddiD7J"
  }
}
` }] };
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Do(e) {
  return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function si(e, ...t) {
  if (!Do(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function Si(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Mo(e, t) {
  si(e);
  const i = t.outputLen;
  if (e.length < i)
    throw new Error("digestInto() expects output buffer of length at least " + i);
}
function St(...e) {
  for (let t = 0; t < e.length; t++)
    e[t].fill(0);
}
function Qn(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function je(e, t) {
  return e << 32 - t | e >>> t;
}
function Lo(e) {
  if (typeof e != "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(e));
}
function Qa(e) {
  return typeof e == "string" && (e = Lo(e)), si(e), e;
}
class Co {
}
function ai(e) {
  const t = (a) => e().update(Qa(a)).digest(), i = e();
  return t.outputLen = i.outputLen, t.blockLen = i.blockLen, t.create = () => e(), t;
}
function Uo(e, t, i, a) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, i, a);
  const h = BigInt(32), n = BigInt(4294967295), r = Number(i >> h & n), o = Number(i & n), c = a ? 4 : 0, m = a ? 0 : 4;
  e.setUint32(t + c, r, a), e.setUint32(t + m, o, a);
}
function Vo(e, t, i) {
  return e & t ^ ~e & i;
}
function zo(e, t, i) {
  return e & t ^ e & i ^ t & i;
}
class Ya extends Co {
  constructor(t, i, a, h) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = i, this.padOffset = a, this.isLE = h, this.buffer = new Uint8Array(t), this.view = Qn(this.buffer);
  }
  update(t) {
    Si(this), t = Qa(t), si(t);
    const { view: i, buffer: a, blockLen: h } = this, n = t.length;
    for (let r = 0; r < n; ) {
      const o = Math.min(h - this.pos, n - r);
      if (o === h) {
        const c = Qn(t);
        for (; h <= n - r; r += h)
          this.process(c, r);
        continue;
      }
      a.set(t.subarray(r, r + o), this.pos), this.pos += o, r += o, this.pos === h && (this.process(i, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    Si(this), Mo(t, this), this.finished = !0;
    const { buffer: i, view: a, blockLen: h, isLE: n } = this;
    let { pos: r } = this;
    i[r++] = 128, St(this.buffer.subarray(r)), this.padOffset > h - r && (this.process(a, 0), r = 0);
    for (let w = r; w < h; w++)
      i[w] = 0;
    Uo(a, h - 8, BigInt(this.length * 8), n), this.process(a, 0);
    const o = Qn(t), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const m = c / 4, v = this.get();
    if (m > v.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let w = 0; w < m; w++)
      o.setUint32(4 * w, v[w], n);
  }
  digest() {
    const { buffer: t, outputLen: i } = this;
    this.digestInto(t);
    const a = t.slice(0, i);
    return this.destroy(), a;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: i, buffer: a, length: h, finished: n, destroyed: r, pos: o } = this;
    return t.destroyed = r, t.finished = n, t.length = h, t.pos = o, h % i && t.buffer.set(a), t;
  }
  clone() {
    return this._cloneInto();
  }
}
const Ue = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), ue = /* @__PURE__ */ Uint32Array.from([
  3418070365,
  3238371032,
  1654270250,
  914150663,
  2438529370,
  812702999,
  355462360,
  4144912697,
  1731405415,
  4290775857,
  2394180231,
  1750603025,
  3675008525,
  1694076839,
  1203062813,
  3204075428
]), fe = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  4089235720,
  3144134277,
  2227873595,
  1013904242,
  4271175723,
  2773480762,
  1595750129,
  1359893119,
  2917565137,
  2600822924,
  725511199,
  528734635,
  4215389547,
  1541459225,
  327033209
]), jt = /* @__PURE__ */ BigInt(2 ** 32 - 1), Ii = /* @__PURE__ */ BigInt(32);
function Fo(e, t = !1) {
  return t ? { h: Number(e & jt), l: Number(e >> Ii & jt) } : { h: Number(e >> Ii & jt) | 0, l: Number(e & jt) | 0 };
}
function Ho(e, t = !1) {
  const i = e.length;
  let a = new Uint32Array(i), h = new Uint32Array(i);
  for (let n = 0; n < i; n++) {
    const { h: r, l: o } = Fo(e[n], t);
    [a[n], h[n]] = [r, o];
  }
  return [a, h];
}
const xi = (e, t, i) => e >>> i, Ei = (e, t, i) => e << 32 - i | t >>> i, Qe = (e, t, i) => e >>> i | t << 32 - i, Ye = (e, t, i) => e << 32 - i | t >>> i, Nt = (e, t, i) => e << 64 - i | t >>> i - 32, Ot = (e, t, i) => e >>> i - 32 | t << 64 - i;
function Pe(e, t, i, a) {
  const h = (t >>> 0) + (a >>> 0);
  return { h: e + i + (h / 2 ** 32 | 0) | 0, l: h | 0 };
}
const Jo = (e, t, i) => (e >>> 0) + (t >>> 0) + (i >>> 0), Bo = (e, t, i, a) => t + i + a + (e / 2 ** 32 | 0) | 0, Go = (e, t, i, a) => (e >>> 0) + (t >>> 0) + (i >>> 0) + (a >>> 0), Ko = (e, t, i, a, h) => t + i + a + h + (e / 2 ** 32 | 0) | 0, Zo = (e, t, i, a, h) => (e >>> 0) + (t >>> 0) + (i >>> 0) + (a >>> 0) + (h >>> 0), Xo = (e, t, i, a, h, n) => t + i + a + h + n + (e / 2 ** 32 | 0) | 0, Wo = /* @__PURE__ */ Uint32Array.from([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), Ve = /* @__PURE__ */ new Uint32Array(64);
class Qo extends Ya {
  constructor(t = 32) {
    super(64, t, 8, !1), this.A = Ue[0] | 0, this.B = Ue[1] | 0, this.C = Ue[2] | 0, this.D = Ue[3] | 0, this.E = Ue[4] | 0, this.F = Ue[5] | 0, this.G = Ue[6] | 0, this.H = Ue[7] | 0;
  }
  get() {
    const { A: t, B: i, C: a, D: h, E: n, F: r, G: o, H: c } = this;
    return [t, i, a, h, n, r, o, c];
  }
  // prettier-ignore
  set(t, i, a, h, n, r, o, c) {
    this.A = t | 0, this.B = i | 0, this.C = a | 0, this.D = h | 0, this.E = n | 0, this.F = r | 0, this.G = o | 0, this.H = c | 0;
  }
  process(t, i) {
    for (let w = 0; w < 16; w++, i += 4)
      Ve[w] = t.getUint32(i, !1);
    for (let w = 16; w < 64; w++) {
      const u = Ve[w - 15], f = Ve[w - 2], b = je(u, 7) ^ je(u, 18) ^ u >>> 3, _ = je(f, 17) ^ je(f, 19) ^ f >>> 10;
      Ve[w] = _ + Ve[w - 7] + b + Ve[w - 16] | 0;
    }
    let { A: a, B: h, C: n, D: r, E: o, F: c, G: m, H: v } = this;
    for (let w = 0; w < 64; w++) {
      const u = je(o, 6) ^ je(o, 11) ^ je(o, 25), f = v + u + Vo(o, c, m) + Wo[w] + Ve[w] | 0, _ = (je(a, 2) ^ je(a, 13) ^ je(a, 22)) + zo(a, h, n) | 0;
      v = m, m = c, c = o, o = r + f | 0, r = n, n = h, h = a, a = f + _ | 0;
    }
    a = a + this.A | 0, h = h + this.B | 0, n = n + this.C | 0, r = r + this.D | 0, o = o + this.E | 0, c = c + this.F | 0, m = m + this.G | 0, v = v + this.H | 0, this.set(a, h, n, r, o, c, m, v);
  }
  roundClean() {
    St(Ve);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), St(this.buffer);
  }
}
const eo = Ho([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((e) => BigInt(e))), Yo = eo[0], ec = eo[1], ze = /* @__PURE__ */ new Uint32Array(80), Fe = /* @__PURE__ */ new Uint32Array(80);
class to extends Ya {
  constructor(t = 64) {
    super(128, t, 16, !1), this.Ah = fe[0] | 0, this.Al = fe[1] | 0, this.Bh = fe[2] | 0, this.Bl = fe[3] | 0, this.Ch = fe[4] | 0, this.Cl = fe[5] | 0, this.Dh = fe[6] | 0, this.Dl = fe[7] | 0, this.Eh = fe[8] | 0, this.El = fe[9] | 0, this.Fh = fe[10] | 0, this.Fl = fe[11] | 0, this.Gh = fe[12] | 0, this.Gl = fe[13] | 0, this.Hh = fe[14] | 0, this.Hl = fe[15] | 0;
  }
  // prettier-ignore
  get() {
    const { Ah: t, Al: i, Bh: a, Bl: h, Ch: n, Cl: r, Dh: o, Dl: c, Eh: m, El: v, Fh: w, Fl: u, Gh: f, Gl: b, Hh: _, Hl: y } = this;
    return [t, i, a, h, n, r, o, c, m, v, w, u, f, b, _, y];
  }
  // prettier-ignore
  set(t, i, a, h, n, r, o, c, m, v, w, u, f, b, _, y) {
    this.Ah = t | 0, this.Al = i | 0, this.Bh = a | 0, this.Bl = h | 0, this.Ch = n | 0, this.Cl = r | 0, this.Dh = o | 0, this.Dl = c | 0, this.Eh = m | 0, this.El = v | 0, this.Fh = w | 0, this.Fl = u | 0, this.Gh = f | 0, this.Gl = b | 0, this.Hh = _ | 0, this.Hl = y | 0;
  }
  process(t, i) {
    for (let l = 0; l < 16; l++, i += 4)
      ze[l] = t.getUint32(i), Fe[l] = t.getUint32(i += 4);
    for (let l = 16; l < 80; l++) {
      const s = ze[l - 15] | 0, d = Fe[l - 15] | 0, g = Qe(s, d, 1) ^ Qe(s, d, 8) ^ xi(s, d, 7), I = Ye(s, d, 1) ^ Ye(s, d, 8) ^ Ei(s, d, 7), S = ze[l - 2] | 0, j = Fe[l - 2] | 0, O = Qe(S, j, 19) ^ Nt(S, j, 61) ^ xi(S, j, 6), k = Ye(S, j, 19) ^ Ot(S, j, 61) ^ Ei(S, j, 6), C = Go(I, k, Fe[l - 7], Fe[l - 16]), T = Ko(C, g, O, ze[l - 7], ze[l - 16]);
      ze[l] = T | 0, Fe[l] = C | 0;
    }
    let { Ah: a, Al: h, Bh: n, Bl: r, Ch: o, Cl: c, Dh: m, Dl: v, Eh: w, El: u, Fh: f, Fl: b, Gh: _, Gl: y, Hh: $, Hl: p } = this;
    for (let l = 0; l < 80; l++) {
      const s = Qe(w, u, 14) ^ Qe(w, u, 18) ^ Nt(w, u, 41), d = Ye(w, u, 14) ^ Ye(w, u, 18) ^ Ot(w, u, 41), g = w & f ^ ~w & _, I = u & b ^ ~u & y, S = Zo(p, d, I, ec[l], Fe[l]), j = Xo(S, $, s, g, Yo[l], ze[l]), O = S | 0, k = Qe(a, h, 28) ^ Nt(a, h, 34) ^ Nt(a, h, 39), C = Ye(a, h, 28) ^ Ot(a, h, 34) ^ Ot(a, h, 39), T = a & n ^ a & o ^ n & o, P = h & r ^ h & c ^ r & c;
      $ = _ | 0, p = y | 0, _ = f | 0, y = b | 0, f = w | 0, b = u | 0, { h: w, l: u } = Pe(m | 0, v | 0, j | 0, O | 0), m = o | 0, v = c | 0, o = n | 0, c = r | 0, n = a | 0, r = h | 0;
      const B = Jo(O, C, P);
      a = Bo(B, j, k, T), h = B | 0;
    }
    ({ h: a, l: h } = Pe(this.Ah | 0, this.Al | 0, a | 0, h | 0)), { h: n, l: r } = Pe(this.Bh | 0, this.Bl | 0, n | 0, r | 0), { h: o, l: c } = Pe(this.Ch | 0, this.Cl | 0, o | 0, c | 0), { h: m, l: v } = Pe(this.Dh | 0, this.Dl | 0, m | 0, v | 0), { h: w, l: u } = Pe(this.Eh | 0, this.El | 0, w | 0, u | 0), { h: f, l: b } = Pe(this.Fh | 0, this.Fl | 0, f | 0, b | 0), { h: _, l: y } = Pe(this.Gh | 0, this.Gl | 0, _ | 0, y | 0), { h: $, l: p } = Pe(this.Hh | 0, this.Hl | 0, $ | 0, p | 0), this.set(a, h, n, r, o, c, m, v, w, u, f, b, _, y, $, p);
  }
  roundClean() {
    St(ze, Fe);
  }
  destroy() {
    St(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class tc extends to {
  constructor() {
    super(48), this.Ah = ue[0] | 0, this.Al = ue[1] | 0, this.Bh = ue[2] | 0, this.Bl = ue[3] | 0, this.Ch = ue[4] | 0, this.Cl = ue[5] | 0, this.Dh = ue[6] | 0, this.Dl = ue[7] | 0, this.Eh = ue[8] | 0, this.El = ue[9] | 0, this.Fh = ue[10] | 0, this.Fl = ue[11] | 0, this.Gh = ue[12] | 0, this.Gl = ue[13] | 0, this.Hh = ue[14] | 0, this.Hl = ue[15] | 0;
  }
}
const nc = /* @__PURE__ */ ai(() => new Qo()), rc = /* @__PURE__ */ ai(() => new to()), ic = /* @__PURE__ */ ai(() => new tc()), sc = nc, ac = rc, oc = ic;
class cc {
  constructor(t) {
    Ae(this, "_chunks", []);
    Ae(this, "_algo");
    this._algo = t === "sha384" ? "sha384" : t === "sha512" ? "sha512" : "sha256";
  }
  update(t, i) {
    const a = typeof t == "string" ? new TextEncoder().encode(t) : t;
    return this._chunks.push(a), this;
  }
  digest(t) {
    const i = this._chunks.reduce((r, o) => r + o.length, 0), a = new Uint8Array(i);
    let h = 0;
    for (const r of this._chunks)
      a.set(r, h), h += r.length;
    let n;
    return this._algo === "sha384" ? n = oc(a) : this._algo === "sha512" ? n = ac(a) : n = sc(a), t === "base64" ? btoa(String.fromCharCode(...n)) : t === "hex" ? Array.from(n).map((r) => r.toString(16).padStart(2, "0")).join("") : n;
  }
}
function Yr(e) {
  return new cc(e);
}
class be extends Error {
  constructor(t, i) {
    super(i), this.code = t, this.name = "CatalogError";
  }
}
function dc(e, t) {
  if (e.trim().length === 0)
    throw new be("INVALID_RESOURCE", `${t} must be nonempty.`);
}
function Un(e) {
  return `sha384-${Yr("sha384").update(e).digest("base64")}`;
}
var ot;
class lc {
  constructor(t) {
    Rt(this, ot, /* @__PURE__ */ new Map());
    for (const i of t) {
      for (const [h, n] of Object.entries({
        uri: i.uri,
        mediaType: i.mediaType,
        origin: i.origin,
        version: i.version
      })) dc(n, h);
      if (Re(this, ot).has(i.uri))
        throw new be("DUPLICATE_RESOURCE", `Duplicate static resource: ${i.uri}`);
      const a = Un(i.bytes);
      if (a !== i.digestSRI)
        throw new be(
          "INTEGRITY_MISMATCH",
          `Static resource ${i.uri} has ${a}; expected ${i.digestSRI}.`
        );
      Re(this, ot).set(i.uri, { ...i, bytes: Uint8Array.from(i.bytes) });
    }
  }
  openSession(t) {
    if (!Number.isSafeInteger(t.maxResources) || t.maxResources <= 0 || !Number.isSafeInteger(t.maxBytes) || t.maxBytes <= 0)
      throw new be("INVALID_RESOURCE", "Catalog budgets must be positive safe integers.");
    return new uc(Re(this, ot), Object.freeze({ ...t }));
  }
}
ot = new WeakMap();
var ct, dt;
class uc {
  constructor(t, i) {
    Rt(this, ct, 0);
    Rt(this, dt, 0);
    this.resources = t, this.budget = i;
  }
  get usage() {
    return Object.freeze({ resources: Re(this, ct), bytes: Re(this, dt) });
  }
  resolve(t) {
    const i = this.resources.get(t);
    if (!i)
      throw new be("RESOURCE_NOT_FOUND", `Static resource is not installed: ${t}`);
    if (Re(this, ct) + 1 > this.budget.maxResources || Re(this, dt) + i.bytes.byteLength > this.budget.maxBytes)
      throw new be("RESOURCE_BUDGET_EXCEEDED", `Static resource budget exceeded at ${t}.`);
    return Wn(this, ct, Re(this, ct) + 1), Wn(this, dt, Re(this, dt) + i.bytes.byteLength), { ...i, bytes: Uint8Array.from(i.bytes) };
  }
}
ct = new WeakMap(), dt = new WeakMap();
function fc(e) {
  return async (t) => {
    const i = e.resolve(t);
    if (i.mediaType !== "application/json" && i.mediaType !== "application/ld+json" && !i.mediaType.endsWith("+json"))
      throw new be(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} has unsupported media type ${i.mediaType}.`
      );
    let a;
    try {
      const h = new TextDecoder("utf-8", { fatal: !0 }).decode(i.bytes);
      a = JSON.parse(h);
    } catch (h) {
      throw new be(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} is not valid UTF-8 JSON: ${String(h)}.`
      );
    }
    return { contextUrl: null, document: a, documentUrl: t };
  };
}
const Yn = [
  "$schema",
  "id",
  "version",
  "status",
  "owner",
  "installation",
  "carrierAndSchema",
  "factMappings",
  "cardinality",
  "discoveryAndIntegrity",
  "recognizedTypes",
  "principalAndRights",
  "scopeAndMapping",
  "routesAndRestrictions",
  "protectionTimeAndResolution",
  "supportAndDisclosure",
  "evidenceAndExclusions"
];
function At(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function no(e) {
  if (e !== null && typeof e == "object") {
    for (const t of Object.values(e)) no(t);
    Object.freeze(e);
  }
  return e;
}
function pc(e) {
  if (!At(e)) throw new TypeError("Binding manifest must be an object.");
  if (Object.keys(e).length !== Yn.length || Yn.some((i) => !Object.hasOwn(e, i)))
    throw new TypeError("Binding manifest must contain exactly the supported top-level categories.");
  if (typeof e.id != "string" || e.id.length === 0 || typeof e.version != "string" || e.version.length === 0 || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Binding manifest identity, version, or status is invalid.");
  if (!At(e.installation) || e.installation.status !== "incomplete" && e.installation.status !== "installable" || typeof e.installation.reason != "string" || e.installation.reason.length === 0 || !Array.isArray(e.installation.pendingResources) || e.installation.pendingResources.some((i) => typeof i != "string" || i.length === 0))
    throw new TypeError("Binding manifest installation state is invalid.");
  if (!Array.isArray(e.factMappings) || e.factMappings.length === 0 || e.factMappings.some((i) => !At(i)))
    throw new TypeError("Binding manifest factMappings must be a nonempty object array.");
  for (const i of Yn.slice(4))
    if (!(i === "installation" || i === "factMappings") && (!At(e[i]) || Object.keys(e[i]).length === 0))
      throw new TypeError(`Binding manifest ${i} must be a nonempty object.`);
  return no(structuredClone(e));
}
const hc = "https://www.w3.org/ns/credentials/v2", mc = "https://vc4qi.example/contexts/rm/1", ht = "https://vc4qi.example/schemas/rm/1/", yc = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", gc = BigInt(58);
function vc(e) {
  if (e.length === 0) return new Uint8Array(0);
  let t = 0;
  for (const r of e) {
    if (r !== "1") break;
    t++;
  }
  let i = 0n;
  for (const r of e) {
    const o = yc.indexOf(r);
    if (o === -1) throw new Error(`Invalid base58btc character: '${r}'`);
    i = i * gc + BigInt(o);
  }
  const a = [];
  for (; i > 0n; )
    a.push(Number(i & 0xffn)), i >>= 8n;
  a.reverse();
  const h = Uint8Array.from(a), n = new Uint8Array(t + h.length);
  return n.set(h, t), n;
}
function ro(e) {
  if (!e.startsWith("z"))
    throw new Error(`Expected multibase base58btc prefix 'z', got '${e[0]}'`);
  return vc(e.slice(1));
}
const Ri = [237, 1], bc = ["revoked", "expires"];
function ce(e, t, i, a = {}) {
  return Object.freeze({ state: e, code: t, reason: i, ...a });
}
function An(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function wc(e) {
  if (typeof e == "string" && e.length > 0) return e;
  if (An(e) && typeof e.id == "string" && e.id.length > 0) return e.id;
}
function _c(e) {
  const t = e.indexOf("#");
  if (!(t <= 0 || t === e.length - 1)) {
    try {
      const i = new URL(e);
      if (i.protocol !== "https:" && i.protocol !== "did:") return;
    } catch {
      return;
    }
    return e.slice(0, t);
  }
}
function $c(e) {
  if (typeof e != "string" || !e.startsWith("z")) return;
  let t;
  try {
    t = ro(e);
  } catch {
    return;
  }
  if (!(t.length !== 34 || t[0] !== Ri[0] || t[1] !== Ri[1]))
    return t.slice(2);
}
function Sc(e, t, i) {
  const a = wc(e);
  if (a === void 0)
    return ce("not_established", "ISSUER_MISSING", "The credential has no issuer identifier.");
  if (typeof t != "string")
    return ce("contradicted", "MALFORMED_METHOD", "The proof names no verification method.");
  const h = _c(t);
  if (h === void 0)
    return ce(
      "contradicted",
      "MALFORMED_METHOD",
      `Verification method ${t} is not an absolute URL with a fragment.`
    );
  if (h !== a)
    return ce(
      "contradicted",
      "NOT_ISSUER_CONTROLLER",
      `Verification method ${t} is not in issuer ${a}'s controller document.`
    );
  let n, r;
  try {
    const u = i.resolve(h);
    r = u.digestSRI, n = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(u.bytes));
  } catch (u) {
    return u instanceof be ? ce(
      "not_established",
      "CONTROLLER_NOT_INSTALLED",
      `Controller document ${h} is not available: ${u.code}.`
    ) : ce(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${h} is not valid UTF-8 JSON.`
    );
  }
  if (!An(n))
    return ce(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${h} is not a JSON object.`
    );
  if (n.id !== h)
    return ce(
      "contradicted",
      "CONTROLLER_ID_MISMATCH",
      `Controller document at ${h} identifies itself as ${String(n.id)}.`
    );
  const c = (Array.isArray(n.verificationMethod) ? n.verificationMethod : []).filter((u) => An(u) && u.id === t);
  if (c.length === 0)
    return ce(
      "contradicted",
      "METHOD_NOT_FOUND",
      `${t} is not listed in its controller document.`
    );
  if (c.length > 1)
    return ce(
      "contradicted",
      "METHOD_AMBIGUOUS",
      `${t} is listed more than once in its controller document.`
    );
  const m = c[0];
  if (m.type !== "Multikey")
    return ce(
      "not_established",
      "METHOD_TYPE_UNSUPPORTED",
      `Verification method type ${String(m.type)} is not supported; Multikey is required.`
    );
  if (m.controller !== h)
    return ce(
      "contradicted",
      "METHOD_CONTROLLER_MISMATCH",
      `${t} is controlled by ${String(m.controller)}, not ${h}.`
    );
  if (bc.some((u) => Object.hasOwn(m, u)))
    return ce(
      "not_established",
      "METHOD_LIFECYCLE_UNSUPPORTED",
      "Key revocation/expiry metadata is not supported in the initial slice."
    );
  const v = $c(m.publicKeyMultibase);
  if (v === void 0)
    return ce(
      "contradicted",
      "INVALID_PUBLIC_KEY",
      `${t} does not carry an Ed25519 Multikey public key.`
    );
  const w = Array.isArray(n.assertionMethod) ? n.assertionMethod : [];
  return w.includes(t) ? ce(
    "established",
    "AUTHORIZED",
    `${t} is the issuer's Ed25519 assertion key.`,
    { publicKey: v, verificationMethod: t, controllerDocumentDigest: r }
  ) : w.some((u) => An(u) && u.id === t) ? ce(
    "not_established",
    "EMBEDDED_METHOD_UNSUPPORTED",
    "Embedded assertionMethod entries are not supported; a reference is required."
  ) : ce(
    "contradicted",
    "NOT_ASSERTION_METHOD",
    `${t} is not authorized for assertionMethod.`
  );
}
function Ic(e, t) {
  if (e.length === 0)
    throw new TypeError(`${t} requires at least one semantic state.`);
  for (const i of e)
    if (!["established", "contradicted", "not_established"].includes(i))
      throw new TypeError(`${t} received unsupported semantic state: ${String(i)}.`);
}
function Ze(e) {
  return Ic(e, "semanticAnd"), e.includes("contradicted") ? "contradicted" : e.every((t) => t === "established") ? "established" : "not_established";
}
var ji = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function oi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function xc(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var i = function a() {
      return this instanceof a ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    i.prototype = t.prototype;
  } else i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(e).forEach(function(a) {
    var h = Object.getOwnPropertyDescriptor(e, a);
    Object.defineProperty(i, a, h.get ? h : {
      enumerable: !0,
      get: function() {
        return e[a];
      }
    });
  }), i;
}
var Pt = { exports: {} }, er = {}, qe = {}, Be = {}, tr = {}, nr = {}, rr = {}, Ni;
function Dn() {
  return Ni || (Ni = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class i extends t {
      constructor(p) {
        if (super(), !e.IDENTIFIER.test(p))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = p;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return !1;
      }
      get names() {
        return { [this.str]: 1 };
      }
    }
    e.Name = i;
    class a extends t {
      constructor(p) {
        super(), this._items = typeof p == "string" ? [p] : p;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const p = this._items[0];
        return p === "" || p === '""';
      }
      get str() {
        var p;
        return (p = this._str) !== null && p !== void 0 ? p : this._str = this._items.reduce((l, s) => `${l}${s}`, "");
      }
      get names() {
        var p;
        return (p = this._names) !== null && p !== void 0 ? p : this._names = this._items.reduce((l, s) => (s instanceof i && (l[s.str] = (l[s.str] || 0) + 1), l), {});
      }
    }
    e._Code = a, e.nil = new a("");
    function h($, ...p) {
      const l = [$[0]];
      let s = 0;
      for (; s < p.length; )
        o(l, p[s]), l.push($[++s]);
      return new a(l);
    }
    e._ = h;
    const n = new a("+");
    function r($, ...p) {
      const l = [f($[0])];
      let s = 0;
      for (; s < p.length; )
        l.push(n), o(l, p[s]), l.push(n, f($[++s]));
      return c(l), new a(l);
    }
    e.str = r;
    function o($, p) {
      p instanceof a ? $.push(...p._items) : p instanceof i ? $.push(p) : $.push(w(p));
    }
    e.addCodeArg = o;
    function c($) {
      let p = 1;
      for (; p < $.length - 1; ) {
        if ($[p] === n) {
          const l = m($[p - 1], $[p + 1]);
          if (l !== void 0) {
            $.splice(p - 1, 3, l);
            continue;
          }
          $[p++] = "+";
        }
        p++;
      }
    }
    function m($, p) {
      if (p === '""')
        return $;
      if ($ === '""')
        return p;
      if (typeof $ == "string")
        return p instanceof i || $[$.length - 1] !== '"' ? void 0 : typeof p != "string" ? `${$.slice(0, -1)}${p}"` : p[0] === '"' ? $.slice(0, -1) + p.slice(1) : void 0;
      if (typeof p == "string" && p[0] === '"' && !($ instanceof i))
        return `"${$}${p.slice(1)}`;
    }
    function v($, p) {
      return p.emptyStr() ? $ : $.emptyStr() ? p : r`${$}${p}`;
    }
    e.strConcat = v;
    function w($) {
      return typeof $ == "number" || typeof $ == "boolean" || $ === null ? $ : f(Array.isArray($) ? $.join(",") : $);
    }
    function u($) {
      return new a(f($));
    }
    e.stringify = u;
    function f($) {
      return JSON.stringify($).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = f;
    function b($) {
      return typeof $ == "string" && e.IDENTIFIER.test($) ? new a(`.${$}`) : h`[${$}]`;
    }
    e.getProperty = b;
    function _($) {
      if (typeof $ == "string" && e.IDENTIFIER.test($))
        return new a(`${$}`);
      throw new Error(`CodeGen: invalid export name: ${$}, use explicit $id name mapping`);
    }
    e.getEsmExportName = _;
    function y($) {
      return new a($.toString());
    }
    e.regexpCode = y;
  })(rr)), rr;
}
var ir = {}, Oi;
function Ai() {
  return Oi || (Oi = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Dn();
    class i extends Error {
      constructor(m) {
        super(`CodeGen: "code" for ${m} not defined`), this.value = m.value;
      }
    }
    var a;
    (function(c) {
      c[c.Started = 0] = "Started", c[c.Completed = 1] = "Completed";
    })(a || (e.UsedValueState = a = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class h {
      constructor({ prefixes: m, parent: v } = {}) {
        this._names = {}, this._prefixes = m, this._parent = v;
      }
      toName(m) {
        return m instanceof t.Name ? m : this.name(m);
      }
      name(m) {
        return new t.Name(this._newName(m));
      }
      _newName(m) {
        const v = this._names[m] || this._nameGroup(m);
        return `${m}${v.index++}`;
      }
      _nameGroup(m) {
        var v, w;
        if (!((w = (v = this._parent) === null || v === void 0 ? void 0 : v._prefixes) === null || w === void 0) && w.has(m) || this._prefixes && !this._prefixes.has(m))
          throw new Error(`CodeGen: prefix "${m}" is not allowed in this scope`);
        return this._names[m] = { prefix: m, index: 0 };
      }
    }
    e.Scope = h;
    class n extends t.Name {
      constructor(m, v) {
        super(v), this.prefix = m;
      }
      setValue(m, { property: v, itemIndex: w }) {
        this.value = m, this.scopePath = (0, t._)`.${new t.Name(v)}[${w}]`;
      }
    }
    e.ValueScopeName = n;
    const r = (0, t._)`\n`;
    class o extends h {
      constructor(m) {
        super(m), this._values = {}, this._scope = m.scope, this.opts = { ...m, _n: m.lines ? r : t.nil };
      }
      get() {
        return this._scope;
      }
      name(m) {
        return new n(m, this._newName(m));
      }
      value(m, v) {
        var w;
        if (v.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const u = this.toName(m), { prefix: f } = u, b = (w = v.key) !== null && w !== void 0 ? w : v.ref;
        let _ = this._values[f];
        if (_) {
          const p = _.get(b);
          if (p)
            return p;
        } else
          _ = this._values[f] = /* @__PURE__ */ new Map();
        _.set(b, u);
        const y = this._scope[f] || (this._scope[f] = []), $ = y.length;
        return y[$] = v.ref, u.setValue(v, { property: f, itemIndex: $ }), u;
      }
      getValue(m, v) {
        const w = this._values[m];
        if (w)
          return w.get(v);
      }
      scopeRefs(m, v = this._values) {
        return this._reduceValues(v, (w) => {
          if (w.scopePath === void 0)
            throw new Error(`CodeGen: name "${w}" has no value`);
          return (0, t._)`${m}${w.scopePath}`;
        });
      }
      scopeCode(m = this._values, v, w) {
        return this._reduceValues(m, (u) => {
          if (u.value === void 0)
            throw new Error(`CodeGen: name "${u}" has no value`);
          return u.value.code;
        }, v, w);
      }
      _reduceValues(m, v, w = {}, u) {
        let f = t.nil;
        for (const b in m) {
          const _ = m[b];
          if (!_)
            continue;
          const y = w[b] = w[b] || /* @__PURE__ */ new Map();
          _.forEach(($) => {
            if (y.has($))
              return;
            y.set($, a.Started);
            let p = v($);
            if (p) {
              const l = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              f = (0, t._)`${f}${l} ${$} = ${p};${this.opts._n}`;
            } else if (p = u?.($))
              f = (0, t._)`${f}${p}${this.opts._n}`;
            else
              throw new i($);
            y.set($, a.Completed);
          });
        }
        return f;
      }
    }
    e.ValueScope = o;
  })(ir)), ir;
}
var Pi;
function ee() {
  return Pi || (Pi = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Dn(), i = /* @__PURE__ */ Ai();
    var a = /* @__PURE__ */ Dn();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return a._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return a.str;
    } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
      return a.strConcat;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return a.nil;
    } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
      return a.getProperty;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return a.stringify;
    } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
      return a.regexpCode;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return a.Name;
    } });
    var h = /* @__PURE__ */ Ai();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return h.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return h.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return h.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return h.varKinds;
    } }), e.operators = {
      GT: new t._Code(">"),
      GTE: new t._Code(">="),
      LT: new t._Code("<"),
      LTE: new t._Code("<="),
      EQ: new t._Code("==="),
      NEQ: new t._Code("!=="),
      NOT: new t._Code("!"),
      OR: new t._Code("||"),
      AND: new t._Code("&&"),
      ADD: new t._Code("+")
    };
    class n {
      optimizeNodes() {
        return this;
      }
      optimizeNames(E, x) {
        return this;
      }
    }
    class r extends n {
      constructor(E, x, R) {
        super(), this.varKind = E, this.name = x, this.rhs = R;
      }
      render({ es5: E, _n: x }) {
        const R = E ? i.varKinds.var : this.varKind, M = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${R} ${this.name}${M};` + x;
      }
      optimizeNames(E, x) {
        if (E[this.name.str])
          return this.rhs && (this.rhs = P(this.rhs, E, x)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class o extends n {
      constructor(E, x, R) {
        super(), this.lhs = E, this.rhs = x, this.sideEffects = R;
      }
      render({ _n: E }) {
        return `${this.lhs} = ${this.rhs};` + E;
      }
      optimizeNames(E, x) {
        if (!(this.lhs instanceof t.Name && !E[this.lhs.str] && !this.sideEffects))
          return this.rhs = P(this.rhs, E, x), this;
      }
      get names() {
        const E = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return T(E, this.rhs);
      }
    }
    class c extends o {
      constructor(E, x, R, M) {
        super(E, R, M), this.op = x;
      }
      render({ _n: E }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + E;
      }
    }
    class m extends n {
      constructor(E) {
        super(), this.label = E, this.names = {};
      }
      render({ _n: E }) {
        return `${this.label}:` + E;
      }
    }
    class v extends n {
      constructor(E) {
        super(), this.label = E, this.names = {};
      }
      render({ _n: E }) {
        return `break${this.label ? ` ${this.label}` : ""};` + E;
      }
    }
    class w extends n {
      constructor(E) {
        super(), this.error = E;
      }
      render({ _n: E }) {
        return `throw ${this.error};` + E;
      }
      get names() {
        return this.error.names;
      }
    }
    class u extends n {
      constructor(E) {
        super(), this.code = E;
      }
      render({ _n: E }) {
        return `${this.code};` + E;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(E, x) {
        return this.code = P(this.code, E, x), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class f extends n {
      constructor(E = []) {
        super(), this.nodes = E;
      }
      render(E) {
        return this.nodes.reduce((x, R) => x + R.render(E), "");
      }
      optimizeNodes() {
        const { nodes: E } = this;
        let x = E.length;
        for (; x--; ) {
          const R = E[x].optimizeNodes();
          Array.isArray(R) ? E.splice(x, 1, ...R) : R ? E[x] = R : E.splice(x, 1);
        }
        return E.length > 0 ? this : void 0;
      }
      optimizeNames(E, x) {
        const { nodes: R } = this;
        let M = R.length;
        for (; M--; ) {
          const J = R[M];
          J.optimizeNames(E, x) || (B(E, J.names), R.splice(M, 1));
        }
        return R.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((E, x) => C(E, x.names), {});
      }
    }
    class b extends f {
      render(E) {
        return "{" + E._n + super.render(E) + "}" + E._n;
      }
    }
    class _ extends f {
    }
    class y extends b {
    }
    y.kind = "else";
    class $ extends b {
      constructor(E, x) {
        super(x), this.condition = E;
      }
      render(E) {
        let x = `if(${this.condition})` + super.render(E);
        return this.else && (x += "else " + this.else.render(E)), x;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const E = this.condition;
        if (E === !0)
          return this.nodes;
        let x = this.else;
        if (x) {
          const R = x.optimizeNodes();
          x = this.else = Array.isArray(R) ? new y(R) : R;
        }
        if (x)
          return E === !1 ? x instanceof $ ? x : x.nodes : this.nodes.length ? this : new $(A(E), x instanceof $ ? [x] : x.nodes);
        if (!(E === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(E, x) {
        var R;
        if (this.else = (R = this.else) === null || R === void 0 ? void 0 : R.optimizeNames(E, x), !!(super.optimizeNames(E, x) || this.else))
          return this.condition = P(this.condition, E, x), this;
      }
      get names() {
        const E = super.names;
        return T(E, this.condition), this.else && C(E, this.else.names), E;
      }
    }
    $.kind = "if";
    class p extends b {
    }
    p.kind = "for";
    class l extends p {
      constructor(E) {
        super(), this.iteration = E;
      }
      render(E) {
        return `for(${this.iteration})` + super.render(E);
      }
      optimizeNames(E, x) {
        if (super.optimizeNames(E, x))
          return this.iteration = P(this.iteration, E, x), this;
      }
      get names() {
        return C(super.names, this.iteration.names);
      }
    }
    class s extends p {
      constructor(E, x, R, M) {
        super(), this.varKind = E, this.name = x, this.from = R, this.to = M;
      }
      render(E) {
        const x = E.es5 ? i.varKinds.var : this.varKind, { name: R, from: M, to: J } = this;
        return `for(${x} ${R}=${M}; ${R}<${J}; ${R}++)` + super.render(E);
      }
      get names() {
        const E = T(super.names, this.from);
        return T(E, this.to);
      }
    }
    class d extends p {
      constructor(E, x, R, M) {
        super(), this.loop = E, this.varKind = x, this.name = R, this.iterable = M;
      }
      render(E) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(E);
      }
      optimizeNames(E, x) {
        if (super.optimizeNames(E, x))
          return this.iterable = P(this.iterable, E, x), this;
      }
      get names() {
        return C(super.names, this.iterable.names);
      }
    }
    class g extends b {
      constructor(E, x, R) {
        super(), this.name = E, this.args = x, this.async = R;
      }
      render(E) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(E);
      }
    }
    g.kind = "func";
    class I extends f {
      render(E) {
        return "return " + super.render(E);
      }
    }
    I.kind = "return";
    class S extends b {
      render(E) {
        let x = "try" + super.render(E);
        return this.catch && (x += this.catch.render(E)), this.finally && (x += this.finally.render(E)), x;
      }
      optimizeNodes() {
        var E, x;
        return super.optimizeNodes(), (E = this.catch) === null || E === void 0 || E.optimizeNodes(), (x = this.finally) === null || x === void 0 || x.optimizeNodes(), this;
      }
      optimizeNames(E, x) {
        var R, M;
        return super.optimizeNames(E, x), (R = this.catch) === null || R === void 0 || R.optimizeNames(E, x), (M = this.finally) === null || M === void 0 || M.optimizeNames(E, x), this;
      }
      get names() {
        const E = super.names;
        return this.catch && C(E, this.catch.names), this.finally && C(E, this.finally.names), E;
      }
    }
    class j extends b {
      constructor(E) {
        super(), this.error = E;
      }
      render(E) {
        return `catch(${this.error})` + super.render(E);
      }
    }
    j.kind = "catch";
    class O extends b {
      render(E) {
        return "finally" + super.render(E);
      }
    }
    O.kind = "finally";
    class k {
      constructor(E, x = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...x, _n: x.lines ? `
` : "" }, this._extScope = E, this._scope = new i.Scope({ parent: E }), this._nodes = [new _()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(E) {
        return this._scope.name(E);
      }
      // reserves unique name in the external scope
      scopeName(E) {
        return this._extScope.name(E);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(E, x) {
        const R = this._extScope.value(E, x);
        return (this._values[R.prefix] || (this._values[R.prefix] = /* @__PURE__ */ new Set())).add(R), R;
      }
      getScopeValue(E, x) {
        return this._extScope.getValue(E, x);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(E) {
        return this._extScope.scopeRefs(E, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(E, x, R, M) {
        const J = this._scope.toName(x);
        return R !== void 0 && M && (this._constants[J.str] = R), this._leafNode(new r(E, J, R)), J;
      }
      // `const` declaration (`var` in es5 mode)
      const(E, x, R) {
        return this._def(i.varKinds.const, E, x, R);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(E, x, R) {
        return this._def(i.varKinds.let, E, x, R);
      }
      // `var` declaration with optional assignment
      var(E, x, R) {
        return this._def(i.varKinds.var, E, x, R);
      }
      // assignment code
      assign(E, x, R) {
        return this._leafNode(new o(E, x, R));
      }
      // `+=` code
      add(E, x) {
        return this._leafNode(new c(E, e.operators.ADD, x));
      }
      // appends passed SafeExpr to code or executes Block
      code(E) {
        return typeof E == "function" ? E() : E !== t.nil && this._leafNode(new u(E)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...E) {
        const x = ["{"];
        for (const [R, M] of E)
          x.length > 1 && x.push(","), x.push(R), (R !== M || this.opts.es5) && (x.push(":"), (0, t.addCodeArg)(x, M));
        return x.push("}"), new t._Code(x);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(E, x, R) {
        if (this._blockNode(new $(E)), x && R)
          this.code(x).else().code(R).endIf();
        else if (x)
          this.code(x).endIf();
        else if (R)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(E) {
        return this._elseNode(new $(E));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new y());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode($, y);
      }
      _for(E, x) {
        return this._blockNode(E), x && this.code(x).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(E, x) {
        return this._for(new l(E), x);
      }
      // `for` statement for a range of values
      forRange(E, x, R, M, J = this.opts.es5 ? i.varKinds.var : i.varKinds.let) {
        const X = this._scope.toName(E);
        return this._for(new s(J, X, x, R), () => M(X));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(E, x, R, M = i.varKinds.const) {
        const J = this._scope.toName(E);
        if (this.opts.es5) {
          const X = x instanceof t.Name ? x : this.var("_arr", x);
          return this.forRange("_i", 0, (0, t._)`${X}.length`, (K) => {
            this.var(J, (0, t._)`${X}[${K}]`), R(J);
          });
        }
        return this._for(new d("of", M, J, x), () => R(J));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(E, x, R, M = this.opts.es5 ? i.varKinds.var : i.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(E, (0, t._)`Object.keys(${x})`, R);
        const J = this._scope.toName(E);
        return this._for(new d("in", M, J, x), () => R(J));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(p);
      }
      // `label` statement
      label(E) {
        return this._leafNode(new m(E));
      }
      // `break` statement
      break(E) {
        return this._leafNode(new v(E));
      }
      // `return` statement
      return(E) {
        const x = new I();
        if (this._blockNode(x), this.code(E), x.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(I);
      }
      // `try` statement
      try(E, x, R) {
        if (!x && !R)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const M = new S();
        if (this._blockNode(M), this.code(E), x) {
          const J = this.name("e");
          this._currNode = M.catch = new j(J), x(J);
        }
        return R && (this._currNode = M.finally = new O(), this.code(R)), this._endBlockNode(j, O);
      }
      // `throw` statement
      throw(E) {
        return this._leafNode(new w(E));
      }
      // start self-balancing block
      block(E, x) {
        return this._blockStarts.push(this._nodes.length), E && this.code(E).endBlock(x), this;
      }
      // end the current self-balancing block
      endBlock(E) {
        const x = this._blockStarts.pop();
        if (x === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const R = this._nodes.length - x;
        if (R < 0 || E !== void 0 && R !== E)
          throw new Error(`CodeGen: wrong number of nodes: ${R} vs ${E} expected`);
        return this._nodes.length = x, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(E, x = t.nil, R, M) {
        return this._blockNode(new g(E, x, R)), M && this.code(M).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(g);
      }
      optimize(E = 1) {
        for (; E-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(E) {
        return this._currNode.nodes.push(E), this;
      }
      _blockNode(E) {
        this._currNode.nodes.push(E), this._nodes.push(E);
      }
      _endBlockNode(E, x) {
        const R = this._currNode;
        if (R instanceof E || x && R instanceof x)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${x ? `${E.kind}/${x.kind}` : E.kind}"`);
      }
      _elseNode(E) {
        const x = this._currNode;
        if (!(x instanceof $))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = x.else = E, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const E = this._nodes;
        return E[E.length - 1];
      }
      set _currNode(E) {
        const x = this._nodes;
        x[x.length - 1] = E;
      }
    }
    e.CodeGen = k;
    function C(D, E) {
      for (const x in E)
        D[x] = (D[x] || 0) + (E[x] || 0);
      return D;
    }
    function T(D, E) {
      return E instanceof t._CodeOrName ? C(D, E.names) : D;
    }
    function P(D, E, x) {
      if (D instanceof t.Name)
        return R(D);
      if (!M(D))
        return D;
      return new t._Code(D._items.reduce((J, X) => (X instanceof t.Name && (X = R(X)), X instanceof t._Code ? J.push(...X._items) : J.push(X), J), []));
      function R(J) {
        const X = x[J.str];
        return X === void 0 || E[J.str] !== 1 ? J : (delete E[J.str], X);
      }
      function M(J) {
        return J instanceof t._Code && J._items.some((X) => X instanceof t.Name && E[X.str] === 1 && x[X.str] !== void 0);
      }
    }
    function B(D, E) {
      for (const x in E)
        D[x] = (D[x] || 0) - (E[x] || 0);
    }
    function A(D) {
      return typeof D == "boolean" || typeof D == "number" || D === null ? !D : (0, t._)`!${U(D)}`;
    }
    e.not = A;
    const H = q(e.operators.AND);
    function F(...D) {
      return D.reduce(H);
    }
    e.and = F;
    const G = q(e.operators.OR);
    function N(...D) {
      return D.reduce(G);
    }
    e.or = N;
    function q(D) {
      return (E, x) => E === t.nil ? x : x === t.nil ? E : (0, t._)`${U(E)} ${D} ${U(x)}`;
    }
    function U(D) {
      return D instanceof t.Name ? D : (0, t._)`(${D})`;
    }
  })(nr)), nr;
}
var te = {}, qi;
function ne() {
  if (qi) return te;
  qi = 1, Object.defineProperty(te, "__esModule", { value: !0 }), te.checkStrictMode = te.getErrorPath = te.Type = te.useFunc = te.setEvaluated = te.evaluatedPropsToName = te.mergeEvaluated = te.eachItem = te.unescapeJsonPointer = te.escapeJsonPointer = te.escapeFragment = te.unescapeFragment = te.schemaRefOrVal = te.schemaHasRulesButRef = te.schemaHasRules = te.checkUnknownRules = te.alwaysValidSchema = te.toHash = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Dn();
  function i(d) {
    const g = {};
    for (const I of d)
      g[I] = !0;
    return g;
  }
  te.toHash = i;
  function a(d, g) {
    return typeof g == "boolean" ? g : Object.keys(g).length === 0 ? !0 : (h(d, g), !n(g, d.self.RULES.all));
  }
  te.alwaysValidSchema = a;
  function h(d, g = d.schema) {
    const { opts: I, self: S } = d;
    if (!I.strictSchema || typeof g == "boolean")
      return;
    const j = S.RULES.keywords;
    for (const O in g)
      j[O] || s(d, `unknown keyword: "${O}"`);
  }
  te.checkUnknownRules = h;
  function n(d, g) {
    if (typeof d == "boolean")
      return !d;
    for (const I in d)
      if (g[I])
        return !0;
    return !1;
  }
  te.schemaHasRules = n;
  function r(d, g) {
    if (typeof d == "boolean")
      return !d;
    for (const I in d)
      if (I !== "$ref" && g.all[I])
        return !0;
    return !1;
  }
  te.schemaHasRulesButRef = r;
  function o({ topSchemaRef: d, schemaPath: g }, I, S, j) {
    if (!j) {
      if (typeof I == "number" || typeof I == "boolean")
        return I;
      if (typeof I == "string")
        return (0, e._)`${I}`;
    }
    return (0, e._)`${d}${g}${(0, e.getProperty)(S)}`;
  }
  te.schemaRefOrVal = o;
  function c(d) {
    return w(decodeURIComponent(d));
  }
  te.unescapeFragment = c;
  function m(d) {
    return encodeURIComponent(v(d));
  }
  te.escapeFragment = m;
  function v(d) {
    return typeof d == "number" ? `${d}` : d.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  te.escapeJsonPointer = v;
  function w(d) {
    return d.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  te.unescapeJsonPointer = w;
  function u(d, g) {
    if (Array.isArray(d))
      for (const I of d)
        g(I);
    else
      g(d);
  }
  te.eachItem = u;
  function f({ mergeNames: d, mergeToName: g, mergeValues: I, resultToName: S }) {
    return (j, O, k, C) => {
      const T = k === void 0 ? O : k instanceof e.Name ? (O instanceof e.Name ? d(j, O, k) : g(j, O, k), k) : O instanceof e.Name ? (g(j, k, O), O) : I(O, k);
      return C === e.Name && !(T instanceof e.Name) ? S(j, T) : T;
    };
  }
  te.mergeEvaluated = {
    props: f({
      mergeNames: (d, g, I) => d.if((0, e._)`${I} !== true && ${g} !== undefined`, () => {
        d.if((0, e._)`${g} === true`, () => d.assign(I, !0), () => d.assign(I, (0, e._)`${I} || {}`).code((0, e._)`Object.assign(${I}, ${g})`));
      }),
      mergeToName: (d, g, I) => d.if((0, e._)`${I} !== true`, () => {
        g === !0 ? d.assign(I, !0) : (d.assign(I, (0, e._)`${I} || {}`), _(d, I, g));
      }),
      mergeValues: (d, g) => d === !0 ? !0 : { ...d, ...g },
      resultToName: b
    }),
    items: f({
      mergeNames: (d, g, I) => d.if((0, e._)`${I} !== true && ${g} !== undefined`, () => d.assign(I, (0, e._)`${g} === true ? true : ${I} > ${g} ? ${I} : ${g}`)),
      mergeToName: (d, g, I) => d.if((0, e._)`${I} !== true`, () => d.assign(I, g === !0 ? !0 : (0, e._)`${I} > ${g} ? ${I} : ${g}`)),
      mergeValues: (d, g) => d === !0 ? !0 : Math.max(d, g),
      resultToName: (d, g) => d.var("items", g)
    })
  };
  function b(d, g) {
    if (g === !0)
      return d.var("props", !0);
    const I = d.var("props", (0, e._)`{}`);
    return g !== void 0 && _(d, I, g), I;
  }
  te.evaluatedPropsToName = b;
  function _(d, g, I) {
    Object.keys(I).forEach((S) => d.assign((0, e._)`${g}${(0, e.getProperty)(S)}`, !0));
  }
  te.setEvaluated = _;
  const y = {};
  function $(d, g) {
    return d.scopeValue("func", {
      ref: g,
      code: y[g.code] || (y[g.code] = new t._Code(g.code))
    });
  }
  te.useFunc = $;
  var p;
  (function(d) {
    d[d.Num = 0] = "Num", d[d.Str = 1] = "Str";
  })(p || (te.Type = p = {}));
  function l(d, g, I) {
    if (d instanceof e.Name) {
      const S = g === p.Num;
      return I ? S ? (0, e._)`"[" + ${d} + "]"` : (0, e._)`"['" + ${d} + "']"` : S ? (0, e._)`"/" + ${d}` : (0, e._)`"/" + ${d}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return I ? (0, e.getProperty)(d).toString() : "/" + v(d);
  }
  te.getErrorPath = l;
  function s(d, g, I = d.opts.strictSchema) {
    if (I) {
      if (g = `strict mode: ${g}`, I === !0)
        throw new Error(g);
      d.self.logger.warn(g);
    }
  }
  return te.checkStrictMode = s, te;
}
var qt = {}, Ti;
function Ie() {
  if (Ti) return qt;
  Ti = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = {
    // validation function arguments
    data: new e.Name("data"),
    // data passed to validation function
    // args passed from referencing schema
    valCxt: new e.Name("valCxt"),
    // validation/data context - should not be used directly, it is destructured to the names below
    instancePath: new e.Name("instancePath"),
    parentData: new e.Name("parentData"),
    parentDataProperty: new e.Name("parentDataProperty"),
    rootData: new e.Name("rootData"),
    // root data - same as the data passed to the first/top validation function
    dynamicAnchors: new e.Name("dynamicAnchors"),
    // used to support recursiveRef and dynamicRef
    // function scoped variables
    vErrors: new e.Name("vErrors"),
    // null or array of validation errors
    errors: new e.Name("errors"),
    // counter of validation errors
    this: new e.Name("this"),
    // "globals"
    self: new e.Name("self"),
    scope: new e.Name("scope"),
    // JTD serialize/parse name for JSON string and position
    json: new e.Name("json"),
    jsonPos: new e.Name("jsonPos"),
    jsonLen: new e.Name("jsonLen"),
    jsonPart: new e.Name("jsonPart")
  };
  return qt.default = t, qt;
}
var ki;
function Vn() {
  return ki || (ki = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ee(), i = /* @__PURE__ */ ne(), a = /* @__PURE__ */ Ie();
    e.keywordError = {
      message: ({ keyword: y }) => (0, t.str)`must pass "${y}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: y, schemaType: $ }) => $ ? (0, t.str)`"${y}" keyword must be ${$} ($data)` : (0, t.str)`"${y}" keyword is invalid ($data)`
    };
    function h(y, $ = e.keywordError, p, l) {
      const { it: s } = y, { gen: d, compositeRule: g, allErrors: I } = s, S = w(y, $, p);
      l ?? (g || I) ? c(d, S) : m(s, (0, t._)`[${S}]`);
    }
    e.reportError = h;
    function n(y, $ = e.keywordError, p) {
      const { it: l } = y, { gen: s, compositeRule: d, allErrors: g } = l, I = w(y, $, p);
      c(s, I), d || g || m(l, a.default.vErrors);
    }
    e.reportExtraError = n;
    function r(y, $) {
      y.assign(a.default.errors, $), y.if((0, t._)`${a.default.vErrors} !== null`, () => y.if($, () => y.assign((0, t._)`${a.default.vErrors}.length`, $), () => y.assign(a.default.vErrors, null)));
    }
    e.resetErrorsCount = r;
    function o({ gen: y, keyword: $, schemaValue: p, data: l, errsCount: s, it: d }) {
      if (s === void 0)
        throw new Error("ajv implementation error");
      const g = y.name("err");
      y.forRange("i", s, a.default.errors, (I) => {
        y.const(g, (0, t._)`${a.default.vErrors}[${I}]`), y.if((0, t._)`${g}.instancePath === undefined`, () => y.assign((0, t._)`${g}.instancePath`, (0, t.strConcat)(a.default.instancePath, d.errorPath))), y.assign((0, t._)`${g}.schemaPath`, (0, t.str)`${d.errSchemaPath}/${$}`), d.opts.verbose && (y.assign((0, t._)`${g}.schema`, p), y.assign((0, t._)`${g}.data`, l));
      });
    }
    e.extendErrors = o;
    function c(y, $) {
      const p = y.const("err", $);
      y.if((0, t._)`${a.default.vErrors} === null`, () => y.assign(a.default.vErrors, (0, t._)`[${p}]`), (0, t._)`${a.default.vErrors}.push(${p})`), y.code((0, t._)`${a.default.errors}++`);
    }
    function m(y, $) {
      const { gen: p, validateName: l, schemaEnv: s } = y;
      s.$async ? p.throw((0, t._)`new ${y.ValidationError}(${$})`) : (p.assign((0, t._)`${l}.errors`, $), p.return(!1));
    }
    const v = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function w(y, $, p) {
      const { createErrors: l } = y.it;
      return l === !1 ? (0, t._)`{}` : u(y, $, p);
    }
    function u(y, $, p = {}) {
      const { gen: l, it: s } = y, d = [
        f(s, p),
        b(y, p)
      ];
      return _(y, $, d), l.object(...d);
    }
    function f({ errorPath: y }, { instancePath: $ }) {
      const p = $ ? (0, t.str)`${y}${(0, i.getErrorPath)($, i.Type.Str)}` : y;
      return [a.default.instancePath, (0, t.strConcat)(a.default.instancePath, p)];
    }
    function b({ keyword: y, it: { errSchemaPath: $ } }, { schemaPath: p, parentSchema: l }) {
      let s = l ? $ : (0, t.str)`${$}/${y}`;
      return p && (s = (0, t.str)`${s}${(0, i.getErrorPath)(p, i.Type.Str)}`), [v.schemaPath, s];
    }
    function _(y, { params: $, message: p }, l) {
      const { keyword: s, data: d, schemaValue: g, it: I } = y, { opts: S, propertyName: j, topSchemaRef: O, schemaPath: k } = I;
      l.push([v.keyword, s], [v.params, typeof $ == "function" ? $(y) : $ || (0, t._)`{}`]), S.messages && l.push([v.message, typeof p == "function" ? p(y) : p]), S.verbose && l.push([v.schema, g], [v.parentSchema, (0, t._)`${O}${k}`], [a.default.data, d]), j && l.push([v.propertyName, j]);
    }
  })(tr)), tr;
}
var Di;
function Ec() {
  if (Di) return Be;
  Di = 1, Object.defineProperty(Be, "__esModule", { value: !0 }), Be.boolOrEmptySchema = Be.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Vn(), t = /* @__PURE__ */ ee(), i = /* @__PURE__ */ Ie(), a = {
    message: "boolean schema is false"
  };
  function h(o) {
    const { gen: c, schema: m, validateName: v } = o;
    m === !1 ? r(o, !1) : typeof m == "object" && m.$async === !0 ? c.return(i.default.data) : (c.assign((0, t._)`${v}.errors`, null), c.return(!0));
  }
  Be.topBoolOrEmptySchema = h;
  function n(o, c) {
    const { gen: m, schema: v } = o;
    v === !1 ? (m.var(c, !1), r(o)) : m.var(c, !0);
  }
  Be.boolOrEmptySchema = n;
  function r(o, c) {
    const { gen: m, data: v } = o, w = {
      gen: m,
      keyword: "false schema",
      data: v,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: o
    };
    (0, e.reportError)(w, a, void 0, c);
  }
  return Be;
}
var de = {}, Ge = {}, Mi;
function io() {
  if (Mi) return Ge;
  Mi = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.getRules = Ge.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function i(h) {
    return typeof h == "string" && t.has(h);
  }
  Ge.isJSONType = i;
  function a() {
    const h = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...h, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, h.number, h.string, h.array, h.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return Ge.getRules = a, Ge;
}
var Te = {}, Li;
function so() {
  if (Li) return Te;
  Li = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.shouldUseRule = Te.shouldUseGroup = Te.schemaHasRulesForType = void 0;
  function e({ schema: a, self: h }, n) {
    const r = h.RULES.types[n];
    return r && r !== !0 && t(a, r);
  }
  Te.schemaHasRulesForType = e;
  function t(a, h) {
    return h.rules.some((n) => i(a, n));
  }
  Te.shouldUseGroup = t;
  function i(a, h) {
    var n;
    return a[h.keyword] !== void 0 || ((n = h.definition.implements) === null || n === void 0 ? void 0 : n.some((r) => a[r] !== void 0));
  }
  return Te.shouldUseRule = i, Te;
}
var Ci;
function Mn() {
  if (Ci) return de;
  Ci = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.reportTypeError = de.checkDataTypes = de.checkDataType = de.coerceAndCheckDataType = de.getJSONTypes = de.getSchemaTypes = de.DataType = void 0;
  const e = /* @__PURE__ */ io(), t = /* @__PURE__ */ so(), i = /* @__PURE__ */ Vn(), a = /* @__PURE__ */ ee(), h = /* @__PURE__ */ ne();
  var n;
  (function(p) {
    p[p.Correct = 0] = "Correct", p[p.Wrong = 1] = "Wrong";
  })(n || (de.DataType = n = {}));
  function r(p) {
    const l = o(p.type);
    if (l.includes("null")) {
      if (p.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!l.length && p.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      p.nullable === !0 && l.push("null");
    }
    return l;
  }
  de.getSchemaTypes = r;
  function o(p) {
    const l = Array.isArray(p) ? p : p ? [p] : [];
    if (l.every(e.isJSONType))
      return l;
    throw new Error("type must be JSONType or JSONType[]: " + l.join(","));
  }
  de.getJSONTypes = o;
  function c(p, l) {
    const { gen: s, data: d, opts: g } = p, I = v(l, g.coerceTypes), S = l.length > 0 && !(I.length === 0 && l.length === 1 && (0, t.schemaHasRulesForType)(p, l[0]));
    if (S) {
      const j = b(l, d, g.strictNumbers, n.Wrong);
      s.if(j, () => {
        I.length ? w(p, l, I) : y(p);
      });
    }
    return S;
  }
  de.coerceAndCheckDataType = c;
  const m = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function v(p, l) {
    return l ? p.filter((s) => m.has(s) || l === "array" && s === "array") : [];
  }
  function w(p, l, s) {
    const { gen: d, data: g, opts: I } = p, S = d.let("dataType", (0, a._)`typeof ${g}`), j = d.let("coerced", (0, a._)`undefined`);
    I.coerceTypes === "array" && d.if((0, a._)`${S} == 'object' && Array.isArray(${g}) && ${g}.length == 1`, () => d.assign(g, (0, a._)`${g}[0]`).assign(S, (0, a._)`typeof ${g}`).if(b(l, g, I.strictNumbers), () => d.assign(j, g))), d.if((0, a._)`${j} !== undefined`);
    for (const k of s)
      (m.has(k) || k === "array" && I.coerceTypes === "array") && O(k);
    d.else(), y(p), d.endIf(), d.if((0, a._)`${j} !== undefined`, () => {
      d.assign(g, j), u(p, j);
    });
    function O(k) {
      switch (k) {
        case "string":
          d.elseIf((0, a._)`${S} == "number" || ${S} == "boolean"`).assign(j, (0, a._)`"" + ${g}`).elseIf((0, a._)`${g} === null`).assign(j, (0, a._)`""`);
          return;
        case "number":
          d.elseIf((0, a._)`${S} == "boolean" || ${g} === null
              || (${S} == "string" && ${g} && ${g} == +${g})`).assign(j, (0, a._)`+${g}`);
          return;
        case "integer":
          d.elseIf((0, a._)`${S} === "boolean" || ${g} === null
              || (${S} === "string" && ${g} && ${g} == +${g} && !(${g} % 1))`).assign(j, (0, a._)`+${g}`);
          return;
        case "boolean":
          d.elseIf((0, a._)`${g} === "false" || ${g} === 0 || ${g} === null`).assign(j, !1).elseIf((0, a._)`${g} === "true" || ${g} === 1`).assign(j, !0);
          return;
        case "null":
          d.elseIf((0, a._)`${g} === "" || ${g} === 0 || ${g} === false`), d.assign(j, null);
          return;
        case "array":
          d.elseIf((0, a._)`${S} === "string" || ${S} === "number"
              || ${S} === "boolean" || ${g} === null`).assign(j, (0, a._)`[${g}]`);
      }
    }
  }
  function u({ gen: p, parentData: l, parentDataProperty: s }, d) {
    p.if((0, a._)`${l} !== undefined`, () => p.assign((0, a._)`${l}[${s}]`, d));
  }
  function f(p, l, s, d = n.Correct) {
    const g = d === n.Correct ? a.operators.EQ : a.operators.NEQ;
    let I;
    switch (p) {
      case "null":
        return (0, a._)`${l} ${g} null`;
      case "array":
        I = (0, a._)`Array.isArray(${l})`;
        break;
      case "object":
        I = (0, a._)`${l} && typeof ${l} == "object" && !Array.isArray(${l})`;
        break;
      case "integer":
        I = S((0, a._)`!(${l} % 1) && !isNaN(${l})`);
        break;
      case "number":
        I = S();
        break;
      default:
        return (0, a._)`typeof ${l} ${g} ${p}`;
    }
    return d === n.Correct ? I : (0, a.not)(I);
    function S(j = a.nil) {
      return (0, a.and)((0, a._)`typeof ${l} == "number"`, j, s ? (0, a._)`isFinite(${l})` : a.nil);
    }
  }
  de.checkDataType = f;
  function b(p, l, s, d) {
    if (p.length === 1)
      return f(p[0], l, s, d);
    let g;
    const I = (0, h.toHash)(p);
    if (I.array && I.object) {
      const S = (0, a._)`typeof ${l} != "object"`;
      g = I.null ? S : (0, a._)`!${l} || ${S}`, delete I.null, delete I.array, delete I.object;
    } else
      g = a.nil;
    I.number && delete I.integer;
    for (const S in I)
      g = (0, a.and)(g, f(S, l, s, d));
    return g;
  }
  de.checkDataTypes = b;
  const _ = {
    message: ({ schema: p }) => `must be ${p}`,
    params: ({ schema: p, schemaValue: l }) => typeof p == "string" ? (0, a._)`{type: ${p}}` : (0, a._)`{type: ${l}}`
  };
  function y(p) {
    const l = $(p);
    (0, i.reportError)(l, _);
  }
  de.reportTypeError = y;
  function $(p) {
    const { gen: l, data: s, schema: d } = p, g = (0, h.schemaRefOrVal)(p, d, "type");
    return {
      gen: l,
      keyword: "type",
      data: s,
      schema: d.type,
      schemaCode: g,
      schemaValue: g,
      parentSchema: d,
      params: {},
      it: p
    };
  }
  return de;
}
var mt = {}, Ui;
function Rc() {
  if (Ui) return mt;
  Ui = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.assignDefaults = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne();
  function i(h, n) {
    const { properties: r, items: o } = h.schema;
    if (n === "object" && r)
      for (const c in r)
        a(h, c, r[c].default);
    else n === "array" && Array.isArray(o) && o.forEach((c, m) => a(h, m, c.default));
  }
  mt.assignDefaults = i;
  function a(h, n, r) {
    const { gen: o, compositeRule: c, data: m, opts: v } = h;
    if (r === void 0)
      return;
    const w = (0, e._)`${m}${(0, e.getProperty)(n)}`;
    if (c) {
      (0, t.checkStrictMode)(h, `default is ignored for: ${w}`);
      return;
    }
    let u = (0, e._)`${w} === undefined`;
    v.useDefaults === "empty" && (u = (0, e._)`${u} || ${w} === null || ${w} === ""`), o.if(u, (0, e._)`${w} = ${(0, e.stringify)(r)}`);
  }
  return mt;
}
var Se = {}, ie = {}, Vi;
function xe() {
  if (Vi) return ie;
  Vi = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.validateUnion = ie.validateArray = ie.usePattern = ie.callValidateCode = ie.schemaProperties = ie.allSchemaProperties = ie.noPropertyInData = ie.propertyInData = ie.isOwnProperty = ie.hasPropFunc = ie.reportMissingProp = ie.checkMissingProp = ie.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), i = /* @__PURE__ */ Ie(), a = /* @__PURE__ */ ne();
  function h(p, l) {
    const { gen: s, data: d, it: g } = p;
    s.if(v(s, d, l, g.opts.ownProperties), () => {
      p.setParams({ missingProperty: (0, e._)`${l}` }, !0), p.error();
    });
  }
  ie.checkReportMissingProp = h;
  function n({ gen: p, data: l, it: { opts: s } }, d, g) {
    return (0, e.or)(...d.map((I) => (0, e.and)(v(p, l, I, s.ownProperties), (0, e._)`${g} = ${I}`)));
  }
  ie.checkMissingProp = n;
  function r(p, l) {
    p.setParams({ missingProperty: l }, !0), p.error();
  }
  ie.reportMissingProp = r;
  function o(p) {
    return p.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ie.hasPropFunc = o;
  function c(p, l, s) {
    return (0, e._)`${o(p)}.call(${l}, ${s})`;
  }
  ie.isOwnProperty = c;
  function m(p, l, s, d) {
    const g = (0, e._)`${l}${(0, e.getProperty)(s)} !== undefined`;
    return d ? (0, e._)`${g} && ${c(p, l, s)}` : g;
  }
  ie.propertyInData = m;
  function v(p, l, s, d) {
    const g = (0, e._)`${l}${(0, e.getProperty)(s)} === undefined`;
    return d ? (0, e.or)(g, (0, e.not)(c(p, l, s))) : g;
  }
  ie.noPropertyInData = v;
  function w(p) {
    return p ? Object.keys(p).filter((l) => l !== "__proto__") : [];
  }
  ie.allSchemaProperties = w;
  function u(p, l) {
    return w(l).filter((s) => !(0, t.alwaysValidSchema)(p, l[s]));
  }
  ie.schemaProperties = u;
  function f({ schemaCode: p, data: l, it: { gen: s, topSchemaRef: d, schemaPath: g, errorPath: I }, it: S }, j, O, k) {
    const C = k ? (0, e._)`${p}, ${l}, ${d}${g}` : l, T = [
      [i.default.instancePath, (0, e.strConcat)(i.default.instancePath, I)],
      [i.default.parentData, S.parentData],
      [i.default.parentDataProperty, S.parentDataProperty],
      [i.default.rootData, i.default.rootData]
    ];
    S.opts.dynamicRef && T.push([i.default.dynamicAnchors, i.default.dynamicAnchors]);
    const P = (0, e._)`${C}, ${s.object(...T)}`;
    return O !== e.nil ? (0, e._)`${j}.call(${O}, ${P})` : (0, e._)`${j}(${P})`;
  }
  ie.callValidateCode = f;
  const b = (0, e._)`new RegExp`;
  function _({ gen: p, it: { opts: l } }, s) {
    const d = l.unicodeRegExp ? "u" : "", { regExp: g } = l.code, I = g(s, d);
    return p.scopeValue("pattern", {
      key: I.toString(),
      ref: I,
      code: (0, e._)`${g.code === "new RegExp" ? b : (0, a.useFunc)(p, g)}(${s}, ${d})`
    });
  }
  ie.usePattern = _;
  function y(p) {
    const { gen: l, data: s, keyword: d, it: g } = p, I = l.name("valid");
    if (g.allErrors) {
      const j = l.let("valid", !0);
      return S(() => l.assign(j, !1)), j;
    }
    return l.var(I, !0), S(() => l.break()), I;
    function S(j) {
      const O = l.const("len", (0, e._)`${s}.length`);
      l.forRange("i", 0, O, (k) => {
        p.subschema({
          keyword: d,
          dataProp: k,
          dataPropType: t.Type.Num
        }, I), l.if((0, e.not)(I), j);
      });
    }
  }
  ie.validateArray = y;
  function $(p) {
    const { gen: l, schema: s, keyword: d, it: g } = p;
    if (!Array.isArray(s))
      throw new Error("ajv implementation error");
    if (s.some((O) => (0, t.alwaysValidSchema)(g, O)) && !g.opts.unevaluated)
      return;
    const S = l.let("valid", !1), j = l.name("_valid");
    l.block(() => s.forEach((O, k) => {
      const C = p.subschema({
        keyword: d,
        schemaProp: k,
        compositeRule: !0
      }, j);
      l.assign(S, (0, e._)`${S} || ${j}`), p.mergeValidEvaluated(C, j) || l.if((0, e.not)(S));
    })), p.result(S, () => p.reset(), () => p.error(!0));
  }
  return ie.validateUnion = $, ie;
}
var zi;
function jc() {
  if (zi) return Se;
  zi = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.validateKeywordUsage = Se.validSchemaType = Se.funcKeywordCode = Se.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Ie(), i = /* @__PURE__ */ xe(), a = /* @__PURE__ */ Vn();
  function h(u, f) {
    const { gen: b, keyword: _, schema: y, parentSchema: $, it: p } = u, l = f.macro.call(p.self, y, $, p), s = m(b, _, l);
    p.opts.validateSchema !== !1 && p.self.validateSchema(l, !0);
    const d = b.name("valid");
    u.subschema({
      schema: l,
      schemaPath: e.nil,
      errSchemaPath: `${p.errSchemaPath}/${_}`,
      topSchemaRef: s,
      compositeRule: !0
    }, d), u.pass(d, () => u.error(!0));
  }
  Se.macroKeywordCode = h;
  function n(u, f) {
    var b;
    const { gen: _, keyword: y, schema: $, parentSchema: p, $data: l, it: s } = u;
    c(s, f);
    const d = !l && f.compile ? f.compile.call(s.self, $, p, s) : f.validate, g = m(_, y, d), I = _.let("valid");
    u.block$data(I, S), u.ok((b = f.valid) !== null && b !== void 0 ? b : I);
    function S() {
      if (f.errors === !1)
        k(), f.modifying && r(u), C(() => u.error());
      else {
        const T = f.async ? j() : O();
        f.modifying && r(u), C(() => o(u, T));
      }
    }
    function j() {
      const T = _.let("ruleErrs", null);
      return _.try(() => k((0, e._)`await `), (P) => _.assign(I, !1).if((0, e._)`${P} instanceof ${s.ValidationError}`, () => _.assign(T, (0, e._)`${P}.errors`), () => _.throw(P))), T;
    }
    function O() {
      const T = (0, e._)`${g}.errors`;
      return _.assign(T, null), k(e.nil), T;
    }
    function k(T = f.async ? (0, e._)`await ` : e.nil) {
      const P = s.opts.passContext ? t.default.this : t.default.self, B = !("compile" in f && !l || f.schema === !1);
      _.assign(I, (0, e._)`${T}${(0, i.callValidateCode)(u, g, P, B)}`, f.modifying);
    }
    function C(T) {
      var P;
      _.if((0, e.not)((P = f.valid) !== null && P !== void 0 ? P : I), T);
    }
  }
  Se.funcKeywordCode = n;
  function r(u) {
    const { gen: f, data: b, it: _ } = u;
    f.if(_.parentData, () => f.assign(b, (0, e._)`${_.parentData}[${_.parentDataProperty}]`));
  }
  function o(u, f) {
    const { gen: b } = u;
    b.if((0, e._)`Array.isArray(${f})`, () => {
      b.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${f} : ${t.default.vErrors}.concat(${f})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, a.extendErrors)(u);
    }, () => u.error());
  }
  function c({ schemaEnv: u }, f) {
    if (f.async && !u.$async)
      throw new Error("async keyword in sync schema");
  }
  function m(u, f, b) {
    if (b === void 0)
      throw new Error(`keyword "${f}" failed to compile`);
    return u.scopeValue("keyword", typeof b == "function" ? { ref: b } : { ref: b, code: (0, e.stringify)(b) });
  }
  function v(u, f, b = !1) {
    return !f.length || f.some((_) => _ === "array" ? Array.isArray(u) : _ === "object" ? u && typeof u == "object" && !Array.isArray(u) : typeof u == _ || b && typeof u > "u");
  }
  Se.validSchemaType = v;
  function w({ schema: u, opts: f, self: b, errSchemaPath: _ }, y, $) {
    if (Array.isArray(y.keyword) ? !y.keyword.includes($) : y.keyword !== $)
      throw new Error("ajv implementation error");
    const p = y.dependencies;
    if (p?.some((l) => !Object.prototype.hasOwnProperty.call(u, l)))
      throw new Error(`parent schema must have dependencies of ${$}: ${p.join(",")}`);
    if (y.validateSchema && !y.validateSchema(u[$])) {
      const s = `keyword "${$}" value is invalid at path "${_}": ` + b.errorsText(y.validateSchema.errors);
      if (f.validateSchema === "log")
        b.logger.error(s);
      else
        throw new Error(s);
    }
  }
  return Se.validateKeywordUsage = w, Se;
}
var ke = {}, Fi;
function Nc() {
  if (Fi) return ke;
  Fi = 1, Object.defineProperty(ke, "__esModule", { value: !0 }), ke.extendSubschemaMode = ke.extendSubschemaData = ke.getSubschema = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne();
  function i(n, { keyword: r, schemaProp: o, schema: c, schemaPath: m, errSchemaPath: v, topSchemaRef: w }) {
    if (r !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (r !== void 0) {
      const u = n.schema[r];
      return o === void 0 ? {
        schema: u,
        schemaPath: (0, e._)`${n.schemaPath}${(0, e.getProperty)(r)}`,
        errSchemaPath: `${n.errSchemaPath}/${r}`
      } : {
        schema: u[o],
        schemaPath: (0, e._)`${n.schemaPath}${(0, e.getProperty)(r)}${(0, e.getProperty)(o)}`,
        errSchemaPath: `${n.errSchemaPath}/${r}/${(0, t.escapeFragment)(o)}`
      };
    }
    if (c !== void 0) {
      if (m === void 0 || v === void 0 || w === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: m,
        topSchemaRef: w,
        errSchemaPath: v
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  ke.getSubschema = i;
  function a(n, r, { dataProp: o, dataPropType: c, data: m, dataTypes: v, propertyName: w }) {
    if (m !== void 0 && o !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: u } = r;
    if (o !== void 0) {
      const { errorPath: b, dataPathArr: _, opts: y } = r, $ = u.let("data", (0, e._)`${r.data}${(0, e.getProperty)(o)}`, !0);
      f($), n.errorPath = (0, e.str)`${b}${(0, t.getErrorPath)(o, c, y.jsPropertySyntax)}`, n.parentDataProperty = (0, e._)`${o}`, n.dataPathArr = [..._, n.parentDataProperty];
    }
    if (m !== void 0) {
      const b = m instanceof e.Name ? m : u.let("data", m, !0);
      f(b), w !== void 0 && (n.propertyName = w);
    }
    v && (n.dataTypes = v);
    function f(b) {
      n.data = b, n.dataLevel = r.dataLevel + 1, n.dataTypes = [], r.definedProperties = /* @__PURE__ */ new Set(), n.parentData = r.data, n.dataNames = [...r.dataNames, b];
    }
  }
  ke.extendSubschemaData = a;
  function h(n, { jtdDiscriminator: r, jtdMetadata: o, compositeRule: c, createErrors: m, allErrors: v }) {
    c !== void 0 && (n.compositeRule = c), m !== void 0 && (n.createErrors = m), v !== void 0 && (n.allErrors = v), n.jtdDiscriminator = r, n.jtdMetadata = o;
  }
  return ke.extendSubschemaMode = h, ke;
}
var he = {}, sr, Hi;
function ao() {
  return Hi || (Hi = 1, sr = function e(t, i) {
    if (t === i) return !0;
    if (t && i && typeof t == "object" && typeof i == "object") {
      if (t.constructor !== i.constructor) return !1;
      var a, h, n;
      if (Array.isArray(t)) {
        if (a = t.length, a != i.length) return !1;
        for (h = a; h-- !== 0; )
          if (!e(t[h], i[h])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === i.source && t.flags === i.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === i.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === i.toString();
      if (n = Object.keys(t), a = n.length, a !== Object.keys(i).length) return !1;
      for (h = a; h-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(i, n[h])) return !1;
      for (h = a; h-- !== 0; ) {
        var r = n[h];
        if (!e(t[r], i[r])) return !1;
      }
      return !0;
    }
    return t !== t && i !== i;
  }), sr;
}
var ar = { exports: {} }, Ji;
function Oc() {
  if (Ji) return ar.exports;
  Ji = 1;
  var e = ar.exports = function(a, h, n) {
    typeof h == "function" && (n = h, h = {}), n = h.cb || n;
    var r = typeof n == "function" ? n : n.pre || function() {
    }, o = n.post || function() {
    };
    t(h, r, o, a, "", a);
  };
  e.keywords = {
    additionalItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    propertyNames: !0,
    not: !0,
    if: !0,
    then: !0,
    else: !0
  }, e.arrayKeywords = {
    items: !0,
    allOf: !0,
    anyOf: !0,
    oneOf: !0
  }, e.propsKeywords = {
    $defs: !0,
    definitions: !0,
    properties: !0,
    patternProperties: !0,
    dependencies: !0
  }, e.skipKeywords = {
    default: !0,
    enum: !0,
    const: !0,
    required: !0,
    maximum: !0,
    minimum: !0,
    exclusiveMaximum: !0,
    exclusiveMinimum: !0,
    multipleOf: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    format: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxProperties: !0,
    minProperties: !0
  };
  function t(a, h, n, r, o, c, m, v, w, u) {
    if (r && typeof r == "object" && !Array.isArray(r)) {
      h(r, o, c, m, v, w, u);
      for (var f in r) {
        var b = r[f];
        if (Array.isArray(b)) {
          if (f in e.arrayKeywords)
            for (var _ = 0; _ < b.length; _++)
              t(a, h, n, b[_], o + "/" + f + "/" + _, c, o, f, r, _);
        } else if (f in e.propsKeywords) {
          if (b && typeof b == "object")
            for (var y in b)
              t(a, h, n, b[y], o + "/" + f + "/" + i(y), c, o, f, r, y);
        } else (f in e.keywords || a.allKeys && !(f in e.skipKeywords)) && t(a, h, n, b, o + "/" + f, c, o, f, r);
      }
      n(r, o, c, m, v, w, u);
    }
  }
  function i(a) {
    return a.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return ar.exports;
}
var Bi;
function zn() {
  if (Bi) return he;
  Bi = 1, Object.defineProperty(he, "__esModule", { value: !0 }), he.getSchemaRefs = he.resolveUrl = he.normalizeId = he._getFullPath = he.getFullPath = he.inlineRef = void 0;
  const e = /* @__PURE__ */ ne(), t = ao(), i = Oc(), a = /* @__PURE__ */ new Set([
    "type",
    "format",
    "pattern",
    "maxLength",
    "minLength",
    "maxProperties",
    "minProperties",
    "maxItems",
    "minItems",
    "maximum",
    "minimum",
    "uniqueItems",
    "multipleOf",
    "required",
    "enum",
    "const"
  ]);
  function h(_, y = !0) {
    return typeof _ == "boolean" ? !0 : y === !0 ? !r(_) : y ? o(_) <= y : !1;
  }
  he.inlineRef = h;
  const n = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function r(_) {
    for (const y in _) {
      if (n.has(y))
        return !0;
      const $ = _[y];
      if (Array.isArray($) && $.some(r) || typeof $ == "object" && r($))
        return !0;
    }
    return !1;
  }
  function o(_) {
    let y = 0;
    for (const $ in _) {
      if ($ === "$ref")
        return 1 / 0;
      if (y++, !a.has($) && (typeof _[$] == "object" && (0, e.eachItem)(_[$], (p) => y += o(p)), y === 1 / 0))
        return 1 / 0;
    }
    return y;
  }
  function c(_, y = "", $) {
    $ !== !1 && (y = w(y));
    const p = _.parse(y);
    return m(_, p);
  }
  he.getFullPath = c;
  function m(_, y) {
    return _.serialize(y).split("#")[0] + "#";
  }
  he._getFullPath = m;
  const v = /#\/?$/;
  function w(_) {
    return _ ? _.replace(v, "") : "";
  }
  he.normalizeId = w;
  function u(_, y, $) {
    return $ = w($), _.resolve(y, $);
  }
  he.resolveUrl = u;
  const f = /^[a-z_][-a-z0-9._]*$/i;
  function b(_, y) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: $, uriResolver: p } = this.opts, l = w(_[$] || y), s = { "": l }, d = c(p, l, !1), g = {}, I = /* @__PURE__ */ new Set();
    return i(_, { allKeys: !0 }, (O, k, C, T) => {
      if (T === void 0)
        return;
      const P = d + k;
      let B = s[T];
      typeof O[$] == "string" && (B = A.call(this, O[$])), H.call(this, O.$anchor), H.call(this, O.$dynamicAnchor), s[k] = B;
      function A(F) {
        const G = this.opts.uriResolver.resolve;
        if (F = w(B ? G(B, F) : F), I.has(F))
          throw j(F);
        I.add(F);
        let N = this.refs[F];
        return typeof N == "string" && (N = this.refs[N]), typeof N == "object" ? S(O, N.schema, F) : F !== w(P) && (F[0] === "#" ? (S(O, g[F], F), g[F] = O) : this.refs[F] = P), F;
      }
      function H(F) {
        if (typeof F == "string") {
          if (!f.test(F))
            throw new Error(`invalid anchor "${F}"`);
          A.call(this, `#${F}`);
        }
      }
    }), g;
    function S(O, k, C) {
      if (k !== void 0 && !t(O, k))
        throw j(C);
    }
    function j(O) {
      return new Error(`reference "${O}" resolves to more than one schema`);
    }
  }
  return he.getSchemaRefs = b, he;
}
var Gi;
function It() {
  if (Gi) return qe;
  Gi = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.getData = qe.KeywordCxt = qe.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Ec(), t = /* @__PURE__ */ Mn(), i = /* @__PURE__ */ so(), a = /* @__PURE__ */ Mn(), h = /* @__PURE__ */ Rc(), n = /* @__PURE__ */ jc(), r = /* @__PURE__ */ Nc(), o = /* @__PURE__ */ ee(), c = /* @__PURE__ */ Ie(), m = /* @__PURE__ */ zn(), v = /* @__PURE__ */ ne(), w = /* @__PURE__ */ Vn();
  function u(L) {
    if (d(L) && (I(L), s(L))) {
      y(L);
      return;
    }
    f(L, () => (0, e.topBoolOrEmptySchema)(L));
  }
  qe.validateFunctionCode = u;
  function f({ gen: L, validateName: V, schema: z, schemaEnv: Z, opts: W }, Y) {
    W.code.es5 ? L.func(V, (0, o._)`${c.default.data}, ${c.default.valCxt}`, Z.$async, () => {
      L.code((0, o._)`"use strict"; ${p(z, W)}`), _(L, W), L.code(Y);
    }) : L.func(V, (0, o._)`${c.default.data}, ${b(W)}`, Z.$async, () => L.code(p(z, W)).code(Y));
  }
  function b(L) {
    return (0, o._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${L.dynamicRef ? (0, o._)`, ${c.default.dynamicAnchors}={}` : o.nil}}={}`;
  }
  function _(L, V) {
    L.if(c.default.valCxt, () => {
      L.var(c.default.instancePath, (0, o._)`${c.default.valCxt}.${c.default.instancePath}`), L.var(c.default.parentData, (0, o._)`${c.default.valCxt}.${c.default.parentData}`), L.var(c.default.parentDataProperty, (0, o._)`${c.default.valCxt}.${c.default.parentDataProperty}`), L.var(c.default.rootData, (0, o._)`${c.default.valCxt}.${c.default.rootData}`), V.dynamicRef && L.var(c.default.dynamicAnchors, (0, o._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      L.var(c.default.instancePath, (0, o._)`""`), L.var(c.default.parentData, (0, o._)`undefined`), L.var(c.default.parentDataProperty, (0, o._)`undefined`), L.var(c.default.rootData, c.default.data), V.dynamicRef && L.var(c.default.dynamicAnchors, (0, o._)`{}`);
    });
  }
  function y(L) {
    const { schema: V, opts: z, gen: Z } = L;
    f(L, () => {
      z.$comment && V.$comment && T(L), O(L), Z.let(c.default.vErrors, null), Z.let(c.default.errors, 0), z.unevaluated && $(L), S(L), P(L);
    });
  }
  function $(L) {
    const { gen: V, validateName: z } = L;
    L.evaluated = V.const("evaluated", (0, o._)`${z}.evaluated`), V.if((0, o._)`${L.evaluated}.dynamicProps`, () => V.assign((0, o._)`${L.evaluated}.props`, (0, o._)`undefined`)), V.if((0, o._)`${L.evaluated}.dynamicItems`, () => V.assign((0, o._)`${L.evaluated}.items`, (0, o._)`undefined`));
  }
  function p(L, V) {
    const z = typeof L == "object" && L[V.schemaId];
    return z && (V.code.source || V.code.process) ? (0, o._)`/*# sourceURL=${z} */` : o.nil;
  }
  function l(L, V) {
    if (d(L) && (I(L), s(L))) {
      g(L, V);
      return;
    }
    (0, e.boolOrEmptySchema)(L, V);
  }
  function s({ schema: L, self: V }) {
    if (typeof L == "boolean")
      return !L;
    for (const z in L)
      if (V.RULES.all[z])
        return !0;
    return !1;
  }
  function d(L) {
    return typeof L.schema != "boolean";
  }
  function g(L, V) {
    const { schema: z, gen: Z, opts: W } = L;
    W.$comment && z.$comment && T(L), k(L), C(L);
    const Y = Z.const("_errs", c.default.errors);
    S(L, Y), Z.var(V, (0, o._)`${Y} === ${c.default.errors}`);
  }
  function I(L) {
    (0, v.checkUnknownRules)(L), j(L);
  }
  function S(L, V) {
    if (L.opts.jtd)
      return A(L, [], !1, V);
    const z = (0, t.getSchemaTypes)(L.schema), Z = (0, t.coerceAndCheckDataType)(L, z);
    A(L, z, !Z, V);
  }
  function j(L) {
    const { schema: V, errSchemaPath: z, opts: Z, self: W } = L;
    V.$ref && Z.ignoreKeywordsWithRef && (0, v.schemaHasRulesButRef)(V, W.RULES) && W.logger.warn(`$ref: keywords ignored in schema at path "${z}"`);
  }
  function O(L) {
    const { schema: V, opts: z } = L;
    V.default !== void 0 && z.useDefaults && z.strictSchema && (0, v.checkStrictMode)(L, "default is ignored in the schema root");
  }
  function k(L) {
    const V = L.schema[L.opts.schemaId];
    V && (L.baseId = (0, m.resolveUrl)(L.opts.uriResolver, L.baseId, V));
  }
  function C(L) {
    if (L.schema.$async && !L.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function T({ gen: L, schemaEnv: V, schema: z, errSchemaPath: Z, opts: W }) {
    const Y = z.$comment;
    if (W.$comment === !0)
      L.code((0, o._)`${c.default.self}.logger.log(${Y})`);
    else if (typeof W.$comment == "function") {
      const re = (0, o.str)`${Z}/$comment`, le = L.scopeValue("root", { ref: V.root });
      L.code((0, o._)`${c.default.self}.opts.$comment(${Y}, ${re}, ${le}.schema)`);
    }
  }
  function P(L) {
    const { gen: V, schemaEnv: z, validateName: Z, ValidationError: W, opts: Y } = L;
    z.$async ? V.if((0, o._)`${c.default.errors} === 0`, () => V.return(c.default.data), () => V.throw((0, o._)`new ${W}(${c.default.vErrors})`)) : (V.assign((0, o._)`${Z}.errors`, c.default.vErrors), Y.unevaluated && B(L), V.return((0, o._)`${c.default.errors} === 0`));
  }
  function B({ gen: L, evaluated: V, props: z, items: Z }) {
    z instanceof o.Name && L.assign((0, o._)`${V}.props`, z), Z instanceof o.Name && L.assign((0, o._)`${V}.items`, Z);
  }
  function A(L, V, z, Z) {
    const { gen: W, schema: Y, data: re, allErrors: le, opts: ae, self: oe } = L, { RULES: se } = oe;
    if (Y.$ref && (ae.ignoreKeywordsWithRef || !(0, v.schemaHasRulesButRef)(Y, se))) {
      W.block(() => M(L, "$ref", se.all.$ref.definition));
      return;
    }
    ae.jtd || F(L, V), W.block(() => {
      for (const ge of se.rules)
        Ee(ge);
      Ee(se.post);
    });
    function Ee(ge) {
      (0, i.shouldUseGroup)(Y, ge) && (ge.type ? (W.if((0, a.checkDataType)(ge.type, re, ae.strictNumbers)), H(L, ge), V.length === 1 && V[0] === ge.type && z && (W.else(), (0, a.reportTypeError)(L)), W.endIf()) : H(L, ge), le || W.if((0, o._)`${c.default.errors} === ${Z || 0}`));
    }
  }
  function H(L, V) {
    const { gen: z, schema: Z, opts: { useDefaults: W } } = L;
    W && (0, h.assignDefaults)(L, V.type), z.block(() => {
      for (const Y of V.rules)
        (0, i.shouldUseRule)(Z, Y) && M(L, Y.keyword, Y.definition, V.type);
    });
  }
  function F(L, V) {
    L.schemaEnv.meta || !L.opts.strictTypes || (G(L, V), L.opts.allowUnionTypes || N(L, V), q(L, L.dataTypes));
  }
  function G(L, V) {
    if (V.length) {
      if (!L.dataTypes.length) {
        L.dataTypes = V;
        return;
      }
      V.forEach((z) => {
        D(L.dataTypes, z) || x(L, `type "${z}" not allowed by context "${L.dataTypes.join(",")}"`);
      }), E(L, V);
    }
  }
  function N(L, V) {
    V.length > 1 && !(V.length === 2 && V.includes("null")) && x(L, "use allowUnionTypes to allow union type keyword");
  }
  function q(L, V) {
    const z = L.self.RULES.all;
    for (const Z in z) {
      const W = z[Z];
      if (typeof W == "object" && (0, i.shouldUseRule)(L.schema, W)) {
        const { type: Y } = W.definition;
        Y.length && !Y.some((re) => U(V, re)) && x(L, `missing type "${Y.join(",")}" for keyword "${Z}"`);
      }
    }
  }
  function U(L, V) {
    return L.includes(V) || V === "number" && L.includes("integer");
  }
  function D(L, V) {
    return L.includes(V) || V === "integer" && L.includes("number");
  }
  function E(L, V) {
    const z = [];
    for (const Z of L.dataTypes)
      D(V, Z) ? z.push(Z) : V.includes("integer") && Z === "number" && z.push("integer");
    L.dataTypes = z;
  }
  function x(L, V) {
    const z = L.schemaEnv.baseId + L.errSchemaPath;
    V += ` at "${z}" (strictTypes)`, (0, v.checkStrictMode)(L, V, L.opts.strictTypes);
  }
  class R {
    constructor(V, z, Z) {
      if ((0, n.validateKeywordUsage)(V, z, Z), this.gen = V.gen, this.allErrors = V.allErrors, this.keyword = Z, this.data = V.data, this.schema = V.schema[Z], this.$data = z.$data && V.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, v.schemaRefOrVal)(V, this.schema, Z, this.$data), this.schemaType = z.schemaType, this.parentSchema = V.schema, this.params = {}, this.it = V, this.def = z, this.$data)
        this.schemaCode = V.gen.const("vSchema", K(this.$data, V));
      else if (this.schemaCode = this.schemaValue, !(0, n.validSchemaType)(this.schema, z.schemaType, z.allowUndefined))
        throw new Error(`${Z} value must be ${JSON.stringify(z.schemaType)}`);
      ("code" in z ? z.trackErrors : z.errors !== !1) && (this.errsCount = V.gen.const("_errs", c.default.errors));
    }
    result(V, z, Z) {
      this.failResult((0, o.not)(V), z, Z);
    }
    failResult(V, z, Z) {
      this.gen.if(V), Z ? Z() : this.error(), z ? (this.gen.else(), z(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(V, z) {
      this.failResult((0, o.not)(V), void 0, z);
    }
    fail(V) {
      if (V === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(V), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(V) {
      if (!this.$data)
        return this.fail(V);
      const { schemaCode: z } = this;
      this.fail((0, o._)`${z} !== undefined && (${(0, o.or)(this.invalid$data(), V)})`);
    }
    error(V, z, Z) {
      if (z) {
        this.setParams(z), this._error(V, Z), this.setParams({});
        return;
      }
      this._error(V, Z);
    }
    _error(V, z) {
      (V ? w.reportExtraError : w.reportError)(this, this.def.error, z);
    }
    $dataError() {
      (0, w.reportError)(this, this.def.$dataError || w.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, w.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(V) {
      this.allErrors || this.gen.if(V);
    }
    setParams(V, z) {
      z ? Object.assign(this.params, V) : this.params = V;
    }
    block$data(V, z, Z = o.nil) {
      this.gen.block(() => {
        this.check$data(V, Z), z();
      });
    }
    check$data(V = o.nil, z = o.nil) {
      if (!this.$data)
        return;
      const { gen: Z, schemaCode: W, schemaType: Y, def: re } = this;
      Z.if((0, o.or)((0, o._)`${W} === undefined`, z)), V !== o.nil && Z.assign(V, !0), (Y.length || re.validateSchema) && (Z.elseIf(this.invalid$data()), this.$dataError(), V !== o.nil && Z.assign(V, !1)), Z.else();
    }
    invalid$data() {
      const { gen: V, schemaCode: z, schemaType: Z, def: W, it: Y } = this;
      return (0, o.or)(re(), le());
      function re() {
        if (Z.length) {
          if (!(z instanceof o.Name))
            throw new Error("ajv implementation error");
          const ae = Array.isArray(Z) ? Z : [Z];
          return (0, o._)`${(0, a.checkDataTypes)(ae, z, Y.opts.strictNumbers, a.DataType.Wrong)}`;
        }
        return o.nil;
      }
      function le() {
        if (W.validateSchema) {
          const ae = V.scopeValue("validate$data", { ref: W.validateSchema });
          return (0, o._)`!${ae}(${z})`;
        }
        return o.nil;
      }
    }
    subschema(V, z) {
      const Z = (0, r.getSubschema)(this.it, V);
      (0, r.extendSubschemaData)(Z, this.it, V), (0, r.extendSubschemaMode)(Z, V);
      const W = { ...this.it, ...Z, items: void 0, props: void 0 };
      return l(W, z), W;
    }
    mergeEvaluated(V, z) {
      const { it: Z, gen: W } = this;
      Z.opts.unevaluated && (Z.props !== !0 && V.props !== void 0 && (Z.props = v.mergeEvaluated.props(W, V.props, Z.props, z)), Z.items !== !0 && V.items !== void 0 && (Z.items = v.mergeEvaluated.items(W, V.items, Z.items, z)));
    }
    mergeValidEvaluated(V, z) {
      const { it: Z, gen: W } = this;
      if (Z.opts.unevaluated && (Z.props !== !0 || Z.items !== !0))
        return W.if(z, () => this.mergeEvaluated(V, o.Name)), !0;
    }
  }
  qe.KeywordCxt = R;
  function M(L, V, z, Z) {
    const W = new R(L, z, V);
    "code" in z ? z.code(W, Z) : W.$data && z.validate ? (0, n.funcKeywordCode)(W, z) : "macro" in z ? (0, n.macroKeywordCode)(W, z) : (z.compile || z.validate) && (0, n.funcKeywordCode)(W, z);
  }
  const J = /^\/(?:[^~]|~0|~1)*$/, X = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function K(L, { dataLevel: V, dataNames: z, dataPathArr: Z }) {
    let W, Y;
    if (L === "")
      return c.default.rootData;
    if (L[0] === "/") {
      if (!J.test(L))
        throw new Error(`Invalid JSON-pointer: ${L}`);
      W = L, Y = c.default.rootData;
    } else {
      const oe = X.exec(L);
      if (!oe)
        throw new Error(`Invalid JSON-pointer: ${L}`);
      const se = +oe[1];
      if (W = oe[2], W === "#") {
        if (se >= V)
          throw new Error(ae("property/index", se));
        return Z[V - se];
      }
      if (se > V)
        throw new Error(ae("data", se));
      if (Y = z[V - se], !W)
        return Y;
    }
    let re = Y;
    const le = W.split("/");
    for (const oe of le)
      oe && (Y = (0, o._)`${Y}${(0, o.getProperty)((0, v.unescapeJsonPointer)(oe))}`, re = (0, o._)`${re} && ${Y}`);
    return re;
    function ae(oe, se) {
      return `Cannot access ${oe} ${se} levels up, current level is ${V}`;
    }
  }
  return qe.getData = K, qe;
}
var Tt = {}, Ki;
function Fn() {
  if (Ki) return Tt;
  Ki = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(i) {
      super("validation failed"), this.errors = i, this.ajv = this.validation = !0;
    }
  }
  return Tt.default = e, Tt;
}
var kt = {}, Zi;
function xt() {
  if (Zi) return kt;
  Zi = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zn();
  class t extends Error {
    constructor(a, h, n, r) {
      super(r || `can't resolve reference ${n} from id ${h}`), this.missingRef = (0, e.resolveUrl)(a, h, n), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(a, this.missingRef));
    }
  }
  return kt.default = t, kt;
}
var me = {}, Xi;
function Hn() {
  if (Xi) return me;
  Xi = 1, Object.defineProperty(me, "__esModule", { value: !0 }), me.resolveSchema = me.getCompilingSchema = me.resolveRef = me.compileSchema = me.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Fn(), i = /* @__PURE__ */ Ie(), a = /* @__PURE__ */ zn(), h = /* @__PURE__ */ ne(), n = /* @__PURE__ */ It();
  class r {
    constructor($) {
      var p;
      this.refs = {}, this.dynamicAnchors = {};
      let l;
      typeof $.schema == "object" && (l = $.schema), this.schema = $.schema, this.schemaId = $.schemaId, this.root = $.root || this, this.baseId = (p = $.baseId) !== null && p !== void 0 ? p : (0, a.normalizeId)(l?.[$.schemaId || "$id"]), this.schemaPath = $.schemaPath, this.localRefs = $.localRefs, this.meta = $.meta, this.$async = l?.$async, this.refs = {};
    }
  }
  me.SchemaEnv = r;
  function o(y) {
    const $ = v.call(this, y);
    if ($)
      return $;
    const p = (0, a.getFullPath)(this.opts.uriResolver, y.root.baseId), { es5: l, lines: s } = this.opts.code, { ownProperties: d } = this.opts, g = new e.CodeGen(this.scope, { es5: l, lines: s, ownProperties: d });
    let I;
    y.$async && (I = g.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const S = g.scopeName("validate");
    y.validateName = S;
    const j = {
      gen: g,
      allErrors: this.opts.allErrors,
      data: i.default.data,
      parentData: i.default.parentData,
      parentDataProperty: i.default.parentDataProperty,
      dataNames: [i.default.data],
      dataPathArr: [e.nil],
      // TODO can its length be used as dataLevel if nil is removed?
      dataLevel: 0,
      dataTypes: [],
      definedProperties: /* @__PURE__ */ new Set(),
      topSchemaRef: g.scopeValue("schema", this.opts.code.source === !0 ? { ref: y.schema, code: (0, e.stringify)(y.schema) } : { ref: y.schema }),
      validateName: S,
      ValidationError: I,
      schema: y.schema,
      schemaEnv: y,
      rootId: p,
      baseId: y.baseId || p,
      schemaPath: e.nil,
      errSchemaPath: y.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let O;
    try {
      this._compilations.add(y), (0, n.validateFunctionCode)(j), g.optimize(this.opts.code.optimize);
      const k = g.toString();
      O = `${g.scopeRefs(i.default.scope)}return ${k}`, this.opts.code.process && (O = this.opts.code.process(O, y));
      const T = new Function(`${i.default.self}`, `${i.default.scope}`, O)(this, this.scope.get());
      if (this.scope.value(S, { ref: T }), T.errors = null, T.schema = y.schema, T.schemaEnv = y, y.$async && (T.$async = !0), this.opts.code.source === !0 && (T.source = { validateName: S, validateCode: k, scopeValues: g._values }), this.opts.unevaluated) {
        const { props: P, items: B } = j;
        T.evaluated = {
          props: P instanceof e.Name ? void 0 : P,
          items: B instanceof e.Name ? void 0 : B,
          dynamicProps: P instanceof e.Name,
          dynamicItems: B instanceof e.Name
        }, T.source && (T.source.evaluated = (0, e.stringify)(T.evaluated));
      }
      return y.validate = T, y;
    } catch (k) {
      throw delete y.validate, delete y.validateName, O && this.logger.error("Error compiling schema, function code:", O), k;
    } finally {
      this._compilations.delete(y);
    }
  }
  me.compileSchema = o;
  function c(y, $, p) {
    var l;
    p = (0, a.resolveUrl)(this.opts.uriResolver, $, p);
    const s = y.refs[p];
    if (s)
      return s;
    let d = u.call(this, y, p);
    if (d === void 0) {
      const g = (l = y.localRefs) === null || l === void 0 ? void 0 : l[p], { schemaId: I } = this.opts;
      g && (d = new r({ schema: g, schemaId: I, root: y, baseId: $ }));
    }
    if (d !== void 0)
      return y.refs[p] = m.call(this, d);
  }
  me.resolveRef = c;
  function m(y) {
    return (0, a.inlineRef)(y.schema, this.opts.inlineRefs) ? y.schema : y.validate ? y : o.call(this, y);
  }
  function v(y) {
    for (const $ of this._compilations)
      if (w($, y))
        return $;
  }
  me.getCompilingSchema = v;
  function w(y, $) {
    return y.schema === $.schema && y.root === $.root && y.baseId === $.baseId;
  }
  function u(y, $) {
    let p;
    for (; typeof (p = this.refs[$]) == "string"; )
      $ = p;
    return p || this.schemas[$] || f.call(this, y, $);
  }
  function f(y, $) {
    const p = this.opts.uriResolver.parse($), l = (0, a._getFullPath)(this.opts.uriResolver, p);
    let s = (0, a.getFullPath)(this.opts.uriResolver, y.baseId, void 0);
    if (Object.keys(y.schema).length > 0 && l === s)
      return _.call(this, p, y);
    const d = (0, a.normalizeId)(l), g = this.refs[d] || this.schemas[d];
    if (typeof g == "string") {
      const I = f.call(this, y, g);
      return typeof I?.schema != "object" ? void 0 : _.call(this, p, I);
    }
    if (typeof g?.schema == "object") {
      if (g.validate || o.call(this, g), d === (0, a.normalizeId)($)) {
        const { schema: I } = g, { schemaId: S } = this.opts, j = I[S];
        return j && (s = (0, a.resolveUrl)(this.opts.uriResolver, s, j)), new r({ schema: I, schemaId: S, root: y, baseId: s });
      }
      return _.call(this, p, g);
    }
  }
  me.resolveSchema = f;
  const b = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function _(y, { baseId: $, schema: p, root: l }) {
    var s;
    if (((s = y.fragment) === null || s === void 0 ? void 0 : s[0]) !== "/")
      return;
    for (const I of y.fragment.slice(1).split("/")) {
      if (typeof p == "boolean")
        return;
      const S = p[(0, h.unescapeFragment)(I)];
      if (S === void 0)
        return;
      p = S;
      const j = typeof p == "object" && p[this.opts.schemaId];
      !b.has(I) && j && ($ = (0, a.resolveUrl)(this.opts.uriResolver, $, j));
    }
    let d;
    if (typeof p != "boolean" && p.$ref && !(0, h.schemaHasRulesButRef)(p, this.RULES)) {
      const I = (0, a.resolveUrl)(this.opts.uriResolver, $, p.$ref);
      d = f.call(this, l, I);
    }
    const { schemaId: g } = this.opts;
    if (d = d || new r({ schema: p, schemaId: g, root: l, baseId: $ }), d.schema !== d.root.schema)
      return d;
  }
  return me;
}
const Ac = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Pc = "Meta-schema for $data reference (JSON AnySchema extension proposal)", qc = "object", Tc = ["$data"], kc = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Dc = !1, Mc = {
  $id: Ac,
  description: Pc,
  type: qc,
  required: Tc,
  properties: kc,
  additionalProperties: Dc
};
var Dt = {}, yt = { exports: {} }, or, Wi;
function oo() {
  if (Wi) return or;
  Wi = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function i(u) {
    let f = "", b = 0, _ = 0;
    for (_ = 0; _ < u.length; _++)
      if (b = u[_].charCodeAt(0), b !== 48) {
        if (!(b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102))
          return "";
        f += u[_];
        break;
      }
    for (_ += 1; _ < u.length; _++) {
      if (b = u[_].charCodeAt(0), !(b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102))
        return "";
      f += u[_];
    }
    return f;
  }
  const a = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function h(u) {
    return u.length = 0, !0;
  }
  function n(u, f, b) {
    if (u.length) {
      const _ = i(u);
      if (_ !== "")
        f.push(_);
      else
        return b.error = !0, !1;
      u.length = 0;
    }
    return !0;
  }
  function r(u) {
    let f = 0;
    const b = { error: !1, address: "", zone: "" }, _ = [], y = [];
    let $ = !1, p = !1, l = n;
    for (let s = 0; s < u.length; s++) {
      const d = u[s];
      if (!(d === "[" || d === "]"))
        if (d === ":") {
          if ($ === !0 && (p = !0), !l(y, _, b))
            break;
          if (++f > 7) {
            b.error = !0;
            break;
          }
          s > 0 && u[s - 1] === ":" && ($ = !0), _.push(":");
          continue;
        } else if (d === "%") {
          if (!l(y, _, b))
            break;
          l = h;
        } else {
          y.push(d);
          continue;
        }
    }
    return y.length && (l === h ? b.zone = y.join("") : p ? _.push(y.join("")) : _.push(i(y))), b.address = _.join(""), b;
  }
  function o(u) {
    if (c(u, ":") < 2)
      return { host: u, isIPV6: !1 };
    const f = r(u);
    if (f.error)
      return { host: u, isIPV6: !1 };
    {
      let b = f.address, _ = f.address;
      return f.zone && (b += "%" + f.zone, _ += "%25" + f.zone), { host: b, isIPV6: !0, escapedHost: _ };
    }
  }
  function c(u, f) {
    let b = 0;
    for (let _ = 0; _ < u.length; _++)
      u[_] === f && b++;
    return b;
  }
  function m(u) {
    let f = u;
    const b = [];
    let _ = -1, y = 0;
    for (; y = f.length; ) {
      if (y === 1) {
        if (f === ".")
          break;
        if (f === "/") {
          b.push("/");
          break;
        } else {
          b.push(f);
          break;
        }
      } else if (y === 2) {
        if (f[0] === ".") {
          if (f[1] === ".")
            break;
          if (f[1] === "/") {
            f = f.slice(2);
            continue;
          }
        } else if (f[0] === "/" && (f[1] === "." || f[1] === "/")) {
          b.push("/");
          break;
        }
      } else if (y === 3 && f === "/..") {
        b.length !== 0 && b.pop(), b.push("/");
        break;
      }
      if (f[0] === ".") {
        if (f[1] === ".") {
          if (f[2] === "/") {
            f = f.slice(3);
            continue;
          }
        } else if (f[1] === "/") {
          f = f.slice(2);
          continue;
        }
      } else if (f[0] === "/" && f[1] === ".") {
        if (f[2] === "/") {
          f = f.slice(2);
          continue;
        } else if (f[2] === "." && f[3] === "/") {
          f = f.slice(3), b.length !== 0 && b.pop();
          continue;
        }
      }
      if ((_ = f.indexOf("/", 1)) === -1) {
        b.push(f);
        break;
      } else
        b.push(f.slice(0, _)), f = f.slice(_);
    }
    return b.join("");
  }
  function v(u, f) {
    const b = f !== !0 ? escape : unescape;
    return u.scheme !== void 0 && (u.scheme = b(u.scheme)), u.userinfo !== void 0 && (u.userinfo = b(u.userinfo)), u.host !== void 0 && (u.host = b(u.host)), u.path !== void 0 && (u.path = b(u.path)), u.query !== void 0 && (u.query = b(u.query)), u.fragment !== void 0 && (u.fragment = b(u.fragment)), u;
  }
  function w(u) {
    const f = [];
    if (u.userinfo !== void 0 && (f.push(u.userinfo), f.push("@")), u.host !== void 0) {
      let b = unescape(u.host);
      if (!t(b)) {
        const _ = o(b);
        _.isIPV6 === !0 ? b = `[${_.escapedHost}]` : b = u.host;
      }
      f.push(b);
    }
    return (typeof u.port == "number" || typeof u.port == "string") && (f.push(":"), f.push(String(u.port))), f.length ? f.join("") : void 0;
  }
  return or = {
    nonSimpleDomain: a,
    recomposeAuthority: w,
    normalizeComponentEncoding: v,
    removeDotSegments: m,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: o,
    stringArrayToHexStripped: i
  }, or;
}
var cr, Qi;
function Lc() {
  if (Qi) return cr;
  Qi = 1;
  const { isUUID: e } = oo(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, i = (
    /** @type {const} */
    [
      "http",
      "https",
      "ws",
      "wss",
      "urn",
      "urn:uuid"
    ]
  );
  function a(d) {
    return i.indexOf(
      /** @type {*} */
      d
    ) !== -1;
  }
  function h(d) {
    return d.secure === !0 ? !0 : d.secure === !1 ? !1 : d.scheme ? d.scheme.length === 3 && (d.scheme[0] === "w" || d.scheme[0] === "W") && (d.scheme[1] === "s" || d.scheme[1] === "S") && (d.scheme[2] === "s" || d.scheme[2] === "S") : !1;
  }
  function n(d) {
    return d.host || (d.error = d.error || "HTTP URIs must have a host."), d;
  }
  function r(d) {
    const g = String(d.scheme).toLowerCase() === "https";
    return (d.port === (g ? 443 : 80) || d.port === "") && (d.port = void 0), d.path || (d.path = "/"), d;
  }
  function o(d) {
    return d.secure = h(d), d.resourceName = (d.path || "/") + (d.query ? "?" + d.query : ""), d.path = void 0, d.query = void 0, d;
  }
  function c(d) {
    if ((d.port === (h(d) ? 443 : 80) || d.port === "") && (d.port = void 0), typeof d.secure == "boolean" && (d.scheme = d.secure ? "wss" : "ws", d.secure = void 0), d.resourceName) {
      const [g, I] = d.resourceName.split("?");
      d.path = g && g !== "/" ? g : void 0, d.query = I, d.resourceName = void 0;
    }
    return d.fragment = void 0, d;
  }
  function m(d, g) {
    if (!d.path)
      return d.error = "URN can not be parsed", d;
    const I = d.path.match(t);
    if (I) {
      const S = g.scheme || d.scheme || "urn";
      d.nid = I[1].toLowerCase(), d.nss = I[2];
      const j = `${S}:${g.nid || d.nid}`, O = s(j);
      d.path = void 0, O && (d = O.parse(d, g));
    } else
      d.error = d.error || "URN can not be parsed.";
    return d;
  }
  function v(d, g) {
    if (d.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const I = g.scheme || d.scheme || "urn", S = d.nid.toLowerCase(), j = `${I}:${g.nid || S}`, O = s(j);
    O && (d = O.serialize(d, g));
    const k = d, C = d.nss;
    return k.path = `${S || g.nid}:${C}`, g.skipEscape = !0, k;
  }
  function w(d, g) {
    const I = d;
    return I.uuid = I.nss, I.nss = void 0, !g.tolerant && (!I.uuid || !e(I.uuid)) && (I.error = I.error || "UUID is not valid."), I;
  }
  function u(d) {
    const g = d;
    return g.nss = (d.uuid || "").toLowerCase(), g;
  }
  const f = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: n,
      serialize: r
    }
  ), b = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: f.domainHost,
      parse: n,
      serialize: r
    }
  ), _ = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: o,
      serialize: c
    }
  ), y = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: _.domainHost,
      parse: _.parse,
      serialize: _.serialize
    }
  ), l = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: f,
      https: b,
      ws: _,
      wss: y,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: m,
          serialize: v,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: w,
          serialize: u,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(l, null);
  function s(d) {
    return d && (l[
      /** @type {SchemeName} */
      d
    ] || l[
      /** @type {SchemeName} */
      d.toLowerCase()
    ]) || void 0;
  }
  return cr = {
    wsIsSecure: h,
    SCHEMES: l,
    isValidSchemeName: a,
    getSchemeHandler: s
  }, cr;
}
var Yi;
function Cc() {
  if (Yi) return yt.exports;
  Yi = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: i, normalizeComponentEncoding: a, isIPv4: h, nonSimpleDomain: n } = oo(), { SCHEMES: r, getSchemeHandler: o } = Lc();
  function c(y, $) {
    return typeof y == "string" ? y = /** @type {T} */
    u(b(y, $), $) : typeof y == "object" && (y = /** @type {T} */
    b(u(y, $), $)), y;
  }
  function m(y, $, p) {
    const l = p ? Object.assign({ scheme: "null" }, p) : { scheme: "null" }, s = v(b(y, l), b($, l), l, !0);
    return l.skipEscape = !0, u(s, l);
  }
  function v(y, $, p, l) {
    const s = {};
    return l || (y = b(u(y, p), p), $ = b(u($, p), p)), p = p || {}, !p.tolerant && $.scheme ? (s.scheme = $.scheme, s.userinfo = $.userinfo, s.host = $.host, s.port = $.port, s.path = t($.path || ""), s.query = $.query) : ($.userinfo !== void 0 || $.host !== void 0 || $.port !== void 0 ? (s.userinfo = $.userinfo, s.host = $.host, s.port = $.port, s.path = t($.path || ""), s.query = $.query) : ($.path ? ($.path[0] === "/" ? s.path = t($.path) : ((y.userinfo !== void 0 || y.host !== void 0 || y.port !== void 0) && !y.path ? s.path = "/" + $.path : y.path ? s.path = y.path.slice(0, y.path.lastIndexOf("/") + 1) + $.path : s.path = $.path, s.path = t(s.path)), s.query = $.query) : (s.path = y.path, $.query !== void 0 ? s.query = $.query : s.query = y.query), s.userinfo = y.userinfo, s.host = y.host, s.port = y.port), s.scheme = y.scheme), s.fragment = $.fragment, s;
  }
  function w(y, $, p) {
    return typeof y == "string" ? (y = unescape(y), y = u(a(b(y, p), !0), { ...p, skipEscape: !0 })) : typeof y == "object" && (y = u(a(y, !0), { ...p, skipEscape: !0 })), typeof $ == "string" ? ($ = unescape($), $ = u(a(b($, p), !0), { ...p, skipEscape: !0 })) : typeof $ == "object" && ($ = u(a($, !0), { ...p, skipEscape: !0 })), y.toLowerCase() === $.toLowerCase();
  }
  function u(y, $) {
    const p = {
      host: y.host,
      scheme: y.scheme,
      userinfo: y.userinfo,
      port: y.port,
      path: y.path,
      query: y.query,
      nid: y.nid,
      nss: y.nss,
      uuid: y.uuid,
      fragment: y.fragment,
      reference: y.reference,
      resourceName: y.resourceName,
      secure: y.secure,
      error: ""
    }, l = Object.assign({}, $), s = [], d = o(l.scheme || p.scheme);
    d && d.serialize && d.serialize(p, l), p.path !== void 0 && (l.skipEscape ? p.path = unescape(p.path) : (p.path = escape(p.path), p.scheme !== void 0 && (p.path = p.path.split("%3A").join(":")))), l.reference !== "suffix" && p.scheme && s.push(p.scheme, ":");
    const g = i(p);
    if (g !== void 0 && (l.reference !== "suffix" && s.push("//"), s.push(g), p.path && p.path[0] !== "/" && s.push("/")), p.path !== void 0) {
      let I = p.path;
      !l.absolutePath && (!d || !d.absolutePath) && (I = t(I)), g === void 0 && I[0] === "/" && I[1] === "/" && (I = "/%2F" + I.slice(2)), s.push(I);
    }
    return p.query !== void 0 && s.push("?", p.query), p.fragment !== void 0 && s.push("#", p.fragment), s.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function b(y, $) {
    const p = Object.assign({}, $), l = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let s = !1;
    p.reference === "suffix" && (p.scheme ? y = p.scheme + ":" + y : y = "//" + y);
    const d = y.match(f);
    if (d) {
      if (l.scheme = d[1], l.userinfo = d[3], l.host = d[4], l.port = parseInt(d[5], 10), l.path = d[6] || "", l.query = d[7], l.fragment = d[8], isNaN(l.port) && (l.port = d[5]), l.host)
        if (h(l.host) === !1) {
          const S = e(l.host);
          l.host = S.host.toLowerCase(), s = S.isIPV6;
        } else
          s = !0;
      l.scheme === void 0 && l.userinfo === void 0 && l.host === void 0 && l.port === void 0 && l.query === void 0 && !l.path ? l.reference = "same-document" : l.scheme === void 0 ? l.reference = "relative" : l.fragment === void 0 ? l.reference = "absolute" : l.reference = "uri", p.reference && p.reference !== "suffix" && p.reference !== l.reference && (l.error = l.error || "URI is not a " + p.reference + " reference.");
      const g = o(p.scheme || l.scheme);
      if (!p.unicodeSupport && (!g || !g.unicodeSupport) && l.host && (p.domainHost || g && g.domainHost) && s === !1 && n(l.host))
        try {
          l.host = URL.domainToASCII(l.host.toLowerCase());
        } catch (I) {
          l.error = l.error || "Host's domain name can not be converted to ASCII: " + I;
        }
      (!g || g && !g.skipNormalize) && (y.indexOf("%") !== -1 && (l.scheme !== void 0 && (l.scheme = unescape(l.scheme)), l.host !== void 0 && (l.host = unescape(l.host))), l.path && (l.path = escape(unescape(l.path))), l.fragment && (l.fragment = encodeURI(decodeURIComponent(l.fragment)))), g && g.parse && g.parse(l, p);
    } else
      l.error = l.error || "URI can not be parsed.";
    return l;
  }
  const _ = {
    SCHEMES: r,
    normalize: c,
    resolve: m,
    resolveComponent: v,
    equal: w,
    serialize: u,
    parse: b
  };
  return yt.exports = _, yt.exports.default = _, yt.exports.fastUri = _, yt.exports;
}
var es;
function Uc() {
  if (es) return Dt;
  es = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = Cc();
  return e.code = 'require("ajv/dist/runtime/uri").default', Dt.default = e, Dt;
}
var ts;
function co() {
  return ts || (ts = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ It();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var i = /* @__PURE__ */ ee();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return i._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return i.str;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return i.stringify;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return i.nil;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return i.Name;
    } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
      return i.CodeGen;
    } });
    const a = /* @__PURE__ */ Fn(), h = /* @__PURE__ */ xt(), n = /* @__PURE__ */ io(), r = /* @__PURE__ */ Hn(), o = /* @__PURE__ */ ee(), c = /* @__PURE__ */ zn(), m = /* @__PURE__ */ Mn(), v = /* @__PURE__ */ ne(), w = Mc, u = /* @__PURE__ */ Uc(), f = (N, q) => new RegExp(N, q);
    f.code = "new RegExp";
    const b = ["removeAdditional", "useDefaults", "coerceTypes"], _ = /* @__PURE__ */ new Set([
      "validate",
      "serialize",
      "parse",
      "wrapper",
      "root",
      "schema",
      "keyword",
      "pattern",
      "formats",
      "validate$data",
      "func",
      "obj",
      "Error"
    ]), y = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now."
    }, $ = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, p = 200;
    function l(N) {
      var q, U, D, E, x, R, M, J, X, K, L, V, z, Z, W, Y, re, le, ae, oe, se, Ee, ge, Kn, Zn;
      const pt = N.strict, Xn = (q = N.code) === null || q === void 0 ? void 0 : q.optimize, bi = Xn === !0 || Xn === void 0 ? 1 : Xn || 0, wi = (D = (U = N.code) === null || U === void 0 ? void 0 : U.regExp) !== null && D !== void 0 ? D : f, qo = (E = N.uriResolver) !== null && E !== void 0 ? E : u.default;
      return {
        strictSchema: (R = (x = N.strictSchema) !== null && x !== void 0 ? x : pt) !== null && R !== void 0 ? R : !0,
        strictNumbers: (J = (M = N.strictNumbers) !== null && M !== void 0 ? M : pt) !== null && J !== void 0 ? J : !0,
        strictTypes: (K = (X = N.strictTypes) !== null && X !== void 0 ? X : pt) !== null && K !== void 0 ? K : "log",
        strictTuples: (V = (L = N.strictTuples) !== null && L !== void 0 ? L : pt) !== null && V !== void 0 ? V : "log",
        strictRequired: (Z = (z = N.strictRequired) !== null && z !== void 0 ? z : pt) !== null && Z !== void 0 ? Z : !1,
        code: N.code ? { ...N.code, optimize: bi, regExp: wi } : { optimize: bi, regExp: wi },
        loopRequired: (W = N.loopRequired) !== null && W !== void 0 ? W : p,
        loopEnum: (Y = N.loopEnum) !== null && Y !== void 0 ? Y : p,
        meta: (re = N.meta) !== null && re !== void 0 ? re : !0,
        messages: (le = N.messages) !== null && le !== void 0 ? le : !0,
        inlineRefs: (ae = N.inlineRefs) !== null && ae !== void 0 ? ae : !0,
        schemaId: (oe = N.schemaId) !== null && oe !== void 0 ? oe : "$id",
        addUsedSchema: (se = N.addUsedSchema) !== null && se !== void 0 ? se : !0,
        validateSchema: (Ee = N.validateSchema) !== null && Ee !== void 0 ? Ee : !0,
        validateFormats: (ge = N.validateFormats) !== null && ge !== void 0 ? ge : !0,
        unicodeRegExp: (Kn = N.unicodeRegExp) !== null && Kn !== void 0 ? Kn : !0,
        int32range: (Zn = N.int32range) !== null && Zn !== void 0 ? Zn : !0,
        uriResolver: qo
      };
    }
    class s {
      constructor(q = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), q = this.opts = { ...q, ...l(q) };
        const { es5: U, lines: D } = this.opts.code;
        this.scope = new o.ValueScope({ scope: {}, prefixes: _, es5: U, lines: D }), this.logger = C(q.logger);
        const E = q.validateFormats;
        q.validateFormats = !1, this.RULES = (0, n.getRules)(), d.call(this, y, q, "NOT SUPPORTED"), d.call(this, $, q, "DEPRECATED", "warn"), this._metaOpts = O.call(this), q.formats && S.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), q.keywords && j.call(this, q.keywords), typeof q.meta == "object" && this.addMetaSchema(q.meta), I.call(this), q.validateFormats = E;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: q, meta: U, schemaId: D } = this.opts;
        let E = w;
        D === "id" && (E = { ...w }, E.id = E.$id, delete E.$id), U && q && this.addMetaSchema(E, E[D], !1);
      }
      defaultMeta() {
        const { meta: q, schemaId: U } = this.opts;
        return this.opts.defaultMeta = typeof q == "object" ? q[U] || q : void 0;
      }
      validate(q, U) {
        let D;
        if (typeof q == "string") {
          if (D = this.getSchema(q), !D)
            throw new Error(`no schema with key or ref "${q}"`);
        } else
          D = this.compile(q);
        const E = D(U);
        return "$async" in D || (this.errors = D.errors), E;
      }
      compile(q, U) {
        const D = this._addSchema(q, U);
        return D.validate || this._compileSchemaEnv(D);
      }
      compileAsync(q, U) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: D } = this.opts;
        return E.call(this, q, U);
        async function E(K, L) {
          await x.call(this, K.$schema);
          const V = this._addSchema(K, L);
          return V.validate || R.call(this, V);
        }
        async function x(K) {
          K && !this.getSchema(K) && await E.call(this, { $ref: K }, !0);
        }
        async function R(K) {
          try {
            return this._compileSchemaEnv(K);
          } catch (L) {
            if (!(L instanceof h.default))
              throw L;
            return M.call(this, L), await J.call(this, L.missingSchema), R.call(this, K);
          }
        }
        function M({ missingSchema: K, missingRef: L }) {
          if (this.refs[K])
            throw new Error(`AnySchema ${K} is loaded but ${L} cannot be resolved`);
        }
        async function J(K) {
          const L = await X.call(this, K);
          this.refs[K] || await x.call(this, L.$schema), this.refs[K] || this.addSchema(L, K, U);
        }
        async function X(K) {
          const L = this._loading[K];
          if (L)
            return L;
          try {
            return await (this._loading[K] = D(K));
          } finally {
            delete this._loading[K];
          }
        }
      }
      // Adds schema to the instance
      addSchema(q, U, D, E = this.opts.validateSchema) {
        if (Array.isArray(q)) {
          for (const R of q)
            this.addSchema(R, void 0, D, E);
          return this;
        }
        let x;
        if (typeof q == "object") {
          const { schemaId: R } = this.opts;
          if (x = q[R], x !== void 0 && typeof x != "string")
            throw new Error(`schema ${R} must be string`);
        }
        return U = (0, c.normalizeId)(U || x), this._checkUnique(U), this.schemas[U] = this._addSchema(q, D, U, E, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(q, U, D = this.opts.validateSchema) {
        return this.addSchema(q, U, !0, D), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(q, U) {
        if (typeof q == "boolean")
          return !0;
        let D;
        if (D = q.$schema, D !== void 0 && typeof D != "string")
          throw new Error("$schema must be a string");
        if (D = D || this.opts.defaultMeta || this.defaultMeta(), !D)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const E = this.validate(D, q);
        if (!E && U) {
          const x = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(x);
          else
            throw new Error(x);
        }
        return E;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(q) {
        let U;
        for (; typeof (U = g.call(this, q)) == "string"; )
          q = U;
        if (U === void 0) {
          const { schemaId: D } = this.opts, E = new r.SchemaEnv({ schema: {}, schemaId: D });
          if (U = r.resolveSchema.call(this, E, q), !U)
            return;
          this.refs[q] = U;
        }
        return U.validate || this._compileSchemaEnv(U);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(q) {
        if (q instanceof RegExp)
          return this._removeAllSchemas(this.schemas, q), this._removeAllSchemas(this.refs, q), this;
        switch (typeof q) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const U = g.call(this, q);
            return typeof U == "object" && this._cache.delete(U.schema), delete this.schemas[q], delete this.refs[q], this;
          }
          case "object": {
            const U = q;
            this._cache.delete(U);
            let D = q[this.opts.schemaId];
            return D && (D = (0, c.normalizeId)(D), delete this.schemas[D], delete this.refs[D]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(q) {
        for (const U of q)
          this.addKeyword(U);
        return this;
      }
      addKeyword(q, U) {
        let D;
        if (typeof q == "string")
          D = q, typeof U == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), U.keyword = D);
        else if (typeof q == "object" && U === void 0) {
          if (U = q, D = U.keyword, Array.isArray(D) && !D.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (P.call(this, D, U), !U)
          return (0, v.eachItem)(D, (x) => B.call(this, x)), this;
        H.call(this, U);
        const E = {
          ...U,
          type: (0, m.getJSONTypes)(U.type),
          schemaType: (0, m.getJSONTypes)(U.schemaType)
        };
        return (0, v.eachItem)(D, E.type.length === 0 ? (x) => B.call(this, x, E) : (x) => E.type.forEach((R) => B.call(this, x, E, R))), this;
      }
      getKeyword(q) {
        const U = this.RULES.all[q];
        return typeof U == "object" ? U.definition : !!U;
      }
      // Remove keyword
      removeKeyword(q) {
        const { RULES: U } = this;
        delete U.keywords[q], delete U.all[q];
        for (const D of U.rules) {
          const E = D.rules.findIndex((x) => x.keyword === q);
          E >= 0 && D.rules.splice(E, 1);
        }
        return this;
      }
      // Add format
      addFormat(q, U) {
        return typeof U == "string" && (U = new RegExp(U)), this.formats[q] = U, this;
      }
      errorsText(q = this.errors, { separator: U = ", ", dataVar: D = "data" } = {}) {
        return !q || q.length === 0 ? "No errors" : q.map((E) => `${D}${E.instancePath} ${E.message}`).reduce((E, x) => E + U + x);
      }
      $dataMetaSchema(q, U) {
        const D = this.RULES.all;
        q = JSON.parse(JSON.stringify(q));
        for (const E of U) {
          const x = E.split("/").slice(1);
          let R = q;
          for (const M of x)
            R = R[M];
          for (const M in D) {
            const J = D[M];
            if (typeof J != "object")
              continue;
            const { $data: X } = J.definition, K = R[M];
            X && K && (R[M] = G(K));
          }
        }
        return q;
      }
      _removeAllSchemas(q, U) {
        for (const D in q) {
          const E = q[D];
          (!U || U.test(D)) && (typeof E == "string" ? delete q[D] : E && !E.meta && (this._cache.delete(E.schema), delete q[D]));
        }
      }
      _addSchema(q, U, D, E = this.opts.validateSchema, x = this.opts.addUsedSchema) {
        let R;
        const { schemaId: M } = this.opts;
        if (typeof q == "object")
          R = q[M];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof q != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let J = this._cache.get(q);
        if (J !== void 0)
          return J;
        D = (0, c.normalizeId)(R || D);
        const X = c.getSchemaRefs.call(this, q, D);
        return J = new r.SchemaEnv({ schema: q, schemaId: M, meta: U, baseId: D, localRefs: X }), this._cache.set(J.schema, J), x && !D.startsWith("#") && (D && this._checkUnique(D), this.refs[D] = J), E && this.validateSchema(q, !0), J;
      }
      _checkUnique(q) {
        if (this.schemas[q] || this.refs[q])
          throw new Error(`schema with key or id "${q}" already exists`);
      }
      _compileSchemaEnv(q) {
        if (q.meta ? this._compileMetaSchema(q) : r.compileSchema.call(this, q), !q.validate)
          throw new Error("ajv implementation error");
        return q.validate;
      }
      _compileMetaSchema(q) {
        const U = this.opts;
        this.opts = this._metaOpts;
        try {
          r.compileSchema.call(this, q);
        } finally {
          this.opts = U;
        }
      }
    }
    s.ValidationError = a.default, s.MissingRefError = h.default, e.default = s;
    function d(N, q, U, D = "error") {
      for (const E in N) {
        const x = E;
        x in q && this.logger[D](`${U}: option ${E}. ${N[x]}`);
      }
    }
    function g(N) {
      return N = (0, c.normalizeId)(N), this.schemas[N] || this.refs[N];
    }
    function I() {
      const N = this.opts.schemas;
      if (N)
        if (Array.isArray(N))
          this.addSchema(N);
        else
          for (const q in N)
            this.addSchema(N[q], q);
    }
    function S() {
      for (const N in this.opts.formats) {
        const q = this.opts.formats[N];
        q && this.addFormat(N, q);
      }
    }
    function j(N) {
      if (Array.isArray(N)) {
        this.addVocabulary(N);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const q in N) {
        const U = N[q];
        U.keyword || (U.keyword = q), this.addKeyword(U);
      }
    }
    function O() {
      const N = { ...this.opts };
      for (const q of b)
        delete N[q];
      return N;
    }
    const k = { log() {
    }, warn() {
    }, error() {
    } };
    function C(N) {
      if (N === !1)
        return k;
      if (N === void 0)
        return console;
      if (N.log && N.warn && N.error)
        return N;
      throw new Error("logger must implement log, warn and error methods");
    }
    const T = /^[a-z_$][a-z0-9_$:-]*$/i;
    function P(N, q) {
      const { RULES: U } = this;
      if ((0, v.eachItem)(N, (D) => {
        if (U.keywords[D])
          throw new Error(`Keyword ${D} is already defined`);
        if (!T.test(D))
          throw new Error(`Keyword ${D} has invalid name`);
      }), !!q && q.$data && !("code" in q || "validate" in q))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function B(N, q, U) {
      var D;
      const E = q?.post;
      if (U && E)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: x } = this;
      let R = E ? x.post : x.rules.find(({ type: J }) => J === U);
      if (R || (R = { type: U, rules: [] }, x.rules.push(R)), x.keywords[N] = !0, !q)
        return;
      const M = {
        keyword: N,
        definition: {
          ...q,
          type: (0, m.getJSONTypes)(q.type),
          schemaType: (0, m.getJSONTypes)(q.schemaType)
        }
      };
      q.before ? A.call(this, R, M, q.before) : R.rules.push(M), x.all[N] = M, (D = q.implements) === null || D === void 0 || D.forEach((J) => this.addKeyword(J));
    }
    function A(N, q, U) {
      const D = N.rules.findIndex((E) => E.keyword === U);
      D >= 0 ? N.rules.splice(D, 0, q) : (N.rules.push(q), this.logger.warn(`rule ${U} is not defined`));
    }
    function H(N) {
      let { metaSchema: q } = N;
      q !== void 0 && (N.$data && this.opts.$data && (q = G(q)), N.validateSchema = this.compile(q, !0));
    }
    const F = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function G(N) {
      return { anyOf: [N, F] };
    }
  })(er)), er;
}
var Mt = {}, Lt = {}, Ct = {}, ns;
function Vc() {
  if (ns) return Ct;
  ns = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Ct.default = e, Ct;
}
var He = {}, rs;
function ci() {
  if (rs) return He;
  rs = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.callRef = He.getValidate = void 0;
  const e = /* @__PURE__ */ xt(), t = /* @__PURE__ */ xe(), i = /* @__PURE__ */ ee(), a = /* @__PURE__ */ Ie(), h = /* @__PURE__ */ Hn(), n = /* @__PURE__ */ ne(), r = {
    keyword: "$ref",
    schemaType: "string",
    code(m) {
      const { gen: v, schema: w, it: u } = m, { baseId: f, schemaEnv: b, validateName: _, opts: y, self: $ } = u, { root: p } = b;
      if ((w === "#" || w === "#/") && f === p.baseId)
        return s();
      const l = h.resolveRef.call($, p, f, w);
      if (l === void 0)
        throw new e.default(u.opts.uriResolver, f, w);
      if (l instanceof h.SchemaEnv)
        return d(l);
      return g(l);
      function s() {
        if (b === p)
          return c(m, _, b, b.$async);
        const I = v.scopeValue("root", { ref: p });
        return c(m, (0, i._)`${I}.validate`, p, p.$async);
      }
      function d(I) {
        const S = o(m, I);
        c(m, S, I, I.$async);
      }
      function g(I) {
        const S = v.scopeValue("schema", y.code.source === !0 ? { ref: I, code: (0, i.stringify)(I) } : { ref: I }), j = v.name("valid"), O = m.subschema({
          schema: I,
          dataTypes: [],
          schemaPath: i.nil,
          topSchemaRef: S,
          errSchemaPath: w
        }, j);
        m.mergeEvaluated(O), m.ok(j);
      }
    }
  };
  function o(m, v) {
    const { gen: w } = m;
    return v.validate ? w.scopeValue("validate", { ref: v.validate }) : (0, i._)`${w.scopeValue("wrapper", { ref: v })}.validate`;
  }
  He.getValidate = o;
  function c(m, v, w, u) {
    const { gen: f, it: b } = m, { allErrors: _, schemaEnv: y, opts: $ } = b, p = $.passContext ? a.default.this : i.nil;
    u ? l() : s();
    function l() {
      if (!y.$async)
        throw new Error("async schema referenced by sync schema");
      const I = f.let("valid");
      f.try(() => {
        f.code((0, i._)`await ${(0, t.callValidateCode)(m, v, p)}`), g(v), _ || f.assign(I, !0);
      }, (S) => {
        f.if((0, i._)`!(${S} instanceof ${b.ValidationError})`, () => f.throw(S)), d(S), _ || f.assign(I, !1);
      }), m.ok(I);
    }
    function s() {
      m.result((0, t.callValidateCode)(m, v, p), () => g(v), () => d(v));
    }
    function d(I) {
      const S = (0, i._)`${I}.errors`;
      f.assign(a.default.vErrors, (0, i._)`${a.default.vErrors} === null ? ${S} : ${a.default.vErrors}.concat(${S})`), f.assign(a.default.errors, (0, i._)`${a.default.vErrors}.length`);
    }
    function g(I) {
      var S;
      if (!b.opts.unevaluated)
        return;
      const j = (S = w?.validate) === null || S === void 0 ? void 0 : S.evaluated;
      if (b.props !== !0)
        if (j && !j.dynamicProps)
          j.props !== void 0 && (b.props = n.mergeEvaluated.props(f, j.props, b.props));
        else {
          const O = f.var("props", (0, i._)`${I}.evaluated.props`);
          b.props = n.mergeEvaluated.props(f, O, b.props, i.Name);
        }
      if (b.items !== !0)
        if (j && !j.dynamicItems)
          j.items !== void 0 && (b.items = n.mergeEvaluated.items(f, j.items, b.items));
        else {
          const O = f.var("items", (0, i._)`${I}.evaluated.items`);
          b.items = n.mergeEvaluated.items(f, O, b.items, i.Name);
        }
    }
  }
  return He.callRef = c, He.default = r, He;
}
var is;
function lo() {
  if (is) return Lt;
  is = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Vc(), t = /* @__PURE__ */ ci(), i = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Lt.default = i, Lt;
}
var Ut = {}, Vt = {}, ss;
function zc() {
  if (ss) return Vt;
  ss = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = e.operators, i = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, a = {
    message: ({ keyword: n, schemaCode: r }) => (0, e.str)`must be ${i[n].okStr} ${r}`,
    params: ({ keyword: n, schemaCode: r }) => (0, e._)`{comparison: ${i[n].okStr}, limit: ${r}}`
  }, h = {
    keyword: Object.keys(i),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: a,
    code(n) {
      const { keyword: r, data: o, schemaCode: c } = n;
      n.fail$data((0, e._)`${o} ${i[r].fail} ${c} || isNaN(${o})`);
    }
  };
  return Vt.default = h, Vt;
}
var zt = {}, as;
function Fc() {
  if (as) return zt;
  as = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), i = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: a }) => (0, e.str)`must be multiple of ${a}`,
      params: ({ schemaCode: a }) => (0, e._)`{multipleOf: ${a}}`
    },
    code(a) {
      const { gen: h, data: n, schemaCode: r, it: o } = a, c = o.opts.multipleOfPrecision, m = h.let("res"), v = c ? (0, e._)`Math.abs(Math.round(${m}) - ${m}) > 1e-${c}` : (0, e._)`${m} !== parseInt(${m})`;
      a.fail$data((0, e._)`(${r} === 0 || (${m} = ${n}/${r}, ${v}))`);
    }
  };
  return zt.default = i, zt;
}
var Ft = {}, Ht = {}, os;
function Hc() {
  if (os) return Ht;
  os = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  function e(t) {
    const i = t.length;
    let a = 0, h = 0, n;
    for (; h < i; )
      a++, n = t.charCodeAt(h++), n >= 55296 && n <= 56319 && h < i && (n = t.charCodeAt(h), (n & 64512) === 56320 && h++);
    return a;
  }
  return Ht.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Ht;
}
var cs;
function Jc() {
  if (cs) return Ft;
  cs = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), i = /* @__PURE__ */ Hc(), h = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: n, schemaCode: r }) {
        const o = n === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${o} than ${r} characters`;
      },
      params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { keyword: r, data: o, schemaCode: c, it: m } = n, v = r === "maxLength" ? e.operators.GT : e.operators.LT, w = m.opts.unicode === !1 ? (0, e._)`${o}.length` : (0, e._)`${(0, t.useFunc)(n.gen, i.default)}(${o})`;
      n.fail$data((0, e._)`${w} ${v} ${c}`);
    }
  };
  return Ft.default = h, Ft;
}
var Jt = {}, ds;
function Bc() {
  if (ds) return Jt;
  ds = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xe(), t = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ee(), h = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, i.str)`must match pattern "${n}"`,
      params: ({ schemaCode: n }) => (0, i._)`{pattern: ${n}}`
    },
    code(n) {
      const { gen: r, data: o, $data: c, schema: m, schemaCode: v, it: w } = n, u = w.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: f } = w.opts.code, b = f.code === "new RegExp" ? (0, i._)`new RegExp` : (0, t.useFunc)(r, f), _ = r.let("valid");
        r.try(() => r.assign(_, (0, i._)`${b}(${v}, ${u}).test(${o})`), () => r.assign(_, !1)), n.fail$data((0, i._)`!${_}`);
      } else {
        const f = (0, e.usePattern)(n, m);
        n.fail$data((0, i._)`!${f}.test(${o})`);
      }
    }
  };
  return Jt.default = h, Jt;
}
var Bt = {}, ls;
function Gc() {
  if (ls) return Bt;
  ls = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), i = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: a, schemaCode: h }) {
        const n = a === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${n} than ${h} properties`;
      },
      params: ({ schemaCode: a }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { keyword: h, data: n, schemaCode: r } = a, o = h === "maxProperties" ? e.operators.GT : e.operators.LT;
      a.fail$data((0, e._)`Object.keys(${n}).length ${o} ${r}`);
    }
  };
  return Bt.default = i, Bt;
}
var Gt = {}, us;
function Kc() {
  if (us) return Gt;
  us = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xe(), t = /* @__PURE__ */ ee(), i = /* @__PURE__ */ ne(), h = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: n } }) => (0, t.str)`must have required property '${n}'`,
      params: ({ params: { missingProperty: n } }) => (0, t._)`{missingProperty: ${n}}`
    },
    code(n) {
      const { gen: r, schema: o, schemaCode: c, data: m, $data: v, it: w } = n, { opts: u } = w;
      if (!v && o.length === 0)
        return;
      const f = o.length >= u.loopRequired;
      if (w.allErrors ? b() : _(), u.strictRequired) {
        const p = n.parentSchema.properties, { definedProperties: l } = n.it;
        for (const s of o)
          if (p?.[s] === void 0 && !l.has(s)) {
            const d = w.schemaEnv.baseId + w.errSchemaPath, g = `required property "${s}" is not defined at "${d}" (strictRequired)`;
            (0, i.checkStrictMode)(w, g, w.opts.strictRequired);
          }
      }
      function b() {
        if (f || v)
          n.block$data(t.nil, y);
        else
          for (const p of o)
            (0, e.checkReportMissingProp)(n, p);
      }
      function _() {
        const p = r.let("missing");
        if (f || v) {
          const l = r.let("valid", !0);
          n.block$data(l, () => $(p, l)), n.ok(l);
        } else
          r.if((0, e.checkMissingProp)(n, o, p)), (0, e.reportMissingProp)(n, p), r.else();
      }
      function y() {
        r.forOf("prop", c, (p) => {
          n.setParams({ missingProperty: p }), r.if((0, e.noPropertyInData)(r, m, p, u.ownProperties), () => n.error());
        });
      }
      function $(p, l) {
        n.setParams({ missingProperty: p }), r.forOf(p, c, () => {
          r.assign(l, (0, e.propertyInData)(r, m, p, u.ownProperties)), r.if((0, t.not)(l), () => {
            n.error(), r.break();
          });
        }, t.nil);
      }
    }
  };
  return Gt.default = h, Gt;
}
var Kt = {}, fs;
function Zc() {
  if (fs) return Kt;
  fs = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), i = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: a, schemaCode: h }) {
        const n = a === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${n} than ${h} items`;
      },
      params: ({ schemaCode: a }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { keyword: h, data: n, schemaCode: r } = a, o = h === "maxItems" ? e.operators.GT : e.operators.LT;
      a.fail$data((0, e._)`${n}.length ${o} ${r}`);
    }
  };
  return Kt.default = i, Kt;
}
var Zt = {}, Xt = {}, ps;
function di() {
  if (ps) return Xt;
  ps = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = ao();
  return e.code = 'require("ajv/dist/runtime/equal").default', Xt.default = e, Xt;
}
var hs;
function Xc() {
  if (hs) return Zt;
  hs = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Mn(), t = /* @__PURE__ */ ee(), i = /* @__PURE__ */ ne(), a = /* @__PURE__ */ di(), n = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: r, j: o } }) => (0, t.str)`must NOT have duplicate items (items ## ${o} and ${r} are identical)`,
      params: ({ params: { i: r, j: o } }) => (0, t._)`{i: ${r}, j: ${o}}`
    },
    code(r) {
      const { gen: o, data: c, $data: m, schema: v, parentSchema: w, schemaCode: u, it: f } = r;
      if (!m && !v)
        return;
      const b = o.let("valid"), _ = w.items ? (0, e.getSchemaTypes)(w.items) : [];
      r.block$data(b, y, (0, t._)`${u} === false`), r.ok(b);
      function y() {
        const s = o.let("i", (0, t._)`${c}.length`), d = o.let("j");
        r.setParams({ i: s, j: d }), o.assign(b, !0), o.if((0, t._)`${s} > 1`, () => ($() ? p : l)(s, d));
      }
      function $() {
        return _.length > 0 && !_.some((s) => s === "object" || s === "array");
      }
      function p(s, d) {
        const g = o.name("item"), I = (0, e.checkDataTypes)(_, g, f.opts.strictNumbers, e.DataType.Wrong), S = o.const("indices", (0, t._)`{}`);
        o.for((0, t._)`;${s}--;`, () => {
          o.let(g, (0, t._)`${c}[${s}]`), o.if(I, (0, t._)`continue`), _.length > 1 && o.if((0, t._)`typeof ${g} == "string"`, (0, t._)`${g} += "_"`), o.if((0, t._)`typeof ${S}[${g}] == "number"`, () => {
            o.assign(d, (0, t._)`${S}[${g}]`), r.error(), o.assign(b, !1).break();
          }).code((0, t._)`${S}[${g}] = ${s}`);
        });
      }
      function l(s, d) {
        const g = (0, i.useFunc)(o, a.default), I = o.name("outer");
        o.label(I).for((0, t._)`;${s}--;`, () => o.for((0, t._)`${d} = ${s}; ${d}--;`, () => o.if((0, t._)`${g}(${c}[${s}], ${c}[${d}])`, () => {
          r.error(), o.assign(b, !1).break(I);
        })));
      }
    }
  };
  return Zt.default = n, Zt;
}
var Wt = {}, ms;
function Wc() {
  if (ms) return Wt;
  ms = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), i = /* @__PURE__ */ di(), h = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: n }) => (0, e._)`{allowedValue: ${n}}`
    },
    code(n) {
      const { gen: r, data: o, $data: c, schemaCode: m, schema: v } = n;
      c || v && typeof v == "object" ? n.fail$data((0, e._)`!${(0, t.useFunc)(r, i.default)}(${o}, ${m})`) : n.fail((0, e._)`${v} !== ${o}`);
    }
  };
  return Wt.default = h, Wt;
}
var Qt = {}, ys;
function Qc() {
  if (ys) return Qt;
  ys = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), i = /* @__PURE__ */ di(), h = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: n }) => (0, e._)`{allowedValues: ${n}}`
    },
    code(n) {
      const { gen: r, data: o, $data: c, schema: m, schemaCode: v, it: w } = n;
      if (!c && m.length === 0)
        throw new Error("enum must have non-empty array");
      const u = m.length >= w.opts.loopEnum;
      let f;
      const b = () => f ?? (f = (0, t.useFunc)(r, i.default));
      let _;
      if (u || c)
        _ = r.let("valid"), n.block$data(_, y);
      else {
        if (!Array.isArray(m))
          throw new Error("ajv implementation error");
        const p = r.const("vSchema", v);
        _ = (0, e.or)(...m.map((l, s) => $(p, s)));
      }
      n.pass(_);
      function y() {
        r.assign(_, !1), r.forOf("v", v, (p) => r.if((0, e._)`${b()}(${o}, ${p})`, () => r.assign(_, !0).break()));
      }
      function $(p, l) {
        const s = m[l];
        return typeof s == "object" && s !== null ? (0, e._)`${b()}(${o}, ${p}[${l}])` : (0, e._)`${o} === ${s}`;
      }
    }
  };
  return Qt.default = h, Qt;
}
var gs;
function uo() {
  if (gs) return Ut;
  gs = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zc(), t = /* @__PURE__ */ Fc(), i = /* @__PURE__ */ Jc(), a = /* @__PURE__ */ Bc(), h = /* @__PURE__ */ Gc(), n = /* @__PURE__ */ Kc(), r = /* @__PURE__ */ Zc(), o = /* @__PURE__ */ Xc(), c = /* @__PURE__ */ Wc(), m = /* @__PURE__ */ Qc(), v = [
    // number
    e.default,
    t.default,
    // string
    i.default,
    a.default,
    // object
    h.default,
    n.default,
    // array
    r.default,
    o.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    c.default,
    m.default
  ];
  return Ut.default = v, Ut;
}
var Yt = {}, et = {}, vs;
function fo() {
  if (vs) return et;
  vs = 1, Object.defineProperty(et, "__esModule", { value: !0 }), et.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), a = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: n } }) => (0, e.str)`must NOT have more than ${n} items`,
      params: ({ params: { len: n } }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { parentSchema: r, it: o } = n, { items: c } = r;
      if (!Array.isArray(c)) {
        (0, t.checkStrictMode)(o, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      h(n, c);
    }
  };
  function h(n, r) {
    const { gen: o, schema: c, data: m, keyword: v, it: w } = n;
    w.items = !0;
    const u = o.const("len", (0, e._)`${m}.length`);
    if (c === !1)
      n.setParams({ len: r.length }), n.pass((0, e._)`${u} <= ${r.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(w, c)) {
      const b = o.var("valid", (0, e._)`${u} <= ${r.length}`);
      o.if((0, e.not)(b), () => f(b)), n.ok(b);
    }
    function f(b) {
      o.forRange("i", r.length, u, (_) => {
        n.subschema({ keyword: v, dataProp: _, dataPropType: t.Type.Num }, b), w.allErrors || o.if((0, e.not)(b), () => o.break());
      });
    }
  }
  return et.validateAdditionalItems = h, et.default = a, et;
}
var en = {}, tt = {}, bs;
function po() {
  if (bs) return tt;
  bs = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.validateTuple = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), i = /* @__PURE__ */ xe(), a = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(n) {
      const { schema: r, it: o } = n;
      if (Array.isArray(r))
        return h(n, "additionalItems", r);
      o.items = !0, !(0, t.alwaysValidSchema)(o, r) && n.ok((0, i.validateArray)(n));
    }
  };
  function h(n, r, o = n.schema) {
    const { gen: c, parentSchema: m, data: v, keyword: w, it: u } = n;
    _(m), u.opts.unevaluated && o.length && u.items !== !0 && (u.items = t.mergeEvaluated.items(c, o.length, u.items));
    const f = c.name("valid"), b = c.const("len", (0, e._)`${v}.length`);
    o.forEach((y, $) => {
      (0, t.alwaysValidSchema)(u, y) || (c.if((0, e._)`${b} > ${$}`, () => n.subschema({
        keyword: w,
        schemaProp: $,
        dataProp: $
      }, f)), n.ok(f));
    });
    function _(y) {
      const { opts: $, errSchemaPath: p } = u, l = o.length, s = l === y.minItems && (l === y.maxItems || y[r] === !1);
      if ($.strictTuples && !s) {
        const d = `"${w}" is ${l}-tuple, but minItems or maxItems/${r} are not specified or different at path "${p}"`;
        (0, t.checkStrictMode)(u, d, $.strictTuples);
      }
    }
  }
  return tt.validateTuple = h, tt.default = a, tt;
}
var ws;
function Yc() {
  if (ws) return en;
  ws = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ po(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (i) => (0, e.validateTuple)(i, "items")
  };
  return en.default = t, en;
}
var tn = {}, _s;
function ed() {
  if (_s) return tn;
  _s = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), i = /* @__PURE__ */ xe(), a = /* @__PURE__ */ fo(), n = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: r } }) => (0, e.str)`must NOT have more than ${r} items`,
      params: ({ params: { len: r } }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { schema: o, parentSchema: c, it: m } = r, { prefixItems: v } = c;
      m.items = !0, !(0, t.alwaysValidSchema)(m, o) && (v ? (0, a.validateAdditionalItems)(r, v) : r.ok((0, i.validateArray)(r)));
    }
  };
  return tn.default = n, tn;
}
var nn = {}, $s;
function td() {
  if ($s) return nn;
  $s = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), a = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: h, max: n } }) => n === void 0 ? (0, e.str)`must contain at least ${h} valid item(s)` : (0, e.str)`must contain at least ${h} and no more than ${n} valid item(s)`,
      params: ({ params: { min: h, max: n } }) => n === void 0 ? (0, e._)`{minContains: ${h}}` : (0, e._)`{minContains: ${h}, maxContains: ${n}}`
    },
    code(h) {
      const { gen: n, schema: r, parentSchema: o, data: c, it: m } = h;
      let v, w;
      const { minContains: u, maxContains: f } = o;
      m.opts.next ? (v = u === void 0 ? 1 : u, w = f) : v = 1;
      const b = n.const("len", (0, e._)`${c}.length`);
      if (h.setParams({ min: v, max: w }), w === void 0 && v === 0) {
        (0, t.checkStrictMode)(m, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (w !== void 0 && v > w) {
        (0, t.checkStrictMode)(m, '"minContains" > "maxContains" is always invalid'), h.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(m, r)) {
        let l = (0, e._)`${b} >= ${v}`;
        w !== void 0 && (l = (0, e._)`${l} && ${b} <= ${w}`), h.pass(l);
        return;
      }
      m.items = !0;
      const _ = n.name("valid");
      w === void 0 && v === 1 ? $(_, () => n.if(_, () => n.break())) : v === 0 ? (n.let(_, !0), w !== void 0 && n.if((0, e._)`${c}.length > 0`, y)) : (n.let(_, !1), y()), h.result(_, () => h.reset());
      function y() {
        const l = n.name("_valid"), s = n.let("count", 0);
        $(l, () => n.if(l, () => p(s)));
      }
      function $(l, s) {
        n.forRange("i", 0, b, (d) => {
          h.subschema({
            keyword: "contains",
            dataProp: d,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, l), s();
        });
      }
      function p(l) {
        n.code((0, e._)`${l}++`), w === void 0 ? n.if((0, e._)`${l} >= ${v}`, () => n.assign(_, !0).break()) : (n.if((0, e._)`${l} > ${w}`, () => n.assign(_, !1).break()), v === 1 ? n.assign(_, !0) : n.if((0, e._)`${l} >= ${v}`, () => n.assign(_, !0)));
      }
    }
  };
  return nn.default = a, nn;
}
var dr = {}, Ss;
function li() {
  return Ss || (Ss = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ee(), i = /* @__PURE__ */ ne(), a = /* @__PURE__ */ xe();
    e.error = {
      message: ({ params: { property: c, depsCount: m, deps: v } }) => {
        const w = m === 1 ? "property" : "properties";
        return (0, t.str)`must have ${w} ${v} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: m, deps: v, missingProperty: w } }) => (0, t._)`{property: ${c},
    missingProperty: ${w},
    depsCount: ${m},
    deps: ${v}}`
      // TODO change to reference
    };
    const h = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [m, v] = n(c);
        r(c, m), o(c, v);
      }
    };
    function n({ schema: c }) {
      const m = {}, v = {};
      for (const w in c) {
        if (w === "__proto__")
          continue;
        const u = Array.isArray(c[w]) ? m : v;
        u[w] = c[w];
      }
      return [m, v];
    }
    function r(c, m = c.schema) {
      const { gen: v, data: w, it: u } = c;
      if (Object.keys(m).length === 0)
        return;
      const f = v.let("missing");
      for (const b in m) {
        const _ = m[b];
        if (_.length === 0)
          continue;
        const y = (0, a.propertyInData)(v, w, b, u.opts.ownProperties);
        c.setParams({
          property: b,
          depsCount: _.length,
          deps: _.join(", ")
        }), u.allErrors ? v.if(y, () => {
          for (const $ of _)
            (0, a.checkReportMissingProp)(c, $);
        }) : (v.if((0, t._)`${y} && (${(0, a.checkMissingProp)(c, _, f)})`), (0, a.reportMissingProp)(c, f), v.else());
      }
    }
    e.validatePropertyDeps = r;
    function o(c, m = c.schema) {
      const { gen: v, data: w, keyword: u, it: f } = c, b = v.name("valid");
      for (const _ in m)
        (0, i.alwaysValidSchema)(f, m[_]) || (v.if(
          (0, a.propertyInData)(v, w, _, f.opts.ownProperties),
          () => {
            const y = c.subschema({ keyword: u, schemaProp: _ }, b);
            c.mergeValidEvaluated(y, b);
          },
          () => v.var(b, !0)
          // TODO var
        ), c.ok(b));
    }
    e.validateSchemaDeps = o, e.default = h;
  })(dr)), dr;
}
var rn = {}, Is;
function nd() {
  if (Is) return rn;
  Is = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), a = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: h }) => (0, e._)`{propertyName: ${h.propertyName}}`
    },
    code(h) {
      const { gen: n, schema: r, data: o, it: c } = h;
      if ((0, t.alwaysValidSchema)(c, r))
        return;
      const m = n.name("valid");
      n.forIn("key", o, (v) => {
        h.setParams({ propertyName: v }), h.subschema({
          keyword: "propertyNames",
          data: v,
          dataTypes: ["string"],
          propertyName: v,
          compositeRule: !0
        }, m), n.if((0, e.not)(m), () => {
          h.error(!0), c.allErrors || n.break();
        });
      }), h.ok(m);
    }
  };
  return rn.default = a, rn;
}
var sn = {}, xs;
function ho() {
  if (xs) return sn;
  xs = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xe(), t = /* @__PURE__ */ ee(), i = /* @__PURE__ */ Ie(), a = /* @__PURE__ */ ne(), n = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: !0,
    trackErrors: !0,
    error: {
      message: "must NOT have additional properties",
      params: ({ params: r }) => (0, t._)`{additionalProperty: ${r.additionalProperty}}`
    },
    code(r) {
      const { gen: o, schema: c, parentSchema: m, data: v, errsCount: w, it: u } = r;
      if (!w)
        throw new Error("ajv implementation error");
      const { allErrors: f, opts: b } = u;
      if (u.props = !0, b.removeAdditional !== "all" && (0, a.alwaysValidSchema)(u, c))
        return;
      const _ = (0, e.allSchemaProperties)(m.properties), y = (0, e.allSchemaProperties)(m.patternProperties);
      $(), r.ok((0, t._)`${w} === ${i.default.errors}`);
      function $() {
        o.forIn("key", v, (g) => {
          !_.length && !y.length ? s(g) : o.if(p(g), () => s(g));
        });
      }
      function p(g) {
        let I;
        if (_.length > 8) {
          const S = (0, a.schemaRefOrVal)(u, m.properties, "properties");
          I = (0, e.isOwnProperty)(o, S, g);
        } else _.length ? I = (0, t.or)(..._.map((S) => (0, t._)`${g} === ${S}`)) : I = t.nil;
        return y.length && (I = (0, t.or)(I, ...y.map((S) => (0, t._)`${(0, e.usePattern)(r, S)}.test(${g})`))), (0, t.not)(I);
      }
      function l(g) {
        o.code((0, t._)`delete ${v}[${g}]`);
      }
      function s(g) {
        if (b.removeAdditional === "all" || b.removeAdditional && c === !1) {
          l(g);
          return;
        }
        if (c === !1) {
          r.setParams({ additionalProperty: g }), r.error(), f || o.break();
          return;
        }
        if (typeof c == "object" && !(0, a.alwaysValidSchema)(u, c)) {
          const I = o.name("valid");
          b.removeAdditional === "failing" ? (d(g, I, !1), o.if((0, t.not)(I), () => {
            r.reset(), l(g);
          })) : (d(g, I), f || o.if((0, t.not)(I), () => o.break()));
        }
      }
      function d(g, I, S) {
        const j = {
          keyword: "additionalProperties",
          dataProp: g,
          dataPropType: a.Type.Str
        };
        S === !1 && Object.assign(j, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), r.subschema(j, I);
      }
    }
  };
  return sn.default = n, sn;
}
var an = {}, Es;
function rd() {
  if (Es) return an;
  Es = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ It(), t = /* @__PURE__ */ xe(), i = /* @__PURE__ */ ne(), a = /* @__PURE__ */ ho(), h = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(n) {
      const { gen: r, schema: o, parentSchema: c, data: m, it: v } = n;
      v.opts.removeAdditional === "all" && c.additionalProperties === void 0 && a.default.code(new e.KeywordCxt(v, a.default, "additionalProperties"));
      const w = (0, t.allSchemaProperties)(o);
      for (const y of w)
        v.definedProperties.add(y);
      v.opts.unevaluated && w.length && v.props !== !0 && (v.props = i.mergeEvaluated.props(r, (0, i.toHash)(w), v.props));
      const u = w.filter((y) => !(0, i.alwaysValidSchema)(v, o[y]));
      if (u.length === 0)
        return;
      const f = r.name("valid");
      for (const y of u)
        b(y) ? _(y) : (r.if((0, t.propertyInData)(r, m, y, v.opts.ownProperties)), _(y), v.allErrors || r.else().var(f, !0), r.endIf()), n.it.definedProperties.add(y), n.ok(f);
      function b(y) {
        return v.opts.useDefaults && !v.compositeRule && o[y].default !== void 0;
      }
      function _(y) {
        n.subschema({
          keyword: "properties",
          schemaProp: y,
          dataProp: y
        }, f);
      }
    }
  };
  return an.default = h, an;
}
var on = {}, Rs;
function id() {
  if (Rs) return on;
  Rs = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xe(), t = /* @__PURE__ */ ee(), i = /* @__PURE__ */ ne(), a = /* @__PURE__ */ ne(), h = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(n) {
      const { gen: r, schema: o, data: c, parentSchema: m, it: v } = n, { opts: w } = v, u = (0, e.allSchemaProperties)(o), f = u.filter((s) => (0, i.alwaysValidSchema)(v, o[s]));
      if (u.length === 0 || f.length === u.length && (!v.opts.unevaluated || v.props === !0))
        return;
      const b = w.strictSchema && !w.allowMatchingProperties && m.properties, _ = r.name("valid");
      v.props !== !0 && !(v.props instanceof t.Name) && (v.props = (0, a.evaluatedPropsToName)(r, v.props));
      const { props: y } = v;
      $();
      function $() {
        for (const s of u)
          b && p(s), v.allErrors ? l(s) : (r.var(_, !0), l(s), r.if(_));
      }
      function p(s) {
        for (const d in b)
          new RegExp(s).test(d) && (0, i.checkStrictMode)(v, `property ${d} matches pattern ${s} (use allowMatchingProperties)`);
      }
      function l(s) {
        r.forIn("key", c, (d) => {
          r.if((0, t._)`${(0, e.usePattern)(n, s)}.test(${d})`, () => {
            const g = f.includes(s);
            g || n.subschema({
              keyword: "patternProperties",
              schemaProp: s,
              dataProp: d,
              dataPropType: a.Type.Str
            }, _), v.opts.unevaluated && y !== !0 ? r.assign((0, t._)`${y}[${d}]`, !0) : !g && !v.allErrors && r.if((0, t.not)(_), () => r.break());
          });
        });
      }
    }
  };
  return on.default = h, on;
}
var cn = {}, js;
function sd() {
  if (js) return cn;
  js = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(i) {
      const { gen: a, schema: h, it: n } = i;
      if ((0, e.alwaysValidSchema)(n, h)) {
        i.fail();
        return;
      }
      const r = a.name("valid");
      i.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, r), i.failResult(r, () => i.reset(), () => i.error());
    },
    error: { message: "must NOT be valid" }
  };
  return cn.default = t, cn;
}
var dn = {}, Ns;
function ad() {
  if (Ns) return dn;
  Ns = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ xe()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return dn.default = t, dn;
}
var ln = {}, Os;
function od() {
  if (Os) return ln;
  Os = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), a = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: h }) => (0, e._)`{passingSchemas: ${h.passing}}`
    },
    code(h) {
      const { gen: n, schema: r, parentSchema: o, it: c } = h;
      if (!Array.isArray(r))
        throw new Error("ajv implementation error");
      if (c.opts.discriminator && o.discriminator)
        return;
      const m = r, v = n.let("valid", !1), w = n.let("passing", null), u = n.name("_valid");
      h.setParams({ passing: w }), n.block(f), h.result(v, () => h.reset(), () => h.error(!0));
      function f() {
        m.forEach((b, _) => {
          let y;
          (0, t.alwaysValidSchema)(c, b) ? n.var(u, !0) : y = h.subschema({
            keyword: "oneOf",
            schemaProp: _,
            compositeRule: !0
          }, u), _ > 0 && n.if((0, e._)`${u} && ${v}`).assign(v, !1).assign(w, (0, e._)`[${w}, ${_}]`).else(), n.if(u, () => {
            n.assign(v, !0), n.assign(w, _), y && h.mergeEvaluated(y, e.Name);
          });
        });
      }
    }
  };
  return ln.default = a, ln;
}
var un = {}, As;
function cd() {
  if (As) return un;
  As = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(i) {
      const { gen: a, schema: h, it: n } = i;
      if (!Array.isArray(h))
        throw new Error("ajv implementation error");
      const r = a.name("valid");
      h.forEach((o, c) => {
        if ((0, e.alwaysValidSchema)(n, o))
          return;
        const m = i.subschema({ keyword: "allOf", schemaProp: c }, r);
        i.ok(r), i.mergeEvaluated(m);
      });
    }
  };
  return un.default = t, un;
}
var fn = {}, Ps;
function dd() {
  if (Ps) return fn;
  Ps = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), a = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: n }) => (0, e.str)`must match "${n.ifClause}" schema`,
      params: ({ params: n }) => (0, e._)`{failingKeyword: ${n.ifClause}}`
    },
    code(n) {
      const { gen: r, parentSchema: o, it: c } = n;
      o.then === void 0 && o.else === void 0 && (0, t.checkStrictMode)(c, '"if" without "then" and "else" is ignored');
      const m = h(c, "then"), v = h(c, "else");
      if (!m && !v)
        return;
      const w = r.let("valid", !0), u = r.name("_valid");
      if (f(), n.reset(), m && v) {
        const _ = r.let("ifClause");
        n.setParams({ ifClause: _ }), r.if(u, b("then", _), b("else", _));
      } else m ? r.if(u, b("then")) : r.if((0, e.not)(u), b("else"));
      n.pass(w, () => n.error(!0));
      function f() {
        const _ = n.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, u);
        n.mergeEvaluated(_);
      }
      function b(_, y) {
        return () => {
          const $ = n.subschema({ keyword: _ }, u);
          r.assign(w, u), n.mergeValidEvaluated($, w), y ? r.assign(y, (0, e._)`${_}`) : n.setParams({ ifClause: _ });
        };
      }
    }
  };
  function h(n, r) {
    const o = n.schema[r];
    return o !== void 0 && !(0, t.alwaysValidSchema)(n, o);
  }
  return fn.default = a, fn;
}
var pn = {}, qs;
function ld() {
  if (qs) return pn;
  qs = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: i, parentSchema: a, it: h }) {
      a.if === void 0 && (0, e.checkStrictMode)(h, `"${i}" without "if" is ignored`);
    }
  };
  return pn.default = t, pn;
}
var Ts;
function mo() {
  if (Ts) return Yt;
  Ts = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fo(), t = /* @__PURE__ */ Yc(), i = /* @__PURE__ */ po(), a = /* @__PURE__ */ ed(), h = /* @__PURE__ */ td(), n = /* @__PURE__ */ li(), r = /* @__PURE__ */ nd(), o = /* @__PURE__ */ ho(), c = /* @__PURE__ */ rd(), m = /* @__PURE__ */ id(), v = /* @__PURE__ */ sd(), w = /* @__PURE__ */ ad(), u = /* @__PURE__ */ od(), f = /* @__PURE__ */ cd(), b = /* @__PURE__ */ dd(), _ = /* @__PURE__ */ ld();
  function y($ = !1) {
    const p = [
      // any
      v.default,
      w.default,
      u.default,
      f.default,
      b.default,
      _.default,
      // object
      r.default,
      o.default,
      n.default,
      c.default,
      m.default
    ];
    return $ ? p.push(t.default, a.default) : p.push(e.default, i.default), p.push(h.default), p;
  }
  return Yt.default = y, Yt;
}
var hn = {}, nt = {}, ks;
function yo() {
  if (ks) return nt;
  ks = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Ie(), i = /* @__PURE__ */ Hn(), a = /* @__PURE__ */ ci(), h = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (o) => n(o, o.schema)
  };
  function n(o, c) {
    const { gen: m, it: v } = o;
    v.schemaEnv.root.dynamicAnchors[c] = !0;
    const w = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, u = v.errSchemaPath === "#" ? v.validateName : r(o);
    m.if((0, e._)`!${w}`, () => m.assign(w, u));
  }
  nt.dynamicAnchor = n;
  function r(o) {
    const { schemaEnv: c, schema: m, self: v } = o.it, { root: w, baseId: u, localRefs: f, meta: b } = c.root, { schemaId: _ } = v.opts, y = new i.SchemaEnv({ schema: m, schemaId: _, root: w, baseId: u, localRefs: f, meta: b });
    return i.compileSchema.call(v, y), (0, a.getValidate)(o, y);
  }
  return nt.default = h, nt;
}
var rt = {}, Ds;
function go() {
  if (Ds) return rt;
  Ds = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.dynamicRef = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Ie(), i = /* @__PURE__ */ ci(), a = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (n) => h(n, n.schema)
  };
  function h(n, r) {
    const { gen: o, keyword: c, it: m } = n;
    if (r[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const v = r.slice(1);
    if (m.allErrors)
      w();
    else {
      const f = o.let("valid", !1);
      w(f), n.ok(f);
    }
    function w(f) {
      if (m.schemaEnv.root.dynamicAnchors[v]) {
        const b = o.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(v)}`);
        o.if(b, u(b, f), u(m.validateName, f));
      } else
        u(m.validateName, f)();
    }
    function u(f, b) {
      return b ? () => o.block(() => {
        (0, i.callRef)(n, f), o.let(b, !0);
      }) : () => (0, i.callRef)(n, f);
    }
  }
  return rt.dynamicRef = h, rt.default = a, rt;
}
var mn = {}, Ms;
function ud() {
  if (Ms) return mn;
  Ms = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ yo(), t = /* @__PURE__ */ ne(), i = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(a) {
      a.schema ? (0, e.dynamicAnchor)(a, "") : (0, t.checkStrictMode)(a.it, "$recursiveAnchor: false is ignored");
    }
  };
  return mn.default = i, mn;
}
var yn = {}, Ls;
function fd() {
  if (Ls) return yn;
  Ls = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ go(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (i) => (0, e.dynamicRef)(i, i.schema)
  };
  return yn.default = t, yn;
}
var Cs;
function pd() {
  if (Cs) return hn;
  Cs = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ yo(), t = /* @__PURE__ */ go(), i = /* @__PURE__ */ ud(), a = /* @__PURE__ */ fd(), h = [e.default, t.default, i.default, a.default];
  return hn.default = h, hn;
}
var gn = {}, vn = {}, Us;
function hd() {
  if (Us) return vn;
  Us = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ li(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (i) => (0, e.validatePropertyDeps)(i)
  };
  return vn.default = t, vn;
}
var bn = {}, Vs;
function md() {
  if (Vs) return bn;
  Vs = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ li(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (i) => (0, e.validateSchemaDeps)(i)
  };
  return bn.default = t, bn;
}
var wn = {}, zs;
function yd() {
  if (zs) return wn;
  zs = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: i, parentSchema: a, it: h }) {
      a.contains === void 0 && (0, e.checkStrictMode)(h, `"${i}" without "contains" is ignored`);
    }
  };
  return wn.default = t, wn;
}
var Fs;
function gd() {
  if (Fs) return gn;
  Fs = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ hd(), t = /* @__PURE__ */ md(), i = /* @__PURE__ */ yd(), a = [e.default, t.default, i.default];
  return gn.default = a, gn;
}
var _n = {}, $n = {}, Hs;
function vd() {
  if (Hs) return $n;
  Hs = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), i = /* @__PURE__ */ Ie(), h = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: n }) => (0, e._)`{unevaluatedProperty: ${n.unevaluatedProperty}}`
    },
    code(n) {
      const { gen: r, schema: o, data: c, errsCount: m, it: v } = n;
      if (!m)
        throw new Error("ajv implementation error");
      const { allErrors: w, props: u } = v;
      u instanceof e.Name ? r.if((0, e._)`${u} !== true`, () => r.forIn("key", c, (y) => r.if(b(u, y), () => f(y)))) : u !== !0 && r.forIn("key", c, (y) => u === void 0 ? f(y) : r.if(_(u, y), () => f(y))), v.props = !0, n.ok((0, e._)`${m} === ${i.default.errors}`);
      function f(y) {
        if (o === !1) {
          n.setParams({ unevaluatedProperty: y }), n.error(), w || r.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(v, o)) {
          const $ = r.name("valid");
          n.subschema({
            keyword: "unevaluatedProperties",
            dataProp: y,
            dataPropType: t.Type.Str
          }, $), w || r.if((0, e.not)($), () => r.break());
        }
      }
      function b(y, $) {
        return (0, e._)`!${y} || !${y}[${$}]`;
      }
      function _(y, $) {
        const p = [];
        for (const l in y)
          y[l] === !0 && p.push((0, e._)`${$} !== ${l}`);
        return (0, e.and)(...p);
      }
    }
  };
  return $n.default = h, $n;
}
var Sn = {}, Js;
function bd() {
  if (Js) return Sn;
  Js = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), a = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: h } }) => (0, e.str)`must NOT have more than ${h} items`,
      params: ({ params: { len: h } }) => (0, e._)`{limit: ${h}}`
    },
    code(h) {
      const { gen: n, schema: r, data: o, it: c } = h, m = c.items || 0;
      if (m === !0)
        return;
      const v = n.const("len", (0, e._)`${o}.length`);
      if (r === !1)
        h.setParams({ len: m }), h.fail((0, e._)`${v} > ${m}`);
      else if (typeof r == "object" && !(0, t.alwaysValidSchema)(c, r)) {
        const u = n.var("valid", (0, e._)`${v} <= ${m}`);
        n.if((0, e.not)(u), () => w(u, m)), h.ok(u);
      }
      c.items = !0;
      function w(u, f) {
        n.forRange("i", f, v, (b) => {
          h.subschema({ keyword: "unevaluatedItems", dataProp: b, dataPropType: t.Type.Num }, u), c.allErrors || n.if((0, e.not)(u), () => n.break());
        });
      }
    }
  };
  return Sn.default = a, Sn;
}
var Bs;
function wd() {
  if (Bs) return _n;
  Bs = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ vd(), t = /* @__PURE__ */ bd(), i = [e.default, t.default];
  return _n.default = i, _n;
}
var In = {}, xn = {}, Gs;
function _d() {
  if (Gs) return xn;
  Gs = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), i = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: a }) => (0, e.str)`must match format "${a}"`,
      params: ({ schemaCode: a }) => (0, e._)`{format: ${a}}`
    },
    code(a, h) {
      const { gen: n, data: r, $data: o, schema: c, schemaCode: m, it: v } = a, { opts: w, errSchemaPath: u, schemaEnv: f, self: b } = v;
      if (!w.validateFormats)
        return;
      o ? _() : y();
      function _() {
        const $ = n.scopeValue("formats", {
          ref: b.formats,
          code: w.code.formats
        }), p = n.const("fDef", (0, e._)`${$}[${m}]`), l = n.let("fType"), s = n.let("format");
        n.if((0, e._)`typeof ${p} == "object" && !(${p} instanceof RegExp)`, () => n.assign(l, (0, e._)`${p}.type || "string"`).assign(s, (0, e._)`${p}.validate`), () => n.assign(l, (0, e._)`"string"`).assign(s, p)), a.fail$data((0, e.or)(d(), g()));
        function d() {
          return w.strictSchema === !1 ? e.nil : (0, e._)`${m} && !${s}`;
        }
        function g() {
          const I = f.$async ? (0, e._)`(${p}.async ? await ${s}(${r}) : ${s}(${r}))` : (0, e._)`${s}(${r})`, S = (0, e._)`(typeof ${s} == "function" ? ${I} : ${s}.test(${r}))`;
          return (0, e._)`${s} && ${s} !== true && ${l} === ${h} && !${S}`;
        }
      }
      function y() {
        const $ = b.formats[c];
        if (!$) {
          d();
          return;
        }
        if ($ === !0)
          return;
        const [p, l, s] = g($);
        p === h && a.pass(I());
        function d() {
          if (w.strictSchema === !1) {
            b.logger.warn(S());
            return;
          }
          throw new Error(S());
          function S() {
            return `unknown format "${c}" ignored in schema at path "${u}"`;
          }
        }
        function g(S) {
          const j = S instanceof RegExp ? (0, e.regexpCode)(S) : w.code.formats ? (0, e._)`${w.code.formats}${(0, e.getProperty)(c)}` : void 0, O = n.scopeValue("formats", { key: c, ref: S, code: j });
          return typeof S == "object" && !(S instanceof RegExp) ? [S.type || "string", S.validate, (0, e._)`${O}.validate`] : ["string", S, O];
        }
        function I() {
          if (typeof $ == "object" && !($ instanceof RegExp) && $.async) {
            if (!f.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${s}(${r})`;
          }
          return typeof l == "function" ? (0, e._)`${s}(${r})` : (0, e._)`${s}.test(${r})`;
        }
      }
    }
  };
  return xn.default = i, xn;
}
var Ks;
function vo() {
  if (Ks) return In;
  Ks = 1, Object.defineProperty(In, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ _d()).default];
  return In.default = t, In;
}
var Ke = {}, Zs;
function bo() {
  return Zs || (Zs = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.contentVocabulary = Ke.metadataVocabulary = void 0, Ke.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Ke.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Ke;
}
var Xs;
function $d() {
  if (Xs) return Mt;
  Xs = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ lo(), t = /* @__PURE__ */ uo(), i = /* @__PURE__ */ mo(), a = /* @__PURE__ */ pd(), h = /* @__PURE__ */ gd(), n = /* @__PURE__ */ wd(), r = /* @__PURE__ */ vo(), o = /* @__PURE__ */ bo(), c = [
    a.default,
    e.default,
    t.default,
    (0, i.default)(!0),
    r.default,
    o.metadataVocabulary,
    o.contentVocabulary,
    h.default,
    n.default
  ];
  return Mt.default = c, Mt;
}
var En = {}, gt = {}, Ws;
function Sd() {
  if (Ws) return gt;
  Ws = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (gt.DiscrError = e = {})), gt;
}
var Qs;
function wo() {
  if (Qs) return En;
  Qs = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Sd(), i = /* @__PURE__ */ Hn(), a = /* @__PURE__ */ xt(), h = /* @__PURE__ */ ne(), r = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: o, tagName: c } }) => o === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: o, tag: c, tagName: m } }) => (0, e._)`{error: ${o}, tag: ${m}, tagValue: ${c}}`
    },
    code(o) {
      const { gen: c, data: m, schema: v, parentSchema: w, it: u } = o, { oneOf: f } = w;
      if (!u.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const b = v.propertyName;
      if (typeof b != "string")
        throw new Error("discriminator: requires propertyName");
      if (v.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!f)
        throw new Error("discriminator: requires oneOf keyword");
      const _ = c.let("valid", !1), y = c.const("tag", (0, e._)`${m}${(0, e.getProperty)(b)}`);
      c.if((0, e._)`typeof ${y} == "string"`, () => $(), () => o.error(!1, { discrError: t.DiscrError.Tag, tag: y, tagName: b })), o.ok(_);
      function $() {
        const s = l();
        c.if(!1);
        for (const d in s)
          c.elseIf((0, e._)`${y} === ${d}`), c.assign(_, p(s[d]));
        c.else(), o.error(!1, { discrError: t.DiscrError.Mapping, tag: y, tagName: b }), c.endIf();
      }
      function p(s) {
        const d = c.name("valid"), g = o.subschema({ keyword: "oneOf", schemaProp: s }, d);
        return o.mergeEvaluated(g, e.Name), d;
      }
      function l() {
        var s;
        const d = {}, g = S(w);
        let I = !0;
        for (let k = 0; k < f.length; k++) {
          let C = f[k];
          if (C?.$ref && !(0, h.schemaHasRulesButRef)(C, u.self.RULES)) {
            const P = C.$ref;
            if (C = i.resolveRef.call(u.self, u.schemaEnv.root, u.baseId, P), C instanceof i.SchemaEnv && (C = C.schema), C === void 0)
              throw new a.default(u.opts.uriResolver, u.baseId, P);
          }
          const T = (s = C?.properties) === null || s === void 0 ? void 0 : s[b];
          if (typeof T != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${b}"`);
          I = I && (g || S(C)), j(T, k);
        }
        if (!I)
          throw new Error(`discriminator: "${b}" must be required`);
        return d;
        function S({ required: k }) {
          return Array.isArray(k) && k.includes(b);
        }
        function j(k, C) {
          if (k.const)
            O(k.const, C);
          else if (k.enum)
            for (const T of k.enum)
              O(T, C);
          else
            throw new Error(`discriminator: "properties/${b}" must have "const" or "enum"`);
        }
        function O(k, C) {
          if (typeof k != "string" || k in d)
            throw new Error(`discriminator: "${b}" values must be unique strings`);
          d[k] = C;
        }
      }
    }
  };
  return En.default = r, En;
}
var Rn = {};
const Id = "https://json-schema.org/draft/2020-12/schema", xd = "https://json-schema.org/draft/2020-12/schema", Ed = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Rd = "meta", jd = "Core and Validation specifications meta-schema", Nd = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Od = ["object", "boolean"], Ad = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Pd = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, qd = {
  $schema: Id,
  $id: xd,
  $vocabulary: Ed,
  $dynamicAnchor: Rd,
  title: jd,
  allOf: Nd,
  type: Od,
  $comment: Ad,
  properties: Pd
}, Td = "https://json-schema.org/draft/2020-12/schema", kd = "https://json-schema.org/draft/2020-12/meta/applicator", Dd = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Md = "meta", Ld = "Applicator vocabulary meta-schema", Cd = ["object", "boolean"], Ud = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Vd = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, zd = {
  $schema: Td,
  $id: kd,
  $vocabulary: Dd,
  $dynamicAnchor: Md,
  title: Ld,
  type: Cd,
  properties: Ud,
  $defs: Vd
}, Fd = "https://json-schema.org/draft/2020-12/schema", Hd = "https://json-schema.org/draft/2020-12/meta/unevaluated", Jd = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Bd = "meta", Gd = "Unevaluated applicator vocabulary meta-schema", Kd = ["object", "boolean"], Zd = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Xd = {
  $schema: Fd,
  $id: Hd,
  $vocabulary: Jd,
  $dynamicAnchor: Bd,
  title: Gd,
  type: Kd,
  properties: Zd
}, Wd = "https://json-schema.org/draft/2020-12/schema", Qd = "https://json-schema.org/draft/2020-12/meta/content", Yd = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, el = "meta", tl = "Content vocabulary meta-schema", nl = ["object", "boolean"], rl = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, il = {
  $schema: Wd,
  $id: Qd,
  $vocabulary: Yd,
  $dynamicAnchor: el,
  title: tl,
  type: nl,
  properties: rl
}, sl = "https://json-schema.org/draft/2020-12/schema", al = "https://json-schema.org/draft/2020-12/meta/core", ol = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, cl = "meta", dl = "Core vocabulary meta-schema", ll = ["object", "boolean"], ul = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, fl = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, pl = {
  $schema: sl,
  $id: al,
  $vocabulary: ol,
  $dynamicAnchor: cl,
  title: dl,
  type: ll,
  properties: ul,
  $defs: fl
}, hl = "https://json-schema.org/draft/2020-12/schema", ml = "https://json-schema.org/draft/2020-12/meta/format-annotation", yl = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, gl = "meta", vl = "Format vocabulary meta-schema for annotation results", bl = ["object", "boolean"], wl = { format: { type: "string" } }, _l = {
  $schema: hl,
  $id: ml,
  $vocabulary: yl,
  $dynamicAnchor: gl,
  title: vl,
  type: bl,
  properties: wl
}, $l = "https://json-schema.org/draft/2020-12/schema", Sl = "https://json-schema.org/draft/2020-12/meta/meta-data", Il = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, xl = "meta", El = "Meta-data vocabulary meta-schema", Rl = ["object", "boolean"], jl = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Nl = {
  $schema: $l,
  $id: Sl,
  $vocabulary: Il,
  $dynamicAnchor: xl,
  title: El,
  type: Rl,
  properties: jl
}, Ol = "https://json-schema.org/draft/2020-12/schema", Al = "https://json-schema.org/draft/2020-12/meta/validation", Pl = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, ql = "meta", Tl = "Validation vocabulary meta-schema", kl = ["object", "boolean"], Dl = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Ml = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Ll = {
  $schema: Ol,
  $id: Al,
  $vocabulary: Pl,
  $dynamicAnchor: ql,
  title: Tl,
  type: kl,
  properties: Dl,
  $defs: Ml
};
var Ys;
function Cl() {
  if (Ys) return Rn;
  Ys = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = qd, t = zd, i = Xd, a = il, h = pl, n = _l, r = Nl, o = Ll, c = ["/properties"];
  function m(v) {
    return [
      e,
      t,
      i,
      a,
      h,
      w(this, n),
      r,
      w(this, o)
    ].forEach((u) => this.addMetaSchema(u, void 0, !1)), this;
    function w(u, f) {
      return v ? u.$dataMetaSchema(f, c) : f;
    }
  }
  return Rn.default = m, Rn;
}
var ea;
function Ul() {
  return ea || (ea = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const i = /* @__PURE__ */ co(), a = /* @__PURE__ */ $d(), h = /* @__PURE__ */ wo(), n = /* @__PURE__ */ Cl(), r = "https://json-schema.org/draft/2020-12/schema";
    class o extends i.default {
      constructor(f = {}) {
        super({
          ...f,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), a.default.forEach((f) => this.addVocabulary(f)), this.opts.discriminator && this.addKeyword(h.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: f, meta: b } = this.opts;
        b && (n.default.call(this, f), this.refs["http://json-schema.org/schema"] = r);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(r) ? r : void 0);
      }
    }
    t.Ajv2020 = o, e.exports = t = o, e.exports.Ajv2020 = o, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = o;
    var c = /* @__PURE__ */ It();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return c.KeywordCxt;
    } });
    var m = /* @__PURE__ */ ee();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return m._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return m.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return m.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return m.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return m.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return m.CodeGen;
    } });
    var v = /* @__PURE__ */ Fn();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return v.default;
    } });
    var w = /* @__PURE__ */ xt();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return w.default;
    } });
  })(Pt, Pt.exports)), Pt.exports;
}
var Vl = /* @__PURE__ */ Ul();
const zl = /* @__PURE__ */ oi(Vl);
var jn = { exports: {} }, lr = {}, ta;
function Fl() {
  return ta || (ta = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(k, C) {
      return { validate: k, compare: C };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(n, r),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: t(c(!0), m),
      "date-time": t(u(!0), f),
      "iso-time": t(c(), v),
      "iso-date-time": t(u(), b),
      // duration: https://tools.ietf.org/html/rfc3339#appendix-A
      duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri: $,
      "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
      // uri-template: https://tools.ietf.org/html/rfc6570
      "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
      // For the source: https://gist.github.com/dperini/729294
      // For test cases: https://mathiasbynens.be/demo/url-regex
      url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
      email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
      // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
      ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
      regex: O,
      // uuid: http://tools.ietf.org/html/rfc4122
      uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
      // JSON-pointer: https://tools.ietf.org/html/rfc6901
      // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
      "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
      "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
      // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
      "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
      // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
      // byte: https://github.com/miguelmota/is-base64
      byte: l,
      // signed 32 bit integer
      int32: { type: "number", validate: g },
      // signed 64 bit integer
      int64: { type: "number", validate: I },
      // C-type float
      float: { type: "number", validate: S },
      // C-type double
      double: { type: "number", validate: S },
      // hint to the UI to hide input strings
      password: !0,
      // unchecked string payload
      binary: !0
    }, e.fastFormats = {
      ...e.fullFormats,
      date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, r),
      time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, m),
      "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, f),
      "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, v),
      "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, b),
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    }, e.formatNames = Object.keys(e.fullFormats);
    function i(k) {
      return k % 4 === 0 && (k % 100 !== 0 || k % 400 === 0);
    }
    const a = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, h = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function n(k) {
      const C = a.exec(k);
      if (!C)
        return !1;
      const T = +C[1], P = +C[2], B = +C[3];
      return P >= 1 && P <= 12 && B >= 1 && B <= (P === 2 && i(T) ? 29 : h[P]);
    }
    function r(k, C) {
      if (k && C)
        return k > C ? 1 : k < C ? -1 : 0;
    }
    const o = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function c(k) {
      return function(T) {
        const P = o.exec(T);
        if (!P)
          return !1;
        const B = +P[1], A = +P[2], H = +P[3], F = P[4], G = P[5] === "-" ? -1 : 1, N = +(P[6] || 0), q = +(P[7] || 0);
        if (N > 23 || q > 59 || k && !F)
          return !1;
        if (B <= 23 && A <= 59 && H < 60)
          return !0;
        const U = A - q * G, D = B - N * G - (U < 0 ? 1 : 0);
        return (D === 23 || D === -1) && (U === 59 || U === -1) && H < 61;
      };
    }
    function m(k, C) {
      if (!(k && C))
        return;
      const T = (/* @__PURE__ */ new Date("2020-01-01T" + k)).valueOf(), P = (/* @__PURE__ */ new Date("2020-01-01T" + C)).valueOf();
      if (T && P)
        return T - P;
    }
    function v(k, C) {
      if (!(k && C))
        return;
      const T = o.exec(k), P = o.exec(C);
      if (T && P)
        return k = T[1] + T[2] + T[3], C = P[1] + P[2] + P[3], k > C ? 1 : k < C ? -1 : 0;
    }
    const w = /t|\s/i;
    function u(k) {
      const C = c(k);
      return function(P) {
        const B = P.split(w);
        return B.length === 2 && n(B[0]) && C(B[1]);
      };
    }
    function f(k, C) {
      if (!(k && C))
        return;
      const T = new Date(k).valueOf(), P = new Date(C).valueOf();
      if (T && P)
        return T - P;
    }
    function b(k, C) {
      if (!(k && C))
        return;
      const [T, P] = k.split(w), [B, A] = C.split(w), H = r(T, B);
      if (H !== void 0)
        return H || m(P, A);
    }
    const _ = /\/|:/, y = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function $(k) {
      return _.test(k) && y.test(k);
    }
    const p = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function l(k) {
      return p.lastIndex = 0, p.test(k);
    }
    const s = -2147483648, d = 2 ** 31 - 1;
    function g(k) {
      return Number.isInteger(k) && k <= d && k >= s;
    }
    function I(k) {
      return Number.isInteger(k);
    }
    function S() {
      return !0;
    }
    const j = /[^\\]\\Z/;
    function O(k) {
      if (j.test(k))
        return !1;
      try {
        return new RegExp(k), !0;
      } catch {
        return !1;
      }
    }
  })(lr)), lr;
}
var ur = {}, Nn = { exports: {} }, On = {}, na;
function Hl() {
  if (na) return On;
  na = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ lo(), t = /* @__PURE__ */ uo(), i = /* @__PURE__ */ mo(), a = /* @__PURE__ */ vo(), h = /* @__PURE__ */ bo(), n = [
    e.default,
    t.default,
    (0, i.default)(),
    a.default,
    h.metadataVocabulary,
    h.contentVocabulary
  ];
  return On.default = n, On;
}
const Jl = "http://json-schema.org/draft-07/schema#", Bl = "http://json-schema.org/draft-07/schema#", Gl = "Core schema meta-schema", Kl = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Zl = ["object", "boolean"], Xl = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, Wl = {
  $schema: Jl,
  $id: Bl,
  title: Gl,
  definitions: Kl,
  type: Zl,
  properties: Xl,
  default: !0
};
var ra;
function Ql() {
  return ra || (ra = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const i = /* @__PURE__ */ co(), a = /* @__PURE__ */ Hl(), h = /* @__PURE__ */ wo(), n = Wl, r = ["/properties"], o = "http://json-schema.org/draft-07/schema";
    class c extends i.default {
      _addVocabularies() {
        super._addVocabularies(), a.default.forEach((b) => this.addVocabulary(b)), this.opts.discriminator && this.addKeyword(h.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta)
          return;
        const b = this.opts.$data ? this.$dataMetaSchema(n, r) : n;
        this.addMetaSchema(b, o, !1), this.refs["http://json-schema.org/schema"] = o;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(o) ? o : void 0);
      }
    }
    t.Ajv = c, e.exports = t = c, e.exports.Ajv = c, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = c;
    var m = /* @__PURE__ */ It();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return m.KeywordCxt;
    } });
    var v = /* @__PURE__ */ ee();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return v._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return v.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return v.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return v.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return v.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return v.CodeGen;
    } });
    var w = /* @__PURE__ */ Fn();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return w.default;
    } });
    var u = /* @__PURE__ */ xt();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return u.default;
    } });
  })(Nn, Nn.exports)), Nn.exports;
}
var ia;
function Yl() {
  return ia || (ia = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = /* @__PURE__ */ Ql(), i = /* @__PURE__ */ ee(), a = i.operators, h = {
      formatMaximum: { okStr: "<=", ok: a.LTE, fail: a.GT },
      formatMinimum: { okStr: ">=", ok: a.GTE, fail: a.LT },
      formatExclusiveMaximum: { okStr: "<", ok: a.LT, fail: a.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: a.GT, fail: a.LTE }
    }, n = {
      message: ({ keyword: o, schemaCode: c }) => (0, i.str)`should be ${h[o].okStr} ${c}`,
      params: ({ keyword: o, schemaCode: c }) => (0, i._)`{comparison: ${h[o].okStr}, limit: ${c}}`
    };
    e.formatLimitDefinition = {
      keyword: Object.keys(h),
      type: "string",
      schemaType: "string",
      $data: !0,
      error: n,
      code(o) {
        const { gen: c, data: m, schemaCode: v, keyword: w, it: u } = o, { opts: f, self: b } = u;
        if (!f.validateFormats)
          return;
        const _ = new t.KeywordCxt(u, b.RULES.all.format.definition, "format");
        _.$data ? y() : $();
        function y() {
          const l = c.scopeValue("formats", {
            ref: b.formats,
            code: f.code.formats
          }), s = c.const("fmt", (0, i._)`${l}[${_.schemaCode}]`);
          o.fail$data((0, i.or)((0, i._)`typeof ${s} != "object"`, (0, i._)`${s} instanceof RegExp`, (0, i._)`typeof ${s}.compare != "function"`, p(s)));
        }
        function $() {
          const l = _.schema, s = b.formats[l];
          if (!s || s === !0)
            return;
          if (typeof s != "object" || s instanceof RegExp || typeof s.compare != "function")
            throw new Error(`"${w}": format "${l}" does not define "compare" function`);
          const d = c.scopeValue("formats", {
            key: l,
            ref: s,
            code: f.code.formats ? (0, i._)`${f.code.formats}${(0, i.getProperty)(l)}` : void 0
          });
          o.fail$data(p(d));
        }
        function p(l) {
          return (0, i._)`${l}.compare(${m}, ${v}) ${h[w].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const r = (o) => (o.addKeyword(e.formatLimitDefinition), o);
    e.default = r;
  })(ur)), ur;
}
var sa;
function eu() {
  return sa || (sa = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const i = Fl(), a = Yl(), h = /* @__PURE__ */ ee(), n = new h.Name("fullFormats"), r = new h.Name("fastFormats"), o = (m, v = { keywords: !0 }) => {
      if (Array.isArray(v))
        return c(m, v, i.fullFormats, n), m;
      const [w, u] = v.mode === "fast" ? [i.fastFormats, r] : [i.fullFormats, n], f = v.formats || i.formatNames;
      return c(m, f, w, u), v.keywords && (0, a.default)(m), m;
    };
    o.get = (m, v = "full") => {
      const u = (v === "fast" ? i.fastFormats : i.fullFormats)[m];
      if (!u)
        throw new Error(`Unknown format "${m}"`);
      return u;
    };
    function c(m, v, w, u) {
      var f, b;
      (f = (b = m.opts.code).formats) !== null && f !== void 0 || (b.formats = (0, h._)`require("ajv-formats/dist/formats").${u}`);
      for (const _ of v)
        m.addFormat(_, w[_]);
    }
    e.exports = t = o, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = o;
  })(jn, jn.exports)), jn.exports;
}
var tu = eu();
const nu = /* @__PURE__ */ oi(tu);
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const ru = {
  p: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,
  n: 0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,
  a: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,
  d: 0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,
  Gx: 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,
  Gy: 0x6666666666666666666666666666666666666666666666666666666666666658n
}, { p: pe, n: Pn, Gx: aa, Gy: oa, a: fr, d: pr } = ru, iu = 8n, _t = 32, ei = 64, we = (e = "") => {
  throw new Error(e);
}, su = (e) => typeof e == "bigint", _o = (e) => typeof e == "string", au = (e) => e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array", lt = (e, t) => !au(e) || typeof t == "number" && t > 0 && e.length !== t ? we("Uint8Array expected") : e, Jn = (e) => new Uint8Array(e), ui = (e) => Uint8Array.from(e), $o = (e, t) => e.toString(16).padStart(t, "0"), fi = (e) => Array.from(lt(e)).map((t) => $o(t, 2)).join(""), De = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 }, ca = (e) => {
  if (e >= De._0 && e <= De._9)
    return e - De._0;
  if (e >= De.A && e <= De.F)
    return e - (De.A - 10);
  if (e >= De.a && e <= De.f)
    return e - (De.a - 10);
}, pi = (e) => {
  const t = "hex invalid";
  if (!_o(e))
    return we(t);
  const i = e.length, a = i / 2;
  if (i % 2)
    return we(t);
  const h = Jn(a);
  for (let n = 0, r = 0; n < a; n++, r += 2) {
    const o = ca(e.charCodeAt(r)), c = ca(e.charCodeAt(r + 1));
    if (o === void 0 || c === void 0)
      return we(t);
    h[n] = o * 16 + c;
  }
  return h;
}, qn = (e, t) => lt(_o(e) ? pi(e) : ui(lt(e)), t), So = () => globalThis?.crypto, ou = () => So()?.subtle ?? we("crypto.subtle must be defined"), ti = (...e) => {
  const t = Jn(e.reduce((a, h) => a + lt(h).length, 0));
  let i = 0;
  return e.forEach((a) => {
    t.set(a, i), i += a.length;
  }), t;
}, cu = (e = _t) => So().getRandomValues(Jn(e)), Ln = BigInt, Xe = (e, t, i, a = "bad number: out of range") => su(e) && t <= e && e < i ? e : we(a), Q = (e, t = pe) => {
  const i = e % t;
  return i >= 0n ? i : t + i;
}, du = (e) => Q(e, Pn), Io = (e, t) => {
  (e === 0n || t <= 0n) && we("no inverse n=" + e + " mod=" + t);
  let i = Q(e, t), a = t, h = 0n, n = 1n;
  for (; i !== 0n; ) {
    const r = a / i, o = a % i, c = h - n * r;
    a = i, i = o, h = n, n = c;
  }
  return a === 1n ? Q(h, t) : we("no inverse");
}, da = (e) => e instanceof Le ? e : we("Point expected"), ni = 2n ** 256n, Oe = class Oe {
  constructor(t, i, a, h) {
    Ae(this, "ex");
    Ae(this, "ey");
    Ae(this, "ez");
    Ae(this, "et");
    const n = ni;
    this.ex = Xe(t, 0n, n), this.ey = Xe(i, 0n, n), this.ez = Xe(a, 1n, n), this.et = Xe(h, 0n, n), Object.freeze(this);
  }
  static fromAffine(t) {
    return new Oe(t.x, t.y, 1n, Q(t.x * t.y));
  }
  /** RFC8032 5.1.3: Uint8Array to Point. */
  static fromBytes(t, i = !1) {
    const a = pr, h = ui(lt(t, _t)), n = t[31];
    h[31] = n & -129;
    const r = hi(h);
    Xe(r, 0n, i ? ni : pe);
    const c = Q(r * r), m = Q(c - 1n), v = Q(a * c + 1n);
    let { isValid: w, value: u } = fu(m, v);
    w || we("bad point: y not sqrt");
    const f = (u & 1n) === 1n, b = (n & 128) !== 0;
    return !i && u === 0n && b && we("bad point: x==0, isLastByteOdd"), b !== f && (u = Q(-u)), new Oe(u, r, 1n, Q(u * r));
  }
  /** Checks if the point is valid and on-curve. */
  assertValidity() {
    const t = fr, i = pr, a = this;
    if (a.is0())
      throw new Error("bad point: ZERO");
    const { ex: h, ey: n, ez: r, et: o } = a, c = Q(h * h), m = Q(n * n), v = Q(r * r), w = Q(v * v), u = Q(c * t), f = Q(v * Q(u + m)), b = Q(w + Q(i * Q(c * m)));
    if (f !== b)
      throw new Error("bad point: equation left != right (1)");
    const _ = Q(h * n), y = Q(r * o);
    if (_ !== y)
      throw new Error("bad point: equation left != right (2)");
    return this;
  }
  /** Equality check: compare points P&Q. */
  equals(t) {
    const { ex: i, ey: a, ez: h } = this, { ex: n, ey: r, ez: o } = da(t), c = Q(i * o), m = Q(n * h), v = Q(a * o), w = Q(r * h);
    return c === m && v === w;
  }
  is0() {
    return this.equals(st);
  }
  /** Flip point over y coordinate. */
  negate() {
    return new Oe(Q(-this.ex), this.ey, this.ez, Q(-this.et));
  }
  /** Point doubling. Complete formula. Cost: `4M + 4S + 1*a + 6add + 1*2`. */
  double() {
    const { ex: t, ey: i, ez: a } = this, h = fr, n = Q(t * t), r = Q(i * i), o = Q(2n * Q(a * a)), c = Q(h * n), m = t + i, v = Q(Q(m * m) - n - r), w = c + r, u = w - o, f = c - r, b = Q(v * u), _ = Q(w * f), y = Q(v * f), $ = Q(u * w);
    return new Oe(b, _, $, y);
  }
  /** Point addition. Complete formula. Cost: `8M + 1*k + 8add + 1*2`. */
  add(t) {
    const { ex: i, ey: a, ez: h, et: n } = this, { ex: r, ey: o, ez: c, et: m } = da(t), v = fr, w = pr, u = Q(i * r), f = Q(a * o), b = Q(n * w * m), _ = Q(h * c), y = Q((i + a) * (r + o) - u - f), $ = Q(_ - b), p = Q(_ + b), l = Q(f - v * u), s = Q(y * $), d = Q(p * l), g = Q(y * l), I = Q($ * p);
    return new Oe(s, d, I, g);
  }
  /**
   * Point-by-scalar multiplication. Scalar must be in range 1 <= n < CURVE.n.
   * Uses {@link wNAF} for base point.
   * Uses fake point to mitigate side-channel leakage.
   * @param n scalar by which point is multiplied
   * @param safe safe mode guards against timing attacks; unsafe mode is faster
   */
  multiply(t, i = !0) {
    if (!i && (t === 0n || this.is0()))
      return st;
    if (Xe(t, 1n, Pn), t === 1n)
      return this;
    if (this.equals(ut))
      return _u(t).p;
    let a = st, h = ut;
    for (let n = this; t > 0n; n = n.double(), t >>= 1n)
      t & 1n ? a = a.add(n) : i && (h = h.add(n));
    return a;
  }
  /** Convert point to 2d xy affine point. (X, Y, Z) ∋ (x=X/Z, y=Y/Z) */
  toAffine() {
    const { ex: t, ey: i, ez: a } = this;
    if (this.equals(st))
      return { x: 0n, y: 1n };
    const h = Io(a, pe);
    return Q(a * h) !== 1n && we("invalid inverse"), { x: Q(t * h), y: Q(i * h) };
  }
  toBytes() {
    const { x: t, y: i } = this.assertValidity().toAffine(), a = lu(i);
    return a[31] |= t & 1n ? 128 : 0, a;
  }
  toHex() {
    return fi(this.toBytes());
  }
  // encode to hex string
  clearCofactor() {
    return this.multiply(Ln(iu), !1);
  }
  isSmallOrder() {
    return this.clearCofactor().is0();
  }
  isTorsionFree() {
    let t = this.multiply(Pn / 2n, !1).double();
    return Pn % 2n && (t = t.add(this)), t.is0();
  }
  static fromHex(t, i) {
    return Oe.fromBytes(qn(t), i);
  }
  get x() {
    return this.toAffine().x;
  }
  get y() {
    return this.toAffine().y;
  }
  toRawBytes() {
    return this.toBytes();
  }
};
Ae(Oe, "BASE"), Ae(Oe, "ZERO");
let Le = Oe;
const ut = new Le(aa, oa, 1n, Q(aa * oa)), st = new Le(0n, 1n, 1n, 0n);
Le.BASE = ut;
Le.ZERO = st;
const lu = (e) => pi($o(Xe(e, 0n, ni), ei)).reverse(), hi = (e) => Ln("0x" + fi(ui(lt(e)).reverse())), Ne = (e, t) => {
  let i = e;
  for (; t-- > 0n; )
    i *= i, i %= pe;
  return i;
}, uu = (e) => {
  const i = e * e % pe * e % pe, a = Ne(i, 2n) * i % pe, h = Ne(a, 1n) * e % pe, n = Ne(h, 5n) * h % pe, r = Ne(n, 10n) * n % pe, o = Ne(r, 20n) * r % pe, c = Ne(o, 40n) * o % pe, m = Ne(c, 80n) * c % pe, v = Ne(m, 80n) * c % pe, w = Ne(v, 10n) * n % pe;
  return { pow_p_5_8: Ne(w, 2n) * e % pe, b2: i };
}, la = 0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n, fu = (e, t) => {
  const i = Q(t * t * t), a = Q(i * i * t), h = uu(e * a).pow_p_5_8;
  let n = Q(e * i * h);
  const r = Q(t * n * n), o = n, c = Q(n * la), m = r === e, v = r === Q(-e), w = r === Q(-e * la);
  return m && (n = o), (v || w) && (n = c), (Q(n) & 1n) === 1n && (n = Q(-n)), { isValid: m || v, value: n };
}, pu = (e) => du(hi(e)), hu = (...e) => vu.sha512Async(...e), mu = (e) => hu(e.hashable).then(e.finish), xo = { zip215: !0 }, yu = (e, t, i, a = xo) => {
  e = qn(e, ei), t = qn(t), i = qn(i, _t);
  const { zip215: h } = a;
  let n, r, o, c, m = Uint8Array.of();
  try {
    n = Le.fromHex(i, h), r = Le.fromHex(e.slice(0, _t), h), o = hi(e.slice(_t, ei)), c = ut.multiply(o, !1), m = ti(r.toBytes(), n.toBytes(), t);
  } catch {
  }
  return { hashable: m, finish: (w) => {
    if (c == null || !h && n.isSmallOrder())
      return !1;
    const u = pu(w);
    return r.add(n.multiply(u, !1)).add(c.negate()).clearCofactor().is0();
  } };
}, gu = async (e, t, i, a = xo) => mu(yu(e, t, i, a)), vu = {
  sha512Async: async (...e) => {
    const t = ou(), i = ti(...e);
    return Jn(await t.digest("SHA-512", i.buffer));
  },
  sha512Sync: void 0,
  bytesToHex: fi,
  hexToBytes: pi,
  concatBytes: ti,
  mod: Q,
  invert: Io,
  randomBytes: cu
}, Cn = 8, bu = 256, Eo = Math.ceil(bu / Cn) + 1, ri = 2 ** (Cn - 1), wu = () => {
  const e = [];
  let t = ut, i = t;
  for (let a = 0; a < Eo; a++) {
    i = t, e.push(i);
    for (let h = 1; h < ri; h++)
      i = i.add(t), e.push(i);
    t = i.double();
  }
  return e;
};
let ua;
const fa = (e, t) => {
  const i = t.negate();
  return e ? i : t;
}, _u = (e) => {
  const t = ua || (ua = wu());
  let i = st, a = ut;
  const h = 2 ** Cn, n = h, r = Ln(h - 1), o = Ln(Cn);
  for (let c = 0; c < Eo; c++) {
    let m = Number(e & r);
    e >>= o, m > ri && (m -= n, e += 1n);
    const v = c * ri, w = v, u = v + Math.abs(m) - 1, f = c % 2 !== 0, b = m < 0;
    m === 0 ? a = a.add(fa(f, t[w])) : i = i.add(fa(b, t[u]));
  }
  return { p: i, f: a };
};
var hr = {}, mr, pa;
function mi() {
  return pa || (pa = 1, mr = class Ro {
    /**
     * Creates a new IdentifierIssuer. A IdentifierIssuer issues unique
     * identifiers, keeping track of any previously issued identifiers.
     *
     * @param prefix the prefix to use ('<prefix><counter>').
     * @param existing an existing Map to use.
     * @param counter the counter to use.
     */
    constructor(t, i = /* @__PURE__ */ new Map(), a = 0) {
      this.prefix = t, this._existing = i, this.counter = a;
    }
    /**
     * Copies this IdentifierIssuer.
     *
     * @return a copy of this IdentifierIssuer.
     */
    clone() {
      const { prefix: t, _existing: i, counter: a } = this;
      return new Ro(t, new Map(i), a);
    }
    /**
     * Gets the new identifier for the given old identifier, where if no old
     * identifier is given a new identifier will be generated.
     *
     * @param [old] the old identifier to get the new identifier for.
     *
     * @return the new identifier.
     */
    getId(t) {
      const i = t && this._existing.get(t);
      if (i)
        return i;
      const a = this.prefix + this.counter;
      return this.counter++, t && this._existing.set(t, a), a;
    }
    /**
     * Returns true if the given old identifer has already been assigned a new
     * identifier.
     *
     * @param old the old identifier to check.
     *
     * @return true if the old identifier has been assigned a new identifier,
     *   false if not.
     */
    hasId(t) {
      return this._existing.has(t);
    }
    /**
     * Returns all of the IDs that have been issued new IDs in the order in
     * which they were issued new IDs.
     *
     * @return the list of old IDs that has been issued new IDs in order.
     */
    getOldIds() {
      return [...this._existing.keys()];
    }
  }), mr;
}
var yr = {}, ha;
function $u() {
  return ha || (ha = 1, (function(e, t) {
    if (e.setImmediate)
      return;
    var i = 1, a = {}, h = !1, n = e.document, r;
    function o(p) {
      typeof p != "function" && (p = new Function("" + p));
      for (var l = new Array(arguments.length - 1), s = 0; s < l.length; s++)
        l[s] = arguments[s + 1];
      var d = { callback: p, args: l };
      return a[i] = d, r(i), i++;
    }
    function c(p) {
      delete a[p];
    }
    function m(p) {
      var l = p.callback, s = p.args;
      switch (s.length) {
        case 0:
          l();
          break;
        case 1:
          l(s[0]);
          break;
        case 2:
          l(s[0], s[1]);
          break;
        case 3:
          l(s[0], s[1], s[2]);
          break;
        default:
          l.apply(t, s);
          break;
      }
    }
    function v(p) {
      if (h)
        setTimeout(v, 0, p);
      else {
        var l = a[p];
        if (l) {
          h = !0;
          try {
            m(l);
          } finally {
            c(p), h = !1;
          }
        }
      }
    }
    function w() {
      r = function(p) {
        process.nextTick(function() {
          v(p);
        });
      };
    }
    function u() {
      if (e.postMessage && !e.importScripts) {
        var p = !0, l = e.onmessage;
        return e.onmessage = function() {
          p = !1;
        }, e.postMessage("", "*"), e.onmessage = l, p;
      }
    }
    function f() {
      var p = "setImmediate$" + Math.random() + "$", l = function(s) {
        s.source === e && typeof s.data == "string" && s.data.indexOf(p) === 0 && v(+s.data.slice(p.length));
      };
      e.addEventListener ? e.addEventListener("message", l, !1) : e.attachEvent("onmessage", l), r = function(s) {
        e.postMessage(p + s, "*");
      };
    }
    function b() {
      var p = new MessageChannel();
      p.port1.onmessage = function(l) {
        var s = l.data;
        v(s);
      }, r = function(l) {
        p.port2.postMessage(l);
      };
    }
    function _() {
      var p = n.documentElement;
      r = function(l) {
        var s = n.createElement("script");
        s.onreadystatechange = function() {
          v(l), s.onreadystatechange = null, p.removeChild(s), s = null;
        }, p.appendChild(s);
      };
    }
    function y() {
      r = function(p) {
        setTimeout(v, 0, p);
      };
    }
    var $ = Object.getPrototypeOf && Object.getPrototypeOf(e);
    $ = $ && $.setTimeout ? $ : e, {}.toString.call(e.process) === "[object process]" ? w() : u() ? f() : e.MessageChannel ? b() : n && "onreadystatechange" in n.createElement("script") ? _() : y(), $.setImmediate = o, $.clearImmediate = c;
  })(typeof self > "u" ? typeof ji > "u" ? yr : ji : self)), yr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var gr, ma;
function Bn() {
  if (ma) return gr;
  ma = 1, $u();
  const e = self.crypto || self.msCrypto;
  return gr = class {
    /**
     * Creates a new MessageDigest.
     *
     * @param algorithm the algorithm to use.
     */
    constructor(i) {
      if (!(e && e.subtle))
        throw new Error("crypto.subtle not found.");
      if (i === "sha256")
        this.algorithm = { name: "SHA-256" };
      else if (i === "sha1")
        this.algorithm = { name: "SHA-1" };
      else
        throw new Error(`Unsupported algorithm "${i}".`);
      this._content = "";
    }
    update(i) {
      this._content += i;
    }
    async digest() {
      const i = new TextEncoder().encode(this._content), a = new Uint8Array(
        await e.subtle.digest(this.algorithm, i)
      );
      let h = "";
      for (let n = 0; n < a.length; ++n)
        h += a[n].toString(16).padStart(2, "0");
      return h;
    }
  }, gr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var vr, ya;
function jo() {
  return ya || (ya = 1, vr = class {
    /**
     * A Permuter iterates over all possible permutations of the given array
     * of elements.
     *
     * @param list the array of elements to iterate over.
     */
    constructor(t) {
      this.current = t.sort(), this.done = !1, this.dir = /* @__PURE__ */ new Map();
      for (let i = 0; i < t.length; ++i)
        this.dir.set(t[i], !0);
    }
    /**
     * Returns true if there is another permutation.
     *
     * @return true if there is another permutation, false if not.
     */
    hasNext() {
      return !this.done;
    }
    /**
     * Gets the next permutation. Call hasNext() to ensure there is another one
     * first.
     *
     * @return the next permutation.
     */
    next() {
      const { current: t, dir: i } = this, a = t.slice();
      let h = null, n = 0;
      const r = t.length;
      for (let o = 0; o < r; ++o) {
        const c = t[o], m = i.get(c);
        (h === null || c > h) && (m && o > 0 && c > t[o - 1] || !m && o < r - 1 && c > t[o + 1]) && (h = c, n = o);
      }
      if (h === null)
        this.done = !0;
      else {
        const o = i.get(h) ? n - 1 : n + 1;
        t[n] = t[o], t[o] = h;
        for (const c of t)
          c > h && i.set(c, !i.get(c));
      }
      return a;
    }
  }), vr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var br, ga;
function yi() {
  if (ga) return br;
  ga = 1;
  const t = "http://www.w3.org/1999/02/22-rdf-syntax-ns#" + "langString", i = "http://www.w3.org/2001/XMLSchema#string", a = "NamedNode", h = "BlankNode", n = "Literal", r = "DefaultGraph", o = {};
  (() => {
    const f = "(?:<([^:]+:[^>]*)>)", _ = "A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�" + "_", y = _ + "0-9-·̀-ͯ‿-⁀", p = "(_:(?:[" + _ + "0-9])(?:(?:[" + y + ".])*(?:[" + y + "]))?)", l = '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"', s = "(?:\\^\\^" + f + ")", g = "(?:" + l + "(?:" + s + "|" + "(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*))" + ")?)", I = "[ \\t]+", S = "[ \\t]*", j = "(?:" + f + "|" + p + ")" + I, O = f + I, k = "(?:" + f + "|" + p + "|" + g + ")" + S, C = "(?:\\.|(?:(?:" + f + "|" + p + ")" + S + "\\.))";
    o.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g, o.empty = new RegExp("^" + S + "$"), o.quad = new RegExp(
      "^" + S + j + O + k + C + S + "$"
    );
  })(), br = class Tn {
    /**
     * Parses RDF in the form of N-Quads.
     *
     * @param input the N-Quads input to parse.
     *
     * @return an RDF dataset (an array of quads per http://rdf.js.org/).
     */
    static parse(b) {
      const _ = [], y = {}, $ = b.split(o.eoln);
      let p = 0;
      for (const l of $) {
        if (p++, o.empty.test(l))
          continue;
        const s = l.match(o.quad);
        if (s === null)
          throw new Error("N-Quads parse error on line " + p + ".");
        const d = { subject: null, predicate: null, object: null, graph: null };
        if (s[1] !== void 0 ? d.subject = { termType: a, value: s[1] } : d.subject = { termType: h, value: s[2] }, d.predicate = { termType: a, value: s[3] }, s[4] !== void 0 ? d.object = { termType: a, value: s[4] } : s[5] !== void 0 ? d.object = { termType: h, value: s[5] } : (d.object = {
          termType: n,
          value: void 0,
          datatype: {
            termType: a
          }
        }, s[7] !== void 0 ? d.object.datatype.value = s[7] : s[8] !== void 0 ? (d.object.datatype.value = t, d.object.language = s[8]) : d.object.datatype.value = i, d.object.value = u(s[6])), s[9] !== void 0 ? d.graph = {
          termType: a,
          value: s[9]
        } : s[10] !== void 0 ? d.graph = {
          termType: h,
          value: s[10]
        } : d.graph = {
          termType: r,
          value: ""
        }, !(d.graph.value in y))
          y[d.graph.value] = [d], _.push(d);
        else {
          let g = !0;
          const I = y[d.graph.value];
          for (const S of I)
            if (c(S, d)) {
              g = !1;
              break;
            }
          g && (I.push(d), _.push(d));
        }
      }
      return _;
    }
    /**
     * Converts an RDF dataset to N-Quads.
     *
     * @param dataset (array of quads) the RDF dataset to convert.
     *
     * @return the N-Quads string.
     */
    static serialize(b) {
      Array.isArray(b) || (b = Tn.legacyDatasetToQuads(b));
      const _ = [];
      for (const y of b)
        _.push(Tn.serializeQuad(y));
      return _.sort().join("");
    }
    /**
     * Converts RDF quad components to an N-Quad string (a single quad).
     *
     * @param {Object} s - N-Quad subject component.
     * @param {Object} p - N-Quad predicate component.
     * @param {Object} o - N-Quad object component.
     * @param {Object} g - N-Quad graph component.
     *
     * @return {string} the N-Quad.
     */
    static serializeQuadComponents(b, _, y, $) {
      let p = "";
      return b.termType === a ? p += `<${b.value}>` : p += `${b.value}`, p += ` <${_.value}> `, y.termType === a ? p += `<${y.value}>` : y.termType === h ? p += y.value : (p += `"${v(y.value)}"`, y.datatype.value === t ? y.language && (p += `@${y.language}`) : y.datatype.value !== i && (p += `^^<${y.datatype.value}>`)), $.termType === a ? p += ` <${$.value}>` : $.termType === h && (p += ` ${$.value}`), p += ` .
`, p;
    }
    /**
     * Converts an RDF quad to an N-Quad string (a single quad).
     *
     * @param quad the RDF quad convert.
     *
     * @return the N-Quad string.
     */
    static serializeQuad(b) {
      return Tn.serializeQuadComponents(
        b.subject,
        b.predicate,
        b.object,
        b.graph
      );
    }
    /**
     * Converts a legacy-formatted dataset to an array of quads dataset per
     * http://rdf.js.org/.
     *
     * @param dataset the legacy dataset to convert.
     *
     * @return the array of quads dataset.
     */
    static legacyDatasetToQuads(b) {
      const _ = [], y = {
        "blank node": h,
        IRI: a,
        literal: n
      };
      for (const $ in b)
        b[$].forEach((l) => {
          const s = {};
          for (const d in l) {
            const g = l[d], I = {
              termType: y[g.type],
              value: g.value
            };
            I.termType === n && (I.datatype = {
              termType: a
            }, "datatype" in g && (I.datatype.value = g.datatype), "language" in g ? ("datatype" in g || (I.datatype.value = t), I.language = g.language) : "datatype" in g || (I.datatype.value = i)), s[d] = I;
          }
          $ === "@default" ? s.graph = {
            termType: r,
            value: ""
          } : s.graph = {
            termType: $.startsWith("_:") ? h : a,
            value: $
          }, _.push(s);
        });
      return _;
    }
  };
  function c(f, b) {
    return !(f.subject.termType === b.subject.termType && f.object.termType === b.object.termType) || !(f.subject.value === b.subject.value && f.predicate.value === b.predicate.value && f.object.value === b.object.value) ? !1 : f.object.termType !== n ? !0 : f.object.datatype.termType === b.object.datatype.termType && f.object.language === b.object.language && f.object.datatype.value === b.object.datatype.value;
  }
  const m = /["\\\n\r]/g;
  function v(f) {
    return f.replace(m, function(b) {
      switch (b) {
        case '"':
          return '\\"';
        case "\\":
          return "\\\\";
        case `
`:
          return "\\n";
        case "\r":
          return "\\r";
      }
    });
  }
  const w = /(?:\\([tbnrf"'\\]))|(?:\\u([0-9A-Fa-f]{4}))|(?:\\U([0-9A-Fa-f]{8}))/g;
  function u(f) {
    return f.replace(w, function(b, _, y, $) {
      if (_)
        switch (_) {
          case "t":
            return "	";
          case "b":
            return "\b";
          case "n":
            return `
`;
          case "r":
            return "\r";
          case "f":
            return "\f";
          case '"':
            return '"';
          case "'":
            return "'";
          case "\\":
            return "\\";
        }
      if (y)
        return String.fromCharCode(parseInt(y, 16));
      if ($)
        throw new Error("Unsupported U escape");
    });
  }
  return br;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var wr, va;
function No() {
  if (va) return wr;
  va = 1;
  const e = mi(), t = Bn(), i = jo(), a = yi();
  wr = class {
    constructor({
      createMessageDigest: r = () => new t("sha256"),
      canonicalIdMap: o = /* @__PURE__ */ new Map(),
      maxDeepIterations: c = 1 / 0
    } = {}) {
      this.name = "URDNA2015", this.blankNodeInfo = /* @__PURE__ */ new Map(), this.canonicalIssuer = new e("_:c14n", o), this.createMessageDigest = r, this.maxDeepIterations = c, this.quads = null, this.deepIterations = null;
    }
    // 4.4) Normalization Algorithm
    async main(r) {
      this.deepIterations = /* @__PURE__ */ new Map(), this.quads = r;
      for (const f of r)
        this._addBlankNodeQuadInfo({ quad: f, component: f.subject }), this._addBlankNodeQuadInfo({ quad: f, component: f.object }), this._addBlankNodeQuadInfo({ quad: f, component: f.graph });
      const o = /* @__PURE__ */ new Map(), c = [...this.blankNodeInfo.keys()];
      let m = 0;
      for (const f of c)
        ++m % 100 === 0 && await this._yield(), await this._hashAndTrackBlankNode({ id: f, hashToBlankNodes: o });
      const v = [...o.keys()].sort(), w = [];
      for (const f of v) {
        const b = o.get(f);
        if (b.length > 1) {
          w.push(b);
          continue;
        }
        const _ = b[0];
        this.canonicalIssuer.getId(_);
      }
      for (const f of w) {
        const b = [];
        for (const _ of f) {
          if (this.canonicalIssuer.hasId(_))
            continue;
          const y = new e("_:b");
          y.getId(_);
          const $ = await this.hashNDegreeQuads(_, y);
          b.push($);
        }
        b.sort(h);
        for (const _ of b) {
          const y = _.issuer.getOldIds();
          for (const $ of y)
            this.canonicalIssuer.getId($);
        }
      }
      const u = [];
      for (const f of this.quads) {
        const b = a.serializeQuadComponents(
          this._componentWithCanonicalId(f.subject),
          f.predicate,
          this._componentWithCanonicalId(f.object),
          this._componentWithCanonicalId(f.graph)
        );
        u.push(b);
      }
      return u.sort(), u.join("");
    }
    // 4.6) Hash First Degree Quads
    async hashFirstDegreeQuads(r) {
      const o = [], c = this.blankNodeInfo.get(r), m = c.quads;
      for (const w of m) {
        const u = {
          subject: null,
          predicate: w.predicate,
          object: null,
          graph: null
        };
        u.subject = this.modifyFirstDegreeComponent(
          r,
          w.subject,
          "subject"
        ), u.object = this.modifyFirstDegreeComponent(
          r,
          w.object,
          "object"
        ), u.graph = this.modifyFirstDegreeComponent(
          r,
          w.graph,
          "graph"
        ), o.push(a.serializeQuad(u));
      }
      o.sort();
      const v = this.createMessageDigest();
      for (const w of o)
        v.update(w);
      return c.hash = await v.digest(), c.hash;
    }
    // 4.7) Hash Related Blank Node
    async hashRelatedBlankNode(r, o, c, m) {
      let v;
      this.canonicalIssuer.hasId(r) ? v = this.canonicalIssuer.getId(r) : c.hasId(r) ? v = c.getId(r) : v = this.blankNodeInfo.get(r).hash;
      const w = this.createMessageDigest();
      return w.update(m), m !== "g" && w.update(this.getRelatedPredicate(o)), w.update(v), w.digest();
    }
    // 4.8) Hash N-Degree Quads
    async hashNDegreeQuads(r, o) {
      const c = this.deepIterations.get(r) || 0;
      if (c > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(r, c + 1);
      const m = this.createMessageDigest(), v = await this.createHashToRelated(r, o), w = [...v.keys()].sort();
      for (const u of w) {
        m.update(u);
        let f = "", b;
        const _ = new i(v.get(u));
        let y = 0;
        for (; _.hasNext(); ) {
          const $ = _.next();
          ++y % 3 === 0 && await this._yield();
          let p = o.clone(), l = "";
          const s = [];
          let d = !1;
          for (const g of $)
            if (this.canonicalIssuer.hasId(g) ? l += this.canonicalIssuer.getId(g) : (p.hasId(g) || s.push(g), l += p.getId(g)), f.length !== 0 && l > f) {
              d = !0;
              break;
            }
          if (!d) {
            for (const g of s) {
              const I = await this.hashNDegreeQuads(g, p);
              if (l += p.getId(g), l += `<${I.hash}>`, p = I.issuer, f.length !== 0 && l > f) {
                d = !0;
                break;
              }
            }
            d || (f.length === 0 || l < f) && (f = l, b = p);
          }
        }
        m.update(f), o = b;
      }
      return { hash: await m.digest(), issuer: o };
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(r, o) {
      return o.termType !== "BlankNode" ? o : {
        termType: "BlankNode",
        value: o.value === r ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(r) {
      return `<${r.predicate.value}>`;
    }
    // helper for creating hash to related blank nodes map
    async createHashToRelated(r, o) {
      const c = /* @__PURE__ */ new Map(), m = this.blankNodeInfo.get(r).quads;
      let v = 0;
      for (const w of m)
        ++v % 100 === 0 && await this._yield(), await Promise.all([
          this._addRelatedBlankNodeHash({
            quad: w,
            component: w.subject,
            position: "s",
            id: r,
            issuer: o,
            hashToRelated: c
          }),
          this._addRelatedBlankNodeHash({
            quad: w,
            component: w.object,
            position: "o",
            id: r,
            issuer: o,
            hashToRelated: c
          }),
          this._addRelatedBlankNodeHash({
            quad: w,
            component: w.graph,
            position: "g",
            id: r,
            issuer: o,
            hashToRelated: c
          })
        ]);
      return c;
    }
    async _hashAndTrackBlankNode({ id: r, hashToBlankNodes: o }) {
      const c = await this.hashFirstDegreeQuads(r), m = o.get(c);
      m ? m.push(r) : o.set(c, [r]);
    }
    _addBlankNodeQuadInfo({ quad: r, component: o }) {
      if (o.termType !== "BlankNode")
        return;
      const c = o.value, m = this.blankNodeInfo.get(c);
      m ? m.quads.add(r) : this.blankNodeInfo.set(c, { quads: /* @__PURE__ */ new Set([r]), hash: null });
    }
    async _addRelatedBlankNodeHash({ quad: r, component: o, position: c, id: m, issuer: v, hashToRelated: w }) {
      if (!(o.termType === "BlankNode" && o.value !== m))
        return;
      const u = o.value, f = await this.hashRelatedBlankNode(
        u,
        r,
        v,
        c
      ), b = w.get(f);
      b ? b.push(u) : w.set(f, [u]);
    }
    // canonical ids for 7.1
    _componentWithCanonicalId(r) {
      return r.termType === "BlankNode" && !r.value.startsWith(this.canonicalIssuer.prefix) ? {
        termType: "BlankNode",
        value: this.canonicalIssuer.getId(r.value)
      } : r;
    }
    async _yield() {
      return new Promise((r) => setImmediate(r));
    }
  };
  function h(n, r) {
    return n.hash < r.hash ? -1 : n.hash > r.hash ? 1 : 0;
  }
  return wr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var _r, ba;
function Su() {
  if (ba) return _r;
  ba = 1;
  const e = Bn(), t = No();
  return _r = class extends t {
    constructor() {
      super(), this.name = "URGNA2012", this.createMessageDigest = () => new e("sha1");
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(a, h, n) {
      return h.termType !== "BlankNode" ? h : n === "graph" ? {
        termType: "BlankNode",
        value: "_:g"
      } : {
        termType: "BlankNode",
        value: h.value === a ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(a) {
      return a.predicate.value;
    }
    // helper for creating hash to related blank nodes map
    async createHashToRelated(a, h) {
      const n = /* @__PURE__ */ new Map(), r = this.blankNodeInfo.get(a).quads;
      let o = 0;
      for (const c of r) {
        let m, v;
        if (c.subject.termType === "BlankNode" && c.subject.value !== a)
          v = c.subject.value, m = "p";
        else if (c.object.termType === "BlankNode" && c.object.value !== a)
          v = c.object.value, m = "r";
        else
          continue;
        ++o % 100 === 0 && await this._yield();
        const w = await this.hashRelatedBlankNode(
          v,
          c,
          h,
          m
        ), u = n.get(w);
        u ? u.push(v) : n.set(w, [v]);
      }
      return n;
    }
  }, _r;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var $r, wa;
function Oo() {
  if (wa) return $r;
  wa = 1;
  const e = mi(), t = Bn(), i = jo(), a = yi();
  $r = class {
    constructor({
      createMessageDigest: r = () => new t("sha256"),
      canonicalIdMap: o = /* @__PURE__ */ new Map(),
      maxDeepIterations: c = 1 / 0
    } = {}) {
      this.name = "URDNA2015", this.blankNodeInfo = /* @__PURE__ */ new Map(), this.canonicalIssuer = new e("_:c14n", o), this.createMessageDigest = r, this.maxDeepIterations = c, this.quads = null, this.deepIterations = null;
    }
    // 4.4) Normalization Algorithm
    main(r) {
      this.deepIterations = /* @__PURE__ */ new Map(), this.quads = r;
      for (const u of r)
        this._addBlankNodeQuadInfo({ quad: u, component: u.subject }), this._addBlankNodeQuadInfo({ quad: u, component: u.object }), this._addBlankNodeQuadInfo({ quad: u, component: u.graph });
      const o = /* @__PURE__ */ new Map(), c = [...this.blankNodeInfo.keys()];
      for (const u of c)
        this._hashAndTrackBlankNode({ id: u, hashToBlankNodes: o });
      const m = [...o.keys()].sort(), v = [];
      for (const u of m) {
        const f = o.get(u);
        if (f.length > 1) {
          v.push(f);
          continue;
        }
        const b = f[0];
        this.canonicalIssuer.getId(b);
      }
      for (const u of v) {
        const f = [];
        for (const b of u) {
          if (this.canonicalIssuer.hasId(b))
            continue;
          const _ = new e("_:b");
          _.getId(b);
          const y = this.hashNDegreeQuads(b, _);
          f.push(y);
        }
        f.sort(h);
        for (const b of f) {
          const _ = b.issuer.getOldIds();
          for (const y of _)
            this.canonicalIssuer.getId(y);
        }
      }
      const w = [];
      for (const u of this.quads) {
        const f = a.serializeQuadComponents(
          this._componentWithCanonicalId({ component: u.subject }),
          u.predicate,
          this._componentWithCanonicalId({ component: u.object }),
          this._componentWithCanonicalId({ component: u.graph })
        );
        w.push(f);
      }
      return w.sort(), w.join("");
    }
    // 4.6) Hash First Degree Quads
    hashFirstDegreeQuads(r) {
      const o = [], c = this.blankNodeInfo.get(r), m = c.quads;
      for (const w of m) {
        const u = {
          subject: null,
          predicate: w.predicate,
          object: null,
          graph: null
        };
        u.subject = this.modifyFirstDegreeComponent(
          r,
          w.subject,
          "subject"
        ), u.object = this.modifyFirstDegreeComponent(
          r,
          w.object,
          "object"
        ), u.graph = this.modifyFirstDegreeComponent(
          r,
          w.graph,
          "graph"
        ), o.push(a.serializeQuad(u));
      }
      o.sort();
      const v = this.createMessageDigest();
      for (const w of o)
        v.update(w);
      return c.hash = v.digest(), c.hash;
    }
    // 4.7) Hash Related Blank Node
    hashRelatedBlankNode(r, o, c, m) {
      let v;
      this.canonicalIssuer.hasId(r) ? v = this.canonicalIssuer.getId(r) : c.hasId(r) ? v = c.getId(r) : v = this.blankNodeInfo.get(r).hash;
      const w = this.createMessageDigest();
      return w.update(m), m !== "g" && w.update(this.getRelatedPredicate(o)), w.update(v), w.digest();
    }
    // 4.8) Hash N-Degree Quads
    hashNDegreeQuads(r, o) {
      const c = this.deepIterations.get(r) || 0;
      if (c > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(r, c + 1);
      const m = this.createMessageDigest(), v = this.createHashToRelated(r, o), w = [...v.keys()].sort();
      for (const u of w) {
        m.update(u);
        let f = "", b;
        const _ = new i(v.get(u));
        for (; _.hasNext(); ) {
          const y = _.next();
          let $ = o.clone(), p = "";
          const l = [];
          let s = !1;
          for (const d of y)
            if (this.canonicalIssuer.hasId(d) ? p += this.canonicalIssuer.getId(d) : ($.hasId(d) || l.push(d), p += $.getId(d)), f.length !== 0 && p > f) {
              s = !0;
              break;
            }
          if (!s) {
            for (const d of l) {
              const g = this.hashNDegreeQuads(d, $);
              if (p += $.getId(d), p += `<${g.hash}>`, $ = g.issuer, f.length !== 0 && p > f) {
                s = !0;
                break;
              }
            }
            s || (f.length === 0 || p < f) && (f = p, b = $);
          }
        }
        m.update(f), o = b;
      }
      return { hash: m.digest(), issuer: o };
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(r, o) {
      return o.termType !== "BlankNode" ? o : {
        termType: "BlankNode",
        value: o.value === r ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(r) {
      return `<${r.predicate.value}>`;
    }
    // helper for creating hash to related blank nodes map
    createHashToRelated(r, o) {
      const c = /* @__PURE__ */ new Map(), m = this.blankNodeInfo.get(r).quads;
      for (const v of m)
        this._addRelatedBlankNodeHash({
          quad: v,
          component: v.subject,
          position: "s",
          id: r,
          issuer: o,
          hashToRelated: c
        }), this._addRelatedBlankNodeHash({
          quad: v,
          component: v.object,
          position: "o",
          id: r,
          issuer: o,
          hashToRelated: c
        }), this._addRelatedBlankNodeHash({
          quad: v,
          component: v.graph,
          position: "g",
          id: r,
          issuer: o,
          hashToRelated: c
        });
      return c;
    }
    _hashAndTrackBlankNode({ id: r, hashToBlankNodes: o }) {
      const c = this.hashFirstDegreeQuads(r), m = o.get(c);
      m ? m.push(r) : o.set(c, [r]);
    }
    _addBlankNodeQuadInfo({ quad: r, component: o }) {
      if (o.termType !== "BlankNode")
        return;
      const c = o.value, m = this.blankNodeInfo.get(c);
      m ? m.quads.add(r) : this.blankNodeInfo.set(c, { quads: /* @__PURE__ */ new Set([r]), hash: null });
    }
    _addRelatedBlankNodeHash({ quad: r, component: o, position: c, id: m, issuer: v, hashToRelated: w }) {
      if (!(o.termType === "BlankNode" && o.value !== m))
        return;
      const u = o.value, f = this.hashRelatedBlankNode(u, r, v, c), b = w.get(f);
      b ? b.push(u) : w.set(f, [u]);
    }
    // canonical ids for 7.1
    _componentWithCanonicalId({ component: r }) {
      return r.termType === "BlankNode" && !r.value.startsWith(this.canonicalIssuer.prefix) ? {
        termType: "BlankNode",
        value: this.canonicalIssuer.getId(r.value)
      } : r;
    }
  };
  function h(n, r) {
    return n.hash < r.hash ? -1 : n.hash > r.hash ? 1 : 0;
  }
  return $r;
}
/*!
 * Copyright (c) 2016-2021 Digital Bazaar, Inc. All rights reserved.
 */
var Sr, _a;
function Iu() {
  if (_a) return Sr;
  _a = 1;
  const e = Bn(), t = Oo();
  return Sr = class extends t {
    constructor() {
      super(), this.name = "URGNA2012", this.createMessageDigest = () => new e("sha1");
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(a, h, n) {
      return h.termType !== "BlankNode" ? h : n === "graph" ? {
        termType: "BlankNode",
        value: "_:g"
      } : {
        termType: "BlankNode",
        value: h.value === a ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(a) {
      return a.predicate.value;
    }
    // helper for creating hash to related blank nodes map
    createHashToRelated(a, h) {
      const n = /* @__PURE__ */ new Map(), r = this.blankNodeInfo.get(a).quads;
      for (const o of r) {
        let c, m;
        if (o.subject.termType === "BlankNode" && o.subject.value !== a)
          m = o.subject.value, c = "p";
        else if (o.object.termType === "BlankNode" && o.object.value !== a)
          m = o.object.value, c = "r";
        else
          continue;
        const v = this.hashRelatedBlankNode(m, o, h, c), w = n.get(v);
        w ? w.push(m) : n.set(v, [m]);
      }
      return n;
    }
  }, Sr;
}
const xu = {}, Eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xu
}, Symbol.toStringTag, { value: "Module" })), Ru = /* @__PURE__ */ xc(Eu);
var $a;
function ju() {
  return $a || ($a = 1, (function(e) {
    const t = No(), i = Su(), a = Oo(), h = Iu();
    let n;
    try {
      n = Ru;
    } catch {
    }
    function r(o) {
      return Array.isArray(o) ? o : e.NQuads.legacyDatasetToQuads(o);
    }
    e.NQuads = yi(), e.IdentifierIssuer = mi(), e._rdfCanonizeNative = function(o) {
      return o && (n = o), n;
    }, e.canonize = async function(o, c) {
      const m = r(o);
      if (c.useNative) {
        if (!n)
          throw new Error("rdf-canonize-native not available");
        if (c.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return new Promise((v, w) => n.canonize(m, c, (u, f) => u ? w(u) : v(f)));
      }
      if (c.algorithm === "URDNA2015")
        return new t(c).main(m);
      if (c.algorithm === "URGNA2012") {
        if (c.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "URGNA2012".'
          );
        return new i(c).main(m);
      }
      throw "algorithm" in c ? new Error(
        "Invalid RDF Dataset Canonicalization algorithm: " + c.algorithm
      ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
    }, e._canonizeSync = function(o, c) {
      const m = r(o);
      if (c.useNative) {
        if (!n)
          throw new Error("rdf-canonize-native not available");
        if (c.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return n.canonizeSync(m, c);
      }
      if (c.algorithm === "URDNA2015")
        return new a(c).main(m);
      if (c.algorithm === "URGNA2012") {
        if (c.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "URGNA2012".'
          );
        return new h(c).main(m);
      }
      throw "algorithm" in c ? new Error(
        "Invalid RDF Dataset Canonicalization algorithm: " + c.algorithm
      ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
    };
  })(hr)), hr;
}
var Ir, Sa;
function gi() {
  return Sa || (Sa = 1, Ir = ju()), Ir;
}
var xr, Ia;
function ye() {
  if (Ia) return xr;
  Ia = 1;
  const e = {};
  return xr = e, e.isArray = Array.isArray, e.isBoolean = (t) => typeof t == "boolean" || Object.prototype.toString.call(t) === "[object Boolean]", e.isDouble = (t) => e.isNumber(t) && (String(t).indexOf(".") !== -1 || Math.abs(t) >= 1e21), e.isEmptyObject = (t) => e.isObject(t) && Object.keys(t).length === 0, e.isNumber = (t) => typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]", e.isNumeric = (t) => !isNaN(parseFloat(t)) && isFinite(t), e.isObject = (t) => Object.prototype.toString.call(t) === "[object Object]", e.isString = (t) => typeof t == "string" || Object.prototype.toString.call(t) === "[object String]", e.isUndefined = (t) => typeof t > "u", xr;
}
var Er, xa;
function Ce() {
  if (xa) return Er;
  xa = 1;
  const e = ye(), t = {};
  return Er = t, t.isSubject = (i) => e.isObject(i) && !("@value" in i || "@set" in i || "@list" in i) ? Object.keys(i).length > 1 || !("@id" in i) : !1, t.isSubjectReference = (i) => (
    // Note: A value is a subject reference if all of these hold true:
    // 1. It is an Object.
    // 2. It has a single key: @id.
    e.isObject(i) && Object.keys(i).length === 1 && "@id" in i
  ), t.isValue = (i) => (
    // Note: A value is a @value if all of these hold true:
    // 1. It is an Object.
    // 2. It has the @value property.
    e.isObject(i) && "@value" in i
  ), t.isList = (i) => (
    // Note: A value is a @list if all of these hold true:
    // 1. It is an Object.
    // 2. It has the @list property.
    e.isObject(i) && "@list" in i
  ), t.isGraph = (i) => e.isObject(i) && "@graph" in i && Object.keys(i).filter((a) => a !== "@id" && a !== "@index").length === 1, t.isSimpleGraph = (i) => t.isGraph(i) && !("@id" in i), t.isBlankNode = (i) => {
    if (e.isObject(i)) {
      if ("@id" in i) {
        const a = i["@id"];
        return !e.isString(a) || a.indexOf("_:") === 0;
      }
      return Object.keys(i).length === 0 || !("@value" in i || "@set" in i || "@list" in i);
    }
    return !1;
  }, Er;
}
var Rr, Ea;
function $e() {
  return Ea || (Ea = 1, Rr = class extends Error {
    /**
     * Creates a JSON-LD Error.
     *
     * @param msg the error message.
     * @param type the error type.
     * @param details the error details.
     */
    constructor(t = "An unspecified JSON-LD error occurred.", i = "jsonld.Error", a = {}) {
      super(t), this.name = i, this.message = t, this.details = a;
    }
  }), Rr;
}
var jr, Ra;
function _e() {
  if (Ra) return jr;
  Ra = 1;
  const e = Ce(), t = ye(), i = gi().IdentifierIssuer, a = $e(), h = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/, n = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g, r = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/, o = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g, c = /^@[a-zA-Z]+$/, m = {
    headers: {
      accept: "application/ld+json, application/json"
    }
  }, v = {};
  jr = v, v.IdentifierIssuer = i, v.REGEX_BCP47 = h, v.REGEX_KEYWORD = c, v.clone = function(u) {
    if (u && typeof u == "object") {
      let f;
      if (t.isArray(u)) {
        f = [];
        for (let b = 0; b < u.length; ++b)
          f[b] = v.clone(u[b]);
      } else if (u instanceof Map) {
        f = /* @__PURE__ */ new Map();
        for (const [b, _] of u)
          f.set(b, v.clone(_));
      } else if (u instanceof Set) {
        f = /* @__PURE__ */ new Set();
        for (const b of u)
          f.add(v.clone(b));
      } else if (t.isObject(u)) {
        f = {};
        for (const b in u)
          f[b] = v.clone(u[b]);
      } else
        f = u.toString();
      return f;
    }
    return u;
  }, v.asArray = function(u) {
    return Array.isArray(u) ? u : [u];
  }, v.buildHeaders = (u = {}) => {
    if (Object.keys(u).some(
      (b) => b.toLowerCase() === "accept"
    ))
      throw new RangeError(
        'Accept header may not be specified; only "' + m.headers.accept + '" is supported.'
      );
    return Object.assign({ Accept: m.headers.accept }, u);
  }, v.parseLinkHeader = (u) => {
    const f = {}, b = u.match(n);
    for (let _ = 0; _ < b.length; ++_) {
      let y = b[_].match(r);
      if (!y)
        continue;
      const $ = { target: y[1] }, p = y[2];
      for (; y = o.exec(p); )
        $[y[1]] = y[2] === void 0 ? y[3] : y[2];
      const l = $.rel || "";
      Array.isArray(f[l]) ? f[l].push($) : f.hasOwnProperty(l) ? f[l] = [f[l], $] : f[l] = $;
    }
    return f;
  }, v.validateTypeValue = (u, f) => {
    if (!t.isString(u) && !(t.isArray(u) && u.every((b) => t.isString(b)))) {
      if (f && t.isObject(u))
        switch (Object.keys(u).length) {
          case 0:
            return;
          case 1:
            if ("@default" in u && v.asArray(u["@default"]).every((b) => t.isString(b)))
              return;
        }
      throw new a(
        'Invalid JSON-LD syntax; "@type" value must a string, an array of strings, an empty object, or a default object.',
        "jsonld.SyntaxError",
        { code: "invalid type value", value: u }
      );
    }
  }, v.hasProperty = (u, f) => {
    if (u.hasOwnProperty(f)) {
      const b = u[f];
      return !t.isArray(b) || b.length > 0;
    }
    return !1;
  }, v.hasValue = (u, f, b) => {
    if (v.hasProperty(u, f)) {
      let _ = u[f];
      const y = e.isList(_);
      if (t.isArray(_) || y) {
        y && (_ = _["@list"]);
        for (let $ = 0; $ < _.length; ++$)
          if (v.compareValues(b, _[$]))
            return !0;
      } else if (!t.isArray(b))
        return v.compareValues(b, _);
    }
    return !1;
  }, v.addValue = (u, f, b, _) => {
    if (_ = _ || {}, "propertyIsArray" in _ || (_.propertyIsArray = !1), "valueIsArray" in _ || (_.valueIsArray = !1), "allowDuplicate" in _ || (_.allowDuplicate = !0), "prependValue" in _ || (_.prependValue = !1), _.valueIsArray)
      u[f] = b;
    else if (t.isArray(b)) {
      b.length === 0 && _.propertyIsArray && !u.hasOwnProperty(f) && (u[f] = []), _.prependValue && (b = b.concat(u[f]), u[f] = []);
      for (let y = 0; y < b.length; ++y)
        v.addValue(u, f, b[y], _);
    } else if (u.hasOwnProperty(f)) {
      const y = !_.allowDuplicate && v.hasValue(u, f, b);
      !t.isArray(u[f]) && (!y || _.propertyIsArray) && (u[f] = [u[f]]), y || (_.prependValue ? u[f].unshift(b) : u[f].push(b));
    } else
      u[f] = _.propertyIsArray ? [b] : b;
  }, v.getValues = (u, f) => [].concat(u[f] || []), v.removeProperty = (u, f) => {
    delete u[f];
  }, v.removeValue = (u, f, b, _) => {
    _ = _ || {}, "propertyIsArray" in _ || (_.propertyIsArray = !1);
    const y = v.getValues(u, f).filter(
      ($) => !v.compareValues($, b)
    );
    y.length === 0 ? v.removeProperty(u, f) : y.length === 1 && !_.propertyIsArray ? u[f] = y[0] : u[f] = y;
  }, v.relabelBlankNodes = (u, f) => {
    f = f || {};
    const b = f.issuer || new i("_:b");
    return w(b, u);
  }, v.compareValues = (u, f) => u === f || e.isValue(u) && e.isValue(f) && u["@value"] === f["@value"] && u["@type"] === f["@type"] && u["@language"] === f["@language"] && u["@index"] === f["@index"] ? !0 : t.isObject(u) && "@id" in u && t.isObject(f) && "@id" in f ? u["@id"] === f["@id"] : !1, v.compareShortestLeast = (u, f) => u.length < f.length ? -1 : f.length < u.length ? 1 : u === f ? 0 : u < f ? -1 : 1;
  function w(u, f) {
    if (t.isArray(f))
      for (let b = 0; b < f.length; ++b)
        f[b] = w(u, f[b]);
    else if (e.isList(f))
      f["@list"] = w(u, f["@list"]);
    else if (t.isObject(f)) {
      e.isBlankNode(f) && (f["@id"] = u.getId(f["@id"]));
      const b = Object.keys(f).sort();
      for (let _ = 0; _ < b.length; ++_) {
        const y = b[_];
        y !== "@id" && (f[y] = w(u, f[y]));
      }
    }
    return f;
  }
  return jr;
}
var Nr, ja;
function vi() {
  if (ja) return Nr;
  ja = 1;
  const e = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", t = "http://www.w3.org/2001/XMLSchema#";
  return Nr = {
    // TODO: Deprecated and will be removed later. Use LINK_HEADER_CONTEXT.
    LINK_HEADER_REL: "http://www.w3.org/ns/json-ld#context",
    LINK_HEADER_CONTEXT: "http://www.w3.org/ns/json-ld#context",
    RDF: e,
    RDF_LIST: e + "List",
    RDF_FIRST: e + "first",
    RDF_REST: e + "rest",
    RDF_NIL: e + "nil",
    RDF_TYPE: e + "type",
    RDF_PLAIN_LITERAL: e + "PlainLiteral",
    RDF_XML_LITERAL: e + "XMLLiteral",
    RDF_JSON_LITERAL: e + "JSON",
    RDF_OBJECT: e + "object",
    RDF_LANGSTRING: e + "langString",
    XSD: t,
    XSD_BOOLEAN: t + "boolean",
    XSD_DOUBLE: t + "double",
    XSD_INTEGER: t + "integer",
    XSD_STRING: t + "string"
  }, Nr;
}
var Or, Na;
function Ao() {
  return Na || (Na = 1, Or = class {
    /**
     * Creates a simple queue for requesting documents.
     */
    constructor() {
      this._requests = {};
    }
    wrapLoader(t) {
      const i = this;
      return i._loader = t, function() {
        return i.add.apply(i, arguments);
      };
    }
    async add(t) {
      let i = this._requests[t];
      if (i)
        return Promise.resolve(i);
      i = this._requests[t] = this._loader(t);
      try {
        return await i;
      } finally {
        delete this._requests[t];
      }
    }
  }), Or;
}
var Ar, Oa;
function Je() {
  if (Oa) return Ar;
  Oa = 1;
  const e = ye(), t = {};
  Ar = t, t.parsers = {
    simple: {
      // RFC 3986 basic parts
      keys: [
        "href",
        "scheme",
        "authority",
        "path",
        "query",
        "fragment"
      ],
      /* eslint-disable-next-line max-len */
      regex: /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/
    },
    full: {
      keys: [
        "href",
        "protocol",
        "scheme",
        "authority",
        "auth",
        "user",
        "password",
        "hostname",
        "port",
        "path",
        "directory",
        "file",
        "query",
        "fragment"
      ],
      /* eslint-disable-next-line max-len */
      regex: /^(([a-zA-Z][a-zA-Z0-9+-.]*):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?(?:(((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
  }, t.parse = (a, h) => {
    const n = {}, r = t.parsers[h || "full"], o = r.regex.exec(a);
    let c = r.keys.length;
    for (; c--; )
      n[r.keys[c]] = o[c] === void 0 ? null : o[c];
    return (n.scheme === "https" && n.port === "443" || n.scheme === "http" && n.port === "80") && (n.href = n.href.replace(":" + n.port, ""), n.authority = n.authority.replace(":" + n.port, ""), n.port = null), n.normalizedPath = t.removeDotSegments(n.path), n;
  }, t.prependBase = (a, h) => {
    if (a === null || t.isAbsolute(h))
      return h;
    (!a || e.isString(a)) && (a = t.parse(a || ""));
    const n = t.parse(h), r = {
      protocol: a.protocol || ""
    };
    if (n.authority !== null)
      r.authority = n.authority, r.path = n.path, r.query = n.query;
    else if (r.authority = a.authority, n.path === "")
      r.path = a.path, n.query !== null ? r.query = n.query : r.query = a.query;
    else {
      if (n.path.indexOf("/") === 0)
        r.path = n.path;
      else {
        let c = a.path;
        c = c.substr(0, c.lastIndexOf("/") + 1), (c.length > 0 || a.authority) && c.substr(-1) !== "/" && (c += "/"), c += n.path, r.path = c;
      }
      r.query = n.query;
    }
    n.path !== "" && (r.path = t.removeDotSegments(r.path));
    let o = r.protocol;
    return r.authority !== null && (o += "//" + r.authority), o += r.path, r.query !== null && (o += "?" + r.query), n.fragment !== null && (o += "#" + n.fragment), o === "" && (o = "./"), o;
  }, t.removeBase = (a, h) => {
    if (a === null)
      return h;
    (!a || e.isString(a)) && (a = t.parse(a || ""));
    let n = "";
    if (a.href !== "" ? n += (a.protocol || "") + "//" + (a.authority || "") : h.indexOf("//") && (n += "//"), h.indexOf(n) !== 0)
      return h;
    const r = t.parse(h.substr(n.length)), o = a.normalizedPath.split("/"), c = r.normalizedPath.split("/"), m = r.fragment || r.query ? 0 : 1;
    for (; o.length > 0 && c.length > m && o[0] === c[0]; )
      o.shift(), c.shift();
    let v = "";
    if (o.length > 0) {
      o.pop();
      for (let w = 0; w < o.length; ++w)
        v += "../";
    }
    return v += c.join("/"), r.query !== null && (v += "?" + r.query), r.fragment !== null && (v += "#" + r.fragment), v === "" && (v = "./"), v;
  }, t.removeDotSegments = (a) => {
    if (a.length === 0)
      return "";
    const h = a.split("/"), n = [];
    for (; h.length > 0; ) {
      const r = h.shift(), o = h.length === 0;
      if (r === ".") {
        o && n.push("");
        continue;
      }
      if (r === "..") {
        n.pop(), o && n.push("");
        continue;
      }
      n.push(r);
    }
    return a[0] === "/" && n.length > 0 && n[0] !== "" && n.unshift(""), n.length === 1 && n[0] === "" ? "/" : n.join("/");
  };
  const i = /^([A-Za-z][A-Za-z0-9+-.]*|_):[^\s]*$/;
  return t.isAbsolute = (a) => e.isString(a) && i.test(a), t.isRelative = (a) => e.isString(a), Ar;
}
var Pr, Aa;
function Nu() {
  if (Aa) return Pr;
  Aa = 1;
  const { parseLinkHeader: e, buildHeaders: t } = _e(), { LINK_HEADER_CONTEXT: i } = vi(), a = $e(), h = Ao(), { prependBase: n } = Je(), r = /(^|(\r\n))link:/i;
  Pr = ({
    secure: c,
    headers: m = {},
    xhr: v
  } = { headers: {} }) => {
    return m = t(m), new h().wrapLoader(u);
    async function u(f) {
      if (f.indexOf("http:") !== 0 && f.indexOf("https:") !== 0)
        throw new a(
          'URL could not be dereferenced; only "http" and "https" URLs are supported.',
          "jsonld.InvalidUrl",
          { code: "loading document failed", url: f }
        );
      if (c && f.indexOf("https") !== 0)
        throw new a(
          `URL could not be dereferenced; secure mode is enabled and the URL's scheme is not "https".`,
          "jsonld.InvalidUrl",
          { code: "loading document failed", url: f }
        );
      let b;
      try {
        b = await o(v, f, m);
      } catch (l) {
        throw new a(
          "URL could not be dereferenced, an error occurred.",
          "jsonld.LoadDocumentError",
          { code: "loading document failed", url: f, cause: l }
        );
      }
      if (b.status >= 400)
        throw new a(
          "URL could not be dereferenced: " + b.statusText,
          "jsonld.LoadDocumentError",
          {
            code: "loading document failed",
            url: f,
            httpStatusCode: b.status
          }
        );
      let _ = { contextUrl: null, documentUrl: f, document: b.response }, y = null;
      const $ = b.getResponseHeader("Content-Type");
      let p;
      if (r.test(b.getAllResponseHeaders()) && (p = b.getResponseHeader("Link")), p && $ !== "application/ld+json") {
        const l = e(p), s = l[i];
        if (Array.isArray(s))
          throw new a(
            "URL could not be dereferenced, it has more than one associated HTTP Link Header.",
            "jsonld.InvalidUrl",
            { code: "multiple context link headers", url: f }
          );
        s && (_.contextUrl = s.target), y = l.alternate, y && y.type == "application/ld+json" && !($ || "").match(/^application\/(\w*\+)?json$/) && (_ = await u(n(f, y.target)));
      }
      return _;
    }
  };
  function o(c, m, v) {
    c = c || XMLHttpRequest;
    const w = new c();
    return new Promise((u, f) => {
      w.onload = () => u(w), w.onerror = (b) => f(b), w.open("GET", m, !0);
      for (const b in v)
        w.setRequestHeader(b, v[b]);
      w.send();
    });
  }
  return Pr;
}
var qr, Pa;
function Ou() {
  if (Pa) return qr;
  Pa = 1;
  const e = Nu(), t = {};
  return qr = t, t.setupDocumentLoaders = function(i) {
    typeof XMLHttpRequest < "u" && (i.documentLoaders.xhr = e, i.useDocumentLoader("xhr"));
  }, t.setupGlobals = function(i) {
    typeof globalThis.JsonLdProcessor > "u" && Object.defineProperty(globalThis, "JsonLdProcessor", {
      writable: !0,
      enumerable: !1,
      configurable: !0,
      value: i.JsonLdProcessor
    });
  }, qr;
}
var Tr, qa;
function Au() {
  return qa || (qa = 1, Tr = function(e) {
    e.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next)
        yield t.value;
    };
  }), Tr;
}
var kr, Ta;
function Pu() {
  if (Ta) return kr;
  Ta = 1, kr = e, e.Node = h, e.create = e;
  function e(n) {
    var r = this;
    if (r instanceof e || (r = new e()), r.tail = null, r.head = null, r.length = 0, n && typeof n.forEach == "function")
      n.forEach(function(m) {
        r.push(m);
      });
    else if (arguments.length > 0)
      for (var o = 0, c = arguments.length; o < c; o++)
        r.push(arguments[o]);
    return r;
  }
  e.prototype.removeNode = function(n) {
    if (n.list !== this)
      throw new Error("removing node which does not belong to this list");
    var r = n.next, o = n.prev;
    return r && (r.prev = o), o && (o.next = r), n === this.head && (this.head = r), n === this.tail && (this.tail = o), n.list.length--, n.next = null, n.prev = null, n.list = null, r;
  }, e.prototype.unshiftNode = function(n) {
    if (n !== this.head) {
      n.list && n.list.removeNode(n);
      var r = this.head;
      n.list = this, n.next = r, r && (r.prev = n), this.head = n, this.tail || (this.tail = n), this.length++;
    }
  }, e.prototype.pushNode = function(n) {
    if (n !== this.tail) {
      n.list && n.list.removeNode(n);
      var r = this.tail;
      n.list = this, n.prev = r, r && (r.next = n), this.tail = n, this.head || (this.head = n), this.length++;
    }
  }, e.prototype.push = function() {
    for (var n = 0, r = arguments.length; n < r; n++)
      i(this, arguments[n]);
    return this.length;
  }, e.prototype.unshift = function() {
    for (var n = 0, r = arguments.length; n < r; n++)
      a(this, arguments[n]);
    return this.length;
  }, e.prototype.pop = function() {
    if (this.tail) {
      var n = this.tail.value;
      return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, n;
    }
  }, e.prototype.shift = function() {
    if (this.head) {
      var n = this.head.value;
      return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, n;
    }
  }, e.prototype.forEach = function(n, r) {
    r = r || this;
    for (var o = this.head, c = 0; o !== null; c++)
      n.call(r, o.value, c, this), o = o.next;
  }, e.prototype.forEachReverse = function(n, r) {
    r = r || this;
    for (var o = this.tail, c = this.length - 1; o !== null; c--)
      n.call(r, o.value, c, this), o = o.prev;
  }, e.prototype.get = function(n) {
    for (var r = 0, o = this.head; o !== null && r < n; r++)
      o = o.next;
    if (r === n && o !== null)
      return o.value;
  }, e.prototype.getReverse = function(n) {
    for (var r = 0, o = this.tail; o !== null && r < n; r++)
      o = o.prev;
    if (r === n && o !== null)
      return o.value;
  }, e.prototype.map = function(n, r) {
    r = r || this;
    for (var o = new e(), c = this.head; c !== null; )
      o.push(n.call(r, c.value, this)), c = c.next;
    return o;
  }, e.prototype.mapReverse = function(n, r) {
    r = r || this;
    for (var o = new e(), c = this.tail; c !== null; )
      o.push(n.call(r, c.value, this)), c = c.prev;
    return o;
  }, e.prototype.reduce = function(n, r) {
    var o, c = this.head;
    if (arguments.length > 1)
      o = r;
    else if (this.head)
      c = this.head.next, o = this.head.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var m = 0; c !== null; m++)
      o = n(o, c.value, m), c = c.next;
    return o;
  }, e.prototype.reduceReverse = function(n, r) {
    var o, c = this.tail;
    if (arguments.length > 1)
      o = r;
    else if (this.tail)
      c = this.tail.prev, o = this.tail.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var m = this.length - 1; c !== null; m--)
      o = n(o, c.value, m), c = c.prev;
    return o;
  }, e.prototype.toArray = function() {
    for (var n = new Array(this.length), r = 0, o = this.head; o !== null; r++)
      n[r] = o.value, o = o.next;
    return n;
  }, e.prototype.toArrayReverse = function() {
    for (var n = new Array(this.length), r = 0, o = this.tail; o !== null; r++)
      n[r] = o.value, o = o.prev;
    return n;
  }, e.prototype.slice = function(n, r) {
    r = r || this.length, r < 0 && (r += this.length), n = n || 0, n < 0 && (n += this.length);
    var o = new e();
    if (r < n || r < 0)
      return o;
    n < 0 && (n = 0), r > this.length && (r = this.length);
    for (var c = 0, m = this.head; m !== null && c < n; c++)
      m = m.next;
    for (; m !== null && c < r; c++, m = m.next)
      o.push(m.value);
    return o;
  }, e.prototype.sliceReverse = function(n, r) {
    r = r || this.length, r < 0 && (r += this.length), n = n || 0, n < 0 && (n += this.length);
    var o = new e();
    if (r < n || r < 0)
      return o;
    n < 0 && (n = 0), r > this.length && (r = this.length);
    for (var c = this.length, m = this.tail; m !== null && c > r; c--)
      m = m.prev;
    for (; m !== null && c > n; c--, m = m.prev)
      o.push(m.value);
    return o;
  }, e.prototype.splice = function(n, r, ...o) {
    n > this.length && (n = this.length - 1), n < 0 && (n = this.length + n);
    for (var c = 0, m = this.head; m !== null && c < n; c++)
      m = m.next;
    for (var v = [], c = 0; m && c < r; c++)
      v.push(m.value), m = this.removeNode(m);
    m === null && (m = this.tail), m !== this.head && m !== this.tail && (m = m.prev);
    for (var c = 0; c < o.length; c++)
      m = t(this, m, o[c]);
    return v;
  }, e.prototype.reverse = function() {
    for (var n = this.head, r = this.tail, o = n; o !== null; o = o.prev) {
      var c = o.prev;
      o.prev = o.next, o.next = c;
    }
    return this.head = r, this.tail = n, this;
  };
  function t(n, r, o) {
    var c = r === n.head ? new h(o, null, r, n) : new h(o, r, r.next, n);
    return c.next === null && (n.tail = c), c.prev === null && (n.head = c), n.length++, c;
  }
  function i(n, r) {
    n.tail = new h(r, n.tail, null, n), n.head || (n.head = n.tail), n.length++;
  }
  function a(n, r) {
    n.head = new h(r, null, n.head, n), n.tail || (n.tail = n.head), n.length++;
  }
  function h(n, r, o, c) {
    if (!(this instanceof h))
      return new h(n, r, o, c);
    this.list = c, this.value = n, r ? (r.next = this, this.prev = r) : this.prev = null, o ? (o.prev = this, this.next = o) : this.next = null;
  }
  try {
    Au()(e);
  } catch {
  }
  return kr;
}
var Dr, ka;
function Po() {
  if (ka) return Dr;
  ka = 1;
  const e = Pu(), t = Symbol("max"), i = Symbol("length"), a = Symbol("lengthCalculator"), h = Symbol("allowStale"), n = Symbol("maxAge"), r = Symbol("dispose"), o = Symbol("noDisposeOnSet"), c = Symbol("lruList"), m = Symbol("cache"), v = Symbol("updateAgeOnGet"), w = () => 1;
  class u {
    constructor(s) {
      if (typeof s == "number" && (s = { max: s }), s || (s = {}), s.max && (typeof s.max != "number" || s.max < 0))
        throw new TypeError("max must be a non-negative number");
      this[t] = s.max || 1 / 0;
      const d = s.length || w;
      if (this[a] = typeof d != "function" ? w : d, this[h] = s.stale || !1, s.maxAge && typeof s.maxAge != "number")
        throw new TypeError("maxAge must be a number");
      this[n] = s.maxAge || 0, this[r] = s.dispose, this[o] = s.noDisposeOnSet || !1, this[v] = s.updateAgeOnGet || !1, this.reset();
    }
    // resize the cache when the max changes.
    set max(s) {
      if (typeof s != "number" || s < 0)
        throw new TypeError("max must be a non-negative number");
      this[t] = s || 1 / 0, _(this);
    }
    get max() {
      return this[t];
    }
    set allowStale(s) {
      this[h] = !!s;
    }
    get allowStale() {
      return this[h];
    }
    set maxAge(s) {
      if (typeof s != "number")
        throw new TypeError("maxAge must be a non-negative number");
      this[n] = s, _(this);
    }
    get maxAge() {
      return this[n];
    }
    // resize the cache when the lengthCalculator changes.
    set lengthCalculator(s) {
      typeof s != "function" && (s = w), s !== this[a] && (this[a] = s, this[i] = 0, this[c].forEach((d) => {
        d.length = this[a](d.value, d.key), this[i] += d.length;
      })), _(this);
    }
    get lengthCalculator() {
      return this[a];
    }
    get length() {
      return this[i];
    }
    get itemCount() {
      return this[c].length;
    }
    rforEach(s, d) {
      d = d || this;
      for (let g = this[c].tail; g !== null; ) {
        const I = g.prev;
        p(this, s, g, d), g = I;
      }
    }
    forEach(s, d) {
      d = d || this;
      for (let g = this[c].head; g !== null; ) {
        const I = g.next;
        p(this, s, g, d), g = I;
      }
    }
    keys() {
      return this[c].toArray().map((s) => s.key);
    }
    values() {
      return this[c].toArray().map((s) => s.value);
    }
    reset() {
      this[r] && this[c] && this[c].length && this[c].forEach((s) => this[r](s.key, s.value)), this[m] = /* @__PURE__ */ new Map(), this[c] = new e(), this[i] = 0;
    }
    dump() {
      return this[c].map((s) => b(this, s) ? !1 : {
        k: s.key,
        v: s.value,
        e: s.now + (s.maxAge || 0)
      }).toArray().filter((s) => s);
    }
    dumpLru() {
      return this[c];
    }
    set(s, d, g) {
      if (g = g || this[n], g && typeof g != "number")
        throw new TypeError("maxAge must be a number");
      const I = g ? Date.now() : 0, S = this[a](d, s);
      if (this[m].has(s)) {
        if (S > this[t])
          return y(this, this[m].get(s)), !1;
        const k = this[m].get(s).value;
        return this[r] && (this[o] || this[r](s, k.value)), k.now = I, k.maxAge = g, k.value = d, this[i] += S - k.length, k.length = S, this.get(s), _(this), !0;
      }
      const j = new $(s, d, S, I, g);
      return j.length > this[t] ? (this[r] && this[r](s, d), !1) : (this[i] += j.length, this[c].unshift(j), this[m].set(s, this[c].head), _(this), !0);
    }
    has(s) {
      if (!this[m].has(s)) return !1;
      const d = this[m].get(s).value;
      return !b(this, d);
    }
    get(s) {
      return f(this, s, !0);
    }
    peek(s) {
      return f(this, s, !1);
    }
    pop() {
      const s = this[c].tail;
      return s ? (y(this, s), s.value) : null;
    }
    del(s) {
      y(this, this[m].get(s));
    }
    load(s) {
      this.reset();
      const d = Date.now();
      for (let g = s.length - 1; g >= 0; g--) {
        const I = s[g], S = I.e || 0;
        if (S === 0)
          this.set(I.k, I.v);
        else {
          const j = S - d;
          j > 0 && this.set(I.k, I.v, j);
        }
      }
    }
    prune() {
      this[m].forEach((s, d) => f(this, d, !1));
    }
  }
  const f = (l, s, d) => {
    const g = l[m].get(s);
    if (g) {
      const I = g.value;
      if (b(l, I)) {
        if (y(l, g), !l[h])
          return;
      } else
        d && (l[v] && (g.value.now = Date.now()), l[c].unshiftNode(g));
      return I.value;
    }
  }, b = (l, s) => {
    if (!s || !s.maxAge && !l[n])
      return !1;
    const d = Date.now() - s.now;
    return s.maxAge ? d > s.maxAge : l[n] && d > l[n];
  }, _ = (l) => {
    if (l[i] > l[t])
      for (let s = l[c].tail; l[i] > l[t] && s !== null; ) {
        const d = s.prev;
        y(l, s), s = d;
      }
  }, y = (l, s) => {
    if (s) {
      const d = s.value;
      l[r] && l[r](d.key, d.value), l[i] -= d.length, l[m].delete(d.key), l[c].removeNode(s);
    }
  };
  class $ {
    constructor(s, d, g, I, S) {
      this.key = s, this.value = d, this.length = g, this.now = I, this.maxAge = S || 0;
    }
  }
  const p = (l, s, d, g) => {
    let I = d.value;
    b(l, I) && (y(l, d), l[h] || (I = void 0)), I && s.call(g, I.value, I.key, l);
  };
  return Dr = u, Dr;
}
var Mr, Da;
function qu() {
  if (Da) return Mr;
  Da = 1;
  const e = Po(), t = 10;
  return Mr = class {
    /**
     * Creates a ResolvedContext.
     *
     * @param document the context document.
     */
    constructor({ document: a }) {
      this.document = a, this.cache = new e({ max: t });
    }
    getProcessed(a) {
      return this.cache.get(a);
    }
    setProcessed(a, h) {
      this.cache.set(a, h);
    }
  }, Mr;
}
var Lr, Ma;
function Tu() {
  if (Ma) return Lr;
  Ma = 1;
  const {
    isArray: e,
    isObject: t,
    isString: i
  } = ye(), {
    asArray: a
  } = _e(), { prependBase: h } = Je(), n = $e(), r = qu(), o = 10;
  Lr = class {
    /**
     * Creates a ContextResolver.
     *
     * @param sharedCache a shared LRU cache with `get` and `set` APIs.
     */
    constructor({ sharedCache: w }) {
      this.perOpCache = /* @__PURE__ */ new Map(), this.sharedCache = w;
    }
    async resolve({
      activeCtx: w,
      context: u,
      documentLoader: f,
      base: b,
      cycles: _ = /* @__PURE__ */ new Set()
    }) {
      u && t(u) && u["@context"] && (u = u["@context"]), u = a(u);
      const y = [];
      for (const $ of u) {
        if (i($)) {
          let s = this._get($);
          s || (s = await this._resolveRemoteContext(
            { activeCtx: w, url: $, documentLoader: f, base: b, cycles: _ }
          )), e(s) ? y.push(...s) : y.push(s);
          continue;
        }
        if ($ === null) {
          y.push(new r({ document: null }));
          continue;
        }
        t($) || c(u);
        const p = JSON.stringify($);
        let l = this._get(p);
        l || (l = new r({ document: $ }), this._cacheResolvedContext({ key: p, resolved: l, tag: "static" })), y.push(l);
      }
      return y;
    }
    _get(w) {
      let u = this.perOpCache.get(w);
      if (!u) {
        const f = this.sharedCache.get(w);
        f && (u = f.get("static"), u && this.perOpCache.set(w, u));
      }
      return u;
    }
    _cacheResolvedContext({ key: w, resolved: u, tag: f }) {
      if (this.perOpCache.set(w, u), f !== void 0) {
        let b = this.sharedCache.get(w);
        b || (b = /* @__PURE__ */ new Map(), this.sharedCache.set(w, b)), b.set(f, u);
      }
      return u;
    }
    async _resolveRemoteContext({ activeCtx: w, url: u, documentLoader: f, base: b, cycles: _ }) {
      u = h(b, u);
      const { context: y, remoteDoc: $ } = await this._fetchContext(
        { activeCtx: w, url: u, documentLoader: f, cycles: _ }
      );
      b = $.documentUrl || u, m({ context: y, base: b });
      const p = await this.resolve(
        { activeCtx: w, context: y, documentLoader: f, base: b, cycles: _ }
      );
      return this._cacheResolvedContext({ key: u, resolved: p, tag: $.tag }), p;
    }
    async _fetchContext({ activeCtx: w, url: u, documentLoader: f, cycles: b }) {
      if (b.size > o)
        throw new n(
          "Maximum number of @context URLs exceeded.",
          "jsonld.ContextUrlError",
          {
            code: w.processingMode === "json-ld-1.0" ? "loading remote context failed" : "context overflow",
            max: o
          }
        );
      if (b.has(u))
        throw new n(
          "Cyclical @context URLs detected.",
          "jsonld.ContextUrlError",
          {
            code: w.processingMode === "json-ld-1.0" ? "recursive context inclusion" : "context overflow",
            url: u
          }
        );
      b.add(u);
      let _, y;
      try {
        y = await f(u), _ = y.document || null, i(_) && (_ = JSON.parse(_));
      } catch ($) {
        throw new n(
          `Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context. URL: "${u}".`,
          "jsonld.InvalidUrl",
          { code: "loading remote context failed", url: u, cause: $ }
        );
      }
      if (!t(_))
        throw new n(
          `Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object. URL: "${u}".`,
          "jsonld.InvalidUrl",
          { code: "invalid remote context", url: u }
        );
      return "@context" in _ ? _ = { "@context": _["@context"] } : _ = { "@context": {} }, y.contextUrl && (e(_["@context"]) || (_["@context"] = [_["@context"]]), _["@context"].push(y.contextUrl)), { context: _, remoteDoc: y };
    }
  };
  function c(v) {
    throw new n(
      "Invalid JSON-LD syntax; @context must be an object.",
      "jsonld.SyntaxError",
      {
        code: "invalid local context",
        context: v
      }
    );
  }
  function m({ context: v, base: w }) {
    if (!v)
      return;
    const u = v["@context"];
    if (i(u)) {
      v["@context"] = h(w, u);
      return;
    }
    if (e(u)) {
      for (let f = 0; f < u.length; ++f) {
        const b = u[f];
        if (i(b)) {
          u[f] = h(w, b);
          continue;
        }
        t(b) && m({ context: { "@context": b }, base: w });
      }
      return;
    }
    if (t(u))
      for (const f in u)
        m({ context: u[f], base: w });
  }
  return Lr;
}
var Cr, La;
function ku() {
  return La || (La = 1, Cr = gi().NQuads), Cr;
}
var Ur, Ca;
function Et() {
  if (Ca) return Ur;
  Ca = 1;
  const e = $e(), {
    isArray: t
  } = ye(), {
    asArray: i
  } = _e(), a = {};
  Ur = a, a.defaultEventHandler = null, a.setupEventHandler = ({ options: r = {} }) => {
    const o = [].concat(
      r.safe ? a.safeEventHandler : [],
      r.eventHandler ? i(r.eventHandler) : [],
      a.defaultEventHandler ? a.defaultEventHandler : []
    );
    return o.length === 0 ? null : o;
  }, a.handleEvent = ({
    event: r,
    options: o
  }) => {
    h({ event: r, handlers: o.eventHandler });
  };
  function h({ event: r, handlers: o }) {
    let c = !0;
    for (let m = 0; c && m < o.length; ++m) {
      c = !1;
      const v = o[m];
      if (t(v))
        c = h({ event: r, handlers: v });
      else if (typeof v == "function")
        v({ event: r, next: () => {
          c = !0;
        } });
      else if (typeof v == "object")
        r.code in v ? v[r.code]({ event: r, next: () => {
          c = !0;
        } }) : c = !0;
      else
        throw new e(
          "Invalid event handler.",
          "jsonld.InvalidEventHandler",
          { event: r }
        );
    }
    return c;
  }
  const n = /* @__PURE__ */ new Set([
    "empty object",
    "free-floating scalar",
    "invalid @language value",
    "invalid property",
    // NOTE: spec edge case
    "null @id value",
    "null @value value",
    "object with only @id",
    "object with only @language",
    "object with only @list",
    "object with only @value",
    "relative @id reference",
    "relative @type reference",
    "relative @vocab reference",
    "reserved @id value",
    "reserved @reverse value",
    "reserved term",
    // toRDF
    "blank node predicate",
    "relative graph reference",
    "relative object reference",
    "relative predicate reference",
    "relative subject reference",
    // toRDF / fromRDF
    "rdfDirection not set"
  ]);
  return a.safeEventHandler = function({ event: o, next: c }) {
    if (o.level === "warning" && n.has(o.code))
      throw new e(
        "Safe mode validation error.",
        "jsonld.ValidationError",
        { event: o }
      );
    c();
  }, a.logEventHandler = function({ event: o, next: c }) {
    console.log(`EVENT: ${o.message}`, { event: o }), c();
  }, a.logWarningEventHandler = function({ event: o, next: c }) {
    o.level === "warning" && console.warn(`WARNING: ${o.message}`, { event: o }), c();
  }, a.unhandledEventHandler = function({ event: o }) {
    throw new e(
      "No handler for event.",
      "jsonld.UnhandledEvent",
      { event: o }
    );
  }, a.setDefaultEventHandler = function({ eventHandler: r } = {}) {
    a.defaultEventHandler = r ? i(r) : null;
  }, Ur;
}
var Vr, Ua;
function We() {
  if (Ua) return Vr;
  Ua = 1;
  const e = _e(), t = $e(), {
    isArray: i,
    isObject: a,
    isString: h,
    isUndefined: n
  } = ye(), {
    isAbsolute: r,
    isRelative: o,
    prependBase: c
  } = Je(), {
    handleEvent: m
  } = Et(), {
    REGEX_BCP47: v,
    REGEX_KEYWORD: w,
    asArray: u,
    compareShortestLeast: f
  } = _e(), b = /* @__PURE__ */ new Map(), _ = 1e4, y = {};
  Vr = y, y.process = async ({
    activeCtx: l,
    localCtx: s,
    options: d,
    propagate: g = !0,
    overrideProtected: I = !1,
    cycles: S = /* @__PURE__ */ new Set()
  }) => {
    if (a(s) && "@context" in s && i(s["@context"]) && (s = s["@context"]), u(s).length === 0)
      return l;
    const O = [], k = [
      ({ event: B, next: A }) => {
        O.push(B), A();
      }
    ];
    d.eventHandler && k.push(d.eventHandler);
    const C = d;
    d = { ...d, eventHandler: k };
    const T = await d.contextResolver.resolve({
      activeCtx: l,
      context: s,
      documentLoader: d.documentLoader,
      base: d.base
    });
    a(T[0].document) && typeof T[0].document["@propagate"] == "boolean" && (g = T[0].document["@propagate"]);
    let P = l;
    !g && !P.previousContext && (P = P.clone(), P.previousContext = l);
    for (const B of T) {
      let { document: A } = B;
      if (l = P, A === null) {
        if (!I && Object.keys(l.protected).length !== 0)
          throw new t(
            "Tried to nullify a context with protected terms outside of a term definition.",
            "jsonld.SyntaxError",
            { code: "invalid context nullification" }
          );
        P = l = y.getInitialContext(d).clone();
        continue;
      }
      const H = B.getProcessed(l);
      if (H) {
        if (C.eventHandler)
          for (const G of H.events)
            m({ event: G, options: C });
        P = l = H.context;
        continue;
      }
      if (a(A) && "@context" in A && (A = A["@context"]), !a(A))
        throw new t(
          "Invalid JSON-LD syntax; @context must be an object.",
          "jsonld.SyntaxError",
          { code: "invalid local context", context: A }
        );
      P = P.clone();
      const F = /* @__PURE__ */ new Map();
      if ("@version" in A) {
        if (A["@version"] !== 1.1)
          throw new t(
            "Unsupported JSON-LD version: " + A["@version"],
            "jsonld.UnsupportedVersion",
            { code: "invalid @version value", context: A }
          );
        if (l.processingMode && l.processingMode === "json-ld-1.0")
          throw new t(
            "@version: " + A["@version"] + " not compatible with " + l.processingMode,
            "jsonld.ProcessingModeConflict",
            { code: "processing mode conflict", context: A }
          );
        P.processingMode = "json-ld-1.1", P["@version"] = A["@version"], F.set("@version", !0);
      }
      if (P.processingMode = P.processingMode || l.processingMode, "@base" in A) {
        let G = A["@base"];
        if (!(G === null || r(G))) if (o(G))
          G = c(P["@base"], G);
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.',
            "jsonld.SyntaxError",
            { code: "invalid base IRI", context: A }
          );
        P["@base"] = G, F.set("@base", !0);
      }
      if ("@vocab" in A) {
        const G = A["@vocab"];
        if (G === null)
          delete P["@vocab"];
        else if (h(G)) {
          if (!r(G) && y.processingMode(P, 1))
            throw new t(
              'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.',
              "jsonld.SyntaxError",
              { code: "invalid vocab mapping", context: A }
            );
          {
            const N = $(
              P,
              G,
              { vocab: !0, base: !0 },
              void 0,
              void 0,
              d
            );
            r(N) || d.eventHandler && m({
              event: {
                type: ["JsonLdEvent"],
                code: "relative @vocab reference",
                level: "warning",
                message: "Relative @vocab reference found.",
                details: {
                  vocab: N
                }
              },
              options: d
            }), P["@vocab"] = N;
          }
        } else throw new t(
          'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be a string or null.',
          "jsonld.SyntaxError",
          { code: "invalid vocab mapping", context: A }
        );
        F.set("@vocab", !0);
      }
      if ("@language" in A) {
        const G = A["@language"];
        if (G === null)
          delete P["@language"];
        else if (h(G))
          G.match(v) || d.eventHandler && m({
            event: {
              type: ["JsonLdEvent"],
              code: "invalid @language value",
              level: "warning",
              message: "@language value must be valid BCP47.",
              details: {
                language: G
              }
            },
            options: d
          }), P["@language"] = G.toLowerCase();
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@language" in a @context must be a string or null.',
            "jsonld.SyntaxError",
            { code: "invalid default language", context: A }
          );
        F.set("@language", !0);
      }
      if ("@direction" in A) {
        const G = A["@direction"];
        if (l.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @direction not compatible with " + l.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context member", context: A }
          );
        if (G === null)
          delete P["@direction"];
        else {
          if (G !== "ltr" && G !== "rtl")
            throw new t(
              'Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", context: A }
            );
          P["@direction"] = G;
        }
        F.set("@direction", !0);
      }
      if ("@propagate" in A) {
        const G = A["@propagate"];
        if (l.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @propagate not compatible with " + l.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: A }
          );
        if (typeof G != "boolean")
          throw new t(
            "Invalid JSON-LD syntax; @propagate value must be a boolean.",
            "jsonld.SyntaxError",
            { code: "invalid @propagate value", context: s }
          );
        F.set("@propagate", !0);
      }
      if ("@import" in A) {
        const G = A["@import"];
        if (l.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @import not compatible with " + l.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: A }
          );
        if (!h(G))
          throw new t(
            "Invalid JSON-LD syntax; @import must be a string.",
            "jsonld.SyntaxError",
            { code: "invalid @import value", context: s }
          );
        const N = await d.contextResolver.resolve({
          activeCtx: l,
          context: G,
          documentLoader: d.documentLoader,
          base: d.base
        });
        if (N.length !== 1)
          throw new t(
            "Invalid JSON-LD syntax; @import must reference a single context.",
            "jsonld.SyntaxError",
            { code: "invalid remote context", context: s }
          );
        const q = N[0].getProcessed(l);
        if (q)
          A = q;
        else {
          const U = N[0].document;
          if ("@import" in U)
            throw new t(
              "Invalid JSON-LD syntax: imported context must not include @import.",
              "jsonld.SyntaxError",
              { code: "invalid context entry", context: s }
            );
          for (const D in U)
            A.hasOwnProperty(D) || (A[D] = U[D]);
          N[0].setProcessed(l, A);
        }
        F.set("@import", !0);
      }
      F.set("@protected", A["@protected"] || !1);
      for (const G in A)
        if (y.createTermDefinition({
          activeCtx: P,
          localCtx: A,
          term: G,
          defined: F,
          options: d,
          overrideProtected: I
        }), a(A[G]) && "@context" in A[G]) {
          const N = A[G]["@context"];
          let q = !0;
          if (h(N)) {
            const U = c(d.base, N);
            S.has(U) ? q = !1 : S.add(U);
          }
          if (q)
            try {
              await y.process({
                activeCtx: P.clone(),
                localCtx: A[G]["@context"],
                overrideProtected: !0,
                options: d,
                cycles: S
              });
            } catch {
              throw new t(
                "Invalid JSON-LD syntax; invalid scoped context.",
                "jsonld.SyntaxError",
                {
                  code: "invalid scoped context",
                  context: A[G]["@context"],
                  term: G
                }
              );
            }
        }
      B.setProcessed(l, {
        context: P,
        events: O
      });
    }
    return P;
  }, y.createTermDefinition = ({
    activeCtx: l,
    localCtx: s,
    term: d,
    defined: g,
    options: I,
    overrideProtected: S = !1
  }) => {
    if (g.has(d)) {
      if (g.get(d))
        return;
      throw new t(
        "Cyclical context definition detected.",
        "jsonld.CyclicalContext",
        { code: "cyclic IRI mapping", context: s, term: d }
      );
    }
    g.set(d, !1);
    let j;
    if (s.hasOwnProperty(d) && (j = s[d]), d === "@type" && a(j) && (j["@container"] || "@set") === "@set" && y.processingMode(l, 1.1)) {
      const A = ["@container", "@id", "@protected"], H = Object.keys(j);
      if (H.length === 0 || H.some((F) => !A.includes(F)))
        throw new t(
          "Invalid JSON-LD syntax; keywords cannot be overridden.",
          "jsonld.SyntaxError",
          { code: "keyword redefinition", context: s, term: d }
        );
    } else {
      if (y.isKeyword(d))
        throw new t(
          "Invalid JSON-LD syntax; keywords cannot be overridden.",
          "jsonld.SyntaxError",
          { code: "keyword redefinition", context: s, term: d }
        );
      if (d.match(w)) {
        I.eventHandler && m({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved term",
            level: "warning",
            message: 'Terms beginning with "@" are reserved for future use and dropped.',
            details: {
              term: d
            }
          },
          options: I
        });
        return;
      } else if (d === "")
        throw new t(
          "Invalid JSON-LD syntax; a term cannot be an empty string.",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: s }
        );
    }
    const O = l.mappings.get(d);
    l.mappings.has(d) && l.mappings.delete(d);
    let k = !1;
    if ((h(j) || j === null) && (k = !0, j = { "@id": j }), !a(j))
      throw new t(
        "Invalid JSON-LD syntax; @context term values must be strings or objects.",
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: s }
      );
    const C = {};
    l.mappings.set(d, C), C.reverse = !1;
    const T = ["@container", "@id", "@language", "@reverse", "@type"];
    y.processingMode(l, 1.1) && T.push(
      "@context",
      "@direction",
      "@index",
      "@nest",
      "@prefix",
      "@protected"
    );
    for (const A in j)
      if (!T.includes(A))
        throw new t(
          "Invalid JSON-LD syntax; a term definition must not contain " + A,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: s }
        );
    const P = d.indexOf(":");
    if (C._termHasColon = P > 0, "@reverse" in j) {
      if ("@id" in j)
        throw new t(
          "Invalid JSON-LD syntax; a @reverse term definition must not contain @id.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: s }
        );
      if ("@nest" in j)
        throw new t(
          "Invalid JSON-LD syntax; a @reverse term definition must not contain @nest.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: s }
        );
      const A = j["@reverse"];
      if (!h(A))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: s }
        );
      if (A.match(w)) {
        I.eventHandler && m({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved @reverse value",
            level: "warning",
            message: '@reverse values beginning with "@" are reserved for future use and dropped.',
            details: {
              reverse: A
            }
          },
          options: I
        }), O ? l.mappings.set(d, O) : l.mappings.delete(d);
        return;
      }
      const H = $(
        l,
        A,
        { vocab: !0, base: !1 },
        s,
        g,
        I
      );
      if (!r(H))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: s }
        );
      C["@id"] = H, C.reverse = !0;
    } else if ("@id" in j) {
      let A = j["@id"];
      if (A && !h(A))
        throw new t(
          "Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: s }
        );
      if (A === null)
        C["@id"] = null;
      else if (!y.isKeyword(A) && A.match(w)) {
        I.eventHandler && m({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved @id value",
            level: "warning",
            message: '@id values beginning with "@" are reserved for future use and dropped.',
            details: {
              id: A
            }
          },
          options: I
        }), O ? l.mappings.set(d, O) : l.mappings.delete(d);
        return;
      } else if (A !== d) {
        if (A = $(
          l,
          A,
          { vocab: !0, base: !1 },
          s,
          g,
          I
        ), !r(A) && !y.isKeyword(A))
          throw new t(
            "Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: s }
          );
        if (d.match(/(?::[^:])|\//)) {
          const H = new Map(g).set(d, !0);
          if ($(
            l,
            d,
            { vocab: !0, base: !1 },
            s,
            H,
            I
          ) !== A)
            throw new t(
              "Invalid JSON-LD syntax; term in form of IRI must expand to definition.",
              "jsonld.SyntaxError",
              { code: "invalid IRI mapping", context: s }
            );
        }
        C["@id"] = A, C._prefix = k && !C._termHasColon && A.match(/[:\/\?#\[\]@]$/) !== null;
      }
    }
    if (!("@id" in C))
      if (C._termHasColon) {
        const A = d.substr(0, P);
        if (s.hasOwnProperty(A) && y.createTermDefinition({
          activeCtx: l,
          localCtx: s,
          term: A,
          defined: g,
          options: I
        }), l.mappings.has(A)) {
          const H = d.substr(P + 1);
          C["@id"] = l.mappings.get(A)["@id"] + H;
        } else
          C["@id"] = d;
      } else if (d === "@type")
        C["@id"] = d;
      else {
        if (!("@vocab" in l))
          throw new t(
            "Invalid JSON-LD syntax; @context terms must define an @id.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: s, term: d }
          );
        C["@id"] = l["@vocab"] + d;
      }
    if ((j["@protected"] === !0 || g.get("@protected") === !0 && j["@protected"] !== !1) && (l.protected[d] = !0, C.protected = !0), g.set(d, !0), "@type" in j) {
      let A = j["@type"];
      if (!h(A))
        throw new t(
          "Invalid JSON-LD syntax; an @context @type value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid type mapping", context: s }
        );
      if (A === "@json" || A === "@none") {
        if (y.processingMode(l, 1))
          throw new t(
            `Invalid JSON-LD syntax; an @context @type value must not be "${A}" in JSON-LD 1.0 mode.`,
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: s }
          );
      } else if (A !== "@id" && A !== "@vocab") {
        if (A = $(
          l,
          A,
          { vocab: !0, base: !1 },
          s,
          g,
          I
        ), !r(A))
          throw new t(
            "Invalid JSON-LD syntax; an @context @type value must be an absolute IRI.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: s }
          );
        if (A.indexOf("_:") === 0)
          throw new t(
            "Invalid JSON-LD syntax; an @context @type value must be an IRI, not a blank node identifier.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: s }
          );
      }
      C["@type"] = A;
    }
    if ("@container" in j) {
      const A = h(j["@container"]) ? [j["@container"]] : j["@container"] || [], H = ["@list", "@set", "@index", "@language"];
      let F = !0;
      const G = A.includes("@set");
      if (y.processingMode(l, 1.1)) {
        if (H.push("@graph", "@id", "@type"), A.includes("@list")) {
          if (A.length !== 1)
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @list must have no other values",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: s }
            );
        } else if (A.includes("@graph")) {
          if (A.some((N) => N !== "@graph" && N !== "@id" && N !== "@index" && N !== "@set"))
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: s }
            );
        } else
          F &= A.length <= (G ? 2 : 1);
        if (A.includes("@type") && (C["@type"] = C["@type"] || "@id", !["@id", "@vocab"].includes(C["@type"])))
          throw new t(
            "Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: s }
          );
      } else
        F &= !i(j["@container"]), F &= A.length <= 1;
      if (F &= A.every((N) => H.includes(N)), F &= !(G && A.includes("@list")), !F)
        throw new t(
          "Invalid JSON-LD syntax; @context @container value must be one of the following: " + H.join(", "),
          "jsonld.SyntaxError",
          { code: "invalid container mapping", context: s }
        );
      if (C.reverse && !A.every((N) => ["@index", "@set"].includes(N)))
        throw new t(
          "Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: s }
        );
      C["@container"] = A;
    }
    if ("@index" in j) {
      if (!("@container" in j) || !C["@container"].includes("@index"))
        throw new t(
          `Invalid JSON-LD syntax; @index without @index in @container: "${j["@index"]}" on term "${d}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: s }
        );
      if (!h(j["@index"]) || j["@index"].indexOf("@") === 0)
        throw new t(
          `Invalid JSON-LD syntax; @index must expand to an IRI: "${j["@index"]}" on term "${d}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: s }
        );
      C["@index"] = j["@index"];
    }
    if ("@context" in j && (C["@context"] = j["@context"]), "@language" in j && !("@type" in j)) {
      let A = j["@language"];
      if (A !== null && !h(A))
        throw new t(
          "Invalid JSON-LD syntax; @context @language value must be a string or null.",
          "jsonld.SyntaxError",
          { code: "invalid language mapping", context: s }
        );
      A !== null && (A = A.toLowerCase()), C["@language"] = A;
    }
    if ("@prefix" in j) {
      if (d.match(/:|\//))
        throw new t(
          "Invalid JSON-LD syntax; @context @prefix used on a compact IRI term",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: s }
        );
      if (y.isKeyword(C["@id"]))
        throw new t(
          "Invalid JSON-LD syntax; keywords may not be used as prefixes",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: s }
        );
      if (typeof j["@prefix"] == "boolean")
        C._prefix = j["@prefix"] === !0;
      else
        throw new t(
          "Invalid JSON-LD syntax; @context value for @prefix must be boolean",
          "jsonld.SyntaxError",
          { code: "invalid @prefix value", context: s }
        );
    }
    if ("@direction" in j) {
      const A = j["@direction"];
      if (A !== null && A !== "ltr" && A !== "rtl")
        throw new t(
          'Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".',
          "jsonld.SyntaxError",
          { code: "invalid base direction", context: s }
        );
      C["@direction"] = A;
    }
    if ("@nest" in j) {
      const A = j["@nest"];
      if (!h(A) || A !== "@nest" && A.indexOf("@") === 0)
        throw new t(
          "Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.",
          "jsonld.SyntaxError",
          { code: "invalid @nest value", context: s }
        );
      C["@nest"] = A;
    }
    // disallow aliasing @context and @preserve
    const B = C["@id"];
    if (B === "@context" || B === "@preserve")
      throw new t(
        "Invalid JSON-LD syntax; @context and @preserve cannot be aliased.",
        "jsonld.SyntaxError",
        { code: "invalid keyword alias", context: s }
      );
    if (O && O.protected && !S && (l.protected[d] = !0, C.protected = !0, !p(O, C)))
      throw new t(
        "Invalid JSON-LD syntax; tried to redefine a protected term.",
        "jsonld.SyntaxError",
        { code: "protected term redefinition", context: s, term: d }
      );
  }, y.expandIri = (l, s, d, g) => $(
    l,
    s,
    d,
    void 0,
    void 0,
    g
  );
  function $(l, s, d, g, I, S) {
    if (s === null || !h(s) || y.isKeyword(s))
      return s;
    if (s.match(w))
      return null;
    if (g && g.hasOwnProperty(s) && I.get(s) !== !0 && y.createTermDefinition({
      activeCtx: l,
      localCtx: g,
      term: s,
      defined: I,
      options: S
    }), d = d || {}, d.vocab) {
      const O = l.mappings.get(s);
      if (O === null)
        return null;
      if (a(O) && "@id" in O)
        return O["@id"];
    }
    const j = s.indexOf(":");
    if (j > 0) {
      const O = s.substr(0, j), k = s.substr(j + 1);
      if (O === "_" || k.indexOf("//") === 0)
        return s;
      g && g.hasOwnProperty(O) && y.createTermDefinition({
        activeCtx: l,
        localCtx: g,
        term: O,
        defined: I,
        options: S
      });
      const C = l.mappings.get(O);
      if (C && C._prefix)
        return C["@id"] + k;
      if (r(s))
        return s;
    }
    if (d.vocab && "@vocab" in l)
      s = l["@vocab"] + s;
    else if (d.base) {
      let O, k;
      "@base" in l ? l["@base"] ? (k = c(S.base, l["@base"]), O = c(k, s)) : (k = l["@base"], O = s) : (k = S.base, O = c(S.base, s)), s = O;
    }
    return s;
  }
  y.getInitialContext = (l) => {
    const s = JSON.stringify({ processingMode: l.processingMode }), d = b.get(s);
    if (d)
      return d;
    const g = {
      processingMode: l.processingMode,
      mappings: /* @__PURE__ */ new Map(),
      inverse: null,
      getInverse: I,
      clone: O,
      revertToPreviousContext: k,
      protected: {}
    };
    return b.size === _ && b.clear(), b.set(s, g), g;
    function I() {
      const C = this;
      if (C.inverse)
        return C.inverse;
      const T = C.inverse = {}, P = C.fastCurieMap = {}, B = {}, A = (C["@language"] || "@none").toLowerCase(), H = C["@direction"], F = C.mappings, G = [...F.keys()].sort(f);
      for (const N of G) {
        const q = F.get(N);
        if (q === null)
          continue;
        let U = q["@container"] || "@none";
        if (U = [].concat(U).sort().join(""), q["@id"] === null)
          continue;
        const D = u(q["@id"]);
        for (const E of D) {
          let x = T[E];
          const R = y.isKeyword(E);
          if (x)
            !R && !q._termHasColon && B[E].push(N);
          else if (T[E] = x = {}, !R && !q._termHasColon) {
            B[E] = [N];
            const M = { iri: E, terms: B[E] };
            E[0] in P ? P[E[0]].push(M) : P[E[0]] = [M];
          }
          if (x[U] || (x[U] = {
            "@language": {},
            "@type": {},
            "@any": {}
          }), x = x[U], j(N, x["@any"], "@none"), q.reverse)
            j(N, x["@type"], "@reverse");
          else if (q["@type"] === "@none")
            j(N, x["@any"], "@none"), j(N, x["@language"], "@none"), j(N, x["@type"], "@none");
          else if ("@type" in q)
            j(N, x["@type"], q["@type"]);
          else if ("@language" in q && "@direction" in q) {
            const M = q["@language"], J = q["@direction"];
            M && J ? j(
              N,
              x["@language"],
              `${M}_${J}`.toLowerCase()
            ) : M ? j(N, x["@language"], M.toLowerCase()) : J ? j(N, x["@language"], `_${J}`) : j(N, x["@language"], "@null");
          } else "@language" in q ? j(
            N,
            x["@language"],
            (q["@language"] || "@null").toLowerCase()
          ) : "@direction" in q ? q["@direction"] ? j(
            N,
            x["@language"],
            `_${q["@direction"]}`
          ) : j(N, x["@language"], "@none") : H ? (j(N, x["@language"], `_${H}`), j(N, x["@language"], "@none"), j(N, x["@type"], "@none")) : (j(N, x["@language"], A), j(N, x["@language"], "@none"), j(N, x["@type"], "@none"));
        }
      }
      for (const N in P)
        S(P, N, 1);
      return T;
    }
    function S(C, T, P) {
      const B = C[T], A = C[T] = {};
      let H, F;
      for (const G of B)
        H = G.iri, P >= H.length ? F = "" : F = H[P], F in A ? A[F].push(G) : A[F] = [G];
      for (const G in A)
        G !== "" && S(A, G, P + 1);
    }
    function j(C, T, P) {
      T.hasOwnProperty(P) || (T[P] = C);
    }
    function O() {
      const C = {};
      return C.mappings = e.clone(this.mappings), C.clone = this.clone, C.inverse = null, C.getInverse = this.getInverse, C.protected = e.clone(this.protected), this.previousContext && (C.previousContext = this.previousContext.clone()), C.revertToPreviousContext = this.revertToPreviousContext, "@base" in this && (C["@base"] = this["@base"]), "@language" in this && (C["@language"] = this["@language"]), "@vocab" in this && (C["@vocab"] = this["@vocab"]), C;
    }
    function k() {
      return this.previousContext ? this.previousContext.clone() : this;
    }
  }, y.getContextValue = (l, s, d) => {
    if (s === null)
      return d === "@context" ? void 0 : null;
    if (l.mappings.has(s)) {
      const g = l.mappings.get(s);
      if (n(d))
        return g;
      if (g.hasOwnProperty(d))
        return g[d];
    }
    if (d === "@language" && d in l || d === "@direction" && d in l)
      return l[d];
    if (d !== "@context")
      return null;
  }, y.processingMode = (l, s) => s.toString() >= "1.1" ? !l.processingMode || l.processingMode >= "json-ld-" + s.toString() : l.processingMode === "json-ld-1.0", y.isKeyword = (l) => {
    if (!h(l) || l[0] !== "@")
      return !1;
    switch (l) {
      case "@base":
      case "@container":
      case "@context":
      case "@default":
      case "@direction":
      case "@embed":
      case "@explicit":
      case "@graph":
      case "@id":
      case "@included":
      case "@index":
      case "@json":
      case "@language":
      case "@list":
      case "@nest":
      case "@none":
      case "@omitDefault":
      case "@prefix":
      case "@preserve":
      case "@protected":
      case "@requireAll":
      case "@reverse":
      case "@set":
      case "@type":
      case "@value":
      case "@version":
      case "@vocab":
        return !0;
    }
    return !1;
  };
  function p(l, s) {
    if (!(l && typeof l == "object") || !(s && typeof s == "object"))
      return l === s;
    const d = Array.isArray(l);
    if (d !== Array.isArray(s))
      return !1;
    if (d) {
      if (l.length !== s.length)
        return !1;
      for (let S = 0; S < l.length; ++S)
        if (!p(l[S], s[S]))
          return !1;
      return !0;
    }
    const g = Object.keys(l), I = Object.keys(s);
    if (g.length !== I.length)
      return !1;
    for (const S in l) {
      let j = l[S], O = s[S];
      if (S === "@container" && Array.isArray(j) && Array.isArray(O) && (j = j.slice().sort(), O = O.slice().sort()), !p(j, O))
        return !1;
    }
    return !0;
  }
  return Vr;
}
var zr, Va;
function Du() {
  if (Va) return zr;
  Va = 1;
  const e = $e(), {
    isArray: t,
    isObject: i,
    isEmptyObject: a,
    isString: h,
    isUndefined: n
  } = ye(), {
    isList: r,
    isValue: o,
    isGraph: c,
    isSubject: m
  } = Ce(), {
    expandIri: v,
    getContextValue: w,
    isKeyword: u,
    process: f,
    processingMode: b
  } = We(), {
    isAbsolute: _
  } = Je(), {
    REGEX_BCP47: y,
    REGEX_KEYWORD: $,
    addValue: p,
    asArray: l,
    getValues: s,
    validateTypeValue: d
  } = _e(), {
    handleEvent: g
  } = Et(), I = {};
  zr = I, I.expand = async ({
    activeCtx: T,
    activeProperty: P = null,
    element: B,
    options: A = {},
    insideList: H = !1,
    insideIndex: F = !1,
    typeScopedContext: G = null
  }) => {
    if (B == null)
      return null;
    if (P === "@default" && (A = Object.assign({}, A, { isFrame: !1 })), !t(B) && !i(B))
      return !H && (P === null || v(
        T,
        P,
        { vocab: !0 },
        A
      ) === "@graph") ? (A.eventHandler && g({
        event: {
          type: ["JsonLdEvent"],
          code: "free-floating scalar",
          level: "warning",
          message: "Dropping free-floating scalar not in a list.",
          details: {
            value: B
            //activeProperty
            //insideList
          }
        },
        options: A
      }), null) : O({ activeCtx: T, activeProperty: P, value: B, options: A });
    if (t(B)) {
      let M = [];
      const J = w(
        T,
        P,
        "@container"
      ) || [];
      H = H || J.includes("@list");
      for (let X = 0; X < B.length; ++X) {
        let K = await I.expand({
          activeCtx: T,
          activeProperty: P,
          element: B[X],
          options: A,
          insideIndex: F,
          typeScopedContext: G
        });
        H && t(K) && (K = { "@list": K }), K !== null && (t(K) ? M = M.concat(K) : M.push(K));
      }
      return M;
    }
    const N = v(
      T,
      P,
      { vocab: !0 },
      A
    ), q = w(T, P, "@context");
    G = G || (T.previousContext ? T : null);
    let U = Object.keys(B).sort(), D = !F;
    if (D && G && U.length <= 2 && !U.includes("@context"))
      for (const M of U) {
        const J = v(
          G,
          M,
          { vocab: !0 },
          A
        );
        if (J === "@value") {
          D = !1, T = G;
          break;
        }
        if (J === "@id" && U.length === 1) {
          D = !1;
          break;
        }
      }
    D && (T = T.revertToPreviousContext()), n(q) || (T = await f({
      activeCtx: T,
      localCtx: q,
      propagate: !0,
      overrideProtected: !0,
      options: A
    })), "@context" in B && (T = await f(
      { activeCtx: T, localCtx: B["@context"], options: A }
    )), G = T;
    let E = null;
    for (const M of U)
      if (v(T, M, { vocab: !0 }, A) === "@type") {
        E = E || M;
        const X = B[M], K = Array.isArray(X) ? X.length > 1 ? X.slice().sort() : X : [X];
        for (const L of K) {
          const V = w(G, L, "@context");
          n(V) || (T = await f({
            activeCtx: T,
            localCtx: V,
            options: A,
            propagate: !1
          }));
        }
      }
    let x = {};
    await j({
      activeCtx: T,
      activeProperty: P,
      expandedActiveProperty: N,
      element: B,
      expandedParent: x,
      options: A,
      insideList: H,
      typeKey: E,
      typeScopedContext: G
    }), U = Object.keys(x);
    let R = U.length;
    if ("@value" in x) {
      if ("@type" in x && ("@language" in x || "@direction" in x))
        throw new e(
          'Invalid JSON-LD syntax; an element containing "@value" may not contain both "@type" and either "@language" or "@direction".',
          "jsonld.SyntaxError",
          { code: "invalid value object", element: x }
        );
      let M = R - 1;
      if ("@type" in x && (M -= 1), "@index" in x && (M -= 1), "@language" in x && (M -= 1), "@direction" in x && (M -= 1), M !== 0)
        throw new e(
          'Invalid JSON-LD syntax; an element containing "@value" may only have an "@index" property and either "@type" or either or both "@language" or "@direction".',
          "jsonld.SyntaxError",
          { code: "invalid value object", element: x }
        );
      const J = x["@value"] === null ? [] : l(x["@value"]), X = s(x, "@type");
      if (!(b(T, 1.1) && X.includes("@json") && X.length === 1)) if (J.length === 0)
        A.eventHandler && g({
          event: {
            type: ["JsonLdEvent"],
            code: "null @value value",
            level: "warning",
            message: "Dropping null @value value.",
            details: {
              value: x
            }
          },
          options: A
        }), x = null;
      else {
        if (!J.every((K) => h(K) || a(K)) && "@language" in x)
          throw new e(
            "Invalid JSON-LD syntax; only strings may be language-tagged.",
            "jsonld.SyntaxError",
            { code: "invalid language-tagged value", element: x }
          );
        if (!X.every((K) => _(K) && !(h(K) && K.indexOf("_:") === 0) || a(K)))
          throw new e(
            'Invalid JSON-LD syntax; an element containing "@value" and "@type" must have an absolute IRI for the value of "@type".',
            "jsonld.SyntaxError",
            { code: "invalid typed value", element: x }
          );
      }
    } else if ("@type" in x && !t(x["@type"]))
      x["@type"] = [x["@type"]];
    else if ("@set" in x || "@list" in x) {
      if (R > 1 && !(R === 2 && "@index" in x))
        throw new e(
          'Invalid JSON-LD syntax; if an element has the property "@set" or "@list", then it can have at most one other property that is "@index".',
          "jsonld.SyntaxError",
          { code: "invalid set or list object", element: x }
        );
      "@set" in x && (x = x["@set"], U = Object.keys(x), R = U.length);
    } else R === 1 && "@language" in x && (A.eventHandler && g({
      event: {
        type: ["JsonLdEvent"],
        code: "object with only @language",
        level: "warning",
        message: "Dropping object with only @language.",
        details: {
          value: x
        }
      },
      options: A
    }), x = null);
    return i(x) && !A.keepFreeFloatingNodes && !H && (P === null || N === "@graph" || (w(T, P, "@container") || []).includes("@graph")) && (x = S({ value: x, count: R, options: A })), x;
  };
  function S({
    value: T,
    count: P,
    options: B
  }) {
    if (P === 0 || "@value" in T || "@list" in T || P === 1 && "@id" in T) {
      if (B.eventHandler) {
        let A, H;
        P === 0 ? (A = "empty object", H = "Dropping empty object.") : "@value" in T ? (A = "object with only @value", H = "Dropping object with only @value.") : "@list" in T ? (A = "object with only @list", H = "Dropping object with only @list.") : P === 1 && "@id" in T && (A = "object with only @id", H = "Dropping object with only @id."), g({
          event: {
            type: ["JsonLdEvent"],
            code: A,
            level: "warning",
            message: H,
            details: {
              value: T
            }
          },
          options: B
        });
      }
      return null;
    }
    return T;
  }
  async function j({
    activeCtx: T,
    activeProperty: P,
    expandedActiveProperty: B,
    element: A,
    expandedParent: H,
    options: F = {},
    insideList: G,
    typeKey: N,
    typeScopedContext: q
  }) {
    const U = Object.keys(A).sort(), D = [];
    let E;
    const x = A[N] && v(
      T,
      t(A[N]) ? A[N][0] : A[N],
      { vocab: !0 },
      {
        ...F,
        typeExpansion: !0
      }
    ) === "@json";
    for (const R of U) {
      let M = A[R], J;
      if (R === "@context")
        continue;
      const X = v(T, R, { vocab: !0 }, F);
      if (X === null || !(_(X) || u(X))) {
        F.eventHandler && g({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid property",
            level: "warning",
            message: "Dropping property that did not expand into an absolute IRI or keyword.",
            details: {
              property: R,
              expandedProperty: X
            }
          },
          options: F
        });
        continue;
      }
      if (u(X)) {
        if (B === "@reverse")
          throw new e(
            "Invalid JSON-LD syntax; a keyword cannot be used as a @reverse property.",
            "jsonld.SyntaxError",
            { code: "invalid reverse property map", value: M }
          );
        if (X in H && X !== "@included" && X !== "@type")
          throw new e(
            "Invalid JSON-LD syntax; colliding keywords detected.",
            "jsonld.SyntaxError",
            { code: "colliding keywords", keyword: X }
          );
      }
      if (X === "@id") {
        if (!h(M)) {
          if (!F.isFrame)
            throw new e(
              'Invalid JSON-LD syntax; "@id" value must a string.',
              "jsonld.SyntaxError",
              { code: "invalid @id value", value: M }
            );
          if (i(M)) {
            if (!a(M))
              throw new e(
                'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
                "jsonld.SyntaxError",
                { code: "invalid @id value", value: M }
              );
          } else if (t(M)) {
            if (!M.every((z) => h(z)))
              throw new e(
                'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
                "jsonld.SyntaxError",
                { code: "invalid @id value", value: M }
              );
          } else
            throw new e(
              'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
              "jsonld.SyntaxError",
              { code: "invalid @id value", value: M }
            );
        }
        p(
          H,
          "@id",
          l(M).map((z) => {
            if (h(z)) {
              const Z = v(T, z, { base: !0 }, F);
              return F.eventHandler && (Z === null ? g(z === null ? {
                event: {
                  type: ["JsonLdEvent"],
                  code: "null @id value",
                  level: "warning",
                  message: "Null @id found.",
                  details: {
                    id: z
                  }
                },
                options: F
              } : {
                event: {
                  type: ["JsonLdEvent"],
                  code: "reserved @id value",
                  level: "warning",
                  message: "Reserved @id found.",
                  details: {
                    id: z
                  }
                },
                options: F
              }) : _(Z) || g({
                event: {
                  type: ["JsonLdEvent"],
                  code: "relative @id reference",
                  level: "warning",
                  message: "Relative @id reference found.",
                  details: {
                    id: z,
                    expandedId: Z
                  }
                },
                options: F
              })), Z;
            }
            return z;
          }),
          { propertyIsArray: F.isFrame }
        );
        continue;
      }
      if (X === "@type") {
        i(M) && (M = Object.fromEntries(Object.entries(M).map(([z, Z]) => [
          v(q, z, { vocab: !0 }),
          l(Z).map(
            (W) => v(
              q,
              W,
              { base: !0, vocab: !0 },
              { ...F, typeExpansion: !0 }
            )
          )
        ]))), d(M, F.isFrame), p(
          H,
          "@type",
          l(M).map((z) => {
            if (h(z)) {
              const Z = v(
                q,
                z,
                { base: !0, vocab: !0 },
                { ...F, typeExpansion: !0 }
              );
              return Z !== "@json" && !_(Z) && F.eventHandler && g({
                event: {
                  type: ["JsonLdEvent"],
                  code: "relative @type reference",
                  level: "warning",
                  message: "Relative @type reference found.",
                  details: {
                    type: z
                  }
                },
                options: F
              }), Z;
            }
            return z;
          }),
          { propertyIsArray: !!F.isFrame }
        );
        continue;
      }
      if (X === "@included" && b(T, 1.1)) {
        const z = l(await I.expand({
          activeCtx: T,
          activeProperty: P,
          element: M,
          options: F
        }));
        if (!z.every((Z) => m(Z)))
          throw new e(
            "Invalid JSON-LD syntax; values of @included must expand to node objects.",
            "jsonld.SyntaxError",
            { code: "invalid @included value", value: M }
          );
        p(
          H,
          "@included",
          z,
          { propertyIsArray: !0 }
        );
        continue;
      }
      if (X === "@graph" && !(i(M) || t(M)))
        throw new e(
          'Invalid JSON-LD syntax; "@graph" value must not be an object or an array.',
          "jsonld.SyntaxError",
          { code: "invalid @graph value", value: M }
        );
      if (X === "@value") {
        E = M, x && b(T, 1.1) ? H["@value"] = M : p(
          H,
          "@value",
          M,
          { propertyIsArray: F.isFrame }
        );
        continue;
      }
      if (X === "@language") {
        if (M === null)
          continue;
        if (!h(M) && !F.isFrame)
          throw new e(
            'Invalid JSON-LD syntax; "@language" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid language-tagged string", value: M }
          );
        M = l(M).map((z) => h(z) ? z.toLowerCase() : z);
        for (const z of M)
          h(z) && !z.match(y) && F.eventHandler && g({
            event: {
              type: ["JsonLdEvent"],
              code: "invalid @language value",
              level: "warning",
              message: "@language value must be valid BCP47.",
              details: {
                language: z
              }
            },
            options: F
          });
        p(
          H,
          "@language",
          M,
          { propertyIsArray: F.isFrame }
        );
        continue;
      }
      if (X === "@direction") {
        if (!h(M) && !F.isFrame)
          throw new e(
            'Invalid JSON-LD syntax; "@direction" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid base direction", value: M }
          );
        M = l(M);
        for (const z of M)
          if (h(z) && z !== "ltr" && z !== "rtl")
            throw new e(
              'Invalid JSON-LD syntax; "@direction" must be "ltr" or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", value: M }
            );
        p(
          H,
          "@direction",
          M,
          { propertyIsArray: F.isFrame }
        );
        continue;
      }
      if (X === "@index") {
        if (!h(M))
          throw new e(
            'Invalid JSON-LD syntax; "@index" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid @index value", value: M }
          );
        p(H, "@index", M);
        continue;
      }
      if (X === "@reverse") {
        if (!i(M))
          throw new e(
            'Invalid JSON-LD syntax; "@reverse" value must be an object.',
            "jsonld.SyntaxError",
            { code: "invalid @reverse value", value: M }
          );
        if (J = await I.expand({
          activeCtx: T,
          activeProperty: "@reverse",
          element: M,
          options: F
        }), "@reverse" in J)
          for (const Z in J["@reverse"])
            p(
              H,
              Z,
              J["@reverse"][Z],
              { propertyIsArray: !0 }
            );
        let z = H["@reverse"] || null;
        for (const Z in J) {
          if (Z === "@reverse")
            continue;
          z === null && (z = H["@reverse"] = {}), p(z, Z, [], { propertyIsArray: !0 });
          const W = J[Z];
          for (let Y = 0; Y < W.length; ++Y) {
            const re = W[Y];
            if (o(re) || r(re))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: J }
              );
            p(z, Z, re, { propertyIsArray: !0 });
          }
        }
        continue;
      }
      if (X === "@nest") {
        D.push(R);
        continue;
      }
      let K = T;
      const L = w(T, R, "@context");
      n(L) || (K = await f({
        activeCtx: T,
        localCtx: L,
        propagate: !0,
        overrideProtected: !0,
        options: F
      }));
      const V = w(T, R, "@container") || [];
      if (V.includes("@language") && i(M)) {
        const z = w(K, R, "@direction");
        J = k(K, M, z, F);
      } else if (V.includes("@index") && i(M)) {
        const z = V.includes("@graph"), Z = w(K, R, "@index") || "@index", W = Z !== "@index" && v(T, Z, { vocab: !0 }, F);
        J = await C({
          activeCtx: K,
          options: F,
          activeProperty: R,
          value: M,
          asGraph: z,
          indexKey: Z,
          propertyIndex: W
        });
      } else if (V.includes("@id") && i(M)) {
        const z = V.includes("@graph");
        J = await C({
          activeCtx: K,
          options: F,
          activeProperty: R,
          value: M,
          asGraph: z,
          indexKey: "@id"
        });
      } else if (V.includes("@type") && i(M))
        J = await C({
          // since container is `@type`, revert type scoped context when expanding
          activeCtx: K.revertToPreviousContext(),
          options: F,
          activeProperty: R,
          value: M,
          asGraph: !1,
          indexKey: "@type"
        });
      else {
        const z = X === "@list";
        if (z || X === "@set") {
          let Z = P;
          z && B === "@graph" && (Z = null), J = await I.expand({
            activeCtx: K,
            activeProperty: Z,
            element: M,
            options: F,
            insideList: z
          });
        } else w(T, R, "@type") === "@json" ? J = {
          "@type": "@json",
          "@value": M
        } : J = await I.expand({
          activeCtx: K,
          activeProperty: R,
          element: M,
          options: F,
          insideList: !1
        });
      }
      if (!(J === null && X !== "@value")) {
        if (X !== "@list" && !r(J) && V.includes("@list") && (J = { "@list": l(J) }), V.includes("@graph") && !V.some((z) => z === "@id" || z === "@index")) {
          if (J = l(J), F.isFrame || (J = J.filter((z) => {
            const Z = Object.keys(z).length;
            return S({ value: z, count: Z, options: F }) !== null;
          })), J.length === 0)
            continue;
          J = J.map((z) => ({ "@graph": l(z) }));
        }
        if (K.mappings.has(R) && K.mappings.get(R).reverse) {
          const z = H["@reverse"] = H["@reverse"] || {};
          J = l(J);
          for (let Z = 0; Z < J.length; ++Z) {
            const W = J[Z];
            if (o(W) || r(W))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: J }
              );
            p(z, X, W, { propertyIsArray: !0 });
          }
          continue;
        }
        p(H, X, J, {
          propertyIsArray: !0
        });
      }
    }
    if ("@value" in H && !(H["@type"] === "@json" && b(T, 1.1))) {
      if ((i(E) || t(E)) && !F.isFrame)
        throw new e(
          'Invalid JSON-LD syntax; "@value" value must not be an object or an array.',
          "jsonld.SyntaxError",
          { code: "invalid value object value", value: E }
        );
    }
    for (const R of D) {
      const M = t(A[R]) ? A[R] : [A[R]];
      for (const J of M) {
        if (!i(J) || Object.keys(J).some((X) => v(T, X, { vocab: !0 }, F) === "@value"))
          throw new e(
            "Invalid JSON-LD syntax; nested value must be a node object.",
            "jsonld.SyntaxError",
            { code: "invalid @nest value", value: J }
          );
        await j({
          activeCtx: T,
          activeProperty: P,
          expandedActiveProperty: B,
          element: J,
          expandedParent: H,
          options: F,
          insideList: G,
          typeScopedContext: q,
          typeKey: N
        });
      }
    }
  }
  function O({ activeCtx: T, activeProperty: P, value: B, options: A }) {
    if (B == null)
      return null;
    const H = v(
      T,
      P,
      { vocab: !0 },
      A
    );
    if (H === "@id")
      return v(T, B, { base: !0 }, A);
    if (H === "@type")
      return v(
        T,
        B,
        { vocab: !0, base: !0 },
        { ...A, typeExpansion: !0 }
      );
    const F = w(T, P, "@type");
    if ((F === "@id" || H === "@graph") && h(B)) {
      const N = v(T, B, { base: !0 }, A);
      return N === null && B.match($) && A.eventHandler && g({
        event: {
          type: ["JsonLdEvent"],
          code: "reserved @id value",
          level: "warning",
          message: "Reserved @id found.",
          details: {
            id: P
          }
        },
        options: A
      }), { "@id": N };
    }
    if (F === "@vocab" && h(B))
      return {
        "@id": v(T, B, { vocab: !0, base: !0 }, A)
      };
    if (u(H))
      return B;
    const G = {};
    if (F && !["@id", "@vocab", "@none"].includes(F))
      G["@type"] = F;
    else if (h(B)) {
      const N = w(T, P, "@language");
      N !== null && (G["@language"] = N);
      const q = w(T, P, "@direction");
      q !== null && (G["@direction"] = q);
    }
    return ["boolean", "number", "string"].includes(typeof B) || (B = B.toString()), G["@value"] = B, G;
  }
  function k(T, P, B, A) {
    const H = [], F = Object.keys(P).sort();
    for (const G of F) {
      const N = v(T, G, { vocab: !0 }, A);
      let q = P[G];
      t(q) || (q = [q]);
      for (const U of q) {
        if (U === null)
          continue;
        if (!h(U))
          throw new e(
            "Invalid JSON-LD syntax; language map values must be strings.",
            "jsonld.SyntaxError",
            { code: "invalid language map value", languageMap: P }
          );
        const D = { "@value": U };
        N !== "@none" && (G.match(y) || A.eventHandler && g({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: G
            }
          },
          options: A
        }), D["@language"] = G.toLowerCase()), B && (D["@direction"] = B), H.push(D);
      }
    }
    return H;
  }
  async function C({
    activeCtx: T,
    options: P,
    activeProperty: B,
    value: A,
    asGraph: H,
    indexKey: F,
    propertyIndex: G
  }) {
    const N = [], q = Object.keys(A).sort(), U = F === "@type";
    for (let D of q) {
      if (U) {
        const R = w(T, D, "@context");
        n(R) || (T = await f({
          activeCtx: T,
          localCtx: R,
          propagate: !1,
          options: P
        }));
      }
      let E = A[D];
      t(E) || (E = [E]), E = await I.expand({
        activeCtx: T,
        activeProperty: B,
        element: E,
        options: P,
        insideList: !1,
        insideIndex: !0
      });
      let x;
      G ? D === "@none" ? x = "@none" : x = O(
        { activeCtx: T, activeProperty: F, value: D, options: P }
      ) : x = v(T, D, { vocab: !0 }, P), F === "@id" ? D = v(T, D, { base: !0 }, P) : U && (D = x);
      for (let R of E) {
        if (H && !c(R) && (R = { "@graph": [R] }), F === "@type")
          x === "@none" || (R["@type"] ? R["@type"] = [D].concat(R["@type"]) : R["@type"] = [D]);
        else {
          if (o(R) && !["@language", "@type", "@index"].includes(F))
            throw new e(
              `Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${F}".`,
              "jsonld.SyntaxError",
              { code: "invalid value object", value: R }
            );
          G ? x !== "@none" && p(R, G, x, {
            propertyIsArray: !0,
            prependValue: !0
          }) : x !== "@none" && !(F in R) && (R[F] = D);
        }
        N.push(R);
      }
    }
    return N;
  }
  return zr;
}
var Fr, za;
function Gn() {
  if (za) return Fr;
  za = 1;
  const { isKeyword: e } = We(), t = Ce(), i = ye(), a = _e(), h = $e(), n = {};
  return Fr = n, n.createMergedNodeMap = (r, o) => {
    o = o || {};
    const c = o.issuer || new a.IdentifierIssuer("_:b"), m = { "@default": {} };
    return n.createNodeMap(r, m, "@default", c), n.mergeNodeMaps(m);
  }, n.createNodeMap = (r, o, c, m, v, w) => {
    if (i.isArray(r)) {
      for (const _ of r)
        n.createNodeMap(_, o, c, m, void 0, w);
      return;
    }
    if (!i.isObject(r)) {
      w && w.push(r);
      return;
    }
    if (t.isValue(r)) {
      if ("@type" in r) {
        let _ = r["@type"];
        _.indexOf("_:") === 0 && (r["@type"] = _ = m.getId(_));
      }
      w && w.push(r);
      return;
    } else if (w && t.isList(r)) {
      const _ = [];
      n.createNodeMap(r["@list"], o, c, m, v, _), w.push({ "@list": _ });
      return;
    }
    if ("@type" in r) {
      const _ = r["@type"];
      for (const y of _)
        y.indexOf("_:") === 0 && m.getId(y);
    }
    i.isUndefined(v) && (v = t.isBlankNode(r) ? m.getId(r["@id"]) : r["@id"]), w && w.push({ "@id": v });
    const u = o[c], f = u[v] = u[v] || {};
    f["@id"] = v;
    const b = Object.keys(r).sort();
    for (let _ of b) {
      if (_ === "@id")
        continue;
      if (_ === "@reverse") {
        const $ = { "@id": v }, p = r["@reverse"];
        for (const l in p) {
          const s = p[l];
          for (const d of s) {
            let g = d["@id"];
            t.isBlankNode(d) && (g = m.getId(g)), n.createNodeMap(d, o, c, m, g), a.addValue(
              u[g],
              l,
              $,
              { propertyIsArray: !0, allowDuplicate: !1 }
            );
          }
        }
        continue;
      }
      if (_ === "@graph") {
        v in o || (o[v] = {}), n.createNodeMap(r[_], o, v, m);
        continue;
      }
      if (_ === "@included") {
        n.createNodeMap(r[_], o, c, m);
        continue;
      }
      if (_ !== "@type" && e(_)) {
        if (_ === "@index" && _ in f && (r[_] !== f[_] || r[_]["@id"] !== f[_]["@id"]))
          throw new h(
            "Invalid JSON-LD syntax; conflicting @index property detected.",
            "jsonld.SyntaxError",
            { code: "conflicting indexes", subject: f }
          );
        f[_] = r[_];
        continue;
      }
      const y = r[_];
      if (_.indexOf("_:") === 0 && (_ = m.getId(_)), y.length === 0) {
        a.addValue(f, _, [], { propertyIsArray: !0 });
        continue;
      }
      for (let $ of y)
        if (_ === "@type" && ($ = $.indexOf("_:") === 0 ? m.getId($) : $), t.isSubject($) || t.isSubjectReference($)) {
          if ("@id" in $ && !$["@id"])
            continue;
          const p = t.isBlankNode($) ? m.getId($["@id"]) : $["@id"];
          a.addValue(
            f,
            _,
            { "@id": p },
            { propertyIsArray: !0, allowDuplicate: !1 }
          ), n.createNodeMap($, o, c, m, p);
        } else if (t.isValue($))
          a.addValue(
            f,
            _,
            $,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        else if (t.isList($)) {
          const p = [];
          n.createNodeMap($["@list"], o, c, m, v, p), $ = { "@list": p }, a.addValue(
            f,
            _,
            $,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        } else
          n.createNodeMap($, o, c, m, v), a.addValue(
            f,
            _,
            $,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
    }
  }, n.mergeNodeMapGraphs = (r) => {
    const o = {};
    for (const c of Object.keys(r).sort())
      for (const m of Object.keys(r[c]).sort()) {
        const v = r[c][m];
        m in o || (o[m] = { "@id": m });
        const w = o[m];
        for (const u of Object.keys(v).sort())
          if (e(u) && u !== "@type")
            w[u] = a.clone(v[u]);
          else
            for (const f of v[u])
              a.addValue(
                w,
                u,
                a.clone(f),
                { propertyIsArray: !0, allowDuplicate: !1 }
              );
      }
    return o;
  }, n.mergeNodeMaps = (r) => {
    const o = r["@default"], c = Object.keys(r).sort();
    for (const m of c) {
      if (m === "@default")
        continue;
      const v = r[m];
      let w = o[m];
      w ? "@graph" in w || (w["@graph"] = []) : o[m] = w = {
        "@id": m,
        "@graph": []
      };
      const u = w["@graph"];
      for (const f of Object.keys(v).sort()) {
        const b = v[f];
        t.isSubjectReference(b) || u.push(b);
      }
    }
    return o;
  }, Fr;
}
var Hr, Fa;
function Mu() {
  if (Fa) return Hr;
  Fa = 1;
  const {
    isSubjectReference: e
  } = Ce(), {
    createMergedNodeMap: t
  } = Gn(), i = {};
  return Hr = i, i.flatten = (a) => {
    const h = t(a), n = [], r = Object.keys(h).sort();
    for (let o = 0; o < r.length; ++o) {
      const c = h[r[o]];
      e(c) || n.push(c);
    }
    return n;
  }, Hr;
}
var Jr, Ha;
function Lu() {
  if (Ha) return Jr;
  Ha = 1;
  const e = $e(), t = Ce(), i = ye(), {
    REGEX_BCP47: a,
    addValue: h
  } = _e(), {
    handleEvent: n
  } = Et(), {
    // RDF,
    RDF_LIST: r,
    RDF_FIRST: o,
    RDF_REST: c,
    RDF_NIL: m,
    RDF_TYPE: v,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: w,
    // RDF_OBJECT,
    // RDF_LANGSTRING,
    // XSD,
    XSD_BOOLEAN: u,
    XSD_DOUBLE: f,
    XSD_INTEGER: b,
    XSD_STRING: _
  } = vi(), y = {};
  Jr = y, y.fromRDF = async (p, l) => {
    const {
      useRdfType: s = !1,
      useNativeTypes: d = !1,
      rdfDirection: g = null
    } = l, I = {}, S = { "@default": I }, j = {};
    if (g) {
      if (g === "compound-literal")
        throw new e(
          "Unsupported rdfDirection value.",
          "jsonld.InvalidRdfDirection",
          { value: g }
        );
      if (g !== "i18n-datatype")
        throw new e(
          "Unknown rdfDirection value.",
          "jsonld.InvalidRdfDirection",
          { value: g }
        );
    }
    for (const C of p) {
      const T = C.graph.termType === "DefaultGraph" ? "@default" : C.graph.value;
      T in S || (S[T] = {}), T !== "@default" && !(T in I) && (I[T] = { "@id": T });
      const P = S[T], B = C.subject.value, A = C.predicate.value, H = C.object;
      B in P || (P[B] = { "@id": B });
      const F = P[B], G = H.termType.endsWith("Node");
      if (G && !(H.value in P) && (P[H.value] = { "@id": H.value }), A === v && !s && G) {
        h(F, "@type", H.value, { propertyIsArray: !0 });
        continue;
      }
      const N = $(H, d, g, l);
      if (h(F, A, N, { propertyIsArray: !0 }), G)
        if (H.value === m) {
          const q = P[H.value];
          "usages" in q || (q.usages = []), q.usages.push({
            node: F,
            property: A,
            value: N
          });
        } else H.value in j ? j[H.value] = !1 : j[H.value] = {
          node: F,
          property: A,
          value: N
        };
    }
    for (const C in S) {
      const T = S[C];
      if (!(m in T))
        continue;
      const P = T[m];
      if (P.usages) {
        for (let B of P.usages) {
          let A = B.node, H = B.property, F = B.value;
          const G = [], N = [];
          let q = Object.keys(A).length;
          for (; H === c && i.isObject(j[A["@id"]]) && i.isArray(A[o]) && A[o].length === 1 && i.isArray(A[c]) && A[c].length === 1 && (q === 3 || q === 4 && i.isArray(A["@type"]) && A["@type"].length === 1 && A["@type"][0] === r) && (G.push(A[o][0]), N.push(A["@id"]), B = j[A["@id"]], A = B.node, H = B.property, F = B.value, q = Object.keys(A).length, !!t.isBlankNode(A)); )
            ;
          delete F["@id"], F["@list"] = G.reverse();
          for (const U of N)
            delete T[U];
        }
        delete P.usages;
      }
    }
    const O = [], k = Object.keys(I).sort();
    for (const C of k) {
      const T = I[C];
      if (C in S) {
        const P = T["@graph"] = [], B = S[C], A = Object.keys(B).sort();
        for (const H of A) {
          const F = B[H];
          t.isSubjectReference(F) || P.push(F);
        }
      }
      t.isSubjectReference(T) || O.push(T);
    }
    return O;
  };
  function $(p, l, s, d) {
    if (p.termType.endsWith("Node"))
      return { "@id": p.value };
    const g = { "@value": p.value };
    if (p.language)
      p.language.match(a) || d.eventHandler && n({
        event: {
          type: ["JsonLdEvent"],
          code: "invalid @language value",
          level: "warning",
          message: "@language value must be valid BCP47.",
          details: {
            language: p.language
          }
        },
        options: d
      }), g["@language"] = p.language;
    else {
      let I = p.datatype.value;
      if (I || (I = _), I === w) {
        I = "@json";
        try {
          g["@value"] = JSON.parse(g["@value"]);
        } catch (S) {
          throw new e(
            "JSON literal could not be parsed.",
            "jsonld.InvalidJsonLiteral",
            { code: "invalid JSON literal", value: g["@value"], cause: S }
          );
        }
      }
      if (l) {
        if (I === u)
          g["@value"] === "true" ? g["@value"] = !0 : g["@value"] === "false" && (g["@value"] = !1);
        else if (i.isNumeric(g["@value"]))
          if (I === b) {
            const S = parseInt(g["@value"], 10);
            S.toFixed(0) === g["@value"] && (g["@value"] = S);
          } else I === f && (g["@value"] = parseFloat(g["@value"]));
        [u, b, f, _].includes(I) || (g["@type"] = I);
      } else if (s === "i18n-datatype" && I.startsWith("https://www.w3.org/ns/i18n#")) {
        const [, S, j] = I.split(/[#_]/);
        S.length > 0 && (g["@language"] = S, S.match(a) || d.eventHandler && n({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: S
            }
          },
          options: d
        })), g["@direction"] = j;
      } else I !== _ && (g["@type"] = I);
    }
    return g;
  }
  return Jr;
}
var Br, Ja;
function Cu() {
  return Ja || (Ja = 1, Br = function e(t) {
    return t === null || typeof t != "object" || t.toJSON != null ? JSON.stringify(t) : Array.isArray(t) ? "[" + t.reduce((i, a, h) => {
      const n = h === 0 ? "" : ",", r = a === void 0 || typeof a == "symbol" ? null : a;
      return i + n + e(r);
    }, "") + "]" : "{" + Object.keys(t).sort().reduce((i, a, h) => {
      if (t[a] === void 0 || typeof t[a] == "symbol")
        return i;
      const n = i.length === 0 ? "" : ",";
      return i + n + e(a) + ":" + e(t[a]);
    }, "") + "}";
  }), Br;
}
var Gr, Ba;
function Uu() {
  if (Ba) return Gr;
  Ba = 1;
  const { createNodeMap: e } = Gn(), { isKeyword: t } = We(), i = Ce(), a = Cu(), h = $e(), n = ye(), r = _e(), {
    handleEvent: o
  } = Et(), {
    // RDF,
    // RDF_LIST,
    RDF_FIRST: c,
    RDF_REST: m,
    RDF_NIL: v,
    RDF_TYPE: w,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: u,
    // RDF_OBJECT,
    RDF_LANGSTRING: f,
    // XSD,
    XSD_BOOLEAN: b,
    XSD_DOUBLE: _,
    XSD_INTEGER: y,
    XSD_STRING: $
  } = vi(), {
    isAbsolute: p
  } = Je(), l = {};
  Gr = l, l.toRDF = (I, S) => {
    const j = new r.IdentifierIssuer("_:b"), O = { "@default": {} };
    e(I, O, "@default", j);
    const k = [], C = Object.keys(O).sort();
    for (const T of C) {
      let P;
      if (T === "@default")
        P = { termType: "DefaultGraph", value: "" };
      else if (p(T))
        T.startsWith("_:") ? P = { termType: "BlankNode" } : P = { termType: "NamedNode" }, P.value = T;
      else {
        S.eventHandler && o({
          event: {
            type: ["JsonLdEvent"],
            code: "relative graph reference",
            level: "warning",
            message: "Relative graph reference found.",
            details: {
              graph: T
            }
          },
          options: S
        });
        continue;
      }
      s(k, O[T], P, j, S);
    }
    return k;
  };
  function s(I, S, j, O, k) {
    const C = Object.keys(S).sort();
    for (const T of C) {
      const P = S[T], B = Object.keys(P).sort();
      for (let A of B) {
        const H = P[A];
        if (A === "@type")
          A = w;
        else if (t(A))
          continue;
        for (const F of H) {
          const G = {
            termType: T.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: T
          };
          if (!p(T)) {
            k.eventHandler && o({
              event: {
                type: ["JsonLdEvent"],
                code: "relative subject reference",
                level: "warning",
                message: "Relative subject reference found.",
                details: {
                  subject: T
                }
              },
              options: k
            });
            continue;
          }
          const N = {
            termType: A.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: A
          };
          if (!p(A)) {
            k.eventHandler && o({
              event: {
                type: ["JsonLdEvent"],
                code: "relative predicate reference",
                level: "warning",
                message: "Relative predicate reference found.",
                details: {
                  predicate: A
                }
              },
              options: k
            });
            continue;
          }
          if (N.termType === "BlankNode" && !k.produceGeneralizedRdf) {
            k.eventHandler && o({
              event: {
                type: ["JsonLdEvent"],
                code: "blank node predicate",
                level: "warning",
                message: "Dropping blank node predicate.",
                details: {
                  // FIXME: add better issuer API to get reverse mapping
                  property: O.getOldIds().find((U) => O.getId(U) === A)
                }
              },
              options: k
            });
            continue;
          }
          const q = g(
            F,
            O,
            I,
            j,
            k.rdfDirection,
            k
          );
          q && I.push({
            subject: G,
            predicate: N,
            object: q,
            graph: j
          });
        }
      }
    }
  }
  function d(I, S, j, O, k, C) {
    const T = { termType: "NamedNode", value: c }, P = { termType: "NamedNode", value: m }, B = { termType: "NamedNode", value: v }, A = I.pop(), H = A ? { termType: "BlankNode", value: S.getId() } : B;
    let F = H;
    for (const G of I) {
      const N = g(
        G,
        S,
        j,
        O,
        k,
        C
      ), q = { termType: "BlankNode", value: S.getId() };
      j.push({
        subject: F,
        predicate: T,
        object: N,
        graph: O
      }), j.push({
        subject: F,
        predicate: P,
        object: q,
        graph: O
      }), F = q;
    }
    if (A) {
      const G = g(
        A,
        S,
        j,
        O,
        k,
        C
      );
      j.push({
        subject: F,
        predicate: T,
        object: G,
        graph: O
      }), j.push({
        subject: F,
        predicate: P,
        object: B,
        graph: O
      });
    }
    return H;
  }
  function g(I, S, j, O, k, C) {
    const T = {};
    if (i.isValue(I)) {
      T.termType = "Literal", T.value = void 0, T.datatype = {
        termType: "NamedNode"
      };
      let P = I["@value"];
      const B = I["@type"] || null;
      if (B === "@json")
        T.value = a(P), T.datatype.value = u;
      else if (n.isBoolean(P))
        T.value = P.toString(), T.datatype.value = B || b;
      else if (n.isDouble(P) || B === _)
        n.isDouble(P) || (P = parseFloat(P)), T.value = P.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), T.datatype.value = B || _;
      else if (n.isNumber(P))
        T.value = P.toFixed(0), T.datatype.value = B || y;
      else if ("@direction" in I && k === "i18n-datatype") {
        const A = (I["@language"] || "").toLowerCase(), H = I["@direction"], F = `https://www.w3.org/ns/i18n#${A}_${H}`;
        T.datatype.value = F, T.value = P;
      } else {
        if ("@direction" in I && k === "compound-literal")
          throw new h(
            "Unsupported rdfDirection value.",
            "jsonld.InvalidRdfDirection",
            { value: k }
          );
        if ("@direction" in I && k)
          throw new h(
            "Unknown rdfDirection value.",
            "jsonld.InvalidRdfDirection",
            { value: k }
          );
        "@language" in I ? ("@direction" in I && !k && C.eventHandler && o({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: T.value
            }
          },
          options: C
        }), T.value = P, T.datatype.value = B || f, T.language = I["@language"]) : ("@direction" in I && !k && C.eventHandler && o({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: T.value
            }
          },
          options: C
        }), T.value = P, T.datatype.value = B || $);
      }
    } else if (i.isList(I)) {
      const P = d(
        I["@list"],
        S,
        j,
        O,
        k,
        C
      );
      T.termType = P.termType, T.value = P.value;
    } else {
      const P = n.isObject(I) ? I["@id"] : I;
      T.termType = P.startsWith("_:") ? "BlankNode" : "NamedNode", T.value = P;
    }
    return T.termType === "NamedNode" && !p(T.value) ? (C.eventHandler && o({
      event: {
        type: ["JsonLdEvent"],
        code: "relative object reference",
        level: "warning",
        message: "Relative object reference found.",
        details: {
          object: T.value
        }
      },
      options: C
    }), null) : T;
  }
  return Gr;
}
var Kr, Ga;
function Vu() {
  if (Ga) return Kr;
  Ga = 1;
  const { isKeyword: e } = We(), t = Ce(), i = ye(), a = _e(), h = Je(), n = $e(), {
    createNodeMap: r,
    mergeNodeMapGraphs: o
  } = Gn(), c = {};
  Kr = c, c.frameMergedOrDefault = (s, d, g) => {
    const I = {
      options: g,
      embedded: !1,
      graph: "@default",
      graphMap: { "@default": {} },
      subjectStack: [],
      link: {},
      bnodeMap: {}
    }, S = new a.IdentifierIssuer("_:b");
    r(s, I.graphMap, "@default", S), g.merged && (I.graphMap["@merged"] = o(I.graphMap), I.graph = "@merged"), I.subjects = I.graphMap[I.graph];
    const j = [];
    c.frame(I, Object.keys(I.subjects).sort(), d, j), g.pruneBlankNodeIdentifiers && (g.bnodesToClear = Object.keys(I.bnodeMap).filter((O) => I.bnodeMap[O].length === 1));
    // remove @preserve from results
    return g.link = {}, y(j, g);
  }, c.frame = (s, d, g, I, S = null) => {
    u(g), g = g[0];
    const j = s.options, O = {
      embed: w(g, j, "embed"),
      explicit: w(g, j, "explicit"),
      requireAll: w(g, j, "requireAll")
    };
    s.link.hasOwnProperty(s.graph) || (s.link[s.graph] = {});
    const k = s.link[s.graph], C = f(s, d, g, O), T = Object.keys(C).sort();
    for (const P of T) {
      const B = C[P];
      if (S === null ? s.uniqueEmbeds = { [s.graph]: {} } : s.uniqueEmbeds[s.graph] = s.uniqueEmbeds[s.graph] || {}, O.embed === "@link" && P in k) {
        $(I, S, k[P]);
        continue;
      }
      const A = { "@id": P };
      if (P.indexOf("_:") === 0 && a.addValue(s.bnodeMap, P, A, { propertyIsArray: !0 }), k[P] = A, (O.embed === "@first" || O.embed === "@last") && s.is11)
        throw new n(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: g }
        );
      if (!(!s.embedded && s.uniqueEmbeds[s.graph].hasOwnProperty(P))) {
        if (s.embedded && (O.embed === "@never" || v(B, s.graph, s.subjectStack))) {
          $(I, S, A);
          continue;
        }
        if (s.embedded && (O.embed == "@first" || O.embed == "@once") && s.uniqueEmbeds[s.graph].hasOwnProperty(P)) {
          $(I, S, A);
          continue;
        }
        if (O.embed === "@last" && P in s.uniqueEmbeds[s.graph] && _(s, P), s.uniqueEmbeds[s.graph][P] = { parent: I, property: S }, s.subjectStack.push({ subject: B, graph: s.graph }), P in s.graphMap) {
          let H = !1, F = null;
          "@graph" in g ? (F = g["@graph"][0], H = !(P === "@merged" || P === "@default"), i.isObject(F) || (F = {})) : (H = s.graph !== "@merged", F = {}), H && c.frame(
            { ...s, graph: P, embedded: !1 },
            Object.keys(s.graphMap[P]).sort(),
            [F],
            A,
            "@graph"
          );
        }
        "@included" in g && c.frame(
          { ...s, embedded: !1 },
          d,
          g["@included"],
          A,
          "@included"
        );
        for (const H of Object.keys(B).sort()) {
          if (e(H)) {
            if (A[H] = a.clone(B[H]), H === "@type")
              for (const F of B["@type"])
                F.indexOf("_:") === 0 && a.addValue(
                  s.bnodeMap,
                  F,
                  A,
                  { propertyIsArray: !0 }
                );
            continue;
          }
          if (!(O.explicit && !(H in g)))
            for (const F of B[H]) {
              const G = H in g ? g[H] : m(O);
              if (t.isList(F)) {
                const N = g[H] && g[H][0] && g[H][0]["@list"] ? g[H][0]["@list"] : m(O), q = { "@list": [] };
                $(A, H, q);
                const U = F["@list"];
                for (const D of U)
                  t.isSubjectReference(D) ? c.frame(
                    { ...s, embedded: !0 },
                    [D["@id"]],
                    N,
                    q,
                    "@list"
                  ) : $(q, "@list", a.clone(D));
              } else t.isSubjectReference(F) ? c.frame(
                { ...s, embedded: !0 },
                [F["@id"]],
                G,
                A,
                H
              ) : l(G[0], F) && $(A, H, a.clone(F));
            }
        }
        for (const H of Object.keys(g).sort()) {
          if (H === "@type") {
            if (!i.isObject(g[H][0]) || !("@default" in g[H][0]))
              continue;
          } else if (e(H))
            continue;
          const F = g[H][0] || {};
          if (!w(F, j, "omitDefault") && !(H in A)) {
            let N = "@null";
            "@default" in F && (N = a.clone(F["@default"])), i.isArray(N) || (N = [N]), A[H] = [{ "@preserve": N }];
          }
        }
        for (const H of Object.keys(g["@reverse"] || {}).sort()) {
          const F = g["@reverse"][H];
          for (const G of Object.keys(s.subjects))
            a.getValues(s.subjects[G], H).some((q) => q["@id"] === P) && (A["@reverse"] = A["@reverse"] || {}, a.addValue(
              A["@reverse"],
              H,
              [],
              { propertyIsArray: !0 }
            ), c.frame(
              { ...s, embedded: !0 },
              [G],
              F,
              A["@reverse"][H],
              S
            ));
        }
        $(I, S, A), s.subjectStack.pop();
      }
    }
  }, c.cleanupNull = (s, d) => {
    if (i.isArray(s))
      return s.map((I) => c.cleanupNull(I, d)).filter((I) => I);
    if (s === "@null")
      return null;
    if (i.isObject(s)) {
      if ("@id" in s) {
        const g = s["@id"];
        if (d.link.hasOwnProperty(g)) {
          const I = d.link[g].indexOf(s);
          if (I !== -1)
            return d.link[g][I];
          d.link[g].push(s);
        } else
          d.link[g] = [s];
      }
      for (const g in s)
        s[g] = c.cleanupNull(s[g], d);
    }
    return s;
  };
  function m(s) {
    const d = {};
    for (const g in s)
      s[g] !== void 0 && (d["@" + g] = [s[g]]);
    return [d];
  }
  function v(s, d, g) {
    for (let I = g.length - 1; I >= 0; --I) {
      const S = g[I];
      if (S.graph === d && S.subject["@id"] === s["@id"])
        return !0;
    }
    return !1;
  }
  function w(s, d, g) {
    const I = "@" + g;
    let S = I in s ? s[I][0] : d[g];
    if (g === "embed") {
      if (S === !0)
        S = "@once";
      else if (S === !1)
        S = "@never";
      else if (S !== "@always" && S !== "@never" && S !== "@link" && S !== "@first" && S !== "@last" && S !== "@once")
        throw new n(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: s }
        );
    }
    return S;
  }
  function u(s) {
    if (!i.isArray(s) || s.length !== 1 || !i.isObject(s[0]))
      throw new n(
        "Invalid JSON-LD syntax; a JSON-LD frame must be a single object.",
        "jsonld.SyntaxError",
        { frame: s }
      );
    if ("@id" in s[0]) {
      for (const d of a.asArray(s[0]["@id"]))
        if (!(i.isObject(d) || h.isAbsolute(d)) || i.isString(d) && d.indexOf("_:") === 0)
          throw new n(
            "Invalid JSON-LD syntax; invalid @id in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: s }
          );
    }
    if ("@type" in s[0]) {
      for (const d of a.asArray(s[0]["@type"]))
        if (!(i.isObject(d) || h.isAbsolute(d) || d === "@json") || i.isString(d) && d.indexOf("_:") === 0)
          throw new n(
            "Invalid JSON-LD syntax; invalid @type in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: s }
          );
    }
  }
  function f(s, d, g, I) {
    const S = {};
    for (const j of d) {
      const O = s.graphMap[s.graph][j];
      b(s, O, g, I) && (S[j] = O);
    }
    return S;
  }
  function b(s, d, g, I) {
    let S = !0, j = !1;
    for (const O in g) {
      let k = !1;
      const C = a.getValues(d, O), T = a.getValues(g, O).length === 0;
      if (O === "@id") {
        if (i.isEmptyObject(g["@id"][0] || {}) ? k = !0 : g["@id"].length >= 0 && (k = g["@id"].includes(C[0])), !I.requireAll)
          return k;
      } else if (O === "@type") {
        if (S = !1, T) {
          if (C.length > 0)
            return !1;
          k = !0;
        } else if (g["@type"].length === 1 && i.isEmptyObject(g["@type"][0]))
          k = C.length > 0;
        else
          for (const P of g["@type"])
            i.isObject(P) && "@default" in P ? k = !0 : k = k || C.some((B) => B === P);
        if (!I.requireAll)
          return k;
      } else {
        if (e(O))
          continue;
        {
          const P = a.getValues(g, O)[0];
          let B = !1;
          if (P && (u([P]), B = "@default" in P), S = !1, C.length === 0 && B)
            continue;
          if (C.length > 0 && T)
            return !1;
          if (P === void 0) {
            if (C.length > 0)
              return !1;
            k = !0;
          } else if (t.isList(P)) {
            const A = P["@list"][0];
            if (t.isList(C[0])) {
              const H = C[0]["@list"];
              t.isValue(A) ? k = H.some((F) => l(A, F)) : (t.isSubject(A) || t.isSubjectReference(A)) && (k = H.some((F) => p(
                s,
                A,
                F,
                I
              )));
            }
          } else t.isValue(P) ? k = C.some((A) => l(P, A)) : t.isSubjectReference(P) ? k = C.some((A) => p(s, P, A, I)) : i.isObject(P) ? k = C.length > 0 : k = !1;
        }
      }
      if (!k && I.requireAll)
        return !1;
      j = j || k;
    }
    return S || j;
  }
  function _(s, d) {
    const g = s.uniqueEmbeds[s.graph], I = g[d], S = I.parent, j = I.property, O = { "@id": d };
    if (i.isArray(S)) {
      for (let C = 0; C < S.length; ++C)
        if (a.compareValues(S[C], O)) {
          S[C] = O;
          break;
        }
    } else {
      const C = i.isArray(S[j]);
      a.removeValue(S, j, O, { propertyIsArray: C }), a.addValue(S, j, O, { propertyIsArray: C });
    }
    const k = (C) => {
      const T = Object.keys(g);
      for (const P of T)
        P in g && i.isObject(g[P].parent) && g[P].parent["@id"] === C && (delete g[P], k(P));
    };
    k(d);
  }
  /**
   * Removes the @preserve keywords from expanded result of framing.
   *
   * @param input the framed, framed output.
   * @param options the framing options used.
   *
   * @return the resulting output.
   */
  function y(s, d) {
    if (i.isArray(s))
      return s.map((g) => y(g, d));
    if (i.isObject(s)) {
      // remove @preserve
      if ("@preserve" in s)
        return s["@preserve"][0];
      if (t.isValue(s))
        return s;
      if (t.isList(s))
        return s["@list"] = y(s["@list"], d), s;
      if ("@id" in s) {
        const g = s["@id"];
        if (d.link.hasOwnProperty(g)) {
          const I = d.link[g].indexOf(s);
          if (I !== -1)
            return d.link[g][I];
          d.link[g].push(s);
        } else
          d.link[g] = [s];
      }
      for (const g in s) {
        if (g === "@id" && d.bnodesToClear.includes(s[g])) {
          delete s["@id"];
          continue;
        }
        s[g] = y(s[g], d);
      }
    }
    return s;
  }
  function $(s, d, g) {
    i.isObject(s) ? a.addValue(s, d, g, { propertyIsArray: !0 }) : s.push(g);
  }
  function p(s, d, g, I) {
    if (!("@id" in g))
      return !1;
    const S = s.subjects[g["@id"]];
    return S && b(s, S, d, I);
  }
  function l(s, d) {
    const g = d["@value"], I = d["@type"], S = d["@language"], j = s["@value"] ? i.isArray(s["@value"]) ? s["@value"] : [s["@value"]] : [], O = s["@type"] ? i.isArray(s["@type"]) ? s["@type"] : [s["@type"]] : [], k = s["@language"] ? i.isArray(s["@language"]) ? s["@language"] : [s["@language"]] : [];
    return j.length === 0 && O.length === 0 && k.length === 0 ? !0 : !(!(j.includes(g) || i.isEmptyObject(j[0])) || !(!I && O.length === 0 || O.includes(I) || I && i.isEmptyObject(O[0])) || !(!S && k.length === 0 || k.includes(S) || S && i.isEmptyObject(k[0])));
  }
  return Kr;
}
var Zr, Ka;
function zu() {
  if (Ka) return Zr;
  Ka = 1;
  const e = $e(), {
    isArray: t,
    isObject: i,
    isString: a,
    isUndefined: h
  } = ye(), {
    isList: n,
    isValue: r,
    isGraph: o,
    isSimpleGraph: c,
    isSubjectReference: m
  } = Ce(), {
    expandIri: v,
    getContextValue: w,
    isKeyword: u,
    process: f,
    processingMode: b
  } = We(), {
    removeBase: _,
    prependBase: y
  } = Je(), {
    REGEX_KEYWORD: $,
    addValue: p,
    asArray: l,
    compareShortestLeast: s
  } = _e(), d = {};
  Zr = d, d.compact = async ({
    activeCtx: S,
    activeProperty: j = null,
    element: O,
    options: k = {}
  }) => {
    if (t(O)) {
      let T = [];
      for (let P = 0; P < O.length; ++P) {
        const B = await d.compact({
          activeCtx: S,
          activeProperty: j,
          element: O[P],
          options: k
        });
        B !== null && T.push(B);
      }
      return k.compactArrays && T.length === 1 && (w(
        S,
        j,
        "@container"
      ) || []).length === 0 && (T = T[0]), T;
    }
    const C = w(S, j, "@context");
    if (h(C) || (S = await f({
      activeCtx: S,
      localCtx: C,
      propagate: !0,
      overrideProtected: !0,
      options: k
    })), i(O)) {
      if (k.link && "@id" in O && k.link.hasOwnProperty(O["@id"])) {
        const N = k.link[O["@id"]];
        for (let q = 0; q < N.length; ++q)
          if (N[q].expanded === O)
            return N[q].compacted;
      }
      if (r(O) || m(O)) {
        const N = d.compactValue({ activeCtx: S, activeProperty: j, value: O, options: k });
        return k.link && m(O) && (k.link.hasOwnProperty(O["@id"]) || (k.link[O["@id"]] = []), k.link[O["@id"]].push({ expanded: O, compacted: N })), N;
      }
      if (n(O) && (w(
        S,
        j,
        "@container"
      ) || []).includes("@list"))
        return d.compact({
          activeCtx: S,
          activeProperty: j,
          element: O["@list"],
          options: k
        });
      const T = j === "@reverse", P = {}, B = S;
      !r(O) && !m(O) && (S = S.revertToPreviousContext());
      const A = w(B, j, "@context");
      h(A) || (S = await f({
        activeCtx: S,
        localCtx: A,
        propagate: !0,
        overrideProtected: !0,
        options: k
      })), k.link && "@id" in O && (k.link.hasOwnProperty(O["@id"]) || (k.link[O["@id"]] = []), k.link[O["@id"]].push({ expanded: O, compacted: P }));
      let H = O["@type"] || [];
      H.length > 1 && (H = Array.from(H).sort());
      const F = S;
      for (const N of H) {
        const q = d.compactIri(
          { activeCtx: F, iri: N, relativeTo: { vocab: !0 } }
        ), U = w(B, q, "@context");
        h(U) || (S = await f({
          activeCtx: S,
          localCtx: U,
          options: k,
          propagate: !1
        }));
      }
      const G = Object.keys(O).sort();
      for (const N of G) {
        const q = O[N];
        if (N === "@id") {
          let U = l(q).map(
            (E) => d.compactIri({
              activeCtx: S,
              iri: E,
              relativeTo: { vocab: !1 },
              base: k.base
            })
          );
          U.length === 1 && (U = U[0]);
          const D = d.compactIri(
            { activeCtx: S, iri: "@id", relativeTo: { vocab: !0 } }
          );
          P[D] = U;
          continue;
        }
        if (N === "@type") {
          let U = l(q).map(
            (M) => d.compactIri({
              activeCtx: B,
              iri: M,
              relativeTo: { vocab: !0 }
            })
          );
          U.length === 1 && (U = U[0]);
          const D = d.compactIri(
            { activeCtx: S, iri: "@type", relativeTo: { vocab: !0 } }
          ), R = (w(
            S,
            D,
            "@container"
          ) || []).includes("@set") && b(S, 1.1) || t(U) && q.length === 0;
          p(P, D, U, { propertyIsArray: R });
          continue;
        }
        if (N === "@reverse") {
          const U = await d.compact({
            activeCtx: S,
            activeProperty: "@reverse",
            element: q,
            options: k
          });
          for (const D in U)
            if (S.mappings.has(D) && S.mappings.get(D).reverse) {
              const E = U[D], R = (w(
                S,
                D,
                "@container"
              ) || []).includes("@set") || !k.compactArrays;
              p(
                P,
                D,
                E,
                { propertyIsArray: R }
              ), delete U[D];
            }
          if (Object.keys(U).length > 0) {
            const D = d.compactIri({
              activeCtx: S,
              iri: N,
              relativeTo: { vocab: !0 }
            });
            p(P, D, U);
          }
          continue;
        }
        if (N === "@preserve") {
          const U = await d.compact({
            activeCtx: S,
            activeProperty: j,
            element: q,
            options: k
          });
          t(U) && U.length === 0 || p(P, N, U);
          continue;
        }
        if (N === "@index") {
          if ((w(
            S,
            j,
            "@container"
          ) || []).includes("@index"))
            continue;
          const D = d.compactIri({
            activeCtx: S,
            iri: N,
            relativeTo: { vocab: !0 }
          });
          p(P, D, q);
          continue;
        }
        if (N !== "@graph" && N !== "@list" && N !== "@included" && u(N)) {
          const U = d.compactIri({
            activeCtx: S,
            iri: N,
            relativeTo: { vocab: !0 }
          });
          p(P, U, q);
          continue;
        }
        if (!t(q))
          throw new e(
            "JSON-LD expansion error; expanded value must be an array.",
            "jsonld.SyntaxError"
          );
        if (q.length === 0) {
          const U = d.compactIri({
            activeCtx: S,
            iri: N,
            value: q,
            relativeTo: { vocab: !0 },
            reverse: T
          }), D = S.mappings.has(U) ? S.mappings.get(U)["@nest"] : null;
          let E = P;
          D && (I(S, D, k), i(P[D]) || (P[D] = {}), E = P[D]), p(
            E,
            U,
            q,
            {
              propertyIsArray: !0
            }
          );
        }
        for (const U of q) {
          const D = d.compactIri({
            activeCtx: S,
            iri: N,
            value: U,
            relativeTo: { vocab: !0 },
            reverse: T
          }), E = S.mappings.has(D) ? S.mappings.get(D)["@nest"] : null;
          let x = P;
          E && (I(S, E, k), i(P[E]) || (P[E] = {}), x = P[E]);
          const R = w(
            S,
            D,
            "@container"
          ) || [], M = o(U), J = n(U);
          let X;
          J ? X = U["@list"] : M && (X = U["@graph"]);
          let K = await d.compact({
            activeCtx: S,
            activeProperty: D,
            element: J || M ? X : U,
            options: k
          });
          if (J)
            if (t(K) || (K = [K]), !R.includes("@list"))
              K = {
                [d.compactIri({
                  activeCtx: S,
                  iri: "@list",
                  relativeTo: { vocab: !0 }
                })]: K
              }, "@index" in U && (K[d.compactIri({
                activeCtx: S,
                iri: "@index",
                relativeTo: { vocab: !0 }
              })] = U["@index"]);
            else {
              p(x, D, K, {
                valueIsArray: !0,
                allowDuplicate: !0
              });
              continue;
            }
          if (M)
            if (R.includes("@graph") && (R.includes("@id") || R.includes("@index") && c(U))) {
              let L;
              x.hasOwnProperty(D) ? L = x[D] : x[D] = L = {};
              const V = (R.includes("@id") ? U["@id"] : U["@index"]) || d.compactIri({
                activeCtx: S,
                iri: "@none",
                relativeTo: { vocab: !0 }
              });
              p(
                L,
                V,
                K,
                {
                  propertyIsArray: !k.compactArrays || R.includes("@set")
                }
              );
            } else R.includes("@graph") && c(U) ? (t(K) && K.length > 1 && (K = { "@included": K }), p(
              x,
              D,
              K,
              {
                propertyIsArray: !k.compactArrays || R.includes("@set")
              }
            )) : (t(K) && K.length === 1 && k.compactArrays && (K = K[0]), K = {
              [d.compactIri({
                activeCtx: S,
                iri: "@graph",
                relativeTo: { vocab: !0 }
              })]: K
            }, "@id" in U && (K[d.compactIri({
              activeCtx: S,
              iri: "@id",
              relativeTo: { vocab: !0 }
            })] = U["@id"]), "@index" in U && (K[d.compactIri({
              activeCtx: S,
              iri: "@index",
              relativeTo: { vocab: !0 }
            })] = U["@index"]), p(
              x,
              D,
              K,
              {
                propertyIsArray: !k.compactArrays || R.includes("@set")
              }
            ));
          else if (R.includes("@language") || R.includes("@index") || R.includes("@id") || R.includes("@type")) {
            let L;
            x.hasOwnProperty(D) ? L = x[D] : x[D] = L = {};
            let V;
            if (R.includes("@language"))
              r(K) && (K = K["@value"]), V = U["@language"];
            else if (R.includes("@index")) {
              const z = w(
                S,
                D,
                "@index"
              ) || "@index", Z = d.compactIri(
                { activeCtx: S, iri: z, relativeTo: { vocab: !0 } }
              );
              if (z === "@index")
                V = U["@index"], delete K[Z];
              else {
                let W;
                if ([V, ...W] = l(K[z] || []), !a(V))
                  V = null;
                else
                  switch (W.length) {
                    case 0:
                      delete K[z];
                      break;
                    case 1:
                      K[z] = W[0];
                      break;
                    default:
                      K[z] = W;
                      break;
                  }
              }
            } else if (R.includes("@id")) {
              const z = d.compactIri({
                activeCtx: S,
                iri: "@id",
                relativeTo: { vocab: !0 }
              });
              V = K[z], delete K[z];
            } else if (R.includes("@type")) {
              const z = d.compactIri({
                activeCtx: S,
                iri: "@type",
                relativeTo: { vocab: !0 }
              });
              let Z;
              switch ([V, ...Z] = l(K[z] || []), Z.length) {
                case 0:
                  delete K[z];
                  break;
                case 1:
                  K[z] = Z[0];
                  break;
                default:
                  K[z] = Z;
                  break;
              }
              Object.keys(K).length === 1 && "@id" in U && (K = await d.compact({
                activeCtx: S,
                activeProperty: D,
                element: { "@id": U["@id"] },
                options: k
              }));
            }
            V || (V = d.compactIri({
              activeCtx: S,
              iri: "@none",
              relativeTo: { vocab: !0 }
            })), p(
              L,
              V,
              K,
              {
                propertyIsArray: R.includes("@set")
              }
            );
          } else {
            const L = !k.compactArrays || R.includes("@set") || R.includes("@list") || t(K) && K.length === 0 || N === "@list" || N === "@graph";
            p(
              x,
              D,
              K,
              { propertyIsArray: L }
            );
          }
        }
      }
      return P;
    }
    return O;
  }, d.compactIri = ({
    activeCtx: S,
    iri: j,
    value: O = null,
    relativeTo: k = { vocab: !1 },
    reverse: C = !1,
    base: T = null
  }) => {
    if (j === null)
      return j;
    S.isPropertyTermScoped && S.previousContext && (S = S.previousContext);
    const P = S.getInverse();
    if (u(j) && j in P && "@none" in P[j] && "@type" in P[j]["@none"] && "@none" in P[j]["@none"]["@type"])
      return P[j]["@none"]["@type"]["@none"];
    if (k.vocab && j in P) {
      const G = S["@language"] || "@none", N = [];
      i(O) && "@index" in O && !("@graph" in O) && N.push("@index", "@index@set"), i(O) && "@preserve" in O && (O = O["@preserve"][0]), o(O) ? ("@index" in O && N.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in O && N.push(
        "@graph@id",
        "@graph@id@set"
      ), N.push("@graph", "@graph@set", "@set"), "@index" in O || N.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in O || N.push("@graph@id", "@graph@id@set")) : i(O) && !r(O) && N.push("@id", "@id@set", "@type", "@set@type");
      let q = "@language", U = "@null";
      if (C)
        q = "@type", U = "@reverse", N.push("@set");
      else if (n(O)) {
        "@index" in O || N.push("@list");
        const E = O["@list"];
        if (E.length === 0)
          q = "@any", U = "@none";
        else {
          let x = E.length === 0 ? G : null, R = null;
          for (let M = 0; M < E.length; ++M) {
            const J = E[M];
            let X = "@none", K = "@none";
            if (r(J))
              if ("@direction" in J) {
                const L = (J["@language"] || "").toLowerCase(), V = J["@direction"];
                X = `${L}_${V}`;
              } else "@language" in J ? X = J["@language"].toLowerCase() : "@type" in J ? K = J["@type"] : X = "@null";
            else
              K = "@id";
            if (x === null ? x = X : X !== x && r(J) && (x = "@none"), R === null ? R = K : K !== R && (R = "@none"), x === "@none" && R === "@none")
              break;
          }
          x = x || "@none", R = R || "@none", R !== "@none" ? (q = "@type", U = R) : U = x;
        }
      } else {
        if (r(O))
          if ("@language" in O && !("@index" in O)) {
            N.push("@language", "@language@set"), U = O["@language"];
            const E = O["@direction"];
            E && (U = `${U}_${E}`);
          } else "@direction" in O && !("@index" in O) ? U = `_${O["@direction"]}` : "@type" in O && (q = "@type", U = O["@type"]);
        else
          q = "@type", U = "@id";
        N.push("@set");
      }
      N.push("@none"), i(O) && !("@index" in O) && N.push("@index", "@index@set"), r(O) && Object.keys(O).length === 1 && N.push("@language", "@language@set");
      const D = g(
        S,
        j,
        O,
        N,
        q,
        U
      );
      if (D !== null)
        return D;
    }
    if (k.vocab && "@vocab" in S) {
      const G = S["@vocab"];
      if (j.indexOf(G) === 0 && j !== G) {
        const N = j.substr(G.length);
        if (!S.mappings.has(N))
          return N;
      }
    }
    let B = null;
    const A = [];
    let H = S.fastCurieMap;
    const F = j.length - 1;
    for (let G = 0; G < F && j[G] in H; ++G)
      H = H[j[G]], "" in H && A.push(H[""][0]);
    for (let G = A.length - 1; G >= 0; --G) {
      const N = A[G], q = N.terms;
      for (const U of q) {
        const D = U + ":" + j.substr(N.iri.length);
        S.mappings.get(U)._prefix && (!S.mappings.has(D) || O === null && S.mappings.get(D)["@id"] === j) && (B === null || s(D, B) < 0) && (B = D);
      }
    }
    if (B !== null)
      return B;
    for (const [G, N] of S.mappings)
      if (N && N._prefix && j.startsWith(G + ":"))
        throw new e(
          `Absolute IRI "${j}" confused with prefix "${G}".`,
          "jsonld.SyntaxError",
          { code: "IRI confused with prefix", context: S }
        );
    if (!k.vocab)
      if ("@base" in S)
        if (S["@base"]) {
          const G = _(y(T, S["@base"]), j);
          return $.test(G) ? `./${G}` : G;
        } else
          return j;
      else
        return _(T, j);
    return j;
  }, d.compactValue = ({ activeCtx: S, activeProperty: j, value: O, options: k }) => {
    if (r(O)) {
      const B = w(S, j, "@type"), A = w(S, j, "@language"), H = w(S, j, "@direction"), F = w(S, j, "@container") || [], G = "@index" in O && !F.includes("@index");
      if (!G && B !== "@none" && (O["@type"] === B || "@language" in O && O["@language"] === A && "@direction" in O && O["@direction"] === H || "@language" in O && O["@language"] === A || "@direction" in O && O["@direction"] === H))
        return O["@value"];
      const N = Object.keys(O).length, q = N === 1 || N === 2 && "@index" in O && !G, U = "@language" in S, D = a(O["@value"]), E = S.mappings.has(j) && S.mappings.get(j)["@language"] === null;
      if (q && B !== "@none" && (!U || !D || E))
        return O["@value"];
      const x = {};
      return G && (x[d.compactIri({
        activeCtx: S,
        iri: "@index",
        relativeTo: { vocab: !0 }
      })] = O["@index"]), "@type" in O ? x[d.compactIri({
        activeCtx: S,
        iri: "@type",
        relativeTo: { vocab: !0 }
      })] = d.compactIri(
        { activeCtx: S, iri: O["@type"], relativeTo: { vocab: !0 } }
      ) : "@language" in O && (x[d.compactIri({
        activeCtx: S,
        iri: "@language",
        relativeTo: { vocab: !0 }
      })] = O["@language"]), "@direction" in O && (x[d.compactIri({
        activeCtx: S,
        iri: "@direction",
        relativeTo: { vocab: !0 }
      })] = O["@direction"]), x[d.compactIri({
        activeCtx: S,
        iri: "@value",
        relativeTo: { vocab: !0 }
      })] = O["@value"], x;
    }
    const C = v(
      S,
      j,
      { vocab: !0 },
      k
    ), T = w(S, j, "@type"), P = d.compactIri({
      activeCtx: S,
      iri: O["@id"],
      relativeTo: { vocab: T === "@vocab" },
      base: k.base
    });
    return T === "@id" || T === "@vocab" || C === "@graph" ? P : {
      [d.compactIri({
        activeCtx: S,
        iri: "@id",
        relativeTo: { vocab: !0 }
      })]: P
    };
  };
  function g(S, j, O, k, C, T) {
    T === null && (T = "@null");
    const P = [];
    if ((T === "@id" || T === "@reverse") && i(O) && "@id" in O) {
      T === "@reverse" && P.push("@reverse");
      const A = d.compactIri(
        { activeCtx: S, iri: O["@id"], relativeTo: { vocab: !0 } }
      );
      S.mappings.has(A) && S.mappings.get(A) && S.mappings.get(A)["@id"] === O["@id"] ? P.push.apply(P, ["@vocab", "@id"]) : P.push.apply(P, ["@id", "@vocab"]);
    } else {
      P.push(T);
      const A = P.find((H) => H.includes("_"));
      A && P.push(A.replace(/^[^_]+_/, "_"));
    }
    P.push("@none");
    const B = S.inverse[j];
    for (const A of k) {
      if (!(A in B))
        continue;
      const H = B[A][C];
      for (const F of P)
        if (F in H)
          return H[F];
    }
    return null;
  }
  function I(S, j, O) {
    if (v(S, j, { vocab: !0 }, O) !== "@nest")
      throw new e(
        "JSON-LD compact error; nested property must have an @nest value resolving to @nest.",
        "jsonld.SyntaxError",
        { code: "invalid @nest value" }
      );
  }
  return Zr;
}
var Xr, Za;
function Fu() {
  return Za || (Za = 1, Xr = (e) => {
    class t {
      toString() {
        return "[object JsonLdProcessor]";
      }
    }
    return Object.defineProperty(t, "prototype", {
      writable: !1,
      enumerable: !1
    }), Object.defineProperty(t.prototype, "constructor", {
      writable: !0,
      enumerable: !1,
      configurable: !0,
      value: t
    }), t.compact = function(i, a) {
      return arguments.length < 2 ? Promise.reject(
        new TypeError("Could not compact, too few arguments.")
      ) : e.compact(i, a);
    }, t.expand = function(i) {
      return arguments.length < 1 ? Promise.reject(
        new TypeError("Could not expand, too few arguments.")
      ) : e.expand(i);
    }, t.flatten = function(i) {
      return arguments.length < 1 ? Promise.reject(
        new TypeError("Could not flatten, too few arguments.")
      ) : e.flatten(i);
    }, t;
  }), Xr;
}
/**
 * A JavaScript implementation of the JSON-LD API.
 *
 * @author Dave Longley
 *
 * @license BSD 3-Clause License
 * Copyright (c) 2011-2022 Digital Bazaar, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 *
 * Neither the name of the Digital Bazaar, Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
 * TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var Wr, Xa;
function Hu() {
  if (Xa) return Wr;
  Xa = 1;
  const e = gi(), t = Ou(), i = _e(), a = Tu(), h = i.IdentifierIssuer, n = $e(), r = Po(), o = ku(), { expand: c } = Du(), { flatten: m } = Mu(), { fromRDF: v } = Lu(), { toRDF: w } = Uu(), {
    frameMergedOrDefault: u,
    cleanupNull: f
  } = Vu(), {
    isArray: b,
    isObject: _,
    isString: y
  } = ye(), {
    isSubjectReference: $
  } = Ce(), {
    expandIri: p,
    getInitialContext: l,
    process: s,
    processingMode: d
  } = We(), {
    compact: g,
    compactIri: I
  } = zu(), {
    createNodeMap: S,
    createMergedNodeMap: j,
    mergeNodeMaps: O
  } = Gn(), {
    logEventHandler: k,
    logWarningEventHandler: C,
    safeEventHandler: T,
    setDefaultEventHandler: P,
    setupEventHandler: B,
    strictEventHandler: A,
    unhandledEventHandler: H
  } = Et(), F = function(N) {
    const q = {}, D = new r({ max: 100 });
    N.compact = async function(x, R, M) {
      if (arguments.length < 2)
        throw new TypeError("Could not compact, too few arguments.");
      if (R === null)
        throw new n(
          "The compaction context must not be null.",
          "jsonld.CompactError",
          { code: "invalid local context" }
        );
      if (x === null)
        return null;
      M = E(M, {
        base: y(x) ? x : "",
        compactArrays: !0,
        compactToRelative: !0,
        graph: !1,
        skipExpansion: !1,
        link: !1,
        issuer: new h("_:b"),
        contextResolver: new a(
          { sharedCache: D }
        )
      }), M.link && (M.skipExpansion = !0), M.compactToRelative || delete M.base;
      let J;
      M.skipExpansion ? J = x : J = await N.expand(x, M);
      const X = await N.processContext(
        l(M),
        R,
        M
      );
      let K = await g({
        activeCtx: X,
        element: J,
        options: M
      });
      M.compactArrays && !M.graph && b(K) ? K.length === 1 ? K = K[0] : K.length === 0 && (K = {}) : M.graph && _(K) && (K = [K]), _(R) && "@context" in R && (R = R["@context"]), R = i.clone(R), b(R) || (R = [R]);
      const L = R;
      R = [];
      for (let z = 0; z < L.length; ++z)
        (!_(L[z]) || Object.keys(L[z]).length > 0) && R.push(L[z]);
      const V = R.length > 0;
      if (R.length === 1 && (R = R[0]), b(K)) {
        const z = I({
          activeCtx: X,
          iri: "@graph",
          relativeTo: { vocab: !0 }
        }), Z = K;
        K = {}, V && (K["@context"] = R), K[z] = Z;
      } else if (_(K) && V) {
        const z = K;
        K = { "@context": R };
        for (const Z in z)
          K[Z] = z[Z];
      }
      return K;
    }, N.expand = async function(x, R) {
      if (arguments.length < 1)
        throw new TypeError("Could not expand, too few arguments.");
      R = E(R, {
        keepFreeFloatingNodes: !1,
        contextResolver: new a(
          { sharedCache: D }
        )
      });
      const M = {}, J = [];
      if ("expandContext" in R) {
        const V = i.clone(R.expandContext);
        _(V) && "@context" in V ? M.expandContext = V : M.expandContext = { "@context": V }, J.push(M.expandContext);
      }
      let X;
      if (!y(x))
        M.input = i.clone(x);
      else {
        const V = await N.get(x, R);
        X = V.documentUrl, M.input = V.document, V.contextUrl && (M.remoteContext = { "@context": V.contextUrl }, J.push(M.remoteContext));
      }
      "base" in R || (R.base = X || "");
      let K = l(R);
      for (const V of J)
        K = await s({ activeCtx: K, localCtx: V, options: R });
      let L = await c({
        activeCtx: K,
        element: M.input,
        options: R
      });
      return _(L) && "@graph" in L && Object.keys(L).length === 1 ? L = L["@graph"] : L === null && (L = []), b(L) || (L = [L]), L;
    }, N.flatten = async function(x, R, M) {
      if (arguments.length < 1)
        return new TypeError("Could not flatten, too few arguments.");
      typeof R == "function" ? R = null : R = R || null, M = E(M, {
        base: y(x) ? x : "",
        contextResolver: new a(
          { sharedCache: D }
        )
      });
      const J = await N.expand(x, M), X = m(J);
      return R === null ? X : (M.graph = !0, M.skipExpansion = !0, await N.compact(X, R, M));
    }, N.frame = async function(x, R, M) {
      if (arguments.length < 2)
        throw new TypeError("Could not frame, too few arguments.");
      if (M = E(M, {
        base: y(x) ? x : "",
        embed: "@once",
        explicit: !1,
        requireAll: !1,
        omitDefault: !1,
        bnodesToClear: [],
        contextResolver: new a(
          { sharedCache: D }
        )
      }), y(R)) {
        const Y = await N.get(R, M);
        if (R = Y.document, Y.contextUrl) {
          let re = R["@context"];
          re ? b(re) ? re.push(Y.contextUrl) : re = [re, Y.contextUrl] : re = Y.contextUrl, R["@context"] = re;
        }
      }
      const J = R ? R["@context"] || {} : {}, X = await N.processContext(
        l(M),
        J,
        M
      );
      M.hasOwnProperty("omitGraph") || (M.omitGraph = d(X, 1.1)), M.hasOwnProperty("pruneBlankNodeIdentifiers") || (M.pruneBlankNodeIdentifiers = d(X, 1.1));
      const K = await N.expand(x, M), L = { ...M };
      L.isFrame = !0, L.keepFreeFloatingNodes = !0;
      const V = await N.expand(R, L), z = Object.keys(R).map((Y) => p(X, Y, { vocab: !0 }));
      L.merged = !z.includes("@graph"), L.is11 = d(X, 1.1);
      const Z = u(K, V, L);
      L.graph = !M.omitGraph, L.skipExpansion = !0, L.link = {}, L.framing = !0;
      let W = await N.compact(Z, J, L);
      return L.link = {}, W = f(W, L), W;
    }, N.link = async function(x, R, M) {
      const J = {};
      return R && (J["@context"] = R), J["@embed"] = "@link", N.frame(x, J, M);
    }, N.normalize = N.canonize = async function(x, R) {
      if (arguments.length < 1)
        throw new TypeError("Could not canonize, too few arguments.");
      if (R = E(R, {
        base: y(x) ? x : null,
        algorithm: "URDNA2015",
        skipExpansion: !1,
        safe: !0,
        contextResolver: new a(
          { sharedCache: D }
        )
      }), "inputFormat" in R) {
        if (R.inputFormat !== "application/n-quads" && R.inputFormat !== "application/nquads")
          throw new n(
            "Unknown canonicalization input format.",
            "jsonld.CanonizeError"
          );
        const X = o.parse(x);
        return e.canonize(X, R);
      }
      const M = { ...R };
      delete M.format, M.produceGeneralizedRdf = !1;
      const J = await N.toRDF(x, M);
      return e.canonize(J, R);
    }, N.fromRDF = async function(x, R) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert from RDF, too few arguments.");
      R = E(R, {
        format: y(x) ? "application/n-quads" : void 0
      });
      const { format: M } = R;
      let { rdfParser: J } = R;
      if (M) {
        if (J = J || q[M], !J)
          throw new n(
            "Unknown input format.",
            "jsonld.UnknownFormat",
            { format: M }
          );
      } else
        J = () => x;
      const X = await J(x);
      return v(X, R);
    }, N.toRDF = async function(x, R) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert to RDF, too few arguments.");
      R = E(R, {
        base: y(x) ? x : "",
        skipExpansion: !1,
        contextResolver: new a(
          { sharedCache: D }
        )
      });
      let M;
      R.skipExpansion ? M = x : M = await N.expand(x, R);
      const J = w(M, R);
      if (R.format) {
        if (R.format === "application/n-quads" || R.format === "application/nquads")
          return o.serialize(J);
        throw new n(
          "Unknown output format.",
          "jsonld.UnknownFormat",
          { format: R.format }
        );
      }
      return J;
    }, N.createNodeMap = async function(x, R) {
      if (arguments.length < 1)
        throw new TypeError("Could not create node map, too few arguments.");
      R = E(R, {
        base: y(x) ? x : "",
        contextResolver: new a(
          { sharedCache: D }
        )
      });
      const M = await N.expand(x, R);
      return j(M, R);
    }, N.merge = async function(x, R, M) {
      if (arguments.length < 1)
        throw new TypeError("Could not merge, too few arguments.");
      if (!b(x))
        throw new TypeError('Could not merge, "docs" must be an array.');
      typeof R == "function" ? R = null : R = R || null, M = E(M, {
        contextResolver: new a(
          { sharedCache: D }
        )
      });
      const J = await Promise.all(x.map((Y) => {
        const re = { ...M };
        return N.expand(Y, re);
      }));
      let X = !0;
      "mergeNodes" in M && (X = M.mergeNodes);
      const K = M.issuer || new h("_:b"), L = { "@default": {} };
      for (let Y = 0; Y < J.length; ++Y) {
        const re = i.relabelBlankNodes(J[Y], {
          issuer: new h("_:b" + Y + "-")
        }), le = X || Y === 0 ? L : { "@default": {} };
        if (S(re, le, "@default", K), le !== L)
          for (const ae in le) {
            const oe = le[ae];
            if (!(ae in L)) {
              L[ae] = oe;
              continue;
            }
            const se = L[ae];
            for (const Ee in oe)
              Ee in se || (se[Ee] = oe[Ee]);
          }
      }
      const V = O(L), z = [], Z = Object.keys(V).sort();
      for (let Y = 0; Y < Z.length; ++Y) {
        const re = V[Z[Y]];
        $(re) || z.push(re);
      }
      return R === null ? z : (M.graph = !0, M.skipExpansion = !0, await N.compact(z, R, M));
    }, Object.defineProperty(N, "documentLoader", {
      get: () => N._documentLoader,
      set: (x) => N._documentLoader = x
    }), N.documentLoader = async (x) => {
      throw new n(
        "Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.",
        "jsonld.LoadDocumentError",
        { code: "loading document failed", url: x }
      );
    }, N.get = async function(x, R) {
      let M;
      typeof R.documentLoader == "function" ? M = R.documentLoader : M = N.documentLoader;
      const J = await M(x);
      try {
        if (!J.document)
          throw new n(
            "No remote document found at the given URL.",
            "jsonld.NullRemoteDocument"
          );
        y(J.document) && (J.document = JSON.parse(J.document));
      } catch (X) {
        throw new n(
          "Could not retrieve a JSON-LD document from the URL.",
          "jsonld.LoadDocumentError",
          {
            code: "loading document failed",
            cause: X,
            remoteDoc: J
          }
        );
      }
      return J;
    }, N.processContext = async function(x, R, M) {
      return M = E(M, {
        base: "",
        contextResolver: new a(
          { sharedCache: D }
        )
      }), R === null ? l(M) : (R = i.clone(R), _(R) && "@context" in R || (R = { "@context": R }), s({ activeCtx: x, localCtx: R, options: M }));
    }, N.getContextValue = We().getContextValue, N.documentLoaders = {}, N.useDocumentLoader = function(x) {
      if (!(x in N.documentLoaders))
        throw new n(
          'Unknown document loader type: "' + x + '"',
          "jsonld.UnknownDocumentLoader",
          { type: x }
        );
      N.documentLoader = N.documentLoaders[x].apply(
        N,
        Array.prototype.slice.call(arguments, 1)
      );
    }, N.registerRDFParser = function(x, R) {
      q[x] = R;
    }, N.unregisterRDFParser = function(x) {
      delete q[x];
    }, N.registerRDFParser("application/n-quads", o.parse), N.registerRDFParser("application/nquads", o.parse), N.url = Je(), N.logEventHandler = k, N.logWarningEventHandler = C, N.safeEventHandler = T, N.setDefaultEventHandler = P, N.strictEventHandler = A, N.unhandledEventHandler = H, N.util = i, Object.assign(N, i), N.promises = N, N.RequestQueue = Ao(), N.JsonLdProcessor = Fu()(N), t.setupGlobals(N), t.setupDocumentLoaders(N);
    function E(x, {
      documentLoader: R = N.documentLoader,
      ...M
    }) {
      if (x && "compactionMap" in x)
        throw new n(
          '"compactionMap" not supported.',
          "jsonld.OptionsError"
        );
      if (x && "expansionMap" in x)
        throw new n(
          '"expansionMap" not supported.',
          "jsonld.OptionsError"
        );
      return Object.assign(
        {},
        { documentLoader: R },
        M,
        x,
        { eventHandler: B({ options: x }) }
      );
    }
    return N;
  }, G = function() {
    return F(function() {
      return G();
    });
  };
  return F(G), Wr = G, Wr;
}
var Ju = Hu();
const Bu = /* @__PURE__ */ oi(Ju);
async function Wa(e, t, i = {}) {
  const a = {
    algorithm: "URDNA2015",
    format: "application/n-quads",
    safe: i.safe ?? !1
  };
  return t && (a.documentLoader = t), await Bu.normalize(e, a);
}
async function Gu(e, t, i, a = !1) {
  const [h, n] = await Promise.all([
    Wa(e, i, { safe: a }),
    Wa(t, i, { safe: a })
  ]), r = Yr("sha256").update(h, "utf8").digest(), o = Yr("sha256").update(n, "utf8").digest(), c = new Uint8Array(64);
  return c.set(o, 0), c.set(r, 32), c;
}
async function Ku(e, t, i = {}) {
  const a = e.proof;
  if (!a) throw new Error("No proof found on credential");
  if (a.cryptosuite !== "eddsa-rdfc-2022")
    throw new Error(`Unsupported cryptosuite: ${a.cryptosuite}`);
  if (a.created === void 0)
    throw new Error('eddsa-rdfc-2022 proof is missing the required "created" property.');
  const h = ["type", "cryptosuite", "proofPurpose", "verificationMethod", "created", "proofValue"];
  if (a.type !== "DataIntegrityProof" || a.proofPurpose !== "assertionMethod" || Object.keys(a).some((w) => !h.includes(w)) || typeof a.verificationMethod != "string" || typeof a.created != "string" || typeof a.proofValue != "string") return !1;
  const { proof: n, ...r } = e, { proofValue: o, ...c } = a, m = { ...c, "@context": r["@context"] }, v = await Gu(
    r,
    m,
    i.documentLoader,
    i.safe ?? !1
  );
  try {
    const w = ro(a.proofValue);
    return await gu(w, v, t);
  } catch {
    return !1;
  }
}
const Zu = zl, Xu = nu, Wu = Object.freeze({
  RmAccreditation: `${ht}accreditation.json`,
  RmOperationalScope: `${ht}operational-scope.json`,
  RmCertificate: `${ht}certificate.json`,
  RmStudy: `${ht}study.json`,
  RmLabAuthority: `${ht}lab-authority.json`
});
function $t(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const Qu = (e) => e.replace(/~/g, "~0").replace(/\//g, "~1");
function Yu(e, t) {
  if (!t.startsWith("/")) return [];
  let i = [{ pointer: "", value: e }];
  for (const a of t.slice(1).split("/")) {
    const h = [];
    for (const { pointer: n, value: r } of i)
      a === "*" ? Array.isArray(r) && r.forEach((o, c) => h.push({ pointer: `${n}/${c}`, value: o })) : $t(r) && Object.hasOwn(r, a) && h.push({ pointer: `${n}/${Qu(a)}`, value: r[a] });
    i = h;
  }
  return i;
}
function at(e, t, i = [], a = "executed") {
  return Object.freeze({
    state: e,
    execution: a,
    reasons: Object.freeze(t),
    sourcePointers: Object.freeze(i)
  });
}
const ef = (e) => at("not_established", [e], [], "not_run");
function tf(e, t) {
  const i = Date.parse(t), a = typeof e.validFrom == "string" ? Date.parse(e.validFrom) : NaN, h = typeof e.validUntil == "string" ? Date.parse(e.validUntil) : NaN;
  if (!Number.isFinite(i) || !Number.isFinite(a) || !Number.isFinite(h))
    return at("not_established", ["Validity period or evaluation time is missing or invalid."]);
  const n = ["/validFrom", "/validUntil"];
  return i < a ? at("contradicted", [`Not yet valid at ${t}.`], n) : i > h ? at("contradicted", [`Expired before ${t}.`], n) : at("established", [`Valid at ${t}.`], n);
}
function nf(e, t) {
  return (Array.isArray(e.relatedResource) ? e.relatedResource : []).filter($t).map((a) => {
    const h = String(a.id);
    try {
      const n = Un(t.resolve(h).bytes);
      return n === a.digestSRI ? { id: h, state: "established", reason: "Digest matches the exact referenced bytes." } : { id: h, state: "contradicted", reason: `Digest mismatch: referenced bytes hash to ${n}.` };
    } catch (n) {
      const r = n instanceof be ? n.code : "UNAVAILABLE";
      return { id: h, state: "not_established", reason: `Referenced resource unavailable: ${r}.` };
    }
  });
}
async function rf(e, t, i) {
  const a = [], h = ef("Not evaluated because protection is not established."), n = (p = {}) => {
    const l = Ze(a.map((s) => s.state));
    return Object.freeze({
      artifactId: e,
      protection: Object.freeze({
        artifactId: e,
        ...at(l, a.filter((s) => s.state !== "established").map((s) => `${s.check}: ${s.reason}`).concat(l === "established" ? ["Protection established from the original secured bytes."] : []))
      }),
      checks: Object.freeze(a.map((s) => Object.freeze(s))),
      validity: h,
      relatedResources: Object.freeze([]),
      facts: Object.freeze([]),
      ...p
    });
  }, r = (p, l, s, d = {}) => (a.push({ check: p, state: l, reason: s }), n(d));
  let o;
  try {
    o = t.resolve(e).bytes;
  } catch (p) {
    const l = p instanceof be ? p.code : "UNAVAILABLE";
    return r("resolve", "not_established", `Artifact is not available: ${l}.`);
  }
  const c = Un(o);
  a.push({ check: "resolve", state: "established", reason: `Resolved ${o.byteLength} bytes.` });
  let m;
  try {
    m = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(o));
  } catch {
    return r("parse", "contradicted", "Artifact bytes are not valid UTF-8 JSON.", { digestSRI: c });
  }
  if (!$t(m)) return r("parse", "contradicted", "Artifact is not a JSON object.", { digestSRI: c });
  a.push({ check: "parse", state: "established", reason: "Strict UTF-8 JSON object." });
  const v = m["@context"];
  if (!Array.isArray(v) || v.length !== 2 || v[0] !== hc || v[1] !== mc)
    return r(
      "carrier",
      "not_established",
      "Only the exact VCDM 2.0 + RM v1 context combination is supported.",
      { digestSRI: c }
    );
  a.push({ check: "carrier", state: "established", reason: "Exact supported context combination." });
  const w = Array.isArray(m.type) ? m.type : [], u = w.length === 2 && w[0] === "VerifiableCredential" ? String(w[1]) : void 0, f = u === void 0 ? void 0 : Wu[u];
  if (f === void 0)
    return r("type", "not_established", "Credential type is not a recognized RM v1 artifact type.", { digestSRI: c });
  if (($t(m.credentialSchema) ? m.credentialSchema.id : void 0) !== f)
    return r("type", "contradicted", `${u} must declare schema ${f}.`, { digestSRI: c, artifactType: u });
  a.push({ check: "type", state: "established", reason: `${u} with its pinned schema.` });
  try {
    const p = new Zu({ allErrors: !0, strict: !0 });
    Xu(p);
    const l = JSON.parse(new TextDecoder().decode(t.resolve(f).bytes)), s = p.compile(l);
    if (!s(m)) {
      const d = (s.errors ?? []).map((g) => `${g.instancePath || "/"} ${g.message ?? ""}`).join("; ");
      return r("schema", "contradicted", `Schema validation failed: ${d}`, { digestSRI: c, artifactType: u });
    }
  } catch (p) {
    const l = p instanceof be ? p.code : "INVALID_SCHEMA";
    return r("schema", "not_established", `Pinned schema unavailable: ${l}.`, { digestSRI: c, artifactType: u });
  }
  a.push({ check: "schema", state: "established", reason: "Valid against the pinned schema." });
  const _ = m.proof;
  if (Array.isArray(_))
    return r("proof", "not_established", "Proof sets and chains are unsupported in the initial slice.", { digestSRI: c, artifactType: u });
  if (!$t(_))
    return r("proof", "not_established", "The artifact carries no proof.", { digestSRI: c, artifactType: u });
  a.push({ check: "proof", state: "established", reason: "One eddsa-rdfc-2022 assertionMethod proof." });
  const y = Sc(m.issuer, _.verificationMethod, t);
  if (y.state !== "established" || y.publicKey === void 0)
    return r(
      "key",
      y.state === "established" ? "not_established" : y.state,
      `${y.code}: ${y.reason}`,
      { digestSRI: c, artifactType: u, keyAuthorization: y }
    );
  a.push({ check: "key", state: "established", reason: y.reason });
  try {
    const p = fc(t);
    if (!await Ku(m, y.publicKey, {
      documentLoader: p,
      safe: !0
    }))
      return r(
        "signature",
        "contradicted",
        "Signature does not verify over the safe canonical form.",
        { digestSRI: c, artifactType: u, keyAuthorization: y }
      );
  } catch (p) {
    const l = p instanceof Error ? p.message.split(`
`)[0] : String(p);
    return r(
      "signature",
      "contradicted",
      `Safe JSON-LD processing rejected the artifact: ${l}`,
      { digestSRI: c, artifactType: u, keyAuthorization: y }
    );
  }
  a.push({ check: "signature", state: "established", reason: "Ed25519 signature verifies (safe mode, offline catalog)." });
  const $ = [];
  for (const p of i.manifest.factMappings) {
    const l = String(p.fact);
    for (const { pointer: s, value: d } of Yu(m, String(p.nativePath)))
      $.push(Object.freeze({ fact: l, pointer: s, value: structuredClone(d) }));
  }
  return n({
    digestSRI: c,
    artifactType: u,
    keyAuthorization: y,
    validity: tf(m, i.evaluationTime),
    relatedResources: Object.freeze(nf(m, t).map((p) => Object.freeze(p))),
    facts: Object.freeze($)
  });
}
const sf = "https://vc4qi.example/bindings/rm/1#", vt = (e) => `${sf}${e}`, ve = (e) => ({ state: "established", text: e }), Me = (e) => ({ state: "contradicted", text: e }), bt = (e) => ({ state: "not_established", text: e }), it = (e) => String(e).split(/[#/]/).pop();
function ft(e) {
  if (typeof e != "string" || !/^(0|[1-9][0-9]*)(\.[0-9]+)?$/.test(e)) return;
  const [t, i = ""] = e.split(".");
  return { n: BigInt(t + i), scale: i.length };
}
function wt(e, t) {
  const i = ft(e), a = ft(t), h = Math.max(i.scale, a.scale), n = i.n * 10n ** BigInt(h - i.scale), r = a.n * 10n ** BigInt(h - a.scale);
  return n < r ? -1 : n > r ? 1 : 0;
}
function af(e, t) {
  const i = ft(e), a = ft(t), h = Math.max(i.scale, a.scale), n = (i.n * 10n ** BigInt(h - i.scale) + a.n * 10n ** BigInt(h - a.scale)).toString().padStart(h + 1, "0");
  return h === 0 ? n : `${n.slice(0, -h)}.${n.slice(-h)}`;
}
const Qr = (e, t) => Array.isArray(e) && e.includes(t);
function of({ A: e, H: t, O: i, S: a, D: h, anchors: n }) {
  const r = h.credentialSubject, o = r.materialPropertiesList[0].results[0], c = o.data.quantity, m = r.materials[0], v = c.value, w = c.uncertainty.expandedUncertainty, u = [
    c.quantityKind === vt("MassFraction") && c.unit.ucumCode === "mg/kg" ? ve("Mass fraction in mg/kg: supported by the binding.") : bt("Unsupported quantity kind or unit."),
    ft(v) && ft(w) ? ve(`Exact decimals: x = ${v}, U = ${w} mg/kg.`) : Me("Value or uncertainty is not a valid decimal."),
    c.uncertainty.coverageFactor === "2" ? ve("Coverage factor k = 2, as the binding requires.") : bt("Unsupported coverage factor.")
  ], f = i.credentialSubject.scope[0], b = e.credentialSubject.scope.find((s) => s.matrixIri === f.matrixIri && s.formIri === f.formIri && s.quantityKindIri === f.quantityKindIri && f.allowedPropertyIris.every((d) => s.allowedPropertyIris.includes(d)) && f.allowedMethodIris.every((d) => s.allowedMethodIris.includes(d)) && s.range.unit === f.range.unit && wt(f.range.from, s.range.from) >= 0 && wt(f.range.to, s.range.to) <= 0), _ = [
    h.termsOfUse[0].authorizationCredential.id === i.id ? ve("D names operational scope O as its authorization (termsOfUse).") : bt("D names no recognized authorization."),
    i.credentialSubject.id === h.issuer && i.issuer === h.issuer && Qr(i.credentialSubject.permittedActivity, vt("issueRmCertificate")) ? ve("O is the producer's own scope for issuing RM certificates.") : Me("O does not belong to D's issuer."),
    i.termsOfUse[0].authorizationCredential.id === e.id && e.credentialSubject.id === i.issuer && Qr(e.credentialSubject.permittedActivity, vt("maintainRmScope")) ? ve("Accreditation A lets the producer maintain an operational scope.") : Me("No permission to maintain O."),
    n.includes(e.issuer) ? ve("A is issued by the configured trust anchor (fictional NAB).") : bt("A's issuer is not a configured anchor."),
    b ? ve(`O lies within A: methods ${f.allowedMethodIris.map(it).join(", ")} within ${b.allowedMethodIris.map(it).join(", ")}; ${f.range.from}–${f.range.to} within ${b.range.from}–${b.range.to} mg/kg.`) : Me("O is not contained in one record of A.")
  ], y = i.credentialSubject.scope.find((s) => s.matrixIri === m.matrixIri && s.formIri === m.formIri && s.quantityKindIri === c.quantityKind && s.allowedPropertyIris.includes(o.propertyIri) && s.allowedMethodIris.includes(o.methodIri) && s.range.unit === c.unit.ucumCode);
  let $;
  y ? wt(v, y.range.from) < 0 ? $ = Me(`${v} < ${y.range.from} mg/kg: below the accredited range.`) : wt(v, y.range.to) > 0 ? $ = Me(`${v} > ${y.range.to} mg/kg: above the accredited range.`) : $ = ve(`${y.range.from} ≤ ${v} ≤ ${y.range.to} mg/kg (record ${it(y.id)}).`) : $ = Me(`No record of O covers ${it(o.propertyIri)}, ${it(m.matrixIri)}, ${it(o.methodIri)}.`);
  const p = t.credentialSubject.scope[0], l = [
    h.evidence[0].id === a.id && a.credentialSubject.id === r.id && a.credentialSubject.propertyIri === o.propertyIri && a.credentialSubject.matrixIri === m.matrixIri ? ve("Study S concerns the same batch, property and matrix (evidence).") : Me("Study S concerns another batch or property."),
    a.credentialSubject.outcomeIri === vt("Homogeneous") ? ve("S reports the batch homogeneous.") : Me("S does not report homogeneity."),
    a.termsOfUse[0].authorizationCredential.id === t.id && t.credentialSubject.id === a.issuer && Qr(t.credentialSubject.permittedActivity, vt("issueRmStudy")) && p.studyTypeIris.includes(a.credentialSubject.studyTypeIri) && n.includes(t.issuer) ? ve("S's laboratory has its own authority for homogeneity studies (H).") : bt("S lacks its own laboratory authority.")
  ];
  return { mapping: u, authority: _, scope: $, support: l, x: v, U: w };
}
function cf(e, t, i, a) {
  if (a !== "established")
    return { state: "not_established", run: !1, text: "Not asked: its prerequisites are not established." };
  const h = af(e, t);
  return wt(h, i) <= 0 ? { state: "established", run: !0, text: `${e} + ${t} = ${h} ≤ ${i} mg/kg.` } : { state: "contradicted", run: !0, text: `${e} + ${t} = ${h} > ${i} mg/kg.` };
}
const df = {
  A: "https://nab.vc4qi.example/credentials/A",
  H: "https://nab.vc4qi.example/credentials/H",
  O: "https://producer.vc4qi.example/credentials/O",
  S: "https://lab.vc4qi.example/credentials/S"
}, lf = (e) => `https://producer.vc4qi.example/credentials/D${e}`, uf = ["https://nab.vc4qi.example/controller"], ff = "200", pf = "150", ii = pc(kn.manifest), hf = {
  resolve: 1,
  parse: 0,
  carrier: 0,
  type: 0,
  schema: 0,
  proof: 2,
  key: 2,
  signature: 2
};
async function Ef(e, t, i) {
  const a = lf(e), h = /* @__PURE__ */ new Map();
  if (t) {
    const S = kn.files.find((j) => j.uri === a).text;
    h.set(a, S.replace(`"value": "${e}"`, `"value": "${pf}"`));
  }
  const n = kn.files.map((S) => {
    const j = h.get(S.uri) ?? S.text, O = new TextEncoder().encode(j);
    return {
      uri: S.uri,
      mediaType: S.mediaType,
      origin: S.origin,
      version: S.version,
      bytes: O,
      digestSRI: h.has(S.uri) ? Un(O) : S.digestSRI
    };
  }), r = new lc(n), o = { ...df, D: a }, c = ["D", "O", "A", "S", "H"], m = {}, v = {}, w = {};
  for (const S of c) {
    const j = r.openSession({ maxResources: 64, maxBytes: 2e6 });
    m[S] = await rf(o[S], j, { manifest: ii, evaluationTime: i }), v[S] = new TextDecoder().decode(n.find((O) => O.uri === o[S]).bytes), w[S] = JSON.parse(v[S]);
  }
  const u = { 0: [], 1: [], 2: [], 3: [] };
  for (const S of c) {
    const j = m[S];
    for (const O of j.checks)
      u[hf[O.check]].push({ role: S, state: O.state, text: `${S}: ${O.check} — ${O.reason}` });
    for (const O of j.relatedResources)
      u[1].push({ role: S, state: O.state, text: `${S} → ${O.id.split("/").pop()}: ${O.reason}` });
    j.validity.execution === "executed" && u[3].push({ role: S, state: j.validity.state, text: `${S}: ${j.validity.reasons.join(" ")}` });
  }
  const f = (S) => S.length ? Ze(S.map((j) => j.state)) : "not_established", b = Ze(c.map((S) => m[S].protection.state)), _ = [
    { gate: 0, name: "Plan and structure", source: "repository", state: f(u[0]), checks: u[0] },
    { gate: 1, name: "Resource identity", source: "repository", state: f(u[1]), checks: u[1] },
    { gate: 2, name: "Protection", source: "repository", state: f(u[2]), checks: u[2] },
    {
      gate: 3,
      name: "Temporal applicability",
      source: "repository",
      state: u[3].length === c.length ? f(u[3]) : "not_established",
      checks: u[3].length ? u[3] : [{ state: "not_established", text: "Not evaluated: protection is not established." }]
    }
  ], y = Ze(_.map((S) => S.state));
  let $, p;
  const s = w.D.credentialSubject.materialPropertiesList[0].results[0].data.quantity;
  if (b === "established") {
    const S = of({ ...w, anchors: uf });
    $ = S.scope;
    const j = Ze([...S.authority, S.scope].map((k) => k.state)), O = Ze([y, ...[...S.mapping, ...S.authority, S.scope, ...S.support].map((k) => k.state)]);
    p = cf(S.x, S.U, ff, O), _.push(
      { gate: 4, name: "Meaning and mapping", source: "preview", state: f(S.mapping), checks: S.mapping },
      { gate: 5, name: "Authority and scope", source: "preview", state: j, checks: [...S.authority, S.scope] },
      {
        gate: 6,
        name: "Support and decision",
        source: "preview",
        state: Ze([...S.support.map((k) => k.state), p.run ? p.state : "not_established"]),
        checks: [...S.support, p.run ? p : { state: "not_established", text: `Decision ${p.text}` }]
      }
    );
  } else
    for (const [S, j] of [[4, "Meaning and mapping"], [5, "Authority and scope"], [6, "Support and decision"]])
      _.push({
        gate: S,
        name: j,
        source: "preview",
        state: "not_run",
        checks: [{ state: "not_established", text: "Not asked: protection is not established, so no facts are read." }]
      });
  const d = _.map((S) => S.state === "not_run" ? "not_established" : S.state), g = d.includes("contradicted") ? "reject" : d.every((S) => S === "established") ? "accept" : "not_established", I = _.find((S) => S.state === "contradicted")?.gate;
  return {
    x: e,
    tampered: t,
    documents: w,
    texts: v,
    artifacts: m,
    gates: _,
    protection: b,
    scope: $,
    conformity: p,
    verdict: g,
    failedGate: I,
    values: { x: s.value, U: s.uncertainty.expandedUncertainty }
  };
}
const Rf = { binding: `${ii.id}@${ii.version}`, resources: kn.files.length };
export {
  uf as ANCHORS,
  ff as LIMIT,
  pf as TAMPERED_VALUE,
  df as URI,
  Rf as buildInfo,
  lf as certificateUri,
  Ef as evaluateScenario
};
