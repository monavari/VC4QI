var zd = Object.defineProperty;
var Ks = (e) => {
  throw TypeError(e);
};
var Vd = (e, t, n) => t in e ? zd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ot = (e, t, n) => Vd(e, typeof t != "symbol" ? t + "" : t, n), Qs = (e, t, n) => t.has(e) || Ks("Cannot " + n);
var Ye = (e, t, n) => (Qs(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Sn = (e, t, n) => t.has(e) ? Ks("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ni = (e, t, n, r) => (Qs(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
const ri = { rm: { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/rm/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/bindings.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Contexts, schemas, controller documents, signed A/H/O/S/D fixtures and status lists are pinned and verify in TypeScript and Python. The I1-I4 evaluators (protection, status, authority routes, support, claim mapping and coverage, conformity) and the current-reliance time rules are implemented, with a cross-language parity vector; an independent transformation vector is still required before selection.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/rm/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/rm/1#RmAccreditation", "https://vc4qi.example/bindings/rm/1#RmOperationalScope", "https://vc4qi.example/bindings/rm/1#RmCertificate", "https://vc4qi.example/bindings/rm/1#RmStudy", "https://vc4qi.example/bindings/rm/1#RmLabAuthority", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential"], schemaUris: ["https://vc4qi.example/schemas/rm/1/accreditation.json", "https://vc4qi.example/schemas/rm/1/operational-scope.json", "https://vc4qi.example/schemas/rm/1/certificate.json", "https://vc4qi.example/schemas/rm/1/study.json", "https://vc4qi.example/schemas/rm/1/lab-authority.json", "https://vc4qi.example/schemas/rm/1/authorization-policy.json", "https://vc4qi.example/schemas/rm/1/study-reference.json", "https://vc4qi.example/schemas/rm/1/status-list.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/rm-v1/catalog.json", decimalEncoding: "JSON strings typed xsd:decimal for every quantity, bound and uncertainty", orderedCollections: ["materials", "materialPropertiesList", "results"] }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/rm/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/rm/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/bindings/rm/1#authorizationCredential" }, { fact: "requiredStudy", nativePath: "/evidence/*/id", expandedIri: "https://www.w3.org/2018/credentials#evidence" }, { fact: "validFrom", nativePath: "/validFrom", expandedIri: "https://www.w3.org/2018/credentials#validFrom" }, { fact: "validUntil", nativePath: "/validUntil", expandedIri: "https://www.w3.org/2018/credentials#validUntil" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/rm/1#activityTime" }, { fact: "selectedResult", nativePath: "/credentialSubject/materialPropertiesList/*/results/*", expandedIri: "https://vc4qi.example/bindings/rm/1#results" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, material: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 1 }, authorizingReferenceSelection: "by-declared-reference-type-per-route; resolved credential type must match (else contradicted); several of one type not_established", supportReferences: { minimum: 1 }, multipleRecognizedDeclarations: "unsupported-unless-exact-deterministic-composition-is-listed", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "evidence", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse authorizationCredential references on the credential chain; an authenticated grant found by other means establishes nothing (not_established)" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/bindings/rm/1#RmAuthorizationPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], supportEvidence: "https://vc4qi.example/bindings/rm/1#RmStudyReference", supportEvidenceEstablishes: ["support-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "support-applicability", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { issueRmCertificate: "https://vc4qi.example/bindings/rm/1#issueRmCertificate", maintainRmScope: "https://vc4qi.example/bindings/rm/1#maintainRmScope", issueRmStudy: "https://vc4qi.example/bindings/rm/1#issueRmStudy" }, rules: ["A grantee equals the producer exercising certificate issuance and scope maintenance.", "O issuer and grantee equal that producer and O is contained by A.", "D issuer equals O grantee.", "S issuer equals H laboratory grantee.", "Commissioning a study grants no laboratory competence."] }, scopeAndMapping: { mappingVersion: "rm-experimental-mapping-1", recordEvaluator: "https://vc4qi.example/evaluators/rm-complete-record/1", quantityEvaluator: "https://vc4qi.example/evaluators/exact-mass-fraction/1", dimensions: ["matrixIri", "formIri", "propertyIri", "methodIri", "quantityKindIri", "range"], units: { "mg/kg": "1e-6", "kg/kg": "1" }, boundaries: "inclusive", missingOrEmptyRestrictedDimension: "not_established", recordCombination: "one-complete-record-per-claim-no-splicing", uncertainty: { requiredCoverageFactor: "2", nonnegative: !0, accreditationCeiling: "none" }, methodRevisions: [{ method: "https://vc4qi.example/bindings/rm/1#M2", revises: "https://vc4qi.example/bindings/rm/1#M1" }], methodSuccessionInterpretation: "verifier-profile mapping.methodSuccession: accept-successor | require-extension | none (none leaves a revised method not_established at gate 4)", claimCoverage: "the selected result, mapped at gate 4, must lie in one complete record of the route's own scope credential (O for operational-scope, A for direct-accreditation); no fallback to a parent grant", conformity: "verifier-profile requirements and decision rules, evaluated at gate 6 only after the claim is authorized; exact arithmetic reported in the requirement's unit", unsupported: ["asymmetric-uncertainty", "display-label-equality", "substring-matching", "implicit-method-succession"] }, routesAndRestrictions: { certificateRoute: ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A"], installedCertificateRoutes: { "operational-scope": ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A", "A-issuer-is-accreditation-anchor"], "direct-accreditation": ["A-authorizes-D", "A-issuer-is-accreditation-anchor"] }, studyRoute: ["H-authorizes-S"], requiredSupport: ["S", "H"], globalRestrictions: ["applicable-suspension", "request-time-policy"], installedGlobalRestrictions: { "accreditation-suspension": "every usable anchor-issued RmAccreditation of the certificate issuer reached through the target's termsOfUse references, on any route, must carry a fresh issuer suspension status (Bitstring Status List, statusPurpose suspension) with its bit clear; missing or unreadable suspension status is not_established; unusable or unreferenced credentials are not restrictions" }, unusedAlternativeFailures: "diagnostic-only: only the target and the credentials on the selected route and support chains decide the request", routeComposition: "AND-within-route-OR-between-complete-routes", baselineAlternatives: 1, provenanceDoesNotEstablish: ["permission", "containment"] }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, proofCollections: "unsupported-in-initial-slice", status: "authenticated-current-revocation-status-required-for-A-O-D-S-H; suspension entries on accreditations are read only by the accreditation-suspension restriction", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], freshness: "verifier-profile maxAgeSeconds from the status list validFrom; no default", historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { objectApplicability: ["materialBatch", "activity", "method", "activityTime"], supportSubjectNeedNotEqualTargetIssuer: !0, mandatoryDisclosure: ["issuer", "credentialSubject/id", "activityTime", "selectedResult", "restrictions", "authorizingReference", "requiredStudy", "relatedResource", "proof"], missingMandatoryDisclosure: "not_established", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/acceptance-ledger.csv", testVectorRoots: ["testdata/regressions", "bindings/experimental/rm-v1/test-vectors"], unsupported: ["production-accreditation", "legal-effect", "physical-sample-truth", "public-example-namespace-resolution", "general-ontology-reasoning", "wallet-interoperability", "external-recognition-adapter", "timestamp-service"] } }, profiles: { "rm-verifier-1": { id: "https://vc4qi.example/profiles/rm-verifier", version: "1", status: "experimental", description: "Verifier-owned reliance profile for the experimental RM v1 binding. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "recognize-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } }, "rm-verifier-two-routes-1": { id: "https://vc4qi.example/profiles/rm-verifier-two-routes", version: "1", status: "experimental", description: "Fictional verifier profile with two complete certificate routes, (operational scope within an accreditation) OR (direct accreditation), and the accreditation-suspension global restriction outside the OR. Exercises route composition (C01-C07); not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "recognize-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope", "direct-accreditation"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
function Ud(e) {
  return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function Rs(e, ...t) {
  if (!Ud(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function Ws(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Gd(e, t) {
  Rs(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error("digestInto() expects output buffer of length at least " + n);
}
function hn(...e) {
  for (let t = 0; t < e.length; t++)
    e[t].fill(0);
}
function ii(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function et(e, t) {
  return e << 32 - t | e >>> t;
}
function Fd(e) {
  if (typeof e != "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(e));
}
function Nc(e) {
  return typeof e == "string" && (e = Fd(e)), Rs(e), e;
}
class Bd {
}
function js(e) {
  const t = (r) => e().update(Nc(r)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
function Zd(e, t, n, r) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, r);
  const c = BigInt(32), i = BigInt(4294967295), a = Number(n >> c & i), s = Number(n & i), o = r ? 4 : 0, p = r ? 0 : 4;
  e.setUint32(t + o, a, r), e.setUint32(t + p, s, r);
}
function Hd(e, t, n) {
  return e & t ^ ~e & n;
}
function Jd(e, t, n) {
  return e & t ^ e & n ^ t & n;
}
class Dc extends Bd {
  constructor(t, n, r, c) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = n, this.padOffset = r, this.isLE = c, this.buffer = new Uint8Array(t), this.view = ii(this.buffer);
  }
  update(t) {
    Ws(this), t = Nc(t), Rs(t);
    const { view: n, buffer: r, blockLen: c } = this, i = t.length;
    for (let a = 0; a < i; ) {
      const s = Math.min(c - this.pos, i - a);
      if (s === c) {
        const o = ii(t);
        for (; c <= i - a; a += c)
          this.process(o, a);
        continue;
      }
      r.set(t.subarray(a, a + s), this.pos), this.pos += s, a += s, this.pos === c && (this.process(n, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    Ws(this), Gd(t, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: c, isLE: i } = this;
    let { pos: a } = this;
    n[a++] = 128, hn(this.buffer.subarray(a)), this.padOffset > c - a && (this.process(r, 0), a = 0);
    for (let g = a; g < c; g++)
      n[g] = 0;
    Zd(r, c - 8, BigInt(this.length * 8), i), this.process(r, 0);
    const s = ii(t), o = this.outputLen;
    if (o % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const p = o / 4, h = this.get();
    if (p > h.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let g = 0; g < p; g++)
      s.setUint32(4 * g, h[g], i);
  }
  digest() {
    const { buffer: t, outputLen: n } = this;
    this.digestInto(t);
    const r = t.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: n, buffer: r, length: c, finished: i, destroyed: a, pos: s } = this;
    return t.destroyed = a, t.finished = i, t.length = c, t.pos = s, c % n && t.buffer.set(r), t;
  }
  clone() {
    return this._cloneInto();
  }
}
const mt = /* @__PURE__ */ Uint32Array.from([
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
]), In = /* @__PURE__ */ BigInt(2 ** 32 - 1), Xs = /* @__PURE__ */ BigInt(32);
function Kd(e, t = !1) {
  return t ? { h: Number(e & In), l: Number(e >> Xs & In) } : { h: Number(e >> Xs & In) | 0, l: Number(e & In) | 0 };
}
function Qd(e, t = !1) {
  const n = e.length;
  let r = new Uint32Array(n), c = new Uint32Array(n);
  for (let i = 0; i < n; i++) {
    const { h: a, l: s } = Kd(e[i], t);
    [r[i], c[i]] = [a, s];
  }
  return [r, c];
}
const Ys = (e, t, n) => e >>> n, ea = (e, t, n) => e << 32 - n | t >>> n, Mt = (e, t, n) => e >>> n | t << 32 - n, Ot = (e, t, n) => e << 32 - n | t >>> n, qn = (e, t, n) => e << 64 - n | t >>> n - 32, An = (e, t, n) => e >>> n - 32 | t << 64 - n;
function ct(e, t, n, r) {
  const c = (t >>> 0) + (r >>> 0);
  return { h: e + n + (c / 2 ** 32 | 0) | 0, l: c | 0 };
}
const Wd = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0), Xd = (e, t, n, r) => t + n + r + (e / 2 ** 32 | 0) | 0, Yd = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0), el = (e, t, n, r, c) => t + n + r + c + (e / 2 ** 32 | 0) | 0, tl = (e, t, n, r, c) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (c >>> 0), nl = (e, t, n, r, c, i) => t + n + r + c + i + (e / 2 ** 32 | 0) | 0, rl = /* @__PURE__ */ Uint32Array.from([
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
]), yt = /* @__PURE__ */ new Uint32Array(64);
class il extends Dc {
  constructor(t = 32) {
    super(64, t, 8, !1), this.A = mt[0] | 0, this.B = mt[1] | 0, this.C = mt[2] | 0, this.D = mt[3] | 0, this.E = mt[4] | 0, this.F = mt[5] | 0, this.G = mt[6] | 0, this.H = mt[7] | 0;
  }
  get() {
    const { A: t, B: n, C: r, D: c, E: i, F: a, G: s, H: o } = this;
    return [t, n, r, c, i, a, s, o];
  }
  // prettier-ignore
  set(t, n, r, c, i, a, s, o) {
    this.A = t | 0, this.B = n | 0, this.C = r | 0, this.D = c | 0, this.E = i | 0, this.F = a | 0, this.G = s | 0, this.H = o | 0;
  }
  process(t, n) {
    for (let g = 0; g < 16; g++, n += 4)
      yt[g] = t.getUint32(n, !1);
    for (let g = 16; g < 64; g++) {
      const u = yt[g - 15], f = yt[g - 2], w = et(u, 7) ^ et(u, 18) ^ u >>> 3, x = et(f, 17) ^ et(f, 19) ^ f >>> 10;
      yt[g] = x + yt[g - 7] + w + yt[g - 16] | 0;
    }
    let { A: r, B: c, C: i, D: a, E: s, F: o, G: p, H: h } = this;
    for (let g = 0; g < 64; g++) {
      const u = et(s, 6) ^ et(s, 11) ^ et(s, 25), f = h + u + Hd(s, o, p) + rl[g] + yt[g] | 0, x = (et(r, 2) ^ et(r, 13) ^ et(r, 22)) + Jd(r, c, i) | 0;
      h = p, p = o, o = s, s = a + f | 0, a = i, i = c, c = r, r = f + x | 0;
    }
    r = r + this.A | 0, c = c + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, s = s + this.E | 0, o = o + this.F | 0, p = p + this.G | 0, h = h + this.H | 0, this.set(r, c, i, a, s, o, p, h);
  }
  roundClean() {
    hn(yt);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), hn(this.buffer);
  }
}
const zc = Qd([
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
].map((e) => BigInt(e))), sl = zc[0], al = zc[1], gt = /* @__PURE__ */ new Uint32Array(80), vt = /* @__PURE__ */ new Uint32Array(80);
class Vc extends Dc {
  constructor(t = 64) {
    super(128, t, 16, !1), this.Ah = xe[0] | 0, this.Al = xe[1] | 0, this.Bh = xe[2] | 0, this.Bl = xe[3] | 0, this.Ch = xe[4] | 0, this.Cl = xe[5] | 0, this.Dh = xe[6] | 0, this.Dl = xe[7] | 0, this.Eh = xe[8] | 0, this.El = xe[9] | 0, this.Fh = xe[10] | 0, this.Fl = xe[11] | 0, this.Gh = xe[12] | 0, this.Gl = xe[13] | 0, this.Hh = xe[14] | 0, this.Hl = xe[15] | 0;
  }
  // prettier-ignore
  get() {
    const { Ah: t, Al: n, Bh: r, Bl: c, Ch: i, Cl: a, Dh: s, Dl: o, Eh: p, El: h, Fh: g, Fl: u, Gh: f, Gl: w, Hh: x, Hl: b } = this;
    return [t, n, r, c, i, a, s, o, p, h, g, u, f, w, x, b];
  }
  // prettier-ignore
  set(t, n, r, c, i, a, s, o, p, h, g, u, f, w, x, b) {
    this.Ah = t | 0, this.Al = n | 0, this.Bh = r | 0, this.Bl = c | 0, this.Ch = i | 0, this.Cl = a | 0, this.Dh = s | 0, this.Dl = o | 0, this.Eh = p | 0, this.El = h | 0, this.Fh = g | 0, this.Fl = u | 0, this.Gh = f | 0, this.Gl = w | 0, this.Hh = x | 0, this.Hl = b | 0;
  }
  process(t, n) {
    for (let y = 0; y < 16; y++, n += 4)
      gt[y] = t.getUint32(n), vt[y] = t.getUint32(n += 4);
    for (let y = 16; y < 80; y++) {
      const d = gt[y - 15] | 0, l = vt[y - 15] | 0, m = Mt(d, l, 1) ^ Mt(d, l, 8) ^ Ys(d, l, 7), I = Ot(d, l, 1) ^ Ot(d, l, 8) ^ ea(d, l, 7), q = gt[y - 2] | 0, _ = vt[y - 2] | 0, C = Mt(q, _, 19) ^ qn(q, _, 61) ^ Ys(q, _, 6), R = Ot(q, _, 19) ^ An(q, _, 61) ^ ea(q, _, 6), O = Yd(I, R, vt[y - 7], vt[y - 16]), $ = el(O, m, C, gt[y - 7], gt[y - 16]);
      gt[y] = $ | 0, vt[y] = O | 0;
    }
    let { Ah: r, Al: c, Bh: i, Bl: a, Ch: s, Cl: o, Dh: p, Dl: h, Eh: g, El: u, Fh: f, Fl: w, Gh: x, Gl: b, Hh: S, Hl: v } = this;
    for (let y = 0; y < 80; y++) {
      const d = Mt(g, u, 14) ^ Mt(g, u, 18) ^ qn(g, u, 41), l = Ot(g, u, 14) ^ Ot(g, u, 18) ^ An(g, u, 41), m = g & f ^ ~g & x, I = u & w ^ ~u & b, q = tl(v, l, I, al[y], vt[y]), _ = nl(q, S, d, m, sl[y], gt[y]), C = q | 0, R = Mt(r, c, 28) ^ qn(r, c, 34) ^ qn(r, c, 39), O = Ot(r, c, 28) ^ An(r, c, 34) ^ An(r, c, 39), $ = r & i ^ r & s ^ i & s, E = c & a ^ c & o ^ a & o;
      S = x | 0, v = b | 0, x = f | 0, b = w | 0, f = g | 0, w = u | 0, { h: g, l: u } = ct(p | 0, h | 0, _ | 0, C | 0), p = s | 0, h = o | 0, s = i | 0, o = a | 0, i = r | 0, a = c | 0;
      const z = Wd(C, O, E);
      r = Xd(z, _, R, $), c = z | 0;
    }
    ({ h: r, l: c } = ct(this.Ah | 0, this.Al | 0, r | 0, c | 0)), { h: i, l: a } = ct(this.Bh | 0, this.Bl | 0, i | 0, a | 0), { h: s, l: o } = ct(this.Ch | 0, this.Cl | 0, s | 0, o | 0), { h: p, l: h } = ct(this.Dh | 0, this.Dl | 0, p | 0, h | 0), { h: g, l: u } = ct(this.Eh | 0, this.El | 0, g | 0, u | 0), { h: f, l: w } = ct(this.Fh | 0, this.Fl | 0, f | 0, w | 0), { h: x, l: b } = ct(this.Gh | 0, this.Gl | 0, x | 0, b | 0), { h: S, l: v } = ct(this.Hh | 0, this.Hl | 0, S | 0, v | 0), this.set(r, c, i, a, s, o, p, h, g, u, f, w, x, b, S, v);
  }
  roundClean() {
    hn(gt, vt);
  }
  destroy() {
    hn(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class ol extends Vc {
  constructor() {
    super(48), this.Ah = we[0] | 0, this.Al = we[1] | 0, this.Bh = we[2] | 0, this.Bl = we[3] | 0, this.Ch = we[4] | 0, this.Cl = we[5] | 0, this.Dh = we[6] | 0, this.Dl = we[7] | 0, this.Eh = we[8] | 0, this.El = we[9] | 0, this.Fh = we[10] | 0, this.Fl = we[11] | 0, this.Gh = we[12] | 0, this.Gl = we[13] | 0, this.Hh = we[14] | 0, this.Hl = we[15] | 0;
  }
}
const cl = /* @__PURE__ */ js(() => new il()), dl = /* @__PURE__ */ js(() => new Vc()), ll = /* @__PURE__ */ js(() => new ol()), ul = cl, pl = dl, fl = ll;
class hl {
  constructor(t) {
    ot(this, "_chunks", []);
    ot(this, "_algo");
    this._algo = t === "sha384" ? "sha384" : t === "sha512" ? "sha512" : "sha256";
  }
  update(t, n) {
    const r = typeof t == "string" ? new TextEncoder().encode(t) : t;
    return this._chunks.push(r), this;
  }
  digest(t) {
    const n = this._chunks.reduce((a, s) => a + s.length, 0), r = new Uint8Array(n);
    let c = 0;
    for (const a of this._chunks)
      r.set(a, c), c += a.length;
    let i;
    return this._algo === "sha384" ? i = fl(r) : this._algo === "sha512" ? i = pl(r) : i = ul(r), t === "base64" ? btoa(String.fromCharCode(...i)) : t === "hex" ? Array.from(i).map((a) => a.toString(16).padStart(2, "0")).join("") : i;
  }
}
function ps(e) {
  return new hl(e);
}
class $e extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "CatalogError";
  }
}
function ml(e, t) {
  if (e.trim().length === 0)
    throw new $e("INVALID_RESOURCE", `${t} must be nonempty.`);
}
function zr(e) {
  return `sha384-${ps("sha384").update(e).digest("base64")}`;
}
function ta(e) {
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
      const r = t.get(n);
      if (r instanceof $e) throw r;
      return { ...r, bytes: Uint8Array.from(r.bytes) };
    }
  };
}
var Zt;
class yl {
  constructor(t) {
    Sn(this, Zt, /* @__PURE__ */ new Map());
    for (const n of t) {
      for (const [c, i] of Object.entries({
        uri: n.uri,
        mediaType: n.mediaType,
        origin: n.origin,
        version: n.version
      })) ml(i, c);
      if (Ye(this, Zt).has(n.uri))
        throw new $e("DUPLICATE_RESOURCE", `Duplicate static resource: ${n.uri}`);
      const r = zr(n.bytes);
      if (r !== n.digestSRI)
        throw new $e(
          "INTEGRITY_MISMATCH",
          `Static resource ${n.uri} has ${r}; expected ${n.digestSRI}.`
        );
      Ye(this, Zt).set(n.uri, { ...n, bytes: Uint8Array.from(n.bytes) });
    }
  }
  openSession(t) {
    if (!Number.isSafeInteger(t.maxResources) || t.maxResources <= 0 || !Number.isSafeInteger(t.maxBytes) || t.maxBytes <= 0)
      throw new $e("INVALID_RESOURCE", "Catalog budgets must be positive safe integers.");
    return new gl(Ye(this, Zt), Object.freeze({ ...t }));
  }
}
Zt = new WeakMap();
var Ht, Jt;
class gl {
  constructor(t, n) {
    Sn(this, Ht, 0);
    Sn(this, Jt, 0);
    this.resources = t, this.budget = n;
  }
  get usage() {
    return Object.freeze({ resources: Ye(this, Ht), bytes: Ye(this, Jt) });
  }
  resolve(t) {
    const n = this.resources.get(t);
    if (!n)
      throw new $e("RESOURCE_NOT_FOUND", `Static resource is not installed: ${t}`);
    if (Ye(this, Ht) + 1 > this.budget.maxResources || Ye(this, Jt) + n.bytes.byteLength > this.budget.maxBytes)
      throw new $e("RESOURCE_BUDGET_EXCEEDED", `Static resource budget exceeded at ${t}.`);
    return ni(this, Ht, Ye(this, Ht) + 1), ni(this, Jt, Ye(this, Jt) + n.bytes.byteLength), { ...n, bytes: Uint8Array.from(n.bytes) };
  }
}
Ht = new WeakMap(), Jt = new WeakMap();
function vl(e) {
  return async (t) => {
    const n = e.resolve(t);
    if (n.mediaType !== "application/json" && n.mediaType !== "application/ld+json" && !n.mediaType.endsWith("+json"))
      throw new $e(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} has unsupported media type ${n.mediaType}.`
      );
    let r;
    try {
      const c = new TextDecoder("utf-8", { fatal: !0 }).decode(n.bytes);
      r = JSON.parse(c);
    } catch (c) {
      throw new $e(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} is not valid UTF-8 JSON: ${String(c)}.`
      );
    }
    return { contextUrl: null, document: r, documentUrl: t };
  };
}
const na = "https://vc4qi.example/bindings/rm/1", si = [
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
function Rn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Uc(e) {
  if (e !== null && typeof e == "object") {
    for (const t of Object.values(e)) Uc(t);
    Object.freeze(e);
  }
  return e;
}
function bl(e) {
  if (!Rn(e)) throw new TypeError("Binding manifest must be an object.");
  if (Object.keys(e).length !== si.length || si.some((n) => !Object.hasOwn(e, n)))
    throw new TypeError("Binding manifest must contain exactly the supported top-level categories.");
  if (typeof e.id != "string" || e.id.length === 0 || typeof e.version != "string" || e.version.length === 0 || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Binding manifest identity, version, or status is invalid.");
  if (!Rn(e.installation) || e.installation.status !== "incomplete" && e.installation.status !== "installable" || typeof e.installation.reason != "string" || e.installation.reason.length === 0 || !Array.isArray(e.installation.pendingResources) || e.installation.pendingResources.some((n) => typeof n != "string" || n.length === 0))
    throw new TypeError("Binding manifest installation state is invalid.");
  if (!Array.isArray(e.factMappings) || e.factMappings.length === 0 || e.factMappings.some((n) => !Rn(n)))
    throw new TypeError("Binding manifest factMappings must be a nonempty object array.");
  for (const n of si.slice(4))
    if (!(n === "installation" || n === "factMappings") && (!Rn(e[n]) || Object.keys(e[n]).length === 0))
      throw new TypeError(`Binding manifest ${n} must be a nonempty object.`);
  return Uc(structuredClone(e));
}
const Kt = "https://www.w3.org/ns/credentials/v2", wl = "https://vc4qi.example/contexts/rm/1", Lt = "https://vc4qi.example/schemas/rm/1/", xl = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", Sl = BigInt(58);
function Il(e) {
  if (e.length === 0) return new Uint8Array(0);
  let t = 0;
  for (const a of e) {
    if (a !== "1") break;
    t++;
  }
  let n = 0n;
  for (const a of e) {
    const s = xl.indexOf(a);
    if (s === -1) throw new Error(`Invalid base58btc character: '${a}'`);
    n = n * Sl + BigInt(s);
  }
  const r = [];
  for (; n > 0n; )
    r.push(Number(n & 0xffn)), n >>= 8n;
  r.reverse();
  const c = Uint8Array.from(r), i = new Uint8Array(t + c.length);
  return i.set(c, t), i;
}
function Gc(e) {
  if (!e.startsWith("z"))
    throw new Error(`Expected multibase base58btc prefix 'z', got '${e[0]}'`);
  return Il(e.slice(1));
}
const ra = [237, 1], ql = ["revoked", "expires"];
function ye(e, t, n, r = {}) {
  return Object.freeze({ state: e, code: t, reason: n, ...r });
}
function $r(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Al(e) {
  if (typeof e == "string" && e.length > 0) return e;
  if ($r(e) && typeof e.id == "string" && e.id.length > 0) return e.id;
}
function Rl(e) {
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
function jl(e) {
  if (typeof e != "string" || !e.startsWith("z")) return;
  let t;
  try {
    t = Gc(e);
  } catch {
    return;
  }
  if (!(t.length !== 34 || t[0] !== ra[0] || t[1] !== ra[1]))
    return t.slice(2);
}
function $l(e, t, n) {
  const r = Al(e);
  if (r === void 0)
    return ye("not_established", "ISSUER_MISSING", "The credential has no issuer identifier.");
  if (typeof t != "string")
    return ye("contradicted", "MALFORMED_METHOD", "The proof names no verification method.");
  const c = Rl(t);
  if (c === void 0)
    return ye(
      "contradicted",
      "MALFORMED_METHOD",
      `Verification method ${t} is not an absolute URL with a fragment.`
    );
  if (c !== r)
    return ye(
      "contradicted",
      "NOT_ISSUER_CONTROLLER",
      `Verification method ${t} is not in issuer ${r}'s controller document.`
    );
  let i, a;
  try {
    const u = n.resolve(c);
    a = u.digestSRI, i = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(u.bytes));
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
  if (!$r(i))
    return ye(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${c} is not a JSON object.`
    );
  if (i.id !== c)
    return ye(
      "contradicted",
      "CONTROLLER_ID_MISMATCH",
      `Controller document at ${c} identifies itself as ${String(i.id)}.`
    );
  const o = (Array.isArray(i.verificationMethod) ? i.verificationMethod : []).filter((u) => $r(u) && u.id === t);
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
  if (ql.some((u) => Object.hasOwn(p, u)))
    return ye(
      "not_established",
      "METHOD_LIFECYCLE_UNSUPPORTED",
      "Key revocation/expiry metadata is not supported in the initial slice."
    );
  const h = jl(p.publicKeyMultibase);
  if (h === void 0)
    return ye(
      "contradicted",
      "INVALID_PUBLIC_KEY",
      `${t} does not carry an Ed25519 Multikey public key.`
    );
  const g = Array.isArray(i.assertionMethod) ? i.assertionMethod : [];
  return g.includes(t) ? ye(
    "established",
    "AUTHORIZED",
    `${t} is the issuer's Ed25519 assertion key.`,
    { publicKey: h, verificationMethod: t, controllerDocumentDigest: a }
  ) : g.some((u) => $r(u) && u.id === t) ? ye(
    "not_established",
    "EMBEDDED_METHOD_UNSUPPORTED",
    "Embedded assertionMethod entries are not supported; a reference is required."
  ) : ye(
    "contradicted",
    "NOT_ASSERTION_METHOD",
    `${t} is not authorized for assertionMethod.`
  );
}
const ia = ["accept-successor", "require-extension", "none"], _l = ["value-at-most-limit", "value-plus-expanded-uncertainty-at-most-limit"], Pl = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/;
function Ge(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const Me = (e) => typeof e == "string" && e.trim().length > 0, ai = (e) => Array.isArray(e) && e.length > 0 && e.every(Me) && new Set(e).size === e.length;
function Tl(e) {
  if (!Ge(e) || !Me(e.id) || !Me(e.version) || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Reliance profile identity, version or status is invalid.");
  const t = e.binding;
  if (!Ge(t) || !Me(t.id) || !Me(t.version))
    throw new TypeError("Reliance profile must name exactly one binding and version.");
  if (!Array.isArray(e.trustAnchors) || e.trustAnchors.some((p) => !Ge(p) || !Me(p.id) || !ai(p.purposes)))
    throw new TypeError("Reliance profile trustAnchors must list anchors with explicit purposes.");
  const n = e.authority;
  if (!Ge(n) || !ai(n.certificateRoutes) || !Array.isArray(n.globalRestrictions) || !n.globalRestrictions.every(Me) || !Number.isSafeInteger(n.maxRoutes) || n.maxRoutes <= 0)
    throw new TypeError("Reliance profile authority needs certificateRoutes, globalRestrictions and a positive maxRoutes.");
  const r = e.credentialStatus;
  if (!Ge(r) || typeof r.required != "boolean" || !ai(r.purposes) || !Number.isSafeInteger(r.maxAgeSeconds) || r.maxAgeSeconds <= 0)
    throw new TypeError("Reliance profile credentialStatus needs required, purposes and a positive maxAgeSeconds.");
  const c = e.mapping;
  if (!Ge(c) || !ia.includes(c.methodSuccession))
    throw new TypeError(`Reliance profile mapping.methodSuccession must be one of ${ia.join(", ")}.`);
  const i = e.conformity;
  if (!Ge(i) || !Array.isArray(i.requirements) || !Array.isArray(i.decisionRules) || i.requirements.some((p) => !Ge(p) || !Me(p.id) || !Me(p.propertyIri) || !Me(p.quantityKindIri) || !Ge(p.upperLimit) || typeof p.upperLimit.value != "string" || !Pl.test(p.upperLimit.value) || !Me(p.upperLimit.unit)) || i.decisionRules.some((p) => !Ge(p) || !Me(p.id) || !_l.includes(p.acceptWhen)))
    throw new TypeError("Reliance profile conformity needs requirements (id, propertyIri, quantityKindIri, upperLimit) and decisionRules (id, acceptWhen).");
  if (e.bindingRules !== void 0 && !Ge(e.bindingRules))
    throw new TypeError("Reliance profile bindingRules must be an object when present.");
  const a = i.requirements, s = i.decisionRules, o = [...a.map((p) => p.id), ...s.map((p) => p.id)];
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
      required: r.required,
      purposes: Object.freeze([...r.purposes]),
      maxAgeSeconds: r.maxAgeSeconds
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
function oi(e, t) {
  if (new Set(e).size !== e.length)
    throw new TypeError(`${t} must not contain duplicates.`);
}
function fs(e, t) {
  const n = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/.exec(e);
  if (!n)
    throw new TypeError(`${t} must be an ISO 8601 date-time with an explicit offset.`);
  const [, r, c, i, a, s, o] = n, p = n[7], h = Number(r), g = Number(c), u = Number(i), f = Number(a), w = Number(s), x = Number(o), b = /* @__PURE__ */ new Date(0);
  b.setUTCFullYear(h, g - 1, u), b.setUTCHours(0, 0, 0, 0);
  const S = b.getUTCFullYear() !== h || b.getUTCMonth() !== g - 1 || b.getUTCDate() !== u, v = p === "Z" ? null : /^([+-])(\d{2}):(\d{2})$/.exec(p), y = v !== null && (Number(v[2]) > 23 || Number(v[3]) > 59);
  if (h < 1 || S || f > 23 || w > 59 || x > 59 || y || !Number.isFinite(Date.parse(e)))
    throw new TypeError(`${t} must be a valid ISO 8601 date-time.`);
}
function ci(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0)
    throw new TypeError(`${t} must be a positive safe integer.`);
}
function Er(e, t) {
  le(e.id, `${t}.id`), le(e.version, `${t}.version`);
}
function kr(e) {
  return Object.freeze({ id: e.id, version: e.version });
}
function cn(e) {
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
function Cl(e) {
  if (le(e.requestId, "requestId"), le(e.targetId, "targetId"), le(e.purpose, "purpose"), le(e.trustConfigId, "trustConfigId"), Er(e.binding, "binding"), Er(e.profile, "profile"), fs(e.evaluationTime, "evaluationTime"), fs(e.activityTime, "activityTime"), e.selectedClaims.length === 0)
    throw new TypeError("selectedClaims must contain at least one claim.");
  for (const [i, a] of e.selectedClaims.entries())
    le(a.id, `selectedClaims[${i}].id`), le(a.sourcePointer, `selectedClaims[${i}].sourcePointer`);
  oi(e.selectedClaims.map((i) => i.id), "selected claim IDs"), oi(e.selectedClaims.map((i) => i.sourcePointer), "selected claim source pointers");
  for (const [i, a] of e.suppliedEvidence.entries())
    le(a, `suppliedEvidence[${i}]`);
  oi(e.suppliedEvidence, "suppliedEvidence"), ci(e.resolverLimits.maxResources, "resolverLimits.maxResources"), ci(e.resolverLimits.maxDepth, "resolverLimits.maxDepth"), ci(e.resolverLimits.maxBytes, "resolverLimits.maxBytes"), e.conformity && (le(e.conformity.requirementId, "conformity.requirementId"), le(e.conformity.decisionRuleId, "conformity.decisionRuleId"));
  const t = Object.freeze(e.selectedClaims.map((i) => Object.freeze({
    id: i.id,
    sourcePointer: i.sourcePointer
  }))), n = Object.freeze([...e.suppliedEvidence]), r = Object.freeze({ ...e.resolverLimits }), c = e.conformity ? Object.freeze({ ...e.conformity }) : void 0;
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    selectedClaims: t,
    purpose: e.purpose,
    binding: kr(e.binding),
    profile: kr(e.profile),
    trustConfigId: e.trustConfigId,
    evaluationTime: e.evaluationTime,
    activityTime: e.activityTime,
    suppliedEvidence: n,
    resolverLimits: r,
    ...c ? { conformity: c } : {}
  });
}
function El(e, t) {
  if (!Number.isInteger(e.gate) || e.gate < 0 || e.gate > 6)
    throw new TypeError(`trace[${t}].gate must be a canonical gate number 0-6.`);
  le(e.nodeUse, `trace[${t}].nodeUse`), le(e.predicate, `trace[${t}].predicate`), le(e.reason, `trace[${t}].reason`);
  const n = cn({
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
function kl(e, t) {
  if (le(e.uri, `resources[${t}].uri`), !/^sha384-[A-Za-z0-9+/]{64}$/.test(e.digestSRI))
    throw new TypeError(`resources[${t}].digestSRI must be a SHA-384 SRI value.`);
  if (!["static", "artifact", "status"].includes(e.kind) || !["catalog", "supplied"].includes(e.source))
    throw new TypeError(`resources[${t}] has an unsupported kind or source.`);
  return fs(e.observedAt, `resources[${t}].observedAt`), Object.freeze({ ...e });
}
function Vr(e) {
  if (le(e.requestId, "requestId"), le(e.targetId, "targetId"), Er(e.binding, "binding"), Er(e.profile, "profile"), e.artifactVerification.forEach((t, n) => le(t.artifactId, `artifactVerification[${n}].artifactId`)), e.authorization.forEach((t, n) => le(t.claimId, `authorization[${n}].claimId`)), e.support.forEach((t, n) => le(t.obligationId, `support[${n}].obligationId`)), e.conformity.requested)
    le(e.conformity.requirementId, "conformity.requirementId"), le(e.conformity.decisionRuleId, "conformity.decisionRuleId");
  else if (e.conformity.requested !== !1 || e.conformity.execution !== "not_run")
    throw new TypeError("Unrequested conformity must have execution state not_run.");
  if (!["accept", "reject", "not_established"].includes(e.decision))
    throw new TypeError(`Unsupported reliance decision: ${String(e.decision)}.`);
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: kr(e.binding),
    profile: kr(e.profile),
    artifactVerification: Object.freeze(e.artifactVerification.map((t) => cn({
      ...t
    }))),
    authorization: Object.freeze(e.authorization.map((t) => Object.freeze({
      ...cn(t),
      routeWitnessIds: Object.freeze([...t.routeWitnessIds])
    }))),
    support: Object.freeze(e.support.map((t) => Object.freeze({
      ...cn(t),
      witnessIds: Object.freeze([...t.witnessIds])
    }))),
    conformity: e.conformity.requested ? cn({ ...e.conformity }) : Object.freeze({ requested: !1, execution: "not_run" }),
    decision: e.decision,
    trace: Object.freeze((e.trace ?? []).map(El)),
    resources: Object.freeze((e.resources ?? []).map(kl)),
    limitations: Object.freeze([...e.limitations ?? []])
  });
}
function Fc(e, t) {
  if (e.length === 0)
    throw new TypeError(`${t} requires at least one semantic state.`);
  for (const n of e)
    if (!["established", "contradicted", "not_established"].includes(n))
      throw new TypeError(`${t} received unsupported semantic state: ${String(n)}.`);
}
function ve(e) {
  return Fc(e, "semanticAnd"), e.includes("contradicted") ? "contradicted" : e.every((t) => t === "established") ? "established" : "not_established";
}
function yn(e) {
  return Fc(e, "semanticOr"), e.includes("established") ? "established" : e.every((t) => t === "contradicted") ? "contradicted" : "not_established";
}
function $s(e) {
  const t = ve(e);
  return t === "established" ? "accept" : t === "contradicted" ? "reject" : "not_established";
}
var sa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _s(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ml(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var c = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, c.get ? c : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var jn = { exports: {} }, di = {}, dt = {}, $t = {}, li = {}, ui = {}, pi = {}, aa;
function Mr() {
  return aa || (aa = 1, (function(e) {
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
    function c(S, ...v) {
      const y = [S[0]];
      let d = 0;
      for (; d < v.length; )
        s(y, v[d]), y.push(S[++d]);
      return new r(y);
    }
    e._ = c;
    const i = new r("+");
    function a(S, ...v) {
      const y = [f(S[0])];
      let d = 0;
      for (; d < v.length; )
        y.push(i), s(y, v[d]), y.push(i, f(S[++d]));
      return o(y), new r(y);
    }
    e.str = a;
    function s(S, v) {
      v instanceof r ? S.push(...v._items) : v instanceof n ? S.push(v) : S.push(g(v));
    }
    e.addCodeArg = s;
    function o(S) {
      let v = 1;
      for (; v < S.length - 1; ) {
        if (S[v] === i) {
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
    function h(S, v) {
      return v.emptyStr() ? S : S.emptyStr() ? v : a`${S}${v}`;
    }
    e.strConcat = h;
    function g(S) {
      return typeof S == "number" || typeof S == "boolean" || S === null ? S : f(Array.isArray(S) ? S.join(",") : S);
    }
    function u(S) {
      return new r(f(S));
    }
    e.stringify = u;
    function f(S) {
      return JSON.stringify(S).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = f;
    function w(S) {
      return typeof S == "string" && e.IDENTIFIER.test(S) ? new r(`.${S}`) : c`[${S}]`;
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
  })(pi)), pi;
}
var fi = {}, oa;
function ca() {
  return oa || (oa = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Mr();
    class n extends Error {
      constructor(p) {
        super(`CodeGen: "code" for ${p} not defined`), this.value = p.value;
      }
    }
    var r;
    (function(o) {
      o[o.Started = 0] = "Started", o[o.Completed = 1] = "Completed";
    })(r || (e.UsedValueState = r = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class c {
      constructor({ prefixes: p, parent: h } = {}) {
        this._names = {}, this._prefixes = p, this._parent = h;
      }
      toName(p) {
        return p instanceof t.Name ? p : this.name(p);
      }
      name(p) {
        return new t.Name(this._newName(p));
      }
      _newName(p) {
        const h = this._names[p] || this._nameGroup(p);
        return `${p}${h.index++}`;
      }
      _nameGroup(p) {
        var h, g;
        if (!((g = (h = this._parent) === null || h === void 0 ? void 0 : h._prefixes) === null || g === void 0) && g.has(p) || this._prefixes && !this._prefixes.has(p))
          throw new Error(`CodeGen: prefix "${p}" is not allowed in this scope`);
        return this._names[p] = { prefix: p, index: 0 };
      }
    }
    e.Scope = c;
    class i extends t.Name {
      constructor(p, h) {
        super(h), this.prefix = p;
      }
      setValue(p, { property: h, itemIndex: g }) {
        this.value = p, this.scopePath = (0, t._)`.${new t.Name(h)}[${g}]`;
      }
    }
    e.ValueScopeName = i;
    const a = (0, t._)`\n`;
    class s extends c {
      constructor(p) {
        super(p), this._values = {}, this._scope = p.scope, this.opts = { ...p, _n: p.lines ? a : t.nil };
      }
      get() {
        return this._scope;
      }
      name(p) {
        return new i(p, this._newName(p));
      }
      value(p, h) {
        var g;
        if (h.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const u = this.toName(p), { prefix: f } = u, w = (g = h.key) !== null && g !== void 0 ? g : h.ref;
        let x = this._values[f];
        if (x) {
          const v = x.get(w);
          if (v)
            return v;
        } else
          x = this._values[f] = /* @__PURE__ */ new Map();
        x.set(w, u);
        const b = this._scope[f] || (this._scope[f] = []), S = b.length;
        return b[S] = h.ref, u.setValue(h, { property: f, itemIndex: S }), u;
      }
      getValue(p, h) {
        const g = this._values[p];
        if (g)
          return g.get(h);
      }
      scopeRefs(p, h = this._values) {
        return this._reduceValues(h, (g) => {
          if (g.scopePath === void 0)
            throw new Error(`CodeGen: name "${g}" has no value`);
          return (0, t._)`${p}${g.scopePath}`;
        });
      }
      scopeCode(p = this._values, h, g) {
        return this._reduceValues(p, (u) => {
          if (u.value === void 0)
            throw new Error(`CodeGen: name "${u}" has no value`);
          return u.value.code;
        }, h, g);
      }
      _reduceValues(p, h, g = {}, u) {
        let f = t.nil;
        for (const w in p) {
          const x = p[w];
          if (!x)
            continue;
          const b = g[w] = g[w] || /* @__PURE__ */ new Map();
          x.forEach((S) => {
            if (b.has(S))
              return;
            b.set(S, r.Started);
            let v = h(S);
            if (v) {
              const y = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              f = (0, t._)`${f}${y} ${S} = ${v};${this.opts._n}`;
            } else if (v = u?.(S))
              f = (0, t._)`${f}${v}${this.opts._n}`;
            else
              throw new n(S);
            b.set(S, r.Completed);
          });
        }
        return f;
      }
    }
    e.ValueScope = s;
  })(fi)), fi;
}
var da;
function te() {
  return da || (da = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Mr(), n = /* @__PURE__ */ ca();
    var r = /* @__PURE__ */ Mr();
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
    var c = /* @__PURE__ */ ca();
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
    class i {
      optimizeNodes() {
        return this;
      }
      optimizeNames(j, A) {
        return this;
      }
    }
    class a extends i {
      constructor(j, A, T) {
        super(), this.varKind = j, this.name = A, this.rhs = T;
      }
      render({ es5: j, _n: A }) {
        const T = j ? n.varKinds.var : this.varKind, D = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${T} ${this.name}${D};` + A;
      }
      optimizeNames(j, A) {
        if (j[this.name.str])
          return this.rhs && (this.rhs = E(this.rhs, j, A)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class s extends i {
      constructor(j, A, T) {
        super(), this.lhs = j, this.rhs = A, this.sideEffects = T;
      }
      render({ _n: j }) {
        return `${this.lhs} = ${this.rhs};` + j;
      }
      optimizeNames(j, A) {
        if (!(this.lhs instanceof t.Name && !j[this.lhs.str] && !this.sideEffects))
          return this.rhs = E(this.rhs, j, A), this;
      }
      get names() {
        const j = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return $(j, this.rhs);
      }
    }
    class o extends s {
      constructor(j, A, T, D) {
        super(j, T, D), this.op = A;
      }
      render({ _n: j }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + j;
      }
    }
    class p extends i {
      constructor(j) {
        super(), this.label = j, this.names = {};
      }
      render({ _n: j }) {
        return `${this.label}:` + j;
      }
    }
    class h extends i {
      constructor(j) {
        super(), this.label = j, this.names = {};
      }
      render({ _n: j }) {
        return `break${this.label ? ` ${this.label}` : ""};` + j;
      }
    }
    class g extends i {
      constructor(j) {
        super(), this.error = j;
      }
      render({ _n: j }) {
        return `throw ${this.error};` + j;
      }
      get names() {
        return this.error.names;
      }
    }
    class u extends i {
      constructor(j) {
        super(), this.code = j;
      }
      render({ _n: j }) {
        return `${this.code};` + j;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(j, A) {
        return this.code = E(this.code, j, A), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class f extends i {
      constructor(j = []) {
        super(), this.nodes = j;
      }
      render(j) {
        return this.nodes.reduce((A, T) => A + T.render(j), "");
      }
      optimizeNodes() {
        const { nodes: j } = this;
        let A = j.length;
        for (; A--; ) {
          const T = j[A].optimizeNodes();
          Array.isArray(T) ? j.splice(A, 1, ...T) : T ? j[A] = T : j.splice(A, 1);
        }
        return j.length > 0 ? this : void 0;
      }
      optimizeNames(j, A) {
        const { nodes: T } = this;
        let D = T.length;
        for (; D--; ) {
          const H = T[D];
          H.optimizeNames(j, A) || (z(j, H.names), T.splice(D, 1));
        }
        return T.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((j, A) => O(j, A.names), {});
      }
    }
    class w extends f {
      render(j) {
        return "{" + j._n + super.render(j) + "}" + j._n;
      }
    }
    class x extends f {
    }
    class b extends w {
    }
    b.kind = "else";
    class S extends w {
      constructor(j, A) {
        super(A), this.condition = j;
      }
      render(j) {
        let A = `if(${this.condition})` + super.render(j);
        return this.else && (A += "else " + this.else.render(j)), A;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const j = this.condition;
        if (j === !0)
          return this.nodes;
        let A = this.else;
        if (A) {
          const T = A.optimizeNodes();
          A = this.else = Array.isArray(T) ? new b(T) : T;
        }
        if (A)
          return j === !1 ? A instanceof S ? A : A.nodes : this.nodes.length ? this : new S(P(j), A instanceof S ? [A] : A.nodes);
        if (!(j === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(j, A) {
        var T;
        if (this.else = (T = this.else) === null || T === void 0 ? void 0 : T.optimizeNames(j, A), !!(super.optimizeNames(j, A) || this.else))
          return this.condition = E(this.condition, j, A), this;
      }
      get names() {
        const j = super.names;
        return $(j, this.condition), this.else && O(j, this.else.names), j;
      }
    }
    S.kind = "if";
    class v extends w {
    }
    v.kind = "for";
    class y extends v {
      constructor(j) {
        super(), this.iteration = j;
      }
      render(j) {
        return `for(${this.iteration})` + super.render(j);
      }
      optimizeNames(j, A) {
        if (super.optimizeNames(j, A))
          return this.iteration = E(this.iteration, j, A), this;
      }
      get names() {
        return O(super.names, this.iteration.names);
      }
    }
    class d extends v {
      constructor(j, A, T, D) {
        super(), this.varKind = j, this.name = A, this.from = T, this.to = D;
      }
      render(j) {
        const A = j.es5 ? n.varKinds.var : this.varKind, { name: T, from: D, to: H } = this;
        return `for(${A} ${T}=${D}; ${T}<${H}; ${T}++)` + super.render(j);
      }
      get names() {
        const j = $(super.names, this.from);
        return $(j, this.to);
      }
    }
    class l extends v {
      constructor(j, A, T, D) {
        super(), this.loop = j, this.varKind = A, this.name = T, this.iterable = D;
      }
      render(j) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(j);
      }
      optimizeNames(j, A) {
        if (super.optimizeNames(j, A))
          return this.iterable = E(this.iterable, j, A), this;
      }
      get names() {
        return O(super.names, this.iterable.names);
      }
    }
    class m extends w {
      constructor(j, A, T) {
        super(), this.name = j, this.args = A, this.async = T;
      }
      render(j) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(j);
      }
    }
    m.kind = "func";
    class I extends f {
      render(j) {
        return "return " + super.render(j);
      }
    }
    I.kind = "return";
    class q extends w {
      render(j) {
        let A = "try" + super.render(j);
        return this.catch && (A += this.catch.render(j)), this.finally && (A += this.finally.render(j)), A;
      }
      optimizeNodes() {
        var j, A;
        return super.optimizeNodes(), (j = this.catch) === null || j === void 0 || j.optimizeNodes(), (A = this.finally) === null || A === void 0 || A.optimizeNodes(), this;
      }
      optimizeNames(j, A) {
        var T, D;
        return super.optimizeNames(j, A), (T = this.catch) === null || T === void 0 || T.optimizeNames(j, A), (D = this.finally) === null || D === void 0 || D.optimizeNames(j, A), this;
      }
      get names() {
        const j = super.names;
        return this.catch && O(j, this.catch.names), this.finally && O(j, this.finally.names), j;
      }
    }
    class _ extends w {
      constructor(j) {
        super(), this.error = j;
      }
      render(j) {
        return `catch(${this.error})` + super.render(j);
      }
    }
    _.kind = "catch";
    class C extends w {
      render(j) {
        return "finally" + super.render(j);
      }
    }
    C.kind = "finally";
    class R {
      constructor(j, A = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...A, _n: A.lines ? `
` : "" }, this._extScope = j, this._scope = new n.Scope({ parent: j }), this._nodes = [new x()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(j) {
        return this._scope.name(j);
      }
      // reserves unique name in the external scope
      scopeName(j) {
        return this._extScope.name(j);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(j, A) {
        const T = this._extScope.value(j, A);
        return (this._values[T.prefix] || (this._values[T.prefix] = /* @__PURE__ */ new Set())).add(T), T;
      }
      getScopeValue(j, A) {
        return this._extScope.getValue(j, A);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(j) {
        return this._extScope.scopeRefs(j, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(j, A, T, D) {
        const H = this._scope.toName(A);
        return T !== void 0 && D && (this._constants[H.str] = T), this._leafNode(new a(j, H, T)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(j, A, T) {
        return this._def(n.varKinds.const, j, A, T);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(j, A, T) {
        return this._def(n.varKinds.let, j, A, T);
      }
      // `var` declaration with optional assignment
      var(j, A, T) {
        return this._def(n.varKinds.var, j, A, T);
      }
      // assignment code
      assign(j, A, T) {
        return this._leafNode(new s(j, A, T));
      }
      // `+=` code
      add(j, A) {
        return this._leafNode(new o(j, e.operators.ADD, A));
      }
      // appends passed SafeExpr to code or executes Block
      code(j) {
        return typeof j == "function" ? j() : j !== t.nil && this._leafNode(new u(j)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...j) {
        const A = ["{"];
        for (const [T, D] of j)
          A.length > 1 && A.push(","), A.push(T), (T !== D || this.opts.es5) && (A.push(":"), (0, t.addCodeArg)(A, D));
        return A.push("}"), new t._Code(A);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(j, A, T) {
        if (this._blockNode(new S(j)), A && T)
          this.code(A).else().code(T).endIf();
        else if (A)
          this.code(A).endIf();
        else if (T)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(j) {
        return this._elseNode(new S(j));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new b());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(S, b);
      }
      _for(j, A) {
        return this._blockNode(j), A && this.code(A).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(j, A) {
        return this._for(new y(j), A);
      }
      // `for` statement for a range of values
      forRange(j, A, T, D, H = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Q = this._scope.toName(j);
        return this._for(new d(H, Q, A, T), () => D(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(j, A, T, D = n.varKinds.const) {
        const H = this._scope.toName(j);
        if (this.opts.es5) {
          const Q = A instanceof t.Name ? A : this.var("_arr", A);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (J) => {
            this.var(H, (0, t._)`${Q}[${J}]`), T(H);
          });
        }
        return this._for(new l("of", D, H, A), () => T(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(j, A, T, D = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(j, (0, t._)`Object.keys(${A})`, T);
        const H = this._scope.toName(j);
        return this._for(new l("in", D, H, A), () => T(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(v);
      }
      // `label` statement
      label(j) {
        return this._leafNode(new p(j));
      }
      // `break` statement
      break(j) {
        return this._leafNode(new h(j));
      }
      // `return` statement
      return(j) {
        const A = new I();
        if (this._blockNode(A), this.code(j), A.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(I);
      }
      // `try` statement
      try(j, A, T) {
        if (!A && !T)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const D = new q();
        if (this._blockNode(D), this.code(j), A) {
          const H = this.name("e");
          this._currNode = D.catch = new _(H), A(H);
        }
        return T && (this._currNode = D.finally = new C(), this.code(T)), this._endBlockNode(_, C);
      }
      // `throw` statement
      throw(j) {
        return this._leafNode(new g(j));
      }
      // start self-balancing block
      block(j, A) {
        return this._blockStarts.push(this._nodes.length), j && this.code(j).endBlock(A), this;
      }
      // end the current self-balancing block
      endBlock(j) {
        const A = this._blockStarts.pop();
        if (A === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const T = this._nodes.length - A;
        if (T < 0 || j !== void 0 && T !== j)
          throw new Error(`CodeGen: wrong number of nodes: ${T} vs ${j} expected`);
        return this._nodes.length = A, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(j, A = t.nil, T, D) {
        return this._blockNode(new m(j, A, T)), D && this.code(D).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(m);
      }
      optimize(j = 1) {
        for (; j-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(j) {
        return this._currNode.nodes.push(j), this;
      }
      _blockNode(j) {
        this._currNode.nodes.push(j), this._nodes.push(j);
      }
      _endBlockNode(j, A) {
        const T = this._currNode;
        if (T instanceof j || A && T instanceof A)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${A ? `${j.kind}/${A.kind}` : j.kind}"`);
      }
      _elseNode(j) {
        const A = this._currNode;
        if (!(A instanceof S))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = A.else = j, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const j = this._nodes;
        return j[j.length - 1];
      }
      set _currNode(j) {
        const A = this._nodes;
        A[A.length - 1] = j;
      }
    }
    e.CodeGen = R;
    function O(N, j) {
      for (const A in j)
        N[A] = (N[A] || 0) + (j[A] || 0);
      return N;
    }
    function $(N, j) {
      return j instanceof t._CodeOrName ? O(N, j.names) : N;
    }
    function E(N, j, A) {
      if (N instanceof t.Name)
        return T(N);
      if (!D(N))
        return N;
      return new t._Code(N._items.reduce((H, Q) => (Q instanceof t.Name && (Q = T(Q)), Q instanceof t._Code ? H.push(...Q._items) : H.push(Q), H), []));
      function T(H) {
        const Q = A[H.str];
        return Q === void 0 || j[H.str] !== 1 ? H : (delete j[H.str], Q);
      }
      function D(H) {
        return H instanceof t._Code && H._items.some((Q) => Q instanceof t.Name && j[Q.str] === 1 && A[Q.str] !== void 0);
      }
    }
    function z(N, j) {
      for (const A in j)
        N[A] = (N[A] || 0) - (j[A] || 0);
    }
    function P(N) {
      return typeof N == "boolean" || typeof N == "number" || N === null ? !N : (0, t._)`!${V(N)}`;
    }
    e.not = P;
    const Z = M(e.operators.AND);
    function L(...N) {
      return N.reduce(Z);
    }
    e.and = L;
    const F = M(e.operators.OR);
    function k(...N) {
      return N.reduce(F);
    }
    e.or = k;
    function M(N) {
      return (j, A) => j === t.nil ? A : A === t.nil ? j : (0, t._)`${V(j)} ${N} ${V(A)}`;
    }
    function V(N) {
      return N instanceof t.Name ? N : (0, t._)`(${N})`;
    }
  })(ui)), ui;
}
var ne = {}, la;
function re() {
  if (la) return ne;
  la = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.checkStrictMode = ne.getErrorPath = ne.Type = ne.useFunc = ne.setEvaluated = ne.evaluatedPropsToName = ne.mergeEvaluated = ne.eachItem = ne.unescapeJsonPointer = ne.escapeJsonPointer = ne.escapeFragment = ne.unescapeFragment = ne.schemaRefOrVal = ne.schemaHasRulesButRef = ne.schemaHasRules = ne.checkUnknownRules = ne.alwaysValidSchema = ne.toHash = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Mr();
  function n(l) {
    const m = {};
    for (const I of l)
      m[I] = !0;
    return m;
  }
  ne.toHash = n;
  function r(l, m) {
    return typeof m == "boolean" ? m : Object.keys(m).length === 0 ? !0 : (c(l, m), !i(m, l.self.RULES.all));
  }
  ne.alwaysValidSchema = r;
  function c(l, m = l.schema) {
    const { opts: I, self: q } = l;
    if (!I.strictSchema || typeof m == "boolean")
      return;
    const _ = q.RULES.keywords;
    for (const C in m)
      _[C] || d(l, `unknown keyword: "${C}"`);
  }
  ne.checkUnknownRules = c;
  function i(l, m) {
    if (typeof l == "boolean")
      return !l;
    for (const I in l)
      if (m[I])
        return !0;
    return !1;
  }
  ne.schemaHasRules = i;
  function a(l, m) {
    if (typeof l == "boolean")
      return !l;
    for (const I in l)
      if (I !== "$ref" && m.all[I])
        return !0;
    return !1;
  }
  ne.schemaHasRulesButRef = a;
  function s({ topSchemaRef: l, schemaPath: m }, I, q, _) {
    if (!_) {
      if (typeof I == "number" || typeof I == "boolean")
        return I;
      if (typeof I == "string")
        return (0, e._)`${I}`;
    }
    return (0, e._)`${l}${m}${(0, e.getProperty)(q)}`;
  }
  ne.schemaRefOrVal = s;
  function o(l) {
    return g(decodeURIComponent(l));
  }
  ne.unescapeFragment = o;
  function p(l) {
    return encodeURIComponent(h(l));
  }
  ne.escapeFragment = p;
  function h(l) {
    return typeof l == "number" ? `${l}` : l.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ne.escapeJsonPointer = h;
  function g(l) {
    return l.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ne.unescapeJsonPointer = g;
  function u(l, m) {
    if (Array.isArray(l))
      for (const I of l)
        m(I);
    else
      m(l);
  }
  ne.eachItem = u;
  function f({ mergeNames: l, mergeToName: m, mergeValues: I, resultToName: q }) {
    return (_, C, R, O) => {
      const $ = R === void 0 ? C : R instanceof e.Name ? (C instanceof e.Name ? l(_, C, R) : m(_, C, R), R) : C instanceof e.Name ? (m(_, R, C), C) : I(C, R);
      return O === e.Name && !($ instanceof e.Name) ? q(_, $) : $;
    };
  }
  ne.mergeEvaluated = {
    props: f({
      mergeNames: (l, m, I) => l.if((0, e._)`${I} !== true && ${m} !== undefined`, () => {
        l.if((0, e._)`${m} === true`, () => l.assign(I, !0), () => l.assign(I, (0, e._)`${I} || {}`).code((0, e._)`Object.assign(${I}, ${m})`));
      }),
      mergeToName: (l, m, I) => l.if((0, e._)`${I} !== true`, () => {
        m === !0 ? l.assign(I, !0) : (l.assign(I, (0, e._)`${I} || {}`), x(l, I, m));
      }),
      mergeValues: (l, m) => l === !0 ? !0 : { ...l, ...m },
      resultToName: w
    }),
    items: f({
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
    Object.keys(I).forEach((q) => l.assign((0, e._)`${m}${(0, e.getProperty)(q)}`, !0));
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
      const q = m === v.Num;
      return I ? q ? (0, e._)`"[" + ${l} + "]"` : (0, e._)`"['" + ${l} + "']"` : q ? (0, e._)`"/" + ${l}` : (0, e._)`"/" + ${l}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return I ? (0, e.getProperty)(l).toString() : "/" + h(l);
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
var $n = {}, ua;
function Qe() {
  if (ua) return $n;
  ua = 1, Object.defineProperty($n, "__esModule", { value: !0 });
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
  return $n.default = t, $n;
}
var pa;
function Ur() {
  return pa || (pa = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ re(), r = /* @__PURE__ */ Qe();
    e.keywordError = {
      message: ({ keyword: b }) => (0, t.str)`must pass "${b}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: b, schemaType: S }) => S ? (0, t.str)`"${b}" keyword must be ${S} ($data)` : (0, t.str)`"${b}" keyword is invalid ($data)`
    };
    function c(b, S = e.keywordError, v, y) {
      const { it: d } = b, { gen: l, compositeRule: m, allErrors: I } = d, q = g(b, S, v);
      y ?? (m || I) ? o(l, q) : p(d, (0, t._)`[${q}]`);
    }
    e.reportError = c;
    function i(b, S = e.keywordError, v) {
      const { it: y } = b, { gen: d, compositeRule: l, allErrors: m } = y, I = g(b, S, v);
      o(d, I), l || m || p(y, r.default.vErrors);
    }
    e.reportExtraError = i;
    function a(b, S) {
      b.assign(r.default.errors, S), b.if((0, t._)`${r.default.vErrors} !== null`, () => b.if(S, () => b.assign((0, t._)`${r.default.vErrors}.length`, S), () => b.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = a;
    function s({ gen: b, keyword: S, schemaValue: v, data: y, errsCount: d, it: l }) {
      if (d === void 0)
        throw new Error("ajv implementation error");
      const m = b.name("err");
      b.forRange("i", d, r.default.errors, (I) => {
        b.const(m, (0, t._)`${r.default.vErrors}[${I}]`), b.if((0, t._)`${m}.instancePath === undefined`, () => b.assign((0, t._)`${m}.instancePath`, (0, t.strConcat)(r.default.instancePath, l.errorPath))), b.assign((0, t._)`${m}.schemaPath`, (0, t.str)`${l.errSchemaPath}/${S}`), l.opts.verbose && (b.assign((0, t._)`${m}.schema`, v), b.assign((0, t._)`${m}.data`, y));
      });
    }
    e.extendErrors = s;
    function o(b, S) {
      const v = b.const("err", S);
      b.if((0, t._)`${r.default.vErrors} === null`, () => b.assign(r.default.vErrors, (0, t._)`[${v}]`), (0, t._)`${r.default.vErrors}.push(${v})`), b.code((0, t._)`${r.default.errors}++`);
    }
    function p(b, S) {
      const { gen: v, validateName: y, schemaEnv: d } = b;
      d.$async ? v.throw((0, t._)`new ${b.ValidationError}(${S})`) : (v.assign((0, t._)`${y}.errors`, S), v.return(!1));
    }
    const h = {
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
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, v)];
    }
    function w({ keyword: b, it: { errSchemaPath: S } }, { schemaPath: v, parentSchema: y }) {
      let d = y ? S : (0, t.str)`${S}/${b}`;
      return v && (d = (0, t.str)`${d}${(0, n.getErrorPath)(v, n.Type.Str)}`), [h.schemaPath, d];
    }
    function x(b, { params: S, message: v }, y) {
      const { keyword: d, data: l, schemaValue: m, it: I } = b, { opts: q, propertyName: _, topSchemaRef: C, schemaPath: R } = I;
      y.push([h.keyword, d], [h.params, typeof S == "function" ? S(b) : S || (0, t._)`{}`]), q.messages && y.push([h.message, typeof v == "function" ? v(b) : v]), q.verbose && y.push([h.schema, m], [h.parentSchema, (0, t._)`${C}${R}`], [r.default.data, l]), _ && y.push([h.propertyName, _]);
    }
  })(li)), li;
}
var fa;
function Ol() {
  if (fa) return $t;
  fa = 1, Object.defineProperty($t, "__esModule", { value: !0 }), $t.boolOrEmptySchema = $t.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Ur(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ Qe(), r = {
    message: "boolean schema is false"
  };
  function c(s) {
    const { gen: o, schema: p, validateName: h } = s;
    p === !1 ? a(s, !1) : typeof p == "object" && p.$async === !0 ? o.return(n.default.data) : (o.assign((0, t._)`${h}.errors`, null), o.return(!0));
  }
  $t.topBoolOrEmptySchema = c;
  function i(s, o) {
    const { gen: p, schema: h } = s;
    h === !1 ? (p.var(o, !1), a(s)) : p.var(o, !0);
  }
  $t.boolOrEmptySchema = i;
  function a(s, o) {
    const { gen: p, data: h } = s, g = {
      gen: p,
      keyword: "false schema",
      data: h,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: s
    };
    (0, e.reportError)(g, r, void 0, o);
  }
  return $t;
}
var ge = {}, _t = {}, ha;
function Bc() {
  if (ha) return _t;
  ha = 1, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.getRules = _t.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(c) {
    return typeof c == "string" && t.has(c);
  }
  _t.isJSONType = n;
  function r() {
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
  return _t.getRules = r, _t;
}
var lt = {}, ma;
function Zc() {
  if (ma) return lt;
  ma = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.shouldUseRule = lt.shouldUseGroup = lt.schemaHasRulesForType = void 0;
  function e({ schema: r, self: c }, i) {
    const a = c.RULES.types[i];
    return a && a !== !0 && t(r, a);
  }
  lt.schemaHasRulesForType = e;
  function t(r, c) {
    return c.rules.some((i) => n(r, i));
  }
  lt.shouldUseGroup = t;
  function n(r, c) {
    var i;
    return r[c.keyword] !== void 0 || ((i = c.definition.implements) === null || i === void 0 ? void 0 : i.some((a) => r[a] !== void 0));
  }
  return lt.shouldUseRule = n, lt;
}
var ya;
function Or() {
  if (ya) return ge;
  ya = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.reportTypeError = ge.checkDataTypes = ge.checkDataType = ge.coerceAndCheckDataType = ge.getJSONTypes = ge.getSchemaTypes = ge.DataType = void 0;
  const e = /* @__PURE__ */ Bc(), t = /* @__PURE__ */ Zc(), n = /* @__PURE__ */ Ur(), r = /* @__PURE__ */ te(), c = /* @__PURE__ */ re();
  var i;
  (function(v) {
    v[v.Correct = 0] = "Correct", v[v.Wrong = 1] = "Wrong";
  })(i || (ge.DataType = i = {}));
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
    const { gen: d, data: l, opts: m } = v, I = h(y, m.coerceTypes), q = y.length > 0 && !(I.length === 0 && y.length === 1 && (0, t.schemaHasRulesForType)(v, y[0]));
    if (q) {
      const _ = w(y, l, m.strictNumbers, i.Wrong);
      d.if(_, () => {
        I.length ? g(v, y, I) : b(v);
      });
    }
    return q;
  }
  ge.coerceAndCheckDataType = o;
  const p = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function h(v, y) {
    return y ? v.filter((d) => p.has(d) || y === "array" && d === "array") : [];
  }
  function g(v, y, d) {
    const { gen: l, data: m, opts: I } = v, q = l.let("dataType", (0, r._)`typeof ${m}`), _ = l.let("coerced", (0, r._)`undefined`);
    I.coerceTypes === "array" && l.if((0, r._)`${q} == 'object' && Array.isArray(${m}) && ${m}.length == 1`, () => l.assign(m, (0, r._)`${m}[0]`).assign(q, (0, r._)`typeof ${m}`).if(w(y, m, I.strictNumbers), () => l.assign(_, m))), l.if((0, r._)`${_} !== undefined`);
    for (const R of d)
      (p.has(R) || R === "array" && I.coerceTypes === "array") && C(R);
    l.else(), b(v), l.endIf(), l.if((0, r._)`${_} !== undefined`, () => {
      l.assign(m, _), u(v, _);
    });
    function C(R) {
      switch (R) {
        case "string":
          l.elseIf((0, r._)`${q} == "number" || ${q} == "boolean"`).assign(_, (0, r._)`"" + ${m}`).elseIf((0, r._)`${m} === null`).assign(_, (0, r._)`""`);
          return;
        case "number":
          l.elseIf((0, r._)`${q} == "boolean" || ${m} === null
              || (${q} == "string" && ${m} && ${m} == +${m})`).assign(_, (0, r._)`+${m}`);
          return;
        case "integer":
          l.elseIf((0, r._)`${q} === "boolean" || ${m} === null
              || (${q} === "string" && ${m} && ${m} == +${m} && !(${m} % 1))`).assign(_, (0, r._)`+${m}`);
          return;
        case "boolean":
          l.elseIf((0, r._)`${m} === "false" || ${m} === 0 || ${m} === null`).assign(_, !1).elseIf((0, r._)`${m} === "true" || ${m} === 1`).assign(_, !0);
          return;
        case "null":
          l.elseIf((0, r._)`${m} === "" || ${m} === 0 || ${m} === false`), l.assign(_, null);
          return;
        case "array":
          l.elseIf((0, r._)`${q} === "string" || ${q} === "number"
              || ${q} === "boolean" || ${m} === null`).assign(_, (0, r._)`[${m}]`);
      }
    }
  }
  function u({ gen: v, parentData: y, parentDataProperty: d }, l) {
    v.if((0, r._)`${y} !== undefined`, () => v.assign((0, r._)`${y}[${d}]`, l));
  }
  function f(v, y, d, l = i.Correct) {
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
        I = q((0, r._)`!(${y} % 1) && !isNaN(${y})`);
        break;
      case "number":
        I = q();
        break;
      default:
        return (0, r._)`typeof ${y} ${m} ${v}`;
    }
    return l === i.Correct ? I : (0, r.not)(I);
    function q(_ = r.nil) {
      return (0, r.and)((0, r._)`typeof ${y} == "number"`, _, d ? (0, r._)`isFinite(${y})` : r.nil);
    }
  }
  ge.checkDataType = f;
  function w(v, y, d, l) {
    if (v.length === 1)
      return f(v[0], y, d, l);
    let m;
    const I = (0, c.toHash)(v);
    if (I.array && I.object) {
      const q = (0, r._)`typeof ${y} != "object"`;
      m = I.null ? q : (0, r._)`!${y} || ${q}`, delete I.null, delete I.array, delete I.object;
    } else
      m = r.nil;
    I.number && delete I.integer;
    for (const q in I)
      m = (0, r.and)(m, f(q, y, d, l));
    return m;
  }
  ge.checkDataTypes = w;
  const x = {
    message: ({ schema: v }) => `must be ${v}`,
    params: ({ schema: v, schemaValue: y }) => typeof v == "string" ? (0, r._)`{type: ${v}}` : (0, r._)`{type: ${y}}`
  };
  function b(v) {
    const y = S(v);
    (0, n.reportError)(y, x);
  }
  ge.reportTypeError = b;
  function S(v) {
    const { gen: y, data: d, schema: l } = v, m = (0, c.schemaRefOrVal)(v, l, "type");
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
  return ge;
}
var tn = {}, ga;
function Ll() {
  if (ga) return tn;
  ga = 1, Object.defineProperty(tn, "__esModule", { value: !0 }), tn.assignDefaults = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re();
  function n(c, i) {
    const { properties: a, items: s } = c.schema;
    if (i === "object" && a)
      for (const o in a)
        r(c, o, a[o].default);
    else i === "array" && Array.isArray(s) && s.forEach((o, p) => r(c, p, o.default));
  }
  tn.assignDefaults = n;
  function r(c, i, a) {
    const { gen: s, compositeRule: o, data: p, opts: h } = c;
    if (a === void 0)
      return;
    const g = (0, e._)`${p}${(0, e.getProperty)(i)}`;
    if (o) {
      (0, t.checkStrictMode)(c, `default is ignored for: ${g}`);
      return;
    }
    let u = (0, e._)`${g} === undefined`;
    h.useDefaults === "empty" && (u = (0, e._)`${u} || ${g} === null || ${g} === ""`), s.if(u, (0, e._)`${g} = ${(0, e.stringify)(a)}`);
  }
  return tn;
}
var Fe = {}, ae = {}, va;
function We() {
  if (va) return ae;
  va = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.validateUnion = ae.validateArray = ae.usePattern = ae.callValidateCode = ae.schemaProperties = ae.allSchemaProperties = ae.noPropertyInData = ae.propertyInData = ae.isOwnProperty = ae.hasPropFunc = ae.reportMissingProp = ae.checkMissingProp = ae.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ Qe(), r = /* @__PURE__ */ re();
  function c(v, y) {
    const { gen: d, data: l, it: m } = v;
    d.if(h(d, l, y, m.opts.ownProperties), () => {
      v.setParams({ missingProperty: (0, e._)`${y}` }, !0), v.error();
    });
  }
  ae.checkReportMissingProp = c;
  function i({ gen: v, data: y, it: { opts: d } }, l, m) {
    return (0, e.or)(...l.map((I) => (0, e.and)(h(v, y, I, d.ownProperties), (0, e._)`${m} = ${I}`)));
  }
  ae.checkMissingProp = i;
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
    const m = (0, e._)`${y}${(0, e.getProperty)(d)} !== undefined`;
    return l ? (0, e._)`${m} && ${o(v, y, d)}` : m;
  }
  ae.propertyInData = p;
  function h(v, y, d, l) {
    const m = (0, e._)`${y}${(0, e.getProperty)(d)} === undefined`;
    return l ? (0, e.or)(m, (0, e.not)(o(v, y, d))) : m;
  }
  ae.noPropertyInData = h;
  function g(v) {
    return v ? Object.keys(v).filter((y) => y !== "__proto__") : [];
  }
  ae.allSchemaProperties = g;
  function u(v, y) {
    return g(y).filter((d) => !(0, t.alwaysValidSchema)(v, y[d]));
  }
  ae.schemaProperties = u;
  function f({ schemaCode: v, data: y, it: { gen: d, topSchemaRef: l, schemaPath: m, errorPath: I }, it: q }, _, C, R) {
    const O = R ? (0, e._)`${v}, ${y}, ${l}${m}` : y, $ = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, I)],
      [n.default.parentData, q.parentData],
      [n.default.parentDataProperty, q.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    q.opts.dynamicRef && $.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const E = (0, e._)`${O}, ${d.object(...$)}`;
    return C !== e.nil ? (0, e._)`${_}.call(${C}, ${E})` : (0, e._)`${_}(${E})`;
  }
  ae.callValidateCode = f;
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
      const _ = y.let("valid", !0);
      return q(() => y.assign(_, !1)), _;
    }
    return y.var(I, !0), q(() => y.break()), I;
    function q(_) {
      const C = y.const("len", (0, e._)`${d}.length`);
      y.forRange("i", 0, C, (R) => {
        v.subschema({
          keyword: l,
          dataProp: R,
          dataPropType: t.Type.Num
        }, I), y.if((0, e.not)(I), _);
      });
    }
  }
  ae.validateArray = b;
  function S(v) {
    const { gen: y, schema: d, keyword: l, it: m } = v;
    if (!Array.isArray(d))
      throw new Error("ajv implementation error");
    if (d.some((C) => (0, t.alwaysValidSchema)(m, C)) && !m.opts.unevaluated)
      return;
    const q = y.let("valid", !1), _ = y.name("_valid");
    y.block(() => d.forEach((C, R) => {
      const O = v.subschema({
        keyword: l,
        schemaProp: R,
        compositeRule: !0
      }, _);
      y.assign(q, (0, e._)`${q} || ${_}`), v.mergeValidEvaluated(O, _) || y.if((0, e.not)(q));
    })), v.result(q, () => v.reset(), () => v.error(!0));
  }
  return ae.validateUnion = S, ae;
}
var ba;
function Nl() {
  if (ba) return Fe;
  ba = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.validateKeywordUsage = Fe.validSchemaType = Fe.funcKeywordCode = Fe.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Qe(), n = /* @__PURE__ */ We(), r = /* @__PURE__ */ Ur();
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
  function i(u, f) {
    var w;
    const { gen: x, keyword: b, schema: S, parentSchema: v, $data: y, it: d } = u;
    o(d, f);
    const l = !y && f.compile ? f.compile.call(d.self, S, v, d) : f.validate, m = p(x, b, l), I = x.let("valid");
    u.block$data(I, q), u.ok((w = f.valid) !== null && w !== void 0 ? w : I);
    function q() {
      if (f.errors === !1)
        R(), f.modifying && a(u), O(() => u.error());
      else {
        const $ = f.async ? _() : C();
        f.modifying && a(u), O(() => s(u, $));
      }
    }
    function _() {
      const $ = x.let("ruleErrs", null);
      return x.try(() => R((0, e._)`await `), (E) => x.assign(I, !1).if((0, e._)`${E} instanceof ${d.ValidationError}`, () => x.assign($, (0, e._)`${E}.errors`), () => x.throw(E))), $;
    }
    function C() {
      const $ = (0, e._)`${m}.errors`;
      return x.assign($, null), R(e.nil), $;
    }
    function R($ = f.async ? (0, e._)`await ` : e.nil) {
      const E = d.opts.passContext ? t.default.this : t.default.self, z = !("compile" in f && !y || f.schema === !1);
      x.assign(I, (0, e._)`${$}${(0, n.callValidateCode)(u, m, E, z)}`, f.modifying);
    }
    function O($) {
      var E;
      x.if((0, e.not)((E = f.valid) !== null && E !== void 0 ? E : I), $);
    }
  }
  Fe.funcKeywordCode = i;
  function a(u) {
    const { gen: f, data: w, it: x } = u;
    f.if(x.parentData, () => f.assign(w, (0, e._)`${x.parentData}[${x.parentDataProperty}]`));
  }
  function s(u, f) {
    const { gen: w } = u;
    w.if((0, e._)`Array.isArray(${f})`, () => {
      w.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${f} : ${t.default.vErrors}.concat(${f})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(u);
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
  function h(u, f, w = !1) {
    return !f.length || f.some((x) => x === "array" ? Array.isArray(u) : x === "object" ? u && typeof u == "object" && !Array.isArray(u) : typeof u == x || w && typeof u > "u");
  }
  Fe.validSchemaType = h;
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
var ut = {}, wa;
function Dl() {
  if (wa) return ut;
  wa = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.extendSubschemaMode = ut.extendSubschemaData = ut.getSubschema = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re();
  function n(i, { keyword: a, schemaProp: s, schema: o, schemaPath: p, errSchemaPath: h, topSchemaRef: g }) {
    if (a !== void 0 && o !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (a !== void 0) {
      const u = i.schema[a];
      return s === void 0 ? {
        schema: u,
        schemaPath: (0, e._)`${i.schemaPath}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${i.errSchemaPath}/${a}`
      } : {
        schema: u[s],
        schemaPath: (0, e._)`${i.schemaPath}${(0, e.getProperty)(a)}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${i.errSchemaPath}/${a}/${(0, t.escapeFragment)(s)}`
      };
    }
    if (o !== void 0) {
      if (p === void 0 || h === void 0 || g === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: o,
        schemaPath: p,
        topSchemaRef: g,
        errSchemaPath: h
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  ut.getSubschema = n;
  function r(i, a, { dataProp: s, dataPropType: o, data: p, dataTypes: h, propertyName: g }) {
    if (p !== void 0 && s !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: u } = a;
    if (s !== void 0) {
      const { errorPath: w, dataPathArr: x, opts: b } = a, S = u.let("data", (0, e._)`${a.data}${(0, e.getProperty)(s)}`, !0);
      f(S), i.errorPath = (0, e.str)`${w}${(0, t.getErrorPath)(s, o, b.jsPropertySyntax)}`, i.parentDataProperty = (0, e._)`${s}`, i.dataPathArr = [...x, i.parentDataProperty];
    }
    if (p !== void 0) {
      const w = p instanceof e.Name ? p : u.let("data", p, !0);
      f(w), g !== void 0 && (i.propertyName = g);
    }
    h && (i.dataTypes = h);
    function f(w) {
      i.data = w, i.dataLevel = a.dataLevel + 1, i.dataTypes = [], a.definedProperties = /* @__PURE__ */ new Set(), i.parentData = a.data, i.dataNames = [...a.dataNames, w];
    }
  }
  ut.extendSubschemaData = r;
  function c(i, { jtdDiscriminator: a, jtdMetadata: s, compositeRule: o, createErrors: p, allErrors: h }) {
    o !== void 0 && (i.compositeRule = o), p !== void 0 && (i.createErrors = p), h !== void 0 && (i.allErrors = h), i.jtdDiscriminator = a, i.jtdMetadata = s;
  }
  return ut.extendSubschemaMode = c, ut;
}
var Ie = {}, hi, xa;
function Hc() {
  return xa || (xa = 1, hi = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var r, c, i;
      if (Array.isArray(t)) {
        if (r = t.length, r != n.length) return !1;
        for (c = r; c-- !== 0; )
          if (!e(t[c], n[c])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (i = Object.keys(t), r = i.length, r !== Object.keys(n).length) return !1;
      for (c = r; c-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, i[c])) return !1;
      for (c = r; c-- !== 0; ) {
        var a = i[c];
        if (!e(t[a], n[a])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), hi;
}
var mi = { exports: {} }, Sa;
function zl() {
  if (Sa) return mi.exports;
  Sa = 1;
  var e = mi.exports = function(r, c, i) {
    typeof c == "function" && (i = c, c = {}), i = c.cb || i;
    var a = typeof i == "function" ? i : i.pre || function() {
    }, s = i.post || function() {
    };
    t(c, a, s, r, "", r);
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
  function t(r, c, i, a, s, o, p, h, g, u) {
    if (a && typeof a == "object" && !Array.isArray(a)) {
      c(a, s, o, p, h, g, u);
      for (var f in a) {
        var w = a[f];
        if (Array.isArray(w)) {
          if (f in e.arrayKeywords)
            for (var x = 0; x < w.length; x++)
              t(r, c, i, w[x], s + "/" + f + "/" + x, o, s, f, a, x);
        } else if (f in e.propsKeywords) {
          if (w && typeof w == "object")
            for (var b in w)
              t(r, c, i, w[b], s + "/" + f + "/" + n(b), o, s, f, a, b);
        } else (f in e.keywords || r.allKeys && !(f in e.skipKeywords)) && t(r, c, i, w, s + "/" + f, o, s, f, a);
      }
      i(a, s, o, p, h, g, u);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return mi.exports;
}
var Ia;
function Gr() {
  if (Ia) return Ie;
  Ia = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.getSchemaRefs = Ie.resolveUrl = Ie.normalizeId = Ie._getFullPath = Ie.getFullPath = Ie.inlineRef = void 0;
  const e = /* @__PURE__ */ re(), t = Hc(), n = zl(), r = /* @__PURE__ */ new Set([
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
  const i = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function a(x) {
    for (const b in x) {
      if (i.has(b))
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
      if (b++, !r.has(S) && (typeof x[S] == "object" && (0, e.eachItem)(x[S], (v) => b += s(v)), b === 1 / 0))
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
  const h = /#\/?$/;
  function g(x) {
    return x ? x.replace(h, "") : "";
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
    const { schemaId: S, uriResolver: v } = this.opts, y = g(x[S] || b), d = { "": y }, l = o(v, y, !1), m = {}, I = /* @__PURE__ */ new Set();
    return n(x, { allKeys: !0 }, (C, R, O, $) => {
      if ($ === void 0)
        return;
      const E = l + R;
      let z = d[$];
      typeof C[S] == "string" && (z = P.call(this, C[S])), Z.call(this, C.$anchor), Z.call(this, C.$dynamicAnchor), d[R] = z;
      function P(L) {
        const F = this.opts.uriResolver.resolve;
        if (L = g(z ? F(z, L) : L), I.has(L))
          throw _(L);
        I.add(L);
        let k = this.refs[L];
        return typeof k == "string" && (k = this.refs[k]), typeof k == "object" ? q(C, k.schema, L) : L !== g(E) && (L[0] === "#" ? (q(C, m[L], L), m[L] = C) : this.refs[L] = E), L;
      }
      function Z(L) {
        if (typeof L == "string") {
          if (!f.test(L))
            throw new Error(`invalid anchor "${L}"`);
          P.call(this, `#${L}`);
        }
      }
    }), m;
    function q(C, R, O) {
      if (R !== void 0 && !t(C, R))
        throw _(O);
    }
    function _(C) {
      return new Error(`reference "${C}" resolves to more than one schema`);
    }
  }
  return Ie.getSchemaRefs = w, Ie;
}
var qa;
function gn() {
  if (qa) return dt;
  qa = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.getData = dt.KeywordCxt = dt.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Ol(), t = /* @__PURE__ */ Or(), n = /* @__PURE__ */ Zc(), r = /* @__PURE__ */ Or(), c = /* @__PURE__ */ Ll(), i = /* @__PURE__ */ Nl(), a = /* @__PURE__ */ Dl(), s = /* @__PURE__ */ te(), o = /* @__PURE__ */ Qe(), p = /* @__PURE__ */ Gr(), h = /* @__PURE__ */ re(), g = /* @__PURE__ */ Ur();
  function u(U) {
    if (l(U) && (I(U), d(U))) {
      b(U);
      return;
    }
    f(U, () => (0, e.topBoolOrEmptySchema)(U));
  }
  dt.validateFunctionCode = u;
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
      B.$comment && G.$comment && $(U), C(U), K.let(o.default.vErrors, null), K.let(o.default.errors, 0), B.unevaluated && S(U), q(U), E(U);
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
      m(U, G);
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
  function m(U, G) {
    const { schema: B, gen: K, opts: W } = U;
    W.$comment && B.$comment && $(U), R(U), O(U);
    const ee = K.const("_errs", o.default.errors);
    q(U, ee), K.var(G, (0, s._)`${ee} === ${o.default.errors}`);
  }
  function I(U) {
    (0, h.checkUnknownRules)(U), _(U);
  }
  function q(U, G) {
    if (U.opts.jtd)
      return P(U, [], !1, G);
    const B = (0, t.getSchemaTypes)(U.schema), K = (0, t.coerceAndCheckDataType)(U, B);
    P(U, B, !K, G);
  }
  function _(U) {
    const { schema: G, errSchemaPath: B, opts: K, self: W } = U;
    G.$ref && K.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(G, W.RULES) && W.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function C(U) {
    const { schema: G, opts: B } = U;
    G.default !== void 0 && B.useDefaults && B.strictSchema && (0, h.checkStrictMode)(U, "default is ignored in the schema root");
  }
  function R(U) {
    const G = U.schema[U.opts.schemaId];
    G && (U.baseId = (0, p.resolveUrl)(U.opts.uriResolver, U.baseId, G));
  }
  function O(U) {
    if (U.schema.$async && !U.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function $({ gen: U, schemaEnv: G, schema: B, errSchemaPath: K, opts: W }) {
    const ee = B.$comment;
    if (W.$comment === !0)
      U.code((0, s._)`${o.default.self}.logger.log(${ee})`);
    else if (typeof W.$comment == "function") {
      const ie = (0, s.str)`${K}/$comment`, be = U.scopeValue("root", { ref: G.root });
      U.code((0, s._)`${o.default.self}.opts.$comment(${ee}, ${ie}, ${be}.schema)`);
    }
  }
  function E(U) {
    const { gen: G, schemaEnv: B, validateName: K, ValidationError: W, opts: ee } = U;
    B.$async ? G.if((0, s._)`${o.default.errors} === 0`, () => G.return(o.default.data), () => G.throw((0, s._)`new ${W}(${o.default.vErrors})`)) : (G.assign((0, s._)`${K}.errors`, o.default.vErrors), ee.unevaluated && z(U), G.return((0, s._)`${o.default.errors} === 0`));
  }
  function z({ gen: U, evaluated: G, props: B, items: K }) {
    B instanceof s.Name && U.assign((0, s._)`${G}.props`, B), K instanceof s.Name && U.assign((0, s._)`${G}.items`, K);
  }
  function P(U, G, B, K) {
    const { gen: W, schema: ee, data: ie, allErrors: be, opts: fe, self: me } = U, { RULES: pe } = me;
    if (ee.$ref && (fe.ignoreKeywordsWithRef || !(0, h.schemaHasRulesButRef)(ee, pe))) {
      W.block(() => D(U, "$ref", pe.all.$ref.definition));
      return;
    }
    fe.jtd || L(U, G), W.block(() => {
      for (const ke of pe.rules)
        Xe(ke);
      Xe(pe.post);
    });
    function Xe(ke) {
      (0, n.shouldUseGroup)(ee, ke) && (ke.type ? (W.if((0, r.checkDataType)(ke.type, ie, fe.strictNumbers)), Z(U, ke), G.length === 1 && G[0] === ke.type && B && (W.else(), (0, r.reportTypeError)(U)), W.endIf()) : Z(U, ke), be || W.if((0, s._)`${o.default.errors} === ${K || 0}`));
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
    U.schemaEnv.meta || !U.opts.strictTypes || (F(U, G), U.opts.allowUnionTypes || k(U, G), M(U, U.dataTypes));
  }
  function F(U, G) {
    if (G.length) {
      if (!U.dataTypes.length) {
        U.dataTypes = G;
        return;
      }
      G.forEach((B) => {
        N(U.dataTypes, B) || A(U, `type "${B}" not allowed by context "${U.dataTypes.join(",")}"`);
      }), j(U, G);
    }
  }
  function k(U, G) {
    G.length > 1 && !(G.length === 2 && G.includes("null")) && A(U, "use allowUnionTypes to allow union type keyword");
  }
  function M(U, G) {
    const B = U.self.RULES.all;
    for (const K in B) {
      const W = B[K];
      if (typeof W == "object" && (0, n.shouldUseRule)(U.schema, W)) {
        const { type: ee } = W.definition;
        ee.length && !ee.some((ie) => V(G, ie)) && A(U, `missing type "${ee.join(",")}" for keyword "${K}"`);
      }
    }
  }
  function V(U, G) {
    return U.includes(G) || G === "number" && U.includes("integer");
  }
  function N(U, G) {
    return U.includes(G) || G === "integer" && U.includes("number");
  }
  function j(U, G) {
    const B = [];
    for (const K of U.dataTypes)
      N(G, K) ? B.push(K) : G.includes("integer") && K === "number" && B.push("integer");
    U.dataTypes = B;
  }
  function A(U, G) {
    const B = U.schemaEnv.baseId + U.errSchemaPath;
    G += ` at "${B}" (strictTypes)`, (0, h.checkStrictMode)(U, G, U.opts.strictTypes);
  }
  class T {
    constructor(G, B, K) {
      if ((0, i.validateKeywordUsage)(G, B, K), this.gen = G.gen, this.allErrors = G.allErrors, this.keyword = K, this.data = G.data, this.schema = G.schema[K], this.$data = B.$data && G.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, h.schemaRefOrVal)(G, this.schema, K, this.$data), this.schemaType = B.schemaType, this.parentSchema = G.schema, this.params = {}, this.it = G, this.def = B, this.$data)
        this.schemaCode = G.gen.const("vSchema", J(this.$data, G));
      else if (this.schemaCode = this.schemaValue, !(0, i.validSchemaType)(this.schema, B.schemaType, B.allowUndefined))
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
      const { gen: K, schemaCode: W, schemaType: ee, def: ie } = this;
      K.if((0, s.or)((0, s._)`${W} === undefined`, B)), G !== s.nil && K.assign(G, !0), (ee.length || ie.validateSchema) && (K.elseIf(this.invalid$data()), this.$dataError(), G !== s.nil && K.assign(G, !1)), K.else();
    }
    invalid$data() {
      const { gen: G, schemaCode: B, schemaType: K, def: W, it: ee } = this;
      return (0, s.or)(ie(), be());
      function ie() {
        if (K.length) {
          if (!(B instanceof s.Name))
            throw new Error("ajv implementation error");
          const fe = Array.isArray(K) ? K : [K];
          return (0, s._)`${(0, r.checkDataTypes)(fe, B, ee.opts.strictNumbers, r.DataType.Wrong)}`;
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
      K.opts.unevaluated && (K.props !== !0 && G.props !== void 0 && (K.props = h.mergeEvaluated.props(W, G.props, K.props, B)), K.items !== !0 && G.items !== void 0 && (K.items = h.mergeEvaluated.items(W, G.items, K.items, B)));
    }
    mergeValidEvaluated(G, B) {
      const { it: K, gen: W } = this;
      if (K.opts.unevaluated && (K.props !== !0 || K.items !== !0))
        return W.if(B, () => this.mergeEvaluated(G, s.Name)), !0;
    }
  }
  dt.KeywordCxt = T;
  function D(U, G, B, K) {
    const W = new T(U, B, G);
    "code" in B ? B.code(W, K) : W.$data && B.validate ? (0, i.funcKeywordCode)(W, B) : "macro" in B ? (0, i.macroKeywordCode)(W, B) : (B.compile || B.validate) && (0, i.funcKeywordCode)(W, B);
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
    let ie = ee;
    const be = W.split("/");
    for (const me of be)
      me && (ee = (0, s._)`${ee}${(0, s.getProperty)((0, h.unescapeJsonPointer)(me))}`, ie = (0, s._)`${ie} && ${ee}`);
    return ie;
    function fe(me, pe) {
      return `Cannot access ${me} ${pe} levels up, current level is ${G}`;
    }
  }
  return dt.getData = J, dt;
}
var _n = {}, Aa;
function Fr() {
  if (Aa) return _n;
  Aa = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return _n.default = e, _n;
}
var Pn = {}, Ra;
function vn() {
  if (Ra) return Pn;
  Ra = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gr();
  class t extends Error {
    constructor(r, c, i, a) {
      super(a || `can't resolve reference ${i} from id ${c}`), this.missingRef = (0, e.resolveUrl)(r, c, i), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return Pn.default = t, Pn;
}
var _e = {}, ja;
function Br() {
  if (ja) return _e;
  ja = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.resolveSchema = _e.getCompilingSchema = _e.resolveRef = _e.compileSchema = _e.SchemaEnv = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Fr(), n = /* @__PURE__ */ Qe(), r = /* @__PURE__ */ Gr(), c = /* @__PURE__ */ re(), i = /* @__PURE__ */ gn();
  class a {
    constructor(S) {
      var v;
      this.refs = {}, this.dynamicAnchors = {};
      let y;
      typeof S.schema == "object" && (y = S.schema), this.schema = S.schema, this.schemaId = S.schemaId, this.root = S.root || this, this.baseId = (v = S.baseId) !== null && v !== void 0 ? v : (0, r.normalizeId)(y?.[S.schemaId || "$id"]), this.schemaPath = S.schemaPath, this.localRefs = S.localRefs, this.meta = S.meta, this.$async = y?.$async, this.refs = {};
    }
  }
  _e.SchemaEnv = a;
  function s(b) {
    const S = h.call(this, b);
    if (S)
      return S;
    const v = (0, r.getFullPath)(this.opts.uriResolver, b.root.baseId), { es5: y, lines: d } = this.opts.code, { ownProperties: l } = this.opts, m = new e.CodeGen(this.scope, { es5: y, lines: d, ownProperties: l });
    let I;
    b.$async && (I = m.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const q = m.scopeName("validate");
    b.validateName = q;
    const _ = {
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
      validateName: q,
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
      this._compilations.add(b), (0, i.validateFunctionCode)(_), m.optimize(this.opts.code.optimize);
      const R = m.toString();
      C = `${m.scopeRefs(n.default.scope)}return ${R}`, this.opts.code.process && (C = this.opts.code.process(C, b));
      const $ = new Function(`${n.default.self}`, `${n.default.scope}`, C)(this, this.scope.get());
      if (this.scope.value(q, { ref: $ }), $.errors = null, $.schema = b.schema, $.schemaEnv = b, b.$async && ($.$async = !0), this.opts.code.source === !0 && ($.source = { validateName: q, validateCode: R, scopeValues: m._values }), this.opts.unevaluated) {
        const { props: E, items: z } = _;
        $.evaluated = {
          props: E instanceof e.Name ? void 0 : E,
          items: z instanceof e.Name ? void 0 : z,
          dynamicProps: E instanceof e.Name,
          dynamicItems: z instanceof e.Name
        }, $.source && ($.source.evaluated = (0, e.stringify)($.evaluated));
      }
      return b.validate = $, b;
    } catch (R) {
      throw delete b.validate, delete b.validateName, C && this.logger.error("Error compiling schema, function code:", C), R;
    } finally {
      this._compilations.delete(b);
    }
  }
  _e.compileSchema = s;
  function o(b, S, v) {
    var y;
    v = (0, r.resolveUrl)(this.opts.uriResolver, S, v);
    const d = b.refs[v];
    if (d)
      return d;
    let l = u.call(this, b, v);
    if (l === void 0) {
      const m = (y = b.localRefs) === null || y === void 0 ? void 0 : y[v], { schemaId: I } = this.opts;
      m && (l = new a({ schema: m, schemaId: I, root: b, baseId: S }));
    }
    if (l !== void 0)
      return b.refs[v] = p.call(this, l);
  }
  _e.resolveRef = o;
  function p(b) {
    return (0, r.inlineRef)(b.schema, this.opts.inlineRefs) ? b.schema : b.validate ? b : s.call(this, b);
  }
  function h(b) {
    for (const S of this._compilations)
      if (g(S, b))
        return S;
  }
  _e.getCompilingSchema = h;
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
    const v = this.opts.uriResolver.parse(S), y = (0, r._getFullPath)(this.opts.uriResolver, v);
    let d = (0, r.getFullPath)(this.opts.uriResolver, b.baseId, void 0);
    if (Object.keys(b.schema).length > 0 && y === d)
      return x.call(this, v, b);
    const l = (0, r.normalizeId)(y), m = this.refs[l] || this.schemas[l];
    if (typeof m == "string") {
      const I = f.call(this, b, m);
      return typeof I?.schema != "object" ? void 0 : x.call(this, v, I);
    }
    if (typeof m?.schema == "object") {
      if (m.validate || s.call(this, m), l === (0, r.normalizeId)(S)) {
        const { schema: I } = m, { schemaId: q } = this.opts, _ = I[q];
        return _ && (d = (0, r.resolveUrl)(this.opts.uriResolver, d, _)), new a({ schema: I, schemaId: q, root: b, baseId: d });
      }
      return x.call(this, v, m);
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
      const q = v[(0, c.unescapeFragment)(I)];
      if (q === void 0)
        return;
      v = q;
      const _ = typeof v == "object" && v[this.opts.schemaId];
      !w.has(I) && _ && (S = (0, r.resolveUrl)(this.opts.uriResolver, S, _));
    }
    let l;
    if (typeof v != "boolean" && v.$ref && !(0, c.schemaHasRulesButRef)(v, this.RULES)) {
      const I = (0, r.resolveUrl)(this.opts.uriResolver, S, v.$ref);
      l = f.call(this, y, I);
    }
    const { schemaId: m } = this.opts;
    if (l = l || new a({ schema: v, schemaId: m, root: y, baseId: S }), l.schema !== l.root.schema)
      return l;
  }
  return _e;
}
const Vl = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Ul = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Gl = "object", Fl = ["$data"], Bl = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Zl = !1, Hl = {
  $id: Vl,
  description: Ul,
  type: Gl,
  required: Fl,
  properties: Bl,
  additionalProperties: Zl
};
var Tn = {}, nn = { exports: {} }, yi, $a;
function Jc() {
  if ($a) return yi;
  $a = 1;
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
  const r = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function c(u) {
    return u.length = 0, !0;
  }
  function i(u, f, w) {
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
    let S = !1, v = !1, y = i;
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
  function h(u, f) {
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
  return yi = {
    nonSimpleDomain: r,
    recomposeAuthority: g,
    normalizeComponentEncoding: h,
    removeDotSegments: p,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: s,
    stringArrayToHexStripped: n
  }, yi;
}
var gi, _a;
function Jl() {
  if (_a) return gi;
  _a = 1;
  const { isUUID: e } = Jc(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function c(l) {
    return l.secure === !0 ? !0 : l.secure === !1 ? !1 : l.scheme ? l.scheme.length === 3 && (l.scheme[0] === "w" || l.scheme[0] === "W") && (l.scheme[1] === "s" || l.scheme[1] === "S") && (l.scheme[2] === "s" || l.scheme[2] === "S") : !1;
  }
  function i(l) {
    return l.host || (l.error = l.error || "HTTP URIs must have a host."), l;
  }
  function a(l) {
    const m = String(l.scheme).toLowerCase() === "https";
    return (l.port === (m ? 443 : 80) || l.port === "") && (l.port = void 0), l.path || (l.path = "/"), l;
  }
  function s(l) {
    return l.secure = c(l), l.resourceName = (l.path || "/") + (l.query ? "?" + l.query : ""), l.path = void 0, l.query = void 0, l;
  }
  function o(l) {
    if ((l.port === (c(l) ? 443 : 80) || l.port === "") && (l.port = void 0), typeof l.secure == "boolean" && (l.scheme = l.secure ? "wss" : "ws", l.secure = void 0), l.resourceName) {
      const [m, I] = l.resourceName.split("?");
      l.path = m && m !== "/" ? m : void 0, l.query = I, l.resourceName = void 0;
    }
    return l.fragment = void 0, l;
  }
  function p(l, m) {
    if (!l.path)
      return l.error = "URN can not be parsed", l;
    const I = l.path.match(t);
    if (I) {
      const q = m.scheme || l.scheme || "urn";
      l.nid = I[1].toLowerCase(), l.nss = I[2];
      const _ = `${q}:${m.nid || l.nid}`, C = d(_);
      l.path = void 0, C && (l = C.parse(l, m));
    } else
      l.error = l.error || "URN can not be parsed.";
    return l;
  }
  function h(l, m) {
    if (l.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const I = m.scheme || l.scheme || "urn", q = l.nid.toLowerCase(), _ = `${I}:${m.nid || q}`, C = d(_);
    C && (l = C.serialize(l, m));
    const R = l, O = l.nss;
    return R.path = `${q || m.nid}:${O}`, m.skipEscape = !0, R;
  }
  function g(l, m) {
    const I = l;
    return I.uuid = I.nss, I.nss = void 0, !m.tolerant && (!I.uuid || !e(I.uuid)) && (I.error = I.error || "UUID is not valid."), I;
  }
  function u(l) {
    const m = l;
    return m.nss = (l.uuid || "").toLowerCase(), m;
  }
  const f = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: i,
      serialize: a
    }
  ), w = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: f.domainHost,
      parse: i,
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
          serialize: h,
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
  return gi = {
    wsIsSecure: c,
    SCHEMES: y,
    isValidSchemeName: r,
    getSchemeHandler: d
  }, gi;
}
var Pa;
function Kl() {
  if (Pa) return nn.exports;
  Pa = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizeComponentEncoding: r, isIPv4: c, nonSimpleDomain: i } = Jc(), { SCHEMES: a, getSchemeHandler: s } = Jl();
  function o(b, S) {
    return typeof b == "string" ? b = /** @type {T} */
    u(w(b, S), S) : typeof b == "object" && (b = /** @type {T} */
    w(u(b, S), S)), b;
  }
  function p(b, S, v) {
    const y = v ? Object.assign({ scheme: "null" }, v) : { scheme: "null" }, d = h(w(b, y), w(S, y), y, !0);
    return y.skipEscape = !0, u(d, y);
  }
  function h(b, S, v, y) {
    const d = {};
    return y || (b = w(u(b, v), v), S = w(u(S, v), v)), v = v || {}, !v.tolerant && S.scheme ? (d.scheme = S.scheme, d.userinfo = S.userinfo, d.host = S.host, d.port = S.port, d.path = t(S.path || ""), d.query = S.query) : (S.userinfo !== void 0 || S.host !== void 0 || S.port !== void 0 ? (d.userinfo = S.userinfo, d.host = S.host, d.port = S.port, d.path = t(S.path || ""), d.query = S.query) : (S.path ? (S.path[0] === "/" ? d.path = t(S.path) : ((b.userinfo !== void 0 || b.host !== void 0 || b.port !== void 0) && !b.path ? d.path = "/" + S.path : b.path ? d.path = b.path.slice(0, b.path.lastIndexOf("/") + 1) + S.path : d.path = S.path, d.path = t(d.path)), d.query = S.query) : (d.path = b.path, S.query !== void 0 ? d.query = S.query : d.query = b.query), d.userinfo = b.userinfo, d.host = b.host, d.port = b.port), d.scheme = b.scheme), d.fragment = S.fragment, d;
  }
  function g(b, S, v) {
    return typeof b == "string" ? (b = unescape(b), b = u(r(w(b, v), !0), { ...v, skipEscape: !0 })) : typeof b == "object" && (b = u(r(b, !0), { ...v, skipEscape: !0 })), typeof S == "string" ? (S = unescape(S), S = u(r(w(S, v), !0), { ...v, skipEscape: !0 })) : typeof S == "object" && (S = u(r(S, !0), { ...v, skipEscape: !0 })), b.toLowerCase() === S.toLowerCase();
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
    const m = n(v);
    if (m !== void 0 && (y.reference !== "suffix" && d.push("//"), d.push(m), v.path && v.path[0] !== "/" && d.push("/")), v.path !== void 0) {
      let I = v.path;
      !y.absolutePath && (!l || !l.absolutePath) && (I = t(I)), m === void 0 && I[0] === "/" && I[1] === "/" && (I = "/%2F" + I.slice(2)), d.push(I);
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
          const q = e(y.host);
          y.host = q.host.toLowerCase(), d = q.isIPV6;
        } else
          d = !0;
      y.scheme === void 0 && y.userinfo === void 0 && y.host === void 0 && y.port === void 0 && y.query === void 0 && !y.path ? y.reference = "same-document" : y.scheme === void 0 ? y.reference = "relative" : y.fragment === void 0 ? y.reference = "absolute" : y.reference = "uri", v.reference && v.reference !== "suffix" && v.reference !== y.reference && (y.error = y.error || "URI is not a " + v.reference + " reference.");
      const m = s(v.scheme || y.scheme);
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
    SCHEMES: a,
    normalize: o,
    resolve: p,
    resolveComponent: h,
    equal: g,
    serialize: u,
    parse: w
  };
  return nn.exports = x, nn.exports.default = x, nn.exports.fastUri = x, nn.exports;
}
var Ta;
function Ql() {
  if (Ta) return Tn;
  Ta = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = Kl();
  return e.code = 'require("ajv/dist/runtime/uri").default', Tn.default = e, Tn;
}
var Ca;
function Kc() {
  return Ca || (Ca = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ gn();
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
    const r = /* @__PURE__ */ Fr(), c = /* @__PURE__ */ vn(), i = /* @__PURE__ */ Bc(), a = /* @__PURE__ */ Br(), s = /* @__PURE__ */ te(), o = /* @__PURE__ */ Gr(), p = /* @__PURE__ */ Or(), h = /* @__PURE__ */ re(), g = Hl, u = /* @__PURE__ */ Ql(), f = (k, M) => new RegExp(k, M);
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
      var M, V, N, j, A, T, D, H, Q, J, U, G, B, K, W, ee, ie, be, fe, me, pe, Xe, ke, Yr, ei;
      const en = k.strict, ti = (M = k.code) === null || M === void 0 ? void 0 : M.optimize, Hs = ti === !0 || ti === void 0 ? 1 : ti || 0, Js = (N = (V = k.code) === null || V === void 0 ? void 0 : V.regExp) !== null && N !== void 0 ? N : f, Dd = (j = k.uriResolver) !== null && j !== void 0 ? j : u.default;
      return {
        strictSchema: (T = (A = k.strictSchema) !== null && A !== void 0 ? A : en) !== null && T !== void 0 ? T : !0,
        strictNumbers: (H = (D = k.strictNumbers) !== null && D !== void 0 ? D : en) !== null && H !== void 0 ? H : !0,
        strictTypes: (J = (Q = k.strictTypes) !== null && Q !== void 0 ? Q : en) !== null && J !== void 0 ? J : "log",
        strictTuples: (G = (U = k.strictTuples) !== null && U !== void 0 ? U : en) !== null && G !== void 0 ? G : "log",
        strictRequired: (K = (B = k.strictRequired) !== null && B !== void 0 ? B : en) !== null && K !== void 0 ? K : !1,
        code: k.code ? { ...k.code, optimize: Hs, regExp: Js } : { optimize: Hs, regExp: Js },
        loopRequired: (W = k.loopRequired) !== null && W !== void 0 ? W : v,
        loopEnum: (ee = k.loopEnum) !== null && ee !== void 0 ? ee : v,
        meta: (ie = k.meta) !== null && ie !== void 0 ? ie : !0,
        messages: (be = k.messages) !== null && be !== void 0 ? be : !0,
        inlineRefs: (fe = k.inlineRefs) !== null && fe !== void 0 ? fe : !0,
        schemaId: (me = k.schemaId) !== null && me !== void 0 ? me : "$id",
        addUsedSchema: (pe = k.addUsedSchema) !== null && pe !== void 0 ? pe : !0,
        validateSchema: (Xe = k.validateSchema) !== null && Xe !== void 0 ? Xe : !0,
        validateFormats: (ke = k.validateFormats) !== null && ke !== void 0 ? ke : !0,
        unicodeRegExp: (Yr = k.unicodeRegExp) !== null && Yr !== void 0 ? Yr : !0,
        int32range: (ei = k.int32range) !== null && ei !== void 0 ? ei : !0,
        uriResolver: Dd
      };
    }
    class d {
      constructor(M = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), M = this.opts = { ...M, ...y(M) };
        const { es5: V, lines: N } = this.opts.code;
        this.scope = new s.ValueScope({ scope: {}, prefixes: x, es5: V, lines: N }), this.logger = O(M.logger);
        const j = M.validateFormats;
        M.validateFormats = !1, this.RULES = (0, i.getRules)(), l.call(this, b, M, "NOT SUPPORTED"), l.call(this, S, M, "DEPRECATED", "warn"), this._metaOpts = C.call(this), M.formats && q.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), M.keywords && _.call(this, M.keywords), typeof M.meta == "object" && this.addMetaSchema(M.meta), I.call(this), M.validateFormats = j;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: M, meta: V, schemaId: N } = this.opts;
        let j = g;
        N === "id" && (j = { ...g }, j.id = j.$id, delete j.$id), V && M && this.addMetaSchema(j, j[N], !1);
      }
      defaultMeta() {
        const { meta: M, schemaId: V } = this.opts;
        return this.opts.defaultMeta = typeof M == "object" ? M[V] || M : void 0;
      }
      validate(M, V) {
        let N;
        if (typeof M == "string") {
          if (N = this.getSchema(M), !N)
            throw new Error(`no schema with key or ref "${M}"`);
        } else
          N = this.compile(M);
        const j = N(V);
        return "$async" in N || (this.errors = N.errors), j;
      }
      compile(M, V) {
        const N = this._addSchema(M, V);
        return N.validate || this._compileSchemaEnv(N);
      }
      compileAsync(M, V) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: N } = this.opts;
        return j.call(this, M, V);
        async function j(J, U) {
          await A.call(this, J.$schema);
          const G = this._addSchema(J, U);
          return G.validate || T.call(this, G);
        }
        async function A(J) {
          J && !this.getSchema(J) && await j.call(this, { $ref: J }, !0);
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
          this.refs[J] || await A.call(this, U.$schema), this.refs[J] || this.addSchema(U, J, V);
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
      addSchema(M, V, N, j = this.opts.validateSchema) {
        if (Array.isArray(M)) {
          for (const T of M)
            this.addSchema(T, void 0, N, j);
          return this;
        }
        let A;
        if (typeof M == "object") {
          const { schemaId: T } = this.opts;
          if (A = M[T], A !== void 0 && typeof A != "string")
            throw new Error(`schema ${T} must be string`);
        }
        return V = (0, o.normalizeId)(V || A), this._checkUnique(V), this.schemas[V] = this._addSchema(M, N, V, j, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(M, V, N = this.opts.validateSchema) {
        return this.addSchema(M, V, !0, N), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(M, V) {
        if (typeof M == "boolean")
          return !0;
        let N;
        if (N = M.$schema, N !== void 0 && typeof N != "string")
          throw new Error("$schema must be a string");
        if (N = N || this.opts.defaultMeta || this.defaultMeta(), !N)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const j = this.validate(N, M);
        if (!j && V) {
          const A = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(A);
          else
            throw new Error(A);
        }
        return j;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(M) {
        let V;
        for (; typeof (V = m.call(this, M)) == "string"; )
          M = V;
        if (V === void 0) {
          const { schemaId: N } = this.opts, j = new a.SchemaEnv({ schema: {}, schemaId: N });
          if (V = a.resolveSchema.call(this, j, M), !V)
            return;
          this.refs[M] = V;
        }
        return V.validate || this._compileSchemaEnv(V);
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
            const V = m.call(this, M);
            return typeof V == "object" && this._cache.delete(V.schema), delete this.schemas[M], delete this.refs[M], this;
          }
          case "object": {
            const V = M;
            this._cache.delete(V);
            let N = M[this.opts.schemaId];
            return N && (N = (0, o.normalizeId)(N), delete this.schemas[N], delete this.refs[N]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(M) {
        for (const V of M)
          this.addKeyword(V);
        return this;
      }
      addKeyword(M, V) {
        let N;
        if (typeof M == "string")
          N = M, typeof V == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), V.keyword = N);
        else if (typeof M == "object" && V === void 0) {
          if (V = M, N = V.keyword, Array.isArray(N) && !N.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (E.call(this, N, V), !V)
          return (0, h.eachItem)(N, (A) => z.call(this, A)), this;
        Z.call(this, V);
        const j = {
          ...V,
          type: (0, p.getJSONTypes)(V.type),
          schemaType: (0, p.getJSONTypes)(V.schemaType)
        };
        return (0, h.eachItem)(N, j.type.length === 0 ? (A) => z.call(this, A, j) : (A) => j.type.forEach((T) => z.call(this, A, j, T))), this;
      }
      getKeyword(M) {
        const V = this.RULES.all[M];
        return typeof V == "object" ? V.definition : !!V;
      }
      // Remove keyword
      removeKeyword(M) {
        const { RULES: V } = this;
        delete V.keywords[M], delete V.all[M];
        for (const N of V.rules) {
          const j = N.rules.findIndex((A) => A.keyword === M);
          j >= 0 && N.rules.splice(j, 1);
        }
        return this;
      }
      // Add format
      addFormat(M, V) {
        return typeof V == "string" && (V = new RegExp(V)), this.formats[M] = V, this;
      }
      errorsText(M = this.errors, { separator: V = ", ", dataVar: N = "data" } = {}) {
        return !M || M.length === 0 ? "No errors" : M.map((j) => `${N}${j.instancePath} ${j.message}`).reduce((j, A) => j + V + A);
      }
      $dataMetaSchema(M, V) {
        const N = this.RULES.all;
        M = JSON.parse(JSON.stringify(M));
        for (const j of V) {
          const A = j.split("/").slice(1);
          let T = M;
          for (const D of A)
            T = T[D];
          for (const D in N) {
            const H = N[D];
            if (typeof H != "object")
              continue;
            const { $data: Q } = H.definition, J = T[D];
            Q && J && (T[D] = F(J));
          }
        }
        return M;
      }
      _removeAllSchemas(M, V) {
        for (const N in M) {
          const j = M[N];
          (!V || V.test(N)) && (typeof j == "string" ? delete M[N] : j && !j.meta && (this._cache.delete(j.schema), delete M[N]));
        }
      }
      _addSchema(M, V, N, j = this.opts.validateSchema, A = this.opts.addUsedSchema) {
        let T;
        const { schemaId: D } = this.opts;
        if (typeof M == "object")
          T = M[D];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof M != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let H = this._cache.get(M);
        if (H !== void 0)
          return H;
        N = (0, o.normalizeId)(T || N);
        const Q = o.getSchemaRefs.call(this, M, N);
        return H = new a.SchemaEnv({ schema: M, schemaId: D, meta: V, baseId: N, localRefs: Q }), this._cache.set(H.schema, H), A && !N.startsWith("#") && (N && this._checkUnique(N), this.refs[N] = H), j && this.validateSchema(M, !0), H;
      }
      _checkUnique(M) {
        if (this.schemas[M] || this.refs[M])
          throw new Error(`schema with key or id "${M}" already exists`);
      }
      _compileSchemaEnv(M) {
        if (M.meta ? this._compileMetaSchema(M) : a.compileSchema.call(this, M), !M.validate)
          throw new Error("ajv implementation error");
        return M.validate;
      }
      _compileMetaSchema(M) {
        const V = this.opts;
        this.opts = this._metaOpts;
        try {
          a.compileSchema.call(this, M);
        } finally {
          this.opts = V;
        }
      }
    }
    d.ValidationError = r.default, d.MissingRefError = c.default, e.default = d;
    function l(k, M, V, N = "error") {
      for (const j in k) {
        const A = j;
        A in M && this.logger[N](`${V}: option ${j}. ${k[A]}`);
      }
    }
    function m(k) {
      return k = (0, o.normalizeId)(k), this.schemas[k] || this.refs[k];
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
    function q() {
      for (const k in this.opts.formats) {
        const M = this.opts.formats[k];
        M && this.addFormat(k, M);
      }
    }
    function _(k) {
      if (Array.isArray(k)) {
        this.addVocabulary(k);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const M in k) {
        const V = k[M];
        V.keyword || (V.keyword = M), this.addKeyword(V);
      }
    }
    function C() {
      const k = { ...this.opts };
      for (const M of w)
        delete k[M];
      return k;
    }
    const R = { log() {
    }, warn() {
    }, error() {
    } };
    function O(k) {
      if (k === !1)
        return R;
      if (k === void 0)
        return console;
      if (k.log && k.warn && k.error)
        return k;
      throw new Error("logger must implement log, warn and error methods");
    }
    const $ = /^[a-z_$][a-z0-9_$:-]*$/i;
    function E(k, M) {
      const { RULES: V } = this;
      if ((0, h.eachItem)(k, (N) => {
        if (V.keywords[N])
          throw new Error(`Keyword ${N} is already defined`);
        if (!$.test(N))
          throw new Error(`Keyword ${N} has invalid name`);
      }), !!M && M.$data && !("code" in M || "validate" in M))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function z(k, M, V) {
      var N;
      const j = M?.post;
      if (V && j)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: A } = this;
      let T = j ? A.post : A.rules.find(({ type: H }) => H === V);
      if (T || (T = { type: V, rules: [] }, A.rules.push(T)), A.keywords[k] = !0, !M)
        return;
      const D = {
        keyword: k,
        definition: {
          ...M,
          type: (0, p.getJSONTypes)(M.type),
          schemaType: (0, p.getJSONTypes)(M.schemaType)
        }
      };
      M.before ? P.call(this, T, D, M.before) : T.rules.push(D), A.all[k] = D, (N = M.implements) === null || N === void 0 || N.forEach((H) => this.addKeyword(H));
    }
    function P(k, M, V) {
      const N = k.rules.findIndex((j) => j.keyword === V);
      N >= 0 ? k.rules.splice(N, 0, M) : (k.rules.push(M), this.logger.warn(`rule ${V} is not defined`));
    }
    function Z(k) {
      let { metaSchema: M } = k;
      M !== void 0 && (k.$data && this.opts.$data && (M = F(M)), k.validateSchema = this.compile(M, !0));
    }
    const L = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function F(k) {
      return { anyOf: [k, L] };
    }
  })(di)), di;
}
var Cn = {}, En = {}, kn = {}, Ea;
function Wl() {
  if (Ea) return kn;
  Ea = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return kn.default = e, kn;
}
var bt = {}, ka;
function Ps() {
  if (ka) return bt;
  ka = 1, Object.defineProperty(bt, "__esModule", { value: !0 }), bt.callRef = bt.getValidate = void 0;
  const e = /* @__PURE__ */ vn(), t = /* @__PURE__ */ We(), n = /* @__PURE__ */ te(), r = /* @__PURE__ */ Qe(), c = /* @__PURE__ */ Br(), i = /* @__PURE__ */ re(), a = {
    keyword: "$ref",
    schemaType: "string",
    code(p) {
      const { gen: h, schema: g, it: u } = p, { baseId: f, schemaEnv: w, validateName: x, opts: b, self: S } = u, { root: v } = w;
      if ((g === "#" || g === "#/") && f === v.baseId)
        return d();
      const y = c.resolveRef.call(S, v, f, g);
      if (y === void 0)
        throw new e.default(u.opts.uriResolver, f, g);
      if (y instanceof c.SchemaEnv)
        return l(y);
      return m(y);
      function d() {
        if (w === v)
          return o(p, x, w, w.$async);
        const I = h.scopeValue("root", { ref: v });
        return o(p, (0, n._)`${I}.validate`, v, v.$async);
      }
      function l(I) {
        const q = s(p, I);
        o(p, q, I, I.$async);
      }
      function m(I) {
        const q = h.scopeValue("schema", b.code.source === !0 ? { ref: I, code: (0, n.stringify)(I) } : { ref: I }), _ = h.name("valid"), C = p.subschema({
          schema: I,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: q,
          errSchemaPath: g
        }, _);
        p.mergeEvaluated(C), p.ok(_);
      }
    }
  };
  function s(p, h) {
    const { gen: g } = p;
    return h.validate ? g.scopeValue("validate", { ref: h.validate }) : (0, n._)`${g.scopeValue("wrapper", { ref: h })}.validate`;
  }
  bt.getValidate = s;
  function o(p, h, g, u) {
    const { gen: f, it: w } = p, { allErrors: x, schemaEnv: b, opts: S } = w, v = S.passContext ? r.default.this : n.nil;
    u ? y() : d();
    function y() {
      if (!b.$async)
        throw new Error("async schema referenced by sync schema");
      const I = f.let("valid");
      f.try(() => {
        f.code((0, n._)`await ${(0, t.callValidateCode)(p, h, v)}`), m(h), x || f.assign(I, !0);
      }, (q) => {
        f.if((0, n._)`!(${q} instanceof ${w.ValidationError})`, () => f.throw(q)), l(q), x || f.assign(I, !1);
      }), p.ok(I);
    }
    function d() {
      p.result((0, t.callValidateCode)(p, h, v), () => m(h), () => l(h));
    }
    function l(I) {
      const q = (0, n._)`${I}.errors`;
      f.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${q} : ${r.default.vErrors}.concat(${q})`), f.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function m(I) {
      var q;
      if (!w.opts.unevaluated)
        return;
      const _ = (q = g?.validate) === null || q === void 0 ? void 0 : q.evaluated;
      if (w.props !== !0)
        if (_ && !_.dynamicProps)
          _.props !== void 0 && (w.props = i.mergeEvaluated.props(f, _.props, w.props));
        else {
          const C = f.var("props", (0, n._)`${I}.evaluated.props`);
          w.props = i.mergeEvaluated.props(f, C, w.props, n.Name);
        }
      if (w.items !== !0)
        if (_ && !_.dynamicItems)
          _.items !== void 0 && (w.items = i.mergeEvaluated.items(f, _.items, w.items));
        else {
          const C = f.var("items", (0, n._)`${I}.evaluated.items`);
          w.items = i.mergeEvaluated.items(f, C, w.items, n.Name);
        }
    }
  }
  return bt.callRef = o, bt.default = a, bt;
}
var Ma;
function Qc() {
  if (Ma) return En;
  Ma = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wl(), t = /* @__PURE__ */ Ps(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return En.default = n, En;
}
var Mn = {}, On = {}, Oa;
function Xl() {
  if (Oa) return On;
  Oa = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, r = {
    message: ({ keyword: i, schemaCode: a }) => (0, e.str)`must be ${n[i].okStr} ${a}`,
    params: ({ keyword: i, schemaCode: a }) => (0, e._)`{comparison: ${n[i].okStr}, limit: ${a}}`
  }, c = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: r,
    code(i) {
      const { keyword: a, data: s, schemaCode: o } = i;
      i.fail$data((0, e._)`${s} ${n[a].fail} ${o} || isNaN(${s})`);
    }
  };
  return On.default = c, On;
}
var Ln = {}, La;
function Yl() {
  if (La) return Ln;
  La = 1, Object.defineProperty(Ln, "__esModule", { value: !0 });
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
      const { gen: c, data: i, schemaCode: a, it: s } = r, o = s.opts.multipleOfPrecision, p = c.let("res"), h = o ? (0, e._)`Math.abs(Math.round(${p}) - ${p}) > 1e-${o}` : (0, e._)`${p} !== parseInt(${p})`;
      r.fail$data((0, e._)`(${a} === 0 || (${p} = ${i}/${a}, ${h}))`);
    }
  };
  return Ln.default = n, Ln;
}
var Nn = {}, Dn = {}, Na;
function eu() {
  if (Na) return Dn;
  Na = 1, Object.defineProperty(Dn, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, c = 0, i;
    for (; c < n; )
      r++, i = t.charCodeAt(c++), i >= 55296 && i <= 56319 && c < n && (i = t.charCodeAt(c), (i & 64512) === 56320 && c++);
    return r;
  }
  return Dn.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Dn;
}
var Da;
function tu() {
  if (Da) return Nn;
  Da = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ eu(), c = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: i, schemaCode: a }) {
        const s = i === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${s} than ${a} characters`;
      },
      params: ({ schemaCode: i }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { keyword: a, data: s, schemaCode: o, it: p } = i, h = a === "maxLength" ? e.operators.GT : e.operators.LT, g = p.opts.unicode === !1 ? (0, e._)`${s}.length` : (0, e._)`${(0, t.useFunc)(i.gen, n.default)}(${s})`;
      i.fail$data((0, e._)`${g} ${h} ${o}`);
    }
  };
  return Nn.default = c, Nn;
}
var zn = {}, za;
function nu() {
  if (za) return zn;
  za = 1, Object.defineProperty(zn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ We(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ te(), c = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, n.str)`must match pattern "${i}"`,
      params: ({ schemaCode: i }) => (0, n._)`{pattern: ${i}}`
    },
    code(i) {
      const { gen: a, data: s, $data: o, schema: p, schemaCode: h, it: g } = i, u = g.opts.unicodeRegExp ? "u" : "";
      if (o) {
        const { regExp: f } = g.opts.code, w = f.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(a, f), x = a.let("valid");
        a.try(() => a.assign(x, (0, n._)`${w}(${h}, ${u}).test(${s})`), () => a.assign(x, !1)), i.fail$data((0, n._)`!${x}`);
      } else {
        const f = (0, e.usePattern)(i, p);
        i.fail$data((0, n._)`!${f}.test(${s})`);
      }
    }
  };
  return zn.default = c, zn;
}
var Vn = {}, Va;
function ru() {
  if (Va) return Vn;
  Va = 1, Object.defineProperty(Vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: c }) {
        const i = r === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${i} than ${c} properties`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: c, data: i, schemaCode: a } = r, s = c === "maxProperties" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`Object.keys(${i}).length ${s} ${a}`);
    }
  };
  return Vn.default = n, Vn;
}
var Un = {}, Ua;
function iu() {
  if (Ua) return Un;
  Ua = 1, Object.defineProperty(Un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ We(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ re(), c = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: i } }) => (0, t.str)`must have required property '${i}'`,
      params: ({ params: { missingProperty: i } }) => (0, t._)`{missingProperty: ${i}}`
    },
    code(i) {
      const { gen: a, schema: s, schemaCode: o, data: p, $data: h, it: g } = i, { opts: u } = g;
      if (!h && s.length === 0)
        return;
      const f = s.length >= u.loopRequired;
      if (g.allErrors ? w() : x(), u.strictRequired) {
        const v = i.parentSchema.properties, { definedProperties: y } = i.it;
        for (const d of s)
          if (v?.[d] === void 0 && !y.has(d)) {
            const l = g.schemaEnv.baseId + g.errSchemaPath, m = `required property "${d}" is not defined at "${l}" (strictRequired)`;
            (0, n.checkStrictMode)(g, m, g.opts.strictRequired);
          }
      }
      function w() {
        if (f || h)
          i.block$data(t.nil, b);
        else
          for (const v of s)
            (0, e.checkReportMissingProp)(i, v);
      }
      function x() {
        const v = a.let("missing");
        if (f || h) {
          const y = a.let("valid", !0);
          i.block$data(y, () => S(v, y)), i.ok(y);
        } else
          a.if((0, e.checkMissingProp)(i, s, v)), (0, e.reportMissingProp)(i, v), a.else();
      }
      function b() {
        a.forOf("prop", o, (v) => {
          i.setParams({ missingProperty: v }), a.if((0, e.noPropertyInData)(a, p, v, u.ownProperties), () => i.error());
        });
      }
      function S(v, y) {
        i.setParams({ missingProperty: v }), a.forOf(v, o, () => {
          a.assign(y, (0, e.propertyInData)(a, p, v, u.ownProperties)), a.if((0, t.not)(y), () => {
            i.error(), a.break();
          });
        }, t.nil);
      }
    }
  };
  return Un.default = c, Un;
}
var Gn = {}, Ga;
function su() {
  if (Ga) return Gn;
  Ga = 1, Object.defineProperty(Gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: c }) {
        const i = r === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${i} than ${c} items`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: c, data: i, schemaCode: a } = r, s = c === "maxItems" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`${i}.length ${s} ${a}`);
    }
  };
  return Gn.default = n, Gn;
}
var Fn = {}, Bn = {}, Fa;
function Ts() {
  if (Fa) return Bn;
  Fa = 1, Object.defineProperty(Bn, "__esModule", { value: !0 });
  const e = Hc();
  return e.code = 'require("ajv/dist/runtime/equal").default', Bn.default = e, Bn;
}
var Ba;
function au() {
  if (Ba) return Fn;
  Ba = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Or(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ re(), r = /* @__PURE__ */ Ts(), i = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: a, j: s } }) => (0, t.str)`must NOT have duplicate items (items ## ${s} and ${a} are identical)`,
      params: ({ params: { i: a, j: s } }) => (0, t._)`{i: ${a}, j: ${s}}`
    },
    code(a) {
      const { gen: s, data: o, $data: p, schema: h, parentSchema: g, schemaCode: u, it: f } = a;
      if (!p && !h)
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
        const m = s.name("item"), I = (0, e.checkDataTypes)(x, m, f.opts.strictNumbers, e.DataType.Wrong), q = s.const("indices", (0, t._)`{}`);
        s.for((0, t._)`;${d}--;`, () => {
          s.let(m, (0, t._)`${o}[${d}]`), s.if(I, (0, t._)`continue`), x.length > 1 && s.if((0, t._)`typeof ${m} == "string"`, (0, t._)`${m} += "_"`), s.if((0, t._)`typeof ${q}[${m}] == "number"`, () => {
            s.assign(l, (0, t._)`${q}[${m}]`), a.error(), s.assign(w, !1).break();
          }).code((0, t._)`${q}[${m}] = ${d}`);
        });
      }
      function y(d, l) {
        const m = (0, n.useFunc)(s, r.default), I = s.name("outer");
        s.label(I).for((0, t._)`;${d}--;`, () => s.for((0, t._)`${l} = ${d}; ${l}--;`, () => s.if((0, t._)`${m}(${o}[${d}], ${o}[${l}])`, () => {
          a.error(), s.assign(w, !1).break(I);
        })));
      }
    }
  };
  return Fn.default = i, Fn;
}
var Zn = {}, Za;
function ou() {
  if (Za) return Zn;
  Za = 1, Object.defineProperty(Zn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ Ts(), c = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValue: ${i}}`
    },
    code(i) {
      const { gen: a, data: s, $data: o, schemaCode: p, schema: h } = i;
      o || h && typeof h == "object" ? i.fail$data((0, e._)`!${(0, t.useFunc)(a, n.default)}(${s}, ${p})`) : i.fail((0, e._)`${h} !== ${s}`);
    }
  };
  return Zn.default = c, Zn;
}
var Hn = {}, Ha;
function cu() {
  if (Ha) return Hn;
  Ha = 1, Object.defineProperty(Hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ Ts(), c = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValues: ${i}}`
    },
    code(i) {
      const { gen: a, data: s, $data: o, schema: p, schemaCode: h, it: g } = i;
      if (!o && p.length === 0)
        throw new Error("enum must have non-empty array");
      const u = p.length >= g.opts.loopEnum;
      let f;
      const w = () => f ?? (f = (0, t.useFunc)(a, n.default));
      let x;
      if (u || o)
        x = a.let("valid"), i.block$data(x, b);
      else {
        if (!Array.isArray(p))
          throw new Error("ajv implementation error");
        const v = a.const("vSchema", h);
        x = (0, e.or)(...p.map((y, d) => S(v, d)));
      }
      i.pass(x);
      function b() {
        a.assign(x, !1), a.forOf("v", h, (v) => a.if((0, e._)`${w()}(${s}, ${v})`, () => a.assign(x, !0).break()));
      }
      function S(v, y) {
        const d = p[y];
        return typeof d == "object" && d !== null ? (0, e._)`${w()}(${s}, ${v}[${y}])` : (0, e._)`${s} === ${d}`;
      }
    }
  };
  return Hn.default = c, Hn;
}
var Ja;
function Wc() {
  if (Ja) return Mn;
  Ja = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xl(), t = /* @__PURE__ */ Yl(), n = /* @__PURE__ */ tu(), r = /* @__PURE__ */ nu(), c = /* @__PURE__ */ ru(), i = /* @__PURE__ */ iu(), a = /* @__PURE__ */ su(), s = /* @__PURE__ */ au(), o = /* @__PURE__ */ ou(), p = /* @__PURE__ */ cu(), h = [
    // number
    e.default,
    t.default,
    // string
    n.default,
    r.default,
    // object
    c.default,
    i.default,
    // array
    a.default,
    s.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    o.default,
    p.default
  ];
  return Mn.default = h, Mn;
}
var Jn = {}, Nt = {}, Ka;
function Xc() {
  if (Ka) return Nt;
  Ka = 1, Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.validateAdditionalItems = void 0;
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
      const { parentSchema: a, it: s } = i, { items: o } = a;
      if (!Array.isArray(o)) {
        (0, t.checkStrictMode)(s, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      c(i, o);
    }
  };
  function c(i, a) {
    const { gen: s, schema: o, data: p, keyword: h, it: g } = i;
    g.items = !0;
    const u = s.const("len", (0, e._)`${p}.length`);
    if (o === !1)
      i.setParams({ len: a.length }), i.pass((0, e._)`${u} <= ${a.length}`);
    else if (typeof o == "object" && !(0, t.alwaysValidSchema)(g, o)) {
      const w = s.var("valid", (0, e._)`${u} <= ${a.length}`);
      s.if((0, e.not)(w), () => f(w)), i.ok(w);
    }
    function f(w) {
      s.forRange("i", a.length, u, (x) => {
        i.subschema({ keyword: h, dataProp: x, dataPropType: t.Type.Num }, w), g.allErrors || s.if((0, e.not)(w), () => s.break());
      });
    }
  }
  return Nt.validateAdditionalItems = c, Nt.default = r, Nt;
}
var Kn = {}, Dt = {}, Qa;
function Yc() {
  if (Qa) return Dt;
  Qa = 1, Object.defineProperty(Dt, "__esModule", { value: !0 }), Dt.validateTuple = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ We(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(i) {
      const { schema: a, it: s } = i;
      if (Array.isArray(a))
        return c(i, "additionalItems", a);
      s.items = !0, !(0, t.alwaysValidSchema)(s, a) && i.ok((0, n.validateArray)(i));
    }
  };
  function c(i, a, s = i.schema) {
    const { gen: o, parentSchema: p, data: h, keyword: g, it: u } = i;
    x(p), u.opts.unevaluated && s.length && u.items !== !0 && (u.items = t.mergeEvaluated.items(o, s.length, u.items));
    const f = o.name("valid"), w = o.const("len", (0, e._)`${h}.length`);
    s.forEach((b, S) => {
      (0, t.alwaysValidSchema)(u, b) || (o.if((0, e._)`${w} > ${S}`, () => i.subschema({
        keyword: g,
        schemaProp: S,
        dataProp: S
      }, f)), i.ok(f));
    });
    function x(b) {
      const { opts: S, errSchemaPath: v } = u, y = s.length, d = y === b.minItems && (y === b.maxItems || b[a] === !1);
      if (S.strictTuples && !d) {
        const l = `"${g}" is ${y}-tuple, but minItems or maxItems/${a} are not specified or different at path "${v}"`;
        (0, t.checkStrictMode)(u, l, S.strictTuples);
      }
    }
  }
  return Dt.validateTuple = c, Dt.default = r, Dt;
}
var Wa;
function du() {
  if (Wa) return Kn;
  Wa = 1, Object.defineProperty(Kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yc(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return Kn.default = t, Kn;
}
var Qn = {}, Xa;
function lu() {
  if (Xa) return Qn;
  Xa = 1, Object.defineProperty(Qn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ We(), r = /* @__PURE__ */ Xc(), i = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: a } }) => (0, e.str)`must NOT have more than ${a} items`,
      params: ({ params: { len: a } }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { schema: s, parentSchema: o, it: p } = a, { prefixItems: h } = o;
      p.items = !0, !(0, t.alwaysValidSchema)(p, s) && (h ? (0, r.validateAdditionalItems)(a, h) : a.ok((0, n.validateArray)(a)));
    }
  };
  return Qn.default = i, Qn;
}
var Wn = {}, Ya;
function uu() {
  if (Ya) return Wn;
  Ya = 1, Object.defineProperty(Wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), r = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: c, max: i } }) => i === void 0 ? (0, e.str)`must contain at least ${c} valid item(s)` : (0, e.str)`must contain at least ${c} and no more than ${i} valid item(s)`,
      params: ({ params: { min: c, max: i } }) => i === void 0 ? (0, e._)`{minContains: ${c}}` : (0, e._)`{minContains: ${c}, maxContains: ${i}}`
    },
    code(c) {
      const { gen: i, schema: a, parentSchema: s, data: o, it: p } = c;
      let h, g;
      const { minContains: u, maxContains: f } = s;
      p.opts.next ? (h = u === void 0 ? 1 : u, g = f) : h = 1;
      const w = i.const("len", (0, e._)`${o}.length`);
      if (c.setParams({ min: h, max: g }), g === void 0 && h === 0) {
        (0, t.checkStrictMode)(p, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (g !== void 0 && h > g) {
        (0, t.checkStrictMode)(p, '"minContains" > "maxContains" is always invalid'), c.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(p, a)) {
        let y = (0, e._)`${w} >= ${h}`;
        g !== void 0 && (y = (0, e._)`${y} && ${w} <= ${g}`), c.pass(y);
        return;
      }
      p.items = !0;
      const x = i.name("valid");
      g === void 0 && h === 1 ? S(x, () => i.if(x, () => i.break())) : h === 0 ? (i.let(x, !0), g !== void 0 && i.if((0, e._)`${o}.length > 0`, b)) : (i.let(x, !1), b()), c.result(x, () => c.reset());
      function b() {
        const y = i.name("_valid"), d = i.let("count", 0);
        S(y, () => i.if(y, () => v(d)));
      }
      function S(y, d) {
        i.forRange("i", 0, w, (l) => {
          c.subschema({
            keyword: "contains",
            dataProp: l,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, y), d();
        });
      }
      function v(y) {
        i.code((0, e._)`${y}++`), g === void 0 ? i.if((0, e._)`${y} >= ${h}`, () => i.assign(x, !0).break()) : (i.if((0, e._)`${y} > ${g}`, () => i.assign(x, !1).break()), h === 1 ? i.assign(x, !0) : i.if((0, e._)`${y} >= ${h}`, () => i.assign(x, !0)));
      }
    }
  };
  return Wn.default = r, Wn;
}
var vi = {}, eo;
function Cs() {
  return eo || (eo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ re(), r = /* @__PURE__ */ We();
    e.error = {
      message: ({ params: { property: o, depsCount: p, deps: h } }) => {
        const g = p === 1 ? "property" : "properties";
        return (0, t.str)`must have ${g} ${h} when property ${o} is present`;
      },
      params: ({ params: { property: o, depsCount: p, deps: h, missingProperty: g } }) => (0, t._)`{property: ${o},
    missingProperty: ${g},
    depsCount: ${p},
    deps: ${h}}`
      // TODO change to reference
    };
    const c = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(o) {
        const [p, h] = i(o);
        a(o, p), s(o, h);
      }
    };
    function i({ schema: o }) {
      const p = {}, h = {};
      for (const g in o) {
        if (g === "__proto__")
          continue;
        const u = Array.isArray(o[g]) ? p : h;
        u[g] = o[g];
      }
      return [p, h];
    }
    function a(o, p = o.schema) {
      const { gen: h, data: g, it: u } = o;
      if (Object.keys(p).length === 0)
        return;
      const f = h.let("missing");
      for (const w in p) {
        const x = p[w];
        if (x.length === 0)
          continue;
        const b = (0, r.propertyInData)(h, g, w, u.opts.ownProperties);
        o.setParams({
          property: w,
          depsCount: x.length,
          deps: x.join(", ")
        }), u.allErrors ? h.if(b, () => {
          for (const S of x)
            (0, r.checkReportMissingProp)(o, S);
        }) : (h.if((0, t._)`${b} && (${(0, r.checkMissingProp)(o, x, f)})`), (0, r.reportMissingProp)(o, f), h.else());
      }
    }
    e.validatePropertyDeps = a;
    function s(o, p = o.schema) {
      const { gen: h, data: g, keyword: u, it: f } = o, w = h.name("valid");
      for (const x in p)
        (0, n.alwaysValidSchema)(f, p[x]) || (h.if(
          (0, r.propertyInData)(h, g, x, f.opts.ownProperties),
          () => {
            const b = o.subschema({ keyword: u, schemaProp: x }, w);
            o.mergeValidEvaluated(b, w);
          },
          () => h.var(w, !0)
          // TODO var
        ), o.ok(w));
    }
    e.validateSchemaDeps = s, e.default = c;
  })(vi)), vi;
}
var Xn = {}, to;
function pu() {
  if (to) return Xn;
  to = 1, Object.defineProperty(Xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), r = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: c }) => (0, e._)`{propertyName: ${c.propertyName}}`
    },
    code(c) {
      const { gen: i, schema: a, data: s, it: o } = c;
      if ((0, t.alwaysValidSchema)(o, a))
        return;
      const p = i.name("valid");
      i.forIn("key", s, (h) => {
        c.setParams({ propertyName: h }), c.subschema({
          keyword: "propertyNames",
          data: h,
          dataTypes: ["string"],
          propertyName: h,
          compositeRule: !0
        }, p), i.if((0, e.not)(p), () => {
          c.error(!0), o.allErrors || i.break();
        });
      }), c.ok(p);
    }
  };
  return Xn.default = r, Xn;
}
var Yn = {}, no;
function ed() {
  if (no) return Yn;
  no = 1, Object.defineProperty(Yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ We(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ Qe(), r = /* @__PURE__ */ re(), i = {
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
      const { gen: s, schema: o, parentSchema: p, data: h, errsCount: g, it: u } = a;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: f, opts: w } = u;
      if (u.props = !0, w.removeAdditional !== "all" && (0, r.alwaysValidSchema)(u, o))
        return;
      const x = (0, e.allSchemaProperties)(p.properties), b = (0, e.allSchemaProperties)(p.patternProperties);
      S(), a.ok((0, t._)`${g} === ${n.default.errors}`);
      function S() {
        s.forIn("key", h, (m) => {
          !x.length && !b.length ? d(m) : s.if(v(m), () => d(m));
        });
      }
      function v(m) {
        let I;
        if (x.length > 8) {
          const q = (0, r.schemaRefOrVal)(u, p.properties, "properties");
          I = (0, e.isOwnProperty)(s, q, m);
        } else x.length ? I = (0, t.or)(...x.map((q) => (0, t._)`${m} === ${q}`)) : I = t.nil;
        return b.length && (I = (0, t.or)(I, ...b.map((q) => (0, t._)`${(0, e.usePattern)(a, q)}.test(${m})`))), (0, t.not)(I);
      }
      function y(m) {
        s.code((0, t._)`delete ${h}[${m}]`);
      }
      function d(m) {
        if (w.removeAdditional === "all" || w.removeAdditional && o === !1) {
          y(m);
          return;
        }
        if (o === !1) {
          a.setParams({ additionalProperty: m }), a.error(), f || s.break();
          return;
        }
        if (typeof o == "object" && !(0, r.alwaysValidSchema)(u, o)) {
          const I = s.name("valid");
          w.removeAdditional === "failing" ? (l(m, I, !1), s.if((0, t.not)(I), () => {
            a.reset(), y(m);
          })) : (l(m, I), f || s.if((0, t.not)(I), () => s.break()));
        }
      }
      function l(m, I, q) {
        const _ = {
          keyword: "additionalProperties",
          dataProp: m,
          dataPropType: r.Type.Str
        };
        q === !1 && Object.assign(_, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), a.subschema(_, I);
      }
    }
  };
  return Yn.default = i, Yn;
}
var er = {}, ro;
function fu() {
  if (ro) return er;
  ro = 1, Object.defineProperty(er, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ gn(), t = /* @__PURE__ */ We(), n = /* @__PURE__ */ re(), r = /* @__PURE__ */ ed(), c = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: a, schema: s, parentSchema: o, data: p, it: h } = i;
      h.opts.removeAdditional === "all" && o.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(h, r.default, "additionalProperties"));
      const g = (0, t.allSchemaProperties)(s);
      for (const b of g)
        h.definedProperties.add(b);
      h.opts.unevaluated && g.length && h.props !== !0 && (h.props = n.mergeEvaluated.props(a, (0, n.toHash)(g), h.props));
      const u = g.filter((b) => !(0, n.alwaysValidSchema)(h, s[b]));
      if (u.length === 0)
        return;
      const f = a.name("valid");
      for (const b of u)
        w(b) ? x(b) : (a.if((0, t.propertyInData)(a, p, b, h.opts.ownProperties)), x(b), h.allErrors || a.else().var(f, !0), a.endIf()), i.it.definedProperties.add(b), i.ok(f);
      function w(b) {
        return h.opts.useDefaults && !h.compositeRule && s[b].default !== void 0;
      }
      function x(b) {
        i.subschema({
          keyword: "properties",
          schemaProp: b,
          dataProp: b
        }, f);
      }
    }
  };
  return er.default = c, er;
}
var tr = {}, io;
function hu() {
  if (io) return tr;
  io = 1, Object.defineProperty(tr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ We(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ re(), r = /* @__PURE__ */ re(), c = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: a, schema: s, data: o, parentSchema: p, it: h } = i, { opts: g } = h, u = (0, e.allSchemaProperties)(s), f = u.filter((d) => (0, n.alwaysValidSchema)(h, s[d]));
      if (u.length === 0 || f.length === u.length && (!h.opts.unevaluated || h.props === !0))
        return;
      const w = g.strictSchema && !g.allowMatchingProperties && p.properties, x = a.name("valid");
      h.props !== !0 && !(h.props instanceof t.Name) && (h.props = (0, r.evaluatedPropsToName)(a, h.props));
      const { props: b } = h;
      S();
      function S() {
        for (const d of u)
          w && v(d), h.allErrors ? y(d) : (a.var(x, !0), y(d), a.if(x));
      }
      function v(d) {
        for (const l in w)
          new RegExp(d).test(l) && (0, n.checkStrictMode)(h, `property ${l} matches pattern ${d} (use allowMatchingProperties)`);
      }
      function y(d) {
        a.forIn("key", o, (l) => {
          a.if((0, t._)`${(0, e.usePattern)(i, d)}.test(${l})`, () => {
            const m = f.includes(d);
            m || i.subschema({
              keyword: "patternProperties",
              schemaProp: d,
              dataProp: l,
              dataPropType: r.Type.Str
            }, x), h.opts.unevaluated && b !== !0 ? a.assign((0, t._)`${b}[${l}]`, !0) : !m && !h.allErrors && a.if((0, t.not)(x), () => a.break());
          });
        });
      }
    }
  };
  return tr.default = c, tr;
}
var nr = {}, so;
function mu() {
  if (so) return nr;
  so = 1, Object.defineProperty(nr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: r, schema: c, it: i } = n;
      if ((0, e.alwaysValidSchema)(i, c)) {
        n.fail();
        return;
      }
      const a = r.name("valid");
      n.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, a), n.failResult(a, () => n.reset(), () => n.error());
    },
    error: { message: "must NOT be valid" }
  };
  return nr.default = t, nr;
}
var rr = {}, ao;
function yu() {
  if (ao) return rr;
  ao = 1, Object.defineProperty(rr, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ We()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return rr.default = t, rr;
}
var ir = {}, oo;
function gu() {
  if (oo) return ir;
  oo = 1, Object.defineProperty(ir, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), r = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: c }) => (0, e._)`{passingSchemas: ${c.passing}}`
    },
    code(c) {
      const { gen: i, schema: a, parentSchema: s, it: o } = c;
      if (!Array.isArray(a))
        throw new Error("ajv implementation error");
      if (o.opts.discriminator && s.discriminator)
        return;
      const p = a, h = i.let("valid", !1), g = i.let("passing", null), u = i.name("_valid");
      c.setParams({ passing: g }), i.block(f), c.result(h, () => c.reset(), () => c.error(!0));
      function f() {
        p.forEach((w, x) => {
          let b;
          (0, t.alwaysValidSchema)(o, w) ? i.var(u, !0) : b = c.subschema({
            keyword: "oneOf",
            schemaProp: x,
            compositeRule: !0
          }, u), x > 0 && i.if((0, e._)`${u} && ${h}`).assign(h, !1).assign(g, (0, e._)`[${g}, ${x}]`).else(), i.if(u, () => {
            i.assign(h, !0), i.assign(g, x), b && c.mergeEvaluated(b, e.Name);
          });
        });
      }
    }
  };
  return ir.default = r, ir;
}
var sr = {}, co;
function vu() {
  if (co) return sr;
  co = 1, Object.defineProperty(sr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: r, schema: c, it: i } = n;
      if (!Array.isArray(c))
        throw new Error("ajv implementation error");
      const a = r.name("valid");
      c.forEach((s, o) => {
        if ((0, e.alwaysValidSchema)(i, s))
          return;
        const p = n.subschema({ keyword: "allOf", schemaProp: o }, a);
        n.ok(a), n.mergeEvaluated(p);
      });
    }
  };
  return sr.default = t, sr;
}
var ar = {}, lo;
function bu() {
  if (lo) return ar;
  lo = 1, Object.defineProperty(ar, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), r = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: i }) => (0, e.str)`must match "${i.ifClause}" schema`,
      params: ({ params: i }) => (0, e._)`{failingKeyword: ${i.ifClause}}`
    },
    code(i) {
      const { gen: a, parentSchema: s, it: o } = i;
      s.then === void 0 && s.else === void 0 && (0, t.checkStrictMode)(o, '"if" without "then" and "else" is ignored');
      const p = c(o, "then"), h = c(o, "else");
      if (!p && !h)
        return;
      const g = a.let("valid", !0), u = a.name("_valid");
      if (f(), i.reset(), p && h) {
        const x = a.let("ifClause");
        i.setParams({ ifClause: x }), a.if(u, w("then", x), w("else", x));
      } else p ? a.if(u, w("then")) : a.if((0, e.not)(u), w("else"));
      i.pass(g, () => i.error(!0));
      function f() {
        const x = i.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, u);
        i.mergeEvaluated(x);
      }
      function w(x, b) {
        return () => {
          const S = i.subschema({ keyword: x }, u);
          a.assign(g, u), i.mergeValidEvaluated(S, g), b ? a.assign(b, (0, e._)`${x}`) : i.setParams({ ifClause: x });
        };
      }
    }
  };
  function c(i, a) {
    const s = i.schema[a];
    return s !== void 0 && !(0, t.alwaysValidSchema)(i, s);
  }
  return ar.default = r, ar;
}
var or = {}, uo;
function wu() {
  if (uo) return or;
  uo = 1, Object.defineProperty(or, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: c }) {
      r.if === void 0 && (0, e.checkStrictMode)(c, `"${n}" without "if" is ignored`);
    }
  };
  return or.default = t, or;
}
var po;
function td() {
  if (po) return Jn;
  po = 1, Object.defineProperty(Jn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xc(), t = /* @__PURE__ */ du(), n = /* @__PURE__ */ Yc(), r = /* @__PURE__ */ lu(), c = /* @__PURE__ */ uu(), i = /* @__PURE__ */ Cs(), a = /* @__PURE__ */ pu(), s = /* @__PURE__ */ ed(), o = /* @__PURE__ */ fu(), p = /* @__PURE__ */ hu(), h = /* @__PURE__ */ mu(), g = /* @__PURE__ */ yu(), u = /* @__PURE__ */ gu(), f = /* @__PURE__ */ vu(), w = /* @__PURE__ */ bu(), x = /* @__PURE__ */ wu();
  function b(S = !1) {
    const v = [
      // any
      h.default,
      g.default,
      u.default,
      f.default,
      w.default,
      x.default,
      // object
      a.default,
      s.default,
      i.default,
      o.default,
      p.default
    ];
    return S ? v.push(t.default, r.default) : v.push(e.default, n.default), v.push(c.default), v;
  }
  return Jn.default = b, Jn;
}
var cr = {}, zt = {}, fo;
function nd() {
  if (fo) return zt;
  fo = 1, Object.defineProperty(zt, "__esModule", { value: !0 }), zt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Qe(), n = /* @__PURE__ */ Br(), r = /* @__PURE__ */ Ps(), c = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (s) => i(s, s.schema)
  };
  function i(s, o) {
    const { gen: p, it: h } = s;
    h.schemaEnv.root.dynamicAnchors[o] = !0;
    const g = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(o)}`, u = h.errSchemaPath === "#" ? h.validateName : a(s);
    p.if((0, e._)`!${g}`, () => p.assign(g, u));
  }
  zt.dynamicAnchor = i;
  function a(s) {
    const { schemaEnv: o, schema: p, self: h } = s.it, { root: g, baseId: u, localRefs: f, meta: w } = o.root, { schemaId: x } = h.opts, b = new n.SchemaEnv({ schema: p, schemaId: x, root: g, baseId: u, localRefs: f, meta: w });
    return n.compileSchema.call(h, b), (0, r.getValidate)(s, b);
  }
  return zt.default = c, zt;
}
var Vt = {}, ho;
function rd() {
  if (ho) return Vt;
  ho = 1, Object.defineProperty(Vt, "__esModule", { value: !0 }), Vt.dynamicRef = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Qe(), n = /* @__PURE__ */ Ps(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (i) => c(i, i.schema)
  };
  function c(i, a) {
    const { gen: s, keyword: o, it: p } = i;
    if (a[0] !== "#")
      throw new Error(`"${o}" only supports hash fragment reference`);
    const h = a.slice(1);
    if (p.allErrors)
      g();
    else {
      const f = s.let("valid", !1);
      g(f), i.ok(f);
    }
    function g(f) {
      if (p.schemaEnv.root.dynamicAnchors[h]) {
        const w = s.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(h)}`);
        s.if(w, u(w, f), u(p.validateName, f));
      } else
        u(p.validateName, f)();
    }
    function u(f, w) {
      return w ? () => s.block(() => {
        (0, n.callRef)(i, f), s.let(w, !0);
      }) : () => (0, n.callRef)(i, f);
    }
  }
  return Vt.dynamicRef = c, Vt.default = r, Vt;
}
var dr = {}, mo;
function xu() {
  if (mo) return dr;
  mo = 1, Object.defineProperty(dr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ nd(), t = /* @__PURE__ */ re(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return dr.default = n, dr;
}
var lr = {}, yo;
function Su() {
  if (yo) return lr;
  yo = 1, Object.defineProperty(lr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ rd(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return lr.default = t, lr;
}
var go;
function Iu() {
  if (go) return cr;
  go = 1, Object.defineProperty(cr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ nd(), t = /* @__PURE__ */ rd(), n = /* @__PURE__ */ xu(), r = /* @__PURE__ */ Su(), c = [e.default, t.default, n.default, r.default];
  return cr.default = c, cr;
}
var ur = {}, pr = {}, vo;
function qu() {
  if (vo) return pr;
  vo = 1, Object.defineProperty(pr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Cs(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return pr.default = t, pr;
}
var fr = {}, bo;
function Au() {
  if (bo) return fr;
  bo = 1, Object.defineProperty(fr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Cs(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return fr.default = t, fr;
}
var hr = {}, wo;
function Ru() {
  if (wo) return hr;
  wo = 1, Object.defineProperty(hr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ re(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: c }) {
      r.contains === void 0 && (0, e.checkStrictMode)(c, `"${n}" without "contains" is ignored`);
    }
  };
  return hr.default = t, hr;
}
var xo;
function ju() {
  if (xo) return ur;
  xo = 1, Object.defineProperty(ur, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ qu(), t = /* @__PURE__ */ Au(), n = /* @__PURE__ */ Ru(), r = [e.default, t.default, n.default];
  return ur.default = r, ur;
}
var mr = {}, yr = {}, So;
function $u() {
  if (So) return yr;
  So = 1, Object.defineProperty(yr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), n = /* @__PURE__ */ Qe(), c = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: i }) => (0, e._)`{unevaluatedProperty: ${i.unevaluatedProperty}}`
    },
    code(i) {
      const { gen: a, schema: s, data: o, errsCount: p, it: h } = i;
      if (!p)
        throw new Error("ajv implementation error");
      const { allErrors: g, props: u } = h;
      u instanceof e.Name ? a.if((0, e._)`${u} !== true`, () => a.forIn("key", o, (b) => a.if(w(u, b), () => f(b)))) : u !== !0 && a.forIn("key", o, (b) => u === void 0 ? f(b) : a.if(x(u, b), () => f(b))), h.props = !0, i.ok((0, e._)`${p} === ${n.default.errors}`);
      function f(b) {
        if (s === !1) {
          i.setParams({ unevaluatedProperty: b }), i.error(), g || a.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(h, s)) {
          const S = a.name("valid");
          i.subschema({
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
  return yr.default = c, yr;
}
var gr = {}, Io;
function _u() {
  if (Io) return gr;
  Io = 1, Object.defineProperty(gr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ re(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: c } }) => (0, e.str)`must NOT have more than ${c} items`,
      params: ({ params: { len: c } }) => (0, e._)`{limit: ${c}}`
    },
    code(c) {
      const { gen: i, schema: a, data: s, it: o } = c, p = o.items || 0;
      if (p === !0)
        return;
      const h = i.const("len", (0, e._)`${s}.length`);
      if (a === !1)
        c.setParams({ len: p }), c.fail((0, e._)`${h} > ${p}`);
      else if (typeof a == "object" && !(0, t.alwaysValidSchema)(o, a)) {
        const u = i.var("valid", (0, e._)`${h} <= ${p}`);
        i.if((0, e.not)(u), () => g(u, p)), c.ok(u);
      }
      o.items = !0;
      function g(u, f) {
        i.forRange("i", f, h, (w) => {
          c.subschema({ keyword: "unevaluatedItems", dataProp: w, dataPropType: t.Type.Num }, u), o.allErrors || i.if((0, e.not)(u), () => i.break());
        });
      }
    }
  };
  return gr.default = r, gr;
}
var qo;
function Pu() {
  if (qo) return mr;
  qo = 1, Object.defineProperty(mr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ $u(), t = /* @__PURE__ */ _u(), n = [e.default, t.default];
  return mr.default = n, mr;
}
var vr = {}, br = {}, Ao;
function Tu() {
  if (Ao) return br;
  Ao = 1, Object.defineProperty(br, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
      params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
    },
    code(r, c) {
      const { gen: i, data: a, $data: s, schema: o, schemaCode: p, it: h } = r, { opts: g, errSchemaPath: u, schemaEnv: f, self: w } = h;
      if (!g.validateFormats)
        return;
      s ? x() : b();
      function x() {
        const S = i.scopeValue("formats", {
          ref: w.formats,
          code: g.code.formats
        }), v = i.const("fDef", (0, e._)`${S}[${p}]`), y = i.let("fType"), d = i.let("format");
        i.if((0, e._)`typeof ${v} == "object" && !(${v} instanceof RegExp)`, () => i.assign(y, (0, e._)`${v}.type || "string"`).assign(d, (0, e._)`${v}.validate`), () => i.assign(y, (0, e._)`"string"`).assign(d, v)), r.fail$data((0, e.or)(l(), m()));
        function l() {
          return g.strictSchema === !1 ? e.nil : (0, e._)`${p} && !${d}`;
        }
        function m() {
          const I = f.$async ? (0, e._)`(${v}.async ? await ${d}(${a}) : ${d}(${a}))` : (0, e._)`${d}(${a})`, q = (0, e._)`(typeof ${d} == "function" ? ${I} : ${d}.test(${a}))`;
          return (0, e._)`${d} && ${d} !== true && ${y} === ${c} && !${q}`;
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
        const [v, y, d] = m(S);
        v === c && r.pass(I());
        function l() {
          if (g.strictSchema === !1) {
            w.logger.warn(q());
            return;
          }
          throw new Error(q());
          function q() {
            return `unknown format "${o}" ignored in schema at path "${u}"`;
          }
        }
        function m(q) {
          const _ = q instanceof RegExp ? (0, e.regexpCode)(q) : g.code.formats ? (0, e._)`${g.code.formats}${(0, e.getProperty)(o)}` : void 0, C = i.scopeValue("formats", { key: o, ref: q, code: _ });
          return typeof q == "object" && !(q instanceof RegExp) ? [q.type || "string", q.validate, (0, e._)`${C}.validate`] : ["string", q, C];
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
  return br.default = n, br;
}
var Ro;
function id() {
  if (Ro) return vr;
  Ro = 1, Object.defineProperty(vr, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Tu()).default];
  return vr.default = t, vr;
}
var Pt = {}, jo;
function sd() {
  return jo || (jo = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.contentVocabulary = Pt.metadataVocabulary = void 0, Pt.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Pt.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Pt;
}
var $o;
function Cu() {
  if ($o) return Cn;
  $o = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qc(), t = /* @__PURE__ */ Wc(), n = /* @__PURE__ */ td(), r = /* @__PURE__ */ Iu(), c = /* @__PURE__ */ ju(), i = /* @__PURE__ */ Pu(), a = /* @__PURE__ */ id(), s = /* @__PURE__ */ sd(), o = [
    r.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    a.default,
    s.metadataVocabulary,
    s.contentVocabulary,
    c.default,
    i.default
  ];
  return Cn.default = o, Cn;
}
var wr = {}, rn = {}, _o;
function Eu() {
  if (_o) return rn;
  _o = 1, Object.defineProperty(rn, "__esModule", { value: !0 }), rn.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (rn.DiscrError = e = {})), rn;
}
var Po;
function ad() {
  if (Po) return wr;
  Po = 1, Object.defineProperty(wr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Eu(), n = /* @__PURE__ */ Br(), r = /* @__PURE__ */ vn(), c = /* @__PURE__ */ re(), a = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: s, tagName: o } }) => s === t.DiscrError.Tag ? `tag "${o}" must be string` : `value of tag "${o}" must be in oneOf`,
      params: ({ params: { discrError: s, tag: o, tagName: p } }) => (0, e._)`{error: ${s}, tag: ${p}, tagValue: ${o}}`
    },
    code(s) {
      const { gen: o, data: p, schema: h, parentSchema: g, it: u } = s, { oneOf: f } = g;
      if (!u.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const w = h.propertyName;
      if (typeof w != "string")
        throw new Error("discriminator: requires propertyName");
      if (h.mapping)
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
        const l = o.name("valid"), m = s.subschema({ keyword: "oneOf", schemaProp: d }, l);
        return s.mergeEvaluated(m, e.Name), l;
      }
      function y() {
        var d;
        const l = {}, m = q(g);
        let I = !0;
        for (let R = 0; R < f.length; R++) {
          let O = f[R];
          if (O?.$ref && !(0, c.schemaHasRulesButRef)(O, u.self.RULES)) {
            const E = O.$ref;
            if (O = n.resolveRef.call(u.self, u.schemaEnv.root, u.baseId, E), O instanceof n.SchemaEnv && (O = O.schema), O === void 0)
              throw new r.default(u.opts.uriResolver, u.baseId, E);
          }
          const $ = (d = O?.properties) === null || d === void 0 ? void 0 : d[w];
          if (typeof $ != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${w}"`);
          I = I && (m || q(O)), _($, R);
        }
        if (!I)
          throw new Error(`discriminator: "${w}" must be required`);
        return l;
        function q({ required: R }) {
          return Array.isArray(R) && R.includes(w);
        }
        function _(R, O) {
          if (R.const)
            C(R.const, O);
          else if (R.enum)
            for (const $ of R.enum)
              C($, O);
          else
            throw new Error(`discriminator: "properties/${w}" must have "const" or "enum"`);
        }
        function C(R, O) {
          if (typeof R != "string" || R in l)
            throw new Error(`discriminator: "${w}" values must be unique strings`);
          l[R] = O;
        }
      }
    }
  };
  return wr.default = a, wr;
}
var xr = {};
const ku = "https://json-schema.org/draft/2020-12/schema", Mu = "https://json-schema.org/draft/2020-12/schema", Ou = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Lu = "meta", Nu = "Core and Validation specifications meta-schema", Du = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], zu = ["object", "boolean"], Vu = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Uu = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Gu = {
  $schema: ku,
  $id: Mu,
  $vocabulary: Ou,
  $dynamicAnchor: Lu,
  title: Nu,
  allOf: Du,
  type: zu,
  $comment: Vu,
  properties: Uu
}, Fu = "https://json-schema.org/draft/2020-12/schema", Bu = "https://json-schema.org/draft/2020-12/meta/applicator", Zu = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Hu = "meta", Ju = "Applicator vocabulary meta-schema", Ku = ["object", "boolean"], Qu = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Wu = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Xu = {
  $schema: Fu,
  $id: Bu,
  $vocabulary: Zu,
  $dynamicAnchor: Hu,
  title: Ju,
  type: Ku,
  properties: Qu,
  $defs: Wu
}, Yu = "https://json-schema.org/draft/2020-12/schema", ep = "https://json-schema.org/draft/2020-12/meta/unevaluated", tp = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, np = "meta", rp = "Unevaluated applicator vocabulary meta-schema", ip = ["object", "boolean"], sp = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, ap = {
  $schema: Yu,
  $id: ep,
  $vocabulary: tp,
  $dynamicAnchor: np,
  title: rp,
  type: ip,
  properties: sp
}, op = "https://json-schema.org/draft/2020-12/schema", cp = "https://json-schema.org/draft/2020-12/meta/content", dp = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, lp = "meta", up = "Content vocabulary meta-schema", pp = ["object", "boolean"], fp = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, hp = {
  $schema: op,
  $id: cp,
  $vocabulary: dp,
  $dynamicAnchor: lp,
  title: up,
  type: pp,
  properties: fp
}, mp = "https://json-schema.org/draft/2020-12/schema", yp = "https://json-schema.org/draft/2020-12/meta/core", gp = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, vp = "meta", bp = "Core vocabulary meta-schema", wp = ["object", "boolean"], xp = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Sp = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Ip = {
  $schema: mp,
  $id: yp,
  $vocabulary: gp,
  $dynamicAnchor: vp,
  title: bp,
  type: wp,
  properties: xp,
  $defs: Sp
}, qp = "https://json-schema.org/draft/2020-12/schema", Ap = "https://json-schema.org/draft/2020-12/meta/format-annotation", Rp = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, jp = "meta", $p = "Format vocabulary meta-schema for annotation results", _p = ["object", "boolean"], Pp = { format: { type: "string" } }, Tp = {
  $schema: qp,
  $id: Ap,
  $vocabulary: Rp,
  $dynamicAnchor: jp,
  title: $p,
  type: _p,
  properties: Pp
}, Cp = "https://json-schema.org/draft/2020-12/schema", Ep = "https://json-schema.org/draft/2020-12/meta/meta-data", kp = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Mp = "meta", Op = "Meta-data vocabulary meta-schema", Lp = ["object", "boolean"], Np = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Dp = {
  $schema: Cp,
  $id: Ep,
  $vocabulary: kp,
  $dynamicAnchor: Mp,
  title: Op,
  type: Lp,
  properties: Np
}, zp = "https://json-schema.org/draft/2020-12/schema", Vp = "https://json-schema.org/draft/2020-12/meta/validation", Up = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Gp = "meta", Fp = "Validation vocabulary meta-schema", Bp = ["object", "boolean"], Zp = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Hp = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Jp = {
  $schema: zp,
  $id: Vp,
  $vocabulary: Up,
  $dynamicAnchor: Gp,
  title: Fp,
  type: Bp,
  properties: Zp,
  $defs: Hp
};
var To;
function Kp() {
  if (To) return xr;
  To = 1, Object.defineProperty(xr, "__esModule", { value: !0 });
  const e = Gu, t = Xu, n = ap, r = hp, c = Ip, i = Tp, a = Dp, s = Jp, o = ["/properties"];
  function p(h) {
    return [
      e,
      t,
      n,
      r,
      c,
      g(this, i),
      a,
      g(this, s)
    ].forEach((u) => this.addMetaSchema(u, void 0, !1)), this;
    function g(u, f) {
      return h ? u.$dataMetaSchema(f, o) : f;
    }
  }
  return xr.default = p, xr;
}
var Co;
function Qp() {
  return Co || (Co = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Kc(), r = /* @__PURE__ */ Cu(), c = /* @__PURE__ */ ad(), i = /* @__PURE__ */ Kp(), a = "https://json-schema.org/draft/2020-12/schema";
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
        super._addVocabularies(), r.default.forEach((f) => this.addVocabulary(f)), this.opts.discriminator && this.addKeyword(c.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: f, meta: w } = this.opts;
        w && (i.default.call(this, f), this.refs["http://json-schema.org/schema"] = a);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(a) ? a : void 0);
      }
    }
    t.Ajv2020 = s, e.exports = t = s, e.exports.Ajv2020 = s, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = s;
    var o = /* @__PURE__ */ gn();
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
    var h = /* @__PURE__ */ Fr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return h.default;
    } });
    var g = /* @__PURE__ */ vn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return g.default;
    } });
  })(jn, jn.exports)), jn.exports;
}
var Wp = /* @__PURE__ */ Qp();
const Xp = /* @__PURE__ */ _s(Wp);
var Sr = { exports: {} }, bi = {}, Eo;
function Yp() {
  return Eo || (Eo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(R, O) {
      return { validate: R, compare: O };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(i, a),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: t(o(!0), p),
      "date-time": t(u(!0), f),
      "iso-time": t(o(), h),
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
      int32: { type: "number", validate: m },
      // signed 64 bit integer
      int64: { type: "number", validate: I },
      // C-type float
      float: { type: "number", validate: q },
      // C-type double
      double: { type: "number", validate: q },
      // hint to the UI to hide input strings
      password: !0,
      // unchecked string payload
      binary: !0
    }, e.fastFormats = {
      ...e.fullFormats,
      date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, a),
      time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, p),
      "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, f),
      "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, h),
      "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, w),
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    }, e.formatNames = Object.keys(e.fullFormats);
    function n(R) {
      return R % 4 === 0 && (R % 100 !== 0 || R % 400 === 0);
    }
    const r = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, c = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function i(R) {
      const O = r.exec(R);
      if (!O)
        return !1;
      const $ = +O[1], E = +O[2], z = +O[3];
      return E >= 1 && E <= 12 && z >= 1 && z <= (E === 2 && n($) ? 29 : c[E]);
    }
    function a(R, O) {
      if (R && O)
        return R > O ? 1 : R < O ? -1 : 0;
    }
    const s = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function o(R) {
      return function($) {
        const E = s.exec($);
        if (!E)
          return !1;
        const z = +E[1], P = +E[2], Z = +E[3], L = E[4], F = E[5] === "-" ? -1 : 1, k = +(E[6] || 0), M = +(E[7] || 0);
        if (k > 23 || M > 59 || R && !L)
          return !1;
        if (z <= 23 && P <= 59 && Z < 60)
          return !0;
        const V = P - M * F, N = z - k * F - (V < 0 ? 1 : 0);
        return (N === 23 || N === -1) && (V === 59 || V === -1) && Z < 61;
      };
    }
    function p(R, O) {
      if (!(R && O))
        return;
      const $ = (/* @__PURE__ */ new Date("2020-01-01T" + R)).valueOf(), E = (/* @__PURE__ */ new Date("2020-01-01T" + O)).valueOf();
      if ($ && E)
        return $ - E;
    }
    function h(R, O) {
      if (!(R && O))
        return;
      const $ = s.exec(R), E = s.exec(O);
      if ($ && E)
        return R = $[1] + $[2] + $[3], O = E[1] + E[2] + E[3], R > O ? 1 : R < O ? -1 : 0;
    }
    const g = /t|\s/i;
    function u(R) {
      const O = o(R);
      return function(E) {
        const z = E.split(g);
        return z.length === 2 && i(z[0]) && O(z[1]);
      };
    }
    function f(R, O) {
      if (!(R && O))
        return;
      const $ = new Date(R).valueOf(), E = new Date(O).valueOf();
      if ($ && E)
        return $ - E;
    }
    function w(R, O) {
      if (!(R && O))
        return;
      const [$, E] = R.split(g), [z, P] = O.split(g), Z = a($, z);
      if (Z !== void 0)
        return Z || p(E, P);
    }
    const x = /\/|:/, b = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function S(R) {
      return x.test(R) && b.test(R);
    }
    const v = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function y(R) {
      return v.lastIndex = 0, v.test(R);
    }
    const d = -2147483648, l = 2 ** 31 - 1;
    function m(R) {
      return Number.isInteger(R) && R <= l && R >= d;
    }
    function I(R) {
      return Number.isInteger(R);
    }
    function q() {
      return !0;
    }
    const _ = /[^\\]\\Z/;
    function C(R) {
      if (_.test(R))
        return !1;
      try {
        return new RegExp(R), !0;
      } catch {
        return !1;
      }
    }
  })(bi)), bi;
}
var wi = {}, Ir = { exports: {} }, qr = {}, ko;
function ef() {
  if (ko) return qr;
  ko = 1, Object.defineProperty(qr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qc(), t = /* @__PURE__ */ Wc(), n = /* @__PURE__ */ td(), r = /* @__PURE__ */ id(), c = /* @__PURE__ */ sd(), i = [
    e.default,
    t.default,
    (0, n.default)(),
    r.default,
    c.metadataVocabulary,
    c.contentVocabulary
  ];
  return qr.default = i, qr;
}
const tf = "http://json-schema.org/draft-07/schema#", nf = "http://json-schema.org/draft-07/schema#", rf = "Core schema meta-schema", sf = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, af = ["object", "boolean"], of = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, cf = {
  $schema: tf,
  $id: nf,
  title: rf,
  definitions: sf,
  type: af,
  properties: of,
  default: !0
};
var Mo;
function df() {
  return Mo || (Mo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const n = /* @__PURE__ */ Kc(), r = /* @__PURE__ */ ef(), c = /* @__PURE__ */ ad(), i = cf, a = ["/properties"], s = "http://json-schema.org/draft-07/schema";
    class o extends n.default {
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach((w) => this.addVocabulary(w)), this.opts.discriminator && this.addKeyword(c.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta)
          return;
        const w = this.opts.$data ? this.$dataMetaSchema(i, a) : i;
        this.addMetaSchema(w, s, !1), this.refs["http://json-schema.org/schema"] = s;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv = o, e.exports = t = o, e.exports.Ajv = o, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = o;
    var p = /* @__PURE__ */ gn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return p.KeywordCxt;
    } });
    var h = /* @__PURE__ */ te();
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
    var g = /* @__PURE__ */ Fr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return g.default;
    } });
    var u = /* @__PURE__ */ vn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return u.default;
    } });
  })(Ir, Ir.exports)), Ir.exports;
}
var Oo;
function lf() {
  return Oo || (Oo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = /* @__PURE__ */ df(), n = /* @__PURE__ */ te(), r = n.operators, c = {
      formatMaximum: { okStr: "<=", ok: r.LTE, fail: r.GT },
      formatMinimum: { okStr: ">=", ok: r.GTE, fail: r.LT },
      formatExclusiveMaximum: { okStr: "<", ok: r.LT, fail: r.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: r.GT, fail: r.LTE }
    }, i = {
      message: ({ keyword: s, schemaCode: o }) => (0, n.str)`should be ${c[s].okStr} ${o}`,
      params: ({ keyword: s, schemaCode: o }) => (0, n._)`{comparison: ${c[s].okStr}, limit: ${o}}`
    };
    e.formatLimitDefinition = {
      keyword: Object.keys(c),
      type: "string",
      schemaType: "string",
      $data: !0,
      error: i,
      code(s) {
        const { gen: o, data: p, schemaCode: h, keyword: g, it: u } = s, { opts: f, self: w } = u;
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
          return (0, n._)`${y}.compare(${p}, ${h}) ${c[g].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const a = (s) => (s.addKeyword(e.formatLimitDefinition), s);
    e.default = a;
  })(wi)), wi;
}
var Lo;
function uf() {
  return Lo || (Lo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const n = Yp(), r = lf(), c = /* @__PURE__ */ te(), i = new c.Name("fullFormats"), a = new c.Name("fastFormats"), s = (p, h = { keywords: !0 }) => {
      if (Array.isArray(h))
        return o(p, h, n.fullFormats, i), p;
      const [g, u] = h.mode === "fast" ? [n.fastFormats, a] : [n.fullFormats, i], f = h.formats || n.formatNames;
      return o(p, f, g, u), h.keywords && (0, r.default)(p), p;
    };
    s.get = (p, h = "full") => {
      const u = (h === "fast" ? n.fastFormats : n.fullFormats)[p];
      if (!u)
        throw new Error(`Unknown format "${p}"`);
      return u;
    };
    function o(p, h, g, u) {
      var f, w;
      (f = (w = p.opts.code).formats) !== null && f !== void 0 || (w.formats = (0, c._)`require("ajv-formats/dist/formats").${u}`);
      for (const x of h)
        p.addFormat(x, g[x]);
    }
    e.exports = t = s, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = s;
  })(Sr, Sr.exports)), Sr.exports;
}
var pf = uf();
const ff = /* @__PURE__ */ _s(pf);
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const hf = {
  p: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,
  n: 0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,
  a: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,
  d: 0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,
  Gx: 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,
  Gy: 0x6666666666666666666666666666666666666666666666666666666666666658n
}, { p: Se, n: _r, Gx: No, Gy: Do, a: xi, d: Si } = hf, mf = 8n, dn = 32, hs = 64, De = (e = "") => {
  throw new Error(e);
}, yf = (e) => typeof e == "bigint", od = (e) => typeof e == "string", gf = (e) => e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array", Qt = (e, t) => !gf(e) || typeof t == "number" && t > 0 && e.length !== t ? De("Uint8Array expected") : e, Zr = (e) => new Uint8Array(e), Es = (e) => Uint8Array.from(e), cd = (e, t) => e.toString(16).padStart(t, "0"), ks = (e) => Array.from(Qt(e)).map((t) => cd(t, 2)).join(""), pt = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 }, zo = (e) => {
  if (e >= pt._0 && e <= pt._9)
    return e - pt._0;
  if (e >= pt.A && e <= pt.F)
    return e - (pt.A - 10);
  if (e >= pt.a && e <= pt.f)
    return e - (pt.a - 10);
}, Ms = (e) => {
  const t = "hex invalid";
  if (!od(e))
    return De(t);
  const n = e.length, r = n / 2;
  if (n % 2)
    return De(t);
  const c = Zr(r);
  for (let i = 0, a = 0; i < r; i++, a += 2) {
    const s = zo(e.charCodeAt(a)), o = zo(e.charCodeAt(a + 1));
    if (s === void 0 || o === void 0)
      return De(t);
    c[i] = s * 16 + o;
  }
  return c;
}, Pr = (e, t) => Qt(od(e) ? Ms(e) : Es(Qt(e)), t), dd = () => globalThis?.crypto, vf = () => dd()?.subtle ?? De("crypto.subtle must be defined"), ms = (...e) => {
  const t = Zr(e.reduce((r, c) => r + Qt(c).length, 0));
  let n = 0;
  return e.forEach((r) => {
    t.set(r, n), n += r.length;
  }), t;
}, bf = (e = dn) => dd().getRandomValues(Zr(e)), Lr = BigInt, Ct = (e, t, n, r = "bad number: out of range") => yf(e) && t <= e && e < n ? e : De(r), Y = (e, t = Se) => {
  const n = e % t;
  return n >= 0n ? n : t + n;
}, wf = (e) => Y(e, _r), ld = (e, t) => {
  (e === 0n || t <= 0n) && De("no inverse n=" + e + " mod=" + t);
  let n = Y(e, t), r = t, c = 0n, i = 1n;
  for (; n !== 0n; ) {
    const a = r / n, s = r % n, o = c - i * a;
    r = n, n = s, c = i, i = o;
  }
  return r === 1n ? Y(c, t) : De("no inverse");
}, Vo = (e) => e instanceof ft ? e : De("Point expected"), ys = 2n ** 256n, nt = class nt {
  constructor(t, n, r, c) {
    ot(this, "ex");
    ot(this, "ey");
    ot(this, "ez");
    ot(this, "et");
    const i = ys;
    this.ex = Ct(t, 0n, i), this.ey = Ct(n, 0n, i), this.ez = Ct(r, 1n, i), this.et = Ct(c, 0n, i), Object.freeze(this);
  }
  static fromAffine(t) {
    return new nt(t.x, t.y, 1n, Y(t.x * t.y));
  }
  /** RFC8032 5.1.3: Uint8Array to Point. */
  static fromBytes(t, n = !1) {
    const r = Si, c = Es(Qt(t, dn)), i = t[31];
    c[31] = i & -129;
    const a = Os(c);
    Ct(a, 0n, n ? ys : Se);
    const o = Y(a * a), p = Y(o - 1n), h = Y(r * o + 1n);
    let { isValid: g, value: u } = If(p, h);
    g || De("bad point: y not sqrt");
    const f = (u & 1n) === 1n, w = (i & 128) !== 0;
    return !n && u === 0n && w && De("bad point: x==0, isLastByteOdd"), w !== f && (u = Y(-u)), new nt(u, a, 1n, Y(u * a));
  }
  /** Checks if the point is valid and on-curve. */
  assertValidity() {
    const t = xi, n = Si, r = this;
    if (r.is0())
      throw new Error("bad point: ZERO");
    const { ex: c, ey: i, ez: a, et: s } = r, o = Y(c * c), p = Y(i * i), h = Y(a * a), g = Y(h * h), u = Y(o * t), f = Y(h * Y(u + p)), w = Y(g + Y(n * Y(o * p)));
    if (f !== w)
      throw new Error("bad point: equation left != right (1)");
    const x = Y(c * i), b = Y(a * s);
    if (x !== b)
      throw new Error("bad point: equation left != right (2)");
    return this;
  }
  /** Equality check: compare points P&Q. */
  equals(t) {
    const { ex: n, ey: r, ez: c } = this, { ex: i, ey: a, ez: s } = Vo(t), o = Y(n * s), p = Y(i * c), h = Y(r * s), g = Y(a * c);
    return o === p && h === g;
  }
  is0() {
    return this.equals(Gt);
  }
  /** Flip point over y coordinate. */
  negate() {
    return new nt(Y(-this.ex), this.ey, this.ez, Y(-this.et));
  }
  /** Point doubling. Complete formula. Cost: `4M + 4S + 1*a + 6add + 1*2`. */
  double() {
    const { ex: t, ey: n, ez: r } = this, c = xi, i = Y(t * t), a = Y(n * n), s = Y(2n * Y(r * r)), o = Y(c * i), p = t + n, h = Y(Y(p * p) - i - a), g = o + a, u = g - s, f = o - a, w = Y(h * u), x = Y(g * f), b = Y(h * f), S = Y(u * g);
    return new nt(w, x, S, b);
  }
  /** Point addition. Complete formula. Cost: `8M + 1*k + 8add + 1*2`. */
  add(t) {
    const { ex: n, ey: r, ez: c, et: i } = this, { ex: a, ey: s, ez: o, et: p } = Vo(t), h = xi, g = Si, u = Y(n * a), f = Y(r * s), w = Y(i * g * p), x = Y(c * o), b = Y((n + r) * (a + s) - u - f), S = Y(x - w), v = Y(x + w), y = Y(f - h * u), d = Y(b * S), l = Y(v * y), m = Y(b * y), I = Y(S * v);
    return new nt(d, l, I, m);
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
      return Gt;
    if (Ct(t, 1n, _r), t === 1n)
      return this;
    if (this.equals(Wt))
      return Cf(t).p;
    let r = Gt, c = Wt;
    for (let i = this; t > 0n; i = i.double(), t >>= 1n)
      t & 1n ? r = r.add(i) : n && (c = c.add(i));
    return r;
  }
  /** Convert point to 2d xy affine point. (X, Y, Z) ∋ (x=X/Z, y=Y/Z) */
  toAffine() {
    const { ex: t, ey: n, ez: r } = this;
    if (this.equals(Gt))
      return { x: 0n, y: 1n };
    const c = ld(r, Se);
    return Y(r * c) !== 1n && De("invalid inverse"), { x: Y(t * c), y: Y(n * c) };
  }
  toBytes() {
    const { x: t, y: n } = this.assertValidity().toAffine(), r = xf(n);
    return r[31] |= t & 1n ? 128 : 0, r;
  }
  toHex() {
    return ks(this.toBytes());
  }
  // encode to hex string
  clearCofactor() {
    return this.multiply(Lr(mf), !1);
  }
  isSmallOrder() {
    return this.clearCofactor().is0();
  }
  isTorsionFree() {
    let t = this.multiply(_r / 2n, !1).double();
    return _r % 2n && (t = t.add(this)), t.is0();
  }
  static fromHex(t, n) {
    return nt.fromBytes(Pr(t), n);
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
ot(nt, "BASE"), ot(nt, "ZERO");
let ft = nt;
const Wt = new ft(No, Do, 1n, Y(No * Do)), Gt = new ft(0n, 1n, 1n, 0n);
ft.BASE = Wt;
ft.ZERO = Gt;
const xf = (e) => Ms(cd(Ct(e, 0n, ys), hs)).reverse(), Os = (e) => Lr("0x" + ks(Es(Qt(e)).reverse())), tt = (e, t) => {
  let n = e;
  for (; t-- > 0n; )
    n *= n, n %= Se;
  return n;
}, Sf = (e) => {
  const n = e * e % Se * e % Se, r = tt(n, 2n) * n % Se, c = tt(r, 1n) * e % Se, i = tt(c, 5n) * c % Se, a = tt(i, 10n) * i % Se, s = tt(a, 20n) * a % Se, o = tt(s, 40n) * s % Se, p = tt(o, 80n) * o % Se, h = tt(p, 80n) * o % Se, g = tt(h, 10n) * i % Se;
  return { pow_p_5_8: tt(g, 2n) * e % Se, b2: n };
}, Uo = 0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n, If = (e, t) => {
  const n = Y(t * t * t), r = Y(n * n * t), c = Sf(e * r).pow_p_5_8;
  let i = Y(e * n * c);
  const a = Y(t * i * i), s = i, o = Y(i * Uo), p = a === e, h = a === Y(-e), g = a === Y(-e * Uo);
  return p && (i = s), (h || g) && (i = o), (Y(i) & 1n) === 1n && (i = Y(-i)), { isValid: p || h, value: i };
}, qf = (e) => wf(Os(e)), Af = (...e) => _f.sha512Async(...e), Rf = (e) => Af(e.hashable).then(e.finish), ud = { zip215: !0 }, jf = (e, t, n, r = ud) => {
  e = Pr(e, hs), t = Pr(t), n = Pr(n, dn);
  const { zip215: c } = r;
  let i, a, s, o, p = Uint8Array.of();
  try {
    i = ft.fromHex(n, c), a = ft.fromHex(e.slice(0, dn), c), s = Os(e.slice(dn, hs)), o = Wt.multiply(s, !1), p = ms(a.toBytes(), i.toBytes(), t);
  } catch {
  }
  return { hashable: p, finish: (g) => {
    if (o == null || !c && i.isSmallOrder())
      return !1;
    const u = qf(g);
    return a.add(i.multiply(u, !1)).add(o.negate()).clearCofactor().is0();
  } };
}, $f = async (e, t, n, r = ud) => Rf(jf(e, t, n, r)), _f = {
  sha512Async: async (...e) => {
    const t = vf(), n = ms(...e);
    return Zr(await t.digest("SHA-512", n.buffer));
  },
  sha512Sync: void 0,
  bytesToHex: ks,
  hexToBytes: Ms,
  concatBytes: ms,
  mod: Y,
  invert: ld,
  randomBytes: bf
}, Nr = 8, Pf = 256, pd = Math.ceil(Pf / Nr) + 1, gs = 2 ** (Nr - 1), Tf = () => {
  const e = [];
  let t = Wt, n = t;
  for (let r = 0; r < pd; r++) {
    n = t, e.push(n);
    for (let c = 1; c < gs; c++)
      n = n.add(t), e.push(n);
    t = n.double();
  }
  return e;
};
let Go;
const Fo = (e, t) => {
  const n = t.negate();
  return e ? n : t;
}, Cf = (e) => {
  const t = Go || (Go = Tf());
  let n = Gt, r = Wt;
  const c = 2 ** Nr, i = c, a = Lr(c - 1), s = Lr(Nr);
  for (let o = 0; o < pd; o++) {
    let p = Number(e & a);
    e >>= s, p > gs && (p -= i, e += 1n);
    const h = o * gs, g = h, u = h + Math.abs(p) - 1, f = o % 2 !== 0, w = p < 0;
    p === 0 ? r = r.add(Fo(f, t[g])) : n = n.add(Fo(w, t[u]));
  }
  return { p: n, f: r };
};
var Ii = {}, qi, Bo;
function Ls() {
  return Bo || (Bo = 1, qi = class fd {
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
      return new fd(t, new Map(n), r);
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
  }), qi;
}
var Ai = {}, Zo;
function Ef() {
  return Zo || (Zo = 1, (function(e, t) {
    if (e.setImmediate)
      return;
    var n = 1, r = {}, c = !1, i = e.document, a;
    function s(v) {
      typeof v != "function" && (v = new Function("" + v));
      for (var y = new Array(arguments.length - 1), d = 0; d < y.length; d++)
        y[d] = arguments[d + 1];
      var l = { callback: v, args: y };
      return r[n] = l, a(n), n++;
    }
    function o(v) {
      delete r[v];
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
    function h(v) {
      if (c)
        setTimeout(h, 0, v);
      else {
        var y = r[v];
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
          h(v);
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
        d.source === e && typeof d.data == "string" && d.data.indexOf(v) === 0 && h(+d.data.slice(v.length));
      };
      e.addEventListener ? e.addEventListener("message", y, !1) : e.attachEvent("onmessage", y), a = function(d) {
        e.postMessage(v + d, "*");
      };
    }
    function w() {
      var v = new MessageChannel();
      v.port1.onmessage = function(y) {
        var d = y.data;
        h(d);
      }, a = function(y) {
        v.port2.postMessage(y);
      };
    }
    function x() {
      var v = i.documentElement;
      a = function(y) {
        var d = i.createElement("script");
        d.onreadystatechange = function() {
          h(y), d.onreadystatechange = null, v.removeChild(d), d = null;
        }, v.appendChild(d);
      };
    }
    function b() {
      a = function(v) {
        setTimeout(h, 0, v);
      };
    }
    var S = Object.getPrototypeOf && Object.getPrototypeOf(e);
    S = S && S.setTimeout ? S : e, {}.toString.call(e.process) === "[object process]" ? g() : u() ? f() : e.MessageChannel ? w() : i && "onreadystatechange" in i.createElement("script") ? x() : b(), S.setImmediate = s, S.clearImmediate = o;
  })(typeof self > "u" ? typeof sa > "u" ? Ai : sa : self)), Ai;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Ri, Ho;
function Hr() {
  if (Ho) return Ri;
  Ho = 1, Ef();
  const e = self.crypto || self.msCrypto;
  return Ri = class {
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
      let c = "";
      for (let i = 0; i < r.length; ++i)
        c += r[i].toString(16).padStart(2, "0");
      return c;
    }
  }, Ri;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var ji, Jo;
function hd() {
  return Jo || (Jo = 1, ji = class {
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
      let c = null, i = 0;
      const a = t.length;
      for (let s = 0; s < a; ++s) {
        const o = t[s], p = n.get(o);
        (c === null || o > c) && (p && s > 0 && o > t[s - 1] || !p && s < a - 1 && o > t[s + 1]) && (c = o, i = s);
      }
      if (c === null)
        this.done = !0;
      else {
        const s = n.get(c) ? i - 1 : i + 1;
        t[i] = t[s], t[s] = c;
        for (const o of t)
          o > c && n.set(o, !n.get(o));
      }
      return r;
    }
  }), ji;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var $i, Ko;
function Ns() {
  if (Ko) return $i;
  Ko = 1;
  const t = "http://www.w3.org/1999/02/22-rdf-syntax-ns#" + "langString", n = "http://www.w3.org/2001/XMLSchema#string", r = "NamedNode", c = "BlankNode", i = "Literal", a = "DefaultGraph", s = {};
  (() => {
    const f = "(?:<([^:]+:[^>]*)>)", x = "A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�" + "_", b = x + "0-9-·̀-ͯ‿-⁀", v = "(_:(?:[" + x + "0-9])(?:(?:[" + b + ".])*(?:[" + b + "]))?)", y = '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"', d = "(?:\\^\\^" + f + ")", m = "(?:" + y + "(?:" + d + "|" + "(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*))" + ")?)", I = "[ \\t]+", q = "[ \\t]*", _ = "(?:" + f + "|" + v + ")" + I, C = f + I, R = "(?:" + f + "|" + v + "|" + m + ")" + q, O = "(?:\\.|(?:(?:" + f + "|" + v + ")" + q + "\\.))";
    s.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g, s.empty = new RegExp("^" + q + "$"), s.quad = new RegExp(
      "^" + q + _ + C + R + O + q + "$"
    );
  })(), $i = class Tr {
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
        if (d[1] !== void 0 ? l.subject = { termType: r, value: d[1] } : l.subject = { termType: c, value: d[2] }, l.predicate = { termType: r, value: d[3] }, d[4] !== void 0 ? l.object = { termType: r, value: d[4] } : d[5] !== void 0 ? l.object = { termType: c, value: d[5] } : (l.object = {
          termType: i,
          value: void 0,
          datatype: {
            termType: r
          }
        }, d[7] !== void 0 ? l.object.datatype.value = d[7] : d[8] !== void 0 ? (l.object.datatype.value = t, l.object.language = d[8]) : l.object.datatype.value = n, l.object.value = u(d[6])), d[9] !== void 0 ? l.graph = {
          termType: r,
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
          let m = !0;
          const I = b[l.graph.value];
          for (const q of I)
            if (o(q, l)) {
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
      Array.isArray(w) || (w = Tr.legacyDatasetToQuads(w));
      const x = [];
      for (const b of w)
        x.push(Tr.serializeQuad(b));
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
      return w.termType === r ? v += `<${w.value}>` : v += `${w.value}`, v += ` <${x.value}> `, b.termType === r ? v += `<${b.value}>` : b.termType === c ? v += b.value : (v += `"${h(b.value)}"`, b.datatype.value === t ? b.language && (v += `@${b.language}`) : b.datatype.value !== n && (v += `^^<${b.datatype.value}>`)), S.termType === r ? v += ` <${S.value}>` : S.termType === c && (v += ` ${S.value}`), v += ` .
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
      return Tr.serializeQuadComponents(
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
            termType: a,
            value: ""
          } : d.graph = {
            termType: S.startsWith("_:") ? c : r,
            value: S
          }, x.push(d);
        });
      return x;
    }
  };
  function o(f, w) {
    return !(f.subject.termType === w.subject.termType && f.object.termType === w.object.termType) || !(f.subject.value === w.subject.value && f.predicate.value === w.predicate.value && f.object.value === w.object.value) ? !1 : f.object.termType !== i ? !0 : f.object.datatype.termType === w.object.datatype.termType && f.object.language === w.object.language && f.object.datatype.value === w.object.datatype.value;
  }
  const p = /["\\\n\r]/g;
  function h(f) {
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
  return $i;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var _i, Qo;
function md() {
  if (Qo) return _i;
  Qo = 1;
  const e = Ls(), t = Hr(), n = hd(), r = Ns();
  _i = class {
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
      const h = [...s.keys()].sort(), g = [];
      for (const f of h) {
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
        const w = r.serializeQuadComponents(
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
        ), s.push(r.serializeQuad(u));
      }
      s.sort();
      const h = this.createMessageDigest();
      for (const g of s)
        h.update(g);
      return o.hash = await h.digest(), o.hash;
    }
    // 4.7) Hash Related Blank Node
    async hashRelatedBlankNode(a, s, o, p) {
      let h;
      this.canonicalIssuer.hasId(a) ? h = this.canonicalIssuer.getId(a) : o.hasId(a) ? h = o.getId(a) : h = this.blankNodeInfo.get(a).hash;
      const g = this.createMessageDigest();
      return g.update(p), p !== "g" && g.update(this.getRelatedPredicate(s)), g.update(h), g.digest();
    }
    // 4.8) Hash N-Degree Quads
    async hashNDegreeQuads(a, s) {
      const o = this.deepIterations.get(a) || 0;
      if (o > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(a, o + 1);
      const p = this.createMessageDigest(), h = await this.createHashToRelated(a, s), g = [...h.keys()].sort();
      for (const u of g) {
        p.update(u);
        let f = "", w;
        const x = new n(h.get(u));
        let b = 0;
        for (; x.hasNext(); ) {
          const S = x.next();
          ++b % 3 === 0 && await this._yield();
          let v = s.clone(), y = "";
          const d = [];
          let l = !1;
          for (const m of S)
            if (this.canonicalIssuer.hasId(m) ? y += this.canonicalIssuer.getId(m) : (v.hasId(m) || d.push(m), y += v.getId(m)), f.length !== 0 && y > f) {
              l = !0;
              break;
            }
          if (!l) {
            for (const m of d) {
              const I = await this.hashNDegreeQuads(m, v);
              if (y += v.getId(m), y += `<${I.hash}>`, v = I.issuer, f.length !== 0 && y > f) {
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
      let h = 0;
      for (const g of p)
        ++h % 100 === 0 && await this._yield(), await Promise.all([
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
    async _addRelatedBlankNodeHash({ quad: a, component: s, position: o, id: p, issuer: h, hashToRelated: g }) {
      if (!(s.termType === "BlankNode" && s.value !== p))
        return;
      const u = s.value, f = await this.hashRelatedBlankNode(
        u,
        a,
        h,
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
  function c(i, a) {
    return i.hash < a.hash ? -1 : i.hash > a.hash ? 1 : 0;
  }
  return _i;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Pi, Wo;
function kf() {
  if (Wo) return Pi;
  Wo = 1;
  const e = Hr(), t = md();
  return Pi = class extends t {
    constructor() {
      super(), this.name = "URGNA2012", this.createMessageDigest = () => new e("sha1");
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(r, c, i) {
      return c.termType !== "BlankNode" ? c : i === "graph" ? {
        termType: "BlankNode",
        value: "_:g"
      } : {
        termType: "BlankNode",
        value: c.value === r ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(r) {
      return r.predicate.value;
    }
    // helper for creating hash to related blank nodes map
    async createHashToRelated(r, c) {
      const i = /* @__PURE__ */ new Map(), a = this.blankNodeInfo.get(r).quads;
      let s = 0;
      for (const o of a) {
        let p, h;
        if (o.subject.termType === "BlankNode" && o.subject.value !== r)
          h = o.subject.value, p = "p";
        else if (o.object.termType === "BlankNode" && o.object.value !== r)
          h = o.object.value, p = "r";
        else
          continue;
        ++s % 100 === 0 && await this._yield();
        const g = await this.hashRelatedBlankNode(
          h,
          o,
          c,
          p
        ), u = i.get(g);
        u ? u.push(h) : i.set(g, [h]);
      }
      return i;
    }
  }, Pi;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Ti, Xo;
function yd() {
  if (Xo) return Ti;
  Xo = 1;
  const e = Ls(), t = Hr(), n = hd(), r = Ns();
  Ti = class {
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
      const p = [...s.keys()].sort(), h = [];
      for (const u of p) {
        const f = s.get(u);
        if (f.length > 1) {
          h.push(f);
          continue;
        }
        const w = f[0];
        this.canonicalIssuer.getId(w);
      }
      for (const u of h) {
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
        const f = r.serializeQuadComponents(
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
        ), s.push(r.serializeQuad(u));
      }
      s.sort();
      const h = this.createMessageDigest();
      for (const g of s)
        h.update(g);
      return o.hash = h.digest(), o.hash;
    }
    // 4.7) Hash Related Blank Node
    hashRelatedBlankNode(a, s, o, p) {
      let h;
      this.canonicalIssuer.hasId(a) ? h = this.canonicalIssuer.getId(a) : o.hasId(a) ? h = o.getId(a) : h = this.blankNodeInfo.get(a).hash;
      const g = this.createMessageDigest();
      return g.update(p), p !== "g" && g.update(this.getRelatedPredicate(s)), g.update(h), g.digest();
    }
    // 4.8) Hash N-Degree Quads
    hashNDegreeQuads(a, s) {
      const o = this.deepIterations.get(a) || 0;
      if (o > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(a, o + 1);
      const p = this.createMessageDigest(), h = this.createHashToRelated(a, s), g = [...h.keys()].sort();
      for (const u of g) {
        p.update(u);
        let f = "", w;
        const x = new n(h.get(u));
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
              const m = this.hashNDegreeQuads(l, S);
              if (v += S.getId(l), v += `<${m.hash}>`, S = m.issuer, f.length !== 0 && v > f) {
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
      for (const h of p)
        this._addRelatedBlankNodeHash({
          quad: h,
          component: h.subject,
          position: "s",
          id: a,
          issuer: s,
          hashToRelated: o
        }), this._addRelatedBlankNodeHash({
          quad: h,
          component: h.object,
          position: "o",
          id: a,
          issuer: s,
          hashToRelated: o
        }), this._addRelatedBlankNodeHash({
          quad: h,
          component: h.graph,
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
    _addRelatedBlankNodeHash({ quad: a, component: s, position: o, id: p, issuer: h, hashToRelated: g }) {
      if (!(s.termType === "BlankNode" && s.value !== p))
        return;
      const u = s.value, f = this.hashRelatedBlankNode(u, a, h, o), w = g.get(f);
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
  function c(i, a) {
    return i.hash < a.hash ? -1 : i.hash > a.hash ? 1 : 0;
  }
  return Ti;
}
/*!
 * Copyright (c) 2016-2021 Digital Bazaar, Inc. All rights reserved.
 */
var Ci, Yo;
function Mf() {
  if (Yo) return Ci;
  Yo = 1;
  const e = Hr(), t = yd();
  return Ci = class extends t {
    constructor() {
      super(), this.name = "URGNA2012", this.createMessageDigest = () => new e("sha1");
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(r, c, i) {
      return c.termType !== "BlankNode" ? c : i === "graph" ? {
        termType: "BlankNode",
        value: "_:g"
      } : {
        termType: "BlankNode",
        value: c.value === r ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(r) {
      return r.predicate.value;
    }
    // helper for creating hash to related blank nodes map
    createHashToRelated(r, c) {
      const i = /* @__PURE__ */ new Map(), a = this.blankNodeInfo.get(r).quads;
      for (const s of a) {
        let o, p;
        if (s.subject.termType === "BlankNode" && s.subject.value !== r)
          p = s.subject.value, o = "p";
        else if (s.object.termType === "BlankNode" && s.object.value !== r)
          p = s.object.value, o = "r";
        else
          continue;
        const h = this.hashRelatedBlankNode(p, s, c, o), g = i.get(h);
        g ? g.push(p) : i.set(h, [p]);
      }
      return i;
    }
  }, Ci;
}
const Of = {}, Lf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Of
}, Symbol.toStringTag, { value: "Module" })), Nf = /* @__PURE__ */ Ml(Lf);
var ec;
function Df() {
  return ec || (ec = 1, (function(e) {
    const t = md(), n = kf(), r = yd(), c = Mf();
    let i;
    try {
      i = Nf;
    } catch {
    }
    function a(s) {
      return Array.isArray(s) ? s : e.NQuads.legacyDatasetToQuads(s);
    }
    e.NQuads = Ns(), e.IdentifierIssuer = Ls(), e._rdfCanonizeNative = function(s) {
      return s && (i = s), i;
    }, e.canonize = async function(s, o) {
      const p = a(s);
      if (o.useNative) {
        if (!i)
          throw new Error("rdf-canonize-native not available");
        if (o.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return new Promise((h, g) => i.canonize(p, o, (u, f) => u ? g(u) : h(f)));
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
        if (!i)
          throw new Error("rdf-canonize-native not available");
        if (o.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return i.canonizeSync(p, o);
      }
      if (o.algorithm === "URDNA2015")
        return new r(o).main(p);
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
  })(Ii)), Ii;
}
var Ei, tc;
function Ds() {
  return tc || (tc = 1, Ei = Df()), Ei;
}
var ki, nc;
function Ee() {
  if (nc) return ki;
  nc = 1;
  const e = {};
  return ki = e, e.isArray = Array.isArray, e.isBoolean = (t) => typeof t == "boolean" || Object.prototype.toString.call(t) === "[object Boolean]", e.isDouble = (t) => e.isNumber(t) && (String(t).indexOf(".") !== -1 || Math.abs(t) >= 1e21), e.isEmptyObject = (t) => e.isObject(t) && Object.keys(t).length === 0, e.isNumber = (t) => typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]", e.isNumeric = (t) => !isNaN(parseFloat(t)) && isFinite(t), e.isObject = (t) => Object.prototype.toString.call(t) === "[object Object]", e.isString = (t) => typeof t == "string" || Object.prototype.toString.call(t) === "[object String]", e.isUndefined = (t) => typeof t > "u", ki;
}
var Mi, rc;
function ht() {
  if (rc) return Mi;
  rc = 1;
  const e = Ee(), t = {};
  return Mi = t, t.isSubject = (n) => e.isObject(n) && !("@value" in n || "@set" in n || "@list" in n) ? Object.keys(n).length > 1 || !("@id" in n) : !1, t.isSubjectReference = (n) => (
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
  }, Mi;
}
var Oi, ic;
function Ue() {
  return ic || (ic = 1, Oi = class extends Error {
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
  }), Oi;
}
var Li, sc;
function Ve() {
  if (sc) return Li;
  sc = 1;
  const e = ht(), t = Ee(), n = Ds().IdentifierIssuer, r = Ue(), c = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/, i = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g, a = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/, s = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g, o = /^@[a-zA-Z]+$/, p = {
    headers: {
      accept: "application/ld+json, application/json"
    }
  }, h = {};
  Li = h, h.IdentifierIssuer = n, h.REGEX_BCP47 = c, h.REGEX_KEYWORD = o, h.clone = function(u) {
    if (u && typeof u == "object") {
      let f;
      if (t.isArray(u)) {
        f = [];
        for (let w = 0; w < u.length; ++w)
          f[w] = h.clone(u[w]);
      } else if (u instanceof Map) {
        f = /* @__PURE__ */ new Map();
        for (const [w, x] of u)
          f.set(w, h.clone(x));
      } else if (u instanceof Set) {
        f = /* @__PURE__ */ new Set();
        for (const w of u)
          f.add(h.clone(w));
      } else if (t.isObject(u)) {
        f = {};
        for (const w in u)
          f[w] = h.clone(u[w]);
      } else
        f = u.toString();
      return f;
    }
    return u;
  }, h.asArray = function(u) {
    return Array.isArray(u) ? u : [u];
  }, h.buildHeaders = (u = {}) => {
    if (Object.keys(u).some(
      (w) => w.toLowerCase() === "accept"
    ))
      throw new RangeError(
        'Accept header may not be specified; only "' + p.headers.accept + '" is supported.'
      );
    return Object.assign({ Accept: p.headers.accept }, u);
  }, h.parseLinkHeader = (u) => {
    const f = {}, w = u.match(i);
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
  }, h.validateTypeValue = (u, f) => {
    if (!t.isString(u) && !(t.isArray(u) && u.every((w) => t.isString(w)))) {
      if (f && t.isObject(u))
        switch (Object.keys(u).length) {
          case 0:
            return;
          case 1:
            if ("@default" in u && h.asArray(u["@default"]).every((w) => t.isString(w)))
              return;
        }
      throw new r(
        'Invalid JSON-LD syntax; "@type" value must a string, an array of strings, an empty object, or a default object.',
        "jsonld.SyntaxError",
        { code: "invalid type value", value: u }
      );
    }
  }, h.hasProperty = (u, f) => {
    if (u.hasOwnProperty(f)) {
      const w = u[f];
      return !t.isArray(w) || w.length > 0;
    }
    return !1;
  }, h.hasValue = (u, f, w) => {
    if (h.hasProperty(u, f)) {
      let x = u[f];
      const b = e.isList(x);
      if (t.isArray(x) || b) {
        b && (x = x["@list"]);
        for (let S = 0; S < x.length; ++S)
          if (h.compareValues(w, x[S]))
            return !0;
      } else if (!t.isArray(w))
        return h.compareValues(w, x);
    }
    return !1;
  }, h.addValue = (u, f, w, x) => {
    if (x = x || {}, "propertyIsArray" in x || (x.propertyIsArray = !1), "valueIsArray" in x || (x.valueIsArray = !1), "allowDuplicate" in x || (x.allowDuplicate = !0), "prependValue" in x || (x.prependValue = !1), x.valueIsArray)
      u[f] = w;
    else if (t.isArray(w)) {
      w.length === 0 && x.propertyIsArray && !u.hasOwnProperty(f) && (u[f] = []), x.prependValue && (w = w.concat(u[f]), u[f] = []);
      for (let b = 0; b < w.length; ++b)
        h.addValue(u, f, w[b], x);
    } else if (u.hasOwnProperty(f)) {
      const b = !x.allowDuplicate && h.hasValue(u, f, w);
      !t.isArray(u[f]) && (!b || x.propertyIsArray) && (u[f] = [u[f]]), b || (x.prependValue ? u[f].unshift(w) : u[f].push(w));
    } else
      u[f] = x.propertyIsArray ? [w] : w;
  }, h.getValues = (u, f) => [].concat(u[f] || []), h.removeProperty = (u, f) => {
    delete u[f];
  }, h.removeValue = (u, f, w, x) => {
    x = x || {}, "propertyIsArray" in x || (x.propertyIsArray = !1);
    const b = h.getValues(u, f).filter(
      (S) => !h.compareValues(S, w)
    );
    b.length === 0 ? h.removeProperty(u, f) : b.length === 1 && !x.propertyIsArray ? u[f] = b[0] : u[f] = b;
  }, h.relabelBlankNodes = (u, f) => {
    f = f || {};
    const w = f.issuer || new n("_:b");
    return g(w, u);
  }, h.compareValues = (u, f) => u === f || e.isValue(u) && e.isValue(f) && u["@value"] === f["@value"] && u["@type"] === f["@type"] && u["@language"] === f["@language"] && u["@index"] === f["@index"] ? !0 : t.isObject(u) && "@id" in u && t.isObject(f) && "@id" in f ? u["@id"] === f["@id"] : !1, h.compareShortestLeast = (u, f) => u.length < f.length ? -1 : f.length < u.length ? 1 : u === f ? 0 : u < f ? -1 : 1;
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
  return Li;
}
var Ni, ac;
function zs() {
  if (ac) return Ni;
  ac = 1;
  const e = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", t = "http://www.w3.org/2001/XMLSchema#";
  return Ni = {
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
  }, Ni;
}
var Di, oc;
function gd() {
  return oc || (oc = 1, Di = class {
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
  }), Di;
}
var zi, cc;
function At() {
  if (cc) return zi;
  cc = 1;
  const e = Ee(), t = {};
  zi = t, t.parsers = {
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
  }, t.parse = (r, c) => {
    const i = {}, a = t.parsers[c || "full"], s = a.regex.exec(r);
    let o = a.keys.length;
    for (; o--; )
      i[a.keys[o]] = s[o] === void 0 ? null : s[o];
    return (i.scheme === "https" && i.port === "443" || i.scheme === "http" && i.port === "80") && (i.href = i.href.replace(":" + i.port, ""), i.authority = i.authority.replace(":" + i.port, ""), i.port = null), i.normalizedPath = t.removeDotSegments(i.path), i;
  }, t.prependBase = (r, c) => {
    if (r === null || t.isAbsolute(c))
      return c;
    (!r || e.isString(r)) && (r = t.parse(r || ""));
    const i = t.parse(c), a = {
      protocol: r.protocol || ""
    };
    if (i.authority !== null)
      a.authority = i.authority, a.path = i.path, a.query = i.query;
    else if (a.authority = r.authority, i.path === "")
      a.path = r.path, i.query !== null ? a.query = i.query : a.query = r.query;
    else {
      if (i.path.indexOf("/") === 0)
        a.path = i.path;
      else {
        let o = r.path;
        o = o.substr(0, o.lastIndexOf("/") + 1), (o.length > 0 || r.authority) && o.substr(-1) !== "/" && (o += "/"), o += i.path, a.path = o;
      }
      a.query = i.query;
    }
    i.path !== "" && (a.path = t.removeDotSegments(a.path));
    let s = a.protocol;
    return a.authority !== null && (s += "//" + a.authority), s += a.path, a.query !== null && (s += "?" + a.query), i.fragment !== null && (s += "#" + i.fragment), s === "" && (s = "./"), s;
  }, t.removeBase = (r, c) => {
    if (r === null)
      return c;
    (!r || e.isString(r)) && (r = t.parse(r || ""));
    let i = "";
    if (r.href !== "" ? i += (r.protocol || "") + "//" + (r.authority || "") : c.indexOf("//") && (i += "//"), c.indexOf(i) !== 0)
      return c;
    const a = t.parse(c.substr(i.length)), s = r.normalizedPath.split("/"), o = a.normalizedPath.split("/"), p = a.fragment || a.query ? 0 : 1;
    for (; s.length > 0 && o.length > p && s[0] === o[0]; )
      s.shift(), o.shift();
    let h = "";
    if (s.length > 0) {
      s.pop();
      for (let g = 0; g < s.length; ++g)
        h += "../";
    }
    return h += o.join("/"), a.query !== null && (h += "?" + a.query), a.fragment !== null && (h += "#" + a.fragment), h === "" && (h = "./"), h;
  }, t.removeDotSegments = (r) => {
    if (r.length === 0)
      return "";
    const c = r.split("/"), i = [];
    for (; c.length > 0; ) {
      const a = c.shift(), s = c.length === 0;
      if (a === ".") {
        s && i.push("");
        continue;
      }
      if (a === "..") {
        i.pop(), s && i.push("");
        continue;
      }
      i.push(a);
    }
    return r[0] === "/" && i.length > 0 && i[0] !== "" && i.unshift(""), i.length === 1 && i[0] === "" ? "/" : i.join("/");
  };
  const n = /^([A-Za-z][A-Za-z0-9+-.]*|_):[^\s]*$/;
  return t.isAbsolute = (r) => e.isString(r) && n.test(r), t.isRelative = (r) => e.isString(r), zi;
}
var Vi, dc;
function zf() {
  if (dc) return Vi;
  dc = 1;
  const { parseLinkHeader: e, buildHeaders: t } = Ve(), { LINK_HEADER_CONTEXT: n } = zs(), r = Ue(), c = gd(), { prependBase: i } = At(), a = /(^|(\r\n))link:/i;
  Vi = ({
    secure: o,
    headers: p = {},
    xhr: h
  } = { headers: {} }) => {
    return p = t(p), new c().wrapLoader(u);
    async function u(f) {
      if (f.indexOf("http:") !== 0 && f.indexOf("https:") !== 0)
        throw new r(
          'URL could not be dereferenced; only "http" and "https" URLs are supported.',
          "jsonld.InvalidUrl",
          { code: "loading document failed", url: f }
        );
      if (o && f.indexOf("https") !== 0)
        throw new r(
          `URL could not be dereferenced; secure mode is enabled and the URL's scheme is not "https".`,
          "jsonld.InvalidUrl",
          { code: "loading document failed", url: f }
        );
      let w;
      try {
        w = await s(h, f, p);
      } catch (y) {
        throw new r(
          "URL could not be dereferenced, an error occurred.",
          "jsonld.LoadDocumentError",
          { code: "loading document failed", url: f, cause: y }
        );
      }
      if (w.status >= 400)
        throw new r(
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
          throw new r(
            "URL could not be dereferenced, it has more than one associated HTTP Link Header.",
            "jsonld.InvalidUrl",
            { code: "multiple context link headers", url: f }
          );
        d && (x.contextUrl = d.target), b = y.alternate, b && b.type == "application/ld+json" && !(S || "").match(/^application\/(\w*\+)?json$/) && (x = await u(i(f, b.target)));
      }
      return x;
    }
  };
  function s(o, p, h) {
    o = o || XMLHttpRequest;
    const g = new o();
    return new Promise((u, f) => {
      g.onload = () => u(g), g.onerror = (w) => f(w), g.open("GET", p, !0);
      for (const w in h)
        g.setRequestHeader(w, h[w]);
      g.send();
    });
  }
  return Vi;
}
var Ui, lc;
function Vf() {
  if (lc) return Ui;
  lc = 1;
  const e = zf(), t = {};
  return Ui = t, t.setupDocumentLoaders = function(n) {
    typeof XMLHttpRequest < "u" && (n.documentLoaders.xhr = e, n.useDocumentLoader("xhr"));
  }, t.setupGlobals = function(n) {
    typeof globalThis.JsonLdProcessor > "u" && Object.defineProperty(globalThis, "JsonLdProcessor", {
      writable: !0,
      enumerable: !1,
      configurable: !0,
      value: n.JsonLdProcessor
    });
  }, Ui;
}
var Gi, uc;
function Uf() {
  return uc || (uc = 1, Gi = function(e) {
    e.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next)
        yield t.value;
    };
  }), Gi;
}
var Fi, pc;
function Gf() {
  if (pc) return Fi;
  pc = 1, Fi = e, e.Node = c, e.create = e;
  function e(i) {
    var a = this;
    if (a instanceof e || (a = new e()), a.tail = null, a.head = null, a.length = 0, i && typeof i.forEach == "function")
      i.forEach(function(p) {
        a.push(p);
      });
    else if (arguments.length > 0)
      for (var s = 0, o = arguments.length; s < o; s++)
        a.push(arguments[s]);
    return a;
  }
  e.prototype.removeNode = function(i) {
    if (i.list !== this)
      throw new Error("removing node which does not belong to this list");
    var a = i.next, s = i.prev;
    return a && (a.prev = s), s && (s.next = a), i === this.head && (this.head = a), i === this.tail && (this.tail = s), i.list.length--, i.next = null, i.prev = null, i.list = null, a;
  }, e.prototype.unshiftNode = function(i) {
    if (i !== this.head) {
      i.list && i.list.removeNode(i);
      var a = this.head;
      i.list = this, i.next = a, a && (a.prev = i), this.head = i, this.tail || (this.tail = i), this.length++;
    }
  }, e.prototype.pushNode = function(i) {
    if (i !== this.tail) {
      i.list && i.list.removeNode(i);
      var a = this.tail;
      i.list = this, i.prev = a, a && (a.next = i), this.tail = i, this.head || (this.head = i), this.length++;
    }
  }, e.prototype.push = function() {
    for (var i = 0, a = arguments.length; i < a; i++)
      n(this, arguments[i]);
    return this.length;
  }, e.prototype.unshift = function() {
    for (var i = 0, a = arguments.length; i < a; i++)
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
  }, e.prototype.forEach = function(i, a) {
    a = a || this;
    for (var s = this.head, o = 0; s !== null; o++)
      i.call(a, s.value, o, this), s = s.next;
  }, e.prototype.forEachReverse = function(i, a) {
    a = a || this;
    for (var s = this.tail, o = this.length - 1; s !== null; o--)
      i.call(a, s.value, o, this), s = s.prev;
  }, e.prototype.get = function(i) {
    for (var a = 0, s = this.head; s !== null && a < i; a++)
      s = s.next;
    if (a === i && s !== null)
      return s.value;
  }, e.prototype.getReverse = function(i) {
    for (var a = 0, s = this.tail; s !== null && a < i; a++)
      s = s.prev;
    if (a === i && s !== null)
      return s.value;
  }, e.prototype.map = function(i, a) {
    a = a || this;
    for (var s = new e(), o = this.head; o !== null; )
      s.push(i.call(a, o.value, this)), o = o.next;
    return s;
  }, e.prototype.mapReverse = function(i, a) {
    a = a || this;
    for (var s = new e(), o = this.tail; o !== null; )
      s.push(i.call(a, o.value, this)), o = o.prev;
    return s;
  }, e.prototype.reduce = function(i, a) {
    var s, o = this.head;
    if (arguments.length > 1)
      s = a;
    else if (this.head)
      o = this.head.next, s = this.head.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var p = 0; o !== null; p++)
      s = i(s, o.value, p), o = o.next;
    return s;
  }, e.prototype.reduceReverse = function(i, a) {
    var s, o = this.tail;
    if (arguments.length > 1)
      s = a;
    else if (this.tail)
      o = this.tail.prev, s = this.tail.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var p = this.length - 1; o !== null; p--)
      s = i(s, o.value, p), o = o.prev;
    return s;
  }, e.prototype.toArray = function() {
    for (var i = new Array(this.length), a = 0, s = this.head; s !== null; a++)
      i[a] = s.value, s = s.next;
    return i;
  }, e.prototype.toArrayReverse = function() {
    for (var i = new Array(this.length), a = 0, s = this.tail; s !== null; a++)
      i[a] = s.value, s = s.prev;
    return i;
  }, e.prototype.slice = function(i, a) {
    a = a || this.length, a < 0 && (a += this.length), i = i || 0, i < 0 && (i += this.length);
    var s = new e();
    if (a < i || a < 0)
      return s;
    i < 0 && (i = 0), a > this.length && (a = this.length);
    for (var o = 0, p = this.head; p !== null && o < i; o++)
      p = p.next;
    for (; p !== null && o < a; o++, p = p.next)
      s.push(p.value);
    return s;
  }, e.prototype.sliceReverse = function(i, a) {
    a = a || this.length, a < 0 && (a += this.length), i = i || 0, i < 0 && (i += this.length);
    var s = new e();
    if (a < i || a < 0)
      return s;
    i < 0 && (i = 0), a > this.length && (a = this.length);
    for (var o = this.length, p = this.tail; p !== null && o > a; o--)
      p = p.prev;
    for (; p !== null && o > i; o--, p = p.prev)
      s.push(p.value);
    return s;
  }, e.prototype.splice = function(i, a, ...s) {
    i > this.length && (i = this.length - 1), i < 0 && (i = this.length + i);
    for (var o = 0, p = this.head; p !== null && o < i; o++)
      p = p.next;
    for (var h = [], o = 0; p && o < a; o++)
      h.push(p.value), p = this.removeNode(p);
    p === null && (p = this.tail), p !== this.head && p !== this.tail && (p = p.prev);
    for (var o = 0; o < s.length; o++)
      p = t(this, p, s[o]);
    return h;
  }, e.prototype.reverse = function() {
    for (var i = this.head, a = this.tail, s = i; s !== null; s = s.prev) {
      var o = s.prev;
      s.prev = s.next, s.next = o;
    }
    return this.head = a, this.tail = i, this;
  };
  function t(i, a, s) {
    var o = a === i.head ? new c(s, null, a, i) : new c(s, a, a.next, i);
    return o.next === null && (i.tail = o), o.prev === null && (i.head = o), i.length++, o;
  }
  function n(i, a) {
    i.tail = new c(a, i.tail, null, i), i.head || (i.head = i.tail), i.length++;
  }
  function r(i, a) {
    i.head = new c(a, null, i.head, i), i.tail || (i.tail = i.head), i.length++;
  }
  function c(i, a, s, o) {
    if (!(this instanceof c))
      return new c(i, a, s, o);
    this.list = o, this.value = i, a ? (a.next = this, this.prev = a) : this.prev = null, s ? (s.prev = this, this.next = s) : this.next = null;
  }
  try {
    Uf()(e);
  } catch {
  }
  return Fi;
}
var Bi, fc;
function vd() {
  if (fc) return Bi;
  fc = 1;
  const e = Gf(), t = Symbol("max"), n = Symbol("length"), r = Symbol("lengthCalculator"), c = Symbol("allowStale"), i = Symbol("maxAge"), a = Symbol("dispose"), s = Symbol("noDisposeOnSet"), o = Symbol("lruList"), p = Symbol("cache"), h = Symbol("updateAgeOnGet"), g = () => 1;
  class u {
    constructor(d) {
      if (typeof d == "number" && (d = { max: d }), d || (d = {}), d.max && (typeof d.max != "number" || d.max < 0))
        throw new TypeError("max must be a non-negative number");
      this[t] = d.max || 1 / 0;
      const l = d.length || g;
      if (this[r] = typeof l != "function" ? g : l, this[c] = d.stale || !1, d.maxAge && typeof d.maxAge != "number")
        throw new TypeError("maxAge must be a number");
      this[i] = d.maxAge || 0, this[a] = d.dispose, this[s] = d.noDisposeOnSet || !1, this[h] = d.updateAgeOnGet || !1, this.reset();
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
      this[i] = d, x(this);
    }
    get maxAge() {
      return this[i];
    }
    // resize the cache when the lengthCalculator changes.
    set lengthCalculator(d) {
      typeof d != "function" && (d = g), d !== this[r] && (this[r] = d, this[n] = 0, this[o].forEach((l) => {
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
      return this[o].length;
    }
    rforEach(d, l) {
      l = l || this;
      for (let m = this[o].tail; m !== null; ) {
        const I = m.prev;
        v(this, d, m, l), m = I;
      }
    }
    forEach(d, l) {
      l = l || this;
      for (let m = this[o].head; m !== null; ) {
        const I = m.next;
        v(this, d, m, l), m = I;
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
    set(d, l, m) {
      if (m = m || this[i], m && typeof m != "number")
        throw new TypeError("maxAge must be a number");
      const I = m ? Date.now() : 0, q = this[r](l, d);
      if (this[p].has(d)) {
        if (q > this[t])
          return b(this, this[p].get(d)), !1;
        const R = this[p].get(d).value;
        return this[a] && (this[s] || this[a](d, R.value)), R.now = I, R.maxAge = m, R.value = l, this[n] += q - R.length, R.length = q, this.get(d), x(this), !0;
      }
      const _ = new S(d, l, q, I, m);
      return _.length > this[t] ? (this[a] && this[a](d, l), !1) : (this[n] += _.length, this[o].unshift(_), this[p].set(d, this[o].head), x(this), !0);
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
      for (let m = d.length - 1; m >= 0; m--) {
        const I = d[m], q = I.e || 0;
        if (q === 0)
          this.set(I.k, I.v);
        else {
          const _ = q - l;
          _ > 0 && this.set(I.k, I.v, _);
        }
      }
    }
    prune() {
      this[p].forEach((d, l) => f(this, l, !1));
    }
  }
  const f = (y, d, l) => {
    const m = y[p].get(d);
    if (m) {
      const I = m.value;
      if (w(y, I)) {
        if (b(y, m), !y[c])
          return;
      } else
        l && (y[h] && (m.value.now = Date.now()), y[o].unshiftNode(m));
      return I.value;
    }
  }, w = (y, d) => {
    if (!d || !d.maxAge && !y[i])
      return !1;
    const l = Date.now() - d.now;
    return d.maxAge ? l > d.maxAge : y[i] && l > y[i];
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
    constructor(d, l, m, I, q) {
      this.key = d, this.value = l, this.length = m, this.now = I, this.maxAge = q || 0;
    }
  }
  const v = (y, d, l, m) => {
    let I = l.value;
    w(y, I) && (b(y, l), y[c] || (I = void 0)), I && d.call(m, I.value, I.key, y);
  };
  return Bi = u, Bi;
}
var Zi, hc;
function Ff() {
  if (hc) return Zi;
  hc = 1;
  const e = vd(), t = 10;
  return Zi = class {
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
    setProcessed(r, c) {
      this.cache.set(r, c);
    }
  }, Zi;
}
var Hi, mc;
function Bf() {
  if (mc) return Hi;
  mc = 1;
  const {
    isArray: e,
    isObject: t,
    isString: n
  } = Ee(), {
    asArray: r
  } = Ve(), { prependBase: c } = At(), i = Ue(), a = Ff(), s = 10;
  Hi = class {
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
      u && t(u) && u["@context"] && (u = u["@context"]), u = r(u);
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
        throw new i(
          "Maximum number of @context URLs exceeded.",
          "jsonld.ContextUrlError",
          {
            code: g.processingMode === "json-ld-1.0" ? "loading remote context failed" : "context overflow",
            max: s
          }
        );
      if (w.has(u))
        throw new i(
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
        throw new i(
          `Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context. URL: "${u}".`,
          "jsonld.InvalidUrl",
          { code: "loading remote context failed", url: u, cause: S }
        );
      }
      if (!t(x))
        throw new i(
          `Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object. URL: "${u}".`,
          "jsonld.InvalidUrl",
          { code: "invalid remote context", url: u }
        );
      return "@context" in x ? x = { "@context": x["@context"] } : x = { "@context": {} }, b.contextUrl && (e(x["@context"]) || (x["@context"] = [x["@context"]]), x["@context"].push(b.contextUrl)), { context: x, remoteDoc: b };
    }
  };
  function o(h) {
    throw new i(
      "Invalid JSON-LD syntax; @context must be an object.",
      "jsonld.SyntaxError",
      {
        code: "invalid local context",
        context: h
      }
    );
  }
  function p({ context: h, base: g }) {
    if (!h)
      return;
    const u = h["@context"];
    if (n(u)) {
      h["@context"] = c(g, u);
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
  return Hi;
}
var Ji, yc;
function Zf() {
  return yc || (yc = 1, Ji = Ds().NQuads), Ji;
}
var Ki, gc;
function bn() {
  if (gc) return Ki;
  gc = 1;
  const e = Ue(), {
    isArray: t
  } = Ee(), {
    asArray: n
  } = Ve(), r = {};
  Ki = r, r.defaultEventHandler = null, r.setupEventHandler = ({ options: a = {} }) => {
    const s = [].concat(
      a.safe ? r.safeEventHandler : [],
      a.eventHandler ? n(a.eventHandler) : [],
      r.defaultEventHandler ? r.defaultEventHandler : []
    );
    return s.length === 0 ? null : s;
  }, r.handleEvent = ({
    event: a,
    options: s
  }) => {
    c({ event: a, handlers: s.eventHandler });
  };
  function c({ event: a, handlers: s }) {
    let o = !0;
    for (let p = 0; o && p < s.length; ++p) {
      o = !1;
      const h = s[p];
      if (t(h))
        o = c({ event: a, handlers: h });
      else if (typeof h == "function")
        h({ event: a, next: () => {
          o = !0;
        } });
      else if (typeof h == "object")
        a.code in h ? h[a.code]({ event: a, next: () => {
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
  return r.safeEventHandler = function({ event: s, next: o }) {
    if (s.level === "warning" && i.has(s.code))
      throw new e(
        "Safe mode validation error.",
        "jsonld.ValidationError",
        { event: s }
      );
    o();
  }, r.logEventHandler = function({ event: s, next: o }) {
    console.log(`EVENT: ${s.message}`, { event: s }), o();
  }, r.logWarningEventHandler = function({ event: s, next: o }) {
    s.level === "warning" && console.warn(`WARNING: ${s.message}`, { event: s }), o();
  }, r.unhandledEventHandler = function({ event: s }) {
    throw new e(
      "No handler for event.",
      "jsonld.UnhandledEvent",
      { event: s }
    );
  }, r.setDefaultEventHandler = function({ eventHandler: a } = {}) {
    r.defaultEventHandler = a ? n(a) : null;
  }, Ki;
}
var Qi, vc;
function kt() {
  if (vc) return Qi;
  vc = 1;
  const e = Ve(), t = Ue(), {
    isArray: n,
    isObject: r,
    isString: c,
    isUndefined: i
  } = Ee(), {
    isAbsolute: a,
    isRelative: s,
    prependBase: o
  } = At(), {
    handleEvent: p
  } = bn(), {
    REGEX_BCP47: h,
    REGEX_KEYWORD: g,
    asArray: u,
    compareShortestLeast: f
  } = Ve(), w = /* @__PURE__ */ new Map(), x = 1e4, b = {};
  Qi = b, b.process = async ({
    activeCtx: y,
    localCtx: d,
    options: l,
    propagate: m = !0,
    overrideProtected: I = !1,
    cycles: q = /* @__PURE__ */ new Set()
  }) => {
    if (r(d) && "@context" in d && n(d["@context"]) && (d = d["@context"]), u(d).length === 0)
      return y;
    const C = [], R = [
      ({ event: z, next: P }) => {
        C.push(z), P();
      }
    ];
    l.eventHandler && R.push(l.eventHandler);
    const O = l;
    l = { ...l, eventHandler: R };
    const $ = await l.contextResolver.resolve({
      activeCtx: y,
      context: d,
      documentLoader: l.documentLoader,
      base: l.base
    });
    r($[0].document) && typeof $[0].document["@propagate"] == "boolean" && (m = $[0].document["@propagate"]);
    let E = y;
    !m && !E.previousContext && (E = E.clone(), E.previousContext = y);
    for (const z of $) {
      let { document: P } = z;
      if (y = E, P === null) {
        if (!I && Object.keys(y.protected).length !== 0)
          throw new t(
            "Tried to nullify a context with protected terms outside of a term definition.",
            "jsonld.SyntaxError",
            { code: "invalid context nullification" }
          );
        E = y = b.getInitialContext(l).clone();
        continue;
      }
      const Z = z.getProcessed(y);
      if (Z) {
        if (O.eventHandler)
          for (const F of Z.events)
            p({ event: F, options: O });
        E = y = Z.context;
        continue;
      }
      if (r(P) && "@context" in P && (P = P["@context"]), !r(P))
        throw new t(
          "Invalid JSON-LD syntax; @context must be an object.",
          "jsonld.SyntaxError",
          { code: "invalid local context", context: P }
        );
      E = E.clone();
      const L = /* @__PURE__ */ new Map();
      if ("@version" in P) {
        if (P["@version"] !== 1.1)
          throw new t(
            "Unsupported JSON-LD version: " + P["@version"],
            "jsonld.UnsupportedVersion",
            { code: "invalid @version value", context: P }
          );
        if (y.processingMode && y.processingMode === "json-ld-1.0")
          throw new t(
            "@version: " + P["@version"] + " not compatible with " + y.processingMode,
            "jsonld.ProcessingModeConflict",
            { code: "processing mode conflict", context: P }
          );
        E.processingMode = "json-ld-1.1", E["@version"] = P["@version"], L.set("@version", !0);
      }
      if (E.processingMode = E.processingMode || y.processingMode, "@base" in P) {
        let F = P["@base"];
        if (!(F === null || a(F))) if (s(F))
          F = o(E["@base"], F);
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.',
            "jsonld.SyntaxError",
            { code: "invalid base IRI", context: P }
          );
        E["@base"] = F, L.set("@base", !0);
      }
      if ("@vocab" in P) {
        const F = P["@vocab"];
        if (F === null)
          delete E["@vocab"];
        else if (c(F)) {
          if (!a(F) && b.processingMode(E, 1))
            throw new t(
              'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.',
              "jsonld.SyntaxError",
              { code: "invalid vocab mapping", context: P }
            );
          {
            const k = S(
              E,
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
            }), E["@vocab"] = k;
          }
        } else throw new t(
          'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be a string or null.',
          "jsonld.SyntaxError",
          { code: "invalid vocab mapping", context: P }
        );
        L.set("@vocab", !0);
      }
      if ("@language" in P) {
        const F = P["@language"];
        if (F === null)
          delete E["@language"];
        else if (c(F))
          F.match(h) || l.eventHandler && p({
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
          }), E["@language"] = F.toLowerCase();
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@language" in a @context must be a string or null.',
            "jsonld.SyntaxError",
            { code: "invalid default language", context: P }
          );
        L.set("@language", !0);
      }
      if ("@direction" in P) {
        const F = P["@direction"];
        if (y.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @direction not compatible with " + y.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context member", context: P }
          );
        if (F === null)
          delete E["@direction"];
        else {
          if (F !== "ltr" && F !== "rtl")
            throw new t(
              'Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", context: P }
            );
          E["@direction"] = F;
        }
        L.set("@direction", !0);
      }
      if ("@propagate" in P) {
        const F = P["@propagate"];
        if (y.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @propagate not compatible with " + y.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: P }
          );
        if (typeof F != "boolean")
          throw new t(
            "Invalid JSON-LD syntax; @propagate value must be a boolean.",
            "jsonld.SyntaxError",
            { code: "invalid @propagate value", context: d }
          );
        L.set("@propagate", !0);
      }
      if ("@import" in P) {
        const F = P["@import"];
        if (y.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @import not compatible with " + y.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: P }
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
        const M = k[0].getProcessed(y);
        if (M)
          P = M;
        else {
          const V = k[0].document;
          if ("@import" in V)
            throw new t(
              "Invalid JSON-LD syntax: imported context must not include @import.",
              "jsonld.SyntaxError",
              { code: "invalid context entry", context: d }
            );
          for (const N in V)
            P.hasOwnProperty(N) || (P[N] = V[N]);
          k[0].setProcessed(y, P);
        }
        L.set("@import", !0);
      }
      L.set("@protected", P["@protected"] || !1);
      for (const F in P)
        if (b.createTermDefinition({
          activeCtx: E,
          localCtx: P,
          term: F,
          defined: L,
          options: l,
          overrideProtected: I
        }), r(P[F]) && "@context" in P[F]) {
          const k = P[F]["@context"];
          let M = !0;
          if (c(k)) {
            const V = o(l.base, k);
            q.has(V) ? M = !1 : q.add(V);
          }
          if (M)
            try {
              await b.process({
                activeCtx: E.clone(),
                localCtx: P[F]["@context"],
                overrideProtected: !0,
                options: l,
                cycles: q
              });
            } catch {
              throw new t(
                "Invalid JSON-LD syntax; invalid scoped context.",
                "jsonld.SyntaxError",
                {
                  code: "invalid scoped context",
                  context: P[F]["@context"],
                  term: F
                }
              );
            }
        }
      z.setProcessed(y, {
        context: E,
        events: C
      });
    }
    return E;
  }, b.createTermDefinition = ({
    activeCtx: y,
    localCtx: d,
    term: l,
    defined: m,
    options: I,
    overrideProtected: q = !1
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
    let _;
    if (d.hasOwnProperty(l) && (_ = d[l]), l === "@type" && r(_) && (_["@container"] || "@set") === "@set" && b.processingMode(y, 1.1)) {
      const P = ["@container", "@id", "@protected"], Z = Object.keys(_);
      if (Z.length === 0 || Z.some((L) => !P.includes(L)))
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
    let R = !1;
    if ((c(_) || _ === null) && (R = !0, _ = { "@id": _ }), !r(_))
      throw new t(
        "Invalid JSON-LD syntax; @context term values must be strings or objects.",
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: d }
      );
    const O = {};
    y.mappings.set(l, O), O.reverse = !1;
    const $ = ["@container", "@id", "@language", "@reverse", "@type"];
    b.processingMode(y, 1.1) && $.push(
      "@context",
      "@direction",
      "@index",
      "@nest",
      "@prefix",
      "@protected"
    );
    for (const P in _)
      if (!$.includes(P))
        throw new t(
          "Invalid JSON-LD syntax; a term definition must not contain " + P,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
    const E = l.indexOf(":");
    if (O._termHasColon = E > 0, "@reverse" in _) {
      if ("@id" in _)
        throw new t(
          "Invalid JSON-LD syntax; a @reverse term definition must not contain @id.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: d }
        );
      if ("@nest" in _)
        throw new t(
          "Invalid JSON-LD syntax; a @reverse term definition must not contain @nest.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: d }
        );
      const P = _["@reverse"];
      if (!c(P))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      if (P.match(g)) {
        I.eventHandler && p({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved @reverse value",
            level: "warning",
            message: '@reverse values beginning with "@" are reserved for future use and dropped.',
            details: {
              reverse: P
            }
          },
          options: I
        }), C ? y.mappings.set(l, C) : y.mappings.delete(l);
        return;
      }
      const Z = S(
        y,
        P,
        { vocab: !0, base: !1 },
        d,
        m,
        I
      );
      if (!a(Z))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      O["@id"] = Z, O.reverse = !0;
    } else if ("@id" in _) {
      let P = _["@id"];
      if (P && !c(P))
        throw new t(
          "Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      if (P === null)
        O["@id"] = null;
      else if (!b.isKeyword(P) && P.match(g)) {
        I.eventHandler && p({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved @id value",
            level: "warning",
            message: '@id values beginning with "@" are reserved for future use and dropped.',
            details: {
              id: P
            }
          },
          options: I
        }), C ? y.mappings.set(l, C) : y.mappings.delete(l);
        return;
      } else if (P !== l) {
        if (P = S(
          y,
          P,
          { vocab: !0, base: !1 },
          d,
          m,
          I
        ), !a(P) && !b.isKeyword(P))
          throw new t(
            "Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: d }
          );
        if (l.match(/(?::[^:])|\//)) {
          const Z = new Map(m).set(l, !0);
          if (S(
            y,
            l,
            { vocab: !0, base: !1 },
            d,
            Z,
            I
          ) !== P)
            throw new t(
              "Invalid JSON-LD syntax; term in form of IRI must expand to definition.",
              "jsonld.SyntaxError",
              { code: "invalid IRI mapping", context: d }
            );
        }
        O["@id"] = P, O._prefix = R && !O._termHasColon && P.match(/[:\/\?#\[\]@]$/) !== null;
      }
    }
    if (!("@id" in O))
      if (O._termHasColon) {
        const P = l.substr(0, E);
        if (d.hasOwnProperty(P) && b.createTermDefinition({
          activeCtx: y,
          localCtx: d,
          term: P,
          defined: m,
          options: I
        }), y.mappings.has(P)) {
          const Z = l.substr(E + 1);
          O["@id"] = y.mappings.get(P)["@id"] + Z;
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
    if ((_["@protected"] === !0 || m.get("@protected") === !0 && _["@protected"] !== !1) && (y.protected[l] = !0, O.protected = !0), m.set(l, !0), "@type" in _) {
      let P = _["@type"];
      if (!c(P))
        throw new t(
          "Invalid JSON-LD syntax; an @context @type value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid type mapping", context: d }
        );
      if (P === "@json" || P === "@none") {
        if (b.processingMode(y, 1))
          throw new t(
            `Invalid JSON-LD syntax; an @context @type value must not be "${P}" in JSON-LD 1.0 mode.`,
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
      } else if (P !== "@id" && P !== "@vocab") {
        if (P = S(
          y,
          P,
          { vocab: !0, base: !1 },
          d,
          m,
          I
        ), !a(P))
          throw new t(
            "Invalid JSON-LD syntax; an @context @type value must be an absolute IRI.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
        if (P.indexOf("_:") === 0)
          throw new t(
            "Invalid JSON-LD syntax; an @context @type value must be an IRI, not a blank node identifier.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
      }
      O["@type"] = P;
    }
    if ("@container" in _) {
      const P = c(_["@container"]) ? [_["@container"]] : _["@container"] || [], Z = ["@list", "@set", "@index", "@language"];
      let L = !0;
      const F = P.includes("@set");
      if (b.processingMode(y, 1.1)) {
        if (Z.push("@graph", "@id", "@type"), P.includes("@list")) {
          if (P.length !== 1)
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @list must have no other values",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: d }
            );
        } else if (P.includes("@graph")) {
          if (P.some((k) => k !== "@graph" && k !== "@id" && k !== "@index" && k !== "@set"))
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: d }
            );
        } else
          L &= P.length <= (F ? 2 : 1);
        if (P.includes("@type") && (O["@type"] = O["@type"] || "@id", !["@id", "@vocab"].includes(O["@type"])))
          throw new t(
            "Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
      } else
        L &= !n(_["@container"]), L &= P.length <= 1;
      if (L &= P.every((k) => Z.includes(k)), L &= !(F && P.includes("@list")), !L)
        throw new t(
          "Invalid JSON-LD syntax; @context @container value must be one of the following: " + Z.join(", "),
          "jsonld.SyntaxError",
          { code: "invalid container mapping", context: d }
        );
      if (O.reverse && !P.every((k) => ["@index", "@set"].includes(k)))
        throw new t(
          "Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: d }
        );
      O["@container"] = P;
    }
    if ("@index" in _) {
      if (!("@container" in _) || !O["@container"].includes("@index"))
        throw new t(
          `Invalid JSON-LD syntax; @index without @index in @container: "${_["@index"]}" on term "${l}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (!c(_["@index"]) || _["@index"].indexOf("@") === 0)
        throw new t(
          `Invalid JSON-LD syntax; @index must expand to an IRI: "${_["@index"]}" on term "${l}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      O["@index"] = _["@index"];
    }
    if ("@context" in _ && (O["@context"] = _["@context"]), "@language" in _ && !("@type" in _)) {
      let P = _["@language"];
      if (P !== null && !c(P))
        throw new t(
          "Invalid JSON-LD syntax; @context @language value must be a string or null.",
          "jsonld.SyntaxError",
          { code: "invalid language mapping", context: d }
        );
      P !== null && (P = P.toLowerCase()), O["@language"] = P;
    }
    if ("@prefix" in _) {
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
      if (typeof _["@prefix"] == "boolean")
        O._prefix = _["@prefix"] === !0;
      else
        throw new t(
          "Invalid JSON-LD syntax; @context value for @prefix must be boolean",
          "jsonld.SyntaxError",
          { code: "invalid @prefix value", context: d }
        );
    }
    if ("@direction" in _) {
      const P = _["@direction"];
      if (P !== null && P !== "ltr" && P !== "rtl")
        throw new t(
          'Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".',
          "jsonld.SyntaxError",
          { code: "invalid base direction", context: d }
        );
      O["@direction"] = P;
    }
    if ("@nest" in _) {
      const P = _["@nest"];
      if (!c(P) || P !== "@nest" && P.indexOf("@") === 0)
        throw new t(
          "Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.",
          "jsonld.SyntaxError",
          { code: "invalid @nest value", context: d }
        );
      O["@nest"] = P;
    }
    // disallow aliasing @context and @preserve
    const z = O["@id"];
    if (z === "@context" || z === "@preserve")
      throw new t(
        "Invalid JSON-LD syntax; @context and @preserve cannot be aliased.",
        "jsonld.SyntaxError",
        { code: "invalid keyword alias", context: d }
      );
    if (C && C.protected && !q && (y.protected[l] = !0, O.protected = !0, !v(C, O)))
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
  function S(y, d, l, m, I, q) {
    if (d === null || !c(d) || b.isKeyword(d))
      return d;
    if (d.match(g))
      return null;
    if (m && m.hasOwnProperty(d) && I.get(d) !== !0 && b.createTermDefinition({
      activeCtx: y,
      localCtx: m,
      term: d,
      defined: I,
      options: q
    }), l = l || {}, l.vocab) {
      const C = y.mappings.get(d);
      if (C === null)
        return null;
      if (r(C) && "@id" in C)
        return C["@id"];
    }
    const _ = d.indexOf(":");
    if (_ > 0) {
      const C = d.substr(0, _), R = d.substr(_ + 1);
      if (C === "_" || R.indexOf("//") === 0)
        return d;
      m && m.hasOwnProperty(C) && b.createTermDefinition({
        activeCtx: y,
        localCtx: m,
        term: C,
        defined: I,
        options: q
      });
      const O = y.mappings.get(C);
      if (O && O._prefix)
        return O["@id"] + R;
      if (a(d))
        return d;
    }
    if (l.vocab && "@vocab" in y)
      d = y["@vocab"] + d;
    else if (l.base) {
      let C, R;
      "@base" in y ? y["@base"] ? (R = o(q.base, y["@base"]), C = o(R, d)) : (R = y["@base"], C = d) : (R = q.base, C = o(q.base, d)), d = C;
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
      clone: C,
      revertToPreviousContext: R,
      protected: {}
    };
    return w.size === x && w.clear(), w.set(d, m), m;
    function I() {
      const O = this;
      if (O.inverse)
        return O.inverse;
      const $ = O.inverse = {}, E = O.fastCurieMap = {}, z = {}, P = (O["@language"] || "@none").toLowerCase(), Z = O["@direction"], L = O.mappings, F = [...L.keys()].sort(f);
      for (const k of F) {
        const M = L.get(k);
        if (M === null)
          continue;
        let V = M["@container"] || "@none";
        if (V = [].concat(V).sort().join(""), M["@id"] === null)
          continue;
        const N = u(M["@id"]);
        for (const j of N) {
          let A = $[j];
          const T = b.isKeyword(j);
          if (A)
            !T && !M._termHasColon && z[j].push(k);
          else if ($[j] = A = {}, !T && !M._termHasColon) {
            z[j] = [k];
            const D = { iri: j, terms: z[j] };
            j[0] in E ? E[j[0]].push(D) : E[j[0]] = [D];
          }
          if (A[V] || (A[V] = {
            "@language": {},
            "@type": {},
            "@any": {}
          }), A = A[V], _(k, A["@any"], "@none"), M.reverse)
            _(k, A["@type"], "@reverse");
          else if (M["@type"] === "@none")
            _(k, A["@any"], "@none"), _(k, A["@language"], "@none"), _(k, A["@type"], "@none");
          else if ("@type" in M)
            _(k, A["@type"], M["@type"]);
          else if ("@language" in M && "@direction" in M) {
            const D = M["@language"], H = M["@direction"];
            D && H ? _(
              k,
              A["@language"],
              `${D}_${H}`.toLowerCase()
            ) : D ? _(k, A["@language"], D.toLowerCase()) : H ? _(k, A["@language"], `_${H}`) : _(k, A["@language"], "@null");
          } else "@language" in M ? _(
            k,
            A["@language"],
            (M["@language"] || "@null").toLowerCase()
          ) : "@direction" in M ? M["@direction"] ? _(
            k,
            A["@language"],
            `_${M["@direction"]}`
          ) : _(k, A["@language"], "@none") : Z ? (_(k, A["@language"], `_${Z}`), _(k, A["@language"], "@none"), _(k, A["@type"], "@none")) : (_(k, A["@language"], P), _(k, A["@language"], "@none"), _(k, A["@type"], "@none"));
        }
      }
      for (const k in E)
        q(E, k, 1);
      return $;
    }
    function q(O, $, E) {
      const z = O[$], P = O[$] = {};
      let Z, L;
      for (const F of z)
        Z = F.iri, E >= Z.length ? L = "" : L = Z[E], L in P ? P[L].push(F) : P[L] = [F];
      for (const F in P)
        F !== "" && q(P, F, E + 1);
    }
    function _(O, $, E) {
      $.hasOwnProperty(E) || ($[E] = O);
    }
    function C() {
      const O = {};
      return O.mappings = e.clone(this.mappings), O.clone = this.clone, O.inverse = null, O.getInverse = this.getInverse, O.protected = e.clone(this.protected), this.previousContext && (O.previousContext = this.previousContext.clone()), O.revertToPreviousContext = this.revertToPreviousContext, "@base" in this && (O["@base"] = this["@base"]), "@language" in this && (O["@language"] = this["@language"]), "@vocab" in this && (O["@vocab"] = this["@vocab"]), O;
    }
    function R() {
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
      for (let q = 0; q < y.length; ++q)
        if (!v(y[q], d[q]))
          return !1;
      return !0;
    }
    const m = Object.keys(y), I = Object.keys(d);
    if (m.length !== I.length)
      return !1;
    for (const q in y) {
      let _ = y[q], C = d[q];
      if (q === "@container" && Array.isArray(_) && Array.isArray(C) && (_ = _.slice().sort(), C = C.slice().sort()), !v(_, C))
        return !1;
    }
    return !0;
  }
  return Qi;
}
var Wi, bc;
function Hf() {
  if (bc) return Wi;
  bc = 1;
  const e = Ue(), {
    isArray: t,
    isObject: n,
    isEmptyObject: r,
    isString: c,
    isUndefined: i
  } = Ee(), {
    isList: a,
    isValue: s,
    isGraph: o,
    isSubject: p
  } = ht(), {
    expandIri: h,
    getContextValue: g,
    isKeyword: u,
    process: f,
    processingMode: w
  } = kt(), {
    isAbsolute: x
  } = At(), {
    REGEX_BCP47: b,
    REGEX_KEYWORD: S,
    addValue: v,
    asArray: y,
    getValues: d,
    validateTypeValue: l
  } = Ve(), {
    handleEvent: m
  } = bn(), I = {};
  Wi = I, I.expand = async ({
    activeCtx: $,
    activeProperty: E = null,
    element: z,
    options: P = {},
    insideList: Z = !1,
    insideIndex: L = !1,
    typeScopedContext: F = null
  }) => {
    if (z == null)
      return null;
    if (E === "@default" && (P = Object.assign({}, P, { isFrame: !1 })), !t(z) && !n(z))
      return !Z && (E === null || h(
        $,
        E,
        { vocab: !0 },
        P
      ) === "@graph") ? (P.eventHandler && m({
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
        options: P
      }), null) : C({ activeCtx: $, activeProperty: E, value: z, options: P });
    if (t(z)) {
      let D = [];
      const H = g(
        $,
        E,
        "@container"
      ) || [];
      Z = Z || H.includes("@list");
      for (let Q = 0; Q < z.length; ++Q) {
        let J = await I.expand({
          activeCtx: $,
          activeProperty: E,
          element: z[Q],
          options: P,
          insideIndex: L,
          typeScopedContext: F
        });
        Z && t(J) && (J = { "@list": J }), J !== null && (t(J) ? D = D.concat(J) : D.push(J));
      }
      return D;
    }
    const k = h(
      $,
      E,
      { vocab: !0 },
      P
    ), M = g($, E, "@context");
    F = F || ($.previousContext ? $ : null);
    let V = Object.keys(z).sort(), N = !L;
    if (N && F && V.length <= 2 && !V.includes("@context"))
      for (const D of V) {
        const H = h(
          F,
          D,
          { vocab: !0 },
          P
        );
        if (H === "@value") {
          N = !1, $ = F;
          break;
        }
        if (H === "@id" && V.length === 1) {
          N = !1;
          break;
        }
      }
    N && ($ = $.revertToPreviousContext()), i(M) || ($ = await f({
      activeCtx: $,
      localCtx: M,
      propagate: !0,
      overrideProtected: !0,
      options: P
    })), "@context" in z && ($ = await f(
      { activeCtx: $, localCtx: z["@context"], options: P }
    )), F = $;
    let j = null;
    for (const D of V)
      if (h($, D, { vocab: !0 }, P) === "@type") {
        j = j || D;
        const Q = z[D], J = Array.isArray(Q) ? Q.length > 1 ? Q.slice().sort() : Q : [Q];
        for (const U of J) {
          const G = g(F, U, "@context");
          i(G) || ($ = await f({
            activeCtx: $,
            localCtx: G,
            options: P,
            propagate: !1
          }));
        }
      }
    let A = {};
    await _({
      activeCtx: $,
      activeProperty: E,
      expandedActiveProperty: k,
      element: z,
      expandedParent: A,
      options: P,
      insideList: Z,
      typeKey: j,
      typeScopedContext: F
    }), V = Object.keys(A);
    let T = V.length;
    if ("@value" in A) {
      if ("@type" in A && ("@language" in A || "@direction" in A))
        throw new e(
          'Invalid JSON-LD syntax; an element containing "@value" may not contain both "@type" and either "@language" or "@direction".',
          "jsonld.SyntaxError",
          { code: "invalid value object", element: A }
        );
      let D = T - 1;
      if ("@type" in A && (D -= 1), "@index" in A && (D -= 1), "@language" in A && (D -= 1), "@direction" in A && (D -= 1), D !== 0)
        throw new e(
          'Invalid JSON-LD syntax; an element containing "@value" may only have an "@index" property and either "@type" or either or both "@language" or "@direction".',
          "jsonld.SyntaxError",
          { code: "invalid value object", element: A }
        );
      const H = A["@value"] === null ? [] : y(A["@value"]), Q = d(A, "@type");
      if (!(w($, 1.1) && Q.includes("@json") && Q.length === 1)) if (H.length === 0)
        P.eventHandler && m({
          event: {
            type: ["JsonLdEvent"],
            code: "null @value value",
            level: "warning",
            message: "Dropping null @value value.",
            details: {
              value: A
            }
          },
          options: P
        }), A = null;
      else {
        if (!H.every((J) => c(J) || r(J)) && "@language" in A)
          throw new e(
            "Invalid JSON-LD syntax; only strings may be language-tagged.",
            "jsonld.SyntaxError",
            { code: "invalid language-tagged value", element: A }
          );
        if (!Q.every((J) => x(J) && !(c(J) && J.indexOf("_:") === 0) || r(J)))
          throw new e(
            'Invalid JSON-LD syntax; an element containing "@value" and "@type" must have an absolute IRI for the value of "@type".',
            "jsonld.SyntaxError",
            { code: "invalid typed value", element: A }
          );
      }
    } else if ("@type" in A && !t(A["@type"]))
      A["@type"] = [A["@type"]];
    else if ("@set" in A || "@list" in A) {
      if (T > 1 && !(T === 2 && "@index" in A))
        throw new e(
          'Invalid JSON-LD syntax; if an element has the property "@set" or "@list", then it can have at most one other property that is "@index".',
          "jsonld.SyntaxError",
          { code: "invalid set or list object", element: A }
        );
      "@set" in A && (A = A["@set"], V = Object.keys(A), T = V.length);
    } else T === 1 && "@language" in A && (P.eventHandler && m({
      event: {
        type: ["JsonLdEvent"],
        code: "object with only @language",
        level: "warning",
        message: "Dropping object with only @language.",
        details: {
          value: A
        }
      },
      options: P
    }), A = null);
    return n(A) && !P.keepFreeFloatingNodes && !Z && (E === null || k === "@graph" || (g($, E, "@container") || []).includes("@graph")) && (A = q({ value: A, count: T, options: P })), A;
  };
  function q({
    value: $,
    count: E,
    options: z
  }) {
    if (E === 0 || "@value" in $ || "@list" in $ || E === 1 && "@id" in $) {
      if (z.eventHandler) {
        let P, Z;
        E === 0 ? (P = "empty object", Z = "Dropping empty object.") : "@value" in $ ? (P = "object with only @value", Z = "Dropping object with only @value.") : "@list" in $ ? (P = "object with only @list", Z = "Dropping object with only @list.") : E === 1 && "@id" in $ && (P = "object with only @id", Z = "Dropping object with only @id."), m({
          event: {
            type: ["JsonLdEvent"],
            code: P,
            level: "warning",
            message: Z,
            details: {
              value: $
            }
          },
          options: z
        });
      }
      return null;
    }
    return $;
  }
  async function _({
    activeCtx: $,
    activeProperty: E,
    expandedActiveProperty: z,
    element: P,
    expandedParent: Z,
    options: L = {},
    insideList: F,
    typeKey: k,
    typeScopedContext: M
  }) {
    const V = Object.keys(P).sort(), N = [];
    let j;
    const A = P[k] && h(
      $,
      t(P[k]) ? P[k][0] : P[k],
      { vocab: !0 },
      {
        ...L,
        typeExpansion: !0
      }
    ) === "@json";
    for (const T of V) {
      let D = P[T], H;
      if (T === "@context")
        continue;
      const Q = h($, T, { vocab: !0 }, L);
      if (Q === null || !(x(Q) || u(Q))) {
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
            if (!r(D))
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
              const K = h($, B, { base: !0 }, L);
              return L.eventHandler && (K === null ? m(B === null ? {
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
              }) : x(K) || m({
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
          h(M, B, { vocab: !0 }),
          y(K).map(
            (W) => h(
              M,
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
              const K = h(
                M,
                B,
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
      if (Q === "@included" && w($, 1.1)) {
        const B = y(await I.expand({
          activeCtx: $,
          activeProperty: E,
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
        j = D, A && w($, 1.1) ? Z["@value"] = D : v(
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
          c(B) && !B.match(b) && L.eventHandler && m({
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
          activeCtx: $,
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
            const ie = W[ee];
            if (s(ie) || a(ie))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: H }
              );
            v(B, K, ie, { propertyIsArray: !0 });
          }
        }
        continue;
      }
      if (Q === "@nest") {
        N.push(T);
        continue;
      }
      let J = $;
      const U = g($, T, "@context");
      i(U) || (J = await f({
        activeCtx: $,
        localCtx: U,
        propagate: !0,
        overrideProtected: !0,
        options: L
      }));
      const G = g($, T, "@container") || [];
      if (G.includes("@language") && n(D)) {
        const B = g(J, T, "@direction");
        H = R(J, D, B, L);
      } else if (G.includes("@index") && n(D)) {
        const B = G.includes("@graph"), K = g(J, T, "@index") || "@index", W = K !== "@index" && h($, K, { vocab: !0 }, L);
        H = await O({
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
        H = await O({
          activeCtx: J,
          options: L,
          activeProperty: T,
          value: D,
          asGraph: B,
          indexKey: "@id"
        });
      } else if (G.includes("@type") && n(D))
        H = await O({
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
          let K = E;
          B && z === "@graph" && (K = null), H = await I.expand({
            activeCtx: J,
            activeProperty: K,
            element: D,
            options: L,
            insideList: B
          });
        } else g($, T, "@type") === "@json" ? H = {
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
            return q({ value: B, count: K, options: L }) !== null;
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
    if ("@value" in Z && !(Z["@type"] === "@json" && w($, 1.1))) {
      if ((n(j) || t(j)) && !L.isFrame)
        throw new e(
          'Invalid JSON-LD syntax; "@value" value must not be an object or an array.',
          "jsonld.SyntaxError",
          { code: "invalid value object value", value: j }
        );
    }
    for (const T of N) {
      const D = t(P[T]) ? P[T] : [P[T]];
      for (const H of D) {
        if (!n(H) || Object.keys(H).some((Q) => h($, Q, { vocab: !0 }, L) === "@value"))
          throw new e(
            "Invalid JSON-LD syntax; nested value must be a node object.",
            "jsonld.SyntaxError",
            { code: "invalid @nest value", value: H }
          );
        await _({
          activeCtx: $,
          activeProperty: E,
          expandedActiveProperty: z,
          element: H,
          expandedParent: Z,
          options: L,
          insideList: F,
          typeScopedContext: M,
          typeKey: k
        });
      }
    }
  }
  function C({ activeCtx: $, activeProperty: E, value: z, options: P }) {
    if (z == null)
      return null;
    const Z = h(
      $,
      E,
      { vocab: !0 },
      P
    );
    if (Z === "@id")
      return h($, z, { base: !0 }, P);
    if (Z === "@type")
      return h(
        $,
        z,
        { vocab: !0, base: !0 },
        { ...P, typeExpansion: !0 }
      );
    const L = g($, E, "@type");
    if ((L === "@id" || Z === "@graph") && c(z)) {
      const k = h($, z, { base: !0 }, P);
      return k === null && z.match(S) && P.eventHandler && m({
        event: {
          type: ["JsonLdEvent"],
          code: "reserved @id value",
          level: "warning",
          message: "Reserved @id found.",
          details: {
            id: E
          }
        },
        options: P
      }), { "@id": k };
    }
    if (L === "@vocab" && c(z))
      return {
        "@id": h($, z, { vocab: !0, base: !0 }, P)
      };
    if (u(Z))
      return z;
    const F = {};
    if (L && !["@id", "@vocab", "@none"].includes(L))
      F["@type"] = L;
    else if (c(z)) {
      const k = g($, E, "@language");
      k !== null && (F["@language"] = k);
      const M = g($, E, "@direction");
      M !== null && (F["@direction"] = M);
    }
    return ["boolean", "number", "string"].includes(typeof z) || (z = z.toString()), F["@value"] = z, F;
  }
  function R($, E, z, P) {
    const Z = [], L = Object.keys(E).sort();
    for (const F of L) {
      const k = h($, F, { vocab: !0 }, P);
      let M = E[F];
      t(M) || (M = [M]);
      for (const V of M) {
        if (V === null)
          continue;
        if (!c(V))
          throw new e(
            "Invalid JSON-LD syntax; language map values must be strings.",
            "jsonld.SyntaxError",
            { code: "invalid language map value", languageMap: E }
          );
        const N = { "@value": V };
        k !== "@none" && (F.match(b) || P.eventHandler && m({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: F
            }
          },
          options: P
        }), N["@language"] = F.toLowerCase()), z && (N["@direction"] = z), Z.push(N);
      }
    }
    return Z;
  }
  async function O({
    activeCtx: $,
    options: E,
    activeProperty: z,
    value: P,
    asGraph: Z,
    indexKey: L,
    propertyIndex: F
  }) {
    const k = [], M = Object.keys(P).sort(), V = L === "@type";
    for (let N of M) {
      if (V) {
        const T = g($, N, "@context");
        i(T) || ($ = await f({
          activeCtx: $,
          localCtx: T,
          propagate: !1,
          options: E
        }));
      }
      let j = P[N];
      t(j) || (j = [j]), j = await I.expand({
        activeCtx: $,
        activeProperty: z,
        element: j,
        options: E,
        insideList: !1,
        insideIndex: !0
      });
      let A;
      F ? N === "@none" ? A = "@none" : A = C(
        { activeCtx: $, activeProperty: L, value: N, options: E }
      ) : A = h($, N, { vocab: !0 }, E), L === "@id" ? N = h($, N, { base: !0 }, E) : V && (N = A);
      for (let T of j) {
        if (Z && !o(T) && (T = { "@graph": [T] }), L === "@type")
          A === "@none" || (T["@type"] ? T["@type"] = [N].concat(T["@type"]) : T["@type"] = [N]);
        else {
          if (s(T) && !["@language", "@type", "@index"].includes(L))
            throw new e(
              `Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${L}".`,
              "jsonld.SyntaxError",
              { code: "invalid value object", value: T }
            );
          F ? A !== "@none" && v(T, F, A, {
            propertyIsArray: !0,
            prependValue: !0
          }) : A !== "@none" && !(L in T) && (T[L] = N);
        }
        k.push(T);
      }
    }
    return k;
  }
  return Wi;
}
var Xi, wc;
function Jr() {
  if (wc) return Xi;
  wc = 1;
  const { isKeyword: e } = kt(), t = ht(), n = Ee(), r = Ve(), c = Ue(), i = {};
  return Xi = i, i.createMergedNodeMap = (a, s) => {
    s = s || {};
    const o = s.issuer || new r.IdentifierIssuer("_:b"), p = { "@default": {} };
    return i.createNodeMap(a, p, "@default", o), i.mergeNodeMaps(p);
  }, i.createNodeMap = (a, s, o, p, h, g) => {
    if (n.isArray(a)) {
      for (const x of a)
        i.createNodeMap(x, s, o, p, void 0, g);
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
      i.createNodeMap(a["@list"], s, o, p, h, x), g.push({ "@list": x });
      return;
    }
    if ("@type" in a) {
      const x = a["@type"];
      for (const b of x)
        b.indexOf("_:") === 0 && p.getId(b);
    }
    n.isUndefined(h) && (h = t.isBlankNode(a) ? p.getId(a["@id"]) : a["@id"]), g && g.push({ "@id": h });
    const u = s[o], f = u[h] = u[h] || {};
    f["@id"] = h;
    const w = Object.keys(a).sort();
    for (let x of w) {
      if (x === "@id")
        continue;
      if (x === "@reverse") {
        const S = { "@id": h }, v = a["@reverse"];
        for (const y in v) {
          const d = v[y];
          for (const l of d) {
            let m = l["@id"];
            t.isBlankNode(l) && (m = p.getId(m)), i.createNodeMap(l, s, o, p, m), r.addValue(
              u[m],
              y,
              S,
              { propertyIsArray: !0, allowDuplicate: !1 }
            );
          }
        }
        continue;
      }
      if (x === "@graph") {
        h in s || (s[h] = {}), i.createNodeMap(a[x], s, h, p);
        continue;
      }
      if (x === "@included") {
        i.createNodeMap(a[x], s, o, p);
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
        r.addValue(f, x, [], { propertyIsArray: !0 });
        continue;
      }
      for (let S of b)
        if (x === "@type" && (S = S.indexOf("_:") === 0 ? p.getId(S) : S), t.isSubject(S) || t.isSubjectReference(S)) {
          if ("@id" in S && !S["@id"])
            continue;
          const v = t.isBlankNode(S) ? p.getId(S["@id"]) : S["@id"];
          r.addValue(
            f,
            x,
            { "@id": v },
            { propertyIsArray: !0, allowDuplicate: !1 }
          ), i.createNodeMap(S, s, o, p, v);
        } else if (t.isValue(S))
          r.addValue(
            f,
            x,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        else if (t.isList(S)) {
          const v = [];
          i.createNodeMap(S["@list"], s, o, p, h, v), S = { "@list": v }, r.addValue(
            f,
            x,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        } else
          i.createNodeMap(S, s, o, p, h), r.addValue(
            f,
            x,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
    }
  }, i.mergeNodeMapGraphs = (a) => {
    const s = {};
    for (const o of Object.keys(a).sort())
      for (const p of Object.keys(a[o]).sort()) {
        const h = a[o][p];
        p in s || (s[p] = { "@id": p });
        const g = s[p];
        for (const u of Object.keys(h).sort())
          if (e(u) && u !== "@type")
            g[u] = r.clone(h[u]);
          else
            for (const f of h[u])
              r.addValue(
                g,
                u,
                r.clone(f),
                { propertyIsArray: !0, allowDuplicate: !1 }
              );
      }
    return s;
  }, i.mergeNodeMaps = (a) => {
    const s = a["@default"], o = Object.keys(a).sort();
    for (const p of o) {
      if (p === "@default")
        continue;
      const h = a[p];
      let g = s[p];
      g ? "@graph" in g || (g["@graph"] = []) : s[p] = g = {
        "@id": p,
        "@graph": []
      };
      const u = g["@graph"];
      for (const f of Object.keys(h).sort()) {
        const w = h[f];
        t.isSubjectReference(w) || u.push(w);
      }
    }
    return s;
  }, Xi;
}
var Yi, xc;
function Jf() {
  if (xc) return Yi;
  xc = 1;
  const {
    isSubjectReference: e
  } = ht(), {
    createMergedNodeMap: t
  } = Jr(), n = {};
  return Yi = n, n.flatten = (r) => {
    const c = t(r), i = [], a = Object.keys(c).sort();
    for (let s = 0; s < a.length; ++s) {
      const o = c[a[s]];
      e(o) || i.push(o);
    }
    return i;
  }, Yi;
}
var es, Sc;
function Kf() {
  if (Sc) return es;
  Sc = 1;
  const e = Ue(), t = ht(), n = Ee(), {
    REGEX_BCP47: r,
    addValue: c
  } = Ve(), {
    handleEvent: i
  } = bn(), {
    // RDF,
    RDF_LIST: a,
    RDF_FIRST: s,
    RDF_REST: o,
    RDF_NIL: p,
    RDF_TYPE: h,
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
  } = zs(), b = {};
  es = b, b.fromRDF = async (v, y) => {
    const {
      useRdfType: d = !1,
      useNativeTypes: l = !1,
      rdfDirection: m = null
    } = y, I = {}, q = { "@default": I }, _ = {};
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
      const $ = O.graph.termType === "DefaultGraph" ? "@default" : O.graph.value;
      $ in q || (q[$] = {}), $ !== "@default" && !($ in I) && (I[$] = { "@id": $ });
      const E = q[$], z = O.subject.value, P = O.predicate.value, Z = O.object;
      z in E || (E[z] = { "@id": z });
      const L = E[z], F = Z.termType.endsWith("Node");
      if (F && !(Z.value in E) && (E[Z.value] = { "@id": Z.value }), P === h && !d && F) {
        c(L, "@type", Z.value, { propertyIsArray: !0 });
        continue;
      }
      const k = S(Z, l, m, y);
      if (c(L, P, k, { propertyIsArray: !0 }), F)
        if (Z.value === p) {
          const M = E[Z.value];
          "usages" in M || (M.usages = []), M.usages.push({
            node: L,
            property: P,
            value: k
          });
        } else Z.value in _ ? _[Z.value] = !1 : _[Z.value] = {
          node: L,
          property: P,
          value: k
        };
    }
    for (const O in q) {
      const $ = q[O];
      if (!(p in $))
        continue;
      const E = $[p];
      if (E.usages) {
        for (let z of E.usages) {
          let P = z.node, Z = z.property, L = z.value;
          const F = [], k = [];
          let M = Object.keys(P).length;
          for (; Z === o && n.isObject(_[P["@id"]]) && n.isArray(P[s]) && P[s].length === 1 && n.isArray(P[o]) && P[o].length === 1 && (M === 3 || M === 4 && n.isArray(P["@type"]) && P["@type"].length === 1 && P["@type"][0] === a) && (F.push(P[s][0]), k.push(P["@id"]), z = _[P["@id"]], P = z.node, Z = z.property, L = z.value, M = Object.keys(P).length, !!t.isBlankNode(P)); )
            ;
          delete L["@id"], L["@list"] = F.reverse();
          for (const V of k)
            delete $[V];
        }
        delete E.usages;
      }
    }
    const C = [], R = Object.keys(I).sort();
    for (const O of R) {
      const $ = I[O];
      if (O in q) {
        const E = $["@graph"] = [], z = q[O], P = Object.keys(z).sort();
        for (const Z of P) {
          const L = z[Z];
          t.isSubjectReference(L) || E.push(L);
        }
      }
      t.isSubjectReference($) || C.push($);
    }
    return C;
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
        } catch (q) {
          throw new e(
            "JSON literal could not be parsed.",
            "jsonld.InvalidJsonLiteral",
            { code: "invalid JSON literal", value: m["@value"], cause: q }
          );
        }
      }
      if (y) {
        if (I === u)
          m["@value"] === "true" ? m["@value"] = !0 : m["@value"] === "false" && (m["@value"] = !1);
        else if (n.isNumeric(m["@value"]))
          if (I === w) {
            const q = parseInt(m["@value"], 10);
            q.toFixed(0) === m["@value"] && (m["@value"] = q);
          } else I === f && (m["@value"] = parseFloat(m["@value"]));
        [u, w, f, x].includes(I) || (m["@type"] = I);
      } else if (d === "i18n-datatype" && I.startsWith("https://www.w3.org/ns/i18n#")) {
        const [, q, _] = I.split(/[#_]/);
        q.length > 0 && (m["@language"] = q, q.match(r) || l.eventHandler && i({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: q
            }
          },
          options: l
        })), m["@direction"] = _;
      } else I !== x && (m["@type"] = I);
    }
    return m;
  }
  return es;
}
var ts, Ic;
function Qf() {
  return Ic || (Ic = 1, ts = function e(t) {
    return t === null || typeof t != "object" || t.toJSON != null ? JSON.stringify(t) : Array.isArray(t) ? "[" + t.reduce((n, r, c) => {
      const i = c === 0 ? "" : ",", a = r === void 0 || typeof r == "symbol" ? null : r;
      return n + i + e(a);
    }, "") + "]" : "{" + Object.keys(t).sort().reduce((n, r, c) => {
      if (t[r] === void 0 || typeof t[r] == "symbol")
        return n;
      const i = n.length === 0 ? "" : ",";
      return n + i + e(r) + ":" + e(t[r]);
    }, "") + "}";
  }), ts;
}
var ns, qc;
function Wf() {
  if (qc) return ns;
  qc = 1;
  const { createNodeMap: e } = Jr(), { isKeyword: t } = kt(), n = ht(), r = Qf(), c = Ue(), i = Ee(), a = Ve(), {
    handleEvent: s
  } = bn(), {
    // RDF,
    // RDF_LIST,
    RDF_FIRST: o,
    RDF_REST: p,
    RDF_NIL: h,
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
  } = zs(), {
    isAbsolute: v
  } = At(), y = {};
  ns = y, y.toRDF = (I, q) => {
    const _ = new a.IdentifierIssuer("_:b"), C = { "@default": {} };
    e(I, C, "@default", _);
    const R = [], O = Object.keys(C).sort();
    for (const $ of O) {
      let E;
      if ($ === "@default")
        E = { termType: "DefaultGraph", value: "" };
      else if (v($))
        $.startsWith("_:") ? E = { termType: "BlankNode" } : E = { termType: "NamedNode" }, E.value = $;
      else {
        q.eventHandler && s({
          event: {
            type: ["JsonLdEvent"],
            code: "relative graph reference",
            level: "warning",
            message: "Relative graph reference found.",
            details: {
              graph: $
            }
          },
          options: q
        });
        continue;
      }
      d(R, C[$], E, _, q);
    }
    return R;
  };
  function d(I, q, _, C, R) {
    const O = Object.keys(q).sort();
    for (const $ of O) {
      const E = q[$], z = Object.keys(E).sort();
      for (let P of z) {
        const Z = E[P];
        if (P === "@type")
          P = g;
        else if (t(P))
          continue;
        for (const L of Z) {
          const F = {
            termType: $.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: $
          };
          if (!v($)) {
            R.eventHandler && s({
              event: {
                type: ["JsonLdEvent"],
                code: "relative subject reference",
                level: "warning",
                message: "Relative subject reference found.",
                details: {
                  subject: $
                }
              },
              options: R
            });
            continue;
          }
          const k = {
            termType: P.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: P
          };
          if (!v(P)) {
            R.eventHandler && s({
              event: {
                type: ["JsonLdEvent"],
                code: "relative predicate reference",
                level: "warning",
                message: "Relative predicate reference found.",
                details: {
                  predicate: P
                }
              },
              options: R
            });
            continue;
          }
          if (k.termType === "BlankNode" && !R.produceGeneralizedRdf) {
            R.eventHandler && s({
              event: {
                type: ["JsonLdEvent"],
                code: "blank node predicate",
                level: "warning",
                message: "Dropping blank node predicate.",
                details: {
                  // FIXME: add better issuer API to get reverse mapping
                  property: C.getOldIds().find((V) => C.getId(V) === P)
                }
              },
              options: R
            });
            continue;
          }
          const M = m(
            L,
            C,
            I,
            _,
            R.rdfDirection,
            R
          );
          M && I.push({
            subject: F,
            predicate: k,
            object: M,
            graph: _
          });
        }
      }
    }
  }
  function l(I, q, _, C, R, O) {
    const $ = { termType: "NamedNode", value: o }, E = { termType: "NamedNode", value: p }, z = { termType: "NamedNode", value: h }, P = I.pop(), Z = P ? { termType: "BlankNode", value: q.getId() } : z;
    let L = Z;
    for (const F of I) {
      const k = m(
        F,
        q,
        _,
        C,
        R,
        O
      ), M = { termType: "BlankNode", value: q.getId() };
      _.push({
        subject: L,
        predicate: $,
        object: k,
        graph: C
      }), _.push({
        subject: L,
        predicate: E,
        object: M,
        graph: C
      }), L = M;
    }
    if (P) {
      const F = m(
        P,
        q,
        _,
        C,
        R,
        O
      );
      _.push({
        subject: L,
        predicate: $,
        object: F,
        graph: C
      }), _.push({
        subject: L,
        predicate: E,
        object: z,
        graph: C
      });
    }
    return Z;
  }
  function m(I, q, _, C, R, O) {
    const $ = {};
    if (n.isValue(I)) {
      $.termType = "Literal", $.value = void 0, $.datatype = {
        termType: "NamedNode"
      };
      let E = I["@value"];
      const z = I["@type"] || null;
      if (z === "@json")
        $.value = r(E), $.datatype.value = u;
      else if (i.isBoolean(E))
        $.value = E.toString(), $.datatype.value = z || w;
      else if (i.isDouble(E) || z === x)
        i.isDouble(E) || (E = parseFloat(E)), $.value = E.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), $.datatype.value = z || x;
      else if (i.isNumber(E))
        $.value = E.toFixed(0), $.datatype.value = z || b;
      else if ("@direction" in I && R === "i18n-datatype") {
        const P = (I["@language"] || "").toLowerCase(), Z = I["@direction"], L = `https://www.w3.org/ns/i18n#${P}_${Z}`;
        $.datatype.value = L, $.value = E;
      } else {
        if ("@direction" in I && R === "compound-literal")
          throw new c(
            "Unsupported rdfDirection value.",
            "jsonld.InvalidRdfDirection",
            { value: R }
          );
        if ("@direction" in I && R)
          throw new c(
            "Unknown rdfDirection value.",
            "jsonld.InvalidRdfDirection",
            { value: R }
          );
        "@language" in I ? ("@direction" in I && !R && O.eventHandler && s({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: $.value
            }
          },
          options: O
        }), $.value = E, $.datatype.value = z || f, $.language = I["@language"]) : ("@direction" in I && !R && O.eventHandler && s({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: $.value
            }
          },
          options: O
        }), $.value = E, $.datatype.value = z || S);
      }
    } else if (n.isList(I)) {
      const E = l(
        I["@list"],
        q,
        _,
        C,
        R,
        O
      );
      $.termType = E.termType, $.value = E.value;
    } else {
      const E = i.isObject(I) ? I["@id"] : I;
      $.termType = E.startsWith("_:") ? "BlankNode" : "NamedNode", $.value = E;
    }
    return $.termType === "NamedNode" && !v($.value) ? (O.eventHandler && s({
      event: {
        type: ["JsonLdEvent"],
        code: "relative object reference",
        level: "warning",
        message: "Relative object reference found.",
        details: {
          object: $.value
        }
      },
      options: O
    }), null) : $;
  }
  return ns;
}
var rs, Ac;
function Xf() {
  if (Ac) return rs;
  Ac = 1;
  const { isKeyword: e } = kt(), t = ht(), n = Ee(), r = Ve(), c = At(), i = Ue(), {
    createNodeMap: a,
    mergeNodeMapGraphs: s
  } = Jr(), o = {};
  rs = o, o.frameMergedOrDefault = (d, l, m) => {
    const I = {
      options: m,
      embedded: !1,
      graph: "@default",
      graphMap: { "@default": {} },
      subjectStack: [],
      link: {},
      bnodeMap: {}
    }, q = new r.IdentifierIssuer("_:b");
    a(d, I.graphMap, "@default", q), m.merged && (I.graphMap["@merged"] = s(I.graphMap), I.graph = "@merged"), I.subjects = I.graphMap[I.graph];
    const _ = [];
    o.frame(I, Object.keys(I.subjects).sort(), l, _), m.pruneBlankNodeIdentifiers && (m.bnodesToClear = Object.keys(I.bnodeMap).filter((C) => I.bnodeMap[C].length === 1));
    // remove @preserve from results
    return m.link = {}, b(_, m);
  }, o.frame = (d, l, m, I, q = null) => {
    u(m), m = m[0];
    const _ = d.options, C = {
      embed: g(m, _, "embed"),
      explicit: g(m, _, "explicit"),
      requireAll: g(m, _, "requireAll")
    };
    d.link.hasOwnProperty(d.graph) || (d.link[d.graph] = {});
    const R = d.link[d.graph], O = f(d, l, m, C), $ = Object.keys(O).sort();
    for (const E of $) {
      const z = O[E];
      if (q === null ? d.uniqueEmbeds = { [d.graph]: {} } : d.uniqueEmbeds[d.graph] = d.uniqueEmbeds[d.graph] || {}, C.embed === "@link" && E in R) {
        S(I, q, R[E]);
        continue;
      }
      const P = { "@id": E };
      if (E.indexOf("_:") === 0 && r.addValue(d.bnodeMap, E, P, { propertyIsArray: !0 }), R[E] = P, (C.embed === "@first" || C.embed === "@last") && d.is11)
        throw new i(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: m }
        );
      if (!(!d.embedded && d.uniqueEmbeds[d.graph].hasOwnProperty(E))) {
        if (d.embedded && (C.embed === "@never" || h(z, d.graph, d.subjectStack))) {
          S(I, q, P);
          continue;
        }
        if (d.embedded && (C.embed == "@first" || C.embed == "@once") && d.uniqueEmbeds[d.graph].hasOwnProperty(E)) {
          S(I, q, P);
          continue;
        }
        if (C.embed === "@last" && E in d.uniqueEmbeds[d.graph] && x(d, E), d.uniqueEmbeds[d.graph][E] = { parent: I, property: q }, d.subjectStack.push({ subject: z, graph: d.graph }), E in d.graphMap) {
          let Z = !1, L = null;
          "@graph" in m ? (L = m["@graph"][0], Z = !(E === "@merged" || E === "@default"), n.isObject(L) || (L = {})) : (Z = d.graph !== "@merged", L = {}), Z && o.frame(
            { ...d, graph: E, embedded: !1 },
            Object.keys(d.graphMap[E]).sort(),
            [L],
            P,
            "@graph"
          );
        }
        "@included" in m && o.frame(
          { ...d, embedded: !1 },
          l,
          m["@included"],
          P,
          "@included"
        );
        for (const Z of Object.keys(z).sort()) {
          if (e(Z)) {
            if (P[Z] = r.clone(z[Z]), Z === "@type")
              for (const L of z["@type"])
                L.indexOf("_:") === 0 && r.addValue(
                  d.bnodeMap,
                  L,
                  P,
                  { propertyIsArray: !0 }
                );
            continue;
          }
          if (!(C.explicit && !(Z in m)))
            for (const L of z[Z]) {
              const F = Z in m ? m[Z] : p(C);
              if (t.isList(L)) {
                const k = m[Z] && m[Z][0] && m[Z][0]["@list"] ? m[Z][0]["@list"] : p(C), M = { "@list": [] };
                S(P, Z, M);
                const V = L["@list"];
                for (const N of V)
                  t.isSubjectReference(N) ? o.frame(
                    { ...d, embedded: !0 },
                    [N["@id"]],
                    k,
                    M,
                    "@list"
                  ) : S(M, "@list", r.clone(N));
              } else t.isSubjectReference(L) ? o.frame(
                { ...d, embedded: !0 },
                [L["@id"]],
                F,
                P,
                Z
              ) : y(F[0], L) && S(P, Z, r.clone(L));
            }
        }
        for (const Z of Object.keys(m).sort()) {
          if (Z === "@type") {
            if (!n.isObject(m[Z][0]) || !("@default" in m[Z][0]))
              continue;
          } else if (e(Z))
            continue;
          const L = m[Z][0] || {};
          if (!g(L, _, "omitDefault") && !(Z in P)) {
            let k = "@null";
            "@default" in L && (k = r.clone(L["@default"])), n.isArray(k) || (k = [k]), P[Z] = [{ "@preserve": k }];
          }
        }
        for (const Z of Object.keys(m["@reverse"] || {}).sort()) {
          const L = m["@reverse"][Z];
          for (const F of Object.keys(d.subjects))
            r.getValues(d.subjects[F], Z).some((M) => M["@id"] === E) && (P["@reverse"] = P["@reverse"] || {}, r.addValue(
              P["@reverse"],
              Z,
              [],
              { propertyIsArray: !0 }
            ), o.frame(
              { ...d, embedded: !0 },
              [F],
              L,
              P["@reverse"][Z],
              q
            ));
        }
        S(I, q, P), d.subjectStack.pop();
      }
    }
  }, o.cleanupNull = (d, l) => {
    if (n.isArray(d))
      return d.map((I) => o.cleanupNull(I, l)).filter((I) => I);
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
        d[m] = o.cleanupNull(d[m], l);
    }
    return d;
  };
  function p(d) {
    const l = {};
    for (const m in d)
      d[m] !== void 0 && (l["@" + m] = [d[m]]);
    return [l];
  }
  function h(d, l, m) {
    for (let I = m.length - 1; I >= 0; --I) {
      const q = m[I];
      if (q.graph === l && q.subject["@id"] === d["@id"])
        return !0;
    }
    return !1;
  }
  function g(d, l, m) {
    const I = "@" + m;
    let q = I in d ? d[I][0] : l[m];
    if (m === "embed") {
      if (q === !0)
        q = "@once";
      else if (q === !1)
        q = "@never";
      else if (q !== "@always" && q !== "@never" && q !== "@link" && q !== "@first" && q !== "@last" && q !== "@once")
        throw new i(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: d }
        );
    }
    return q;
  }
  function u(d) {
    if (!n.isArray(d) || d.length !== 1 || !n.isObject(d[0]))
      throw new i(
        "Invalid JSON-LD syntax; a JSON-LD frame must be a single object.",
        "jsonld.SyntaxError",
        { frame: d }
      );
    if ("@id" in d[0]) {
      for (const l of r.asArray(d[0]["@id"]))
        if (!(n.isObject(l) || c.isAbsolute(l)) || n.isString(l) && l.indexOf("_:") === 0)
          throw new i(
            "Invalid JSON-LD syntax; invalid @id in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: d }
          );
    }
    if ("@type" in d[0]) {
      for (const l of r.asArray(d[0]["@type"]))
        if (!(n.isObject(l) || c.isAbsolute(l) || l === "@json") || n.isString(l) && l.indexOf("_:") === 0)
          throw new i(
            "Invalid JSON-LD syntax; invalid @type in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: d }
          );
    }
  }
  function f(d, l, m, I) {
    const q = {};
    for (const _ of l) {
      const C = d.graphMap[d.graph][_];
      w(d, C, m, I) && (q[_] = C);
    }
    return q;
  }
  function w(d, l, m, I) {
    let q = !0, _ = !1;
    for (const C in m) {
      let R = !1;
      const O = r.getValues(l, C), $ = r.getValues(m, C).length === 0;
      if (C === "@id") {
        if (n.isEmptyObject(m["@id"][0] || {}) ? R = !0 : m["@id"].length >= 0 && (R = m["@id"].includes(O[0])), !I.requireAll)
          return R;
      } else if (C === "@type") {
        if (q = !1, $) {
          if (O.length > 0)
            return !1;
          R = !0;
        } else if (m["@type"].length === 1 && n.isEmptyObject(m["@type"][0]))
          R = O.length > 0;
        else
          for (const E of m["@type"])
            n.isObject(E) && "@default" in E ? R = !0 : R = R || O.some((z) => z === E);
        if (!I.requireAll)
          return R;
      } else {
        if (e(C))
          continue;
        {
          const E = r.getValues(m, C)[0];
          let z = !1;
          if (E && (u([E]), z = "@default" in E), q = !1, O.length === 0 && z)
            continue;
          if (O.length > 0 && $)
            return !1;
          if (E === void 0) {
            if (O.length > 0)
              return !1;
            R = !0;
          } else if (t.isList(E)) {
            const P = E["@list"][0];
            if (t.isList(O[0])) {
              const Z = O[0]["@list"];
              t.isValue(P) ? R = Z.some((L) => y(P, L)) : (t.isSubject(P) || t.isSubjectReference(P)) && (R = Z.some((L) => v(
                d,
                P,
                L,
                I
              )));
            }
          } else t.isValue(E) ? R = O.some((P) => y(E, P)) : t.isSubjectReference(E) ? R = O.some((P) => v(d, E, P, I)) : n.isObject(E) ? R = O.length > 0 : R = !1;
        }
      }
      if (!R && I.requireAll)
        return !1;
      _ = _ || R;
    }
    return q || _;
  }
  function x(d, l) {
    const m = d.uniqueEmbeds[d.graph], I = m[l], q = I.parent, _ = I.property, C = { "@id": l };
    if (n.isArray(q)) {
      for (let O = 0; O < q.length; ++O)
        if (r.compareValues(q[O], C)) {
          q[O] = C;
          break;
        }
    } else {
      const O = n.isArray(q[_]);
      r.removeValue(q, _, C, { propertyIsArray: O }), r.addValue(q, _, C, { propertyIsArray: O });
    }
    const R = (O) => {
      const $ = Object.keys(m);
      for (const E of $)
        E in m && n.isObject(m[E].parent) && m[E].parent["@id"] === O && (delete m[E], R(E));
    };
    R(l);
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
    const q = d.subjects[m["@id"]];
    return q && w(d, q, l, I);
  }
  function y(d, l) {
    const m = l["@value"], I = l["@type"], q = l["@language"], _ = d["@value"] ? n.isArray(d["@value"]) ? d["@value"] : [d["@value"]] : [], C = d["@type"] ? n.isArray(d["@type"]) ? d["@type"] : [d["@type"]] : [], R = d["@language"] ? n.isArray(d["@language"]) ? d["@language"] : [d["@language"]] : [];
    return _.length === 0 && C.length === 0 && R.length === 0 ? !0 : !(!(_.includes(m) || n.isEmptyObject(_[0])) || !(!I && C.length === 0 || C.includes(I) || I && n.isEmptyObject(C[0])) || !(!q && R.length === 0 || R.includes(q) || q && n.isEmptyObject(R[0])));
  }
  return rs;
}
var is, Rc;
function Yf() {
  if (Rc) return is;
  Rc = 1;
  const e = Ue(), {
    isArray: t,
    isObject: n,
    isString: r,
    isUndefined: c
  } = Ee(), {
    isList: i,
    isValue: a,
    isGraph: s,
    isSimpleGraph: o,
    isSubjectReference: p
  } = ht(), {
    expandIri: h,
    getContextValue: g,
    isKeyword: u,
    process: f,
    processingMode: w
  } = kt(), {
    removeBase: x,
    prependBase: b
  } = At(), {
    REGEX_KEYWORD: S,
    addValue: v,
    asArray: y,
    compareShortestLeast: d
  } = Ve(), l = {};
  is = l, l.compact = async ({
    activeCtx: q,
    activeProperty: _ = null,
    element: C,
    options: R = {}
  }) => {
    if (t(C)) {
      let $ = [];
      for (let E = 0; E < C.length; ++E) {
        const z = await l.compact({
          activeCtx: q,
          activeProperty: _,
          element: C[E],
          options: R
        });
        z !== null && $.push(z);
      }
      return R.compactArrays && $.length === 1 && (g(
        q,
        _,
        "@container"
      ) || []).length === 0 && ($ = $[0]), $;
    }
    const O = g(q, _, "@context");
    if (c(O) || (q = await f({
      activeCtx: q,
      localCtx: O,
      propagate: !0,
      overrideProtected: !0,
      options: R
    })), n(C)) {
      if (R.link && "@id" in C && R.link.hasOwnProperty(C["@id"])) {
        const k = R.link[C["@id"]];
        for (let M = 0; M < k.length; ++M)
          if (k[M].expanded === C)
            return k[M].compacted;
      }
      if (a(C) || p(C)) {
        const k = l.compactValue({ activeCtx: q, activeProperty: _, value: C, options: R });
        return R.link && p(C) && (R.link.hasOwnProperty(C["@id"]) || (R.link[C["@id"]] = []), R.link[C["@id"]].push({ expanded: C, compacted: k })), k;
      }
      if (i(C) && (g(
        q,
        _,
        "@container"
      ) || []).includes("@list"))
        return l.compact({
          activeCtx: q,
          activeProperty: _,
          element: C["@list"],
          options: R
        });
      const $ = _ === "@reverse", E = {}, z = q;
      !a(C) && !p(C) && (q = q.revertToPreviousContext());
      const P = g(z, _, "@context");
      c(P) || (q = await f({
        activeCtx: q,
        localCtx: P,
        propagate: !0,
        overrideProtected: !0,
        options: R
      })), R.link && "@id" in C && (R.link.hasOwnProperty(C["@id"]) || (R.link[C["@id"]] = []), R.link[C["@id"]].push({ expanded: C, compacted: E }));
      let Z = C["@type"] || [];
      Z.length > 1 && (Z = Array.from(Z).sort());
      const L = q;
      for (const k of Z) {
        const M = l.compactIri(
          { activeCtx: L, iri: k, relativeTo: { vocab: !0 } }
        ), V = g(z, M, "@context");
        c(V) || (q = await f({
          activeCtx: q,
          localCtx: V,
          options: R,
          propagate: !1
        }));
      }
      const F = Object.keys(C).sort();
      for (const k of F) {
        const M = C[k];
        if (k === "@id") {
          let V = y(M).map(
            (j) => l.compactIri({
              activeCtx: q,
              iri: j,
              relativeTo: { vocab: !1 },
              base: R.base
            })
          );
          V.length === 1 && (V = V[0]);
          const N = l.compactIri(
            { activeCtx: q, iri: "@id", relativeTo: { vocab: !0 } }
          );
          E[N] = V;
          continue;
        }
        if (k === "@type") {
          let V = y(M).map(
            (D) => l.compactIri({
              activeCtx: z,
              iri: D,
              relativeTo: { vocab: !0 }
            })
          );
          V.length === 1 && (V = V[0]);
          const N = l.compactIri(
            { activeCtx: q, iri: "@type", relativeTo: { vocab: !0 } }
          ), T = (g(
            q,
            N,
            "@container"
          ) || []).includes("@set") && w(q, 1.1) || t(V) && M.length === 0;
          v(E, N, V, { propertyIsArray: T });
          continue;
        }
        if (k === "@reverse") {
          const V = await l.compact({
            activeCtx: q,
            activeProperty: "@reverse",
            element: M,
            options: R
          });
          for (const N in V)
            if (q.mappings.has(N) && q.mappings.get(N).reverse) {
              const j = V[N], T = (g(
                q,
                N,
                "@container"
              ) || []).includes("@set") || !R.compactArrays;
              v(
                E,
                N,
                j,
                { propertyIsArray: T }
              ), delete V[N];
            }
          if (Object.keys(V).length > 0) {
            const N = l.compactIri({
              activeCtx: q,
              iri: k,
              relativeTo: { vocab: !0 }
            });
            v(E, N, V);
          }
          continue;
        }
        if (k === "@preserve") {
          const V = await l.compact({
            activeCtx: q,
            activeProperty: _,
            element: M,
            options: R
          });
          t(V) && V.length === 0 || v(E, k, V);
          continue;
        }
        if (k === "@index") {
          if ((g(
            q,
            _,
            "@container"
          ) || []).includes("@index"))
            continue;
          const N = l.compactIri({
            activeCtx: q,
            iri: k,
            relativeTo: { vocab: !0 }
          });
          v(E, N, M);
          continue;
        }
        if (k !== "@graph" && k !== "@list" && k !== "@included" && u(k)) {
          const V = l.compactIri({
            activeCtx: q,
            iri: k,
            relativeTo: { vocab: !0 }
          });
          v(E, V, M);
          continue;
        }
        if (!t(M))
          throw new e(
            "JSON-LD expansion error; expanded value must be an array.",
            "jsonld.SyntaxError"
          );
        if (M.length === 0) {
          const V = l.compactIri({
            activeCtx: q,
            iri: k,
            value: M,
            relativeTo: { vocab: !0 },
            reverse: $
          }), N = q.mappings.has(V) ? q.mappings.get(V)["@nest"] : null;
          let j = E;
          N && (I(q, N, R), n(E[N]) || (E[N] = {}), j = E[N]), v(
            j,
            V,
            M,
            {
              propertyIsArray: !0
            }
          );
        }
        for (const V of M) {
          const N = l.compactIri({
            activeCtx: q,
            iri: k,
            value: V,
            relativeTo: { vocab: !0 },
            reverse: $
          }), j = q.mappings.has(N) ? q.mappings.get(N)["@nest"] : null;
          let A = E;
          j && (I(q, j, R), n(E[j]) || (E[j] = {}), A = E[j]);
          const T = g(
            q,
            N,
            "@container"
          ) || [], D = s(V), H = i(V);
          let Q;
          H ? Q = V["@list"] : D && (Q = V["@graph"]);
          let J = await l.compact({
            activeCtx: q,
            activeProperty: N,
            element: H || D ? Q : V,
            options: R
          });
          if (H)
            if (t(J) || (J = [J]), !T.includes("@list"))
              J = {
                [l.compactIri({
                  activeCtx: q,
                  iri: "@list",
                  relativeTo: { vocab: !0 }
                })]: J
              }, "@index" in V && (J[l.compactIri({
                activeCtx: q,
                iri: "@index",
                relativeTo: { vocab: !0 }
              })] = V["@index"]);
            else {
              v(A, N, J, {
                valueIsArray: !0,
                allowDuplicate: !0
              });
              continue;
            }
          if (D)
            if (T.includes("@graph") && (T.includes("@id") || T.includes("@index") && o(V))) {
              let U;
              A.hasOwnProperty(N) ? U = A[N] : A[N] = U = {};
              const G = (T.includes("@id") ? V["@id"] : V["@index"]) || l.compactIri({
                activeCtx: q,
                iri: "@none",
                relativeTo: { vocab: !0 }
              });
              v(
                U,
                G,
                J,
                {
                  propertyIsArray: !R.compactArrays || T.includes("@set")
                }
              );
            } else T.includes("@graph") && o(V) ? (t(J) && J.length > 1 && (J = { "@included": J }), v(
              A,
              N,
              J,
              {
                propertyIsArray: !R.compactArrays || T.includes("@set")
              }
            )) : (t(J) && J.length === 1 && R.compactArrays && (J = J[0]), J = {
              [l.compactIri({
                activeCtx: q,
                iri: "@graph",
                relativeTo: { vocab: !0 }
              })]: J
            }, "@id" in V && (J[l.compactIri({
              activeCtx: q,
              iri: "@id",
              relativeTo: { vocab: !0 }
            })] = V["@id"]), "@index" in V && (J[l.compactIri({
              activeCtx: q,
              iri: "@index",
              relativeTo: { vocab: !0 }
            })] = V["@index"]), v(
              A,
              N,
              J,
              {
                propertyIsArray: !R.compactArrays || T.includes("@set")
              }
            ));
          else if (T.includes("@language") || T.includes("@index") || T.includes("@id") || T.includes("@type")) {
            let U;
            A.hasOwnProperty(N) ? U = A[N] : A[N] = U = {};
            let G;
            if (T.includes("@language"))
              a(J) && (J = J["@value"]), G = V["@language"];
            else if (T.includes("@index")) {
              const B = g(
                q,
                N,
                "@index"
              ) || "@index", K = l.compactIri(
                { activeCtx: q, iri: B, relativeTo: { vocab: !0 } }
              );
              if (B === "@index")
                G = V["@index"], delete J[K];
              else {
                let W;
                if ([G, ...W] = y(J[B] || []), !r(G))
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
                activeCtx: q,
                iri: "@id",
                relativeTo: { vocab: !0 }
              });
              G = J[B], delete J[B];
            } else if (T.includes("@type")) {
              const B = l.compactIri({
                activeCtx: q,
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
                activeCtx: q,
                activeProperty: N,
                element: { "@id": V["@id"] },
                options: R
              }));
            }
            G || (G = l.compactIri({
              activeCtx: q,
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
            const U = !R.compactArrays || T.includes("@set") || T.includes("@list") || t(J) && J.length === 0 || k === "@list" || k === "@graph";
            v(
              A,
              N,
              J,
              { propertyIsArray: U }
            );
          }
        }
      }
      return E;
    }
    return C;
  }, l.compactIri = ({
    activeCtx: q,
    iri: _,
    value: C = null,
    relativeTo: R = { vocab: !1 },
    reverse: O = !1,
    base: $ = null
  }) => {
    if (_ === null)
      return _;
    q.isPropertyTermScoped && q.previousContext && (q = q.previousContext);
    const E = q.getInverse();
    if (u(_) && _ in E && "@none" in E[_] && "@type" in E[_]["@none"] && "@none" in E[_]["@none"]["@type"])
      return E[_]["@none"]["@type"]["@none"];
    if (R.vocab && _ in E) {
      const F = q["@language"] || "@none", k = [];
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
      let M = "@language", V = "@null";
      if (O)
        M = "@type", V = "@reverse", k.push("@set");
      else if (i(C)) {
        "@index" in C || k.push("@list");
        const j = C["@list"];
        if (j.length === 0)
          M = "@any", V = "@none";
        else {
          let A = j.length === 0 ? F : null, T = null;
          for (let D = 0; D < j.length; ++D) {
            const H = j[D];
            let Q = "@none", J = "@none";
            if (a(H))
              if ("@direction" in H) {
                const U = (H["@language"] || "").toLowerCase(), G = H["@direction"];
                Q = `${U}_${G}`;
              } else "@language" in H ? Q = H["@language"].toLowerCase() : "@type" in H ? J = H["@type"] : Q = "@null";
            else
              J = "@id";
            if (A === null ? A = Q : Q !== A && a(H) && (A = "@none"), T === null ? T = J : J !== T && (T = "@none"), A === "@none" && T === "@none")
              break;
          }
          A = A || "@none", T = T || "@none", T !== "@none" ? (M = "@type", V = T) : V = A;
        }
      } else {
        if (a(C))
          if ("@language" in C && !("@index" in C)) {
            k.push("@language", "@language@set"), V = C["@language"];
            const j = C["@direction"];
            j && (V = `${V}_${j}`);
          } else "@direction" in C && !("@index" in C) ? V = `_${C["@direction"]}` : "@type" in C && (M = "@type", V = C["@type"]);
        else
          M = "@type", V = "@id";
        k.push("@set");
      }
      k.push("@none"), n(C) && !("@index" in C) && k.push("@index", "@index@set"), a(C) && Object.keys(C).length === 1 && k.push("@language", "@language@set");
      const N = m(
        q,
        _,
        C,
        k,
        M,
        V
      );
      if (N !== null)
        return N;
    }
    if (R.vocab && "@vocab" in q) {
      const F = q["@vocab"];
      if (_.indexOf(F) === 0 && _ !== F) {
        const k = _.substr(F.length);
        if (!q.mappings.has(k))
          return k;
      }
    }
    let z = null;
    const P = [];
    let Z = q.fastCurieMap;
    const L = _.length - 1;
    for (let F = 0; F < L && _[F] in Z; ++F)
      Z = Z[_[F]], "" in Z && P.push(Z[""][0]);
    for (let F = P.length - 1; F >= 0; --F) {
      const k = P[F], M = k.terms;
      for (const V of M) {
        const N = V + ":" + _.substr(k.iri.length);
        q.mappings.get(V)._prefix && (!q.mappings.has(N) || C === null && q.mappings.get(N)["@id"] === _) && (z === null || d(N, z) < 0) && (z = N);
      }
    }
    if (z !== null)
      return z;
    for (const [F, k] of q.mappings)
      if (k && k._prefix && _.startsWith(F + ":"))
        throw new e(
          `Absolute IRI "${_}" confused with prefix "${F}".`,
          "jsonld.SyntaxError",
          { code: "IRI confused with prefix", context: q }
        );
    if (!R.vocab)
      if ("@base" in q)
        if (q["@base"]) {
          const F = x(b($, q["@base"]), _);
          return S.test(F) ? `./${F}` : F;
        } else
          return _;
      else
        return x($, _);
    return _;
  }, l.compactValue = ({ activeCtx: q, activeProperty: _, value: C, options: R }) => {
    if (a(C)) {
      const z = g(q, _, "@type"), P = g(q, _, "@language"), Z = g(q, _, "@direction"), L = g(q, _, "@container") || [], F = "@index" in C && !L.includes("@index");
      if (!F && z !== "@none" && (C["@type"] === z || "@language" in C && C["@language"] === P && "@direction" in C && C["@direction"] === Z || "@language" in C && C["@language"] === P || "@direction" in C && C["@direction"] === Z))
        return C["@value"];
      const k = Object.keys(C).length, M = k === 1 || k === 2 && "@index" in C && !F, V = "@language" in q, N = r(C["@value"]), j = q.mappings.has(_) && q.mappings.get(_)["@language"] === null;
      if (M && z !== "@none" && (!V || !N || j))
        return C["@value"];
      const A = {};
      return F && (A[l.compactIri({
        activeCtx: q,
        iri: "@index",
        relativeTo: { vocab: !0 }
      })] = C["@index"]), "@type" in C ? A[l.compactIri({
        activeCtx: q,
        iri: "@type",
        relativeTo: { vocab: !0 }
      })] = l.compactIri(
        { activeCtx: q, iri: C["@type"], relativeTo: { vocab: !0 } }
      ) : "@language" in C && (A[l.compactIri({
        activeCtx: q,
        iri: "@language",
        relativeTo: { vocab: !0 }
      })] = C["@language"]), "@direction" in C && (A[l.compactIri({
        activeCtx: q,
        iri: "@direction",
        relativeTo: { vocab: !0 }
      })] = C["@direction"]), A[l.compactIri({
        activeCtx: q,
        iri: "@value",
        relativeTo: { vocab: !0 }
      })] = C["@value"], A;
    }
    const O = h(
      q,
      _,
      { vocab: !0 },
      R
    ), $ = g(q, _, "@type"), E = l.compactIri({
      activeCtx: q,
      iri: C["@id"],
      relativeTo: { vocab: $ === "@vocab" },
      base: R.base
    });
    return $ === "@id" || $ === "@vocab" || O === "@graph" ? E : {
      [l.compactIri({
        activeCtx: q,
        iri: "@id",
        relativeTo: { vocab: !0 }
      })]: E
    };
  };
  function m(q, _, C, R, O, $) {
    $ === null && ($ = "@null");
    const E = [];
    if (($ === "@id" || $ === "@reverse") && n(C) && "@id" in C) {
      $ === "@reverse" && E.push("@reverse");
      const P = l.compactIri(
        { activeCtx: q, iri: C["@id"], relativeTo: { vocab: !0 } }
      );
      q.mappings.has(P) && q.mappings.get(P) && q.mappings.get(P)["@id"] === C["@id"] ? E.push.apply(E, ["@vocab", "@id"]) : E.push.apply(E, ["@id", "@vocab"]);
    } else {
      E.push($);
      const P = E.find((Z) => Z.includes("_"));
      P && E.push(P.replace(/^[^_]+_/, "_"));
    }
    E.push("@none");
    const z = q.inverse[_];
    for (const P of R) {
      if (!(P in z))
        continue;
      const Z = z[P][O];
      for (const L of E)
        if (L in Z)
          return Z[L];
    }
    return null;
  }
  function I(q, _, C) {
    if (h(q, _, { vocab: !0 }, C) !== "@nest")
      throw new e(
        "JSON-LD compact error; nested property must have an @nest value resolving to @nest.",
        "jsonld.SyntaxError",
        { code: "invalid @nest value" }
      );
  }
  return is;
}
var ss, jc;
function eh() {
  return jc || (jc = 1, ss = (e) => {
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
  }), ss;
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
var as, $c;
function th() {
  if ($c) return as;
  $c = 1;
  const e = Ds(), t = Vf(), n = Ve(), r = Bf(), c = n.IdentifierIssuer, i = Ue(), a = vd(), s = Zf(), { expand: o } = Hf(), { flatten: p } = Jf(), { fromRDF: h } = Kf(), { toRDF: g } = Wf(), {
    frameMergedOrDefault: u,
    cleanupNull: f
  } = Xf(), {
    isArray: w,
    isObject: x,
    isString: b
  } = Ee(), {
    isSubjectReference: S
  } = ht(), {
    expandIri: v,
    getInitialContext: y,
    process: d,
    processingMode: l
  } = kt(), {
    compact: m,
    compactIri: I
  } = Yf(), {
    createNodeMap: q,
    createMergedNodeMap: _,
    mergeNodeMaps: C
  } = Jr(), {
    logEventHandler: R,
    logWarningEventHandler: O,
    safeEventHandler: $,
    setDefaultEventHandler: E,
    setupEventHandler: z,
    strictEventHandler: P,
    unhandledEventHandler: Z
  } = bn(), L = function(k) {
    const M = {}, N = new a({ max: 100 });
    k.compact = async function(A, T, D) {
      if (arguments.length < 2)
        throw new TypeError("Could not compact, too few arguments.");
      if (T === null)
        throw new i(
          "The compaction context must not be null.",
          "jsonld.CompactError",
          { code: "invalid local context" }
        );
      if (A === null)
        return null;
      D = j(D, {
        base: b(A) ? A : "",
        compactArrays: !0,
        compactToRelative: !0,
        graph: !1,
        skipExpansion: !1,
        link: !1,
        issuer: new c("_:b"),
        contextResolver: new r(
          { sharedCache: N }
        )
      }), D.link && (D.skipExpansion = !0), D.compactToRelative || delete D.base;
      let H;
      D.skipExpansion ? H = A : H = await k.expand(A, D);
      const Q = await k.processContext(
        y(D),
        T,
        D
      );
      let J = await m({
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
    }, k.expand = async function(A, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not expand, too few arguments.");
      T = j(T, {
        keepFreeFloatingNodes: !1,
        contextResolver: new r(
          { sharedCache: N }
        )
      });
      const D = {}, H = [];
      if ("expandContext" in T) {
        const G = n.clone(T.expandContext);
        x(G) && "@context" in G ? D.expandContext = G : D.expandContext = { "@context": G }, H.push(D.expandContext);
      }
      let Q;
      if (!b(A))
        D.input = n.clone(A);
      else {
        const G = await k.get(A, T);
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
    }, k.flatten = async function(A, T, D) {
      if (arguments.length < 1)
        return new TypeError("Could not flatten, too few arguments.");
      typeof T == "function" ? T = null : T = T || null, D = j(D, {
        base: b(A) ? A : "",
        contextResolver: new r(
          { sharedCache: N }
        )
      });
      const H = await k.expand(A, D), Q = p(H);
      return T === null ? Q : (D.graph = !0, D.skipExpansion = !0, await k.compact(Q, T, D));
    }, k.frame = async function(A, T, D) {
      if (arguments.length < 2)
        throw new TypeError("Could not frame, too few arguments.");
      if (D = j(D, {
        base: b(A) ? A : "",
        embed: "@once",
        explicit: !1,
        requireAll: !1,
        omitDefault: !1,
        bnodesToClear: [],
        contextResolver: new r(
          { sharedCache: N }
        )
      }), b(T)) {
        const ee = await k.get(T, D);
        if (T = ee.document, ee.contextUrl) {
          let ie = T["@context"];
          ie ? w(ie) ? ie.push(ee.contextUrl) : ie = [ie, ee.contextUrl] : ie = ee.contextUrl, T["@context"] = ie;
        }
      }
      const H = T ? T["@context"] || {} : {}, Q = await k.processContext(
        y(D),
        H,
        D
      );
      D.hasOwnProperty("omitGraph") || (D.omitGraph = l(Q, 1.1)), D.hasOwnProperty("pruneBlankNodeIdentifiers") || (D.pruneBlankNodeIdentifiers = l(Q, 1.1));
      const J = await k.expand(A, D), U = { ...D };
      U.isFrame = !0, U.keepFreeFloatingNodes = !0;
      const G = await k.expand(T, U), B = Object.keys(T).map((ee) => v(Q, ee, { vocab: !0 }));
      U.merged = !B.includes("@graph"), U.is11 = l(Q, 1.1);
      const K = u(J, G, U);
      U.graph = !D.omitGraph, U.skipExpansion = !0, U.link = {}, U.framing = !0;
      let W = await k.compact(K, H, U);
      return U.link = {}, W = f(W, U), W;
    }, k.link = async function(A, T, D) {
      const H = {};
      return T && (H["@context"] = T), H["@embed"] = "@link", k.frame(A, H, D);
    }, k.normalize = k.canonize = async function(A, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not canonize, too few arguments.");
      if (T = j(T, {
        base: b(A) ? A : null,
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
        const Q = s.parse(A);
        return e.canonize(Q, T);
      }
      const D = { ...T };
      delete D.format, D.produceGeneralizedRdf = !1;
      const H = await k.toRDF(A, D);
      return e.canonize(H, T);
    }, k.fromRDF = async function(A, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert from RDF, too few arguments.");
      T = j(T, {
        format: b(A) ? "application/n-quads" : void 0
      });
      const { format: D } = T;
      let { rdfParser: H } = T;
      if (D) {
        if (H = H || M[D], !H)
          throw new i(
            "Unknown input format.",
            "jsonld.UnknownFormat",
            { format: D }
          );
      } else
        H = () => A;
      const Q = await H(A);
      return h(Q, T);
    }, k.toRDF = async function(A, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert to RDF, too few arguments.");
      T = j(T, {
        base: b(A) ? A : "",
        skipExpansion: !1,
        contextResolver: new r(
          { sharedCache: N }
        )
      });
      let D;
      T.skipExpansion ? D = A : D = await k.expand(A, T);
      const H = g(D, T);
      if (T.format) {
        if (T.format === "application/n-quads" || T.format === "application/nquads")
          return s.serialize(H);
        throw new i(
          "Unknown output format.",
          "jsonld.UnknownFormat",
          { format: T.format }
        );
      }
      return H;
    }, k.createNodeMap = async function(A, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not create node map, too few arguments.");
      T = j(T, {
        base: b(A) ? A : "",
        contextResolver: new r(
          { sharedCache: N }
        )
      });
      const D = await k.expand(A, T);
      return _(D, T);
    }, k.merge = async function(A, T, D) {
      if (arguments.length < 1)
        throw new TypeError("Could not merge, too few arguments.");
      if (!w(A))
        throw new TypeError('Could not merge, "docs" must be an array.');
      typeof T == "function" ? T = null : T = T || null, D = j(D, {
        contextResolver: new r(
          { sharedCache: N }
        )
      });
      const H = await Promise.all(A.map((ee) => {
        const ie = { ...D };
        return k.expand(ee, ie);
      }));
      let Q = !0;
      "mergeNodes" in D && (Q = D.mergeNodes);
      const J = D.issuer || new c("_:b"), U = { "@default": {} };
      for (let ee = 0; ee < H.length; ++ee) {
        const ie = n.relabelBlankNodes(H[ee], {
          issuer: new c("_:b" + ee + "-")
        }), be = Q || ee === 0 ? U : { "@default": {} };
        if (q(ie, be, "@default", J), be !== U)
          for (const fe in be) {
            const me = be[fe];
            if (!(fe in U)) {
              U[fe] = me;
              continue;
            }
            const pe = U[fe];
            for (const Xe in me)
              Xe in pe || (pe[Xe] = me[Xe]);
          }
      }
      const G = C(U), B = [], K = Object.keys(G).sort();
      for (let ee = 0; ee < K.length; ++ee) {
        const ie = G[K[ee]];
        S(ie) || B.push(ie);
      }
      return T === null ? B : (D.graph = !0, D.skipExpansion = !0, await k.compact(B, T, D));
    }, Object.defineProperty(k, "documentLoader", {
      get: () => k._documentLoader,
      set: (A) => k._documentLoader = A
    }), k.documentLoader = async (A) => {
      throw new i(
        "Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.",
        "jsonld.LoadDocumentError",
        { code: "loading document failed", url: A }
      );
    }, k.get = async function(A, T) {
      let D;
      typeof T.documentLoader == "function" ? D = T.documentLoader : D = k.documentLoader;
      const H = await D(A);
      try {
        if (!H.document)
          throw new i(
            "No remote document found at the given URL.",
            "jsonld.NullRemoteDocument"
          );
        b(H.document) && (H.document = JSON.parse(H.document));
      } catch (Q) {
        throw new i(
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
    }, k.processContext = async function(A, T, D) {
      return D = j(D, {
        base: "",
        contextResolver: new r(
          { sharedCache: N }
        )
      }), T === null ? y(D) : (T = n.clone(T), x(T) && "@context" in T || (T = { "@context": T }), d({ activeCtx: A, localCtx: T, options: D }));
    }, k.getContextValue = kt().getContextValue, k.documentLoaders = {}, k.useDocumentLoader = function(A) {
      if (!(A in k.documentLoaders))
        throw new i(
          'Unknown document loader type: "' + A + '"',
          "jsonld.UnknownDocumentLoader",
          { type: A }
        );
      k.documentLoader = k.documentLoaders[A].apply(
        k,
        Array.prototype.slice.call(arguments, 1)
      );
    }, k.registerRDFParser = function(A, T) {
      M[A] = T;
    }, k.unregisterRDFParser = function(A) {
      delete M[A];
    }, k.registerRDFParser("application/n-quads", s.parse), k.registerRDFParser("application/nquads", s.parse), k.url = At(), k.logEventHandler = R, k.logWarningEventHandler = O, k.safeEventHandler = $, k.setDefaultEventHandler = E, k.strictEventHandler = P, k.unhandledEventHandler = Z, k.util = n, Object.assign(k, n), k.promises = k, k.RequestQueue = gd(), k.JsonLdProcessor = eh()(k), t.setupGlobals(k), t.setupDocumentLoaders(k);
    function j(A, {
      documentLoader: T = k.documentLoader,
      ...D
    }) {
      if (A && "compactionMap" in A)
        throw new i(
          '"compactionMap" not supported.',
          "jsonld.OptionsError"
        );
      if (A && "expansionMap" in A)
        throw new i(
          '"expansionMap" not supported.',
          "jsonld.OptionsError"
        );
      return Object.assign(
        {},
        { documentLoader: T },
        D,
        A,
        { eventHandler: z({ options: A }) }
      );
    }
    return k;
  }, F = function() {
    return L(function() {
      return F();
    });
  };
  return L(F), as = F, as;
}
var nh = th();
const rh = /* @__PURE__ */ _s(nh);
async function _c(e, t, n = {}) {
  const r = {
    algorithm: "URDNA2015",
    format: "application/n-quads",
    safe: n.safe ?? !1
  };
  return t && (r.documentLoader = t), await rh.normalize(e, r);
}
async function ih(e, t, n, r = !1) {
  const [c, i] = await Promise.all([
    _c(e, n, { safe: r }),
    _c(t, n, { safe: r })
  ]), a = ps("sha256").update(c, "utf8").digest(), s = ps("sha256").update(i, "utf8").digest(), o = new Uint8Array(64);
  return o.set(s, 0), o.set(a, 32), o;
}
async function sh(e, t, n = {}) {
  const r = e.proof;
  if (!r) throw new Error("No proof found on credential");
  if (r.cryptosuite !== "eddsa-rdfc-2022")
    throw new Error(`Unsupported cryptosuite: ${r.cryptosuite}`);
  if (r.created === void 0)
    throw new Error('eddsa-rdfc-2022 proof is missing the required "created" property.');
  const c = ["type", "cryptosuite", "proofPurpose", "verificationMethod", "created", "proofValue"];
  if (r.type !== "DataIntegrityProof" || r.proofPurpose !== "assertionMethod" || Object.keys(r).some((g) => !c.includes(g)) || typeof r.verificationMethod != "string" || typeof r.created != "string" || typeof r.proofValue != "string") return !1;
  const { proof: i, ...a } = e, { proofValue: s, ...o } = r, p = { ...o, "@context": a["@context"] }, h = await ih(
    a,
    p,
    n.documentLoader,
    n.safe ?? !1
  );
  try {
    const g = Gc(r.proofValue);
    return await $f(g, h, t);
  } catch {
    return !1;
  }
}
const ah = Xp, oh = ff, ch = Object.freeze({
  RmAccreditation: `${Lt}accreditation.json`,
  RmOperationalScope: `${Lt}operational-scope.json`,
  RmCertificate: `${Lt}certificate.json`,
  RmStudy: `${Lt}study.json`,
  RmLabAuthority: `${Lt}lab-authority.json`,
  BitstringStatusListCredential: `${Lt}status-list.json`
});
function dh(e) {
  return e === "BitstringStatusListCredential" ? [Kt] : [Kt, wl];
}
const lh = Object.freeze({
  name: "RM v1",
  schemas: ch,
  contexts: dh
}), uh = Object.freeze({
  resolve: 1,
  parse: 0,
  carrier: 0,
  type: 0,
  schema: 0,
  proof: 2,
  key: 2,
  signature: 2
});
function Kr(e, t, n, r) {
  return [
    e,
    t ?? "unresolved",
    n,
    r.purpose,
    `${r.profile.id}@${r.profile.version}`,
    r.evaluationTime
  ].join(" | ");
}
function Bt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const ph = (e) => e.replace(/~/g, "~0").replace(/\//g, "~1");
function fh(e, t) {
  if (!t.startsWith("/")) return [];
  let n = [{ pointer: "", value: e }];
  for (const r of t.slice(1).split("/")) {
    const c = [];
    for (const { pointer: i, value: a } of n)
      r === "*" ? Array.isArray(a) && a.forEach((s, o) => c.push({ pointer: `${i}/${o}`, value: s })) : Bt(a) && Object.hasOwn(a, r) && c.push({ pointer: `${i}/${ph(r)}`, value: a[r] });
    n = c;
  }
  return n;
}
function Xt(e, t) {
  if (t === "") return e;
  if (!t.startsWith("/")) return;
  let n = e;
  for (const r of t.slice(1).split("/")) {
    const c = r.replace(/~1/g, "/").replace(/~0/g, "~");
    if (Array.isArray(n) && /^(0|[1-9][0-9]*)$/.test(c)) n = n[Number(c)];
    else if (Bt(n) && Object.hasOwn(n, c)) n = n[c];
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
const Yt = (e) => oe("not_established", [e], [], "not_run");
function hh(e, t) {
  const n = Date.parse(t), r = typeof e.validFrom == "string" ? Date.parse(e.validFrom) : NaN, c = typeof e.validUntil == "string" ? Date.parse(e.validUntil) : NaN;
  if (!Number.isFinite(n) || !Number.isFinite(r) || !Number.isFinite(c))
    return oe("not_established", ["Validity period or evaluation time is missing or invalid."]);
  const i = ["/validFrom", "/validUntil"];
  return n < r ? oe("contradicted", [`Not yet valid at ${t}.`], i) : n > c ? oe("contradicted", [`Expired before ${t}.`], i) : oe("established", [`Valid at ${t}.`], i);
}
function mh(e, t) {
  return (Array.isArray(e.relatedResource) ? e.relatedResource : []).filter(Bt).map((r) => {
    const c = String(r.id);
    try {
      const i = zr(t.resolve(c).bytes);
      return i === r.digestSRI ? { id: c, state: "established", reason: "Digest matches the exact referenced bytes." } : { id: c, state: "contradicted", reason: `Digest mismatch: referenced bytes hash to ${i}.` };
    } catch (i) {
      const a = i instanceof $e ? i.code : "UNAVAILABLE";
      return { id: c, state: "not_established", reason: `Referenced resource unavailable: ${a}.` };
    }
  });
}
async function Ar(e, t, n) {
  const r = [], c = n.staticResolver ?? t, i = n.binding ?? lh, a = Yt("Not evaluated because protection is not established."), s = (l = {}) => {
    const m = ve(r.map((I) => I.state));
    return Object.freeze({
      artifactId: e,
      protection: Object.freeze({
        artifactId: e,
        ...oe(m, r.filter((I) => I.state !== "established").map((I) => `${I.check}: ${I.reason}`).concat(m === "established" ? ["Protection established from the original secured bytes."] : []))
      }),
      checks: Object.freeze(r.map((I) => Object.freeze(I))),
      validity: a,
      relatedResources: Object.freeze([]),
      facts: Object.freeze([]),
      ...l
    });
  }, o = (l, m, I, q = {}) => (r.push({ check: l, state: m, reason: I }), s(q));
  let p;
  try {
    p = t.resolve(e).bytes;
  } catch (l) {
    const m = l instanceof $e ? l.code : "UNAVAILABLE";
    return o("resolve", "not_established", `Artifact is not available: ${m}.`);
  }
  const h = zr(p);
  r.push({ check: "resolve", state: "established", reason: `Resolved ${p.byteLength} bytes.` });
  let g;
  try {
    g = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(p));
  } catch {
    return o("parse", "contradicted", "Artifact bytes are not valid UTF-8 JSON.", { digestSRI: h });
  }
  if (!Bt(g)) return o("parse", "contradicted", "Artifact is not a JSON object.", { digestSRI: h });
  r.push({ check: "parse", state: "established", reason: "Strict UTF-8 JSON object." });
  const u = g["@context"], f = i.contexts(Array.isArray(g.type) ? g.type[1] : void 0);
  if (!Array.isArray(u) || u.length !== f.length || f.some((l, m) => u[m] !== l))
    return o(
      "carrier",
      "not_established",
      "Only the exact supported context combination for this type is accepted.",
      { digestSRI: h }
    );
  r.push({ check: "carrier", state: "established", reason: "Exact supported context combination." });
  const w = Array.isArray(g.type) ? g.type : [], x = w.length === 2 && w[0] === "VerifiableCredential" ? String(w[1]) : void 0, b = x === void 0 ? void 0 : i.schemas[x];
  if (b === void 0)
    return o("type", "not_established", `Credential type is not a recognized ${i.name} artifact type.`, { digestSRI: h });
  if (Array.isArray(g.credentialSchema))
    return o(
      "type",
      "not_established",
      "Multiple credentialSchema declarations have no accepted composition in this binding.",
      { digestSRI: h, artifactType: x }
    );
  if ((Bt(g.credentialSchema) ? g.credentialSchema.id : void 0) !== b)
    return o("type", "contradicted", `${x} must declare schema ${b}.`, { digestSRI: h, artifactType: x });
  r.push({ check: "type", state: "established", reason: `${x} with its pinned schema.` });
  try {
    const l = new ah({ allErrors: !0, strict: !0 });
    oh(l);
    const m = JSON.parse(new TextDecoder().decode(c.resolve(b).bytes)), I = l.compile(m);
    if (!I(g)) {
      const q = (I.errors ?? []).map((_) => `${_.instancePath || "/"} ${_.message ?? ""}`).join("; ");
      return o("schema", "contradicted", `Schema validation failed: ${q}`, { digestSRI: h, artifactType: x });
    }
  } catch (l) {
    const m = l instanceof $e ? l.code : "INVALID_SCHEMA";
    return o("schema", "not_established", `Pinned schema unavailable: ${m}.`, { digestSRI: h, artifactType: x });
  }
  r.push({ check: "schema", state: "established", reason: "Valid against the pinned schema." });
  const v = g.proof;
  if (Array.isArray(v))
    return o("proof", "not_established", "Proof sets and chains are unsupported in the initial slice.", { digestSRI: h, artifactType: x });
  if (!Bt(v))
    return o("proof", "not_established", "The artifact carries no proof.", { digestSRI: h, artifactType: x });
  r.push({ check: "proof", state: "established", reason: "One eddsa-rdfc-2022 assertionMethod proof." });
  const y = $l(g.issuer, v.verificationMethod, c);
  if (y.state !== "established" || y.publicKey === void 0)
    return o(
      "key",
      y.state === "established" ? "not_established" : y.state,
      `${y.code}: ${y.reason}`,
      { digestSRI: h, artifactType: x, keyAuthorization: y }
    );
  r.push({ check: "key", state: "established", reason: y.reason });
  try {
    const l = vl(c);
    if (!await sh(g, y.publicKey, {
      documentLoader: l,
      safe: !0
    }))
      return o(
        "signature",
        "contradicted",
        "Signature does not verify over the safe canonical form.",
        { digestSRI: h, artifactType: x, keyAuthorization: y }
      );
  } catch (l) {
    const m = l instanceof Error ? l.message.split(`
`)[0] : String(l);
    return o(
      "signature",
      "contradicted",
      `Safe JSON-LD processing rejected the artifact: ${m}`,
      { digestSRI: h, artifactType: x, keyAuthorization: y }
    );
  }
  r.push({ check: "signature", state: "established", reason: "Ed25519 signature verifies (safe mode, offline catalog)." });
  const d = [];
  for (const l of n.manifest.factMappings) {
    const m = String(l.fact);
    for (const { pointer: I, value: q } of fh(g, String(l.nativePath)))
      d.push(Object.freeze({ fact: m, pointer: I, value: structuredClone(q) }));
  }
  return s({
    digestSRI: h,
    artifactType: x,
    keyAuthorization: y,
    validity: hh(g, n.evaluationTime),
    relatedResources: Object.freeze(mh(g, t).map((l) => Object.freeze(l))),
    facts: Object.freeze(d)
  });
}
var Ce = Uint8Array, Ft = Uint16Array, yh = Int32Array, bd = new Ce([
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
]), wd = new Ce([
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
]), gh = new Ce([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), xd = function(e, t) {
  for (var n = new Ft(31), r = 0; r < 31; ++r)
    n[r] = t += 1 << e[r - 1];
  for (var c = new yh(n[30]), r = 1; r < 30; ++r)
    for (var i = n[r]; i < n[r + 1]; ++i)
      c[i] = i - n[r] << 5 | r;
  return { b: n, r: c };
}, Sd = xd(bd, 2), Id = Sd.b, vh = Sd.r;
Id[28] = 258, vh[258] = 28;
var bh = xd(wd, 0), wh = bh.b, vs = new Ft(32768);
for (var ce = 0; ce < 32768; ++ce) {
  var wt = (ce & 43690) >> 1 | (ce & 21845) << 1;
  wt = (wt & 52428) >> 2 | (wt & 13107) << 2, wt = (wt & 61680) >> 4 | (wt & 3855) << 4, vs[ce] = ((wt & 65280) >> 8 | (wt & 255) << 8) >> 1;
}
var ln = (function(e, t, n) {
  for (var r = e.length, c = 0, i = new Ft(t); c < r; ++c)
    e[c] && ++i[e[c] - 1];
  var a = new Ft(t);
  for (c = 1; c < t; ++c)
    a[c] = a[c - 1] + i[c - 1] << 1;
  var s;
  if (n) {
    s = new Ft(1 << t);
    var o = 15 - t;
    for (c = 0; c < r; ++c)
      if (e[c])
        for (var p = c << 4 | e[c], h = t - e[c], g = a[e[c] - 1]++ << h, u = g | (1 << h) - 1; g <= u; ++g)
          s[vs[g] >> o] = p;
  } else
    for (s = new Ft(r), c = 0; c < r; ++c)
      e[c] && (s[c] = vs[a[e[c] - 1]++] >> 15 - e[c]);
  return s;
}), wn = new Ce(288);
for (var ce = 0; ce < 144; ++ce)
  wn[ce] = 8;
for (var ce = 144; ce < 256; ++ce)
  wn[ce] = 9;
for (var ce = 256; ce < 280; ++ce)
  wn[ce] = 7;
for (var ce = 280; ce < 288; ++ce)
  wn[ce] = 8;
var qd = new Ce(32);
for (var ce = 0; ce < 32; ++ce)
  qd[ce] = 5;
var xh = /* @__PURE__ */ ln(wn, 9, 1), Sh = /* @__PURE__ */ ln(qd, 5, 1), os = function(e) {
  for (var t = e[0], n = 1; n < e.length; ++n)
    e[n] > t && (t = e[n]);
  return t;
}, Be = function(e, t, n) {
  var r = t / 8 | 0;
  return (e[r] | e[r + 1] << 8) >> (t & 7) & n;
}, cs = function(e, t) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (t & 7);
}, Ih = function(e) {
  return (e + 7) / 8 | 0;
}, qh = function(e, t, n) {
  return (n == null || n > e.length) && (n = e.length), new Ce(e.subarray(t, n));
}, Ah = [
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
], Ze = function(e, t, n) {
  var r = new Error(t || Ah[e]);
  if (r.code = e, Error.captureStackTrace && Error.captureStackTrace(r, Ze), !n)
    throw r;
  return r;
}, Rh = function(e, t, n, r) {
  var c = e.length, i = 0;
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
  }, h = t.f || 0, g = t.p || 0, u = t.b || 0, f = t.l, w = t.d, x = t.m, b = t.n, S = c * 8;
  do {
    if (!f) {
      h = Be(e, g, 1);
      var v = Be(e, g + 1, 3);
      if (g += 3, v)
        if (v == 1)
          f = xh, w = Sh, x = 9, b = 5;
        else if (v == 2) {
          var m = Be(e, g, 31) + 257, I = Be(e, g + 10, 15) + 4, q = m + Be(e, g + 5, 31) + 1;
          g += 14;
          for (var _ = new Ce(q), C = new Ce(19), R = 0; R < I; ++R)
            C[gh[R]] = Be(e, g + R * 3, 7);
          g += I * 3;
          for (var O = os(C), $ = (1 << O) - 1, E = ln(C, O, 1), R = 0; R < q; ) {
            var z = E[Be(e, g, $)];
            g += z & 15;
            var y = z >> 4;
            if (y < 16)
              _[R++] = y;
            else {
              var P = 0, Z = 0;
              for (y == 16 ? (Z = 3 + Be(e, g, 3), g += 2, P = _[R - 1]) : y == 17 ? (Z = 3 + Be(e, g, 7), g += 3) : y == 18 && (Z = 11 + Be(e, g, 127), g += 7); Z--; )
                _[R++] = P;
            }
          }
          var L = _.subarray(0, m), F = _.subarray(m);
          x = os(L), b = os(F), f = ln(L, x, 1), w = ln(F, b, 1);
        } else
          Ze(1);
      else {
        var y = Ih(g) + 4, d = e[y - 4] | e[y - 3] << 8, l = y + d;
        if (l > c) {
          o && Ze(0);
          break;
        }
        s && p(u + d), n.set(e.subarray(y, l), u), t.b = u += d, t.p = g = l * 8, t.f = h;
        continue;
      }
      if (g > S) {
        o && Ze(0);
        break;
      }
    }
    s && p(u + 131072);
    for (var k = (1 << x) - 1, M = (1 << b) - 1, V = g; ; V = g) {
      var P = f[cs(e, g) & k], N = P >> 4;
      if (g += P & 15, g > S) {
        o && Ze(0);
        break;
      }
      if (P || Ze(2), N < 256)
        n[u++] = N;
      else if (N == 256) {
        V = g, f = null;
        break;
      } else {
        var j = N - 254;
        if (N > 264) {
          var R = N - 257, A = bd[R];
          j = Be(e, g, (1 << A) - 1) + Id[R], g += A;
        }
        var T = w[cs(e, g) & M], D = T >> 4;
        T || Ze(3), g += T & 15;
        var F = wh[D];
        if (D > 3) {
          var A = wd[D];
          F += cs(e, g) & (1 << A) - 1, g += A;
        }
        if (g > S) {
          o && Ze(0);
          break;
        }
        s && p(u + 131072);
        var H = u + j;
        if (u < F) {
          var Q = i - F, J = Math.min(F, H);
          for (Q + u < 0 && Ze(3); u < J; ++u)
            n[u] = r[Q + u];
        }
        for (; u < H; ++u)
          n[u] = n[u - F];
      }
    }
    t.l = f, t.p = V, t.b = u, t.f = h, f && (h = 1, t.m = x, t.d = w, t.n = b);
  } while (!h);
  return u != n.length && a ? qh(n, 0, u) : n.subarray(0, u);
}, jh = /* @__PURE__ */ new Ce(0), $h = function(e) {
  (e[0] != 31 || e[1] != 139 || e[2] != 8) && Ze(6, "invalid gzip data");
  var t = e[3], n = 10;
  t & 4 && (n += (e[10] | e[11] << 8) + 2);
  for (var r = (t >> 3 & 1) + (t >> 4 & 1); r > 0; r -= !e[n++])
    ;
  return n + (t & 2);
}, _h = function(e) {
  var t = e.length;
  return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
};
function Ph(e, t) {
  var n = $h(e);
  return n + 8 > e.length && Ze(6, "invalid gzip data"), Rh(e.subarray(n, -8), { i: 2 }, new Ce(_h(e)), t);
}
var Th = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Ch = 0;
try {
  Th.decode(jh, { stream: !0 }), Ch = 1;
} catch {
}
function Pc(e) {
  return Object.assign(new RangeError(`Cannot create a buffer larger than maxOutputLength ${e}.`), { code: "ERR_BUFFER_TOO_LARGE" });
}
function Eh(e, t = {}) {
  const n = t.maxOutputLength ?? Number.MAX_SAFE_INTEGER;
  if (e.length >= 18) {
    const c = e.length - 4;
    if ((e[c] | e[c + 1] << 8 | e[c + 2] << 16 | e[c + 3] << 24) >>> 0 > n) throw Pc(n);
  }
  const r = Ph(e);
  if (r.length > n) throw Pc(n);
  return r;
}
const Tc = 131072, kh = 2 * 1024 * 1024;
class Rr extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "StatusListError";
  }
}
function Mh(e, t = kh) {
  if (typeof e != "string" || !/^u[A-Za-z0-9_-]+$/.test(e))
    throw new Rr("MALFORMED", 'encodedList must be multibase base64url (prefix "u").');
  let n;
  try {
    n = Eh(Oh(e.slice(1)), { maxOutputLength: t });
  } catch (r) {
    throw r.code === "ERR_BUFFER_TOO_LARGE" || /maxOutputLength|buffer/i.test(String(r)) ? new Rr("TOO_LARGE", `Decompressed status list exceeds ${t} bytes.`) : new Rr("MALFORMED", "encodedList is not valid GZIP data.");
  }
  if (n.byteLength * 8 < Tc)
    throw new Rr("TOO_SHORT", `Status list has fewer than ${Tc} bits.`);
  return new Uint8Array(n);
}
function Oh(e) {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", n = new Uint8Array(Math.floor(e.length * 6 / 8));
  let r = 0, c = 0, i = 0;
  for (const a of e)
    r = r << 6 | t.indexOf(a), c += 6, c >= 8 && (c -= 8, n[i++] = r >> c & 255);
  return n;
}
function Lh(e, t) {
  const n = e[Math.floor(t / 8)];
  if (n === void 0) throw new RangeError(`Status index ${t} is outside the list.`);
  return (n >> 7 - t % 8 & 1) === 1;
}
function Ad(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function bs(e, t) {
  const n = e.credentialStatus;
  if (n === void 0) return {};
  const r = Array.isArray(n) ? n : [n];
  if (r.length === 0 || !r.every(Ad)) return { reason: "Unsupported credentialStatus form." };
  const c = r.filter((i) => t.includes(String(i.statusPurpose)));
  return c.length > 1 ? { reason: `Several status entries for ${t.join("/")}.` } : c.length === 0 ? { reason: `No status entry has an accepted purpose (${t.join(", ")}); found ${r.map((i) => String(i.statusPurpose)).join(", ")}.` } : { entry: c[0] };
}
function Nh(e, t, n, r, c, i = c) {
  const a = bs(e, r.purposes), s = a.entry;
  if (s === void 0 && a.reason === void 0)
    return r.required ? { state: "not_established", reason: "Status is required by the profile but the credential names none.", sources: [] } : { state: "established", reason: "The profile does not require status for this credential.", sources: [] };
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
  const h = t.credentialSubject;
  if (!Ad(h) || h.type !== "BitstringStatusList" || h.statusPurpose !== s.statusPurpose)
    return { state: "not_established", reason: "Status list purpose does not match the entry.", listUri: o, sources: p };
  const g = Date.parse(c), u = Date.parse(String(t.validFrom));
  if (!Number.isFinite(g) || !Number.isFinite(u) || (g - u) / 1e3 > r.maxAgeSeconds)
    return { state: "not_established", reason: `Status list is older than the profile's ${r.maxAgeSeconds} s freshness limit.`, listUri: o, sources: p };
  const f = Date.parse(i);
  if (!Number.isFinite(f) || f < u)
    return { state: "not_established", reason: `Status list observed at ${String(t.validFrom)} cannot establish status at the earlier activity time ${i}; historical status is unavailable.`, listUri: o, sources: p };
  if (!/^(0|[1-9][0-9]*)$/.test(s.statusListIndex))
    return { state: "not_established", reason: "statusListIndex is not a non-negative integer.", listUri: o, sources: p };
  let w;
  try {
    w = Lh(Mh(h.encodedList), Number(s.statusListIndex));
  } catch (S) {
    return { state: "not_established", reason: `Status list cannot be read: ${S.message}`, listUri: o, sources: p };
  }
  const [x, b] = s.statusPurpose === "suspension" ? ["Suspended", "Not suspended"] : ["Revoked", "Not revoked"];
  return w ? { state: "contradicted", reason: `${x}: bit ${s.statusListIndex} of ${o} is set.`, listUri: o, sources: p } : { state: "established", reason: `${b}: bit ${s.statusListIndex} of ${o} is clear.`, listUri: o, sources: p };
}
const Dh = Object.freeze({ maxResources: 1e3, maxBytes: 2e7 });
function Vs(e, t, n) {
  if (!(e.binding.id === t.id && e.binding.version === t.version && e.profile.id === n.id && e.profile.version === n.version))
    return `Requested ${e.profile.id}@${e.profile.version} with binding ${e.binding.id}@${e.binding.version} is not the verifier-selected profile ${n.id}@${n.version} for ${t.id}@${t.version}.`;
}
function Us(e, t) {
  const n = `${e.targetId} | plan`;
  return Vr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: [],
    authorization: e.selectedClaims.map((r) => ({
      claimId: r.id,
      routeWitnessIds: [],
      ...Yt("Not evaluated: the plan was refused at gate 0.")
    })),
    support: [],
    conformity: e.conformity ? { requested: !0, ...e.conformity, ...Yt("Not evaluated: the plan was refused at gate 0.") } : { requested: !1, execution: "not_run" },
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
async function Gs(e, t, n, r, c) {
  const i = ta(t.openSession({
    maxResources: e.resolverLimits.maxResources,
    maxBytes: e.resolverLimits.maxBytes
  })), a = ta(t.openSession(Dh)), s = { manifest: n, evaluationTime: e.evaluationTime, staticResolver: a, ...c ? { binding: c } : {} }, o = (m) => JSON.parse(new TextDecoder().decode(i.resolve(m).bytes)), p = await Ar(e.targetId, i, s), h = [p], g = /* @__PURE__ */ new Map([[e.targetId, 0]]);
  for (const m of e.suppliedEvidence)
    g.has(m) || (g.set(m, 1), h.push(await Ar(m, i, s)));
  for (let m = 0; m < h.length; m++) {
    const I = h[m], q = g.get(I.artifactId);
    if (I.protection.state !== "established" || q + 1 > e.resolverLimits.maxDepth) continue;
    const _ = o(I.artifactId), C = [
      ...(Array.isArray(_.termsOfUse) ? _.termsOfUse : []).map((R) => R?.authorizationCredential?.id),
      ...(Array.isArray(_.evidence) ? _.evidence : []).map((R) => R?.id)
    ].filter((R) => typeof R == "string");
    for (const R of C)
      g.has(R) || (g.set(R, q + 1), h.push(await Ar(R, i, s)));
  }
  const u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  for (const m of h) {
    if (m.protection.state !== "established") {
      w.set(m.artifactId, void 0);
      continue;
    }
    const I = o(m.artifactId).id;
    w.set(m.artifactId, I === m.artifactId ? oe("established", ["Artifact identifies itself by its resolved identity."], ["/id"]) : oe("contradicted", [`Artifact resolved as ${m.artifactId} identifies itself as ${String(I)}.`], ["/id"]));
  }
  const x = async (m, I, q) => {
    const _ = g.get(m) + 1;
    if (_ > e.resolverLimits.maxDepth)
      return {
        state: "not_established",
        sources: ["/credentialStatus"],
        reason: `Status list is at depth ${_}, beyond the request's maxDepth ${e.resolverLimits.maxDepth}.`
      };
    const C = bs(I, q.purposes).entry, R = typeof C?.statusListCredential == "string" ? C.statusListCredential : void 0;
    let O, $ = "not_established";
    if (R !== void 0) {
      u.has(R) || u.set(R, await Ar(R, i, s));
      const E = u.get(R);
      E.digestSRI !== void 0 && E.protection.state === "established" ? (O = o(R), $ = ve([E.protection.state, E.validity.state])) : E.digestSRI !== void 0 && (O = {}, $ = E.protection.state);
    }
    return Nh(I, O, $, q, e.evaluationTime, e.activityTime);
  }, b = { required: !0, purposes: ["suspension"], maxAgeSeconds: r.credentialStatus.maxAgeSeconds }, S = /* @__PURE__ */ new Map();
  for (const m of h) {
    if (m.protection.state !== "established") {
      f.set(m.artifactId, void 0);
      continue;
    }
    const I = o(m.artifactId);
    f.set(m.artifactId, await x(m.artifactId, I, r.credentialStatus)), bs(I, ["suspension"]).entry !== void 0 && S.set(m.artifactId, await x(m.artifactId, I, b));
  }
  const v = (m) => [
    m.protection,
    w.get(m.artifactId) ? {
      artifactId: m.artifactId,
      ...w.get(m.artifactId),
      reasons: w.get(m.artifactId).reasons.map((I) => `identity: ${I}`)
    } : { artifactId: m.artifactId, ...Yt("identity: Not evaluated because protection is not established.") },
    {
      artifactId: m.artifactId,
      ...m.validity,
      reasons: m.validity.reasons.map((I) => `validity: ${I}`)
    },
    ...f.get(m.artifactId) ? [{ artifactId: m.artifactId, ...oe(
      f.get(m.artifactId).state,
      [`status: ${f.get(m.artifactId).reason}`],
      [...f.get(m.artifactId).sources]
    ) }] : [{
      artifactId: m.artifactId,
      ...Yt("status: Not evaluated because protection is not established.")
    }],
    ...m.relatedResources.map((I) => ({
      artifactId: I.id,
      ...oe(I.state, [`integrity (from ${m.artifactId}): ${I.reason}`], ["/relatedResource"])
    }))
  ], y = /* @__PURE__ */ new Map();
  for (const m of h) {
    const I = [
      ["protection", m.protection.state, m.protection.reasons.join(" ")],
      ["identity", w.get(m.artifactId)?.state ?? "not_established", w.get(m.artifactId)?.reasons.join(" ") ?? "not evaluated"],
      ["validity", m.validity.state, m.validity.reasons.join(" ")],
      ["status", f.get(m.artifactId)?.state ?? "not_established", f.get(m.artifactId)?.reason ?? "not evaluated"]
    ], q = ve(I.map((C) => C[1])), _ = S.get(m.artifactId);
    y.set(m.artifactId, {
      uri: m.artifactId,
      usable: q,
      reason: I.filter((C) => C[1] !== "established").map((C) => `${C[0]}: ${C[2]}`).join("; ") || "usable",
      ...q === "established" ? { document: o(m.artifactId) } : {},
      ..._ ? { suspension: { state: _.state, reason: _.reason } } : {}
    });
  }
  const d = [], l = [];
  h.forEach((m, I) => {
    const q = I === 0 ? "target" : "supplied-evidence", _ = Kr(m.artifactId, m.digestSRI, q, e);
    for (const O of m.checks)
      d.push({
        gate: uh[O.check],
        nodeUse: _,
        predicate: O.check,
        state: O.state,
        execution: "executed",
        reason: O.reason,
        sources: [m.artifactId]
      });
    for (const O of m.relatedResources)
      d.push({
        gate: 1,
        nodeUse: _,
        predicate: "related-resource-integrity",
        state: O.state,
        execution: "executed",
        reason: `${O.id}: ${O.reason}`,
        sources: ["/relatedResource", O.id]
      });
    const C = w.get(m.artifactId);
    d.push(C ? {
      gate: 1,
      nodeUse: _,
      predicate: "resource-identity",
      state: C.state,
      execution: "executed",
      reason: C.reasons.join(" "),
      sources: [...C.sourcePointers]
    } : {
      gate: 1,
      nodeUse: _,
      predicate: "resource-identity",
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated because protection is not established.",
      sources: []
    }), d.push({
      gate: 3,
      nodeUse: _,
      predicate: "validity-period",
      state: m.validity.state,
      execution: m.validity.execution,
      reason: m.validity.reasons.join(" ") || "Not evaluated.",
      sources: [...m.validity.sourcePointers]
    });
    const R = f.get(m.artifactId);
    d.push(R ? {
      gate: 3,
      nodeUse: _,
      predicate: "credential-status",
      state: R.state,
      execution: "executed",
      reason: R.reason,
      sources: [...R.sources]
    } : {
      gate: 3,
      nodeUse: _,
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
  for (const [m, I] of u)
    I.digestSRI !== void 0 && l.push({ uri: m, digestSRI: I.digestSRI, kind: "status", source: "catalog", observedAt: e.evaluationTime });
  return {
    target: p,
    artifacts: h,
    facts: y,
    verificationOf: v,
    artifactVerification: h.flatMap(v),
    trace: d,
    resources: l
  };
}
const zh = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/, Fs = Object.freeze({ "kg/kg": 0, "mg/kg": -6 });
function Qr(e) {
  if (typeof e != "string" || !zh.test(e)) return;
  const [t, n = ""] = e.split(".");
  return { n: BigInt(`${t}${n}`), scale: n.length };
}
function mn(e, t) {
  const n = Qr(e), r = typeof t == "string" ? Fs[t] : void 0;
  if (!(n === void 0 || r === void 0))
    return r <= 0 ? { n: n.n, scale: n.scale - r } : { n: n.n * 10n ** BigInt(r), scale: n.scale };
}
function Re(e, t) {
  const n = Math.max(e.scale, t.scale), r = e.n * 10n ** BigInt(n - e.scale), c = t.n * 10n ** BigInt(n - t.scale);
  return r < c ? -1 : r > c ? 1 : 0;
}
function Vh(e, t) {
  const n = Math.max(e.scale, t.scale);
  return { n: e.n * 10n ** BigInt(n - e.scale) + t.n * 10n ** BigInt(n - t.scale), scale: n };
}
function un(e) {
  const t = e.n.toString().padStart(e.scale + 1, "0");
  if (e.scale === 0) return t;
  const n = t.slice(-e.scale).replace(/0+$/, "");
  return n.length === 0 ? t.slice(0, -e.scale) : `${t.slice(0, -e.scale)}.${n}`;
}
function ws(e) {
  const t = e.range;
  if (t === void 0) return "Scope record has no range.";
  const n = mn(t.from, t.unit), r = mn(t.to, t.unit);
  return n === void 0 || r === void 0 ? `Unsupported or malformed range ${String(t.from)}–${String(t.to)} ${String(t.unit)}.` : Re(n, r) > 0 ? "Scope record range is reversed." : { low: n, high: r };
}
const jr = (e) => Array.isArray(e) ? e.filter((t) => typeof t == "string") : [], Cc = (e, t) => e.length > 0 && e.every((n) => t.includes(n));
function Uh(e, t) {
  if (e.length === 0) return { state: "not_established", reason: "The projected scope has no records.", witnesses: [] };
  const n = [];
  for (const r of e) {
    const c = ws(r);
    if (typeof c == "string")
      return { state: /reversed/.test(c) ? "contradicted" : "not_established", reason: `${String(r.id)}: ${c}`, witnesses: n };
    const i = jr(r.allowedPropertyIris), a = jr(r.allowedMethodIris);
    if (i.length === 0 || a.length === 0 || typeof r.matrixIri != "string" || typeof r.formIri != "string" || typeof r.quantityKindIri != "string")
      return { state: "not_established", reason: `${String(r.id)}: a restricted dimension is missing or empty.`, witnesses: n };
    const s = t.find((o) => {
      const p = ws(o);
      return typeof p != "string" && o.matrixIri === r.matrixIri && o.formIri === r.formIri && o.quantityKindIri === r.quantityKindIri && Cc(i, jr(o.allowedPropertyIris)) && Cc(a, jr(o.allowedMethodIris)) && Re(c.low, p.low) >= 0 && Re(c.high, p.high) <= 0;
    });
    if (s === void 0)
      return { state: "contradicted", reason: `${String(r.id)} is not contained in any single parent record.`, witnesses: n };
    n.push({ child: String(r.id), parent: String(s.id) });
  }
  return { state: "established", reason: `Each projected record lies within one parent record (${n.map((r) => `${r.child} ⊆ ${r.parent}`).join("; ")}).`, witnesses: n };
}
const pn = "https://vc4qi.example/bindings/rm/1#", fn = Object.freeze({
  issueRmCertificate: `${pn}issueRmCertificate`,
  maintainRmScope: `${pn}maintainRmScope`,
  issueRmStudy: `${pn}issueRmStudy`
}), Ae = (e, t, n = []) => ({ id: e, state: "established", reason: t, sources: n }), Ne = (e, t, n = []) => ({ id: e, state: "contradicted", reason: t, sources: n }), he = (e, t, n = []) => ({ id: e, state: "not_established", reason: t, sources: n }), qt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Le = (e) => Array.isArray(e) ? e : [], Je = (e) => qt(e.credentialSubject) ? e.credentialSubject : {}, xs = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0, rt = (e, t) => Le(Je(e).permittedActivity).includes(t);
function Rd(e, t = "RmAuthorizationPolicy") {
  return Le(e.termsOfUse).filter(qt).filter((n) => n.type === t && qt(n.authorizationCredential)).map((n) => n.authorizationCredential).filter((n) => typeof n.id == "string").map((n) => ({ id: n.id, type: n.type }));
}
function Ke(e, t, n, r, c, i = "RmAuthorizationPolicy") {
  const a = Rd(t, i).filter((p) => p.type === n).map((p) => p.id);
  if (a.length === 0)
    return { basis: he(e, `No recognized authorization policy references a ${n}.`, ["/termsOfUse"]) };
  if (a.length > 1)
    return { basis: he(e, `Several ${n} references; this binding has no deterministic selection.`, ["/termsOfUse"]) };
  const s = a[0];
  if (c.includes(s))
    return { basis: he(e, `Circular authorization: ${s} is already on the evaluation path.`, ["/termsOfUse", s]) };
  const o = r(s);
  return o === void 0 ? { basis: he(e, `Referenced ${n} ${s} is unavailable.`, ["/termsOfUse", s]) } : o.usable !== "established" || o.document === void 0 ? { basis: {
    id: e,
    state: o.usable === "contradicted" ? "contradicted" : "not_established",
    reason: `Referenced ${n} ${s} is not usable: ${o.reason}`,
    sources: ["/termsOfUse", s]
  } } : xs(o.document) !== n ? { basis: Ne(e, `Reference declares ${n}, but ${s} is a ${String(xs(o.document))}.`, ["/termsOfUse", s]) } : { basis: Ae(e, `References ${n} ${s}.`, ["/termsOfUse", s]), node: o };
}
function at(e, t, n, r) {
  const c = Je(t).id;
  return typeof c != "string" || typeof n != "string" ? he(e, `${r}: grantee or exercising actor is missing.`, ["/credentialSubject/id", "/issuer"]) : c === n ? Ae(e, `${r}: grantee ${c} is the exercising actor.`, ["/credentialSubject/id", "/issuer"]) : Ne(e, `${r}: grantee ${c} is not the exercising actor ${n}.`, ["/credentialSubject/id", "/issuer"]);
}
function Rt(e, t, n, r) {
  const c = r.trustAnchors.find((i) => i.id === t.issuer);
  return c === void 0 ? he(e, `${String(t.issuer)} is not a configured trust anchor.`, ["/issuer"]) : c.purposes.includes(n) ? Ae(e, `${String(t.issuer)} is a configured anchor for ${n}.`, ["/issuer"]) : he(e, `${String(t.issuer)} is an anchor, but not for ${n}.`, ["/issuer"]);
}
function jt(e, t) {
  const n = "scope-in-force-at-activity", r = Je(e).activityTime, c = Date.parse(String(r));
  if (typeof r != "string" || !Number.isFinite(c))
    return he(n, "The certificate states no activity time.", ["/credentialSubject/activityTime"]);
  for (const [i, a] of t) {
    const s = Date.parse(String(a.validFrom)), o = Date.parse(String(a.validUntil));
    if (!Number.isFinite(s) || c < s)
      return he(n, `${i} is valid only from ${String(a.validFrom)}, after the activity at ${r}; a later scope cannot authorize it.`, ["/credentialSubject/activityTime", "/validFrom"]);
    if (Number.isFinite(o) && c > o)
      return he(n, `${i} expired at ${String(a.validUntil)}, before the activity at ${r}.`, ["/credentialSubject/activityTime", "/validUntil"]);
  }
  return Ae(n, `${t.map((i) => i[0]).join(" and ")} ${t.length > 1 ? "were" : "was"} in force at the activity time ${r}.`, ["/credentialSubject/activityTime"]);
}
function ue(e, t, n, r) {
  return { id: e, state: ve(t.map((c) => c.state)), execution: "executed", bases: t, chain: n, ...r ? { scope: r } : {} };
}
function Gh(e, t, n, r) {
  const c = e.document, i = [], a = [e.uri], s = Ke("authorizing-reference", c, "RmOperationalScope", t, r);
  if (i.push(s.basis), !s.node) return ue("operational-scope", i, a);
  const o = s.node.document;
  a.push(s.node.uri), i.push(at("principal-binding", o, c.issuer, "Operational scope O")), i.push(o.issuer === Je(o).id ? Ae("self-maintained-scope", "O is issued by its own grantee.", ["/issuer"]) : Ne("self-maintained-scope", "O is not issued by its own grantee.", ["/issuer"])), i.push(rt(o, fn.issueRmCertificate) ? Ae("activity-permission", "O permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : Ne("activity-permission", "O does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"]));
  const p = Ke("maintenance-grant", o, "RmAccreditation", t, [...r, s.node.uri]);
  if (i.push(p.basis), !p.node) return ue("operational-scope", i, a);
  const h = p.node.document;
  a.push(p.node.uri), i.push(at("accreditation-grantee", h, o.issuer, "Accreditation A")), i.push(rt(h, fn.maintainRmScope) && rt(h, fn.issueRmCertificate) ? Ae("projection-permission", "A permits maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]) : Ne("projection-permission", "A does not permit maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]));
  const g = Uh(Le(Je(o).scope).filter(qt), Le(Je(h).scope).filter(qt));
  return i.push({ id: "bounded-projection", state: g.state, reason: g.reason, sources: ["/credentialSubject/scope"] }), i.push(Rt("trust-anchor", h, "accredit-rm-producers", n)), i.push(jt(c, [["O", o], ["A", h]])), ue("operational-scope", i, a, s.node.uri);
}
function Fh(e, t, n, r) {
  const c = e.document, i = [], a = [e.uri], s = Ke("authorizing-reference", c, "RmAccreditation", t, r);
  if (i.push(s.basis), !s.node) return ue("direct-accreditation", i, a);
  const o = s.node.document;
  return a.push(s.node.uri), i.push(at("principal-binding", o, c.issuer, "Accreditation A")), i.push(rt(o, fn.issueRmCertificate) ? Ae("activity-permission", "A permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : Ne("activity-permission", "A does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"])), i.push(Rt("trust-anchor", o, "accredit-rm-producers", n)), i.push(jt(c, [["A", o]])), ue("direct-accreditation", i, a, s.node.uri);
}
const Bh = Object.freeze({
  "operational-scope": Gh,
  "direct-accreditation": Fh
});
function Zh(e, t, n) {
  const r = "restriction:accreditation-suspension", c = e.document.issuer, i = /* @__PURE__ */ new Set([e.uri]), a = [e.document], s = [];
  for (; a.length > 0; )
    for (const h of Rd(a.shift())) {
      if (i.has(h.id)) continue;
      i.add(h.id);
      const g = t(h.id);
      if (g?.usable !== "established" || g.document === void 0) continue;
      a.push(g.document);
      const u = g.document, f = n.trustAnchors.some((w) => w.id === u.issuer && w.purposes.includes("accredit-rm-producers"));
      xs(u) === "RmAccreditation" && f && Je(u).id === c && s.push(g);
    }
  if (s.length === 0)
    return he(r, `No accreditation of ${String(c)} is reached, so the absence of a suspension is not established.`);
  const o = s.map((h) => h.suspension === void 0 ? he(r, `${h.uri} carries no suspension status.`, [h.uri]) : { id: r, state: h.suspension.state, reason: `${h.uri}: ${h.suspension.reason}`, sources: [h.uri] }), p = ve(o.map((h) => h.state));
  return {
    id: r,
    state: p,
    reason: p === "contradicted" ? `The actor's certification activity is suspended. ${o.filter((h) => h.state === "contradicted").map((h) => h.reason).join(" ")}` : o.map((h) => h.reason).join(" "),
    sources: s.map((h) => h.uri)
  };
}
const Hh = Object.freeze({
  "accreditation-suspension": Zh
});
function xn(e, t, n) {
  const r = [
    ...t,
    ...n.map((p) => ({ id: p, state: "not_established", execution: "not_run", bases: [], chain: [] }))
  ], c = e.length === 0 ? "established" : ve(e.map((p) => p.state)), i = r.length === 0 ? "not_established" : yn(r.map((p) => p.state)), a = ve([c, i]), s = r.find((p) => p.state === "established"), o = a === "established" ? `Authorized through route ${s.id}; global restrictions hold.` : c === "contradicted" ? "An applicable global restriction applies to every route." : i === "contradicted" ? "Every permitted route is contradicted." : n.length > 0 ? "The route search stopped at its budget before every route was evaluated." : "No complete route is established.";
  return { state: a, reason: o, restrictions: e, routes: r };
}
function Wr(e, t) {
  const n = e.routes.filter((c) => c.execution === "executed").map((c) => {
    const a = (c.scope === void 0 ? void 0 : t(c)) ?? he("claim-coverage", "The route did not reach a scope credential.");
    return { ...c, bases: [...c.bases, a], state: ve([c.state, a.state]) };
  }), r = e.routes.filter((c) => c.execution === "not_run").map((c) => c.id);
  return xn(e.restrictions, n, r);
}
function Jh(e, t, n) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] };
  const r = e, c = n.authority.certificateRoutes, i = n.authority.maxRoutes, a = c.slice(0, i).map((o) => {
    const p = Bh[o];
    return p === void 0 ? ue(o, [he("installed-evaluator", `Route ${o} has no installed evaluator.`)], [r.uri]) : p(r, t, n, [r.uri]);
  }), s = n.authority.globalRestrictions.map((o) => {
    const p = Hh[o];
    return p === void 0 ? he(`restriction:${o}`, `Global restriction ${o} has no installed evaluator.`) : p(r, t, n);
  });
  return xn(s, a, c.slice(i));
}
function Kh(e, t, n, r) {
  const c = e.document, i = [], a = [e.uri], s = Ke("laboratory-authority-reference", c, "RmLabAuthority", t, r);
  if (i.push(s.basis), !s.node) return ue("laboratory-authority", i, a);
  const o = s.node.document;
  a.push(s.node.uri), i.push(at("laboratory-binding", o, c.issuer, "Laboratory authority H")), i.push(rt(o, fn.issueRmStudy) ? Ae("study-permission", "H permits issuing RM studies.", ["/credentialSubject/permittedActivity"]) : Ne("study-permission", "H does not permit issuing RM studies.", ["/credentialSubject/permittedActivity"]));
  const p = Je(c), h = Le(Je(o).scope).filter(qt).some((g) => g.matrixIri === p.matrixIri && Le(g.allowedPropertyIris).includes(p.propertyIri) && Le(g.studyTypeIris).includes(p.studyTypeIri));
  return i.push(h ? Ae("study-scope", "H covers this matrix, property and study type.", ["/credentialSubject/scope"]) : Ne("study-scope", "H does not cover this matrix, property and study type.", ["/credentialSubject/scope"])), i.push(Rt("laboratory-anchor", o, "recognize-rm-laboratories", n)), ue("laboratory-authority", i, a);
}
function Qh(e, t, n) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const r = e.document, c = Le(r.evidence).filter(qt).filter((S) => S.type === "RmStudyReference").map((S) => String(S.id));
  if (c.length === 0)
    return { state: "not_established", reason: "D cites no required study.", bases: [he("study-reference", "No RmStudyReference in evidence.", ["/evidence"])], chain: [e.uri] };
  if (c.length > 1)
    return { state: "not_established", reason: "Several study references; this binding has no composition for them.", bases: [he("study-reference", "Ambiguous study references.", ["/evidence"])], chain: [e.uri] };
  const i = c[0], a = t(i);
  if (a === void 0) {
    const S = he("study-reference", `Required study ${i} is unavailable.`, ["/evidence", i]);
    return { state: "not_established", reason: S.reason, bases: [S], chain: [e.uri] };
  }
  if (a.usable !== "established" || a.document === void 0) {
    const S = {
      id: "study-reference",
      state: a.usable === "contradicted" ? "contradicted" : "not_established",
      reason: `Required study ${i} is not usable: ${a.reason}`,
      sources: ["/evidence", i]
    };
    return { state: S.state, reason: S.reason, bases: [S], chain: [e.uri] };
  }
  const s = a.document, o = Je(s), p = Je(r), h = qt(Le(p.materialPropertiesList)[0]) ? Le(Le(p.materialPropertiesList)[0].results)[0] : void 0, g = Le(p.materials)[0], u = [Ae("study-reference", `Cites study ${i}.`, ["/evidence", i])];
  u.push(o.id === p.id ? Ae("same-batch", `S concerns batch ${String(o.id)}.`, ["/credentialSubject/id"]) : Ne("same-batch", `S concerns ${String(o.id)}, not batch ${String(p.id)}.`, ["/credentialSubject/id"])), u.push(o.propertyIri === h?.propertyIri && o.matrixIri === g?.matrixIri ? Ae("same-property-and-matrix", "S concerns the certified property and matrix.", ["/credentialSubject/propertyIri"]) : Ne("same-property-and-matrix", "S concerns another property or matrix.", ["/credentialSubject/propertyIri"])), u.push(o.studyTypeIri === `${pn}Homogeneity` && o.outcomeIri === `${pn}Homogeneous` ? Ae("study-outcome", "S reports the batch homogeneous.", ["/credentialSubject/outcomeIri"]) : Ne("study-outcome", "S does not report a homogeneous batch.", ["/credentialSubject/outcomeIri"]));
  const f = Date.parse(String(o.activityTime)), w = Date.parse(String(p.activityTime));
  u.push(Number.isFinite(f) && Number.isFinite(w) ? f <= w ? Ae("study-precedes-certification", "The study precedes the certification activity.", ["/credentialSubject/activityTime"]) : Ne("study-precedes-certification", "The study postdates the certification activity.", ["/credentialSubject/activityTime"]) : he("study-precedes-certification", "An activity time is missing.", ["/credentialSubject/activityTime"]));
  const x = Kh(a, t, n, [e.uri, i]);
  u.push(...x.bases);
  const b = ve(u.map((S) => S.state));
  return {
    state: b,
    reason: b === "established" ? "Required study is applicable and independently authorized." : b === "contradicted" ? "Required study is contradicted." : "Required study is not established.",
    bases: u,
    chain: [e.uri, ...x.chain]
  };
}
const Tt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), jd = (e) => Array.isArray(e) ? e : [], Ec = (e) => jd(e).filter((t) => typeof t == "string"), de = (e) => String(e).split(/[#/]/).pop();
function Wh(e, t, n) {
  const r = [t], c = Tt(e.credentialSubject) ? e.credentialSubject : {}, i = jd(c.materials).filter(Tt);
  if (i.length !== 1) return { state: "not_established", reason: "The certificate must name exactly one material.", sources: ["/credentialSubject/materials"] };
  const a = i[0];
  if (!Tt(n)) return { state: "not_established", reason: `No result at ${t}.`, sources: r };
  const s = Tt(n.data) && Tt(n.data.quantity) ? n.data.quantity : void 0;
  if (s === void 0) return { state: "not_established", reason: "The result has no quantity.", sources: r };
  const o = Tt(s.unit) ? s.unit.ucumCode : void 0;
  if (typeof o != "string" || Fs[o] === void 0)
    return { state: "not_established", reason: `Unit ${String(o)} has no supported mapping (mg/kg, kg/kg).`, sources: [`${t}/data/quantity/unit`] };
  const p = Tt(s.uncertainty) ? s.uncertainty : void 0, h = Qr(p?.coverageFactor);
  if (h === void 0 || Re(h, { n: 2n, scale: 0 }) !== 0)
    return { state: "not_established", reason: `Coverage factor ${String(p?.coverageFactor)} is not the binding's k = 2.`, sources: [`${t}/data/quantity/uncertainty`] };
  const g = mn(s.value, o), u = mn(p?.expandedUncertainty, o);
  if (g === void 0 || u === void 0)
    return { state: "not_established", reason: "Value or expanded uncertainty is not a supported decimal.", sources: [`${t}/data/quantity`] };
  const f = {
    matrixIri: a.matrixIri,
    formIri: a.formIri,
    propertyIri: n.propertyIri,
    methodIri: n.methodIri,
    quantityKindIri: s.quantityKind
  }, w = Object.entries(f).filter(([, x]) => typeof x != "string").map(([x]) => x);
  return w.length > 0 ? { state: "not_established", reason: `Missing governed identifier: ${w.join(", ")}.`, sources: r } : {
    state: "established",
    reason: `Mapped ${de(f.propertyIri)} by ${de(f.methodIri)} in ${de(f.matrixIri)}: ${String(s.value)} ± ${String(p?.expandedUncertainty)} ${o} (k = 2).`,
    sources: r,
    coordinates: { ...f, value: g, uncertainty: u }
  };
}
function Xh(e, t, n, r) {
  if (t.includes(e)) return { state: "established", reason: `method ${de(e)}` };
  const c = n.find((a) => a.method === e && t.includes(a.revises));
  if (c === void 0) return { state: "contradicted", reason: `method ${de(e)} is not allowed` };
  const i = `${de(c.revises)} → ${de(e)}`;
  switch (r) {
    case "accept-successor":
      return { state: "established", reason: `method ${de(e)} as accepted successor (${i})` };
    case "require-extension":
      return { state: "contradicted", reason: `method ${de(e)} needs an explicit scope extension (${i})` };
    default:
      return { state: "not_established", reason: `no governed ${i} succession rule in the profile` };
  }
}
function Yh(e, t, n, r) {
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: ["/credentialSubject/scope"] };
  const c = t.map((s) => {
    const o = String(s.id), p = ws(s);
    if (typeof p == "string")
      return { id: o, state: /reversed/.test(p) ? "contradicted" : "not_established", reason: `${de(o)}: ${p}` };
    const h = [];
    s.matrixIri !== e.matrixIri && h.push(`matrix ${de(e.matrixIri)} ≠ ${de(s.matrixIri)}`), s.formIri !== e.formIri && h.push(`form ${de(e.formIri)} ≠ ${de(s.formIri)}`), s.quantityKindIri !== e.quantityKindIri && h.push(`quantity kind ${de(e.quantityKindIri)} ≠ ${de(s.quantityKindIri)}`), Ec(s.allowedPropertyIris).includes(e.propertyIri) || h.push(`property ${de(e.propertyIri)} is not allowed`), Re(e.value, p.low) < 0 && h.push("value is below the range"), Re(e.value, p.high) > 0 && h.push("value is above the range");
    const g = Xh(e.methodIri, Ec(s.allowedMethodIris), n, r);
    if (h.length > 0 || g.state === "contradicted")
      return { id: o, state: "contradicted", reason: `${de(o)}: ${[...h, ...g.state === "contradicted" ? [g.reason] : []].join("; ")}` };
    if (g.state === "not_established") return { id: o, state: "not_established", reason: `${de(o)}: ${g.reason}` };
    const u = un(Cr(p.low, "mg/kg")), f = un(Cr(p.high, "mg/kg"));
    return {
      id: o,
      state: "established",
      reason: `${de(o)} covers ${de(e.propertyIri)}, ${g.reason}, ${de(e.matrixIri)}/${de(e.formIri)}, ${un(Cr(e.value, "mg/kg"))} mg/kg within ${u}–${f} mg/kg`
    };
  }), i = yn(c.map((s) => s.state)), a = c.find((s) => s.state === "established");
  return {
    state: i,
    reason: a ? a.reason : `No single scope record covers the claim (${c.map((s) => s.reason).join(" | ")}).`,
    sources: ["/credentialSubject/scope"],
    ...a ? { record: a.id } : {}
  };
}
function Cr(e, t) {
  const n = Fs[t];
  return n >= 0 ? { n: e.n, scale: e.scale + n } : e.scale + n >= 0 ? { n: e.n, scale: e.scale + n } : { n: e.n * 10n ** BigInt(-(e.scale + n)), scale: 0 };
}
function em(e, t, n) {
  if (e.propertyIri !== t.propertyIri || e.quantityKindIri !== t.quantityKindIri)
    return { state: "not_established", reason: `Requirement ${t.id} does not apply to this claim's property and quantity kind.`, sources: [] };
  const r = mn(t.upperLimit.value, t.upperLimit.unit);
  if (r === void 0) return { state: "not_established", reason: `Requirement ${t.id} has an unsupported limit.`, sources: [] };
  const c = t.upperLimit.unit, i = (g) => un(Cr(g, c)), a = n.acceptWhen === "value-plus-expanded-uncertainty-at-most-limit", s = a ? Vh(e.value, e.uncertainty) : e.value, o = Re(s, r) <= 0, h = `${a ? `${i(e.value)} + ${i(e.uncertainty)} = ${i(s)}` : i(e.value)} ${o ? "≤" : ">"} ${i(r)} ${c}`;
  return {
    state: o ? "established" : "contradicted",
    reason: `${o ? "Conforms" : "Does not conform"} under ${n.id}: ${h}.`,
    sources: [],
    arithmetic: h
  };
}
const tm = /^\/credentialSubject\/materialPropertiesList\/(0|[1-9][0-9]*)\/results\/(0|[1-9][0-9]*)$/;
async function nm(e, t, n, r) {
  if (n.id !== na || r.binding.id !== n.id || r.binding.version !== n.version)
    throw new Error(`Profile ${r.id}@${r.version} is not configured for ${na}@${n.version}.`);
  const c = Vs(e, n, r);
  if (c !== void 0) return Object.freeze({ result: Us(e, c), artifacts: Object.freeze([]) });
  const i = await Gs(e, t, n, r), { target: a, artifacts: s, facts: o, verificationOf: p, artifactVerification: h } = i, g = ($) => o.get($), u = Jh(o.get(e.targetId), g, r), f = Qh(o.get(e.targetId), g, r), w = u.routes.find(($) => $.state === "established"), x = o.get(e.targetId)?.document, b = (Array.isArray(n.scopeAndMapping.methodRevisions) ? n.scopeAndMapping.methodRevisions : []).filter(($) => typeof $?.method == "string" && typeof $?.revises == "string"), S = ($) => {
    const E = o.get($)?.document?.credentialSubject;
    return Array.isArray(E?.scope) ? E.scope : [];
  }, v = e.selectedClaims.map(($) => {
    if (!(x !== void 0 && tm.test($.sourcePointer) && Xt(x, $.sourcePointer) !== void 0)) {
      const M = x === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${$.sourcePointer} is not a result in the usable target.`;
      return {
        claim: $,
        mapping: void 0,
        coverage: /* @__PURE__ */ new Map(),
        result: { claimId: $.id, routeWitnessIds: [], ...oe("not_established", [M]) }
      };
    }
    const z = Wh(x, $.sourcePointer, Xt(x, $.sourcePointer)), P = /* @__PURE__ */ new Map();
    if (z.coordinates === void 0)
      return { claim: $, mapping: z, coverage: P, result: {
        claimId: $.id,
        routeWitnessIds: [],
        ...oe(z.state, [`Gate 4: ${z.reason}`], [$.sourcePointer])
      } };
    const Z = z.coordinates, L = Wr(u, (M) => {
      const V = Yh(Z, S(M.scope), b, r.mapping.methodSuccession), N = [M.scope, ...V.sources];
      return P.set(M.id, { ...V, sources: N }), { id: "claim-coverage", state: V.state, reason: V.reason, sources: N };
    }), F = L.routes.find((M) => M.state === "established"), k = F ? P.get(F.id)?.record : void 0;
    return { claim: $, mapping: z, coverage: P, result: {
      claimId: $.id,
      routeWitnessIds: L.state === "established" && F ? [`route:${F.id}`, ...F.chain, `record:${k}`] : [],
      ...oe(L.state, [
        L.reason,
        ...F ? [P.get(F.id).reason] : [...P].map(([M, V]) => `${M}: ${V.reason}`)
      ], [$.sourcePointer])
    } };
  }), y = v.map(($) => $.result), d = [{
    obligationId: "rm-v1:required-study",
    witnessIds: f.state === "established" ? [...f.chain] : [],
    ...oe(f.state, [f.reason], ["/evidence"])
  }], l = (() => {
    if (!e.conformity) return { requested: !1, execution: "not_run" };
    const $ = { requested: !0, ...e.conformity }, E = r.conformity.requirements.find((F) => F.id === e.conformity.requirementId), z = r.conformity.decisionRules.find((F) => F.id === e.conformity.decisionRuleId);
    if (!E || !z)
      return { ...$, ...oe("not_established", [`Requirement ${e.conformity.requirementId} or decision rule ${e.conformity.decisionRuleId} is not configured in the verifier profile.`]) };
    const P = v.filter((F) => F.mapping?.coordinates?.propertyIri === E.propertyIri && F.mapping.coordinates.quantityKindIri === E.quantityKindIri);
    if (P.length !== 1)
      return { ...$, ...oe("not_established", [`Requirement ${E.id} must apply to exactly one selected claim; ${P.length} match.`]) };
    const Z = P[0];
    if (Z.result.state !== "established")
      return { ...$, ...Yt(`Not evaluated: claim ${Z.claim.id} is not authorized.`) };
    const L = em(Z.mapping.coordinates, E, z);
    return { ...$, ...oe(L.state, [L.reason], [Z.claim.sourcePointer]) };
  })(), m = /* @__PURE__ */ new Set([
    e.targetId,
    ...w?.chain ?? [],
    ...f.state === "established" ? f.chain : []
  ]), I = [
    ...s.filter(($) => m.has($.artifactId)).flatMap(p).map(($) => $.state),
    ...y.map(($) => $.state),
    ...d.map(($) => $.state),
    ...l.requested ? [l.state] : []
  ], q = $s(I), _ = [...i.trace], C = [...i.resources], R = Kr(a.artifactId, a.digestSRI, "target", e);
  for (const { claim: $, mapping: E, coverage: z } of v) {
    E && _.push({
      gate: 4,
      nodeUse: R,
      predicate: `claim-mapping:${$.id}`,
      state: E.state,
      execution: "executed",
      reason: E.reason,
      sources: [...E.sources]
    });
    for (const [P, Z] of z)
      _.push({
        gate: 5,
        nodeUse: R,
        predicate: `claim-coverage:${$.id}:${P}`,
        state: Z.state,
        execution: "executed",
        reason: Z.reason,
        sources: [...Z.sources]
      });
  }
  for (const $ of y)
    _.push({
      gate: 5,
      nodeUse: R,
      predicate: `claim-authorization:${$.claimId}`,
      state: $.state,
      execution: $.execution,
      reason: $.reasons.join(" "),
      sources: [...$.sourcePointers]
    });
  for (const $ of u.restrictions)
    _.push({
      gate: 5,
      nodeUse: R,
      predicate: $.id,
      state: $.state,
      execution: "executed",
      reason: $.reason,
      sources: [...$.sources]
    });
  _.push({
    gate: 5,
    nodeUse: R,
    predicate: "authority",
    state: u.state,
    execution: "executed",
    reason: u.reason,
    sources: w ? [...w.chain] : []
  });
  for (const $ of u.routes) {
    _.push($.execution === "not_run" ? {
      gate: 5,
      nodeUse: R,
      predicate: `route:${$.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: R,
      predicate: `route:${$.id}`,
      state: $.state,
      execution: "executed",
      reason: `Route ${$.id} is ${$.state}.`,
      sources: [...$.chain]
    });
    for (const E of $.bases)
      _.push({
        gate: 5,
        nodeUse: R,
        predicate: `route:${$.id}:${E.id}`,
        state: E.state,
        execution: "executed",
        reason: E.reason,
        sources: [...E.sources]
      });
  }
  for (const $ of f.bases)
    _.push({
      gate: 6,
      nodeUse: R,
      predicate: `support:${$.id}`,
      state: $.state,
      execution: "executed",
      reason: $.reason,
      sources: [...$.sources]
    });
  for (const $ of d)
    _.push({
      gate: 6,
      nodeUse: R,
      predicate: $.obligationId,
      state: $.state,
      execution: $.execution,
      reason: $.reasons.join(" "),
      sources: []
    });
  l.requested && _.push({
    gate: 6,
    nodeUse: R,
    predicate: `conformity:${l.requirementId}`,
    state: l.state,
    execution: l.execution,
    reason: l.reasons.join(" "),
    sources: []
  });
  const O = Vr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: h,
    authorization: y,
    support: d,
    conformity: l,
    decision: q,
    trace: _,
    resources: C,
    limitations: [
      "Verification failures of credentials outside the selected route and support chains are reported but do not decide the request."
    ]
  });
  return Object.freeze({ result: O, artifacts: Object.freeze(s) });
}
const Ss = "https://vc4qi.example/bindings/cal/1", rm = "https://vc4qi.example/contexts/cal/1", Is = "https://vc4qi.example/bindings/cal/1#", Ut = "https://vc4qi.example/schemas/cal/1/", im = Object.freeze({
  name: "calibration v1",
  schemas: Object.freeze({
    CalAccreditation: `${Ut}accreditation.json`,
    CalOperationalScope: `${Ut}operational-scope.json`,
    CalLegalMandate: `${Ut}legal-mandate.json`,
    CalCertificate: `${Ut}certificate.json`,
    CalTestReport: `${Ut}test-report.json`,
    BitstringStatusListCredential: `${Ut}status-list.json`
  }),
  contexts: (e) => e === "BitstringStatusListCredential" ? [Kt] : [Kt, rm]
}), je = (e) => e !== null && typeof e == "object" && !Array.isArray(e), ze = (e) => Array.isArray(e) ? e : [], se = (e) => String(e).split(/[#/]/).pop(), sm = Object.freeze({ Pa: 0, kPa: 3, MPa: 6 });
function He(e, t) {
  const n = Qr(e), r = typeof t == "string" ? sm[t] : void 0;
  if (!(n === void 0 || r === void 0))
    return n.scale >= r ? { n: n.n, scale: n.scale - r } : { n: n.n * 10n ** BigInt(r - n.scale), scale: 0 };
}
const qe = (e) => un({ n: e.n, scale: e.scale + 3 });
function $d(e, t) {
  const n = [t];
  if (!je(e) || typeof e.id != "string" || typeof e.quantityKindIri != "string")
    return { state: "not_established", reason: "The selected measurement group has no identifier or quantity kind.", sources: n };
  const r = [];
  for (const [i, a] of ze(e.results).entries()) {
    const s = je(a) ? a : {}, o = Qr(s.coverageFactor);
    if (o === void 0 || Re(o, { n: 2n, scale: 0 }) !== 0)
      return { state: "not_established", reason: `Result ${i}: coverage factor ${String(s.coverageFactor)} is not the binding's k = 2.`, sources: n };
    const p = He(s.value, s.unit), h = He(s.expandedUncertainty, s.unit);
    if (p === void 0 || h === void 0)
      return { state: "not_established", reason: `Result ${i}: unit ${String(s.unit)} or a number has no supported mapping (Pa, kPa, MPa).`, sources: n };
    r.push({ value: p, uncertainty: h });
  }
  if (r.length === 0) return { state: "not_established", reason: "The measurement group has no results.", sources: n };
  const c = ze(e.methodIris).filter((i) => typeof i == "string");
  return {
    state: "established",
    reason: `Mapped ${se(e.id)}: ${se(e.quantityKindIri)}, ${r.length} result(s) in Pa, methods [${c.map(se).join(", ")}].`,
    sources: n,
    group: { id: e.id, quantityKindIri: e.quantityKindIri, methodIris: c, results: r }
  };
}
function _d(e, t, n) {
  const r = ["/credentialSubject/scope"];
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: r };
  const c = t.map((s) => {
    const o = String(s.id), p = je(s.range) ? s.range : {}, h = He(p.from, p.unit), g = He(p.to, p.unit);
    if (h === void 0 || g === void 0) return { id: o, state: "not_established", reason: `${se(o)}: unsupported or malformed range.` };
    if (Re(h, g) > 0) return { id: o, state: "contradicted", reason: `${se(o)}: range is reversed.` };
    const u = je(s.cmcFloor) ? s.cmcFloor : void 0, f = u === void 0 ? void 0 : He(u.value, u.unit);
    if (u !== void 0 && f === void 0) return { id: o, state: "not_established", reason: `${se(o)}: unsupported CMC floor.` };
    const w = [];
    s.quantityKindIri !== e.quantityKindIri && w.push(`quantity kind ${se(e.quantityKindIri)} ≠ ${se(s.quantityKindIri)}`);
    const x = ze(s.allowedMethodIris).filter((S) => typeof S == "string"), b = e.methodIris.filter((S) => !x.includes(S));
    return b.length > 0 && w.push(`method ${b.map(se).join(", ")} is not allowed`), e.results.forEach((S, v) => {
      (Re(S.value, h) < 0 || Re(S.value, g) > 0) && w.push(`result ${v} ${qe(S.value)} kPa is outside ${qe(h)}–${qe(g)} kPa`), n && f !== void 0 && Re(S.uncertainty, f) < 0 && w.push(`result ${v} U = ${qe(S.uncertainty)} kPa is below the admitted CMC ${qe(f)} kPa`);
    }), w.length > 0 ? { id: o, state: "contradicted", reason: `${se(o)}: ${w.join("; ")}` } : e.methodIris.length === 0 && x.length > 0 ? {
      id: o,
      state: "not_established",
      reason: `${se(o)} restricts methods to [${x.map(se).join(", ")}], but the group names no governed method.`
    } : {
      id: o,
      state: "established",
      reason: `${se(o)} covers ${se(e.id)}: ${se(e.quantityKindIri)}, methods [${e.methodIris.map(se).join(", ")}], ${e.results.length} result(s) within ${qe(h)}–${qe(g)} kPa${n && f !== void 0 ? ` and not below the CMC ${qe(f)} kPa` : ""}`
    };
  }), i = yn(c.map((s) => s.state)), a = c.find((s) => s.state === "established");
  return a ? { state: i, reason: a.reason, sources: r, record: a.id } : { state: i, reason: `No single scope record covers the group (${c.map((s) => s.reason).join(" | ")}).`, sources: r };
}
function am(e, t, n) {
  const r = ["/credentialSubject/scope"];
  if (e.length === 0) return { state: "not_established", reason: "The operational scope has no records.", sources: r };
  const c = e.map((a) => {
    const s = je(a.range) ? a.range : {}, o = He(s.from, s.unit), p = He(s.to, s.unit), h = je(a.cmcFloor) ? a.cmcFloor : void 0, g = h === void 0 ? void 0 : He(h.value, h.unit);
    if (o === void 0 || p === void 0 || h !== void 0 && g === void 0)
      return { state: "not_established", reason: `${se(a.id)}: unsupported or malformed range or CMC floor.` };
    const u = ze(a.allowedMethodIris), f = t.map((x) => {
      const b = je(x.range) ? x.range : {}, S = He(b.from, b.unit), v = He(b.to, b.unit), y = je(x.cmcFloor) ? x.cmcFloor : void 0, d = y === void 0 ? void 0 : He(y.value, y.unit);
      if (S === void 0 || v === void 0 || y !== void 0 && d === void 0)
        return { state: "not_established", reason: `${se(x.id)}: unsupported or malformed range or CMC floor.` };
      const l = [];
      a.quantityKindIri !== x.quantityKindIri && l.push(`quantity kind ${se(a.quantityKindIri)} ≠ ${se(x.quantityKindIri)}`);
      const m = ze(x.allowedMethodIris), I = u.filter((q) => !m.includes(q));
      return u.length === 0 && m.length > 0 && l.push("the parent restricts methods, the child does not"), I.length > 0 && l.push(`method ${I.map(se).join(", ")} is not in ${se(x.id)}`), (Re(o, S) < 0 || Re(p, v) > 0) && l.push(`range ${qe(o)}–${qe(p)} kPa is not within ${qe(S)}–${qe(v)} kPa`), n && d !== void 0 && (g === void 0 ? l.push(`it states no CMC floor, but ${se(x.id)} admits only ${qe(d)} kPa`) : Re(g, d) < 0 && l.push(`CMC ${qe(g)} kPa is below the admitted ${qe(d)} kPa`)), l.length > 0 ? { state: "contradicted", reason: `${se(a.id)} widens ${se(x.id)}: ${l.join("; ")}` } : { state: "established", reason: `${se(a.id)} lies within ${se(x.id)}` };
    });
    if (f.length === 0) return { state: "not_established", reason: "The parent grant has no records." };
    const w = yn(f.map((x) => x.state));
    return w === "established" ? f.find((x) => x.state === "established") : { state: w, reason: f.map((x) => x.reason).join(" | ") };
  }), i = Zs(c.map((a) => a.state));
  return { state: i, reason: `${i === "established" ? "Bounded projection holds" : "Bounded projection fails"}: ${c.map((a) => a.reason).join("; ")}.`, sources: r };
}
const Et = (e) => je(e.credentialSubject) ? e.credentialSubject : {}, Bs = (e, t, n, r, c) => rt(t, `${Is}${n}`) ? { id: e, state: "established", reason: `${c} permits ${r}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: e, state: "contradicted", reason: `${c} does not permit ${r}.`, sources: ["/credentialSubject/permittedActivity"] }, om = Object.freeze({
  CalCertificate: { activity: "issueCalibrationCertificate", what: "issuing calibration certificates", purpose: "accredit-calibration-laboratories" },
  CalTestReport: { activity: "issueTestReport", what: "issuing test reports", purpose: "accredit-testing-laboratories" }
}), Dr = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0;
function cm(e, t, n) {
  const r = e.document, c = [], i = [e.uri], a = om[Dr(r) ?? ""];
  if (a === void 0)
    return ue("direct-accreditation", [{
      id: "target-type",
      state: "not_established",
      reason: `No accreditation activity is installed for ${String(Dr(r))}.`,
      sources: ["/type"]
    }], i);
  const s = Ke("authorizing-reference", r, "CalAccreditation", t, [e.uri], "CalAuthorizationPolicy");
  if (c.push(s.basis), !s.node) return ue("direct-accreditation", c, i);
  const o = s.node.document;
  return i.push(s.node.uri), c.push(at("principal-binding", o, r.issuer, "Accreditation CA")), c.push(Bs("activity-permission", o, a.activity, a.what, "CA")), c.push(Rt("trust-anchor", o, a.purpose, n)), c.push(jt(r, [["CA", o]])), ue("direct-accreditation", c, i, s.node.uri);
}
function dm(e, t, n) {
  const r = e.document, c = [], i = [e.uri], a = Ke("authorizing-reference", r, "CalOperationalScope", t, [e.uri], "CalAuthorizationPolicy");
  if (c.push(a.basis), !a.node) return ue("operational-scope", c, i);
  const s = a.node.document;
  i.push(a.node.uri), c.push(at("principal-binding", s, r.issuer, "Operational scope O")), c.push(s.issuer === Et(s).id ? { id: "self-maintained-scope", state: "established", reason: "O is issued by its own grantee.", sources: ["/issuer"] } : { id: "self-maintained-scope", state: "contradicted", reason: "O is not issued by its own grantee.", sources: ["/issuer"] }), c.push(Bs("activity-permission", s, "issueCalibrationCertificate", "issuing calibration certificates", "O"));
  const o = Ke("maintenance-grant", s, "CalAccreditation", t, [e.uri, a.node.uri], "CalAuthorizationPolicy");
  if (c.push(o.basis), !o.node) return ue("operational-scope", c, i);
  const p = o.node.document;
  i.push(o.node.uri), c.push(at("accreditation-grantee", p, s.issuer, "Accreditation CA")), c.push(rt(p, `${Is}maintainCalibrationScope`) && rt(p, `${Is}issueCalibrationCertificate`) ? { id: "projection-permission", state: "established", reason: "CA permits maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] } : { id: "projection-permission", state: "contradicted", reason: "CA does not permit maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] });
  const h = am(
    ze(Et(s).scope).filter(je),
    ze(Et(p).scope).filter(je),
    n.bindingRules.applyCmcFloor === !0
  );
  return c.push({ id: "bounded-projection", state: h.state, reason: h.reason, sources: h.sources }), c.push(Rt("trust-anchor", p, "accredit-calibration-laboratories", n)), c.push(jt(r, [["O", s], ["CA", p]])), ue("operational-scope", c, i, a.node.uri);
}
function lm(e, t, n) {
  const r = e.document, c = [], i = [e.uri], a = Ke("authorizing-reference", r, "CalLegalMandate", t, [e.uri], "CalAuthorizationPolicy");
  if (c.push(a.basis), !a.node) return ue("statutory-mandate", c, i);
  const s = a.node.document;
  return i.push(a.node.uri), c.push(at("principal-binding", s, r.issuer, "Mandate M")), c.push(Bs("activity-permission", s, "issueCalibrationCertificate", "issuing calibration certificates", "M")), c.push(Rt("trust-anchor", s, "designate-national-metrology-institutes", n)), c.push(jt(r, [["M", s]])), ue("statutory-mandate", c, i, a.node.uri);
}
const Pd = Object.freeze({
  "direct-accreditation": cm,
  "operational-scope": dm,
  "statutory-mandate": lm
}), Zs = (e) => e.length === 0 ? "not_established" : ve(e);
function um(e, t, n, r) {
  const c = n.authority.certificateRoutes, i = c.slice(0, n.authority.maxRoutes).map((g) => {
    const u = Pd[g];
    return u === void 0 ? ue(g, [{ id: "installed-evaluator", state: "not_established", reason: `Route ${g} has no installed evaluator.`, sources: [] }], [e.uri]) : u(e, t, n);
  }), a = xn([], i, c.slice(n.authority.maxRoutes)), s = ze(Et(e.document).measurementGroups);
  if (s.length === 0)
    return { state: "not_established", reason: "The certificate has no measurement groups.", chain: [e.uri], bases: [] };
  const o = [];
  let p = [e.uri];
  s.forEach((g, u) => {
    const f = `/credentialSubject/measurementGroups/${u}`, w = $d(g, f);
    if (w.group === void 0) {
      o.push({ id: `group-${u}`, state: w.state, reason: `Group ${u}: ${w.reason}`, sources: [f] });
      return;
    }
    const x = w.group, b = Wr(a, (y) => {
      const d = ze(Et(t(y.scope)?.document ?? {}).scope).filter(je), l = _d(x, d, r);
      return { id: "claim-coverage", state: l.state, reason: l.reason, sources: [y.scope, ...l.sources] };
    }), S = b.routes.find((y) => y.state === "established");
    S && (p = S.chain);
    const v = S ? `through ${S.id}` : b.routes.map((y) => `${y.id} ${y.state}: ${y.bases.filter((d) => d.state !== "established").map((d) => d.reason).join(" ")}`).join(" | ");
    o.push({ id: `group-${u}`, state: b.state, reason: `Group ${u} (${se(x.id)}) is ${b.state} ${v}`.trim(), sources: [f] });
  });
  const h = Zs(o.map((g) => g.state));
  return { state: h, reason: `The certificate's own authority is ${h}.`, chain: p, bases: o };
}
function pm(e, t, n, r) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const c = e.document, i = (m) => ({ state: m.state, reason: m.reason, bases: [m], chain: [e.uri] }), a = ze(c.evidence).filter(je).filter((m) => m.type === "CalCalibrationReference").map((m) => String(m.id));
  if (a.length === 0) return i({ id: "calibration-reference", state: "not_established", reason: "The report cites no calibration.", sources: ["/evidence"] });
  if (a.length > 1)
    return i({ id: "calibration-reference", state: "not_established", reason: "Several calibration references; this binding has no composition for them.", sources: ["/evidence"] });
  const s = a[0], o = t(s);
  if (o === void 0) return i({ id: "calibration-reference", state: "not_established", reason: `Calibration ${s} is unavailable.`, sources: ["/evidence", s] });
  if (o.usable !== "established" || o.document === void 0)
    return i({
      id: "calibration-reference",
      state: o.usable === "contradicted" ? "contradicted" : "not_established",
      reason: `Calibration ${s} is not usable: ${o.reason}`,
      sources: ["/evidence", s]
    });
  const p = o.document;
  if (Dr(p) !== "CalCertificate")
    return i({ id: "calibration-reference", state: "contradicted", reason: `${s} is a ${String(Dr(p))}, not a calibration certificate.`, sources: ["/evidence", s] });
  const h = Et(c), g = Et(p), u = [{ id: "calibration-reference", state: "established", reason: `Cites calibration ${s}.`, sources: ["/evidence", s] }];
  u.push(typeof h.instrumentIri != "string" ? { id: "same-instrument", state: "not_established", reason: "The report names no instrument.", sources: ["/credentialSubject/instrumentIri"] } : g.id === h.instrumentIri ? { id: "same-instrument", state: "established", reason: `The calibration concerns instrument ${String(h.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] } : { id: "same-instrument", state: "contradicted", reason: `The calibration concerns ${String(g.id)}, not instrument ${String(h.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] });
  const f = ze(h.measurementGroups).filter(je).map((m) => m.quantityKindIri), w = ze(g.measurementGroups).filter(je).map((m) => m.quantityKindIri), x = f.filter((m) => !w.includes(m));
  u.push(f.length > 0 && x.length === 0 ? { id: "same-quantity", state: "established", reason: `The calibration covers ${[...new Set(f.map(se))].join(", ")}.`, sources: ["/credentialSubject/measurementGroups"] } : {
    id: "same-quantity",
    state: f.length === 0 ? "not_established" : "contradicted",
    reason: f.length === 0 ? "The report has no measurement groups." : `The calibration does not cover ${x.map(se).join(", ")}.`,
    sources: ["/credentialSubject/measurementGroups"]
  });
  const b = Date.parse(String(h.activityTime)), S = Date.parse(String(g.activityTime)), v = Date.parse(String(p.validFrom)), y = Date.parse(String(p.validUntil));
  !Number.isFinite(b) || !Number.isFinite(S) ? u.push({ id: "calibration-precedes-use", state: "not_established", reason: "An activity time is missing.", sources: ["/credentialSubject/activityTime"] }) : (u.push(S <= b ? { id: "calibration-precedes-use", state: "established", reason: `Calibrated at ${String(g.activityTime)}, before the test at ${String(h.activityTime)}.`, sources: ["/credentialSubject/activityTime"] } : { id: "calibration-precedes-use", state: "contradicted", reason: `Calibrated at ${String(g.activityTime)}, after the test at ${String(h.activityTime)}.`, sources: ["/credentialSubject/activityTime"] }), u.push(Number.isFinite(v) && Number.isFinite(y) && v <= b && b <= y ? { id: "calibration-valid-at-use", state: "established", reason: "The calibration certificate was valid at the test.", sources: ["/validFrom", "/validUntil"] } : { id: "calibration-valid-at-use", state: "contradicted", reason: `The calibration certificate (valid ${String(p.validFrom)} to ${String(p.validUntil)}) was not valid at the test at ${String(h.activityTime)}.`, sources: ["/validFrom", "/validUntil"] }));
  const d = um(o, t, n, r);
  u.push({ id: "calibration-authority", state: d.state, reason: d.reason, sources: [s] }, ...d.bases.map((m) => ({ ...m, id: `calibration-authority:${m.id}` })));
  const l = Zs(u.map((m) => m.state));
  return {
    state: l,
    reason: l === "established" ? "The instrument calibration is applicable and independently authorized." : l === "contradicted" ? "The instrument calibration is contradicted." : "The instrument calibration is not established.",
    bases: u,
    chain: [e.uri, ...d.chain]
  };
}
const fm = /^\/credentialSubject\/measurementGroups\/(0|[1-9][0-9]*)$/;
function hm(e) {
  const t = e.bindingRules.applyCmcFloor;
  if (typeof t != "boolean")
    throw new Error(`Profile ${e.id}@${e.version} must state bindingRules.applyCmcFloor for ${Ss}.`);
  return t;
}
async function mm(e, t, n, r) {
  if (n.id !== Ss || r.binding.id !== n.id || r.binding.version !== n.version)
    throw new Error(`Profile ${r.id}@${r.version} is not configured for ${Ss}@${n.version}.`);
  const c = hm(r), i = Vs(e, n, r);
  if (i !== void 0) return Object.freeze({ result: Us(e, i), artifacts: Object.freeze([]) });
  const a = await Gs(e, t, n, r, im), { target: s, artifacts: o, facts: p, verificationOf: h, artifactVerification: g } = a, u = (z) => p.get(z), f = p.get(e.targetId), w = r.authority.certificateRoutes, x = f.document === void 0 ? [] : w.slice(0, r.authority.maxRoutes).map((z) => {
    const P = Pd[z];
    return P === void 0 ? {
      id: z,
      state: "not_established",
      execution: "executed",
      chain: [f.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${z} has no installed evaluator.`, sources: [] }]
    } : P(f, u, r);
  }), b = f.document === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : xn([], x, w.slice(r.authority.maxRoutes)), S = b.routes.find((z) => z.state === "established"), v = (z) => {
    const P = p.get(z)?.document?.credentialSubject;
    return Array.isArray(P?.scope) ? P.scope : [];
  }, y = f.document, d = e.selectedClaims.map((z) => {
    const P = /* @__PURE__ */ new Map();
    if (y === void 0 || !fm.test(z.sourcePointer) || Xt(y, z.sourcePointer) === void 0) {
      const M = y === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${z.sourcePointer} is not a measurement group in the usable target.`;
      return { claim: z, mapping: void 0, coverage: P, result: { claimId: z.id, routeWitnessIds: [], ...oe("not_established", [M]) } };
    }
    const Z = $d(Xt(y, z.sourcePointer), z.sourcePointer);
    if (Z.group === void 0)
      return { claim: z, mapping: Z, coverage: P, result: {
        claimId: z.id,
        routeWitnessIds: [],
        ...oe(Z.state, [`Gate 4: ${Z.reason}`], [z.sourcePointer])
      } };
    const L = Z.group, F = Wr(b, (M) => {
      const V = _d(L, v(M.scope), c), N = [M.scope, ...V.sources];
      return P.set(M.id, { ...V, sources: N }), { id: "claim-coverage", state: V.state, reason: V.reason, sources: N };
    }), k = F.routes.find((M) => M.state === "established");
    return { claim: z, mapping: Z, coverage: P, result: {
      claimId: z.id,
      routeWitnessIds: F.state === "established" && k ? [`route:${k.id}`, ...k.chain, `record:${P.get(k.id)?.record}`] : [],
      ...oe(F.state, [
        F.reason,
        ...k ? [P.get(k.id).reason] : [...P].map(([M, V]) => `${M}: ${V.reason}`)
      ], [z.sourcePointer])
    } };
  }), l = d.map((z) => z.result), I = Array.isArray(y?.type) && y.type[1] === "CalTestReport" ? pm(f, u, r, c) : void 0, q = I === void 0 ? [] : [{
    obligationId: "cal-v1:instrument-calibration",
    witnessIds: I.state === "established" ? [...I.chain] : [],
    ...oe(I.state, [I.reason], ["/evidence"])
  }], _ = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...oe("not_established", ["The calibration v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, C = /* @__PURE__ */ new Set([
    e.targetId,
    ...S?.chain ?? [],
    ...I?.state === "established" ? I.chain : []
  ]), R = [
    ...o.filter((z) => C.has(z.artifactId)).flatMap(h).map((z) => z.state),
    ...l.map((z) => z.state),
    ...q.map((z) => z.state),
    ..._.requested ? [_.state] : []
  ], O = [...a.trace], $ = Kr(s.artifactId, s.digestSRI, "target", e);
  for (const { claim: z, mapping: P, coverage: Z } of d) {
    P && O.push({
      gate: 4,
      nodeUse: $,
      predicate: `claim-mapping:${z.id}`,
      state: P.state,
      execution: "executed",
      reason: P.reason,
      sources: [...P.sources]
    });
    for (const [L, F] of Z)
      O.push({
        gate: 5,
        nodeUse: $,
        predicate: `claim-coverage:${z.id}:${L}`,
        state: F.state,
        execution: "executed",
        reason: F.reason,
        sources: [...F.sources]
      });
  }
  for (const z of l)
    O.push({
      gate: 5,
      nodeUse: $,
      predicate: `claim-authorization:${z.claimId}`,
      state: z.state,
      execution: z.execution,
      reason: z.reasons.join(" "),
      sources: [...z.sourcePointers]
    });
  O.push({
    gate: 5,
    nodeUse: $,
    predicate: "authority",
    state: b.state,
    execution: "executed",
    reason: b.reason,
    sources: S ? [...S.chain] : []
  });
  for (const z of b.routes) {
    O.push(z.execution === "not_run" ? {
      gate: 5,
      nodeUse: $,
      predicate: `route:${z.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: $,
      predicate: `route:${z.id}`,
      state: z.state,
      execution: "executed",
      reason: `Route ${z.id} is ${z.state}.`,
      sources: [...z.chain]
    });
    for (const P of z.bases)
      O.push({
        gate: 5,
        nodeUse: $,
        predicate: `route:${z.id}:${P.id}`,
        state: P.state,
        execution: "executed",
        reason: P.reason,
        sources: [...P.sources]
      });
  }
  for (const z of I?.bases ?? [])
    O.push({
      gate: 6,
      nodeUse: $,
      predicate: `support:${z.id}`,
      state: z.state,
      execution: "executed",
      reason: z.reason,
      sources: [...z.sources]
    });
  for (const z of q)
    O.push({
      gate: 6,
      nodeUse: $,
      predicate: z.obligationId,
      state: z.state,
      execution: z.execution,
      reason: z.reasons.join(" "),
      sources: []
    });
  _.requested && O.push({
    gate: 6,
    nodeUse: $,
    predicate: `conformity:${_.requirementId}`,
    state: _.state,
    execution: _.execution,
    reason: _.reasons.join(" "),
    sources: []
  });
  const E = Vr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: g,
    authorization: l,
    support: q,
    conformity: _,
    decision: $s(R),
    trace: O,
    resources: a.resources,
    limitations: [
      "Each selected measurement group is a separate required claim; the decision is their conjunction.",
      "Verification failures of credentials outside the selected route and support chains are reported but do not decide the request.",
      "The calibration v1 binding carries a JSON-LD simplification of DCC results, not native DCC XML.",
      "Fixture grants are fictional: an accreditation or statutory mandate here has no legal effect."
    ]
  });
  return Object.freeze({ result: E, artifacts: Object.freeze([...o]) });
}
const kc = "https://vc4qi.example/bindings/gs/1", ym = "https://vc4qi.example/contexts/gs/1", Xr = "https://vc4qi.example/bindings/gs/1#", xt = "https://vc4qi.example/schemas/gs/1/", gm = Object.freeze({
  name: "GS certification v1",
  schemas: Object.freeze({
    GsAccreditation: `${xt}accreditation.json`,
    GsSchemeAuthorization: `${xt}scheme-authorization.json`,
    GsCertificate: `${xt}certificate.json`,
    GsMarkCredential: `${xt}mark-credential.json`,
    ProductPassport: `${xt}product-passport.json`,
    GsTestReport: `${xt}test-report.json`,
    GsInspectionReport: `${xt}inspection-report.json`,
    BitstringStatusListCredential: `${xt}status-list.json`
  }),
  contexts: (e) => e === "BitstringStatusListCredential" ? [Kt] : [Kt, ym]
}), it = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Oe = (e) => Array.isArray(e) ? e : [], X = (e) => String(e).split(/[#/]/).pop(), st = (e) => it(e.credentialSubject) ? e.credentialSubject : {};
function Td(e, t) {
  const n = [t];
  if (!it(e) || typeof e.productCategoryIri != "string")
    return { state: "not_established", reason: "The selected certification names no product category.", sources: n };
  const r = Oe(e.standardIris).filter((c) => typeof c == "string");
  return {
    state: "established",
    reason: `Mapped certification of ${X(e.productCategoryIri)} against [${r.map(X).join(", ")}].`,
    sources: n,
    certification: { productCategoryIri: e.productCategoryIri, standardIris: r }
  };
}
function Cd(e, t, n) {
  const r = ["/credentialSubject/scope"], { productCategoryIri: c, standardIris: i } = e, a = t.map((u) => {
    const f = String(u.id), w = Oe(u.standardIris);
    if (u.productCategoryIri !== c)
      return { id: f, state: "contradicted", reason: `${X(f)}: category ${X(c)} ≠ ${X(u.productCategoryIri)}` };
    const x = i.filter((b) => !w.includes(b));
    return x.length > 0 ? { id: f, state: "contradicted", reason: `${X(f)}: standard ${x.map(X).join(", ")} is not in the accredited scope` } : i.length === 0 && w.length > 0 ? { id: f, state: "not_established", reason: `${X(f)} restricts standards, but the certification names none` } : { id: f, state: "established", reason: `${X(f)} covers ${X(c)} against [${i.map(X).join(", ")}]` };
  }), s = n.map((u) => {
    const f = String(u.id);
    return u.productCategoryIri === c ? { id: f, state: "established", reason: `${X(f)} permits the GS mark for ${X(c)}` } : { id: f, state: "contradicted", reason: `${X(f)}: category ${X(c)} ≠ ${X(u.productCategoryIri)}` };
  }), o = (u, f) => {
    if (f.length === 0) return { state: "not_established", reason: `The ${u} scope has no records.`, record: void 0 };
    const w = f.find((x) => x.state === "established");
    return w ? { state: "established", reason: w.reason, record: w.id } : { state: yn(f.map((x) => x.state)), reason: `No single ${u} record covers it (${f.map((x) => x.reason).join(" | ")})`, record: void 0 };
  }, p = o("competence", a), h = o("scheme", s), g = ve([p.state, h.state]);
  return {
    state: g,
    reason: `Competence: ${p.reason}. Scheme: ${h.reason}.`,
    sources: r,
    ...g === "established" ? { records: [p.record, h.record] } : {}
  };
}
function Ed(e, t, n) {
  const r = e.document, c = [], i = [e.uri], a = (p, h, g, u, f, w) => {
    const x = Ke(`${p}-reference`, r, h, t, [e.uri], "GsAuthorizationPolicy");
    if (c.push(x.basis), !x.node) return;
    const b = x.node.document;
    return c.push(at(`${p}-grantee`, b, r.issuer, w)), c.push(rt(b, `${Xr}${g}`) ? { id: `${p}-permission`, state: "established", reason: `${w} permits ${u}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: `${p}-permission`, state: "contradicted", reason: `${w} does not permit ${u}.`, sources: ["/credentialSubject/permittedActivity"] }), c.push(Rt(`${p}-anchor`, b, f, n)), x.node;
  }, s = a("competence", "GsAccreditation", "certifyProducts", "certifying products", "accredit-certification-bodies", "Accreditation GS-A"), o = a("scheme", "GsSchemeAuthorization", "awardGsMark", "awarding the GS mark", "authorize-gs-certification", "Scheme authorization GS-S");
  return !s || !o ? ue("competence-and-scheme-permission", c, i) : (i.push(s.uri, o.uri), c.push(jt(r, [["GS-A", s.document], ["GS-S", o.document]])), ue("competence-and-scheme-permission", c, i, s.uri));
}
function kd(e, t) {
  const n = (r) => r === void 0 ? [] : Oe(st(t(r)?.document ?? {}).scope).filter(it);
  return { competence: n(e.scope), scheme: n(e.chain.length === 3 ? e.chain[2] : void 0) };
}
const vm = `${Xr}GsMark`;
function Md(e, t, n) {
  const r = [t];
  if (!it(e) || typeof e.markIri != "string" || typeof e.productModelIri != "string")
    return { state: "not_established", reason: "The selected marking names no mark or product model.", sources: r };
  if (e.markIri !== vm)
    return { state: "not_established", reason: `Mark ${X(e.markIri)} has no interpretation in this binding.`, sources: r };
  const c = [t, "/credentialSubject/productModelIri"];
  return typeof n != "string" ? { state: "not_established", reason: "The credential names no product model.", sources: c } : n !== e.productModelIri ? {
    state: "contradicted",
    reason: `The marking claims the mark for model ${X(e.productModelIri)}, but the credential is for model ${X(n)}.`,
    sources: c
  } : {
    state: "established",
    reason: `Mapped a GS-mark claim for model ${X(e.productModelIri)}.`,
    sources: r,
    marking: { markIri: e.markIri, productModelIri: e.productModelIri }
  };
}
function Od(e, t) {
  const n = ["/credentialSubject/id"];
  if (t === void 0) return { state: "not_established", reason: "No certificate was reached.", sources: n };
  const r = st(t).id;
  return r === e.productModelIri ? { state: "established", reason: `${X(t.id)} certifies model ${X(r)}.`, sources: n, records: [String(t.id)] } : { state: "contradicted", reason: `${X(t.id)} certifies ${X(r)}, not model ${X(e.productModelIri)}.`, sources: n };
}
function Ld(e, t, n) {
  const r = e.document, c = [], i = [e.uri], a = Ke("certificate-reference", r, "GsCertificate", t, [e.uri], "GsAuthorizationPolicy");
  if (c.push(a.basis), !a.node) return ue("gs-certified-product", c, i);
  const s = a.node.document;
  i.push(a.node.uri);
  const o = st(s).manufacturerIri;
  c.push(typeof o != "string" ? { id: "manufacturer-binding", state: "not_established", reason: "The certificate names no manufacturer.", sources: ["/credentialSubject/manufacturerIri"] } : o === r.issuer ? { id: "manufacturer-binding", state: "established", reason: `The certificate names the passport issuer ${o} as manufacturer.`, sources: ["/credentialSubject/manufacturerIri", "/issuer"] } : { id: "manufacturer-binding", state: "contradicted", reason: `The certificate names ${o}, not the passport issuer ${String(r.issuer)}.`, sources: ["/credentialSubject/manufacturerIri", "/issuer"] }), c.push({ ...jt(r, [["The certificate", s]]), id: "certificate-in-force" });
  const p = Ed(a.node, t, n);
  c.push(...p.bases.map((u) => ({ ...u, id: `certificate:${u.id}` })));
  const h = Td(st(s).certification, "/credentialSubject/certification"), g = h.certification === void 0 ? { state: h.state, reason: h.reason } : (() => {
    const { competence: u, scheme: f } = kd(p, t);
    return Cd(h.certification, u, f);
  })();
  return c.push({ id: "certificate:claim-coverage", state: g.state, reason: g.reason, sources: ["/credentialSubject/certification"] }), i.push(...p.chain.slice(1)), ue("gs-certified-product", c, i, a.node.uri);
}
const bm = `${Xr}Pass`, wm = [
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
], Te = (e, t, n, r, c) => t === void 0 ? { id: e, state: "not_established", reason: r, sources: c } : { id: e, state: t ? "established" : "contradicted", reason: t ? n : r, sources: c };
function xm(e, t, n) {
  const r = e.document, c = st(r), i = it(c.certification) ? c.certification : {};
  return wm.map(({ obligationId: a, reference: s, type: o, activity: p, purpose: h, what: g }) => {
    const u = [], f = (q) => {
      const _ = ve(u.map((R) => R.state)), C = u.find((R) => R.state === _ && _ !== "established");
      return {
        obligationId: a,
        state: _,
        bases: u,
        chain: q,
        reason: _ === "established" ? `The ${g} applies and is independently authorized.` : `The ${g}: ${C?.reason ?? "not established"}`
      };
    }, w = Oe(r.evidence).filter(it).filter((q) => q.type === s).map((q) => String(q.id));
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
    const S = b.document, v = st(S), y = Oe(S.type);
    if (u.push(Te("reference", y.includes(o), `Cites ${g} ${X(x)}.`, `${X(x)} is not a ${o}.`, ["/evidence", x])), a === "type-examination") {
      u.push(Te(
        "same-model",
        v.productModelIri === c.id,
        `${X(x)} examined model ${X(c.id)}.`,
        `${X(x)} examined ${X(v.productModelIri)}, not model ${X(c.id)}.`,
        ["/credentialSubject/productModelIri"]
      ));
      const q = Oe(v.standardIris), _ = Oe(i.standardIris), C = _.filter((R) => !q.includes(R));
      u.push(Te(
        "covers-certification",
        v.productCategoryIri === i.productCategoryIri && C.length === 0,
        `${X(x)} covers ${X(i.productCategoryIri)} against [${_.map(X).join(", ")}].`,
        v.productCategoryIri !== i.productCategoryIri ? `${X(x)} examined ${X(v.productCategoryIri)}, not ${X(i.productCategoryIri)}.` : `${X(x)} did not examine ${C.map(X).join(", ")}.`,
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
    u.push(Te("outcome", v.outcomeIri === bm, `${X(x)} passed.`, `${X(x)} did not pass (${X(v.outcomeIri)}).`, ["/credentialSubject/outcomeIri"]));
    const d = Date.parse(String(v.activityTime)), l = Date.parse(String(c.activityTime));
    u.push(Te(
      "precedes-certification",
      Number.isFinite(d) && Number.isFinite(l) ? d <= l : void 0,
      `The ${g} (${String(v.activityTime)}) precedes the certification.`,
      Number.isFinite(d) && Number.isFinite(l) ? `The ${g} (${String(v.activityTime)}) follows the certification (${String(c.activityTime)}).` : "An activity time is missing.",
      ["/credentialSubject/activityTime"]
    ));
    const m = Ke("accreditation-reference", S, "GsAccreditation", t, [e.uri, x], "GsAuthorizationPolicy");
    if (u.push(m.basis), !m.node) return f([x]);
    const I = m.node.document;
    if (u.push(at("accreditation-grantee", I, S.issuer, `Accreditation ${X(m.node.uri)}`)), u.push(Te(
      "accreditation-permission",
      rt(I, `${Xr}${p}`),
      `${X(m.node.uri)} permits ${p}.`,
      `${X(m.node.uri)} does not permit ${p}.`,
      ["/credentialSubject/permittedActivity"]
    )), u.push(Rt("accreditation-anchor", I, h, n)), u.push({ ...jt(S, [[X(m.node.uri), I]]), id: "accreditation-in-force" }), a === "type-examination") {
      const q = Oe(v.standardIris), C = Oe(st(I).scope).filter(it).find((R) => R.productCategoryIri === v.productCategoryIri && q.every((O) => Oe(R.standardIris).includes(O)));
      u.push(Te(
        "accreditation-scope",
        C !== void 0,
        `${X(C?.id)} covers the examination.`,
        `No record of ${X(m.node.uri)} covers ${X(v.productCategoryIri)} against [${q.map(X).join(", ")}].`,
        ["/credentialSubject/scope"]
      ));
    }
    return f([x, m.node.uri]);
  });
}
function Sm(e, t, n) {
  const r = e.document, c = st(r).economicOperatorIri, i = ["/credentialSubject/economicOperatorIri", "/issuer"];
  return ue(
    "responsible-economic-operator",
    [typeof c != "string" ? { id: "operator-is-issuer", state: "not_established", reason: "The passport names no responsible economic operator.", sources: i } : Te(
      "operator-is-issuer",
      c === r.issuer,
      `The passport is issued by its responsible economic operator ${c}.`,
      `The passport names ${c} as its responsible economic operator but is issued by ${String(r.issuer)}.`,
      i
    )],
    // The operator declares its own passport, so the passport is the scope of its entries.
    [e.uri],
    e.uri
  );
}
function Im(e, t, n) {
  const r = e.document, c = st(r), i = it(c.complianceInformation) ? c.complianceInformation : {}, a = it(i.gsMark) ? i.gsMark : {}, s = [], o = (v, y) => {
    const d = ve(s.map((m) => m.state)), l = s.find((m) => m.state === d && d !== "established");
    return { ...y === void 0 ? {} : { certificateUri: y }, support: {
      obligationId: "gs-mark-credential",
      state: d,
      bases: s,
      chain: v,
      reason: d === "established" ? "The GS-mark credential applies to this unit and holds its own route." : `The GS-mark credential: ${l?.reason ?? "not established"}`
    } };
  }, p = Oe(r.evidence).filter(it).filter((v) => v.type === "GsMarkCredentialReference").map((v) => String(v.id));
  if (p.length !== 1)
    return s.push({
      id: "reference",
      state: "not_established",
      sources: ["/evidence"],
      reason: p.length === 0 ? "The passport cites no GS-mark credential." : "The passport cites several GS-mark credentials; none is chosen."
    }), o([]);
  const h = p[0], g = t(h);
  if (g === void 0 || g.usable !== "established" || g.document === void 0)
    return s.push({
      id: "reference",
      state: g?.usable === "contradicted" ? "contradicted" : "not_established",
      sources: ["/evidence", h],
      reason: g === void 0 ? `${X(h)} is unavailable.` : `${X(h)} is not usable: ${g.reason}`
    }), o([]);
  const u = g.document, f = st(u);
  s.push(Te(
    "reference",
    Oe(u.type).includes("GsMarkCredential"),
    `Cites GS-mark credential ${X(h)}.`,
    `${X(h)} is not a GsMarkCredential.`,
    ["/evidence", h]
  )), s.push(Te(
    "same-unit",
    f.id === c.id,
    `${X(h)} is for this unit ${X(c.id)}.`,
    `${X(h)} is for unit ${X(f.id)}, not this unit ${X(c.id)}.`,
    ["/credentialSubject/id"]
  )), s.push(Te(
    "same-operator",
    u.issuer === r.issuer,
    `${X(h)} is issued by the passport's issuer.`,
    `${X(h)} is issued by ${String(u.issuer)}, not the passport's issuer ${String(r.issuer)}.`,
    ["/issuer"]
  ));
  const w = Md(f.marking, "/credentialSubject/marking", f.productModelIri);
  s.push({ id: "mark-credential:mapping", state: w.state, reason: w.reason, sources: [...w.sources] }), s.push(Te(
    "same-model",
    w.marking === void 0 ? void 0 : w.marking.productModelIri === a.productModelIri && f.productModelIri === c.productModelIri,
    `${X(h)} claims the mark for the passport's model ${X(c.productModelIri)}.`,
    w.marking === void 0 ? `${X(h)} claims no mark for a model.` : `${X(h)} claims the mark for model ${X(w.marking.productModelIri)}, not the passport's model ${X(c.productModelIri)}.`,
    ["/credentialSubject/complianceInformation/gsMark/productModelIri", "/credentialSubject/productModelIri"]
  ));
  const x = Ld(g, t, n);
  s.push(...x.bases.map((v) => ({ ...v, id: `mark-credential:${v.id}` })));
  const b = x.scope === void 0 ? void 0 : t(x.scope)?.document, S = w.marking === void 0 ? { state: "not_established", reason: "No mark was mapped.", sources: [] } : Od(w.marking, b);
  return s.push({ id: "mark-credential:claim-coverage", state: S.state, reason: S.reason, sources: [...S.sources] }), o([h, ...x.chain.slice(1)], x.scope);
}
const qm = Object.freeze({
  "competence-and-scheme-permission": Ed,
  "gs-certified-product": Ld,
  "responsible-economic-operator": Sm
}), Am = "/credentialSubject/certification", Rm = "/credentialSubject/marking", qs = "/credentialSubject/complianceInformation/gsMark", jm = { GsMarkCredential: "mark", ProductPassport: "passport" }, $m = { certificate: Am, mark: Rm, passport: qs };
async function _m(e, t, n, r) {
  if (n.id !== kc || r.binding.id !== n.id || r.binding.version !== n.version)
    throw new Error(`Profile ${r.id}@${r.version} is not configured for ${kc}@${n.version}.`);
  const c = Vs(e, n, r);
  if (c !== void 0) return Object.freeze({ result: Us(e, c), artifacts: Object.freeze([]) });
  const i = await Gs(e, t, n, r, gm), { target: a, artifacts: s, facts: o, verificationOf: p, artifactVerification: h } = i, g = (L) => o.get(L), u = o.get(e.targetId), f = u.document, w = r.authority.certificateRoutes, x = f === void 0 ? [] : w.slice(0, r.authority.maxRoutes).map((L) => {
    const F = qm[L];
    return F === void 0 ? {
      id: L,
      state: "not_established",
      execution: "executed",
      chain: [u.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${L} has no installed evaluator.`, sources: [] }]
    } : F(u, g, r);
  }), b = f === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : xn([], x, w.slice(r.authority.maxRoutes)), S = b.routes.find((L) => L.state === "established"), v = Array.isArray(f?.type) && jm[String(f.type[1])] || "certificate", y = $m[v], d = e.selectedClaims.map((L) => {
    const F = /* @__PURE__ */ new Map();
    if (f === void 0 || L.sourcePointer !== y || Xt(f, L.sourcePointer) === void 0) {
      const D = f === void 0 ? "The target is not usable, so its claims are not read." : v === "passport" ? `This binding interprets only the GS-mark entry (${qs}) of a product passport; ${L.sourcePointer} has no interpretation here.` : `Selected claim ${L.sourcePointer} is not the ${v === "mark" ? "marking" : "certification statement"} of the usable target.`;
      return { claim: L, mapping: void 0, coverage: F, result: { claimId: L.id, routeWitnessIds: [], ...oe("not_established", [D]) } };
    }
    const k = Xt(f, L.sourcePointer), M = v === "certificate" ? void 0 : Md(k, L.sourcePointer, f.credentialSubject?.productModelIri), V = M ?? Td(k, L.sourcePointer), N = M?.marking, j = v === "certificate" ? V.certification : void 0;
    if (N === void 0 && j === void 0)
      return { claim: L, mapping: V, coverage: F, result: {
        claimId: L.id,
        routeWitnessIds: [],
        ...oe(V.state, [`Gate 4: ${V.reason}`], [L.sourcePointer])
      } };
    const A = Wr(b, (D) => {
      const H = v === "passport" ? {
        state: "established",
        sources: [qs],
        reason: "The entry is declared by the passport's responsible economic operator; it is relied on through the GS-mark credential it cites (gate 6)."
      } : N !== void 0 ? Od(N, g(D.scope)?.document) : (() => {
        const { competence: J, scheme: U } = kd(D, g);
        return Cd(j, J, U);
      })(), Q = [...D.chain.slice(1), ...H.sources];
      return F.set(D.id, { ...H, sources: Q }), { id: "claim-coverage", state: H.state, reason: H.reason, sources: Q };
    }), T = A.routes.find((D) => D.state === "established");
    return { claim: L, mapping: V, coverage: F, result: {
      claimId: L.id,
      routeWitnessIds: A.state === "established" && T ? [`route:${T.id}`, ...T.chain, ...(F.get(T.id)?.records ?? []).map((D) => `record:${D}`)] : [],
      ...oe(A.state, [
        A.reason,
        ...T ? [F.get(T.id).reason] : [...F].map(([D, H]) => `${D}: ${H.reason}`)
      ], [L.sourcePointer])
    } };
  }), l = d.map((L) => L.result), m = v === "passport" && f !== void 0 ? Im(u, g, r) : void 0, I = f === void 0 ? void 0 : v === "passport" ? m?.certificateUri : v === "mark" ? x.find((L) => L.chain.length > 1)?.chain[1] : e.targetId, q = I === void 0 ? void 0 : g(I), _ = f === void 0 ? [] : q?.usable === "established" && q.document !== void 0 ? xm(q, g, r) : ["type-examination", "factory-inspection"].map((L) => ({
    obligationId: L,
    state: "not_established",
    reason: "No usable GS certificate was reached, so its studies are not evaluated.",
    bases: [],
    chain: []
  })), C = [...m ? [m.support] : [], ..._], R = C.map((L) => ({
    obligationId: `gs-v1:${L.obligationId}`,
    witnessIds: L.state === "established" ? [...L.chain] : [],
    ...oe(L.state, [L.reason], ["/evidence"])
  })), O = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...oe("not_established", ["The GS v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, $ = /* @__PURE__ */ new Set([
    e.targetId,
    ...S?.chain ?? [],
    ...C.filter((L) => L.state === "established").flatMap((L) => L.chain)
  ]), E = [
    ...s.filter((L) => $.has(L.artifactId)).flatMap(p).map((L) => L.state),
    ...l.map((L) => L.state),
    ...R.map((L) => L.state),
    ...O.requested ? [O.state] : []
  ], z = [...i.trace], P = Kr(a.artifactId, a.digestSRI, "target", e);
  for (const { claim: L, mapping: F, coverage: k } of d) {
    F && z.push({
      gate: 4,
      nodeUse: P,
      predicate: `claim-mapping:${L.id}`,
      state: F.state,
      execution: "executed",
      reason: F.reason,
      sources: [...F.sources]
    });
    for (const [M, V] of k)
      z.push({
        gate: 5,
        nodeUse: P,
        predicate: `claim-coverage:${L.id}:${M}`,
        state: V.state,
        execution: "executed",
        reason: V.reason,
        sources: [...V.sources]
      });
  }
  for (const L of l)
    z.push({
      gate: 5,
      nodeUse: P,
      predicate: `claim-authorization:${L.claimId}`,
      state: L.state,
      execution: L.execution,
      reason: L.reasons.join(" "),
      sources: [...L.sourcePointers]
    });
  z.push({
    gate: 5,
    nodeUse: P,
    predicate: "authority",
    state: b.state,
    execution: "executed",
    reason: b.reason,
    sources: S ? [...S.chain] : []
  });
  for (const L of b.routes) {
    z.push(L.execution === "not_run" ? {
      gate: 5,
      nodeUse: P,
      predicate: `route:${L.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: P,
      predicate: `route:${L.id}`,
      state: L.state,
      execution: "executed",
      reason: `Route ${L.id} is ${L.state}.`,
      sources: [...L.chain]
    });
    for (const F of L.bases)
      z.push({
        gate: 5,
        nodeUse: P,
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
        nodeUse: P,
        predicate: `support:${L.obligationId}:${F.id}`,
        state: F.state,
        execution: "executed",
        reason: F.reason,
        sources: [...F.sources]
      });
  for (const L of R)
    z.push({
      gate: 6,
      nodeUse: P,
      predicate: L.obligationId,
      state: L.state,
      execution: L.execution,
      reason: L.reasons.join(" "),
      sources: []
    });
  O.requested && z.push({
    gate: 6,
    nodeUse: P,
    predicate: `conformity:${O.requirementId}`,
    state: O.state,
    execution: O.execution,
    reason: O.reasons.join(" "),
    sources: []
  });
  const Z = Vr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: h,
    authorization: l,
    support: R,
    conformity: O,
    decision: $s(E),
    trace: z,
    resources: i.resources,
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
const As = "2026-09-25T12:00:00Z", Pm = { rm: nm, cal: mm, gs: _m }, Nd = Object.fromEntries(["rm", "cal", "gs"].map((e) => [e, {
  manifest: bl(ri[e].manifest),
  profiles: Object.fromEntries(Object.entries(ri[e].profiles).map(([t, n]) => [t, Tl(n)])),
  files: ri[e].files
}])), Tm = (e) => String(e).split(/[#/:]/).pop() ?? "", ds = (e, t) => ({
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
}, sn = (e) => ({ id: `g${e + 1}`, sourcePointer: `/credentialSubject/measurementGroups/${e}` }), Cm = [
  {
    id: "direct",
    label: "Accredited lab",
    sublabel: "DCC-1",
    binding: "cal",
    profile: "cal-verifier-1",
    target: Pe.DCC1,
    claims: [sn(0), sn(1)],
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
    claims: [sn(0)],
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
    claims: [sn(0)],
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
    claims: [sn(0)],
    supplied: [Pe.T],
    tamper: ['"value": "2"', '"value": "30"'],
    withhold: { uri: Pe.DCC1, label: "Withhold the instrument's calibration" }
  }
], St = {
  TR1: "https://gs-body.vc4qi.example/credentials/TR-1",
  TR2: "https://testlab-gs.vc4qi.example/credentials/TR-2",
  TR3: "https://gs-body.vc4qi.example/credentials/TR-3",
  M1: "https://maker.vc4qi.example/credentials/GSM-1",
  M4: "https://maker.vc4qi.example/credentials/GSM-4"
}, an = (e, t, n, r, c) => ({
  id: e,
  label: t,
  sublabel: n,
  binding: "gs",
  profile: "gs-verifier-mark-1",
  target: r,
  claims: [{ id: "mark", sourcePointer: "/credentialSubject/marking" }],
  supplied: [],
  tamper: ["-sn-", "-sn-9"],
  withhold: c
}), ls = (e, t, n, r, c) => ({
  id: e,
  label: t,
  sublabel: n,
  binding: "gs",
  profile: "gs-verifier-dpp-1",
  target: r,
  claims: [{ id: "mark", sourcePointer: "/credentialSubject/complianceInformation/gsMark" }],
  supplied: [],
  tamper: ["-sn-", "-sn-9"],
  withhold: c
}), on = (e) => ({ uri: e, label: "Withhold the type examination" }), us = (e) => ({ uri: e, label: "Withhold the GS-mark credential" }), Mc = [
  {
    id: "rm",
    tab: "RM",
    title: "Certified reference material",
    intro: "M375a, leaded brass: may I rely on the certified arsenic value?",
    caseLabel: "Certified As mass fraction (mg/kg)",
    cases: [ds("178", "certificate"), ds("197", "hypothetical"), ds("520", "hypothetical")],
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
    cases: Cm,
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
      an("in-house", "Hair dryer HD-01", "GS body tested", "https://maker.vc4qi.example/credentials/GSM-1", on(St.TR1)),
      an("external", "Hair dryer HD-02", "external lab tested", "https://maker.vc4qi.example/credentials/GSM-3", on(St.TR2)),
      an("toy", "Toy 001", "outside ZLS scope", "https://maker.vc4qi.example/credentials/GSM-2", on(St.TR3)),
      an("clone", "Other company", "cites the HD-01 certificate", "https://clone.vc4qi.example/credentials/GSM-5", on(St.TR1)),
      an("mismatch", "HD-02 unit", "claims the HD-01 mark", "https://maker.vc4qi.example/credentials/GSM-6", on(St.TR1))
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
      ls("unit", "Unit sn-0042", "its own GS-mark credential", "https://maker.vc4qi.example/credentials/DPP-1", us(St.M1)),
      ls("early", "Unit sn-0001", "on market before certification", "https://maker.vc4qi.example/credentials/DPP-2", us(St.M4)),
      ls("borrowed", "Unit sn-0050", "cites another unit's credential", "https://maker.vc4qi.example/credentials/DPP-3", us(St.M1))
    ],
    note: "An experimental product passport shaped after the EU Digital Product Passport (ESPR): unique product identifier, GTIN, commodity code, economic operator and facility, technical and sustainability data, and compliance information. Its GS-mark entry is supported by the unit's GS-mark credential, which keeps its own authority route. The GS binding evaluates only that entry. Not ESPR conformance; identifiers are fictional, and today's GS scheme has no per-unit credential. All parties and keys are fictional."
  }
], Em = {
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
}, Oc = (e) => {
  const t = /^https:\/\/([^./]+)\./.exec(String(e))?.[1];
  return t === void 0 ? String(e).split("#")[0].split(":").pop() : Em[t] ?? t;
}, km = {
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
function Mm(e, t, n, r, c) {
  const i = /* @__PURE__ */ new Map();
  for (const [w, x] of Object.entries(t))
    try {
      i.set(w, JSON.parse(x));
    } catch {
    }
  const a = (w) => [
    ...(w?.termsOfUse ?? []).map((x) => x.authorizationCredential?.id).filter((x) => typeof x == "string").map((x) => ({ to: x, kind: "authority" })),
    ...(w?.evidence ?? []).map((x) => x.id).filter((x) => typeof x == "string").map((x) => ({ to: x, kind: "support" }))
  ], s = new Map(n.artifactVerification.map((w) => [w.artifactId, w.state])), o = /* @__PURE__ */ new Map([[e, 0]]), p = /* @__PURE__ */ new Set(), h = [], g = [[e, !1]], u = /* @__PURE__ */ new Set();
  for (; g.length > 0; ) {
    const [w, x] = g.shift();
    for (const { to: b, kind: S } of a(i.get(w))) {
      const v = `${w}>${b}`, y = x || S === "support";
      u.has(v) || (u.add(v), h.push({
        from: w,
        to: b,
        kind: S,
        state: y ? c : w === e ? r : s.get(b) ?? "not_established"
      }));
      const d = (o.get(w) ?? 0) + 1;
      (o.get(b) ?? -1) < d && d < 8 ? (o.set(b, d), g.push([b, y])) : y && !p.has(b) && p.add(b);
    }
  }
  return { nodes: [...o].map(([w, x]) => {
    const b = i.get(w), S = Array.isArray(b?.type) ? String(b.type[1]) : "", v = b?.credentialSubject ?? {};
    return {
      uri: w,
      name: Tm(w),
      role: km[S] ?? (S || "not supplied"),
      layer: x,
      present: b !== void 0,
      target: w === e,
      parties: b === void 0 ? "withheld" : `${Oc(b.issuer)} → ${Oc(v.id)}`,
      state: s.get(w) ?? "not_established"
    };
  }), edges: h };
}
const It = (e) => e.length === 0 ? "not_established" : ve(e.map((t) => t.state)), Lc = (e, t) => e.find((n) => n.state === t);
async function Hm(e) {
  const t = Mc.find((R) => R.id === e.example) ?? Mc[0], n = t.cases.find((R) => R.id === e.caseId) ?? t.cases[0], r = Nd[n.binding], c = t.id === "dcc" && e.choice === "direct-only" ? "cal-verifier-1" : n.profile, i = r.profiles[c], a = t.id === "rm" && e.choice !== "authorized" ? { requirementId: "as-mass-fraction-max-200-mg-per-kg", decisionRuleId: "guarded-acceptance-expanded-u" } : void 0, s = {}, o = r.files.filter((R) => !(e.withhold && R.uri === n.withhold.uri)).map((R) => {
    const O = e.tamper && R.uri === n.target ? R.text.replace(n.tamper[0], n.tamper[1]) : R.text, $ = new TextEncoder().encode(O);
    return s[R.uri] = O, {
      uri: R.uri,
      mediaType: R.mediaType,
      origin: R.origin,
      version: R.version,
      bytes: $,
      digestSRI: O === R.text ? R.digestSRI : zr($)
    };
  }), p = Cl({
    requestId: `urn:vc4qi:demonstrator:${t.id}:${n.id}`,
    targetId: n.target,
    selectedClaims: n.claims.map((R) => ({ ...R })),
    purpose: "demonstrator",
    binding: { id: r.manifest.id, version: r.manifest.version },
    profile: { id: i.id, version: i.version },
    trustConfigId: "https://vc4qi.example/trust/fixture-anchors",
    evaluationTime: As,
    activityTime: As,
    suppliedEvidence: n.supplied.filter((R) => !(e.withhold && R === n.withhold.uri)),
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5e6 },
    ...a ? { conformity: a } : {}
  }), { result: h } = await Pm[n.binding](p, new yl(o), r.manifest, i), g = (R, O = () => !0) => h.trace.filter(($) => $.gate === R && O($)), f = [...g(2), ...g(1)], w = g(3), x = [...g(0), ...g(4)], b = (R, O, $) => O === "established" ? $ : (Lc(R, O) ?? Lc(R, "not_established"))?.reason ?? "Not evaluated.", S = h.authorization, v = S.length === 0 ? "not_established" : ve(S.map((R) => R.state)), y = v === "established" ? S.map((R) => R.reasons.at(-1)).join(" ") : S.filter((R) => R.state !== "established").map((R) => `${R.claimId}: ${R.reasons.join(" ")}`).join(" "), d = h.support, l = h.artifactVerification.find((R) => R.artifactId === n.target)?.state === "established", m = d.length > 0 ? ve(d.map((R) => R.state)) : l ? "not_required" : "not_established", I = g(6, (R) => R.predicate.startsWith("conformity:")), q = [
    {
      id: "authentic",
      state: It(f),
      details: f,
      summary: b(f, It(f), "Every credential is signed by its issuer's own key, and every reference matches the exact bytes.")
    },
    {
      id: "current",
      state: It(w),
      details: w,
      summary: b(w, It(w), "Every credential is within its validity period and not revoked.")
    },
    // "Understood" includes reading the claim itself (gate 4); a claim that was never
    // read, because its credential failed a lower gate, is not understood.
    g(4).length === 0 ? {
      id: "understood",
      state: It(g(0)) === "contradicted" ? "contradicted" : "not_established",
      details: x,
      summary: b(g(0), It(g(0)), "The claim was not read, because its credential did not pass the earlier checks.")
    } : {
      id: "understood",
      state: It(x),
      details: x,
      summary: b(x, It(x), g(4).map((R) => R.reason).join(" "))
    },
    {
      id: "authorized",
      state: v,
      summary: y,
      details: g(5, (R) => R.predicate.startsWith("claim-") || R.predicate.startsWith("restriction:") || R.predicate.startsWith("route:"))
    },
    {
      id: "supported",
      state: m,
      summary: d.length > 0 ? d.map((R) => R.reasons.join(" ")).join(" ") : l ? "This claim needs no supporting credential under the selected profile." : "Not evaluated: the credential did not pass the earlier checks.",
      details: g(6, (R) => R.predicate.startsWith("support:") || d.some((O) => O.obligationId === R.predicate))
    },
    h.conformity.requested ? {
      id: "fit",
      state: h.conformity.execution === "not_run" ? "not_asked" : h.conformity.state,
      details: I,
      summary: h.conformity.reasons.join(" ")
    } : {
      id: "fit",
      state: "not_asked",
      details: [],
      summary: t.id === "rm" ? "The verifier asked only whether the value is authorized; no limit was applied." : "This example asks only whether the claim is authorized; the binding installs no decision rule."
    }
  ], _ = JSON.parse(s[n.target]), C = Mm(n.target, s, h, v, m);
  return { options: e, example: t, spec: n, profile: c, result: h, questions: q, target: _, texts: s, graph: C };
}
const Jm = {
  evaluationTime: As,
  bindings: Object.fromEntries(Object.entries(Nd).map(([e, t]) => [e, `${t.manifest.id}@${t.manifest.version}`]))
};
export {
  As as EVALUATION_TIME,
  Mc as EXAMPLES,
  Jm as buildInfo,
  Hm as evaluateScenario
};
