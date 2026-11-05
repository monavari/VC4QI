var Bd = Object.defineProperty;
var Ys = (e) => {
  throw TypeError(e);
};
var Zd = (e, t, n) => t in e ? Bd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var dt = (e, t, n) => Zd(e, typeof t != "symbol" ? t + "" : t, n), ea = (e, t, n) => t.has(e) || Ys("Cannot " + n);
var tt = (e, t, n) => (ea(e, t, "read from private field"), n ? n.call(e) : t.get(e)), qn = (e, t, n) => t.has(e) ? Ys("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ar = (e, t, n, i) => (ea(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n);
const Ti = { rm: { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/rm/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/bindings.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Contexts, schemas, controller documents, signed A/H/O/S/D fixtures and status lists are pinned and verify in TypeScript and Python. The I1-I4 evaluators (protection, status, authority routes, support, claim mapping and coverage, conformity) and the current-reliance time rules are implemented, with a cross-language parity vector; an independent transformation vector is still required before selection.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/rm/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/rm/1#RmAccreditation", "https://vc4qi.example/bindings/rm/1#RmOperationalScope", "https://vc4qi.example/bindings/rm/1#RmCertificate", "https://vc4qi.example/bindings/rm/1#RmStudy", "https://vc4qi.example/bindings/rm/1#RmLabAuthority", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential"], schemaUris: ["https://vc4qi.example/schemas/rm/1/accreditation.json", "https://vc4qi.example/schemas/rm/1/operational-scope.json", "https://vc4qi.example/schemas/rm/1/certificate.json", "https://vc4qi.example/schemas/rm/1/study.json", "https://vc4qi.example/schemas/rm/1/lab-authority.json", "https://vc4qi.example/schemas/rm/1/authorization-policy.json", "https://vc4qi.example/schemas/rm/1/study-reference.json", "https://vc4qi.example/schemas/rm/1/status-list.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/rm-v1/catalog.json", decimalEncoding: "JSON strings typed xsd:decimal for every quantity, bound and uncertainty", orderedCollections: ["materials", "materialPropertiesList", "results"] }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/rm/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/rm/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/bindings/rm/1#authorizationCredential" }, { fact: "requiredStudy", nativePath: "/evidence/*/id", expandedIri: "https://www.w3.org/2018/credentials#evidence" }, { fact: "validFrom", nativePath: "/validFrom", expandedIri: "https://www.w3.org/2018/credentials#validFrom" }, { fact: "validUntil", nativePath: "/validUntil", expandedIri: "https://www.w3.org/2018/credentials#validUntil" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/rm/1#activityTime" }, { fact: "selectedResult", nativePath: "/credentialSubject/materialPropertiesList/*/results/*", expandedIri: "https://vc4qi.example/bindings/rm/1#results" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, material: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 1 }, authorizingReferenceSelection: "by-declared-reference-type-per-route; resolved credential type must match (else contradicted); several of one type not_established", supportReferences: { minimum: 1 }, multipleRecognizedDeclarations: "unsupported-unless-exact-deterministic-composition-is-listed", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "evidence", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse authorizationCredential references on the credential chain; an authenticated grant found by other means establishes nothing (not_established)" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/bindings/rm/1#RmAuthorizationPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], supportEvidence: "https://vc4qi.example/bindings/rm/1#RmStudyReference", supportEvidenceEstablishes: ["support-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "support-applicability", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { issueRmCertificate: "https://vc4qi.example/bindings/rm/1#issueRmCertificate", maintainRmScope: "https://vc4qi.example/bindings/rm/1#maintainRmScope", issueRmStudy: "https://vc4qi.example/bindings/rm/1#issueRmStudy" }, rules: ["A grantee equals the producer exercising certificate issuance and scope maintenance.", "O issuer and grantee equal that producer and O is contained by A.", "D issuer equals O grantee.", "S issuer equals H laboratory grantee.", "Commissioning a study grants no laboratory competence."] }, scopeAndMapping: { mappingVersion: "rm-experimental-mapping-1", recordEvaluator: "https://vc4qi.example/evaluators/rm-complete-record/1", quantityEvaluator: "https://vc4qi.example/evaluators/exact-mass-fraction/1", dimensions: ["matrixIri", "formIri", "propertyIri", "methodIri", "quantityKindIri", "range"], units: { "mg/kg": "1e-6", "kg/kg": "1" }, boundaries: "inclusive", missingOrEmptyRestrictedDimension: "not_established", recordCombination: "one-complete-record-per-claim-no-splicing", uncertainty: { requiredCoverageFactor: "2", nonnegative: !0, accreditationCeiling: "none" }, methodRevisions: [{ method: "https://vc4qi.example/bindings/rm/1#M2", revises: "https://vc4qi.example/bindings/rm/1#M1" }], methodSuccessionInterpretation: "verifier-profile mapping.methodSuccession: accept-successor | require-extension | none (none leaves a revised method not_established at gate 4)", claimCoverage: "the selected result, mapped at gate 4, must lie in one complete record of the route's own scope credential (O for operational-scope, A for direct-accreditation); no fallback to a parent grant", conformity: "verifier-profile requirements and decision rules, evaluated at gate 6 only after the claim is authorized; exact arithmetic reported in the requirement's unit", unsupported: ["asymmetric-uncertainty", "display-label-equality", "substring-matching", "implicit-method-succession"] }, routesAndRestrictions: { certificateRoute: ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A"], installedCertificateRoutes: { "operational-scope": ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A", "A-issuer-is-accreditation-anchor"], "direct-accreditation": ["A-authorizes-D", "A-issuer-is-accreditation-anchor"] }, studyRoute: ["H-authorizes-S"], requiredSupport: ["S", "H"], globalRestrictions: ["applicable-suspension", "request-time-policy"], installedGlobalRestrictions: { "accreditation-suspension": "every usable anchor-issued RmAccreditation of the certificate issuer reached through the target's termsOfUse references, on any route, must carry a fresh issuer suspension status (Bitstring Status List, statusPurpose suspension) with its bit clear; missing or unreadable suspension status is not_established; unusable or unreferenced credentials are not restrictions" }, unusedAlternativeFailures: "diagnostic-only: only the target and the credentials on the selected route and support chains decide the request", routeComposition: "AND-within-route-OR-between-complete-routes", baselineAlternatives: 1, provenanceDoesNotEstablish: ["permission", "containment"] }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, proofCollections: "unsupported-in-initial-slice", status: "authenticated-current-revocation-status-required-for-A-O-D-S-H; suspension entries on accreditations are read only by the accreditation-suspension restriction", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], freshness: "verifier-profile maxAgeSeconds from the status list validFrom; no default", historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { objectApplicability: ["materialBatch", "activity", "method", "activityTime"], supportSubjectNeedNotEqualTargetIssuer: !0, mandatoryDisclosure: ["issuer", "credentialSubject/id", "activityTime", "selectedResult", "restrictions", "authorizingReference", "requiredStudy", "relatedResource", "proof"], missingMandatoryDisclosure: "not_established", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/acceptance-ledger.csv", testVectorRoots: ["testdata/regressions", "bindings/experimental/rm-v1/test-vectors"], unsupported: ["production-accreditation", "legal-effect", "physical-sample-truth", "public-example-namespace-resolution", "general-ontology-reasoning", "wallet-interoperability", "external-recognition-adapter", "timestamp-service"] } }, profiles: { "rm-verifier-1": { id: "https://vc4qi.example/profiles/rm-verifier", version: "1", status: "experimental", description: "Verifier-owned reliance profile for the experimental RM v1 binding. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "recognize-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } }, "rm-verifier-two-routes-1": { id: "https://vc4qi.example/profiles/rm-verifier-two-routes", version: "1", status: "experimental", description: "Fictional verifier profile with two complete certificate routes, (operational scope within an accreditation) OR (direct accreditation), and the accreditation-suspension global restriction outside the OR. Exercises route composition (C01-C07); not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "recognize-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope", "direct-accreditation"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
` }, { uri: "https://producer.vc4qi.example/credentials/D178", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-x+UlPTctE0uiBAcfBFGnK7kNYberCuBI4fuulhxPmG7RA2TTPozmQu4Rcq6AKRfe", text: `{
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
    "proofValue": "z2YWySUkhQJTif2JYWoC8AwbxLTjF5NTD9rkKtmbQwZnLpyStLhQAc4WR7pCfUWnKzqtfTNHHCThhcJMxLifuwq5m"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D197", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-w9rEgUzl+pWNgepl2lgbxFCg3Gyv0Ou45gwXiEH6ABmEFezRccnHSrCfwMttxqNe", text: `{
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
    "proofValue": "z2NQzS8q3oj7iaWHhamQ7AyJCRECg8bsp3ARZWG1qnkSJKuicw5hthfrLhrSvUVs74kyUEPMGFUzU1FvoFXDKHwpg"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D520", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-gMMKJgxWlecqwcy5UAb2ni+/U7GnJR+0bp/Npra5eNuLOyuX65mHnqaekaf9hR+d", text: `{
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
    "proofValue": "z5aQzY6AFTurJ1UWg9Gm6QEwPszf83D7pSgzeqAK7J25JG6zogEnqmH1hjrzxhFPayxsU8BNtu4McazuCRsWAFPR"
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
function Hd(e) {
  return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function _s(e, ...t) {
  if (!Hd(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function ta(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Jd(e, t) {
  _s(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error("digestInto() expects output buffer of length at least " + n);
}
function gn(...e) {
  for (let t = 0; t < e.length; t++)
    e[t].fill(0);
}
function or(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function nt(e, t) {
  return e << 32 - t | e >>> t;
}
function Kd(e) {
  if (typeof e != "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(e));
}
function Uc(e) {
  return typeof e == "string" && (e = Kd(e)), _s(e), e;
}
class Qd {
}
function Ps(e) {
  const t = (i) => e().update(Uc(i)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
function Wd(e, t, n, i) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, i);
  const c = BigInt(32), r = BigInt(4294967295), a = Number(n >> c & r), s = Number(n & r), o = i ? 4 : 0, p = i ? 0 : 4;
  e.setUint32(t + o, a, i), e.setUint32(t + p, s, i);
}
function Xd(e, t, n) {
  return e & t ^ ~e & n;
}
function Yd(e, t, n) {
  return e & t ^ e & n ^ t & n;
}
class Gc extends Qd {
  constructor(t, n, i, c) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = n, this.padOffset = i, this.isLE = c, this.buffer = new Uint8Array(t), this.view = or(this.buffer);
  }
  update(t) {
    ta(this), t = Uc(t), _s(t);
    const { view: n, buffer: i, blockLen: c } = this, r = t.length;
    for (let a = 0; a < r; ) {
      const s = Math.min(c - this.pos, r - a);
      if (s === c) {
        const o = or(t);
        for (; c <= r - a; a += c)
          this.process(o, a);
        continue;
      }
      i.set(t.subarray(a, a + s), this.pos), this.pos += s, a += s, this.pos === c && (this.process(n, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    ta(this), Jd(t, this), this.finished = !0;
    const { buffer: n, view: i, blockLen: c, isLE: r } = this;
    let { pos: a } = this;
    n[a++] = 128, gn(this.buffer.subarray(a)), this.padOffset > c - a && (this.process(i, 0), a = 0);
    for (let g = a; g < c; g++)
      n[g] = 0;
    Wd(i, c - 8, BigInt(this.length * 8), r), this.process(i, 0);
    const s = or(t), o = this.outputLen;
    if (o % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const p = o / 4, m = this.get();
    if (p > m.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let g = 0; g < p; g++)
      s.setUint32(4 * g, m[g], r);
  }
  digest() {
    const { buffer: t, outputLen: n } = this;
    this.digestInto(t);
    const i = t.slice(0, n);
    return this.destroy(), i;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: n, buffer: i, length: c, finished: r, destroyed: a, pos: s } = this;
    return t.destroyed = a, t.finished = r, t.length = c, t.pos = s, c % n && t.buffer.set(i), t;
  }
  clone() {
    return this._cloneInto();
  }
}
const gt = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), we = /* @__PURE__ */ Uint32Array.from([
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
]), xe = /* @__PURE__ */ Uint32Array.from([
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
]), Rn = /* @__PURE__ */ BigInt(2 ** 32 - 1), na = /* @__PURE__ */ BigInt(32);
function el(e, t = !1) {
  return t ? { h: Number(e & Rn), l: Number(e >> na & Rn) } : { h: Number(e >> na & Rn) | 0, l: Number(e & Rn) | 0 };
}
function tl(e, t = !1) {
  const n = e.length;
  let i = new Uint32Array(n), c = new Uint32Array(n);
  for (let r = 0; r < n; r++) {
    const { h: a, l: s } = el(e[r], t);
    [i[r], c[r]] = [a, s];
  }
  return [i, c];
}
const ia = (e, t, n) => e >>> n, ra = (e, t, n) => e << 32 - n | t >>> n, Lt = (e, t, n) => e >>> n | t << 32 - n, Nt = (e, t, n) => e << 32 - n | t >>> n, jn = (e, t, n) => e << 64 - n | t >>> n - 32, $n = (e, t, n) => e >>> n - 32 | t << 64 - n;
function lt(e, t, n, i) {
  const c = (t >>> 0) + (i >>> 0);
  return { h: e + n + (c / 2 ** 32 | 0) | 0, l: c | 0 };
}
const nl = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0), il = (e, t, n, i) => t + n + i + (e / 2 ** 32 | 0) | 0, rl = (e, t, n, i) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (i >>> 0), sl = (e, t, n, i, c) => t + n + i + c + (e / 2 ** 32 | 0) | 0, al = (e, t, n, i, c) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (i >>> 0) + (c >>> 0), ol = (e, t, n, i, c, r) => t + n + i + c + r + (e / 2 ** 32 | 0) | 0, cl = /* @__PURE__ */ Uint32Array.from([
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
]), vt = /* @__PURE__ */ new Uint32Array(64);
class dl extends Gc {
  constructor(t = 32) {
    super(64, t, 8, !1), this.A = gt[0] | 0, this.B = gt[1] | 0, this.C = gt[2] | 0, this.D = gt[3] | 0, this.E = gt[4] | 0, this.F = gt[5] | 0, this.G = gt[6] | 0, this.H = gt[7] | 0;
  }
  get() {
    const { A: t, B: n, C: i, D: c, E: r, F: a, G: s, H: o } = this;
    return [t, n, i, c, r, a, s, o];
  }
  // prettier-ignore
  set(t, n, i, c, r, a, s, o) {
    this.A = t | 0, this.B = n | 0, this.C = i | 0, this.D = c | 0, this.E = r | 0, this.F = a | 0, this.G = s | 0, this.H = o | 0;
  }
  process(t, n) {
    for (let g = 0; g < 16; g++, n += 4)
      vt[g] = t.getUint32(n, !1);
    for (let g = 16; g < 64; g++) {
      const u = vt[g - 15], f = vt[g - 2], w = nt(u, 7) ^ nt(u, 18) ^ u >>> 3, x = nt(f, 17) ^ nt(f, 19) ^ f >>> 10;
      vt[g] = x + vt[g - 7] + w + vt[g - 16] | 0;
    }
    let { A: i, B: c, C: r, D: a, E: s, F: o, G: p, H: m } = this;
    for (let g = 0; g < 64; g++) {
      const u = nt(s, 6) ^ nt(s, 11) ^ nt(s, 25), f = m + u + Xd(s, o, p) + cl[g] + vt[g] | 0, x = (nt(i, 2) ^ nt(i, 13) ^ nt(i, 22)) + Yd(i, c, r) | 0;
      m = p, p = o, o = s, s = a + f | 0, a = r, r = c, c = i, i = f + x | 0;
    }
    i = i + this.A | 0, c = c + this.B | 0, r = r + this.C | 0, a = a + this.D | 0, s = s + this.E | 0, o = o + this.F | 0, p = p + this.G | 0, m = m + this.H | 0, this.set(i, c, r, a, s, o, p, m);
  }
  roundClean() {
    gn(vt);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), gn(this.buffer);
  }
}
const Fc = tl([
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
].map((e) => BigInt(e))), ll = Fc[0], ul = Fc[1], bt = /* @__PURE__ */ new Uint32Array(80), wt = /* @__PURE__ */ new Uint32Array(80);
class Bc extends Gc {
  constructor(t = 64) {
    super(128, t, 16, !1), this.Ah = xe[0] | 0, this.Al = xe[1] | 0, this.Bh = xe[2] | 0, this.Bl = xe[3] | 0, this.Ch = xe[4] | 0, this.Cl = xe[5] | 0, this.Dh = xe[6] | 0, this.Dl = xe[7] | 0, this.Eh = xe[8] | 0, this.El = xe[9] | 0, this.Fh = xe[10] | 0, this.Fl = xe[11] | 0, this.Gh = xe[12] | 0, this.Gl = xe[13] | 0, this.Hh = xe[14] | 0, this.Hl = xe[15] | 0;
  }
  // prettier-ignore
  get() {
    const { Ah: t, Al: n, Bh: i, Bl: c, Ch: r, Cl: a, Dh: s, Dl: o, Eh: p, El: m, Fh: g, Fl: u, Gh: f, Gl: w, Hh: x, Hl: b } = this;
    return [t, n, i, c, r, a, s, o, p, m, g, u, f, w, x, b];
  }
  // prettier-ignore
  set(t, n, i, c, r, a, s, o, p, m, g, u, f, w, x, b) {
    this.Ah = t | 0, this.Al = n | 0, this.Bh = i | 0, this.Bl = c | 0, this.Ch = r | 0, this.Cl = a | 0, this.Dh = s | 0, this.Dl = o | 0, this.Eh = p | 0, this.El = m | 0, this.Fh = g | 0, this.Fl = u | 0, this.Gh = f | 0, this.Gl = w | 0, this.Hh = x | 0, this.Hl = b | 0;
  }
  process(t, n) {
    for (let y = 0; y < 16; y++, n += 4)
      bt[y] = t.getUint32(n), wt[y] = t.getUint32(n += 4);
    for (let y = 16; y < 80; y++) {
      const d = bt[y - 15] | 0, l = wt[y - 15] | 0, h = Lt(d, l, 1) ^ Lt(d, l, 8) ^ ia(d, l, 7), I = Nt(d, l, 1) ^ Nt(d, l, 8) ^ ra(d, l, 7), A = bt[y - 2] | 0, $ = wt[y - 2] | 0, C = Lt(A, $, 19) ^ jn(A, $, 61) ^ ia(A, $, 6), M = Nt(A, $, 19) ^ $n(A, $, 61) ^ ra(A, $, 6), E = rl(I, M, wt[y - 7], wt[y - 16]), j = sl(E, h, C, bt[y - 7], bt[y - 16]);
      bt[y] = j | 0, wt[y] = E | 0;
    }
    let { Ah: i, Al: c, Bh: r, Bl: a, Ch: s, Cl: o, Dh: p, Dl: m, Eh: g, El: u, Fh: f, Fl: w, Gh: x, Gl: b, Hh: S, Hl: v } = this;
    for (let y = 0; y < 80; y++) {
      const d = Lt(g, u, 14) ^ Lt(g, u, 18) ^ jn(g, u, 41), l = Nt(g, u, 14) ^ Nt(g, u, 18) ^ $n(g, u, 41), h = g & f ^ ~g & x, I = u & w ^ ~u & b, A = al(v, l, I, ul[y], wt[y]), $ = ol(A, S, d, h, ll[y], bt[y]), C = A | 0, M = Lt(i, c, 28) ^ jn(i, c, 34) ^ jn(i, c, 39), E = Nt(i, c, 28) ^ $n(i, c, 34) ^ $n(i, c, 39), j = i & r ^ i & s ^ r & s, P = c & a ^ c & o ^ a & o;
      S = x | 0, v = b | 0, x = f | 0, b = w | 0, f = g | 0, w = u | 0, { h: g, l: u } = lt(p | 0, m | 0, $ | 0, C | 0), p = s | 0, m = o | 0, s = r | 0, o = a | 0, r = i | 0, a = c | 0;
      const z = nl(C, E, P);
      i = il(z, $, M, j), c = z | 0;
    }
    ({ h: i, l: c } = lt(this.Ah | 0, this.Al | 0, i | 0, c | 0)), { h: r, l: a } = lt(this.Bh | 0, this.Bl | 0, r | 0, a | 0), { h: s, l: o } = lt(this.Ch | 0, this.Cl | 0, s | 0, o | 0), { h: p, l: m } = lt(this.Dh | 0, this.Dl | 0, p | 0, m | 0), { h: g, l: u } = lt(this.Eh | 0, this.El | 0, g | 0, u | 0), { h: f, l: w } = lt(this.Fh | 0, this.Fl | 0, f | 0, w | 0), { h: x, l: b } = lt(this.Gh | 0, this.Gl | 0, x | 0, b | 0), { h: S, l: v } = lt(this.Hh | 0, this.Hl | 0, S | 0, v | 0), this.set(i, c, r, a, s, o, p, m, g, u, f, w, x, b, S, v);
  }
  roundClean() {
    gn(bt, wt);
  }
  destroy() {
    gn(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class pl extends Bc {
  constructor() {
    super(48), this.Ah = we[0] | 0, this.Al = we[1] | 0, this.Bh = we[2] | 0, this.Bl = we[3] | 0, this.Ch = we[4] | 0, this.Cl = we[5] | 0, this.Dh = we[6] | 0, this.Dl = we[7] | 0, this.Eh = we[8] | 0, this.El = we[9] | 0, this.Fh = we[10] | 0, this.Fl = we[11] | 0, this.Gh = we[12] | 0, this.Gl = we[13] | 0, this.Hh = we[14] | 0, this.Hl = we[15] | 0;
  }
}
const fl = /* @__PURE__ */ Ps(() => new dl()), hl = /* @__PURE__ */ Ps(() => new Bc()), ml = /* @__PURE__ */ Ps(() => new pl()), yl = fl, gl = hl, vl = ml;
class bl {
  constructor(t) {
    dt(this, "_chunks", []);
    dt(this, "_algo");
    this._algo = t === "sha384" ? "sha384" : t === "sha512" ? "sha512" : "sha256";
  }
  update(t, n) {
    const i = typeof t == "string" ? new TextEncoder().encode(t) : t;
    return this._chunks.push(i), this;
  }
  digest(t) {
    const n = this._chunks.reduce((a, s) => a + s.length, 0), i = new Uint8Array(n);
    let c = 0;
    for (const a of this._chunks)
      i.set(a, c), c += a.length;
    let r;
    return this._algo === "sha384" ? r = vl(i) : this._algo === "sha512" ? r = gl(i) : r = yl(i), t === "base64" ? btoa(String.fromCharCode(...r)) : t === "hex" ? Array.from(r).map((a) => a.toString(16).padStart(2, "0")).join("") : r;
  }
}
function ms(e) {
  return new bl(e);
}
class $e extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "CatalogError";
  }
}
function wl(e, t) {
  if (e.trim().length === 0)
    throw new $e("INVALID_RESOURCE", `${t} must be nonempty.`);
}
function Fi(e) {
  return `sha384-${ms("sha384").update(e).digest("base64")}`;
}
function sa(e) {
  const t = /* @__PURE__ */ new Map();
  return {
    get resolved() {
      return new Set(t.keys());
    },
    resolve(n) {
      if (!t.has(n))
        try {
          t.set(n, e.resolve(n));
        } catch (c) {
          if (!(c instanceof $e)) throw c;
          t.set(n, c);
        }
      const i = t.get(n);
      if (i instanceof $e) throw i;
      return { ...i, bytes: Uint8Array.from(i.bytes) };
    }
  };
}
var Jt;
class xl {
  constructor(t) {
    qn(this, Jt, /* @__PURE__ */ new Map());
    for (const n of t) {
      for (const [c, r] of Object.entries({
        uri: n.uri,
        mediaType: n.mediaType,
        origin: n.origin,
        version: n.version
      })) wl(r, c);
      if (tt(this, Jt).has(n.uri))
        throw new $e("DUPLICATE_RESOURCE", `Duplicate static resource: ${n.uri}`);
      const i = Fi(n.bytes);
      if (i !== n.digestSRI)
        throw new $e(
          "INTEGRITY_MISMATCH",
          `Static resource ${n.uri} has ${i}; expected ${n.digestSRI}.`
        );
      tt(this, Jt).set(n.uri, { ...n, bytes: Uint8Array.from(n.bytes) });
    }
  }
  openSession(t) {
    if (!Number.isSafeInteger(t.maxResources) || t.maxResources <= 0 || !Number.isSafeInteger(t.maxBytes) || t.maxBytes <= 0)
      throw new $e("INVALID_RESOURCE", "Catalog budgets must be positive safe integers.");
    return new Sl(tt(this, Jt), Object.freeze({ ...t }));
  }
}
Jt = new WeakMap();
var Kt, Qt;
class Sl {
  constructor(t, n) {
    qn(this, Kt, 0);
    qn(this, Qt, 0);
    this.resources = t, this.budget = n;
  }
  get usage() {
    return Object.freeze({ resources: tt(this, Kt), bytes: tt(this, Qt) });
  }
  resolve(t) {
    const n = this.resources.get(t);
    if (!n)
      throw new $e("RESOURCE_NOT_FOUND", `Static resource is not installed: ${t}`);
    if (tt(this, Kt) + 1 > this.budget.maxResources || tt(this, Qt) + n.bytes.byteLength > this.budget.maxBytes)
      throw new $e("RESOURCE_BUDGET_EXCEEDED", `Static resource budget exceeded at ${t}.`);
    return ar(this, Kt, tt(this, Kt) + 1), ar(this, Qt, tt(this, Qt) + n.bytes.byteLength), { ...n, bytes: Uint8Array.from(n.bytes) };
  }
}
Kt = new WeakMap(), Qt = new WeakMap();
function Il(e) {
  return async (t) => {
    const n = e.resolve(t);
    if (n.mediaType !== "application/json" && n.mediaType !== "application/ld+json" && !n.mediaType.endsWith("+json"))
      throw new $e(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} has unsupported media type ${n.mediaType}.`
      );
    let i;
    try {
      const c = new TextDecoder("utf-8", { fatal: !0 }).decode(n.bytes);
      i = JSON.parse(c);
    } catch (c) {
      throw new $e(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} is not valid UTF-8 JSON: ${String(c)}.`
      );
    }
    return { contextUrl: null, document: i, documentUrl: t };
  };
}
const aa = "https://vc4qi.example/bindings/rm/1", cr = [
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
function _n(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Zc(e) {
  if (e !== null && typeof e == "object") {
    for (const t of Object.values(e)) Zc(t);
    Object.freeze(e);
  }
  return e;
}
function Al(e) {
  if (!_n(e)) throw new TypeError("Binding manifest must be an object.");
  if (Object.keys(e).length !== cr.length || cr.some((n) => !Object.hasOwn(e, n)))
    throw new TypeError("Binding manifest must contain exactly the supported top-level categories.");
  if (typeof e.id != "string" || e.id.length === 0 || typeof e.version != "string" || e.version.length === 0 || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Binding manifest identity, version, or status is invalid.");
  if (!_n(e.installation) || e.installation.status !== "incomplete" && e.installation.status !== "installable" || typeof e.installation.reason != "string" || e.installation.reason.length === 0 || !Array.isArray(e.installation.pendingResources) || e.installation.pendingResources.some((n) => typeof n != "string" || n.length === 0))
    throw new TypeError("Binding manifest installation state is invalid.");
  if (!Array.isArray(e.factMappings) || e.factMappings.length === 0 || e.factMappings.some((n) => !_n(n)))
    throw new TypeError("Binding manifest factMappings must be a nonempty object array.");
  for (const n of cr.slice(4))
    if (!(n === "installation" || n === "factMappings") && (!_n(e[n]) || Object.keys(e[n]).length === 0))
      throw new TypeError(`Binding manifest ${n} must be a nonempty object.`);
  return Zc(structuredClone(e));
}
const Wt = "https://www.w3.org/ns/credentials/v2", ql = "https://vc4qi.example/contexts/rm/1", Dt = "https://vc4qi.example/schemas/rm/1/", Rl = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", jl = BigInt(58);
function $l(e) {
  if (e.length === 0) return new Uint8Array(0);
  let t = 0;
  for (const a of e) {
    if (a !== "1") break;
    t++;
  }
  let n = 0n;
  for (const a of e) {
    const s = Rl.indexOf(a);
    if (s === -1) throw new Error(`Invalid base58btc character: '${a}'`);
    n = n * jl + BigInt(s);
  }
  const i = [];
  for (; n > 0n; )
    i.push(Number(n & 0xffn)), n >>= 8n;
  i.reverse();
  const c = Uint8Array.from(i), r = new Uint8Array(t + c.length);
  return r.set(c, t), r;
}
function Hc(e) {
  if (!e.startsWith("z"))
    throw new Error(`Expected multibase base58btc prefix 'z', got '${e[0]}'`);
  return $l(e.slice(1));
}
const oa = [237, 1], _l = ["revoked", "expires"];
function ye(e, t, n, i = {}) {
  return Object.freeze({ state: e, code: t, reason: n, ...i });
}
function Ci(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Pl(e) {
  if (typeof e == "string" && e.length > 0) return e;
  if (Ci(e) && typeof e.id == "string" && e.id.length > 0) return e.id;
}
function Tl(e) {
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
function Cl(e) {
  if (typeof e != "string" || !e.startsWith("z")) return;
  let t;
  try {
    t = Hc(e);
  } catch {
    return;
  }
  if (!(t.length !== 34 || t[0] !== oa[0] || t[1] !== oa[1]))
    return t.slice(2);
}
function El(e, t, n) {
  const i = Pl(e);
  if (i === void 0)
    return ye("not_established", "ISSUER_MISSING", "The credential has no issuer identifier.");
  if (typeof t != "string")
    return ye("contradicted", "MALFORMED_METHOD", "The proof names no verification method.");
  const c = Tl(t);
  if (c === void 0)
    return ye(
      "contradicted",
      "MALFORMED_METHOD",
      `Verification method ${t} is not an absolute URL with a fragment.`
    );
  if (c !== i)
    return ye(
      "contradicted",
      "NOT_ISSUER_CONTROLLER",
      `Verification method ${t} is not in issuer ${i}'s controller document.`
    );
  let r, a;
  try {
    const u = n.resolve(c);
    a = u.digestSRI, r = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(u.bytes));
  } catch (u) {
    return u instanceof $e ? ye(
      "not_established",
      "CONTROLLER_NOT_INSTALLED",
      `Controller document ${c} is not available: ${u.code}.`
    ) : ye(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${c} is not valid UTF-8 JSON.`
    );
  }
  if (!Ci(r))
    return ye(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${c} is not a JSON object.`
    );
  if (r.id !== c)
    return ye(
      "contradicted",
      "CONTROLLER_ID_MISMATCH",
      `Controller document at ${c} identifies itself as ${String(r.id)}.`
    );
  const o = (Array.isArray(r.verificationMethod) ? r.verificationMethod : []).filter((u) => Ci(u) && u.id === t);
  if (o.length === 0)
    return ye(
      "contradicted",
      "METHOD_NOT_FOUND",
      `${t} is not listed in its controller document.`
    );
  if (o.length > 1)
    return ye(
      "contradicted",
      "METHOD_AMBIGUOUS",
      `${t} is listed more than once in its controller document.`
    );
  const p = o[0];
  if (p.type !== "Multikey")
    return ye(
      "not_established",
      "METHOD_TYPE_UNSUPPORTED",
      `Verification method type ${String(p.type)} is not supported; Multikey is required.`
    );
  if (p.controller !== c)
    return ye(
      "contradicted",
      "METHOD_CONTROLLER_MISMATCH",
      `${t} is controlled by ${String(p.controller)}, not ${c}.`
    );
  if (_l.some((u) => Object.hasOwn(p, u)))
    return ye(
      "not_established",
      "METHOD_LIFECYCLE_UNSUPPORTED",
      "Key revocation/expiry metadata is not supported in the initial slice."
    );
  const m = Cl(p.publicKeyMultibase);
  if (m === void 0)
    return ye(
      "contradicted",
      "INVALID_PUBLIC_KEY",
      `${t} does not carry an Ed25519 Multikey public key.`
    );
  const g = Array.isArray(r.assertionMethod) ? r.assertionMethod : [];
  return g.includes(t) ? ye(
    "established",
    "AUTHORIZED",
    `${t} is the issuer's Ed25519 assertion key.`,
    { publicKey: m, verificationMethod: t, controllerDocumentDigest: a }
  ) : g.some((u) => Ci(u) && u.id === t) ? ye(
    "not_established",
    "EMBEDDED_METHOD_UNSUPPORTED",
    "Embedded assertionMethod entries are not supported; a reference is required."
  ) : ye(
    "contradicted",
    "NOT_ASSERTION_METHOD",
    `${t} is not authorized for assertionMethod.`
  );
}
const ca = ["accept-successor", "require-extension", "none"], kl = ["value-at-most-limit", "value-plus-expanded-uncertainty-at-most-limit"], Ml = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/;
function Ge(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const Me = (e) => typeof e == "string" && e.trim().length > 0, dr = (e) => Array.isArray(e) && e.length > 0 && e.every(Me) && new Set(e).size === e.length;
function Jc(e) {
  if (!Ge(e) || !Me(e.id) || !Me(e.version) || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Reliance profile identity, version or status is invalid.");
  const t = e.binding;
  if (!Ge(t) || !Me(t.id) || !Me(t.version))
    throw new TypeError("Reliance profile must name exactly one binding and version.");
  if (!Array.isArray(e.trustAnchors) || e.trustAnchors.some((p) => !Ge(p) || !Me(p.id) || !dr(p.purposes)))
    throw new TypeError("Reliance profile trustAnchors must list anchors with explicit purposes.");
  const n = e.authority;
  if (!Ge(n) || !dr(n.certificateRoutes) || !Array.isArray(n.globalRestrictions) || !n.globalRestrictions.every(Me) || !Number.isSafeInteger(n.maxRoutes) || n.maxRoutes <= 0)
    throw new TypeError("Reliance profile authority needs certificateRoutes, globalRestrictions and a positive maxRoutes.");
  const i = e.credentialStatus;
  if (!Ge(i) || typeof i.required != "boolean" || !dr(i.purposes) || !Number.isSafeInteger(i.maxAgeSeconds) || i.maxAgeSeconds <= 0)
    throw new TypeError("Reliance profile credentialStatus needs required, purposes and a positive maxAgeSeconds.");
  const c = e.mapping;
  if (!Ge(c) || !ca.includes(c.methodSuccession))
    throw new TypeError(`Reliance profile mapping.methodSuccession must be one of ${ca.join(", ")}.`);
  const r = e.conformity;
  if (!Ge(r) || !Array.isArray(r.requirements) || !Array.isArray(r.decisionRules) || r.requirements.some((p) => !Ge(p) || !Me(p.id) || !Me(p.propertyIri) || !Me(p.quantityKindIri) || !Ge(p.upperLimit) || typeof p.upperLimit.value != "string" || !Ml.test(p.upperLimit.value) || !Me(p.upperLimit.unit)) || r.decisionRules.some((p) => !Ge(p) || !Me(p.id) || !kl.includes(p.acceptWhen)))
    throw new TypeError("Reliance profile conformity needs requirements (id, propertyIri, quantityKindIri, upperLimit) and decisionRules (id, acceptWhen).");
  if (e.bindingRules !== void 0 && !Ge(e.bindingRules))
    throw new TypeError("Reliance profile bindingRules must be an object when present.");
  const a = r.requirements, s = r.decisionRules, o = [...a.map((p) => p.id), ...s.map((p) => p.id)];
  if (new Set(o).size !== o.length) throw new TypeError("Reliance profile conformity ids must be unique.");
  return Object.freeze({
    id: e.id,
    version: e.version,
    status: e.status,
    binding: Object.freeze({ id: t.id, version: t.version }),
    trustAnchors: Object.freeze(e.trustAnchors.map((p) => Object.freeze({
      id: p.id,
      purposes: Object.freeze([...p.purposes])
    }))),
    authority: Object.freeze({
      certificateRoutes: Object.freeze([...n.certificateRoutes]),
      globalRestrictions: Object.freeze([...n.globalRestrictions]),
      maxRoutes: n.maxRoutes
    }),
    credentialStatus: Object.freeze({
      required: i.required,
      purposes: Object.freeze([...i.purposes]),
      maxAgeSeconds: i.maxAgeSeconds
    }),
    mapping: Object.freeze({ methodSuccession: c.methodSuccession }),
    conformity: Object.freeze({
      requirements: Object.freeze(a.map((p) => Object.freeze({
        id: p.id,
        propertyIri: p.propertyIri,
        quantityKindIri: p.quantityKindIri,
        upperLimit: Object.freeze({ value: p.upperLimit.value, unit: p.upperLimit.unit })
      }))),
      decisionRules: Object.freeze(s.map((p) => Object.freeze({ id: p.id, acceptWhen: p.acceptWhen })))
    }),
    bindingRules: Object.freeze({ ...e.bindingRules })
  });
}
function le(e, t) {
  if (e.trim().length === 0)
    throw new TypeError(`${t} must be a non-empty string.`);
}
function lr(e, t) {
  if (new Set(e).size !== e.length)
    throw new TypeError(`${t} must not contain duplicates.`);
}
function ys(e, t) {
  const n = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/.exec(e);
  if (!n)
    throw new TypeError(`${t} must be an ISO 8601 date-time with an explicit offset.`);
  const [, i, c, r, a, s, o] = n, p = n[7], m = Number(i), g = Number(c), u = Number(r), f = Number(a), w = Number(s), x = Number(o), b = /* @__PURE__ */ new Date(0);
  b.setUTCFullYear(m, g - 1, u), b.setUTCHours(0, 0, 0, 0);
  const S = b.getUTCFullYear() !== m || b.getUTCMonth() !== g - 1 || b.getUTCDate() !== u, v = p === "Z" ? null : /^([+-])(\d{2}):(\d{2})$/.exec(p), y = v !== null && (Number(v[2]) > 23 || Number(v[3]) > 59);
  if (m < 1 || S || f > 23 || w > 59 || x > 59 || y || !Number.isFinite(Date.parse(e)))
    throw new TypeError(`${t} must be a valid ISO 8601 date-time.`);
}
function ur(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0)
    throw new TypeError(`${t} must be a positive safe integer.`);
}
function Li(e, t) {
  le(e.id, `${t}.id`), le(e.version, `${t}.version`);
}
function Ni(e) {
  return Object.freeze({ id: e.id, version: e.version });
}
function un(e) {
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
function Ol(e) {
  if (le(e.requestId, "requestId"), le(e.targetId, "targetId"), le(e.purpose, "purpose"), le(e.trustConfigId, "trustConfigId"), Li(e.binding, "binding"), Li(e.profile, "profile"), ys(e.evaluationTime, "evaluationTime"), ys(e.activityTime, "activityTime"), e.selectedClaims.length === 0)
    throw new TypeError("selectedClaims must contain at least one claim.");
  for (const [r, a] of e.selectedClaims.entries())
    le(a.id, `selectedClaims[${r}].id`), le(a.sourcePointer, `selectedClaims[${r}].sourcePointer`);
  lr(e.selectedClaims.map((r) => r.id), "selected claim IDs"), lr(e.selectedClaims.map((r) => r.sourcePointer), "selected claim source pointers");
  for (const [r, a] of e.suppliedEvidence.entries())
    le(a, `suppliedEvidence[${r}]`);
  lr(e.suppliedEvidence, "suppliedEvidence"), ur(e.resolverLimits.maxResources, "resolverLimits.maxResources"), ur(e.resolverLimits.maxDepth, "resolverLimits.maxDepth"), ur(e.resolverLimits.maxBytes, "resolverLimits.maxBytes"), e.conformity && (le(e.conformity.requirementId, "conformity.requirementId"), le(e.conformity.decisionRuleId, "conformity.decisionRuleId"));
  const t = Object.freeze(e.selectedClaims.map((r) => Object.freeze({
    id: r.id,
    sourcePointer: r.sourcePointer
  }))), n = Object.freeze([...e.suppliedEvidence]), i = Object.freeze({ ...e.resolverLimits }), c = e.conformity ? Object.freeze({ ...e.conformity }) : void 0;
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    selectedClaims: t,
    purpose: e.purpose,
    binding: Ni(e.binding),
    profile: Ni(e.profile),
    trustConfigId: e.trustConfigId,
    evaluationTime: e.evaluationTime,
    activityTime: e.activityTime,
    suppliedEvidence: n,
    resolverLimits: i,
    ...c ? { conformity: c } : {}
  });
}
function Ll(e, t) {
  if (!Number.isInteger(e.gate) || e.gate < 0 || e.gate > 6)
    throw new TypeError(`trace[${t}].gate must be a canonical gate number 0-6.`);
  le(e.nodeUse, `trace[${t}].nodeUse`), le(e.predicate, `trace[${t}].predicate`), le(e.reason, `trace[${t}].reason`);
  const n = un({
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
function Nl(e, t) {
  if (le(e.uri, `resources[${t}].uri`), !/^sha384-[A-Za-z0-9+/]{64}$/.test(e.digestSRI))
    throw new TypeError(`resources[${t}].digestSRI must be a SHA-384 SRI value.`);
  if (!["static", "artifact", "status"].includes(e.kind) || !["catalog", "supplied"].includes(e.source))
    throw new TypeError(`resources[${t}] has an unsupported kind or source.`);
  return ys(e.observedAt, `resources[${t}].observedAt`), Object.freeze({ ...e });
}
function Bi(e) {
  if (le(e.requestId, "requestId"), le(e.targetId, "targetId"), Li(e.binding, "binding"), Li(e.profile, "profile"), e.artifactVerification.forEach((t, n) => le(t.artifactId, `artifactVerification[${n}].artifactId`)), e.authorization.forEach((t, n) => le(t.claimId, `authorization[${n}].claimId`)), e.support.forEach((t, n) => le(t.obligationId, `support[${n}].obligationId`)), e.conformity.requested)
    le(e.conformity.requirementId, "conformity.requirementId"), le(e.conformity.decisionRuleId, "conformity.decisionRuleId");
  else if (e.conformity.requested !== !1 || e.conformity.execution !== "not_run")
    throw new TypeError("Unrequested conformity must have execution state not_run.");
  if (!["accept", "reject", "not_established"].includes(e.decision))
    throw new TypeError(`Unsupported reliance decision: ${String(e.decision)}.`);
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: Ni(e.binding),
    profile: Ni(e.profile),
    artifactVerification: Object.freeze(e.artifactVerification.map((t) => un({
      ...t
    }))),
    authorization: Object.freeze(e.authorization.map((t) => Object.freeze({
      ...un(t),
      routeWitnessIds: Object.freeze([...t.routeWitnessIds])
    }))),
    support: Object.freeze(e.support.map((t) => Object.freeze({
      ...un(t),
      witnessIds: Object.freeze([...t.witnessIds])
    }))),
    conformity: e.conformity.requested ? un({ ...e.conformity }) : Object.freeze({ requested: !1, execution: "not_run" }),
    decision: e.decision,
    trace: Object.freeze((e.trace ?? []).map(Ll)),
    resources: Object.freeze((e.resources ?? []).map(Nl)),
    limitations: Object.freeze([...e.limitations ?? []])
  });
}
function Kc(e, t) {
  if (e.length === 0)
    throw new TypeError(`${t} requires at least one semantic state.`);
  for (const n of e)
    if (!["established", "contradicted", "not_established"].includes(n))
      throw new TypeError(`${t} received unsupported semantic state: ${String(n)}.`);
}
function ve(e) {
  return Kc(e, "semanticAnd"), e.includes("contradicted") ? "contradicted" : e.every((t) => t === "established") ? "established" : "not_established";
}
function bn(e) {
  return Kc(e, "semanticOr"), e.includes("established") ? "established" : e.every((t) => t === "contradicted") ? "contradicted" : "not_established";
}
function Ts(e) {
  const t = ve(e);
  return t === "established" ? "accept" : t === "contradicted" ? "reject" : "not_established";
}
var da = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Cs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Dl(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function i() {
      return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(i) {
    var c = Object.getOwnPropertyDescriptor(e, i);
    Object.defineProperty(n, i, c.get ? c : {
      enumerable: !0,
      get: function() {
        return e[i];
      }
    });
  }), n;
}
var Pn = { exports: {} }, pr = {}, ut = {}, Pt = {}, fr = {}, hr = {}, mr = {}, la;
function Di() {
  return la || (la = 1, (function(e) {
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
    class i extends t {
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
    e._Code = i, e.nil = new i("");
    function c(S, ...v) {
      const y = [S[0]];
      let d = 0;
      for (; d < v.length; )
        s(y, v[d]), y.push(S[++d]);
      return new i(y);
    }
    e._ = c;
    const r = new i("+");
    function a(S, ...v) {
      const y = [f(S[0])];
      let d = 0;
      for (; d < v.length; )
        y.push(r), s(y, v[d]), y.push(r, f(S[++d]));
      return o(y), new i(y);
    }
    e.str = a;
    function s(S, v) {
      v instanceof i ? S.push(...v._items) : v instanceof n ? S.push(v) : S.push(g(v));
    }
    e.addCodeArg = s;
    function o(S) {
      let v = 1;
      for (; v < S.length - 1; ) {
        if (S[v] === r) {
          const y = p(S[v - 1], S[v + 1]);
          if (y !== void 0) {
            S.splice(v - 1, 3, y);
            continue;
          }
          S[v++] = "+";
        }
        v++;
      }
    }
    function p(S, v) {
      if (v === '""')
        return S;
      if (S === '""')
        return v;
      if (typeof S == "string")
        return v instanceof n || S[S.length - 1] !== '"' ? void 0 : typeof v != "string" ? `${S.slice(0, -1)}${v}"` : v[0] === '"' ? S.slice(0, -1) + v.slice(1) : void 0;
      if (typeof v == "string" && v[0] === '"' && !(S instanceof n))
        return `"${S}${v.slice(1)}`;
    }
    function m(S, v) {
      return v.emptyStr() ? S : S.emptyStr() ? v : a`${S}${v}`;
    }
    e.strConcat = m;
    function g(S) {
      return typeof S == "number" || typeof S == "boolean" || S === null ? S : f(Array.isArray(S) ? S.join(",") : S);
    }
    function u(S) {
      return new i(f(S));
    }
    e.stringify = u;
    function f(S) {
      return JSON.stringify(S).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = f;
    function w(S) {
      return typeof S == "string" && e.IDENTIFIER.test(S) ? new i(`.${S}`) : c`[${S}]`;
    }
    e.getProperty = w;
    function x(S) {
      if (typeof S == "string" && e.IDENTIFIER.test(S))
        return new i(`${S}`);
      throw new Error(`CodeGen: invalid export name: ${S}, use explicit $id name mapping`);
    }
    e.getEsmExportName = x;
    function b(S) {
      return new i(S.toString());
    }
    e.regexpCode = b;
  })(mr)), mr;
}
var yr = {}, ua;
function pa() {
  return ua || (ua = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Di();
    class n extends Error {
      constructor(p) {
        super(`CodeGen: "code" for ${p} not defined`), this.value = p.value;
      }
    }
    var i;
    (function(o) {
      o[o.Started = 0] = "Started", o[o.Completed = 1] = "Completed";
    })(i || (e.UsedValueState = i = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class c {
      constructor({ prefixes: p, parent: m } = {}) {
        this._names = {}, this._prefixes = p, this._parent = m;
      }
      toName(p) {
        return p instanceof t.Name ? p : this.name(p);
      }
      name(p) {
        return new t.Name(this._newName(p));
      }
      _newName(p) {
        const m = this._names[p] || this._nameGroup(p);
        return `${p}${m.index++}`;
      }
      _nameGroup(p) {
        var m, g;
        if (!((g = (m = this._parent) === null || m === void 0 ? void 0 : m._prefixes) === null || g === void 0) && g.has(p) || this._prefixes && !this._prefixes.has(p))
          throw new Error(`CodeGen: prefix "${p}" is not allowed in this scope`);
        return this._names[p] = { prefix: p, index: 0 };
      }
    }
    e.Scope = c;
    class r extends t.Name {
      constructor(p, m) {
        super(m), this.prefix = p;
      }
      setValue(p, { property: m, itemIndex: g }) {
        this.value = p, this.scopePath = (0, t._)`.${new t.Name(m)}[${g}]`;
      }
    }
    e.ValueScopeName = r;
    const a = (0, t._)`\n`;
    class s extends c {
      constructor(p) {
        super(p), this._values = {}, this._scope = p.scope, this.opts = { ...p, _n: p.lines ? a : t.nil };
      }
      get() {
        return this._scope;
      }
      name(p) {
        return new r(p, this._newName(p));
      }
      value(p, m) {
        var g;
        if (m.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const u = this.toName(p), { prefix: f } = u, w = (g = m.key) !== null && g !== void 0 ? g : m.ref;
        let x = this._values[f];
        if (x) {
          const v = x.get(w);
          if (v)
            return v;
        } else
          x = this._values[f] = /* @__PURE__ */ new Map();
        x.set(w, u);
        const b = this._scope[f] || (this._scope[f] = []), S = b.length;
        return b[S] = m.ref, u.setValue(m, { property: f, itemIndex: S }), u;
      }
      getValue(p, m) {
        const g = this._values[p];
        if (g)
          return g.get(m);
      }
      scopeRefs(p, m = this._values) {
        return this._reduceValues(m, (g) => {
          if (g.scopePath === void 0)
            throw new Error(`CodeGen: name "${g}" has no value`);
          return (0, t._)`${p}${g.scopePath}`;
        });
      }
      scopeCode(p = this._values, m, g) {
        return this._reduceValues(p, (u) => {
          if (u.value === void 0)
            throw new Error(`CodeGen: name "${u}" has no value`);
          return u.value.code;
        }, m, g);
      }
      _reduceValues(p, m, g = {}, u) {
        let f = t.nil;
        for (const w in p) {
          const x = p[w];
          if (!x)
            continue;
          const b = g[w] = g[w] || /* @__PURE__ */ new Map();
          x.forEach((S) => {
            if (b.has(S))
              return;
            b.set(S, i.Started);
            let v = m(S);
            if (v) {
              const y = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              f = (0, t._)`${f}${y} ${S} = ${v};${this.opts._n}`;
            } else if (v = u?.(S))
              f = (0, t._)`${f}${v}${this.opts._n}`;
            else
              throw new n(S);
            b.set(S, i.Completed);
          });
        }
        return f;
      }
    }
    e.ValueScope = s;
  })(yr)), yr;
}
var fa;
function te() {
  return fa || (fa = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Di(), n = /* @__PURE__ */ pa();
    var i = /* @__PURE__ */ Di();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return i._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return i.str;
    } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
      return i.strConcat;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return i.nil;
    } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
      return i.getProperty;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return i.stringify;
    } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
      return i.regexpCode;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return i.Name;
    } });
    var c = /* @__PURE__ */ pa();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return c.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return c.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return c.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return c.varKinds;
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
    class r {
      optimizeNodes() {
        return this;
      }
      optimizeNames(R, q) {
        return this;
      }
    }
    class a extends r {
      constructor(R, q, T) {
        super(), this.varKind = R, this.name = q, this.rhs = T;
      }
      render({ es5: R, _n: q }) {
        const T = R ? n.varKinds.var : this.varKind, D = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${T} ${this.name}${D};` + q;
      }
      optimizeNames(R, q) {
        if (R[this.name.str])
          return this.rhs && (this.rhs = P(this.rhs, R, q)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class s extends r {
      constructor(R, q, T) {
        super(), this.lhs = R, this.rhs = q, this.sideEffects = T;
      }
      render({ _n: R }) {
        return `${this.lhs} = ${this.rhs};` + R;
      }
      optimizeNames(R, q) {
        if (!(this.lhs instanceof t.Name && !R[this.lhs.str] && !this.sideEffects))
          return this.rhs = P(this.rhs, R, q), this;
      }
      get names() {
        const R = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return j(R, this.rhs);
      }
    }
    class o extends s {
      constructor(R, q, T, D) {
        super(R, T, D), this.op = q;
      }
      render({ _n: R }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + R;
      }
    }
    class p extends r {
      constructor(R) {
        super(), this.label = R, this.names = {};
      }
      render({ _n: R }) {
        return `${this.label}:` + R;
      }
    }
    class m extends r {
      constructor(R) {
        super(), this.label = R, this.names = {};
      }
      render({ _n: R }) {
        return `break${this.label ? ` ${this.label}` : ""};` + R;
      }
    }
    class g extends r {
      constructor(R) {
        super(), this.error = R;
      }
      render({ _n: R }) {
        return `throw ${this.error};` + R;
      }
      get names() {
        return this.error.names;
      }
    }
    class u extends r {
      constructor(R) {
        super(), this.code = R;
      }
      render({ _n: R }) {
        return `${this.code};` + R;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(R, q) {
        return this.code = P(this.code, R, q), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class f extends r {
      constructor(R = []) {
        super(), this.nodes = R;
      }
      render(R) {
        return this.nodes.reduce((q, T) => q + T.render(R), "");
      }
      optimizeNodes() {
        const { nodes: R } = this;
        let q = R.length;
        for (; q--; ) {
          const T = R[q].optimizeNodes();
          Array.isArray(T) ? R.splice(q, 1, ...T) : T ? R[q] = T : R.splice(q, 1);
        }
        return R.length > 0 ? this : void 0;
      }
      optimizeNames(R, q) {
        const { nodes: T } = this;
        let D = T.length;
        for (; D--; ) {
          const H = T[D];
          H.optimizeNames(R, q) || (z(R, H.names), T.splice(D, 1));
        }
        return T.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((R, q) => E(R, q.names), {});
      }
    }
    class w extends f {
      render(R) {
        return "{" + R._n + super.render(R) + "}" + R._n;
      }
    }
    class x extends f {
    }
    class b extends w {
    }
    b.kind = "else";
    class S extends w {
      constructor(R, q) {
        super(q), this.condition = R;
      }
      render(R) {
        let q = `if(${this.condition})` + super.render(R);
        return this.else && (q += "else " + this.else.render(R)), q;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const R = this.condition;
        if (R === !0)
          return this.nodes;
        let q = this.else;
        if (q) {
          const T = q.optimizeNodes();
          q = this.else = Array.isArray(T) ? new b(T) : T;
        }
        if (q)
          return R === !1 ? q instanceof S ? q : q.nodes : this.nodes.length ? this : new S(_(R), q instanceof S ? [q] : q.nodes);
        if (!(R === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(R, q) {
        var T;
        if (this.else = (T = this.else) === null || T === void 0 ? void 0 : T.optimizeNames(R, q), !!(super.optimizeNames(R, q) || this.else))
          return this.condition = P(this.condition, R, q), this;
      }
      get names() {
        const R = super.names;
        return j(R, this.condition), this.else && E(R, this.else.names), R;
      }
    }
    S.kind = "if";
    class v extends w {
    }
    v.kind = "for";
    class y extends v {
      constructor(R) {
        super(), this.iteration = R;
      }
      render(R) {
        return `for(${this.iteration})` + super.render(R);
      }
      optimizeNames(R, q) {
        if (super.optimizeNames(R, q))
          return this.iteration = P(this.iteration, R, q), this;
      }
      get names() {
        return E(super.names, this.iteration.names);
      }
    }
    class d extends v {
      constructor(R, q, T, D) {
        super(), this.varKind = R, this.name = q, this.from = T, this.to = D;
      }
      render(R) {
        const q = R.es5 ? n.varKinds.var : this.varKind, { name: T, from: D, to: H } = this;
        return `for(${q} ${T}=${D}; ${T}<${H}; ${T}++)` + super.render(R);
      }
      get names() {
        const R = j(super.names, this.from);
        return j(R, this.to);
      }
    }
    class l extends v {
      constructor(R, q, T, D) {
        super(), this.loop = R, this.varKind = q, this.name = T, this.iterable = D;
      }
      render(R) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(R);
      }
      optimizeNames(R, q) {
        if (super.optimizeNames(R, q))
          return this.iterable = P(this.iterable, R, q), this;
      }
      get names() {
        return E(super.names, this.iterable.names);
      }
    }
    class h extends w {
      constructor(R, q, T) {
        super(), this.name = R, this.args = q, this.async = T;
      }
      render(R) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(R);
      }
    }
    h.kind = "func";
    class I extends f {
      render(R) {
        return "return " + super.render(R);
      }
    }
    I.kind = "return";
    class A extends w {
      render(R) {
        let q = "try" + super.render(R);
        return this.catch && (q += this.catch.render(R)), this.finally && (q += this.finally.render(R)), q;
      }
      optimizeNodes() {
        var R, q;
        return super.optimizeNodes(), (R = this.catch) === null || R === void 0 || R.optimizeNodes(), (q = this.finally) === null || q === void 0 || q.optimizeNodes(), this;
      }
      optimizeNames(R, q) {
        var T, D;
        return super.optimizeNames(R, q), (T = this.catch) === null || T === void 0 || T.optimizeNames(R, q), (D = this.finally) === null || D === void 0 || D.optimizeNames(R, q), this;
      }
      get names() {
        const R = super.names;
        return this.catch && E(R, this.catch.names), this.finally && E(R, this.finally.names), R;
      }
    }
    class $ extends w {
      constructor(R) {
        super(), this.error = R;
      }
      render(R) {
        return `catch(${this.error})` + super.render(R);
      }
    }
    $.kind = "catch";
    class C extends w {
      render(R) {
        return "finally" + super.render(R);
      }
    }
    C.kind = "finally";
    class M {
      constructor(R, q = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...q, _n: q.lines ? `
` : "" }, this._extScope = R, this._scope = new n.Scope({ parent: R }), this._nodes = [new x()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(R) {
        return this._scope.name(R);
      }
      // reserves unique name in the external scope
      scopeName(R) {
        return this._extScope.name(R);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(R, q) {
        const T = this._extScope.value(R, q);
        return (this._values[T.prefix] || (this._values[T.prefix] = /* @__PURE__ */ new Set())).add(T), T;
      }
      getScopeValue(R, q) {
        return this._extScope.getValue(R, q);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(R) {
        return this._extScope.scopeRefs(R, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(R, q, T, D) {
        const H = this._scope.toName(q);
        return T !== void 0 && D && (this._constants[H.str] = T), this._leafNode(new a(R, H, T)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(R, q, T) {
        return this._def(n.varKinds.const, R, q, T);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(R, q, T) {
        return this._def(n.varKinds.let, R, q, T);
      }
      // `var` declaration with optional assignment
      var(R, q, T) {
        return this._def(n.varKinds.var, R, q, T);
      }
      // assignment code
      assign(R, q, T) {
        return this._leafNode(new s(R, q, T));
      }
      // `+=` code
      add(R, q) {
        return this._leafNode(new o(R, e.operators.ADD, q));
      }
      // appends passed SafeExpr to code or executes Block
      code(R) {
        return typeof R == "function" ? R() : R !== t.nil && this._leafNode(new u(R)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...R) {
        const q = ["{"];
        for (const [T, D] of R)
          q.length > 1 && q.push(","), q.push(T), (T !== D || this.opts.es5) && (q.push(":"), (0, t.addCodeArg)(q, D));
        return q.push("}"), new t._Code(q);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(R, q, T) {
        if (this._blockNode(new S(R)), q && T)
          this.code(q).else().code(T).endIf();
        else if (q)
          this.code(q).endIf();
        else if (T)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(R) {
        return this._elseNode(new S(R));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new b());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(S, b);
      }
      _for(R, q) {
        return this._blockNode(R), q && this.code(q).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(R, q) {
        return this._for(new y(R), q);
      }
      // `for` statement for a range of values
      forRange(R, q, T, D, H = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Q = this._scope.toName(R);
        return this._for(new d(H, Q, q, T), () => D(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(R, q, T, D = n.varKinds.const) {
        const H = this._scope.toName(R);
        if (this.opts.es5) {
          const Q = q instanceof t.Name ? q : this.var("_arr", q);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (J) => {
            this.var(H, (0, t._)`${Q}[${J}]`), T(H);
          });
        }
        return this._for(new l("of", D, H, q), () => T(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(R, q, T, D = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(R, (0, t._)`Object.keys(${q})`, T);
        const H = this._scope.toName(R);
        return this._for(new l("in", D, H, q), () => T(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(v);
      }
      // `label` statement
      label(R) {
        return this._leafNode(new p(R));
      }
      // `break` statement
      break(R) {
        return this._leafNode(new m(R));
      }
      // `return` statement
      return(R) {
        const q = new I();
        if (this._blockNode(q), this.code(R), q.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(I);
      }
      // `try` statement
      try(R, q, T) {
        if (!q && !T)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const D = new A();
        if (this._blockNode(D), this.code(R), q) {
          const H = this.name("e");
          this._currNode = D.catch = new $(H), q(H);
        }
        return T && (this._currNode = D.finally = new C(), this.code(T)), this._endBlockNode($, C);
      }
      // `throw` statement
      throw(R) {
        return this._leafNode(new g(R));
      }
      // start self-balancing block
      block(R, q) {
        return this._blockStarts.push(this._nodes.length), R && this.code(R).endBlock(q), this;
      }
      // end the current self-balancing block
      endBlock(R) {
        const q = this._blockStarts.pop();
        if (q === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const T = this._nodes.length - q;
        if (T < 0 || R !== void 0 && T !== R)
          throw new Error(`CodeGen: wrong number of nodes: ${T} vs ${R} expected`);
        return this._nodes.length = q, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(R, q = t.nil, T, D) {
        return this._blockNode(new h(R, q, T)), D && this.code(D).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(h);
      }
      optimize(R = 1) {
        for (; R-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(R) {
        return this._currNode.nodes.push(R), this;
      }
      _blockNode(R) {
        this._currNode.nodes.push(R), this._nodes.push(R);
      }
      _endBlockNode(R, q) {
        const T = this._currNode;
        if (T instanceof R || q && T instanceof q)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${q ? `${R.kind}/${q.kind}` : R.kind}"`);
      }
      _elseNode(R) {
        const q = this._currNode;
        if (!(q instanceof S))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = q.else = R, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const R = this._nodes;
        return R[R.length - 1];
      }
      set _currNode(R) {
        const q = this._nodes;
        q[q.length - 1] = R;
      }
    }
    e.CodeGen = M;
    function E(N, R) {
      for (const q in R)
        N[q] = (N[q] || 0) + (R[q] || 0);
      return N;
    }
    function j(N, R) {
      return R instanceof t._CodeOrName ? E(N, R.names) : N;
    }
    function P(N, R, q) {
      if (N instanceof t.Name)
        return T(N);
      if (!D(N))
        return N;
      return new t._Code(N._items.reduce((H, Q) => (Q instanceof t.Name && (Q = T(Q)), Q instanceof t._Code ? H.push(...Q._items) : H.push(Q), H), []));
      function T(H) {
        const Q = q[H.str];
        return Q === void 0 || R[H.str] !== 1 ? H : (delete R[H.str], Q);
      }
      function D(H) {
        return H instanceof t._Code && H._items.some((Q) => Q instanceof t.Name && R[Q.str] === 1 && q[Q.str] !== void 0);
      }
    }
    function z(N, R) {
      for (const q in R)
        N[q] = (N[q] || 0) - (R[q] || 0);
    }
    function _(N) {
      return typeof N == "boolean" || typeof N == "number" || N === null ? !N : (0, t._)`!${V(N)}`;
    }
    e.not = _;
    const Z = O(e.operators.AND);
    function L(...N) {
      return N.reduce(Z);
    }
    e.and = L;
    const F = O(e.operators.OR);
    function k(...N) {
      return N.reduce(F);
    }
    e.or = k;
    function O(N) {
      return (R, q) => R === t.nil ? q : q === t.nil ? R : (0, t._)`${V(R)} ${N} ${V(q)}`;
    }
    function V(N) {
      return N instanceof t.Name ? N : (0, t._)`(${N})`;
    }
  })(hr)), hr;
}
var ne = {}, ha;
function ie() {
  if (ha) return ne;
  ha = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.checkStrictMode = ne.getErrorPath = ne.Type = ne.useFunc = ne.setEvaluated = ne.evaluatedPropsToName = ne.mergeEvaluated = ne.eachItem = ne.unescapeJsonPointer = ne.escapeJsonPointer = ne.escapeFragment = ne.unescapeFragment = ne.schemaRefOrVal = ne.schemaHasRulesButRef = ne.schemaHasRules = ne.checkUnknownRules = ne.alwaysValidSchema = ne.toHash = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Di();
  function n(l) {
    const h = {};
    for (const I of l)
      h[I] = !0;
    return h;
  }
  ne.toHash = n;
  function i(l, h) {
    return typeof h == "boolean" ? h : Object.keys(h).length === 0 ? !0 : (c(l, h), !r(h, l.self.RULES.all));
  }
  ne.alwaysValidSchema = i;
  function c(l, h = l.schema) {
    const { opts: I, self: A } = l;
    if (!I.strictSchema || typeof h == "boolean")
      return;
    const $ = A.RULES.keywords;
    for (const C in h)
      $[C] || d(l, `unknown keyword: "${C}"`);
  }
  ne.checkUnknownRules = c;
  function r(l, h) {
    if (typeof l == "boolean")
      return !l;
    for (const I in l)
      if (h[I])
        return !0;
    return !1;
  }
  ne.schemaHasRules = r;
  function a(l, h) {
    if (typeof l == "boolean")
      return !l;
    for (const I in l)
      if (I !== "$ref" && h.all[I])
        return !0;
    return !1;
  }
  ne.schemaHasRulesButRef = a;
  function s({ topSchemaRef: l, schemaPath: h }, I, A, $) {
    if (!$) {
      if (typeof I == "number" || typeof I == "boolean")
        return I;
      if (typeof I == "string")
        return (0, e._)`${I}`;
    }
    return (0, e._)`${l}${h}${(0, e.getProperty)(A)}`;
  }
  ne.schemaRefOrVal = s;
  function o(l) {
    return g(decodeURIComponent(l));
  }
  ne.unescapeFragment = o;
  function p(l) {
    return encodeURIComponent(m(l));
  }
  ne.escapeFragment = p;
  function m(l) {
    return typeof l == "number" ? `${l}` : l.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ne.escapeJsonPointer = m;
  function g(l) {
    return l.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ne.unescapeJsonPointer = g;
  function u(l, h) {
    if (Array.isArray(l))
      for (const I of l)
        h(I);
    else
      h(l);
  }
  ne.eachItem = u;
  function f({ mergeNames: l, mergeToName: h, mergeValues: I, resultToName: A }) {
    return ($, C, M, E) => {
      const j = M === void 0 ? C : M instanceof e.Name ? (C instanceof e.Name ? l($, C, M) : h($, C, M), M) : C instanceof e.Name ? (h($, M, C), C) : I(C, M);
      return E === e.Name && !(j instanceof e.Name) ? A($, j) : j;
    };
  }
  ne.mergeEvaluated = {
    props: f({
      mergeNames: (l, h, I) => l.if((0, e._)`${I} !== true && ${h} !== undefined`, () => {
        l.if((0, e._)`${h} === true`, () => l.assign(I, !0), () => l.assign(I, (0, e._)`${I} || {}`).code((0, e._)`Object.assign(${I}, ${h})`));
      }),
      mergeToName: (l, h, I) => l.if((0, e._)`${I} !== true`, () => {
        h === !0 ? l.assign(I, !0) : (l.assign(I, (0, e._)`${I} || {}`), x(l, I, h));
      }),
      mergeValues: (l, h) => l === !0 ? !0 : { ...l, ...h },
      resultToName: w
    }),
    items: f({
      mergeNames: (l, h, I) => l.if((0, e._)`${I} !== true && ${h} !== undefined`, () => l.assign(I, (0, e._)`${h} === true ? true : ${I} > ${h} ? ${I} : ${h}`)),
      mergeToName: (l, h, I) => l.if((0, e._)`${I} !== true`, () => l.assign(I, h === !0 ? !0 : (0, e._)`${I} > ${h} ? ${I} : ${h}`)),
      mergeValues: (l, h) => l === !0 ? !0 : Math.max(l, h),
      resultToName: (l, h) => l.var("items", h)
    })
  };
  function w(l, h) {
    if (h === !0)
      return l.var("props", !0);
    const I = l.var("props", (0, e._)`{}`);
    return h !== void 0 && x(l, I, h), I;
  }
  ne.evaluatedPropsToName = w;
  function x(l, h, I) {
    Object.keys(I).forEach((A) => l.assign((0, e._)`${h}${(0, e.getProperty)(A)}`, !0));
  }
  ne.setEvaluated = x;
  const b = {};
  function S(l, h) {
    return l.scopeValue("func", {
      ref: h,
      code: b[h.code] || (b[h.code] = new t._Code(h.code))
    });
  }
  ne.useFunc = S;
  var v;
  (function(l) {
    l[l.Num = 0] = "Num", l[l.Str = 1] = "Str";
  })(v || (ne.Type = v = {}));
  function y(l, h, I) {
    if (l instanceof e.Name) {
      const A = h === v.Num;
      return I ? A ? (0, e._)`"[" + ${l} + "]"` : (0, e._)`"['" + ${l} + "']"` : A ? (0, e._)`"/" + ${l}` : (0, e._)`"/" + ${l}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return I ? (0, e.getProperty)(l).toString() : "/" + m(l);
  }
  ne.getErrorPath = y;
  function d(l, h, I = l.opts.strictSchema) {
    if (I) {
      if (h = `strict mode: ${h}`, I === !0)
        throw new Error(h);
      l.self.logger.warn(h);
    }
  }
  return ne.checkStrictMode = d, ne;
}
var Tn = {}, ma;
function Xe() {
  if (ma) return Tn;
  ma = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
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
  return Tn.default = t, Tn;
}
var ya;
function Zi() {
  return ya || (ya = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ Xe();
    e.keywordError = {
      message: ({ keyword: b }) => (0, t.str)`must pass "${b}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: b, schemaType: S }) => S ? (0, t.str)`"${b}" keyword must be ${S} ($data)` : (0, t.str)`"${b}" keyword is invalid ($data)`
    };
    function c(b, S = e.keywordError, v, y) {
      const { it: d } = b, { gen: l, compositeRule: h, allErrors: I } = d, A = g(b, S, v);
      y ?? (h || I) ? o(l, A) : p(d, (0, t._)`[${A}]`);
    }
    e.reportError = c;
    function r(b, S = e.keywordError, v) {
      const { it: y } = b, { gen: d, compositeRule: l, allErrors: h } = y, I = g(b, S, v);
      o(d, I), l || h || p(y, i.default.vErrors);
    }
    e.reportExtraError = r;
    function a(b, S) {
      b.assign(i.default.errors, S), b.if((0, t._)`${i.default.vErrors} !== null`, () => b.if(S, () => b.assign((0, t._)`${i.default.vErrors}.length`, S), () => b.assign(i.default.vErrors, null)));
    }
    e.resetErrorsCount = a;
    function s({ gen: b, keyword: S, schemaValue: v, data: y, errsCount: d, it: l }) {
      if (d === void 0)
        throw new Error("ajv implementation error");
      const h = b.name("err");
      b.forRange("i", d, i.default.errors, (I) => {
        b.const(h, (0, t._)`${i.default.vErrors}[${I}]`), b.if((0, t._)`${h}.instancePath === undefined`, () => b.assign((0, t._)`${h}.instancePath`, (0, t.strConcat)(i.default.instancePath, l.errorPath))), b.assign((0, t._)`${h}.schemaPath`, (0, t.str)`${l.errSchemaPath}/${S}`), l.opts.verbose && (b.assign((0, t._)`${h}.schema`, v), b.assign((0, t._)`${h}.data`, y));
      });
    }
    e.extendErrors = s;
    function o(b, S) {
      const v = b.const("err", S);
      b.if((0, t._)`${i.default.vErrors} === null`, () => b.assign(i.default.vErrors, (0, t._)`[${v}]`), (0, t._)`${i.default.vErrors}.push(${v})`), b.code((0, t._)`${i.default.errors}++`);
    }
    function p(b, S) {
      const { gen: v, validateName: y, schemaEnv: d } = b;
      d.$async ? v.throw((0, t._)`new ${b.ValidationError}(${S})`) : (v.assign((0, t._)`${y}.errors`, S), v.return(!1));
    }
    const m = {
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
      return y === !1 ? (0, t._)`{}` : u(b, S, v);
    }
    function u(b, S, v = {}) {
      const { gen: y, it: d } = b, l = [
        f(d, v),
        w(b, v)
      ];
      return x(b, S, l), y.object(...l);
    }
    function f({ errorPath: b }, { instancePath: S }) {
      const v = S ? (0, t.str)`${b}${(0, n.getErrorPath)(S, n.Type.Str)}` : b;
      return [i.default.instancePath, (0, t.strConcat)(i.default.instancePath, v)];
    }
    function w({ keyword: b, it: { errSchemaPath: S } }, { schemaPath: v, parentSchema: y }) {
      let d = y ? S : (0, t.str)`${S}/${b}`;
      return v && (d = (0, t.str)`${d}${(0, n.getErrorPath)(v, n.Type.Str)}`), [m.schemaPath, d];
    }
    function x(b, { params: S, message: v }, y) {
      const { keyword: d, data: l, schemaValue: h, it: I } = b, { opts: A, propertyName: $, topSchemaRef: C, schemaPath: M } = I;
      y.push([m.keyword, d], [m.params, typeof S == "function" ? S(b) : S || (0, t._)`{}`]), A.messages && y.push([m.message, typeof v == "function" ? v(b) : v]), A.verbose && y.push([m.schema, h], [m.parentSchema, (0, t._)`${C}${M}`], [i.default.data, l]), $ && y.push([m.propertyName, $]);
    }
  })(fr)), fr;
}
var ga;
function zl() {
  if (ga) return Pt;
  ga = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.boolOrEmptySchema = Pt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Zi(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ Xe(), i = {
    message: "boolean schema is false"
  };
  function c(s) {
    const { gen: o, schema: p, validateName: m } = s;
    p === !1 ? a(s, !1) : typeof p == "object" && p.$async === !0 ? o.return(n.default.data) : (o.assign((0, t._)`${m}.errors`, null), o.return(!0));
  }
  Pt.topBoolOrEmptySchema = c;
  function r(s, o) {
    const { gen: p, schema: m } = s;
    m === !1 ? (p.var(o, !1), a(s)) : p.var(o, !0);
  }
  Pt.boolOrEmptySchema = r;
  function a(s, o) {
    const { gen: p, data: m } = s, g = {
      gen: p,
      keyword: "false schema",
      data: m,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: s
    };
    (0, e.reportError)(g, i, void 0, o);
  }
  return Pt;
}
var ge = {}, Tt = {}, va;
function Qc() {
  if (va) return Tt;
  va = 1, Object.defineProperty(Tt, "__esModule", { value: !0 }), Tt.getRules = Tt.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(c) {
    return typeof c == "string" && t.has(c);
  }
  Tt.isJSONType = n;
  function i() {
    const c = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...c, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, c.number, c.string, c.array, c.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return Tt.getRules = i, Tt;
}
var pt = {}, ba;
function Wc() {
  if (ba) return pt;
  ba = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.shouldUseRule = pt.shouldUseGroup = pt.schemaHasRulesForType = void 0;
  function e({ schema: i, self: c }, r) {
    const a = c.RULES.types[r];
    return a && a !== !0 && t(i, a);
  }
  pt.schemaHasRulesForType = e;
  function t(i, c) {
    return c.rules.some((r) => n(i, r));
  }
  pt.shouldUseGroup = t;
  function n(i, c) {
    var r;
    return i[c.keyword] !== void 0 || ((r = c.definition.implements) === null || r === void 0 ? void 0 : r.some((a) => i[a] !== void 0));
  }
  return pt.shouldUseRule = n, pt;
}
var wa;
function zi() {
  if (wa) return ge;
  wa = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.reportTypeError = ge.checkDataTypes = ge.checkDataType = ge.coerceAndCheckDataType = ge.getJSONTypes = ge.getSchemaTypes = ge.DataType = void 0;
  const e = /* @__PURE__ */ Qc(), t = /* @__PURE__ */ Wc(), n = /* @__PURE__ */ Zi(), i = /* @__PURE__ */ te(), c = /* @__PURE__ */ ie();
  var r;
  (function(v) {
    v[v.Correct = 0] = "Correct", v[v.Wrong = 1] = "Wrong";
  })(r || (ge.DataType = r = {}));
  function a(v) {
    const y = s(v.type);
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
  ge.getSchemaTypes = a;
  function s(v) {
    const y = Array.isArray(v) ? v : v ? [v] : [];
    if (y.every(e.isJSONType))
      return y;
    throw new Error("type must be JSONType or JSONType[]: " + y.join(","));
  }
  ge.getJSONTypes = s;
  function o(v, y) {
    const { gen: d, data: l, opts: h } = v, I = m(y, h.coerceTypes), A = y.length > 0 && !(I.length === 0 && y.length === 1 && (0, t.schemaHasRulesForType)(v, y[0]));
    if (A) {
      const $ = w(y, l, h.strictNumbers, r.Wrong);
      d.if($, () => {
        I.length ? g(v, y, I) : b(v);
      });
    }
    return A;
  }
  ge.coerceAndCheckDataType = o;
  const p = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function m(v, y) {
    return y ? v.filter((d) => p.has(d) || y === "array" && d === "array") : [];
  }
  function g(v, y, d) {
    const { gen: l, data: h, opts: I } = v, A = l.let("dataType", (0, i._)`typeof ${h}`), $ = l.let("coerced", (0, i._)`undefined`);
    I.coerceTypes === "array" && l.if((0, i._)`${A} == 'object' && Array.isArray(${h}) && ${h}.length == 1`, () => l.assign(h, (0, i._)`${h}[0]`).assign(A, (0, i._)`typeof ${h}`).if(w(y, h, I.strictNumbers), () => l.assign($, h))), l.if((0, i._)`${$} !== undefined`);
    for (const M of d)
      (p.has(M) || M === "array" && I.coerceTypes === "array") && C(M);
    l.else(), b(v), l.endIf(), l.if((0, i._)`${$} !== undefined`, () => {
      l.assign(h, $), u(v, $);
    });
    function C(M) {
      switch (M) {
        case "string":
          l.elseIf((0, i._)`${A} == "number" || ${A} == "boolean"`).assign($, (0, i._)`"" + ${h}`).elseIf((0, i._)`${h} === null`).assign($, (0, i._)`""`);
          return;
        case "number":
          l.elseIf((0, i._)`${A} == "boolean" || ${h} === null
              || (${A} == "string" && ${h} && ${h} == +${h})`).assign($, (0, i._)`+${h}`);
          return;
        case "integer":
          l.elseIf((0, i._)`${A} === "boolean" || ${h} === null
              || (${A} === "string" && ${h} && ${h} == +${h} && !(${h} % 1))`).assign($, (0, i._)`+${h}`);
          return;
        case "boolean":
          l.elseIf((0, i._)`${h} === "false" || ${h} === 0 || ${h} === null`).assign($, !1).elseIf((0, i._)`${h} === "true" || ${h} === 1`).assign($, !0);
          return;
        case "null":
          l.elseIf((0, i._)`${h} === "" || ${h} === 0 || ${h} === false`), l.assign($, null);
          return;
        case "array":
          l.elseIf((0, i._)`${A} === "string" || ${A} === "number"
              || ${A} === "boolean" || ${h} === null`).assign($, (0, i._)`[${h}]`);
      }
    }
  }
  function u({ gen: v, parentData: y, parentDataProperty: d }, l) {
    v.if((0, i._)`${y} !== undefined`, () => v.assign((0, i._)`${y}[${d}]`, l));
  }
  function f(v, y, d, l = r.Correct) {
    const h = l === r.Correct ? i.operators.EQ : i.operators.NEQ;
    let I;
    switch (v) {
      case "null":
        return (0, i._)`${y} ${h} null`;
      case "array":
        I = (0, i._)`Array.isArray(${y})`;
        break;
      case "object":
        I = (0, i._)`${y} && typeof ${y} == "object" && !Array.isArray(${y})`;
        break;
      case "integer":
        I = A((0, i._)`!(${y} % 1) && !isNaN(${y})`);
        break;
      case "number":
        I = A();
        break;
      default:
        return (0, i._)`typeof ${y} ${h} ${v}`;
    }
    return l === r.Correct ? I : (0, i.not)(I);
    function A($ = i.nil) {
      return (0, i.and)((0, i._)`typeof ${y} == "number"`, $, d ? (0, i._)`isFinite(${y})` : i.nil);
    }
  }
  ge.checkDataType = f;
  function w(v, y, d, l) {
    if (v.length === 1)
      return f(v[0], y, d, l);
    let h;
    const I = (0, c.toHash)(v);
    if (I.array && I.object) {
      const A = (0, i._)`typeof ${y} != "object"`;
      h = I.null ? A : (0, i._)`!${y} || ${A}`, delete I.null, delete I.array, delete I.object;
    } else
      h = i.nil;
    I.number && delete I.integer;
    for (const A in I)
      h = (0, i.and)(h, f(A, y, d, l));
    return h;
  }
  ge.checkDataTypes = w;
  const x = {
    message: ({ schema: v }) => `must be ${v}`,
    params: ({ schema: v, schemaValue: y }) => typeof v == "string" ? (0, i._)`{type: ${v}}` : (0, i._)`{type: ${y}}`
  };
  function b(v) {
    const y = S(v);
    (0, n.reportError)(y, x);
  }
  ge.reportTypeError = b;
  function S(v) {
    const { gen: y, data: d, schema: l } = v, h = (0, c.schemaRefOrVal)(v, l, "type");
    return {
      gen: y,
      keyword: "type",
      data: d,
      schema: l.type,
      schemaCode: h,
      schemaValue: h,
      parentSchema: l,
      params: {},
      it: v
    };
  }
  return ge;
}
var rn = {}, xa;
function Vl() {
  if (xa) return rn;
  xa = 1, Object.defineProperty(rn, "__esModule", { value: !0 }), rn.assignDefaults = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie();
  function n(c, r) {
    const { properties: a, items: s } = c.schema;
    if (r === "object" && a)
      for (const o in a)
        i(c, o, a[o].default);
    else r === "array" && Array.isArray(s) && s.forEach((o, p) => i(c, p, o.default));
  }
  rn.assignDefaults = n;
  function i(c, r, a) {
    const { gen: s, compositeRule: o, data: p, opts: m } = c;
    if (a === void 0)
      return;
    const g = (0, e._)`${p}${(0, e.getProperty)(r)}`;
    if (o) {
      (0, t.checkStrictMode)(c, `default is ignored for: ${g}`);
      return;
    }
    let u = (0, e._)`${g} === undefined`;
    m.useDefaults === "empty" && (u = (0, e._)`${u} || ${g} === null || ${g} === ""`), s.if(u, (0, e._)`${g} = ${(0, e.stringify)(a)}`);
  }
  return rn;
}
var Fe = {}, ae = {}, Sa;
function Ye() {
  if (Sa) return ae;
  Sa = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.validateUnion = ae.validateArray = ae.usePattern = ae.callValidateCode = ae.schemaProperties = ae.allSchemaProperties = ae.noPropertyInData = ae.propertyInData = ae.isOwnProperty = ae.hasPropFunc = ae.reportMissingProp = ae.checkMissingProp = ae.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Xe(), i = /* @__PURE__ */ ie();
  function c(v, y) {
    const { gen: d, data: l, it: h } = v;
    d.if(m(d, l, y, h.opts.ownProperties), () => {
      v.setParams({ missingProperty: (0, e._)`${y}` }, !0), v.error();
    });
  }
  ae.checkReportMissingProp = c;
  function r({ gen: v, data: y, it: { opts: d } }, l, h) {
    return (0, e.or)(...l.map((I) => (0, e.and)(m(v, y, I, d.ownProperties), (0, e._)`${h} = ${I}`)));
  }
  ae.checkMissingProp = r;
  function a(v, y) {
    v.setParams({ missingProperty: y }, !0), v.error();
  }
  ae.reportMissingProp = a;
  function s(v) {
    return v.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ae.hasPropFunc = s;
  function o(v, y, d) {
    return (0, e._)`${s(v)}.call(${y}, ${d})`;
  }
  ae.isOwnProperty = o;
  function p(v, y, d, l) {
    const h = (0, e._)`${y}${(0, e.getProperty)(d)} !== undefined`;
    return l ? (0, e._)`${h} && ${o(v, y, d)}` : h;
  }
  ae.propertyInData = p;
  function m(v, y, d, l) {
    const h = (0, e._)`${y}${(0, e.getProperty)(d)} === undefined`;
    return l ? (0, e.or)(h, (0, e.not)(o(v, y, d))) : h;
  }
  ae.noPropertyInData = m;
  function g(v) {
    return v ? Object.keys(v).filter((y) => y !== "__proto__") : [];
  }
  ae.allSchemaProperties = g;
  function u(v, y) {
    return g(y).filter((d) => !(0, t.alwaysValidSchema)(v, y[d]));
  }
  ae.schemaProperties = u;
  function f({ schemaCode: v, data: y, it: { gen: d, topSchemaRef: l, schemaPath: h, errorPath: I }, it: A }, $, C, M) {
    const E = M ? (0, e._)`${v}, ${y}, ${l}${h}` : y, j = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, I)],
      [n.default.parentData, A.parentData],
      [n.default.parentDataProperty, A.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    A.opts.dynamicRef && j.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const P = (0, e._)`${E}, ${d.object(...j)}`;
    return C !== e.nil ? (0, e._)`${$}.call(${C}, ${P})` : (0, e._)`${$}(${P})`;
  }
  ae.callValidateCode = f;
  const w = (0, e._)`new RegExp`;
  function x({ gen: v, it: { opts: y } }, d) {
    const l = y.unicodeRegExp ? "u" : "", { regExp: h } = y.code, I = h(d, l);
    return v.scopeValue("pattern", {
      key: I.toString(),
      ref: I,
      code: (0, e._)`${h.code === "new RegExp" ? w : (0, i.useFunc)(v, h)}(${d}, ${l})`
    });
  }
  ae.usePattern = x;
  function b(v) {
    const { gen: y, data: d, keyword: l, it: h } = v, I = y.name("valid");
    if (h.allErrors) {
      const $ = y.let("valid", !0);
      return A(() => y.assign($, !1)), $;
    }
    return y.var(I, !0), A(() => y.break()), I;
    function A($) {
      const C = y.const("len", (0, e._)`${d}.length`);
      y.forRange("i", 0, C, (M) => {
        v.subschema({
          keyword: l,
          dataProp: M,
          dataPropType: t.Type.Num
        }, I), y.if((0, e.not)(I), $);
      });
    }
  }
  ae.validateArray = b;
  function S(v) {
    const { gen: y, schema: d, keyword: l, it: h } = v;
    if (!Array.isArray(d))
      throw new Error("ajv implementation error");
    if (d.some((C) => (0, t.alwaysValidSchema)(h, C)) && !h.opts.unevaluated)
      return;
    const A = y.let("valid", !1), $ = y.name("_valid");
    y.block(() => d.forEach((C, M) => {
      const E = v.subschema({
        keyword: l,
        schemaProp: M,
        compositeRule: !0
      }, $);
      y.assign(A, (0, e._)`${A} || ${$}`), v.mergeValidEvaluated(E, $) || y.if((0, e.not)(A));
    })), v.result(A, () => v.reset(), () => v.error(!0));
  }
  return ae.validateUnion = S, ae;
}
var Ia;
function Ul() {
  if (Ia) return Fe;
  Ia = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.validateKeywordUsage = Fe.validSchemaType = Fe.funcKeywordCode = Fe.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Xe(), n = /* @__PURE__ */ Ye(), i = /* @__PURE__ */ Zi();
  function c(u, f) {
    const { gen: w, keyword: x, schema: b, parentSchema: S, it: v } = u, y = f.macro.call(v.self, b, S, v), d = p(w, x, y);
    v.opts.validateSchema !== !1 && v.self.validateSchema(y, !0);
    const l = w.name("valid");
    u.subschema({
      schema: y,
      schemaPath: e.nil,
      errSchemaPath: `${v.errSchemaPath}/${x}`,
      topSchemaRef: d,
      compositeRule: !0
    }, l), u.pass(l, () => u.error(!0));
  }
  Fe.macroKeywordCode = c;
  function r(u, f) {
    var w;
    const { gen: x, keyword: b, schema: S, parentSchema: v, $data: y, it: d } = u;
    o(d, f);
    const l = !y && f.compile ? f.compile.call(d.self, S, v, d) : f.validate, h = p(x, b, l), I = x.let("valid");
    u.block$data(I, A), u.ok((w = f.valid) !== null && w !== void 0 ? w : I);
    function A() {
      if (f.errors === !1)
        M(), f.modifying && a(u), E(() => u.error());
      else {
        const j = f.async ? $() : C();
        f.modifying && a(u), E(() => s(u, j));
      }
    }
    function $() {
      const j = x.let("ruleErrs", null);
      return x.try(() => M((0, e._)`await `), (P) => x.assign(I, !1).if((0, e._)`${P} instanceof ${d.ValidationError}`, () => x.assign(j, (0, e._)`${P}.errors`), () => x.throw(P))), j;
    }
    function C() {
      const j = (0, e._)`${h}.errors`;
      return x.assign(j, null), M(e.nil), j;
    }
    function M(j = f.async ? (0, e._)`await ` : e.nil) {
      const P = d.opts.passContext ? t.default.this : t.default.self, z = !("compile" in f && !y || f.schema === !1);
      x.assign(I, (0, e._)`${j}${(0, n.callValidateCode)(u, h, P, z)}`, f.modifying);
    }
    function E(j) {
      var P;
      x.if((0, e.not)((P = f.valid) !== null && P !== void 0 ? P : I), j);
    }
  }
  Fe.funcKeywordCode = r;
  function a(u) {
    const { gen: f, data: w, it: x } = u;
    f.if(x.parentData, () => f.assign(w, (0, e._)`${x.parentData}[${x.parentDataProperty}]`));
  }
  function s(u, f) {
    const { gen: w } = u;
    w.if((0, e._)`Array.isArray(${f})`, () => {
      w.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${f} : ${t.default.vErrors}.concat(${f})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, i.extendErrors)(u);
    }, () => u.error());
  }
  function o({ schemaEnv: u }, f) {
    if (f.async && !u.$async)
      throw new Error("async keyword in sync schema");
  }
  function p(u, f, w) {
    if (w === void 0)
      throw new Error(`keyword "${f}" failed to compile`);
    return u.scopeValue("keyword", typeof w == "function" ? { ref: w } : { ref: w, code: (0, e.stringify)(w) });
  }
  function m(u, f, w = !1) {
    return !f.length || f.some((x) => x === "array" ? Array.isArray(u) : x === "object" ? u && typeof u == "object" && !Array.isArray(u) : typeof u == x || w && typeof u > "u");
  }
  Fe.validSchemaType = m;
  function g({ schema: u, opts: f, self: w, errSchemaPath: x }, b, S) {
    if (Array.isArray(b.keyword) ? !b.keyword.includes(S) : b.keyword !== S)
      throw new Error("ajv implementation error");
    const v = b.dependencies;
    if (v?.some((y) => !Object.prototype.hasOwnProperty.call(u, y)))
      throw new Error(`parent schema must have dependencies of ${S}: ${v.join(",")}`);
    if (b.validateSchema && !b.validateSchema(u[S])) {
      const d = `keyword "${S}" value is invalid at path "${x}": ` + w.errorsText(b.validateSchema.errors);
      if (f.validateSchema === "log")
        w.logger.error(d);
      else
        throw new Error(d);
    }
  }
  return Fe.validateKeywordUsage = g, Fe;
}
var ft = {}, Aa;
function Gl() {
  if (Aa) return ft;
  Aa = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.extendSubschemaMode = ft.extendSubschemaData = ft.getSubschema = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie();
  function n(r, { keyword: a, schemaProp: s, schema: o, schemaPath: p, errSchemaPath: m, topSchemaRef: g }) {
    if (a !== void 0 && o !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (a !== void 0) {
      const u = r.schema[a];
      return s === void 0 ? {
        schema: u,
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${r.errSchemaPath}/${a}`
      } : {
        schema: u[s],
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(a)}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${r.errSchemaPath}/${a}/${(0, t.escapeFragment)(s)}`
      };
    }
    if (o !== void 0) {
      if (p === void 0 || m === void 0 || g === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: o,
        schemaPath: p,
        topSchemaRef: g,
        errSchemaPath: m
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  ft.getSubschema = n;
  function i(r, a, { dataProp: s, dataPropType: o, data: p, dataTypes: m, propertyName: g }) {
    if (p !== void 0 && s !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: u } = a;
    if (s !== void 0) {
      const { errorPath: w, dataPathArr: x, opts: b } = a, S = u.let("data", (0, e._)`${a.data}${(0, e.getProperty)(s)}`, !0);
      f(S), r.errorPath = (0, e.str)`${w}${(0, t.getErrorPath)(s, o, b.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${s}`, r.dataPathArr = [...x, r.parentDataProperty];
    }
    if (p !== void 0) {
      const w = p instanceof e.Name ? p : u.let("data", p, !0);
      f(w), g !== void 0 && (r.propertyName = g);
    }
    m && (r.dataTypes = m);
    function f(w) {
      r.data = w, r.dataLevel = a.dataLevel + 1, r.dataTypes = [], a.definedProperties = /* @__PURE__ */ new Set(), r.parentData = a.data, r.dataNames = [...a.dataNames, w];
    }
  }
  ft.extendSubschemaData = i;
  function c(r, { jtdDiscriminator: a, jtdMetadata: s, compositeRule: o, createErrors: p, allErrors: m }) {
    o !== void 0 && (r.compositeRule = o), p !== void 0 && (r.createErrors = p), m !== void 0 && (r.allErrors = m), r.jtdDiscriminator = a, r.jtdMetadata = s;
  }
  return ft.extendSubschemaMode = c, ft;
}
var Ie = {}, gr, qa;
function Xc() {
  return qa || (qa = 1, gr = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var i, c, r;
      if (Array.isArray(t)) {
        if (i = t.length, i != n.length) return !1;
        for (c = i; c-- !== 0; )
          if (!e(t[c], n[c])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (r = Object.keys(t), i = r.length, i !== Object.keys(n).length) return !1;
      for (c = i; c-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, r[c])) return !1;
      for (c = i; c-- !== 0; ) {
        var a = r[c];
        if (!e(t[a], n[a])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), gr;
}
var vr = { exports: {} }, Ra;
function Fl() {
  if (Ra) return vr.exports;
  Ra = 1;
  var e = vr.exports = function(i, c, r) {
    typeof c == "function" && (r = c, c = {}), r = c.cb || r;
    var a = typeof r == "function" ? r : r.pre || function() {
    }, s = r.post || function() {
    };
    t(c, a, s, i, "", i);
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
  function t(i, c, r, a, s, o, p, m, g, u) {
    if (a && typeof a == "object" && !Array.isArray(a)) {
      c(a, s, o, p, m, g, u);
      for (var f in a) {
        var w = a[f];
        if (Array.isArray(w)) {
          if (f in e.arrayKeywords)
            for (var x = 0; x < w.length; x++)
              t(i, c, r, w[x], s + "/" + f + "/" + x, o, s, f, a, x);
        } else if (f in e.propsKeywords) {
          if (w && typeof w == "object")
            for (var b in w)
              t(i, c, r, w[b], s + "/" + f + "/" + n(b), o, s, f, a, b);
        } else (f in e.keywords || i.allKeys && !(f in e.skipKeywords)) && t(i, c, r, w, s + "/" + f, o, s, f, a);
      }
      r(a, s, o, p, m, g, u);
    }
  }
  function n(i) {
    return i.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return vr.exports;
}
var ja;
function Hi() {
  if (ja) return Ie;
  ja = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.getSchemaRefs = Ie.resolveUrl = Ie.normalizeId = Ie._getFullPath = Ie.getFullPath = Ie.inlineRef = void 0;
  const e = /* @__PURE__ */ ie(), t = Xc(), n = Fl(), i = /* @__PURE__ */ new Set([
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
  function c(x, b = !0) {
    return typeof x == "boolean" ? !0 : b === !0 ? !a(x) : b ? s(x) <= b : !1;
  }
  Ie.inlineRef = c;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function a(x) {
    for (const b in x) {
      if (r.has(b))
        return !0;
      const S = x[b];
      if (Array.isArray(S) && S.some(a) || typeof S == "object" && a(S))
        return !0;
    }
    return !1;
  }
  function s(x) {
    let b = 0;
    for (const S in x) {
      if (S === "$ref")
        return 1 / 0;
      if (b++, !i.has(S) && (typeof x[S] == "object" && (0, e.eachItem)(x[S], (v) => b += s(v)), b === 1 / 0))
        return 1 / 0;
    }
    return b;
  }
  function o(x, b = "", S) {
    S !== !1 && (b = g(b));
    const v = x.parse(b);
    return p(x, v);
  }
  Ie.getFullPath = o;
  function p(x, b) {
    return x.serialize(b).split("#")[0] + "#";
  }
  Ie._getFullPath = p;
  const m = /#\/?$/;
  function g(x) {
    return x ? x.replace(m, "") : "";
  }
  Ie.normalizeId = g;
  function u(x, b, S) {
    return S = g(S), x.resolve(b, S);
  }
  Ie.resolveUrl = u;
  const f = /^[a-z_][-a-z0-9._]*$/i;
  function w(x, b) {
    if (typeof x == "boolean")
      return {};
    const { schemaId: S, uriResolver: v } = this.opts, y = g(x[S] || b), d = { "": y }, l = o(v, y, !1), h = {}, I = /* @__PURE__ */ new Set();
    return n(x, { allKeys: !0 }, (C, M, E, j) => {
      if (j === void 0)
        return;
      const P = l + M;
      let z = d[j];
      typeof C[S] == "string" && (z = _.call(this, C[S])), Z.call(this, C.$anchor), Z.call(this, C.$dynamicAnchor), d[M] = z;
      function _(L) {
        const F = this.opts.uriResolver.resolve;
        if (L = g(z ? F(z, L) : L), I.has(L))
          throw $(L);
        I.add(L);
        let k = this.refs[L];
        return typeof k == "string" && (k = this.refs[k]), typeof k == "object" ? A(C, k.schema, L) : L !== g(P) && (L[0] === "#" ? (A(C, h[L], L), h[L] = C) : this.refs[L] = P), L;
      }
      function Z(L) {
        if (typeof L == "string") {
          if (!f.test(L))
            throw new Error(`invalid anchor "${L}"`);
          _.call(this, `#${L}`);
        }
      }
    }), h;
    function A(C, M, E) {
      if (M !== void 0 && !t(C, M))
        throw $(E);
    }
    function $(C) {
      return new Error(`reference "${C}" resolves to more than one schema`);
    }
  }
  return Ie.getSchemaRefs = w, Ie;
}
var $a;
function wn() {
  if ($a) return ut;
  $a = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.getData = ut.KeywordCxt = ut.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ zl(), t = /* @__PURE__ */ zi(), n = /* @__PURE__ */ Wc(), i = /* @__PURE__ */ zi(), c = /* @__PURE__ */ Vl(), r = /* @__PURE__ */ Ul(), a = /* @__PURE__ */ Gl(), s = /* @__PURE__ */ te(), o = /* @__PURE__ */ Xe(), p = /* @__PURE__ */ Hi(), m = /* @__PURE__ */ ie(), g = /* @__PURE__ */ Zi();
  function u(U) {
    if (l(U) && (I(U), d(U))) {
      b(U);
      return;
    }
    f(U, () => (0, e.topBoolOrEmptySchema)(U));
  }
  ut.validateFunctionCode = u;
  function f({ gen: U, validateName: G, schema: B, schemaEnv: K, opts: W }, ee) {
    W.code.es5 ? U.func(G, (0, s._)`${o.default.data}, ${o.default.valCxt}`, K.$async, () => {
      U.code((0, s._)`"use strict"; ${v(B, W)}`), x(U, W), U.code(ee);
    }) : U.func(G, (0, s._)`${o.default.data}, ${w(W)}`, K.$async, () => U.code(v(B, W)).code(ee));
  }
  function w(U) {
    return (0, s._)`{${o.default.instancePath}="", ${o.default.parentData}, ${o.default.parentDataProperty}, ${o.default.rootData}=${o.default.data}${U.dynamicRef ? (0, s._)`, ${o.default.dynamicAnchors}={}` : s.nil}}={}`;
  }
  function x(U, G) {
    U.if(o.default.valCxt, () => {
      U.var(o.default.instancePath, (0, s._)`${o.default.valCxt}.${o.default.instancePath}`), U.var(o.default.parentData, (0, s._)`${o.default.valCxt}.${o.default.parentData}`), U.var(o.default.parentDataProperty, (0, s._)`${o.default.valCxt}.${o.default.parentDataProperty}`), U.var(o.default.rootData, (0, s._)`${o.default.valCxt}.${o.default.rootData}`), G.dynamicRef && U.var(o.default.dynamicAnchors, (0, s._)`${o.default.valCxt}.${o.default.dynamicAnchors}`);
    }, () => {
      U.var(o.default.instancePath, (0, s._)`""`), U.var(o.default.parentData, (0, s._)`undefined`), U.var(o.default.parentDataProperty, (0, s._)`undefined`), U.var(o.default.rootData, o.default.data), G.dynamicRef && U.var(o.default.dynamicAnchors, (0, s._)`{}`);
    });
  }
  function b(U) {
    const { schema: G, opts: B, gen: K } = U;
    f(U, () => {
      B.$comment && G.$comment && j(U), C(U), K.let(o.default.vErrors, null), K.let(o.default.errors, 0), B.unevaluated && S(U), A(U), P(U);
    });
  }
  function S(U) {
    const { gen: G, validateName: B } = U;
    U.evaluated = G.const("evaluated", (0, s._)`${B}.evaluated`), G.if((0, s._)`${U.evaluated}.dynamicProps`, () => G.assign((0, s._)`${U.evaluated}.props`, (0, s._)`undefined`)), G.if((0, s._)`${U.evaluated}.dynamicItems`, () => G.assign((0, s._)`${U.evaluated}.items`, (0, s._)`undefined`));
  }
  function v(U, G) {
    const B = typeof U == "object" && U[G.schemaId];
    return B && (G.code.source || G.code.process) ? (0, s._)`/*# sourceURL=${B} */` : s.nil;
  }
  function y(U, G) {
    if (l(U) && (I(U), d(U))) {
      h(U, G);
      return;
    }
    (0, e.boolOrEmptySchema)(U, G);
  }
  function d({ schema: U, self: G }) {
    if (typeof U == "boolean")
      return !U;
    for (const B in U)
      if (G.RULES.all[B])
        return !0;
    return !1;
  }
  function l(U) {
    return typeof U.schema != "boolean";
  }
  function h(U, G) {
    const { schema: B, gen: K, opts: W } = U;
    W.$comment && B.$comment && j(U), M(U), E(U);
    const ee = K.const("_errs", o.default.errors);
    A(U, ee), K.var(G, (0, s._)`${ee} === ${o.default.errors}`);
  }
  function I(U) {
    (0, m.checkUnknownRules)(U), $(U);
  }
  function A(U, G) {
    if (U.opts.jtd)
      return _(U, [], !1, G);
    const B = (0, t.getSchemaTypes)(U.schema), K = (0, t.coerceAndCheckDataType)(U, B);
    _(U, B, !K, G);
  }
  function $(U) {
    const { schema: G, errSchemaPath: B, opts: K, self: W } = U;
    G.$ref && K.ignoreKeywordsWithRef && (0, m.schemaHasRulesButRef)(G, W.RULES) && W.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function C(U) {
    const { schema: G, opts: B } = U;
    G.default !== void 0 && B.useDefaults && B.strictSchema && (0, m.checkStrictMode)(U, "default is ignored in the schema root");
  }
  function M(U) {
    const G = U.schema[U.opts.schemaId];
    G && (U.baseId = (0, p.resolveUrl)(U.opts.uriResolver, U.baseId, G));
  }
  function E(U) {
    if (U.schema.$async && !U.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function j({ gen: U, schemaEnv: G, schema: B, errSchemaPath: K, opts: W }) {
    const ee = B.$comment;
    if (W.$comment === !0)
      U.code((0, s._)`${o.default.self}.logger.log(${ee})`);
    else if (typeof W.$comment == "function") {
      const re = (0, s.str)`${K}/$comment`, be = U.scopeValue("root", { ref: G.root });
      U.code((0, s._)`${o.default.self}.opts.$comment(${ee}, ${re}, ${be}.schema)`);
    }
  }
  function P(U) {
    const { gen: G, schemaEnv: B, validateName: K, ValidationError: W, opts: ee } = U;
    B.$async ? G.if((0, s._)`${o.default.errors} === 0`, () => G.return(o.default.data), () => G.throw((0, s._)`new ${W}(${o.default.vErrors})`)) : (G.assign((0, s._)`${K}.errors`, o.default.vErrors), ee.unevaluated && z(U), G.return((0, s._)`${o.default.errors} === 0`));
  }
  function z({ gen: U, evaluated: G, props: B, items: K }) {
    B instanceof s.Name && U.assign((0, s._)`${G}.props`, B), K instanceof s.Name && U.assign((0, s._)`${G}.items`, K);
  }
  function _(U, G, B, K) {
    const { gen: W, schema: ee, data: re, allErrors: be, opts: fe, self: me } = U, { RULES: pe } = me;
    if (ee.$ref && (fe.ignoreKeywordsWithRef || !(0, m.schemaHasRulesButRef)(ee, pe))) {
      W.block(() => D(U, "$ref", pe.all.$ref.definition));
      return;
    }
    fe.jtd || L(U, G), W.block(() => {
      for (const ke of pe.rules)
        et(ke);
      et(pe.post);
    });
    function et(ke) {
      (0, n.shouldUseGroup)(ee, ke) && (ke.type ? (W.if((0, i.checkDataType)(ke.type, re, fe.strictNumbers)), Z(U, ke), G.length === 1 && G[0] === ke.type && B && (W.else(), (0, i.reportTypeError)(U)), W.endIf()) : Z(U, ke), be || W.if((0, s._)`${o.default.errors} === ${K || 0}`));
    }
  }
  function Z(U, G) {
    const { gen: B, schema: K, opts: { useDefaults: W } } = U;
    W && (0, c.assignDefaults)(U, G.type), B.block(() => {
      for (const ee of G.rules)
        (0, n.shouldUseRule)(K, ee) && D(U, ee.keyword, ee.definition, G.type);
    });
  }
  function L(U, G) {
    U.schemaEnv.meta || !U.opts.strictTypes || (F(U, G), U.opts.allowUnionTypes || k(U, G), O(U, U.dataTypes));
  }
  function F(U, G) {
    if (G.length) {
      if (!U.dataTypes.length) {
        U.dataTypes = G;
        return;
      }
      G.forEach((B) => {
        N(U.dataTypes, B) || q(U, `type "${B}" not allowed by context "${U.dataTypes.join(",")}"`);
      }), R(U, G);
    }
  }
  function k(U, G) {
    G.length > 1 && !(G.length === 2 && G.includes("null")) && q(U, "use allowUnionTypes to allow union type keyword");
  }
  function O(U, G) {
    const B = U.self.RULES.all;
    for (const K in B) {
      const W = B[K];
      if (typeof W == "object" && (0, n.shouldUseRule)(U.schema, W)) {
        const { type: ee } = W.definition;
        ee.length && !ee.some((re) => V(G, re)) && q(U, `missing type "${ee.join(",")}" for keyword "${K}"`);
      }
    }
  }
  function V(U, G) {
    return U.includes(G) || G === "number" && U.includes("integer");
  }
  function N(U, G) {
    return U.includes(G) || G === "integer" && U.includes("number");
  }
  function R(U, G) {
    const B = [];
    for (const K of U.dataTypes)
      N(G, K) ? B.push(K) : G.includes("integer") && K === "number" && B.push("integer");
    U.dataTypes = B;
  }
  function q(U, G) {
    const B = U.schemaEnv.baseId + U.errSchemaPath;
    G += ` at "${B}" (strictTypes)`, (0, m.checkStrictMode)(U, G, U.opts.strictTypes);
  }
  class T {
    constructor(G, B, K) {
      if ((0, r.validateKeywordUsage)(G, B, K), this.gen = G.gen, this.allErrors = G.allErrors, this.keyword = K, this.data = G.data, this.schema = G.schema[K], this.$data = B.$data && G.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, m.schemaRefOrVal)(G, this.schema, K, this.$data), this.schemaType = B.schemaType, this.parentSchema = G.schema, this.params = {}, this.it = G, this.def = B, this.$data)
        this.schemaCode = G.gen.const("vSchema", J(this.$data, G));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, B.schemaType, B.allowUndefined))
        throw new Error(`${K} value must be ${JSON.stringify(B.schemaType)}`);
      ("code" in B ? B.trackErrors : B.errors !== !1) && (this.errsCount = G.gen.const("_errs", o.default.errors));
    }
    result(G, B, K) {
      this.failResult((0, s.not)(G), B, K);
    }
    failResult(G, B, K) {
      this.gen.if(G), K ? K() : this.error(), B ? (this.gen.else(), B(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(G, B) {
      this.failResult((0, s.not)(G), void 0, B);
    }
    fail(G) {
      if (G === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(G), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(G) {
      if (!this.$data)
        return this.fail(G);
      const { schemaCode: B } = this;
      this.fail((0, s._)`${B} !== undefined && (${(0, s.or)(this.invalid$data(), G)})`);
    }
    error(G, B, K) {
      if (B) {
        this.setParams(B), this._error(G, K), this.setParams({});
        return;
      }
      this._error(G, K);
    }
    _error(G, B) {
      (G ? g.reportExtraError : g.reportError)(this, this.def.error, B);
    }
    $dataError() {
      (0, g.reportError)(this, this.def.$dataError || g.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, g.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(G) {
      this.allErrors || this.gen.if(G);
    }
    setParams(G, B) {
      B ? Object.assign(this.params, G) : this.params = G;
    }
    block$data(G, B, K = s.nil) {
      this.gen.block(() => {
        this.check$data(G, K), B();
      });
    }
    check$data(G = s.nil, B = s.nil) {
      if (!this.$data)
        return;
      const { gen: K, schemaCode: W, schemaType: ee, def: re } = this;
      K.if((0, s.or)((0, s._)`${W} === undefined`, B)), G !== s.nil && K.assign(G, !0), (ee.length || re.validateSchema) && (K.elseIf(this.invalid$data()), this.$dataError(), G !== s.nil && K.assign(G, !1)), K.else();
    }
    invalid$data() {
      const { gen: G, schemaCode: B, schemaType: K, def: W, it: ee } = this;
      return (0, s.or)(re(), be());
      function re() {
        if (K.length) {
          if (!(B instanceof s.Name))
            throw new Error("ajv implementation error");
          const fe = Array.isArray(K) ? K : [K];
          return (0, s._)`${(0, i.checkDataTypes)(fe, B, ee.opts.strictNumbers, i.DataType.Wrong)}`;
        }
        return s.nil;
      }
      function be() {
        if (W.validateSchema) {
          const fe = G.scopeValue("validate$data", { ref: W.validateSchema });
          return (0, s._)`!${fe}(${B})`;
        }
        return s.nil;
      }
    }
    subschema(G, B) {
      const K = (0, a.getSubschema)(this.it, G);
      (0, a.extendSubschemaData)(K, this.it, G), (0, a.extendSubschemaMode)(K, G);
      const W = { ...this.it, ...K, items: void 0, props: void 0 };
      return y(W, B), W;
    }
    mergeEvaluated(G, B) {
      const { it: K, gen: W } = this;
      K.opts.unevaluated && (K.props !== !0 && G.props !== void 0 && (K.props = m.mergeEvaluated.props(W, G.props, K.props, B)), K.items !== !0 && G.items !== void 0 && (K.items = m.mergeEvaluated.items(W, G.items, K.items, B)));
    }
    mergeValidEvaluated(G, B) {
      const { it: K, gen: W } = this;
      if (K.opts.unevaluated && (K.props !== !0 || K.items !== !0))
        return W.if(B, () => this.mergeEvaluated(G, s.Name)), !0;
    }
  }
  ut.KeywordCxt = T;
  function D(U, G, B, K) {
    const W = new T(U, B, G);
    "code" in B ? B.code(W, K) : W.$data && B.validate ? (0, r.funcKeywordCode)(W, B) : "macro" in B ? (0, r.macroKeywordCode)(W, B) : (B.compile || B.validate) && (0, r.funcKeywordCode)(W, B);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function J(U, { dataLevel: G, dataNames: B, dataPathArr: K }) {
    let W, ee;
    if (U === "")
      return o.default.rootData;
    if (U[0] === "/") {
      if (!H.test(U))
        throw new Error(`Invalid JSON-pointer: ${U}`);
      W = U, ee = o.default.rootData;
    } else {
      const me = Q.exec(U);
      if (!me)
        throw new Error(`Invalid JSON-pointer: ${U}`);
      const pe = +me[1];
      if (W = me[2], W === "#") {
        if (pe >= G)
          throw new Error(fe("property/index", pe));
        return K[G - pe];
      }
      if (pe > G)
        throw new Error(fe("data", pe));
      if (ee = B[G - pe], !W)
        return ee;
    }
    let re = ee;
    const be = W.split("/");
    for (const me of be)
      me && (ee = (0, s._)`${ee}${(0, s.getProperty)((0, m.unescapeJsonPointer)(me))}`, re = (0, s._)`${re} && ${ee}`);
    return re;
    function fe(me, pe) {
      return `Cannot access ${me} ${pe} levels up, current level is ${G}`;
    }
  }
  return ut.getData = J, ut;
}
var Cn = {}, _a;
function Ji() {
  if (_a) return Cn;
  _a = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Cn.default = e, Cn;
}
var En = {}, Pa;
function xn() {
  if (Pa) return En;
  Pa = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hi();
  class t extends Error {
    constructor(i, c, r, a) {
      super(a || `can't resolve reference ${r} from id ${c}`), this.missingRef = (0, e.resolveUrl)(i, c, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(i, this.missingRef));
    }
  }
  return En.default = t, En;
}
var _e = {}, Ta;
function Ki() {
  if (Ta) return _e;
  Ta = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.resolveSchema = _e.getCompilingSchema = _e.resolveRef = _e.compileSchema = _e.SchemaEnv = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Ji(), n = /* @__PURE__ */ Xe(), i = /* @__PURE__ */ Hi(), c = /* @__PURE__ */ ie(), r = /* @__PURE__ */ wn();
  class a {
    constructor(S) {
      var v;
      this.refs = {}, this.dynamicAnchors = {};
      let y;
      typeof S.schema == "object" && (y = S.schema), this.schema = S.schema, this.schemaId = S.schemaId, this.root = S.root || this, this.baseId = (v = S.baseId) !== null && v !== void 0 ? v : (0, i.normalizeId)(y?.[S.schemaId || "$id"]), this.schemaPath = S.schemaPath, this.localRefs = S.localRefs, this.meta = S.meta, this.$async = y?.$async, this.refs = {};
    }
  }
  _e.SchemaEnv = a;
  function s(b) {
    const S = m.call(this, b);
    if (S)
      return S;
    const v = (0, i.getFullPath)(this.opts.uriResolver, b.root.baseId), { es5: y, lines: d } = this.opts.code, { ownProperties: l } = this.opts, h = new e.CodeGen(this.scope, { es5: y, lines: d, ownProperties: l });
    let I;
    b.$async && (I = h.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const A = h.scopeName("validate");
    b.validateName = A;
    const $ = {
      gen: h,
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
      topSchemaRef: h.scopeValue("schema", this.opts.code.source === !0 ? { ref: b.schema, code: (0, e.stringify)(b.schema) } : { ref: b.schema }),
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
    let C;
    try {
      this._compilations.add(b), (0, r.validateFunctionCode)($), h.optimize(this.opts.code.optimize);
      const M = h.toString();
      C = `${h.scopeRefs(n.default.scope)}return ${M}`, this.opts.code.process && (C = this.opts.code.process(C, b));
      const j = new Function(`${n.default.self}`, `${n.default.scope}`, C)(this, this.scope.get());
      if (this.scope.value(A, { ref: j }), j.errors = null, j.schema = b.schema, j.schemaEnv = b, b.$async && (j.$async = !0), this.opts.code.source === !0 && (j.source = { validateName: A, validateCode: M, scopeValues: h._values }), this.opts.unevaluated) {
        const { props: P, items: z } = $;
        j.evaluated = {
          props: P instanceof e.Name ? void 0 : P,
          items: z instanceof e.Name ? void 0 : z,
          dynamicProps: P instanceof e.Name,
          dynamicItems: z instanceof e.Name
        }, j.source && (j.source.evaluated = (0, e.stringify)(j.evaluated));
      }
      return b.validate = j, b;
    } catch (M) {
      throw delete b.validate, delete b.validateName, C && this.logger.error("Error compiling schema, function code:", C), M;
    } finally {
      this._compilations.delete(b);
    }
  }
  _e.compileSchema = s;
  function o(b, S, v) {
    var y;
    v = (0, i.resolveUrl)(this.opts.uriResolver, S, v);
    const d = b.refs[v];
    if (d)
      return d;
    let l = u.call(this, b, v);
    if (l === void 0) {
      const h = (y = b.localRefs) === null || y === void 0 ? void 0 : y[v], { schemaId: I } = this.opts;
      h && (l = new a({ schema: h, schemaId: I, root: b, baseId: S }));
    }
    if (l !== void 0)
      return b.refs[v] = p.call(this, l);
  }
  _e.resolveRef = o;
  function p(b) {
    return (0, i.inlineRef)(b.schema, this.opts.inlineRefs) ? b.schema : b.validate ? b : s.call(this, b);
  }
  function m(b) {
    for (const S of this._compilations)
      if (g(S, b))
        return S;
  }
  _e.getCompilingSchema = m;
  function g(b, S) {
    return b.schema === S.schema && b.root === S.root && b.baseId === S.baseId;
  }
  function u(b, S) {
    let v;
    for (; typeof (v = this.refs[S]) == "string"; )
      S = v;
    return v || this.schemas[S] || f.call(this, b, S);
  }
  function f(b, S) {
    const v = this.opts.uriResolver.parse(S), y = (0, i._getFullPath)(this.opts.uriResolver, v);
    let d = (0, i.getFullPath)(this.opts.uriResolver, b.baseId, void 0);
    if (Object.keys(b.schema).length > 0 && y === d)
      return x.call(this, v, b);
    const l = (0, i.normalizeId)(y), h = this.refs[l] || this.schemas[l];
    if (typeof h == "string") {
      const I = f.call(this, b, h);
      return typeof I?.schema != "object" ? void 0 : x.call(this, v, I);
    }
    if (typeof h?.schema == "object") {
      if (h.validate || s.call(this, h), l === (0, i.normalizeId)(S)) {
        const { schema: I } = h, { schemaId: A } = this.opts, $ = I[A];
        return $ && (d = (0, i.resolveUrl)(this.opts.uriResolver, d, $)), new a({ schema: I, schemaId: A, root: b, baseId: d });
      }
      return x.call(this, v, h);
    }
  }
  _e.resolveSchema = f;
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
      const A = v[(0, c.unescapeFragment)(I)];
      if (A === void 0)
        return;
      v = A;
      const $ = typeof v == "object" && v[this.opts.schemaId];
      !w.has(I) && $ && (S = (0, i.resolveUrl)(this.opts.uriResolver, S, $));
    }
    let l;
    if (typeof v != "boolean" && v.$ref && !(0, c.schemaHasRulesButRef)(v, this.RULES)) {
      const I = (0, i.resolveUrl)(this.opts.uriResolver, S, v.$ref);
      l = f.call(this, y, I);
    }
    const { schemaId: h } = this.opts;
    if (l = l || new a({ schema: v, schemaId: h, root: y, baseId: S }), l.schema !== l.root.schema)
      return l;
  }
  return _e;
}
const Bl = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Zl = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Hl = "object", Jl = ["$data"], Kl = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Ql = !1, Wl = {
  $id: Bl,
  description: Zl,
  type: Hl,
  required: Jl,
  properties: Kl,
  additionalProperties: Ql
};
var kn = {}, sn = { exports: {} }, br, Ca;
function Yc() {
  if (Ca) return br;
  Ca = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function n(u) {
    let f = "", w = 0, x = 0;
    for (x = 0; x < u.length; x++)
      if (w = u[x].charCodeAt(0), w !== 48) {
        if (!(w >= 48 && w <= 57 || w >= 65 && w <= 70 || w >= 97 && w <= 102))
          return "";
        f += u[x];
        break;
      }
    for (x += 1; x < u.length; x++) {
      if (w = u[x].charCodeAt(0), !(w >= 48 && w <= 57 || w >= 65 && w <= 70 || w >= 97 && w <= 102))
        return "";
      f += u[x];
    }
    return f;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function c(u) {
    return u.length = 0, !0;
  }
  function r(u, f, w) {
    if (u.length) {
      const x = n(u);
      if (x !== "")
        f.push(x);
      else
        return w.error = !0, !1;
      u.length = 0;
    }
    return !0;
  }
  function a(u) {
    let f = 0;
    const w = { error: !1, address: "", zone: "" }, x = [], b = [];
    let S = !1, v = !1, y = r;
    for (let d = 0; d < u.length; d++) {
      const l = u[d];
      if (!(l === "[" || l === "]"))
        if (l === ":") {
          if (S === !0 && (v = !0), !y(b, x, w))
            break;
          if (++f > 7) {
            w.error = !0;
            break;
          }
          d > 0 && u[d - 1] === ":" && (S = !0), x.push(":");
          continue;
        } else if (l === "%") {
          if (!y(b, x, w))
            break;
          y = c;
        } else {
          b.push(l);
          continue;
        }
    }
    return b.length && (y === c ? w.zone = b.join("") : v ? x.push(b.join("")) : x.push(n(b))), w.address = x.join(""), w;
  }
  function s(u) {
    if (o(u, ":") < 2)
      return { host: u, isIPV6: !1 };
    const f = a(u);
    if (f.error)
      return { host: u, isIPV6: !1 };
    {
      let w = f.address, x = f.address;
      return f.zone && (w += "%" + f.zone, x += "%25" + f.zone), { host: w, isIPV6: !0, escapedHost: x };
    }
  }
  function o(u, f) {
    let w = 0;
    for (let x = 0; x < u.length; x++)
      u[x] === f && w++;
    return w;
  }
  function p(u) {
    let f = u;
    const w = [];
    let x = -1, b = 0;
    for (; b = f.length; ) {
      if (b === 1) {
        if (f === ".")
          break;
        if (f === "/") {
          w.push("/");
          break;
        } else {
          w.push(f);
          break;
        }
      } else if (b === 2) {
        if (f[0] === ".") {
          if (f[1] === ".")
            break;
          if (f[1] === "/") {
            f = f.slice(2);
            continue;
          }
        } else if (f[0] === "/" && (f[1] === "." || f[1] === "/")) {
          w.push("/");
          break;
        }
      } else if (b === 3 && f === "/..") {
        w.length !== 0 && w.pop(), w.push("/");
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
          f = f.slice(3), w.length !== 0 && w.pop();
          continue;
        }
      }
      if ((x = f.indexOf("/", 1)) === -1) {
        w.push(f);
        break;
      } else
        w.push(f.slice(0, x)), f = f.slice(x);
    }
    return w.join("");
  }
  function m(u, f) {
    const w = f !== !0 ? escape : unescape;
    return u.scheme !== void 0 && (u.scheme = w(u.scheme)), u.userinfo !== void 0 && (u.userinfo = w(u.userinfo)), u.host !== void 0 && (u.host = w(u.host)), u.path !== void 0 && (u.path = w(u.path)), u.query !== void 0 && (u.query = w(u.query)), u.fragment !== void 0 && (u.fragment = w(u.fragment)), u;
  }
  function g(u) {
    const f = [];
    if (u.userinfo !== void 0 && (f.push(u.userinfo), f.push("@")), u.host !== void 0) {
      let w = unescape(u.host);
      if (!t(w)) {
        const x = s(w);
        x.isIPV6 === !0 ? w = `[${x.escapedHost}]` : w = u.host;
      }
      f.push(w);
    }
    return (typeof u.port == "number" || typeof u.port == "string") && (f.push(":"), f.push(String(u.port))), f.length ? f.join("") : void 0;
  }
  return br = {
    nonSimpleDomain: i,
    recomposeAuthority: g,
    normalizeComponentEncoding: m,
    removeDotSegments: p,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: s,
    stringArrayToHexStripped: n
  }, br;
}
var wr, Ea;
function Xl() {
  if (Ea) return wr;
  Ea = 1;
  const { isUUID: e } = Yc(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function i(l) {
    return n.indexOf(
      /** @type {*} */
      l
    ) !== -1;
  }
  function c(l) {
    return l.secure === !0 ? !0 : l.secure === !1 ? !1 : l.scheme ? l.scheme.length === 3 && (l.scheme[0] === "w" || l.scheme[0] === "W") && (l.scheme[1] === "s" || l.scheme[1] === "S") && (l.scheme[2] === "s" || l.scheme[2] === "S") : !1;
  }
  function r(l) {
    return l.host || (l.error = l.error || "HTTP URIs must have a host."), l;
  }
  function a(l) {
    const h = String(l.scheme).toLowerCase() === "https";
    return (l.port === (h ? 443 : 80) || l.port === "") && (l.port = void 0), l.path || (l.path = "/"), l;
  }
  function s(l) {
    return l.secure = c(l), l.resourceName = (l.path || "/") + (l.query ? "?" + l.query : ""), l.path = void 0, l.query = void 0, l;
  }
  function o(l) {
    if ((l.port === (c(l) ? 443 : 80) || l.port === "") && (l.port = void 0), typeof l.secure == "boolean" && (l.scheme = l.secure ? "wss" : "ws", l.secure = void 0), l.resourceName) {
      const [h, I] = l.resourceName.split("?");
      l.path = h && h !== "/" ? h : void 0, l.query = I, l.resourceName = void 0;
    }
    return l.fragment = void 0, l;
  }
  function p(l, h) {
    if (!l.path)
      return l.error = "URN can not be parsed", l;
    const I = l.path.match(t);
    if (I) {
      const A = h.scheme || l.scheme || "urn";
      l.nid = I[1].toLowerCase(), l.nss = I[2];
      const $ = `${A}:${h.nid || l.nid}`, C = d($);
      l.path = void 0, C && (l = C.parse(l, h));
    } else
      l.error = l.error || "URN can not be parsed.";
    return l;
  }
  function m(l, h) {
    if (l.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const I = h.scheme || l.scheme || "urn", A = l.nid.toLowerCase(), $ = `${I}:${h.nid || A}`, C = d($);
    C && (l = C.serialize(l, h));
    const M = l, E = l.nss;
    return M.path = `${A || h.nid}:${E}`, h.skipEscape = !0, M;
  }
  function g(l, h) {
    const I = l;
    return I.uuid = I.nss, I.nss = void 0, !h.tolerant && (!I.uuid || !e(I.uuid)) && (I.error = I.error || "UUID is not valid."), I;
  }
  function u(l) {
    const h = l;
    return h.nss = (l.uuid || "").toLowerCase(), h;
  }
  const f = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: r,
      serialize: a
    }
  ), w = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: f.domainHost,
      parse: r,
      serialize: a
    }
  ), x = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: s,
      serialize: o
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
      http: f,
      https: w,
      ws: x,
      wss: b,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: p,
          serialize: m,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: g,
          serialize: u,
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
  return wr = {
    wsIsSecure: c,
    SCHEMES: y,
    isValidSchemeName: i,
    getSchemeHandler: d
  }, wr;
}
var ka;
function Yl() {
  if (ka) return sn.exports;
  ka = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizeComponentEncoding: i, isIPv4: c, nonSimpleDomain: r } = Yc(), { SCHEMES: a, getSchemeHandler: s } = Xl();
  function o(b, S) {
    return typeof b == "string" ? b = /** @type {T} */
    u(w(b, S), S) : typeof b == "object" && (b = /** @type {T} */
    w(u(b, S), S)), b;
  }
  function p(b, S, v) {
    const y = v ? Object.assign({ scheme: "null" }, v) : { scheme: "null" }, d = m(w(b, y), w(S, y), y, !0);
    return y.skipEscape = !0, u(d, y);
  }
  function m(b, S, v, y) {
    const d = {};
    return y || (b = w(u(b, v), v), S = w(u(S, v), v)), v = v || {}, !v.tolerant && S.scheme ? (d.scheme = S.scheme, d.userinfo = S.userinfo, d.host = S.host, d.port = S.port, d.path = t(S.path || ""), d.query = S.query) : (S.userinfo !== void 0 || S.host !== void 0 || S.port !== void 0 ? (d.userinfo = S.userinfo, d.host = S.host, d.port = S.port, d.path = t(S.path || ""), d.query = S.query) : (S.path ? (S.path[0] === "/" ? d.path = t(S.path) : ((b.userinfo !== void 0 || b.host !== void 0 || b.port !== void 0) && !b.path ? d.path = "/" + S.path : b.path ? d.path = b.path.slice(0, b.path.lastIndexOf("/") + 1) + S.path : d.path = S.path, d.path = t(d.path)), d.query = S.query) : (d.path = b.path, S.query !== void 0 ? d.query = S.query : d.query = b.query), d.userinfo = b.userinfo, d.host = b.host, d.port = b.port), d.scheme = b.scheme), d.fragment = S.fragment, d;
  }
  function g(b, S, v) {
    return typeof b == "string" ? (b = unescape(b), b = u(i(w(b, v), !0), { ...v, skipEscape: !0 })) : typeof b == "object" && (b = u(i(b, !0), { ...v, skipEscape: !0 })), typeof S == "string" ? (S = unescape(S), S = u(i(w(S, v), !0), { ...v, skipEscape: !0 })) : typeof S == "object" && (S = u(i(S, !0), { ...v, skipEscape: !0 })), b.toLowerCase() === S.toLowerCase();
  }
  function u(b, S) {
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
    }, y = Object.assign({}, S), d = [], l = s(y.scheme || v.scheme);
    l && l.serialize && l.serialize(v, y), v.path !== void 0 && (y.skipEscape ? v.path = unescape(v.path) : (v.path = escape(v.path), v.scheme !== void 0 && (v.path = v.path.split("%3A").join(":")))), y.reference !== "suffix" && v.scheme && d.push(v.scheme, ":");
    const h = n(v);
    if (h !== void 0 && (y.reference !== "suffix" && d.push("//"), d.push(h), v.path && v.path[0] !== "/" && d.push("/")), v.path !== void 0) {
      let I = v.path;
      !y.absolutePath && (!l || !l.absolutePath) && (I = t(I)), h === void 0 && I[0] === "/" && I[1] === "/" && (I = "/%2F" + I.slice(2)), d.push(I);
    }
    return v.query !== void 0 && d.push("?", v.query), v.fragment !== void 0 && d.push("#", v.fragment), d.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
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
    const l = b.match(f);
    if (l) {
      if (y.scheme = l[1], y.userinfo = l[3], y.host = l[4], y.port = parseInt(l[5], 10), y.path = l[6] || "", y.query = l[7], y.fragment = l[8], isNaN(y.port) && (y.port = l[5]), y.host)
        if (c(y.host) === !1) {
          const A = e(y.host);
          y.host = A.host.toLowerCase(), d = A.isIPV6;
        } else
          d = !0;
      y.scheme === void 0 && y.userinfo === void 0 && y.host === void 0 && y.port === void 0 && y.query === void 0 && !y.path ? y.reference = "same-document" : y.scheme === void 0 ? y.reference = "relative" : y.fragment === void 0 ? y.reference = "absolute" : y.reference = "uri", v.reference && v.reference !== "suffix" && v.reference !== y.reference && (y.error = y.error || "URI is not a " + v.reference + " reference.");
      const h = s(v.scheme || y.scheme);
      if (!v.unicodeSupport && (!h || !h.unicodeSupport) && y.host && (v.domainHost || h && h.domainHost) && d === !1 && r(y.host))
        try {
          y.host = URL.domainToASCII(y.host.toLowerCase());
        } catch (I) {
          y.error = y.error || "Host's domain name can not be converted to ASCII: " + I;
        }
      (!h || h && !h.skipNormalize) && (b.indexOf("%") !== -1 && (y.scheme !== void 0 && (y.scheme = unescape(y.scheme)), y.host !== void 0 && (y.host = unescape(y.host))), y.path && (y.path = escape(unescape(y.path))), y.fragment && (y.fragment = encodeURI(decodeURIComponent(y.fragment)))), h && h.parse && h.parse(y, v);
    } else
      y.error = y.error || "URI can not be parsed.";
    return y;
  }
  const x = {
    SCHEMES: a,
    normalize: o,
    resolve: p,
    resolveComponent: m,
    equal: g,
    serialize: u,
    parse: w
  };
  return sn.exports = x, sn.exports.default = x, sn.exports.fastUri = x, sn.exports;
}
var Ma;
function eu() {
  if (Ma) return kn;
  Ma = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = Yl();
  return e.code = 'require("ajv/dist/runtime/uri").default', kn.default = e, kn;
}
var Oa;
function ed() {
  return Oa || (Oa = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ wn();
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
    const i = /* @__PURE__ */ Ji(), c = /* @__PURE__ */ xn(), r = /* @__PURE__ */ Qc(), a = /* @__PURE__ */ Ki(), s = /* @__PURE__ */ te(), o = /* @__PURE__ */ Hi(), p = /* @__PURE__ */ zi(), m = /* @__PURE__ */ ie(), g = Wl, u = /* @__PURE__ */ eu(), f = (k, O) => new RegExp(k, O);
    f.code = "new RegExp";
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
      var O, V, N, R, q, T, D, H, Q, J, U, G, B, K, W, ee, re, be, fe, me, pe, et, ke, ir, rr;
      const nn = k.strict, sr = (O = k.code) === null || O === void 0 ? void 0 : O.optimize, Ws = sr === !0 || sr === void 0 ? 1 : sr || 0, Xs = (N = (V = k.code) === null || V === void 0 ? void 0 : V.regExp) !== null && N !== void 0 ? N : f, Fd = (R = k.uriResolver) !== null && R !== void 0 ? R : u.default;
      return {
        strictSchema: (T = (q = k.strictSchema) !== null && q !== void 0 ? q : nn) !== null && T !== void 0 ? T : !0,
        strictNumbers: (H = (D = k.strictNumbers) !== null && D !== void 0 ? D : nn) !== null && H !== void 0 ? H : !0,
        strictTypes: (J = (Q = k.strictTypes) !== null && Q !== void 0 ? Q : nn) !== null && J !== void 0 ? J : "log",
        strictTuples: (G = (U = k.strictTuples) !== null && U !== void 0 ? U : nn) !== null && G !== void 0 ? G : "log",
        strictRequired: (K = (B = k.strictRequired) !== null && B !== void 0 ? B : nn) !== null && K !== void 0 ? K : !1,
        code: k.code ? { ...k.code, optimize: Ws, regExp: Xs } : { optimize: Ws, regExp: Xs },
        loopRequired: (W = k.loopRequired) !== null && W !== void 0 ? W : v,
        loopEnum: (ee = k.loopEnum) !== null && ee !== void 0 ? ee : v,
        meta: (re = k.meta) !== null && re !== void 0 ? re : !0,
        messages: (be = k.messages) !== null && be !== void 0 ? be : !0,
        inlineRefs: (fe = k.inlineRefs) !== null && fe !== void 0 ? fe : !0,
        schemaId: (me = k.schemaId) !== null && me !== void 0 ? me : "$id",
        addUsedSchema: (pe = k.addUsedSchema) !== null && pe !== void 0 ? pe : !0,
        validateSchema: (et = k.validateSchema) !== null && et !== void 0 ? et : !0,
        validateFormats: (ke = k.validateFormats) !== null && ke !== void 0 ? ke : !0,
        unicodeRegExp: (ir = k.unicodeRegExp) !== null && ir !== void 0 ? ir : !0,
        int32range: (rr = k.int32range) !== null && rr !== void 0 ? rr : !0,
        uriResolver: Fd
      };
    }
    class d {
      constructor(O = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), O = this.opts = { ...O, ...y(O) };
        const { es5: V, lines: N } = this.opts.code;
        this.scope = new s.ValueScope({ scope: {}, prefixes: x, es5: V, lines: N }), this.logger = E(O.logger);
        const R = O.validateFormats;
        O.validateFormats = !1, this.RULES = (0, r.getRules)(), l.call(this, b, O, "NOT SUPPORTED"), l.call(this, S, O, "DEPRECATED", "warn"), this._metaOpts = C.call(this), O.formats && A.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), O.keywords && $.call(this, O.keywords), typeof O.meta == "object" && this.addMetaSchema(O.meta), I.call(this), O.validateFormats = R;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: O, meta: V, schemaId: N } = this.opts;
        let R = g;
        N === "id" && (R = { ...g }, R.id = R.$id, delete R.$id), V && O && this.addMetaSchema(R, R[N], !1);
      }
      defaultMeta() {
        const { meta: O, schemaId: V } = this.opts;
        return this.opts.defaultMeta = typeof O == "object" ? O[V] || O : void 0;
      }
      validate(O, V) {
        let N;
        if (typeof O == "string") {
          if (N = this.getSchema(O), !N)
            throw new Error(`no schema with key or ref "${O}"`);
        } else
          N = this.compile(O);
        const R = N(V);
        return "$async" in N || (this.errors = N.errors), R;
      }
      compile(O, V) {
        const N = this._addSchema(O, V);
        return N.validate || this._compileSchemaEnv(N);
      }
      compileAsync(O, V) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: N } = this.opts;
        return R.call(this, O, V);
        async function R(J, U) {
          await q.call(this, J.$schema);
          const G = this._addSchema(J, U);
          return G.validate || T.call(this, G);
        }
        async function q(J) {
          J && !this.getSchema(J) && await R.call(this, { $ref: J }, !0);
        }
        async function T(J) {
          try {
            return this._compileSchemaEnv(J);
          } catch (U) {
            if (!(U instanceof c.default))
              throw U;
            return D.call(this, U), await H.call(this, U.missingSchema), T.call(this, J);
          }
        }
        function D({ missingSchema: J, missingRef: U }) {
          if (this.refs[J])
            throw new Error(`AnySchema ${J} is loaded but ${U} cannot be resolved`);
        }
        async function H(J) {
          const U = await Q.call(this, J);
          this.refs[J] || await q.call(this, U.$schema), this.refs[J] || this.addSchema(U, J, V);
        }
        async function Q(J) {
          const U = this._loading[J];
          if (U)
            return U;
          try {
            return await (this._loading[J] = N(J));
          } finally {
            delete this._loading[J];
          }
        }
      }
      // Adds schema to the instance
      addSchema(O, V, N, R = this.opts.validateSchema) {
        if (Array.isArray(O)) {
          for (const T of O)
            this.addSchema(T, void 0, N, R);
          return this;
        }
        let q;
        if (typeof O == "object") {
          const { schemaId: T } = this.opts;
          if (q = O[T], q !== void 0 && typeof q != "string")
            throw new Error(`schema ${T} must be string`);
        }
        return V = (0, o.normalizeId)(V || q), this._checkUnique(V), this.schemas[V] = this._addSchema(O, N, V, R, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(O, V, N = this.opts.validateSchema) {
        return this.addSchema(O, V, !0, N), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(O, V) {
        if (typeof O == "boolean")
          return !0;
        let N;
        if (N = O.$schema, N !== void 0 && typeof N != "string")
          throw new Error("$schema must be a string");
        if (N = N || this.opts.defaultMeta || this.defaultMeta(), !N)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const R = this.validate(N, O);
        if (!R && V) {
          const q = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(q);
          else
            throw new Error(q);
        }
        return R;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(O) {
        let V;
        for (; typeof (V = h.call(this, O)) == "string"; )
          O = V;
        if (V === void 0) {
          const { schemaId: N } = this.opts, R = new a.SchemaEnv({ schema: {}, schemaId: N });
          if (V = a.resolveSchema.call(this, R, O), !V)
            return;
          this.refs[O] = V;
        }
        return V.validate || this._compileSchemaEnv(V);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(O) {
        if (O instanceof RegExp)
          return this._removeAllSchemas(this.schemas, O), this._removeAllSchemas(this.refs, O), this;
        switch (typeof O) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const V = h.call(this, O);
            return typeof V == "object" && this._cache.delete(V.schema), delete this.schemas[O], delete this.refs[O], this;
          }
          case "object": {
            const V = O;
            this._cache.delete(V);
            let N = O[this.opts.schemaId];
            return N && (N = (0, o.normalizeId)(N), delete this.schemas[N], delete this.refs[N]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(O) {
        for (const V of O)
          this.addKeyword(V);
        return this;
      }
      addKeyword(O, V) {
        let N;
        if (typeof O == "string")
          N = O, typeof V == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), V.keyword = N);
        else if (typeof O == "object" && V === void 0) {
          if (V = O, N = V.keyword, Array.isArray(N) && !N.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (P.call(this, N, V), !V)
          return (0, m.eachItem)(N, (q) => z.call(this, q)), this;
        Z.call(this, V);
        const R = {
          ...V,
          type: (0, p.getJSONTypes)(V.type),
          schemaType: (0, p.getJSONTypes)(V.schemaType)
        };
        return (0, m.eachItem)(N, R.type.length === 0 ? (q) => z.call(this, q, R) : (q) => R.type.forEach((T) => z.call(this, q, R, T))), this;
      }
      getKeyword(O) {
        const V = this.RULES.all[O];
        return typeof V == "object" ? V.definition : !!V;
      }
      // Remove keyword
      removeKeyword(O) {
        const { RULES: V } = this;
        delete V.keywords[O], delete V.all[O];
        for (const N of V.rules) {
          const R = N.rules.findIndex((q) => q.keyword === O);
          R >= 0 && N.rules.splice(R, 1);
        }
        return this;
      }
      // Add format
      addFormat(O, V) {
        return typeof V == "string" && (V = new RegExp(V)), this.formats[O] = V, this;
      }
      errorsText(O = this.errors, { separator: V = ", ", dataVar: N = "data" } = {}) {
        return !O || O.length === 0 ? "No errors" : O.map((R) => `${N}${R.instancePath} ${R.message}`).reduce((R, q) => R + V + q);
      }
      $dataMetaSchema(O, V) {
        const N = this.RULES.all;
        O = JSON.parse(JSON.stringify(O));
        for (const R of V) {
          const q = R.split("/").slice(1);
          let T = O;
          for (const D of q)
            T = T[D];
          for (const D in N) {
            const H = N[D];
            if (typeof H != "object")
              continue;
            const { $data: Q } = H.definition, J = T[D];
            Q && J && (T[D] = F(J));
          }
        }
        return O;
      }
      _removeAllSchemas(O, V) {
        for (const N in O) {
          const R = O[N];
          (!V || V.test(N)) && (typeof R == "string" ? delete O[N] : R && !R.meta && (this._cache.delete(R.schema), delete O[N]));
        }
      }
      _addSchema(O, V, N, R = this.opts.validateSchema, q = this.opts.addUsedSchema) {
        let T;
        const { schemaId: D } = this.opts;
        if (typeof O == "object")
          T = O[D];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof O != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let H = this._cache.get(O);
        if (H !== void 0)
          return H;
        N = (0, o.normalizeId)(T || N);
        const Q = o.getSchemaRefs.call(this, O, N);
        return H = new a.SchemaEnv({ schema: O, schemaId: D, meta: V, baseId: N, localRefs: Q }), this._cache.set(H.schema, H), q && !N.startsWith("#") && (N && this._checkUnique(N), this.refs[N] = H), R && this.validateSchema(O, !0), H;
      }
      _checkUnique(O) {
        if (this.schemas[O] || this.refs[O])
          throw new Error(`schema with key or id "${O}" already exists`);
      }
      _compileSchemaEnv(O) {
        if (O.meta ? this._compileMetaSchema(O) : a.compileSchema.call(this, O), !O.validate)
          throw new Error("ajv implementation error");
        return O.validate;
      }
      _compileMetaSchema(O) {
        const V = this.opts;
        this.opts = this._metaOpts;
        try {
          a.compileSchema.call(this, O);
        } finally {
          this.opts = V;
        }
      }
    }
    d.ValidationError = i.default, d.MissingRefError = c.default, e.default = d;
    function l(k, O, V, N = "error") {
      for (const R in k) {
        const q = R;
        q in O && this.logger[N](`${V}: option ${R}. ${k[q]}`);
      }
    }
    function h(k) {
      return k = (0, o.normalizeId)(k), this.schemas[k] || this.refs[k];
    }
    function I() {
      const k = this.opts.schemas;
      if (k)
        if (Array.isArray(k))
          this.addSchema(k);
        else
          for (const O in k)
            this.addSchema(k[O], O);
    }
    function A() {
      for (const k in this.opts.formats) {
        const O = this.opts.formats[k];
        O && this.addFormat(k, O);
      }
    }
    function $(k) {
      if (Array.isArray(k)) {
        this.addVocabulary(k);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const O in k) {
        const V = k[O];
        V.keyword || (V.keyword = O), this.addKeyword(V);
      }
    }
    function C() {
      const k = { ...this.opts };
      for (const O of w)
        delete k[O];
      return k;
    }
    const M = { log() {
    }, warn() {
    }, error() {
    } };
    function E(k) {
      if (k === !1)
        return M;
      if (k === void 0)
        return console;
      if (k.log && k.warn && k.error)
        return k;
      throw new Error("logger must implement log, warn and error methods");
    }
    const j = /^[a-z_$][a-z0-9_$:-]*$/i;
    function P(k, O) {
      const { RULES: V } = this;
      if ((0, m.eachItem)(k, (N) => {
        if (V.keywords[N])
          throw new Error(`Keyword ${N} is already defined`);
        if (!j.test(N))
          throw new Error(`Keyword ${N} has invalid name`);
      }), !!O && O.$data && !("code" in O || "validate" in O))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function z(k, O, V) {
      var N;
      const R = O?.post;
      if (V && R)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: q } = this;
      let T = R ? q.post : q.rules.find(({ type: H }) => H === V);
      if (T || (T = { type: V, rules: [] }, q.rules.push(T)), q.keywords[k] = !0, !O)
        return;
      const D = {
        keyword: k,
        definition: {
          ...O,
          type: (0, p.getJSONTypes)(O.type),
          schemaType: (0, p.getJSONTypes)(O.schemaType)
        }
      };
      O.before ? _.call(this, T, D, O.before) : T.rules.push(D), q.all[k] = D, (N = O.implements) === null || N === void 0 || N.forEach((H) => this.addKeyword(H));
    }
    function _(k, O, V) {
      const N = k.rules.findIndex((R) => R.keyword === V);
      N >= 0 ? k.rules.splice(N, 0, O) : (k.rules.push(O), this.logger.warn(`rule ${V} is not defined`));
    }
    function Z(k) {
      let { metaSchema: O } = k;
      O !== void 0 && (k.$data && this.opts.$data && (O = F(O)), k.validateSchema = this.compile(O, !0));
    }
    const L = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function F(k) {
      return { anyOf: [k, L] };
    }
  })(pr)), pr;
}
var Mn = {}, On = {}, Ln = {}, La;
function tu() {
  if (La) return Ln;
  La = 1, Object.defineProperty(Ln, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Ln.default = e, Ln;
}
var xt = {}, Na;
function Es() {
  if (Na) return xt;
  Na = 1, Object.defineProperty(xt, "__esModule", { value: !0 }), xt.callRef = xt.getValidate = void 0;
  const e = /* @__PURE__ */ xn(), t = /* @__PURE__ */ Ye(), n = /* @__PURE__ */ te(), i = /* @__PURE__ */ Xe(), c = /* @__PURE__ */ Ki(), r = /* @__PURE__ */ ie(), a = {
    keyword: "$ref",
    schemaType: "string",
    code(p) {
      const { gen: m, schema: g, it: u } = p, { baseId: f, schemaEnv: w, validateName: x, opts: b, self: S } = u, { root: v } = w;
      if ((g === "#" || g === "#/") && f === v.baseId)
        return d();
      const y = c.resolveRef.call(S, v, f, g);
      if (y === void 0)
        throw new e.default(u.opts.uriResolver, f, g);
      if (y instanceof c.SchemaEnv)
        return l(y);
      return h(y);
      function d() {
        if (w === v)
          return o(p, x, w, w.$async);
        const I = m.scopeValue("root", { ref: v });
        return o(p, (0, n._)`${I}.validate`, v, v.$async);
      }
      function l(I) {
        const A = s(p, I);
        o(p, A, I, I.$async);
      }
      function h(I) {
        const A = m.scopeValue("schema", b.code.source === !0 ? { ref: I, code: (0, n.stringify)(I) } : { ref: I }), $ = m.name("valid"), C = p.subschema({
          schema: I,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: A,
          errSchemaPath: g
        }, $);
        p.mergeEvaluated(C), p.ok($);
      }
    }
  };
  function s(p, m) {
    const { gen: g } = p;
    return m.validate ? g.scopeValue("validate", { ref: m.validate }) : (0, n._)`${g.scopeValue("wrapper", { ref: m })}.validate`;
  }
  xt.getValidate = s;
  function o(p, m, g, u) {
    const { gen: f, it: w } = p, { allErrors: x, schemaEnv: b, opts: S } = w, v = S.passContext ? i.default.this : n.nil;
    u ? y() : d();
    function y() {
      if (!b.$async)
        throw new Error("async schema referenced by sync schema");
      const I = f.let("valid");
      f.try(() => {
        f.code((0, n._)`await ${(0, t.callValidateCode)(p, m, v)}`), h(m), x || f.assign(I, !0);
      }, (A) => {
        f.if((0, n._)`!(${A} instanceof ${w.ValidationError})`, () => f.throw(A)), l(A), x || f.assign(I, !1);
      }), p.ok(I);
    }
    function d() {
      p.result((0, t.callValidateCode)(p, m, v), () => h(m), () => l(m));
    }
    function l(I) {
      const A = (0, n._)`${I}.errors`;
      f.assign(i.default.vErrors, (0, n._)`${i.default.vErrors} === null ? ${A} : ${i.default.vErrors}.concat(${A})`), f.assign(i.default.errors, (0, n._)`${i.default.vErrors}.length`);
    }
    function h(I) {
      var A;
      if (!w.opts.unevaluated)
        return;
      const $ = (A = g?.validate) === null || A === void 0 ? void 0 : A.evaluated;
      if (w.props !== !0)
        if ($ && !$.dynamicProps)
          $.props !== void 0 && (w.props = r.mergeEvaluated.props(f, $.props, w.props));
        else {
          const C = f.var("props", (0, n._)`${I}.evaluated.props`);
          w.props = r.mergeEvaluated.props(f, C, w.props, n.Name);
        }
      if (w.items !== !0)
        if ($ && !$.dynamicItems)
          $.items !== void 0 && (w.items = r.mergeEvaluated.items(f, $.items, w.items));
        else {
          const C = f.var("items", (0, n._)`${I}.evaluated.items`);
          w.items = r.mergeEvaluated.items(f, C, w.items, n.Name);
        }
    }
  }
  return xt.callRef = o, xt.default = a, xt;
}
var Da;
function td() {
  if (Da) return On;
  Da = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tu(), t = /* @__PURE__ */ Es(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return On.default = n, On;
}
var Nn = {}, Dn = {}, za;
function nu() {
  if (za) return Dn;
  za = 1, Object.defineProperty(Dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, i = {
    message: ({ keyword: r, schemaCode: a }) => (0, e.str)`must be ${n[r].okStr} ${a}`,
    params: ({ keyword: r, schemaCode: a }) => (0, e._)`{comparison: ${n[r].okStr}, limit: ${a}}`
  }, c = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: i,
    code(r) {
      const { keyword: a, data: s, schemaCode: o } = r;
      r.fail$data((0, e._)`${s} ${n[a].fail} ${o} || isNaN(${s})`);
    }
  };
  return Dn.default = c, Dn;
}
var zn = {}, Va;
function iu() {
  if (Va) return zn;
  Va = 1, Object.defineProperty(zn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, e.str)`must be multiple of ${i}`,
      params: ({ schemaCode: i }) => (0, e._)`{multipleOf: ${i}}`
    },
    code(i) {
      const { gen: c, data: r, schemaCode: a, it: s } = i, o = s.opts.multipleOfPrecision, p = c.let("res"), m = o ? (0, e._)`Math.abs(Math.round(${p}) - ${p}) > 1e-${o}` : (0, e._)`${p} !== parseInt(${p})`;
      i.fail$data((0, e._)`(${a} === 0 || (${p} = ${r}/${a}, ${m}))`);
    }
  };
  return zn.default = n, zn;
}
var Vn = {}, Un = {}, Ua;
function ru() {
  if (Ua) return Un;
  Ua = 1, Object.defineProperty(Un, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let i = 0, c = 0, r;
    for (; c < n; )
      i++, r = t.charCodeAt(c++), r >= 55296 && r <= 56319 && c < n && (r = t.charCodeAt(c), (r & 64512) === 56320 && c++);
    return i;
  }
  return Un.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Un;
}
var Ga;
function su() {
  if (Ga) return Vn;
  Ga = 1, Object.defineProperty(Vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ru(), c = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: a }) {
        const s = r === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${s} than ${a} characters`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: a, data: s, schemaCode: o, it: p } = r, m = a === "maxLength" ? e.operators.GT : e.operators.LT, g = p.opts.unicode === !1 ? (0, e._)`${s}.length` : (0, e._)`${(0, t.useFunc)(r.gen, n.default)}(${s})`;
      r.fail$data((0, e._)`${g} ${m} ${o}`);
    }
  };
  return Vn.default = c, Vn;
}
var Gn = {}, Fa;
function au() {
  if (Fa) return Gn;
  Fa = 1, Object.defineProperty(Gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ye(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ te(), c = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, n.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, n._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: a, data: s, $data: o, schema: p, schemaCode: m, it: g } = r, u = g.opts.unicodeRegExp ? "u" : "";
      if (o) {
        const { regExp: f } = g.opts.code, w = f.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(a, f), x = a.let("valid");
        a.try(() => a.assign(x, (0, n._)`${w}(${m}, ${u}).test(${s})`), () => a.assign(x, !1)), r.fail$data((0, n._)`!${x}`);
      } else {
        const f = (0, e.usePattern)(r, p);
        r.fail$data((0, n._)`!${f}.test(${s})`);
      }
    }
  };
  return Gn.default = c, Gn;
}
var Fn = {}, Ba;
function ou() {
  if (Ba) return Fn;
  Ba = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: i, schemaCode: c }) {
        const r = i === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${c} properties`;
      },
      params: ({ schemaCode: i }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { keyword: c, data: r, schemaCode: a } = i, s = c === "maxProperties" ? e.operators.GT : e.operators.LT;
      i.fail$data((0, e._)`Object.keys(${r}).length ${s} ${a}`);
    }
  };
  return Fn.default = n, Fn;
}
var Bn = {}, Za;
function cu() {
  if (Za) return Bn;
  Za = 1, Object.defineProperty(Bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ye(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), c = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: r } }) => (0, t.str)`must have required property '${r}'`,
      params: ({ params: { missingProperty: r } }) => (0, t._)`{missingProperty: ${r}}`
    },
    code(r) {
      const { gen: a, schema: s, schemaCode: o, data: p, $data: m, it: g } = r, { opts: u } = g;
      if (!m && s.length === 0)
        return;
      const f = s.length >= u.loopRequired;
      if (g.allErrors ? w() : x(), u.strictRequired) {
        const v = r.parentSchema.properties, { definedProperties: y } = r.it;
        for (const d of s)
          if (v?.[d] === void 0 && !y.has(d)) {
            const l = g.schemaEnv.baseId + g.errSchemaPath, h = `required property "${d}" is not defined at "${l}" (strictRequired)`;
            (0, n.checkStrictMode)(g, h, g.opts.strictRequired);
          }
      }
      function w() {
        if (f || m)
          r.block$data(t.nil, b);
        else
          for (const v of s)
            (0, e.checkReportMissingProp)(r, v);
      }
      function x() {
        const v = a.let("missing");
        if (f || m) {
          const y = a.let("valid", !0);
          r.block$data(y, () => S(v, y)), r.ok(y);
        } else
          a.if((0, e.checkMissingProp)(r, s, v)), (0, e.reportMissingProp)(r, v), a.else();
      }
      function b() {
        a.forOf("prop", o, (v) => {
          r.setParams({ missingProperty: v }), a.if((0, e.noPropertyInData)(a, p, v, u.ownProperties), () => r.error());
        });
      }
      function S(v, y) {
        r.setParams({ missingProperty: v }), a.forOf(v, o, () => {
          a.assign(y, (0, e.propertyInData)(a, p, v, u.ownProperties)), a.if((0, t.not)(y), () => {
            r.error(), a.break();
          });
        }, t.nil);
      }
    }
  };
  return Bn.default = c, Bn;
}
var Zn = {}, Ha;
function du() {
  if (Ha) return Zn;
  Ha = 1, Object.defineProperty(Zn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: i, schemaCode: c }) {
        const r = i === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${c} items`;
      },
      params: ({ schemaCode: i }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { keyword: c, data: r, schemaCode: a } = i, s = c === "maxItems" ? e.operators.GT : e.operators.LT;
      i.fail$data((0, e._)`${r}.length ${s} ${a}`);
    }
  };
  return Zn.default = n, Zn;
}
var Hn = {}, Jn = {}, Ja;
function ks() {
  if (Ja) return Jn;
  Ja = 1, Object.defineProperty(Jn, "__esModule", { value: !0 });
  const e = Xc();
  return e.code = 'require("ajv/dist/runtime/equal").default', Jn.default = e, Jn;
}
var Ka;
function lu() {
  if (Ka) return Hn;
  Ka = 1, Object.defineProperty(Hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zi(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ks(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: a, j: s } }) => (0, t.str)`must NOT have duplicate items (items ## ${s} and ${a} are identical)`,
      params: ({ params: { i: a, j: s } }) => (0, t._)`{i: ${a}, j: ${s}}`
    },
    code(a) {
      const { gen: s, data: o, $data: p, schema: m, parentSchema: g, schemaCode: u, it: f } = a;
      if (!p && !m)
        return;
      const w = s.let("valid"), x = g.items ? (0, e.getSchemaTypes)(g.items) : [];
      a.block$data(w, b, (0, t._)`${u} === false`), a.ok(w);
      function b() {
        const d = s.let("i", (0, t._)`${o}.length`), l = s.let("j");
        a.setParams({ i: d, j: l }), s.assign(w, !0), s.if((0, t._)`${d} > 1`, () => (S() ? v : y)(d, l));
      }
      function S() {
        return x.length > 0 && !x.some((d) => d === "object" || d === "array");
      }
      function v(d, l) {
        const h = s.name("item"), I = (0, e.checkDataTypes)(x, h, f.opts.strictNumbers, e.DataType.Wrong), A = s.const("indices", (0, t._)`{}`);
        s.for((0, t._)`;${d}--;`, () => {
          s.let(h, (0, t._)`${o}[${d}]`), s.if(I, (0, t._)`continue`), x.length > 1 && s.if((0, t._)`typeof ${h} == "string"`, (0, t._)`${h} += "_"`), s.if((0, t._)`typeof ${A}[${h}] == "number"`, () => {
            s.assign(l, (0, t._)`${A}[${h}]`), a.error(), s.assign(w, !1).break();
          }).code((0, t._)`${A}[${h}] = ${d}`);
        });
      }
      function y(d, l) {
        const h = (0, n.useFunc)(s, i.default), I = s.name("outer");
        s.label(I).for((0, t._)`;${d}--;`, () => s.for((0, t._)`${l} = ${d}; ${l}--;`, () => s.if((0, t._)`${h}(${o}[${d}], ${o}[${l}])`, () => {
          a.error(), s.assign(w, !1).break(I);
        })));
      }
    }
  };
  return Hn.default = r, Hn;
}
var Kn = {}, Qa;
function uu() {
  if (Qa) return Kn;
  Qa = 1, Object.defineProperty(Kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ks(), c = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: a, data: s, $data: o, schemaCode: p, schema: m } = r;
      o || m && typeof m == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(a, n.default)}(${s}, ${p})`) : r.fail((0, e._)`${m} !== ${s}`);
    }
  };
  return Kn.default = c, Kn;
}
var Qn = {}, Wa;
function pu() {
  if (Wa) return Qn;
  Wa = 1, Object.defineProperty(Qn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ks(), c = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: a, data: s, $data: o, schema: p, schemaCode: m, it: g } = r;
      if (!o && p.length === 0)
        throw new Error("enum must have non-empty array");
      const u = p.length >= g.opts.loopEnum;
      let f;
      const w = () => f ?? (f = (0, t.useFunc)(a, n.default));
      let x;
      if (u || o)
        x = a.let("valid"), r.block$data(x, b);
      else {
        if (!Array.isArray(p))
          throw new Error("ajv implementation error");
        const v = a.const("vSchema", m);
        x = (0, e.or)(...p.map((y, d) => S(v, d)));
      }
      r.pass(x);
      function b() {
        a.assign(x, !1), a.forOf("v", m, (v) => a.if((0, e._)`${w()}(${s}, ${v})`, () => a.assign(x, !0).break()));
      }
      function S(v, y) {
        const d = p[y];
        return typeof d == "object" && d !== null ? (0, e._)`${w()}(${s}, ${v}[${y}])` : (0, e._)`${s} === ${d}`;
      }
    }
  };
  return Qn.default = c, Qn;
}
var Xa;
function nd() {
  if (Xa) return Nn;
  Xa = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ nu(), t = /* @__PURE__ */ iu(), n = /* @__PURE__ */ su(), i = /* @__PURE__ */ au(), c = /* @__PURE__ */ ou(), r = /* @__PURE__ */ cu(), a = /* @__PURE__ */ du(), s = /* @__PURE__ */ lu(), o = /* @__PURE__ */ uu(), p = /* @__PURE__ */ pu(), m = [
    // number
    e.default,
    t.default,
    // string
    n.default,
    i.default,
    // object
    c.default,
    r.default,
    // array
    a.default,
    s.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    o.default,
    p.default
  ];
  return Nn.default = m, Nn;
}
var Wn = {}, zt = {}, Ya;
function id() {
  if (Ya) return zt;
  Ya = 1, Object.defineProperty(zt, "__esModule", { value: !0 }), zt.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), i = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: r } }) => (0, e.str)`must NOT have more than ${r} items`,
      params: ({ params: { len: r } }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { parentSchema: a, it: s } = r, { items: o } = a;
      if (!Array.isArray(o)) {
        (0, t.checkStrictMode)(s, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      c(r, o);
    }
  };
  function c(r, a) {
    const { gen: s, schema: o, data: p, keyword: m, it: g } = r;
    g.items = !0;
    const u = s.const("len", (0, e._)`${p}.length`);
    if (o === !1)
      r.setParams({ len: a.length }), r.pass((0, e._)`${u} <= ${a.length}`);
    else if (typeof o == "object" && !(0, t.alwaysValidSchema)(g, o)) {
      const w = s.var("valid", (0, e._)`${u} <= ${a.length}`);
      s.if((0, e.not)(w), () => f(w)), r.ok(w);
    }
    function f(w) {
      s.forRange("i", a.length, u, (x) => {
        r.subschema({ keyword: m, dataProp: x, dataPropType: t.Type.Num }, w), g.allErrors || s.if((0, e.not)(w), () => s.break());
      });
    }
  }
  return zt.validateAdditionalItems = c, zt.default = i, zt;
}
var Xn = {}, Vt = {}, eo;
function rd() {
  if (eo) return Vt;
  eo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 }), Vt.validateTuple = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Ye(), i = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(r) {
      const { schema: a, it: s } = r;
      if (Array.isArray(a))
        return c(r, "additionalItems", a);
      s.items = !0, !(0, t.alwaysValidSchema)(s, a) && r.ok((0, n.validateArray)(r));
    }
  };
  function c(r, a, s = r.schema) {
    const { gen: o, parentSchema: p, data: m, keyword: g, it: u } = r;
    x(p), u.opts.unevaluated && s.length && u.items !== !0 && (u.items = t.mergeEvaluated.items(o, s.length, u.items));
    const f = o.name("valid"), w = o.const("len", (0, e._)`${m}.length`);
    s.forEach((b, S) => {
      (0, t.alwaysValidSchema)(u, b) || (o.if((0, e._)`${w} > ${S}`, () => r.subschema({
        keyword: g,
        schemaProp: S,
        dataProp: S
      }, f)), r.ok(f));
    });
    function x(b) {
      const { opts: S, errSchemaPath: v } = u, y = s.length, d = y === b.minItems && (y === b.maxItems || b[a] === !1);
      if (S.strictTuples && !d) {
        const l = `"${g}" is ${y}-tuple, but minItems or maxItems/${a} are not specified or different at path "${v}"`;
        (0, t.checkStrictMode)(u, l, S.strictTuples);
      }
    }
  }
  return Vt.validateTuple = c, Vt.default = i, Vt;
}
var to;
function fu() {
  if (to) return Xn;
  to = 1, Object.defineProperty(Xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ rd(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return Xn.default = t, Xn;
}
var Yn = {}, no;
function hu() {
  if (no) return Yn;
  no = 1, Object.defineProperty(Yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Ye(), i = /* @__PURE__ */ id(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: a } }) => (0, e.str)`must NOT have more than ${a} items`,
      params: ({ params: { len: a } }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { schema: s, parentSchema: o, it: p } = a, { prefixItems: m } = o;
      p.items = !0, !(0, t.alwaysValidSchema)(p, s) && (m ? (0, i.validateAdditionalItems)(a, m) : a.ok((0, n.validateArray)(a)));
    }
  };
  return Yn.default = r, Yn;
}
var ei = {}, io;
function mu() {
  if (io) return ei;
  io = 1, Object.defineProperty(ei, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), i = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: c, max: r } }) => r === void 0 ? (0, e.str)`must contain at least ${c} valid item(s)` : (0, e.str)`must contain at least ${c} and no more than ${r} valid item(s)`,
      params: ({ params: { min: c, max: r } }) => r === void 0 ? (0, e._)`{minContains: ${c}}` : (0, e._)`{minContains: ${c}, maxContains: ${r}}`
    },
    code(c) {
      const { gen: r, schema: a, parentSchema: s, data: o, it: p } = c;
      let m, g;
      const { minContains: u, maxContains: f } = s;
      p.opts.next ? (m = u === void 0 ? 1 : u, g = f) : m = 1;
      const w = r.const("len", (0, e._)`${o}.length`);
      if (c.setParams({ min: m, max: g }), g === void 0 && m === 0) {
        (0, t.checkStrictMode)(p, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (g !== void 0 && m > g) {
        (0, t.checkStrictMode)(p, '"minContains" > "maxContains" is always invalid'), c.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(p, a)) {
        let y = (0, e._)`${w} >= ${m}`;
        g !== void 0 && (y = (0, e._)`${y} && ${w} <= ${g}`), c.pass(y);
        return;
      }
      p.items = !0;
      const x = r.name("valid");
      g === void 0 && m === 1 ? S(x, () => r.if(x, () => r.break())) : m === 0 ? (r.let(x, !0), g !== void 0 && r.if((0, e._)`${o}.length > 0`, b)) : (r.let(x, !1), b()), c.result(x, () => c.reset());
      function b() {
        const y = r.name("_valid"), d = r.let("count", 0);
        S(y, () => r.if(y, () => v(d)));
      }
      function S(y, d) {
        r.forRange("i", 0, w, (l) => {
          c.subschema({
            keyword: "contains",
            dataProp: l,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, y), d();
        });
      }
      function v(y) {
        r.code((0, e._)`${y}++`), g === void 0 ? r.if((0, e._)`${y} >= ${m}`, () => r.assign(x, !0).break()) : (r.if((0, e._)`${y} > ${g}`, () => r.assign(x, !1).break()), m === 1 ? r.assign(x, !0) : r.if((0, e._)`${y} >= ${m}`, () => r.assign(x, !0)));
      }
    }
  };
  return ei.default = i, ei;
}
var xr = {}, ro;
function Ms() {
  return ro || (ro = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ Ye();
    e.error = {
      message: ({ params: { property: o, depsCount: p, deps: m } }) => {
        const g = p === 1 ? "property" : "properties";
        return (0, t.str)`must have ${g} ${m} when property ${o} is present`;
      },
      params: ({ params: { property: o, depsCount: p, deps: m, missingProperty: g } }) => (0, t._)`{property: ${o},
    missingProperty: ${g},
    depsCount: ${p},
    deps: ${m}}`
      // TODO change to reference
    };
    const c = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(o) {
        const [p, m] = r(o);
        a(o, p), s(o, m);
      }
    };
    function r({ schema: o }) {
      const p = {}, m = {};
      for (const g in o) {
        if (g === "__proto__")
          continue;
        const u = Array.isArray(o[g]) ? p : m;
        u[g] = o[g];
      }
      return [p, m];
    }
    function a(o, p = o.schema) {
      const { gen: m, data: g, it: u } = o;
      if (Object.keys(p).length === 0)
        return;
      const f = m.let("missing");
      for (const w in p) {
        const x = p[w];
        if (x.length === 0)
          continue;
        const b = (0, i.propertyInData)(m, g, w, u.opts.ownProperties);
        o.setParams({
          property: w,
          depsCount: x.length,
          deps: x.join(", ")
        }), u.allErrors ? m.if(b, () => {
          for (const S of x)
            (0, i.checkReportMissingProp)(o, S);
        }) : (m.if((0, t._)`${b} && (${(0, i.checkMissingProp)(o, x, f)})`), (0, i.reportMissingProp)(o, f), m.else());
      }
    }
    e.validatePropertyDeps = a;
    function s(o, p = o.schema) {
      const { gen: m, data: g, keyword: u, it: f } = o, w = m.name("valid");
      for (const x in p)
        (0, n.alwaysValidSchema)(f, p[x]) || (m.if(
          (0, i.propertyInData)(m, g, x, f.opts.ownProperties),
          () => {
            const b = o.subschema({ keyword: u, schemaProp: x }, w);
            o.mergeValidEvaluated(b, w);
          },
          () => m.var(w, !0)
          // TODO var
        ), o.ok(w));
    }
    e.validateSchemaDeps = s, e.default = c;
  })(xr)), xr;
}
var ti = {}, so;
function yu() {
  if (so) return ti;
  so = 1, Object.defineProperty(ti, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), i = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: c }) => (0, e._)`{propertyName: ${c.propertyName}}`
    },
    code(c) {
      const { gen: r, schema: a, data: s, it: o } = c;
      if ((0, t.alwaysValidSchema)(o, a))
        return;
      const p = r.name("valid");
      r.forIn("key", s, (m) => {
        c.setParams({ propertyName: m }), c.subschema({
          keyword: "propertyNames",
          data: m,
          dataTypes: ["string"],
          propertyName: m,
          compositeRule: !0
        }, p), r.if((0, e.not)(p), () => {
          c.error(!0), o.allErrors || r.break();
        });
      }), c.ok(p);
    }
  };
  return ti.default = i, ti;
}
var ni = {}, ao;
function sd() {
  if (ao) return ni;
  ao = 1, Object.defineProperty(ni, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ye(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ Xe(), i = /* @__PURE__ */ ie(), r = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: !0,
    trackErrors: !0,
    error: {
      message: "must NOT have additional properties",
      params: ({ params: a }) => (0, t._)`{additionalProperty: ${a.additionalProperty}}`
    },
    code(a) {
      const { gen: s, schema: o, parentSchema: p, data: m, errsCount: g, it: u } = a;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: f, opts: w } = u;
      if (u.props = !0, w.removeAdditional !== "all" && (0, i.alwaysValidSchema)(u, o))
        return;
      const x = (0, e.allSchemaProperties)(p.properties), b = (0, e.allSchemaProperties)(p.patternProperties);
      S(), a.ok((0, t._)`${g} === ${n.default.errors}`);
      function S() {
        s.forIn("key", m, (h) => {
          !x.length && !b.length ? d(h) : s.if(v(h), () => d(h));
        });
      }
      function v(h) {
        let I;
        if (x.length > 8) {
          const A = (0, i.schemaRefOrVal)(u, p.properties, "properties");
          I = (0, e.isOwnProperty)(s, A, h);
        } else x.length ? I = (0, t.or)(...x.map((A) => (0, t._)`${h} === ${A}`)) : I = t.nil;
        return b.length && (I = (0, t.or)(I, ...b.map((A) => (0, t._)`${(0, e.usePattern)(a, A)}.test(${h})`))), (0, t.not)(I);
      }
      function y(h) {
        s.code((0, t._)`delete ${m}[${h}]`);
      }
      function d(h) {
        if (w.removeAdditional === "all" || w.removeAdditional && o === !1) {
          y(h);
          return;
        }
        if (o === !1) {
          a.setParams({ additionalProperty: h }), a.error(), f || s.break();
          return;
        }
        if (typeof o == "object" && !(0, i.alwaysValidSchema)(u, o)) {
          const I = s.name("valid");
          w.removeAdditional === "failing" ? (l(h, I, !1), s.if((0, t.not)(I), () => {
            a.reset(), y(h);
          })) : (l(h, I), f || s.if((0, t.not)(I), () => s.break()));
        }
      }
      function l(h, I, A) {
        const $ = {
          keyword: "additionalProperties",
          dataProp: h,
          dataPropType: i.Type.Str
        };
        A === !1 && Object.assign($, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), a.subschema($, I);
      }
    }
  };
  return ni.default = r, ni;
}
var ii = {}, oo;
function gu() {
  if (oo) return ii;
  oo = 1, Object.defineProperty(ii, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ wn(), t = /* @__PURE__ */ Ye(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ sd(), c = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: a, schema: s, parentSchema: o, data: p, it: m } = r;
      m.opts.removeAdditional === "all" && o.additionalProperties === void 0 && i.default.code(new e.KeywordCxt(m, i.default, "additionalProperties"));
      const g = (0, t.allSchemaProperties)(s);
      for (const b of g)
        m.definedProperties.add(b);
      m.opts.unevaluated && g.length && m.props !== !0 && (m.props = n.mergeEvaluated.props(a, (0, n.toHash)(g), m.props));
      const u = g.filter((b) => !(0, n.alwaysValidSchema)(m, s[b]));
      if (u.length === 0)
        return;
      const f = a.name("valid");
      for (const b of u)
        w(b) ? x(b) : (a.if((0, t.propertyInData)(a, p, b, m.opts.ownProperties)), x(b), m.allErrors || a.else().var(f, !0), a.endIf()), r.it.definedProperties.add(b), r.ok(f);
      function w(b) {
        return m.opts.useDefaults && !m.compositeRule && s[b].default !== void 0;
      }
      function x(b) {
        r.subschema({
          keyword: "properties",
          schemaProp: b,
          dataProp: b
        }, f);
      }
    }
  };
  return ii.default = c, ii;
}
var ri = {}, co;
function vu() {
  if (co) return ri;
  co = 1, Object.defineProperty(ri, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ye(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie(), c = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: a, schema: s, data: o, parentSchema: p, it: m } = r, { opts: g } = m, u = (0, e.allSchemaProperties)(s), f = u.filter((d) => (0, n.alwaysValidSchema)(m, s[d]));
      if (u.length === 0 || f.length === u.length && (!m.opts.unevaluated || m.props === !0))
        return;
      const w = g.strictSchema && !g.allowMatchingProperties && p.properties, x = a.name("valid");
      m.props !== !0 && !(m.props instanceof t.Name) && (m.props = (0, i.evaluatedPropsToName)(a, m.props));
      const { props: b } = m;
      S();
      function S() {
        for (const d of u)
          w && v(d), m.allErrors ? y(d) : (a.var(x, !0), y(d), a.if(x));
      }
      function v(d) {
        for (const l in w)
          new RegExp(d).test(l) && (0, n.checkStrictMode)(m, `property ${l} matches pattern ${d} (use allowMatchingProperties)`);
      }
      function y(d) {
        a.forIn("key", o, (l) => {
          a.if((0, t._)`${(0, e.usePattern)(r, d)}.test(${l})`, () => {
            const h = f.includes(d);
            h || r.subschema({
              keyword: "patternProperties",
              schemaProp: d,
              dataProp: l,
              dataPropType: i.Type.Str
            }, x), m.opts.unevaluated && b !== !0 ? a.assign((0, t._)`${b}[${l}]`, !0) : !h && !m.allErrors && a.if((0, t.not)(x), () => a.break());
          });
        });
      }
    }
  };
  return ri.default = c, ri;
}
var si = {}, lo;
function bu() {
  if (lo) return si;
  lo = 1, Object.defineProperty(si, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: i, schema: c, it: r } = n;
      if ((0, e.alwaysValidSchema)(r, c)) {
        n.fail();
        return;
      }
      const a = i.name("valid");
      n.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, a), n.failResult(a, () => n.reset(), () => n.error());
    },
    error: { message: "must NOT be valid" }
  };
  return si.default = t, si;
}
var ai = {}, uo;
function wu() {
  if (uo) return ai;
  uo = 1, Object.defineProperty(ai, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Ye()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return ai.default = t, ai;
}
var oi = {}, po;
function xu() {
  if (po) return oi;
  po = 1, Object.defineProperty(oi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), i = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: c }) => (0, e._)`{passingSchemas: ${c.passing}}`
    },
    code(c) {
      const { gen: r, schema: a, parentSchema: s, it: o } = c;
      if (!Array.isArray(a))
        throw new Error("ajv implementation error");
      if (o.opts.discriminator && s.discriminator)
        return;
      const p = a, m = r.let("valid", !1), g = r.let("passing", null), u = r.name("_valid");
      c.setParams({ passing: g }), r.block(f), c.result(m, () => c.reset(), () => c.error(!0));
      function f() {
        p.forEach((w, x) => {
          let b;
          (0, t.alwaysValidSchema)(o, w) ? r.var(u, !0) : b = c.subschema({
            keyword: "oneOf",
            schemaProp: x,
            compositeRule: !0
          }, u), x > 0 && r.if((0, e._)`${u} && ${m}`).assign(m, !1).assign(g, (0, e._)`[${g}, ${x}]`).else(), r.if(u, () => {
            r.assign(m, !0), r.assign(g, x), b && c.mergeEvaluated(b, e.Name);
          });
        });
      }
    }
  };
  return oi.default = i, oi;
}
var ci = {}, fo;
function Su() {
  if (fo) return ci;
  fo = 1, Object.defineProperty(ci, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: i, schema: c, it: r } = n;
      if (!Array.isArray(c))
        throw new Error("ajv implementation error");
      const a = i.name("valid");
      c.forEach((s, o) => {
        if ((0, e.alwaysValidSchema)(r, s))
          return;
        const p = n.subschema({ keyword: "allOf", schemaProp: o }, a);
        n.ok(a), n.mergeEvaluated(p);
      });
    }
  };
  return ci.default = t, ci;
}
var di = {}, ho;
function Iu() {
  if (ho) return di;
  ho = 1, Object.defineProperty(di, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), i = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: r }) => (0, e.str)`must match "${r.ifClause}" schema`,
      params: ({ params: r }) => (0, e._)`{failingKeyword: ${r.ifClause}}`
    },
    code(r) {
      const { gen: a, parentSchema: s, it: o } = r;
      s.then === void 0 && s.else === void 0 && (0, t.checkStrictMode)(o, '"if" without "then" and "else" is ignored');
      const p = c(o, "then"), m = c(o, "else");
      if (!p && !m)
        return;
      const g = a.let("valid", !0), u = a.name("_valid");
      if (f(), r.reset(), p && m) {
        const x = a.let("ifClause");
        r.setParams({ ifClause: x }), a.if(u, w("then", x), w("else", x));
      } else p ? a.if(u, w("then")) : a.if((0, e.not)(u), w("else"));
      r.pass(g, () => r.error(!0));
      function f() {
        const x = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, u);
        r.mergeEvaluated(x);
      }
      function w(x, b) {
        return () => {
          const S = r.subschema({ keyword: x }, u);
          a.assign(g, u), r.mergeValidEvaluated(S, g), b ? a.assign(b, (0, e._)`${x}`) : r.setParams({ ifClause: x });
        };
      }
    }
  };
  function c(r, a) {
    const s = r.schema[a];
    return s !== void 0 && !(0, t.alwaysValidSchema)(r, s);
  }
  return di.default = i, di;
}
var li = {}, mo;
function Au() {
  if (mo) return li;
  mo = 1, Object.defineProperty(li, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: i, it: c }) {
      i.if === void 0 && (0, e.checkStrictMode)(c, `"${n}" without "if" is ignored`);
    }
  };
  return li.default = t, li;
}
var yo;
function ad() {
  if (yo) return Wn;
  yo = 1, Object.defineProperty(Wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ id(), t = /* @__PURE__ */ fu(), n = /* @__PURE__ */ rd(), i = /* @__PURE__ */ hu(), c = /* @__PURE__ */ mu(), r = /* @__PURE__ */ Ms(), a = /* @__PURE__ */ yu(), s = /* @__PURE__ */ sd(), o = /* @__PURE__ */ gu(), p = /* @__PURE__ */ vu(), m = /* @__PURE__ */ bu(), g = /* @__PURE__ */ wu(), u = /* @__PURE__ */ xu(), f = /* @__PURE__ */ Su(), w = /* @__PURE__ */ Iu(), x = /* @__PURE__ */ Au();
  function b(S = !1) {
    const v = [
      // any
      m.default,
      g.default,
      u.default,
      f.default,
      w.default,
      x.default,
      // object
      a.default,
      s.default,
      r.default,
      o.default,
      p.default
    ];
    return S ? v.push(t.default, i.default) : v.push(e.default, n.default), v.push(c.default), v;
  }
  return Wn.default = b, Wn;
}
var ui = {}, Ut = {}, go;
function od() {
  if (go) return Ut;
  go = 1, Object.defineProperty(Ut, "__esModule", { value: !0 }), Ut.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Xe(), n = /* @__PURE__ */ Ki(), i = /* @__PURE__ */ Es(), c = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (s) => r(s, s.schema)
  };
  function r(s, o) {
    const { gen: p, it: m } = s;
    m.schemaEnv.root.dynamicAnchors[o] = !0;
    const g = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(o)}`, u = m.errSchemaPath === "#" ? m.validateName : a(s);
    p.if((0, e._)`!${g}`, () => p.assign(g, u));
  }
  Ut.dynamicAnchor = r;
  function a(s) {
    const { schemaEnv: o, schema: p, self: m } = s.it, { root: g, baseId: u, localRefs: f, meta: w } = o.root, { schemaId: x } = m.opts, b = new n.SchemaEnv({ schema: p, schemaId: x, root: g, baseId: u, localRefs: f, meta: w });
    return n.compileSchema.call(m, b), (0, i.getValidate)(s, b);
  }
  return Ut.default = c, Ut;
}
var Gt = {}, vo;
function cd() {
  if (vo) return Gt;
  vo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 }), Gt.dynamicRef = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Xe(), n = /* @__PURE__ */ Es(), i = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => c(r, r.schema)
  };
  function c(r, a) {
    const { gen: s, keyword: o, it: p } = r;
    if (a[0] !== "#")
      throw new Error(`"${o}" only supports hash fragment reference`);
    const m = a.slice(1);
    if (p.allErrors)
      g();
    else {
      const f = s.let("valid", !1);
      g(f), r.ok(f);
    }
    function g(f) {
      if (p.schemaEnv.root.dynamicAnchors[m]) {
        const w = s.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(m)}`);
        s.if(w, u(w, f), u(p.validateName, f));
      } else
        u(p.validateName, f)();
    }
    function u(f, w) {
      return w ? () => s.block(() => {
        (0, n.callRef)(r, f), s.let(w, !0);
      }) : () => (0, n.callRef)(r, f);
    }
  }
  return Gt.dynamicRef = c, Gt.default = i, Gt;
}
var pi = {}, bo;
function qu() {
  if (bo) return pi;
  bo = 1, Object.defineProperty(pi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ od(), t = /* @__PURE__ */ ie(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(i) {
      i.schema ? (0, e.dynamicAnchor)(i, "") : (0, t.checkStrictMode)(i.it, "$recursiveAnchor: false is ignored");
    }
  };
  return pi.default = n, pi;
}
var fi = {}, wo;
function Ru() {
  if (wo) return fi;
  wo = 1, Object.defineProperty(fi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ cd(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return fi.default = t, fi;
}
var xo;
function ju() {
  if (xo) return ui;
  xo = 1, Object.defineProperty(ui, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ od(), t = /* @__PURE__ */ cd(), n = /* @__PURE__ */ qu(), i = /* @__PURE__ */ Ru(), c = [e.default, t.default, n.default, i.default];
  return ui.default = c, ui;
}
var hi = {}, mi = {}, So;
function $u() {
  if (So) return mi;
  So = 1, Object.defineProperty(mi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ms(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return mi.default = t, mi;
}
var yi = {}, Io;
function _u() {
  if (Io) return yi;
  Io = 1, Object.defineProperty(yi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ms(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return yi.default = t, yi;
}
var gi = {}, Ao;
function Pu() {
  if (Ao) return gi;
  Ao = 1, Object.defineProperty(gi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: i, it: c }) {
      i.contains === void 0 && (0, e.checkStrictMode)(c, `"${n}" without "contains" is ignored`);
    }
  };
  return gi.default = t, gi;
}
var qo;
function Tu() {
  if (qo) return hi;
  qo = 1, Object.defineProperty(hi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $u(), t = /* @__PURE__ */ _u(), n = /* @__PURE__ */ Pu(), i = [e.default, t.default, n.default];
  return hi.default = i, hi;
}
var vi = {}, bi = {}, Ro;
function Cu() {
  if (Ro) return bi;
  Ro = 1, Object.defineProperty(bi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Xe(), c = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: r }) => (0, e._)`{unevaluatedProperty: ${r.unevaluatedProperty}}`
    },
    code(r) {
      const { gen: a, schema: s, data: o, errsCount: p, it: m } = r;
      if (!p)
        throw new Error("ajv implementation error");
      const { allErrors: g, props: u } = m;
      u instanceof e.Name ? a.if((0, e._)`${u} !== true`, () => a.forIn("key", o, (b) => a.if(w(u, b), () => f(b)))) : u !== !0 && a.forIn("key", o, (b) => u === void 0 ? f(b) : a.if(x(u, b), () => f(b))), m.props = !0, r.ok((0, e._)`${p} === ${n.default.errors}`);
      function f(b) {
        if (s === !1) {
          r.setParams({ unevaluatedProperty: b }), r.error(), g || a.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(m, s)) {
          const S = a.name("valid");
          r.subschema({
            keyword: "unevaluatedProperties",
            dataProp: b,
            dataPropType: t.Type.Str
          }, S), g || a.if((0, e.not)(S), () => a.break());
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
  return bi.default = c, bi;
}
var wi = {}, jo;
function Eu() {
  if (jo) return wi;
  jo = 1, Object.defineProperty(wi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), i = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: c } }) => (0, e.str)`must NOT have more than ${c} items`,
      params: ({ params: { len: c } }) => (0, e._)`{limit: ${c}}`
    },
    code(c) {
      const { gen: r, schema: a, data: s, it: o } = c, p = o.items || 0;
      if (p === !0)
        return;
      const m = r.const("len", (0, e._)`${s}.length`);
      if (a === !1)
        c.setParams({ len: p }), c.fail((0, e._)`${m} > ${p}`);
      else if (typeof a == "object" && !(0, t.alwaysValidSchema)(o, a)) {
        const u = r.var("valid", (0, e._)`${m} <= ${p}`);
        r.if((0, e.not)(u), () => g(u, p)), c.ok(u);
      }
      o.items = !0;
      function g(u, f) {
        r.forRange("i", f, m, (w) => {
          c.subschema({ keyword: "unevaluatedItems", dataProp: w, dataPropType: t.Type.Num }, u), o.allErrors || r.if((0, e.not)(u), () => r.break());
        });
      }
    }
  };
  return wi.default = i, wi;
}
var $o;
function ku() {
  if ($o) return vi;
  $o = 1, Object.defineProperty(vi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Cu(), t = /* @__PURE__ */ Eu(), n = [e.default, t.default];
  return vi.default = n, vi;
}
var xi = {}, Si = {}, _o;
function Mu() {
  if (_o) return Si;
  _o = 1, Object.defineProperty(Si, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, e.str)`must match format "${i}"`,
      params: ({ schemaCode: i }) => (0, e._)`{format: ${i}}`
    },
    code(i, c) {
      const { gen: r, data: a, $data: s, schema: o, schemaCode: p, it: m } = i, { opts: g, errSchemaPath: u, schemaEnv: f, self: w } = m;
      if (!g.validateFormats)
        return;
      s ? x() : b();
      function x() {
        const S = r.scopeValue("formats", {
          ref: w.formats,
          code: g.code.formats
        }), v = r.const("fDef", (0, e._)`${S}[${p}]`), y = r.let("fType"), d = r.let("format");
        r.if((0, e._)`typeof ${v} == "object" && !(${v} instanceof RegExp)`, () => r.assign(y, (0, e._)`${v}.type || "string"`).assign(d, (0, e._)`${v}.validate`), () => r.assign(y, (0, e._)`"string"`).assign(d, v)), i.fail$data((0, e.or)(l(), h()));
        function l() {
          return g.strictSchema === !1 ? e.nil : (0, e._)`${p} && !${d}`;
        }
        function h() {
          const I = f.$async ? (0, e._)`(${v}.async ? await ${d}(${a}) : ${d}(${a}))` : (0, e._)`${d}(${a})`, A = (0, e._)`(typeof ${d} == "function" ? ${I} : ${d}.test(${a}))`;
          return (0, e._)`${d} && ${d} !== true && ${y} === ${c} && !${A}`;
        }
      }
      function b() {
        const S = w.formats[o];
        if (!S) {
          l();
          return;
        }
        if (S === !0)
          return;
        const [v, y, d] = h(S);
        v === c && i.pass(I());
        function l() {
          if (g.strictSchema === !1) {
            w.logger.warn(A());
            return;
          }
          throw new Error(A());
          function A() {
            return `unknown format "${o}" ignored in schema at path "${u}"`;
          }
        }
        function h(A) {
          const $ = A instanceof RegExp ? (0, e.regexpCode)(A) : g.code.formats ? (0, e._)`${g.code.formats}${(0, e.getProperty)(o)}` : void 0, C = r.scopeValue("formats", { key: o, ref: A, code: $ });
          return typeof A == "object" && !(A instanceof RegExp) ? [A.type || "string", A.validate, (0, e._)`${C}.validate`] : ["string", A, C];
        }
        function I() {
          if (typeof S == "object" && !(S instanceof RegExp) && S.async) {
            if (!f.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${d}(${a})`;
          }
          return typeof y == "function" ? (0, e._)`${d}(${a})` : (0, e._)`${d}.test(${a})`;
        }
      }
    }
  };
  return Si.default = n, Si;
}
var Po;
function dd() {
  if (Po) return xi;
  Po = 1, Object.defineProperty(xi, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Mu()).default];
  return xi.default = t, xi;
}
var Ct = {}, To;
function ld() {
  return To || (To = 1, Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.contentVocabulary = Ct.metadataVocabulary = void 0, Ct.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Ct.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Ct;
}
var Co;
function Ou() {
  if (Co) return Mn;
  Co = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ td(), t = /* @__PURE__ */ nd(), n = /* @__PURE__ */ ad(), i = /* @__PURE__ */ ju(), c = /* @__PURE__ */ Tu(), r = /* @__PURE__ */ ku(), a = /* @__PURE__ */ dd(), s = /* @__PURE__ */ ld(), o = [
    i.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    a.default,
    s.metadataVocabulary,
    s.contentVocabulary,
    c.default,
    r.default
  ];
  return Mn.default = o, Mn;
}
var Ii = {}, an = {}, Eo;
function Lu() {
  if (Eo) return an;
  Eo = 1, Object.defineProperty(an, "__esModule", { value: !0 }), an.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (an.DiscrError = e = {})), an;
}
var ko;
function ud() {
  if (ko) return Ii;
  ko = 1, Object.defineProperty(Ii, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Lu(), n = /* @__PURE__ */ Ki(), i = /* @__PURE__ */ xn(), c = /* @__PURE__ */ ie(), a = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: s, tagName: o } }) => s === t.DiscrError.Tag ? `tag "${o}" must be string` : `value of tag "${o}" must be in oneOf`,
      params: ({ params: { discrError: s, tag: o, tagName: p } }) => (0, e._)`{error: ${s}, tag: ${p}, tagValue: ${o}}`
    },
    code(s) {
      const { gen: o, data: p, schema: m, parentSchema: g, it: u } = s, { oneOf: f } = g;
      if (!u.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const w = m.propertyName;
      if (typeof w != "string")
        throw new Error("discriminator: requires propertyName");
      if (m.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!f)
        throw new Error("discriminator: requires oneOf keyword");
      const x = o.let("valid", !1), b = o.const("tag", (0, e._)`${p}${(0, e.getProperty)(w)}`);
      o.if((0, e._)`typeof ${b} == "string"`, () => S(), () => s.error(!1, { discrError: t.DiscrError.Tag, tag: b, tagName: w })), s.ok(x);
      function S() {
        const d = y();
        o.if(!1);
        for (const l in d)
          o.elseIf((0, e._)`${b} === ${l}`), o.assign(x, v(d[l]));
        o.else(), s.error(!1, { discrError: t.DiscrError.Mapping, tag: b, tagName: w }), o.endIf();
      }
      function v(d) {
        const l = o.name("valid"), h = s.subschema({ keyword: "oneOf", schemaProp: d }, l);
        return s.mergeEvaluated(h, e.Name), l;
      }
      function y() {
        var d;
        const l = {}, h = A(g);
        let I = !0;
        for (let M = 0; M < f.length; M++) {
          let E = f[M];
          if (E?.$ref && !(0, c.schemaHasRulesButRef)(E, u.self.RULES)) {
            const P = E.$ref;
            if (E = n.resolveRef.call(u.self, u.schemaEnv.root, u.baseId, P), E instanceof n.SchemaEnv && (E = E.schema), E === void 0)
              throw new i.default(u.opts.uriResolver, u.baseId, P);
          }
          const j = (d = E?.properties) === null || d === void 0 ? void 0 : d[w];
          if (typeof j != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${w}"`);
          I = I && (h || A(E)), $(j, M);
        }
        if (!I)
          throw new Error(`discriminator: "${w}" must be required`);
        return l;
        function A({ required: M }) {
          return Array.isArray(M) && M.includes(w);
        }
        function $(M, E) {
          if (M.const)
            C(M.const, E);
          else if (M.enum)
            for (const j of M.enum)
              C(j, E);
          else
            throw new Error(`discriminator: "properties/${w}" must have "const" or "enum"`);
        }
        function C(M, E) {
          if (typeof M != "string" || M in l)
            throw new Error(`discriminator: "${w}" values must be unique strings`);
          l[M] = E;
        }
      }
    }
  };
  return Ii.default = a, Ii;
}
var Ai = {};
const Nu = "https://json-schema.org/draft/2020-12/schema", Du = "https://json-schema.org/draft/2020-12/schema", zu = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Vu = "meta", Uu = "Core and Validation specifications meta-schema", Gu = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Fu = ["object", "boolean"], Bu = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Zu = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Hu = {
  $schema: Nu,
  $id: Du,
  $vocabulary: zu,
  $dynamicAnchor: Vu,
  title: Uu,
  allOf: Gu,
  type: Fu,
  $comment: Bu,
  properties: Zu
}, Ju = "https://json-schema.org/draft/2020-12/schema", Ku = "https://json-schema.org/draft/2020-12/meta/applicator", Qu = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Wu = "meta", Xu = "Applicator vocabulary meta-schema", Yu = ["object", "boolean"], ep = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, tp = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, np = {
  $schema: Ju,
  $id: Ku,
  $vocabulary: Qu,
  $dynamicAnchor: Wu,
  title: Xu,
  type: Yu,
  properties: ep,
  $defs: tp
}, ip = "https://json-schema.org/draft/2020-12/schema", rp = "https://json-schema.org/draft/2020-12/meta/unevaluated", sp = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, ap = "meta", op = "Unevaluated applicator vocabulary meta-schema", cp = ["object", "boolean"], dp = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, lp = {
  $schema: ip,
  $id: rp,
  $vocabulary: sp,
  $dynamicAnchor: ap,
  title: op,
  type: cp,
  properties: dp
}, up = "https://json-schema.org/draft/2020-12/schema", pp = "https://json-schema.org/draft/2020-12/meta/content", fp = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, hp = "meta", mp = "Content vocabulary meta-schema", yp = ["object", "boolean"], gp = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, vp = {
  $schema: up,
  $id: pp,
  $vocabulary: fp,
  $dynamicAnchor: hp,
  title: mp,
  type: yp,
  properties: gp
}, bp = "https://json-schema.org/draft/2020-12/schema", wp = "https://json-schema.org/draft/2020-12/meta/core", xp = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Sp = "meta", Ip = "Core vocabulary meta-schema", Ap = ["object", "boolean"], qp = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Rp = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, jp = {
  $schema: bp,
  $id: wp,
  $vocabulary: xp,
  $dynamicAnchor: Sp,
  title: Ip,
  type: Ap,
  properties: qp,
  $defs: Rp
}, $p = "https://json-schema.org/draft/2020-12/schema", _p = "https://json-schema.org/draft/2020-12/meta/format-annotation", Pp = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Tp = "meta", Cp = "Format vocabulary meta-schema for annotation results", Ep = ["object", "boolean"], kp = { format: { type: "string" } }, Mp = {
  $schema: $p,
  $id: _p,
  $vocabulary: Pp,
  $dynamicAnchor: Tp,
  title: Cp,
  type: Ep,
  properties: kp
}, Op = "https://json-schema.org/draft/2020-12/schema", Lp = "https://json-schema.org/draft/2020-12/meta/meta-data", Np = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Dp = "meta", zp = "Meta-data vocabulary meta-schema", Vp = ["object", "boolean"], Up = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Gp = {
  $schema: Op,
  $id: Lp,
  $vocabulary: Np,
  $dynamicAnchor: Dp,
  title: zp,
  type: Vp,
  properties: Up
}, Fp = "https://json-schema.org/draft/2020-12/schema", Bp = "https://json-schema.org/draft/2020-12/meta/validation", Zp = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Hp = "meta", Jp = "Validation vocabulary meta-schema", Kp = ["object", "boolean"], Qp = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Wp = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Xp = {
  $schema: Fp,
  $id: Bp,
  $vocabulary: Zp,
  $dynamicAnchor: Hp,
  title: Jp,
  type: Kp,
  properties: Qp,
  $defs: Wp
};
var Mo;
function Yp() {
  if (Mo) return Ai;
  Mo = 1, Object.defineProperty(Ai, "__esModule", { value: !0 });
  const e = Hu, t = np, n = lp, i = vp, c = jp, r = Mp, a = Gp, s = Xp, o = ["/properties"];
  function p(m) {
    return [
      e,
      t,
      n,
      i,
      c,
      g(this, r),
      a,
      g(this, s)
    ].forEach((u) => this.addMetaSchema(u, void 0, !1)), this;
    function g(u, f) {
      return m ? u.$dataMetaSchema(f, o) : f;
    }
  }
  return Ai.default = p, Ai;
}
var Oo;
function ef() {
  return Oo || (Oo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ ed(), i = /* @__PURE__ */ Ou(), c = /* @__PURE__ */ ud(), r = /* @__PURE__ */ Yp(), a = "https://json-schema.org/draft/2020-12/schema";
    class s extends n.default {
      constructor(f = {}) {
        super({
          ...f,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), i.default.forEach((f) => this.addVocabulary(f)), this.opts.discriminator && this.addKeyword(c.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: f, meta: w } = this.opts;
        w && (r.default.call(this, f), this.refs["http://json-schema.org/schema"] = a);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(a) ? a : void 0);
      }
    }
    t.Ajv2020 = s, e.exports = t = s, e.exports.Ajv2020 = s, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = s;
    var o = /* @__PURE__ */ wn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return o.KeywordCxt;
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
    var m = /* @__PURE__ */ Ji();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return m.default;
    } });
    var g = /* @__PURE__ */ xn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return g.default;
    } });
  })(Pn, Pn.exports)), Pn.exports;
}
var tf = /* @__PURE__ */ ef();
const nf = /* @__PURE__ */ Cs(tf);
var qi = { exports: {} }, Sr = {}, Lo;
function rf() {
  return Lo || (Lo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(M, E) {
      return { validate: M, compare: E };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(r, a),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: t(o(!0), p),
      "date-time": t(u(!0), f),
      "iso-time": t(o(), m),
      "iso-date-time": t(u(), w),
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
      regex: C,
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
      int32: { type: "number", validate: h },
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
      date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, a),
      time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, p),
      "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, f),
      "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, m),
      "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, w),
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    }, e.formatNames = Object.keys(e.fullFormats);
    function n(M) {
      return M % 4 === 0 && (M % 100 !== 0 || M % 400 === 0);
    }
    const i = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, c = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function r(M) {
      const E = i.exec(M);
      if (!E)
        return !1;
      const j = +E[1], P = +E[2], z = +E[3];
      return P >= 1 && P <= 12 && z >= 1 && z <= (P === 2 && n(j) ? 29 : c[P]);
    }
    function a(M, E) {
      if (M && E)
        return M > E ? 1 : M < E ? -1 : 0;
    }
    const s = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function o(M) {
      return function(j) {
        const P = s.exec(j);
        if (!P)
          return !1;
        const z = +P[1], _ = +P[2], Z = +P[3], L = P[4], F = P[5] === "-" ? -1 : 1, k = +(P[6] || 0), O = +(P[7] || 0);
        if (k > 23 || O > 59 || M && !L)
          return !1;
        if (z <= 23 && _ <= 59 && Z < 60)
          return !0;
        const V = _ - O * F, N = z - k * F - (V < 0 ? 1 : 0);
        return (N === 23 || N === -1) && (V === 59 || V === -1) && Z < 61;
      };
    }
    function p(M, E) {
      if (!(M && E))
        return;
      const j = (/* @__PURE__ */ new Date("2020-01-01T" + M)).valueOf(), P = (/* @__PURE__ */ new Date("2020-01-01T" + E)).valueOf();
      if (j && P)
        return j - P;
    }
    function m(M, E) {
      if (!(M && E))
        return;
      const j = s.exec(M), P = s.exec(E);
      if (j && P)
        return M = j[1] + j[2] + j[3], E = P[1] + P[2] + P[3], M > E ? 1 : M < E ? -1 : 0;
    }
    const g = /t|\s/i;
    function u(M) {
      const E = o(M);
      return function(P) {
        const z = P.split(g);
        return z.length === 2 && r(z[0]) && E(z[1]);
      };
    }
    function f(M, E) {
      if (!(M && E))
        return;
      const j = new Date(M).valueOf(), P = new Date(E).valueOf();
      if (j && P)
        return j - P;
    }
    function w(M, E) {
      if (!(M && E))
        return;
      const [j, P] = M.split(g), [z, _] = E.split(g), Z = a(j, z);
      if (Z !== void 0)
        return Z || p(P, _);
    }
    const x = /\/|:/, b = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function S(M) {
      return x.test(M) && b.test(M);
    }
    const v = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function y(M) {
      return v.lastIndex = 0, v.test(M);
    }
    const d = -2147483648, l = 2 ** 31 - 1;
    function h(M) {
      return Number.isInteger(M) && M <= l && M >= d;
    }
    function I(M) {
      return Number.isInteger(M);
    }
    function A() {
      return !0;
    }
    const $ = /[^\\]\\Z/;
    function C(M) {
      if ($.test(M))
        return !1;
      try {
        return new RegExp(M), !0;
      } catch {
        return !1;
      }
    }
  })(Sr)), Sr;
}
var Ir = {}, Ri = { exports: {} }, ji = {}, No;
function sf() {
  if (No) return ji;
  No = 1, Object.defineProperty(ji, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ td(), t = /* @__PURE__ */ nd(), n = /* @__PURE__ */ ad(), i = /* @__PURE__ */ dd(), c = /* @__PURE__ */ ld(), r = [
    e.default,
    t.default,
    (0, n.default)(),
    i.default,
    c.metadataVocabulary,
    c.contentVocabulary
  ];
  return ji.default = r, ji;
}
const af = "http://json-schema.org/draft-07/schema#", of = "http://json-schema.org/draft-07/schema#", cf = "Core schema meta-schema", df = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, lf = ["object", "boolean"], uf = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, pf = {
  $schema: af,
  $id: of,
  title: cf,
  definitions: df,
  type: lf,
  properties: uf,
  default: !0
};
var Do;
function ff() {
  return Do || (Do = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const n = /* @__PURE__ */ ed(), i = /* @__PURE__ */ sf(), c = /* @__PURE__ */ ud(), r = pf, a = ["/properties"], s = "http://json-schema.org/draft-07/schema";
    class o extends n.default {
      _addVocabularies() {
        super._addVocabularies(), i.default.forEach((w) => this.addVocabulary(w)), this.opts.discriminator && this.addKeyword(c.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta)
          return;
        const w = this.opts.$data ? this.$dataMetaSchema(r, a) : r;
        this.addMetaSchema(w, s, !1), this.refs["http://json-schema.org/schema"] = s;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv = o, e.exports = t = o, e.exports.Ajv = o, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = o;
    var p = /* @__PURE__ */ wn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return p.KeywordCxt;
    } });
    var m = /* @__PURE__ */ te();
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
    var g = /* @__PURE__ */ Ji();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return g.default;
    } });
    var u = /* @__PURE__ */ xn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return u.default;
    } });
  })(Ri, Ri.exports)), Ri.exports;
}
var zo;
function hf() {
  return zo || (zo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = /* @__PURE__ */ ff(), n = /* @__PURE__ */ te(), i = n.operators, c = {
      formatMaximum: { okStr: "<=", ok: i.LTE, fail: i.GT },
      formatMinimum: { okStr: ">=", ok: i.GTE, fail: i.LT },
      formatExclusiveMaximum: { okStr: "<", ok: i.LT, fail: i.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: i.GT, fail: i.LTE }
    }, r = {
      message: ({ keyword: s, schemaCode: o }) => (0, n.str)`should be ${c[s].okStr} ${o}`,
      params: ({ keyword: s, schemaCode: o }) => (0, n._)`{comparison: ${c[s].okStr}, limit: ${o}}`
    };
    e.formatLimitDefinition = {
      keyword: Object.keys(c),
      type: "string",
      schemaType: "string",
      $data: !0,
      error: r,
      code(s) {
        const { gen: o, data: p, schemaCode: m, keyword: g, it: u } = s, { opts: f, self: w } = u;
        if (!f.validateFormats)
          return;
        const x = new t.KeywordCxt(u, w.RULES.all.format.definition, "format");
        x.$data ? b() : S();
        function b() {
          const y = o.scopeValue("formats", {
            ref: w.formats,
            code: f.code.formats
          }), d = o.const("fmt", (0, n._)`${y}[${x.schemaCode}]`);
          s.fail$data((0, n.or)((0, n._)`typeof ${d} != "object"`, (0, n._)`${d} instanceof RegExp`, (0, n._)`typeof ${d}.compare != "function"`, v(d)));
        }
        function S() {
          const y = x.schema, d = w.formats[y];
          if (!d || d === !0)
            return;
          if (typeof d != "object" || d instanceof RegExp || typeof d.compare != "function")
            throw new Error(`"${g}": format "${y}" does not define "compare" function`);
          const l = o.scopeValue("formats", {
            key: y,
            ref: d,
            code: f.code.formats ? (0, n._)`${f.code.formats}${(0, n.getProperty)(y)}` : void 0
          });
          s.fail$data(v(l));
        }
        function v(y) {
          return (0, n._)`${y}.compare(${p}, ${m}) ${c[g].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const a = (s) => (s.addKeyword(e.formatLimitDefinition), s);
    e.default = a;
  })(Ir)), Ir;
}
var Vo;
function mf() {
  return Vo || (Vo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const n = rf(), i = hf(), c = /* @__PURE__ */ te(), r = new c.Name("fullFormats"), a = new c.Name("fastFormats"), s = (p, m = { keywords: !0 }) => {
      if (Array.isArray(m))
        return o(p, m, n.fullFormats, r), p;
      const [g, u] = m.mode === "fast" ? [n.fastFormats, a] : [n.fullFormats, r], f = m.formats || n.formatNames;
      return o(p, f, g, u), m.keywords && (0, i.default)(p), p;
    };
    s.get = (p, m = "full") => {
      const u = (m === "fast" ? n.fastFormats : n.fullFormats)[p];
      if (!u)
        throw new Error(`Unknown format "${p}"`);
      return u;
    };
    function o(p, m, g, u) {
      var f, w;
      (f = (w = p.opts.code).formats) !== null && f !== void 0 || (w.formats = (0, c._)`require("ajv-formats/dist/formats").${u}`);
      for (const x of m)
        p.addFormat(x, g[x]);
    }
    e.exports = t = s, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = s;
  })(qi, qi.exports)), qi.exports;
}
var yf = mf();
const gf = /* @__PURE__ */ Cs(yf);
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const vf = {
  p: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,
  n: 0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,
  a: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,
  d: 0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,
  Gx: 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,
  Gy: 0x6666666666666666666666666666666666666666666666666666666666666658n
}, { p: Se, n: Ei, Gx: Uo, Gy: Go, a: Ar, d: qr } = vf, bf = 8n, pn = 32, gs = 64, De = (e = "") => {
  throw new Error(e);
}, wf = (e) => typeof e == "bigint", pd = (e) => typeof e == "string", xf = (e) => e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array", Xt = (e, t) => !xf(e) || typeof t == "number" && t > 0 && e.length !== t ? De("Uint8Array expected") : e, Qi = (e) => new Uint8Array(e), Os = (e) => Uint8Array.from(e), fd = (e, t) => e.toString(16).padStart(t, "0"), Ls = (e) => Array.from(Xt(e)).map((t) => fd(t, 2)).join(""), ht = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 }, Fo = (e) => {
  if (e >= ht._0 && e <= ht._9)
    return e - ht._0;
  if (e >= ht.A && e <= ht.F)
    return e - (ht.A - 10);
  if (e >= ht.a && e <= ht.f)
    return e - (ht.a - 10);
}, Ns = (e) => {
  const t = "hex invalid";
  if (!pd(e))
    return De(t);
  const n = e.length, i = n / 2;
  if (n % 2)
    return De(t);
  const c = Qi(i);
  for (let r = 0, a = 0; r < i; r++, a += 2) {
    const s = Fo(e.charCodeAt(a)), o = Fo(e.charCodeAt(a + 1));
    if (s === void 0 || o === void 0)
      return De(t);
    c[r] = s * 16 + o;
  }
  return c;
}, ki = (e, t) => Xt(pd(e) ? Ns(e) : Os(Xt(e)), t), hd = () => globalThis?.crypto, Sf = () => hd()?.subtle ?? De("crypto.subtle must be defined"), vs = (...e) => {
  const t = Qi(e.reduce((i, c) => i + Xt(c).length, 0));
  let n = 0;
  return e.forEach((i) => {
    t.set(i, n), n += i.length;
  }), t;
}, If = (e = pn) => hd().getRandomValues(Qi(e)), Vi = BigInt, kt = (e, t, n, i = "bad number: out of range") => wf(e) && t <= e && e < n ? e : De(i), Y = (e, t = Se) => {
  const n = e % t;
  return n >= 0n ? n : t + n;
}, Af = (e) => Y(e, Ei), md = (e, t) => {
  (e === 0n || t <= 0n) && De("no inverse n=" + e + " mod=" + t);
  let n = Y(e, t), i = t, c = 0n, r = 1n;
  for (; n !== 0n; ) {
    const a = i / n, s = i % n, o = c - r * a;
    i = n, n = s, c = r, r = o;
  }
  return i === 1n ? Y(c, t) : De("no inverse");
}, Bo = (e) => e instanceof mt ? e : De("Point expected"), bs = 2n ** 256n, rt = class rt {
  constructor(t, n, i, c) {
    dt(this, "ex");
    dt(this, "ey");
    dt(this, "ez");
    dt(this, "et");
    const r = bs;
    this.ex = kt(t, 0n, r), this.ey = kt(n, 0n, r), this.ez = kt(i, 1n, r), this.et = kt(c, 0n, r), Object.freeze(this);
  }
  static fromAffine(t) {
    return new rt(t.x, t.y, 1n, Y(t.x * t.y));
  }
  /** RFC8032 5.1.3: Uint8Array to Point. */
  static fromBytes(t, n = !1) {
    const i = qr, c = Os(Xt(t, pn)), r = t[31];
    c[31] = r & -129;
    const a = Ds(c);
    kt(a, 0n, n ? bs : Se);
    const o = Y(a * a), p = Y(o - 1n), m = Y(i * o + 1n);
    let { isValid: g, value: u } = jf(p, m);
    g || De("bad point: y not sqrt");
    const f = (u & 1n) === 1n, w = (r & 128) !== 0;
    return !n && u === 0n && w && De("bad point: x==0, isLastByteOdd"), w !== f && (u = Y(-u)), new rt(u, a, 1n, Y(u * a));
  }
  /** Checks if the point is valid and on-curve. */
  assertValidity() {
    const t = Ar, n = qr, i = this;
    if (i.is0())
      throw new Error("bad point: ZERO");
    const { ex: c, ey: r, ez: a, et: s } = i, o = Y(c * c), p = Y(r * r), m = Y(a * a), g = Y(m * m), u = Y(o * t), f = Y(m * Y(u + p)), w = Y(g + Y(n * Y(o * p)));
    if (f !== w)
      throw new Error("bad point: equation left != right (1)");
    const x = Y(c * r), b = Y(a * s);
    if (x !== b)
      throw new Error("bad point: equation left != right (2)");
    return this;
  }
  /** Equality check: compare points P&Q. */
  equals(t) {
    const { ex: n, ey: i, ez: c } = this, { ex: r, ey: a, ez: s } = Bo(t), o = Y(n * s), p = Y(r * c), m = Y(i * s), g = Y(a * c);
    return o === p && m === g;
  }
  is0() {
    return this.equals(Bt);
  }
  /** Flip point over y coordinate. */
  negate() {
    return new rt(Y(-this.ex), this.ey, this.ez, Y(-this.et));
  }
  /** Point doubling. Complete formula. Cost: `4M + 4S + 1*a + 6add + 1*2`. */
  double() {
    const { ex: t, ey: n, ez: i } = this, c = Ar, r = Y(t * t), a = Y(n * n), s = Y(2n * Y(i * i)), o = Y(c * r), p = t + n, m = Y(Y(p * p) - r - a), g = o + a, u = g - s, f = o - a, w = Y(m * u), x = Y(g * f), b = Y(m * f), S = Y(u * g);
    return new rt(w, x, S, b);
  }
  /** Point addition. Complete formula. Cost: `8M + 1*k + 8add + 1*2`. */
  add(t) {
    const { ex: n, ey: i, ez: c, et: r } = this, { ex: a, ey: s, ez: o, et: p } = Bo(t), m = Ar, g = qr, u = Y(n * a), f = Y(i * s), w = Y(r * g * p), x = Y(c * o), b = Y((n + i) * (a + s) - u - f), S = Y(x - w), v = Y(x + w), y = Y(f - m * u), d = Y(b * S), l = Y(v * y), h = Y(b * y), I = Y(S * v);
    return new rt(d, l, I, h);
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
      return Bt;
    if (kt(t, 1n, Ei), t === 1n)
      return this;
    if (this.equals(Yt))
      return Of(t).p;
    let i = Bt, c = Yt;
    for (let r = this; t > 0n; r = r.double(), t >>= 1n)
      t & 1n ? i = i.add(r) : n && (c = c.add(r));
    return i;
  }
  /** Convert point to 2d xy affine point. (X, Y, Z) ∋ (x=X/Z, y=Y/Z) */
  toAffine() {
    const { ex: t, ey: n, ez: i } = this;
    if (this.equals(Bt))
      return { x: 0n, y: 1n };
    const c = md(i, Se);
    return Y(i * c) !== 1n && De("invalid inverse"), { x: Y(t * c), y: Y(n * c) };
  }
  toBytes() {
    const { x: t, y: n } = this.assertValidity().toAffine(), i = qf(n);
    return i[31] |= t & 1n ? 128 : 0, i;
  }
  toHex() {
    return Ls(this.toBytes());
  }
  // encode to hex string
  clearCofactor() {
    return this.multiply(Vi(bf), !1);
  }
  isSmallOrder() {
    return this.clearCofactor().is0();
  }
  isTorsionFree() {
    let t = this.multiply(Ei / 2n, !1).double();
    return Ei % 2n && (t = t.add(this)), t.is0();
  }
  static fromHex(t, n) {
    return rt.fromBytes(ki(t), n);
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
dt(rt, "BASE"), dt(rt, "ZERO");
let mt = rt;
const Yt = new mt(Uo, Go, 1n, Y(Uo * Go)), Bt = new mt(0n, 1n, 1n, 0n);
mt.BASE = Yt;
mt.ZERO = Bt;
const qf = (e) => Ns(fd(kt(e, 0n, bs), gs)).reverse(), Ds = (e) => Vi("0x" + Ls(Os(Xt(e)).reverse())), it = (e, t) => {
  let n = e;
  for (; t-- > 0n; )
    n *= n, n %= Se;
  return n;
}, Rf = (e) => {
  const n = e * e % Se * e % Se, i = it(n, 2n) * n % Se, c = it(i, 1n) * e % Se, r = it(c, 5n) * c % Se, a = it(r, 10n) * r % Se, s = it(a, 20n) * a % Se, o = it(s, 40n) * s % Se, p = it(o, 80n) * o % Se, m = it(p, 80n) * o % Se, g = it(m, 10n) * r % Se;
  return { pow_p_5_8: it(g, 2n) * e % Se, b2: n };
}, Zo = 0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n, jf = (e, t) => {
  const n = Y(t * t * t), i = Y(n * n * t), c = Rf(e * i).pow_p_5_8;
  let r = Y(e * n * c);
  const a = Y(t * r * r), s = r, o = Y(r * Zo), p = a === e, m = a === Y(-e), g = a === Y(-e * Zo);
  return p && (r = s), (m || g) && (r = o), (Y(r) & 1n) === 1n && (r = Y(-r)), { isValid: p || m, value: r };
}, $f = (e) => Af(Ds(e)), _f = (...e) => Ef.sha512Async(...e), Pf = (e) => _f(e.hashable).then(e.finish), yd = { zip215: !0 }, Tf = (e, t, n, i = yd) => {
  e = ki(e, gs), t = ki(t), n = ki(n, pn);
  const { zip215: c } = i;
  let r, a, s, o, p = Uint8Array.of();
  try {
    r = mt.fromHex(n, c), a = mt.fromHex(e.slice(0, pn), c), s = Ds(e.slice(pn, gs)), o = Yt.multiply(s, !1), p = vs(a.toBytes(), r.toBytes(), t);
  } catch {
  }
  return { hashable: p, finish: (g) => {
    if (o == null || !c && r.isSmallOrder())
      return !1;
    const u = $f(g);
    return a.add(r.multiply(u, !1)).add(o.negate()).clearCofactor().is0();
  } };
}, Cf = async (e, t, n, i = yd) => Pf(Tf(e, t, n, i)), Ef = {
  sha512Async: async (...e) => {
    const t = Sf(), n = vs(...e);
    return Qi(await t.digest("SHA-512", n.buffer));
  },
  sha512Sync: void 0,
  bytesToHex: Ls,
  hexToBytes: Ns,
  concatBytes: vs,
  mod: Y,
  invert: md,
  randomBytes: If
}, Ui = 8, kf = 256, gd = Math.ceil(kf / Ui) + 1, ws = 2 ** (Ui - 1), Mf = () => {
  const e = [];
  let t = Yt, n = t;
  for (let i = 0; i < gd; i++) {
    n = t, e.push(n);
    for (let c = 1; c < ws; c++)
      n = n.add(t), e.push(n);
    t = n.double();
  }
  return e;
};
let Ho;
const Jo = (e, t) => {
  const n = t.negate();
  return e ? n : t;
}, Of = (e) => {
  const t = Ho || (Ho = Mf());
  let n = Bt, i = Yt;
  const c = 2 ** Ui, r = c, a = Vi(c - 1), s = Vi(Ui);
  for (let o = 0; o < gd; o++) {
    let p = Number(e & a);
    e >>= s, p > ws && (p -= r, e += 1n);
    const m = o * ws, g = m, u = m + Math.abs(p) - 1, f = o % 2 !== 0, w = p < 0;
    p === 0 ? i = i.add(Jo(f, t[g])) : n = n.add(Jo(w, t[u]));
  }
  return { p: n, f: i };
};
var Rr = {}, jr, Ko;
function zs() {
  return Ko || (Ko = 1, jr = class vd {
    /**
     * Creates a new IdentifierIssuer. A IdentifierIssuer issues unique
     * identifiers, keeping track of any previously issued identifiers.
     *
     * @param prefix the prefix to use ('<prefix><counter>').
     * @param existing an existing Map to use.
     * @param counter the counter to use.
     */
    constructor(t, n = /* @__PURE__ */ new Map(), i = 0) {
      this.prefix = t, this._existing = n, this.counter = i;
    }
    /**
     * Copies this IdentifierIssuer.
     *
     * @return a copy of this IdentifierIssuer.
     */
    clone() {
      const { prefix: t, _existing: n, counter: i } = this;
      return new vd(t, new Map(n), i);
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
      const i = this.prefix + this.counter;
      return this.counter++, t && this._existing.set(t, i), i;
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
  }), jr;
}
var $r = {}, Qo;
function Lf() {
  return Qo || (Qo = 1, (function(e, t) {
    if (e.setImmediate)
      return;
    var n = 1, i = {}, c = !1, r = e.document, a;
    function s(v) {
      typeof v != "function" && (v = new Function("" + v));
      for (var y = new Array(arguments.length - 1), d = 0; d < y.length; d++)
        y[d] = arguments[d + 1];
      var l = { callback: v, args: y };
      return i[n] = l, a(n), n++;
    }
    function o(v) {
      delete i[v];
    }
    function p(v) {
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
    function m(v) {
      if (c)
        setTimeout(m, 0, v);
      else {
        var y = i[v];
        if (y) {
          c = !0;
          try {
            p(y);
          } finally {
            o(v), c = !1;
          }
        }
      }
    }
    function g() {
      a = function(v) {
        process.nextTick(function() {
          m(v);
        });
      };
    }
    function u() {
      if (e.postMessage && !e.importScripts) {
        var v = !0, y = e.onmessage;
        return e.onmessage = function() {
          v = !1;
        }, e.postMessage("", "*"), e.onmessage = y, v;
      }
    }
    function f() {
      var v = "setImmediate$" + Math.random() + "$", y = function(d) {
        d.source === e && typeof d.data == "string" && d.data.indexOf(v) === 0 && m(+d.data.slice(v.length));
      };
      e.addEventListener ? e.addEventListener("message", y, !1) : e.attachEvent("onmessage", y), a = function(d) {
        e.postMessage(v + d, "*");
      };
    }
    function w() {
      var v = new MessageChannel();
      v.port1.onmessage = function(y) {
        var d = y.data;
        m(d);
      }, a = function(y) {
        v.port2.postMessage(y);
      };
    }
    function x() {
      var v = r.documentElement;
      a = function(y) {
        var d = r.createElement("script");
        d.onreadystatechange = function() {
          m(y), d.onreadystatechange = null, v.removeChild(d), d = null;
        }, v.appendChild(d);
      };
    }
    function b() {
      a = function(v) {
        setTimeout(m, 0, v);
      };
    }
    var S = Object.getPrototypeOf && Object.getPrototypeOf(e);
    S = S && S.setTimeout ? S : e, {}.toString.call(e.process) === "[object process]" ? g() : u() ? f() : e.MessageChannel ? w() : r && "onreadystatechange" in r.createElement("script") ? x() : b(), S.setImmediate = s, S.clearImmediate = o;
  })(typeof self > "u" ? typeof da > "u" ? $r : da : self)), $r;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var _r, Wo;
function Wi() {
  if (Wo) return _r;
  Wo = 1, Lf();
  const e = self.crypto || self.msCrypto;
  return _r = class {
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
      const n = new TextEncoder().encode(this._content), i = new Uint8Array(
        await e.subtle.digest(this.algorithm, n)
      );
      let c = "";
      for (let r = 0; r < i.length; ++r)
        c += i[r].toString(16).padStart(2, "0");
      return c;
    }
  }, _r;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Pr, Xo;
function bd() {
  return Xo || (Xo = 1, Pr = class {
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
      const { current: t, dir: n } = this, i = t.slice();
      let c = null, r = 0;
      const a = t.length;
      for (let s = 0; s < a; ++s) {
        const o = t[s], p = n.get(o);
        (c === null || o > c) && (p && s > 0 && o > t[s - 1] || !p && s < a - 1 && o > t[s + 1]) && (c = o, r = s);
      }
      if (c === null)
        this.done = !0;
      else {
        const s = n.get(c) ? r - 1 : r + 1;
        t[r] = t[s], t[s] = c;
        for (const o of t)
          o > c && n.set(o, !n.get(o));
      }
      return i;
    }
  }), Pr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Tr, Yo;
function Vs() {
  if (Yo) return Tr;
  Yo = 1;
  const t = "http://www.w3.org/1999/02/22-rdf-syntax-ns#" + "langString", n = "http://www.w3.org/2001/XMLSchema#string", i = "NamedNode", c = "BlankNode", r = "Literal", a = "DefaultGraph", s = {};
  (() => {
    const f = "(?:<([^:]+:[^>]*)>)", x = "A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�" + "_", b = x + "0-9-·̀-ͯ‿-⁀", v = "(_:(?:[" + x + "0-9])(?:(?:[" + b + ".])*(?:[" + b + "]))?)", y = '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"', d = "(?:\\^\\^" + f + ")", h = "(?:" + y + "(?:" + d + "|" + "(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*))" + ")?)", I = "[ \\t]+", A = "[ \\t]*", $ = "(?:" + f + "|" + v + ")" + I, C = f + I, M = "(?:" + f + "|" + v + "|" + h + ")" + A, E = "(?:\\.|(?:(?:" + f + "|" + v + ")" + A + "\\.))";
    s.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g, s.empty = new RegExp("^" + A + "$"), s.quad = new RegExp(
      "^" + A + $ + C + M + E + A + "$"
    );
  })(), Tr = class Mi {
    /**
     * Parses RDF in the form of N-Quads.
     *
     * @param input the N-Quads input to parse.
     *
     * @return an RDF dataset (an array of quads per http://rdf.js.org/).
     */
    static parse(w) {
      const x = [], b = {}, S = w.split(s.eoln);
      let v = 0;
      for (const y of S) {
        if (v++, s.empty.test(y))
          continue;
        const d = y.match(s.quad);
        if (d === null)
          throw new Error("N-Quads parse error on line " + v + ".");
        const l = { subject: null, predicate: null, object: null, graph: null };
        if (d[1] !== void 0 ? l.subject = { termType: i, value: d[1] } : l.subject = { termType: c, value: d[2] }, l.predicate = { termType: i, value: d[3] }, d[4] !== void 0 ? l.object = { termType: i, value: d[4] } : d[5] !== void 0 ? l.object = { termType: c, value: d[5] } : (l.object = {
          termType: r,
          value: void 0,
          datatype: {
            termType: i
          }
        }, d[7] !== void 0 ? l.object.datatype.value = d[7] : d[8] !== void 0 ? (l.object.datatype.value = t, l.object.language = d[8]) : l.object.datatype.value = n, l.object.value = u(d[6])), d[9] !== void 0 ? l.graph = {
          termType: i,
          value: d[9]
        } : d[10] !== void 0 ? l.graph = {
          termType: c,
          value: d[10]
        } : l.graph = {
          termType: a,
          value: ""
        }, !(l.graph.value in b))
          b[l.graph.value] = [l], x.push(l);
        else {
          let h = !0;
          const I = b[l.graph.value];
          for (const A of I)
            if (o(A, l)) {
              h = !1;
              break;
            }
          h && (I.push(l), x.push(l));
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
      Array.isArray(w) || (w = Mi.legacyDatasetToQuads(w));
      const x = [];
      for (const b of w)
        x.push(Mi.serializeQuad(b));
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
      return w.termType === i ? v += `<${w.value}>` : v += `${w.value}`, v += ` <${x.value}> `, b.termType === i ? v += `<${b.value}>` : b.termType === c ? v += b.value : (v += `"${m(b.value)}"`, b.datatype.value === t ? b.language && (v += `@${b.language}`) : b.datatype.value !== n && (v += `^^<${b.datatype.value}>`)), S.termType === i ? v += ` <${S.value}>` : S.termType === c && (v += ` ${S.value}`), v += ` .
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
      return Mi.serializeQuadComponents(
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
        "blank node": c,
        IRI: i,
        literal: r
      };
      for (const S in w)
        w[S].forEach((y) => {
          const d = {};
          for (const l in y) {
            const h = y[l], I = {
              termType: b[h.type],
              value: h.value
            };
            I.termType === r && (I.datatype = {
              termType: i
            }, "datatype" in h && (I.datatype.value = h.datatype), "language" in h ? ("datatype" in h || (I.datatype.value = t), I.language = h.language) : "datatype" in h || (I.datatype.value = n)), d[l] = I;
          }
          S === "@default" ? d.graph = {
            termType: a,
            value: ""
          } : d.graph = {
            termType: S.startsWith("_:") ? c : i,
            value: S
          }, x.push(d);
        });
      return x;
    }
  };
  function o(f, w) {
    return !(f.subject.termType === w.subject.termType && f.object.termType === w.object.termType) || !(f.subject.value === w.subject.value && f.predicate.value === w.predicate.value && f.object.value === w.object.value) ? !1 : f.object.termType !== r ? !0 : f.object.datatype.termType === w.object.datatype.termType && f.object.language === w.object.language && f.object.datatype.value === w.object.datatype.value;
  }
  const p = /["\\\n\r]/g;
  function m(f) {
    return f.replace(p, function(w) {
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
  function u(f) {
    return f.replace(g, function(w, x, b, S) {
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
  return Tr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Cr, ec;
function wd() {
  if (ec) return Cr;
  ec = 1;
  const e = zs(), t = Wi(), n = bd(), i = Vs();
  Cr = class {
    constructor({
      createMessageDigest: a = () => new t("sha256"),
      canonicalIdMap: s = /* @__PURE__ */ new Map(),
      maxDeepIterations: o = 1 / 0
    } = {}) {
      this.name = "URDNA2015", this.blankNodeInfo = /* @__PURE__ */ new Map(), this.canonicalIssuer = new e("_:c14n", s), this.createMessageDigest = a, this.maxDeepIterations = o, this.quads = null, this.deepIterations = null;
    }
    // 4.4) Normalization Algorithm
    async main(a) {
      this.deepIterations = /* @__PURE__ */ new Map(), this.quads = a;
      for (const f of a)
        this._addBlankNodeQuadInfo({ quad: f, component: f.subject }), this._addBlankNodeQuadInfo({ quad: f, component: f.object }), this._addBlankNodeQuadInfo({ quad: f, component: f.graph });
      const s = /* @__PURE__ */ new Map(), o = [...this.blankNodeInfo.keys()];
      let p = 0;
      for (const f of o)
        ++p % 100 === 0 && await this._yield(), await this._hashAndTrackBlankNode({ id: f, hashToBlankNodes: s });
      const m = [...s.keys()].sort(), g = [];
      for (const f of m) {
        const w = s.get(f);
        if (w.length > 1) {
          g.push(w);
          continue;
        }
        const x = w[0];
        this.canonicalIssuer.getId(x);
      }
      for (const f of g) {
        const w = [];
        for (const x of f) {
          if (this.canonicalIssuer.hasId(x))
            continue;
          const b = new e("_:b");
          b.getId(x);
          const S = await this.hashNDegreeQuads(x, b);
          w.push(S);
        }
        w.sort(c);
        for (const x of w) {
          const b = x.issuer.getOldIds();
          for (const S of b)
            this.canonicalIssuer.getId(S);
        }
      }
      const u = [];
      for (const f of this.quads) {
        const w = i.serializeQuadComponents(
          this._componentWithCanonicalId(f.subject),
          f.predicate,
          this._componentWithCanonicalId(f.object),
          this._componentWithCanonicalId(f.graph)
        );
        u.push(w);
      }
      return u.sort(), u.join("");
    }
    // 4.6) Hash First Degree Quads
    async hashFirstDegreeQuads(a) {
      const s = [], o = this.blankNodeInfo.get(a), p = o.quads;
      for (const g of p) {
        const u = {
          subject: null,
          predicate: g.predicate,
          object: null,
          graph: null
        };
        u.subject = this.modifyFirstDegreeComponent(
          a,
          g.subject,
          "subject"
        ), u.object = this.modifyFirstDegreeComponent(
          a,
          g.object,
          "object"
        ), u.graph = this.modifyFirstDegreeComponent(
          a,
          g.graph,
          "graph"
        ), s.push(i.serializeQuad(u));
      }
      s.sort();
      const m = this.createMessageDigest();
      for (const g of s)
        m.update(g);
      return o.hash = await m.digest(), o.hash;
    }
    // 4.7) Hash Related Blank Node
    async hashRelatedBlankNode(a, s, o, p) {
      let m;
      this.canonicalIssuer.hasId(a) ? m = this.canonicalIssuer.getId(a) : o.hasId(a) ? m = o.getId(a) : m = this.blankNodeInfo.get(a).hash;
      const g = this.createMessageDigest();
      return g.update(p), p !== "g" && g.update(this.getRelatedPredicate(s)), g.update(m), g.digest();
    }
    // 4.8) Hash N-Degree Quads
    async hashNDegreeQuads(a, s) {
      const o = this.deepIterations.get(a) || 0;
      if (o > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(a, o + 1);
      const p = this.createMessageDigest(), m = await this.createHashToRelated(a, s), g = [...m.keys()].sort();
      for (const u of g) {
        p.update(u);
        let f = "", w;
        const x = new n(m.get(u));
        let b = 0;
        for (; x.hasNext(); ) {
          const S = x.next();
          ++b % 3 === 0 && await this._yield();
          let v = s.clone(), y = "";
          const d = [];
          let l = !1;
          for (const h of S)
            if (this.canonicalIssuer.hasId(h) ? y += this.canonicalIssuer.getId(h) : (v.hasId(h) || d.push(h), y += v.getId(h)), f.length !== 0 && y > f) {
              l = !0;
              break;
            }
          if (!l) {
            for (const h of d) {
              const I = await this.hashNDegreeQuads(h, v);
              if (y += v.getId(h), y += `<${I.hash}>`, v = I.issuer, f.length !== 0 && y > f) {
                l = !0;
                break;
              }
            }
            l || (f.length === 0 || y < f) && (f = y, w = v);
          }
        }
        p.update(f), s = w;
      }
      return { hash: await p.digest(), issuer: s };
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(a, s) {
      return s.termType !== "BlankNode" ? s : {
        termType: "BlankNode",
        value: s.value === a ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(a) {
      return `<${a.predicate.value}>`;
    }
    // helper for creating hash to related blank nodes map
    async createHashToRelated(a, s) {
      const o = /* @__PURE__ */ new Map(), p = this.blankNodeInfo.get(a).quads;
      let m = 0;
      for (const g of p)
        ++m % 100 === 0 && await this._yield(), await Promise.all([
          this._addRelatedBlankNodeHash({
            quad: g,
            component: g.subject,
            position: "s",
            id: a,
            issuer: s,
            hashToRelated: o
          }),
          this._addRelatedBlankNodeHash({
            quad: g,
            component: g.object,
            position: "o",
            id: a,
            issuer: s,
            hashToRelated: o
          }),
          this._addRelatedBlankNodeHash({
            quad: g,
            component: g.graph,
            position: "g",
            id: a,
            issuer: s,
            hashToRelated: o
          })
        ]);
      return o;
    }
    async _hashAndTrackBlankNode({ id: a, hashToBlankNodes: s }) {
      const o = await this.hashFirstDegreeQuads(a), p = s.get(o);
      p ? p.push(a) : s.set(o, [a]);
    }
    _addBlankNodeQuadInfo({ quad: a, component: s }) {
      if (s.termType !== "BlankNode")
        return;
      const o = s.value, p = this.blankNodeInfo.get(o);
      p ? p.quads.add(a) : this.blankNodeInfo.set(o, { quads: /* @__PURE__ */ new Set([a]), hash: null });
    }
    async _addRelatedBlankNodeHash({ quad: a, component: s, position: o, id: p, issuer: m, hashToRelated: g }) {
      if (!(s.termType === "BlankNode" && s.value !== p))
        return;
      const u = s.value, f = await this.hashRelatedBlankNode(
        u,
        a,
        m,
        o
      ), w = g.get(f);
      w ? w.push(u) : g.set(f, [u]);
    }
    // canonical ids for 7.1
    _componentWithCanonicalId(a) {
      return a.termType === "BlankNode" && !a.value.startsWith(this.canonicalIssuer.prefix) ? {
        termType: "BlankNode",
        value: this.canonicalIssuer.getId(a.value)
      } : a;
    }
    async _yield() {
      return new Promise((a) => setImmediate(a));
    }
  };
  function c(r, a) {
    return r.hash < a.hash ? -1 : r.hash > a.hash ? 1 : 0;
  }
  return Cr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Er, tc;
function Nf() {
  if (tc) return Er;
  tc = 1;
  const e = Wi(), t = wd();
  return Er = class extends t {
    constructor() {
      super(), this.name = "URGNA2012", this.createMessageDigest = () => new e("sha1");
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(i, c, r) {
      return c.termType !== "BlankNode" ? c : r === "graph" ? {
        termType: "BlankNode",
        value: "_:g"
      } : {
        termType: "BlankNode",
        value: c.value === i ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(i) {
      return i.predicate.value;
    }
    // helper for creating hash to related blank nodes map
    async createHashToRelated(i, c) {
      const r = /* @__PURE__ */ new Map(), a = this.blankNodeInfo.get(i).quads;
      let s = 0;
      for (const o of a) {
        let p, m;
        if (o.subject.termType === "BlankNode" && o.subject.value !== i)
          m = o.subject.value, p = "p";
        else if (o.object.termType === "BlankNode" && o.object.value !== i)
          m = o.object.value, p = "r";
        else
          continue;
        ++s % 100 === 0 && await this._yield();
        const g = await this.hashRelatedBlankNode(
          m,
          o,
          c,
          p
        ), u = r.get(g);
        u ? u.push(m) : r.set(g, [m]);
      }
      return r;
    }
  }, Er;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var kr, nc;
function xd() {
  if (nc) return kr;
  nc = 1;
  const e = zs(), t = Wi(), n = bd(), i = Vs();
  kr = class {
    constructor({
      createMessageDigest: a = () => new t("sha256"),
      canonicalIdMap: s = /* @__PURE__ */ new Map(),
      maxDeepIterations: o = 1 / 0
    } = {}) {
      this.name = "URDNA2015", this.blankNodeInfo = /* @__PURE__ */ new Map(), this.canonicalIssuer = new e("_:c14n", s), this.createMessageDigest = a, this.maxDeepIterations = o, this.quads = null, this.deepIterations = null;
    }
    // 4.4) Normalization Algorithm
    main(a) {
      this.deepIterations = /* @__PURE__ */ new Map(), this.quads = a;
      for (const u of a)
        this._addBlankNodeQuadInfo({ quad: u, component: u.subject }), this._addBlankNodeQuadInfo({ quad: u, component: u.object }), this._addBlankNodeQuadInfo({ quad: u, component: u.graph });
      const s = /* @__PURE__ */ new Map(), o = [...this.blankNodeInfo.keys()];
      for (const u of o)
        this._hashAndTrackBlankNode({ id: u, hashToBlankNodes: s });
      const p = [...s.keys()].sort(), m = [];
      for (const u of p) {
        const f = s.get(u);
        if (f.length > 1) {
          m.push(f);
          continue;
        }
        const w = f[0];
        this.canonicalIssuer.getId(w);
      }
      for (const u of m) {
        const f = [];
        for (const w of u) {
          if (this.canonicalIssuer.hasId(w))
            continue;
          const x = new e("_:b");
          x.getId(w);
          const b = this.hashNDegreeQuads(w, x);
          f.push(b);
        }
        f.sort(c);
        for (const w of f) {
          const x = w.issuer.getOldIds();
          for (const b of x)
            this.canonicalIssuer.getId(b);
        }
      }
      const g = [];
      for (const u of this.quads) {
        const f = i.serializeQuadComponents(
          this._componentWithCanonicalId({ component: u.subject }),
          u.predicate,
          this._componentWithCanonicalId({ component: u.object }),
          this._componentWithCanonicalId({ component: u.graph })
        );
        g.push(f);
      }
      return g.sort(), g.join("");
    }
    // 4.6) Hash First Degree Quads
    hashFirstDegreeQuads(a) {
      const s = [], o = this.blankNodeInfo.get(a), p = o.quads;
      for (const g of p) {
        const u = {
          subject: null,
          predicate: g.predicate,
          object: null,
          graph: null
        };
        u.subject = this.modifyFirstDegreeComponent(
          a,
          g.subject,
          "subject"
        ), u.object = this.modifyFirstDegreeComponent(
          a,
          g.object,
          "object"
        ), u.graph = this.modifyFirstDegreeComponent(
          a,
          g.graph,
          "graph"
        ), s.push(i.serializeQuad(u));
      }
      s.sort();
      const m = this.createMessageDigest();
      for (const g of s)
        m.update(g);
      return o.hash = m.digest(), o.hash;
    }
    // 4.7) Hash Related Blank Node
    hashRelatedBlankNode(a, s, o, p) {
      let m;
      this.canonicalIssuer.hasId(a) ? m = this.canonicalIssuer.getId(a) : o.hasId(a) ? m = o.getId(a) : m = this.blankNodeInfo.get(a).hash;
      const g = this.createMessageDigest();
      return g.update(p), p !== "g" && g.update(this.getRelatedPredicate(s)), g.update(m), g.digest();
    }
    // 4.8) Hash N-Degree Quads
    hashNDegreeQuads(a, s) {
      const o = this.deepIterations.get(a) || 0;
      if (o > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(a, o + 1);
      const p = this.createMessageDigest(), m = this.createHashToRelated(a, s), g = [...m.keys()].sort();
      for (const u of g) {
        p.update(u);
        let f = "", w;
        const x = new n(m.get(u));
        for (; x.hasNext(); ) {
          const b = x.next();
          let S = s.clone(), v = "";
          const y = [];
          let d = !1;
          for (const l of b)
            if (this.canonicalIssuer.hasId(l) ? v += this.canonicalIssuer.getId(l) : (S.hasId(l) || y.push(l), v += S.getId(l)), f.length !== 0 && v > f) {
              d = !0;
              break;
            }
          if (!d) {
            for (const l of y) {
              const h = this.hashNDegreeQuads(l, S);
              if (v += S.getId(l), v += `<${h.hash}>`, S = h.issuer, f.length !== 0 && v > f) {
                d = !0;
                break;
              }
            }
            d || (f.length === 0 || v < f) && (f = v, w = S);
          }
        }
        p.update(f), s = w;
      }
      return { hash: p.digest(), issuer: s };
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(a, s) {
      return s.termType !== "BlankNode" ? s : {
        termType: "BlankNode",
        value: s.value === a ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(a) {
      return `<${a.predicate.value}>`;
    }
    // helper for creating hash to related blank nodes map
    createHashToRelated(a, s) {
      const o = /* @__PURE__ */ new Map(), p = this.blankNodeInfo.get(a).quads;
      for (const m of p)
        this._addRelatedBlankNodeHash({
          quad: m,
          component: m.subject,
          position: "s",
          id: a,
          issuer: s,
          hashToRelated: o
        }), this._addRelatedBlankNodeHash({
          quad: m,
          component: m.object,
          position: "o",
          id: a,
          issuer: s,
          hashToRelated: o
        }), this._addRelatedBlankNodeHash({
          quad: m,
          component: m.graph,
          position: "g",
          id: a,
          issuer: s,
          hashToRelated: o
        });
      return o;
    }
    _hashAndTrackBlankNode({ id: a, hashToBlankNodes: s }) {
      const o = this.hashFirstDegreeQuads(a), p = s.get(o);
      p ? p.push(a) : s.set(o, [a]);
    }
    _addBlankNodeQuadInfo({ quad: a, component: s }) {
      if (s.termType !== "BlankNode")
        return;
      const o = s.value, p = this.blankNodeInfo.get(o);
      p ? p.quads.add(a) : this.blankNodeInfo.set(o, { quads: /* @__PURE__ */ new Set([a]), hash: null });
    }
    _addRelatedBlankNodeHash({ quad: a, component: s, position: o, id: p, issuer: m, hashToRelated: g }) {
      if (!(s.termType === "BlankNode" && s.value !== p))
        return;
      const u = s.value, f = this.hashRelatedBlankNode(u, a, m, o), w = g.get(f);
      w ? w.push(u) : g.set(f, [u]);
    }
    // canonical ids for 7.1
    _componentWithCanonicalId({ component: a }) {
      return a.termType === "BlankNode" && !a.value.startsWith(this.canonicalIssuer.prefix) ? {
        termType: "BlankNode",
        value: this.canonicalIssuer.getId(a.value)
      } : a;
    }
  };
  function c(r, a) {
    return r.hash < a.hash ? -1 : r.hash > a.hash ? 1 : 0;
  }
  return kr;
}
/*!
 * Copyright (c) 2016-2021 Digital Bazaar, Inc. All rights reserved.
 */
var Mr, ic;
function Df() {
  if (ic) return Mr;
  ic = 1;
  const e = Wi(), t = xd();
  return Mr = class extends t {
    constructor() {
      super(), this.name = "URGNA2012", this.createMessageDigest = () => new e("sha1");
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(i, c, r) {
      return c.termType !== "BlankNode" ? c : r === "graph" ? {
        termType: "BlankNode",
        value: "_:g"
      } : {
        termType: "BlankNode",
        value: c.value === i ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(i) {
      return i.predicate.value;
    }
    // helper for creating hash to related blank nodes map
    createHashToRelated(i, c) {
      const r = /* @__PURE__ */ new Map(), a = this.blankNodeInfo.get(i).quads;
      for (const s of a) {
        let o, p;
        if (s.subject.termType === "BlankNode" && s.subject.value !== i)
          p = s.subject.value, o = "p";
        else if (s.object.termType === "BlankNode" && s.object.value !== i)
          p = s.object.value, o = "r";
        else
          continue;
        const m = this.hashRelatedBlankNode(p, s, c, o), g = r.get(m);
        g ? g.push(p) : r.set(m, [p]);
      }
      return r;
    }
  }, Mr;
}
const zf = {}, Vf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zf
}, Symbol.toStringTag, { value: "Module" })), Uf = /* @__PURE__ */ Dl(Vf);
var rc;
function Gf() {
  return rc || (rc = 1, (function(e) {
    const t = wd(), n = Nf(), i = xd(), c = Df();
    let r;
    try {
      r = Uf;
    } catch {
    }
    function a(s) {
      return Array.isArray(s) ? s : e.NQuads.legacyDatasetToQuads(s);
    }
    e.NQuads = Vs(), e.IdentifierIssuer = zs(), e._rdfCanonizeNative = function(s) {
      return s && (r = s), r;
    }, e.canonize = async function(s, o) {
      const p = a(s);
      if (o.useNative) {
        if (!r)
          throw new Error("rdf-canonize-native not available");
        if (o.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return new Promise((m, g) => r.canonize(p, o, (u, f) => u ? g(u) : m(f)));
      }
      if (o.algorithm === "URDNA2015")
        return new t(o).main(p);
      if (o.algorithm === "URGNA2012") {
        if (o.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "URGNA2012".'
          );
        return new n(o).main(p);
      }
      throw "algorithm" in o ? new Error(
        "Invalid RDF Dataset Canonicalization algorithm: " + o.algorithm
      ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
    }, e._canonizeSync = function(s, o) {
      const p = a(s);
      if (o.useNative) {
        if (!r)
          throw new Error("rdf-canonize-native not available");
        if (o.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return r.canonizeSync(p, o);
      }
      if (o.algorithm === "URDNA2015")
        return new i(o).main(p);
      if (o.algorithm === "URGNA2012") {
        if (o.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "URGNA2012".'
          );
        return new c(o).main(p);
      }
      throw "algorithm" in o ? new Error(
        "Invalid RDF Dataset Canonicalization algorithm: " + o.algorithm
      ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
    };
  })(Rr)), Rr;
}
var Or, sc;
function Us() {
  return sc || (sc = 1, Or = Gf()), Or;
}
var Lr, ac;
function Ee() {
  if (ac) return Lr;
  ac = 1;
  const e = {};
  return Lr = e, e.isArray = Array.isArray, e.isBoolean = (t) => typeof t == "boolean" || Object.prototype.toString.call(t) === "[object Boolean]", e.isDouble = (t) => e.isNumber(t) && (String(t).indexOf(".") !== -1 || Math.abs(t) >= 1e21), e.isEmptyObject = (t) => e.isObject(t) && Object.keys(t).length === 0, e.isNumber = (t) => typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]", e.isNumeric = (t) => !isNaN(parseFloat(t)) && isFinite(t), e.isObject = (t) => Object.prototype.toString.call(t) === "[object Object]", e.isString = (t) => typeof t == "string" || Object.prototype.toString.call(t) === "[object String]", e.isUndefined = (t) => typeof t > "u", Lr;
}
var Nr, oc;
function yt() {
  if (oc) return Nr;
  oc = 1;
  const e = Ee(), t = {};
  return Nr = t, t.isSubject = (n) => e.isObject(n) && !("@value" in n || "@set" in n || "@list" in n) ? Object.keys(n).length > 1 || !("@id" in n) : !1, t.isSubjectReference = (n) => (
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
  ), t.isGraph = (n) => e.isObject(n) && "@graph" in n && Object.keys(n).filter((i) => i !== "@id" && i !== "@index").length === 1, t.isSimpleGraph = (n) => t.isGraph(n) && !("@id" in n), t.isBlankNode = (n) => {
    if (e.isObject(n)) {
      if ("@id" in n) {
        const i = n["@id"];
        return !e.isString(i) || i.indexOf("_:") === 0;
      }
      return Object.keys(n).length === 0 || !("@value" in n || "@set" in n || "@list" in n);
    }
    return !1;
  }, Nr;
}
var Dr, cc;
function Ue() {
  return cc || (cc = 1, Dr = class extends Error {
    /**
     * Creates a JSON-LD Error.
     *
     * @param msg the error message.
     * @param type the error type.
     * @param details the error details.
     */
    constructor(t = "An unspecified JSON-LD error occurred.", n = "jsonld.Error", i = {}) {
      super(t), this.name = n, this.message = t, this.details = i;
    }
  }), Dr;
}
var zr, dc;
function Ve() {
  if (dc) return zr;
  dc = 1;
  const e = yt(), t = Ee(), n = Us().IdentifierIssuer, i = Ue(), c = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/, r = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g, a = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/, s = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g, o = /^@[a-zA-Z]+$/, p = {
    headers: {
      accept: "application/ld+json, application/json"
    }
  }, m = {};
  zr = m, m.IdentifierIssuer = n, m.REGEX_BCP47 = c, m.REGEX_KEYWORD = o, m.clone = function(u) {
    if (u && typeof u == "object") {
      let f;
      if (t.isArray(u)) {
        f = [];
        for (let w = 0; w < u.length; ++w)
          f[w] = m.clone(u[w]);
      } else if (u instanceof Map) {
        f = /* @__PURE__ */ new Map();
        for (const [w, x] of u)
          f.set(w, m.clone(x));
      } else if (u instanceof Set) {
        f = /* @__PURE__ */ new Set();
        for (const w of u)
          f.add(m.clone(w));
      } else if (t.isObject(u)) {
        f = {};
        for (const w in u)
          f[w] = m.clone(u[w]);
      } else
        f = u.toString();
      return f;
    }
    return u;
  }, m.asArray = function(u) {
    return Array.isArray(u) ? u : [u];
  }, m.buildHeaders = (u = {}) => {
    if (Object.keys(u).some(
      (w) => w.toLowerCase() === "accept"
    ))
      throw new RangeError(
        'Accept header may not be specified; only "' + p.headers.accept + '" is supported.'
      );
    return Object.assign({ Accept: p.headers.accept }, u);
  }, m.parseLinkHeader = (u) => {
    const f = {}, w = u.match(r);
    for (let x = 0; x < w.length; ++x) {
      let b = w[x].match(a);
      if (!b)
        continue;
      const S = { target: b[1] }, v = b[2];
      for (; b = s.exec(v); )
        S[b[1]] = b[2] === void 0 ? b[3] : b[2];
      const y = S.rel || "";
      Array.isArray(f[y]) ? f[y].push(S) : f.hasOwnProperty(y) ? f[y] = [f[y], S] : f[y] = S;
    }
    return f;
  }, m.validateTypeValue = (u, f) => {
    if (!t.isString(u) && !(t.isArray(u) && u.every((w) => t.isString(w)))) {
      if (f && t.isObject(u))
        switch (Object.keys(u).length) {
          case 0:
            return;
          case 1:
            if ("@default" in u && m.asArray(u["@default"]).every((w) => t.isString(w)))
              return;
        }
      throw new i(
        'Invalid JSON-LD syntax; "@type" value must a string, an array of strings, an empty object, or a default object.',
        "jsonld.SyntaxError",
        { code: "invalid type value", value: u }
      );
    }
  }, m.hasProperty = (u, f) => {
    if (u.hasOwnProperty(f)) {
      const w = u[f];
      return !t.isArray(w) || w.length > 0;
    }
    return !1;
  }, m.hasValue = (u, f, w) => {
    if (m.hasProperty(u, f)) {
      let x = u[f];
      const b = e.isList(x);
      if (t.isArray(x) || b) {
        b && (x = x["@list"]);
        for (let S = 0; S < x.length; ++S)
          if (m.compareValues(w, x[S]))
            return !0;
      } else if (!t.isArray(w))
        return m.compareValues(w, x);
    }
    return !1;
  }, m.addValue = (u, f, w, x) => {
    if (x = x || {}, "propertyIsArray" in x || (x.propertyIsArray = !1), "valueIsArray" in x || (x.valueIsArray = !1), "allowDuplicate" in x || (x.allowDuplicate = !0), "prependValue" in x || (x.prependValue = !1), x.valueIsArray)
      u[f] = w;
    else if (t.isArray(w)) {
      w.length === 0 && x.propertyIsArray && !u.hasOwnProperty(f) && (u[f] = []), x.prependValue && (w = w.concat(u[f]), u[f] = []);
      for (let b = 0; b < w.length; ++b)
        m.addValue(u, f, w[b], x);
    } else if (u.hasOwnProperty(f)) {
      const b = !x.allowDuplicate && m.hasValue(u, f, w);
      !t.isArray(u[f]) && (!b || x.propertyIsArray) && (u[f] = [u[f]]), b || (x.prependValue ? u[f].unshift(w) : u[f].push(w));
    } else
      u[f] = x.propertyIsArray ? [w] : w;
  }, m.getValues = (u, f) => [].concat(u[f] || []), m.removeProperty = (u, f) => {
    delete u[f];
  }, m.removeValue = (u, f, w, x) => {
    x = x || {}, "propertyIsArray" in x || (x.propertyIsArray = !1);
    const b = m.getValues(u, f).filter(
      (S) => !m.compareValues(S, w)
    );
    b.length === 0 ? m.removeProperty(u, f) : b.length === 1 && !x.propertyIsArray ? u[f] = b[0] : u[f] = b;
  }, m.relabelBlankNodes = (u, f) => {
    f = f || {};
    const w = f.issuer || new n("_:b");
    return g(w, u);
  }, m.compareValues = (u, f) => u === f || e.isValue(u) && e.isValue(f) && u["@value"] === f["@value"] && u["@type"] === f["@type"] && u["@language"] === f["@language"] && u["@index"] === f["@index"] ? !0 : t.isObject(u) && "@id" in u && t.isObject(f) && "@id" in f ? u["@id"] === f["@id"] : !1, m.compareShortestLeast = (u, f) => u.length < f.length ? -1 : f.length < u.length ? 1 : u === f ? 0 : u < f ? -1 : 1;
  function g(u, f) {
    if (t.isArray(f))
      for (let w = 0; w < f.length; ++w)
        f[w] = g(u, f[w]);
    else if (e.isList(f))
      f["@list"] = g(u, f["@list"]);
    else if (t.isObject(f)) {
      e.isBlankNode(f) && (f["@id"] = u.getId(f["@id"]));
      const w = Object.keys(f).sort();
      for (let x = 0; x < w.length; ++x) {
        const b = w[x];
        b !== "@id" && (f[b] = g(u, f[b]));
      }
    }
    return f;
  }
  return zr;
}
var Vr, lc;
function Gs() {
  if (lc) return Vr;
  lc = 1;
  const e = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", t = "http://www.w3.org/2001/XMLSchema#";
  return Vr = {
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
  }, Vr;
}
var Ur, uc;
function Sd() {
  return uc || (uc = 1, Ur = class {
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
  }), Ur;
}
var Gr, pc;
function jt() {
  if (pc) return Gr;
  pc = 1;
  const e = Ee(), t = {};
  Gr = t, t.parsers = {
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
  }, t.parse = (i, c) => {
    const r = {}, a = t.parsers[c || "full"], s = a.regex.exec(i);
    let o = a.keys.length;
    for (; o--; )
      r[a.keys[o]] = s[o] === void 0 ? null : s[o];
    return (r.scheme === "https" && r.port === "443" || r.scheme === "http" && r.port === "80") && (r.href = r.href.replace(":" + r.port, ""), r.authority = r.authority.replace(":" + r.port, ""), r.port = null), r.normalizedPath = t.removeDotSegments(r.path), r;
  }, t.prependBase = (i, c) => {
    if (i === null || t.isAbsolute(c))
      return c;
    (!i || e.isString(i)) && (i = t.parse(i || ""));
    const r = t.parse(c), a = {
      protocol: i.protocol || ""
    };
    if (r.authority !== null)
      a.authority = r.authority, a.path = r.path, a.query = r.query;
    else if (a.authority = i.authority, r.path === "")
      a.path = i.path, r.query !== null ? a.query = r.query : a.query = i.query;
    else {
      if (r.path.indexOf("/") === 0)
        a.path = r.path;
      else {
        let o = i.path;
        o = o.substr(0, o.lastIndexOf("/") + 1), (o.length > 0 || i.authority) && o.substr(-1) !== "/" && (o += "/"), o += r.path, a.path = o;
      }
      a.query = r.query;
    }
    r.path !== "" && (a.path = t.removeDotSegments(a.path));
    let s = a.protocol;
    return a.authority !== null && (s += "//" + a.authority), s += a.path, a.query !== null && (s += "?" + a.query), r.fragment !== null && (s += "#" + r.fragment), s === "" && (s = "./"), s;
  }, t.removeBase = (i, c) => {
    if (i === null)
      return c;
    (!i || e.isString(i)) && (i = t.parse(i || ""));
    let r = "";
    if (i.href !== "" ? r += (i.protocol || "") + "//" + (i.authority || "") : c.indexOf("//") && (r += "//"), c.indexOf(r) !== 0)
      return c;
    const a = t.parse(c.substr(r.length)), s = i.normalizedPath.split("/"), o = a.normalizedPath.split("/"), p = a.fragment || a.query ? 0 : 1;
    for (; s.length > 0 && o.length > p && s[0] === o[0]; )
      s.shift(), o.shift();
    let m = "";
    if (s.length > 0) {
      s.pop();
      for (let g = 0; g < s.length; ++g)
        m += "../";
    }
    return m += o.join("/"), a.query !== null && (m += "?" + a.query), a.fragment !== null && (m += "#" + a.fragment), m === "" && (m = "./"), m;
  }, t.removeDotSegments = (i) => {
    if (i.length === 0)
      return "";
    const c = i.split("/"), r = [];
    for (; c.length > 0; ) {
      const a = c.shift(), s = c.length === 0;
      if (a === ".") {
        s && r.push("");
        continue;
      }
      if (a === "..") {
        r.pop(), s && r.push("");
        continue;
      }
      r.push(a);
    }
    return i[0] === "/" && r.length > 0 && r[0] !== "" && r.unshift(""), r.length === 1 && r[0] === "" ? "/" : r.join("/");
  };
  const n = /^([A-Za-z][A-Za-z0-9+-.]*|_):[^\s]*$/;
  return t.isAbsolute = (i) => e.isString(i) && n.test(i), t.isRelative = (i) => e.isString(i), Gr;
}
var Fr, fc;
function Ff() {
  if (fc) return Fr;
  fc = 1;
  const { parseLinkHeader: e, buildHeaders: t } = Ve(), { LINK_HEADER_CONTEXT: n } = Gs(), i = Ue(), c = Sd(), { prependBase: r } = jt(), a = /(^|(\r\n))link:/i;
  Fr = ({
    secure: o,
    headers: p = {},
    xhr: m
  } = { headers: {} }) => {
    return p = t(p), new c().wrapLoader(u);
    async function u(f) {
      if (f.indexOf("http:") !== 0 && f.indexOf("https:") !== 0)
        throw new i(
          'URL could not be dereferenced; only "http" and "https" URLs are supported.',
          "jsonld.InvalidUrl",
          { code: "loading document failed", url: f }
        );
      if (o && f.indexOf("https") !== 0)
        throw new i(
          `URL could not be dereferenced; secure mode is enabled and the URL's scheme is not "https".`,
          "jsonld.InvalidUrl",
          { code: "loading document failed", url: f }
        );
      let w;
      try {
        w = await s(m, f, p);
      } catch (y) {
        throw new i(
          "URL could not be dereferenced, an error occurred.",
          "jsonld.LoadDocumentError",
          { code: "loading document failed", url: f, cause: y }
        );
      }
      if (w.status >= 400)
        throw new i(
          "URL could not be dereferenced: " + w.statusText,
          "jsonld.LoadDocumentError",
          {
            code: "loading document failed",
            url: f,
            httpStatusCode: w.status
          }
        );
      let x = { contextUrl: null, documentUrl: f, document: w.response }, b = null;
      const S = w.getResponseHeader("Content-Type");
      let v;
      if (a.test(w.getAllResponseHeaders()) && (v = w.getResponseHeader("Link")), v && S !== "application/ld+json") {
        const y = e(v), d = y[n];
        if (Array.isArray(d))
          throw new i(
            "URL could not be dereferenced, it has more than one associated HTTP Link Header.",
            "jsonld.InvalidUrl",
            { code: "multiple context link headers", url: f }
          );
        d && (x.contextUrl = d.target), b = y.alternate, b && b.type == "application/ld+json" && !(S || "").match(/^application\/(\w*\+)?json$/) && (x = await u(r(f, b.target)));
      }
      return x;
    }
  };
  function s(o, p, m) {
    o = o || XMLHttpRequest;
    const g = new o();
    return new Promise((u, f) => {
      g.onload = () => u(g), g.onerror = (w) => f(w), g.open("GET", p, !0);
      for (const w in m)
        g.setRequestHeader(w, m[w]);
      g.send();
    });
  }
  return Fr;
}
var Br, hc;
function Bf() {
  if (hc) return Br;
  hc = 1;
  const e = Ff(), t = {};
  return Br = t, t.setupDocumentLoaders = function(n) {
    typeof XMLHttpRequest < "u" && (n.documentLoaders.xhr = e, n.useDocumentLoader("xhr"));
  }, t.setupGlobals = function(n) {
    typeof globalThis.JsonLdProcessor > "u" && Object.defineProperty(globalThis, "JsonLdProcessor", {
      writable: !0,
      enumerable: !1,
      configurable: !0,
      value: n.JsonLdProcessor
    });
  }, Br;
}
var Zr, mc;
function Zf() {
  return mc || (mc = 1, Zr = function(e) {
    e.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next)
        yield t.value;
    };
  }), Zr;
}
var Hr, yc;
function Hf() {
  if (yc) return Hr;
  yc = 1, Hr = e, e.Node = c, e.create = e;
  function e(r) {
    var a = this;
    if (a instanceof e || (a = new e()), a.tail = null, a.head = null, a.length = 0, r && typeof r.forEach == "function")
      r.forEach(function(p) {
        a.push(p);
      });
    else if (arguments.length > 0)
      for (var s = 0, o = arguments.length; s < o; s++)
        a.push(arguments[s]);
    return a;
  }
  e.prototype.removeNode = function(r) {
    if (r.list !== this)
      throw new Error("removing node which does not belong to this list");
    var a = r.next, s = r.prev;
    return a && (a.prev = s), s && (s.next = a), r === this.head && (this.head = a), r === this.tail && (this.tail = s), r.list.length--, r.next = null, r.prev = null, r.list = null, a;
  }, e.prototype.unshiftNode = function(r) {
    if (r !== this.head) {
      r.list && r.list.removeNode(r);
      var a = this.head;
      r.list = this, r.next = a, a && (a.prev = r), this.head = r, this.tail || (this.tail = r), this.length++;
    }
  }, e.prototype.pushNode = function(r) {
    if (r !== this.tail) {
      r.list && r.list.removeNode(r);
      var a = this.tail;
      r.list = this, r.prev = a, a && (a.next = r), this.tail = r, this.head || (this.head = r), this.length++;
    }
  }, e.prototype.push = function() {
    for (var r = 0, a = arguments.length; r < a; r++)
      n(this, arguments[r]);
    return this.length;
  }, e.prototype.unshift = function() {
    for (var r = 0, a = arguments.length; r < a; r++)
      i(this, arguments[r]);
    return this.length;
  }, e.prototype.pop = function() {
    if (this.tail) {
      var r = this.tail.value;
      return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, r;
    }
  }, e.prototype.shift = function() {
    if (this.head) {
      var r = this.head.value;
      return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, r;
    }
  }, e.prototype.forEach = function(r, a) {
    a = a || this;
    for (var s = this.head, o = 0; s !== null; o++)
      r.call(a, s.value, o, this), s = s.next;
  }, e.prototype.forEachReverse = function(r, a) {
    a = a || this;
    for (var s = this.tail, o = this.length - 1; s !== null; o--)
      r.call(a, s.value, o, this), s = s.prev;
  }, e.prototype.get = function(r) {
    for (var a = 0, s = this.head; s !== null && a < r; a++)
      s = s.next;
    if (a === r && s !== null)
      return s.value;
  }, e.prototype.getReverse = function(r) {
    for (var a = 0, s = this.tail; s !== null && a < r; a++)
      s = s.prev;
    if (a === r && s !== null)
      return s.value;
  }, e.prototype.map = function(r, a) {
    a = a || this;
    for (var s = new e(), o = this.head; o !== null; )
      s.push(r.call(a, o.value, this)), o = o.next;
    return s;
  }, e.prototype.mapReverse = function(r, a) {
    a = a || this;
    for (var s = new e(), o = this.tail; o !== null; )
      s.push(r.call(a, o.value, this)), o = o.prev;
    return s;
  }, e.prototype.reduce = function(r, a) {
    var s, o = this.head;
    if (arguments.length > 1)
      s = a;
    else if (this.head)
      o = this.head.next, s = this.head.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var p = 0; o !== null; p++)
      s = r(s, o.value, p), o = o.next;
    return s;
  }, e.prototype.reduceReverse = function(r, a) {
    var s, o = this.tail;
    if (arguments.length > 1)
      s = a;
    else if (this.tail)
      o = this.tail.prev, s = this.tail.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var p = this.length - 1; o !== null; p--)
      s = r(s, o.value, p), o = o.prev;
    return s;
  }, e.prototype.toArray = function() {
    for (var r = new Array(this.length), a = 0, s = this.head; s !== null; a++)
      r[a] = s.value, s = s.next;
    return r;
  }, e.prototype.toArrayReverse = function() {
    for (var r = new Array(this.length), a = 0, s = this.tail; s !== null; a++)
      r[a] = s.value, s = s.prev;
    return r;
  }, e.prototype.slice = function(r, a) {
    a = a || this.length, a < 0 && (a += this.length), r = r || 0, r < 0 && (r += this.length);
    var s = new e();
    if (a < r || a < 0)
      return s;
    r < 0 && (r = 0), a > this.length && (a = this.length);
    for (var o = 0, p = this.head; p !== null && o < r; o++)
      p = p.next;
    for (; p !== null && o < a; o++, p = p.next)
      s.push(p.value);
    return s;
  }, e.prototype.sliceReverse = function(r, a) {
    a = a || this.length, a < 0 && (a += this.length), r = r || 0, r < 0 && (r += this.length);
    var s = new e();
    if (a < r || a < 0)
      return s;
    r < 0 && (r = 0), a > this.length && (a = this.length);
    for (var o = this.length, p = this.tail; p !== null && o > a; o--)
      p = p.prev;
    for (; p !== null && o > r; o--, p = p.prev)
      s.push(p.value);
    return s;
  }, e.prototype.splice = function(r, a, ...s) {
    r > this.length && (r = this.length - 1), r < 0 && (r = this.length + r);
    for (var o = 0, p = this.head; p !== null && o < r; o++)
      p = p.next;
    for (var m = [], o = 0; p && o < a; o++)
      m.push(p.value), p = this.removeNode(p);
    p === null && (p = this.tail), p !== this.head && p !== this.tail && (p = p.prev);
    for (var o = 0; o < s.length; o++)
      p = t(this, p, s[o]);
    return m;
  }, e.prototype.reverse = function() {
    for (var r = this.head, a = this.tail, s = r; s !== null; s = s.prev) {
      var o = s.prev;
      s.prev = s.next, s.next = o;
    }
    return this.head = a, this.tail = r, this;
  };
  function t(r, a, s) {
    var o = a === r.head ? new c(s, null, a, r) : new c(s, a, a.next, r);
    return o.next === null && (r.tail = o), o.prev === null && (r.head = o), r.length++, o;
  }
  function n(r, a) {
    r.tail = new c(a, r.tail, null, r), r.head || (r.head = r.tail), r.length++;
  }
  function i(r, a) {
    r.head = new c(a, null, r.head, r), r.tail || (r.tail = r.head), r.length++;
  }
  function c(r, a, s, o) {
    if (!(this instanceof c))
      return new c(r, a, s, o);
    this.list = o, this.value = r, a ? (a.next = this, this.prev = a) : this.prev = null, s ? (s.prev = this, this.next = s) : this.next = null;
  }
  try {
    Zf()(e);
  } catch {
  }
  return Hr;
}
var Jr, gc;
function Id() {
  if (gc) return Jr;
  gc = 1;
  const e = Hf(), t = Symbol("max"), n = Symbol("length"), i = Symbol("lengthCalculator"), c = Symbol("allowStale"), r = Symbol("maxAge"), a = Symbol("dispose"), s = Symbol("noDisposeOnSet"), o = Symbol("lruList"), p = Symbol("cache"), m = Symbol("updateAgeOnGet"), g = () => 1;
  class u {
    constructor(d) {
      if (typeof d == "number" && (d = { max: d }), d || (d = {}), d.max && (typeof d.max != "number" || d.max < 0))
        throw new TypeError("max must be a non-negative number");
      this[t] = d.max || 1 / 0;
      const l = d.length || g;
      if (this[i] = typeof l != "function" ? g : l, this[c] = d.stale || !1, d.maxAge && typeof d.maxAge != "number")
        throw new TypeError("maxAge must be a number");
      this[r] = d.maxAge || 0, this[a] = d.dispose, this[s] = d.noDisposeOnSet || !1, this[m] = d.updateAgeOnGet || !1, this.reset();
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
      this[c] = !!d;
    }
    get allowStale() {
      return this[c];
    }
    set maxAge(d) {
      if (typeof d != "number")
        throw new TypeError("maxAge must be a non-negative number");
      this[r] = d, x(this);
    }
    get maxAge() {
      return this[r];
    }
    // resize the cache when the lengthCalculator changes.
    set lengthCalculator(d) {
      typeof d != "function" && (d = g), d !== this[i] && (this[i] = d, this[n] = 0, this[o].forEach((l) => {
        l.length = this[i](l.value, l.key), this[n] += l.length;
      })), x(this);
    }
    get lengthCalculator() {
      return this[i];
    }
    get length() {
      return this[n];
    }
    get itemCount() {
      return this[o].length;
    }
    rforEach(d, l) {
      l = l || this;
      for (let h = this[o].tail; h !== null; ) {
        const I = h.prev;
        v(this, d, h, l), h = I;
      }
    }
    forEach(d, l) {
      l = l || this;
      for (let h = this[o].head; h !== null; ) {
        const I = h.next;
        v(this, d, h, l), h = I;
      }
    }
    keys() {
      return this[o].toArray().map((d) => d.key);
    }
    values() {
      return this[o].toArray().map((d) => d.value);
    }
    reset() {
      this[a] && this[o] && this[o].length && this[o].forEach((d) => this[a](d.key, d.value)), this[p] = /* @__PURE__ */ new Map(), this[o] = new e(), this[n] = 0;
    }
    dump() {
      return this[o].map((d) => w(this, d) ? !1 : {
        k: d.key,
        v: d.value,
        e: d.now + (d.maxAge || 0)
      }).toArray().filter((d) => d);
    }
    dumpLru() {
      return this[o];
    }
    set(d, l, h) {
      if (h = h || this[r], h && typeof h != "number")
        throw new TypeError("maxAge must be a number");
      const I = h ? Date.now() : 0, A = this[i](l, d);
      if (this[p].has(d)) {
        if (A > this[t])
          return b(this, this[p].get(d)), !1;
        const M = this[p].get(d).value;
        return this[a] && (this[s] || this[a](d, M.value)), M.now = I, M.maxAge = h, M.value = l, this[n] += A - M.length, M.length = A, this.get(d), x(this), !0;
      }
      const $ = new S(d, l, A, I, h);
      return $.length > this[t] ? (this[a] && this[a](d, l), !1) : (this[n] += $.length, this[o].unshift($), this[p].set(d, this[o].head), x(this), !0);
    }
    has(d) {
      if (!this[p].has(d)) return !1;
      const l = this[p].get(d).value;
      return !w(this, l);
    }
    get(d) {
      return f(this, d, !0);
    }
    peek(d) {
      return f(this, d, !1);
    }
    pop() {
      const d = this[o].tail;
      return d ? (b(this, d), d.value) : null;
    }
    del(d) {
      b(this, this[p].get(d));
    }
    load(d) {
      this.reset();
      const l = Date.now();
      for (let h = d.length - 1; h >= 0; h--) {
        const I = d[h], A = I.e || 0;
        if (A === 0)
          this.set(I.k, I.v);
        else {
          const $ = A - l;
          $ > 0 && this.set(I.k, I.v, $);
        }
      }
    }
    prune() {
      this[p].forEach((d, l) => f(this, l, !1));
    }
  }
  const f = (y, d, l) => {
    const h = y[p].get(d);
    if (h) {
      const I = h.value;
      if (w(y, I)) {
        if (b(y, h), !y[c])
          return;
      } else
        l && (y[m] && (h.value.now = Date.now()), y[o].unshiftNode(h));
      return I.value;
    }
  }, w = (y, d) => {
    if (!d || !d.maxAge && !y[r])
      return !1;
    const l = Date.now() - d.now;
    return d.maxAge ? l > d.maxAge : y[r] && l > y[r];
  }, x = (y) => {
    if (y[n] > y[t])
      for (let d = y[o].tail; y[n] > y[t] && d !== null; ) {
        const l = d.prev;
        b(y, d), d = l;
      }
  }, b = (y, d) => {
    if (d) {
      const l = d.value;
      y[a] && y[a](l.key, l.value), y[n] -= l.length, y[p].delete(l.key), y[o].removeNode(d);
    }
  };
  class S {
    constructor(d, l, h, I, A) {
      this.key = d, this.value = l, this.length = h, this.now = I, this.maxAge = A || 0;
    }
  }
  const v = (y, d, l, h) => {
    let I = l.value;
    w(y, I) && (b(y, l), y[c] || (I = void 0)), I && d.call(h, I.value, I.key, y);
  };
  return Jr = u, Jr;
}
var Kr, vc;
function Jf() {
  if (vc) return Kr;
  vc = 1;
  const e = Id(), t = 10;
  return Kr = class {
    /**
     * Creates a ResolvedContext.
     *
     * @param document the context document.
     */
    constructor({ document: i }) {
      this.document = i, this.cache = new e({ max: t });
    }
    getProcessed(i) {
      return this.cache.get(i);
    }
    setProcessed(i, c) {
      this.cache.set(i, c);
    }
  }, Kr;
}
var Qr, bc;
function Kf() {
  if (bc) return Qr;
  bc = 1;
  const {
    isArray: e,
    isObject: t,
    isString: n
  } = Ee(), {
    asArray: i
  } = Ve(), { prependBase: c } = jt(), r = Ue(), a = Jf(), s = 10;
  Qr = class {
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
      context: u,
      documentLoader: f,
      base: w,
      cycles: x = /* @__PURE__ */ new Set()
    }) {
      u && t(u) && u["@context"] && (u = u["@context"]), u = i(u);
      const b = [];
      for (const S of u) {
        if (n(S)) {
          let d = this._get(S);
          d || (d = await this._resolveRemoteContext(
            { activeCtx: g, url: S, documentLoader: f, base: w, cycles: x }
          )), e(d) ? b.push(...d) : b.push(d);
          continue;
        }
        if (S === null) {
          b.push(new a({ document: null }));
          continue;
        }
        t(S) || o(u);
        const v = JSON.stringify(S);
        let y = this._get(v);
        y || (y = new a({ document: S }), this._cacheResolvedContext({ key: v, resolved: y, tag: "static" })), b.push(y);
      }
      return b;
    }
    _get(g) {
      let u = this.perOpCache.get(g);
      if (!u) {
        const f = this.sharedCache.get(g);
        f && (u = f.get("static"), u && this.perOpCache.set(g, u));
      }
      return u;
    }
    _cacheResolvedContext({ key: g, resolved: u, tag: f }) {
      if (this.perOpCache.set(g, u), f !== void 0) {
        let w = this.sharedCache.get(g);
        w || (w = /* @__PURE__ */ new Map(), this.sharedCache.set(g, w)), w.set(f, u);
      }
      return u;
    }
    async _resolveRemoteContext({ activeCtx: g, url: u, documentLoader: f, base: w, cycles: x }) {
      u = c(w, u);
      const { context: b, remoteDoc: S } = await this._fetchContext(
        { activeCtx: g, url: u, documentLoader: f, cycles: x }
      );
      w = S.documentUrl || u, p({ context: b, base: w });
      const v = await this.resolve(
        { activeCtx: g, context: b, documentLoader: f, base: w, cycles: x }
      );
      return this._cacheResolvedContext({ key: u, resolved: v, tag: S.tag }), v;
    }
    async _fetchContext({ activeCtx: g, url: u, documentLoader: f, cycles: w }) {
      if (w.size > s)
        throw new r(
          "Maximum number of @context URLs exceeded.",
          "jsonld.ContextUrlError",
          {
            code: g.processingMode === "json-ld-1.0" ? "loading remote context failed" : "context overflow",
            max: s
          }
        );
      if (w.has(u))
        throw new r(
          "Cyclical @context URLs detected.",
          "jsonld.ContextUrlError",
          {
            code: g.processingMode === "json-ld-1.0" ? "recursive context inclusion" : "context overflow",
            url: u
          }
        );
      w.add(u);
      let x, b;
      try {
        b = await f(u), x = b.document || null, n(x) && (x = JSON.parse(x));
      } catch (S) {
        throw new r(
          `Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context. URL: "${u}".`,
          "jsonld.InvalidUrl",
          { code: "loading remote context failed", url: u, cause: S }
        );
      }
      if (!t(x))
        throw new r(
          `Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object. URL: "${u}".`,
          "jsonld.InvalidUrl",
          { code: "invalid remote context", url: u }
        );
      return "@context" in x ? x = { "@context": x["@context"] } : x = { "@context": {} }, b.contextUrl && (e(x["@context"]) || (x["@context"] = [x["@context"]]), x["@context"].push(b.contextUrl)), { context: x, remoteDoc: b };
    }
  };
  function o(m) {
    throw new r(
      "Invalid JSON-LD syntax; @context must be an object.",
      "jsonld.SyntaxError",
      {
        code: "invalid local context",
        context: m
      }
    );
  }
  function p({ context: m, base: g }) {
    if (!m)
      return;
    const u = m["@context"];
    if (n(u)) {
      m["@context"] = c(g, u);
      return;
    }
    if (e(u)) {
      for (let f = 0; f < u.length; ++f) {
        const w = u[f];
        if (n(w)) {
          u[f] = c(g, w);
          continue;
        }
        t(w) && p({ context: { "@context": w }, base: g });
      }
      return;
    }
    if (t(u))
      for (const f in u)
        p({ context: u[f], base: g });
  }
  return Qr;
}
var Wr, wc;
function Qf() {
  return wc || (wc = 1, Wr = Us().NQuads), Wr;
}
var Xr, xc;
function Sn() {
  if (xc) return Xr;
  xc = 1;
  const e = Ue(), {
    isArray: t
  } = Ee(), {
    asArray: n
  } = Ve(), i = {};
  Xr = i, i.defaultEventHandler = null, i.setupEventHandler = ({ options: a = {} }) => {
    const s = [].concat(
      a.safe ? i.safeEventHandler : [],
      a.eventHandler ? n(a.eventHandler) : [],
      i.defaultEventHandler ? i.defaultEventHandler : []
    );
    return s.length === 0 ? null : s;
  }, i.handleEvent = ({
    event: a,
    options: s
  }) => {
    c({ event: a, handlers: s.eventHandler });
  };
  function c({ event: a, handlers: s }) {
    let o = !0;
    for (let p = 0; o && p < s.length; ++p) {
      o = !1;
      const m = s[p];
      if (t(m))
        o = c({ event: a, handlers: m });
      else if (typeof m == "function")
        m({ event: a, next: () => {
          o = !0;
        } });
      else if (typeof m == "object")
        a.code in m ? m[a.code]({ event: a, next: () => {
          o = !0;
        } }) : o = !0;
      else
        throw new e(
          "Invalid event handler.",
          "jsonld.InvalidEventHandler",
          { event: a }
        );
    }
    return o;
  }
  const r = /* @__PURE__ */ new Set([
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
  return i.safeEventHandler = function({ event: s, next: o }) {
    if (s.level === "warning" && r.has(s.code))
      throw new e(
        "Safe mode validation error.",
        "jsonld.ValidationError",
        { event: s }
      );
    o();
  }, i.logEventHandler = function({ event: s, next: o }) {
    console.log(`EVENT: ${s.message}`, { event: s }), o();
  }, i.logWarningEventHandler = function({ event: s, next: o }) {
    s.level === "warning" && console.warn(`WARNING: ${s.message}`, { event: s }), o();
  }, i.unhandledEventHandler = function({ event: s }) {
    throw new e(
      "No handler for event.",
      "jsonld.UnhandledEvent",
      { event: s }
    );
  }, i.setDefaultEventHandler = function({ eventHandler: a } = {}) {
    i.defaultEventHandler = a ? n(a) : null;
  }, Xr;
}
var Yr, Sc;
function Ot() {
  if (Sc) return Yr;
  Sc = 1;
  const e = Ve(), t = Ue(), {
    isArray: n,
    isObject: i,
    isString: c,
    isUndefined: r
  } = Ee(), {
    isAbsolute: a,
    isRelative: s,
    prependBase: o
  } = jt(), {
    handleEvent: p
  } = Sn(), {
    REGEX_BCP47: m,
    REGEX_KEYWORD: g,
    asArray: u,
    compareShortestLeast: f
  } = Ve(), w = /* @__PURE__ */ new Map(), x = 1e4, b = {};
  Yr = b, b.process = async ({
    activeCtx: y,
    localCtx: d,
    options: l,
    propagate: h = !0,
    overrideProtected: I = !1,
    cycles: A = /* @__PURE__ */ new Set()
  }) => {
    if (i(d) && "@context" in d && n(d["@context"]) && (d = d["@context"]), u(d).length === 0)
      return y;
    const C = [], M = [
      ({ event: z, next: _ }) => {
        C.push(z), _();
      }
    ];
    l.eventHandler && M.push(l.eventHandler);
    const E = l;
    l = { ...l, eventHandler: M };
    const j = await l.contextResolver.resolve({
      activeCtx: y,
      context: d,
      documentLoader: l.documentLoader,
      base: l.base
    });
    i(j[0].document) && typeof j[0].document["@propagate"] == "boolean" && (h = j[0].document["@propagate"]);
    let P = y;
    !h && !P.previousContext && (P = P.clone(), P.previousContext = y);
    for (const z of j) {
      let { document: _ } = z;
      if (y = P, _ === null) {
        if (!I && Object.keys(y.protected).length !== 0)
          throw new t(
            "Tried to nullify a context with protected terms outside of a term definition.",
            "jsonld.SyntaxError",
            { code: "invalid context nullification" }
          );
        P = y = b.getInitialContext(l).clone();
        continue;
      }
      const Z = z.getProcessed(y);
      if (Z) {
        if (E.eventHandler)
          for (const F of Z.events)
            p({ event: F, options: E });
        P = y = Z.context;
        continue;
      }
      if (i(_) && "@context" in _ && (_ = _["@context"]), !i(_))
        throw new t(
          "Invalid JSON-LD syntax; @context must be an object.",
          "jsonld.SyntaxError",
          { code: "invalid local context", context: _ }
        );
      P = P.clone();
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
        P.processingMode = "json-ld-1.1", P["@version"] = _["@version"], L.set("@version", !0);
      }
      if (P.processingMode = P.processingMode || y.processingMode, "@base" in _) {
        let F = _["@base"];
        if (!(F === null || a(F))) if (s(F))
          F = o(P["@base"], F);
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.',
            "jsonld.SyntaxError",
            { code: "invalid base IRI", context: _ }
          );
        P["@base"] = F, L.set("@base", !0);
      }
      if ("@vocab" in _) {
        const F = _["@vocab"];
        if (F === null)
          delete P["@vocab"];
        else if (c(F)) {
          if (!a(F) && b.processingMode(P, 1))
            throw new t(
              'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.',
              "jsonld.SyntaxError",
              { code: "invalid vocab mapping", context: _ }
            );
          {
            const k = S(
              P,
              F,
              { vocab: !0, base: !0 },
              void 0,
              void 0,
              l
            );
            a(k) || l.eventHandler && p({
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
            }), P["@vocab"] = k;
          }
        } else throw new t(
          'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be a string or null.',
          "jsonld.SyntaxError",
          { code: "invalid vocab mapping", context: _ }
        );
        L.set("@vocab", !0);
      }
      if ("@language" in _) {
        const F = _["@language"];
        if (F === null)
          delete P["@language"];
        else if (c(F))
          F.match(m) || l.eventHandler && p({
            event: {
              type: ["JsonLdEvent"],
              code: "invalid @language value",
              level: "warning",
              message: "@language value must be valid BCP47.",
              details: {
                language: F
              }
            },
            options: l
          }), P["@language"] = F.toLowerCase();
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@language" in a @context must be a string or null.',
            "jsonld.SyntaxError",
            { code: "invalid default language", context: _ }
          );
        L.set("@language", !0);
      }
      if ("@direction" in _) {
        const F = _["@direction"];
        if (y.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @direction not compatible with " + y.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context member", context: _ }
          );
        if (F === null)
          delete P["@direction"];
        else {
          if (F !== "ltr" && F !== "rtl")
            throw new t(
              'Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", context: _ }
            );
          P["@direction"] = F;
        }
        L.set("@direction", !0);
      }
      if ("@propagate" in _) {
        const F = _["@propagate"];
        if (y.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @propagate not compatible with " + y.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: _ }
          );
        if (typeof F != "boolean")
          throw new t(
            "Invalid JSON-LD syntax; @propagate value must be a boolean.",
            "jsonld.SyntaxError",
            { code: "invalid @propagate value", context: d }
          );
        L.set("@propagate", !0);
      }
      if ("@import" in _) {
        const F = _["@import"];
        if (y.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @import not compatible with " + y.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: _ }
          );
        if (!c(F))
          throw new t(
            "Invalid JSON-LD syntax; @import must be a string.",
            "jsonld.SyntaxError",
            { code: "invalid @import value", context: d }
          );
        const k = await l.contextResolver.resolve({
          activeCtx: y,
          context: F,
          documentLoader: l.documentLoader,
          base: l.base
        });
        if (k.length !== 1)
          throw new t(
            "Invalid JSON-LD syntax; @import must reference a single context.",
            "jsonld.SyntaxError",
            { code: "invalid remote context", context: d }
          );
        const O = k[0].getProcessed(y);
        if (O)
          _ = O;
        else {
          const V = k[0].document;
          if ("@import" in V)
            throw new t(
              "Invalid JSON-LD syntax: imported context must not include @import.",
              "jsonld.SyntaxError",
              { code: "invalid context entry", context: d }
            );
          for (const N in V)
            _.hasOwnProperty(N) || (_[N] = V[N]);
          k[0].setProcessed(y, _);
        }
        L.set("@import", !0);
      }
      L.set("@protected", _["@protected"] || !1);
      for (const F in _)
        if (b.createTermDefinition({
          activeCtx: P,
          localCtx: _,
          term: F,
          defined: L,
          options: l,
          overrideProtected: I
        }), i(_[F]) && "@context" in _[F]) {
          const k = _[F]["@context"];
          let O = !0;
          if (c(k)) {
            const V = o(l.base, k);
            A.has(V) ? O = !1 : A.add(V);
          }
          if (O)
            try {
              await b.process({
                activeCtx: P.clone(),
                localCtx: _[F]["@context"],
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
                  context: _[F]["@context"],
                  term: F
                }
              );
            }
        }
      z.setProcessed(y, {
        context: P,
        events: C
      });
    }
    return P;
  }, b.createTermDefinition = ({
    activeCtx: y,
    localCtx: d,
    term: l,
    defined: h,
    options: I,
    overrideProtected: A = !1
  }) => {
    if (h.has(l)) {
      if (h.get(l))
        return;
      throw new t(
        "Cyclical context definition detected.",
        "jsonld.CyclicalContext",
        { code: "cyclic IRI mapping", context: d, term: l }
      );
    }
    h.set(l, !1);
    let $;
    if (d.hasOwnProperty(l) && ($ = d[l]), l === "@type" && i($) && ($["@container"] || "@set") === "@set" && b.processingMode(y, 1.1)) {
      const _ = ["@container", "@id", "@protected"], Z = Object.keys($);
      if (Z.length === 0 || Z.some((L) => !_.includes(L)))
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
        I.eventHandler && p({
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
    const C = y.mappings.get(l);
    y.mappings.has(l) && y.mappings.delete(l);
    let M = !1;
    if ((c($) || $ === null) && (M = !0, $ = { "@id": $ }), !i($))
      throw new t(
        "Invalid JSON-LD syntax; @context term values must be strings or objects.",
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: d }
      );
    const E = {};
    y.mappings.set(l, E), E.reverse = !1;
    const j = ["@container", "@id", "@language", "@reverse", "@type"];
    b.processingMode(y, 1.1) && j.push(
      "@context",
      "@direction",
      "@index",
      "@nest",
      "@prefix",
      "@protected"
    );
    for (const _ in $)
      if (!j.includes(_))
        throw new t(
          "Invalid JSON-LD syntax; a term definition must not contain " + _,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
    const P = l.indexOf(":");
    if (E._termHasColon = P > 0, "@reverse" in $) {
      if ("@id" in $)
        throw new t(
          "Invalid JSON-LD syntax; a @reverse term definition must not contain @id.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: d }
        );
      if ("@nest" in $)
        throw new t(
          "Invalid JSON-LD syntax; a @reverse term definition must not contain @nest.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: d }
        );
      const _ = $["@reverse"];
      if (!c(_))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      if (_.match(g)) {
        I.eventHandler && p({
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
        }), C ? y.mappings.set(l, C) : y.mappings.delete(l);
        return;
      }
      const Z = S(
        y,
        _,
        { vocab: !0, base: !1 },
        d,
        h,
        I
      );
      if (!a(Z))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      E["@id"] = Z, E.reverse = !0;
    } else if ("@id" in $) {
      let _ = $["@id"];
      if (_ && !c(_))
        throw new t(
          "Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      if (_ === null)
        E["@id"] = null;
      else if (!b.isKeyword(_) && _.match(g)) {
        I.eventHandler && p({
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
        }), C ? y.mappings.set(l, C) : y.mappings.delete(l);
        return;
      } else if (_ !== l) {
        if (_ = S(
          y,
          _,
          { vocab: !0, base: !1 },
          d,
          h,
          I
        ), !a(_) && !b.isKeyword(_))
          throw new t(
            "Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: d }
          );
        if (l.match(/(?::[^:])|\//)) {
          const Z = new Map(h).set(l, !0);
          if (S(
            y,
            l,
            { vocab: !0, base: !1 },
            d,
            Z,
            I
          ) !== _)
            throw new t(
              "Invalid JSON-LD syntax; term in form of IRI must expand to definition.",
              "jsonld.SyntaxError",
              { code: "invalid IRI mapping", context: d }
            );
        }
        E["@id"] = _, E._prefix = M && !E._termHasColon && _.match(/[:\/\?#\[\]@]$/) !== null;
      }
    }
    if (!("@id" in E))
      if (E._termHasColon) {
        const _ = l.substr(0, P);
        if (d.hasOwnProperty(_) && b.createTermDefinition({
          activeCtx: y,
          localCtx: d,
          term: _,
          defined: h,
          options: I
        }), y.mappings.has(_)) {
          const Z = l.substr(P + 1);
          E["@id"] = y.mappings.get(_)["@id"] + Z;
        } else
          E["@id"] = l;
      } else if (l === "@type")
        E["@id"] = l;
      else {
        if (!("@vocab" in y))
          throw new t(
            "Invalid JSON-LD syntax; @context terms must define an @id.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: d, term: l }
          );
        E["@id"] = y["@vocab"] + l;
      }
    if (($["@protected"] === !0 || h.get("@protected") === !0 && $["@protected"] !== !1) && (y.protected[l] = !0, E.protected = !0), h.set(l, !0), "@type" in $) {
      let _ = $["@type"];
      if (!c(_))
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
          h,
          I
        ), !a(_))
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
      E["@type"] = _;
    }
    if ("@container" in $) {
      const _ = c($["@container"]) ? [$["@container"]] : $["@container"] || [], Z = ["@list", "@set", "@index", "@language"];
      let L = !0;
      const F = _.includes("@set");
      if (b.processingMode(y, 1.1)) {
        if (Z.push("@graph", "@id", "@type"), _.includes("@list")) {
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
          L &= _.length <= (F ? 2 : 1);
        if (_.includes("@type") && (E["@type"] = E["@type"] || "@id", !["@id", "@vocab"].includes(E["@type"])))
          throw new t(
            "Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
      } else
        L &= !n($["@container"]), L &= _.length <= 1;
      if (L &= _.every((k) => Z.includes(k)), L &= !(F && _.includes("@list")), !L)
        throw new t(
          "Invalid JSON-LD syntax; @context @container value must be one of the following: " + Z.join(", "),
          "jsonld.SyntaxError",
          { code: "invalid container mapping", context: d }
        );
      if (E.reverse && !_.every((k) => ["@index", "@set"].includes(k)))
        throw new t(
          "Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: d }
        );
      E["@container"] = _;
    }
    if ("@index" in $) {
      if (!("@container" in $) || !E["@container"].includes("@index"))
        throw new t(
          `Invalid JSON-LD syntax; @index without @index in @container: "${$["@index"]}" on term "${l}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (!c($["@index"]) || $["@index"].indexOf("@") === 0)
        throw new t(
          `Invalid JSON-LD syntax; @index must expand to an IRI: "${$["@index"]}" on term "${l}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      E["@index"] = $["@index"];
    }
    if ("@context" in $ && (E["@context"] = $["@context"]), "@language" in $ && !("@type" in $)) {
      let _ = $["@language"];
      if (_ !== null && !c(_))
        throw new t(
          "Invalid JSON-LD syntax; @context @language value must be a string or null.",
          "jsonld.SyntaxError",
          { code: "invalid language mapping", context: d }
        );
      _ !== null && (_ = _.toLowerCase()), E["@language"] = _;
    }
    if ("@prefix" in $) {
      if (l.match(/:|\//))
        throw new t(
          "Invalid JSON-LD syntax; @context @prefix used on a compact IRI term",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (b.isKeyword(E["@id"]))
        throw new t(
          "Invalid JSON-LD syntax; keywords may not be used as prefixes",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (typeof $["@prefix"] == "boolean")
        E._prefix = $["@prefix"] === !0;
      else
        throw new t(
          "Invalid JSON-LD syntax; @context value for @prefix must be boolean",
          "jsonld.SyntaxError",
          { code: "invalid @prefix value", context: d }
        );
    }
    if ("@direction" in $) {
      const _ = $["@direction"];
      if (_ !== null && _ !== "ltr" && _ !== "rtl")
        throw new t(
          'Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".',
          "jsonld.SyntaxError",
          { code: "invalid base direction", context: d }
        );
      E["@direction"] = _;
    }
    if ("@nest" in $) {
      const _ = $["@nest"];
      if (!c(_) || _ !== "@nest" && _.indexOf("@") === 0)
        throw new t(
          "Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.",
          "jsonld.SyntaxError",
          { code: "invalid @nest value", context: d }
        );
      E["@nest"] = _;
    }
    // disallow aliasing @context and @preserve
    const z = E["@id"];
    if (z === "@context" || z === "@preserve")
      throw new t(
        "Invalid JSON-LD syntax; @context and @preserve cannot be aliased.",
        "jsonld.SyntaxError",
        { code: "invalid keyword alias", context: d }
      );
    if (C && C.protected && !A && (y.protected[l] = !0, E.protected = !0, !v(C, E)))
      throw new t(
        "Invalid JSON-LD syntax; tried to redefine a protected term.",
        "jsonld.SyntaxError",
        { code: "protected term redefinition", context: d, term: l }
      );
  }, b.expandIri = (y, d, l, h) => S(
    y,
    d,
    l,
    void 0,
    void 0,
    h
  );
  function S(y, d, l, h, I, A) {
    if (d === null || !c(d) || b.isKeyword(d))
      return d;
    if (d.match(g))
      return null;
    if (h && h.hasOwnProperty(d) && I.get(d) !== !0 && b.createTermDefinition({
      activeCtx: y,
      localCtx: h,
      term: d,
      defined: I,
      options: A
    }), l = l || {}, l.vocab) {
      const C = y.mappings.get(d);
      if (C === null)
        return null;
      if (i(C) && "@id" in C)
        return C["@id"];
    }
    const $ = d.indexOf(":");
    if ($ > 0) {
      const C = d.substr(0, $), M = d.substr($ + 1);
      if (C === "_" || M.indexOf("//") === 0)
        return d;
      h && h.hasOwnProperty(C) && b.createTermDefinition({
        activeCtx: y,
        localCtx: h,
        term: C,
        defined: I,
        options: A
      });
      const E = y.mappings.get(C);
      if (E && E._prefix)
        return E["@id"] + M;
      if (a(d))
        return d;
    }
    if (l.vocab && "@vocab" in y)
      d = y["@vocab"] + d;
    else if (l.base) {
      let C, M;
      "@base" in y ? y["@base"] ? (M = o(A.base, y["@base"]), C = o(M, d)) : (M = y["@base"], C = d) : (M = A.base, C = o(A.base, d)), d = C;
    }
    return d;
  }
  b.getInitialContext = (y) => {
    const d = JSON.stringify({ processingMode: y.processingMode }), l = w.get(d);
    if (l)
      return l;
    const h = {
      processingMode: y.processingMode,
      mappings: /* @__PURE__ */ new Map(),
      inverse: null,
      getInverse: I,
      clone: C,
      revertToPreviousContext: M,
      protected: {}
    };
    return w.size === x && w.clear(), w.set(d, h), h;
    function I() {
      const E = this;
      if (E.inverse)
        return E.inverse;
      const j = E.inverse = {}, P = E.fastCurieMap = {}, z = {}, _ = (E["@language"] || "@none").toLowerCase(), Z = E["@direction"], L = E.mappings, F = [...L.keys()].sort(f);
      for (const k of F) {
        const O = L.get(k);
        if (O === null)
          continue;
        let V = O["@container"] || "@none";
        if (V = [].concat(V).sort().join(""), O["@id"] === null)
          continue;
        const N = u(O["@id"]);
        for (const R of N) {
          let q = j[R];
          const T = b.isKeyword(R);
          if (q)
            !T && !O._termHasColon && z[R].push(k);
          else if (j[R] = q = {}, !T && !O._termHasColon) {
            z[R] = [k];
            const D = { iri: R, terms: z[R] };
            R[0] in P ? P[R[0]].push(D) : P[R[0]] = [D];
          }
          if (q[V] || (q[V] = {
            "@language": {},
            "@type": {},
            "@any": {}
          }), q = q[V], $(k, q["@any"], "@none"), O.reverse)
            $(k, q["@type"], "@reverse");
          else if (O["@type"] === "@none")
            $(k, q["@any"], "@none"), $(k, q["@language"], "@none"), $(k, q["@type"], "@none");
          else if ("@type" in O)
            $(k, q["@type"], O["@type"]);
          else if ("@language" in O && "@direction" in O) {
            const D = O["@language"], H = O["@direction"];
            D && H ? $(
              k,
              q["@language"],
              `${D}_${H}`.toLowerCase()
            ) : D ? $(k, q["@language"], D.toLowerCase()) : H ? $(k, q["@language"], `_${H}`) : $(k, q["@language"], "@null");
          } else "@language" in O ? $(
            k,
            q["@language"],
            (O["@language"] || "@null").toLowerCase()
          ) : "@direction" in O ? O["@direction"] ? $(
            k,
            q["@language"],
            `_${O["@direction"]}`
          ) : $(k, q["@language"], "@none") : Z ? ($(k, q["@language"], `_${Z}`), $(k, q["@language"], "@none"), $(k, q["@type"], "@none")) : ($(k, q["@language"], _), $(k, q["@language"], "@none"), $(k, q["@type"], "@none"));
        }
      }
      for (const k in P)
        A(P, k, 1);
      return j;
    }
    function A(E, j, P) {
      const z = E[j], _ = E[j] = {};
      let Z, L;
      for (const F of z)
        Z = F.iri, P >= Z.length ? L = "" : L = Z[P], L in _ ? _[L].push(F) : _[L] = [F];
      for (const F in _)
        F !== "" && A(_, F, P + 1);
    }
    function $(E, j, P) {
      j.hasOwnProperty(P) || (j[P] = E);
    }
    function C() {
      const E = {};
      return E.mappings = e.clone(this.mappings), E.clone = this.clone, E.inverse = null, E.getInverse = this.getInverse, E.protected = e.clone(this.protected), this.previousContext && (E.previousContext = this.previousContext.clone()), E.revertToPreviousContext = this.revertToPreviousContext, "@base" in this && (E["@base"] = this["@base"]), "@language" in this && (E["@language"] = this["@language"]), "@vocab" in this && (E["@vocab"] = this["@vocab"]), E;
    }
    function M() {
      return this.previousContext ? this.previousContext.clone() : this;
    }
  }, b.getContextValue = (y, d, l) => {
    if (d === null)
      return l === "@context" ? void 0 : null;
    if (y.mappings.has(d)) {
      const h = y.mappings.get(d);
      if (r(l))
        return h;
      if (h.hasOwnProperty(l))
        return h[l];
    }
    if (l === "@language" && l in y || l === "@direction" && l in y)
      return y[l];
    if (l !== "@context")
      return null;
  }, b.processingMode = (y, d) => d.toString() >= "1.1" ? !y.processingMode || y.processingMode >= "json-ld-" + d.toString() : y.processingMode === "json-ld-1.0", b.isKeyword = (y) => {
    if (!c(y) || y[0] !== "@")
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
    const h = Object.keys(y), I = Object.keys(d);
    if (h.length !== I.length)
      return !1;
    for (const A in y) {
      let $ = y[A], C = d[A];
      if (A === "@container" && Array.isArray($) && Array.isArray(C) && ($ = $.slice().sort(), C = C.slice().sort()), !v($, C))
        return !1;
    }
    return !0;
  }
  return Yr;
}
var es, Ic;
function Wf() {
  if (Ic) return es;
  Ic = 1;
  const e = Ue(), {
    isArray: t,
    isObject: n,
    isEmptyObject: i,
    isString: c,
    isUndefined: r
  } = Ee(), {
    isList: a,
    isValue: s,
    isGraph: o,
    isSubject: p
  } = yt(), {
    expandIri: m,
    getContextValue: g,
    isKeyword: u,
    process: f,
    processingMode: w
  } = Ot(), {
    isAbsolute: x
  } = jt(), {
    REGEX_BCP47: b,
    REGEX_KEYWORD: S,
    addValue: v,
    asArray: y,
    getValues: d,
    validateTypeValue: l
  } = Ve(), {
    handleEvent: h
  } = Sn(), I = {};
  es = I, I.expand = async ({
    activeCtx: j,
    activeProperty: P = null,
    element: z,
    options: _ = {},
    insideList: Z = !1,
    insideIndex: L = !1,
    typeScopedContext: F = null
  }) => {
    if (z == null)
      return null;
    if (P === "@default" && (_ = Object.assign({}, _, { isFrame: !1 })), !t(z) && !n(z))
      return !Z && (P === null || m(
        j,
        P,
        { vocab: !0 },
        _
      ) === "@graph") ? (_.eventHandler && h({
        event: {
          type: ["JsonLdEvent"],
          code: "free-floating scalar",
          level: "warning",
          message: "Dropping free-floating scalar not in a list.",
          details: {
            value: z
            //activeProperty
            //insideList
          }
        },
        options: _
      }), null) : C({ activeCtx: j, activeProperty: P, value: z, options: _ });
    if (t(z)) {
      let D = [];
      const H = g(
        j,
        P,
        "@container"
      ) || [];
      Z = Z || H.includes("@list");
      for (let Q = 0; Q < z.length; ++Q) {
        let J = await I.expand({
          activeCtx: j,
          activeProperty: P,
          element: z[Q],
          options: _,
          insideIndex: L,
          typeScopedContext: F
        });
        Z && t(J) && (J = { "@list": J }), J !== null && (t(J) ? D = D.concat(J) : D.push(J));
      }
      return D;
    }
    const k = m(
      j,
      P,
      { vocab: !0 },
      _
    ), O = g(j, P, "@context");
    F = F || (j.previousContext ? j : null);
    let V = Object.keys(z).sort(), N = !L;
    if (N && F && V.length <= 2 && !V.includes("@context"))
      for (const D of V) {
        const H = m(
          F,
          D,
          { vocab: !0 },
          _
        );
        if (H === "@value") {
          N = !1, j = F;
          break;
        }
        if (H === "@id" && V.length === 1) {
          N = !1;
          break;
        }
      }
    N && (j = j.revertToPreviousContext()), r(O) || (j = await f({
      activeCtx: j,
      localCtx: O,
      propagate: !0,
      overrideProtected: !0,
      options: _
    })), "@context" in z && (j = await f(
      { activeCtx: j, localCtx: z["@context"], options: _ }
    )), F = j;
    let R = null;
    for (const D of V)
      if (m(j, D, { vocab: !0 }, _) === "@type") {
        R = R || D;
        const Q = z[D], J = Array.isArray(Q) ? Q.length > 1 ? Q.slice().sort() : Q : [Q];
        for (const U of J) {
          const G = g(F, U, "@context");
          r(G) || (j = await f({
            activeCtx: j,
            localCtx: G,
            options: _,
            propagate: !1
          }));
        }
      }
    let q = {};
    await $({
      activeCtx: j,
      activeProperty: P,
      expandedActiveProperty: k,
      element: z,
      expandedParent: q,
      options: _,
      insideList: Z,
      typeKey: R,
      typeScopedContext: F
    }), V = Object.keys(q);
    let T = V.length;
    if ("@value" in q) {
      if ("@type" in q && ("@language" in q || "@direction" in q))
        throw new e(
          'Invalid JSON-LD syntax; an element containing "@value" may not contain both "@type" and either "@language" or "@direction".',
          "jsonld.SyntaxError",
          { code: "invalid value object", element: q }
        );
      let D = T - 1;
      if ("@type" in q && (D -= 1), "@index" in q && (D -= 1), "@language" in q && (D -= 1), "@direction" in q && (D -= 1), D !== 0)
        throw new e(
          'Invalid JSON-LD syntax; an element containing "@value" may only have an "@index" property and either "@type" or either or both "@language" or "@direction".',
          "jsonld.SyntaxError",
          { code: "invalid value object", element: q }
        );
      const H = q["@value"] === null ? [] : y(q["@value"]), Q = d(q, "@type");
      if (!(w(j, 1.1) && Q.includes("@json") && Q.length === 1)) if (H.length === 0)
        _.eventHandler && h({
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
        if (!H.every((J) => c(J) || i(J)) && "@language" in q)
          throw new e(
            "Invalid JSON-LD syntax; only strings may be language-tagged.",
            "jsonld.SyntaxError",
            { code: "invalid language-tagged value", element: q }
          );
        if (!Q.every((J) => x(J) && !(c(J) && J.indexOf("_:") === 0) || i(J)))
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
      "@set" in q && (q = q["@set"], V = Object.keys(q), T = V.length);
    } else T === 1 && "@language" in q && (_.eventHandler && h({
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
    return n(q) && !_.keepFreeFloatingNodes && !Z && (P === null || k === "@graph" || (g(j, P, "@container") || []).includes("@graph")) && (q = A({ value: q, count: T, options: _ })), q;
  };
  function A({
    value: j,
    count: P,
    options: z
  }) {
    if (P === 0 || "@value" in j || "@list" in j || P === 1 && "@id" in j) {
      if (z.eventHandler) {
        let _, Z;
        P === 0 ? (_ = "empty object", Z = "Dropping empty object.") : "@value" in j ? (_ = "object with only @value", Z = "Dropping object with only @value.") : "@list" in j ? (_ = "object with only @list", Z = "Dropping object with only @list.") : P === 1 && "@id" in j && (_ = "object with only @id", Z = "Dropping object with only @id."), h({
          event: {
            type: ["JsonLdEvent"],
            code: _,
            level: "warning",
            message: Z,
            details: {
              value: j
            }
          },
          options: z
        });
      }
      return null;
    }
    return j;
  }
  async function $({
    activeCtx: j,
    activeProperty: P,
    expandedActiveProperty: z,
    element: _,
    expandedParent: Z,
    options: L = {},
    insideList: F,
    typeKey: k,
    typeScopedContext: O
  }) {
    const V = Object.keys(_).sort(), N = [];
    let R;
    const q = _[k] && m(
      j,
      t(_[k]) ? _[k][0] : _[k],
      { vocab: !0 },
      {
        ...L,
        typeExpansion: !0
      }
    ) === "@json";
    for (const T of V) {
      let D = _[T], H;
      if (T === "@context")
        continue;
      const Q = m(j, T, { vocab: !0 }, L);
      if (Q === null || !(x(Q) || u(Q))) {
        L.eventHandler && h({
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
      if (u(Q)) {
        if (z === "@reverse")
          throw new e(
            "Invalid JSON-LD syntax; a keyword cannot be used as a @reverse property.",
            "jsonld.SyntaxError",
            { code: "invalid reverse property map", value: D }
          );
        if (Q in Z && Q !== "@included" && Q !== "@type")
          throw new e(
            "Invalid JSON-LD syntax; colliding keywords detected.",
            "jsonld.SyntaxError",
            { code: "colliding keywords", keyword: Q }
          );
      }
      if (Q === "@id") {
        if (!c(D)) {
          if (!L.isFrame)
            throw new e(
              'Invalid JSON-LD syntax; "@id" value must a string.',
              "jsonld.SyntaxError",
              { code: "invalid @id value", value: D }
            );
          if (n(D)) {
            if (!i(D))
              throw new e(
                'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
                "jsonld.SyntaxError",
                { code: "invalid @id value", value: D }
              );
          } else if (t(D)) {
            if (!D.every((B) => c(B)))
              throw new e(
                'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
                "jsonld.SyntaxError",
                { code: "invalid @id value", value: D }
              );
          } else
            throw new e(
              'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
              "jsonld.SyntaxError",
              { code: "invalid @id value", value: D }
            );
        }
        v(
          Z,
          "@id",
          y(D).map((B) => {
            if (c(B)) {
              const K = m(j, B, { base: !0 }, L);
              return L.eventHandler && (K === null ? h(B === null ? {
                event: {
                  type: ["JsonLdEvent"],
                  code: "null @id value",
                  level: "warning",
                  message: "Null @id found.",
                  details: {
                    id: B
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
                    id: B
                  }
                },
                options: L
              }) : x(K) || h({
                event: {
                  type: ["JsonLdEvent"],
                  code: "relative @id reference",
                  level: "warning",
                  message: "Relative @id reference found.",
                  details: {
                    id: B,
                    expandedId: K
                  }
                },
                options: L
              })), K;
            }
            return B;
          }),
          { propertyIsArray: L.isFrame }
        );
        continue;
      }
      if (Q === "@type") {
        n(D) && (D = Object.fromEntries(Object.entries(D).map(([B, K]) => [
          m(O, B, { vocab: !0 }),
          y(K).map(
            (W) => m(
              O,
              W,
              { base: !0, vocab: !0 },
              { ...L, typeExpansion: !0 }
            )
          )
        ]))), l(D, L.isFrame), v(
          Z,
          "@type",
          y(D).map((B) => {
            if (c(B)) {
              const K = m(
                O,
                B,
                { base: !0, vocab: !0 },
                { ...L, typeExpansion: !0 }
              );
              return K !== "@json" && !x(K) && L.eventHandler && h({
                event: {
                  type: ["JsonLdEvent"],
                  code: "relative @type reference",
                  level: "warning",
                  message: "Relative @type reference found.",
                  details: {
                    type: B
                  }
                },
                options: L
              }), K;
            }
            return B;
          }),
          { propertyIsArray: !!L.isFrame }
        );
        continue;
      }
      if (Q === "@included" && w(j, 1.1)) {
        const B = y(await I.expand({
          activeCtx: j,
          activeProperty: P,
          element: D,
          options: L
        }));
        if (!B.every((K) => p(K)))
          throw new e(
            "Invalid JSON-LD syntax; values of @included must expand to node objects.",
            "jsonld.SyntaxError",
            { code: "invalid @included value", value: D }
          );
        v(
          Z,
          "@included",
          B,
          { propertyIsArray: !0 }
        );
        continue;
      }
      if (Q === "@graph" && !(n(D) || t(D)))
        throw new e(
          'Invalid JSON-LD syntax; "@graph" value must not be an object or an array.',
          "jsonld.SyntaxError",
          { code: "invalid @graph value", value: D }
        );
      if (Q === "@value") {
        R = D, q && w(j, 1.1) ? Z["@value"] = D : v(
          Z,
          "@value",
          D,
          { propertyIsArray: L.isFrame }
        );
        continue;
      }
      if (Q === "@language") {
        if (D === null)
          continue;
        if (!c(D) && !L.isFrame)
          throw new e(
            'Invalid JSON-LD syntax; "@language" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid language-tagged string", value: D }
          );
        D = y(D).map((B) => c(B) ? B.toLowerCase() : B);
        for (const B of D)
          c(B) && !B.match(b) && L.eventHandler && h({
            event: {
              type: ["JsonLdEvent"],
              code: "invalid @language value",
              level: "warning",
              message: "@language value must be valid BCP47.",
              details: {
                language: B
              }
            },
            options: L
          });
        v(
          Z,
          "@language",
          D,
          { propertyIsArray: L.isFrame }
        );
        continue;
      }
      if (Q === "@direction") {
        if (!c(D) && !L.isFrame)
          throw new e(
            'Invalid JSON-LD syntax; "@direction" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid base direction", value: D }
          );
        D = y(D);
        for (const B of D)
          if (c(B) && B !== "ltr" && B !== "rtl")
            throw new e(
              'Invalid JSON-LD syntax; "@direction" must be "ltr" or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", value: D }
            );
        v(
          Z,
          "@direction",
          D,
          { propertyIsArray: L.isFrame }
        );
        continue;
      }
      if (Q === "@index") {
        if (!c(D))
          throw new e(
            'Invalid JSON-LD syntax; "@index" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid @index value", value: D }
          );
        v(Z, "@index", D);
        continue;
      }
      if (Q === "@reverse") {
        if (!n(D))
          throw new e(
            'Invalid JSON-LD syntax; "@reverse" value must be an object.',
            "jsonld.SyntaxError",
            { code: "invalid @reverse value", value: D }
          );
        if (H = await I.expand({
          activeCtx: j,
          activeProperty: "@reverse",
          element: D,
          options: L
        }), "@reverse" in H)
          for (const K in H["@reverse"])
            v(
              Z,
              K,
              H["@reverse"][K],
              { propertyIsArray: !0 }
            );
        let B = Z["@reverse"] || null;
        for (const K in H) {
          if (K === "@reverse")
            continue;
          B === null && (B = Z["@reverse"] = {}), v(B, K, [], { propertyIsArray: !0 });
          const W = H[K];
          for (let ee = 0; ee < W.length; ++ee) {
            const re = W[ee];
            if (s(re) || a(re))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: H }
              );
            v(B, K, re, { propertyIsArray: !0 });
          }
        }
        continue;
      }
      if (Q === "@nest") {
        N.push(T);
        continue;
      }
      let J = j;
      const U = g(j, T, "@context");
      r(U) || (J = await f({
        activeCtx: j,
        localCtx: U,
        propagate: !0,
        overrideProtected: !0,
        options: L
      }));
      const G = g(j, T, "@container") || [];
      if (G.includes("@language") && n(D)) {
        const B = g(J, T, "@direction");
        H = M(J, D, B, L);
      } else if (G.includes("@index") && n(D)) {
        const B = G.includes("@graph"), K = g(J, T, "@index") || "@index", W = K !== "@index" && m(j, K, { vocab: !0 }, L);
        H = await E({
          activeCtx: J,
          options: L,
          activeProperty: T,
          value: D,
          asGraph: B,
          indexKey: K,
          propertyIndex: W
        });
      } else if (G.includes("@id") && n(D)) {
        const B = G.includes("@graph");
        H = await E({
          activeCtx: J,
          options: L,
          activeProperty: T,
          value: D,
          asGraph: B,
          indexKey: "@id"
        });
      } else if (G.includes("@type") && n(D))
        H = await E({
          // since container is `@type`, revert type scoped context when expanding
          activeCtx: J.revertToPreviousContext(),
          options: L,
          activeProperty: T,
          value: D,
          asGraph: !1,
          indexKey: "@type"
        });
      else {
        const B = Q === "@list";
        if (B || Q === "@set") {
          let K = P;
          B && z === "@graph" && (K = null), H = await I.expand({
            activeCtx: J,
            activeProperty: K,
            element: D,
            options: L,
            insideList: B
          });
        } else g(j, T, "@type") === "@json" ? H = {
          "@type": "@json",
          "@value": D
        } : H = await I.expand({
          activeCtx: J,
          activeProperty: T,
          element: D,
          options: L,
          insideList: !1
        });
      }
      if (!(H === null && Q !== "@value")) {
        if (Q !== "@list" && !a(H) && G.includes("@list") && (H = { "@list": y(H) }), G.includes("@graph") && !G.some((B) => B === "@id" || B === "@index")) {
          if (H = y(H), L.isFrame || (H = H.filter((B) => {
            const K = Object.keys(B).length;
            return A({ value: B, count: K, options: L }) !== null;
          })), H.length === 0)
            continue;
          H = H.map((B) => ({ "@graph": y(B) }));
        }
        if (J.mappings.has(T) && J.mappings.get(T).reverse) {
          const B = Z["@reverse"] = Z["@reverse"] || {};
          H = y(H);
          for (let K = 0; K < H.length; ++K) {
            const W = H[K];
            if (s(W) || a(W))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: H }
              );
            v(B, Q, W, { propertyIsArray: !0 });
          }
          continue;
        }
        v(Z, Q, H, {
          propertyIsArray: !0
        });
      }
    }
    if ("@value" in Z && !(Z["@type"] === "@json" && w(j, 1.1))) {
      if ((n(R) || t(R)) && !L.isFrame)
        throw new e(
          'Invalid JSON-LD syntax; "@value" value must not be an object or an array.',
          "jsonld.SyntaxError",
          { code: "invalid value object value", value: R }
        );
    }
    for (const T of N) {
      const D = t(_[T]) ? _[T] : [_[T]];
      for (const H of D) {
        if (!n(H) || Object.keys(H).some((Q) => m(j, Q, { vocab: !0 }, L) === "@value"))
          throw new e(
            "Invalid JSON-LD syntax; nested value must be a node object.",
            "jsonld.SyntaxError",
            { code: "invalid @nest value", value: H }
          );
        await $({
          activeCtx: j,
          activeProperty: P,
          expandedActiveProperty: z,
          element: H,
          expandedParent: Z,
          options: L,
          insideList: F,
          typeScopedContext: O,
          typeKey: k
        });
      }
    }
  }
  function C({ activeCtx: j, activeProperty: P, value: z, options: _ }) {
    if (z == null)
      return null;
    const Z = m(
      j,
      P,
      { vocab: !0 },
      _
    );
    if (Z === "@id")
      return m(j, z, { base: !0 }, _);
    if (Z === "@type")
      return m(
        j,
        z,
        { vocab: !0, base: !0 },
        { ..._, typeExpansion: !0 }
      );
    const L = g(j, P, "@type");
    if ((L === "@id" || Z === "@graph") && c(z)) {
      const k = m(j, z, { base: !0 }, _);
      return k === null && z.match(S) && _.eventHandler && h({
        event: {
          type: ["JsonLdEvent"],
          code: "reserved @id value",
          level: "warning",
          message: "Reserved @id found.",
          details: {
            id: P
          }
        },
        options: _
      }), { "@id": k };
    }
    if (L === "@vocab" && c(z))
      return {
        "@id": m(j, z, { vocab: !0, base: !0 }, _)
      };
    if (u(Z))
      return z;
    const F = {};
    if (L && !["@id", "@vocab", "@none"].includes(L))
      F["@type"] = L;
    else if (c(z)) {
      const k = g(j, P, "@language");
      k !== null && (F["@language"] = k);
      const O = g(j, P, "@direction");
      O !== null && (F["@direction"] = O);
    }
    return ["boolean", "number", "string"].includes(typeof z) || (z = z.toString()), F["@value"] = z, F;
  }
  function M(j, P, z, _) {
    const Z = [], L = Object.keys(P).sort();
    for (const F of L) {
      const k = m(j, F, { vocab: !0 }, _);
      let O = P[F];
      t(O) || (O = [O]);
      for (const V of O) {
        if (V === null)
          continue;
        if (!c(V))
          throw new e(
            "Invalid JSON-LD syntax; language map values must be strings.",
            "jsonld.SyntaxError",
            { code: "invalid language map value", languageMap: P }
          );
        const N = { "@value": V };
        k !== "@none" && (F.match(b) || _.eventHandler && h({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: F
            }
          },
          options: _
        }), N["@language"] = F.toLowerCase()), z && (N["@direction"] = z), Z.push(N);
      }
    }
    return Z;
  }
  async function E({
    activeCtx: j,
    options: P,
    activeProperty: z,
    value: _,
    asGraph: Z,
    indexKey: L,
    propertyIndex: F
  }) {
    const k = [], O = Object.keys(_).sort(), V = L === "@type";
    for (let N of O) {
      if (V) {
        const T = g(j, N, "@context");
        r(T) || (j = await f({
          activeCtx: j,
          localCtx: T,
          propagate: !1,
          options: P
        }));
      }
      let R = _[N];
      t(R) || (R = [R]), R = await I.expand({
        activeCtx: j,
        activeProperty: z,
        element: R,
        options: P,
        insideList: !1,
        insideIndex: !0
      });
      let q;
      F ? N === "@none" ? q = "@none" : q = C(
        { activeCtx: j, activeProperty: L, value: N, options: P }
      ) : q = m(j, N, { vocab: !0 }, P), L === "@id" ? N = m(j, N, { base: !0 }, P) : V && (N = q);
      for (let T of R) {
        if (Z && !o(T) && (T = { "@graph": [T] }), L === "@type")
          q === "@none" || (T["@type"] ? T["@type"] = [N].concat(T["@type"]) : T["@type"] = [N]);
        else {
          if (s(T) && !["@language", "@type", "@index"].includes(L))
            throw new e(
              `Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${L}".`,
              "jsonld.SyntaxError",
              { code: "invalid value object", value: T }
            );
          F ? q !== "@none" && v(T, F, q, {
            propertyIsArray: !0,
            prependValue: !0
          }) : q !== "@none" && !(L in T) && (T[L] = N);
        }
        k.push(T);
      }
    }
    return k;
  }
  return es;
}
var ts, Ac;
function Xi() {
  if (Ac) return ts;
  Ac = 1;
  const { isKeyword: e } = Ot(), t = yt(), n = Ee(), i = Ve(), c = Ue(), r = {};
  return ts = r, r.createMergedNodeMap = (a, s) => {
    s = s || {};
    const o = s.issuer || new i.IdentifierIssuer("_:b"), p = { "@default": {} };
    return r.createNodeMap(a, p, "@default", o), r.mergeNodeMaps(p);
  }, r.createNodeMap = (a, s, o, p, m, g) => {
    if (n.isArray(a)) {
      for (const x of a)
        r.createNodeMap(x, s, o, p, void 0, g);
      return;
    }
    if (!n.isObject(a)) {
      g && g.push(a);
      return;
    }
    if (t.isValue(a)) {
      if ("@type" in a) {
        let x = a["@type"];
        x.indexOf("_:") === 0 && (a["@type"] = x = p.getId(x));
      }
      g && g.push(a);
      return;
    } else if (g && t.isList(a)) {
      const x = [];
      r.createNodeMap(a["@list"], s, o, p, m, x), g.push({ "@list": x });
      return;
    }
    if ("@type" in a) {
      const x = a["@type"];
      for (const b of x)
        b.indexOf("_:") === 0 && p.getId(b);
    }
    n.isUndefined(m) && (m = t.isBlankNode(a) ? p.getId(a["@id"]) : a["@id"]), g && g.push({ "@id": m });
    const u = s[o], f = u[m] = u[m] || {};
    f["@id"] = m;
    const w = Object.keys(a).sort();
    for (let x of w) {
      if (x === "@id")
        continue;
      if (x === "@reverse") {
        const S = { "@id": m }, v = a["@reverse"];
        for (const y in v) {
          const d = v[y];
          for (const l of d) {
            let h = l["@id"];
            t.isBlankNode(l) && (h = p.getId(h)), r.createNodeMap(l, s, o, p, h), i.addValue(
              u[h],
              y,
              S,
              { propertyIsArray: !0, allowDuplicate: !1 }
            );
          }
        }
        continue;
      }
      if (x === "@graph") {
        m in s || (s[m] = {}), r.createNodeMap(a[x], s, m, p);
        continue;
      }
      if (x === "@included") {
        r.createNodeMap(a[x], s, o, p);
        continue;
      }
      if (x !== "@type" && e(x)) {
        if (x === "@index" && x in f && (a[x] !== f[x] || a[x]["@id"] !== f[x]["@id"]))
          throw new c(
            "Invalid JSON-LD syntax; conflicting @index property detected.",
            "jsonld.SyntaxError",
            { code: "conflicting indexes", subject: f }
          );
        f[x] = a[x];
        continue;
      }
      const b = a[x];
      if (x.indexOf("_:") === 0 && (x = p.getId(x)), b.length === 0) {
        i.addValue(f, x, [], { propertyIsArray: !0 });
        continue;
      }
      for (let S of b)
        if (x === "@type" && (S = S.indexOf("_:") === 0 ? p.getId(S) : S), t.isSubject(S) || t.isSubjectReference(S)) {
          if ("@id" in S && !S["@id"])
            continue;
          const v = t.isBlankNode(S) ? p.getId(S["@id"]) : S["@id"];
          i.addValue(
            f,
            x,
            { "@id": v },
            { propertyIsArray: !0, allowDuplicate: !1 }
          ), r.createNodeMap(S, s, o, p, v);
        } else if (t.isValue(S))
          i.addValue(
            f,
            x,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        else if (t.isList(S)) {
          const v = [];
          r.createNodeMap(S["@list"], s, o, p, m, v), S = { "@list": v }, i.addValue(
            f,
            x,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        } else
          r.createNodeMap(S, s, o, p, m), i.addValue(
            f,
            x,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
    }
  }, r.mergeNodeMapGraphs = (a) => {
    const s = {};
    for (const o of Object.keys(a).sort())
      for (const p of Object.keys(a[o]).sort()) {
        const m = a[o][p];
        p in s || (s[p] = { "@id": p });
        const g = s[p];
        for (const u of Object.keys(m).sort())
          if (e(u) && u !== "@type")
            g[u] = i.clone(m[u]);
          else
            for (const f of m[u])
              i.addValue(
                g,
                u,
                i.clone(f),
                { propertyIsArray: !0, allowDuplicate: !1 }
              );
      }
    return s;
  }, r.mergeNodeMaps = (a) => {
    const s = a["@default"], o = Object.keys(a).sort();
    for (const p of o) {
      if (p === "@default")
        continue;
      const m = a[p];
      let g = s[p];
      g ? "@graph" in g || (g["@graph"] = []) : s[p] = g = {
        "@id": p,
        "@graph": []
      };
      const u = g["@graph"];
      for (const f of Object.keys(m).sort()) {
        const w = m[f];
        t.isSubjectReference(w) || u.push(w);
      }
    }
    return s;
  }, ts;
}
var ns, qc;
function Xf() {
  if (qc) return ns;
  qc = 1;
  const {
    isSubjectReference: e
  } = yt(), {
    createMergedNodeMap: t
  } = Xi(), n = {};
  return ns = n, n.flatten = (i) => {
    const c = t(i), r = [], a = Object.keys(c).sort();
    for (let s = 0; s < a.length; ++s) {
      const o = c[a[s]];
      e(o) || r.push(o);
    }
    return r;
  }, ns;
}
var is, Rc;
function Yf() {
  if (Rc) return is;
  Rc = 1;
  const e = Ue(), t = yt(), n = Ee(), {
    REGEX_BCP47: i,
    addValue: c
  } = Ve(), {
    handleEvent: r
  } = Sn(), {
    // RDF,
    RDF_LIST: a,
    RDF_FIRST: s,
    RDF_REST: o,
    RDF_NIL: p,
    RDF_TYPE: m,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: g,
    // RDF_OBJECT,
    // RDF_LANGSTRING,
    // XSD,
    XSD_BOOLEAN: u,
    XSD_DOUBLE: f,
    XSD_INTEGER: w,
    XSD_STRING: x
  } = Gs(), b = {};
  is = b, b.fromRDF = async (v, y) => {
    const {
      useRdfType: d = !1,
      useNativeTypes: l = !1,
      rdfDirection: h = null
    } = y, I = {}, A = { "@default": I }, $ = {};
    if (h) {
      if (h === "compound-literal")
        throw new e(
          "Unsupported rdfDirection value.",
          "jsonld.InvalidRdfDirection",
          { value: h }
        );
      if (h !== "i18n-datatype")
        throw new e(
          "Unknown rdfDirection value.",
          "jsonld.InvalidRdfDirection",
          { value: h }
        );
    }
    for (const E of v) {
      const j = E.graph.termType === "DefaultGraph" ? "@default" : E.graph.value;
      j in A || (A[j] = {}), j !== "@default" && !(j in I) && (I[j] = { "@id": j });
      const P = A[j], z = E.subject.value, _ = E.predicate.value, Z = E.object;
      z in P || (P[z] = { "@id": z });
      const L = P[z], F = Z.termType.endsWith("Node");
      if (F && !(Z.value in P) && (P[Z.value] = { "@id": Z.value }), _ === m && !d && F) {
        c(L, "@type", Z.value, { propertyIsArray: !0 });
        continue;
      }
      const k = S(Z, l, h, y);
      if (c(L, _, k, { propertyIsArray: !0 }), F)
        if (Z.value === p) {
          const O = P[Z.value];
          "usages" in O || (O.usages = []), O.usages.push({
            node: L,
            property: _,
            value: k
          });
        } else Z.value in $ ? $[Z.value] = !1 : $[Z.value] = {
          node: L,
          property: _,
          value: k
        };
    }
    for (const E in A) {
      const j = A[E];
      if (!(p in j))
        continue;
      const P = j[p];
      if (P.usages) {
        for (let z of P.usages) {
          let _ = z.node, Z = z.property, L = z.value;
          const F = [], k = [];
          let O = Object.keys(_).length;
          for (; Z === o && n.isObject($[_["@id"]]) && n.isArray(_[s]) && _[s].length === 1 && n.isArray(_[o]) && _[o].length === 1 && (O === 3 || O === 4 && n.isArray(_["@type"]) && _["@type"].length === 1 && _["@type"][0] === a) && (F.push(_[s][0]), k.push(_["@id"]), z = $[_["@id"]], _ = z.node, Z = z.property, L = z.value, O = Object.keys(_).length, !!t.isBlankNode(_)); )
            ;
          delete L["@id"], L["@list"] = F.reverse();
          for (const V of k)
            delete j[V];
        }
        delete P.usages;
      }
    }
    const C = [], M = Object.keys(I).sort();
    for (const E of M) {
      const j = I[E];
      if (E in A) {
        const P = j["@graph"] = [], z = A[E], _ = Object.keys(z).sort();
        for (const Z of _) {
          const L = z[Z];
          t.isSubjectReference(L) || P.push(L);
        }
      }
      t.isSubjectReference(j) || C.push(j);
    }
    return C;
  };
  function S(v, y, d, l) {
    if (v.termType.endsWith("Node"))
      return { "@id": v.value };
    const h = { "@value": v.value };
    if (v.language)
      v.language.match(i) || l.eventHandler && r({
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
      }), h["@language"] = v.language;
    else {
      let I = v.datatype.value;
      if (I || (I = x), I === g) {
        I = "@json";
        try {
          h["@value"] = JSON.parse(h["@value"]);
        } catch (A) {
          throw new e(
            "JSON literal could not be parsed.",
            "jsonld.InvalidJsonLiteral",
            { code: "invalid JSON literal", value: h["@value"], cause: A }
          );
        }
      }
      if (y) {
        if (I === u)
          h["@value"] === "true" ? h["@value"] = !0 : h["@value"] === "false" && (h["@value"] = !1);
        else if (n.isNumeric(h["@value"]))
          if (I === w) {
            const A = parseInt(h["@value"], 10);
            A.toFixed(0) === h["@value"] && (h["@value"] = A);
          } else I === f && (h["@value"] = parseFloat(h["@value"]));
        [u, w, f, x].includes(I) || (h["@type"] = I);
      } else if (d === "i18n-datatype" && I.startsWith("https://www.w3.org/ns/i18n#")) {
        const [, A, $] = I.split(/[#_]/);
        A.length > 0 && (h["@language"] = A, A.match(i) || l.eventHandler && r({
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
        })), h["@direction"] = $;
      } else I !== x && (h["@type"] = I);
    }
    return h;
  }
  return is;
}
var rs, jc;
function eh() {
  return jc || (jc = 1, rs = function e(t) {
    return t === null || typeof t != "object" || t.toJSON != null ? JSON.stringify(t) : Array.isArray(t) ? "[" + t.reduce((n, i, c) => {
      const r = c === 0 ? "" : ",", a = i === void 0 || typeof i == "symbol" ? null : i;
      return n + r + e(a);
    }, "") + "]" : "{" + Object.keys(t).sort().reduce((n, i, c) => {
      if (t[i] === void 0 || typeof t[i] == "symbol")
        return n;
      const r = n.length === 0 ? "" : ",";
      return n + r + e(i) + ":" + e(t[i]);
    }, "") + "}";
  }), rs;
}
var ss, $c;
function th() {
  if ($c) return ss;
  $c = 1;
  const { createNodeMap: e } = Xi(), { isKeyword: t } = Ot(), n = yt(), i = eh(), c = Ue(), r = Ee(), a = Ve(), {
    handleEvent: s
  } = Sn(), {
    // RDF,
    // RDF_LIST,
    RDF_FIRST: o,
    RDF_REST: p,
    RDF_NIL: m,
    RDF_TYPE: g,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: u,
    // RDF_OBJECT,
    RDF_LANGSTRING: f,
    // XSD,
    XSD_BOOLEAN: w,
    XSD_DOUBLE: x,
    XSD_INTEGER: b,
    XSD_STRING: S
  } = Gs(), {
    isAbsolute: v
  } = jt(), y = {};
  ss = y, y.toRDF = (I, A) => {
    const $ = new a.IdentifierIssuer("_:b"), C = { "@default": {} };
    e(I, C, "@default", $);
    const M = [], E = Object.keys(C).sort();
    for (const j of E) {
      let P;
      if (j === "@default")
        P = { termType: "DefaultGraph", value: "" };
      else if (v(j))
        j.startsWith("_:") ? P = { termType: "BlankNode" } : P = { termType: "NamedNode" }, P.value = j;
      else {
        A.eventHandler && s({
          event: {
            type: ["JsonLdEvent"],
            code: "relative graph reference",
            level: "warning",
            message: "Relative graph reference found.",
            details: {
              graph: j
            }
          },
          options: A
        });
        continue;
      }
      d(M, C[j], P, $, A);
    }
    return M;
  };
  function d(I, A, $, C, M) {
    const E = Object.keys(A).sort();
    for (const j of E) {
      const P = A[j], z = Object.keys(P).sort();
      for (let _ of z) {
        const Z = P[_];
        if (_ === "@type")
          _ = g;
        else if (t(_))
          continue;
        for (const L of Z) {
          const F = {
            termType: j.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: j
          };
          if (!v(j)) {
            M.eventHandler && s({
              event: {
                type: ["JsonLdEvent"],
                code: "relative subject reference",
                level: "warning",
                message: "Relative subject reference found.",
                details: {
                  subject: j
                }
              },
              options: M
            });
            continue;
          }
          const k = {
            termType: _.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: _
          };
          if (!v(_)) {
            M.eventHandler && s({
              event: {
                type: ["JsonLdEvent"],
                code: "relative predicate reference",
                level: "warning",
                message: "Relative predicate reference found.",
                details: {
                  predicate: _
                }
              },
              options: M
            });
            continue;
          }
          if (k.termType === "BlankNode" && !M.produceGeneralizedRdf) {
            M.eventHandler && s({
              event: {
                type: ["JsonLdEvent"],
                code: "blank node predicate",
                level: "warning",
                message: "Dropping blank node predicate.",
                details: {
                  // FIXME: add better issuer API to get reverse mapping
                  property: C.getOldIds().find((V) => C.getId(V) === _)
                }
              },
              options: M
            });
            continue;
          }
          const O = h(
            L,
            C,
            I,
            $,
            M.rdfDirection,
            M
          );
          O && I.push({
            subject: F,
            predicate: k,
            object: O,
            graph: $
          });
        }
      }
    }
  }
  function l(I, A, $, C, M, E) {
    const j = { termType: "NamedNode", value: o }, P = { termType: "NamedNode", value: p }, z = { termType: "NamedNode", value: m }, _ = I.pop(), Z = _ ? { termType: "BlankNode", value: A.getId() } : z;
    let L = Z;
    for (const F of I) {
      const k = h(
        F,
        A,
        $,
        C,
        M,
        E
      ), O = { termType: "BlankNode", value: A.getId() };
      $.push({
        subject: L,
        predicate: j,
        object: k,
        graph: C
      }), $.push({
        subject: L,
        predicate: P,
        object: O,
        graph: C
      }), L = O;
    }
    if (_) {
      const F = h(
        _,
        A,
        $,
        C,
        M,
        E
      );
      $.push({
        subject: L,
        predicate: j,
        object: F,
        graph: C
      }), $.push({
        subject: L,
        predicate: P,
        object: z,
        graph: C
      });
    }
    return Z;
  }
  function h(I, A, $, C, M, E) {
    const j = {};
    if (n.isValue(I)) {
      j.termType = "Literal", j.value = void 0, j.datatype = {
        termType: "NamedNode"
      };
      let P = I["@value"];
      const z = I["@type"] || null;
      if (z === "@json")
        j.value = i(P), j.datatype.value = u;
      else if (r.isBoolean(P))
        j.value = P.toString(), j.datatype.value = z || w;
      else if (r.isDouble(P) || z === x)
        r.isDouble(P) || (P = parseFloat(P)), j.value = P.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), j.datatype.value = z || x;
      else if (r.isNumber(P))
        j.value = P.toFixed(0), j.datatype.value = z || b;
      else if ("@direction" in I && M === "i18n-datatype") {
        const _ = (I["@language"] || "").toLowerCase(), Z = I["@direction"], L = `https://www.w3.org/ns/i18n#${_}_${Z}`;
        j.datatype.value = L, j.value = P;
      } else {
        if ("@direction" in I && M === "compound-literal")
          throw new c(
            "Unsupported rdfDirection value.",
            "jsonld.InvalidRdfDirection",
            { value: M }
          );
        if ("@direction" in I && M)
          throw new c(
            "Unknown rdfDirection value.",
            "jsonld.InvalidRdfDirection",
            { value: M }
          );
        "@language" in I ? ("@direction" in I && !M && E.eventHandler && s({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: j.value
            }
          },
          options: E
        }), j.value = P, j.datatype.value = z || f, j.language = I["@language"]) : ("@direction" in I && !M && E.eventHandler && s({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: j.value
            }
          },
          options: E
        }), j.value = P, j.datatype.value = z || S);
      }
    } else if (n.isList(I)) {
      const P = l(
        I["@list"],
        A,
        $,
        C,
        M,
        E
      );
      j.termType = P.termType, j.value = P.value;
    } else {
      const P = r.isObject(I) ? I["@id"] : I;
      j.termType = P.startsWith("_:") ? "BlankNode" : "NamedNode", j.value = P;
    }
    return j.termType === "NamedNode" && !v(j.value) ? (E.eventHandler && s({
      event: {
        type: ["JsonLdEvent"],
        code: "relative object reference",
        level: "warning",
        message: "Relative object reference found.",
        details: {
          object: j.value
        }
      },
      options: E
    }), null) : j;
  }
  return ss;
}
var as, _c;
function nh() {
  if (_c) return as;
  _c = 1;
  const { isKeyword: e } = Ot(), t = yt(), n = Ee(), i = Ve(), c = jt(), r = Ue(), {
    createNodeMap: a,
    mergeNodeMapGraphs: s
  } = Xi(), o = {};
  as = o, o.frameMergedOrDefault = (d, l, h) => {
    const I = {
      options: h,
      embedded: !1,
      graph: "@default",
      graphMap: { "@default": {} },
      subjectStack: [],
      link: {},
      bnodeMap: {}
    }, A = new i.IdentifierIssuer("_:b");
    a(d, I.graphMap, "@default", A), h.merged && (I.graphMap["@merged"] = s(I.graphMap), I.graph = "@merged"), I.subjects = I.graphMap[I.graph];
    const $ = [];
    o.frame(I, Object.keys(I.subjects).sort(), l, $), h.pruneBlankNodeIdentifiers && (h.bnodesToClear = Object.keys(I.bnodeMap).filter((C) => I.bnodeMap[C].length === 1));
    // remove @preserve from results
    return h.link = {}, b($, h);
  }, o.frame = (d, l, h, I, A = null) => {
    u(h), h = h[0];
    const $ = d.options, C = {
      embed: g(h, $, "embed"),
      explicit: g(h, $, "explicit"),
      requireAll: g(h, $, "requireAll")
    };
    d.link.hasOwnProperty(d.graph) || (d.link[d.graph] = {});
    const M = d.link[d.graph], E = f(d, l, h, C), j = Object.keys(E).sort();
    for (const P of j) {
      const z = E[P];
      if (A === null ? d.uniqueEmbeds = { [d.graph]: {} } : d.uniqueEmbeds[d.graph] = d.uniqueEmbeds[d.graph] || {}, C.embed === "@link" && P in M) {
        S(I, A, M[P]);
        continue;
      }
      const _ = { "@id": P };
      if (P.indexOf("_:") === 0 && i.addValue(d.bnodeMap, P, _, { propertyIsArray: !0 }), M[P] = _, (C.embed === "@first" || C.embed === "@last") && d.is11)
        throw new r(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: h }
        );
      if (!(!d.embedded && d.uniqueEmbeds[d.graph].hasOwnProperty(P))) {
        if (d.embedded && (C.embed === "@never" || m(z, d.graph, d.subjectStack))) {
          S(I, A, _);
          continue;
        }
        if (d.embedded && (C.embed == "@first" || C.embed == "@once") && d.uniqueEmbeds[d.graph].hasOwnProperty(P)) {
          S(I, A, _);
          continue;
        }
        if (C.embed === "@last" && P in d.uniqueEmbeds[d.graph] && x(d, P), d.uniqueEmbeds[d.graph][P] = { parent: I, property: A }, d.subjectStack.push({ subject: z, graph: d.graph }), P in d.graphMap) {
          let Z = !1, L = null;
          "@graph" in h ? (L = h["@graph"][0], Z = !(P === "@merged" || P === "@default"), n.isObject(L) || (L = {})) : (Z = d.graph !== "@merged", L = {}), Z && o.frame(
            { ...d, graph: P, embedded: !1 },
            Object.keys(d.graphMap[P]).sort(),
            [L],
            _,
            "@graph"
          );
        }
        "@included" in h && o.frame(
          { ...d, embedded: !1 },
          l,
          h["@included"],
          _,
          "@included"
        );
        for (const Z of Object.keys(z).sort()) {
          if (e(Z)) {
            if (_[Z] = i.clone(z[Z]), Z === "@type")
              for (const L of z["@type"])
                L.indexOf("_:") === 0 && i.addValue(
                  d.bnodeMap,
                  L,
                  _,
                  { propertyIsArray: !0 }
                );
            continue;
          }
          if (!(C.explicit && !(Z in h)))
            for (const L of z[Z]) {
              const F = Z in h ? h[Z] : p(C);
              if (t.isList(L)) {
                const k = h[Z] && h[Z][0] && h[Z][0]["@list"] ? h[Z][0]["@list"] : p(C), O = { "@list": [] };
                S(_, Z, O);
                const V = L["@list"];
                for (const N of V)
                  t.isSubjectReference(N) ? o.frame(
                    { ...d, embedded: !0 },
                    [N["@id"]],
                    k,
                    O,
                    "@list"
                  ) : S(O, "@list", i.clone(N));
              } else t.isSubjectReference(L) ? o.frame(
                { ...d, embedded: !0 },
                [L["@id"]],
                F,
                _,
                Z
              ) : y(F[0], L) && S(_, Z, i.clone(L));
            }
        }
        for (const Z of Object.keys(h).sort()) {
          if (Z === "@type") {
            if (!n.isObject(h[Z][0]) || !("@default" in h[Z][0]))
              continue;
          } else if (e(Z))
            continue;
          const L = h[Z][0] || {};
          if (!g(L, $, "omitDefault") && !(Z in _)) {
            let k = "@null";
            "@default" in L && (k = i.clone(L["@default"])), n.isArray(k) || (k = [k]), _[Z] = [{ "@preserve": k }];
          }
        }
        for (const Z of Object.keys(h["@reverse"] || {}).sort()) {
          const L = h["@reverse"][Z];
          for (const F of Object.keys(d.subjects))
            i.getValues(d.subjects[F], Z).some((O) => O["@id"] === P) && (_["@reverse"] = _["@reverse"] || {}, i.addValue(
              _["@reverse"],
              Z,
              [],
              { propertyIsArray: !0 }
            ), o.frame(
              { ...d, embedded: !0 },
              [F],
              L,
              _["@reverse"][Z],
              A
            ));
        }
        S(I, A, _), d.subjectStack.pop();
      }
    }
  }, o.cleanupNull = (d, l) => {
    if (n.isArray(d))
      return d.map((I) => o.cleanupNull(I, l)).filter((I) => I);
    if (d === "@null")
      return null;
    if (n.isObject(d)) {
      if ("@id" in d) {
        const h = d["@id"];
        if (l.link.hasOwnProperty(h)) {
          const I = l.link[h].indexOf(d);
          if (I !== -1)
            return l.link[h][I];
          l.link[h].push(d);
        } else
          l.link[h] = [d];
      }
      for (const h in d)
        d[h] = o.cleanupNull(d[h], l);
    }
    return d;
  };
  function p(d) {
    const l = {};
    for (const h in d)
      d[h] !== void 0 && (l["@" + h] = [d[h]]);
    return [l];
  }
  function m(d, l, h) {
    for (let I = h.length - 1; I >= 0; --I) {
      const A = h[I];
      if (A.graph === l && A.subject["@id"] === d["@id"])
        return !0;
    }
    return !1;
  }
  function g(d, l, h) {
    const I = "@" + h;
    let A = I in d ? d[I][0] : l[h];
    if (h === "embed") {
      if (A === !0)
        A = "@once";
      else if (A === !1)
        A = "@never";
      else if (A !== "@always" && A !== "@never" && A !== "@link" && A !== "@first" && A !== "@last" && A !== "@once")
        throw new r(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: d }
        );
    }
    return A;
  }
  function u(d) {
    if (!n.isArray(d) || d.length !== 1 || !n.isObject(d[0]))
      throw new r(
        "Invalid JSON-LD syntax; a JSON-LD frame must be a single object.",
        "jsonld.SyntaxError",
        { frame: d }
      );
    if ("@id" in d[0]) {
      for (const l of i.asArray(d[0]["@id"]))
        if (!(n.isObject(l) || c.isAbsolute(l)) || n.isString(l) && l.indexOf("_:") === 0)
          throw new r(
            "Invalid JSON-LD syntax; invalid @id in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: d }
          );
    }
    if ("@type" in d[0]) {
      for (const l of i.asArray(d[0]["@type"]))
        if (!(n.isObject(l) || c.isAbsolute(l) || l === "@json") || n.isString(l) && l.indexOf("_:") === 0)
          throw new r(
            "Invalid JSON-LD syntax; invalid @type in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: d }
          );
    }
  }
  function f(d, l, h, I) {
    const A = {};
    for (const $ of l) {
      const C = d.graphMap[d.graph][$];
      w(d, C, h, I) && (A[$] = C);
    }
    return A;
  }
  function w(d, l, h, I) {
    let A = !0, $ = !1;
    for (const C in h) {
      let M = !1;
      const E = i.getValues(l, C), j = i.getValues(h, C).length === 0;
      if (C === "@id") {
        if (n.isEmptyObject(h["@id"][0] || {}) ? M = !0 : h["@id"].length >= 0 && (M = h["@id"].includes(E[0])), !I.requireAll)
          return M;
      } else if (C === "@type") {
        if (A = !1, j) {
          if (E.length > 0)
            return !1;
          M = !0;
        } else if (h["@type"].length === 1 && n.isEmptyObject(h["@type"][0]))
          M = E.length > 0;
        else
          for (const P of h["@type"])
            n.isObject(P) && "@default" in P ? M = !0 : M = M || E.some((z) => z === P);
        if (!I.requireAll)
          return M;
      } else {
        if (e(C))
          continue;
        {
          const P = i.getValues(h, C)[0];
          let z = !1;
          if (P && (u([P]), z = "@default" in P), A = !1, E.length === 0 && z)
            continue;
          if (E.length > 0 && j)
            return !1;
          if (P === void 0) {
            if (E.length > 0)
              return !1;
            M = !0;
          } else if (t.isList(P)) {
            const _ = P["@list"][0];
            if (t.isList(E[0])) {
              const Z = E[0]["@list"];
              t.isValue(_) ? M = Z.some((L) => y(_, L)) : (t.isSubject(_) || t.isSubjectReference(_)) && (M = Z.some((L) => v(
                d,
                _,
                L,
                I
              )));
            }
          } else t.isValue(P) ? M = E.some((_) => y(P, _)) : t.isSubjectReference(P) ? M = E.some((_) => v(d, P, _, I)) : n.isObject(P) ? M = E.length > 0 : M = !1;
        }
      }
      if (!M && I.requireAll)
        return !1;
      $ = $ || M;
    }
    return A || $;
  }
  function x(d, l) {
    const h = d.uniqueEmbeds[d.graph], I = h[l], A = I.parent, $ = I.property, C = { "@id": l };
    if (n.isArray(A)) {
      for (let E = 0; E < A.length; ++E)
        if (i.compareValues(A[E], C)) {
          A[E] = C;
          break;
        }
    } else {
      const E = n.isArray(A[$]);
      i.removeValue(A, $, C, { propertyIsArray: E }), i.addValue(A, $, C, { propertyIsArray: E });
    }
    const M = (E) => {
      const j = Object.keys(h);
      for (const P of j)
        P in h && n.isObject(h[P].parent) && h[P].parent["@id"] === E && (delete h[P], M(P));
    };
    M(l);
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
      return d.map((h) => b(h, l));
    if (n.isObject(d)) {
      // remove @preserve
      if ("@preserve" in d)
        return d["@preserve"][0];
      if (t.isValue(d))
        return d;
      if (t.isList(d))
        return d["@list"] = b(d["@list"], l), d;
      if ("@id" in d) {
        const h = d["@id"];
        if (l.link.hasOwnProperty(h)) {
          const I = l.link[h].indexOf(d);
          if (I !== -1)
            return l.link[h][I];
          l.link[h].push(d);
        } else
          l.link[h] = [d];
      }
      for (const h in d) {
        if (h === "@id" && l.bnodesToClear.includes(d[h])) {
          delete d["@id"];
          continue;
        }
        d[h] = b(d[h], l);
      }
    }
    return d;
  }
  function S(d, l, h) {
    n.isObject(d) ? i.addValue(d, l, h, { propertyIsArray: !0 }) : d.push(h);
  }
  function v(d, l, h, I) {
    if (!("@id" in h))
      return !1;
    const A = d.subjects[h["@id"]];
    return A && w(d, A, l, I);
  }
  function y(d, l) {
    const h = l["@value"], I = l["@type"], A = l["@language"], $ = d["@value"] ? n.isArray(d["@value"]) ? d["@value"] : [d["@value"]] : [], C = d["@type"] ? n.isArray(d["@type"]) ? d["@type"] : [d["@type"]] : [], M = d["@language"] ? n.isArray(d["@language"]) ? d["@language"] : [d["@language"]] : [];
    return $.length === 0 && C.length === 0 && M.length === 0 ? !0 : !(!($.includes(h) || n.isEmptyObject($[0])) || !(!I && C.length === 0 || C.includes(I) || I && n.isEmptyObject(C[0])) || !(!A && M.length === 0 || M.includes(A) || A && n.isEmptyObject(M[0])));
  }
  return as;
}
var os, Pc;
function ih() {
  if (Pc) return os;
  Pc = 1;
  const e = Ue(), {
    isArray: t,
    isObject: n,
    isString: i,
    isUndefined: c
  } = Ee(), {
    isList: r,
    isValue: a,
    isGraph: s,
    isSimpleGraph: o,
    isSubjectReference: p
  } = yt(), {
    expandIri: m,
    getContextValue: g,
    isKeyword: u,
    process: f,
    processingMode: w
  } = Ot(), {
    removeBase: x,
    prependBase: b
  } = jt(), {
    REGEX_KEYWORD: S,
    addValue: v,
    asArray: y,
    compareShortestLeast: d
  } = Ve(), l = {};
  os = l, l.compact = async ({
    activeCtx: A,
    activeProperty: $ = null,
    element: C,
    options: M = {}
  }) => {
    if (t(C)) {
      let j = [];
      for (let P = 0; P < C.length; ++P) {
        const z = await l.compact({
          activeCtx: A,
          activeProperty: $,
          element: C[P],
          options: M
        });
        z !== null && j.push(z);
      }
      return M.compactArrays && j.length === 1 && (g(
        A,
        $,
        "@container"
      ) || []).length === 0 && (j = j[0]), j;
    }
    const E = g(A, $, "@context");
    if (c(E) || (A = await f({
      activeCtx: A,
      localCtx: E,
      propagate: !0,
      overrideProtected: !0,
      options: M
    })), n(C)) {
      if (M.link && "@id" in C && M.link.hasOwnProperty(C["@id"])) {
        const k = M.link[C["@id"]];
        for (let O = 0; O < k.length; ++O)
          if (k[O].expanded === C)
            return k[O].compacted;
      }
      if (a(C) || p(C)) {
        const k = l.compactValue({ activeCtx: A, activeProperty: $, value: C, options: M });
        return M.link && p(C) && (M.link.hasOwnProperty(C["@id"]) || (M.link[C["@id"]] = []), M.link[C["@id"]].push({ expanded: C, compacted: k })), k;
      }
      if (r(C) && (g(
        A,
        $,
        "@container"
      ) || []).includes("@list"))
        return l.compact({
          activeCtx: A,
          activeProperty: $,
          element: C["@list"],
          options: M
        });
      const j = $ === "@reverse", P = {}, z = A;
      !a(C) && !p(C) && (A = A.revertToPreviousContext());
      const _ = g(z, $, "@context");
      c(_) || (A = await f({
        activeCtx: A,
        localCtx: _,
        propagate: !0,
        overrideProtected: !0,
        options: M
      })), M.link && "@id" in C && (M.link.hasOwnProperty(C["@id"]) || (M.link[C["@id"]] = []), M.link[C["@id"]].push({ expanded: C, compacted: P }));
      let Z = C["@type"] || [];
      Z.length > 1 && (Z = Array.from(Z).sort());
      const L = A;
      for (const k of Z) {
        const O = l.compactIri(
          { activeCtx: L, iri: k, relativeTo: { vocab: !0 } }
        ), V = g(z, O, "@context");
        c(V) || (A = await f({
          activeCtx: A,
          localCtx: V,
          options: M,
          propagate: !1
        }));
      }
      const F = Object.keys(C).sort();
      for (const k of F) {
        const O = C[k];
        if (k === "@id") {
          let V = y(O).map(
            (R) => l.compactIri({
              activeCtx: A,
              iri: R,
              relativeTo: { vocab: !1 },
              base: M.base
            })
          );
          V.length === 1 && (V = V[0]);
          const N = l.compactIri(
            { activeCtx: A, iri: "@id", relativeTo: { vocab: !0 } }
          );
          P[N] = V;
          continue;
        }
        if (k === "@type") {
          let V = y(O).map(
            (D) => l.compactIri({
              activeCtx: z,
              iri: D,
              relativeTo: { vocab: !0 }
            })
          );
          V.length === 1 && (V = V[0]);
          const N = l.compactIri(
            { activeCtx: A, iri: "@type", relativeTo: { vocab: !0 } }
          ), T = (g(
            A,
            N,
            "@container"
          ) || []).includes("@set") && w(A, 1.1) || t(V) && O.length === 0;
          v(P, N, V, { propertyIsArray: T });
          continue;
        }
        if (k === "@reverse") {
          const V = await l.compact({
            activeCtx: A,
            activeProperty: "@reverse",
            element: O,
            options: M
          });
          for (const N in V)
            if (A.mappings.has(N) && A.mappings.get(N).reverse) {
              const R = V[N], T = (g(
                A,
                N,
                "@container"
              ) || []).includes("@set") || !M.compactArrays;
              v(
                P,
                N,
                R,
                { propertyIsArray: T }
              ), delete V[N];
            }
          if (Object.keys(V).length > 0) {
            const N = l.compactIri({
              activeCtx: A,
              iri: k,
              relativeTo: { vocab: !0 }
            });
            v(P, N, V);
          }
          continue;
        }
        if (k === "@preserve") {
          const V = await l.compact({
            activeCtx: A,
            activeProperty: $,
            element: O,
            options: M
          });
          t(V) && V.length === 0 || v(P, k, V);
          continue;
        }
        if (k === "@index") {
          if ((g(
            A,
            $,
            "@container"
          ) || []).includes("@index"))
            continue;
          const N = l.compactIri({
            activeCtx: A,
            iri: k,
            relativeTo: { vocab: !0 }
          });
          v(P, N, O);
          continue;
        }
        if (k !== "@graph" && k !== "@list" && k !== "@included" && u(k)) {
          const V = l.compactIri({
            activeCtx: A,
            iri: k,
            relativeTo: { vocab: !0 }
          });
          v(P, V, O);
          continue;
        }
        if (!t(O))
          throw new e(
            "JSON-LD expansion error; expanded value must be an array.",
            "jsonld.SyntaxError"
          );
        if (O.length === 0) {
          const V = l.compactIri({
            activeCtx: A,
            iri: k,
            value: O,
            relativeTo: { vocab: !0 },
            reverse: j
          }), N = A.mappings.has(V) ? A.mappings.get(V)["@nest"] : null;
          let R = P;
          N && (I(A, N, M), n(P[N]) || (P[N] = {}), R = P[N]), v(
            R,
            V,
            O,
            {
              propertyIsArray: !0
            }
          );
        }
        for (const V of O) {
          const N = l.compactIri({
            activeCtx: A,
            iri: k,
            value: V,
            relativeTo: { vocab: !0 },
            reverse: j
          }), R = A.mappings.has(N) ? A.mappings.get(N)["@nest"] : null;
          let q = P;
          R && (I(A, R, M), n(P[R]) || (P[R] = {}), q = P[R]);
          const T = g(
            A,
            N,
            "@container"
          ) || [], D = s(V), H = r(V);
          let Q;
          H ? Q = V["@list"] : D && (Q = V["@graph"]);
          let J = await l.compact({
            activeCtx: A,
            activeProperty: N,
            element: H || D ? Q : V,
            options: M
          });
          if (H)
            if (t(J) || (J = [J]), !T.includes("@list"))
              J = {
                [l.compactIri({
                  activeCtx: A,
                  iri: "@list",
                  relativeTo: { vocab: !0 }
                })]: J
              }, "@index" in V && (J[l.compactIri({
                activeCtx: A,
                iri: "@index",
                relativeTo: { vocab: !0 }
              })] = V["@index"]);
            else {
              v(q, N, J, {
                valueIsArray: !0,
                allowDuplicate: !0
              });
              continue;
            }
          if (D)
            if (T.includes("@graph") && (T.includes("@id") || T.includes("@index") && o(V))) {
              let U;
              q.hasOwnProperty(N) ? U = q[N] : q[N] = U = {};
              const G = (T.includes("@id") ? V["@id"] : V["@index"]) || l.compactIri({
                activeCtx: A,
                iri: "@none",
                relativeTo: { vocab: !0 }
              });
              v(
                U,
                G,
                J,
                {
                  propertyIsArray: !M.compactArrays || T.includes("@set")
                }
              );
            } else T.includes("@graph") && o(V) ? (t(J) && J.length > 1 && (J = { "@included": J }), v(
              q,
              N,
              J,
              {
                propertyIsArray: !M.compactArrays || T.includes("@set")
              }
            )) : (t(J) && J.length === 1 && M.compactArrays && (J = J[0]), J = {
              [l.compactIri({
                activeCtx: A,
                iri: "@graph",
                relativeTo: { vocab: !0 }
              })]: J
            }, "@id" in V && (J[l.compactIri({
              activeCtx: A,
              iri: "@id",
              relativeTo: { vocab: !0 }
            })] = V["@id"]), "@index" in V && (J[l.compactIri({
              activeCtx: A,
              iri: "@index",
              relativeTo: { vocab: !0 }
            })] = V["@index"]), v(
              q,
              N,
              J,
              {
                propertyIsArray: !M.compactArrays || T.includes("@set")
              }
            ));
          else if (T.includes("@language") || T.includes("@index") || T.includes("@id") || T.includes("@type")) {
            let U;
            q.hasOwnProperty(N) ? U = q[N] : q[N] = U = {};
            let G;
            if (T.includes("@language"))
              a(J) && (J = J["@value"]), G = V["@language"];
            else if (T.includes("@index")) {
              const B = g(
                A,
                N,
                "@index"
              ) || "@index", K = l.compactIri(
                { activeCtx: A, iri: B, relativeTo: { vocab: !0 } }
              );
              if (B === "@index")
                G = V["@index"], delete J[K];
              else {
                let W;
                if ([G, ...W] = y(J[B] || []), !i(G))
                  G = null;
                else
                  switch (W.length) {
                    case 0:
                      delete J[B];
                      break;
                    case 1:
                      J[B] = W[0];
                      break;
                    default:
                      J[B] = W;
                      break;
                  }
              }
            } else if (T.includes("@id")) {
              const B = l.compactIri({
                activeCtx: A,
                iri: "@id",
                relativeTo: { vocab: !0 }
              });
              G = J[B], delete J[B];
            } else if (T.includes("@type")) {
              const B = l.compactIri({
                activeCtx: A,
                iri: "@type",
                relativeTo: { vocab: !0 }
              });
              let K;
              switch ([G, ...K] = y(J[B] || []), K.length) {
                case 0:
                  delete J[B];
                  break;
                case 1:
                  J[B] = K[0];
                  break;
                default:
                  J[B] = K;
                  break;
              }
              Object.keys(J).length === 1 && "@id" in V && (J = await l.compact({
                activeCtx: A,
                activeProperty: N,
                element: { "@id": V["@id"] },
                options: M
              }));
            }
            G || (G = l.compactIri({
              activeCtx: A,
              iri: "@none",
              relativeTo: { vocab: !0 }
            })), v(
              U,
              G,
              J,
              {
                propertyIsArray: T.includes("@set")
              }
            );
          } else {
            const U = !M.compactArrays || T.includes("@set") || T.includes("@list") || t(J) && J.length === 0 || k === "@list" || k === "@graph";
            v(
              q,
              N,
              J,
              { propertyIsArray: U }
            );
          }
        }
      }
      return P;
    }
    return C;
  }, l.compactIri = ({
    activeCtx: A,
    iri: $,
    value: C = null,
    relativeTo: M = { vocab: !1 },
    reverse: E = !1,
    base: j = null
  }) => {
    if ($ === null)
      return $;
    A.isPropertyTermScoped && A.previousContext && (A = A.previousContext);
    const P = A.getInverse();
    if (u($) && $ in P && "@none" in P[$] && "@type" in P[$]["@none"] && "@none" in P[$]["@none"]["@type"])
      return P[$]["@none"]["@type"]["@none"];
    if (M.vocab && $ in P) {
      const F = A["@language"] || "@none", k = [];
      n(C) && "@index" in C && !("@graph" in C) && k.push("@index", "@index@set"), n(C) && "@preserve" in C && (C = C["@preserve"][0]), s(C) ? ("@index" in C && k.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in C && k.push(
        "@graph@id",
        "@graph@id@set"
      ), k.push("@graph", "@graph@set", "@set"), "@index" in C || k.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in C || k.push("@graph@id", "@graph@id@set")) : n(C) && !a(C) && k.push("@id", "@id@set", "@type", "@set@type");
      let O = "@language", V = "@null";
      if (E)
        O = "@type", V = "@reverse", k.push("@set");
      else if (r(C)) {
        "@index" in C || k.push("@list");
        const R = C["@list"];
        if (R.length === 0)
          O = "@any", V = "@none";
        else {
          let q = R.length === 0 ? F : null, T = null;
          for (let D = 0; D < R.length; ++D) {
            const H = R[D];
            let Q = "@none", J = "@none";
            if (a(H))
              if ("@direction" in H) {
                const U = (H["@language"] || "").toLowerCase(), G = H["@direction"];
                Q = `${U}_${G}`;
              } else "@language" in H ? Q = H["@language"].toLowerCase() : "@type" in H ? J = H["@type"] : Q = "@null";
            else
              J = "@id";
            if (q === null ? q = Q : Q !== q && a(H) && (q = "@none"), T === null ? T = J : J !== T && (T = "@none"), q === "@none" && T === "@none")
              break;
          }
          q = q || "@none", T = T || "@none", T !== "@none" ? (O = "@type", V = T) : V = q;
        }
      } else {
        if (a(C))
          if ("@language" in C && !("@index" in C)) {
            k.push("@language", "@language@set"), V = C["@language"];
            const R = C["@direction"];
            R && (V = `${V}_${R}`);
          } else "@direction" in C && !("@index" in C) ? V = `_${C["@direction"]}` : "@type" in C && (O = "@type", V = C["@type"]);
        else
          O = "@type", V = "@id";
        k.push("@set");
      }
      k.push("@none"), n(C) && !("@index" in C) && k.push("@index", "@index@set"), a(C) && Object.keys(C).length === 1 && k.push("@language", "@language@set");
      const N = h(
        A,
        $,
        C,
        k,
        O,
        V
      );
      if (N !== null)
        return N;
    }
    if (M.vocab && "@vocab" in A) {
      const F = A["@vocab"];
      if ($.indexOf(F) === 0 && $ !== F) {
        const k = $.substr(F.length);
        if (!A.mappings.has(k))
          return k;
      }
    }
    let z = null;
    const _ = [];
    let Z = A.fastCurieMap;
    const L = $.length - 1;
    for (let F = 0; F < L && $[F] in Z; ++F)
      Z = Z[$[F]], "" in Z && _.push(Z[""][0]);
    for (let F = _.length - 1; F >= 0; --F) {
      const k = _[F], O = k.terms;
      for (const V of O) {
        const N = V + ":" + $.substr(k.iri.length);
        A.mappings.get(V)._prefix && (!A.mappings.has(N) || C === null && A.mappings.get(N)["@id"] === $) && (z === null || d(N, z) < 0) && (z = N);
      }
    }
    if (z !== null)
      return z;
    for (const [F, k] of A.mappings)
      if (k && k._prefix && $.startsWith(F + ":"))
        throw new e(
          `Absolute IRI "${$}" confused with prefix "${F}".`,
          "jsonld.SyntaxError",
          { code: "IRI confused with prefix", context: A }
        );
    if (!M.vocab)
      if ("@base" in A)
        if (A["@base"]) {
          const F = x(b(j, A["@base"]), $);
          return S.test(F) ? `./${F}` : F;
        } else
          return $;
      else
        return x(j, $);
    return $;
  }, l.compactValue = ({ activeCtx: A, activeProperty: $, value: C, options: M }) => {
    if (a(C)) {
      const z = g(A, $, "@type"), _ = g(A, $, "@language"), Z = g(A, $, "@direction"), L = g(A, $, "@container") || [], F = "@index" in C && !L.includes("@index");
      if (!F && z !== "@none" && (C["@type"] === z || "@language" in C && C["@language"] === _ && "@direction" in C && C["@direction"] === Z || "@language" in C && C["@language"] === _ || "@direction" in C && C["@direction"] === Z))
        return C["@value"];
      const k = Object.keys(C).length, O = k === 1 || k === 2 && "@index" in C && !F, V = "@language" in A, N = i(C["@value"]), R = A.mappings.has($) && A.mappings.get($)["@language"] === null;
      if (O && z !== "@none" && (!V || !N || R))
        return C["@value"];
      const q = {};
      return F && (q[l.compactIri({
        activeCtx: A,
        iri: "@index",
        relativeTo: { vocab: !0 }
      })] = C["@index"]), "@type" in C ? q[l.compactIri({
        activeCtx: A,
        iri: "@type",
        relativeTo: { vocab: !0 }
      })] = l.compactIri(
        { activeCtx: A, iri: C["@type"], relativeTo: { vocab: !0 } }
      ) : "@language" in C && (q[l.compactIri({
        activeCtx: A,
        iri: "@language",
        relativeTo: { vocab: !0 }
      })] = C["@language"]), "@direction" in C && (q[l.compactIri({
        activeCtx: A,
        iri: "@direction",
        relativeTo: { vocab: !0 }
      })] = C["@direction"]), q[l.compactIri({
        activeCtx: A,
        iri: "@value",
        relativeTo: { vocab: !0 }
      })] = C["@value"], q;
    }
    const E = m(
      A,
      $,
      { vocab: !0 },
      M
    ), j = g(A, $, "@type"), P = l.compactIri({
      activeCtx: A,
      iri: C["@id"],
      relativeTo: { vocab: j === "@vocab" },
      base: M.base
    });
    return j === "@id" || j === "@vocab" || E === "@graph" ? P : {
      [l.compactIri({
        activeCtx: A,
        iri: "@id",
        relativeTo: { vocab: !0 }
      })]: P
    };
  };
  function h(A, $, C, M, E, j) {
    j === null && (j = "@null");
    const P = [];
    if ((j === "@id" || j === "@reverse") && n(C) && "@id" in C) {
      j === "@reverse" && P.push("@reverse");
      const _ = l.compactIri(
        { activeCtx: A, iri: C["@id"], relativeTo: { vocab: !0 } }
      );
      A.mappings.has(_) && A.mappings.get(_) && A.mappings.get(_)["@id"] === C["@id"] ? P.push.apply(P, ["@vocab", "@id"]) : P.push.apply(P, ["@id", "@vocab"]);
    } else {
      P.push(j);
      const _ = P.find((Z) => Z.includes("_"));
      _ && P.push(_.replace(/^[^_]+_/, "_"));
    }
    P.push("@none");
    const z = A.inverse[$];
    for (const _ of M) {
      if (!(_ in z))
        continue;
      const Z = z[_][E];
      for (const L of P)
        if (L in Z)
          return Z[L];
    }
    return null;
  }
  function I(A, $, C) {
    if (m(A, $, { vocab: !0 }, C) !== "@nest")
      throw new e(
        "JSON-LD compact error; nested property must have an @nest value resolving to @nest.",
        "jsonld.SyntaxError",
        { code: "invalid @nest value" }
      );
  }
  return os;
}
var cs, Tc;
function rh() {
  return Tc || (Tc = 1, cs = (e) => {
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
    }), t.compact = function(n, i) {
      return arguments.length < 2 ? Promise.reject(
        new TypeError("Could not compact, too few arguments.")
      ) : e.compact(n, i);
    }, t.expand = function(n) {
      return arguments.length < 1 ? Promise.reject(
        new TypeError("Could not expand, too few arguments.")
      ) : e.expand(n);
    }, t.flatten = function(n) {
      return arguments.length < 1 ? Promise.reject(
        new TypeError("Could not flatten, too few arguments.")
      ) : e.flatten(n);
    }, t;
  }), cs;
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
var ds, Cc;
function sh() {
  if (Cc) return ds;
  Cc = 1;
  const e = Us(), t = Bf(), n = Ve(), i = Kf(), c = n.IdentifierIssuer, r = Ue(), a = Id(), s = Qf(), { expand: o } = Wf(), { flatten: p } = Xf(), { fromRDF: m } = Yf(), { toRDF: g } = th(), {
    frameMergedOrDefault: u,
    cleanupNull: f
  } = nh(), {
    isArray: w,
    isObject: x,
    isString: b
  } = Ee(), {
    isSubjectReference: S
  } = yt(), {
    expandIri: v,
    getInitialContext: y,
    process: d,
    processingMode: l
  } = Ot(), {
    compact: h,
    compactIri: I
  } = ih(), {
    createNodeMap: A,
    createMergedNodeMap: $,
    mergeNodeMaps: C
  } = Xi(), {
    logEventHandler: M,
    logWarningEventHandler: E,
    safeEventHandler: j,
    setDefaultEventHandler: P,
    setupEventHandler: z,
    strictEventHandler: _,
    unhandledEventHandler: Z
  } = Sn(), L = function(k) {
    const O = {}, N = new a({ max: 100 });
    k.compact = async function(q, T, D) {
      if (arguments.length < 2)
        throw new TypeError("Could not compact, too few arguments.");
      if (T === null)
        throw new r(
          "The compaction context must not be null.",
          "jsonld.CompactError",
          { code: "invalid local context" }
        );
      if (q === null)
        return null;
      D = R(D, {
        base: b(q) ? q : "",
        compactArrays: !0,
        compactToRelative: !0,
        graph: !1,
        skipExpansion: !1,
        link: !1,
        issuer: new c("_:b"),
        contextResolver: new i(
          { sharedCache: N }
        )
      }), D.link && (D.skipExpansion = !0), D.compactToRelative || delete D.base;
      let H;
      D.skipExpansion ? H = q : H = await k.expand(q, D);
      const Q = await k.processContext(
        y(D),
        T,
        D
      );
      let J = await h({
        activeCtx: Q,
        element: H,
        options: D
      });
      D.compactArrays && !D.graph && w(J) ? J.length === 1 ? J = J[0] : J.length === 0 && (J = {}) : D.graph && x(J) && (J = [J]), x(T) && "@context" in T && (T = T["@context"]), T = n.clone(T), w(T) || (T = [T]);
      const U = T;
      T = [];
      for (let B = 0; B < U.length; ++B)
        (!x(U[B]) || Object.keys(U[B]).length > 0) && T.push(U[B]);
      const G = T.length > 0;
      if (T.length === 1 && (T = T[0]), w(J)) {
        const B = I({
          activeCtx: Q,
          iri: "@graph",
          relativeTo: { vocab: !0 }
        }), K = J;
        J = {}, G && (J["@context"] = T), J[B] = K;
      } else if (x(J) && G) {
        const B = J;
        J = { "@context": T };
        for (const K in B)
          J[K] = B[K];
      }
      return J;
    }, k.expand = async function(q, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not expand, too few arguments.");
      T = R(T, {
        keepFreeFloatingNodes: !1,
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      const D = {}, H = [];
      if ("expandContext" in T) {
        const G = n.clone(T.expandContext);
        x(G) && "@context" in G ? D.expandContext = G : D.expandContext = { "@context": G }, H.push(D.expandContext);
      }
      let Q;
      if (!b(q))
        D.input = n.clone(q);
      else {
        const G = await k.get(q, T);
        Q = G.documentUrl, D.input = G.document, G.contextUrl && (D.remoteContext = { "@context": G.contextUrl }, H.push(D.remoteContext));
      }
      "base" in T || (T.base = Q || "");
      let J = y(T);
      for (const G of H)
        J = await d({ activeCtx: J, localCtx: G, options: T });
      let U = await o({
        activeCtx: J,
        element: D.input,
        options: T
      });
      return x(U) && "@graph" in U && Object.keys(U).length === 1 ? U = U["@graph"] : U === null && (U = []), w(U) || (U = [U]), U;
    }, k.flatten = async function(q, T, D) {
      if (arguments.length < 1)
        return new TypeError("Could not flatten, too few arguments.");
      typeof T == "function" ? T = null : T = T || null, D = R(D, {
        base: b(q) ? q : "",
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      const H = await k.expand(q, D), Q = p(H);
      return T === null ? Q : (D.graph = !0, D.skipExpansion = !0, await k.compact(Q, T, D));
    }, k.frame = async function(q, T, D) {
      if (arguments.length < 2)
        throw new TypeError("Could not frame, too few arguments.");
      if (D = R(D, {
        base: b(q) ? q : "",
        embed: "@once",
        explicit: !1,
        requireAll: !1,
        omitDefault: !1,
        bnodesToClear: [],
        contextResolver: new i(
          { sharedCache: N }
        )
      }), b(T)) {
        const ee = await k.get(T, D);
        if (T = ee.document, ee.contextUrl) {
          let re = T["@context"];
          re ? w(re) ? re.push(ee.contextUrl) : re = [re, ee.contextUrl] : re = ee.contextUrl, T["@context"] = re;
        }
      }
      const H = T ? T["@context"] || {} : {}, Q = await k.processContext(
        y(D),
        H,
        D
      );
      D.hasOwnProperty("omitGraph") || (D.omitGraph = l(Q, 1.1)), D.hasOwnProperty("pruneBlankNodeIdentifiers") || (D.pruneBlankNodeIdentifiers = l(Q, 1.1));
      const J = await k.expand(q, D), U = { ...D };
      U.isFrame = !0, U.keepFreeFloatingNodes = !0;
      const G = await k.expand(T, U), B = Object.keys(T).map((ee) => v(Q, ee, { vocab: !0 }));
      U.merged = !B.includes("@graph"), U.is11 = l(Q, 1.1);
      const K = u(J, G, U);
      U.graph = !D.omitGraph, U.skipExpansion = !0, U.link = {}, U.framing = !0;
      let W = await k.compact(K, H, U);
      return U.link = {}, W = f(W, U), W;
    }, k.link = async function(q, T, D) {
      const H = {};
      return T && (H["@context"] = T), H["@embed"] = "@link", k.frame(q, H, D);
    }, k.normalize = k.canonize = async function(q, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not canonize, too few arguments.");
      if (T = R(T, {
        base: b(q) ? q : null,
        algorithm: "URDNA2015",
        skipExpansion: !1,
        safe: !0,
        contextResolver: new i(
          { sharedCache: N }
        )
      }), "inputFormat" in T) {
        if (T.inputFormat !== "application/n-quads" && T.inputFormat !== "application/nquads")
          throw new r(
            "Unknown canonicalization input format.",
            "jsonld.CanonizeError"
          );
        const Q = s.parse(q);
        return e.canonize(Q, T);
      }
      const D = { ...T };
      delete D.format, D.produceGeneralizedRdf = !1;
      const H = await k.toRDF(q, D);
      return e.canonize(H, T);
    }, k.fromRDF = async function(q, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert from RDF, too few arguments.");
      T = R(T, {
        format: b(q) ? "application/n-quads" : void 0
      });
      const { format: D } = T;
      let { rdfParser: H } = T;
      if (D) {
        if (H = H || O[D], !H)
          throw new r(
            "Unknown input format.",
            "jsonld.UnknownFormat",
            { format: D }
          );
      } else
        H = () => q;
      const Q = await H(q);
      return m(Q, T);
    }, k.toRDF = async function(q, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert to RDF, too few arguments.");
      T = R(T, {
        base: b(q) ? q : "",
        skipExpansion: !1,
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      let D;
      T.skipExpansion ? D = q : D = await k.expand(q, T);
      const H = g(D, T);
      if (T.format) {
        if (T.format === "application/n-quads" || T.format === "application/nquads")
          return s.serialize(H);
        throw new r(
          "Unknown output format.",
          "jsonld.UnknownFormat",
          { format: T.format }
        );
      }
      return H;
    }, k.createNodeMap = async function(q, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not create node map, too few arguments.");
      T = R(T, {
        base: b(q) ? q : "",
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      const D = await k.expand(q, T);
      return $(D, T);
    }, k.merge = async function(q, T, D) {
      if (arguments.length < 1)
        throw new TypeError("Could not merge, too few arguments.");
      if (!w(q))
        throw new TypeError('Could not merge, "docs" must be an array.');
      typeof T == "function" ? T = null : T = T || null, D = R(D, {
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      const H = await Promise.all(q.map((ee) => {
        const re = { ...D };
        return k.expand(ee, re);
      }));
      let Q = !0;
      "mergeNodes" in D && (Q = D.mergeNodes);
      const J = D.issuer || new c("_:b"), U = { "@default": {} };
      for (let ee = 0; ee < H.length; ++ee) {
        const re = n.relabelBlankNodes(H[ee], {
          issuer: new c("_:b" + ee + "-")
        }), be = Q || ee === 0 ? U : { "@default": {} };
        if (A(re, be, "@default", J), be !== U)
          for (const fe in be) {
            const me = be[fe];
            if (!(fe in U)) {
              U[fe] = me;
              continue;
            }
            const pe = U[fe];
            for (const et in me)
              et in pe || (pe[et] = me[et]);
          }
      }
      const G = C(U), B = [], K = Object.keys(G).sort();
      for (let ee = 0; ee < K.length; ++ee) {
        const re = G[K[ee]];
        S(re) || B.push(re);
      }
      return T === null ? B : (D.graph = !0, D.skipExpansion = !0, await k.compact(B, T, D));
    }, Object.defineProperty(k, "documentLoader", {
      get: () => k._documentLoader,
      set: (q) => k._documentLoader = q
    }), k.documentLoader = async (q) => {
      throw new r(
        "Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.",
        "jsonld.LoadDocumentError",
        { code: "loading document failed", url: q }
      );
    }, k.get = async function(q, T) {
      let D;
      typeof T.documentLoader == "function" ? D = T.documentLoader : D = k.documentLoader;
      const H = await D(q);
      try {
        if (!H.document)
          throw new r(
            "No remote document found at the given URL.",
            "jsonld.NullRemoteDocument"
          );
        b(H.document) && (H.document = JSON.parse(H.document));
      } catch (Q) {
        throw new r(
          "Could not retrieve a JSON-LD document from the URL.",
          "jsonld.LoadDocumentError",
          {
            code: "loading document failed",
            cause: Q,
            remoteDoc: H
          }
        );
      }
      return H;
    }, k.processContext = async function(q, T, D) {
      return D = R(D, {
        base: "",
        contextResolver: new i(
          { sharedCache: N }
        )
      }), T === null ? y(D) : (T = n.clone(T), x(T) && "@context" in T || (T = { "@context": T }), d({ activeCtx: q, localCtx: T, options: D }));
    }, k.getContextValue = Ot().getContextValue, k.documentLoaders = {}, k.useDocumentLoader = function(q) {
      if (!(q in k.documentLoaders))
        throw new r(
          'Unknown document loader type: "' + q + '"',
          "jsonld.UnknownDocumentLoader",
          { type: q }
        );
      k.documentLoader = k.documentLoaders[q].apply(
        k,
        Array.prototype.slice.call(arguments, 1)
      );
    }, k.registerRDFParser = function(q, T) {
      O[q] = T;
    }, k.unregisterRDFParser = function(q) {
      delete O[q];
    }, k.registerRDFParser("application/n-quads", s.parse), k.registerRDFParser("application/nquads", s.parse), k.url = jt(), k.logEventHandler = M, k.logWarningEventHandler = E, k.safeEventHandler = j, k.setDefaultEventHandler = P, k.strictEventHandler = _, k.unhandledEventHandler = Z, k.util = n, Object.assign(k, n), k.promises = k, k.RequestQueue = Sd(), k.JsonLdProcessor = rh()(k), t.setupGlobals(k), t.setupDocumentLoaders(k);
    function R(q, {
      documentLoader: T = k.documentLoader,
      ...D
    }) {
      if (q && "compactionMap" in q)
        throw new r(
          '"compactionMap" not supported.',
          "jsonld.OptionsError"
        );
      if (q && "expansionMap" in q)
        throw new r(
          '"expansionMap" not supported.',
          "jsonld.OptionsError"
        );
      return Object.assign(
        {},
        { documentLoader: T },
        D,
        q,
        { eventHandler: z({ options: q }) }
      );
    }
    return k;
  }, F = function() {
    return L(function() {
      return F();
    });
  };
  return L(F), ds = F, ds;
}
var ah = sh();
const oh = /* @__PURE__ */ Cs(ah);
async function Ec(e, t, n = {}) {
  const i = {
    algorithm: "URDNA2015",
    format: "application/n-quads",
    safe: n.safe ?? !1
  };
  return t && (i.documentLoader = t), await oh.normalize(e, i);
}
async function ch(e, t, n, i = !1) {
  const [c, r] = await Promise.all([
    Ec(e, n, { safe: i }),
    Ec(t, n, { safe: i })
  ]), a = ms("sha256").update(c, "utf8").digest(), s = ms("sha256").update(r, "utf8").digest(), o = new Uint8Array(64);
  return o.set(s, 0), o.set(a, 32), o;
}
async function dh(e, t, n = {}) {
  const i = e.proof;
  if (!i) throw new Error("No proof found on credential");
  if (i.cryptosuite !== "eddsa-rdfc-2022")
    throw new Error(`Unsupported cryptosuite: ${i.cryptosuite}`);
  if (i.created === void 0)
    throw new Error('eddsa-rdfc-2022 proof is missing the required "created" property.');
  const c = ["type", "cryptosuite", "proofPurpose", "verificationMethod", "created", "proofValue"];
  if (i.type !== "DataIntegrityProof" || i.proofPurpose !== "assertionMethod" || Object.keys(i).some((g) => !c.includes(g)) || typeof i.verificationMethod != "string" || typeof i.created != "string" || typeof i.proofValue != "string") return !1;
  const { proof: r, ...a } = e, { proofValue: s, ...o } = i, p = { ...o, "@context": a["@context"] }, m = await ch(
    a,
    p,
    n.documentLoader,
    n.safe ?? !1
  );
  try {
    const g = Hc(i.proofValue);
    return await Cf(g, m, t);
  } catch {
    return !1;
  }
}
const lh = nf, uh = gf, ph = Object.freeze({
  RmAccreditation: `${Dt}accreditation.json`,
  RmOperationalScope: `${Dt}operational-scope.json`,
  RmCertificate: `${Dt}certificate.json`,
  RmStudy: `${Dt}study.json`,
  RmLabAuthority: `${Dt}lab-authority.json`,
  BitstringStatusListCredential: `${Dt}status-list.json`
});
function fh(e) {
  return e === "BitstringStatusListCredential" ? [Wt] : [Wt, ql];
}
const hh = Object.freeze({
  name: "RM v1",
  schemas: ph,
  contexts: fh
}), mh = Object.freeze({
  resolve: 1,
  parse: 0,
  carrier: 0,
  type: 0,
  schema: 0,
  proof: 2,
  key: 2,
  signature: 2
});
function Yi(e, t, n, i) {
  return [
    e,
    t ?? "unresolved",
    n,
    i.purpose,
    `${i.profile.id}@${i.profile.version}`,
    i.evaluationTime
  ].join(" | ");
}
function Ht(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const yh = (e) => e.replace(/~/g, "~0").replace(/\//g, "~1");
function gh(e, t) {
  if (!t.startsWith("/")) return [];
  let n = [{ pointer: "", value: e }];
  for (const i of t.slice(1).split("/")) {
    const c = [];
    for (const { pointer: r, value: a } of n)
      i === "*" ? Array.isArray(a) && a.forEach((s, o) => c.push({ pointer: `${r}/${o}`, value: s })) : Ht(a) && Object.hasOwn(a, i) && c.push({ pointer: `${r}/${yh(i)}`, value: a[i] });
    n = c;
  }
  return n;
}
function en(e, t) {
  if (t === "") return e;
  if (!t.startsWith("/")) return;
  let n = e;
  for (const i of t.slice(1).split("/")) {
    const c = i.replace(/~1/g, "/").replace(/~0/g, "~");
    if (Array.isArray(n) && /^(0|[1-9][0-9]*)$/.test(c)) n = n[Number(c)];
    else if (Ht(n) && Object.hasOwn(n, c)) n = n[c];
    else return;
  }
  return n;
}
function oe(e, t, n = [], i = "executed") {
  return Object.freeze({
    state: e,
    execution: i,
    reasons: Object.freeze(t),
    sourcePointers: Object.freeze(n)
  });
}
const tn = (e) => oe("not_established", [e], [], "not_run");
function vh(e, t) {
  const n = Date.parse(t), i = typeof e.validFrom == "string" ? Date.parse(e.validFrom) : NaN, c = typeof e.validUntil == "string" ? Date.parse(e.validUntil) : NaN;
  if (!Number.isFinite(n) || !Number.isFinite(i) || !Number.isFinite(c))
    return oe("not_established", ["Validity period or evaluation time is missing or invalid."]);
  const r = ["/validFrom", "/validUntil"];
  return n < i ? oe("contradicted", [`Not yet valid at ${t}.`], r) : n > c ? oe("contradicted", [`Expired before ${t}.`], r) : oe("established", [`Valid at ${t}.`], r);
}
function bh(e, t) {
  return (Array.isArray(e.relatedResource) ? e.relatedResource : []).filter(Ht).map((i) => {
    const c = String(i.id);
    try {
      const r = Fi(t.resolve(c).bytes);
      return r === i.digestSRI ? { id: c, state: "established", reason: "Digest matches the exact referenced bytes." } : { id: c, state: "contradicted", reason: `Digest mismatch: referenced bytes hash to ${r}.` };
    } catch (r) {
      const a = r instanceof $e ? r.code : "UNAVAILABLE";
      return { id: c, state: "not_established", reason: `Referenced resource unavailable: ${a}.` };
    }
  });
}
async function $i(e, t, n) {
  const i = [], c = n.staticResolver ?? t, r = n.binding ?? hh, a = tn("Not evaluated because protection is not established."), s = (l = {}) => {
    const h = ve(i.map((I) => I.state));
    return Object.freeze({
      artifactId: e,
      protection: Object.freeze({
        artifactId: e,
        ...oe(h, i.filter((I) => I.state !== "established").map((I) => `${I.check}: ${I.reason}`).concat(h === "established" ? ["Protection established from the original secured bytes."] : []))
      }),
      checks: Object.freeze(i.map((I) => Object.freeze(I))),
      validity: a,
      relatedResources: Object.freeze([]),
      facts: Object.freeze([]),
      ...l
    });
  }, o = (l, h, I, A = {}) => (i.push({ check: l, state: h, reason: I }), s(A));
  let p;
  try {
    p = t.resolve(e).bytes;
  } catch (l) {
    const h = l instanceof $e ? l.code : "UNAVAILABLE";
    return o("resolve", "not_established", `Artifact is not available: ${h}.`);
  }
  const m = Fi(p);
  i.push({ check: "resolve", state: "established", reason: `Resolved ${p.byteLength} bytes.` });
  let g;
  try {
    g = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(p));
  } catch {
    return o("parse", "contradicted", "Artifact bytes are not valid UTF-8 JSON.", { digestSRI: m });
  }
  if (!Ht(g)) return o("parse", "contradicted", "Artifact is not a JSON object.", { digestSRI: m });
  i.push({ check: "parse", state: "established", reason: "Strict UTF-8 JSON object." });
  const u = g["@context"], f = r.contexts(Array.isArray(g.type) ? g.type[1] : void 0);
  if (!Array.isArray(u) || u.length !== f.length || f.some((l, h) => u[h] !== l))
    return o(
      "carrier",
      "not_established",
      "Only the exact supported context combination for this type is accepted.",
      { digestSRI: m }
    );
  i.push({ check: "carrier", state: "established", reason: "Exact supported context combination." });
  const w = Array.isArray(g.type) ? g.type : [], x = w.length === 2 && w[0] === "VerifiableCredential" ? String(w[1]) : void 0, b = x === void 0 ? void 0 : r.schemas[x];
  if (b === void 0)
    return o("type", "not_established", `Credential type is not a recognized ${r.name} artifact type.`, { digestSRI: m });
  if (Array.isArray(g.credentialSchema))
    return o(
      "type",
      "not_established",
      "Multiple credentialSchema declarations have no accepted composition in this binding.",
      { digestSRI: m, artifactType: x }
    );
  if ((Ht(g.credentialSchema) ? g.credentialSchema.id : void 0) !== b)
    return o("type", "contradicted", `${x} must declare schema ${b}.`, { digestSRI: m, artifactType: x });
  i.push({ check: "type", state: "established", reason: `${x} with its pinned schema.` });
  try {
    const l = new lh({ allErrors: !0, strict: !0 });
    uh(l);
    const h = JSON.parse(new TextDecoder().decode(c.resolve(b).bytes)), I = l.compile(h);
    if (!I(g)) {
      const A = (I.errors ?? []).map(($) => `${$.instancePath || "/"} ${$.message ?? ""}`).join("; ");
      return o("schema", "contradicted", `Schema validation failed: ${A}`, { digestSRI: m, artifactType: x });
    }
  } catch (l) {
    const h = l instanceof $e ? l.code : "INVALID_SCHEMA";
    return o("schema", "not_established", `Pinned schema unavailable: ${h}.`, { digestSRI: m, artifactType: x });
  }
  i.push({ check: "schema", state: "established", reason: "Valid against the pinned schema." });
  const v = g.proof;
  if (Array.isArray(v))
    return o("proof", "not_established", "Proof sets and chains are unsupported in the initial slice.", { digestSRI: m, artifactType: x });
  if (!Ht(v))
    return o("proof", "not_established", "The artifact carries no proof.", { digestSRI: m, artifactType: x });
  i.push({ check: "proof", state: "established", reason: "One eddsa-rdfc-2022 assertionMethod proof." });
  const y = El(g.issuer, v.verificationMethod, c);
  if (y.state !== "established" || y.publicKey === void 0)
    return o(
      "key",
      y.state === "established" ? "not_established" : y.state,
      `${y.code}: ${y.reason}`,
      { digestSRI: m, artifactType: x, keyAuthorization: y }
    );
  i.push({ check: "key", state: "established", reason: y.reason });
  try {
    const l = Il(c);
    if (!await dh(g, y.publicKey, {
      documentLoader: l,
      safe: !0
    }))
      return o(
        "signature",
        "contradicted",
        "Signature does not verify over the safe canonical form.",
        { digestSRI: m, artifactType: x, keyAuthorization: y }
      );
  } catch (l) {
    const h = l instanceof Error ? l.message.split(`
`)[0] : String(l);
    return o(
      "signature",
      "contradicted",
      `Safe JSON-LD processing rejected the artifact: ${h}`,
      { digestSRI: m, artifactType: x, keyAuthorization: y }
    );
  }
  i.push({ check: "signature", state: "established", reason: "Ed25519 signature verifies (safe mode, offline catalog)." });
  const d = [];
  for (const l of n.manifest.factMappings) {
    const h = String(l.fact);
    for (const { pointer: I, value: A } of gh(g, String(l.nativePath)))
      d.push(Object.freeze({ fact: h, pointer: I, value: structuredClone(A) }));
  }
  return s({
    digestSRI: m,
    artifactType: x,
    keyAuthorization: y,
    validity: vh(g, n.evaluationTime),
    relatedResources: Object.freeze(bh(g, t).map((l) => Object.freeze(l))),
    facts: Object.freeze(d)
  });
}
var Ce = Uint8Array, Zt = Uint16Array, wh = Int32Array, Ad = new Ce([
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
]), qd = new Ce([
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
]), xh = new Ce([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Rd = function(e, t) {
  for (var n = new Zt(31), i = 0; i < 31; ++i)
    n[i] = t += 1 << e[i - 1];
  for (var c = new wh(n[30]), i = 1; i < 30; ++i)
    for (var r = n[i]; r < n[i + 1]; ++r)
      c[r] = r - n[i] << 5 | i;
  return { b: n, r: c };
}, jd = Rd(Ad, 2), $d = jd.b, Sh = jd.r;
$d[28] = 258, Sh[258] = 28;
var Ih = Rd(qd, 0), Ah = Ih.b, xs = new Zt(32768);
for (var ce = 0; ce < 32768; ++ce) {
  var St = (ce & 43690) >> 1 | (ce & 21845) << 1;
  St = (St & 52428) >> 2 | (St & 13107) << 2, St = (St & 61680) >> 4 | (St & 3855) << 4, xs[ce] = ((St & 65280) >> 8 | (St & 255) << 8) >> 1;
}
var fn = (function(e, t, n) {
  for (var i = e.length, c = 0, r = new Zt(t); c < i; ++c)
    e[c] && ++r[e[c] - 1];
  var a = new Zt(t);
  for (c = 1; c < t; ++c)
    a[c] = a[c - 1] + r[c - 1] << 1;
  var s;
  if (n) {
    s = new Zt(1 << t);
    var o = 15 - t;
    for (c = 0; c < i; ++c)
      if (e[c])
        for (var p = c << 4 | e[c], m = t - e[c], g = a[e[c] - 1]++ << m, u = g | (1 << m) - 1; g <= u; ++g)
          s[xs[g] >> o] = p;
  } else
    for (s = new Zt(i), c = 0; c < i; ++c)
      e[c] && (s[c] = xs[a[e[c] - 1]++] >> 15 - e[c]);
  return s;
}), In = new Ce(288);
for (var ce = 0; ce < 144; ++ce)
  In[ce] = 8;
for (var ce = 144; ce < 256; ++ce)
  In[ce] = 9;
for (var ce = 256; ce < 280; ++ce)
  In[ce] = 7;
for (var ce = 280; ce < 288; ++ce)
  In[ce] = 8;
var _d = new Ce(32);
for (var ce = 0; ce < 32; ++ce)
  _d[ce] = 5;
var qh = /* @__PURE__ */ fn(In, 9, 1), Rh = /* @__PURE__ */ fn(_d, 5, 1), ls = function(e) {
  for (var t = e[0], n = 1; n < e.length; ++n)
    e[n] > t && (t = e[n]);
  return t;
}, Be = function(e, t, n) {
  var i = t / 8 | 0;
  return (e[i] | e[i + 1] << 8) >> (t & 7) & n;
}, us = function(e, t) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (t & 7);
}, jh = function(e) {
  return (e + 7) / 8 | 0;
}, $h = function(e, t, n) {
  return (n == null || n > e.length) && (n = e.length), new Ce(e.subarray(t, n));
}, _h = [
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
], He = function(e, t, n) {
  var i = new Error(t || _h[e]);
  if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, He), !n)
    throw i;
  return i;
}, Ph = function(e, t, n, i) {
  var c = e.length, r = 0;
  if (!c || t.f && !t.l)
    return n || new Ce(0);
  var a = !n, s = a || t.i != 2, o = t.i;
  a && (n = new Ce(c * 3));
  var p = function(U) {
    var G = n.length;
    if (U > G) {
      var B = new Ce(Math.max(G * 2, U));
      B.set(n), n = B;
    }
  }, m = t.f || 0, g = t.p || 0, u = t.b || 0, f = t.l, w = t.d, x = t.m, b = t.n, S = c * 8;
  do {
    if (!f) {
      m = Be(e, g, 1);
      var v = Be(e, g + 1, 3);
      if (g += 3, v)
        if (v == 1)
          f = qh, w = Rh, x = 9, b = 5;
        else if (v == 2) {
          var h = Be(e, g, 31) + 257, I = Be(e, g + 10, 15) + 4, A = h + Be(e, g + 5, 31) + 1;
          g += 14;
          for (var $ = new Ce(A), C = new Ce(19), M = 0; M < I; ++M)
            C[xh[M]] = Be(e, g + M * 3, 7);
          g += I * 3;
          for (var E = ls(C), j = (1 << E) - 1, P = fn(C, E, 1), M = 0; M < A; ) {
            var z = P[Be(e, g, j)];
            g += z & 15;
            var y = z >> 4;
            if (y < 16)
              $[M++] = y;
            else {
              var _ = 0, Z = 0;
              for (y == 16 ? (Z = 3 + Be(e, g, 3), g += 2, _ = $[M - 1]) : y == 17 ? (Z = 3 + Be(e, g, 7), g += 3) : y == 18 && (Z = 11 + Be(e, g, 127), g += 7); Z--; )
                $[M++] = _;
            }
          }
          var L = $.subarray(0, h), F = $.subarray(h);
          x = ls(L), b = ls(F), f = fn(L, x, 1), w = fn(F, b, 1);
        } else
          He(1);
      else {
        var y = jh(g) + 4, d = e[y - 4] | e[y - 3] << 8, l = y + d;
        if (l > c) {
          o && He(0);
          break;
        }
        s && p(u + d), n.set(e.subarray(y, l), u), t.b = u += d, t.p = g = l * 8, t.f = m;
        continue;
      }
      if (g > S) {
        o && He(0);
        break;
      }
    }
    s && p(u + 131072);
    for (var k = (1 << x) - 1, O = (1 << b) - 1, V = g; ; V = g) {
      var _ = f[us(e, g) & k], N = _ >> 4;
      if (g += _ & 15, g > S) {
        o && He(0);
        break;
      }
      if (_ || He(2), N < 256)
        n[u++] = N;
      else if (N == 256) {
        V = g, f = null;
        break;
      } else {
        var R = N - 254;
        if (N > 264) {
          var M = N - 257, q = Ad[M];
          R = Be(e, g, (1 << q) - 1) + $d[M], g += q;
        }
        var T = w[us(e, g) & O], D = T >> 4;
        T || He(3), g += T & 15;
        var F = Ah[D];
        if (D > 3) {
          var q = qd[D];
          F += us(e, g) & (1 << q) - 1, g += q;
        }
        if (g > S) {
          o && He(0);
          break;
        }
        s && p(u + 131072);
        var H = u + R;
        if (u < F) {
          var Q = r - F, J = Math.min(F, H);
          for (Q + u < 0 && He(3); u < J; ++u)
            n[u] = i[Q + u];
        }
        for (; u < H; ++u)
          n[u] = n[u - F];
      }
    }
    t.l = f, t.p = V, t.b = u, t.f = m, f && (m = 1, t.m = x, t.d = w, t.n = b);
  } while (!m);
  return u != n.length && a ? $h(n, 0, u) : n.subarray(0, u);
}, Th = /* @__PURE__ */ new Ce(0), Ch = function(e) {
  (e[0] != 31 || e[1] != 139 || e[2] != 8) && He(6, "invalid gzip data");
  var t = e[3], n = 10;
  t & 4 && (n += (e[10] | e[11] << 8) + 2);
  for (var i = (t >> 3 & 1) + (t >> 4 & 1); i > 0; i -= !e[n++])
    ;
  return n + (t & 2);
}, Eh = function(e) {
  var t = e.length;
  return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
};
function kh(e, t) {
  var n = Ch(e);
  return n + 8 > e.length && He(6, "invalid gzip data"), Ph(e.subarray(n, -8), { i: 2 }, new Ce(Eh(e)), t);
}
var Mh = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Oh = 0;
try {
  Mh.decode(Th, { stream: !0 }), Oh = 1;
} catch {
}
function kc(e) {
  return Object.assign(new RangeError(`Cannot create a buffer larger than maxOutputLength ${e}.`), { code: "ERR_BUFFER_TOO_LARGE" });
}
function Lh(e, t = {}) {
  const n = t.maxOutputLength ?? Number.MAX_SAFE_INTEGER;
  if (e.length >= 18) {
    const c = e.length - 4;
    if ((e[c] | e[c + 1] << 8 | e[c + 2] << 16 | e[c + 3] << 24) >>> 0 > n) throw kc(n);
  }
  const i = kh(e);
  if (i.length > n) throw kc(n);
  return i;
}
const Mc = 131072, Nh = 2 * 1024 * 1024;
class _i extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "StatusListError";
  }
}
function Dh(e, t = Nh) {
  if (typeof e != "string" || !/^u[A-Za-z0-9_-]+$/.test(e))
    throw new _i("MALFORMED", 'encodedList must be multibase base64url (prefix "u").');
  let n;
  try {
    n = Lh(zh(e.slice(1)), { maxOutputLength: t });
  } catch (i) {
    throw i.code === "ERR_BUFFER_TOO_LARGE" || /maxOutputLength|buffer/i.test(String(i)) ? new _i("TOO_LARGE", `Decompressed status list exceeds ${t} bytes.`) : new _i("MALFORMED", "encodedList is not valid GZIP data.");
  }
  if (n.byteLength * 8 < Mc)
    throw new _i("TOO_SHORT", `Status list has fewer than ${Mc} bits.`);
  return new Uint8Array(n);
}
function zh(e) {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", n = new Uint8Array(Math.floor(e.length * 6 / 8));
  let i = 0, c = 0, r = 0;
  for (const a of e)
    i = i << 6 | t.indexOf(a), c += 6, c >= 8 && (c -= 8, n[r++] = i >> c & 255);
  return n;
}
function Vh(e, t) {
  const n = e[Math.floor(t / 8)];
  if (n === void 0) throw new RangeError(`Status index ${t} is outside the list.`);
  return (n >> 7 - t % 8 & 1) === 1;
}
function Pd(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Ss(e, t) {
  const n = e.credentialStatus;
  if (n === void 0) return {};
  const i = Array.isArray(n) ? n : [n];
  if (i.length === 0 || !i.every(Pd)) return { reason: "Unsupported credentialStatus form." };
  const c = i.filter((r) => t.includes(String(r.statusPurpose)));
  return c.length > 1 ? { reason: `Several status entries for ${t.join("/")}.` } : c.length === 0 ? { reason: `No status entry has an accepted purpose (${t.join(", ")}); found ${i.map((r) => String(r.statusPurpose)).join(", ")}.` } : { entry: c[0] };
}
function Uh(e, t, n, i, c, r = c) {
  const a = Ss(e, i.purposes), s = a.entry;
  if (s === void 0 && a.reason === void 0)
    return i.required ? { state: "not_established", reason: "Status is required by the profile but the credential names none.", sources: [] } : { state: "established", reason: "The profile does not require status for this credential.", sources: [] };
  if (s === void 0) return { state: "not_established", reason: a.reason, sources: ["/credentialStatus"] };
  if (s.type !== "BitstringStatusListEntry" || typeof s.statusListCredential != "string" || typeof s.statusListIndex != "string")
    return { state: "not_established", reason: "Unsupported credentialStatus form.", sources: ["/credentialStatus"] };
  const o = s.statusListCredential, p = ["/credentialStatus", o];
  if (t === void 0)
    return { state: "not_established", reason: `Status list ${o} is unavailable.`, listUri: o, sources: p };
  if (n !== "established")
    return { state: "not_established", reason: `Status list ${o} is not protected and valid.`, listUri: o, sources: p };
  if (t.id !== o)
    return { state: "not_established", reason: `Resolved status list identifies itself as ${String(t.id)}.`, listUri: o, sources: p };
  if (t.issuer !== e.issuer)
    return { state: "not_established", reason: `Status list is signed by ${String(t.issuer)}, who may not state status for credentials of ${String(e.issuer)}.`, listUri: o, sources: p };
  const m = t.credentialSubject;
  if (!Pd(m) || m.type !== "BitstringStatusList" || m.statusPurpose !== s.statusPurpose)
    return { state: "not_established", reason: "Status list purpose does not match the entry.", listUri: o, sources: p };
  const g = Date.parse(c), u = Date.parse(String(t.validFrom));
  if (!Number.isFinite(g) || !Number.isFinite(u) || (g - u) / 1e3 > i.maxAgeSeconds)
    return { state: "not_established", reason: `Status list is older than the profile's ${i.maxAgeSeconds} s freshness limit.`, listUri: o, sources: p };
  const f = Date.parse(r);
  if (!Number.isFinite(f) || f < u)
    return { state: "not_established", reason: `Status list observed at ${String(t.validFrom)} cannot establish status at the earlier activity time ${r}; historical status is unavailable.`, listUri: o, sources: p };
  if (!/^(0|[1-9][0-9]*)$/.test(s.statusListIndex))
    return { state: "not_established", reason: "statusListIndex is not a non-negative integer.", listUri: o, sources: p };
  let w;
  try {
    w = Vh(Dh(m.encodedList), Number(s.statusListIndex));
  } catch (S) {
    return { state: "not_established", reason: `Status list cannot be read: ${S.message}`, listUri: o, sources: p };
  }
  const [x, b] = s.statusPurpose === "suspension" ? ["Suspended", "Not suspended"] : ["Revoked", "Not revoked"];
  return w ? { state: "contradicted", reason: `${x}: bit ${s.statusListIndex} of ${o} is set.`, listUri: o, sources: p } : { state: "established", reason: `${b}: bit ${s.statusListIndex} of ${o} is clear.`, listUri: o, sources: p };
}
const Gh = Object.freeze({ maxResources: 1e3, maxBytes: 2e7 });
function Fs(e, t, n) {
  if (!(e.binding.id === t.id && e.binding.version === t.version && e.profile.id === n.id && e.profile.version === n.version))
    return `Requested ${e.profile.id}@${e.profile.version} with binding ${e.binding.id}@${e.binding.version} is not the verifier-selected profile ${n.id}@${n.version} for ${t.id}@${t.version}.`;
}
function Bs(e, t) {
  const n = `${e.targetId} | plan`;
  return Bi({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: [],
    authorization: e.selectedClaims.map((i) => ({
      claimId: i.id,
      routeWitnessIds: [],
      ...tn("Not evaluated: the plan was refused at gate 0.")
    })),
    support: [],
    conformity: e.conformity ? { requested: !0, ...e.conformity, ...tn("Not evaluated: the plan was refused at gate 0.") } : { requested: !1, execution: "not_run" },
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
async function Zs(e, t, n, i, c) {
  const r = sa(t.openSession({
    maxResources: e.resolverLimits.maxResources,
    maxBytes: e.resolverLimits.maxBytes
  })), a = sa(t.openSession(Gh)), s = { manifest: n, evaluationTime: e.evaluationTime, staticResolver: a, ...c ? { binding: c } : {} }, o = (h) => JSON.parse(new TextDecoder().decode(r.resolve(h).bytes)), p = await $i(e.targetId, r, s), m = [p], g = /* @__PURE__ */ new Map([[e.targetId, 0]]);
  for (const h of e.suppliedEvidence)
    g.has(h) || (g.set(h, 1), m.push(await $i(h, r, s)));
  for (let h = 0; h < m.length; h++) {
    const I = m[h], A = g.get(I.artifactId);
    if (I.protection.state !== "established" || A + 1 > e.resolverLimits.maxDepth) continue;
    const $ = o(I.artifactId), C = [
      ...(Array.isArray($.termsOfUse) ? $.termsOfUse : []).map((M) => M?.authorizationCredential?.id),
      ...(Array.isArray($.evidence) ? $.evidence : []).map((M) => M?.id)
    ].filter((M) => typeof M == "string");
    for (const M of C)
      g.has(M) || (g.set(M, A + 1), m.push(await $i(M, r, s)));
  }
  const u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  for (const h of m) {
    if (h.protection.state !== "established") {
      w.set(h.artifactId, void 0);
      continue;
    }
    const I = o(h.artifactId).id;
    w.set(h.artifactId, I === h.artifactId ? oe("established", ["Artifact identifies itself by its resolved identity."], ["/id"]) : oe("contradicted", [`Artifact resolved as ${h.artifactId} identifies itself as ${String(I)}.`], ["/id"]));
  }
  const x = async (h, I, A) => {
    const $ = g.get(h) + 1;
    if ($ > e.resolverLimits.maxDepth)
      return {
        state: "not_established",
        sources: ["/credentialStatus"],
        reason: `Status list is at depth ${$}, beyond the request's maxDepth ${e.resolverLimits.maxDepth}.`
      };
    const C = Ss(I, A.purposes).entry, M = typeof C?.statusListCredential == "string" ? C.statusListCredential : void 0;
    let E, j = "not_established";
    if (M !== void 0) {
      u.has(M) || u.set(M, await $i(M, r, s));
      const P = u.get(M);
      P.digestSRI !== void 0 && P.protection.state === "established" ? (E = o(M), j = ve([P.protection.state, P.validity.state])) : P.digestSRI !== void 0 && (E = {}, j = P.protection.state);
    }
    return Uh(I, E, j, A, e.evaluationTime, e.activityTime);
  }, b = { required: !0, purposes: ["suspension"], maxAgeSeconds: i.credentialStatus.maxAgeSeconds }, S = /* @__PURE__ */ new Map();
  for (const h of m) {
    if (h.protection.state !== "established") {
      f.set(h.artifactId, void 0);
      continue;
    }
    const I = o(h.artifactId);
    f.set(h.artifactId, await x(h.artifactId, I, i.credentialStatus)), Ss(I, ["suspension"]).entry !== void 0 && S.set(h.artifactId, await x(h.artifactId, I, b));
  }
  const v = (h) => [
    h.protection,
    w.get(h.artifactId) ? {
      artifactId: h.artifactId,
      ...w.get(h.artifactId),
      reasons: w.get(h.artifactId).reasons.map((I) => `identity: ${I}`)
    } : { artifactId: h.artifactId, ...tn("identity: Not evaluated because protection is not established.") },
    {
      artifactId: h.artifactId,
      ...h.validity,
      reasons: h.validity.reasons.map((I) => `validity: ${I}`)
    },
    ...f.get(h.artifactId) ? [{ artifactId: h.artifactId, ...oe(
      f.get(h.artifactId).state,
      [`status: ${f.get(h.artifactId).reason}`],
      [...f.get(h.artifactId).sources]
    ) }] : [{
      artifactId: h.artifactId,
      ...tn("status: Not evaluated because protection is not established.")
    }],
    ...h.relatedResources.map((I) => ({
      artifactId: I.id,
      ...oe(I.state, [`integrity (from ${h.artifactId}): ${I.reason}`], ["/relatedResource"])
    }))
  ], y = /* @__PURE__ */ new Map();
  for (const h of m) {
    const I = [
      ["protection", h.protection.state, h.protection.reasons.join(" ")],
      ["identity", w.get(h.artifactId)?.state ?? "not_established", w.get(h.artifactId)?.reasons.join(" ") ?? "not evaluated"],
      ["validity", h.validity.state, h.validity.reasons.join(" ")],
      ["status", f.get(h.artifactId)?.state ?? "not_established", f.get(h.artifactId)?.reason ?? "not evaluated"]
    ], A = ve(I.map((C) => C[1])), $ = S.get(h.artifactId);
    y.set(h.artifactId, {
      uri: h.artifactId,
      usable: A,
      reason: I.filter((C) => C[1] !== "established").map((C) => `${C[0]}: ${C[2]}`).join("; ") || "usable",
      ...A === "established" ? { document: o(h.artifactId) } : {},
      ...$ ? { suspension: { state: $.state, reason: $.reason } } : {}
    });
  }
  const d = [], l = [];
  m.forEach((h, I) => {
    const A = I === 0 ? "target" : "supplied-evidence", $ = Yi(h.artifactId, h.digestSRI, A, e);
    for (const E of h.checks)
      d.push({
        gate: mh[E.check],
        nodeUse: $,
        predicate: E.check,
        state: E.state,
        execution: "executed",
        reason: E.reason,
        sources: [h.artifactId]
      });
    for (const E of h.relatedResources)
      d.push({
        gate: 1,
        nodeUse: $,
        predicate: "related-resource-integrity",
        state: E.state,
        execution: "executed",
        reason: `${E.id}: ${E.reason}`,
        sources: ["/relatedResource", E.id]
      });
    const C = w.get(h.artifactId);
    d.push(C ? {
      gate: 1,
      nodeUse: $,
      predicate: "resource-identity",
      state: C.state,
      execution: "executed",
      reason: C.reasons.join(" "),
      sources: [...C.sourcePointers]
    } : {
      gate: 1,
      nodeUse: $,
      predicate: "resource-identity",
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated because protection is not established.",
      sources: []
    }), d.push({
      gate: 3,
      nodeUse: $,
      predicate: "validity-period",
      state: h.validity.state,
      execution: h.validity.execution,
      reason: h.validity.reasons.join(" ") || "Not evaluated.",
      sources: [...h.validity.sourcePointers]
    });
    const M = f.get(h.artifactId);
    d.push(M ? {
      gate: 3,
      nodeUse: $,
      predicate: "credential-status",
      state: M.state,
      execution: "executed",
      reason: M.reason,
      sources: [...M.sources]
    } : {
      gate: 3,
      nodeUse: $,
      predicate: "credential-status",
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated because protection is not established.",
      sources: []
    }), h.digestSRI !== void 0 && l.push({
      uri: h.artifactId,
      digestSRI: h.digestSRI,
      kind: "artifact",
      source: "catalog",
      observedAt: e.evaluationTime
    });
  });
  for (const [h, I] of u)
    I.digestSRI !== void 0 && l.push({ uri: h, digestSRI: I.digestSRI, kind: "status", source: "catalog", observedAt: e.evaluationTime });
  return {
    target: p,
    artifacts: m,
    facts: y,
    verificationOf: v,
    artifactVerification: m.flatMap(v),
    trace: d,
    resources: l
  };
}
const Fh = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/, Hs = Object.freeze({ "kg/kg": 0, "mg/kg": -6 });
function er(e) {
  if (typeof e != "string" || !Fh.test(e)) return;
  const [t, n = ""] = e.split(".");
  return { n: BigInt(`${t}${n}`), scale: n.length };
}
function vn(e, t) {
  const n = er(e), i = typeof t == "string" ? Hs[t] : void 0;
  if (!(n === void 0 || i === void 0))
    return i <= 0 ? { n: n.n, scale: n.scale - i } : { n: n.n * 10n ** BigInt(i), scale: n.scale };
}
function Re(e, t) {
  const n = Math.max(e.scale, t.scale), i = e.n * 10n ** BigInt(n - e.scale), c = t.n * 10n ** BigInt(n - t.scale);
  return i < c ? -1 : i > c ? 1 : 0;
}
function Bh(e, t) {
  const n = Math.max(e.scale, t.scale);
  return { n: e.n * 10n ** BigInt(n - e.scale) + t.n * 10n ** BigInt(n - t.scale), scale: n };
}
function hn(e) {
  const t = e.n.toString().padStart(e.scale + 1, "0");
  if (e.scale === 0) return t;
  const n = t.slice(-e.scale).replace(/0+$/, "");
  return n.length === 0 ? t.slice(0, -e.scale) : `${t.slice(0, -e.scale)}.${n}`;
}
function Is(e) {
  const t = e.range;
  if (t === void 0) return "Scope record has no range.";
  const n = vn(t.from, t.unit), i = vn(t.to, t.unit);
  return n === void 0 || i === void 0 ? `Unsupported or malformed range ${String(t.from)}–${String(t.to)} ${String(t.unit)}.` : Re(n, i) > 0 ? "Scope record range is reversed." : { low: n, high: i };
}
const Pi = (e) => Array.isArray(e) ? e.filter((t) => typeof t == "string") : [], Oc = (e, t) => e.length > 0 && e.every((n) => t.includes(n));
function Zh(e, t) {
  if (e.length === 0) return { state: "not_established", reason: "The projected scope has no records.", witnesses: [] };
  const n = [];
  for (const i of e) {
    const c = Is(i);
    if (typeof c == "string")
      return { state: /reversed/.test(c) ? "contradicted" : "not_established", reason: `${String(i.id)}: ${c}`, witnesses: n };
    const r = Pi(i.allowedPropertyIris), a = Pi(i.allowedMethodIris);
    if (r.length === 0 || a.length === 0 || typeof i.matrixIri != "string" || typeof i.formIri != "string" || typeof i.quantityKindIri != "string")
      return { state: "not_established", reason: `${String(i.id)}: a restricted dimension is missing or empty.`, witnesses: n };
    const s = t.find((o) => {
      const p = Is(o);
      return typeof p != "string" && o.matrixIri === i.matrixIri && o.formIri === i.formIri && o.quantityKindIri === i.quantityKindIri && Oc(r, Pi(o.allowedPropertyIris)) && Oc(a, Pi(o.allowedMethodIris)) && Re(c.low, p.low) >= 0 && Re(c.high, p.high) <= 0;
    });
    if (s === void 0)
      return { state: "contradicted", reason: `${String(i.id)} is not contained in any single parent record.`, witnesses: n };
    n.push({ child: String(i.id), parent: String(s.id) });
  }
  return { state: "established", reason: `Each projected record lies within one parent record (${n.map((i) => `${i.child} ⊆ ${i.parent}`).join("; ")}).`, witnesses: n };
}
const mn = "https://vc4qi.example/bindings/rm/1#", yn = Object.freeze({
  issueRmCertificate: `${mn}issueRmCertificate`,
  maintainRmScope: `${mn}maintainRmScope`,
  issueRmStudy: `${mn}issueRmStudy`
}), qe = (e, t, n = []) => ({ id: e, state: "established", reason: t, sources: n }), Ne = (e, t, n = []) => ({ id: e, state: "contradicted", reason: t, sources: n }), he = (e, t, n = []) => ({ id: e, state: "not_established", reason: t, sources: n }), Rt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Le = (e) => Array.isArray(e) ? e : [], Qe = (e) => Rt(e.credentialSubject) ? e.credentialSubject : {}, As = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0, st = (e, t) => Le(Qe(e).permittedActivity).includes(t);
function Td(e, t = "RmAuthorizationPolicy") {
  return Le(e.termsOfUse).filter(Rt).filter((n) => n.type === t && Rt(n.authorizationCredential)).map((n) => n.authorizationCredential).filter((n) => typeof n.id == "string").map((n) => ({ id: n.id, type: n.type }));
}
function We(e, t, n, i, c, r = "RmAuthorizationPolicy") {
  const a = Td(t, r).filter((p) => p.type === n).map((p) => p.id);
  if (a.length === 0)
    return { basis: he(e, `No recognized authorization policy references a ${n}.`, ["/termsOfUse"]) };
  if (a.length > 1)
    return { basis: he(e, `Several ${n} references; this binding has no deterministic selection.`, ["/termsOfUse"]) };
  const s = a[0];
  if (c.includes(s))
    return { basis: he(e, `Circular authorization: ${s} is already on the evaluation path.`, ["/termsOfUse", s]) };
  const o = i(s);
  return o === void 0 ? { basis: he(e, `Referenced ${n} ${s} is unavailable.`, ["/termsOfUse", s]) } : o.usable !== "established" || o.document === void 0 ? { basis: {
    id: e,
    state: o.usable === "contradicted" ? "contradicted" : "not_established",
    reason: `Referenced ${n} ${s} is not usable: ${o.reason}`,
    sources: ["/termsOfUse", s]
  } } : As(o.document) !== n ? { basis: Ne(e, `Reference declares ${n}, but ${s} is a ${String(As(o.document))}.`, ["/termsOfUse", s]) } : { basis: qe(e, `References ${n} ${s}.`, ["/termsOfUse", s]), node: o };
}
function ct(e, t, n, i) {
  const c = Qe(t).id;
  return typeof c != "string" || typeof n != "string" ? he(e, `${i}: grantee or exercising actor is missing.`, ["/credentialSubject/id", "/issuer"]) : c === n ? qe(e, `${i}: grantee ${c} is the exercising actor.`, ["/credentialSubject/id", "/issuer"]) : Ne(e, `${i}: grantee ${c} is not the exercising actor ${n}.`, ["/credentialSubject/id", "/issuer"]);
}
function $t(e, t, n, i) {
  const c = i.trustAnchors.find((r) => r.id === t.issuer);
  return c === void 0 ? he(e, `${String(t.issuer)} is not a configured trust anchor.`, ["/issuer"]) : c.purposes.includes(n) ? qe(e, `${String(t.issuer)} is a configured anchor for ${n}.`, ["/issuer"]) : he(e, `${String(t.issuer)} is an anchor, but not for ${n}.`, ["/issuer"]);
}
function _t(e, t) {
  const n = "scope-in-force-at-activity", i = Qe(e).activityTime, c = Date.parse(String(i));
  if (typeof i != "string" || !Number.isFinite(c))
    return he(n, "The certificate states no activity time.", ["/credentialSubject/activityTime"]);
  for (const [r, a] of t) {
    const s = Date.parse(String(a.validFrom)), o = Date.parse(String(a.validUntil));
    if (!Number.isFinite(s) || c < s)
      return he(n, `${r} is valid only from ${String(a.validFrom)}, after the activity at ${i}; a later scope cannot authorize it.`, ["/credentialSubject/activityTime", "/validFrom"]);
    if (Number.isFinite(o) && c > o)
      return he(n, `${r} expired at ${String(a.validUntil)}, before the activity at ${i}.`, ["/credentialSubject/activityTime", "/validUntil"]);
  }
  return qe(n, `${t.map((r) => r[0]).join(" and ")} ${t.length > 1 ? "were" : "was"} in force at the activity time ${i}.`, ["/credentialSubject/activityTime"]);
}
function ue(e, t, n, i) {
  return { id: e, state: ve(t.map((c) => c.state)), execution: "executed", bases: t, chain: n, ...i ? { scope: i } : {} };
}
function Hh(e, t, n, i) {
  const c = e.document, r = [], a = [e.uri], s = We("authorizing-reference", c, "RmOperationalScope", t, i);
  if (r.push(s.basis), !s.node) return ue("operational-scope", r, a);
  const o = s.node.document;
  a.push(s.node.uri), r.push(ct("principal-binding", o, c.issuer, "Operational scope O")), r.push(o.issuer === Qe(o).id ? qe("self-maintained-scope", "O is issued by its own grantee.", ["/issuer"]) : Ne("self-maintained-scope", "O is not issued by its own grantee.", ["/issuer"])), r.push(st(o, yn.issueRmCertificate) ? qe("activity-permission", "O permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : Ne("activity-permission", "O does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"]));
  const p = We("maintenance-grant", o, "RmAccreditation", t, [...i, s.node.uri]);
  if (r.push(p.basis), !p.node) return ue("operational-scope", r, a);
  const m = p.node.document;
  a.push(p.node.uri), r.push(ct("accreditation-grantee", m, o.issuer, "Accreditation A")), r.push(st(m, yn.maintainRmScope) && st(m, yn.issueRmCertificate) ? qe("projection-permission", "A permits maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]) : Ne("projection-permission", "A does not permit maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]));
  const g = Zh(Le(Qe(o).scope).filter(Rt), Le(Qe(m).scope).filter(Rt));
  return r.push({ id: "bounded-projection", state: g.state, reason: g.reason, sources: ["/credentialSubject/scope"] }), r.push($t("trust-anchor", m, "accredit-rm-producers", n)), r.push(_t(c, [["O", o], ["A", m]])), ue("operational-scope", r, a, s.node.uri);
}
function Jh(e, t, n, i) {
  const c = e.document, r = [], a = [e.uri], s = We("authorizing-reference", c, "RmAccreditation", t, i);
  if (r.push(s.basis), !s.node) return ue("direct-accreditation", r, a);
  const o = s.node.document;
  return a.push(s.node.uri), r.push(ct("principal-binding", o, c.issuer, "Accreditation A")), r.push(st(o, yn.issueRmCertificate) ? qe("activity-permission", "A permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : Ne("activity-permission", "A does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"])), r.push($t("trust-anchor", o, "accredit-rm-producers", n)), r.push(_t(c, [["A", o]])), ue("direct-accreditation", r, a, s.node.uri);
}
const Kh = Object.freeze({
  "operational-scope": Hh,
  "direct-accreditation": Jh
});
function Qh(e, t, n) {
  const i = "restriction:accreditation-suspension", c = e.document.issuer, r = /* @__PURE__ */ new Set([e.uri]), a = [e.document], s = [];
  for (; a.length > 0; )
    for (const m of Td(a.shift())) {
      if (r.has(m.id)) continue;
      r.add(m.id);
      const g = t(m.id);
      if (g?.usable !== "established" || g.document === void 0) continue;
      a.push(g.document);
      const u = g.document, f = n.trustAnchors.some((w) => w.id === u.issuer && w.purposes.includes("accredit-rm-producers"));
      As(u) === "RmAccreditation" && f && Qe(u).id === c && s.push(g);
    }
  if (s.length === 0)
    return he(i, `No accreditation of ${String(c)} is reached, so the absence of a suspension is not established.`);
  const o = s.map((m) => m.suspension === void 0 ? he(i, `${m.uri} carries no suspension status.`, [m.uri]) : { id: i, state: m.suspension.state, reason: `${m.uri}: ${m.suspension.reason}`, sources: [m.uri] }), p = ve(o.map((m) => m.state));
  return {
    id: i,
    state: p,
    reason: p === "contradicted" ? `The actor's certification activity is suspended. ${o.filter((m) => m.state === "contradicted").map((m) => m.reason).join(" ")}` : o.map((m) => m.reason).join(" "),
    sources: s.map((m) => m.uri)
  };
}
const Wh = Object.freeze({
  "accreditation-suspension": Qh
});
function An(e, t, n) {
  const i = [
    ...t,
    ...n.map((p) => ({ id: p, state: "not_established", execution: "not_run", bases: [], chain: [] }))
  ], c = e.length === 0 ? "established" : ve(e.map((p) => p.state)), r = i.length === 0 ? "not_established" : bn(i.map((p) => p.state)), a = ve([c, r]), s = i.find((p) => p.state === "established"), o = a === "established" ? `Authorized through route ${s.id}; global restrictions hold.` : c === "contradicted" ? "An applicable global restriction applies to every route." : r === "contradicted" ? "Every permitted route is contradicted." : n.length > 0 ? "The route search stopped at its budget before every route was evaluated." : "No complete route is established.";
  return { state: a, reason: o, restrictions: e, routes: i };
}
function tr(e, t) {
  const n = e.routes.filter((c) => c.execution === "executed").map((c) => {
    const a = (c.scope === void 0 ? void 0 : t(c)) ?? he("claim-coverage", "The route did not reach a scope credential.");
    return { ...c, bases: [...c.bases, a], state: ve([c.state, a.state]) };
  }), i = e.routes.filter((c) => c.execution === "not_run").map((c) => c.id);
  return An(e.restrictions, n, i);
}
function Xh(e, t, n) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] };
  const i = e, c = n.authority.certificateRoutes, r = n.authority.maxRoutes, a = c.slice(0, r).map((o) => {
    const p = Kh[o];
    return p === void 0 ? ue(o, [he("installed-evaluator", `Route ${o} has no installed evaluator.`)], [i.uri]) : p(i, t, n, [i.uri]);
  }), s = n.authority.globalRestrictions.map((o) => {
    const p = Wh[o];
    return p === void 0 ? he(`restriction:${o}`, `Global restriction ${o} has no installed evaluator.`) : p(i, t, n);
  });
  return An(s, a, c.slice(r));
}
function Yh(e, t, n, i) {
  const c = e.document, r = [], a = [e.uri], s = We("laboratory-authority-reference", c, "RmLabAuthority", t, i);
  if (r.push(s.basis), !s.node) return ue("laboratory-authority", r, a);
  const o = s.node.document;
  a.push(s.node.uri), r.push(ct("laboratory-binding", o, c.issuer, "Laboratory authority H")), r.push(st(o, yn.issueRmStudy) ? qe("study-permission", "H permits issuing RM studies.", ["/credentialSubject/permittedActivity"]) : Ne("study-permission", "H does not permit issuing RM studies.", ["/credentialSubject/permittedActivity"]));
  const p = Qe(c), m = Le(Qe(o).scope).filter(Rt).some((g) => g.matrixIri === p.matrixIri && Le(g.allowedPropertyIris).includes(p.propertyIri) && Le(g.studyTypeIris).includes(p.studyTypeIri));
  return r.push(m ? qe("study-scope", "H covers this matrix, property and study type.", ["/credentialSubject/scope"]) : Ne("study-scope", "H does not cover this matrix, property and study type.", ["/credentialSubject/scope"])), r.push($t("laboratory-anchor", o, "recognize-rm-laboratories", n)), ue("laboratory-authority", r, a);
}
function em(e, t, n) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const i = e.document, c = Le(i.evidence).filter(Rt).filter((S) => S.type === "RmStudyReference").map((S) => String(S.id));
  if (c.length === 0)
    return { state: "not_established", reason: "D cites no required study.", bases: [he("study-reference", "No RmStudyReference in evidence.", ["/evidence"])], chain: [e.uri] };
  if (c.length > 1)
    return { state: "not_established", reason: "Several study references; this binding has no composition for them.", bases: [he("study-reference", "Ambiguous study references.", ["/evidence"])], chain: [e.uri] };
  const r = c[0], a = t(r);
  if (a === void 0) {
    const S = he("study-reference", `Required study ${r} is unavailable.`, ["/evidence", r]);
    return { state: "not_established", reason: S.reason, bases: [S], chain: [e.uri] };
  }
  if (a.usable !== "established" || a.document === void 0) {
    const S = {
      id: "study-reference",
      state: a.usable === "contradicted" ? "contradicted" : "not_established",
      reason: `Required study ${r} is not usable: ${a.reason}`,
      sources: ["/evidence", r]
    };
    return { state: S.state, reason: S.reason, bases: [S], chain: [e.uri] };
  }
  const s = a.document, o = Qe(s), p = Qe(i), m = Rt(Le(p.materialPropertiesList)[0]) ? Le(Le(p.materialPropertiesList)[0].results)[0] : void 0, g = Le(p.materials)[0], u = [qe("study-reference", `Cites study ${r}.`, ["/evidence", r])];
  u.push(o.id === p.id ? qe("same-batch", `S concerns batch ${String(o.id)}.`, ["/credentialSubject/id"]) : Ne("same-batch", `S concerns ${String(o.id)}, not batch ${String(p.id)}.`, ["/credentialSubject/id"])), u.push(o.propertyIri === m?.propertyIri && o.matrixIri === g?.matrixIri ? qe("same-property-and-matrix", "S concerns the certified property and matrix.", ["/credentialSubject/propertyIri"]) : Ne("same-property-and-matrix", "S concerns another property or matrix.", ["/credentialSubject/propertyIri"])), u.push(o.studyTypeIri === `${mn}Homogeneity` && o.outcomeIri === `${mn}Homogeneous` ? qe("study-outcome", "S reports the batch homogeneous.", ["/credentialSubject/outcomeIri"]) : Ne("study-outcome", "S does not report a homogeneous batch.", ["/credentialSubject/outcomeIri"]));
  const f = Date.parse(String(o.activityTime)), w = Date.parse(String(p.activityTime));
  u.push(Number.isFinite(f) && Number.isFinite(w) ? f <= w ? qe("study-precedes-certification", "The study precedes the certification activity.", ["/credentialSubject/activityTime"]) : Ne("study-precedes-certification", "The study postdates the certification activity.", ["/credentialSubject/activityTime"]) : he("study-precedes-certification", "An activity time is missing.", ["/credentialSubject/activityTime"]));
  const x = Yh(a, t, n, [e.uri, r]);
  u.push(...x.bases);
  const b = ve(u.map((S) => S.state));
  return {
    state: b,
    reason: b === "established" ? "Required study is applicable and independently authorized." : b === "contradicted" ? "Required study is contradicted." : "Required study is not established.",
    bases: u,
    chain: [e.uri, ...x.chain]
  };
}
const Et = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Cd = (e) => Array.isArray(e) ? e : [], Lc = (e) => Cd(e).filter((t) => typeof t == "string"), de = (e) => String(e).split(/[#/]/).pop();
function tm(e, t, n) {
  const i = [t], c = Et(e.credentialSubject) ? e.credentialSubject : {}, r = Cd(c.materials).filter(Et);
  if (r.length !== 1) return { state: "not_established", reason: "The certificate must name exactly one material.", sources: ["/credentialSubject/materials"] };
  const a = r[0];
  if (!Et(n)) return { state: "not_established", reason: `No result at ${t}.`, sources: i };
  const s = Et(n.data) && Et(n.data.quantity) ? n.data.quantity : void 0;
  if (s === void 0) return { state: "not_established", reason: "The result has no quantity.", sources: i };
  const o = Et(s.unit) ? s.unit.ucumCode : void 0;
  if (typeof o != "string" || Hs[o] === void 0)
    return { state: "not_established", reason: `Unit ${String(o)} has no supported mapping (mg/kg, kg/kg).`, sources: [`${t}/data/quantity/unit`] };
  const p = Et(s.uncertainty) ? s.uncertainty : void 0, m = er(p?.coverageFactor);
  if (m === void 0 || Re(m, { n: 2n, scale: 0 }) !== 0)
    return { state: "not_established", reason: `Coverage factor ${String(p?.coverageFactor)} is not the binding's k = 2.`, sources: [`${t}/data/quantity/uncertainty`] };
  const g = vn(s.value, o), u = vn(p?.expandedUncertainty, o);
  if (g === void 0 || u === void 0)
    return { state: "not_established", reason: "Value or expanded uncertainty is not a supported decimal.", sources: [`${t}/data/quantity`] };
  const f = {
    matrixIri: a.matrixIri,
    formIri: a.formIri,
    propertyIri: n.propertyIri,
    methodIri: n.methodIri,
    quantityKindIri: s.quantityKind
  }, w = Object.entries(f).filter(([, x]) => typeof x != "string").map(([x]) => x);
  return w.length > 0 ? { state: "not_established", reason: `Missing governed identifier: ${w.join(", ")}.`, sources: i } : {
    state: "established",
    reason: `Mapped ${de(f.propertyIri)} by ${de(f.methodIri)} in ${de(f.matrixIri)}: ${String(s.value)} ± ${String(p?.expandedUncertainty)} ${o} (k = 2).`,
    sources: i,
    coordinates: { ...f, value: g, uncertainty: u }
  };
}
function nm(e, t, n, i) {
  if (t.includes(e)) return { state: "established", reason: `method ${de(e)}` };
  const c = n.find((a) => a.method === e && t.includes(a.revises));
  if (c === void 0) return { state: "contradicted", reason: `method ${de(e)} is not allowed` };
  const r = `${de(c.revises)} → ${de(e)}`;
  switch (i) {
    case "accept-successor":
      return { state: "established", reason: `method ${de(e)} as accepted successor (${r})` };
    case "require-extension":
      return { state: "contradicted", reason: `method ${de(e)} needs an explicit scope extension (${r})` };
    default:
      return { state: "not_established", reason: `no governed ${r} succession rule in the profile` };
  }
}
function im(e, t, n, i) {
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: ["/credentialSubject/scope"] };
  const c = t.map((s) => {
    const o = String(s.id), p = Is(s);
    if (typeof p == "string")
      return { id: o, state: /reversed/.test(p) ? "contradicted" : "not_established", reason: `${de(o)}: ${p}` };
    const m = [];
    s.matrixIri !== e.matrixIri && m.push(`matrix ${de(e.matrixIri)} ≠ ${de(s.matrixIri)}`), s.formIri !== e.formIri && m.push(`form ${de(e.formIri)} ≠ ${de(s.formIri)}`), s.quantityKindIri !== e.quantityKindIri && m.push(`quantity kind ${de(e.quantityKindIri)} ≠ ${de(s.quantityKindIri)}`), Lc(s.allowedPropertyIris).includes(e.propertyIri) || m.push(`property ${de(e.propertyIri)} is not allowed`), Re(e.value, p.low) < 0 && m.push("value is below the range"), Re(e.value, p.high) > 0 && m.push("value is above the range");
    const g = nm(e.methodIri, Lc(s.allowedMethodIris), n, i);
    if (m.length > 0 || g.state === "contradicted")
      return { id: o, state: "contradicted", reason: `${de(o)}: ${[...m, ...g.state === "contradicted" ? [g.reason] : []].join("; ")}` };
    if (g.state === "not_established") return { id: o, state: "not_established", reason: `${de(o)}: ${g.reason}` };
    const u = hn(Oi(p.low, "mg/kg")), f = hn(Oi(p.high, "mg/kg"));
    return {
      id: o,
      state: "established",
      reason: `${de(o)} covers ${de(e.propertyIri)}, ${g.reason}, ${de(e.matrixIri)}/${de(e.formIri)}, ${hn(Oi(e.value, "mg/kg"))} mg/kg within ${u}–${f} mg/kg`
    };
  }), r = bn(c.map((s) => s.state)), a = c.find((s) => s.state === "established");
  return {
    state: r,
    reason: a ? a.reason : `No single scope record covers the claim (${c.map((s) => s.reason).join(" | ")}).`,
    sources: ["/credentialSubject/scope"],
    ...a ? { record: a.id } : {}
  };
}
function Oi(e, t) {
  const n = Hs[t];
  return n >= 0 ? { n: e.n, scale: e.scale + n } : e.scale + n >= 0 ? { n: e.n, scale: e.scale + n } : { n: e.n * 10n ** BigInt(-(e.scale + n)), scale: 0 };
}
function rm(e, t, n) {
  if (e.propertyIri !== t.propertyIri || e.quantityKindIri !== t.quantityKindIri)
    return { state: "not_established", reason: `Requirement ${t.id} does not apply to this claim's property and quantity kind.`, sources: [] };
  const i = vn(t.upperLimit.value, t.upperLimit.unit);
  if (i === void 0) return { state: "not_established", reason: `Requirement ${t.id} has an unsupported limit.`, sources: [] };
  const c = t.upperLimit.unit, r = (g) => hn(Oi(g, c)), a = n.acceptWhen === "value-plus-expanded-uncertainty-at-most-limit", s = a ? Bh(e.value, e.uncertainty) : e.value, o = Re(s, i) <= 0, m = `${a ? `${r(e.value)} + ${r(e.uncertainty)} = ${r(s)}` : r(e.value)} ${o ? "≤" : ">"} ${r(i)} ${c}`;
  return {
    state: o ? "established" : "contradicted",
    reason: `${o ? "Conforms" : "Does not conform"} under ${n.id}: ${m}.`,
    sources: [],
    arithmetic: m
  };
}
const sm = /^\/credentialSubject\/materialPropertiesList\/(0|[1-9][0-9]*)\/results\/(0|[1-9][0-9]*)$/;
async function am(e, t, n, i) {
  if (n.id !== aa || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${aa}@${n.version}.`);
  const c = Fs(e, n, i);
  if (c !== void 0) return Object.freeze({ result: Bs(e, c), artifacts: Object.freeze([]) });
  const r = await Zs(e, t, n, i), { target: a, artifacts: s, facts: o, verificationOf: p, artifactVerification: m } = r, g = (j) => o.get(j), u = Xh(o.get(e.targetId), g, i), f = em(o.get(e.targetId), g, i), w = u.routes.find((j) => j.state === "established"), x = o.get(e.targetId)?.document, b = (Array.isArray(n.scopeAndMapping.methodRevisions) ? n.scopeAndMapping.methodRevisions : []).filter((j) => typeof j?.method == "string" && typeof j?.revises == "string"), S = (j) => {
    const P = o.get(j)?.document?.credentialSubject;
    return Array.isArray(P?.scope) ? P.scope : [];
  }, v = e.selectedClaims.map((j) => {
    if (!(x !== void 0 && sm.test(j.sourcePointer) && en(x, j.sourcePointer) !== void 0)) {
      const O = x === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${j.sourcePointer} is not a result in the usable target.`;
      return {
        claim: j,
        mapping: void 0,
        coverage: /* @__PURE__ */ new Map(),
        result: { claimId: j.id, routeWitnessIds: [], ...oe("not_established", [O]) }
      };
    }
    const z = tm(x, j.sourcePointer, en(x, j.sourcePointer)), _ = /* @__PURE__ */ new Map();
    if (z.coordinates === void 0)
      return { claim: j, mapping: z, coverage: _, result: {
        claimId: j.id,
        routeWitnessIds: [],
        ...oe(z.state, [`Gate 4: ${z.reason}`], [j.sourcePointer])
      } };
    const Z = z.coordinates, L = tr(u, (O) => {
      const V = im(Z, S(O.scope), b, i.mapping.methodSuccession), N = [O.scope, ...V.sources];
      return _.set(O.id, { ...V, sources: N }), { id: "claim-coverage", state: V.state, reason: V.reason, sources: N };
    }), F = L.routes.find((O) => O.state === "established"), k = F ? _.get(F.id)?.record : void 0;
    return { claim: j, mapping: z, coverage: _, result: {
      claimId: j.id,
      routeWitnessIds: L.state === "established" && F ? [`route:${F.id}`, ...F.chain, `record:${k}`] : [],
      ...oe(L.state, [
        L.reason,
        ...F ? [_.get(F.id).reason] : [..._].map(([O, V]) => `${O}: ${V.reason}`)
      ], [j.sourcePointer])
    } };
  }), y = v.map((j) => j.result), d = [{
    obligationId: "rm-v1:required-study",
    witnessIds: f.state === "established" ? [...f.chain] : [],
    ...oe(f.state, [f.reason], ["/evidence"])
  }], l = (() => {
    if (!e.conformity) return { requested: !1, execution: "not_run" };
    const j = { requested: !0, ...e.conformity }, P = i.conformity.requirements.find((F) => F.id === e.conformity.requirementId), z = i.conformity.decisionRules.find((F) => F.id === e.conformity.decisionRuleId);
    if (!P || !z)
      return { ...j, ...oe("not_established", [`Requirement ${e.conformity.requirementId} or decision rule ${e.conformity.decisionRuleId} is not configured in the verifier profile.`]) };
    const _ = v.filter((F) => F.mapping?.coordinates?.propertyIri === P.propertyIri && F.mapping.coordinates.quantityKindIri === P.quantityKindIri);
    if (_.length !== 1)
      return { ...j, ...oe("not_established", [`Requirement ${P.id} must apply to exactly one selected claim; ${_.length} match.`]) };
    const Z = _[0];
    if (Z.result.state !== "established")
      return { ...j, ...tn(`Not evaluated: claim ${Z.claim.id} is not authorized.`) };
    const L = rm(Z.mapping.coordinates, P, z);
    return { ...j, ...oe(L.state, [L.reason], [Z.claim.sourcePointer]) };
  })(), h = /* @__PURE__ */ new Set([
    e.targetId,
    ...w?.chain ?? [],
    ...f.state === "established" ? f.chain : []
  ]), I = [
    ...s.filter((j) => h.has(j.artifactId)).flatMap(p).map((j) => j.state),
    ...y.map((j) => j.state),
    ...d.map((j) => j.state),
    ...l.requested ? [l.state] : []
  ], A = Ts(I), $ = [...r.trace], C = [...r.resources], M = Yi(a.artifactId, a.digestSRI, "target", e);
  for (const { claim: j, mapping: P, coverage: z } of v) {
    P && $.push({
      gate: 4,
      nodeUse: M,
      predicate: `claim-mapping:${j.id}`,
      state: P.state,
      execution: "executed",
      reason: P.reason,
      sources: [...P.sources]
    });
    for (const [_, Z] of z)
      $.push({
        gate: 5,
        nodeUse: M,
        predicate: `claim-coverage:${j.id}:${_}`,
        state: Z.state,
        execution: "executed",
        reason: Z.reason,
        sources: [...Z.sources]
      });
  }
  for (const j of y)
    $.push({
      gate: 5,
      nodeUse: M,
      predicate: `claim-authorization:${j.claimId}`,
      state: j.state,
      execution: j.execution,
      reason: j.reasons.join(" "),
      sources: [...j.sourcePointers]
    });
  for (const j of u.restrictions)
    $.push({
      gate: 5,
      nodeUse: M,
      predicate: j.id,
      state: j.state,
      execution: "executed",
      reason: j.reason,
      sources: [...j.sources]
    });
  $.push({
    gate: 5,
    nodeUse: M,
    predicate: "authority",
    state: u.state,
    execution: "executed",
    reason: u.reason,
    sources: w ? [...w.chain] : []
  });
  for (const j of u.routes) {
    $.push(j.execution === "not_run" ? {
      gate: 5,
      nodeUse: M,
      predicate: `route:${j.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: M,
      predicate: `route:${j.id}`,
      state: j.state,
      execution: "executed",
      reason: `Route ${j.id} is ${j.state}.`,
      sources: [...j.chain]
    });
    for (const P of j.bases)
      $.push({
        gate: 5,
        nodeUse: M,
        predicate: `route:${j.id}:${P.id}`,
        state: P.state,
        execution: "executed",
        reason: P.reason,
        sources: [...P.sources]
      });
  }
  for (const j of f.bases)
    $.push({
      gate: 6,
      nodeUse: M,
      predicate: `support:${j.id}`,
      state: j.state,
      execution: "executed",
      reason: j.reason,
      sources: [...j.sources]
    });
  for (const j of d)
    $.push({
      gate: 6,
      nodeUse: M,
      predicate: j.obligationId,
      state: j.state,
      execution: j.execution,
      reason: j.reasons.join(" "),
      sources: []
    });
  l.requested && $.push({
    gate: 6,
    nodeUse: M,
    predicate: `conformity:${l.requirementId}`,
    state: l.state,
    execution: l.execution,
    reason: l.reasons.join(" "),
    sources: []
  });
  const E = Bi({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: m,
    authorization: y,
    support: d,
    conformity: l,
    decision: A,
    trace: $,
    resources: C,
    limitations: [
      "Verification failures of credentials outside the selected route and support chains are reported but do not decide the request."
    ]
  });
  return Object.freeze({ result: E, artifacts: Object.freeze(s) });
}
const qs = "https://vc4qi.example/bindings/cal/1", om = "https://vc4qi.example/contexts/cal/1", Rs = "https://vc4qi.example/bindings/cal/1#", Ft = "https://vc4qi.example/schemas/cal/1/", cm = Object.freeze({
  name: "calibration v1",
  schemas: Object.freeze({
    CalAccreditation: `${Ft}accreditation.json`,
    CalOperationalScope: `${Ft}operational-scope.json`,
    CalLegalMandate: `${Ft}legal-mandate.json`,
    CalCertificate: `${Ft}certificate.json`,
    CalTestReport: `${Ft}test-report.json`,
    BitstringStatusListCredential: `${Ft}status-list.json`
  }),
  contexts: (e) => e === "BitstringStatusListCredential" ? [Wt] : [Wt, om]
}), je = (e) => e !== null && typeof e == "object" && !Array.isArray(e), ze = (e) => Array.isArray(e) ? e : [], se = (e) => String(e).split(/[#/]/).pop(), dm = Object.freeze({ Pa: 0, kPa: 3, MPa: 6 });
function Ke(e, t) {
  const n = er(e), i = typeof t == "string" ? dm[t] : void 0;
  if (!(n === void 0 || i === void 0))
    return n.scale >= i ? { n: n.n, scale: n.scale - i } : { n: n.n * 10n ** BigInt(i - n.scale), scale: 0 };
}
const Ae = (e) => hn({ n: e.n, scale: e.scale + 3 });
function Ed(e, t) {
  const n = [t];
  if (!je(e) || typeof e.id != "string" || typeof e.quantityKindIri != "string")
    return { state: "not_established", reason: "The selected measurement group has no identifier or quantity kind.", sources: n };
  const i = [];
  for (const [r, a] of ze(e.results).entries()) {
    const s = je(a) ? a : {}, o = er(s.coverageFactor);
    if (o === void 0 || Re(o, { n: 2n, scale: 0 }) !== 0)
      return { state: "not_established", reason: `Result ${r}: coverage factor ${String(s.coverageFactor)} is not the binding's k = 2.`, sources: n };
    const p = Ke(s.value, s.unit), m = Ke(s.expandedUncertainty, s.unit);
    if (p === void 0 || m === void 0)
      return { state: "not_established", reason: `Result ${r}: unit ${String(s.unit)} or a number has no supported mapping (Pa, kPa, MPa).`, sources: n };
    i.push({ value: p, uncertainty: m });
  }
  if (i.length === 0) return { state: "not_established", reason: "The measurement group has no results.", sources: n };
  const c = ze(e.methodIris).filter((r) => typeof r == "string");
  return {
    state: "established",
    reason: `Mapped ${se(e.id)}: ${se(e.quantityKindIri)}, ${i.length} result(s) in Pa, methods [${c.map(se).join(", ")}].`,
    sources: n,
    group: { id: e.id, quantityKindIri: e.quantityKindIri, methodIris: c, results: i }
  };
}
function kd(e, t, n) {
  const i = ["/credentialSubject/scope"];
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: i };
  const c = t.map((s) => {
    const o = String(s.id), p = je(s.range) ? s.range : {}, m = Ke(p.from, p.unit), g = Ke(p.to, p.unit);
    if (m === void 0 || g === void 0) return { id: o, state: "not_established", reason: `${se(o)}: unsupported or malformed range.` };
    if (Re(m, g) > 0) return { id: o, state: "contradicted", reason: `${se(o)}: range is reversed.` };
    const u = je(s.cmcFloor) ? s.cmcFloor : void 0, f = u === void 0 ? void 0 : Ke(u.value, u.unit);
    if (u !== void 0 && f === void 0) return { id: o, state: "not_established", reason: `${se(o)}: unsupported CMC floor.` };
    const w = [];
    s.quantityKindIri !== e.quantityKindIri && w.push(`quantity kind ${se(e.quantityKindIri)} ≠ ${se(s.quantityKindIri)}`);
    const x = ze(s.allowedMethodIris).filter((S) => typeof S == "string"), b = e.methodIris.filter((S) => !x.includes(S));
    return b.length > 0 && w.push(`method ${b.map(se).join(", ")} is not allowed`), e.results.forEach((S, v) => {
      (Re(S.value, m) < 0 || Re(S.value, g) > 0) && w.push(`result ${v} ${Ae(S.value)} kPa is outside ${Ae(m)}–${Ae(g)} kPa`), n && f !== void 0 && Re(S.uncertainty, f) < 0 && w.push(`result ${v} U = ${Ae(S.uncertainty)} kPa is below the admitted CMC ${Ae(f)} kPa`);
    }), w.length > 0 ? { id: o, state: "contradicted", reason: `${se(o)}: ${w.join("; ")}` } : e.methodIris.length === 0 && x.length > 0 ? {
      id: o,
      state: "not_established",
      reason: `${se(o)} restricts methods to [${x.map(se).join(", ")}], but the group names no governed method.`
    } : {
      id: o,
      state: "established",
      reason: `${se(o)} covers ${se(e.id)}: ${se(e.quantityKindIri)}, methods [${e.methodIris.map(se).join(", ")}], ${e.results.length} result(s) within ${Ae(m)}–${Ae(g)} kPa${n && f !== void 0 ? ` and not below the CMC ${Ae(f)} kPa` : ""}`
    };
  }), r = bn(c.map((s) => s.state)), a = c.find((s) => s.state === "established");
  return a ? { state: r, reason: a.reason, sources: i, record: a.id } : { state: r, reason: `No single scope record covers the group (${c.map((s) => s.reason).join(" | ")}).`, sources: i };
}
function lm(e, t, n) {
  const i = ["/credentialSubject/scope"];
  if (e.length === 0) return { state: "not_established", reason: "The operational scope has no records.", sources: i };
  const c = e.map((a) => {
    const s = je(a.range) ? a.range : {}, o = Ke(s.from, s.unit), p = Ke(s.to, s.unit), m = je(a.cmcFloor) ? a.cmcFloor : void 0, g = m === void 0 ? void 0 : Ke(m.value, m.unit);
    if (o === void 0 || p === void 0 || m !== void 0 && g === void 0)
      return { state: "not_established", reason: `${se(a.id)}: unsupported or malformed range or CMC floor.` };
    const u = ze(a.allowedMethodIris), f = t.map((x) => {
      const b = je(x.range) ? x.range : {}, S = Ke(b.from, b.unit), v = Ke(b.to, b.unit), y = je(x.cmcFloor) ? x.cmcFloor : void 0, d = y === void 0 ? void 0 : Ke(y.value, y.unit);
      if (S === void 0 || v === void 0 || y !== void 0 && d === void 0)
        return { state: "not_established", reason: `${se(x.id)}: unsupported or malformed range or CMC floor.` };
      const l = [];
      a.quantityKindIri !== x.quantityKindIri && l.push(`quantity kind ${se(a.quantityKindIri)} ≠ ${se(x.quantityKindIri)}`);
      const h = ze(x.allowedMethodIris), I = u.filter((A) => !h.includes(A));
      return u.length === 0 && h.length > 0 && l.push("the parent restricts methods, the child does not"), I.length > 0 && l.push(`method ${I.map(se).join(", ")} is not in ${se(x.id)}`), (Re(o, S) < 0 || Re(p, v) > 0) && l.push(`range ${Ae(o)}–${Ae(p)} kPa is not within ${Ae(S)}–${Ae(v)} kPa`), n && d !== void 0 && (g === void 0 ? l.push(`it states no CMC floor, but ${se(x.id)} admits only ${Ae(d)} kPa`) : Re(g, d) < 0 && l.push(`CMC ${Ae(g)} kPa is below the admitted ${Ae(d)} kPa`)), l.length > 0 ? { state: "contradicted", reason: `${se(a.id)} widens ${se(x.id)}: ${l.join("; ")}` } : { state: "established", reason: `${se(a.id)} lies within ${se(x.id)}` };
    });
    if (f.length === 0) return { state: "not_established", reason: "The parent grant has no records." };
    const w = bn(f.map((x) => x.state));
    return w === "established" ? f.find((x) => x.state === "established") : { state: w, reason: f.map((x) => x.reason).join(" | ") };
  }), r = Ks(c.map((a) => a.state));
  return { state: r, reason: `${r === "established" ? "Bounded projection holds" : "Bounded projection fails"}: ${c.map((a) => a.reason).join("; ")}.`, sources: i };
}
const Mt = (e) => je(e.credentialSubject) ? e.credentialSubject : {}, Js = (e, t, n, i, c) => st(t, `${Rs}${n}`) ? { id: e, state: "established", reason: `${c} permits ${i}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: e, state: "contradicted", reason: `${c} does not permit ${i}.`, sources: ["/credentialSubject/permittedActivity"] }, um = Object.freeze({
  CalCertificate: { activity: "issueCalibrationCertificate", what: "issuing calibration certificates", purpose: "accredit-calibration-laboratories" },
  CalTestReport: { activity: "issueTestReport", what: "issuing test reports", purpose: "accredit-testing-laboratories" }
}), Gi = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0;
function pm(e, t, n) {
  const i = e.document, c = [], r = [e.uri], a = um[Gi(i) ?? ""];
  if (a === void 0)
    return ue("direct-accreditation", [{
      id: "target-type",
      state: "not_established",
      reason: `No accreditation activity is installed for ${String(Gi(i))}.`,
      sources: ["/type"]
    }], r);
  const s = We("authorizing-reference", i, "CalAccreditation", t, [e.uri], "CalAuthorizationPolicy");
  if (c.push(s.basis), !s.node) return ue("direct-accreditation", c, r);
  const o = s.node.document;
  return r.push(s.node.uri), c.push(ct("principal-binding", o, i.issuer, "Accreditation CA")), c.push(Js("activity-permission", o, a.activity, a.what, "CA")), c.push($t("trust-anchor", o, a.purpose, n)), c.push(_t(i, [["CA", o]])), ue("direct-accreditation", c, r, s.node.uri);
}
function fm(e, t, n) {
  const i = e.document, c = [], r = [e.uri], a = We("authorizing-reference", i, "CalOperationalScope", t, [e.uri], "CalAuthorizationPolicy");
  if (c.push(a.basis), !a.node) return ue("operational-scope", c, r);
  const s = a.node.document;
  r.push(a.node.uri), c.push(ct("principal-binding", s, i.issuer, "Operational scope O")), c.push(s.issuer === Mt(s).id ? { id: "self-maintained-scope", state: "established", reason: "O is issued by its own grantee.", sources: ["/issuer"] } : { id: "self-maintained-scope", state: "contradicted", reason: "O is not issued by its own grantee.", sources: ["/issuer"] }), c.push(Js("activity-permission", s, "issueCalibrationCertificate", "issuing calibration certificates", "O"));
  const o = We("maintenance-grant", s, "CalAccreditation", t, [e.uri, a.node.uri], "CalAuthorizationPolicy");
  if (c.push(o.basis), !o.node) return ue("operational-scope", c, r);
  const p = o.node.document;
  r.push(o.node.uri), c.push(ct("accreditation-grantee", p, s.issuer, "Accreditation CA")), c.push(st(p, `${Rs}maintainCalibrationScope`) && st(p, `${Rs}issueCalibrationCertificate`) ? { id: "projection-permission", state: "established", reason: "CA permits maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] } : { id: "projection-permission", state: "contradicted", reason: "CA does not permit maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] });
  const m = lm(
    ze(Mt(s).scope).filter(je),
    ze(Mt(p).scope).filter(je),
    n.bindingRules.applyCmcFloor === !0
  );
  return c.push({ id: "bounded-projection", state: m.state, reason: m.reason, sources: m.sources }), c.push($t("trust-anchor", p, "accredit-calibration-laboratories", n)), c.push(_t(i, [["O", s], ["CA", p]])), ue("operational-scope", c, r, a.node.uri);
}
function hm(e, t, n) {
  const i = e.document, c = [], r = [e.uri], a = We("authorizing-reference", i, "CalLegalMandate", t, [e.uri], "CalAuthorizationPolicy");
  if (c.push(a.basis), !a.node) return ue("statutory-mandate", c, r);
  const s = a.node.document;
  return r.push(a.node.uri), c.push(ct("principal-binding", s, i.issuer, "Mandate M")), c.push(Js("activity-permission", s, "issueCalibrationCertificate", "issuing calibration certificates", "M")), c.push($t("trust-anchor", s, "designate-national-metrology-institutes", n)), c.push(_t(i, [["M", s]])), ue("statutory-mandate", c, r, a.node.uri);
}
const Md = Object.freeze({
  "direct-accreditation": pm,
  "operational-scope": fm,
  "statutory-mandate": hm
}), Ks = (e) => e.length === 0 ? "not_established" : ve(e);
function mm(e, t, n, i) {
  const c = n.authority.certificateRoutes, r = c.slice(0, n.authority.maxRoutes).map((g) => {
    const u = Md[g];
    return u === void 0 ? ue(g, [{ id: "installed-evaluator", state: "not_established", reason: `Route ${g} has no installed evaluator.`, sources: [] }], [e.uri]) : u(e, t, n);
  }), a = An([], r, c.slice(n.authority.maxRoutes)), s = ze(Mt(e.document).measurementGroups);
  if (s.length === 0)
    return { state: "not_established", reason: "The certificate has no measurement groups.", chain: [e.uri], bases: [] };
  const o = [];
  let p = [e.uri];
  s.forEach((g, u) => {
    const f = `/credentialSubject/measurementGroups/${u}`, w = Ed(g, f);
    if (w.group === void 0) {
      o.push({ id: `group-${u}`, state: w.state, reason: `Group ${u}: ${w.reason}`, sources: [f] });
      return;
    }
    const x = w.group, b = tr(a, (y) => {
      const d = ze(Mt(t(y.scope)?.document ?? {}).scope).filter(je), l = kd(x, d, i);
      return { id: "claim-coverage", state: l.state, reason: l.reason, sources: [y.scope, ...l.sources] };
    }), S = b.routes.find((y) => y.state === "established");
    S && (p = S.chain);
    const v = S ? `through ${S.id}` : b.routes.map((y) => `${y.id} ${y.state}: ${y.bases.filter((d) => d.state !== "established").map((d) => d.reason).join(" ")}`).join(" | ");
    o.push({ id: `group-${u}`, state: b.state, reason: `Group ${u} (${se(x.id)}) is ${b.state} ${v}`.trim(), sources: [f] });
  });
  const m = Ks(o.map((g) => g.state));
  return { state: m, reason: `The certificate's own authority is ${m}.`, chain: p, bases: o };
}
function ym(e, t, n, i) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const c = e.document, r = (h) => ({ state: h.state, reason: h.reason, bases: [h], chain: [e.uri] }), a = ze(c.evidence).filter(je).filter((h) => h.type === "CalCalibrationReference").map((h) => String(h.id));
  if (a.length === 0) return r({ id: "calibration-reference", state: "not_established", reason: "The report cites no calibration.", sources: ["/evidence"] });
  if (a.length > 1)
    return r({ id: "calibration-reference", state: "not_established", reason: "Several calibration references; this binding has no composition for them.", sources: ["/evidence"] });
  const s = a[0], o = t(s);
  if (o === void 0) return r({ id: "calibration-reference", state: "not_established", reason: `Calibration ${s} is unavailable.`, sources: ["/evidence", s] });
  if (o.usable !== "established" || o.document === void 0)
    return r({
      id: "calibration-reference",
      state: o.usable === "contradicted" ? "contradicted" : "not_established",
      reason: `Calibration ${s} is not usable: ${o.reason}`,
      sources: ["/evidence", s]
    });
  const p = o.document;
  if (Gi(p) !== "CalCertificate")
    return r({ id: "calibration-reference", state: "contradicted", reason: `${s} is a ${String(Gi(p))}, not a calibration certificate.`, sources: ["/evidence", s] });
  const m = Mt(c), g = Mt(p), u = [{ id: "calibration-reference", state: "established", reason: `Cites calibration ${s}.`, sources: ["/evidence", s] }];
  u.push(typeof m.instrumentIri != "string" ? { id: "same-instrument", state: "not_established", reason: "The report names no instrument.", sources: ["/credentialSubject/instrumentIri"] } : g.id === m.instrumentIri ? { id: "same-instrument", state: "established", reason: `The calibration concerns instrument ${String(m.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] } : { id: "same-instrument", state: "contradicted", reason: `The calibration concerns ${String(g.id)}, not instrument ${String(m.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] });
  const f = ze(m.measurementGroups).filter(je).map((h) => h.quantityKindIri), w = ze(g.measurementGroups).filter(je).map((h) => h.quantityKindIri), x = f.filter((h) => !w.includes(h));
  u.push(f.length > 0 && x.length === 0 ? { id: "same-quantity", state: "established", reason: `The calibration covers ${[...new Set(f.map(se))].join(", ")}.`, sources: ["/credentialSubject/measurementGroups"] } : {
    id: "same-quantity",
    state: f.length === 0 ? "not_established" : "contradicted",
    reason: f.length === 0 ? "The report has no measurement groups." : `The calibration does not cover ${x.map(se).join(", ")}.`,
    sources: ["/credentialSubject/measurementGroups"]
  });
  const b = Date.parse(String(m.activityTime)), S = Date.parse(String(g.activityTime)), v = Date.parse(String(p.validFrom)), y = Date.parse(String(p.validUntil));
  !Number.isFinite(b) || !Number.isFinite(S) ? u.push({ id: "calibration-precedes-use", state: "not_established", reason: "An activity time is missing.", sources: ["/credentialSubject/activityTime"] }) : (u.push(S <= b ? { id: "calibration-precedes-use", state: "established", reason: `Calibrated at ${String(g.activityTime)}, before the test at ${String(m.activityTime)}.`, sources: ["/credentialSubject/activityTime"] } : { id: "calibration-precedes-use", state: "contradicted", reason: `Calibrated at ${String(g.activityTime)}, after the test at ${String(m.activityTime)}.`, sources: ["/credentialSubject/activityTime"] }), u.push(Number.isFinite(v) && Number.isFinite(y) && v <= b && b <= y ? { id: "calibration-valid-at-use", state: "established", reason: "The calibration certificate was valid at the test.", sources: ["/validFrom", "/validUntil"] } : { id: "calibration-valid-at-use", state: "contradicted", reason: `The calibration certificate (valid ${String(p.validFrom)} to ${String(p.validUntil)}) was not valid at the test at ${String(m.activityTime)}.`, sources: ["/validFrom", "/validUntil"] }));
  const d = mm(o, t, n, i);
  u.push({ id: "calibration-authority", state: d.state, reason: d.reason, sources: [s] }, ...d.bases.map((h) => ({ ...h, id: `calibration-authority:${h.id}` })));
  const l = Ks(u.map((h) => h.state));
  return {
    state: l,
    reason: l === "established" ? "The instrument calibration is applicable and independently authorized." : l === "contradicted" ? "The instrument calibration is contradicted." : "The instrument calibration is not established.",
    bases: u,
    chain: [e.uri, ...d.chain]
  };
}
const gm = /^\/credentialSubject\/measurementGroups\/(0|[1-9][0-9]*)$/;
function vm(e) {
  const t = e.bindingRules.applyCmcFloor;
  if (typeof t != "boolean")
    throw new Error(`Profile ${e.id}@${e.version} must state bindingRules.applyCmcFloor for ${qs}.`);
  return t;
}
async function bm(e, t, n, i) {
  if (n.id !== qs || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${qs}@${n.version}.`);
  const c = vm(i), r = Fs(e, n, i);
  if (r !== void 0) return Object.freeze({ result: Bs(e, r), artifacts: Object.freeze([]) });
  const a = await Zs(e, t, n, i, cm), { target: s, artifacts: o, facts: p, verificationOf: m, artifactVerification: g } = a, u = (z) => p.get(z), f = p.get(e.targetId), w = i.authority.certificateRoutes, x = f.document === void 0 ? [] : w.slice(0, i.authority.maxRoutes).map((z) => {
    const _ = Md[z];
    return _ === void 0 ? {
      id: z,
      state: "not_established",
      execution: "executed",
      chain: [f.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${z} has no installed evaluator.`, sources: [] }]
    } : _(f, u, i);
  }), b = f.document === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : An([], x, w.slice(i.authority.maxRoutes)), S = b.routes.find((z) => z.state === "established"), v = (z) => {
    const _ = p.get(z)?.document?.credentialSubject;
    return Array.isArray(_?.scope) ? _.scope : [];
  }, y = f.document, d = e.selectedClaims.map((z) => {
    const _ = /* @__PURE__ */ new Map();
    if (y === void 0 || !gm.test(z.sourcePointer) || en(y, z.sourcePointer) === void 0) {
      const O = y === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${z.sourcePointer} is not a measurement group in the usable target.`;
      return { claim: z, mapping: void 0, coverage: _, result: { claimId: z.id, routeWitnessIds: [], ...oe("not_established", [O]) } };
    }
    const Z = Ed(en(y, z.sourcePointer), z.sourcePointer);
    if (Z.group === void 0)
      return { claim: z, mapping: Z, coverage: _, result: {
        claimId: z.id,
        routeWitnessIds: [],
        ...oe(Z.state, [`Gate 4: ${Z.reason}`], [z.sourcePointer])
      } };
    const L = Z.group, F = tr(b, (O) => {
      const V = kd(L, v(O.scope), c), N = [O.scope, ...V.sources];
      return _.set(O.id, { ...V, sources: N }), { id: "claim-coverage", state: V.state, reason: V.reason, sources: N };
    }), k = F.routes.find((O) => O.state === "established");
    return { claim: z, mapping: Z, coverage: _, result: {
      claimId: z.id,
      routeWitnessIds: F.state === "established" && k ? [`route:${k.id}`, ...k.chain, `record:${_.get(k.id)?.record}`] : [],
      ...oe(F.state, [
        F.reason,
        ...k ? [_.get(k.id).reason] : [..._].map(([O, V]) => `${O}: ${V.reason}`)
      ], [z.sourcePointer])
    } };
  }), l = d.map((z) => z.result), I = Array.isArray(y?.type) && y.type[1] === "CalTestReport" ? ym(f, u, i, c) : void 0, A = I === void 0 ? [] : [{
    obligationId: "cal-v1:instrument-calibration",
    witnessIds: I.state === "established" ? [...I.chain] : [],
    ...oe(I.state, [I.reason], ["/evidence"])
  }], $ = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...oe("not_established", ["The calibration v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, C = /* @__PURE__ */ new Set([
    e.targetId,
    ...S?.chain ?? [],
    ...I?.state === "established" ? I.chain : []
  ]), M = [
    ...o.filter((z) => C.has(z.artifactId)).flatMap(m).map((z) => z.state),
    ...l.map((z) => z.state),
    ...A.map((z) => z.state),
    ...$.requested ? [$.state] : []
  ], E = [...a.trace], j = Yi(s.artifactId, s.digestSRI, "target", e);
  for (const { claim: z, mapping: _, coverage: Z } of d) {
    _ && E.push({
      gate: 4,
      nodeUse: j,
      predicate: `claim-mapping:${z.id}`,
      state: _.state,
      execution: "executed",
      reason: _.reason,
      sources: [..._.sources]
    });
    for (const [L, F] of Z)
      E.push({
        gate: 5,
        nodeUse: j,
        predicate: `claim-coverage:${z.id}:${L}`,
        state: F.state,
        execution: "executed",
        reason: F.reason,
        sources: [...F.sources]
      });
  }
  for (const z of l)
    E.push({
      gate: 5,
      nodeUse: j,
      predicate: `claim-authorization:${z.claimId}`,
      state: z.state,
      execution: z.execution,
      reason: z.reasons.join(" "),
      sources: [...z.sourcePointers]
    });
  E.push({
    gate: 5,
    nodeUse: j,
    predicate: "authority",
    state: b.state,
    execution: "executed",
    reason: b.reason,
    sources: S ? [...S.chain] : []
  });
  for (const z of b.routes) {
    E.push(z.execution === "not_run" ? {
      gate: 5,
      nodeUse: j,
      predicate: `route:${z.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: j,
      predicate: `route:${z.id}`,
      state: z.state,
      execution: "executed",
      reason: `Route ${z.id} is ${z.state}.`,
      sources: [...z.chain]
    });
    for (const _ of z.bases)
      E.push({
        gate: 5,
        nodeUse: j,
        predicate: `route:${z.id}:${_.id}`,
        state: _.state,
        execution: "executed",
        reason: _.reason,
        sources: [..._.sources]
      });
  }
  for (const z of I?.bases ?? [])
    E.push({
      gate: 6,
      nodeUse: j,
      predicate: `support:${z.id}`,
      state: z.state,
      execution: "executed",
      reason: z.reason,
      sources: [...z.sources]
    });
  for (const z of A)
    E.push({
      gate: 6,
      nodeUse: j,
      predicate: z.obligationId,
      state: z.state,
      execution: z.execution,
      reason: z.reasons.join(" "),
      sources: []
    });
  $.requested && E.push({
    gate: 6,
    nodeUse: j,
    predicate: `conformity:${$.requirementId}`,
    state: $.state,
    execution: $.execution,
    reason: $.reasons.join(" "),
    sources: []
  });
  const P = Bi({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: g,
    authorization: l,
    support: A,
    conformity: $,
    decision: Ts(M),
    trace: E,
    resources: a.resources,
    limitations: [
      "Each selected measurement group is a separate required claim; the decision is their conjunction.",
      "Verification failures of credentials outside the selected route and support chains are reported but do not decide the request.",
      "The calibration v1 binding carries a JSON-LD simplification of DCC results, not native DCC XML.",
      "Fixture grants are fictional: an accreditation or statutory mandate here has no legal effect."
    ]
  });
  return Object.freeze({ result: P, artifacts: Object.freeze([...o]) });
}
const Nc = "https://vc4qi.example/bindings/gs/1", wm = "https://vc4qi.example/contexts/gs/1", nr = "https://vc4qi.example/bindings/gs/1#", It = "https://vc4qi.example/schemas/gs/1/", xm = Object.freeze({
  name: "GS certification v1",
  schemas: Object.freeze({
    GsAccreditation: `${It}accreditation.json`,
    GsSchemeAuthorization: `${It}scheme-authorization.json`,
    GsCertificate: `${It}certificate.json`,
    GsMarkCredential: `${It}mark-credential.json`,
    ProductPassport: `${It}product-passport.json`,
    GsTestReport: `${It}test-report.json`,
    GsInspectionReport: `${It}inspection-report.json`,
    BitstringStatusListCredential: `${It}status-list.json`
  }),
  contexts: (e) => e === "BitstringStatusListCredential" ? [Wt] : [Wt, wm]
}), at = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Oe = (e) => Array.isArray(e) ? e : [], X = (e) => String(e).split(/[#/]/).pop(), ot = (e) => at(e.credentialSubject) ? e.credentialSubject : {};
function Od(e, t) {
  const n = [t];
  if (!at(e) || typeof e.productCategoryIri != "string")
    return { state: "not_established", reason: "The selected certification names no product category.", sources: n };
  const i = Oe(e.standardIris).filter((c) => typeof c == "string");
  return {
    state: "established",
    reason: `Mapped certification of ${X(e.productCategoryIri)} against [${i.map(X).join(", ")}].`,
    sources: n,
    certification: { productCategoryIri: e.productCategoryIri, standardIris: i }
  };
}
function Ld(e, t, n) {
  const i = ["/credentialSubject/scope"], { productCategoryIri: c, standardIris: r } = e, a = t.map((u) => {
    const f = String(u.id), w = Oe(u.standardIris);
    if (u.productCategoryIri !== c)
      return { id: f, state: "contradicted", reason: `${X(f)}: category ${X(c)} ≠ ${X(u.productCategoryIri)}` };
    const x = r.filter((b) => !w.includes(b));
    return x.length > 0 ? { id: f, state: "contradicted", reason: `${X(f)}: standard ${x.map(X).join(", ")} is not in the accredited scope` } : r.length === 0 && w.length > 0 ? { id: f, state: "not_established", reason: `${X(f)} restricts standards, but the certification names none` } : { id: f, state: "established", reason: `${X(f)} covers ${X(c)} against [${r.map(X).join(", ")}]` };
  }), s = n.map((u) => {
    const f = String(u.id);
    return u.productCategoryIri === c ? { id: f, state: "established", reason: `${X(f)} permits the GS mark for ${X(c)}` } : { id: f, state: "contradicted", reason: `${X(f)}: category ${X(c)} ≠ ${X(u.productCategoryIri)}` };
  }), o = (u, f) => {
    if (f.length === 0) return { state: "not_established", reason: `The ${u} scope has no records.`, record: void 0 };
    const w = f.find((x) => x.state === "established");
    return w ? { state: "established", reason: w.reason, record: w.id } : { state: bn(f.map((x) => x.state)), reason: `No single ${u} record covers it (${f.map((x) => x.reason).join(" | ")})`, record: void 0 };
  }, p = o("competence", a), m = o("scheme", s), g = ve([p.state, m.state]);
  return {
    state: g,
    reason: `Competence: ${p.reason}. Scheme: ${m.reason}.`,
    sources: i,
    ...g === "established" ? { records: [p.record, m.record] } : {}
  };
}
function Nd(e, t, n) {
  const i = e.document, c = [], r = [e.uri], a = (p, m, g, u, f, w) => {
    const x = We(`${p}-reference`, i, m, t, [e.uri], "GsAuthorizationPolicy");
    if (c.push(x.basis), !x.node) return;
    const b = x.node.document;
    return c.push(ct(`${p}-grantee`, b, i.issuer, w)), c.push(st(b, `${nr}${g}`) ? { id: `${p}-permission`, state: "established", reason: `${w} permits ${u}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: `${p}-permission`, state: "contradicted", reason: `${w} does not permit ${u}.`, sources: ["/credentialSubject/permittedActivity"] }), c.push($t(`${p}-anchor`, b, f, n)), x.node;
  }, s = a("competence", "GsAccreditation", "certifyProducts", "certifying products", "accredit-certification-bodies", "Accreditation GS-A"), o = a("scheme", "GsSchemeAuthorization", "awardGsMark", "awarding the GS mark", "authorize-gs-certification", "Scheme authorization GS-S");
  return !s || !o ? ue("competence-and-scheme-permission", c, r) : (r.push(s.uri, o.uri), c.push(_t(i, [["GS-A", s.document], ["GS-S", o.document]])), ue("competence-and-scheme-permission", c, r, s.uri));
}
function Dd(e, t) {
  const n = (i) => i === void 0 ? [] : Oe(ot(t(i)?.document ?? {}).scope).filter(at);
  return { competence: n(e.scope), scheme: n(e.chain.length === 3 ? e.chain[2] : void 0) };
}
const Sm = `${nr}GsMark`;
function zd(e, t, n) {
  const i = [t];
  if (!at(e) || typeof e.markIri != "string" || typeof e.productModelIri != "string")
    return { state: "not_established", reason: "The selected marking names no mark or product model.", sources: i };
  if (e.markIri !== Sm)
    return { state: "not_established", reason: `Mark ${X(e.markIri)} has no interpretation in this binding.`, sources: i };
  const c = [t, "/credentialSubject/productModelIri"];
  return typeof n != "string" ? { state: "not_established", reason: "The credential names no product model.", sources: c } : n !== e.productModelIri ? {
    state: "contradicted",
    reason: `The marking claims the mark for model ${X(e.productModelIri)}, but the credential is for model ${X(n)}.`,
    sources: c
  } : {
    state: "established",
    reason: `Mapped a GS-mark claim for model ${X(e.productModelIri)}.`,
    sources: i,
    marking: { markIri: e.markIri, productModelIri: e.productModelIri }
  };
}
function Vd(e, t) {
  const n = ["/credentialSubject/id"];
  if (t === void 0) return { state: "not_established", reason: "No certificate was reached.", sources: n };
  const i = ot(t).id;
  return i === e.productModelIri ? { state: "established", reason: `${X(t.id)} certifies model ${X(i)}.`, sources: n, records: [String(t.id)] } : { state: "contradicted", reason: `${X(t.id)} certifies ${X(i)}, not model ${X(e.productModelIri)}.`, sources: n };
}
function Ud(e, t, n) {
  const i = e.document, c = [], r = [e.uri], a = We("certificate-reference", i, "GsCertificate", t, [e.uri], "GsAuthorizationPolicy");
  if (c.push(a.basis), !a.node) return ue("gs-certified-product", c, r);
  const s = a.node.document;
  r.push(a.node.uri);
  const o = ot(s).manufacturerIri;
  c.push(typeof o != "string" ? { id: "manufacturer-binding", state: "not_established", reason: "The certificate names no manufacturer.", sources: ["/credentialSubject/manufacturerIri"] } : o === i.issuer ? { id: "manufacturer-binding", state: "established", reason: `The certificate names the passport issuer ${o} as manufacturer.`, sources: ["/credentialSubject/manufacturerIri", "/issuer"] } : { id: "manufacturer-binding", state: "contradicted", reason: `The certificate names ${o}, not the passport issuer ${String(i.issuer)}.`, sources: ["/credentialSubject/manufacturerIri", "/issuer"] }), c.push({ ..._t(i, [["The certificate", s]]), id: "certificate-in-force" });
  const p = Nd(a.node, t, n);
  c.push(...p.bases.map((u) => ({ ...u, id: `certificate:${u.id}` })));
  const m = Od(ot(s).certification, "/credentialSubject/certification"), g = m.certification === void 0 ? { state: m.state, reason: m.reason } : (() => {
    const { competence: u, scheme: f } = Dd(p, t);
    return Ld(m.certification, u, f);
  })();
  return c.push({ id: "certificate:claim-coverage", state: g.state, reason: g.reason, sources: ["/credentialSubject/certification"] }), r.push(...p.chain.slice(1)), ue("gs-certified-product", c, r, a.node.uri);
}
const Im = `${nr}Pass`, Am = [
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
], Te = (e, t, n, i, c) => t === void 0 ? { id: e, state: "not_established", reason: i, sources: c } : { id: e, state: t ? "established" : "contradicted", reason: t ? n : i, sources: c };
function qm(e, t, n) {
  const i = e.document, c = ot(i), r = at(c.certification) ? c.certification : {};
  return Am.map(({ obligationId: a, reference: s, type: o, activity: p, purpose: m, what: g }) => {
    const u = [], f = (A) => {
      const $ = ve(u.map((M) => M.state)), C = u.find((M) => M.state === $ && $ !== "established");
      return {
        obligationId: a,
        state: $,
        bases: u,
        chain: A,
        reason: $ === "established" ? `The ${g} applies and is independently authorized.` : `The ${g}: ${C?.reason ?? "not established"}`
      };
    }, w = Oe(i.evidence).filter(at).filter((A) => A.type === s).map((A) => String(A.id));
    if (w.length !== 1)
      return u.push({
        id: "reference",
        state: "not_established",
        sources: ["/evidence"],
        reason: w.length === 0 ? `The certificate cites no ${g}.` : `The certificate cites several ${g}s; none is chosen.`
      }), f([]);
    const x = w[0], b = t(x);
    if (b === void 0 || b.usable !== "established" || b.document === void 0)
      return u.push({
        id: "reference",
        state: b?.usable === "contradicted" ? "contradicted" : "not_established",
        sources: ["/evidence", x],
        reason: b === void 0 ? `${X(x)} is unavailable.` : `${X(x)} is not usable: ${b.reason}`
      }), f([]);
    const S = b.document, v = ot(S), y = Oe(S.type);
    if (u.push(Te("reference", y.includes(o), `Cites ${g} ${X(x)}.`, `${X(x)} is not a ${o}.`, ["/evidence", x])), a === "type-examination") {
      u.push(Te(
        "same-model",
        v.productModelIri === c.id,
        `${X(x)} examined model ${X(c.id)}.`,
        `${X(x)} examined ${X(v.productModelIri)}, not model ${X(c.id)}.`,
        ["/credentialSubject/productModelIri"]
      ));
      const A = Oe(v.standardIris), $ = Oe(r.standardIris), C = $.filter((M) => !A.includes(M));
      u.push(Te(
        "covers-certification",
        v.productCategoryIri === r.productCategoryIri && C.length === 0,
        `${X(x)} covers ${X(r.productCategoryIri)} against [${$.map(X).join(", ")}].`,
        v.productCategoryIri !== r.productCategoryIri ? `${X(x)} examined ${X(v.productCategoryIri)}, not ${X(r.productCategoryIri)}.` : `${X(x)} did not examine ${C.map(X).join(", ")}.`,
        ["/credentialSubject/standardIris"]
      ));
    } else
      u.push(Te(
        "same-manufacturer",
        typeof v.manufacturerIri == "string" && typeof c.manufacturerIri == "string" ? v.manufacturerIri === c.manufacturerIri : void 0,
        `${X(x)} inspected the certificate's manufacturer.`,
        `${X(x)} inspected ${String(v.manufacturerIri)}, not the certificate's manufacturer ${String(c.manufacturerIri)}.`,
        ["/credentialSubject/manufacturerIri"]
      ));
    u.push(Te("outcome", v.outcomeIri === Im, `${X(x)} passed.`, `${X(x)} did not pass (${X(v.outcomeIri)}).`, ["/credentialSubject/outcomeIri"]));
    const d = Date.parse(String(v.activityTime)), l = Date.parse(String(c.activityTime));
    u.push(Te(
      "precedes-certification",
      Number.isFinite(d) && Number.isFinite(l) ? d <= l : void 0,
      `The ${g} (${String(v.activityTime)}) precedes the certification.`,
      Number.isFinite(d) && Number.isFinite(l) ? `The ${g} (${String(v.activityTime)}) follows the certification (${String(c.activityTime)}).` : "An activity time is missing.",
      ["/credentialSubject/activityTime"]
    ));
    const h = We("accreditation-reference", S, "GsAccreditation", t, [e.uri, x], "GsAuthorizationPolicy");
    if (u.push(h.basis), !h.node) return f([x]);
    const I = h.node.document;
    if (u.push(ct("accreditation-grantee", I, S.issuer, `Accreditation ${X(h.node.uri)}`)), u.push(Te(
      "accreditation-permission",
      st(I, `${nr}${p}`),
      `${X(h.node.uri)} permits ${p}.`,
      `${X(h.node.uri)} does not permit ${p}.`,
      ["/credentialSubject/permittedActivity"]
    )), u.push($t("accreditation-anchor", I, m, n)), u.push({ ..._t(S, [[X(h.node.uri), I]]), id: "accreditation-in-force" }), a === "type-examination") {
      const A = Oe(v.standardIris), C = Oe(ot(I).scope).filter(at).find((M) => M.productCategoryIri === v.productCategoryIri && A.every((E) => Oe(M.standardIris).includes(E)));
      u.push(Te(
        "accreditation-scope",
        C !== void 0,
        `${X(C?.id)} covers the examination.`,
        `No record of ${X(h.node.uri)} covers ${X(v.productCategoryIri)} against [${A.map(X).join(", ")}].`,
        ["/credentialSubject/scope"]
      ));
    }
    return f([x, h.node.uri]);
  });
}
function Rm(e, t, n) {
  const i = e.document, c = ot(i).economicOperatorIri, r = ["/credentialSubject/economicOperatorIri", "/issuer"];
  return ue(
    "responsible-economic-operator",
    [typeof c != "string" ? { id: "operator-is-issuer", state: "not_established", reason: "The passport names no responsible economic operator.", sources: r } : Te(
      "operator-is-issuer",
      c === i.issuer,
      `The passport is issued by its responsible economic operator ${c}.`,
      `The passport names ${c} as its responsible economic operator but is issued by ${String(i.issuer)}.`,
      r
    )],
    // The operator declares its own passport, so the passport is the scope of its entries.
    [e.uri],
    e.uri
  );
}
function jm(e, t, n) {
  const i = e.document, c = ot(i), r = at(c.complianceInformation) ? c.complianceInformation : {}, a = at(r.gsMark) ? r.gsMark : {}, s = [], o = (v, y) => {
    const d = ve(s.map((h) => h.state)), l = s.find((h) => h.state === d && d !== "established");
    return { ...y === void 0 ? {} : { certificateUri: y }, support: {
      obligationId: "gs-mark-credential",
      state: d,
      bases: s,
      chain: v,
      reason: d === "established" ? "The GS-mark credential applies to this unit and holds its own route." : `The GS-mark credential: ${l?.reason ?? "not established"}`
    } };
  }, p = Oe(i.evidence).filter(at).filter((v) => v.type === "GsMarkCredentialReference").map((v) => String(v.id));
  if (p.length !== 1)
    return s.push({
      id: "reference",
      state: "not_established",
      sources: ["/evidence"],
      reason: p.length === 0 ? "The passport cites no GS-mark credential." : "The passport cites several GS-mark credentials; none is chosen."
    }), o([]);
  const m = p[0], g = t(m);
  if (g === void 0 || g.usable !== "established" || g.document === void 0)
    return s.push({
      id: "reference",
      state: g?.usable === "contradicted" ? "contradicted" : "not_established",
      sources: ["/evidence", m],
      reason: g === void 0 ? `${X(m)} is unavailable.` : `${X(m)} is not usable: ${g.reason}`
    }), o([]);
  const u = g.document, f = ot(u);
  s.push(Te(
    "reference",
    Oe(u.type).includes("GsMarkCredential"),
    `Cites GS-mark credential ${X(m)}.`,
    `${X(m)} is not a GsMarkCredential.`,
    ["/evidence", m]
  )), s.push(Te(
    "same-unit",
    f.id === c.id,
    `${X(m)} is for this unit ${X(c.id)}.`,
    `${X(m)} is for unit ${X(f.id)}, not this unit ${X(c.id)}.`,
    ["/credentialSubject/id"]
  )), s.push(Te(
    "same-operator",
    u.issuer === i.issuer,
    `${X(m)} is issued by the passport's issuer.`,
    `${X(m)} is issued by ${String(u.issuer)}, not the passport's issuer ${String(i.issuer)}.`,
    ["/issuer"]
  ));
  const w = zd(f.marking, "/credentialSubject/marking", f.productModelIri);
  s.push({ id: "mark-credential:mapping", state: w.state, reason: w.reason, sources: [...w.sources] }), s.push(Te(
    "same-model",
    w.marking === void 0 ? void 0 : w.marking.productModelIri === a.productModelIri && f.productModelIri === c.productModelIri,
    `${X(m)} claims the mark for the passport's model ${X(c.productModelIri)}.`,
    w.marking === void 0 ? `${X(m)} claims no mark for a model.` : `${X(m)} claims the mark for model ${X(w.marking.productModelIri)}, not the passport's model ${X(c.productModelIri)}.`,
    ["/credentialSubject/complianceInformation/gsMark/productModelIri", "/credentialSubject/productModelIri"]
  ));
  const x = Ud(g, t, n);
  s.push(...x.bases.map((v) => ({ ...v, id: `mark-credential:${v.id}` })));
  const b = x.scope === void 0 ? void 0 : t(x.scope)?.document, S = w.marking === void 0 ? { state: "not_established", reason: "No mark was mapped.", sources: [] } : Vd(w.marking, b);
  return s.push({ id: "mark-credential:claim-coverage", state: S.state, reason: S.reason, sources: [...S.sources] }), o([m, ...x.chain.slice(1)], x.scope);
}
const $m = Object.freeze({
  "competence-and-scheme-permission": Nd,
  "gs-certified-product": Ud,
  "responsible-economic-operator": Rm
}), _m = "/credentialSubject/certification", Pm = "/credentialSubject/marking", js = "/credentialSubject/complianceInformation/gsMark", Tm = { GsMarkCredential: "mark", ProductPassport: "passport" }, Cm = { certificate: _m, mark: Pm, passport: js };
async function Em(e, t, n, i) {
  if (n.id !== Nc || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${Nc}@${n.version}.`);
  const c = Fs(e, n, i);
  if (c !== void 0) return Object.freeze({ result: Bs(e, c), artifacts: Object.freeze([]) });
  const r = await Zs(e, t, n, i, xm), { target: a, artifacts: s, facts: o, verificationOf: p, artifactVerification: m } = r, g = (L) => o.get(L), u = o.get(e.targetId), f = u.document, w = i.authority.certificateRoutes, x = f === void 0 ? [] : w.slice(0, i.authority.maxRoutes).map((L) => {
    const F = $m[L];
    return F === void 0 ? {
      id: L,
      state: "not_established",
      execution: "executed",
      chain: [u.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${L} has no installed evaluator.`, sources: [] }]
    } : F(u, g, i);
  }), b = f === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : An([], x, w.slice(i.authority.maxRoutes)), S = b.routes.find((L) => L.state === "established"), v = Array.isArray(f?.type) && Tm[String(f.type[1])] || "certificate", y = Cm[v], d = e.selectedClaims.map((L) => {
    const F = /* @__PURE__ */ new Map();
    if (f === void 0 || L.sourcePointer !== y || en(f, L.sourcePointer) === void 0) {
      const D = f === void 0 ? "The target is not usable, so its claims are not read." : v === "passport" ? `This binding interprets only the GS-mark entry (${js}) of a product passport; ${L.sourcePointer} has no interpretation here.` : `Selected claim ${L.sourcePointer} is not the ${v === "mark" ? "marking" : "certification statement"} of the usable target.`;
      return { claim: L, mapping: void 0, coverage: F, result: { claimId: L.id, routeWitnessIds: [], ...oe("not_established", [D]) } };
    }
    const k = en(f, L.sourcePointer), O = v === "certificate" ? void 0 : zd(k, L.sourcePointer, f.credentialSubject?.productModelIri), V = O ?? Od(k, L.sourcePointer), N = O?.marking, R = v === "certificate" ? V.certification : void 0;
    if (N === void 0 && R === void 0)
      return { claim: L, mapping: V, coverage: F, result: {
        claimId: L.id,
        routeWitnessIds: [],
        ...oe(V.state, [`Gate 4: ${V.reason}`], [L.sourcePointer])
      } };
    const q = tr(b, (D) => {
      const H = v === "passport" ? {
        state: "established",
        sources: [js],
        reason: "The entry is declared by the passport's responsible economic operator; it is relied on through the GS-mark credential it cites (gate 6)."
      } : N !== void 0 ? Vd(N, g(D.scope)?.document) : (() => {
        const { competence: J, scheme: U } = Dd(D, g);
        return Ld(R, J, U);
      })(), Q = [...D.chain.slice(1), ...H.sources];
      return F.set(D.id, { ...H, sources: Q }), { id: "claim-coverage", state: H.state, reason: H.reason, sources: Q };
    }), T = q.routes.find((D) => D.state === "established");
    return { claim: L, mapping: V, coverage: F, result: {
      claimId: L.id,
      routeWitnessIds: q.state === "established" && T ? [`route:${T.id}`, ...T.chain, ...(F.get(T.id)?.records ?? []).map((D) => `record:${D}`)] : [],
      ...oe(q.state, [
        q.reason,
        ...T ? [F.get(T.id).reason] : [...F].map(([D, H]) => `${D}: ${H.reason}`)
      ], [L.sourcePointer])
    } };
  }), l = d.map((L) => L.result), h = v === "passport" && f !== void 0 ? jm(u, g, i) : void 0, I = f === void 0 ? void 0 : v === "passport" ? h?.certificateUri : v === "mark" ? x.find((L) => L.chain.length > 1)?.chain[1] : e.targetId, A = I === void 0 ? void 0 : g(I), $ = f === void 0 ? [] : A?.usable === "established" && A.document !== void 0 ? qm(A, g, i) : ["type-examination", "factory-inspection"].map((L) => ({
    obligationId: L,
    state: "not_established",
    reason: "No usable GS certificate was reached, so its studies are not evaluated.",
    bases: [],
    chain: []
  })), C = [...h ? [h.support] : [], ...$], M = C.map((L) => ({
    obligationId: `gs-v1:${L.obligationId}`,
    witnessIds: L.state === "established" ? [...L.chain] : [],
    ...oe(L.state, [L.reason], ["/evidence"])
  })), E = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...oe("not_established", ["The GS v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, j = /* @__PURE__ */ new Set([
    e.targetId,
    ...S?.chain ?? [],
    ...C.filter((L) => L.state === "established").flatMap((L) => L.chain)
  ]), P = [
    ...s.filter((L) => j.has(L.artifactId)).flatMap(p).map((L) => L.state),
    ...l.map((L) => L.state),
    ...M.map((L) => L.state),
    ...E.requested ? [E.state] : []
  ], z = [...r.trace], _ = Yi(a.artifactId, a.digestSRI, "target", e);
  for (const { claim: L, mapping: F, coverage: k } of d) {
    F && z.push({
      gate: 4,
      nodeUse: _,
      predicate: `claim-mapping:${L.id}`,
      state: F.state,
      execution: "executed",
      reason: F.reason,
      sources: [...F.sources]
    });
    for (const [O, V] of k)
      z.push({
        gate: 5,
        nodeUse: _,
        predicate: `claim-coverage:${L.id}:${O}`,
        state: V.state,
        execution: "executed",
        reason: V.reason,
        sources: [...V.sources]
      });
  }
  for (const L of l)
    z.push({
      gate: 5,
      nodeUse: _,
      predicate: `claim-authorization:${L.claimId}`,
      state: L.state,
      execution: L.execution,
      reason: L.reasons.join(" "),
      sources: [...L.sourcePointers]
    });
  z.push({
    gate: 5,
    nodeUse: _,
    predicate: "authority",
    state: b.state,
    execution: "executed",
    reason: b.reason,
    sources: S ? [...S.chain] : []
  });
  for (const L of b.routes) {
    z.push(L.execution === "not_run" ? {
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
    for (const F of L.bases)
      z.push({
        gate: 5,
        nodeUse: _,
        predicate: `route:${L.id}:${F.id}`,
        state: F.state,
        execution: "executed",
        reason: F.reason,
        sources: [...F.sources]
      });
  }
  for (const L of C)
    for (const F of L.bases)
      z.push({
        gate: 6,
        nodeUse: _,
        predicate: `support:${L.obligationId}:${F.id}`,
        state: F.state,
        execution: "executed",
        reason: F.reason,
        sources: [...F.sources]
      });
  for (const L of M)
    z.push({
      gate: 6,
      nodeUse: _,
      predicate: L.obligationId,
      state: L.state,
      execution: L.execution,
      reason: L.reasons.join(" "),
      sources: []
    });
  E.requested && z.push({
    gate: 6,
    nodeUse: _,
    predicate: `conformity:${E.requirementId}`,
    state: E.state,
    execution: E.execution,
    reason: E.reasons.join(" "),
    sources: []
  });
  const Z = Bi({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: m,
    authorization: l,
    support: M,
    conformity: E,
    decision: Ts(P),
    trace: z,
    resources: r.resources,
    limitations: [
      "The GS route is a fictional profile example (competence AND scheme permission), not a universal GS or legal rule.",
      ...v === "passport" ? ["The product passport is an experimental credential shaped after the EU Digital Product Passport (ESPR), not ESPR conformance; this binding interprets only its GS-mark entry."] : [],
      ...v === "mark" ? ["The GS-mark credential is an experimental manufacturer credential; today's GS scheme has no per-unit credential."] : [],
      "Verification failures of credentials outside the selected route and study chains are reported but do not decide the request.",
      "Fixture grants are fictional: an accreditation or scheme authorization here has no legal effect."
    ]
  });
  return Object.freeze({ result: Z, artifacts: Object.freeze([...s]) });
}
const $s = "2026-09-25T12:00:00Z", km = { rm: am, cal: bm, gs: Em }, Qs = Object.fromEntries(["rm", "cal", "gs"].map((e) => [e, {
  manifest: Al(Ti[e].manifest),
  profiles: Object.fromEntries(Object.entries(Ti[e].profiles).map(([t, n]) => [t, Jc(n)])),
  files: Ti[e].files
}])), Gd = "gs-verifier-dpp-accreditation-only (demonstrator)";
{
  const e = Ti.gs.profiles["gs-verifier-dpp-1"];
  Qs.gs.profiles[Gd] = Jc({
    ...e,
    id: "https://vc4qi.example/profiles/gs-verifier-dpp-accreditation-only",
    description: "Demonstrator-only variant of gs-verifier-dpp-1 that configures the accreditation body as its only trust anchor. Fictional.",
    trustAnchors: e.trustAnchors.filter((t) => t.id !== "https://zls.vc4qi.example/controller")
  });
}
const Mm = (e) => String(e).split(/[#/:]/).pop() ?? "", ps = (e, t) => ({
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
}), Pe = {
  CA: "https://nab.vc4qi.example/credentials/CAL-A",
  DCC1: "https://lab.vc4qi.example/credentials/DCC-1",
  O: "https://lab.vc4qi.example/credentials/CAL-O",
  DCC2: "https://lab.vc4qi.example/credentials/DCC-2",
  M: "https://ministry.vc4qi.example/credentials/CAL-M",
  DCCN: "https://nmi.vc4qi.example/credentials/DCC-N",
  T: "https://nab.vc4qi.example/credentials/CAL-T",
  REPORT: "https://testlab.vc4qi.example/credentials/REPORT-1"
}, on = (e) => ({ id: `g${e + 1}`, sourcePointer: `/credentialSubject/measurementGroups/${e}` }), Om = [
  {
    id: "direct",
    label: "Accredited lab",
    sublabel: "DCC-1",
    binding: "cal",
    profile: "cal-verifier-1",
    target: Pe.DCC1,
    claims: [on(0), on(1)],
    supplied: [Pe.CA],
    tamper: ['"value": "1000"', '"value": "15000"'],
    withhold: { uri: Pe.CA, label: "Withhold the accreditation" }
  },
  {
    id: "capability",
    label: "Capability scope",
    sublabel: "DCC-2",
    binding: "cal",
    profile: "cal-verifier-capability-1",
    target: Pe.DCC2,
    claims: [on(0)],
    supplied: [Pe.O, Pe.CA],
    tamper: ['"value": "1000"', '"value": "5000"'],
    withhold: { uri: Pe.O, label: "Withhold the operational scope" }
  },
  {
    id: "nmi",
    label: "National institute",
    sublabel: "DCC-N",
    binding: "cal",
    profile: "cal-verifier-nmi-1",
    target: Pe.DCCN,
    claims: [on(0)],
    supplied: [Pe.M],
    tamper: ['"value": "20"', '"value": "200"'],
    withhold: { uri: Pe.M, label: "Withhold the mandate" }
  },
  {
    id: "report",
    label: "Test report",
    sublabel: "REPORT-1",
    binding: "cal",
    profile: "cal-verifier-test-report-1",
    target: Pe.REPORT,
    claims: [on(0)],
    supplied: [Pe.T],
    tamper: ['"value": "2"', '"value": "30"'],
    withhold: { uri: Pe.DCC1, label: "Withhold the instrument's calibration" }
  }
], Je = {
  C1: "https://gs-body.vc4qi.example/credentials/GSC-1",
  TR1: "https://gs-body.vc4qi.example/credentials/TR-1",
  TR2: "https://testlab-gs.vc4qi.example/credentials/TR-2",
  TR3: "https://gs-body.vc4qi.example/credentials/TR-3",
  M1: "https://maker.vc4qi.example/credentials/GSM-1",
  M4: "https://maker.vc4qi.example/credentials/GSM-4"
}, cn = (e, t, n, i, c) => ({
  id: e,
  label: t,
  sublabel: n,
  binding: "gs",
  profile: "gs-verifier-mark-1",
  target: i,
  claims: [{ id: "mark", sourcePointer: "/credentialSubject/marking" }],
  supplied: [],
  tamper: ["-sn-", "-sn-9"],
  withhold: c
}), fs = (e, t, n, i, c) => ({
  id: e,
  label: t,
  sublabel: n,
  binding: "gs",
  profile: "gs-verifier-dpp-1",
  target: i,
  claims: [{ id: "mark", sourcePointer: "/credentialSubject/complianceInformation/gsMark" }],
  supplied: [],
  tamper: ["-sn-", "-sn-9"],
  withhold: c
}), dn = (e) => ({ uri: e, label: "Withhold the type examination" }), hs = (e) => ({ uri: e, label: "Withhold the GS-mark credential" }), Dc = [
  {
    id: "rm",
    tab: "RM",
    title: "Certified reference material",
    intro: "M375a, leaded brass: may I rely on the certified arsenic value?",
    caseLabel: "Certified As mass fraction (mg/kg)",
    cases: [ps("178", "certificate"), ps("197", "hypothetical"), ps("520", "hypothetical")],
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
    cases: Om,
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
      cn("in-house", "Hair dryer HD-01", "GS body tested", "https://maker.vc4qi.example/credentials/GSM-1", dn(Je.TR1)),
      cn("external", "Hair dryer HD-02", "external lab tested", "https://maker.vc4qi.example/credentials/GSM-3", dn(Je.TR2)),
      cn("toy", "Toy 001", "outside ZLS scope", "https://maker.vc4qi.example/credentials/GSM-2", dn(Je.TR3)),
      cn("clone", "Other company", "cites the HD-01 certificate", "https://clone.vc4qi.example/credentials/GSM-5", dn(Je.TR1)),
      cn("mismatch", "HD-02 unit", "claims the HD-01 mark", "https://maker.vc4qi.example/credentials/GSM-6", dn(Je.TR1))
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
      fs("unit", "Unit sn-0042", "its own GS-mark credential", "https://maker.vc4qi.example/credentials/DPP-1", hs(Je.M1)),
      fs("early", "Unit sn-0001", "on market before certification", "https://maker.vc4qi.example/credentials/DPP-2", hs(Je.M4)),
      fs("borrowed", "Unit sn-0050", "cites another unit's credential", "https://maker.vc4qi.example/credentials/DPP-3", hs(Je.M1))
    ],
    choice: { label: "The verifier trusts", options: [
      { id: "both", label: "Accreditation body and scheme owner", sublabel: "gs-verifier-dpp-1" },
      { id: "accreditation-only", label: "Accreditation body only", sublabel: "no scheme-owner anchor" }
    ] },
    note: "An experimental product passport shaped after the EU Digital Product Passport (ESPR): unique product identifier, GTIN, commodity code, economic operator and facility, technical and sustainability data, and compliance information. Its GS-mark entry is supported by the unit's GS-mark credential, which keeps its own authority route. The GS binding evaluates only that entry. Not ESPR conformance; identifiers are fictional, and today's GS scheme has no per-unit credential. All parties and keys are fictional."
  }
], Wm = [
  { id: "build", label: "Build the chain" },
  { id: "verify", label: "Verify" },
  { id: "manipulate", label: "Manipulate" },
  { id: "decide", label: "The verifier decides" },
  { id: "disclose", label: "Selective disclosure" }
], At = {
  A: "https://nab.vc4qi.example/credentials/GS-A",
  S: "https://zls.vc4qi.example/credentials/GS-S",
  FI: "https://gs-body.vc4qi.example/credentials/FI-1",
  TR: Je.TR1,
  C: Je.C1,
  M: Je.M1,
  P: "https://maker.vc4qi.example/credentials/DPP-1"
}, Ze = (e = {}) => ({ example: "dpp", caseId: "unit", choice: "both", tamper: !1, withhold: !1, ...e }), ln = "Verifier: market surveillance authority (trusts the accreditation body and the scheme owner)", Xm = [
  {
    id: "accredit",
    part: "build",
    actor: "Accreditation body → GS body",
    issues: [At.A],
    scenario: Ze(),
    title: "The accreditation body accredits the GS body",
    text: "It attests competence: testing and certifying toys and household appliances against named standards. It signs with a key published in its controller document, and can suspend the accreditation through its status list."
  },
  {
    id: "authorize",
    part: "build",
    actor: "Scheme owner → GS body",
    issues: [At.S],
    scenario: Ze(),
    title: "The scheme owner permits the GS body to award the GS mark",
    text: "Competence is not permission. A second authority, in the role ZLS has for the GS mark, grants the right to award the mark, for household appliances only."
  },
  {
    id: "examine",
    part: "build",
    actor: "GS body → manufacturer",
    issues: [At.FI, At.TR],
    scenario: Ze(),
    title: "The GS body inspects the factory and examines the type",
    text: "Two studies: a factory inspection of the plant and a type examination of model HD-01. Each is signed under the GS body's accreditation. They support the certificate; they grant nothing."
  },
  {
    id: "certify",
    part: "build",
    actor: "GS body → manufacturer",
    issues: [At.C],
    scenario: Ze(),
    title: "The GS body certifies model HD-01",
    text: "The certificate points to both of its authorities, the accreditation and the scheme permission, and to both studies. Every link is a reference inside a signed credential."
  },
  {
    id: "mark",
    part: "build",
    actor: "Manufacturer → product unit sn-0042",
    issues: [At.M, At.P],
    scenario: Ze(),
    title: "The manufacturer marks the unit and issues its product passport",
    text: "A GS-mark credential for unit sn-0042, citing the certificate, and a product passport whose compliance information lists the mark. Per-unit credentials are the experimental part: today's GS scheme has none."
  },
  {
    id: "verify",
    part: "verify",
    actor: ln,
    scenario: Ze(),
    expect: "accept",
    title: "Market surveillance checks the passport",
    text: "It knows none of the parties in advance and trusts only two roots. It follows every reference from the passport down to them and answers six questions before it relies on the GS mark."
  },
  {
    id: "tamper",
    part: "manipulate",
    actor: ln,
    scenario: Ze({ tamper: !0 }),
    expect: "reject",
    title: "Someone edits the passport",
    text: "The serial number is changed after signing. The signature no longer matches the bytes. This is the only manipulation a signature check alone catches; the next three pass it."
  },
  {
    id: "borrowed",
    part: "manipulate",
    actor: ln,
    scenario: Ze({ caseId: "borrowed" }),
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
    actor: ln,
    scenario: Ze({ withholdUri: At.TR }),
    expect: "not_established",
    title: "The type examination is withheld",
    text: 'Nothing presented is false, but the study the certificate rests on is missing. The verifier cannot tell, and "cannot tell" is never accepted.'
  },
  {
    id: "surveillance",
    part: "decide",
    actor: ln,
    scenario: Ze(),
    expect: "accept",
    title: "Verifier 1: market surveillance",
    text: "Its profile recognises both the accreditation body and the scheme owner, so both halves of the authority, competence and permission, reach a root it trusts."
  },
  {
    id: "abroad",
    part: "decide",
    actor: "Verifier: a buyer abroad (trusts the accreditation body only)",
    scenario: Ze({ choice: "accreditation-only" }),
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
], Lm = {
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
}, zc = (e) => {
  const t = /^https:\/\/([^./]+)\./.exec(String(e))?.[1];
  return t === void 0 ? String(e).split("#")[0].split(":").pop() : Lm[t] ?? t;
}, Nm = {
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
function Dm(e, t, n, i, c) {
  const r = /* @__PURE__ */ new Map();
  for (const [w, x] of Object.entries(t))
    try {
      r.set(w, JSON.parse(x));
    } catch {
    }
  const a = (w) => [
    ...(w?.termsOfUse ?? []).map((x) => x.authorizationCredential?.id).filter((x) => typeof x == "string").map((x) => ({ to: x, kind: "authority" })),
    ...(w?.evidence ?? []).map((x) => x.id).filter((x) => typeof x == "string").map((x) => ({ to: x, kind: "support" }))
  ], s = new Map(n.artifactVerification.map((w) => [w.artifactId, w.state])), o = /* @__PURE__ */ new Map([[e, 0]]), p = /* @__PURE__ */ new Set(), m = [], g = [[e, !1]], u = /* @__PURE__ */ new Set();
  for (; g.length > 0; ) {
    const [w, x] = g.shift();
    for (const { to: b, kind: S } of a(r.get(w))) {
      const v = `${w}>${b}`, y = x || S === "support";
      u.has(v) || (u.add(v), m.push({
        from: w,
        to: b,
        kind: S,
        state: y ? c : w === e ? i : s.get(b) ?? "not_established"
      }));
      const d = (o.get(w) ?? 0) + 1;
      (o.get(b) ?? -1) < d && d < 8 ? (o.set(b, d), g.push([b, y])) : y && !p.has(b) && p.add(b);
    }
  }
  return { nodes: [...o].map(([w, x]) => {
    const b = r.get(w), S = Array.isArray(b?.type) ? String(b.type[1]) : "", v = b?.credentialSubject ?? {};
    return {
      uri: w,
      name: Mm(w),
      role: Nm[S] ?? (S || "not supplied"),
      layer: x,
      present: b !== void 0,
      target: w === e,
      parties: b === void 0 ? "withheld" : `${zc(b.issuer)} → ${zc(v.id)}`,
      state: s.get(w) ?? "not_established"
    };
  }), edges: m };
}
const qt = (e) => e.length === 0 ? "not_established" : ve(e.map((t) => t.state)), Vc = (e, t) => e.find((n) => n.state === t);
async function Ym(e) {
  const t = Dc.find((E) => E.id === e.example) ?? Dc[0], n = t.cases.find((E) => E.id === e.caseId) ?? t.cases[0], i = Qs[n.binding], c = t.id === "dcc" && e.choice === "direct-only" ? "cal-verifier-1" : t.id === "dpp" && e.choice === "accreditation-only" ? Gd : n.profile, r = i.profiles[c], a = t.id === "rm" && e.choice !== "authorized" ? { requirementId: "as-mass-fraction-max-200-mg-per-kg", decisionRuleId: "guarded-acceptance-expanded-u" } : void 0, s = e.withholdUri ?? (e.withhold ? n.withhold.uri : void 0), o = {}, p = i.files.filter((E) => E.uri !== s).map((E) => {
    const j = e.tamper && E.uri === n.target ? E.text.replace(n.tamper[0], n.tamper[1]) : E.text, P = new TextEncoder().encode(j);
    return o[E.uri] = j, {
      uri: E.uri,
      mediaType: E.mediaType,
      origin: E.origin,
      version: E.version,
      bytes: P,
      digestSRI: j === E.text ? E.digestSRI : Fi(P)
    };
  }), m = Ol({
    requestId: `urn:vc4qi:demonstrator:${t.id}:${n.id}`,
    targetId: n.target,
    selectedClaims: n.claims.map((E) => ({ ...E })),
    purpose: "demonstrator",
    binding: { id: i.manifest.id, version: i.manifest.version },
    profile: { id: r.id, version: r.version },
    trustConfigId: "https://vc4qi.example/trust/fixture-anchors",
    evaluationTime: $s,
    activityTime: $s,
    suppliedEvidence: n.supplied.filter((E) => E !== s),
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5e6 },
    ...a ? { conformity: a } : {}
  }), { result: g } = await km[n.binding](m, new xl(p), i.manifest, r), u = (E, j = () => !0) => g.trace.filter((P) => P.gate === E && j(P)), w = [...u(2), ...u(1)], x = u(3), b = [...u(0), ...u(4)], S = (E, j, P) => j === "established" ? P : (Vc(E, j) ?? Vc(E, "not_established"))?.reason ?? "Not evaluated.", v = g.authorization, y = v.length === 0 ? "not_established" : ve(v.map((E) => E.state)), d = y === "established" ? v.map((E) => E.reasons.at(-1)).join(" ") : v.filter((E) => E.state !== "established").map((E) => `${E.claimId}: ${E.reasons.join(" ")}`).join(" "), l = g.support, h = g.artifactVerification.find((E) => E.artifactId === n.target)?.state === "established", I = l.length > 0 ? ve(l.map((E) => E.state)) : h ? "not_required" : "not_established", A = u(6, (E) => E.predicate.startsWith("conformity:")), $ = [
    {
      id: "authentic",
      state: qt(w),
      details: w,
      summary: S(w, qt(w), "Every credential is signed by its issuer's own key, and every reference matches the exact bytes.")
    },
    {
      id: "current",
      state: qt(x),
      details: x,
      summary: S(x, qt(x), "Every credential is within its validity period and not revoked.")
    },
    // "Understood" includes reading the claim itself (gate 4); a claim that was never
    // read, because its credential failed a lower gate, is not understood.
    u(4).length === 0 ? {
      id: "understood",
      state: qt(u(0)) === "contradicted" ? "contradicted" : "not_established",
      details: b,
      summary: S(u(0), qt(u(0)), "The claim was not read, because its credential did not pass the earlier checks.")
    } : {
      id: "understood",
      state: qt(b),
      details: b,
      summary: S(b, qt(b), u(4).map((E) => E.reason).join(" "))
    },
    {
      id: "authorized",
      state: y,
      summary: d,
      details: u(5, (E) => E.predicate.startsWith("claim-") || E.predicate.startsWith("restriction:") || E.predicate.startsWith("route:"))
    },
    {
      id: "supported",
      state: I,
      summary: l.length > 0 ? l.map((E) => E.reasons.join(" ")).join(" ") : h ? "This claim needs no supporting credential under the selected profile." : "Not evaluated: the credential did not pass the earlier checks.",
      details: u(6, (E) => E.predicate.startsWith("support:") || l.some((j) => j.obligationId === E.predicate))
    },
    g.conformity.requested ? {
      id: "fit",
      state: g.conformity.execution === "not_run" ? "not_asked" : g.conformity.state,
      details: A,
      summary: g.conformity.reasons.join(" ")
    } : {
      id: "fit",
      state: "not_asked",
      details: [],
      summary: t.id === "rm" ? "The verifier asked only whether the value is authorized; no limit was applied." : "This example asks only whether the claim is authorized; the binding installs no decision rule."
    }
  ], C = JSON.parse(o[n.target]), M = Dm(n.target, o, g, y, I);
  return { options: e, example: t, spec: n, profile: c, result: g, questions: $, target: C, texts: o, graph: M };
}
const ey = {
  evaluationTime: $s,
  bindings: Object.fromEntries(Object.entries(Qs).map(([e, t]) => [e, `${t.manifest.id}@${t.manifest.version}`]))
};
export {
  $s as EVALUATION_TIME,
  Dc as EXAMPLES,
  Xm as STORY,
  Wm as STORY_PARTS,
  ey as buildInfo,
  Ym as evaluateScenario
};
