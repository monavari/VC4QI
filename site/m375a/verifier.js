var ko = Object.defineProperty;
var _s = (e) => {
  throw TypeError(e);
};
var Do = (e, t, s) => t in e ? ko(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var Ne = (e, t, s) => Do(e, typeof t != "symbol" ? t + "" : t, s), Ss = (e, t, s) => t.has(e) || _s("Cannot " + s);
var Re = (e, t, s) => (Ss(e, t, "read from private field"), s ? s.call(e) : t.get(e)), Rt = (e, t, s) => t.has(e) ? _s("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Xn = (e, t, s, o) => (Ss(e, t, "write to private field"), o ? o.call(e, s) : t.set(e, s), s);
const kn = { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/rm/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/BINDING_MANIFEST.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Contexts, schemas, controller documents, signed A/H/O/S/D fixtures and status lists are pinned and verify in TypeScript and Python. I3 authority routes and required support are evaluated; the I4 evaluators (claim scope coverage, conformity) and an independent transformation vector are still required before selection.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/rm/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/rm/1#RmAccreditation", "https://vc4qi.example/bindings/rm/1#RmOperationalScope", "https://vc4qi.example/bindings/rm/1#RmCertificate", "https://vc4qi.example/bindings/rm/1#RmStudy", "https://vc4qi.example/bindings/rm/1#RmLabAuthority", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential"], schemaUris: ["https://vc4qi.example/schemas/rm/1/accreditation.json", "https://vc4qi.example/schemas/rm/1/operational-scope.json", "https://vc4qi.example/schemas/rm/1/certificate.json", "https://vc4qi.example/schemas/rm/1/study.json", "https://vc4qi.example/schemas/rm/1/lab-authority.json", "https://vc4qi.example/schemas/rm/1/authorization-policy.json", "https://vc4qi.example/schemas/rm/1/study-reference.json", "https://vc4qi.example/schemas/rm/1/status-list.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/rm-v1/catalog.json", decimalEncoding: "JSON strings typed xsd:decimal for every quantity, bound and uncertainty", orderedCollections: ["materials", "materialPropertiesList", "results"] }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/rm/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/rm/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/bindings/rm/1#authorizationCredential" }, { fact: "requiredStudy", nativePath: "/evidence/*/id", expandedIri: "https://www.w3.org/2018/credentials#evidence" }, { fact: "validFrom", nativePath: "/validFrom", expandedIri: "https://www.w3.org/2018/credentials#validFrom" }, { fact: "validUntil", nativePath: "/validUntil", expandedIri: "https://www.w3.org/2018/credentials#validUntil" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/rm/1#activityTime" }, { fact: "selectedResult", nativePath: "/credentialSubject/materialPropertiesList/*/results/*", expandedIri: "https://vc4qi.example/bindings/rm/1#results" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, material: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 1 }, authorizingReferenceSelection: "by-declared-reference-type-per-route; resolved credential type must match (else contradicted); several of one type not_established", supportReferences: { minimum: 1 }, multipleRecognizedDeclarations: "unsupported-unless-exact-deterministic-composition-is-listed", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "evidence", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse authorizationCredential references on the credential chain; an authenticated grant found by other means establishes nothing (not_established)" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/bindings/rm/1#RmAuthorizationPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], supportEvidence: "https://vc4qi.example/bindings/rm/1#RmStudyReference", supportEvidenceEstablishes: ["support-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "support-applicability", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { issueRmCertificate: "https://vc4qi.example/bindings/rm/1#issueRmCertificate", maintainRmScope: "https://vc4qi.example/bindings/rm/1#maintainRmScope", issueRmStudy: "https://vc4qi.example/bindings/rm/1#issueRmStudy" }, rules: ["A grantee equals the producer exercising certificate issuance and scope maintenance.", "O issuer and grantee equal that producer and O is contained by A.", "D issuer equals O grantee.", "S issuer equals H laboratory grantee.", "Commissioning a study grants no laboratory competence."] }, scopeAndMapping: { mappingVersion: "rm-experimental-mapping-1", recordEvaluator: "https://vc4qi.example/evaluators/rm-complete-record/1", quantityEvaluator: "https://vc4qi.example/evaluators/exact-mass-fraction/1", dimensions: ["matrixIri", "formIri", "propertyIri", "methodIri", "quantityKindIri", "range"], units: { "mg/kg": "1e-6", "kg/kg": "1" }, boundaries: "inclusive", missingOrEmptyRestrictedDimension: "not_established", recordCombination: "one-complete-record-per-claim-no-splicing", uncertainty: { requiredCoverageFactor: "2", nonnegative: !0, accreditationCeiling: "none" }, unsupported: ["asymmetric-uncertainty", "display-label-equality", "substring-matching", "implicit-method-succession"] }, routesAndRestrictions: { certificateRoute: ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A"], installedCertificateRoutes: { "operational-scope": ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A", "A-issuer-is-accreditation-anchor"], "direct-accreditation": ["A-authorizes-D", "A-issuer-is-accreditation-anchor"] }, studyRoute: ["H-authorizes-S"], requiredSupport: ["S", "H"], globalRestrictions: ["applicable-suspension", "request-time-policy"], installedGlobalRestrictions: { "accreditation-suspension": "every usable anchor-issued RmAccreditation of the certificate issuer reached through the target's termsOfUse references, on any route, must carry a fresh issuer suspension status (Bitstring Status List, statusPurpose suspension) with its bit clear; missing or unreadable suspension status is not_established; unusable or unreferenced credentials are not restrictions" }, unusedAlternativeFailures: "diagnostic-only: only the target and the credentials on the selected route and support chains decide the request", routeComposition: "AND-within-route-OR-between-complete-routes", baselineAlternatives: 1, provenanceDoesNotEstablish: ["permission", "containment"] }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, proofCollections: "unsupported-in-initial-slice", status: "authenticated-current-revocation-status-required-for-A-O-D-S-H; suspension entries on accreditations are read only by the accreditation-suspension restriction", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], freshness: "verifier-profile maxAgeSeconds from the status list validFrom; no default", historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { objectApplicability: ["materialBatch", "activity", "method", "activityTime"], supportSubjectNeedNotEqualTargetIssuer: !0, mandatoryDisclosure: ["issuer", "credentialSubject/id", "activityTime", "selectedResult", "restrictions", "authorizingReference", "requiredStudy", "relatedResource", "proof"], missingMandatoryDisclosure: "not_established", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/plans/standards-first-acceptance.csv", testVectorRoots: ["testdata/regressions", "bindings/experimental/rm-v1/test-vectors"], implementationEvidence: "docs/plans/standards-first-i1-signed-slice-evidence.md", unsupported: ["production-accreditation", "legal-effect", "physical-sample-truth", "public-example-namespace-resolution", "general-ontology-reasoning", "wallet-interoperability", "external-recognition-adapter", "timestamp-service"] } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/accreditation.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-4/HRIid3rloEA/bzrxSOuX0HDc6ktQqgRFHFMo6x31/KPxID0i7C2Lq0IarqomYF", text: `{
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
      "oneOf": [
        {
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
              "enum": [
                "revocation",
                "suspension"
              ]
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
        {
          "type": "array",
          "minItems": 1,
          "maxItems": 2,
          "items": {
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
                "enum": [
                  "revocation",
                  "suspension"
                ]
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
          }
        }
      ]
    },
    "name": {
      "type": "string",
      "minLength": 1
    },
    "description": {
      "type": "string",
      "minLength": 1
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/operational-scope.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-79DisaPbx0bSZ8BkeTmJpEl6BCkVAvIppZx2x8Qly0U9FqLqR7kfcUJ4gVI+/Upm", text: `{
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
      "maxItems": 4,
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
              "id",
              "type"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uri"
              },
              "type": {
                "enum": [
                  "RmAccreditation",
                  "RmOperationalScope",
                  "RmLabAuthority"
                ]
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
      "oneOf": [
        {
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
              "enum": [
                "revocation",
                "suspension"
              ]
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
        {
          "type": "array",
          "minItems": 1,
          "maxItems": 2,
          "items": {
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
                "enum": [
                  "revocation",
                  "suspension"
                ]
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
          }
        }
      ]
    },
    "name": {
      "type": "string",
      "minLength": 1
    },
    "description": {
      "type": "string",
      "minLength": 1
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/certificate.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-vCOINisXVUOVD4qKyD2UssncVzO0TuZFctcrXNGDK9pHuTrtm4UsRpqHtux/2sgM", text: `{
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
      "maxItems": 4,
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
              "id",
              "type"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uri"
              },
              "type": {
                "enum": [
                  "RmAccreditation",
                  "RmOperationalScope",
                  "RmLabAuthority"
                ]
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
      "oneOf": [
        {
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
              "enum": [
                "revocation",
                "suspension"
              ]
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
        {
          "type": "array",
          "minItems": 1,
          "maxItems": 2,
          "items": {
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
                "enum": [
                  "revocation",
                  "suspension"
                ]
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
          }
        }
      ]
    },
    "name": {
      "type": "string",
      "minLength": 1
    },
    "description": {
      "type": "string",
      "minLength": 1
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/study.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-d6iGSwmSgUKkULcql60/D4w8OyI//p4OiuAIsdnc28MlIZLTNUuZ8/PBIFwCNVWh", text: `{
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
      "maxItems": 4,
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
              "id",
              "type"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uri"
              },
              "type": {
                "enum": [
                  "RmAccreditation",
                  "RmOperationalScope",
                  "RmLabAuthority"
                ]
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
      "oneOf": [
        {
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
              "enum": [
                "revocation",
                "suspension"
              ]
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
        {
          "type": "array",
          "minItems": 1,
          "maxItems": 2,
          "items": {
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
                "enum": [
                  "revocation",
                  "suspension"
                ]
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
          }
        }
      ]
    },
    "name": {
      "type": "string",
      "minLength": 1
    },
    "description": {
      "type": "string",
      "minLength": 1
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/lab-authority.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-T0JlkrZDUQAEyDB1FnhumcvLOX0EQfkxPDhhVyqIsCRyrmzJplE9vUfWfvuzcXE4", text: `{
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
      "oneOf": [
        {
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
              "enum": [
                "revocation",
                "suspension"
              ]
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
        {
          "type": "array",
          "minItems": 1,
          "maxItems": 2,
          "items": {
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
                "enum": [
                  "revocation",
                  "suspension"
                ]
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
          }
        }
      ]
    },
    "name": {
      "type": "string",
      "minLength": 1
    },
    "description": {
      "type": "string",
      "minLength": 1
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/status-list.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-qObySeCBPSMdWS8PlMteSnZQNfaUhJhCgD5CsJQQAzAu+Lv71bhSYPJLZEoQsr1Y", text: `{
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
          "enum": [
            "revocation",
            "suspension"
          ]
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/authorization-policy.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-SgMHl2otrEr6K1EKcdPpBqbXnl+k9PFvaIRzh4YMMaEmFCwRyPyTgWc06jsie/Cp", text: `{
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
        "id",
        "type"
      ],
      "properties": {
        "id": {
          "type": "string",
          "format": "uri"
        },
        "type": {
          "enum": [
            "RmAccreditation",
            "RmOperationalScope",
            "RmLabAuthority"
          ]
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
` }, { uri: "https://nab.vc4qi.example/status/suspension/1", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-sg9bnXGcF7z5cJ6E8sZW5aoX1sJK8isnoI022puRjFOZKPJT/XnUsOKrSpOhupOh", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://nab.vc4qi.example/status/suspension/1",
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
    "id": "https://nab.vc4qi.example/status/suspension/1#list",
    "type": "BitstringStatusList",
    "statusPurpose": "suspension",
    "encodedList": "uH4sIAAAAAAACA-3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAIC3AYbSVKsAQAAA"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://nab.vc4qi.example/controller#key-1",
    "created": "2026-09-01T00:00:00Z",
    "proofValue": "z3z5ZVpsa3WnmUxM7iKC1SXtjYZUxGEWYt86Jd5mfqrKRWuxw3ckx8Ew8WWxQnj7sVVpga6YM2dGxXUH5mSaimmxK"
  }
}
` }, { uri: "https://nab.vc4qi.example/credentials/A", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-o54lw6x99A1t2q2YuUJGsy0CTzTzTad1E9x/u3cQ3CtMu4oIesZUIVt32ipklpSM", text: `{
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
  "credentialStatus": [
    {
      "id": "https://nab.vc4qi.example/status/1#0",
      "type": "BitstringStatusListEntry",
      "statusPurpose": "revocation",
      "statusListIndex": "0",
      "statusListCredential": "https://nab.vc4qi.example/status/1"
    },
    {
      "id": "https://nab.vc4qi.example/status/suspension/1#0",
      "type": "BitstringStatusListEntry",
      "statusPurpose": "suspension",
      "statusListIndex": "0",
      "statusListCredential": "https://nab.vc4qi.example/status/suspension/1"
    }
  ],
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://nab.vc4qi.example/controller#key-1",
    "created": "2025-01-01T00:00:00Z",
    "proofValue": "z3EjeCUWE5DMfg8okHZSqMcL5VCnZ7gBM8o6S19iy7n4vWQqNuYAZ9yZ9de6gcFdpvoxjeptowkve4icruWXZxLWy"
  }
}
` }, { uri: "https://nab.vc4qi.example/credentials/A2", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-cnfD4XoCA255XUZncW8HvmFqfM+O/oAgpTLeLeTOeFkYLlyP0ZYh4rCvyDyocRhv", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/rm/1"
  ],
  "id": "https://nab.vc4qi.example/credentials/A2",
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
      "https://vc4qi.example/bindings/rm/1#issueRmCertificate"
    ],
    "scope": [
      {
        "id": "https://nab.vc4qi.example/credentials/A2#scope-as",
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
  "credentialStatus": [
    {
      "id": "https://nab.vc4qi.example/status/1#2",
      "type": "BitstringStatusListEntry",
      "statusPurpose": "revocation",
      "statusListIndex": "2",
      "statusListCredential": "https://nab.vc4qi.example/status/1"
    },
    {
      "id": "https://nab.vc4qi.example/status/suspension/1#2",
      "type": "BitstringStatusListEntry",
      "statusPurpose": "suspension",
      "statusListIndex": "2",
      "statusListCredential": "https://nab.vc4qi.example/status/suspension/1"
    }
  ],
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://nab.vc4qi.example/controller#key-1",
    "created": "2025-01-01T00:00:00Z",
    "proofValue": "zXX6vypRA4RTZhvhjChFj8UHJtnnGfuMqBzcjBAW43Q4AXhJppzMoWtfC6FEyhZYbaFnQfr8b1ghojBQVQxJRVmx"
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
` }, { uri: "https://producer.vc4qi.example/credentials/O", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-f3Evi/MQEbnrB+R7sFDOthCOZjSwIqB6N4YLknZkUgy7oTkHaC0tjqxdTCc2yntx", text: `{
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
        "id": "https://nab.vc4qi.example/credentials/A",
        "type": "RmAccreditation"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://nab.vc4qi.example/credentials/A",
      "digestSRI": "sha384-o54lw6x99A1t2q2YuUJGsy0CTzTzTad1E9x/u3cQ3CtMu4oIesZUIVt32ipklpSM"
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
    "proofValue": "z5Esgq3kykKoofqTot9kyNgftKDXJxQQHs64TMsGiq22fo7dUmCF8YBhjaX7cmoKdhvDKEc6vbGDMqwGdGyZEQyrb"
  }
}
` }, { uri: "https://lab.vc4qi.example/credentials/S", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-Glb8JY0hsYDKG2QTysAC6EhgHcxj+iVzfWbywOEHL9x8nGV0H+A3hOwLcq+TAXRA", text: `{
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
        "id": "https://nab.vc4qi.example/credentials/H",
        "type": "RmLabAuthority"
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
    "proofValue": "z3MQH4Luf7NvA16RoUTjHwARjrYNmUtCX7ELjwZACitu4c5CJzrB8deuXe62HXRPWqssSUtZZaogC6Y9anfPtVXaA"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D178", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-CI0Elbs++b8LcXS+xIOMSmb7cXMoX/sRg70qGjL4QWe+0stgjahRlgEsmslRpJ0y", text: `{
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
        "id": "https://producer.vc4qi.example/credentials/O",
        "type": "RmOperationalScope"
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
      "digestSRI": "sha384-f3Evi/MQEbnrB+R7sFDOthCOZjSwIqB6N4YLknZkUgy7oTkHaC0tjqxdTCc2yntx"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "digestSRI": "sha384-Glb8JY0hsYDKG2QTysAC6EhgHcxj+iVzfWbywOEHL9x8nGV0H+A3hOwLcq+TAXRA"
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
    "proofValue": "z5vnoLei7s7bR52HYrHucsoh43LLw1rpDcGEM9u382BVmxow6zEy6sqhVmv3ragqmgNnp4xjHPmxGGgseHawL3DHr"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D197", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-no+qE/IXwlSm1NJnmojKvhj5eZM0HN2wbgJsaHG3srjKgpDWP7fF21I6CgclWwOS", text: `{
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
        "id": "https://producer.vc4qi.example/credentials/O",
        "type": "RmOperationalScope"
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
      "digestSRI": "sha384-f3Evi/MQEbnrB+R7sFDOthCOZjSwIqB6N4YLknZkUgy7oTkHaC0tjqxdTCc2yntx"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "digestSRI": "sha384-Glb8JY0hsYDKG2QTysAC6EhgHcxj+iVzfWbywOEHL9x8nGV0H+A3hOwLcq+TAXRA"
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
    "proofValue": "zoZ9iFmEtZT5PYAM4ucs9nXZZbxS4BVBCm1j4vqBkDMUK9EqrbaRY8AJUJX1i8eB4EQYspRuafC3EsrqUKm2nqpB"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D520", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-17ftoYY5qqdwAAog4aB+VRX2NCssj9WumeznEj8RFjdrEUBoKC9/9oSfERlYoaw4", text: `{
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
        "id": "https://producer.vc4qi.example/credentials/O",
        "type": "RmOperationalScope"
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
      "digestSRI": "sha384-f3Evi/MQEbnrB+R7sFDOthCOZjSwIqB6N4YLknZkUgy7oTkHaC0tjqxdTCc2yntx"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "digestSRI": "sha384-Glb8JY0hsYDKG2QTysAC6EhgHcxj+iVzfWbywOEHL9x8nGV0H+A3hOwLcq+TAXRA"
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
    "proofValue": "z3v3UzmUd3wSzL9kw7ppcA1jxvDsFCqoh1xPnosSy5y65fQtcw3YyJTmoDtpPjG8dQLvvho43zh49zYZ6ytzAFwi3"
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
function xs(e, t = !0) {
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
function xt(...e) {
  for (let t = 0; t < e.length; t++)
    e[t].fill(0);
}
function Wn(e) {
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
  const t = (o) => e().update(Ya(o)).digest(), s = e();
  return t.outputLen = s.outputLen, t.blockLen = s.blockLen, t.create = () => e(), t;
}
function Vo(e, t, s, o) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, s, o);
  const p = BigInt(32), n = BigInt(4294967295), r = Number(s >> p & n), a = Number(s & n), d = o ? 4 : 0, y = o ? 0 : 4;
  e.setUint32(t + d, r, o), e.setUint32(t + y, a, o);
}
function zo(e, t, s) {
  return e & t ^ ~e & s;
}
function Fo(e, t, s) {
  return e & t ^ e & s ^ t & s;
}
class eo extends Uo {
  constructor(t, s, o, p) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = s, this.padOffset = o, this.isLE = p, this.buffer = new Uint8Array(t), this.view = Wn(this.buffer);
  }
  update(t) {
    xs(this), t = Ya(t), is(t);
    const { view: s, buffer: o, blockLen: p } = this, n = t.length;
    for (let r = 0; r < n; ) {
      const a = Math.min(p - this.pos, n - r);
      if (a === p) {
        const d = Wn(t);
        for (; p <= n - r; r += p)
          this.process(d, r);
        continue;
      }
      o.set(t.subarray(r, r + a), this.pos), this.pos += a, r += a, this.pos === p && (this.process(s, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    xs(this), Lo(t, this), this.finished = !0;
    const { buffer: s, view: o, blockLen: p, isLE: n } = this;
    let { pos: r } = this;
    s[r++] = 128, xt(this.buffer.subarray(r)), this.padOffset > p - r && (this.process(o, 0), r = 0);
    for (let w = r; w < p; w++)
      s[w] = 0;
    Vo(o, p - 8, BigInt(this.length * 8), n), this.process(o, 0);
    const a = Wn(t), d = this.outputLen;
    if (d % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const y = d / 4, g = this.get();
    if (y > g.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let w = 0; w < y; w++)
      a.setUint32(4 * w, g[w], n);
  }
  digest() {
    const { buffer: t, outputLen: s } = this;
    this.digestInto(t);
    const o = t.slice(0, s);
    return this.destroy(), o;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: s, buffer: o, length: p, finished: n, destroyed: r, pos: a } = this;
    return t.destroyed = r, t.finished = n, t.length = p, t.pos = a, p % s && t.buffer.set(o), t;
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
]), le = /* @__PURE__ */ Uint32Array.from([
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
]), jt = /* @__PURE__ */ BigInt(2 ** 32 - 1), $s = /* @__PURE__ */ BigInt(32);
function Ho(e, t = !1) {
  return t ? { h: Number(e & jt), l: Number(e >> $s & jt) } : { h: Number(e >> $s & jt) | 0, l: Number(e & jt) | 0 };
}
function Bo(e, t = !1) {
  const s = e.length;
  let o = new Uint32Array(s), p = new Uint32Array(s);
  for (let n = 0; n < s; n++) {
    const { h: r, l: a } = Ho(e[n], t);
    [o[n], p[n]] = [r, a];
  }
  return [o, p];
}
const Is = (e, t, s) => e >>> s, Es = (e, t, s) => e << 32 - s | t >>> s, We = (e, t, s) => e >>> s | t << 32 - s, Ye = (e, t, s) => e << 32 - s | t >>> s, At = (e, t, s) => e << 64 - s | t >>> s - 32, qt = (e, t, s) => e >>> s - 32 | t << 64 - s;
function Oe(e, t, s, o) {
  const p = (t >>> 0) + (o >>> 0);
  return { h: e + s + (p / 2 ** 32 | 0) | 0, l: p | 0 };
}
const Jo = (e, t, s) => (e >>> 0) + (t >>> 0) + (s >>> 0), Go = (e, t, s, o) => t + s + o + (e / 2 ** 32 | 0) | 0, Ko = (e, t, s, o) => (e >>> 0) + (t >>> 0) + (s >>> 0) + (o >>> 0), Zo = (e, t, s, o, p) => t + s + o + p + (e / 2 ** 32 | 0) | 0, Qo = (e, t, s, o, p) => (e >>> 0) + (t >>> 0) + (s >>> 0) + (o >>> 0) + (p >>> 0), Xo = (e, t, s, o, p, n) => t + s + o + p + n + (e / 2 ** 32 | 0) | 0, Wo = /* @__PURE__ */ Uint32Array.from([
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
    const { A: t, B: s, C: o, D: p, E: n, F: r, G: a, H: d } = this;
    return [t, s, o, p, n, r, a, d];
  }
  // prettier-ignore
  set(t, s, o, p, n, r, a, d) {
    this.A = t | 0, this.B = s | 0, this.C = o | 0, this.D = p | 0, this.E = n | 0, this.F = r | 0, this.G = a | 0, this.H = d | 0;
  }
  process(t, s) {
    for (let w = 0; w < 16; w++, s += 4)
      Ve[w] = t.getUint32(s, !1);
    for (let w = 16; w < 64; w++) {
      const u = Ve[w - 15], f = Ve[w - 2], b = je(u, 7) ^ je(u, 18) ^ u >>> 3, _ = je(f, 17) ^ je(f, 19) ^ f >>> 10;
      Ve[w] = _ + Ve[w - 7] + b + Ve[w - 16] | 0;
    }
    let { A: o, B: p, C: n, D: r, E: a, F: d, G: y, H: g } = this;
    for (let w = 0; w < 64; w++) {
      const u = je(a, 6) ^ je(a, 11) ^ je(a, 25), f = g + u + zo(a, d, y) + Wo[w] + Ve[w] | 0, _ = (je(o, 2) ^ je(o, 13) ^ je(o, 22)) + Fo(o, p, n) | 0;
      g = y, y = d, d = a, a = r + f | 0, r = n, n = p, p = o, o = f + _ | 0;
    }
    o = o + this.A | 0, p = p + this.B | 0, n = n + this.C | 0, r = r + this.D | 0, a = a + this.E | 0, d = d + this.F | 0, y = y + this.G | 0, g = g + this.H | 0, this.set(o, p, n, r, a, d, y, g);
  }
  roundClean() {
    xt(Ve);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), xt(this.buffer);
  }
}
const to = Bo([
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
    const { Ah: t, Al: s, Bh: o, Bl: p, Ch: n, Cl: r, Dh: a, Dl: d, Eh: y, El: g, Fh: w, Fl: u, Gh: f, Gl: b, Hh: _, Hl: v } = this;
    return [t, s, o, p, n, r, a, d, y, g, w, u, f, b, _, v];
  }
  // prettier-ignore
  set(t, s, o, p, n, r, a, d, y, g, w, u, f, b, _, v) {
    this.Ah = t | 0, this.Al = s | 0, this.Bh = o | 0, this.Bl = p | 0, this.Ch = n | 0, this.Cl = r | 0, this.Dh = a | 0, this.Dl = d | 0, this.Eh = y | 0, this.El = g | 0, this.Fh = w | 0, this.Fl = u | 0, this.Gh = f | 0, this.Gl = b | 0, this.Hh = _ | 0, this.Hl = v | 0;
  }
  process(t, s) {
    for (let l = 0; l < 16; l++, s += 4)
      ze[l] = t.getUint32(s), Fe[l] = t.getUint32(s += 4);
    for (let l = 16; l < 80; l++) {
      const i = ze[l - 15] | 0, c = Fe[l - 15] | 0, m = We(i, c, 1) ^ We(i, c, 8) ^ Is(i, c, 7), $ = Ye(i, c, 1) ^ Ye(i, c, 8) ^ Es(i, c, 7), x = ze[l - 2] | 0, j = Fe[l - 2] | 0, q = We(x, j, 19) ^ At(x, j, 61) ^ Is(x, j, 6), k = Ye(x, j, 19) ^ qt(x, j, 61) ^ Es(x, j, 6), C = Ko($, k, Fe[l - 7], Fe[l - 16]), T = Zo(C, m, q, ze[l - 7], ze[l - 16]);
      ze[l] = T | 0, Fe[l] = C | 0;
    }
    let { Ah: o, Al: p, Bh: n, Bl: r, Ch: a, Cl: d, Dh: y, Dl: g, Eh: w, El: u, Fh: f, Fl: b, Gh: _, Gl: v, Hh: S, Hl: h } = this;
    for (let l = 0; l < 80; l++) {
      const i = We(w, u, 14) ^ We(w, u, 18) ^ At(w, u, 41), c = Ye(w, u, 14) ^ Ye(w, u, 18) ^ qt(w, u, 41), m = w & f ^ ~w & _, $ = u & b ^ ~u & v, x = Qo(h, c, $, tc[l], Fe[l]), j = Xo(x, S, i, m, ec[l], ze[l]), q = x | 0, k = We(o, p, 28) ^ At(o, p, 34) ^ At(o, p, 39), C = Ye(o, p, 28) ^ qt(o, p, 34) ^ qt(o, p, 39), T = o & n ^ o & a ^ n & a, O = p & r ^ p & d ^ r & d;
      S = _ | 0, h = v | 0, _ = f | 0, v = b | 0, f = w | 0, b = u | 0, { h: w, l: u } = Oe(y | 0, g | 0, j | 0, q | 0), y = a | 0, g = d | 0, a = n | 0, d = r | 0, n = o | 0, r = p | 0;
      const J = Jo(q, C, O);
      o = Go(J, j, k, T), p = J | 0;
    }
    ({ h: o, l: p } = Oe(this.Ah | 0, this.Al | 0, o | 0, p | 0)), { h: n, l: r } = Oe(this.Bh | 0, this.Bl | 0, n | 0, r | 0), { h: a, l: d } = Oe(this.Ch | 0, this.Cl | 0, a | 0, d | 0), { h: y, l: g } = Oe(this.Dh | 0, this.Dl | 0, y | 0, g | 0), { h: w, l: u } = Oe(this.Eh | 0, this.El | 0, w | 0, u | 0), { h: f, l: b } = Oe(this.Fh | 0, this.Fl | 0, f | 0, b | 0), { h: _, l: v } = Oe(this.Gh | 0, this.Gl | 0, _ | 0, v | 0), { h: S, l: h } = Oe(this.Hh | 0, this.Hl | 0, S | 0, h | 0), this.set(o, p, n, r, a, d, y, g, w, u, f, b, _, v, S, h);
  }
  roundClean() {
    xt(ze, Fe);
  }
  destroy() {
    xt(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class nc extends no {
  constructor() {
    super(48), this.Ah = le[0] | 0, this.Al = le[1] | 0, this.Bh = le[2] | 0, this.Bl = le[3] | 0, this.Ch = le[4] | 0, this.Cl = le[5] | 0, this.Dh = le[6] | 0, this.Dl = le[7] | 0, this.Eh = le[8] | 0, this.El = le[9] | 0, this.Fh = le[10] | 0, this.Fl = le[11] | 0, this.Gh = le[12] | 0, this.Gl = le[13] | 0, this.Hh = le[14] | 0, this.Hl = le[15] | 0;
  }
}
const rc = /* @__PURE__ */ as(() => new Yo()), sc = /* @__PURE__ */ as(() => new no()), ic = /* @__PURE__ */ as(() => new nc()), ac = rc, oc = sc, cc = ic;
class dc {
  constructor(t) {
    Ne(this, "_chunks", []);
    Ne(this, "_algo");
    this._algo = t === "sha384" ? "sha384" : t === "sha512" ? "sha512" : "sha256";
  }
  update(t, s) {
    const o = typeof t == "string" ? new TextEncoder().encode(t) : t;
    return this._chunks.push(o), this;
  }
  digest(t) {
    const s = this._chunks.reduce((r, a) => r + a.length, 0), o = new Uint8Array(s);
    let p = 0;
    for (const r of this._chunks)
      o.set(r, p), p += r.length;
    let n;
    return this._algo === "sha384" ? n = cc(o) : this._algo === "sha512" ? n = oc(o) : n = ac(o), t === "base64" ? btoa(String.fromCharCode(...n)) : t === "hex" ? Array.from(n).map((r) => r.toString(16).padStart(2, "0")).join("") : n;
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
function uc(e, t) {
  if (e.trim().length === 0)
    throw new be("INVALID_RESOURCE", `${t} must be nonempty.`);
}
function Un(e) {
  return `sha384-${Yr("sha384").update(e).digest("base64")}`;
}
var ct;
class lc {
  constructor(t) {
    Rt(this, ct, /* @__PURE__ */ new Map());
    for (const s of t) {
      for (const [p, n] of Object.entries({
        uri: s.uri,
        mediaType: s.mediaType,
        origin: s.origin,
        version: s.version
      })) uc(n, p);
      if (Re(this, ct).has(s.uri))
        throw new be("DUPLICATE_RESOURCE", `Duplicate static resource: ${s.uri}`);
      const o = Un(s.bytes);
      if (o !== s.digestSRI)
        throw new be(
          "INTEGRITY_MISMATCH",
          `Static resource ${s.uri} has ${o}; expected ${s.digestSRI}.`
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
var dt, ut;
class fc {
  constructor(t, s) {
    Rt(this, dt, 0);
    Rt(this, ut, 0);
    this.resources = t, this.budget = s;
  }
  get usage() {
    return Object.freeze({ resources: Re(this, dt), bytes: Re(this, ut) });
  }
  resolve(t) {
    const s = this.resources.get(t);
    if (!s)
      throw new be("RESOURCE_NOT_FOUND", `Static resource is not installed: ${t}`);
    if (Re(this, dt) + 1 > this.budget.maxResources || Re(this, ut) + s.bytes.byteLength > this.budget.maxBytes)
      throw new be("RESOURCE_BUDGET_EXCEEDED", `Static resource budget exceeded at ${t}.`);
    return Xn(this, dt, Re(this, dt) + 1), Xn(this, ut, Re(this, ut) + s.bytes.byteLength), { ...s, bytes: Uint8Array.from(s.bytes) };
  }
}
dt = new WeakMap(), ut = new WeakMap();
function pc(e) {
  return async (t) => {
    const s = e.resolve(t);
    if (s.mediaType !== "application/json" && s.mediaType !== "application/ld+json" && !s.mediaType.endsWith("+json"))
      throw new be(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} has unsupported media type ${s.mediaType}.`
      );
    let o;
    try {
      const p = new TextDecoder("utf-8", { fatal: !0 }).decode(s.bytes);
      o = JSON.parse(p);
    } catch (p) {
      throw new be(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} is not valid UTF-8 JSON: ${String(p)}.`
      );
    }
    return { contextUrl: null, document: o, documentUrl: t };
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
function Nt(e) {
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
  if (!Nt(e)) throw new TypeError("Binding manifest must be an object.");
  if (Object.keys(e).length !== Yn.length || Yn.some((s) => !Object.hasOwn(e, s)))
    throw new TypeError("Binding manifest must contain exactly the supported top-level categories.");
  if (typeof e.id != "string" || e.id.length === 0 || typeof e.version != "string" || e.version.length === 0 || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Binding manifest identity, version, or status is invalid.");
  if (!Nt(e.installation) || e.installation.status !== "incomplete" && e.installation.status !== "installable" || typeof e.installation.reason != "string" || e.installation.reason.length === 0 || !Array.isArray(e.installation.pendingResources) || e.installation.pendingResources.some((s) => typeof s != "string" || s.length === 0))
    throw new TypeError("Binding manifest installation state is invalid.");
  if (!Array.isArray(e.factMappings) || e.factMappings.length === 0 || e.factMappings.some((s) => !Nt(s)))
    throw new TypeError("Binding manifest factMappings must be a nonempty object array.");
  for (const s of Yn.slice(4))
    if (!(s === "installation" || s === "factMappings") && (!Nt(e[s]) || Object.keys(e[s]).length === 0))
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
    const a = yc.indexOf(r);
    if (a === -1) throw new Error(`Invalid base58btc character: '${r}'`);
    s = s * gc + BigInt(a);
  }
  const o = [];
  for (; s > 0n; )
    o.push(Number(s & 0xffn)), s >>= 8n;
  o.reverse();
  const p = Uint8Array.from(o), n = new Uint8Array(t + p.length);
  return n.set(p, t), n;
}
function so(e) {
  if (!e.startsWith("z"))
    throw new Error(`Expected multibase base58btc prefix 'z', got '${e[0]}'`);
  return vc(e.slice(1));
}
const js = [237, 1], bc = ["revoked", "expires"];
function ce(e, t, s, o = {}) {
  return Object.freeze({ state: e, code: t, reason: s, ...o });
}
function Nn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function wc(e) {
  if (typeof e == "string" && e.length > 0) return e;
  if (Nn(e) && typeof e.id == "string" && e.id.length > 0) return e.id;
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
function xc(e, t, s) {
  const o = wc(e);
  if (o === void 0)
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
  if (p !== o)
    return ce(
      "contradicted",
      "NOT_ISSUER_CONTROLLER",
      `Verification method ${t} is not in issuer ${o}'s controller document.`
    );
  let n, r;
  try {
    const u = s.resolve(p);
    r = u.digestSRI, n = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(u.bytes));
  } catch (u) {
    return u instanceof be ? ce(
      "not_established",
      "CONTROLLER_NOT_INSTALLED",
      `Controller document ${p} is not available: ${u.code}.`
    ) : ce(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${p} is not valid UTF-8 JSON.`
    );
  }
  if (!Nn(n))
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
  const d = (Array.isArray(n.verificationMethod) ? n.verificationMethod : []).filter((u) => Nn(u) && u.id === t);
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
  const y = d[0];
  if (y.type !== "Multikey")
    return ce(
      "not_established",
      "METHOD_TYPE_UNSUPPORTED",
      `Verification method type ${String(y.type)} is not supported; Multikey is required.`
    );
  if (y.controller !== p)
    return ce(
      "contradicted",
      "METHOD_CONTROLLER_MISMATCH",
      `${t} is controlled by ${String(y.controller)}, not ${p}.`
    );
  if (bc.some((u) => Object.hasOwn(y, u)))
    return ce(
      "not_established",
      "METHOD_LIFECYCLE_UNSUPPORTED",
      "Key revocation/expiry metadata is not supported in the initial slice."
    );
  const g = Sc(y.publicKeyMultibase);
  if (g === void 0)
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
    { publicKey: g, verificationMethod: t, controllerDocumentDigest: r }
  ) : w.some((u) => Nn(u) && u.id === t) ? ce(
    "not_established",
    "EMBEDDED_METHOD_UNSUPPORTED",
    "Embedded assertionMethod entries are not supported; a reference is required."
  ) : ce(
    "contradicted",
    "NOT_ASSERTION_METHOD",
    `${t} is not authorized for assertionMethod.`
  );
}
function $c(e, t) {
  if (e.length === 0)
    throw new TypeError(`${t} requires at least one semantic state.`);
  for (const s of e)
    if (!["established", "contradicted", "not_established"].includes(s))
      throw new TypeError(`${t} received unsupported semantic state: ${String(s)}.`);
}
function Ze(e) {
  return $c(e, "semanticAnd"), e.includes("contradicted") ? "contradicted" : e.every((t) => t === "established") ? "established" : "not_established";
}
var As = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function os(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ic(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var s = function o() {
      return this instanceof o ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    s.prototype = t.prototype;
  } else s = {};
  return Object.defineProperty(s, "__esModule", { value: !0 }), Object.keys(e).forEach(function(o) {
    var p = Object.getOwnPropertyDescriptor(e, o);
    Object.defineProperty(s, o, p.get ? p : {
      enumerable: !0,
      get: function() {
        return e[o];
      }
    });
  }), s;
}
var Ot = { exports: {} }, er = {}, Pe = {}, Je = {}, tr = {}, nr = {}, rr = {}, qs;
function Dn() {
  return qs || (qs = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class s extends t {
      constructor(h) {
        if (super(), !e.IDENTIFIER.test(h))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = h;
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
    class o extends t {
      constructor(h) {
        super(), this._items = typeof h == "string" ? [h] : h;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const h = this._items[0];
        return h === "" || h === '""';
      }
      get str() {
        var h;
        return (h = this._str) !== null && h !== void 0 ? h : this._str = this._items.reduce((l, i) => `${l}${i}`, "");
      }
      get names() {
        var h;
        return (h = this._names) !== null && h !== void 0 ? h : this._names = this._items.reduce((l, i) => (i instanceof s && (l[i.str] = (l[i.str] || 0) + 1), l), {});
      }
    }
    e._Code = o, e.nil = new o("");
    function p(S, ...h) {
      const l = [S[0]];
      let i = 0;
      for (; i < h.length; )
        a(l, h[i]), l.push(S[++i]);
      return new o(l);
    }
    e._ = p;
    const n = new o("+");
    function r(S, ...h) {
      const l = [f(S[0])];
      let i = 0;
      for (; i < h.length; )
        l.push(n), a(l, h[i]), l.push(n, f(S[++i]));
      return d(l), new o(l);
    }
    e.str = r;
    function a(S, h) {
      h instanceof o ? S.push(...h._items) : h instanceof s ? S.push(h) : S.push(w(h));
    }
    e.addCodeArg = a;
    function d(S) {
      let h = 1;
      for (; h < S.length - 1; ) {
        if (S[h] === n) {
          const l = y(S[h - 1], S[h + 1]);
          if (l !== void 0) {
            S.splice(h - 1, 3, l);
            continue;
          }
          S[h++] = "+";
        }
        h++;
      }
    }
    function y(S, h) {
      if (h === '""')
        return S;
      if (S === '""')
        return h;
      if (typeof S == "string")
        return h instanceof s || S[S.length - 1] !== '"' ? void 0 : typeof h != "string" ? `${S.slice(0, -1)}${h}"` : h[0] === '"' ? S.slice(0, -1) + h.slice(1) : void 0;
      if (typeof h == "string" && h[0] === '"' && !(S instanceof s))
        return `"${S}${h.slice(1)}`;
    }
    function g(S, h) {
      return h.emptyStr() ? S : S.emptyStr() ? h : r`${S}${h}`;
    }
    e.strConcat = g;
    function w(S) {
      return typeof S == "number" || typeof S == "boolean" || S === null ? S : f(Array.isArray(S) ? S.join(",") : S);
    }
    function u(S) {
      return new o(f(S));
    }
    e.stringify = u;
    function f(S) {
      return JSON.stringify(S).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = f;
    function b(S) {
      return typeof S == "string" && e.IDENTIFIER.test(S) ? new o(`.${S}`) : p`[${S}]`;
    }
    e.getProperty = b;
    function _(S) {
      if (typeof S == "string" && e.IDENTIFIER.test(S))
        return new o(`${S}`);
      throw new Error(`CodeGen: invalid export name: ${S}, use explicit $id name mapping`);
    }
    e.getEsmExportName = _;
    function v(S) {
      return new o(S.toString());
    }
    e.regexpCode = v;
  })(rr)), rr;
}
var sr = {}, Ns;
function Os() {
  return Ns || (Ns = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Dn();
    class s extends Error {
      constructor(y) {
        super(`CodeGen: "code" for ${y} not defined`), this.value = y.value;
      }
    }
    var o;
    (function(d) {
      d[d.Started = 0] = "Started", d[d.Completed = 1] = "Completed";
    })(o || (e.UsedValueState = o = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class p {
      constructor({ prefixes: y, parent: g } = {}) {
        this._names = {}, this._prefixes = y, this._parent = g;
      }
      toName(y) {
        return y instanceof t.Name ? y : this.name(y);
      }
      name(y) {
        return new t.Name(this._newName(y));
      }
      _newName(y) {
        const g = this._names[y] || this._nameGroup(y);
        return `${y}${g.index++}`;
      }
      _nameGroup(y) {
        var g, w;
        if (!((w = (g = this._parent) === null || g === void 0 ? void 0 : g._prefixes) === null || w === void 0) && w.has(y) || this._prefixes && !this._prefixes.has(y))
          throw new Error(`CodeGen: prefix "${y}" is not allowed in this scope`);
        return this._names[y] = { prefix: y, index: 0 };
      }
    }
    e.Scope = p;
    class n extends t.Name {
      constructor(y, g) {
        super(g), this.prefix = y;
      }
      setValue(y, { property: g, itemIndex: w }) {
        this.value = y, this.scopePath = (0, t._)`.${new t.Name(g)}[${w}]`;
      }
    }
    e.ValueScopeName = n;
    const r = (0, t._)`\n`;
    class a extends p {
      constructor(y) {
        super(y), this._values = {}, this._scope = y.scope, this.opts = { ...y, _n: y.lines ? r : t.nil };
      }
      get() {
        return this._scope;
      }
      name(y) {
        return new n(y, this._newName(y));
      }
      value(y, g) {
        var w;
        if (g.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const u = this.toName(y), { prefix: f } = u, b = (w = g.key) !== null && w !== void 0 ? w : g.ref;
        let _ = this._values[f];
        if (_) {
          const h = _.get(b);
          if (h)
            return h;
        } else
          _ = this._values[f] = /* @__PURE__ */ new Map();
        _.set(b, u);
        const v = this._scope[f] || (this._scope[f] = []), S = v.length;
        return v[S] = g.ref, u.setValue(g, { property: f, itemIndex: S }), u;
      }
      getValue(y, g) {
        const w = this._values[y];
        if (w)
          return w.get(g);
      }
      scopeRefs(y, g = this._values) {
        return this._reduceValues(g, (w) => {
          if (w.scopePath === void 0)
            throw new Error(`CodeGen: name "${w}" has no value`);
          return (0, t._)`${y}${w.scopePath}`;
        });
      }
      scopeCode(y = this._values, g, w) {
        return this._reduceValues(y, (u) => {
          if (u.value === void 0)
            throw new Error(`CodeGen: name "${u}" has no value`);
          return u.value.code;
        }, g, w);
      }
      _reduceValues(y, g, w = {}, u) {
        let f = t.nil;
        for (const b in y) {
          const _ = y[b];
          if (!_)
            continue;
          const v = w[b] = w[b] || /* @__PURE__ */ new Map();
          _.forEach((S) => {
            if (v.has(S))
              return;
            v.set(S, o.Started);
            let h = g(S);
            if (h) {
              const l = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              f = (0, t._)`${f}${l} ${S} = ${h};${this.opts._n}`;
            } else if (h = u?.(S))
              f = (0, t._)`${f}${h}${this.opts._n}`;
            else
              throw new s(S);
            v.set(S, o.Completed);
          });
        }
        return f;
      }
    }
    e.ValueScope = a;
  })(sr)), sr;
}
var Ps;
function ee() {
  return Ps || (Ps = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Dn(), s = /* @__PURE__ */ Os();
    var o = /* @__PURE__ */ Dn();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return o._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return o.str;
    } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
      return o.strConcat;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return o.nil;
    } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
      return o.getProperty;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return o.stringify;
    } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
      return o.regexpCode;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return o.Name;
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
    class a extends n {
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
    class d extends a {
      constructor(E, I, R, M) {
        super(E, R, M), this.op = I;
      }
      render({ _n: E }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + E;
      }
    }
    class y extends n {
      constructor(E) {
        super(), this.label = E, this.names = {};
      }
      render({ _n: E }) {
        return `${this.label}:` + E;
      }
    }
    class g extends n {
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
      optimizeNames(E, I) {
        return this.code = O(this.code, E, I), this;
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
          const B = R[M];
          B.optimizeNames(E, I) || (J(E, B.names), R.splice(M, 1));
        }
        return R.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((E, I) => C(E, I.names), {});
      }
    }
    class b extends f {
      render(E) {
        return "{" + E._n + super.render(E) + "}" + E._n;
      }
    }
    class _ extends f {
    }
    class v extends b {
    }
    v.kind = "else";
    class S extends b {
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
          I = this.else = Array.isArray(R) ? new v(R) : R;
        }
        if (I)
          return E === !1 ? I instanceof S ? I : I.nodes : this.nodes.length ? this : new S(N(E), I instanceof S ? [I] : I.nodes);
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
    S.kind = "if";
    class h extends b {
    }
    h.kind = "for";
    class l extends h {
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
    class i extends h {
      constructor(E, I, R, M) {
        super(), this.varKind = E, this.name = I, this.from = R, this.to = M;
      }
      render(E) {
        const I = E.es5 ? s.varKinds.var : this.varKind, { name: R, from: M, to: B } = this;
        return `for(${I} ${R}=${M}; ${R}<${B}; ${R}++)` + super.render(E);
      }
      get names() {
        const E = T(super.names, this.from);
        return T(E, this.to);
      }
    }
    class c extends h {
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
    class m extends b {
      constructor(E, I, R) {
        super(), this.name = E, this.args = I, this.async = R;
      }
      render(E) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(E);
      }
    }
    m.kind = "func";
    class $ extends f {
      render(E) {
        return "return " + super.render(E);
      }
    }
    $.kind = "return";
    class x extends b {
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
    class q extends b {
      render(E) {
        return "finally" + super.render(E);
      }
    }
    q.kind = "finally";
    class k {
      constructor(E, I = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...I, _n: I.lines ? `
` : "" }, this._extScope = E, this._scope = new s.Scope({ parent: E }), this._nodes = [new _()];
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
        const B = this._scope.toName(I);
        return R !== void 0 && M && (this._constants[B.str] = R), this._leafNode(new r(E, B, R)), B;
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
        return this._leafNode(new a(E, I, R));
      }
      // `+=` code
      add(E, I) {
        return this._leafNode(new d(E, e.operators.ADD, I));
      }
      // appends passed SafeExpr to code or executes Block
      code(E) {
        return typeof E == "function" ? E() : E !== t.nil && this._leafNode(new u(E)), this;
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
        if (this._blockNode(new S(E)), I && R)
          this.code(I).else().code(R).endIf();
        else if (I)
          this.code(I).endIf();
        else if (R)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(E) {
        return this._elseNode(new S(E));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new v());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(S, v);
      }
      _for(E, I) {
        return this._blockNode(E), I && this.code(I).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(E, I) {
        return this._for(new l(E), I);
      }
      // `for` statement for a range of values
      forRange(E, I, R, M, B = this.opts.es5 ? s.varKinds.var : s.varKinds.let) {
        const Q = this._scope.toName(E);
        return this._for(new i(B, Q, I, R), () => M(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(E, I, R, M = s.varKinds.const) {
        const B = this._scope.toName(E);
        if (this.opts.es5) {
          const Q = I instanceof t.Name ? I : this.var("_arr", I);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (K) => {
            this.var(B, (0, t._)`${Q}[${K}]`), R(B);
          });
        }
        return this._for(new c("of", M, B, I), () => R(B));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(E, I, R, M = this.opts.es5 ? s.varKinds.var : s.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(E, (0, t._)`Object.keys(${I})`, R);
        const B = this._scope.toName(E);
        return this._for(new c("in", M, B, I), () => R(B));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(h);
      }
      // `label` statement
      label(E) {
        return this._leafNode(new y(E));
      }
      // `break` statement
      break(E) {
        return this._leafNode(new g(E));
      }
      // `return` statement
      return(E) {
        const I = new $();
        if (this._blockNode(I), this.code(E), I.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode($);
      }
      // `try` statement
      try(E, I, R) {
        if (!I && !R)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const M = new x();
        if (this._blockNode(M), this.code(E), I) {
          const B = this.name("e");
          this._currNode = M.catch = new j(B), I(B);
        }
        return R && (this._currNode = M.finally = new q(), this.code(R)), this._endBlockNode(j, q);
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
        return this._blockNode(new m(E, I, R)), M && this.code(M).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(m);
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
        if (!(I instanceof S))
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
      return new t._Code(D._items.reduce((B, Q) => (Q instanceof t.Name && (Q = R(Q)), Q instanceof t._Code ? B.push(...Q._items) : B.push(Q), B), []));
      function R(B) {
        const Q = I[B.str];
        return Q === void 0 || E[B.str] !== 1 ? B : (delete E[B.str], Q);
      }
      function M(B) {
        return B instanceof t._Code && B._items.some((Q) => Q instanceof t.Name && E[Q.str] === 1 && I[Q.str] !== void 0);
      }
    }
    function J(D, E) {
      for (const I in E)
        D[I] = (D[I] || 0) - (E[I] || 0);
    }
    function N(D) {
      return typeof D == "boolean" || typeof D == "number" || D === null ? !D : (0, t._)`!${U(D)}`;
    }
    e.not = N;
    const H = P(e.operators.AND);
    function F(...D) {
      return D.reduce(H);
    }
    e.and = F;
    const G = P(e.operators.OR);
    function A(...D) {
      return D.reduce(G);
    }
    e.or = A;
    function P(D) {
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
    const m = {};
    for (const $ of c)
      m[$] = !0;
    return m;
  }
  te.toHash = s;
  function o(c, m) {
    return typeof m == "boolean" ? m : Object.keys(m).length === 0 ? !0 : (p(c, m), !n(m, c.self.RULES.all));
  }
  te.alwaysValidSchema = o;
  function p(c, m = c.schema) {
    const { opts: $, self: x } = c;
    if (!$.strictSchema || typeof m == "boolean")
      return;
    const j = x.RULES.keywords;
    for (const q in m)
      j[q] || i(c, `unknown keyword: "${q}"`);
  }
  te.checkUnknownRules = p;
  function n(c, m) {
    if (typeof c == "boolean")
      return !c;
    for (const $ in c)
      if (m[$])
        return !0;
    return !1;
  }
  te.schemaHasRules = n;
  function r(c, m) {
    if (typeof c == "boolean")
      return !c;
    for (const $ in c)
      if ($ !== "$ref" && m.all[$])
        return !0;
    return !1;
  }
  te.schemaHasRulesButRef = r;
  function a({ topSchemaRef: c, schemaPath: m }, $, x, j) {
    if (!j) {
      if (typeof $ == "number" || typeof $ == "boolean")
        return $;
      if (typeof $ == "string")
        return (0, e._)`${$}`;
    }
    return (0, e._)`${c}${m}${(0, e.getProperty)(x)}`;
  }
  te.schemaRefOrVal = a;
  function d(c) {
    return w(decodeURIComponent(c));
  }
  te.unescapeFragment = d;
  function y(c) {
    return encodeURIComponent(g(c));
  }
  te.escapeFragment = y;
  function g(c) {
    return typeof c == "number" ? `${c}` : c.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  te.escapeJsonPointer = g;
  function w(c) {
    return c.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  te.unescapeJsonPointer = w;
  function u(c, m) {
    if (Array.isArray(c))
      for (const $ of c)
        m($);
    else
      m(c);
  }
  te.eachItem = u;
  function f({ mergeNames: c, mergeToName: m, mergeValues: $, resultToName: x }) {
    return (j, q, k, C) => {
      const T = k === void 0 ? q : k instanceof e.Name ? (q instanceof e.Name ? c(j, q, k) : m(j, q, k), k) : q instanceof e.Name ? (m(j, k, q), q) : $(q, k);
      return C === e.Name && !(T instanceof e.Name) ? x(j, T) : T;
    };
  }
  te.mergeEvaluated = {
    props: f({
      mergeNames: (c, m, $) => c.if((0, e._)`${$} !== true && ${m} !== undefined`, () => {
        c.if((0, e._)`${m} === true`, () => c.assign($, !0), () => c.assign($, (0, e._)`${$} || {}`).code((0, e._)`Object.assign(${$}, ${m})`));
      }),
      mergeToName: (c, m, $) => c.if((0, e._)`${$} !== true`, () => {
        m === !0 ? c.assign($, !0) : (c.assign($, (0, e._)`${$} || {}`), _(c, $, m));
      }),
      mergeValues: (c, m) => c === !0 ? !0 : { ...c, ...m },
      resultToName: b
    }),
    items: f({
      mergeNames: (c, m, $) => c.if((0, e._)`${$} !== true && ${m} !== undefined`, () => c.assign($, (0, e._)`${m} === true ? true : ${$} > ${m} ? ${$} : ${m}`)),
      mergeToName: (c, m, $) => c.if((0, e._)`${$} !== true`, () => c.assign($, m === !0 ? !0 : (0, e._)`${$} > ${m} ? ${$} : ${m}`)),
      mergeValues: (c, m) => c === !0 ? !0 : Math.max(c, m),
      resultToName: (c, m) => c.var("items", m)
    })
  };
  function b(c, m) {
    if (m === !0)
      return c.var("props", !0);
    const $ = c.var("props", (0, e._)`{}`);
    return m !== void 0 && _(c, $, m), $;
  }
  te.evaluatedPropsToName = b;
  function _(c, m, $) {
    Object.keys($).forEach((x) => c.assign((0, e._)`${m}${(0, e.getProperty)(x)}`, !0));
  }
  te.setEvaluated = _;
  const v = {};
  function S(c, m) {
    return c.scopeValue("func", {
      ref: m,
      code: v[m.code] || (v[m.code] = new t._Code(m.code))
    });
  }
  te.useFunc = S;
  var h;
  (function(c) {
    c[c.Num = 0] = "Num", c[c.Str = 1] = "Str";
  })(h || (te.Type = h = {}));
  function l(c, m, $) {
    if (c instanceof e.Name) {
      const x = m === h.Num;
      return $ ? x ? (0, e._)`"[" + ${c} + "]"` : (0, e._)`"['" + ${c} + "']"` : x ? (0, e._)`"/" + ${c}` : (0, e._)`"/" + ${c}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return $ ? (0, e.getProperty)(c).toString() : "/" + g(c);
  }
  te.getErrorPath = l;
  function i(c, m, $ = c.opts.strictSchema) {
    if ($) {
      if (m = `strict mode: ${m}`, $ === !0)
        throw new Error(m);
      c.self.logger.warn(m);
    }
  }
  return te.checkStrictMode = i, te;
}
var Pt = {}, ks;
function $e() {
  if (ks) return Pt;
  ks = 1, Object.defineProperty(Pt, "__esModule", { value: !0 });
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
  return Pt.default = t, Pt;
}
var Ds;
function Vn() {
  return Ds || (Ds = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ee(), s = /* @__PURE__ */ ne(), o = /* @__PURE__ */ $e();
    e.keywordError = {
      message: ({ keyword: v }) => (0, t.str)`must pass "${v}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: v, schemaType: S }) => S ? (0, t.str)`"${v}" keyword must be ${S} ($data)` : (0, t.str)`"${v}" keyword is invalid ($data)`
    };
    function p(v, S = e.keywordError, h, l) {
      const { it: i } = v, { gen: c, compositeRule: m, allErrors: $ } = i, x = w(v, S, h);
      l ?? (m || $) ? d(c, x) : y(i, (0, t._)`[${x}]`);
    }
    e.reportError = p;
    function n(v, S = e.keywordError, h) {
      const { it: l } = v, { gen: i, compositeRule: c, allErrors: m } = l, $ = w(v, S, h);
      d(i, $), c || m || y(l, o.default.vErrors);
    }
    e.reportExtraError = n;
    function r(v, S) {
      v.assign(o.default.errors, S), v.if((0, t._)`${o.default.vErrors} !== null`, () => v.if(S, () => v.assign((0, t._)`${o.default.vErrors}.length`, S), () => v.assign(o.default.vErrors, null)));
    }
    e.resetErrorsCount = r;
    function a({ gen: v, keyword: S, schemaValue: h, data: l, errsCount: i, it: c }) {
      if (i === void 0)
        throw new Error("ajv implementation error");
      const m = v.name("err");
      v.forRange("i", i, o.default.errors, ($) => {
        v.const(m, (0, t._)`${o.default.vErrors}[${$}]`), v.if((0, t._)`${m}.instancePath === undefined`, () => v.assign((0, t._)`${m}.instancePath`, (0, t.strConcat)(o.default.instancePath, c.errorPath))), v.assign((0, t._)`${m}.schemaPath`, (0, t.str)`${c.errSchemaPath}/${S}`), c.opts.verbose && (v.assign((0, t._)`${m}.schema`, h), v.assign((0, t._)`${m}.data`, l));
      });
    }
    e.extendErrors = a;
    function d(v, S) {
      const h = v.const("err", S);
      v.if((0, t._)`${o.default.vErrors} === null`, () => v.assign(o.default.vErrors, (0, t._)`[${h}]`), (0, t._)`${o.default.vErrors}.push(${h})`), v.code((0, t._)`${o.default.errors}++`);
    }
    function y(v, S) {
      const { gen: h, validateName: l, schemaEnv: i } = v;
      i.$async ? h.throw((0, t._)`new ${v.ValidationError}(${S})`) : (h.assign((0, t._)`${l}.errors`, S), h.return(!1));
    }
    const g = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function w(v, S, h) {
      const { createErrors: l } = v.it;
      return l === !1 ? (0, t._)`{}` : u(v, S, h);
    }
    function u(v, S, h = {}) {
      const { gen: l, it: i } = v, c = [
        f(i, h),
        b(v, h)
      ];
      return _(v, S, c), l.object(...c);
    }
    function f({ errorPath: v }, { instancePath: S }) {
      const h = S ? (0, t.str)`${v}${(0, s.getErrorPath)(S, s.Type.Str)}` : v;
      return [o.default.instancePath, (0, t.strConcat)(o.default.instancePath, h)];
    }
    function b({ keyword: v, it: { errSchemaPath: S } }, { schemaPath: h, parentSchema: l }) {
      let i = l ? S : (0, t.str)`${S}/${v}`;
      return h && (i = (0, t.str)`${i}${(0, s.getErrorPath)(h, s.Type.Str)}`), [g.schemaPath, i];
    }
    function _(v, { params: S, message: h }, l) {
      const { keyword: i, data: c, schemaValue: m, it: $ } = v, { opts: x, propertyName: j, topSchemaRef: q, schemaPath: k } = $;
      l.push([g.keyword, i], [g.params, typeof S == "function" ? S(v) : S || (0, t._)`{}`]), x.messages && l.push([g.message, typeof h == "function" ? h(v) : h]), x.verbose && l.push([g.schema, m], [g.parentSchema, (0, t._)`${q}${k}`], [o.default.data, c]), j && l.push([g.propertyName, j]);
    }
  })(tr)), tr;
}
var Ms;
function Ec() {
  if (Ms) return Je;
  Ms = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.boolOrEmptySchema = Je.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Vn(), t = /* @__PURE__ */ ee(), s = /* @__PURE__ */ $e(), o = {
    message: "boolean schema is false"
  };
  function p(a) {
    const { gen: d, schema: y, validateName: g } = a;
    y === !1 ? r(a, !1) : typeof y == "object" && y.$async === !0 ? d.return(s.default.data) : (d.assign((0, t._)`${g}.errors`, null), d.return(!0));
  }
  Je.topBoolOrEmptySchema = p;
  function n(a, d) {
    const { gen: y, schema: g } = a;
    g === !1 ? (y.var(d, !1), r(a)) : y.var(d, !0);
  }
  Je.boolOrEmptySchema = n;
  function r(a, d) {
    const { gen: y, data: g } = a, w = {
      gen: y,
      keyword: "false schema",
      data: g,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(w, o, void 0, d);
  }
  return Je;
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
  function o() {
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
  return Ge.getRules = o, Ge;
}
var Te = {}, Cs;
function ao() {
  if (Cs) return Te;
  Cs = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.shouldUseRule = Te.shouldUseGroup = Te.schemaHasRulesForType = void 0;
  function e({ schema: o, self: p }, n) {
    const r = p.RULES.types[n];
    return r && r !== !0 && t(o, r);
  }
  Te.schemaHasRulesForType = e;
  function t(o, p) {
    return p.rules.some((n) => s(o, n));
  }
  Te.shouldUseGroup = t;
  function s(o, p) {
    var n;
    return o[p.keyword] !== void 0 || ((n = p.definition.implements) === null || n === void 0 ? void 0 : n.some((r) => o[r] !== void 0));
  }
  return Te.shouldUseRule = s, Te;
}
var Us;
function Mn() {
  if (Us) return de;
  Us = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.reportTypeError = de.checkDataTypes = de.checkDataType = de.coerceAndCheckDataType = de.getJSONTypes = de.getSchemaTypes = de.DataType = void 0;
  const e = /* @__PURE__ */ io(), t = /* @__PURE__ */ ao(), s = /* @__PURE__ */ Vn(), o = /* @__PURE__ */ ee(), p = /* @__PURE__ */ ne();
  var n;
  (function(h) {
    h[h.Correct = 0] = "Correct", h[h.Wrong = 1] = "Wrong";
  })(n || (de.DataType = n = {}));
  function r(h) {
    const l = a(h.type);
    if (l.includes("null")) {
      if (h.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!l.length && h.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      h.nullable === !0 && l.push("null");
    }
    return l;
  }
  de.getSchemaTypes = r;
  function a(h) {
    const l = Array.isArray(h) ? h : h ? [h] : [];
    if (l.every(e.isJSONType))
      return l;
    throw new Error("type must be JSONType or JSONType[]: " + l.join(","));
  }
  de.getJSONTypes = a;
  function d(h, l) {
    const { gen: i, data: c, opts: m } = h, $ = g(l, m.coerceTypes), x = l.length > 0 && !($.length === 0 && l.length === 1 && (0, t.schemaHasRulesForType)(h, l[0]));
    if (x) {
      const j = b(l, c, m.strictNumbers, n.Wrong);
      i.if(j, () => {
        $.length ? w(h, l, $) : v(h);
      });
    }
    return x;
  }
  de.coerceAndCheckDataType = d;
  const y = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function g(h, l) {
    return l ? h.filter((i) => y.has(i) || l === "array" && i === "array") : [];
  }
  function w(h, l, i) {
    const { gen: c, data: m, opts: $ } = h, x = c.let("dataType", (0, o._)`typeof ${m}`), j = c.let("coerced", (0, o._)`undefined`);
    $.coerceTypes === "array" && c.if((0, o._)`${x} == 'object' && Array.isArray(${m}) && ${m}.length == 1`, () => c.assign(m, (0, o._)`${m}[0]`).assign(x, (0, o._)`typeof ${m}`).if(b(l, m, $.strictNumbers), () => c.assign(j, m))), c.if((0, o._)`${j} !== undefined`);
    for (const k of i)
      (y.has(k) || k === "array" && $.coerceTypes === "array") && q(k);
    c.else(), v(h), c.endIf(), c.if((0, o._)`${j} !== undefined`, () => {
      c.assign(m, j), u(h, j);
    });
    function q(k) {
      switch (k) {
        case "string":
          c.elseIf((0, o._)`${x} == "number" || ${x} == "boolean"`).assign(j, (0, o._)`"" + ${m}`).elseIf((0, o._)`${m} === null`).assign(j, (0, o._)`""`);
          return;
        case "number":
          c.elseIf((0, o._)`${x} == "boolean" || ${m} === null
              || (${x} == "string" && ${m} && ${m} == +${m})`).assign(j, (0, o._)`+${m}`);
          return;
        case "integer":
          c.elseIf((0, o._)`${x} === "boolean" || ${m} === null
              || (${x} === "string" && ${m} && ${m} == +${m} && !(${m} % 1))`).assign(j, (0, o._)`+${m}`);
          return;
        case "boolean":
          c.elseIf((0, o._)`${m} === "false" || ${m} === 0 || ${m} === null`).assign(j, !1).elseIf((0, o._)`${m} === "true" || ${m} === 1`).assign(j, !0);
          return;
        case "null":
          c.elseIf((0, o._)`${m} === "" || ${m} === 0 || ${m} === false`), c.assign(j, null);
          return;
        case "array":
          c.elseIf((0, o._)`${x} === "string" || ${x} === "number"
              || ${x} === "boolean" || ${m} === null`).assign(j, (0, o._)`[${m}]`);
      }
    }
  }
  function u({ gen: h, parentData: l, parentDataProperty: i }, c) {
    h.if((0, o._)`${l} !== undefined`, () => h.assign((0, o._)`${l}[${i}]`, c));
  }
  function f(h, l, i, c = n.Correct) {
    const m = c === n.Correct ? o.operators.EQ : o.operators.NEQ;
    let $;
    switch (h) {
      case "null":
        return (0, o._)`${l} ${m} null`;
      case "array":
        $ = (0, o._)`Array.isArray(${l})`;
        break;
      case "object":
        $ = (0, o._)`${l} && typeof ${l} == "object" && !Array.isArray(${l})`;
        break;
      case "integer":
        $ = x((0, o._)`!(${l} % 1) && !isNaN(${l})`);
        break;
      case "number":
        $ = x();
        break;
      default:
        return (0, o._)`typeof ${l} ${m} ${h}`;
    }
    return c === n.Correct ? $ : (0, o.not)($);
    function x(j = o.nil) {
      return (0, o.and)((0, o._)`typeof ${l} == "number"`, j, i ? (0, o._)`isFinite(${l})` : o.nil);
    }
  }
  de.checkDataType = f;
  function b(h, l, i, c) {
    if (h.length === 1)
      return f(h[0], l, i, c);
    let m;
    const $ = (0, p.toHash)(h);
    if ($.array && $.object) {
      const x = (0, o._)`typeof ${l} != "object"`;
      m = $.null ? x : (0, o._)`!${l} || ${x}`, delete $.null, delete $.array, delete $.object;
    } else
      m = o.nil;
    $.number && delete $.integer;
    for (const x in $)
      m = (0, o.and)(m, f(x, l, i, c));
    return m;
  }
  de.checkDataTypes = b;
  const _ = {
    message: ({ schema: h }) => `must be ${h}`,
    params: ({ schema: h, schemaValue: l }) => typeof h == "string" ? (0, o._)`{type: ${h}}` : (0, o._)`{type: ${l}}`
  };
  function v(h) {
    const l = S(h);
    (0, s.reportError)(l, _);
  }
  de.reportTypeError = v;
  function S(h) {
    const { gen: l, data: i, schema: c } = h, m = (0, p.schemaRefOrVal)(h, c, "type");
    return {
      gen: l,
      keyword: "type",
      data: i,
      schema: c.type,
      schemaCode: m,
      schemaValue: m,
      parentSchema: c,
      params: {},
      it: h
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
    const { properties: r, items: a } = p.schema;
    if (n === "object" && r)
      for (const d in r)
        o(p, d, r[d].default);
    else n === "array" && Array.isArray(a) && a.forEach((d, y) => o(p, y, d.default));
  }
  mt.assignDefaults = s;
  function o(p, n, r) {
    const { gen: a, compositeRule: d, data: y, opts: g } = p;
    if (r === void 0)
      return;
    const w = (0, e._)`${y}${(0, e.getProperty)(n)}`;
    if (d) {
      (0, t.checkStrictMode)(p, `default is ignored for: ${w}`);
      return;
    }
    let u = (0, e._)`${w} === undefined`;
    g.useDefaults === "empty" && (u = (0, e._)`${u} || ${w} === null || ${w} === ""`), a.if(u, (0, e._)`${w} = ${(0, e.stringify)(r)}`);
  }
  return mt;
}
var xe = {}, se = {}, zs;
function Ie() {
  if (zs) return se;
  zs = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.validateUnion = se.validateArray = se.usePattern = se.callValidateCode = se.schemaProperties = se.allSchemaProperties = se.noPropertyInData = se.propertyInData = se.isOwnProperty = se.hasPropFunc = se.reportMissingProp = se.checkMissingProp = se.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), s = /* @__PURE__ */ $e(), o = /* @__PURE__ */ ne();
  function p(h, l) {
    const { gen: i, data: c, it: m } = h;
    i.if(g(i, c, l, m.opts.ownProperties), () => {
      h.setParams({ missingProperty: (0, e._)`${l}` }, !0), h.error();
    });
  }
  se.checkReportMissingProp = p;
  function n({ gen: h, data: l, it: { opts: i } }, c, m) {
    return (0, e.or)(...c.map(($) => (0, e.and)(g(h, l, $, i.ownProperties), (0, e._)`${m} = ${$}`)));
  }
  se.checkMissingProp = n;
  function r(h, l) {
    h.setParams({ missingProperty: l }, !0), h.error();
  }
  se.reportMissingProp = r;
  function a(h) {
    return h.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  se.hasPropFunc = a;
  function d(h, l, i) {
    return (0, e._)`${a(h)}.call(${l}, ${i})`;
  }
  se.isOwnProperty = d;
  function y(h, l, i, c) {
    const m = (0, e._)`${l}${(0, e.getProperty)(i)} !== undefined`;
    return c ? (0, e._)`${m} && ${d(h, l, i)}` : m;
  }
  se.propertyInData = y;
  function g(h, l, i, c) {
    const m = (0, e._)`${l}${(0, e.getProperty)(i)} === undefined`;
    return c ? (0, e.or)(m, (0, e.not)(d(h, l, i))) : m;
  }
  se.noPropertyInData = g;
  function w(h) {
    return h ? Object.keys(h).filter((l) => l !== "__proto__") : [];
  }
  se.allSchemaProperties = w;
  function u(h, l) {
    return w(l).filter((i) => !(0, t.alwaysValidSchema)(h, l[i]));
  }
  se.schemaProperties = u;
  function f({ schemaCode: h, data: l, it: { gen: i, topSchemaRef: c, schemaPath: m, errorPath: $ }, it: x }, j, q, k) {
    const C = k ? (0, e._)`${h}, ${l}, ${c}${m}` : l, T = [
      [s.default.instancePath, (0, e.strConcat)(s.default.instancePath, $)],
      [s.default.parentData, x.parentData],
      [s.default.parentDataProperty, x.parentDataProperty],
      [s.default.rootData, s.default.rootData]
    ];
    x.opts.dynamicRef && T.push([s.default.dynamicAnchors, s.default.dynamicAnchors]);
    const O = (0, e._)`${C}, ${i.object(...T)}`;
    return q !== e.nil ? (0, e._)`${j}.call(${q}, ${O})` : (0, e._)`${j}(${O})`;
  }
  se.callValidateCode = f;
  const b = (0, e._)`new RegExp`;
  function _({ gen: h, it: { opts: l } }, i) {
    const c = l.unicodeRegExp ? "u" : "", { regExp: m } = l.code, $ = m(i, c);
    return h.scopeValue("pattern", {
      key: $.toString(),
      ref: $,
      code: (0, e._)`${m.code === "new RegExp" ? b : (0, o.useFunc)(h, m)}(${i}, ${c})`
    });
  }
  se.usePattern = _;
  function v(h) {
    const { gen: l, data: i, keyword: c, it: m } = h, $ = l.name("valid");
    if (m.allErrors) {
      const j = l.let("valid", !0);
      return x(() => l.assign(j, !1)), j;
    }
    return l.var($, !0), x(() => l.break()), $;
    function x(j) {
      const q = l.const("len", (0, e._)`${i}.length`);
      l.forRange("i", 0, q, (k) => {
        h.subschema({
          keyword: c,
          dataProp: k,
          dataPropType: t.Type.Num
        }, $), l.if((0, e.not)($), j);
      });
    }
  }
  se.validateArray = v;
  function S(h) {
    const { gen: l, schema: i, keyword: c, it: m } = h;
    if (!Array.isArray(i))
      throw new Error("ajv implementation error");
    if (i.some((q) => (0, t.alwaysValidSchema)(m, q)) && !m.opts.unevaluated)
      return;
    const x = l.let("valid", !1), j = l.name("_valid");
    l.block(() => i.forEach((q, k) => {
      const C = h.subschema({
        keyword: c,
        schemaProp: k,
        compositeRule: !0
      }, j);
      l.assign(x, (0, e._)`${x} || ${j}`), h.mergeValidEvaluated(C, j) || l.if((0, e.not)(x));
    })), h.result(x, () => h.reset(), () => h.error(!0));
  }
  return se.validateUnion = S, se;
}
var Fs;
function jc() {
  if (Fs) return xe;
  Fs = 1, Object.defineProperty(xe, "__esModule", { value: !0 }), xe.validateKeywordUsage = xe.validSchemaType = xe.funcKeywordCode = xe.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ $e(), s = /* @__PURE__ */ Ie(), o = /* @__PURE__ */ Vn();
  function p(u, f) {
    const { gen: b, keyword: _, schema: v, parentSchema: S, it: h } = u, l = f.macro.call(h.self, v, S, h), i = y(b, _, l);
    h.opts.validateSchema !== !1 && h.self.validateSchema(l, !0);
    const c = b.name("valid");
    u.subschema({
      schema: l,
      schemaPath: e.nil,
      errSchemaPath: `${h.errSchemaPath}/${_}`,
      topSchemaRef: i,
      compositeRule: !0
    }, c), u.pass(c, () => u.error(!0));
  }
  xe.macroKeywordCode = p;
  function n(u, f) {
    var b;
    const { gen: _, keyword: v, schema: S, parentSchema: h, $data: l, it: i } = u;
    d(i, f);
    const c = !l && f.compile ? f.compile.call(i.self, S, h, i) : f.validate, m = y(_, v, c), $ = _.let("valid");
    u.block$data($, x), u.ok((b = f.valid) !== null && b !== void 0 ? b : $);
    function x() {
      if (f.errors === !1)
        k(), f.modifying && r(u), C(() => u.error());
      else {
        const T = f.async ? j() : q();
        f.modifying && r(u), C(() => a(u, T));
      }
    }
    function j() {
      const T = _.let("ruleErrs", null);
      return _.try(() => k((0, e._)`await `), (O) => _.assign($, !1).if((0, e._)`${O} instanceof ${i.ValidationError}`, () => _.assign(T, (0, e._)`${O}.errors`), () => _.throw(O))), T;
    }
    function q() {
      const T = (0, e._)`${m}.errors`;
      return _.assign(T, null), k(e.nil), T;
    }
    function k(T = f.async ? (0, e._)`await ` : e.nil) {
      const O = i.opts.passContext ? t.default.this : t.default.self, J = !("compile" in f && !l || f.schema === !1);
      _.assign($, (0, e._)`${T}${(0, s.callValidateCode)(u, m, O, J)}`, f.modifying);
    }
    function C(T) {
      var O;
      _.if((0, e.not)((O = f.valid) !== null && O !== void 0 ? O : $), T);
    }
  }
  xe.funcKeywordCode = n;
  function r(u) {
    const { gen: f, data: b, it: _ } = u;
    f.if(_.parentData, () => f.assign(b, (0, e._)`${_.parentData}[${_.parentDataProperty}]`));
  }
  function a(u, f) {
    const { gen: b } = u;
    b.if((0, e._)`Array.isArray(${f})`, () => {
      b.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${f} : ${t.default.vErrors}.concat(${f})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, o.extendErrors)(u);
    }, () => u.error());
  }
  function d({ schemaEnv: u }, f) {
    if (f.async && !u.$async)
      throw new Error("async keyword in sync schema");
  }
  function y(u, f, b) {
    if (b === void 0)
      throw new Error(`keyword "${f}" failed to compile`);
    return u.scopeValue("keyword", typeof b == "function" ? { ref: b } : { ref: b, code: (0, e.stringify)(b) });
  }
  function g(u, f, b = !1) {
    return !f.length || f.some((_) => _ === "array" ? Array.isArray(u) : _ === "object" ? u && typeof u == "object" && !Array.isArray(u) : typeof u == _ || b && typeof u > "u");
  }
  xe.validSchemaType = g;
  function w({ schema: u, opts: f, self: b, errSchemaPath: _ }, v, S) {
    if (Array.isArray(v.keyword) ? !v.keyword.includes(S) : v.keyword !== S)
      throw new Error("ajv implementation error");
    const h = v.dependencies;
    if (h?.some((l) => !Object.prototype.hasOwnProperty.call(u, l)))
      throw new Error(`parent schema must have dependencies of ${S}: ${h.join(",")}`);
    if (v.validateSchema && !v.validateSchema(u[S])) {
      const i = `keyword "${S}" value is invalid at path "${_}": ` + b.errorsText(v.validateSchema.errors);
      if (f.validateSchema === "log")
        b.logger.error(i);
      else
        throw new Error(i);
    }
  }
  return xe.validateKeywordUsage = w, xe;
}
var ke = {}, Hs;
function Ac() {
  if (Hs) return ke;
  Hs = 1, Object.defineProperty(ke, "__esModule", { value: !0 }), ke.extendSubschemaMode = ke.extendSubschemaData = ke.getSubschema = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne();
  function s(n, { keyword: r, schemaProp: a, schema: d, schemaPath: y, errSchemaPath: g, topSchemaRef: w }) {
    if (r !== void 0 && d !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (r !== void 0) {
      const u = n.schema[r];
      return a === void 0 ? {
        schema: u,
        schemaPath: (0, e._)`${n.schemaPath}${(0, e.getProperty)(r)}`,
        errSchemaPath: `${n.errSchemaPath}/${r}`
      } : {
        schema: u[a],
        schemaPath: (0, e._)`${n.schemaPath}${(0, e.getProperty)(r)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${n.errSchemaPath}/${r}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (d !== void 0) {
      if (y === void 0 || g === void 0 || w === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: d,
        schemaPath: y,
        topSchemaRef: w,
        errSchemaPath: g
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  ke.getSubschema = s;
  function o(n, r, { dataProp: a, dataPropType: d, data: y, dataTypes: g, propertyName: w }) {
    if (y !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: u } = r;
    if (a !== void 0) {
      const { errorPath: b, dataPathArr: _, opts: v } = r, S = u.let("data", (0, e._)`${r.data}${(0, e.getProperty)(a)}`, !0);
      f(S), n.errorPath = (0, e.str)`${b}${(0, t.getErrorPath)(a, d, v.jsPropertySyntax)}`, n.parentDataProperty = (0, e._)`${a}`, n.dataPathArr = [..._, n.parentDataProperty];
    }
    if (y !== void 0) {
      const b = y instanceof e.Name ? y : u.let("data", y, !0);
      f(b), w !== void 0 && (n.propertyName = w);
    }
    g && (n.dataTypes = g);
    function f(b) {
      n.data = b, n.dataLevel = r.dataLevel + 1, n.dataTypes = [], r.definedProperties = /* @__PURE__ */ new Set(), n.parentData = r.data, n.dataNames = [...r.dataNames, b];
    }
  }
  ke.extendSubschemaData = o;
  function p(n, { jtdDiscriminator: r, jtdMetadata: a, compositeRule: d, createErrors: y, allErrors: g }) {
    d !== void 0 && (n.compositeRule = d), y !== void 0 && (n.createErrors = y), g !== void 0 && (n.allErrors = g), n.jtdDiscriminator = r, n.jtdMetadata = a;
  }
  return ke.extendSubschemaMode = p, ke;
}
var he = {}, ir, Bs;
function oo() {
  return Bs || (Bs = 1, ir = function e(t, s) {
    if (t === s) return !0;
    if (t && s && typeof t == "object" && typeof s == "object") {
      if (t.constructor !== s.constructor) return !1;
      var o, p, n;
      if (Array.isArray(t)) {
        if (o = t.length, o != s.length) return !1;
        for (p = o; p-- !== 0; )
          if (!e(t[p], s[p])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === s.source && t.flags === s.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === s.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === s.toString();
      if (n = Object.keys(t), o = n.length, o !== Object.keys(s).length) return !1;
      for (p = o; p-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(s, n[p])) return !1;
      for (p = o; p-- !== 0; ) {
        var r = n[p];
        if (!e(t[r], s[r])) return !1;
      }
      return !0;
    }
    return t !== t && s !== s;
  }), ir;
}
var ar = { exports: {} }, Js;
function qc() {
  if (Js) return ar.exports;
  Js = 1;
  var e = ar.exports = function(o, p, n) {
    typeof p == "function" && (n = p, p = {}), n = p.cb || n;
    var r = typeof n == "function" ? n : n.pre || function() {
    }, a = n.post || function() {
    };
    t(p, r, a, o, "", o);
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
  function t(o, p, n, r, a, d, y, g, w, u) {
    if (r && typeof r == "object" && !Array.isArray(r)) {
      p(r, a, d, y, g, w, u);
      for (var f in r) {
        var b = r[f];
        if (Array.isArray(b)) {
          if (f in e.arrayKeywords)
            for (var _ = 0; _ < b.length; _++)
              t(o, p, n, b[_], a + "/" + f + "/" + _, d, a, f, r, _);
        } else if (f in e.propsKeywords) {
          if (b && typeof b == "object")
            for (var v in b)
              t(o, p, n, b[v], a + "/" + f + "/" + s(v), d, a, f, r, v);
        } else (f in e.keywords || o.allKeys && !(f in e.skipKeywords)) && t(o, p, n, b, a + "/" + f, d, a, f, r);
      }
      n(r, a, d, y, g, w, u);
    }
  }
  function s(o) {
    return o.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return ar.exports;
}
var Gs;
function zn() {
  if (Gs) return he;
  Gs = 1, Object.defineProperty(he, "__esModule", { value: !0 }), he.getSchemaRefs = he.resolveUrl = he.normalizeId = he._getFullPath = he.getFullPath = he.inlineRef = void 0;
  const e = /* @__PURE__ */ ne(), t = oo(), s = qc(), o = /* @__PURE__ */ new Set([
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
  function p(_, v = !0) {
    return typeof _ == "boolean" ? !0 : v === !0 ? !r(_) : v ? a(_) <= v : !1;
  }
  he.inlineRef = p;
  const n = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function r(_) {
    for (const v in _) {
      if (n.has(v))
        return !0;
      const S = _[v];
      if (Array.isArray(S) && S.some(r) || typeof S == "object" && r(S))
        return !0;
    }
    return !1;
  }
  function a(_) {
    let v = 0;
    for (const S in _) {
      if (S === "$ref")
        return 1 / 0;
      if (v++, !o.has(S) && (typeof _[S] == "object" && (0, e.eachItem)(_[S], (h) => v += a(h)), v === 1 / 0))
        return 1 / 0;
    }
    return v;
  }
  function d(_, v = "", S) {
    S !== !1 && (v = w(v));
    const h = _.parse(v);
    return y(_, h);
  }
  he.getFullPath = d;
  function y(_, v) {
    return _.serialize(v).split("#")[0] + "#";
  }
  he._getFullPath = y;
  const g = /#\/?$/;
  function w(_) {
    return _ ? _.replace(g, "") : "";
  }
  he.normalizeId = w;
  function u(_, v, S) {
    return S = w(S), _.resolve(v, S);
  }
  he.resolveUrl = u;
  const f = /^[a-z_][-a-z0-9._]*$/i;
  function b(_, v) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: S, uriResolver: h } = this.opts, l = w(_[S] || v), i = { "": l }, c = d(h, l, !1), m = {}, $ = /* @__PURE__ */ new Set();
    return s(_, { allKeys: !0 }, (q, k, C, T) => {
      if (T === void 0)
        return;
      const O = c + k;
      let J = i[T];
      typeof q[S] == "string" && (J = N.call(this, q[S])), H.call(this, q.$anchor), H.call(this, q.$dynamicAnchor), i[k] = J;
      function N(F) {
        const G = this.opts.uriResolver.resolve;
        if (F = w(J ? G(J, F) : F), $.has(F))
          throw j(F);
        $.add(F);
        let A = this.refs[F];
        return typeof A == "string" && (A = this.refs[A]), typeof A == "object" ? x(q, A.schema, F) : F !== w(O) && (F[0] === "#" ? (x(q, m[F], F), m[F] = q) : this.refs[F] = O), F;
      }
      function H(F) {
        if (typeof F == "string") {
          if (!f.test(F))
            throw new Error(`invalid anchor "${F}"`);
          N.call(this, `#${F}`);
        }
      }
    }), m;
    function x(q, k, C) {
      if (k !== void 0 && !t(q, k))
        throw j(C);
    }
    function j(q) {
      return new Error(`reference "${q}" resolves to more than one schema`);
    }
  }
  return he.getSchemaRefs = b, he;
}
var Ks;
function $t() {
  if (Ks) return Pe;
  Ks = 1, Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.getData = Pe.KeywordCxt = Pe.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Ec(), t = /* @__PURE__ */ Mn(), s = /* @__PURE__ */ ao(), o = /* @__PURE__ */ Mn(), p = /* @__PURE__ */ Rc(), n = /* @__PURE__ */ jc(), r = /* @__PURE__ */ Ac(), a = /* @__PURE__ */ ee(), d = /* @__PURE__ */ $e(), y = /* @__PURE__ */ zn(), g = /* @__PURE__ */ ne(), w = /* @__PURE__ */ Vn();
  function u(L) {
    if (c(L) && ($(L), i(L))) {
      v(L);
      return;
    }
    f(L, () => (0, e.topBoolOrEmptySchema)(L));
  }
  Pe.validateFunctionCode = u;
  function f({ gen: L, validateName: V, schema: z, schemaEnv: Z, opts: X }, Y) {
    X.code.es5 ? L.func(V, (0, a._)`${d.default.data}, ${d.default.valCxt}`, Z.$async, () => {
      L.code((0, a._)`"use strict"; ${h(z, X)}`), _(L, X), L.code(Y);
    }) : L.func(V, (0, a._)`${d.default.data}, ${b(X)}`, Z.$async, () => L.code(h(z, X)).code(Y));
  }
  function b(L) {
    return (0, a._)`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${L.dynamicRef ? (0, a._)`, ${d.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function _(L, V) {
    L.if(d.default.valCxt, () => {
      L.var(d.default.instancePath, (0, a._)`${d.default.valCxt}.${d.default.instancePath}`), L.var(d.default.parentData, (0, a._)`${d.default.valCxt}.${d.default.parentData}`), L.var(d.default.parentDataProperty, (0, a._)`${d.default.valCxt}.${d.default.parentDataProperty}`), L.var(d.default.rootData, (0, a._)`${d.default.valCxt}.${d.default.rootData}`), V.dynamicRef && L.var(d.default.dynamicAnchors, (0, a._)`${d.default.valCxt}.${d.default.dynamicAnchors}`);
    }, () => {
      L.var(d.default.instancePath, (0, a._)`""`), L.var(d.default.parentData, (0, a._)`undefined`), L.var(d.default.parentDataProperty, (0, a._)`undefined`), L.var(d.default.rootData, d.default.data), V.dynamicRef && L.var(d.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function v(L) {
    const { schema: V, opts: z, gen: Z } = L;
    f(L, () => {
      z.$comment && V.$comment && T(L), q(L), Z.let(d.default.vErrors, null), Z.let(d.default.errors, 0), z.unevaluated && S(L), x(L), O(L);
    });
  }
  function S(L) {
    const { gen: V, validateName: z } = L;
    L.evaluated = V.const("evaluated", (0, a._)`${z}.evaluated`), V.if((0, a._)`${L.evaluated}.dynamicProps`, () => V.assign((0, a._)`${L.evaluated}.props`, (0, a._)`undefined`)), V.if((0, a._)`${L.evaluated}.dynamicItems`, () => V.assign((0, a._)`${L.evaluated}.items`, (0, a._)`undefined`));
  }
  function h(L, V) {
    const z = typeof L == "object" && L[V.schemaId];
    return z && (V.code.source || V.code.process) ? (0, a._)`/*# sourceURL=${z} */` : a.nil;
  }
  function l(L, V) {
    if (c(L) && ($(L), i(L))) {
      m(L, V);
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
  function m(L, V) {
    const { schema: z, gen: Z, opts: X } = L;
    X.$comment && z.$comment && T(L), k(L), C(L);
    const Y = Z.const("_errs", d.default.errors);
    x(L, Y), Z.var(V, (0, a._)`${Y} === ${d.default.errors}`);
  }
  function $(L) {
    (0, g.checkUnknownRules)(L), j(L);
  }
  function x(L, V) {
    if (L.opts.jtd)
      return N(L, [], !1, V);
    const z = (0, t.getSchemaTypes)(L.schema), Z = (0, t.coerceAndCheckDataType)(L, z);
    N(L, z, !Z, V);
  }
  function j(L) {
    const { schema: V, errSchemaPath: z, opts: Z, self: X } = L;
    V.$ref && Z.ignoreKeywordsWithRef && (0, g.schemaHasRulesButRef)(V, X.RULES) && X.logger.warn(`$ref: keywords ignored in schema at path "${z}"`);
  }
  function q(L) {
    const { schema: V, opts: z } = L;
    V.default !== void 0 && z.useDefaults && z.strictSchema && (0, g.checkStrictMode)(L, "default is ignored in the schema root");
  }
  function k(L) {
    const V = L.schema[L.opts.schemaId];
    V && (L.baseId = (0, y.resolveUrl)(L.opts.uriResolver, L.baseId, V));
  }
  function C(L) {
    if (L.schema.$async && !L.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function T({ gen: L, schemaEnv: V, schema: z, errSchemaPath: Z, opts: X }) {
    const Y = z.$comment;
    if (X.$comment === !0)
      L.code((0, a._)`${d.default.self}.logger.log(${Y})`);
    else if (typeof X.$comment == "function") {
      const re = (0, a.str)`${Z}/$comment`, ue = L.scopeValue("root", { ref: V.root });
      L.code((0, a._)`${d.default.self}.opts.$comment(${Y}, ${re}, ${ue}.schema)`);
    }
  }
  function O(L) {
    const { gen: V, schemaEnv: z, validateName: Z, ValidationError: X, opts: Y } = L;
    z.$async ? V.if((0, a._)`${d.default.errors} === 0`, () => V.return(d.default.data), () => V.throw((0, a._)`new ${X}(${d.default.vErrors})`)) : (V.assign((0, a._)`${Z}.errors`, d.default.vErrors), Y.unevaluated && J(L), V.return((0, a._)`${d.default.errors} === 0`));
  }
  function J({ gen: L, evaluated: V, props: z, items: Z }) {
    z instanceof a.Name && L.assign((0, a._)`${V}.props`, z), Z instanceof a.Name && L.assign((0, a._)`${V}.items`, Z);
  }
  function N(L, V, z, Z) {
    const { gen: X, schema: Y, data: re, allErrors: ue, opts: ae, self: oe } = L, { RULES: ie } = oe;
    if (Y.$ref && (ae.ignoreKeywordsWithRef || !(0, g.schemaHasRulesButRef)(Y, ie))) {
      X.block(() => M(L, "$ref", ie.all.$ref.definition));
      return;
    }
    ae.jtd || F(L, V), X.block(() => {
      for (const ge of ie.rules)
        Ee(ge);
      Ee(ie.post);
    });
    function Ee(ge) {
      (0, s.shouldUseGroup)(Y, ge) && (ge.type ? (X.if((0, o.checkDataType)(ge.type, re, ae.strictNumbers)), H(L, ge), V.length === 1 && V[0] === ge.type && z && (X.else(), (0, o.reportTypeError)(L)), X.endIf()) : H(L, ge), ue || X.if((0, a._)`${d.default.errors} === ${Z || 0}`));
    }
  }
  function H(L, V) {
    const { gen: z, schema: Z, opts: { useDefaults: X } } = L;
    X && (0, p.assignDefaults)(L, V.type), z.block(() => {
      for (const Y of V.rules)
        (0, s.shouldUseRule)(Z, Y) && M(L, Y.keyword, Y.definition, V.type);
    });
  }
  function F(L, V) {
    L.schemaEnv.meta || !L.opts.strictTypes || (G(L, V), L.opts.allowUnionTypes || A(L, V), P(L, L.dataTypes));
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
  function P(L, V) {
    const z = L.self.RULES.all;
    for (const Z in z) {
      const X = z[Z];
      if (typeof X == "object" && (0, s.shouldUseRule)(L.schema, X)) {
        const { type: Y } = X.definition;
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
    V += ` at "${z}" (strictTypes)`, (0, g.checkStrictMode)(L, V, L.opts.strictTypes);
  }
  class R {
    constructor(V, z, Z) {
      if ((0, n.validateKeywordUsage)(V, z, Z), this.gen = V.gen, this.allErrors = V.allErrors, this.keyword = Z, this.data = V.data, this.schema = V.schema[Z], this.$data = z.$data && V.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, g.schemaRefOrVal)(V, this.schema, Z, this.$data), this.schemaType = z.schemaType, this.parentSchema = V.schema, this.params = {}, this.it = V, this.def = z, this.$data)
        this.schemaCode = V.gen.const("vSchema", K(this.$data, V));
      else if (this.schemaCode = this.schemaValue, !(0, n.validSchemaType)(this.schema, z.schemaType, z.allowUndefined))
        throw new Error(`${Z} value must be ${JSON.stringify(z.schemaType)}`);
      ("code" in z ? z.trackErrors : z.errors !== !1) && (this.errsCount = V.gen.const("_errs", d.default.errors));
    }
    result(V, z, Z) {
      this.failResult((0, a.not)(V), z, Z);
    }
    failResult(V, z, Z) {
      this.gen.if(V), Z ? Z() : this.error(), z ? (this.gen.else(), z(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(V, z) {
      this.failResult((0, a.not)(V), void 0, z);
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
      this.fail((0, a._)`${z} !== undefined && (${(0, a.or)(this.invalid$data(), V)})`);
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
    block$data(V, z, Z = a.nil) {
      this.gen.block(() => {
        this.check$data(V, Z), z();
      });
    }
    check$data(V = a.nil, z = a.nil) {
      if (!this.$data)
        return;
      const { gen: Z, schemaCode: X, schemaType: Y, def: re } = this;
      Z.if((0, a.or)((0, a._)`${X} === undefined`, z)), V !== a.nil && Z.assign(V, !0), (Y.length || re.validateSchema) && (Z.elseIf(this.invalid$data()), this.$dataError(), V !== a.nil && Z.assign(V, !1)), Z.else();
    }
    invalid$data() {
      const { gen: V, schemaCode: z, schemaType: Z, def: X, it: Y } = this;
      return (0, a.or)(re(), ue());
      function re() {
        if (Z.length) {
          if (!(z instanceof a.Name))
            throw new Error("ajv implementation error");
          const ae = Array.isArray(Z) ? Z : [Z];
          return (0, a._)`${(0, o.checkDataTypes)(ae, z, Y.opts.strictNumbers, o.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function ue() {
        if (X.validateSchema) {
          const ae = V.scopeValue("validate$data", { ref: X.validateSchema });
          return (0, a._)`!${ae}(${z})`;
        }
        return a.nil;
      }
    }
    subschema(V, z) {
      const Z = (0, r.getSubschema)(this.it, V);
      (0, r.extendSubschemaData)(Z, this.it, V), (0, r.extendSubschemaMode)(Z, V);
      const X = { ...this.it, ...Z, items: void 0, props: void 0 };
      return l(X, z), X;
    }
    mergeEvaluated(V, z) {
      const { it: Z, gen: X } = this;
      Z.opts.unevaluated && (Z.props !== !0 && V.props !== void 0 && (Z.props = g.mergeEvaluated.props(X, V.props, Z.props, z)), Z.items !== !0 && V.items !== void 0 && (Z.items = g.mergeEvaluated.items(X, V.items, Z.items, z)));
    }
    mergeValidEvaluated(V, z) {
      const { it: Z, gen: X } = this;
      if (Z.opts.unevaluated && (Z.props !== !0 || Z.items !== !0))
        return X.if(z, () => this.mergeEvaluated(V, a.Name)), !0;
    }
  }
  Pe.KeywordCxt = R;
  function M(L, V, z, Z) {
    const X = new R(L, z, V);
    "code" in z ? z.code(X, Z) : X.$data && z.validate ? (0, n.funcKeywordCode)(X, z) : "macro" in z ? (0, n.macroKeywordCode)(X, z) : (z.compile || z.validate) && (0, n.funcKeywordCode)(X, z);
  }
  const B = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function K(L, { dataLevel: V, dataNames: z, dataPathArr: Z }) {
    let X, Y;
    if (L === "")
      return d.default.rootData;
    if (L[0] === "/") {
      if (!B.test(L))
        throw new Error(`Invalid JSON-pointer: ${L}`);
      X = L, Y = d.default.rootData;
    } else {
      const oe = Q.exec(L);
      if (!oe)
        throw new Error(`Invalid JSON-pointer: ${L}`);
      const ie = +oe[1];
      if (X = oe[2], X === "#") {
        if (ie >= V)
          throw new Error(ae("property/index", ie));
        return Z[V - ie];
      }
      if (ie > V)
        throw new Error(ae("data", ie));
      if (Y = z[V - ie], !X)
        return Y;
    }
    let re = Y;
    const ue = X.split("/");
    for (const oe of ue)
      oe && (Y = (0, a._)`${Y}${(0, a.getProperty)((0, g.unescapeJsonPointer)(oe))}`, re = (0, a._)`${re} && ${Y}`);
    return re;
    function ae(oe, ie) {
      return `Cannot access ${oe} ${ie} levels up, current level is ${V}`;
    }
  }
  return Pe.getData = K, Pe;
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
var kt = {}, Qs;
function It() {
  if (Qs) return kt;
  Qs = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zn();
  class t extends Error {
    constructor(o, p, n, r) {
      super(r || `can't resolve reference ${n} from id ${p}`), this.missingRef = (0, e.resolveUrl)(o, p, n), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(o, this.missingRef));
    }
  }
  return kt.default = t, kt;
}
var me = {}, Xs;
function Hn() {
  if (Xs) return me;
  Xs = 1, Object.defineProperty(me, "__esModule", { value: !0 }), me.resolveSchema = me.getCompilingSchema = me.resolveRef = me.compileSchema = me.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Fn(), s = /* @__PURE__ */ $e(), o = /* @__PURE__ */ zn(), p = /* @__PURE__ */ ne(), n = /* @__PURE__ */ $t();
  class r {
    constructor(S) {
      var h;
      this.refs = {}, this.dynamicAnchors = {};
      let l;
      typeof S.schema == "object" && (l = S.schema), this.schema = S.schema, this.schemaId = S.schemaId, this.root = S.root || this, this.baseId = (h = S.baseId) !== null && h !== void 0 ? h : (0, o.normalizeId)(l?.[S.schemaId || "$id"]), this.schemaPath = S.schemaPath, this.localRefs = S.localRefs, this.meta = S.meta, this.$async = l?.$async, this.refs = {};
    }
  }
  me.SchemaEnv = r;
  function a(v) {
    const S = g.call(this, v);
    if (S)
      return S;
    const h = (0, o.getFullPath)(this.opts.uriResolver, v.root.baseId), { es5: l, lines: i } = this.opts.code, { ownProperties: c } = this.opts, m = new e.CodeGen(this.scope, { es5: l, lines: i, ownProperties: c });
    let $;
    v.$async && ($ = m.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const x = m.scopeName("validate");
    v.validateName = x;
    const j = {
      gen: m,
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
      topSchemaRef: m.scopeValue("schema", this.opts.code.source === !0 ? { ref: v.schema, code: (0, e.stringify)(v.schema) } : { ref: v.schema }),
      validateName: x,
      ValidationError: $,
      schema: v.schema,
      schemaEnv: v,
      rootId: h,
      baseId: v.baseId || h,
      schemaPath: e.nil,
      errSchemaPath: v.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let q;
    try {
      this._compilations.add(v), (0, n.validateFunctionCode)(j), m.optimize(this.opts.code.optimize);
      const k = m.toString();
      q = `${m.scopeRefs(s.default.scope)}return ${k}`, this.opts.code.process && (q = this.opts.code.process(q, v));
      const T = new Function(`${s.default.self}`, `${s.default.scope}`, q)(this, this.scope.get());
      if (this.scope.value(x, { ref: T }), T.errors = null, T.schema = v.schema, T.schemaEnv = v, v.$async && (T.$async = !0), this.opts.code.source === !0 && (T.source = { validateName: x, validateCode: k, scopeValues: m._values }), this.opts.unevaluated) {
        const { props: O, items: J } = j;
        T.evaluated = {
          props: O instanceof e.Name ? void 0 : O,
          items: J instanceof e.Name ? void 0 : J,
          dynamicProps: O instanceof e.Name,
          dynamicItems: J instanceof e.Name
        }, T.source && (T.source.evaluated = (0, e.stringify)(T.evaluated));
      }
      return v.validate = T, v;
    } catch (k) {
      throw delete v.validate, delete v.validateName, q && this.logger.error("Error compiling schema, function code:", q), k;
    } finally {
      this._compilations.delete(v);
    }
  }
  me.compileSchema = a;
  function d(v, S, h) {
    var l;
    h = (0, o.resolveUrl)(this.opts.uriResolver, S, h);
    const i = v.refs[h];
    if (i)
      return i;
    let c = u.call(this, v, h);
    if (c === void 0) {
      const m = (l = v.localRefs) === null || l === void 0 ? void 0 : l[h], { schemaId: $ } = this.opts;
      m && (c = new r({ schema: m, schemaId: $, root: v, baseId: S }));
    }
    if (c !== void 0)
      return v.refs[h] = y.call(this, c);
  }
  me.resolveRef = d;
  function y(v) {
    return (0, o.inlineRef)(v.schema, this.opts.inlineRefs) ? v.schema : v.validate ? v : a.call(this, v);
  }
  function g(v) {
    for (const S of this._compilations)
      if (w(S, v))
        return S;
  }
  me.getCompilingSchema = g;
  function w(v, S) {
    return v.schema === S.schema && v.root === S.root && v.baseId === S.baseId;
  }
  function u(v, S) {
    let h;
    for (; typeof (h = this.refs[S]) == "string"; )
      S = h;
    return h || this.schemas[S] || f.call(this, v, S);
  }
  function f(v, S) {
    const h = this.opts.uriResolver.parse(S), l = (0, o._getFullPath)(this.opts.uriResolver, h);
    let i = (0, o.getFullPath)(this.opts.uriResolver, v.baseId, void 0);
    if (Object.keys(v.schema).length > 0 && l === i)
      return _.call(this, h, v);
    const c = (0, o.normalizeId)(l), m = this.refs[c] || this.schemas[c];
    if (typeof m == "string") {
      const $ = f.call(this, v, m);
      return typeof $?.schema != "object" ? void 0 : _.call(this, h, $);
    }
    if (typeof m?.schema == "object") {
      if (m.validate || a.call(this, m), c === (0, o.normalizeId)(S)) {
        const { schema: $ } = m, { schemaId: x } = this.opts, j = $[x];
        return j && (i = (0, o.resolveUrl)(this.opts.uriResolver, i, j)), new r({ schema: $, schemaId: x, root: v, baseId: i });
      }
      return _.call(this, h, m);
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
  function _(v, { baseId: S, schema: h, root: l }) {
    var i;
    if (((i = v.fragment) === null || i === void 0 ? void 0 : i[0]) !== "/")
      return;
    for (const $ of v.fragment.slice(1).split("/")) {
      if (typeof h == "boolean")
        return;
      const x = h[(0, p.unescapeFragment)($)];
      if (x === void 0)
        return;
      h = x;
      const j = typeof h == "object" && h[this.opts.schemaId];
      !b.has($) && j && (S = (0, o.resolveUrl)(this.opts.uriResolver, S, j));
    }
    let c;
    if (typeof h != "boolean" && h.$ref && !(0, p.schemaHasRulesButRef)(h, this.RULES)) {
      const $ = (0, o.resolveUrl)(this.opts.uriResolver, S, h.$ref);
      c = f.call(this, l, $);
    }
    const { schemaId: m } = this.opts;
    if (c = c || new r({ schema: h, schemaId: m, root: l, baseId: S }), c.schema !== c.root.schema)
      return c;
  }
  return me;
}
const Nc = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Oc = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Pc = "object", Tc = ["$data"], kc = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Dc = !1, Mc = {
  $id: Nc,
  description: Oc,
  type: Pc,
  required: Tc,
  properties: kc,
  additionalProperties: Dc
};
var Dt = {}, yt = { exports: {} }, or, Ws;
function co() {
  if (Ws) return or;
  Ws = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function s(u) {
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
  const o = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function p(u) {
    return u.length = 0, !0;
  }
  function n(u, f, b) {
    if (u.length) {
      const _ = s(u);
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
    const b = { error: !1, address: "", zone: "" }, _ = [], v = [];
    let S = !1, h = !1, l = n;
    for (let i = 0; i < u.length; i++) {
      const c = u[i];
      if (!(c === "[" || c === "]"))
        if (c === ":") {
          if (S === !0 && (h = !0), !l(v, _, b))
            break;
          if (++f > 7) {
            b.error = !0;
            break;
          }
          i > 0 && u[i - 1] === ":" && (S = !0), _.push(":");
          continue;
        } else if (c === "%") {
          if (!l(v, _, b))
            break;
          l = p;
        } else {
          v.push(c);
          continue;
        }
    }
    return v.length && (l === p ? b.zone = v.join("") : h ? _.push(v.join("")) : _.push(s(v))), b.address = _.join(""), b;
  }
  function a(u) {
    if (d(u, ":") < 2)
      return { host: u, isIPV6: !1 };
    const f = r(u);
    if (f.error)
      return { host: u, isIPV6: !1 };
    {
      let b = f.address, _ = f.address;
      return f.zone && (b += "%" + f.zone, _ += "%25" + f.zone), { host: b, isIPV6: !0, escapedHost: _ };
    }
  }
  function d(u, f) {
    let b = 0;
    for (let _ = 0; _ < u.length; _++)
      u[_] === f && b++;
    return b;
  }
  function y(u) {
    let f = u;
    const b = [];
    let _ = -1, v = 0;
    for (; v = f.length; ) {
      if (v === 1) {
        if (f === ".")
          break;
        if (f === "/") {
          b.push("/");
          break;
        } else {
          b.push(f);
          break;
        }
      } else if (v === 2) {
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
      } else if (v === 3 && f === "/..") {
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
  function g(u, f) {
    const b = f !== !0 ? escape : unescape;
    return u.scheme !== void 0 && (u.scheme = b(u.scheme)), u.userinfo !== void 0 && (u.userinfo = b(u.userinfo)), u.host !== void 0 && (u.host = b(u.host)), u.path !== void 0 && (u.path = b(u.path)), u.query !== void 0 && (u.query = b(u.query)), u.fragment !== void 0 && (u.fragment = b(u.fragment)), u;
  }
  function w(u) {
    const f = [];
    if (u.userinfo !== void 0 && (f.push(u.userinfo), f.push("@")), u.host !== void 0) {
      let b = unescape(u.host);
      if (!t(b)) {
        const _ = a(b);
        _.isIPV6 === !0 ? b = `[${_.escapedHost}]` : b = u.host;
      }
      f.push(b);
    }
    return (typeof u.port == "number" || typeof u.port == "string") && (f.push(":"), f.push(String(u.port))), f.length ? f.join("") : void 0;
  }
  return or = {
    nonSimpleDomain: o,
    recomposeAuthority: w,
    normalizeComponentEncoding: g,
    removeDotSegments: y,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: a,
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
  function o(c) {
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
    const m = String(c.scheme).toLowerCase() === "https";
    return (c.port === (m ? 443 : 80) || c.port === "") && (c.port = void 0), c.path || (c.path = "/"), c;
  }
  function a(c) {
    return c.secure = p(c), c.resourceName = (c.path || "/") + (c.query ? "?" + c.query : ""), c.path = void 0, c.query = void 0, c;
  }
  function d(c) {
    if ((c.port === (p(c) ? 443 : 80) || c.port === "") && (c.port = void 0), typeof c.secure == "boolean" && (c.scheme = c.secure ? "wss" : "ws", c.secure = void 0), c.resourceName) {
      const [m, $] = c.resourceName.split("?");
      c.path = m && m !== "/" ? m : void 0, c.query = $, c.resourceName = void 0;
    }
    return c.fragment = void 0, c;
  }
  function y(c, m) {
    if (!c.path)
      return c.error = "URN can not be parsed", c;
    const $ = c.path.match(t);
    if ($) {
      const x = m.scheme || c.scheme || "urn";
      c.nid = $[1].toLowerCase(), c.nss = $[2];
      const j = `${x}:${m.nid || c.nid}`, q = i(j);
      c.path = void 0, q && (c = q.parse(c, m));
    } else
      c.error = c.error || "URN can not be parsed.";
    return c;
  }
  function g(c, m) {
    if (c.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const $ = m.scheme || c.scheme || "urn", x = c.nid.toLowerCase(), j = `${$}:${m.nid || x}`, q = i(j);
    q && (c = q.serialize(c, m));
    const k = c, C = c.nss;
    return k.path = `${x || m.nid}:${C}`, m.skipEscape = !0, k;
  }
  function w(c, m) {
    const $ = c;
    return $.uuid = $.nss, $.nss = void 0, !m.tolerant && (!$.uuid || !e($.uuid)) && ($.error = $.error || "UUID is not valid."), $;
  }
  function u(c) {
    const m = c;
    return m.nss = (c.uuid || "").toLowerCase(), m;
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
      parse: a,
      serialize: d
    }
  ), v = (
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
      wss: v,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: y,
          serialize: g,
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
    isValidSchemeName: o,
    getSchemeHandler: i
  }, cr;
}
var ei;
function Cc() {
  if (ei) return yt.exports;
  ei = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: s, normalizeComponentEncoding: o, isIPv4: p, nonSimpleDomain: n } = co(), { SCHEMES: r, getSchemeHandler: a } = Lc();
  function d(v, S) {
    return typeof v == "string" ? v = /** @type {T} */
    u(b(v, S), S) : typeof v == "object" && (v = /** @type {T} */
    b(u(v, S), S)), v;
  }
  function y(v, S, h) {
    const l = h ? Object.assign({ scheme: "null" }, h) : { scheme: "null" }, i = g(b(v, l), b(S, l), l, !0);
    return l.skipEscape = !0, u(i, l);
  }
  function g(v, S, h, l) {
    const i = {};
    return l || (v = b(u(v, h), h), S = b(u(S, h), h)), h = h || {}, !h.tolerant && S.scheme ? (i.scheme = S.scheme, i.userinfo = S.userinfo, i.host = S.host, i.port = S.port, i.path = t(S.path || ""), i.query = S.query) : (S.userinfo !== void 0 || S.host !== void 0 || S.port !== void 0 ? (i.userinfo = S.userinfo, i.host = S.host, i.port = S.port, i.path = t(S.path || ""), i.query = S.query) : (S.path ? (S.path[0] === "/" ? i.path = t(S.path) : ((v.userinfo !== void 0 || v.host !== void 0 || v.port !== void 0) && !v.path ? i.path = "/" + S.path : v.path ? i.path = v.path.slice(0, v.path.lastIndexOf("/") + 1) + S.path : i.path = S.path, i.path = t(i.path)), i.query = S.query) : (i.path = v.path, S.query !== void 0 ? i.query = S.query : i.query = v.query), i.userinfo = v.userinfo, i.host = v.host, i.port = v.port), i.scheme = v.scheme), i.fragment = S.fragment, i;
  }
  function w(v, S, h) {
    return typeof v == "string" ? (v = unescape(v), v = u(o(b(v, h), !0), { ...h, skipEscape: !0 })) : typeof v == "object" && (v = u(o(v, !0), { ...h, skipEscape: !0 })), typeof S == "string" ? (S = unescape(S), S = u(o(b(S, h), !0), { ...h, skipEscape: !0 })) : typeof S == "object" && (S = u(o(S, !0), { ...h, skipEscape: !0 })), v.toLowerCase() === S.toLowerCase();
  }
  function u(v, S) {
    const h = {
      host: v.host,
      scheme: v.scheme,
      userinfo: v.userinfo,
      port: v.port,
      path: v.path,
      query: v.query,
      nid: v.nid,
      nss: v.nss,
      uuid: v.uuid,
      fragment: v.fragment,
      reference: v.reference,
      resourceName: v.resourceName,
      secure: v.secure,
      error: ""
    }, l = Object.assign({}, S), i = [], c = a(l.scheme || h.scheme);
    c && c.serialize && c.serialize(h, l), h.path !== void 0 && (l.skipEscape ? h.path = unescape(h.path) : (h.path = escape(h.path), h.scheme !== void 0 && (h.path = h.path.split("%3A").join(":")))), l.reference !== "suffix" && h.scheme && i.push(h.scheme, ":");
    const m = s(h);
    if (m !== void 0 && (l.reference !== "suffix" && i.push("//"), i.push(m), h.path && h.path[0] !== "/" && i.push("/")), h.path !== void 0) {
      let $ = h.path;
      !l.absolutePath && (!c || !c.absolutePath) && ($ = t($)), m === void 0 && $[0] === "/" && $[1] === "/" && ($ = "/%2F" + $.slice(2)), i.push($);
    }
    return h.query !== void 0 && i.push("?", h.query), h.fragment !== void 0 && i.push("#", h.fragment), i.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function b(v, S) {
    const h = Object.assign({}, S), l = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let i = !1;
    h.reference === "suffix" && (h.scheme ? v = h.scheme + ":" + v : v = "//" + v);
    const c = v.match(f);
    if (c) {
      if (l.scheme = c[1], l.userinfo = c[3], l.host = c[4], l.port = parseInt(c[5], 10), l.path = c[6] || "", l.query = c[7], l.fragment = c[8], isNaN(l.port) && (l.port = c[5]), l.host)
        if (p(l.host) === !1) {
          const x = e(l.host);
          l.host = x.host.toLowerCase(), i = x.isIPV6;
        } else
          i = !0;
      l.scheme === void 0 && l.userinfo === void 0 && l.host === void 0 && l.port === void 0 && l.query === void 0 && !l.path ? l.reference = "same-document" : l.scheme === void 0 ? l.reference = "relative" : l.fragment === void 0 ? l.reference = "absolute" : l.reference = "uri", h.reference && h.reference !== "suffix" && h.reference !== l.reference && (l.error = l.error || "URI is not a " + h.reference + " reference.");
      const m = a(h.scheme || l.scheme);
      if (!h.unicodeSupport && (!m || !m.unicodeSupport) && l.host && (h.domainHost || m && m.domainHost) && i === !1 && n(l.host))
        try {
          l.host = URL.domainToASCII(l.host.toLowerCase());
        } catch ($) {
          l.error = l.error || "Host's domain name can not be converted to ASCII: " + $;
        }
      (!m || m && !m.skipNormalize) && (v.indexOf("%") !== -1 && (l.scheme !== void 0 && (l.scheme = unescape(l.scheme)), l.host !== void 0 && (l.host = unescape(l.host))), l.path && (l.path = escape(unescape(l.path))), l.fragment && (l.fragment = encodeURI(decodeURIComponent(l.fragment)))), m && m.parse && m.parse(l, h);
    } else
      l.error = l.error || "URI can not be parsed.";
    return l;
  }
  const _ = {
    SCHEMES: r,
    normalize: d,
    resolve: y,
    resolveComponent: g,
    equal: w,
    serialize: u,
    parse: b
  };
  return yt.exports = _, yt.exports.default = _, yt.exports.fastUri = _, yt.exports;
}
var ti;
function Uc() {
  if (ti) return Dt;
  ti = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const e = Cc();
  return e.code = 'require("ajv/dist/runtime/uri").default', Dt.default = e, Dt;
}
var ni;
function uo() {
  return ni || (ni = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ $t();
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
    const o = /* @__PURE__ */ Fn(), p = /* @__PURE__ */ It(), n = /* @__PURE__ */ io(), r = /* @__PURE__ */ Hn(), a = /* @__PURE__ */ ee(), d = /* @__PURE__ */ zn(), y = /* @__PURE__ */ Mn(), g = /* @__PURE__ */ ne(), w = Mc, u = /* @__PURE__ */ Uc(), f = (A, P) => new RegExp(A, P);
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
    ]), v = {
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
    }, S = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, h = 200;
    function l(A) {
      var P, U, D, E, I, R, M, B, Q, K, L, V, z, Z, X, Y, re, ue, ae, oe, ie, Ee, ge, Kn, Zn;
      const ht = A.strict, Qn = (P = A.code) === null || P === void 0 ? void 0 : P.optimize, bs = Qn === !0 || Qn === void 0 ? 1 : Qn || 0, ws = (D = (U = A.code) === null || U === void 0 ? void 0 : U.regExp) !== null && D !== void 0 ? D : f, To = (E = A.uriResolver) !== null && E !== void 0 ? E : u.default;
      return {
        strictSchema: (R = (I = A.strictSchema) !== null && I !== void 0 ? I : ht) !== null && R !== void 0 ? R : !0,
        strictNumbers: (B = (M = A.strictNumbers) !== null && M !== void 0 ? M : ht) !== null && B !== void 0 ? B : !0,
        strictTypes: (K = (Q = A.strictTypes) !== null && Q !== void 0 ? Q : ht) !== null && K !== void 0 ? K : "log",
        strictTuples: (V = (L = A.strictTuples) !== null && L !== void 0 ? L : ht) !== null && V !== void 0 ? V : "log",
        strictRequired: (Z = (z = A.strictRequired) !== null && z !== void 0 ? z : ht) !== null && Z !== void 0 ? Z : !1,
        code: A.code ? { ...A.code, optimize: bs, regExp: ws } : { optimize: bs, regExp: ws },
        loopRequired: (X = A.loopRequired) !== null && X !== void 0 ? X : h,
        loopEnum: (Y = A.loopEnum) !== null && Y !== void 0 ? Y : h,
        meta: (re = A.meta) !== null && re !== void 0 ? re : !0,
        messages: (ue = A.messages) !== null && ue !== void 0 ? ue : !0,
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
      constructor(P = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), P = this.opts = { ...P, ...l(P) };
        const { es5: U, lines: D } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: _, es5: U, lines: D }), this.logger = C(P.logger);
        const E = P.validateFormats;
        P.validateFormats = !1, this.RULES = (0, n.getRules)(), c.call(this, v, P, "NOT SUPPORTED"), c.call(this, S, P, "DEPRECATED", "warn"), this._metaOpts = q.call(this), P.formats && x.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), P.keywords && j.call(this, P.keywords), typeof P.meta == "object" && this.addMetaSchema(P.meta), $.call(this), P.validateFormats = E;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: P, meta: U, schemaId: D } = this.opts;
        let E = w;
        D === "id" && (E = { ...w }, E.id = E.$id, delete E.$id), U && P && this.addMetaSchema(E, E[D], !1);
      }
      defaultMeta() {
        const { meta: P, schemaId: U } = this.opts;
        return this.opts.defaultMeta = typeof P == "object" ? P[U] || P : void 0;
      }
      validate(P, U) {
        let D;
        if (typeof P == "string") {
          if (D = this.getSchema(P), !D)
            throw new Error(`no schema with key or ref "${P}"`);
        } else
          D = this.compile(P);
        const E = D(U);
        return "$async" in D || (this.errors = D.errors), E;
      }
      compile(P, U) {
        const D = this._addSchema(P, U);
        return D.validate || this._compileSchemaEnv(D);
      }
      compileAsync(P, U) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: D } = this.opts;
        return E.call(this, P, U);
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
            return M.call(this, L), await B.call(this, L.missingSchema), R.call(this, K);
          }
        }
        function M({ missingSchema: K, missingRef: L }) {
          if (this.refs[K])
            throw new Error(`AnySchema ${K} is loaded but ${L} cannot be resolved`);
        }
        async function B(K) {
          const L = await Q.call(this, K);
          this.refs[K] || await I.call(this, L.$schema), this.refs[K] || this.addSchema(L, K, U);
        }
        async function Q(K) {
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
      addSchema(P, U, D, E = this.opts.validateSchema) {
        if (Array.isArray(P)) {
          for (const R of P)
            this.addSchema(R, void 0, D, E);
          return this;
        }
        let I;
        if (typeof P == "object") {
          const { schemaId: R } = this.opts;
          if (I = P[R], I !== void 0 && typeof I != "string")
            throw new Error(`schema ${R} must be string`);
        }
        return U = (0, d.normalizeId)(U || I), this._checkUnique(U), this.schemas[U] = this._addSchema(P, D, U, E, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(P, U, D = this.opts.validateSchema) {
        return this.addSchema(P, U, !0, D), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(P, U) {
        if (typeof P == "boolean")
          return !0;
        let D;
        if (D = P.$schema, D !== void 0 && typeof D != "string")
          throw new Error("$schema must be a string");
        if (D = D || this.opts.defaultMeta || this.defaultMeta(), !D)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const E = this.validate(D, P);
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
      getSchema(P) {
        let U;
        for (; typeof (U = m.call(this, P)) == "string"; )
          P = U;
        if (U === void 0) {
          const { schemaId: D } = this.opts, E = new r.SchemaEnv({ schema: {}, schemaId: D });
          if (U = r.resolveSchema.call(this, E, P), !U)
            return;
          this.refs[P] = U;
        }
        return U.validate || this._compileSchemaEnv(U);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(P) {
        if (P instanceof RegExp)
          return this._removeAllSchemas(this.schemas, P), this._removeAllSchemas(this.refs, P), this;
        switch (typeof P) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const U = m.call(this, P);
            return typeof U == "object" && this._cache.delete(U.schema), delete this.schemas[P], delete this.refs[P], this;
          }
          case "object": {
            const U = P;
            this._cache.delete(U);
            let D = P[this.opts.schemaId];
            return D && (D = (0, d.normalizeId)(D), delete this.schemas[D], delete this.refs[D]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(P) {
        for (const U of P)
          this.addKeyword(U);
        return this;
      }
      addKeyword(P, U) {
        let D;
        if (typeof P == "string")
          D = P, typeof U == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), U.keyword = D);
        else if (typeof P == "object" && U === void 0) {
          if (U = P, D = U.keyword, Array.isArray(D) && !D.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (O.call(this, D, U), !U)
          return (0, g.eachItem)(D, (I) => J.call(this, I)), this;
        H.call(this, U);
        const E = {
          ...U,
          type: (0, y.getJSONTypes)(U.type),
          schemaType: (0, y.getJSONTypes)(U.schemaType)
        };
        return (0, g.eachItem)(D, E.type.length === 0 ? (I) => J.call(this, I, E) : (I) => E.type.forEach((R) => J.call(this, I, E, R))), this;
      }
      getKeyword(P) {
        const U = this.RULES.all[P];
        return typeof U == "object" ? U.definition : !!U;
      }
      // Remove keyword
      removeKeyword(P) {
        const { RULES: U } = this;
        delete U.keywords[P], delete U.all[P];
        for (const D of U.rules) {
          const E = D.rules.findIndex((I) => I.keyword === P);
          E >= 0 && D.rules.splice(E, 1);
        }
        return this;
      }
      // Add format
      addFormat(P, U) {
        return typeof U == "string" && (U = new RegExp(U)), this.formats[P] = U, this;
      }
      errorsText(P = this.errors, { separator: U = ", ", dataVar: D = "data" } = {}) {
        return !P || P.length === 0 ? "No errors" : P.map((E) => `${D}${E.instancePath} ${E.message}`).reduce((E, I) => E + U + I);
      }
      $dataMetaSchema(P, U) {
        const D = this.RULES.all;
        P = JSON.parse(JSON.stringify(P));
        for (const E of U) {
          const I = E.split("/").slice(1);
          let R = P;
          for (const M of I)
            R = R[M];
          for (const M in D) {
            const B = D[M];
            if (typeof B != "object")
              continue;
            const { $data: Q } = B.definition, K = R[M];
            Q && K && (R[M] = G(K));
          }
        }
        return P;
      }
      _removeAllSchemas(P, U) {
        for (const D in P) {
          const E = P[D];
          (!U || U.test(D)) && (typeof E == "string" ? delete P[D] : E && !E.meta && (this._cache.delete(E.schema), delete P[D]));
        }
      }
      _addSchema(P, U, D, E = this.opts.validateSchema, I = this.opts.addUsedSchema) {
        let R;
        const { schemaId: M } = this.opts;
        if (typeof P == "object")
          R = P[M];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof P != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let B = this._cache.get(P);
        if (B !== void 0)
          return B;
        D = (0, d.normalizeId)(R || D);
        const Q = d.getSchemaRefs.call(this, P, D);
        return B = new r.SchemaEnv({ schema: P, schemaId: M, meta: U, baseId: D, localRefs: Q }), this._cache.set(B.schema, B), I && !D.startsWith("#") && (D && this._checkUnique(D), this.refs[D] = B), E && this.validateSchema(P, !0), B;
      }
      _checkUnique(P) {
        if (this.schemas[P] || this.refs[P])
          throw new Error(`schema with key or id "${P}" already exists`);
      }
      _compileSchemaEnv(P) {
        if (P.meta ? this._compileMetaSchema(P) : r.compileSchema.call(this, P), !P.validate)
          throw new Error("ajv implementation error");
        return P.validate;
      }
      _compileMetaSchema(P) {
        const U = this.opts;
        this.opts = this._metaOpts;
        try {
          r.compileSchema.call(this, P);
        } finally {
          this.opts = U;
        }
      }
    }
    i.ValidationError = o.default, i.MissingRefError = p.default, e.default = i;
    function c(A, P, U, D = "error") {
      for (const E in A) {
        const I = E;
        I in P && this.logger[D](`${U}: option ${E}. ${A[I]}`);
      }
    }
    function m(A) {
      return A = (0, d.normalizeId)(A), this.schemas[A] || this.refs[A];
    }
    function $() {
      const A = this.opts.schemas;
      if (A)
        if (Array.isArray(A))
          this.addSchema(A);
        else
          for (const P in A)
            this.addSchema(A[P], P);
    }
    function x() {
      for (const A in this.opts.formats) {
        const P = this.opts.formats[A];
        P && this.addFormat(A, P);
      }
    }
    function j(A) {
      if (Array.isArray(A)) {
        this.addVocabulary(A);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const P in A) {
        const U = A[P];
        U.keyword || (U.keyword = P), this.addKeyword(U);
      }
    }
    function q() {
      const A = { ...this.opts };
      for (const P of b)
        delete A[P];
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
    function O(A, P) {
      const { RULES: U } = this;
      if ((0, g.eachItem)(A, (D) => {
        if (U.keywords[D])
          throw new Error(`Keyword ${D} is already defined`);
        if (!T.test(D))
          throw new Error(`Keyword ${D} has invalid name`);
      }), !!P && P.$data && !("code" in P || "validate" in P))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function J(A, P, U) {
      var D;
      const E = P?.post;
      if (U && E)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: I } = this;
      let R = E ? I.post : I.rules.find(({ type: B }) => B === U);
      if (R || (R = { type: U, rules: [] }, I.rules.push(R)), I.keywords[A] = !0, !P)
        return;
      const M = {
        keyword: A,
        definition: {
          ...P,
          type: (0, y.getJSONTypes)(P.type),
          schemaType: (0, y.getJSONTypes)(P.schemaType)
        }
      };
      P.before ? N.call(this, R, M, P.before) : R.rules.push(M), I.all[A] = M, (D = P.implements) === null || D === void 0 || D.forEach((B) => this.addKeyword(B));
    }
    function N(A, P, U) {
      const D = A.rules.findIndex((E) => E.keyword === U);
      D >= 0 ? A.rules.splice(D, 0, P) : (A.rules.push(P), this.logger.warn(`rule ${U} is not defined`));
    }
    function H(A) {
      let { metaSchema: P } = A;
      P !== void 0 && (A.$data && this.opts.$data && (P = G(P)), A.validateSchema = this.compile(P, !0));
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
  const e = /* @__PURE__ */ It(), t = /* @__PURE__ */ Ie(), s = /* @__PURE__ */ ee(), o = /* @__PURE__ */ $e(), p = /* @__PURE__ */ Hn(), n = /* @__PURE__ */ ne(), r = {
    keyword: "$ref",
    schemaType: "string",
    code(y) {
      const { gen: g, schema: w, it: u } = y, { baseId: f, schemaEnv: b, validateName: _, opts: v, self: S } = u, { root: h } = b;
      if ((w === "#" || w === "#/") && f === h.baseId)
        return i();
      const l = p.resolveRef.call(S, h, f, w);
      if (l === void 0)
        throw new e.default(u.opts.uriResolver, f, w);
      if (l instanceof p.SchemaEnv)
        return c(l);
      return m(l);
      function i() {
        if (b === h)
          return d(y, _, b, b.$async);
        const $ = g.scopeValue("root", { ref: h });
        return d(y, (0, s._)`${$}.validate`, h, h.$async);
      }
      function c($) {
        const x = a(y, $);
        d(y, x, $, $.$async);
      }
      function m($) {
        const x = g.scopeValue("schema", v.code.source === !0 ? { ref: $, code: (0, s.stringify)($) } : { ref: $ }), j = g.name("valid"), q = y.subschema({
          schema: $,
          dataTypes: [],
          schemaPath: s.nil,
          topSchemaRef: x,
          errSchemaPath: w
        }, j);
        y.mergeEvaluated(q), y.ok(j);
      }
    }
  };
  function a(y, g) {
    const { gen: w } = y;
    return g.validate ? w.scopeValue("validate", { ref: g.validate }) : (0, s._)`${w.scopeValue("wrapper", { ref: g })}.validate`;
  }
  He.getValidate = a;
  function d(y, g, w, u) {
    const { gen: f, it: b } = y, { allErrors: _, schemaEnv: v, opts: S } = b, h = S.passContext ? o.default.this : s.nil;
    u ? l() : i();
    function l() {
      if (!v.$async)
        throw new Error("async schema referenced by sync schema");
      const $ = f.let("valid");
      f.try(() => {
        f.code((0, s._)`await ${(0, t.callValidateCode)(y, g, h)}`), m(g), _ || f.assign($, !0);
      }, (x) => {
        f.if((0, s._)`!(${x} instanceof ${b.ValidationError})`, () => f.throw(x)), c(x), _ || f.assign($, !1);
      }), y.ok($);
    }
    function i() {
      y.result((0, t.callValidateCode)(y, g, h), () => m(g), () => c(g));
    }
    function c($) {
      const x = (0, s._)`${$}.errors`;
      f.assign(o.default.vErrors, (0, s._)`${o.default.vErrors} === null ? ${x} : ${o.default.vErrors}.concat(${x})`), f.assign(o.default.errors, (0, s._)`${o.default.vErrors}.length`);
    }
    function m($) {
      var x;
      if (!b.opts.unevaluated)
        return;
      const j = (x = w?.validate) === null || x === void 0 ? void 0 : x.evaluated;
      if (b.props !== !0)
        if (j && !j.dynamicProps)
          j.props !== void 0 && (b.props = n.mergeEvaluated.props(f, j.props, b.props));
        else {
          const q = f.var("props", (0, s._)`${$}.evaluated.props`);
          b.props = n.mergeEvaluated.props(f, q, b.props, s.Name);
        }
      if (b.items !== !0)
        if (j && !j.dynamicItems)
          j.items !== void 0 && (b.items = n.mergeEvaluated.items(f, j.items, b.items));
        else {
          const q = f.var("items", (0, s._)`${$}.evaluated.items`);
          b.items = n.mergeEvaluated.items(f, q, b.items, s.Name);
        }
    }
  }
  return He.callRef = d, He.default = r, He;
}
var ii;
function lo() {
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
  }, o = {
    message: ({ keyword: n, schemaCode: r }) => (0, e.str)`must be ${s[n].okStr} ${r}`,
    params: ({ keyword: n, schemaCode: r }) => (0, e._)`{comparison: ${s[n].okStr}, limit: ${r}}`
  }, p = {
    keyword: Object.keys(s),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: o,
    code(n) {
      const { keyword: r, data: a, schemaCode: d } = n;
      n.fail$data((0, e._)`${a} ${s[r].fail} ${d} || isNaN(${a})`);
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
      message: ({ schemaCode: o }) => (0, e.str)`must be multiple of ${o}`,
      params: ({ schemaCode: o }) => (0, e._)`{multipleOf: ${o}}`
    },
    code(o) {
      const { gen: p, data: n, schemaCode: r, it: a } = o, d = a.opts.multipleOfPrecision, y = p.let("res"), g = d ? (0, e._)`Math.abs(Math.round(${y}) - ${y}) > 1e-${d}` : (0, e._)`${y} !== parseInt(${y})`;
      o.fail$data((0, e._)`(${r} === 0 || (${y} = ${n}/${r}, ${g}))`);
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
    let o = 0, p = 0, n;
    for (; p < s; )
      o++, n = t.charCodeAt(p++), n >= 55296 && n <= 56319 && p < s && (n = t.charCodeAt(p), (n & 64512) === 56320 && p++);
    return o;
  }
  return Ht.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Ht;
}
var di;
function Bc() {
  if (di) return Ft;
  di = 1, Object.defineProperty(Ft, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), s = /* @__PURE__ */ Hc(), p = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: n, schemaCode: r }) {
        const a = n === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${a} than ${r} characters`;
      },
      params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { keyword: r, data: a, schemaCode: d, it: y } = n, g = r === "maxLength" ? e.operators.GT : e.operators.LT, w = y.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(n.gen, s.default)}(${a})`;
      n.fail$data((0, e._)`${w} ${g} ${d}`);
    }
  };
  return Ft.default = p, Ft;
}
var Bt = {}, ui;
function Jc() {
  if (ui) return Bt;
  ui = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
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
      const { gen: r, data: a, $data: d, schema: y, schemaCode: g, it: w } = n, u = w.opts.unicodeRegExp ? "u" : "";
      if (d) {
        const { regExp: f } = w.opts.code, b = f.code === "new RegExp" ? (0, s._)`new RegExp` : (0, t.useFunc)(r, f), _ = r.let("valid");
        r.try(() => r.assign(_, (0, s._)`${b}(${g}, ${u}).test(${a})`), () => r.assign(_, !1)), n.fail$data((0, s._)`!${_}`);
      } else {
        const f = (0, e.usePattern)(n, y);
        n.fail$data((0, s._)`!${f}.test(${a})`);
      }
    }
  };
  return Bt.default = p, Bt;
}
var Jt = {}, li;
function Gc() {
  if (li) return Jt;
  li = 1, Object.defineProperty(Jt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), s = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: p }) {
        const n = o === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${n} than ${p} properties`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: p, data: n, schemaCode: r } = o, a = p === "maxProperties" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`Object.keys(${n}).length ${a} ${r}`);
    }
  };
  return Jt.default = s, Jt;
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
      const { gen: r, schema: a, schemaCode: d, data: y, $data: g, it: w } = n, { opts: u } = w;
      if (!g && a.length === 0)
        return;
      const f = a.length >= u.loopRequired;
      if (w.allErrors ? b() : _(), u.strictRequired) {
        const h = n.parentSchema.properties, { definedProperties: l } = n.it;
        for (const i of a)
          if (h?.[i] === void 0 && !l.has(i)) {
            const c = w.schemaEnv.baseId + w.errSchemaPath, m = `required property "${i}" is not defined at "${c}" (strictRequired)`;
            (0, s.checkStrictMode)(w, m, w.opts.strictRequired);
          }
      }
      function b() {
        if (f || g)
          n.block$data(t.nil, v);
        else
          for (const h of a)
            (0, e.checkReportMissingProp)(n, h);
      }
      function _() {
        const h = r.let("missing");
        if (f || g) {
          const l = r.let("valid", !0);
          n.block$data(l, () => S(h, l)), n.ok(l);
        } else
          r.if((0, e.checkMissingProp)(n, a, h)), (0, e.reportMissingProp)(n, h), r.else();
      }
      function v() {
        r.forOf("prop", d, (h) => {
          n.setParams({ missingProperty: h }), r.if((0, e.noPropertyInData)(r, y, h, u.ownProperties), () => n.error());
        });
      }
      function S(h, l) {
        n.setParams({ missingProperty: h }), r.forOf(h, d, () => {
          r.assign(l, (0, e.propertyInData)(r, y, h, u.ownProperties)), r.if((0, t.not)(l), () => {
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
      message({ keyword: o, schemaCode: p }) {
        const n = o === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${n} than ${p} items`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: p, data: n, schemaCode: r } = o, a = p === "maxItems" ? e.operators.GT : e.operators.LT;
      o.fail$data((0, e._)`${n}.length ${a} ${r}`);
    }
  };
  return Kt.default = s, Kt;
}
var Zt = {}, Qt = {}, hi;
function ds() {
  if (hi) return Qt;
  hi = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = oo();
  return e.code = 'require("ajv/dist/runtime/equal").default', Qt.default = e, Qt;
}
var mi;
function Qc() {
  if (mi) return Zt;
  mi = 1, Object.defineProperty(Zt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Mn(), t = /* @__PURE__ */ ee(), s = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ds(), n = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: r, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${r} are identical)`,
      params: ({ params: { i: r, j: a } }) => (0, t._)`{i: ${r}, j: ${a}}`
    },
    code(r) {
      const { gen: a, data: d, $data: y, schema: g, parentSchema: w, schemaCode: u, it: f } = r;
      if (!y && !g)
        return;
      const b = a.let("valid"), _ = w.items ? (0, e.getSchemaTypes)(w.items) : [];
      r.block$data(b, v, (0, t._)`${u} === false`), r.ok(b);
      function v() {
        const i = a.let("i", (0, t._)`${d}.length`), c = a.let("j");
        r.setParams({ i, j: c }), a.assign(b, !0), a.if((0, t._)`${i} > 1`, () => (S() ? h : l)(i, c));
      }
      function S() {
        return _.length > 0 && !_.some((i) => i === "object" || i === "array");
      }
      function h(i, c) {
        const m = a.name("item"), $ = (0, e.checkDataTypes)(_, m, f.opts.strictNumbers, e.DataType.Wrong), x = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${i}--;`, () => {
          a.let(m, (0, t._)`${d}[${i}]`), a.if($, (0, t._)`continue`), _.length > 1 && a.if((0, t._)`typeof ${m} == "string"`, (0, t._)`${m} += "_"`), a.if((0, t._)`typeof ${x}[${m}] == "number"`, () => {
            a.assign(c, (0, t._)`${x}[${m}]`), r.error(), a.assign(b, !1).break();
          }).code((0, t._)`${x}[${m}] = ${i}`);
        });
      }
      function l(i, c) {
        const m = (0, s.useFunc)(a, o.default), $ = a.name("outer");
        a.label($).for((0, t._)`;${i}--;`, () => a.for((0, t._)`${c} = ${i}; ${c}--;`, () => a.if((0, t._)`${m}(${d}[${i}], ${d}[${c}])`, () => {
          r.error(), a.assign(b, !1).break($);
        })));
      }
    }
  };
  return Zt.default = n, Zt;
}
var Xt = {}, yi;
function Xc() {
  if (yi) return Xt;
  yi = 1, Object.defineProperty(Xt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), s = /* @__PURE__ */ ds(), p = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: n }) => (0, e._)`{allowedValue: ${n}}`
    },
    code(n) {
      const { gen: r, data: a, $data: d, schemaCode: y, schema: g } = n;
      d || g && typeof g == "object" ? n.fail$data((0, e._)`!${(0, t.useFunc)(r, s.default)}(${a}, ${y})`) : n.fail((0, e._)`${g} !== ${a}`);
    }
  };
  return Xt.default = p, Xt;
}
var Wt = {}, gi;
function Wc() {
  if (gi) return Wt;
  gi = 1, Object.defineProperty(Wt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), s = /* @__PURE__ */ ds(), p = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: n }) => (0, e._)`{allowedValues: ${n}}`
    },
    code(n) {
      const { gen: r, data: a, $data: d, schema: y, schemaCode: g, it: w } = n;
      if (!d && y.length === 0)
        throw new Error("enum must have non-empty array");
      const u = y.length >= w.opts.loopEnum;
      let f;
      const b = () => f ?? (f = (0, t.useFunc)(r, s.default));
      let _;
      if (u || d)
        _ = r.let("valid"), n.block$data(_, v);
      else {
        if (!Array.isArray(y))
          throw new Error("ajv implementation error");
        const h = r.const("vSchema", g);
        _ = (0, e.or)(...y.map((l, i) => S(h, i)));
      }
      n.pass(_);
      function v() {
        r.assign(_, !1), r.forOf("v", g, (h) => r.if((0, e._)`${b()}(${a}, ${h})`, () => r.assign(_, !0).break()));
      }
      function S(h, l) {
        const i = y[l];
        return typeof i == "object" && i !== null ? (0, e._)`${b()}(${a}, ${h}[${l}])` : (0, e._)`${a} === ${i}`;
      }
    }
  };
  return Wt.default = p, Wt;
}
var vi;
function fo() {
  if (vi) return Ut;
  vi = 1, Object.defineProperty(Ut, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zc(), t = /* @__PURE__ */ Fc(), s = /* @__PURE__ */ Bc(), o = /* @__PURE__ */ Jc(), p = /* @__PURE__ */ Gc(), n = /* @__PURE__ */ Kc(), r = /* @__PURE__ */ Zc(), a = /* @__PURE__ */ Qc(), d = /* @__PURE__ */ Xc(), y = /* @__PURE__ */ Wc(), g = [
    // number
    e.default,
    t.default,
    // string
    s.default,
    o.default,
    // object
    p.default,
    n.default,
    // array
    r.default,
    a.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    d.default,
    y.default
  ];
  return Ut.default = g, Ut;
}
var Yt = {}, tt = {}, bi;
function po() {
  if (bi) return tt;
  bi = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), o = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: n } }) => (0, e.str)`must NOT have more than ${n} items`,
      params: ({ params: { len: n } }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { parentSchema: r, it: a } = n, { items: d } = r;
      if (!Array.isArray(d)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      p(n, d);
    }
  };
  function p(n, r) {
    const { gen: a, schema: d, data: y, keyword: g, it: w } = n;
    w.items = !0;
    const u = a.const("len", (0, e._)`${y}.length`);
    if (d === !1)
      n.setParams({ len: r.length }), n.pass((0, e._)`${u} <= ${r.length}`);
    else if (typeof d == "object" && !(0, t.alwaysValidSchema)(w, d)) {
      const b = a.var("valid", (0, e._)`${u} <= ${r.length}`);
      a.if((0, e.not)(b), () => f(b)), n.ok(b);
    }
    function f(b) {
      a.forRange("i", r.length, u, (_) => {
        n.subschema({ keyword: g, dataProp: _, dataPropType: t.Type.Num }, b), w.allErrors || a.if((0, e.not)(b), () => a.break());
      });
    }
  }
  return tt.validateAdditionalItems = p, tt.default = o, tt;
}
var en = {}, nt = {}, wi;
function ho() {
  if (wi) return nt;
  wi = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.validateTuple = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), s = /* @__PURE__ */ Ie(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(n) {
      const { schema: r, it: a } = n;
      if (Array.isArray(r))
        return p(n, "additionalItems", r);
      a.items = !0, !(0, t.alwaysValidSchema)(a, r) && n.ok((0, s.validateArray)(n));
    }
  };
  function p(n, r, a = n.schema) {
    const { gen: d, parentSchema: y, data: g, keyword: w, it: u } = n;
    _(y), u.opts.unevaluated && a.length && u.items !== !0 && (u.items = t.mergeEvaluated.items(d, a.length, u.items));
    const f = d.name("valid"), b = d.const("len", (0, e._)`${g}.length`);
    a.forEach((v, S) => {
      (0, t.alwaysValidSchema)(u, v) || (d.if((0, e._)`${b} > ${S}`, () => n.subschema({
        keyword: w,
        schemaProp: S,
        dataProp: S
      }, f)), n.ok(f));
    });
    function _(v) {
      const { opts: S, errSchemaPath: h } = u, l = a.length, i = l === v.minItems && (l === v.maxItems || v[r] === !1);
      if (S.strictTuples && !i) {
        const c = `"${w}" is ${l}-tuple, but minItems or maxItems/${r} are not specified or different at path "${h}"`;
        (0, t.checkStrictMode)(u, c, S.strictTuples);
      }
    }
  }
  return nt.validateTuple = p, nt.default = o, nt;
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
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), s = /* @__PURE__ */ Ie(), o = /* @__PURE__ */ po(), n = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: r } }) => (0, e.str)`must NOT have more than ${r} items`,
      params: ({ params: { len: r } }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { schema: a, parentSchema: d, it: y } = r, { prefixItems: g } = d;
      y.items = !0, !(0, t.alwaysValidSchema)(y, a) && (g ? (0, o.validateAdditionalItems)(r, g) : r.ok((0, s.validateArray)(r)));
    }
  };
  return tn.default = n, tn;
}
var nn = {}, xi;
function td() {
  if (xi) return nn;
  xi = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), o = {
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
      const { gen: n, schema: r, parentSchema: a, data: d, it: y } = p;
      let g, w;
      const { minContains: u, maxContains: f } = a;
      y.opts.next ? (g = u === void 0 ? 1 : u, w = f) : g = 1;
      const b = n.const("len", (0, e._)`${d}.length`);
      if (p.setParams({ min: g, max: w }), w === void 0 && g === 0) {
        (0, t.checkStrictMode)(y, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (w !== void 0 && g > w) {
        (0, t.checkStrictMode)(y, '"minContains" > "maxContains" is always invalid'), p.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(y, r)) {
        let l = (0, e._)`${b} >= ${g}`;
        w !== void 0 && (l = (0, e._)`${l} && ${b} <= ${w}`), p.pass(l);
        return;
      }
      y.items = !0;
      const _ = n.name("valid");
      w === void 0 && g === 1 ? S(_, () => n.if(_, () => n.break())) : g === 0 ? (n.let(_, !0), w !== void 0 && n.if((0, e._)`${d}.length > 0`, v)) : (n.let(_, !1), v()), p.result(_, () => p.reset());
      function v() {
        const l = n.name("_valid"), i = n.let("count", 0);
        S(l, () => n.if(l, () => h(i)));
      }
      function S(l, i) {
        n.forRange("i", 0, b, (c) => {
          p.subschema({
            keyword: "contains",
            dataProp: c,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, l), i();
        });
      }
      function h(l) {
        n.code((0, e._)`${l}++`), w === void 0 ? n.if((0, e._)`${l} >= ${g}`, () => n.assign(_, !0).break()) : (n.if((0, e._)`${l} > ${w}`, () => n.assign(_, !1).break()), g === 1 ? n.assign(_, !0) : n.if((0, e._)`${l} >= ${g}`, () => n.assign(_, !0)));
      }
    }
  };
  return nn.default = o, nn;
}
var dr = {}, $i;
function us() {
  return $i || ($i = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ee(), s = /* @__PURE__ */ ne(), o = /* @__PURE__ */ Ie();
    e.error = {
      message: ({ params: { property: d, depsCount: y, deps: g } }) => {
        const w = y === 1 ? "property" : "properties";
        return (0, t.str)`must have ${w} ${g} when property ${d} is present`;
      },
      params: ({ params: { property: d, depsCount: y, deps: g, missingProperty: w } }) => (0, t._)`{property: ${d},
    missingProperty: ${w},
    depsCount: ${y},
    deps: ${g}}`
      // TODO change to reference
    };
    const p = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(d) {
        const [y, g] = n(d);
        r(d, y), a(d, g);
      }
    };
    function n({ schema: d }) {
      const y = {}, g = {};
      for (const w in d) {
        if (w === "__proto__")
          continue;
        const u = Array.isArray(d[w]) ? y : g;
        u[w] = d[w];
      }
      return [y, g];
    }
    function r(d, y = d.schema) {
      const { gen: g, data: w, it: u } = d;
      if (Object.keys(y).length === 0)
        return;
      const f = g.let("missing");
      for (const b in y) {
        const _ = y[b];
        if (_.length === 0)
          continue;
        const v = (0, o.propertyInData)(g, w, b, u.opts.ownProperties);
        d.setParams({
          property: b,
          depsCount: _.length,
          deps: _.join(", ")
        }), u.allErrors ? g.if(v, () => {
          for (const S of _)
            (0, o.checkReportMissingProp)(d, S);
        }) : (g.if((0, t._)`${v} && (${(0, o.checkMissingProp)(d, _, f)})`), (0, o.reportMissingProp)(d, f), g.else());
      }
    }
    e.validatePropertyDeps = r;
    function a(d, y = d.schema) {
      const { gen: g, data: w, keyword: u, it: f } = d, b = g.name("valid");
      for (const _ in y)
        (0, s.alwaysValidSchema)(f, y[_]) || (g.if(
          (0, o.propertyInData)(g, w, _, f.opts.ownProperties),
          () => {
            const v = d.subschema({ keyword: u, schemaProp: _ }, b);
            d.mergeValidEvaluated(v, b);
          },
          () => g.var(b, !0)
          // TODO var
        ), d.ok(b));
    }
    e.validateSchemaDeps = a, e.default = p;
  })(dr)), dr;
}
var rn = {}, Ii;
function nd() {
  if (Ii) return rn;
  Ii = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), o = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: p }) => (0, e._)`{propertyName: ${p.propertyName}}`
    },
    code(p) {
      const { gen: n, schema: r, data: a, it: d } = p;
      if ((0, t.alwaysValidSchema)(d, r))
        return;
      const y = n.name("valid");
      n.forIn("key", a, (g) => {
        p.setParams({ propertyName: g }), p.subschema({
          keyword: "propertyNames",
          data: g,
          dataTypes: ["string"],
          propertyName: g,
          compositeRule: !0
        }, y), n.if((0, e.not)(y), () => {
          p.error(!0), d.allErrors || n.break();
        });
      }), p.ok(y);
    }
  };
  return rn.default = o, rn;
}
var sn = {}, Ei;
function mo() {
  if (Ei) return sn;
  Ei = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ie(), t = /* @__PURE__ */ ee(), s = /* @__PURE__ */ $e(), o = /* @__PURE__ */ ne(), n = {
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
      const { gen: a, schema: d, parentSchema: y, data: g, errsCount: w, it: u } = r;
      if (!w)
        throw new Error("ajv implementation error");
      const { allErrors: f, opts: b } = u;
      if (u.props = !0, b.removeAdditional !== "all" && (0, o.alwaysValidSchema)(u, d))
        return;
      const _ = (0, e.allSchemaProperties)(y.properties), v = (0, e.allSchemaProperties)(y.patternProperties);
      S(), r.ok((0, t._)`${w} === ${s.default.errors}`);
      function S() {
        a.forIn("key", g, (m) => {
          !_.length && !v.length ? i(m) : a.if(h(m), () => i(m));
        });
      }
      function h(m) {
        let $;
        if (_.length > 8) {
          const x = (0, o.schemaRefOrVal)(u, y.properties, "properties");
          $ = (0, e.isOwnProperty)(a, x, m);
        } else _.length ? $ = (0, t.or)(..._.map((x) => (0, t._)`${m} === ${x}`)) : $ = t.nil;
        return v.length && ($ = (0, t.or)($, ...v.map((x) => (0, t._)`${(0, e.usePattern)(r, x)}.test(${m})`))), (0, t.not)($);
      }
      function l(m) {
        a.code((0, t._)`delete ${g}[${m}]`);
      }
      function i(m) {
        if (b.removeAdditional === "all" || b.removeAdditional && d === !1) {
          l(m);
          return;
        }
        if (d === !1) {
          r.setParams({ additionalProperty: m }), r.error(), f || a.break();
          return;
        }
        if (typeof d == "object" && !(0, o.alwaysValidSchema)(u, d)) {
          const $ = a.name("valid");
          b.removeAdditional === "failing" ? (c(m, $, !1), a.if((0, t.not)($), () => {
            r.reset(), l(m);
          })) : (c(m, $), f || a.if((0, t.not)($), () => a.break()));
        }
      }
      function c(m, $, x) {
        const j = {
          keyword: "additionalProperties",
          dataProp: m,
          dataPropType: o.Type.Str
        };
        x === !1 && Object.assign(j, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), r.subschema(j, $);
      }
    }
  };
  return sn.default = n, sn;
}
var an = {}, Ri;
function rd() {
  if (Ri) return an;
  Ri = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $t(), t = /* @__PURE__ */ Ie(), s = /* @__PURE__ */ ne(), o = /* @__PURE__ */ mo(), p = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(n) {
      const { gen: r, schema: a, parentSchema: d, data: y, it: g } = n;
      g.opts.removeAdditional === "all" && d.additionalProperties === void 0 && o.default.code(new e.KeywordCxt(g, o.default, "additionalProperties"));
      const w = (0, t.allSchemaProperties)(a);
      for (const v of w)
        g.definedProperties.add(v);
      g.opts.unevaluated && w.length && g.props !== !0 && (g.props = s.mergeEvaluated.props(r, (0, s.toHash)(w), g.props));
      const u = w.filter((v) => !(0, s.alwaysValidSchema)(g, a[v]));
      if (u.length === 0)
        return;
      const f = r.name("valid");
      for (const v of u)
        b(v) ? _(v) : (r.if((0, t.propertyInData)(r, y, v, g.opts.ownProperties)), _(v), g.allErrors || r.else().var(f, !0), r.endIf()), n.it.definedProperties.add(v), n.ok(f);
      function b(v) {
        return g.opts.useDefaults && !g.compositeRule && a[v].default !== void 0;
      }
      function _(v) {
        n.subschema({
          keyword: "properties",
          schemaProp: v,
          dataProp: v
        }, f);
      }
    }
  };
  return an.default = p, an;
}
var on = {}, ji;
function sd() {
  if (ji) return on;
  ji = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ie(), t = /* @__PURE__ */ ee(), s = /* @__PURE__ */ ne(), o = /* @__PURE__ */ ne(), p = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(n) {
      const { gen: r, schema: a, data: d, parentSchema: y, it: g } = n, { opts: w } = g, u = (0, e.allSchemaProperties)(a), f = u.filter((i) => (0, s.alwaysValidSchema)(g, a[i]));
      if (u.length === 0 || f.length === u.length && (!g.opts.unevaluated || g.props === !0))
        return;
      const b = w.strictSchema && !w.allowMatchingProperties && y.properties, _ = r.name("valid");
      g.props !== !0 && !(g.props instanceof t.Name) && (g.props = (0, o.evaluatedPropsToName)(r, g.props));
      const { props: v } = g;
      S();
      function S() {
        for (const i of u)
          b && h(i), g.allErrors ? l(i) : (r.var(_, !0), l(i), r.if(_));
      }
      function h(i) {
        for (const c in b)
          new RegExp(i).test(c) && (0, s.checkStrictMode)(g, `property ${c} matches pattern ${i} (use allowMatchingProperties)`);
      }
      function l(i) {
        r.forIn("key", d, (c) => {
          r.if((0, t._)`${(0, e.usePattern)(n, i)}.test(${c})`, () => {
            const m = f.includes(i);
            m || n.subschema({
              keyword: "patternProperties",
              schemaProp: i,
              dataProp: c,
              dataPropType: o.Type.Str
            }, _), g.opts.unevaluated && v !== !0 ? r.assign((0, t._)`${v}[${c}]`, !0) : !m && !g.allErrors && r.if((0, t.not)(_), () => r.break());
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
      const { gen: o, schema: p, it: n } = s;
      if ((0, e.alwaysValidSchema)(n, p)) {
        s.fail();
        return;
      }
      const r = o.name("valid");
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
var dn = {}, qi;
function ad() {
  if (qi) return dn;
  qi = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Ie()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return dn.default = t, dn;
}
var un = {}, Ni;
function od() {
  if (Ni) return un;
  Ni = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), o = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: p }) => (0, e._)`{passingSchemas: ${p.passing}}`
    },
    code(p) {
      const { gen: n, schema: r, parentSchema: a, it: d } = p;
      if (!Array.isArray(r))
        throw new Error("ajv implementation error");
      if (d.opts.discriminator && a.discriminator)
        return;
      const y = r, g = n.let("valid", !1), w = n.let("passing", null), u = n.name("_valid");
      p.setParams({ passing: w }), n.block(f), p.result(g, () => p.reset(), () => p.error(!0));
      function f() {
        y.forEach((b, _) => {
          let v;
          (0, t.alwaysValidSchema)(d, b) ? n.var(u, !0) : v = p.subschema({
            keyword: "oneOf",
            schemaProp: _,
            compositeRule: !0
          }, u), _ > 0 && n.if((0, e._)`${u} && ${g}`).assign(g, !1).assign(w, (0, e._)`[${w}, ${_}]`).else(), n.if(u, () => {
            n.assign(g, !0), n.assign(w, _), v && p.mergeEvaluated(v, e.Name);
          });
        });
      }
    }
  };
  return un.default = o, un;
}
var ln = {}, Oi;
function cd() {
  if (Oi) return ln;
  Oi = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(s) {
      const { gen: o, schema: p, it: n } = s;
      if (!Array.isArray(p))
        throw new Error("ajv implementation error");
      const r = o.name("valid");
      p.forEach((a, d) => {
        if ((0, e.alwaysValidSchema)(n, a))
          return;
        const y = s.subschema({ keyword: "allOf", schemaProp: d }, r);
        s.ok(r), s.mergeEvaluated(y);
      });
    }
  };
  return ln.default = t, ln;
}
var fn = {}, Pi;
function dd() {
  if (Pi) return fn;
  Pi = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), o = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: n }) => (0, e.str)`must match "${n.ifClause}" schema`,
      params: ({ params: n }) => (0, e._)`{failingKeyword: ${n.ifClause}}`
    },
    code(n) {
      const { gen: r, parentSchema: a, it: d } = n;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(d, '"if" without "then" and "else" is ignored');
      const y = p(d, "then"), g = p(d, "else");
      if (!y && !g)
        return;
      const w = r.let("valid", !0), u = r.name("_valid");
      if (f(), n.reset(), y && g) {
        const _ = r.let("ifClause");
        n.setParams({ ifClause: _ }), r.if(u, b("then", _), b("else", _));
      } else y ? r.if(u, b("then")) : r.if((0, e.not)(u), b("else"));
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
      function b(_, v) {
        return () => {
          const S = n.subschema({ keyword: _ }, u);
          r.assign(w, u), n.mergeValidEvaluated(S, w), v ? r.assign(v, (0, e._)`${_}`) : n.setParams({ ifClause: _ });
        };
      }
    }
  };
  function p(n, r) {
    const a = n.schema[r];
    return a !== void 0 && !(0, t.alwaysValidSchema)(n, a);
  }
  return fn.default = o, fn;
}
var pn = {}, Ti;
function ud() {
  if (Ti) return pn;
  Ti = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: s, parentSchema: o, it: p }) {
      o.if === void 0 && (0, e.checkStrictMode)(p, `"${s}" without "if" is ignored`);
    }
  };
  return pn.default = t, pn;
}
var ki;
function yo() {
  if (ki) return Yt;
  ki = 1, Object.defineProperty(Yt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ po(), t = /* @__PURE__ */ Yc(), s = /* @__PURE__ */ ho(), o = /* @__PURE__ */ ed(), p = /* @__PURE__ */ td(), n = /* @__PURE__ */ us(), r = /* @__PURE__ */ nd(), a = /* @__PURE__ */ mo(), d = /* @__PURE__ */ rd(), y = /* @__PURE__ */ sd(), g = /* @__PURE__ */ id(), w = /* @__PURE__ */ ad(), u = /* @__PURE__ */ od(), f = /* @__PURE__ */ cd(), b = /* @__PURE__ */ dd(), _ = /* @__PURE__ */ ud();
  function v(S = !1) {
    const h = [
      // any
      g.default,
      w.default,
      u.default,
      f.default,
      b.default,
      _.default,
      // object
      r.default,
      a.default,
      n.default,
      d.default,
      y.default
    ];
    return S ? h.push(t.default, o.default) : h.push(e.default, s.default), h.push(p.default), h;
  }
  return Yt.default = v, Yt;
}
var hn = {}, rt = {}, Di;
function go() {
  if (Di) return rt;
  Di = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ $e(), s = /* @__PURE__ */ Hn(), o = /* @__PURE__ */ cs(), p = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => n(a, a.schema)
  };
  function n(a, d) {
    const { gen: y, it: g } = a;
    g.schemaEnv.root.dynamicAnchors[d] = !0;
    const w = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(d)}`, u = g.errSchemaPath === "#" ? g.validateName : r(a);
    y.if((0, e._)`!${w}`, () => y.assign(w, u));
  }
  rt.dynamicAnchor = n;
  function r(a) {
    const { schemaEnv: d, schema: y, self: g } = a.it, { root: w, baseId: u, localRefs: f, meta: b } = d.root, { schemaId: _ } = g.opts, v = new s.SchemaEnv({ schema: y, schemaId: _, root: w, baseId: u, localRefs: f, meta: b });
    return s.compileSchema.call(g, v), (0, o.getValidate)(a, v);
  }
  return rt.default = p, rt;
}
var st = {}, Mi;
function vo() {
  if (Mi) return st;
  Mi = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.dynamicRef = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ $e(), s = /* @__PURE__ */ cs(), o = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (n) => p(n, n.schema)
  };
  function p(n, r) {
    const { gen: a, keyword: d, it: y } = n;
    if (r[0] !== "#")
      throw new Error(`"${d}" only supports hash fragment reference`);
    const g = r.slice(1);
    if (y.allErrors)
      w();
    else {
      const f = a.let("valid", !1);
      w(f), n.ok(f);
    }
    function w(f) {
      if (y.schemaEnv.root.dynamicAnchors[g]) {
        const b = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(g)}`);
        a.if(b, u(b, f), u(y.validateName, f));
      } else
        u(y.validateName, f)();
    }
    function u(f, b) {
      return b ? () => a.block(() => {
        (0, s.callRef)(n, f), a.let(b, !0);
      }) : () => (0, s.callRef)(n, f);
    }
  }
  return st.dynamicRef = p, st.default = o, st;
}
var mn = {}, Li;
function ld() {
  if (Li) return mn;
  Li = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ go(), t = /* @__PURE__ */ ne(), s = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(o) {
      o.schema ? (0, e.dynamicAnchor)(o, "") : (0, t.checkStrictMode)(o.it, "$recursiveAnchor: false is ignored");
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
  const e = /* @__PURE__ */ go(), t = /* @__PURE__ */ vo(), s = /* @__PURE__ */ ld(), o = /* @__PURE__ */ fd(), p = [e.default, t.default, s.default, o.default];
  return hn.default = p, hn;
}
var gn = {}, vn = {}, Vi;
function hd() {
  if (Vi) return vn;
  Vi = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ us(), t = {
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
  const e = /* @__PURE__ */ us(), t = {
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
    code({ keyword: s, parentSchema: o, it: p }) {
      o.contains === void 0 && (0, e.checkStrictMode)(p, `"${s}" without "contains" is ignored`);
    }
  };
  return wn.default = t, wn;
}
var Hi;
function gd() {
  if (Hi) return gn;
  Hi = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ hd(), t = /* @__PURE__ */ md(), s = /* @__PURE__ */ yd(), o = [e.default, t.default, s.default];
  return gn.default = o, gn;
}
var _n = {}, Sn = {}, Bi;
function vd() {
  if (Bi) return Sn;
  Bi = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), s = /* @__PURE__ */ $e(), p = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: n }) => (0, e._)`{unevaluatedProperty: ${n.unevaluatedProperty}}`
    },
    code(n) {
      const { gen: r, schema: a, data: d, errsCount: y, it: g } = n;
      if (!y)
        throw new Error("ajv implementation error");
      const { allErrors: w, props: u } = g;
      u instanceof e.Name ? r.if((0, e._)`${u} !== true`, () => r.forIn("key", d, (v) => r.if(b(u, v), () => f(v)))) : u !== !0 && r.forIn("key", d, (v) => u === void 0 ? f(v) : r.if(_(u, v), () => f(v))), g.props = !0, n.ok((0, e._)`${y} === ${s.default.errors}`);
      function f(v) {
        if (a === !1) {
          n.setParams({ unevaluatedProperty: v }), n.error(), w || r.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(g, a)) {
          const S = r.name("valid");
          n.subschema({
            keyword: "unevaluatedProperties",
            dataProp: v,
            dataPropType: t.Type.Str
          }, S), w || r.if((0, e.not)(S), () => r.break());
        }
      }
      function b(v, S) {
        return (0, e._)`!${v} || !${v}[${S}]`;
      }
      function _(v, S) {
        const h = [];
        for (const l in v)
          v[l] === !0 && h.push((0, e._)`${S} !== ${l}`);
        return (0, e.and)(...h);
      }
    }
  };
  return Sn.default = p, Sn;
}
var xn = {}, Ji;
function bd() {
  if (Ji) return xn;
  Ji = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), o = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: p } }) => (0, e.str)`must NOT have more than ${p} items`,
      params: ({ params: { len: p } }) => (0, e._)`{limit: ${p}}`
    },
    code(p) {
      const { gen: n, schema: r, data: a, it: d } = p, y = d.items || 0;
      if (y === !0)
        return;
      const g = n.const("len", (0, e._)`${a}.length`);
      if (r === !1)
        p.setParams({ len: y }), p.fail((0, e._)`${g} > ${y}`);
      else if (typeof r == "object" && !(0, t.alwaysValidSchema)(d, r)) {
        const u = n.var("valid", (0, e._)`${g} <= ${y}`);
        n.if((0, e.not)(u), () => w(u, y)), p.ok(u);
      }
      d.items = !0;
      function w(u, f) {
        n.forRange("i", f, g, (b) => {
          p.subschema({ keyword: "unevaluatedItems", dataProp: b, dataPropType: t.Type.Num }, u), d.allErrors || n.if((0, e.not)(u), () => n.break());
        });
      }
    }
  };
  return xn.default = o, xn;
}
var Gi;
function wd() {
  if (Gi) return _n;
  Gi = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ vd(), t = /* @__PURE__ */ bd(), s = [e.default, t.default];
  return _n.default = s, _n;
}
var $n = {}, In = {}, Ki;
function _d() {
  if (Ki) return In;
  Ki = 1, Object.defineProperty(In, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), s = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, e.str)`must match format "${o}"`,
      params: ({ schemaCode: o }) => (0, e._)`{format: ${o}}`
    },
    code(o, p) {
      const { gen: n, data: r, $data: a, schema: d, schemaCode: y, it: g } = o, { opts: w, errSchemaPath: u, schemaEnv: f, self: b } = g;
      if (!w.validateFormats)
        return;
      a ? _() : v();
      function _() {
        const S = n.scopeValue("formats", {
          ref: b.formats,
          code: w.code.formats
        }), h = n.const("fDef", (0, e._)`${S}[${y}]`), l = n.let("fType"), i = n.let("format");
        n.if((0, e._)`typeof ${h} == "object" && !(${h} instanceof RegExp)`, () => n.assign(l, (0, e._)`${h}.type || "string"`).assign(i, (0, e._)`${h}.validate`), () => n.assign(l, (0, e._)`"string"`).assign(i, h)), o.fail$data((0, e.or)(c(), m()));
        function c() {
          return w.strictSchema === !1 ? e.nil : (0, e._)`${y} && !${i}`;
        }
        function m() {
          const $ = f.$async ? (0, e._)`(${h}.async ? await ${i}(${r}) : ${i}(${r}))` : (0, e._)`${i}(${r})`, x = (0, e._)`(typeof ${i} == "function" ? ${$} : ${i}.test(${r}))`;
          return (0, e._)`${i} && ${i} !== true && ${l} === ${p} && !${x}`;
        }
      }
      function v() {
        const S = b.formats[d];
        if (!S) {
          c();
          return;
        }
        if (S === !0)
          return;
        const [h, l, i] = m(S);
        h === p && o.pass($());
        function c() {
          if (w.strictSchema === !1) {
            b.logger.warn(x());
            return;
          }
          throw new Error(x());
          function x() {
            return `unknown format "${d}" ignored in schema at path "${u}"`;
          }
        }
        function m(x) {
          const j = x instanceof RegExp ? (0, e.regexpCode)(x) : w.code.formats ? (0, e._)`${w.code.formats}${(0, e.getProperty)(d)}` : void 0, q = n.scopeValue("formats", { key: d, ref: x, code: j });
          return typeof x == "object" && !(x instanceof RegExp) ? [x.type || "string", x.validate, (0, e._)`${q}.validate`] : ["string", x, q];
        }
        function $() {
          if (typeof S == "object" && !(S instanceof RegExp) && S.async) {
            if (!f.$async)
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
  if (Zi) return $n;
  Zi = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ _d()).default];
  return $n.default = t, $n;
}
var Ke = {}, Qi;
function wo() {
  return Qi || (Qi = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.contentVocabulary = Ke.metadataVocabulary = void 0, Ke.metadataVocabulary = [
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
var Xi;
function Sd() {
  if (Xi) return Mt;
  Xi = 1, Object.defineProperty(Mt, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ lo(), t = /* @__PURE__ */ fo(), s = /* @__PURE__ */ yo(), o = /* @__PURE__ */ pd(), p = /* @__PURE__ */ gd(), n = /* @__PURE__ */ wd(), r = /* @__PURE__ */ bo(), a = /* @__PURE__ */ wo(), d = [
    o.default,
    e.default,
    t.default,
    (0, s.default)(!0),
    r.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    p.default,
    n.default
  ];
  return Mt.default = d, Mt;
}
var En = {}, gt = {}, Wi;
function xd() {
  if (Wi) return gt;
  Wi = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (gt.DiscrError = e = {})), gt;
}
var Yi;
function _o() {
  if (Yi) return En;
  Yi = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ xd(), s = /* @__PURE__ */ Hn(), o = /* @__PURE__ */ It(), p = /* @__PURE__ */ ne(), r = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: d } }) => a === t.DiscrError.Tag ? `tag "${d}" must be string` : `value of tag "${d}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: d, tagName: y } }) => (0, e._)`{error: ${a}, tag: ${y}, tagValue: ${d}}`
    },
    code(a) {
      const { gen: d, data: y, schema: g, parentSchema: w, it: u } = a, { oneOf: f } = w;
      if (!u.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const b = g.propertyName;
      if (typeof b != "string")
        throw new Error("discriminator: requires propertyName");
      if (g.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!f)
        throw new Error("discriminator: requires oneOf keyword");
      const _ = d.let("valid", !1), v = d.const("tag", (0, e._)`${y}${(0, e.getProperty)(b)}`);
      d.if((0, e._)`typeof ${v} == "string"`, () => S(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: v, tagName: b })), a.ok(_);
      function S() {
        const i = l();
        d.if(!1);
        for (const c in i)
          d.elseIf((0, e._)`${v} === ${c}`), d.assign(_, h(i[c]));
        d.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: v, tagName: b }), d.endIf();
      }
      function h(i) {
        const c = d.name("valid"), m = a.subschema({ keyword: "oneOf", schemaProp: i }, c);
        return a.mergeEvaluated(m, e.Name), c;
      }
      function l() {
        var i;
        const c = {}, m = x(w);
        let $ = !0;
        for (let k = 0; k < f.length; k++) {
          let C = f[k];
          if (C?.$ref && !(0, p.schemaHasRulesButRef)(C, u.self.RULES)) {
            const O = C.$ref;
            if (C = s.resolveRef.call(u.self, u.schemaEnv.root, u.baseId, O), C instanceof s.SchemaEnv && (C = C.schema), C === void 0)
              throw new o.default(u.opts.uriResolver, u.baseId, O);
          }
          const T = (i = C?.properties) === null || i === void 0 ? void 0 : i[b];
          if (typeof T != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${b}"`);
          $ = $ && (m || x(C)), j(T, k);
        }
        if (!$)
          throw new Error(`discriminator: "${b}" must be required`);
        return c;
        function x({ required: k }) {
          return Array.isArray(k) && k.includes(b);
        }
        function j(k, C) {
          if (k.const)
            q(k.const, C);
          else if (k.enum)
            for (const T of k.enum)
              q(T, C);
          else
            throw new Error(`discriminator: "properties/${b}" must have "const" or "enum"`);
        }
        function q(k, C) {
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
const $d = "https://json-schema.org/draft/2020-12/schema", Id = "https://json-schema.org/draft/2020-12/schema", Ed = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Rd = "meta", jd = "Core and Validation specifications meta-schema", Ad = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], qd = ["object", "boolean"], Nd = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Od = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Pd = {
  $schema: $d,
  $id: Id,
  $vocabulary: Ed,
  $dynamicAnchor: Rd,
  title: jd,
  allOf: Ad,
  type: qd,
  $comment: Nd,
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
}, Fd = "https://json-schema.org/draft/2020-12/schema", Hd = "https://json-schema.org/draft/2020-12/meta/unevaluated", Bd = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Jd = "meta", Gd = "Unevaluated applicator vocabulary meta-schema", Kd = ["object", "boolean"], Zd = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Qd = {
  $schema: Fd,
  $id: Hd,
  $vocabulary: Bd,
  $dynamicAnchor: Jd,
  title: Gd,
  type: Kd,
  properties: Zd
}, Xd = "https://json-schema.org/draft/2020-12/schema", Wd = "https://json-schema.org/draft/2020-12/meta/content", Yd = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, eu = "meta", tu = "Content vocabulary meta-schema", nu = ["object", "boolean"], ru = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, su = {
  $schema: Xd,
  $id: Wd,
  $vocabulary: Yd,
  $dynamicAnchor: eu,
  title: tu,
  type: nu,
  properties: ru
}, iu = "https://json-schema.org/draft/2020-12/schema", au = "https://json-schema.org/draft/2020-12/meta/core", ou = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, cu = "meta", du = "Core vocabulary meta-schema", uu = ["object", "boolean"], lu = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, fu = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, pu = {
  $schema: iu,
  $id: au,
  $vocabulary: ou,
  $dynamicAnchor: cu,
  title: du,
  type: uu,
  properties: lu,
  $defs: fu
}, hu = "https://json-schema.org/draft/2020-12/schema", mu = "https://json-schema.org/draft/2020-12/meta/format-annotation", yu = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, gu = "meta", vu = "Format vocabulary meta-schema for annotation results", bu = ["object", "boolean"], wu = { format: { type: "string" } }, _u = {
  $schema: hu,
  $id: mu,
  $vocabulary: yu,
  $dynamicAnchor: gu,
  title: vu,
  type: bu,
  properties: wu
}, Su = "https://json-schema.org/draft/2020-12/schema", xu = "https://json-schema.org/draft/2020-12/meta/meta-data", $u = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Iu = "meta", Eu = "Meta-data vocabulary meta-schema", Ru = ["object", "boolean"], ju = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Au = {
  $schema: Su,
  $id: xu,
  $vocabulary: $u,
  $dynamicAnchor: Iu,
  title: Eu,
  type: Ru,
  properties: ju
}, qu = "https://json-schema.org/draft/2020-12/schema", Nu = "https://json-schema.org/draft/2020-12/meta/validation", Ou = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Pu = "meta", Tu = "Validation vocabulary meta-schema", ku = ["object", "boolean"], Du = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Mu = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Lu = {
  $schema: qu,
  $id: Nu,
  $vocabulary: Ou,
  $dynamicAnchor: Pu,
  title: Tu,
  type: ku,
  properties: Du,
  $defs: Mu
};
var ea;
function Cu() {
  if (ea) return Rn;
  ea = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = Pd, t = zd, s = Qd, o = su, p = pu, n = _u, r = Au, a = Lu, d = ["/properties"];
  function y(g) {
    return [
      e,
      t,
      s,
      o,
      p,
      w(this, n),
      r,
      w(this, a)
    ].forEach((u) => this.addMetaSchema(u, void 0, !1)), this;
    function w(u, f) {
      return g ? u.$dataMetaSchema(f, d) : f;
    }
  }
  return Rn.default = y, Rn;
}
var ta;
function Uu() {
  return ta || (ta = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const s = /* @__PURE__ */ uo(), o = /* @__PURE__ */ Sd(), p = /* @__PURE__ */ _o(), n = /* @__PURE__ */ Cu(), r = "https://json-schema.org/draft/2020-12/schema";
    class a extends s.default {
      constructor(f = {}) {
        super({
          ...f,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), o.default.forEach((f) => this.addVocabulary(f)), this.opts.discriminator && this.addKeyword(p.default);
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
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var d = /* @__PURE__ */ $t();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return d.KeywordCxt;
    } });
    var y = /* @__PURE__ */ ee();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return y._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return y.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return y.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return y.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return y.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return y.CodeGen;
    } });
    var g = /* @__PURE__ */ Fn();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return g.default;
    } });
    var w = /* @__PURE__ */ It();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return w.default;
    } });
  })(Ot, Ot.exports)), Ot.exports;
}
var Vu = /* @__PURE__ */ Uu();
const zu = /* @__PURE__ */ os(Vu);
var jn = { exports: {} }, ur = {}, na;
function Fu() {
  return na || (na = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(k, C) {
      return { validate: k, compare: C };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(n, r),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: t(d(!0), y),
      "date-time": t(u(!0), f),
      "iso-time": t(d(), g),
      "iso-date-time": t(u(), b),
      // duration: https://tools.ietf.org/html/rfc3339#appendix-A
      duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri: S,
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
      regex: q,
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
      int32: { type: "number", validate: m },
      // signed 64 bit integer
      int64: { type: "number", validate: $ },
      // C-type float
      float: { type: "number", validate: x },
      // C-type double
      double: { type: "number", validate: x },
      // hint to the UI to hide input strings
      password: !0,
      // unchecked string payload
      binary: !0
    }, e.fastFormats = {
      ...e.fullFormats,
      date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, r),
      time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, y),
      "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, f),
      "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, g),
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
    const o = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, p = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function n(k) {
      const C = o.exec(k);
      if (!C)
        return !1;
      const T = +C[1], O = +C[2], J = +C[3];
      return O >= 1 && O <= 12 && J >= 1 && J <= (O === 2 && s(T) ? 29 : p[O]);
    }
    function r(k, C) {
      if (k && C)
        return k > C ? 1 : k < C ? -1 : 0;
    }
    const a = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function d(k) {
      return function(T) {
        const O = a.exec(T);
        if (!O)
          return !1;
        const J = +O[1], N = +O[2], H = +O[3], F = O[4], G = O[5] === "-" ? -1 : 1, A = +(O[6] || 0), P = +(O[7] || 0);
        if (A > 23 || P > 59 || k && !F)
          return !1;
        if (J <= 23 && N <= 59 && H < 60)
          return !0;
        const U = N - P * G, D = J - A * G - (U < 0 ? 1 : 0);
        return (D === 23 || D === -1) && (U === 59 || U === -1) && H < 61;
      };
    }
    function y(k, C) {
      if (!(k && C))
        return;
      const T = (/* @__PURE__ */ new Date("2020-01-01T" + k)).valueOf(), O = (/* @__PURE__ */ new Date("2020-01-01T" + C)).valueOf();
      if (T && O)
        return T - O;
    }
    function g(k, C) {
      if (!(k && C))
        return;
      const T = a.exec(k), O = a.exec(C);
      if (T && O)
        return k = T[1] + T[2] + T[3], C = O[1] + O[2] + O[3], k > C ? 1 : k < C ? -1 : 0;
    }
    const w = /t|\s/i;
    function u(k) {
      const C = d(k);
      return function(O) {
        const J = O.split(w);
        return J.length === 2 && n(J[0]) && C(J[1]);
      };
    }
    function f(k, C) {
      if (!(k && C))
        return;
      const T = new Date(k).valueOf(), O = new Date(C).valueOf();
      if (T && O)
        return T - O;
    }
    function b(k, C) {
      if (!(k && C))
        return;
      const [T, O] = k.split(w), [J, N] = C.split(w), H = r(T, J);
      if (H !== void 0)
        return H || y(O, N);
    }
    const _ = /\/|:/, v = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function S(k) {
      return _.test(k) && v.test(k);
    }
    const h = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function l(k) {
      return h.lastIndex = 0, h.test(k);
    }
    const i = -2147483648, c = 2 ** 31 - 1;
    function m(k) {
      return Number.isInteger(k) && k <= c && k >= i;
    }
    function $(k) {
      return Number.isInteger(k);
    }
    function x() {
      return !0;
    }
    const j = /[^\\]\\Z/;
    function q(k) {
      if (j.test(k))
        return !1;
      try {
        return new RegExp(k), !0;
      } catch {
        return !1;
      }
    }
  })(ur)), ur;
}
var lr = {}, An = { exports: {} }, qn = {}, ra;
function Hu() {
  if (ra) return qn;
  ra = 1, Object.defineProperty(qn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ lo(), t = /* @__PURE__ */ fo(), s = /* @__PURE__ */ yo(), o = /* @__PURE__ */ bo(), p = /* @__PURE__ */ wo(), n = [
    e.default,
    t.default,
    (0, s.default)(),
    o.default,
    p.metadataVocabulary,
    p.contentVocabulary
  ];
  return qn.default = n, qn;
}
const Bu = "http://json-schema.org/draft-07/schema#", Ju = "http://json-schema.org/draft-07/schema#", Gu = "Core schema meta-schema", Ku = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Zu = ["object", "boolean"], Qu = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, Xu = {
  $schema: Bu,
  $id: Ju,
  title: Gu,
  definitions: Ku,
  type: Zu,
  properties: Qu,
  default: !0
};
var sa;
function Wu() {
  return sa || (sa = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const s = /* @__PURE__ */ uo(), o = /* @__PURE__ */ Hu(), p = /* @__PURE__ */ _o(), n = Xu, r = ["/properties"], a = "http://json-schema.org/draft-07/schema";
    class d extends s.default {
      _addVocabularies() {
        super._addVocabularies(), o.default.forEach((b) => this.addVocabulary(b)), this.opts.discriminator && this.addKeyword(p.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta)
          return;
        const b = this.opts.$data ? this.$dataMetaSchema(n, r) : n;
        this.addMetaSchema(b, a, !1), this.refs["http://json-schema.org/schema"] = a;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(a) ? a : void 0);
      }
    }
    t.Ajv = d, e.exports = t = d, e.exports.Ajv = d, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = d;
    var y = /* @__PURE__ */ $t();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return y.KeywordCxt;
    } });
    var g = /* @__PURE__ */ ee();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return g._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return g.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return g.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return g.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return g.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return g.CodeGen;
    } });
    var w = /* @__PURE__ */ Fn();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return w.default;
    } });
    var u = /* @__PURE__ */ It();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return u.default;
    } });
  })(An, An.exports)), An.exports;
}
var ia;
function Yu() {
  return ia || (ia = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = /* @__PURE__ */ Wu(), s = /* @__PURE__ */ ee(), o = s.operators, p = {
      formatMaximum: { okStr: "<=", ok: o.LTE, fail: o.GT },
      formatMinimum: { okStr: ">=", ok: o.GTE, fail: o.LT },
      formatExclusiveMaximum: { okStr: "<", ok: o.LT, fail: o.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: o.GT, fail: o.LTE }
    }, n = {
      message: ({ keyword: a, schemaCode: d }) => (0, s.str)`should be ${p[a].okStr} ${d}`,
      params: ({ keyword: a, schemaCode: d }) => (0, s._)`{comparison: ${p[a].okStr}, limit: ${d}}`
    };
    e.formatLimitDefinition = {
      keyword: Object.keys(p),
      type: "string",
      schemaType: "string",
      $data: !0,
      error: n,
      code(a) {
        const { gen: d, data: y, schemaCode: g, keyword: w, it: u } = a, { opts: f, self: b } = u;
        if (!f.validateFormats)
          return;
        const _ = new t.KeywordCxt(u, b.RULES.all.format.definition, "format");
        _.$data ? v() : S();
        function v() {
          const l = d.scopeValue("formats", {
            ref: b.formats,
            code: f.code.formats
          }), i = d.const("fmt", (0, s._)`${l}[${_.schemaCode}]`);
          a.fail$data((0, s.or)((0, s._)`typeof ${i} != "object"`, (0, s._)`${i} instanceof RegExp`, (0, s._)`typeof ${i}.compare != "function"`, h(i)));
        }
        function S() {
          const l = _.schema, i = b.formats[l];
          if (!i || i === !0)
            return;
          if (typeof i != "object" || i instanceof RegExp || typeof i.compare != "function")
            throw new Error(`"${w}": format "${l}" does not define "compare" function`);
          const c = d.scopeValue("formats", {
            key: l,
            ref: i,
            code: f.code.formats ? (0, s._)`${f.code.formats}${(0, s.getProperty)(l)}` : void 0
          });
          a.fail$data(h(c));
        }
        function h(l) {
          return (0, s._)`${l}.compare(${y}, ${g}) ${p[w].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const r = (a) => (a.addKeyword(e.formatLimitDefinition), a);
    e.default = r;
  })(lr)), lr;
}
var aa;
function el() {
  return aa || (aa = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const s = Fu(), o = Yu(), p = /* @__PURE__ */ ee(), n = new p.Name("fullFormats"), r = new p.Name("fastFormats"), a = (y, g = { keywords: !0 }) => {
      if (Array.isArray(g))
        return d(y, g, s.fullFormats, n), y;
      const [w, u] = g.mode === "fast" ? [s.fastFormats, r] : [s.fullFormats, n], f = g.formats || s.formatNames;
      return d(y, f, w, u), g.keywords && (0, o.default)(y), y;
    };
    a.get = (y, g = "full") => {
      const u = (g === "fast" ? s.fastFormats : s.fullFormats)[y];
      if (!u)
        throw new Error(`Unknown format "${y}"`);
      return u;
    };
    function d(y, g, w, u) {
      var f, b;
      (f = (b = y.opts.code).formats) !== null && f !== void 0 || (b.formats = (0, p._)`require("ajv-formats/dist/formats").${u}`);
      for (const _ of g)
        y.addFormat(_, w[_]);
    }
    e.exports = t = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
  })(jn, jn.exports)), jn.exports;
}
var tl = el();
const nl = /* @__PURE__ */ os(tl);
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const rl = {
  p: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,
  n: 0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,
  a: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,
  d: 0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,
  Gx: 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,
  Gy: 0x6666666666666666666666666666666666666666666666666666666666666658n
}, { p: pe, n: On, Gx: oa, Gy: ca, a: fr, d: pr } = rl, sl = 8n, _t = 32, es = 64, we = (e = "") => {
  throw new Error(e);
}, il = (e) => typeof e == "bigint", So = (e) => typeof e == "string", al = (e) => e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array", lt = (e, t) => !al(e) || typeof t == "number" && t > 0 && e.length !== t ? we("Uint8Array expected") : e, Bn = (e) => new Uint8Array(e), ls = (e) => Uint8Array.from(e), xo = (e, t) => e.toString(16).padStart(t, "0"), fs = (e) => Array.from(lt(e)).map((t) => xo(t, 2)).join(""), De = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 }, da = (e) => {
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
  const s = e.length, o = s / 2;
  if (s % 2)
    return we(t);
  const p = Bn(o);
  for (let n = 0, r = 0; n < o; n++, r += 2) {
    const a = da(e.charCodeAt(r)), d = da(e.charCodeAt(r + 1));
    if (a === void 0 || d === void 0)
      return we(t);
    p[n] = a * 16 + d;
  }
  return p;
}, Pn = (e, t) => lt(So(e) ? ps(e) : ls(lt(e)), t), $o = () => globalThis?.crypto, ol = () => $o()?.subtle ?? we("crypto.subtle must be defined"), ts = (...e) => {
  const t = Bn(e.reduce((o, p) => o + lt(p).length, 0));
  let s = 0;
  return e.forEach((o) => {
    t.set(o, s), s += o.length;
  }), t;
}, cl = (e = _t) => $o().getRandomValues(Bn(e)), Ln = BigInt, Qe = (e, t, s, o = "bad number: out of range") => il(e) && t <= e && e < s ? e : we(o), W = (e, t = pe) => {
  const s = e % t;
  return s >= 0n ? s : t + s;
}, dl = (e) => W(e, On), Io = (e, t) => {
  (e === 0n || t <= 0n) && we("no inverse n=" + e + " mod=" + t);
  let s = W(e, t), o = t, p = 0n, n = 1n;
  for (; s !== 0n; ) {
    const r = o / s, a = o % s, d = p - n * r;
    o = s, s = a, p = n, n = d;
  }
  return o === 1n ? W(p, t) : we("no inverse");
}, ua = (e) => e instanceof Le ? e : we("Point expected"), ns = 2n ** 256n, qe = class qe {
  constructor(t, s, o, p) {
    Ne(this, "ex");
    Ne(this, "ey");
    Ne(this, "ez");
    Ne(this, "et");
    const n = ns;
    this.ex = Qe(t, 0n, n), this.ey = Qe(s, 0n, n), this.ez = Qe(o, 1n, n), this.et = Qe(p, 0n, n), Object.freeze(this);
  }
  static fromAffine(t) {
    return new qe(t.x, t.y, 1n, W(t.x * t.y));
  }
  /** RFC8032 5.1.3: Uint8Array to Point. */
  static fromBytes(t, s = !1) {
    const o = pr, p = ls(lt(t, _t)), n = t[31];
    p[31] = n & -129;
    const r = hs(p);
    Qe(r, 0n, s ? ns : pe);
    const d = W(r * r), y = W(d - 1n), g = W(o * d + 1n);
    let { isValid: w, value: u } = fl(y, g);
    w || we("bad point: y not sqrt");
    const f = (u & 1n) === 1n, b = (n & 128) !== 0;
    return !s && u === 0n && b && we("bad point: x==0, isLastByteOdd"), b !== f && (u = W(-u)), new qe(u, r, 1n, W(u * r));
  }
  /** Checks if the point is valid and on-curve. */
  assertValidity() {
    const t = fr, s = pr, o = this;
    if (o.is0())
      throw new Error("bad point: ZERO");
    const { ex: p, ey: n, ez: r, et: a } = o, d = W(p * p), y = W(n * n), g = W(r * r), w = W(g * g), u = W(d * t), f = W(g * W(u + y)), b = W(w + W(s * W(d * y)));
    if (f !== b)
      throw new Error("bad point: equation left != right (1)");
    const _ = W(p * n), v = W(r * a);
    if (_ !== v)
      throw new Error("bad point: equation left != right (2)");
    return this;
  }
  /** Equality check: compare points P&Q. */
  equals(t) {
    const { ex: s, ey: o, ez: p } = this, { ex: n, ey: r, ez: a } = ua(t), d = W(s * a), y = W(n * p), g = W(o * a), w = W(r * p);
    return d === y && g === w;
  }
  is0() {
    return this.equals(at);
  }
  /** Flip point over y coordinate. */
  negate() {
    return new qe(W(-this.ex), this.ey, this.ez, W(-this.et));
  }
  /** Point doubling. Complete formula. Cost: `4M + 4S + 1*a + 6add + 1*2`. */
  double() {
    const { ex: t, ey: s, ez: o } = this, p = fr, n = W(t * t), r = W(s * s), a = W(2n * W(o * o)), d = W(p * n), y = t + s, g = W(W(y * y) - n - r), w = d + r, u = w - a, f = d - r, b = W(g * u), _ = W(w * f), v = W(g * f), S = W(u * w);
    return new qe(b, _, S, v);
  }
  /** Point addition. Complete formula. Cost: `8M + 1*k + 8add + 1*2`. */
  add(t) {
    const { ex: s, ey: o, ez: p, et: n } = this, { ex: r, ey: a, ez: d, et: y } = ua(t), g = fr, w = pr, u = W(s * r), f = W(o * a), b = W(n * w * y), _ = W(p * d), v = W((s + o) * (r + a) - u - f), S = W(_ - b), h = W(_ + b), l = W(f - g * u), i = W(v * S), c = W(h * l), m = W(v * l), $ = W(S * h);
    return new qe(i, c, $, m);
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
    if (Qe(t, 1n, On), t === 1n)
      return this;
    if (this.equals(ft))
      return _l(t).p;
    let o = at, p = ft;
    for (let n = this; t > 0n; n = n.double(), t >>= 1n)
      t & 1n ? o = o.add(n) : s && (p = p.add(n));
    return o;
  }
  /** Convert point to 2d xy affine point. (X, Y, Z) ∋ (x=X/Z, y=Y/Z) */
  toAffine() {
    const { ex: t, ey: s, ez: o } = this;
    if (this.equals(at))
      return { x: 0n, y: 1n };
    const p = Io(o, pe);
    return W(o * p) !== 1n && we("invalid inverse"), { x: W(t * p), y: W(s * p) };
  }
  toBytes() {
    const { x: t, y: s } = this.assertValidity().toAffine(), o = ul(s);
    return o[31] |= t & 1n ? 128 : 0, o;
  }
  toHex() {
    return fs(this.toBytes());
  }
  // encode to hex string
  clearCofactor() {
    return this.multiply(Ln(sl), !1);
  }
  isSmallOrder() {
    return this.clearCofactor().is0();
  }
  isTorsionFree() {
    let t = this.multiply(On / 2n, !1).double();
    return On % 2n && (t = t.add(this)), t.is0();
  }
  static fromHex(t, s) {
    return qe.fromBytes(Pn(t), s);
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
Ne(qe, "BASE"), Ne(qe, "ZERO");
let Le = qe;
const ft = new Le(oa, ca, 1n, W(oa * ca)), at = new Le(0n, 1n, 1n, 0n);
Le.BASE = ft;
Le.ZERO = at;
const ul = (e) => ps(xo(Qe(e, 0n, ns), es)).reverse(), hs = (e) => Ln("0x" + fs(ls(lt(e)).reverse())), Ae = (e, t) => {
  let s = e;
  for (; t-- > 0n; )
    s *= s, s %= pe;
  return s;
}, ll = (e) => {
  const s = e * e % pe * e % pe, o = Ae(s, 2n) * s % pe, p = Ae(o, 1n) * e % pe, n = Ae(p, 5n) * p % pe, r = Ae(n, 10n) * n % pe, a = Ae(r, 20n) * r % pe, d = Ae(a, 40n) * a % pe, y = Ae(d, 80n) * d % pe, g = Ae(y, 80n) * d % pe, w = Ae(g, 10n) * n % pe;
  return { pow_p_5_8: Ae(w, 2n) * e % pe, b2: s };
}, la = 0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n, fl = (e, t) => {
  const s = W(t * t * t), o = W(s * s * t), p = ll(e * o).pow_p_5_8;
  let n = W(e * s * p);
  const r = W(t * n * n), a = n, d = W(n * la), y = r === e, g = r === W(-e), w = r === W(-e * la);
  return y && (n = a), (g || w) && (n = d), (W(n) & 1n) === 1n && (n = W(-n)), { isValid: y || g, value: n };
}, pl = (e) => dl(hs(e)), hl = (...e) => vl.sha512Async(...e), ml = (e) => hl(e.hashable).then(e.finish), Eo = { zip215: !0 }, yl = (e, t, s, o = Eo) => {
  e = Pn(e, es), t = Pn(t), s = Pn(s, _t);
  const { zip215: p } = o;
  let n, r, a, d, y = Uint8Array.of();
  try {
    n = Le.fromHex(s, p), r = Le.fromHex(e.slice(0, _t), p), a = hs(e.slice(_t, es)), d = ft.multiply(a, !1), y = ts(r.toBytes(), n.toBytes(), t);
  } catch {
  }
  return { hashable: y, finish: (w) => {
    if (d == null || !p && n.isSmallOrder())
      return !1;
    const u = pl(w);
    return r.add(n.multiply(u, !1)).add(d.negate()).clearCofactor().is0();
  } };
}, gl = async (e, t, s, o = Eo) => ml(yl(e, t, s, o)), vl = {
  sha512Async: async (...e) => {
    const t = ol(), s = ts(...e);
    return Bn(await t.digest("SHA-512", s.buffer));
  },
  sha512Sync: void 0,
  bytesToHex: fs,
  hexToBytes: ps,
  concatBytes: ts,
  mod: W,
  invert: Io,
  randomBytes: cl
}, Cn = 8, bl = 256, Ro = Math.ceil(bl / Cn) + 1, rs = 2 ** (Cn - 1), wl = () => {
  const e = [];
  let t = ft, s = t;
  for (let o = 0; o < Ro; o++) {
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
}, _l = (e) => {
  const t = fa || (fa = wl());
  let s = at, o = ft;
  const p = 2 ** Cn, n = p, r = Ln(p - 1), a = Ln(Cn);
  for (let d = 0; d < Ro; d++) {
    let y = Number(e & r);
    e >>= a, y > rs && (y -= n, e += 1n);
    const g = d * rs, w = g, u = g + Math.abs(y) - 1, f = d % 2 !== 0, b = y < 0;
    y === 0 ? o = o.add(pa(f, t[w])) : s = s.add(pa(b, t[u]));
  }
  return { p: s, f: o };
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
    constructor(t, s = /* @__PURE__ */ new Map(), o = 0) {
      this.prefix = t, this._existing = s, this.counter = o;
    }
    /**
     * Copies this IdentifierIssuer.
     *
     * @return a copy of this IdentifierIssuer.
     */
    clone() {
      const { prefix: t, _existing: s, counter: o } = this;
      return new jo(t, new Map(s), o);
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
      const o = this.prefix + this.counter;
      return this.counter++, t && this._existing.set(t, o), o;
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
function Sl() {
  return ma || (ma = 1, (function(e, t) {
    if (e.setImmediate)
      return;
    var s = 1, o = {}, p = !1, n = e.document, r;
    function a(h) {
      typeof h != "function" && (h = new Function("" + h));
      for (var l = new Array(arguments.length - 1), i = 0; i < l.length; i++)
        l[i] = arguments[i + 1];
      var c = { callback: h, args: l };
      return o[s] = c, r(s), s++;
    }
    function d(h) {
      delete o[h];
    }
    function y(h) {
      var l = h.callback, i = h.args;
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
    function g(h) {
      if (p)
        setTimeout(g, 0, h);
      else {
        var l = o[h];
        if (l) {
          p = !0;
          try {
            y(l);
          } finally {
            d(h), p = !1;
          }
        }
      }
    }
    function w() {
      r = function(h) {
        process.nextTick(function() {
          g(h);
        });
      };
    }
    function u() {
      if (e.postMessage && !e.importScripts) {
        var h = !0, l = e.onmessage;
        return e.onmessage = function() {
          h = !1;
        }, e.postMessage("", "*"), e.onmessage = l, h;
      }
    }
    function f() {
      var h = "setImmediate$" + Math.random() + "$", l = function(i) {
        i.source === e && typeof i.data == "string" && i.data.indexOf(h) === 0 && g(+i.data.slice(h.length));
      };
      e.addEventListener ? e.addEventListener("message", l, !1) : e.attachEvent("onmessage", l), r = function(i) {
        e.postMessage(h + i, "*");
      };
    }
    function b() {
      var h = new MessageChannel();
      h.port1.onmessage = function(l) {
        var i = l.data;
        g(i);
      }, r = function(l) {
        h.port2.postMessage(l);
      };
    }
    function _() {
      var h = n.documentElement;
      r = function(l) {
        var i = n.createElement("script");
        i.onreadystatechange = function() {
          g(l), i.onreadystatechange = null, h.removeChild(i), i = null;
        }, h.appendChild(i);
      };
    }
    function v() {
      r = function(h) {
        setTimeout(g, 0, h);
      };
    }
    var S = Object.getPrototypeOf && Object.getPrototypeOf(e);
    S = S && S.setTimeout ? S : e, {}.toString.call(e.process) === "[object process]" ? w() : u() ? f() : e.MessageChannel ? b() : n && "onreadystatechange" in n.createElement("script") ? _() : v(), S.setImmediate = a, S.clearImmediate = d;
  })(typeof self > "u" ? typeof As > "u" ? yr : As : self)), yr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var gr, ya;
function Jn() {
  if (ya) return gr;
  ya = 1, Sl();
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
      const s = new TextEncoder().encode(this._content), o = new Uint8Array(
        await e.subtle.digest(this.algorithm, s)
      );
      let p = "";
      for (let n = 0; n < o.length; ++n)
        p += o[n].toString(16).padStart(2, "0");
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
      const { current: t, dir: s } = this, o = t.slice();
      let p = null, n = 0;
      const r = t.length;
      for (let a = 0; a < r; ++a) {
        const d = t[a], y = s.get(d);
        (p === null || d > p) && (y && a > 0 && d > t[a - 1] || !y && a < r - 1 && d > t[a + 1]) && (p = d, n = a);
      }
      if (p === null)
        this.done = !0;
      else {
        const a = s.get(p) ? n - 1 : n + 1;
        t[n] = t[a], t[a] = p;
        for (const d of t)
          d > p && s.set(d, !s.get(d));
      }
      return o;
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
  const t = "http://www.w3.org/1999/02/22-rdf-syntax-ns#" + "langString", s = "http://www.w3.org/2001/XMLSchema#string", o = "NamedNode", p = "BlankNode", n = "Literal", r = "DefaultGraph", a = {};
  (() => {
    const f = "(?:<([^:]+:[^>]*)>)", _ = "A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�" + "_", v = _ + "0-9-·̀-ͯ‿-⁀", h = "(_:(?:[" + _ + "0-9])(?:(?:[" + v + ".])*(?:[" + v + "]))?)", l = '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"', i = "(?:\\^\\^" + f + ")", m = "(?:" + l + "(?:" + i + "|" + "(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*))" + ")?)", $ = "[ \\t]+", x = "[ \\t]*", j = "(?:" + f + "|" + h + ")" + $, q = f + $, k = "(?:" + f + "|" + h + "|" + m + ")" + x, C = "(?:\\.|(?:(?:" + f + "|" + h + ")" + x + "\\.))";
    a.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g, a.empty = new RegExp("^" + x + "$"), a.quad = new RegExp(
      "^" + x + j + q + k + C + x + "$"
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
      const _ = [], v = {}, S = b.split(a.eoln);
      let h = 0;
      for (const l of S) {
        if (h++, a.empty.test(l))
          continue;
        const i = l.match(a.quad);
        if (i === null)
          throw new Error("N-Quads parse error on line " + h + ".");
        const c = { subject: null, predicate: null, object: null, graph: null };
        if (i[1] !== void 0 ? c.subject = { termType: o, value: i[1] } : c.subject = { termType: p, value: i[2] }, c.predicate = { termType: o, value: i[3] }, i[4] !== void 0 ? c.object = { termType: o, value: i[4] } : i[5] !== void 0 ? c.object = { termType: p, value: i[5] } : (c.object = {
          termType: n,
          value: void 0,
          datatype: {
            termType: o
          }
        }, i[7] !== void 0 ? c.object.datatype.value = i[7] : i[8] !== void 0 ? (c.object.datatype.value = t, c.object.language = i[8]) : c.object.datatype.value = s, c.object.value = u(i[6])), i[9] !== void 0 ? c.graph = {
          termType: o,
          value: i[9]
        } : i[10] !== void 0 ? c.graph = {
          termType: p,
          value: i[10]
        } : c.graph = {
          termType: r,
          value: ""
        }, !(c.graph.value in v))
          v[c.graph.value] = [c], _.push(c);
        else {
          let m = !0;
          const $ = v[c.graph.value];
          for (const x of $)
            if (d(x, c)) {
              m = !1;
              break;
            }
          m && ($.push(c), _.push(c));
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
      for (const v of b)
        _.push(Tn.serializeQuad(v));
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
    static serializeQuadComponents(b, _, v, S) {
      let h = "";
      return b.termType === o ? h += `<${b.value}>` : h += `${b.value}`, h += ` <${_.value}> `, v.termType === o ? h += `<${v.value}>` : v.termType === p ? h += v.value : (h += `"${g(v.value)}"`, v.datatype.value === t ? v.language && (h += `@${v.language}`) : v.datatype.value !== s && (h += `^^<${v.datatype.value}>`)), S.termType === o ? h += ` <${S.value}>` : S.termType === p && (h += ` ${S.value}`), h += ` .
`, h;
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
      const _ = [], v = {
        "blank node": p,
        IRI: o,
        literal: n
      };
      for (const S in b)
        b[S].forEach((l) => {
          const i = {};
          for (const c in l) {
            const m = l[c], $ = {
              termType: v[m.type],
              value: m.value
            };
            $.termType === n && ($.datatype = {
              termType: o
            }, "datatype" in m && ($.datatype.value = m.datatype), "language" in m ? ("datatype" in m || ($.datatype.value = t), $.language = m.language) : "datatype" in m || ($.datatype.value = s)), i[c] = $;
          }
          S === "@default" ? i.graph = {
            termType: r,
            value: ""
          } : i.graph = {
            termType: S.startsWith("_:") ? p : o,
            value: S
          }, _.push(i);
        });
      return _;
    }
  };
  function d(f, b) {
    return !(f.subject.termType === b.subject.termType && f.object.termType === b.object.termType) || !(f.subject.value === b.subject.value && f.predicate.value === b.predicate.value && f.object.value === b.object.value) ? !1 : f.object.termType !== n ? !0 : f.object.datatype.termType === b.object.datatype.termType && f.object.language === b.object.language && f.object.datatype.value === b.object.datatype.value;
  }
  const y = /["\\\n\r]/g;
  function g(f) {
    return f.replace(y, function(b) {
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
    return f.replace(w, function(b, _, v, S) {
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
      if (v)
        return String.fromCharCode(parseInt(v, 16));
      if (S)
        throw new Error("Unsupported U escape");
    });
  }
  return br;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var wr, ba;
function qo() {
  if (ba) return wr;
  ba = 1;
  const e = ms(), t = Jn(), s = Ao(), o = ys();
  wr = class {
    constructor({
      createMessageDigest: r = () => new t("sha256"),
      canonicalIdMap: a = /* @__PURE__ */ new Map(),
      maxDeepIterations: d = 1 / 0
    } = {}) {
      this.name = "URDNA2015", this.blankNodeInfo = /* @__PURE__ */ new Map(), this.canonicalIssuer = new e("_:c14n", a), this.createMessageDigest = r, this.maxDeepIterations = d, this.quads = null, this.deepIterations = null;
    }
    // 4.4) Normalization Algorithm
    async main(r) {
      this.deepIterations = /* @__PURE__ */ new Map(), this.quads = r;
      for (const f of r)
        this._addBlankNodeQuadInfo({ quad: f, component: f.subject }), this._addBlankNodeQuadInfo({ quad: f, component: f.object }), this._addBlankNodeQuadInfo({ quad: f, component: f.graph });
      const a = /* @__PURE__ */ new Map(), d = [...this.blankNodeInfo.keys()];
      let y = 0;
      for (const f of d)
        ++y % 100 === 0 && await this._yield(), await this._hashAndTrackBlankNode({ id: f, hashToBlankNodes: a });
      const g = [...a.keys()].sort(), w = [];
      for (const f of g) {
        const b = a.get(f);
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
          const v = new e("_:b");
          v.getId(_);
          const S = await this.hashNDegreeQuads(_, v);
          b.push(S);
        }
        b.sort(p);
        for (const _ of b) {
          const v = _.issuer.getOldIds();
          for (const S of v)
            this.canonicalIssuer.getId(S);
        }
      }
      const u = [];
      for (const f of this.quads) {
        const b = o.serializeQuadComponents(
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
      const a = [], d = this.blankNodeInfo.get(r), y = d.quads;
      for (const w of y) {
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
        ), a.push(o.serializeQuad(u));
      }
      a.sort();
      const g = this.createMessageDigest();
      for (const w of a)
        g.update(w);
      return d.hash = await g.digest(), d.hash;
    }
    // 4.7) Hash Related Blank Node
    async hashRelatedBlankNode(r, a, d, y) {
      let g;
      this.canonicalIssuer.hasId(r) ? g = this.canonicalIssuer.getId(r) : d.hasId(r) ? g = d.getId(r) : g = this.blankNodeInfo.get(r).hash;
      const w = this.createMessageDigest();
      return w.update(y), y !== "g" && w.update(this.getRelatedPredicate(a)), w.update(g), w.digest();
    }
    // 4.8) Hash N-Degree Quads
    async hashNDegreeQuads(r, a) {
      const d = this.deepIterations.get(r) || 0;
      if (d > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(r, d + 1);
      const y = this.createMessageDigest(), g = await this.createHashToRelated(r, a), w = [...g.keys()].sort();
      for (const u of w) {
        y.update(u);
        let f = "", b;
        const _ = new s(g.get(u));
        let v = 0;
        for (; _.hasNext(); ) {
          const S = _.next();
          ++v % 3 === 0 && await this._yield();
          let h = a.clone(), l = "";
          const i = [];
          let c = !1;
          for (const m of S)
            if (this.canonicalIssuer.hasId(m) ? l += this.canonicalIssuer.getId(m) : (h.hasId(m) || i.push(m), l += h.getId(m)), f.length !== 0 && l > f) {
              c = !0;
              break;
            }
          if (!c) {
            for (const m of i) {
              const $ = await this.hashNDegreeQuads(m, h);
              if (l += h.getId(m), l += `<${$.hash}>`, h = $.issuer, f.length !== 0 && l > f) {
                c = !0;
                break;
              }
            }
            c || (f.length === 0 || l < f) && (f = l, b = h);
          }
        }
        y.update(f), a = b;
      }
      return { hash: await y.digest(), issuer: a };
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(r, a) {
      return a.termType !== "BlankNode" ? a : {
        termType: "BlankNode",
        value: a.value === r ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(r) {
      return `<${r.predicate.value}>`;
    }
    // helper for creating hash to related blank nodes map
    async createHashToRelated(r, a) {
      const d = /* @__PURE__ */ new Map(), y = this.blankNodeInfo.get(r).quads;
      let g = 0;
      for (const w of y)
        ++g % 100 === 0 && await this._yield(), await Promise.all([
          this._addRelatedBlankNodeHash({
            quad: w,
            component: w.subject,
            position: "s",
            id: r,
            issuer: a,
            hashToRelated: d
          }),
          this._addRelatedBlankNodeHash({
            quad: w,
            component: w.object,
            position: "o",
            id: r,
            issuer: a,
            hashToRelated: d
          }),
          this._addRelatedBlankNodeHash({
            quad: w,
            component: w.graph,
            position: "g",
            id: r,
            issuer: a,
            hashToRelated: d
          })
        ]);
      return d;
    }
    async _hashAndTrackBlankNode({ id: r, hashToBlankNodes: a }) {
      const d = await this.hashFirstDegreeQuads(r), y = a.get(d);
      y ? y.push(r) : a.set(d, [r]);
    }
    _addBlankNodeQuadInfo({ quad: r, component: a }) {
      if (a.termType !== "BlankNode")
        return;
      const d = a.value, y = this.blankNodeInfo.get(d);
      y ? y.quads.add(r) : this.blankNodeInfo.set(d, { quads: /* @__PURE__ */ new Set([r]), hash: null });
    }
    async _addRelatedBlankNodeHash({ quad: r, component: a, position: d, id: y, issuer: g, hashToRelated: w }) {
      if (!(a.termType === "BlankNode" && a.value !== y))
        return;
      const u = a.value, f = await this.hashRelatedBlankNode(
        u,
        r,
        g,
        d
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
  function p(n, r) {
    return n.hash < r.hash ? -1 : n.hash > r.hash ? 1 : 0;
  }
  return wr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var _r, wa;
function xl() {
  if (wa) return _r;
  wa = 1;
  const e = Jn(), t = qo();
  return _r = class extends t {
    constructor() {
      super(), this.name = "URGNA2012", this.createMessageDigest = () => new e("sha1");
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(o, p, n) {
      return p.termType !== "BlankNode" ? p : n === "graph" ? {
        termType: "BlankNode",
        value: "_:g"
      } : {
        termType: "BlankNode",
        value: p.value === o ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(o) {
      return o.predicate.value;
    }
    // helper for creating hash to related blank nodes map
    async createHashToRelated(o, p) {
      const n = /* @__PURE__ */ new Map(), r = this.blankNodeInfo.get(o).quads;
      let a = 0;
      for (const d of r) {
        let y, g;
        if (d.subject.termType === "BlankNode" && d.subject.value !== o)
          g = d.subject.value, y = "p";
        else if (d.object.termType === "BlankNode" && d.object.value !== o)
          g = d.object.value, y = "r";
        else
          continue;
        ++a % 100 === 0 && await this._yield();
        const w = await this.hashRelatedBlankNode(
          g,
          d,
          p,
          y
        ), u = n.get(w);
        u ? u.push(g) : n.set(w, [g]);
      }
      return n;
    }
  }, _r;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Sr, _a;
function No() {
  if (_a) return Sr;
  _a = 1;
  const e = ms(), t = Jn(), s = Ao(), o = ys();
  Sr = class {
    constructor({
      createMessageDigest: r = () => new t("sha256"),
      canonicalIdMap: a = /* @__PURE__ */ new Map(),
      maxDeepIterations: d = 1 / 0
    } = {}) {
      this.name = "URDNA2015", this.blankNodeInfo = /* @__PURE__ */ new Map(), this.canonicalIssuer = new e("_:c14n", a), this.createMessageDigest = r, this.maxDeepIterations = d, this.quads = null, this.deepIterations = null;
    }
    // 4.4) Normalization Algorithm
    main(r) {
      this.deepIterations = /* @__PURE__ */ new Map(), this.quads = r;
      for (const u of r)
        this._addBlankNodeQuadInfo({ quad: u, component: u.subject }), this._addBlankNodeQuadInfo({ quad: u, component: u.object }), this._addBlankNodeQuadInfo({ quad: u, component: u.graph });
      const a = /* @__PURE__ */ new Map(), d = [...this.blankNodeInfo.keys()];
      for (const u of d)
        this._hashAndTrackBlankNode({ id: u, hashToBlankNodes: a });
      const y = [...a.keys()].sort(), g = [];
      for (const u of y) {
        const f = a.get(u);
        if (f.length > 1) {
          g.push(f);
          continue;
        }
        const b = f[0];
        this.canonicalIssuer.getId(b);
      }
      for (const u of g) {
        const f = [];
        for (const b of u) {
          if (this.canonicalIssuer.hasId(b))
            continue;
          const _ = new e("_:b");
          _.getId(b);
          const v = this.hashNDegreeQuads(b, _);
          f.push(v);
        }
        f.sort(p);
        for (const b of f) {
          const _ = b.issuer.getOldIds();
          for (const v of _)
            this.canonicalIssuer.getId(v);
        }
      }
      const w = [];
      for (const u of this.quads) {
        const f = o.serializeQuadComponents(
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
      const a = [], d = this.blankNodeInfo.get(r), y = d.quads;
      for (const w of y) {
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
        ), a.push(o.serializeQuad(u));
      }
      a.sort();
      const g = this.createMessageDigest();
      for (const w of a)
        g.update(w);
      return d.hash = g.digest(), d.hash;
    }
    // 4.7) Hash Related Blank Node
    hashRelatedBlankNode(r, a, d, y) {
      let g;
      this.canonicalIssuer.hasId(r) ? g = this.canonicalIssuer.getId(r) : d.hasId(r) ? g = d.getId(r) : g = this.blankNodeInfo.get(r).hash;
      const w = this.createMessageDigest();
      return w.update(y), y !== "g" && w.update(this.getRelatedPredicate(a)), w.update(g), w.digest();
    }
    // 4.8) Hash N-Degree Quads
    hashNDegreeQuads(r, a) {
      const d = this.deepIterations.get(r) || 0;
      if (d > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(r, d + 1);
      const y = this.createMessageDigest(), g = this.createHashToRelated(r, a), w = [...g.keys()].sort();
      for (const u of w) {
        y.update(u);
        let f = "", b;
        const _ = new s(g.get(u));
        for (; _.hasNext(); ) {
          const v = _.next();
          let S = a.clone(), h = "";
          const l = [];
          let i = !1;
          for (const c of v)
            if (this.canonicalIssuer.hasId(c) ? h += this.canonicalIssuer.getId(c) : (S.hasId(c) || l.push(c), h += S.getId(c)), f.length !== 0 && h > f) {
              i = !0;
              break;
            }
          if (!i) {
            for (const c of l) {
              const m = this.hashNDegreeQuads(c, S);
              if (h += S.getId(c), h += `<${m.hash}>`, S = m.issuer, f.length !== 0 && h > f) {
                i = !0;
                break;
              }
            }
            i || (f.length === 0 || h < f) && (f = h, b = S);
          }
        }
        y.update(f), a = b;
      }
      return { hash: y.digest(), issuer: a };
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(r, a) {
      return a.termType !== "BlankNode" ? a : {
        termType: "BlankNode",
        value: a.value === r ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(r) {
      return `<${r.predicate.value}>`;
    }
    // helper for creating hash to related blank nodes map
    createHashToRelated(r, a) {
      const d = /* @__PURE__ */ new Map(), y = this.blankNodeInfo.get(r).quads;
      for (const g of y)
        this._addRelatedBlankNodeHash({
          quad: g,
          component: g.subject,
          position: "s",
          id: r,
          issuer: a,
          hashToRelated: d
        }), this._addRelatedBlankNodeHash({
          quad: g,
          component: g.object,
          position: "o",
          id: r,
          issuer: a,
          hashToRelated: d
        }), this._addRelatedBlankNodeHash({
          quad: g,
          component: g.graph,
          position: "g",
          id: r,
          issuer: a,
          hashToRelated: d
        });
      return d;
    }
    _hashAndTrackBlankNode({ id: r, hashToBlankNodes: a }) {
      const d = this.hashFirstDegreeQuads(r), y = a.get(d);
      y ? y.push(r) : a.set(d, [r]);
    }
    _addBlankNodeQuadInfo({ quad: r, component: a }) {
      if (a.termType !== "BlankNode")
        return;
      const d = a.value, y = this.blankNodeInfo.get(d);
      y ? y.quads.add(r) : this.blankNodeInfo.set(d, { quads: /* @__PURE__ */ new Set([r]), hash: null });
    }
    _addRelatedBlankNodeHash({ quad: r, component: a, position: d, id: y, issuer: g, hashToRelated: w }) {
      if (!(a.termType === "BlankNode" && a.value !== y))
        return;
      const u = a.value, f = this.hashRelatedBlankNode(u, r, g, d), b = w.get(f);
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
  function p(n, r) {
    return n.hash < r.hash ? -1 : n.hash > r.hash ? 1 : 0;
  }
  return Sr;
}
/*!
 * Copyright (c) 2016-2021 Digital Bazaar, Inc. All rights reserved.
 */
var xr, Sa;
function $l() {
  if (Sa) return xr;
  Sa = 1;
  const e = Jn(), t = No();
  return xr = class extends t {
    constructor() {
      super(), this.name = "URGNA2012", this.createMessageDigest = () => new e("sha1");
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(o, p, n) {
      return p.termType !== "BlankNode" ? p : n === "graph" ? {
        termType: "BlankNode",
        value: "_:g"
      } : {
        termType: "BlankNode",
        value: p.value === o ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(o) {
      return o.predicate.value;
    }
    // helper for creating hash to related blank nodes map
    createHashToRelated(o, p) {
      const n = /* @__PURE__ */ new Map(), r = this.blankNodeInfo.get(o).quads;
      for (const a of r) {
        let d, y;
        if (a.subject.termType === "BlankNode" && a.subject.value !== o)
          y = a.subject.value, d = "p";
        else if (a.object.termType === "BlankNode" && a.object.value !== o)
          y = a.object.value, d = "r";
        else
          continue;
        const g = this.hashRelatedBlankNode(y, a, p, d), w = n.get(g);
        w ? w.push(y) : n.set(g, [y]);
      }
      return n;
    }
  }, xr;
}
const Il = {}, El = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Il
}, Symbol.toStringTag, { value: "Module" })), Rl = /* @__PURE__ */ Ic(El);
var xa;
function jl() {
  return xa || (xa = 1, (function(e) {
    const t = qo(), s = xl(), o = No(), p = $l();
    let n;
    try {
      n = Rl;
    } catch {
    }
    function r(a) {
      return Array.isArray(a) ? a : e.NQuads.legacyDatasetToQuads(a);
    }
    e.NQuads = ys(), e.IdentifierIssuer = ms(), e._rdfCanonizeNative = function(a) {
      return a && (n = a), n;
    }, e.canonize = async function(a, d) {
      const y = r(a);
      if (d.useNative) {
        if (!n)
          throw new Error("rdf-canonize-native not available");
        if (d.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return new Promise((g, w) => n.canonize(y, d, (u, f) => u ? w(u) : g(f)));
      }
      if (d.algorithm === "URDNA2015")
        return new t(d).main(y);
      if (d.algorithm === "URGNA2012") {
        if (d.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "URGNA2012".'
          );
        return new s(d).main(y);
      }
      throw "algorithm" in d ? new Error(
        "Invalid RDF Dataset Canonicalization algorithm: " + d.algorithm
      ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
    }, e._canonizeSync = function(a, d) {
      const y = r(a);
      if (d.useNative) {
        if (!n)
          throw new Error("rdf-canonize-native not available");
        if (d.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return n.canonizeSync(y, d);
      }
      if (d.algorithm === "URDNA2015")
        return new o(d).main(y);
      if (d.algorithm === "URGNA2012") {
        if (d.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "URGNA2012".'
          );
        return new p(d).main(y);
      }
      throw "algorithm" in d ? new Error(
        "Invalid RDF Dataset Canonicalization algorithm: " + d.algorithm
      ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
    };
  })(hr)), hr;
}
var $r, $a;
function gs() {
  return $a || ($a = 1, $r = jl()), $r;
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
  ), t.isGraph = (s) => e.isObject(s) && "@graph" in s && Object.keys(s).filter((o) => o !== "@id" && o !== "@index").length === 1, t.isSimpleGraph = (s) => t.isGraph(s) && !("@id" in s), t.isBlankNode = (s) => {
    if (e.isObject(s)) {
      if ("@id" in s) {
        const o = s["@id"];
        return !e.isString(o) || o.indexOf("_:") === 0;
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
    constructor(t = "An unspecified JSON-LD error occurred.", s = "jsonld.Error", o = {}) {
      super(t), this.name = s, this.message = t, this.details = o;
    }
  }), Rr;
}
var jr, ja;
function _e() {
  if (ja) return jr;
  ja = 1;
  const e = Ce(), t = ye(), s = gs().IdentifierIssuer, o = Se(), p = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/, n = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g, r = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/, a = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g, d = /^@[a-zA-Z]+$/, y = {
    headers: {
      accept: "application/ld+json, application/json"
    }
  }, g = {};
  jr = g, g.IdentifierIssuer = s, g.REGEX_BCP47 = p, g.REGEX_KEYWORD = d, g.clone = function(u) {
    if (u && typeof u == "object") {
      let f;
      if (t.isArray(u)) {
        f = [];
        for (let b = 0; b < u.length; ++b)
          f[b] = g.clone(u[b]);
      } else if (u instanceof Map) {
        f = /* @__PURE__ */ new Map();
        for (const [b, _] of u)
          f.set(b, g.clone(_));
      } else if (u instanceof Set) {
        f = /* @__PURE__ */ new Set();
        for (const b of u)
          f.add(g.clone(b));
      } else if (t.isObject(u)) {
        f = {};
        for (const b in u)
          f[b] = g.clone(u[b]);
      } else
        f = u.toString();
      return f;
    }
    return u;
  }, g.asArray = function(u) {
    return Array.isArray(u) ? u : [u];
  }, g.buildHeaders = (u = {}) => {
    if (Object.keys(u).some(
      (b) => b.toLowerCase() === "accept"
    ))
      throw new RangeError(
        'Accept header may not be specified; only "' + y.headers.accept + '" is supported.'
      );
    return Object.assign({ Accept: y.headers.accept }, u);
  }, g.parseLinkHeader = (u) => {
    const f = {}, b = u.match(n);
    for (let _ = 0; _ < b.length; ++_) {
      let v = b[_].match(r);
      if (!v)
        continue;
      const S = { target: v[1] }, h = v[2];
      for (; v = a.exec(h); )
        S[v[1]] = v[2] === void 0 ? v[3] : v[2];
      const l = S.rel || "";
      Array.isArray(f[l]) ? f[l].push(S) : f.hasOwnProperty(l) ? f[l] = [f[l], S] : f[l] = S;
    }
    return f;
  }, g.validateTypeValue = (u, f) => {
    if (!t.isString(u) && !(t.isArray(u) && u.every((b) => t.isString(b)))) {
      if (f && t.isObject(u))
        switch (Object.keys(u).length) {
          case 0:
            return;
          case 1:
            if ("@default" in u && g.asArray(u["@default"]).every((b) => t.isString(b)))
              return;
        }
      throw new o(
        'Invalid JSON-LD syntax; "@type" value must a string, an array of strings, an empty object, or a default object.',
        "jsonld.SyntaxError",
        { code: "invalid type value", value: u }
      );
    }
  }, g.hasProperty = (u, f) => {
    if (u.hasOwnProperty(f)) {
      const b = u[f];
      return !t.isArray(b) || b.length > 0;
    }
    return !1;
  }, g.hasValue = (u, f, b) => {
    if (g.hasProperty(u, f)) {
      let _ = u[f];
      const v = e.isList(_);
      if (t.isArray(_) || v) {
        v && (_ = _["@list"]);
        for (let S = 0; S < _.length; ++S)
          if (g.compareValues(b, _[S]))
            return !0;
      } else if (!t.isArray(b))
        return g.compareValues(b, _);
    }
    return !1;
  }, g.addValue = (u, f, b, _) => {
    if (_ = _ || {}, "propertyIsArray" in _ || (_.propertyIsArray = !1), "valueIsArray" in _ || (_.valueIsArray = !1), "allowDuplicate" in _ || (_.allowDuplicate = !0), "prependValue" in _ || (_.prependValue = !1), _.valueIsArray)
      u[f] = b;
    else if (t.isArray(b)) {
      b.length === 0 && _.propertyIsArray && !u.hasOwnProperty(f) && (u[f] = []), _.prependValue && (b = b.concat(u[f]), u[f] = []);
      for (let v = 0; v < b.length; ++v)
        g.addValue(u, f, b[v], _);
    } else if (u.hasOwnProperty(f)) {
      const v = !_.allowDuplicate && g.hasValue(u, f, b);
      !t.isArray(u[f]) && (!v || _.propertyIsArray) && (u[f] = [u[f]]), v || (_.prependValue ? u[f].unshift(b) : u[f].push(b));
    } else
      u[f] = _.propertyIsArray ? [b] : b;
  }, g.getValues = (u, f) => [].concat(u[f] || []), g.removeProperty = (u, f) => {
    delete u[f];
  }, g.removeValue = (u, f, b, _) => {
    _ = _ || {}, "propertyIsArray" in _ || (_.propertyIsArray = !1);
    const v = g.getValues(u, f).filter(
      (S) => !g.compareValues(S, b)
    );
    v.length === 0 ? g.removeProperty(u, f) : v.length === 1 && !_.propertyIsArray ? u[f] = v[0] : u[f] = v;
  }, g.relabelBlankNodes = (u, f) => {
    f = f || {};
    const b = f.issuer || new s("_:b");
    return w(b, u);
  }, g.compareValues = (u, f) => u === f || e.isValue(u) && e.isValue(f) && u["@value"] === f["@value"] && u["@type"] === f["@type"] && u["@language"] === f["@language"] && u["@index"] === f["@index"] ? !0 : t.isObject(u) && "@id" in u && t.isObject(f) && "@id" in f ? u["@id"] === f["@id"] : !1, g.compareShortestLeast = (u, f) => u.length < f.length ? -1 : f.length < u.length ? 1 : u === f ? 0 : u < f ? -1 : 1;
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
        const v = b[_];
        v !== "@id" && (f[v] = w(u, f[v]));
      }
    }
    return f;
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
var qr, qa;
function Oo() {
  return qa || (qa = 1, qr = class {
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
  }), qr;
}
var Nr, Na;
function Be() {
  if (Na) return Nr;
  Na = 1;
  const e = ye(), t = {};
  Nr = t, t.parsers = {
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
  }, t.parse = (o, p) => {
    const n = {}, r = t.parsers[p || "full"], a = r.regex.exec(o);
    let d = r.keys.length;
    for (; d--; )
      n[r.keys[d]] = a[d] === void 0 ? null : a[d];
    return (n.scheme === "https" && n.port === "443" || n.scheme === "http" && n.port === "80") && (n.href = n.href.replace(":" + n.port, ""), n.authority = n.authority.replace(":" + n.port, ""), n.port = null), n.normalizedPath = t.removeDotSegments(n.path), n;
  }, t.prependBase = (o, p) => {
    if (o === null || t.isAbsolute(p))
      return p;
    (!o || e.isString(o)) && (o = t.parse(o || ""));
    const n = t.parse(p), r = {
      protocol: o.protocol || ""
    };
    if (n.authority !== null)
      r.authority = n.authority, r.path = n.path, r.query = n.query;
    else if (r.authority = o.authority, n.path === "")
      r.path = o.path, n.query !== null ? r.query = n.query : r.query = o.query;
    else {
      if (n.path.indexOf("/") === 0)
        r.path = n.path;
      else {
        let d = o.path;
        d = d.substr(0, d.lastIndexOf("/") + 1), (d.length > 0 || o.authority) && d.substr(-1) !== "/" && (d += "/"), d += n.path, r.path = d;
      }
      r.query = n.query;
    }
    n.path !== "" && (r.path = t.removeDotSegments(r.path));
    let a = r.protocol;
    return r.authority !== null && (a += "//" + r.authority), a += r.path, r.query !== null && (a += "?" + r.query), n.fragment !== null && (a += "#" + n.fragment), a === "" && (a = "./"), a;
  }, t.removeBase = (o, p) => {
    if (o === null)
      return p;
    (!o || e.isString(o)) && (o = t.parse(o || ""));
    let n = "";
    if (o.href !== "" ? n += (o.protocol || "") + "//" + (o.authority || "") : p.indexOf("//") && (n += "//"), p.indexOf(n) !== 0)
      return p;
    const r = t.parse(p.substr(n.length)), a = o.normalizedPath.split("/"), d = r.normalizedPath.split("/"), y = r.fragment || r.query ? 0 : 1;
    for (; a.length > 0 && d.length > y && a[0] === d[0]; )
      a.shift(), d.shift();
    let g = "";
    if (a.length > 0) {
      a.pop();
      for (let w = 0; w < a.length; ++w)
        g += "../";
    }
    return g += d.join("/"), r.query !== null && (g += "?" + r.query), r.fragment !== null && (g += "#" + r.fragment), g === "" && (g = "./"), g;
  }, t.removeDotSegments = (o) => {
    if (o.length === 0)
      return "";
    const p = o.split("/"), n = [];
    for (; p.length > 0; ) {
      const r = p.shift(), a = p.length === 0;
      if (r === ".") {
        a && n.push("");
        continue;
      }
      if (r === "..") {
        n.pop(), a && n.push("");
        continue;
      }
      n.push(r);
    }
    return o[0] === "/" && n.length > 0 && n[0] !== "" && n.unshift(""), n.length === 1 && n[0] === "" ? "/" : n.join("/");
  };
  const s = /^([A-Za-z][A-Za-z0-9+-.]*|_):[^\s]*$/;
  return t.isAbsolute = (o) => e.isString(o) && s.test(o), t.isRelative = (o) => e.isString(o), Nr;
}
var Or, Oa;
function Al() {
  if (Oa) return Or;
  Oa = 1;
  const { parseLinkHeader: e, buildHeaders: t } = _e(), { LINK_HEADER_CONTEXT: s } = vs(), o = Se(), p = Oo(), { prependBase: n } = Be(), r = /(^|(\r\n))link:/i;
  Or = ({
    secure: d,
    headers: y = {},
    xhr: g
  } = { headers: {} }) => {
    return y = t(y), new p().wrapLoader(u);
    async function u(f) {
      if (f.indexOf("http:") !== 0 && f.indexOf("https:") !== 0)
        throw new o(
          'URL could not be dereferenced; only "http" and "https" URLs are supported.',
          "jsonld.InvalidUrl",
          { code: "loading document failed", url: f }
        );
      if (d && f.indexOf("https") !== 0)
        throw new o(
          `URL could not be dereferenced; secure mode is enabled and the URL's scheme is not "https".`,
          "jsonld.InvalidUrl",
          { code: "loading document failed", url: f }
        );
      let b;
      try {
        b = await a(g, f, y);
      } catch (l) {
        throw new o(
          "URL could not be dereferenced, an error occurred.",
          "jsonld.LoadDocumentError",
          { code: "loading document failed", url: f, cause: l }
        );
      }
      if (b.status >= 400)
        throw new o(
          "URL could not be dereferenced: " + b.statusText,
          "jsonld.LoadDocumentError",
          {
            code: "loading document failed",
            url: f,
            httpStatusCode: b.status
          }
        );
      let _ = { contextUrl: null, documentUrl: f, document: b.response }, v = null;
      const S = b.getResponseHeader("Content-Type");
      let h;
      if (r.test(b.getAllResponseHeaders()) && (h = b.getResponseHeader("Link")), h && S !== "application/ld+json") {
        const l = e(h), i = l[s];
        if (Array.isArray(i))
          throw new o(
            "URL could not be dereferenced, it has more than one associated HTTP Link Header.",
            "jsonld.InvalidUrl",
            { code: "multiple context link headers", url: f }
          );
        i && (_.contextUrl = i.target), v = l.alternate, v && v.type == "application/ld+json" && !(S || "").match(/^application\/(\w*\+)?json$/) && (_ = await u(n(f, v.target)));
      }
      return _;
    }
  };
  function a(d, y, g) {
    d = d || XMLHttpRequest;
    const w = new d();
    return new Promise((u, f) => {
      w.onload = () => u(w), w.onerror = (b) => f(b), w.open("GET", y, !0);
      for (const b in g)
        w.setRequestHeader(b, g[b]);
      w.send();
    });
  }
  return Or;
}
var Pr, Pa;
function ql() {
  if (Pa) return Pr;
  Pa = 1;
  const e = Al(), t = {};
  return Pr = t, t.setupDocumentLoaders = function(s) {
    typeof XMLHttpRequest < "u" && (s.documentLoaders.xhr = e, s.useDocumentLoader("xhr"));
  }, t.setupGlobals = function(s) {
    typeof globalThis.JsonLdProcessor > "u" && Object.defineProperty(globalThis, "JsonLdProcessor", {
      writable: !0,
      enumerable: !1,
      configurable: !0,
      value: s.JsonLdProcessor
    });
  }, Pr;
}
var Tr, Ta;
function Nl() {
  return Ta || (Ta = 1, Tr = function(e) {
    e.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next)
        yield t.value;
    };
  }), Tr;
}
var kr, ka;
function Ol() {
  if (ka) return kr;
  ka = 1, kr = e, e.Node = p, e.create = e;
  function e(n) {
    var r = this;
    if (r instanceof e || (r = new e()), r.tail = null, r.head = null, r.length = 0, n && typeof n.forEach == "function")
      n.forEach(function(y) {
        r.push(y);
      });
    else if (arguments.length > 0)
      for (var a = 0, d = arguments.length; a < d; a++)
        r.push(arguments[a]);
    return r;
  }
  e.prototype.removeNode = function(n) {
    if (n.list !== this)
      throw new Error("removing node which does not belong to this list");
    var r = n.next, a = n.prev;
    return r && (r.prev = a), a && (a.next = r), n === this.head && (this.head = r), n === this.tail && (this.tail = a), n.list.length--, n.next = null, n.prev = null, n.list = null, r;
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
      o(this, arguments[n]);
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
    for (var a = this.head, d = 0; a !== null; d++)
      n.call(r, a.value, d, this), a = a.next;
  }, e.prototype.forEachReverse = function(n, r) {
    r = r || this;
    for (var a = this.tail, d = this.length - 1; a !== null; d--)
      n.call(r, a.value, d, this), a = a.prev;
  }, e.prototype.get = function(n) {
    for (var r = 0, a = this.head; a !== null && r < n; r++)
      a = a.next;
    if (r === n && a !== null)
      return a.value;
  }, e.prototype.getReverse = function(n) {
    for (var r = 0, a = this.tail; a !== null && r < n; r++)
      a = a.prev;
    if (r === n && a !== null)
      return a.value;
  }, e.prototype.map = function(n, r) {
    r = r || this;
    for (var a = new e(), d = this.head; d !== null; )
      a.push(n.call(r, d.value, this)), d = d.next;
    return a;
  }, e.prototype.mapReverse = function(n, r) {
    r = r || this;
    for (var a = new e(), d = this.tail; d !== null; )
      a.push(n.call(r, d.value, this)), d = d.prev;
    return a;
  }, e.prototype.reduce = function(n, r) {
    var a, d = this.head;
    if (arguments.length > 1)
      a = r;
    else if (this.head)
      d = this.head.next, a = this.head.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var y = 0; d !== null; y++)
      a = n(a, d.value, y), d = d.next;
    return a;
  }, e.prototype.reduceReverse = function(n, r) {
    var a, d = this.tail;
    if (arguments.length > 1)
      a = r;
    else if (this.tail)
      d = this.tail.prev, a = this.tail.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var y = this.length - 1; d !== null; y--)
      a = n(a, d.value, y), d = d.prev;
    return a;
  }, e.prototype.toArray = function() {
    for (var n = new Array(this.length), r = 0, a = this.head; a !== null; r++)
      n[r] = a.value, a = a.next;
    return n;
  }, e.prototype.toArrayReverse = function() {
    for (var n = new Array(this.length), r = 0, a = this.tail; a !== null; r++)
      n[r] = a.value, a = a.prev;
    return n;
  }, e.prototype.slice = function(n, r) {
    r = r || this.length, r < 0 && (r += this.length), n = n || 0, n < 0 && (n += this.length);
    var a = new e();
    if (r < n || r < 0)
      return a;
    n < 0 && (n = 0), r > this.length && (r = this.length);
    for (var d = 0, y = this.head; y !== null && d < n; d++)
      y = y.next;
    for (; y !== null && d < r; d++, y = y.next)
      a.push(y.value);
    return a;
  }, e.prototype.sliceReverse = function(n, r) {
    r = r || this.length, r < 0 && (r += this.length), n = n || 0, n < 0 && (n += this.length);
    var a = new e();
    if (r < n || r < 0)
      return a;
    n < 0 && (n = 0), r > this.length && (r = this.length);
    for (var d = this.length, y = this.tail; y !== null && d > r; d--)
      y = y.prev;
    for (; y !== null && d > n; d--, y = y.prev)
      a.push(y.value);
    return a;
  }, e.prototype.splice = function(n, r, ...a) {
    n > this.length && (n = this.length - 1), n < 0 && (n = this.length + n);
    for (var d = 0, y = this.head; y !== null && d < n; d++)
      y = y.next;
    for (var g = [], d = 0; y && d < r; d++)
      g.push(y.value), y = this.removeNode(y);
    y === null && (y = this.tail), y !== this.head && y !== this.tail && (y = y.prev);
    for (var d = 0; d < a.length; d++)
      y = t(this, y, a[d]);
    return g;
  }, e.prototype.reverse = function() {
    for (var n = this.head, r = this.tail, a = n; a !== null; a = a.prev) {
      var d = a.prev;
      a.prev = a.next, a.next = d;
    }
    return this.head = r, this.tail = n, this;
  };
  function t(n, r, a) {
    var d = r === n.head ? new p(a, null, r, n) : new p(a, r, r.next, n);
    return d.next === null && (n.tail = d), d.prev === null && (n.head = d), n.length++, d;
  }
  function s(n, r) {
    n.tail = new p(r, n.tail, null, n), n.head || (n.head = n.tail), n.length++;
  }
  function o(n, r) {
    n.head = new p(r, null, n.head, n), n.tail || (n.tail = n.head), n.length++;
  }
  function p(n, r, a, d) {
    if (!(this instanceof p))
      return new p(n, r, a, d);
    this.list = d, this.value = n, r ? (r.next = this, this.prev = r) : this.prev = null, a ? (a.prev = this, this.next = a) : this.next = null;
  }
  try {
    Nl()(e);
  } catch {
  }
  return kr;
}
var Dr, Da;
function Po() {
  if (Da) return Dr;
  Da = 1;
  const e = Ol(), t = Symbol("max"), s = Symbol("length"), o = Symbol("lengthCalculator"), p = Symbol("allowStale"), n = Symbol("maxAge"), r = Symbol("dispose"), a = Symbol("noDisposeOnSet"), d = Symbol("lruList"), y = Symbol("cache"), g = Symbol("updateAgeOnGet"), w = () => 1;
  class u {
    constructor(i) {
      if (typeof i == "number" && (i = { max: i }), i || (i = {}), i.max && (typeof i.max != "number" || i.max < 0))
        throw new TypeError("max must be a non-negative number");
      this[t] = i.max || 1 / 0;
      const c = i.length || w;
      if (this[o] = typeof c != "function" ? w : c, this[p] = i.stale || !1, i.maxAge && typeof i.maxAge != "number")
        throw new TypeError("maxAge must be a number");
      this[n] = i.maxAge || 0, this[r] = i.dispose, this[a] = i.noDisposeOnSet || !1, this[g] = i.updateAgeOnGet || !1, this.reset();
    }
    // resize the cache when the max changes.
    set max(i) {
      if (typeof i != "number" || i < 0)
        throw new TypeError("max must be a non-negative number");
      this[t] = i || 1 / 0, _(this);
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
      this[n] = i, _(this);
    }
    get maxAge() {
      return this[n];
    }
    // resize the cache when the lengthCalculator changes.
    set lengthCalculator(i) {
      typeof i != "function" && (i = w), i !== this[o] && (this[o] = i, this[s] = 0, this[d].forEach((c) => {
        c.length = this[o](c.value, c.key), this[s] += c.length;
      })), _(this);
    }
    get lengthCalculator() {
      return this[o];
    }
    get length() {
      return this[s];
    }
    get itemCount() {
      return this[d].length;
    }
    rforEach(i, c) {
      c = c || this;
      for (let m = this[d].tail; m !== null; ) {
        const $ = m.prev;
        h(this, i, m, c), m = $;
      }
    }
    forEach(i, c) {
      c = c || this;
      for (let m = this[d].head; m !== null; ) {
        const $ = m.next;
        h(this, i, m, c), m = $;
      }
    }
    keys() {
      return this[d].toArray().map((i) => i.key);
    }
    values() {
      return this[d].toArray().map((i) => i.value);
    }
    reset() {
      this[r] && this[d] && this[d].length && this[d].forEach((i) => this[r](i.key, i.value)), this[y] = /* @__PURE__ */ new Map(), this[d] = new e(), this[s] = 0;
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
    set(i, c, m) {
      if (m = m || this[n], m && typeof m != "number")
        throw new TypeError("maxAge must be a number");
      const $ = m ? Date.now() : 0, x = this[o](c, i);
      if (this[y].has(i)) {
        if (x > this[t])
          return v(this, this[y].get(i)), !1;
        const k = this[y].get(i).value;
        return this[r] && (this[a] || this[r](i, k.value)), k.now = $, k.maxAge = m, k.value = c, this[s] += x - k.length, k.length = x, this.get(i), _(this), !0;
      }
      const j = new S(i, c, x, $, m);
      return j.length > this[t] ? (this[r] && this[r](i, c), !1) : (this[s] += j.length, this[d].unshift(j), this[y].set(i, this[d].head), _(this), !0);
    }
    has(i) {
      if (!this[y].has(i)) return !1;
      const c = this[y].get(i).value;
      return !b(this, c);
    }
    get(i) {
      return f(this, i, !0);
    }
    peek(i) {
      return f(this, i, !1);
    }
    pop() {
      const i = this[d].tail;
      return i ? (v(this, i), i.value) : null;
    }
    del(i) {
      v(this, this[y].get(i));
    }
    load(i) {
      this.reset();
      const c = Date.now();
      for (let m = i.length - 1; m >= 0; m--) {
        const $ = i[m], x = $.e || 0;
        if (x === 0)
          this.set($.k, $.v);
        else {
          const j = x - c;
          j > 0 && this.set($.k, $.v, j);
        }
      }
    }
    prune() {
      this[y].forEach((i, c) => f(this, c, !1));
    }
  }
  const f = (l, i, c) => {
    const m = l[y].get(i);
    if (m) {
      const $ = m.value;
      if (b(l, $)) {
        if (v(l, m), !l[p])
          return;
      } else
        c && (l[g] && (m.value.now = Date.now()), l[d].unshiftNode(m));
      return $.value;
    }
  }, b = (l, i) => {
    if (!i || !i.maxAge && !l[n])
      return !1;
    const c = Date.now() - i.now;
    return i.maxAge ? c > i.maxAge : l[n] && c > l[n];
  }, _ = (l) => {
    if (l[s] > l[t])
      for (let i = l[d].tail; l[s] > l[t] && i !== null; ) {
        const c = i.prev;
        v(l, i), i = c;
      }
  }, v = (l, i) => {
    if (i) {
      const c = i.value;
      l[r] && l[r](c.key, c.value), l[s] -= c.length, l[y].delete(c.key), l[d].removeNode(i);
    }
  };
  class S {
    constructor(i, c, m, $, x) {
      this.key = i, this.value = c, this.length = m, this.now = $, this.maxAge = x || 0;
    }
  }
  const h = (l, i, c, m) => {
    let $ = c.value;
    b(l, $) && (v(l, c), l[p] || ($ = void 0)), $ && i.call(m, $.value, $.key, l);
  };
  return Dr = u, Dr;
}
var Mr, Ma;
function Pl() {
  if (Ma) return Mr;
  Ma = 1;
  const e = Po(), t = 10;
  return Mr = class {
    /**
     * Creates a ResolvedContext.
     *
     * @param document the context document.
     */
    constructor({ document: o }) {
      this.document = o, this.cache = new e({ max: t });
    }
    getProcessed(o) {
      return this.cache.get(o);
    }
    setProcessed(o, p) {
      this.cache.set(o, p);
    }
  }, Mr;
}
var Lr, La;
function Tl() {
  if (La) return Lr;
  La = 1;
  const {
    isArray: e,
    isObject: t,
    isString: s
  } = ye(), {
    asArray: o
  } = _e(), { prependBase: p } = Be(), n = Se(), r = Pl(), a = 10;
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
      u && t(u) && u["@context"] && (u = u["@context"]), u = o(u);
      const v = [];
      for (const S of u) {
        if (s(S)) {
          let i = this._get(S);
          i || (i = await this._resolveRemoteContext(
            { activeCtx: w, url: S, documentLoader: f, base: b, cycles: _ }
          )), e(i) ? v.push(...i) : v.push(i);
          continue;
        }
        if (S === null) {
          v.push(new r({ document: null }));
          continue;
        }
        t(S) || d(u);
        const h = JSON.stringify(S);
        let l = this._get(h);
        l || (l = new r({ document: S }), this._cacheResolvedContext({ key: h, resolved: l, tag: "static" })), v.push(l);
      }
      return v;
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
      u = p(b, u);
      const { context: v, remoteDoc: S } = await this._fetchContext(
        { activeCtx: w, url: u, documentLoader: f, cycles: _ }
      );
      b = S.documentUrl || u, y({ context: v, base: b });
      const h = await this.resolve(
        { activeCtx: w, context: v, documentLoader: f, base: b, cycles: _ }
      );
      return this._cacheResolvedContext({ key: u, resolved: h, tag: S.tag }), h;
    }
    async _fetchContext({ activeCtx: w, url: u, documentLoader: f, cycles: b }) {
      if (b.size > a)
        throw new n(
          "Maximum number of @context URLs exceeded.",
          "jsonld.ContextUrlError",
          {
            code: w.processingMode === "json-ld-1.0" ? "loading remote context failed" : "context overflow",
            max: a
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
      let _, v;
      try {
        v = await f(u), _ = v.document || null, s(_) && (_ = JSON.parse(_));
      } catch (S) {
        throw new n(
          `Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context. URL: "${u}".`,
          "jsonld.InvalidUrl",
          { code: "loading remote context failed", url: u, cause: S }
        );
      }
      if (!t(_))
        throw new n(
          `Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object. URL: "${u}".`,
          "jsonld.InvalidUrl",
          { code: "invalid remote context", url: u }
        );
      return "@context" in _ ? _ = { "@context": _["@context"] } : _ = { "@context": {} }, v.contextUrl && (e(_["@context"]) || (_["@context"] = [_["@context"]]), _["@context"].push(v.contextUrl)), { context: _, remoteDoc: v };
    }
  };
  function d(g) {
    throw new n(
      "Invalid JSON-LD syntax; @context must be an object.",
      "jsonld.SyntaxError",
      {
        code: "invalid local context",
        context: g
      }
    );
  }
  function y({ context: g, base: w }) {
    if (!g)
      return;
    const u = g["@context"];
    if (s(u)) {
      g["@context"] = p(w, u);
      return;
    }
    if (e(u)) {
      for (let f = 0; f < u.length; ++f) {
        const b = u[f];
        if (s(b)) {
          u[f] = p(w, b);
          continue;
        }
        t(b) && y({ context: { "@context": b }, base: w });
      }
      return;
    }
    if (t(u))
      for (const f in u)
        y({ context: u[f], base: w });
  }
  return Lr;
}
var Cr, Ca;
function kl() {
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
  } = _e(), o = {};
  Ur = o, o.defaultEventHandler = null, o.setupEventHandler = ({ options: r = {} }) => {
    const a = [].concat(
      r.safe ? o.safeEventHandler : [],
      r.eventHandler ? s(r.eventHandler) : [],
      o.defaultEventHandler ? o.defaultEventHandler : []
    );
    return a.length === 0 ? null : a;
  }, o.handleEvent = ({
    event: r,
    options: a
  }) => {
    p({ event: r, handlers: a.eventHandler });
  };
  function p({ event: r, handlers: a }) {
    let d = !0;
    for (let y = 0; d && y < a.length; ++y) {
      d = !1;
      const g = a[y];
      if (t(g))
        d = p({ event: r, handlers: g });
      else if (typeof g == "function")
        g({ event: r, next: () => {
          d = !0;
        } });
      else if (typeof g == "object")
        r.code in g ? g[r.code]({ event: r, next: () => {
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
  return o.safeEventHandler = function({ event: a, next: d }) {
    if (a.level === "warning" && n.has(a.code))
      throw new e(
        "Safe mode validation error.",
        "jsonld.ValidationError",
        { event: a }
      );
    d();
  }, o.logEventHandler = function({ event: a, next: d }) {
    console.log(`EVENT: ${a.message}`, { event: a }), d();
  }, o.logWarningEventHandler = function({ event: a, next: d }) {
    a.level === "warning" && console.warn(`WARNING: ${a.message}`, { event: a }), d();
  }, o.unhandledEventHandler = function({ event: a }) {
    throw new e(
      "No handler for event.",
      "jsonld.UnhandledEvent",
      { event: a }
    );
  }, o.setDefaultEventHandler = function({ eventHandler: r } = {}) {
    o.defaultEventHandler = r ? s(r) : null;
  }, Ur;
}
var Vr, Va;
function Xe() {
  if (Va) return Vr;
  Va = 1;
  const e = _e(), t = Se(), {
    isArray: s,
    isObject: o,
    isString: p,
    isUndefined: n
  } = ye(), {
    isAbsolute: r,
    isRelative: a,
    prependBase: d
  } = Be(), {
    handleEvent: y
  } = Et(), {
    REGEX_BCP47: g,
    REGEX_KEYWORD: w,
    asArray: u,
    compareShortestLeast: f
  } = _e(), b = /* @__PURE__ */ new Map(), _ = 1e4, v = {};
  Vr = v, v.process = async ({
    activeCtx: l,
    localCtx: i,
    options: c,
    propagate: m = !0,
    overrideProtected: $ = !1,
    cycles: x = /* @__PURE__ */ new Set()
  }) => {
    if (o(i) && "@context" in i && s(i["@context"]) && (i = i["@context"]), u(i).length === 0)
      return l;
    const q = [], k = [
      ({ event: J, next: N }) => {
        q.push(J), N();
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
    o(T[0].document) && typeof T[0].document["@propagate"] == "boolean" && (m = T[0].document["@propagate"]);
    let O = l;
    !m && !O.previousContext && (O = O.clone(), O.previousContext = l);
    for (const J of T) {
      let { document: N } = J;
      if (l = O, N === null) {
        if (!$ && Object.keys(l.protected).length !== 0)
          throw new t(
            "Tried to nullify a context with protected terms outside of a term definition.",
            "jsonld.SyntaxError",
            { code: "invalid context nullification" }
          );
        O = l = v.getInitialContext(c).clone();
        continue;
      }
      const H = J.getProcessed(l);
      if (H) {
        if (C.eventHandler)
          for (const G of H.events)
            y({ event: G, options: C });
        O = l = H.context;
        continue;
      }
      if (o(N) && "@context" in N && (N = N["@context"]), !o(N))
        throw new t(
          "Invalid JSON-LD syntax; @context must be an object.",
          "jsonld.SyntaxError",
          { code: "invalid local context", context: N }
        );
      O = O.clone();
      const F = /* @__PURE__ */ new Map();
      if ("@version" in N) {
        if (N["@version"] !== 1.1)
          throw new t(
            "Unsupported JSON-LD version: " + N["@version"],
            "jsonld.UnsupportedVersion",
            { code: "invalid @version value", context: N }
          );
        if (l.processingMode && l.processingMode === "json-ld-1.0")
          throw new t(
            "@version: " + N["@version"] + " not compatible with " + l.processingMode,
            "jsonld.ProcessingModeConflict",
            { code: "processing mode conflict", context: N }
          );
        O.processingMode = "json-ld-1.1", O["@version"] = N["@version"], F.set("@version", !0);
      }
      if (O.processingMode = O.processingMode || l.processingMode, "@base" in N) {
        let G = N["@base"];
        if (!(G === null || r(G))) if (a(G))
          G = d(O["@base"], G);
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.',
            "jsonld.SyntaxError",
            { code: "invalid base IRI", context: N }
          );
        O["@base"] = G, F.set("@base", !0);
      }
      if ("@vocab" in N) {
        const G = N["@vocab"];
        if (G === null)
          delete O["@vocab"];
        else if (p(G)) {
          if (!r(G) && v.processingMode(O, 1))
            throw new t(
              'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.',
              "jsonld.SyntaxError",
              { code: "invalid vocab mapping", context: N }
            );
          {
            const A = S(
              O,
              G,
              { vocab: !0, base: !0 },
              void 0,
              void 0,
              c
            );
            r(A) || c.eventHandler && y({
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
          { code: "invalid vocab mapping", context: N }
        );
        F.set("@vocab", !0);
      }
      if ("@language" in N) {
        const G = N["@language"];
        if (G === null)
          delete O["@language"];
        else if (p(G))
          G.match(g) || c.eventHandler && y({
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
            { code: "invalid default language", context: N }
          );
        F.set("@language", !0);
      }
      if ("@direction" in N) {
        const G = N["@direction"];
        if (l.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @direction not compatible with " + l.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context member", context: N }
          );
        if (G === null)
          delete O["@direction"];
        else {
          if (G !== "ltr" && G !== "rtl")
            throw new t(
              'Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", context: N }
            );
          O["@direction"] = G;
        }
        F.set("@direction", !0);
      }
      if ("@propagate" in N) {
        const G = N["@propagate"];
        if (l.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @propagate not compatible with " + l.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: N }
          );
        if (typeof G != "boolean")
          throw new t(
            "Invalid JSON-LD syntax; @propagate value must be a boolean.",
            "jsonld.SyntaxError",
            { code: "invalid @propagate value", context: i }
          );
        F.set("@propagate", !0);
      }
      if ("@import" in N) {
        const G = N["@import"];
        if (l.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @import not compatible with " + l.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: N }
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
        const P = A[0].getProcessed(l);
        if (P)
          N = P;
        else {
          const U = A[0].document;
          if ("@import" in U)
            throw new t(
              "Invalid JSON-LD syntax: imported context must not include @import.",
              "jsonld.SyntaxError",
              { code: "invalid context entry", context: i }
            );
          for (const D in U)
            N.hasOwnProperty(D) || (N[D] = U[D]);
          A[0].setProcessed(l, N);
        }
        F.set("@import", !0);
      }
      F.set("@protected", N["@protected"] || !1);
      for (const G in N)
        if (v.createTermDefinition({
          activeCtx: O,
          localCtx: N,
          term: G,
          defined: F,
          options: c,
          overrideProtected: $
        }), o(N[G]) && "@context" in N[G]) {
          const A = N[G]["@context"];
          let P = !0;
          if (p(A)) {
            const U = d(c.base, A);
            x.has(U) ? P = !1 : x.add(U);
          }
          if (P)
            try {
              await v.process({
                activeCtx: O.clone(),
                localCtx: N[G]["@context"],
                overrideProtected: !0,
                options: c,
                cycles: x
              });
            } catch {
              throw new t(
                "Invalid JSON-LD syntax; invalid scoped context.",
                "jsonld.SyntaxError",
                {
                  code: "invalid scoped context",
                  context: N[G]["@context"],
                  term: G
                }
              );
            }
        }
      J.setProcessed(l, {
        context: O,
        events: q
      });
    }
    return O;
  }, v.createTermDefinition = ({
    activeCtx: l,
    localCtx: i,
    term: c,
    defined: m,
    options: $,
    overrideProtected: x = !1
  }) => {
    if (m.has(c)) {
      if (m.get(c))
        return;
      throw new t(
        "Cyclical context definition detected.",
        "jsonld.CyclicalContext",
        { code: "cyclic IRI mapping", context: i, term: c }
      );
    }
    m.set(c, !1);
    let j;
    if (i.hasOwnProperty(c) && (j = i[c]), c === "@type" && o(j) && (j["@container"] || "@set") === "@set" && v.processingMode(l, 1.1)) {
      const N = ["@container", "@id", "@protected"], H = Object.keys(j);
      if (H.length === 0 || H.some((F) => !N.includes(F)))
        throw new t(
          "Invalid JSON-LD syntax; keywords cannot be overridden.",
          "jsonld.SyntaxError",
          { code: "keyword redefinition", context: i, term: c }
        );
    } else {
      if (v.isKeyword(c))
        throw new t(
          "Invalid JSON-LD syntax; keywords cannot be overridden.",
          "jsonld.SyntaxError",
          { code: "keyword redefinition", context: i, term: c }
        );
      if (c.match(w)) {
        $.eventHandler && y({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved term",
            level: "warning",
            message: 'Terms beginning with "@" are reserved for future use and dropped.',
            details: {
              term: c
            }
          },
          options: $
        });
        return;
      } else if (c === "")
        throw new t(
          "Invalid JSON-LD syntax; a term cannot be an empty string.",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: i }
        );
    }
    const q = l.mappings.get(c);
    l.mappings.has(c) && l.mappings.delete(c);
    let k = !1;
    if ((p(j) || j === null) && (k = !0, j = { "@id": j }), !o(j))
      throw new t(
        "Invalid JSON-LD syntax; @context term values must be strings or objects.",
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: i }
      );
    const C = {};
    l.mappings.set(c, C), C.reverse = !1;
    const T = ["@container", "@id", "@language", "@reverse", "@type"];
    v.processingMode(l, 1.1) && T.push(
      "@context",
      "@direction",
      "@index",
      "@nest",
      "@prefix",
      "@protected"
    );
    for (const N in j)
      if (!T.includes(N))
        throw new t(
          "Invalid JSON-LD syntax; a term definition must not contain " + N,
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
      const N = j["@reverse"];
      if (!p(N))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: i }
        );
      if (N.match(w)) {
        $.eventHandler && y({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved @reverse value",
            level: "warning",
            message: '@reverse values beginning with "@" are reserved for future use and dropped.',
            details: {
              reverse: N
            }
          },
          options: $
        }), q ? l.mappings.set(c, q) : l.mappings.delete(c);
        return;
      }
      const H = S(
        l,
        N,
        { vocab: !0, base: !1 },
        i,
        m,
        $
      );
      if (!r(H))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: i }
        );
      C["@id"] = H, C.reverse = !0;
    } else if ("@id" in j) {
      let N = j["@id"];
      if (N && !p(N))
        throw new t(
          "Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: i }
        );
      if (N === null)
        C["@id"] = null;
      else if (!v.isKeyword(N) && N.match(w)) {
        $.eventHandler && y({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved @id value",
            level: "warning",
            message: '@id values beginning with "@" are reserved for future use and dropped.',
            details: {
              id: N
            }
          },
          options: $
        }), q ? l.mappings.set(c, q) : l.mappings.delete(c);
        return;
      } else if (N !== c) {
        if (N = S(
          l,
          N,
          { vocab: !0, base: !1 },
          i,
          m,
          $
        ), !r(N) && !v.isKeyword(N))
          throw new t(
            "Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: i }
          );
        if (c.match(/(?::[^:])|\//)) {
          const H = new Map(m).set(c, !0);
          if (S(
            l,
            c,
            { vocab: !0, base: !1 },
            i,
            H,
            $
          ) !== N)
            throw new t(
              "Invalid JSON-LD syntax; term in form of IRI must expand to definition.",
              "jsonld.SyntaxError",
              { code: "invalid IRI mapping", context: i }
            );
        }
        C["@id"] = N, C._prefix = k && !C._termHasColon && N.match(/[:\/\?#\[\]@]$/) !== null;
      }
    }
    if (!("@id" in C))
      if (C._termHasColon) {
        const N = c.substr(0, O);
        if (i.hasOwnProperty(N) && v.createTermDefinition({
          activeCtx: l,
          localCtx: i,
          term: N,
          defined: m,
          options: $
        }), l.mappings.has(N)) {
          const H = c.substr(O + 1);
          C["@id"] = l.mappings.get(N)["@id"] + H;
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
    if ((j["@protected"] === !0 || m.get("@protected") === !0 && j["@protected"] !== !1) && (l.protected[c] = !0, C.protected = !0), m.set(c, !0), "@type" in j) {
      let N = j["@type"];
      if (!p(N))
        throw new t(
          "Invalid JSON-LD syntax; an @context @type value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid type mapping", context: i }
        );
      if (N === "@json" || N === "@none") {
        if (v.processingMode(l, 1))
          throw new t(
            `Invalid JSON-LD syntax; an @context @type value must not be "${N}" in JSON-LD 1.0 mode.`,
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: i }
          );
      } else if (N !== "@id" && N !== "@vocab") {
        if (N = S(
          l,
          N,
          { vocab: !0, base: !1 },
          i,
          m,
          $
        ), !r(N))
          throw new t(
            "Invalid JSON-LD syntax; an @context @type value must be an absolute IRI.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: i }
          );
        if (N.indexOf("_:") === 0)
          throw new t(
            "Invalid JSON-LD syntax; an @context @type value must be an IRI, not a blank node identifier.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: i }
          );
      }
      C["@type"] = N;
    }
    if ("@container" in j) {
      const N = p(j["@container"]) ? [j["@container"]] : j["@container"] || [], H = ["@list", "@set", "@index", "@language"];
      let F = !0;
      const G = N.includes("@set");
      if (v.processingMode(l, 1.1)) {
        if (H.push("@graph", "@id", "@type"), N.includes("@list")) {
          if (N.length !== 1)
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @list must have no other values",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: i }
            );
        } else if (N.includes("@graph")) {
          if (N.some((A) => A !== "@graph" && A !== "@id" && A !== "@index" && A !== "@set"))
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: i }
            );
        } else
          F &= N.length <= (G ? 2 : 1);
        if (N.includes("@type") && (C["@type"] = C["@type"] || "@id", !["@id", "@vocab"].includes(C["@type"])))
          throw new t(
            "Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: i }
          );
      } else
        F &= !s(j["@container"]), F &= N.length <= 1;
      if (F &= N.every((A) => H.includes(A)), F &= !(G && N.includes("@list")), !F)
        throw new t(
          "Invalid JSON-LD syntax; @context @container value must be one of the following: " + H.join(", "),
          "jsonld.SyntaxError",
          { code: "invalid container mapping", context: i }
        );
      if (C.reverse && !N.every((A) => ["@index", "@set"].includes(A)))
        throw new t(
          "Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: i }
        );
      C["@container"] = N;
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
      let N = j["@language"];
      if (N !== null && !p(N))
        throw new t(
          "Invalid JSON-LD syntax; @context @language value must be a string or null.",
          "jsonld.SyntaxError",
          { code: "invalid language mapping", context: i }
        );
      N !== null && (N = N.toLowerCase()), C["@language"] = N;
    }
    if ("@prefix" in j) {
      if (c.match(/:|\//))
        throw new t(
          "Invalid JSON-LD syntax; @context @prefix used on a compact IRI term",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: i }
        );
      if (v.isKeyword(C["@id"]))
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
      const N = j["@direction"];
      if (N !== null && N !== "ltr" && N !== "rtl")
        throw new t(
          'Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".',
          "jsonld.SyntaxError",
          { code: "invalid base direction", context: i }
        );
      C["@direction"] = N;
    }
    if ("@nest" in j) {
      const N = j["@nest"];
      if (!p(N) || N !== "@nest" && N.indexOf("@") === 0)
        throw new t(
          "Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.",
          "jsonld.SyntaxError",
          { code: "invalid @nest value", context: i }
        );
      C["@nest"] = N;
    }
    // disallow aliasing @context and @preserve
    const J = C["@id"];
    if (J === "@context" || J === "@preserve")
      throw new t(
        "Invalid JSON-LD syntax; @context and @preserve cannot be aliased.",
        "jsonld.SyntaxError",
        { code: "invalid keyword alias", context: i }
      );
    if (q && q.protected && !x && (l.protected[c] = !0, C.protected = !0, !h(q, C)))
      throw new t(
        "Invalid JSON-LD syntax; tried to redefine a protected term.",
        "jsonld.SyntaxError",
        { code: "protected term redefinition", context: i, term: c }
      );
  }, v.expandIri = (l, i, c, m) => S(
    l,
    i,
    c,
    void 0,
    void 0,
    m
  );
  function S(l, i, c, m, $, x) {
    if (i === null || !p(i) || v.isKeyword(i))
      return i;
    if (i.match(w))
      return null;
    if (m && m.hasOwnProperty(i) && $.get(i) !== !0 && v.createTermDefinition({
      activeCtx: l,
      localCtx: m,
      term: i,
      defined: $,
      options: x
    }), c = c || {}, c.vocab) {
      const q = l.mappings.get(i);
      if (q === null)
        return null;
      if (o(q) && "@id" in q)
        return q["@id"];
    }
    const j = i.indexOf(":");
    if (j > 0) {
      const q = i.substr(0, j), k = i.substr(j + 1);
      if (q === "_" || k.indexOf("//") === 0)
        return i;
      m && m.hasOwnProperty(q) && v.createTermDefinition({
        activeCtx: l,
        localCtx: m,
        term: q,
        defined: $,
        options: x
      });
      const C = l.mappings.get(q);
      if (C && C._prefix)
        return C["@id"] + k;
      if (r(i))
        return i;
    }
    if (c.vocab && "@vocab" in l)
      i = l["@vocab"] + i;
    else if (c.base) {
      let q, k;
      "@base" in l ? l["@base"] ? (k = d(x.base, l["@base"]), q = d(k, i)) : (k = l["@base"], q = i) : (k = x.base, q = d(x.base, i)), i = q;
    }
    return i;
  }
  v.getInitialContext = (l) => {
    const i = JSON.stringify({ processingMode: l.processingMode }), c = b.get(i);
    if (c)
      return c;
    const m = {
      processingMode: l.processingMode,
      mappings: /* @__PURE__ */ new Map(),
      inverse: null,
      getInverse: $,
      clone: q,
      revertToPreviousContext: k,
      protected: {}
    };
    return b.size === _ && b.clear(), b.set(i, m), m;
    function $() {
      const C = this;
      if (C.inverse)
        return C.inverse;
      const T = C.inverse = {}, O = C.fastCurieMap = {}, J = {}, N = (C["@language"] || "@none").toLowerCase(), H = C["@direction"], F = C.mappings, G = [...F.keys()].sort(f);
      for (const A of G) {
        const P = F.get(A);
        if (P === null)
          continue;
        let U = P["@container"] || "@none";
        if (U = [].concat(U).sort().join(""), P["@id"] === null)
          continue;
        const D = u(P["@id"]);
        for (const E of D) {
          let I = T[E];
          const R = v.isKeyword(E);
          if (I)
            !R && !P._termHasColon && J[E].push(A);
          else if (T[E] = I = {}, !R && !P._termHasColon) {
            J[E] = [A];
            const M = { iri: E, terms: J[E] };
            E[0] in O ? O[E[0]].push(M) : O[E[0]] = [M];
          }
          if (I[U] || (I[U] = {
            "@language": {},
            "@type": {},
            "@any": {}
          }), I = I[U], j(A, I["@any"], "@none"), P.reverse)
            j(A, I["@type"], "@reverse");
          else if (P["@type"] === "@none")
            j(A, I["@any"], "@none"), j(A, I["@language"], "@none"), j(A, I["@type"], "@none");
          else if ("@type" in P)
            j(A, I["@type"], P["@type"]);
          else if ("@language" in P && "@direction" in P) {
            const M = P["@language"], B = P["@direction"];
            M && B ? j(
              A,
              I["@language"],
              `${M}_${B}`.toLowerCase()
            ) : M ? j(A, I["@language"], M.toLowerCase()) : B ? j(A, I["@language"], `_${B}`) : j(A, I["@language"], "@null");
          } else "@language" in P ? j(
            A,
            I["@language"],
            (P["@language"] || "@null").toLowerCase()
          ) : "@direction" in P ? P["@direction"] ? j(
            A,
            I["@language"],
            `_${P["@direction"]}`
          ) : j(A, I["@language"], "@none") : H ? (j(A, I["@language"], `_${H}`), j(A, I["@language"], "@none"), j(A, I["@type"], "@none")) : (j(A, I["@language"], N), j(A, I["@language"], "@none"), j(A, I["@type"], "@none"));
        }
      }
      for (const A in O)
        x(O, A, 1);
      return T;
    }
    function x(C, T, O) {
      const J = C[T], N = C[T] = {};
      let H, F;
      for (const G of J)
        H = G.iri, O >= H.length ? F = "" : F = H[O], F in N ? N[F].push(G) : N[F] = [G];
      for (const G in N)
        G !== "" && x(N, G, O + 1);
    }
    function j(C, T, O) {
      T.hasOwnProperty(O) || (T[O] = C);
    }
    function q() {
      const C = {};
      return C.mappings = e.clone(this.mappings), C.clone = this.clone, C.inverse = null, C.getInverse = this.getInverse, C.protected = e.clone(this.protected), this.previousContext && (C.previousContext = this.previousContext.clone()), C.revertToPreviousContext = this.revertToPreviousContext, "@base" in this && (C["@base"] = this["@base"]), "@language" in this && (C["@language"] = this["@language"]), "@vocab" in this && (C["@vocab"] = this["@vocab"]), C;
    }
    function k() {
      return this.previousContext ? this.previousContext.clone() : this;
    }
  }, v.getContextValue = (l, i, c) => {
    if (i === null)
      return c === "@context" ? void 0 : null;
    if (l.mappings.has(i)) {
      const m = l.mappings.get(i);
      if (n(c))
        return m;
      if (m.hasOwnProperty(c))
        return m[c];
    }
    if (c === "@language" && c in l || c === "@direction" && c in l)
      return l[c];
    if (c !== "@context")
      return null;
  }, v.processingMode = (l, i) => i.toString() >= "1.1" ? !l.processingMode || l.processingMode >= "json-ld-" + i.toString() : l.processingMode === "json-ld-1.0", v.isKeyword = (l) => {
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
  function h(l, i) {
    if (!(l && typeof l == "object") || !(i && typeof i == "object"))
      return l === i;
    const c = Array.isArray(l);
    if (c !== Array.isArray(i))
      return !1;
    if (c) {
      if (l.length !== i.length)
        return !1;
      for (let x = 0; x < l.length; ++x)
        if (!h(l[x], i[x]))
          return !1;
      return !0;
    }
    const m = Object.keys(l), $ = Object.keys(i);
    if (m.length !== $.length)
      return !1;
    for (const x in l) {
      let j = l[x], q = i[x];
      if (x === "@container" && Array.isArray(j) && Array.isArray(q) && (j = j.slice().sort(), q = q.slice().sort()), !h(j, q))
        return !1;
    }
    return !0;
  }
  return Vr;
}
var zr, za;
function Dl() {
  if (za) return zr;
  za = 1;
  const e = Se(), {
    isArray: t,
    isObject: s,
    isEmptyObject: o,
    isString: p,
    isUndefined: n
  } = ye(), {
    isList: r,
    isValue: a,
    isGraph: d,
    isSubject: y
  } = Ce(), {
    expandIri: g,
    getContextValue: w,
    isKeyword: u,
    process: f,
    processingMode: b
  } = Xe(), {
    isAbsolute: _
  } = Be(), {
    REGEX_BCP47: v,
    REGEX_KEYWORD: S,
    addValue: h,
    asArray: l,
    getValues: i,
    validateTypeValue: c
  } = _e(), {
    handleEvent: m
  } = Et(), $ = {};
  zr = $, $.expand = async ({
    activeCtx: T,
    activeProperty: O = null,
    element: J,
    options: N = {},
    insideList: H = !1,
    insideIndex: F = !1,
    typeScopedContext: G = null
  }) => {
    if (J == null)
      return null;
    if (O === "@default" && (N = Object.assign({}, N, { isFrame: !1 })), !t(J) && !s(J))
      return !H && (O === null || g(
        T,
        O,
        { vocab: !0 },
        N
      ) === "@graph") ? (N.eventHandler && m({
        event: {
          type: ["JsonLdEvent"],
          code: "free-floating scalar",
          level: "warning",
          message: "Dropping free-floating scalar not in a list.",
          details: {
            value: J
            //activeProperty
            //insideList
          }
        },
        options: N
      }), null) : q({ activeCtx: T, activeProperty: O, value: J, options: N });
    if (t(J)) {
      let M = [];
      const B = w(
        T,
        O,
        "@container"
      ) || [];
      H = H || B.includes("@list");
      for (let Q = 0; Q < J.length; ++Q) {
        let K = await $.expand({
          activeCtx: T,
          activeProperty: O,
          element: J[Q],
          options: N,
          insideIndex: F,
          typeScopedContext: G
        });
        H && t(K) && (K = { "@list": K }), K !== null && (t(K) ? M = M.concat(K) : M.push(K));
      }
      return M;
    }
    const A = g(
      T,
      O,
      { vocab: !0 },
      N
    ), P = w(T, O, "@context");
    G = G || (T.previousContext ? T : null);
    let U = Object.keys(J).sort(), D = !F;
    if (D && G && U.length <= 2 && !U.includes("@context"))
      for (const M of U) {
        const B = g(
          G,
          M,
          { vocab: !0 },
          N
        );
        if (B === "@value") {
          D = !1, T = G;
          break;
        }
        if (B === "@id" && U.length === 1) {
          D = !1;
          break;
        }
      }
    D && (T = T.revertToPreviousContext()), n(P) || (T = await f({
      activeCtx: T,
      localCtx: P,
      propagate: !0,
      overrideProtected: !0,
      options: N
    })), "@context" in J && (T = await f(
      { activeCtx: T, localCtx: J["@context"], options: N }
    )), G = T;
    let E = null;
    for (const M of U)
      if (g(T, M, { vocab: !0 }, N) === "@type") {
        E = E || M;
        const Q = J[M], K = Array.isArray(Q) ? Q.length > 1 ? Q.slice().sort() : Q : [Q];
        for (const L of K) {
          const V = w(G, L, "@context");
          n(V) || (T = await f({
            activeCtx: T,
            localCtx: V,
            options: N,
            propagate: !1
          }));
        }
      }
    let I = {};
    await j({
      activeCtx: T,
      activeProperty: O,
      expandedActiveProperty: A,
      element: J,
      expandedParent: I,
      options: N,
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
      const B = I["@value"] === null ? [] : l(I["@value"]), Q = i(I, "@type");
      if (!(b(T, 1.1) && Q.includes("@json") && Q.length === 1)) if (B.length === 0)
        N.eventHandler && m({
          event: {
            type: ["JsonLdEvent"],
            code: "null @value value",
            level: "warning",
            message: "Dropping null @value value.",
            details: {
              value: I
            }
          },
          options: N
        }), I = null;
      else {
        if (!B.every((K) => p(K) || o(K)) && "@language" in I)
          throw new e(
            "Invalid JSON-LD syntax; only strings may be language-tagged.",
            "jsonld.SyntaxError",
            { code: "invalid language-tagged value", element: I }
          );
        if (!Q.every((K) => _(K) && !(p(K) && K.indexOf("_:") === 0) || o(K)))
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
    } else R === 1 && "@language" in I && (N.eventHandler && m({
      event: {
        type: ["JsonLdEvent"],
        code: "object with only @language",
        level: "warning",
        message: "Dropping object with only @language.",
        details: {
          value: I
        }
      },
      options: N
    }), I = null);
    return s(I) && !N.keepFreeFloatingNodes && !H && (O === null || A === "@graph" || (w(T, O, "@container") || []).includes("@graph")) && (I = x({ value: I, count: R, options: N })), I;
  };
  function x({
    value: T,
    count: O,
    options: J
  }) {
    if (O === 0 || "@value" in T || "@list" in T || O === 1 && "@id" in T) {
      if (J.eventHandler) {
        let N, H;
        O === 0 ? (N = "empty object", H = "Dropping empty object.") : "@value" in T ? (N = "object with only @value", H = "Dropping object with only @value.") : "@list" in T ? (N = "object with only @list", H = "Dropping object with only @list.") : O === 1 && "@id" in T && (N = "object with only @id", H = "Dropping object with only @id."), m({
          event: {
            type: ["JsonLdEvent"],
            code: N,
            level: "warning",
            message: H,
            details: {
              value: T
            }
          },
          options: J
        });
      }
      return null;
    }
    return T;
  }
  async function j({
    activeCtx: T,
    activeProperty: O,
    expandedActiveProperty: J,
    element: N,
    expandedParent: H,
    options: F = {},
    insideList: G,
    typeKey: A,
    typeScopedContext: P
  }) {
    const U = Object.keys(N).sort(), D = [];
    let E;
    const I = N[A] && g(
      T,
      t(N[A]) ? N[A][0] : N[A],
      { vocab: !0 },
      {
        ...F,
        typeExpansion: !0
      }
    ) === "@json";
    for (const R of U) {
      let M = N[R], B;
      if (R === "@context")
        continue;
      const Q = g(T, R, { vocab: !0 }, F);
      if (Q === null || !(_(Q) || u(Q))) {
        F.eventHandler && m({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid property",
            level: "warning",
            message: "Dropping property that did not expand into an absolute IRI or keyword.",
            details: {
              property: R,
              expandedProperty: Q
            }
          },
          options: F
        });
        continue;
      }
      if (u(Q)) {
        if (J === "@reverse")
          throw new e(
            "Invalid JSON-LD syntax; a keyword cannot be used as a @reverse property.",
            "jsonld.SyntaxError",
            { code: "invalid reverse property map", value: M }
          );
        if (Q in H && Q !== "@included" && Q !== "@type")
          throw new e(
            "Invalid JSON-LD syntax; colliding keywords detected.",
            "jsonld.SyntaxError",
            { code: "colliding keywords", keyword: Q }
          );
      }
      if (Q === "@id") {
        if (!p(M)) {
          if (!F.isFrame)
            throw new e(
              'Invalid JSON-LD syntax; "@id" value must a string.',
              "jsonld.SyntaxError",
              { code: "invalid @id value", value: M }
            );
          if (s(M)) {
            if (!o(M))
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
        h(
          H,
          "@id",
          l(M).map((z) => {
            if (p(z)) {
              const Z = g(T, z, { base: !0 }, F);
              return F.eventHandler && (Z === null ? m(z === null ? {
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
              }) : _(Z) || m({
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
      if (Q === "@type") {
        s(M) && (M = Object.fromEntries(Object.entries(M).map(([z, Z]) => [
          g(P, z, { vocab: !0 }),
          l(Z).map(
            (X) => g(
              P,
              X,
              { base: !0, vocab: !0 },
              { ...F, typeExpansion: !0 }
            )
          )
        ]))), c(M, F.isFrame), h(
          H,
          "@type",
          l(M).map((z) => {
            if (p(z)) {
              const Z = g(
                P,
                z,
                { base: !0, vocab: !0 },
                { ...F, typeExpansion: !0 }
              );
              return Z !== "@json" && !_(Z) && F.eventHandler && m({
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
      if (Q === "@included" && b(T, 1.1)) {
        const z = l(await $.expand({
          activeCtx: T,
          activeProperty: O,
          element: M,
          options: F
        }));
        if (!z.every((Z) => y(Z)))
          throw new e(
            "Invalid JSON-LD syntax; values of @included must expand to node objects.",
            "jsonld.SyntaxError",
            { code: "invalid @included value", value: M }
          );
        h(
          H,
          "@included",
          z,
          { propertyIsArray: !0 }
        );
        continue;
      }
      if (Q === "@graph" && !(s(M) || t(M)))
        throw new e(
          'Invalid JSON-LD syntax; "@graph" value must not be an object or an array.',
          "jsonld.SyntaxError",
          { code: "invalid @graph value", value: M }
        );
      if (Q === "@value") {
        E = M, I && b(T, 1.1) ? H["@value"] = M : h(
          H,
          "@value",
          M,
          { propertyIsArray: F.isFrame }
        );
        continue;
      }
      if (Q === "@language") {
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
          p(z) && !z.match(v) && F.eventHandler && m({
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
        h(
          H,
          "@language",
          M,
          { propertyIsArray: F.isFrame }
        );
        continue;
      }
      if (Q === "@direction") {
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
        h(
          H,
          "@direction",
          M,
          { propertyIsArray: F.isFrame }
        );
        continue;
      }
      if (Q === "@index") {
        if (!p(M))
          throw new e(
            'Invalid JSON-LD syntax; "@index" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid @index value", value: M }
          );
        h(H, "@index", M);
        continue;
      }
      if (Q === "@reverse") {
        if (!s(M))
          throw new e(
            'Invalid JSON-LD syntax; "@reverse" value must be an object.',
            "jsonld.SyntaxError",
            { code: "invalid @reverse value", value: M }
          );
        if (B = await $.expand({
          activeCtx: T,
          activeProperty: "@reverse",
          element: M,
          options: F
        }), "@reverse" in B)
          for (const Z in B["@reverse"])
            h(
              H,
              Z,
              B["@reverse"][Z],
              { propertyIsArray: !0 }
            );
        let z = H["@reverse"] || null;
        for (const Z in B) {
          if (Z === "@reverse")
            continue;
          z === null && (z = H["@reverse"] = {}), h(z, Z, [], { propertyIsArray: !0 });
          const X = B[Z];
          for (let Y = 0; Y < X.length; ++Y) {
            const re = X[Y];
            if (a(re) || r(re))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: B }
              );
            h(z, Z, re, { propertyIsArray: !0 });
          }
        }
        continue;
      }
      if (Q === "@nest") {
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
      if (V.includes("@language") && s(M)) {
        const z = w(K, R, "@direction");
        B = k(K, M, z, F);
      } else if (V.includes("@index") && s(M)) {
        const z = V.includes("@graph"), Z = w(K, R, "@index") || "@index", X = Z !== "@index" && g(T, Z, { vocab: !0 }, F);
        B = await C({
          activeCtx: K,
          options: F,
          activeProperty: R,
          value: M,
          asGraph: z,
          indexKey: Z,
          propertyIndex: X
        });
      } else if (V.includes("@id") && s(M)) {
        const z = V.includes("@graph");
        B = await C({
          activeCtx: K,
          options: F,
          activeProperty: R,
          value: M,
          asGraph: z,
          indexKey: "@id"
        });
      } else if (V.includes("@type") && s(M))
        B = await C({
          // since container is `@type`, revert type scoped context when expanding
          activeCtx: K.revertToPreviousContext(),
          options: F,
          activeProperty: R,
          value: M,
          asGraph: !1,
          indexKey: "@type"
        });
      else {
        const z = Q === "@list";
        if (z || Q === "@set") {
          let Z = O;
          z && J === "@graph" && (Z = null), B = await $.expand({
            activeCtx: K,
            activeProperty: Z,
            element: M,
            options: F,
            insideList: z
          });
        } else w(T, R, "@type") === "@json" ? B = {
          "@type": "@json",
          "@value": M
        } : B = await $.expand({
          activeCtx: K,
          activeProperty: R,
          element: M,
          options: F,
          insideList: !1
        });
      }
      if (!(B === null && Q !== "@value")) {
        if (Q !== "@list" && !r(B) && V.includes("@list") && (B = { "@list": l(B) }), V.includes("@graph") && !V.some((z) => z === "@id" || z === "@index")) {
          if (B = l(B), F.isFrame || (B = B.filter((z) => {
            const Z = Object.keys(z).length;
            return x({ value: z, count: Z, options: F }) !== null;
          })), B.length === 0)
            continue;
          B = B.map((z) => ({ "@graph": l(z) }));
        }
        if (K.mappings.has(R) && K.mappings.get(R).reverse) {
          const z = H["@reverse"] = H["@reverse"] || {};
          B = l(B);
          for (let Z = 0; Z < B.length; ++Z) {
            const X = B[Z];
            if (a(X) || r(X))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: B }
              );
            h(z, Q, X, { propertyIsArray: !0 });
          }
          continue;
        }
        h(H, Q, B, {
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
      const M = t(N[R]) ? N[R] : [N[R]];
      for (const B of M) {
        if (!s(B) || Object.keys(B).some((Q) => g(T, Q, { vocab: !0 }, F) === "@value"))
          throw new e(
            "Invalid JSON-LD syntax; nested value must be a node object.",
            "jsonld.SyntaxError",
            { code: "invalid @nest value", value: B }
          );
        await j({
          activeCtx: T,
          activeProperty: O,
          expandedActiveProperty: J,
          element: B,
          expandedParent: H,
          options: F,
          insideList: G,
          typeScopedContext: P,
          typeKey: A
        });
      }
    }
  }
  function q({ activeCtx: T, activeProperty: O, value: J, options: N }) {
    if (J == null)
      return null;
    const H = g(
      T,
      O,
      { vocab: !0 },
      N
    );
    if (H === "@id")
      return g(T, J, { base: !0 }, N);
    if (H === "@type")
      return g(
        T,
        J,
        { vocab: !0, base: !0 },
        { ...N, typeExpansion: !0 }
      );
    const F = w(T, O, "@type");
    if ((F === "@id" || H === "@graph") && p(J)) {
      const A = g(T, J, { base: !0 }, N);
      return A === null && J.match(S) && N.eventHandler && m({
        event: {
          type: ["JsonLdEvent"],
          code: "reserved @id value",
          level: "warning",
          message: "Reserved @id found.",
          details: {
            id: O
          }
        },
        options: N
      }), { "@id": A };
    }
    if (F === "@vocab" && p(J))
      return {
        "@id": g(T, J, { vocab: !0, base: !0 }, N)
      };
    if (u(H))
      return J;
    const G = {};
    if (F && !["@id", "@vocab", "@none"].includes(F))
      G["@type"] = F;
    else if (p(J)) {
      const A = w(T, O, "@language");
      A !== null && (G["@language"] = A);
      const P = w(T, O, "@direction");
      P !== null && (G["@direction"] = P);
    }
    return ["boolean", "number", "string"].includes(typeof J) || (J = J.toString()), G["@value"] = J, G;
  }
  function k(T, O, J, N) {
    const H = [], F = Object.keys(O).sort();
    for (const G of F) {
      const A = g(T, G, { vocab: !0 }, N);
      let P = O[G];
      t(P) || (P = [P]);
      for (const U of P) {
        if (U === null)
          continue;
        if (!p(U))
          throw new e(
            "Invalid JSON-LD syntax; language map values must be strings.",
            "jsonld.SyntaxError",
            { code: "invalid language map value", languageMap: O }
          );
        const D = { "@value": U };
        A !== "@none" && (G.match(v) || N.eventHandler && m({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: G
            }
          },
          options: N
        }), D["@language"] = G.toLowerCase()), J && (D["@direction"] = J), H.push(D);
      }
    }
    return H;
  }
  async function C({
    activeCtx: T,
    options: O,
    activeProperty: J,
    value: N,
    asGraph: H,
    indexKey: F,
    propertyIndex: G
  }) {
    const A = [], P = Object.keys(N).sort(), U = F === "@type";
    for (let D of P) {
      if (U) {
        const R = w(T, D, "@context");
        n(R) || (T = await f({
          activeCtx: T,
          localCtx: R,
          propagate: !1,
          options: O
        }));
      }
      let E = N[D];
      t(E) || (E = [E]), E = await $.expand({
        activeCtx: T,
        activeProperty: J,
        element: E,
        options: O,
        insideList: !1,
        insideIndex: !0
      });
      let I;
      G ? D === "@none" ? I = "@none" : I = q(
        { activeCtx: T, activeProperty: F, value: D, options: O }
      ) : I = g(T, D, { vocab: !0 }, O), F === "@id" ? D = g(T, D, { base: !0 }, O) : U && (D = I);
      for (let R of E) {
        if (H && !d(R) && (R = { "@graph": [R] }), F === "@type")
          I === "@none" || (R["@type"] ? R["@type"] = [D].concat(R["@type"]) : R["@type"] = [D]);
        else {
          if (a(R) && !["@language", "@type", "@index"].includes(F))
            throw new e(
              `Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${F}".`,
              "jsonld.SyntaxError",
              { code: "invalid value object", value: R }
            );
          G ? I !== "@none" && h(R, G, I, {
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
  const { isKeyword: e } = Xe(), t = Ce(), s = ye(), o = _e(), p = Se(), n = {};
  return Fr = n, n.createMergedNodeMap = (r, a) => {
    a = a || {};
    const d = a.issuer || new o.IdentifierIssuer("_:b"), y = { "@default": {} };
    return n.createNodeMap(r, y, "@default", d), n.mergeNodeMaps(y);
  }, n.createNodeMap = (r, a, d, y, g, w) => {
    if (s.isArray(r)) {
      for (const _ of r)
        n.createNodeMap(_, a, d, y, void 0, w);
      return;
    }
    if (!s.isObject(r)) {
      w && w.push(r);
      return;
    }
    if (t.isValue(r)) {
      if ("@type" in r) {
        let _ = r["@type"];
        _.indexOf("_:") === 0 && (r["@type"] = _ = y.getId(_));
      }
      w && w.push(r);
      return;
    } else if (w && t.isList(r)) {
      const _ = [];
      n.createNodeMap(r["@list"], a, d, y, g, _), w.push({ "@list": _ });
      return;
    }
    if ("@type" in r) {
      const _ = r["@type"];
      for (const v of _)
        v.indexOf("_:") === 0 && y.getId(v);
    }
    s.isUndefined(g) && (g = t.isBlankNode(r) ? y.getId(r["@id"]) : r["@id"]), w && w.push({ "@id": g });
    const u = a[d], f = u[g] = u[g] || {};
    f["@id"] = g;
    const b = Object.keys(r).sort();
    for (let _ of b) {
      if (_ === "@id")
        continue;
      if (_ === "@reverse") {
        const S = { "@id": g }, h = r["@reverse"];
        for (const l in h) {
          const i = h[l];
          for (const c of i) {
            let m = c["@id"];
            t.isBlankNode(c) && (m = y.getId(m)), n.createNodeMap(c, a, d, y, m), o.addValue(
              u[m],
              l,
              S,
              { propertyIsArray: !0, allowDuplicate: !1 }
            );
          }
        }
        continue;
      }
      if (_ === "@graph") {
        g in a || (a[g] = {}), n.createNodeMap(r[_], a, g, y);
        continue;
      }
      if (_ === "@included") {
        n.createNodeMap(r[_], a, d, y);
        continue;
      }
      if (_ !== "@type" && e(_)) {
        if (_ === "@index" && _ in f && (r[_] !== f[_] || r[_]["@id"] !== f[_]["@id"]))
          throw new p(
            "Invalid JSON-LD syntax; conflicting @index property detected.",
            "jsonld.SyntaxError",
            { code: "conflicting indexes", subject: f }
          );
        f[_] = r[_];
        continue;
      }
      const v = r[_];
      if (_.indexOf("_:") === 0 && (_ = y.getId(_)), v.length === 0) {
        o.addValue(f, _, [], { propertyIsArray: !0 });
        continue;
      }
      for (let S of v)
        if (_ === "@type" && (S = S.indexOf("_:") === 0 ? y.getId(S) : S), t.isSubject(S) || t.isSubjectReference(S)) {
          if ("@id" in S && !S["@id"])
            continue;
          const h = t.isBlankNode(S) ? y.getId(S["@id"]) : S["@id"];
          o.addValue(
            f,
            _,
            { "@id": h },
            { propertyIsArray: !0, allowDuplicate: !1 }
          ), n.createNodeMap(S, a, d, y, h);
        } else if (t.isValue(S))
          o.addValue(
            f,
            _,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        else if (t.isList(S)) {
          const h = [];
          n.createNodeMap(S["@list"], a, d, y, g, h), S = { "@list": h }, o.addValue(
            f,
            _,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        } else
          n.createNodeMap(S, a, d, y, g), o.addValue(
            f,
            _,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
    }
  }, n.mergeNodeMapGraphs = (r) => {
    const a = {};
    for (const d of Object.keys(r).sort())
      for (const y of Object.keys(r[d]).sort()) {
        const g = r[d][y];
        y in a || (a[y] = { "@id": y });
        const w = a[y];
        for (const u of Object.keys(g).sort())
          if (e(u) && u !== "@type")
            w[u] = o.clone(g[u]);
          else
            for (const f of g[u])
              o.addValue(
                w,
                u,
                o.clone(f),
                { propertyIsArray: !0, allowDuplicate: !1 }
              );
      }
    return a;
  }, n.mergeNodeMaps = (r) => {
    const a = r["@default"], d = Object.keys(r).sort();
    for (const y of d) {
      if (y === "@default")
        continue;
      const g = r[y];
      let w = a[y];
      w ? "@graph" in w || (w["@graph"] = []) : a[y] = w = {
        "@id": y,
        "@graph": []
      };
      const u = w["@graph"];
      for (const f of Object.keys(g).sort()) {
        const b = g[f];
        t.isSubjectReference(b) || u.push(b);
      }
    }
    return a;
  }, Fr;
}
var Hr, Ha;
function Ml() {
  if (Ha) return Hr;
  Ha = 1;
  const {
    isSubjectReference: e
  } = Ce(), {
    createMergedNodeMap: t
  } = Gn(), s = {};
  return Hr = s, s.flatten = (o) => {
    const p = t(o), n = [], r = Object.keys(p).sort();
    for (let a = 0; a < r.length; ++a) {
      const d = p[r[a]];
      e(d) || n.push(d);
    }
    return n;
  }, Hr;
}
var Br, Ba;
function Ll() {
  if (Ba) return Br;
  Ba = 1;
  const e = Se(), t = Ce(), s = ye(), {
    REGEX_BCP47: o,
    addValue: p
  } = _e(), {
    handleEvent: n
  } = Et(), {
    // RDF,
    RDF_LIST: r,
    RDF_FIRST: a,
    RDF_REST: d,
    RDF_NIL: y,
    RDF_TYPE: g,
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
  } = vs(), v = {};
  Br = v, v.fromRDF = async (h, l) => {
    const {
      useRdfType: i = !1,
      useNativeTypes: c = !1,
      rdfDirection: m = null
    } = l, $ = {}, x = { "@default": $ }, j = {};
    if (m) {
      if (m === "compound-literal")
        throw new e(
          "Unsupported rdfDirection value.",
          "jsonld.InvalidRdfDirection",
          { value: m }
        );
      if (m !== "i18n-datatype")
        throw new e(
          "Unknown rdfDirection value.",
          "jsonld.InvalidRdfDirection",
          { value: m }
        );
    }
    for (const C of h) {
      const T = C.graph.termType === "DefaultGraph" ? "@default" : C.graph.value;
      T in x || (x[T] = {}), T !== "@default" && !(T in $) && ($[T] = { "@id": T });
      const O = x[T], J = C.subject.value, N = C.predicate.value, H = C.object;
      J in O || (O[J] = { "@id": J });
      const F = O[J], G = H.termType.endsWith("Node");
      if (G && !(H.value in O) && (O[H.value] = { "@id": H.value }), N === g && !i && G) {
        p(F, "@type", H.value, { propertyIsArray: !0 });
        continue;
      }
      const A = S(H, c, m, l);
      if (p(F, N, A, { propertyIsArray: !0 }), G)
        if (H.value === y) {
          const P = O[H.value];
          "usages" in P || (P.usages = []), P.usages.push({
            node: F,
            property: N,
            value: A
          });
        } else H.value in j ? j[H.value] = !1 : j[H.value] = {
          node: F,
          property: N,
          value: A
        };
    }
    for (const C in x) {
      const T = x[C];
      if (!(y in T))
        continue;
      const O = T[y];
      if (O.usages) {
        for (let J of O.usages) {
          let N = J.node, H = J.property, F = J.value;
          const G = [], A = [];
          let P = Object.keys(N).length;
          for (; H === d && s.isObject(j[N["@id"]]) && s.isArray(N[a]) && N[a].length === 1 && s.isArray(N[d]) && N[d].length === 1 && (P === 3 || P === 4 && s.isArray(N["@type"]) && N["@type"].length === 1 && N["@type"][0] === r) && (G.push(N[a][0]), A.push(N["@id"]), J = j[N["@id"]], N = J.node, H = J.property, F = J.value, P = Object.keys(N).length, !!t.isBlankNode(N)); )
            ;
          delete F["@id"], F["@list"] = G.reverse();
          for (const U of A)
            delete T[U];
        }
        delete O.usages;
      }
    }
    const q = [], k = Object.keys($).sort();
    for (const C of k) {
      const T = $[C];
      if (C in x) {
        const O = T["@graph"] = [], J = x[C], N = Object.keys(J).sort();
        for (const H of N) {
          const F = J[H];
          t.isSubjectReference(F) || O.push(F);
        }
      }
      t.isSubjectReference(T) || q.push(T);
    }
    return q;
  };
  function S(h, l, i, c) {
    if (h.termType.endsWith("Node"))
      return { "@id": h.value };
    const m = { "@value": h.value };
    if (h.language)
      h.language.match(o) || c.eventHandler && n({
        event: {
          type: ["JsonLdEvent"],
          code: "invalid @language value",
          level: "warning",
          message: "@language value must be valid BCP47.",
          details: {
            language: h.language
          }
        },
        options: c
      }), m["@language"] = h.language;
    else {
      let $ = h.datatype.value;
      if ($ || ($ = _), $ === w) {
        $ = "@json";
        try {
          m["@value"] = JSON.parse(m["@value"]);
        } catch (x) {
          throw new e(
            "JSON literal could not be parsed.",
            "jsonld.InvalidJsonLiteral",
            { code: "invalid JSON literal", value: m["@value"], cause: x }
          );
        }
      }
      if (l) {
        if ($ === u)
          m["@value"] === "true" ? m["@value"] = !0 : m["@value"] === "false" && (m["@value"] = !1);
        else if (s.isNumeric(m["@value"]))
          if ($ === b) {
            const x = parseInt(m["@value"], 10);
            x.toFixed(0) === m["@value"] && (m["@value"] = x);
          } else $ === f && (m["@value"] = parseFloat(m["@value"]));
        [u, b, f, _].includes($) || (m["@type"] = $);
      } else if (i === "i18n-datatype" && $.startsWith("https://www.w3.org/ns/i18n#")) {
        const [, x, j] = $.split(/[#_]/);
        x.length > 0 && (m["@language"] = x, x.match(o) || c.eventHandler && n({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: x
            }
          },
          options: c
        })), m["@direction"] = j;
      } else $ !== _ && (m["@type"] = $);
    }
    return m;
  }
  return Br;
}
var Jr, Ja;
function Cl() {
  return Ja || (Ja = 1, Jr = function e(t) {
    return t === null || typeof t != "object" || t.toJSON != null ? JSON.stringify(t) : Array.isArray(t) ? "[" + t.reduce((s, o, p) => {
      const n = p === 0 ? "" : ",", r = o === void 0 || typeof o == "symbol" ? null : o;
      return s + n + e(r);
    }, "") + "]" : "{" + Object.keys(t).sort().reduce((s, o, p) => {
      if (t[o] === void 0 || typeof t[o] == "symbol")
        return s;
      const n = s.length === 0 ? "" : ",";
      return s + n + e(o) + ":" + e(t[o]);
    }, "") + "}";
  }), Jr;
}
var Gr, Ga;
function Ul() {
  if (Ga) return Gr;
  Ga = 1;
  const { createNodeMap: e } = Gn(), { isKeyword: t } = Xe(), s = Ce(), o = Cl(), p = Se(), n = ye(), r = _e(), {
    handleEvent: a
  } = Et(), {
    // RDF,
    // RDF_LIST,
    RDF_FIRST: d,
    RDF_REST: y,
    RDF_NIL: g,
    RDF_TYPE: w,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: u,
    // RDF_OBJECT,
    RDF_LANGSTRING: f,
    // XSD,
    XSD_BOOLEAN: b,
    XSD_DOUBLE: _,
    XSD_INTEGER: v,
    XSD_STRING: S
  } = vs(), {
    isAbsolute: h
  } = Be(), l = {};
  Gr = l, l.toRDF = ($, x) => {
    const j = new r.IdentifierIssuer("_:b"), q = { "@default": {} };
    e($, q, "@default", j);
    const k = [], C = Object.keys(q).sort();
    for (const T of C) {
      let O;
      if (T === "@default")
        O = { termType: "DefaultGraph", value: "" };
      else if (h(T))
        T.startsWith("_:") ? O = { termType: "BlankNode" } : O = { termType: "NamedNode" }, O.value = T;
      else {
        x.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "relative graph reference",
            level: "warning",
            message: "Relative graph reference found.",
            details: {
              graph: T
            }
          },
          options: x
        });
        continue;
      }
      i(k, q[T], O, j, x);
    }
    return k;
  };
  function i($, x, j, q, k) {
    const C = Object.keys(x).sort();
    for (const T of C) {
      const O = x[T], J = Object.keys(O).sort();
      for (let N of J) {
        const H = O[N];
        if (N === "@type")
          N = w;
        else if (t(N))
          continue;
        for (const F of H) {
          const G = {
            termType: T.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: T
          };
          if (!h(T)) {
            k.eventHandler && a({
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
            termType: N.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: N
          };
          if (!h(N)) {
            k.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "relative predicate reference",
                level: "warning",
                message: "Relative predicate reference found.",
                details: {
                  predicate: N
                }
              },
              options: k
            });
            continue;
          }
          if (A.termType === "BlankNode" && !k.produceGeneralizedRdf) {
            k.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "blank node predicate",
                level: "warning",
                message: "Dropping blank node predicate.",
                details: {
                  // FIXME: add better issuer API to get reverse mapping
                  property: q.getOldIds().find((U) => q.getId(U) === N)
                }
              },
              options: k
            });
            continue;
          }
          const P = m(
            F,
            q,
            $,
            j,
            k.rdfDirection,
            k
          );
          P && $.push({
            subject: G,
            predicate: A,
            object: P,
            graph: j
          });
        }
      }
    }
  }
  function c($, x, j, q, k, C) {
    const T = { termType: "NamedNode", value: d }, O = { termType: "NamedNode", value: y }, J = { termType: "NamedNode", value: g }, N = $.pop(), H = N ? { termType: "BlankNode", value: x.getId() } : J;
    let F = H;
    for (const G of $) {
      const A = m(
        G,
        x,
        j,
        q,
        k,
        C
      ), P = { termType: "BlankNode", value: x.getId() };
      j.push({
        subject: F,
        predicate: T,
        object: A,
        graph: q
      }), j.push({
        subject: F,
        predicate: O,
        object: P,
        graph: q
      }), F = P;
    }
    if (N) {
      const G = m(
        N,
        x,
        j,
        q,
        k,
        C
      );
      j.push({
        subject: F,
        predicate: T,
        object: G,
        graph: q
      }), j.push({
        subject: F,
        predicate: O,
        object: J,
        graph: q
      });
    }
    return H;
  }
  function m($, x, j, q, k, C) {
    const T = {};
    if (s.isValue($)) {
      T.termType = "Literal", T.value = void 0, T.datatype = {
        termType: "NamedNode"
      };
      let O = $["@value"];
      const J = $["@type"] || null;
      if (J === "@json")
        T.value = o(O), T.datatype.value = u;
      else if (n.isBoolean(O))
        T.value = O.toString(), T.datatype.value = J || b;
      else if (n.isDouble(O) || J === _)
        n.isDouble(O) || (O = parseFloat(O)), T.value = O.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), T.datatype.value = J || _;
      else if (n.isNumber(O))
        T.value = O.toFixed(0), T.datatype.value = J || v;
      else if ("@direction" in $ && k === "i18n-datatype") {
        const N = ($["@language"] || "").toLowerCase(), H = $["@direction"], F = `https://www.w3.org/ns/i18n#${N}_${H}`;
        T.datatype.value = F, T.value = O;
      } else {
        if ("@direction" in $ && k === "compound-literal")
          throw new p(
            "Unsupported rdfDirection value.",
            "jsonld.InvalidRdfDirection",
            { value: k }
          );
        if ("@direction" in $ && k)
          throw new p(
            "Unknown rdfDirection value.",
            "jsonld.InvalidRdfDirection",
            { value: k }
          );
        "@language" in $ ? ("@direction" in $ && !k && C.eventHandler && a({
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
        }), T.value = O, T.datatype.value = J || f, T.language = $["@language"]) : ("@direction" in $ && !k && C.eventHandler && a({
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
        }), T.value = O, T.datatype.value = J || S);
      }
    } else if (s.isList($)) {
      const O = c(
        $["@list"],
        x,
        j,
        q,
        k,
        C
      );
      T.termType = O.termType, T.value = O.value;
    } else {
      const O = n.isObject($) ? $["@id"] : $;
      T.termType = O.startsWith("_:") ? "BlankNode" : "NamedNode", T.value = O;
    }
    return T.termType === "NamedNode" && !h(T.value) ? (C.eventHandler && a({
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
function Vl() {
  if (Ka) return Kr;
  Ka = 1;
  const { isKeyword: e } = Xe(), t = Ce(), s = ye(), o = _e(), p = Be(), n = Se(), {
    createNodeMap: r,
    mergeNodeMapGraphs: a
  } = Gn(), d = {};
  Kr = d, d.frameMergedOrDefault = (i, c, m) => {
    const $ = {
      options: m,
      embedded: !1,
      graph: "@default",
      graphMap: { "@default": {} },
      subjectStack: [],
      link: {},
      bnodeMap: {}
    }, x = new o.IdentifierIssuer("_:b");
    r(i, $.graphMap, "@default", x), m.merged && ($.graphMap["@merged"] = a($.graphMap), $.graph = "@merged"), $.subjects = $.graphMap[$.graph];
    const j = [];
    d.frame($, Object.keys($.subjects).sort(), c, j), m.pruneBlankNodeIdentifiers && (m.bnodesToClear = Object.keys($.bnodeMap).filter((q) => $.bnodeMap[q].length === 1));
    // remove @preserve from results
    return m.link = {}, v(j, m);
  }, d.frame = (i, c, m, $, x = null) => {
    u(m), m = m[0];
    const j = i.options, q = {
      embed: w(m, j, "embed"),
      explicit: w(m, j, "explicit"),
      requireAll: w(m, j, "requireAll")
    };
    i.link.hasOwnProperty(i.graph) || (i.link[i.graph] = {});
    const k = i.link[i.graph], C = f(i, c, m, q), T = Object.keys(C).sort();
    for (const O of T) {
      const J = C[O];
      if (x === null ? i.uniqueEmbeds = { [i.graph]: {} } : i.uniqueEmbeds[i.graph] = i.uniqueEmbeds[i.graph] || {}, q.embed === "@link" && O in k) {
        S($, x, k[O]);
        continue;
      }
      const N = { "@id": O };
      if (O.indexOf("_:") === 0 && o.addValue(i.bnodeMap, O, N, { propertyIsArray: !0 }), k[O] = N, (q.embed === "@first" || q.embed === "@last") && i.is11)
        throw new n(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: m }
        );
      if (!(!i.embedded && i.uniqueEmbeds[i.graph].hasOwnProperty(O))) {
        if (i.embedded && (q.embed === "@never" || g(J, i.graph, i.subjectStack))) {
          S($, x, N);
          continue;
        }
        if (i.embedded && (q.embed == "@first" || q.embed == "@once") && i.uniqueEmbeds[i.graph].hasOwnProperty(O)) {
          S($, x, N);
          continue;
        }
        if (q.embed === "@last" && O in i.uniqueEmbeds[i.graph] && _(i, O), i.uniqueEmbeds[i.graph][O] = { parent: $, property: x }, i.subjectStack.push({ subject: J, graph: i.graph }), O in i.graphMap) {
          let H = !1, F = null;
          "@graph" in m ? (F = m["@graph"][0], H = !(O === "@merged" || O === "@default"), s.isObject(F) || (F = {})) : (H = i.graph !== "@merged", F = {}), H && d.frame(
            { ...i, graph: O, embedded: !1 },
            Object.keys(i.graphMap[O]).sort(),
            [F],
            N,
            "@graph"
          );
        }
        "@included" in m && d.frame(
          { ...i, embedded: !1 },
          c,
          m["@included"],
          N,
          "@included"
        );
        for (const H of Object.keys(J).sort()) {
          if (e(H)) {
            if (N[H] = o.clone(J[H]), H === "@type")
              for (const F of J["@type"])
                F.indexOf("_:") === 0 && o.addValue(
                  i.bnodeMap,
                  F,
                  N,
                  { propertyIsArray: !0 }
                );
            continue;
          }
          if (!(q.explicit && !(H in m)))
            for (const F of J[H]) {
              const G = H in m ? m[H] : y(q);
              if (t.isList(F)) {
                const A = m[H] && m[H][0] && m[H][0]["@list"] ? m[H][0]["@list"] : y(q), P = { "@list": [] };
                S(N, H, P);
                const U = F["@list"];
                for (const D of U)
                  t.isSubjectReference(D) ? d.frame(
                    { ...i, embedded: !0 },
                    [D["@id"]],
                    A,
                    P,
                    "@list"
                  ) : S(P, "@list", o.clone(D));
              } else t.isSubjectReference(F) ? d.frame(
                { ...i, embedded: !0 },
                [F["@id"]],
                G,
                N,
                H
              ) : l(G[0], F) && S(N, H, o.clone(F));
            }
        }
        for (const H of Object.keys(m).sort()) {
          if (H === "@type") {
            if (!s.isObject(m[H][0]) || !("@default" in m[H][0]))
              continue;
          } else if (e(H))
            continue;
          const F = m[H][0] || {};
          if (!w(F, j, "omitDefault") && !(H in N)) {
            let A = "@null";
            "@default" in F && (A = o.clone(F["@default"])), s.isArray(A) || (A = [A]), N[H] = [{ "@preserve": A }];
          }
        }
        for (const H of Object.keys(m["@reverse"] || {}).sort()) {
          const F = m["@reverse"][H];
          for (const G of Object.keys(i.subjects))
            o.getValues(i.subjects[G], H).some((P) => P["@id"] === O) && (N["@reverse"] = N["@reverse"] || {}, o.addValue(
              N["@reverse"],
              H,
              [],
              { propertyIsArray: !0 }
            ), d.frame(
              { ...i, embedded: !0 },
              [G],
              F,
              N["@reverse"][H],
              x
            ));
        }
        S($, x, N), i.subjectStack.pop();
      }
    }
  }, d.cleanupNull = (i, c) => {
    if (s.isArray(i))
      return i.map(($) => d.cleanupNull($, c)).filter(($) => $);
    if (i === "@null")
      return null;
    if (s.isObject(i)) {
      if ("@id" in i) {
        const m = i["@id"];
        if (c.link.hasOwnProperty(m)) {
          const $ = c.link[m].indexOf(i);
          if ($ !== -1)
            return c.link[m][$];
          c.link[m].push(i);
        } else
          c.link[m] = [i];
      }
      for (const m in i)
        i[m] = d.cleanupNull(i[m], c);
    }
    return i;
  };
  function y(i) {
    const c = {};
    for (const m in i)
      i[m] !== void 0 && (c["@" + m] = [i[m]]);
    return [c];
  }
  function g(i, c, m) {
    for (let $ = m.length - 1; $ >= 0; --$) {
      const x = m[$];
      if (x.graph === c && x.subject["@id"] === i["@id"])
        return !0;
    }
    return !1;
  }
  function w(i, c, m) {
    const $ = "@" + m;
    let x = $ in i ? i[$][0] : c[m];
    if (m === "embed") {
      if (x === !0)
        x = "@once";
      else if (x === !1)
        x = "@never";
      else if (x !== "@always" && x !== "@never" && x !== "@link" && x !== "@first" && x !== "@last" && x !== "@once")
        throw new n(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: i }
        );
    }
    return x;
  }
  function u(i) {
    if (!s.isArray(i) || i.length !== 1 || !s.isObject(i[0]))
      throw new n(
        "Invalid JSON-LD syntax; a JSON-LD frame must be a single object.",
        "jsonld.SyntaxError",
        { frame: i }
      );
    if ("@id" in i[0]) {
      for (const c of o.asArray(i[0]["@id"]))
        if (!(s.isObject(c) || p.isAbsolute(c)) || s.isString(c) && c.indexOf("_:") === 0)
          throw new n(
            "Invalid JSON-LD syntax; invalid @id in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: i }
          );
    }
    if ("@type" in i[0]) {
      for (const c of o.asArray(i[0]["@type"]))
        if (!(s.isObject(c) || p.isAbsolute(c) || c === "@json") || s.isString(c) && c.indexOf("_:") === 0)
          throw new n(
            "Invalid JSON-LD syntax; invalid @type in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: i }
          );
    }
  }
  function f(i, c, m, $) {
    const x = {};
    for (const j of c) {
      const q = i.graphMap[i.graph][j];
      b(i, q, m, $) && (x[j] = q);
    }
    return x;
  }
  function b(i, c, m, $) {
    let x = !0, j = !1;
    for (const q in m) {
      let k = !1;
      const C = o.getValues(c, q), T = o.getValues(m, q).length === 0;
      if (q === "@id") {
        if (s.isEmptyObject(m["@id"][0] || {}) ? k = !0 : m["@id"].length >= 0 && (k = m["@id"].includes(C[0])), !$.requireAll)
          return k;
      } else if (q === "@type") {
        if (x = !1, T) {
          if (C.length > 0)
            return !1;
          k = !0;
        } else if (m["@type"].length === 1 && s.isEmptyObject(m["@type"][0]))
          k = C.length > 0;
        else
          for (const O of m["@type"])
            s.isObject(O) && "@default" in O ? k = !0 : k = k || C.some((J) => J === O);
        if (!$.requireAll)
          return k;
      } else {
        if (e(q))
          continue;
        {
          const O = o.getValues(m, q)[0];
          let J = !1;
          if (O && (u([O]), J = "@default" in O), x = !1, C.length === 0 && J)
            continue;
          if (C.length > 0 && T)
            return !1;
          if (O === void 0) {
            if (C.length > 0)
              return !1;
            k = !0;
          } else if (t.isList(O)) {
            const N = O["@list"][0];
            if (t.isList(C[0])) {
              const H = C[0]["@list"];
              t.isValue(N) ? k = H.some((F) => l(N, F)) : (t.isSubject(N) || t.isSubjectReference(N)) && (k = H.some((F) => h(
                i,
                N,
                F,
                $
              )));
            }
          } else t.isValue(O) ? k = C.some((N) => l(O, N)) : t.isSubjectReference(O) ? k = C.some((N) => h(i, O, N, $)) : s.isObject(O) ? k = C.length > 0 : k = !1;
        }
      }
      if (!k && $.requireAll)
        return !1;
      j = j || k;
    }
    return x || j;
  }
  function _(i, c) {
    const m = i.uniqueEmbeds[i.graph], $ = m[c], x = $.parent, j = $.property, q = { "@id": c };
    if (s.isArray(x)) {
      for (let C = 0; C < x.length; ++C)
        if (o.compareValues(x[C], q)) {
          x[C] = q;
          break;
        }
    } else {
      const C = s.isArray(x[j]);
      o.removeValue(x, j, q, { propertyIsArray: C }), o.addValue(x, j, q, { propertyIsArray: C });
    }
    const k = (C) => {
      const T = Object.keys(m);
      for (const O of T)
        O in m && s.isObject(m[O].parent) && m[O].parent["@id"] === C && (delete m[O], k(O));
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
  function v(i, c) {
    if (s.isArray(i))
      return i.map((m) => v(m, c));
    if (s.isObject(i)) {
      // remove @preserve
      if ("@preserve" in i)
        return i["@preserve"][0];
      if (t.isValue(i))
        return i;
      if (t.isList(i))
        return i["@list"] = v(i["@list"], c), i;
      if ("@id" in i) {
        const m = i["@id"];
        if (c.link.hasOwnProperty(m)) {
          const $ = c.link[m].indexOf(i);
          if ($ !== -1)
            return c.link[m][$];
          c.link[m].push(i);
        } else
          c.link[m] = [i];
      }
      for (const m in i) {
        if (m === "@id" && c.bnodesToClear.includes(i[m])) {
          delete i["@id"];
          continue;
        }
        i[m] = v(i[m], c);
      }
    }
    return i;
  }
  function S(i, c, m) {
    s.isObject(i) ? o.addValue(i, c, m, { propertyIsArray: !0 }) : i.push(m);
  }
  function h(i, c, m, $) {
    if (!("@id" in m))
      return !1;
    const x = i.subjects[m["@id"]];
    return x && b(i, x, c, $);
  }
  function l(i, c) {
    const m = c["@value"], $ = c["@type"], x = c["@language"], j = i["@value"] ? s.isArray(i["@value"]) ? i["@value"] : [i["@value"]] : [], q = i["@type"] ? s.isArray(i["@type"]) ? i["@type"] : [i["@type"]] : [], k = i["@language"] ? s.isArray(i["@language"]) ? i["@language"] : [i["@language"]] : [];
    return j.length === 0 && q.length === 0 && k.length === 0 ? !0 : !(!(j.includes(m) || s.isEmptyObject(j[0])) || !(!$ && q.length === 0 || q.includes($) || $ && s.isEmptyObject(q[0])) || !(!x && k.length === 0 || k.includes(x) || x && s.isEmptyObject(k[0])));
  }
  return Kr;
}
var Zr, Za;
function zl() {
  if (Za) return Zr;
  Za = 1;
  const e = Se(), {
    isArray: t,
    isObject: s,
    isString: o,
    isUndefined: p
  } = ye(), {
    isList: n,
    isValue: r,
    isGraph: a,
    isSimpleGraph: d,
    isSubjectReference: y
  } = Ce(), {
    expandIri: g,
    getContextValue: w,
    isKeyword: u,
    process: f,
    processingMode: b
  } = Xe(), {
    removeBase: _,
    prependBase: v
  } = Be(), {
    REGEX_KEYWORD: S,
    addValue: h,
    asArray: l,
    compareShortestLeast: i
  } = _e(), c = {};
  Zr = c, c.compact = async ({
    activeCtx: x,
    activeProperty: j = null,
    element: q,
    options: k = {}
  }) => {
    if (t(q)) {
      let T = [];
      for (let O = 0; O < q.length; ++O) {
        const J = await c.compact({
          activeCtx: x,
          activeProperty: j,
          element: q[O],
          options: k
        });
        J !== null && T.push(J);
      }
      return k.compactArrays && T.length === 1 && (w(
        x,
        j,
        "@container"
      ) || []).length === 0 && (T = T[0]), T;
    }
    const C = w(x, j, "@context");
    if (p(C) || (x = await f({
      activeCtx: x,
      localCtx: C,
      propagate: !0,
      overrideProtected: !0,
      options: k
    })), s(q)) {
      if (k.link && "@id" in q && k.link.hasOwnProperty(q["@id"])) {
        const A = k.link[q["@id"]];
        for (let P = 0; P < A.length; ++P)
          if (A[P].expanded === q)
            return A[P].compacted;
      }
      if (r(q) || y(q)) {
        const A = c.compactValue({ activeCtx: x, activeProperty: j, value: q, options: k });
        return k.link && y(q) && (k.link.hasOwnProperty(q["@id"]) || (k.link[q["@id"]] = []), k.link[q["@id"]].push({ expanded: q, compacted: A })), A;
      }
      if (n(q) && (w(
        x,
        j,
        "@container"
      ) || []).includes("@list"))
        return c.compact({
          activeCtx: x,
          activeProperty: j,
          element: q["@list"],
          options: k
        });
      const T = j === "@reverse", O = {}, J = x;
      !r(q) && !y(q) && (x = x.revertToPreviousContext());
      const N = w(J, j, "@context");
      p(N) || (x = await f({
        activeCtx: x,
        localCtx: N,
        propagate: !0,
        overrideProtected: !0,
        options: k
      })), k.link && "@id" in q && (k.link.hasOwnProperty(q["@id"]) || (k.link[q["@id"]] = []), k.link[q["@id"]].push({ expanded: q, compacted: O }));
      let H = q["@type"] || [];
      H.length > 1 && (H = Array.from(H).sort());
      const F = x;
      for (const A of H) {
        const P = c.compactIri(
          { activeCtx: F, iri: A, relativeTo: { vocab: !0 } }
        ), U = w(J, P, "@context");
        p(U) || (x = await f({
          activeCtx: x,
          localCtx: U,
          options: k,
          propagate: !1
        }));
      }
      const G = Object.keys(q).sort();
      for (const A of G) {
        const P = q[A];
        if (A === "@id") {
          let U = l(P).map(
            (E) => c.compactIri({
              activeCtx: x,
              iri: E,
              relativeTo: { vocab: !1 },
              base: k.base
            })
          );
          U.length === 1 && (U = U[0]);
          const D = c.compactIri(
            { activeCtx: x, iri: "@id", relativeTo: { vocab: !0 } }
          );
          O[D] = U;
          continue;
        }
        if (A === "@type") {
          let U = l(P).map(
            (M) => c.compactIri({
              activeCtx: J,
              iri: M,
              relativeTo: { vocab: !0 }
            })
          );
          U.length === 1 && (U = U[0]);
          const D = c.compactIri(
            { activeCtx: x, iri: "@type", relativeTo: { vocab: !0 } }
          ), R = (w(
            x,
            D,
            "@container"
          ) || []).includes("@set") && b(x, 1.1) || t(U) && P.length === 0;
          h(O, D, U, { propertyIsArray: R });
          continue;
        }
        if (A === "@reverse") {
          const U = await c.compact({
            activeCtx: x,
            activeProperty: "@reverse",
            element: P,
            options: k
          });
          for (const D in U)
            if (x.mappings.has(D) && x.mappings.get(D).reverse) {
              const E = U[D], R = (w(
                x,
                D,
                "@container"
              ) || []).includes("@set") || !k.compactArrays;
              h(
                O,
                D,
                E,
                { propertyIsArray: R }
              ), delete U[D];
            }
          if (Object.keys(U).length > 0) {
            const D = c.compactIri({
              activeCtx: x,
              iri: A,
              relativeTo: { vocab: !0 }
            });
            h(O, D, U);
          }
          continue;
        }
        if (A === "@preserve") {
          const U = await c.compact({
            activeCtx: x,
            activeProperty: j,
            element: P,
            options: k
          });
          t(U) && U.length === 0 || h(O, A, U);
          continue;
        }
        if (A === "@index") {
          if ((w(
            x,
            j,
            "@container"
          ) || []).includes("@index"))
            continue;
          const D = c.compactIri({
            activeCtx: x,
            iri: A,
            relativeTo: { vocab: !0 }
          });
          h(O, D, P);
          continue;
        }
        if (A !== "@graph" && A !== "@list" && A !== "@included" && u(A)) {
          const U = c.compactIri({
            activeCtx: x,
            iri: A,
            relativeTo: { vocab: !0 }
          });
          h(O, U, P);
          continue;
        }
        if (!t(P))
          throw new e(
            "JSON-LD expansion error; expanded value must be an array.",
            "jsonld.SyntaxError"
          );
        if (P.length === 0) {
          const U = c.compactIri({
            activeCtx: x,
            iri: A,
            value: P,
            relativeTo: { vocab: !0 },
            reverse: T
          }), D = x.mappings.has(U) ? x.mappings.get(U)["@nest"] : null;
          let E = O;
          D && ($(x, D, k), s(O[D]) || (O[D] = {}), E = O[D]), h(
            E,
            U,
            P,
            {
              propertyIsArray: !0
            }
          );
        }
        for (const U of P) {
          const D = c.compactIri({
            activeCtx: x,
            iri: A,
            value: U,
            relativeTo: { vocab: !0 },
            reverse: T
          }), E = x.mappings.has(D) ? x.mappings.get(D)["@nest"] : null;
          let I = O;
          E && ($(x, E, k), s(O[E]) || (O[E] = {}), I = O[E]);
          const R = w(
            x,
            D,
            "@container"
          ) || [], M = a(U), B = n(U);
          let Q;
          B ? Q = U["@list"] : M && (Q = U["@graph"]);
          let K = await c.compact({
            activeCtx: x,
            activeProperty: D,
            element: B || M ? Q : U,
            options: k
          });
          if (B)
            if (t(K) || (K = [K]), !R.includes("@list"))
              K = {
                [c.compactIri({
                  activeCtx: x,
                  iri: "@list",
                  relativeTo: { vocab: !0 }
                })]: K
              }, "@index" in U && (K[c.compactIri({
                activeCtx: x,
                iri: "@index",
                relativeTo: { vocab: !0 }
              })] = U["@index"]);
            else {
              h(I, D, K, {
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
                activeCtx: x,
                iri: "@none",
                relativeTo: { vocab: !0 }
              });
              h(
                L,
                V,
                K,
                {
                  propertyIsArray: !k.compactArrays || R.includes("@set")
                }
              );
            } else R.includes("@graph") && d(U) ? (t(K) && K.length > 1 && (K = { "@included": K }), h(
              I,
              D,
              K,
              {
                propertyIsArray: !k.compactArrays || R.includes("@set")
              }
            )) : (t(K) && K.length === 1 && k.compactArrays && (K = K[0]), K = {
              [c.compactIri({
                activeCtx: x,
                iri: "@graph",
                relativeTo: { vocab: !0 }
              })]: K
            }, "@id" in U && (K[c.compactIri({
              activeCtx: x,
              iri: "@id",
              relativeTo: { vocab: !0 }
            })] = U["@id"]), "@index" in U && (K[c.compactIri({
              activeCtx: x,
              iri: "@index",
              relativeTo: { vocab: !0 }
            })] = U["@index"]), h(
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
                x,
                D,
                "@index"
              ) || "@index", Z = c.compactIri(
                { activeCtx: x, iri: z, relativeTo: { vocab: !0 } }
              );
              if (z === "@index")
                V = U["@index"], delete K[Z];
              else {
                let X;
                if ([V, ...X] = l(K[z] || []), !o(V))
                  V = null;
                else
                  switch (X.length) {
                    case 0:
                      delete K[z];
                      break;
                    case 1:
                      K[z] = X[0];
                      break;
                    default:
                      K[z] = X;
                      break;
                  }
              }
            } else if (R.includes("@id")) {
              const z = c.compactIri({
                activeCtx: x,
                iri: "@id",
                relativeTo: { vocab: !0 }
              });
              V = K[z], delete K[z];
            } else if (R.includes("@type")) {
              const z = c.compactIri({
                activeCtx: x,
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
                activeCtx: x,
                activeProperty: D,
                element: { "@id": U["@id"] },
                options: k
              }));
            }
            V || (V = c.compactIri({
              activeCtx: x,
              iri: "@none",
              relativeTo: { vocab: !0 }
            })), h(
              L,
              V,
              K,
              {
                propertyIsArray: R.includes("@set")
              }
            );
          } else {
            const L = !k.compactArrays || R.includes("@set") || R.includes("@list") || t(K) && K.length === 0 || A === "@list" || A === "@graph";
            h(
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
    return q;
  }, c.compactIri = ({
    activeCtx: x,
    iri: j,
    value: q = null,
    relativeTo: k = { vocab: !1 },
    reverse: C = !1,
    base: T = null
  }) => {
    if (j === null)
      return j;
    x.isPropertyTermScoped && x.previousContext && (x = x.previousContext);
    const O = x.getInverse();
    if (u(j) && j in O && "@none" in O[j] && "@type" in O[j]["@none"] && "@none" in O[j]["@none"]["@type"])
      return O[j]["@none"]["@type"]["@none"];
    if (k.vocab && j in O) {
      const G = x["@language"] || "@none", A = [];
      s(q) && "@index" in q && !("@graph" in q) && A.push("@index", "@index@set"), s(q) && "@preserve" in q && (q = q["@preserve"][0]), a(q) ? ("@index" in q && A.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in q && A.push(
        "@graph@id",
        "@graph@id@set"
      ), A.push("@graph", "@graph@set", "@set"), "@index" in q || A.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in q || A.push("@graph@id", "@graph@id@set")) : s(q) && !r(q) && A.push("@id", "@id@set", "@type", "@set@type");
      let P = "@language", U = "@null";
      if (C)
        P = "@type", U = "@reverse", A.push("@set");
      else if (n(q)) {
        "@index" in q || A.push("@list");
        const E = q["@list"];
        if (E.length === 0)
          P = "@any", U = "@none";
        else {
          let I = E.length === 0 ? G : null, R = null;
          for (let M = 0; M < E.length; ++M) {
            const B = E[M];
            let Q = "@none", K = "@none";
            if (r(B))
              if ("@direction" in B) {
                const L = (B["@language"] || "").toLowerCase(), V = B["@direction"];
                Q = `${L}_${V}`;
              } else "@language" in B ? Q = B["@language"].toLowerCase() : "@type" in B ? K = B["@type"] : Q = "@null";
            else
              K = "@id";
            if (I === null ? I = Q : Q !== I && r(B) && (I = "@none"), R === null ? R = K : K !== R && (R = "@none"), I === "@none" && R === "@none")
              break;
          }
          I = I || "@none", R = R || "@none", R !== "@none" ? (P = "@type", U = R) : U = I;
        }
      } else {
        if (r(q))
          if ("@language" in q && !("@index" in q)) {
            A.push("@language", "@language@set"), U = q["@language"];
            const E = q["@direction"];
            E && (U = `${U}_${E}`);
          } else "@direction" in q && !("@index" in q) ? U = `_${q["@direction"]}` : "@type" in q && (P = "@type", U = q["@type"]);
        else
          P = "@type", U = "@id";
        A.push("@set");
      }
      A.push("@none"), s(q) && !("@index" in q) && A.push("@index", "@index@set"), r(q) && Object.keys(q).length === 1 && A.push("@language", "@language@set");
      const D = m(
        x,
        j,
        q,
        A,
        P,
        U
      );
      if (D !== null)
        return D;
    }
    if (k.vocab && "@vocab" in x) {
      const G = x["@vocab"];
      if (j.indexOf(G) === 0 && j !== G) {
        const A = j.substr(G.length);
        if (!x.mappings.has(A))
          return A;
      }
    }
    let J = null;
    const N = [];
    let H = x.fastCurieMap;
    const F = j.length - 1;
    for (let G = 0; G < F && j[G] in H; ++G)
      H = H[j[G]], "" in H && N.push(H[""][0]);
    for (let G = N.length - 1; G >= 0; --G) {
      const A = N[G], P = A.terms;
      for (const U of P) {
        const D = U + ":" + j.substr(A.iri.length);
        x.mappings.get(U)._prefix && (!x.mappings.has(D) || q === null && x.mappings.get(D)["@id"] === j) && (J === null || i(D, J) < 0) && (J = D);
      }
    }
    if (J !== null)
      return J;
    for (const [G, A] of x.mappings)
      if (A && A._prefix && j.startsWith(G + ":"))
        throw new e(
          `Absolute IRI "${j}" confused with prefix "${G}".`,
          "jsonld.SyntaxError",
          { code: "IRI confused with prefix", context: x }
        );
    if (!k.vocab)
      if ("@base" in x)
        if (x["@base"]) {
          const G = _(v(T, x["@base"]), j);
          return S.test(G) ? `./${G}` : G;
        } else
          return j;
      else
        return _(T, j);
    return j;
  }, c.compactValue = ({ activeCtx: x, activeProperty: j, value: q, options: k }) => {
    if (r(q)) {
      const J = w(x, j, "@type"), N = w(x, j, "@language"), H = w(x, j, "@direction"), F = w(x, j, "@container") || [], G = "@index" in q && !F.includes("@index");
      if (!G && J !== "@none" && (q["@type"] === J || "@language" in q && q["@language"] === N && "@direction" in q && q["@direction"] === H || "@language" in q && q["@language"] === N || "@direction" in q && q["@direction"] === H))
        return q["@value"];
      const A = Object.keys(q).length, P = A === 1 || A === 2 && "@index" in q && !G, U = "@language" in x, D = o(q["@value"]), E = x.mappings.has(j) && x.mappings.get(j)["@language"] === null;
      if (P && J !== "@none" && (!U || !D || E))
        return q["@value"];
      const I = {};
      return G && (I[c.compactIri({
        activeCtx: x,
        iri: "@index",
        relativeTo: { vocab: !0 }
      })] = q["@index"]), "@type" in q ? I[c.compactIri({
        activeCtx: x,
        iri: "@type",
        relativeTo: { vocab: !0 }
      })] = c.compactIri(
        { activeCtx: x, iri: q["@type"], relativeTo: { vocab: !0 } }
      ) : "@language" in q && (I[c.compactIri({
        activeCtx: x,
        iri: "@language",
        relativeTo: { vocab: !0 }
      })] = q["@language"]), "@direction" in q && (I[c.compactIri({
        activeCtx: x,
        iri: "@direction",
        relativeTo: { vocab: !0 }
      })] = q["@direction"]), I[c.compactIri({
        activeCtx: x,
        iri: "@value",
        relativeTo: { vocab: !0 }
      })] = q["@value"], I;
    }
    const C = g(
      x,
      j,
      { vocab: !0 },
      k
    ), T = w(x, j, "@type"), O = c.compactIri({
      activeCtx: x,
      iri: q["@id"],
      relativeTo: { vocab: T === "@vocab" },
      base: k.base
    });
    return T === "@id" || T === "@vocab" || C === "@graph" ? O : {
      [c.compactIri({
        activeCtx: x,
        iri: "@id",
        relativeTo: { vocab: !0 }
      })]: O
    };
  };
  function m(x, j, q, k, C, T) {
    T === null && (T = "@null");
    const O = [];
    if ((T === "@id" || T === "@reverse") && s(q) && "@id" in q) {
      T === "@reverse" && O.push("@reverse");
      const N = c.compactIri(
        { activeCtx: x, iri: q["@id"], relativeTo: { vocab: !0 } }
      );
      x.mappings.has(N) && x.mappings.get(N) && x.mappings.get(N)["@id"] === q["@id"] ? O.push.apply(O, ["@vocab", "@id"]) : O.push.apply(O, ["@id", "@vocab"]);
    } else {
      O.push(T);
      const N = O.find((H) => H.includes("_"));
      N && O.push(N.replace(/^[^_]+_/, "_"));
    }
    O.push("@none");
    const J = x.inverse[j];
    for (const N of k) {
      if (!(N in J))
        continue;
      const H = J[N][C];
      for (const F of O)
        if (F in H)
          return H[F];
    }
    return null;
  }
  function $(x, j, q) {
    if (g(x, j, { vocab: !0 }, q) !== "@nest")
      throw new e(
        "JSON-LD compact error; nested property must have an @nest value resolving to @nest.",
        "jsonld.SyntaxError",
        { code: "invalid @nest value" }
      );
  }
  return Zr;
}
var Qr, Qa;
function Fl() {
  return Qa || (Qa = 1, Qr = (e) => {
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
    }), t.compact = function(s, o) {
      return arguments.length < 2 ? Promise.reject(
        new TypeError("Could not compact, too few arguments.")
      ) : e.compact(s, o);
    }, t.expand = function(s) {
      return arguments.length < 1 ? Promise.reject(
        new TypeError("Could not expand, too few arguments.")
      ) : e.expand(s);
    }, t.flatten = function(s) {
      return arguments.length < 1 ? Promise.reject(
        new TypeError("Could not flatten, too few arguments.")
      ) : e.flatten(s);
    }, t;
  }), Qr;
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
var Xr, Xa;
function Hl() {
  if (Xa) return Xr;
  Xa = 1;
  const e = gs(), t = ql(), s = _e(), o = Tl(), p = s.IdentifierIssuer, n = Se(), r = Po(), a = kl(), { expand: d } = Dl(), { flatten: y } = Ml(), { fromRDF: g } = Ll(), { toRDF: w } = Ul(), {
    frameMergedOrDefault: u,
    cleanupNull: f
  } = Vl(), {
    isArray: b,
    isObject: _,
    isString: v
  } = ye(), {
    isSubjectReference: S
  } = Ce(), {
    expandIri: h,
    getInitialContext: l,
    process: i,
    processingMode: c
  } = Xe(), {
    compact: m,
    compactIri: $
  } = zl(), {
    createNodeMap: x,
    createMergedNodeMap: j,
    mergeNodeMaps: q
  } = Gn(), {
    logEventHandler: k,
    logWarningEventHandler: C,
    safeEventHandler: T,
    setDefaultEventHandler: O,
    setupEventHandler: J,
    strictEventHandler: N,
    unhandledEventHandler: H
  } = Et(), F = function(A) {
    const P = {}, D = new r({ max: 100 });
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
        base: v(I) ? I : "",
        compactArrays: !0,
        compactToRelative: !0,
        graph: !1,
        skipExpansion: !1,
        link: !1,
        issuer: new p("_:b"),
        contextResolver: new o(
          { sharedCache: D }
        )
      }), M.link && (M.skipExpansion = !0), M.compactToRelative || delete M.base;
      let B;
      M.skipExpansion ? B = I : B = await A.expand(I, M);
      const Q = await A.processContext(
        l(M),
        R,
        M
      );
      let K = await m({
        activeCtx: Q,
        element: B,
        options: M
      });
      M.compactArrays && !M.graph && b(K) ? K.length === 1 ? K = K[0] : K.length === 0 && (K = {}) : M.graph && _(K) && (K = [K]), _(R) && "@context" in R && (R = R["@context"]), R = s.clone(R), b(R) || (R = [R]);
      const L = R;
      R = [];
      for (let z = 0; z < L.length; ++z)
        (!_(L[z]) || Object.keys(L[z]).length > 0) && R.push(L[z]);
      const V = R.length > 0;
      if (R.length === 1 && (R = R[0]), b(K)) {
        const z = $({
          activeCtx: Q,
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
    }, A.expand = async function(I, R) {
      if (arguments.length < 1)
        throw new TypeError("Could not expand, too few arguments.");
      R = E(R, {
        keepFreeFloatingNodes: !1,
        contextResolver: new o(
          { sharedCache: D }
        )
      });
      const M = {}, B = [];
      if ("expandContext" in R) {
        const V = s.clone(R.expandContext);
        _(V) && "@context" in V ? M.expandContext = V : M.expandContext = { "@context": V }, B.push(M.expandContext);
      }
      let Q;
      if (!v(I))
        M.input = s.clone(I);
      else {
        const V = await A.get(I, R);
        Q = V.documentUrl, M.input = V.document, V.contextUrl && (M.remoteContext = { "@context": V.contextUrl }, B.push(M.remoteContext));
      }
      "base" in R || (R.base = Q || "");
      let K = l(R);
      for (const V of B)
        K = await i({ activeCtx: K, localCtx: V, options: R });
      let L = await d({
        activeCtx: K,
        element: M.input,
        options: R
      });
      return _(L) && "@graph" in L && Object.keys(L).length === 1 ? L = L["@graph"] : L === null && (L = []), b(L) || (L = [L]), L;
    }, A.flatten = async function(I, R, M) {
      if (arguments.length < 1)
        return new TypeError("Could not flatten, too few arguments.");
      typeof R == "function" ? R = null : R = R || null, M = E(M, {
        base: v(I) ? I : "",
        contextResolver: new o(
          { sharedCache: D }
        )
      });
      const B = await A.expand(I, M), Q = y(B);
      return R === null ? Q : (M.graph = !0, M.skipExpansion = !0, await A.compact(Q, R, M));
    }, A.frame = async function(I, R, M) {
      if (arguments.length < 2)
        throw new TypeError("Could not frame, too few arguments.");
      if (M = E(M, {
        base: v(I) ? I : "",
        embed: "@once",
        explicit: !1,
        requireAll: !1,
        omitDefault: !1,
        bnodesToClear: [],
        contextResolver: new o(
          { sharedCache: D }
        )
      }), v(R)) {
        const Y = await A.get(R, M);
        if (R = Y.document, Y.contextUrl) {
          let re = R["@context"];
          re ? b(re) ? re.push(Y.contextUrl) : re = [re, Y.contextUrl] : re = Y.contextUrl, R["@context"] = re;
        }
      }
      const B = R ? R["@context"] || {} : {}, Q = await A.processContext(
        l(M),
        B,
        M
      );
      M.hasOwnProperty("omitGraph") || (M.omitGraph = c(Q, 1.1)), M.hasOwnProperty("pruneBlankNodeIdentifiers") || (M.pruneBlankNodeIdentifiers = c(Q, 1.1));
      const K = await A.expand(I, M), L = { ...M };
      L.isFrame = !0, L.keepFreeFloatingNodes = !0;
      const V = await A.expand(R, L), z = Object.keys(R).map((Y) => h(Q, Y, { vocab: !0 }));
      L.merged = !z.includes("@graph"), L.is11 = c(Q, 1.1);
      const Z = u(K, V, L);
      L.graph = !M.omitGraph, L.skipExpansion = !0, L.link = {}, L.framing = !0;
      let X = await A.compact(Z, B, L);
      return L.link = {}, X = f(X, L), X;
    }, A.link = async function(I, R, M) {
      const B = {};
      return R && (B["@context"] = R), B["@embed"] = "@link", A.frame(I, B, M);
    }, A.normalize = A.canonize = async function(I, R) {
      if (arguments.length < 1)
        throw new TypeError("Could not canonize, too few arguments.");
      if (R = E(R, {
        base: v(I) ? I : null,
        algorithm: "URDNA2015",
        skipExpansion: !1,
        safe: !0,
        contextResolver: new o(
          { sharedCache: D }
        )
      }), "inputFormat" in R) {
        if (R.inputFormat !== "application/n-quads" && R.inputFormat !== "application/nquads")
          throw new n(
            "Unknown canonicalization input format.",
            "jsonld.CanonizeError"
          );
        const Q = a.parse(I);
        return e.canonize(Q, R);
      }
      const M = { ...R };
      delete M.format, M.produceGeneralizedRdf = !1;
      const B = await A.toRDF(I, M);
      return e.canonize(B, R);
    }, A.fromRDF = async function(I, R) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert from RDF, too few arguments.");
      R = E(R, {
        format: v(I) ? "application/n-quads" : void 0
      });
      const { format: M } = R;
      let { rdfParser: B } = R;
      if (M) {
        if (B = B || P[M], !B)
          throw new n(
            "Unknown input format.",
            "jsonld.UnknownFormat",
            { format: M }
          );
      } else
        B = () => I;
      const Q = await B(I);
      return g(Q, R);
    }, A.toRDF = async function(I, R) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert to RDF, too few arguments.");
      R = E(R, {
        base: v(I) ? I : "",
        skipExpansion: !1,
        contextResolver: new o(
          { sharedCache: D }
        )
      });
      let M;
      R.skipExpansion ? M = I : M = await A.expand(I, R);
      const B = w(M, R);
      if (R.format) {
        if (R.format === "application/n-quads" || R.format === "application/nquads")
          return a.serialize(B);
        throw new n(
          "Unknown output format.",
          "jsonld.UnknownFormat",
          { format: R.format }
        );
      }
      return B;
    }, A.createNodeMap = async function(I, R) {
      if (arguments.length < 1)
        throw new TypeError("Could not create node map, too few arguments.");
      R = E(R, {
        base: v(I) ? I : "",
        contextResolver: new o(
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
        contextResolver: new o(
          { sharedCache: D }
        )
      });
      const B = await Promise.all(I.map((Y) => {
        const re = { ...M };
        return A.expand(Y, re);
      }));
      let Q = !0;
      "mergeNodes" in M && (Q = M.mergeNodes);
      const K = M.issuer || new p("_:b"), L = { "@default": {} };
      for (let Y = 0; Y < B.length; ++Y) {
        const re = s.relabelBlankNodes(B[Y], {
          issuer: new p("_:b" + Y + "-")
        }), ue = Q || Y === 0 ? L : { "@default": {} };
        if (x(re, ue, "@default", K), ue !== L)
          for (const ae in ue) {
            const oe = ue[ae];
            if (!(ae in L)) {
              L[ae] = oe;
              continue;
            }
            const ie = L[ae];
            for (const Ee in oe)
              Ee in ie || (ie[Ee] = oe[Ee]);
          }
      }
      const V = q(L), z = [], Z = Object.keys(V).sort();
      for (let Y = 0; Y < Z.length; ++Y) {
        const re = V[Z[Y]];
        S(re) || z.push(re);
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
      const B = await M(I);
      try {
        if (!B.document)
          throw new n(
            "No remote document found at the given URL.",
            "jsonld.NullRemoteDocument"
          );
        v(B.document) && (B.document = JSON.parse(B.document));
      } catch (Q) {
        throw new n(
          "Could not retrieve a JSON-LD document from the URL.",
          "jsonld.LoadDocumentError",
          {
            code: "loading document failed",
            cause: Q,
            remoteDoc: B
          }
        );
      }
      return B;
    }, A.processContext = async function(I, R, M) {
      return M = E(M, {
        base: "",
        contextResolver: new o(
          { sharedCache: D }
        )
      }), R === null ? l(M) : (R = s.clone(R), _(R) && "@context" in R || (R = { "@context": R }), i({ activeCtx: I, localCtx: R, options: M }));
    }, A.getContextValue = Xe().getContextValue, A.documentLoaders = {}, A.useDocumentLoader = function(I) {
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
      P[I] = R;
    }, A.unregisterRDFParser = function(I) {
      delete P[I];
    }, A.registerRDFParser("application/n-quads", a.parse), A.registerRDFParser("application/nquads", a.parse), A.url = Be(), A.logEventHandler = k, A.logWarningEventHandler = C, A.safeEventHandler = T, A.setDefaultEventHandler = O, A.strictEventHandler = N, A.unhandledEventHandler = H, A.util = s, Object.assign(A, s), A.promises = A, A.RequestQueue = Oo(), A.JsonLdProcessor = Fl()(A), t.setupGlobals(A), t.setupDocumentLoaders(A);
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
        { eventHandler: J({ options: I }) }
      );
    }
    return A;
  }, G = function() {
    return F(function() {
      return G();
    });
  };
  return F(G), Xr = G, Xr;
}
var Bl = Hl();
const Jl = /* @__PURE__ */ os(Bl);
async function Wa(e, t, s = {}) {
  const o = {
    algorithm: "URDNA2015",
    format: "application/n-quads",
    safe: s.safe ?? !1
  };
  return t && (o.documentLoader = t), await Jl.normalize(e, o);
}
async function Gl(e, t, s, o = !1) {
  const [p, n] = await Promise.all([
    Wa(e, s, { safe: o }),
    Wa(t, s, { safe: o })
  ]), r = Yr("sha256").update(p, "utf8").digest(), a = Yr("sha256").update(n, "utf8").digest(), d = new Uint8Array(64);
  return d.set(a, 0), d.set(r, 32), d;
}
async function Kl(e, t, s = {}) {
  const o = e.proof;
  if (!o) throw new Error("No proof found on credential");
  if (o.cryptosuite !== "eddsa-rdfc-2022")
    throw new Error(`Unsupported cryptosuite: ${o.cryptosuite}`);
  if (o.created === void 0)
    throw new Error('eddsa-rdfc-2022 proof is missing the required "created" property.');
  const p = ["type", "cryptosuite", "proofPurpose", "verificationMethod", "created", "proofValue"];
  if (o.type !== "DataIntegrityProof" || o.proofPurpose !== "assertionMethod" || Object.keys(o).some((w) => !p.includes(w)) || typeof o.verificationMethod != "string" || typeof o.created != "string" || typeof o.proofValue != "string") return !1;
  const { proof: n, ...r } = e, { proofValue: a, ...d } = o, y = { ...d, "@context": r["@context"] }, g = await Gl(
    r,
    y,
    s.documentLoader,
    s.safe ?? !1
  );
  try {
    const w = so(o.proofValue);
    return await gl(w, g, t);
  } catch {
    return !1;
  }
}
const Zl = zu, Ql = nl, Xl = Object.freeze({
  RmAccreditation: `${et}accreditation.json`,
  RmOperationalScope: `${et}operational-scope.json`,
  RmCertificate: `${et}certificate.json`,
  RmStudy: `${et}study.json`,
  RmLabAuthority: `${et}lab-authority.json`,
  BitstringStatusListCredential: `${et}status-list.json`
});
function Wl(e) {
  return e === "BitstringStatusListCredential" ? [Rs] : [Rs, mc];
}
function St(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const Yl = (e) => e.replace(/~/g, "~0").replace(/\//g, "~1");
function ef(e, t) {
  if (!t.startsWith("/")) return [];
  let s = [{ pointer: "", value: e }];
  for (const o of t.slice(1).split("/")) {
    const p = [];
    for (const { pointer: n, value: r } of s)
      o === "*" ? Array.isArray(r) && r.forEach((a, d) => p.push({ pointer: `${n}/${d}`, value: a })) : St(r) && Object.hasOwn(r, o) && p.push({ pointer: `${n}/${Yl(o)}`, value: r[o] });
    s = p;
  }
  return s;
}
function ot(e, t, s = [], o = "executed") {
  return Object.freeze({
    state: e,
    execution: o,
    reasons: Object.freeze(t),
    sourcePointers: Object.freeze(s)
  });
}
const tf = (e) => ot("not_established", [e], [], "not_run");
function nf(e, t) {
  const s = Date.parse(t), o = typeof e.validFrom == "string" ? Date.parse(e.validFrom) : NaN, p = typeof e.validUntil == "string" ? Date.parse(e.validUntil) : NaN;
  if (!Number.isFinite(s) || !Number.isFinite(o) || !Number.isFinite(p))
    return ot("not_established", ["Validity period or evaluation time is missing or invalid."]);
  const n = ["/validFrom", "/validUntil"];
  return s < o ? ot("contradicted", [`Not yet valid at ${t}.`], n) : s > p ? ot("contradicted", [`Expired before ${t}.`], n) : ot("established", [`Valid at ${t}.`], n);
}
function rf(e, t) {
  return (Array.isArray(e.relatedResource) ? e.relatedResource : []).filter(St).map((o) => {
    const p = String(o.id);
    try {
      const n = Un(t.resolve(p).bytes);
      return n === o.digestSRI ? { id: p, state: "established", reason: "Digest matches the exact referenced bytes." } : { id: p, state: "contradicted", reason: `Digest mismatch: referenced bytes hash to ${n}.` };
    } catch (n) {
      const r = n instanceof be ? n.code : "UNAVAILABLE";
      return { id: p, state: "not_established", reason: `Referenced resource unavailable: ${r}.` };
    }
  });
}
async function sf(e, t, s) {
  const o = [], p = s.staticResolver ?? t, n = tf("Not evaluated because protection is not established."), r = (i = {}) => {
    const c = Ze(o.map((m) => m.state));
    return Object.freeze({
      artifactId: e,
      protection: Object.freeze({
        artifactId: e,
        ...ot(c, o.filter((m) => m.state !== "established").map((m) => `${m.check}: ${m.reason}`).concat(c === "established" ? ["Protection established from the original secured bytes."] : []))
      }),
      checks: Object.freeze(o.map((m) => Object.freeze(m))),
      validity: n,
      relatedResources: Object.freeze([]),
      facts: Object.freeze([]),
      ...i
    });
  }, a = (i, c, m, $ = {}) => (o.push({ check: i, state: c, reason: m }), r($));
  let d;
  try {
    d = t.resolve(e).bytes;
  } catch (i) {
    const c = i instanceof be ? i.code : "UNAVAILABLE";
    return a("resolve", "not_established", `Artifact is not available: ${c}.`);
  }
  const y = Un(d);
  o.push({ check: "resolve", state: "established", reason: `Resolved ${d.byteLength} bytes.` });
  let g;
  try {
    g = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(d));
  } catch {
    return a("parse", "contradicted", "Artifact bytes are not valid UTF-8 JSON.", { digestSRI: y });
  }
  if (!St(g)) return a("parse", "contradicted", "Artifact is not a JSON object.", { digestSRI: y });
  o.push({ check: "parse", state: "established", reason: "Strict UTF-8 JSON object." });
  const w = g["@context"], u = Wl(Array.isArray(g.type) ? g.type[1] : void 0);
  if (!Array.isArray(w) || w.length !== u.length || u.some((i, c) => w[c] !== i))
    return a(
      "carrier",
      "not_established",
      "Only the exact supported context combination for this type is accepted.",
      { digestSRI: y }
    );
  o.push({ check: "carrier", state: "established", reason: "Exact supported context combination." });
  const f = Array.isArray(g.type) ? g.type : [], b = f.length === 2 && f[0] === "VerifiableCredential" ? String(f[1]) : void 0, _ = b === void 0 ? void 0 : Xl[b];
  if (_ === void 0)
    return a("type", "not_established", "Credential type is not a recognized RM v1 artifact type.", { digestSRI: y });
  if (Array.isArray(g.credentialSchema))
    return a(
      "type",
      "not_established",
      "Multiple credentialSchema declarations have no accepted composition in this binding.",
      { digestSRI: y, artifactType: b }
    );
  if ((St(g.credentialSchema) ? g.credentialSchema.id : void 0) !== _)
    return a("type", "contradicted", `${b} must declare schema ${_}.`, { digestSRI: y, artifactType: b });
  o.push({ check: "type", state: "established", reason: `${b} with its pinned schema.` });
  try {
    const i = new Zl({ allErrors: !0, strict: !0 });
    Ql(i);
    const c = JSON.parse(new TextDecoder().decode(p.resolve(_).bytes)), m = i.compile(c);
    if (!m(g)) {
      const $ = (m.errors ?? []).map((x) => `${x.instancePath || "/"} ${x.message ?? ""}`).join("; ");
      return a("schema", "contradicted", `Schema validation failed: ${$}`, { digestSRI: y, artifactType: b });
    }
  } catch (i) {
    const c = i instanceof be ? i.code : "INVALID_SCHEMA";
    return a("schema", "not_established", `Pinned schema unavailable: ${c}.`, { digestSRI: y, artifactType: b });
  }
  o.push({ check: "schema", state: "established", reason: "Valid against the pinned schema." });
  const S = g.proof;
  if (Array.isArray(S))
    return a("proof", "not_established", "Proof sets and chains are unsupported in the initial slice.", { digestSRI: y, artifactType: b });
  if (!St(S))
    return a("proof", "not_established", "The artifact carries no proof.", { digestSRI: y, artifactType: b });
  o.push({ check: "proof", state: "established", reason: "One eddsa-rdfc-2022 assertionMethod proof." });
  const h = xc(g.issuer, S.verificationMethod, p);
  if (h.state !== "established" || h.publicKey === void 0)
    return a(
      "key",
      h.state === "established" ? "not_established" : h.state,
      `${h.code}: ${h.reason}`,
      { digestSRI: y, artifactType: b, keyAuthorization: h }
    );
  o.push({ check: "key", state: "established", reason: h.reason });
  try {
    const i = pc(p);
    if (!await Kl(g, h.publicKey, {
      documentLoader: i,
      safe: !0
    }))
      return a(
        "signature",
        "contradicted",
        "Signature does not verify over the safe canonical form.",
        { digestSRI: y, artifactType: b, keyAuthorization: h }
      );
  } catch (i) {
    const c = i instanceof Error ? i.message.split(`
`)[0] : String(i);
    return a(
      "signature",
      "contradicted",
      `Safe JSON-LD processing rejected the artifact: ${c}`,
      { digestSRI: y, artifactType: b, keyAuthorization: h }
    );
  }
  o.push({ check: "signature", state: "established", reason: "Ed25519 signature verifies (safe mode, offline catalog)." });
  const l = [];
  for (const i of s.manifest.factMappings) {
    const c = String(i.fact);
    for (const { pointer: m, value: $ } of ef(g, String(i.nativePath)))
      l.push(Object.freeze({ fact: c, pointer: m, value: structuredClone($) }));
  }
  return r({
    digestSRI: y,
    artifactType: b,
    keyAuthorization: h,
    validity: nf(g, s.evaluationTime),
    relatedResources: Object.freeze(rf(g, t).map((i) => Object.freeze(i))),
    facts: Object.freeze(l)
  });
}
const af = "https://vc4qi.example/bindings/rm/1#", vt = (e) => `${af}${e}`, ve = (e) => ({ state: "established", text: e }), Me = (e) => ({ state: "contradicted", text: e }), bt = (e) => ({ state: "not_established", text: e }), it = (e) => String(e).split(/[#/]/).pop();
function pt(e) {
  if (typeof e != "string" || !/^(0|[1-9][0-9]*)(\.[0-9]+)?$/.test(e)) return;
  const [t, s = ""] = e.split(".");
  return { n: BigInt(t + s), scale: s.length };
}
function wt(e, t) {
  const s = pt(e), o = pt(t), p = Math.max(s.scale, o.scale), n = s.n * 10n ** BigInt(p - s.scale), r = o.n * 10n ** BigInt(p - o.scale);
  return n < r ? -1 : n > r ? 1 : 0;
}
function of(e, t) {
  const s = pt(e), o = pt(t), p = Math.max(s.scale, o.scale), n = (s.n * 10n ** BigInt(p - s.scale) + o.n * 10n ** BigInt(p - o.scale)).toString().padStart(p + 1, "0");
  return p === 0 ? n : `${n.slice(0, -p)}.${n.slice(-p)}`;
}
const Wr = (e, t) => Array.isArray(e) && e.includes(t);
function cf({ A: e, H: t, O: s, S: o, D: p, anchors: n }) {
  const r = p.credentialSubject, a = r.materialPropertiesList[0].results[0], d = a.data.quantity, y = r.materials[0], g = d.value, w = d.uncertainty.expandedUncertainty, u = [
    d.quantityKind === vt("MassFraction") && d.unit.ucumCode === "mg/kg" ? ve("Mass fraction in mg/kg: supported by the binding.") : bt("Unsupported quantity kind or unit."),
    pt(g) && pt(w) ? ve(`Exact decimals: x = ${g}, U = ${w} mg/kg.`) : Me("Value or uncertainty is not a valid decimal."),
    d.uncertainty.coverageFactor === "2" ? ve("Coverage factor k = 2, as the binding requires.") : bt("Unsupported coverage factor.")
  ], f = s.credentialSubject.scope[0], b = e.credentialSubject.scope.find((i) => i.matrixIri === f.matrixIri && i.formIri === f.formIri && i.quantityKindIri === f.quantityKindIri && f.allowedPropertyIris.every((c) => i.allowedPropertyIris.includes(c)) && f.allowedMethodIris.every((c) => i.allowedMethodIris.includes(c)) && i.range.unit === f.range.unit && wt(f.range.from, i.range.from) >= 0 && wt(f.range.to, i.range.to) <= 0), _ = [
    p.termsOfUse[0].authorizationCredential.id === s.id ? ve("D names operational scope O as its authorization (termsOfUse).") : bt("D names no recognized authorization."),
    s.credentialSubject.id === p.issuer && s.issuer === p.issuer && Wr(s.credentialSubject.permittedActivity, vt("issueRmCertificate")) ? ve("O is the producer's own scope for issuing RM certificates.") : Me("O does not belong to D's issuer."),
    s.termsOfUse[0].authorizationCredential.id === e.id && e.credentialSubject.id === s.issuer && Wr(e.credentialSubject.permittedActivity, vt("maintainRmScope")) ? ve("Accreditation A lets the producer maintain an operational scope.") : Me("No permission to maintain O."),
    n.includes(e.issuer) ? ve("A is issued by the configured trust anchor (fictional NAB).") : bt("A's issuer is not a configured anchor."),
    b ? ve(`O lies within A: methods ${f.allowedMethodIris.map(it).join(", ")} within ${b.allowedMethodIris.map(it).join(", ")}; ${f.range.from}–${f.range.to} within ${b.range.from}–${b.range.to} mg/kg.`) : Me("O is not contained in one record of A.")
  ], v = s.credentialSubject.scope.find((i) => i.matrixIri === y.matrixIri && i.formIri === y.formIri && i.quantityKindIri === d.quantityKind && i.allowedPropertyIris.includes(a.propertyIri) && i.allowedMethodIris.includes(a.methodIri) && i.range.unit === d.unit.ucumCode);
  let S;
  v ? wt(g, v.range.from) < 0 ? S = Me(`${g} < ${v.range.from} mg/kg: below the accredited range.`) : wt(g, v.range.to) > 0 ? S = Me(`${g} > ${v.range.to} mg/kg: above the accredited range.`) : S = ve(`${v.range.from} ≤ ${g} ≤ ${v.range.to} mg/kg (record ${it(v.id)}).`) : S = Me(`No record of O covers ${it(a.propertyIri)}, ${it(y.matrixIri)}, ${it(a.methodIri)}.`);
  const h = t.credentialSubject.scope[0], l = [
    p.evidence[0].id === o.id && o.credentialSubject.id === r.id && o.credentialSubject.propertyIri === a.propertyIri && o.credentialSubject.matrixIri === y.matrixIri ? ve("Study S concerns the same batch, property and matrix (evidence).") : Me("Study S concerns another batch or property."),
    o.credentialSubject.outcomeIri === vt("Homogeneous") ? ve("S reports the batch homogeneous.") : Me("S does not report homogeneity."),
    o.termsOfUse[0].authorizationCredential.id === t.id && t.credentialSubject.id === o.issuer && Wr(t.credentialSubject.permittedActivity, vt("issueRmStudy")) && h.studyTypeIris.includes(o.credentialSubject.studyTypeIri) && n.includes(t.issuer) ? ve("S's laboratory has its own authority for homogeneity studies (H).") : bt("S lacks its own laboratory authority.")
  ];
  return { mapping: u, authority: _, scope: S, support: l, x: g, U: w };
}
function df(e, t, s, o) {
  if (o !== "established")
    return { state: "not_established", run: !1, text: "Not asked: its prerequisites are not established." };
  const p = of(e, t);
  return wt(p, s) <= 0 ? { state: "established", run: !0, text: `${e} + ${t} = ${p} ≤ ${s} mg/kg.` } : { state: "contradicted", run: !0, text: `${e} + ${t} = ${p} > ${s} mg/kg.` };
}
const uf = {
  A: "https://nab.vc4qi.example/credentials/A",
  H: "https://nab.vc4qi.example/credentials/H",
  O: "https://producer.vc4qi.example/credentials/O",
  S: "https://lab.vc4qi.example/credentials/S"
}, lf = (e) => `https://producer.vc4qi.example/credentials/D${e}`, ff = ["https://nab.vc4qi.example/controller"], pf = "200", hf = "150", ss = hc(kn.manifest), mf = {
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
  const o = lf(e), p = /* @__PURE__ */ new Map();
  if (t) {
    const x = kn.files.find((j) => j.uri === o).text;
    p.set(o, x.replace(`"value": "${e}"`, `"value": "${hf}"`));
  }
  const n = kn.files.map((x) => {
    const j = p.get(x.uri) ?? x.text, q = new TextEncoder().encode(j);
    return {
      uri: x.uri,
      mediaType: x.mediaType,
      origin: x.origin,
      version: x.version,
      bytes: q,
      digestSRI: p.has(x.uri) ? Un(q) : x.digestSRI
    };
  }), r = new lc(n), a = { ...uf, D: o }, d = ["D", "O", "A", "S", "H"], y = {}, g = {}, w = {};
  for (const x of d) {
    const j = r.openSession({ maxResources: 64, maxBytes: 2e6 });
    y[x] = await sf(a[x], j, { manifest: ss, evaluationTime: s }), g[x] = new TextDecoder().decode(n.find((q) => q.uri === a[x]).bytes), w[x] = JSON.parse(g[x]);
  }
  const u = { 0: [], 1: [], 2: [], 3: [] };
  for (const x of d) {
    const j = y[x];
    for (const q of j.checks)
      u[mf[q.check]].push({ role: x, state: q.state, text: `${x}: ${q.check} — ${q.reason}` });
    for (const q of j.relatedResources)
      u[1].push({ role: x, state: q.state, text: `${x} → ${q.id.split("/").pop()}: ${q.reason}` });
    j.validity.execution === "executed" && u[3].push({ role: x, state: j.validity.state, text: `${x}: ${j.validity.reasons.join(" ")}` });
  }
  const f = (x) => x.length ? Ze(x.map((j) => j.state)) : "not_established", b = Ze(d.map((x) => y[x].protection.state)), _ = [
    { gate: 0, name: "Plan and structure", source: "repository", state: f(u[0]), checks: u[0] },
    { gate: 1, name: "Resource identity", source: "repository", state: f(u[1]), checks: u[1] },
    { gate: 2, name: "Protection", source: "repository", state: f(u[2]), checks: u[2] },
    {
      gate: 3,
      name: "Temporal applicability",
      source: "repository",
      state: u[3].length === d.length ? f(u[3]) : "not_established",
      checks: u[3].length ? u[3] : [{ state: "not_established", text: "Not evaluated: protection is not established." }]
    }
  ], v = Ze(_.map((x) => x.state));
  let S, h;
  const i = w.D.credentialSubject.materialPropertiesList[0].results[0].data.quantity;
  if (b === "established") {
    const x = cf({ ...w, anchors: ff });
    S = x.scope;
    const j = Ze([...x.authority, x.scope].map((k) => k.state)), q = Ze([v, ...[...x.mapping, ...x.authority, x.scope, ...x.support].map((k) => k.state)]);
    h = df(x.x, x.U, pf, q), _.push(
      { gate: 4, name: "Meaning and mapping", source: "preview", state: f(x.mapping), checks: x.mapping },
      { gate: 5, name: "Authority and scope", source: "preview", state: j, checks: [...x.authority, x.scope] },
      {
        gate: 6,
        name: "Support and decision",
        source: "preview",
        state: Ze([...x.support.map((k) => k.state), h.run ? h.state : "not_established"]),
        checks: [...x.support, h.run ? h : { state: "not_established", text: `Decision ${h.text}` }]
      }
    );
  } else
    for (const [x, j] of [[4, "Meaning and mapping"], [5, "Authority and scope"], [6, "Support and decision"]])
      _.push({
        gate: x,
        name: j,
        source: "preview",
        state: "not_run",
        checks: [{ state: "not_established", text: "Not asked: protection is not established, so no facts are read." }]
      });
  const c = _.map((x) => x.state === "not_run" ? "not_established" : x.state), m = c.includes("contradicted") ? "reject" : c.every((x) => x === "established") ? "accept" : "not_established", $ = _.find((x) => x.state === "contradicted")?.gate;
  return {
    x: e,
    tampered: t,
    documents: w,
    texts: g,
    artifacts: y,
    gates: _,
    protection: b,
    scope: S,
    conformity: h,
    verdict: m,
    failedGate: $,
    values: { x: i.value, U: i.uncertainty.expandedUncertainty }
  };
}
const jf = { binding: `${ss.id}@${ss.version}`, resources: kn.files.length };
export {
  ff as ANCHORS,
  pf as LIMIT,
  hf as TAMPERED_VALUE,
  uf as URI,
  jf as buildInfo,
  lf as certificateUri,
  Rf as evaluateScenario
};
