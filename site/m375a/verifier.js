var ko = Object.defineProperty;
var _s = (e) => {
  throw TypeError(e);
};
var Do = (e, t, s) => t in e ? ko(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var Pe = (e, t, s) => Do(e, typeof t != "symbol" ? t + "" : t, s), Ss = (e, t, s) => t.has(e) || _s("Cannot " + s);
var Re = (e, t, s) => (Ss(e, t, "read from private field"), s ? s.call(e) : t.get(e)), Rt = (e, t, s) => t.has(e) ? _s("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Qn = (e, t, s, a) => (Ss(e, t, "write to private field"), a ? a.call(e, s) : t.set(e, s), s);
const kn = { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/rm/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/BINDING_MANIFEST.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Contexts, schemas, controller documents, signed A/H/O/S/D fixtures and status lists are pinned and verify in TypeScript and Python. The I2-I4 evaluators (authorization, support, conformity) and an independent transformation vector are still required before selection.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/rm/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/rm/1#RmAccreditation", "https://vc4qi.example/bindings/rm/1#RmOperationalScope", "https://vc4qi.example/bindings/rm/1#RmCertificate", "https://vc4qi.example/bindings/rm/1#RmStudy", "https://vc4qi.example/bindings/rm/1#RmLabAuthority", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential"], schemaUris: ["https://vc4qi.example/schemas/rm/1/accreditation.json", "https://vc4qi.example/schemas/rm/1/operational-scope.json", "https://vc4qi.example/schemas/rm/1/certificate.json", "https://vc4qi.example/schemas/rm/1/study.json", "https://vc4qi.example/schemas/rm/1/lab-authority.json", "https://vc4qi.example/schemas/rm/1/authorization-policy.json", "https://vc4qi.example/schemas/rm/1/study-reference.json", "https://vc4qi.example/schemas/rm/1/status-list.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/rm-v1/catalog.json", decimalEncoding: "JSON strings typed xsd:decimal for every quantity, bound and uncertainty", orderedCollections: ["materials", "materialPropertiesList", "results"] }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/rm/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/rm/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/bindings/rm/1#authorizationCredential" }, { fact: "requiredStudy", nativePath: "/evidence/*/id", expandedIri: "https://www.w3.org/2018/credentials#evidence" }, { fact: "validFrom", nativePath: "/validFrom", expandedIri: "https://www.w3.org/2018/credentials#validFrom" }, { fact: "validUntil", nativePath: "/validUntil", expandedIri: "https://www.w3.org/2018/credentials#validUntil" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/rm/1#activityTime" }, { fact: "selectedResult", nativePath: "/credentialSubject/materialPropertiesList/*/results/*", expandedIri: "https://vc4qi.example/bindings/rm/1#results" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, material: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 1 }, supportReferences: { minimum: 1 }, multipleRecognizedDeclarations: "unsupported-unless-exact-deterministic-composition-is-listed", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "evidence", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", independentGrantBinding: "authenticated-grant-must-name-the-exercising-actor-and-activity" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/bindings/rm/1#RmAuthorizationPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], supportEvidence: "https://vc4qi.example/bindings/rm/1#RmStudyReference", supportEvidenceEstablishes: ["support-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "support-applicability", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { issueRmCertificate: "https://vc4qi.example/bindings/rm/1#issueRmCertificate", maintainRmScope: "https://vc4qi.example/bindings/rm/1#maintainRmScope", issueRmStudy: "https://vc4qi.example/bindings/rm/1#issueRmStudy" }, rules: ["A grantee equals the producer exercising certificate issuance and scope maintenance.", "O issuer and grantee equal that producer and O is contained by A.", "D issuer equals O grantee.", "S issuer equals H laboratory grantee.", "Commissioning a study grants no laboratory competence."] }, scopeAndMapping: { mappingVersion: "rm-experimental-mapping-1", recordEvaluator: "https://vc4qi.example/evaluators/rm-complete-record/1", quantityEvaluator: "https://vc4qi.example/evaluators/exact-mass-fraction/1", dimensions: ["matrixIri", "formIri", "propertyIri", "methodIri", "quantityKindIri", "range"], units: { "mg/kg": "1e-6", "kg/kg": "1" }, boundaries: "inclusive", missingOrEmptyRestrictedDimension: "not_established", recordCombination: "one-complete-record-per-claim-no-splicing", uncertainty: { requiredCoverageFactor: "2", nonnegative: !0, accreditationCeiling: "none" }, unsupported: ["asymmetric-uncertainty", "display-label-equality", "substring-matching", "implicit-method-succession"] }, routesAndRestrictions: { certificateRoute: ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A"], studyRoute: ["H-authorizes-S"], requiredSupport: ["S", "H"], globalRestrictions: ["applicable-suspension", "request-time-policy"], routeComposition: "AND-within-route-OR-between-complete-routes", baselineAlternatives: 1, provenanceDoesNotEstablish: ["permission", "containment"] }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, proofCollections: "unsupported-in-initial-slice", status: "authenticated-current-revocation-status-required-for-A-O-D-S-H", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], freshness: "verifier-profile maxAgeSeconds from the status list validFrom; no default", historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { objectApplicability: ["materialBatch", "activity", "method", "activityTime"], supportSubjectNeedNotEqualTargetIssuer: !0, mandatoryDisclosure: ["issuer", "credentialSubject/id", "activityTime", "selectedResult", "restrictions", "authorizingReference", "requiredStudy", "relatedResource", "proof"], missingMandatoryDisclosure: "not_established", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/plans/standards-first-acceptance.csv", testVectorRoots: ["testdata/regressions", "bindings/experimental/rm-v1/test-vectors"], implementationEvidence: "docs/plans/standards-first-i1-signed-slice-evidence.md", unsupported: ["production-accreditation", "legal-effect", "physical-sample-truth", "public-example-namespace-resolution", "general-ontology-reasoning", "wallet-interoperability", "external-recognition-adapter", "timestamp-service"] } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/accreditation.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-5wZx9dR+8usAvVy5psAy1BodxLdh75RXhePfEmkg7mVcEitoMo7H2hDDX10L80rX", text: `{
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
    "credentialSubject",
    "credentialStatus"
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
    "credentialStatus": {
      "type": "object",
      "required": [
        "id",
        "type",
        "statusPurpose",
        "statusListIndex",
        "statusListCredential"
      ],
      "properties": {
        "id": {
          "type": "string",
          "format": "uri"
        },
        "type": {
          "const": "BitstringStatusListEntry"
        },
        "statusPurpose": {
          "const": "revocation"
        },
        "statusListIndex": {
          "type": "string",
          "pattern": "^(0|[1-9][0-9]*)$"
        },
        "statusListCredential": {
          "type": "string",
          "format": "uri"
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/operational-scope.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-kUG0HPydGfjBtJcIVZhsqcpu+yb/suMf8YErXr2cBa/2ir7A40UW5RHYXCayrVQj", text: `{
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
    "credentialStatus",
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
    "credentialStatus": {
      "type": "object",
      "required": [
        "id",
        "type",
        "statusPurpose",
        "statusListIndex",
        "statusListCredential"
      ],
      "properties": {
        "id": {
          "type": "string",
          "format": "uri"
        },
        "type": {
          "const": "BitstringStatusListEntry"
        },
        "statusPurpose": {
          "const": "revocation"
        },
        "statusListIndex": {
          "type": "string",
          "pattern": "^(0|[1-9][0-9]*)$"
        },
        "statusListCredential": {
          "type": "string",
          "format": "uri"
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/certificate.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-fg7L6ni/JPLuCAJ9pZBWFJLmCz5gNCEuTVDnRmPf3eapV/MbjwDmn9N2ZqJklNzm", text: `{
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
    "credentialStatus",
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
    "credentialStatus": {
      "type": "object",
      "required": [
        "id",
        "type",
        "statusPurpose",
        "statusListIndex",
        "statusListCredential"
      ],
      "properties": {
        "id": {
          "type": "string",
          "format": "uri"
        },
        "type": {
          "const": "BitstringStatusListEntry"
        },
        "statusPurpose": {
          "const": "revocation"
        },
        "statusListIndex": {
          "type": "string",
          "pattern": "^(0|[1-9][0-9]*)$"
        },
        "statusListCredential": {
          "type": "string",
          "format": "uri"
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/study.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-qH240k3JzPssM/LXn2LxoUiU2X+LBinCWnbGxuDziG9cH0bF4te72/paJnCKIL4u", text: `{
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
    "credentialStatus",
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
    "credentialStatus": {
      "type": "object",
      "required": [
        "id",
        "type",
        "statusPurpose",
        "statusListIndex",
        "statusListCredential"
      ],
      "properties": {
        "id": {
          "type": "string",
          "format": "uri"
        },
        "type": {
          "const": "BitstringStatusListEntry"
        },
        "statusPurpose": {
          "const": "revocation"
        },
        "statusListIndex": {
          "type": "string",
          "pattern": "^(0|[1-9][0-9]*)$"
        },
        "statusListCredential": {
          "type": "string",
          "format": "uri"
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/lab-authority.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-jgCP5FDMeSX1PS3YKt+e7RocQiaFCTQz+xpftm76s4mtKY8mO0NzvJd0CrkFcw2c", text: `{
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
    "credentialSubject",
    "credentialStatus"
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
    "credentialStatus": {
      "type": "object",
      "required": [
        "id",
        "type",
        "statusPurpose",
        "statusListIndex",
        "statusListCredential"
      ],
      "properties": {
        "id": {
          "type": "string",
          "format": "uri"
        },
        "type": {
          "const": "BitstringStatusListEntry"
        },
        "statusPurpose": {
          "const": "revocation"
        },
        "statusListIndex": {
          "type": "string",
          "pattern": "^(0|[1-9][0-9]*)$"
        },
        "statusListCredential": {
          "type": "string",
          "format": "uri"
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/status-list.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-UGx5toTbuSW1hxhnZitWPhawN2GarHEvCMIBkgiO9eFkiikAPamzIFStIxGlZrif", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/rm/1/status-list.json",
  "title": "Bitstring Status List credential for RM v1 fixtures",
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
        "https://www.w3.org/ns/credentials/v2"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "BitstringStatusListCredential"
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
          "const": "https://vc4qi.example/schemas/rm/1/status-list.json"
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
        "type",
        "statusPurpose",
        "encodedList"
      ],
      "properties": {
        "id": {
          "type": "string",
          "format": "uri"
        },
        "type": {
          "const": "BitstringStatusList"
        },
        "statusPurpose": {
          "const": "revocation"
        },
        "encodedList": {
          "type": "string",
          "pattern": "^u[A-Za-z0-9_-]+$"
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
` }, { uri: "https://nab.vc4qi.example/status/1", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-i2lle1fZkHBwlI03qHY0mf+5e+whCEn4U8GU5W3XGzCoDCeUPKlFB87szsBnEOSv", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://nab.vc4qi.example/status/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://nab.vc4qi.example/controller",
  "validFrom": "2026-09-01T00:00:00Z",
  "validUntil": "2027-09-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/rm/1/status-list.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://nab.vc4qi.example/status/1#list",
    "type": "BitstringStatusList",
    "statusPurpose": "revocation",
    "encodedList": "uH4sIAAAAAAACA-3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAIC3AYbSVKsAQAAA"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://nab.vc4qi.example/controller#key-1",
    "created": "2026-09-01T00:00:00Z",
    "proofValue": "z4Rmxu1xe94GbbksAMiV2R7KmiEvbS4cs9yY4gDG4i1ChvsYFoV8WPfA2b6D8kB6YdgMhqpEKydo6pAo36kVFoSfY"
  }
}
` }, { uri: "https://producer.vc4qi.example/status/1", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-BZoXrkL4Ipyyx7qj9/wxUFJSO0Tlf22F8S+TqfJDBpwf7LstD3O9wS0uS5Osfymt", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://producer.vc4qi.example/status/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://producer.vc4qi.example/controller",
  "validFrom": "2026-09-01T00:00:00Z",
  "validUntil": "2027-09-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/rm/1/status-list.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://producer.vc4qi.example/status/1#list",
    "type": "BitstringStatusList",
    "statusPurpose": "revocation",
    "encodedList": "uH4sIAAAAAAACA-3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAIC3AYbSVKsAQAAA"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://producer.vc4qi.example/controller#key-1",
    "created": "2026-09-01T00:00:00Z",
    "proofValue": "z4TNHYruLC78jmEkr1cJVPveuPhCBqzJsSrRZadP5ot3wiw8kXWz5QYuCcc9pP5JL1heqQVcKK7G31gj6YtM3ABna"
  }
}
` }, { uri: "https://lab.vc4qi.example/status/1", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-pKqdhTCWAvsYupWywHdoNBP5V5KIkzB05X5/7Ac/0wJ50NeQ6Sae3BPu0W5DpSaf", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://lab.vc4qi.example/status/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://lab.vc4qi.example/controller",
  "validFrom": "2026-09-01T00:00:00Z",
  "validUntil": "2027-09-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/rm/1/status-list.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://lab.vc4qi.example/status/1#list",
    "type": "BitstringStatusList",
    "statusPurpose": "revocation",
    "encodedList": "uH4sIAAAAAAACA-3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAIC3AYbSVKsAQAAA"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://lab.vc4qi.example/controller#key-1",
    "created": "2026-09-01T00:00:00Z",
    "proofValue": "z2S9Mfg5j7WnfAi85JnVsUhLnE2Mdemzts5zZQ99w5JZUsviKBKcQxgJR3eJQbzUfNqHmyL2dWyqLJM3dSYMDmwmV"
  }
}
` }, { uri: "https://nab.vc4qi.example/credentials/A", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-DoHZheP+W5Nw0ZzryrNx7dRxkRvK4aGMTXUVg2pT7Ms2RqlQcHlJnlxp9w9QotZc", text: `{
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
  "credentialStatus": {
    "id": "https://nab.vc4qi.example/status/1#0",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "0",
    "statusListCredential": "https://nab.vc4qi.example/status/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://nab.vc4qi.example/controller#key-1",
    "created": "2025-01-01T00:00:00Z",
    "proofValue": "z565yUW7XExbpTSevNCY4y976j2wETYFN6ga7hQqqLGRNSsfY3FbZvVCqM3UKUNKLcbVtQgbSHNvVPHa1EsDN4ZKh"
  }
}
` }, { uri: "https://nab.vc4qi.example/credentials/H", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-sE3NHMOoUdyLD5zsaeeXlmHRDMdJhYR6gC8gZUtlRcXW5ny6bjaDoi5rLX54/pWt", text: `{
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
  "credentialStatus": {
    "id": "https://nab.vc4qi.example/status/1#1",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "1",
    "statusListCredential": "https://nab.vc4qi.example/status/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://nab.vc4qi.example/controller#key-1",
    "created": "2025-01-01T00:00:00Z",
    "proofValue": "z4WPnNw9451opeaxtdhw6RHybgpmvzrdQBaWR1hoPoyAMYGY5q68Vi7f1x23aMdgj3aWUh2whRy4fbMaRyV1De2iE"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/O", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-WPTZxJgJ8rR7EPGfdydwey1Pk5X9M63/OeYx667bNmClZBhjPGI6yKBD/w0go8ss", text: `{
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
      "digestSRI": "sha384-DoHZheP+W5Nw0ZzryrNx7dRxkRvK4aGMTXUVg2pT7Ms2RqlQcHlJnlxp9w9QotZc"
    }
  ],
  "credentialStatus": {
    "id": "https://producer.vc4qi.example/status/1#0",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "0",
    "statusListCredential": "https://producer.vc4qi.example/status/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://producer.vc4qi.example/controller#key-1",
    "created": "2025-06-01T00:00:00Z",
    "proofValue": "z3YVKbTbutyQdrVLEYj9i1innSnydgsBAP5YuNoHaL6FUprG9KSVhLYzgRy8ubfLNzJ9pDGLVsP8CEz68fj84hwPV"
  }
}
` }, { uri: "https://lab.vc4qi.example/credentials/S", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-1JsYandJWXaGVo3kLdVwx41r1NYJ/cFLaA8W61Kil/2HWleMOoY+8vd1azKJcKGv", text: `{
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
      "digestSRI": "sha384-sE3NHMOoUdyLD5zsaeeXlmHRDMdJhYR6gC8gZUtlRcXW5ny6bjaDoi5rLX54/pWt"
    }
  ],
  "credentialStatus": {
    "id": "https://lab.vc4qi.example/status/1#0",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "0",
    "statusListCredential": "https://lab.vc4qi.example/status/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://lab.vc4qi.example/controller#key-1",
    "created": "2026-01-15T00:00:00Z",
    "proofValue": "zXxdbaaayMpE8Hg6WaNEMgReA4ro1z8pgzXTYn5nnvPHtEMj6srxLaiDgMgUwC6XDqmi8WBGV9NfrJq5aGinYTNJ"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D178", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-plvuhkoywsP3tfLD/pi/2PNmcuKlGK/2HsAoEHA5sK2evuRhYIk0ujxhjla3rRbc", text: `{
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
      "digestSRI": "sha384-WPTZxJgJ8rR7EPGfdydwey1Pk5X9M63/OeYx667bNmClZBhjPGI6yKBD/w0go8ss"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "digestSRI": "sha384-1JsYandJWXaGVo3kLdVwx41r1NYJ/cFLaA8W61Kil/2HWleMOoY+8vd1azKJcKGv"
    }
  ],
  "credentialStatus": {
    "id": "https://producer.vc4qi.example/status/1#1",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "1",
    "statusListCredential": "https://producer.vc4qi.example/status/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://producer.vc4qi.example/controller#key-1",
    "created": "2026-02-01T00:00:00Z",
    "proofValue": "zZJAMhSDUYJhtoTYD17v85VgWSV3HjLTnRcLByLTjsHhRqNQXXBQSHVoARYrSFfG6oMmNwWTXgHZ7vdpFGxfM1iW"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D197", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-QljDXb9ZAqRxFgdYIlbB24ScSg5e/2F7RmhwTCweXOmW6ZPjDehxyreUaJaVhm4z", text: `{
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
      "digestSRI": "sha384-WPTZxJgJ8rR7EPGfdydwey1Pk5X9M63/OeYx667bNmClZBhjPGI6yKBD/w0go8ss"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "digestSRI": "sha384-1JsYandJWXaGVo3kLdVwx41r1NYJ/cFLaA8W61Kil/2HWleMOoY+8vd1azKJcKGv"
    }
  ],
  "credentialStatus": {
    "id": "https://producer.vc4qi.example/status/1#2",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "2",
    "statusListCredential": "https://producer.vc4qi.example/status/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://producer.vc4qi.example/controller#key-1",
    "created": "2026-02-01T00:00:00Z",
    "proofValue": "z4LAqQ8DjwaKifj2maNKNGP8gzqU1vBpTCPccpBPjwMxtCpbZZmYgGxifoUEDfB3wN7RwLU4GGZ6gUYqxAtMg5U7P"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D520", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-yAdtdAylTJeboaalNVHc/SiHhfkqmQOFJCeg6sS+ngmoER294kC5nO3PnAtkNeTR", text: `{
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
      "digestSRI": "sha384-WPTZxJgJ8rR7EPGfdydwey1Pk5X9M63/OeYx667bNmClZBhjPGI6yKBD/w0go8ss"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "digestSRI": "sha384-1JsYandJWXaGVo3kLdVwx41r1NYJ/cFLaA8W61Kil/2HWleMOoY+8vd1azKJcKGv"
    }
  ],
  "credentialStatus": {
    "id": "https://producer.vc4qi.example/status/1#3",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "3",
    "statusListCredential": "https://producer.vc4qi.example/status/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://producer.vc4qi.example/controller#key-1",
    "created": "2026-02-01T00:00:00Z",
    "proofValue": "z5NZxiZA4ThdJfPkN2xeQpbZzhPWAkzsHBJYnhUS8VDURpAvfgSiWGFQdHowrnpJBdrhwzSc7dE7BSG8LVoUpD9y6"
  }
}
` }] };
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Mo(e) {
  return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function is(e, ...t) {
  if (!Mo(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function $s(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Lo(e, t) {
  is(e);
  const s = t.outputLen;
  if (e.length < s)
    throw new Error("digestInto() expects output buffer of length at least " + s);
}
function $t(...e) {
  for (let t = 0; t < e.length; t++)
    e[t].fill(0);
}
function Xn(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function je(e, t) {
  return e << 32 - t | e >>> t;
}
function Co(e) {
  if (typeof e != "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(e));
}
function Ya(e) {
  return typeof e == "string" && (e = Co(e)), is(e), e;
}
class Uo {
}
function as(e) {
  const t = (a) => e().update(Ya(a)).digest(), s = e();
  return t.outputLen = s.outputLen, t.blockLen = s.blockLen, t.create = () => e(), t;
}
function Vo(e, t, s, a) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, s, a);
  const p = BigInt(32), n = BigInt(4294967295), r = Number(s >> p & n), o = Number(s & n), d = a ? 4 : 0, h = a ? 0 : 4;
  e.setUint32(t + d, r, a), e.setUint32(t + h, o, a);
}
function zo(e, t, s) {
  return e & t ^ ~e & s;
}
function Fo(e, t, s) {
  return e & t ^ e & s ^ t & s;
}
class eo extends Uo {
  constructor(t, s, a, p) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = s, this.padOffset = a, this.isLE = p, this.buffer = new Uint8Array(t), this.view = Xn(this.buffer);
  }
  update(t) {
    $s(this), t = Ya(t), is(t);
    const { view: s, buffer: a, blockLen: p } = this, n = t.length;
    for (let r = 0; r < n; ) {
      const o = Math.min(p - this.pos, n - r);
      if (o === p) {
        const d = Xn(t);
        for (; p <= n - r; r += p)
          this.process(d, r);
        continue;
      }
      a.set(t.subarray(r, r + o), this.pos), this.pos += o, r += o, this.pos === p && (this.process(s, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    $s(this), Lo(t, this), this.finished = !0;
    const { buffer: s, view: a, blockLen: p, isLE: n } = this;
    let { pos: r } = this;
    s[r++] = 128, $t(this.buffer.subarray(r)), this.padOffset > p - r && (this.process(a, 0), r = 0);
    for (let w = r; w < p; w++)
      s[w] = 0;
    Vo(a, p - 8, BigInt(this.length * 8), n), this.process(a, 0);
    const o = Xn(t), d = this.outputLen;
    if (d % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const h = d / 4, v = this.get();
    if (h > v.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let w = 0; w < h; w++)
      o.setUint32(4 * w, v[w], n);
  }
  digest() {
    const { buffer: t, outputLen: s } = this;
    this.digestInto(t);
    const a = t.slice(0, s);
    return this.destroy(), a;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: s, buffer: a, length: p, finished: n, destroyed: r, pos: o } = this;
    return t.destroyed = r, t.finished = n, t.length = p, t.pos = o, p % s && t.buffer.set(a), t;
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
]), jt = /* @__PURE__ */ BigInt(2 ** 32 - 1), xs = /* @__PURE__ */ BigInt(32);
function Ho(e, t = !1) {
  return t ? { h: Number(e & jt), l: Number(e >> xs & jt) } : { h: Number(e >> xs & jt) | 0, l: Number(e & jt) | 0 };
}
function Jo(e, t = !1) {
  const s = e.length;
  let a = new Uint32Array(s), p = new Uint32Array(s);
  for (let n = 0; n < s; n++) {
    const { h: r, l: o } = Ho(e[n], t);
    [a[n], p[n]] = [r, o];
  }
  return [a, p];
}
const Is = (e, t, s) => e >>> s, Es = (e, t, s) => e << 32 - s | t >>> s, Xe = (e, t, s) => e >>> s | t << 32 - s, Ye = (e, t, s) => e << 32 - s | t >>> s, At = (e, t, s) => e << 64 - s | t >>> s - 32, Nt = (e, t, s) => e >>> s - 32 | t << 64 - s;
function Oe(e, t, s, a) {
  const p = (t >>> 0) + (a >>> 0);
  return { h: e + s + (p / 2 ** 32 | 0) | 0, l: p | 0 };
}
const Bo = (e, t, s) => (e >>> 0) + (t >>> 0) + (s >>> 0), Go = (e, t, s, a) => t + s + a + (e / 2 ** 32 | 0) | 0, Ko = (e, t, s, a) => (e >>> 0) + (t >>> 0) + (s >>> 0) + (a >>> 0), Zo = (e, t, s, a, p) => t + s + a + p + (e / 2 ** 32 | 0) | 0, Wo = (e, t, s, a, p) => (e >>> 0) + (t >>> 0) + (s >>> 0) + (a >>> 0) + (p >>> 0), Qo = (e, t, s, a, p, n) => t + s + a + p + n + (e / 2 ** 32 | 0) | 0, Xo = /* @__PURE__ */ Uint32Array.from([
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
class Yo extends eo {
  constructor(t = 32) {
    super(64, t, 8, !1), this.A = Ue[0] | 0, this.B = Ue[1] | 0, this.C = Ue[2] | 0, this.D = Ue[3] | 0, this.E = Ue[4] | 0, this.F = Ue[5] | 0, this.G = Ue[6] | 0, this.H = Ue[7] | 0;
  }
  get() {
    const { A: t, B: s, C: a, D: p, E: n, F: r, G: o, H: d } = this;
    return [t, s, a, p, n, r, o, d];
  }
  // prettier-ignore
  set(t, s, a, p, n, r, o, d) {
    this.A = t | 0, this.B = s | 0, this.C = a | 0, this.D = p | 0, this.E = n | 0, this.F = r | 0, this.G = o | 0, this.H = d | 0;
  }
  process(t, s) {
    for (let w = 0; w < 16; w++, s += 4)
      Ve[w] = t.getUint32(s, !1);
    for (let w = 16; w < 64; w++) {
      const f = Ve[w - 15], u = Ve[w - 2], b = je(f, 7) ^ je(f, 18) ^ f >>> 3, S = je(u, 17) ^ je(u, 19) ^ u >>> 10;
      Ve[w] = S + Ve[w - 7] + b + Ve[w - 16] | 0;
    }
    let { A: a, B: p, C: n, D: r, E: o, F: d, G: h, H: v } = this;
    for (let w = 0; w < 64; w++) {
      const f = je(o, 6) ^ je(o, 11) ^ je(o, 25), u = v + f + zo(o, d, h) + Xo[w] + Ve[w] | 0, S = (je(a, 2) ^ je(a, 13) ^ je(a, 22)) + Fo(a, p, n) | 0;
      v = h, h = d, d = o, o = r + u | 0, r = n, n = p, p = a, a = u + S | 0;
    }
    a = a + this.A | 0, p = p + this.B | 0, n = n + this.C | 0, r = r + this.D | 0, o = o + this.E | 0, d = d + this.F | 0, h = h + this.G | 0, v = v + this.H | 0, this.set(a, p, n, r, o, d, h, v);
  }
  roundClean() {
    $t(Ve);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), $t(this.buffer);
  }
}
const to = Jo([
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
].map((e) => BigInt(e))), ec = to[0], tc = to[1], ze = /* @__PURE__ */ new Uint32Array(80), Fe = /* @__PURE__ */ new Uint32Array(80);
class no extends eo {
  constructor(t = 64) {
    super(128, t, 16, !1), this.Ah = fe[0] | 0, this.Al = fe[1] | 0, this.Bh = fe[2] | 0, this.Bl = fe[3] | 0, this.Ch = fe[4] | 0, this.Cl = fe[5] | 0, this.Dh = fe[6] | 0, this.Dl = fe[7] | 0, this.Eh = fe[8] | 0, this.El = fe[9] | 0, this.Fh = fe[10] | 0, this.Fl = fe[11] | 0, this.Gh = fe[12] | 0, this.Gl = fe[13] | 0, this.Hh = fe[14] | 0, this.Hl = fe[15] | 0;
  }
  // prettier-ignore
  get() {
    const { Ah: t, Al: s, Bh: a, Bl: p, Ch: n, Cl: r, Dh: o, Dl: d, Eh: h, El: v, Fh: w, Fl: f, Gh: u, Gl: b, Hh: S, Hl: g } = this;
    return [t, s, a, p, n, r, o, d, h, v, w, f, u, b, S, g];
  }
  // prettier-ignore
  set(t, s, a, p, n, r, o, d, h, v, w, f, u, b, S, g) {
    this.Ah = t | 0, this.Al = s | 0, this.Bh = a | 0, this.Bl = p | 0, this.Ch = n | 0, this.Cl = r | 0, this.Dh = o | 0, this.Dl = d | 0, this.Eh = h | 0, this.El = v | 0, this.Fh = w | 0, this.Fl = f | 0, this.Gh = u | 0, this.Gl = b | 0, this.Hh = S | 0, this.Hl = g | 0;
  }
  process(t, s) {
    for (let l = 0; l < 16; l++, s += 4)
      ze[l] = t.getUint32(s), Fe[l] = t.getUint32(s += 4);
    for (let l = 16; l < 80; l++) {
      const i = ze[l - 15] | 0, c = Fe[l - 15] | 0, y = Xe(i, c, 1) ^ Xe(i, c, 8) ^ Is(i, c, 7), x = Ye(i, c, 1) ^ Ye(i, c, 8) ^ Es(i, c, 7), $ = ze[l - 2] | 0, j = Fe[l - 2] | 0, N = Xe($, j, 19) ^ At($, j, 61) ^ Is($, j, 6), k = Ye($, j, 19) ^ Nt($, j, 61) ^ Es($, j, 6), C = Ko(x, k, Fe[l - 7], Fe[l - 16]), T = Zo(C, y, N, ze[l - 7], ze[l - 16]);
      ze[l] = T | 0, Fe[l] = C | 0;
    }
    let { Ah: a, Al: p, Bh: n, Bl: r, Ch: o, Cl: d, Dh: h, Dl: v, Eh: w, El: f, Fh: u, Fl: b, Gh: S, Gl: g, Hh: _, Hl: m } = this;
    for (let l = 0; l < 80; l++) {
      const i = Xe(w, f, 14) ^ Xe(w, f, 18) ^ At(w, f, 41), c = Ye(w, f, 14) ^ Ye(w, f, 18) ^ Nt(w, f, 41), y = w & u ^ ~w & S, x = f & b ^ ~f & g, $ = Wo(m, c, x, tc[l], Fe[l]), j = Qo($, _, i, y, ec[l], ze[l]), N = $ | 0, k = Xe(a, p, 28) ^ At(a, p, 34) ^ At(a, p, 39), C = Ye(a, p, 28) ^ Nt(a, p, 34) ^ Nt(a, p, 39), T = a & n ^ a & o ^ n & o, O = p & r ^ p & d ^ r & d;
      _ = S | 0, m = g | 0, S = u | 0, g = b | 0, u = w | 0, b = f | 0, { h: w, l: f } = Oe(h | 0, v | 0, j | 0, N | 0), h = o | 0, v = d | 0, o = n | 0, d = r | 0, n = a | 0, r = p | 0;
      const B = Bo(N, C, O);
      a = Go(B, j, k, T), p = B | 0;
    }
    ({ h: a, l: p } = Oe(this.Ah | 0, this.Al | 0, a | 0, p | 0)), { h: n, l: r } = Oe(this.Bh | 0, this.Bl | 0, n | 0, r | 0), { h: o, l: d } = Oe(this.Ch | 0, this.Cl | 0, o | 0, d | 0), { h, l: v } = Oe(this.Dh | 0, this.Dl | 0, h | 0, v | 0), { h: w, l: f } = Oe(this.Eh | 0, this.El | 0, w | 0, f | 0), { h: u, l: b } = Oe(this.Fh | 0, this.Fl | 0, u | 0, b | 0), { h: S, l: g } = Oe(this.Gh | 0, this.Gl | 0, S | 0, g | 0), { h: _, l: m } = Oe(this.Hh | 0, this.Hl | 0, _ | 0, m | 0), this.set(a, p, n, r, o, d, h, v, w, f, u, b, S, g, _, m);
  }
  roundClean() {
    $t(ze, Fe);
  }
  destroy() {
    $t(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class nc extends no {
  constructor() {
    super(48), this.Ah = ue[0] | 0, this.Al = ue[1] | 0, this.Bh = ue[2] | 0, this.Bl = ue[3] | 0, this.Ch = ue[4] | 0, this.Cl = ue[5] | 0, this.Dh = ue[6] | 0, this.Dl = ue[7] | 0, this.Eh = ue[8] | 0, this.El = ue[9] | 0, this.Fh = ue[10] | 0, this.Fl = ue[11] | 0, this.Gh = ue[12] | 0, this.Gl = ue[13] | 0, this.Hh = ue[14] | 0, this.Hl = ue[15] | 0;
  }
}
const rc = /* @__PURE__ */ as(() => new Yo()), sc = /* @__PURE__ */ as(() => new no()), ic = /* @__PURE__ */ as(() => new nc()), ac = rc, oc = sc, cc = ic;
class dc {
  constructor(t) {
    Pe(this, "_chunks", []);
    Pe(this, "_algo");
    this._algo = t === "sha384" ? "sha384" : t === "sha512" ? "sha512" : "sha256";
  }
  update(t, s) {
    const a = typeof t == "string" ? new TextEncoder().encode(t) : t;
    return this._chunks.push(a), this;
  }
  digest(t) {
    const s = this._chunks.reduce((r, o) => r + o.length, 0), a = new Uint8Array(s);
    let p = 0;
    for (const r of this._chunks)
      a.set(r, p), p += r.length;
    let n;
    return this._algo === "sha384" ? n = cc(a) : this._algo === "sha512" ? n = oc(a) : n = ac(a), t === "base64" ? btoa(String.fromCharCode(...n)) : t === "hex" ? Array.from(n).map((r) => r.toString(16).padStart(2, "0")).join("") : n;
  }
}
function Yr(e) {
  return new dc(e);
}
class be extends Error {
  constructor(t, s) {
    super(s), this.code = t, this.name = "CatalogError";
  }
}
function lc(e, t) {
  if (e.trim().length === 0)
    throw new be("INVALID_RESOURCE", `${t} must be nonempty.`);
}
function Un(e) {
  return `sha384-${Yr("sha384").update(e).digest("base64")}`;
}
var ct;
class uc {
  constructor(t) {
    Rt(this, ct, /* @__PURE__ */ new Map());
    for (const s of t) {
      for (const [p, n] of Object.entries({
        uri: s.uri,
        mediaType: s.mediaType,
        origin: s.origin,
        version: s.version
      })) lc(n, p);
      if (Re(this, ct).has(s.uri))
        throw new be("DUPLICATE_RESOURCE", `Duplicate static resource: ${s.uri}`);
      const a = Un(s.bytes);
      if (a !== s.digestSRI)
        throw new be(
          "INTEGRITY_MISMATCH",
          `Static resource ${s.uri} has ${a}; expected ${s.digestSRI}.`
        );
      Re(this, ct).set(s.uri, { ...s, bytes: Uint8Array.from(s.bytes) });
    }
  }
  openSession(t) {
    if (!Number.isSafeInteger(t.maxResources) || t.maxResources <= 0 || !Number.isSafeInteger(t.maxBytes) || t.maxBytes <= 0)
      throw new be("INVALID_RESOURCE", "Catalog budgets must be positive safe integers.");
    return new fc(Re(this, ct), Object.freeze({ ...t }));
  }
}
ct = new WeakMap();
var dt, lt;
class fc {
  constructor(t, s) {
    Rt(this, dt, 0);
    Rt(this, lt, 0);
    this.resources = t, this.budget = s;
  }
  get usage() {
    return Object.freeze({ resources: Re(this, dt), bytes: Re(this, lt) });
  }
  resolve(t) {
    const s = this.resources.get(t);
    if (!s)
      throw new be("RESOURCE_NOT_FOUND", `Static resource is not installed: ${t}`);
    if (Re(this, dt) + 1 > this.budget.maxResources || Re(this, lt) + s.bytes.byteLength > this.budget.maxBytes)
      throw new be("RESOURCE_BUDGET_EXCEEDED", `Static resource budget exceeded at ${t}.`);
    return Qn(this, dt, Re(this, dt) + 1), Qn(this, lt, Re(this, lt) + s.bytes.byteLength), { ...s, bytes: Uint8Array.from(s.bytes) };
  }
}
dt = new WeakMap(), lt = new WeakMap();
function pc(e) {
  return async (t) => {
    const s = e.resolve(t);
    if (s.mediaType !== "application/json" && s.mediaType !== "application/ld+json" && !s.mediaType.endsWith("+json"))
      throw new be(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} has unsupported media type ${s.mediaType}.`
      );
    let a;
    try {
      const p = new TextDecoder("utf-8", { fatal: !0 }).decode(s.bytes);
      a = JSON.parse(p);
    } catch (p) {
      throw new be(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} is not valid UTF-8 JSON: ${String(p)}.`
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
function Pt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function ro(e) {
  if (e !== null && typeof e == "object") {
    for (const t of Object.values(e)) ro(t);
    Object.freeze(e);
  }
  return e;
}
function hc(e) {
  if (!Pt(e)) throw new TypeError("Binding manifest must be an object.");
  if (Object.keys(e).length !== Yn.length || Yn.some((s) => !Object.hasOwn(e, s)))
    throw new TypeError("Binding manifest must contain exactly the supported top-level categories.");
  if (typeof e.id != "string" || e.id.length === 0 || typeof e.version != "string" || e.version.length === 0 || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Binding manifest identity, version, or status is invalid.");
  if (!Pt(e.installation) || e.installation.status !== "incomplete" && e.installation.status !== "installable" || typeof e.installation.reason != "string" || e.installation.reason.length === 0 || !Array.isArray(e.installation.pendingResources) || e.installation.pendingResources.some((s) => typeof s != "string" || s.length === 0))
    throw new TypeError("Binding manifest installation state is invalid.");
  if (!Array.isArray(e.factMappings) || e.factMappings.length === 0 || e.factMappings.some((s) => !Pt(s)))
    throw new TypeError("Binding manifest factMappings must be a nonempty object array.");
  for (const s of Yn.slice(4))
    if (!(s === "installation" || s === "factMappings") && (!Pt(e[s]) || Object.keys(e[s]).length === 0))
      throw new TypeError(`Binding manifest ${s} must be a nonempty object.`);
  return ro(structuredClone(e));
}
const Rs = "https://www.w3.org/ns/credentials/v2", mc = "https://vc4qi.example/contexts/rm/1", et = "https://vc4qi.example/schemas/rm/1/", yc = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", gc = BigInt(58);
function vc(e) {
  if (e.length === 0) return new Uint8Array(0);
  let t = 0;
  for (const r of e) {
    if (r !== "1") break;
    t++;
  }
  let s = 0n;
  for (const r of e) {
    const o = yc.indexOf(r);
    if (o === -1) throw new Error(`Invalid base58btc character: '${r}'`);
    s = s * gc + BigInt(o);
  }
  const a = [];
  for (; s > 0n; )
    a.push(Number(s & 0xffn)), s >>= 8n;
  a.reverse();
  const p = Uint8Array.from(a), n = new Uint8Array(t + p.length);
  return n.set(p, t), n;
}
function so(e) {
  if (!e.startsWith("z"))
    throw new Error(`Expected multibase base58btc prefix 'z', got '${e[0]}'`);
  return vc(e.slice(1));
}
const js = [237, 1], bc = ["revoked", "expires"];
function ce(e, t, s, a = {}) {
  return Object.freeze({ state: e, code: t, reason: s, ...a });
}
function Pn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function wc(e) {
  if (typeof e == "string" && e.length > 0) return e;
  if (Pn(e) && typeof e.id == "string" && e.id.length > 0) return e.id;
}
function _c(e) {
  const t = e.indexOf("#");
  if (!(t <= 0 || t === e.length - 1)) {
    try {
      const s = new URL(e);
      if (s.protocol !== "https:" && s.protocol !== "did:") return;
    } catch {
      return;
    }
    return e.slice(0, t);
  }
}
function Sc(e) {
  if (typeof e != "string" || !e.startsWith("z")) return;
  let t;
  try {
    t = so(e);
  } catch {
    return;
  }
  if (!(t.length !== 34 || t[0] !== js[0] || t[1] !== js[1]))
    return t.slice(2);
}
function $c(e, t, s) {
  const a = wc(e);
  if (a === void 0)
    return ce("not_established", "ISSUER_MISSING", "The credential has no issuer identifier.");
  if (typeof t != "string")
    return ce("contradicted", "MALFORMED_METHOD", "The proof names no verification method.");
  const p = _c(t);
  if (p === void 0)
    return ce(
      "contradicted",
      "MALFORMED_METHOD",
      `Verification method ${t} is not an absolute URL with a fragment.`
    );
  if (p !== a)
    return ce(
      "contradicted",
      "NOT_ISSUER_CONTROLLER",
      `Verification method ${t} is not in issuer ${a}'s controller document.`
    );
  let n, r;
  try {
    const f = s.resolve(p);
    r = f.digestSRI, n = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(f.bytes));
  } catch (f) {
    return f instanceof be ? ce(
      "not_established",
      "CONTROLLER_NOT_INSTALLED",
      `Controller document ${p} is not available: ${f.code}.`
    ) : ce(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${p} is not valid UTF-8 JSON.`
    );
  }
  if (!Pn(n))
    return ce(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${p} is not a JSON object.`
    );
  if (n.id !== p)
    return ce(
      "contradicted",
      "CONTROLLER_ID_MISMATCH",
      `Controller document at ${p} identifies itself as ${String(n.id)}.`
    );
  const d = (Array.isArray(n.verificationMethod) ? n.verificationMethod : []).filter((f) => Pn(f) && f.id === t);
  if (d.length === 0)
    return ce(
      "contradicted",
      "METHOD_NOT_FOUND",
      `${t} is not listed in its controller document.`
    );
  if (d.length > 1)
    return ce(
      "contradicted",
      "METHOD_AMBIGUOUS",
      `${t} is listed more than once in its controller document.`
    );
  const h = d[0];
  if (h.type !== "Multikey")
    return ce(
      "not_established",
      "METHOD_TYPE_UNSUPPORTED",
      `Verification method type ${String(h.type)} is not supported; Multikey is required.`
    );
  if (h.controller !== p)
    return ce(
      "contradicted",
      "METHOD_CONTROLLER_MISMATCH",
      `${t} is controlled by ${String(h.controller)}, not ${p}.`
    );
  if (bc.some((f) => Object.hasOwn(h, f)))
    return ce(
      "not_established",
      "METHOD_LIFECYCLE_UNSUPPORTED",
      "Key revocation/expiry metadata is not supported in the initial slice."
    );
  const v = Sc(h.publicKeyMultibase);
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
  ) : w.some((f) => Pn(f) && f.id === t) ? ce(
    "not_established",
    "EMBEDDED_METHOD_UNSUPPORTED",
    "Embedded assertionMethod entries are not supported; a reference is required."
  ) : ce(
    "contradicted",
    "NOT_ASSERTION_METHOD",
    `${t} is not authorized for assertionMethod.`
  );
}
function xc(e, t) {
  if (e.length === 0)
    throw new TypeError(`${t} requires at least one semantic state.`);
  for (const s of e)
    if (!["established", "contradicted", "not_established"].includes(s))
      throw new TypeError(`${t} received unsupported semantic state: ${String(s)}.`);
}
function Ze(e) {
  return xc(e, "semanticAnd"), e.includes("contradicted") ? "contradicted" : e.every((t) => t === "established") ? "established" : "not_established";
}
var As = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function os(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ic(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var s = function a() {
      return this instanceof a ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    s.prototype = t.prototype;
  } else s = {};
  return Object.defineProperty(s, "__esModule", { value: !0 }), Object.keys(e).forEach(function(a) {
    var p = Object.getOwnPropertyDescriptor(e, a);
    Object.defineProperty(s, a, p.get ? p : {
      enumerable: !0,
      get: function() {
        return e[a];
      }
    });
  }), s;
}
var Ot = { exports: {} }, er = {}, qe = {}, Be = {}, tr = {}, nr = {}, rr = {}, Ns;
function Dn() {
  return Ns || (Ns = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class s extends t {
      constructor(m) {
        if (super(), !e.IDENTIFIER.test(m))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = m;
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
    e.Name = s;
    class a extends t {
      constructor(m) {
        super(), this._items = typeof m == "string" ? [m] : m;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const m = this._items[0];
        return m === "" || m === '""';
      }
      get str() {
        var m;
        return (m = this._str) !== null && m !== void 0 ? m : this._str = this._items.reduce((l, i) => `${l}${i}`, "");
      }
      get names() {
        var m;
        return (m = this._names) !== null && m !== void 0 ? m : this._names = this._items.reduce((l, i) => (i instanceof s && (l[i.str] = (l[i.str] || 0) + 1), l), {});
      }
    }
    e._Code = a, e.nil = new a("");
    function p(_, ...m) {
      const l = [_[0]];
      let i = 0;
      for (; i < m.length; )
        o(l, m[i]), l.push(_[++i]);
      return new a(l);
    }
    e._ = p;
    const n = new a("+");
    function r(_, ...m) {
      const l = [u(_[0])];
      let i = 0;
      for (; i < m.length; )
        l.push(n), o(l, m[i]), l.push(n, u(_[++i]));
      return d(l), new a(l);
    }
    e.str = r;
    function o(_, m) {
      m instanceof a ? _.push(...m._items) : m instanceof s ? _.push(m) : _.push(w(m));
    }
    e.addCodeArg = o;
    function d(_) {
      let m = 1;
      for (; m < _.length - 1; ) {
        if (_[m] === n) {
          const l = h(_[m - 1], _[m + 1]);
          if (l !== void 0) {
            _.splice(m - 1, 3, l);
            continue;
          }
          _[m++] = "+";
        }
        m++;
      }
    }
    function h(_, m) {
      if (m === '""')
        return _;
      if (_ === '""')
        return m;
      if (typeof _ == "string")
        return m instanceof s || _[_.length - 1] !== '"' ? void 0 : typeof m != "string" ? `${_.slice(0, -1)}${m}"` : m[0] === '"' ? _.slice(0, -1) + m.slice(1) : void 0;
      if (typeof m == "string" && m[0] === '"' && !(_ instanceof s))
        return `"${_}${m.slice(1)}`;
    }
    function v(_, m) {
      return m.emptyStr() ? _ : _.emptyStr() ? m : r`${_}${m}`;
    }
    e.strConcat = v;
    function w(_) {
      return typeof _ == "number" || typeof _ == "boolean" || _ === null ? _ : u(Array.isArray(_) ? _.join(",") : _);
    }
    function f(_) {
      return new a(u(_));
    }
    e.stringify = f;
    function u(_) {
      return JSON.stringify(_).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = u;
    function b(_) {
      return typeof _ == "string" && e.IDENTIFIER.test(_) ? new a(`.${_}`) : p`[${_}]`;
    }
    e.getProperty = b;
    function S(_) {
      if (typeof _ == "string" && e.IDENTIFIER.test(_))
        return new a(`${_}`);
      throw new Error(`CodeGen: invalid export name: ${_}, use explicit $id name mapping`);
    }
    e.getEsmExportName = S;
    function g(_) {
      return new a(_.toString());
    }
    e.regexpCode = g;
  })(rr)), rr;
}
var sr = {}, Ps;
function Os() {
  return Ps || (Ps = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Dn();
    class s extends Error {
      constructor(h) {
        super(`CodeGen: "code" for ${h} not defined`), this.value = h.value;
      }
    }
    var a;
    (function(d) {
      d[d.Started = 0] = "Started", d[d.Completed = 1] = "Completed";
    })(a || (e.UsedValueState = a = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class p {
      constructor({ prefixes: h, parent: v } = {}) {
        this._names = {}, this._prefixes = h, this._parent = v;
      }
      toName(h) {
        return h instanceof t.Name ? h : this.name(h);
      }
      name(h) {
        return new t.Name(this._newName(h));
      }
      _newName(h) {
        const v = this._names[h] || this._nameGroup(h);
        return `${h}${v.index++}`;
      }
      _nameGroup(h) {
        var v, w;
        if (!((w = (v = this._parent) === null || v === void 0 ? void 0 : v._prefixes) === null || w === void 0) && w.has(h) || this._prefixes && !this._prefixes.has(h))
          throw new Error(`CodeGen: prefix "${h}" is not allowed in this scope`);
        return this._names[h] = { prefix: h, index: 0 };
      }
    }
    e.Scope = p;
    class n extends t.Name {
      constructor(h, v) {
        super(v), this.prefix = h;
      }
      setValue(h, { property: v, itemIndex: w }) {
        this.value = h, this.scopePath = (0, t._)`.${new t.Name(v)}[${w}]`;
      }
    }
    e.ValueScopeName = n;
    const r = (0, t._)`\n`;
    class o extends p {
      constructor(h) {
        super(h), this._values = {}, this._scope = h.scope, this.opts = { ...h, _n: h.lines ? r : t.nil };
      }
      get() {
        return this._scope;
      }
      name(h) {
        return new n(h, this._newName(h));
      }
      value(h, v) {
        var w;
        if (v.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const f = this.toName(h), { prefix: u } = f, b = (w = v.key) !== null && w !== void 0 ? w : v.ref;
        let S = this._values[u];
        if (S) {
          const m = S.get(b);
          if (m)
            return m;
        } else
          S = this._values[u] = /* @__PURE__ */ new Map();
        S.set(b, f);
        const g = this._scope[u] || (this._scope[u] = []), _ = g.length;
        return g[_] = v.ref, f.setValue(v, { property: u, itemIndex: _ }), f;
      }
      getValue(h, v) {
        const w = this._values[h];
        if (w)
          return w.get(v);
      }
      scopeRefs(h, v = this._values) {
        return this._reduceValues(v, (w) => {
          if (w.scopePath === void 0)
            throw new Error(`CodeGen: name "${w}" has no value`);
          return (0, t._)`${h}${w.scopePath}`;
        });
      }
      scopeCode(h = this._values, v, w) {
        return this._reduceValues(h, (f) => {
          if (f.value === void 0)
            throw new Error(`CodeGen: name "${f}" has no value`);
          return f.value.code;
        }, v, w);
      }
      _reduceValues(h, v, w = {}, f) {
        let u = t.nil;
        for (const b in h) {
          const S = h[b];
          if (!S)
            continue;
          const g = w[b] = w[b] || /* @__PURE__ */ new Map();
          S.forEach((_) => {
            if (g.has(_))
              return;
            g.set(_, a.Started);
            let m = v(_);
            if (m) {
              const l = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              u = (0, t._)`${u}${l} ${_} = ${m};${this.opts._n}`;
            } else if (m = f?.(_))
              u = (0, t._)`${u}${m}${this.opts._n}`;
            else
              throw new s(_);
            g.set(_, a.Completed);
          });
        }
        return u;
      }
    }
    e.ValueScope = o;
  })(sr)), sr;
}
var qs;
function ee() {
  return qs || (qs = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Dn(), s = /* @__PURE__ */ Os();
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
    var p = /* @__PURE__ */ Os();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return p.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return p.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return p.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return p.varKinds;
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
      optimizeNames(E, I) {
        return this;
      }
    }
    class r extends n {
      constructor(E, I, R) {
        super(), this.varKind = E, this.name = I, this.rhs = R;
      }
      render({ es5: E, _n: I }) {
        const R = E ? s.varKinds.var : this.varKind, M = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${R} ${this.name}${M};` + I;
      }
      optimizeNames(E, I) {
        if (E[this.name.str])
          return this.rhs && (this.rhs = O(this.rhs, E, I)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class o extends n {
      constructor(E, I, R) {
        super(), this.lhs = E, this.rhs = I, this.sideEffects = R;
      }
      render({ _n: E }) {
        return `${this.lhs} = ${this.rhs};` + E;
      }
      optimizeNames(E, I) {
        if (!(this.lhs instanceof t.Name && !E[this.lhs.str] && !this.sideEffects))
          return this.rhs = O(this.rhs, E, I), this;
      }
      get names() {
        const E = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return T(E, this.rhs);
      }
    }
    class d extends o {
      constructor(E, I, R, M) {
        super(E, R, M), this.op = I;
      }
      render({ _n: E }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + E;
      }
    }
    class h extends n {
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
    class f extends n {
      constructor(E) {
        super(), this.code = E;
      }
      render({ _n: E }) {
        return `${this.code};` + E;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(E, I) {
        return this.code = O(this.code, E, I), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class u extends n {
      constructor(E = []) {
        super(), this.nodes = E;
      }
      render(E) {
        return this.nodes.reduce((I, R) => I + R.render(E), "");
      }
      optimizeNodes() {
        const { nodes: E } = this;
        let I = E.length;
        for (; I--; ) {
          const R = E[I].optimizeNodes();
          Array.isArray(R) ? E.splice(I, 1, ...R) : R ? E[I] = R : E.splice(I, 1);
        }
        return E.length > 0 ? this : void 0;
      }
      optimizeNames(E, I) {
        const { nodes: R } = this;
        let M = R.length;
        for (; M--; ) {
          const J = R[M];
          J.optimizeNames(E, I) || (B(E, J.names), R.splice(M, 1));
        }
        return R.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((E, I) => C(E, I.names), {});
      }
    }
    class b extends u {
      render(E) {
        return "{" + E._n + super.render(E) + "}" + E._n;
      }
    }
    class S extends u {
    }
    class g extends b {
    }
    g.kind = "else";
    class _ extends b {
      constructor(E, I) {
        super(I), this.condition = E;
      }
      render(E) {
        let I = `if(${this.condition})` + super.render(E);
        return this.else && (I += "else " + this.else.render(E)), I;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const E = this.condition;
        if (E === !0)
          return this.nodes;
        let I = this.else;
        if (I) {
          const R = I.optimizeNodes();
          I = this.else = Array.isArray(R) ? new g(R) : R;
        }
        if (I)
          return E === !1 ? I instanceof _ ? I : I.nodes : this.nodes.length ? this : new _(P(E), I instanceof _ ? [I] : I.nodes);
        if (!(E === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(E, I) {
        var R;
        if (this.else = (R = this.else) === null || R === void 0 ? void 0 : R.optimizeNames(E, I), !!(super.optimizeNames(E, I) || this.else))
          return this.condition = O(this.condition, E, I), this;
      }
      get names() {
        const E = super.names;
        return T(E, this.condition), this.else && C(E, this.else.names), E;
      }
    }
    _.kind = "if";
    class m extends b {
    }
    m.kind = "for";
    class l extends m {
      constructor(E) {
        super(), this.iteration = E;
      }
      render(E) {
        return `for(${this.iteration})` + super.render(E);
      }
      optimizeNames(E, I) {
        if (super.optimizeNames(E, I))
          return this.iteration = O(this.iteration, E, I), this;
      }
      get names() {
        return C(super.names, this.iteration.names);
      }
    }
    class i extends m {
      constructor(E, I, R, M) {
        super(), this.varKind = E, this.name = I, this.from = R, this.to = M;
      }
      render(E) {
        const I = E.es5 ? s.varKinds.var : this.varKind, { name: R, from: M, to: J } = this;
        return `for(${I} ${R}=${M}; ${R}<${J}; ${R}++)` + super.render(E);
      }
      get names() {
        const E = T(super.names, this.from);
        return T(E, this.to);
      }
    }
    class c extends m {
      constructor(E, I, R, M) {
        super(), this.loop = E, this.varKind = I, this.name = R, this.iterable = M;
      }
      render(E) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(E);
      }
      optimizeNames(E, I) {
        if (super.optimizeNames(E, I))
          return this.iterable = O(this.iterable, E, I), this;
      }
      get names() {
        return C(super.names, this.iterable.names);
      }
    }
    class y extends b {
      constructor(E, I, R) {
        super(), this.name = E, this.args = I, this.async = R;
      }
      render(E) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(E);
      }
    }
    y.kind = "func";
    class x extends u {
      render(E) {
        return "return " + super.render(E);
      }
    }
    x.kind = "return";
    class $ extends b {
      render(E) {
        let I = "try" + super.render(E);
        return this.catch && (I += this.catch.render(E)), this.finally && (I += this.finally.render(E)), I;
      }
      optimizeNodes() {
        var E, I;
        return super.optimizeNodes(), (E = this.catch) === null || E === void 0 || E.optimizeNodes(), (I = this.finally) === null || I === void 0 || I.optimizeNodes(), this;
      }
      optimizeNames(E, I) {
        var R, M;
        return super.optimizeNames(E, I), (R = this.catch) === null || R === void 0 || R.optimizeNames(E, I), (M = this.finally) === null || M === void 0 || M.optimizeNames(E, I), this;
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
    class N extends b {
      render(E) {
        return "finally" + super.render(E);
      }
    }
    N.kind = "finally";
    class k {
      constructor(E, I = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...I, _n: I.lines ? `
` : "" }, this._extScope = E, this._scope = new s.Scope({ parent: E }), this._nodes = [new S()];
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
      scopeValue(E, I) {
        const R = this._extScope.value(E, I);
        return (this._values[R.prefix] || (this._values[R.prefix] = /* @__PURE__ */ new Set())).add(R), R;
      }
      getScopeValue(E, I) {
        return this._extScope.getValue(E, I);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(E) {
        return this._extScope.scopeRefs(E, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(E, I, R, M) {
        const J = this._scope.toName(I);
        return R !== void 0 && M && (this._constants[J.str] = R), this._leafNode(new r(E, J, R)), J;
      }
      // `const` declaration (`var` in es5 mode)
      const(E, I, R) {
        return this._def(s.varKinds.const, E, I, R);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(E, I, R) {
        return this._def(s.varKinds.let, E, I, R);
      }
      // `var` declaration with optional assignment
      var(E, I, R) {
        return this._def(s.varKinds.var, E, I, R);
      }
      // assignment code
      assign(E, I, R) {
        return this._leafNode(new o(E, I, R));
      }
      // `+=` code
      add(E, I) {
        return this._leafNode(new d(E, e.operators.ADD, I));
      }
      // appends passed SafeExpr to code or executes Block
      code(E) {
        return typeof E == "function" ? E() : E !== t.nil && this._leafNode(new f(E)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...E) {
        const I = ["{"];
        for (const [R, M] of E)
          I.length > 1 && I.push(","), I.push(R), (R !== M || this.opts.es5) && (I.push(":"), (0, t.addCodeArg)(I, M));
        return I.push("}"), new t._Code(I);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(E, I, R) {
        if (this._blockNode(new _(E)), I && R)
          this.code(I).else().code(R).endIf();
        else if (I)
          this.code(I).endIf();
        else if (R)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(E) {
        return this._elseNode(new _(E));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new g());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(_, g);
      }
      _for(E, I) {
        return this._blockNode(E), I && this.code(I).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(E, I) {
        return this._for(new l(E), I);
      }
      // `for` statement for a range of values
      forRange(E, I, R, M, J = this.opts.es5 ? s.varKinds.var : s.varKinds.let) {
        const W = this._scope.toName(E);
        return this._for(new i(J, W, I, R), () => M(W));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(E, I, R, M = s.varKinds.const) {
        const J = this._scope.toName(E);
        if (this.opts.es5) {
          const W = I instanceof t.Name ? I : this.var("_arr", I);
          return this.forRange("_i", 0, (0, t._)`${W}.length`, (K) => {
            this.var(J, (0, t._)`${W}[${K}]`), R(J);
          });
        }
        return this._for(new c("of", M, J, I), () => R(J));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(E, I, R, M = this.opts.es5 ? s.varKinds.var : s.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(E, (0, t._)`Object.keys(${I})`, R);
        const J = this._scope.toName(E);
        return this._for(new c("in", M, J, I), () => R(J));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(m);
      }
      // `label` statement
      label(E) {
        return this._leafNode(new h(E));
      }
      // `break` statement
      break(E) {
        return this._leafNode(new v(E));
      }
      // `return` statement
      return(E) {
        const I = new x();
        if (this._blockNode(I), this.code(E), I.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(x);
      }
      // `try` statement
      try(E, I, R) {
        if (!I && !R)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const M = new $();
        if (this._blockNode(M), this.code(E), I) {
          const J = this.name("e");
          this._currNode = M.catch = new j(J), I(J);
        }
        return R && (this._currNode = M.finally = new N(), this.code(R)), this._endBlockNode(j, N);
      }
      // `throw` statement
      throw(E) {
        return this._leafNode(new w(E));
      }
      // start self-balancing block
      block(E, I) {
        return this._blockStarts.push(this._nodes.length), E && this.code(E).endBlock(I), this;
      }
      // end the current self-balancing block
      endBlock(E) {
        const I = this._blockStarts.pop();
        if (I === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const R = this._nodes.length - I;
        if (R < 0 || E !== void 0 && R !== E)
          throw new Error(`CodeGen: wrong number of nodes: ${R} vs ${E} expected`);
        return this._nodes.length = I, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(E, I = t.nil, R, M) {
        return this._blockNode(new y(E, I, R)), M && this.code(M).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(y);
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
      _endBlockNode(E, I) {
        const R = this._currNode;
        if (R instanceof E || I && R instanceof I)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${I ? `${E.kind}/${I.kind}` : E.kind}"`);
      }
      _elseNode(E) {
        const I = this._currNode;
        if (!(I instanceof _))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = I.else = E, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const E = this._nodes;
        return E[E.length - 1];
      }
      set _currNode(E) {
        const I = this._nodes;
        I[I.length - 1] = E;
      }
    }
    e.CodeGen = k;
    function C(D, E) {
      for (const I in E)
        D[I] = (D[I] || 0) + (E[I] || 0);
      return D;
    }
    function T(D, E) {
      return E instanceof t._CodeOrName ? C(D, E.names) : D;
    }
    function O(D, E, I) {
      if (D instanceof t.Name)
        return R(D);
      if (!M(D))
        return D;
      return new t._Code(D._items.reduce((J, W) => (W instanceof t.Name && (W = R(W)), W instanceof t._Code ? J.push(...W._items) : J.push(W), J), []));
      function R(J) {
        const W = I[J.str];
        return W === void 0 || E[J.str] !== 1 ? J : (delete E[J.str], W);
      }
      function M(J) {
        return J instanceof t._Code && J._items.some((W) => W instanceof t.Name && E[W.str] === 1 && I[W.str] !== void 0);
      }
    }
    function B(D, E) {
      for (const I in E)
        D[I] = (D[I] || 0) - (E[I] || 0);
    }
    function P(D) {
      return typeof D == "boolean" || typeof D == "number" || D === null ? !D : (0, t._)`!${U(D)}`;
    }
    e.not = P;
    const H = q(e.operators.AND);
    function F(...D) {
      return D.reduce(H);
    }
    e.and = F;
    const G = q(e.operators.OR);
    function A(...D) {
      return D.reduce(G);
    }
    e.or = A;
    function q(D) {
      return (E, I) => E === t.nil ? I : I === t.nil ? E : (0, t._)`${U(E)} ${D} ${U(I)}`;
    }
    function U(D) {
      return D instanceof t.Name ? D : (0, t._)`(${D})`;
    }
  })(nr)), nr;
}
var te = {}, Ts;
function ne() {
  if (Ts) return te;
  Ts = 1, Object.defineProperty(te, "__esModule", { value: !0 }), te.checkStrictMode = te.getErrorPath = te.Type = te.useFunc = te.setEvaluated = te.evaluatedPropsToName = te.mergeEvaluated = te.eachItem = te.unescapeJsonPointer = te.escapeJsonPointer = te.escapeFragment = te.unescapeFragment = te.schemaRefOrVal = te.schemaHasRulesButRef = te.schemaHasRules = te.checkUnknownRules = te.alwaysValidSchema = te.toHash = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Dn();
  function s(c) {
    const y = {};
    for (const x of c)
      y[x] = !0;
    return y;
  }
  te.toHash = s;
  function a(c, y) {
    return typeof y == "boolean" ? y : Object.keys(y).length === 0 ? !0 : (p(c, y), !n(y, c.self.RULES.all));
  }
  te.alwaysValidSchema = a;
  function p(c, y = c.schema) {
    const { opts: x, self: $ } = c;
    if (!x.strictSchema || typeof y == "boolean")
      return;
    const j = $.RULES.keywords;
    for (const N in y)
      j[N] || i(c, `unknown keyword: "${N}"`);
  }
  te.checkUnknownRules = p;
  function n(c, y) {
    if (typeof c == "boolean")
      return !c;
    for (const x in c)
      if (y[x])
        return !0;
    return !1;
  }
  te.schemaHasRules = n;
  function r(c, y) {
    if (typeof c == "boolean")
      return !c;
    for (const x in c)
      if (x !== "$ref" && y.all[x])
        return !0;
    return !1;
  }
  te.schemaHasRulesButRef = r;
  function o({ topSchemaRef: c, schemaPath: y }, x, $, j) {
    if (!j) {
      if (typeof x == "number" || typeof x == "boolean")
        return x;
      if (typeof x == "string")
        return (0, e._)`${x}`;
    }
    return (0, e._)`${c}${y}${(0, e.getProperty)($)}`;
  }
  te.schemaRefOrVal = o;
  function d(c) {
    return w(decodeURIComponent(c));
  }
  te.unescapeFragment = d;
  function h(c) {
    return encodeURIComponent(v(c));
  }
  te.escapeFragment = h;
  function v(c) {
    return typeof c == "number" ? `${c}` : c.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  te.escapeJsonPointer = v;
  function w(c) {
    return c.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  te.unescapeJsonPointer = w;
  function f(c, y) {
    if (Array.isArray(c))
      for (const x of c)
        y(x);
    else
      y(c);
  }
  te.eachItem = f;
  function u({ mergeNames: c, mergeToName: y, mergeValues: x, resultToName: $ }) {
    return (j, N, k, C) => {
      const T = k === void 0 ? N : k instanceof e.Name ? (N instanceof e.Name ? c(j, N, k) : y(j, N, k), k) : N instanceof e.Name ? (y(j, k, N), N) : x(N, k);
      return C === e.Name && !(T instanceof e.Name) ? $(j, T) : T;
    };
  }
  te.mergeEvaluated = {
    props: u({
      mergeNames: (c, y, x) => c.if((0, e._)`${x} !== true && ${y} !== undefined`, () => {
        c.if((0, e._)`${y} === true`, () => c.assign(x, !0), () => c.assign(x, (0, e._)`${x} || {}`).code((0, e._)`Object.assign(${x}, ${y})`));
      }),
      mergeToName: (c, y, x) => c.if((0, e._)`${x} !== true`, () => {
        y === !0 ? c.assign(x, !0) : (c.assign(x, (0, e._)`${x} || {}`), S(c, x, y));
      }),
      mergeValues: (c, y) => c === !0 ? !0 : { ...c, ...y },
      resultToName: b
    }),
    items: u({
      mergeNames: (c, y, x) => c.if((0, e._)`${x} !== true && ${y} !== undefined`, () => c.assign(x, (0, e._)`${y} === true ? true : ${x} > ${y} ? ${x} : ${y}`)),
      mergeToName: (c, y, x) => c.if((0, e._)`${x} !== true`, () => c.assign(x, y === !0 ? !0 : (0, e._)`${x} > ${y} ? ${x} : ${y}`)),
      mergeValues: (c, y) => c === !0 ? !0 : Math.max(c, y),
      resultToName: (c, y) => c.var("items", y)
    })
  };
  function b(c, y) {
    if (y === !0)
      return c.var("props", !0);
    const x = c.var("props", (0, e._)`{}`);
    return y !== void 0 && S(c, x, y), x;
  }
  te.evaluatedPropsToName = b;
  function S(c, y, x) {
    Object.keys(x).forEach(($) => c.assign((0, e._)`${y}${(0, e.getProperty)($)}`, !0));
  }
  te.setEvaluated = S;
  const g = {};
  function _(c, y) {
    return c.scopeValue("func", {
      ref: y,
      code: g[y.code] || (g[y.code] = new t._Code(y.code))
    });
  }
  te.useFunc = _;
  var m;
  (function(c) {
    c[c.Num = 0] = "Num", c[c.Str = 1] = "Str";
  })(m || (te.Type = m = {}));
  function l(c, y, x) {
    if (c instanceof e.Name) {
      const $ = y === m.Num;
      return x ? $ ? (0, e._)`"[" + ${c} + "]"` : (0, e._)`"['" + ${c} + "']"` : $ ? (0, e._)`"/" + ${c}` : (0, e._)`"/" + ${c}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return x ? (0, e.getProperty)(c).toString() : "/" + v(c);
  }
  te.getErrorPath = l;
  function i(c, y, x = c.opts.strictSchema) {
    if (x) {
      if (y = `strict mode: ${y}`, x === !0)
        throw new Error(y);
      c.self.logger.warn(y);
    }
  }
  return te.checkStrictMode = i, te;
}
var qt = {}, ks;
function xe() {
  if (ks) return qt;
  ks = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
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
var Ds;
function Vn() {
  return Ds || (Ds = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ee(), s = /* @__PURE__ */ ne(), a = /* @__PURE__ */ xe();
    e.keywordError = {
      message: ({ keyword: g }) => (0, t.str)`must pass "${g}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: g, schemaType: _ }) => _ ? (0, t.str)`"${g}" keyword must be ${_} ($data)` : (0, t.str)`"${g}" keyword is invalid ($data)`
    };
    function p(g, _ = e.keywordError, m, l) {
      const { it: i } = g, { gen: c, compositeRule: y, allErrors: x } = i, $ = w(g, _, m);
      l ?? (y || x) ? d(c, $) : h(i, (0, t._)`[${$}]`);
    }
    e.reportError = p;
    function n(g, _ = e.keywordError, m) {
      const { it: l } = g, { gen: i, compositeRule: c, allErrors: y } = l, x = w(g, _, m);
      d(i, x), c || y || h(l, a.default.vErrors);
    }
    e.reportExtraError = n;
    function r(g, _) {
      g.assign(a.default.errors, _), g.if((0, t._)`${a.default.vErrors} !== null`, () => g.if(_, () => g.assign((0, t._)`${a.default.vErrors}.length`, _), () => g.assign(a.default.vErrors, null)));
    }
    e.resetErrorsCount = r;
    function o({ gen: g, keyword: _, schemaValue: m, data: l, errsCount: i, it: c }) {
      if (i === void 0)
        throw new Error("ajv implementation error");
      const y = g.name("err");
      g.forRange("i", i, a.default.errors, (x) => {
        g.const(y, (0, t._)`${a.default.vErrors}[${x}]`), g.if((0, t._)`${y}.instancePath === undefined`, () => g.assign((0, t._)`${y}.instancePath`, (0, t.strConcat)(a.default.instancePath, c.errorPath))), g.assign((0, t._)`${y}.schemaPath`, (0, t.str)`${c.errSchemaPath}/${_}`), c.opts.verbose && (g.assign((0, t._)`${y}.schema`, m), g.assign((0, t._)`${y}.data`, l));
      });
    }
    e.extendErrors = o;
    function d(g, _) {
      const m = g.const("err", _);
      g.if((0, t._)`${a.default.vErrors} === null`, () => g.assign(a.default.vErrors, (0, t._)`[${m}]`), (0, t._)`${a.default.vErrors}.push(${m})`), g.code((0, t._)`${a.default.errors}++`);
    }
    function h(g, _) {
      const { gen: m, validateName: l, schemaEnv: i } = g;
      i.$async ? m.throw((0, t._)`new ${g.ValidationError}(${_})`) : (m.assign((0, t._)`${l}.errors`, _), m.return(!1));
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
    function w(g, _, m) {
      const { createErrors: l } = g.it;
      return l === !1 ? (0, t._)`{}` : f(g, _, m);
    }
    function f(g, _, m = {}) {
      const { gen: l, it: i } = g, c = [
        u(i, m),
        b(g, m)
      ];
      return S(g, _, c), l.object(...c);
    }
    function u({ errorPath: g }, { instancePath: _ }) {
      const m = _ ? (0, t.str)`${g}${(0, s.getErrorPath)(_, s.Type.Str)}` : g;
      return [a.default.instancePath, (0, t.strConcat)(a.default.instancePath, m)];
    }
    function b({ keyword: g, it: { errSchemaPath: _ } }, { schemaPath: m, parentSchema: l }) {
      let i = l ? _ : (0, t.str)`${_}/${g}`;
      return m && (i = (0, t.str)`${i}${(0, s.getErrorPath)(m, s.Type.Str)}`), [v.schemaPath, i];
    }
    function S(g, { params: _, message: m }, l) {
      const { keyword: i, data: c, schemaValue: y, it: x } = g, { opts: $, propertyName: j, topSchemaRef: N, schemaPath: k } = x;
      l.push([v.keyword, i], [v.params, typeof _ == "function" ? _(g) : _ || (0, t._)`{}`]), $.messages && l.push([v.message, typeof m == "function" ? m(g) : m]), $.verbose && l.push([v.schema, y], [v.parentSchema, (0, t._)`${N}${k}`], [a.default.data, c]), j && l.push([v.propertyName, j]);
    }
  })(tr)), tr;
}
var Ms;
function Ec() {
  if (Ms) return Be;
  Ms = 1, Object.defineProperty(Be, "__esModule", { value: !0 }), Be.boolOrEmptySchema = Be.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Vn(), t = /* @__PURE__ */ ee(), s = /* @__PURE__ */ xe(), a = {
    message: "boolean schema is false"
  };
  function p(o) {
    const { gen: d, schema: h, validateName: v } = o;
    h === !1 ? r(o, !1) : typeof h == "object" && h.$async === !0 ? d.return(s.default.data) : (d.assign((0, t._)`${v}.errors`, null), d.return(!0));
  }
  Be.topBoolOrEmptySchema = p;
  function n(o, d) {
    const { gen: h, schema: v } = o;
    v === !1 ? (h.var(d, !1), r(o)) : h.var(d, !0);
  }
  Be.boolOrEmptySchema = n;
  function r(o, d) {
    const { gen: h, data: v } = o, w = {
      gen: h,
      keyword: "false schema",
      data: v,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: o
    };
    (0, e.reportError)(w, a, void 0, d);
  }
  return Be;
}
var de = {}, Ge = {}, Ls;
function io() {
  if (Ls) return Ge;
  Ls = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.getRules = Ge.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function s(p) {
    return typeof p == "string" && t.has(p);
  }
  Ge.isJSONType = s;
  function a() {
    const p = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...p, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, p.number, p.string, p.array, p.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return Ge.getRules = a, Ge;
}
var Te = {}, Cs;
function ao() {
  if (Cs) return Te;
  Cs = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.shouldUseRule = Te.shouldUseGroup = Te.schemaHasRulesForType = void 0;
  function e({ schema: a, self: p }, n) {
    const r = p.RULES.types[n];
    return r && r !== !0 && t(a, r);
  }
  Te.schemaHasRulesForType = e;
  function t(a, p) {
    return p.rules.some((n) => s(a, n));
  }
  Te.shouldUseGroup = t;
  function s(a, p) {
    var n;
    return a[p.keyword] !== void 0 || ((n = p.definition.implements) === null || n === void 0 ? void 0 : n.some((r) => a[r] !== void 0));
  }
  return Te.shouldUseRule = s, Te;
}
var Us;
function Mn() {
  if (Us) return de;
  Us = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.reportTypeError = de.checkDataTypes = de.checkDataType = de.coerceAndCheckDataType = de.getJSONTypes = de.getSchemaTypes = de.DataType = void 0;
  const e = /* @__PURE__ */ io(), t = /* @__PURE__ */ ao(), s = /* @__PURE__ */ Vn(), a = /* @__PURE__ */ ee(), p = /* @__PURE__ */ ne();
  var n;
  (function(m) {
    m[m.Correct = 0] = "Correct", m[m.Wrong = 1] = "Wrong";
  })(n || (de.DataType = n = {}));
  function r(m) {
    const l = o(m.type);
    if (l.includes("null")) {
      if (m.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!l.length && m.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      m.nullable === !0 && l.push("null");
    }
    return l;
  }
  de.getSchemaTypes = r;
  function o(m) {
    const l = Array.isArray(m) ? m : m ? [m] : [];
    if (l.every(e.isJSONType))
      return l;
    throw new Error("type must be JSONType or JSONType[]: " + l.join(","));
  }
  de.getJSONTypes = o;
  function d(m, l) {
    const { gen: i, data: c, opts: y } = m, x = v(l, y.coerceTypes), $ = l.length > 0 && !(x.length === 0 && l.length === 1 && (0, t.schemaHasRulesForType)(m, l[0]));
    if ($) {
      const j = b(l, c, y.strictNumbers, n.Wrong);
      i.if(j, () => {
        x.length ? w(m, l, x) : g(m);
      });
    }
    return $;
  }
  de.coerceAndCheckDataType = d;
  const h = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function v(m, l) {
    return l ? m.filter((i) => h.has(i) || l === "array" && i === "array") : [];
  }
  function w(m, l, i) {
    const { gen: c, data: y, opts: x } = m, $ = c.let("dataType", (0, a._)`typeof ${y}`), j = c.let("coerced", (0, a._)`undefined`);
    x.coerceTypes === "array" && c.if((0, a._)`${$} == 'object' && Array.isArray(${y}) && ${y}.length == 1`, () => c.assign(y, (0, a._)`${y}[0]`).assign($, (0, a._)`typeof ${y}`).if(b(l, y, x.strictNumbers), () => c.assign(j, y))), c.if((0, a._)`${j} !== undefined`);
    for (const k of i)
      (h.has(k) || k === "array" && x.coerceTypes === "array") && N(k);
    c.else(), g(m), c.endIf(), c.if((0, a._)`${j} !== undefined`, () => {
      c.assign(y, j), f(m, j);
    });
    function N(k) {
      switch (k) {
        case "string":
          c.elseIf((0, a._)`${$} == "number" || ${$} == "boolean"`).assign(j, (0, a._)`"" + ${y}`).elseIf((0, a._)`${y} === null`).assign(j, (0, a._)`""`);
          return;
        case "number":
          c.elseIf((0, a._)`${$} == "boolean" || ${y} === null
              || (${$} == "string" && ${y} && ${y} == +${y})`).assign(j, (0, a._)`+${y}`);
          return;
        case "integer":
          c.elseIf((0, a._)`${$} === "boolean" || ${y} === null
              || (${$} === "string" && ${y} && ${y} == +${y} && !(${y} % 1))`).assign(j, (0, a._)`+${y}`);
          return;
        case "boolean":
          c.elseIf((0, a._)`${y} === "false" || ${y} === 0 || ${y} === null`).assign(j, !1).elseIf((0, a._)`${y} === "true" || ${y} === 1`).assign(j, !0);
          return;
        case "null":
          c.elseIf((0, a._)`${y} === "" || ${y} === 0 || ${y} === false`), c.assign(j, null);
          return;
        case "array":
          c.elseIf((0, a._)`${$} === "string" || ${$} === "number"
              || ${$} === "boolean" || ${y} === null`).assign(j, (0, a._)`[${y}]`);
      }
    }
  }
  function f({ gen: m, parentData: l, parentDataProperty: i }, c) {
    m.if((0, a._)`${l} !== undefined`, () => m.assign((0, a._)`${l}[${i}]`, c));
  }
  function u(m, l, i, c = n.Correct) {
    const y = c === n.Correct ? a.operators.EQ : a.operators.NEQ;
    let x;
    switch (m) {
      case "null":
        return (0, a._)`${l} ${y} null`;
      case "array":
        x = (0, a._)`Array.isArray(${l})`;
        break;
      case "object":
        x = (0, a._)`${l} && typeof ${l} == "object" && !Array.isArray(${l})`;
        break;
      case "integer":
        x = $((0, a._)`!(${l} % 1) && !isNaN(${l})`);
        break;
      case "number":
        x = $();
        break;
      default:
        return (0, a._)`typeof ${l} ${y} ${m}`;
    }
    return c === n.Correct ? x : (0, a.not)(x);
    function $(j = a.nil) {
      return (0, a.and)((0, a._)`typeof ${l} == "number"`, j, i ? (0, a._)`isFinite(${l})` : a.nil);
    }
  }
  de.checkDataType = u;
  function b(m, l, i, c) {
    if (m.length === 1)
      return u(m[0], l, i, c);
    let y;
    const x = (0, p.toHash)(m);
    if (x.array && x.object) {
      const $ = (0, a._)`typeof ${l} != "object"`;
      y = x.null ? $ : (0, a._)`!${l} || ${$}`, delete x.null, delete x.array, delete x.object;
    } else
      y = a.nil;
    x.number && delete x.integer;
    for (const $ in x)
      y = (0, a.and)(y, u($, l, i, c));
    return y;
  }
  de.checkDataTypes = b;
  const S = {
    message: ({ schema: m }) => `must be ${m}`,
    params: ({ schema: m, schemaValue: l }) => typeof m == "string" ? (0, a._)`{type: ${m}}` : (0, a._)`{type: ${l}}`
  };
  function g(m) {
    const l = _(m);
    (0, s.reportError)(l, S);
  }
  de.reportTypeError = g;
  function _(m) {
    const { gen: l, data: i, schema: c } = m, y = (0, p.schemaRefOrVal)(m, c, "type");
    return {
      gen: l,
      keyword: "type",
      data: i,
      schema: c.type,
      schemaCode: y,
      schemaValue: y,
      parentSchema: c,
      params: {},
      it: m
    };
  }
  return de;
}
var mt = {}, Vs;
function Rc() {
  if (Vs) return mt;
  Vs = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.assignDefaults = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne();
  function s(p, n) {
    const { properties: r, items: o } = p.schema;
    if (n === "object" && r)
      for (const d in r)
        a(p, d, r[d].default);
    else n === "array" && Array.isArray(o) && o.forEach((d, h) => a(p, h, d.default));
  }
  mt.assignDefaults = s;
  function a(p, n, r) {
    const { gen: o, compositeRule: d, data: h, opts: v } = p;
    if (r === void 0)
      return;
    const w = (0, e._)`${h}${(0, e.getProperty)(n)}`;
    if (d) {
      (0, t.checkStrictMode)(p, `default is ignored for: ${w}`);
      return;
    }
    let f = (0, e._)`${w} === undefined`;
    v.useDefaults === "empty" && (f = (0, e._)`${f} || ${w} === null || ${w} === ""`), o.if(f, (0, e._)`${w} = ${(0, e.stringify)(r)}`);
  }
  return mt;
}
var $e = {}, se = {}, zs;
function Ie() {
  if (zs) return se;
  zs = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.validateUnion = se.validateArray = se.usePattern = se.callValidateCode = se.schemaProperties = se.allSchemaProperties = se.noPropertyInData = se.propertyInData = se.isOwnProperty = se.hasPropFunc = se.reportMissingProp = se.checkMissingProp = se.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), s = /* @__PURE__ */ xe(), a = /* @__PURE__ */ ne();
  function p(m, l) {
    const { gen: i, data: c, it: y } = m;
    i.if(v(i, c, l, y.opts.ownProperties), () => {
      m.setParams({ missingProperty: (0, e._)`${l}` }, !0), m.error();
    });
  }
  se.checkReportMissingProp = p;
  function n({ gen: m, data: l, it: { opts: i } }, c, y) {
    return (0, e.or)(...c.map((x) => (0, e.and)(v(m, l, x, i.ownProperties), (0, e._)`${y} = ${x}`)));
  }
  se.checkMissingProp = n;
  function r(m, l) {
    m.setParams({ missingProperty: l }, !0), m.error();
  }
  se.reportMissingProp = r;
  function o(m) {
    return m.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  se.hasPropFunc = o;
  function d(m, l, i) {
    return (0, e._)`${o(m)}.call(${l}, ${i})`;
  }
  se.isOwnProperty = d;
  function h(m, l, i, c) {
    const y = (0, e._)`${l}${(0, e.getProperty)(i)} !== undefined`;
    return c ? (0, e._)`${y} && ${d(m, l, i)}` : y;
  }
  se.propertyInData = h;
  function v(m, l, i, c) {
    const y = (0, e._)`${l}${(0, e.getProperty)(i)} === undefined`;
    return c ? (0, e.or)(y, (0, e.not)(d(m, l, i))) : y;
  }
  se.noPropertyInData = v;
  function w(m) {
    return m ? Object.keys(m).filter((l) => l !== "__proto__") : [];
  }
  se.allSchemaProperties = w;
  function f(m, l) {
    return w(l).filter((i) => !(0, t.alwaysValidSchema)(m, l[i]));
  }
  se.schemaProperties = f;
  function u({ schemaCode: m, data: l, it: { gen: i, topSchemaRef: c, schemaPath: y, errorPath: x }, it: $ }, j, N, k) {
    const C = k ? (0, e._)`${m}, ${l}, ${c}${y}` : l, T = [
      [s.default.instancePath, (0, e.strConcat)(s.default.instancePath, x)],
      [s.default.parentData, $.parentData],
      [s.default.parentDataProperty, $.parentDataProperty],
      [s.default.rootData, s.default.rootData]
    ];
    $.opts.dynamicRef && T.push([s.default.dynamicAnchors, s.default.dynamicAnchors]);
    const O = (0, e._)`${C}, ${i.object(...T)}`;
    return N !== e.nil ? (0, e._)`${j}.call(${N}, ${O})` : (0, e._)`${j}(${O})`;
  }
  se.callValidateCode = u;
  const b = (0, e._)`new RegExp`;
  function S({ gen: m, it: { opts: l } }, i) {
    const c = l.unicodeRegExp ? "u" : "", { regExp: y } = l.code, x = y(i, c);
    return m.scopeValue("pattern", {
      key: x.toString(),
      ref: x,
      code: (0, e._)`${y.code === "new RegExp" ? b : (0, a.useFunc)(m, y)}(${i}, ${c})`
    });
  }
  se.usePattern = S;
  function g(m) {
    const { gen: l, data: i, keyword: c, it: y } = m, x = l.name("valid");
    if (y.allErrors) {
      const j = l.let("valid", !0);
      return $(() => l.assign(j, !1)), j;
    }
    return l.var(x, !0), $(() => l.break()), x;
    function $(j) {
      const N = l.const("len", (0, e._)`${i}.length`);
      l.forRange("i", 0, N, (k) => {
        m.subschema({
          keyword: c,
          dataProp: k,
          dataPropType: t.Type.Num
        }, x), l.if((0, e.not)(x), j);
      });
    }
  }
  se.validateArray = g;
  function _(m) {
    const { gen: l, schema: i, keyword: c, it: y } = m;
    if (!Array.isArray(i))
      throw new Error("ajv implementation error");
    if (i.some((N) => (0, t.alwaysValidSchema)(y, N)) && !y.opts.unevaluated)
      return;
    const $ = l.let("valid", !1), j = l.name("_valid");
    l.block(() => i.forEach((N, k) => {
      const C = m.subschema({
        keyword: c,
        schemaProp: k,
        compositeRule: !0
      }, j);
      l.assign($, (0, e._)`${$} || ${j}`), m.mergeValidEvaluated(C, j) || l.if((0, e.not)($));
    })), m.result($, () => m.reset(), () => m.error(!0));
  }
  return se.validateUnion = _, se;
}
var Fs;
function jc() {
  if (Fs) return $e;
  Fs = 1, Object.defineProperty($e, "__esModule", { value: !0 }), $e.validateKeywordUsage = $e.validSchemaType = $e.funcKeywordCode = $e.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ xe(), s = /* @__PURE__ */ Ie(), a = /* @__PURE__ */ Vn();
  function p(f, u) {
    const { gen: b, keyword: S, schema: g, parentSchema: _, it: m } = f, l = u.macro.call(m.self, g, _, m), i = h(b, S, l);
    m.opts.validateSchema !== !1 && m.self.validateSchema(l, !0);
    const c = b.name("valid");
    f.subschema({
      schema: l,
      schemaPath: e.nil,
      errSchemaPath: `${m.errSchemaPath}/${S}`,
      topSchemaRef: i,
      compositeRule: !0
    }, c), f.pass(c, () => f.error(!0));
  }
  $e.macroKeywordCode = p;
  function n(f, u) {
    var b;
    const { gen: S, keyword: g, schema: _, parentSchema: m, $data: l, it: i } = f;
    d(i, u);
    const c = !l && u.compile ? u.compile.call(i.self, _, m, i) : u.validate, y = h(S, g, c), x = S.let("valid");
    f.block$data(x, $), f.ok((b = u.valid) !== null && b !== void 0 ? b : x);
    function $() {
      if (u.errors === !1)
        k(), u.modifying && r(f), C(() => f.error());
      else {
        const T = u.async ? j() : N();
        u.modifying && r(f), C(() => o(f, T));
      }
    }
    function j() {
      const T = S.let("ruleErrs", null);
      return S.try(() => k((0, e._)`await `), (O) => S.assign(x, !1).if((0, e._)`${O} instanceof ${i.ValidationError}`, () => S.assign(T, (0, e._)`${O}.errors`), () => S.throw(O))), T;
    }
    function N() {
      const T = (0, e._)`${y}.errors`;
      return S.assign(T, null), k(e.nil), T;
    }
    function k(T = u.async ? (0, e._)`await ` : e.nil) {
      const O = i.opts.passContext ? t.default.this : t.default.self, B = !("compile" in u && !l || u.schema === !1);
      S.assign(x, (0, e._)`${T}${(0, s.callValidateCode)(f, y, O, B)}`, u.modifying);
    }
    function C(T) {
      var O;
      S.if((0, e.not)((O = u.valid) !== null && O !== void 0 ? O : x), T);
    }
  }
  $e.funcKeywordCode = n;
  function r(f) {
    const { gen: u, data: b, it: S } = f;
    u.if(S.parentData, () => u.assign(b, (0, e._)`${S.parentData}[${S.parentDataProperty}]`));
  }
  function o(f, u) {
    const { gen: b } = f;
    b.if((0, e._)`Array.isArray(${u})`, () => {
      b.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${u} : ${t.default.vErrors}.concat(${u})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, a.extendErrors)(f);
    }, () => f.error());
  }
  function d({ schemaEnv: f }, u) {
    if (u.async && !f.$async)
      throw new Error("async keyword in sync schema");
  }
  function h(f, u, b) {
    if (b === void 0)
      throw new Error(`keyword "${u}" failed to compile`);
    return f.scopeValue("keyword", typeof b == "function" ? { ref: b } : { ref: b, code: (0, e.stringify)(b) });
  }
  function v(f, u, b = !1) {
    return !u.length || u.some((S) => S === "array" ? Array.isArray(f) : S === "object" ? f && typeof f == "object" && !Array.isArray(f) : typeof f == S || b && typeof f > "u");
  }
  $e.validSchemaType = v;
  function w({ schema: f, opts: u, self: b, errSchemaPath: S }, g, _) {
    if (Array.isArray(g.keyword) ? !g.keyword.includes(_) : g.keyword !== _)
      throw new Error("ajv implementation error");
    const m = g.dependencies;
    if (m?.some((l) => !Object.prototype.hasOwnProperty.call(f, l)))
      throw new Error(`parent schema must have dependencies of ${_}: ${m.join(",")}`);
    if (g.validateSchema && !g.validateSchema(f[_])) {
      const i = `keyword "${_}" value is invalid at path "${S}": ` + b.errorsText(g.validateSchema.errors);
      if (u.validateSchema === "log")
        b.logger.error(i);
      else
        throw new Error(i);
    }
  }
  return $e.validateKeywordUsage = w, $e;
}
var ke = {}, Hs;
function Ac() {
  if (Hs) return ke;
  Hs = 1, Object.defineProperty(ke, "__esModule", { value: !0 }), ke.extendSubschemaMode = ke.extendSubschemaData = ke.getSubschema = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne();
  function s(n, { keyword: r, schemaProp: o, schema: d, schemaPath: h, errSchemaPath: v, topSchemaRef: w }) {
    if (r !== void 0 && d !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (r !== void 0) {
      const f = n.schema[r];
      return o === void 0 ? {
        schema: f,
        schemaPath: (0, e._)`${n.schemaPath}${(0, e.getProperty)(r)}`,
        errSchemaPath: `${n.errSchemaPath}/${r}`
      } : {
        schema: f[o],
        schemaPath: (0, e._)`${n.schemaPath}${(0, e.getProperty)(r)}${(0, e.getProperty)(o)}`,
        errSchemaPath: `${n.errSchemaPath}/${r}/${(0, t.escapeFragment)(o)}`
      };
    }
    if (d !== void 0) {
      if (h === void 0 || v === void 0 || w === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: d,
        schemaPath: h,
        topSchemaRef: w,
        errSchemaPath: v
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  ke.getSubschema = s;
  function a(n, r, { dataProp: o, dataPropType: d, data: h, dataTypes: v, propertyName: w }) {
    if (h !== void 0 && o !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: f } = r;
    if (o !== void 0) {
      const { errorPath: b, dataPathArr: S, opts: g } = r, _ = f.let("data", (0, e._)`${r.data}${(0, e.getProperty)(o)}`, !0);
      u(_), n.errorPath = (0, e.str)`${b}${(0, t.getErrorPath)(o, d, g.jsPropertySyntax)}`, n.parentDataProperty = (0, e._)`${o}`, n.dataPathArr = [...S, n.parentDataProperty];
    }
    if (h !== void 0) {
      const b = h instanceof e.Name ? h : f.let("data", h, !0);
      u(b), w !== void 0 && (n.propertyName = w);
    }
    v && (n.dataTypes = v);
    function u(b) {
      n.data = b, n.dataLevel = r.dataLevel + 1, n.dataTypes = [], r.definedProperties = /* @__PURE__ */ new Set(), n.parentData = r.data, n.dataNames = [...r.dataNames, b];
    }
  }
  ke.extendSubschemaData = a;
  function p(n, { jtdDiscriminator: r, jtdMetadata: o, compositeRule: d, createErrors: h, allErrors: v }) {
    d !== void 0 && (n.compositeRule = d), h !== void 0 && (n.createErrors = h), v !== void 0 && (n.allErrors = v), n.jtdDiscriminator = r, n.jtdMetadata = o;
  }
  return ke.extendSubschemaMode = p, ke;
}
var he = {}, ir, Js;
function oo() {
  return Js || (Js = 1, ir = function e(t, s) {
    if (t === s) return !0;
    if (t && s && typeof t == "object" && typeof s == "object") {
      if (t.constructor !== s.constructor) return !1;
      var a, p, n;
      if (Array.isArray(t)) {
        if (a = t.length, a != s.length) return !1;
        for (p = a; p-- !== 0; )
          if (!e(t[p], s[p])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === s.source && t.flags === s.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === s.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === s.toString();
      if (n = Object.keys(t), a = n.length, a !== Object.keys(s).length) return !1;
      for (p = a; p-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(s, n[p])) return !1;
      for (p = a; p-- !== 0; ) {
        var r = n[p];
        if (!e(t[r], s[r])) return !1;
      }
      return !0;
    }
    return t !== t && s !== s;
  }), ir;
}
var ar = { exports: {} }, Bs;
function Nc() {
  if (Bs) return ar.exports;
  Bs = 1;
  var e = ar.exports = function(a, p, n) {
    typeof p == "function" && (n = p, p = {}), n = p.cb || n;
    var r = typeof n == "function" ? n : n.pre || function() {
    }, o = n.post || function() {
    };
    t(p, r, o, a, "", a);
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
  function t(a, p, n, r, o, d, h, v, w, f) {
    if (r && typeof r == "object" && !Array.isArray(r)) {
      p(r, o, d, h, v, w, f);
      for (var u in r) {
        var b = r[u];
        if (Array.isArray(b)) {
          if (u in e.arrayKeywords)
            for (var S = 0; S < b.length; S++)
              t(a, p, n, b[S], o + "/" + u + "/" + S, d, o, u, r, S);
        } else if (u in e.propsKeywords) {
          if (b && typeof b == "object")
            for (var g in b)
              t(a, p, n, b[g], o + "/" + u + "/" + s(g), d, o, u, r, g);
        } else (u in e.keywords || a.allKeys && !(u in e.skipKeywords)) && t(a, p, n, b, o + "/" + u, d, o, u, r);
      }
      n(r, o, d, h, v, w, f);
    }
  }
  function s(a) {
    return a.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return ar.exports;
}
var Gs;
function zn() {
  if (Gs) return he;
  Gs = 1, Object.defineProperty(he, "__esModule", { value: !0 }), he.getSchemaRefs = he.resolveUrl = he.normalizeId = he._getFullPath = he.getFullPath = he.inlineRef = void 0;
  const e = /* @__PURE__ */ ne(), t = oo(), s = Nc(), a = /* @__PURE__ */ new Set([
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
  function p(S, g = !0) {
    return typeof S == "boolean" ? !0 : g === !0 ? !r(S) : g ? o(S) <= g : !1;
  }
  he.inlineRef = p;
  const n = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function r(S) {
    for (const g in S) {
      if (n.has(g))
        return !0;
      const _ = S[g];
      if (Array.isArray(_) && _.some(r) || typeof _ == "object" && r(_))
        return !0;
    }
    return !1;
  }
  function o(S) {
    let g = 0;
    for (const _ in S) {
      if (_ === "$ref")
        return 1 / 0;
      if (g++, !a.has(_) && (typeof S[_] == "object" && (0, e.eachItem)(S[_], (m) => g += o(m)), g === 1 / 0))
        return 1 / 0;
    }
    return g;
  }
  function d(S, g = "", _) {
    _ !== !1 && (g = w(g));
    const m = S.parse(g);
    return h(S, m);
  }
  he.getFullPath = d;
  function h(S, g) {
    return S.serialize(g).split("#")[0] + "#";
  }
  he._getFullPath = h;
  const v = /#\/?$/;
  function w(S) {
    return S ? S.replace(v, "") : "";
  }
  he.normalizeId = w;
  function f(S, g, _) {
    return _ = w(_), S.resolve(g, _);
  }
  he.resolveUrl = f;
  const u = /^[a-z_][-a-z0-9._]*$/i;
  function b(S, g) {
    if (typeof S == "boolean")
      return {};
    const { schemaId: _, uriResolver: m } = this.opts, l = w(S[_] || g), i = { "": l }, c = d(m, l, !1), y = {}, x = /* @__PURE__ */ new Set();
    return s(S, { allKeys: !0 }, (N, k, C, T) => {
      if (T === void 0)
        return;
      const O = c + k;
      let B = i[T];
      typeof N[_] == "string" && (B = P.call(this, N[_])), H.call(this, N.$anchor), H.call(this, N.$dynamicAnchor), i[k] = B;
      function P(F) {
        const G = this.opts.uriResolver.resolve;
        if (F = w(B ? G(B, F) : F), x.has(F))
          throw j(F);
        x.add(F);
        let A = this.refs[F];
        return typeof A == "string" && (A = this.refs[A]), typeof A == "object" ? $(N, A.schema, F) : F !== w(O) && (F[0] === "#" ? ($(N, y[F], F), y[F] = N) : this.refs[F] = O), F;
      }
      function H(F) {
        if (typeof F == "string") {
          if (!u.test(F))
            throw new Error(`invalid anchor "${F}"`);
          P.call(this, `#${F}`);
        }
      }
    }), y;
    function $(N, k, C) {
      if (k !== void 0 && !t(N, k))
        throw j(C);
    }
    function j(N) {
      return new Error(`reference "${N}" resolves to more than one schema`);
    }
  }
  return he.getSchemaRefs = b, he;
}
var Ks;
function xt() {
  if (Ks) return qe;
  Ks = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.getData = qe.KeywordCxt = qe.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Ec(), t = /* @__PURE__ */ Mn(), s = /* @__PURE__ */ ao(), a = /* @__PURE__ */ Mn(), p = /* @__PURE__ */ Rc(), n = /* @__PURE__ */ jc(), r = /* @__PURE__ */ Ac(), o = /* @__PURE__ */ ee(), d = /* @__PURE__ */ xe(), h = /* @__PURE__ */ zn(), v = /* @__PURE__ */ ne(), w = /* @__PURE__ */ Vn();
  function f(L) {
    if (c(L) && (x(L), i(L))) {
      g(L);
      return;
    }
    u(L, () => (0, e.topBoolOrEmptySchema)(L));
  }
  qe.validateFunctionCode = f;
  function u({ gen: L, validateName: V, schema: z, schemaEnv: Z, opts: Q }, Y) {
    Q.code.es5 ? L.func(V, (0, o._)`${d.default.data}, ${d.default.valCxt}`, Z.$async, () => {
      L.code((0, o._)`"use strict"; ${m(z, Q)}`), S(L, Q), L.code(Y);
    }) : L.func(V, (0, o._)`${d.default.data}, ${b(Q)}`, Z.$async, () => L.code(m(z, Q)).code(Y));
  }
  function b(L) {
    return (0, o._)`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${L.dynamicRef ? (0, o._)`, ${d.default.dynamicAnchors}={}` : o.nil}}={}`;
  }
  function S(L, V) {
    L.if(d.default.valCxt, () => {
      L.var(d.default.instancePath, (0, o._)`${d.default.valCxt}.${d.default.instancePath}`), L.var(d.default.parentData, (0, o._)`${d.default.valCxt}.${d.default.parentData}`), L.var(d.default.parentDataProperty, (0, o._)`${d.default.valCxt}.${d.default.parentDataProperty}`), L.var(d.default.rootData, (0, o._)`${d.default.valCxt}.${d.default.rootData}`), V.dynamicRef && L.var(d.default.dynamicAnchors, (0, o._)`${d.default.valCxt}.${d.default.dynamicAnchors}`);
    }, () => {
      L.var(d.default.instancePath, (0, o._)`""`), L.var(d.default.parentData, (0, o._)`undefined`), L.var(d.default.parentDataProperty, (0, o._)`undefined`), L.var(d.default.rootData, d.default.data), V.dynamicRef && L.var(d.default.dynamicAnchors, (0, o._)`{}`);
    });
  }
  function g(L) {
    const { schema: V, opts: z, gen: Z } = L;
    u(L, () => {
      z.$comment && V.$comment && T(L), N(L), Z.let(d.default.vErrors, null), Z.let(d.default.errors, 0), z.unevaluated && _(L), $(L), O(L);
    });
  }
  function _(L) {
    const { gen: V, validateName: z } = L;
    L.evaluated = V.const("evaluated", (0, o._)`${z}.evaluated`), V.if((0, o._)`${L.evaluated}.dynamicProps`, () => V.assign((0, o._)`${L.evaluated}.props`, (0, o._)`undefined`)), V.if((0, o._)`${L.evaluated}.dynamicItems`, () => V.assign((0, o._)`${L.evaluated}.items`, (0, o._)`undefined`));
  }
  function m(L, V) {
    const z = typeof L == "object" && L[V.schemaId];
    return z && (V.code.source || V.code.process) ? (0, o._)`/*# sourceURL=${z} */` : o.nil;
  }
  function l(L, V) {
    if (c(L) && (x(L), i(L))) {
      y(L, V);
      return;
    }
    (0, e.boolOrEmptySchema)(L, V);
  }
  function i({ schema: L, self: V }) {
    if (typeof L == "boolean")
      return !L;
    for (const z in L)
      if (V.RULES.all[z])
        return !0;
    return !1;
  }
  function c(L) {
    return typeof L.schema != "boolean";
  }
  function y(L, V) {
    const { schema: z, gen: Z, opts: Q } = L;
    Q.$comment && z.$comment && T(L), k(L), C(L);
    const Y = Z.const("_errs", d.default.errors);
    $(L, Y), Z.var(V, (0, o._)`${Y} === ${d.default.errors}`);
  }
  function x(L) {
    (0, v.checkUnknownRules)(L), j(L);
  }
  function $(L, V) {
    if (L.opts.jtd)
      return P(L, [], !1, V);
    const z = (0, t.getSchemaTypes)(L.schema), Z = (0, t.coerceAndCheckDataType)(L, z);
    P(L, z, !Z, V);
  }
  function j(L) {
    const { schema: V, errSchemaPath: z, opts: Z, self: Q } = L;
    V.$ref && Z.ignoreKeywordsWithRef && (0, v.schemaHasRulesButRef)(V, Q.RULES) && Q.logger.warn(`$ref: keywords ignored in schema at path "${z}"`);
  }
  function N(L) {
    const { schema: V, opts: z } = L;
    V.default !== void 0 && z.useDefaults && z.strictSchema && (0, v.checkStrictMode)(L, "default is ignored in the schema root");
  }
  function k(L) {
    const V = L.schema[L.opts.schemaId];
    V && (L.baseId = (0, h.resolveUrl)(L.opts.uriResolver, L.baseId, V));
  }
  function C(L) {
    if (L.schema.$async && !L.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function T({ gen: L, schemaEnv: V, schema: z, errSchemaPath: Z, opts: Q }) {
    const Y = z.$comment;
    if (Q.$comment === !0)
      L.code((0, o._)`${d.default.self}.logger.log(${Y})`);
    else if (typeof Q.$comment == "function") {
      const re = (0, o.str)`${Z}/$comment`, le = L.scopeValue("root", { ref: V.root });
      L.code((0, o._)`${d.default.self}.opts.$comment(${Y}, ${re}, ${le}.schema)`);
    }
  }
  function O(L) {
    const { gen: V, schemaEnv: z, validateName: Z, ValidationError: Q, opts: Y } = L;
    z.$async ? V.if((0, o._)`${d.default.errors} === 0`, () => V.return(d.default.data), () => V.throw((0, o._)`new ${Q}(${d.default.vErrors})`)) : (V.assign((0, o._)`${Z}.errors`, d.default.vErrors), Y.unevaluated && B(L), V.return((0, o._)`${d.default.errors} === 0`));
  }
  function B({ gen: L, evaluated: V, props: z, items: Z }) {
    z instanceof o.Name && L.assign((0, o._)`${V}.props`, z), Z instanceof o.Name && L.assign((0, o._)`${V}.items`, Z);
  }
  function P(L, V, z, Z) {
    const { gen: Q, schema: Y, data: re, allErrors: le, opts: ae, self: oe } = L, { RULES: ie } = oe;
    if (Y.$ref && (ae.ignoreKeywordsWithRef || !(0, v.schemaHasRulesButRef)(Y, ie))) {
      Q.block(() => M(L, "$ref", ie.all.$ref.definition));
      return;
    }
    ae.jtd || F(L, V), Q.block(() => {
      for (const ge of ie.rules)
        Ee(ge);
      Ee(ie.post);
    });
    function Ee(ge) {
      (0, s.shouldUseGroup)(Y, ge) && (ge.type ? (Q.if((0, a.checkDataType)(ge.type, re, ae.strictNumbers)), H(L, ge), V.length === 1 && V[0] === ge.type && z && (Q.else(), (0, a.reportTypeError)(L)), Q.endIf()) : H(L, ge), le || Q.if((0, o._)`${d.default.errors} === ${Z || 0}`));
    }
  }
  function H(L, V) {
    const { gen: z, schema: Z, opts: { useDefaults: Q } } = L;
    Q && (0, p.assignDefaults)(L, V.type), z.block(() => {
      for (const Y of V.rules)
        (0, s.shouldUseRule)(Z, Y) && M(L, Y.keyword, Y.definition, V.type);
    });
  }
  function F(L, V) {
    L.schemaEnv.meta || !L.opts.strictTypes || (G(L, V), L.opts.allowUnionTypes || A(L, V), q(L, L.dataTypes));
  }
  function G(L, V) {
    if (V.length) {
      if (!L.dataTypes.length) {
        L.dataTypes = V;
        return;
      }
      V.forEach((z) => {
        D(L.dataTypes, z) || I(L, `type "${z}" not allowed by context "${L.dataTypes.join(",")}"`);
      }), E(L, V);
    }
  }
  function A(L, V) {
    V.length > 1 && !(V.length === 2 && V.includes("null")) && I(L, "use allowUnionTypes to allow union type keyword");
  }
  function q(L, V) {
    const z = L.self.RULES.all;
    for (const Z in z) {
      const Q = z[Z];
      if (typeof Q == "object" && (0, s.shouldUseRule)(L.schema, Q)) {
        const { type: Y } = Q.definition;
        Y.length && !Y.some((re) => U(V, re)) && I(L, `missing type "${Y.join(",")}" for keyword "${Z}"`);
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
  function I(L, V) {
    const z = L.schemaEnv.baseId + L.errSchemaPath;
    V += ` at "${z}" (strictTypes)`, (0, v.checkStrictMode)(L, V, L.opts.strictTypes);
  }
  class R {
    constructor(V, z, Z) {
      if ((0, n.validateKeywordUsage)(V, z, Z), this.gen = V.gen, this.allErrors = V.allErrors, this.keyword = Z, this.data = V.data, this.schema = V.schema[Z], this.$data = z.$data && V.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, v.schemaRefOrVal)(V, this.schema, Z, this.$data), this.schemaType = z.schemaType, this.parentSchema = V.schema, this.params = {}, this.it = V, this.def = z, this.$data)
        this.schemaCode = V.gen.const("vSchema", K(this.$data, V));
      else if (this.schemaCode = this.schemaValue, !(0, n.validSchemaType)(this.schema, z.schemaType, z.allowUndefined))
        throw new Error(`${Z} value must be ${JSON.stringify(z.schemaType)}`);
      ("code" in z ? z.trackErrors : z.errors !== !1) && (this.errsCount = V.gen.const("_errs", d.default.errors));
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
      const { gen: Z, schemaCode: Q, schemaType: Y, def: re } = this;
      Z.if((0, o.or)((0, o._)`${Q} === undefined`, z)), V !== o.nil && Z.assign(V, !0), (Y.length || re.validateSchema) && (Z.elseIf(this.invalid$data()), this.$dataError(), V !== o.nil && Z.assign(V, !1)), Z.else();
    }
    invalid$data() {
      const { gen: V, schemaCode: z, schemaType: Z, def: Q, it: Y } = this;
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
        if (Q.validateSchema) {
          const ae = V.scopeValue("validate$data", { ref: Q.validateSchema });
          return (0, o._)`!${ae}(${z})`;
        }
        return o.nil;
      }
    }
    subschema(V, z) {
      const Z = (0, r.getSubschema)(this.it, V);
      (0, r.extendSubschemaData)(Z, this.it, V), (0, r.extendSubschemaMode)(Z, V);
      const Q = { ...this.it, ...Z, items: void 0, props: void 0 };
      return l(Q, z), Q;
    }
    mergeEvaluated(V, z) {
      const { it: Z, gen: Q } = this;
      Z.opts.unevaluated && (Z.props !== !0 && V.props !== void 0 && (Z.props = v.mergeEvaluated.props(Q, V.props, Z.props, z)), Z.items !== !0 && V.items !== void 0 && (Z.items = v.mergeEvaluated.items(Q, V.items, Z.items, z)));
    }
    mergeValidEvaluated(V, z) {
      const { it: Z, gen: Q } = this;
      if (Z.opts.unevaluated && (Z.props !== !0 || Z.items !== !0))
        return Q.if(z, () => this.mergeEvaluated(V, o.Name)), !0;
    }
  }
  qe.KeywordCxt = R;
  function M(L, V, z, Z) {
    const Q = new R(L, z, V);
    "code" in z ? z.code(Q, Z) : Q.$data && z.validate ? (0, n.funcKeywordCode)(Q, z) : "macro" in z ? (0, n.macroKeywordCode)(Q, z) : (z.compile || z.validate) && (0, n.funcKeywordCode)(Q, z);
  }
  const J = /^\/(?:[^~]|~0|~1)*$/, W = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function K(L, { dataLevel: V, dataNames: z, dataPathArr: Z }) {
    let Q, Y;
    if (L === "")
      return d.default.rootData;
    if (L[0] === "/") {
      if (!J.test(L))
        throw new Error(`Invalid JSON-pointer: ${L}`);
      Q = L, Y = d.default.rootData;
    } else {
      const oe = W.exec(L);
      if (!oe)
        throw new Error(`Invalid JSON-pointer: ${L}`);
      const ie = +oe[1];
      if (Q = oe[2], Q === "#") {
        if (ie >= V)
          throw new Error(ae("property/index", ie));
        return Z[V - ie];
      }
      if (ie > V)
        throw new Error(ae("data", ie));
      if (Y = z[V - ie], !Q)
        return Y;
    }
    let re = Y;
    const le = Q.split("/");
    for (const oe of le)
      oe && (Y = (0, o._)`${Y}${(0, o.getProperty)((0, v.unescapeJsonPointer)(oe))}`, re = (0, o._)`${re} && ${Y}`);
    return re;
    function ae(oe, ie) {
      return `Cannot access ${oe} ${ie} levels up, current level is ${V}`;
    }
  }
  return qe.getData = K, qe;
}
var Tt = {}, Zs;
function Fn() {
  if (Zs) return Tt;
  Zs = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  class e extends Error {
    constructor(s) {
      super("validation failed"), this.errors = s, this.ajv = this.validation = !0;
    }
  }
  return Tt.default = e, Tt;
}
var kt = {}, Ws;
function It() {
  if (Ws) return kt;
  Ws = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zn();
  class t extends Error {
    constructor(a, p, n, r) {
      super(r || `can't resolve reference ${n} from id ${p}`), this.missingRef = (0, e.resolveUrl)(a, p, n), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(a, this.missingRef));
    }
  }
  return kt.default = t, kt;
}
var me = {}, Qs;
function Hn() {
  if (Qs) return me;
  Qs = 1, Object.defineProperty(me, "__esModule", { value: !0 }), me.resolveSchema = me.getCompilingSchema = me.resolveRef = me.compileSchema = me.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Fn(), s = /* @__PURE__ */ xe(), a = /* @__PURE__ */ zn(), p = /* @__PURE__ */ ne(), n = /* @__PURE__ */ xt();
  class r {
    constructor(_) {
      var m;
      this.refs = {}, this.dynamicAnchors = {};
      let l;
      typeof _.schema == "object" && (l = _.schema), this.schema = _.schema, this.schemaId = _.schemaId, this.root = _.root || this, this.baseId = (m = _.baseId) !== null && m !== void 0 ? m : (0, a.normalizeId)(l?.[_.schemaId || "$id"]), this.schemaPath = _.schemaPath, this.localRefs = _.localRefs, this.meta = _.meta, this.$async = l?.$async, this.refs = {};
    }
  }
  me.SchemaEnv = r;
  function o(g) {
    const _ = v.call(this, g);
    if (_)
      return _;
    const m = (0, a.getFullPath)(this.opts.uriResolver, g.root.baseId), { es5: l, lines: i } = this.opts.code, { ownProperties: c } = this.opts, y = new e.CodeGen(this.scope, { es5: l, lines: i, ownProperties: c });
    let x;
    g.$async && (x = y.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const $ = y.scopeName("validate");
    g.validateName = $;
    const j = {
      gen: y,
      allErrors: this.opts.allErrors,
      data: s.default.data,
      parentData: s.default.parentData,
      parentDataProperty: s.default.parentDataProperty,
      dataNames: [s.default.data],
      dataPathArr: [e.nil],
      // TODO can its length be used as dataLevel if nil is removed?
      dataLevel: 0,
      dataTypes: [],
      definedProperties: /* @__PURE__ */ new Set(),
      topSchemaRef: y.scopeValue("schema", this.opts.code.source === !0 ? { ref: g.schema, code: (0, e.stringify)(g.schema) } : { ref: g.schema }),
      validateName: $,
      ValidationError: x,
      schema: g.schema,
      schemaEnv: g,
      rootId: m,
      baseId: g.baseId || m,
      schemaPath: e.nil,
      errSchemaPath: g.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let N;
    try {
      this._compilations.add(g), (0, n.validateFunctionCode)(j), y.optimize(this.opts.code.optimize);
      const k = y.toString();
      N = `${y.scopeRefs(s.default.scope)}return ${k}`, this.opts.code.process && (N = this.opts.code.process(N, g));
      const T = new Function(`${s.default.self}`, `${s.default.scope}`, N)(this, this.scope.get());
      if (this.scope.value($, { ref: T }), T.errors = null, T.schema = g.schema, T.schemaEnv = g, g.$async && (T.$async = !0), this.opts.code.source === !0 && (T.source = { validateName: $, validateCode: k, scopeValues: y._values }), this.opts.unevaluated) {
        const { props: O, items: B } = j;
        T.evaluated = {
          props: O instanceof e.Name ? void 0 : O,
          items: B instanceof e.Name ? void 0 : B,
          dynamicProps: O instanceof e.Name,
          dynamicItems: B instanceof e.Name
        }, T.source && (T.source.evaluated = (0, e.stringify)(T.evaluated));
      }
      return g.validate = T, g;
    } catch (k) {
      throw delete g.validate, delete g.validateName, N && this.logger.error("Error compiling schema, function code:", N), k;
    } finally {
      this._compilations.delete(g);
    }
  }
  me.compileSchema = o;
  function d(g, _, m) {
    var l;
    m = (0, a.resolveUrl)(this.opts.uriResolver, _, m);
    const i = g.refs[m];
    if (i)
      return i;
    let c = f.call(this, g, m);
    if (c === void 0) {
      const y = (l = g.localRefs) === null || l === void 0 ? void 0 : l[m], { schemaId: x } = this.opts;
      y && (c = new r({ schema: y, schemaId: x, root: g, baseId: _ }));
    }
    if (c !== void 0)
      return g.refs[m] = h.call(this, c);
  }
  me.resolveRef = d;
  function h(g) {
    return (0, a.inlineRef)(g.schema, this.opts.inlineRefs) ? g.schema : g.validate ? g : o.call(this, g);
  }
  function v(g) {
    for (const _ of this._compilations)
      if (w(_, g))
        return _;
  }
  me.getCompilingSchema = v;
  function w(g, _) {
    return g.schema === _.schema && g.root === _.root && g.baseId === _.baseId;
  }
  function f(g, _) {
    let m;
    for (; typeof (m = this.refs[_]) == "string"; )
      _ = m;
    return m || this.schemas[_] || u.call(this, g, _);
  }
  function u(g, _) {
    const m = this.opts.uriResolver.parse(_), l = (0, a._getFullPath)(this.opts.uriResolver, m);
    let i = (0, a.getFullPath)(this.opts.uriResolver, g.baseId, void 0);
    if (Object.keys(g.schema).length > 0 && l === i)
      return S.call(this, m, g);
    const c = (0, a.normalizeId)(l), y = this.refs[c] || this.schemas[c];
    if (typeof y == "string") {
      const x = u.call(this, g, y);
      return typeof x?.schema != "object" ? void 0 : S.call(this, m, x);
    }
    if (typeof y?.schema == "object") {
      if (y.validate || o.call(this, y), c === (0, a.normalizeId)(_)) {
        const { schema: x } = y, { schemaId: $ } = this.opts, j = x[$];
        return j && (i = (0, a.resolveUrl)(this.opts.uriResolver, i, j)), new r({ schema: x, schemaId: $, root: g, baseId: i });
      }
      return S.call(this, m, y);
    }
  }
  me.resolveSchema = u;
  const b = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function S(g, { baseId: _, schema: m, root: l }) {
    var i;
    if (((i = g.fragment) === null || i === void 0 ? void 0 : i[0]) !== "/")
      return;
    for (const x of g.fragment.slice(1).split("/")) {
      if (typeof m == "boolean")
        return;
      const $ = m[(0, p.unescapeFragment)(x)];
      if ($ === void 0)
        return;
      m = $;
      const j = typeof m == "object" && m[this.opts.schemaId];
      !b.has(x) && j && (_ = (0, a.resolveUrl)(this.opts.uriResolver, _, j));
    }
    let c;
    if (typeof m != "boolean" && m.$ref && !(0, p.schemaHasRulesButRef)(m, this.RULES)) {
      const x = (0, a.resolveUrl)(this.opts.uriResolver, _, m.$ref);
      c = u.call(this, l, x);
    }
    const { schemaId: y } = this.opts;
    if (c = c || new r({ schema: m, schemaId: y, root: l, baseId: _ }), c.schema !== c.root.schema)
      return c;
  }
  return me;
}
const Pc = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Oc = "Meta-schema for $data reference (JSON AnySchema extension proposal)", qc = "object", Tc = ["$data"], kc = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Dc = !1, Mc = {
  $id: Pc,
  description: Oc,
  type: qc,
  required: Tc,
  properties: kc,
  additionalProperties: Dc
};
var Dt = {}, yt = { exports: {} }, or, Xs;
function co() {
  if (Xs) return or;
  Xs = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function s(f) {
    let u = "", b = 0, S = 0;
    for (S = 0; S < f.length; S++)
      if (b = f[S].charCodeAt(0), b !== 48) {
        if (!(b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102))
          return "";
        u += f[S];
        break;
      }
    for (S += 1; S < f.length; S++) {
      if (b = f[S].charCodeAt(0), !(b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102))
        return "";
      u += f[S];
    }
    return u;
  }
  const a = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function p(f) {
    return f.length = 0, !0;
  }
  function n(f, u, b) {
    if (f.length) {
      const S = s(f);
      if (S !== "")
        u.push(S);
      else
        return b.error = !0, !1;
      f.length = 0;
    }
    return !0;
  }
  function r(f) {
    let u = 0;
    const b = { error: !1, address: "", zone: "" }, S = [], g = [];
    let _ = !1, m = !1, l = n;
    for (let i = 0; i < f.length; i++) {
      const c = f[i];
      if (!(c === "[" || c === "]"))
        if (c === ":") {
          if (_ === !0 && (m = !0), !l(g, S, b))
            break;
          if (++u > 7) {
            b.error = !0;
            break;
          }
          i > 0 && f[i - 1] === ":" && (_ = !0), S.push(":");
          continue;
        } else if (c === "%") {
          if (!l(g, S, b))
            break;
          l = p;
        } else {
          g.push(c);
          continue;
        }
    }
    return g.length && (l === p ? b.zone = g.join("") : m ? S.push(g.join("")) : S.push(s(g))), b.address = S.join(""), b;
  }
  function o(f) {
    if (d(f, ":") < 2)
      return { host: f, isIPV6: !1 };
    const u = r(f);
    if (u.error)
      return { host: f, isIPV6: !1 };
    {
      let b = u.address, S = u.address;
      return u.zone && (b += "%" + u.zone, S += "%25" + u.zone), { host: b, isIPV6: !0, escapedHost: S };
    }
  }
  function d(f, u) {
    let b = 0;
    for (let S = 0; S < f.length; S++)
      f[S] === u && b++;
    return b;
  }
  function h(f) {
    let u = f;
    const b = [];
    let S = -1, g = 0;
    for (; g = u.length; ) {
      if (g === 1) {
        if (u === ".")
          break;
        if (u === "/") {
          b.push("/");
          break;
        } else {
          b.push(u);
          break;
        }
      } else if (g === 2) {
        if (u[0] === ".") {
          if (u[1] === ".")
            break;
          if (u[1] === "/") {
            u = u.slice(2);
            continue;
          }
        } else if (u[0] === "/" && (u[1] === "." || u[1] === "/")) {
          b.push("/");
          break;
        }
      } else if (g === 3 && u === "/..") {
        b.length !== 0 && b.pop(), b.push("/");
        break;
      }
      if (u[0] === ".") {
        if (u[1] === ".") {
          if (u[2] === "/") {
            u = u.slice(3);
            continue;
          }
        } else if (u[1] === "/") {
          u = u.slice(2);
          continue;
        }
      } else if (u[0] === "/" && u[1] === ".") {
        if (u[2] === "/") {
          u = u.slice(2);
          continue;
        } else if (u[2] === "." && u[3] === "/") {
          u = u.slice(3), b.length !== 0 && b.pop();
          continue;
        }
      }
      if ((S = u.indexOf("/", 1)) === -1) {
        b.push(u);
        break;
      } else
        b.push(u.slice(0, S)), u = u.slice(S);
    }
    return b.join("");
  }
  function v(f, u) {
    const b = u !== !0 ? escape : unescape;
    return f.scheme !== void 0 && (f.scheme = b(f.scheme)), f.userinfo !== void 0 && (f.userinfo = b(f.userinfo)), f.host !== void 0 && (f.host = b(f.host)), f.path !== void 0 && (f.path = b(f.path)), f.query !== void 0 && (f.query = b(f.query)), f.fragment !== void 0 && (f.fragment = b(f.fragment)), f;
  }
  function w(f) {
    const u = [];
    if (f.userinfo !== void 0 && (u.push(f.userinfo), u.push("@")), f.host !== void 0) {
      let b = unescape(f.host);
      if (!t(b)) {
        const S = o(b);
        S.isIPV6 === !0 ? b = `[${S.escapedHost}]` : b = f.host;
      }
      u.push(b);
    }
    return (typeof f.port == "number" || typeof f.port == "string") && (u.push(":"), u.push(String(f.port))), u.length ? u.join("") : void 0;
  }
  return or = {
    nonSimpleDomain: a,
    recomposeAuthority: w,
    normalizeComponentEncoding: v,
    removeDotSegments: h,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: o,
    stringArrayToHexStripped: s
  }, or;
}
var cr, Ys;
function Lc() {
  if (Ys) return cr;
  Ys = 1;
  const { isUUID: e } = co(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, s = (
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
  function a(c) {
    return s.indexOf(
      /** @type {*} */
      c
    ) !== -1;
  }
  function p(c) {
    return c.secure === !0 ? !0 : c.secure === !1 ? !1 : c.scheme ? c.scheme.length === 3 && (c.scheme[0] === "w" || c.scheme[0] === "W") && (c.scheme[1] === "s" || c.scheme[1] === "S") && (c.scheme[2] === "s" || c.scheme[2] === "S") : !1;
  }
  function n(c) {
    return c.host || (c.error = c.error || "HTTP URIs must have a host."), c;
  }
  function r(c) {
    const y = String(c.scheme).toLowerCase() === "https";
    return (c.port === (y ? 443 : 80) || c.port === "") && (c.port = void 0), c.path || (c.path = "/"), c;
  }
  function o(c) {
    return c.secure = p(c), c.resourceName = (c.path || "/") + (c.query ? "?" + c.query : ""), c.path = void 0, c.query = void 0, c;
  }
  function d(c) {
    if ((c.port === (p(c) ? 443 : 80) || c.port === "") && (c.port = void 0), typeof c.secure == "boolean" && (c.scheme = c.secure ? "wss" : "ws", c.secure = void 0), c.resourceName) {
      const [y, x] = c.resourceName.split("?");
      c.path = y && y !== "/" ? y : void 0, c.query = x, c.resourceName = void 0;
    }
    return c.fragment = void 0, c;
  }
  function h(c, y) {
    if (!c.path)
      return c.error = "URN can not be parsed", c;
    const x = c.path.match(t);
    if (x) {
      const $ = y.scheme || c.scheme || "urn";
      c.nid = x[1].toLowerCase(), c.nss = x[2];
      const j = `${$}:${y.nid || c.nid}`, N = i(j);
      c.path = void 0, N && (c = N.parse(c, y));
    } else
      c.error = c.error || "URN can not be parsed.";
    return c;
  }
  function v(c, y) {
    if (c.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const x = y.scheme || c.scheme || "urn", $ = c.nid.toLowerCase(), j = `${x}:${y.nid || $}`, N = i(j);
    N && (c = N.serialize(c, y));
    const k = c, C = c.nss;
    return k.path = `${$ || y.nid}:${C}`, y.skipEscape = !0, k;
  }
  function w(c, y) {
    const x = c;
    return x.uuid = x.nss, x.nss = void 0, !y.tolerant && (!x.uuid || !e(x.uuid)) && (x.error = x.error || "UUID is not valid."), x;
  }
  function f(c) {
    const y = c;
    return y.nss = (c.uuid || "").toLowerCase(), y;
  }
  const u = (
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
      domainHost: u.domainHost,
      parse: n,
      serialize: r
    }
  ), S = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: o,
      serialize: d
    }
  ), g = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: S.domainHost,
      parse: S.parse,
      serialize: S.serialize
    }
  ), l = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: u,
      https: b,
      ws: S,
      wss: g,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: h,
          serialize: v,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: w,
          serialize: f,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(l, null);
  function i(c) {
    return c && (l[
      /** @type {SchemeName} */
      c
    ] || l[
      /** @type {SchemeName} */
      c.toLowerCase()
    ]) || void 0;
  }
  return cr = {
    wsIsSecure: p,
    SCHEMES: l,
    isValidSchemeName: a,
    getSchemeHandler: i
  }, cr;
}
var ei;
function Cc() {
  if (ei) return yt.exports;
  ei = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: s, normalizeComponentEncoding: a, isIPv4: p, nonSimpleDomain: n } = co(), { SCHEMES: r, getSchemeHandler: o } = Lc();
  function d(g, _) {
    return typeof g == "string" ? g = /** @type {T} */
    f(b(g, _), _) : typeof g == "object" && (g = /** @type {T} */
    b(f(g, _), _)), g;
  }
  function h(g, _, m) {
    const l = m ? Object.assign({ scheme: "null" }, m) : { scheme: "null" }, i = v(b(g, l), b(_, l), l, !0);
    return l.skipEscape = !0, f(i, l);
  }
  function v(g, _, m, l) {
    const i = {};
    return l || (g = b(f(g, m), m), _ = b(f(_, m), m)), m = m || {}, !m.tolerant && _.scheme ? (i.scheme = _.scheme, i.userinfo = _.userinfo, i.host = _.host, i.port = _.port, i.path = t(_.path || ""), i.query = _.query) : (_.userinfo !== void 0 || _.host !== void 0 || _.port !== void 0 ? (i.userinfo = _.userinfo, i.host = _.host, i.port = _.port, i.path = t(_.path || ""), i.query = _.query) : (_.path ? (_.path[0] === "/" ? i.path = t(_.path) : ((g.userinfo !== void 0 || g.host !== void 0 || g.port !== void 0) && !g.path ? i.path = "/" + _.path : g.path ? i.path = g.path.slice(0, g.path.lastIndexOf("/") + 1) + _.path : i.path = _.path, i.path = t(i.path)), i.query = _.query) : (i.path = g.path, _.query !== void 0 ? i.query = _.query : i.query = g.query), i.userinfo = g.userinfo, i.host = g.host, i.port = g.port), i.scheme = g.scheme), i.fragment = _.fragment, i;
  }
  function w(g, _, m) {
    return typeof g == "string" ? (g = unescape(g), g = f(a(b(g, m), !0), { ...m, skipEscape: !0 })) : typeof g == "object" && (g = f(a(g, !0), { ...m, skipEscape: !0 })), typeof _ == "string" ? (_ = unescape(_), _ = f(a(b(_, m), !0), { ...m, skipEscape: !0 })) : typeof _ == "object" && (_ = f(a(_, !0), { ...m, skipEscape: !0 })), g.toLowerCase() === _.toLowerCase();
  }
  function f(g, _) {
    const m = {
      host: g.host,
      scheme: g.scheme,
      userinfo: g.userinfo,
      port: g.port,
      path: g.path,
      query: g.query,
      nid: g.nid,
      nss: g.nss,
      uuid: g.uuid,
      fragment: g.fragment,
      reference: g.reference,
      resourceName: g.resourceName,
      secure: g.secure,
      error: ""
    }, l = Object.assign({}, _), i = [], c = o(l.scheme || m.scheme);
    c && c.serialize && c.serialize(m, l), m.path !== void 0 && (l.skipEscape ? m.path = unescape(m.path) : (m.path = escape(m.path), m.scheme !== void 0 && (m.path = m.path.split("%3A").join(":")))), l.reference !== "suffix" && m.scheme && i.push(m.scheme, ":");
    const y = s(m);
    if (y !== void 0 && (l.reference !== "suffix" && i.push("//"), i.push(y), m.path && m.path[0] !== "/" && i.push("/")), m.path !== void 0) {
      let x = m.path;
      !l.absolutePath && (!c || !c.absolutePath) && (x = t(x)), y === void 0 && x[0] === "/" && x[1] === "/" && (x = "/%2F" + x.slice(2)), i.push(x);
    }
    return m.query !== void 0 && i.push("?", m.query), m.fragment !== void 0 && i.push("#", m.fragment), i.join("");
  }
  const u = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function b(g, _) {
    const m = Object.assign({}, _), l = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let i = !1;
    m.reference === "suffix" && (m.scheme ? g = m.scheme + ":" + g : g = "//" + g);
    const c = g.match(u);
    if (c) {
      if (l.scheme = c[1], l.userinfo = c[3], l.host = c[4], l.port = parseInt(c[5], 10), l.path = c[6] || "", l.query = c[7], l.fragment = c[8], isNaN(l.port) && (l.port = c[5]), l.host)
        if (p(l.host) === !1) {
          const $ = e(l.host);
          l.host = $.host.toLowerCase(), i = $.isIPV6;
        } else
          i = !0;
      l.scheme === void 0 && l.userinfo === void 0 && l.host === void 0 && l.port === void 0 && l.query === void 0 && !l.path ? l.reference = "same-document" : l.scheme === void 0 ? l.reference = "relative" : l.fragment === void 0 ? l.reference = "absolute" : l.reference = "uri", m.reference && m.reference !== "suffix" && m.reference !== l.reference && (l.error = l.error || "URI is not a " + m.reference + " reference.");
      const y = o(m.scheme || l.scheme);
      if (!m.unicodeSupport && (!y || !y.unicodeSupport) && l.host && (m.domainHost || y && y.domainHost) && i === !1 && n(l.host))
        try {
          l.host = URL.domainToASCII(l.host.toLowerCase());
        } catch (x) {
          l.error = l.error || "Host's domain name can not be converted to ASCII: " + x;
        }
      (!y || y && !y.skipNormalize) && (g.indexOf("%") !== -1 && (l.scheme !== void 0 && (l.scheme = unescape(l.scheme)), l.host !== void 0 && (l.host = unescape(l.host))), l.path && (l.path = escape(unescape(l.path))), l.fragment && (l.fragment = encodeURI(decodeURIComponent(l.fragment)))), y && y.parse && y.parse(l, m);
    } else
      l.error = l.error || "URI can not be parsed.";
    return l;
  }
  const S = {
    SCHEMES: r,
    normalize: d,
    resolve: h,
    resolveComponent: v,
    equal: w,
    serialize: f,
    parse: b
  };
  return yt.exports = S, yt.exports.default = S, yt.exports.fastUri = S, yt.exports;
}
var ti;
function Uc() {
  if (ti) return Dt;
  ti = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = Cc();
  return e.code = 'require("ajv/dist/runtime/uri").default', Dt.default = e, Dt;
}
var ni;
function lo() {
  return ni || (ni = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ xt();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var s = /* @__PURE__ */ ee();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return s._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return s.str;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return s.stringify;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return s.nil;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return s.Name;
    } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
      return s.CodeGen;
    } });
    const a = /* @__PURE__ */ Fn(), p = /* @__PURE__ */ It(), n = /* @__PURE__ */ io(), r = /* @__PURE__ */ Hn(), o = /* @__PURE__ */ ee(), d = /* @__PURE__ */ zn(), h = /* @__PURE__ */ Mn(), v = /* @__PURE__ */ ne(), w = Mc, f = /* @__PURE__ */ Uc(), u = (A, q) => new RegExp(A, q);
    u.code = "new RegExp";
    const b = ["removeAdditional", "useDefaults", "coerceTypes"], S = /* @__PURE__ */ new Set([
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
    ]), g = {
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
    }, _ = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, m = 200;
    function l(A) {
      var q, U, D, E, I, R, M, J, W, K, L, V, z, Z, Q, Y, re, le, ae, oe, ie, Ee, ge, Kn, Zn;
      const ht = A.strict, Wn = (q = A.code) === null || q === void 0 ? void 0 : q.optimize, bs = Wn === !0 || Wn === void 0 ? 1 : Wn || 0, ws = (D = (U = A.code) === null || U === void 0 ? void 0 : U.regExp) !== null && D !== void 0 ? D : u, To = (E = A.uriResolver) !== null && E !== void 0 ? E : f.default;
      return {
        strictSchema: (R = (I = A.strictSchema) !== null && I !== void 0 ? I : ht) !== null && R !== void 0 ? R : !0,
        strictNumbers: (J = (M = A.strictNumbers) !== null && M !== void 0 ? M : ht) !== null && J !== void 0 ? J : !0,
        strictTypes: (K = (W = A.strictTypes) !== null && W !== void 0 ? W : ht) !== null && K !== void 0 ? K : "log",
        strictTuples: (V = (L = A.strictTuples) !== null && L !== void 0 ? L : ht) !== null && V !== void 0 ? V : "log",
        strictRequired: (Z = (z = A.strictRequired) !== null && z !== void 0 ? z : ht) !== null && Z !== void 0 ? Z : !1,
        code: A.code ? { ...A.code, optimize: bs, regExp: ws } : { optimize: bs, regExp: ws },
        loopRequired: (Q = A.loopRequired) !== null && Q !== void 0 ? Q : m,
        loopEnum: (Y = A.loopEnum) !== null && Y !== void 0 ? Y : m,
        meta: (re = A.meta) !== null && re !== void 0 ? re : !0,
        messages: (le = A.messages) !== null && le !== void 0 ? le : !0,
        inlineRefs: (ae = A.inlineRefs) !== null && ae !== void 0 ? ae : !0,
        schemaId: (oe = A.schemaId) !== null && oe !== void 0 ? oe : "$id",
        addUsedSchema: (ie = A.addUsedSchema) !== null && ie !== void 0 ? ie : !0,
        validateSchema: (Ee = A.validateSchema) !== null && Ee !== void 0 ? Ee : !0,
        validateFormats: (ge = A.validateFormats) !== null && ge !== void 0 ? ge : !0,
        unicodeRegExp: (Kn = A.unicodeRegExp) !== null && Kn !== void 0 ? Kn : !0,
        int32range: (Zn = A.int32range) !== null && Zn !== void 0 ? Zn : !0,
        uriResolver: To
      };
    }
    class i {
      constructor(q = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), q = this.opts = { ...q, ...l(q) };
        const { es5: U, lines: D } = this.opts.code;
        this.scope = new o.ValueScope({ scope: {}, prefixes: S, es5: U, lines: D }), this.logger = C(q.logger);
        const E = q.validateFormats;
        q.validateFormats = !1, this.RULES = (0, n.getRules)(), c.call(this, g, q, "NOT SUPPORTED"), c.call(this, _, q, "DEPRECATED", "warn"), this._metaOpts = N.call(this), q.formats && $.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), q.keywords && j.call(this, q.keywords), typeof q.meta == "object" && this.addMetaSchema(q.meta), x.call(this), q.validateFormats = E;
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
          await I.call(this, K.$schema);
          const V = this._addSchema(K, L);
          return V.validate || R.call(this, V);
        }
        async function I(K) {
          K && !this.getSchema(K) && await E.call(this, { $ref: K }, !0);
        }
        async function R(K) {
          try {
            return this._compileSchemaEnv(K);
          } catch (L) {
            if (!(L instanceof p.default))
              throw L;
            return M.call(this, L), await J.call(this, L.missingSchema), R.call(this, K);
          }
        }
        function M({ missingSchema: K, missingRef: L }) {
          if (this.refs[K])
            throw new Error(`AnySchema ${K} is loaded but ${L} cannot be resolved`);
        }
        async function J(K) {
          const L = await W.call(this, K);
          this.refs[K] || await I.call(this, L.$schema), this.refs[K] || this.addSchema(L, K, U);
        }
        async function W(K) {
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
        let I;
        if (typeof q == "object") {
          const { schemaId: R } = this.opts;
          if (I = q[R], I !== void 0 && typeof I != "string")
            throw new Error(`schema ${R} must be string`);
        }
        return U = (0, d.normalizeId)(U || I), this._checkUnique(U), this.schemas[U] = this._addSchema(q, D, U, E, !0), this;
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
          const I = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(I);
          else
            throw new Error(I);
        }
        return E;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(q) {
        let U;
        for (; typeof (U = y.call(this, q)) == "string"; )
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
            const U = y.call(this, q);
            return typeof U == "object" && this._cache.delete(U.schema), delete this.schemas[q], delete this.refs[q], this;
          }
          case "object": {
            const U = q;
            this._cache.delete(U);
            let D = q[this.opts.schemaId];
            return D && (D = (0, d.normalizeId)(D), delete this.schemas[D], delete this.refs[D]), this;
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
        if (O.call(this, D, U), !U)
          return (0, v.eachItem)(D, (I) => B.call(this, I)), this;
        H.call(this, U);
        const E = {
          ...U,
          type: (0, h.getJSONTypes)(U.type),
          schemaType: (0, h.getJSONTypes)(U.schemaType)
        };
        return (0, v.eachItem)(D, E.type.length === 0 ? (I) => B.call(this, I, E) : (I) => E.type.forEach((R) => B.call(this, I, E, R))), this;
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
          const E = D.rules.findIndex((I) => I.keyword === q);
          E >= 0 && D.rules.splice(E, 1);
        }
        return this;
      }
      // Add format
      addFormat(q, U) {
        return typeof U == "string" && (U = new RegExp(U)), this.formats[q] = U, this;
      }
      errorsText(q = this.errors, { separator: U = ", ", dataVar: D = "data" } = {}) {
        return !q || q.length === 0 ? "No errors" : q.map((E) => `${D}${E.instancePath} ${E.message}`).reduce((E, I) => E + U + I);
      }
      $dataMetaSchema(q, U) {
        const D = this.RULES.all;
        q = JSON.parse(JSON.stringify(q));
        for (const E of U) {
          const I = E.split("/").slice(1);
          let R = q;
          for (const M of I)
            R = R[M];
          for (const M in D) {
            const J = D[M];
            if (typeof J != "object")
              continue;
            const { $data: W } = J.definition, K = R[M];
            W && K && (R[M] = G(K));
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
      _addSchema(q, U, D, E = this.opts.validateSchema, I = this.opts.addUsedSchema) {
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
        D = (0, d.normalizeId)(R || D);
        const W = d.getSchemaRefs.call(this, q, D);
        return J = new r.SchemaEnv({ schema: q, schemaId: M, meta: U, baseId: D, localRefs: W }), this._cache.set(J.schema, J), I && !D.startsWith("#") && (D && this._checkUnique(D), this.refs[D] = J), E && this.validateSchema(q, !0), J;
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
    i.ValidationError = a.default, i.MissingRefError = p.default, e.default = i;
    function c(A, q, U, D = "error") {
      for (const E in A) {
        const I = E;
        I in q && this.logger[D](`${U}: option ${E}. ${A[I]}`);
      }
    }
    function y(A) {
      return A = (0, d.normalizeId)(A), this.schemas[A] || this.refs[A];
    }
    function x() {
      const A = this.opts.schemas;
      if (A)
        if (Array.isArray(A))
          this.addSchema(A);
        else
          for (const q in A)
            this.addSchema(A[q], q);
    }
    function $() {
      for (const A in this.opts.formats) {
        const q = this.opts.formats[A];
        q && this.addFormat(A, q);
      }
    }
    function j(A) {
      if (Array.isArray(A)) {
        this.addVocabulary(A);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const q in A) {
        const U = A[q];
        U.keyword || (U.keyword = q), this.addKeyword(U);
      }
    }
    function N() {
      const A = { ...this.opts };
      for (const q of b)
        delete A[q];
      return A;
    }
    const k = { log() {
    }, warn() {
    }, error() {
    } };
    function C(A) {
      if (A === !1)
        return k;
      if (A === void 0)
        return console;
      if (A.log && A.warn && A.error)
        return A;
      throw new Error("logger must implement log, warn and error methods");
    }
    const T = /^[a-z_$][a-z0-9_$:-]*$/i;
    function O(A, q) {
      const { RULES: U } = this;
      if ((0, v.eachItem)(A, (D) => {
        if (U.keywords[D])
          throw new Error(`Keyword ${D} is already defined`);
        if (!T.test(D))
          throw new Error(`Keyword ${D} has invalid name`);
      }), !!q && q.$data && !("code" in q || "validate" in q))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function B(A, q, U) {
      var D;
      const E = q?.post;
      if (U && E)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: I } = this;
      let R = E ? I.post : I.rules.find(({ type: J }) => J === U);
      if (R || (R = { type: U, rules: [] }, I.rules.push(R)), I.keywords[A] = !0, !q)
        return;
      const M = {
        keyword: A,
        definition: {
          ...q,
          type: (0, h.getJSONTypes)(q.type),
          schemaType: (0, h.getJSONTypes)(q.schemaType)
        }
      };
      q.before ? P.call(this, R, M, q.before) : R.rules.push(M), I.all[A] = M, (D = q.implements) === null || D === void 0 || D.forEach((J) => this.addKeyword(J));
    }
    function P(A, q, U) {
      const D = A.rules.findIndex((E) => E.keyword === U);
      D >= 0 ? A.rules.splice(D, 0, q) : (A.rules.push(q), this.logger.warn(`rule ${U} is not defined`));
    }
    function H(A) {
      let { metaSchema: q } = A;
      q !== void 0 && (A.$data && this.opts.$data && (q = G(q)), A.validateSchema = this.compile(q, !0));
    }
    const F = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function G(A) {
      return { anyOf: [A, F] };
    }
  })(er)), er;
}
var Mt = {}, Lt = {}, Ct = {}, ri;
function Vc() {
  if (ri) return Ct;
  ri = 1, Object.defineProperty(Ct, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Ct.default = e, Ct;
}
var He = {}, si;
function cs() {
  if (si) return He;
  si = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.callRef = He.getValidate = void 0;
  const e = /* @__PURE__ */ It(), t = /* @__PURE__ */ Ie(), s = /* @__PURE__ */ ee(), a = /* @__PURE__ */ xe(), p = /* @__PURE__ */ Hn(), n = /* @__PURE__ */ ne(), r = {
    keyword: "$ref",
    schemaType: "string",
    code(h) {
      const { gen: v, schema: w, it: f } = h, { baseId: u, schemaEnv: b, validateName: S, opts: g, self: _ } = f, { root: m } = b;
      if ((w === "#" || w === "#/") && u === m.baseId)
        return i();
      const l = p.resolveRef.call(_, m, u, w);
      if (l === void 0)
        throw new e.default(f.opts.uriResolver, u, w);
      if (l instanceof p.SchemaEnv)
        return c(l);
      return y(l);
      function i() {
        if (b === m)
          return d(h, S, b, b.$async);
        const x = v.scopeValue("root", { ref: m });
        return d(h, (0, s._)`${x}.validate`, m, m.$async);
      }
      function c(x) {
        const $ = o(h, x);
        d(h, $, x, x.$async);
      }
      function y(x) {
        const $ = v.scopeValue("schema", g.code.source === !0 ? { ref: x, code: (0, s.stringify)(x) } : { ref: x }), j = v.name("valid"), N = h.subschema({
          schema: x,
          dataTypes: [],
          schemaPath: s.nil,
          topSchemaRef: $,
          errSchemaPath: w
        }, j);
        h.mergeEvaluated(N), h.ok(j);
      }
    }
  };
  function o(h, v) {
    const { gen: w } = h;
    return v.validate ? w.scopeValue("validate", { ref: v.validate }) : (0, s._)`${w.scopeValue("wrapper", { ref: v })}.validate`;
  }
  He.getValidate = o;
  function d(h, v, w, f) {
    const { gen: u, it: b } = h, { allErrors: S, schemaEnv: g, opts: _ } = b, m = _.passContext ? a.default.this : s.nil;
    f ? l() : i();
    function l() {
      if (!g.$async)
        throw new Error("async schema referenced by sync schema");
      const x = u.let("valid");
      u.try(() => {
        u.code((0, s._)`await ${(0, t.callValidateCode)(h, v, m)}`), y(v), S || u.assign(x, !0);
      }, ($) => {
        u.if((0, s._)`!(${$} instanceof ${b.ValidationError})`, () => u.throw($)), c($), S || u.assign(x, !1);
      }), h.ok(x);
    }
    function i() {
      h.result((0, t.callValidateCode)(h, v, m), () => y(v), () => c(v));
    }
    function c(x) {
      const $ = (0, s._)`${x}.errors`;
      u.assign(a.default.vErrors, (0, s._)`${a.default.vErrors} === null ? ${$} : ${a.default.vErrors}.concat(${$})`), u.assign(a.default.errors, (0, s._)`${a.default.vErrors}.length`);
    }
    function y(x) {
      var $;
      if (!b.opts.unevaluated)
        return;
      const j = ($ = w?.validate) === null || $ === void 0 ? void 0 : $.evaluated;
      if (b.props !== !0)
        if (j && !j.dynamicProps)
          j.props !== void 0 && (b.props = n.mergeEvaluated.props(u, j.props, b.props));
        else {
          const N = u.var("props", (0, s._)`${x}.evaluated.props`);
          b.props = n.mergeEvaluated.props(u, N, b.props, s.Name);
        }
      if (b.items !== !0)
        if (j && !j.dynamicItems)
          j.items !== void 0 && (b.items = n.mergeEvaluated.items(u, j.items, b.items));
        else {
          const N = u.var("items", (0, s._)`${x}.evaluated.items`);
          b.items = n.mergeEvaluated.items(u, N, b.items, s.Name);
        }
    }
  }
  return He.callRef = d, He.default = r, He;
}
var ii;
function uo() {
  if (ii) return Lt;
  ii = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Vc(), t = /* @__PURE__ */ cs(), s = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Lt.default = s, Lt;
}
var Ut = {}, Vt = {}, ai;
function zc() {
  if (ai) return Vt;
  ai = 1, Object.defineProperty(Vt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = e.operators, s = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, a = {
    message: ({ keyword: n, schemaCode: r }) => (0, e.str)`must be ${s[n].okStr} ${r}`,
    params: ({ keyword: n, schemaCode: r }) => (0, e._)`{comparison: ${s[n].okStr}, limit: ${r}}`
  }, p = {
    keyword: Object.keys(s),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: a,
    code(n) {
      const { keyword: r, data: o, schemaCode: d } = n;
      n.fail$data((0, e._)`${o} ${s[r].fail} ${d} || isNaN(${o})`);
    }
  };
  return Vt.default = p, Vt;
}
var zt = {}, oi;
function Fc() {
  if (oi) return zt;
  oi = 1, Object.defineProperty(zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), s = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: a }) => (0, e.str)`must be multiple of ${a}`,
      params: ({ schemaCode: a }) => (0, e._)`{multipleOf: ${a}}`
    },
    code(a) {
      const { gen: p, data: n, schemaCode: r, it: o } = a, d = o.opts.multipleOfPrecision, h = p.let("res"), v = d ? (0, e._)`Math.abs(Math.round(${h}) - ${h}) > 1e-${d}` : (0, e._)`${h} !== parseInt(${h})`;
      a.fail$data((0, e._)`(${r} === 0 || (${h} = ${n}/${r}, ${v}))`);
    }
  };
  return zt.default = s, zt;
}
var Ft = {}, Ht = {}, ci;
function Hc() {
  if (ci) return Ht;
  ci = 1, Object.defineProperty(Ht, "__esModule", { value: !0 });
  function e(t) {
    const s = t.length;
    let a = 0, p = 0, n;
    for (; p < s; )
      a++, n = t.charCodeAt(p++), n >= 55296 && n <= 56319 && p < s && (n = t.charCodeAt(p), (n & 64512) === 56320 && p++);
    return a;
  }
  return Ht.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Ht;
}
var di;
function Jc() {
  if (di) return Ft;
  di = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), s = /* @__PURE__ */ Hc(), p = {
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
      const { keyword: r, data: o, schemaCode: d, it: h } = n, v = r === "maxLength" ? e.operators.GT : e.operators.LT, w = h.opts.unicode === !1 ? (0, e._)`${o}.length` : (0, e._)`${(0, t.useFunc)(n.gen, s.default)}(${o})`;
      n.fail$data((0, e._)`${w} ${v} ${d}`);
    }
  };
  return Ft.default = p, Ft;
}
var Jt = {}, li;
function Bc() {
  if (li) return Jt;
  li = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ie(), t = /* @__PURE__ */ ne(), s = /* @__PURE__ */ ee(), p = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, s.str)`must match pattern "${n}"`,
      params: ({ schemaCode: n }) => (0, s._)`{pattern: ${n}}`
    },
    code(n) {
      const { gen: r, data: o, $data: d, schema: h, schemaCode: v, it: w } = n, f = w.opts.unicodeRegExp ? "u" : "";
      if (d) {
        const { regExp: u } = w.opts.code, b = u.code === "new RegExp" ? (0, s._)`new RegExp` : (0, t.useFunc)(r, u), S = r.let("valid");
        r.try(() => r.assign(S, (0, s._)`${b}(${v}, ${f}).test(${o})`), () => r.assign(S, !1)), n.fail$data((0, s._)`!${S}`);
      } else {
        const u = (0, e.usePattern)(n, h);
        n.fail$data((0, s._)`!${u}.test(${o})`);
      }
    }
  };
  return Jt.default = p, Jt;
}
var Bt = {}, ui;
function Gc() {
  if (ui) return Bt;
  ui = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), s = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: a, schemaCode: p }) {
        const n = a === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${n} than ${p} properties`;
      },
      params: ({ schemaCode: a }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { keyword: p, data: n, schemaCode: r } = a, o = p === "maxProperties" ? e.operators.GT : e.operators.LT;
      a.fail$data((0, e._)`Object.keys(${n}).length ${o} ${r}`);
    }
  };
  return Bt.default = s, Bt;
}
var Gt = {}, fi;
function Kc() {
  if (fi) return Gt;
  fi = 1, Object.defineProperty(Gt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ie(), t = /* @__PURE__ */ ee(), s = /* @__PURE__ */ ne(), p = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: n } }) => (0, t.str)`must have required property '${n}'`,
      params: ({ params: { missingProperty: n } }) => (0, t._)`{missingProperty: ${n}}`
    },
    code(n) {
      const { gen: r, schema: o, schemaCode: d, data: h, $data: v, it: w } = n, { opts: f } = w;
      if (!v && o.length === 0)
        return;
      const u = o.length >= f.loopRequired;
      if (w.allErrors ? b() : S(), f.strictRequired) {
        const m = n.parentSchema.properties, { definedProperties: l } = n.it;
        for (const i of o)
          if (m?.[i] === void 0 && !l.has(i)) {
            const c = w.schemaEnv.baseId + w.errSchemaPath, y = `required property "${i}" is not defined at "${c}" (strictRequired)`;
            (0, s.checkStrictMode)(w, y, w.opts.strictRequired);
          }
      }
      function b() {
        if (u || v)
          n.block$data(t.nil, g);
        else
          for (const m of o)
            (0, e.checkReportMissingProp)(n, m);
      }
      function S() {
        const m = r.let("missing");
        if (u || v) {
          const l = r.let("valid", !0);
          n.block$data(l, () => _(m, l)), n.ok(l);
        } else
          r.if((0, e.checkMissingProp)(n, o, m)), (0, e.reportMissingProp)(n, m), r.else();
      }
      function g() {
        r.forOf("prop", d, (m) => {
          n.setParams({ missingProperty: m }), r.if((0, e.noPropertyInData)(r, h, m, f.ownProperties), () => n.error());
        });
      }
      function _(m, l) {
        n.setParams({ missingProperty: m }), r.forOf(m, d, () => {
          r.assign(l, (0, e.propertyInData)(r, h, m, f.ownProperties)), r.if((0, t.not)(l), () => {
            n.error(), r.break();
          });
        }, t.nil);
      }
    }
  };
  return Gt.default = p, Gt;
}
var Kt = {}, pi;
function Zc() {
  if (pi) return Kt;
  pi = 1, Object.defineProperty(Kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), s = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: a, schemaCode: p }) {
        const n = a === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${n} than ${p} items`;
      },
      params: ({ schemaCode: a }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { keyword: p, data: n, schemaCode: r } = a, o = p === "maxItems" ? e.operators.GT : e.operators.LT;
      a.fail$data((0, e._)`${n}.length ${o} ${r}`);
    }
  };
  return Kt.default = s, Kt;
}
var Zt = {}, Wt = {}, hi;
function ds() {
  if (hi) return Wt;
  hi = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = oo();
  return e.code = 'require("ajv/dist/runtime/equal").default', Wt.default = e, Wt;
}
var mi;
function Wc() {
  if (mi) return Zt;
  mi = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Mn(), t = /* @__PURE__ */ ee(), s = /* @__PURE__ */ ne(), a = /* @__PURE__ */ ds(), n = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: r, j: o } }) => (0, t.str)`must NOT have duplicate items (items ## ${o} and ${r} are identical)`,
      params: ({ params: { i: r, j: o } }) => (0, t._)`{i: ${r}, j: ${o}}`
    },
    code(r) {
      const { gen: o, data: d, $data: h, schema: v, parentSchema: w, schemaCode: f, it: u } = r;
      if (!h && !v)
        return;
      const b = o.let("valid"), S = w.items ? (0, e.getSchemaTypes)(w.items) : [];
      r.block$data(b, g, (0, t._)`${f} === false`), r.ok(b);
      function g() {
        const i = o.let("i", (0, t._)`${d}.length`), c = o.let("j");
        r.setParams({ i, j: c }), o.assign(b, !0), o.if((0, t._)`${i} > 1`, () => (_() ? m : l)(i, c));
      }
      function _() {
        return S.length > 0 && !S.some((i) => i === "object" || i === "array");
      }
      function m(i, c) {
        const y = o.name("item"), x = (0, e.checkDataTypes)(S, y, u.opts.strictNumbers, e.DataType.Wrong), $ = o.const("indices", (0, t._)`{}`);
        o.for((0, t._)`;${i}--;`, () => {
          o.let(y, (0, t._)`${d}[${i}]`), o.if(x, (0, t._)`continue`), S.length > 1 && o.if((0, t._)`typeof ${y} == "string"`, (0, t._)`${y} += "_"`), o.if((0, t._)`typeof ${$}[${y}] == "number"`, () => {
            o.assign(c, (0, t._)`${$}[${y}]`), r.error(), o.assign(b, !1).break();
          }).code((0, t._)`${$}[${y}] = ${i}`);
        });
      }
      function l(i, c) {
        const y = (0, s.useFunc)(o, a.default), x = o.name("outer");
        o.label(x).for((0, t._)`;${i}--;`, () => o.for((0, t._)`${c} = ${i}; ${c}--;`, () => o.if((0, t._)`${y}(${d}[${i}], ${d}[${c}])`, () => {
          r.error(), o.assign(b, !1).break(x);
        })));
      }
    }
  };
  return Zt.default = n, Zt;
}
var Qt = {}, yi;
function Qc() {
  if (yi) return Qt;
  yi = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), s = /* @__PURE__ */ ds(), p = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: n }) => (0, e._)`{allowedValue: ${n}}`
    },
    code(n) {
      const { gen: r, data: o, $data: d, schemaCode: h, schema: v } = n;
      d || v && typeof v == "object" ? n.fail$data((0, e._)`!${(0, t.useFunc)(r, s.default)}(${o}, ${h})`) : n.fail((0, e._)`${v} !== ${o}`);
    }
  };
  return Qt.default = p, Qt;
}
var Xt = {}, gi;
function Xc() {
  if (gi) return Xt;
  gi = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), s = /* @__PURE__ */ ds(), p = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: n }) => (0, e._)`{allowedValues: ${n}}`
    },
    code(n) {
      const { gen: r, data: o, $data: d, schema: h, schemaCode: v, it: w } = n;
      if (!d && h.length === 0)
        throw new Error("enum must have non-empty array");
      const f = h.length >= w.opts.loopEnum;
      let u;
      const b = () => u ?? (u = (0, t.useFunc)(r, s.default));
      let S;
      if (f || d)
        S = r.let("valid"), n.block$data(S, g);
      else {
        if (!Array.isArray(h))
          throw new Error("ajv implementation error");
        const m = r.const("vSchema", v);
        S = (0, e.or)(...h.map((l, i) => _(m, i)));
      }
      n.pass(S);
      function g() {
        r.assign(S, !1), r.forOf("v", v, (m) => r.if((0, e._)`${b()}(${o}, ${m})`, () => r.assign(S, !0).break()));
      }
      function _(m, l) {
        const i = h[l];
        return typeof i == "object" && i !== null ? (0, e._)`${b()}(${o}, ${m}[${l}])` : (0, e._)`${o} === ${i}`;
      }
    }
  };
  return Xt.default = p, Xt;
}
var vi;
function fo() {
  if (vi) return Ut;
  vi = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zc(), t = /* @__PURE__ */ Fc(), s = /* @__PURE__ */ Jc(), a = /* @__PURE__ */ Bc(), p = /* @__PURE__ */ Gc(), n = /* @__PURE__ */ Kc(), r = /* @__PURE__ */ Zc(), o = /* @__PURE__ */ Wc(), d = /* @__PURE__ */ Qc(), h = /* @__PURE__ */ Xc(), v = [
    // number
    e.default,
    t.default,
    // string
    s.default,
    a.default,
    // object
    p.default,
    n.default,
    // array
    r.default,
    o.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    d.default,
    h.default
  ];
  return Ut.default = v, Ut;
}
var Yt = {}, tt = {}, bi;
function po() {
  if (bi) return tt;
  bi = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.validateAdditionalItems = void 0;
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
      const { parentSchema: r, it: o } = n, { items: d } = r;
      if (!Array.isArray(d)) {
        (0, t.checkStrictMode)(o, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      p(n, d);
    }
  };
  function p(n, r) {
    const { gen: o, schema: d, data: h, keyword: v, it: w } = n;
    w.items = !0;
    const f = o.const("len", (0, e._)`${h}.length`);
    if (d === !1)
      n.setParams({ len: r.length }), n.pass((0, e._)`${f} <= ${r.length}`);
    else if (typeof d == "object" && !(0, t.alwaysValidSchema)(w, d)) {
      const b = o.var("valid", (0, e._)`${f} <= ${r.length}`);
      o.if((0, e.not)(b), () => u(b)), n.ok(b);
    }
    function u(b) {
      o.forRange("i", r.length, f, (S) => {
        n.subschema({ keyword: v, dataProp: S, dataPropType: t.Type.Num }, b), w.allErrors || o.if((0, e.not)(b), () => o.break());
      });
    }
  }
  return tt.validateAdditionalItems = p, tt.default = a, tt;
}
var en = {}, nt = {}, wi;
function ho() {
  if (wi) return nt;
  wi = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.validateTuple = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), s = /* @__PURE__ */ Ie(), a = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(n) {
      const { schema: r, it: o } = n;
      if (Array.isArray(r))
        return p(n, "additionalItems", r);
      o.items = !0, !(0, t.alwaysValidSchema)(o, r) && n.ok((0, s.validateArray)(n));
    }
  };
  function p(n, r, o = n.schema) {
    const { gen: d, parentSchema: h, data: v, keyword: w, it: f } = n;
    S(h), f.opts.unevaluated && o.length && f.items !== !0 && (f.items = t.mergeEvaluated.items(d, o.length, f.items));
    const u = d.name("valid"), b = d.const("len", (0, e._)`${v}.length`);
    o.forEach((g, _) => {
      (0, t.alwaysValidSchema)(f, g) || (d.if((0, e._)`${b} > ${_}`, () => n.subschema({
        keyword: w,
        schemaProp: _,
        dataProp: _
      }, u)), n.ok(u));
    });
    function S(g) {
      const { opts: _, errSchemaPath: m } = f, l = o.length, i = l === g.minItems && (l === g.maxItems || g[r] === !1);
      if (_.strictTuples && !i) {
        const c = `"${w}" is ${l}-tuple, but minItems or maxItems/${r} are not specified or different at path "${m}"`;
        (0, t.checkStrictMode)(f, c, _.strictTuples);
      }
    }
  }
  return nt.validateTuple = p, nt.default = a, nt;
}
var _i;
function Yc() {
  if (_i) return en;
  _i = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ho(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (s) => (0, e.validateTuple)(s, "items")
  };
  return en.default = t, en;
}
var tn = {}, Si;
function ed() {
  if (Si) return tn;
  Si = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), s = /* @__PURE__ */ Ie(), a = /* @__PURE__ */ po(), n = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: r } }) => (0, e.str)`must NOT have more than ${r} items`,
      params: ({ params: { len: r } }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { schema: o, parentSchema: d, it: h } = r, { prefixItems: v } = d;
      h.items = !0, !(0, t.alwaysValidSchema)(h, o) && (v ? (0, a.validateAdditionalItems)(r, v) : r.ok((0, s.validateArray)(r)));
    }
  };
  return tn.default = n, tn;
}
var nn = {}, $i;
function td() {
  if ($i) return nn;
  $i = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), a = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: p, max: n } }) => n === void 0 ? (0, e.str)`must contain at least ${p} valid item(s)` : (0, e.str)`must contain at least ${p} and no more than ${n} valid item(s)`,
      params: ({ params: { min: p, max: n } }) => n === void 0 ? (0, e._)`{minContains: ${p}}` : (0, e._)`{minContains: ${p}, maxContains: ${n}}`
    },
    code(p) {
      const { gen: n, schema: r, parentSchema: o, data: d, it: h } = p;
      let v, w;
      const { minContains: f, maxContains: u } = o;
      h.opts.next ? (v = f === void 0 ? 1 : f, w = u) : v = 1;
      const b = n.const("len", (0, e._)`${d}.length`);
      if (p.setParams({ min: v, max: w }), w === void 0 && v === 0) {
        (0, t.checkStrictMode)(h, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (w !== void 0 && v > w) {
        (0, t.checkStrictMode)(h, '"minContains" > "maxContains" is always invalid'), p.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(h, r)) {
        let l = (0, e._)`${b} >= ${v}`;
        w !== void 0 && (l = (0, e._)`${l} && ${b} <= ${w}`), p.pass(l);
        return;
      }
      h.items = !0;
      const S = n.name("valid");
      w === void 0 && v === 1 ? _(S, () => n.if(S, () => n.break())) : v === 0 ? (n.let(S, !0), w !== void 0 && n.if((0, e._)`${d}.length > 0`, g)) : (n.let(S, !1), g()), p.result(S, () => p.reset());
      function g() {
        const l = n.name("_valid"), i = n.let("count", 0);
        _(l, () => n.if(l, () => m(i)));
      }
      function _(l, i) {
        n.forRange("i", 0, b, (c) => {
          p.subschema({
            keyword: "contains",
            dataProp: c,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, l), i();
        });
      }
      function m(l) {
        n.code((0, e._)`${l}++`), w === void 0 ? n.if((0, e._)`${l} >= ${v}`, () => n.assign(S, !0).break()) : (n.if((0, e._)`${l} > ${w}`, () => n.assign(S, !1).break()), v === 1 ? n.assign(S, !0) : n.if((0, e._)`${l} >= ${v}`, () => n.assign(S, !0)));
      }
    }
  };
  return nn.default = a, nn;
}
var dr = {}, xi;
function ls() {
  return xi || (xi = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ee(), s = /* @__PURE__ */ ne(), a = /* @__PURE__ */ Ie();
    e.error = {
      message: ({ params: { property: d, depsCount: h, deps: v } }) => {
        const w = h === 1 ? "property" : "properties";
        return (0, t.str)`must have ${w} ${v} when property ${d} is present`;
      },
      params: ({ params: { property: d, depsCount: h, deps: v, missingProperty: w } }) => (0, t._)`{property: ${d},
    missingProperty: ${w},
    depsCount: ${h},
    deps: ${v}}`
      // TODO change to reference
    };
    const p = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(d) {
        const [h, v] = n(d);
        r(d, h), o(d, v);
      }
    };
    function n({ schema: d }) {
      const h = {}, v = {};
      for (const w in d) {
        if (w === "__proto__")
          continue;
        const f = Array.isArray(d[w]) ? h : v;
        f[w] = d[w];
      }
      return [h, v];
    }
    function r(d, h = d.schema) {
      const { gen: v, data: w, it: f } = d;
      if (Object.keys(h).length === 0)
        return;
      const u = v.let("missing");
      for (const b in h) {
        const S = h[b];
        if (S.length === 0)
          continue;
        const g = (0, a.propertyInData)(v, w, b, f.opts.ownProperties);
        d.setParams({
          property: b,
          depsCount: S.length,
          deps: S.join(", ")
        }), f.allErrors ? v.if(g, () => {
          for (const _ of S)
            (0, a.checkReportMissingProp)(d, _);
        }) : (v.if((0, t._)`${g} && (${(0, a.checkMissingProp)(d, S, u)})`), (0, a.reportMissingProp)(d, u), v.else());
      }
    }
    e.validatePropertyDeps = r;
    function o(d, h = d.schema) {
      const { gen: v, data: w, keyword: f, it: u } = d, b = v.name("valid");
      for (const S in h)
        (0, s.alwaysValidSchema)(u, h[S]) || (v.if(
          (0, a.propertyInData)(v, w, S, u.opts.ownProperties),
          () => {
            const g = d.subschema({ keyword: f, schemaProp: S }, b);
            d.mergeValidEvaluated(g, b);
          },
          () => v.var(b, !0)
          // TODO var
        ), d.ok(b));
    }
    e.validateSchemaDeps = o, e.default = p;
  })(dr)), dr;
}
var rn = {}, Ii;
function nd() {
  if (Ii) return rn;
  Ii = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), a = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: p }) => (0, e._)`{propertyName: ${p.propertyName}}`
    },
    code(p) {
      const { gen: n, schema: r, data: o, it: d } = p;
      if ((0, t.alwaysValidSchema)(d, r))
        return;
      const h = n.name("valid");
      n.forIn("key", o, (v) => {
        p.setParams({ propertyName: v }), p.subschema({
          keyword: "propertyNames",
          data: v,
          dataTypes: ["string"],
          propertyName: v,
          compositeRule: !0
        }, h), n.if((0, e.not)(h), () => {
          p.error(!0), d.allErrors || n.break();
        });
      }), p.ok(h);
    }
  };
  return rn.default = a, rn;
}
var sn = {}, Ei;
function mo() {
  if (Ei) return sn;
  Ei = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ie(), t = /* @__PURE__ */ ee(), s = /* @__PURE__ */ xe(), a = /* @__PURE__ */ ne(), n = {
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
      const { gen: o, schema: d, parentSchema: h, data: v, errsCount: w, it: f } = r;
      if (!w)
        throw new Error("ajv implementation error");
      const { allErrors: u, opts: b } = f;
      if (f.props = !0, b.removeAdditional !== "all" && (0, a.alwaysValidSchema)(f, d))
        return;
      const S = (0, e.allSchemaProperties)(h.properties), g = (0, e.allSchemaProperties)(h.patternProperties);
      _(), r.ok((0, t._)`${w} === ${s.default.errors}`);
      function _() {
        o.forIn("key", v, (y) => {
          !S.length && !g.length ? i(y) : o.if(m(y), () => i(y));
        });
      }
      function m(y) {
        let x;
        if (S.length > 8) {
          const $ = (0, a.schemaRefOrVal)(f, h.properties, "properties");
          x = (0, e.isOwnProperty)(o, $, y);
        } else S.length ? x = (0, t.or)(...S.map(($) => (0, t._)`${y} === ${$}`)) : x = t.nil;
        return g.length && (x = (0, t.or)(x, ...g.map(($) => (0, t._)`${(0, e.usePattern)(r, $)}.test(${y})`))), (0, t.not)(x);
      }
      function l(y) {
        o.code((0, t._)`delete ${v}[${y}]`);
      }
      function i(y) {
        if (b.removeAdditional === "all" || b.removeAdditional && d === !1) {
          l(y);
          return;
        }
        if (d === !1) {
          r.setParams({ additionalProperty: y }), r.error(), u || o.break();
          return;
        }
        if (typeof d == "object" && !(0, a.alwaysValidSchema)(f, d)) {
          const x = o.name("valid");
          b.removeAdditional === "failing" ? (c(y, x, !1), o.if((0, t.not)(x), () => {
            r.reset(), l(y);
          })) : (c(y, x), u || o.if((0, t.not)(x), () => o.break()));
        }
      }
      function c(y, x, $) {
        const j = {
          keyword: "additionalProperties",
          dataProp: y,
          dataPropType: a.Type.Str
        };
        $ === !1 && Object.assign(j, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), r.subschema(j, x);
      }
    }
  };
  return sn.default = n, sn;
}
var an = {}, Ri;
function rd() {
  if (Ri) return an;
  Ri = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xt(), t = /* @__PURE__ */ Ie(), s = /* @__PURE__ */ ne(), a = /* @__PURE__ */ mo(), p = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(n) {
      const { gen: r, schema: o, parentSchema: d, data: h, it: v } = n;
      v.opts.removeAdditional === "all" && d.additionalProperties === void 0 && a.default.code(new e.KeywordCxt(v, a.default, "additionalProperties"));
      const w = (0, t.allSchemaProperties)(o);
      for (const g of w)
        v.definedProperties.add(g);
      v.opts.unevaluated && w.length && v.props !== !0 && (v.props = s.mergeEvaluated.props(r, (0, s.toHash)(w), v.props));
      const f = w.filter((g) => !(0, s.alwaysValidSchema)(v, o[g]));
      if (f.length === 0)
        return;
      const u = r.name("valid");
      for (const g of f)
        b(g) ? S(g) : (r.if((0, t.propertyInData)(r, h, g, v.opts.ownProperties)), S(g), v.allErrors || r.else().var(u, !0), r.endIf()), n.it.definedProperties.add(g), n.ok(u);
      function b(g) {
        return v.opts.useDefaults && !v.compositeRule && o[g].default !== void 0;
      }
      function S(g) {
        n.subschema({
          keyword: "properties",
          schemaProp: g,
          dataProp: g
        }, u);
      }
    }
  };
  return an.default = p, an;
}
var on = {}, ji;
function sd() {
  if (ji) return on;
  ji = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ie(), t = /* @__PURE__ */ ee(), s = /* @__PURE__ */ ne(), a = /* @__PURE__ */ ne(), p = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(n) {
      const { gen: r, schema: o, data: d, parentSchema: h, it: v } = n, { opts: w } = v, f = (0, e.allSchemaProperties)(o), u = f.filter((i) => (0, s.alwaysValidSchema)(v, o[i]));
      if (f.length === 0 || u.length === f.length && (!v.opts.unevaluated || v.props === !0))
        return;
      const b = w.strictSchema && !w.allowMatchingProperties && h.properties, S = r.name("valid");
      v.props !== !0 && !(v.props instanceof t.Name) && (v.props = (0, a.evaluatedPropsToName)(r, v.props));
      const { props: g } = v;
      _();
      function _() {
        for (const i of f)
          b && m(i), v.allErrors ? l(i) : (r.var(S, !0), l(i), r.if(S));
      }
      function m(i) {
        for (const c in b)
          new RegExp(i).test(c) && (0, s.checkStrictMode)(v, `property ${c} matches pattern ${i} (use allowMatchingProperties)`);
      }
      function l(i) {
        r.forIn("key", d, (c) => {
          r.if((0, t._)`${(0, e.usePattern)(n, i)}.test(${c})`, () => {
            const y = u.includes(i);
            y || n.subschema({
              keyword: "patternProperties",
              schemaProp: i,
              dataProp: c,
              dataPropType: a.Type.Str
            }, S), v.opts.unevaluated && g !== !0 ? r.assign((0, t._)`${g}[${c}]`, !0) : !y && !v.allErrors && r.if((0, t.not)(S), () => r.break());
          });
        });
      }
    }
  };
  return on.default = p, on;
}
var cn = {}, Ai;
function id() {
  if (Ai) return cn;
  Ai = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(s) {
      const { gen: a, schema: p, it: n } = s;
      if ((0, e.alwaysValidSchema)(n, p)) {
        s.fail();
        return;
      }
      const r = a.name("valid");
      s.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, r), s.failResult(r, () => s.reset(), () => s.error());
    },
    error: { message: "must NOT be valid" }
  };
  return cn.default = t, cn;
}
var dn = {}, Ni;
function ad() {
  if (Ni) return dn;
  Ni = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Ie()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return dn.default = t, dn;
}
var ln = {}, Pi;
function od() {
  if (Pi) return ln;
  Pi = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), a = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: p }) => (0, e._)`{passingSchemas: ${p.passing}}`
    },
    code(p) {
      const { gen: n, schema: r, parentSchema: o, it: d } = p;
      if (!Array.isArray(r))
        throw new Error("ajv implementation error");
      if (d.opts.discriminator && o.discriminator)
        return;
      const h = r, v = n.let("valid", !1), w = n.let("passing", null), f = n.name("_valid");
      p.setParams({ passing: w }), n.block(u), p.result(v, () => p.reset(), () => p.error(!0));
      function u() {
        h.forEach((b, S) => {
          let g;
          (0, t.alwaysValidSchema)(d, b) ? n.var(f, !0) : g = p.subschema({
            keyword: "oneOf",
            schemaProp: S,
            compositeRule: !0
          }, f), S > 0 && n.if((0, e._)`${f} && ${v}`).assign(v, !1).assign(w, (0, e._)`[${w}, ${S}]`).else(), n.if(f, () => {
            n.assign(v, !0), n.assign(w, S), g && p.mergeEvaluated(g, e.Name);
          });
        });
      }
    }
  };
  return ln.default = a, ln;
}
var un = {}, Oi;
function cd() {
  if (Oi) return un;
  Oi = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(s) {
      const { gen: a, schema: p, it: n } = s;
      if (!Array.isArray(p))
        throw new Error("ajv implementation error");
      const r = a.name("valid");
      p.forEach((o, d) => {
        if ((0, e.alwaysValidSchema)(n, o))
          return;
        const h = s.subschema({ keyword: "allOf", schemaProp: d }, r);
        s.ok(r), s.mergeEvaluated(h);
      });
    }
  };
  return un.default = t, un;
}
var fn = {}, qi;
function dd() {
  if (qi) return fn;
  qi = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), a = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: n }) => (0, e.str)`must match "${n.ifClause}" schema`,
      params: ({ params: n }) => (0, e._)`{failingKeyword: ${n.ifClause}}`
    },
    code(n) {
      const { gen: r, parentSchema: o, it: d } = n;
      o.then === void 0 && o.else === void 0 && (0, t.checkStrictMode)(d, '"if" without "then" and "else" is ignored');
      const h = p(d, "then"), v = p(d, "else");
      if (!h && !v)
        return;
      const w = r.let("valid", !0), f = r.name("_valid");
      if (u(), n.reset(), h && v) {
        const S = r.let("ifClause");
        n.setParams({ ifClause: S }), r.if(f, b("then", S), b("else", S));
      } else h ? r.if(f, b("then")) : r.if((0, e.not)(f), b("else"));
      n.pass(w, () => n.error(!0));
      function u() {
        const S = n.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, f);
        n.mergeEvaluated(S);
      }
      function b(S, g) {
        return () => {
          const _ = n.subschema({ keyword: S }, f);
          r.assign(w, f), n.mergeValidEvaluated(_, w), g ? r.assign(g, (0, e._)`${S}`) : n.setParams({ ifClause: S });
        };
      }
    }
  };
  function p(n, r) {
    const o = n.schema[r];
    return o !== void 0 && !(0, t.alwaysValidSchema)(n, o);
  }
  return fn.default = a, fn;
}
var pn = {}, Ti;
function ld() {
  if (Ti) return pn;
  Ti = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: s, parentSchema: a, it: p }) {
      a.if === void 0 && (0, e.checkStrictMode)(p, `"${s}" without "if" is ignored`);
    }
  };
  return pn.default = t, pn;
}
var ki;
function yo() {
  if (ki) return Yt;
  ki = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ po(), t = /* @__PURE__ */ Yc(), s = /* @__PURE__ */ ho(), a = /* @__PURE__ */ ed(), p = /* @__PURE__ */ td(), n = /* @__PURE__ */ ls(), r = /* @__PURE__ */ nd(), o = /* @__PURE__ */ mo(), d = /* @__PURE__ */ rd(), h = /* @__PURE__ */ sd(), v = /* @__PURE__ */ id(), w = /* @__PURE__ */ ad(), f = /* @__PURE__ */ od(), u = /* @__PURE__ */ cd(), b = /* @__PURE__ */ dd(), S = /* @__PURE__ */ ld();
  function g(_ = !1) {
    const m = [
      // any
      v.default,
      w.default,
      f.default,
      u.default,
      b.default,
      S.default,
      // object
      r.default,
      o.default,
      n.default,
      d.default,
      h.default
    ];
    return _ ? m.push(t.default, a.default) : m.push(e.default, s.default), m.push(p.default), m;
  }
  return Yt.default = g, Yt;
}
var hn = {}, rt = {}, Di;
function go() {
  if (Di) return rt;
  Di = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ xe(), s = /* @__PURE__ */ Hn(), a = /* @__PURE__ */ cs(), p = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (o) => n(o, o.schema)
  };
  function n(o, d) {
    const { gen: h, it: v } = o;
    v.schemaEnv.root.dynamicAnchors[d] = !0;
    const w = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`, f = v.errSchemaPath === "#" ? v.validateName : r(o);
    h.if((0, e._)`!${w}`, () => h.assign(w, f));
  }
  rt.dynamicAnchor = n;
  function r(o) {
    const { schemaEnv: d, schema: h, self: v } = o.it, { root: w, baseId: f, localRefs: u, meta: b } = d.root, { schemaId: S } = v.opts, g = new s.SchemaEnv({ schema: h, schemaId: S, root: w, baseId: f, localRefs: u, meta: b });
    return s.compileSchema.call(v, g), (0, a.getValidate)(o, g);
  }
  return rt.default = p, rt;
}
var st = {}, Mi;
function vo() {
  if (Mi) return st;
  Mi = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.dynamicRef = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ xe(), s = /* @__PURE__ */ cs(), a = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (n) => p(n, n.schema)
  };
  function p(n, r) {
    const { gen: o, keyword: d, it: h } = n;
    if (r[0] !== "#")
      throw new Error(`"${d}" only supports hash fragment reference`);
    const v = r.slice(1);
    if (h.allErrors)
      w();
    else {
      const u = o.let("valid", !1);
      w(u), n.ok(u);
    }
    function w(u) {
      if (h.schemaEnv.root.dynamicAnchors[v]) {
        const b = o.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(v)}`);
        o.if(b, f(b, u), f(h.validateName, u));
      } else
        f(h.validateName, u)();
    }
    function f(u, b) {
      return b ? () => o.block(() => {
        (0, s.callRef)(n, u), o.let(b, !0);
      }) : () => (0, s.callRef)(n, u);
    }
  }
  return st.dynamicRef = p, st.default = a, st;
}
var mn = {}, Li;
function ud() {
  if (Li) return mn;
  Li = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ go(), t = /* @__PURE__ */ ne(), s = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(a) {
      a.schema ? (0, e.dynamicAnchor)(a, "") : (0, t.checkStrictMode)(a.it, "$recursiveAnchor: false is ignored");
    }
  };
  return mn.default = s, mn;
}
var yn = {}, Ci;
function fd() {
  if (Ci) return yn;
  Ci = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ vo(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (s) => (0, e.dynamicRef)(s, s.schema)
  };
  return yn.default = t, yn;
}
var Ui;
function pd() {
  if (Ui) return hn;
  Ui = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ go(), t = /* @__PURE__ */ vo(), s = /* @__PURE__ */ ud(), a = /* @__PURE__ */ fd(), p = [e.default, t.default, s.default, a.default];
  return hn.default = p, hn;
}
var gn = {}, vn = {}, Vi;
function hd() {
  if (Vi) return vn;
  Vi = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ls(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (s) => (0, e.validatePropertyDeps)(s)
  };
  return vn.default = t, vn;
}
var bn = {}, zi;
function md() {
  if (zi) return bn;
  zi = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ls(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (s) => (0, e.validateSchemaDeps)(s)
  };
  return bn.default = t, bn;
}
var wn = {}, Fi;
function yd() {
  if (Fi) return wn;
  Fi = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: s, parentSchema: a, it: p }) {
      a.contains === void 0 && (0, e.checkStrictMode)(p, `"${s}" without "contains" is ignored`);
    }
  };
  return wn.default = t, wn;
}
var Hi;
function gd() {
  if (Hi) return gn;
  Hi = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ hd(), t = /* @__PURE__ */ md(), s = /* @__PURE__ */ yd(), a = [e.default, t.default, s.default];
  return gn.default = a, gn;
}
var _n = {}, Sn = {}, Ji;
function vd() {
  if (Ji) return Sn;
  Ji = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), s = /* @__PURE__ */ xe(), p = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: n }) => (0, e._)`{unevaluatedProperty: ${n.unevaluatedProperty}}`
    },
    code(n) {
      const { gen: r, schema: o, data: d, errsCount: h, it: v } = n;
      if (!h)
        throw new Error("ajv implementation error");
      const { allErrors: w, props: f } = v;
      f instanceof e.Name ? r.if((0, e._)`${f} !== true`, () => r.forIn("key", d, (g) => r.if(b(f, g), () => u(g)))) : f !== !0 && r.forIn("key", d, (g) => f === void 0 ? u(g) : r.if(S(f, g), () => u(g))), v.props = !0, n.ok((0, e._)`${h} === ${s.default.errors}`);
      function u(g) {
        if (o === !1) {
          n.setParams({ unevaluatedProperty: g }), n.error(), w || r.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(v, o)) {
          const _ = r.name("valid");
          n.subschema({
            keyword: "unevaluatedProperties",
            dataProp: g,
            dataPropType: t.Type.Str
          }, _), w || r.if((0, e.not)(_), () => r.break());
        }
      }
      function b(g, _) {
        return (0, e._)`!${g} || !${g}[${_}]`;
      }
      function S(g, _) {
        const m = [];
        for (const l in g)
          g[l] === !0 && m.push((0, e._)`${_} !== ${l}`);
        return (0, e.and)(...m);
      }
    }
  };
  return Sn.default = p, Sn;
}
var $n = {}, Bi;
function bd() {
  if (Bi) return $n;
  Bi = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), a = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: p } }) => (0, e.str)`must NOT have more than ${p} items`,
      params: ({ params: { len: p } }) => (0, e._)`{limit: ${p}}`
    },
    code(p) {
      const { gen: n, schema: r, data: o, it: d } = p, h = d.items || 0;
      if (h === !0)
        return;
      const v = n.const("len", (0, e._)`${o}.length`);
      if (r === !1)
        p.setParams({ len: h }), p.fail((0, e._)`${v} > ${h}`);
      else if (typeof r == "object" && !(0, t.alwaysValidSchema)(d, r)) {
        const f = n.var("valid", (0, e._)`${v} <= ${h}`);
        n.if((0, e.not)(f), () => w(f, h)), p.ok(f);
      }
      d.items = !0;
      function w(f, u) {
        n.forRange("i", u, v, (b) => {
          p.subschema({ keyword: "unevaluatedItems", dataProp: b, dataPropType: t.Type.Num }, f), d.allErrors || n.if((0, e.not)(f), () => n.break());
        });
      }
    }
  };
  return $n.default = a, $n;
}
var Gi;
function wd() {
  if (Gi) return _n;
  Gi = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ vd(), t = /* @__PURE__ */ bd(), s = [e.default, t.default];
  return _n.default = s, _n;
}
var xn = {}, In = {}, Ki;
function _d() {
  if (Ki) return In;
  Ki = 1, Object.defineProperty(In, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), s = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: a }) => (0, e.str)`must match format "${a}"`,
      params: ({ schemaCode: a }) => (0, e._)`{format: ${a}}`
    },
    code(a, p) {
      const { gen: n, data: r, $data: o, schema: d, schemaCode: h, it: v } = a, { opts: w, errSchemaPath: f, schemaEnv: u, self: b } = v;
      if (!w.validateFormats)
        return;
      o ? S() : g();
      function S() {
        const _ = n.scopeValue("formats", {
          ref: b.formats,
          code: w.code.formats
        }), m = n.const("fDef", (0, e._)`${_}[${h}]`), l = n.let("fType"), i = n.let("format");
        n.if((0, e._)`typeof ${m} == "object" && !(${m} instanceof RegExp)`, () => n.assign(l, (0, e._)`${m}.type || "string"`).assign(i, (0, e._)`${m}.validate`), () => n.assign(l, (0, e._)`"string"`).assign(i, m)), a.fail$data((0, e.or)(c(), y()));
        function c() {
          return w.strictSchema === !1 ? e.nil : (0, e._)`${h} && !${i}`;
        }
        function y() {
          const x = u.$async ? (0, e._)`(${m}.async ? await ${i}(${r}) : ${i}(${r}))` : (0, e._)`${i}(${r})`, $ = (0, e._)`(typeof ${i} == "function" ? ${x} : ${i}.test(${r}))`;
          return (0, e._)`${i} && ${i} !== true && ${l} === ${p} && !${$}`;
        }
      }
      function g() {
        const _ = b.formats[d];
        if (!_) {
          c();
          return;
        }
        if (_ === !0)
          return;
        const [m, l, i] = y(_);
        m === p && a.pass(x());
        function c() {
          if (w.strictSchema === !1) {
            b.logger.warn($());
            return;
          }
          throw new Error($());
          function $() {
            return `unknown format "${d}" ignored in schema at path "${f}"`;
          }
        }
        function y($) {
          const j = $ instanceof RegExp ? (0, e.regexpCode)($) : w.code.formats ? (0, e._)`${w.code.formats}${(0, e.getProperty)(d)}` : void 0, N = n.scopeValue("formats", { key: d, ref: $, code: j });
          return typeof $ == "object" && !($ instanceof RegExp) ? [$.type || "string", $.validate, (0, e._)`${N}.validate`] : ["string", $, N];
        }
        function x() {
          if (typeof _ == "object" && !(_ instanceof RegExp) && _.async) {
            if (!u.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${i}(${r})`;
          }
          return typeof l == "function" ? (0, e._)`${i}(${r})` : (0, e._)`${i}.test(${r})`;
        }
      }
    }
  };
  return In.default = s, In;
}
var Zi;
function bo() {
  if (Zi) return xn;
  Zi = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ _d()).default];
  return xn.default = t, xn;
}
var Ke = {}, Wi;
function wo() {
  return Wi || (Wi = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.contentVocabulary = Ke.metadataVocabulary = void 0, Ke.metadataVocabulary = [
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
var Qi;
function Sd() {
  if (Qi) return Mt;
  Qi = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ uo(), t = /* @__PURE__ */ fo(), s = /* @__PURE__ */ yo(), a = /* @__PURE__ */ pd(), p = /* @__PURE__ */ gd(), n = /* @__PURE__ */ wd(), r = /* @__PURE__ */ bo(), o = /* @__PURE__ */ wo(), d = [
    a.default,
    e.default,
    t.default,
    (0, s.default)(!0),
    r.default,
    o.metadataVocabulary,
    o.contentVocabulary,
    p.default,
    n.default
  ];
  return Mt.default = d, Mt;
}
var En = {}, gt = {}, Xi;
function $d() {
  if (Xi) return gt;
  Xi = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (gt.DiscrError = e = {})), gt;
}
var Yi;
function _o() {
  if (Yi) return En;
  Yi = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ $d(), s = /* @__PURE__ */ Hn(), a = /* @__PURE__ */ It(), p = /* @__PURE__ */ ne(), r = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: o, tagName: d } }) => o === t.DiscrError.Tag ? `tag "${d}" must be string` : `value of tag "${d}" must be in oneOf`,
      params: ({ params: { discrError: o, tag: d, tagName: h } }) => (0, e._)`{error: ${o}, tag: ${h}, tagValue: ${d}}`
    },
    code(o) {
      const { gen: d, data: h, schema: v, parentSchema: w, it: f } = o, { oneOf: u } = w;
      if (!f.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const b = v.propertyName;
      if (typeof b != "string")
        throw new Error("discriminator: requires propertyName");
      if (v.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!u)
        throw new Error("discriminator: requires oneOf keyword");
      const S = d.let("valid", !1), g = d.const("tag", (0, e._)`${h}${(0, e.getProperty)(b)}`);
      d.if((0, e._)`typeof ${g} == "string"`, () => _(), () => o.error(!1, { discrError: t.DiscrError.Tag, tag: g, tagName: b })), o.ok(S);
      function _() {
        const i = l();
        d.if(!1);
        for (const c in i)
          d.elseIf((0, e._)`${g} === ${c}`), d.assign(S, m(i[c]));
        d.else(), o.error(!1, { discrError: t.DiscrError.Mapping, tag: g, tagName: b }), d.endIf();
      }
      function m(i) {
        const c = d.name("valid"), y = o.subschema({ keyword: "oneOf", schemaProp: i }, c);
        return o.mergeEvaluated(y, e.Name), c;
      }
      function l() {
        var i;
        const c = {}, y = $(w);
        let x = !0;
        for (let k = 0; k < u.length; k++) {
          let C = u[k];
          if (C?.$ref && !(0, p.schemaHasRulesButRef)(C, f.self.RULES)) {
            const O = C.$ref;
            if (C = s.resolveRef.call(f.self, f.schemaEnv.root, f.baseId, O), C instanceof s.SchemaEnv && (C = C.schema), C === void 0)
              throw new a.default(f.opts.uriResolver, f.baseId, O);
          }
          const T = (i = C?.properties) === null || i === void 0 ? void 0 : i[b];
          if (typeof T != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${b}"`);
          x = x && (y || $(C)), j(T, k);
        }
        if (!x)
          throw new Error(`discriminator: "${b}" must be required`);
        return c;
        function $({ required: k }) {
          return Array.isArray(k) && k.includes(b);
        }
        function j(k, C) {
          if (k.const)
            N(k.const, C);
          else if (k.enum)
            for (const T of k.enum)
              N(T, C);
          else
            throw new Error(`discriminator: "properties/${b}" must have "const" or "enum"`);
        }
        function N(k, C) {
          if (typeof k != "string" || k in c)
            throw new Error(`discriminator: "${b}" values must be unique strings`);
          c[k] = C;
        }
      }
    }
  };
  return En.default = r, En;
}
var Rn = {};
const xd = "https://json-schema.org/draft/2020-12/schema", Id = "https://json-schema.org/draft/2020-12/schema", Ed = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Rd = "meta", jd = "Core and Validation specifications meta-schema", Ad = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Nd = ["object", "boolean"], Pd = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Od = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, qd = {
  $schema: xd,
  $id: Id,
  $vocabulary: Ed,
  $dynamicAnchor: Rd,
  title: jd,
  allOf: Ad,
  type: Nd,
  $comment: Pd,
  properties: Od
}, Td = "https://json-schema.org/draft/2020-12/schema", kd = "https://json-schema.org/draft/2020-12/meta/applicator", Dd = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Md = "meta", Ld = "Applicator vocabulary meta-schema", Cd = ["object", "boolean"], Ud = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Vd = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, zd = {
  $schema: Td,
  $id: kd,
  $vocabulary: Dd,
  $dynamicAnchor: Md,
  title: Ld,
  type: Cd,
  properties: Ud,
  $defs: Vd
}, Fd = "https://json-schema.org/draft/2020-12/schema", Hd = "https://json-schema.org/draft/2020-12/meta/unevaluated", Jd = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Bd = "meta", Gd = "Unevaluated applicator vocabulary meta-schema", Kd = ["object", "boolean"], Zd = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Wd = {
  $schema: Fd,
  $id: Hd,
  $vocabulary: Jd,
  $dynamicAnchor: Bd,
  title: Gd,
  type: Kd,
  properties: Zd
}, Qd = "https://json-schema.org/draft/2020-12/schema", Xd = "https://json-schema.org/draft/2020-12/meta/content", Yd = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, el = "meta", tl = "Content vocabulary meta-schema", nl = ["object", "boolean"], rl = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, sl = {
  $schema: Qd,
  $id: Xd,
  $vocabulary: Yd,
  $dynamicAnchor: el,
  title: tl,
  type: nl,
  properties: rl
}, il = "https://json-schema.org/draft/2020-12/schema", al = "https://json-schema.org/draft/2020-12/meta/core", ol = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, cl = "meta", dl = "Core vocabulary meta-schema", ll = ["object", "boolean"], ul = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, fl = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, pl = {
  $schema: il,
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
}, Sl = "https://json-schema.org/draft/2020-12/schema", $l = "https://json-schema.org/draft/2020-12/meta/meta-data", xl = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Il = "meta", El = "Meta-data vocabulary meta-schema", Rl = ["object", "boolean"], jl = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Al = {
  $schema: Sl,
  $id: $l,
  $vocabulary: xl,
  $dynamicAnchor: Il,
  title: El,
  type: Rl,
  properties: jl
}, Nl = "https://json-schema.org/draft/2020-12/schema", Pl = "https://json-schema.org/draft/2020-12/meta/validation", Ol = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, ql = "meta", Tl = "Validation vocabulary meta-schema", kl = ["object", "boolean"], Dl = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Ml = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Ll = {
  $schema: Nl,
  $id: Pl,
  $vocabulary: Ol,
  $dynamicAnchor: ql,
  title: Tl,
  type: kl,
  properties: Dl,
  $defs: Ml
};
var ea;
function Cl() {
  if (ea) return Rn;
  ea = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = qd, t = zd, s = Wd, a = sl, p = pl, n = _l, r = Al, o = Ll, d = ["/properties"];
  function h(v) {
    return [
      e,
      t,
      s,
      a,
      p,
      w(this, n),
      r,
      w(this, o)
    ].forEach((f) => this.addMetaSchema(f, void 0, !1)), this;
    function w(f, u) {
      return v ? f.$dataMetaSchema(u, d) : u;
    }
  }
  return Rn.default = h, Rn;
}
var ta;
function Ul() {
  return ta || (ta = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const s = /* @__PURE__ */ lo(), a = /* @__PURE__ */ Sd(), p = /* @__PURE__ */ _o(), n = /* @__PURE__ */ Cl(), r = "https://json-schema.org/draft/2020-12/schema";
    class o extends s.default {
      constructor(u = {}) {
        super({
          ...u,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), a.default.forEach((u) => this.addVocabulary(u)), this.opts.discriminator && this.addKeyword(p.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: u, meta: b } = this.opts;
        b && (n.default.call(this, u), this.refs["http://json-schema.org/schema"] = r);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(r) ? r : void 0);
      }
    }
    t.Ajv2020 = o, e.exports = t = o, e.exports.Ajv2020 = o, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = o;
    var d = /* @__PURE__ */ xt();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return d.KeywordCxt;
    } });
    var h = /* @__PURE__ */ ee();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return h._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return h.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return h.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return h.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return h.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return h.CodeGen;
    } });
    var v = /* @__PURE__ */ Fn();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return v.default;
    } });
    var w = /* @__PURE__ */ It();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return w.default;
    } });
  })(Ot, Ot.exports)), Ot.exports;
}
var Vl = /* @__PURE__ */ Ul();
const zl = /* @__PURE__ */ os(Vl);
var jn = { exports: {} }, lr = {}, na;
function Fl() {
  return na || (na = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(k, C) {
      return { validate: k, compare: C };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(n, r),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: t(d(!0), h),
      "date-time": t(f(!0), u),
      "iso-time": t(d(), v),
      "iso-date-time": t(f(), b),
      // duration: https://tools.ietf.org/html/rfc3339#appendix-A
      duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri: _,
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
      regex: N,
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
      int32: { type: "number", validate: y },
      // signed 64 bit integer
      int64: { type: "number", validate: x },
      // C-type float
      float: { type: "number", validate: $ },
      // C-type double
      double: { type: "number", validate: $ },
      // hint to the UI to hide input strings
      password: !0,
      // unchecked string payload
      binary: !0
    }, e.fastFormats = {
      ...e.fullFormats,
      date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, r),
      time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, h),
      "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, u),
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
    function s(k) {
      return k % 4 === 0 && (k % 100 !== 0 || k % 400 === 0);
    }
    const a = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, p = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function n(k) {
      const C = a.exec(k);
      if (!C)
        return !1;
      const T = +C[1], O = +C[2], B = +C[3];
      return O >= 1 && O <= 12 && B >= 1 && B <= (O === 2 && s(T) ? 29 : p[O]);
    }
    function r(k, C) {
      if (k && C)
        return k > C ? 1 : k < C ? -1 : 0;
    }
    const o = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function d(k) {
      return function(T) {
        const O = o.exec(T);
        if (!O)
          return !1;
        const B = +O[1], P = +O[2], H = +O[3], F = O[4], G = O[5] === "-" ? -1 : 1, A = +(O[6] || 0), q = +(O[7] || 0);
        if (A > 23 || q > 59 || k && !F)
          return !1;
        if (B <= 23 && P <= 59 && H < 60)
          return !0;
        const U = P - q * G, D = B - A * G - (U < 0 ? 1 : 0);
        return (D === 23 || D === -1) && (U === 59 || U === -1) && H < 61;
      };
    }
    function h(k, C) {
      if (!(k && C))
        return;
      const T = (/* @__PURE__ */ new Date("2020-01-01T" + k)).valueOf(), O = (/* @__PURE__ */ new Date("2020-01-01T" + C)).valueOf();
      if (T && O)
        return T - O;
    }
    function v(k, C) {
      if (!(k && C))
        return;
      const T = o.exec(k), O = o.exec(C);
      if (T && O)
        return k = T[1] + T[2] + T[3], C = O[1] + O[2] + O[3], k > C ? 1 : k < C ? -1 : 0;
    }
    const w = /t|\s/i;
    function f(k) {
      const C = d(k);
      return function(O) {
        const B = O.split(w);
        return B.length === 2 && n(B[0]) && C(B[1]);
      };
    }
    function u(k, C) {
      if (!(k && C))
        return;
      const T = new Date(k).valueOf(), O = new Date(C).valueOf();
      if (T && O)
        return T - O;
    }
    function b(k, C) {
      if (!(k && C))
        return;
      const [T, O] = k.split(w), [B, P] = C.split(w), H = r(T, B);
      if (H !== void 0)
        return H || h(O, P);
    }
    const S = /\/|:/, g = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function _(k) {
      return S.test(k) && g.test(k);
    }
    const m = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function l(k) {
      return m.lastIndex = 0, m.test(k);
    }
    const i = -2147483648, c = 2 ** 31 - 1;
    function y(k) {
      return Number.isInteger(k) && k <= c && k >= i;
    }
    function x(k) {
      return Number.isInteger(k);
    }
    function $() {
      return !0;
    }
    const j = /[^\\]\\Z/;
    function N(k) {
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
var ur = {}, An = { exports: {} }, Nn = {}, ra;
function Hl() {
  if (ra) return Nn;
  ra = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ uo(), t = /* @__PURE__ */ fo(), s = /* @__PURE__ */ yo(), a = /* @__PURE__ */ bo(), p = /* @__PURE__ */ wo(), n = [
    e.default,
    t.default,
    (0, s.default)(),
    a.default,
    p.metadataVocabulary,
    p.contentVocabulary
  ];
  return Nn.default = n, Nn;
}
const Jl = "http://json-schema.org/draft-07/schema#", Bl = "http://json-schema.org/draft-07/schema#", Gl = "Core schema meta-schema", Kl = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Zl = ["object", "boolean"], Wl = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, Ql = {
  $schema: Jl,
  $id: Bl,
  title: Gl,
  definitions: Kl,
  type: Zl,
  properties: Wl,
  default: !0
};
var sa;
function Xl() {
  return sa || (sa = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const s = /* @__PURE__ */ lo(), a = /* @__PURE__ */ Hl(), p = /* @__PURE__ */ _o(), n = Ql, r = ["/properties"], o = "http://json-schema.org/draft-07/schema";
    class d extends s.default {
      _addVocabularies() {
        super._addVocabularies(), a.default.forEach((b) => this.addVocabulary(b)), this.opts.discriminator && this.addKeyword(p.default);
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
    t.Ajv = d, e.exports = t = d, e.exports.Ajv = d, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = d;
    var h = /* @__PURE__ */ xt();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return h.KeywordCxt;
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
    var f = /* @__PURE__ */ It();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return f.default;
    } });
  })(An, An.exports)), An.exports;
}
var ia;
function Yl() {
  return ia || (ia = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = /* @__PURE__ */ Xl(), s = /* @__PURE__ */ ee(), a = s.operators, p = {
      formatMaximum: { okStr: "<=", ok: a.LTE, fail: a.GT },
      formatMinimum: { okStr: ">=", ok: a.GTE, fail: a.LT },
      formatExclusiveMaximum: { okStr: "<", ok: a.LT, fail: a.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: a.GT, fail: a.LTE }
    }, n = {
      message: ({ keyword: o, schemaCode: d }) => (0, s.str)`should be ${p[o].okStr} ${d}`,
      params: ({ keyword: o, schemaCode: d }) => (0, s._)`{comparison: ${p[o].okStr}, limit: ${d}}`
    };
    e.formatLimitDefinition = {
      keyword: Object.keys(p),
      type: "string",
      schemaType: "string",
      $data: !0,
      error: n,
      code(o) {
        const { gen: d, data: h, schemaCode: v, keyword: w, it: f } = o, { opts: u, self: b } = f;
        if (!u.validateFormats)
          return;
        const S = new t.KeywordCxt(f, b.RULES.all.format.definition, "format");
        S.$data ? g() : _();
        function g() {
          const l = d.scopeValue("formats", {
            ref: b.formats,
            code: u.code.formats
          }), i = d.const("fmt", (0, s._)`${l}[${S.schemaCode}]`);
          o.fail$data((0, s.or)((0, s._)`typeof ${i} != "object"`, (0, s._)`${i} instanceof RegExp`, (0, s._)`typeof ${i}.compare != "function"`, m(i)));
        }
        function _() {
          const l = S.schema, i = b.formats[l];
          if (!i || i === !0)
            return;
          if (typeof i != "object" || i instanceof RegExp || typeof i.compare != "function")
            throw new Error(`"${w}": format "${l}" does not define "compare" function`);
          const c = d.scopeValue("formats", {
            key: l,
            ref: i,
            code: u.code.formats ? (0, s._)`${u.code.formats}${(0, s.getProperty)(l)}` : void 0
          });
          o.fail$data(m(c));
        }
        function m(l) {
          return (0, s._)`${l}.compare(${h}, ${v}) ${p[w].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const r = (o) => (o.addKeyword(e.formatLimitDefinition), o);
    e.default = r;
  })(ur)), ur;
}
var aa;
function eu() {
  return aa || (aa = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const s = Fl(), a = Yl(), p = /* @__PURE__ */ ee(), n = new p.Name("fullFormats"), r = new p.Name("fastFormats"), o = (h, v = { keywords: !0 }) => {
      if (Array.isArray(v))
        return d(h, v, s.fullFormats, n), h;
      const [w, f] = v.mode === "fast" ? [s.fastFormats, r] : [s.fullFormats, n], u = v.formats || s.formatNames;
      return d(h, u, w, f), v.keywords && (0, a.default)(h), h;
    };
    o.get = (h, v = "full") => {
      const f = (v === "fast" ? s.fastFormats : s.fullFormats)[h];
      if (!f)
        throw new Error(`Unknown format "${h}"`);
      return f;
    };
    function d(h, v, w, f) {
      var u, b;
      (u = (b = h.opts.code).formats) !== null && u !== void 0 || (b.formats = (0, p._)`require("ajv-formats/dist/formats").${f}`);
      for (const S of v)
        h.addFormat(S, w[S]);
    }
    e.exports = t = o, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = o;
  })(jn, jn.exports)), jn.exports;
}
var tu = eu();
const nu = /* @__PURE__ */ os(tu);
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const ru = {
  p: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,
  n: 0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,
  a: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,
  d: 0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,
  Gx: 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,
  Gy: 0x6666666666666666666666666666666666666666666666666666666666666658n
}, { p: pe, n: On, Gx: oa, Gy: ca, a: fr, d: pr } = ru, su = 8n, _t = 32, es = 64, we = (e = "") => {
  throw new Error(e);
}, iu = (e) => typeof e == "bigint", So = (e) => typeof e == "string", au = (e) => e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array", ut = (e, t) => !au(e) || typeof t == "number" && t > 0 && e.length !== t ? we("Uint8Array expected") : e, Jn = (e) => new Uint8Array(e), us = (e) => Uint8Array.from(e), $o = (e, t) => e.toString(16).padStart(t, "0"), fs = (e) => Array.from(ut(e)).map((t) => $o(t, 2)).join(""), De = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 }, da = (e) => {
  if (e >= De._0 && e <= De._9)
    return e - De._0;
  if (e >= De.A && e <= De.F)
    return e - (De.A - 10);
  if (e >= De.a && e <= De.f)
    return e - (De.a - 10);
}, ps = (e) => {
  const t = "hex invalid";
  if (!So(e))
    return we(t);
  const s = e.length, a = s / 2;
  if (s % 2)
    return we(t);
  const p = Jn(a);
  for (let n = 0, r = 0; n < a; n++, r += 2) {
    const o = da(e.charCodeAt(r)), d = da(e.charCodeAt(r + 1));
    if (o === void 0 || d === void 0)
      return we(t);
    p[n] = o * 16 + d;
  }
  return p;
}, qn = (e, t) => ut(So(e) ? ps(e) : us(ut(e)), t), xo = () => globalThis?.crypto, ou = () => xo()?.subtle ?? we("crypto.subtle must be defined"), ts = (...e) => {
  const t = Jn(e.reduce((a, p) => a + ut(p).length, 0));
  let s = 0;
  return e.forEach((a) => {
    t.set(a, s), s += a.length;
  }), t;
}, cu = (e = _t) => xo().getRandomValues(Jn(e)), Ln = BigInt, We = (e, t, s, a = "bad number: out of range") => iu(e) && t <= e && e < s ? e : we(a), X = (e, t = pe) => {
  const s = e % t;
  return s >= 0n ? s : t + s;
}, du = (e) => X(e, On), Io = (e, t) => {
  (e === 0n || t <= 0n) && we("no inverse n=" + e + " mod=" + t);
  let s = X(e, t), a = t, p = 0n, n = 1n;
  for (; s !== 0n; ) {
    const r = a / s, o = a % s, d = p - n * r;
    a = s, s = o, p = n, n = d;
  }
  return a === 1n ? X(p, t) : we("no inverse");
}, la = (e) => e instanceof Le ? e : we("Point expected"), ns = 2n ** 256n, Ne = class Ne {
  constructor(t, s, a, p) {
    Pe(this, "ex");
    Pe(this, "ey");
    Pe(this, "ez");
    Pe(this, "et");
    const n = ns;
    this.ex = We(t, 0n, n), this.ey = We(s, 0n, n), this.ez = We(a, 1n, n), this.et = We(p, 0n, n), Object.freeze(this);
  }
  static fromAffine(t) {
    return new Ne(t.x, t.y, 1n, X(t.x * t.y));
  }
  /** RFC8032 5.1.3: Uint8Array to Point. */
  static fromBytes(t, s = !1) {
    const a = pr, p = us(ut(t, _t)), n = t[31];
    p[31] = n & -129;
    const r = hs(p);
    We(r, 0n, s ? ns : pe);
    const d = X(r * r), h = X(d - 1n), v = X(a * d + 1n);
    let { isValid: w, value: f } = fu(h, v);
    w || we("bad point: y not sqrt");
    const u = (f & 1n) === 1n, b = (n & 128) !== 0;
    return !s && f === 0n && b && we("bad point: x==0, isLastByteOdd"), b !== u && (f = X(-f)), new Ne(f, r, 1n, X(f * r));
  }
  /** Checks if the point is valid and on-curve. */
  assertValidity() {
    const t = fr, s = pr, a = this;
    if (a.is0())
      throw new Error("bad point: ZERO");
    const { ex: p, ey: n, ez: r, et: o } = a, d = X(p * p), h = X(n * n), v = X(r * r), w = X(v * v), f = X(d * t), u = X(v * X(f + h)), b = X(w + X(s * X(d * h)));
    if (u !== b)
      throw new Error("bad point: equation left != right (1)");
    const S = X(p * n), g = X(r * o);
    if (S !== g)
      throw new Error("bad point: equation left != right (2)");
    return this;
  }
  /** Equality check: compare points P&Q. */
  equals(t) {
    const { ex: s, ey: a, ez: p } = this, { ex: n, ey: r, ez: o } = la(t), d = X(s * o), h = X(n * p), v = X(a * o), w = X(r * p);
    return d === h && v === w;
  }
  is0() {
    return this.equals(at);
  }
  /** Flip point over y coordinate. */
  negate() {
    return new Ne(X(-this.ex), this.ey, this.ez, X(-this.et));
  }
  /** Point doubling. Complete formula. Cost: `4M + 4S + 1*a + 6add + 1*2`. */
  double() {
    const { ex: t, ey: s, ez: a } = this, p = fr, n = X(t * t), r = X(s * s), o = X(2n * X(a * a)), d = X(p * n), h = t + s, v = X(X(h * h) - n - r), w = d + r, f = w - o, u = d - r, b = X(v * f), S = X(w * u), g = X(v * u), _ = X(f * w);
    return new Ne(b, S, _, g);
  }
  /** Point addition. Complete formula. Cost: `8M + 1*k + 8add + 1*2`. */
  add(t) {
    const { ex: s, ey: a, ez: p, et: n } = this, { ex: r, ey: o, ez: d, et: h } = la(t), v = fr, w = pr, f = X(s * r), u = X(a * o), b = X(n * w * h), S = X(p * d), g = X((s + a) * (r + o) - f - u), _ = X(S - b), m = X(S + b), l = X(u - v * f), i = X(g * _), c = X(m * l), y = X(g * l), x = X(_ * m);
    return new Ne(i, c, x, y);
  }
  /**
   * Point-by-scalar multiplication. Scalar must be in range 1 <= n < CURVE.n.
   * Uses {@link wNAF} for base point.
   * Uses fake point to mitigate side-channel leakage.
   * @param n scalar by which point is multiplied
   * @param safe safe mode guards against timing attacks; unsafe mode is faster
   */
  multiply(t, s = !0) {
    if (!s && (t === 0n || this.is0()))
      return at;
    if (We(t, 1n, On), t === 1n)
      return this;
    if (this.equals(ft))
      return _u(t).p;
    let a = at, p = ft;
    for (let n = this; t > 0n; n = n.double(), t >>= 1n)
      t & 1n ? a = a.add(n) : s && (p = p.add(n));
    return a;
  }
  /** Convert point to 2d xy affine point. (X, Y, Z) ∋ (x=X/Z, y=Y/Z) */
  toAffine() {
    const { ex: t, ey: s, ez: a } = this;
    if (this.equals(at))
      return { x: 0n, y: 1n };
    const p = Io(a, pe);
    return X(a * p) !== 1n && we("invalid inverse"), { x: X(t * p), y: X(s * p) };
  }
  toBytes() {
    const { x: t, y: s } = this.assertValidity().toAffine(), a = lu(s);
    return a[31] |= t & 1n ? 128 : 0, a;
  }
  toHex() {
    return fs(this.toBytes());
  }
  // encode to hex string
  clearCofactor() {
    return this.multiply(Ln(su), !1);
  }
  isSmallOrder() {
    return this.clearCofactor().is0();
  }
  isTorsionFree() {
    let t = this.multiply(On / 2n, !1).double();
    return On % 2n && (t = t.add(this)), t.is0();
  }
  static fromHex(t, s) {
    return Ne.fromBytes(qn(t), s);
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
Pe(Ne, "BASE"), Pe(Ne, "ZERO");
let Le = Ne;
const ft = new Le(oa, ca, 1n, X(oa * ca)), at = new Le(0n, 1n, 1n, 0n);
Le.BASE = ft;
Le.ZERO = at;
const lu = (e) => ps($o(We(e, 0n, ns), es)).reverse(), hs = (e) => Ln("0x" + fs(us(ut(e)).reverse())), Ae = (e, t) => {
  let s = e;
  for (; t-- > 0n; )
    s *= s, s %= pe;
  return s;
}, uu = (e) => {
  const s = e * e % pe * e % pe, a = Ae(s, 2n) * s % pe, p = Ae(a, 1n) * e % pe, n = Ae(p, 5n) * p % pe, r = Ae(n, 10n) * n % pe, o = Ae(r, 20n) * r % pe, d = Ae(o, 40n) * o % pe, h = Ae(d, 80n) * d % pe, v = Ae(h, 80n) * d % pe, w = Ae(v, 10n) * n % pe;
  return { pow_p_5_8: Ae(w, 2n) * e % pe, b2: s };
}, ua = 0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n, fu = (e, t) => {
  const s = X(t * t * t), a = X(s * s * t), p = uu(e * a).pow_p_5_8;
  let n = X(e * s * p);
  const r = X(t * n * n), o = n, d = X(n * ua), h = r === e, v = r === X(-e), w = r === X(-e * ua);
  return h && (n = o), (v || w) && (n = d), (X(n) & 1n) === 1n && (n = X(-n)), { isValid: h || v, value: n };
}, pu = (e) => du(hs(e)), hu = (...e) => vu.sha512Async(...e), mu = (e) => hu(e.hashable).then(e.finish), Eo = { zip215: !0 }, yu = (e, t, s, a = Eo) => {
  e = qn(e, es), t = qn(t), s = qn(s, _t);
  const { zip215: p } = a;
  let n, r, o, d, h = Uint8Array.of();
  try {
    n = Le.fromHex(s, p), r = Le.fromHex(e.slice(0, _t), p), o = hs(e.slice(_t, es)), d = ft.multiply(o, !1), h = ts(r.toBytes(), n.toBytes(), t);
  } catch {
  }
  return { hashable: h, finish: (w) => {
    if (d == null || !p && n.isSmallOrder())
      return !1;
    const f = pu(w);
    return r.add(n.multiply(f, !1)).add(d.negate()).clearCofactor().is0();
  } };
}, gu = async (e, t, s, a = Eo) => mu(yu(e, t, s, a)), vu = {
  sha512Async: async (...e) => {
    const t = ou(), s = ts(...e);
    return Jn(await t.digest("SHA-512", s.buffer));
  },
  sha512Sync: void 0,
  bytesToHex: fs,
  hexToBytes: ps,
  concatBytes: ts,
  mod: X,
  invert: Io,
  randomBytes: cu
}, Cn = 8, bu = 256, Ro = Math.ceil(bu / Cn) + 1, rs = 2 ** (Cn - 1), wu = () => {
  const e = [];
  let t = ft, s = t;
  for (let a = 0; a < Ro; a++) {
    s = t, e.push(s);
    for (let p = 1; p < rs; p++)
      s = s.add(t), e.push(s);
    t = s.double();
  }
  return e;
};
let fa;
const pa = (e, t) => {
  const s = t.negate();
  return e ? s : t;
}, _u = (e) => {
  const t = fa || (fa = wu());
  let s = at, a = ft;
  const p = 2 ** Cn, n = p, r = Ln(p - 1), o = Ln(Cn);
  for (let d = 0; d < Ro; d++) {
    let h = Number(e & r);
    e >>= o, h > rs && (h -= n, e += 1n);
    const v = d * rs, w = v, f = v + Math.abs(h) - 1, u = d % 2 !== 0, b = h < 0;
    h === 0 ? a = a.add(pa(u, t[w])) : s = s.add(pa(b, t[f]));
  }
  return { p: s, f: a };
};
var hr = {}, mr, ha;
function ms() {
  return ha || (ha = 1, mr = class jo {
    /**
     * Creates a new IdentifierIssuer. A IdentifierIssuer issues unique
     * identifiers, keeping track of any previously issued identifiers.
     *
     * @param prefix the prefix to use ('<prefix><counter>').
     * @param existing an existing Map to use.
     * @param counter the counter to use.
     */
    constructor(t, s = /* @__PURE__ */ new Map(), a = 0) {
      this.prefix = t, this._existing = s, this.counter = a;
    }
    /**
     * Copies this IdentifierIssuer.
     *
     * @return a copy of this IdentifierIssuer.
     */
    clone() {
      const { prefix: t, _existing: s, counter: a } = this;
      return new jo(t, new Map(s), a);
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
      const s = t && this._existing.get(t);
      if (s)
        return s;
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
var yr = {}, ma;
function Su() {
  return ma || (ma = 1, (function(e, t) {
    if (e.setImmediate)
      return;
    var s = 1, a = {}, p = !1, n = e.document, r;
    function o(m) {
      typeof m != "function" && (m = new Function("" + m));
      for (var l = new Array(arguments.length - 1), i = 0; i < l.length; i++)
        l[i] = arguments[i + 1];
      var c = { callback: m, args: l };
      return a[s] = c, r(s), s++;
    }
    function d(m) {
      delete a[m];
    }
    function h(m) {
      var l = m.callback, i = m.args;
      switch (i.length) {
        case 0:
          l();
          break;
        case 1:
          l(i[0]);
          break;
        case 2:
          l(i[0], i[1]);
          break;
        case 3:
          l(i[0], i[1], i[2]);
          break;
        default:
          l.apply(t, i);
          break;
      }
    }
    function v(m) {
      if (p)
        setTimeout(v, 0, m);
      else {
        var l = a[m];
        if (l) {
          p = !0;
          try {
            h(l);
          } finally {
            d(m), p = !1;
          }
        }
      }
    }
    function w() {
      r = function(m) {
        process.nextTick(function() {
          v(m);
        });
      };
    }
    function f() {
      if (e.postMessage && !e.importScripts) {
        var m = !0, l = e.onmessage;
        return e.onmessage = function() {
          m = !1;
        }, e.postMessage("", "*"), e.onmessage = l, m;
      }
    }
    function u() {
      var m = "setImmediate$" + Math.random() + "$", l = function(i) {
        i.source === e && typeof i.data == "string" && i.data.indexOf(m) === 0 && v(+i.data.slice(m.length));
      };
      e.addEventListener ? e.addEventListener("message", l, !1) : e.attachEvent("onmessage", l), r = function(i) {
        e.postMessage(m + i, "*");
      };
    }
    function b() {
      var m = new MessageChannel();
      m.port1.onmessage = function(l) {
        var i = l.data;
        v(i);
      }, r = function(l) {
        m.port2.postMessage(l);
      };
    }
    function S() {
      var m = n.documentElement;
      r = function(l) {
        var i = n.createElement("script");
        i.onreadystatechange = function() {
          v(l), i.onreadystatechange = null, m.removeChild(i), i = null;
        }, m.appendChild(i);
      };
    }
    function g() {
      r = function(m) {
        setTimeout(v, 0, m);
      };
    }
    var _ = Object.getPrototypeOf && Object.getPrototypeOf(e);
    _ = _ && _.setTimeout ? _ : e, {}.toString.call(e.process) === "[object process]" ? w() : f() ? u() : e.MessageChannel ? b() : n && "onreadystatechange" in n.createElement("script") ? S() : g(), _.setImmediate = o, _.clearImmediate = d;
  })(typeof self > "u" ? typeof As > "u" ? yr : As : self)), yr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var gr, ya;
function Bn() {
  if (ya) return gr;
  ya = 1, Su();
  const e = self.crypto || self.msCrypto;
  return gr = class {
    /**
     * Creates a new MessageDigest.
     *
     * @param algorithm the algorithm to use.
     */
    constructor(s) {
      if (!(e && e.subtle))
        throw new Error("crypto.subtle not found.");
      if (s === "sha256")
        this.algorithm = { name: "SHA-256" };
      else if (s === "sha1")
        this.algorithm = { name: "SHA-1" };
      else
        throw new Error(`Unsupported algorithm "${s}".`);
      this._content = "";
    }
    update(s) {
      this._content += s;
    }
    async digest() {
      const s = new TextEncoder().encode(this._content), a = new Uint8Array(
        await e.subtle.digest(this.algorithm, s)
      );
      let p = "";
      for (let n = 0; n < a.length; ++n)
        p += a[n].toString(16).padStart(2, "0");
      return p;
    }
  }, gr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var vr, ga;
function Ao() {
  return ga || (ga = 1, vr = class {
    /**
     * A Permuter iterates over all possible permutations of the given array
     * of elements.
     *
     * @param list the array of elements to iterate over.
     */
    constructor(t) {
      this.current = t.sort(), this.done = !1, this.dir = /* @__PURE__ */ new Map();
      for (let s = 0; s < t.length; ++s)
        this.dir.set(t[s], !0);
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
      const { current: t, dir: s } = this, a = t.slice();
      let p = null, n = 0;
      const r = t.length;
      for (let o = 0; o < r; ++o) {
        const d = t[o], h = s.get(d);
        (p === null || d > p) && (h && o > 0 && d > t[o - 1] || !h && o < r - 1 && d > t[o + 1]) && (p = d, n = o);
      }
      if (p === null)
        this.done = !0;
      else {
        const o = s.get(p) ? n - 1 : n + 1;
        t[n] = t[o], t[o] = p;
        for (const d of t)
          d > p && s.set(d, !s.get(d));
      }
      return a;
    }
  }), vr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var br, va;
function ys() {
  if (va) return br;
  va = 1;
  const t = "http://www.w3.org/1999/02/22-rdf-syntax-ns#" + "langString", s = "http://www.w3.org/2001/XMLSchema#string", a = "NamedNode", p = "BlankNode", n = "Literal", r = "DefaultGraph", o = {};
  (() => {
    const u = "(?:<([^:]+:[^>]*)>)", S = "A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�" + "_", g = S + "0-9-·̀-ͯ‿-⁀", m = "(_:(?:[" + S + "0-9])(?:(?:[" + g + ".])*(?:[" + g + "]))?)", l = '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"', i = "(?:\\^\\^" + u + ")", y = "(?:" + l + "(?:" + i + "|" + "(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*))" + ")?)", x = "[ \\t]+", $ = "[ \\t]*", j = "(?:" + u + "|" + m + ")" + x, N = u + x, k = "(?:" + u + "|" + m + "|" + y + ")" + $, C = "(?:\\.|(?:(?:" + u + "|" + m + ")" + $ + "\\.))";
    o.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g, o.empty = new RegExp("^" + $ + "$"), o.quad = new RegExp(
      "^" + $ + j + N + k + C + $ + "$"
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
      const S = [], g = {}, _ = b.split(o.eoln);
      let m = 0;
      for (const l of _) {
        if (m++, o.empty.test(l))
          continue;
        const i = l.match(o.quad);
        if (i === null)
          throw new Error("N-Quads parse error on line " + m + ".");
        const c = { subject: null, predicate: null, object: null, graph: null };
        if (i[1] !== void 0 ? c.subject = { termType: a, value: i[1] } : c.subject = { termType: p, value: i[2] }, c.predicate = { termType: a, value: i[3] }, i[4] !== void 0 ? c.object = { termType: a, value: i[4] } : i[5] !== void 0 ? c.object = { termType: p, value: i[5] } : (c.object = {
          termType: n,
          value: void 0,
          datatype: {
            termType: a
          }
        }, i[7] !== void 0 ? c.object.datatype.value = i[7] : i[8] !== void 0 ? (c.object.datatype.value = t, c.object.language = i[8]) : c.object.datatype.value = s, c.object.value = f(i[6])), i[9] !== void 0 ? c.graph = {
          termType: a,
          value: i[9]
        } : i[10] !== void 0 ? c.graph = {
          termType: p,
          value: i[10]
        } : c.graph = {
          termType: r,
          value: ""
        }, !(c.graph.value in g))
          g[c.graph.value] = [c], S.push(c);
        else {
          let y = !0;
          const x = g[c.graph.value];
          for (const $ of x)
            if (d($, c)) {
              y = !1;
              break;
            }
          y && (x.push(c), S.push(c));
        }
      }
      return S;
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
      const S = [];
      for (const g of b)
        S.push(Tn.serializeQuad(g));
      return S.sort().join("");
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
    static serializeQuadComponents(b, S, g, _) {
      let m = "";
      return b.termType === a ? m += `<${b.value}>` : m += `${b.value}`, m += ` <${S.value}> `, g.termType === a ? m += `<${g.value}>` : g.termType === p ? m += g.value : (m += `"${v(g.value)}"`, g.datatype.value === t ? g.language && (m += `@${g.language}`) : g.datatype.value !== s && (m += `^^<${g.datatype.value}>`)), _.termType === a ? m += ` <${_.value}>` : _.termType === p && (m += ` ${_.value}`), m += ` .
`, m;
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
      const S = [], g = {
        "blank node": p,
        IRI: a,
        literal: n
      };
      for (const _ in b)
        b[_].forEach((l) => {
          const i = {};
          for (const c in l) {
            const y = l[c], x = {
              termType: g[y.type],
              value: y.value
            };
            x.termType === n && (x.datatype = {
              termType: a
            }, "datatype" in y && (x.datatype.value = y.datatype), "language" in y ? ("datatype" in y || (x.datatype.value = t), x.language = y.language) : "datatype" in y || (x.datatype.value = s)), i[c] = x;
          }
          _ === "@default" ? i.graph = {
            termType: r,
            value: ""
          } : i.graph = {
            termType: _.startsWith("_:") ? p : a,
            value: _
          }, S.push(i);
        });
      return S;
    }
  };
  function d(u, b) {
    return !(u.subject.termType === b.subject.termType && u.object.termType === b.object.termType) || !(u.subject.value === b.subject.value && u.predicate.value === b.predicate.value && u.object.value === b.object.value) ? !1 : u.object.termType !== n ? !0 : u.object.datatype.termType === b.object.datatype.termType && u.object.language === b.object.language && u.object.datatype.value === b.object.datatype.value;
  }
  const h = /["\\\n\r]/g;
  function v(u) {
    return u.replace(h, function(b) {
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
  function f(u) {
    return u.replace(w, function(b, S, g, _) {
      if (S)
        switch (S) {
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
      if (g)
        return String.fromCharCode(parseInt(g, 16));
      if (_)
        throw new Error("Unsupported U escape");
    });
  }
  return br;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var wr, ba;
function No() {
  if (ba) return wr;
  ba = 1;
  const e = ms(), t = Bn(), s = Ao(), a = ys();
  wr = class {
    constructor({
      createMessageDigest: r = () => new t("sha256"),
      canonicalIdMap: o = /* @__PURE__ */ new Map(),
      maxDeepIterations: d = 1 / 0
    } = {}) {
      this.name = "URDNA2015", this.blankNodeInfo = /* @__PURE__ */ new Map(), this.canonicalIssuer = new e("_:c14n", o), this.createMessageDigest = r, this.maxDeepIterations = d, this.quads = null, this.deepIterations = null;
    }
    // 4.4) Normalization Algorithm
    async main(r) {
      this.deepIterations = /* @__PURE__ */ new Map(), this.quads = r;
      for (const u of r)
        this._addBlankNodeQuadInfo({ quad: u, component: u.subject }), this._addBlankNodeQuadInfo({ quad: u, component: u.object }), this._addBlankNodeQuadInfo({ quad: u, component: u.graph });
      const o = /* @__PURE__ */ new Map(), d = [...this.blankNodeInfo.keys()];
      let h = 0;
      for (const u of d)
        ++h % 100 === 0 && await this._yield(), await this._hashAndTrackBlankNode({ id: u, hashToBlankNodes: o });
      const v = [...o.keys()].sort(), w = [];
      for (const u of v) {
        const b = o.get(u);
        if (b.length > 1) {
          w.push(b);
          continue;
        }
        const S = b[0];
        this.canonicalIssuer.getId(S);
      }
      for (const u of w) {
        const b = [];
        for (const S of u) {
          if (this.canonicalIssuer.hasId(S))
            continue;
          const g = new e("_:b");
          g.getId(S);
          const _ = await this.hashNDegreeQuads(S, g);
          b.push(_);
        }
        b.sort(p);
        for (const S of b) {
          const g = S.issuer.getOldIds();
          for (const _ of g)
            this.canonicalIssuer.getId(_);
        }
      }
      const f = [];
      for (const u of this.quads) {
        const b = a.serializeQuadComponents(
          this._componentWithCanonicalId(u.subject),
          u.predicate,
          this._componentWithCanonicalId(u.object),
          this._componentWithCanonicalId(u.graph)
        );
        f.push(b);
      }
      return f.sort(), f.join("");
    }
    // 4.6) Hash First Degree Quads
    async hashFirstDegreeQuads(r) {
      const o = [], d = this.blankNodeInfo.get(r), h = d.quads;
      for (const w of h) {
        const f = {
          subject: null,
          predicate: w.predicate,
          object: null,
          graph: null
        };
        f.subject = this.modifyFirstDegreeComponent(
          r,
          w.subject,
          "subject"
        ), f.object = this.modifyFirstDegreeComponent(
          r,
          w.object,
          "object"
        ), f.graph = this.modifyFirstDegreeComponent(
          r,
          w.graph,
          "graph"
        ), o.push(a.serializeQuad(f));
      }
      o.sort();
      const v = this.createMessageDigest();
      for (const w of o)
        v.update(w);
      return d.hash = await v.digest(), d.hash;
    }
    // 4.7) Hash Related Blank Node
    async hashRelatedBlankNode(r, o, d, h) {
      let v;
      this.canonicalIssuer.hasId(r) ? v = this.canonicalIssuer.getId(r) : d.hasId(r) ? v = d.getId(r) : v = this.blankNodeInfo.get(r).hash;
      const w = this.createMessageDigest();
      return w.update(h), h !== "g" && w.update(this.getRelatedPredicate(o)), w.update(v), w.digest();
    }
    // 4.8) Hash N-Degree Quads
    async hashNDegreeQuads(r, o) {
      const d = this.deepIterations.get(r) || 0;
      if (d > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(r, d + 1);
      const h = this.createMessageDigest(), v = await this.createHashToRelated(r, o), w = [...v.keys()].sort();
      for (const f of w) {
        h.update(f);
        let u = "", b;
        const S = new s(v.get(f));
        let g = 0;
        for (; S.hasNext(); ) {
          const _ = S.next();
          ++g % 3 === 0 && await this._yield();
          let m = o.clone(), l = "";
          const i = [];
          let c = !1;
          for (const y of _)
            if (this.canonicalIssuer.hasId(y) ? l += this.canonicalIssuer.getId(y) : (m.hasId(y) || i.push(y), l += m.getId(y)), u.length !== 0 && l > u) {
              c = !0;
              break;
            }
          if (!c) {
            for (const y of i) {
              const x = await this.hashNDegreeQuads(y, m);
              if (l += m.getId(y), l += `<${x.hash}>`, m = x.issuer, u.length !== 0 && l > u) {
                c = !0;
                break;
              }
            }
            c || (u.length === 0 || l < u) && (u = l, b = m);
          }
        }
        h.update(u), o = b;
      }
      return { hash: await h.digest(), issuer: o };
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
      const d = /* @__PURE__ */ new Map(), h = this.blankNodeInfo.get(r).quads;
      let v = 0;
      for (const w of h)
        ++v % 100 === 0 && await this._yield(), await Promise.all([
          this._addRelatedBlankNodeHash({
            quad: w,
            component: w.subject,
            position: "s",
            id: r,
            issuer: o,
            hashToRelated: d
          }),
          this._addRelatedBlankNodeHash({
            quad: w,
            component: w.object,
            position: "o",
            id: r,
            issuer: o,
            hashToRelated: d
          }),
          this._addRelatedBlankNodeHash({
            quad: w,
            component: w.graph,
            position: "g",
            id: r,
            issuer: o,
            hashToRelated: d
          })
        ]);
      return d;
    }
    async _hashAndTrackBlankNode({ id: r, hashToBlankNodes: o }) {
      const d = await this.hashFirstDegreeQuads(r), h = o.get(d);
      h ? h.push(r) : o.set(d, [r]);
    }
    _addBlankNodeQuadInfo({ quad: r, component: o }) {
      if (o.termType !== "BlankNode")
        return;
      const d = o.value, h = this.blankNodeInfo.get(d);
      h ? h.quads.add(r) : this.blankNodeInfo.set(d, { quads: /* @__PURE__ */ new Set([r]), hash: null });
    }
    async _addRelatedBlankNodeHash({ quad: r, component: o, position: d, id: h, issuer: v, hashToRelated: w }) {
      if (!(o.termType === "BlankNode" && o.value !== h))
        return;
      const f = o.value, u = await this.hashRelatedBlankNode(
        f,
        r,
        v,
        d
      ), b = w.get(u);
      b ? b.push(f) : w.set(u, [f]);
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
  function p(n, r) {
    return n.hash < r.hash ? -1 : n.hash > r.hash ? 1 : 0;
  }
  return wr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var _r, wa;
function $u() {
  if (wa) return _r;
  wa = 1;
  const e = Bn(), t = No();
  return _r = class extends t {
    constructor() {
      super(), this.name = "URGNA2012", this.createMessageDigest = () => new e("sha1");
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(a, p, n) {
      return p.termType !== "BlankNode" ? p : n === "graph" ? {
        termType: "BlankNode",
        value: "_:g"
      } : {
        termType: "BlankNode",
        value: p.value === a ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(a) {
      return a.predicate.value;
    }
    // helper for creating hash to related blank nodes map
    async createHashToRelated(a, p) {
      const n = /* @__PURE__ */ new Map(), r = this.blankNodeInfo.get(a).quads;
      let o = 0;
      for (const d of r) {
        let h, v;
        if (d.subject.termType === "BlankNode" && d.subject.value !== a)
          v = d.subject.value, h = "p";
        else if (d.object.termType === "BlankNode" && d.object.value !== a)
          v = d.object.value, h = "r";
        else
          continue;
        ++o % 100 === 0 && await this._yield();
        const w = await this.hashRelatedBlankNode(
          v,
          d,
          p,
          h
        ), f = n.get(w);
        f ? f.push(v) : n.set(w, [v]);
      }
      return n;
    }
  }, _r;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Sr, _a;
function Po() {
  if (_a) return Sr;
  _a = 1;
  const e = ms(), t = Bn(), s = Ao(), a = ys();
  Sr = class {
    constructor({
      createMessageDigest: r = () => new t("sha256"),
      canonicalIdMap: o = /* @__PURE__ */ new Map(),
      maxDeepIterations: d = 1 / 0
    } = {}) {
      this.name = "URDNA2015", this.blankNodeInfo = /* @__PURE__ */ new Map(), this.canonicalIssuer = new e("_:c14n", o), this.createMessageDigest = r, this.maxDeepIterations = d, this.quads = null, this.deepIterations = null;
    }
    // 4.4) Normalization Algorithm
    main(r) {
      this.deepIterations = /* @__PURE__ */ new Map(), this.quads = r;
      for (const f of r)
        this._addBlankNodeQuadInfo({ quad: f, component: f.subject }), this._addBlankNodeQuadInfo({ quad: f, component: f.object }), this._addBlankNodeQuadInfo({ quad: f, component: f.graph });
      const o = /* @__PURE__ */ new Map(), d = [...this.blankNodeInfo.keys()];
      for (const f of d)
        this._hashAndTrackBlankNode({ id: f, hashToBlankNodes: o });
      const h = [...o.keys()].sort(), v = [];
      for (const f of h) {
        const u = o.get(f);
        if (u.length > 1) {
          v.push(u);
          continue;
        }
        const b = u[0];
        this.canonicalIssuer.getId(b);
      }
      for (const f of v) {
        const u = [];
        for (const b of f) {
          if (this.canonicalIssuer.hasId(b))
            continue;
          const S = new e("_:b");
          S.getId(b);
          const g = this.hashNDegreeQuads(b, S);
          u.push(g);
        }
        u.sort(p);
        for (const b of u) {
          const S = b.issuer.getOldIds();
          for (const g of S)
            this.canonicalIssuer.getId(g);
        }
      }
      const w = [];
      for (const f of this.quads) {
        const u = a.serializeQuadComponents(
          this._componentWithCanonicalId({ component: f.subject }),
          f.predicate,
          this._componentWithCanonicalId({ component: f.object }),
          this._componentWithCanonicalId({ component: f.graph })
        );
        w.push(u);
      }
      return w.sort(), w.join("");
    }
    // 4.6) Hash First Degree Quads
    hashFirstDegreeQuads(r) {
      const o = [], d = this.blankNodeInfo.get(r), h = d.quads;
      for (const w of h) {
        const f = {
          subject: null,
          predicate: w.predicate,
          object: null,
          graph: null
        };
        f.subject = this.modifyFirstDegreeComponent(
          r,
          w.subject,
          "subject"
        ), f.object = this.modifyFirstDegreeComponent(
          r,
          w.object,
          "object"
        ), f.graph = this.modifyFirstDegreeComponent(
          r,
          w.graph,
          "graph"
        ), o.push(a.serializeQuad(f));
      }
      o.sort();
      const v = this.createMessageDigest();
      for (const w of o)
        v.update(w);
      return d.hash = v.digest(), d.hash;
    }
    // 4.7) Hash Related Blank Node
    hashRelatedBlankNode(r, o, d, h) {
      let v;
      this.canonicalIssuer.hasId(r) ? v = this.canonicalIssuer.getId(r) : d.hasId(r) ? v = d.getId(r) : v = this.blankNodeInfo.get(r).hash;
      const w = this.createMessageDigest();
      return w.update(h), h !== "g" && w.update(this.getRelatedPredicate(o)), w.update(v), w.digest();
    }
    // 4.8) Hash N-Degree Quads
    hashNDegreeQuads(r, o) {
      const d = this.deepIterations.get(r) || 0;
      if (d > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(r, d + 1);
      const h = this.createMessageDigest(), v = this.createHashToRelated(r, o), w = [...v.keys()].sort();
      for (const f of w) {
        h.update(f);
        let u = "", b;
        const S = new s(v.get(f));
        for (; S.hasNext(); ) {
          const g = S.next();
          let _ = o.clone(), m = "";
          const l = [];
          let i = !1;
          for (const c of g)
            if (this.canonicalIssuer.hasId(c) ? m += this.canonicalIssuer.getId(c) : (_.hasId(c) || l.push(c), m += _.getId(c)), u.length !== 0 && m > u) {
              i = !0;
              break;
            }
          if (!i) {
            for (const c of l) {
              const y = this.hashNDegreeQuads(c, _);
              if (m += _.getId(c), m += `<${y.hash}>`, _ = y.issuer, u.length !== 0 && m > u) {
                i = !0;
                break;
              }
            }
            i || (u.length === 0 || m < u) && (u = m, b = _);
          }
        }
        h.update(u), o = b;
      }
      return { hash: h.digest(), issuer: o };
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
      const d = /* @__PURE__ */ new Map(), h = this.blankNodeInfo.get(r).quads;
      for (const v of h)
        this._addRelatedBlankNodeHash({
          quad: v,
          component: v.subject,
          position: "s",
          id: r,
          issuer: o,
          hashToRelated: d
        }), this._addRelatedBlankNodeHash({
          quad: v,
          component: v.object,
          position: "o",
          id: r,
          issuer: o,
          hashToRelated: d
        }), this._addRelatedBlankNodeHash({
          quad: v,
          component: v.graph,
          position: "g",
          id: r,
          issuer: o,
          hashToRelated: d
        });
      return d;
    }
    _hashAndTrackBlankNode({ id: r, hashToBlankNodes: o }) {
      const d = this.hashFirstDegreeQuads(r), h = o.get(d);
      h ? h.push(r) : o.set(d, [r]);
    }
    _addBlankNodeQuadInfo({ quad: r, component: o }) {
      if (o.termType !== "BlankNode")
        return;
      const d = o.value, h = this.blankNodeInfo.get(d);
      h ? h.quads.add(r) : this.blankNodeInfo.set(d, { quads: /* @__PURE__ */ new Set([r]), hash: null });
    }
    _addRelatedBlankNodeHash({ quad: r, component: o, position: d, id: h, issuer: v, hashToRelated: w }) {
      if (!(o.termType === "BlankNode" && o.value !== h))
        return;
      const f = o.value, u = this.hashRelatedBlankNode(f, r, v, d), b = w.get(u);
      b ? b.push(f) : w.set(u, [f]);
    }
    // canonical ids for 7.1
    _componentWithCanonicalId({ component: r }) {
      return r.termType === "BlankNode" && !r.value.startsWith(this.canonicalIssuer.prefix) ? {
        termType: "BlankNode",
        value: this.canonicalIssuer.getId(r.value)
      } : r;
    }
  };
  function p(n, r) {
    return n.hash < r.hash ? -1 : n.hash > r.hash ? 1 : 0;
  }
  return Sr;
}
/*!
 * Copyright (c) 2016-2021 Digital Bazaar, Inc. All rights reserved.
 */
var $r, Sa;
function xu() {
  if (Sa) return $r;
  Sa = 1;
  const e = Bn(), t = Po();
  return $r = class extends t {
    constructor() {
      super(), this.name = "URGNA2012", this.createMessageDigest = () => new e("sha1");
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(a, p, n) {
      return p.termType !== "BlankNode" ? p : n === "graph" ? {
        termType: "BlankNode",
        value: "_:g"
      } : {
        termType: "BlankNode",
        value: p.value === a ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(a) {
      return a.predicate.value;
    }
    // helper for creating hash to related blank nodes map
    createHashToRelated(a, p) {
      const n = /* @__PURE__ */ new Map(), r = this.blankNodeInfo.get(a).quads;
      for (const o of r) {
        let d, h;
        if (o.subject.termType === "BlankNode" && o.subject.value !== a)
          h = o.subject.value, d = "p";
        else if (o.object.termType === "BlankNode" && o.object.value !== a)
          h = o.object.value, d = "r";
        else
          continue;
        const v = this.hashRelatedBlankNode(h, o, p, d), w = n.get(v);
        w ? w.push(h) : n.set(v, [h]);
      }
      return n;
    }
  }, $r;
}
const Iu = {}, Eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Iu
}, Symbol.toStringTag, { value: "Module" })), Ru = /* @__PURE__ */ Ic(Eu);
var $a;
function ju() {
  return $a || ($a = 1, (function(e) {
    const t = No(), s = $u(), a = Po(), p = xu();
    let n;
    try {
      n = Ru;
    } catch {
    }
    function r(o) {
      return Array.isArray(o) ? o : e.NQuads.legacyDatasetToQuads(o);
    }
    e.NQuads = ys(), e.IdentifierIssuer = ms(), e._rdfCanonizeNative = function(o) {
      return o && (n = o), n;
    }, e.canonize = async function(o, d) {
      const h = r(o);
      if (d.useNative) {
        if (!n)
          throw new Error("rdf-canonize-native not available");
        if (d.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return new Promise((v, w) => n.canonize(h, d, (f, u) => f ? w(f) : v(u)));
      }
      if (d.algorithm === "URDNA2015")
        return new t(d).main(h);
      if (d.algorithm === "URGNA2012") {
        if (d.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "URGNA2012".'
          );
        return new s(d).main(h);
      }
      throw "algorithm" in d ? new Error(
        "Invalid RDF Dataset Canonicalization algorithm: " + d.algorithm
      ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
    }, e._canonizeSync = function(o, d) {
      const h = r(o);
      if (d.useNative) {
        if (!n)
          throw new Error("rdf-canonize-native not available");
        if (d.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return n.canonizeSync(h, d);
      }
      if (d.algorithm === "URDNA2015")
        return new a(d).main(h);
      if (d.algorithm === "URGNA2012") {
        if (d.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "URGNA2012".'
          );
        return new p(d).main(h);
      }
      throw "algorithm" in d ? new Error(
        "Invalid RDF Dataset Canonicalization algorithm: " + d.algorithm
      ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
    };
  })(hr)), hr;
}
var xr, xa;
function gs() {
  return xa || (xa = 1, xr = ju()), xr;
}
var Ir, Ia;
function ye() {
  if (Ia) return Ir;
  Ia = 1;
  const e = {};
  return Ir = e, e.isArray = Array.isArray, e.isBoolean = (t) => typeof t == "boolean" || Object.prototype.toString.call(t) === "[object Boolean]", e.isDouble = (t) => e.isNumber(t) && (String(t).indexOf(".") !== -1 || Math.abs(t) >= 1e21), e.isEmptyObject = (t) => e.isObject(t) && Object.keys(t).length === 0, e.isNumber = (t) => typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]", e.isNumeric = (t) => !isNaN(parseFloat(t)) && isFinite(t), e.isObject = (t) => Object.prototype.toString.call(t) === "[object Object]", e.isString = (t) => typeof t == "string" || Object.prototype.toString.call(t) === "[object String]", e.isUndefined = (t) => typeof t > "u", Ir;
}
var Er, Ea;
function Ce() {
  if (Ea) return Er;
  Ea = 1;
  const e = ye(), t = {};
  return Er = t, t.isSubject = (s) => e.isObject(s) && !("@value" in s || "@set" in s || "@list" in s) ? Object.keys(s).length > 1 || !("@id" in s) : !1, t.isSubjectReference = (s) => (
    // Note: A value is a subject reference if all of these hold true:
    // 1. It is an Object.
    // 2. It has a single key: @id.
    e.isObject(s) && Object.keys(s).length === 1 && "@id" in s
  ), t.isValue = (s) => (
    // Note: A value is a @value if all of these hold true:
    // 1. It is an Object.
    // 2. It has the @value property.
    e.isObject(s) && "@value" in s
  ), t.isList = (s) => (
    // Note: A value is a @list if all of these hold true:
    // 1. It is an Object.
    // 2. It has the @list property.
    e.isObject(s) && "@list" in s
  ), t.isGraph = (s) => e.isObject(s) && "@graph" in s && Object.keys(s).filter((a) => a !== "@id" && a !== "@index").length === 1, t.isSimpleGraph = (s) => t.isGraph(s) && !("@id" in s), t.isBlankNode = (s) => {
    if (e.isObject(s)) {
      if ("@id" in s) {
        const a = s["@id"];
        return !e.isString(a) || a.indexOf("_:") === 0;
      }
      return Object.keys(s).length === 0 || !("@value" in s || "@set" in s || "@list" in s);
    }
    return !1;
  }, Er;
}
var Rr, Ra;
function Se() {
  return Ra || (Ra = 1, Rr = class extends Error {
    /**
     * Creates a JSON-LD Error.
     *
     * @param msg the error message.
     * @param type the error type.
     * @param details the error details.
     */
    constructor(t = "An unspecified JSON-LD error occurred.", s = "jsonld.Error", a = {}) {
      super(t), this.name = s, this.message = t, this.details = a;
    }
  }), Rr;
}
var jr, ja;
function _e() {
  if (ja) return jr;
  ja = 1;
  const e = Ce(), t = ye(), s = gs().IdentifierIssuer, a = Se(), p = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/, n = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g, r = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/, o = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g, d = /^@[a-zA-Z]+$/, h = {
    headers: {
      accept: "application/ld+json, application/json"
    }
  }, v = {};
  jr = v, v.IdentifierIssuer = s, v.REGEX_BCP47 = p, v.REGEX_KEYWORD = d, v.clone = function(f) {
    if (f && typeof f == "object") {
      let u;
      if (t.isArray(f)) {
        u = [];
        for (let b = 0; b < f.length; ++b)
          u[b] = v.clone(f[b]);
      } else if (f instanceof Map) {
        u = /* @__PURE__ */ new Map();
        for (const [b, S] of f)
          u.set(b, v.clone(S));
      } else if (f instanceof Set) {
        u = /* @__PURE__ */ new Set();
        for (const b of f)
          u.add(v.clone(b));
      } else if (t.isObject(f)) {
        u = {};
        for (const b in f)
          u[b] = v.clone(f[b]);
      } else
        u = f.toString();
      return u;
    }
    return f;
  }, v.asArray = function(f) {
    return Array.isArray(f) ? f : [f];
  }, v.buildHeaders = (f = {}) => {
    if (Object.keys(f).some(
      (b) => b.toLowerCase() === "accept"
    ))
      throw new RangeError(
        'Accept header may not be specified; only "' + h.headers.accept + '" is supported.'
      );
    return Object.assign({ Accept: h.headers.accept }, f);
  }, v.parseLinkHeader = (f) => {
    const u = {}, b = f.match(n);
    for (let S = 0; S < b.length; ++S) {
      let g = b[S].match(r);
      if (!g)
        continue;
      const _ = { target: g[1] }, m = g[2];
      for (; g = o.exec(m); )
        _[g[1]] = g[2] === void 0 ? g[3] : g[2];
      const l = _.rel || "";
      Array.isArray(u[l]) ? u[l].push(_) : u.hasOwnProperty(l) ? u[l] = [u[l], _] : u[l] = _;
    }
    return u;
  }, v.validateTypeValue = (f, u) => {
    if (!t.isString(f) && !(t.isArray(f) && f.every((b) => t.isString(b)))) {
      if (u && t.isObject(f))
        switch (Object.keys(f).length) {
          case 0:
            return;
          case 1:
            if ("@default" in f && v.asArray(f["@default"]).every((b) => t.isString(b)))
              return;
        }
      throw new a(
        'Invalid JSON-LD syntax; "@type" value must a string, an array of strings, an empty object, or a default object.',
        "jsonld.SyntaxError",
        { code: "invalid type value", value: f }
      );
    }
  }, v.hasProperty = (f, u) => {
    if (f.hasOwnProperty(u)) {
      const b = f[u];
      return !t.isArray(b) || b.length > 0;
    }
    return !1;
  }, v.hasValue = (f, u, b) => {
    if (v.hasProperty(f, u)) {
      let S = f[u];
      const g = e.isList(S);
      if (t.isArray(S) || g) {
        g && (S = S["@list"]);
        for (let _ = 0; _ < S.length; ++_)
          if (v.compareValues(b, S[_]))
            return !0;
      } else if (!t.isArray(b))
        return v.compareValues(b, S);
    }
    return !1;
  }, v.addValue = (f, u, b, S) => {
    if (S = S || {}, "propertyIsArray" in S || (S.propertyIsArray = !1), "valueIsArray" in S || (S.valueIsArray = !1), "allowDuplicate" in S || (S.allowDuplicate = !0), "prependValue" in S || (S.prependValue = !1), S.valueIsArray)
      f[u] = b;
    else if (t.isArray(b)) {
      b.length === 0 && S.propertyIsArray && !f.hasOwnProperty(u) && (f[u] = []), S.prependValue && (b = b.concat(f[u]), f[u] = []);
      for (let g = 0; g < b.length; ++g)
        v.addValue(f, u, b[g], S);
    } else if (f.hasOwnProperty(u)) {
      const g = !S.allowDuplicate && v.hasValue(f, u, b);
      !t.isArray(f[u]) && (!g || S.propertyIsArray) && (f[u] = [f[u]]), g || (S.prependValue ? f[u].unshift(b) : f[u].push(b));
    } else
      f[u] = S.propertyIsArray ? [b] : b;
  }, v.getValues = (f, u) => [].concat(f[u] || []), v.removeProperty = (f, u) => {
    delete f[u];
  }, v.removeValue = (f, u, b, S) => {
    S = S || {}, "propertyIsArray" in S || (S.propertyIsArray = !1);
    const g = v.getValues(f, u).filter(
      (_) => !v.compareValues(_, b)
    );
    g.length === 0 ? v.removeProperty(f, u) : g.length === 1 && !S.propertyIsArray ? f[u] = g[0] : f[u] = g;
  }, v.relabelBlankNodes = (f, u) => {
    u = u || {};
    const b = u.issuer || new s("_:b");
    return w(b, f);
  }, v.compareValues = (f, u) => f === u || e.isValue(f) && e.isValue(u) && f["@value"] === u["@value"] && f["@type"] === u["@type"] && f["@language"] === u["@language"] && f["@index"] === u["@index"] ? !0 : t.isObject(f) && "@id" in f && t.isObject(u) && "@id" in u ? f["@id"] === u["@id"] : !1, v.compareShortestLeast = (f, u) => f.length < u.length ? -1 : u.length < f.length ? 1 : f === u ? 0 : f < u ? -1 : 1;
  function w(f, u) {
    if (t.isArray(u))
      for (let b = 0; b < u.length; ++b)
        u[b] = w(f, u[b]);
    else if (e.isList(u))
      u["@list"] = w(f, u["@list"]);
    else if (t.isObject(u)) {
      e.isBlankNode(u) && (u["@id"] = f.getId(u["@id"]));
      const b = Object.keys(u).sort();
      for (let S = 0; S < b.length; ++S) {
        const g = b[S];
        g !== "@id" && (u[g] = w(f, u[g]));
      }
    }
    return u;
  }
  return jr;
}
var Ar, Aa;
function vs() {
  if (Aa) return Ar;
  Aa = 1;
  const e = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", t = "http://www.w3.org/2001/XMLSchema#";
  return Ar = {
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
  }, Ar;
}
var Nr, Na;
function Oo() {
  return Na || (Na = 1, Nr = class {
    /**
     * Creates a simple queue for requesting documents.
     */
    constructor() {
      this._requests = {};
    }
    wrapLoader(t) {
      const s = this;
      return s._loader = t, function() {
        return s.add.apply(s, arguments);
      };
    }
    async add(t) {
      let s = this._requests[t];
      if (s)
        return Promise.resolve(s);
      s = this._requests[t] = this._loader(t);
      try {
        return await s;
      } finally {
        delete this._requests[t];
      }
    }
  }), Nr;
}
var Pr, Pa;
function Je() {
  if (Pa) return Pr;
  Pa = 1;
  const e = ye(), t = {};
  Pr = t, t.parsers = {
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
  }, t.parse = (a, p) => {
    const n = {}, r = t.parsers[p || "full"], o = r.regex.exec(a);
    let d = r.keys.length;
    for (; d--; )
      n[r.keys[d]] = o[d] === void 0 ? null : o[d];
    return (n.scheme === "https" && n.port === "443" || n.scheme === "http" && n.port === "80") && (n.href = n.href.replace(":" + n.port, ""), n.authority = n.authority.replace(":" + n.port, ""), n.port = null), n.normalizedPath = t.removeDotSegments(n.path), n;
  }, t.prependBase = (a, p) => {
    if (a === null || t.isAbsolute(p))
      return p;
    (!a || e.isString(a)) && (a = t.parse(a || ""));
    const n = t.parse(p), r = {
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
        let d = a.path;
        d = d.substr(0, d.lastIndexOf("/") + 1), (d.length > 0 || a.authority) && d.substr(-1) !== "/" && (d += "/"), d += n.path, r.path = d;
      }
      r.query = n.query;
    }
    n.path !== "" && (r.path = t.removeDotSegments(r.path));
    let o = r.protocol;
    return r.authority !== null && (o += "//" + r.authority), o += r.path, r.query !== null && (o += "?" + r.query), n.fragment !== null && (o += "#" + n.fragment), o === "" && (o = "./"), o;
  }, t.removeBase = (a, p) => {
    if (a === null)
      return p;
    (!a || e.isString(a)) && (a = t.parse(a || ""));
    let n = "";
    if (a.href !== "" ? n += (a.protocol || "") + "//" + (a.authority || "") : p.indexOf("//") && (n += "//"), p.indexOf(n) !== 0)
      return p;
    const r = t.parse(p.substr(n.length)), o = a.normalizedPath.split("/"), d = r.normalizedPath.split("/"), h = r.fragment || r.query ? 0 : 1;
    for (; o.length > 0 && d.length > h && o[0] === d[0]; )
      o.shift(), d.shift();
    let v = "";
    if (o.length > 0) {
      o.pop();
      for (let w = 0; w < o.length; ++w)
        v += "../";
    }
    return v += d.join("/"), r.query !== null && (v += "?" + r.query), r.fragment !== null && (v += "#" + r.fragment), v === "" && (v = "./"), v;
  }, t.removeDotSegments = (a) => {
    if (a.length === 0)
      return "";
    const p = a.split("/"), n = [];
    for (; p.length > 0; ) {
      const r = p.shift(), o = p.length === 0;
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
  const s = /^([A-Za-z][A-Za-z0-9+-.]*|_):[^\s]*$/;
  return t.isAbsolute = (a) => e.isString(a) && s.test(a), t.isRelative = (a) => e.isString(a), Pr;
}
var Or, Oa;
function Au() {
  if (Oa) return Or;
  Oa = 1;
  const { parseLinkHeader: e, buildHeaders: t } = _e(), { LINK_HEADER_CONTEXT: s } = vs(), a = Se(), p = Oo(), { prependBase: n } = Je(), r = /(^|(\r\n))link:/i;
  Or = ({
    secure: d,
    headers: h = {},
    xhr: v
  } = { headers: {} }) => {
    return h = t(h), new p().wrapLoader(f);
    async function f(u) {
      if (u.indexOf("http:") !== 0 && u.indexOf("https:") !== 0)
        throw new a(
          'URL could not be dereferenced; only "http" and "https" URLs are supported.',
          "jsonld.InvalidUrl",
          { code: "loading document failed", url: u }
        );
      if (d && u.indexOf("https") !== 0)
        throw new a(
          `URL could not be dereferenced; secure mode is enabled and the URL's scheme is not "https".`,
          "jsonld.InvalidUrl",
          { code: "loading document failed", url: u }
        );
      let b;
      try {
        b = await o(v, u, h);
      } catch (l) {
        throw new a(
          "URL could not be dereferenced, an error occurred.",
          "jsonld.LoadDocumentError",
          { code: "loading document failed", url: u, cause: l }
        );
      }
      if (b.status >= 400)
        throw new a(
          "URL could not be dereferenced: " + b.statusText,
          "jsonld.LoadDocumentError",
          {
            code: "loading document failed",
            url: u,
            httpStatusCode: b.status
          }
        );
      let S = { contextUrl: null, documentUrl: u, document: b.response }, g = null;
      const _ = b.getResponseHeader("Content-Type");
      let m;
      if (r.test(b.getAllResponseHeaders()) && (m = b.getResponseHeader("Link")), m && _ !== "application/ld+json") {
        const l = e(m), i = l[s];
        if (Array.isArray(i))
          throw new a(
            "URL could not be dereferenced, it has more than one associated HTTP Link Header.",
            "jsonld.InvalidUrl",
            { code: "multiple context link headers", url: u }
          );
        i && (S.contextUrl = i.target), g = l.alternate, g && g.type == "application/ld+json" && !(_ || "").match(/^application\/(\w*\+)?json$/) && (S = await f(n(u, g.target)));
      }
      return S;
    }
  };
  function o(d, h, v) {
    d = d || XMLHttpRequest;
    const w = new d();
    return new Promise((f, u) => {
      w.onload = () => f(w), w.onerror = (b) => u(b), w.open("GET", h, !0);
      for (const b in v)
        w.setRequestHeader(b, v[b]);
      w.send();
    });
  }
  return Or;
}
var qr, qa;
function Nu() {
  if (qa) return qr;
  qa = 1;
  const e = Au(), t = {};
  return qr = t, t.setupDocumentLoaders = function(s) {
    typeof XMLHttpRequest < "u" && (s.documentLoaders.xhr = e, s.useDocumentLoader("xhr"));
  }, t.setupGlobals = function(s) {
    typeof globalThis.JsonLdProcessor > "u" && Object.defineProperty(globalThis, "JsonLdProcessor", {
      writable: !0,
      enumerable: !1,
      configurable: !0,
      value: s.JsonLdProcessor
    });
  }, qr;
}
var Tr, Ta;
function Pu() {
  return Ta || (Ta = 1, Tr = function(e) {
    e.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next)
        yield t.value;
    };
  }), Tr;
}
var kr, ka;
function Ou() {
  if (ka) return kr;
  ka = 1, kr = e, e.Node = p, e.create = e;
  function e(n) {
    var r = this;
    if (r instanceof e || (r = new e()), r.tail = null, r.head = null, r.length = 0, n && typeof n.forEach == "function")
      n.forEach(function(h) {
        r.push(h);
      });
    else if (arguments.length > 0)
      for (var o = 0, d = arguments.length; o < d; o++)
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
      s(this, arguments[n]);
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
    for (var o = this.head, d = 0; o !== null; d++)
      n.call(r, o.value, d, this), o = o.next;
  }, e.prototype.forEachReverse = function(n, r) {
    r = r || this;
    for (var o = this.tail, d = this.length - 1; o !== null; d--)
      n.call(r, o.value, d, this), o = o.prev;
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
    for (var o = new e(), d = this.head; d !== null; )
      o.push(n.call(r, d.value, this)), d = d.next;
    return o;
  }, e.prototype.mapReverse = function(n, r) {
    r = r || this;
    for (var o = new e(), d = this.tail; d !== null; )
      o.push(n.call(r, d.value, this)), d = d.prev;
    return o;
  }, e.prototype.reduce = function(n, r) {
    var o, d = this.head;
    if (arguments.length > 1)
      o = r;
    else if (this.head)
      d = this.head.next, o = this.head.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var h = 0; d !== null; h++)
      o = n(o, d.value, h), d = d.next;
    return o;
  }, e.prototype.reduceReverse = function(n, r) {
    var o, d = this.tail;
    if (arguments.length > 1)
      o = r;
    else if (this.tail)
      d = this.tail.prev, o = this.tail.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var h = this.length - 1; d !== null; h--)
      o = n(o, d.value, h), d = d.prev;
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
    for (var d = 0, h = this.head; h !== null && d < n; d++)
      h = h.next;
    for (; h !== null && d < r; d++, h = h.next)
      o.push(h.value);
    return o;
  }, e.prototype.sliceReverse = function(n, r) {
    r = r || this.length, r < 0 && (r += this.length), n = n || 0, n < 0 && (n += this.length);
    var o = new e();
    if (r < n || r < 0)
      return o;
    n < 0 && (n = 0), r > this.length && (r = this.length);
    for (var d = this.length, h = this.tail; h !== null && d > r; d--)
      h = h.prev;
    for (; h !== null && d > n; d--, h = h.prev)
      o.push(h.value);
    return o;
  }, e.prototype.splice = function(n, r, ...o) {
    n > this.length && (n = this.length - 1), n < 0 && (n = this.length + n);
    for (var d = 0, h = this.head; h !== null && d < n; d++)
      h = h.next;
    for (var v = [], d = 0; h && d < r; d++)
      v.push(h.value), h = this.removeNode(h);
    h === null && (h = this.tail), h !== this.head && h !== this.tail && (h = h.prev);
    for (var d = 0; d < o.length; d++)
      h = t(this, h, o[d]);
    return v;
  }, e.prototype.reverse = function() {
    for (var n = this.head, r = this.tail, o = n; o !== null; o = o.prev) {
      var d = o.prev;
      o.prev = o.next, o.next = d;
    }
    return this.head = r, this.tail = n, this;
  };
  function t(n, r, o) {
    var d = r === n.head ? new p(o, null, r, n) : new p(o, r, r.next, n);
    return d.next === null && (n.tail = d), d.prev === null && (n.head = d), n.length++, d;
  }
  function s(n, r) {
    n.tail = new p(r, n.tail, null, n), n.head || (n.head = n.tail), n.length++;
  }
  function a(n, r) {
    n.head = new p(r, null, n.head, n), n.tail || (n.tail = n.head), n.length++;
  }
  function p(n, r, o, d) {
    if (!(this instanceof p))
      return new p(n, r, o, d);
    this.list = d, this.value = n, r ? (r.next = this, this.prev = r) : this.prev = null, o ? (o.prev = this, this.next = o) : this.next = null;
  }
  try {
    Pu()(e);
  } catch {
  }
  return kr;
}
var Dr, Da;
function qo() {
  if (Da) return Dr;
  Da = 1;
  const e = Ou(), t = Symbol("max"), s = Symbol("length"), a = Symbol("lengthCalculator"), p = Symbol("allowStale"), n = Symbol("maxAge"), r = Symbol("dispose"), o = Symbol("noDisposeOnSet"), d = Symbol("lruList"), h = Symbol("cache"), v = Symbol("updateAgeOnGet"), w = () => 1;
  class f {
    constructor(i) {
      if (typeof i == "number" && (i = { max: i }), i || (i = {}), i.max && (typeof i.max != "number" || i.max < 0))
        throw new TypeError("max must be a non-negative number");
      this[t] = i.max || 1 / 0;
      const c = i.length || w;
      if (this[a] = typeof c != "function" ? w : c, this[p] = i.stale || !1, i.maxAge && typeof i.maxAge != "number")
        throw new TypeError("maxAge must be a number");
      this[n] = i.maxAge || 0, this[r] = i.dispose, this[o] = i.noDisposeOnSet || !1, this[v] = i.updateAgeOnGet || !1, this.reset();
    }
    // resize the cache when the max changes.
    set max(i) {
      if (typeof i != "number" || i < 0)
        throw new TypeError("max must be a non-negative number");
      this[t] = i || 1 / 0, S(this);
    }
    get max() {
      return this[t];
    }
    set allowStale(i) {
      this[p] = !!i;
    }
    get allowStale() {
      return this[p];
    }
    set maxAge(i) {
      if (typeof i != "number")
        throw new TypeError("maxAge must be a non-negative number");
      this[n] = i, S(this);
    }
    get maxAge() {
      return this[n];
    }
    // resize the cache when the lengthCalculator changes.
    set lengthCalculator(i) {
      typeof i != "function" && (i = w), i !== this[a] && (this[a] = i, this[s] = 0, this[d].forEach((c) => {
        c.length = this[a](c.value, c.key), this[s] += c.length;
      })), S(this);
    }
    get lengthCalculator() {
      return this[a];
    }
    get length() {
      return this[s];
    }
    get itemCount() {
      return this[d].length;
    }
    rforEach(i, c) {
      c = c || this;
      for (let y = this[d].tail; y !== null; ) {
        const x = y.prev;
        m(this, i, y, c), y = x;
      }
    }
    forEach(i, c) {
      c = c || this;
      for (let y = this[d].head; y !== null; ) {
        const x = y.next;
        m(this, i, y, c), y = x;
      }
    }
    keys() {
      return this[d].toArray().map((i) => i.key);
    }
    values() {
      return this[d].toArray().map((i) => i.value);
    }
    reset() {
      this[r] && this[d] && this[d].length && this[d].forEach((i) => this[r](i.key, i.value)), this[h] = /* @__PURE__ */ new Map(), this[d] = new e(), this[s] = 0;
    }
    dump() {
      return this[d].map((i) => b(this, i) ? !1 : {
        k: i.key,
        v: i.value,
        e: i.now + (i.maxAge || 0)
      }).toArray().filter((i) => i);
    }
    dumpLru() {
      return this[d];
    }
    set(i, c, y) {
      if (y = y || this[n], y && typeof y != "number")
        throw new TypeError("maxAge must be a number");
      const x = y ? Date.now() : 0, $ = this[a](c, i);
      if (this[h].has(i)) {
        if ($ > this[t])
          return g(this, this[h].get(i)), !1;
        const k = this[h].get(i).value;
        return this[r] && (this[o] || this[r](i, k.value)), k.now = x, k.maxAge = y, k.value = c, this[s] += $ - k.length, k.length = $, this.get(i), S(this), !0;
      }
      const j = new _(i, c, $, x, y);
      return j.length > this[t] ? (this[r] && this[r](i, c), !1) : (this[s] += j.length, this[d].unshift(j), this[h].set(i, this[d].head), S(this), !0);
    }
    has(i) {
      if (!this[h].has(i)) return !1;
      const c = this[h].get(i).value;
      return !b(this, c);
    }
    get(i) {
      return u(this, i, !0);
    }
    peek(i) {
      return u(this, i, !1);
    }
    pop() {
      const i = this[d].tail;
      return i ? (g(this, i), i.value) : null;
    }
    del(i) {
      g(this, this[h].get(i));
    }
    load(i) {
      this.reset();
      const c = Date.now();
      for (let y = i.length - 1; y >= 0; y--) {
        const x = i[y], $ = x.e || 0;
        if ($ === 0)
          this.set(x.k, x.v);
        else {
          const j = $ - c;
          j > 0 && this.set(x.k, x.v, j);
        }
      }
    }
    prune() {
      this[h].forEach((i, c) => u(this, c, !1));
    }
  }
  const u = (l, i, c) => {
    const y = l[h].get(i);
    if (y) {
      const x = y.value;
      if (b(l, x)) {
        if (g(l, y), !l[p])
          return;
      } else
        c && (l[v] && (y.value.now = Date.now()), l[d].unshiftNode(y));
      return x.value;
    }
  }, b = (l, i) => {
    if (!i || !i.maxAge && !l[n])
      return !1;
    const c = Date.now() - i.now;
    return i.maxAge ? c > i.maxAge : l[n] && c > l[n];
  }, S = (l) => {
    if (l[s] > l[t])
      for (let i = l[d].tail; l[s] > l[t] && i !== null; ) {
        const c = i.prev;
        g(l, i), i = c;
      }
  }, g = (l, i) => {
    if (i) {
      const c = i.value;
      l[r] && l[r](c.key, c.value), l[s] -= c.length, l[h].delete(c.key), l[d].removeNode(i);
    }
  };
  class _ {
    constructor(i, c, y, x, $) {
      this.key = i, this.value = c, this.length = y, this.now = x, this.maxAge = $ || 0;
    }
  }
  const m = (l, i, c, y) => {
    let x = c.value;
    b(l, x) && (g(l, c), l[p] || (x = void 0)), x && i.call(y, x.value, x.key, l);
  };
  return Dr = f, Dr;
}
var Mr, Ma;
function qu() {
  if (Ma) return Mr;
  Ma = 1;
  const e = qo(), t = 10;
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
    setProcessed(a, p) {
      this.cache.set(a, p);
    }
  }, Mr;
}
var Lr, La;
function Tu() {
  if (La) return Lr;
  La = 1;
  const {
    isArray: e,
    isObject: t,
    isString: s
  } = ye(), {
    asArray: a
  } = _e(), { prependBase: p } = Je(), n = Se(), r = qu(), o = 10;
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
      context: f,
      documentLoader: u,
      base: b,
      cycles: S = /* @__PURE__ */ new Set()
    }) {
      f && t(f) && f["@context"] && (f = f["@context"]), f = a(f);
      const g = [];
      for (const _ of f) {
        if (s(_)) {
          let i = this._get(_);
          i || (i = await this._resolveRemoteContext(
            { activeCtx: w, url: _, documentLoader: u, base: b, cycles: S }
          )), e(i) ? g.push(...i) : g.push(i);
          continue;
        }
        if (_ === null) {
          g.push(new r({ document: null }));
          continue;
        }
        t(_) || d(f);
        const m = JSON.stringify(_);
        let l = this._get(m);
        l || (l = new r({ document: _ }), this._cacheResolvedContext({ key: m, resolved: l, tag: "static" })), g.push(l);
      }
      return g;
    }
    _get(w) {
      let f = this.perOpCache.get(w);
      if (!f) {
        const u = this.sharedCache.get(w);
        u && (f = u.get("static"), f && this.perOpCache.set(w, f));
      }
      return f;
    }
    _cacheResolvedContext({ key: w, resolved: f, tag: u }) {
      if (this.perOpCache.set(w, f), u !== void 0) {
        let b = this.sharedCache.get(w);
        b || (b = /* @__PURE__ */ new Map(), this.sharedCache.set(w, b)), b.set(u, f);
      }
      return f;
    }
    async _resolveRemoteContext({ activeCtx: w, url: f, documentLoader: u, base: b, cycles: S }) {
      f = p(b, f);
      const { context: g, remoteDoc: _ } = await this._fetchContext(
        { activeCtx: w, url: f, documentLoader: u, cycles: S }
      );
      b = _.documentUrl || f, h({ context: g, base: b });
      const m = await this.resolve(
        { activeCtx: w, context: g, documentLoader: u, base: b, cycles: S }
      );
      return this._cacheResolvedContext({ key: f, resolved: m, tag: _.tag }), m;
    }
    async _fetchContext({ activeCtx: w, url: f, documentLoader: u, cycles: b }) {
      if (b.size > o)
        throw new n(
          "Maximum number of @context URLs exceeded.",
          "jsonld.ContextUrlError",
          {
            code: w.processingMode === "json-ld-1.0" ? "loading remote context failed" : "context overflow",
            max: o
          }
        );
      if (b.has(f))
        throw new n(
          "Cyclical @context URLs detected.",
          "jsonld.ContextUrlError",
          {
            code: w.processingMode === "json-ld-1.0" ? "recursive context inclusion" : "context overflow",
            url: f
          }
        );
      b.add(f);
      let S, g;
      try {
        g = await u(f), S = g.document || null, s(S) && (S = JSON.parse(S));
      } catch (_) {
        throw new n(
          `Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context. URL: "${f}".`,
          "jsonld.InvalidUrl",
          { code: "loading remote context failed", url: f, cause: _ }
        );
      }
      if (!t(S))
        throw new n(
          `Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object. URL: "${f}".`,
          "jsonld.InvalidUrl",
          { code: "invalid remote context", url: f }
        );
      return "@context" in S ? S = { "@context": S["@context"] } : S = { "@context": {} }, g.contextUrl && (e(S["@context"]) || (S["@context"] = [S["@context"]]), S["@context"].push(g.contextUrl)), { context: S, remoteDoc: g };
    }
  };
  function d(v) {
    throw new n(
      "Invalid JSON-LD syntax; @context must be an object.",
      "jsonld.SyntaxError",
      {
        code: "invalid local context",
        context: v
      }
    );
  }
  function h({ context: v, base: w }) {
    if (!v)
      return;
    const f = v["@context"];
    if (s(f)) {
      v["@context"] = p(w, f);
      return;
    }
    if (e(f)) {
      for (let u = 0; u < f.length; ++u) {
        const b = f[u];
        if (s(b)) {
          f[u] = p(w, b);
          continue;
        }
        t(b) && h({ context: { "@context": b }, base: w });
      }
      return;
    }
    if (t(f))
      for (const u in f)
        h({ context: f[u], base: w });
  }
  return Lr;
}
var Cr, Ca;
function ku() {
  return Ca || (Ca = 1, Cr = gs().NQuads), Cr;
}
var Ur, Ua;
function Et() {
  if (Ua) return Ur;
  Ua = 1;
  const e = Se(), {
    isArray: t
  } = ye(), {
    asArray: s
  } = _e(), a = {};
  Ur = a, a.defaultEventHandler = null, a.setupEventHandler = ({ options: r = {} }) => {
    const o = [].concat(
      r.safe ? a.safeEventHandler : [],
      r.eventHandler ? s(r.eventHandler) : [],
      a.defaultEventHandler ? a.defaultEventHandler : []
    );
    return o.length === 0 ? null : o;
  }, a.handleEvent = ({
    event: r,
    options: o
  }) => {
    p({ event: r, handlers: o.eventHandler });
  };
  function p({ event: r, handlers: o }) {
    let d = !0;
    for (let h = 0; d && h < o.length; ++h) {
      d = !1;
      const v = o[h];
      if (t(v))
        d = p({ event: r, handlers: v });
      else if (typeof v == "function")
        v({ event: r, next: () => {
          d = !0;
        } });
      else if (typeof v == "object")
        r.code in v ? v[r.code]({ event: r, next: () => {
          d = !0;
        } }) : d = !0;
      else
        throw new e(
          "Invalid event handler.",
          "jsonld.InvalidEventHandler",
          { event: r }
        );
    }
    return d;
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
  return a.safeEventHandler = function({ event: o, next: d }) {
    if (o.level === "warning" && n.has(o.code))
      throw new e(
        "Safe mode validation error.",
        "jsonld.ValidationError",
        { event: o }
      );
    d();
  }, a.logEventHandler = function({ event: o, next: d }) {
    console.log(`EVENT: ${o.message}`, { event: o }), d();
  }, a.logWarningEventHandler = function({ event: o, next: d }) {
    o.level === "warning" && console.warn(`WARNING: ${o.message}`, { event: o }), d();
  }, a.unhandledEventHandler = function({ event: o }) {
    throw new e(
      "No handler for event.",
      "jsonld.UnhandledEvent",
      { event: o }
    );
  }, a.setDefaultEventHandler = function({ eventHandler: r } = {}) {
    a.defaultEventHandler = r ? s(r) : null;
  }, Ur;
}
var Vr, Va;
function Qe() {
  if (Va) return Vr;
  Va = 1;
  const e = _e(), t = Se(), {
    isArray: s,
    isObject: a,
    isString: p,
    isUndefined: n
  } = ye(), {
    isAbsolute: r,
    isRelative: o,
    prependBase: d
  } = Je(), {
    handleEvent: h
  } = Et(), {
    REGEX_BCP47: v,
    REGEX_KEYWORD: w,
    asArray: f,
    compareShortestLeast: u
  } = _e(), b = /* @__PURE__ */ new Map(), S = 1e4, g = {};
  Vr = g, g.process = async ({
    activeCtx: l,
    localCtx: i,
    options: c,
    propagate: y = !0,
    overrideProtected: x = !1,
    cycles: $ = /* @__PURE__ */ new Set()
  }) => {
    if (a(i) && "@context" in i && s(i["@context"]) && (i = i["@context"]), f(i).length === 0)
      return l;
    const N = [], k = [
      ({ event: B, next: P }) => {
        N.push(B), P();
      }
    ];
    c.eventHandler && k.push(c.eventHandler);
    const C = c;
    c = { ...c, eventHandler: k };
    const T = await c.contextResolver.resolve({
      activeCtx: l,
      context: i,
      documentLoader: c.documentLoader,
      base: c.base
    });
    a(T[0].document) && typeof T[0].document["@propagate"] == "boolean" && (y = T[0].document["@propagate"]);
    let O = l;
    !y && !O.previousContext && (O = O.clone(), O.previousContext = l);
    for (const B of T) {
      let { document: P } = B;
      if (l = O, P === null) {
        if (!x && Object.keys(l.protected).length !== 0)
          throw new t(
            "Tried to nullify a context with protected terms outside of a term definition.",
            "jsonld.SyntaxError",
            { code: "invalid context nullification" }
          );
        O = l = g.getInitialContext(c).clone();
        continue;
      }
      const H = B.getProcessed(l);
      if (H) {
        if (C.eventHandler)
          for (const G of H.events)
            h({ event: G, options: C });
        O = l = H.context;
        continue;
      }
      if (a(P) && "@context" in P && (P = P["@context"]), !a(P))
        throw new t(
          "Invalid JSON-LD syntax; @context must be an object.",
          "jsonld.SyntaxError",
          { code: "invalid local context", context: P }
        );
      O = O.clone();
      const F = /* @__PURE__ */ new Map();
      if ("@version" in P) {
        if (P["@version"] !== 1.1)
          throw new t(
            "Unsupported JSON-LD version: " + P["@version"],
            "jsonld.UnsupportedVersion",
            { code: "invalid @version value", context: P }
          );
        if (l.processingMode && l.processingMode === "json-ld-1.0")
          throw new t(
            "@version: " + P["@version"] + " not compatible with " + l.processingMode,
            "jsonld.ProcessingModeConflict",
            { code: "processing mode conflict", context: P }
          );
        O.processingMode = "json-ld-1.1", O["@version"] = P["@version"], F.set("@version", !0);
      }
      if (O.processingMode = O.processingMode || l.processingMode, "@base" in P) {
        let G = P["@base"];
        if (!(G === null || r(G))) if (o(G))
          G = d(O["@base"], G);
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.',
            "jsonld.SyntaxError",
            { code: "invalid base IRI", context: P }
          );
        O["@base"] = G, F.set("@base", !0);
      }
      if ("@vocab" in P) {
        const G = P["@vocab"];
        if (G === null)
          delete O["@vocab"];
        else if (p(G)) {
          if (!r(G) && g.processingMode(O, 1))
            throw new t(
              'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.',
              "jsonld.SyntaxError",
              { code: "invalid vocab mapping", context: P }
            );
          {
            const A = _(
              O,
              G,
              { vocab: !0, base: !0 },
              void 0,
              void 0,
              c
            );
            r(A) || c.eventHandler && h({
              event: {
                type: ["JsonLdEvent"],
                code: "relative @vocab reference",
                level: "warning",
                message: "Relative @vocab reference found.",
                details: {
                  vocab: A
                }
              },
              options: c
            }), O["@vocab"] = A;
          }
        } else throw new t(
          'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be a string or null.',
          "jsonld.SyntaxError",
          { code: "invalid vocab mapping", context: P }
        );
        F.set("@vocab", !0);
      }
      if ("@language" in P) {
        const G = P["@language"];
        if (G === null)
          delete O["@language"];
        else if (p(G))
          G.match(v) || c.eventHandler && h({
            event: {
              type: ["JsonLdEvent"],
              code: "invalid @language value",
              level: "warning",
              message: "@language value must be valid BCP47.",
              details: {
                language: G
              }
            },
            options: c
          }), O["@language"] = G.toLowerCase();
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@language" in a @context must be a string or null.',
            "jsonld.SyntaxError",
            { code: "invalid default language", context: P }
          );
        F.set("@language", !0);
      }
      if ("@direction" in P) {
        const G = P["@direction"];
        if (l.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @direction not compatible with " + l.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context member", context: P }
          );
        if (G === null)
          delete O["@direction"];
        else {
          if (G !== "ltr" && G !== "rtl")
            throw new t(
              'Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", context: P }
            );
          O["@direction"] = G;
        }
        F.set("@direction", !0);
      }
      if ("@propagate" in P) {
        const G = P["@propagate"];
        if (l.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @propagate not compatible with " + l.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: P }
          );
        if (typeof G != "boolean")
          throw new t(
            "Invalid JSON-LD syntax; @propagate value must be a boolean.",
            "jsonld.SyntaxError",
            { code: "invalid @propagate value", context: i }
          );
        F.set("@propagate", !0);
      }
      if ("@import" in P) {
        const G = P["@import"];
        if (l.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @import not compatible with " + l.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: P }
          );
        if (!p(G))
          throw new t(
            "Invalid JSON-LD syntax; @import must be a string.",
            "jsonld.SyntaxError",
            { code: "invalid @import value", context: i }
          );
        const A = await c.contextResolver.resolve({
          activeCtx: l,
          context: G,
          documentLoader: c.documentLoader,
          base: c.base
        });
        if (A.length !== 1)
          throw new t(
            "Invalid JSON-LD syntax; @import must reference a single context.",
            "jsonld.SyntaxError",
            { code: "invalid remote context", context: i }
          );
        const q = A[0].getProcessed(l);
        if (q)
          P = q;
        else {
          const U = A[0].document;
          if ("@import" in U)
            throw new t(
              "Invalid JSON-LD syntax: imported context must not include @import.",
              "jsonld.SyntaxError",
              { code: "invalid context entry", context: i }
            );
          for (const D in U)
            P.hasOwnProperty(D) || (P[D] = U[D]);
          A[0].setProcessed(l, P);
        }
        F.set("@import", !0);
      }
      F.set("@protected", P["@protected"] || !1);
      for (const G in P)
        if (g.createTermDefinition({
          activeCtx: O,
          localCtx: P,
          term: G,
          defined: F,
          options: c,
          overrideProtected: x
        }), a(P[G]) && "@context" in P[G]) {
          const A = P[G]["@context"];
          let q = !0;
          if (p(A)) {
            const U = d(c.base, A);
            $.has(U) ? q = !1 : $.add(U);
          }
          if (q)
            try {
              await g.process({
                activeCtx: O.clone(),
                localCtx: P[G]["@context"],
                overrideProtected: !0,
                options: c,
                cycles: $
              });
            } catch {
              throw new t(
                "Invalid JSON-LD syntax; invalid scoped context.",
                "jsonld.SyntaxError",
                {
                  code: "invalid scoped context",
                  context: P[G]["@context"],
                  term: G
                }
              );
            }
        }
      B.setProcessed(l, {
        context: O,
        events: N
      });
    }
    return O;
  }, g.createTermDefinition = ({
    activeCtx: l,
    localCtx: i,
    term: c,
    defined: y,
    options: x,
    overrideProtected: $ = !1
  }) => {
    if (y.has(c)) {
      if (y.get(c))
        return;
      throw new t(
        "Cyclical context definition detected.",
        "jsonld.CyclicalContext",
        { code: "cyclic IRI mapping", context: i, term: c }
      );
    }
    y.set(c, !1);
    let j;
    if (i.hasOwnProperty(c) && (j = i[c]), c === "@type" && a(j) && (j["@container"] || "@set") === "@set" && g.processingMode(l, 1.1)) {
      const P = ["@container", "@id", "@protected"], H = Object.keys(j);
      if (H.length === 0 || H.some((F) => !P.includes(F)))
        throw new t(
          "Invalid JSON-LD syntax; keywords cannot be overridden.",
          "jsonld.SyntaxError",
          { code: "keyword redefinition", context: i, term: c }
        );
    } else {
      if (g.isKeyword(c))
        throw new t(
          "Invalid JSON-LD syntax; keywords cannot be overridden.",
          "jsonld.SyntaxError",
          { code: "keyword redefinition", context: i, term: c }
        );
      if (c.match(w)) {
        x.eventHandler && h({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved term",
            level: "warning",
            message: 'Terms beginning with "@" are reserved for future use and dropped.',
            details: {
              term: c
            }
          },
          options: x
        });
        return;
      } else if (c === "")
        throw new t(
          "Invalid JSON-LD syntax; a term cannot be an empty string.",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: i }
        );
    }
    const N = l.mappings.get(c);
    l.mappings.has(c) && l.mappings.delete(c);
    let k = !1;
    if ((p(j) || j === null) && (k = !0, j = { "@id": j }), !a(j))
      throw new t(
        "Invalid JSON-LD syntax; @context term values must be strings or objects.",
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: i }
      );
    const C = {};
    l.mappings.set(c, C), C.reverse = !1;
    const T = ["@container", "@id", "@language", "@reverse", "@type"];
    g.processingMode(l, 1.1) && T.push(
      "@context",
      "@direction",
      "@index",
      "@nest",
      "@prefix",
      "@protected"
    );
    for (const P in j)
      if (!T.includes(P))
        throw new t(
          "Invalid JSON-LD syntax; a term definition must not contain " + P,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: i }
        );
    const O = c.indexOf(":");
    if (C._termHasColon = O > 0, "@reverse" in j) {
      if ("@id" in j)
        throw new t(
          "Invalid JSON-LD syntax; a @reverse term definition must not contain @id.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: i }
        );
      if ("@nest" in j)
        throw new t(
          "Invalid JSON-LD syntax; a @reverse term definition must not contain @nest.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: i }
        );
      const P = j["@reverse"];
      if (!p(P))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: i }
        );
      if (P.match(w)) {
        x.eventHandler && h({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved @reverse value",
            level: "warning",
            message: '@reverse values beginning with "@" are reserved for future use and dropped.',
            details: {
              reverse: P
            }
          },
          options: x
        }), N ? l.mappings.set(c, N) : l.mappings.delete(c);
        return;
      }
      const H = _(
        l,
        P,
        { vocab: !0, base: !1 },
        i,
        y,
        x
      );
      if (!r(H))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: i }
        );
      C["@id"] = H, C.reverse = !0;
    } else if ("@id" in j) {
      let P = j["@id"];
      if (P && !p(P))
        throw new t(
          "Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: i }
        );
      if (P === null)
        C["@id"] = null;
      else if (!g.isKeyword(P) && P.match(w)) {
        x.eventHandler && h({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved @id value",
            level: "warning",
            message: '@id values beginning with "@" are reserved for future use and dropped.',
            details: {
              id: P
            }
          },
          options: x
        }), N ? l.mappings.set(c, N) : l.mappings.delete(c);
        return;
      } else if (P !== c) {
        if (P = _(
          l,
          P,
          { vocab: !0, base: !1 },
          i,
          y,
          x
        ), !r(P) && !g.isKeyword(P))
          throw new t(
            "Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: i }
          );
        if (c.match(/(?::[^:])|\//)) {
          const H = new Map(y).set(c, !0);
          if (_(
            l,
            c,
            { vocab: !0, base: !1 },
            i,
            H,
            x
          ) !== P)
            throw new t(
              "Invalid JSON-LD syntax; term in form of IRI must expand to definition.",
              "jsonld.SyntaxError",
              { code: "invalid IRI mapping", context: i }
            );
        }
        C["@id"] = P, C._prefix = k && !C._termHasColon && P.match(/[:\/\?#\[\]@]$/) !== null;
      }
    }
    if (!("@id" in C))
      if (C._termHasColon) {
        const P = c.substr(0, O);
        if (i.hasOwnProperty(P) && g.createTermDefinition({
          activeCtx: l,
          localCtx: i,
          term: P,
          defined: y,
          options: x
        }), l.mappings.has(P)) {
          const H = c.substr(O + 1);
          C["@id"] = l.mappings.get(P)["@id"] + H;
        } else
          C["@id"] = c;
      } else if (c === "@type")
        C["@id"] = c;
      else {
        if (!("@vocab" in l))
          throw new t(
            "Invalid JSON-LD syntax; @context terms must define an @id.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: i, term: c }
          );
        C["@id"] = l["@vocab"] + c;
      }
    if ((j["@protected"] === !0 || y.get("@protected") === !0 && j["@protected"] !== !1) && (l.protected[c] = !0, C.protected = !0), y.set(c, !0), "@type" in j) {
      let P = j["@type"];
      if (!p(P))
        throw new t(
          "Invalid JSON-LD syntax; an @context @type value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid type mapping", context: i }
        );
      if (P === "@json" || P === "@none") {
        if (g.processingMode(l, 1))
          throw new t(
            `Invalid JSON-LD syntax; an @context @type value must not be "${P}" in JSON-LD 1.0 mode.`,
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: i }
          );
      } else if (P !== "@id" && P !== "@vocab") {
        if (P = _(
          l,
          P,
          { vocab: !0, base: !1 },
          i,
          y,
          x
        ), !r(P))
          throw new t(
            "Invalid JSON-LD syntax; an @context @type value must be an absolute IRI.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: i }
          );
        if (P.indexOf("_:") === 0)
          throw new t(
            "Invalid JSON-LD syntax; an @context @type value must be an IRI, not a blank node identifier.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: i }
          );
      }
      C["@type"] = P;
    }
    if ("@container" in j) {
      const P = p(j["@container"]) ? [j["@container"]] : j["@container"] || [], H = ["@list", "@set", "@index", "@language"];
      let F = !0;
      const G = P.includes("@set");
      if (g.processingMode(l, 1.1)) {
        if (H.push("@graph", "@id", "@type"), P.includes("@list")) {
          if (P.length !== 1)
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @list must have no other values",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: i }
            );
        } else if (P.includes("@graph")) {
          if (P.some((A) => A !== "@graph" && A !== "@id" && A !== "@index" && A !== "@set"))
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: i }
            );
        } else
          F &= P.length <= (G ? 2 : 1);
        if (P.includes("@type") && (C["@type"] = C["@type"] || "@id", !["@id", "@vocab"].includes(C["@type"])))
          throw new t(
            "Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: i }
          );
      } else
        F &= !s(j["@container"]), F &= P.length <= 1;
      if (F &= P.every((A) => H.includes(A)), F &= !(G && P.includes("@list")), !F)
        throw new t(
          "Invalid JSON-LD syntax; @context @container value must be one of the following: " + H.join(", "),
          "jsonld.SyntaxError",
          { code: "invalid container mapping", context: i }
        );
      if (C.reverse && !P.every((A) => ["@index", "@set"].includes(A)))
        throw new t(
          "Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: i }
        );
      C["@container"] = P;
    }
    if ("@index" in j) {
      if (!("@container" in j) || !C["@container"].includes("@index"))
        throw new t(
          `Invalid JSON-LD syntax; @index without @index in @container: "${j["@index"]}" on term "${c}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: i }
        );
      if (!p(j["@index"]) || j["@index"].indexOf("@") === 0)
        throw new t(
          `Invalid JSON-LD syntax; @index must expand to an IRI: "${j["@index"]}" on term "${c}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: i }
        );
      C["@index"] = j["@index"];
    }
    if ("@context" in j && (C["@context"] = j["@context"]), "@language" in j && !("@type" in j)) {
      let P = j["@language"];
      if (P !== null && !p(P))
        throw new t(
          "Invalid JSON-LD syntax; @context @language value must be a string or null.",
          "jsonld.SyntaxError",
          { code: "invalid language mapping", context: i }
        );
      P !== null && (P = P.toLowerCase()), C["@language"] = P;
    }
    if ("@prefix" in j) {
      if (c.match(/:|\//))
        throw new t(
          "Invalid JSON-LD syntax; @context @prefix used on a compact IRI term",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: i }
        );
      if (g.isKeyword(C["@id"]))
        throw new t(
          "Invalid JSON-LD syntax; keywords may not be used as prefixes",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: i }
        );
      if (typeof j["@prefix"] == "boolean")
        C._prefix = j["@prefix"] === !0;
      else
        throw new t(
          "Invalid JSON-LD syntax; @context value for @prefix must be boolean",
          "jsonld.SyntaxError",
          { code: "invalid @prefix value", context: i }
        );
    }
    if ("@direction" in j) {
      const P = j["@direction"];
      if (P !== null && P !== "ltr" && P !== "rtl")
        throw new t(
          'Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".',
          "jsonld.SyntaxError",
          { code: "invalid base direction", context: i }
        );
      C["@direction"] = P;
    }
    if ("@nest" in j) {
      const P = j["@nest"];
      if (!p(P) || P !== "@nest" && P.indexOf("@") === 0)
        throw new t(
          "Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.",
          "jsonld.SyntaxError",
          { code: "invalid @nest value", context: i }
        );
      C["@nest"] = P;
    }
    // disallow aliasing @context and @preserve
    const B = C["@id"];
    if (B === "@context" || B === "@preserve")
      throw new t(
        "Invalid JSON-LD syntax; @context and @preserve cannot be aliased.",
        "jsonld.SyntaxError",
        { code: "invalid keyword alias", context: i }
      );
    if (N && N.protected && !$ && (l.protected[c] = !0, C.protected = !0, !m(N, C)))
      throw new t(
        "Invalid JSON-LD syntax; tried to redefine a protected term.",
        "jsonld.SyntaxError",
        { code: "protected term redefinition", context: i, term: c }
      );
  }, g.expandIri = (l, i, c, y) => _(
    l,
    i,
    c,
    void 0,
    void 0,
    y
  );
  function _(l, i, c, y, x, $) {
    if (i === null || !p(i) || g.isKeyword(i))
      return i;
    if (i.match(w))
      return null;
    if (y && y.hasOwnProperty(i) && x.get(i) !== !0 && g.createTermDefinition({
      activeCtx: l,
      localCtx: y,
      term: i,
      defined: x,
      options: $
    }), c = c || {}, c.vocab) {
      const N = l.mappings.get(i);
      if (N === null)
        return null;
      if (a(N) && "@id" in N)
        return N["@id"];
    }
    const j = i.indexOf(":");
    if (j > 0) {
      const N = i.substr(0, j), k = i.substr(j + 1);
      if (N === "_" || k.indexOf("//") === 0)
        return i;
      y && y.hasOwnProperty(N) && g.createTermDefinition({
        activeCtx: l,
        localCtx: y,
        term: N,
        defined: x,
        options: $
      });
      const C = l.mappings.get(N);
      if (C && C._prefix)
        return C["@id"] + k;
      if (r(i))
        return i;
    }
    if (c.vocab && "@vocab" in l)
      i = l["@vocab"] + i;
    else if (c.base) {
      let N, k;
      "@base" in l ? l["@base"] ? (k = d($.base, l["@base"]), N = d(k, i)) : (k = l["@base"], N = i) : (k = $.base, N = d($.base, i)), i = N;
    }
    return i;
  }
  g.getInitialContext = (l) => {
    const i = JSON.stringify({ processingMode: l.processingMode }), c = b.get(i);
    if (c)
      return c;
    const y = {
      processingMode: l.processingMode,
      mappings: /* @__PURE__ */ new Map(),
      inverse: null,
      getInverse: x,
      clone: N,
      revertToPreviousContext: k,
      protected: {}
    };
    return b.size === S && b.clear(), b.set(i, y), y;
    function x() {
      const C = this;
      if (C.inverse)
        return C.inverse;
      const T = C.inverse = {}, O = C.fastCurieMap = {}, B = {}, P = (C["@language"] || "@none").toLowerCase(), H = C["@direction"], F = C.mappings, G = [...F.keys()].sort(u);
      for (const A of G) {
        const q = F.get(A);
        if (q === null)
          continue;
        let U = q["@container"] || "@none";
        if (U = [].concat(U).sort().join(""), q["@id"] === null)
          continue;
        const D = f(q["@id"]);
        for (const E of D) {
          let I = T[E];
          const R = g.isKeyword(E);
          if (I)
            !R && !q._termHasColon && B[E].push(A);
          else if (T[E] = I = {}, !R && !q._termHasColon) {
            B[E] = [A];
            const M = { iri: E, terms: B[E] };
            E[0] in O ? O[E[0]].push(M) : O[E[0]] = [M];
          }
          if (I[U] || (I[U] = {
            "@language": {},
            "@type": {},
            "@any": {}
          }), I = I[U], j(A, I["@any"], "@none"), q.reverse)
            j(A, I["@type"], "@reverse");
          else if (q["@type"] === "@none")
            j(A, I["@any"], "@none"), j(A, I["@language"], "@none"), j(A, I["@type"], "@none");
          else if ("@type" in q)
            j(A, I["@type"], q["@type"]);
          else if ("@language" in q && "@direction" in q) {
            const M = q["@language"], J = q["@direction"];
            M && J ? j(
              A,
              I["@language"],
              `${M}_${J}`.toLowerCase()
            ) : M ? j(A, I["@language"], M.toLowerCase()) : J ? j(A, I["@language"], `_${J}`) : j(A, I["@language"], "@null");
          } else "@language" in q ? j(
            A,
            I["@language"],
            (q["@language"] || "@null").toLowerCase()
          ) : "@direction" in q ? q["@direction"] ? j(
            A,
            I["@language"],
            `_${q["@direction"]}`
          ) : j(A, I["@language"], "@none") : H ? (j(A, I["@language"], `_${H}`), j(A, I["@language"], "@none"), j(A, I["@type"], "@none")) : (j(A, I["@language"], P), j(A, I["@language"], "@none"), j(A, I["@type"], "@none"));
        }
      }
      for (const A in O)
        $(O, A, 1);
      return T;
    }
    function $(C, T, O) {
      const B = C[T], P = C[T] = {};
      let H, F;
      for (const G of B)
        H = G.iri, O >= H.length ? F = "" : F = H[O], F in P ? P[F].push(G) : P[F] = [G];
      for (const G in P)
        G !== "" && $(P, G, O + 1);
    }
    function j(C, T, O) {
      T.hasOwnProperty(O) || (T[O] = C);
    }
    function N() {
      const C = {};
      return C.mappings = e.clone(this.mappings), C.clone = this.clone, C.inverse = null, C.getInverse = this.getInverse, C.protected = e.clone(this.protected), this.previousContext && (C.previousContext = this.previousContext.clone()), C.revertToPreviousContext = this.revertToPreviousContext, "@base" in this && (C["@base"] = this["@base"]), "@language" in this && (C["@language"] = this["@language"]), "@vocab" in this && (C["@vocab"] = this["@vocab"]), C;
    }
    function k() {
      return this.previousContext ? this.previousContext.clone() : this;
    }
  }, g.getContextValue = (l, i, c) => {
    if (i === null)
      return c === "@context" ? void 0 : null;
    if (l.mappings.has(i)) {
      const y = l.mappings.get(i);
      if (n(c))
        return y;
      if (y.hasOwnProperty(c))
        return y[c];
    }
    if (c === "@language" && c in l || c === "@direction" && c in l)
      return l[c];
    if (c !== "@context")
      return null;
  }, g.processingMode = (l, i) => i.toString() >= "1.1" ? !l.processingMode || l.processingMode >= "json-ld-" + i.toString() : l.processingMode === "json-ld-1.0", g.isKeyword = (l) => {
    if (!p(l) || l[0] !== "@")
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
  function m(l, i) {
    if (!(l && typeof l == "object") || !(i && typeof i == "object"))
      return l === i;
    const c = Array.isArray(l);
    if (c !== Array.isArray(i))
      return !1;
    if (c) {
      if (l.length !== i.length)
        return !1;
      for (let $ = 0; $ < l.length; ++$)
        if (!m(l[$], i[$]))
          return !1;
      return !0;
    }
    const y = Object.keys(l), x = Object.keys(i);
    if (y.length !== x.length)
      return !1;
    for (const $ in l) {
      let j = l[$], N = i[$];
      if ($ === "@container" && Array.isArray(j) && Array.isArray(N) && (j = j.slice().sort(), N = N.slice().sort()), !m(j, N))
        return !1;
    }
    return !0;
  }
  return Vr;
}
var zr, za;
function Du() {
  if (za) return zr;
  za = 1;
  const e = Se(), {
    isArray: t,
    isObject: s,
    isEmptyObject: a,
    isString: p,
    isUndefined: n
  } = ye(), {
    isList: r,
    isValue: o,
    isGraph: d,
    isSubject: h
  } = Ce(), {
    expandIri: v,
    getContextValue: w,
    isKeyword: f,
    process: u,
    processingMode: b
  } = Qe(), {
    isAbsolute: S
  } = Je(), {
    REGEX_BCP47: g,
    REGEX_KEYWORD: _,
    addValue: m,
    asArray: l,
    getValues: i,
    validateTypeValue: c
  } = _e(), {
    handleEvent: y
  } = Et(), x = {};
  zr = x, x.expand = async ({
    activeCtx: T,
    activeProperty: O = null,
    element: B,
    options: P = {},
    insideList: H = !1,
    insideIndex: F = !1,
    typeScopedContext: G = null
  }) => {
    if (B == null)
      return null;
    if (O === "@default" && (P = Object.assign({}, P, { isFrame: !1 })), !t(B) && !s(B))
      return !H && (O === null || v(
        T,
        O,
        { vocab: !0 },
        P
      ) === "@graph") ? (P.eventHandler && y({
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
        options: P
      }), null) : N({ activeCtx: T, activeProperty: O, value: B, options: P });
    if (t(B)) {
      let M = [];
      const J = w(
        T,
        O,
        "@container"
      ) || [];
      H = H || J.includes("@list");
      for (let W = 0; W < B.length; ++W) {
        let K = await x.expand({
          activeCtx: T,
          activeProperty: O,
          element: B[W],
          options: P,
          insideIndex: F,
          typeScopedContext: G
        });
        H && t(K) && (K = { "@list": K }), K !== null && (t(K) ? M = M.concat(K) : M.push(K));
      }
      return M;
    }
    const A = v(
      T,
      O,
      { vocab: !0 },
      P
    ), q = w(T, O, "@context");
    G = G || (T.previousContext ? T : null);
    let U = Object.keys(B).sort(), D = !F;
    if (D && G && U.length <= 2 && !U.includes("@context"))
      for (const M of U) {
        const J = v(
          G,
          M,
          { vocab: !0 },
          P
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
    D && (T = T.revertToPreviousContext()), n(q) || (T = await u({
      activeCtx: T,
      localCtx: q,
      propagate: !0,
      overrideProtected: !0,
      options: P
    })), "@context" in B && (T = await u(
      { activeCtx: T, localCtx: B["@context"], options: P }
    )), G = T;
    let E = null;
    for (const M of U)
      if (v(T, M, { vocab: !0 }, P) === "@type") {
        E = E || M;
        const W = B[M], K = Array.isArray(W) ? W.length > 1 ? W.slice().sort() : W : [W];
        for (const L of K) {
          const V = w(G, L, "@context");
          n(V) || (T = await u({
            activeCtx: T,
            localCtx: V,
            options: P,
            propagate: !1
          }));
        }
      }
    let I = {};
    await j({
      activeCtx: T,
      activeProperty: O,
      expandedActiveProperty: A,
      element: B,
      expandedParent: I,
      options: P,
      insideList: H,
      typeKey: E,
      typeScopedContext: G
    }), U = Object.keys(I);
    let R = U.length;
    if ("@value" in I) {
      if ("@type" in I && ("@language" in I || "@direction" in I))
        throw new e(
          'Invalid JSON-LD syntax; an element containing "@value" may not contain both "@type" and either "@language" or "@direction".',
          "jsonld.SyntaxError",
          { code: "invalid value object", element: I }
        );
      let M = R - 1;
      if ("@type" in I && (M -= 1), "@index" in I && (M -= 1), "@language" in I && (M -= 1), "@direction" in I && (M -= 1), M !== 0)
        throw new e(
          'Invalid JSON-LD syntax; an element containing "@value" may only have an "@index" property and either "@type" or either or both "@language" or "@direction".',
          "jsonld.SyntaxError",
          { code: "invalid value object", element: I }
        );
      const J = I["@value"] === null ? [] : l(I["@value"]), W = i(I, "@type");
      if (!(b(T, 1.1) && W.includes("@json") && W.length === 1)) if (J.length === 0)
        P.eventHandler && y({
          event: {
            type: ["JsonLdEvent"],
            code: "null @value value",
            level: "warning",
            message: "Dropping null @value value.",
            details: {
              value: I
            }
          },
          options: P
        }), I = null;
      else {
        if (!J.every((K) => p(K) || a(K)) && "@language" in I)
          throw new e(
            "Invalid JSON-LD syntax; only strings may be language-tagged.",
            "jsonld.SyntaxError",
            { code: "invalid language-tagged value", element: I }
          );
        if (!W.every((K) => S(K) && !(p(K) && K.indexOf("_:") === 0) || a(K)))
          throw new e(
            'Invalid JSON-LD syntax; an element containing "@value" and "@type" must have an absolute IRI for the value of "@type".',
            "jsonld.SyntaxError",
            { code: "invalid typed value", element: I }
          );
      }
    } else if ("@type" in I && !t(I["@type"]))
      I["@type"] = [I["@type"]];
    else if ("@set" in I || "@list" in I) {
      if (R > 1 && !(R === 2 && "@index" in I))
        throw new e(
          'Invalid JSON-LD syntax; if an element has the property "@set" or "@list", then it can have at most one other property that is "@index".',
          "jsonld.SyntaxError",
          { code: "invalid set or list object", element: I }
        );
      "@set" in I && (I = I["@set"], U = Object.keys(I), R = U.length);
    } else R === 1 && "@language" in I && (P.eventHandler && y({
      event: {
        type: ["JsonLdEvent"],
        code: "object with only @language",
        level: "warning",
        message: "Dropping object with only @language.",
        details: {
          value: I
        }
      },
      options: P
    }), I = null);
    return s(I) && !P.keepFreeFloatingNodes && !H && (O === null || A === "@graph" || (w(T, O, "@container") || []).includes("@graph")) && (I = $({ value: I, count: R, options: P })), I;
  };
  function $({
    value: T,
    count: O,
    options: B
  }) {
    if (O === 0 || "@value" in T || "@list" in T || O === 1 && "@id" in T) {
      if (B.eventHandler) {
        let P, H;
        O === 0 ? (P = "empty object", H = "Dropping empty object.") : "@value" in T ? (P = "object with only @value", H = "Dropping object with only @value.") : "@list" in T ? (P = "object with only @list", H = "Dropping object with only @list.") : O === 1 && "@id" in T && (P = "object with only @id", H = "Dropping object with only @id."), y({
          event: {
            type: ["JsonLdEvent"],
            code: P,
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
    activeProperty: O,
    expandedActiveProperty: B,
    element: P,
    expandedParent: H,
    options: F = {},
    insideList: G,
    typeKey: A,
    typeScopedContext: q
  }) {
    const U = Object.keys(P).sort(), D = [];
    let E;
    const I = P[A] && v(
      T,
      t(P[A]) ? P[A][0] : P[A],
      { vocab: !0 },
      {
        ...F,
        typeExpansion: !0
      }
    ) === "@json";
    for (const R of U) {
      let M = P[R], J;
      if (R === "@context")
        continue;
      const W = v(T, R, { vocab: !0 }, F);
      if (W === null || !(S(W) || f(W))) {
        F.eventHandler && y({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid property",
            level: "warning",
            message: "Dropping property that did not expand into an absolute IRI or keyword.",
            details: {
              property: R,
              expandedProperty: W
            }
          },
          options: F
        });
        continue;
      }
      if (f(W)) {
        if (B === "@reverse")
          throw new e(
            "Invalid JSON-LD syntax; a keyword cannot be used as a @reverse property.",
            "jsonld.SyntaxError",
            { code: "invalid reverse property map", value: M }
          );
        if (W in H && W !== "@included" && W !== "@type")
          throw new e(
            "Invalid JSON-LD syntax; colliding keywords detected.",
            "jsonld.SyntaxError",
            { code: "colliding keywords", keyword: W }
          );
      }
      if (W === "@id") {
        if (!p(M)) {
          if (!F.isFrame)
            throw new e(
              'Invalid JSON-LD syntax; "@id" value must a string.',
              "jsonld.SyntaxError",
              { code: "invalid @id value", value: M }
            );
          if (s(M)) {
            if (!a(M))
              throw new e(
                'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
                "jsonld.SyntaxError",
                { code: "invalid @id value", value: M }
              );
          } else if (t(M)) {
            if (!M.every((z) => p(z)))
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
        m(
          H,
          "@id",
          l(M).map((z) => {
            if (p(z)) {
              const Z = v(T, z, { base: !0 }, F);
              return F.eventHandler && (Z === null ? y(z === null ? {
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
              }) : S(Z) || y({
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
      if (W === "@type") {
        s(M) && (M = Object.fromEntries(Object.entries(M).map(([z, Z]) => [
          v(q, z, { vocab: !0 }),
          l(Z).map(
            (Q) => v(
              q,
              Q,
              { base: !0, vocab: !0 },
              { ...F, typeExpansion: !0 }
            )
          )
        ]))), c(M, F.isFrame), m(
          H,
          "@type",
          l(M).map((z) => {
            if (p(z)) {
              const Z = v(
                q,
                z,
                { base: !0, vocab: !0 },
                { ...F, typeExpansion: !0 }
              );
              return Z !== "@json" && !S(Z) && F.eventHandler && y({
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
      if (W === "@included" && b(T, 1.1)) {
        const z = l(await x.expand({
          activeCtx: T,
          activeProperty: O,
          element: M,
          options: F
        }));
        if (!z.every((Z) => h(Z)))
          throw new e(
            "Invalid JSON-LD syntax; values of @included must expand to node objects.",
            "jsonld.SyntaxError",
            { code: "invalid @included value", value: M }
          );
        m(
          H,
          "@included",
          z,
          { propertyIsArray: !0 }
        );
        continue;
      }
      if (W === "@graph" && !(s(M) || t(M)))
        throw new e(
          'Invalid JSON-LD syntax; "@graph" value must not be an object or an array.',
          "jsonld.SyntaxError",
          { code: "invalid @graph value", value: M }
        );
      if (W === "@value") {
        E = M, I && b(T, 1.1) ? H["@value"] = M : m(
          H,
          "@value",
          M,
          { propertyIsArray: F.isFrame }
        );
        continue;
      }
      if (W === "@language") {
        if (M === null)
          continue;
        if (!p(M) && !F.isFrame)
          throw new e(
            'Invalid JSON-LD syntax; "@language" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid language-tagged string", value: M }
          );
        M = l(M).map((z) => p(z) ? z.toLowerCase() : z);
        for (const z of M)
          p(z) && !z.match(g) && F.eventHandler && y({
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
        m(
          H,
          "@language",
          M,
          { propertyIsArray: F.isFrame }
        );
        continue;
      }
      if (W === "@direction") {
        if (!p(M) && !F.isFrame)
          throw new e(
            'Invalid JSON-LD syntax; "@direction" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid base direction", value: M }
          );
        M = l(M);
        for (const z of M)
          if (p(z) && z !== "ltr" && z !== "rtl")
            throw new e(
              'Invalid JSON-LD syntax; "@direction" must be "ltr" or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", value: M }
            );
        m(
          H,
          "@direction",
          M,
          { propertyIsArray: F.isFrame }
        );
        continue;
      }
      if (W === "@index") {
        if (!p(M))
          throw new e(
            'Invalid JSON-LD syntax; "@index" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid @index value", value: M }
          );
        m(H, "@index", M);
        continue;
      }
      if (W === "@reverse") {
        if (!s(M))
          throw new e(
            'Invalid JSON-LD syntax; "@reverse" value must be an object.',
            "jsonld.SyntaxError",
            { code: "invalid @reverse value", value: M }
          );
        if (J = await x.expand({
          activeCtx: T,
          activeProperty: "@reverse",
          element: M,
          options: F
        }), "@reverse" in J)
          for (const Z in J["@reverse"])
            m(
              H,
              Z,
              J["@reverse"][Z],
              { propertyIsArray: !0 }
            );
        let z = H["@reverse"] || null;
        for (const Z in J) {
          if (Z === "@reverse")
            continue;
          z === null && (z = H["@reverse"] = {}), m(z, Z, [], { propertyIsArray: !0 });
          const Q = J[Z];
          for (let Y = 0; Y < Q.length; ++Y) {
            const re = Q[Y];
            if (o(re) || r(re))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: J }
              );
            m(z, Z, re, { propertyIsArray: !0 });
          }
        }
        continue;
      }
      if (W === "@nest") {
        D.push(R);
        continue;
      }
      let K = T;
      const L = w(T, R, "@context");
      n(L) || (K = await u({
        activeCtx: T,
        localCtx: L,
        propagate: !0,
        overrideProtected: !0,
        options: F
      }));
      const V = w(T, R, "@container") || [];
      if (V.includes("@language") && s(M)) {
        const z = w(K, R, "@direction");
        J = k(K, M, z, F);
      } else if (V.includes("@index") && s(M)) {
        const z = V.includes("@graph"), Z = w(K, R, "@index") || "@index", Q = Z !== "@index" && v(T, Z, { vocab: !0 }, F);
        J = await C({
          activeCtx: K,
          options: F,
          activeProperty: R,
          value: M,
          asGraph: z,
          indexKey: Z,
          propertyIndex: Q
        });
      } else if (V.includes("@id") && s(M)) {
        const z = V.includes("@graph");
        J = await C({
          activeCtx: K,
          options: F,
          activeProperty: R,
          value: M,
          asGraph: z,
          indexKey: "@id"
        });
      } else if (V.includes("@type") && s(M))
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
        const z = W === "@list";
        if (z || W === "@set") {
          let Z = O;
          z && B === "@graph" && (Z = null), J = await x.expand({
            activeCtx: K,
            activeProperty: Z,
            element: M,
            options: F,
            insideList: z
          });
        } else w(T, R, "@type") === "@json" ? J = {
          "@type": "@json",
          "@value": M
        } : J = await x.expand({
          activeCtx: K,
          activeProperty: R,
          element: M,
          options: F,
          insideList: !1
        });
      }
      if (!(J === null && W !== "@value")) {
        if (W !== "@list" && !r(J) && V.includes("@list") && (J = { "@list": l(J) }), V.includes("@graph") && !V.some((z) => z === "@id" || z === "@index")) {
          if (J = l(J), F.isFrame || (J = J.filter((z) => {
            const Z = Object.keys(z).length;
            return $({ value: z, count: Z, options: F }) !== null;
          })), J.length === 0)
            continue;
          J = J.map((z) => ({ "@graph": l(z) }));
        }
        if (K.mappings.has(R) && K.mappings.get(R).reverse) {
          const z = H["@reverse"] = H["@reverse"] || {};
          J = l(J);
          for (let Z = 0; Z < J.length; ++Z) {
            const Q = J[Z];
            if (o(Q) || r(Q))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: J }
              );
            m(z, W, Q, { propertyIsArray: !0 });
          }
          continue;
        }
        m(H, W, J, {
          propertyIsArray: !0
        });
      }
    }
    if ("@value" in H && !(H["@type"] === "@json" && b(T, 1.1))) {
      if ((s(E) || t(E)) && !F.isFrame)
        throw new e(
          'Invalid JSON-LD syntax; "@value" value must not be an object or an array.',
          "jsonld.SyntaxError",
          { code: "invalid value object value", value: E }
        );
    }
    for (const R of D) {
      const M = t(P[R]) ? P[R] : [P[R]];
      for (const J of M) {
        if (!s(J) || Object.keys(J).some((W) => v(T, W, { vocab: !0 }, F) === "@value"))
          throw new e(
            "Invalid JSON-LD syntax; nested value must be a node object.",
            "jsonld.SyntaxError",
            { code: "invalid @nest value", value: J }
          );
        await j({
          activeCtx: T,
          activeProperty: O,
          expandedActiveProperty: B,
          element: J,
          expandedParent: H,
          options: F,
          insideList: G,
          typeScopedContext: q,
          typeKey: A
        });
      }
    }
  }
  function N({ activeCtx: T, activeProperty: O, value: B, options: P }) {
    if (B == null)
      return null;
    const H = v(
      T,
      O,
      { vocab: !0 },
      P
    );
    if (H === "@id")
      return v(T, B, { base: !0 }, P);
    if (H === "@type")
      return v(
        T,
        B,
        { vocab: !0, base: !0 },
        { ...P, typeExpansion: !0 }
      );
    const F = w(T, O, "@type");
    if ((F === "@id" || H === "@graph") && p(B)) {
      const A = v(T, B, { base: !0 }, P);
      return A === null && B.match(_) && P.eventHandler && y({
        event: {
          type: ["JsonLdEvent"],
          code: "reserved @id value",
          level: "warning",
          message: "Reserved @id found.",
          details: {
            id: O
          }
        },
        options: P
      }), { "@id": A };
    }
    if (F === "@vocab" && p(B))
      return {
        "@id": v(T, B, { vocab: !0, base: !0 }, P)
      };
    if (f(H))
      return B;
    const G = {};
    if (F && !["@id", "@vocab", "@none"].includes(F))
      G["@type"] = F;
    else if (p(B)) {
      const A = w(T, O, "@language");
      A !== null && (G["@language"] = A);
      const q = w(T, O, "@direction");
      q !== null && (G["@direction"] = q);
    }
    return ["boolean", "number", "string"].includes(typeof B) || (B = B.toString()), G["@value"] = B, G;
  }
  function k(T, O, B, P) {
    const H = [], F = Object.keys(O).sort();
    for (const G of F) {
      const A = v(T, G, { vocab: !0 }, P);
      let q = O[G];
      t(q) || (q = [q]);
      for (const U of q) {
        if (U === null)
          continue;
        if (!p(U))
          throw new e(
            "Invalid JSON-LD syntax; language map values must be strings.",
            "jsonld.SyntaxError",
            { code: "invalid language map value", languageMap: O }
          );
        const D = { "@value": U };
        A !== "@none" && (G.match(g) || P.eventHandler && y({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: G
            }
          },
          options: P
        }), D["@language"] = G.toLowerCase()), B && (D["@direction"] = B), H.push(D);
      }
    }
    return H;
  }
  async function C({
    activeCtx: T,
    options: O,
    activeProperty: B,
    value: P,
    asGraph: H,
    indexKey: F,
    propertyIndex: G
  }) {
    const A = [], q = Object.keys(P).sort(), U = F === "@type";
    for (let D of q) {
      if (U) {
        const R = w(T, D, "@context");
        n(R) || (T = await u({
          activeCtx: T,
          localCtx: R,
          propagate: !1,
          options: O
        }));
      }
      let E = P[D];
      t(E) || (E = [E]), E = await x.expand({
        activeCtx: T,
        activeProperty: B,
        element: E,
        options: O,
        insideList: !1,
        insideIndex: !0
      });
      let I;
      G ? D === "@none" ? I = "@none" : I = N(
        { activeCtx: T, activeProperty: F, value: D, options: O }
      ) : I = v(T, D, { vocab: !0 }, O), F === "@id" ? D = v(T, D, { base: !0 }, O) : U && (D = I);
      for (let R of E) {
        if (H && !d(R) && (R = { "@graph": [R] }), F === "@type")
          I === "@none" || (R["@type"] ? R["@type"] = [D].concat(R["@type"]) : R["@type"] = [D]);
        else {
          if (o(R) && !["@language", "@type", "@index"].includes(F))
            throw new e(
              `Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${F}".`,
              "jsonld.SyntaxError",
              { code: "invalid value object", value: R }
            );
          G ? I !== "@none" && m(R, G, I, {
            propertyIsArray: !0,
            prependValue: !0
          }) : I !== "@none" && !(F in R) && (R[F] = D);
        }
        A.push(R);
      }
    }
    return A;
  }
  return zr;
}
var Fr, Fa;
function Gn() {
  if (Fa) return Fr;
  Fa = 1;
  const { isKeyword: e } = Qe(), t = Ce(), s = ye(), a = _e(), p = Se(), n = {};
  return Fr = n, n.createMergedNodeMap = (r, o) => {
    o = o || {};
    const d = o.issuer || new a.IdentifierIssuer("_:b"), h = { "@default": {} };
    return n.createNodeMap(r, h, "@default", d), n.mergeNodeMaps(h);
  }, n.createNodeMap = (r, o, d, h, v, w) => {
    if (s.isArray(r)) {
      for (const S of r)
        n.createNodeMap(S, o, d, h, void 0, w);
      return;
    }
    if (!s.isObject(r)) {
      w && w.push(r);
      return;
    }
    if (t.isValue(r)) {
      if ("@type" in r) {
        let S = r["@type"];
        S.indexOf("_:") === 0 && (r["@type"] = S = h.getId(S));
      }
      w && w.push(r);
      return;
    } else if (w && t.isList(r)) {
      const S = [];
      n.createNodeMap(r["@list"], o, d, h, v, S), w.push({ "@list": S });
      return;
    }
    if ("@type" in r) {
      const S = r["@type"];
      for (const g of S)
        g.indexOf("_:") === 0 && h.getId(g);
    }
    s.isUndefined(v) && (v = t.isBlankNode(r) ? h.getId(r["@id"]) : r["@id"]), w && w.push({ "@id": v });
    const f = o[d], u = f[v] = f[v] || {};
    u["@id"] = v;
    const b = Object.keys(r).sort();
    for (let S of b) {
      if (S === "@id")
        continue;
      if (S === "@reverse") {
        const _ = { "@id": v }, m = r["@reverse"];
        for (const l in m) {
          const i = m[l];
          for (const c of i) {
            let y = c["@id"];
            t.isBlankNode(c) && (y = h.getId(y)), n.createNodeMap(c, o, d, h, y), a.addValue(
              f[y],
              l,
              _,
              { propertyIsArray: !0, allowDuplicate: !1 }
            );
          }
        }
        continue;
      }
      if (S === "@graph") {
        v in o || (o[v] = {}), n.createNodeMap(r[S], o, v, h);
        continue;
      }
      if (S === "@included") {
        n.createNodeMap(r[S], o, d, h);
        continue;
      }
      if (S !== "@type" && e(S)) {
        if (S === "@index" && S in u && (r[S] !== u[S] || r[S]["@id"] !== u[S]["@id"]))
          throw new p(
            "Invalid JSON-LD syntax; conflicting @index property detected.",
            "jsonld.SyntaxError",
            { code: "conflicting indexes", subject: u }
          );
        u[S] = r[S];
        continue;
      }
      const g = r[S];
      if (S.indexOf("_:") === 0 && (S = h.getId(S)), g.length === 0) {
        a.addValue(u, S, [], { propertyIsArray: !0 });
        continue;
      }
      for (let _ of g)
        if (S === "@type" && (_ = _.indexOf("_:") === 0 ? h.getId(_) : _), t.isSubject(_) || t.isSubjectReference(_)) {
          if ("@id" in _ && !_["@id"])
            continue;
          const m = t.isBlankNode(_) ? h.getId(_["@id"]) : _["@id"];
          a.addValue(
            u,
            S,
            { "@id": m },
            { propertyIsArray: !0, allowDuplicate: !1 }
          ), n.createNodeMap(_, o, d, h, m);
        } else if (t.isValue(_))
          a.addValue(
            u,
            S,
            _,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        else if (t.isList(_)) {
          const m = [];
          n.createNodeMap(_["@list"], o, d, h, v, m), _ = { "@list": m }, a.addValue(
            u,
            S,
            _,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        } else
          n.createNodeMap(_, o, d, h, v), a.addValue(
            u,
            S,
            _,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
    }
  }, n.mergeNodeMapGraphs = (r) => {
    const o = {};
    for (const d of Object.keys(r).sort())
      for (const h of Object.keys(r[d]).sort()) {
        const v = r[d][h];
        h in o || (o[h] = { "@id": h });
        const w = o[h];
        for (const f of Object.keys(v).sort())
          if (e(f) && f !== "@type")
            w[f] = a.clone(v[f]);
          else
            for (const u of v[f])
              a.addValue(
                w,
                f,
                a.clone(u),
                { propertyIsArray: !0, allowDuplicate: !1 }
              );
      }
    return o;
  }, n.mergeNodeMaps = (r) => {
    const o = r["@default"], d = Object.keys(r).sort();
    for (const h of d) {
      if (h === "@default")
        continue;
      const v = r[h];
      let w = o[h];
      w ? "@graph" in w || (w["@graph"] = []) : o[h] = w = {
        "@id": h,
        "@graph": []
      };
      const f = w["@graph"];
      for (const u of Object.keys(v).sort()) {
        const b = v[u];
        t.isSubjectReference(b) || f.push(b);
      }
    }
    return o;
  }, Fr;
}
var Hr, Ha;
function Mu() {
  if (Ha) return Hr;
  Ha = 1;
  const {
    isSubjectReference: e
  } = Ce(), {
    createMergedNodeMap: t
  } = Gn(), s = {};
  return Hr = s, s.flatten = (a) => {
    const p = t(a), n = [], r = Object.keys(p).sort();
    for (let o = 0; o < r.length; ++o) {
      const d = p[r[o]];
      e(d) || n.push(d);
    }
    return n;
  }, Hr;
}
var Jr, Ja;
function Lu() {
  if (Ja) return Jr;
  Ja = 1;
  const e = Se(), t = Ce(), s = ye(), {
    REGEX_BCP47: a,
    addValue: p
  } = _e(), {
    handleEvent: n
  } = Et(), {
    // RDF,
    RDF_LIST: r,
    RDF_FIRST: o,
    RDF_REST: d,
    RDF_NIL: h,
    RDF_TYPE: v,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: w,
    // RDF_OBJECT,
    // RDF_LANGSTRING,
    // XSD,
    XSD_BOOLEAN: f,
    XSD_DOUBLE: u,
    XSD_INTEGER: b,
    XSD_STRING: S
  } = vs(), g = {};
  Jr = g, g.fromRDF = async (m, l) => {
    const {
      useRdfType: i = !1,
      useNativeTypes: c = !1,
      rdfDirection: y = null
    } = l, x = {}, $ = { "@default": x }, j = {};
    if (y) {
      if (y === "compound-literal")
        throw new e(
          "Unsupported rdfDirection value.",
          "jsonld.InvalidRdfDirection",
          { value: y }
        );
      if (y !== "i18n-datatype")
        throw new e(
          "Unknown rdfDirection value.",
          "jsonld.InvalidRdfDirection",
          { value: y }
        );
    }
    for (const C of m) {
      const T = C.graph.termType === "DefaultGraph" ? "@default" : C.graph.value;
      T in $ || ($[T] = {}), T !== "@default" && !(T in x) && (x[T] = { "@id": T });
      const O = $[T], B = C.subject.value, P = C.predicate.value, H = C.object;
      B in O || (O[B] = { "@id": B });
      const F = O[B], G = H.termType.endsWith("Node");
      if (G && !(H.value in O) && (O[H.value] = { "@id": H.value }), P === v && !i && G) {
        p(F, "@type", H.value, { propertyIsArray: !0 });
        continue;
      }
      const A = _(H, c, y, l);
      if (p(F, P, A, { propertyIsArray: !0 }), G)
        if (H.value === h) {
          const q = O[H.value];
          "usages" in q || (q.usages = []), q.usages.push({
            node: F,
            property: P,
            value: A
          });
        } else H.value in j ? j[H.value] = !1 : j[H.value] = {
          node: F,
          property: P,
          value: A
        };
    }
    for (const C in $) {
      const T = $[C];
      if (!(h in T))
        continue;
      const O = T[h];
      if (O.usages) {
        for (let B of O.usages) {
          let P = B.node, H = B.property, F = B.value;
          const G = [], A = [];
          let q = Object.keys(P).length;
          for (; H === d && s.isObject(j[P["@id"]]) && s.isArray(P[o]) && P[o].length === 1 && s.isArray(P[d]) && P[d].length === 1 && (q === 3 || q === 4 && s.isArray(P["@type"]) && P["@type"].length === 1 && P["@type"][0] === r) && (G.push(P[o][0]), A.push(P["@id"]), B = j[P["@id"]], P = B.node, H = B.property, F = B.value, q = Object.keys(P).length, !!t.isBlankNode(P)); )
            ;
          delete F["@id"], F["@list"] = G.reverse();
          for (const U of A)
            delete T[U];
        }
        delete O.usages;
      }
    }
    const N = [], k = Object.keys(x).sort();
    for (const C of k) {
      const T = x[C];
      if (C in $) {
        const O = T["@graph"] = [], B = $[C], P = Object.keys(B).sort();
        for (const H of P) {
          const F = B[H];
          t.isSubjectReference(F) || O.push(F);
        }
      }
      t.isSubjectReference(T) || N.push(T);
    }
    return N;
  };
  function _(m, l, i, c) {
    if (m.termType.endsWith("Node"))
      return { "@id": m.value };
    const y = { "@value": m.value };
    if (m.language)
      m.language.match(a) || c.eventHandler && n({
        event: {
          type: ["JsonLdEvent"],
          code: "invalid @language value",
          level: "warning",
          message: "@language value must be valid BCP47.",
          details: {
            language: m.language
          }
        },
        options: c
      }), y["@language"] = m.language;
    else {
      let x = m.datatype.value;
      if (x || (x = S), x === w) {
        x = "@json";
        try {
          y["@value"] = JSON.parse(y["@value"]);
        } catch ($) {
          throw new e(
            "JSON literal could not be parsed.",
            "jsonld.InvalidJsonLiteral",
            { code: "invalid JSON literal", value: y["@value"], cause: $ }
          );
        }
      }
      if (l) {
        if (x === f)
          y["@value"] === "true" ? y["@value"] = !0 : y["@value"] === "false" && (y["@value"] = !1);
        else if (s.isNumeric(y["@value"]))
          if (x === b) {
            const $ = parseInt(y["@value"], 10);
            $.toFixed(0) === y["@value"] && (y["@value"] = $);
          } else x === u && (y["@value"] = parseFloat(y["@value"]));
        [f, b, u, S].includes(x) || (y["@type"] = x);
      } else if (i === "i18n-datatype" && x.startsWith("https://www.w3.org/ns/i18n#")) {
        const [, $, j] = x.split(/[#_]/);
        $.length > 0 && (y["@language"] = $, $.match(a) || c.eventHandler && n({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: $
            }
          },
          options: c
        })), y["@direction"] = j;
      } else x !== S && (y["@type"] = x);
    }
    return y;
  }
  return Jr;
}
var Br, Ba;
function Cu() {
  return Ba || (Ba = 1, Br = function e(t) {
    return t === null || typeof t != "object" || t.toJSON != null ? JSON.stringify(t) : Array.isArray(t) ? "[" + t.reduce((s, a, p) => {
      const n = p === 0 ? "" : ",", r = a === void 0 || typeof a == "symbol" ? null : a;
      return s + n + e(r);
    }, "") + "]" : "{" + Object.keys(t).sort().reduce((s, a, p) => {
      if (t[a] === void 0 || typeof t[a] == "symbol")
        return s;
      const n = s.length === 0 ? "" : ",";
      return s + n + e(a) + ":" + e(t[a]);
    }, "") + "}";
  }), Br;
}
var Gr, Ga;
function Uu() {
  if (Ga) return Gr;
  Ga = 1;
  const { createNodeMap: e } = Gn(), { isKeyword: t } = Qe(), s = Ce(), a = Cu(), p = Se(), n = ye(), r = _e(), {
    handleEvent: o
  } = Et(), {
    // RDF,
    // RDF_LIST,
    RDF_FIRST: d,
    RDF_REST: h,
    RDF_NIL: v,
    RDF_TYPE: w,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: f,
    // RDF_OBJECT,
    RDF_LANGSTRING: u,
    // XSD,
    XSD_BOOLEAN: b,
    XSD_DOUBLE: S,
    XSD_INTEGER: g,
    XSD_STRING: _
  } = vs(), {
    isAbsolute: m
  } = Je(), l = {};
  Gr = l, l.toRDF = (x, $) => {
    const j = new r.IdentifierIssuer("_:b"), N = { "@default": {} };
    e(x, N, "@default", j);
    const k = [], C = Object.keys(N).sort();
    for (const T of C) {
      let O;
      if (T === "@default")
        O = { termType: "DefaultGraph", value: "" };
      else if (m(T))
        T.startsWith("_:") ? O = { termType: "BlankNode" } : O = { termType: "NamedNode" }, O.value = T;
      else {
        $.eventHandler && o({
          event: {
            type: ["JsonLdEvent"],
            code: "relative graph reference",
            level: "warning",
            message: "Relative graph reference found.",
            details: {
              graph: T
            }
          },
          options: $
        });
        continue;
      }
      i(k, N[T], O, j, $);
    }
    return k;
  };
  function i(x, $, j, N, k) {
    const C = Object.keys($).sort();
    for (const T of C) {
      const O = $[T], B = Object.keys(O).sort();
      for (let P of B) {
        const H = O[P];
        if (P === "@type")
          P = w;
        else if (t(P))
          continue;
        for (const F of H) {
          const G = {
            termType: T.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: T
          };
          if (!m(T)) {
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
          const A = {
            termType: P.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: P
          };
          if (!m(P)) {
            k.eventHandler && o({
              event: {
                type: ["JsonLdEvent"],
                code: "relative predicate reference",
                level: "warning",
                message: "Relative predicate reference found.",
                details: {
                  predicate: P
                }
              },
              options: k
            });
            continue;
          }
          if (A.termType === "BlankNode" && !k.produceGeneralizedRdf) {
            k.eventHandler && o({
              event: {
                type: ["JsonLdEvent"],
                code: "blank node predicate",
                level: "warning",
                message: "Dropping blank node predicate.",
                details: {
                  // FIXME: add better issuer API to get reverse mapping
                  property: N.getOldIds().find((U) => N.getId(U) === P)
                }
              },
              options: k
            });
            continue;
          }
          const q = y(
            F,
            N,
            x,
            j,
            k.rdfDirection,
            k
          );
          q && x.push({
            subject: G,
            predicate: A,
            object: q,
            graph: j
          });
        }
      }
    }
  }
  function c(x, $, j, N, k, C) {
    const T = { termType: "NamedNode", value: d }, O = { termType: "NamedNode", value: h }, B = { termType: "NamedNode", value: v }, P = x.pop(), H = P ? { termType: "BlankNode", value: $.getId() } : B;
    let F = H;
    for (const G of x) {
      const A = y(
        G,
        $,
        j,
        N,
        k,
        C
      ), q = { termType: "BlankNode", value: $.getId() };
      j.push({
        subject: F,
        predicate: T,
        object: A,
        graph: N
      }), j.push({
        subject: F,
        predicate: O,
        object: q,
        graph: N
      }), F = q;
    }
    if (P) {
      const G = y(
        P,
        $,
        j,
        N,
        k,
        C
      );
      j.push({
        subject: F,
        predicate: T,
        object: G,
        graph: N
      }), j.push({
        subject: F,
        predicate: O,
        object: B,
        graph: N
      });
    }
    return H;
  }
  function y(x, $, j, N, k, C) {
    const T = {};
    if (s.isValue(x)) {
      T.termType = "Literal", T.value = void 0, T.datatype = {
        termType: "NamedNode"
      };
      let O = x["@value"];
      const B = x["@type"] || null;
      if (B === "@json")
        T.value = a(O), T.datatype.value = f;
      else if (n.isBoolean(O))
        T.value = O.toString(), T.datatype.value = B || b;
      else if (n.isDouble(O) || B === S)
        n.isDouble(O) || (O = parseFloat(O)), T.value = O.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), T.datatype.value = B || S;
      else if (n.isNumber(O))
        T.value = O.toFixed(0), T.datatype.value = B || g;
      else if ("@direction" in x && k === "i18n-datatype") {
        const P = (x["@language"] || "").toLowerCase(), H = x["@direction"], F = `https://www.w3.org/ns/i18n#${P}_${H}`;
        T.datatype.value = F, T.value = O;
      } else {
        if ("@direction" in x && k === "compound-literal")
          throw new p(
            "Unsupported rdfDirection value.",
            "jsonld.InvalidRdfDirection",
            { value: k }
          );
        if ("@direction" in x && k)
          throw new p(
            "Unknown rdfDirection value.",
            "jsonld.InvalidRdfDirection",
            { value: k }
          );
        "@language" in x ? ("@direction" in x && !k && C.eventHandler && o({
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
        }), T.value = O, T.datatype.value = B || u, T.language = x["@language"]) : ("@direction" in x && !k && C.eventHandler && o({
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
        }), T.value = O, T.datatype.value = B || _);
      }
    } else if (s.isList(x)) {
      const O = c(
        x["@list"],
        $,
        j,
        N,
        k,
        C
      );
      T.termType = O.termType, T.value = O.value;
    } else {
      const O = n.isObject(x) ? x["@id"] : x;
      T.termType = O.startsWith("_:") ? "BlankNode" : "NamedNode", T.value = O;
    }
    return T.termType === "NamedNode" && !m(T.value) ? (C.eventHandler && o({
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
var Kr, Ka;
function Vu() {
  if (Ka) return Kr;
  Ka = 1;
  const { isKeyword: e } = Qe(), t = Ce(), s = ye(), a = _e(), p = Je(), n = Se(), {
    createNodeMap: r,
    mergeNodeMapGraphs: o
  } = Gn(), d = {};
  Kr = d, d.frameMergedOrDefault = (i, c, y) => {
    const x = {
      options: y,
      embedded: !1,
      graph: "@default",
      graphMap: { "@default": {} },
      subjectStack: [],
      link: {},
      bnodeMap: {}
    }, $ = new a.IdentifierIssuer("_:b");
    r(i, x.graphMap, "@default", $), y.merged && (x.graphMap["@merged"] = o(x.graphMap), x.graph = "@merged"), x.subjects = x.graphMap[x.graph];
    const j = [];
    d.frame(x, Object.keys(x.subjects).sort(), c, j), y.pruneBlankNodeIdentifiers && (y.bnodesToClear = Object.keys(x.bnodeMap).filter((N) => x.bnodeMap[N].length === 1));
    // remove @preserve from results
    return y.link = {}, g(j, y);
  }, d.frame = (i, c, y, x, $ = null) => {
    f(y), y = y[0];
    const j = i.options, N = {
      embed: w(y, j, "embed"),
      explicit: w(y, j, "explicit"),
      requireAll: w(y, j, "requireAll")
    };
    i.link.hasOwnProperty(i.graph) || (i.link[i.graph] = {});
    const k = i.link[i.graph], C = u(i, c, y, N), T = Object.keys(C).sort();
    for (const O of T) {
      const B = C[O];
      if ($ === null ? i.uniqueEmbeds = { [i.graph]: {} } : i.uniqueEmbeds[i.graph] = i.uniqueEmbeds[i.graph] || {}, N.embed === "@link" && O in k) {
        _(x, $, k[O]);
        continue;
      }
      const P = { "@id": O };
      if (O.indexOf("_:") === 0 && a.addValue(i.bnodeMap, O, P, { propertyIsArray: !0 }), k[O] = P, (N.embed === "@first" || N.embed === "@last") && i.is11)
        throw new n(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: y }
        );
      if (!(!i.embedded && i.uniqueEmbeds[i.graph].hasOwnProperty(O))) {
        if (i.embedded && (N.embed === "@never" || v(B, i.graph, i.subjectStack))) {
          _(x, $, P);
          continue;
        }
        if (i.embedded && (N.embed == "@first" || N.embed == "@once") && i.uniqueEmbeds[i.graph].hasOwnProperty(O)) {
          _(x, $, P);
          continue;
        }
        if (N.embed === "@last" && O in i.uniqueEmbeds[i.graph] && S(i, O), i.uniqueEmbeds[i.graph][O] = { parent: x, property: $ }, i.subjectStack.push({ subject: B, graph: i.graph }), O in i.graphMap) {
          let H = !1, F = null;
          "@graph" in y ? (F = y["@graph"][0], H = !(O === "@merged" || O === "@default"), s.isObject(F) || (F = {})) : (H = i.graph !== "@merged", F = {}), H && d.frame(
            { ...i, graph: O, embedded: !1 },
            Object.keys(i.graphMap[O]).sort(),
            [F],
            P,
            "@graph"
          );
        }
        "@included" in y && d.frame(
          { ...i, embedded: !1 },
          c,
          y["@included"],
          P,
          "@included"
        );
        for (const H of Object.keys(B).sort()) {
          if (e(H)) {
            if (P[H] = a.clone(B[H]), H === "@type")
              for (const F of B["@type"])
                F.indexOf("_:") === 0 && a.addValue(
                  i.bnodeMap,
                  F,
                  P,
                  { propertyIsArray: !0 }
                );
            continue;
          }
          if (!(N.explicit && !(H in y)))
            for (const F of B[H]) {
              const G = H in y ? y[H] : h(N);
              if (t.isList(F)) {
                const A = y[H] && y[H][0] && y[H][0]["@list"] ? y[H][0]["@list"] : h(N), q = { "@list": [] };
                _(P, H, q);
                const U = F["@list"];
                for (const D of U)
                  t.isSubjectReference(D) ? d.frame(
                    { ...i, embedded: !0 },
                    [D["@id"]],
                    A,
                    q,
                    "@list"
                  ) : _(q, "@list", a.clone(D));
              } else t.isSubjectReference(F) ? d.frame(
                { ...i, embedded: !0 },
                [F["@id"]],
                G,
                P,
                H
              ) : l(G[0], F) && _(P, H, a.clone(F));
            }
        }
        for (const H of Object.keys(y).sort()) {
          if (H === "@type") {
            if (!s.isObject(y[H][0]) || !("@default" in y[H][0]))
              continue;
          } else if (e(H))
            continue;
          const F = y[H][0] || {};
          if (!w(F, j, "omitDefault") && !(H in P)) {
            let A = "@null";
            "@default" in F && (A = a.clone(F["@default"])), s.isArray(A) || (A = [A]), P[H] = [{ "@preserve": A }];
          }
        }
        for (const H of Object.keys(y["@reverse"] || {}).sort()) {
          const F = y["@reverse"][H];
          for (const G of Object.keys(i.subjects))
            a.getValues(i.subjects[G], H).some((q) => q["@id"] === O) && (P["@reverse"] = P["@reverse"] || {}, a.addValue(
              P["@reverse"],
              H,
              [],
              { propertyIsArray: !0 }
            ), d.frame(
              { ...i, embedded: !0 },
              [G],
              F,
              P["@reverse"][H],
              $
            ));
        }
        _(x, $, P), i.subjectStack.pop();
      }
    }
  }, d.cleanupNull = (i, c) => {
    if (s.isArray(i))
      return i.map((x) => d.cleanupNull(x, c)).filter((x) => x);
    if (i === "@null")
      return null;
    if (s.isObject(i)) {
      if ("@id" in i) {
        const y = i["@id"];
        if (c.link.hasOwnProperty(y)) {
          const x = c.link[y].indexOf(i);
          if (x !== -1)
            return c.link[y][x];
          c.link[y].push(i);
        } else
          c.link[y] = [i];
      }
      for (const y in i)
        i[y] = d.cleanupNull(i[y], c);
    }
    return i;
  };
  function h(i) {
    const c = {};
    for (const y in i)
      i[y] !== void 0 && (c["@" + y] = [i[y]]);
    return [c];
  }
  function v(i, c, y) {
    for (let x = y.length - 1; x >= 0; --x) {
      const $ = y[x];
      if ($.graph === c && $.subject["@id"] === i["@id"])
        return !0;
    }
    return !1;
  }
  function w(i, c, y) {
    const x = "@" + y;
    let $ = x in i ? i[x][0] : c[y];
    if (y === "embed") {
      if ($ === !0)
        $ = "@once";
      else if ($ === !1)
        $ = "@never";
      else if ($ !== "@always" && $ !== "@never" && $ !== "@link" && $ !== "@first" && $ !== "@last" && $ !== "@once")
        throw new n(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: i }
        );
    }
    return $;
  }
  function f(i) {
    if (!s.isArray(i) || i.length !== 1 || !s.isObject(i[0]))
      throw new n(
        "Invalid JSON-LD syntax; a JSON-LD frame must be a single object.",
        "jsonld.SyntaxError",
        { frame: i }
      );
    if ("@id" in i[0]) {
      for (const c of a.asArray(i[0]["@id"]))
        if (!(s.isObject(c) || p.isAbsolute(c)) || s.isString(c) && c.indexOf("_:") === 0)
          throw new n(
            "Invalid JSON-LD syntax; invalid @id in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: i }
          );
    }
    if ("@type" in i[0]) {
      for (const c of a.asArray(i[0]["@type"]))
        if (!(s.isObject(c) || p.isAbsolute(c) || c === "@json") || s.isString(c) && c.indexOf("_:") === 0)
          throw new n(
            "Invalid JSON-LD syntax; invalid @type in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: i }
          );
    }
  }
  function u(i, c, y, x) {
    const $ = {};
    for (const j of c) {
      const N = i.graphMap[i.graph][j];
      b(i, N, y, x) && ($[j] = N);
    }
    return $;
  }
  function b(i, c, y, x) {
    let $ = !0, j = !1;
    for (const N in y) {
      let k = !1;
      const C = a.getValues(c, N), T = a.getValues(y, N).length === 0;
      if (N === "@id") {
        if (s.isEmptyObject(y["@id"][0] || {}) ? k = !0 : y["@id"].length >= 0 && (k = y["@id"].includes(C[0])), !x.requireAll)
          return k;
      } else if (N === "@type") {
        if ($ = !1, T) {
          if (C.length > 0)
            return !1;
          k = !0;
        } else if (y["@type"].length === 1 && s.isEmptyObject(y["@type"][0]))
          k = C.length > 0;
        else
          for (const O of y["@type"])
            s.isObject(O) && "@default" in O ? k = !0 : k = k || C.some((B) => B === O);
        if (!x.requireAll)
          return k;
      } else {
        if (e(N))
          continue;
        {
          const O = a.getValues(y, N)[0];
          let B = !1;
          if (O && (f([O]), B = "@default" in O), $ = !1, C.length === 0 && B)
            continue;
          if (C.length > 0 && T)
            return !1;
          if (O === void 0) {
            if (C.length > 0)
              return !1;
            k = !0;
          } else if (t.isList(O)) {
            const P = O["@list"][0];
            if (t.isList(C[0])) {
              const H = C[0]["@list"];
              t.isValue(P) ? k = H.some((F) => l(P, F)) : (t.isSubject(P) || t.isSubjectReference(P)) && (k = H.some((F) => m(
                i,
                P,
                F,
                x
              )));
            }
          } else t.isValue(O) ? k = C.some((P) => l(O, P)) : t.isSubjectReference(O) ? k = C.some((P) => m(i, O, P, x)) : s.isObject(O) ? k = C.length > 0 : k = !1;
        }
      }
      if (!k && x.requireAll)
        return !1;
      j = j || k;
    }
    return $ || j;
  }
  function S(i, c) {
    const y = i.uniqueEmbeds[i.graph], x = y[c], $ = x.parent, j = x.property, N = { "@id": c };
    if (s.isArray($)) {
      for (let C = 0; C < $.length; ++C)
        if (a.compareValues($[C], N)) {
          $[C] = N;
          break;
        }
    } else {
      const C = s.isArray($[j]);
      a.removeValue($, j, N, { propertyIsArray: C }), a.addValue($, j, N, { propertyIsArray: C });
    }
    const k = (C) => {
      const T = Object.keys(y);
      for (const O of T)
        O in y && s.isObject(y[O].parent) && y[O].parent["@id"] === C && (delete y[O], k(O));
    };
    k(c);
  }
  /**
   * Removes the @preserve keywords from expanded result of framing.
   *
   * @param input the framed, framed output.
   * @param options the framing options used.
   *
   * @return the resulting output.
   */
  function g(i, c) {
    if (s.isArray(i))
      return i.map((y) => g(y, c));
    if (s.isObject(i)) {
      // remove @preserve
      if ("@preserve" in i)
        return i["@preserve"][0];
      if (t.isValue(i))
        return i;
      if (t.isList(i))
        return i["@list"] = g(i["@list"], c), i;
      if ("@id" in i) {
        const y = i["@id"];
        if (c.link.hasOwnProperty(y)) {
          const x = c.link[y].indexOf(i);
          if (x !== -1)
            return c.link[y][x];
          c.link[y].push(i);
        } else
          c.link[y] = [i];
      }
      for (const y in i) {
        if (y === "@id" && c.bnodesToClear.includes(i[y])) {
          delete i["@id"];
          continue;
        }
        i[y] = g(i[y], c);
      }
    }
    return i;
  }
  function _(i, c, y) {
    s.isObject(i) ? a.addValue(i, c, y, { propertyIsArray: !0 }) : i.push(y);
  }
  function m(i, c, y, x) {
    if (!("@id" in y))
      return !1;
    const $ = i.subjects[y["@id"]];
    return $ && b(i, $, c, x);
  }
  function l(i, c) {
    const y = c["@value"], x = c["@type"], $ = c["@language"], j = i["@value"] ? s.isArray(i["@value"]) ? i["@value"] : [i["@value"]] : [], N = i["@type"] ? s.isArray(i["@type"]) ? i["@type"] : [i["@type"]] : [], k = i["@language"] ? s.isArray(i["@language"]) ? i["@language"] : [i["@language"]] : [];
    return j.length === 0 && N.length === 0 && k.length === 0 ? !0 : !(!(j.includes(y) || s.isEmptyObject(j[0])) || !(!x && N.length === 0 || N.includes(x) || x && s.isEmptyObject(N[0])) || !(!$ && k.length === 0 || k.includes($) || $ && s.isEmptyObject(k[0])));
  }
  return Kr;
}
var Zr, Za;
function zu() {
  if (Za) return Zr;
  Za = 1;
  const e = Se(), {
    isArray: t,
    isObject: s,
    isString: a,
    isUndefined: p
  } = ye(), {
    isList: n,
    isValue: r,
    isGraph: o,
    isSimpleGraph: d,
    isSubjectReference: h
  } = Ce(), {
    expandIri: v,
    getContextValue: w,
    isKeyword: f,
    process: u,
    processingMode: b
  } = Qe(), {
    removeBase: S,
    prependBase: g
  } = Je(), {
    REGEX_KEYWORD: _,
    addValue: m,
    asArray: l,
    compareShortestLeast: i
  } = _e(), c = {};
  Zr = c, c.compact = async ({
    activeCtx: $,
    activeProperty: j = null,
    element: N,
    options: k = {}
  }) => {
    if (t(N)) {
      let T = [];
      for (let O = 0; O < N.length; ++O) {
        const B = await c.compact({
          activeCtx: $,
          activeProperty: j,
          element: N[O],
          options: k
        });
        B !== null && T.push(B);
      }
      return k.compactArrays && T.length === 1 && (w(
        $,
        j,
        "@container"
      ) || []).length === 0 && (T = T[0]), T;
    }
    const C = w($, j, "@context");
    if (p(C) || ($ = await u({
      activeCtx: $,
      localCtx: C,
      propagate: !0,
      overrideProtected: !0,
      options: k
    })), s(N)) {
      if (k.link && "@id" in N && k.link.hasOwnProperty(N["@id"])) {
        const A = k.link[N["@id"]];
        for (let q = 0; q < A.length; ++q)
          if (A[q].expanded === N)
            return A[q].compacted;
      }
      if (r(N) || h(N)) {
        const A = c.compactValue({ activeCtx: $, activeProperty: j, value: N, options: k });
        return k.link && h(N) && (k.link.hasOwnProperty(N["@id"]) || (k.link[N["@id"]] = []), k.link[N["@id"]].push({ expanded: N, compacted: A })), A;
      }
      if (n(N) && (w(
        $,
        j,
        "@container"
      ) || []).includes("@list"))
        return c.compact({
          activeCtx: $,
          activeProperty: j,
          element: N["@list"],
          options: k
        });
      const T = j === "@reverse", O = {}, B = $;
      !r(N) && !h(N) && ($ = $.revertToPreviousContext());
      const P = w(B, j, "@context");
      p(P) || ($ = await u({
        activeCtx: $,
        localCtx: P,
        propagate: !0,
        overrideProtected: !0,
        options: k
      })), k.link && "@id" in N && (k.link.hasOwnProperty(N["@id"]) || (k.link[N["@id"]] = []), k.link[N["@id"]].push({ expanded: N, compacted: O }));
      let H = N["@type"] || [];
      H.length > 1 && (H = Array.from(H).sort());
      const F = $;
      for (const A of H) {
        const q = c.compactIri(
          { activeCtx: F, iri: A, relativeTo: { vocab: !0 } }
        ), U = w(B, q, "@context");
        p(U) || ($ = await u({
          activeCtx: $,
          localCtx: U,
          options: k,
          propagate: !1
        }));
      }
      const G = Object.keys(N).sort();
      for (const A of G) {
        const q = N[A];
        if (A === "@id") {
          let U = l(q).map(
            (E) => c.compactIri({
              activeCtx: $,
              iri: E,
              relativeTo: { vocab: !1 },
              base: k.base
            })
          );
          U.length === 1 && (U = U[0]);
          const D = c.compactIri(
            { activeCtx: $, iri: "@id", relativeTo: { vocab: !0 } }
          );
          O[D] = U;
          continue;
        }
        if (A === "@type") {
          let U = l(q).map(
            (M) => c.compactIri({
              activeCtx: B,
              iri: M,
              relativeTo: { vocab: !0 }
            })
          );
          U.length === 1 && (U = U[0]);
          const D = c.compactIri(
            { activeCtx: $, iri: "@type", relativeTo: { vocab: !0 } }
          ), R = (w(
            $,
            D,
            "@container"
          ) || []).includes("@set") && b($, 1.1) || t(U) && q.length === 0;
          m(O, D, U, { propertyIsArray: R });
          continue;
        }
        if (A === "@reverse") {
          const U = await c.compact({
            activeCtx: $,
            activeProperty: "@reverse",
            element: q,
            options: k
          });
          for (const D in U)
            if ($.mappings.has(D) && $.mappings.get(D).reverse) {
              const E = U[D], R = (w(
                $,
                D,
                "@container"
              ) || []).includes("@set") || !k.compactArrays;
              m(
                O,
                D,
                E,
                { propertyIsArray: R }
              ), delete U[D];
            }
          if (Object.keys(U).length > 0) {
            const D = c.compactIri({
              activeCtx: $,
              iri: A,
              relativeTo: { vocab: !0 }
            });
            m(O, D, U);
          }
          continue;
        }
        if (A === "@preserve") {
          const U = await c.compact({
            activeCtx: $,
            activeProperty: j,
            element: q,
            options: k
          });
          t(U) && U.length === 0 || m(O, A, U);
          continue;
        }
        if (A === "@index") {
          if ((w(
            $,
            j,
            "@container"
          ) || []).includes("@index"))
            continue;
          const D = c.compactIri({
            activeCtx: $,
            iri: A,
            relativeTo: { vocab: !0 }
          });
          m(O, D, q);
          continue;
        }
        if (A !== "@graph" && A !== "@list" && A !== "@included" && f(A)) {
          const U = c.compactIri({
            activeCtx: $,
            iri: A,
            relativeTo: { vocab: !0 }
          });
          m(O, U, q);
          continue;
        }
        if (!t(q))
          throw new e(
            "JSON-LD expansion error; expanded value must be an array.",
            "jsonld.SyntaxError"
          );
        if (q.length === 0) {
          const U = c.compactIri({
            activeCtx: $,
            iri: A,
            value: q,
            relativeTo: { vocab: !0 },
            reverse: T
          }), D = $.mappings.has(U) ? $.mappings.get(U)["@nest"] : null;
          let E = O;
          D && (x($, D, k), s(O[D]) || (O[D] = {}), E = O[D]), m(
            E,
            U,
            q,
            {
              propertyIsArray: !0
            }
          );
        }
        for (const U of q) {
          const D = c.compactIri({
            activeCtx: $,
            iri: A,
            value: U,
            relativeTo: { vocab: !0 },
            reverse: T
          }), E = $.mappings.has(D) ? $.mappings.get(D)["@nest"] : null;
          let I = O;
          E && (x($, E, k), s(O[E]) || (O[E] = {}), I = O[E]);
          const R = w(
            $,
            D,
            "@container"
          ) || [], M = o(U), J = n(U);
          let W;
          J ? W = U["@list"] : M && (W = U["@graph"]);
          let K = await c.compact({
            activeCtx: $,
            activeProperty: D,
            element: J || M ? W : U,
            options: k
          });
          if (J)
            if (t(K) || (K = [K]), !R.includes("@list"))
              K = {
                [c.compactIri({
                  activeCtx: $,
                  iri: "@list",
                  relativeTo: { vocab: !0 }
                })]: K
              }, "@index" in U && (K[c.compactIri({
                activeCtx: $,
                iri: "@index",
                relativeTo: { vocab: !0 }
              })] = U["@index"]);
            else {
              m(I, D, K, {
                valueIsArray: !0,
                allowDuplicate: !0
              });
              continue;
            }
          if (M)
            if (R.includes("@graph") && (R.includes("@id") || R.includes("@index") && d(U))) {
              let L;
              I.hasOwnProperty(D) ? L = I[D] : I[D] = L = {};
              const V = (R.includes("@id") ? U["@id"] : U["@index"]) || c.compactIri({
                activeCtx: $,
                iri: "@none",
                relativeTo: { vocab: !0 }
              });
              m(
                L,
                V,
                K,
                {
                  propertyIsArray: !k.compactArrays || R.includes("@set")
                }
              );
            } else R.includes("@graph") && d(U) ? (t(K) && K.length > 1 && (K = { "@included": K }), m(
              I,
              D,
              K,
              {
                propertyIsArray: !k.compactArrays || R.includes("@set")
              }
            )) : (t(K) && K.length === 1 && k.compactArrays && (K = K[0]), K = {
              [c.compactIri({
                activeCtx: $,
                iri: "@graph",
                relativeTo: { vocab: !0 }
              })]: K
            }, "@id" in U && (K[c.compactIri({
              activeCtx: $,
              iri: "@id",
              relativeTo: { vocab: !0 }
            })] = U["@id"]), "@index" in U && (K[c.compactIri({
              activeCtx: $,
              iri: "@index",
              relativeTo: { vocab: !0 }
            })] = U["@index"]), m(
              I,
              D,
              K,
              {
                propertyIsArray: !k.compactArrays || R.includes("@set")
              }
            ));
          else if (R.includes("@language") || R.includes("@index") || R.includes("@id") || R.includes("@type")) {
            let L;
            I.hasOwnProperty(D) ? L = I[D] : I[D] = L = {};
            let V;
            if (R.includes("@language"))
              r(K) && (K = K["@value"]), V = U["@language"];
            else if (R.includes("@index")) {
              const z = w(
                $,
                D,
                "@index"
              ) || "@index", Z = c.compactIri(
                { activeCtx: $, iri: z, relativeTo: { vocab: !0 } }
              );
              if (z === "@index")
                V = U["@index"], delete K[Z];
              else {
                let Q;
                if ([V, ...Q] = l(K[z] || []), !a(V))
                  V = null;
                else
                  switch (Q.length) {
                    case 0:
                      delete K[z];
                      break;
                    case 1:
                      K[z] = Q[0];
                      break;
                    default:
                      K[z] = Q;
                      break;
                  }
              }
            } else if (R.includes("@id")) {
              const z = c.compactIri({
                activeCtx: $,
                iri: "@id",
                relativeTo: { vocab: !0 }
              });
              V = K[z], delete K[z];
            } else if (R.includes("@type")) {
              const z = c.compactIri({
                activeCtx: $,
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
              Object.keys(K).length === 1 && "@id" in U && (K = await c.compact({
                activeCtx: $,
                activeProperty: D,
                element: { "@id": U["@id"] },
                options: k
              }));
            }
            V || (V = c.compactIri({
              activeCtx: $,
              iri: "@none",
              relativeTo: { vocab: !0 }
            })), m(
              L,
              V,
              K,
              {
                propertyIsArray: R.includes("@set")
              }
            );
          } else {
            const L = !k.compactArrays || R.includes("@set") || R.includes("@list") || t(K) && K.length === 0 || A === "@list" || A === "@graph";
            m(
              I,
              D,
              K,
              { propertyIsArray: L }
            );
          }
        }
      }
      return O;
    }
    return N;
  }, c.compactIri = ({
    activeCtx: $,
    iri: j,
    value: N = null,
    relativeTo: k = { vocab: !1 },
    reverse: C = !1,
    base: T = null
  }) => {
    if (j === null)
      return j;
    $.isPropertyTermScoped && $.previousContext && ($ = $.previousContext);
    const O = $.getInverse();
    if (f(j) && j in O && "@none" in O[j] && "@type" in O[j]["@none"] && "@none" in O[j]["@none"]["@type"])
      return O[j]["@none"]["@type"]["@none"];
    if (k.vocab && j in O) {
      const G = $["@language"] || "@none", A = [];
      s(N) && "@index" in N && !("@graph" in N) && A.push("@index", "@index@set"), s(N) && "@preserve" in N && (N = N["@preserve"][0]), o(N) ? ("@index" in N && A.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in N && A.push(
        "@graph@id",
        "@graph@id@set"
      ), A.push("@graph", "@graph@set", "@set"), "@index" in N || A.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in N || A.push("@graph@id", "@graph@id@set")) : s(N) && !r(N) && A.push("@id", "@id@set", "@type", "@set@type");
      let q = "@language", U = "@null";
      if (C)
        q = "@type", U = "@reverse", A.push("@set");
      else if (n(N)) {
        "@index" in N || A.push("@list");
        const E = N["@list"];
        if (E.length === 0)
          q = "@any", U = "@none";
        else {
          let I = E.length === 0 ? G : null, R = null;
          for (let M = 0; M < E.length; ++M) {
            const J = E[M];
            let W = "@none", K = "@none";
            if (r(J))
              if ("@direction" in J) {
                const L = (J["@language"] || "").toLowerCase(), V = J["@direction"];
                W = `${L}_${V}`;
              } else "@language" in J ? W = J["@language"].toLowerCase() : "@type" in J ? K = J["@type"] : W = "@null";
            else
              K = "@id";
            if (I === null ? I = W : W !== I && r(J) && (I = "@none"), R === null ? R = K : K !== R && (R = "@none"), I === "@none" && R === "@none")
              break;
          }
          I = I || "@none", R = R || "@none", R !== "@none" ? (q = "@type", U = R) : U = I;
        }
      } else {
        if (r(N))
          if ("@language" in N && !("@index" in N)) {
            A.push("@language", "@language@set"), U = N["@language"];
            const E = N["@direction"];
            E && (U = `${U}_${E}`);
          } else "@direction" in N && !("@index" in N) ? U = `_${N["@direction"]}` : "@type" in N && (q = "@type", U = N["@type"]);
        else
          q = "@type", U = "@id";
        A.push("@set");
      }
      A.push("@none"), s(N) && !("@index" in N) && A.push("@index", "@index@set"), r(N) && Object.keys(N).length === 1 && A.push("@language", "@language@set");
      const D = y(
        $,
        j,
        N,
        A,
        q,
        U
      );
      if (D !== null)
        return D;
    }
    if (k.vocab && "@vocab" in $) {
      const G = $["@vocab"];
      if (j.indexOf(G) === 0 && j !== G) {
        const A = j.substr(G.length);
        if (!$.mappings.has(A))
          return A;
      }
    }
    let B = null;
    const P = [];
    let H = $.fastCurieMap;
    const F = j.length - 1;
    for (let G = 0; G < F && j[G] in H; ++G)
      H = H[j[G]], "" in H && P.push(H[""][0]);
    for (let G = P.length - 1; G >= 0; --G) {
      const A = P[G], q = A.terms;
      for (const U of q) {
        const D = U + ":" + j.substr(A.iri.length);
        $.mappings.get(U)._prefix && (!$.mappings.has(D) || N === null && $.mappings.get(D)["@id"] === j) && (B === null || i(D, B) < 0) && (B = D);
      }
    }
    if (B !== null)
      return B;
    for (const [G, A] of $.mappings)
      if (A && A._prefix && j.startsWith(G + ":"))
        throw new e(
          `Absolute IRI "${j}" confused with prefix "${G}".`,
          "jsonld.SyntaxError",
          { code: "IRI confused with prefix", context: $ }
        );
    if (!k.vocab)
      if ("@base" in $)
        if ($["@base"]) {
          const G = S(g(T, $["@base"]), j);
          return _.test(G) ? `./${G}` : G;
        } else
          return j;
      else
        return S(T, j);
    return j;
  }, c.compactValue = ({ activeCtx: $, activeProperty: j, value: N, options: k }) => {
    if (r(N)) {
      const B = w($, j, "@type"), P = w($, j, "@language"), H = w($, j, "@direction"), F = w($, j, "@container") || [], G = "@index" in N && !F.includes("@index");
      if (!G && B !== "@none" && (N["@type"] === B || "@language" in N && N["@language"] === P && "@direction" in N && N["@direction"] === H || "@language" in N && N["@language"] === P || "@direction" in N && N["@direction"] === H))
        return N["@value"];
      const A = Object.keys(N).length, q = A === 1 || A === 2 && "@index" in N && !G, U = "@language" in $, D = a(N["@value"]), E = $.mappings.has(j) && $.mappings.get(j)["@language"] === null;
      if (q && B !== "@none" && (!U || !D || E))
        return N["@value"];
      const I = {};
      return G && (I[c.compactIri({
        activeCtx: $,
        iri: "@index",
        relativeTo: { vocab: !0 }
      })] = N["@index"]), "@type" in N ? I[c.compactIri({
        activeCtx: $,
        iri: "@type",
        relativeTo: { vocab: !0 }
      })] = c.compactIri(
        { activeCtx: $, iri: N["@type"], relativeTo: { vocab: !0 } }
      ) : "@language" in N && (I[c.compactIri({
        activeCtx: $,
        iri: "@language",
        relativeTo: { vocab: !0 }
      })] = N["@language"]), "@direction" in N && (I[c.compactIri({
        activeCtx: $,
        iri: "@direction",
        relativeTo: { vocab: !0 }
      })] = N["@direction"]), I[c.compactIri({
        activeCtx: $,
        iri: "@value",
        relativeTo: { vocab: !0 }
      })] = N["@value"], I;
    }
    const C = v(
      $,
      j,
      { vocab: !0 },
      k
    ), T = w($, j, "@type"), O = c.compactIri({
      activeCtx: $,
      iri: N["@id"],
      relativeTo: { vocab: T === "@vocab" },
      base: k.base
    });
    return T === "@id" || T === "@vocab" || C === "@graph" ? O : {
      [c.compactIri({
        activeCtx: $,
        iri: "@id",
        relativeTo: { vocab: !0 }
      })]: O
    };
  };
  function y($, j, N, k, C, T) {
    T === null && (T = "@null");
    const O = [];
    if ((T === "@id" || T === "@reverse") && s(N) && "@id" in N) {
      T === "@reverse" && O.push("@reverse");
      const P = c.compactIri(
        { activeCtx: $, iri: N["@id"], relativeTo: { vocab: !0 } }
      );
      $.mappings.has(P) && $.mappings.get(P) && $.mappings.get(P)["@id"] === N["@id"] ? O.push.apply(O, ["@vocab", "@id"]) : O.push.apply(O, ["@id", "@vocab"]);
    } else {
      O.push(T);
      const P = O.find((H) => H.includes("_"));
      P && O.push(P.replace(/^[^_]+_/, "_"));
    }
    O.push("@none");
    const B = $.inverse[j];
    for (const P of k) {
      if (!(P in B))
        continue;
      const H = B[P][C];
      for (const F of O)
        if (F in H)
          return H[F];
    }
    return null;
  }
  function x($, j, N) {
    if (v($, j, { vocab: !0 }, N) !== "@nest")
      throw new e(
        "JSON-LD compact error; nested property must have an @nest value resolving to @nest.",
        "jsonld.SyntaxError",
        { code: "invalid @nest value" }
      );
  }
  return Zr;
}
var Wr, Wa;
function Fu() {
  return Wa || (Wa = 1, Wr = (e) => {
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
    }), t.compact = function(s, a) {
      return arguments.length < 2 ? Promise.reject(
        new TypeError("Could not compact, too few arguments.")
      ) : e.compact(s, a);
    }, t.expand = function(s) {
      return arguments.length < 1 ? Promise.reject(
        new TypeError("Could not expand, too few arguments.")
      ) : e.expand(s);
    }, t.flatten = function(s) {
      return arguments.length < 1 ? Promise.reject(
        new TypeError("Could not flatten, too few arguments.")
      ) : e.flatten(s);
    }, t;
  }), Wr;
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
var Qr, Qa;
function Hu() {
  if (Qa) return Qr;
  Qa = 1;
  const e = gs(), t = Nu(), s = _e(), a = Tu(), p = s.IdentifierIssuer, n = Se(), r = qo(), o = ku(), { expand: d } = Du(), { flatten: h } = Mu(), { fromRDF: v } = Lu(), { toRDF: w } = Uu(), {
    frameMergedOrDefault: f,
    cleanupNull: u
  } = Vu(), {
    isArray: b,
    isObject: S,
    isString: g
  } = ye(), {
    isSubjectReference: _
  } = Ce(), {
    expandIri: m,
    getInitialContext: l,
    process: i,
    processingMode: c
  } = Qe(), {
    compact: y,
    compactIri: x
  } = zu(), {
    createNodeMap: $,
    createMergedNodeMap: j,
    mergeNodeMaps: N
  } = Gn(), {
    logEventHandler: k,
    logWarningEventHandler: C,
    safeEventHandler: T,
    setDefaultEventHandler: O,
    setupEventHandler: B,
    strictEventHandler: P,
    unhandledEventHandler: H
  } = Et(), F = function(A) {
    const q = {}, D = new r({ max: 100 });
    A.compact = async function(I, R, M) {
      if (arguments.length < 2)
        throw new TypeError("Could not compact, too few arguments.");
      if (R === null)
        throw new n(
          "The compaction context must not be null.",
          "jsonld.CompactError",
          { code: "invalid local context" }
        );
      if (I === null)
        return null;
      M = E(M, {
        base: g(I) ? I : "",
        compactArrays: !0,
        compactToRelative: !0,
        graph: !1,
        skipExpansion: !1,
        link: !1,
        issuer: new p("_:b"),
        contextResolver: new a(
          { sharedCache: D }
        )
      }), M.link && (M.skipExpansion = !0), M.compactToRelative || delete M.base;
      let J;
      M.skipExpansion ? J = I : J = await A.expand(I, M);
      const W = await A.processContext(
        l(M),
        R,
        M
      );
      let K = await y({
        activeCtx: W,
        element: J,
        options: M
      });
      M.compactArrays && !M.graph && b(K) ? K.length === 1 ? K = K[0] : K.length === 0 && (K = {}) : M.graph && S(K) && (K = [K]), S(R) && "@context" in R && (R = R["@context"]), R = s.clone(R), b(R) || (R = [R]);
      const L = R;
      R = [];
      for (let z = 0; z < L.length; ++z)
        (!S(L[z]) || Object.keys(L[z]).length > 0) && R.push(L[z]);
      const V = R.length > 0;
      if (R.length === 1 && (R = R[0]), b(K)) {
        const z = x({
          activeCtx: W,
          iri: "@graph",
          relativeTo: { vocab: !0 }
        }), Z = K;
        K = {}, V && (K["@context"] = R), K[z] = Z;
      } else if (S(K) && V) {
        const z = K;
        K = { "@context": R };
        for (const Z in z)
          K[Z] = z[Z];
      }
      return K;
    }, A.expand = async function(I, R) {
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
        const V = s.clone(R.expandContext);
        S(V) && "@context" in V ? M.expandContext = V : M.expandContext = { "@context": V }, J.push(M.expandContext);
      }
      let W;
      if (!g(I))
        M.input = s.clone(I);
      else {
        const V = await A.get(I, R);
        W = V.documentUrl, M.input = V.document, V.contextUrl && (M.remoteContext = { "@context": V.contextUrl }, J.push(M.remoteContext));
      }
      "base" in R || (R.base = W || "");
      let K = l(R);
      for (const V of J)
        K = await i({ activeCtx: K, localCtx: V, options: R });
      let L = await d({
        activeCtx: K,
        element: M.input,
        options: R
      });
      return S(L) && "@graph" in L && Object.keys(L).length === 1 ? L = L["@graph"] : L === null && (L = []), b(L) || (L = [L]), L;
    }, A.flatten = async function(I, R, M) {
      if (arguments.length < 1)
        return new TypeError("Could not flatten, too few arguments.");
      typeof R == "function" ? R = null : R = R || null, M = E(M, {
        base: g(I) ? I : "",
        contextResolver: new a(
          { sharedCache: D }
        )
      });
      const J = await A.expand(I, M), W = h(J);
      return R === null ? W : (M.graph = !0, M.skipExpansion = !0, await A.compact(W, R, M));
    }, A.frame = async function(I, R, M) {
      if (arguments.length < 2)
        throw new TypeError("Could not frame, too few arguments.");
      if (M = E(M, {
        base: g(I) ? I : "",
        embed: "@once",
        explicit: !1,
        requireAll: !1,
        omitDefault: !1,
        bnodesToClear: [],
        contextResolver: new a(
          { sharedCache: D }
        )
      }), g(R)) {
        const Y = await A.get(R, M);
        if (R = Y.document, Y.contextUrl) {
          let re = R["@context"];
          re ? b(re) ? re.push(Y.contextUrl) : re = [re, Y.contextUrl] : re = Y.contextUrl, R["@context"] = re;
        }
      }
      const J = R ? R["@context"] || {} : {}, W = await A.processContext(
        l(M),
        J,
        M
      );
      M.hasOwnProperty("omitGraph") || (M.omitGraph = c(W, 1.1)), M.hasOwnProperty("pruneBlankNodeIdentifiers") || (M.pruneBlankNodeIdentifiers = c(W, 1.1));
      const K = await A.expand(I, M), L = { ...M };
      L.isFrame = !0, L.keepFreeFloatingNodes = !0;
      const V = await A.expand(R, L), z = Object.keys(R).map((Y) => m(W, Y, { vocab: !0 }));
      L.merged = !z.includes("@graph"), L.is11 = c(W, 1.1);
      const Z = f(K, V, L);
      L.graph = !M.omitGraph, L.skipExpansion = !0, L.link = {}, L.framing = !0;
      let Q = await A.compact(Z, J, L);
      return L.link = {}, Q = u(Q, L), Q;
    }, A.link = async function(I, R, M) {
      const J = {};
      return R && (J["@context"] = R), J["@embed"] = "@link", A.frame(I, J, M);
    }, A.normalize = A.canonize = async function(I, R) {
      if (arguments.length < 1)
        throw new TypeError("Could not canonize, too few arguments.");
      if (R = E(R, {
        base: g(I) ? I : null,
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
        const W = o.parse(I);
        return e.canonize(W, R);
      }
      const M = { ...R };
      delete M.format, M.produceGeneralizedRdf = !1;
      const J = await A.toRDF(I, M);
      return e.canonize(J, R);
    }, A.fromRDF = async function(I, R) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert from RDF, too few arguments.");
      R = E(R, {
        format: g(I) ? "application/n-quads" : void 0
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
        J = () => I;
      const W = await J(I);
      return v(W, R);
    }, A.toRDF = async function(I, R) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert to RDF, too few arguments.");
      R = E(R, {
        base: g(I) ? I : "",
        skipExpansion: !1,
        contextResolver: new a(
          { sharedCache: D }
        )
      });
      let M;
      R.skipExpansion ? M = I : M = await A.expand(I, R);
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
    }, A.createNodeMap = async function(I, R) {
      if (arguments.length < 1)
        throw new TypeError("Could not create node map, too few arguments.");
      R = E(R, {
        base: g(I) ? I : "",
        contextResolver: new a(
          { sharedCache: D }
        )
      });
      const M = await A.expand(I, R);
      return j(M, R);
    }, A.merge = async function(I, R, M) {
      if (arguments.length < 1)
        throw new TypeError("Could not merge, too few arguments.");
      if (!b(I))
        throw new TypeError('Could not merge, "docs" must be an array.');
      typeof R == "function" ? R = null : R = R || null, M = E(M, {
        contextResolver: new a(
          { sharedCache: D }
        )
      });
      const J = await Promise.all(I.map((Y) => {
        const re = { ...M };
        return A.expand(Y, re);
      }));
      let W = !0;
      "mergeNodes" in M && (W = M.mergeNodes);
      const K = M.issuer || new p("_:b"), L = { "@default": {} };
      for (let Y = 0; Y < J.length; ++Y) {
        const re = s.relabelBlankNodes(J[Y], {
          issuer: new p("_:b" + Y + "-")
        }), le = W || Y === 0 ? L : { "@default": {} };
        if ($(re, le, "@default", K), le !== L)
          for (const ae in le) {
            const oe = le[ae];
            if (!(ae in L)) {
              L[ae] = oe;
              continue;
            }
            const ie = L[ae];
            for (const Ee in oe)
              Ee in ie || (ie[Ee] = oe[Ee]);
          }
      }
      const V = N(L), z = [], Z = Object.keys(V).sort();
      for (let Y = 0; Y < Z.length; ++Y) {
        const re = V[Z[Y]];
        _(re) || z.push(re);
      }
      return R === null ? z : (M.graph = !0, M.skipExpansion = !0, await A.compact(z, R, M));
    }, Object.defineProperty(A, "documentLoader", {
      get: () => A._documentLoader,
      set: (I) => A._documentLoader = I
    }), A.documentLoader = async (I) => {
      throw new n(
        "Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.",
        "jsonld.LoadDocumentError",
        { code: "loading document failed", url: I }
      );
    }, A.get = async function(I, R) {
      let M;
      typeof R.documentLoader == "function" ? M = R.documentLoader : M = A.documentLoader;
      const J = await M(I);
      try {
        if (!J.document)
          throw new n(
            "No remote document found at the given URL.",
            "jsonld.NullRemoteDocument"
          );
        g(J.document) && (J.document = JSON.parse(J.document));
      } catch (W) {
        throw new n(
          "Could not retrieve a JSON-LD document from the URL.",
          "jsonld.LoadDocumentError",
          {
            code: "loading document failed",
            cause: W,
            remoteDoc: J
          }
        );
      }
      return J;
    }, A.processContext = async function(I, R, M) {
      return M = E(M, {
        base: "",
        contextResolver: new a(
          { sharedCache: D }
        )
      }), R === null ? l(M) : (R = s.clone(R), S(R) && "@context" in R || (R = { "@context": R }), i({ activeCtx: I, localCtx: R, options: M }));
    }, A.getContextValue = Qe().getContextValue, A.documentLoaders = {}, A.useDocumentLoader = function(I) {
      if (!(I in A.documentLoaders))
        throw new n(
          'Unknown document loader type: "' + I + '"',
          "jsonld.UnknownDocumentLoader",
          { type: I }
        );
      A.documentLoader = A.documentLoaders[I].apply(
        A,
        Array.prototype.slice.call(arguments, 1)
      );
    }, A.registerRDFParser = function(I, R) {
      q[I] = R;
    }, A.unregisterRDFParser = function(I) {
      delete q[I];
    }, A.registerRDFParser("application/n-quads", o.parse), A.registerRDFParser("application/nquads", o.parse), A.url = Je(), A.logEventHandler = k, A.logWarningEventHandler = C, A.safeEventHandler = T, A.setDefaultEventHandler = O, A.strictEventHandler = P, A.unhandledEventHandler = H, A.util = s, Object.assign(A, s), A.promises = A, A.RequestQueue = Oo(), A.JsonLdProcessor = Fu()(A), t.setupGlobals(A), t.setupDocumentLoaders(A);
    function E(I, {
      documentLoader: R = A.documentLoader,
      ...M
    }) {
      if (I && "compactionMap" in I)
        throw new n(
          '"compactionMap" not supported.',
          "jsonld.OptionsError"
        );
      if (I && "expansionMap" in I)
        throw new n(
          '"expansionMap" not supported.',
          "jsonld.OptionsError"
        );
      return Object.assign(
        {},
        { documentLoader: R },
        M,
        I,
        { eventHandler: B({ options: I }) }
      );
    }
    return A;
  }, G = function() {
    return F(function() {
      return G();
    });
  };
  return F(G), Qr = G, Qr;
}
var Ju = Hu();
const Bu = /* @__PURE__ */ os(Ju);
async function Xa(e, t, s = {}) {
  const a = {
    algorithm: "URDNA2015",
    format: "application/n-quads",
    safe: s.safe ?? !1
  };
  return t && (a.documentLoader = t), await Bu.normalize(e, a);
}
async function Gu(e, t, s, a = !1) {
  const [p, n] = await Promise.all([
    Xa(e, s, { safe: a }),
    Xa(t, s, { safe: a })
  ]), r = Yr("sha256").update(p, "utf8").digest(), o = Yr("sha256").update(n, "utf8").digest(), d = new Uint8Array(64);
  return d.set(o, 0), d.set(r, 32), d;
}
async function Ku(e, t, s = {}) {
  const a = e.proof;
  if (!a) throw new Error("No proof found on credential");
  if (a.cryptosuite !== "eddsa-rdfc-2022")
    throw new Error(`Unsupported cryptosuite: ${a.cryptosuite}`);
  if (a.created === void 0)
    throw new Error('eddsa-rdfc-2022 proof is missing the required "created" property.');
  const p = ["type", "cryptosuite", "proofPurpose", "verificationMethod", "created", "proofValue"];
  if (a.type !== "DataIntegrityProof" || a.proofPurpose !== "assertionMethod" || Object.keys(a).some((w) => !p.includes(w)) || typeof a.verificationMethod != "string" || typeof a.created != "string" || typeof a.proofValue != "string") return !1;
  const { proof: n, ...r } = e, { proofValue: o, ...d } = a, h = { ...d, "@context": r["@context"] }, v = await Gu(
    r,
    h,
    s.documentLoader,
    s.safe ?? !1
  );
  try {
    const w = so(a.proofValue);
    return await gu(w, v, t);
  } catch {
    return !1;
  }
}
const Zu = zl, Wu = nu, Qu = Object.freeze({
  RmAccreditation: `${et}accreditation.json`,
  RmOperationalScope: `${et}operational-scope.json`,
  RmCertificate: `${et}certificate.json`,
  RmStudy: `${et}study.json`,
  RmLabAuthority: `${et}lab-authority.json`,
  BitstringStatusListCredential: `${et}status-list.json`
});
function Xu(e) {
  return e === "BitstringStatusListCredential" ? [Rs] : [Rs, mc];
}
function St(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const Yu = (e) => e.replace(/~/g, "~0").replace(/\//g, "~1");
function ef(e, t) {
  if (!t.startsWith("/")) return [];
  let s = [{ pointer: "", value: e }];
  for (const a of t.slice(1).split("/")) {
    const p = [];
    for (const { pointer: n, value: r } of s)
      a === "*" ? Array.isArray(r) && r.forEach((o, d) => p.push({ pointer: `${n}/${d}`, value: o })) : St(r) && Object.hasOwn(r, a) && p.push({ pointer: `${n}/${Yu(a)}`, value: r[a] });
    s = p;
  }
  return s;
}
function ot(e, t, s = [], a = "executed") {
  return Object.freeze({
    state: e,
    execution: a,
    reasons: Object.freeze(t),
    sourcePointers: Object.freeze(s)
  });
}
const tf = (e) => ot("not_established", [e], [], "not_run");
function nf(e, t) {
  const s = Date.parse(t), a = typeof e.validFrom == "string" ? Date.parse(e.validFrom) : NaN, p = typeof e.validUntil == "string" ? Date.parse(e.validUntil) : NaN;
  if (!Number.isFinite(s) || !Number.isFinite(a) || !Number.isFinite(p))
    return ot("not_established", ["Validity period or evaluation time is missing or invalid."]);
  const n = ["/validFrom", "/validUntil"];
  return s < a ? ot("contradicted", [`Not yet valid at ${t}.`], n) : s > p ? ot("contradicted", [`Expired before ${t}.`], n) : ot("established", [`Valid at ${t}.`], n);
}
function rf(e, t) {
  return (Array.isArray(e.relatedResource) ? e.relatedResource : []).filter(St).map((a) => {
    const p = String(a.id);
    try {
      const n = Un(t.resolve(p).bytes);
      return n === a.digestSRI ? { id: p, state: "established", reason: "Digest matches the exact referenced bytes." } : { id: p, state: "contradicted", reason: `Digest mismatch: referenced bytes hash to ${n}.` };
    } catch (n) {
      const r = n instanceof be ? n.code : "UNAVAILABLE";
      return { id: p, state: "not_established", reason: `Referenced resource unavailable: ${r}.` };
    }
  });
}
async function sf(e, t, s) {
  const a = [], p = tf("Not evaluated because protection is not established."), n = (l = {}) => {
    const i = Ze(a.map((c) => c.state));
    return Object.freeze({
      artifactId: e,
      protection: Object.freeze({
        artifactId: e,
        ...ot(i, a.filter((c) => c.state !== "established").map((c) => `${c.check}: ${c.reason}`).concat(i === "established" ? ["Protection established from the original secured bytes."] : []))
      }),
      checks: Object.freeze(a.map((c) => Object.freeze(c))),
      validity: p,
      relatedResources: Object.freeze([]),
      facts: Object.freeze([]),
      ...l
    });
  }, r = (l, i, c, y = {}) => (a.push({ check: l, state: i, reason: c }), n(y));
  let o;
  try {
    o = t.resolve(e).bytes;
  } catch (l) {
    const i = l instanceof be ? l.code : "UNAVAILABLE";
    return r("resolve", "not_established", `Artifact is not available: ${i}.`);
  }
  const d = Un(o);
  a.push({ check: "resolve", state: "established", reason: `Resolved ${o.byteLength} bytes.` });
  let h;
  try {
    h = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(o));
  } catch {
    return r("parse", "contradicted", "Artifact bytes are not valid UTF-8 JSON.", { digestSRI: d });
  }
  if (!St(h)) return r("parse", "contradicted", "Artifact is not a JSON object.", { digestSRI: d });
  a.push({ check: "parse", state: "established", reason: "Strict UTF-8 JSON object." });
  const v = h["@context"], w = Xu(Array.isArray(h.type) ? h.type[1] : void 0);
  if (!Array.isArray(v) || v.length !== w.length || w.some((l, i) => v[i] !== l))
    return r(
      "carrier",
      "not_established",
      "Only the exact supported context combination for this type is accepted.",
      { digestSRI: d }
    );
  a.push({ check: "carrier", state: "established", reason: "Exact supported context combination." });
  const f = Array.isArray(h.type) ? h.type : [], u = f.length === 2 && f[0] === "VerifiableCredential" ? String(f[1]) : void 0, b = u === void 0 ? void 0 : Qu[u];
  if (b === void 0)
    return r("type", "not_established", "Credential type is not a recognized RM v1 artifact type.", { digestSRI: d });
  if ((St(h.credentialSchema) ? h.credentialSchema.id : void 0) !== b)
    return r("type", "contradicted", `${u} must declare schema ${b}.`, { digestSRI: d, artifactType: u });
  a.push({ check: "type", state: "established", reason: `${u} with its pinned schema.` });
  try {
    const l = new Zu({ allErrors: !0, strict: !0 });
    Wu(l);
    const i = JSON.parse(new TextDecoder().decode(t.resolve(b).bytes)), c = l.compile(i);
    if (!c(h)) {
      const y = (c.errors ?? []).map((x) => `${x.instancePath || "/"} ${x.message ?? ""}`).join("; ");
      return r("schema", "contradicted", `Schema validation failed: ${y}`, { digestSRI: d, artifactType: u });
    }
  } catch (l) {
    const i = l instanceof be ? l.code : "INVALID_SCHEMA";
    return r("schema", "not_established", `Pinned schema unavailable: ${i}.`, { digestSRI: d, artifactType: u });
  }
  a.push({ check: "schema", state: "established", reason: "Valid against the pinned schema." });
  const g = h.proof;
  if (Array.isArray(g))
    return r("proof", "not_established", "Proof sets and chains are unsupported in the initial slice.", { digestSRI: d, artifactType: u });
  if (!St(g))
    return r("proof", "not_established", "The artifact carries no proof.", { digestSRI: d, artifactType: u });
  a.push({ check: "proof", state: "established", reason: "One eddsa-rdfc-2022 assertionMethod proof." });
  const _ = $c(h.issuer, g.verificationMethod, t);
  if (_.state !== "established" || _.publicKey === void 0)
    return r(
      "key",
      _.state === "established" ? "not_established" : _.state,
      `${_.code}: ${_.reason}`,
      { digestSRI: d, artifactType: u, keyAuthorization: _ }
    );
  a.push({ check: "key", state: "established", reason: _.reason });
  try {
    const l = pc(t);
    if (!await Ku(h, _.publicKey, {
      documentLoader: l,
      safe: !0
    }))
      return r(
        "signature",
        "contradicted",
        "Signature does not verify over the safe canonical form.",
        { digestSRI: d, artifactType: u, keyAuthorization: _ }
      );
  } catch (l) {
    const i = l instanceof Error ? l.message.split(`
`)[0] : String(l);
    return r(
      "signature",
      "contradicted",
      `Safe JSON-LD processing rejected the artifact: ${i}`,
      { digestSRI: d, artifactType: u, keyAuthorization: _ }
    );
  }
  a.push({ check: "signature", state: "established", reason: "Ed25519 signature verifies (safe mode, offline catalog)." });
  const m = [];
  for (const l of s.manifest.factMappings) {
    const i = String(l.fact);
    for (const { pointer: c, value: y } of ef(h, String(l.nativePath)))
      m.push(Object.freeze({ fact: i, pointer: c, value: structuredClone(y) }));
  }
  return n({
    digestSRI: d,
    artifactType: u,
    keyAuthorization: _,
    validity: nf(h, s.evaluationTime),
    relatedResources: Object.freeze(rf(h, t).map((l) => Object.freeze(l))),
    facts: Object.freeze(m)
  });
}
const af = "https://vc4qi.example/bindings/rm/1#", vt = (e) => `${af}${e}`, ve = (e) => ({ state: "established", text: e }), Me = (e) => ({ state: "contradicted", text: e }), bt = (e) => ({ state: "not_established", text: e }), it = (e) => String(e).split(/[#/]/).pop();
function pt(e) {
  if (typeof e != "string" || !/^(0|[1-9][0-9]*)(\.[0-9]+)?$/.test(e)) return;
  const [t, s = ""] = e.split(".");
  return { n: BigInt(t + s), scale: s.length };
}
function wt(e, t) {
  const s = pt(e), a = pt(t), p = Math.max(s.scale, a.scale), n = s.n * 10n ** BigInt(p - s.scale), r = a.n * 10n ** BigInt(p - a.scale);
  return n < r ? -1 : n > r ? 1 : 0;
}
function of(e, t) {
  const s = pt(e), a = pt(t), p = Math.max(s.scale, a.scale), n = (s.n * 10n ** BigInt(p - s.scale) + a.n * 10n ** BigInt(p - a.scale)).toString().padStart(p + 1, "0");
  return p === 0 ? n : `${n.slice(0, -p)}.${n.slice(-p)}`;
}
const Xr = (e, t) => Array.isArray(e) && e.includes(t);
function cf({ A: e, H: t, O: s, S: a, D: p, anchors: n }) {
  const r = p.credentialSubject, o = r.materialPropertiesList[0].results[0], d = o.data.quantity, h = r.materials[0], v = d.value, w = d.uncertainty.expandedUncertainty, f = [
    d.quantityKind === vt("MassFraction") && d.unit.ucumCode === "mg/kg" ? ve("Mass fraction in mg/kg: supported by the binding.") : bt("Unsupported quantity kind or unit."),
    pt(v) && pt(w) ? ve(`Exact decimals: x = ${v}, U = ${w} mg/kg.`) : Me("Value or uncertainty is not a valid decimal."),
    d.uncertainty.coverageFactor === "2" ? ve("Coverage factor k = 2, as the binding requires.") : bt("Unsupported coverage factor.")
  ], u = s.credentialSubject.scope[0], b = e.credentialSubject.scope.find((i) => i.matrixIri === u.matrixIri && i.formIri === u.formIri && i.quantityKindIri === u.quantityKindIri && u.allowedPropertyIris.every((c) => i.allowedPropertyIris.includes(c)) && u.allowedMethodIris.every((c) => i.allowedMethodIris.includes(c)) && i.range.unit === u.range.unit && wt(u.range.from, i.range.from) >= 0 && wt(u.range.to, i.range.to) <= 0), S = [
    p.termsOfUse[0].authorizationCredential.id === s.id ? ve("D names operational scope O as its authorization (termsOfUse).") : bt("D names no recognized authorization."),
    s.credentialSubject.id === p.issuer && s.issuer === p.issuer && Xr(s.credentialSubject.permittedActivity, vt("issueRmCertificate")) ? ve("O is the producer's own scope for issuing RM certificates.") : Me("O does not belong to D's issuer."),
    s.termsOfUse[0].authorizationCredential.id === e.id && e.credentialSubject.id === s.issuer && Xr(e.credentialSubject.permittedActivity, vt("maintainRmScope")) ? ve("Accreditation A lets the producer maintain an operational scope.") : Me("No permission to maintain O."),
    n.includes(e.issuer) ? ve("A is issued by the configured trust anchor (fictional NAB).") : bt("A's issuer is not a configured anchor."),
    b ? ve(`O lies within A: methods ${u.allowedMethodIris.map(it).join(", ")} within ${b.allowedMethodIris.map(it).join(", ")}; ${u.range.from}–${u.range.to} within ${b.range.from}–${b.range.to} mg/kg.`) : Me("O is not contained in one record of A.")
  ], g = s.credentialSubject.scope.find((i) => i.matrixIri === h.matrixIri && i.formIri === h.formIri && i.quantityKindIri === d.quantityKind && i.allowedPropertyIris.includes(o.propertyIri) && i.allowedMethodIris.includes(o.methodIri) && i.range.unit === d.unit.ucumCode);
  let _;
  g ? wt(v, g.range.from) < 0 ? _ = Me(`${v} < ${g.range.from} mg/kg: below the accredited range.`) : wt(v, g.range.to) > 0 ? _ = Me(`${v} > ${g.range.to} mg/kg: above the accredited range.`) : _ = ve(`${g.range.from} ≤ ${v} ≤ ${g.range.to} mg/kg (record ${it(g.id)}).`) : _ = Me(`No record of O covers ${it(o.propertyIri)}, ${it(h.matrixIri)}, ${it(o.methodIri)}.`);
  const m = t.credentialSubject.scope[0], l = [
    p.evidence[0].id === a.id && a.credentialSubject.id === r.id && a.credentialSubject.propertyIri === o.propertyIri && a.credentialSubject.matrixIri === h.matrixIri ? ve("Study S concerns the same batch, property and matrix (evidence).") : Me("Study S concerns another batch or property."),
    a.credentialSubject.outcomeIri === vt("Homogeneous") ? ve("S reports the batch homogeneous.") : Me("S does not report homogeneity."),
    a.termsOfUse[0].authorizationCredential.id === t.id && t.credentialSubject.id === a.issuer && Xr(t.credentialSubject.permittedActivity, vt("issueRmStudy")) && m.studyTypeIris.includes(a.credentialSubject.studyTypeIri) && n.includes(t.issuer) ? ve("S's laboratory has its own authority for homogeneity studies (H).") : bt("S lacks its own laboratory authority.")
  ];
  return { mapping: f, authority: S, scope: _, support: l, x: v, U: w };
}
function df(e, t, s, a) {
  if (a !== "established")
    return { state: "not_established", run: !1, text: "Not asked: its prerequisites are not established." };
  const p = of(e, t);
  return wt(p, s) <= 0 ? { state: "established", run: !0, text: `${e} + ${t} = ${p} ≤ ${s} mg/kg.` } : { state: "contradicted", run: !0, text: `${e} + ${t} = ${p} > ${s} mg/kg.` };
}
const lf = {
  A: "https://nab.vc4qi.example/credentials/A",
  H: "https://nab.vc4qi.example/credentials/H",
  O: "https://producer.vc4qi.example/credentials/O",
  S: "https://lab.vc4qi.example/credentials/S"
}, uf = (e) => `https://producer.vc4qi.example/credentials/D${e}`, ff = ["https://nab.vc4qi.example/controller"], pf = "200", hf = "150", ss = hc(kn.manifest), mf = {
  resolve: 1,
  parse: 0,
  carrier: 0,
  type: 0,
  schema: 0,
  proof: 2,
  key: 2,
  signature: 2
};
async function Rf(e, t, s) {
  const a = uf(e), p = /* @__PURE__ */ new Map();
  if (t) {
    const $ = kn.files.find((j) => j.uri === a).text;
    p.set(a, $.replace(`"value": "${e}"`, `"value": "${hf}"`));
  }
  const n = kn.files.map(($) => {
    const j = p.get($.uri) ?? $.text, N = new TextEncoder().encode(j);
    return {
      uri: $.uri,
      mediaType: $.mediaType,
      origin: $.origin,
      version: $.version,
      bytes: N,
      digestSRI: p.has($.uri) ? Un(N) : $.digestSRI
    };
  }), r = new uc(n), o = { ...lf, D: a }, d = ["D", "O", "A", "S", "H"], h = {}, v = {}, w = {};
  for (const $ of d) {
    const j = r.openSession({ maxResources: 64, maxBytes: 2e6 });
    h[$] = await sf(o[$], j, { manifest: ss, evaluationTime: s }), v[$] = new TextDecoder().decode(n.find((N) => N.uri === o[$]).bytes), w[$] = JSON.parse(v[$]);
  }
  const f = { 0: [], 1: [], 2: [], 3: [] };
  for (const $ of d) {
    const j = h[$];
    for (const N of j.checks)
      f[mf[N.check]].push({ role: $, state: N.state, text: `${$}: ${N.check} — ${N.reason}` });
    for (const N of j.relatedResources)
      f[1].push({ role: $, state: N.state, text: `${$} → ${N.id.split("/").pop()}: ${N.reason}` });
    j.validity.execution === "executed" && f[3].push({ role: $, state: j.validity.state, text: `${$}: ${j.validity.reasons.join(" ")}` });
  }
  const u = ($) => $.length ? Ze($.map((j) => j.state)) : "not_established", b = Ze(d.map(($) => h[$].protection.state)), S = [
    { gate: 0, name: "Plan and structure", source: "repository", state: u(f[0]), checks: f[0] },
    { gate: 1, name: "Resource identity", source: "repository", state: u(f[1]), checks: f[1] },
    { gate: 2, name: "Protection", source: "repository", state: u(f[2]), checks: f[2] },
    {
      gate: 3,
      name: "Temporal applicability",
      source: "repository",
      state: f[3].length === d.length ? u(f[3]) : "not_established",
      checks: f[3].length ? f[3] : [{ state: "not_established", text: "Not evaluated: protection is not established." }]
    }
  ], g = Ze(S.map(($) => $.state));
  let _, m;
  const i = w.D.credentialSubject.materialPropertiesList[0].results[0].data.quantity;
  if (b === "established") {
    const $ = cf({ ...w, anchors: ff });
    _ = $.scope;
    const j = Ze([...$.authority, $.scope].map((k) => k.state)), N = Ze([g, ...[...$.mapping, ...$.authority, $.scope, ...$.support].map((k) => k.state)]);
    m = df($.x, $.U, pf, N), S.push(
      { gate: 4, name: "Meaning and mapping", source: "preview", state: u($.mapping), checks: $.mapping },
      { gate: 5, name: "Authority and scope", source: "preview", state: j, checks: [...$.authority, $.scope] },
      {
        gate: 6,
        name: "Support and decision",
        source: "preview",
        state: Ze([...$.support.map((k) => k.state), m.run ? m.state : "not_established"]),
        checks: [...$.support, m.run ? m : { state: "not_established", text: `Decision ${m.text}` }]
      }
    );
  } else
    for (const [$, j] of [[4, "Meaning and mapping"], [5, "Authority and scope"], [6, "Support and decision"]])
      S.push({
        gate: $,
        name: j,
        source: "preview",
        state: "not_run",
        checks: [{ state: "not_established", text: "Not asked: protection is not established, so no facts are read." }]
      });
  const c = S.map(($) => $.state === "not_run" ? "not_established" : $.state), y = c.includes("contradicted") ? "reject" : c.every(($) => $ === "established") ? "accept" : "not_established", x = S.find(($) => $.state === "contradicted")?.gate;
  return {
    x: e,
    tampered: t,
    documents: w,
    texts: v,
    artifacts: h,
    gates: S,
    protection: b,
    scope: _,
    conformity: m,
    verdict: y,
    failedGate: x,
    values: { x: i.value, U: i.uncertainty.expandedUncertainty }
  };
}
const jf = { binding: `${ss.id}@${ss.version}`, resources: kn.files.length };
export {
  ff as ANCHORS,
  pf as LIMIT,
  hf as TAMPERED_VALUE,
  lf as URI,
  jf as buildInfo,
  uf as certificateUri,
  Rf as evaluateScenario
};
