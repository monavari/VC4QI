var El = Object.defineProperty;
var Ra = (e) => {
  throw TypeError(e);
};
var kl = (e, t, n) => t in e ? El(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var pt = (e, t, n) => kl(e, typeof t != "symbol" ? t + "" : t, n), ja = (e, t, n) => t.has(e) || Ra("Cannot " + n);
var rt = (e, t, n) => (ja(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Nn = (e, t, n) => t.has(e) ? Ra("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), wi = (e, t, n, r) => (ja(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
const Sn = { rm: { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/rm/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/bindings.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Contexts, schemas, controller documents, signed A/H/O/S/D fixtures and status lists are pinned and verify in TypeScript and Python. The I1-I4 evaluators (protection, status, authority routes, support, claim mapping and coverage, conformity) and the current-reliance time rules are implemented, with a cross-language parity vector; an independent transformation vector is still required before selection.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/rm/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/rm/1#RmAccreditation", "https://vc4qi.example/bindings/rm/1#RmOperationalScope", "https://vc4qi.example/bindings/rm/1#RmCertificate", "https://vc4qi.example/bindings/rm/1#RmStudy", "https://vc4qi.example/bindings/rm/1#RmLabAuthority", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential"], schemaUris: ["https://vc4qi.example/schemas/rm/1/accreditation.json", "https://vc4qi.example/schemas/rm/1/operational-scope.json", "https://vc4qi.example/schemas/rm/1/certificate.json", "https://vc4qi.example/schemas/rm/1/study.json", "https://vc4qi.example/schemas/rm/1/lab-authority.json", "https://vc4qi.example/schemas/rm/1/authorization-policy.json", "https://vc4qi.example/schemas/rm/1/study-reference.json", "https://vc4qi.example/schemas/rm/1/status-list.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/rm-v1/catalog.json", decimalEncoding: "JSON strings typed xsd:decimal for every quantity, bound and uncertainty", orderedCollections: ["materials", "materialPropertiesList", "results"] }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/rm/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/rm/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/bindings/rm/1#authorizationCredential" }, { fact: "requiredStudy", nativePath: "/evidence/*/id", expandedIri: "https://www.w3.org/2018/credentials#evidence" }, { fact: "validFrom", nativePath: "/validFrom", expandedIri: "https://www.w3.org/2018/credentials#validFrom" }, { fact: "validUntil", nativePath: "/validUntil", expandedIri: "https://www.w3.org/2018/credentials#validUntil" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/rm/1#activityTime" }, { fact: "selectedResult", nativePath: "/credentialSubject/materialPropertiesList/*/results/*", expandedIri: "https://vc4qi.example/bindings/rm/1#results" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, material: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 1 }, authorizingReferenceSelection: "by-declared-reference-type-per-route; resolved credential type must match (else contradicted); several of one type not_established", supportReferences: { minimum: 1 }, multipleRecognizedDeclarations: "unsupported-unless-exact-deterministic-composition-is-listed", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "evidence", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse authorizationCredential references on the credential chain; an authenticated grant found by other means establishes nothing (not_established)" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/bindings/rm/1#RmAuthorizationPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], supportEvidence: "https://vc4qi.example/bindings/rm/1#RmStudyReference", supportEvidenceEstablishes: ["support-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "support-applicability", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { issueRmCertificate: "https://vc4qi.example/bindings/rm/1#issueRmCertificate", maintainRmScope: "https://vc4qi.example/bindings/rm/1#maintainRmScope", issueRmStudy: "https://vc4qi.example/bindings/rm/1#issueRmStudy" }, rules: ["A grantee equals the producer exercising certificate issuance and scope maintenance.", "O issuer and grantee equal that producer and O is contained by A.", "D issuer equals O grantee.", "S issuer equals H laboratory grantee.", "Commissioning a study grants no laboratory competence."] }, scopeAndMapping: { mappingVersion: "rm-experimental-mapping-1", recordEvaluator: "https://vc4qi.example/evaluators/rm-complete-record/1", quantityEvaluator: "https://vc4qi.example/evaluators/exact-mass-fraction/1", dimensions: ["matrixIri", "formIri", "propertyIri", "methodIri", "quantityKindIri", "range"], units: { "mg/kg": "1e-6", "kg/kg": "1" }, boundaries: "inclusive", missingOrEmptyRestrictedDimension: "not_established", recordCombination: "one-complete-record-per-claim-no-splicing", uncertainty: { requiredCoverageFactor: "2", nonnegative: !0, accreditationCeiling: "none" }, methodRevisions: [{ method: "https://vc4qi.example/bindings/rm/1#M2", revises: "https://vc4qi.example/bindings/rm/1#M1" }], methodSuccessionInterpretation: "verifier-profile mapping.methodSuccession: accept-successor | require-extension | none (none leaves a revised method not_established at gate 4)", claimCoverage: "the selected result, mapped at gate 4, must lie in one complete record of the route's own scope credential (O for operational-scope, A for direct-accreditation); no fallback to a parent grant", conformity: "verifier-profile requirements and decision rules, evaluated at gate 6 only after the claim is authorized; exact arithmetic reported in the requirement's unit", unsupported: ["asymmetric-uncertainty", "display-label-equality", "substring-matching", "implicit-method-succession"] }, routesAndRestrictions: { certificateRoute: ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A"], installedCertificateRoutes: { "operational-scope": ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A", "A-issuer-is-accreditation-anchor"], "direct-accreditation": ["A-authorizes-D", "A-issuer-is-accreditation-anchor"] }, studyRoute: ["H-authorizes-S"], requiredSupport: ["S", "H"], globalRestrictions: ["applicable-suspension", "request-time-policy"], installedGlobalRestrictions: { "accreditation-suspension": "every usable anchor-issued RmAccreditation of the certificate issuer reached through the target's termsOfUse references, on any route, must carry a fresh issuer suspension status (Bitstring Status List, statusPurpose suspension) with its bit clear; missing or unreadable suspension status is not_established; unusable or unreferenced credentials are not restrictions" }, unusedAlternativeFailures: "diagnostic-only: only the target and the credentials on the selected route and support chains decide the request", routeComposition: "AND-within-route-OR-between-complete-routes", baselineAlternatives: 1, provenanceDoesNotEstablish: ["permission", "containment"] }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, proofCollections: "unsupported-in-initial-slice", status: "authenticated-current-revocation-status-required-for-A-O-D-S-H; suspension entries on accreditations are read only by the accreditation-suspension restriction", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], freshness: "verifier-profile maxAgeSeconds from the status list validFrom; no default", historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { objectApplicability: ["materialBatch", "activity", "method", "activityTime"], supportSubjectNeedNotEqualTargetIssuer: !0, mandatoryDisclosure: ["issuer", "credentialSubject/id", "activityTime", "selectedResult", "restrictions", "authorizingReference", "requiredStudy", "relatedResource", "proof"], missingMandatoryDisclosure: "not_established", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/acceptance-ledger.csv", testVectorRoots: ["testdata/regressions", "bindings/experimental/rm-v1/test-vectors"], unsupported: ["production-accreditation", "legal-effect", "physical-sample-truth", "public-example-namespace-resolution", "general-ontology-reasoning", "wallet-interoperability", "external-recognition-adapter", "timestamp-service"] } }, profiles: { "rm-verifier-1": { id: "https://vc4qi.example/profiles/rm-verifier", version: "1", status: "experimental", description: "Verifier-owned reliance profile for the experimental RM v1 binding. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "recognize-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } }, "rm-verifier-two-routes-1": { id: "https://vc4qi.example/profiles/rm-verifier-two-routes", version: "1", status: "experimental", description: "Fictional verifier profile with two complete certificate routes, (operational scope within an accreditation) OR (direct accreditation), and the accreditation-suspension global restriction outside the OR. Exercises route composition (C01-C07); not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "recognize-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope", "direct-accreditation"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/certificate.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-vwN4LLqYW5dMIB3eModEJ+8KHS3SHSjc4tEkNr75BSVpY921bNOySpy44ltOtwOM", text: `{
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
                                    "kg/kg",
                                    "%"
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
` }, { uri: "https://nab.vc4qi.example/credentials/A", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-nnUmQT4uj8inG2TFkdEZBScQtUYcK99Vb2g1lrr2uYskyYREByVoE/VdRL75Tc/b", text: `{
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
        "id": "https://nab.vc4qi.example/credentials/A#scope-elements",
        "matrixIri": "https://vc4qi.example/bindings/rm/1#CuZn39Pb3",
        "formIri": "https://vc4qi.example/bindings/rm/1#Disc",
        "allowedPropertyIris": [
          "https://vc4qi.example/bindings/rm/1#As",
          "https://vc4qi.example/bindings/rm/1#Cu",
          "https://vc4qi.example/bindings/rm/1#Zn",
          "https://vc4qi.example/bindings/rm/1#Pb"
        ],
        "allowedMethodIris": [
          "https://vc4qi.example/bindings/rm/1#M1",
          "https://vc4qi.example/bindings/rm/1#M2"
        ],
        "quantityKindIri": "https://vc4qi.example/bindings/rm/1#MassFraction",
        "range": {
          "from": "0.1",
          "to": "997000",
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
    "proofValue": "z2yM285UPM5JxCq6TmLv2dN8xsmR2R1m5qGV447qqhTqiq6XSQ7hVyzPmmzszgopRWUXHubwJ3dj7MHpC5B7Px1bN"
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
` }, { uri: "https://producer.vc4qi.example/credentials/O", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-P/AqCUxT5l77r7UfJRpX8PQEGDyu8fcKI7OhmKS9lzn72cnJ/nZnlcAeezVBN+LN", text: `{
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
      "digestSRI": "sha384-nnUmQT4uj8inG2TFkdEZBScQtUYcK99Vb2g1lrr2uYskyYREByVoE/VdRL75Tc/b"
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
    "proofValue": "z5ZSWCsPMEuBp8guNB1prhUr6haV61nkHPkR5ioEsP9mr346MzgTLSospxYMf7JXQN7VoTL62J9KfGQt6Z5x6mU8F"
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
` }, { uri: "https://producer.vc4qi.example/credentials/D178", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-FXwGYMMuMlyBKYU+B/cKgbl2zS+U2ICj0VDQQ/AKVf83MKoA881VsQ31JXwPjBTQ", text: `{
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
  "name": "Reference material certificate, CuZn39Pb3 disc lot 1",
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
          },
          {
            "propertyIri": "https://vc4qi.example/bindings/rm/1#Cu",
            "methodIri": "https://vc4qi.example/bindings/rm/1#M1",
            "data": {
              "quantity": {
                "quantityKind": "https://vc4qi.example/bindings/rm/1#MassFraction",
                "value": "57.68",
                "unit": {
                  "ucumCode": "%"
                },
                "uncertainty": {
                  "expandedUncertainty": "0.14",
                  "coverageFactor": "2"
                }
              }
            }
          },
          {
            "propertyIri": "https://vc4qi.example/bindings/rm/1#Zn",
            "methodIri": "https://vc4qi.example/bindings/rm/1#M1",
            "data": {
              "quantity": {
                "quantityKind": "https://vc4qi.example/bindings/rm/1#MassFraction",
                "value": "38.2",
                "unit": {
                  "ucumCode": "%"
                },
                "uncertainty": {
                  "expandedUncertainty": "0.4",
                  "coverageFactor": "2"
                }
              }
            }
          },
          {
            "propertyIri": "https://vc4qi.example/bindings/rm/1#Pb",
            "methodIri": "https://vc4qi.example/bindings/rm/1#M1",
            "data": {
              "quantity": {
                "quantityKind": "https://vc4qi.example/bindings/rm/1#MassFraction",
                "value": "3.07",
                "unit": {
                  "ucumCode": "%"
                },
                "uncertainty": {
                  "expandedUncertainty": "0.06",
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
      "digestSRI": "sha384-P/AqCUxT5l77r7UfJRpX8PQEGDyu8fcKI7OhmKS9lzn72cnJ/nZnlcAeezVBN+LN"
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
    "proofValue": "z5933probMxNbhGfKuqa4SL9eBvHQF4qTreYcyFYFNTV9iF3Hd7ne14HGaMazFZ8ityMZ1SHGWBBTeyqd7LrrDqzL"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D197", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-NQ9Su7JoGLXueG5MDIOYG4WaZ68k1rdkeuhBKpLBoaigVL4UA0cE6CyPluijWOJ0", text: `{
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
  "name": "Reference material certificate, CuZn39Pb3 disc lot 1 (hypothetical reissue)",
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
          },
          {
            "propertyIri": "https://vc4qi.example/bindings/rm/1#Cu",
            "methodIri": "https://vc4qi.example/bindings/rm/1#M1",
            "data": {
              "quantity": {
                "quantityKind": "https://vc4qi.example/bindings/rm/1#MassFraction",
                "value": "57.68",
                "unit": {
                  "ucumCode": "%"
                },
                "uncertainty": {
                  "expandedUncertainty": "0.14",
                  "coverageFactor": "2"
                }
              }
            }
          },
          {
            "propertyIri": "https://vc4qi.example/bindings/rm/1#Zn",
            "methodIri": "https://vc4qi.example/bindings/rm/1#M1",
            "data": {
              "quantity": {
                "quantityKind": "https://vc4qi.example/bindings/rm/1#MassFraction",
                "value": "38.2",
                "unit": {
                  "ucumCode": "%"
                },
                "uncertainty": {
                  "expandedUncertainty": "0.4",
                  "coverageFactor": "2"
                }
              }
            }
          },
          {
            "propertyIri": "https://vc4qi.example/bindings/rm/1#Pb",
            "methodIri": "https://vc4qi.example/bindings/rm/1#M1",
            "data": {
              "quantity": {
                "quantityKind": "https://vc4qi.example/bindings/rm/1#MassFraction",
                "value": "3.07",
                "unit": {
                  "ucumCode": "%"
                },
                "uncertainty": {
                  "expandedUncertainty": "0.06",
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
      "digestSRI": "sha384-P/AqCUxT5l77r7UfJRpX8PQEGDyu8fcKI7OhmKS9lzn72cnJ/nZnlcAeezVBN+LN"
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
    "proofValue": "z2oWoHZjTGkPXwXR5gqcKevsAHPxuqzMiJz47dCghnvAxHQTrQ4z35UJaFrrHnaLgeTfGEgBne5B84oSdn8psBX3H"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D520", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-Ne/vy/9IBLuH4ob9SBqTtfKlwKV9R48NLdBYyelLVGBvfPHeM6+jPoycEKrcqrAD", text: `{
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
  "name": "Reference material certificate, CuZn39Pb3 disc lot 1 (hypothetical reissue)",
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
          },
          {
            "propertyIri": "https://vc4qi.example/bindings/rm/1#Cu",
            "methodIri": "https://vc4qi.example/bindings/rm/1#M1",
            "data": {
              "quantity": {
                "quantityKind": "https://vc4qi.example/bindings/rm/1#MassFraction",
                "value": "57.68",
                "unit": {
                  "ucumCode": "%"
                },
                "uncertainty": {
                  "expandedUncertainty": "0.14",
                  "coverageFactor": "2"
                }
              }
            }
          },
          {
            "propertyIri": "https://vc4qi.example/bindings/rm/1#Zn",
            "methodIri": "https://vc4qi.example/bindings/rm/1#M1",
            "data": {
              "quantity": {
                "quantityKind": "https://vc4qi.example/bindings/rm/1#MassFraction",
                "value": "38.2",
                "unit": {
                  "ucumCode": "%"
                },
                "uncertainty": {
                  "expandedUncertainty": "0.4",
                  "coverageFactor": "2"
                }
              }
            }
          },
          {
            "propertyIri": "https://vc4qi.example/bindings/rm/1#Pb",
            "methodIri": "https://vc4qi.example/bindings/rm/1#M1",
            "data": {
              "quantity": {
                "quantityKind": "https://vc4qi.example/bindings/rm/1#MassFraction",
                "value": "3.07",
                "unit": {
                  "ucumCode": "%"
                },
                "uncertainty": {
                  "expandedUncertainty": "0.06",
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
      "digestSRI": "sha384-P/AqCUxT5l77r7UfJRpX8PQEGDyu8fcKI7OhmKS9lzn72cnJ/nZnlcAeezVBN+LN"
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
    "proofValue": "z3x8hLRkVDrzsvh971CVj69DWhxiQiTWFHYQeoE7TQ34kobKRigKDaYdVX7nLJ2vjWG3QCbDNCckHsyuyqxRiUqE"
  }
}
` }] }, cal: { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/cal/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/bindings.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Migrated calibration (DCC) binding for the calibration-direct-accreditation, calibration-capability, nmi-legal-mandate and test-report-supported-dcc use cases. The gate 0-6 evaluators for direct accreditation, bounded operational scopes, statutory mandates, measurement-group coverage, CMC floors and instrument-calibration support of test reports are implemented; conformity rules and native DCC XML are not.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/cal/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/cal/1#CalAccreditation", "https://vc4qi.example/bindings/cal/1#CalOperationalScope", "https://vc4qi.example/bindings/cal/1#CalLegalMandate", "https://vc4qi.example/bindings/cal/1#CalCertificate", "https://vc4qi.example/bindings/cal/1#CalTestReport", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential"], schemaUris: ["https://vc4qi.example/schemas/cal/1/accreditation.json", "https://vc4qi.example/schemas/cal/1/operational-scope.json", "https://vc4qi.example/schemas/cal/1/legal-mandate.json", "https://vc4qi.example/schemas/cal/1/certificate.json", "https://vc4qi.example/schemas/cal/1/test-report.json", "https://vc4qi.example/schemas/cal/1/status-list.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/cal-v1/catalog.json", decimalEncoding: "JSON strings typed xsd:decimal for every value, bound, uncertainty and CMC floor", orderedCollections: ["measurementGroups", "results"], nativeRepresentation: "A JSON-LD simplification of a DCC's measurement results; native DCC XML is not carried in this experimental binding" }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/cal/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/cal/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/bindings/cal/1#authorizationCredential" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/cal/1#activityTime" }, { fact: "measurementGroup", nativePath: "/credentialSubject/measurementGroups/*", expandedIri: "https://vc4qi.example/bindings/cal/1#measurementGroups" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, measurementGroups: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 1 }, authorizingReferenceSelection: "by-declared-reference-type-per-route; resolved credential type must match (else contradicted); several of one type not_established", selectedGroups: "every selected measurement group is a separate required claim; the request is a conjunction over them", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse authorizationCredential references on the credential chain" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/bindings/cal/1#CalAuthorizationPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { issueCalibrationCertificate: "https://vc4qi.example/bindings/cal/1#issueCalibrationCertificate", maintainCalibrationScope: "https://vc4qi.example/bindings/cal/1#maintainCalibrationScope", issueTestReport: "https://vc4qi.example/bindings/cal/1#issueTestReport" }, rules: ["The grant's grantee (accreditation, operational scope or mandate) equals the actor issuing the calibration certificate.", "The grant permits issuing calibration certificates, or, for a test report under direct accreditation, issuing test reports (anchor purpose accredit-testing-laboratories).", "An operational scope is issued by its own grantee, and the accreditation it cites names that grantee and permits maintaining a calibration scope.", "Every grant on the route was in force at the certificate's activity time."] }, scopeAndMapping: { mappingVersion: "cal-experimental-mapping-1", dimensions: ["quantityKindIri", "methodIris", "range", "cmcFloor"], units: { Pa: "1", kPa: "1e3", MPa: "1e6" }, boundaries: "inclusive", coverageFactor: "2", methodRule: "every method a group names must be allowed by the same record; a record restricting methods against a group naming none is not_established (no empty-array bypass)", groupRule: "one complete record must cover the group's quantity kind, methods and every result; groups never combine and a later group cannot erase an earlier failure", cmcFloor: "when the verifier profile applies it, an expanded uncertainty below the record's admitted CMC contradicts scope; independent of conformity", boundedProjection: "every operational-scope record lies within one accreditation record: same quantity kind, a subset of its methods, a range inside its range and, when the profile applies the CMC floor, a stated floor not below the accreditation's; claims are covered by the operational scope only", unsupported: ["asymmetric-uncertainty", "display-label-equality", "implicit-method-succession", "customer-uncertainty-limits"] }, routesAndRestrictions: { installedCertificateRoutes: { "direct-accreditation": ["CA-authorizes-certificate", "CA-grantee-is-issuer", "CA-issuer-is-accreditation-anchor", "CA-in-force-at-activity"], "operational-scope": ["O-authorizes-certificate", "O-grantee-is-issuer", "O-self-maintained", "O-cites-CA", "CA-grantee-is-O-issuer", "CA-permits-scope-maintenance", "O-within-CA", "CA-issuer-is-accreditation-anchor", "O-and-CA-in-force-at-activity"], "statutory-mandate": ["M-authorizes-certificate", "M-grantee-is-issuer", "M-issuer-is-designation-anchor", "M-in-force-at-activity"] }, globalRestrictions: [], routeComposition: "AND-within-route-OR-between-complete-routes" }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, status: "authenticated-current-revocation-status-required", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { requiredSupport: "a CalTestReport requires one cited CalCertificate (evidence CalCalibrationReference) for the same instrument and quantity kinds, calibrated before the test and valid at it, whose own authority holds with every measurement group covered; certificates have no support obligation", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/acceptance-ledger.csv", testVectorRoots: ["bindings/experimental/cal-v1/test-vectors"], unsupported: ["production-accreditation", "legal-effect", "real-statutory-designation", "native-dcc-xml", "public-example-namespace-resolution", "wallet-interoperability", "timestamp-service"] } }, profiles: { "cal-verifier-1": { id: "https://vc4qi.example/profiles/cal-verifier", version: "1", status: "experimental", description: "Verifier-owned reliance profile for the experimental calibration v1 binding. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/cal/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-calibration-laboratories"] }], authority: { certificateRoutes: ["direct-accreditation"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] }, bindingRules: { applyCmcFloor: !0 } }, "cal-verifier-capability-1": { id: "https://vc4qi.example/profiles/cal-verifier-capability", version: "1", status: "experimental", description: "Verifier-owned reliance profile for calibration-capability under the experimental calibration v1 binding: certificates issued under a laboratory's bounded operational scope within its accreditation. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/cal/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-calibration-laboratories"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] }, bindingRules: { applyCmcFloor: !0 } }, "cal-verifier-nmi-1": { id: "https://vc4qi.example/profiles/cal-verifier-nmi", version: "1", status: "experimental", description: "Verifier-owned reliance profile for nmi-legal-mandate under the experimental calibration v1 binding: certificates issued under a statutory mandate, with no accreditation anchor configured. Fictional fixture configuration; no legal effect; not an external standard.", binding: { id: "https://vc4qi.example/bindings/cal/1", version: "1" }, trustAnchors: [{ id: "https://ministry.vc4qi.example/controller", purposes: ["designate-national-metrology-institutes"] }], authority: { certificateRoutes: ["statutory-mandate"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] }, bindingRules: { applyCmcFloor: !0 } }, "cal-verifier-test-report-1": { id: "https://vc4qi.example/profiles/cal-verifier-test-report", version: "1", status: "experimental", description: "Verifier-owned reliance profile for test-report-supported-dcc under the experimental calibration v1 binding: a testing laboratory's report under its direct accreditation, supported by an independently authorized calibration of the instrument it used. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/cal/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-testing-laboratories", "accredit-calibration-laboratories"] }], authority: { certificateRoutes: ["direct-accreditation"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] }, bindingRules: { applyCmcFloor: !0 } } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
}` }, { uri: "https://vc4qi.example/contexts/cal/1", mediaType: "application/ld+json", origin: "VC4QI experimental calibration binding (repository-owned fictional fixture)", version: "1", digestSRI: "sha384-WP1PGIvd9zwyt4InwkCef6PCPY+XvDWODgMJv72G7HIdAcAIEw7PibXlV1Qg1Ygh", text: `{
  "@context": {
    "@version": 1.1,
    "@protected": true,
    "cal": "https://vc4qi.example/bindings/cal/1#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",

    "CalAccreditation": "cal:CalAccreditation",
    "CalOperationalScope": "cal:CalOperationalScope",
    "CalLegalMandate": "cal:CalLegalMandate",
    "CalCertificate": "cal:CalCertificate",
    "CalTestReport": "cal:CalTestReport",
    "CalCalibrationReference": "cal:CalCalibrationReference",
    "CalAuthorizationPolicy": "cal:CalAuthorizationPolicy",

    "authorizationCredential": "cal:authorizationCredential",
    "permittedActivity": {"@id": "cal:permittedActivity", "@type": "@id", "@container": "@set"},
    "scope": {"@id": "cal:scope", "@container": "@set"},
    "quantityKindIri": {"@id": "cal:quantityKind", "@type": "@id"},
    "allowedMethodIris": {"@id": "cal:allowedMethodIris", "@type": "@id", "@container": "@set"},
    "range": "cal:range",
    "from": {"@id": "cal:from", "@type": "xsd:decimal"},
    "to": {"@id": "cal:to", "@type": "xsd:decimal"},
    "unit": "cal:unit",
    "cmcFloor": "cal:cmcFloor",

    "activityTime": {"@id": "cal:activityTime", "@type": "xsd:dateTime"},
    "instrumentIri": {"@id": "cal:instrument", "@type": "@id"},
    "measurementGroups": {"@id": "cal:measurementGroups", "@container": "@list"},
    "methodIris": {"@id": "cal:methodIris", "@type": "@id", "@container": "@set"},
    "results": {"@id": "cal:results", "@container": "@list"},
    "value": {"@id": "cal:value", "@type": "xsd:decimal"},
    "expandedUncertainty": {"@id": "cal:expandedUncertainty", "@type": "xsd:decimal"},
    "coverageFactor": {"@id": "cal:coverageFactor", "@type": "xsd:decimal"}
  }
}
` }, { uri: "https://vc4qi.example/schemas/cal/1/accreditation.json", mediaType: "application/schema+json", origin: "VC4QI experimental calibration binding (generated by scripts/cal-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-t61V/t97vNAGCXqLof3zdmK2XhiwVB2gLc5fsFKaFOwoqzqHPrJv1BiRukDx8CeM", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/cal/1/accreditation.json",
  "title": "Calibration or testing laboratory accreditation",
  "description": "Experimental VC4QI calibration binding v1 fixture schema. Not an external standard.",
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
        "https://vc4qi.example/contexts/cal/1"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "CalAccreditation"
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
          "const": "https://vc4qi.example/schemas/cal/1/accreditation.json"
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
              "https://vc4qi.example/bindings/cal/1#issueCalibrationCertificate",
              "https://vc4qi.example/bindings/cal/1#maintainCalibrationScope",
              "https://vc4qi.example/bindings/cal/1#issueTestReport"
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
              "quantityKindIri",
              "allowedMethodIris",
              "range"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uri"
              },
              "quantityKindIri": {
                "type": "string",
                "format": "uri"
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
                      "Pa",
                      "kPa",
                      "MPa"
                    ]
                  }
                },
                "additionalProperties": false
              },
              "cmcFloor": {
                "type": "object",
                "required": [
                  "value",
                  "unit"
                ],
                "properties": {
                  "value": {
                    "type": "string",
                    "pattern": "^(0|[1-9][0-9]*)(\\\\.[0-9]+)?$"
                  },
                  "unit": {
                    "enum": [
                      "Pa",
                      "kPa",
                      "MPa"
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
` }, { uri: "https://vc4qi.example/schemas/cal/1/operational-scope.json", mediaType: "application/schema+json", origin: "VC4QI experimental calibration binding (generated by scripts/cal-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-mxhRynqD2/GPCn1QJdH4xWtyq8ep5vL5Y/p8Pp/yU3Xeud3gRXFS+3aMfyw68df4", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/cal/1/operational-scope.json",
  "title": "Calibration operational scope",
  "description": "Experimental VC4QI calibration binding v1 fixture schema. Not an external standard.",
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
        "https://vc4qi.example/contexts/cal/1"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "CalOperationalScope"
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
          "const": "https://vc4qi.example/schemas/cal/1/operational-scope.json"
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
              "https://vc4qi.example/bindings/cal/1#issueCalibrationCertificate"
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
              "quantityKindIri",
              "allowedMethodIris",
              "range"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uri"
              },
              "quantityKindIri": {
                "type": "string",
                "format": "uri"
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
                      "Pa",
                      "kPa",
                      "MPa"
                    ]
                  }
                },
                "additionalProperties": false
              },
              "cmcFloor": {
                "type": "object",
                "required": [
                  "value",
                  "unit"
                ],
                "properties": {
                  "value": {
                    "type": "string",
                    "pattern": "^(0|[1-9][0-9]*)(\\\\.[0-9]+)?$"
                  },
                  "unit": {
                    "enum": [
                      "Pa",
                      "kPa",
                      "MPa"
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
      "maxItems": 2,
      "items": {
        "type": "object",
        "required": [
          "type",
          "authorizationCredential"
        ],
        "properties": {
          "type": {
            "const": "CalAuthorizationPolicy"
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
                  "CalAccreditation",
                  "CalOperationalScope",
                  "CalLegalMandate"
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
` }, { uri: "https://vc4qi.example/schemas/cal/1/legal-mandate.json", mediaType: "application/schema+json", origin: "VC4QI experimental calibration binding (generated by scripts/cal-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-ALEchmuDUKxQmd5T049aqAM20p40fguWY07w+ufc906Cmk4C/fWxCVlPRvJIPi75", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/cal/1/legal-mandate.json",
  "title": "Statutory metrology mandate",
  "description": "Experimental VC4QI calibration binding v1 fixture schema. Not an external standard.",
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
        "https://vc4qi.example/contexts/cal/1"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "CalLegalMandate"
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
          "const": "https://vc4qi.example/schemas/cal/1/legal-mandate.json"
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
              "https://vc4qi.example/bindings/cal/1#issueCalibrationCertificate"
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
              "quantityKindIri",
              "allowedMethodIris",
              "range"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uri"
              },
              "quantityKindIri": {
                "type": "string",
                "format": "uri"
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
                      "Pa",
                      "kPa",
                      "MPa"
                    ]
                  }
                },
                "additionalProperties": false
              },
              "cmcFloor": {
                "type": "object",
                "required": [
                  "value",
                  "unit"
                ],
                "properties": {
                  "value": {
                    "type": "string",
                    "pattern": "^(0|[1-9][0-9]*)(\\\\.[0-9]+)?$"
                  },
                  "unit": {
                    "enum": [
                      "Pa",
                      "kPa",
                      "MPa"
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
` }, { uri: "https://vc4qi.example/schemas/cal/1/certificate.json", mediaType: "application/schema+json", origin: "VC4QI experimental calibration binding (generated by scripts/cal-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-wDLKs6hK/ROhOekn78kR+6cYJiDFdvhd2GDPvwK5IQSFvgKSVYUWw7NiEXewaZbJ", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/cal/1/certificate.json",
  "title": "Calibration certificate (DCC)",
  "description": "Experimental VC4QI calibration binding v1 fixture schema. Not an external standard.",
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
        "https://vc4qi.example/contexts/cal/1"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "CalCertificate"
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
          "const": "https://vc4qi.example/schemas/cal/1/certificate.json"
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
        "measurementGroups"
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
        "measurementGroups": {
          "type": "array",
          "minItems": 1,
          "items": {
            "type": "object",
            "required": [
              "id",
              "quantityKindIri",
              "results"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uri"
              },
              "quantityKindIri": {
                "type": "string",
                "format": "uri"
              },
              "methodIris": {
                "type": "array",
                "uniqueItems": true,
                "items": {
                  "type": "string",
                  "format": "uri"
                }
              },
              "results": {
                "type": "array",
                "minItems": 1,
                "items": {
                  "type": "object",
                  "required": [
                    "value",
                    "unit",
                    "expandedUncertainty",
                    "coverageFactor"
                  ],
                  "properties": {
                    "value": {
                      "type": "string",
                      "pattern": "^(0|[1-9][0-9]*)(\\\\.[0-9]+)?$"
                    },
                    "unit": {
                      "enum": [
                        "Pa",
                        "kPa",
                        "MPa"
                      ]
                    },
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
      "maxItems": 2,
      "items": {
        "type": "object",
        "required": [
          "type",
          "authorizationCredential"
        ],
        "properties": {
          "type": {
            "const": "CalAuthorizationPolicy"
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
                  "CalAccreditation",
                  "CalOperationalScope",
                  "CalLegalMandate"
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
` }, { uri: "https://vc4qi.example/schemas/cal/1/test-report.json", mediaType: "application/schema+json", origin: "VC4QI experimental calibration binding (generated by scripts/cal-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-zXa9146l70o5g9T8TRSqskrLGA2SKcOzRYXBr7CESzWZYEK5cw8z/5QFF8ULufEy", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/cal/1/test-report.json",
  "title": "Test report supported by a calibration",
  "description": "Experimental VC4QI calibration binding v1 fixture schema. Not an external standard.",
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
        "https://vc4qi.example/contexts/cal/1"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "CalTestReport"
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
          "const": "https://vc4qi.example/schemas/cal/1/test-report.json"
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
        "instrumentIri",
        "measurementGroups"
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
        "instrumentIri": {
          "type": "string",
          "format": "uri"
        },
        "measurementGroups": {
          "type": "array",
          "minItems": 1,
          "items": {
            "type": "object",
            "required": [
              "id",
              "quantityKindIri",
              "results"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uri"
              },
              "quantityKindIri": {
                "type": "string",
                "format": "uri"
              },
              "methodIris": {
                "type": "array",
                "uniqueItems": true,
                "items": {
                  "type": "string",
                  "format": "uri"
                }
              },
              "results": {
                "type": "array",
                "minItems": 1,
                "items": {
                  "type": "object",
                  "required": [
                    "value",
                    "unit",
                    "expandedUncertainty",
                    "coverageFactor"
                  ],
                  "properties": {
                    "value": {
                      "type": "string",
                      "pattern": "^(0|[1-9][0-9]*)(\\\\.[0-9]+)?$"
                    },
                    "unit": {
                      "enum": [
                        "Pa",
                        "kPa",
                        "MPa"
                      ]
                    },
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
      "maxItems": 2,
      "items": {
        "type": "object",
        "required": [
          "type",
          "authorizationCredential"
        ],
        "properties": {
          "type": {
            "const": "CalAuthorizationPolicy"
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
                  "CalAccreditation",
                  "CalOperationalScope",
                  "CalLegalMandate"
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
    "evidence": {
      "type": "array",
      "minItems": 1,
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
            "const": "CalCalibrationReference"
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
` }, { uri: "https://vc4qi.example/schemas/cal/1/status-list.json", mediaType: "application/schema+json", origin: "VC4QI experimental calibration binding (generated by scripts/cal-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-7ype2vdVxV02epwtxjFktYWfvlTo5KcxJIZ6dy/79bz7JMcz0x47RZObxRPuuIXM", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/cal/1/status-list.json",
  "title": "Bitstring Status List credential for calibration v1 fixtures",
  "description": "Experimental VC4QI calibration binding v1 fixture schema. Not an external standard.",
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
          "const": "https://vc4qi.example/schemas/cal/1/status-list.json"
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
` }, { uri: "https://nab.vc4qi.example/controller", mediaType: "application/json", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-JN9CUEm46w9tiQyEqtklb0/EIVmBU6rnd5OEo8Cvus6gbhdWPAuaEtP9g7AYRAcd", text: `{
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
` }, { uri: "https://lab.vc4qi.example/controller", mediaType: "application/json", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-6/dmFJ9/4URc5YhNJ4MQDEskjj2p7CL+P08q7J0VnSvD8iz2Hj0EJZ+/HkOBways", text: `{
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
` }, { uri: "https://ministry.vc4qi.example/controller", mediaType: "application/json", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-lmwq8KR81S3I95gykm485FMWe+y1JfvTbTb8GEnqYpKfQr/DC0ZiySqfwkMlyYN+", text: `{
  "@context": "https://www.w3.org/ns/cid/v1",
  "id": "https://ministry.vc4qi.example/controller",
  "verificationMethod": [
    {
      "id": "https://ministry.vc4qi.example/controller#key-1",
      "type": "Multikey",
      "controller": "https://ministry.vc4qi.example/controller",
      "publicKeyMultibase": "z6MkiGcx26fBGuD9eJozLWGScW96UMaEpwWagv4eb1aaM1bA"
    }
  ],
  "assertionMethod": [
    "https://ministry.vc4qi.example/controller#key-1"
  ]
}
` }, { uri: "https://nmi.vc4qi.example/controller", mediaType: "application/json", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-SlccAqbyyKWmDt3v25wSHz2lB8VOkynnfaLgGCQhmqA32F6VcKugwkdODFcBuTYv", text: `{
  "@context": "https://www.w3.org/ns/cid/v1",
  "id": "https://nmi.vc4qi.example/controller",
  "verificationMethod": [
    {
      "id": "https://nmi.vc4qi.example/controller#key-1",
      "type": "Multikey",
      "controller": "https://nmi.vc4qi.example/controller",
      "publicKeyMultibase": "z6MksxeMWTsRN6xCrVbNdaEweGBFWBU7ZvDDN8g6XLNJbPtm"
    }
  ],
  "assertionMethod": [
    "https://nmi.vc4qi.example/controller#key-1"
  ]
}
` }, { uri: "https://testlab.vc4qi.example/controller", mediaType: "application/json", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-y+foYixAo2DwNI/7MEdbELDUq0v0GHH4rgnIJJcQIdKAbSrOvUKtEwPT7g7fLI/y", text: `{
  "@context": "https://www.w3.org/ns/cid/v1",
  "id": "https://testlab.vc4qi.example/controller",
  "verificationMethod": [
    {
      "id": "https://testlab.vc4qi.example/controller#key-1",
      "type": "Multikey",
      "controller": "https://testlab.vc4qi.example/controller",
      "publicKeyMultibase": "z6Mkwb3roq4qSqftdZ89TAZGtxBtzK8wPHRCwtHkiVmZrrC8"
    }
  ],
  "assertionMethod": [
    "https://testlab.vc4qi.example/controller#key-1"
  ]
}
` }, { uri: "https://nab.vc4qi.example/status/cal/1", mediaType: "application/vc", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-RlcLc7pI1v2f3B3ExTQw3w+GRliz1Zh1hnl7ySk/Y51whyrBDVoqdz+Y6hrtZXQg", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://nab.vc4qi.example/status/cal/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://nab.vc4qi.example/controller",
  "validFrom": "2026-09-01T00:00:00Z",
  "validUntil": "2027-09-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/cal/1/status-list.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://nab.vc4qi.example/status/cal/1#list",
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
    "proofValue": "z5VpE7mEuga9RqhpmdaF2Xuq8XK2snQFXJRPtw94draegjJKBwwRbmTuV4NDisEGk92T2qFLCosmicXi5xc7jMHEK"
  }
}
` }, { uri: "https://lab.vc4qi.example/status/cal/1", mediaType: "application/vc", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-qRM7oNbMIOAoysRjGAckkZldMqBZE3OghCudX8YLFtJ8NURm7S8U9Jyz70Ptvm1O", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://lab.vc4qi.example/status/cal/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://lab.vc4qi.example/controller",
  "validFrom": "2026-09-01T00:00:00Z",
  "validUntil": "2027-09-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/cal/1/status-list.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://lab.vc4qi.example/status/cal/1#list",
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
    "proofValue": "z4yydNAB9DYX3TjXW9cxwgqLHkr1GargBsoJRKwNCMKRyg4CWV6Jd9iSJGsNPcviPKSX8u8BMJeM7aSKKgaH9woXR"
  }
}
` }, { uri: "https://ministry.vc4qi.example/status/cal/1", mediaType: "application/vc", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-r8cj2OFWnCsShXgAsnwUcquGsxck3bak09P3nZ1VsAdlOi0tMX4F9KwkNQqGKUrq", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://ministry.vc4qi.example/status/cal/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://ministry.vc4qi.example/controller",
  "validFrom": "2026-09-01T00:00:00Z",
  "validUntil": "2027-09-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/cal/1/status-list.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://ministry.vc4qi.example/status/cal/1#list",
    "type": "BitstringStatusList",
    "statusPurpose": "revocation",
    "encodedList": "uH4sIAAAAAAACA-3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAIC3AYbSVKsAQAAA"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://ministry.vc4qi.example/controller#key-1",
    "created": "2026-09-01T00:00:00Z",
    "proofValue": "z3rhBYrXybLECPrvcB23BhG9NjeTMnyBiSZp7fs1vJuESxJhbNBeHRsn6d3B7hgSL4FuE5T95xLGYSysZGnipjP5d"
  }
}
` }, { uri: "https://nmi.vc4qi.example/status/cal/1", mediaType: "application/vc", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-mhrb4BI9J/r93PqDtxmxdjb79ROqOYTVrVK1PWBU+YJ4x4BdXDRKmPIB/sbioBus", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://nmi.vc4qi.example/status/cal/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://nmi.vc4qi.example/controller",
  "validFrom": "2026-09-01T00:00:00Z",
  "validUntil": "2027-09-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/cal/1/status-list.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://nmi.vc4qi.example/status/cal/1#list",
    "type": "BitstringStatusList",
    "statusPurpose": "revocation",
    "encodedList": "uH4sIAAAAAAACA-3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAIC3AYbSVKsAQAAA"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://nmi.vc4qi.example/controller#key-1",
    "created": "2026-09-01T00:00:00Z",
    "proofValue": "zYsDnkyuFUpKvaVXvUQyhzJAmkfPmFzyG1dGqR8tQspELuDynWEWcz4DGTLZvYb7cHP6VTwzz9MBWtuSeRGyMzso"
  }
}
` }, { uri: "https://testlab.vc4qi.example/status/cal/1", mediaType: "application/vc", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-y9uxEJ9izNpsDfSV8p1A4cmz6kFEcbUbHMnrody+ShPJfLbb/jr19zIiUyFyMbhV", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://testlab.vc4qi.example/status/cal/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://testlab.vc4qi.example/controller",
  "validFrom": "2026-09-01T00:00:00Z",
  "validUntil": "2027-09-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/cal/1/status-list.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://testlab.vc4qi.example/status/cal/1#list",
    "type": "BitstringStatusList",
    "statusPurpose": "revocation",
    "encodedList": "uH4sIAAAAAAACA-3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAIC3AYbSVKsAQAAA"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://testlab.vc4qi.example/controller#key-1",
    "created": "2026-09-01T00:00:00Z",
    "proofValue": "z3xiVTrnZGWa2ANLekhQp3WFC7ZyNP2qXPkHDf1a1ur49zSujCa4GtNoq7xzvmD6AQLzwNTEKaX96sWaXTsXShPg9"
  }
}
` }, { uri: "https://nab.vc4qi.example/credentials/CAL-A", mediaType: "application/vc", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-YVA8s1tooesmrhniZbMag3VrPyJ0clZRLz9CkHx3xVKk3zHmjPRgnEPbE3JqNXj5", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/cal/1"
  ],
  "id": "https://nab.vc4qi.example/credentials/CAL-A",
  "type": [
    "VerifiableCredential",
    "CalAccreditation"
  ],
  "issuer": "https://nab.vc4qi.example/controller",
  "validFrom": "2025-01-01T00:00:00Z",
  "validUntil": "2030-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/cal/1/accreditation.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://lab.vc4qi.example/controller",
    "permittedActivity": [
      "https://vc4qi.example/bindings/cal/1#issueCalibrationCertificate",
      "https://vc4qi.example/bindings/cal/1#maintainCalibrationScope"
    ],
    "scope": [
      {
        "id": "https://nab.vc4qi.example/credentials/CAL-A#scope-pressure",
        "quantityKindIri": "https://vc4qi.example/bindings/cal/1#Pressure",
        "allowedMethodIris": [
          "https://vc4qi.example/bindings/cal/1#PressureComparison"
        ],
        "range": {
          "from": "0",
          "to": "10",
          "unit": "MPa"
        },
        "cmcFloor": {
          "value": "0.5",
          "unit": "kPa"
        }
      }
    ]
  },
  "credentialStatus": {
    "id": "https://nab.vc4qi.example/status/cal/1#0",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "0",
    "statusListCredential": "https://nab.vc4qi.example/status/cal/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://nab.vc4qi.example/controller#key-1",
    "created": "2025-01-01T00:00:00Z",
    "proofValue": "z2SBsbcPAD7mbEv9JUcc5krV2tCme3cGcoirqeTiTkkUwiDJ7CNtw98WUJ4JtirPMPxMLvWxpFuGd69KpR9jLAUV6"
  }
}
` }, { uri: "https://lab.vc4qi.example/credentials/DCC-1", mediaType: "application/vc", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-j6Dr/rdrB+r4y25c7k2FM8TS3Sof2kDwF35Zth2fBf/pkEzuiWuzlLCo7SyhcD9o", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/cal/1"
  ],
  "id": "https://lab.vc4qi.example/credentials/DCC-1",
  "type": [
    "VerifiableCredential",
    "CalCertificate"
  ],
  "issuer": "https://lab.vc4qi.example/controller",
  "validFrom": "2026-01-15T00:00:00Z",
  "validUntil": "2028-01-15T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/cal/1/certificate.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "urn:vc4qi-example:item:pressure-transmitter-1",
    "activityTime": "2026-01-14T12:00:00Z",
    "measurementGroups": [
      {
        "id": "https://lab.vc4qi.example/credentials/DCC-1#g1",
        "quantityKindIri": "https://vc4qi.example/bindings/cal/1#Pressure",
        "methodIris": [
          "https://vc4qi.example/bindings/cal/1#PressureComparison"
        ],
        "results": [
          {
            "value": "1000",
            "unit": "kPa",
            "expandedUncertainty": "0.8",
            "coverageFactor": "2"
          }
        ]
      },
      {
        "id": "https://lab.vc4qi.example/credentials/DCC-1#g2",
        "quantityKindIri": "https://vc4qi.example/bindings/cal/1#Pressure",
        "methodIris": [
          "https://vc4qi.example/bindings/cal/1#PressureComparison"
        ],
        "results": [
          {
            "value": "5",
            "unit": "MPa",
            "expandedUncertainty": "0.002",
            "coverageFactor": "2"
          }
        ]
      }
    ]
  },
  "termsOfUse": [
    {
      "type": "CalAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://nab.vc4qi.example/credentials/CAL-A",
        "type": "CalAccreditation"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://nab.vc4qi.example/credentials/CAL-A",
      "digestSRI": "sha384-YVA8s1tooesmrhniZbMag3VrPyJ0clZRLz9CkHx3xVKk3zHmjPRgnEPbE3JqNXj5"
    }
  ],
  "credentialStatus": {
    "id": "https://lab.vc4qi.example/status/cal/1#0",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "0",
    "statusListCredential": "https://lab.vc4qi.example/status/cal/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://lab.vc4qi.example/controller#key-1",
    "created": "2026-01-15T00:00:00Z",
    "proofValue": "zbyayrcdXGnxcZaN8sdEKwNFVTHKYVRSfPCGqJ3S8qiqa38krvBvMiM25A2RgUxvAbcRhe3gQ3cKYs8ufP8HcLmD"
  }
}
` }, { uri: "https://lab.vc4qi.example/credentials/CAL-O", mediaType: "application/vc", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-zxyHyZmvVmWe3gO0PlKjcUkBHdoKJXzgcP/XCdNMlVsYoL0NElMAbi9mbPNk+JW9", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/cal/1"
  ],
  "id": "https://lab.vc4qi.example/credentials/CAL-O",
  "type": [
    "VerifiableCredential",
    "CalOperationalScope"
  ],
  "issuer": "https://lab.vc4qi.example/controller",
  "validFrom": "2025-06-01T00:00:00Z",
  "validUntil": "2030-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/cal/1/operational-scope.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://lab.vc4qi.example/controller",
    "permittedActivity": [
      "https://vc4qi.example/bindings/cal/1#issueCalibrationCertificate"
    ],
    "scope": [
      {
        "id": "https://lab.vc4qi.example/credentials/CAL-O#scope-pressure-low",
        "quantityKindIri": "https://vc4qi.example/bindings/cal/1#Pressure",
        "allowedMethodIris": [
          "https://vc4qi.example/bindings/cal/1#PressureComparison"
        ],
        "range": {
          "from": "0",
          "to": "2",
          "unit": "MPa"
        },
        "cmcFloor": {
          "value": "0.8",
          "unit": "kPa"
        }
      }
    ]
  },
  "termsOfUse": [
    {
      "type": "CalAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://nab.vc4qi.example/credentials/CAL-A",
        "type": "CalAccreditation"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://nab.vc4qi.example/credentials/CAL-A",
      "digestSRI": "sha384-YVA8s1tooesmrhniZbMag3VrPyJ0clZRLz9CkHx3xVKk3zHmjPRgnEPbE3JqNXj5"
    }
  ],
  "credentialStatus": {
    "id": "https://lab.vc4qi.example/status/cal/1#1",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "1",
    "statusListCredential": "https://lab.vc4qi.example/status/cal/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://lab.vc4qi.example/controller#key-1",
    "created": "2025-06-01T00:00:00Z",
    "proofValue": "z33o4A3mmcGhGsjbs4e3HTPMYqat27sSvBv9heG1HUh5BCE2CmzjTUxWWQE4vGeR4hzpckC9FpQtBqohrZCozBUWE"
  }
}
` }, { uri: "https://lab.vc4qi.example/credentials/DCC-2", mediaType: "application/vc", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-dYbei/fQQ/OFo2Ad2jyaxXZtyWVRFo0busmDl848bcXzyRmxK/aelD9urb1rDgKP", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/cal/1"
  ],
  "id": "https://lab.vc4qi.example/credentials/DCC-2",
  "type": [
    "VerifiableCredential",
    "CalCertificate"
  ],
  "issuer": "https://lab.vc4qi.example/controller",
  "validFrom": "2026-03-02T00:00:00Z",
  "validUntil": "2028-03-02T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/cal/1/certificate.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "urn:vc4qi-example:item:pressure-gauge-7",
    "activityTime": "2026-03-01T12:00:00Z",
    "measurementGroups": [
      {
        "id": "https://lab.vc4qi.example/credentials/DCC-2#g1",
        "quantityKindIri": "https://vc4qi.example/bindings/cal/1#Pressure",
        "methodIris": [
          "https://vc4qi.example/bindings/cal/1#PressureComparison"
        ],
        "results": [
          {
            "value": "1000",
            "unit": "kPa",
            "expandedUncertainty": "0.9",
            "coverageFactor": "2"
          }
        ]
      }
    ]
  },
  "termsOfUse": [
    {
      "type": "CalAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://lab.vc4qi.example/credentials/CAL-O",
        "type": "CalOperationalScope"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://lab.vc4qi.example/credentials/CAL-O",
      "digestSRI": "sha384-zxyHyZmvVmWe3gO0PlKjcUkBHdoKJXzgcP/XCdNMlVsYoL0NElMAbi9mbPNk+JW9"
    }
  ],
  "credentialStatus": {
    "id": "https://lab.vc4qi.example/status/cal/1#2",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "2",
    "statusListCredential": "https://lab.vc4qi.example/status/cal/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://lab.vc4qi.example/controller#key-1",
    "created": "2026-03-02T00:00:00Z",
    "proofValue": "z44rPwBX8sxc1cntKHQyxh1MpAF1QCP7tkhTiiW5ZnyWZ7FJ9o9mNHA4RrE9zPS46HyYYnUBg3GpqG4ah3h7gPUxb"
  }
}
` }, { uri: "https://ministry.vc4qi.example/credentials/CAL-M", mediaType: "application/vc", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-daQ/BfjXOWD/lgmmuQtB/lKbNdFQpxCOgTZgAtq/0Dd3jCScNmkSCOUxXj0xe2HY", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/cal/1"
  ],
  "id": "https://ministry.vc4qi.example/credentials/CAL-M",
  "type": [
    "VerifiableCredential",
    "CalLegalMandate"
  ],
  "issuer": "https://ministry.vc4qi.example/controller",
  "validFrom": "2024-01-01T00:00:00Z",
  "validUntil": "2034-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/cal/1/legal-mandate.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://nmi.vc4qi.example/controller",
    "permittedActivity": [
      "https://vc4qi.example/bindings/cal/1#issueCalibrationCertificate"
    ],
    "scope": [
      {
        "id": "https://ministry.vc4qi.example/credentials/CAL-M#scope-pressure-primary",
        "quantityKindIri": "https://vc4qi.example/bindings/cal/1#Pressure",
        "allowedMethodIris": [
          "https://vc4qi.example/bindings/cal/1#PressureBalance"
        ],
        "range": {
          "from": "0",
          "to": "100",
          "unit": "MPa"
        },
        "cmcFloor": {
          "value": "0.2",
          "unit": "kPa"
        }
      }
    ]
  },
  "credentialStatus": {
    "id": "https://ministry.vc4qi.example/status/cal/1#0",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "0",
    "statusListCredential": "https://ministry.vc4qi.example/status/cal/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://ministry.vc4qi.example/controller#key-1",
    "created": "2024-01-01T00:00:00Z",
    "proofValue": "z5LxdfJtTs14mZXsMJ5G1SQJfqvRwDrSgqRmKst58AmEE4X4MeXUPjtjQ8VrbPhouUzBvotPhzPhszRTK364Bd1xt"
  }
}
` }, { uri: "https://nmi.vc4qi.example/credentials/DCC-N", mediaType: "application/vc", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-nUy3s8+GbSZdKKUv241rM39QC8O287h8DYWAWcQs7UI6gTt6UIgyMQ54xC36kKMX", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/cal/1"
  ],
  "id": "https://nmi.vc4qi.example/credentials/DCC-N",
  "type": [
    "VerifiableCredential",
    "CalCertificate"
  ],
  "issuer": "https://nmi.vc4qi.example/controller",
  "validFrom": "2026-04-02T00:00:00Z",
  "validUntil": "2028-04-02T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/cal/1/certificate.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "urn:vc4qi-example:item:transfer-standard-3",
    "activityTime": "2026-04-01T12:00:00Z",
    "measurementGroups": [
      {
        "id": "https://nmi.vc4qi.example/credentials/DCC-N#g1",
        "quantityKindIri": "https://vc4qi.example/bindings/cal/1#Pressure",
        "methodIris": [
          "https://vc4qi.example/bindings/cal/1#PressureBalance"
        ],
        "results": [
          {
            "value": "20",
            "unit": "MPa",
            "expandedUncertainty": "0.4",
            "coverageFactor": "2"
          }
        ]
      }
    ]
  },
  "termsOfUse": [
    {
      "type": "CalAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://ministry.vc4qi.example/credentials/CAL-M",
        "type": "CalLegalMandate"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://ministry.vc4qi.example/credentials/CAL-M",
      "digestSRI": "sha384-daQ/BfjXOWD/lgmmuQtB/lKbNdFQpxCOgTZgAtq/0Dd3jCScNmkSCOUxXj0xe2HY"
    }
  ],
  "credentialStatus": {
    "id": "https://nmi.vc4qi.example/status/cal/1#0",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "0",
    "statusListCredential": "https://nmi.vc4qi.example/status/cal/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://nmi.vc4qi.example/controller#key-1",
    "created": "2026-04-02T00:00:00Z",
    "proofValue": "z3n6e9P87EtpmqsLWMVy9RSNJYb2WtqkPrqxWLTbqdQYCTD8wyN4eNzcAmFJvAd9HBMVT5wZAohBCx3yh6gY5Y3PF"
  }
}
` }, { uri: "https://nab.vc4qi.example/credentials/CAL-T", mediaType: "application/vc", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-SgsM4TLAr/RkDqMqwpMFqoV5RasTPuJ0of+5ZU8Z0A1hGtEh10HlQn9Q3Jxbh57/", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/cal/1"
  ],
  "id": "https://nab.vc4qi.example/credentials/CAL-T",
  "type": [
    "VerifiableCredential",
    "CalAccreditation"
  ],
  "issuer": "https://nab.vc4qi.example/controller",
  "validFrom": "2025-01-01T00:00:00Z",
  "validUntil": "2030-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/cal/1/accreditation.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://testlab.vc4qi.example/controller",
    "permittedActivity": [
      "https://vc4qi.example/bindings/cal/1#issueTestReport"
    ],
    "scope": [
      {
        "id": "https://nab.vc4qi.example/credentials/CAL-T#scope-pressure-test",
        "quantityKindIri": "https://vc4qi.example/bindings/cal/1#Pressure",
        "allowedMethodIris": [
          "https://vc4qi.example/bindings/cal/1#HydrostaticPressureTest"
        ],
        "range": {
          "from": "0",
          "to": "25",
          "unit": "MPa"
        }
      }
    ]
  },
  "credentialStatus": {
    "id": "https://nab.vc4qi.example/status/cal/1#1",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "1",
    "statusListCredential": "https://nab.vc4qi.example/status/cal/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://nab.vc4qi.example/controller#key-1",
    "created": "2025-01-01T00:00:00Z",
    "proofValue": "z5aKiiUx3bPVarcXcJccB4stBeaQCWhws9VneDc7LxkTanaDozPZJQD444f3UW8NXLVhYg3kMywTL8GLctv4czgDN"
  }
}
` }, { uri: "https://testlab.vc4qi.example/credentials/REPORT-1", mediaType: "application/vc", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-MUbxnoHnWljB8rtfVBZCBEiVkzEtHBps+jUhrZrKhl/jCHe5bEo5kO2QgQPwnjjv", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/cal/1"
  ],
  "id": "https://testlab.vc4qi.example/credentials/REPORT-1",
  "type": [
    "VerifiableCredential",
    "CalTestReport"
  ],
  "issuer": "https://testlab.vc4qi.example/controller",
  "validFrom": "2026-06-11T00:00:00Z",
  "validUntil": "2031-06-11T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/cal/1/test-report.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "urn:vc4qi-example:item:valve-12",
    "activityTime": "2026-06-10T09:00:00Z",
    "instrumentIri": "urn:vc4qi-example:item:pressure-transmitter-1",
    "measurementGroups": [
      {
        "id": "https://testlab.vc4qi.example/credentials/REPORT-1#g1",
        "quantityKindIri": "https://vc4qi.example/bindings/cal/1#Pressure",
        "methodIris": [
          "https://vc4qi.example/bindings/cal/1#HydrostaticPressureTest"
        ],
        "results": [
          {
            "value": "2",
            "unit": "MPa",
            "expandedUncertainty": "0.004",
            "coverageFactor": "2"
          }
        ]
      }
    ]
  },
  "termsOfUse": [
    {
      "type": "CalAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://nab.vc4qi.example/credentials/CAL-T",
        "type": "CalAccreditation"
      }
    }
  ],
  "evidence": [
    {
      "id": "https://lab.vc4qi.example/credentials/DCC-1",
      "type": "CalCalibrationReference"
    }
  ],
  "relatedResource": [
    {
      "id": "https://nab.vc4qi.example/credentials/CAL-T",
      "digestSRI": "sha384-SgsM4TLAr/RkDqMqwpMFqoV5RasTPuJ0of+5ZU8Z0A1hGtEh10HlQn9Q3Jxbh57/"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/DCC-1",
      "digestSRI": "sha384-j6Dr/rdrB+r4y25c7k2FM8TS3Sof2kDwF35Zth2fBf/pkEzuiWuzlLCo7SyhcD9o"
    }
  ],
  "credentialStatus": {
    "id": "https://testlab.vc4qi.example/status/cal/1#0",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "0",
    "statusListCredential": "https://testlab.vc4qi.example/status/cal/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://testlab.vc4qi.example/controller#key-1",
    "created": "2026-06-11T00:00:00Z",
    "proofValue": "z2ioUJUw7DNVUxgdBUwD1MphYhEwVAbzrFcnBci96naFJj1Za42W9pgaEkn89oXKguREiMr4E3t2oHA27okiiKpMb"
  }
}
` }] }, gs: { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/gs/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/bindings.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Migrated GS certification binding for the gs-scheme-authorization use case, plus an experimental GS-mark credential for one unit and an experimental product passport shaped after the ESPR DPP whose GS-mark entry is supported by that credential (not ESPR conformance). The gate 0-6 evaluators for the competence-and-scheme-permission and gs-certified-product routes, their coverage and the certificate's required studies (type examination and factory inspection) are implemented; statutory GS routes, application assessments and conformity rules are not.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/gs/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/gs/1#GsAccreditation", "https://vc4qi.example/bindings/gs/1#GsSchemeAuthorization", "https://vc4qi.example/bindings/gs/1#GsCertificate", "https://vc4qi.example/bindings/gs/1#GsMarkCredential", "https://vc4qi.example/bindings/gs/1#ProductPassport", "https://vc4qi.example/bindings/gs/1#GsTestReport", "https://vc4qi.example/bindings/gs/1#GsInspectionReport", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential"], schemaUris: ["https://vc4qi.example/schemas/gs/1/accreditation.json", "https://vc4qi.example/schemas/gs/1/scheme-authorization.json", "https://vc4qi.example/schemas/gs/1/certificate.json", "https://vc4qi.example/schemas/gs/1/mark-credential.json", "https://vc4qi.example/schemas/gs/1/product-passport.json", "https://vc4qi.example/schemas/gs/1/test-report.json", "https://vc4qi.example/schemas/gs/1/inspection-report.json", "https://vc4qi.example/schemas/gs/1/status-list.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/gs-v1/catalog.json", orderedCollections: [], nativeRepresentation: "A JSON-LD simplification of a GS certificate; no native scheme document is carried" }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/gs/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/gs/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/bindings/gs/1#authorizationCredential" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/gs/1#activityTime" }, { fact: "certification", nativePath: "/credentialSubject/certification", expandedIri: "https://vc4qi.example/bindings/gs/1#certification" }, { fact: "productModel", nativePath: "/credentialSubject/productModelIri", expandedIri: "https://vc4qi.example/bindings/gs/1#productModel" }, { fact: "marking", nativePath: "/credentialSubject/marking", expandedIri: "https://vc4qi.example/bindings/gs/1#marking" }, { fact: "passportGsMarkEntry", nativePath: "/credentialSubject/complianceInformation/gsMark", expandedIri: "https://vc4qi.example/bindings/gs/1#gsMark" }, { fact: "responsibleEconomicOperator", nativePath: "/credentialSubject/economicOperatorIri", expandedIri: "https://vc4qi.example/bindings/gs/1#economicOperator" }, { fact: "requiredStudy", nativePath: "/evidence/*/id", expandedIri: "https://www.w3.org/2018/credentials#evidence" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 2 }, authorizingReferenceSelection: "by-declared-reference-type-per-route-half; resolved credential type must match (else contradicted); several of one type not_established", selectedClaims: "the certification statement at /credentialSubject/certification; for a GS-mark credential its marking at /credentialSubject/marking; for a product passport only the GS-mark entry at /credentialSubject/complianceInformation/gsMark (other passport sections have no interpretation in this binding)", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse authorizationCredential references on the credential chain" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/bindings/gs/1#GsAuthorizationPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { certifyProducts: "https://vc4qi.example/bindings/gs/1#certifyProducts", testProducts: "https://vc4qi.example/bindings/gs/1#testProducts", awardGsMark: "https://vc4qi.example/bindings/gs/1#awardGsMark" }, rules: ["The accreditation (competence) and the scheme authorization each name the certification body issuing the certificate.", "The accreditation permits certifying products; the scheme authorization permits awarding the GS mark.", "The accreditation issuer is anchored for accrediting certification bodies; the scheme authorization issuer for authorizing GS certification.", "Both grants were in force at the certificate's activity time.", "A certificate needs a type examination of its model covering its category and standards, and a factory inspection of its manufacturer; each passed, precedes the certification and is issued under an anchored accreditation of its issuer that permits the activity (type examination: testing, under an issuer anchored for accrediting testing laboratories; factory inspection: certification, which includes factory inspection, under an issuer anchored for accrediting certification bodies) and was in force at the study.", "A GS-mark credential's marking must name the credential's own model, and needs a GS certificate that names the credential issuer as manufacturer, certifies that model, was in force when the unit was placed on the market and itself holds the complete route.", "A product passport is issued by the responsible economic operator it names. Its GS-mark entry must name the passport's model and is supported by exactly one cited GS-mark credential for the same unit, from the same issuer and for the same model, which itself holds its complete route."] }, scopeAndMapping: { mappingVersion: "gs-experimental-mapping-1", dimensions: ["productCategoryIri", "standardIris"], standardRule: "one competence record must cover the category and every certified standard; a record listing standards against a certification naming none is not_established (no empty-array bypass)", schemeRule: "one scheme record must cover the category", unsupported: ["display-label-equality", "standard-edition-succession", "product-variant-inheritance"] }, routesAndRestrictions: { installedCertificateRoutes: { "competence-and-scheme-permission": ["A-referenced", "A-grantee-is-issuer", "A-permits-certification", "A-issuer-is-accreditation-anchor", "S-referenced", "S-grantee-is-issuer", "S-permits-GS-mark", "S-issuer-is-scheme-anchor", "A-and-S-in-force-at-activity", "claim-covered-by-A-and-S"], "gs-certified-product": ["C-referenced", "C-names-mark-issuer-as-manufacturer", "C-in-force-at-mark-activity", "C-holds-competence-and-scheme-permission", "C-certification-covered", "C-certifies-the-mark-model", "marking-names-the-credential-model"], "responsible-economic-operator": ["passport-issuer-is-named-economic-operator", "gs-mark-entry-supported-by-cited-gs-mark-credential"] }, globalRestrictions: [], routeComposition: "AND-within-route-OR-between-complete-routes" }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, status: "authenticated-current-revocation-status-required", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { requiredSupport: "type examination (GsTypeExaminationReference to a GsTestReport) and factory inspection (GsFactoryInspectionReference to a GsInspectionReport) of the certificate", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/acceptance-ledger.csv", testVectorRoots: ["bindings/experimental/gs-v1/test-vectors"], unsupported: ["production-accreditation", "real-gs-scheme-rules", "legal-effect", "application-assessments", "public-example-namespace-resolution", "wallet-interoperability", "timestamp-service"] } }, profiles: { "gs-verifier-1": { id: "https://vc4qi.example/profiles/gs-verifier", version: "1", status: "experimental", description: "Verifier-owned reliance profile for gs-scheme-authorization under the experimental GS certification v1 binding: the GS mark is relied on only through competence AND scheme permission. A fictional profile example, not a universal GS or legal rule.", binding: { id: "https://vc4qi.example/bindings/gs/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-certification-bodies", "accredit-testing-laboratories"] }, { id: "https://zls.vc4qi.example/controller", purposes: ["authorize-gs-certification"] }], authority: { certificateRoutes: ["competence-and-scheme-permission"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] } }, "gs-verifier-dpp-1": { id: "https://vc4qi.example/profiles/gs-verifier-dpp", version: "1", status: "experimental", description: "Verifier-owned reliance profile for experimental product passports (shaped after the EU Digital Product Passport, not ESPR conformance) under the GS certification v1 binding: the passport is relied on as the declaration of the responsible economic operator it names, and its GS-mark entry only through the cited GS-mark credential, which keeps its own route. Fictional.", binding: { id: "https://vc4qi.example/bindings/gs/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-certification-bodies", "accredit-testing-laboratories"] }, { id: "https://zls.vc4qi.example/controller", purposes: ["authorize-gs-certification"] }], authority: { certificateRoutes: ["responsible-economic-operator"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] } }, "gs-verifier-mark-1": { id: "https://vc4qi.example/profiles/gs-verifier-mark", version: "1", status: "experimental", description: "Verifier-owned reliance profile for experimental GS-mark credentials under the GS certification v1 binding: a unit's GS-mark claim is relied on only through a GS certificate for its model that names the manufacturer and itself holds competence AND scheme permission. Fictional; today's GS scheme has no per-unit credential.", binding: { id: "https://vc4qi.example/bindings/gs/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-certification-bodies", "accredit-testing-laboratories"] }, { id: "https://zls.vc4qi.example/controller", purposes: ["authorize-gs-certification"] }], authority: { certificateRoutes: ["gs-certified-product"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] } } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
}` }, { uri: "https://vc4qi.example/contexts/gs/1", mediaType: "application/ld+json", origin: "VC4QI experimental GS certification binding (repository-owned fictional fixture)", version: "1", digestSRI: "sha384-+17piQyDfap55VgucJGZ6bBNvx0XiTDwJ8rEo2p2K/Hiyzj5wZ7TVOVrRIKOBDuj", text: `{
  "@context": {
    "@version": 1.1,
    "@protected": true,
    "gs": "https://vc4qi.example/bindings/gs/1#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",

    "GsAccreditation": "gs:GsAccreditation",
    "GsSchemeAuthorization": "gs:GsSchemeAuthorization",
    "GsCertificate": "gs:GsCertificate",
    "GsMarkCredential": "gs:GsMarkCredential",
    "ProductPassport": "gs:ProductPassport",
    "GsTestReport": "gs:GsTestReport",
    "GsInspectionReport": "gs:GsInspectionReport",
    "GsTypeExaminationReference": "gs:GsTypeExaminationReference",
    "GsFactoryInspectionReference": "gs:GsFactoryInspectionReference",
    "GsMarkCredentialReference": "gs:GsMarkCredentialReference",
    "GsAuthorizationPolicy": "gs:GsAuthorizationPolicy",

    "authorizationCredential": "gs:authorizationCredential",
    "permittedActivity": {"@id": "gs:permittedActivity", "@type": "@id", "@container": "@set"},
    "scope": {"@id": "gs:scope", "@container": "@set"},
    "productCategoryIri": {"@id": "gs:productCategory", "@type": "@id"},
    "standardIris": {"@id": "gs:standards", "@type": "@id", "@container": "@set"},

    "activityTime": {"@id": "gs:activityTime", "@type": "xsd:dateTime"},
    "certification": "gs:certification",
    "manufacturerIri": {"@id": "gs:manufacturer", "@type": "@id"},
    "productModelIri": {"@id": "gs:productModel", "@type": "@id"},
    "marking": "gs:marking",
    "productName": "gs:productName",
    "gtin": "gs:gtin",
    "commodityCode": "gs:commodityCode",
    "economicOperatorIri": {"@id": "gs:economicOperator", "@type": "@id"},
    "facilityIri": {"@id": "gs:facility", "@type": "@id"},
    "complianceInformation": "gs:complianceInformation",
    "gsMark": "gs:gsMark",
    "technicalData": "gs:technicalData",
    "ratedPowerW": {"@id": "gs:ratedPowerW", "@type": "xsd:decimal"},
    "sustainability": "gs:sustainability",
    "sparePartsAvailabilityYears": {"@id": "gs:sparePartsAvailabilityYears", "@type": "xsd:decimal"},
    "markIri": {"@id": "gs:mark", "@type": "@id"},
    "outcomeIri": {"@id": "gs:outcome", "@type": "@id"}
  }
}
` }, { uri: "https://vc4qi.example/schemas/gs/1/accreditation.json", mediaType: "application/schema+json", origin: "VC4QI experimental GS certification binding (generated by scripts/gs-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-tqnvm1aDoJlrt5oHsxQEGrvIcEAICDg6sBenpzv90tpsoPodfAhbHWHPBinZa+w6", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/gs/1/accreditation.json",
  "title": "Accreditation (competence)",
  "description": "Experimental VC4QI GS certification binding v1 fixture schema. Not an external standard.",
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
        "https://vc4qi.example/contexts/gs/1"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "GsAccreditation"
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
          "const": "https://vc4qi.example/schemas/gs/1/accreditation.json"
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
              "https://vc4qi.example/bindings/gs/1#certifyProducts",
              "https://vc4qi.example/bindings/gs/1#testProducts"
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
              "productCategoryIri",
              "standardIris"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uri"
              },
              "productCategoryIri": {
                "type": "string",
                "format": "uri"
              },
              "standardIris": {
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
` }, { uri: "https://vc4qi.example/schemas/gs/1/scheme-authorization.json", mediaType: "application/schema+json", origin: "VC4QI experimental GS certification binding (generated by scripts/gs-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-dnkZbNFaSZVyoDFWqHwvUgwmtNMQ9SLCdgOsxZM6znXH6mznVscKLhnQezbiJeeW", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/gs/1/scheme-authorization.json",
  "title": "GS scheme authorization",
  "description": "Experimental VC4QI GS certification binding v1 fixture schema. Not an external standard.",
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
        "https://vc4qi.example/contexts/gs/1"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "GsSchemeAuthorization"
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
          "const": "https://vc4qi.example/schemas/gs/1/scheme-authorization.json"
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
              "https://vc4qi.example/bindings/gs/1#awardGsMark"
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
              "productCategoryIri"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uri"
              },
              "productCategoryIri": {
                "type": "string",
                "format": "uri"
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
` }, { uri: "https://vc4qi.example/schemas/gs/1/test-report.json", mediaType: "application/schema+json", origin: "VC4QI experimental GS certification binding (generated by scripts/gs-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-w1/p8+JK+qxeLHe6AYWKW76RD455HZzMqqu3ZjKWrCj2Ot5AjR8iSeMH0VsoTACC", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/gs/1/test-report.json",
  "title": "Type-examination test report",
  "description": "Experimental VC4QI GS certification binding v1 fixture schema. Not an external standard.",
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
        "https://vc4qi.example/contexts/gs/1"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "GsTestReport"
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
          "const": "https://vc4qi.example/schemas/gs/1/test-report.json"
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
        "productModelIri",
        "productCategoryIri",
        "standardIris",
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
        "productModelIri": {
          "type": "string",
          "format": "uri"
        },
        "productCategoryIri": {
          "type": "string",
          "format": "uri"
        },
        "standardIris": {
          "type": "array",
          "minItems": 1,
          "uniqueItems": true,
          "items": {
            "type": "string",
            "format": "uri"
          }
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
            "const": "GsAuthorizationPolicy"
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
                  "GsAccreditation",
                  "GsSchemeAuthorization",
                  "GsCertificate"
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
` }, { uri: "https://vc4qi.example/schemas/gs/1/inspection-report.json", mediaType: "application/schema+json", origin: "VC4QI experimental GS certification binding (generated by scripts/gs-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-NSR7USbE7gWd/IpXcLxHKuAV6HOeB6Vw3aWb52yok2AKOTQani9XWMKWWioB45ha", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/gs/1/inspection-report.json",
  "title": "Factory inspection report",
  "description": "Experimental VC4QI GS certification binding v1 fixture schema. Not an external standard.",
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
        "https://vc4qi.example/contexts/gs/1"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "GsInspectionReport"
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
          "const": "https://vc4qi.example/schemas/gs/1/inspection-report.json"
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
        "manufacturerIri",
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
        "manufacturerIri": {
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
            "const": "GsAuthorizationPolicy"
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
                  "GsAccreditation",
                  "GsSchemeAuthorization",
                  "GsCertificate"
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
` }, { uri: "https://vc4qi.example/schemas/gs/1/certificate.json", mediaType: "application/schema+json", origin: "VC4QI experimental GS certification binding (generated by scripts/gs-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-3t+JqtDhJilOcnDbSo9y0f/klceHJ6+p3Ci+3XE22kO6+tAauoQ3rIoWyESBatNR", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/gs/1/certificate.json",
  "title": "GS certificate",
  "description": "Experimental VC4QI GS certification binding v1 fixture schema. Not an external standard.",
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
        "https://vc4qi.example/contexts/gs/1"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "GsCertificate"
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
          "const": "https://vc4qi.example/schemas/gs/1/certificate.json"
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
        "certification"
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
        "manufacturerIri": {
          "type": "string",
          "format": "uri"
        },
        "certification": {
          "type": "object",
          "required": [
            "productCategoryIri"
          ],
          "properties": {
            "productCategoryIri": {
              "type": "string",
              "format": "uri"
            },
            "standardIris": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "string",
                "format": "uri"
              }
            }
          },
          "additionalProperties": false
        }
      },
      "additionalProperties": false
    },
    "termsOfUse": {
      "type": "array",
      "minItems": 1,
      "maxItems": 3,
      "items": {
        "type": "object",
        "required": [
          "type",
          "authorizationCredential"
        ],
        "properties": {
          "type": {
            "const": "GsAuthorizationPolicy"
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
                  "GsAccreditation",
                  "GsSchemeAuthorization",
                  "GsCertificate"
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
      "maxItems": 4,
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
            "enum": [
              "GsTypeExaminationReference",
              "GsFactoryInspectionReference"
            ]
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
` }, { uri: "https://vc4qi.example/schemas/gs/1/mark-credential.json", mediaType: "application/schema+json", origin: "VC4QI experimental GS certification binding (generated by scripts/gs-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-3Iev0J+HP1yX0tDaaQjfnOSX1v/ZsIpdIfgC+rK0D3hOxPXVvx/6qd/DsaUKDbxe", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/gs/1/mark-credential.json",
  "title": "GS-mark credential (experimental)",
  "description": "Experimental VC4QI GS certification binding v1 fixture schema. Not an external standard.",
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
        "https://vc4qi.example/contexts/gs/1"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "GsMarkCredential"
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
          "const": "https://vc4qi.example/schemas/gs/1/mark-credential.json"
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
        "productModelIri",
        "marking"
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
        "productModelIri": {
          "type": "string",
          "format": "uri"
        },
        "marking": {
          "type": "object",
          "required": [
            "markIri",
            "productModelIri"
          ],
          "properties": {
            "markIri": {
              "type": "string",
              "format": "uri"
            },
            "productModelIri": {
              "type": "string",
              "format": "uri"
            }
          },
          "additionalProperties": false
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
            "const": "GsAuthorizationPolicy"
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
                  "GsAccreditation",
                  "GsSchemeAuthorization",
                  "GsCertificate"
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
` }, { uri: "https://vc4qi.example/schemas/gs/1/product-passport.json", mediaType: "application/schema+json", origin: "VC4QI experimental GS certification binding (generated by scripts/gs-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-lRDfWp2KaKaHmDp20tW1V9YWEj46pcJGZnaCJiFBWjzqGn4o0pw/WQUI0jazV/aI", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/gs/1/product-passport.json",
  "title": "Product passport (experimental)",
  "description": "Experimental VC4QI GS certification binding v1 fixture schema. Not an external standard.",
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
    "evidence",
    "relatedResource"
  ],
  "properties": {
    "@context": {
      "const": [
        "https://www.w3.org/ns/credentials/v2",
        "https://vc4qi.example/contexts/gs/1"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "ProductPassport"
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
          "const": "https://vc4qi.example/schemas/gs/1/product-passport.json"
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
        "productName",
        "productModelIri",
        "gtin",
        "commodityCode",
        "economicOperatorIri",
        "facilityIri",
        "technicalData",
        "sustainability",
        "complianceInformation"
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
        "productName": {
          "type": "string",
          "minLength": 1
        },
        "productModelIri": {
          "type": "string",
          "format": "uri"
        },
        "gtin": {
          "type": "string",
          "pattern": "^[0-9]{13,14}$"
        },
        "commodityCode": {
          "type": "string",
          "pattern": "^[0-9]{8}$"
        },
        "economicOperatorIri": {
          "type": "string",
          "format": "uri"
        },
        "facilityIri": {
          "type": "string",
          "format": "uri"
        },
        "technicalData": {
          "type": "object",
          "required": [
            "ratedPowerW"
          ],
          "properties": {
            "ratedPowerW": {
              "type": "string",
              "pattern": "^(0|[1-9][0-9]*)(\\\\.[0-9]+)?$"
            }
          },
          "additionalProperties": false
        },
        "sustainability": {
          "type": "object",
          "required": [
            "sparePartsAvailabilityYears"
          ],
          "properties": {
            "sparePartsAvailabilityYears": {
              "type": "string",
              "pattern": "^(0|[1-9][0-9]*)(\\\\.[0-9]+)?$"
            }
          },
          "additionalProperties": false
        },
        "complianceInformation": {
          "type": "object",
          "required": [
            "gsMark"
          ],
          "properties": {
            "gsMark": {
              "type": "object",
              "required": [
                "markIri",
                "productModelIri"
              ],
              "properties": {
                "markIri": {
                  "type": "string",
                  "format": "uri"
                },
                "productModelIri": {
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
      "additionalProperties": false
    },
    "evidence": {
      "type": "array",
      "minItems": 1,
      "maxItems": 1,
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
            "const": "GsMarkCredentialReference"
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
` }, { uri: "https://vc4qi.example/schemas/gs/1/status-list.json", mediaType: "application/schema+json", origin: "VC4QI experimental GS certification binding (generated by scripts/gs-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-Xm0CjZJRP5m9rdO7yfgWzvB50zoryMRwWj52sIqNZZBvJG24G5e/8+ZOkIetjESa", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/gs/1/status-list.json",
  "title": "Bitstring Status List credential for GS v1 fixtures",
  "description": "Experimental VC4QI GS certification binding v1 fixture schema. Not an external standard.",
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
          "const": "https://vc4qi.example/schemas/gs/1/status-list.json"
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
` }, { uri: "https://nab.vc4qi.example/controller", mediaType: "application/json", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-JN9CUEm46w9tiQyEqtklb0/EIVmBU6rnd5OEo8Cvus6gbhdWPAuaEtP9g7AYRAcd", text: `{
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
` }, { uri: "https://zls.vc4qi.example/controller", mediaType: "application/json", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-awsoj4n9MSYmHRfQV8/l2tYILBj8KpbIQDcPEFXcKmtBi5gyFvVDklKyd0w6vhZW", text: `{
  "@context": "https://www.w3.org/ns/cid/v1",
  "id": "https://zls.vc4qi.example/controller",
  "verificationMethod": [
    {
      "id": "https://zls.vc4qi.example/controller#key-1",
      "type": "Multikey",
      "controller": "https://zls.vc4qi.example/controller",
      "publicKeyMultibase": "z6MktGxDxR1VhFKGdcQrzxpFexwUBrpMrBaEKbo2kxhxkHui"
    }
  ],
  "assertionMethod": [
    "https://zls.vc4qi.example/controller#key-1"
  ]
}
` }, { uri: "https://gs-body.vc4qi.example/controller", mediaType: "application/json", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-fMZRA2Mb+7oFpVVl6CeeguOo+EgGBWzvqtCHjQrU9tMruTFsRu/VT8oVNDFXQ/ub", text: `{
  "@context": "https://www.w3.org/ns/cid/v1",
  "id": "https://gs-body.vc4qi.example/controller",
  "verificationMethod": [
    {
      "id": "https://gs-body.vc4qi.example/controller#key-1",
      "type": "Multikey",
      "controller": "https://gs-body.vc4qi.example/controller",
      "publicKeyMultibase": "z6MkenuCyMmvdr61hxQceLcMMwy7YdtwaqF7qVD1S5aSESYN"
    }
  ],
  "assertionMethod": [
    "https://gs-body.vc4qi.example/controller#key-1"
  ]
}
` }, { uri: "https://maker.vc4qi.example/controller", mediaType: "application/json", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-1EiZxZ41ErjdwKL/+TX+yhgWSXgyyaJN2hMcFWKrzB9crLtFjopoUnCUj9FTIyXI", text: `{
  "@context": "https://www.w3.org/ns/cid/v1",
  "id": "https://maker.vc4qi.example/controller",
  "verificationMethod": [
    {
      "id": "https://maker.vc4qi.example/controller#key-1",
      "type": "Multikey",
      "controller": "https://maker.vc4qi.example/controller",
      "publicKeyMultibase": "z6Mkt2BnscSxyb3mgwoefQtiXUbMiNbsycJUx3pgataKRMnZ"
    }
  ],
  "assertionMethod": [
    "https://maker.vc4qi.example/controller#key-1"
  ]
}
` }, { uri: "https://testlab-gs.vc4qi.example/controller", mediaType: "application/json", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-CDfYu29a6EPrCW8Rjj6j0Bl5IvoiuBpvBxODiJvUcJeCaKdchQJARlRuiPvIBkUE", text: `{
  "@context": "https://www.w3.org/ns/cid/v1",
  "id": "https://testlab-gs.vc4qi.example/controller",
  "verificationMethod": [
    {
      "id": "https://testlab-gs.vc4qi.example/controller#key-1",
      "type": "Multikey",
      "controller": "https://testlab-gs.vc4qi.example/controller",
      "publicKeyMultibase": "z6MkgTBbQViWRMxoQMR6Ew7CwHVwNqNpsN5zGyBigQhSkK4L"
    }
  ],
  "assertionMethod": [
    "https://testlab-gs.vc4qi.example/controller#key-1"
  ]
}
` }, { uri: "https://clone.vc4qi.example/controller", mediaType: "application/json", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-YJuOjyQw9Jr8LRTIS3MGzKAA8WXgqqbV8NlNrPdFN4sk1bzuA9yS16/hBci5YkJb", text: `{
  "@context": "https://www.w3.org/ns/cid/v1",
  "id": "https://clone.vc4qi.example/controller",
  "verificationMethod": [
    {
      "id": "https://clone.vc4qi.example/controller#key-1",
      "type": "Multikey",
      "controller": "https://clone.vc4qi.example/controller",
      "publicKeyMultibase": "z6MkvM5EbGWnPouGEyzFo3RFPU4UHmoFoUvcjswToW3aXbQK"
    }
  ],
  "assertionMethod": [
    "https://clone.vc4qi.example/controller#key-1"
  ]
}
` }, { uri: "https://nab.vc4qi.example/status/gs/1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-8acqTRYUhHu2Jgv58F/l2PLICnJ8jKeXbc+DvaK5GmYFp8bcbtVtyxfcv3cJsacD", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://nab.vc4qi.example/status/gs/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://nab.vc4qi.example/controller",
  "validFrom": "2026-09-01T00:00:00Z",
  "validUntil": "2027-09-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/status-list.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://nab.vc4qi.example/status/gs/1#list",
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
    "proofValue": "z4knXYBYGMmW45rmwu2UTbgEFz1mSdcAEqeSridMCnpZNvin9VnnaJiqGa43f2U81iRWxKg74Xaz1x9ycqC6iKiJq"
  }
}
` }, { uri: "https://zls.vc4qi.example/status/gs/1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-ra05+wZZ+85ly+9JN16GXdXB8uzXhktbmFzW9PLR64C8q00clwNZ+U7dW6GO8Jri", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://zls.vc4qi.example/status/gs/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://zls.vc4qi.example/controller",
  "validFrom": "2026-09-01T00:00:00Z",
  "validUntil": "2027-09-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/status-list.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://zls.vc4qi.example/status/gs/1#list",
    "type": "BitstringStatusList",
    "statusPurpose": "revocation",
    "encodedList": "uH4sIAAAAAAACA-3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAIC3AYbSVKsAQAAA"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://zls.vc4qi.example/controller#key-1",
    "created": "2026-09-01T00:00:00Z",
    "proofValue": "z5aK9BJuNiawUFp8LcYBNNyayeHFhfacpfXRtrZYa9Q7m5tTtYGwzvPaTPvWc9YcZSAw5yNSKWjEhcnQR2Q9ZCpBw"
  }
}
` }, { uri: "https://gs-body.vc4qi.example/status/gs/1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-qVqbJPw0np6hYfdDcPnYQw5MEGxy6lDt7qDYbJVMxIVZL92KPAB61VQb/IACFIvq", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://gs-body.vc4qi.example/status/gs/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://gs-body.vc4qi.example/controller",
  "validFrom": "2026-09-01T00:00:00Z",
  "validUntil": "2027-09-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/status-list.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://gs-body.vc4qi.example/status/gs/1#list",
    "type": "BitstringStatusList",
    "statusPurpose": "revocation",
    "encodedList": "uH4sIAAAAAAACA-3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAIC3AYbSVKsAQAAA"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://gs-body.vc4qi.example/controller#key-1",
    "created": "2026-09-01T00:00:00Z",
    "proofValue": "zTk58HCyJ54xvQyopDbn5mgqm6WREX2JScmx54DfwoGNsBqfmmUdRvovG8mH89CG3iZoRjACpMYboDVMdAiqWRhu"
  }
}
` }, { uri: "https://maker.vc4qi.example/status/gs/1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-ZG6BQgVU5dR5beRuKEnhEEh0bZ1hcff4UwLeMEHi8BXUzcEP/vUUruRWUAhp+qdQ", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://maker.vc4qi.example/status/gs/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://maker.vc4qi.example/controller",
  "validFrom": "2026-09-01T00:00:00Z",
  "validUntil": "2027-09-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/status-list.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://maker.vc4qi.example/status/gs/1#list",
    "type": "BitstringStatusList",
    "statusPurpose": "revocation",
    "encodedList": "uH4sIAAAAAAACA-3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAIC3AYbSVKsAQAAA"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://maker.vc4qi.example/controller#key-1",
    "created": "2026-09-01T00:00:00Z",
    "proofValue": "z58q2DLnfCJ1iHSYDJiPa5HuK9UDzA6gFrTddg57KpadtbBQDHwnR1REzF3ycxxF3s5gSudACJro11SZkYL3MAiK"
  }
}
` }, { uri: "https://testlab-gs.vc4qi.example/status/gs/1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-a+P+5aksOkASlpeHDw7Dg/gOGWwnv3588/kRBnuOvfl2M/4t5roUh9q3NZn0scCp", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://testlab-gs.vc4qi.example/status/gs/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://testlab-gs.vc4qi.example/controller",
  "validFrom": "2026-09-01T00:00:00Z",
  "validUntil": "2027-09-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/status-list.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://testlab-gs.vc4qi.example/status/gs/1#list",
    "type": "BitstringStatusList",
    "statusPurpose": "revocation",
    "encodedList": "uH4sIAAAAAAACA-3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAIC3AYbSVKsAQAAA"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://testlab-gs.vc4qi.example/controller#key-1",
    "created": "2026-09-01T00:00:00Z",
    "proofValue": "z3B1iYyr9W3PSHhDmvseTCKgNo6fQRu8zDw9s51w7jF8PTA7xNHzweUyVndky61nhkMtGWd1nMi5MCDFbtp59jS8Q"
  }
}
` }, { uri: "https://clone.vc4qi.example/status/gs/1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-+0RXb+OdGr9bSVlQkp2c+f9BxNjXSYZPlezhADB1vfemOJzdgN+UvxngfVJoMMYn", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://clone.vc4qi.example/status/gs/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://clone.vc4qi.example/controller",
  "validFrom": "2026-09-01T00:00:00Z",
  "validUntil": "2027-09-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/status-list.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://clone.vc4qi.example/status/gs/1#list",
    "type": "BitstringStatusList",
    "statusPurpose": "revocation",
    "encodedList": "uH4sIAAAAAAACA-3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAIC3AYbSVKsAQAAA"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://clone.vc4qi.example/controller#key-1",
    "created": "2026-09-01T00:00:00Z",
    "proofValue": "z4zfkZvwANv2YeQ2D9p1UCfpbaS3nBc88cb28H3yUQ8LSpJr1UE1Lqk182dyerZXedLY4fkehS6rgZTxGKYQK1sto"
  }
}
` }, { uri: "https://nab.vc4qi.example/credentials/GS-A", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-9qjrRw2w3beSMgwyViCO5R6IWqzfdvCGrsWwkMNzh1dk6tU5GDB5ddIXkYTDRTy1", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://nab.vc4qi.example/credentials/GS-A",
  "type": [
    "VerifiableCredential",
    "GsAccreditation"
  ],
  "issuer": "https://nab.vc4qi.example/controller",
  "validFrom": "2024-01-01T00:00:00Z",
  "validUntil": "2029-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/accreditation.json",
    "type": "JsonSchema"
  },
  "name": "Accreditation of the GS body (certification including factory inspection, testing)",
  "credentialSubject": {
    "id": "https://gs-body.vc4qi.example/controller",
    "permittedActivity": [
      "https://vc4qi.example/bindings/gs/1#certifyProducts",
      "https://vc4qi.example/bindings/gs/1#testProducts"
    ],
    "scope": [
      {
        "id": "https://nab.vc4qi.example/credentials/GS-A#scope-toys",
        "productCategoryIri": "https://vc4qi.example/bindings/gs/1#Toy",
        "standardIris": [
          "https://vc4qi.example/bindings/gs/1#EN-71-1",
          "https://vc4qi.example/bindings/gs/1#EN-71-2"
        ]
      },
      {
        "id": "https://nab.vc4qi.example/credentials/GS-A#scope-household",
        "productCategoryIri": "https://vc4qi.example/bindings/gs/1#HouseholdAppliance",
        "standardIris": [
          "https://vc4qi.example/bindings/gs/1#EN-60335-1",
          "https://vc4qi.example/bindings/gs/1#EN-60335-2-23"
        ]
      }
    ]
  },
  "credentialStatus": {
    "id": "https://nab.vc4qi.example/status/gs/1#0",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "0",
    "statusListCredential": "https://nab.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://nab.vc4qi.example/controller#key-1",
    "created": "2024-01-01T00:00:00Z",
    "proofValue": "z28TmpGyC81iCCTkXYsUKDCAohtjcFf5zsaaKMHLHVfsy9XjQaS8BbTL8NNgrA3WVk5Kw6gWGKzLJJELNwyvNZt2y"
  }
}
` }, { uri: "https://nab.vc4qi.example/credentials/TL-A", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-uUR8GfMe4maca+E3NvNtwc5Dl6qISEs7Pum6cbqh7mv7ZeMdGOTSkElCvbcarVjJ", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://nab.vc4qi.example/credentials/TL-A",
  "type": [
    "VerifiableCredential",
    "GsAccreditation"
  ],
  "issuer": "https://nab.vc4qi.example/controller",
  "validFrom": "2024-06-01T00:00:00Z",
  "validUntil": "2029-06-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/accreditation.json",
    "type": "JsonSchema"
  },
  "name": "Accreditation of an external testing laboratory",
  "credentialSubject": {
    "id": "https://testlab-gs.vc4qi.example/controller",
    "permittedActivity": [
      "https://vc4qi.example/bindings/gs/1#testProducts"
    ],
    "scope": [
      {
        "id": "https://nab.vc4qi.example/credentials/TL-A#scope-household",
        "productCategoryIri": "https://vc4qi.example/bindings/gs/1#HouseholdAppliance",
        "standardIris": [
          "https://vc4qi.example/bindings/gs/1#EN-60335-1",
          "https://vc4qi.example/bindings/gs/1#EN-60335-2-23"
        ]
      }
    ]
  },
  "credentialStatus": {
    "id": "https://nab.vc4qi.example/status/gs/1#1",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "1",
    "statusListCredential": "https://nab.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://nab.vc4qi.example/controller#key-1",
    "created": "2024-06-01T00:00:00Z",
    "proofValue": "z5Gya6nKGdD9p8U27HF9S3qN2MZmxVxyg4QYbetr9t4oosDs9Rzm2bphqcyeYsBG4yezTbrwW1QuFU3e8LHDnNT6m"
  }
}
` }, { uri: "https://zls.vc4qi.example/credentials/GS-S", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-bKh53Osb+FYqJFUuUUX7XRZvi62I0mslE9R9fcOkkbLQFgRx6fI5xjzQTaoUyyKD", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://zls.vc4qi.example/credentials/GS-S",
  "type": [
    "VerifiableCredential",
    "GsSchemeAuthorization"
  ],
  "issuer": "https://zls.vc4qi.example/controller",
  "validFrom": "2025-01-01T00:00:00Z",
  "validUntil": "2027-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/scheme-authorization.json",
    "type": "JsonSchema"
  },
  "name": "GS scheme authorization (ZLS role, fictional)",
  "credentialSubject": {
    "id": "https://gs-body.vc4qi.example/controller",
    "permittedActivity": [
      "https://vc4qi.example/bindings/gs/1#awardGsMark"
    ],
    "scope": [
      {
        "id": "https://zls.vc4qi.example/credentials/GS-S#scope-household",
        "productCategoryIri": "https://vc4qi.example/bindings/gs/1#HouseholdAppliance"
      }
    ]
  },
  "credentialStatus": {
    "id": "https://zls.vc4qi.example/status/gs/1#0",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "0",
    "statusListCredential": "https://zls.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://zls.vc4qi.example/controller#key-1",
    "created": "2025-01-01T00:00:00Z",
    "proofValue": "z22EUPZ3754s587B8iSTwFJbi6o9zLsmCH9E8tkyPYyzwTjw5kbh84mbbqhGjXoMG64UTi3EsGuUMzti7bgtJVVqg"
  }
}
` }, { uri: "https://gs-body.vc4qi.example/credentials/FI-1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-0EQonD/gtjua62AQ3uh4rLTZQpAhTVaQa1j5Ml0sOR/3PxUSaj9uQjVNepDv3pml", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://gs-body.vc4qi.example/credentials/FI-1",
  "type": [
    "VerifiableCredential",
    "GsInspectionReport"
  ],
  "issuer": "https://gs-body.vc4qi.example/controller",
  "validFrom": "2026-01-25T00:00:00Z",
  "validUntil": "2029-01-25T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/inspection-report.json",
    "type": "JsonSchema"
  },
  "name": "Initial factory inspection",
  "credentialSubject": {
    "id": "urn:vc4qi-example:site:maker-plant-1",
    "activityTime": "2026-01-20T09:00:00Z",
    "manufacturerIri": "https://maker.vc4qi.example/controller",
    "outcomeIri": "https://vc4qi.example/bindings/gs/1#Pass"
  },
  "termsOfUse": [
    {
      "type": "GsAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://nab.vc4qi.example/credentials/GS-A",
        "type": "GsAccreditation"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://nab.vc4qi.example/credentials/GS-A",
      "digestSRI": "sha384-9qjrRw2w3beSMgwyViCO5R6IWqzfdvCGrsWwkMNzh1dk6tU5GDB5ddIXkYTDRTy1"
    }
  ],
  "credentialStatus": {
    "id": "https://gs-body.vc4qi.example/status/gs/1#3",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "3",
    "statusListCredential": "https://gs-body.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://gs-body.vc4qi.example/controller#key-1",
    "created": "2026-01-25T00:00:00Z",
    "proofValue": "zcrMNuPDHKj3fAWkJ8rz6U5PWpvSWZGhjo6aGerjL5KL6C7Y16yauh7ez23Nyp5Cr9azTw1j8aV3E1aqV6ef6DDU"
  }
}
` }, { uri: "https://gs-body.vc4qi.example/credentials/TR-1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-4JcQ564AWQQaAuYxKsa8TQP7hP9uLip5rCGyG1ePrhx+BJlwZkpf9zh9AMCVSZ/f", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://gs-body.vc4qi.example/credentials/TR-1",
  "type": [
    "VerifiableCredential",
    "GsTestReport"
  ],
  "issuer": "https://gs-body.vc4qi.example/controller",
  "validFrom": "2026-02-10T00:00:00Z",
  "validUntil": "2031-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/test-report.json",
    "type": "JsonSchema"
  },
  "name": "Type examination of hair dryer HD-01 (GS body laboratory)",
  "credentialSubject": {
    "id": "urn:vc4qi-example:product:hair-dryer-hd-01#type-examination",
    "activityTime": "2026-02-10T00:00:00Z",
    "productModelIri": "urn:vc4qi-example:product:hair-dryer-hd-01",
    "productCategoryIri": "https://vc4qi.example/bindings/gs/1#HouseholdAppliance",
    "standardIris": [
      "https://vc4qi.example/bindings/gs/1#EN-60335-1",
      "https://vc4qi.example/bindings/gs/1#EN-60335-2-23"
    ],
    "outcomeIri": "https://vc4qi.example/bindings/gs/1#Pass"
  },
  "termsOfUse": [
    {
      "type": "GsAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://nab.vc4qi.example/credentials/GS-A",
        "type": "GsAccreditation"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://nab.vc4qi.example/credentials/GS-A",
      "digestSRI": "sha384-9qjrRw2w3beSMgwyViCO5R6IWqzfdvCGrsWwkMNzh1dk6tU5GDB5ddIXkYTDRTy1"
    }
  ],
  "credentialStatus": {
    "id": "https://gs-body.vc4qi.example/status/gs/1#4",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "4",
    "statusListCredential": "https://gs-body.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://gs-body.vc4qi.example/controller#key-1",
    "created": "2026-02-10T00:00:00Z",
    "proofValue": "z59va3CfUFpLrAvfNZRr5Uj96KoVLMm3jXADDVnj3FEQPrhijiME1QUXisTpdTwdvL9gubLgYyjmYgzbyxLxDYQaP"
  }
}
` }, { uri: "https://testlab-gs.vc4qi.example/credentials/TR-2", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-eTWJLkANOH35BSUbOG70442PdFvCEXABZX8gQ+2YK1+0F/N+6dJvxX8btckbYWPy", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://testlab-gs.vc4qi.example/credentials/TR-2",
  "type": [
    "VerifiableCredential",
    "GsTestReport"
  ],
  "issuer": "https://testlab-gs.vc4qi.example/controller",
  "validFrom": "2026-02-12T00:00:00Z",
  "validUntil": "2031-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/test-report.json",
    "type": "JsonSchema"
  },
  "name": "Type examination of hair dryer HD-02 (external laboratory)",
  "credentialSubject": {
    "id": "urn:vc4qi-example:product:hair-dryer-hd-02#type-examination",
    "activityTime": "2026-02-12T00:00:00Z",
    "productModelIri": "urn:vc4qi-example:product:hair-dryer-hd-02",
    "productCategoryIri": "https://vc4qi.example/bindings/gs/1#HouseholdAppliance",
    "standardIris": [
      "https://vc4qi.example/bindings/gs/1#EN-60335-1",
      "https://vc4qi.example/bindings/gs/1#EN-60335-2-23"
    ],
    "outcomeIri": "https://vc4qi.example/bindings/gs/1#Pass"
  },
  "termsOfUse": [
    {
      "type": "GsAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://nab.vc4qi.example/credentials/TL-A",
        "type": "GsAccreditation"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://nab.vc4qi.example/credentials/TL-A",
      "digestSRI": "sha384-uUR8GfMe4maca+E3NvNtwc5Dl6qISEs7Pum6cbqh7mv7ZeMdGOTSkElCvbcarVjJ"
    }
  ],
  "credentialStatus": {
    "id": "https://testlab-gs.vc4qi.example/status/gs/1#0",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "0",
    "statusListCredential": "https://testlab-gs.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://testlab-gs.vc4qi.example/controller#key-1",
    "created": "2026-02-12T00:00:00Z",
    "proofValue": "zYJfbZBgJN66dmCVC9qL2kQb41yPdsiYrQYDFgy4K7cUB58LDyFnbkQXBTXG2zvhio4GLvkGoatp1gvfhz4KAi3g"
  }
}
` }, { uri: "https://gs-body.vc4qi.example/credentials/TR-3", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-OY1DQULFh98iqYYjbja1AgwmKRP8gB/j6AjMlk6dBLESR5f/XBhR3ADZyWDlg4vB", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://gs-body.vc4qi.example/credentials/TR-3",
  "type": [
    "VerifiableCredential",
    "GsTestReport"
  ],
  "issuer": "https://gs-body.vc4qi.example/controller",
  "validFrom": "2026-02-05T00:00:00Z",
  "validUntil": "2031-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/test-report.json",
    "type": "JsonSchema"
  },
  "name": "Type examination of toy 001 (GS body laboratory)",
  "credentialSubject": {
    "id": "urn:vc4qi-example:product:toy-001#type-examination",
    "activityTime": "2026-02-05T00:00:00Z",
    "productModelIri": "urn:vc4qi-example:product:toy-001",
    "productCategoryIri": "https://vc4qi.example/bindings/gs/1#Toy",
    "standardIris": [
      "https://vc4qi.example/bindings/gs/1#EN-71-1"
    ],
    "outcomeIri": "https://vc4qi.example/bindings/gs/1#Pass"
  },
  "termsOfUse": [
    {
      "type": "GsAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://nab.vc4qi.example/credentials/GS-A",
        "type": "GsAccreditation"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://nab.vc4qi.example/credentials/GS-A",
      "digestSRI": "sha384-9qjrRw2w3beSMgwyViCO5R6IWqzfdvCGrsWwkMNzh1dk6tU5GDB5ddIXkYTDRTy1"
    }
  ],
  "credentialStatus": {
    "id": "https://gs-body.vc4qi.example/status/gs/1#5",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "5",
    "statusListCredential": "https://gs-body.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://gs-body.vc4qi.example/controller#key-1",
    "created": "2026-02-05T00:00:00Z",
    "proofValue": "zcqTTcv5tgyJkqxD5y4ibrAp4wgKN42gPfmx74E36onLePDD5iHTe1pYFYuqGR3Sm2dKqzGuBSHb96bRDL8Djx98"
  }
}
` }, { uri: "https://gs-body.vc4qi.example/credentials/GSC-1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-0n6H23kKXsF/WOUktib0oItz+50+OyFOLbTU4RPgyxnvtHTEw7YuhqevGrr8QN4d", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
  "type": [
    "VerifiableCredential",
    "GsCertificate"
  ],
  "issuer": "https://gs-body.vc4qi.example/controller",
  "validFrom": "2026-03-01T00:00:00Z",
  "validUntil": "2031-03-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/certificate.json",
    "type": "JsonSchema"
  },
  "name": "GS certificate, hair dryer HD-01",
  "credentialSubject": {
    "id": "urn:vc4qi-example:product:hair-dryer-hd-01",
    "activityTime": "2026-02-27T10:00:00Z",
    "manufacturerIri": "https://maker.vc4qi.example/controller",
    "certification": {
      "productCategoryIri": "https://vc4qi.example/bindings/gs/1#HouseholdAppliance",
      "standardIris": [
        "https://vc4qi.example/bindings/gs/1#EN-60335-1",
        "https://vc4qi.example/bindings/gs/1#EN-60335-2-23"
      ]
    }
  },
  "termsOfUse": [
    {
      "type": "GsAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://nab.vc4qi.example/credentials/GS-A",
        "type": "GsAccreditation"
      }
    },
    {
      "type": "GsAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://zls.vc4qi.example/credentials/GS-S",
        "type": "GsSchemeAuthorization"
      }
    }
  ],
  "evidence": [
    {
      "id": "https://gs-body.vc4qi.example/credentials/TR-1",
      "type": "GsTypeExaminationReference"
    },
    {
      "id": "https://gs-body.vc4qi.example/credentials/FI-1",
      "type": "GsFactoryInspectionReference"
    }
  ],
  "relatedResource": [
    {
      "id": "https://nab.vc4qi.example/credentials/GS-A",
      "digestSRI": "sha384-9qjrRw2w3beSMgwyViCO5R6IWqzfdvCGrsWwkMNzh1dk6tU5GDB5ddIXkYTDRTy1"
    },
    {
      "id": "https://zls.vc4qi.example/credentials/GS-S",
      "digestSRI": "sha384-bKh53Osb+FYqJFUuUUX7XRZvi62I0mslE9R9fcOkkbLQFgRx6fI5xjzQTaoUyyKD"
    },
    {
      "id": "https://gs-body.vc4qi.example/credentials/TR-1",
      "digestSRI": "sha384-4JcQ564AWQQaAuYxKsa8TQP7hP9uLip5rCGyG1ePrhx+BJlwZkpf9zh9AMCVSZ/f"
    },
    {
      "id": "https://gs-body.vc4qi.example/credentials/FI-1",
      "digestSRI": "sha384-0EQonD/gtjua62AQ3uh4rLTZQpAhTVaQa1j5Ml0sOR/3PxUSaj9uQjVNepDv3pml"
    }
  ],
  "credentialStatus": {
    "id": "https://gs-body.vc4qi.example/status/gs/1#0",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "0",
    "statusListCredential": "https://gs-body.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://gs-body.vc4qi.example/controller#key-1",
    "created": "2026-03-01T00:00:00Z",
    "proofValue": "z2wECKNPBGwCBvgPngpFDoYEWPEuRhGQso7BYcAPQwNwnnrXSgaGUTAaXcaDhDvTV74N33mwgyqdsMaWpXn8ZRSEw"
  }
}
` }, { uri: "https://gs-body.vc4qi.example/credentials/GSC-2", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-qjgmAzyLlJCE2ybp0vOZVcUnacIUMjW4az4GhWtG7DlCBpnKDgaEPv1zm/GLVUfo", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://gs-body.vc4qi.example/credentials/GSC-2",
  "type": [
    "VerifiableCredential",
    "GsCertificate"
  ],
  "issuer": "https://gs-body.vc4qi.example/controller",
  "validFrom": "2026-03-01T00:00:00Z",
  "validUntil": "2031-03-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/certificate.json",
    "type": "JsonSchema"
  },
  "name": "GS certificate, toy 001",
  "credentialSubject": {
    "id": "urn:vc4qi-example:product:toy-001",
    "activityTime": "2026-02-27T11:00:00Z",
    "manufacturerIri": "https://maker.vc4qi.example/controller",
    "certification": {
      "productCategoryIri": "https://vc4qi.example/bindings/gs/1#Toy",
      "standardIris": [
        "https://vc4qi.example/bindings/gs/1#EN-71-1"
      ]
    }
  },
  "termsOfUse": [
    {
      "type": "GsAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://nab.vc4qi.example/credentials/GS-A",
        "type": "GsAccreditation"
      }
    },
    {
      "type": "GsAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://zls.vc4qi.example/credentials/GS-S",
        "type": "GsSchemeAuthorization"
      }
    }
  ],
  "evidence": [
    {
      "id": "https://gs-body.vc4qi.example/credentials/TR-3",
      "type": "GsTypeExaminationReference"
    },
    {
      "id": "https://gs-body.vc4qi.example/credentials/FI-1",
      "type": "GsFactoryInspectionReference"
    }
  ],
  "relatedResource": [
    {
      "id": "https://nab.vc4qi.example/credentials/GS-A",
      "digestSRI": "sha384-9qjrRw2w3beSMgwyViCO5R6IWqzfdvCGrsWwkMNzh1dk6tU5GDB5ddIXkYTDRTy1"
    },
    {
      "id": "https://zls.vc4qi.example/credentials/GS-S",
      "digestSRI": "sha384-bKh53Osb+FYqJFUuUUX7XRZvi62I0mslE9R9fcOkkbLQFgRx6fI5xjzQTaoUyyKD"
    },
    {
      "id": "https://gs-body.vc4qi.example/credentials/TR-3",
      "digestSRI": "sha384-OY1DQULFh98iqYYjbja1AgwmKRP8gB/j6AjMlk6dBLESR5f/XBhR3ADZyWDlg4vB"
    },
    {
      "id": "https://gs-body.vc4qi.example/credentials/FI-1",
      "digestSRI": "sha384-0EQonD/gtjua62AQ3uh4rLTZQpAhTVaQa1j5Ml0sOR/3PxUSaj9uQjVNepDv3pml"
    }
  ],
  "credentialStatus": {
    "id": "https://gs-body.vc4qi.example/status/gs/1#1",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "1",
    "statusListCredential": "https://gs-body.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://gs-body.vc4qi.example/controller#key-1",
    "created": "2026-03-01T00:00:00Z",
    "proofValue": "z4eBE4S5jVpDkmTi5u9VL3hxLMjCZkGU4qCeka6D9xLhyNzk32k8NKqbjHBWzvUhHioq2LNVAtSatQ4E7ifEkdFf4"
  }
}
` }, { uri: "https://gs-body.vc4qi.example/credentials/GSC-3", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-UtRwI+ULOwtFOgKjZgxm5IALwgcYkH6+2s/t4fVRXRKtzZb6IODDlI5XmpDJ9zrW", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://gs-body.vc4qi.example/credentials/GSC-3",
  "type": [
    "VerifiableCredential",
    "GsCertificate"
  ],
  "issuer": "https://gs-body.vc4qi.example/controller",
  "validFrom": "2026-03-02T00:00:00Z",
  "validUntil": "2031-03-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/certificate.json",
    "type": "JsonSchema"
  },
  "name": "GS certificate, hair dryer HD-02",
  "credentialSubject": {
    "id": "urn:vc4qi-example:product:hair-dryer-hd-02",
    "activityTime": "2026-02-28T10:00:00Z",
    "manufacturerIri": "https://maker.vc4qi.example/controller",
    "certification": {
      "productCategoryIri": "https://vc4qi.example/bindings/gs/1#HouseholdAppliance",
      "standardIris": [
        "https://vc4qi.example/bindings/gs/1#EN-60335-1",
        "https://vc4qi.example/bindings/gs/1#EN-60335-2-23"
      ]
    }
  },
  "termsOfUse": [
    {
      "type": "GsAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://nab.vc4qi.example/credentials/GS-A",
        "type": "GsAccreditation"
      }
    },
    {
      "type": "GsAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://zls.vc4qi.example/credentials/GS-S",
        "type": "GsSchemeAuthorization"
      }
    }
  ],
  "evidence": [
    {
      "id": "https://testlab-gs.vc4qi.example/credentials/TR-2",
      "type": "GsTypeExaminationReference"
    },
    {
      "id": "https://gs-body.vc4qi.example/credentials/FI-1",
      "type": "GsFactoryInspectionReference"
    }
  ],
  "relatedResource": [
    {
      "id": "https://nab.vc4qi.example/credentials/GS-A",
      "digestSRI": "sha384-9qjrRw2w3beSMgwyViCO5R6IWqzfdvCGrsWwkMNzh1dk6tU5GDB5ddIXkYTDRTy1"
    },
    {
      "id": "https://zls.vc4qi.example/credentials/GS-S",
      "digestSRI": "sha384-bKh53Osb+FYqJFUuUUX7XRZvi62I0mslE9R9fcOkkbLQFgRx6fI5xjzQTaoUyyKD"
    },
    {
      "id": "https://testlab-gs.vc4qi.example/credentials/TR-2",
      "digestSRI": "sha384-eTWJLkANOH35BSUbOG70442PdFvCEXABZX8gQ+2YK1+0F/N+6dJvxX8btckbYWPy"
    },
    {
      "id": "https://gs-body.vc4qi.example/credentials/FI-1",
      "digestSRI": "sha384-0EQonD/gtjua62AQ3uh4rLTZQpAhTVaQa1j5Ml0sOR/3PxUSaj9uQjVNepDv3pml"
    }
  ],
  "credentialStatus": {
    "id": "https://gs-body.vc4qi.example/status/gs/1#2",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "2",
    "statusListCredential": "https://gs-body.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://gs-body.vc4qi.example/controller#key-1",
    "created": "2026-03-02T00:00:00Z",
    "proofValue": "z61VRMt4oZLeMJRC4Vq7zqSpbn9Qi4Vct2Ky6YfPL2HyK39NeLTvSVbA3kqBsXaUvmeRyxFkbk7KhTViVA9MemCK"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/GSM-1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-PO7mwhOpkK0EZX9R1NuFbjMw+34Vo2QdG7aWXrLGsG5tGmfD/tM/TNiXeTcVZ2gc", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://maker.vc4qi.example/credentials/GSM-1",
  "type": [
    "VerifiableCredential",
    "GsMarkCredential"
  ],
  "issuer": "https://maker.vc4qi.example/controller",
  "validFrom": "2026-05-10T00:00:00Z",
  "validUntil": "2036-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/mark-credential.json",
    "type": "JsonSchema"
  },
  "name": "GS-mark credential, hair dryer HD-01, unit 0042",
  "credentialSubject": {
    "id": "urn:vc4qi-example:unit:hd-01-sn-0042",
    "activityTime": "2026-05-10T00:00:00Z",
    "productModelIri": "urn:vc4qi-example:product:hair-dryer-hd-01",
    "marking": {
      "markIri": "https://vc4qi.example/bindings/gs/1#GsMark",
      "productModelIri": "urn:vc4qi-example:product:hair-dryer-hd-01"
    }
  },
  "termsOfUse": [
    {
      "type": "GsAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
        "type": "GsCertificate"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
      "digestSRI": "sha384-0n6H23kKXsF/WOUktib0oItz+50+OyFOLbTU4RPgyxnvtHTEw7YuhqevGrr8QN4d"
    }
  ],
  "credentialStatus": {
    "id": "https://maker.vc4qi.example/status/gs/1#0",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "0",
    "statusListCredential": "https://maker.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://maker.vc4qi.example/controller#key-1",
    "created": "2026-05-10T00:00:00Z",
    "proofValue": "z4BpnGt5Zr826o9auFYcECT5GkrfsadWoRpFesuu2VQn68PXewFQ6P7TYUzF8nXKQFUpv8d7aUWKzizfr8XxFT7pz"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/GSM-2", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-maKn4uAvK3MunmTBwjcCS06TZ0r67cEfpUprn6gVTo1ZKNcXSN+oat6VhLBwFWi7", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://maker.vc4qi.example/credentials/GSM-2",
  "type": [
    "VerifiableCredential",
    "GsMarkCredential"
  ],
  "issuer": "https://maker.vc4qi.example/controller",
  "validFrom": "2026-05-10T00:00:00Z",
  "validUntil": "2036-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/mark-credential.json",
    "type": "JsonSchema"
  },
  "name": "GS-mark credential, toy 001, unit 0007",
  "credentialSubject": {
    "id": "urn:vc4qi-example:unit:toy-001-sn-0007",
    "activityTime": "2026-05-10T00:00:00Z",
    "productModelIri": "urn:vc4qi-example:product:toy-001",
    "marking": {
      "markIri": "https://vc4qi.example/bindings/gs/1#GsMark",
      "productModelIri": "urn:vc4qi-example:product:toy-001"
    }
  },
  "termsOfUse": [
    {
      "type": "GsAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://gs-body.vc4qi.example/credentials/GSC-2",
        "type": "GsCertificate"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://gs-body.vc4qi.example/credentials/GSC-2",
      "digestSRI": "sha384-qjgmAzyLlJCE2ybp0vOZVcUnacIUMjW4az4GhWtG7DlCBpnKDgaEPv1zm/GLVUfo"
    }
  ],
  "credentialStatus": {
    "id": "https://maker.vc4qi.example/status/gs/1#1",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "1",
    "statusListCredential": "https://maker.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://maker.vc4qi.example/controller#key-1",
    "created": "2026-05-10T00:00:00Z",
    "proofValue": "zvKvuckNDXuGJh4657HLuE1QcMXS5GgwEGv7vTfBypvSrUdqJ82Ma976EtgvdKA6iuybUpdiHgokNJ9tUTasQyfn"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/GSM-3", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-qzbUpxt9PYBAXxuVELWDjR7NM7YA+X4psNR+bjN62trp7yZVdt71h005CAHNe3zU", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://maker.vc4qi.example/credentials/GSM-3",
  "type": [
    "VerifiableCredential",
    "GsMarkCredential"
  ],
  "issuer": "https://maker.vc4qi.example/controller",
  "validFrom": "2026-05-12T00:00:00Z",
  "validUntil": "2036-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/mark-credential.json",
    "type": "JsonSchema"
  },
  "name": "GS-mark credential, hair dryer HD-02, unit 0011",
  "credentialSubject": {
    "id": "urn:vc4qi-example:unit:hd-02-sn-0011",
    "activityTime": "2026-05-12T00:00:00Z",
    "productModelIri": "urn:vc4qi-example:product:hair-dryer-hd-02",
    "marking": {
      "markIri": "https://vc4qi.example/bindings/gs/1#GsMark",
      "productModelIri": "urn:vc4qi-example:product:hair-dryer-hd-02"
    }
  },
  "termsOfUse": [
    {
      "type": "GsAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://gs-body.vc4qi.example/credentials/GSC-3",
        "type": "GsCertificate"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://gs-body.vc4qi.example/credentials/GSC-3",
      "digestSRI": "sha384-UtRwI+ULOwtFOgKjZgxm5IALwgcYkH6+2s/t4fVRXRKtzZb6IODDlI5XmpDJ9zrW"
    }
  ],
  "credentialStatus": {
    "id": "https://maker.vc4qi.example/status/gs/1#2",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "2",
    "statusListCredential": "https://maker.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://maker.vc4qi.example/controller#key-1",
    "created": "2026-05-12T00:00:00Z",
    "proofValue": "zEFDmA1gjUxthdp6UCNdNVU4mccKTLyVFVWxWFgor9gEq7CKR8QQPWoqc3ey1WZdvZZhDeGdo9Q32g6NoaB3Cfdk"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/GSM-4", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-1gT1JuLsuhbJv6AqpVHq1LjMzZa8A964EYcG3BuZ03SEfU4dFGojh0d9YHokepPX", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://maker.vc4qi.example/credentials/GSM-4",
  "type": [
    "VerifiableCredential",
    "GsMarkCredential"
  ],
  "issuer": "https://maker.vc4qi.example/controller",
  "validFrom": "2026-02-15T00:00:00Z",
  "validUntil": "2036-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/mark-credential.json",
    "type": "JsonSchema"
  },
  "name": "GS-mark credential, hair dryer HD-01, unit 0001",
  "credentialSubject": {
    "id": "urn:vc4qi-example:unit:hd-01-sn-0001",
    "activityTime": "2026-02-15T00:00:00Z",
    "productModelIri": "urn:vc4qi-example:product:hair-dryer-hd-01",
    "marking": {
      "markIri": "https://vc4qi.example/bindings/gs/1#GsMark",
      "productModelIri": "urn:vc4qi-example:product:hair-dryer-hd-01"
    }
  },
  "termsOfUse": [
    {
      "type": "GsAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
        "type": "GsCertificate"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
      "digestSRI": "sha384-0n6H23kKXsF/WOUktib0oItz+50+OyFOLbTU4RPgyxnvtHTEw7YuhqevGrr8QN4d"
    }
  ],
  "credentialStatus": {
    "id": "https://maker.vc4qi.example/status/gs/1#3",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "3",
    "statusListCredential": "https://maker.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://maker.vc4qi.example/controller#key-1",
    "created": "2026-02-15T00:00:00Z",
    "proofValue": "z4GhQhnKWwMepLrT9KHxou8TgKq5YtNgKPSd6AZy5HzqHt5qJjGDgMNAo2uLCZT8m3TgTJxF38jZc358fndqg43s4"
  }
}
` }, { uri: "https://clone.vc4qi.example/credentials/GSM-5", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-E4bpq/d01ZokrduULPR0vnYDgVmudizYvuhchj+ntIMFl98Q9EbDDWzc/mCjmQPV", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://clone.vc4qi.example/credentials/GSM-5",
  "type": [
    "VerifiableCredential",
    "GsMarkCredential"
  ],
  "issuer": "https://clone.vc4qi.example/controller",
  "validFrom": "2026-05-10T00:00:00Z",
  "validUntil": "2036-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/mark-credential.json",
    "type": "JsonSchema"
  },
  "name": "GS-mark credential, hair dryer HD-01, unit 9999",
  "credentialSubject": {
    "id": "urn:vc4qi-example:unit:hd-01-sn-9999",
    "activityTime": "2026-05-10T00:00:00Z",
    "productModelIri": "urn:vc4qi-example:product:hair-dryer-hd-01",
    "marking": {
      "markIri": "https://vc4qi.example/bindings/gs/1#GsMark",
      "productModelIri": "urn:vc4qi-example:product:hair-dryer-hd-01"
    }
  },
  "termsOfUse": [
    {
      "type": "GsAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
        "type": "GsCertificate"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
      "digestSRI": "sha384-0n6H23kKXsF/WOUktib0oItz+50+OyFOLbTU4RPgyxnvtHTEw7YuhqevGrr8QN4d"
    }
  ],
  "credentialStatus": {
    "id": "https://clone.vc4qi.example/status/gs/1#0",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "0",
    "statusListCredential": "https://clone.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://clone.vc4qi.example/controller#key-1",
    "created": "2026-05-10T00:00:00Z",
    "proofValue": "z5pr73UhNMv4zfDqjGS9w1UZ2D125jv2tAxZtCMDb94hyLNoyiHGaNhozxvditkGKoAy1ZWTAHz7kGerkRyLRpqaH"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/GSM-6", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-JVvQAoK8O5+2Jawz3WOTkk7UyXjGIssMhs7/EaQn1hNknGumMDOyYE3SlNAgLEmr", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://maker.vc4qi.example/credentials/GSM-6",
  "type": [
    "VerifiableCredential",
    "GsMarkCredential"
  ],
  "issuer": "https://maker.vc4qi.example/controller",
  "validFrom": "2026-05-12T00:00:00Z",
  "validUntil": "2036-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/mark-credential.json",
    "type": "JsonSchema"
  },
  "name": "GS-mark credential, hair dryer HD-02, unit 0050",
  "credentialSubject": {
    "id": "urn:vc4qi-example:unit:hd-02-sn-0050",
    "activityTime": "2026-05-12T00:00:00Z",
    "productModelIri": "urn:vc4qi-example:product:hair-dryer-hd-02",
    "marking": {
      "markIri": "https://vc4qi.example/bindings/gs/1#GsMark",
      "productModelIri": "urn:vc4qi-example:product:hair-dryer-hd-01"
    }
  },
  "termsOfUse": [
    {
      "type": "GsAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
        "type": "GsCertificate"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
      "digestSRI": "sha384-0n6H23kKXsF/WOUktib0oItz+50+OyFOLbTU4RPgyxnvtHTEw7YuhqevGrr8QN4d"
    }
  ],
  "credentialStatus": {
    "id": "https://maker.vc4qi.example/status/gs/1#4",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "4",
    "statusListCredential": "https://maker.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://maker.vc4qi.example/controller#key-1",
    "created": "2026-05-12T00:00:00Z",
    "proofValue": "z41mfmzBHA25ad5NcPQ5KoUeTxkVqQao6gsyLRXcLvQCsiUi1QdwnGcNRxMCro7TuHAZLdGBynREduhZKQLYX2nmJ"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/DPP-1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-LMBoywa6D2C28uAqsk4oIcDpmukq8P3NhDlx/t4BR2cJxDMPlrMetMaMZtcRvUz/", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://maker.vc4qi.example/credentials/DPP-1",
  "type": [
    "VerifiableCredential",
    "ProductPassport"
  ],
  "issuer": "https://maker.vc4qi.example/controller",
  "validFrom": "2026-05-10T00:00:00Z",
  "validUntil": "2036-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/product-passport.json",
    "type": "JsonSchema"
  },
  "name": "Product passport, Hair dryer HD-01, unit 0042",
  "credentialSubject": {
    "id": "urn:vc4qi-example:unit:hd-01-sn-0042",
    "activityTime": "2026-05-10T00:00:00Z",
    "productName": "Hair dryer HD-01",
    "productModelIri": "urn:vc4qi-example:product:hair-dryer-hd-01",
    "gtin": "04012345000011",
    "commodityCode": "85163100",
    "economicOperatorIri": "https://maker.vc4qi.example/controller",
    "facilityIri": "urn:vc4qi-example:site:maker-plant-1",
    "technicalData": {
      "ratedPowerW": "2000"
    },
    "sustainability": {
      "sparePartsAvailabilityYears": "7"
    },
    "complianceInformation": {
      "gsMark": {
        "markIri": "https://vc4qi.example/bindings/gs/1#GsMark",
        "productModelIri": "urn:vc4qi-example:product:hair-dryer-hd-01"
      }
    }
  },
  "evidence": [
    {
      "id": "https://maker.vc4qi.example/credentials/GSM-1",
      "type": "GsMarkCredentialReference"
    }
  ],
  "relatedResource": [
    {
      "id": "https://maker.vc4qi.example/credentials/GSM-1",
      "digestSRI": "sha384-PO7mwhOpkK0EZX9R1NuFbjMw+34Vo2QdG7aWXrLGsG5tGmfD/tM/TNiXeTcVZ2gc"
    }
  ],
  "credentialStatus": {
    "id": "https://maker.vc4qi.example/status/gs/1#5",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "5",
    "statusListCredential": "https://maker.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://maker.vc4qi.example/controller#key-1",
    "created": "2026-05-10T00:00:00Z",
    "proofValue": "z2gE28aWdks66vv3qABkNMJs3BRmqU13GzonDTufMSXdH8fsMQVofgofauEc4KYjChqC53xvLsDYTJ6L7sq8cdn3L"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/DPP-2", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-BTCCsobvyzGHmsXXqctkEiJV7mXu940oR58ank7BTcEcRRCs/E/Q/68oI1TScO/0", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://maker.vc4qi.example/credentials/DPP-2",
  "type": [
    "VerifiableCredential",
    "ProductPassport"
  ],
  "issuer": "https://maker.vc4qi.example/controller",
  "validFrom": "2026-02-15T00:00:00Z",
  "validUntil": "2036-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/product-passport.json",
    "type": "JsonSchema"
  },
  "name": "Product passport, Hair dryer HD-01, unit 0001",
  "credentialSubject": {
    "id": "urn:vc4qi-example:unit:hd-01-sn-0001",
    "activityTime": "2026-02-15T00:00:00Z",
    "productName": "Hair dryer HD-01",
    "productModelIri": "urn:vc4qi-example:product:hair-dryer-hd-01",
    "gtin": "04012345000011",
    "commodityCode": "85163100",
    "economicOperatorIri": "https://maker.vc4qi.example/controller",
    "facilityIri": "urn:vc4qi-example:site:maker-plant-1",
    "technicalData": {
      "ratedPowerW": "2000"
    },
    "sustainability": {
      "sparePartsAvailabilityYears": "7"
    },
    "complianceInformation": {
      "gsMark": {
        "markIri": "https://vc4qi.example/bindings/gs/1#GsMark",
        "productModelIri": "urn:vc4qi-example:product:hair-dryer-hd-01"
      }
    }
  },
  "evidence": [
    {
      "id": "https://maker.vc4qi.example/credentials/GSM-4",
      "type": "GsMarkCredentialReference"
    }
  ],
  "relatedResource": [
    {
      "id": "https://maker.vc4qi.example/credentials/GSM-4",
      "digestSRI": "sha384-1gT1JuLsuhbJv6AqpVHq1LjMzZa8A964EYcG3BuZ03SEfU4dFGojh0d9YHokepPX"
    }
  ],
  "credentialStatus": {
    "id": "https://maker.vc4qi.example/status/gs/1#6",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "6",
    "statusListCredential": "https://maker.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://maker.vc4qi.example/controller#key-1",
    "created": "2026-02-15T00:00:00Z",
    "proofValue": "z2WbzZMkvvhhTNGj2dK6mhzo4DnVDyvVS2Jq8MZNMAroLai88bpb5xoS3nQQEJFW9344NnTLVoiDkEjbWZofcPGPH"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/DPP-3", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-ItwJmc2JKuKls4Yk5CJyjQ4UTEcNGddkSu0P4t7N2hqqWcsPSGTzp4z0vVJByMRz", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://maker.vc4qi.example/credentials/DPP-3",
  "type": [
    "VerifiableCredential",
    "ProductPassport"
  ],
  "issuer": "https://maker.vc4qi.example/controller",
  "validFrom": "2026-05-12T00:00:00Z",
  "validUntil": "2036-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/product-passport.json",
    "type": "JsonSchema"
  },
  "name": "Product passport, Hair dryer HD-02, unit 0050",
  "credentialSubject": {
    "id": "urn:vc4qi-example:unit:hd-02-sn-0050",
    "activityTime": "2026-05-12T00:00:00Z",
    "productName": "Hair dryer HD-02",
    "productModelIri": "urn:vc4qi-example:product:hair-dryer-hd-02",
    "gtin": "04012345000028",
    "commodityCode": "85163100",
    "economicOperatorIri": "https://maker.vc4qi.example/controller",
    "facilityIri": "urn:vc4qi-example:site:maker-plant-1",
    "technicalData": {
      "ratedPowerW": "2200"
    },
    "sustainability": {
      "sparePartsAvailabilityYears": "7"
    },
    "complianceInformation": {
      "gsMark": {
        "markIri": "https://vc4qi.example/bindings/gs/1#GsMark",
        "productModelIri": "urn:vc4qi-example:product:hair-dryer-hd-02"
      }
    }
  },
  "evidence": [
    {
      "id": "https://maker.vc4qi.example/credentials/GSM-1",
      "type": "GsMarkCredentialReference"
    }
  ],
  "relatedResource": [
    {
      "id": "https://maker.vc4qi.example/credentials/GSM-1",
      "digestSRI": "sha384-PO7mwhOpkK0EZX9R1NuFbjMw+34Vo2QdG7aWXrLGsG5tGmfD/tM/TNiXeTcVZ2gc"
    }
  ],
  "credentialStatus": {
    "id": "https://maker.vc4qi.example/status/gs/1#7",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "7",
    "statusListCredential": "https://maker.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://maker.vc4qi.example/controller#key-1",
    "created": "2026-05-12T00:00:00Z",
    "proofValue": "z5e5CajawKz14GManBBEFb1XSGWYo7opERbmEZvNZVRRaaEYpCYA9rbrNeLzcGdmUMAeiwht5dUfm1A4eLAibRLAH"
  }
}
` }] } };
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Ml(e) {
  return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function Qs(e, ...t) {
  if (!Ml(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function $a(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Ol(e, t) {
  Qs(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error("digestInto() expects output buffer of length at least " + n);
}
function jn(...e) {
  for (let t = 0; t < e.length; t++)
    e[t].fill(0);
}
function xi(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function it(e, t) {
  return e << 32 - t | e >>> t;
}
function Ll(e) {
  if (typeof e != "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(e));
}
function vd(e) {
  return typeof e == "string" && (e = Ll(e)), Qs(e), e;
}
class Nl {
}
function Ws(e) {
  const t = (r) => e().update(vd(r)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
function Dl(e, t, n, r) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, r);
  const o = BigInt(32), i = BigInt(4294967295), s = Number(n >> o & i), a = Number(n & i), c = r ? 4 : 0, u = r ? 0 : 4;
  e.setUint32(t + c, s, r), e.setUint32(t + u, a, r);
}
function zl(e, t, n) {
  return e & t ^ ~e & n;
}
function Ul(e, t, n) {
  return e & t ^ e & n ^ t & n;
}
class bd extends Nl {
  constructor(t, n, r, o) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = n, this.padOffset = r, this.isLE = o, this.buffer = new Uint8Array(t), this.view = xi(this.buffer);
  }
  update(t) {
    $a(this), t = vd(t), Qs(t);
    const { view: n, buffer: r, blockLen: o } = this, i = t.length;
    for (let s = 0; s < i; ) {
      const a = Math.min(o - this.pos, i - s);
      if (a === o) {
        const c = xi(t);
        for (; o <= i - s; s += o)
          this.process(c, s);
        continue;
      }
      r.set(t.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === o && (this.process(n, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    $a(this), Ol(t, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: o, isLE: i } = this;
    let { pos: s } = this;
    n[s++] = 128, jn(this.buffer.subarray(s)), this.padOffset > o - s && (this.process(r, 0), s = 0);
    for (let g = s; g < o; g++)
      n[g] = 0;
    Dl(r, o - 8, BigInt(this.length * 8), i), this.process(r, 0);
    const a = xi(t), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u = c / 4, p = this.get();
    if (u > p.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let g = 0; g < u; g++)
      a.setUint32(4 * g, p[g], i);
  }
  digest() {
    const { buffer: t, outputLen: n } = this;
    this.digestInto(t);
    const r = t.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: n, buffer: r, length: o, finished: i, destroyed: s, pos: a } = this;
    return t.destroyed = s, t.finished = i, t.length = o, t.pos = a, o % n && t.buffer.set(r), t;
  }
  clone() {
    return this._cloneInto();
  }
}
const St = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), Se = /* @__PURE__ */ Uint32Array.from([
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
]), Ie = /* @__PURE__ */ Uint32Array.from([
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
]), Dn = /* @__PURE__ */ BigInt(2 ** 32 - 1), _a = /* @__PURE__ */ BigInt(32);
function Vl(e, t = !1) {
  return t ? { h: Number(e & Dn), l: Number(e >> _a & Dn) } : { h: Number(e >> _a & Dn) | 0, l: Number(e & Dn) | 0 };
}
function Gl(e, t = !1) {
  const n = e.length;
  let r = new Uint32Array(n), o = new Uint32Array(n);
  for (let i = 0; i < n; i++) {
    const { h: s, l: a } = Vl(e[i], t);
    [r[i], o[i]] = [s, a];
  }
  return [r, o];
}
const Pa = (e, t, n) => e >>> n, Ta = (e, t, n) => e << 32 - n | t >>> n, Zt = (e, t, n) => e >>> n | t << 32 - n, Jt = (e, t, n) => e << 32 - n | t >>> n, zn = (e, t, n) => e << 64 - n | t >>> n - 32, Un = (e, t, n) => e >>> n - 32 | t << 64 - n;
function ft(e, t, n, r) {
  const o = (t >>> 0) + (r >>> 0);
  return { h: e + n + (o / 2 ** 32 | 0) | 0, l: o | 0 };
}
const Fl = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0), Bl = (e, t, n, r) => t + n + r + (e / 2 ** 32 | 0) | 0, Hl = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0), Zl = (e, t, n, r, o) => t + n + r + o + (e / 2 ** 32 | 0) | 0, Jl = (e, t, n, r, o) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (o >>> 0), Kl = (e, t, n, r, o, i) => t + n + r + o + i + (e / 2 ** 32 | 0) | 0, Ql = /* @__PURE__ */ Uint32Array.from([
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
]), It = /* @__PURE__ */ new Uint32Array(64);
class Wl extends bd {
  constructor(t = 32) {
    super(64, t, 8, !1), this.A = St[0] | 0, this.B = St[1] | 0, this.C = St[2] | 0, this.D = St[3] | 0, this.E = St[4] | 0, this.F = St[5] | 0, this.G = St[6] | 0, this.H = St[7] | 0;
  }
  get() {
    const { A: t, B: n, C: r, D: o, E: i, F: s, G: a, H: c } = this;
    return [t, n, r, o, i, s, a, c];
  }
  // prettier-ignore
  set(t, n, r, o, i, s, a, c) {
    this.A = t | 0, this.B = n | 0, this.C = r | 0, this.D = o | 0, this.E = i | 0, this.F = s | 0, this.G = a | 0, this.H = c | 0;
  }
  process(t, n) {
    for (let g = 0; g < 16; g++, n += 4)
      It[g] = t.getUint32(n, !1);
    for (let g = 16; g < 64; g++) {
      const f = It[g - 15], h = It[g - 2], w = it(f, 7) ^ it(f, 18) ^ f >>> 3, x = it(h, 17) ^ it(h, 19) ^ h >>> 10;
      It[g] = x + It[g - 7] + w + It[g - 16] | 0;
    }
    let { A: r, B: o, C: i, D: s, E: a, F: c, G: u, H: p } = this;
    for (let g = 0; g < 64; g++) {
      const f = it(a, 6) ^ it(a, 11) ^ it(a, 25), h = p + f + zl(a, c, u) + Ql[g] + It[g] | 0, x = (it(r, 2) ^ it(r, 13) ^ it(r, 22)) + Ul(r, o, i) | 0;
      p = u, u = c, c = a, a = s + h | 0, s = i, i = o, o = r, r = h + x | 0;
    }
    r = r + this.A | 0, o = o + this.B | 0, i = i + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, u = u + this.G | 0, p = p + this.H | 0, this.set(r, o, i, s, a, c, u, p);
  }
  roundClean() {
    jn(It);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), jn(this.buffer);
  }
}
const wd = Gl([
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
].map((e) => BigInt(e))), Xl = wd[0], Yl = wd[1], At = /* @__PURE__ */ new Uint32Array(80), qt = /* @__PURE__ */ new Uint32Array(80);
class xd extends bd {
  constructor(t = 64) {
    super(128, t, 16, !1), this.Ah = Ie[0] | 0, this.Al = Ie[1] | 0, this.Bh = Ie[2] | 0, this.Bl = Ie[3] | 0, this.Ch = Ie[4] | 0, this.Cl = Ie[5] | 0, this.Dh = Ie[6] | 0, this.Dl = Ie[7] | 0, this.Eh = Ie[8] | 0, this.El = Ie[9] | 0, this.Fh = Ie[10] | 0, this.Fl = Ie[11] | 0, this.Gh = Ie[12] | 0, this.Gl = Ie[13] | 0, this.Hh = Ie[14] | 0, this.Hl = Ie[15] | 0;
  }
  // prettier-ignore
  get() {
    const { Ah: t, Al: n, Bh: r, Bl: o, Ch: i, Cl: s, Dh: a, Dl: c, Eh: u, El: p, Fh: g, Fl: f, Gh: h, Gl: w, Hh: x, Hl: b } = this;
    return [t, n, r, o, i, s, a, c, u, p, g, f, h, w, x, b];
  }
  // prettier-ignore
  set(t, n, r, o, i, s, a, c, u, p, g, f, h, w, x, b) {
    this.Ah = t | 0, this.Al = n | 0, this.Bh = r | 0, this.Bl = o | 0, this.Ch = i | 0, this.Cl = s | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = u | 0, this.El = p | 0, this.Fh = g | 0, this.Fl = f | 0, this.Gh = h | 0, this.Gl = w | 0, this.Hh = x | 0, this.Hl = b | 0;
  }
  process(t, n) {
    for (let y = 0; y < 16; y++, n += 4)
      At[y] = t.getUint32(n), qt[y] = t.getUint32(n += 4);
    for (let y = 16; y < 80; y++) {
      const d = At[y - 15] | 0, l = qt[y - 15] | 0, m = Zt(d, l, 1) ^ Zt(d, l, 8) ^ Pa(d, l, 7), I = Jt(d, l, 1) ^ Jt(d, l, 8) ^ Ta(d, l, 7), A = At[y - 2] | 0, R = qt[y - 2] | 0, j = Zt(A, R, 19) ^ zn(A, R, 61) ^ Pa(A, R, 6), E = Jt(A, R, 19) ^ Un(A, R, 61) ^ Ta(A, R, 6), O = Hl(I, E, qt[y - 7], qt[y - 16]), P = Zl(O, m, j, At[y - 7], At[y - 16]);
      At[y] = P | 0, qt[y] = O | 0;
    }
    let { Ah: r, Al: o, Bh: i, Bl: s, Ch: a, Cl: c, Dh: u, Dl: p, Eh: g, El: f, Fh: h, Fl: w, Gh: x, Gl: b, Hh: S, Hl: v } = this;
    for (let y = 0; y < 80; y++) {
      const d = Zt(g, f, 14) ^ Zt(g, f, 18) ^ zn(g, f, 41), l = Jt(g, f, 14) ^ Jt(g, f, 18) ^ Un(g, f, 41), m = g & h ^ ~g & x, I = f & w ^ ~f & b, A = Jl(v, l, I, Yl[y], qt[y]), R = Kl(A, S, d, m, Xl[y], At[y]), j = A | 0, E = Zt(r, o, 28) ^ zn(r, o, 34) ^ zn(r, o, 39), O = Jt(r, o, 28) ^ Un(r, o, 34) ^ Un(r, o, 39), P = r & i ^ r & a ^ i & a, C = o & s ^ o & c ^ s & c;
      S = x | 0, v = b | 0, x = h | 0, b = w | 0, h = g | 0, w = f | 0, { h: g, l: f } = ft(u | 0, p | 0, R | 0, j | 0), u = a | 0, p = c | 0, a = i | 0, c = s | 0, i = r | 0, s = o | 0;
      const D = Fl(j, O, C);
      r = Bl(D, R, E, P), o = D | 0;
    }
    ({ h: r, l: o } = ft(this.Ah | 0, this.Al | 0, r | 0, o | 0)), { h: i, l: s } = ft(this.Bh | 0, this.Bl | 0, i | 0, s | 0), { h: a, l: c } = ft(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: u, l: p } = ft(this.Dh | 0, this.Dl | 0, u | 0, p | 0), { h: g, l: f } = ft(this.Eh | 0, this.El | 0, g | 0, f | 0), { h, l: w } = ft(this.Fh | 0, this.Fl | 0, h | 0, w | 0), { h: x, l: b } = ft(this.Gh | 0, this.Gl | 0, x | 0, b | 0), { h: S, l: v } = ft(this.Hh | 0, this.Hl | 0, S | 0, v | 0), this.set(r, o, i, s, a, c, u, p, g, f, h, w, x, b, S, v);
  }
  roundClean() {
    jn(At, qt);
  }
  destroy() {
    jn(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class eu extends xd {
  constructor() {
    super(48), this.Ah = Se[0] | 0, this.Al = Se[1] | 0, this.Bh = Se[2] | 0, this.Bl = Se[3] | 0, this.Ch = Se[4] | 0, this.Cl = Se[5] | 0, this.Dh = Se[6] | 0, this.Dl = Se[7] | 0, this.Eh = Se[8] | 0, this.El = Se[9] | 0, this.Fh = Se[10] | 0, this.Fl = Se[11] | 0, this.Gh = Se[12] | 0, this.Gl = Se[13] | 0, this.Hh = Se[14] | 0, this.Hl = Se[15] | 0;
  }
}
const tu = /* @__PURE__ */ Ws(() => new Wl()), nu = /* @__PURE__ */ Ws(() => new xd()), ru = /* @__PURE__ */ Ws(() => new eu()), Sd = tu, iu = nu, su = ru;
class au {
  constructor(t) {
    pt(this, "_chunks", []);
    pt(this, "_algo");
    this._algo = t === "sha384" ? "sha384" : t === "sha512" ? "sha512" : "sha256";
  }
  update(t, n) {
    const r = typeof t == "string" ? new TextEncoder().encode(t) : t;
    return this._chunks.push(r), this;
  }
  digest(t) {
    const n = this._chunks.reduce((s, a) => s + a.length, 0), r = new Uint8Array(n);
    let o = 0;
    for (const s of this._chunks)
      r.set(s, o), o += s.length;
    let i;
    return this._algo === "sha384" ? i = su(r) : this._algo === "sha512" ? i = iu(r) : i = Sd(r), t === "base64" ? btoa(String.fromCharCode(...i)) : t === "hex" ? Array.from(i).map((s) => s.toString(16).padStart(2, "0")).join("") : i;
  }
}
function Ts(e) {
  return new au(e);
}
class Pe extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "CatalogError";
  }
}
function ou(e, t) {
  if (e.trim().length === 0)
    throw new Pe("INVALID_RESOURCE", `${t} must be nonempty.`);
}
function ni(e) {
  return `sha384-${Ts("sha384").update(e).digest("base64")}`;
}
function Ca(e) {
  const t = /* @__PURE__ */ new Map();
  return {
    get resolved() {
      return new Set(t.keys());
    },
    resolve(n) {
      if (!t.has(n))
        try {
          t.set(n, e.resolve(n));
        } catch (o) {
          if (!(o instanceof Pe)) throw o;
          t.set(n, o);
        }
      const r = t.get(n);
      if (r instanceof Pe) throw r;
      return { ...r, bytes: Uint8Array.from(r.bytes) };
    }
  };
}
var sn;
class Id {
  constructor(t) {
    Nn(this, sn, /* @__PURE__ */ new Map());
    for (const n of t) {
      for (const [o, i] of Object.entries({
        uri: n.uri,
        mediaType: n.mediaType,
        origin: n.origin,
        version: n.version
      })) ou(i, o);
      if (rt(this, sn).has(n.uri))
        throw new Pe("DUPLICATE_RESOURCE", `Duplicate static resource: ${n.uri}`);
      const r = ni(n.bytes);
      if (r !== n.digestSRI)
        throw new Pe(
          "INTEGRITY_MISMATCH",
          `Static resource ${n.uri} has ${r}; expected ${n.digestSRI}.`
        );
      rt(this, sn).set(n.uri, { ...n, bytes: Uint8Array.from(n.bytes) });
    }
  }
  openSession(t) {
    if (!Number.isSafeInteger(t.maxResources) || t.maxResources <= 0 || !Number.isSafeInteger(t.maxBytes) || t.maxBytes <= 0)
      throw new Pe("INVALID_RESOURCE", "Catalog budgets must be positive safe integers.");
    return new cu(rt(this, sn), Object.freeze({ ...t }));
  }
}
sn = new WeakMap();
var an, on;
class cu {
  constructor(t, n) {
    Nn(this, an, 0);
    Nn(this, on, 0);
    this.resources = t, this.budget = n;
  }
  get usage() {
    return Object.freeze({ resources: rt(this, an), bytes: rt(this, on) });
  }
  resolve(t) {
    const n = this.resources.get(t);
    if (!n)
      throw new Pe("RESOURCE_NOT_FOUND", `Static resource is not installed: ${t}`);
    if (rt(this, an) + 1 > this.budget.maxResources || rt(this, on) + n.bytes.byteLength > this.budget.maxBytes)
      throw new Pe("RESOURCE_BUDGET_EXCEEDED", `Static resource budget exceeded at ${t}.`);
    return wi(this, an, rt(this, an) + 1), wi(this, on, rt(this, on) + n.bytes.byteLength), { ...n, bytes: Uint8Array.from(n.bytes) };
  }
}
an = new WeakMap(), on = new WeakMap();
function Ad(e) {
  return async (t) => {
    const n = e.resolve(t);
    if (n.mediaType !== "application/json" && n.mediaType !== "application/ld+json" && !n.mediaType.endsWith("+json"))
      throw new Pe(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} has unsupported media type ${n.mediaType}.`
      );
    let r;
    try {
      const o = new TextDecoder("utf-8", { fatal: !0 }).decode(n.bytes);
      r = JSON.parse(o);
    } catch (o) {
      throw new Pe(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} is not valid UTF-8 JSON: ${String(o)}.`
      );
    }
    return { contextUrl: null, document: r, documentUrl: t };
  };
}
const Ea = "https://vc4qi.example/bindings/rm/1", Si = [
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
function Vn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function qd(e) {
  if (e !== null && typeof e == "object") {
    for (const t of Object.values(e)) qd(t);
    Object.freeze(e);
  }
  return e;
}
function du(e) {
  if (!Vn(e)) throw new TypeError("Binding manifest must be an object.");
  if (Object.keys(e).length !== Si.length || Si.some((n) => !Object.hasOwn(e, n)))
    throw new TypeError("Binding manifest must contain exactly the supported top-level categories.");
  if (typeof e.id != "string" || e.id.length === 0 || typeof e.version != "string" || e.version.length === 0 || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Binding manifest identity, version, or status is invalid.");
  if (!Vn(e.installation) || e.installation.status !== "incomplete" && e.installation.status !== "installable" || typeof e.installation.reason != "string" || e.installation.reason.length === 0 || !Array.isArray(e.installation.pendingResources) || e.installation.pendingResources.some((n) => typeof n != "string" || n.length === 0))
    throw new TypeError("Binding manifest installation state is invalid.");
  if (!Array.isArray(e.factMappings) || e.factMappings.length === 0 || e.factMappings.some((n) => !Vn(n)))
    throw new TypeError("Binding manifest factMappings must be a nonempty object array.");
  for (const n of Si.slice(4))
    if (!(n === "installation" || n === "factMappings") && (!Vn(e[n]) || Object.keys(e[n]).length === 0))
      throw new TypeError(`Binding manifest ${n} must be a nonempty object.`);
  return qd(structuredClone(e));
}
const cn = "https://www.w3.org/ns/credentials/v2", lu = "https://vc4qi.example/contexts/rm/1", Kt = "https://vc4qi.example/schemas/rm/1/", Rd = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", Cs = BigInt(58);
function uu(e) {
  if (e.length === 0) return "";
  let t = 0;
  for (const o of e) {
    if (o !== 0) break;
    t++;
  }
  let n = 0n;
  for (const o of e)
    n = n * 256n + BigInt(o);
  const r = [];
  for (; n > 0n; ) {
    const o = Number(n % Cs);
    n = n / Cs, r.unshift(o);
  }
  return "1".repeat(t) + r.map((o) => Rd[o]).join("");
}
function pu(e) {
  if (e.length === 0) return new Uint8Array(0);
  let t = 0;
  for (const s of e) {
    if (s !== "1") break;
    t++;
  }
  let n = 0n;
  for (const s of e) {
    const a = Rd.indexOf(s);
    if (a === -1) throw new Error(`Invalid base58btc character: '${s}'`);
    n = n * Cs + BigInt(a);
  }
  const r = [];
  for (; n > 0n; )
    r.push(Number(n & 0xffn)), n >>= 8n;
  r.reverse();
  const o = Uint8Array.from(r), i = new Uint8Array(t + o.length);
  return i.set(o, t), i;
}
function fu(e) {
  return "z" + uu(e);
}
function Xs(e) {
  if (!e.startsWith("z"))
    throw new Error(`Expected multibase base58btc prefix 'z', got '${e[0]}'`);
  return pu(e.slice(1));
}
const ka = [237, 1], hu = ["revoked", "expires"];
function ge(e, t, n, r = {}) {
  return Object.freeze({ state: e, code: t, reason: n, ...r });
}
function Fr(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function mu(e) {
  if (typeof e == "string" && e.length > 0) return e;
  if (Fr(e) && typeof e.id == "string" && e.id.length > 0) return e.id;
}
function yu(e) {
  const t = e.indexOf("#");
  if (!(t <= 0 || t === e.length - 1)) {
    try {
      const n = new URL(e);
      if (n.protocol !== "https:" && n.protocol !== "did:") return;
    } catch {
      return;
    }
    return e.slice(0, t);
  }
}
function gu(e) {
  if (typeof e != "string" || !e.startsWith("z")) return;
  let t;
  try {
    t = Xs(e);
  } catch {
    return;
  }
  if (!(t.length !== 34 || t[0] !== ka[0] || t[1] !== ka[1]))
    return t.slice(2);
}
function vu(e, t, n) {
  const r = mu(e);
  if (r === void 0)
    return ge("not_established", "ISSUER_MISSING", "The credential has no issuer identifier.");
  if (typeof t != "string")
    return ge("contradicted", "MALFORMED_METHOD", "The proof names no verification method.");
  const o = yu(t);
  if (o === void 0)
    return ge(
      "contradicted",
      "MALFORMED_METHOD",
      `Verification method ${t} is not an absolute URL with a fragment.`
    );
  if (o !== r)
    return ge(
      "contradicted",
      "NOT_ISSUER_CONTROLLER",
      `Verification method ${t} is not in issuer ${r}'s controller document.`
    );
  let i, s;
  try {
    const f = n.resolve(o);
    s = f.digestSRI, i = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(f.bytes));
  } catch (f) {
    return f instanceof Pe ? ge(
      "not_established",
      "CONTROLLER_NOT_INSTALLED",
      `Controller document ${o} is not available: ${f.code}.`
    ) : ge(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${o} is not valid UTF-8 JSON.`
    );
  }
  if (!Fr(i))
    return ge(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${o} is not a JSON object.`
    );
  if (i.id !== o)
    return ge(
      "contradicted",
      "CONTROLLER_ID_MISMATCH",
      `Controller document at ${o} identifies itself as ${String(i.id)}.`
    );
  const c = (Array.isArray(i.verificationMethod) ? i.verificationMethod : []).filter((f) => Fr(f) && f.id === t);
  if (c.length === 0)
    return ge(
      "contradicted",
      "METHOD_NOT_FOUND",
      `${t} is not listed in its controller document.`
    );
  if (c.length > 1)
    return ge(
      "contradicted",
      "METHOD_AMBIGUOUS",
      `${t} is listed more than once in its controller document.`
    );
  const u = c[0];
  if (u.type !== "Multikey")
    return ge(
      "not_established",
      "METHOD_TYPE_UNSUPPORTED",
      `Verification method type ${String(u.type)} is not supported; Multikey is required.`
    );
  if (u.controller !== o)
    return ge(
      "contradicted",
      "METHOD_CONTROLLER_MISMATCH",
      `${t} is controlled by ${String(u.controller)}, not ${o}.`
    );
  if (hu.some((f) => Object.hasOwn(u, f)))
    return ge(
      "not_established",
      "METHOD_LIFECYCLE_UNSUPPORTED",
      "Key revocation/expiry metadata is not supported in the initial slice."
    );
  const p = gu(u.publicKeyMultibase);
  if (p === void 0)
    return ge(
      "contradicted",
      "INVALID_PUBLIC_KEY",
      `${t} does not carry an Ed25519 Multikey public key.`
    );
  const g = Array.isArray(i.assertionMethod) ? i.assertionMethod : [];
  return g.includes(t) ? ge(
    "established",
    "AUTHORIZED",
    `${t} is the issuer's Ed25519 assertion key.`,
    { publicKey: p, verificationMethod: t, controllerDocumentDigest: s }
  ) : g.some((f) => Fr(f) && f.id === t) ? ge(
    "not_established",
    "EMBEDDED_METHOD_UNSUPPORTED",
    "Embedded assertionMethod entries are not supported; a reference is required."
  ) : ge(
    "contradicted",
    "NOT_ASSERTION_METHOD",
    `${t} is not authorized for assertionMethod.`
  );
}
const Ma = ["accept-successor", "require-extension", "none"], bu = ["value-at-most-limit", "value-plus-expanded-uncertainty-at-most-limit"], wu = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/;
function He(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const Ne = (e) => typeof e == "string" && e.trim().length > 0, Ii = (e) => Array.isArray(e) && e.length > 0 && e.every(Ne) && new Set(e).size === e.length;
function Ys(e) {
  if (!He(e) || !Ne(e.id) || !Ne(e.version) || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Reliance profile identity, version or status is invalid.");
  const t = e.binding;
  if (!He(t) || !Ne(t.id) || !Ne(t.version))
    throw new TypeError("Reliance profile must name exactly one binding and version.");
  if (!Array.isArray(e.trustAnchors) || e.trustAnchors.some((u) => !He(u) || !Ne(u.id) || !Ii(u.purposes)))
    throw new TypeError("Reliance profile trustAnchors must list anchors with explicit purposes.");
  const n = e.authority;
  if (!He(n) || !Ii(n.certificateRoutes) || !Array.isArray(n.globalRestrictions) || !n.globalRestrictions.every(Ne) || !Number.isSafeInteger(n.maxRoutes) || n.maxRoutes <= 0)
    throw new TypeError("Reliance profile authority needs certificateRoutes, globalRestrictions and a positive maxRoutes.");
  const r = e.credentialStatus;
  if (!He(r) || typeof r.required != "boolean" || !Ii(r.purposes) || !Number.isSafeInteger(r.maxAgeSeconds) || r.maxAgeSeconds <= 0)
    throw new TypeError("Reliance profile credentialStatus needs required, purposes and a positive maxAgeSeconds.");
  const o = e.mapping;
  if (!He(o) || !Ma.includes(o.methodSuccession))
    throw new TypeError(`Reliance profile mapping.methodSuccession must be one of ${Ma.join(", ")}.`);
  const i = e.conformity;
  if (!He(i) || !Array.isArray(i.requirements) || !Array.isArray(i.decisionRules) || i.requirements.some((u) => !He(u) || !Ne(u.id) || !Ne(u.propertyIri) || !Ne(u.quantityKindIri) || !He(u.upperLimit) || typeof u.upperLimit.value != "string" || !wu.test(u.upperLimit.value) || !Ne(u.upperLimit.unit)) || i.decisionRules.some((u) => !He(u) || !Ne(u.id) || !bu.includes(u.acceptWhen)))
    throw new TypeError("Reliance profile conformity needs requirements (id, propertyIri, quantityKindIri, upperLimit) and decisionRules (id, acceptWhen).");
  if (e.bindingRules !== void 0 && !He(e.bindingRules))
    throw new TypeError("Reliance profile bindingRules must be an object when present.");
  const s = i.requirements, a = i.decisionRules, c = [...s.map((u) => u.id), ...a.map((u) => u.id)];
  if (new Set(c).size !== c.length) throw new TypeError("Reliance profile conformity ids must be unique.");
  return Object.freeze({
    id: e.id,
    version: e.version,
    status: e.status,
    binding: Object.freeze({ id: t.id, version: t.version }),
    trustAnchors: Object.freeze(e.trustAnchors.map((u) => Object.freeze({
      id: u.id,
      purposes: Object.freeze([...u.purposes])
    }))),
    authority: Object.freeze({
      certificateRoutes: Object.freeze([...n.certificateRoutes]),
      globalRestrictions: Object.freeze([...n.globalRestrictions]),
      maxRoutes: n.maxRoutes
    }),
    credentialStatus: Object.freeze({
      required: r.required,
      purposes: Object.freeze([...r.purposes]),
      maxAgeSeconds: r.maxAgeSeconds
    }),
    mapping: Object.freeze({ methodSuccession: o.methodSuccession }),
    conformity: Object.freeze({
      requirements: Object.freeze(s.map((u) => Object.freeze({
        id: u.id,
        propertyIri: u.propertyIri,
        quantityKindIri: u.quantityKindIri,
        upperLimit: Object.freeze({ value: u.upperLimit.value, unit: u.upperLimit.unit })
      }))),
      decisionRules: Object.freeze(a.map((u) => Object.freeze({ id: u.id, acceptWhen: u.acceptWhen })))
    }),
    bindingRules: Object.freeze({ ...e.bindingRules })
  });
}
function ue(e, t) {
  if (e.trim().length === 0)
    throw new TypeError(`${t} must be a non-empty string.`);
}
function Ai(e, t) {
  if (new Set(e).size !== e.length)
    throw new TypeError(`${t} must not contain duplicates.`);
}
function Es(e, t) {
  const n = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/.exec(e);
  if (!n)
    throw new TypeError(`${t} must be an ISO 8601 date-time with an explicit offset.`);
  const [, r, o, i, s, a, c] = n, u = n[7], p = Number(r), g = Number(o), f = Number(i), h = Number(s), w = Number(a), x = Number(c), b = /* @__PURE__ */ new Date(0);
  b.setUTCFullYear(p, g - 1, f), b.setUTCHours(0, 0, 0, 0);
  const S = b.getUTCFullYear() !== p || b.getUTCMonth() !== g - 1 || b.getUTCDate() !== f, v = u === "Z" ? null : /^([+-])(\d{2}):(\d{2})$/.exec(u), y = v !== null && (Number(v[2]) > 23 || Number(v[3]) > 59);
  if (p < 1 || S || h > 23 || w > 59 || x > 59 || y || !Number.isFinite(Date.parse(e)))
    throw new TypeError(`${t} must be a valid ISO 8601 date-time.`);
}
function qi(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0)
    throw new TypeError(`${t} must be a positive safe integer.`);
}
function Jr(e, t) {
  ue(e.id, `${t}.id`), ue(e.version, `${t}.version`);
}
function Kr(e) {
  return Object.freeze({ id: e.id, version: e.version });
}
function xn(e) {
  if (!["established", "contradicted", "not_established"].includes(e.state))
    throw new TypeError(`Unsupported semantic state: ${String(e.state)}.`);
  if (!["executed", "not_run"].includes(e.execution))
    throw new TypeError(`Unsupported execution state: ${String(e.execution)}.`);
  if (e.execution === "not_run" && e.state !== "not_established")
    throw new TypeError("A predicate that was not run must be not_established.");
  return Object.freeze({
    ...e,
    reasons: Object.freeze([...e.reasons]),
    sourcePointers: Object.freeze([...e.sourcePointers])
  });
}
function xu(e) {
  if (ue(e.requestId, "requestId"), ue(e.targetId, "targetId"), ue(e.purpose, "purpose"), ue(e.trustConfigId, "trustConfigId"), Jr(e.binding, "binding"), Jr(e.profile, "profile"), Es(e.evaluationTime, "evaluationTime"), Es(e.activityTime, "activityTime"), e.selectedClaims.length === 0)
    throw new TypeError("selectedClaims must contain at least one claim.");
  for (const [i, s] of e.selectedClaims.entries())
    ue(s.id, `selectedClaims[${i}].id`), ue(s.sourcePointer, `selectedClaims[${i}].sourcePointer`);
  Ai(e.selectedClaims.map((i) => i.id), "selected claim IDs"), Ai(e.selectedClaims.map((i) => i.sourcePointer), "selected claim source pointers");
  for (const [i, s] of e.suppliedEvidence.entries())
    ue(s, `suppliedEvidence[${i}]`);
  Ai(e.suppliedEvidence, "suppliedEvidence"), qi(e.resolverLimits.maxResources, "resolverLimits.maxResources"), qi(e.resolverLimits.maxDepth, "resolverLimits.maxDepth"), qi(e.resolverLimits.maxBytes, "resolverLimits.maxBytes"), e.conformity && (ue(e.conformity.requirementId, "conformity.requirementId"), ue(e.conformity.decisionRuleId, "conformity.decisionRuleId"));
  const t = Object.freeze(e.selectedClaims.map((i) => Object.freeze({
    id: i.id,
    sourcePointer: i.sourcePointer
  }))), n = Object.freeze([...e.suppliedEvidence]), r = Object.freeze({ ...e.resolverLimits }), o = e.conformity ? Object.freeze({ ...e.conformity }) : void 0;
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    selectedClaims: t,
    purpose: e.purpose,
    binding: Kr(e.binding),
    profile: Kr(e.profile),
    trustConfigId: e.trustConfigId,
    evaluationTime: e.evaluationTime,
    activityTime: e.activityTime,
    suppliedEvidence: n,
    resolverLimits: r,
    ...o ? { conformity: o } : {}
  });
}
function Su(e, t) {
  if (!Number.isInteger(e.gate) || e.gate < 0 || e.gate > 6)
    throw new TypeError(`trace[${t}].gate must be a canonical gate number 0-6.`);
  ue(e.nodeUse, `trace[${t}].nodeUse`), ue(e.predicate, `trace[${t}].predicate`), ue(e.reason, `trace[${t}].reason`);
  const n = xn({
    state: e.state,
    execution: e.execution,
    reasons: [e.reason],
    sourcePointers: e.sources
  });
  return Object.freeze({
    gate: e.gate,
    nodeUse: e.nodeUse,
    predicate: e.predicate,
    state: n.state,
    execution: n.execution,
    reason: e.reason,
    sources: Object.freeze([...e.sources])
  });
}
function Iu(e, t) {
  if (ue(e.uri, `resources[${t}].uri`), !/^sha384-[A-Za-z0-9+/]{64}$/.test(e.digestSRI))
    throw new TypeError(`resources[${t}].digestSRI must be a SHA-384 SRI value.`);
  if (!["static", "artifact", "status"].includes(e.kind) || !["catalog", "supplied"].includes(e.source))
    throw new TypeError(`resources[${t}] has an unsupported kind or source.`);
  return Es(e.observedAt, `resources[${t}].observedAt`), Object.freeze({ ...e });
}
function ri(e) {
  if (ue(e.requestId, "requestId"), ue(e.targetId, "targetId"), Jr(e.binding, "binding"), Jr(e.profile, "profile"), e.artifactVerification.forEach((t, n) => ue(t.artifactId, `artifactVerification[${n}].artifactId`)), e.authorization.forEach((t, n) => ue(t.claimId, `authorization[${n}].claimId`)), e.support.forEach((t, n) => ue(t.obligationId, `support[${n}].obligationId`)), e.conformity.requested)
    ue(e.conformity.requirementId, "conformity.requirementId"), ue(e.conformity.decisionRuleId, "conformity.decisionRuleId");
  else if (e.conformity.requested !== !1 || e.conformity.execution !== "not_run")
    throw new TypeError("Unrequested conformity must have execution state not_run.");
  if (!["accept", "reject", "not_established"].includes(e.decision))
    throw new TypeError(`Unsupported reliance decision: ${String(e.decision)}.`);
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: Kr(e.binding),
    profile: Kr(e.profile),
    artifactVerification: Object.freeze(e.artifactVerification.map((t) => xn({
      ...t
    }))),
    authorization: Object.freeze(e.authorization.map((t) => Object.freeze({
      ...xn(t),
      routeWitnessIds: Object.freeze([...t.routeWitnessIds])
    }))),
    support: Object.freeze(e.support.map((t) => Object.freeze({
      ...xn(t),
      witnessIds: Object.freeze([...t.witnessIds])
    }))),
    conformity: e.conformity.requested ? xn({ ...e.conformity }) : Object.freeze({ requested: !1, execution: "not_run" }),
    decision: e.decision,
    trace: Object.freeze((e.trace ?? []).map(Su)),
    resources: Object.freeze((e.resources ?? []).map(Iu)),
    limitations: Object.freeze([...e.limitations ?? []])
  });
}
function jd(e, t) {
  if (e.length === 0)
    throw new TypeError(`${t} requires at least one semantic state.`);
  for (const n of e)
    if (!["established", "contradicted", "not_established"].includes(n))
      throw new TypeError(`${t} received unsupported semantic state: ${String(n)}.`);
}
function we(e) {
  return jd(e, "semanticAnd"), e.includes("contradicted") ? "contradicted" : e.every((t) => t === "established") ? "established" : "not_established";
}
function En(e) {
  return jd(e, "semanticOr"), e.includes("established") ? "established" : e.every((t) => t === "contradicted") ? "contradicted" : "not_established";
}
function ea(e) {
  const t = we(e);
  return t === "established" ? "accept" : t === "contradicted" ? "reject" : "not_established";
}
var Oa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ta(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Au(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Gn = { exports: {} }, Ri = {}, ht = {}, Nt = {}, ji = {}, $i = {}, _i = {}, La;
function Qr() {
  return La || (La = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class n extends t {
      constructor(v) {
        if (super(), !e.IDENTIFIER.test(v))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = v;
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
    e.Name = n;
    class r extends t {
      constructor(v) {
        super(), this._items = typeof v == "string" ? [v] : v;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const v = this._items[0];
        return v === "" || v === '""';
      }
      get str() {
        var v;
        return (v = this._str) !== null && v !== void 0 ? v : this._str = this._items.reduce((y, d) => `${y}${d}`, "");
      }
      get names() {
        var v;
        return (v = this._names) !== null && v !== void 0 ? v : this._names = this._items.reduce((y, d) => (d instanceof n && (y[d.str] = (y[d.str] || 0) + 1), y), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function o(S, ...v) {
      const y = [S[0]];
      let d = 0;
      for (; d < v.length; )
        a(y, v[d]), y.push(S[++d]);
      return new r(y);
    }
    e._ = o;
    const i = new r("+");
    function s(S, ...v) {
      const y = [h(S[0])];
      let d = 0;
      for (; d < v.length; )
        y.push(i), a(y, v[d]), y.push(i, h(S[++d]));
      return c(y), new r(y);
    }
    e.str = s;
    function a(S, v) {
      v instanceof r ? S.push(...v._items) : v instanceof n ? S.push(v) : S.push(g(v));
    }
    e.addCodeArg = a;
    function c(S) {
      let v = 1;
      for (; v < S.length - 1; ) {
        if (S[v] === i) {
          const y = u(S[v - 1], S[v + 1]);
          if (y !== void 0) {
            S.splice(v - 1, 3, y);
            continue;
          }
          S[v++] = "+";
        }
        v++;
      }
    }
    function u(S, v) {
      if (v === '""')
        return S;
      if (S === '""')
        return v;
      if (typeof S == "string")
        return v instanceof n || S[S.length - 1] !== '"' ? void 0 : typeof v != "string" ? `${S.slice(0, -1)}${v}"` : v[0] === '"' ? S.slice(0, -1) + v.slice(1) : void 0;
      if (typeof v == "string" && v[0] === '"' && !(S instanceof n))
        return `"${S}${v.slice(1)}`;
    }
    function p(S, v) {
      return v.emptyStr() ? S : S.emptyStr() ? v : s`${S}${v}`;
    }
    e.strConcat = p;
    function g(S) {
      return typeof S == "number" || typeof S == "boolean" || S === null ? S : h(Array.isArray(S) ? S.join(",") : S);
    }
    function f(S) {
      return new r(h(S));
    }
    e.stringify = f;
    function h(S) {
      return JSON.stringify(S).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = h;
    function w(S) {
      return typeof S == "string" && e.IDENTIFIER.test(S) ? new r(`.${S}`) : o`[${S}]`;
    }
    e.getProperty = w;
    function x(S) {
      if (typeof S == "string" && e.IDENTIFIER.test(S))
        return new r(`${S}`);
      throw new Error(`CodeGen: invalid export name: ${S}, use explicit $id name mapping`);
    }
    e.getEsmExportName = x;
    function b(S) {
      return new r(S.toString());
    }
    e.regexpCode = b;
  })(_i)), _i;
}
var Pi = {}, Na;
function Da() {
  return Na || (Na = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Qr();
    class n extends Error {
      constructor(u) {
        super(`CodeGen: "code" for ${u} not defined`), this.value = u.value;
      }
    }
    var r;
    (function(c) {
      c[c.Started = 0] = "Started", c[c.Completed = 1] = "Completed";
    })(r || (e.UsedValueState = r = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class o {
      constructor({ prefixes: u, parent: p } = {}) {
        this._names = {}, this._prefixes = u, this._parent = p;
      }
      toName(u) {
        return u instanceof t.Name ? u : this.name(u);
      }
      name(u) {
        return new t.Name(this._newName(u));
      }
      _newName(u) {
        const p = this._names[u] || this._nameGroup(u);
        return `${u}${p.index++}`;
      }
      _nameGroup(u) {
        var p, g;
        if (!((g = (p = this._parent) === null || p === void 0 ? void 0 : p._prefixes) === null || g === void 0) && g.has(u) || this._prefixes && !this._prefixes.has(u))
          throw new Error(`CodeGen: prefix "${u}" is not allowed in this scope`);
        return this._names[u] = { prefix: u, index: 0 };
      }
    }
    e.Scope = o;
    class i extends t.Name {
      constructor(u, p) {
        super(p), this.prefix = u;
      }
      setValue(u, { property: p, itemIndex: g }) {
        this.value = u, this.scopePath = (0, t._)`.${new t.Name(p)}[${g}]`;
      }
    }
    e.ValueScopeName = i;
    const s = (0, t._)`\n`;
    class a extends o {
      constructor(u) {
        super(u), this._values = {}, this._scope = u.scope, this.opts = { ...u, _n: u.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(u) {
        return new i(u, this._newName(u));
      }
      value(u, p) {
        var g;
        if (p.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const f = this.toName(u), { prefix: h } = f, w = (g = p.key) !== null && g !== void 0 ? g : p.ref;
        let x = this._values[h];
        if (x) {
          const v = x.get(w);
          if (v)
            return v;
        } else
          x = this._values[h] = /* @__PURE__ */ new Map();
        x.set(w, f);
        const b = this._scope[h] || (this._scope[h] = []), S = b.length;
        return b[S] = p.ref, f.setValue(p, { property: h, itemIndex: S }), f;
      }
      getValue(u, p) {
        const g = this._values[u];
        if (g)
          return g.get(p);
      }
      scopeRefs(u, p = this._values) {
        return this._reduceValues(p, (g) => {
          if (g.scopePath === void 0)
            throw new Error(`CodeGen: name "${g}" has no value`);
          return (0, t._)`${u}${g.scopePath}`;
        });
      }
      scopeCode(u = this._values, p, g) {
        return this._reduceValues(u, (f) => {
          if (f.value === void 0)
            throw new Error(`CodeGen: name "${f}" has no value`);
          return f.value.code;
        }, p, g);
      }
      _reduceValues(u, p, g = {}, f) {
        let h = t.nil;
        for (const w in u) {
          const x = u[w];
          if (!x)
            continue;
          const b = g[w] = g[w] || /* @__PURE__ */ new Map();
          x.forEach((S) => {
            if (b.has(S))
              return;
            b.set(S, r.Started);
            let v = p(S);
            if (v) {
              const y = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              h = (0, t._)`${h}${y} ${S} = ${v};${this.opts._n}`;
            } else if (v = f?.(S))
              h = (0, t._)`${h}${v}${this.opts._n}`;
            else
              throw new n(S);
            b.set(S, r.Completed);
          });
        }
        return h;
      }
    }
    e.ValueScope = a;
  })(Pi)), Pi;
}
var za;
function te() {
  return za || (za = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Qr(), n = /* @__PURE__ */ Da();
    var r = /* @__PURE__ */ Qr();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return r._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return r.str;
    } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
      return r.strConcat;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return r.nil;
    } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
      return r.getProperty;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return r.stringify;
    } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
      return r.regexpCode;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return r.Name;
    } });
    var o = /* @__PURE__ */ Da();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return o.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return o.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return o.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return o.varKinds;
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
    class i {
      optimizeNodes() {
        return this;
      }
      optimizeNames($, q) {
        return this;
      }
    }
    class s extends i {
      constructor($, q, T) {
        super(), this.varKind = $, this.name = q, this.rhs = T;
      }
      render({ es5: $, _n: q }) {
        const T = $ ? n.varKinds.var : this.varKind, z = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${T} ${this.name}${z};` + q;
      }
      optimizeNames($, q) {
        if ($[this.name.str])
          return this.rhs && (this.rhs = C(this.rhs, $, q)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends i {
      constructor($, q, T) {
        super(), this.lhs = $, this.rhs = q, this.sideEffects = T;
      }
      render({ _n: $ }) {
        return `${this.lhs} = ${this.rhs};` + $;
      }
      optimizeNames($, q) {
        if (!(this.lhs instanceof t.Name && !$[this.lhs.str] && !this.sideEffects))
          return this.rhs = C(this.rhs, $, q), this;
      }
      get names() {
        const $ = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return P($, this.rhs);
      }
    }
    class c extends a {
      constructor($, q, T, z) {
        super($, T, z), this.op = q;
      }
      render({ _n: $ }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + $;
      }
    }
    class u extends i {
      constructor($) {
        super(), this.label = $, this.names = {};
      }
      render({ _n: $ }) {
        return `${this.label}:` + $;
      }
    }
    class p extends i {
      constructor($) {
        super(), this.label = $, this.names = {};
      }
      render({ _n: $ }) {
        return `break${this.label ? ` ${this.label}` : ""};` + $;
      }
    }
    class g extends i {
      constructor($) {
        super(), this.error = $;
      }
      render({ _n: $ }) {
        return `throw ${this.error};` + $;
      }
      get names() {
        return this.error.names;
      }
    }
    class f extends i {
      constructor($) {
        super(), this.code = $;
      }
      render({ _n: $ }) {
        return `${this.code};` + $;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames($, q) {
        return this.code = C(this.code, $, q), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class h extends i {
      constructor($ = []) {
        super(), this.nodes = $;
      }
      render($) {
        return this.nodes.reduce((q, T) => q + T.render($), "");
      }
      optimizeNodes() {
        const { nodes: $ } = this;
        let q = $.length;
        for (; q--; ) {
          const T = $[q].optimizeNodes();
          Array.isArray(T) ? $.splice(q, 1, ...T) : T ? $[q] = T : $.splice(q, 1);
        }
        return $.length > 0 ? this : void 0;
      }
      optimizeNames($, q) {
        const { nodes: T } = this;
        let z = T.length;
        for (; z--; ) {
          const Z = T[z];
          Z.optimizeNames($, q) || (D($, Z.names), T.splice(z, 1));
        }
        return T.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce(($, q) => O($, q.names), {});
      }
    }
    class w extends h {
      render($) {
        return "{" + $._n + super.render($) + "}" + $._n;
      }
    }
    class x extends h {
    }
    class b extends w {
    }
    b.kind = "else";
    class S extends w {
      constructor($, q) {
        super(q), this.condition = $;
      }
      render($) {
        let q = `if(${this.condition})` + super.render($);
        return this.else && (q += "else " + this.else.render($)), q;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const $ = this.condition;
        if ($ === !0)
          return this.nodes;
        let q = this.else;
        if (q) {
          const T = q.optimizeNodes();
          q = this.else = Array.isArray(T) ? new b(T) : T;
        }
        if (q)
          return $ === !1 ? q instanceof S ? q : q.nodes : this.nodes.length ? this : new S(_($), q instanceof S ? [q] : q.nodes);
        if (!($ === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames($, q) {
        var T;
        if (this.else = (T = this.else) === null || T === void 0 ? void 0 : T.optimizeNames($, q), !!(super.optimizeNames($, q) || this.else))
          return this.condition = C(this.condition, $, q), this;
      }
      get names() {
        const $ = super.names;
        return P($, this.condition), this.else && O($, this.else.names), $;
      }
    }
    S.kind = "if";
    class v extends w {
    }
    v.kind = "for";
    class y extends v {
      constructor($) {
        super(), this.iteration = $;
      }
      render($) {
        return `for(${this.iteration})` + super.render($);
      }
      optimizeNames($, q) {
        if (super.optimizeNames($, q))
          return this.iteration = C(this.iteration, $, q), this;
      }
      get names() {
        return O(super.names, this.iteration.names);
      }
    }
    class d extends v {
      constructor($, q, T, z) {
        super(), this.varKind = $, this.name = q, this.from = T, this.to = z;
      }
      render($) {
        const q = $.es5 ? n.varKinds.var : this.varKind, { name: T, from: z, to: Z } = this;
        return `for(${q} ${T}=${z}; ${T}<${Z}; ${T}++)` + super.render($);
      }
      get names() {
        const $ = P(super.names, this.from);
        return P($, this.to);
      }
    }
    class l extends v {
      constructor($, q, T, z) {
        super(), this.loop = $, this.varKind = q, this.name = T, this.iterable = z;
      }
      render($) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render($);
      }
      optimizeNames($, q) {
        if (super.optimizeNames($, q))
          return this.iterable = C(this.iterable, $, q), this;
      }
      get names() {
        return O(super.names, this.iterable.names);
      }
    }
    class m extends w {
      constructor($, q, T) {
        super(), this.name = $, this.args = q, this.async = T;
      }
      render($) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render($);
      }
    }
    m.kind = "func";
    class I extends h {
      render($) {
        return "return " + super.render($);
      }
    }
    I.kind = "return";
    class A extends w {
      render($) {
        let q = "try" + super.render($);
        return this.catch && (q += this.catch.render($)), this.finally && (q += this.finally.render($)), q;
      }
      optimizeNodes() {
        var $, q;
        return super.optimizeNodes(), ($ = this.catch) === null || $ === void 0 || $.optimizeNodes(), (q = this.finally) === null || q === void 0 || q.optimizeNodes(), this;
      }
      optimizeNames($, q) {
        var T, z;
        return super.optimizeNames($, q), (T = this.catch) === null || T === void 0 || T.optimizeNames($, q), (z = this.finally) === null || z === void 0 || z.optimizeNames($, q), this;
      }
      get names() {
        const $ = super.names;
        return this.catch && O($, this.catch.names), this.finally && O($, this.finally.names), $;
      }
    }
    class R extends w {
      constructor($) {
        super(), this.error = $;
      }
      render($) {
        return `catch(${this.error})` + super.render($);
      }
    }
    R.kind = "catch";
    class j extends w {
      render($) {
        return "finally" + super.render($);
      }
    }
    j.kind = "finally";
    class E {
      constructor($, q = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...q, _n: q.lines ? `
` : "" }, this._extScope = $, this._scope = new n.Scope({ parent: $ }), this._nodes = [new x()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name($) {
        return this._scope.name($);
      }
      // reserves unique name in the external scope
      scopeName($) {
        return this._extScope.name($);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue($, q) {
        const T = this._extScope.value($, q);
        return (this._values[T.prefix] || (this._values[T.prefix] = /* @__PURE__ */ new Set())).add(T), T;
      }
      getScopeValue($, q) {
        return this._extScope.getValue($, q);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs($) {
        return this._extScope.scopeRefs($, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def($, q, T, z) {
        const Z = this._scope.toName(q);
        return T !== void 0 && z && (this._constants[Z.str] = T), this._leafNode(new s($, Z, T)), Z;
      }
      // `const` declaration (`var` in es5 mode)
      const($, q, T) {
        return this._def(n.varKinds.const, $, q, T);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let($, q, T) {
        return this._def(n.varKinds.let, $, q, T);
      }
      // `var` declaration with optional assignment
      var($, q, T) {
        return this._def(n.varKinds.var, $, q, T);
      }
      // assignment code
      assign($, q, T) {
        return this._leafNode(new a($, q, T));
      }
      // `+=` code
      add($, q) {
        return this._leafNode(new c($, e.operators.ADD, q));
      }
      // appends passed SafeExpr to code or executes Block
      code($) {
        return typeof $ == "function" ? $() : $ !== t.nil && this._leafNode(new f($)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...$) {
        const q = ["{"];
        for (const [T, z] of $)
          q.length > 1 && q.push(","), q.push(T), (T !== z || this.opts.es5) && (q.push(":"), (0, t.addCodeArg)(q, z));
        return q.push("}"), new t._Code(q);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if($, q, T) {
        if (this._blockNode(new S($)), q && T)
          this.code(q).else().code(T).endIf();
        else if (q)
          this.code(q).endIf();
        else if (T)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf($) {
        return this._elseNode(new S($));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new b());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(S, b);
      }
      _for($, q) {
        return this._blockNode($), q && this.code(q).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for($, q) {
        return this._for(new y($), q);
      }
      // `for` statement for a range of values
      forRange($, q, T, z, Z = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Q = this._scope.toName($);
        return this._for(new d(Z, Q, q, T), () => z(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf($, q, T, z = n.varKinds.const) {
        const Z = this._scope.toName($);
        if (this.opts.es5) {
          const Q = q instanceof t.Name ? q : this.var("_arr", q);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (J) => {
            this.var(Z, (0, t._)`${Q}[${J}]`), T(Z);
          });
        }
        return this._for(new l("of", z, Z, q), () => T(Z));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn($, q, T, z = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf($, (0, t._)`Object.keys(${q})`, T);
        const Z = this._scope.toName($);
        return this._for(new l("in", z, Z, q), () => T(Z));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(v);
      }
      // `label` statement
      label($) {
        return this._leafNode(new u($));
      }
      // `break` statement
      break($) {
        return this._leafNode(new p($));
      }
      // `return` statement
      return($) {
        const q = new I();
        if (this._blockNode(q), this.code($), q.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(I);
      }
      // `try` statement
      try($, q, T) {
        if (!q && !T)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const z = new A();
        if (this._blockNode(z), this.code($), q) {
          const Z = this.name("e");
          this._currNode = z.catch = new R(Z), q(Z);
        }
        return T && (this._currNode = z.finally = new j(), this.code(T)), this._endBlockNode(R, j);
      }
      // `throw` statement
      throw($) {
        return this._leafNode(new g($));
      }
      // start self-balancing block
      block($, q) {
        return this._blockStarts.push(this._nodes.length), $ && this.code($).endBlock(q), this;
      }
      // end the current self-balancing block
      endBlock($) {
        const q = this._blockStarts.pop();
        if (q === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const T = this._nodes.length - q;
        if (T < 0 || $ !== void 0 && T !== $)
          throw new Error(`CodeGen: wrong number of nodes: ${T} vs ${$} expected`);
        return this._nodes.length = q, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func($, q = t.nil, T, z) {
        return this._blockNode(new m($, q, T)), z && this.code(z).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(m);
      }
      optimize($ = 1) {
        for (; $-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode($) {
        return this._currNode.nodes.push($), this;
      }
      _blockNode($) {
        this._currNode.nodes.push($), this._nodes.push($);
      }
      _endBlockNode($, q) {
        const T = this._currNode;
        if (T instanceof $ || q && T instanceof q)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${q ? `${$.kind}/${q.kind}` : $.kind}"`);
      }
      _elseNode($) {
        const q = this._currNode;
        if (!(q instanceof S))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = q.else = $, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const $ = this._nodes;
        return $[$.length - 1];
      }
      set _currNode($) {
        const q = this._nodes;
        q[q.length - 1] = $;
      }
    }
    e.CodeGen = E;
    function O(N, $) {
      for (const q in $)
        N[q] = (N[q] || 0) + ($[q] || 0);
      return N;
    }
    function P(N, $) {
      return $ instanceof t._CodeOrName ? O(N, $.names) : N;
    }
    function C(N, $, q) {
      if (N instanceof t.Name)
        return T(N);
      if (!z(N))
        return N;
      return new t._Code(N._items.reduce((Z, Q) => (Q instanceof t.Name && (Q = T(Q)), Q instanceof t._Code ? Z.push(...Q._items) : Z.push(Q), Z), []));
      function T(Z) {
        const Q = q[Z.str];
        return Q === void 0 || $[Z.str] !== 1 ? Z : (delete $[Z.str], Q);
      }
      function z(Z) {
        return Z instanceof t._Code && Z._items.some((Q) => Q instanceof t.Name && $[Q.str] === 1 && q[Q.str] !== void 0);
      }
    }
    function D(N, $) {
      for (const q in $)
        N[q] = (N[q] || 0) - ($[q] || 0);
    }
    function _(N) {
      return typeof N == "boolean" || typeof N == "number" || N === null ? !N : (0, t._)`!${U(N)}`;
    }
    e.not = _;
    const F = M(e.operators.AND);
    function L(...N) {
      return N.reduce(F);
    }
    e.and = L;
    const G = M(e.operators.OR);
    function k(...N) {
      return N.reduce(G);
    }
    e.or = k;
    function M(N) {
      return ($, q) => $ === t.nil ? q : q === t.nil ? $ : (0, t._)`${U($)} ${N} ${U(q)}`;
    }
    function U(N) {
      return N instanceof t.Name ? N : (0, t._)`(${N})`;
    }
  })($i)), $i;
}
var ne = {}, Ua;
function re() {
  if (Ua) return ne;
  Ua = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.checkStrictMode = ne.getErrorPath = ne.Type = ne.useFunc = ne.setEvaluated = ne.evaluatedPropsToName = ne.mergeEvaluated = ne.eachItem = ne.unescapeJsonPointer = ne.escapeJsonPointer = ne.escapeFragment = ne.unescapeFragment = ne.schemaRefOrVal = ne.schemaHasRulesButRef = ne.schemaHasRules = ne.checkUnknownRules = ne.alwaysValidSchema = ne.toHash = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Qr();
  function n(l) {
    const m = {};
    for (const I of l)
      m[I] = !0;
    return m;
  }
  ne.toHash = n;
  function r(l, m) {
    return typeof m == "boolean" ? m : Object.keys(m).length === 0 ? !0 : (o(l, m), !i(m, l.self.RULES.all));
  }
  ne.alwaysValidSchema = r;
  function o(l, m = l.schema) {
    const { opts: I, self: A } = l;
    if (!I.strictSchema || typeof m == "boolean")
      return;
    const R = A.RULES.keywords;
    for (const j in m)
      R[j] || d(l, `unknown keyword: "${j}"`);
  }
  ne.checkUnknownRules = o;
  function i(l, m) {
    if (typeof l == "boolean")
      return !l;
    for (const I in l)
      if (m[I])
        return !0;
    return !1;
  }
  ne.schemaHasRules = i;
  function s(l, m) {
    if (typeof l == "boolean")
      return !l;
    for (const I in l)
      if (I !== "$ref" && m.all[I])
        return !0;
    return !1;
  }
  ne.schemaHasRulesButRef = s;
  function a({ topSchemaRef: l, schemaPath: m }, I, A, R) {
    if (!R) {
      if (typeof I == "number" || typeof I == "boolean")
        return I;
      if (typeof I == "string")
        return (0, e._)`${I}`;
    }
    return (0, e._)`${l}${m}${(0, e.getProperty)(A)}`;
  }
  ne.schemaRefOrVal = a;
  function c(l) {
    return g(decodeURIComponent(l));
  }
  ne.unescapeFragment = c;
  function u(l) {
    return encodeURIComponent(p(l));
  }
  ne.escapeFragment = u;
  function p(l) {
    return typeof l == "number" ? `${l}` : l.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ne.escapeJsonPointer = p;
  function g(l) {
    return l.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ne.unescapeJsonPointer = g;
  function f(l, m) {
    if (Array.isArray(l))
      for (const I of l)
        m(I);
    else
      m(l);
  }
  ne.eachItem = f;
  function h({ mergeNames: l, mergeToName: m, mergeValues: I, resultToName: A }) {
    return (R, j, E, O) => {
      const P = E === void 0 ? j : E instanceof e.Name ? (j instanceof e.Name ? l(R, j, E) : m(R, j, E), E) : j instanceof e.Name ? (m(R, E, j), j) : I(j, E);
      return O === e.Name && !(P instanceof e.Name) ? A(R, P) : P;
    };
  }
  ne.mergeEvaluated = {
    props: h({
      mergeNames: (l, m, I) => l.if((0, e._)`${I} !== true && ${m} !== undefined`, () => {
        l.if((0, e._)`${m} === true`, () => l.assign(I, !0), () => l.assign(I, (0, e._)`${I} || {}`).code((0, e._)`Object.assign(${I}, ${m})`));
      }),
      mergeToName: (l, m, I) => l.if((0, e._)`${I} !== true`, () => {
        m === !0 ? l.assign(I, !0) : (l.assign(I, (0, e._)`${I} || {}`), x(l, I, m));
      }),
      mergeValues: (l, m) => l === !0 ? !0 : { ...l, ...m },
      resultToName: w
    }),
    items: h({
      mergeNames: (l, m, I) => l.if((0, e._)`${I} !== true && ${m} !== undefined`, () => l.assign(I, (0, e._)`${m} === true ? true : ${I} > ${m} ? ${I} : ${m}`)),
      mergeToName: (l, m, I) => l.if((0, e._)`${I} !== true`, () => l.assign(I, m === !0 ? !0 : (0, e._)`${I} > ${m} ? ${I} : ${m}`)),
      mergeValues: (l, m) => l === !0 ? !0 : Math.max(l, m),
      resultToName: (l, m) => l.var("items", m)
    })
  };
  function w(l, m) {
    if (m === !0)
      return l.var("props", !0);
    const I = l.var("props", (0, e._)`{}`);
    return m !== void 0 && x(l, I, m), I;
  }
  ne.evaluatedPropsToName = w;
  function x(l, m, I) {
    Object.keys(I).forEach((A) => l.assign((0, e._)`${m}${(0, e.getProperty)(A)}`, !0));
  }
  ne.setEvaluated = x;
  const b = {};
  function S(l, m) {
    return l.scopeValue("func", {
      ref: m,
      code: b[m.code] || (b[m.code] = new t._Code(m.code))
    });
  }
  ne.useFunc = S;
  var v;
  (function(l) {
    l[l.Num = 0] = "Num", l[l.Str = 1] = "Str";
  })(v || (ne.Type = v = {}));
  function y(l, m, I) {
    if (l instanceof e.Name) {
      const A = m === v.Num;
      return I ? A ? (0, e._)`"[" + ${l} + "]"` : (0, e._)`"['" + ${l} + "']"` : A ? (0, e._)`"/" + ${l}` : (0, e._)`"/" + ${l}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return I ? (0, e.getProperty)(l).toString() : "/" + p(l);
  }
  ne.getErrorPath = y;
  function d(l, m, I = l.opts.strictSchema) {
    if (I) {
      if (m = `strict mode: ${m}`, I === !0)
        throw new Error(m);
      l.self.logger.warn(m);
    }
  }
  return ne.checkStrictMode = d, ne;
}
var Fn = {}, Va;
function et() {
  if (Va) return Fn;
  Va = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = {
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
  return Fn.default = t, Fn;
}
var Ga;
function ii() {
  return Ga || (Ga = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ re(), r = /* @__PURE__ */ et();
    e.keywordError = {
      message: ({ keyword: b }) => (0, t.str)`must pass "${b}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: b, schemaType: S }) => S ? (0, t.str)`"${b}" keyword must be ${S} ($data)` : (0, t.str)`"${b}" keyword is invalid ($data)`
    };
    function o(b, S = e.keywordError, v, y) {
      const { it: d } = b, { gen: l, compositeRule: m, allErrors: I } = d, A = g(b, S, v);
      y ?? (m || I) ? c(l, A) : u(d, (0, t._)`[${A}]`);
    }
    e.reportError = o;
    function i(b, S = e.keywordError, v) {
      const { it: y } = b, { gen: d, compositeRule: l, allErrors: m } = y, I = g(b, S, v);
      c(d, I), l || m || u(y, r.default.vErrors);
    }
    e.reportExtraError = i;
    function s(b, S) {
      b.assign(r.default.errors, S), b.if((0, t._)`${r.default.vErrors} !== null`, () => b.if(S, () => b.assign((0, t._)`${r.default.vErrors}.length`, S), () => b.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: b, keyword: S, schemaValue: v, data: y, errsCount: d, it: l }) {
      if (d === void 0)
        throw new Error("ajv implementation error");
      const m = b.name("err");
      b.forRange("i", d, r.default.errors, (I) => {
        b.const(m, (0, t._)`${r.default.vErrors}[${I}]`), b.if((0, t._)`${m}.instancePath === undefined`, () => b.assign((0, t._)`${m}.instancePath`, (0, t.strConcat)(r.default.instancePath, l.errorPath))), b.assign((0, t._)`${m}.schemaPath`, (0, t.str)`${l.errSchemaPath}/${S}`), l.opts.verbose && (b.assign((0, t._)`${m}.schema`, v), b.assign((0, t._)`${m}.data`, y));
      });
    }
    e.extendErrors = a;
    function c(b, S) {
      const v = b.const("err", S);
      b.if((0, t._)`${r.default.vErrors} === null`, () => b.assign(r.default.vErrors, (0, t._)`[${v}]`), (0, t._)`${r.default.vErrors}.push(${v})`), b.code((0, t._)`${r.default.errors}++`);
    }
    function u(b, S) {
      const { gen: v, validateName: y, schemaEnv: d } = b;
      d.$async ? v.throw((0, t._)`new ${b.ValidationError}(${S})`) : (v.assign((0, t._)`${y}.errors`, S), v.return(!1));
    }
    const p = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function g(b, S, v) {
      const { createErrors: y } = b.it;
      return y === !1 ? (0, t._)`{}` : f(b, S, v);
    }
    function f(b, S, v = {}) {
      const { gen: y, it: d } = b, l = [
        h(d, v),
        w(b, v)
      ];
      return x(b, S, l), y.object(...l);
    }
    function h({ errorPath: b }, { instancePath: S }) {
      const v = S ? (0, t.str)`${b}${(0, n.getErrorPath)(S, n.Type.Str)}` : b;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, v)];
    }
    function w({ keyword: b, it: { errSchemaPath: S } }, { schemaPath: v, parentSchema: y }) {
      let d = y ? S : (0, t.str)`${S}/${b}`;
      return v && (d = (0, t.str)`${d}${(0, n.getErrorPath)(v, n.Type.Str)}`), [p.schemaPath, d];
    }
    function x(b, { params: S, message: v }, y) {
      const { keyword: d, data: l, schemaValue: m, it: I } = b, { opts: A, propertyName: R, topSchemaRef: j, schemaPath: E } = I;
      y.push([p.keyword, d], [p.params, typeof S == "function" ? S(b) : S || (0, t._)`{}`]), A.messages && y.push([p.message, typeof v == "function" ? v(b) : v]), A.verbose && y.push([p.schema, m], [p.parentSchema, (0, t._)`${j}${E}`], [r.default.data, l]), R && y.push([p.propertyName, R]);
    }
  })(ji)), ji;
}
var Fa;
function qu() {
  if (Fa) return Nt;
  Fa = 1, Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.boolOrEmptySchema = Nt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ ii(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ et(), r = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: c, schema: u, validateName: p } = a;
    u === !1 ? s(a, !1) : typeof u == "object" && u.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${p}.errors`, null), c.return(!0));
  }
  Nt.topBoolOrEmptySchema = o;
  function i(a, c) {
    const { gen: u, schema: p } = a;
    p === !1 ? (u.var(c, !1), s(a)) : u.var(c, !0);
  }
  Nt.boolOrEmptySchema = i;
  function s(a, c) {
    const { gen: u, data: p } = a, g = {
      gen: u,
      keyword: "false schema",
      data: p,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(g, r, void 0, c);
  }
  return Nt;
}
var ve = {}, Dt = {}, Ba;
function $d() {
  if (Ba) return Dt;
  Ba = 1, Object.defineProperty(Dt, "__esModule", { value: !0 }), Dt.getRules = Dt.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(o) {
    return typeof o == "string" && t.has(o);
  }
  Dt.isJSONType = n;
  function r() {
    const o = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...o, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, o.number, o.string, o.array, o.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return Dt.getRules = r, Dt;
}
var mt = {}, Ha;
function _d() {
  if (Ha) return mt;
  Ha = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.shouldUseRule = mt.shouldUseGroup = mt.schemaHasRulesForType = void 0;
  function e({ schema: r, self: o }, i) {
    const s = o.RULES.types[i];
    return s && s !== !0 && t(r, s);
  }
  mt.schemaHasRulesForType = e;
  function t(r, o) {
    return o.rules.some((i) => n(r, i));
  }
  mt.shouldUseGroup = t;
  function n(r, o) {
    var i;
    return r[o.keyword] !== void 0 || ((i = o.definition.implements) === null || i === void 0 ? void 0 : i.some((s) => r[s] !== void 0));
  }
  return mt.shouldUseRule = n, mt;
}
var Za;
function Wr() {
  if (Za) return ve;
  Za = 1, Object.defineProperty(ve, "__esModule", { value: !0 }), ve.reportTypeError = ve.checkDataTypes = ve.checkDataType = ve.coerceAndCheckDataType = ve.getJSONTypes = ve.getSchemaTypes = ve.DataType = void 0;
  const e = /* @__PURE__ */ $d(), t = /* @__PURE__ */ _d(), n = /* @__PURE__ */ ii(), r = /* @__PURE__ */ te(), o = /* @__PURE__ */ re();
  var i;
  (function(v) {
    v[v.Correct = 0] = "Correct", v[v.Wrong = 1] = "Wrong";
  })(i || (ve.DataType = i = {}));
  function s(v) {
    const y = a(v.type);
    if (y.includes("null")) {
      if (v.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!y.length && v.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      v.nullable === !0 && y.push("null");
    }
    return y;
  }
  ve.getSchemaTypes = s;
  function a(v) {
    const y = Array.isArray(v) ? v : v ? [v] : [];
    if (y.every(e.isJSONType))
      return y;
    throw new Error("type must be JSONType or JSONType[]: " + y.join(","));
  }
  ve.getJSONTypes = a;
  function c(v, y) {
    const { gen: d, data: l, opts: m } = v, I = p(y, m.coerceTypes), A = y.length > 0 && !(I.length === 0 && y.length === 1 && (0, t.schemaHasRulesForType)(v, y[0]));
    if (A) {
      const R = w(y, l, m.strictNumbers, i.Wrong);
      d.if(R, () => {
        I.length ? g(v, y, I) : b(v);
      });
    }
    return A;
  }
  ve.coerceAndCheckDataType = c;
  const u = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function p(v, y) {
    return y ? v.filter((d) => u.has(d) || y === "array" && d === "array") : [];
  }
  function g(v, y, d) {
    const { gen: l, data: m, opts: I } = v, A = l.let("dataType", (0, r._)`typeof ${m}`), R = l.let("coerced", (0, r._)`undefined`);
    I.coerceTypes === "array" && l.if((0, r._)`${A} == 'object' && Array.isArray(${m}) && ${m}.length == 1`, () => l.assign(m, (0, r._)`${m}[0]`).assign(A, (0, r._)`typeof ${m}`).if(w(y, m, I.strictNumbers), () => l.assign(R, m))), l.if((0, r._)`${R} !== undefined`);
    for (const E of d)
      (u.has(E) || E === "array" && I.coerceTypes === "array") && j(E);
    l.else(), b(v), l.endIf(), l.if((0, r._)`${R} !== undefined`, () => {
      l.assign(m, R), f(v, R);
    });
    function j(E) {
      switch (E) {
        case "string":
          l.elseIf((0, r._)`${A} == "number" || ${A} == "boolean"`).assign(R, (0, r._)`"" + ${m}`).elseIf((0, r._)`${m} === null`).assign(R, (0, r._)`""`);
          return;
        case "number":
          l.elseIf((0, r._)`${A} == "boolean" || ${m} === null
              || (${A} == "string" && ${m} && ${m} == +${m})`).assign(R, (0, r._)`+${m}`);
          return;
        case "integer":
          l.elseIf((0, r._)`${A} === "boolean" || ${m} === null
              || (${A} === "string" && ${m} && ${m} == +${m} && !(${m} % 1))`).assign(R, (0, r._)`+${m}`);
          return;
        case "boolean":
          l.elseIf((0, r._)`${m} === "false" || ${m} === 0 || ${m} === null`).assign(R, !1).elseIf((0, r._)`${m} === "true" || ${m} === 1`).assign(R, !0);
          return;
        case "null":
          l.elseIf((0, r._)`${m} === "" || ${m} === 0 || ${m} === false`), l.assign(R, null);
          return;
        case "array":
          l.elseIf((0, r._)`${A} === "string" || ${A} === "number"
              || ${A} === "boolean" || ${m} === null`).assign(R, (0, r._)`[${m}]`);
      }
    }
  }
  function f({ gen: v, parentData: y, parentDataProperty: d }, l) {
    v.if((0, r._)`${y} !== undefined`, () => v.assign((0, r._)`${y}[${d}]`, l));
  }
  function h(v, y, d, l = i.Correct) {
    const m = l === i.Correct ? r.operators.EQ : r.operators.NEQ;
    let I;
    switch (v) {
      case "null":
        return (0, r._)`${y} ${m} null`;
      case "array":
        I = (0, r._)`Array.isArray(${y})`;
        break;
      case "object":
        I = (0, r._)`${y} && typeof ${y} == "object" && !Array.isArray(${y})`;
        break;
      case "integer":
        I = A((0, r._)`!(${y} % 1) && !isNaN(${y})`);
        break;
      case "number":
        I = A();
        break;
      default:
        return (0, r._)`typeof ${y} ${m} ${v}`;
    }
    return l === i.Correct ? I : (0, r.not)(I);
    function A(R = r.nil) {
      return (0, r.and)((0, r._)`typeof ${y} == "number"`, R, d ? (0, r._)`isFinite(${y})` : r.nil);
    }
  }
  ve.checkDataType = h;
  function w(v, y, d, l) {
    if (v.length === 1)
      return h(v[0], y, d, l);
    let m;
    const I = (0, o.toHash)(v);
    if (I.array && I.object) {
      const A = (0, r._)`typeof ${y} != "object"`;
      m = I.null ? A : (0, r._)`!${y} || ${A}`, delete I.null, delete I.array, delete I.object;
    } else
      m = r.nil;
    I.number && delete I.integer;
    for (const A in I)
      m = (0, r.and)(m, h(A, y, d, l));
    return m;
  }
  ve.checkDataTypes = w;
  const x = {
    message: ({ schema: v }) => `must be ${v}`,
    params: ({ schema: v, schemaValue: y }) => typeof v == "string" ? (0, r._)`{type: ${v}}` : (0, r._)`{type: ${y}}`
  };
  function b(v) {
    const y = S(v);
    (0, n.reportError)(y, x);
  }
  ve.reportTypeError = b;
  function S(v) {
    const { gen: y, data: d, schema: l } = v, m = (0, o.schemaRefOrVal)(v, l, "type");
    return {
      gen: y,
      keyword: "type",
      data: d,
      schema: l.type,
      schemaCode: m,
      schemaValue: m,
      parentSchema: l,
      params: {},
      it: v
    };
  }
  return ve;
}
var pn = {}, Ja;
function Ru() {
  if (Ja) return pn;
  Ja = 1, Object.defineProperty(pn, "__esModule", { value: !0 }), pn.assignDefaults = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re();
  function n(o, i) {
    const { properties: s, items: a } = o.schema;
    if (i === "object" && s)
      for (const c in s)
        r(o, c, s[c].default);
    else i === "array" && Array.isArray(a) && a.forEach((c, u) => r(o, u, c.default));
  }
  pn.assignDefaults = n;
  function r(o, i, s) {
    const { gen: a, compositeRule: c, data: u, opts: p } = o;
    if (s === void 0)
      return;
    const g = (0, e._)`${u}${(0, e.getProperty)(i)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${g}`);
      return;
    }
    let f = (0, e._)`${g} === undefined`;
    p.useDefaults === "empty" && (f = (0, e._)`${f} || ${g} === null || ${g} === ""`), a.if(f, (0, e._)`${g} = ${(0, e.stringify)(s)}`);
  }
  return pn;
}
var Ze = {}, ae = {}, Ka;
function tt() {
  if (Ka) return ae;
  Ka = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.validateUnion = ae.validateArray = ae.usePattern = ae.callValidateCode = ae.schemaProperties = ae.allSchemaProperties = ae.noPropertyInData = ae.propertyInData = ae.isOwnProperty = ae.hasPropFunc = ae.reportMissingProp = ae.checkMissingProp = ae.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ et(), r = /* @__PURE__ */ re();
  function o(v, y) {
    const { gen: d, data: l, it: m } = v;
    d.if(p(d, l, y, m.opts.ownProperties), () => {
      v.setParams({ missingProperty: (0, e._)`${y}` }, !0), v.error();
    });
  }
  ae.checkReportMissingProp = o;
  function i({ gen: v, data: y, it: { opts: d } }, l, m) {
    return (0, e.or)(...l.map((I) => (0, e.and)(p(v, y, I, d.ownProperties), (0, e._)`${m} = ${I}`)));
  }
  ae.checkMissingProp = i;
  function s(v, y) {
    v.setParams({ missingProperty: y }, !0), v.error();
  }
  ae.reportMissingProp = s;
  function a(v) {
    return v.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ae.hasPropFunc = a;
  function c(v, y, d) {
    return (0, e._)`${a(v)}.call(${y}, ${d})`;
  }
  ae.isOwnProperty = c;
  function u(v, y, d, l) {
    const m = (0, e._)`${y}${(0, e.getProperty)(d)} !== undefined`;
    return l ? (0, e._)`${m} && ${c(v, y, d)}` : m;
  }
  ae.propertyInData = u;
  function p(v, y, d, l) {
    const m = (0, e._)`${y}${(0, e.getProperty)(d)} === undefined`;
    return l ? (0, e.or)(m, (0, e.not)(c(v, y, d))) : m;
  }
  ae.noPropertyInData = p;
  function g(v) {
    return v ? Object.keys(v).filter((y) => y !== "__proto__") : [];
  }
  ae.allSchemaProperties = g;
  function f(v, y) {
    return g(y).filter((d) => !(0, t.alwaysValidSchema)(v, y[d]));
  }
  ae.schemaProperties = f;
  function h({ schemaCode: v, data: y, it: { gen: d, topSchemaRef: l, schemaPath: m, errorPath: I }, it: A }, R, j, E) {
    const O = E ? (0, e._)`${v}, ${y}, ${l}${m}` : y, P = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, I)],
      [n.default.parentData, A.parentData],
      [n.default.parentDataProperty, A.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    A.opts.dynamicRef && P.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const C = (0, e._)`${O}, ${d.object(...P)}`;
    return j !== e.nil ? (0, e._)`${R}.call(${j}, ${C})` : (0, e._)`${R}(${C})`;
  }
  ae.callValidateCode = h;
  const w = (0, e._)`new RegExp`;
  function x({ gen: v, it: { opts: y } }, d) {
    const l = y.unicodeRegExp ? "u" : "", { regExp: m } = y.code, I = m(d, l);
    return v.scopeValue("pattern", {
      key: I.toString(),
      ref: I,
      code: (0, e._)`${m.code === "new RegExp" ? w : (0, r.useFunc)(v, m)}(${d}, ${l})`
    });
  }
  ae.usePattern = x;
  function b(v) {
    const { gen: y, data: d, keyword: l, it: m } = v, I = y.name("valid");
    if (m.allErrors) {
      const R = y.let("valid", !0);
      return A(() => y.assign(R, !1)), R;
    }
    return y.var(I, !0), A(() => y.break()), I;
    function A(R) {
      const j = y.const("len", (0, e._)`${d}.length`);
      y.forRange("i", 0, j, (E) => {
        v.subschema({
          keyword: l,
          dataProp: E,
          dataPropType: t.Type.Num
        }, I), y.if((0, e.not)(I), R);
      });
    }
  }
  ae.validateArray = b;
  function S(v) {
    const { gen: y, schema: d, keyword: l, it: m } = v;
    if (!Array.isArray(d))
      throw new Error("ajv implementation error");
    if (d.some((j) => (0, t.alwaysValidSchema)(m, j)) && !m.opts.unevaluated)
      return;
    const A = y.let("valid", !1), R = y.name("_valid");
    y.block(() => d.forEach((j, E) => {
      const O = v.subschema({
        keyword: l,
        schemaProp: E,
        compositeRule: !0
      }, R);
      y.assign(A, (0, e._)`${A} || ${R}`), v.mergeValidEvaluated(O, R) || y.if((0, e.not)(A));
    })), v.result(A, () => v.reset(), () => v.error(!0));
  }
  return ae.validateUnion = S, ae;
}
var Qa;
function ju() {
  if (Qa) return Ze;
  Qa = 1, Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.validateKeywordUsage = Ze.validSchemaType = Ze.funcKeywordCode = Ze.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ et(), n = /* @__PURE__ */ tt(), r = /* @__PURE__ */ ii();
  function o(f, h) {
    const { gen: w, keyword: x, schema: b, parentSchema: S, it: v } = f, y = h.macro.call(v.self, b, S, v), d = u(w, x, y);
    v.opts.validateSchema !== !1 && v.self.validateSchema(y, !0);
    const l = w.name("valid");
    f.subschema({
      schema: y,
      schemaPath: e.nil,
      errSchemaPath: `${v.errSchemaPath}/${x}`,
      topSchemaRef: d,
      compositeRule: !0
    }, l), f.pass(l, () => f.error(!0));
  }
  Ze.macroKeywordCode = o;
  function i(f, h) {
    var w;
    const { gen: x, keyword: b, schema: S, parentSchema: v, $data: y, it: d } = f;
    c(d, h);
    const l = !y && h.compile ? h.compile.call(d.self, S, v, d) : h.validate, m = u(x, b, l), I = x.let("valid");
    f.block$data(I, A), f.ok((w = h.valid) !== null && w !== void 0 ? w : I);
    function A() {
      if (h.errors === !1)
        E(), h.modifying && s(f), O(() => f.error());
      else {
        const P = h.async ? R() : j();
        h.modifying && s(f), O(() => a(f, P));
      }
    }
    function R() {
      const P = x.let("ruleErrs", null);
      return x.try(() => E((0, e._)`await `), (C) => x.assign(I, !1).if((0, e._)`${C} instanceof ${d.ValidationError}`, () => x.assign(P, (0, e._)`${C}.errors`), () => x.throw(C))), P;
    }
    function j() {
      const P = (0, e._)`${m}.errors`;
      return x.assign(P, null), E(e.nil), P;
    }
    function E(P = h.async ? (0, e._)`await ` : e.nil) {
      const C = d.opts.passContext ? t.default.this : t.default.self, D = !("compile" in h && !y || h.schema === !1);
      x.assign(I, (0, e._)`${P}${(0, n.callValidateCode)(f, m, C, D)}`, h.modifying);
    }
    function O(P) {
      var C;
      x.if((0, e.not)((C = h.valid) !== null && C !== void 0 ? C : I), P);
    }
  }
  Ze.funcKeywordCode = i;
  function s(f) {
    const { gen: h, data: w, it: x } = f;
    h.if(x.parentData, () => h.assign(w, (0, e._)`${x.parentData}[${x.parentDataProperty}]`));
  }
  function a(f, h) {
    const { gen: w } = f;
    w.if((0, e._)`Array.isArray(${h})`, () => {
      w.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${h} : ${t.default.vErrors}.concat(${h})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(f);
    }, () => f.error());
  }
  function c({ schemaEnv: f }, h) {
    if (h.async && !f.$async)
      throw new Error("async keyword in sync schema");
  }
  function u(f, h, w) {
    if (w === void 0)
      throw new Error(`keyword "${h}" failed to compile`);
    return f.scopeValue("keyword", typeof w == "function" ? { ref: w } : { ref: w, code: (0, e.stringify)(w) });
  }
  function p(f, h, w = !1) {
    return !h.length || h.some((x) => x === "array" ? Array.isArray(f) : x === "object" ? f && typeof f == "object" && !Array.isArray(f) : typeof f == x || w && typeof f > "u");
  }
  Ze.validSchemaType = p;
  function g({ schema: f, opts: h, self: w, errSchemaPath: x }, b, S) {
    if (Array.isArray(b.keyword) ? !b.keyword.includes(S) : b.keyword !== S)
      throw new Error("ajv implementation error");
    const v = b.dependencies;
    if (v?.some((y) => !Object.prototype.hasOwnProperty.call(f, y)))
      throw new Error(`parent schema must have dependencies of ${S}: ${v.join(",")}`);
    if (b.validateSchema && !b.validateSchema(f[S])) {
      const d = `keyword "${S}" value is invalid at path "${x}": ` + w.errorsText(b.validateSchema.errors);
      if (h.validateSchema === "log")
        w.logger.error(d);
      else
        throw new Error(d);
    }
  }
  return Ze.validateKeywordUsage = g, Ze;
}
var yt = {}, Wa;
function $u() {
  if (Wa) return yt;
  Wa = 1, Object.defineProperty(yt, "__esModule", { value: !0 }), yt.extendSubschemaMode = yt.extendSubschemaData = yt.getSubschema = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re();
  function n(i, { keyword: s, schemaProp: a, schema: c, schemaPath: u, errSchemaPath: p, topSchemaRef: g }) {
    if (s !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const f = i.schema[s];
      return a === void 0 ? {
        schema: f,
        schemaPath: (0, e._)`${i.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${i.errSchemaPath}/${s}`
      } : {
        schema: f[a],
        schemaPath: (0, e._)`${i.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${i.errSchemaPath}/${s}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (c !== void 0) {
      if (u === void 0 || p === void 0 || g === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: u,
        topSchemaRef: g,
        errSchemaPath: p
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  yt.getSubschema = n;
  function r(i, s, { dataProp: a, dataPropType: c, data: u, dataTypes: p, propertyName: g }) {
    if (u !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: f } = s;
    if (a !== void 0) {
      const { errorPath: w, dataPathArr: x, opts: b } = s, S = f.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      h(S), i.errorPath = (0, e.str)`${w}${(0, t.getErrorPath)(a, c, b.jsPropertySyntax)}`, i.parentDataProperty = (0, e._)`${a}`, i.dataPathArr = [...x, i.parentDataProperty];
    }
    if (u !== void 0) {
      const w = u instanceof e.Name ? u : f.let("data", u, !0);
      h(w), g !== void 0 && (i.propertyName = g);
    }
    p && (i.dataTypes = p);
    function h(w) {
      i.data = w, i.dataLevel = s.dataLevel + 1, i.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), i.parentData = s.data, i.dataNames = [...s.dataNames, w];
    }
  }
  yt.extendSubschemaData = r;
  function o(i, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: c, createErrors: u, allErrors: p }) {
    c !== void 0 && (i.compositeRule = c), u !== void 0 && (i.createErrors = u), p !== void 0 && (i.allErrors = p), i.jtdDiscriminator = s, i.jtdMetadata = a;
  }
  return yt.extendSubschemaMode = o, yt;
}
var qe = {}, Ti, Xa;
function Pd() {
  return Xa || (Xa = 1, Ti = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var r, o, i;
      if (Array.isArray(t)) {
        if (r = t.length, r != n.length) return !1;
        for (o = r; o-- !== 0; )
          if (!e(t[o], n[o])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (i = Object.keys(t), r = i.length, r !== Object.keys(n).length) return !1;
      for (o = r; o-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, i[o])) return !1;
      for (o = r; o-- !== 0; ) {
        var s = i[o];
        if (!e(t[s], n[s])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), Ti;
}
var Ci = { exports: {} }, Ya;
function _u() {
  if (Ya) return Ci.exports;
  Ya = 1;
  var e = Ci.exports = function(r, o, i) {
    typeof o == "function" && (i = o, o = {}), i = o.cb || i;
    var s = typeof i == "function" ? i : i.pre || function() {
    }, a = i.post || function() {
    };
    t(o, s, a, r, "", r);
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
  function t(r, o, i, s, a, c, u, p, g, f) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      o(s, a, c, u, p, g, f);
      for (var h in s) {
        var w = s[h];
        if (Array.isArray(w)) {
          if (h in e.arrayKeywords)
            for (var x = 0; x < w.length; x++)
              t(r, o, i, w[x], a + "/" + h + "/" + x, c, a, h, s, x);
        } else if (h in e.propsKeywords) {
          if (w && typeof w == "object")
            for (var b in w)
              t(r, o, i, w[b], a + "/" + h + "/" + n(b), c, a, h, s, b);
        } else (h in e.keywords || r.allKeys && !(h in e.skipKeywords)) && t(r, o, i, w, a + "/" + h, c, a, h, s);
      }
      i(s, a, c, u, p, g, f);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Ci.exports;
}
var eo;
function si() {
  if (eo) return qe;
  eo = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.getSchemaRefs = qe.resolveUrl = qe.normalizeId = qe._getFullPath = qe.getFullPath = qe.inlineRef = void 0;
  const e = /* @__PURE__ */ re(), t = Pd(), n = _u(), r = /* @__PURE__ */ new Set([
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
  function o(x, b = !0) {
    return typeof x == "boolean" ? !0 : b === !0 ? !s(x) : b ? a(x) <= b : !1;
  }
  qe.inlineRef = o;
  const i = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(x) {
    for (const b in x) {
      if (i.has(b))
        return !0;
      const S = x[b];
      if (Array.isArray(S) && S.some(s) || typeof S == "object" && s(S))
        return !0;
    }
    return !1;
  }
  function a(x) {
    let b = 0;
    for (const S in x) {
      if (S === "$ref")
        return 1 / 0;
      if (b++, !r.has(S) && (typeof x[S] == "object" && (0, e.eachItem)(x[S], (v) => b += a(v)), b === 1 / 0))
        return 1 / 0;
    }
    return b;
  }
  function c(x, b = "", S) {
    S !== !1 && (b = g(b));
    const v = x.parse(b);
    return u(x, v);
  }
  qe.getFullPath = c;
  function u(x, b) {
    return x.serialize(b).split("#")[0] + "#";
  }
  qe._getFullPath = u;
  const p = /#\/?$/;
  function g(x) {
    return x ? x.replace(p, "") : "";
  }
  qe.normalizeId = g;
  function f(x, b, S) {
    return S = g(S), x.resolve(b, S);
  }
  qe.resolveUrl = f;
  const h = /^[a-z_][-a-z0-9._]*$/i;
  function w(x, b) {
    if (typeof x == "boolean")
      return {};
    const { schemaId: S, uriResolver: v } = this.opts, y = g(x[S] || b), d = { "": y }, l = c(v, y, !1), m = {}, I = /* @__PURE__ */ new Set();
    return n(x, { allKeys: !0 }, (j, E, O, P) => {
      if (P === void 0)
        return;
      const C = l + E;
      let D = d[P];
      typeof j[S] == "string" && (D = _.call(this, j[S])), F.call(this, j.$anchor), F.call(this, j.$dynamicAnchor), d[E] = D;
      function _(L) {
        const G = this.opts.uriResolver.resolve;
        if (L = g(D ? G(D, L) : L), I.has(L))
          throw R(L);
        I.add(L);
        let k = this.refs[L];
        return typeof k == "string" && (k = this.refs[k]), typeof k == "object" ? A(j, k.schema, L) : L !== g(C) && (L[0] === "#" ? (A(j, m[L], L), m[L] = j) : this.refs[L] = C), L;
      }
      function F(L) {
        if (typeof L == "string") {
          if (!h.test(L))
            throw new Error(`invalid anchor "${L}"`);
          _.call(this, `#${L}`);
        }
      }
    }), m;
    function A(j, E, O) {
      if (E !== void 0 && !t(j, E))
        throw R(O);
    }
    function R(j) {
      return new Error(`reference "${j}" resolves to more than one schema`);
    }
  }
  return qe.getSchemaRefs = w, qe;
}
var to;
function kn() {
  if (to) return ht;
  to = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.getData = ht.KeywordCxt = ht.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ qu(), t = /* @__PURE__ */ Wr(), n = /* @__PURE__ */ _d(), r = /* @__PURE__ */ Wr(), o = /* @__PURE__ */ Ru(), i = /* @__PURE__ */ ju(), s = /* @__PURE__ */ $u(), a = /* @__PURE__ */ te(), c = /* @__PURE__ */ et(), u = /* @__PURE__ */ si(), p = /* @__PURE__ */ re(), g = /* @__PURE__ */ ii();
  function f(V) {
    if (l(V) && (I(V), d(V))) {
      b(V);
      return;
    }
    h(V, () => (0, e.topBoolOrEmptySchema)(V));
  }
  ht.validateFunctionCode = f;
  function h({ gen: V, validateName: B, schema: H, schemaEnv: K, opts: W }, ee) {
    W.code.es5 ? V.func(B, (0, a._)`${c.default.data}, ${c.default.valCxt}`, K.$async, () => {
      V.code((0, a._)`"use strict"; ${v(H, W)}`), x(V, W), V.code(ee);
    }) : V.func(B, (0, a._)`${c.default.data}, ${w(W)}`, K.$async, () => V.code(v(H, W)).code(ee));
  }
  function w(V) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${V.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function x(V, B) {
    V.if(c.default.valCxt, () => {
      V.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), V.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), V.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), V.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), B.dynamicRef && V.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      V.var(c.default.instancePath, (0, a._)`""`), V.var(c.default.parentData, (0, a._)`undefined`), V.var(c.default.parentDataProperty, (0, a._)`undefined`), V.var(c.default.rootData, c.default.data), B.dynamicRef && V.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function b(V) {
    const { schema: B, opts: H, gen: K } = V;
    h(V, () => {
      H.$comment && B.$comment && P(V), j(V), K.let(c.default.vErrors, null), K.let(c.default.errors, 0), H.unevaluated && S(V), A(V), C(V);
    });
  }
  function S(V) {
    const { gen: B, validateName: H } = V;
    V.evaluated = B.const("evaluated", (0, a._)`${H}.evaluated`), B.if((0, a._)`${V.evaluated}.dynamicProps`, () => B.assign((0, a._)`${V.evaluated}.props`, (0, a._)`undefined`)), B.if((0, a._)`${V.evaluated}.dynamicItems`, () => B.assign((0, a._)`${V.evaluated}.items`, (0, a._)`undefined`));
  }
  function v(V, B) {
    const H = typeof V == "object" && V[B.schemaId];
    return H && (B.code.source || B.code.process) ? (0, a._)`/*# sourceURL=${H} */` : a.nil;
  }
  function y(V, B) {
    if (l(V) && (I(V), d(V))) {
      m(V, B);
      return;
    }
    (0, e.boolOrEmptySchema)(V, B);
  }
  function d({ schema: V, self: B }) {
    if (typeof V == "boolean")
      return !V;
    for (const H in V)
      if (B.RULES.all[H])
        return !0;
    return !1;
  }
  function l(V) {
    return typeof V.schema != "boolean";
  }
  function m(V, B) {
    const { schema: H, gen: K, opts: W } = V;
    W.$comment && H.$comment && P(V), E(V), O(V);
    const ee = K.const("_errs", c.default.errors);
    A(V, ee), K.var(B, (0, a._)`${ee} === ${c.default.errors}`);
  }
  function I(V) {
    (0, p.checkUnknownRules)(V), R(V);
  }
  function A(V, B) {
    if (V.opts.jtd)
      return _(V, [], !1, B);
    const H = (0, t.getSchemaTypes)(V.schema), K = (0, t.coerceAndCheckDataType)(V, H);
    _(V, H, !K, B);
  }
  function R(V) {
    const { schema: B, errSchemaPath: H, opts: K, self: W } = V;
    B.$ref && K.ignoreKeywordsWithRef && (0, p.schemaHasRulesButRef)(B, W.RULES) && W.logger.warn(`$ref: keywords ignored in schema at path "${H}"`);
  }
  function j(V) {
    const { schema: B, opts: H } = V;
    B.default !== void 0 && H.useDefaults && H.strictSchema && (0, p.checkStrictMode)(V, "default is ignored in the schema root");
  }
  function E(V) {
    const B = V.schema[V.opts.schemaId];
    B && (V.baseId = (0, u.resolveUrl)(V.opts.uriResolver, V.baseId, B));
  }
  function O(V) {
    if (V.schema.$async && !V.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function P({ gen: V, schemaEnv: B, schema: H, errSchemaPath: K, opts: W }) {
    const ee = H.$comment;
    if (W.$comment === !0)
      V.code((0, a._)`${c.default.self}.logger.log(${ee})`);
    else if (typeof W.$comment == "function") {
      const ie = (0, a.str)`${K}/$comment`, xe = V.scopeValue("root", { ref: B.root });
      V.code((0, a._)`${c.default.self}.opts.$comment(${ee}, ${ie}, ${xe}.schema)`);
    }
  }
  function C(V) {
    const { gen: B, schemaEnv: H, validateName: K, ValidationError: W, opts: ee } = V;
    H.$async ? B.if((0, a._)`${c.default.errors} === 0`, () => B.return(c.default.data), () => B.throw((0, a._)`new ${W}(${c.default.vErrors})`)) : (B.assign((0, a._)`${K}.errors`, c.default.vErrors), ee.unevaluated && D(V), B.return((0, a._)`${c.default.errors} === 0`));
  }
  function D({ gen: V, evaluated: B, props: H, items: K }) {
    H instanceof a.Name && V.assign((0, a._)`${B}.props`, H), K instanceof a.Name && V.assign((0, a._)`${B}.items`, K);
  }
  function _(V, B, H, K) {
    const { gen: W, schema: ee, data: ie, allErrors: xe, opts: he, self: ye } = V, { RULES: fe } = ye;
    if (ee.$ref && (he.ignoreKeywordsWithRef || !(0, p.schemaHasRulesButRef)(ee, fe))) {
      W.block(() => z(V, "$ref", fe.all.$ref.definition));
      return;
    }
    he.jtd || L(V, B), W.block(() => {
      for (const Le of fe.rules)
        nt(Le);
      nt(fe.post);
    });
    function nt(Le) {
      (0, n.shouldUseGroup)(ee, Le) && (Le.type ? (W.if((0, r.checkDataType)(Le.type, ie, he.strictNumbers)), F(V, Le), B.length === 1 && B[0] === Le.type && H && (W.else(), (0, r.reportTypeError)(V)), W.endIf()) : F(V, Le), xe || W.if((0, a._)`${c.default.errors} === ${K || 0}`));
    }
  }
  function F(V, B) {
    const { gen: H, schema: K, opts: { useDefaults: W } } = V;
    W && (0, o.assignDefaults)(V, B.type), H.block(() => {
      for (const ee of B.rules)
        (0, n.shouldUseRule)(K, ee) && z(V, ee.keyword, ee.definition, B.type);
    });
  }
  function L(V, B) {
    V.schemaEnv.meta || !V.opts.strictTypes || (G(V, B), V.opts.allowUnionTypes || k(V, B), M(V, V.dataTypes));
  }
  function G(V, B) {
    if (B.length) {
      if (!V.dataTypes.length) {
        V.dataTypes = B;
        return;
      }
      B.forEach((H) => {
        N(V.dataTypes, H) || q(V, `type "${H}" not allowed by context "${V.dataTypes.join(",")}"`);
      }), $(V, B);
    }
  }
  function k(V, B) {
    B.length > 1 && !(B.length === 2 && B.includes("null")) && q(V, "use allowUnionTypes to allow union type keyword");
  }
  function M(V, B) {
    const H = V.self.RULES.all;
    for (const K in H) {
      const W = H[K];
      if (typeof W == "object" && (0, n.shouldUseRule)(V.schema, W)) {
        const { type: ee } = W.definition;
        ee.length && !ee.some((ie) => U(B, ie)) && q(V, `missing type "${ee.join(",")}" for keyword "${K}"`);
      }
    }
  }
  function U(V, B) {
    return V.includes(B) || B === "number" && V.includes("integer");
  }
  function N(V, B) {
    return V.includes(B) || B === "integer" && V.includes("number");
  }
  function $(V, B) {
    const H = [];
    for (const K of V.dataTypes)
      N(B, K) ? H.push(K) : B.includes("integer") && K === "number" && H.push("integer");
    V.dataTypes = H;
  }
  function q(V, B) {
    const H = V.schemaEnv.baseId + V.errSchemaPath;
    B += ` at "${H}" (strictTypes)`, (0, p.checkStrictMode)(V, B, V.opts.strictTypes);
  }
  class T {
    constructor(B, H, K) {
      if ((0, i.validateKeywordUsage)(B, H, K), this.gen = B.gen, this.allErrors = B.allErrors, this.keyword = K, this.data = B.data, this.schema = B.schema[K], this.$data = H.$data && B.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, p.schemaRefOrVal)(B, this.schema, K, this.$data), this.schemaType = H.schemaType, this.parentSchema = B.schema, this.params = {}, this.it = B, this.def = H, this.$data)
        this.schemaCode = B.gen.const("vSchema", J(this.$data, B));
      else if (this.schemaCode = this.schemaValue, !(0, i.validSchemaType)(this.schema, H.schemaType, H.allowUndefined))
        throw new Error(`${K} value must be ${JSON.stringify(H.schemaType)}`);
      ("code" in H ? H.trackErrors : H.errors !== !1) && (this.errsCount = B.gen.const("_errs", c.default.errors));
    }
    result(B, H, K) {
      this.failResult((0, a.not)(B), H, K);
    }
    failResult(B, H, K) {
      this.gen.if(B), K ? K() : this.error(), H ? (this.gen.else(), H(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(B, H) {
      this.failResult((0, a.not)(B), void 0, H);
    }
    fail(B) {
      if (B === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(B), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(B) {
      if (!this.$data)
        return this.fail(B);
      const { schemaCode: H } = this;
      this.fail((0, a._)`${H} !== undefined && (${(0, a.or)(this.invalid$data(), B)})`);
    }
    error(B, H, K) {
      if (H) {
        this.setParams(H), this._error(B, K), this.setParams({});
        return;
      }
      this._error(B, K);
    }
    _error(B, H) {
      (B ? g.reportExtraError : g.reportError)(this, this.def.error, H);
    }
    $dataError() {
      (0, g.reportError)(this, this.def.$dataError || g.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, g.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(B) {
      this.allErrors || this.gen.if(B);
    }
    setParams(B, H) {
      H ? Object.assign(this.params, B) : this.params = B;
    }
    block$data(B, H, K = a.nil) {
      this.gen.block(() => {
        this.check$data(B, K), H();
      });
    }
    check$data(B = a.nil, H = a.nil) {
      if (!this.$data)
        return;
      const { gen: K, schemaCode: W, schemaType: ee, def: ie } = this;
      K.if((0, a.or)((0, a._)`${W} === undefined`, H)), B !== a.nil && K.assign(B, !0), (ee.length || ie.validateSchema) && (K.elseIf(this.invalid$data()), this.$dataError(), B !== a.nil && K.assign(B, !1)), K.else();
    }
    invalid$data() {
      const { gen: B, schemaCode: H, schemaType: K, def: W, it: ee } = this;
      return (0, a.or)(ie(), xe());
      function ie() {
        if (K.length) {
          if (!(H instanceof a.Name))
            throw new Error("ajv implementation error");
          const he = Array.isArray(K) ? K : [K];
          return (0, a._)`${(0, r.checkDataTypes)(he, H, ee.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function xe() {
        if (W.validateSchema) {
          const he = B.scopeValue("validate$data", { ref: W.validateSchema });
          return (0, a._)`!${he}(${H})`;
        }
        return a.nil;
      }
    }
    subschema(B, H) {
      const K = (0, s.getSubschema)(this.it, B);
      (0, s.extendSubschemaData)(K, this.it, B), (0, s.extendSubschemaMode)(K, B);
      const W = { ...this.it, ...K, items: void 0, props: void 0 };
      return y(W, H), W;
    }
    mergeEvaluated(B, H) {
      const { it: K, gen: W } = this;
      K.opts.unevaluated && (K.props !== !0 && B.props !== void 0 && (K.props = p.mergeEvaluated.props(W, B.props, K.props, H)), K.items !== !0 && B.items !== void 0 && (K.items = p.mergeEvaluated.items(W, B.items, K.items, H)));
    }
    mergeValidEvaluated(B, H) {
      const { it: K, gen: W } = this;
      if (K.opts.unevaluated && (K.props !== !0 || K.items !== !0))
        return W.if(H, () => this.mergeEvaluated(B, a.Name)), !0;
    }
  }
  ht.KeywordCxt = T;
  function z(V, B, H, K) {
    const W = new T(V, H, B);
    "code" in H ? H.code(W, K) : W.$data && H.validate ? (0, i.funcKeywordCode)(W, H) : "macro" in H ? (0, i.macroKeywordCode)(W, H) : (H.compile || H.validate) && (0, i.funcKeywordCode)(W, H);
  }
  const Z = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function J(V, { dataLevel: B, dataNames: H, dataPathArr: K }) {
    let W, ee;
    if (V === "")
      return c.default.rootData;
    if (V[0] === "/") {
      if (!Z.test(V))
        throw new Error(`Invalid JSON-pointer: ${V}`);
      W = V, ee = c.default.rootData;
    } else {
      const ye = Q.exec(V);
      if (!ye)
        throw new Error(`Invalid JSON-pointer: ${V}`);
      const fe = +ye[1];
      if (W = ye[2], W === "#") {
        if (fe >= B)
          throw new Error(he("property/index", fe));
        return K[B - fe];
      }
      if (fe > B)
        throw new Error(he("data", fe));
      if (ee = H[B - fe], !W)
        return ee;
    }
    let ie = ee;
    const xe = W.split("/");
    for (const ye of xe)
      ye && (ee = (0, a._)`${ee}${(0, a.getProperty)((0, p.unescapeJsonPointer)(ye))}`, ie = (0, a._)`${ie} && ${ee}`);
    return ie;
    function he(ye, fe) {
      return `Cannot access ${ye} ${fe} levels up, current level is ${B}`;
    }
  }
  return ht.getData = J, ht;
}
var Bn = {}, no;
function ai() {
  if (no) return Bn;
  no = 1, Object.defineProperty(Bn, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Bn.default = e, Bn;
}
var Hn = {}, ro;
function Mn() {
  if (ro) return Hn;
  ro = 1, Object.defineProperty(Hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ si();
  class t extends Error {
    constructor(r, o, i, s) {
      super(s || `can't resolve reference ${i} from id ${o}`), this.missingRef = (0, e.resolveUrl)(r, o, i), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return Hn.default = t, Hn;
}
var Te = {}, io;
function oi() {
  if (io) return Te;
  io = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.resolveSchema = Te.getCompilingSchema = Te.resolveRef = Te.compileSchema = Te.SchemaEnv = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ai(), n = /* @__PURE__ */ et(), r = /* @__PURE__ */ si(), o = /* @__PURE__ */ re(), i = /* @__PURE__ */ kn();
  class s {
    constructor(S) {
      var v;
      this.refs = {}, this.dynamicAnchors = {};
      let y;
      typeof S.schema == "object" && (y = S.schema), this.schema = S.schema, this.schemaId = S.schemaId, this.root = S.root || this, this.baseId = (v = S.baseId) !== null && v !== void 0 ? v : (0, r.normalizeId)(y?.[S.schemaId || "$id"]), this.schemaPath = S.schemaPath, this.localRefs = S.localRefs, this.meta = S.meta, this.$async = y?.$async, this.refs = {};
    }
  }
  Te.SchemaEnv = s;
  function a(b) {
    const S = p.call(this, b);
    if (S)
      return S;
    const v = (0, r.getFullPath)(this.opts.uriResolver, b.root.baseId), { es5: y, lines: d } = this.opts.code, { ownProperties: l } = this.opts, m = new e.CodeGen(this.scope, { es5: y, lines: d, ownProperties: l });
    let I;
    b.$async && (I = m.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const A = m.scopeName("validate");
    b.validateName = A;
    const R = {
      gen: m,
      allErrors: this.opts.allErrors,
      data: n.default.data,
      parentData: n.default.parentData,
      parentDataProperty: n.default.parentDataProperty,
      dataNames: [n.default.data],
      dataPathArr: [e.nil],
      // TODO can its length be used as dataLevel if nil is removed?
      dataLevel: 0,
      dataTypes: [],
      definedProperties: /* @__PURE__ */ new Set(),
      topSchemaRef: m.scopeValue("schema", this.opts.code.source === !0 ? { ref: b.schema, code: (0, e.stringify)(b.schema) } : { ref: b.schema }),
      validateName: A,
      ValidationError: I,
      schema: b.schema,
      schemaEnv: b,
      rootId: v,
      baseId: b.baseId || v,
      schemaPath: e.nil,
      errSchemaPath: b.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let j;
    try {
      this._compilations.add(b), (0, i.validateFunctionCode)(R), m.optimize(this.opts.code.optimize);
      const E = m.toString();
      j = `${m.scopeRefs(n.default.scope)}return ${E}`, this.opts.code.process && (j = this.opts.code.process(j, b));
      const P = new Function(`${n.default.self}`, `${n.default.scope}`, j)(this, this.scope.get());
      if (this.scope.value(A, { ref: P }), P.errors = null, P.schema = b.schema, P.schemaEnv = b, b.$async && (P.$async = !0), this.opts.code.source === !0 && (P.source = { validateName: A, validateCode: E, scopeValues: m._values }), this.opts.unevaluated) {
        const { props: C, items: D } = R;
        P.evaluated = {
          props: C instanceof e.Name ? void 0 : C,
          items: D instanceof e.Name ? void 0 : D,
          dynamicProps: C instanceof e.Name,
          dynamicItems: D instanceof e.Name
        }, P.source && (P.source.evaluated = (0, e.stringify)(P.evaluated));
      }
      return b.validate = P, b;
    } catch (E) {
      throw delete b.validate, delete b.validateName, j && this.logger.error("Error compiling schema, function code:", j), E;
    } finally {
      this._compilations.delete(b);
    }
  }
  Te.compileSchema = a;
  function c(b, S, v) {
    var y;
    v = (0, r.resolveUrl)(this.opts.uriResolver, S, v);
    const d = b.refs[v];
    if (d)
      return d;
    let l = f.call(this, b, v);
    if (l === void 0) {
      const m = (y = b.localRefs) === null || y === void 0 ? void 0 : y[v], { schemaId: I } = this.opts;
      m && (l = new s({ schema: m, schemaId: I, root: b, baseId: S }));
    }
    if (l !== void 0)
      return b.refs[v] = u.call(this, l);
  }
  Te.resolveRef = c;
  function u(b) {
    return (0, r.inlineRef)(b.schema, this.opts.inlineRefs) ? b.schema : b.validate ? b : a.call(this, b);
  }
  function p(b) {
    for (const S of this._compilations)
      if (g(S, b))
        return S;
  }
  Te.getCompilingSchema = p;
  function g(b, S) {
    return b.schema === S.schema && b.root === S.root && b.baseId === S.baseId;
  }
  function f(b, S) {
    let v;
    for (; typeof (v = this.refs[S]) == "string"; )
      S = v;
    return v || this.schemas[S] || h.call(this, b, S);
  }
  function h(b, S) {
    const v = this.opts.uriResolver.parse(S), y = (0, r._getFullPath)(this.opts.uriResolver, v);
    let d = (0, r.getFullPath)(this.opts.uriResolver, b.baseId, void 0);
    if (Object.keys(b.schema).length > 0 && y === d)
      return x.call(this, v, b);
    const l = (0, r.normalizeId)(y), m = this.refs[l] || this.schemas[l];
    if (typeof m == "string") {
      const I = h.call(this, b, m);
      return typeof I?.schema != "object" ? void 0 : x.call(this, v, I);
    }
    if (typeof m?.schema == "object") {
      if (m.validate || a.call(this, m), l === (0, r.normalizeId)(S)) {
        const { schema: I } = m, { schemaId: A } = this.opts, R = I[A];
        return R && (d = (0, r.resolveUrl)(this.opts.uriResolver, d, R)), new s({ schema: I, schemaId: A, root: b, baseId: d });
      }
      return x.call(this, v, m);
    }
  }
  Te.resolveSchema = h;
  const w = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function x(b, { baseId: S, schema: v, root: y }) {
    var d;
    if (((d = b.fragment) === null || d === void 0 ? void 0 : d[0]) !== "/")
      return;
    for (const I of b.fragment.slice(1).split("/")) {
      if (typeof v == "boolean")
        return;
      const A = v[(0, o.unescapeFragment)(I)];
      if (A === void 0)
        return;
      v = A;
      const R = typeof v == "object" && v[this.opts.schemaId];
      !w.has(I) && R && (S = (0, r.resolveUrl)(this.opts.uriResolver, S, R));
    }
    let l;
    if (typeof v != "boolean" && v.$ref && !(0, o.schemaHasRulesButRef)(v, this.RULES)) {
      const I = (0, r.resolveUrl)(this.opts.uriResolver, S, v.$ref);
      l = h.call(this, y, I);
    }
    const { schemaId: m } = this.opts;
    if (l = l || new s({ schema: v, schemaId: m, root: y, baseId: S }), l.schema !== l.root.schema)
      return l;
  }
  return Te;
}
const Pu = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Tu = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Cu = "object", Eu = ["$data"], ku = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Mu = !1, Ou = {
  $id: Pu,
  description: Tu,
  type: Cu,
  required: Eu,
  properties: ku,
  additionalProperties: Mu
};
var Zn = {}, fn = { exports: {} }, Ei, so;
function Td() {
  if (so) return Ei;
  so = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function n(f) {
    let h = "", w = 0, x = 0;
    for (x = 0; x < f.length; x++)
      if (w = f[x].charCodeAt(0), w !== 48) {
        if (!(w >= 48 && w <= 57 || w >= 65 && w <= 70 || w >= 97 && w <= 102))
          return "";
        h += f[x];
        break;
      }
    for (x += 1; x < f.length; x++) {
      if (w = f[x].charCodeAt(0), !(w >= 48 && w <= 57 || w >= 65 && w <= 70 || w >= 97 && w <= 102))
        return "";
      h += f[x];
    }
    return h;
  }
  const r = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function o(f) {
    return f.length = 0, !0;
  }
  function i(f, h, w) {
    if (f.length) {
      const x = n(f);
      if (x !== "")
        h.push(x);
      else
        return w.error = !0, !1;
      f.length = 0;
    }
    return !0;
  }
  function s(f) {
    let h = 0;
    const w = { error: !1, address: "", zone: "" }, x = [], b = [];
    let S = !1, v = !1, y = i;
    for (let d = 0; d < f.length; d++) {
      const l = f[d];
      if (!(l === "[" || l === "]"))
        if (l === ":") {
          if (S === !0 && (v = !0), !y(b, x, w))
            break;
          if (++h > 7) {
            w.error = !0;
            break;
          }
          d > 0 && f[d - 1] === ":" && (S = !0), x.push(":");
          continue;
        } else if (l === "%") {
          if (!y(b, x, w))
            break;
          y = o;
        } else {
          b.push(l);
          continue;
        }
    }
    return b.length && (y === o ? w.zone = b.join("") : v ? x.push(b.join("")) : x.push(n(b))), w.address = x.join(""), w;
  }
  function a(f) {
    if (c(f, ":") < 2)
      return { host: f, isIPV6: !1 };
    const h = s(f);
    if (h.error)
      return { host: f, isIPV6: !1 };
    {
      let w = h.address, x = h.address;
      return h.zone && (w += "%" + h.zone, x += "%25" + h.zone), { host: w, isIPV6: !0, escapedHost: x };
    }
  }
  function c(f, h) {
    let w = 0;
    for (let x = 0; x < f.length; x++)
      f[x] === h && w++;
    return w;
  }
  function u(f) {
    let h = f;
    const w = [];
    let x = -1, b = 0;
    for (; b = h.length; ) {
      if (b === 1) {
        if (h === ".")
          break;
        if (h === "/") {
          w.push("/");
          break;
        } else {
          w.push(h);
          break;
        }
      } else if (b === 2) {
        if (h[0] === ".") {
          if (h[1] === ".")
            break;
          if (h[1] === "/") {
            h = h.slice(2);
            continue;
          }
        } else if (h[0] === "/" && (h[1] === "." || h[1] === "/")) {
          w.push("/");
          break;
        }
      } else if (b === 3 && h === "/..") {
        w.length !== 0 && w.pop(), w.push("/");
        break;
      }
      if (h[0] === ".") {
        if (h[1] === ".") {
          if (h[2] === "/") {
            h = h.slice(3);
            continue;
          }
        } else if (h[1] === "/") {
          h = h.slice(2);
          continue;
        }
      } else if (h[0] === "/" && h[1] === ".") {
        if (h[2] === "/") {
          h = h.slice(2);
          continue;
        } else if (h[2] === "." && h[3] === "/") {
          h = h.slice(3), w.length !== 0 && w.pop();
          continue;
        }
      }
      if ((x = h.indexOf("/", 1)) === -1) {
        w.push(h);
        break;
      } else
        w.push(h.slice(0, x)), h = h.slice(x);
    }
    return w.join("");
  }
  function p(f, h) {
    const w = h !== !0 ? escape : unescape;
    return f.scheme !== void 0 && (f.scheme = w(f.scheme)), f.userinfo !== void 0 && (f.userinfo = w(f.userinfo)), f.host !== void 0 && (f.host = w(f.host)), f.path !== void 0 && (f.path = w(f.path)), f.query !== void 0 && (f.query = w(f.query)), f.fragment !== void 0 && (f.fragment = w(f.fragment)), f;
  }
  function g(f) {
    const h = [];
    if (f.userinfo !== void 0 && (h.push(f.userinfo), h.push("@")), f.host !== void 0) {
      let w = unescape(f.host);
      if (!t(w)) {
        const x = a(w);
        x.isIPV6 === !0 ? w = `[${x.escapedHost}]` : w = f.host;
      }
      h.push(w);
    }
    return (typeof f.port == "number" || typeof f.port == "string") && (h.push(":"), h.push(String(f.port))), h.length ? h.join("") : void 0;
  }
  return Ei = {
    nonSimpleDomain: r,
    recomposeAuthority: g,
    normalizeComponentEncoding: p,
    removeDotSegments: u,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: a,
    stringArrayToHexStripped: n
  }, Ei;
}
var ki, ao;
function Lu() {
  if (ao) return ki;
  ao = 1;
  const { isUUID: e } = Td(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function r(l) {
    return n.indexOf(
      /** @type {*} */
      l
    ) !== -1;
  }
  function o(l) {
    return l.secure === !0 ? !0 : l.secure === !1 ? !1 : l.scheme ? l.scheme.length === 3 && (l.scheme[0] === "w" || l.scheme[0] === "W") && (l.scheme[1] === "s" || l.scheme[1] === "S") && (l.scheme[2] === "s" || l.scheme[2] === "S") : !1;
  }
  function i(l) {
    return l.host || (l.error = l.error || "HTTP URIs must have a host."), l;
  }
  function s(l) {
    const m = String(l.scheme).toLowerCase() === "https";
    return (l.port === (m ? 443 : 80) || l.port === "") && (l.port = void 0), l.path || (l.path = "/"), l;
  }
  function a(l) {
    return l.secure = o(l), l.resourceName = (l.path || "/") + (l.query ? "?" + l.query : ""), l.path = void 0, l.query = void 0, l;
  }
  function c(l) {
    if ((l.port === (o(l) ? 443 : 80) || l.port === "") && (l.port = void 0), typeof l.secure == "boolean" && (l.scheme = l.secure ? "wss" : "ws", l.secure = void 0), l.resourceName) {
      const [m, I] = l.resourceName.split("?");
      l.path = m && m !== "/" ? m : void 0, l.query = I, l.resourceName = void 0;
    }
    return l.fragment = void 0, l;
  }
  function u(l, m) {
    if (!l.path)
      return l.error = "URN can not be parsed", l;
    const I = l.path.match(t);
    if (I) {
      const A = m.scheme || l.scheme || "urn";
      l.nid = I[1].toLowerCase(), l.nss = I[2];
      const R = `${A}:${m.nid || l.nid}`, j = d(R);
      l.path = void 0, j && (l = j.parse(l, m));
    } else
      l.error = l.error || "URN can not be parsed.";
    return l;
  }
  function p(l, m) {
    if (l.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const I = m.scheme || l.scheme || "urn", A = l.nid.toLowerCase(), R = `${I}:${m.nid || A}`, j = d(R);
    j && (l = j.serialize(l, m));
    const E = l, O = l.nss;
    return E.path = `${A || m.nid}:${O}`, m.skipEscape = !0, E;
  }
  function g(l, m) {
    const I = l;
    return I.uuid = I.nss, I.nss = void 0, !m.tolerant && (!I.uuid || !e(I.uuid)) && (I.error = I.error || "UUID is not valid."), I;
  }
  function f(l) {
    const m = l;
    return m.nss = (l.uuid || "").toLowerCase(), m;
  }
  const h = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: i,
      serialize: s
    }
  ), w = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: h.domainHost,
      parse: i,
      serialize: s
    }
  ), x = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: a,
      serialize: c
    }
  ), b = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: x.domainHost,
      parse: x.parse,
      serialize: x.serialize
    }
  ), y = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: h,
      https: w,
      ws: x,
      wss: b,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: u,
          serialize: p,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: g,
          serialize: f,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(y, null);
  function d(l) {
    return l && (y[
      /** @type {SchemeName} */
      l
    ] || y[
      /** @type {SchemeName} */
      l.toLowerCase()
    ]) || void 0;
  }
  return ki = {
    wsIsSecure: o,
    SCHEMES: y,
    isValidSchemeName: r,
    getSchemeHandler: d
  }, ki;
}
var oo;
function Nu() {
  if (oo) return fn.exports;
  oo = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizeComponentEncoding: r, isIPv4: o, nonSimpleDomain: i } = Td(), { SCHEMES: s, getSchemeHandler: a } = Lu();
  function c(b, S) {
    return typeof b == "string" ? b = /** @type {T} */
    f(w(b, S), S) : typeof b == "object" && (b = /** @type {T} */
    w(f(b, S), S)), b;
  }
  function u(b, S, v) {
    const y = v ? Object.assign({ scheme: "null" }, v) : { scheme: "null" }, d = p(w(b, y), w(S, y), y, !0);
    return y.skipEscape = !0, f(d, y);
  }
  function p(b, S, v, y) {
    const d = {};
    return y || (b = w(f(b, v), v), S = w(f(S, v), v)), v = v || {}, !v.tolerant && S.scheme ? (d.scheme = S.scheme, d.userinfo = S.userinfo, d.host = S.host, d.port = S.port, d.path = t(S.path || ""), d.query = S.query) : (S.userinfo !== void 0 || S.host !== void 0 || S.port !== void 0 ? (d.userinfo = S.userinfo, d.host = S.host, d.port = S.port, d.path = t(S.path || ""), d.query = S.query) : (S.path ? (S.path[0] === "/" ? d.path = t(S.path) : ((b.userinfo !== void 0 || b.host !== void 0 || b.port !== void 0) && !b.path ? d.path = "/" + S.path : b.path ? d.path = b.path.slice(0, b.path.lastIndexOf("/") + 1) + S.path : d.path = S.path, d.path = t(d.path)), d.query = S.query) : (d.path = b.path, S.query !== void 0 ? d.query = S.query : d.query = b.query), d.userinfo = b.userinfo, d.host = b.host, d.port = b.port), d.scheme = b.scheme), d.fragment = S.fragment, d;
  }
  function g(b, S, v) {
    return typeof b == "string" ? (b = unescape(b), b = f(r(w(b, v), !0), { ...v, skipEscape: !0 })) : typeof b == "object" && (b = f(r(b, !0), { ...v, skipEscape: !0 })), typeof S == "string" ? (S = unescape(S), S = f(r(w(S, v), !0), { ...v, skipEscape: !0 })) : typeof S == "object" && (S = f(r(S, !0), { ...v, skipEscape: !0 })), b.toLowerCase() === S.toLowerCase();
  }
  function f(b, S) {
    const v = {
      host: b.host,
      scheme: b.scheme,
      userinfo: b.userinfo,
      port: b.port,
      path: b.path,
      query: b.query,
      nid: b.nid,
      nss: b.nss,
      uuid: b.uuid,
      fragment: b.fragment,
      reference: b.reference,
      resourceName: b.resourceName,
      secure: b.secure,
      error: ""
    }, y = Object.assign({}, S), d = [], l = a(y.scheme || v.scheme);
    l && l.serialize && l.serialize(v, y), v.path !== void 0 && (y.skipEscape ? v.path = unescape(v.path) : (v.path = escape(v.path), v.scheme !== void 0 && (v.path = v.path.split("%3A").join(":")))), y.reference !== "suffix" && v.scheme && d.push(v.scheme, ":");
    const m = n(v);
    if (m !== void 0 && (y.reference !== "suffix" && d.push("//"), d.push(m), v.path && v.path[0] !== "/" && d.push("/")), v.path !== void 0) {
      let I = v.path;
      !y.absolutePath && (!l || !l.absolutePath) && (I = t(I)), m === void 0 && I[0] === "/" && I[1] === "/" && (I = "/%2F" + I.slice(2)), d.push(I);
    }
    return v.query !== void 0 && d.push("?", v.query), v.fragment !== void 0 && d.push("#", v.fragment), d.join("");
  }
  const h = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function w(b, S) {
    const v = Object.assign({}, S), y = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let d = !1;
    v.reference === "suffix" && (v.scheme ? b = v.scheme + ":" + b : b = "//" + b);
    const l = b.match(h);
    if (l) {
      if (y.scheme = l[1], y.userinfo = l[3], y.host = l[4], y.port = parseInt(l[5], 10), y.path = l[6] || "", y.query = l[7], y.fragment = l[8], isNaN(y.port) && (y.port = l[5]), y.host)
        if (o(y.host) === !1) {
          const A = e(y.host);
          y.host = A.host.toLowerCase(), d = A.isIPV6;
        } else
          d = !0;
      y.scheme === void 0 && y.userinfo === void 0 && y.host === void 0 && y.port === void 0 && y.query === void 0 && !y.path ? y.reference = "same-document" : y.scheme === void 0 ? y.reference = "relative" : y.fragment === void 0 ? y.reference = "absolute" : y.reference = "uri", v.reference && v.reference !== "suffix" && v.reference !== y.reference && (y.error = y.error || "URI is not a " + v.reference + " reference.");
      const m = a(v.scheme || y.scheme);
      if (!v.unicodeSupport && (!m || !m.unicodeSupport) && y.host && (v.domainHost || m && m.domainHost) && d === !1 && i(y.host))
        try {
          y.host = URL.domainToASCII(y.host.toLowerCase());
        } catch (I) {
          y.error = y.error || "Host's domain name can not be converted to ASCII: " + I;
        }
      (!m || m && !m.skipNormalize) && (b.indexOf("%") !== -1 && (y.scheme !== void 0 && (y.scheme = unescape(y.scheme)), y.host !== void 0 && (y.host = unescape(y.host))), y.path && (y.path = escape(unescape(y.path))), y.fragment && (y.fragment = encodeURI(decodeURIComponent(y.fragment)))), m && m.parse && m.parse(y, v);
    } else
      y.error = y.error || "URI can not be parsed.";
    return y;
  }
  const x = {
    SCHEMES: s,
    normalize: c,
    resolve: u,
    resolveComponent: p,
    equal: g,
    serialize: f,
    parse: w
  };
  return fn.exports = x, fn.exports.default = x, fn.exports.fastUri = x, fn.exports;
}
var co;
function Du() {
  if (co) return Zn;
  co = 1, Object.defineProperty(Zn, "__esModule", { value: !0 });
  const e = Nu();
  return e.code = 'require("ajv/dist/runtime/uri").default', Zn.default = e, Zn;
}
var lo;
function Cd() {
  return lo || (lo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ kn();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ te();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return n._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return n.str;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return n.stringify;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return n.nil;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return n.Name;
    } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
      return n.CodeGen;
    } });
    const r = /* @__PURE__ */ ai(), o = /* @__PURE__ */ Mn(), i = /* @__PURE__ */ $d(), s = /* @__PURE__ */ oi(), a = /* @__PURE__ */ te(), c = /* @__PURE__ */ si(), u = /* @__PURE__ */ Wr(), p = /* @__PURE__ */ re(), g = Ou, f = /* @__PURE__ */ Du(), h = (k, M) => new RegExp(k, M);
    h.code = "new RegExp";
    const w = ["removeAdditional", "useDefaults", "coerceTypes"], x = /* @__PURE__ */ new Set([
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
    ]), b = {
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
    }, v = 200;
    function y(k) {
      var M, U, N, $, q, T, z, Z, Q, J, V, B, H, K, W, ee, ie, xe, he, ye, fe, nt, Le, gi, vi;
      const un = k.strict, bi = (M = k.code) === null || M === void 0 ? void 0 : M.optimize, Aa = bi === !0 || bi === void 0 ? 1 : bi || 0, qa = (N = (U = k.code) === null || U === void 0 ? void 0 : U.regExp) !== null && N !== void 0 ? N : h, Cl = ($ = k.uriResolver) !== null && $ !== void 0 ? $ : f.default;
      return {
        strictSchema: (T = (q = k.strictSchema) !== null && q !== void 0 ? q : un) !== null && T !== void 0 ? T : !0,
        strictNumbers: (Z = (z = k.strictNumbers) !== null && z !== void 0 ? z : un) !== null && Z !== void 0 ? Z : !0,
        strictTypes: (J = (Q = k.strictTypes) !== null && Q !== void 0 ? Q : un) !== null && J !== void 0 ? J : "log",
        strictTuples: (B = (V = k.strictTuples) !== null && V !== void 0 ? V : un) !== null && B !== void 0 ? B : "log",
        strictRequired: (K = (H = k.strictRequired) !== null && H !== void 0 ? H : un) !== null && K !== void 0 ? K : !1,
        code: k.code ? { ...k.code, optimize: Aa, regExp: qa } : { optimize: Aa, regExp: qa },
        loopRequired: (W = k.loopRequired) !== null && W !== void 0 ? W : v,
        loopEnum: (ee = k.loopEnum) !== null && ee !== void 0 ? ee : v,
        meta: (ie = k.meta) !== null && ie !== void 0 ? ie : !0,
        messages: (xe = k.messages) !== null && xe !== void 0 ? xe : !0,
        inlineRefs: (he = k.inlineRefs) !== null && he !== void 0 ? he : !0,
        schemaId: (ye = k.schemaId) !== null && ye !== void 0 ? ye : "$id",
        addUsedSchema: (fe = k.addUsedSchema) !== null && fe !== void 0 ? fe : !0,
        validateSchema: (nt = k.validateSchema) !== null && nt !== void 0 ? nt : !0,
        validateFormats: (Le = k.validateFormats) !== null && Le !== void 0 ? Le : !0,
        unicodeRegExp: (gi = k.unicodeRegExp) !== null && gi !== void 0 ? gi : !0,
        int32range: (vi = k.int32range) !== null && vi !== void 0 ? vi : !0,
        uriResolver: Cl
      };
    }
    class d {
      constructor(M = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), M = this.opts = { ...M, ...y(M) };
        const { es5: U, lines: N } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: x, es5: U, lines: N }), this.logger = O(M.logger);
        const $ = M.validateFormats;
        M.validateFormats = !1, this.RULES = (0, i.getRules)(), l.call(this, b, M, "NOT SUPPORTED"), l.call(this, S, M, "DEPRECATED", "warn"), this._metaOpts = j.call(this), M.formats && A.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), M.keywords && R.call(this, M.keywords), typeof M.meta == "object" && this.addMetaSchema(M.meta), I.call(this), M.validateFormats = $;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: M, meta: U, schemaId: N } = this.opts;
        let $ = g;
        N === "id" && ($ = { ...g }, $.id = $.$id, delete $.$id), U && M && this.addMetaSchema($, $[N], !1);
      }
      defaultMeta() {
        const { meta: M, schemaId: U } = this.opts;
        return this.opts.defaultMeta = typeof M == "object" ? M[U] || M : void 0;
      }
      validate(M, U) {
        let N;
        if (typeof M == "string") {
          if (N = this.getSchema(M), !N)
            throw new Error(`no schema with key or ref "${M}"`);
        } else
          N = this.compile(M);
        const $ = N(U);
        return "$async" in N || (this.errors = N.errors), $;
      }
      compile(M, U) {
        const N = this._addSchema(M, U);
        return N.validate || this._compileSchemaEnv(N);
      }
      compileAsync(M, U) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: N } = this.opts;
        return $.call(this, M, U);
        async function $(J, V) {
          await q.call(this, J.$schema);
          const B = this._addSchema(J, V);
          return B.validate || T.call(this, B);
        }
        async function q(J) {
          J && !this.getSchema(J) && await $.call(this, { $ref: J }, !0);
        }
        async function T(J) {
          try {
            return this._compileSchemaEnv(J);
          } catch (V) {
            if (!(V instanceof o.default))
              throw V;
            return z.call(this, V), await Z.call(this, V.missingSchema), T.call(this, J);
          }
        }
        function z({ missingSchema: J, missingRef: V }) {
          if (this.refs[J])
            throw new Error(`AnySchema ${J} is loaded but ${V} cannot be resolved`);
        }
        async function Z(J) {
          const V = await Q.call(this, J);
          this.refs[J] || await q.call(this, V.$schema), this.refs[J] || this.addSchema(V, J, U);
        }
        async function Q(J) {
          const V = this._loading[J];
          if (V)
            return V;
          try {
            return await (this._loading[J] = N(J));
          } finally {
            delete this._loading[J];
          }
        }
      }
      // Adds schema to the instance
      addSchema(M, U, N, $ = this.opts.validateSchema) {
        if (Array.isArray(M)) {
          for (const T of M)
            this.addSchema(T, void 0, N, $);
          return this;
        }
        let q;
        if (typeof M == "object") {
          const { schemaId: T } = this.opts;
          if (q = M[T], q !== void 0 && typeof q != "string")
            throw new Error(`schema ${T} must be string`);
        }
        return U = (0, c.normalizeId)(U || q), this._checkUnique(U), this.schemas[U] = this._addSchema(M, N, U, $, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(M, U, N = this.opts.validateSchema) {
        return this.addSchema(M, U, !0, N), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(M, U) {
        if (typeof M == "boolean")
          return !0;
        let N;
        if (N = M.$schema, N !== void 0 && typeof N != "string")
          throw new Error("$schema must be a string");
        if (N = N || this.opts.defaultMeta || this.defaultMeta(), !N)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const $ = this.validate(N, M);
        if (!$ && U) {
          const q = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(q);
          else
            throw new Error(q);
        }
        return $;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(M) {
        let U;
        for (; typeof (U = m.call(this, M)) == "string"; )
          M = U;
        if (U === void 0) {
          const { schemaId: N } = this.opts, $ = new s.SchemaEnv({ schema: {}, schemaId: N });
          if (U = s.resolveSchema.call(this, $, M), !U)
            return;
          this.refs[M] = U;
        }
        return U.validate || this._compileSchemaEnv(U);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(M) {
        if (M instanceof RegExp)
          return this._removeAllSchemas(this.schemas, M), this._removeAllSchemas(this.refs, M), this;
        switch (typeof M) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const U = m.call(this, M);
            return typeof U == "object" && this._cache.delete(U.schema), delete this.schemas[M], delete this.refs[M], this;
          }
          case "object": {
            const U = M;
            this._cache.delete(U);
            let N = M[this.opts.schemaId];
            return N && (N = (0, c.normalizeId)(N), delete this.schemas[N], delete this.refs[N]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(M) {
        for (const U of M)
          this.addKeyword(U);
        return this;
      }
      addKeyword(M, U) {
        let N;
        if (typeof M == "string")
          N = M, typeof U == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), U.keyword = N);
        else if (typeof M == "object" && U === void 0) {
          if (U = M, N = U.keyword, Array.isArray(N) && !N.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (C.call(this, N, U), !U)
          return (0, p.eachItem)(N, (q) => D.call(this, q)), this;
        F.call(this, U);
        const $ = {
          ...U,
          type: (0, u.getJSONTypes)(U.type),
          schemaType: (0, u.getJSONTypes)(U.schemaType)
        };
        return (0, p.eachItem)(N, $.type.length === 0 ? (q) => D.call(this, q, $) : (q) => $.type.forEach((T) => D.call(this, q, $, T))), this;
      }
      getKeyword(M) {
        const U = this.RULES.all[M];
        return typeof U == "object" ? U.definition : !!U;
      }
      // Remove keyword
      removeKeyword(M) {
        const { RULES: U } = this;
        delete U.keywords[M], delete U.all[M];
        for (const N of U.rules) {
          const $ = N.rules.findIndex((q) => q.keyword === M);
          $ >= 0 && N.rules.splice($, 1);
        }
        return this;
      }
      // Add format
      addFormat(M, U) {
        return typeof U == "string" && (U = new RegExp(U)), this.formats[M] = U, this;
      }
      errorsText(M = this.errors, { separator: U = ", ", dataVar: N = "data" } = {}) {
        return !M || M.length === 0 ? "No errors" : M.map(($) => `${N}${$.instancePath} ${$.message}`).reduce(($, q) => $ + U + q);
      }
      $dataMetaSchema(M, U) {
        const N = this.RULES.all;
        M = JSON.parse(JSON.stringify(M));
        for (const $ of U) {
          const q = $.split("/").slice(1);
          let T = M;
          for (const z of q)
            T = T[z];
          for (const z in N) {
            const Z = N[z];
            if (typeof Z != "object")
              continue;
            const { $data: Q } = Z.definition, J = T[z];
            Q && J && (T[z] = G(J));
          }
        }
        return M;
      }
      _removeAllSchemas(M, U) {
        for (const N in M) {
          const $ = M[N];
          (!U || U.test(N)) && (typeof $ == "string" ? delete M[N] : $ && !$.meta && (this._cache.delete($.schema), delete M[N]));
        }
      }
      _addSchema(M, U, N, $ = this.opts.validateSchema, q = this.opts.addUsedSchema) {
        let T;
        const { schemaId: z } = this.opts;
        if (typeof M == "object")
          T = M[z];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof M != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let Z = this._cache.get(M);
        if (Z !== void 0)
          return Z;
        N = (0, c.normalizeId)(T || N);
        const Q = c.getSchemaRefs.call(this, M, N);
        return Z = new s.SchemaEnv({ schema: M, schemaId: z, meta: U, baseId: N, localRefs: Q }), this._cache.set(Z.schema, Z), q && !N.startsWith("#") && (N && this._checkUnique(N), this.refs[N] = Z), $ && this.validateSchema(M, !0), Z;
      }
      _checkUnique(M) {
        if (this.schemas[M] || this.refs[M])
          throw new Error(`schema with key or id "${M}" already exists`);
      }
      _compileSchemaEnv(M) {
        if (M.meta ? this._compileMetaSchema(M) : s.compileSchema.call(this, M), !M.validate)
          throw new Error("ajv implementation error");
        return M.validate;
      }
      _compileMetaSchema(M) {
        const U = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, M);
        } finally {
          this.opts = U;
        }
      }
    }
    d.ValidationError = r.default, d.MissingRefError = o.default, e.default = d;
    function l(k, M, U, N = "error") {
      for (const $ in k) {
        const q = $;
        q in M && this.logger[N](`${U}: option ${$}. ${k[q]}`);
      }
    }
    function m(k) {
      return k = (0, c.normalizeId)(k), this.schemas[k] || this.refs[k];
    }
    function I() {
      const k = this.opts.schemas;
      if (k)
        if (Array.isArray(k))
          this.addSchema(k);
        else
          for (const M in k)
            this.addSchema(k[M], M);
    }
    function A() {
      for (const k in this.opts.formats) {
        const M = this.opts.formats[k];
        M && this.addFormat(k, M);
      }
    }
    function R(k) {
      if (Array.isArray(k)) {
        this.addVocabulary(k);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const M in k) {
        const U = k[M];
        U.keyword || (U.keyword = M), this.addKeyword(U);
      }
    }
    function j() {
      const k = { ...this.opts };
      for (const M of w)
        delete k[M];
      return k;
    }
    const E = { log() {
    }, warn() {
    }, error() {
    } };
    function O(k) {
      if (k === !1)
        return E;
      if (k === void 0)
        return console;
      if (k.log && k.warn && k.error)
        return k;
      throw new Error("logger must implement log, warn and error methods");
    }
    const P = /^[a-z_$][a-z0-9_$:-]*$/i;
    function C(k, M) {
      const { RULES: U } = this;
      if ((0, p.eachItem)(k, (N) => {
        if (U.keywords[N])
          throw new Error(`Keyword ${N} is already defined`);
        if (!P.test(N))
          throw new Error(`Keyword ${N} has invalid name`);
      }), !!M && M.$data && !("code" in M || "validate" in M))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function D(k, M, U) {
      var N;
      const $ = M?.post;
      if (U && $)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: q } = this;
      let T = $ ? q.post : q.rules.find(({ type: Z }) => Z === U);
      if (T || (T = { type: U, rules: [] }, q.rules.push(T)), q.keywords[k] = !0, !M)
        return;
      const z = {
        keyword: k,
        definition: {
          ...M,
          type: (0, u.getJSONTypes)(M.type),
          schemaType: (0, u.getJSONTypes)(M.schemaType)
        }
      };
      M.before ? _.call(this, T, z, M.before) : T.rules.push(z), q.all[k] = z, (N = M.implements) === null || N === void 0 || N.forEach((Z) => this.addKeyword(Z));
    }
    function _(k, M, U) {
      const N = k.rules.findIndex(($) => $.keyword === U);
      N >= 0 ? k.rules.splice(N, 0, M) : (k.rules.push(M), this.logger.warn(`rule ${U} is not defined`));
    }
    function F(k) {
      let { metaSchema: M } = k;
      M !== void 0 && (k.$data && this.opts.$data && (M = G(M)), k.validateSchema = this.compile(M, !0));
    }
    const L = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function G(k) {
      return { anyOf: [k, L] };
    }
  })(Ri)), Ri;
}
var Jn = {}, Kn = {}, Qn = {}, uo;
function zu() {
  if (uo) return Qn;
  uo = 1, Object.defineProperty(Qn, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Qn.default = e, Qn;
}
var Rt = {}, po;
function na() {
  if (po) return Rt;
  po = 1, Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.callRef = Rt.getValidate = void 0;
  const e = /* @__PURE__ */ Mn(), t = /* @__PURE__ */ tt(), n = /* @__PURE__ */ te(), r = /* @__PURE__ */ et(), o = /* @__PURE__ */ oi(), i = /* @__PURE__ */ re(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(u) {
      const { gen: p, schema: g, it: f } = u, { baseId: h, schemaEnv: w, validateName: x, opts: b, self: S } = f, { root: v } = w;
      if ((g === "#" || g === "#/") && h === v.baseId)
        return d();
      const y = o.resolveRef.call(S, v, h, g);
      if (y === void 0)
        throw new e.default(f.opts.uriResolver, h, g);
      if (y instanceof o.SchemaEnv)
        return l(y);
      return m(y);
      function d() {
        if (w === v)
          return c(u, x, w, w.$async);
        const I = p.scopeValue("root", { ref: v });
        return c(u, (0, n._)`${I}.validate`, v, v.$async);
      }
      function l(I) {
        const A = a(u, I);
        c(u, A, I, I.$async);
      }
      function m(I) {
        const A = p.scopeValue("schema", b.code.source === !0 ? { ref: I, code: (0, n.stringify)(I) } : { ref: I }), R = p.name("valid"), j = u.subschema({
          schema: I,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: A,
          errSchemaPath: g
        }, R);
        u.mergeEvaluated(j), u.ok(R);
      }
    }
  };
  function a(u, p) {
    const { gen: g } = u;
    return p.validate ? g.scopeValue("validate", { ref: p.validate }) : (0, n._)`${g.scopeValue("wrapper", { ref: p })}.validate`;
  }
  Rt.getValidate = a;
  function c(u, p, g, f) {
    const { gen: h, it: w } = u, { allErrors: x, schemaEnv: b, opts: S } = w, v = S.passContext ? r.default.this : n.nil;
    f ? y() : d();
    function y() {
      if (!b.$async)
        throw new Error("async schema referenced by sync schema");
      const I = h.let("valid");
      h.try(() => {
        h.code((0, n._)`await ${(0, t.callValidateCode)(u, p, v)}`), m(p), x || h.assign(I, !0);
      }, (A) => {
        h.if((0, n._)`!(${A} instanceof ${w.ValidationError})`, () => h.throw(A)), l(A), x || h.assign(I, !1);
      }), u.ok(I);
    }
    function d() {
      u.result((0, t.callValidateCode)(u, p, v), () => m(p), () => l(p));
    }
    function l(I) {
      const A = (0, n._)`${I}.errors`;
      h.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${A} : ${r.default.vErrors}.concat(${A})`), h.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function m(I) {
      var A;
      if (!w.opts.unevaluated)
        return;
      const R = (A = g?.validate) === null || A === void 0 ? void 0 : A.evaluated;
      if (w.props !== !0)
        if (R && !R.dynamicProps)
          R.props !== void 0 && (w.props = i.mergeEvaluated.props(h, R.props, w.props));
        else {
          const j = h.var("props", (0, n._)`${I}.evaluated.props`);
          w.props = i.mergeEvaluated.props(h, j, w.props, n.Name);
        }
      if (w.items !== !0)
        if (R && !R.dynamicItems)
          R.items !== void 0 && (w.items = i.mergeEvaluated.items(h, R.items, w.items));
        else {
          const j = h.var("items", (0, n._)`${I}.evaluated.items`);
          w.items = i.mergeEvaluated.items(h, j, w.items, n.Name);
        }
    }
  }
  return Rt.callRef = c, Rt.default = s, Rt;
}
var fo;
function Ed() {
  if (fo) return Kn;
  fo = 1, Object.defineProperty(Kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zu(), t = /* @__PURE__ */ na(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Kn.default = n, Kn;
}
var Wn = {}, Xn = {}, ho;
function Uu() {
  if (ho) return Xn;
  ho = 1, Object.defineProperty(Xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, r = {
    message: ({ keyword: i, schemaCode: s }) => (0, e.str)`must be ${n[i].okStr} ${s}`,
    params: ({ keyword: i, schemaCode: s }) => (0, e._)`{comparison: ${n[i].okStr}, limit: ${s}}`
  }, o = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: r,
    code(i) {
      const { keyword: s, data: a, schemaCode: c } = i;
      i.fail$data((0, e._)`${a} ${n[s].fail} ${c} || isNaN(${a})`);
    }
  };
  return Xn.default = o, Xn;
}
var Yn = {}, mo;
function Vu() {
  if (mo) return Yn;
  mo = 1, Object.defineProperty(Yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must be multiple of ${r}`,
      params: ({ schemaCode: r }) => (0, e._)`{multipleOf: ${r}}`
    },
    code(r) {
      const { gen: o, data: i, schemaCode: s, it: a } = r, c = a.opts.multipleOfPrecision, u = o.let("res"), p = c ? (0, e._)`Math.abs(Math.round(${u}) - ${u}) > 1e-${c}` : (0, e._)`${u} !== parseInt(${u})`;
      r.fail$data((0, e._)`(${s} === 0 || (${u} = ${i}/${s}, ${p}))`);
    }
  };
  return Yn.default = n, Yn;
}
var er = {}, tr = {}, yo;
function Gu() {
  if (yo) return tr;
  yo = 1, Object.defineProperty(tr, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, o = 0, i;
    for (; o < n; )
      r++, i = t.charCodeAt(o++), i >= 55296 && i <= 56319 && o < n && (i = t.charCodeAt(o), (i & 64512) === 56320 && o++);
    return r;
  }
  return tr.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', tr;
}
var go;
function Fu() {
  if (go) return er;
  go = 1, Object.defineProperty(er, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ Gu(), o = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: i, schemaCode: s }) {
        const a = i === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${a} than ${s} characters`;
      },
      params: ({ schemaCode: i }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { keyword: s, data: a, schemaCode: c, it: u } = i, p = s === "maxLength" ? e.operators.GT : e.operators.LT, g = u.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(i.gen, n.default)}(${a})`;
      i.fail$data((0, e._)`${g} ${p} ${c}`);
    }
  };
  return er.default = o, er;
}
var nr = {}, vo;
function Bu() {
  if (vo) return nr;
  vo = 1, Object.defineProperty(nr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tt(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ te(), o = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, n.str)`must match pattern "${i}"`,
      params: ({ schemaCode: i }) => (0, n._)`{pattern: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schema: u, schemaCode: p, it: g } = i, f = g.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: h } = g.opts.code, w = h.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, h), x = s.let("valid");
        s.try(() => s.assign(x, (0, n._)`${w}(${p}, ${f}).test(${a})`), () => s.assign(x, !1)), i.fail$data((0, n._)`!${x}`);
      } else {
        const h = (0, e.usePattern)(i, u);
        i.fail$data((0, n._)`!${h}.test(${a})`);
      }
    }
  };
  return nr.default = o, nr;
}
var rr = {}, bo;
function Hu() {
  if (bo) return rr;
  bo = 1, Object.defineProperty(rr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: o }) {
        const i = r === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${i} than ${o} properties`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: o, data: i, schemaCode: s } = r, a = o === "maxProperties" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`Object.keys(${i}).length ${a} ${s}`);
    }
  };
  return rr.default = n, rr;
}
var ir = {}, wo;
function Zu() {
  if (wo) return ir;
  wo = 1, Object.defineProperty(ir, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tt(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ re(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: i } }) => (0, t.str)`must have required property '${i}'`,
      params: ({ params: { missingProperty: i } }) => (0, t._)`{missingProperty: ${i}}`
    },
    code(i) {
      const { gen: s, schema: a, schemaCode: c, data: u, $data: p, it: g } = i, { opts: f } = g;
      if (!p && a.length === 0)
        return;
      const h = a.length >= f.loopRequired;
      if (g.allErrors ? w() : x(), f.strictRequired) {
        const v = i.parentSchema.properties, { definedProperties: y } = i.it;
        for (const d of a)
          if (v?.[d] === void 0 && !y.has(d)) {
            const l = g.schemaEnv.baseId + g.errSchemaPath, m = `required property "${d}" is not defined at "${l}" (strictRequired)`;
            (0, n.checkStrictMode)(g, m, g.opts.strictRequired);
          }
      }
      function w() {
        if (h || p)
          i.block$data(t.nil, b);
        else
          for (const v of a)
            (0, e.checkReportMissingProp)(i, v);
      }
      function x() {
        const v = s.let("missing");
        if (h || p) {
          const y = s.let("valid", !0);
          i.block$data(y, () => S(v, y)), i.ok(y);
        } else
          s.if((0, e.checkMissingProp)(i, a, v)), (0, e.reportMissingProp)(i, v), s.else();
      }
      function b() {
        s.forOf("prop", c, (v) => {
          i.setParams({ missingProperty: v }), s.if((0, e.noPropertyInData)(s, u, v, f.ownProperties), () => i.error());
        });
      }
      function S(v, y) {
        i.setParams({ missingProperty: v }), s.forOf(v, c, () => {
          s.assign(y, (0, e.propertyInData)(s, u, v, f.ownProperties)), s.if((0, t.not)(y), () => {
            i.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return ir.default = o, ir;
}
var sr = {}, xo;
function Ju() {
  if (xo) return sr;
  xo = 1, Object.defineProperty(sr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: o }) {
        const i = r === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${i} than ${o} items`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: o, data: i, schemaCode: s } = r, a = o === "maxItems" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`${i}.length ${a} ${s}`);
    }
  };
  return sr.default = n, sr;
}
var ar = {}, or = {}, So;
function ra() {
  if (So) return or;
  So = 1, Object.defineProperty(or, "__esModule", { value: !0 });
  const e = Pd();
  return e.code = 'require("ajv/dist/runtime/equal").default', or.default = e, or;
}
var Io;
function Ku() {
  if (Io) return ar;
  Io = 1, Object.defineProperty(ar, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wr(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ re(), r = /* @__PURE__ */ ra(), i = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: c, $data: u, schema: p, parentSchema: g, schemaCode: f, it: h } = s;
      if (!u && !p)
        return;
      const w = a.let("valid"), x = g.items ? (0, e.getSchemaTypes)(g.items) : [];
      s.block$data(w, b, (0, t._)`${f} === false`), s.ok(w);
      function b() {
        const d = a.let("i", (0, t._)`${c}.length`), l = a.let("j");
        s.setParams({ i: d, j: l }), a.assign(w, !0), a.if((0, t._)`${d} > 1`, () => (S() ? v : y)(d, l));
      }
      function S() {
        return x.length > 0 && !x.some((d) => d === "object" || d === "array");
      }
      function v(d, l) {
        const m = a.name("item"), I = (0, e.checkDataTypes)(x, m, h.opts.strictNumbers, e.DataType.Wrong), A = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${d}--;`, () => {
          a.let(m, (0, t._)`${c}[${d}]`), a.if(I, (0, t._)`continue`), x.length > 1 && a.if((0, t._)`typeof ${m} == "string"`, (0, t._)`${m} += "_"`), a.if((0, t._)`typeof ${A}[${m}] == "number"`, () => {
            a.assign(l, (0, t._)`${A}[${m}]`), s.error(), a.assign(w, !1).break();
          }).code((0, t._)`${A}[${m}] = ${d}`);
        });
      }
      function y(d, l) {
        const m = (0, n.useFunc)(a, r.default), I = a.name("outer");
        a.label(I).for((0, t._)`;${d}--;`, () => a.for((0, t._)`${l} = ${d}; ${l}--;`, () => a.if((0, t._)`${m}(${c}[${d}], ${c}[${l}])`, () => {
          s.error(), a.assign(w, !1).break(I);
        })));
      }
    }
  };
  return ar.default = i, ar;
}
var cr = {}, Ao;
function Qu() {
  if (Ao) return cr;
  Ao = 1, Object.defineProperty(cr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ ra(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValue: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schemaCode: u, schema: p } = i;
      c || p && typeof p == "object" ? i.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${u})`) : i.fail((0, e._)`${p} !== ${a}`);
    }
  };
  return cr.default = o, cr;
}
var dr = {}, qo;
function Wu() {
  if (qo) return dr;
  qo = 1, Object.defineProperty(dr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ ra(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValues: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: c, schema: u, schemaCode: p, it: g } = i;
      if (!c && u.length === 0)
        throw new Error("enum must have non-empty array");
      const f = u.length >= g.opts.loopEnum;
      let h;
      const w = () => h ?? (h = (0, t.useFunc)(s, n.default));
      let x;
      if (f || c)
        x = s.let("valid"), i.block$data(x, b);
      else {
        if (!Array.isArray(u))
          throw new Error("ajv implementation error");
        const v = s.const("vSchema", p);
        x = (0, e.or)(...u.map((y, d) => S(v, d)));
      }
      i.pass(x);
      function b() {
        s.assign(x, !1), s.forOf("v", p, (v) => s.if((0, e._)`${w()}(${a}, ${v})`, () => s.assign(x, !0).break()));
      }
      function S(v, y) {
        const d = u[y];
        return typeof d == "object" && d !== null ? (0, e._)`${w()}(${a}, ${v}[${y}])` : (0, e._)`${a} === ${d}`;
      }
    }
  };
  return dr.default = o, dr;
}
var Ro;
function kd() {
  if (Ro) return Wn;
  Ro = 1, Object.defineProperty(Wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Uu(), t = /* @__PURE__ */ Vu(), n = /* @__PURE__ */ Fu(), r = /* @__PURE__ */ Bu(), o = /* @__PURE__ */ Hu(), i = /* @__PURE__ */ Zu(), s = /* @__PURE__ */ Ju(), a = /* @__PURE__ */ Ku(), c = /* @__PURE__ */ Qu(), u = /* @__PURE__ */ Wu(), p = [
    // number
    e.default,
    t.default,
    // string
    n.default,
    r.default,
    // object
    o.default,
    i.default,
    // array
    s.default,
    a.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    c.default,
    u.default
  ];
  return Wn.default = p, Wn;
}
var lr = {}, Qt = {}, jo;
function Md() {
  if (jo) return Qt;
  jo = 1, Object.defineProperty(Qt, "__esModule", { value: !0 }), Qt.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), r = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { parentSchema: s, it: a } = i, { items: c } = s;
      if (!Array.isArray(c)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      o(i, c);
    }
  };
  function o(i, s) {
    const { gen: a, schema: c, data: u, keyword: p, it: g } = i;
    g.items = !0;
    const f = a.const("len", (0, e._)`${u}.length`);
    if (c === !1)
      i.setParams({ len: s.length }), i.pass((0, e._)`${f} <= ${s.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(g, c)) {
      const w = a.var("valid", (0, e._)`${f} <= ${s.length}`);
      a.if((0, e.not)(w), () => h(w)), i.ok(w);
    }
    function h(w) {
      a.forRange("i", s.length, f, (x) => {
        i.subschema({ keyword: p, dataProp: x, dataPropType: t.Type.Num }, w), g.allErrors || a.if((0, e.not)(w), () => a.break());
      });
    }
  }
  return Qt.validateAdditionalItems = o, Qt.default = r, Qt;
}
var ur = {}, Wt = {}, $o;
function Od() {
  if ($o) return Wt;
  $o = 1, Object.defineProperty(Wt, "__esModule", { value: !0 }), Wt.validateTuple = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ tt(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(i) {
      const { schema: s, it: a } = i;
      if (Array.isArray(s))
        return o(i, "additionalItems", s);
      a.items = !0, !(0, t.alwaysValidSchema)(a, s) && i.ok((0, n.validateArray)(i));
    }
  };
  function o(i, s, a = i.schema) {
    const { gen: c, parentSchema: u, data: p, keyword: g, it: f } = i;
    x(u), f.opts.unevaluated && a.length && f.items !== !0 && (f.items = t.mergeEvaluated.items(c, a.length, f.items));
    const h = c.name("valid"), w = c.const("len", (0, e._)`${p}.length`);
    a.forEach((b, S) => {
      (0, t.alwaysValidSchema)(f, b) || (c.if((0, e._)`${w} > ${S}`, () => i.subschema({
        keyword: g,
        schemaProp: S,
        dataProp: S
      }, h)), i.ok(h));
    });
    function x(b) {
      const { opts: S, errSchemaPath: v } = f, y = a.length, d = y === b.minItems && (y === b.maxItems || b[s] === !1);
      if (S.strictTuples && !d) {
        const l = `"${g}" is ${y}-tuple, but minItems or maxItems/${s} are not specified or different at path "${v}"`;
        (0, t.checkStrictMode)(f, l, S.strictTuples);
      }
    }
  }
  return Wt.validateTuple = o, Wt.default = r, Wt;
}
var _o;
function Xu() {
  if (_o) return ur;
  _o = 1, Object.defineProperty(ur, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Od(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return ur.default = t, ur;
}
var pr = {}, Po;
function Yu() {
  if (Po) return pr;
  Po = 1, Object.defineProperty(pr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ tt(), r = /* @__PURE__ */ Md(), i = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: c, it: u } = s, { prefixItems: p } = c;
      u.items = !0, !(0, t.alwaysValidSchema)(u, a) && (p ? (0, r.validateAdditionalItems)(s, p) : s.ok((0, n.validateArray)(s)));
    }
  };
  return pr.default = i, pr;
}
var fr = {}, To;
function ep() {
  if (To) return fr;
  To = 1, Object.defineProperty(fr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), r = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: o, max: i } }) => i === void 0 ? (0, e.str)`must contain at least ${o} valid item(s)` : (0, e.str)`must contain at least ${o} and no more than ${i} valid item(s)`,
      params: ({ params: { min: o, max: i } }) => i === void 0 ? (0, e._)`{minContains: ${o}}` : (0, e._)`{minContains: ${o}, maxContains: ${i}}`
    },
    code(o) {
      const { gen: i, schema: s, parentSchema: a, data: c, it: u } = o;
      let p, g;
      const { minContains: f, maxContains: h } = a;
      u.opts.next ? (p = f === void 0 ? 1 : f, g = h) : p = 1;
      const w = i.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: p, max: g }), g === void 0 && p === 0) {
        (0, t.checkStrictMode)(u, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (g !== void 0 && p > g) {
        (0, t.checkStrictMode)(u, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(u, s)) {
        let y = (0, e._)`${w} >= ${p}`;
        g !== void 0 && (y = (0, e._)`${y} && ${w} <= ${g}`), o.pass(y);
        return;
      }
      u.items = !0;
      const x = i.name("valid");
      g === void 0 && p === 1 ? S(x, () => i.if(x, () => i.break())) : p === 0 ? (i.let(x, !0), g !== void 0 && i.if((0, e._)`${c}.length > 0`, b)) : (i.let(x, !1), b()), o.result(x, () => o.reset());
      function b() {
        const y = i.name("_valid"), d = i.let("count", 0);
        S(y, () => i.if(y, () => v(d)));
      }
      function S(y, d) {
        i.forRange("i", 0, w, (l) => {
          o.subschema({
            keyword: "contains",
            dataProp: l,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, y), d();
        });
      }
      function v(y) {
        i.code((0, e._)`${y}++`), g === void 0 ? i.if((0, e._)`${y} >= ${p}`, () => i.assign(x, !0).break()) : (i.if((0, e._)`${y} > ${g}`, () => i.assign(x, !1).break()), p === 1 ? i.assign(x, !0) : i.if((0, e._)`${y} >= ${p}`, () => i.assign(x, !0)));
      }
    }
  };
  return fr.default = r, fr;
}
var Mi = {}, Co;
function ia() {
  return Co || (Co = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ re(), r = /* @__PURE__ */ tt();
    e.error = {
      message: ({ params: { property: c, depsCount: u, deps: p } }) => {
        const g = u === 1 ? "property" : "properties";
        return (0, t.str)`must have ${g} ${p} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: u, deps: p, missingProperty: g } }) => (0, t._)`{property: ${c},
    missingProperty: ${g},
    depsCount: ${u},
    deps: ${p}}`
      // TODO change to reference
    };
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [u, p] = i(c);
        s(c, u), a(c, p);
      }
    };
    function i({ schema: c }) {
      const u = {}, p = {};
      for (const g in c) {
        if (g === "__proto__")
          continue;
        const f = Array.isArray(c[g]) ? u : p;
        f[g] = c[g];
      }
      return [u, p];
    }
    function s(c, u = c.schema) {
      const { gen: p, data: g, it: f } = c;
      if (Object.keys(u).length === 0)
        return;
      const h = p.let("missing");
      for (const w in u) {
        const x = u[w];
        if (x.length === 0)
          continue;
        const b = (0, r.propertyInData)(p, g, w, f.opts.ownProperties);
        c.setParams({
          property: w,
          depsCount: x.length,
          deps: x.join(", ")
        }), f.allErrors ? p.if(b, () => {
          for (const S of x)
            (0, r.checkReportMissingProp)(c, S);
        }) : (p.if((0, t._)`${b} && (${(0, r.checkMissingProp)(c, x, h)})`), (0, r.reportMissingProp)(c, h), p.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(c, u = c.schema) {
      const { gen: p, data: g, keyword: f, it: h } = c, w = p.name("valid");
      for (const x in u)
        (0, n.alwaysValidSchema)(h, u[x]) || (p.if(
          (0, r.propertyInData)(p, g, x, h.opts.ownProperties),
          () => {
            const b = c.subschema({ keyword: f, schemaProp: x }, w);
            c.mergeValidEvaluated(b, w);
          },
          () => p.var(w, !0)
          // TODO var
        ), c.ok(w));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(Mi)), Mi;
}
var hr = {}, Eo;
function tp() {
  if (Eo) return hr;
  Eo = 1, Object.defineProperty(hr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), r = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: o }) => (0, e._)`{propertyName: ${o.propertyName}}`
    },
    code(o) {
      const { gen: i, schema: s, data: a, it: c } = o;
      if ((0, t.alwaysValidSchema)(c, s))
        return;
      const u = i.name("valid");
      i.forIn("key", a, (p) => {
        o.setParams({ propertyName: p }), o.subschema({
          keyword: "propertyNames",
          data: p,
          dataTypes: ["string"],
          propertyName: p,
          compositeRule: !0
        }, u), i.if((0, e.not)(u), () => {
          o.error(!0), c.allErrors || i.break();
        });
      }), o.ok(u);
    }
  };
  return hr.default = r, hr;
}
var mr = {}, ko;
function Ld() {
  if (ko) return mr;
  ko = 1, Object.defineProperty(mr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tt(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ et(), r = /* @__PURE__ */ re(), i = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: !0,
    trackErrors: !0,
    error: {
      message: "must NOT have additional properties",
      params: ({ params: s }) => (0, t._)`{additionalProperty: ${s.additionalProperty}}`
    },
    code(s) {
      const { gen: a, schema: c, parentSchema: u, data: p, errsCount: g, it: f } = s;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: h, opts: w } = f;
      if (f.props = !0, w.removeAdditional !== "all" && (0, r.alwaysValidSchema)(f, c))
        return;
      const x = (0, e.allSchemaProperties)(u.properties), b = (0, e.allSchemaProperties)(u.patternProperties);
      S(), s.ok((0, t._)`${g} === ${n.default.errors}`);
      function S() {
        a.forIn("key", p, (m) => {
          !x.length && !b.length ? d(m) : a.if(v(m), () => d(m));
        });
      }
      function v(m) {
        let I;
        if (x.length > 8) {
          const A = (0, r.schemaRefOrVal)(f, u.properties, "properties");
          I = (0, e.isOwnProperty)(a, A, m);
        } else x.length ? I = (0, t.or)(...x.map((A) => (0, t._)`${m} === ${A}`)) : I = t.nil;
        return b.length && (I = (0, t.or)(I, ...b.map((A) => (0, t._)`${(0, e.usePattern)(s, A)}.test(${m})`))), (0, t.not)(I);
      }
      function y(m) {
        a.code((0, t._)`delete ${p}[${m}]`);
      }
      function d(m) {
        if (w.removeAdditional === "all" || w.removeAdditional && c === !1) {
          y(m);
          return;
        }
        if (c === !1) {
          s.setParams({ additionalProperty: m }), s.error(), h || a.break();
          return;
        }
        if (typeof c == "object" && !(0, r.alwaysValidSchema)(f, c)) {
          const I = a.name("valid");
          w.removeAdditional === "failing" ? (l(m, I, !1), a.if((0, t.not)(I), () => {
            s.reset(), y(m);
          })) : (l(m, I), h || a.if((0, t.not)(I), () => a.break()));
        }
      }
      function l(m, I, A) {
        const R = {
          keyword: "additionalProperties",
          dataProp: m,
          dataPropType: r.Type.Str
        };
        A === !1 && Object.assign(R, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(R, I);
      }
    }
  };
  return mr.default = i, mr;
}
var yr = {}, Mo;
function np() {
  if (Mo) return yr;
  Mo = 1, Object.defineProperty(yr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ kn(), t = /* @__PURE__ */ tt(), n = /* @__PURE__ */ re(), r = /* @__PURE__ */ Ld(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, parentSchema: c, data: u, it: p } = i;
      p.opts.removeAdditional === "all" && c.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(p, r.default, "additionalProperties"));
      const g = (0, t.allSchemaProperties)(a);
      for (const b of g)
        p.definedProperties.add(b);
      p.opts.unevaluated && g.length && p.props !== !0 && (p.props = n.mergeEvaluated.props(s, (0, n.toHash)(g), p.props));
      const f = g.filter((b) => !(0, n.alwaysValidSchema)(p, a[b]));
      if (f.length === 0)
        return;
      const h = s.name("valid");
      for (const b of f)
        w(b) ? x(b) : (s.if((0, t.propertyInData)(s, u, b, p.opts.ownProperties)), x(b), p.allErrors || s.else().var(h, !0), s.endIf()), i.it.definedProperties.add(b), i.ok(h);
      function w(b) {
        return p.opts.useDefaults && !p.compositeRule && a[b].default !== void 0;
      }
      function x(b) {
        i.subschema({
          keyword: "properties",
          schemaProp: b,
          dataProp: b
        }, h);
      }
    }
  };
  return yr.default = o, yr;
}
var gr = {}, Oo;
function rp() {
  if (Oo) return gr;
  Oo = 1, Object.defineProperty(gr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tt(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ re(), r = /* @__PURE__ */ re(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, data: c, parentSchema: u, it: p } = i, { opts: g } = p, f = (0, e.allSchemaProperties)(a), h = f.filter((d) => (0, n.alwaysValidSchema)(p, a[d]));
      if (f.length === 0 || h.length === f.length && (!p.opts.unevaluated || p.props === !0))
        return;
      const w = g.strictSchema && !g.allowMatchingProperties && u.properties, x = s.name("valid");
      p.props !== !0 && !(p.props instanceof t.Name) && (p.props = (0, r.evaluatedPropsToName)(s, p.props));
      const { props: b } = p;
      S();
      function S() {
        for (const d of f)
          w && v(d), p.allErrors ? y(d) : (s.var(x, !0), y(d), s.if(x));
      }
      function v(d) {
        for (const l in w)
          new RegExp(d).test(l) && (0, n.checkStrictMode)(p, `property ${l} matches pattern ${d} (use allowMatchingProperties)`);
      }
      function y(d) {
        s.forIn("key", c, (l) => {
          s.if((0, t._)`${(0, e.usePattern)(i, d)}.test(${l})`, () => {
            const m = h.includes(d);
            m || i.subschema({
              keyword: "patternProperties",
              schemaProp: d,
              dataProp: l,
              dataPropType: r.Type.Str
            }, x), p.opts.unevaluated && b !== !0 ? s.assign((0, t._)`${b}[${l}]`, !0) : !m && !p.allErrors && s.if((0, t.not)(x), () => s.break());
          });
        });
      }
    }
  };
  return gr.default = o, gr;
}
var vr = {}, Lo;
function ip() {
  if (Lo) return vr;
  Lo = 1, Object.defineProperty(vr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: r, schema: o, it: i } = n;
      if ((0, e.alwaysValidSchema)(i, o)) {
        n.fail();
        return;
      }
      const s = r.name("valid");
      n.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, s), n.failResult(s, () => n.reset(), () => n.error());
    },
    error: { message: "must NOT be valid" }
  };
  return vr.default = t, vr;
}
var br = {}, No;
function sp() {
  if (No) return br;
  No = 1, Object.defineProperty(br, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ tt()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return br.default = t, br;
}
var wr = {}, Do;
function ap() {
  if (Do) return wr;
  Do = 1, Object.defineProperty(wr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), r = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: o }) => (0, e._)`{passingSchemas: ${o.passing}}`
    },
    code(o) {
      const { gen: i, schema: s, parentSchema: a, it: c } = o;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      if (c.opts.discriminator && a.discriminator)
        return;
      const u = s, p = i.let("valid", !1), g = i.let("passing", null), f = i.name("_valid");
      o.setParams({ passing: g }), i.block(h), o.result(p, () => o.reset(), () => o.error(!0));
      function h() {
        u.forEach((w, x) => {
          let b;
          (0, t.alwaysValidSchema)(c, w) ? i.var(f, !0) : b = o.subschema({
            keyword: "oneOf",
            schemaProp: x,
            compositeRule: !0
          }, f), x > 0 && i.if((0, e._)`${f} && ${p}`).assign(p, !1).assign(g, (0, e._)`[${g}, ${x}]`).else(), i.if(f, () => {
            i.assign(p, !0), i.assign(g, x), b && o.mergeEvaluated(b, e.Name);
          });
        });
      }
    }
  };
  return wr.default = r, wr;
}
var xr = {}, zo;
function op() {
  if (zo) return xr;
  zo = 1, Object.defineProperty(xr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: r, schema: o, it: i } = n;
      if (!Array.isArray(o))
        throw new Error("ajv implementation error");
      const s = r.name("valid");
      o.forEach((a, c) => {
        if ((0, e.alwaysValidSchema)(i, a))
          return;
        const u = n.subschema({ keyword: "allOf", schemaProp: c }, s);
        n.ok(s), n.mergeEvaluated(u);
      });
    }
  };
  return xr.default = t, xr;
}
var Sr = {}, Uo;
function cp() {
  if (Uo) return Sr;
  Uo = 1, Object.defineProperty(Sr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), r = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: i }) => (0, e.str)`must match "${i.ifClause}" schema`,
      params: ({ params: i }) => (0, e._)`{failingKeyword: ${i.ifClause}}`
    },
    code(i) {
      const { gen: s, parentSchema: a, it: c } = i;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(c, '"if" without "then" and "else" is ignored');
      const u = o(c, "then"), p = o(c, "else");
      if (!u && !p)
        return;
      const g = s.let("valid", !0), f = s.name("_valid");
      if (h(), i.reset(), u && p) {
        const x = s.let("ifClause");
        i.setParams({ ifClause: x }), s.if(f, w("then", x), w("else", x));
      } else u ? s.if(f, w("then")) : s.if((0, e.not)(f), w("else"));
      i.pass(g, () => i.error(!0));
      function h() {
        const x = i.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, f);
        i.mergeEvaluated(x);
      }
      function w(x, b) {
        return () => {
          const S = i.subschema({ keyword: x }, f);
          s.assign(g, f), i.mergeValidEvaluated(S, g), b ? s.assign(b, (0, e._)`${x}`) : i.setParams({ ifClause: x });
        };
      }
    }
  };
  function o(i, s) {
    const a = i.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(i, a);
  }
  return Sr.default = r, Sr;
}
var Ir = {}, Vo;
function dp() {
  if (Vo) return Ir;
  Vo = 1, Object.defineProperty(Ir, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: o }) {
      r.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return Ir.default = t, Ir;
}
var Go;
function Nd() {
  if (Go) return lr;
  Go = 1, Object.defineProperty(lr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Md(), t = /* @__PURE__ */ Xu(), n = /* @__PURE__ */ Od(), r = /* @__PURE__ */ Yu(), o = /* @__PURE__ */ ep(), i = /* @__PURE__ */ ia(), s = /* @__PURE__ */ tp(), a = /* @__PURE__ */ Ld(), c = /* @__PURE__ */ np(), u = /* @__PURE__ */ rp(), p = /* @__PURE__ */ ip(), g = /* @__PURE__ */ sp(), f = /* @__PURE__ */ ap(), h = /* @__PURE__ */ op(), w = /* @__PURE__ */ cp(), x = /* @__PURE__ */ dp();
  function b(S = !1) {
    const v = [
      // any
      p.default,
      g.default,
      f.default,
      h.default,
      w.default,
      x.default,
      // object
      s.default,
      a.default,
      i.default,
      c.default,
      u.default
    ];
    return S ? v.push(t.default, r.default) : v.push(e.default, n.default), v.push(o.default), v;
  }
  return lr.default = b, lr;
}
var Ar = {}, Xt = {}, Fo;
function Dd() {
  if (Fo) return Xt;
  Fo = 1, Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ et(), n = /* @__PURE__ */ oi(), r = /* @__PURE__ */ na(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => i(a, a.schema)
  };
  function i(a, c) {
    const { gen: u, it: p } = a;
    p.schemaEnv.root.dynamicAnchors[c] = !0;
    const g = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, f = p.errSchemaPath === "#" ? p.validateName : s(a);
    u.if((0, e._)`!${g}`, () => u.assign(g, f));
  }
  Xt.dynamicAnchor = i;
  function s(a) {
    const { schemaEnv: c, schema: u, self: p } = a.it, { root: g, baseId: f, localRefs: h, meta: w } = c.root, { schemaId: x } = p.opts, b = new n.SchemaEnv({ schema: u, schemaId: x, root: g, baseId: f, localRefs: h, meta: w });
    return n.compileSchema.call(p, b), (0, r.getValidate)(a, b);
  }
  return Xt.default = o, Xt;
}
var Yt = {}, Bo;
function zd() {
  if (Bo) return Yt;
  Bo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 }), Yt.dynamicRef = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ et(), n = /* @__PURE__ */ na(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (i) => o(i, i.schema)
  };
  function o(i, s) {
    const { gen: a, keyword: c, it: u } = i;
    if (s[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const p = s.slice(1);
    if (u.allErrors)
      g();
    else {
      const h = a.let("valid", !1);
      g(h), i.ok(h);
    }
    function g(h) {
      if (u.schemaEnv.root.dynamicAnchors[p]) {
        const w = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(p)}`);
        a.if(w, f(w, h), f(u.validateName, h));
      } else
        f(u.validateName, h)();
    }
    function f(h, w) {
      return w ? () => a.block(() => {
        (0, n.callRef)(i, h), a.let(w, !0);
      }) : () => (0, n.callRef)(i, h);
    }
  }
  return Yt.dynamicRef = o, Yt.default = r, Yt;
}
var qr = {}, Ho;
function lp() {
  if (Ho) return qr;
  Ho = 1, Object.defineProperty(qr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Dd(), t = /* @__PURE__ */ re(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return qr.default = n, qr;
}
var Rr = {}, Zo;
function up() {
  if (Zo) return Rr;
  Zo = 1, Object.defineProperty(Rr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zd(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Rr.default = t, Rr;
}
var Jo;
function pp() {
  if (Jo) return Ar;
  Jo = 1, Object.defineProperty(Ar, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Dd(), t = /* @__PURE__ */ zd(), n = /* @__PURE__ */ lp(), r = /* @__PURE__ */ up(), o = [e.default, t.default, n.default, r.default];
  return Ar.default = o, Ar;
}
var jr = {}, $r = {}, Ko;
function fp() {
  if (Ko) return $r;
  Ko = 1, Object.defineProperty($r, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ia(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return $r.default = t, $r;
}
var _r = {}, Qo;
function hp() {
  if (Qo) return _r;
  Qo = 1, Object.defineProperty(_r, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ia(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return _r.default = t, _r;
}
var Pr = {}, Wo;
function mp() {
  if (Wo) return Pr;
  Wo = 1, Object.defineProperty(Pr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: o }) {
      r.contains === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "contains" is ignored`);
    }
  };
  return Pr.default = t, Pr;
}
var Xo;
function yp() {
  if (Xo) return jr;
  Xo = 1, Object.defineProperty(jr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fp(), t = /* @__PURE__ */ hp(), n = /* @__PURE__ */ mp(), r = [e.default, t.default, n.default];
  return jr.default = r, jr;
}
var Tr = {}, Cr = {}, Yo;
function gp() {
  if (Yo) return Cr;
  Yo = 1, Object.defineProperty(Cr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ et(), o = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: i }) => (0, e._)`{unevaluatedProperty: ${i.unevaluatedProperty}}`
    },
    code(i) {
      const { gen: s, schema: a, data: c, errsCount: u, it: p } = i;
      if (!u)
        throw new Error("ajv implementation error");
      const { allErrors: g, props: f } = p;
      f instanceof e.Name ? s.if((0, e._)`${f} !== true`, () => s.forIn("key", c, (b) => s.if(w(f, b), () => h(b)))) : f !== !0 && s.forIn("key", c, (b) => f === void 0 ? h(b) : s.if(x(f, b), () => h(b))), p.props = !0, i.ok((0, e._)`${u} === ${n.default.errors}`);
      function h(b) {
        if (a === !1) {
          i.setParams({ unevaluatedProperty: b }), i.error(), g || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(p, a)) {
          const S = s.name("valid");
          i.subschema({
            keyword: "unevaluatedProperties",
            dataProp: b,
            dataPropType: t.Type.Str
          }, S), g || s.if((0, e.not)(S), () => s.break());
        }
      }
      function w(b, S) {
        return (0, e._)`!${b} || !${b}[${S}]`;
      }
      function x(b, S) {
        const v = [];
        for (const y in b)
          b[y] === !0 && v.push((0, e._)`${S} !== ${y}`);
        return (0, e.and)(...v);
      }
    }
  };
  return Cr.default = o, Cr;
}
var Er = {}, ec;
function vp() {
  if (ec) return Er;
  ec = 1, Object.defineProperty(Er, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { gen: i, schema: s, data: a, it: c } = o, u = c.items || 0;
      if (u === !0)
        return;
      const p = i.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        o.setParams({ len: u }), o.fail((0, e._)`${p} > ${u}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(c, s)) {
        const f = i.var("valid", (0, e._)`${p} <= ${u}`);
        i.if((0, e.not)(f), () => g(f, u)), o.ok(f);
      }
      c.items = !0;
      function g(f, h) {
        i.forRange("i", h, p, (w) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: w, dataPropType: t.Type.Num }, f), c.allErrors || i.if((0, e.not)(f), () => i.break());
        });
      }
    }
  };
  return Er.default = r, Er;
}
var tc;
function bp() {
  if (tc) return Tr;
  tc = 1, Object.defineProperty(Tr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ gp(), t = /* @__PURE__ */ vp(), n = [e.default, t.default];
  return Tr.default = n, Tr;
}
var kr = {}, Mr = {}, nc;
function wp() {
  if (nc) return Mr;
  nc = 1, Object.defineProperty(Mr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
      params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
    },
    code(r, o) {
      const { gen: i, data: s, $data: a, schema: c, schemaCode: u, it: p } = r, { opts: g, errSchemaPath: f, schemaEnv: h, self: w } = p;
      if (!g.validateFormats)
        return;
      a ? x() : b();
      function x() {
        const S = i.scopeValue("formats", {
          ref: w.formats,
          code: g.code.formats
        }), v = i.const("fDef", (0, e._)`${S}[${u}]`), y = i.let("fType"), d = i.let("format");
        i.if((0, e._)`typeof ${v} == "object" && !(${v} instanceof RegExp)`, () => i.assign(y, (0, e._)`${v}.type || "string"`).assign(d, (0, e._)`${v}.validate`), () => i.assign(y, (0, e._)`"string"`).assign(d, v)), r.fail$data((0, e.or)(l(), m()));
        function l() {
          return g.strictSchema === !1 ? e.nil : (0, e._)`${u} && !${d}`;
        }
        function m() {
          const I = h.$async ? (0, e._)`(${v}.async ? await ${d}(${s}) : ${d}(${s}))` : (0, e._)`${d}(${s})`, A = (0, e._)`(typeof ${d} == "function" ? ${I} : ${d}.test(${s}))`;
          return (0, e._)`${d} && ${d} !== true && ${y} === ${o} && !${A}`;
        }
      }
      function b() {
        const S = w.formats[c];
        if (!S) {
          l();
          return;
        }
        if (S === !0)
          return;
        const [v, y, d] = m(S);
        v === o && r.pass(I());
        function l() {
          if (g.strictSchema === !1) {
            w.logger.warn(A());
            return;
          }
          throw new Error(A());
          function A() {
            return `unknown format "${c}" ignored in schema at path "${f}"`;
          }
        }
        function m(A) {
          const R = A instanceof RegExp ? (0, e.regexpCode)(A) : g.code.formats ? (0, e._)`${g.code.formats}${(0, e.getProperty)(c)}` : void 0, j = i.scopeValue("formats", { key: c, ref: A, code: R });
          return typeof A == "object" && !(A instanceof RegExp) ? [A.type || "string", A.validate, (0, e._)`${j}.validate`] : ["string", A, j];
        }
        function I() {
          if (typeof S == "object" && !(S instanceof RegExp) && S.async) {
            if (!h.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${d}(${s})`;
          }
          return typeof y == "function" ? (0, e._)`${d}(${s})` : (0, e._)`${d}.test(${s})`;
        }
      }
    }
  };
  return Mr.default = n, Mr;
}
var rc;
function Ud() {
  if (rc) return kr;
  rc = 1, Object.defineProperty(kr, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ wp()).default];
  return kr.default = t, kr;
}
var zt = {}, ic;
function Vd() {
  return ic || (ic = 1, Object.defineProperty(zt, "__esModule", { value: !0 }), zt.contentVocabulary = zt.metadataVocabulary = void 0, zt.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], zt.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), zt;
}
var sc;
function xp() {
  if (sc) return Jn;
  sc = 1, Object.defineProperty(Jn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ed(), t = /* @__PURE__ */ kd(), n = /* @__PURE__ */ Nd(), r = /* @__PURE__ */ pp(), o = /* @__PURE__ */ yp(), i = /* @__PURE__ */ bp(), s = /* @__PURE__ */ Ud(), a = /* @__PURE__ */ Vd(), c = [
    r.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    s.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    o.default,
    i.default
  ];
  return Jn.default = c, Jn;
}
var Or = {}, hn = {}, ac;
function Sp() {
  if (ac) return hn;
  ac = 1, Object.defineProperty(hn, "__esModule", { value: !0 }), hn.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (hn.DiscrError = e = {})), hn;
}
var oc;
function Gd() {
  if (oc) return Or;
  oc = 1, Object.defineProperty(Or, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Sp(), n = /* @__PURE__ */ oi(), r = /* @__PURE__ */ Mn(), o = /* @__PURE__ */ re(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: u } }) => (0, e._)`{error: ${a}, tag: ${u}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: u, schema: p, parentSchema: g, it: f } = a, { oneOf: h } = g;
      if (!f.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const w = p.propertyName;
      if (typeof w != "string")
        throw new Error("discriminator: requires propertyName");
      if (p.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!h)
        throw new Error("discriminator: requires oneOf keyword");
      const x = c.let("valid", !1), b = c.const("tag", (0, e._)`${u}${(0, e.getProperty)(w)}`);
      c.if((0, e._)`typeof ${b} == "string"`, () => S(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: b, tagName: w })), a.ok(x);
      function S() {
        const d = y();
        c.if(!1);
        for (const l in d)
          c.elseIf((0, e._)`${b} === ${l}`), c.assign(x, v(d[l]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: b, tagName: w }), c.endIf();
      }
      function v(d) {
        const l = c.name("valid"), m = a.subschema({ keyword: "oneOf", schemaProp: d }, l);
        return a.mergeEvaluated(m, e.Name), l;
      }
      function y() {
        var d;
        const l = {}, m = A(g);
        let I = !0;
        for (let E = 0; E < h.length; E++) {
          let O = h[E];
          if (O?.$ref && !(0, o.schemaHasRulesButRef)(O, f.self.RULES)) {
            const C = O.$ref;
            if (O = n.resolveRef.call(f.self, f.schemaEnv.root, f.baseId, C), O instanceof n.SchemaEnv && (O = O.schema), O === void 0)
              throw new r.default(f.opts.uriResolver, f.baseId, C);
          }
          const P = (d = O?.properties) === null || d === void 0 ? void 0 : d[w];
          if (typeof P != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${w}"`);
          I = I && (m || A(O)), R(P, E);
        }
        if (!I)
          throw new Error(`discriminator: "${w}" must be required`);
        return l;
        function A({ required: E }) {
          return Array.isArray(E) && E.includes(w);
        }
        function R(E, O) {
          if (E.const)
            j(E.const, O);
          else if (E.enum)
            for (const P of E.enum)
              j(P, O);
          else
            throw new Error(`discriminator: "properties/${w}" must have "const" or "enum"`);
        }
        function j(E, O) {
          if (typeof E != "string" || E in l)
            throw new Error(`discriminator: "${w}" values must be unique strings`);
          l[E] = O;
        }
      }
    }
  };
  return Or.default = s, Or;
}
var Lr = {};
const Ip = "https://json-schema.org/draft/2020-12/schema", Ap = "https://json-schema.org/draft/2020-12/schema", qp = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Rp = "meta", jp = "Core and Validation specifications meta-schema", $p = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], _p = ["object", "boolean"], Pp = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Tp = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Cp = {
  $schema: Ip,
  $id: Ap,
  $vocabulary: qp,
  $dynamicAnchor: Rp,
  title: jp,
  allOf: $p,
  type: _p,
  $comment: Pp,
  properties: Tp
}, Ep = "https://json-schema.org/draft/2020-12/schema", kp = "https://json-schema.org/draft/2020-12/meta/applicator", Mp = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Op = "meta", Lp = "Applicator vocabulary meta-schema", Np = ["object", "boolean"], Dp = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, zp = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Up = {
  $schema: Ep,
  $id: kp,
  $vocabulary: Mp,
  $dynamicAnchor: Op,
  title: Lp,
  type: Np,
  properties: Dp,
  $defs: zp
}, Vp = "https://json-schema.org/draft/2020-12/schema", Gp = "https://json-schema.org/draft/2020-12/meta/unevaluated", Fp = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Bp = "meta", Hp = "Unevaluated applicator vocabulary meta-schema", Zp = ["object", "boolean"], Jp = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Kp = {
  $schema: Vp,
  $id: Gp,
  $vocabulary: Fp,
  $dynamicAnchor: Bp,
  title: Hp,
  type: Zp,
  properties: Jp
}, Qp = "https://json-schema.org/draft/2020-12/schema", Wp = "https://json-schema.org/draft/2020-12/meta/content", Xp = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Yp = "meta", ef = "Content vocabulary meta-schema", tf = ["object", "boolean"], nf = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, rf = {
  $schema: Qp,
  $id: Wp,
  $vocabulary: Xp,
  $dynamicAnchor: Yp,
  title: ef,
  type: tf,
  properties: nf
}, sf = "https://json-schema.org/draft/2020-12/schema", af = "https://json-schema.org/draft/2020-12/meta/core", of = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, cf = "meta", df = "Core vocabulary meta-schema", lf = ["object", "boolean"], uf = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, pf = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, ff = {
  $schema: sf,
  $id: af,
  $vocabulary: of,
  $dynamicAnchor: cf,
  title: df,
  type: lf,
  properties: uf,
  $defs: pf
}, hf = "https://json-schema.org/draft/2020-12/schema", mf = "https://json-schema.org/draft/2020-12/meta/format-annotation", yf = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, gf = "meta", vf = "Format vocabulary meta-schema for annotation results", bf = ["object", "boolean"], wf = { format: { type: "string" } }, xf = {
  $schema: hf,
  $id: mf,
  $vocabulary: yf,
  $dynamicAnchor: gf,
  title: vf,
  type: bf,
  properties: wf
}, Sf = "https://json-schema.org/draft/2020-12/schema", If = "https://json-schema.org/draft/2020-12/meta/meta-data", Af = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, qf = "meta", Rf = "Meta-data vocabulary meta-schema", jf = ["object", "boolean"], $f = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, _f = {
  $schema: Sf,
  $id: If,
  $vocabulary: Af,
  $dynamicAnchor: qf,
  title: Rf,
  type: jf,
  properties: $f
}, Pf = "https://json-schema.org/draft/2020-12/schema", Tf = "https://json-schema.org/draft/2020-12/meta/validation", Cf = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Ef = "meta", kf = "Validation vocabulary meta-schema", Mf = ["object", "boolean"], Of = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Lf = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Nf = {
  $schema: Pf,
  $id: Tf,
  $vocabulary: Cf,
  $dynamicAnchor: Ef,
  title: kf,
  type: Mf,
  properties: Of,
  $defs: Lf
};
var cc;
function Df() {
  if (cc) return Lr;
  cc = 1, Object.defineProperty(Lr, "__esModule", { value: !0 });
  const e = Cp, t = Up, n = Kp, r = rf, o = ff, i = xf, s = _f, a = Nf, c = ["/properties"];
  function u(p) {
    return [
      e,
      t,
      n,
      r,
      o,
      g(this, i),
      s,
      g(this, a)
    ].forEach((f) => this.addMetaSchema(f, void 0, !1)), this;
    function g(f, h) {
      return p ? f.$dataMetaSchema(h, c) : h;
    }
  }
  return Lr.default = u, Lr;
}
var dc;
function zf() {
  return dc || (dc = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Cd(), r = /* @__PURE__ */ xp(), o = /* @__PURE__ */ Gd(), i = /* @__PURE__ */ Df(), s = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
      constructor(h = {}) {
        super({
          ...h,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach((h) => this.addVocabulary(h)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: h, meta: w } = this.opts;
        w && (i.default.call(this, h), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var c = /* @__PURE__ */ kn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return c.KeywordCxt;
    } });
    var u = /* @__PURE__ */ te();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return u._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return u.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return u.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return u.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return u.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return u.CodeGen;
    } });
    var p = /* @__PURE__ */ ai();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return p.default;
    } });
    var g = /* @__PURE__ */ Mn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return g.default;
    } });
  })(Gn, Gn.exports)), Gn.exports;
}
var Uf = /* @__PURE__ */ zf();
const Vf = /* @__PURE__ */ ta(Uf);
var Nr = { exports: {} }, Oi = {}, lc;
function Gf() {
  return lc || (lc = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(E, O) {
      return { validate: E, compare: O };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(i, s),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: t(c(!0), u),
      "date-time": t(f(!0), h),
      "iso-time": t(c(), p),
      "iso-date-time": t(f(), w),
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
      regex: j,
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
      byte: y,
      // signed 32 bit integer
      int32: { type: "number", validate: m },
      // signed 64 bit integer
      int64: { type: "number", validate: I },
      // C-type float
      float: { type: "number", validate: A },
      // C-type double
      double: { type: "number", validate: A },
      // hint to the UI to hide input strings
      password: !0,
      // unchecked string payload
      binary: !0
    }, e.fastFormats = {
      ...e.fullFormats,
      date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, s),
      time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, u),
      "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, h),
      "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, p),
      "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, w),
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    }, e.formatNames = Object.keys(e.fullFormats);
    function n(E) {
      return E % 4 === 0 && (E % 100 !== 0 || E % 400 === 0);
    }
    const r = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, o = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function i(E) {
      const O = r.exec(E);
      if (!O)
        return !1;
      const P = +O[1], C = +O[2], D = +O[3];
      return C >= 1 && C <= 12 && D >= 1 && D <= (C === 2 && n(P) ? 29 : o[C]);
    }
    function s(E, O) {
      if (E && O)
        return E > O ? 1 : E < O ? -1 : 0;
    }
    const a = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function c(E) {
      return function(P) {
        const C = a.exec(P);
        if (!C)
          return !1;
        const D = +C[1], _ = +C[2], F = +C[3], L = C[4], G = C[5] === "-" ? -1 : 1, k = +(C[6] || 0), M = +(C[7] || 0);
        if (k > 23 || M > 59 || E && !L)
          return !1;
        if (D <= 23 && _ <= 59 && F < 60)
          return !0;
        const U = _ - M * G, N = D - k * G - (U < 0 ? 1 : 0);
        return (N === 23 || N === -1) && (U === 59 || U === -1) && F < 61;
      };
    }
    function u(E, O) {
      if (!(E && O))
        return;
      const P = (/* @__PURE__ */ new Date("2020-01-01T" + E)).valueOf(), C = (/* @__PURE__ */ new Date("2020-01-01T" + O)).valueOf();
      if (P && C)
        return P - C;
    }
    function p(E, O) {
      if (!(E && O))
        return;
      const P = a.exec(E), C = a.exec(O);
      if (P && C)
        return E = P[1] + P[2] + P[3], O = C[1] + C[2] + C[3], E > O ? 1 : E < O ? -1 : 0;
    }
    const g = /t|\s/i;
    function f(E) {
      const O = c(E);
      return function(C) {
        const D = C.split(g);
        return D.length === 2 && i(D[0]) && O(D[1]);
      };
    }
    function h(E, O) {
      if (!(E && O))
        return;
      const P = new Date(E).valueOf(), C = new Date(O).valueOf();
      if (P && C)
        return P - C;
    }
    function w(E, O) {
      if (!(E && O))
        return;
      const [P, C] = E.split(g), [D, _] = O.split(g), F = s(P, D);
      if (F !== void 0)
        return F || u(C, _);
    }
    const x = /\/|:/, b = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function S(E) {
      return x.test(E) && b.test(E);
    }
    const v = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function y(E) {
      return v.lastIndex = 0, v.test(E);
    }
    const d = -2147483648, l = 2 ** 31 - 1;
    function m(E) {
      return Number.isInteger(E) && E <= l && E >= d;
    }
    function I(E) {
      return Number.isInteger(E);
    }
    function A() {
      return !0;
    }
    const R = /[^\\]\\Z/;
    function j(E) {
      if (R.test(E))
        return !1;
      try {
        return new RegExp(E), !0;
      } catch {
        return !1;
      }
    }
  })(Oi)), Oi;
}
var Li = {}, Dr = { exports: {} }, zr = {}, uc;
function Ff() {
  if (uc) return zr;
  uc = 1, Object.defineProperty(zr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ed(), t = /* @__PURE__ */ kd(), n = /* @__PURE__ */ Nd(), r = /* @__PURE__ */ Ud(), o = /* @__PURE__ */ Vd(), i = [
    e.default,
    t.default,
    (0, n.default)(),
    r.default,
    o.metadataVocabulary,
    o.contentVocabulary
  ];
  return zr.default = i, zr;
}
const Bf = "http://json-schema.org/draft-07/schema#", Hf = "http://json-schema.org/draft-07/schema#", Zf = "Core schema meta-schema", Jf = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Kf = ["object", "boolean"], Qf = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, Wf = {
  $schema: Bf,
  $id: Hf,
  title: Zf,
  definitions: Jf,
  type: Kf,
  properties: Qf,
  default: !0
};
var pc;
function Xf() {
  return pc || (pc = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const n = /* @__PURE__ */ Cd(), r = /* @__PURE__ */ Ff(), o = /* @__PURE__ */ Gd(), i = Wf, s = ["/properties"], a = "http://json-schema.org/draft-07/schema";
    class c extends n.default {
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach((w) => this.addVocabulary(w)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta)
          return;
        const w = this.opts.$data ? this.$dataMetaSchema(i, s) : i;
        this.addMetaSchema(w, a, !1), this.refs["http://json-schema.org/schema"] = a;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(a) ? a : void 0);
      }
    }
    t.Ajv = c, e.exports = t = c, e.exports.Ajv = c, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = c;
    var u = /* @__PURE__ */ kn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return u.KeywordCxt;
    } });
    var p = /* @__PURE__ */ te();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return p._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return p.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return p.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return p.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return p.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return p.CodeGen;
    } });
    var g = /* @__PURE__ */ ai();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return g.default;
    } });
    var f = /* @__PURE__ */ Mn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return f.default;
    } });
  })(Dr, Dr.exports)), Dr.exports;
}
var fc;
function Yf() {
  return fc || (fc = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = /* @__PURE__ */ Xf(), n = /* @__PURE__ */ te(), r = n.operators, o = {
      formatMaximum: { okStr: "<=", ok: r.LTE, fail: r.GT },
      formatMinimum: { okStr: ">=", ok: r.GTE, fail: r.LT },
      formatExclusiveMaximum: { okStr: "<", ok: r.LT, fail: r.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: r.GT, fail: r.LTE }
    }, i = {
      message: ({ keyword: a, schemaCode: c }) => (0, n.str)`should be ${o[a].okStr} ${c}`,
      params: ({ keyword: a, schemaCode: c }) => (0, n._)`{comparison: ${o[a].okStr}, limit: ${c}}`
    };
    e.formatLimitDefinition = {
      keyword: Object.keys(o),
      type: "string",
      schemaType: "string",
      $data: !0,
      error: i,
      code(a) {
        const { gen: c, data: u, schemaCode: p, keyword: g, it: f } = a, { opts: h, self: w } = f;
        if (!h.validateFormats)
          return;
        const x = new t.KeywordCxt(f, w.RULES.all.format.definition, "format");
        x.$data ? b() : S();
        function b() {
          const y = c.scopeValue("formats", {
            ref: w.formats,
            code: h.code.formats
          }), d = c.const("fmt", (0, n._)`${y}[${x.schemaCode}]`);
          a.fail$data((0, n.or)((0, n._)`typeof ${d} != "object"`, (0, n._)`${d} instanceof RegExp`, (0, n._)`typeof ${d}.compare != "function"`, v(d)));
        }
        function S() {
          const y = x.schema, d = w.formats[y];
          if (!d || d === !0)
            return;
          if (typeof d != "object" || d instanceof RegExp || typeof d.compare != "function")
            throw new Error(`"${g}": format "${y}" does not define "compare" function`);
          const l = c.scopeValue("formats", {
            key: y,
            ref: d,
            code: h.code.formats ? (0, n._)`${h.code.formats}${(0, n.getProperty)(y)}` : void 0
          });
          a.fail$data(v(l));
        }
        function v(y) {
          return (0, n._)`${y}.compare(${u}, ${p}) ${o[g].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const s = (a) => (a.addKeyword(e.formatLimitDefinition), a);
    e.default = s;
  })(Li)), Li;
}
var hc;
function eh() {
  return hc || (hc = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const n = Gf(), r = Yf(), o = /* @__PURE__ */ te(), i = new o.Name("fullFormats"), s = new o.Name("fastFormats"), a = (u, p = { keywords: !0 }) => {
      if (Array.isArray(p))
        return c(u, p, n.fullFormats, i), u;
      const [g, f] = p.mode === "fast" ? [n.fastFormats, s] : [n.fullFormats, i], h = p.formats || n.formatNames;
      return c(u, h, g, f), p.keywords && (0, r.default)(u), u;
    };
    a.get = (u, p = "full") => {
      const f = (p === "fast" ? n.fastFormats : n.fullFormats)[u];
      if (!f)
        throw new Error(`Unknown format "${u}"`);
      return f;
    };
    function c(u, p, g, f) {
      var h, w;
      (h = (w = u.opts.code).formats) !== null && h !== void 0 || (w.formats = (0, o._)`require("ajv-formats/dist/formats").${f}`);
      for (const x of p)
        u.addFormat(x, g[x]);
    }
    e.exports = t = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
  })(Nr, Nr.exports)), Nr.exports;
}
var th = eh();
const nh = /* @__PURE__ */ ta(th);
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const rh = {
  p: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,
  n: 0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,
  a: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,
  d: 0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,
  Gx: 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,
  Gy: 0x6666666666666666666666666666666666666666666666666666666666666658n
}, { p: Ae, n: Br, Gx: mc, Gy: yc, a: Ni, d: Di } = rh, ih = 8n, Tt = 32, $n = 64, Ve = (e = "") => {
  throw new Error(e);
}, sh = (e) => typeof e == "bigint", Fd = (e) => typeof e == "string", ah = (e) => e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array", Ft = (e, t) => !ah(e) || typeof t == "number" && t > 0 && e.length !== t ? Ve("Uint8Array expected") : e, ci = (e) => new Uint8Array(e), sa = (e) => Uint8Array.from(e), Bd = (e, t) => e.toString(16).padStart(t, "0"), aa = (e) => Array.from(Ft(e)).map((t) => Bd(t, 2)).join(""), gt = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 }, gc = (e) => {
  if (e >= gt._0 && e <= gt._9)
    return e - gt._0;
  if (e >= gt.A && e <= gt.F)
    return e - (gt.A - 10);
  if (e >= gt.a && e <= gt.f)
    return e - (gt.a - 10);
}, oa = (e) => {
  const t = "hex invalid";
  if (!Fd(e))
    return Ve(t);
  const n = e.length, r = n / 2;
  if (n % 2)
    return Ve(t);
  const o = ci(r);
  for (let i = 0, s = 0; i < r; i++, s += 2) {
    const a = gc(e.charCodeAt(s)), c = gc(e.charCodeAt(s + 1));
    if (a === void 0 || c === void 0)
      return Ve(t);
    o[i] = a * 16 + c;
  }
  return o;
}, nn = (e, t) => Ft(Fd(e) ? oa(e) : sa(Ft(e)), t), Hd = () => globalThis?.crypto, oh = () => Hd()?.subtle ?? Ve("crypto.subtle must be defined"), _n = (...e) => {
  const t = ci(e.reduce((r, o) => r + Ft(o).length, 0));
  let n = 0;
  return e.forEach((r) => {
    t.set(r, n), n += r.length;
  }), t;
}, ch = (e = Tt) => Hd().getRandomValues(ci(e)), Xr = BigInt, Vt = (e, t, n, r = "bad number: out of range") => sh(e) && t <= e && e < n ? e : Ve(r), Y = (e, t = Ae) => {
  const n = e % t;
  return n >= 0n ? n : t + n;
}, Zd = (e) => Y(e, Br), Jd = (e, t) => {
  (e === 0n || t <= 0n) && Ve("no inverse n=" + e + " mod=" + t);
  let n = Y(e, t), r = t, o = 0n, i = 1n;
  for (; n !== 0n; ) {
    const s = r / n, a = r % n, c = o - i * s;
    r = n, n = a, o = i, i = c;
  }
  return r === 1n ? Y(o, t) : Ve("no inverse");
}, vc = (e) => e instanceof wt ? e : Ve("Point expected"), ks = 2n ** 256n, at = class at {
  constructor(t, n, r, o) {
    pt(this, "ex");
    pt(this, "ey");
    pt(this, "ez");
    pt(this, "et");
    const i = ks;
    this.ex = Vt(t, 0n, i), this.ey = Vt(n, 0n, i), this.ez = Vt(r, 1n, i), this.et = Vt(o, 0n, i), Object.freeze(this);
  }
  static fromAffine(t) {
    return new at(t.x, t.y, 1n, Y(t.x * t.y));
  }
  /** RFC8032 5.1.3: Uint8Array to Point. */
  static fromBytes(t, n = !1) {
    const r = Di, o = sa(Ft(t, Tt)), i = t[31];
    o[31] = i & -129;
    const s = ca(o);
    Vt(s, 0n, n ? ks : Ae);
    const c = Y(s * s), u = Y(c - 1n), p = Y(r * c + 1n);
    let { isValid: g, value: f } = lh(u, p);
    g || Ve("bad point: y not sqrt");
    const h = (f & 1n) === 1n, w = (i & 128) !== 0;
    return !n && f === 0n && w && Ve("bad point: x==0, isLastByteOdd"), w !== h && (f = Y(-f)), new at(f, s, 1n, Y(f * s));
  }
  /** Checks if the point is valid and on-curve. */
  assertValidity() {
    const t = Ni, n = Di, r = this;
    if (r.is0())
      throw new Error("bad point: ZERO");
    const { ex: o, ey: i, ez: s, et: a } = r, c = Y(o * o), u = Y(i * i), p = Y(s * s), g = Y(p * p), f = Y(c * t), h = Y(p * Y(f + u)), w = Y(g + Y(n * Y(c * u)));
    if (h !== w)
      throw new Error("bad point: equation left != right (1)");
    const x = Y(o * i), b = Y(s * a);
    if (x !== b)
      throw new Error("bad point: equation left != right (2)");
    return this;
  }
  /** Equality check: compare points P&Q. */
  equals(t) {
    const { ex: n, ey: r, ez: o } = this, { ex: i, ey: s, ez: a } = vc(t), c = Y(n * a), u = Y(i * o), p = Y(r * a), g = Y(s * o);
    return c === u && p === g;
  }
  is0() {
    return this.equals(tn);
  }
  /** Flip point over y coordinate. */
  negate() {
    return new at(Y(-this.ex), this.ey, this.ez, Y(-this.et));
  }
  /** Point doubling. Complete formula. Cost: `4M + 4S + 1*a + 6add + 1*2`. */
  double() {
    const { ex: t, ey: n, ez: r } = this, o = Ni, i = Y(t * t), s = Y(n * n), a = Y(2n * Y(r * r)), c = Y(o * i), u = t + n, p = Y(Y(u * u) - i - s), g = c + s, f = g - a, h = c - s, w = Y(p * f), x = Y(g * h), b = Y(p * h), S = Y(f * g);
    return new at(w, x, S, b);
  }
  /** Point addition. Complete formula. Cost: `8M + 1*k + 8add + 1*2`. */
  add(t) {
    const { ex: n, ey: r, ez: o, et: i } = this, { ex: s, ey: a, ez: c, et: u } = vc(t), p = Ni, g = Di, f = Y(n * s), h = Y(r * a), w = Y(i * g * u), x = Y(o * c), b = Y((n + r) * (s + a) - f - h), S = Y(x - w), v = Y(x + w), y = Y(h - p * f), d = Y(b * S), l = Y(v * y), m = Y(b * y), I = Y(S * v);
    return new at(d, l, I, m);
  }
  /**
   * Point-by-scalar multiplication. Scalar must be in range 1 <= n < CURVE.n.
   * Uses {@link wNAF} for base point.
   * Uses fake point to mitigate side-channel leakage.
   * @param n scalar by which point is multiplied
   * @param safe safe mode guards against timing attacks; unsafe mode is faster
   */
  multiply(t, n = !0) {
    if (!n && (t === 0n || this.is0()))
      return tn;
    if (Vt(t, 1n, Br), t === 1n)
      return this;
    if (this.equals(Ct))
      return wh(t).p;
    let r = tn, o = Ct;
    for (let i = this; t > 0n; i = i.double(), t >>= 1n)
      t & 1n ? r = r.add(i) : n && (o = o.add(i));
    return r;
  }
  /** Convert point to 2d xy affine point. (X, Y, Z) ∋ (x=X/Z, y=Y/Z) */
  toAffine() {
    const { ex: t, ey: n, ez: r } = this;
    if (this.equals(tn))
      return { x: 0n, y: 1n };
    const o = Jd(r, Ae);
    return Y(r * o) !== 1n && Ve("invalid inverse"), { x: Y(t * o), y: Y(n * o) };
  }
  toBytes() {
    const { x: t, y: n } = this.assertValidity().toAffine(), r = Kd(n);
    return r[31] |= t & 1n ? 128 : 0, r;
  }
  toHex() {
    return aa(this.toBytes());
  }
  // encode to hex string
  clearCofactor() {
    return this.multiply(Xr(ih), !1);
  }
  isSmallOrder() {
    return this.clearCofactor().is0();
  }
  isTorsionFree() {
    let t = this.multiply(Br / 2n, !1).double();
    return Br % 2n && (t = t.add(this)), t.is0();
  }
  static fromHex(t, n) {
    return at.fromBytes(nn(t), n);
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
pt(at, "BASE"), pt(at, "ZERO");
let wt = at;
const Ct = new wt(mc, yc, 1n, Y(mc * yc)), tn = new wt(0n, 1n, 1n, 0n);
wt.BASE = Ct;
wt.ZERO = tn;
const Kd = (e) => oa(Bd(Vt(e, 0n, ks), $n)).reverse(), ca = (e) => Xr("0x" + aa(sa(Ft(e)).reverse())), st = (e, t) => {
  let n = e;
  for (; t-- > 0n; )
    n *= n, n %= Ae;
  return n;
}, dh = (e) => {
  const n = e * e % Ae * e % Ae, r = st(n, 2n) * n % Ae, o = st(r, 1n) * e % Ae, i = st(o, 5n) * o % Ae, s = st(i, 10n) * i % Ae, a = st(s, 20n) * s % Ae, c = st(a, 40n) * a % Ae, u = st(c, 80n) * c % Ae, p = st(u, 80n) * c % Ae, g = st(p, 10n) * i % Ae;
  return { pow_p_5_8: st(g, 2n) * e % Ae, b2: n };
}, bc = 0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n, lh = (e, t) => {
  const n = Y(t * t * t), r = Y(n * n * t), o = dh(e * r).pow_p_5_8;
  let i = Y(e * n * o);
  const s = Y(t * i * i), a = i, c = Y(i * bc), u = s === e, p = s === Y(-e), g = s === Y(-e * bc);
  return u && (i = a), (p || g) && (i = c), (Y(i) & 1n) === 1n && (i = Y(-i)), { isValid: u || p, value: i };
}, Yr = (e) => Zd(ca(e)), da = (...e) => gh.sha512Async(...e), uh = (e) => {
  const t = e.slice(0, Tt);
  t[0] &= 248, t[31] &= 127, t[31] |= 64;
  const n = e.slice(Tt, $n), r = Yr(t), o = Ct.multiply(r), i = o.toBytes();
  return { head: t, prefix: n, scalar: r, point: o, pointBytes: i };
}, ph = (e) => da(nn(e, Tt)).then(uh), Qd = (e) => da(e.hashable).then(e.finish), fh = (e, t, n) => {
  const { pointBytes: r, scalar: o } = e, i = Yr(t), s = Ct.multiply(i).toBytes();
  return { hashable: _n(s, r, n), finish: (u) => {
    const p = Zd(i + Yr(u) * o);
    return Ft(_n(s, Kd(p)), $n);
  } };
}, hh = async (e, t) => {
  const n = nn(e), r = await ph(t), o = await da(r.prefix, n);
  return Qd(fh(r, o, n));
}, Wd = { zip215: !0 }, mh = (e, t, n, r = Wd) => {
  e = nn(e, $n), t = nn(t), n = nn(n, Tt);
  const { zip215: o } = r;
  let i, s, a, c, u = Uint8Array.of();
  try {
    i = wt.fromHex(n, o), s = wt.fromHex(e.slice(0, Tt), o), a = ca(e.slice(Tt, $n)), c = Ct.multiply(a, !1), u = _n(s.toBytes(), i.toBytes(), t);
  } catch {
  }
  return { hashable: u, finish: (g) => {
    if (c == null || !o && i.isSmallOrder())
      return !1;
    const f = Yr(g);
    return s.add(i.multiply(f, !1)).add(c.negate()).clearCofactor().is0();
  } };
}, yh = async (e, t, n, r = Wd) => Qd(mh(e, t, n, r)), gh = {
  sha512Async: async (...e) => {
    const t = oh(), n = _n(...e);
    return ci(await t.digest("SHA-512", n.buffer));
  },
  sha512Sync: void 0,
  bytesToHex: aa,
  hexToBytes: oa,
  concatBytes: _n,
  mod: Y,
  invert: Jd,
  randomBytes: ch
}, ei = 8, vh = 256, Xd = Math.ceil(vh / ei) + 1, Ms = 2 ** (ei - 1), bh = () => {
  const e = [];
  let t = Ct, n = t;
  for (let r = 0; r < Xd; r++) {
    n = t, e.push(n);
    for (let o = 1; o < Ms; o++)
      n = n.add(t), e.push(n);
    t = n.double();
  }
  return e;
};
let wc;
const xc = (e, t) => {
  const n = t.negate();
  return e ? n : t;
}, wh = (e) => {
  const t = wc || (wc = bh());
  let n = tn, r = Ct;
  const o = 2 ** ei, i = o, s = Xr(o - 1), a = Xr(ei);
  for (let c = 0; c < Xd; c++) {
    let u = Number(e & s);
    e >>= a, u > Ms && (u -= i, e += 1n);
    const p = c * Ms, g = p, f = p + Math.abs(u) - 1, h = c % 2 !== 0, w = u < 0;
    u === 0 ? r = r.add(xc(h, t[g])) : n = n.add(xc(w, t[f]));
  }
  return { p: n, f: r };
};
var zi = {}, Ui, Sc;
function la() {
  return Sc || (Sc = 1, Ui = class Yd {
    /**
     * Creates a new IdentifierIssuer. A IdentifierIssuer issues unique
     * identifiers, keeping track of any previously issued identifiers.
     *
     * @param prefix the prefix to use ('<prefix><counter>').
     * @param existing an existing Map to use.
     * @param counter the counter to use.
     */
    constructor(t, n = /* @__PURE__ */ new Map(), r = 0) {
      this.prefix = t, this._existing = n, this.counter = r;
    }
    /**
     * Copies this IdentifierIssuer.
     *
     * @return a copy of this IdentifierIssuer.
     */
    clone() {
      const { prefix: t, _existing: n, counter: r } = this;
      return new Yd(t, new Map(n), r);
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
      const n = t && this._existing.get(t);
      if (n)
        return n;
      const r = this.prefix + this.counter;
      return this.counter++, t && this._existing.set(t, r), r;
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
  }), Ui;
}
var Vi = {}, Ic;
function xh() {
  return Ic || (Ic = 1, (function(e, t) {
    if (e.setImmediate)
      return;
    var n = 1, r = {}, o = !1, i = e.document, s;
    function a(v) {
      typeof v != "function" && (v = new Function("" + v));
      for (var y = new Array(arguments.length - 1), d = 0; d < y.length; d++)
        y[d] = arguments[d + 1];
      var l = { callback: v, args: y };
      return r[n] = l, s(n), n++;
    }
    function c(v) {
      delete r[v];
    }
    function u(v) {
      var y = v.callback, d = v.args;
      switch (d.length) {
        case 0:
          y();
          break;
        case 1:
          y(d[0]);
          break;
        case 2:
          y(d[0], d[1]);
          break;
        case 3:
          y(d[0], d[1], d[2]);
          break;
        default:
          y.apply(t, d);
          break;
      }
    }
    function p(v) {
      if (o)
        setTimeout(p, 0, v);
      else {
        var y = r[v];
        if (y) {
          o = !0;
          try {
            u(y);
          } finally {
            c(v), o = !1;
          }
        }
      }
    }
    function g() {
      s = function(v) {
        process.nextTick(function() {
          p(v);
        });
      };
    }
    function f() {
      if (e.postMessage && !e.importScripts) {
        var v = !0, y = e.onmessage;
        return e.onmessage = function() {
          v = !1;
        }, e.postMessage("", "*"), e.onmessage = y, v;
      }
    }
    function h() {
      var v = "setImmediate$" + Math.random() + "$", y = function(d) {
        d.source === e && typeof d.data == "string" && d.data.indexOf(v) === 0 && p(+d.data.slice(v.length));
      };
      e.addEventListener ? e.addEventListener("message", y, !1) : e.attachEvent("onmessage", y), s = function(d) {
        e.postMessage(v + d, "*");
      };
    }
    function w() {
      var v = new MessageChannel();
      v.port1.onmessage = function(y) {
        var d = y.data;
        p(d);
      }, s = function(y) {
        v.port2.postMessage(y);
      };
    }
    function x() {
      var v = i.documentElement;
      s = function(y) {
        var d = i.createElement("script");
        d.onreadystatechange = function() {
          p(y), d.onreadystatechange = null, v.removeChild(d), d = null;
        }, v.appendChild(d);
      };
    }
    function b() {
      s = function(v) {
        setTimeout(p, 0, v);
      };
    }
    var S = Object.getPrototypeOf && Object.getPrototypeOf(e);
    S = S && S.setTimeout ? S : e, {}.toString.call(e.process) === "[object process]" ? g() : f() ? h() : e.MessageChannel ? w() : i && "onreadystatechange" in i.createElement("script") ? x() : b(), S.setImmediate = a, S.clearImmediate = c;
  })(typeof self > "u" ? typeof Oa > "u" ? Vi : Oa : self)), Vi;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Gi, Ac;
function di() {
  if (Ac) return Gi;
  Ac = 1, xh();
  const e = self.crypto || self.msCrypto;
  return Gi = class {
    /**
     * Creates a new MessageDigest.
     *
     * @param algorithm the algorithm to use.
     */
    constructor(n) {
      if (!(e && e.subtle))
        throw new Error("crypto.subtle not found.");
      if (n === "sha256")
        this.algorithm = { name: "SHA-256" };
      else if (n === "sha1")
        this.algorithm = { name: "SHA-1" };
      else
        throw new Error(`Unsupported algorithm "${n}".`);
      this._content = "";
    }
    update(n) {
      this._content += n;
    }
    async digest() {
      const n = new TextEncoder().encode(this._content), r = new Uint8Array(
        await e.subtle.digest(this.algorithm, n)
      );
      let o = "";
      for (let i = 0; i < r.length; ++i)
        o += r[i].toString(16).padStart(2, "0");
      return o;
    }
  }, Gi;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Fi, qc;
function el() {
  return qc || (qc = 1, Fi = class {
    /**
     * A Permuter iterates over all possible permutations of the given array
     * of elements.
     *
     * @param list the array of elements to iterate over.
     */
    constructor(t) {
      this.current = t.sort(), this.done = !1, this.dir = /* @__PURE__ */ new Map();
      for (let n = 0; n < t.length; ++n)
        this.dir.set(t[n], !0);
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
      const { current: t, dir: n } = this, r = t.slice();
      let o = null, i = 0;
      const s = t.length;
      for (let a = 0; a < s; ++a) {
        const c = t[a], u = n.get(c);
        (o === null || c > o) && (u && a > 0 && c > t[a - 1] || !u && a < s - 1 && c > t[a + 1]) && (o = c, i = a);
      }
      if (o === null)
        this.done = !0;
      else {
        const a = n.get(o) ? i - 1 : i + 1;
        t[i] = t[a], t[a] = o;
        for (const c of t)
          c > o && n.set(c, !n.get(c));
      }
      return r;
    }
  }), Fi;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Bi, Rc;
function ua() {
  if (Rc) return Bi;
  Rc = 1;
  const t = "http://www.w3.org/1999/02/22-rdf-syntax-ns#" + "langString", n = "http://www.w3.org/2001/XMLSchema#string", r = "NamedNode", o = "BlankNode", i = "Literal", s = "DefaultGraph", a = {};
  (() => {
    const h = "(?:<([^:]+:[^>]*)>)", x = "A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�" + "_", b = x + "0-9-·̀-ͯ‿-⁀", v = "(_:(?:[" + x + "0-9])(?:(?:[" + b + ".])*(?:[" + b + "]))?)", y = '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"', d = "(?:\\^\\^" + h + ")", m = "(?:" + y + "(?:" + d + "|" + "(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*))" + ")?)", I = "[ \\t]+", A = "[ \\t]*", R = "(?:" + h + "|" + v + ")" + I, j = h + I, E = "(?:" + h + "|" + v + "|" + m + ")" + A, O = "(?:\\.|(?:(?:" + h + "|" + v + ")" + A + "\\.))";
    a.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g, a.empty = new RegExp("^" + A + "$"), a.quad = new RegExp(
      "^" + A + R + j + E + O + A + "$"
    );
  })(), Bi = class Hr {
    /**
     * Parses RDF in the form of N-Quads.
     *
     * @param input the N-Quads input to parse.
     *
     * @return an RDF dataset (an array of quads per http://rdf.js.org/).
     */
    static parse(w) {
      const x = [], b = {}, S = w.split(a.eoln);
      let v = 0;
      for (const y of S) {
        if (v++, a.empty.test(y))
          continue;
        const d = y.match(a.quad);
        if (d === null)
          throw new Error("N-Quads parse error on line " + v + ".");
        const l = { subject: null, predicate: null, object: null, graph: null };
        if (d[1] !== void 0 ? l.subject = { termType: r, value: d[1] } : l.subject = { termType: o, value: d[2] }, l.predicate = { termType: r, value: d[3] }, d[4] !== void 0 ? l.object = { termType: r, value: d[4] } : d[5] !== void 0 ? l.object = { termType: o, value: d[5] } : (l.object = {
          termType: i,
          value: void 0,
          datatype: {
            termType: r
          }
        }, d[7] !== void 0 ? l.object.datatype.value = d[7] : d[8] !== void 0 ? (l.object.datatype.value = t, l.object.language = d[8]) : l.object.datatype.value = n, l.object.value = f(d[6])), d[9] !== void 0 ? l.graph = {
          termType: r,
          value: d[9]
        } : d[10] !== void 0 ? l.graph = {
          termType: o,
          value: d[10]
        } : l.graph = {
          termType: s,
          value: ""
        }, !(l.graph.value in b))
          b[l.graph.value] = [l], x.push(l);
        else {
          let m = !0;
          const I = b[l.graph.value];
          for (const A of I)
            if (c(A, l)) {
              m = !1;
              break;
            }
          m && (I.push(l), x.push(l));
        }
      }
      return x;
    }
    /**
     * Converts an RDF dataset to N-Quads.
     *
     * @param dataset (array of quads) the RDF dataset to convert.
     *
     * @return the N-Quads string.
     */
    static serialize(w) {
      Array.isArray(w) || (w = Hr.legacyDatasetToQuads(w));
      const x = [];
      for (const b of w)
        x.push(Hr.serializeQuad(b));
      return x.sort().join("");
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
    static serializeQuadComponents(w, x, b, S) {
      let v = "";
      return w.termType === r ? v += `<${w.value}>` : v += `${w.value}`, v += ` <${x.value}> `, b.termType === r ? v += `<${b.value}>` : b.termType === o ? v += b.value : (v += `"${p(b.value)}"`, b.datatype.value === t ? b.language && (v += `@${b.language}`) : b.datatype.value !== n && (v += `^^<${b.datatype.value}>`)), S.termType === r ? v += ` <${S.value}>` : S.termType === o && (v += ` ${S.value}`), v += ` .
`, v;
    }
    /**
     * Converts an RDF quad to an N-Quad string (a single quad).
     *
     * @param quad the RDF quad convert.
     *
     * @return the N-Quad string.
     */
    static serializeQuad(w) {
      return Hr.serializeQuadComponents(
        w.subject,
        w.predicate,
        w.object,
        w.graph
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
    static legacyDatasetToQuads(w) {
      const x = [], b = {
        "blank node": o,
        IRI: r,
        literal: i
      };
      for (const S in w)
        w[S].forEach((y) => {
          const d = {};
          for (const l in y) {
            const m = y[l], I = {
              termType: b[m.type],
              value: m.value
            };
            I.termType === i && (I.datatype = {
              termType: r
            }, "datatype" in m && (I.datatype.value = m.datatype), "language" in m ? ("datatype" in m || (I.datatype.value = t), I.language = m.language) : "datatype" in m || (I.datatype.value = n)), d[l] = I;
          }
          S === "@default" ? d.graph = {
            termType: s,
            value: ""
          } : d.graph = {
            termType: S.startsWith("_:") ? o : r,
            value: S
          }, x.push(d);
        });
      return x;
    }
  };
  function c(h, w) {
    return !(h.subject.termType === w.subject.termType && h.object.termType === w.object.termType) || !(h.subject.value === w.subject.value && h.predicate.value === w.predicate.value && h.object.value === w.object.value) ? !1 : h.object.termType !== i ? !0 : h.object.datatype.termType === w.object.datatype.termType && h.object.language === w.object.language && h.object.datatype.value === w.object.datatype.value;
  }
  const u = /["\\\n\r]/g;
  function p(h) {
    return h.replace(u, function(w) {
      switch (w) {
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
  const g = /(?:\\([tbnrf"'\\]))|(?:\\u([0-9A-Fa-f]{4}))|(?:\\U([0-9A-Fa-f]{8}))/g;
  function f(h) {
    return h.replace(g, function(w, x, b, S) {
      if (x)
        switch (x) {
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
      if (b)
        return String.fromCharCode(parseInt(b, 16));
      if (S)
        throw new Error("Unsupported U escape");
    });
  }
  return Bi;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Hi, jc;
function tl() {
  if (jc) return Hi;
  jc = 1;
  const e = la(), t = di(), n = el(), r = ua();
  Hi = class {
    constructor({
      createMessageDigest: s = () => new t("sha256"),
      canonicalIdMap: a = /* @__PURE__ */ new Map(),
      maxDeepIterations: c = 1 / 0
    } = {}) {
      this.name = "URDNA2015", this.blankNodeInfo = /* @__PURE__ */ new Map(), this.canonicalIssuer = new e("_:c14n", a), this.createMessageDigest = s, this.maxDeepIterations = c, this.quads = null, this.deepIterations = null;
    }
    // 4.4) Normalization Algorithm
    async main(s) {
      this.deepIterations = /* @__PURE__ */ new Map(), this.quads = s;
      for (const h of s)
        this._addBlankNodeQuadInfo({ quad: h, component: h.subject }), this._addBlankNodeQuadInfo({ quad: h, component: h.object }), this._addBlankNodeQuadInfo({ quad: h, component: h.graph });
      const a = /* @__PURE__ */ new Map(), c = [...this.blankNodeInfo.keys()];
      let u = 0;
      for (const h of c)
        ++u % 100 === 0 && await this._yield(), await this._hashAndTrackBlankNode({ id: h, hashToBlankNodes: a });
      const p = [...a.keys()].sort(), g = [];
      for (const h of p) {
        const w = a.get(h);
        if (w.length > 1) {
          g.push(w);
          continue;
        }
        const x = w[0];
        this.canonicalIssuer.getId(x);
      }
      for (const h of g) {
        const w = [];
        for (const x of h) {
          if (this.canonicalIssuer.hasId(x))
            continue;
          const b = new e("_:b");
          b.getId(x);
          const S = await this.hashNDegreeQuads(x, b);
          w.push(S);
        }
        w.sort(o);
        for (const x of w) {
          const b = x.issuer.getOldIds();
          for (const S of b)
            this.canonicalIssuer.getId(S);
        }
      }
      const f = [];
      for (const h of this.quads) {
        const w = r.serializeQuadComponents(
          this._componentWithCanonicalId(h.subject),
          h.predicate,
          this._componentWithCanonicalId(h.object),
          this._componentWithCanonicalId(h.graph)
        );
        f.push(w);
      }
      return f.sort(), f.join("");
    }
    // 4.6) Hash First Degree Quads
    async hashFirstDegreeQuads(s) {
      const a = [], c = this.blankNodeInfo.get(s), u = c.quads;
      for (const g of u) {
        const f = {
          subject: null,
          predicate: g.predicate,
          object: null,
          graph: null
        };
        f.subject = this.modifyFirstDegreeComponent(
          s,
          g.subject,
          "subject"
        ), f.object = this.modifyFirstDegreeComponent(
          s,
          g.object,
          "object"
        ), f.graph = this.modifyFirstDegreeComponent(
          s,
          g.graph,
          "graph"
        ), a.push(r.serializeQuad(f));
      }
      a.sort();
      const p = this.createMessageDigest();
      for (const g of a)
        p.update(g);
      return c.hash = await p.digest(), c.hash;
    }
    // 4.7) Hash Related Blank Node
    async hashRelatedBlankNode(s, a, c, u) {
      let p;
      this.canonicalIssuer.hasId(s) ? p = this.canonicalIssuer.getId(s) : c.hasId(s) ? p = c.getId(s) : p = this.blankNodeInfo.get(s).hash;
      const g = this.createMessageDigest();
      return g.update(u), u !== "g" && g.update(this.getRelatedPredicate(a)), g.update(p), g.digest();
    }
    // 4.8) Hash N-Degree Quads
    async hashNDegreeQuads(s, a) {
      const c = this.deepIterations.get(s) || 0;
      if (c > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(s, c + 1);
      const u = this.createMessageDigest(), p = await this.createHashToRelated(s, a), g = [...p.keys()].sort();
      for (const f of g) {
        u.update(f);
        let h = "", w;
        const x = new n(p.get(f));
        let b = 0;
        for (; x.hasNext(); ) {
          const S = x.next();
          ++b % 3 === 0 && await this._yield();
          let v = a.clone(), y = "";
          const d = [];
          let l = !1;
          for (const m of S)
            if (this.canonicalIssuer.hasId(m) ? y += this.canonicalIssuer.getId(m) : (v.hasId(m) || d.push(m), y += v.getId(m)), h.length !== 0 && y > h) {
              l = !0;
              break;
            }
          if (!l) {
            for (const m of d) {
              const I = await this.hashNDegreeQuads(m, v);
              if (y += v.getId(m), y += `<${I.hash}>`, v = I.issuer, h.length !== 0 && y > h) {
                l = !0;
                break;
              }
            }
            l || (h.length === 0 || y < h) && (h = y, w = v);
          }
        }
        u.update(h), a = w;
      }
      return { hash: await u.digest(), issuer: a };
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(s, a) {
      return a.termType !== "BlankNode" ? a : {
        termType: "BlankNode",
        value: a.value === s ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(s) {
      return `<${s.predicate.value}>`;
    }
    // helper for creating hash to related blank nodes map
    async createHashToRelated(s, a) {
      const c = /* @__PURE__ */ new Map(), u = this.blankNodeInfo.get(s).quads;
      let p = 0;
      for (const g of u)
        ++p % 100 === 0 && await this._yield(), await Promise.all([
          this._addRelatedBlankNodeHash({
            quad: g,
            component: g.subject,
            position: "s",
            id: s,
            issuer: a,
            hashToRelated: c
          }),
          this._addRelatedBlankNodeHash({
            quad: g,
            component: g.object,
            position: "o",
            id: s,
            issuer: a,
            hashToRelated: c
          }),
          this._addRelatedBlankNodeHash({
            quad: g,
            component: g.graph,
            position: "g",
            id: s,
            issuer: a,
            hashToRelated: c
          })
        ]);
      return c;
    }
    async _hashAndTrackBlankNode({ id: s, hashToBlankNodes: a }) {
      const c = await this.hashFirstDegreeQuads(s), u = a.get(c);
      u ? u.push(s) : a.set(c, [s]);
    }
    _addBlankNodeQuadInfo({ quad: s, component: a }) {
      if (a.termType !== "BlankNode")
        return;
      const c = a.value, u = this.blankNodeInfo.get(c);
      u ? u.quads.add(s) : this.blankNodeInfo.set(c, { quads: /* @__PURE__ */ new Set([s]), hash: null });
    }
    async _addRelatedBlankNodeHash({ quad: s, component: a, position: c, id: u, issuer: p, hashToRelated: g }) {
      if (!(a.termType === "BlankNode" && a.value !== u))
        return;
      const f = a.value, h = await this.hashRelatedBlankNode(
        f,
        s,
        p,
        c
      ), w = g.get(h);
      w ? w.push(f) : g.set(h, [f]);
    }
    // canonical ids for 7.1
    _componentWithCanonicalId(s) {
      return s.termType === "BlankNode" && !s.value.startsWith(this.canonicalIssuer.prefix) ? {
        termType: "BlankNode",
        value: this.canonicalIssuer.getId(s.value)
      } : s;
    }
    async _yield() {
      return new Promise((s) => setImmediate(s));
    }
  };
  function o(i, s) {
    return i.hash < s.hash ? -1 : i.hash > s.hash ? 1 : 0;
  }
  return Hi;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Zi, $c;
function Sh() {
  if ($c) return Zi;
  $c = 1;
  const e = di(), t = tl();
  return Zi = class extends t {
    constructor() {
      super(), this.name = "URGNA2012", this.createMessageDigest = () => new e("sha1");
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(r, o, i) {
      return o.termType !== "BlankNode" ? o : i === "graph" ? {
        termType: "BlankNode",
        value: "_:g"
      } : {
        termType: "BlankNode",
        value: o.value === r ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(r) {
      return r.predicate.value;
    }
    // helper for creating hash to related blank nodes map
    async createHashToRelated(r, o) {
      const i = /* @__PURE__ */ new Map(), s = this.blankNodeInfo.get(r).quads;
      let a = 0;
      for (const c of s) {
        let u, p;
        if (c.subject.termType === "BlankNode" && c.subject.value !== r)
          p = c.subject.value, u = "p";
        else if (c.object.termType === "BlankNode" && c.object.value !== r)
          p = c.object.value, u = "r";
        else
          continue;
        ++a % 100 === 0 && await this._yield();
        const g = await this.hashRelatedBlankNode(
          p,
          c,
          o,
          u
        ), f = i.get(g);
        f ? f.push(p) : i.set(g, [p]);
      }
      return i;
    }
  }, Zi;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Ji, _c;
function nl() {
  if (_c) return Ji;
  _c = 1;
  const e = la(), t = di(), n = el(), r = ua();
  Ji = class {
    constructor({
      createMessageDigest: s = () => new t("sha256"),
      canonicalIdMap: a = /* @__PURE__ */ new Map(),
      maxDeepIterations: c = 1 / 0
    } = {}) {
      this.name = "URDNA2015", this.blankNodeInfo = /* @__PURE__ */ new Map(), this.canonicalIssuer = new e("_:c14n", a), this.createMessageDigest = s, this.maxDeepIterations = c, this.quads = null, this.deepIterations = null;
    }
    // 4.4) Normalization Algorithm
    main(s) {
      this.deepIterations = /* @__PURE__ */ new Map(), this.quads = s;
      for (const f of s)
        this._addBlankNodeQuadInfo({ quad: f, component: f.subject }), this._addBlankNodeQuadInfo({ quad: f, component: f.object }), this._addBlankNodeQuadInfo({ quad: f, component: f.graph });
      const a = /* @__PURE__ */ new Map(), c = [...this.blankNodeInfo.keys()];
      for (const f of c)
        this._hashAndTrackBlankNode({ id: f, hashToBlankNodes: a });
      const u = [...a.keys()].sort(), p = [];
      for (const f of u) {
        const h = a.get(f);
        if (h.length > 1) {
          p.push(h);
          continue;
        }
        const w = h[0];
        this.canonicalIssuer.getId(w);
      }
      for (const f of p) {
        const h = [];
        for (const w of f) {
          if (this.canonicalIssuer.hasId(w))
            continue;
          const x = new e("_:b");
          x.getId(w);
          const b = this.hashNDegreeQuads(w, x);
          h.push(b);
        }
        h.sort(o);
        for (const w of h) {
          const x = w.issuer.getOldIds();
          for (const b of x)
            this.canonicalIssuer.getId(b);
        }
      }
      const g = [];
      for (const f of this.quads) {
        const h = r.serializeQuadComponents(
          this._componentWithCanonicalId({ component: f.subject }),
          f.predicate,
          this._componentWithCanonicalId({ component: f.object }),
          this._componentWithCanonicalId({ component: f.graph })
        );
        g.push(h);
      }
      return g.sort(), g.join("");
    }
    // 4.6) Hash First Degree Quads
    hashFirstDegreeQuads(s) {
      const a = [], c = this.blankNodeInfo.get(s), u = c.quads;
      for (const g of u) {
        const f = {
          subject: null,
          predicate: g.predicate,
          object: null,
          graph: null
        };
        f.subject = this.modifyFirstDegreeComponent(
          s,
          g.subject,
          "subject"
        ), f.object = this.modifyFirstDegreeComponent(
          s,
          g.object,
          "object"
        ), f.graph = this.modifyFirstDegreeComponent(
          s,
          g.graph,
          "graph"
        ), a.push(r.serializeQuad(f));
      }
      a.sort();
      const p = this.createMessageDigest();
      for (const g of a)
        p.update(g);
      return c.hash = p.digest(), c.hash;
    }
    // 4.7) Hash Related Blank Node
    hashRelatedBlankNode(s, a, c, u) {
      let p;
      this.canonicalIssuer.hasId(s) ? p = this.canonicalIssuer.getId(s) : c.hasId(s) ? p = c.getId(s) : p = this.blankNodeInfo.get(s).hash;
      const g = this.createMessageDigest();
      return g.update(u), u !== "g" && g.update(this.getRelatedPredicate(a)), g.update(p), g.digest();
    }
    // 4.8) Hash N-Degree Quads
    hashNDegreeQuads(s, a) {
      const c = this.deepIterations.get(s) || 0;
      if (c > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(s, c + 1);
      const u = this.createMessageDigest(), p = this.createHashToRelated(s, a), g = [...p.keys()].sort();
      for (const f of g) {
        u.update(f);
        let h = "", w;
        const x = new n(p.get(f));
        for (; x.hasNext(); ) {
          const b = x.next();
          let S = a.clone(), v = "";
          const y = [];
          let d = !1;
          for (const l of b)
            if (this.canonicalIssuer.hasId(l) ? v += this.canonicalIssuer.getId(l) : (S.hasId(l) || y.push(l), v += S.getId(l)), h.length !== 0 && v > h) {
              d = !0;
              break;
            }
          if (!d) {
            for (const l of y) {
              const m = this.hashNDegreeQuads(l, S);
              if (v += S.getId(l), v += `<${m.hash}>`, S = m.issuer, h.length !== 0 && v > h) {
                d = !0;
                break;
              }
            }
            d || (h.length === 0 || v < h) && (h = v, w = S);
          }
        }
        u.update(h), a = w;
      }
      return { hash: u.digest(), issuer: a };
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(s, a) {
      return a.termType !== "BlankNode" ? a : {
        termType: "BlankNode",
        value: a.value === s ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(s) {
      return `<${s.predicate.value}>`;
    }
    // helper for creating hash to related blank nodes map
    createHashToRelated(s, a) {
      const c = /* @__PURE__ */ new Map(), u = this.blankNodeInfo.get(s).quads;
      for (const p of u)
        this._addRelatedBlankNodeHash({
          quad: p,
          component: p.subject,
          position: "s",
          id: s,
          issuer: a,
          hashToRelated: c
        }), this._addRelatedBlankNodeHash({
          quad: p,
          component: p.object,
          position: "o",
          id: s,
          issuer: a,
          hashToRelated: c
        }), this._addRelatedBlankNodeHash({
          quad: p,
          component: p.graph,
          position: "g",
          id: s,
          issuer: a,
          hashToRelated: c
        });
      return c;
    }
    _hashAndTrackBlankNode({ id: s, hashToBlankNodes: a }) {
      const c = this.hashFirstDegreeQuads(s), u = a.get(c);
      u ? u.push(s) : a.set(c, [s]);
    }
    _addBlankNodeQuadInfo({ quad: s, component: a }) {
      if (a.termType !== "BlankNode")
        return;
      const c = a.value, u = this.blankNodeInfo.get(c);
      u ? u.quads.add(s) : this.blankNodeInfo.set(c, { quads: /* @__PURE__ */ new Set([s]), hash: null });
    }
    _addRelatedBlankNodeHash({ quad: s, component: a, position: c, id: u, issuer: p, hashToRelated: g }) {
      if (!(a.termType === "BlankNode" && a.value !== u))
        return;
      const f = a.value, h = this.hashRelatedBlankNode(f, s, p, c), w = g.get(h);
      w ? w.push(f) : g.set(h, [f]);
    }
    // canonical ids for 7.1
    _componentWithCanonicalId({ component: s }) {
      return s.termType === "BlankNode" && !s.value.startsWith(this.canonicalIssuer.prefix) ? {
        termType: "BlankNode",
        value: this.canonicalIssuer.getId(s.value)
      } : s;
    }
  };
  function o(i, s) {
    return i.hash < s.hash ? -1 : i.hash > s.hash ? 1 : 0;
  }
  return Ji;
}
/*!
 * Copyright (c) 2016-2021 Digital Bazaar, Inc. All rights reserved.
 */
var Ki, Pc;
function Ih() {
  if (Pc) return Ki;
  Pc = 1;
  const e = di(), t = nl();
  return Ki = class extends t {
    constructor() {
      super(), this.name = "URGNA2012", this.createMessageDigest = () => new e("sha1");
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(r, o, i) {
      return o.termType !== "BlankNode" ? o : i === "graph" ? {
        termType: "BlankNode",
        value: "_:g"
      } : {
        termType: "BlankNode",
        value: o.value === r ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(r) {
      return r.predicate.value;
    }
    // helper for creating hash to related blank nodes map
    createHashToRelated(r, o) {
      const i = /* @__PURE__ */ new Map(), s = this.blankNodeInfo.get(r).quads;
      for (const a of s) {
        let c, u;
        if (a.subject.termType === "BlankNode" && a.subject.value !== r)
          u = a.subject.value, c = "p";
        else if (a.object.termType === "BlankNode" && a.object.value !== r)
          u = a.object.value, c = "r";
        else
          continue;
        const p = this.hashRelatedBlankNode(u, a, o, c), g = i.get(p);
        g ? g.push(u) : i.set(p, [u]);
      }
      return i;
    }
  }, Ki;
}
const Ah = {}, qh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ah
}, Symbol.toStringTag, { value: "Module" })), Rh = /* @__PURE__ */ Au(qh);
var Tc;
function jh() {
  return Tc || (Tc = 1, (function(e) {
    const t = tl(), n = Sh(), r = nl(), o = Ih();
    let i;
    try {
      i = Rh;
    } catch {
    }
    function s(a) {
      return Array.isArray(a) ? a : e.NQuads.legacyDatasetToQuads(a);
    }
    e.NQuads = ua(), e.IdentifierIssuer = la(), e._rdfCanonizeNative = function(a) {
      return a && (i = a), i;
    }, e.canonize = async function(a, c) {
      const u = s(a);
      if (c.useNative) {
        if (!i)
          throw new Error("rdf-canonize-native not available");
        if (c.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return new Promise((p, g) => i.canonize(u, c, (f, h) => f ? g(f) : p(h)));
      }
      if (c.algorithm === "URDNA2015")
        return new t(c).main(u);
      if (c.algorithm === "URGNA2012") {
        if (c.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "URGNA2012".'
          );
        return new n(c).main(u);
      }
      throw "algorithm" in c ? new Error(
        "Invalid RDF Dataset Canonicalization algorithm: " + c.algorithm
      ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
    }, e._canonizeSync = function(a, c) {
      const u = s(a);
      if (c.useNative) {
        if (!i)
          throw new Error("rdf-canonize-native not available");
        if (c.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return i.canonizeSync(u, c);
      }
      if (c.algorithm === "URDNA2015")
        return new r(c).main(u);
      if (c.algorithm === "URGNA2012") {
        if (c.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "URGNA2012".'
          );
        return new o(c).main(u);
      }
      throw "algorithm" in c ? new Error(
        "Invalid RDF Dataset Canonicalization algorithm: " + c.algorithm
      ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
    };
  })(zi)), zi;
}
var Qi, Cc;
function pa() {
  return Cc || (Cc = 1, Qi = jh()), Qi;
}
var Wi, Ec;
function Oe() {
  if (Ec) return Wi;
  Ec = 1;
  const e = {};
  return Wi = e, e.isArray = Array.isArray, e.isBoolean = (t) => typeof t == "boolean" || Object.prototype.toString.call(t) === "[object Boolean]", e.isDouble = (t) => e.isNumber(t) && (String(t).indexOf(".") !== -1 || Math.abs(t) >= 1e21), e.isEmptyObject = (t) => e.isObject(t) && Object.keys(t).length === 0, e.isNumber = (t) => typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]", e.isNumeric = (t) => !isNaN(parseFloat(t)) && isFinite(t), e.isObject = (t) => Object.prototype.toString.call(t) === "[object Object]", e.isString = (t) => typeof t == "string" || Object.prototype.toString.call(t) === "[object String]", e.isUndefined = (t) => typeof t > "u", Wi;
}
var Xi, kc;
function xt() {
  if (kc) return Xi;
  kc = 1;
  const e = Oe(), t = {};
  return Xi = t, t.isSubject = (n) => e.isObject(n) && !("@value" in n || "@set" in n || "@list" in n) ? Object.keys(n).length > 1 || !("@id" in n) : !1, t.isSubjectReference = (n) => (
    // Note: A value is a subject reference if all of these hold true:
    // 1. It is an Object.
    // 2. It has a single key: @id.
    e.isObject(n) && Object.keys(n).length === 1 && "@id" in n
  ), t.isValue = (n) => (
    // Note: A value is a @value if all of these hold true:
    // 1. It is an Object.
    // 2. It has the @value property.
    e.isObject(n) && "@value" in n
  ), t.isList = (n) => (
    // Note: A value is a @list if all of these hold true:
    // 1. It is an Object.
    // 2. It has the @list property.
    e.isObject(n) && "@list" in n
  ), t.isGraph = (n) => e.isObject(n) && "@graph" in n && Object.keys(n).filter((r) => r !== "@id" && r !== "@index").length === 1, t.isSimpleGraph = (n) => t.isGraph(n) && !("@id" in n), t.isBlankNode = (n) => {
    if (e.isObject(n)) {
      if ("@id" in n) {
        const r = n["@id"];
        return !e.isString(r) || r.indexOf("_:") === 0;
      }
      return Object.keys(n).length === 0 || !("@value" in n || "@set" in n || "@list" in n);
    }
    return !1;
  }, Xi;
}
var Yi, Mc;
function Be() {
  return Mc || (Mc = 1, Yi = class extends Error {
    /**
     * Creates a JSON-LD Error.
     *
     * @param msg the error message.
     * @param type the error type.
     * @param details the error details.
     */
    constructor(t = "An unspecified JSON-LD error occurred.", n = "jsonld.Error", r = {}) {
      super(t), this.name = n, this.message = t, this.details = r;
    }
  }), Yi;
}
var es, Oc;
function Fe() {
  if (Oc) return es;
  Oc = 1;
  const e = xt(), t = Oe(), n = pa().IdentifierIssuer, r = Be(), o = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/, i = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g, s = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/, a = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g, c = /^@[a-zA-Z]+$/, u = {
    headers: {
      accept: "application/ld+json, application/json"
    }
  }, p = {};
  es = p, p.IdentifierIssuer = n, p.REGEX_BCP47 = o, p.REGEX_KEYWORD = c, p.clone = function(f) {
    if (f && typeof f == "object") {
      let h;
      if (t.isArray(f)) {
        h = [];
        for (let w = 0; w < f.length; ++w)
          h[w] = p.clone(f[w]);
      } else if (f instanceof Map) {
        h = /* @__PURE__ */ new Map();
        for (const [w, x] of f)
          h.set(w, p.clone(x));
      } else if (f instanceof Set) {
        h = /* @__PURE__ */ new Set();
        for (const w of f)
          h.add(p.clone(w));
      } else if (t.isObject(f)) {
        h = {};
        for (const w in f)
          h[w] = p.clone(f[w]);
      } else
        h = f.toString();
      return h;
    }
    return f;
  }, p.asArray = function(f) {
    return Array.isArray(f) ? f : [f];
  }, p.buildHeaders = (f = {}) => {
    if (Object.keys(f).some(
      (w) => w.toLowerCase() === "accept"
    ))
      throw new RangeError(
        'Accept header may not be specified; only "' + u.headers.accept + '" is supported.'
      );
    return Object.assign({ Accept: u.headers.accept }, f);
  }, p.parseLinkHeader = (f) => {
    const h = {}, w = f.match(i);
    for (let x = 0; x < w.length; ++x) {
      let b = w[x].match(s);
      if (!b)
        continue;
      const S = { target: b[1] }, v = b[2];
      for (; b = a.exec(v); )
        S[b[1]] = b[2] === void 0 ? b[3] : b[2];
      const y = S.rel || "";
      Array.isArray(h[y]) ? h[y].push(S) : h.hasOwnProperty(y) ? h[y] = [h[y], S] : h[y] = S;
    }
    return h;
  }, p.validateTypeValue = (f, h) => {
    if (!t.isString(f) && !(t.isArray(f) && f.every((w) => t.isString(w)))) {
      if (h && t.isObject(f))
        switch (Object.keys(f).length) {
          case 0:
            return;
          case 1:
            if ("@default" in f && p.asArray(f["@default"]).every((w) => t.isString(w)))
              return;
        }
      throw new r(
        'Invalid JSON-LD syntax; "@type" value must a string, an array of strings, an empty object, or a default object.',
        "jsonld.SyntaxError",
        { code: "invalid type value", value: f }
      );
    }
  }, p.hasProperty = (f, h) => {
    if (f.hasOwnProperty(h)) {
      const w = f[h];
      return !t.isArray(w) || w.length > 0;
    }
    return !1;
  }, p.hasValue = (f, h, w) => {
    if (p.hasProperty(f, h)) {
      let x = f[h];
      const b = e.isList(x);
      if (t.isArray(x) || b) {
        b && (x = x["@list"]);
        for (let S = 0; S < x.length; ++S)
          if (p.compareValues(w, x[S]))
            return !0;
      } else if (!t.isArray(w))
        return p.compareValues(w, x);
    }
    return !1;
  }, p.addValue = (f, h, w, x) => {
    if (x = x || {}, "propertyIsArray" in x || (x.propertyIsArray = !1), "valueIsArray" in x || (x.valueIsArray = !1), "allowDuplicate" in x || (x.allowDuplicate = !0), "prependValue" in x || (x.prependValue = !1), x.valueIsArray)
      f[h] = w;
    else if (t.isArray(w)) {
      w.length === 0 && x.propertyIsArray && !f.hasOwnProperty(h) && (f[h] = []), x.prependValue && (w = w.concat(f[h]), f[h] = []);
      for (let b = 0; b < w.length; ++b)
        p.addValue(f, h, w[b], x);
    } else if (f.hasOwnProperty(h)) {
      const b = !x.allowDuplicate && p.hasValue(f, h, w);
      !t.isArray(f[h]) && (!b || x.propertyIsArray) && (f[h] = [f[h]]), b || (x.prependValue ? f[h].unshift(w) : f[h].push(w));
    } else
      f[h] = x.propertyIsArray ? [w] : w;
  }, p.getValues = (f, h) => [].concat(f[h] || []), p.removeProperty = (f, h) => {
    delete f[h];
  }, p.removeValue = (f, h, w, x) => {
    x = x || {}, "propertyIsArray" in x || (x.propertyIsArray = !1);
    const b = p.getValues(f, h).filter(
      (S) => !p.compareValues(S, w)
    );
    b.length === 0 ? p.removeProperty(f, h) : b.length === 1 && !x.propertyIsArray ? f[h] = b[0] : f[h] = b;
  }, p.relabelBlankNodes = (f, h) => {
    h = h || {};
    const w = h.issuer || new n("_:b");
    return g(w, f);
  }, p.compareValues = (f, h) => f === h || e.isValue(f) && e.isValue(h) && f["@value"] === h["@value"] && f["@type"] === h["@type"] && f["@language"] === h["@language"] && f["@index"] === h["@index"] ? !0 : t.isObject(f) && "@id" in f && t.isObject(h) && "@id" in h ? f["@id"] === h["@id"] : !1, p.compareShortestLeast = (f, h) => f.length < h.length ? -1 : h.length < f.length ? 1 : f === h ? 0 : f < h ? -1 : 1;
  function g(f, h) {
    if (t.isArray(h))
      for (let w = 0; w < h.length; ++w)
        h[w] = g(f, h[w]);
    else if (e.isList(h))
      h["@list"] = g(f, h["@list"]);
    else if (t.isObject(h)) {
      e.isBlankNode(h) && (h["@id"] = f.getId(h["@id"]));
      const w = Object.keys(h).sort();
      for (let x = 0; x < w.length; ++x) {
        const b = w[x];
        b !== "@id" && (h[b] = g(f, h[b]));
      }
    }
    return h;
  }
  return es;
}
var ts, Lc;
function fa() {
  if (Lc) return ts;
  Lc = 1;
  const e = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", t = "http://www.w3.org/2001/XMLSchema#";
  return ts = {
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
  }, ts;
}
var ns, Nc;
function rl() {
  return Nc || (Nc = 1, ns = class {
    /**
     * Creates a simple queue for requesting documents.
     */
    constructor() {
      this._requests = {};
    }
    wrapLoader(t) {
      const n = this;
      return n._loader = t, function() {
        return n.add.apply(n, arguments);
      };
    }
    async add(t) {
      let n = this._requests[t];
      if (n)
        return Promise.resolve(n);
      n = this._requests[t] = this._loader(t);
      try {
        return await n;
      } finally {
        delete this._requests[t];
      }
    }
  }), ns;
}
var rs, Dc;
function Mt() {
  if (Dc) return rs;
  Dc = 1;
  const e = Oe(), t = {};
  rs = t, t.parsers = {
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
  }, t.parse = (r, o) => {
    const i = {}, s = t.parsers[o || "full"], a = s.regex.exec(r);
    let c = s.keys.length;
    for (; c--; )
      i[s.keys[c]] = a[c] === void 0 ? null : a[c];
    return (i.scheme === "https" && i.port === "443" || i.scheme === "http" && i.port === "80") && (i.href = i.href.replace(":" + i.port, ""), i.authority = i.authority.replace(":" + i.port, ""), i.port = null), i.normalizedPath = t.removeDotSegments(i.path), i;
  }, t.prependBase = (r, o) => {
    if (r === null || t.isAbsolute(o))
      return o;
    (!r || e.isString(r)) && (r = t.parse(r || ""));
    const i = t.parse(o), s = {
      protocol: r.protocol || ""
    };
    if (i.authority !== null)
      s.authority = i.authority, s.path = i.path, s.query = i.query;
    else if (s.authority = r.authority, i.path === "")
      s.path = r.path, i.query !== null ? s.query = i.query : s.query = r.query;
    else {
      if (i.path.indexOf("/") === 0)
        s.path = i.path;
      else {
        let c = r.path;
        c = c.substr(0, c.lastIndexOf("/") + 1), (c.length > 0 || r.authority) && c.substr(-1) !== "/" && (c += "/"), c += i.path, s.path = c;
      }
      s.query = i.query;
    }
    i.path !== "" && (s.path = t.removeDotSegments(s.path));
    let a = s.protocol;
    return s.authority !== null && (a += "//" + s.authority), a += s.path, s.query !== null && (a += "?" + s.query), i.fragment !== null && (a += "#" + i.fragment), a === "" && (a = "./"), a;
  }, t.removeBase = (r, o) => {
    if (r === null)
      return o;
    (!r || e.isString(r)) && (r = t.parse(r || ""));
    let i = "";
    if (r.href !== "" ? i += (r.protocol || "") + "//" + (r.authority || "") : o.indexOf("//") && (i += "//"), o.indexOf(i) !== 0)
      return o;
    const s = t.parse(o.substr(i.length)), a = r.normalizedPath.split("/"), c = s.normalizedPath.split("/"), u = s.fragment || s.query ? 0 : 1;
    for (; a.length > 0 && c.length > u && a[0] === c[0]; )
      a.shift(), c.shift();
    let p = "";
    if (a.length > 0) {
      a.pop();
      for (let g = 0; g < a.length; ++g)
        p += "../";
    }
    return p += c.join("/"), s.query !== null && (p += "?" + s.query), s.fragment !== null && (p += "#" + s.fragment), p === "" && (p = "./"), p;
  }, t.removeDotSegments = (r) => {
    if (r.length === 0)
      return "";
    const o = r.split("/"), i = [];
    for (; o.length > 0; ) {
      const s = o.shift(), a = o.length === 0;
      if (s === ".") {
        a && i.push("");
        continue;
      }
      if (s === "..") {
        i.pop(), a && i.push("");
        continue;
      }
      i.push(s);
    }
    return r[0] === "/" && i.length > 0 && i[0] !== "" && i.unshift(""), i.length === 1 && i[0] === "" ? "/" : i.join("/");
  };
  const n = /^([A-Za-z][A-Za-z0-9+-.]*|_):[^\s]*$/;
  return t.isAbsolute = (r) => e.isString(r) && n.test(r), t.isRelative = (r) => e.isString(r), rs;
}
var is, zc;
function $h() {
  if (zc) return is;
  zc = 1;
  const { parseLinkHeader: e, buildHeaders: t } = Fe(), { LINK_HEADER_CONTEXT: n } = fa(), r = Be(), o = rl(), { prependBase: i } = Mt(), s = /(^|(\r\n))link:/i;
  is = ({
    secure: c,
    headers: u = {},
    xhr: p
  } = { headers: {} }) => {
    return u = t(u), new o().wrapLoader(f);
    async function f(h) {
      if (h.indexOf("http:") !== 0 && h.indexOf("https:") !== 0)
        throw new r(
          'URL could not be dereferenced; only "http" and "https" URLs are supported.',
          "jsonld.InvalidUrl",
          { code: "loading document failed", url: h }
        );
      if (c && h.indexOf("https") !== 0)
        throw new r(
          `URL could not be dereferenced; secure mode is enabled and the URL's scheme is not "https".`,
          "jsonld.InvalidUrl",
          { code: "loading document failed", url: h }
        );
      let w;
      try {
        w = await a(p, h, u);
      } catch (y) {
        throw new r(
          "URL could not be dereferenced, an error occurred.",
          "jsonld.LoadDocumentError",
          { code: "loading document failed", url: h, cause: y }
        );
      }
      if (w.status >= 400)
        throw new r(
          "URL could not be dereferenced: " + w.statusText,
          "jsonld.LoadDocumentError",
          {
            code: "loading document failed",
            url: h,
            httpStatusCode: w.status
          }
        );
      let x = { contextUrl: null, documentUrl: h, document: w.response }, b = null;
      const S = w.getResponseHeader("Content-Type");
      let v;
      if (s.test(w.getAllResponseHeaders()) && (v = w.getResponseHeader("Link")), v && S !== "application/ld+json") {
        const y = e(v), d = y[n];
        if (Array.isArray(d))
          throw new r(
            "URL could not be dereferenced, it has more than one associated HTTP Link Header.",
            "jsonld.InvalidUrl",
            { code: "multiple context link headers", url: h }
          );
        d && (x.contextUrl = d.target), b = y.alternate, b && b.type == "application/ld+json" && !(S || "").match(/^application\/(\w*\+)?json$/) && (x = await f(i(h, b.target)));
      }
      return x;
    }
  };
  function a(c, u, p) {
    c = c || XMLHttpRequest;
    const g = new c();
    return new Promise((f, h) => {
      g.onload = () => f(g), g.onerror = (w) => h(w), g.open("GET", u, !0);
      for (const w in p)
        g.setRequestHeader(w, p[w]);
      g.send();
    });
  }
  return is;
}
var ss, Uc;
function _h() {
  if (Uc) return ss;
  Uc = 1;
  const e = $h(), t = {};
  return ss = t, t.setupDocumentLoaders = function(n) {
    typeof XMLHttpRequest < "u" && (n.documentLoaders.xhr = e, n.useDocumentLoader("xhr"));
  }, t.setupGlobals = function(n) {
    typeof globalThis.JsonLdProcessor > "u" && Object.defineProperty(globalThis, "JsonLdProcessor", {
      writable: !0,
      enumerable: !1,
      configurable: !0,
      value: n.JsonLdProcessor
    });
  }, ss;
}
var as, Vc;
function Ph() {
  return Vc || (Vc = 1, as = function(e) {
    e.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next)
        yield t.value;
    };
  }), as;
}
var os, Gc;
function Th() {
  if (Gc) return os;
  Gc = 1, os = e, e.Node = o, e.create = e;
  function e(i) {
    var s = this;
    if (s instanceof e || (s = new e()), s.tail = null, s.head = null, s.length = 0, i && typeof i.forEach == "function")
      i.forEach(function(u) {
        s.push(u);
      });
    else if (arguments.length > 0)
      for (var a = 0, c = arguments.length; a < c; a++)
        s.push(arguments[a]);
    return s;
  }
  e.prototype.removeNode = function(i) {
    if (i.list !== this)
      throw new Error("removing node which does not belong to this list");
    var s = i.next, a = i.prev;
    return s && (s.prev = a), a && (a.next = s), i === this.head && (this.head = s), i === this.tail && (this.tail = a), i.list.length--, i.next = null, i.prev = null, i.list = null, s;
  }, e.prototype.unshiftNode = function(i) {
    if (i !== this.head) {
      i.list && i.list.removeNode(i);
      var s = this.head;
      i.list = this, i.next = s, s && (s.prev = i), this.head = i, this.tail || (this.tail = i), this.length++;
    }
  }, e.prototype.pushNode = function(i) {
    if (i !== this.tail) {
      i.list && i.list.removeNode(i);
      var s = this.tail;
      i.list = this, i.prev = s, s && (s.next = i), this.tail = i, this.head || (this.head = i), this.length++;
    }
  }, e.prototype.push = function() {
    for (var i = 0, s = arguments.length; i < s; i++)
      n(this, arguments[i]);
    return this.length;
  }, e.prototype.unshift = function() {
    for (var i = 0, s = arguments.length; i < s; i++)
      r(this, arguments[i]);
    return this.length;
  }, e.prototype.pop = function() {
    if (this.tail) {
      var i = this.tail.value;
      return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, i;
    }
  }, e.prototype.shift = function() {
    if (this.head) {
      var i = this.head.value;
      return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, i;
    }
  }, e.prototype.forEach = function(i, s) {
    s = s || this;
    for (var a = this.head, c = 0; a !== null; c++)
      i.call(s, a.value, c, this), a = a.next;
  }, e.prototype.forEachReverse = function(i, s) {
    s = s || this;
    for (var a = this.tail, c = this.length - 1; a !== null; c--)
      i.call(s, a.value, c, this), a = a.prev;
  }, e.prototype.get = function(i) {
    for (var s = 0, a = this.head; a !== null && s < i; s++)
      a = a.next;
    if (s === i && a !== null)
      return a.value;
  }, e.prototype.getReverse = function(i) {
    for (var s = 0, a = this.tail; a !== null && s < i; s++)
      a = a.prev;
    if (s === i && a !== null)
      return a.value;
  }, e.prototype.map = function(i, s) {
    s = s || this;
    for (var a = new e(), c = this.head; c !== null; )
      a.push(i.call(s, c.value, this)), c = c.next;
    return a;
  }, e.prototype.mapReverse = function(i, s) {
    s = s || this;
    for (var a = new e(), c = this.tail; c !== null; )
      a.push(i.call(s, c.value, this)), c = c.prev;
    return a;
  }, e.prototype.reduce = function(i, s) {
    var a, c = this.head;
    if (arguments.length > 1)
      a = s;
    else if (this.head)
      c = this.head.next, a = this.head.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var u = 0; c !== null; u++)
      a = i(a, c.value, u), c = c.next;
    return a;
  }, e.prototype.reduceReverse = function(i, s) {
    var a, c = this.tail;
    if (arguments.length > 1)
      a = s;
    else if (this.tail)
      c = this.tail.prev, a = this.tail.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var u = this.length - 1; c !== null; u--)
      a = i(a, c.value, u), c = c.prev;
    return a;
  }, e.prototype.toArray = function() {
    for (var i = new Array(this.length), s = 0, a = this.head; a !== null; s++)
      i[s] = a.value, a = a.next;
    return i;
  }, e.prototype.toArrayReverse = function() {
    for (var i = new Array(this.length), s = 0, a = this.tail; a !== null; s++)
      i[s] = a.value, a = a.prev;
    return i;
  }, e.prototype.slice = function(i, s) {
    s = s || this.length, s < 0 && (s += this.length), i = i || 0, i < 0 && (i += this.length);
    var a = new e();
    if (s < i || s < 0)
      return a;
    i < 0 && (i = 0), s > this.length && (s = this.length);
    for (var c = 0, u = this.head; u !== null && c < i; c++)
      u = u.next;
    for (; u !== null && c < s; c++, u = u.next)
      a.push(u.value);
    return a;
  }, e.prototype.sliceReverse = function(i, s) {
    s = s || this.length, s < 0 && (s += this.length), i = i || 0, i < 0 && (i += this.length);
    var a = new e();
    if (s < i || s < 0)
      return a;
    i < 0 && (i = 0), s > this.length && (s = this.length);
    for (var c = this.length, u = this.tail; u !== null && c > s; c--)
      u = u.prev;
    for (; u !== null && c > i; c--, u = u.prev)
      a.push(u.value);
    return a;
  }, e.prototype.splice = function(i, s, ...a) {
    i > this.length && (i = this.length - 1), i < 0 && (i = this.length + i);
    for (var c = 0, u = this.head; u !== null && c < i; c++)
      u = u.next;
    for (var p = [], c = 0; u && c < s; c++)
      p.push(u.value), u = this.removeNode(u);
    u === null && (u = this.tail), u !== this.head && u !== this.tail && (u = u.prev);
    for (var c = 0; c < a.length; c++)
      u = t(this, u, a[c]);
    return p;
  }, e.prototype.reverse = function() {
    for (var i = this.head, s = this.tail, a = i; a !== null; a = a.prev) {
      var c = a.prev;
      a.prev = a.next, a.next = c;
    }
    return this.head = s, this.tail = i, this;
  };
  function t(i, s, a) {
    var c = s === i.head ? new o(a, null, s, i) : new o(a, s, s.next, i);
    return c.next === null && (i.tail = c), c.prev === null && (i.head = c), i.length++, c;
  }
  function n(i, s) {
    i.tail = new o(s, i.tail, null, i), i.head || (i.head = i.tail), i.length++;
  }
  function r(i, s) {
    i.head = new o(s, null, i.head, i), i.tail || (i.tail = i.head), i.length++;
  }
  function o(i, s, a, c) {
    if (!(this instanceof o))
      return new o(i, s, a, c);
    this.list = c, this.value = i, s ? (s.next = this, this.prev = s) : this.prev = null, a ? (a.prev = this, this.next = a) : this.next = null;
  }
  try {
    Ph()(e);
  } catch {
  }
  return os;
}
var cs, Fc;
function il() {
  if (Fc) return cs;
  Fc = 1;
  const e = Th(), t = Symbol("max"), n = Symbol("length"), r = Symbol("lengthCalculator"), o = Symbol("allowStale"), i = Symbol("maxAge"), s = Symbol("dispose"), a = Symbol("noDisposeOnSet"), c = Symbol("lruList"), u = Symbol("cache"), p = Symbol("updateAgeOnGet"), g = () => 1;
  class f {
    constructor(d) {
      if (typeof d == "number" && (d = { max: d }), d || (d = {}), d.max && (typeof d.max != "number" || d.max < 0))
        throw new TypeError("max must be a non-negative number");
      this[t] = d.max || 1 / 0;
      const l = d.length || g;
      if (this[r] = typeof l != "function" ? g : l, this[o] = d.stale || !1, d.maxAge && typeof d.maxAge != "number")
        throw new TypeError("maxAge must be a number");
      this[i] = d.maxAge || 0, this[s] = d.dispose, this[a] = d.noDisposeOnSet || !1, this[p] = d.updateAgeOnGet || !1, this.reset();
    }
    // resize the cache when the max changes.
    set max(d) {
      if (typeof d != "number" || d < 0)
        throw new TypeError("max must be a non-negative number");
      this[t] = d || 1 / 0, x(this);
    }
    get max() {
      return this[t];
    }
    set allowStale(d) {
      this[o] = !!d;
    }
    get allowStale() {
      return this[o];
    }
    set maxAge(d) {
      if (typeof d != "number")
        throw new TypeError("maxAge must be a non-negative number");
      this[i] = d, x(this);
    }
    get maxAge() {
      return this[i];
    }
    // resize the cache when the lengthCalculator changes.
    set lengthCalculator(d) {
      typeof d != "function" && (d = g), d !== this[r] && (this[r] = d, this[n] = 0, this[c].forEach((l) => {
        l.length = this[r](l.value, l.key), this[n] += l.length;
      })), x(this);
    }
    get lengthCalculator() {
      return this[r];
    }
    get length() {
      return this[n];
    }
    get itemCount() {
      return this[c].length;
    }
    rforEach(d, l) {
      l = l || this;
      for (let m = this[c].tail; m !== null; ) {
        const I = m.prev;
        v(this, d, m, l), m = I;
      }
    }
    forEach(d, l) {
      l = l || this;
      for (let m = this[c].head; m !== null; ) {
        const I = m.next;
        v(this, d, m, l), m = I;
      }
    }
    keys() {
      return this[c].toArray().map((d) => d.key);
    }
    values() {
      return this[c].toArray().map((d) => d.value);
    }
    reset() {
      this[s] && this[c] && this[c].length && this[c].forEach((d) => this[s](d.key, d.value)), this[u] = /* @__PURE__ */ new Map(), this[c] = new e(), this[n] = 0;
    }
    dump() {
      return this[c].map((d) => w(this, d) ? !1 : {
        k: d.key,
        v: d.value,
        e: d.now + (d.maxAge || 0)
      }).toArray().filter((d) => d);
    }
    dumpLru() {
      return this[c];
    }
    set(d, l, m) {
      if (m = m || this[i], m && typeof m != "number")
        throw new TypeError("maxAge must be a number");
      const I = m ? Date.now() : 0, A = this[r](l, d);
      if (this[u].has(d)) {
        if (A > this[t])
          return b(this, this[u].get(d)), !1;
        const E = this[u].get(d).value;
        return this[s] && (this[a] || this[s](d, E.value)), E.now = I, E.maxAge = m, E.value = l, this[n] += A - E.length, E.length = A, this.get(d), x(this), !0;
      }
      const R = new S(d, l, A, I, m);
      return R.length > this[t] ? (this[s] && this[s](d, l), !1) : (this[n] += R.length, this[c].unshift(R), this[u].set(d, this[c].head), x(this), !0);
    }
    has(d) {
      if (!this[u].has(d)) return !1;
      const l = this[u].get(d).value;
      return !w(this, l);
    }
    get(d) {
      return h(this, d, !0);
    }
    peek(d) {
      return h(this, d, !1);
    }
    pop() {
      const d = this[c].tail;
      return d ? (b(this, d), d.value) : null;
    }
    del(d) {
      b(this, this[u].get(d));
    }
    load(d) {
      this.reset();
      const l = Date.now();
      for (let m = d.length - 1; m >= 0; m--) {
        const I = d[m], A = I.e || 0;
        if (A === 0)
          this.set(I.k, I.v);
        else {
          const R = A - l;
          R > 0 && this.set(I.k, I.v, R);
        }
      }
    }
    prune() {
      this[u].forEach((d, l) => h(this, l, !1));
    }
  }
  const h = (y, d, l) => {
    const m = y[u].get(d);
    if (m) {
      const I = m.value;
      if (w(y, I)) {
        if (b(y, m), !y[o])
          return;
      } else
        l && (y[p] && (m.value.now = Date.now()), y[c].unshiftNode(m));
      return I.value;
    }
  }, w = (y, d) => {
    if (!d || !d.maxAge && !y[i])
      return !1;
    const l = Date.now() - d.now;
    return d.maxAge ? l > d.maxAge : y[i] && l > y[i];
  }, x = (y) => {
    if (y[n] > y[t])
      for (let d = y[c].tail; y[n] > y[t] && d !== null; ) {
        const l = d.prev;
        b(y, d), d = l;
      }
  }, b = (y, d) => {
    if (d) {
      const l = d.value;
      y[s] && y[s](l.key, l.value), y[n] -= l.length, y[u].delete(l.key), y[c].removeNode(d);
    }
  };
  class S {
    constructor(d, l, m, I, A) {
      this.key = d, this.value = l, this.length = m, this.now = I, this.maxAge = A || 0;
    }
  }
  const v = (y, d, l, m) => {
    let I = l.value;
    w(y, I) && (b(y, l), y[o] || (I = void 0)), I && d.call(m, I.value, I.key, y);
  };
  return cs = f, cs;
}
var ds, Bc;
function Ch() {
  if (Bc) return ds;
  Bc = 1;
  const e = il(), t = 10;
  return ds = class {
    /**
     * Creates a ResolvedContext.
     *
     * @param document the context document.
     */
    constructor({ document: r }) {
      this.document = r, this.cache = new e({ max: t });
    }
    getProcessed(r) {
      return this.cache.get(r);
    }
    setProcessed(r, o) {
      this.cache.set(r, o);
    }
  }, ds;
}
var ls, Hc;
function Eh() {
  if (Hc) return ls;
  Hc = 1;
  const {
    isArray: e,
    isObject: t,
    isString: n
  } = Oe(), {
    asArray: r
  } = Fe(), { prependBase: o } = Mt(), i = Be(), s = Ch(), a = 10;
  ls = class {
    /**
     * Creates a ContextResolver.
     *
     * @param sharedCache a shared LRU cache with `get` and `set` APIs.
     */
    constructor({ sharedCache: g }) {
      this.perOpCache = /* @__PURE__ */ new Map(), this.sharedCache = g;
    }
    async resolve({
      activeCtx: g,
      context: f,
      documentLoader: h,
      base: w,
      cycles: x = /* @__PURE__ */ new Set()
    }) {
      f && t(f) && f["@context"] && (f = f["@context"]), f = r(f);
      const b = [];
      for (const S of f) {
        if (n(S)) {
          let d = this._get(S);
          d || (d = await this._resolveRemoteContext(
            { activeCtx: g, url: S, documentLoader: h, base: w, cycles: x }
          )), e(d) ? b.push(...d) : b.push(d);
          continue;
        }
        if (S === null) {
          b.push(new s({ document: null }));
          continue;
        }
        t(S) || c(f);
        const v = JSON.stringify(S);
        let y = this._get(v);
        y || (y = new s({ document: S }), this._cacheResolvedContext({ key: v, resolved: y, tag: "static" })), b.push(y);
      }
      return b;
    }
    _get(g) {
      let f = this.perOpCache.get(g);
      if (!f) {
        const h = this.sharedCache.get(g);
        h && (f = h.get("static"), f && this.perOpCache.set(g, f));
      }
      return f;
    }
    _cacheResolvedContext({ key: g, resolved: f, tag: h }) {
      if (this.perOpCache.set(g, f), h !== void 0) {
        let w = this.sharedCache.get(g);
        w || (w = /* @__PURE__ */ new Map(), this.sharedCache.set(g, w)), w.set(h, f);
      }
      return f;
    }
    async _resolveRemoteContext({ activeCtx: g, url: f, documentLoader: h, base: w, cycles: x }) {
      f = o(w, f);
      const { context: b, remoteDoc: S } = await this._fetchContext(
        { activeCtx: g, url: f, documentLoader: h, cycles: x }
      );
      w = S.documentUrl || f, u({ context: b, base: w });
      const v = await this.resolve(
        { activeCtx: g, context: b, documentLoader: h, base: w, cycles: x }
      );
      return this._cacheResolvedContext({ key: f, resolved: v, tag: S.tag }), v;
    }
    async _fetchContext({ activeCtx: g, url: f, documentLoader: h, cycles: w }) {
      if (w.size > a)
        throw new i(
          "Maximum number of @context URLs exceeded.",
          "jsonld.ContextUrlError",
          {
            code: g.processingMode === "json-ld-1.0" ? "loading remote context failed" : "context overflow",
            max: a
          }
        );
      if (w.has(f))
        throw new i(
          "Cyclical @context URLs detected.",
          "jsonld.ContextUrlError",
          {
            code: g.processingMode === "json-ld-1.0" ? "recursive context inclusion" : "context overflow",
            url: f
          }
        );
      w.add(f);
      let x, b;
      try {
        b = await h(f), x = b.document || null, n(x) && (x = JSON.parse(x));
      } catch (S) {
        throw new i(
          `Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context. URL: "${f}".`,
          "jsonld.InvalidUrl",
          { code: "loading remote context failed", url: f, cause: S }
        );
      }
      if (!t(x))
        throw new i(
          `Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object. URL: "${f}".`,
          "jsonld.InvalidUrl",
          { code: "invalid remote context", url: f }
        );
      return "@context" in x ? x = { "@context": x["@context"] } : x = { "@context": {} }, b.contextUrl && (e(x["@context"]) || (x["@context"] = [x["@context"]]), x["@context"].push(b.contextUrl)), { context: x, remoteDoc: b };
    }
  };
  function c(p) {
    throw new i(
      "Invalid JSON-LD syntax; @context must be an object.",
      "jsonld.SyntaxError",
      {
        code: "invalid local context",
        context: p
      }
    );
  }
  function u({ context: p, base: g }) {
    if (!p)
      return;
    const f = p["@context"];
    if (n(f)) {
      p["@context"] = o(g, f);
      return;
    }
    if (e(f)) {
      for (let h = 0; h < f.length; ++h) {
        const w = f[h];
        if (n(w)) {
          f[h] = o(g, w);
          continue;
        }
        t(w) && u({ context: { "@context": w }, base: g });
      }
      return;
    }
    if (t(f))
      for (const h in f)
        u({ context: f[h], base: g });
  }
  return ls;
}
var us, Zc;
function kh() {
  return Zc || (Zc = 1, us = pa().NQuads), us;
}
var ps, Jc;
function On() {
  if (Jc) return ps;
  Jc = 1;
  const e = Be(), {
    isArray: t
  } = Oe(), {
    asArray: n
  } = Fe(), r = {};
  ps = r, r.defaultEventHandler = null, r.setupEventHandler = ({ options: s = {} }) => {
    const a = [].concat(
      s.safe ? r.safeEventHandler : [],
      s.eventHandler ? n(s.eventHandler) : [],
      r.defaultEventHandler ? r.defaultEventHandler : []
    );
    return a.length === 0 ? null : a;
  }, r.handleEvent = ({
    event: s,
    options: a
  }) => {
    o({ event: s, handlers: a.eventHandler });
  };
  function o({ event: s, handlers: a }) {
    let c = !0;
    for (let u = 0; c && u < a.length; ++u) {
      c = !1;
      const p = a[u];
      if (t(p))
        c = o({ event: s, handlers: p });
      else if (typeof p == "function")
        p({ event: s, next: () => {
          c = !0;
        } });
      else if (typeof p == "object")
        s.code in p ? p[s.code]({ event: s, next: () => {
          c = !0;
        } }) : c = !0;
      else
        throw new e(
          "Invalid event handler.",
          "jsonld.InvalidEventHandler",
          { event: s }
        );
    }
    return c;
  }
  const i = /* @__PURE__ */ new Set([
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
  return r.safeEventHandler = function({ event: a, next: c }) {
    if (a.level === "warning" && i.has(a.code))
      throw new e(
        "Safe mode validation error.",
        "jsonld.ValidationError",
        { event: a }
      );
    c();
  }, r.logEventHandler = function({ event: a, next: c }) {
    console.log(`EVENT: ${a.message}`, { event: a }), c();
  }, r.logWarningEventHandler = function({ event: a, next: c }) {
    a.level === "warning" && console.warn(`WARNING: ${a.message}`, { event: a }), c();
  }, r.unhandledEventHandler = function({ event: a }) {
    throw new e(
      "No handler for event.",
      "jsonld.UnhandledEvent",
      { event: a }
    );
  }, r.setDefaultEventHandler = function({ eventHandler: s } = {}) {
    r.defaultEventHandler = s ? n(s) : null;
  }, ps;
}
var fs, Kc;
function Bt() {
  if (Kc) return fs;
  Kc = 1;
  const e = Fe(), t = Be(), {
    isArray: n,
    isObject: r,
    isString: o,
    isUndefined: i
  } = Oe(), {
    isAbsolute: s,
    isRelative: a,
    prependBase: c
  } = Mt(), {
    handleEvent: u
  } = On(), {
    REGEX_BCP47: p,
    REGEX_KEYWORD: g,
    asArray: f,
    compareShortestLeast: h
  } = Fe(), w = /* @__PURE__ */ new Map(), x = 1e4, b = {};
  fs = b, b.process = async ({
    activeCtx: y,
    localCtx: d,
    options: l,
    propagate: m = !0,
    overrideProtected: I = !1,
    cycles: A = /* @__PURE__ */ new Set()
  }) => {
    if (r(d) && "@context" in d && n(d["@context"]) && (d = d["@context"]), f(d).length === 0)
      return y;
    const j = [], E = [
      ({ event: D, next: _ }) => {
        j.push(D), _();
      }
    ];
    l.eventHandler && E.push(l.eventHandler);
    const O = l;
    l = { ...l, eventHandler: E };
    const P = await l.contextResolver.resolve({
      activeCtx: y,
      context: d,
      documentLoader: l.documentLoader,
      base: l.base
    });
    r(P[0].document) && typeof P[0].document["@propagate"] == "boolean" && (m = P[0].document["@propagate"]);
    let C = y;
    !m && !C.previousContext && (C = C.clone(), C.previousContext = y);
    for (const D of P) {
      let { document: _ } = D;
      if (y = C, _ === null) {
        if (!I && Object.keys(y.protected).length !== 0)
          throw new t(
            "Tried to nullify a context with protected terms outside of a term definition.",
            "jsonld.SyntaxError",
            { code: "invalid context nullification" }
          );
        C = y = b.getInitialContext(l).clone();
        continue;
      }
      const F = D.getProcessed(y);
      if (F) {
        if (O.eventHandler)
          for (const G of F.events)
            u({ event: G, options: O });
        C = y = F.context;
        continue;
      }
      if (r(_) && "@context" in _ && (_ = _["@context"]), !r(_))
        throw new t(
          "Invalid JSON-LD syntax; @context must be an object.",
          "jsonld.SyntaxError",
          { code: "invalid local context", context: _ }
        );
      C = C.clone();
      const L = /* @__PURE__ */ new Map();
      if ("@version" in _) {
        if (_["@version"] !== 1.1)
          throw new t(
            "Unsupported JSON-LD version: " + _["@version"],
            "jsonld.UnsupportedVersion",
            { code: "invalid @version value", context: _ }
          );
        if (y.processingMode && y.processingMode === "json-ld-1.0")
          throw new t(
            "@version: " + _["@version"] + " not compatible with " + y.processingMode,
            "jsonld.ProcessingModeConflict",
            { code: "processing mode conflict", context: _ }
          );
        C.processingMode = "json-ld-1.1", C["@version"] = _["@version"], L.set("@version", !0);
      }
      if (C.processingMode = C.processingMode || y.processingMode, "@base" in _) {
        let G = _["@base"];
        if (!(G === null || s(G))) if (a(G))
          G = c(C["@base"], G);
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.',
            "jsonld.SyntaxError",
            { code: "invalid base IRI", context: _ }
          );
        C["@base"] = G, L.set("@base", !0);
      }
      if ("@vocab" in _) {
        const G = _["@vocab"];
        if (G === null)
          delete C["@vocab"];
        else if (o(G)) {
          if (!s(G) && b.processingMode(C, 1))
            throw new t(
              'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.',
              "jsonld.SyntaxError",
              { code: "invalid vocab mapping", context: _ }
            );
          {
            const k = S(
              C,
              G,
              { vocab: !0, base: !0 },
              void 0,
              void 0,
              l
            );
            s(k) || l.eventHandler && u({
              event: {
                type: ["JsonLdEvent"],
                code: "relative @vocab reference",
                level: "warning",
                message: "Relative @vocab reference found.",
                details: {
                  vocab: k
                }
              },
              options: l
            }), C["@vocab"] = k;
          }
        } else throw new t(
          'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be a string or null.',
          "jsonld.SyntaxError",
          { code: "invalid vocab mapping", context: _ }
        );
        L.set("@vocab", !0);
      }
      if ("@language" in _) {
        const G = _["@language"];
        if (G === null)
          delete C["@language"];
        else if (o(G))
          G.match(p) || l.eventHandler && u({
            event: {
              type: ["JsonLdEvent"],
              code: "invalid @language value",
              level: "warning",
              message: "@language value must be valid BCP47.",
              details: {
                language: G
              }
            },
            options: l
          }), C["@language"] = G.toLowerCase();
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@language" in a @context must be a string or null.',
            "jsonld.SyntaxError",
            { code: "invalid default language", context: _ }
          );
        L.set("@language", !0);
      }
      if ("@direction" in _) {
        const G = _["@direction"];
        if (y.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @direction not compatible with " + y.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context member", context: _ }
          );
        if (G === null)
          delete C["@direction"];
        else {
          if (G !== "ltr" && G !== "rtl")
            throw new t(
              'Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", context: _ }
            );
          C["@direction"] = G;
        }
        L.set("@direction", !0);
      }
      if ("@propagate" in _) {
        const G = _["@propagate"];
        if (y.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @propagate not compatible with " + y.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: _ }
          );
        if (typeof G != "boolean")
          throw new t(
            "Invalid JSON-LD syntax; @propagate value must be a boolean.",
            "jsonld.SyntaxError",
            { code: "invalid @propagate value", context: d }
          );
        L.set("@propagate", !0);
      }
      if ("@import" in _) {
        const G = _["@import"];
        if (y.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @import not compatible with " + y.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: _ }
          );
        if (!o(G))
          throw new t(
            "Invalid JSON-LD syntax; @import must be a string.",
            "jsonld.SyntaxError",
            { code: "invalid @import value", context: d }
          );
        const k = await l.contextResolver.resolve({
          activeCtx: y,
          context: G,
          documentLoader: l.documentLoader,
          base: l.base
        });
        if (k.length !== 1)
          throw new t(
            "Invalid JSON-LD syntax; @import must reference a single context.",
            "jsonld.SyntaxError",
            { code: "invalid remote context", context: d }
          );
        const M = k[0].getProcessed(y);
        if (M)
          _ = M;
        else {
          const U = k[0].document;
          if ("@import" in U)
            throw new t(
              "Invalid JSON-LD syntax: imported context must not include @import.",
              "jsonld.SyntaxError",
              { code: "invalid context entry", context: d }
            );
          for (const N in U)
            _.hasOwnProperty(N) || (_[N] = U[N]);
          k[0].setProcessed(y, _);
        }
        L.set("@import", !0);
      }
      L.set("@protected", _["@protected"] || !1);
      for (const G in _)
        if (b.createTermDefinition({
          activeCtx: C,
          localCtx: _,
          term: G,
          defined: L,
          options: l,
          overrideProtected: I
        }), r(_[G]) && "@context" in _[G]) {
          const k = _[G]["@context"];
          let M = !0;
          if (o(k)) {
            const U = c(l.base, k);
            A.has(U) ? M = !1 : A.add(U);
          }
          if (M)
            try {
              await b.process({
                activeCtx: C.clone(),
                localCtx: _[G]["@context"],
                overrideProtected: !0,
                options: l,
                cycles: A
              });
            } catch {
              throw new t(
                "Invalid JSON-LD syntax; invalid scoped context.",
                "jsonld.SyntaxError",
                {
                  code: "invalid scoped context",
                  context: _[G]["@context"],
                  term: G
                }
              );
            }
        }
      D.setProcessed(y, {
        context: C,
        events: j
      });
    }
    return C;
  }, b.createTermDefinition = ({
    activeCtx: y,
    localCtx: d,
    term: l,
    defined: m,
    options: I,
    overrideProtected: A = !1
  }) => {
    if (m.has(l)) {
      if (m.get(l))
        return;
      throw new t(
        "Cyclical context definition detected.",
        "jsonld.CyclicalContext",
        { code: "cyclic IRI mapping", context: d, term: l }
      );
    }
    m.set(l, !1);
    let R;
    if (d.hasOwnProperty(l) && (R = d[l]), l === "@type" && r(R) && (R["@container"] || "@set") === "@set" && b.processingMode(y, 1.1)) {
      const _ = ["@container", "@id", "@protected"], F = Object.keys(R);
      if (F.length === 0 || F.some((L) => !_.includes(L)))
        throw new t(
          "Invalid JSON-LD syntax; keywords cannot be overridden.",
          "jsonld.SyntaxError",
          { code: "keyword redefinition", context: d, term: l }
        );
    } else {
      if (b.isKeyword(l))
        throw new t(
          "Invalid JSON-LD syntax; keywords cannot be overridden.",
          "jsonld.SyntaxError",
          { code: "keyword redefinition", context: d, term: l }
        );
      if (l.match(g)) {
        I.eventHandler && u({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved term",
            level: "warning",
            message: 'Terms beginning with "@" are reserved for future use and dropped.',
            details: {
              term: l
            }
          },
          options: I
        });
        return;
      } else if (l === "")
        throw new t(
          "Invalid JSON-LD syntax; a term cannot be an empty string.",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
    }
    const j = y.mappings.get(l);
    y.mappings.has(l) && y.mappings.delete(l);
    let E = !1;
    if ((o(R) || R === null) && (E = !0, R = { "@id": R }), !r(R))
      throw new t(
        "Invalid JSON-LD syntax; @context term values must be strings or objects.",
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: d }
      );
    const O = {};
    y.mappings.set(l, O), O.reverse = !1;
    const P = ["@container", "@id", "@language", "@reverse", "@type"];
    b.processingMode(y, 1.1) && P.push(
      "@context",
      "@direction",
      "@index",
      "@nest",
      "@prefix",
      "@protected"
    );
    for (const _ in R)
      if (!P.includes(_))
        throw new t(
          "Invalid JSON-LD syntax; a term definition must not contain " + _,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
    const C = l.indexOf(":");
    if (O._termHasColon = C > 0, "@reverse" in R) {
      if ("@id" in R)
        throw new t(
          "Invalid JSON-LD syntax; a @reverse term definition must not contain @id.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: d }
        );
      if ("@nest" in R)
        throw new t(
          "Invalid JSON-LD syntax; a @reverse term definition must not contain @nest.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: d }
        );
      const _ = R["@reverse"];
      if (!o(_))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      if (_.match(g)) {
        I.eventHandler && u({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved @reverse value",
            level: "warning",
            message: '@reverse values beginning with "@" are reserved for future use and dropped.',
            details: {
              reverse: _
            }
          },
          options: I
        }), j ? y.mappings.set(l, j) : y.mappings.delete(l);
        return;
      }
      const F = S(
        y,
        _,
        { vocab: !0, base: !1 },
        d,
        m,
        I
      );
      if (!s(F))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      O["@id"] = F, O.reverse = !0;
    } else if ("@id" in R) {
      let _ = R["@id"];
      if (_ && !o(_))
        throw new t(
          "Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      if (_ === null)
        O["@id"] = null;
      else if (!b.isKeyword(_) && _.match(g)) {
        I.eventHandler && u({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved @id value",
            level: "warning",
            message: '@id values beginning with "@" are reserved for future use and dropped.',
            details: {
              id: _
            }
          },
          options: I
        }), j ? y.mappings.set(l, j) : y.mappings.delete(l);
        return;
      } else if (_ !== l) {
        if (_ = S(
          y,
          _,
          { vocab: !0, base: !1 },
          d,
          m,
          I
        ), !s(_) && !b.isKeyword(_))
          throw new t(
            "Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: d }
          );
        if (l.match(/(?::[^:])|\//)) {
          const F = new Map(m).set(l, !0);
          if (S(
            y,
            l,
            { vocab: !0, base: !1 },
            d,
            F,
            I
          ) !== _)
            throw new t(
              "Invalid JSON-LD syntax; term in form of IRI must expand to definition.",
              "jsonld.SyntaxError",
              { code: "invalid IRI mapping", context: d }
            );
        }
        O["@id"] = _, O._prefix = E && !O._termHasColon && _.match(/[:\/\?#\[\]@]$/) !== null;
      }
    }
    if (!("@id" in O))
      if (O._termHasColon) {
        const _ = l.substr(0, C);
        if (d.hasOwnProperty(_) && b.createTermDefinition({
          activeCtx: y,
          localCtx: d,
          term: _,
          defined: m,
          options: I
        }), y.mappings.has(_)) {
          const F = l.substr(C + 1);
          O["@id"] = y.mappings.get(_)["@id"] + F;
        } else
          O["@id"] = l;
      } else if (l === "@type")
        O["@id"] = l;
      else {
        if (!("@vocab" in y))
          throw new t(
            "Invalid JSON-LD syntax; @context terms must define an @id.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: d, term: l }
          );
        O["@id"] = y["@vocab"] + l;
      }
    if ((R["@protected"] === !0 || m.get("@protected") === !0 && R["@protected"] !== !1) && (y.protected[l] = !0, O.protected = !0), m.set(l, !0), "@type" in R) {
      let _ = R["@type"];
      if (!o(_))
        throw new t(
          "Invalid JSON-LD syntax; an @context @type value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid type mapping", context: d }
        );
      if (_ === "@json" || _ === "@none") {
        if (b.processingMode(y, 1))
          throw new t(
            `Invalid JSON-LD syntax; an @context @type value must not be "${_}" in JSON-LD 1.0 mode.`,
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
      } else if (_ !== "@id" && _ !== "@vocab") {
        if (_ = S(
          y,
          _,
          { vocab: !0, base: !1 },
          d,
          m,
          I
        ), !s(_))
          throw new t(
            "Invalid JSON-LD syntax; an @context @type value must be an absolute IRI.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
        if (_.indexOf("_:") === 0)
          throw new t(
            "Invalid JSON-LD syntax; an @context @type value must be an IRI, not a blank node identifier.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
      }
      O["@type"] = _;
    }
    if ("@container" in R) {
      const _ = o(R["@container"]) ? [R["@container"]] : R["@container"] || [], F = ["@list", "@set", "@index", "@language"];
      let L = !0;
      const G = _.includes("@set");
      if (b.processingMode(y, 1.1)) {
        if (F.push("@graph", "@id", "@type"), _.includes("@list")) {
          if (_.length !== 1)
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @list must have no other values",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: d }
            );
        } else if (_.includes("@graph")) {
          if (_.some((k) => k !== "@graph" && k !== "@id" && k !== "@index" && k !== "@set"))
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: d }
            );
        } else
          L &= _.length <= (G ? 2 : 1);
        if (_.includes("@type") && (O["@type"] = O["@type"] || "@id", !["@id", "@vocab"].includes(O["@type"])))
          throw new t(
            "Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
      } else
        L &= !n(R["@container"]), L &= _.length <= 1;
      if (L &= _.every((k) => F.includes(k)), L &= !(G && _.includes("@list")), !L)
        throw new t(
          "Invalid JSON-LD syntax; @context @container value must be one of the following: " + F.join(", "),
          "jsonld.SyntaxError",
          { code: "invalid container mapping", context: d }
        );
      if (O.reverse && !_.every((k) => ["@index", "@set"].includes(k)))
        throw new t(
          "Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: d }
        );
      O["@container"] = _;
    }
    if ("@index" in R) {
      if (!("@container" in R) || !O["@container"].includes("@index"))
        throw new t(
          `Invalid JSON-LD syntax; @index without @index in @container: "${R["@index"]}" on term "${l}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (!o(R["@index"]) || R["@index"].indexOf("@") === 0)
        throw new t(
          `Invalid JSON-LD syntax; @index must expand to an IRI: "${R["@index"]}" on term "${l}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      O["@index"] = R["@index"];
    }
    if ("@context" in R && (O["@context"] = R["@context"]), "@language" in R && !("@type" in R)) {
      let _ = R["@language"];
      if (_ !== null && !o(_))
        throw new t(
          "Invalid JSON-LD syntax; @context @language value must be a string or null.",
          "jsonld.SyntaxError",
          { code: "invalid language mapping", context: d }
        );
      _ !== null && (_ = _.toLowerCase()), O["@language"] = _;
    }
    if ("@prefix" in R) {
      if (l.match(/:|\//))
        throw new t(
          "Invalid JSON-LD syntax; @context @prefix used on a compact IRI term",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (b.isKeyword(O["@id"]))
        throw new t(
          "Invalid JSON-LD syntax; keywords may not be used as prefixes",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (typeof R["@prefix"] == "boolean")
        O._prefix = R["@prefix"] === !0;
      else
        throw new t(
          "Invalid JSON-LD syntax; @context value for @prefix must be boolean",
          "jsonld.SyntaxError",
          { code: "invalid @prefix value", context: d }
        );
    }
    if ("@direction" in R) {
      const _ = R["@direction"];
      if (_ !== null && _ !== "ltr" && _ !== "rtl")
        throw new t(
          'Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".',
          "jsonld.SyntaxError",
          { code: "invalid base direction", context: d }
        );
      O["@direction"] = _;
    }
    if ("@nest" in R) {
      const _ = R["@nest"];
      if (!o(_) || _ !== "@nest" && _.indexOf("@") === 0)
        throw new t(
          "Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.",
          "jsonld.SyntaxError",
          { code: "invalid @nest value", context: d }
        );
      O["@nest"] = _;
    }
    // disallow aliasing @context and @preserve
    const D = O["@id"];
    if (D === "@context" || D === "@preserve")
      throw new t(
        "Invalid JSON-LD syntax; @context and @preserve cannot be aliased.",
        "jsonld.SyntaxError",
        { code: "invalid keyword alias", context: d }
      );
    if (j && j.protected && !A && (y.protected[l] = !0, O.protected = !0, !v(j, O)))
      throw new t(
        "Invalid JSON-LD syntax; tried to redefine a protected term.",
        "jsonld.SyntaxError",
        { code: "protected term redefinition", context: d, term: l }
      );
  }, b.expandIri = (y, d, l, m) => S(
    y,
    d,
    l,
    void 0,
    void 0,
    m
  );
  function S(y, d, l, m, I, A) {
    if (d === null || !o(d) || b.isKeyword(d))
      return d;
    if (d.match(g))
      return null;
    if (m && m.hasOwnProperty(d) && I.get(d) !== !0 && b.createTermDefinition({
      activeCtx: y,
      localCtx: m,
      term: d,
      defined: I,
      options: A
    }), l = l || {}, l.vocab) {
      const j = y.mappings.get(d);
      if (j === null)
        return null;
      if (r(j) && "@id" in j)
        return j["@id"];
    }
    const R = d.indexOf(":");
    if (R > 0) {
      const j = d.substr(0, R), E = d.substr(R + 1);
      if (j === "_" || E.indexOf("//") === 0)
        return d;
      m && m.hasOwnProperty(j) && b.createTermDefinition({
        activeCtx: y,
        localCtx: m,
        term: j,
        defined: I,
        options: A
      });
      const O = y.mappings.get(j);
      if (O && O._prefix)
        return O["@id"] + E;
      if (s(d))
        return d;
    }
    if (l.vocab && "@vocab" in y)
      d = y["@vocab"] + d;
    else if (l.base) {
      let j, E;
      "@base" in y ? y["@base"] ? (E = c(A.base, y["@base"]), j = c(E, d)) : (E = y["@base"], j = d) : (E = A.base, j = c(A.base, d)), d = j;
    }
    return d;
  }
  b.getInitialContext = (y) => {
    const d = JSON.stringify({ processingMode: y.processingMode }), l = w.get(d);
    if (l)
      return l;
    const m = {
      processingMode: y.processingMode,
      mappings: /* @__PURE__ */ new Map(),
      inverse: null,
      getInverse: I,
      clone: j,
      revertToPreviousContext: E,
      protected: {}
    };
    return w.size === x && w.clear(), w.set(d, m), m;
    function I() {
      const O = this;
      if (O.inverse)
        return O.inverse;
      const P = O.inverse = {}, C = O.fastCurieMap = {}, D = {}, _ = (O["@language"] || "@none").toLowerCase(), F = O["@direction"], L = O.mappings, G = [...L.keys()].sort(h);
      for (const k of G) {
        const M = L.get(k);
        if (M === null)
          continue;
        let U = M["@container"] || "@none";
        if (U = [].concat(U).sort().join(""), M["@id"] === null)
          continue;
        const N = f(M["@id"]);
        for (const $ of N) {
          let q = P[$];
          const T = b.isKeyword($);
          if (q)
            !T && !M._termHasColon && D[$].push(k);
          else if (P[$] = q = {}, !T && !M._termHasColon) {
            D[$] = [k];
            const z = { iri: $, terms: D[$] };
            $[0] in C ? C[$[0]].push(z) : C[$[0]] = [z];
          }
          if (q[U] || (q[U] = {
            "@language": {},
            "@type": {},
            "@any": {}
          }), q = q[U], R(k, q["@any"], "@none"), M.reverse)
            R(k, q["@type"], "@reverse");
          else if (M["@type"] === "@none")
            R(k, q["@any"], "@none"), R(k, q["@language"], "@none"), R(k, q["@type"], "@none");
          else if ("@type" in M)
            R(k, q["@type"], M["@type"]);
          else if ("@language" in M && "@direction" in M) {
            const z = M["@language"], Z = M["@direction"];
            z && Z ? R(
              k,
              q["@language"],
              `${z}_${Z}`.toLowerCase()
            ) : z ? R(k, q["@language"], z.toLowerCase()) : Z ? R(k, q["@language"], `_${Z}`) : R(k, q["@language"], "@null");
          } else "@language" in M ? R(
            k,
            q["@language"],
            (M["@language"] || "@null").toLowerCase()
          ) : "@direction" in M ? M["@direction"] ? R(
            k,
            q["@language"],
            `_${M["@direction"]}`
          ) : R(k, q["@language"], "@none") : F ? (R(k, q["@language"], `_${F}`), R(k, q["@language"], "@none"), R(k, q["@type"], "@none")) : (R(k, q["@language"], _), R(k, q["@language"], "@none"), R(k, q["@type"], "@none"));
        }
      }
      for (const k in C)
        A(C, k, 1);
      return P;
    }
    function A(O, P, C) {
      const D = O[P], _ = O[P] = {};
      let F, L;
      for (const G of D)
        F = G.iri, C >= F.length ? L = "" : L = F[C], L in _ ? _[L].push(G) : _[L] = [G];
      for (const G in _)
        G !== "" && A(_, G, C + 1);
    }
    function R(O, P, C) {
      P.hasOwnProperty(C) || (P[C] = O);
    }
    function j() {
      const O = {};
      return O.mappings = e.clone(this.mappings), O.clone = this.clone, O.inverse = null, O.getInverse = this.getInverse, O.protected = e.clone(this.protected), this.previousContext && (O.previousContext = this.previousContext.clone()), O.revertToPreviousContext = this.revertToPreviousContext, "@base" in this && (O["@base"] = this["@base"]), "@language" in this && (O["@language"] = this["@language"]), "@vocab" in this && (O["@vocab"] = this["@vocab"]), O;
    }
    function E() {
      return this.previousContext ? this.previousContext.clone() : this;
    }
  }, b.getContextValue = (y, d, l) => {
    if (d === null)
      return l === "@context" ? void 0 : null;
    if (y.mappings.has(d)) {
      const m = y.mappings.get(d);
      if (i(l))
        return m;
      if (m.hasOwnProperty(l))
        return m[l];
    }
    if (l === "@language" && l in y || l === "@direction" && l in y)
      return y[l];
    if (l !== "@context")
      return null;
  }, b.processingMode = (y, d) => d.toString() >= "1.1" ? !y.processingMode || y.processingMode >= "json-ld-" + d.toString() : y.processingMode === "json-ld-1.0", b.isKeyword = (y) => {
    if (!o(y) || y[0] !== "@")
      return !1;
    switch (y) {
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
  function v(y, d) {
    if (!(y && typeof y == "object") || !(d && typeof d == "object"))
      return y === d;
    const l = Array.isArray(y);
    if (l !== Array.isArray(d))
      return !1;
    if (l) {
      if (y.length !== d.length)
        return !1;
      for (let A = 0; A < y.length; ++A)
        if (!v(y[A], d[A]))
          return !1;
      return !0;
    }
    const m = Object.keys(y), I = Object.keys(d);
    if (m.length !== I.length)
      return !1;
    for (const A in y) {
      let R = y[A], j = d[A];
      if (A === "@container" && Array.isArray(R) && Array.isArray(j) && (R = R.slice().sort(), j = j.slice().sort()), !v(R, j))
        return !1;
    }
    return !0;
  }
  return fs;
}
var hs, Qc;
function Mh() {
  if (Qc) return hs;
  Qc = 1;
  const e = Be(), {
    isArray: t,
    isObject: n,
    isEmptyObject: r,
    isString: o,
    isUndefined: i
  } = Oe(), {
    isList: s,
    isValue: a,
    isGraph: c,
    isSubject: u
  } = xt(), {
    expandIri: p,
    getContextValue: g,
    isKeyword: f,
    process: h,
    processingMode: w
  } = Bt(), {
    isAbsolute: x
  } = Mt(), {
    REGEX_BCP47: b,
    REGEX_KEYWORD: S,
    addValue: v,
    asArray: y,
    getValues: d,
    validateTypeValue: l
  } = Fe(), {
    handleEvent: m
  } = On(), I = {};
  hs = I, I.expand = async ({
    activeCtx: P,
    activeProperty: C = null,
    element: D,
    options: _ = {},
    insideList: F = !1,
    insideIndex: L = !1,
    typeScopedContext: G = null
  }) => {
    if (D == null)
      return null;
    if (C === "@default" && (_ = Object.assign({}, _, { isFrame: !1 })), !t(D) && !n(D))
      return !F && (C === null || p(
        P,
        C,
        { vocab: !0 },
        _
      ) === "@graph") ? (_.eventHandler && m({
        event: {
          type: ["JsonLdEvent"],
          code: "free-floating scalar",
          level: "warning",
          message: "Dropping free-floating scalar not in a list.",
          details: {
            value: D
            //activeProperty
            //insideList
          }
        },
        options: _
      }), null) : j({ activeCtx: P, activeProperty: C, value: D, options: _ });
    if (t(D)) {
      let z = [];
      const Z = g(
        P,
        C,
        "@container"
      ) || [];
      F = F || Z.includes("@list");
      for (let Q = 0; Q < D.length; ++Q) {
        let J = await I.expand({
          activeCtx: P,
          activeProperty: C,
          element: D[Q],
          options: _,
          insideIndex: L,
          typeScopedContext: G
        });
        F && t(J) && (J = { "@list": J }), J !== null && (t(J) ? z = z.concat(J) : z.push(J));
      }
      return z;
    }
    const k = p(
      P,
      C,
      { vocab: !0 },
      _
    ), M = g(P, C, "@context");
    G = G || (P.previousContext ? P : null);
    let U = Object.keys(D).sort(), N = !L;
    if (N && G && U.length <= 2 && !U.includes("@context"))
      for (const z of U) {
        const Z = p(
          G,
          z,
          { vocab: !0 },
          _
        );
        if (Z === "@value") {
          N = !1, P = G;
          break;
        }
        if (Z === "@id" && U.length === 1) {
          N = !1;
          break;
        }
      }
    N && (P = P.revertToPreviousContext()), i(M) || (P = await h({
      activeCtx: P,
      localCtx: M,
      propagate: !0,
      overrideProtected: !0,
      options: _
    })), "@context" in D && (P = await h(
      { activeCtx: P, localCtx: D["@context"], options: _ }
    )), G = P;
    let $ = null;
    for (const z of U)
      if (p(P, z, { vocab: !0 }, _) === "@type") {
        $ = $ || z;
        const Q = D[z], J = Array.isArray(Q) ? Q.length > 1 ? Q.slice().sort() : Q : [Q];
        for (const V of J) {
          const B = g(G, V, "@context");
          i(B) || (P = await h({
            activeCtx: P,
            localCtx: B,
            options: _,
            propagate: !1
          }));
        }
      }
    let q = {};
    await R({
      activeCtx: P,
      activeProperty: C,
      expandedActiveProperty: k,
      element: D,
      expandedParent: q,
      options: _,
      insideList: F,
      typeKey: $,
      typeScopedContext: G
    }), U = Object.keys(q);
    let T = U.length;
    if ("@value" in q) {
      if ("@type" in q && ("@language" in q || "@direction" in q))
        throw new e(
          'Invalid JSON-LD syntax; an element containing "@value" may not contain both "@type" and either "@language" or "@direction".',
          "jsonld.SyntaxError",
          { code: "invalid value object", element: q }
        );
      let z = T - 1;
      if ("@type" in q && (z -= 1), "@index" in q && (z -= 1), "@language" in q && (z -= 1), "@direction" in q && (z -= 1), z !== 0)
        throw new e(
          'Invalid JSON-LD syntax; an element containing "@value" may only have an "@index" property and either "@type" or either or both "@language" or "@direction".',
          "jsonld.SyntaxError",
          { code: "invalid value object", element: q }
        );
      const Z = q["@value"] === null ? [] : y(q["@value"]), Q = d(q, "@type");
      if (!(w(P, 1.1) && Q.includes("@json") && Q.length === 1)) if (Z.length === 0)
        _.eventHandler && m({
          event: {
            type: ["JsonLdEvent"],
            code: "null @value value",
            level: "warning",
            message: "Dropping null @value value.",
            details: {
              value: q
            }
          },
          options: _
        }), q = null;
      else {
        if (!Z.every((J) => o(J) || r(J)) && "@language" in q)
          throw new e(
            "Invalid JSON-LD syntax; only strings may be language-tagged.",
            "jsonld.SyntaxError",
            { code: "invalid language-tagged value", element: q }
          );
        if (!Q.every((J) => x(J) && !(o(J) && J.indexOf("_:") === 0) || r(J)))
          throw new e(
            'Invalid JSON-LD syntax; an element containing "@value" and "@type" must have an absolute IRI for the value of "@type".',
            "jsonld.SyntaxError",
            { code: "invalid typed value", element: q }
          );
      }
    } else if ("@type" in q && !t(q["@type"]))
      q["@type"] = [q["@type"]];
    else if ("@set" in q || "@list" in q) {
      if (T > 1 && !(T === 2 && "@index" in q))
        throw new e(
          'Invalid JSON-LD syntax; if an element has the property "@set" or "@list", then it can have at most one other property that is "@index".',
          "jsonld.SyntaxError",
          { code: "invalid set or list object", element: q }
        );
      "@set" in q && (q = q["@set"], U = Object.keys(q), T = U.length);
    } else T === 1 && "@language" in q && (_.eventHandler && m({
      event: {
        type: ["JsonLdEvent"],
        code: "object with only @language",
        level: "warning",
        message: "Dropping object with only @language.",
        details: {
          value: q
        }
      },
      options: _
    }), q = null);
    return n(q) && !_.keepFreeFloatingNodes && !F && (C === null || k === "@graph" || (g(P, C, "@container") || []).includes("@graph")) && (q = A({ value: q, count: T, options: _ })), q;
  };
  function A({
    value: P,
    count: C,
    options: D
  }) {
    if (C === 0 || "@value" in P || "@list" in P || C === 1 && "@id" in P) {
      if (D.eventHandler) {
        let _, F;
        C === 0 ? (_ = "empty object", F = "Dropping empty object.") : "@value" in P ? (_ = "object with only @value", F = "Dropping object with only @value.") : "@list" in P ? (_ = "object with only @list", F = "Dropping object with only @list.") : C === 1 && "@id" in P && (_ = "object with only @id", F = "Dropping object with only @id."), m({
          event: {
            type: ["JsonLdEvent"],
            code: _,
            level: "warning",
            message: F,
            details: {
              value: P
            }
          },
          options: D
        });
      }
      return null;
    }
    return P;
  }
  async function R({
    activeCtx: P,
    activeProperty: C,
    expandedActiveProperty: D,
    element: _,
    expandedParent: F,
    options: L = {},
    insideList: G,
    typeKey: k,
    typeScopedContext: M
  }) {
    const U = Object.keys(_).sort(), N = [];
    let $;
    const q = _[k] && p(
      P,
      t(_[k]) ? _[k][0] : _[k],
      { vocab: !0 },
      {
        ...L,
        typeExpansion: !0
      }
    ) === "@json";
    for (const T of U) {
      let z = _[T], Z;
      if (T === "@context")
        continue;
      const Q = p(P, T, { vocab: !0 }, L);
      if (Q === null || !(x(Q) || f(Q))) {
        L.eventHandler && m({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid property",
            level: "warning",
            message: "Dropping property that did not expand into an absolute IRI or keyword.",
            details: {
              property: T,
              expandedProperty: Q
            }
          },
          options: L
        });
        continue;
      }
      if (f(Q)) {
        if (D === "@reverse")
          throw new e(
            "Invalid JSON-LD syntax; a keyword cannot be used as a @reverse property.",
            "jsonld.SyntaxError",
            { code: "invalid reverse property map", value: z }
          );
        if (Q in F && Q !== "@included" && Q !== "@type")
          throw new e(
            "Invalid JSON-LD syntax; colliding keywords detected.",
            "jsonld.SyntaxError",
            { code: "colliding keywords", keyword: Q }
          );
      }
      if (Q === "@id") {
        if (!o(z)) {
          if (!L.isFrame)
            throw new e(
              'Invalid JSON-LD syntax; "@id" value must a string.',
              "jsonld.SyntaxError",
              { code: "invalid @id value", value: z }
            );
          if (n(z)) {
            if (!r(z))
              throw new e(
                'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
                "jsonld.SyntaxError",
                { code: "invalid @id value", value: z }
              );
          } else if (t(z)) {
            if (!z.every((H) => o(H)))
              throw new e(
                'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
                "jsonld.SyntaxError",
                { code: "invalid @id value", value: z }
              );
          } else
            throw new e(
              'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
              "jsonld.SyntaxError",
              { code: "invalid @id value", value: z }
            );
        }
        v(
          F,
          "@id",
          y(z).map((H) => {
            if (o(H)) {
              const K = p(P, H, { base: !0 }, L);
              return L.eventHandler && (K === null ? m(H === null ? {
                event: {
                  type: ["JsonLdEvent"],
                  code: "null @id value",
                  level: "warning",
                  message: "Null @id found.",
                  details: {
                    id: H
                  }
                },
                options: L
              } : {
                event: {
                  type: ["JsonLdEvent"],
                  code: "reserved @id value",
                  level: "warning",
                  message: "Reserved @id found.",
                  details: {
                    id: H
                  }
                },
                options: L
              }) : x(K) || m({
                event: {
                  type: ["JsonLdEvent"],
                  code: "relative @id reference",
                  level: "warning",
                  message: "Relative @id reference found.",
                  details: {
                    id: H,
                    expandedId: K
                  }
                },
                options: L
              })), K;
            }
            return H;
          }),
          { propertyIsArray: L.isFrame }
        );
        continue;
      }
      if (Q === "@type") {
        n(z) && (z = Object.fromEntries(Object.entries(z).map(([H, K]) => [
          p(M, H, { vocab: !0 }),
          y(K).map(
            (W) => p(
              M,
              W,
              { base: !0, vocab: !0 },
              { ...L, typeExpansion: !0 }
            )
          )
        ]))), l(z, L.isFrame), v(
          F,
          "@type",
          y(z).map((H) => {
            if (o(H)) {
              const K = p(
                M,
                H,
                { base: !0, vocab: !0 },
                { ...L, typeExpansion: !0 }
              );
              return K !== "@json" && !x(K) && L.eventHandler && m({
                event: {
                  type: ["JsonLdEvent"],
                  code: "relative @type reference",
                  level: "warning",
                  message: "Relative @type reference found.",
                  details: {
                    type: H
                  }
                },
                options: L
              }), K;
            }
            return H;
          }),
          { propertyIsArray: !!L.isFrame }
        );
        continue;
      }
      if (Q === "@included" && w(P, 1.1)) {
        const H = y(await I.expand({
          activeCtx: P,
          activeProperty: C,
          element: z,
          options: L
        }));
        if (!H.every((K) => u(K)))
          throw new e(
            "Invalid JSON-LD syntax; values of @included must expand to node objects.",
            "jsonld.SyntaxError",
            { code: "invalid @included value", value: z }
          );
        v(
          F,
          "@included",
          H,
          { propertyIsArray: !0 }
        );
        continue;
      }
      if (Q === "@graph" && !(n(z) || t(z)))
        throw new e(
          'Invalid JSON-LD syntax; "@graph" value must not be an object or an array.',
          "jsonld.SyntaxError",
          { code: "invalid @graph value", value: z }
        );
      if (Q === "@value") {
        $ = z, q && w(P, 1.1) ? F["@value"] = z : v(
          F,
          "@value",
          z,
          { propertyIsArray: L.isFrame }
        );
        continue;
      }
      if (Q === "@language") {
        if (z === null)
          continue;
        if (!o(z) && !L.isFrame)
          throw new e(
            'Invalid JSON-LD syntax; "@language" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid language-tagged string", value: z }
          );
        z = y(z).map((H) => o(H) ? H.toLowerCase() : H);
        for (const H of z)
          o(H) && !H.match(b) && L.eventHandler && m({
            event: {
              type: ["JsonLdEvent"],
              code: "invalid @language value",
              level: "warning",
              message: "@language value must be valid BCP47.",
              details: {
                language: H
              }
            },
            options: L
          });
        v(
          F,
          "@language",
          z,
          { propertyIsArray: L.isFrame }
        );
        continue;
      }
      if (Q === "@direction") {
        if (!o(z) && !L.isFrame)
          throw new e(
            'Invalid JSON-LD syntax; "@direction" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid base direction", value: z }
          );
        z = y(z);
        for (const H of z)
          if (o(H) && H !== "ltr" && H !== "rtl")
            throw new e(
              'Invalid JSON-LD syntax; "@direction" must be "ltr" or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", value: z }
            );
        v(
          F,
          "@direction",
          z,
          { propertyIsArray: L.isFrame }
        );
        continue;
      }
      if (Q === "@index") {
        if (!o(z))
          throw new e(
            'Invalid JSON-LD syntax; "@index" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid @index value", value: z }
          );
        v(F, "@index", z);
        continue;
      }
      if (Q === "@reverse") {
        if (!n(z))
          throw new e(
            'Invalid JSON-LD syntax; "@reverse" value must be an object.',
            "jsonld.SyntaxError",
            { code: "invalid @reverse value", value: z }
          );
        if (Z = await I.expand({
          activeCtx: P,
          activeProperty: "@reverse",
          element: z,
          options: L
        }), "@reverse" in Z)
          for (const K in Z["@reverse"])
            v(
              F,
              K,
              Z["@reverse"][K],
              { propertyIsArray: !0 }
            );
        let H = F["@reverse"] || null;
        for (const K in Z) {
          if (K === "@reverse")
            continue;
          H === null && (H = F["@reverse"] = {}), v(H, K, [], { propertyIsArray: !0 });
          const W = Z[K];
          for (let ee = 0; ee < W.length; ++ee) {
            const ie = W[ee];
            if (a(ie) || s(ie))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: Z }
              );
            v(H, K, ie, { propertyIsArray: !0 });
          }
        }
        continue;
      }
      if (Q === "@nest") {
        N.push(T);
        continue;
      }
      let J = P;
      const V = g(P, T, "@context");
      i(V) || (J = await h({
        activeCtx: P,
        localCtx: V,
        propagate: !0,
        overrideProtected: !0,
        options: L
      }));
      const B = g(P, T, "@container") || [];
      if (B.includes("@language") && n(z)) {
        const H = g(J, T, "@direction");
        Z = E(J, z, H, L);
      } else if (B.includes("@index") && n(z)) {
        const H = B.includes("@graph"), K = g(J, T, "@index") || "@index", W = K !== "@index" && p(P, K, { vocab: !0 }, L);
        Z = await O({
          activeCtx: J,
          options: L,
          activeProperty: T,
          value: z,
          asGraph: H,
          indexKey: K,
          propertyIndex: W
        });
      } else if (B.includes("@id") && n(z)) {
        const H = B.includes("@graph");
        Z = await O({
          activeCtx: J,
          options: L,
          activeProperty: T,
          value: z,
          asGraph: H,
          indexKey: "@id"
        });
      } else if (B.includes("@type") && n(z))
        Z = await O({
          // since container is `@type`, revert type scoped context when expanding
          activeCtx: J.revertToPreviousContext(),
          options: L,
          activeProperty: T,
          value: z,
          asGraph: !1,
          indexKey: "@type"
        });
      else {
        const H = Q === "@list";
        if (H || Q === "@set") {
          let K = C;
          H && D === "@graph" && (K = null), Z = await I.expand({
            activeCtx: J,
            activeProperty: K,
            element: z,
            options: L,
            insideList: H
          });
        } else g(P, T, "@type") === "@json" ? Z = {
          "@type": "@json",
          "@value": z
        } : Z = await I.expand({
          activeCtx: J,
          activeProperty: T,
          element: z,
          options: L,
          insideList: !1
        });
      }
      if (!(Z === null && Q !== "@value")) {
        if (Q !== "@list" && !s(Z) && B.includes("@list") && (Z = { "@list": y(Z) }), B.includes("@graph") && !B.some((H) => H === "@id" || H === "@index")) {
          if (Z = y(Z), L.isFrame || (Z = Z.filter((H) => {
            const K = Object.keys(H).length;
            return A({ value: H, count: K, options: L }) !== null;
          })), Z.length === 0)
            continue;
          Z = Z.map((H) => ({ "@graph": y(H) }));
        }
        if (J.mappings.has(T) && J.mappings.get(T).reverse) {
          const H = F["@reverse"] = F["@reverse"] || {};
          Z = y(Z);
          for (let K = 0; K < Z.length; ++K) {
            const W = Z[K];
            if (a(W) || s(W))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: Z }
              );
            v(H, Q, W, { propertyIsArray: !0 });
          }
          continue;
        }
        v(F, Q, Z, {
          propertyIsArray: !0
        });
      }
    }
    if ("@value" in F && !(F["@type"] === "@json" && w(P, 1.1))) {
      if ((n($) || t($)) && !L.isFrame)
        throw new e(
          'Invalid JSON-LD syntax; "@value" value must not be an object or an array.',
          "jsonld.SyntaxError",
          { code: "invalid value object value", value: $ }
        );
    }
    for (const T of N) {
      const z = t(_[T]) ? _[T] : [_[T]];
      for (const Z of z) {
        if (!n(Z) || Object.keys(Z).some((Q) => p(P, Q, { vocab: !0 }, L) === "@value"))
          throw new e(
            "Invalid JSON-LD syntax; nested value must be a node object.",
            "jsonld.SyntaxError",
            { code: "invalid @nest value", value: Z }
          );
        await R({
          activeCtx: P,
          activeProperty: C,
          expandedActiveProperty: D,
          element: Z,
          expandedParent: F,
          options: L,
          insideList: G,
          typeScopedContext: M,
          typeKey: k
        });
      }
    }
  }
  function j({ activeCtx: P, activeProperty: C, value: D, options: _ }) {
    if (D == null)
      return null;
    const F = p(
      P,
      C,
      { vocab: !0 },
      _
    );
    if (F === "@id")
      return p(P, D, { base: !0 }, _);
    if (F === "@type")
      return p(
        P,
        D,
        { vocab: !0, base: !0 },
        { ..._, typeExpansion: !0 }
      );
    const L = g(P, C, "@type");
    if ((L === "@id" || F === "@graph") && o(D)) {
      const k = p(P, D, { base: !0 }, _);
      return k === null && D.match(S) && _.eventHandler && m({
        event: {
          type: ["JsonLdEvent"],
          code: "reserved @id value",
          level: "warning",
          message: "Reserved @id found.",
          details: {
            id: C
          }
        },
        options: _
      }), { "@id": k };
    }
    if (L === "@vocab" && o(D))
      return {
        "@id": p(P, D, { vocab: !0, base: !0 }, _)
      };
    if (f(F))
      return D;
    const G = {};
    if (L && !["@id", "@vocab", "@none"].includes(L))
      G["@type"] = L;
    else if (o(D)) {
      const k = g(P, C, "@language");
      k !== null && (G["@language"] = k);
      const M = g(P, C, "@direction");
      M !== null && (G["@direction"] = M);
    }
    return ["boolean", "number", "string"].includes(typeof D) || (D = D.toString()), G["@value"] = D, G;
  }
  function E(P, C, D, _) {
    const F = [], L = Object.keys(C).sort();
    for (const G of L) {
      const k = p(P, G, { vocab: !0 }, _);
      let M = C[G];
      t(M) || (M = [M]);
      for (const U of M) {
        if (U === null)
          continue;
        if (!o(U))
          throw new e(
            "Invalid JSON-LD syntax; language map values must be strings.",
            "jsonld.SyntaxError",
            { code: "invalid language map value", languageMap: C }
          );
        const N = { "@value": U };
        k !== "@none" && (G.match(b) || _.eventHandler && m({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: G
            }
          },
          options: _
        }), N["@language"] = G.toLowerCase()), D && (N["@direction"] = D), F.push(N);
      }
    }
    return F;
  }
  async function O({
    activeCtx: P,
    options: C,
    activeProperty: D,
    value: _,
    asGraph: F,
    indexKey: L,
    propertyIndex: G
  }) {
    const k = [], M = Object.keys(_).sort(), U = L === "@type";
    for (let N of M) {
      if (U) {
        const T = g(P, N, "@context");
        i(T) || (P = await h({
          activeCtx: P,
          localCtx: T,
          propagate: !1,
          options: C
        }));
      }
      let $ = _[N];
      t($) || ($ = [$]), $ = await I.expand({
        activeCtx: P,
        activeProperty: D,
        element: $,
        options: C,
        insideList: !1,
        insideIndex: !0
      });
      let q;
      G ? N === "@none" ? q = "@none" : q = j(
        { activeCtx: P, activeProperty: L, value: N, options: C }
      ) : q = p(P, N, { vocab: !0 }, C), L === "@id" ? N = p(P, N, { base: !0 }, C) : U && (N = q);
      for (let T of $) {
        if (F && !c(T) && (T = { "@graph": [T] }), L === "@type")
          q === "@none" || (T["@type"] ? T["@type"] = [N].concat(T["@type"]) : T["@type"] = [N]);
        else {
          if (a(T) && !["@language", "@type", "@index"].includes(L))
            throw new e(
              `Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${L}".`,
              "jsonld.SyntaxError",
              { code: "invalid value object", value: T }
            );
          G ? q !== "@none" && v(T, G, q, {
            propertyIsArray: !0,
            prependValue: !0
          }) : q !== "@none" && !(L in T) && (T[L] = N);
        }
        k.push(T);
      }
    }
    return k;
  }
  return hs;
}
var ms, Wc;
function li() {
  if (Wc) return ms;
  Wc = 1;
  const { isKeyword: e } = Bt(), t = xt(), n = Oe(), r = Fe(), o = Be(), i = {};
  return ms = i, i.createMergedNodeMap = (s, a) => {
    a = a || {};
    const c = a.issuer || new r.IdentifierIssuer("_:b"), u = { "@default": {} };
    return i.createNodeMap(s, u, "@default", c), i.mergeNodeMaps(u);
  }, i.createNodeMap = (s, a, c, u, p, g) => {
    if (n.isArray(s)) {
      for (const x of s)
        i.createNodeMap(x, a, c, u, void 0, g);
      return;
    }
    if (!n.isObject(s)) {
      g && g.push(s);
      return;
    }
    if (t.isValue(s)) {
      if ("@type" in s) {
        let x = s["@type"];
        x.indexOf("_:") === 0 && (s["@type"] = x = u.getId(x));
      }
      g && g.push(s);
      return;
    } else if (g && t.isList(s)) {
      const x = [];
      i.createNodeMap(s["@list"], a, c, u, p, x), g.push({ "@list": x });
      return;
    }
    if ("@type" in s) {
      const x = s["@type"];
      for (const b of x)
        b.indexOf("_:") === 0 && u.getId(b);
    }
    n.isUndefined(p) && (p = t.isBlankNode(s) ? u.getId(s["@id"]) : s["@id"]), g && g.push({ "@id": p });
    const f = a[c], h = f[p] = f[p] || {};
    h["@id"] = p;
    const w = Object.keys(s).sort();
    for (let x of w) {
      if (x === "@id")
        continue;
      if (x === "@reverse") {
        const S = { "@id": p }, v = s["@reverse"];
        for (const y in v) {
          const d = v[y];
          for (const l of d) {
            let m = l["@id"];
            t.isBlankNode(l) && (m = u.getId(m)), i.createNodeMap(l, a, c, u, m), r.addValue(
              f[m],
              y,
              S,
              { propertyIsArray: !0, allowDuplicate: !1 }
            );
          }
        }
        continue;
      }
      if (x === "@graph") {
        p in a || (a[p] = {}), i.createNodeMap(s[x], a, p, u);
        continue;
      }
      if (x === "@included") {
        i.createNodeMap(s[x], a, c, u);
        continue;
      }
      if (x !== "@type" && e(x)) {
        if (x === "@index" && x in h && (s[x] !== h[x] || s[x]["@id"] !== h[x]["@id"]))
          throw new o(
            "Invalid JSON-LD syntax; conflicting @index property detected.",
            "jsonld.SyntaxError",
            { code: "conflicting indexes", subject: h }
          );
        h[x] = s[x];
        continue;
      }
      const b = s[x];
      if (x.indexOf("_:") === 0 && (x = u.getId(x)), b.length === 0) {
        r.addValue(h, x, [], { propertyIsArray: !0 });
        continue;
      }
      for (let S of b)
        if (x === "@type" && (S = S.indexOf("_:") === 0 ? u.getId(S) : S), t.isSubject(S) || t.isSubjectReference(S)) {
          if ("@id" in S && !S["@id"])
            continue;
          const v = t.isBlankNode(S) ? u.getId(S["@id"]) : S["@id"];
          r.addValue(
            h,
            x,
            { "@id": v },
            { propertyIsArray: !0, allowDuplicate: !1 }
          ), i.createNodeMap(S, a, c, u, v);
        } else if (t.isValue(S))
          r.addValue(
            h,
            x,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        else if (t.isList(S)) {
          const v = [];
          i.createNodeMap(S["@list"], a, c, u, p, v), S = { "@list": v }, r.addValue(
            h,
            x,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        } else
          i.createNodeMap(S, a, c, u, p), r.addValue(
            h,
            x,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
    }
  }, i.mergeNodeMapGraphs = (s) => {
    const a = {};
    for (const c of Object.keys(s).sort())
      for (const u of Object.keys(s[c]).sort()) {
        const p = s[c][u];
        u in a || (a[u] = { "@id": u });
        const g = a[u];
        for (const f of Object.keys(p).sort())
          if (e(f) && f !== "@type")
            g[f] = r.clone(p[f]);
          else
            for (const h of p[f])
              r.addValue(
                g,
                f,
                r.clone(h),
                { propertyIsArray: !0, allowDuplicate: !1 }
              );
      }
    return a;
  }, i.mergeNodeMaps = (s) => {
    const a = s["@default"], c = Object.keys(s).sort();
    for (const u of c) {
      if (u === "@default")
        continue;
      const p = s[u];
      let g = a[u];
      g ? "@graph" in g || (g["@graph"] = []) : a[u] = g = {
        "@id": u,
        "@graph": []
      };
      const f = g["@graph"];
      for (const h of Object.keys(p).sort()) {
        const w = p[h];
        t.isSubjectReference(w) || f.push(w);
      }
    }
    return a;
  }, ms;
}
var ys, Xc;
function Oh() {
  if (Xc) return ys;
  Xc = 1;
  const {
    isSubjectReference: e
  } = xt(), {
    createMergedNodeMap: t
  } = li(), n = {};
  return ys = n, n.flatten = (r) => {
    const o = t(r), i = [], s = Object.keys(o).sort();
    for (let a = 0; a < s.length; ++a) {
      const c = o[s[a]];
      e(c) || i.push(c);
    }
    return i;
  }, ys;
}
var gs, Yc;
function Lh() {
  if (Yc) return gs;
  Yc = 1;
  const e = Be(), t = xt(), n = Oe(), {
    REGEX_BCP47: r,
    addValue: o
  } = Fe(), {
    handleEvent: i
  } = On(), {
    // RDF,
    RDF_LIST: s,
    RDF_FIRST: a,
    RDF_REST: c,
    RDF_NIL: u,
    RDF_TYPE: p,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: g,
    // RDF_OBJECT,
    // RDF_LANGSTRING,
    // XSD,
    XSD_BOOLEAN: f,
    XSD_DOUBLE: h,
    XSD_INTEGER: w,
    XSD_STRING: x
  } = fa(), b = {};
  gs = b, b.fromRDF = async (v, y) => {
    const {
      useRdfType: d = !1,
      useNativeTypes: l = !1,
      rdfDirection: m = null
    } = y, I = {}, A = { "@default": I }, R = {};
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
    for (const O of v) {
      const P = O.graph.termType === "DefaultGraph" ? "@default" : O.graph.value;
      P in A || (A[P] = {}), P !== "@default" && !(P in I) && (I[P] = { "@id": P });
      const C = A[P], D = O.subject.value, _ = O.predicate.value, F = O.object;
      D in C || (C[D] = { "@id": D });
      const L = C[D], G = F.termType.endsWith("Node");
      if (G && !(F.value in C) && (C[F.value] = { "@id": F.value }), _ === p && !d && G) {
        o(L, "@type", F.value, { propertyIsArray: !0 });
        continue;
      }
      const k = S(F, l, m, y);
      if (o(L, _, k, { propertyIsArray: !0 }), G)
        if (F.value === u) {
          const M = C[F.value];
          "usages" in M || (M.usages = []), M.usages.push({
            node: L,
            property: _,
            value: k
          });
        } else F.value in R ? R[F.value] = !1 : R[F.value] = {
          node: L,
          property: _,
          value: k
        };
    }
    for (const O in A) {
      const P = A[O];
      if (!(u in P))
        continue;
      const C = P[u];
      if (C.usages) {
        for (let D of C.usages) {
          let _ = D.node, F = D.property, L = D.value;
          const G = [], k = [];
          let M = Object.keys(_).length;
          for (; F === c && n.isObject(R[_["@id"]]) && n.isArray(_[a]) && _[a].length === 1 && n.isArray(_[c]) && _[c].length === 1 && (M === 3 || M === 4 && n.isArray(_["@type"]) && _["@type"].length === 1 && _["@type"][0] === s) && (G.push(_[a][0]), k.push(_["@id"]), D = R[_["@id"]], _ = D.node, F = D.property, L = D.value, M = Object.keys(_).length, !!t.isBlankNode(_)); )
            ;
          delete L["@id"], L["@list"] = G.reverse();
          for (const U of k)
            delete P[U];
        }
        delete C.usages;
      }
    }
    const j = [], E = Object.keys(I).sort();
    for (const O of E) {
      const P = I[O];
      if (O in A) {
        const C = P["@graph"] = [], D = A[O], _ = Object.keys(D).sort();
        for (const F of _) {
          const L = D[F];
          t.isSubjectReference(L) || C.push(L);
        }
      }
      t.isSubjectReference(P) || j.push(P);
    }
    return j;
  };
  function S(v, y, d, l) {
    if (v.termType.endsWith("Node"))
      return { "@id": v.value };
    const m = { "@value": v.value };
    if (v.language)
      v.language.match(r) || l.eventHandler && i({
        event: {
          type: ["JsonLdEvent"],
          code: "invalid @language value",
          level: "warning",
          message: "@language value must be valid BCP47.",
          details: {
            language: v.language
          }
        },
        options: l
      }), m["@language"] = v.language;
    else {
      let I = v.datatype.value;
      if (I || (I = x), I === g) {
        I = "@json";
        try {
          m["@value"] = JSON.parse(m["@value"]);
        } catch (A) {
          throw new e(
            "JSON literal could not be parsed.",
            "jsonld.InvalidJsonLiteral",
            { code: "invalid JSON literal", value: m["@value"], cause: A }
          );
        }
      }
      if (y) {
        if (I === f)
          m["@value"] === "true" ? m["@value"] = !0 : m["@value"] === "false" && (m["@value"] = !1);
        else if (n.isNumeric(m["@value"]))
          if (I === w) {
            const A = parseInt(m["@value"], 10);
            A.toFixed(0) === m["@value"] && (m["@value"] = A);
          } else I === h && (m["@value"] = parseFloat(m["@value"]));
        [f, w, h, x].includes(I) || (m["@type"] = I);
      } else if (d === "i18n-datatype" && I.startsWith("https://www.w3.org/ns/i18n#")) {
        const [, A, R] = I.split(/[#_]/);
        A.length > 0 && (m["@language"] = A, A.match(r) || l.eventHandler && i({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: A
            }
          },
          options: l
        })), m["@direction"] = R;
      } else I !== x && (m["@type"] = I);
    }
    return m;
  }
  return gs;
}
var vs, ed;
function Nh() {
  return ed || (ed = 1, vs = function e(t) {
    return t === null || typeof t != "object" || t.toJSON != null ? JSON.stringify(t) : Array.isArray(t) ? "[" + t.reduce((n, r, o) => {
      const i = o === 0 ? "" : ",", s = r === void 0 || typeof r == "symbol" ? null : r;
      return n + i + e(s);
    }, "") + "]" : "{" + Object.keys(t).sort().reduce((n, r, o) => {
      if (t[r] === void 0 || typeof t[r] == "symbol")
        return n;
      const i = n.length === 0 ? "" : ",";
      return n + i + e(r) + ":" + e(t[r]);
    }, "") + "}";
  }), vs;
}
var bs, td;
function Dh() {
  if (td) return bs;
  td = 1;
  const { createNodeMap: e } = li(), { isKeyword: t } = Bt(), n = xt(), r = Nh(), o = Be(), i = Oe(), s = Fe(), {
    handleEvent: a
  } = On(), {
    // RDF,
    // RDF_LIST,
    RDF_FIRST: c,
    RDF_REST: u,
    RDF_NIL: p,
    RDF_TYPE: g,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: f,
    // RDF_OBJECT,
    RDF_LANGSTRING: h,
    // XSD,
    XSD_BOOLEAN: w,
    XSD_DOUBLE: x,
    XSD_INTEGER: b,
    XSD_STRING: S
  } = fa(), {
    isAbsolute: v
  } = Mt(), y = {};
  bs = y, y.toRDF = (I, A) => {
    const R = new s.IdentifierIssuer("_:b"), j = { "@default": {} };
    e(I, j, "@default", R);
    const E = [], O = Object.keys(j).sort();
    for (const P of O) {
      let C;
      if (P === "@default")
        C = { termType: "DefaultGraph", value: "" };
      else if (v(P))
        P.startsWith("_:") ? C = { termType: "BlankNode" } : C = { termType: "NamedNode" }, C.value = P;
      else {
        A.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "relative graph reference",
            level: "warning",
            message: "Relative graph reference found.",
            details: {
              graph: P
            }
          },
          options: A
        });
        continue;
      }
      d(E, j[P], C, R, A);
    }
    return E;
  };
  function d(I, A, R, j, E) {
    const O = Object.keys(A).sort();
    for (const P of O) {
      const C = A[P], D = Object.keys(C).sort();
      for (let _ of D) {
        const F = C[_];
        if (_ === "@type")
          _ = g;
        else if (t(_))
          continue;
        for (const L of F) {
          const G = {
            termType: P.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: P
          };
          if (!v(P)) {
            E.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "relative subject reference",
                level: "warning",
                message: "Relative subject reference found.",
                details: {
                  subject: P
                }
              },
              options: E
            });
            continue;
          }
          const k = {
            termType: _.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: _
          };
          if (!v(_)) {
            E.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "relative predicate reference",
                level: "warning",
                message: "Relative predicate reference found.",
                details: {
                  predicate: _
                }
              },
              options: E
            });
            continue;
          }
          if (k.termType === "BlankNode" && !E.produceGeneralizedRdf) {
            E.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "blank node predicate",
                level: "warning",
                message: "Dropping blank node predicate.",
                details: {
                  // FIXME: add better issuer API to get reverse mapping
                  property: j.getOldIds().find((U) => j.getId(U) === _)
                }
              },
              options: E
            });
            continue;
          }
          const M = m(
            L,
            j,
            I,
            R,
            E.rdfDirection,
            E
          );
          M && I.push({
            subject: G,
            predicate: k,
            object: M,
            graph: R
          });
        }
      }
    }
  }
  function l(I, A, R, j, E, O) {
    const P = { termType: "NamedNode", value: c }, C = { termType: "NamedNode", value: u }, D = { termType: "NamedNode", value: p }, _ = I.pop(), F = _ ? { termType: "BlankNode", value: A.getId() } : D;
    let L = F;
    for (const G of I) {
      const k = m(
        G,
        A,
        R,
        j,
        E,
        O
      ), M = { termType: "BlankNode", value: A.getId() };
      R.push({
        subject: L,
        predicate: P,
        object: k,
        graph: j
      }), R.push({
        subject: L,
        predicate: C,
        object: M,
        graph: j
      }), L = M;
    }
    if (_) {
      const G = m(
        _,
        A,
        R,
        j,
        E,
        O
      );
      R.push({
        subject: L,
        predicate: P,
        object: G,
        graph: j
      }), R.push({
        subject: L,
        predicate: C,
        object: D,
        graph: j
      });
    }
    return F;
  }
  function m(I, A, R, j, E, O) {
    const P = {};
    if (n.isValue(I)) {
      P.termType = "Literal", P.value = void 0, P.datatype = {
        termType: "NamedNode"
      };
      let C = I["@value"];
      const D = I["@type"] || null;
      if (D === "@json")
        P.value = r(C), P.datatype.value = f;
      else if (i.isBoolean(C))
        P.value = C.toString(), P.datatype.value = D || w;
      else if (i.isDouble(C) || D === x)
        i.isDouble(C) || (C = parseFloat(C)), P.value = C.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), P.datatype.value = D || x;
      else if (i.isNumber(C))
        P.value = C.toFixed(0), P.datatype.value = D || b;
      else if ("@direction" in I && E === "i18n-datatype") {
        const _ = (I["@language"] || "").toLowerCase(), F = I["@direction"], L = `https://www.w3.org/ns/i18n#${_}_${F}`;
        P.datatype.value = L, P.value = C;
      } else {
        if ("@direction" in I && E === "compound-literal")
          throw new o(
            "Unsupported rdfDirection value.",
            "jsonld.InvalidRdfDirection",
            { value: E }
          );
        if ("@direction" in I && E)
          throw new o(
            "Unknown rdfDirection value.",
            "jsonld.InvalidRdfDirection",
            { value: E }
          );
        "@language" in I ? ("@direction" in I && !E && O.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: P.value
            }
          },
          options: O
        }), P.value = C, P.datatype.value = D || h, P.language = I["@language"]) : ("@direction" in I && !E && O.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: P.value
            }
          },
          options: O
        }), P.value = C, P.datatype.value = D || S);
      }
    } else if (n.isList(I)) {
      const C = l(
        I["@list"],
        A,
        R,
        j,
        E,
        O
      );
      P.termType = C.termType, P.value = C.value;
    } else {
      const C = i.isObject(I) ? I["@id"] : I;
      P.termType = C.startsWith("_:") ? "BlankNode" : "NamedNode", P.value = C;
    }
    return P.termType === "NamedNode" && !v(P.value) ? (O.eventHandler && a({
      event: {
        type: ["JsonLdEvent"],
        code: "relative object reference",
        level: "warning",
        message: "Relative object reference found.",
        details: {
          object: P.value
        }
      },
      options: O
    }), null) : P;
  }
  return bs;
}
var ws, nd;
function zh() {
  if (nd) return ws;
  nd = 1;
  const { isKeyword: e } = Bt(), t = xt(), n = Oe(), r = Fe(), o = Mt(), i = Be(), {
    createNodeMap: s,
    mergeNodeMapGraphs: a
  } = li(), c = {};
  ws = c, c.frameMergedOrDefault = (d, l, m) => {
    const I = {
      options: m,
      embedded: !1,
      graph: "@default",
      graphMap: { "@default": {} },
      subjectStack: [],
      link: {},
      bnodeMap: {}
    }, A = new r.IdentifierIssuer("_:b");
    s(d, I.graphMap, "@default", A), m.merged && (I.graphMap["@merged"] = a(I.graphMap), I.graph = "@merged"), I.subjects = I.graphMap[I.graph];
    const R = [];
    c.frame(I, Object.keys(I.subjects).sort(), l, R), m.pruneBlankNodeIdentifiers && (m.bnodesToClear = Object.keys(I.bnodeMap).filter((j) => I.bnodeMap[j].length === 1));
    // remove @preserve from results
    return m.link = {}, b(R, m);
  }, c.frame = (d, l, m, I, A = null) => {
    f(m), m = m[0];
    const R = d.options, j = {
      embed: g(m, R, "embed"),
      explicit: g(m, R, "explicit"),
      requireAll: g(m, R, "requireAll")
    };
    d.link.hasOwnProperty(d.graph) || (d.link[d.graph] = {});
    const E = d.link[d.graph], O = h(d, l, m, j), P = Object.keys(O).sort();
    for (const C of P) {
      const D = O[C];
      if (A === null ? d.uniqueEmbeds = { [d.graph]: {} } : d.uniqueEmbeds[d.graph] = d.uniqueEmbeds[d.graph] || {}, j.embed === "@link" && C in E) {
        S(I, A, E[C]);
        continue;
      }
      const _ = { "@id": C };
      if (C.indexOf("_:") === 0 && r.addValue(d.bnodeMap, C, _, { propertyIsArray: !0 }), E[C] = _, (j.embed === "@first" || j.embed === "@last") && d.is11)
        throw new i(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: m }
        );
      if (!(!d.embedded && d.uniqueEmbeds[d.graph].hasOwnProperty(C))) {
        if (d.embedded && (j.embed === "@never" || p(D, d.graph, d.subjectStack))) {
          S(I, A, _);
          continue;
        }
        if (d.embedded && (j.embed == "@first" || j.embed == "@once") && d.uniqueEmbeds[d.graph].hasOwnProperty(C)) {
          S(I, A, _);
          continue;
        }
        if (j.embed === "@last" && C in d.uniqueEmbeds[d.graph] && x(d, C), d.uniqueEmbeds[d.graph][C] = { parent: I, property: A }, d.subjectStack.push({ subject: D, graph: d.graph }), C in d.graphMap) {
          let F = !1, L = null;
          "@graph" in m ? (L = m["@graph"][0], F = !(C === "@merged" || C === "@default"), n.isObject(L) || (L = {})) : (F = d.graph !== "@merged", L = {}), F && c.frame(
            { ...d, graph: C, embedded: !1 },
            Object.keys(d.graphMap[C]).sort(),
            [L],
            _,
            "@graph"
          );
        }
        "@included" in m && c.frame(
          { ...d, embedded: !1 },
          l,
          m["@included"],
          _,
          "@included"
        );
        for (const F of Object.keys(D).sort()) {
          if (e(F)) {
            if (_[F] = r.clone(D[F]), F === "@type")
              for (const L of D["@type"])
                L.indexOf("_:") === 0 && r.addValue(
                  d.bnodeMap,
                  L,
                  _,
                  { propertyIsArray: !0 }
                );
            continue;
          }
          if (!(j.explicit && !(F in m)))
            for (const L of D[F]) {
              const G = F in m ? m[F] : u(j);
              if (t.isList(L)) {
                const k = m[F] && m[F][0] && m[F][0]["@list"] ? m[F][0]["@list"] : u(j), M = { "@list": [] };
                S(_, F, M);
                const U = L["@list"];
                for (const N of U)
                  t.isSubjectReference(N) ? c.frame(
                    { ...d, embedded: !0 },
                    [N["@id"]],
                    k,
                    M,
                    "@list"
                  ) : S(M, "@list", r.clone(N));
              } else t.isSubjectReference(L) ? c.frame(
                { ...d, embedded: !0 },
                [L["@id"]],
                G,
                _,
                F
              ) : y(G[0], L) && S(_, F, r.clone(L));
            }
        }
        for (const F of Object.keys(m).sort()) {
          if (F === "@type") {
            if (!n.isObject(m[F][0]) || !("@default" in m[F][0]))
              continue;
          } else if (e(F))
            continue;
          const L = m[F][0] || {};
          if (!g(L, R, "omitDefault") && !(F in _)) {
            let k = "@null";
            "@default" in L && (k = r.clone(L["@default"])), n.isArray(k) || (k = [k]), _[F] = [{ "@preserve": k }];
          }
        }
        for (const F of Object.keys(m["@reverse"] || {}).sort()) {
          const L = m["@reverse"][F];
          for (const G of Object.keys(d.subjects))
            r.getValues(d.subjects[G], F).some((M) => M["@id"] === C) && (_["@reverse"] = _["@reverse"] || {}, r.addValue(
              _["@reverse"],
              F,
              [],
              { propertyIsArray: !0 }
            ), c.frame(
              { ...d, embedded: !0 },
              [G],
              L,
              _["@reverse"][F],
              A
            ));
        }
        S(I, A, _), d.subjectStack.pop();
      }
    }
  }, c.cleanupNull = (d, l) => {
    if (n.isArray(d))
      return d.map((I) => c.cleanupNull(I, l)).filter((I) => I);
    if (d === "@null")
      return null;
    if (n.isObject(d)) {
      if ("@id" in d) {
        const m = d["@id"];
        if (l.link.hasOwnProperty(m)) {
          const I = l.link[m].indexOf(d);
          if (I !== -1)
            return l.link[m][I];
          l.link[m].push(d);
        } else
          l.link[m] = [d];
      }
      for (const m in d)
        d[m] = c.cleanupNull(d[m], l);
    }
    return d;
  };
  function u(d) {
    const l = {};
    for (const m in d)
      d[m] !== void 0 && (l["@" + m] = [d[m]]);
    return [l];
  }
  function p(d, l, m) {
    for (let I = m.length - 1; I >= 0; --I) {
      const A = m[I];
      if (A.graph === l && A.subject["@id"] === d["@id"])
        return !0;
    }
    return !1;
  }
  function g(d, l, m) {
    const I = "@" + m;
    let A = I in d ? d[I][0] : l[m];
    if (m === "embed") {
      if (A === !0)
        A = "@once";
      else if (A === !1)
        A = "@never";
      else if (A !== "@always" && A !== "@never" && A !== "@link" && A !== "@first" && A !== "@last" && A !== "@once")
        throw new i(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: d }
        );
    }
    return A;
  }
  function f(d) {
    if (!n.isArray(d) || d.length !== 1 || !n.isObject(d[0]))
      throw new i(
        "Invalid JSON-LD syntax; a JSON-LD frame must be a single object.",
        "jsonld.SyntaxError",
        { frame: d }
      );
    if ("@id" in d[0]) {
      for (const l of r.asArray(d[0]["@id"]))
        if (!(n.isObject(l) || o.isAbsolute(l)) || n.isString(l) && l.indexOf("_:") === 0)
          throw new i(
            "Invalid JSON-LD syntax; invalid @id in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: d }
          );
    }
    if ("@type" in d[0]) {
      for (const l of r.asArray(d[0]["@type"]))
        if (!(n.isObject(l) || o.isAbsolute(l) || l === "@json") || n.isString(l) && l.indexOf("_:") === 0)
          throw new i(
            "Invalid JSON-LD syntax; invalid @type in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: d }
          );
    }
  }
  function h(d, l, m, I) {
    const A = {};
    for (const R of l) {
      const j = d.graphMap[d.graph][R];
      w(d, j, m, I) && (A[R] = j);
    }
    return A;
  }
  function w(d, l, m, I) {
    let A = !0, R = !1;
    for (const j in m) {
      let E = !1;
      const O = r.getValues(l, j), P = r.getValues(m, j).length === 0;
      if (j === "@id") {
        if (n.isEmptyObject(m["@id"][0] || {}) ? E = !0 : m["@id"].length >= 0 && (E = m["@id"].includes(O[0])), !I.requireAll)
          return E;
      } else if (j === "@type") {
        if (A = !1, P) {
          if (O.length > 0)
            return !1;
          E = !0;
        } else if (m["@type"].length === 1 && n.isEmptyObject(m["@type"][0]))
          E = O.length > 0;
        else
          for (const C of m["@type"])
            n.isObject(C) && "@default" in C ? E = !0 : E = E || O.some((D) => D === C);
        if (!I.requireAll)
          return E;
      } else {
        if (e(j))
          continue;
        {
          const C = r.getValues(m, j)[0];
          let D = !1;
          if (C && (f([C]), D = "@default" in C), A = !1, O.length === 0 && D)
            continue;
          if (O.length > 0 && P)
            return !1;
          if (C === void 0) {
            if (O.length > 0)
              return !1;
            E = !0;
          } else if (t.isList(C)) {
            const _ = C["@list"][0];
            if (t.isList(O[0])) {
              const F = O[0]["@list"];
              t.isValue(_) ? E = F.some((L) => y(_, L)) : (t.isSubject(_) || t.isSubjectReference(_)) && (E = F.some((L) => v(
                d,
                _,
                L,
                I
              )));
            }
          } else t.isValue(C) ? E = O.some((_) => y(C, _)) : t.isSubjectReference(C) ? E = O.some((_) => v(d, C, _, I)) : n.isObject(C) ? E = O.length > 0 : E = !1;
        }
      }
      if (!E && I.requireAll)
        return !1;
      R = R || E;
    }
    return A || R;
  }
  function x(d, l) {
    const m = d.uniqueEmbeds[d.graph], I = m[l], A = I.parent, R = I.property, j = { "@id": l };
    if (n.isArray(A)) {
      for (let O = 0; O < A.length; ++O)
        if (r.compareValues(A[O], j)) {
          A[O] = j;
          break;
        }
    } else {
      const O = n.isArray(A[R]);
      r.removeValue(A, R, j, { propertyIsArray: O }), r.addValue(A, R, j, { propertyIsArray: O });
    }
    const E = (O) => {
      const P = Object.keys(m);
      for (const C of P)
        C in m && n.isObject(m[C].parent) && m[C].parent["@id"] === O && (delete m[C], E(C));
    };
    E(l);
  }
  /**
   * Removes the @preserve keywords from expanded result of framing.
   *
   * @param input the framed, framed output.
   * @param options the framing options used.
   *
   * @return the resulting output.
   */
  function b(d, l) {
    if (n.isArray(d))
      return d.map((m) => b(m, l));
    if (n.isObject(d)) {
      // remove @preserve
      if ("@preserve" in d)
        return d["@preserve"][0];
      if (t.isValue(d))
        return d;
      if (t.isList(d))
        return d["@list"] = b(d["@list"], l), d;
      if ("@id" in d) {
        const m = d["@id"];
        if (l.link.hasOwnProperty(m)) {
          const I = l.link[m].indexOf(d);
          if (I !== -1)
            return l.link[m][I];
          l.link[m].push(d);
        } else
          l.link[m] = [d];
      }
      for (const m in d) {
        if (m === "@id" && l.bnodesToClear.includes(d[m])) {
          delete d["@id"];
          continue;
        }
        d[m] = b(d[m], l);
      }
    }
    return d;
  }
  function S(d, l, m) {
    n.isObject(d) ? r.addValue(d, l, m, { propertyIsArray: !0 }) : d.push(m);
  }
  function v(d, l, m, I) {
    if (!("@id" in m))
      return !1;
    const A = d.subjects[m["@id"]];
    return A && w(d, A, l, I);
  }
  function y(d, l) {
    const m = l["@value"], I = l["@type"], A = l["@language"], R = d["@value"] ? n.isArray(d["@value"]) ? d["@value"] : [d["@value"]] : [], j = d["@type"] ? n.isArray(d["@type"]) ? d["@type"] : [d["@type"]] : [], E = d["@language"] ? n.isArray(d["@language"]) ? d["@language"] : [d["@language"]] : [];
    return R.length === 0 && j.length === 0 && E.length === 0 ? !0 : !(!(R.includes(m) || n.isEmptyObject(R[0])) || !(!I && j.length === 0 || j.includes(I) || I && n.isEmptyObject(j[0])) || !(!A && E.length === 0 || E.includes(A) || A && n.isEmptyObject(E[0])));
  }
  return ws;
}
var xs, rd;
function Uh() {
  if (rd) return xs;
  rd = 1;
  const e = Be(), {
    isArray: t,
    isObject: n,
    isString: r,
    isUndefined: o
  } = Oe(), {
    isList: i,
    isValue: s,
    isGraph: a,
    isSimpleGraph: c,
    isSubjectReference: u
  } = xt(), {
    expandIri: p,
    getContextValue: g,
    isKeyword: f,
    process: h,
    processingMode: w
  } = Bt(), {
    removeBase: x,
    prependBase: b
  } = Mt(), {
    REGEX_KEYWORD: S,
    addValue: v,
    asArray: y,
    compareShortestLeast: d
  } = Fe(), l = {};
  xs = l, l.compact = async ({
    activeCtx: A,
    activeProperty: R = null,
    element: j,
    options: E = {}
  }) => {
    if (t(j)) {
      let P = [];
      for (let C = 0; C < j.length; ++C) {
        const D = await l.compact({
          activeCtx: A,
          activeProperty: R,
          element: j[C],
          options: E
        });
        D !== null && P.push(D);
      }
      return E.compactArrays && P.length === 1 && (g(
        A,
        R,
        "@container"
      ) || []).length === 0 && (P = P[0]), P;
    }
    const O = g(A, R, "@context");
    if (o(O) || (A = await h({
      activeCtx: A,
      localCtx: O,
      propagate: !0,
      overrideProtected: !0,
      options: E
    })), n(j)) {
      if (E.link && "@id" in j && E.link.hasOwnProperty(j["@id"])) {
        const k = E.link[j["@id"]];
        for (let M = 0; M < k.length; ++M)
          if (k[M].expanded === j)
            return k[M].compacted;
      }
      if (s(j) || u(j)) {
        const k = l.compactValue({ activeCtx: A, activeProperty: R, value: j, options: E });
        return E.link && u(j) && (E.link.hasOwnProperty(j["@id"]) || (E.link[j["@id"]] = []), E.link[j["@id"]].push({ expanded: j, compacted: k })), k;
      }
      if (i(j) && (g(
        A,
        R,
        "@container"
      ) || []).includes("@list"))
        return l.compact({
          activeCtx: A,
          activeProperty: R,
          element: j["@list"],
          options: E
        });
      const P = R === "@reverse", C = {}, D = A;
      !s(j) && !u(j) && (A = A.revertToPreviousContext());
      const _ = g(D, R, "@context");
      o(_) || (A = await h({
        activeCtx: A,
        localCtx: _,
        propagate: !0,
        overrideProtected: !0,
        options: E
      })), E.link && "@id" in j && (E.link.hasOwnProperty(j["@id"]) || (E.link[j["@id"]] = []), E.link[j["@id"]].push({ expanded: j, compacted: C }));
      let F = j["@type"] || [];
      F.length > 1 && (F = Array.from(F).sort());
      const L = A;
      for (const k of F) {
        const M = l.compactIri(
          { activeCtx: L, iri: k, relativeTo: { vocab: !0 } }
        ), U = g(D, M, "@context");
        o(U) || (A = await h({
          activeCtx: A,
          localCtx: U,
          options: E,
          propagate: !1
        }));
      }
      const G = Object.keys(j).sort();
      for (const k of G) {
        const M = j[k];
        if (k === "@id") {
          let U = y(M).map(
            ($) => l.compactIri({
              activeCtx: A,
              iri: $,
              relativeTo: { vocab: !1 },
              base: E.base
            })
          );
          U.length === 1 && (U = U[0]);
          const N = l.compactIri(
            { activeCtx: A, iri: "@id", relativeTo: { vocab: !0 } }
          );
          C[N] = U;
          continue;
        }
        if (k === "@type") {
          let U = y(M).map(
            (z) => l.compactIri({
              activeCtx: D,
              iri: z,
              relativeTo: { vocab: !0 }
            })
          );
          U.length === 1 && (U = U[0]);
          const N = l.compactIri(
            { activeCtx: A, iri: "@type", relativeTo: { vocab: !0 } }
          ), T = (g(
            A,
            N,
            "@container"
          ) || []).includes("@set") && w(A, 1.1) || t(U) && M.length === 0;
          v(C, N, U, { propertyIsArray: T });
          continue;
        }
        if (k === "@reverse") {
          const U = await l.compact({
            activeCtx: A,
            activeProperty: "@reverse",
            element: M,
            options: E
          });
          for (const N in U)
            if (A.mappings.has(N) && A.mappings.get(N).reverse) {
              const $ = U[N], T = (g(
                A,
                N,
                "@container"
              ) || []).includes("@set") || !E.compactArrays;
              v(
                C,
                N,
                $,
                { propertyIsArray: T }
              ), delete U[N];
            }
          if (Object.keys(U).length > 0) {
            const N = l.compactIri({
              activeCtx: A,
              iri: k,
              relativeTo: { vocab: !0 }
            });
            v(C, N, U);
          }
          continue;
        }
        if (k === "@preserve") {
          const U = await l.compact({
            activeCtx: A,
            activeProperty: R,
            element: M,
            options: E
          });
          t(U) && U.length === 0 || v(C, k, U);
          continue;
        }
        if (k === "@index") {
          if ((g(
            A,
            R,
            "@container"
          ) || []).includes("@index"))
            continue;
          const N = l.compactIri({
            activeCtx: A,
            iri: k,
            relativeTo: { vocab: !0 }
          });
          v(C, N, M);
          continue;
        }
        if (k !== "@graph" && k !== "@list" && k !== "@included" && f(k)) {
          const U = l.compactIri({
            activeCtx: A,
            iri: k,
            relativeTo: { vocab: !0 }
          });
          v(C, U, M);
          continue;
        }
        if (!t(M))
          throw new e(
            "JSON-LD expansion error; expanded value must be an array.",
            "jsonld.SyntaxError"
          );
        if (M.length === 0) {
          const U = l.compactIri({
            activeCtx: A,
            iri: k,
            value: M,
            relativeTo: { vocab: !0 },
            reverse: P
          }), N = A.mappings.has(U) ? A.mappings.get(U)["@nest"] : null;
          let $ = C;
          N && (I(A, N, E), n(C[N]) || (C[N] = {}), $ = C[N]), v(
            $,
            U,
            M,
            {
              propertyIsArray: !0
            }
          );
        }
        for (const U of M) {
          const N = l.compactIri({
            activeCtx: A,
            iri: k,
            value: U,
            relativeTo: { vocab: !0 },
            reverse: P
          }), $ = A.mappings.has(N) ? A.mappings.get(N)["@nest"] : null;
          let q = C;
          $ && (I(A, $, E), n(C[$]) || (C[$] = {}), q = C[$]);
          const T = g(
            A,
            N,
            "@container"
          ) || [], z = a(U), Z = i(U);
          let Q;
          Z ? Q = U["@list"] : z && (Q = U["@graph"]);
          let J = await l.compact({
            activeCtx: A,
            activeProperty: N,
            element: Z || z ? Q : U,
            options: E
          });
          if (Z)
            if (t(J) || (J = [J]), !T.includes("@list"))
              J = {
                [l.compactIri({
                  activeCtx: A,
                  iri: "@list",
                  relativeTo: { vocab: !0 }
                })]: J
              }, "@index" in U && (J[l.compactIri({
                activeCtx: A,
                iri: "@index",
                relativeTo: { vocab: !0 }
              })] = U["@index"]);
            else {
              v(q, N, J, {
                valueIsArray: !0,
                allowDuplicate: !0
              });
              continue;
            }
          if (z)
            if (T.includes("@graph") && (T.includes("@id") || T.includes("@index") && c(U))) {
              let V;
              q.hasOwnProperty(N) ? V = q[N] : q[N] = V = {};
              const B = (T.includes("@id") ? U["@id"] : U["@index"]) || l.compactIri({
                activeCtx: A,
                iri: "@none",
                relativeTo: { vocab: !0 }
              });
              v(
                V,
                B,
                J,
                {
                  propertyIsArray: !E.compactArrays || T.includes("@set")
                }
              );
            } else T.includes("@graph") && c(U) ? (t(J) && J.length > 1 && (J = { "@included": J }), v(
              q,
              N,
              J,
              {
                propertyIsArray: !E.compactArrays || T.includes("@set")
              }
            )) : (t(J) && J.length === 1 && E.compactArrays && (J = J[0]), J = {
              [l.compactIri({
                activeCtx: A,
                iri: "@graph",
                relativeTo: { vocab: !0 }
              })]: J
            }, "@id" in U && (J[l.compactIri({
              activeCtx: A,
              iri: "@id",
              relativeTo: { vocab: !0 }
            })] = U["@id"]), "@index" in U && (J[l.compactIri({
              activeCtx: A,
              iri: "@index",
              relativeTo: { vocab: !0 }
            })] = U["@index"]), v(
              q,
              N,
              J,
              {
                propertyIsArray: !E.compactArrays || T.includes("@set")
              }
            ));
          else if (T.includes("@language") || T.includes("@index") || T.includes("@id") || T.includes("@type")) {
            let V;
            q.hasOwnProperty(N) ? V = q[N] : q[N] = V = {};
            let B;
            if (T.includes("@language"))
              s(J) && (J = J["@value"]), B = U["@language"];
            else if (T.includes("@index")) {
              const H = g(
                A,
                N,
                "@index"
              ) || "@index", K = l.compactIri(
                { activeCtx: A, iri: H, relativeTo: { vocab: !0 } }
              );
              if (H === "@index")
                B = U["@index"], delete J[K];
              else {
                let W;
                if ([B, ...W] = y(J[H] || []), !r(B))
                  B = null;
                else
                  switch (W.length) {
                    case 0:
                      delete J[H];
                      break;
                    case 1:
                      J[H] = W[0];
                      break;
                    default:
                      J[H] = W;
                      break;
                  }
              }
            } else if (T.includes("@id")) {
              const H = l.compactIri({
                activeCtx: A,
                iri: "@id",
                relativeTo: { vocab: !0 }
              });
              B = J[H], delete J[H];
            } else if (T.includes("@type")) {
              const H = l.compactIri({
                activeCtx: A,
                iri: "@type",
                relativeTo: { vocab: !0 }
              });
              let K;
              switch ([B, ...K] = y(J[H] || []), K.length) {
                case 0:
                  delete J[H];
                  break;
                case 1:
                  J[H] = K[0];
                  break;
                default:
                  J[H] = K;
                  break;
              }
              Object.keys(J).length === 1 && "@id" in U && (J = await l.compact({
                activeCtx: A,
                activeProperty: N,
                element: { "@id": U["@id"] },
                options: E
              }));
            }
            B || (B = l.compactIri({
              activeCtx: A,
              iri: "@none",
              relativeTo: { vocab: !0 }
            })), v(
              V,
              B,
              J,
              {
                propertyIsArray: T.includes("@set")
              }
            );
          } else {
            const V = !E.compactArrays || T.includes("@set") || T.includes("@list") || t(J) && J.length === 0 || k === "@list" || k === "@graph";
            v(
              q,
              N,
              J,
              { propertyIsArray: V }
            );
          }
        }
      }
      return C;
    }
    return j;
  }, l.compactIri = ({
    activeCtx: A,
    iri: R,
    value: j = null,
    relativeTo: E = { vocab: !1 },
    reverse: O = !1,
    base: P = null
  }) => {
    if (R === null)
      return R;
    A.isPropertyTermScoped && A.previousContext && (A = A.previousContext);
    const C = A.getInverse();
    if (f(R) && R in C && "@none" in C[R] && "@type" in C[R]["@none"] && "@none" in C[R]["@none"]["@type"])
      return C[R]["@none"]["@type"]["@none"];
    if (E.vocab && R in C) {
      const G = A["@language"] || "@none", k = [];
      n(j) && "@index" in j && !("@graph" in j) && k.push("@index", "@index@set"), n(j) && "@preserve" in j && (j = j["@preserve"][0]), a(j) ? ("@index" in j && k.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in j && k.push(
        "@graph@id",
        "@graph@id@set"
      ), k.push("@graph", "@graph@set", "@set"), "@index" in j || k.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in j || k.push("@graph@id", "@graph@id@set")) : n(j) && !s(j) && k.push("@id", "@id@set", "@type", "@set@type");
      let M = "@language", U = "@null";
      if (O)
        M = "@type", U = "@reverse", k.push("@set");
      else if (i(j)) {
        "@index" in j || k.push("@list");
        const $ = j["@list"];
        if ($.length === 0)
          M = "@any", U = "@none";
        else {
          let q = $.length === 0 ? G : null, T = null;
          for (let z = 0; z < $.length; ++z) {
            const Z = $[z];
            let Q = "@none", J = "@none";
            if (s(Z))
              if ("@direction" in Z) {
                const V = (Z["@language"] || "").toLowerCase(), B = Z["@direction"];
                Q = `${V}_${B}`;
              } else "@language" in Z ? Q = Z["@language"].toLowerCase() : "@type" in Z ? J = Z["@type"] : Q = "@null";
            else
              J = "@id";
            if (q === null ? q = Q : Q !== q && s(Z) && (q = "@none"), T === null ? T = J : J !== T && (T = "@none"), q === "@none" && T === "@none")
              break;
          }
          q = q || "@none", T = T || "@none", T !== "@none" ? (M = "@type", U = T) : U = q;
        }
      } else {
        if (s(j))
          if ("@language" in j && !("@index" in j)) {
            k.push("@language", "@language@set"), U = j["@language"];
            const $ = j["@direction"];
            $ && (U = `${U}_${$}`);
          } else "@direction" in j && !("@index" in j) ? U = `_${j["@direction"]}` : "@type" in j && (M = "@type", U = j["@type"]);
        else
          M = "@type", U = "@id";
        k.push("@set");
      }
      k.push("@none"), n(j) && !("@index" in j) && k.push("@index", "@index@set"), s(j) && Object.keys(j).length === 1 && k.push("@language", "@language@set");
      const N = m(
        A,
        R,
        j,
        k,
        M,
        U
      );
      if (N !== null)
        return N;
    }
    if (E.vocab && "@vocab" in A) {
      const G = A["@vocab"];
      if (R.indexOf(G) === 0 && R !== G) {
        const k = R.substr(G.length);
        if (!A.mappings.has(k))
          return k;
      }
    }
    let D = null;
    const _ = [];
    let F = A.fastCurieMap;
    const L = R.length - 1;
    for (let G = 0; G < L && R[G] in F; ++G)
      F = F[R[G]], "" in F && _.push(F[""][0]);
    for (let G = _.length - 1; G >= 0; --G) {
      const k = _[G], M = k.terms;
      for (const U of M) {
        const N = U + ":" + R.substr(k.iri.length);
        A.mappings.get(U)._prefix && (!A.mappings.has(N) || j === null && A.mappings.get(N)["@id"] === R) && (D === null || d(N, D) < 0) && (D = N);
      }
    }
    if (D !== null)
      return D;
    for (const [G, k] of A.mappings)
      if (k && k._prefix && R.startsWith(G + ":"))
        throw new e(
          `Absolute IRI "${R}" confused with prefix "${G}".`,
          "jsonld.SyntaxError",
          { code: "IRI confused with prefix", context: A }
        );
    if (!E.vocab)
      if ("@base" in A)
        if (A["@base"]) {
          const G = x(b(P, A["@base"]), R);
          return S.test(G) ? `./${G}` : G;
        } else
          return R;
      else
        return x(P, R);
    return R;
  }, l.compactValue = ({ activeCtx: A, activeProperty: R, value: j, options: E }) => {
    if (s(j)) {
      const D = g(A, R, "@type"), _ = g(A, R, "@language"), F = g(A, R, "@direction"), L = g(A, R, "@container") || [], G = "@index" in j && !L.includes("@index");
      if (!G && D !== "@none" && (j["@type"] === D || "@language" in j && j["@language"] === _ && "@direction" in j && j["@direction"] === F || "@language" in j && j["@language"] === _ || "@direction" in j && j["@direction"] === F))
        return j["@value"];
      const k = Object.keys(j).length, M = k === 1 || k === 2 && "@index" in j && !G, U = "@language" in A, N = r(j["@value"]), $ = A.mappings.has(R) && A.mappings.get(R)["@language"] === null;
      if (M && D !== "@none" && (!U || !N || $))
        return j["@value"];
      const q = {};
      return G && (q[l.compactIri({
        activeCtx: A,
        iri: "@index",
        relativeTo: { vocab: !0 }
      })] = j["@index"]), "@type" in j ? q[l.compactIri({
        activeCtx: A,
        iri: "@type",
        relativeTo: { vocab: !0 }
      })] = l.compactIri(
        { activeCtx: A, iri: j["@type"], relativeTo: { vocab: !0 } }
      ) : "@language" in j && (q[l.compactIri({
        activeCtx: A,
        iri: "@language",
        relativeTo: { vocab: !0 }
      })] = j["@language"]), "@direction" in j && (q[l.compactIri({
        activeCtx: A,
        iri: "@direction",
        relativeTo: { vocab: !0 }
      })] = j["@direction"]), q[l.compactIri({
        activeCtx: A,
        iri: "@value",
        relativeTo: { vocab: !0 }
      })] = j["@value"], q;
    }
    const O = p(
      A,
      R,
      { vocab: !0 },
      E
    ), P = g(A, R, "@type"), C = l.compactIri({
      activeCtx: A,
      iri: j["@id"],
      relativeTo: { vocab: P === "@vocab" },
      base: E.base
    });
    return P === "@id" || P === "@vocab" || O === "@graph" ? C : {
      [l.compactIri({
        activeCtx: A,
        iri: "@id",
        relativeTo: { vocab: !0 }
      })]: C
    };
  };
  function m(A, R, j, E, O, P) {
    P === null && (P = "@null");
    const C = [];
    if ((P === "@id" || P === "@reverse") && n(j) && "@id" in j) {
      P === "@reverse" && C.push("@reverse");
      const _ = l.compactIri(
        { activeCtx: A, iri: j["@id"], relativeTo: { vocab: !0 } }
      );
      A.mappings.has(_) && A.mappings.get(_) && A.mappings.get(_)["@id"] === j["@id"] ? C.push.apply(C, ["@vocab", "@id"]) : C.push.apply(C, ["@id", "@vocab"]);
    } else {
      C.push(P);
      const _ = C.find((F) => F.includes("_"));
      _ && C.push(_.replace(/^[^_]+_/, "_"));
    }
    C.push("@none");
    const D = A.inverse[R];
    for (const _ of E) {
      if (!(_ in D))
        continue;
      const F = D[_][O];
      for (const L of C)
        if (L in F)
          return F[L];
    }
    return null;
  }
  function I(A, R, j) {
    if (p(A, R, { vocab: !0 }, j) !== "@nest")
      throw new e(
        "JSON-LD compact error; nested property must have an @nest value resolving to @nest.",
        "jsonld.SyntaxError",
        { code: "invalid @nest value" }
      );
  }
  return xs;
}
var Ss, id;
function Vh() {
  return id || (id = 1, Ss = (e) => {
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
    }), t.compact = function(n, r) {
      return arguments.length < 2 ? Promise.reject(
        new TypeError("Could not compact, too few arguments.")
      ) : e.compact(n, r);
    }, t.expand = function(n) {
      return arguments.length < 1 ? Promise.reject(
        new TypeError("Could not expand, too few arguments.")
      ) : e.expand(n);
    }, t.flatten = function(n) {
      return arguments.length < 1 ? Promise.reject(
        new TypeError("Could not flatten, too few arguments.")
      ) : e.flatten(n);
    }, t;
  }), Ss;
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
var Is, sd;
function Gh() {
  if (sd) return Is;
  sd = 1;
  const e = pa(), t = _h(), n = Fe(), r = Eh(), o = n.IdentifierIssuer, i = Be(), s = il(), a = kh(), { expand: c } = Mh(), { flatten: u } = Oh(), { fromRDF: p } = Lh(), { toRDF: g } = Dh(), {
    frameMergedOrDefault: f,
    cleanupNull: h
  } = zh(), {
    isArray: w,
    isObject: x,
    isString: b
  } = Oe(), {
    isSubjectReference: S
  } = xt(), {
    expandIri: v,
    getInitialContext: y,
    process: d,
    processingMode: l
  } = Bt(), {
    compact: m,
    compactIri: I
  } = Uh(), {
    createNodeMap: A,
    createMergedNodeMap: R,
    mergeNodeMaps: j
  } = li(), {
    logEventHandler: E,
    logWarningEventHandler: O,
    safeEventHandler: P,
    setDefaultEventHandler: C,
    setupEventHandler: D,
    strictEventHandler: _,
    unhandledEventHandler: F
  } = On(), L = function(k) {
    const M = {}, N = new s({ max: 100 });
    k.compact = async function(q, T, z) {
      if (arguments.length < 2)
        throw new TypeError("Could not compact, too few arguments.");
      if (T === null)
        throw new i(
          "The compaction context must not be null.",
          "jsonld.CompactError",
          { code: "invalid local context" }
        );
      if (q === null)
        return null;
      z = $(z, {
        base: b(q) ? q : "",
        compactArrays: !0,
        compactToRelative: !0,
        graph: !1,
        skipExpansion: !1,
        link: !1,
        issuer: new o("_:b"),
        contextResolver: new r(
          { sharedCache: N }
        )
      }), z.link && (z.skipExpansion = !0), z.compactToRelative || delete z.base;
      let Z;
      z.skipExpansion ? Z = q : Z = await k.expand(q, z);
      const Q = await k.processContext(
        y(z),
        T,
        z
      );
      let J = await m({
        activeCtx: Q,
        element: Z,
        options: z
      });
      z.compactArrays && !z.graph && w(J) ? J.length === 1 ? J = J[0] : J.length === 0 && (J = {}) : z.graph && x(J) && (J = [J]), x(T) && "@context" in T && (T = T["@context"]), T = n.clone(T), w(T) || (T = [T]);
      const V = T;
      T = [];
      for (let H = 0; H < V.length; ++H)
        (!x(V[H]) || Object.keys(V[H]).length > 0) && T.push(V[H]);
      const B = T.length > 0;
      if (T.length === 1 && (T = T[0]), w(J)) {
        const H = I({
          activeCtx: Q,
          iri: "@graph",
          relativeTo: { vocab: !0 }
        }), K = J;
        J = {}, B && (J["@context"] = T), J[H] = K;
      } else if (x(J) && B) {
        const H = J;
        J = { "@context": T };
        for (const K in H)
          J[K] = H[K];
      }
      return J;
    }, k.expand = async function(q, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not expand, too few arguments.");
      T = $(T, {
        keepFreeFloatingNodes: !1,
        contextResolver: new r(
          { sharedCache: N }
        )
      });
      const z = {}, Z = [];
      if ("expandContext" in T) {
        const B = n.clone(T.expandContext);
        x(B) && "@context" in B ? z.expandContext = B : z.expandContext = { "@context": B }, Z.push(z.expandContext);
      }
      let Q;
      if (!b(q))
        z.input = n.clone(q);
      else {
        const B = await k.get(q, T);
        Q = B.documentUrl, z.input = B.document, B.contextUrl && (z.remoteContext = { "@context": B.contextUrl }, Z.push(z.remoteContext));
      }
      "base" in T || (T.base = Q || "");
      let J = y(T);
      for (const B of Z)
        J = await d({ activeCtx: J, localCtx: B, options: T });
      let V = await c({
        activeCtx: J,
        element: z.input,
        options: T
      });
      return x(V) && "@graph" in V && Object.keys(V).length === 1 ? V = V["@graph"] : V === null && (V = []), w(V) || (V = [V]), V;
    }, k.flatten = async function(q, T, z) {
      if (arguments.length < 1)
        return new TypeError("Could not flatten, too few arguments.");
      typeof T == "function" ? T = null : T = T || null, z = $(z, {
        base: b(q) ? q : "",
        contextResolver: new r(
          { sharedCache: N }
        )
      });
      const Z = await k.expand(q, z), Q = u(Z);
      return T === null ? Q : (z.graph = !0, z.skipExpansion = !0, await k.compact(Q, T, z));
    }, k.frame = async function(q, T, z) {
      if (arguments.length < 2)
        throw new TypeError("Could not frame, too few arguments.");
      if (z = $(z, {
        base: b(q) ? q : "",
        embed: "@once",
        explicit: !1,
        requireAll: !1,
        omitDefault: !1,
        bnodesToClear: [],
        contextResolver: new r(
          { sharedCache: N }
        )
      }), b(T)) {
        const ee = await k.get(T, z);
        if (T = ee.document, ee.contextUrl) {
          let ie = T["@context"];
          ie ? w(ie) ? ie.push(ee.contextUrl) : ie = [ie, ee.contextUrl] : ie = ee.contextUrl, T["@context"] = ie;
        }
      }
      const Z = T ? T["@context"] || {} : {}, Q = await k.processContext(
        y(z),
        Z,
        z
      );
      z.hasOwnProperty("omitGraph") || (z.omitGraph = l(Q, 1.1)), z.hasOwnProperty("pruneBlankNodeIdentifiers") || (z.pruneBlankNodeIdentifiers = l(Q, 1.1));
      const J = await k.expand(q, z), V = { ...z };
      V.isFrame = !0, V.keepFreeFloatingNodes = !0;
      const B = await k.expand(T, V), H = Object.keys(T).map((ee) => v(Q, ee, { vocab: !0 }));
      V.merged = !H.includes("@graph"), V.is11 = l(Q, 1.1);
      const K = f(J, B, V);
      V.graph = !z.omitGraph, V.skipExpansion = !0, V.link = {}, V.framing = !0;
      let W = await k.compact(K, Z, V);
      return V.link = {}, W = h(W, V), W;
    }, k.link = async function(q, T, z) {
      const Z = {};
      return T && (Z["@context"] = T), Z["@embed"] = "@link", k.frame(q, Z, z);
    }, k.normalize = k.canonize = async function(q, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not canonize, too few arguments.");
      if (T = $(T, {
        base: b(q) ? q : null,
        algorithm: "URDNA2015",
        skipExpansion: !1,
        safe: !0,
        contextResolver: new r(
          { sharedCache: N }
        )
      }), "inputFormat" in T) {
        if (T.inputFormat !== "application/n-quads" && T.inputFormat !== "application/nquads")
          throw new i(
            "Unknown canonicalization input format.",
            "jsonld.CanonizeError"
          );
        const Q = a.parse(q);
        return e.canonize(Q, T);
      }
      const z = { ...T };
      delete z.format, z.produceGeneralizedRdf = !1;
      const Z = await k.toRDF(q, z);
      return e.canonize(Z, T);
    }, k.fromRDF = async function(q, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert from RDF, too few arguments.");
      T = $(T, {
        format: b(q) ? "application/n-quads" : void 0
      });
      const { format: z } = T;
      let { rdfParser: Z } = T;
      if (z) {
        if (Z = Z || M[z], !Z)
          throw new i(
            "Unknown input format.",
            "jsonld.UnknownFormat",
            { format: z }
          );
      } else
        Z = () => q;
      const Q = await Z(q);
      return p(Q, T);
    }, k.toRDF = async function(q, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert to RDF, too few arguments.");
      T = $(T, {
        base: b(q) ? q : "",
        skipExpansion: !1,
        contextResolver: new r(
          { sharedCache: N }
        )
      });
      let z;
      T.skipExpansion ? z = q : z = await k.expand(q, T);
      const Z = g(z, T);
      if (T.format) {
        if (T.format === "application/n-quads" || T.format === "application/nquads")
          return a.serialize(Z);
        throw new i(
          "Unknown output format.",
          "jsonld.UnknownFormat",
          { format: T.format }
        );
      }
      return Z;
    }, k.createNodeMap = async function(q, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not create node map, too few arguments.");
      T = $(T, {
        base: b(q) ? q : "",
        contextResolver: new r(
          { sharedCache: N }
        )
      });
      const z = await k.expand(q, T);
      return R(z, T);
    }, k.merge = async function(q, T, z) {
      if (arguments.length < 1)
        throw new TypeError("Could not merge, too few arguments.");
      if (!w(q))
        throw new TypeError('Could not merge, "docs" must be an array.');
      typeof T == "function" ? T = null : T = T || null, z = $(z, {
        contextResolver: new r(
          { sharedCache: N }
        )
      });
      const Z = await Promise.all(q.map((ee) => {
        const ie = { ...z };
        return k.expand(ee, ie);
      }));
      let Q = !0;
      "mergeNodes" in z && (Q = z.mergeNodes);
      const J = z.issuer || new o("_:b"), V = { "@default": {} };
      for (let ee = 0; ee < Z.length; ++ee) {
        const ie = n.relabelBlankNodes(Z[ee], {
          issuer: new o("_:b" + ee + "-")
        }), xe = Q || ee === 0 ? V : { "@default": {} };
        if (A(ie, xe, "@default", J), xe !== V)
          for (const he in xe) {
            const ye = xe[he];
            if (!(he in V)) {
              V[he] = ye;
              continue;
            }
            const fe = V[he];
            for (const nt in ye)
              nt in fe || (fe[nt] = ye[nt]);
          }
      }
      const B = j(V), H = [], K = Object.keys(B).sort();
      for (let ee = 0; ee < K.length; ++ee) {
        const ie = B[K[ee]];
        S(ie) || H.push(ie);
      }
      return T === null ? H : (z.graph = !0, z.skipExpansion = !0, await k.compact(H, T, z));
    }, Object.defineProperty(k, "documentLoader", {
      get: () => k._documentLoader,
      set: (q) => k._documentLoader = q
    }), k.documentLoader = async (q) => {
      throw new i(
        "Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.",
        "jsonld.LoadDocumentError",
        { code: "loading document failed", url: q }
      );
    }, k.get = async function(q, T) {
      let z;
      typeof T.documentLoader == "function" ? z = T.documentLoader : z = k.documentLoader;
      const Z = await z(q);
      try {
        if (!Z.document)
          throw new i(
            "No remote document found at the given URL.",
            "jsonld.NullRemoteDocument"
          );
        b(Z.document) && (Z.document = JSON.parse(Z.document));
      } catch (Q) {
        throw new i(
          "Could not retrieve a JSON-LD document from the URL.",
          "jsonld.LoadDocumentError",
          {
            code: "loading document failed",
            cause: Q,
            remoteDoc: Z
          }
        );
      }
      return Z;
    }, k.processContext = async function(q, T, z) {
      return z = $(z, {
        base: "",
        contextResolver: new r(
          { sharedCache: N }
        )
      }), T === null ? y(z) : (T = n.clone(T), x(T) && "@context" in T || (T = { "@context": T }), d({ activeCtx: q, localCtx: T, options: z }));
    }, k.getContextValue = Bt().getContextValue, k.documentLoaders = {}, k.useDocumentLoader = function(q) {
      if (!(q in k.documentLoaders))
        throw new i(
          'Unknown document loader type: "' + q + '"',
          "jsonld.UnknownDocumentLoader",
          { type: q }
        );
      k.documentLoader = k.documentLoaders[q].apply(
        k,
        Array.prototype.slice.call(arguments, 1)
      );
    }, k.registerRDFParser = function(q, T) {
      M[q] = T;
    }, k.unregisterRDFParser = function(q) {
      delete M[q];
    }, k.registerRDFParser("application/n-quads", a.parse), k.registerRDFParser("application/nquads", a.parse), k.url = Mt(), k.logEventHandler = E, k.logWarningEventHandler = O, k.safeEventHandler = P, k.setDefaultEventHandler = C, k.strictEventHandler = _, k.unhandledEventHandler = F, k.util = n, Object.assign(k, n), k.promises = k, k.RequestQueue = rl(), k.JsonLdProcessor = Vh()(k), t.setupGlobals(k), t.setupDocumentLoaders(k);
    function $(q, {
      documentLoader: T = k.documentLoader,
      ...z
    }) {
      if (q && "compactionMap" in q)
        throw new i(
          '"compactionMap" not supported.',
          "jsonld.OptionsError"
        );
      if (q && "expansionMap" in q)
        throw new i(
          '"expansionMap" not supported.',
          "jsonld.OptionsError"
        );
      return Object.assign(
        {},
        { documentLoader: T },
        z,
        q,
        { eventHandler: D({ options: q }) }
      );
    }
    return k;
  }, G = function() {
    return L(function() {
      return G();
    });
  };
  return L(G), Is = G, Is;
}
var Fh = Gh();
const Bh = /* @__PURE__ */ ta(Fh);
async function ad(e, t, n = {}) {
  const r = {
    algorithm: "URDNA2015",
    format: "application/n-quads",
    safe: n.safe ?? !1
  };
  return t && (r.documentLoader = t), await Bh.normalize(e, r);
}
function Hh(e, t, n) {
  return {
    "@context": e,
    type: "DataIntegrityProof",
    cryptosuite: "eddsa-rdfc-2022",
    proofPurpose: "assertionMethod",
    verificationMethod: t,
    created: n
  };
}
async function sl(e, t, n, r = !1) {
  const [o, i] = await Promise.all([
    ad(e, n, { safe: r }),
    ad(t, n, { safe: r })
  ]), s = Ts("sha256").update(o, "utf8").digest(), a = Ts("sha256").update(i, "utf8").digest(), c = new Uint8Array(64);
  return c.set(a, 0), c.set(s, 32), c;
}
async function Zh(e, t, n = {}) {
  const r = n.created ?? (/* @__PURE__ */ new Date()).toISOString(), o = Hh(
    e["@context"],
    t.id,
    r
  ), i = await sl(
    e,
    o,
    n.documentLoader,
    n.safe ?? !1
  ), s = await hh(i, t.privateKey), a = fu(s);
  return {
    type: "DataIntegrityProof",
    cryptosuite: "eddsa-rdfc-2022",
    proofPurpose: "assertionMethod",
    verificationMethod: t.id,
    created: r,
    proofValue: a
  };
}
async function Jh(e, t, n = {}) {
  const r = e.proof;
  if (!r) throw new Error("No proof found on credential");
  if (r.cryptosuite !== "eddsa-rdfc-2022")
    throw new Error(`Unsupported cryptosuite: ${r.cryptosuite}`);
  if (r.created === void 0)
    throw new Error('eddsa-rdfc-2022 proof is missing the required "created" property.');
  const o = ["type", "cryptosuite", "proofPurpose", "verificationMethod", "created", "proofValue"];
  if (r.type !== "DataIntegrityProof" || r.proofPurpose !== "assertionMethod" || Object.keys(r).some((g) => !o.includes(g)) || typeof r.verificationMethod != "string" || typeof r.created != "string" || typeof r.proofValue != "string") return !1;
  const { proof: i, ...s } = e, { proofValue: a, ...c } = r, u = { ...c, "@context": s["@context"] }, p = await sl(
    s,
    u,
    n.documentLoader,
    n.safe ?? !1
  );
  try {
    const g = Xs(r.proofValue);
    return await yh(g, p, t);
  } catch {
    return !1;
  }
}
const Kh = Vf, Qh = nh, Wh = Object.freeze({
  RmAccreditation: `${Kt}accreditation.json`,
  RmOperationalScope: `${Kt}operational-scope.json`,
  RmCertificate: `${Kt}certificate.json`,
  RmStudy: `${Kt}study.json`,
  RmLabAuthority: `${Kt}lab-authority.json`,
  BitstringStatusListCredential: `${Kt}status-list.json`
});
function Xh(e) {
  return e === "BitstringStatusListCredential" ? [cn] : [cn, lu];
}
const Yh = Object.freeze({
  name: "RM v1",
  schemas: Wh,
  contexts: Xh
}), em = Object.freeze({
  resolve: 1,
  parse: 0,
  carrier: 0,
  type: 0,
  schema: 0,
  proof: 2,
  key: 2,
  signature: 2
});
function ui(e, t, n, r) {
  return [
    e,
    t ?? "unresolved",
    n,
    r.purpose,
    `${r.profile.id}@${r.profile.version}`,
    r.evaluationTime
  ].join(" | ");
}
function rn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const tm = (e) => e.replace(/~/g, "~0").replace(/\//g, "~1");
function nm(e, t) {
  if (!t.startsWith("/")) return [];
  let n = [{ pointer: "", value: e }];
  for (const r of t.slice(1).split("/")) {
    const o = [];
    for (const { pointer: i, value: s } of n)
      r === "*" ? Array.isArray(s) && s.forEach((a, c) => o.push({ pointer: `${i}/${c}`, value: a })) : rn(s) && Object.hasOwn(s, r) && o.push({ pointer: `${i}/${tm(r)}`, value: s[r] });
    n = o;
  }
  return n;
}
function dn(e, t) {
  if (t === "") return e;
  if (!t.startsWith("/")) return;
  let n = e;
  for (const r of t.slice(1).split("/")) {
    const o = r.replace(/~1/g, "/").replace(/~0/g, "~");
    if (Array.isArray(n) && /^(0|[1-9][0-9]*)$/.test(o)) n = n[Number(o)];
    else if (rn(n) && Object.hasOwn(n, o)) n = n[o];
    else return;
  }
  return n;
}
function oe(e, t, n = [], r = "executed") {
  return Object.freeze({
    state: e,
    execution: r,
    reasons: Object.freeze(t),
    sourcePointers: Object.freeze(n)
  });
}
const ln = (e) => oe("not_established", [e], [], "not_run");
function rm(e, t) {
  const n = Date.parse(t), r = typeof e.validFrom == "string" ? Date.parse(e.validFrom) : NaN, o = typeof e.validUntil == "string" ? Date.parse(e.validUntil) : NaN;
  if (!Number.isFinite(n) || !Number.isFinite(r) || !Number.isFinite(o))
    return oe("not_established", ["Validity period or evaluation time is missing or invalid."]);
  const i = ["/validFrom", "/validUntil"];
  return n < r ? oe("contradicted", [`Not yet valid at ${t}.`], i) : n > o ? oe("contradicted", [`Expired before ${t}.`], i) : oe("established", [`Valid at ${t}.`], i);
}
function im(e, t) {
  return (Array.isArray(e.relatedResource) ? e.relatedResource : []).filter(rn).map((r) => {
    const o = String(r.id);
    try {
      const i = ni(t.resolve(o).bytes);
      return i === r.digestSRI ? { id: o, state: "established", reason: "Digest matches the exact referenced bytes." } : { id: o, state: "contradicted", reason: `Digest mismatch: referenced bytes hash to ${i}.` };
    } catch (i) {
      const s = i instanceof Pe ? i.code : "UNAVAILABLE";
      return { id: o, state: "not_established", reason: `Referenced resource unavailable: ${s}.` };
    }
  });
}
async function Ur(e, t, n) {
  const r = [], o = n.staticResolver ?? t, i = n.binding ?? Yh, s = ln("Not evaluated because protection is not established."), a = (l = {}) => {
    const m = we(r.map((I) => I.state));
    return Object.freeze({
      artifactId: e,
      protection: Object.freeze({
        artifactId: e,
        ...oe(m, r.filter((I) => I.state !== "established").map((I) => `${I.check}: ${I.reason}`).concat(m === "established" ? ["Protection established from the original secured bytes."] : []))
      }),
      checks: Object.freeze(r.map((I) => Object.freeze(I))),
      validity: s,
      relatedResources: Object.freeze([]),
      facts: Object.freeze([]),
      ...l
    });
  }, c = (l, m, I, A = {}) => (r.push({ check: l, state: m, reason: I }), a(A));
  let u;
  try {
    u = t.resolve(e).bytes;
  } catch (l) {
    const m = l instanceof Pe ? l.code : "UNAVAILABLE";
    return c("resolve", "not_established", `Artifact is not available: ${m}.`);
  }
  const p = ni(u);
  r.push({ check: "resolve", state: "established", reason: `Resolved ${u.byteLength} bytes.` });
  let g;
  try {
    g = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(u));
  } catch {
    return c("parse", "contradicted", "Artifact bytes are not valid UTF-8 JSON.", { digestSRI: p });
  }
  if (!rn(g)) return c("parse", "contradicted", "Artifact is not a JSON object.", { digestSRI: p });
  r.push({ check: "parse", state: "established", reason: "Strict UTF-8 JSON object." });
  const f = g["@context"], h = i.contexts(Array.isArray(g.type) ? g.type[1] : void 0);
  if (!Array.isArray(f) || f.length !== h.length || h.some((l, m) => f[m] !== l))
    return c(
      "carrier",
      "not_established",
      "Only the exact supported context combination for this type is accepted.",
      { digestSRI: p }
    );
  r.push({ check: "carrier", state: "established", reason: "Exact supported context combination." });
  const w = Array.isArray(g.type) ? g.type : [], x = w.length === 2 && w[0] === "VerifiableCredential" ? String(w[1]) : void 0, b = x === void 0 ? void 0 : i.schemas[x];
  if (b === void 0)
    return c("type", "not_established", `Credential type is not a recognized ${i.name} artifact type.`, { digestSRI: p });
  if (Array.isArray(g.credentialSchema))
    return c(
      "type",
      "not_established",
      "Multiple credentialSchema declarations have no accepted composition in this binding.",
      { digestSRI: p, artifactType: x }
    );
  if ((rn(g.credentialSchema) ? g.credentialSchema.id : void 0) !== b)
    return c("type", "contradicted", `${x} must declare schema ${b}.`, { digestSRI: p, artifactType: x });
  r.push({ check: "type", state: "established", reason: `${x} with its pinned schema.` });
  try {
    const l = new Kh({ allErrors: !0, strict: !0 });
    Qh(l);
    const m = JSON.parse(new TextDecoder().decode(o.resolve(b).bytes)), I = l.compile(m);
    if (!I(g)) {
      const A = (I.errors ?? []).map((R) => `${R.instancePath || "/"} ${R.message ?? ""}`).join("; ");
      return c("schema", "contradicted", `Schema validation failed: ${A}`, { digestSRI: p, artifactType: x });
    }
  } catch (l) {
    const m = l instanceof Pe ? l.code : "INVALID_SCHEMA";
    return c("schema", "not_established", `Pinned schema unavailable: ${m}.`, { digestSRI: p, artifactType: x });
  }
  r.push({ check: "schema", state: "established", reason: "Valid against the pinned schema." });
  const v = g.proof;
  if (Array.isArray(v))
    return c("proof", "not_established", "Proof sets and chains are unsupported in the initial slice.", { digestSRI: p, artifactType: x });
  if (!rn(v))
    return c("proof", "not_established", "The artifact carries no proof.", { digestSRI: p, artifactType: x });
  r.push({ check: "proof", state: "established", reason: "One eddsa-rdfc-2022 assertionMethod proof." });
  const y = vu(g.issuer, v.verificationMethod, o);
  if (y.state !== "established" || y.publicKey === void 0)
    return c(
      "key",
      y.state === "established" ? "not_established" : y.state,
      `${y.code}: ${y.reason}`,
      { digestSRI: p, artifactType: x, keyAuthorization: y }
    );
  r.push({ check: "key", state: "established", reason: y.reason });
  try {
    const l = Ad(o);
    if (!await Jh(g, y.publicKey, {
      documentLoader: l,
      safe: !0
    }))
      return c(
        "signature",
        "contradicted",
        "Signature does not verify over the safe canonical form.",
        { digestSRI: p, artifactType: x, keyAuthorization: y }
      );
  } catch (l) {
    const m = l instanceof Error ? l.message.split(`
`)[0] : String(l);
    return c(
      "signature",
      "contradicted",
      `Safe JSON-LD processing rejected the artifact: ${m}`,
      { digestSRI: p, artifactType: x, keyAuthorization: y }
    );
  }
  r.push({ check: "signature", state: "established", reason: "Ed25519 signature verifies (safe mode, offline catalog)." });
  const d = [];
  for (const l of n.manifest.factMappings) {
    const m = String(l.fact);
    for (const { pointer: I, value: A } of nm(g, String(l.nativePath)))
      d.push(Object.freeze({ fact: m, pointer: I, value: structuredClone(A) }));
  }
  return a({
    digestSRI: p,
    artifactType: x,
    keyAuthorization: y,
    validity: rm(g, n.evaluationTime),
    relatedResources: Object.freeze(im(g, t).map((l) => Object.freeze(l))),
    facts: Object.freeze(d)
  });
}
var be = Uint8Array, Me = Uint16Array, ha = Int32Array, pi = new be([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), fi = new be([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), Os = new be([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), al = function(e, t) {
  for (var n = new Me(31), r = 0; r < 31; ++r)
    n[r] = t += 1 << e[r - 1];
  for (var o = new ha(n[30]), r = 1; r < 30; ++r)
    for (var i = n[r]; i < n[r + 1]; ++i)
      o[i] = i - n[r] << 5 | r;
  return { b: n, r: o };
}, ol = al(pi, 2), cl = ol.b, Ls = ol.r;
cl[28] = 258, Ls[258] = 28;
var dl = al(fi, 0), sm = dl.b, od = dl.r, Ns = new Me(32768);
for (var ce = 0; ce < 32768; ++ce) {
  var jt = (ce & 43690) >> 1 | (ce & 21845) << 1;
  jt = (jt & 52428) >> 2 | (jt & 13107) << 2, jt = (jt & 61680) >> 4 | (jt & 3855) << 4, Ns[ce] = ((jt & 65280) >> 8 | (jt & 255) << 8) >> 1;
}
var ot = (function(e, t, n) {
  for (var r = e.length, o = 0, i = new Me(t); o < r; ++o)
    e[o] && ++i[e[o] - 1];
  var s = new Me(t);
  for (o = 1; o < t; ++o)
    s[o] = s[o - 1] + i[o - 1] << 1;
  var a;
  if (n) {
    a = new Me(1 << t);
    var c = 15 - t;
    for (o = 0; o < r; ++o)
      if (e[o])
        for (var u = o << 4 | e[o], p = t - e[o], g = s[e[o] - 1]++ << p, f = g | (1 << p) - 1; g <= f; ++g)
          a[Ns[g] >> c] = u;
  } else
    for (a = new Me(r), o = 0; o < r; ++o)
      e[o] && (a[o] = Ns[s[e[o] - 1]++] >> 15 - e[o]);
  return a;
}), Et = new be(288);
for (var ce = 0; ce < 144; ++ce)
  Et[ce] = 8;
for (var ce = 144; ce < 256; ++ce)
  Et[ce] = 9;
for (var ce = 256; ce < 280; ++ce)
  Et[ce] = 7;
for (var ce = 280; ce < 288; ++ce)
  Et[ce] = 8;
var Pn = new be(32);
for (var ce = 0; ce < 32; ++ce)
  Pn[ce] = 5;
var am = /* @__PURE__ */ ot(Et, 9, 0), om = /* @__PURE__ */ ot(Et, 9, 1), cm = /* @__PURE__ */ ot(Pn, 5, 0), dm = /* @__PURE__ */ ot(Pn, 5, 1), As = function(e) {
  for (var t = e[0], n = 1; n < e.length; ++n)
    e[n] > t && (t = e[n]);
  return t;
}, Je = function(e, t, n) {
  var r = t / 8 | 0;
  return (e[r] | e[r + 1] << 8) >> (t & 7) & n;
}, qs = function(e, t) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (t & 7);
}, ma = function(e) {
  return (e + 7) / 8 | 0;
}, ll = function(e, t, n) {
  return (n == null || n > e.length) && (n = e.length), new be(e.subarray(t, n));
}, lm = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
], Qe = function(e, t, n) {
  var r = new Error(t || lm[e]);
  if (r.code = e, Error.captureStackTrace && Error.captureStackTrace(r, Qe), !n)
    throw r;
  return r;
}, um = function(e, t, n, r) {
  var o = e.length, i = 0;
  if (!o || t.f && !t.l)
    return n || new be(0);
  var s = !n, a = s || t.i != 2, c = t.i;
  s && (n = new be(o * 3));
  var u = function(V) {
    var B = n.length;
    if (V > B) {
      var H = new be(Math.max(B * 2, V));
      H.set(n), n = H;
    }
  }, p = t.f || 0, g = t.p || 0, f = t.b || 0, h = t.l, w = t.d, x = t.m, b = t.n, S = o * 8;
  do {
    if (!h) {
      p = Je(e, g, 1);
      var v = Je(e, g + 1, 3);
      if (g += 3, v)
        if (v == 1)
          h = om, w = dm, x = 9, b = 5;
        else if (v == 2) {
          var m = Je(e, g, 31) + 257, I = Je(e, g + 10, 15) + 4, A = m + Je(e, g + 5, 31) + 1;
          g += 14;
          for (var R = new be(A), j = new be(19), E = 0; E < I; ++E)
            j[Os[E]] = Je(e, g + E * 3, 7);
          g += I * 3;
          for (var O = As(j), P = (1 << O) - 1, C = ot(j, O, 1), E = 0; E < A; ) {
            var D = C[Je(e, g, P)];
            g += D & 15;
            var y = D >> 4;
            if (y < 16)
              R[E++] = y;
            else {
              var _ = 0, F = 0;
              for (y == 16 ? (F = 3 + Je(e, g, 3), g += 2, _ = R[E - 1]) : y == 17 ? (F = 3 + Je(e, g, 7), g += 3) : y == 18 && (F = 11 + Je(e, g, 127), g += 7); F--; )
                R[E++] = _;
            }
          }
          var L = R.subarray(0, m), G = R.subarray(m);
          x = As(L), b = As(G), h = ot(L, x, 1), w = ot(G, b, 1);
        } else
          Qe(1);
      else {
        var y = ma(g) + 4, d = e[y - 4] | e[y - 3] << 8, l = y + d;
        if (l > o) {
          c && Qe(0);
          break;
        }
        a && u(f + d), n.set(e.subarray(y, l), f), t.b = f += d, t.p = g = l * 8, t.f = p;
        continue;
      }
      if (g > S) {
        c && Qe(0);
        break;
      }
    }
    a && u(f + 131072);
    for (var k = (1 << x) - 1, M = (1 << b) - 1, U = g; ; U = g) {
      var _ = h[qs(e, g) & k], N = _ >> 4;
      if (g += _ & 15, g > S) {
        c && Qe(0);
        break;
      }
      if (_ || Qe(2), N < 256)
        n[f++] = N;
      else if (N == 256) {
        U = g, h = null;
        break;
      } else {
        var $ = N - 254;
        if (N > 264) {
          var E = N - 257, q = pi[E];
          $ = Je(e, g, (1 << q) - 1) + cl[E], g += q;
        }
        var T = w[qs(e, g) & M], z = T >> 4;
        T || Qe(3), g += T & 15;
        var G = sm[z];
        if (z > 3) {
          var q = fi[z];
          G += qs(e, g) & (1 << q) - 1, g += q;
        }
        if (g > S) {
          c && Qe(0);
          break;
        }
        a && u(f + 131072);
        var Z = f + $;
        if (f < G) {
          var Q = i - G, J = Math.min(G, Z);
          for (Q + f < 0 && Qe(3); f < J; ++f)
            n[f] = r[Q + f];
        }
        for (; f < Z; ++f)
          n[f] = n[f - G];
      }
    }
    t.l = h, t.p = U, t.b = f, t.f = p, h && (p = 1, t.m = x, t.d = w, t.n = b);
  } while (!p);
  return f != n.length && s ? ll(n, 0, f) : n.subarray(0, f);
}, vt = function(e, t, n) {
  n <<= t & 7;
  var r = t / 8 | 0;
  e[r] |= n, e[r + 1] |= n >> 8;
}, mn = function(e, t, n) {
  n <<= t & 7;
  var r = t / 8 | 0;
  e[r] |= n, e[r + 1] |= n >> 8, e[r + 2] |= n >> 16;
}, Rs = function(e, t) {
  for (var n = [], r = 0; r < e.length; ++r)
    e[r] && n.push({ s: r, f: e[r] });
  var o = n.length, i = n.slice();
  if (!o)
    return { t: pl, l: 0 };
  if (o == 1) {
    var s = new be(n[0].s + 1);
    return s[n[0].s] = 1, { t: s, l: 1 };
  }
  n.sort(function(l, m) {
    return l.f - m.f;
  }), n.push({ s: -1, f: 25001 });
  var a = n[0], c = n[1], u = 0, p = 1, g = 2;
  for (n[0] = { s: -1, f: a.f + c.f, l: a, r: c }; p != o - 1; )
    a = n[n[u].f < n[g].f ? u++ : g++], c = n[u != p && n[u].f < n[g].f ? u++ : g++], n[p++] = { s: -1, f: a.f + c.f, l: a, r: c };
  for (var f = i[0].s, r = 1; r < o; ++r)
    i[r].s > f && (f = i[r].s);
  var h = new Me(f + 1), w = Ds(n[p - 1], h, 0);
  if (w > t) {
    var r = 0, x = 0, b = w - t, S = 1 << b;
    for (i.sort(function(m, I) {
      return h[I.s] - h[m.s] || m.f - I.f;
    }); r < o; ++r) {
      var v = i[r].s;
      if (h[v] > t)
        x += S - (1 << w - h[v]), h[v] = t;
      else
        break;
    }
    for (x >>= b; x > 0; ) {
      var y = i[r].s;
      h[y] < t ? x -= 1 << t - h[y]++ - 1 : ++r;
    }
    for (; r >= 0 && x; --r) {
      var d = i[r].s;
      h[d] == t && (--h[d], ++x);
    }
    w = t;
  }
  return { t: new be(h), l: w };
}, Ds = function(e, t, n) {
  return e.s == -1 ? Math.max(Ds(e.l, t, n + 1), Ds(e.r, t, n + 1)) : t[e.s] = n;
}, cd = function(e) {
  for (var t = e.length; t && !e[--t]; )
    ;
  for (var n = new Me(++t), r = 0, o = e[0], i = 1, s = function(c) {
    n[r++] = c;
  }, a = 1; a <= t; ++a)
    if (e[a] == o && a != t)
      ++i;
    else {
      if (!o && i > 2) {
        for (; i > 138; i -= 138)
          s(32754);
        i > 2 && (s(i > 10 ? i - 11 << 5 | 28690 : i - 3 << 5 | 12305), i = 0);
      } else if (i > 3) {
        for (s(o), --i; i > 6; i -= 6)
          s(8304);
        i > 2 && (s(i - 3 << 5 | 8208), i = 0);
      }
      for (; i--; )
        s(o);
      i = 1, o = e[a];
    }
  return { c: n.subarray(0, r), n: t };
}, yn = function(e, t) {
  for (var n = 0, r = 0; r < t.length; ++r)
    n += e[r] * t[r];
  return n;
}, ul = function(e, t, n) {
  var r = n.length, o = ma(t + 2);
  e[o] = r & 255, e[o + 1] = r >> 8, e[o + 2] = e[o] ^ 255, e[o + 3] = e[o + 1] ^ 255;
  for (var i = 0; i < r; ++i)
    e[o + i + 4] = n[i];
  return (o + 4 + r) * 8;
}, dd = function(e, t, n, r, o, i, s, a, c, u, p) {
  vt(t, p++, n), ++o[256];
  for (var g = Rs(o, 15), f = g.t, h = g.l, w = Rs(i, 15), x = w.t, b = w.l, S = cd(f), v = S.c, y = S.n, d = cd(x), l = d.c, m = d.n, I = new Me(19), A = 0; A < v.length; ++A)
    ++I[v[A] & 31];
  for (var A = 0; A < l.length; ++A)
    ++I[l[A] & 31];
  for (var R = Rs(I, 7), j = R.t, E = R.l, O = 19; O > 4 && !j[Os[O - 1]]; --O)
    ;
  var P = u + 5 << 3, C = yn(o, Et) + yn(i, Pn) + s, D = yn(o, f) + yn(i, x) + s + 14 + 3 * O + yn(I, j) + 2 * I[16] + 3 * I[17] + 7 * I[18];
  if (c >= 0 && P <= C && P <= D)
    return ul(t, p, e.subarray(c, c + u));
  var _, F, L, G;
  if (vt(t, p, 1 + (D < C)), p += 2, D < C) {
    _ = ot(f, h, 0), F = f, L = ot(x, b, 0), G = x;
    var k = ot(j, E, 0);
    vt(t, p, y - 257), vt(t, p + 5, m - 1), vt(t, p + 10, O - 4), p += 14;
    for (var A = 0; A < O; ++A)
      vt(t, p + 3 * A, j[Os[A]]);
    p += 3 * O;
    for (var M = [v, l], U = 0; U < 2; ++U)
      for (var N = M[U], A = 0; A < N.length; ++A) {
        var $ = N[A] & 31;
        vt(t, p, k[$]), p += j[$], $ > 15 && (vt(t, p, N[A] >> 5 & 127), p += N[A] >> 12);
      }
  } else
    _ = am, F = Et, L = cm, G = Pn;
  for (var A = 0; A < a; ++A) {
    var q = r[A];
    if (q > 255) {
      var $ = q >> 18 & 31;
      mn(t, p, _[$ + 257]), p += F[$ + 257], $ > 7 && (vt(t, p, q >> 23 & 31), p += pi[$]);
      var T = q & 31;
      mn(t, p, L[T]), p += G[T], T > 3 && (mn(t, p, q >> 5 & 8191), p += fi[T]);
    } else
      mn(t, p, _[q]), p += F[q];
  }
  return mn(t, p, _[256]), p + F[256];
}, pm = /* @__PURE__ */ new ha([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), pl = /* @__PURE__ */ new be(0), fm = function(e, t, n, r, o, i) {
  var s = i.z || e.length, a = new be(r + s + 5 * (1 + Math.ceil(s / 7e3)) + o), c = a.subarray(r, a.length - o), u = i.l, p = (i.r || 0) & 7;
  if (t) {
    p && (c[0] = i.r >> 3);
    for (var g = pm[t - 1], f = g >> 13, h = g & 8191, w = (1 << n) - 1, x = i.p || new Me(32768), b = i.h || new Me(w + 1), S = Math.ceil(n / 3), v = 2 * S, y = function(K) {
      return (e[K] ^ e[K + 1] << S ^ e[K + 2] << v) & w;
    }, d = new ha(25e3), l = new Me(288), m = new Me(32), I = 0, A = 0, R = i.i || 0, j = 0, E = i.w || 0, O = 0; R + 2 < s; ++R) {
      var P = y(R), C = R & 32767, D = b[P];
      if (x[C] = D, b[P] = C, E <= R) {
        var _ = s - R;
        if ((I > 7e3 || j > 24576) && (_ > 423 || !u)) {
          p = dd(e, c, 0, d, l, m, A, j, O, R - O, p), j = I = A = 0, O = R;
          for (var F = 0; F < 286; ++F)
            l[F] = 0;
          for (var F = 0; F < 30; ++F)
            m[F] = 0;
        }
        var L = 2, G = 0, k = h, M = C - D & 32767;
        if (_ > 2 && P == y(R - M))
          for (var U = Math.min(f, _) - 1, N = Math.min(32767, R), $ = Math.min(258, _); M <= N && --k && C != D; ) {
            if (e[R + L] == e[R + L - M]) {
              for (var q = 0; q < $ && e[R + q] == e[R + q - M]; ++q)
                ;
              if (q > L) {
                if (L = q, G = M, q > U)
                  break;
                for (var T = Math.min(M, q - 2), z = 0, F = 0; F < T; ++F) {
                  var Z = R - M + F & 32767, Q = x[Z], J = Z - Q & 32767;
                  J > z && (z = J, D = Z);
                }
              }
            }
            C = D, D = x[C], M += C - D & 32767;
          }
        if (G) {
          d[j++] = 268435456 | Ls[L] << 18 | od[G];
          var V = Ls[L] & 31, B = od[G] & 31;
          A += pi[V] + fi[B], ++l[257 + V], ++m[B], E = R + L, ++I;
        } else
          d[j++] = e[R], ++l[e[R]];
      }
    }
    for (R = Math.max(R, E); R < s; ++R)
      d[j++] = e[R], ++l[e[R]];
    p = dd(e, c, u, d, l, m, A, j, O, R - O, p), u || (i.r = p & 7 | c[p / 8 | 0] << 3, p -= 7, i.h = b, i.p = x, i.i = R, i.w = E);
  } else {
    for (var R = i.w || 0; R < s + u; R += 65535) {
      var H = R + 65535;
      H >= s && (c[p / 8 | 0] = u, H = s), p = ul(c, p + 1, e.subarray(R, H));
    }
    i.i = s;
  }
  return ll(a, 0, r + ma(p) + o);
}, hm = /* @__PURE__ */ (function() {
  for (var e = new Int32Array(256), t = 0; t < 256; ++t) {
    for (var n = t, r = 9; --r; )
      n = (n & 1 && -306674912) ^ n >>> 1;
    e[t] = n;
  }
  return e;
})(), mm = function() {
  var e = -1;
  return {
    p: function(t) {
      for (var n = e, r = 0; r < t.length; ++r)
        n = hm[n & 255 ^ t[r]] ^ n >>> 8;
      e = n;
    },
    d: function() {
      return ~e;
    }
  };
}, ym = function(e, t, n, r, o) {
  if (!o && (o = { l: 1 }, t.dictionary)) {
    var i = t.dictionary.subarray(-32768), s = new be(i.length + e.length);
    s.set(i), s.set(e, i.length), e = s, o.w = i.length;
  }
  return fm(e, t.level == null ? 6 : t.level, t.mem == null ? o.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + t.mem, n, r, o);
}, zs = function(e, t, n) {
  for (; n; ++t)
    e[t] = n, n >>>= 8;
}, gm = function(e, t) {
  var n = t.filename;
  if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : t.level == 9 ? 2 : 0, e[9] = 3, t.mtime != 0 && zs(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n) {
    e[3] = 8;
    for (var r = 0; r <= n.length; ++r)
      e[r + 10] = n.charCodeAt(r);
  }
}, vm = function(e) {
  (e[0] != 31 || e[1] != 139 || e[2] != 8) && Qe(6, "invalid gzip data");
  var t = e[3], n = 10;
  t & 4 && (n += (e[10] | e[11] << 8) + 2);
  for (var r = (t >> 3 & 1) + (t >> 4 & 1); r > 0; r -= !e[n++])
    ;
  return n + (t & 2);
}, bm = function(e) {
  var t = e.length;
  return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
}, wm = function(e) {
  return 10 + (e.filename ? e.filename.length + 1 : 0);
};
function xm(e, t) {
  t || (t = {});
  var n = mm(), r = e.length;
  n.p(e);
  var o = ym(e, t, wm(t), 8), i = o.length;
  return gm(o, t), zs(o, i - 8, n.d()), zs(o, i - 4, r), o;
}
function Sm(e, t) {
  var n = vm(e);
  return n + 8 > e.length && Qe(6, "invalid gzip data"), um(e.subarray(n, -8), { i: 2 }, new be(bm(e)), t);
}
var Im = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Am = 0;
try {
  Im.decode(pl, { stream: !0 }), Am = 1;
} catch {
}
function ld(e) {
  return Object.assign(new RangeError(`Cannot create a buffer larger than maxOutputLength ${e}.`), { code: "ERR_BUFFER_TOO_LARGE" });
}
function qm(e, t = {}) {
  const n = t.maxOutputLength ?? Number.MAX_SAFE_INTEGER;
  if (e.length >= 18) {
    const o = e.length - 4;
    if ((e[o] | e[o + 1] << 8 | e[o + 2] << 16 | e[o + 3] << 24) >>> 0 > n) throw ld(n);
  }
  const r = Sm(e);
  if (r.length > n) throw ld(n);
  return r;
}
const Us = 131072, Rm = 2 * 1024 * 1024;
class Vr extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "StatusListError";
  }
}
function jm(e, t = Rm) {
  if (typeof e != "string" || !/^u[A-Za-z0-9_-]+$/.test(e))
    throw new Vr("MALFORMED", 'encodedList must be multibase base64url (prefix "u").');
  let n;
  try {
    n = qm($m(e.slice(1)), { maxOutputLength: t });
  } catch (r) {
    throw r.code === "ERR_BUFFER_TOO_LARGE" || /maxOutputLength|buffer/i.test(String(r)) ? new Vr("TOO_LARGE", `Decompressed status list exceeds ${t} bytes.`) : new Vr("MALFORMED", "encodedList is not valid GZIP data.");
  }
  if (n.byteLength * 8 < Us)
    throw new Vr("TOO_SHORT", `Status list has fewer than ${Us} bits.`);
  return new Uint8Array(n);
}
function $m(e) {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", n = new Uint8Array(Math.floor(e.length * 6 / 8));
  let r = 0, o = 0, i = 0;
  for (const s of e)
    r = r << 6 | t.indexOf(s), o += 6, o >= 8 && (o -= 8, n[i++] = r >> o & 255);
  return n;
}
function _m(e, t) {
  const n = e[Math.floor(t / 8)];
  if (n === void 0) throw new RangeError(`Status index ${t} is outside the list.`);
  return (n >> 7 - t % 8 & 1) === 1;
}
function fl(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Vs(e, t) {
  const n = e.credentialStatus;
  if (n === void 0) return {};
  const r = Array.isArray(n) ? n : [n];
  if (r.length === 0 || !r.every(fl)) return { reason: "Unsupported credentialStatus form." };
  const o = r.filter((i) => t.includes(String(i.statusPurpose)));
  return o.length > 1 ? { reason: `Several status entries for ${t.join("/")}.` } : o.length === 0 ? { reason: `No status entry has an accepted purpose (${t.join(", ")}); found ${r.map((i) => String(i.statusPurpose)).join(", ")}.` } : { entry: o[0] };
}
function Pm(e, t, n, r, o, i = o) {
  const s = Vs(e, r.purposes), a = s.entry;
  if (a === void 0 && s.reason === void 0)
    return r.required ? { state: "not_established", reason: "Status is required by the profile but the credential names none.", sources: [] } : { state: "established", reason: "The profile does not require status for this credential.", sources: [] };
  if (a === void 0) return { state: "not_established", reason: s.reason, sources: ["/credentialStatus"] };
  if (a.type !== "BitstringStatusListEntry" || typeof a.statusListCredential != "string" || typeof a.statusListIndex != "string")
    return { state: "not_established", reason: "Unsupported credentialStatus form.", sources: ["/credentialStatus"] };
  const c = a.statusListCredential, u = ["/credentialStatus", c];
  if (t === void 0)
    return { state: "not_established", reason: `Status list ${c} is unavailable.`, listUri: c, sources: u };
  if (n !== "established")
    return { state: "not_established", reason: `Status list ${c} is not protected and valid.`, listUri: c, sources: u };
  if (t.id !== c)
    return { state: "not_established", reason: `Resolved status list identifies itself as ${String(t.id)}.`, listUri: c, sources: u };
  if (t.issuer !== e.issuer)
    return { state: "not_established", reason: `Status list is signed by ${String(t.issuer)}, who may not state status for credentials of ${String(e.issuer)}.`, listUri: c, sources: u };
  const p = t.credentialSubject;
  if (!fl(p) || p.type !== "BitstringStatusList" || p.statusPurpose !== a.statusPurpose)
    return { state: "not_established", reason: "Status list purpose does not match the entry.", listUri: c, sources: u };
  const g = Date.parse(o), f = Date.parse(String(t.validFrom));
  if (!Number.isFinite(g) || !Number.isFinite(f) || (g - f) / 1e3 > r.maxAgeSeconds)
    return { state: "not_established", reason: `Status list is older than the profile's ${r.maxAgeSeconds} s freshness limit.`, listUri: c, sources: u };
  const h = Date.parse(i);
  if (!Number.isFinite(h) || h < f)
    return { state: "not_established", reason: `Status list observed at ${String(t.validFrom)} cannot establish status at the earlier activity time ${i}; historical status is unavailable.`, listUri: c, sources: u };
  if (!/^(0|[1-9][0-9]*)$/.test(a.statusListIndex))
    return { state: "not_established", reason: "statusListIndex is not a non-negative integer.", listUri: c, sources: u };
  let w;
  try {
    w = _m(jm(p.encodedList), Number(a.statusListIndex));
  } catch (S) {
    return { state: "not_established", reason: `Status list cannot be read: ${S.message}`, listUri: c, sources: u };
  }
  const [x, b] = a.statusPurpose === "suspension" ? ["Suspended", "Not suspended"] : ["Revoked", "Not revoked"];
  return w ? { state: "contradicted", reason: `${x}: bit ${a.statusListIndex} of ${c} is set.`, listUri: c, sources: u } : { state: "established", reason: `${b}: bit ${a.statusListIndex} of ${c} is clear.`, listUri: c, sources: u };
}
const Tm = Object.freeze({ maxResources: 1e3, maxBytes: 2e7 });
function ya(e, t, n) {
  if (!(e.binding.id === t.id && e.binding.version === t.version && e.profile.id === n.id && e.profile.version === n.version))
    return `Requested ${e.profile.id}@${e.profile.version} with binding ${e.binding.id}@${e.binding.version} is not the verifier-selected profile ${n.id}@${n.version} for ${t.id}@${t.version}.`;
}
function ga(e, t) {
  const n = `${e.targetId} | plan`;
  return ri({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: [],
    authorization: e.selectedClaims.map((r) => ({
      claimId: r.id,
      routeWitnessIds: [],
      ...ln("Not evaluated: the plan was refused at gate 0.")
    })),
    support: [],
    conformity: e.conformity ? { requested: !0, ...e.conformity, ...ln("Not evaluated: the plan was refused at gate 0.") } : { requested: !1, execution: "not_run" },
    decision: "not_established",
    trace: [{
      gate: 0,
      nodeUse: n,
      predicate: "accepted-plan",
      state: "not_established",
      execution: "executed",
      reason: t,
      sources: []
    }],
    resources: [],
    limitations: ["The request did not name the verifier-selected profile and binding; nothing was evaluated."]
  });
}
async function va(e, t, n, r, o) {
  const i = Ca(t.openSession({
    maxResources: e.resolverLimits.maxResources,
    maxBytes: e.resolverLimits.maxBytes
  })), s = Ca(t.openSession(Tm)), a = { manifest: n, evaluationTime: e.evaluationTime, staticResolver: s, ...o ? { binding: o } : {} }, c = (m) => JSON.parse(new TextDecoder().decode(i.resolve(m).bytes)), u = await Ur(e.targetId, i, a), p = [u], g = /* @__PURE__ */ new Map([[e.targetId, 0]]);
  for (const m of e.suppliedEvidence)
    g.has(m) || (g.set(m, 1), p.push(await Ur(m, i, a)));
  for (let m = 0; m < p.length; m++) {
    const I = p[m], A = g.get(I.artifactId);
    if (I.protection.state !== "established" || A + 1 > e.resolverLimits.maxDepth) continue;
    const R = c(I.artifactId), j = [
      ...(Array.isArray(R.termsOfUse) ? R.termsOfUse : []).map((E) => E?.authorizationCredential?.id),
      ...(Array.isArray(R.evidence) ? R.evidence : []).map((E) => E?.id)
    ].filter((E) => typeof E == "string");
    for (const E of j)
      g.has(E) || (g.set(E, A + 1), p.push(await Ur(E, i, a)));
  }
  const f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  for (const m of p) {
    if (m.protection.state !== "established") {
      w.set(m.artifactId, void 0);
      continue;
    }
    const I = c(m.artifactId).id;
    w.set(m.artifactId, I === m.artifactId ? oe("established", ["Artifact identifies itself by its resolved identity."], ["/id"]) : oe("contradicted", [`Artifact resolved as ${m.artifactId} identifies itself as ${String(I)}.`], ["/id"]));
  }
  const x = async (m, I, A) => {
    const R = g.get(m) + 1;
    if (R > e.resolverLimits.maxDepth)
      return {
        state: "not_established",
        sources: ["/credentialStatus"],
        reason: `Status list is at depth ${R}, beyond the request's maxDepth ${e.resolverLimits.maxDepth}.`
      };
    const j = Vs(I, A.purposes).entry, E = typeof j?.statusListCredential == "string" ? j.statusListCredential : void 0;
    let O, P = "not_established";
    if (E !== void 0) {
      f.has(E) || f.set(E, await Ur(E, i, a));
      const C = f.get(E);
      C.digestSRI !== void 0 && C.protection.state === "established" ? (O = c(E), P = we([C.protection.state, C.validity.state])) : C.digestSRI !== void 0 && (O = {}, P = C.protection.state);
    }
    return Pm(I, O, P, A, e.evaluationTime, e.activityTime);
  }, b = { required: !0, purposes: ["suspension"], maxAgeSeconds: r.credentialStatus.maxAgeSeconds }, S = /* @__PURE__ */ new Map();
  for (const m of p) {
    if (m.protection.state !== "established") {
      h.set(m.artifactId, void 0);
      continue;
    }
    const I = c(m.artifactId);
    h.set(m.artifactId, await x(m.artifactId, I, r.credentialStatus)), Vs(I, ["suspension"]).entry !== void 0 && S.set(m.artifactId, await x(m.artifactId, I, b));
  }
  const v = (m) => [
    m.protection,
    w.get(m.artifactId) ? {
      artifactId: m.artifactId,
      ...w.get(m.artifactId),
      reasons: w.get(m.artifactId).reasons.map((I) => `identity: ${I}`)
    } : { artifactId: m.artifactId, ...ln("identity: Not evaluated because protection is not established.") },
    {
      artifactId: m.artifactId,
      ...m.validity,
      reasons: m.validity.reasons.map((I) => `validity: ${I}`)
    },
    ...h.get(m.artifactId) ? [{ artifactId: m.artifactId, ...oe(
      h.get(m.artifactId).state,
      [`status: ${h.get(m.artifactId).reason}`],
      [...h.get(m.artifactId).sources]
    ) }] : [{
      artifactId: m.artifactId,
      ...ln("status: Not evaluated because protection is not established.")
    }],
    ...m.relatedResources.map((I) => ({
      artifactId: I.id,
      ...oe(I.state, [`integrity (from ${m.artifactId}): ${I.reason}`], ["/relatedResource"])
    }))
  ], y = /* @__PURE__ */ new Map();
  for (const m of p) {
    const I = [
      ["protection", m.protection.state, m.protection.reasons.join(" ")],
      ["identity", w.get(m.artifactId)?.state ?? "not_established", w.get(m.artifactId)?.reasons.join(" ") ?? "not evaluated"],
      ["validity", m.validity.state, m.validity.reasons.join(" ")],
      ["status", h.get(m.artifactId)?.state ?? "not_established", h.get(m.artifactId)?.reason ?? "not evaluated"]
    ], A = we(I.map((j) => j[1])), R = S.get(m.artifactId);
    y.set(m.artifactId, {
      uri: m.artifactId,
      usable: A,
      reason: I.filter((j) => j[1] !== "established").map((j) => `${j[0]}: ${j[2]}`).join("; ") || "usable",
      ...A === "established" ? { document: c(m.artifactId) } : {},
      ...R ? { suspension: { state: R.state, reason: R.reason } } : {}
    });
  }
  const d = [], l = [];
  p.forEach((m, I) => {
    const A = I === 0 ? "target" : "supplied-evidence", R = ui(m.artifactId, m.digestSRI, A, e);
    for (const O of m.checks)
      d.push({
        gate: em[O.check],
        nodeUse: R,
        predicate: O.check,
        state: O.state,
        execution: "executed",
        reason: O.reason,
        sources: [m.artifactId]
      });
    for (const O of m.relatedResources)
      d.push({
        gate: 1,
        nodeUse: R,
        predicate: "related-resource-integrity",
        state: O.state,
        execution: "executed",
        reason: `${O.id}: ${O.reason}`,
        sources: ["/relatedResource", O.id]
      });
    const j = w.get(m.artifactId);
    d.push(j ? {
      gate: 1,
      nodeUse: R,
      predicate: "resource-identity",
      state: j.state,
      execution: "executed",
      reason: j.reasons.join(" "),
      sources: [...j.sourcePointers]
    } : {
      gate: 1,
      nodeUse: R,
      predicate: "resource-identity",
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated because protection is not established.",
      sources: []
    }), d.push({
      gate: 3,
      nodeUse: R,
      predicate: "validity-period",
      state: m.validity.state,
      execution: m.validity.execution,
      reason: m.validity.reasons.join(" ") || "Not evaluated.",
      sources: [...m.validity.sourcePointers]
    });
    const E = h.get(m.artifactId);
    d.push(E ? {
      gate: 3,
      nodeUse: R,
      predicate: "credential-status",
      state: E.state,
      execution: "executed",
      reason: E.reason,
      sources: [...E.sources]
    } : {
      gate: 3,
      nodeUse: R,
      predicate: "credential-status",
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated because protection is not established.",
      sources: []
    }), m.digestSRI !== void 0 && l.push({
      uri: m.artifactId,
      digestSRI: m.digestSRI,
      kind: "artifact",
      source: "catalog",
      observedAt: e.evaluationTime
    });
  });
  for (const [m, I] of f)
    I.digestSRI !== void 0 && l.push({ uri: m, digestSRI: I.digestSRI, kind: "status", source: "catalog", observedAt: e.evaluationTime });
  return {
    target: u,
    artifacts: p,
    facts: y,
    verificationOf: v,
    artifactVerification: p.flatMap(v),
    trace: d,
    resources: l
  };
}
const Cm = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/, ba = Object.freeze({ "kg/kg": 0, "mg/kg": -6 });
function hi(e) {
  if (typeof e != "string" || !Cm.test(e)) return;
  const [t, n = ""] = e.split(".");
  return { n: BigInt(`${t}${n}`), scale: n.length };
}
function Tn(e, t) {
  const n = hi(e), r = typeof t == "string" ? ba[t] : void 0;
  if (!(n === void 0 || r === void 0))
    return r <= 0 ? { n: n.n, scale: n.scale - r } : { n: n.n * 10n ** BigInt(r), scale: n.scale };
}
function $e(e, t) {
  const n = Math.max(e.scale, t.scale), r = e.n * 10n ** BigInt(n - e.scale), o = t.n * 10n ** BigInt(n - t.scale);
  return r < o ? -1 : r > o ? 1 : 0;
}
function Em(e, t) {
  const n = Math.max(e.scale, t.scale);
  return { n: e.n * 10n ** BigInt(n - e.scale) + t.n * 10n ** BigInt(n - t.scale), scale: n };
}
function In(e) {
  const t = e.n.toString().padStart(e.scale + 1, "0");
  if (e.scale === 0) return t;
  const n = t.slice(-e.scale).replace(/0+$/, "");
  return n.length === 0 ? t.slice(0, -e.scale) : `${t.slice(0, -e.scale)}.${n}`;
}
function Gs(e) {
  const t = e.range;
  if (t === void 0) return "Scope record has no range.";
  const n = Tn(t.from, t.unit), r = Tn(t.to, t.unit);
  return n === void 0 || r === void 0 ? `Unsupported or malformed range ${String(t.from)}–${String(t.to)} ${String(t.unit)}.` : $e(n, r) > 0 ? "Scope record range is reversed." : { low: n, high: r };
}
const Gr = (e) => Array.isArray(e) ? e.filter((t) => typeof t == "string") : [], ud = (e, t) => e.length > 0 && e.every((n) => t.includes(n));
function km(e, t) {
  if (e.length === 0) return { state: "not_established", reason: "The projected scope has no records.", witnesses: [] };
  const n = [];
  for (const r of e) {
    const o = Gs(r);
    if (typeof o == "string")
      return { state: /reversed/.test(o) ? "contradicted" : "not_established", reason: `${String(r.id)}: ${o}`, witnesses: n };
    const i = Gr(r.allowedPropertyIris), s = Gr(r.allowedMethodIris);
    if (i.length === 0 || s.length === 0 || typeof r.matrixIri != "string" || typeof r.formIri != "string" || typeof r.quantityKindIri != "string")
      return { state: "not_established", reason: `${String(r.id)}: a restricted dimension is missing or empty.`, witnesses: n };
    const a = t.find((c) => {
      const u = Gs(c);
      return typeof u != "string" && c.matrixIri === r.matrixIri && c.formIri === r.formIri && c.quantityKindIri === r.quantityKindIri && ud(i, Gr(c.allowedPropertyIris)) && ud(s, Gr(c.allowedMethodIris)) && $e(o.low, u.low) >= 0 && $e(o.high, u.high) <= 0;
    });
    if (a === void 0)
      return { state: "contradicted", reason: `${String(r.id)} is not contained in any single parent record.`, witnesses: n };
    n.push({ child: String(r.id), parent: String(a.id) });
  }
  return { state: "established", reason: `Each projected record lies within one parent record (${n.map((r) => `${r.child} ⊆ ${r.parent}`).join("; ")}).`, witnesses: n };
}
const An = "https://vc4qi.example/bindings/rm/1#", qn = Object.freeze({
  issueRmCertificate: `${An}issueRmCertificate`,
  maintainRmScope: `${An}maintainRmScope`,
  issueRmStudy: `${An}issueRmStudy`
}), je = (e, t, n = []) => ({ id: e, state: "established", reason: t, sources: n }), Ue = (e, t, n = []) => ({ id: e, state: "contradicted", reason: t, sources: n }), me = (e, t, n = []) => ({ id: e, state: "not_established", reason: t, sources: n }), kt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), ze = (e) => Array.isArray(e) ? e : [], Xe = (e) => kt(e.credentialSubject) ? e.credentialSubject : {}, Fs = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0, ct = (e, t) => ze(Xe(e).permittedActivity).includes(t);
function hl(e, t = "RmAuthorizationPolicy") {
  return ze(e.termsOfUse).filter(kt).filter((n) => n.type === t && kt(n.authorizationCredential)).map((n) => n.authorizationCredential).filter((n) => typeof n.id == "string").map((n) => ({ id: n.id, type: n.type }));
}
function Ye(e, t, n, r, o, i = "RmAuthorizationPolicy") {
  const s = hl(t, i).filter((u) => u.type === n).map((u) => u.id);
  if (s.length === 0)
    return { basis: me(e, `No recognized authorization policy references a ${n}.`, ["/termsOfUse"]) };
  if (s.length > 1)
    return { basis: me(e, `Several ${n} references; this binding has no deterministic selection.`, ["/termsOfUse"]) };
  const a = s[0];
  if (o.includes(a))
    return { basis: me(e, `Circular authorization: ${a} is already on the evaluation path.`, ["/termsOfUse", a]) };
  const c = r(a);
  return c === void 0 ? { basis: me(e, `Referenced ${n} ${a} is unavailable.`, ["/termsOfUse", a]) } : c.usable !== "established" || c.document === void 0 ? { basis: {
    id: e,
    state: c.usable === "contradicted" ? "contradicted" : "not_established",
    reason: `Referenced ${n} ${a} is not usable: ${c.reason}`,
    sources: ["/termsOfUse", a]
  } } : Fs(c.document) !== n ? { basis: Ue(e, `Reference declares ${n}, but ${a} is a ${String(Fs(c.document))}.`, ["/termsOfUse", a]) } : { basis: je(e, `References ${n} ${a}.`, ["/termsOfUse", a]), node: c };
}
function ut(e, t, n, r) {
  const o = Xe(t).id;
  return typeof o != "string" || typeof n != "string" ? me(e, `${r}: grantee or exercising actor is missing.`, ["/credentialSubject/id", "/issuer"]) : o === n ? je(e, `${r}: grantee ${o} is the exercising actor.`, ["/credentialSubject/id", "/issuer"]) : Ue(e, `${r}: grantee ${o} is not the exercising actor ${n}.`, ["/credentialSubject/id", "/issuer"]);
}
function Ot(e, t, n, r) {
  const o = r.trustAnchors.find((i) => i.id === t.issuer);
  return o === void 0 ? me(e, `${String(t.issuer)} is not a configured trust anchor.`, ["/issuer"]) : o.purposes.includes(n) ? je(e, `${String(t.issuer)} is a configured anchor for ${n}.`, ["/issuer"]) : me(e, `${String(t.issuer)} is an anchor, but not for ${n}.`, ["/issuer"]);
}
function Lt(e, t) {
  const n = "scope-in-force-at-activity", r = Xe(e).activityTime, o = Date.parse(String(r));
  if (typeof r != "string" || !Number.isFinite(o))
    return me(n, "The certificate states no activity time.", ["/credentialSubject/activityTime"]);
  for (const [i, s] of t) {
    const a = Date.parse(String(s.validFrom)), c = Date.parse(String(s.validUntil));
    if (!Number.isFinite(a) || o < a)
      return me(n, `${i} is valid only from ${String(s.validFrom)}, after the activity at ${r}; a later scope cannot authorize it.`, ["/credentialSubject/activityTime", "/validFrom"]);
    if (Number.isFinite(c) && o > c)
      return me(n, `${i} expired at ${String(s.validUntil)}, before the activity at ${r}.`, ["/credentialSubject/activityTime", "/validUntil"]);
  }
  return je(n, `${t.map((i) => i[0]).join(" and ")} ${t.length > 1 ? "were" : "was"} in force at the activity time ${r}.`, ["/credentialSubject/activityTime"]);
}
function pe(e, t, n, r) {
  return { id: e, state: we(t.map((o) => o.state)), execution: "executed", bases: t, chain: n, ...r ? { scope: r } : {} };
}
function Mm(e, t, n, r) {
  const o = e.document, i = [], s = [e.uri], a = Ye("authorizing-reference", o, "RmOperationalScope", t, r);
  if (i.push(a.basis), !a.node) return pe("operational-scope", i, s);
  const c = a.node.document;
  s.push(a.node.uri), i.push(ut("principal-binding", c, o.issuer, "Operational scope O")), i.push(c.issuer === Xe(c).id ? je("self-maintained-scope", "O is issued by its own grantee.", ["/issuer"]) : Ue("self-maintained-scope", "O is not issued by its own grantee.", ["/issuer"])), i.push(ct(c, qn.issueRmCertificate) ? je("activity-permission", "O permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : Ue("activity-permission", "O does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"]));
  const u = Ye("maintenance-grant", c, "RmAccreditation", t, [...r, a.node.uri]);
  if (i.push(u.basis), !u.node) return pe("operational-scope", i, s);
  const p = u.node.document;
  s.push(u.node.uri), i.push(ut("accreditation-grantee", p, c.issuer, "Accreditation A")), i.push(ct(p, qn.maintainRmScope) && ct(p, qn.issueRmCertificate) ? je("projection-permission", "A permits maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]) : Ue("projection-permission", "A does not permit maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]));
  const g = km(ze(Xe(c).scope).filter(kt), ze(Xe(p).scope).filter(kt));
  return i.push({ id: "bounded-projection", state: g.state, reason: g.reason, sources: ["/credentialSubject/scope"] }), i.push(Ot("trust-anchor", p, "accredit-rm-producers", n)), i.push(Lt(o, [["O", c], ["A", p]])), pe("operational-scope", i, s, a.node.uri);
}
function Om(e, t, n, r) {
  const o = e.document, i = [], s = [e.uri], a = Ye("authorizing-reference", o, "RmAccreditation", t, r);
  if (i.push(a.basis), !a.node) return pe("direct-accreditation", i, s);
  const c = a.node.document;
  return s.push(a.node.uri), i.push(ut("principal-binding", c, o.issuer, "Accreditation A")), i.push(ct(c, qn.issueRmCertificate) ? je("activity-permission", "A permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : Ue("activity-permission", "A does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"])), i.push(Ot("trust-anchor", c, "accredit-rm-producers", n)), i.push(Lt(o, [["A", c]])), pe("direct-accreditation", i, s, a.node.uri);
}
const Lm = Object.freeze({
  "operational-scope": Mm,
  "direct-accreditation": Om
});
function Nm(e, t, n) {
  const r = "restriction:accreditation-suspension", o = e.document.issuer, i = /* @__PURE__ */ new Set([e.uri]), s = [e.document], a = [];
  for (; s.length > 0; )
    for (const p of hl(s.shift())) {
      if (i.has(p.id)) continue;
      i.add(p.id);
      const g = t(p.id);
      if (g?.usable !== "established" || g.document === void 0) continue;
      s.push(g.document);
      const f = g.document, h = n.trustAnchors.some((w) => w.id === f.issuer && w.purposes.includes("accredit-rm-producers"));
      Fs(f) === "RmAccreditation" && h && Xe(f).id === o && a.push(g);
    }
  if (a.length === 0)
    return me(r, `No accreditation of ${String(o)} is reached, so the absence of a suspension is not established.`);
  const c = a.map((p) => p.suspension === void 0 ? me(r, `${p.uri} carries no suspension status.`, [p.uri]) : { id: r, state: p.suspension.state, reason: `${p.uri}: ${p.suspension.reason}`, sources: [p.uri] }), u = we(c.map((p) => p.state));
  return {
    id: r,
    state: u,
    reason: u === "contradicted" ? `The actor's certification activity is suspended. ${c.filter((p) => p.state === "contradicted").map((p) => p.reason).join(" ")}` : c.map((p) => p.reason).join(" "),
    sources: a.map((p) => p.uri)
  };
}
const Dm = Object.freeze({
  "accreditation-suspension": Nm
});
function Ln(e, t, n) {
  const r = [
    ...t,
    ...n.map((u) => ({ id: u, state: "not_established", execution: "not_run", bases: [], chain: [] }))
  ], o = e.length === 0 ? "established" : we(e.map((u) => u.state)), i = r.length === 0 ? "not_established" : En(r.map((u) => u.state)), s = we([o, i]), a = r.find((u) => u.state === "established"), c = s === "established" ? `Authorized through route ${a.id}; global restrictions hold.` : o === "contradicted" ? "An applicable global restriction applies to every route." : i === "contradicted" ? "Every permitted route is contradicted." : n.length > 0 ? "The route search stopped at its budget before every route was evaluated." : "No complete route is established.";
  return { state: s, reason: c, restrictions: e, routes: r };
}
function mi(e, t) {
  const n = e.routes.filter((o) => o.execution === "executed").map((o) => {
    const s = (o.scope === void 0 ? void 0 : t(o)) ?? me("claim-coverage", "The route did not reach a scope credential.");
    return { ...o, bases: [...o.bases, s], state: we([o.state, s.state]) };
  }), r = e.routes.filter((o) => o.execution === "not_run").map((o) => o.id);
  return Ln(e.restrictions, n, r);
}
function zm(e, t, n) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] };
  const r = e, o = n.authority.certificateRoutes, i = n.authority.maxRoutes, s = o.slice(0, i).map((c) => {
    const u = Lm[c];
    return u === void 0 ? pe(c, [me("installed-evaluator", `Route ${c} has no installed evaluator.`)], [r.uri]) : u(r, t, n, [r.uri]);
  }), a = n.authority.globalRestrictions.map((c) => {
    const u = Dm[c];
    return u === void 0 ? me(`restriction:${c}`, `Global restriction ${c} has no installed evaluator.`) : u(r, t, n);
  });
  return Ln(a, s, o.slice(i));
}
function Um(e, t, n, r) {
  const o = e.document, i = [], s = [e.uri], a = Ye("laboratory-authority-reference", o, "RmLabAuthority", t, r);
  if (i.push(a.basis), !a.node) return pe("laboratory-authority", i, s);
  const c = a.node.document;
  s.push(a.node.uri), i.push(ut("laboratory-binding", c, o.issuer, "Laboratory authority H")), i.push(ct(c, qn.issueRmStudy) ? je("study-permission", "H permits issuing RM studies.", ["/credentialSubject/permittedActivity"]) : Ue("study-permission", "H does not permit issuing RM studies.", ["/credentialSubject/permittedActivity"]));
  const u = Xe(o), p = ze(Xe(c).scope).filter(kt).some((g) => g.matrixIri === u.matrixIri && ze(g.allowedPropertyIris).includes(u.propertyIri) && ze(g.studyTypeIris).includes(u.studyTypeIri));
  return i.push(p ? je("study-scope", "H covers this matrix, property and study type.", ["/credentialSubject/scope"]) : Ue("study-scope", "H does not cover this matrix, property and study type.", ["/credentialSubject/scope"])), i.push(Ot("laboratory-anchor", c, "recognize-rm-laboratories", n)), pe("laboratory-authority", i, s);
}
function Vm(e, t, n) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const r = e.document, o = ze(r.evidence).filter(kt).filter((S) => S.type === "RmStudyReference").map((S) => String(S.id));
  if (o.length === 0)
    return { state: "not_established", reason: "D cites no required study.", bases: [me("study-reference", "No RmStudyReference in evidence.", ["/evidence"])], chain: [e.uri] };
  if (o.length > 1)
    return { state: "not_established", reason: "Several study references; this binding has no composition for them.", bases: [me("study-reference", "Ambiguous study references.", ["/evidence"])], chain: [e.uri] };
  const i = o[0], s = t(i);
  if (s === void 0) {
    const S = me("study-reference", `Required study ${i} is unavailable.`, ["/evidence", i]);
    return { state: "not_established", reason: S.reason, bases: [S], chain: [e.uri] };
  }
  if (s.usable !== "established" || s.document === void 0) {
    const S = {
      id: "study-reference",
      state: s.usable === "contradicted" ? "contradicted" : "not_established",
      reason: `Required study ${i} is not usable: ${s.reason}`,
      sources: ["/evidence", i]
    };
    return { state: S.state, reason: S.reason, bases: [S], chain: [e.uri] };
  }
  const a = s.document, c = Xe(a), u = Xe(r), p = kt(ze(u.materialPropertiesList)[0]) ? ze(ze(u.materialPropertiesList)[0].results)[0] : void 0, g = ze(u.materials)[0], f = [je("study-reference", `Cites study ${i}.`, ["/evidence", i])];
  f.push(c.id === u.id ? je("same-batch", `S concerns batch ${String(c.id)}.`, ["/credentialSubject/id"]) : Ue("same-batch", `S concerns ${String(c.id)}, not batch ${String(u.id)}.`, ["/credentialSubject/id"])), f.push(c.propertyIri === p?.propertyIri && c.matrixIri === g?.matrixIri ? je("same-property-and-matrix", "S concerns the certified property and matrix.", ["/credentialSubject/propertyIri"]) : Ue("same-property-and-matrix", "S concerns another property or matrix.", ["/credentialSubject/propertyIri"])), f.push(c.studyTypeIri === `${An}Homogeneity` && c.outcomeIri === `${An}Homogeneous` ? je("study-outcome", "S reports the batch homogeneous.", ["/credentialSubject/outcomeIri"]) : Ue("study-outcome", "S does not report a homogeneous batch.", ["/credentialSubject/outcomeIri"]));
  const h = Date.parse(String(c.activityTime)), w = Date.parse(String(u.activityTime));
  f.push(Number.isFinite(h) && Number.isFinite(w) ? h <= w ? je("study-precedes-certification", "The study precedes the certification activity.", ["/credentialSubject/activityTime"]) : Ue("study-precedes-certification", "The study postdates the certification activity.", ["/credentialSubject/activityTime"]) : me("study-precedes-certification", "An activity time is missing.", ["/credentialSubject/activityTime"]));
  const x = Um(s, t, n, [e.uri, i]);
  f.push(...x.bases);
  const b = we(f.map((S) => S.state));
  return {
    state: b,
    reason: b === "established" ? "Required study is applicable and independently authorized." : b === "contradicted" ? "Required study is contradicted." : "Required study is not established.",
    bases: f,
    chain: [e.uri, ...x.chain]
  };
}
const Ut = (e) => e !== null && typeof e == "object" && !Array.isArray(e), ml = (e) => Array.isArray(e) ? e : [], pd = (e) => ml(e).filter((t) => typeof t == "string"), de = (e) => String(e).split(/[#/]/).pop();
function Gm(e, t, n) {
  const r = [t], o = Ut(e.credentialSubject) ? e.credentialSubject : {}, i = ml(o.materials).filter(Ut);
  if (i.length !== 1) return { state: "not_established", reason: "The certificate must name exactly one material.", sources: ["/credentialSubject/materials"] };
  const s = i[0];
  if (!Ut(n)) return { state: "not_established", reason: `No result at ${t}.`, sources: r };
  const a = Ut(n.data) && Ut(n.data.quantity) ? n.data.quantity : void 0;
  if (a === void 0) return { state: "not_established", reason: "The result has no quantity.", sources: r };
  const c = Ut(a.unit) ? a.unit.ucumCode : void 0;
  if (typeof c != "string" || ba[c] === void 0)
    return { state: "not_established", reason: `Unit ${String(c)} has no supported mapping (mg/kg, kg/kg).`, sources: [`${t}/data/quantity/unit`] };
  const u = Ut(a.uncertainty) ? a.uncertainty : void 0, p = hi(u?.coverageFactor);
  if (p === void 0 || $e(p, { n: 2n, scale: 0 }) !== 0)
    return { state: "not_established", reason: `Coverage factor ${String(u?.coverageFactor)} is not the binding's k = 2.`, sources: [`${t}/data/quantity/uncertainty`] };
  const g = Tn(a.value, c), f = Tn(u?.expandedUncertainty, c);
  if (g === void 0 || f === void 0)
    return { state: "not_established", reason: "Value or expanded uncertainty is not a supported decimal.", sources: [`${t}/data/quantity`] };
  const h = {
    matrixIri: s.matrixIri,
    formIri: s.formIri,
    propertyIri: n.propertyIri,
    methodIri: n.methodIri,
    quantityKindIri: a.quantityKind
  }, w = Object.entries(h).filter(([, x]) => typeof x != "string").map(([x]) => x);
  return w.length > 0 ? { state: "not_established", reason: `Missing governed identifier: ${w.join(", ")}.`, sources: r } : {
    state: "established",
    reason: `Mapped ${de(h.propertyIri)} by ${de(h.methodIri)} in ${de(h.matrixIri)}: ${String(a.value)} ± ${String(u?.expandedUncertainty)} ${c} (k = 2).`,
    sources: r,
    coordinates: { ...h, value: g, uncertainty: f }
  };
}
function Fm(e, t, n, r) {
  if (t.includes(e)) return { state: "established", reason: `method ${de(e)}` };
  const o = n.find((s) => s.method === e && t.includes(s.revises));
  if (o === void 0) return { state: "contradicted", reason: `method ${de(e)} is not allowed` };
  const i = `${de(o.revises)} → ${de(e)}`;
  switch (r) {
    case "accept-successor":
      return { state: "established", reason: `method ${de(e)} as accepted successor (${i})` };
    case "require-extension":
      return { state: "contradicted", reason: `method ${de(e)} needs an explicit scope extension (${i})` };
    default:
      return { state: "not_established", reason: `no governed ${i} succession rule in the profile` };
  }
}
function Bm(e, t, n, r) {
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: ["/credentialSubject/scope"] };
  const o = t.map((a) => {
    const c = String(a.id), u = Gs(a);
    if (typeof u == "string")
      return { id: c, state: /reversed/.test(u) ? "contradicted" : "not_established", reason: `${de(c)}: ${u}` };
    const p = [];
    a.matrixIri !== e.matrixIri && p.push(`matrix ${de(e.matrixIri)} ≠ ${de(a.matrixIri)}`), a.formIri !== e.formIri && p.push(`form ${de(e.formIri)} ≠ ${de(a.formIri)}`), a.quantityKindIri !== e.quantityKindIri && p.push(`quantity kind ${de(e.quantityKindIri)} ≠ ${de(a.quantityKindIri)}`), pd(a.allowedPropertyIris).includes(e.propertyIri) || p.push(`property ${de(e.propertyIri)} is not allowed`), $e(e.value, u.low) < 0 && p.push("value is below the range"), $e(e.value, u.high) > 0 && p.push("value is above the range");
    const g = Fm(e.methodIri, pd(a.allowedMethodIris), n, r);
    if (p.length > 0 || g.state === "contradicted")
      return { id: c, state: "contradicted", reason: `${de(c)}: ${[...p, ...g.state === "contradicted" ? [g.reason] : []].join("; ")}` };
    if (g.state === "not_established") return { id: c, state: "not_established", reason: `${de(c)}: ${g.reason}` };
    const f = In(Zr(u.low, "mg/kg")), h = In(Zr(u.high, "mg/kg"));
    return {
      id: c,
      state: "established",
      reason: `${de(c)} covers ${de(e.propertyIri)}, ${g.reason}, ${de(e.matrixIri)}/${de(e.formIri)}, ${In(Zr(e.value, "mg/kg"))} mg/kg within ${f}–${h} mg/kg`
    };
  }), i = En(o.map((a) => a.state)), s = o.find((a) => a.state === "established");
  return {
    state: i,
    reason: s ? s.reason : `No single scope record covers the claim (${o.map((a) => a.reason).join(" | ")}).`,
    sources: ["/credentialSubject/scope"],
    ...s ? { record: s.id } : {}
  };
}
function Zr(e, t) {
  const n = ba[t];
  return n >= 0 ? { n: e.n, scale: e.scale + n } : e.scale + n >= 0 ? { n: e.n, scale: e.scale + n } : { n: e.n * 10n ** BigInt(-(e.scale + n)), scale: 0 };
}
function Hm(e, t, n) {
  if (e.propertyIri !== t.propertyIri || e.quantityKindIri !== t.quantityKindIri)
    return { state: "not_established", reason: `Requirement ${t.id} does not apply to this claim's property and quantity kind.`, sources: [] };
  const r = Tn(t.upperLimit.value, t.upperLimit.unit);
  if (r === void 0) return { state: "not_established", reason: `Requirement ${t.id} has an unsupported limit.`, sources: [] };
  const o = t.upperLimit.unit, i = (g) => In(Zr(g, o)), s = n.acceptWhen === "value-plus-expanded-uncertainty-at-most-limit", a = s ? Em(e.value, e.uncertainty) : e.value, c = $e(a, r) <= 0, p = `${s ? `${i(e.value)} + ${i(e.uncertainty)} = ${i(a)}` : i(e.value)} ${c ? "≤" : ">"} ${i(r)} ${o}`;
  return {
    state: c ? "established" : "contradicted",
    reason: `${c ? "Conforms" : "Does not conform"} under ${n.id}: ${p}.`,
    sources: [],
    arithmetic: p
  };
}
const Zm = /^\/credentialSubject\/materialPropertiesList\/(0|[1-9][0-9]*)\/results\/(0|[1-9][0-9]*)$/;
async function Jm(e, t, n, r) {
  if (n.id !== Ea || r.binding.id !== n.id || r.binding.version !== n.version)
    throw new Error(`Profile ${r.id}@${r.version} is not configured for ${Ea}@${n.version}.`);
  const o = ya(e, n, r);
  if (o !== void 0) return Object.freeze({ result: ga(e, o), artifacts: Object.freeze([]) });
  const i = await va(e, t, n, r), { target: s, artifacts: a, facts: c, verificationOf: u, artifactVerification: p } = i, g = (P) => c.get(P), f = zm(c.get(e.targetId), g, r), h = Vm(c.get(e.targetId), g, r), w = f.routes.find((P) => P.state === "established"), x = c.get(e.targetId)?.document, b = (Array.isArray(n.scopeAndMapping.methodRevisions) ? n.scopeAndMapping.methodRevisions : []).filter((P) => typeof P?.method == "string" && typeof P?.revises == "string"), S = (P) => {
    const C = c.get(P)?.document?.credentialSubject;
    return Array.isArray(C?.scope) ? C.scope : [];
  }, v = e.selectedClaims.map((P) => {
    if (!(x !== void 0 && Zm.test(P.sourcePointer) && dn(x, P.sourcePointer) !== void 0)) {
      const M = x === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${P.sourcePointer} is not a result in the usable target.`;
      return {
        claim: P,
        mapping: void 0,
        coverage: /* @__PURE__ */ new Map(),
        result: { claimId: P.id, routeWitnessIds: [], ...oe("not_established", [M]) }
      };
    }
    const D = Gm(x, P.sourcePointer, dn(x, P.sourcePointer)), _ = /* @__PURE__ */ new Map();
    if (D.coordinates === void 0)
      return { claim: P, mapping: D, coverage: _, result: {
        claimId: P.id,
        routeWitnessIds: [],
        ...oe(D.state, [`Gate 4: ${D.reason}`], [P.sourcePointer])
      } };
    const F = D.coordinates, L = mi(f, (M) => {
      const U = Bm(F, S(M.scope), b, r.mapping.methodSuccession), N = [M.scope, ...U.sources];
      return _.set(M.id, { ...U, sources: N }), { id: "claim-coverage", state: U.state, reason: U.reason, sources: N };
    }), G = L.routes.find((M) => M.state === "established"), k = G ? _.get(G.id)?.record : void 0;
    return { claim: P, mapping: D, coverage: _, result: {
      claimId: P.id,
      routeWitnessIds: L.state === "established" && G ? [`route:${G.id}`, ...G.chain, `record:${k}`] : [],
      ...oe(L.state, [
        L.reason,
        ...G ? [_.get(G.id).reason] : [..._].map(([M, U]) => `${M}: ${U.reason}`)
      ], [P.sourcePointer])
    } };
  }), y = v.map((P) => P.result), d = [{
    obligationId: "rm-v1:required-study",
    witnessIds: h.state === "established" ? [...h.chain] : [],
    ...oe(h.state, [h.reason], ["/evidence"])
  }], l = (() => {
    if (!e.conformity) return { requested: !1, execution: "not_run" };
    const P = { requested: !0, ...e.conformity }, C = r.conformity.requirements.find((G) => G.id === e.conformity.requirementId), D = r.conformity.decisionRules.find((G) => G.id === e.conformity.decisionRuleId);
    if (!C || !D)
      return { ...P, ...oe("not_established", [`Requirement ${e.conformity.requirementId} or decision rule ${e.conformity.decisionRuleId} is not configured in the verifier profile.`]) };
    const _ = v.filter((G) => G.mapping?.coordinates?.propertyIri === C.propertyIri && G.mapping.coordinates.quantityKindIri === C.quantityKindIri);
    if (_.length !== 1)
      return { ...P, ...oe("not_established", [`Requirement ${C.id} must apply to exactly one selected claim; ${_.length} match.`]) };
    const F = _[0];
    if (F.result.state !== "established")
      return { ...P, ...ln(`Not evaluated: claim ${F.claim.id} is not authorized.`) };
    const L = Hm(F.mapping.coordinates, C, D);
    return { ...P, ...oe(L.state, [L.reason], [F.claim.sourcePointer]) };
  })(), m = /* @__PURE__ */ new Set([
    e.targetId,
    ...w?.chain ?? [],
    ...h.state === "established" ? h.chain : []
  ]), I = [
    ...a.filter((P) => m.has(P.artifactId)).flatMap(u).map((P) => P.state),
    ...y.map((P) => P.state),
    ...d.map((P) => P.state),
    ...l.requested ? [l.state] : []
  ], A = ea(I), R = [...i.trace], j = [...i.resources], E = ui(s.artifactId, s.digestSRI, "target", e);
  for (const { claim: P, mapping: C, coverage: D } of v) {
    C && R.push({
      gate: 4,
      nodeUse: E,
      predicate: `claim-mapping:${P.id}`,
      state: C.state,
      execution: "executed",
      reason: C.reason,
      sources: [...C.sources]
    });
    for (const [_, F] of D)
      R.push({
        gate: 5,
        nodeUse: E,
        predicate: `claim-coverage:${P.id}:${_}`,
        state: F.state,
        execution: "executed",
        reason: F.reason,
        sources: [...F.sources]
      });
  }
  for (const P of y)
    R.push({
      gate: 5,
      nodeUse: E,
      predicate: `claim-authorization:${P.claimId}`,
      state: P.state,
      execution: P.execution,
      reason: P.reasons.join(" "),
      sources: [...P.sourcePointers]
    });
  for (const P of f.restrictions)
    R.push({
      gate: 5,
      nodeUse: E,
      predicate: P.id,
      state: P.state,
      execution: "executed",
      reason: P.reason,
      sources: [...P.sources]
    });
  R.push({
    gate: 5,
    nodeUse: E,
    predicate: "authority",
    state: f.state,
    execution: "executed",
    reason: f.reason,
    sources: w ? [...w.chain] : []
  });
  for (const P of f.routes) {
    R.push(P.execution === "not_run" ? {
      gate: 5,
      nodeUse: E,
      predicate: `route:${P.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: E,
      predicate: `route:${P.id}`,
      state: P.state,
      execution: "executed",
      reason: `Route ${P.id} is ${P.state}.`,
      sources: [...P.chain]
    });
    for (const C of P.bases)
      R.push({
        gate: 5,
        nodeUse: E,
        predicate: `route:${P.id}:${C.id}`,
        state: C.state,
        execution: "executed",
        reason: C.reason,
        sources: [...C.sources]
      });
  }
  for (const P of h.bases)
    R.push({
      gate: 6,
      nodeUse: E,
      predicate: `support:${P.id}`,
      state: P.state,
      execution: "executed",
      reason: P.reason,
      sources: [...P.sources]
    });
  for (const P of d)
    R.push({
      gate: 6,
      nodeUse: E,
      predicate: P.obligationId,
      state: P.state,
      execution: P.execution,
      reason: P.reasons.join(" "),
      sources: []
    });
  l.requested && R.push({
    gate: 6,
    nodeUse: E,
    predicate: `conformity:${l.requirementId}`,
    state: l.state,
    execution: l.execution,
    reason: l.reasons.join(" "),
    sources: []
  });
  const O = ri({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: p,
    authorization: y,
    support: d,
    conformity: l,
    decision: A,
    trace: R,
    resources: j,
    limitations: [
      "Verification failures of credentials outside the selected route and support chains are reported but do not decide the request."
    ]
  });
  return Object.freeze({ result: O, artifacts: Object.freeze(a) });
}
const Bs = "https://vc4qi.example/bindings/cal/1", Km = "https://vc4qi.example/contexts/cal/1", Hs = "https://vc4qi.example/bindings/cal/1#", en = "https://vc4qi.example/schemas/cal/1/", Qm = Object.freeze({
  name: "calibration v1",
  schemas: Object.freeze({
    CalAccreditation: `${en}accreditation.json`,
    CalOperationalScope: `${en}operational-scope.json`,
    CalLegalMandate: `${en}legal-mandate.json`,
    CalCertificate: `${en}certificate.json`,
    CalTestReport: `${en}test-report.json`,
    BitstringStatusListCredential: `${en}status-list.json`
  }),
  contexts: (e) => e === "BitstringStatusListCredential" ? [cn] : [cn, Km]
}), _e = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Ge = (e) => Array.isArray(e) ? e : [], se = (e) => String(e).split(/[#/]/).pop(), Wm = Object.freeze({ Pa: 0, kPa: 3, MPa: 6 });
function We(e, t) {
  const n = hi(e), r = typeof t == "string" ? Wm[t] : void 0;
  if (!(n === void 0 || r === void 0))
    return n.scale >= r ? { n: n.n, scale: n.scale - r } : { n: n.n * 10n ** BigInt(r - n.scale), scale: 0 };
}
const Re = (e) => In({ n: e.n, scale: e.scale + 3 });
function yl(e, t) {
  const n = [t];
  if (!_e(e) || typeof e.id != "string" || typeof e.quantityKindIri != "string")
    return { state: "not_established", reason: "The selected measurement group has no identifier or quantity kind.", sources: n };
  const r = [];
  for (const [i, s] of Ge(e.results).entries()) {
    const a = _e(s) ? s : {}, c = hi(a.coverageFactor);
    if (c === void 0 || $e(c, { n: 2n, scale: 0 }) !== 0)
      return { state: "not_established", reason: `Result ${i}: coverage factor ${String(a.coverageFactor)} is not the binding's k = 2.`, sources: n };
    const u = We(a.value, a.unit), p = We(a.expandedUncertainty, a.unit);
    if (u === void 0 || p === void 0)
      return { state: "not_established", reason: `Result ${i}: unit ${String(a.unit)} or a number has no supported mapping (Pa, kPa, MPa).`, sources: n };
    r.push({ value: u, uncertainty: p });
  }
  if (r.length === 0) return { state: "not_established", reason: "The measurement group has no results.", sources: n };
  const o = Ge(e.methodIris).filter((i) => typeof i == "string");
  return {
    state: "established",
    reason: `Mapped ${se(e.id)}: ${se(e.quantityKindIri)}, ${r.length} result(s) in Pa, methods [${o.map(se).join(", ")}].`,
    sources: n,
    group: { id: e.id, quantityKindIri: e.quantityKindIri, methodIris: o, results: r }
  };
}
function gl(e, t, n) {
  const r = ["/credentialSubject/scope"];
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: r };
  const o = t.map((a) => {
    const c = String(a.id), u = _e(a.range) ? a.range : {}, p = We(u.from, u.unit), g = We(u.to, u.unit);
    if (p === void 0 || g === void 0) return { id: c, state: "not_established", reason: `${se(c)}: unsupported or malformed range.` };
    if ($e(p, g) > 0) return { id: c, state: "contradicted", reason: `${se(c)}: range is reversed.` };
    const f = _e(a.cmcFloor) ? a.cmcFloor : void 0, h = f === void 0 ? void 0 : We(f.value, f.unit);
    if (f !== void 0 && h === void 0) return { id: c, state: "not_established", reason: `${se(c)}: unsupported CMC floor.` };
    const w = [];
    a.quantityKindIri !== e.quantityKindIri && w.push(`quantity kind ${se(e.quantityKindIri)} ≠ ${se(a.quantityKindIri)}`);
    const x = Ge(a.allowedMethodIris).filter((S) => typeof S == "string"), b = e.methodIris.filter((S) => !x.includes(S));
    return b.length > 0 && w.push(`method ${b.map(se).join(", ")} is not allowed`), e.results.forEach((S, v) => {
      ($e(S.value, p) < 0 || $e(S.value, g) > 0) && w.push(`result ${v} ${Re(S.value)} kPa is outside ${Re(p)}–${Re(g)} kPa`), n && h !== void 0 && $e(S.uncertainty, h) < 0 && w.push(`result ${v} U = ${Re(S.uncertainty)} kPa is below the admitted CMC ${Re(h)} kPa`);
    }), w.length > 0 ? { id: c, state: "contradicted", reason: `${se(c)}: ${w.join("; ")}` } : e.methodIris.length === 0 && x.length > 0 ? {
      id: c,
      state: "not_established",
      reason: `${se(c)} restricts methods to [${x.map(se).join(", ")}], but the group names no governed method.`
    } : {
      id: c,
      state: "established",
      reason: `${se(c)} covers ${se(e.id)}: ${se(e.quantityKindIri)}, methods [${e.methodIris.map(se).join(", ")}], ${e.results.length} result(s) within ${Re(p)}–${Re(g)} kPa${n && h !== void 0 ? ` and not below the CMC ${Re(h)} kPa` : ""}`
    };
  }), i = En(o.map((a) => a.state)), s = o.find((a) => a.state === "established");
  return s ? { state: i, reason: s.reason, sources: r, record: s.id } : { state: i, reason: `No single scope record covers the group (${o.map((a) => a.reason).join(" | ")}).`, sources: r };
}
function Xm(e, t, n) {
  const r = ["/credentialSubject/scope"];
  if (e.length === 0) return { state: "not_established", reason: "The operational scope has no records.", sources: r };
  const o = e.map((s) => {
    const a = _e(s.range) ? s.range : {}, c = We(a.from, a.unit), u = We(a.to, a.unit), p = _e(s.cmcFloor) ? s.cmcFloor : void 0, g = p === void 0 ? void 0 : We(p.value, p.unit);
    if (c === void 0 || u === void 0 || p !== void 0 && g === void 0)
      return { state: "not_established", reason: `${se(s.id)}: unsupported or malformed range or CMC floor.` };
    const f = Ge(s.allowedMethodIris), h = t.map((x) => {
      const b = _e(x.range) ? x.range : {}, S = We(b.from, b.unit), v = We(b.to, b.unit), y = _e(x.cmcFloor) ? x.cmcFloor : void 0, d = y === void 0 ? void 0 : We(y.value, y.unit);
      if (S === void 0 || v === void 0 || y !== void 0 && d === void 0)
        return { state: "not_established", reason: `${se(x.id)}: unsupported or malformed range or CMC floor.` };
      const l = [];
      s.quantityKindIri !== x.quantityKindIri && l.push(`quantity kind ${se(s.quantityKindIri)} ≠ ${se(x.quantityKindIri)}`);
      const m = Ge(x.allowedMethodIris), I = f.filter((A) => !m.includes(A));
      return f.length === 0 && m.length > 0 && l.push("the parent restricts methods, the child does not"), I.length > 0 && l.push(`method ${I.map(se).join(", ")} is not in ${se(x.id)}`), ($e(c, S) < 0 || $e(u, v) > 0) && l.push(`range ${Re(c)}–${Re(u)} kPa is not within ${Re(S)}–${Re(v)} kPa`), n && d !== void 0 && (g === void 0 ? l.push(`it states no CMC floor, but ${se(x.id)} admits only ${Re(d)} kPa`) : $e(g, d) < 0 && l.push(`CMC ${Re(g)} kPa is below the admitted ${Re(d)} kPa`)), l.length > 0 ? { state: "contradicted", reason: `${se(s.id)} widens ${se(x.id)}: ${l.join("; ")}` } : { state: "established", reason: `${se(s.id)} lies within ${se(x.id)}` };
    });
    if (h.length === 0) return { state: "not_established", reason: "The parent grant has no records." };
    const w = En(h.map((x) => x.state));
    return w === "established" ? h.find((x) => x.state === "established") : { state: w, reason: h.map((x) => x.reason).join(" | ") };
  }), i = xa(o.map((s) => s.state));
  return { state: i, reason: `${i === "established" ? "Bounded projection holds" : "Bounded projection fails"}: ${o.map((s) => s.reason).join("; ")}.`, sources: r };
}
const Gt = (e) => _e(e.credentialSubject) ? e.credentialSubject : {}, wa = (e, t, n, r, o) => ct(t, `${Hs}${n}`) ? { id: e, state: "established", reason: `${o} permits ${r}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: e, state: "contradicted", reason: `${o} does not permit ${r}.`, sources: ["/credentialSubject/permittedActivity"] }, Ym = Object.freeze({
  CalCertificate: { activity: "issueCalibrationCertificate", what: "issuing calibration certificates", purpose: "accredit-calibration-laboratories" },
  CalTestReport: { activity: "issueTestReport", what: "issuing test reports", purpose: "accredit-testing-laboratories" }
}), ti = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0;
function ey(e, t, n) {
  const r = e.document, o = [], i = [e.uri], s = Ym[ti(r) ?? ""];
  if (s === void 0)
    return pe("direct-accreditation", [{
      id: "target-type",
      state: "not_established",
      reason: `No accreditation activity is installed for ${String(ti(r))}.`,
      sources: ["/type"]
    }], i);
  const a = Ye("authorizing-reference", r, "CalAccreditation", t, [e.uri], "CalAuthorizationPolicy");
  if (o.push(a.basis), !a.node) return pe("direct-accreditation", o, i);
  const c = a.node.document;
  return i.push(a.node.uri), o.push(ut("principal-binding", c, r.issuer, "Accreditation CA")), o.push(wa("activity-permission", c, s.activity, s.what, "CA")), o.push(Ot("trust-anchor", c, s.purpose, n)), o.push(Lt(r, [["CA", c]])), pe("direct-accreditation", o, i, a.node.uri);
}
function ty(e, t, n) {
  const r = e.document, o = [], i = [e.uri], s = Ye("authorizing-reference", r, "CalOperationalScope", t, [e.uri], "CalAuthorizationPolicy");
  if (o.push(s.basis), !s.node) return pe("operational-scope", o, i);
  const a = s.node.document;
  i.push(s.node.uri), o.push(ut("principal-binding", a, r.issuer, "Operational scope O")), o.push(a.issuer === Gt(a).id ? { id: "self-maintained-scope", state: "established", reason: "O is issued by its own grantee.", sources: ["/issuer"] } : { id: "self-maintained-scope", state: "contradicted", reason: "O is not issued by its own grantee.", sources: ["/issuer"] }), o.push(wa("activity-permission", a, "issueCalibrationCertificate", "issuing calibration certificates", "O"));
  const c = Ye("maintenance-grant", a, "CalAccreditation", t, [e.uri, s.node.uri], "CalAuthorizationPolicy");
  if (o.push(c.basis), !c.node) return pe("operational-scope", o, i);
  const u = c.node.document;
  i.push(c.node.uri), o.push(ut("accreditation-grantee", u, a.issuer, "Accreditation CA")), o.push(ct(u, `${Hs}maintainCalibrationScope`) && ct(u, `${Hs}issueCalibrationCertificate`) ? { id: "projection-permission", state: "established", reason: "CA permits maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] } : { id: "projection-permission", state: "contradicted", reason: "CA does not permit maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] });
  const p = Xm(
    Ge(Gt(a).scope).filter(_e),
    Ge(Gt(u).scope).filter(_e),
    n.bindingRules.applyCmcFloor === !0
  );
  return o.push({ id: "bounded-projection", state: p.state, reason: p.reason, sources: p.sources }), o.push(Ot("trust-anchor", u, "accredit-calibration-laboratories", n)), o.push(Lt(r, [["O", a], ["CA", u]])), pe("operational-scope", o, i, s.node.uri);
}
function ny(e, t, n) {
  const r = e.document, o = [], i = [e.uri], s = Ye("authorizing-reference", r, "CalLegalMandate", t, [e.uri], "CalAuthorizationPolicy");
  if (o.push(s.basis), !s.node) return pe("statutory-mandate", o, i);
  const a = s.node.document;
  return i.push(s.node.uri), o.push(ut("principal-binding", a, r.issuer, "Mandate M")), o.push(wa("activity-permission", a, "issueCalibrationCertificate", "issuing calibration certificates", "M")), o.push(Ot("trust-anchor", a, "designate-national-metrology-institutes", n)), o.push(Lt(r, [["M", a]])), pe("statutory-mandate", o, i, s.node.uri);
}
const vl = Object.freeze({
  "direct-accreditation": ey,
  "operational-scope": ty,
  "statutory-mandate": ny
}), xa = (e) => e.length === 0 ? "not_established" : we(e);
function ry(e, t, n, r) {
  const o = n.authority.certificateRoutes, i = o.slice(0, n.authority.maxRoutes).map((g) => {
    const f = vl[g];
    return f === void 0 ? pe(g, [{ id: "installed-evaluator", state: "not_established", reason: `Route ${g} has no installed evaluator.`, sources: [] }], [e.uri]) : f(e, t, n);
  }), s = Ln([], i, o.slice(n.authority.maxRoutes)), a = Ge(Gt(e.document).measurementGroups);
  if (a.length === 0)
    return { state: "not_established", reason: "The certificate has no measurement groups.", chain: [e.uri], bases: [] };
  const c = [];
  let u = [e.uri];
  a.forEach((g, f) => {
    const h = `/credentialSubject/measurementGroups/${f}`, w = yl(g, h);
    if (w.group === void 0) {
      c.push({ id: `group-${f}`, state: w.state, reason: `Group ${f}: ${w.reason}`, sources: [h] });
      return;
    }
    const x = w.group, b = mi(s, (y) => {
      const d = Ge(Gt(t(y.scope)?.document ?? {}).scope).filter(_e), l = gl(x, d, r);
      return { id: "claim-coverage", state: l.state, reason: l.reason, sources: [y.scope, ...l.sources] };
    }), S = b.routes.find((y) => y.state === "established");
    S && (u = S.chain);
    const v = S ? `through ${S.id}` : b.routes.map((y) => `${y.id} ${y.state}: ${y.bases.filter((d) => d.state !== "established").map((d) => d.reason).join(" ")}`).join(" | ");
    c.push({ id: `group-${f}`, state: b.state, reason: `Group ${f} (${se(x.id)}) is ${b.state} ${v}`.trim(), sources: [h] });
  });
  const p = xa(c.map((g) => g.state));
  return { state: p, reason: `The certificate's own authority is ${p}.`, chain: u, bases: c };
}
function iy(e, t, n, r) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const o = e.document, i = (m) => ({ state: m.state, reason: m.reason, bases: [m], chain: [e.uri] }), s = Ge(o.evidence).filter(_e).filter((m) => m.type === "CalCalibrationReference").map((m) => String(m.id));
  if (s.length === 0) return i({ id: "calibration-reference", state: "not_established", reason: "The report cites no calibration.", sources: ["/evidence"] });
  if (s.length > 1)
    return i({ id: "calibration-reference", state: "not_established", reason: "Several calibration references; this binding has no composition for them.", sources: ["/evidence"] });
  const a = s[0], c = t(a);
  if (c === void 0) return i({ id: "calibration-reference", state: "not_established", reason: `Calibration ${a} is unavailable.`, sources: ["/evidence", a] });
  if (c.usable !== "established" || c.document === void 0)
    return i({
      id: "calibration-reference",
      state: c.usable === "contradicted" ? "contradicted" : "not_established",
      reason: `Calibration ${a} is not usable: ${c.reason}`,
      sources: ["/evidence", a]
    });
  const u = c.document;
  if (ti(u) !== "CalCertificate")
    return i({ id: "calibration-reference", state: "contradicted", reason: `${a} is a ${String(ti(u))}, not a calibration certificate.`, sources: ["/evidence", a] });
  const p = Gt(o), g = Gt(u), f = [{ id: "calibration-reference", state: "established", reason: `Cites calibration ${a}.`, sources: ["/evidence", a] }];
  f.push(typeof p.instrumentIri != "string" ? { id: "same-instrument", state: "not_established", reason: "The report names no instrument.", sources: ["/credentialSubject/instrumentIri"] } : g.id === p.instrumentIri ? { id: "same-instrument", state: "established", reason: `The calibration concerns instrument ${String(p.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] } : { id: "same-instrument", state: "contradicted", reason: `The calibration concerns ${String(g.id)}, not instrument ${String(p.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] });
  const h = Ge(p.measurementGroups).filter(_e).map((m) => m.quantityKindIri), w = Ge(g.measurementGroups).filter(_e).map((m) => m.quantityKindIri), x = h.filter((m) => !w.includes(m));
  f.push(h.length > 0 && x.length === 0 ? { id: "same-quantity", state: "established", reason: `The calibration covers ${[...new Set(h.map(se))].join(", ")}.`, sources: ["/credentialSubject/measurementGroups"] } : {
    id: "same-quantity",
    state: h.length === 0 ? "not_established" : "contradicted",
    reason: h.length === 0 ? "The report has no measurement groups." : `The calibration does not cover ${x.map(se).join(", ")}.`,
    sources: ["/credentialSubject/measurementGroups"]
  });
  const b = Date.parse(String(p.activityTime)), S = Date.parse(String(g.activityTime)), v = Date.parse(String(u.validFrom)), y = Date.parse(String(u.validUntil));
  !Number.isFinite(b) || !Number.isFinite(S) ? f.push({ id: "calibration-precedes-use", state: "not_established", reason: "An activity time is missing.", sources: ["/credentialSubject/activityTime"] }) : (f.push(S <= b ? { id: "calibration-precedes-use", state: "established", reason: `Calibrated at ${String(g.activityTime)}, before the test at ${String(p.activityTime)}.`, sources: ["/credentialSubject/activityTime"] } : { id: "calibration-precedes-use", state: "contradicted", reason: `Calibrated at ${String(g.activityTime)}, after the test at ${String(p.activityTime)}.`, sources: ["/credentialSubject/activityTime"] }), f.push(Number.isFinite(v) && Number.isFinite(y) && v <= b && b <= y ? { id: "calibration-valid-at-use", state: "established", reason: "The calibration certificate was valid at the test.", sources: ["/validFrom", "/validUntil"] } : { id: "calibration-valid-at-use", state: "contradicted", reason: `The calibration certificate (valid ${String(u.validFrom)} to ${String(u.validUntil)}) was not valid at the test at ${String(p.activityTime)}.`, sources: ["/validFrom", "/validUntil"] }));
  const d = ry(c, t, n, r);
  f.push({ id: "calibration-authority", state: d.state, reason: d.reason, sources: [a] }, ...d.bases.map((m) => ({ ...m, id: `calibration-authority:${m.id}` })));
  const l = xa(f.map((m) => m.state));
  return {
    state: l,
    reason: l === "established" ? "The instrument calibration is applicable and independently authorized." : l === "contradicted" ? "The instrument calibration is contradicted." : "The instrument calibration is not established.",
    bases: f,
    chain: [e.uri, ...d.chain]
  };
}
const sy = /^\/credentialSubject\/measurementGroups\/(0|[1-9][0-9]*)$/;
function ay(e) {
  const t = e.bindingRules.applyCmcFloor;
  if (typeof t != "boolean")
    throw new Error(`Profile ${e.id}@${e.version} must state bindingRules.applyCmcFloor for ${Bs}.`);
  return t;
}
async function oy(e, t, n, r) {
  if (n.id !== Bs || r.binding.id !== n.id || r.binding.version !== n.version)
    throw new Error(`Profile ${r.id}@${r.version} is not configured for ${Bs}@${n.version}.`);
  const o = ay(r), i = ya(e, n, r);
  if (i !== void 0) return Object.freeze({ result: ga(e, i), artifacts: Object.freeze([]) });
  const s = await va(e, t, n, r, Qm), { target: a, artifacts: c, facts: u, verificationOf: p, artifactVerification: g } = s, f = (D) => u.get(D), h = u.get(e.targetId), w = r.authority.certificateRoutes, x = h.document === void 0 ? [] : w.slice(0, r.authority.maxRoutes).map((D) => {
    const _ = vl[D];
    return _ === void 0 ? {
      id: D,
      state: "not_established",
      execution: "executed",
      chain: [h.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${D} has no installed evaluator.`, sources: [] }]
    } : _(h, f, r);
  }), b = h.document === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : Ln([], x, w.slice(r.authority.maxRoutes)), S = b.routes.find((D) => D.state === "established"), v = (D) => {
    const _ = u.get(D)?.document?.credentialSubject;
    return Array.isArray(_?.scope) ? _.scope : [];
  }, y = h.document, d = e.selectedClaims.map((D) => {
    const _ = /* @__PURE__ */ new Map();
    if (y === void 0 || !sy.test(D.sourcePointer) || dn(y, D.sourcePointer) === void 0) {
      const M = y === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${D.sourcePointer} is not a measurement group in the usable target.`;
      return { claim: D, mapping: void 0, coverage: _, result: { claimId: D.id, routeWitnessIds: [], ...oe("not_established", [M]) } };
    }
    const F = yl(dn(y, D.sourcePointer), D.sourcePointer);
    if (F.group === void 0)
      return { claim: D, mapping: F, coverage: _, result: {
        claimId: D.id,
        routeWitnessIds: [],
        ...oe(F.state, [`Gate 4: ${F.reason}`], [D.sourcePointer])
      } };
    const L = F.group, G = mi(b, (M) => {
      const U = gl(L, v(M.scope), o), N = [M.scope, ...U.sources];
      return _.set(M.id, { ...U, sources: N }), { id: "claim-coverage", state: U.state, reason: U.reason, sources: N };
    }), k = G.routes.find((M) => M.state === "established");
    return { claim: D, mapping: F, coverage: _, result: {
      claimId: D.id,
      routeWitnessIds: G.state === "established" && k ? [`route:${k.id}`, ...k.chain, `record:${_.get(k.id)?.record}`] : [],
      ...oe(G.state, [
        G.reason,
        ...k ? [_.get(k.id).reason] : [..._].map(([M, U]) => `${M}: ${U.reason}`)
      ], [D.sourcePointer])
    } };
  }), l = d.map((D) => D.result), I = Array.isArray(y?.type) && y.type[1] === "CalTestReport" ? iy(h, f, r, o) : void 0, A = I === void 0 ? [] : [{
    obligationId: "cal-v1:instrument-calibration",
    witnessIds: I.state === "established" ? [...I.chain] : [],
    ...oe(I.state, [I.reason], ["/evidence"])
  }], R = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...oe("not_established", ["The calibration v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, j = /* @__PURE__ */ new Set([
    e.targetId,
    ...S?.chain ?? [],
    ...I?.state === "established" ? I.chain : []
  ]), E = [
    ...c.filter((D) => j.has(D.artifactId)).flatMap(p).map((D) => D.state),
    ...l.map((D) => D.state),
    ...A.map((D) => D.state),
    ...R.requested ? [R.state] : []
  ], O = [...s.trace], P = ui(a.artifactId, a.digestSRI, "target", e);
  for (const { claim: D, mapping: _, coverage: F } of d) {
    _ && O.push({
      gate: 4,
      nodeUse: P,
      predicate: `claim-mapping:${D.id}`,
      state: _.state,
      execution: "executed",
      reason: _.reason,
      sources: [..._.sources]
    });
    for (const [L, G] of F)
      O.push({
        gate: 5,
        nodeUse: P,
        predicate: `claim-coverage:${D.id}:${L}`,
        state: G.state,
        execution: "executed",
        reason: G.reason,
        sources: [...G.sources]
      });
  }
  for (const D of l)
    O.push({
      gate: 5,
      nodeUse: P,
      predicate: `claim-authorization:${D.claimId}`,
      state: D.state,
      execution: D.execution,
      reason: D.reasons.join(" "),
      sources: [...D.sourcePointers]
    });
  O.push({
    gate: 5,
    nodeUse: P,
    predicate: "authority",
    state: b.state,
    execution: "executed",
    reason: b.reason,
    sources: S ? [...S.chain] : []
  });
  for (const D of b.routes) {
    O.push(D.execution === "not_run" ? {
      gate: 5,
      nodeUse: P,
      predicate: `route:${D.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: P,
      predicate: `route:${D.id}`,
      state: D.state,
      execution: "executed",
      reason: `Route ${D.id} is ${D.state}.`,
      sources: [...D.chain]
    });
    for (const _ of D.bases)
      O.push({
        gate: 5,
        nodeUse: P,
        predicate: `route:${D.id}:${_.id}`,
        state: _.state,
        execution: "executed",
        reason: _.reason,
        sources: [..._.sources]
      });
  }
  for (const D of I?.bases ?? [])
    O.push({
      gate: 6,
      nodeUse: P,
      predicate: `support:${D.id}`,
      state: D.state,
      execution: "executed",
      reason: D.reason,
      sources: [...D.sources]
    });
  for (const D of A)
    O.push({
      gate: 6,
      nodeUse: P,
      predicate: D.obligationId,
      state: D.state,
      execution: D.execution,
      reason: D.reasons.join(" "),
      sources: []
    });
  R.requested && O.push({
    gate: 6,
    nodeUse: P,
    predicate: `conformity:${R.requirementId}`,
    state: R.state,
    execution: R.execution,
    reason: R.reasons.join(" "),
    sources: []
  });
  const C = ri({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: g,
    authorization: l,
    support: A,
    conformity: R,
    decision: ea(E),
    trace: O,
    resources: s.resources,
    limitations: [
      "Each selected measurement group is a separate required claim; the decision is their conjunction.",
      "Verification failures of credentials outside the selected route and support chains are reported but do not decide the request.",
      "The calibration v1 binding carries a JSON-LD simplification of DCC results, not native DCC XML.",
      "Fixture grants are fictional: an accreditation or statutory mandate here has no legal effect."
    ]
  });
  return Object.freeze({ result: C, artifacts: Object.freeze([...c]) });
}
const fd = "https://vc4qi.example/bindings/gs/1", cy = "https://vc4qi.example/contexts/gs/1", yi = "https://vc4qi.example/bindings/gs/1#", $t = "https://vc4qi.example/schemas/gs/1/", dy = Object.freeze({
  name: "GS certification v1",
  schemas: Object.freeze({
    GsAccreditation: `${$t}accreditation.json`,
    GsSchemeAuthorization: `${$t}scheme-authorization.json`,
    GsCertificate: `${$t}certificate.json`,
    GsMarkCredential: `${$t}mark-credential.json`,
    ProductPassport: `${$t}product-passport.json`,
    GsTestReport: `${$t}test-report.json`,
    GsInspectionReport: `${$t}inspection-report.json`,
    BitstringStatusListCredential: `${$t}status-list.json`
  }),
  contexts: (e) => e === "BitstringStatusListCredential" ? [cn] : [cn, cy]
}), dt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), De = (e) => Array.isArray(e) ? e : [], X = (e) => String(e).split(/[#/]/).pop(), lt = (e) => dt(e.credentialSubject) ? e.credentialSubject : {};
function bl(e, t) {
  const n = [t];
  if (!dt(e) || typeof e.productCategoryIri != "string")
    return { state: "not_established", reason: "The selected certification names no product category.", sources: n };
  const r = De(e.standardIris).filter((o) => typeof o == "string");
  return {
    state: "established",
    reason: `Mapped certification of ${X(e.productCategoryIri)} against [${r.map(X).join(", ")}].`,
    sources: n,
    certification: { productCategoryIri: e.productCategoryIri, standardIris: r }
  };
}
function wl(e, t, n) {
  const r = ["/credentialSubject/scope"], { productCategoryIri: o, standardIris: i } = e, s = t.map((f) => {
    const h = String(f.id), w = De(f.standardIris);
    if (f.productCategoryIri !== o)
      return { id: h, state: "contradicted", reason: `${X(h)}: category ${X(o)} ≠ ${X(f.productCategoryIri)}` };
    const x = i.filter((b) => !w.includes(b));
    return x.length > 0 ? { id: h, state: "contradicted", reason: `${X(h)}: standard ${x.map(X).join(", ")} is not in the accredited scope` } : i.length === 0 && w.length > 0 ? { id: h, state: "not_established", reason: `${X(h)} restricts standards, but the certification names none` } : { id: h, state: "established", reason: `${X(h)} covers ${X(o)} against [${i.map(X).join(", ")}]` };
  }), a = n.map((f) => {
    const h = String(f.id);
    return f.productCategoryIri === o ? { id: h, state: "established", reason: `${X(h)} permits the GS mark for ${X(o)}` } : { id: h, state: "contradicted", reason: `${X(h)}: category ${X(o)} ≠ ${X(f.productCategoryIri)}` };
  }), c = (f, h) => {
    if (h.length === 0) return { state: "not_established", reason: `The ${f} scope has no records.`, record: void 0 };
    const w = h.find((x) => x.state === "established");
    return w ? { state: "established", reason: w.reason, record: w.id } : { state: En(h.map((x) => x.state)), reason: `No single ${f} record covers it (${h.map((x) => x.reason).join(" | ")})`, record: void 0 };
  }, u = c("competence", s), p = c("scheme", a), g = we([u.state, p.state]);
  return {
    state: g,
    reason: `Competence: ${u.reason}. Scheme: ${p.reason}.`,
    sources: r,
    ...g === "established" ? { records: [u.record, p.record] } : {}
  };
}
function xl(e, t, n) {
  const r = e.document, o = [], i = [e.uri], s = (u, p, g, f, h, w) => {
    const x = Ye(`${u}-reference`, r, p, t, [e.uri], "GsAuthorizationPolicy");
    if (o.push(x.basis), !x.node) return;
    const b = x.node.document;
    return o.push(ut(`${u}-grantee`, b, r.issuer, w)), o.push(ct(b, `${yi}${g}`) ? { id: `${u}-permission`, state: "established", reason: `${w} permits ${f}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: `${u}-permission`, state: "contradicted", reason: `${w} does not permit ${f}.`, sources: ["/credentialSubject/permittedActivity"] }), o.push(Ot(`${u}-anchor`, b, h, n)), x.node;
  }, a = s("competence", "GsAccreditation", "certifyProducts", "certifying products", "accredit-certification-bodies", "Accreditation GS-A"), c = s("scheme", "GsSchemeAuthorization", "awardGsMark", "awarding the GS mark", "authorize-gs-certification", "Scheme authorization GS-S");
  return !a || !c ? pe("competence-and-scheme-permission", o, i) : (i.push(a.uri, c.uri), o.push(Lt(r, [["GS-A", a.document], ["GS-S", c.document]])), pe("competence-and-scheme-permission", o, i, a.uri));
}
function Sl(e, t) {
  const n = (r) => r === void 0 ? [] : De(lt(t(r)?.document ?? {}).scope).filter(dt);
  return { competence: n(e.scope), scheme: n(e.chain.length === 3 ? e.chain[2] : void 0) };
}
const ly = `${yi}GsMark`;
function Il(e, t, n) {
  const r = [t];
  if (!dt(e) || typeof e.markIri != "string" || typeof e.productModelIri != "string")
    return { state: "not_established", reason: "The selected marking names no mark or product model.", sources: r };
  if (e.markIri !== ly)
    return { state: "not_established", reason: `Mark ${X(e.markIri)} has no interpretation in this binding.`, sources: r };
  const o = [t, "/credentialSubject/productModelIri"];
  return typeof n != "string" ? { state: "not_established", reason: "The credential names no product model.", sources: o } : n !== e.productModelIri ? {
    state: "contradicted",
    reason: `The marking claims the mark for model ${X(e.productModelIri)}, but the credential is for model ${X(n)}.`,
    sources: o
  } : {
    state: "established",
    reason: `Mapped a GS-mark claim for model ${X(e.productModelIri)}.`,
    sources: r,
    marking: { markIri: e.markIri, productModelIri: e.productModelIri }
  };
}
function Al(e, t) {
  const n = ["/credentialSubject/id"];
  if (t === void 0) return { state: "not_established", reason: "No certificate was reached.", sources: n };
  const r = lt(t).id;
  return r === e.productModelIri ? { state: "established", reason: `${X(t.id)} certifies model ${X(r)}.`, sources: n, records: [String(t.id)] } : { state: "contradicted", reason: `${X(t.id)} certifies ${X(r)}, not model ${X(e.productModelIri)}.`, sources: n };
}
function ql(e, t, n) {
  const r = e.document, o = [], i = [e.uri], s = Ye("certificate-reference", r, "GsCertificate", t, [e.uri], "GsAuthorizationPolicy");
  if (o.push(s.basis), !s.node) return pe("gs-certified-product", o, i);
  const a = s.node.document;
  i.push(s.node.uri);
  const c = lt(a).manufacturerIri;
  o.push(typeof c != "string" ? { id: "manufacturer-binding", state: "not_established", reason: "The certificate names no manufacturer.", sources: ["/credentialSubject/manufacturerIri"] } : c === r.issuer ? { id: "manufacturer-binding", state: "established", reason: `The certificate names the passport issuer ${c} as manufacturer.`, sources: ["/credentialSubject/manufacturerIri", "/issuer"] } : { id: "manufacturer-binding", state: "contradicted", reason: `The certificate names ${c}, not the passport issuer ${String(r.issuer)}.`, sources: ["/credentialSubject/manufacturerIri", "/issuer"] }), o.push({ ...Lt(r, [["The certificate", a]]), id: "certificate-in-force" });
  const u = xl(s.node, t, n);
  o.push(...u.bases.map((f) => ({ ...f, id: `certificate:${f.id}` })));
  const p = bl(lt(a).certification, "/credentialSubject/certification"), g = p.certification === void 0 ? { state: p.state, reason: p.reason } : (() => {
    const { competence: f, scheme: h } = Sl(u, t);
    return wl(p.certification, f, h);
  })();
  return o.push({ id: "certificate:claim-coverage", state: g.state, reason: g.reason, sources: ["/credentialSubject/certification"] }), i.push(...u.chain.slice(1)), pe("gs-certified-product", o, i, s.node.uri);
}
const uy = `${yi}Pass`, py = [
  {
    obligationId: "type-examination",
    reference: "GsTypeExaminationReference",
    type: "GsTestReport",
    activity: "testProducts",
    purpose: "accredit-testing-laboratories",
    what: "type examination"
  },
  {
    obligationId: "factory-inspection",
    reference: "GsFactoryInspectionReference",
    type: "GsInspectionReport",
    // Factory inspection is part of the certification body's certification competence, not a
    // separately accredited activity.
    activity: "certifyProducts",
    purpose: "accredit-certification-bodies",
    what: "factory inspection"
  }
], Ee = (e, t, n, r, o) => t === void 0 ? { id: e, state: "not_established", reason: r, sources: o } : { id: e, state: t ? "established" : "contradicted", reason: t ? n : r, sources: o };
function fy(e, t, n) {
  const r = e.document, o = lt(r), i = dt(o.certification) ? o.certification : {};
  return py.map(({ obligationId: s, reference: a, type: c, activity: u, purpose: p, what: g }) => {
    const f = [], h = (A) => {
      const R = we(f.map((E) => E.state)), j = f.find((E) => E.state === R && R !== "established");
      return {
        obligationId: s,
        state: R,
        bases: f,
        chain: A,
        reason: R === "established" ? `The ${g} applies and is independently authorized.` : `The ${g}: ${j?.reason ?? "not established"}`
      };
    }, w = De(r.evidence).filter(dt).filter((A) => A.type === a).map((A) => String(A.id));
    if (w.length !== 1)
      return f.push({
        id: "reference",
        state: "not_established",
        sources: ["/evidence"],
        reason: w.length === 0 ? `The certificate cites no ${g}.` : `The certificate cites several ${g}s; none is chosen.`
      }), h([]);
    const x = w[0], b = t(x);
    if (b === void 0 || b.usable !== "established" || b.document === void 0)
      return f.push({
        id: "reference",
        state: b?.usable === "contradicted" ? "contradicted" : "not_established",
        sources: ["/evidence", x],
        reason: b === void 0 ? `${X(x)} is unavailable.` : `${X(x)} is not usable: ${b.reason}`
      }), h([]);
    const S = b.document, v = lt(S), y = De(S.type);
    if (f.push(Ee("reference", y.includes(c), `Cites ${g} ${X(x)}.`, `${X(x)} is not a ${c}.`, ["/evidence", x])), s === "type-examination") {
      f.push(Ee(
        "same-model",
        v.productModelIri === o.id,
        `${X(x)} examined model ${X(o.id)}.`,
        `${X(x)} examined ${X(v.productModelIri)}, not model ${X(o.id)}.`,
        ["/credentialSubject/productModelIri"]
      ));
      const A = De(v.standardIris), R = De(i.standardIris), j = R.filter((E) => !A.includes(E));
      f.push(Ee(
        "covers-certification",
        v.productCategoryIri === i.productCategoryIri && j.length === 0,
        `${X(x)} covers ${X(i.productCategoryIri)} against [${R.map(X).join(", ")}].`,
        v.productCategoryIri !== i.productCategoryIri ? `${X(x)} examined ${X(v.productCategoryIri)}, not ${X(i.productCategoryIri)}.` : `${X(x)} did not examine ${j.map(X).join(", ")}.`,
        ["/credentialSubject/standardIris"]
      ));
    } else
      f.push(Ee(
        "same-manufacturer",
        typeof v.manufacturerIri == "string" && typeof o.manufacturerIri == "string" ? v.manufacturerIri === o.manufacturerIri : void 0,
        `${X(x)} inspected the certificate's manufacturer.`,
        `${X(x)} inspected ${String(v.manufacturerIri)}, not the certificate's manufacturer ${String(o.manufacturerIri)}.`,
        ["/credentialSubject/manufacturerIri"]
      ));
    f.push(Ee("outcome", v.outcomeIri === uy, `${X(x)} passed.`, `${X(x)} did not pass (${X(v.outcomeIri)}).`, ["/credentialSubject/outcomeIri"]));
    const d = Date.parse(String(v.activityTime)), l = Date.parse(String(o.activityTime));
    f.push(Ee(
      "precedes-certification",
      Number.isFinite(d) && Number.isFinite(l) ? d <= l : void 0,
      `The ${g} (${String(v.activityTime)}) precedes the certification.`,
      Number.isFinite(d) && Number.isFinite(l) ? `The ${g} (${String(v.activityTime)}) follows the certification (${String(o.activityTime)}).` : "An activity time is missing.",
      ["/credentialSubject/activityTime"]
    ));
    const m = Ye("accreditation-reference", S, "GsAccreditation", t, [e.uri, x], "GsAuthorizationPolicy");
    if (f.push(m.basis), !m.node) return h([x]);
    const I = m.node.document;
    if (f.push(ut("accreditation-grantee", I, S.issuer, `Accreditation ${X(m.node.uri)}`)), f.push(Ee(
      "accreditation-permission",
      ct(I, `${yi}${u}`),
      `${X(m.node.uri)} permits ${u}.`,
      `${X(m.node.uri)} does not permit ${u}.`,
      ["/credentialSubject/permittedActivity"]
    )), f.push(Ot("accreditation-anchor", I, p, n)), f.push({ ...Lt(S, [[X(m.node.uri), I]]), id: "accreditation-in-force" }), s === "type-examination") {
      const A = De(v.standardIris), j = De(lt(I).scope).filter(dt).find((E) => E.productCategoryIri === v.productCategoryIri && A.every((O) => De(E.standardIris).includes(O)));
      f.push(Ee(
        "accreditation-scope",
        j !== void 0,
        `${X(j?.id)} covers the examination.`,
        `No record of ${X(m.node.uri)} covers ${X(v.productCategoryIri)} against [${A.map(X).join(", ")}].`,
        ["/credentialSubject/scope"]
      ));
    }
    return h([x, m.node.uri]);
  });
}
function hy(e, t, n) {
  const r = e.document, o = lt(r).economicOperatorIri, i = ["/credentialSubject/economicOperatorIri", "/issuer"];
  return pe(
    "responsible-economic-operator",
    [typeof o != "string" ? { id: "operator-is-issuer", state: "not_established", reason: "The passport names no responsible economic operator.", sources: i } : Ee(
      "operator-is-issuer",
      o === r.issuer,
      `The passport is issued by its responsible economic operator ${o}.`,
      `The passport names ${o} as its responsible economic operator but is issued by ${String(r.issuer)}.`,
      i
    )],
    // The operator declares its own passport, so the passport is the scope of its entries.
    [e.uri],
    e.uri
  );
}
function my(e, t, n) {
  const r = e.document, o = lt(r), i = dt(o.complianceInformation) ? o.complianceInformation : {}, s = dt(i.gsMark) ? i.gsMark : {}, a = [], c = (v, y) => {
    const d = we(a.map((m) => m.state)), l = a.find((m) => m.state === d && d !== "established");
    return { ...y === void 0 ? {} : { certificateUri: y }, support: {
      obligationId: "gs-mark-credential",
      state: d,
      bases: a,
      chain: v,
      reason: d === "established" ? "The GS-mark credential applies to this unit and holds its own route." : `The GS-mark credential: ${l?.reason ?? "not established"}`
    } };
  }, u = De(r.evidence).filter(dt).filter((v) => v.type === "GsMarkCredentialReference").map((v) => String(v.id));
  if (u.length !== 1)
    return a.push({
      id: "reference",
      state: "not_established",
      sources: ["/evidence"],
      reason: u.length === 0 ? "The passport cites no GS-mark credential." : "The passport cites several GS-mark credentials; none is chosen."
    }), c([]);
  const p = u[0], g = t(p);
  if (g === void 0 || g.usable !== "established" || g.document === void 0)
    return a.push({
      id: "reference",
      state: g?.usable === "contradicted" ? "contradicted" : "not_established",
      sources: ["/evidence", p],
      reason: g === void 0 ? `${X(p)} is unavailable.` : `${X(p)} is not usable: ${g.reason}`
    }), c([]);
  const f = g.document, h = lt(f);
  a.push(Ee(
    "reference",
    De(f.type).includes("GsMarkCredential"),
    `Cites GS-mark credential ${X(p)}.`,
    `${X(p)} is not a GsMarkCredential.`,
    ["/evidence", p]
  )), a.push(Ee(
    "same-unit",
    h.id === o.id,
    `${X(p)} is for this unit ${X(o.id)}.`,
    `${X(p)} is for unit ${X(h.id)}, not this unit ${X(o.id)}.`,
    ["/credentialSubject/id"]
  )), a.push(Ee(
    "same-operator",
    f.issuer === r.issuer,
    `${X(p)} is issued by the passport's issuer.`,
    `${X(p)} is issued by ${String(f.issuer)}, not the passport's issuer ${String(r.issuer)}.`,
    ["/issuer"]
  ));
  const w = Il(h.marking, "/credentialSubject/marking", h.productModelIri);
  a.push({ id: "mark-credential:mapping", state: w.state, reason: w.reason, sources: [...w.sources] }), a.push(Ee(
    "same-model",
    w.marking === void 0 ? void 0 : w.marking.productModelIri === s.productModelIri && h.productModelIri === o.productModelIri,
    `${X(p)} claims the mark for the passport's model ${X(o.productModelIri)}.`,
    w.marking === void 0 ? `${X(p)} claims no mark for a model.` : `${X(p)} claims the mark for model ${X(w.marking.productModelIri)}, not the passport's model ${X(o.productModelIri)}.`,
    ["/credentialSubject/complianceInformation/gsMark/productModelIri", "/credentialSubject/productModelIri"]
  ));
  const x = ql(g, t, n);
  a.push(...x.bases.map((v) => ({ ...v, id: `mark-credential:${v.id}` })));
  const b = x.scope === void 0 ? void 0 : t(x.scope)?.document, S = w.marking === void 0 ? { state: "not_established", reason: "No mark was mapped.", sources: [] } : Al(w.marking, b);
  return a.push({ id: "mark-credential:claim-coverage", state: S.state, reason: S.reason, sources: [...S.sources] }), c([p, ...x.chain.slice(1)], x.scope);
}
const yy = Object.freeze({
  "competence-and-scheme-permission": xl,
  "gs-certified-product": ql,
  "responsible-economic-operator": hy
}), gy = "/credentialSubject/certification", vy = "/credentialSubject/marking", Zs = "/credentialSubject/complianceInformation/gsMark", by = { GsMarkCredential: "mark", ProductPassport: "passport" }, wy = { certificate: gy, mark: vy, passport: Zs };
async function xy(e, t, n, r) {
  if (n.id !== fd || r.binding.id !== n.id || r.binding.version !== n.version)
    throw new Error(`Profile ${r.id}@${r.version} is not configured for ${fd}@${n.version}.`);
  const o = ya(e, n, r);
  if (o !== void 0) return Object.freeze({ result: ga(e, o), artifacts: Object.freeze([]) });
  const i = await va(e, t, n, r, dy), { target: s, artifacts: a, facts: c, verificationOf: u, artifactVerification: p } = i, g = (L) => c.get(L), f = c.get(e.targetId), h = f.document, w = r.authority.certificateRoutes, x = h === void 0 ? [] : w.slice(0, r.authority.maxRoutes).map((L) => {
    const G = yy[L];
    return G === void 0 ? {
      id: L,
      state: "not_established",
      execution: "executed",
      chain: [f.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${L} has no installed evaluator.`, sources: [] }]
    } : G(f, g, r);
  }), b = h === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : Ln([], x, w.slice(r.authority.maxRoutes)), S = b.routes.find((L) => L.state === "established"), v = Array.isArray(h?.type) && by[String(h.type[1])] || "certificate", y = wy[v], d = e.selectedClaims.map((L) => {
    const G = /* @__PURE__ */ new Map();
    if (h === void 0 || L.sourcePointer !== y || dn(h, L.sourcePointer) === void 0) {
      const z = h === void 0 ? "The target is not usable, so its claims are not read." : v === "passport" ? `This binding interprets only the GS-mark entry (${Zs}) of a product passport; ${L.sourcePointer} has no interpretation here.` : `Selected claim ${L.sourcePointer} is not the ${v === "mark" ? "marking" : "certification statement"} of the usable target.`;
      return { claim: L, mapping: void 0, coverage: G, result: { claimId: L.id, routeWitnessIds: [], ...oe("not_established", [z]) } };
    }
    const k = dn(h, L.sourcePointer), M = v === "certificate" ? void 0 : Il(k, L.sourcePointer, h.credentialSubject?.productModelIri), U = M ?? bl(k, L.sourcePointer), N = M?.marking, $ = v === "certificate" ? U.certification : void 0;
    if (N === void 0 && $ === void 0)
      return { claim: L, mapping: U, coverage: G, result: {
        claimId: L.id,
        routeWitnessIds: [],
        ...oe(U.state, [`Gate 4: ${U.reason}`], [L.sourcePointer])
      } };
    const q = mi(b, (z) => {
      const Z = v === "passport" ? {
        state: "established",
        sources: [Zs],
        reason: "The entry is declared by the passport's responsible economic operator; it is relied on through the GS-mark credential it cites (gate 6)."
      } : N !== void 0 ? Al(N, g(z.scope)?.document) : (() => {
        const { competence: J, scheme: V } = Sl(z, g);
        return wl($, J, V);
      })(), Q = [...z.chain.slice(1), ...Z.sources];
      return G.set(z.id, { ...Z, sources: Q }), { id: "claim-coverage", state: Z.state, reason: Z.reason, sources: Q };
    }), T = q.routes.find((z) => z.state === "established");
    return { claim: L, mapping: U, coverage: G, result: {
      claimId: L.id,
      routeWitnessIds: q.state === "established" && T ? [`route:${T.id}`, ...T.chain, ...(G.get(T.id)?.records ?? []).map((z) => `record:${z}`)] : [],
      ...oe(q.state, [
        q.reason,
        ...T ? [G.get(T.id).reason] : [...G].map(([z, Z]) => `${z}: ${Z.reason}`)
      ], [L.sourcePointer])
    } };
  }), l = d.map((L) => L.result), m = v === "passport" && h !== void 0 ? my(f, g, r) : void 0, I = h === void 0 ? void 0 : v === "passport" ? m?.certificateUri : v === "mark" ? x.find((L) => L.chain.length > 1)?.chain[1] : e.targetId, A = I === void 0 ? void 0 : g(I), R = h === void 0 ? [] : A?.usable === "established" && A.document !== void 0 ? fy(A, g, r) : ["type-examination", "factory-inspection"].map((L) => ({
    obligationId: L,
    state: "not_established",
    reason: "No usable GS certificate was reached, so its studies are not evaluated.",
    bases: [],
    chain: []
  })), j = [...m ? [m.support] : [], ...R], E = j.map((L) => ({
    obligationId: `gs-v1:${L.obligationId}`,
    witnessIds: L.state === "established" ? [...L.chain] : [],
    ...oe(L.state, [L.reason], ["/evidence"])
  })), O = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...oe("not_established", ["The GS v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, P = /* @__PURE__ */ new Set([
    e.targetId,
    ...S?.chain ?? [],
    ...j.filter((L) => L.state === "established").flatMap((L) => L.chain)
  ]), C = [
    ...a.filter((L) => P.has(L.artifactId)).flatMap(u).map((L) => L.state),
    ...l.map((L) => L.state),
    ...E.map((L) => L.state),
    ...O.requested ? [O.state] : []
  ], D = [...i.trace], _ = ui(s.artifactId, s.digestSRI, "target", e);
  for (const { claim: L, mapping: G, coverage: k } of d) {
    G && D.push({
      gate: 4,
      nodeUse: _,
      predicate: `claim-mapping:${L.id}`,
      state: G.state,
      execution: "executed",
      reason: G.reason,
      sources: [...G.sources]
    });
    for (const [M, U] of k)
      D.push({
        gate: 5,
        nodeUse: _,
        predicate: `claim-coverage:${L.id}:${M}`,
        state: U.state,
        execution: "executed",
        reason: U.reason,
        sources: [...U.sources]
      });
  }
  for (const L of l)
    D.push({
      gate: 5,
      nodeUse: _,
      predicate: `claim-authorization:${L.claimId}`,
      state: L.state,
      execution: L.execution,
      reason: L.reasons.join(" "),
      sources: [...L.sourcePointers]
    });
  D.push({
    gate: 5,
    nodeUse: _,
    predicate: "authority",
    state: b.state,
    execution: "executed",
    reason: b.reason,
    sources: S ? [...S.chain] : []
  });
  for (const L of b.routes) {
    D.push(L.execution === "not_run" ? {
      gate: 5,
      nodeUse: _,
      predicate: `route:${L.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: _,
      predicate: `route:${L.id}`,
      state: L.state,
      execution: "executed",
      reason: `Route ${L.id} is ${L.state}.`,
      sources: [...L.chain]
    });
    for (const G of L.bases)
      D.push({
        gate: 5,
        nodeUse: _,
        predicate: `route:${L.id}:${G.id}`,
        state: G.state,
        execution: "executed",
        reason: G.reason,
        sources: [...G.sources]
      });
  }
  for (const L of j)
    for (const G of L.bases)
      D.push({
        gate: 6,
        nodeUse: _,
        predicate: `support:${L.obligationId}:${G.id}`,
        state: G.state,
        execution: "executed",
        reason: G.reason,
        sources: [...G.sources]
      });
  for (const L of E)
    D.push({
      gate: 6,
      nodeUse: _,
      predicate: L.obligationId,
      state: L.state,
      execution: L.execution,
      reason: L.reasons.join(" "),
      sources: []
    });
  O.requested && D.push({
    gate: 6,
    nodeUse: _,
    predicate: `conformity:${O.requirementId}`,
    state: O.state,
    execution: O.execution,
    reason: O.reasons.join(" "),
    sources: []
  });
  const F = ri({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: p,
    authorization: l,
    support: E,
    conformity: O,
    decision: ea(C),
    trace: D,
    resources: i.resources,
    limitations: [
      "The GS route is a fictional profile example (competence AND scheme permission), not a universal GS or legal rule.",
      ...v === "passport" ? ["The product passport is an experimental credential shaped after the EU Digital Product Passport (ESPR), not ESPR conformance; this binding interprets only its GS-mark entry."] : [],
      ...v === "mark" ? ["The GS-mark credential is an experimental manufacturer credential; today's GS scheme has no per-unit credential."] : [],
      "Verification failures of credentials outside the selected route and study chains are reported but do not decide the request.",
      "Fixture grants are fictional: an accreditation or scheme authorization here has no legal effect."
    ]
  });
  return Object.freeze({ result: F, artifacts: Object.freeze([...a]) });
}
function Sy(e, t, n) {
  const r = JSON.parse(n), o = Xs(r.verificationMethod[0].publicKeyMultibase).slice(2), i = Sd(new TextEncoder().encode(`vc4qi-rm-v1-insecure-fixture-key:${e}`));
  return { id: `${t}#key-1`, controller: t, privateKey: i, publicKey: o };
}
const Iy = (e) => `${JSON.stringify(e, null, 2)}
`;
async function Rl(e, t, n, r, o, i) {
  const s = Ad(new Id(o).openSession({ maxResources: 64, maxBytes: 1e6 })), a = await Zh(e, Sy(t, n, i), { created: r, documentLoader: s, safe: !0 });
  return Iy({ ...e, proof: a });
}
function Ay(e) {
  const t = new Uint8Array(Us / 8);
  for (const o of e) t[o >> 3] |= 128 >> (o & 7);
  const n = xm(t, { level: 9, mtime: 0 });
  let r = "";
  for (const o of n) r += String.fromCharCode(o);
  return `u${btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")}`;
}
function qy(e, t, n) {
  const { proof: r, ...o } = JSON.parse(e);
  return { ...o, validFrom: n, credentialSubject: { ...o.credentialSubject, encodedList: Ay(t) } };
}
const Js = "2026-09-25T12:00:00Z", Ry = { rm: Jm, cal: oy, gs: xy }, Ht = Object.fromEntries(["rm", "cal", "gs"].map((e) => [e, {
  manifest: du(Sn[e].manifest),
  profiles: Object.fromEntries(Object.entries(Sn[e].profiles).map(([t, n]) => [t, Ys(n)])),
  files: Sn[e].files
}])), Sa = "gs-verifier-dpp-accreditation-only (demonstrator)";
{
  const e = Sn.gs.profiles["gs-verifier-dpp-1"];
  Ht.gs.profiles[Sa] = Ys({
    ...e,
    id: "https://vc4qi.example/profiles/gs-verifier-dpp-accreditation-only",
    description: "Demonstrator-only variant of gs-verifier-dpp-1 that configures the accreditation body as its only trust anchor. Fictional.",
    trustAnchors: e.trustAnchors.filter((t) => t.id !== "https://zls.vc4qi.example/controller")
  });
}
const jy = (e) => String(e).split(/[#/:]/).pop() ?? "", js = (e, t) => ({
  id: e,
  label: `As ${e}`,
  sublabel: t,
  binding: "rm",
  profile: "rm-verifier-1",
  target: `https://producer.vc4qi.example/credentials/D${e}`,
  claims: [{ id: "as", sourcePointer: "/credentialSubject/materialPropertiesList/0/results/0" }],
  supplied: [],
  tamper: [`"value": "${e}"`, '"value": "150"'],
  withhold: { uri: "https://lab.vc4qi.example/credentials/S", label: "Withhold the homogeneity study" }
}), Ce = {
  CA: "https://nab.vc4qi.example/credentials/CAL-A",
  DCC1: "https://lab.vc4qi.example/credentials/DCC-1",
  O: "https://lab.vc4qi.example/credentials/CAL-O",
  DCC2: "https://lab.vc4qi.example/credentials/DCC-2",
  M: "https://ministry.vc4qi.example/credentials/CAL-M",
  DCCN: "https://nmi.vc4qi.example/credentials/DCC-N",
  T: "https://nab.vc4qi.example/credentials/CAL-T",
  REPORT: "https://testlab.vc4qi.example/credentials/REPORT-1"
}, gn = (e) => ({ id: `g${e + 1}`, sourcePointer: `/credentialSubject/measurementGroups/${e}` }), $y = [
  {
    id: "direct",
    label: "Accredited lab",
    sublabel: "DCC-1",
    binding: "cal",
    profile: "cal-verifier-1",
    target: Ce.DCC1,
    claims: [gn(0), gn(1)],
    supplied: [Ce.CA],
    tamper: ['"value": "1000"', '"value": "15000"'],
    withhold: { uri: Ce.CA, label: "Withhold the accreditation" }
  },
  {
    id: "capability",
    label: "Capability scope",
    sublabel: "DCC-2",
    binding: "cal",
    profile: "cal-verifier-capability-1",
    target: Ce.DCC2,
    claims: [gn(0)],
    supplied: [Ce.O, Ce.CA],
    tamper: ['"value": "1000"', '"value": "5000"'],
    withhold: { uri: Ce.O, label: "Withhold the operational scope" }
  },
  {
    id: "nmi",
    label: "National institute",
    sublabel: "DCC-N",
    binding: "cal",
    profile: "cal-verifier-nmi-1",
    target: Ce.DCCN,
    claims: [gn(0)],
    supplied: [Ce.M],
    tamper: ['"value": "20"', '"value": "200"'],
    withhold: { uri: Ce.M, label: "Withhold the mandate" }
  },
  {
    id: "report",
    label: "Test report",
    sublabel: "REPORT-1",
    binding: "cal",
    profile: "cal-verifier-test-report-1",
    target: Ce.REPORT,
    claims: [gn(0)],
    supplied: [Ce.T],
    tamper: ['"value": "2"', '"value": "30"'],
    withhold: { uri: Ce.DCC1, label: "Withhold the instrument's calibration" }
  }
], ke = {
  C1: "https://gs-body.vc4qi.example/credentials/GSC-1",
  TR1: "https://gs-body.vc4qi.example/credentials/TR-1",
  TR2: "https://testlab-gs.vc4qi.example/credentials/TR-2",
  TR3: "https://gs-body.vc4qi.example/credentials/TR-3",
  M1: "https://maker.vc4qi.example/credentials/GSM-1",
  M4: "https://maker.vc4qi.example/credentials/GSM-4"
}, vn = (e, t, n, r, o) => ({
  id: e,
  label: t,
  sublabel: n,
  binding: "gs",
  profile: "gs-verifier-mark-1",
  target: r,
  claims: [{ id: "mark", sourcePointer: "/credentialSubject/marking" }],
  supplied: [],
  tamper: ["-sn-", "-sn-9"],
  withhold: o
}), $s = (e, t, n, r, o) => ({
  id: e,
  label: t,
  sublabel: n,
  binding: "gs",
  profile: "gs-verifier-dpp-1",
  target: r,
  claims: [{ id: "mark", sourcePointer: "/credentialSubject/complianceInformation/gsMark" }],
  supplied: [],
  tamper: ["-sn-", "-sn-9"],
  withhold: o
}), bn = (e) => ({ uri: e, label: "Withhold the type examination" }), _s = (e) => ({ uri: e, label: "Withhold the GS-mark credential" }), hd = [
  {
    id: "rm",
    tab: "RM",
    title: "Certified reference material",
    intro: "M375a, leaded brass: may I rely on the certified arsenic value?",
    caseLabel: "Certified As mass fraction (mg/kg)",
    cases: [js("178", "certificate"), js("197", "hypothetical"), js("520", "hypothetical")],
    choice: { label: "The verifier asks", options: [
      { id: "authorized", label: "Authorized?", sublabel: "no limit" },
      { id: "fit", label: "Fit for use?", sublabel: "As + U ≤ 200" }
    ] },
    note: "Certified values and material from the M375a DRMD. Accreditation body, producer, laboratory, scopes, methods and keys are fictional; no real institution issues these credentials. 197 and 520 are hypothetical reissues."
  },
  {
    id: "dcc",
    tab: "DCC",
    title: "Calibration certificate",
    intro: "May I rely on each measurement group of this calibration?",
    caseLabel: "Issuer",
    cases: $y,
    choice: { label: "The verifier accepts", options: [
      { id: "own", label: "This route", sublabel: "own profile" },
      { id: "direct-only", label: "Direct accreditation only", sublabel: "cal-verifier-1" }
    ] },
    note: "A JSON-LD simplification of DCC results, not native DCC XML. All parties and keys are fictional."
  },
  {
    id: "gs",
    tab: "GS",
    title: "GS mark",
    intro: "May I rely on the GS mark on this product?",
    caseLabel: "Product",
    cases: [
      vn("in-house", "Hair dryer HD-01", "GS body tested", "https://maker.vc4qi.example/credentials/GSM-1", bn(ke.TR1)),
      vn("external", "Hair dryer HD-02", "external lab tested", "https://maker.vc4qi.example/credentials/GSM-3", bn(ke.TR2)),
      vn("toy", "Toy 001", "outside ZLS scope", "https://maker.vc4qi.example/credentials/GSM-2", bn(ke.TR3)),
      vn("clone", "Other company", "cites the HD-01 certificate", "https://clone.vc4qi.example/credentials/GSM-5", bn(ke.TR1)),
      vn("mismatch", "HD-02 unit", "claims the HD-01 mark", "https://maker.vc4qi.example/credentials/GSM-6", bn(ke.TR1))
    ],
    note: "Shaped like a GS certification chain: mark → GS certificate → accreditation (a fictional body in the DAkkS role), scheme authorization (ZLS role), type examination and factory inspection. A fictional profile, not a legal GS rule; all parties and keys are fictional."
  },
  {
    id: "dpp",
    tab: "DPP",
    title: "Product passport",
    intro: "The product passport of this unit lists the GS mark in its compliance information. May I rely on that entry?",
    caseLabel: "Passport",
    cases: [
      $s("unit", "Unit sn-0042", "its own GS-mark credential", "https://maker.vc4qi.example/credentials/DPP-1", _s(ke.M1)),
      $s("early", "Unit sn-0001", "on market before certification", "https://maker.vc4qi.example/credentials/DPP-2", _s(ke.M4)),
      $s("borrowed", "Unit sn-0050", "cites another unit's credential", "https://maker.vc4qi.example/credentials/DPP-3", _s(ke.M1))
    ],
    choice: { label: "The verifier trusts", options: [
      { id: "both", label: "Accreditation body and scheme owner", sublabel: "gs-verifier-dpp-1" },
      { id: "accreditation-only", label: "Accreditation body only", sublabel: "no scheme-owner anchor" }
    ] },
    note: "An experimental product passport shaped after the EU Digital Product Passport (ESPR): unique product identifier, GTIN, commodity code, economic operator and facility, technical and sustainability data, and compliance information. Its GS-mark entry is supported by the unit's GS-mark credential, which keeps its own authority route. The GS binding evaluates only that entry. Not ESPR conformance; identifiers are fictional, and today's GS scheme has no per-unit credential. All parties and keys are fictional."
  }
], Ky = [
  { id: "build", label: "Build the chain" },
  { id: "verify", label: "Verify" },
  { id: "manipulate", label: "Manipulate" },
  { id: "decide", label: "The verifier decides" },
  { id: "disclose", label: "Selective disclosure" }
], _t = {
  A: "https://nab.vc4qi.example/credentials/GS-A",
  S: "https://zls.vc4qi.example/credentials/GS-S",
  FI: "https://gs-body.vc4qi.example/credentials/FI-1",
  TR: ke.TR1,
  C: ke.C1,
  M: ke.M1,
  P: "https://maker.vc4qi.example/credentials/DPP-1"
}, Ke = (e = {}) => ({ example: "dpp", caseId: "unit", choice: "both", tamper: !1, withhold: !1, ...e }), wn = "Verifier: market surveillance authority (trusts the accreditation body and the scheme owner)", Qy = [
  {
    id: "accredit",
    part: "build",
    actor: "Accreditation body → GS body",
    issues: [_t.A],
    scenario: Ke(),
    title: "The accreditation body accredits the GS body",
    text: "It attests competence: testing and certifying toys and household appliances against named standards. It signs with a key published in its controller document, and can suspend the accreditation through its status list."
  },
  {
    id: "authorize",
    part: "build",
    actor: "Scheme owner → GS body",
    issues: [_t.S],
    scenario: Ke(),
    title: "The scheme owner permits the GS body to award the GS mark",
    text: "Competence is not permission. A second authority, in the role ZLS has for the GS mark, grants the right to award the mark, for household appliances only."
  },
  {
    id: "examine",
    part: "build",
    actor: "GS body → manufacturer",
    issues: [_t.FI, _t.TR],
    scenario: Ke(),
    title: "The GS body inspects the factory and examines the type",
    text: "Two studies: a factory inspection of the plant and a type examination of model HD-01. Each is signed under the GS body's accreditation. They support the certificate; they grant nothing."
  },
  {
    id: "certify",
    part: "build",
    actor: "GS body → manufacturer",
    issues: [_t.C],
    scenario: Ke(),
    title: "The GS body certifies model HD-01",
    text: "The certificate points to both of its authorities, the accreditation and the scheme permission, and to both studies. Every link is a reference inside a signed credential."
  },
  {
    id: "mark",
    part: "build",
    actor: "Manufacturer → product unit sn-0042",
    issues: [_t.M, _t.P],
    scenario: Ke(),
    title: "The manufacturer marks the unit and issues its product passport",
    text: "A GS-mark credential for unit sn-0042, citing the certificate, and a product passport whose compliance information lists the mark. Per-unit credentials are the experimental part: today's GS scheme has none."
  },
  {
    id: "verify",
    part: "verify",
    actor: wn,
    scenario: Ke(),
    expect: "accept",
    title: "Market surveillance checks the passport",
    text: "It knows none of the parties in advance and trusts only two roots. It follows every reference from the passport down to them and answers six questions before it relies on the GS mark."
  },
  {
    id: "tamper",
    part: "manipulate",
    actor: wn,
    scenario: Ke({ tamper: !0 }),
    expect: "reject",
    title: "Someone edits the passport",
    text: "The serial number is changed after signing. The signature no longer matches the bytes. This is the only manipulation a signature check alone catches; the next three pass it."
  },
  {
    id: "borrowed",
    part: "manipulate",
    actor: wn,
    scenario: Ke({ caseId: "borrowed" }),
    expect: "reject",
    title: "A passport borrows another unit's credential",
    text: "Unit sn-0050 is an HD-02, but its passport cites the GS-mark credential of unit sn-0042. Every credential is genuine and correctly signed; the link between them is not."
  },
  {
    id: "clone",
    part: "manipulate",
    actor: "Verifier: market surveillance authority, checking a GS-mark credential",
    scenario: { example: "gs", caseId: "clone", tamper: !1, withhold: !1 },
    expect: "reject",
    title: "Another company cites a genuine certificate",
    text: "A different company issues a GS-mark credential for its own unit and points it at the real HD-01 certificate. The certificate names another manufacturer."
  },
  {
    id: "toy",
    part: "manipulate",
    actor: "Verifier: market surveillance authority, checking a GS-mark credential",
    scenario: { example: "gs", caseId: "toy", tamper: !1, withhold: !1 },
    expect: "reject",
    title: "The GS body certifies a toy",
    text: "The GS body is accredited for toys and its certificate is genuine. But the scheme owner permitted the GS mark for household appliances only, so the mark on the toy is not authorized."
  },
  {
    id: "withheld",
    part: "manipulate",
    actor: wn,
    scenario: Ke({ withholdUri: _t.TR }),
    expect: "not_established",
    title: "The type examination is withheld",
    text: 'Nothing presented is false, but the study the certificate rests on is missing. The verifier cannot tell, and "cannot tell" is never accepted.'
  },
  {
    id: "surveillance",
    part: "decide",
    actor: wn,
    scenario: Ke(),
    expect: "accept",
    title: "Verifier 1: market surveillance",
    text: "Its profile recognises both the accreditation body and the scheme owner, so both halves of the authority, competence and permission, reach a root it trusts."
  },
  {
    id: "abroad",
    part: "decide",
    actor: "Verifier: a buyer abroad (trusts the accreditation body only)",
    scenario: Ke({ choice: "accreditation-only" }),
    expect: "not_established",
    title: "Verifier 2: a buyer abroad",
    text: "The same passport and the same bytes. This verifier recognises the accreditation body but not the scheme owner, so it cannot tell whether the mark was permitted. The verifier's policy decides, not the issuer's."
  },
  {
    id: "disclose",
    part: "disclose",
    actor: "Holder: the manufacturer · Verifier: market surveillance authority",
    title: "Show what the question needs, and no more",
    text: "Withholding a whole credential leaves the verifier unable to tell. Selective disclosure would let the holder reveal only the fields the verifier's question needs, with each signature still checkable. Mechanisms such as SD-JWT VC, ecdsa-sd-2023 or bbs-2023 would provide it.",
    disclosure: [
      { credential: "Product passport DPP-1", reveal: "Unit, model and the GS-mark entry", hide: "Facility, technical and sustainability data" },
      { credential: "Type examination TR-1", reveal: "Issuer, model, standards and the outcome", hide: "In a real report: measurements and design details" },
      { credential: "Factory inspection FI-1", reveal: "Issuer, date and the outcome", hide: "The site identifier" },
      { credential: "GS certificate GSC-1", reveal: "Everything: it is the public claim", hide: "Nothing" }
    ]
  }
], _y = {
  nab: "Accreditation body",
  producer: "RM producer",
  lab: "Laboratory",
  ministry: "Ministry",
  nmi: "NMI",
  testlab: "Test laboratory",
  zls: "ZLS role",
  "gs-body": "GS body",
  maker: "Manufacturer",
  "testlab-gs": "Test laboratory",
  clone: "Other company"
}, md = (e) => {
  const t = /^https:\/\/([^./]+)\./.exec(String(e))?.[1];
  return t === void 0 ? String(e).split("#")[0].split(":").pop() : _y[t] ?? t;
}, Py = {
  RmAccreditation: "Accreditation",
  RmLabAuthority: "Laboratory authority",
  RmOperationalScope: "Operational scope",
  RmStudy: "Homogeneity study",
  RmCertificate: "RM certificate (DRMD)",
  CalAccreditation: "Accreditation",
  CalOperationalScope: "Operational scope",
  CalLegalMandate: "Statutory mandate",
  CalCertificate: "Calibration certificate",
  CalTestReport: "Test report",
  GsAccreditation: "Accreditation",
  GsSchemeAuthorization: "Scheme authorization",
  GsCertificate: "GS certificate",
  GsTestReport: "Type examination",
  GsInspectionReport: "Factory inspection",
  GsMarkCredential: "GS-mark credential",
  ProductPassport: "Product passport (DPP)"
};
function Ty(e, t, n, r, o) {
  const i = /* @__PURE__ */ new Map();
  for (const [w, x] of Object.entries(t))
    try {
      i.set(w, JSON.parse(x));
    } catch {
    }
  const s = (w) => [
    ...(w?.termsOfUse ?? []).map((x) => x.authorizationCredential?.id).filter((x) => typeof x == "string").map((x) => ({ to: x, kind: "authority" })),
    ...(w?.evidence ?? []).map((x) => x.id).filter((x) => typeof x == "string").map((x) => ({ to: x, kind: "support" }))
  ], a = new Map(n.artifactVerification.map((w) => [w.artifactId, w.state])), c = /* @__PURE__ */ new Map([[e, 0]]), u = /* @__PURE__ */ new Set(), p = [], g = [[e, !1]], f = /* @__PURE__ */ new Set();
  for (; g.length > 0; ) {
    const [w, x] = g.shift();
    for (const { to: b, kind: S } of s(i.get(w))) {
      const v = `${w}>${b}`, y = x || S === "support";
      f.has(v) || (f.add(v), p.push({
        from: w,
        to: b,
        kind: S,
        state: w === e ? S === "support" ? o : r : a.get(b) ?? "not_established"
      }));
      const d = (c.get(w) ?? 0) + 1;
      (c.get(b) ?? -1) < d && d < 8 ? (c.set(b, d), g.push([b, y])) : y && !u.has(b) && u.add(b);
    }
  }
  return { nodes: [...c].map(([w, x]) => {
    const b = i.get(w), S = Array.isArray(b?.type) ? String(b.type[1]) : "", v = b?.credentialSubject ?? {};
    return {
      uri: w,
      name: jy(w),
      role: Py[S] ?? (S || "not supplied"),
      layer: x,
      present: b !== void 0,
      target: w === e,
      parties: b === void 0 ? "withheld" : `${md(b.issuer)} → ${md(v.id)}`,
      state: a.get(w) ?? "not_established"
    };
  }), edges: p };
}
const Pt = (e) => e.length === 0 ? "not_established" : we(e.map((t) => t.state)), yd = (e, t) => e.find((n) => n.state === t);
async function Ia(e) {
  const t = Ht[e.binding], n = t.profiles[e.profileName], r = e.texts ?? {}, o = new Set(t.files.map((j) => j.uri)), i = t.files.find((j) => j.uri === e.target)?.origin ?? t.files.at(-1).origin, s = {}, a = [
    ...t.files,
    ...Object.entries(r).filter(([j]) => !o.has(j)).map(([j, E]) => ({ uri: j, mediaType: "application/vc", origin: i, version: "1", text: E, digestSRI: void 0 }))
  ].filter((j) => j.uri !== e.withheld).map((j) => {
    const E = r[j.uri] ?? j.text, O = new TextEncoder().encode(E);
    return s[j.uri] = E, {
      uri: j.uri,
      mediaType: j.mediaType,
      origin: j.origin,
      version: j.version,
      bytes: O,
      digestSRI: E === j.text && j.digestSRI ? j.digestSRI : ni(O)
    };
  }), c = xu({
    requestId: e.requestId,
    targetId: e.target,
    selectedClaims: e.claims.map((j) => ({ ...j })),
    purpose: "demonstrator",
    binding: { id: t.manifest.id, version: t.manifest.version },
    profile: { id: n.id, version: n.version },
    trustConfigId: "https://vc4qi.example/trust/fixture-anchors",
    evaluationTime: Js,
    activityTime: Js,
    suppliedEvidence: e.supplied.filter((j) => j !== e.withheld),
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5e6 },
    ...e.conformity ? { conformity: { ...e.conformity } } : {}
  }), { result: u } = await Ry[e.binding](c, new Id(a), t.manifest, n), p = (j, E = () => !0) => u.trace.filter((O) => O.gate === j && E(O)), f = [...p(2), ...p(1)], h = p(3), w = [...p(0), ...p(4)], x = (j, E, O) => E === "established" ? O : (yd(j, E) ?? yd(j, "not_established"))?.reason ?? "Not evaluated.", b = u.authorization, S = b.length === 0 ? "not_established" : we(b.map((j) => j.state)), v = S === "established" ? b.map((j) => j.reasons.at(-1)).join(" ") : b.filter((j) => j.state !== "established").map((j) => `${j.claimId}: ${j.reasons.join(" ")}`).join(" "), y = u.support, d = u.artifactVerification.find((j) => j.artifactId === e.target)?.state === "established", l = y.length > 0 ? we(y.map((j) => j.state)) : d ? "not_required" : "not_established", m = p(6, (j) => j.predicate.startsWith("conformity:")), I = [
    {
      id: "authentic",
      state: Pt(f),
      details: f,
      summary: x(f, Pt(f), "Every credential is signed by its issuer's own key, and every reference matches the exact bytes.")
    },
    {
      id: "current",
      state: Pt(h),
      details: h,
      summary: x(h, Pt(h), "Every credential is within its validity period and not revoked.")
    },
    // "Understood" includes reading the claim itself (gate 4); a claim that was never
    // read, because its credential failed a lower gate, is not understood.
    p(4).length === 0 ? {
      id: "understood",
      state: Pt(p(0)) === "contradicted" ? "contradicted" : "not_established",
      details: w,
      summary: x(p(0), Pt(p(0)), "The claim was not read, because its credential did not pass the earlier checks.")
    } : {
      id: "understood",
      state: Pt(w),
      details: w,
      summary: x(w, Pt(w), p(4).map((j) => j.reason).join(" "))
    },
    {
      id: "authorized",
      state: S,
      summary: v,
      details: p(5, (j) => j.predicate.startsWith("claim-") || j.predicate.startsWith("restriction:") || j.predicate.startsWith("route:"))
    },
    {
      id: "supported",
      state: l,
      summary: y.length > 0 ? y.map((j) => j.reasons.join(" ")).join(" ") : d ? "This claim needs no supporting credential under the selected profile." : "Not evaluated: the credential did not pass the earlier checks.",
      details: p(6, (j) => j.predicate.startsWith("support:") || y.some((E) => E.obligationId === j.predicate))
    },
    u.conformity.requested ? {
      id: "fit",
      state: u.conformity.execution === "not_run" ? "not_asked" : u.conformity.state,
      details: m,
      summary: u.conformity.reasons.join(" ")
    } : { id: "fit", state: "not_asked", details: [], summary: e.notAsked }
  ], A = JSON.parse(s[e.target]), R = Ty(e.target, s, u, S, l);
  return { profile: e.profileName, result: u, questions: I, target: A, texts: s, graph: R };
}
async function Wy(e) {
  const t = hd.find((s) => s.id === e.example) ?? hd[0], n = t.cases.find((s) => s.id === e.caseId) ?? t.cases[0], r = Ht[n.binding].files.find((s) => s.uri === n.target), o = e.tamper ? { [n.target]: r.text.replace(n.tamper[0], n.tamper[1]) } : {}, i = await Ia({
    binding: n.binding,
    profileName: t.id === "dcc" && e.choice === "direct-only" ? "cal-verifier-1" : t.id === "dpp" && e.choice === "accreditation-only" ? Sa : n.profile,
    requestId: `urn:vc4qi:demonstrator:${t.id}:${n.id}`,
    target: n.target,
    claims: n.claims,
    supplied: n.supplied,
    texts: o,
    withheld: e.withholdUri ?? (e.withhold ? n.withhold.uri : void 0),
    ...t.id === "rm" && e.choice !== "authorized" ? { conformity: { requirementId: "as-mass-fraction-max-200-mg-per-kg", decisionRuleId: "guarded-acceptance-expanded-u" } } : {},
    notAsked: t.id === "rm" ? "The verifier asked only whether the value is authorized; no limit was applied." : "This example asks only whether the claim is authorized; the binding installs no decision rule."
  });
  return { options: e, example: t, spec: n, ...i };
}
const Cy = [
  { id: "build", label: "Build the chain" },
  { id: "verify", label: "Verify" },
  { id: "manipulate", label: "Manipulate" },
  { id: "decide", label: "The verifier decides" },
  { id: "present", label: "Present" },
  { id: "play", label: "Your turn" }
], Ps = /* @__PURE__ */ new Map();
function jl(e, t) {
  return Ps.has(e) || Ps.set(e, t()), Ps.get(e);
}
const gd = "2026-09-20T00:00:00Z", Cn = (e, t) => Ht[e].files.find((n) => n.uri === t).text, $l = (e) => Ht[e].files.map((t) => ({
  uri: t.uri,
  mediaType: t.mediaType,
  origin: t.origin,
  version: t.version,
  bytes: new TextEncoder().encode(t.text),
  digestSRI: t.digestSRI
})), Rn = (e, t, n, r) => jl(`${e}:list:${t}`, () => Rl(qy(Cn(e, t), [0], gd), n, r, gd, $l(e), Cn(e, r))), _l = (e, t, n) => e.replace(t, n), Xy = Cy, le = {
  NAB: "https://nab.vc4qi.example/controller",
  PRODUCER: "https://producer.vc4qi.example/controller",
  LAB: "https://lab.vc4qi.example/controller",
  A: "https://nab.vc4qi.example/credentials/A",
  H: "https://nab.vc4qi.example/credentials/H",
  O: "https://producer.vc4qi.example/credentials/O",
  S: "https://lab.vc4qi.example/credentials/S",
  LIVE: "https://producer.vc4qi.example/credentials/D-live",
  NAB_STATUS: "https://nab.vc4qi.example/status/1",
  SUSPENSION: "https://nab.vc4qi.example/status/suspension/1",
  LAB_STATUS: "https://lab.vc4qi.example/status/1",
  PRODUCER_STATUS: "https://producer.vc4qi.example/status/1"
}, Yy = [
  {
    id: "ab",
    mono: "AB",
    name: "Accreditation body",
    does: "Accredits the producer and recognises the laboratory. Can suspend.",
    publishes: [{ label: "Key", uri: le.NAB }, { label: "Revocation list", uri: le.NAB_STATUS }, { label: "Suspension list", uri: le.SUSPENSION }]
  },
  {
    id: "lab",
    mono: "LAB",
    name: "Laboratory",
    does: "Studies the batch under its recognition. Can revoke its study.",
    publishes: [{ label: "Key", uri: le.LAB }, { label: "Revocation list", uri: le.LAB_STATUS }]
  },
  {
    id: "rmp",
    mono: "RMP",
    name: "RM producer",
    does: "Declares its scope, certifies the material and ships it.",
    publishes: [{ label: "Key", uri: le.PRODUCER }, { label: "Revocation list", uri: le.PRODUCER_STATUS }]
  },
  {
    id: "holder",
    mono: "H",
    name: "Customer lab",
    does: "Bought disc lot 1. Holds its certificate and shows it.",
    publishes: [{ label: "Wallet" }]
  },
  {
    id: "verifier",
    mono: "V",
    name: "Verifier",
    does: "Relies on the certificate only as far as its own profile allows.",
    publishes: [{ label: "Profile" }]
  }
], eg = [
  { code: "A", label: "Accreditation", kind: "grant", actor: "ab", row: 1, about: "rmp", heldBy: "rmp" },
  { code: "H", label: "Laboratory recognition", kind: "grant", actor: "ab", row: 2, about: "lab", heldBy: "lab" },
  { code: "O", label: "Operational scope", kind: "grant", actor: "rmp", row: 1, about: "rmp", heldBy: "rmp" },
  { code: "S", label: "Homogeneity study", kind: "evidence", actor: "lab", row: 2, about: "object", aboutLabel: "disc lot 1", heldBy: "rmp" },
  { code: "D", label: "RM certificate", kind: "claim", actor: "rmp", row: 2, about: "object", aboutLabel: "disc lot 1", heldBy: "holder" }
], Ey = {
  certificate: "178",
  value: "178",
  uncertainty: "5",
  method: "M1",
  suspendA: !1,
  revokeS: !1,
  tamper: !1,
  withholdS: !1,
  trustAB: !0,
  ask: "fit",
  rule: "guarded"
}, tg = [
  {
    id: "join",
    part: "build",
    acts: ["ab"],
    joins: ["ab"],
    title: "The accreditation body is the first party",
    text: "Before anything is signed it publishes a key, so that anyone can check what it signs, and two status lists, so that it can later revoke or suspend what it issued."
  },
  {
    id: "recognise",
    part: "build",
    acts: ["ab", "lab"],
    joins: ["lab"],
    issues: ["H"],
    title: "The accreditation body recognises the laboratory",
    text: "Recognition H permits the laboratory to run homogeneity studies on brass. The laboratory publishes its own key and status list."
  },
  {
    id: "accredit",
    part: "build",
    acts: ["ab", "rmp"],
    joins: ["rmp"],
    issues: ["A"],
    title: "The accreditation body accredits the RM producer",
    text: 'Accreditation A is broad, like a real annex row ("non-ferrous metals and alloys, element contents, 0.1 mg/kg – 997 g/kg"): here the element contents of this brass by methods M1 and M2. It is a flexible scope: the producer may add materials within it and keeps its own list. The body can suspend it.'
  },
  {
    id: "scope",
    part: "build",
    acts: ["rmp"],
    issues: ["O"],
    title: "The producer declares its operational scope",
    text: "Scope O is the producer's own list within that flexible scope: arsenic in this brass, method M1, 50 to 500 mg/kg. It cites A, so it can be no wider than A."
  },
  {
    id: "study",
    part: "build",
    acts: ["lab", "rmp"],
    issues: ["S"],
    title: "The laboratory studies disc lot 1",
    text: "Study S finds the batch homogeneous for arsenic. It is evidence: it supports a certificate and authorizes nothing."
  },
  {
    id: "certify",
    part: "build",
    acts: ["rmp", "holder"],
    joins: ["holder"],
    issues: ["D"],
    title: "The producer certifies disc lot 1 and ships it",
    text: "Certificate D178: As = 178 ± 5 mg/kg (k = 2), method M1. It cites scope O for its authority and study S as evidence, and travels with the disc to the customer lab."
  },
  {
    id: "verify",
    part: "verify",
    acts: ["holder", "verifier"],
    joins: ["verifier"],
    expect: "accept",
    title: "The verifier checks the certificate",
    text: "It knows none of the parties in advance and trusts one root: the accreditation body. It follows every reference from D178 down to that root and answers six questions. The last is its own: is As + U at most 200 mg/kg? 178 + 5 = 183."
  },
  {
    id: "tamper",
    part: "manipulate",
    acts: ["holder", "verifier"],
    state: { tamper: !0 },
    unlock: ["tamper"],
    expect: "reject",
    title: "Someone changes the value after signing",
    text: "178 becomes 150 in the bytes. The signature no longer matches them; nothing else needs to be checked."
  },
  {
    id: "withheld",
    part: "manipulate",
    acts: ["holder", "verifier"],
    state: { withholdS: !0 },
    unlock: ["withhold"],
    expect: "not_established",
    title: "The study is left out",
    text: 'Nothing shown is false, but the evidence D178 cites is missing. The verifier cannot tell, and "cannot tell" is never accepted.'
  },
  {
    id: "range",
    part: "manipulate",
    acts: ["rmp", "verifier"],
    state: { certificate: "520" },
    unlock: ["certificate"],
    expect: "reject",
    title: "The producer certifies a value outside its scope",
    text: "Certificate D520 says 520 mg/kg and is correctly signed. The accreditation would allow it, but the producer's own scope ends at 500 mg/kg, and the certificate draws its authority from that scope, not from the accreditation directly."
  },
  {
    id: "suspend",
    part: "manipulate",
    acts: ["ab", "verifier"],
    state: { suspendA: !0 },
    unlock: ["suspend"],
    expect: "reject",
    title: "The accreditation body suspends the accreditation",
    text: "It sets one bit in its suspension list and signs the list again, here in your browser. Nothing in D178 changes, yet the verifier may no longer rely on it."
  },
  {
    id: "guarded",
    part: "decide",
    acts: ["verifier"],
    state: { certificate: "197", rule: "guarded" },
    unlock: ["rule"],
    expect: "reject",
    title: "Verifier 1 applies guarded acceptance",
    text: "Certificate D197: As = 197 ± 5 mg/kg. Under guarded acceptance the uncertainty counts against the value: 197 + 5 = 202 is above 200, so it is not fit for use."
  },
  {
    id: "simple",
    part: "decide",
    acts: ["verifier"],
    state: { certificate: "197", rule: "simple" },
    unlock: ["rule"],
    expect: "accept",
    title: "Verifier 2 applies simple acceptance",
    text: "The same bytes and the same chain. Under simple acceptance only the value counts: 197 is at most 200. The verifier's rule decides, not the issuer."
  },
  {
    id: "abroad",
    part: "decide",
    acts: ["verifier"],
    state: { trustAB: !1 },
    unlock: ["trust"],
    expect: "not_established",
    title: "Verifier 3 does not know this accreditation body",
    text: "A verifier abroad has not configured this accreditation body as a trust anchor. Every signature is valid, but it cannot tell whether the authority behind them is real. Recognition through an international arrangement would be the bridge; it is not evaluated here."
  },
  {
    id: "present",
    part: "present",
    acts: ["holder", "verifier"],
    title: "The holder presents what the verifier asks for",
    text: "Not evaluated yet. In a presentation the customer lab would sign a fresh envelope around the certificate, answering the verifier's challenge: proof of who presents, and that the presentation was made for this verifier now. It adds no trust to the certificate; the chain still decides. With selective disclosure it could reveal only what the question needs.",
    presentation: [
      { credential: "Certificate D178", reveal: "Issuer, batch, the arsenic result and its uncertainty", hide: "The copper, zinc and lead results" },
      { credential: "Scope O, accreditation A", reveal: "Everything the authority check reads", hide: "Nothing: they are the authority" },
      { credential: "Study S", reveal: "Issuer, batch, study type and outcome", hide: "In a real study: the measurement data" },
      { credential: "The presentation", reveal: "Holder, the verifier's challenge and domain", hide: "–" }
    ]
  },
  {
    id: "play",
    part: "play",
    acts: ["ab", "lab", "rmp", "holder", "verifier"],
    unlock: ["suspend", "revoke", "certificate", "tamper", "withhold", "trust", "ask", "rule"],
    title: "Your turn",
    text: "Every action is live. Certify another value, suspend or revoke, change or leave out a credential, or change what the verifier trusts and asks. Each change is evaluated at once."
  }
], Pl = "rm-verifier-1", Tl = "rm-verifier-other-anchor (demonstrator)";
{
  const e = Sn.rm.profiles[Pl];
  Ht.rm.profiles[Tl] = Ys({
    ...e,
    id: "https://vc4qi.example/profiles/rm-verifier-other-anchor",
    description: "Demonstrator-only variant of rm-verifier-1 whose only trust anchor is another, fictional accreditation body.",
    trustAnchors: e.trustAnchors.map((t) => ({ ...t, id: "https://other-ab.vc4qi.example/controller" }))
  });
}
const Ks = (e) => Cn("rm", e), ky = (e) => e.certificate === "custom" ? le.LIVE : `https://producer.vc4qi.example/credentials/D${e.certificate}`;
function My(e) {
  return jl(`rm:D:${e.value}:${e.uncertainty}:${e.method}`, () => {
    const { proof: t, ...n } = JSON.parse(Ks("https://producer.vc4qi.example/credentials/D178")), r = structuredClone(n.credentialSubject), o = r.materialPropertiesList[0].results[0];
    o.methodIri = o.methodIri.replace(/M1$/, e.method), o.data.quantity.value = e.value, o.data.quantity.uncertainty.expandedUncertainty = e.uncertainty;
    const i = { ...n.credentialStatus, id: `${le.PRODUCER_STATUS}#4`, statusListIndex: "4" };
    return Rl(
      {
        ...n,
        id: le.LIVE,
        name: "Reference material certificate, CuZn39Pb3 disc lot 1 (signed in this browser)",
        credentialSubject: r,
        credentialStatus: i
      },
      "producer",
      le.PRODUCER,
      n.validFrom,
      $l("rm"),
      Ks(le.PRODUCER)
    );
  });
}
async function ng(e = {}) {
  const t = { ...Ey, ...e }, n = ky(t), r = {};
  t.certificate === "custom" && (r[n] = await My(t)), t.suspendA && (r[le.SUSPENSION] = await Rn("rm", le.SUSPENSION, "nab", le.NAB)), t.revokeS && (r[le.LAB_STATUS] = await Rn("rm", le.LAB_STATUS, "lab", le.LAB));
  const o = Object.keys(r);
  if (t.tamper) {
    const a = r[n] ?? Ks(n), c = JSON.parse(a).credentialSubject.materialPropertiesList[0].results[0].data.quantity.value;
    r[n] = _l(a, `"value": "${c}"`, `"value": "${c === "150" ? "151" : "150"}"`);
  }
  const i = await Ia({
    binding: "rm",
    profileName: t.trustAB ? Pl : Tl,
    requestId: "urn:vc4qi:demonstrator:rm-board",
    target: n,
    claims: [{ id: "as", sourcePointer: "/credentialSubject/materialPropertiesList/0/results/0" }],
    supplied: [],
    texts: r,
    withheld: t.withholdS ? le.S : void 0,
    ...t.ask === "fit" ? { conformity: {
      requirementId: "as-mass-fraction-max-200-mg-per-kg",
      decisionRuleId: t.rule === "simple" ? "simple-acceptance" : "guarded-acceptance-expanded-u"
    } } : {},
    notAsked: "The verifier asked only whether the value is authorized; no limit was applied."
  }), s = { A: le.A, H: le.H, O: le.O, S: le.S, D: n };
  return { ...i, state: t, certificate: n, uris: s, signedLive: o };
}
const bt = {
  NAB: "https://nab.vc4qi.example/controller",
  ZLS: "https://zls.vc4qi.example/controller",
  BODY: "https://gs-body.vc4qi.example/controller",
  MAKER: "https://maker.vc4qi.example/controller",
  NAB_STATUS: "https://nab.vc4qi.example/status/gs/1",
  ZLS_STATUS: "https://zls.vc4qi.example/status/gs/1",
  BODY_STATUS: "https://gs-body.vc4qi.example/status/gs/1",
  MAKER_STATUS: "https://maker.vc4qi.example/status/gs/1",
  A: "https://nab.vc4qi.example/credentials/GS-A",
  S: "https://zls.vc4qi.example/credentials/GS-S",
  TR: ke.TR1,
  FI: "https://gs-body.vc4qi.example/credentials/FI-1",
  C: ke.C1
}, rg = [
  {
    id: "ab",
    mono: "AB",
    name: "Accreditation body",
    does: "Accredits the GS body for testing and certifying. Can revoke.",
    publishes: [{ label: "Key", uri: bt.NAB }, { label: "Revocation list", uri: bt.NAB_STATUS }]
  },
  {
    id: "so",
    mono: "SO",
    name: "Scheme owner",
    does: "Permits a body to award the GS mark, in the role ZLS has. Can revoke.",
    publishes: [{ label: "Key", uri: bt.ZLS }, { label: "Revocation list", uri: bt.ZLS_STATUS }]
  },
  {
    id: "gsb",
    mono: "GSB",
    name: "GS body",
    does: "Examines, inspects and certifies. Can withdraw a certificate.",
    publishes: [{ label: "Key", uri: bt.BODY }, { label: "Revocation list", uri: bt.BODY_STATUS }]
  },
  {
    id: "mfr",
    mono: "MFR",
    name: "Manufacturer",
    does: "Makes hair dryer HD-01, marks each unit and issues its passport.",
    publishes: [{ label: "Key", uri: bt.MAKER }, { label: "Revocation list", uri: bt.MAKER_STATUS }]
  },
  {
    id: "verifier",
    mono: "V",
    name: "Verifier",
    does: "Relies on the passport's GS mark only as far as its own profile allows.",
    publishes: [{ label: "Profile" }]
  }
], ig = [
  { code: "GS-A", label: "Accreditation", kind: "grant", actor: "ab", row: 1, about: "gsb", heldBy: "gsb" },
  { code: "GS-S", label: "Scheme permission", kind: "grant", actor: "so", row: 3, about: "gsb", heldBy: "gsb" },
  { code: "TR-1", label: "Type examination", kind: "evidence", actor: "gsb", row: 1, about: "object", aboutLabel: "model HD-01", heldBy: "mfr" },
  { code: "GSC-1", label: "GS certificate", kind: "grant", actor: "gsb", row: 2, about: "object", aboutLabel: "model HD-01", heldBy: "mfr" },
  { code: "FI-1", label: "Factory inspection", kind: "evidence", actor: "gsb", row: 3, about: "mfr", heldBy: "mfr" },
  { code: "GSM", label: "GS-mark credential", kind: "evidence", actor: "mfr", row: 2, about: "object", aboutLabel: "the unit", heldBy: "mfr" },
  { code: "DPP", label: "Product passport", kind: "claim", actor: "mfr", row: 3, about: "object", aboutLabel: "the unit", heldBy: "mfr" }
], Oy = {
  unit: "sn-0042",
  revokeA: !1,
  revokeS: !1,
  revokeC: !1,
  tamper: !1,
  withholdTR: !1,
  trust: "both"
}, Ly = {
  "sn-0042": "https://maker.vc4qi.example/credentials/DPP-1",
  "sn-0050": "https://maker.vc4qi.example/credentials/DPP-3",
  "sn-0001": "https://maker.vc4qi.example/credentials/DPP-2"
}, sg = [
  {
    id: "join",
    part: "build",
    acts: ["ab"],
    joins: ["ab"],
    title: "The accreditation body is the first party",
    text: "Before anything is signed it publishes a key, so that anyone can check what it signs, and a status list, so that it can later revoke what it issued."
  },
  {
    id: "accredit",
    part: "build",
    acts: ["ab", "gsb"],
    joins: ["gsb"],
    issues: ["GS-A"],
    title: "The accreditation body accredits the GS body",
    text: "Accreditation GS-A attests competence: testing and certifying toys and household appliances against named standards. Competence is not yet permission to award the GS mark."
  },
  {
    id: "authorize",
    part: "build",
    acts: ["so", "gsb"],
    joins: ["so"],
    issues: ["GS-S"],
    title: "The scheme owner permits the GS body to award the mark",
    text: "A second authority, in the role ZLS has for the GS mark, grants that permission, for household appliances only. Toys are not included, although the accreditation covers them."
  },
  {
    id: "examine",
    part: "build",
    acts: ["gsb", "mfr"],
    joins: ["mfr"],
    issues: ["FI-1", "TR-1"],
    title: "The GS body inspects the factory and examines the type",
    text: "Factory inspection FI-1 of the manufacturer's plant and type examination TR-1 of hair dryer HD-01. Each is signed under the GS body's accreditation. They support the certificate; they grant nothing."
  },
  {
    id: "certify",
    part: "build",
    acts: ["gsb", "mfr"],
    issues: ["GSC-1"],
    title: "The GS body certifies model HD-01",
    text: "Certificate GSC-1 cites both of its authorities, the accreditation and the scheme permission, and both studies. Every link is a reference inside a signed credential."
  },
  {
    id: "mark",
    part: "build",
    acts: ["mfr"],
    issues: ["GSM", "DPP"],
    title: "The manufacturer marks unit sn-0042 and issues its passport",
    text: "A GS-mark credential for this unit, citing the certificate, and a product passport whose compliance information lists the GS mark. Per-unit credentials are the experimental part: today's GS scheme has none."
  },
  {
    id: "verify",
    part: "verify",
    acts: ["mfr", "verifier"],
    joins: ["verifier"],
    expect: "accept",
    title: "Market surveillance checks the passport",
    text: "It knows none of the parties in advance and trusts two roots: the accreditation body and the scheme owner. It follows every reference from the passport down to them before it relies on the GS mark."
  },
  {
    id: "tamper",
    part: "manipulate",
    acts: ["mfr", "verifier"],
    state: { tamper: !0 },
    unlock: ["tamper"],
    expect: "reject",
    title: "Someone edits the passport",
    text: "The serial number is changed after signing. The signature no longer matches the bytes; this is the only manipulation a signature check alone would catch."
  },
  {
    id: "borrowed",
    part: "manipulate",
    acts: ["mfr", "verifier"],
    state: { unit: "sn-0050" },
    unlock: ["unit"],
    expect: "reject",
    title: "A passport borrows another unit's credential",
    text: "Unit sn-0050 is an HD-02, but its passport cites the GS-mark credential of unit sn-0042. Every credential is genuine and correctly signed; the link between them is not."
  },
  {
    id: "withheld",
    part: "manipulate",
    acts: ["mfr", "verifier"],
    state: { withholdTR: !0 },
    unlock: ["withhold"],
    expect: "not_established",
    title: "The type examination is left out",
    text: 'Nothing shown is false, but the study the certificate rests on is missing. The verifier cannot tell, and "cannot tell" is never accepted.'
  },
  {
    id: "withdraw",
    part: "manipulate",
    acts: ["gsb", "verifier"],
    state: { revokeC: !0 },
    unlock: ["revokeC"],
    expect: "reject",
    title: "The GS body withdraws the certificate",
    text: "It sets one bit in its revocation list and signs the list again, here in your browser. The passport and the mark credential are unchanged, yet the mark no longer holds."
  },
  {
    id: "surveillance",
    part: "decide",
    acts: ["verifier"],
    expect: "accept",
    title: "Verifier 1: market surveillance",
    text: "Its profile recognises the accreditation body and the scheme owner, so both halves of the authority, competence and permission, reach a root it trusts."
  },
  {
    id: "abroad",
    part: "decide",
    acts: ["verifier"],
    state: { trust: "accreditation-only" },
    unlock: ["trust"],
    expect: "not_established",
    title: "Verifier 2: a buyer abroad",
    text: "The same passport and the same bytes. This verifier recognises the accreditation body but not the scheme owner, so it cannot tell whether the mark was permitted. The verifier's policy decides, not the issuer's."
  },
  {
    id: "present",
    part: "present",
    acts: ["mfr", "verifier"],
    title: "Show what the question needs, and no more",
    text: "Not evaluated yet. In a presentation the manufacturer would sign a fresh envelope around the passport for the verifier's challenge. With selective disclosure it could reveal only the fields the question needs, each signature still checkable.",
    presentation: [
      { credential: "Product passport DPP-1", reveal: "Unit, model and the GS-mark entry", hide: "Facility, technical and sustainability data" },
      { credential: "Type examination TR-1", reveal: "Issuer, model, standards and the outcome", hide: "In a real report: measurements and design details" },
      { credential: "Factory inspection FI-1", reveal: "Issuer, date and the outcome", hide: "The site identifier" },
      { credential: "GS certificate GSC-1", reveal: "Everything: it is the public claim", hide: "Nothing" }
    ]
  },
  {
    id: "play",
    part: "play",
    acts: ["ab", "so", "gsb", "mfr", "verifier"],
    unlock: ["revokeA", "revokeS", "revokeC", "unit", "tamper", "withhold", "trust"],
    title: "Your turn",
    text: "Every action is live. Revoke the accreditation, the scheme permission or the certificate, show another unit's passport, edit or leave out a credential, or change whom the verifier trusts. Each change is evaluated at once."
  }
];
async function ag(e = {}) {
  const t = { ...Oy, ...e }, n = Ly[t.unit], r = bt, o = {};
  t.revokeA && (o[r.NAB_STATUS] = await Rn("gs", r.NAB_STATUS, "nab", r.NAB)), t.revokeS && (o[r.ZLS_STATUS] = await Rn("gs", r.ZLS_STATUS, "zls", r.ZLS)), t.revokeC && (o[r.BODY_STATUS] = await Rn("gs", r.BODY_STATUS, "gs-body", r.BODY));
  const i = Object.keys(o);
  t.tamper && (o[n] = _l(Cn("gs", n), "-sn-", "-sn-9"));
  const s = await Ia({
    binding: "gs",
    profileName: t.trust === "both" ? "gs-verifier-dpp-1" : Sa,
    requestId: "urn:vc4qi:demonstrator:gs-board",
    target: n,
    claims: [{ id: "mark", sourcePointer: "/credentialSubject/complianceInformation/gsMark" }],
    supplied: [],
    texts: o,
    withheld: t.withholdTR ? r.TR : void 0,
    notAsked: "The verifier asks only whether the GS-mark entry is authorized; the binding installs no decision rule."
  }), a = JSON.parse(Cn("gs", n)).evidence[0].id, c = { "GS-A": r.A, "GS-S": r.S, "TR-1": r.TR, "FI-1": r.FI, "GSC-1": r.C, GSM: a, DPP: n };
  return { ...s, state: t, certificate: n, uris: c, signedLive: i };
}
const og = {
  evaluationTime: Js,
  bindings: Object.fromEntries(Object.entries(Ht).map(([e, t]) => [e, `${t.manifest.id}@${t.manifest.version}`]))
};
export {
  Cy as BOARD_PARTS,
  Js as EVALUATION_TIME,
  hd as EXAMPLES,
  rg as GS_ACTORS,
  ig as GS_ASSETS,
  Oy as GS_DEFAULT,
  sg as GS_STORY,
  Yy as RM_ACTORS,
  eg as RM_ASSETS,
  Ey as RM_DEFAULT,
  Xy as RM_PARTS,
  tg as RM_STORY,
  Qy as STORY,
  Ky as STORY_PARTS,
  og as buildInfo,
  ag as evaluateGsBoard,
  ng as evaluateRmBoard,
  Wy as evaluateScenario
};
