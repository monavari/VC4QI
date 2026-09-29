var kd = Object.defineProperty;
var Hs = (e) => {
  throw TypeError(e);
};
var Od = (e, t, n) => t in e ? kd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var rt = (e, t, n) => Od(e, typeof t != "symbol" ? t + "" : t, n), Zs = (e, t, n) => t.has(e) || Hs("Cannot " + n);
var We = (e, t, n) => (Zs(e, t, "read from private field"), n ? n.call(e) : t.get(e)), xn = (e, t, n) => t.has(e) ? Hs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), tr = (e, t, n, r) => (Zs(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
const nr = { rm: { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/rm/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/bindings.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Contexts, schemas, controller documents, signed A/H/O/S/D fixtures and status lists are pinned and verify in TypeScript and Python. The I1-I4 evaluators (protection, status, authority routes, support, claim mapping and coverage, conformity) and the current-reliance time rules are implemented, with a cross-language parity vector; an independent transformation vector is still required before selection.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/rm/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/rm/1#RmAccreditation", "https://vc4qi.example/bindings/rm/1#RmOperationalScope", "https://vc4qi.example/bindings/rm/1#RmCertificate", "https://vc4qi.example/bindings/rm/1#RmStudy", "https://vc4qi.example/bindings/rm/1#RmLabAuthority", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential"], schemaUris: ["https://vc4qi.example/schemas/rm/1/accreditation.json", "https://vc4qi.example/schemas/rm/1/operational-scope.json", "https://vc4qi.example/schemas/rm/1/certificate.json", "https://vc4qi.example/schemas/rm/1/study.json", "https://vc4qi.example/schemas/rm/1/lab-authority.json", "https://vc4qi.example/schemas/rm/1/authorization-policy.json", "https://vc4qi.example/schemas/rm/1/study-reference.json", "https://vc4qi.example/schemas/rm/1/status-list.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/rm-v1/catalog.json", decimalEncoding: "JSON strings typed xsd:decimal for every quantity, bound and uncertainty", orderedCollections: ["materials", "materialPropertiesList", "results"] }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/rm/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/rm/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/bindings/rm/1#authorizationCredential" }, { fact: "requiredStudy", nativePath: "/evidence/*/id", expandedIri: "https://www.w3.org/2018/credentials#evidence" }, { fact: "validFrom", nativePath: "/validFrom", expandedIri: "https://www.w3.org/2018/credentials#validFrom" }, { fact: "validUntil", nativePath: "/validUntil", expandedIri: "https://www.w3.org/2018/credentials#validUntil" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/rm/1#activityTime" }, { fact: "selectedResult", nativePath: "/credentialSubject/materialPropertiesList/*/results/*", expandedIri: "https://vc4qi.example/bindings/rm/1#results" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, material: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 1 }, authorizingReferenceSelection: "by-declared-reference-type-per-route; resolved credential type must match (else contradicted); several of one type not_established", supportReferences: { minimum: 1 }, multipleRecognizedDeclarations: "unsupported-unless-exact-deterministic-composition-is-listed", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "evidence", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse authorizationCredential references on the credential chain; an authenticated grant found by other means establishes nothing (not_established)" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/bindings/rm/1#RmAuthorizationPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], supportEvidence: "https://vc4qi.example/bindings/rm/1#RmStudyReference", supportEvidenceEstablishes: ["support-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "support-applicability", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { issueRmCertificate: "https://vc4qi.example/bindings/rm/1#issueRmCertificate", maintainRmScope: "https://vc4qi.example/bindings/rm/1#maintainRmScope", issueRmStudy: "https://vc4qi.example/bindings/rm/1#issueRmStudy" }, rules: ["A grantee equals the producer exercising certificate issuance and scope maintenance.", "O issuer and grantee equal that producer and O is contained by A.", "D issuer equals O grantee.", "S issuer equals H laboratory grantee.", "Commissioning a study grants no laboratory competence."] }, scopeAndMapping: { mappingVersion: "rm-experimental-mapping-1", recordEvaluator: "https://vc4qi.example/evaluators/rm-complete-record/1", quantityEvaluator: "https://vc4qi.example/evaluators/exact-mass-fraction/1", dimensions: ["matrixIri", "formIri", "propertyIri", "methodIri", "quantityKindIri", "range"], units: { "mg/kg": "1e-6", "kg/kg": "1" }, boundaries: "inclusive", missingOrEmptyRestrictedDimension: "not_established", recordCombination: "one-complete-record-per-claim-no-splicing", uncertainty: { requiredCoverageFactor: "2", nonnegative: !0, accreditationCeiling: "none" }, methodRevisions: [{ method: "https://vc4qi.example/bindings/rm/1#M2", revises: "https://vc4qi.example/bindings/rm/1#M1" }], methodSuccessionInterpretation: "verifier-profile mapping.methodSuccession: accept-successor | require-extension | none (none leaves a revised method not_established at gate 4)", claimCoverage: "the selected result, mapped at gate 4, must lie in one complete record of the route's own scope credential (O for operational-scope, A for direct-accreditation); no fallback to a parent grant", conformity: "verifier-profile requirements and decision rules, evaluated at gate 6 only after the claim is authorized; exact arithmetic reported in the requirement's unit", unsupported: ["asymmetric-uncertainty", "display-label-equality", "substring-matching", "implicit-method-succession"] }, routesAndRestrictions: { certificateRoute: ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A"], installedCertificateRoutes: { "operational-scope": ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A", "A-issuer-is-accreditation-anchor"], "direct-accreditation": ["A-authorizes-D", "A-issuer-is-accreditation-anchor"] }, studyRoute: ["H-authorizes-S"], requiredSupport: ["S", "H"], globalRestrictions: ["applicable-suspension", "request-time-policy"], installedGlobalRestrictions: { "accreditation-suspension": "every usable anchor-issued RmAccreditation of the certificate issuer reached through the target's termsOfUse references, on any route, must carry a fresh issuer suspension status (Bitstring Status List, statusPurpose suspension) with its bit clear; missing or unreadable suspension status is not_established; unusable or unreferenced credentials are not restrictions" }, unusedAlternativeFailures: "diagnostic-only: only the target and the credentials on the selected route and support chains decide the request", routeComposition: "AND-within-route-OR-between-complete-routes", baselineAlternatives: 1, provenanceDoesNotEstablish: ["permission", "containment"] }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, proofCollections: "unsupported-in-initial-slice", status: "authenticated-current-revocation-status-required-for-A-O-D-S-H; suspension entries on accreditations are read only by the accreditation-suspension restriction", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], freshness: "verifier-profile maxAgeSeconds from the status list validFrom; no default", historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { objectApplicability: ["materialBatch", "activity", "method", "activityTime"], supportSubjectNeedNotEqualTargetIssuer: !0, mandatoryDisclosure: ["issuer", "credentialSubject/id", "activityTime", "selectedResult", "restrictions", "authorizingReference", "requiredStudy", "relatedResource", "proof"], missingMandatoryDisclosure: "not_established", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/plans/standards-first-acceptance.csv", testVectorRoots: ["testdata/regressions", "bindings/experimental/rm-v1/test-vectors"], implementationEvidence: "docs/plans/evidence.md", unsupported: ["production-accreditation", "legal-effect", "physical-sample-truth", "public-example-namespace-resolution", "general-ontology-reasoning", "wallet-interoperability", "external-recognition-adapter", "timestamp-service"] } }, profiles: { "rm-verifier-1": { id: "https://vc4qi.example/profiles/rm-verifier", version: "1", status: "experimental", description: "Verifier-owned reliance profile for the experimental RM v1 binding. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "recognize-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } }, "rm-verifier-two-routes-1": { id: "https://vc4qi.example/profiles/rm-verifier-two-routes", version: "1", status: "experimental", description: "Fictional verifier profile with two complete certificate routes, (operational scope within an accreditation) OR (direct accreditation), and the accreditation-suspension global restriction outside the OR. Exercises route composition (C01-C07); not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "recognize-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope", "direct-accreditation"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
` }] }, cal: { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/cal/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/bindings.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Migrated calibration (DCC) binding for the calibration-direct-accreditation, calibration-capability, nmi-legal-mandate and test-report-supported-dcc use cases. The gate 0-6 evaluators for direct accreditation, bounded operational scopes, statutory mandates, measurement-group coverage, CMC floors and instrument-calibration support of test reports are implemented; conformity rules and native DCC XML are not.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/cal/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/cal/1#CalAccreditation", "https://vc4qi.example/bindings/cal/1#CalOperationalScope", "https://vc4qi.example/bindings/cal/1#CalLegalMandate", "https://vc4qi.example/bindings/cal/1#CalCertificate", "https://vc4qi.example/bindings/cal/1#CalTestReport", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential"], schemaUris: ["https://vc4qi.example/schemas/cal/1/accreditation.json", "https://vc4qi.example/schemas/cal/1/operational-scope.json", "https://vc4qi.example/schemas/cal/1/legal-mandate.json", "https://vc4qi.example/schemas/cal/1/certificate.json", "https://vc4qi.example/schemas/cal/1/test-report.json", "https://vc4qi.example/schemas/cal/1/status-list.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/cal-v1/catalog.json", decimalEncoding: "JSON strings typed xsd:decimal for every value, bound, uncertainty and CMC floor", orderedCollections: ["measurementGroups", "results"], nativeRepresentation: "A JSON-LD simplification of a DCC's measurement results; native DCC XML is not carried in this experimental binding" }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/cal/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/cal/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/bindings/cal/1#authorizationCredential" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/cal/1#activityTime" }, { fact: "measurementGroup", nativePath: "/credentialSubject/measurementGroups/*", expandedIri: "https://vc4qi.example/bindings/cal/1#measurementGroups" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, measurementGroups: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 1 }, authorizingReferenceSelection: "by-declared-reference-type-per-route; resolved credential type must match (else contradicted); several of one type not_established", selectedGroups: "every selected measurement group is a separate required claim; the request is a conjunction over them", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse authorizationCredential references on the credential chain" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/bindings/cal/1#CalAuthorizationPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { issueCalibrationCertificate: "https://vc4qi.example/bindings/cal/1#issueCalibrationCertificate", maintainCalibrationScope: "https://vc4qi.example/bindings/cal/1#maintainCalibrationScope", issueTestReport: "https://vc4qi.example/bindings/cal/1#issueTestReport" }, rules: ["The grant's grantee (accreditation, operational scope or mandate) equals the actor issuing the calibration certificate.", "The grant permits issuing calibration certificates, or, for a test report under direct accreditation, issuing test reports (anchor purpose accredit-testing-laboratories).", "An operational scope is issued by its own grantee, and the accreditation it cites names that grantee and permits maintaining a calibration scope.", "Every grant on the route was in force at the certificate's activity time."] }, scopeAndMapping: { mappingVersion: "cal-experimental-mapping-1", dimensions: ["quantityKindIri", "methodIris", "range", "cmcFloor"], units: { Pa: "1", kPa: "1e3", MPa: "1e6" }, boundaries: "inclusive", coverageFactor: "2", methodRule: "every method a group names must be allowed by the same record; a record restricting methods against a group naming none is not_established (no empty-array bypass)", groupRule: "one complete record must cover the group's quantity kind, methods and every result; groups never combine and a later group cannot erase an earlier failure", cmcFloor: "when the verifier profile applies it, an expanded uncertainty below the record's admitted CMC contradicts scope; independent of conformity", boundedProjection: "every operational-scope record lies within one accreditation record: same quantity kind, a subset of its methods, a range inside its range and, when the profile applies the CMC floor, a stated floor not below the accreditation's; claims are covered by the operational scope only", unsupported: ["asymmetric-uncertainty", "display-label-equality", "implicit-method-succession", "customer-uncertainty-limits"] }, routesAndRestrictions: { installedCertificateRoutes: { "direct-accreditation": ["CA-authorizes-certificate", "CA-grantee-is-issuer", "CA-issuer-is-accreditation-anchor", "CA-in-force-at-activity"], "operational-scope": ["O-authorizes-certificate", "O-grantee-is-issuer", "O-self-maintained", "O-cites-CA", "CA-grantee-is-O-issuer", "CA-permits-scope-maintenance", "O-within-CA", "CA-issuer-is-accreditation-anchor", "O-and-CA-in-force-at-activity"], "statutory-mandate": ["M-authorizes-certificate", "M-grantee-is-issuer", "M-issuer-is-designation-anchor", "M-in-force-at-activity"] }, globalRestrictions: [], routeComposition: "AND-within-route-OR-between-complete-routes" }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, status: "authenticated-current-revocation-status-required", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { requiredSupport: "a CalTestReport requires one cited CalCertificate (evidence CalCalibrationReference) for the same instrument and quantity kinds, calibrated before the test and valid at it, whose own authority holds with every measurement group covered; certificates have no support obligation", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/plans/standards-first-acceptance.csv", testVectorRoots: ["bindings/experimental/cal-v1/test-vectors"], implementationEvidence: "docs/plans/evidence.md", unsupported: ["production-accreditation", "legal-effect", "real-statutory-designation", "native-dcc-xml", "public-example-namespace-resolution", "wallet-interoperability", "timestamp-service"] } }, profiles: { "cal-verifier-1": { id: "https://vc4qi.example/profiles/cal-verifier", version: "1", status: "experimental", description: "Verifier-owned reliance profile for the experimental calibration v1 binding. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/cal/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-calibration-laboratories"] }], authority: { certificateRoutes: ["direct-accreditation"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] }, bindingRules: { applyCmcFloor: !0 } }, "cal-verifier-capability-1": { id: "https://vc4qi.example/profiles/cal-verifier-capability", version: "1", status: "experimental", description: "Verifier-owned reliance profile for calibration-capability under the experimental calibration v1 binding: certificates issued under a laboratory's bounded operational scope within its accreditation. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/cal/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-calibration-laboratories"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] }, bindingRules: { applyCmcFloor: !0 } }, "cal-verifier-nmi-1": { id: "https://vc4qi.example/profiles/cal-verifier-nmi", version: "1", status: "experimental", description: "Verifier-owned reliance profile for nmi-legal-mandate under the experimental calibration v1 binding: certificates issued under a statutory mandate, with no accreditation anchor configured. Fictional fixture configuration; no legal effect; not an external standard.", binding: { id: "https://vc4qi.example/bindings/cal/1", version: "1" }, trustAnchors: [{ id: "https://ministry.vc4qi.example/controller", purposes: ["designate-national-metrology-institutes"] }], authority: { certificateRoutes: ["statutory-mandate"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] }, bindingRules: { applyCmcFloor: !0 } }, "cal-verifier-test-report-1": { id: "https://vc4qi.example/profiles/cal-verifier-test-report", version: "1", status: "experimental", description: "Verifier-owned reliance profile for test-report-supported-dcc under the experimental calibration v1 binding: a testing laboratory's report under its direct accreditation, supported by an independently authorized calibration of the instrument it used. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/cal/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-testing-laboratories", "accredit-calibration-laboratories"] }], authority: { certificateRoutes: ["direct-accreditation"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] }, bindingRules: { applyCmcFloor: !0 } } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
` }] }, gs: { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/gs/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/bindings.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Migrated GS certification binding for the gs-scheme-authorization use case, plus an experimental product passport (not EU DPP conformance). The gate 0-6 evaluators for the competence-and-scheme-permission and gs-certified-product routes, their coverage and the certificate's required studies (type examination and factory inspection) are implemented; statutory GS routes, application assessments and conformity rules are not.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/gs/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/gs/1#GsAccreditation", "https://vc4qi.example/bindings/gs/1#GsSchemeAuthorization", "https://vc4qi.example/bindings/gs/1#GsCertificate", "https://vc4qi.example/bindings/gs/1#GsProductPassport", "https://vc4qi.example/bindings/gs/1#GsTestReport", "https://vc4qi.example/bindings/gs/1#GsInspectionReport", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential"], schemaUris: ["https://vc4qi.example/schemas/gs/1/accreditation.json", "https://vc4qi.example/schemas/gs/1/scheme-authorization.json", "https://vc4qi.example/schemas/gs/1/certificate.json", "https://vc4qi.example/schemas/gs/1/product-passport.json", "https://vc4qi.example/schemas/gs/1/test-report.json", "https://vc4qi.example/schemas/gs/1/inspection-report.json", "https://vc4qi.example/schemas/gs/1/status-list.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/gs-v1/catalog.json", orderedCollections: [], nativeRepresentation: "A JSON-LD simplification of a GS certificate; no native scheme document is carried" }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/gs/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/gs/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/bindings/gs/1#authorizationCredential" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/gs/1#activityTime" }, { fact: "certification", nativePath: "/credentialSubject/certification", expandedIri: "https://vc4qi.example/bindings/gs/1#certification" }, { fact: "requiredStudy", nativePath: "/evidence/*/id", expandedIri: "https://www.w3.org/2018/credentials#evidence" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 2 }, authorizingReferenceSelection: "by-declared-reference-type-per-route-half; resolved credential type must match (else contradicted); several of one type not_established", selectedClaims: "the certification statement at /credentialSubject/certification", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse authorizationCredential references on the credential chain" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/bindings/gs/1#GsAuthorizationPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { certifyProducts: "https://vc4qi.example/bindings/gs/1#certifyProducts", testProducts: "https://vc4qi.example/bindings/gs/1#testProducts", inspectFactories: "https://vc4qi.example/bindings/gs/1#inspectFactories", awardGsMark: "https://vc4qi.example/bindings/gs/1#awardGsMark" }, rules: ["The accreditation (competence) and the scheme authorization each name the certification body issuing the certificate.", "The accreditation permits certifying products; the scheme authorization permits awarding the GS mark.", "The accreditation issuer is anchored for accrediting certification bodies; the scheme authorization issuer for authorizing GS certification.", "Both grants were in force at the certificate's activity time.", "A certificate needs a type examination of its model covering its category and standards, and a factory inspection of its manufacturer; each passed, precedes the certification and is issued under an anchored accreditation of its issuer that permits the activity (testing laboratories: accredit-testing-laboratories; inspection: accredit-certification-bodies) and was in force at the study.", "A product passport's GS-mark claim needs a GS certificate that names the passport issuer as manufacturer, certifies the passport's model, was in force when the unit was placed on the market and itself holds the complete route."] }, scopeAndMapping: { mappingVersion: "gs-experimental-mapping-1", dimensions: ["productCategoryIri", "standardIris"], standardRule: "one competence record must cover the category and every certified standard; a record listing standards against a certification naming none is not_established (no empty-array bypass)", schemeRule: "one scheme record must cover the category", unsupported: ["display-label-equality", "standard-edition-succession", "product-variant-inheritance"] }, routesAndRestrictions: { installedCertificateRoutes: { "competence-and-scheme-permission": ["A-referenced", "A-grantee-is-issuer", "A-permits-certification", "A-issuer-is-accreditation-anchor", "S-referenced", "S-grantee-is-issuer", "S-permits-GS-mark", "S-issuer-is-scheme-anchor", "A-and-S-in-force-at-activity", "claim-covered-by-A-and-S"], "gs-certified-product": ["C-referenced", "C-names-passport-issuer-as-manufacturer", "C-in-force-at-passport-activity", "C-holds-competence-and-scheme-permission", "C-certification-covered", "C-certifies-the-passport-model"] }, globalRestrictions: [], routeComposition: "AND-within-route-OR-between-complete-routes" }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, status: "authenticated-current-revocation-status-required", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { requiredSupport: "type examination (GsTypeExaminationReference to a GsTestReport) and factory inspection (GsFactoryInspectionReference to a GsInspectionReport) of the certificate", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/plans/standards-first-acceptance.csv", testVectorRoots: ["bindings/experimental/gs-v1/test-vectors"], implementationEvidence: "docs/plans/evidence.md", unsupported: ["production-accreditation", "real-gs-scheme-rules", "legal-effect", "application-assessments", "public-example-namespace-resolution", "wallet-interoperability", "timestamp-service"] } }, profiles: { "gs-verifier-1": { id: "https://vc4qi.example/profiles/gs-verifier", version: "1", status: "experimental", description: "Verifier-owned reliance profile for gs-scheme-authorization under the experimental GS certification v1 binding: the GS mark is relied on only through competence AND scheme permission. A fictional profile example, not a universal GS or legal rule.", binding: { id: "https://vc4qi.example/bindings/gs/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-certification-bodies", "accredit-testing-laboratories"] }, { id: "https://zls.vc4qi.example/controller", purposes: ["authorize-gs-certification"] }], authority: { certificateRoutes: ["competence-and-scheme-permission"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] } }, "gs-verifier-dpp-1": { id: "https://vc4qi.example/profiles/gs-verifier-dpp", version: "1", status: "experimental", description: "Verifier-owned reliance profile for experimental product passports under the GS certification v1 binding: a unit's GS-mark claim is relied on only through a GS certificate for its model that names the manufacturer and itself holds competence AND scheme permission. Fictional; not EU Digital Product Passport conformance.", binding: { id: "https://vc4qi.example/bindings/gs/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-certification-bodies", "accredit-testing-laboratories"] }, { id: "https://zls.vc4qi.example/controller", purposes: ["authorize-gs-certification"] }], authority: { certificateRoutes: ["gs-certified-product"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] } } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
}` }, { uri: "https://vc4qi.example/contexts/gs/1", mediaType: "application/ld+json", origin: "VC4QI experimental GS certification binding (repository-owned fictional fixture)", version: "1", digestSRI: "sha384-i55N36GHJ22qZT7pnG8VU+ylw9s3aYDd++gufNzZrip02dS5df14L53+qjGVb/Fx", text: `{
  "@context": {
    "@version": 1.1,
    "@protected": true,
    "gs": "https://vc4qi.example/bindings/gs/1#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",

    "GsAccreditation": "gs:GsAccreditation",
    "GsSchemeAuthorization": "gs:GsSchemeAuthorization",
    "GsCertificate": "gs:GsCertificate",
    "GsProductPassport": "gs:GsProductPassport",
    "GsTestReport": "gs:GsTestReport",
    "GsInspectionReport": "gs:GsInspectionReport",
    "GsTypeExaminationReference": "gs:GsTypeExaminationReference",
    "GsFactoryInspectionReference": "gs:GsFactoryInspectionReference",
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
    "markIri": {"@id": "gs:mark", "@type": "@id"},
    "outcomeIri": {"@id": "gs:outcome", "@type": "@id"}
  }
}
` }, { uri: "https://vc4qi.example/schemas/gs/1/accreditation.json", mediaType: "application/schema+json", origin: "VC4QI experimental GS certification binding (generated by scripts/gs-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-A7C4pEefZmi9r8s0B9Sen4CkpjJJQy0IRd6oXOh8L3yObSJby6EXOlxamv2Af/za", text: `{
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
              "https://vc4qi.example/bindings/gs/1#testProducts",
              "https://vc4qi.example/bindings/gs/1#inspectFactories"
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
` }, { uri: "https://vc4qi.example/schemas/gs/1/product-passport.json", mediaType: "application/schema+json", origin: "VC4QI experimental GS certification binding (generated by scripts/gs-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-3Xs3NBMwr+OTZkzkvNTi9IwFLL77JhagqtqRAeTewMZ38iufuGizxP8JQA+SF1/X", text: `{
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
        "GsProductPassport"
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
` }, { uri: "https://nab.vc4qi.example/credentials/GS-A", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-pucloC8OIjAE+Fa/N11cwYokpwjGWPXCxY9GnldgN9lI1BH/8uu4ZSq/d2vwaEno", text: `{
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
  "name": "Accreditation of the GS body (certification, testing, factory inspection)",
  "credentialSubject": {
    "id": "https://gs-body.vc4qi.example/controller",
    "permittedActivity": [
      "https://vc4qi.example/bindings/gs/1#certifyProducts",
      "https://vc4qi.example/bindings/gs/1#testProducts",
      "https://vc4qi.example/bindings/gs/1#inspectFactories"
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
    "proofValue": "z64u2Xwb4xPkxf81mWrhMVfrCJYmKGVJeNEeArzPS8jZ5VjgpJ5vW9BJvnTa6wDaDwbziizxmiRo1ZmFjgWYSMoyH"
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
` }, { uri: "https://gs-body.vc4qi.example/credentials/FI-1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-v0pM3hITTWE51s8i9lyiJcfMdmiImH9jsXGZEZRwg9ORVvyN6SWqd5N3aS6H3TfG", text: `{
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
      "digestSRI": "sha384-pucloC8OIjAE+Fa/N11cwYokpwjGWPXCxY9GnldgN9lI1BH/8uu4ZSq/d2vwaEno"
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
    "proofValue": "z63ujiSsjvyzaUoY7tr9uLyGvKCcznvSWvUGB5tR6uLoC3TvVNDPPCsEFakdr8qsX9Mz99tYtTxfGkCacBLnLieL8"
  }
}
` }, { uri: "https://gs-body.vc4qi.example/credentials/TR-1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-17DHQQIhOeh9jytEohqQoap9t5fqBy1g/PhH4ADr3XZWSxDKONFx62rCx2iZLhle", text: `{
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
      "digestSRI": "sha384-pucloC8OIjAE+Fa/N11cwYokpwjGWPXCxY9GnldgN9lI1BH/8uu4ZSq/d2vwaEno"
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
    "proofValue": "z5TpL24PLfy881EztoTypUJWK4BDFBGhpeoZSFospYWH7FAyoHNMXsDF6Z3gqApZvuFeMs8xHkpRAFV48xp97Mn59"
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
` }, { uri: "https://gs-body.vc4qi.example/credentials/TR-3", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-ugB2xZhh/f2wPtTk+3qjYkisxBW7AG+T48h/nzLCH53Gg9tWBL/6G4YOvVJLixle", text: `{
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
      "digestSRI": "sha384-pucloC8OIjAE+Fa/N11cwYokpwjGWPXCxY9GnldgN9lI1BH/8uu4ZSq/d2vwaEno"
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
    "proofValue": "z4gf9zNRvAp9ozo6H4vqfXx1zoGz6F26y9Sxf7PT6YsBsQP1HMuEJxD4yNnSJjPGBkogWNoLy9f4QwQmgc4ipVyc7"
  }
}
` }, { uri: "https://gs-body.vc4qi.example/credentials/GSC-1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-UOTxfMuDnyfNRIIYF2G29J54RELn1J8mRFFAlRmgVoC+i+UGMds90syg2cHd7v7p", text: `{
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
      "digestSRI": "sha384-pucloC8OIjAE+Fa/N11cwYokpwjGWPXCxY9GnldgN9lI1BH/8uu4ZSq/d2vwaEno"
    },
    {
      "id": "https://zls.vc4qi.example/credentials/GS-S",
      "digestSRI": "sha384-bKh53Osb+FYqJFUuUUX7XRZvi62I0mslE9R9fcOkkbLQFgRx6fI5xjzQTaoUyyKD"
    },
    {
      "id": "https://gs-body.vc4qi.example/credentials/TR-1",
      "digestSRI": "sha384-17DHQQIhOeh9jytEohqQoap9t5fqBy1g/PhH4ADr3XZWSxDKONFx62rCx2iZLhle"
    },
    {
      "id": "https://gs-body.vc4qi.example/credentials/FI-1",
      "digestSRI": "sha384-v0pM3hITTWE51s8i9lyiJcfMdmiImH9jsXGZEZRwg9ORVvyN6SWqd5N3aS6H3TfG"
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
    "proofValue": "z3NMyikkbTdJWFb5FxjMXwVZiSMcusydcDgtmEz1w2Hd9B9o81weVZvTd5kNfPkREyZmok65nQUwYzjkqsU8YdZNH"
  }
}
` }, { uri: "https://gs-body.vc4qi.example/credentials/GSC-2", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-hjQd718hI+Ax4KJroKJDDC05J+5Y8MJv3fKfJf6XVpbzOJDBt5H2vvKmk1RTtzEq", text: `{
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
      "digestSRI": "sha384-pucloC8OIjAE+Fa/N11cwYokpwjGWPXCxY9GnldgN9lI1BH/8uu4ZSq/d2vwaEno"
    },
    {
      "id": "https://zls.vc4qi.example/credentials/GS-S",
      "digestSRI": "sha384-bKh53Osb+FYqJFUuUUX7XRZvi62I0mslE9R9fcOkkbLQFgRx6fI5xjzQTaoUyyKD"
    },
    {
      "id": "https://gs-body.vc4qi.example/credentials/TR-3",
      "digestSRI": "sha384-ugB2xZhh/f2wPtTk+3qjYkisxBW7AG+T48h/nzLCH53Gg9tWBL/6G4YOvVJLixle"
    },
    {
      "id": "https://gs-body.vc4qi.example/credentials/FI-1",
      "digestSRI": "sha384-v0pM3hITTWE51s8i9lyiJcfMdmiImH9jsXGZEZRwg9ORVvyN6SWqd5N3aS6H3TfG"
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
    "proofValue": "zCBc7W4dk6Phfhoyo73R29RD15xQtfWGwFc81U26PvGdnYXP7boX6SxNHpGfRtJerPb8WCUEZqkhcLPnvw7w2VHo"
  }
}
` }, { uri: "https://gs-body.vc4qi.example/credentials/GSC-3", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-btpU7gR/+w9XRgDYdroKz/z3BHTGQl2FZELCfUMliVN2r9eQyNQ8oI/ijh3dyAvA", text: `{
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
      "digestSRI": "sha384-pucloC8OIjAE+Fa/N11cwYokpwjGWPXCxY9GnldgN9lI1BH/8uu4ZSq/d2vwaEno"
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
      "digestSRI": "sha384-v0pM3hITTWE51s8i9lyiJcfMdmiImH9jsXGZEZRwg9ORVvyN6SWqd5N3aS6H3TfG"
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
    "proofValue": "z23Gr6oom9dLYaEWyqHRtHmcKJ9FAYkRPLJT2UmckXdKU2ST2VmL1W5WgAzq8SzvhMBEzFYCv3XpxYSmsVB2ZHYvB"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/DPP-1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-hEM11/ZCYJiiXZOTLC5bTclD1x1LghBno8GW0Gtyg1LA3GNB1yalEJKIBHT63HEd", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://maker.vc4qi.example/credentials/DPP-1",
  "type": [
    "VerifiableCredential",
    "GsProductPassport"
  ],
  "issuer": "https://maker.vc4qi.example/controller",
  "validFrom": "2026-05-10T00:00:00Z",
  "validUntil": "2036-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/product-passport.json",
    "type": "JsonSchema"
  },
  "name": "GS mark, hair-dryer-hd-01 unit 0042",
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
      "digestSRI": "sha384-UOTxfMuDnyfNRIIYF2G29J54RELn1J8mRFFAlRmgVoC+i+UGMds90syg2cHd7v7p"
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
    "proofValue": "zTMkb1DzkZ7NPVWxquQCJFoKuQhghzmxMY45VnAFbuMHN8yyBC1JmXXKg5TqXxW5FanQ7WCWTCuiJanKDuAjzCBL"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/DPP-2", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-r15l8BfRRREK4/KgNMhJEAddFFn50ewrzmAsQz1R+F4CuLr6JCl2A4/N5HmyQq0c", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://maker.vc4qi.example/credentials/DPP-2",
  "type": [
    "VerifiableCredential",
    "GsProductPassport"
  ],
  "issuer": "https://maker.vc4qi.example/controller",
  "validFrom": "2026-05-10T00:00:00Z",
  "validUntil": "2036-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/product-passport.json",
    "type": "JsonSchema"
  },
  "name": "GS mark, toy-001 unit 0007",
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
      "digestSRI": "sha384-hjQd718hI+Ax4KJroKJDDC05J+5Y8MJv3fKfJf6XVpbzOJDBt5H2vvKmk1RTtzEq"
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
    "proofValue": "z5Kns2m7JxDm1n51gVzHYPXfDVWtcEAFPZb3nDTMgfDQqNCkEcWUFpZNhwMqjbLumG6MBkGmWCvc4JPVTLpqfNuyb"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/DPP-3", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-TPYXesawYPlg7no99fg1qp91YNVXno6c9+kSn2EfBR7/4AfK5qCh3EKmkKXqKdLD", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://maker.vc4qi.example/credentials/DPP-3",
  "type": [
    "VerifiableCredential",
    "GsProductPassport"
  ],
  "issuer": "https://maker.vc4qi.example/controller",
  "validFrom": "2026-05-12T00:00:00Z",
  "validUntil": "2036-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/product-passport.json",
    "type": "JsonSchema"
  },
  "name": "GS mark, hair-dryer-hd-02 unit 0011",
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
      "digestSRI": "sha384-btpU7gR/+w9XRgDYdroKz/z3BHTGQl2FZELCfUMliVN2r9eQyNQ8oI/ijh3dyAvA"
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
    "proofValue": "z3e49hazGswS2YQXmxq7y52rKoqHQF6L7DL8aN2EKduWFf65cX8iUNtedYh4UVhnEkZ7XhwYktjvjyeujR545WCu9"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/DPP-4", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-XkKY0uwVhevnl1nvwU+reu5UFoXBa6gO4ZyxCsr0Km7noJy8W4XfQ6f8gmxAr5BQ", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://maker.vc4qi.example/credentials/DPP-4",
  "type": [
    "VerifiableCredential",
    "GsProductPassport"
  ],
  "issuer": "https://maker.vc4qi.example/controller",
  "validFrom": "2026-02-15T00:00:00Z",
  "validUntil": "2036-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/product-passport.json",
    "type": "JsonSchema"
  },
  "name": "GS mark, hair-dryer-hd-01 unit 0001",
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
      "digestSRI": "sha384-UOTxfMuDnyfNRIIYF2G29J54RELn1J8mRFFAlRmgVoC+i+UGMds90syg2cHd7v7p"
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
    "proofValue": "z26TcgYJUCwW3umFQWYBX59WqQHhTEXGCv5DgKiRFSQuiPZpejj1gmGqXym7MiqkhW3rzaz6yz4ERRE2MSTKzWYQV"
  }
}
` }, { uri: "https://clone.vc4qi.example/credentials/DPP-5", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-uPaJmjij7dfPsDaEyKE6z1+qPFnb+iHx+W4mV2zwYFUkRg6+NTp1FdZbuqKB79+Q", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://clone.vc4qi.example/credentials/DPP-5",
  "type": [
    "VerifiableCredential",
    "GsProductPassport"
  ],
  "issuer": "https://clone.vc4qi.example/controller",
  "validFrom": "2026-05-10T00:00:00Z",
  "validUntil": "2036-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/product-passport.json",
    "type": "JsonSchema"
  },
  "name": "GS mark, hair-dryer-hd-01 unit 9999",
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
      "digestSRI": "sha384-UOTxfMuDnyfNRIIYF2G29J54RELn1J8mRFFAlRmgVoC+i+UGMds90syg2cHd7v7p"
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
    "proofValue": "z5dfT1WV4EegUo35xEhUNptwB4AYLCxJiGcFQUUgwwpNuSwonnXdiUqZCWPNPWA6V6Wn35WhVXqUA4ghukdLhPLqo"
  }
}
` }] } };
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Nd(e) {
  return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function As(e, ...t) {
  if (!Nd(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function Ks(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Ld(e, t) {
  As(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error("digestInto() expects output buffer of length at least " + n);
}
function fn(...e) {
  for (let t = 0; t < e.length; t++)
    e[t].fill(0);
}
function ir(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Xe(e, t) {
  return e << 32 - t | e >>> t;
}
function Dd(e) {
  if (typeof e != "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(e));
}
function Oc(e) {
  return typeof e == "string" && (e = Dd(e)), As(e), e;
}
class zd {
}
function qs(e) {
  const t = (r) => e().update(Oc(r)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
function Ud(e, t, n, r) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, r);
  const c = BigInt(32), i = BigInt(4294967295), s = Number(n >> c & i), a = Number(n & i), o = r ? 4 : 0, p = r ? 0 : 4;
  e.setUint32(t + o, s, r), e.setUint32(t + p, a, r);
}
function Vd(e, t, n) {
  return e & t ^ ~e & n;
}
function Fd(e, t, n) {
  return e & t ^ e & n ^ t & n;
}
class Nc extends zd {
  constructor(t, n, r, c) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = n, this.padOffset = r, this.isLE = c, this.buffer = new Uint8Array(t), this.view = ir(this.buffer);
  }
  update(t) {
    Ks(this), t = Oc(t), As(t);
    const { view: n, buffer: r, blockLen: c } = this, i = t.length;
    for (let s = 0; s < i; ) {
      const a = Math.min(c - this.pos, i - s);
      if (a === c) {
        const o = ir(t);
        for (; c <= i - s; s += c)
          this.process(o, s);
        continue;
      }
      r.set(t.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === c && (this.process(n, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    Ks(this), Ld(t, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: c, isLE: i } = this;
    let { pos: s } = this;
    n[s++] = 128, fn(this.buffer.subarray(s)), this.padOffset > c - s && (this.process(r, 0), s = 0);
    for (let g = s; g < c; g++)
      n[g] = 0;
    Ud(r, c - 8, BigInt(this.length * 8), i), this.process(r, 0);
    const a = ir(t), o = this.outputLen;
    if (o % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const p = o / 4, m = this.get();
    if (p > m.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let g = 0; g < p; g++)
      a.setUint32(4 * g, m[g], i);
  }
  digest() {
    const { buffer: t, outputLen: n } = this;
    this.digestInto(t);
    const r = t.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: n, buffer: r, length: c, finished: i, destroyed: s, pos: a } = this;
    return t.destroyed = s, t.finished = i, t.length = c, t.pos = a, c % n && t.buffer.set(r), t;
  }
  clone() {
    return this._cloneInto();
  }
}
const pt = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), be = /* @__PURE__ */ Uint32Array.from([
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
]), we = /* @__PURE__ */ Uint32Array.from([
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
]), Sn = /* @__PURE__ */ BigInt(2 ** 32 - 1), Qs = /* @__PURE__ */ BigInt(32);
function Gd(e, t = !1) {
  return t ? { h: Number(e & Sn), l: Number(e >> Qs & Sn) } : { h: Number(e >> Qs & Sn) | 0, l: Number(e & Sn) | 0 };
}
function Bd(e, t = !1) {
  const n = e.length;
  let r = new Uint32Array(n), c = new Uint32Array(n);
  for (let i = 0; i < n; i++) {
    const { h: s, l: a } = Gd(e[i], t);
    [r[i], c[i]] = [s, a];
  }
  return [r, c];
}
const Ws = (e, t, n) => e >>> n, Xs = (e, t, n) => e << 32 - n | t >>> n, Mt = (e, t, n) => e >>> n | t << 32 - n, kt = (e, t, n) => e << 32 - n | t >>> n, In = (e, t, n) => e << 64 - n | t >>> n - 32, An = (e, t, n) => e >>> n - 32 | t << 64 - n;
function st(e, t, n, r) {
  const c = (t >>> 0) + (r >>> 0);
  return { h: e + n + (c / 2 ** 32 | 0) | 0, l: c | 0 };
}
const Jd = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0), Hd = (e, t, n, r) => t + n + r + (e / 2 ** 32 | 0) | 0, Zd = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0), Kd = (e, t, n, r, c) => t + n + r + c + (e / 2 ** 32 | 0) | 0, Qd = (e, t, n, r, c) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (c >>> 0), Wd = (e, t, n, r, c, i) => t + n + r + c + i + (e / 2 ** 32 | 0) | 0, Xd = /* @__PURE__ */ Uint32Array.from([
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
]), ft = /* @__PURE__ */ new Uint32Array(64);
class Yd extends Nc {
  constructor(t = 32) {
    super(64, t, 8, !1), this.A = pt[0] | 0, this.B = pt[1] | 0, this.C = pt[2] | 0, this.D = pt[3] | 0, this.E = pt[4] | 0, this.F = pt[5] | 0, this.G = pt[6] | 0, this.H = pt[7] | 0;
  }
  get() {
    const { A: t, B: n, C: r, D: c, E: i, F: s, G: a, H: o } = this;
    return [t, n, r, c, i, s, a, o];
  }
  // prettier-ignore
  set(t, n, r, c, i, s, a, o) {
    this.A = t | 0, this.B = n | 0, this.C = r | 0, this.D = c | 0, this.E = i | 0, this.F = s | 0, this.G = a | 0, this.H = o | 0;
  }
  process(t, n) {
    for (let g = 0; g < 16; g++, n += 4)
      ft[g] = t.getUint32(n, !1);
    for (let g = 16; g < 64; g++) {
      const u = ft[g - 15], f = ft[g - 2], w = Xe(u, 7) ^ Xe(u, 18) ^ u >>> 3, x = Xe(f, 17) ^ Xe(f, 19) ^ f >>> 10;
      ft[g] = x + ft[g - 7] + w + ft[g - 16] | 0;
    }
    let { A: r, B: c, C: i, D: s, E: a, F: o, G: p, H: m } = this;
    for (let g = 0; g < 64; g++) {
      const u = Xe(a, 6) ^ Xe(a, 11) ^ Xe(a, 25), f = m + u + Vd(a, o, p) + Xd[g] + ft[g] | 0, x = (Xe(r, 2) ^ Xe(r, 13) ^ Xe(r, 22)) + Fd(r, c, i) | 0;
      m = p, p = o, o = a, a = s + f | 0, s = i, i = c, c = r, r = f + x | 0;
    }
    r = r + this.A | 0, c = c + this.B | 0, i = i + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, o = o + this.F | 0, p = p + this.G | 0, m = m + this.H | 0, this.set(r, c, i, s, a, o, p, m);
  }
  roundClean() {
    fn(ft);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), fn(this.buffer);
  }
}
const Lc = Bd([
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
].map((e) => BigInt(e))), el = Lc[0], tl = Lc[1], ht = /* @__PURE__ */ new Uint32Array(80), mt = /* @__PURE__ */ new Uint32Array(80);
class Dc extends Nc {
  constructor(t = 64) {
    super(128, t, 16, !1), this.Ah = we[0] | 0, this.Al = we[1] | 0, this.Bh = we[2] | 0, this.Bl = we[3] | 0, this.Ch = we[4] | 0, this.Cl = we[5] | 0, this.Dh = we[6] | 0, this.Dl = we[7] | 0, this.Eh = we[8] | 0, this.El = we[9] | 0, this.Fh = we[10] | 0, this.Fl = we[11] | 0, this.Gh = we[12] | 0, this.Gl = we[13] | 0, this.Hh = we[14] | 0, this.Hl = we[15] | 0;
  }
  // prettier-ignore
  get() {
    const { Ah: t, Al: n, Bh: r, Bl: c, Ch: i, Cl: s, Dh: a, Dl: o, Eh: p, El: m, Fh: g, Fl: u, Gh: f, Gl: w, Hh: x, Hl: v } = this;
    return [t, n, r, c, i, s, a, o, p, m, g, u, f, w, x, v];
  }
  // prettier-ignore
  set(t, n, r, c, i, s, a, o, p, m, g, u, f, w, x, v) {
    this.Ah = t | 0, this.Al = n | 0, this.Bh = r | 0, this.Bl = c | 0, this.Ch = i | 0, this.Cl = s | 0, this.Dh = a | 0, this.Dl = o | 0, this.Eh = p | 0, this.El = m | 0, this.Fh = g | 0, this.Fl = u | 0, this.Gh = f | 0, this.Gl = w | 0, this.Hh = x | 0, this.Hl = v | 0;
  }
  process(t, n) {
    for (let y = 0; y < 16; y++, n += 4)
      ht[y] = t.getUint32(n), mt[y] = t.getUint32(n += 4);
    for (let y = 16; y < 80; y++) {
      const d = ht[y - 15] | 0, l = mt[y - 15] | 0, h = Mt(d, l, 1) ^ Mt(d, l, 8) ^ Ws(d, l, 7), I = kt(d, l, 1) ^ kt(d, l, 8) ^ Xs(d, l, 7), A = ht[y - 2] | 0, P = mt[y - 2] | 0, T = Mt(A, P, 19) ^ In(A, P, 61) ^ Ws(A, P, 6), j = kt(A, P, 19) ^ An(A, P, 61) ^ Xs(A, P, 6), O = Zd(I, j, mt[y - 7], mt[y - 16]), R = Kd(O, h, T, ht[y - 7], ht[y - 16]);
      ht[y] = R | 0, mt[y] = O | 0;
    }
    let { Ah: r, Al: c, Bh: i, Bl: s, Ch: a, Cl: o, Dh: p, Dl: m, Eh: g, El: u, Fh: f, Fl: w, Gh: x, Gl: v, Hh: S, Hl: b } = this;
    for (let y = 0; y < 80; y++) {
      const d = Mt(g, u, 14) ^ Mt(g, u, 18) ^ In(g, u, 41), l = kt(g, u, 14) ^ kt(g, u, 18) ^ An(g, u, 41), h = g & f ^ ~g & x, I = u & w ^ ~u & v, A = Qd(b, l, I, tl[y], mt[y]), P = Wd(A, S, d, h, el[y], ht[y]), T = A | 0, j = Mt(r, c, 28) ^ In(r, c, 34) ^ In(r, c, 39), O = kt(r, c, 28) ^ An(r, c, 34) ^ An(r, c, 39), R = r & i ^ r & a ^ i & a, E = c & s ^ c & o ^ s & o;
      S = x | 0, b = v | 0, x = f | 0, v = w | 0, f = g | 0, w = u | 0, { h: g, l: u } = st(p | 0, m | 0, P | 0, T | 0), p = a | 0, m = o | 0, a = i | 0, o = s | 0, i = r | 0, s = c | 0;
      const D = Jd(T, O, E);
      r = Hd(D, P, j, R), c = D | 0;
    }
    ({ h: r, l: c } = st(this.Ah | 0, this.Al | 0, r | 0, c | 0)), { h: i, l: s } = st(this.Bh | 0, this.Bl | 0, i | 0, s | 0), { h: a, l: o } = st(this.Ch | 0, this.Cl | 0, a | 0, o | 0), { h: p, l: m } = st(this.Dh | 0, this.Dl | 0, p | 0, m | 0), { h: g, l: u } = st(this.Eh | 0, this.El | 0, g | 0, u | 0), { h: f, l: w } = st(this.Fh | 0, this.Fl | 0, f | 0, w | 0), { h: x, l: v } = st(this.Gh | 0, this.Gl | 0, x | 0, v | 0), { h: S, l: b } = st(this.Hh | 0, this.Hl | 0, S | 0, b | 0), this.set(r, c, i, s, a, o, p, m, g, u, f, w, x, v, S, b);
  }
  roundClean() {
    fn(ht, mt);
  }
  destroy() {
    fn(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class nl extends Dc {
  constructor() {
    super(48), this.Ah = be[0] | 0, this.Al = be[1] | 0, this.Bh = be[2] | 0, this.Bl = be[3] | 0, this.Ch = be[4] | 0, this.Cl = be[5] | 0, this.Dh = be[6] | 0, this.Dl = be[7] | 0, this.Eh = be[8] | 0, this.El = be[9] | 0, this.Fh = be[10] | 0, this.Fl = be[11] | 0, this.Gh = be[12] | 0, this.Gl = be[13] | 0, this.Hh = be[14] | 0, this.Hl = be[15] | 0;
  }
}
const il = /* @__PURE__ */ qs(() => new Yd()), rl = /* @__PURE__ */ qs(() => new Dc()), sl = /* @__PURE__ */ qs(() => new nl()), al = il, ol = rl, cl = sl;
class dl {
  constructor(t) {
    rt(this, "_chunks", []);
    rt(this, "_algo");
    this._algo = t === "sha384" ? "sha384" : t === "sha512" ? "sha512" : "sha256";
  }
  update(t, n) {
    const r = typeof t == "string" ? new TextEncoder().encode(t) : t;
    return this._chunks.push(r), this;
  }
  digest(t) {
    const n = this._chunks.reduce((s, a) => s + a.length, 0), r = new Uint8Array(n);
    let c = 0;
    for (const s of this._chunks)
      r.set(s, c), c += s.length;
    let i;
    return this._algo === "sha384" ? i = cl(r) : this._algo === "sha512" ? i = ol(r) : i = al(r), t === "base64" ? btoa(String.fromCharCode(...i)) : t === "hex" ? Array.from(i).map((s) => s.toString(16).padStart(2, "0")).join("") : i;
  }
}
function us(e) {
  return new dl(e);
}
class _e extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "CatalogError";
  }
}
function ll(e, t) {
  if (e.trim().length === 0)
    throw new _e("INVALID_RESOURCE", `${t} must be nonempty.`);
}
function Di(e) {
  return `sha384-${us("sha384").update(e).digest("base64")}`;
}
function Ys(e) {
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
          if (!(c instanceof _e)) throw c;
          t.set(n, c);
        }
      const r = t.get(n);
      if (r instanceof _e) throw r;
      return { ...r, bytes: Uint8Array.from(r.bytes) };
    }
  };
}
var Ht;
class ul {
  constructor(t) {
    xn(this, Ht, /* @__PURE__ */ new Map());
    for (const n of t) {
      for (const [c, i] of Object.entries({
        uri: n.uri,
        mediaType: n.mediaType,
        origin: n.origin,
        version: n.version
      })) ll(i, c);
      if (We(this, Ht).has(n.uri))
        throw new _e("DUPLICATE_RESOURCE", `Duplicate static resource: ${n.uri}`);
      const r = Di(n.bytes);
      if (r !== n.digestSRI)
        throw new _e(
          "INTEGRITY_MISMATCH",
          `Static resource ${n.uri} has ${r}; expected ${n.digestSRI}.`
        );
      We(this, Ht).set(n.uri, { ...n, bytes: Uint8Array.from(n.bytes) });
    }
  }
  openSession(t) {
    if (!Number.isSafeInteger(t.maxResources) || t.maxResources <= 0 || !Number.isSafeInteger(t.maxBytes) || t.maxBytes <= 0)
      throw new _e("INVALID_RESOURCE", "Catalog budgets must be positive safe integers.");
    return new pl(We(this, Ht), Object.freeze({ ...t }));
  }
}
Ht = new WeakMap();
var Zt, Kt;
class pl {
  constructor(t, n) {
    xn(this, Zt, 0);
    xn(this, Kt, 0);
    this.resources = t, this.budget = n;
  }
  get usage() {
    return Object.freeze({ resources: We(this, Zt), bytes: We(this, Kt) });
  }
  resolve(t) {
    const n = this.resources.get(t);
    if (!n)
      throw new _e("RESOURCE_NOT_FOUND", `Static resource is not installed: ${t}`);
    if (We(this, Zt) + 1 > this.budget.maxResources || We(this, Kt) + n.bytes.byteLength > this.budget.maxBytes)
      throw new _e("RESOURCE_BUDGET_EXCEEDED", `Static resource budget exceeded at ${t}.`);
    return tr(this, Zt, We(this, Zt) + 1), tr(this, Kt, We(this, Kt) + n.bytes.byteLength), { ...n, bytes: Uint8Array.from(n.bytes) };
  }
}
Zt = new WeakMap(), Kt = new WeakMap();
function fl(e) {
  return async (t) => {
    const n = e.resolve(t);
    if (n.mediaType !== "application/json" && n.mediaType !== "application/ld+json" && !n.mediaType.endsWith("+json"))
      throw new _e(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} has unsupported media type ${n.mediaType}.`
      );
    let r;
    try {
      const c = new TextDecoder("utf-8", { fatal: !0 }).decode(n.bytes);
      r = JSON.parse(c);
    } catch (c) {
      throw new _e(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} is not valid UTF-8 JSON: ${String(c)}.`
      );
    }
    return { contextUrl: null, document: r, documentUrl: t };
  };
}
const ea = "https://vc4qi.example/bindings/rm/1", rr = [
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
function qn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function zc(e) {
  if (e !== null && typeof e == "object") {
    for (const t of Object.values(e)) zc(t);
    Object.freeze(e);
  }
  return e;
}
function hl(e) {
  if (!qn(e)) throw new TypeError("Binding manifest must be an object.");
  if (Object.keys(e).length !== rr.length || rr.some((n) => !Object.hasOwn(e, n)))
    throw new TypeError("Binding manifest must contain exactly the supported top-level categories.");
  if (typeof e.id != "string" || e.id.length === 0 || typeof e.version != "string" || e.version.length === 0 || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Binding manifest identity, version, or status is invalid.");
  if (!qn(e.installation) || e.installation.status !== "incomplete" && e.installation.status !== "installable" || typeof e.installation.reason != "string" || e.installation.reason.length === 0 || !Array.isArray(e.installation.pendingResources) || e.installation.pendingResources.some((n) => typeof n != "string" || n.length === 0))
    throw new TypeError("Binding manifest installation state is invalid.");
  if (!Array.isArray(e.factMappings) || e.factMappings.length === 0 || e.factMappings.some((n) => !qn(n)))
    throw new TypeError("Binding manifest factMappings must be a nonempty object array.");
  for (const n of rr.slice(4))
    if (!(n === "installation" || n === "factMappings") && (!qn(e[n]) || Object.keys(e[n]).length === 0))
      throw new TypeError(`Binding manifest ${n} must be a nonempty object.`);
  return zc(structuredClone(e));
}
const Qt = "https://www.w3.org/ns/credentials/v2", ml = "https://vc4qi.example/contexts/rm/1", Ot = "https://vc4qi.example/schemas/rm/1/", yl = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", gl = BigInt(58);
function vl(e) {
  if (e.length === 0) return new Uint8Array(0);
  let t = 0;
  for (const s of e) {
    if (s !== "1") break;
    t++;
  }
  let n = 0n;
  for (const s of e) {
    const a = yl.indexOf(s);
    if (a === -1) throw new Error(`Invalid base58btc character: '${s}'`);
    n = n * gl + BigInt(a);
  }
  const r = [];
  for (; n > 0n; )
    r.push(Number(n & 0xffn)), n >>= 8n;
  r.reverse();
  const c = Uint8Array.from(r), i = new Uint8Array(t + c.length);
  return i.set(c, t), i;
}
function Uc(e) {
  if (!e.startsWith("z"))
    throw new Error(`Expected multibase base58btc prefix 'z', got '${e[0]}'`);
  return vl(e.slice(1));
}
const ta = [237, 1], bl = ["revoked", "expires"];
function ye(e, t, n, r = {}) {
  return Object.freeze({ state: e, code: t, reason: n, ...r });
}
function Ri(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function wl(e) {
  if (typeof e == "string" && e.length > 0) return e;
  if (Ri(e) && typeof e.id == "string" && e.id.length > 0) return e.id;
}
function xl(e) {
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
function Sl(e) {
  if (typeof e != "string" || !e.startsWith("z")) return;
  let t;
  try {
    t = Uc(e);
  } catch {
    return;
  }
  if (!(t.length !== 34 || t[0] !== ta[0] || t[1] !== ta[1]))
    return t.slice(2);
}
function Il(e, t, n) {
  const r = wl(e);
  if (r === void 0)
    return ye("not_established", "ISSUER_MISSING", "The credential has no issuer identifier.");
  if (typeof t != "string")
    return ye("contradicted", "MALFORMED_METHOD", "The proof names no verification method.");
  const c = xl(t);
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
  let i, s;
  try {
    const u = n.resolve(c);
    s = u.digestSRI, i = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(u.bytes));
  } catch (u) {
    return u instanceof _e ? ye(
      "not_established",
      "CONTROLLER_NOT_INSTALLED",
      `Controller document ${c} is not available: ${u.code}.`
    ) : ye(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${c} is not valid UTF-8 JSON.`
    );
  }
  if (!Ri(i))
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
  const o = (Array.isArray(i.verificationMethod) ? i.verificationMethod : []).filter((u) => Ri(u) && u.id === t);
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
  if (bl.some((u) => Object.hasOwn(p, u)))
    return ye(
      "not_established",
      "METHOD_LIFECYCLE_UNSUPPORTED",
      "Key revocation/expiry metadata is not supported in the initial slice."
    );
  const m = Sl(p.publicKeyMultibase);
  if (m === void 0)
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
    { publicKey: m, verificationMethod: t, controllerDocumentDigest: s }
  ) : g.some((u) => Ri(u) && u.id === t) ? ye(
    "not_established",
    "EMBEDDED_METHOD_UNSUPPORTED",
    "Embedded assertionMethod entries are not supported; a reference is required."
  ) : ye(
    "contradicted",
    "NOT_ASSERTION_METHOD",
    `${t} is not authorized for assertionMethod.`
  );
}
const na = ["accept-successor", "require-extension", "none"], Al = ["value-at-most-limit", "value-plus-expanded-uncertainty-at-most-limit"], ql = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/;
function Ue(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const Me = (e) => typeof e == "string" && e.trim().length > 0, sr = (e) => Array.isArray(e) && e.length > 0 && e.every(Me) && new Set(e).size === e.length;
function $l(e) {
  if (!Ue(e) || !Me(e.id) || !Me(e.version) || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Reliance profile identity, version or status is invalid.");
  const t = e.binding;
  if (!Ue(t) || !Me(t.id) || !Me(t.version))
    throw new TypeError("Reliance profile must name exactly one binding and version.");
  if (!Array.isArray(e.trustAnchors) || e.trustAnchors.some((p) => !Ue(p) || !Me(p.id) || !sr(p.purposes)))
    throw new TypeError("Reliance profile trustAnchors must list anchors with explicit purposes.");
  const n = e.authority;
  if (!Ue(n) || !sr(n.certificateRoutes) || !Array.isArray(n.globalRestrictions) || !n.globalRestrictions.every(Me) || !Number.isSafeInteger(n.maxRoutes) || n.maxRoutes <= 0)
    throw new TypeError("Reliance profile authority needs certificateRoutes, globalRestrictions and a positive maxRoutes.");
  const r = e.credentialStatus;
  if (!Ue(r) || typeof r.required != "boolean" || !sr(r.purposes) || !Number.isSafeInteger(r.maxAgeSeconds) || r.maxAgeSeconds <= 0)
    throw new TypeError("Reliance profile credentialStatus needs required, purposes and a positive maxAgeSeconds.");
  const c = e.mapping;
  if (!Ue(c) || !na.includes(c.methodSuccession))
    throw new TypeError(`Reliance profile mapping.methodSuccession must be one of ${na.join(", ")}.`);
  const i = e.conformity;
  if (!Ue(i) || !Array.isArray(i.requirements) || !Array.isArray(i.decisionRules) || i.requirements.some((p) => !Ue(p) || !Me(p.id) || !Me(p.propertyIri) || !Me(p.quantityKindIri) || !Ue(p.upperLimit) || typeof p.upperLimit.value != "string" || !ql.test(p.upperLimit.value) || !Me(p.upperLimit.unit)) || i.decisionRules.some((p) => !Ue(p) || !Me(p.id) || !Al.includes(p.acceptWhen)))
    throw new TypeError("Reliance profile conformity needs requirements (id, propertyIri, quantityKindIri, upperLimit) and decisionRules (id, acceptWhen).");
  if (e.bindingRules !== void 0 && !Ue(e.bindingRules))
    throw new TypeError("Reliance profile bindingRules must be an object when present.");
  const s = i.requirements, a = i.decisionRules, o = [...s.map((p) => p.id), ...a.map((p) => p.id)];
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
      requirements: Object.freeze(s.map((p) => Object.freeze({
        id: p.id,
        propertyIri: p.propertyIri,
        quantityKindIri: p.quantityKindIri,
        upperLimit: Object.freeze({ value: p.upperLimit.value, unit: p.upperLimit.unit })
      }))),
      decisionRules: Object.freeze(a.map((p) => Object.freeze({ id: p.id, acceptWhen: p.acceptWhen })))
    }),
    bindingRules: Object.freeze({ ...e.bindingRules })
  });
}
function le(e, t) {
  if (e.trim().length === 0)
    throw new TypeError(`${t} must be a non-empty string.`);
}
function ar(e, t) {
  if (new Set(e).size !== e.length)
    throw new TypeError(`${t} must not contain duplicates.`);
}
function ps(e, t) {
  const n = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/.exec(e);
  if (!n)
    throw new TypeError(`${t} must be an ISO 8601 date-time with an explicit offset.`);
  const [, r, c, i, s, a, o] = n, p = n[7], m = Number(r), g = Number(c), u = Number(i), f = Number(s), w = Number(a), x = Number(o), v = /* @__PURE__ */ new Date(0);
  v.setUTCFullYear(m, g - 1, u), v.setUTCHours(0, 0, 0, 0);
  const S = v.getUTCFullYear() !== m || v.getUTCMonth() !== g - 1 || v.getUTCDate() !== u, b = p === "Z" ? null : /^([+-])(\d{2}):(\d{2})$/.exec(p), y = b !== null && (Number(b[2]) > 23 || Number(b[3]) > 59);
  if (m < 1 || S || f > 23 || w > 59 || x > 59 || y || !Number.isFinite(Date.parse(e)))
    throw new TypeError(`${t} must be a valid ISO 8601 date-time.`);
}
function or(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0)
    throw new TypeError(`${t} must be a positive safe integer.`);
}
function Ci(e, t) {
  le(e.id, `${t}.id`), le(e.version, `${t}.version`);
}
function Ti(e) {
  return Object.freeze({ id: e.id, version: e.version });
}
function on(e) {
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
function Rl(e) {
  if (le(e.requestId, "requestId"), le(e.targetId, "targetId"), le(e.purpose, "purpose"), le(e.trustConfigId, "trustConfigId"), Ci(e.binding, "binding"), Ci(e.profile, "profile"), ps(e.evaluationTime, "evaluationTime"), ps(e.activityTime, "activityTime"), e.selectedClaims.length === 0)
    throw new TypeError("selectedClaims must contain at least one claim.");
  for (const [i, s] of e.selectedClaims.entries())
    le(s.id, `selectedClaims[${i}].id`), le(s.sourcePointer, `selectedClaims[${i}].sourcePointer`);
  ar(e.selectedClaims.map((i) => i.id), "selected claim IDs"), ar(e.selectedClaims.map((i) => i.sourcePointer), "selected claim source pointers");
  for (const [i, s] of e.suppliedEvidence.entries())
    le(s, `suppliedEvidence[${i}]`);
  ar(e.suppliedEvidence, "suppliedEvidence"), or(e.resolverLimits.maxResources, "resolverLimits.maxResources"), or(e.resolverLimits.maxDepth, "resolverLimits.maxDepth"), or(e.resolverLimits.maxBytes, "resolverLimits.maxBytes"), e.conformity && (le(e.conformity.requirementId, "conformity.requirementId"), le(e.conformity.decisionRuleId, "conformity.decisionRuleId"));
  const t = Object.freeze(e.selectedClaims.map((i) => Object.freeze({
    id: i.id,
    sourcePointer: i.sourcePointer
  }))), n = Object.freeze([...e.suppliedEvidence]), r = Object.freeze({ ...e.resolverLimits }), c = e.conformity ? Object.freeze({ ...e.conformity }) : void 0;
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    selectedClaims: t,
    purpose: e.purpose,
    binding: Ti(e.binding),
    profile: Ti(e.profile),
    trustConfigId: e.trustConfigId,
    evaluationTime: e.evaluationTime,
    activityTime: e.activityTime,
    suppliedEvidence: n,
    resolverLimits: r,
    ...c ? { conformity: c } : {}
  });
}
function _l(e, t) {
  if (!Number.isInteger(e.gate) || e.gate < 0 || e.gate > 6)
    throw new TypeError(`trace[${t}].gate must be a canonical gate number 0-6.`);
  le(e.nodeUse, `trace[${t}].nodeUse`), le(e.predicate, `trace[${t}].predicate`), le(e.reason, `trace[${t}].reason`);
  const n = on({
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
function jl(e, t) {
  if (le(e.uri, `resources[${t}].uri`), !/^sha384-[A-Za-z0-9+/]{64}$/.test(e.digestSRI))
    throw new TypeError(`resources[${t}].digestSRI must be a SHA-384 SRI value.`);
  if (!["static", "artifact", "status"].includes(e.kind) || !["catalog", "supplied"].includes(e.source))
    throw new TypeError(`resources[${t}] has an unsupported kind or source.`);
  return ps(e.observedAt, `resources[${t}].observedAt`), Object.freeze({ ...e });
}
function zi(e) {
  if (le(e.requestId, "requestId"), le(e.targetId, "targetId"), Ci(e.binding, "binding"), Ci(e.profile, "profile"), e.artifactVerification.forEach((t, n) => le(t.artifactId, `artifactVerification[${n}].artifactId`)), e.authorization.forEach((t, n) => le(t.claimId, `authorization[${n}].claimId`)), e.support.forEach((t, n) => le(t.obligationId, `support[${n}].obligationId`)), e.conformity.requested)
    le(e.conformity.requirementId, "conformity.requirementId"), le(e.conformity.decisionRuleId, "conformity.decisionRuleId");
  else if (e.conformity.requested !== !1 || e.conformity.execution !== "not_run")
    throw new TypeError("Unrequested conformity must have execution state not_run.");
  if (!["accept", "reject", "not_established"].includes(e.decision))
    throw new TypeError(`Unsupported reliance decision: ${String(e.decision)}.`);
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: Ti(e.binding),
    profile: Ti(e.profile),
    artifactVerification: Object.freeze(e.artifactVerification.map((t) => on({
      ...t
    }))),
    authorization: Object.freeze(e.authorization.map((t) => Object.freeze({
      ...on(t),
      routeWitnessIds: Object.freeze([...t.routeWitnessIds])
    }))),
    support: Object.freeze(e.support.map((t) => Object.freeze({
      ...on(t),
      witnessIds: Object.freeze([...t.witnessIds])
    }))),
    conformity: e.conformity.requested ? on({ ...e.conformity }) : Object.freeze({ requested: !1, execution: "not_run" }),
    decision: e.decision,
    trace: Object.freeze((e.trace ?? []).map(_l)),
    resources: Object.freeze((e.resources ?? []).map(jl)),
    limitations: Object.freeze([...e.limitations ?? []])
  });
}
function Vc(e, t) {
  if (e.length === 0)
    throw new TypeError(`${t} requires at least one semantic state.`);
  for (const n of e)
    if (!["established", "contradicted", "not_established"].includes(n))
      throw new TypeError(`${t} received unsupported semantic state: ${String(n)}.`);
}
function Se(e) {
  return Vc(e, "semanticAnd"), e.includes("contradicted") ? "contradicted" : e.every((t) => t === "established") ? "established" : "not_established";
}
function mn(e) {
  return Vc(e, "semanticOr"), e.includes("established") ? "established" : e.every((t) => t === "contradicted") ? "contradicted" : "not_established";
}
function $s(e) {
  const t = Se(e);
  return t === "established" ? "accept" : t === "contradicted" ? "reject" : "not_established";
}
var ia = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Rs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Pl(e) {
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
var $n = { exports: {} }, cr = {}, at = {}, At = {}, dr = {}, lr = {}, ur = {}, ra;
function Mi() {
  return ra || (ra = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class n extends t {
      constructor(b) {
        if (super(), !e.IDENTIFIER.test(b))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = b;
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
      constructor(b) {
        super(), this._items = typeof b == "string" ? [b] : b;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const b = this._items[0];
        return b === "" || b === '""';
      }
      get str() {
        var b;
        return (b = this._str) !== null && b !== void 0 ? b : this._str = this._items.reduce((y, d) => `${y}${d}`, "");
      }
      get names() {
        var b;
        return (b = this._names) !== null && b !== void 0 ? b : this._names = this._items.reduce((y, d) => (d instanceof n && (y[d.str] = (y[d.str] || 0) + 1), y), {});
      }
    }
    e._Code = r, e.nil = new r("");
    function c(S, ...b) {
      const y = [S[0]];
      let d = 0;
      for (; d < b.length; )
        a(y, b[d]), y.push(S[++d]);
      return new r(y);
    }
    e._ = c;
    const i = new r("+");
    function s(S, ...b) {
      const y = [f(S[0])];
      let d = 0;
      for (; d < b.length; )
        y.push(i), a(y, b[d]), y.push(i, f(S[++d]));
      return o(y), new r(y);
    }
    e.str = s;
    function a(S, b) {
      b instanceof r ? S.push(...b._items) : b instanceof n ? S.push(b) : S.push(g(b));
    }
    e.addCodeArg = a;
    function o(S) {
      let b = 1;
      for (; b < S.length - 1; ) {
        if (S[b] === i) {
          const y = p(S[b - 1], S[b + 1]);
          if (y !== void 0) {
            S.splice(b - 1, 3, y);
            continue;
          }
          S[b++] = "+";
        }
        b++;
      }
    }
    function p(S, b) {
      if (b === '""')
        return S;
      if (S === '""')
        return b;
      if (typeof S == "string")
        return b instanceof n || S[S.length - 1] !== '"' ? void 0 : typeof b != "string" ? `${S.slice(0, -1)}${b}"` : b[0] === '"' ? S.slice(0, -1) + b.slice(1) : void 0;
      if (typeof b == "string" && b[0] === '"' && !(S instanceof n))
        return `"${S}${b.slice(1)}`;
    }
    function m(S, b) {
      return b.emptyStr() ? S : S.emptyStr() ? b : s`${S}${b}`;
    }
    e.strConcat = m;
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
    function v(S) {
      return new r(S.toString());
    }
    e.regexpCode = v;
  })(ur)), ur;
}
var pr = {}, sa;
function aa() {
  return sa || (sa = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Mi();
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
    class i extends t.Name {
      constructor(p, m) {
        super(m), this.prefix = p;
      }
      setValue(p, { property: m, itemIndex: g }) {
        this.value = p, this.scopePath = (0, t._)`.${new t.Name(m)}[${g}]`;
      }
    }
    e.ValueScopeName = i;
    const s = (0, t._)`\n`;
    class a extends c {
      constructor(p) {
        super(p), this._values = {}, this._scope = p.scope, this.opts = { ...p, _n: p.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(p) {
        return new i(p, this._newName(p));
      }
      value(p, m) {
        var g;
        if (m.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const u = this.toName(p), { prefix: f } = u, w = (g = m.key) !== null && g !== void 0 ? g : m.ref;
        let x = this._values[f];
        if (x) {
          const b = x.get(w);
          if (b)
            return b;
        } else
          x = this._values[f] = /* @__PURE__ */ new Map();
        x.set(w, u);
        const v = this._scope[f] || (this._scope[f] = []), S = v.length;
        return v[S] = m.ref, u.setValue(m, { property: f, itemIndex: S }), u;
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
          const v = g[w] = g[w] || /* @__PURE__ */ new Map();
          x.forEach((S) => {
            if (v.has(S))
              return;
            v.set(S, r.Started);
            let b = m(S);
            if (b) {
              const y = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              f = (0, t._)`${f}${y} ${S} = ${b};${this.opts._n}`;
            } else if (b = u?.(S))
              f = (0, t._)`${f}${b}${this.opts._n}`;
            else
              throw new n(S);
            v.set(S, r.Completed);
          });
        }
        return f;
      }
    }
    e.ValueScope = a;
  })(pr)), pr;
}
var oa;
function te() {
  return oa || (oa = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Mi(), n = /* @__PURE__ */ aa();
    var r = /* @__PURE__ */ Mi();
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
    var c = /* @__PURE__ */ aa();
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
      optimizeNames(_, $) {
        return this;
      }
    }
    class s extends i {
      constructor(_, $, C) {
        super(), this.varKind = _, this.name = $, this.rhs = C;
      }
      render({ es5: _, _n: $ }) {
        const C = _ ? n.varKinds.var : this.varKind, L = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${C} ${this.name}${L};` + $;
      }
      optimizeNames(_, $) {
        if (_[this.name.str])
          return this.rhs && (this.rhs = E(this.rhs, _, $)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends i {
      constructor(_, $, C) {
        super(), this.lhs = _, this.rhs = $, this.sideEffects = C;
      }
      render({ _n: _ }) {
        return `${this.lhs} = ${this.rhs};` + _;
      }
      optimizeNames(_, $) {
        if (!(this.lhs instanceof t.Name && !_[this.lhs.str] && !this.sideEffects))
          return this.rhs = E(this.rhs, _, $), this;
      }
      get names() {
        const _ = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return R(_, this.rhs);
      }
    }
    class o extends a {
      constructor(_, $, C, L) {
        super(_, C, L), this.op = $;
      }
      render({ _n: _ }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + _;
      }
    }
    class p extends i {
      constructor(_) {
        super(), this.label = _, this.names = {};
      }
      render({ _n: _ }) {
        return `${this.label}:` + _;
      }
    }
    class m extends i {
      constructor(_) {
        super(), this.label = _, this.names = {};
      }
      render({ _n: _ }) {
        return `break${this.label ? ` ${this.label}` : ""};` + _;
      }
    }
    class g extends i {
      constructor(_) {
        super(), this.error = _;
      }
      render({ _n: _ }) {
        return `throw ${this.error};` + _;
      }
      get names() {
        return this.error.names;
      }
    }
    class u extends i {
      constructor(_) {
        super(), this.code = _;
      }
      render({ _n: _ }) {
        return `${this.code};` + _;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(_, $) {
        return this.code = E(this.code, _, $), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class f extends i {
      constructor(_ = []) {
        super(), this.nodes = _;
      }
      render(_) {
        return this.nodes.reduce(($, C) => $ + C.render(_), "");
      }
      optimizeNodes() {
        const { nodes: _ } = this;
        let $ = _.length;
        for (; $--; ) {
          const C = _[$].optimizeNodes();
          Array.isArray(C) ? _.splice($, 1, ...C) : C ? _[$] = C : _.splice($, 1);
        }
        return _.length > 0 ? this : void 0;
      }
      optimizeNames(_, $) {
        const { nodes: C } = this;
        let L = C.length;
        for (; L--; ) {
          const H = C[L];
          H.optimizeNames(_, $) || (D(_, H.names), C.splice(L, 1));
        }
        return C.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((_, $) => O(_, $.names), {});
      }
    }
    class w extends f {
      render(_) {
        return "{" + _._n + super.render(_) + "}" + _._n;
      }
    }
    class x extends f {
    }
    class v extends w {
    }
    v.kind = "else";
    class S extends w {
      constructor(_, $) {
        super($), this.condition = _;
      }
      render(_) {
        let $ = `if(${this.condition})` + super.render(_);
        return this.else && ($ += "else " + this.else.render(_)), $;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const _ = this.condition;
        if (_ === !0)
          return this.nodes;
        let $ = this.else;
        if ($) {
          const C = $.optimizeNodes();
          $ = this.else = Array.isArray(C) ? new v(C) : C;
        }
        if ($)
          return _ === !1 ? $ instanceof S ? $ : $.nodes : this.nodes.length ? this : new S(q(_), $ instanceof S ? [$] : $.nodes);
        if (!(_ === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(_, $) {
        var C;
        if (this.else = (C = this.else) === null || C === void 0 ? void 0 : C.optimizeNames(_, $), !!(super.optimizeNames(_, $) || this.else))
          return this.condition = E(this.condition, _, $), this;
      }
      get names() {
        const _ = super.names;
        return R(_, this.condition), this.else && O(_, this.else.names), _;
      }
    }
    S.kind = "if";
    class b extends w {
    }
    b.kind = "for";
    class y extends b {
      constructor(_) {
        super(), this.iteration = _;
      }
      render(_) {
        return `for(${this.iteration})` + super.render(_);
      }
      optimizeNames(_, $) {
        if (super.optimizeNames(_, $))
          return this.iteration = E(this.iteration, _, $), this;
      }
      get names() {
        return O(super.names, this.iteration.names);
      }
    }
    class d extends b {
      constructor(_, $, C, L) {
        super(), this.varKind = _, this.name = $, this.from = C, this.to = L;
      }
      render(_) {
        const $ = _.es5 ? n.varKinds.var : this.varKind, { name: C, from: L, to: H } = this;
        return `for(${$} ${C}=${L}; ${C}<${H}; ${C}++)` + super.render(_);
      }
      get names() {
        const _ = R(super.names, this.from);
        return R(_, this.to);
      }
    }
    class l extends b {
      constructor(_, $, C, L) {
        super(), this.loop = _, this.varKind = $, this.name = C, this.iterable = L;
      }
      render(_) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(_);
      }
      optimizeNames(_, $) {
        if (super.optimizeNames(_, $))
          return this.iterable = E(this.iterable, _, $), this;
      }
      get names() {
        return O(super.names, this.iterable.names);
      }
    }
    class h extends w {
      constructor(_, $, C) {
        super(), this.name = _, this.args = $, this.async = C;
      }
      render(_) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(_);
      }
    }
    h.kind = "func";
    class I extends f {
      render(_) {
        return "return " + super.render(_);
      }
    }
    I.kind = "return";
    class A extends w {
      render(_) {
        let $ = "try" + super.render(_);
        return this.catch && ($ += this.catch.render(_)), this.finally && ($ += this.finally.render(_)), $;
      }
      optimizeNodes() {
        var _, $;
        return super.optimizeNodes(), (_ = this.catch) === null || _ === void 0 || _.optimizeNodes(), ($ = this.finally) === null || $ === void 0 || $.optimizeNodes(), this;
      }
      optimizeNames(_, $) {
        var C, L;
        return super.optimizeNames(_, $), (C = this.catch) === null || C === void 0 || C.optimizeNames(_, $), (L = this.finally) === null || L === void 0 || L.optimizeNames(_, $), this;
      }
      get names() {
        const _ = super.names;
        return this.catch && O(_, this.catch.names), this.finally && O(_, this.finally.names), _;
      }
    }
    class P extends w {
      constructor(_) {
        super(), this.error = _;
      }
      render(_) {
        return `catch(${this.error})` + super.render(_);
      }
    }
    P.kind = "catch";
    class T extends w {
      render(_) {
        return "finally" + super.render(_);
      }
    }
    T.kind = "finally";
    class j {
      constructor(_, $ = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...$, _n: $.lines ? `
` : "" }, this._extScope = _, this._scope = new n.Scope({ parent: _ }), this._nodes = [new x()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(_) {
        return this._scope.name(_);
      }
      // reserves unique name in the external scope
      scopeName(_) {
        return this._extScope.name(_);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(_, $) {
        const C = this._extScope.value(_, $);
        return (this._values[C.prefix] || (this._values[C.prefix] = /* @__PURE__ */ new Set())).add(C), C;
      }
      getScopeValue(_, $) {
        return this._extScope.getValue(_, $);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(_) {
        return this._extScope.scopeRefs(_, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(_, $, C, L) {
        const H = this._scope.toName($);
        return C !== void 0 && L && (this._constants[H.str] = C), this._leafNode(new s(_, H, C)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(_, $, C) {
        return this._def(n.varKinds.const, _, $, C);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(_, $, C) {
        return this._def(n.varKinds.let, _, $, C);
      }
      // `var` declaration with optional assignment
      var(_, $, C) {
        return this._def(n.varKinds.var, _, $, C);
      }
      // assignment code
      assign(_, $, C) {
        return this._leafNode(new a(_, $, C));
      }
      // `+=` code
      add(_, $) {
        return this._leafNode(new o(_, e.operators.ADD, $));
      }
      // appends passed SafeExpr to code or executes Block
      code(_) {
        return typeof _ == "function" ? _() : _ !== t.nil && this._leafNode(new u(_)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(..._) {
        const $ = ["{"];
        for (const [C, L] of _)
          $.length > 1 && $.push(","), $.push(C), (C !== L || this.opts.es5) && ($.push(":"), (0, t.addCodeArg)($, L));
        return $.push("}"), new t._Code($);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(_, $, C) {
        if (this._blockNode(new S(_)), $ && C)
          this.code($).else().code(C).endIf();
        else if ($)
          this.code($).endIf();
        else if (C)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(_) {
        return this._elseNode(new S(_));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new v());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(S, v);
      }
      _for(_, $) {
        return this._blockNode(_), $ && this.code($).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(_, $) {
        return this._for(new y(_), $);
      }
      // `for` statement for a range of values
      forRange(_, $, C, L, H = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Q = this._scope.toName(_);
        return this._for(new d(H, Q, $, C), () => L(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(_, $, C, L = n.varKinds.const) {
        const H = this._scope.toName(_);
        if (this.opts.es5) {
          const Q = $ instanceof t.Name ? $ : this.var("_arr", $);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (Z) => {
            this.var(H, (0, t._)`${Q}[${Z}]`), C(H);
          });
        }
        return this._for(new l("of", L, H, $), () => C(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(_, $, C, L = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(_, (0, t._)`Object.keys(${$})`, C);
        const H = this._scope.toName(_);
        return this._for(new l("in", L, H, $), () => C(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(b);
      }
      // `label` statement
      label(_) {
        return this._leafNode(new p(_));
      }
      // `break` statement
      break(_) {
        return this._leafNode(new m(_));
      }
      // `return` statement
      return(_) {
        const $ = new I();
        if (this._blockNode($), this.code(_), $.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(I);
      }
      // `try` statement
      try(_, $, C) {
        if (!$ && !C)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const L = new A();
        if (this._blockNode(L), this.code(_), $) {
          const H = this.name("e");
          this._currNode = L.catch = new P(H), $(H);
        }
        return C && (this._currNode = L.finally = new T(), this.code(C)), this._endBlockNode(P, T);
      }
      // `throw` statement
      throw(_) {
        return this._leafNode(new g(_));
      }
      // start self-balancing block
      block(_, $) {
        return this._blockStarts.push(this._nodes.length), _ && this.code(_).endBlock($), this;
      }
      // end the current self-balancing block
      endBlock(_) {
        const $ = this._blockStarts.pop();
        if ($ === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const C = this._nodes.length - $;
        if (C < 0 || _ !== void 0 && C !== _)
          throw new Error(`CodeGen: wrong number of nodes: ${C} vs ${_} expected`);
        return this._nodes.length = $, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(_, $ = t.nil, C, L) {
        return this._blockNode(new h(_, $, C)), L && this.code(L).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(h);
      }
      optimize(_ = 1) {
        for (; _-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(_) {
        return this._currNode.nodes.push(_), this;
      }
      _blockNode(_) {
        this._currNode.nodes.push(_), this._nodes.push(_);
      }
      _endBlockNode(_, $) {
        const C = this._currNode;
        if (C instanceof _ || $ && C instanceof $)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${$ ? `${_.kind}/${$.kind}` : _.kind}"`);
      }
      _elseNode(_) {
        const $ = this._currNode;
        if (!($ instanceof S))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = $.else = _, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const _ = this._nodes;
        return _[_.length - 1];
      }
      set _currNode(_) {
        const $ = this._nodes;
        $[$.length - 1] = _;
      }
    }
    e.CodeGen = j;
    function O(N, _) {
      for (const $ in _)
        N[$] = (N[$] || 0) + (_[$] || 0);
      return N;
    }
    function R(N, _) {
      return _ instanceof t._CodeOrName ? O(N, _.names) : N;
    }
    function E(N, _, $) {
      if (N instanceof t.Name)
        return C(N);
      if (!L(N))
        return N;
      return new t._Code(N._items.reduce((H, Q) => (Q instanceof t.Name && (Q = C(Q)), Q instanceof t._Code ? H.push(...Q._items) : H.push(Q), H), []));
      function C(H) {
        const Q = $[H.str];
        return Q === void 0 || _[H.str] !== 1 ? H : (delete _[H.str], Q);
      }
      function L(H) {
        return H instanceof t._Code && H._items.some((Q) => Q instanceof t.Name && _[Q.str] === 1 && $[Q.str] !== void 0);
      }
    }
    function D(N, _) {
      for (const $ in _)
        N[$] = (N[$] || 0) - (_[$] || 0);
    }
    function q(N) {
      return typeof N == "boolean" || typeof N == "number" || N === null ? !N : (0, t._)`!${z(N)}`;
    }
    e.not = q;
    const V = k(e.operators.AND);
    function G(...N) {
      return N.reduce(V);
    }
    e.and = G;
    const J = k(e.operators.OR);
    function M(...N) {
      return N.reduce(J);
    }
    e.or = M;
    function k(N) {
      return (_, $) => _ === t.nil ? $ : $ === t.nil ? _ : (0, t._)`${z(_)} ${N} ${z($)}`;
    }
    function z(N) {
      return N instanceof t.Name ? N : (0, t._)`(${N})`;
    }
  })(lr)), lr;
}
var ne = {}, ca;
function ie() {
  if (ca) return ne;
  ca = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.checkStrictMode = ne.getErrorPath = ne.Type = ne.useFunc = ne.setEvaluated = ne.evaluatedPropsToName = ne.mergeEvaluated = ne.eachItem = ne.unescapeJsonPointer = ne.escapeJsonPointer = ne.escapeFragment = ne.unescapeFragment = ne.schemaRefOrVal = ne.schemaHasRulesButRef = ne.schemaHasRules = ne.checkUnknownRules = ne.alwaysValidSchema = ne.toHash = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Mi();
  function n(l) {
    const h = {};
    for (const I of l)
      h[I] = !0;
    return h;
  }
  ne.toHash = n;
  function r(l, h) {
    return typeof h == "boolean" ? h : Object.keys(h).length === 0 ? !0 : (c(l, h), !i(h, l.self.RULES.all));
  }
  ne.alwaysValidSchema = r;
  function c(l, h = l.schema) {
    const { opts: I, self: A } = l;
    if (!I.strictSchema || typeof h == "boolean")
      return;
    const P = A.RULES.keywords;
    for (const T in h)
      P[T] || d(l, `unknown keyword: "${T}"`);
  }
  ne.checkUnknownRules = c;
  function i(l, h) {
    if (typeof l == "boolean")
      return !l;
    for (const I in l)
      if (h[I])
        return !0;
    return !1;
  }
  ne.schemaHasRules = i;
  function s(l, h) {
    if (typeof l == "boolean")
      return !l;
    for (const I in l)
      if (I !== "$ref" && h.all[I])
        return !0;
    return !1;
  }
  ne.schemaHasRulesButRef = s;
  function a({ topSchemaRef: l, schemaPath: h }, I, A, P) {
    if (!P) {
      if (typeof I == "number" || typeof I == "boolean")
        return I;
      if (typeof I == "string")
        return (0, e._)`${I}`;
    }
    return (0, e._)`${l}${h}${(0, e.getProperty)(A)}`;
  }
  ne.schemaRefOrVal = a;
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
    return (P, T, j, O) => {
      const R = j === void 0 ? T : j instanceof e.Name ? (T instanceof e.Name ? l(P, T, j) : h(P, T, j), j) : T instanceof e.Name ? (h(P, j, T), T) : I(T, j);
      return O === e.Name && !(R instanceof e.Name) ? A(P, R) : R;
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
  const v = {};
  function S(l, h) {
    return l.scopeValue("func", {
      ref: h,
      code: v[h.code] || (v[h.code] = new t._Code(h.code))
    });
  }
  ne.useFunc = S;
  var b;
  (function(l) {
    l[l.Num = 0] = "Num", l[l.Str = 1] = "Str";
  })(b || (ne.Type = b = {}));
  function y(l, h, I) {
    if (l instanceof e.Name) {
      const A = h === b.Num;
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
var Rn = {}, da;
function Ze() {
  if (da) return Rn;
  da = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
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
  return Rn.default = t, Rn;
}
var la;
function Ui() {
  return la || (la = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Ze();
    e.keywordError = {
      message: ({ keyword: v }) => (0, t.str)`must pass "${v}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: v, schemaType: S }) => S ? (0, t.str)`"${v}" keyword must be ${S} ($data)` : (0, t.str)`"${v}" keyword is invalid ($data)`
    };
    function c(v, S = e.keywordError, b, y) {
      const { it: d } = v, { gen: l, compositeRule: h, allErrors: I } = d, A = g(v, S, b);
      y ?? (h || I) ? o(l, A) : p(d, (0, t._)`[${A}]`);
    }
    e.reportError = c;
    function i(v, S = e.keywordError, b) {
      const { it: y } = v, { gen: d, compositeRule: l, allErrors: h } = y, I = g(v, S, b);
      o(d, I), l || h || p(y, r.default.vErrors);
    }
    e.reportExtraError = i;
    function s(v, S) {
      v.assign(r.default.errors, S), v.if((0, t._)`${r.default.vErrors} !== null`, () => v.if(S, () => v.assign((0, t._)`${r.default.vErrors}.length`, S), () => v.assign(r.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: v, keyword: S, schemaValue: b, data: y, errsCount: d, it: l }) {
      if (d === void 0)
        throw new Error("ajv implementation error");
      const h = v.name("err");
      v.forRange("i", d, r.default.errors, (I) => {
        v.const(h, (0, t._)`${r.default.vErrors}[${I}]`), v.if((0, t._)`${h}.instancePath === undefined`, () => v.assign((0, t._)`${h}.instancePath`, (0, t.strConcat)(r.default.instancePath, l.errorPath))), v.assign((0, t._)`${h}.schemaPath`, (0, t.str)`${l.errSchemaPath}/${S}`), l.opts.verbose && (v.assign((0, t._)`${h}.schema`, b), v.assign((0, t._)`${h}.data`, y));
      });
    }
    e.extendErrors = a;
    function o(v, S) {
      const b = v.const("err", S);
      v.if((0, t._)`${r.default.vErrors} === null`, () => v.assign(r.default.vErrors, (0, t._)`[${b}]`), (0, t._)`${r.default.vErrors}.push(${b})`), v.code((0, t._)`${r.default.errors}++`);
    }
    function p(v, S) {
      const { gen: b, validateName: y, schemaEnv: d } = v;
      d.$async ? b.throw((0, t._)`new ${v.ValidationError}(${S})`) : (b.assign((0, t._)`${y}.errors`, S), b.return(!1));
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
    function g(v, S, b) {
      const { createErrors: y } = v.it;
      return y === !1 ? (0, t._)`{}` : u(v, S, b);
    }
    function u(v, S, b = {}) {
      const { gen: y, it: d } = v, l = [
        f(d, b),
        w(v, b)
      ];
      return x(v, S, l), y.object(...l);
    }
    function f({ errorPath: v }, { instancePath: S }) {
      const b = S ? (0, t.str)`${v}${(0, n.getErrorPath)(S, n.Type.Str)}` : v;
      return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, b)];
    }
    function w({ keyword: v, it: { errSchemaPath: S } }, { schemaPath: b, parentSchema: y }) {
      let d = y ? S : (0, t.str)`${S}/${v}`;
      return b && (d = (0, t.str)`${d}${(0, n.getErrorPath)(b, n.Type.Str)}`), [m.schemaPath, d];
    }
    function x(v, { params: S, message: b }, y) {
      const { keyword: d, data: l, schemaValue: h, it: I } = v, { opts: A, propertyName: P, topSchemaRef: T, schemaPath: j } = I;
      y.push([m.keyword, d], [m.params, typeof S == "function" ? S(v) : S || (0, t._)`{}`]), A.messages && y.push([m.message, typeof b == "function" ? b(v) : b]), A.verbose && y.push([m.schema, h], [m.parentSchema, (0, t._)`${T}${j}`], [r.default.data, l]), P && y.push([m.propertyName, P]);
    }
  })(dr)), dr;
}
var ua;
function El() {
  if (ua) return At;
  ua = 1, Object.defineProperty(At, "__esModule", { value: !0 }), At.boolOrEmptySchema = At.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Ui(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ Ze(), r = {
    message: "boolean schema is false"
  };
  function c(a) {
    const { gen: o, schema: p, validateName: m } = a;
    p === !1 ? s(a, !1) : typeof p == "object" && p.$async === !0 ? o.return(n.default.data) : (o.assign((0, t._)`${m}.errors`, null), o.return(!0));
  }
  At.topBoolOrEmptySchema = c;
  function i(a, o) {
    const { gen: p, schema: m } = a;
    m === !1 ? (p.var(o, !1), s(a)) : p.var(o, !0);
  }
  At.boolOrEmptySchema = i;
  function s(a, o) {
    const { gen: p, data: m } = a, g = {
      gen: p,
      keyword: "false schema",
      data: m,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(g, r, void 0, o);
  }
  return At;
}
var ge = {}, qt = {}, pa;
function Fc() {
  if (pa) return qt;
  pa = 1, Object.defineProperty(qt, "__esModule", { value: !0 }), qt.getRules = qt.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(c) {
    return typeof c == "string" && t.has(c);
  }
  qt.isJSONType = n;
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
  return qt.getRules = r, qt;
}
var ot = {}, fa;
function Gc() {
  if (fa) return ot;
  fa = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.shouldUseRule = ot.shouldUseGroup = ot.schemaHasRulesForType = void 0;
  function e({ schema: r, self: c }, i) {
    const s = c.RULES.types[i];
    return s && s !== !0 && t(r, s);
  }
  ot.schemaHasRulesForType = e;
  function t(r, c) {
    return c.rules.some((i) => n(r, i));
  }
  ot.shouldUseGroup = t;
  function n(r, c) {
    var i;
    return r[c.keyword] !== void 0 || ((i = c.definition.implements) === null || i === void 0 ? void 0 : i.some((s) => r[s] !== void 0));
  }
  return ot.shouldUseRule = n, ot;
}
var ha;
function ki() {
  if (ha) return ge;
  ha = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.reportTypeError = ge.checkDataTypes = ge.checkDataType = ge.coerceAndCheckDataType = ge.getJSONTypes = ge.getSchemaTypes = ge.DataType = void 0;
  const e = /* @__PURE__ */ Fc(), t = /* @__PURE__ */ Gc(), n = /* @__PURE__ */ Ui(), r = /* @__PURE__ */ te(), c = /* @__PURE__ */ ie();
  var i;
  (function(b) {
    b[b.Correct = 0] = "Correct", b[b.Wrong = 1] = "Wrong";
  })(i || (ge.DataType = i = {}));
  function s(b) {
    const y = a(b.type);
    if (y.includes("null")) {
      if (b.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!y.length && b.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      b.nullable === !0 && y.push("null");
    }
    return y;
  }
  ge.getSchemaTypes = s;
  function a(b) {
    const y = Array.isArray(b) ? b : b ? [b] : [];
    if (y.every(e.isJSONType))
      return y;
    throw new Error("type must be JSONType or JSONType[]: " + y.join(","));
  }
  ge.getJSONTypes = a;
  function o(b, y) {
    const { gen: d, data: l, opts: h } = b, I = m(y, h.coerceTypes), A = y.length > 0 && !(I.length === 0 && y.length === 1 && (0, t.schemaHasRulesForType)(b, y[0]));
    if (A) {
      const P = w(y, l, h.strictNumbers, i.Wrong);
      d.if(P, () => {
        I.length ? g(b, y, I) : v(b);
      });
    }
    return A;
  }
  ge.coerceAndCheckDataType = o;
  const p = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function m(b, y) {
    return y ? b.filter((d) => p.has(d) || y === "array" && d === "array") : [];
  }
  function g(b, y, d) {
    const { gen: l, data: h, opts: I } = b, A = l.let("dataType", (0, r._)`typeof ${h}`), P = l.let("coerced", (0, r._)`undefined`);
    I.coerceTypes === "array" && l.if((0, r._)`${A} == 'object' && Array.isArray(${h}) && ${h}.length == 1`, () => l.assign(h, (0, r._)`${h}[0]`).assign(A, (0, r._)`typeof ${h}`).if(w(y, h, I.strictNumbers), () => l.assign(P, h))), l.if((0, r._)`${P} !== undefined`);
    for (const j of d)
      (p.has(j) || j === "array" && I.coerceTypes === "array") && T(j);
    l.else(), v(b), l.endIf(), l.if((0, r._)`${P} !== undefined`, () => {
      l.assign(h, P), u(b, P);
    });
    function T(j) {
      switch (j) {
        case "string":
          l.elseIf((0, r._)`${A} == "number" || ${A} == "boolean"`).assign(P, (0, r._)`"" + ${h}`).elseIf((0, r._)`${h} === null`).assign(P, (0, r._)`""`);
          return;
        case "number":
          l.elseIf((0, r._)`${A} == "boolean" || ${h} === null
              || (${A} == "string" && ${h} && ${h} == +${h})`).assign(P, (0, r._)`+${h}`);
          return;
        case "integer":
          l.elseIf((0, r._)`${A} === "boolean" || ${h} === null
              || (${A} === "string" && ${h} && ${h} == +${h} && !(${h} % 1))`).assign(P, (0, r._)`+${h}`);
          return;
        case "boolean":
          l.elseIf((0, r._)`${h} === "false" || ${h} === 0 || ${h} === null`).assign(P, !1).elseIf((0, r._)`${h} === "true" || ${h} === 1`).assign(P, !0);
          return;
        case "null":
          l.elseIf((0, r._)`${h} === "" || ${h} === 0 || ${h} === false`), l.assign(P, null);
          return;
        case "array":
          l.elseIf((0, r._)`${A} === "string" || ${A} === "number"
              || ${A} === "boolean" || ${h} === null`).assign(P, (0, r._)`[${h}]`);
      }
    }
  }
  function u({ gen: b, parentData: y, parentDataProperty: d }, l) {
    b.if((0, r._)`${y} !== undefined`, () => b.assign((0, r._)`${y}[${d}]`, l));
  }
  function f(b, y, d, l = i.Correct) {
    const h = l === i.Correct ? r.operators.EQ : r.operators.NEQ;
    let I;
    switch (b) {
      case "null":
        return (0, r._)`${y} ${h} null`;
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
        return (0, r._)`typeof ${y} ${h} ${b}`;
    }
    return l === i.Correct ? I : (0, r.not)(I);
    function A(P = r.nil) {
      return (0, r.and)((0, r._)`typeof ${y} == "number"`, P, d ? (0, r._)`isFinite(${y})` : r.nil);
    }
  }
  ge.checkDataType = f;
  function w(b, y, d, l) {
    if (b.length === 1)
      return f(b[0], y, d, l);
    let h;
    const I = (0, c.toHash)(b);
    if (I.array && I.object) {
      const A = (0, r._)`typeof ${y} != "object"`;
      h = I.null ? A : (0, r._)`!${y} || ${A}`, delete I.null, delete I.array, delete I.object;
    } else
      h = r.nil;
    I.number && delete I.integer;
    for (const A in I)
      h = (0, r.and)(h, f(A, y, d, l));
    return h;
  }
  ge.checkDataTypes = w;
  const x = {
    message: ({ schema: b }) => `must be ${b}`,
    params: ({ schema: b, schemaValue: y }) => typeof b == "string" ? (0, r._)`{type: ${b}}` : (0, r._)`{type: ${y}}`
  };
  function v(b) {
    const y = S(b);
    (0, n.reportError)(y, x);
  }
  ge.reportTypeError = v;
  function S(b) {
    const { gen: y, data: d, schema: l } = b, h = (0, c.schemaRefOrVal)(b, l, "type");
    return {
      gen: y,
      keyword: "type",
      data: d,
      schema: l.type,
      schemaCode: h,
      schemaValue: h,
      parentSchema: l,
      params: {},
      it: b
    };
  }
  return ge;
}
var nn = {}, ma;
function Cl() {
  if (ma) return nn;
  ma = 1, Object.defineProperty(nn, "__esModule", { value: !0 }), nn.assignDefaults = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie();
  function n(c, i) {
    const { properties: s, items: a } = c.schema;
    if (i === "object" && s)
      for (const o in s)
        r(c, o, s[o].default);
    else i === "array" && Array.isArray(a) && a.forEach((o, p) => r(c, p, o.default));
  }
  nn.assignDefaults = n;
  function r(c, i, s) {
    const { gen: a, compositeRule: o, data: p, opts: m } = c;
    if (s === void 0)
      return;
    const g = (0, e._)`${p}${(0, e.getProperty)(i)}`;
    if (o) {
      (0, t.checkStrictMode)(c, `default is ignored for: ${g}`);
      return;
    }
    let u = (0, e._)`${g} === undefined`;
    m.useDefaults === "empty" && (u = (0, e._)`${u} || ${g} === null || ${g} === ""`), a.if(u, (0, e._)`${g} = ${(0, e.stringify)(s)}`);
  }
  return nn;
}
var Ve = {}, ae = {}, ya;
function Ke() {
  if (ya) return ae;
  ya = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.validateUnion = ae.validateArray = ae.usePattern = ae.callValidateCode = ae.schemaProperties = ae.allSchemaProperties = ae.noPropertyInData = ae.propertyInData = ae.isOwnProperty = ae.hasPropFunc = ae.reportMissingProp = ae.checkMissingProp = ae.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Ze(), r = /* @__PURE__ */ ie();
  function c(b, y) {
    const { gen: d, data: l, it: h } = b;
    d.if(m(d, l, y, h.opts.ownProperties), () => {
      b.setParams({ missingProperty: (0, e._)`${y}` }, !0), b.error();
    });
  }
  ae.checkReportMissingProp = c;
  function i({ gen: b, data: y, it: { opts: d } }, l, h) {
    return (0, e.or)(...l.map((I) => (0, e.and)(m(b, y, I, d.ownProperties), (0, e._)`${h} = ${I}`)));
  }
  ae.checkMissingProp = i;
  function s(b, y) {
    b.setParams({ missingProperty: y }, !0), b.error();
  }
  ae.reportMissingProp = s;
  function a(b) {
    return b.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ae.hasPropFunc = a;
  function o(b, y, d) {
    return (0, e._)`${a(b)}.call(${y}, ${d})`;
  }
  ae.isOwnProperty = o;
  function p(b, y, d, l) {
    const h = (0, e._)`${y}${(0, e.getProperty)(d)} !== undefined`;
    return l ? (0, e._)`${h} && ${o(b, y, d)}` : h;
  }
  ae.propertyInData = p;
  function m(b, y, d, l) {
    const h = (0, e._)`${y}${(0, e.getProperty)(d)} === undefined`;
    return l ? (0, e.or)(h, (0, e.not)(o(b, y, d))) : h;
  }
  ae.noPropertyInData = m;
  function g(b) {
    return b ? Object.keys(b).filter((y) => y !== "__proto__") : [];
  }
  ae.allSchemaProperties = g;
  function u(b, y) {
    return g(y).filter((d) => !(0, t.alwaysValidSchema)(b, y[d]));
  }
  ae.schemaProperties = u;
  function f({ schemaCode: b, data: y, it: { gen: d, topSchemaRef: l, schemaPath: h, errorPath: I }, it: A }, P, T, j) {
    const O = j ? (0, e._)`${b}, ${y}, ${l}${h}` : y, R = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, I)],
      [n.default.parentData, A.parentData],
      [n.default.parentDataProperty, A.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    A.opts.dynamicRef && R.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const E = (0, e._)`${O}, ${d.object(...R)}`;
    return T !== e.nil ? (0, e._)`${P}.call(${T}, ${E})` : (0, e._)`${P}(${E})`;
  }
  ae.callValidateCode = f;
  const w = (0, e._)`new RegExp`;
  function x({ gen: b, it: { opts: y } }, d) {
    const l = y.unicodeRegExp ? "u" : "", { regExp: h } = y.code, I = h(d, l);
    return b.scopeValue("pattern", {
      key: I.toString(),
      ref: I,
      code: (0, e._)`${h.code === "new RegExp" ? w : (0, r.useFunc)(b, h)}(${d}, ${l})`
    });
  }
  ae.usePattern = x;
  function v(b) {
    const { gen: y, data: d, keyword: l, it: h } = b, I = y.name("valid");
    if (h.allErrors) {
      const P = y.let("valid", !0);
      return A(() => y.assign(P, !1)), P;
    }
    return y.var(I, !0), A(() => y.break()), I;
    function A(P) {
      const T = y.const("len", (0, e._)`${d}.length`);
      y.forRange("i", 0, T, (j) => {
        b.subschema({
          keyword: l,
          dataProp: j,
          dataPropType: t.Type.Num
        }, I), y.if((0, e.not)(I), P);
      });
    }
  }
  ae.validateArray = v;
  function S(b) {
    const { gen: y, schema: d, keyword: l, it: h } = b;
    if (!Array.isArray(d))
      throw new Error("ajv implementation error");
    if (d.some((T) => (0, t.alwaysValidSchema)(h, T)) && !h.opts.unevaluated)
      return;
    const A = y.let("valid", !1), P = y.name("_valid");
    y.block(() => d.forEach((T, j) => {
      const O = b.subschema({
        keyword: l,
        schemaProp: j,
        compositeRule: !0
      }, P);
      y.assign(A, (0, e._)`${A} || ${P}`), b.mergeValidEvaluated(O, P) || y.if((0, e.not)(A));
    })), b.result(A, () => b.reset(), () => b.error(!0));
  }
  return ae.validateUnion = S, ae;
}
var ga;
function Tl() {
  if (ga) return Ve;
  ga = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.validateKeywordUsage = Ve.validSchemaType = Ve.funcKeywordCode = Ve.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Ze(), n = /* @__PURE__ */ Ke(), r = /* @__PURE__ */ Ui();
  function c(u, f) {
    const { gen: w, keyword: x, schema: v, parentSchema: S, it: b } = u, y = f.macro.call(b.self, v, S, b), d = p(w, x, y);
    b.opts.validateSchema !== !1 && b.self.validateSchema(y, !0);
    const l = w.name("valid");
    u.subschema({
      schema: y,
      schemaPath: e.nil,
      errSchemaPath: `${b.errSchemaPath}/${x}`,
      topSchemaRef: d,
      compositeRule: !0
    }, l), u.pass(l, () => u.error(!0));
  }
  Ve.macroKeywordCode = c;
  function i(u, f) {
    var w;
    const { gen: x, keyword: v, schema: S, parentSchema: b, $data: y, it: d } = u;
    o(d, f);
    const l = !y && f.compile ? f.compile.call(d.self, S, b, d) : f.validate, h = p(x, v, l), I = x.let("valid");
    u.block$data(I, A), u.ok((w = f.valid) !== null && w !== void 0 ? w : I);
    function A() {
      if (f.errors === !1)
        j(), f.modifying && s(u), O(() => u.error());
      else {
        const R = f.async ? P() : T();
        f.modifying && s(u), O(() => a(u, R));
      }
    }
    function P() {
      const R = x.let("ruleErrs", null);
      return x.try(() => j((0, e._)`await `), (E) => x.assign(I, !1).if((0, e._)`${E} instanceof ${d.ValidationError}`, () => x.assign(R, (0, e._)`${E}.errors`), () => x.throw(E))), R;
    }
    function T() {
      const R = (0, e._)`${h}.errors`;
      return x.assign(R, null), j(e.nil), R;
    }
    function j(R = f.async ? (0, e._)`await ` : e.nil) {
      const E = d.opts.passContext ? t.default.this : t.default.self, D = !("compile" in f && !y || f.schema === !1);
      x.assign(I, (0, e._)`${R}${(0, n.callValidateCode)(u, h, E, D)}`, f.modifying);
    }
    function O(R) {
      var E;
      x.if((0, e.not)((E = f.valid) !== null && E !== void 0 ? E : I), R);
    }
  }
  Ve.funcKeywordCode = i;
  function s(u) {
    const { gen: f, data: w, it: x } = u;
    f.if(x.parentData, () => f.assign(w, (0, e._)`${x.parentData}[${x.parentDataProperty}]`));
  }
  function a(u, f) {
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
  function m(u, f, w = !1) {
    return !f.length || f.some((x) => x === "array" ? Array.isArray(u) : x === "object" ? u && typeof u == "object" && !Array.isArray(u) : typeof u == x || w && typeof u > "u");
  }
  Ve.validSchemaType = m;
  function g({ schema: u, opts: f, self: w, errSchemaPath: x }, v, S) {
    if (Array.isArray(v.keyword) ? !v.keyword.includes(S) : v.keyword !== S)
      throw new Error("ajv implementation error");
    const b = v.dependencies;
    if (b?.some((y) => !Object.prototype.hasOwnProperty.call(u, y)))
      throw new Error(`parent schema must have dependencies of ${S}: ${b.join(",")}`);
    if (v.validateSchema && !v.validateSchema(u[S])) {
      const d = `keyword "${S}" value is invalid at path "${x}": ` + w.errorsText(v.validateSchema.errors);
      if (f.validateSchema === "log")
        w.logger.error(d);
      else
        throw new Error(d);
    }
  }
  return Ve.validateKeywordUsage = g, Ve;
}
var ct = {}, va;
function Ml() {
  if (va) return ct;
  va = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.extendSubschemaMode = ct.extendSubschemaData = ct.getSubschema = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie();
  function n(i, { keyword: s, schemaProp: a, schema: o, schemaPath: p, errSchemaPath: m, topSchemaRef: g }) {
    if (s !== void 0 && o !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const u = i.schema[s];
      return a === void 0 ? {
        schema: u,
        schemaPath: (0, e._)`${i.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${i.errSchemaPath}/${s}`
      } : {
        schema: u[a],
        schemaPath: (0, e._)`${i.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${i.errSchemaPath}/${s}/${(0, t.escapeFragment)(a)}`
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
  ct.getSubschema = n;
  function r(i, s, { dataProp: a, dataPropType: o, data: p, dataTypes: m, propertyName: g }) {
    if (p !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: u } = s;
    if (a !== void 0) {
      const { errorPath: w, dataPathArr: x, opts: v } = s, S = u.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      f(S), i.errorPath = (0, e.str)`${w}${(0, t.getErrorPath)(a, o, v.jsPropertySyntax)}`, i.parentDataProperty = (0, e._)`${a}`, i.dataPathArr = [...x, i.parentDataProperty];
    }
    if (p !== void 0) {
      const w = p instanceof e.Name ? p : u.let("data", p, !0);
      f(w), g !== void 0 && (i.propertyName = g);
    }
    m && (i.dataTypes = m);
    function f(w) {
      i.data = w, i.dataLevel = s.dataLevel + 1, i.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), i.parentData = s.data, i.dataNames = [...s.dataNames, w];
    }
  }
  ct.extendSubschemaData = r;
  function c(i, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: o, createErrors: p, allErrors: m }) {
    o !== void 0 && (i.compositeRule = o), p !== void 0 && (i.createErrors = p), m !== void 0 && (i.allErrors = m), i.jtdDiscriminator = s, i.jtdMetadata = a;
  }
  return ct.extendSubschemaMode = c, ct;
}
var Ie = {}, fr, ba;
function Bc() {
  return ba || (ba = 1, fr = function e(t, n) {
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
        var s = i[c];
        if (!e(t[s], n[s])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), fr;
}
var hr = { exports: {} }, wa;
function kl() {
  if (wa) return hr.exports;
  wa = 1;
  var e = hr.exports = function(r, c, i) {
    typeof c == "function" && (i = c, c = {}), i = c.cb || i;
    var s = typeof i == "function" ? i : i.pre || function() {
    }, a = i.post || function() {
    };
    t(c, s, a, r, "", r);
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
  function t(r, c, i, s, a, o, p, m, g, u) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      c(s, a, o, p, m, g, u);
      for (var f in s) {
        var w = s[f];
        if (Array.isArray(w)) {
          if (f in e.arrayKeywords)
            for (var x = 0; x < w.length; x++)
              t(r, c, i, w[x], a + "/" + f + "/" + x, o, a, f, s, x);
        } else if (f in e.propsKeywords) {
          if (w && typeof w == "object")
            for (var v in w)
              t(r, c, i, w[v], a + "/" + f + "/" + n(v), o, a, f, s, v);
        } else (f in e.keywords || r.allKeys && !(f in e.skipKeywords)) && t(r, c, i, w, a + "/" + f, o, a, f, s);
      }
      i(s, a, o, p, m, g, u);
    }
  }
  function n(r) {
    return r.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return hr.exports;
}
var xa;
function Vi() {
  if (xa) return Ie;
  xa = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.getSchemaRefs = Ie.resolveUrl = Ie.normalizeId = Ie._getFullPath = Ie.getFullPath = Ie.inlineRef = void 0;
  const e = /* @__PURE__ */ ie(), t = Bc(), n = kl(), r = /* @__PURE__ */ new Set([
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
  function c(x, v = !0) {
    return typeof x == "boolean" ? !0 : v === !0 ? !s(x) : v ? a(x) <= v : !1;
  }
  Ie.inlineRef = c;
  const i = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(x) {
    for (const v in x) {
      if (i.has(v))
        return !0;
      const S = x[v];
      if (Array.isArray(S) && S.some(s) || typeof S == "object" && s(S))
        return !0;
    }
    return !1;
  }
  function a(x) {
    let v = 0;
    for (const S in x) {
      if (S === "$ref")
        return 1 / 0;
      if (v++, !r.has(S) && (typeof x[S] == "object" && (0, e.eachItem)(x[S], (b) => v += a(b)), v === 1 / 0))
        return 1 / 0;
    }
    return v;
  }
  function o(x, v = "", S) {
    S !== !1 && (v = g(v));
    const b = x.parse(v);
    return p(x, b);
  }
  Ie.getFullPath = o;
  function p(x, v) {
    return x.serialize(v).split("#")[0] + "#";
  }
  Ie._getFullPath = p;
  const m = /#\/?$/;
  function g(x) {
    return x ? x.replace(m, "") : "";
  }
  Ie.normalizeId = g;
  function u(x, v, S) {
    return S = g(S), x.resolve(v, S);
  }
  Ie.resolveUrl = u;
  const f = /^[a-z_][-a-z0-9._]*$/i;
  function w(x, v) {
    if (typeof x == "boolean")
      return {};
    const { schemaId: S, uriResolver: b } = this.opts, y = g(x[S] || v), d = { "": y }, l = o(b, y, !1), h = {}, I = /* @__PURE__ */ new Set();
    return n(x, { allKeys: !0 }, (T, j, O, R) => {
      if (R === void 0)
        return;
      const E = l + j;
      let D = d[R];
      typeof T[S] == "string" && (D = q.call(this, T[S])), V.call(this, T.$anchor), V.call(this, T.$dynamicAnchor), d[j] = D;
      function q(G) {
        const J = this.opts.uriResolver.resolve;
        if (G = g(D ? J(D, G) : G), I.has(G))
          throw P(G);
        I.add(G);
        let M = this.refs[G];
        return typeof M == "string" && (M = this.refs[M]), typeof M == "object" ? A(T, M.schema, G) : G !== g(E) && (G[0] === "#" ? (A(T, h[G], G), h[G] = T) : this.refs[G] = E), G;
      }
      function V(G) {
        if (typeof G == "string") {
          if (!f.test(G))
            throw new Error(`invalid anchor "${G}"`);
          q.call(this, `#${G}`);
        }
      }
    }), h;
    function A(T, j, O) {
      if (j !== void 0 && !t(T, j))
        throw P(O);
    }
    function P(T) {
      return new Error(`reference "${T}" resolves to more than one schema`);
    }
  }
  return Ie.getSchemaRefs = w, Ie;
}
var Sa;
function yn() {
  if (Sa) return at;
  Sa = 1, Object.defineProperty(at, "__esModule", { value: !0 }), at.getData = at.KeywordCxt = at.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ El(), t = /* @__PURE__ */ ki(), n = /* @__PURE__ */ Gc(), r = /* @__PURE__ */ ki(), c = /* @__PURE__ */ Cl(), i = /* @__PURE__ */ Tl(), s = /* @__PURE__ */ Ml(), a = /* @__PURE__ */ te(), o = /* @__PURE__ */ Ze(), p = /* @__PURE__ */ Vi(), m = /* @__PURE__ */ ie(), g = /* @__PURE__ */ Ui();
  function u(U) {
    if (l(U) && (I(U), d(U))) {
      v(U);
      return;
    }
    f(U, () => (0, e.topBoolOrEmptySchema)(U));
  }
  at.validateFunctionCode = u;
  function f({ gen: U, validateName: F, schema: B, schemaEnv: K, opts: W }, Y) {
    W.code.es5 ? U.func(F, (0, a._)`${o.default.data}, ${o.default.valCxt}`, K.$async, () => {
      U.code((0, a._)`"use strict"; ${b(B, W)}`), x(U, W), U.code(Y);
    }) : U.func(F, (0, a._)`${o.default.data}, ${w(W)}`, K.$async, () => U.code(b(B, W)).code(Y));
  }
  function w(U) {
    return (0, a._)`{${o.default.instancePath}="", ${o.default.parentData}, ${o.default.parentDataProperty}, ${o.default.rootData}=${o.default.data}${U.dynamicRef ? (0, a._)`, ${o.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function x(U, F) {
    U.if(o.default.valCxt, () => {
      U.var(o.default.instancePath, (0, a._)`${o.default.valCxt}.${o.default.instancePath}`), U.var(o.default.parentData, (0, a._)`${o.default.valCxt}.${o.default.parentData}`), U.var(o.default.parentDataProperty, (0, a._)`${o.default.valCxt}.${o.default.parentDataProperty}`), U.var(o.default.rootData, (0, a._)`${o.default.valCxt}.${o.default.rootData}`), F.dynamicRef && U.var(o.default.dynamicAnchors, (0, a._)`${o.default.valCxt}.${o.default.dynamicAnchors}`);
    }, () => {
      U.var(o.default.instancePath, (0, a._)`""`), U.var(o.default.parentData, (0, a._)`undefined`), U.var(o.default.parentDataProperty, (0, a._)`undefined`), U.var(o.default.rootData, o.default.data), F.dynamicRef && U.var(o.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function v(U) {
    const { schema: F, opts: B, gen: K } = U;
    f(U, () => {
      B.$comment && F.$comment && R(U), T(U), K.let(o.default.vErrors, null), K.let(o.default.errors, 0), B.unevaluated && S(U), A(U), E(U);
    });
  }
  function S(U) {
    const { gen: F, validateName: B } = U;
    U.evaluated = F.const("evaluated", (0, a._)`${B}.evaluated`), F.if((0, a._)`${U.evaluated}.dynamicProps`, () => F.assign((0, a._)`${U.evaluated}.props`, (0, a._)`undefined`)), F.if((0, a._)`${U.evaluated}.dynamicItems`, () => F.assign((0, a._)`${U.evaluated}.items`, (0, a._)`undefined`));
  }
  function b(U, F) {
    const B = typeof U == "object" && U[F.schemaId];
    return B && (F.code.source || F.code.process) ? (0, a._)`/*# sourceURL=${B} */` : a.nil;
  }
  function y(U, F) {
    if (l(U) && (I(U), d(U))) {
      h(U, F);
      return;
    }
    (0, e.boolOrEmptySchema)(U, F);
  }
  function d({ schema: U, self: F }) {
    if (typeof U == "boolean")
      return !U;
    for (const B in U)
      if (F.RULES.all[B])
        return !0;
    return !1;
  }
  function l(U) {
    return typeof U.schema != "boolean";
  }
  function h(U, F) {
    const { schema: B, gen: K, opts: W } = U;
    W.$comment && B.$comment && R(U), j(U), O(U);
    const Y = K.const("_errs", o.default.errors);
    A(U, Y), K.var(F, (0, a._)`${Y} === ${o.default.errors}`);
  }
  function I(U) {
    (0, m.checkUnknownRules)(U), P(U);
  }
  function A(U, F) {
    if (U.opts.jtd)
      return q(U, [], !1, F);
    const B = (0, t.getSchemaTypes)(U.schema), K = (0, t.coerceAndCheckDataType)(U, B);
    q(U, B, !K, F);
  }
  function P(U) {
    const { schema: F, errSchemaPath: B, opts: K, self: W } = U;
    F.$ref && K.ignoreKeywordsWithRef && (0, m.schemaHasRulesButRef)(F, W.RULES) && W.logger.warn(`$ref: keywords ignored in schema at path "${B}"`);
  }
  function T(U) {
    const { schema: F, opts: B } = U;
    F.default !== void 0 && B.useDefaults && B.strictSchema && (0, m.checkStrictMode)(U, "default is ignored in the schema root");
  }
  function j(U) {
    const F = U.schema[U.opts.schemaId];
    F && (U.baseId = (0, p.resolveUrl)(U.opts.uriResolver, U.baseId, F));
  }
  function O(U) {
    if (U.schema.$async && !U.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function R({ gen: U, schemaEnv: F, schema: B, errSchemaPath: K, opts: W }) {
    const Y = B.$comment;
    if (W.$comment === !0)
      U.code((0, a._)`${o.default.self}.logger.log(${Y})`);
    else if (typeof W.$comment == "function") {
      const re = (0, a.str)`${K}/$comment`, ve = U.scopeValue("root", { ref: F.root });
      U.code((0, a._)`${o.default.self}.opts.$comment(${Y}, ${re}, ${ve}.schema)`);
    }
  }
  function E(U) {
    const { gen: F, schemaEnv: B, validateName: K, ValidationError: W, opts: Y } = U;
    B.$async ? F.if((0, a._)`${o.default.errors} === 0`, () => F.return(o.default.data), () => F.throw((0, a._)`new ${W}(${o.default.vErrors})`)) : (F.assign((0, a._)`${K}.errors`, o.default.vErrors), Y.unevaluated && D(U), F.return((0, a._)`${o.default.errors} === 0`));
  }
  function D({ gen: U, evaluated: F, props: B, items: K }) {
    B instanceof a.Name && U.assign((0, a._)`${F}.props`, B), K instanceof a.Name && U.assign((0, a._)`${F}.items`, K);
  }
  function q(U, F, B, K) {
    const { gen: W, schema: Y, data: re, allErrors: ve, opts: fe, self: me } = U, { RULES: pe } = me;
    if (Y.$ref && (fe.ignoreKeywordsWithRef || !(0, m.schemaHasRulesButRef)(Y, pe))) {
      W.block(() => L(U, "$ref", pe.all.$ref.definition));
      return;
    }
    fe.jtd || G(U, F), W.block(() => {
      for (const Te of pe.rules)
        Qe(Te);
      Qe(pe.post);
    });
    function Qe(Te) {
      (0, n.shouldUseGroup)(Y, Te) && (Te.type ? (W.if((0, r.checkDataType)(Te.type, re, fe.strictNumbers)), V(U, Te), F.length === 1 && F[0] === Te.type && B && (W.else(), (0, r.reportTypeError)(U)), W.endIf()) : V(U, Te), ve || W.if((0, a._)`${o.default.errors} === ${K || 0}`));
    }
  }
  function V(U, F) {
    const { gen: B, schema: K, opts: { useDefaults: W } } = U;
    W && (0, c.assignDefaults)(U, F.type), B.block(() => {
      for (const Y of F.rules)
        (0, n.shouldUseRule)(K, Y) && L(U, Y.keyword, Y.definition, F.type);
    });
  }
  function G(U, F) {
    U.schemaEnv.meta || !U.opts.strictTypes || (J(U, F), U.opts.allowUnionTypes || M(U, F), k(U, U.dataTypes));
  }
  function J(U, F) {
    if (F.length) {
      if (!U.dataTypes.length) {
        U.dataTypes = F;
        return;
      }
      F.forEach((B) => {
        N(U.dataTypes, B) || $(U, `type "${B}" not allowed by context "${U.dataTypes.join(",")}"`);
      }), _(U, F);
    }
  }
  function M(U, F) {
    F.length > 1 && !(F.length === 2 && F.includes("null")) && $(U, "use allowUnionTypes to allow union type keyword");
  }
  function k(U, F) {
    const B = U.self.RULES.all;
    for (const K in B) {
      const W = B[K];
      if (typeof W == "object" && (0, n.shouldUseRule)(U.schema, W)) {
        const { type: Y } = W.definition;
        Y.length && !Y.some((re) => z(F, re)) && $(U, `missing type "${Y.join(",")}" for keyword "${K}"`);
      }
    }
  }
  function z(U, F) {
    return U.includes(F) || F === "number" && U.includes("integer");
  }
  function N(U, F) {
    return U.includes(F) || F === "integer" && U.includes("number");
  }
  function _(U, F) {
    const B = [];
    for (const K of U.dataTypes)
      N(F, K) ? B.push(K) : F.includes("integer") && K === "number" && B.push("integer");
    U.dataTypes = B;
  }
  function $(U, F) {
    const B = U.schemaEnv.baseId + U.errSchemaPath;
    F += ` at "${B}" (strictTypes)`, (0, m.checkStrictMode)(U, F, U.opts.strictTypes);
  }
  class C {
    constructor(F, B, K) {
      if ((0, i.validateKeywordUsage)(F, B, K), this.gen = F.gen, this.allErrors = F.allErrors, this.keyword = K, this.data = F.data, this.schema = F.schema[K], this.$data = B.$data && F.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, m.schemaRefOrVal)(F, this.schema, K, this.$data), this.schemaType = B.schemaType, this.parentSchema = F.schema, this.params = {}, this.it = F, this.def = B, this.$data)
        this.schemaCode = F.gen.const("vSchema", Z(this.$data, F));
      else if (this.schemaCode = this.schemaValue, !(0, i.validSchemaType)(this.schema, B.schemaType, B.allowUndefined))
        throw new Error(`${K} value must be ${JSON.stringify(B.schemaType)}`);
      ("code" in B ? B.trackErrors : B.errors !== !1) && (this.errsCount = F.gen.const("_errs", o.default.errors));
    }
    result(F, B, K) {
      this.failResult((0, a.not)(F), B, K);
    }
    failResult(F, B, K) {
      this.gen.if(F), K ? K() : this.error(), B ? (this.gen.else(), B(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(F, B) {
      this.failResult((0, a.not)(F), void 0, B);
    }
    fail(F) {
      if (F === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(F), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(F) {
      if (!this.$data)
        return this.fail(F);
      const { schemaCode: B } = this;
      this.fail((0, a._)`${B} !== undefined && (${(0, a.or)(this.invalid$data(), F)})`);
    }
    error(F, B, K) {
      if (B) {
        this.setParams(B), this._error(F, K), this.setParams({});
        return;
      }
      this._error(F, K);
    }
    _error(F, B) {
      (F ? g.reportExtraError : g.reportError)(this, this.def.error, B);
    }
    $dataError() {
      (0, g.reportError)(this, this.def.$dataError || g.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, g.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(F) {
      this.allErrors || this.gen.if(F);
    }
    setParams(F, B) {
      B ? Object.assign(this.params, F) : this.params = F;
    }
    block$data(F, B, K = a.nil) {
      this.gen.block(() => {
        this.check$data(F, K), B();
      });
    }
    check$data(F = a.nil, B = a.nil) {
      if (!this.$data)
        return;
      const { gen: K, schemaCode: W, schemaType: Y, def: re } = this;
      K.if((0, a.or)((0, a._)`${W} === undefined`, B)), F !== a.nil && K.assign(F, !0), (Y.length || re.validateSchema) && (K.elseIf(this.invalid$data()), this.$dataError(), F !== a.nil && K.assign(F, !1)), K.else();
    }
    invalid$data() {
      const { gen: F, schemaCode: B, schemaType: K, def: W, it: Y } = this;
      return (0, a.or)(re(), ve());
      function re() {
        if (K.length) {
          if (!(B instanceof a.Name))
            throw new Error("ajv implementation error");
          const fe = Array.isArray(K) ? K : [K];
          return (0, a._)`${(0, r.checkDataTypes)(fe, B, Y.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function ve() {
        if (W.validateSchema) {
          const fe = F.scopeValue("validate$data", { ref: W.validateSchema });
          return (0, a._)`!${fe}(${B})`;
        }
        return a.nil;
      }
    }
    subschema(F, B) {
      const K = (0, s.getSubschema)(this.it, F);
      (0, s.extendSubschemaData)(K, this.it, F), (0, s.extendSubschemaMode)(K, F);
      const W = { ...this.it, ...K, items: void 0, props: void 0 };
      return y(W, B), W;
    }
    mergeEvaluated(F, B) {
      const { it: K, gen: W } = this;
      K.opts.unevaluated && (K.props !== !0 && F.props !== void 0 && (K.props = m.mergeEvaluated.props(W, F.props, K.props, B)), K.items !== !0 && F.items !== void 0 && (K.items = m.mergeEvaluated.items(W, F.items, K.items, B)));
    }
    mergeValidEvaluated(F, B) {
      const { it: K, gen: W } = this;
      if (K.opts.unevaluated && (K.props !== !0 || K.items !== !0))
        return W.if(B, () => this.mergeEvaluated(F, a.Name)), !0;
    }
  }
  at.KeywordCxt = C;
  function L(U, F, B, K) {
    const W = new C(U, B, F);
    "code" in B ? B.code(W, K) : W.$data && B.validate ? (0, i.funcKeywordCode)(W, B) : "macro" in B ? (0, i.macroKeywordCode)(W, B) : (B.compile || B.validate) && (0, i.funcKeywordCode)(W, B);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Z(U, { dataLevel: F, dataNames: B, dataPathArr: K }) {
    let W, Y;
    if (U === "")
      return o.default.rootData;
    if (U[0] === "/") {
      if (!H.test(U))
        throw new Error(`Invalid JSON-pointer: ${U}`);
      W = U, Y = o.default.rootData;
    } else {
      const me = Q.exec(U);
      if (!me)
        throw new Error(`Invalid JSON-pointer: ${U}`);
      const pe = +me[1];
      if (W = me[2], W === "#") {
        if (pe >= F)
          throw new Error(fe("property/index", pe));
        return K[F - pe];
      }
      if (pe > F)
        throw new Error(fe("data", pe));
      if (Y = B[F - pe], !W)
        return Y;
    }
    let re = Y;
    const ve = W.split("/");
    for (const me of ve)
      me && (Y = (0, a._)`${Y}${(0, a.getProperty)((0, m.unescapeJsonPointer)(me))}`, re = (0, a._)`${re} && ${Y}`);
    return re;
    function fe(me, pe) {
      return `Cannot access ${me} ${pe} levels up, current level is ${F}`;
    }
  }
  return at.getData = Z, at;
}
var _n = {}, Ia;
function Fi() {
  if (Ia) return _n;
  Ia = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return _n.default = e, _n;
}
var jn = {}, Aa;
function gn() {
  if (Aa) return jn;
  Aa = 1, Object.defineProperty(jn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Vi();
  class t extends Error {
    constructor(r, c, i, s) {
      super(s || `can't resolve reference ${i} from id ${c}`), this.missingRef = (0, e.resolveUrl)(r, c, i), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
    }
  }
  return jn.default = t, jn;
}
var je = {}, qa;
function Gi() {
  if (qa) return je;
  qa = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.resolveSchema = je.getCompilingSchema = je.resolveRef = je.compileSchema = je.SchemaEnv = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Fi(), n = /* @__PURE__ */ Ze(), r = /* @__PURE__ */ Vi(), c = /* @__PURE__ */ ie(), i = /* @__PURE__ */ yn();
  class s {
    constructor(S) {
      var b;
      this.refs = {}, this.dynamicAnchors = {};
      let y;
      typeof S.schema == "object" && (y = S.schema), this.schema = S.schema, this.schemaId = S.schemaId, this.root = S.root || this, this.baseId = (b = S.baseId) !== null && b !== void 0 ? b : (0, r.normalizeId)(y?.[S.schemaId || "$id"]), this.schemaPath = S.schemaPath, this.localRefs = S.localRefs, this.meta = S.meta, this.$async = y?.$async, this.refs = {};
    }
  }
  je.SchemaEnv = s;
  function a(v) {
    const S = m.call(this, v);
    if (S)
      return S;
    const b = (0, r.getFullPath)(this.opts.uriResolver, v.root.baseId), { es5: y, lines: d } = this.opts.code, { ownProperties: l } = this.opts, h = new e.CodeGen(this.scope, { es5: y, lines: d, ownProperties: l });
    let I;
    v.$async && (I = h.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const A = h.scopeName("validate");
    v.validateName = A;
    const P = {
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
      topSchemaRef: h.scopeValue("schema", this.opts.code.source === !0 ? { ref: v.schema, code: (0, e.stringify)(v.schema) } : { ref: v.schema }),
      validateName: A,
      ValidationError: I,
      schema: v.schema,
      schemaEnv: v,
      rootId: b,
      baseId: v.baseId || b,
      schemaPath: e.nil,
      errSchemaPath: v.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let T;
    try {
      this._compilations.add(v), (0, i.validateFunctionCode)(P), h.optimize(this.opts.code.optimize);
      const j = h.toString();
      T = `${h.scopeRefs(n.default.scope)}return ${j}`, this.opts.code.process && (T = this.opts.code.process(T, v));
      const R = new Function(`${n.default.self}`, `${n.default.scope}`, T)(this, this.scope.get());
      if (this.scope.value(A, { ref: R }), R.errors = null, R.schema = v.schema, R.schemaEnv = v, v.$async && (R.$async = !0), this.opts.code.source === !0 && (R.source = { validateName: A, validateCode: j, scopeValues: h._values }), this.opts.unevaluated) {
        const { props: E, items: D } = P;
        R.evaluated = {
          props: E instanceof e.Name ? void 0 : E,
          items: D instanceof e.Name ? void 0 : D,
          dynamicProps: E instanceof e.Name,
          dynamicItems: D instanceof e.Name
        }, R.source && (R.source.evaluated = (0, e.stringify)(R.evaluated));
      }
      return v.validate = R, v;
    } catch (j) {
      throw delete v.validate, delete v.validateName, T && this.logger.error("Error compiling schema, function code:", T), j;
    } finally {
      this._compilations.delete(v);
    }
  }
  je.compileSchema = a;
  function o(v, S, b) {
    var y;
    b = (0, r.resolveUrl)(this.opts.uriResolver, S, b);
    const d = v.refs[b];
    if (d)
      return d;
    let l = u.call(this, v, b);
    if (l === void 0) {
      const h = (y = v.localRefs) === null || y === void 0 ? void 0 : y[b], { schemaId: I } = this.opts;
      h && (l = new s({ schema: h, schemaId: I, root: v, baseId: S }));
    }
    if (l !== void 0)
      return v.refs[b] = p.call(this, l);
  }
  je.resolveRef = o;
  function p(v) {
    return (0, r.inlineRef)(v.schema, this.opts.inlineRefs) ? v.schema : v.validate ? v : a.call(this, v);
  }
  function m(v) {
    for (const S of this._compilations)
      if (g(S, v))
        return S;
  }
  je.getCompilingSchema = m;
  function g(v, S) {
    return v.schema === S.schema && v.root === S.root && v.baseId === S.baseId;
  }
  function u(v, S) {
    let b;
    for (; typeof (b = this.refs[S]) == "string"; )
      S = b;
    return b || this.schemas[S] || f.call(this, v, S);
  }
  function f(v, S) {
    const b = this.opts.uriResolver.parse(S), y = (0, r._getFullPath)(this.opts.uriResolver, b);
    let d = (0, r.getFullPath)(this.opts.uriResolver, v.baseId, void 0);
    if (Object.keys(v.schema).length > 0 && y === d)
      return x.call(this, b, v);
    const l = (0, r.normalizeId)(y), h = this.refs[l] || this.schemas[l];
    if (typeof h == "string") {
      const I = f.call(this, v, h);
      return typeof I?.schema != "object" ? void 0 : x.call(this, b, I);
    }
    if (typeof h?.schema == "object") {
      if (h.validate || a.call(this, h), l === (0, r.normalizeId)(S)) {
        const { schema: I } = h, { schemaId: A } = this.opts, P = I[A];
        return P && (d = (0, r.resolveUrl)(this.opts.uriResolver, d, P)), new s({ schema: I, schemaId: A, root: v, baseId: d });
      }
      return x.call(this, b, h);
    }
  }
  je.resolveSchema = f;
  const w = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function x(v, { baseId: S, schema: b, root: y }) {
    var d;
    if (((d = v.fragment) === null || d === void 0 ? void 0 : d[0]) !== "/")
      return;
    for (const I of v.fragment.slice(1).split("/")) {
      if (typeof b == "boolean")
        return;
      const A = b[(0, c.unescapeFragment)(I)];
      if (A === void 0)
        return;
      b = A;
      const P = typeof b == "object" && b[this.opts.schemaId];
      !w.has(I) && P && (S = (0, r.resolveUrl)(this.opts.uriResolver, S, P));
    }
    let l;
    if (typeof b != "boolean" && b.$ref && !(0, c.schemaHasRulesButRef)(b, this.RULES)) {
      const I = (0, r.resolveUrl)(this.opts.uriResolver, S, b.$ref);
      l = f.call(this, y, I);
    }
    const { schemaId: h } = this.opts;
    if (l = l || new s({ schema: b, schemaId: h, root: y, baseId: S }), l.schema !== l.root.schema)
      return l;
  }
  return je;
}
const Ol = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Nl = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Ll = "object", Dl = ["$data"], zl = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Ul = !1, Vl = {
  $id: Ol,
  description: Nl,
  type: Ll,
  required: Dl,
  properties: zl,
  additionalProperties: Ul
};
var Pn = {}, rn = { exports: {} }, mr, $a;
function Jc() {
  if ($a) return mr;
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
  function s(u) {
    let f = 0;
    const w = { error: !1, address: "", zone: "" }, x = [], v = [];
    let S = !1, b = !1, y = i;
    for (let d = 0; d < u.length; d++) {
      const l = u[d];
      if (!(l === "[" || l === "]"))
        if (l === ":") {
          if (S === !0 && (b = !0), !y(v, x, w))
            break;
          if (++f > 7) {
            w.error = !0;
            break;
          }
          d > 0 && u[d - 1] === ":" && (S = !0), x.push(":");
          continue;
        } else if (l === "%") {
          if (!y(v, x, w))
            break;
          y = c;
        } else {
          v.push(l);
          continue;
        }
    }
    return v.length && (y === c ? w.zone = v.join("") : b ? x.push(v.join("")) : x.push(n(v))), w.address = x.join(""), w;
  }
  function a(u) {
    if (o(u, ":") < 2)
      return { host: u, isIPV6: !1 };
    const f = s(u);
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
    let x = -1, v = 0;
    for (; v = f.length; ) {
      if (v === 1) {
        if (f === ".")
          break;
        if (f === "/") {
          w.push("/");
          break;
        } else {
          w.push(f);
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
          w.push("/");
          break;
        }
      } else if (v === 3 && f === "/..") {
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
        const x = a(w);
        x.isIPV6 === !0 ? w = `[${x.escapedHost}]` : w = u.host;
      }
      f.push(w);
    }
    return (typeof u.port == "number" || typeof u.port == "string") && (f.push(":"), f.push(String(u.port))), f.length ? f.join("") : void 0;
  }
  return mr = {
    nonSimpleDomain: r,
    recomposeAuthority: g,
    normalizeComponentEncoding: m,
    removeDotSegments: p,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: a,
    stringArrayToHexStripped: n
  }, mr;
}
var yr, Ra;
function Fl() {
  if (Ra) return yr;
  Ra = 1;
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
  function s(l) {
    const h = String(l.scheme).toLowerCase() === "https";
    return (l.port === (h ? 443 : 80) || l.port === "") && (l.port = void 0), l.path || (l.path = "/"), l;
  }
  function a(l) {
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
      const P = `${A}:${h.nid || l.nid}`, T = d(P);
      l.path = void 0, T && (l = T.parse(l, h));
    } else
      l.error = l.error || "URN can not be parsed.";
    return l;
  }
  function m(l, h) {
    if (l.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const I = h.scheme || l.scheme || "urn", A = l.nid.toLowerCase(), P = `${I}:${h.nid || A}`, T = d(P);
    T && (l = T.serialize(l, h));
    const j = l, O = l.nss;
    return j.path = `${A || h.nid}:${O}`, h.skipEscape = !0, j;
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
      parse: i,
      serialize: s
    }
  ), w = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: f.domainHost,
      parse: i,
      serialize: s
    }
  ), x = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: a,
      serialize: o
    }
  ), v = (
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
      wss: v,
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
  return yr = {
    wsIsSecure: c,
    SCHEMES: y,
    isValidSchemeName: r,
    getSchemeHandler: d
  }, yr;
}
var _a;
function Gl() {
  if (_a) return rn.exports;
  _a = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizeComponentEncoding: r, isIPv4: c, nonSimpleDomain: i } = Jc(), { SCHEMES: s, getSchemeHandler: a } = Fl();
  function o(v, S) {
    return typeof v == "string" ? v = /** @type {T} */
    u(w(v, S), S) : typeof v == "object" && (v = /** @type {T} */
    w(u(v, S), S)), v;
  }
  function p(v, S, b) {
    const y = b ? Object.assign({ scheme: "null" }, b) : { scheme: "null" }, d = m(w(v, y), w(S, y), y, !0);
    return y.skipEscape = !0, u(d, y);
  }
  function m(v, S, b, y) {
    const d = {};
    return y || (v = w(u(v, b), b), S = w(u(S, b), b)), b = b || {}, !b.tolerant && S.scheme ? (d.scheme = S.scheme, d.userinfo = S.userinfo, d.host = S.host, d.port = S.port, d.path = t(S.path || ""), d.query = S.query) : (S.userinfo !== void 0 || S.host !== void 0 || S.port !== void 0 ? (d.userinfo = S.userinfo, d.host = S.host, d.port = S.port, d.path = t(S.path || ""), d.query = S.query) : (S.path ? (S.path[0] === "/" ? d.path = t(S.path) : ((v.userinfo !== void 0 || v.host !== void 0 || v.port !== void 0) && !v.path ? d.path = "/" + S.path : v.path ? d.path = v.path.slice(0, v.path.lastIndexOf("/") + 1) + S.path : d.path = S.path, d.path = t(d.path)), d.query = S.query) : (d.path = v.path, S.query !== void 0 ? d.query = S.query : d.query = v.query), d.userinfo = v.userinfo, d.host = v.host, d.port = v.port), d.scheme = v.scheme), d.fragment = S.fragment, d;
  }
  function g(v, S, b) {
    return typeof v == "string" ? (v = unescape(v), v = u(r(w(v, b), !0), { ...b, skipEscape: !0 })) : typeof v == "object" && (v = u(r(v, !0), { ...b, skipEscape: !0 })), typeof S == "string" ? (S = unescape(S), S = u(r(w(S, b), !0), { ...b, skipEscape: !0 })) : typeof S == "object" && (S = u(r(S, !0), { ...b, skipEscape: !0 })), v.toLowerCase() === S.toLowerCase();
  }
  function u(v, S) {
    const b = {
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
    }, y = Object.assign({}, S), d = [], l = a(y.scheme || b.scheme);
    l && l.serialize && l.serialize(b, y), b.path !== void 0 && (y.skipEscape ? b.path = unescape(b.path) : (b.path = escape(b.path), b.scheme !== void 0 && (b.path = b.path.split("%3A").join(":")))), y.reference !== "suffix" && b.scheme && d.push(b.scheme, ":");
    const h = n(b);
    if (h !== void 0 && (y.reference !== "suffix" && d.push("//"), d.push(h), b.path && b.path[0] !== "/" && d.push("/")), b.path !== void 0) {
      let I = b.path;
      !y.absolutePath && (!l || !l.absolutePath) && (I = t(I)), h === void 0 && I[0] === "/" && I[1] === "/" && (I = "/%2F" + I.slice(2)), d.push(I);
    }
    return b.query !== void 0 && d.push("?", b.query), b.fragment !== void 0 && d.push("#", b.fragment), d.join("");
  }
  const f = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function w(v, S) {
    const b = Object.assign({}, S), y = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let d = !1;
    b.reference === "suffix" && (b.scheme ? v = b.scheme + ":" + v : v = "//" + v);
    const l = v.match(f);
    if (l) {
      if (y.scheme = l[1], y.userinfo = l[3], y.host = l[4], y.port = parseInt(l[5], 10), y.path = l[6] || "", y.query = l[7], y.fragment = l[8], isNaN(y.port) && (y.port = l[5]), y.host)
        if (c(y.host) === !1) {
          const A = e(y.host);
          y.host = A.host.toLowerCase(), d = A.isIPV6;
        } else
          d = !0;
      y.scheme === void 0 && y.userinfo === void 0 && y.host === void 0 && y.port === void 0 && y.query === void 0 && !y.path ? y.reference = "same-document" : y.scheme === void 0 ? y.reference = "relative" : y.fragment === void 0 ? y.reference = "absolute" : y.reference = "uri", b.reference && b.reference !== "suffix" && b.reference !== y.reference && (y.error = y.error || "URI is not a " + b.reference + " reference.");
      const h = a(b.scheme || y.scheme);
      if (!b.unicodeSupport && (!h || !h.unicodeSupport) && y.host && (b.domainHost || h && h.domainHost) && d === !1 && i(y.host))
        try {
          y.host = URL.domainToASCII(y.host.toLowerCase());
        } catch (I) {
          y.error = y.error || "Host's domain name can not be converted to ASCII: " + I;
        }
      (!h || h && !h.skipNormalize) && (v.indexOf("%") !== -1 && (y.scheme !== void 0 && (y.scheme = unescape(y.scheme)), y.host !== void 0 && (y.host = unescape(y.host))), y.path && (y.path = escape(unescape(y.path))), y.fragment && (y.fragment = encodeURI(decodeURIComponent(y.fragment)))), h && h.parse && h.parse(y, b);
    } else
      y.error = y.error || "URI can not be parsed.";
    return y;
  }
  const x = {
    SCHEMES: s,
    normalize: o,
    resolve: p,
    resolveComponent: m,
    equal: g,
    serialize: u,
    parse: w
  };
  return rn.exports = x, rn.exports.default = x, rn.exports.fastUri = x, rn.exports;
}
var ja;
function Bl() {
  if (ja) return Pn;
  ja = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = Gl();
  return e.code = 'require("ajv/dist/runtime/uri").default', Pn.default = e, Pn;
}
var Pa;
function Hc() {
  return Pa || (Pa = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ yn();
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
    const r = /* @__PURE__ */ Fi(), c = /* @__PURE__ */ gn(), i = /* @__PURE__ */ Fc(), s = /* @__PURE__ */ Gi(), a = /* @__PURE__ */ te(), o = /* @__PURE__ */ Vi(), p = /* @__PURE__ */ ki(), m = /* @__PURE__ */ ie(), g = Vl, u = /* @__PURE__ */ Bl(), f = (M, k) => new RegExp(M, k);
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
    }, b = 200;
    function y(M) {
      var k, z, N, _, $, C, L, H, Q, Z, U, F, B, K, W, Y, re, ve, fe, me, pe, Qe, Te, Xi, Yi;
      const tn = M.strict, er = (k = M.code) === null || k === void 0 ? void 0 : k.optimize, Bs = er === !0 || er === void 0 ? 1 : er || 0, Js = (N = (z = M.code) === null || z === void 0 ? void 0 : z.regExp) !== null && N !== void 0 ? N : f, Md = (_ = M.uriResolver) !== null && _ !== void 0 ? _ : u.default;
      return {
        strictSchema: (C = ($ = M.strictSchema) !== null && $ !== void 0 ? $ : tn) !== null && C !== void 0 ? C : !0,
        strictNumbers: (H = (L = M.strictNumbers) !== null && L !== void 0 ? L : tn) !== null && H !== void 0 ? H : !0,
        strictTypes: (Z = (Q = M.strictTypes) !== null && Q !== void 0 ? Q : tn) !== null && Z !== void 0 ? Z : "log",
        strictTuples: (F = (U = M.strictTuples) !== null && U !== void 0 ? U : tn) !== null && F !== void 0 ? F : "log",
        strictRequired: (K = (B = M.strictRequired) !== null && B !== void 0 ? B : tn) !== null && K !== void 0 ? K : !1,
        code: M.code ? { ...M.code, optimize: Bs, regExp: Js } : { optimize: Bs, regExp: Js },
        loopRequired: (W = M.loopRequired) !== null && W !== void 0 ? W : b,
        loopEnum: (Y = M.loopEnum) !== null && Y !== void 0 ? Y : b,
        meta: (re = M.meta) !== null && re !== void 0 ? re : !0,
        messages: (ve = M.messages) !== null && ve !== void 0 ? ve : !0,
        inlineRefs: (fe = M.inlineRefs) !== null && fe !== void 0 ? fe : !0,
        schemaId: (me = M.schemaId) !== null && me !== void 0 ? me : "$id",
        addUsedSchema: (pe = M.addUsedSchema) !== null && pe !== void 0 ? pe : !0,
        validateSchema: (Qe = M.validateSchema) !== null && Qe !== void 0 ? Qe : !0,
        validateFormats: (Te = M.validateFormats) !== null && Te !== void 0 ? Te : !0,
        unicodeRegExp: (Xi = M.unicodeRegExp) !== null && Xi !== void 0 ? Xi : !0,
        int32range: (Yi = M.int32range) !== null && Yi !== void 0 ? Yi : !0,
        uriResolver: Md
      };
    }
    class d {
      constructor(k = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), k = this.opts = { ...k, ...y(k) };
        const { es5: z, lines: N } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: x, es5: z, lines: N }), this.logger = O(k.logger);
        const _ = k.validateFormats;
        k.validateFormats = !1, this.RULES = (0, i.getRules)(), l.call(this, v, k, "NOT SUPPORTED"), l.call(this, S, k, "DEPRECATED", "warn"), this._metaOpts = T.call(this), k.formats && A.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), k.keywords && P.call(this, k.keywords), typeof k.meta == "object" && this.addMetaSchema(k.meta), I.call(this), k.validateFormats = _;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: k, meta: z, schemaId: N } = this.opts;
        let _ = g;
        N === "id" && (_ = { ...g }, _.id = _.$id, delete _.$id), z && k && this.addMetaSchema(_, _[N], !1);
      }
      defaultMeta() {
        const { meta: k, schemaId: z } = this.opts;
        return this.opts.defaultMeta = typeof k == "object" ? k[z] || k : void 0;
      }
      validate(k, z) {
        let N;
        if (typeof k == "string") {
          if (N = this.getSchema(k), !N)
            throw new Error(`no schema with key or ref "${k}"`);
        } else
          N = this.compile(k);
        const _ = N(z);
        return "$async" in N || (this.errors = N.errors), _;
      }
      compile(k, z) {
        const N = this._addSchema(k, z);
        return N.validate || this._compileSchemaEnv(N);
      }
      compileAsync(k, z) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: N } = this.opts;
        return _.call(this, k, z);
        async function _(Z, U) {
          await $.call(this, Z.$schema);
          const F = this._addSchema(Z, U);
          return F.validate || C.call(this, F);
        }
        async function $(Z) {
          Z && !this.getSchema(Z) && await _.call(this, { $ref: Z }, !0);
        }
        async function C(Z) {
          try {
            return this._compileSchemaEnv(Z);
          } catch (U) {
            if (!(U instanceof c.default))
              throw U;
            return L.call(this, U), await H.call(this, U.missingSchema), C.call(this, Z);
          }
        }
        function L({ missingSchema: Z, missingRef: U }) {
          if (this.refs[Z])
            throw new Error(`AnySchema ${Z} is loaded but ${U} cannot be resolved`);
        }
        async function H(Z) {
          const U = await Q.call(this, Z);
          this.refs[Z] || await $.call(this, U.$schema), this.refs[Z] || this.addSchema(U, Z, z);
        }
        async function Q(Z) {
          const U = this._loading[Z];
          if (U)
            return U;
          try {
            return await (this._loading[Z] = N(Z));
          } finally {
            delete this._loading[Z];
          }
        }
      }
      // Adds schema to the instance
      addSchema(k, z, N, _ = this.opts.validateSchema) {
        if (Array.isArray(k)) {
          for (const C of k)
            this.addSchema(C, void 0, N, _);
          return this;
        }
        let $;
        if (typeof k == "object") {
          const { schemaId: C } = this.opts;
          if ($ = k[C], $ !== void 0 && typeof $ != "string")
            throw new Error(`schema ${C} must be string`);
        }
        return z = (0, o.normalizeId)(z || $), this._checkUnique(z), this.schemas[z] = this._addSchema(k, N, z, _, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(k, z, N = this.opts.validateSchema) {
        return this.addSchema(k, z, !0, N), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(k, z) {
        if (typeof k == "boolean")
          return !0;
        let N;
        if (N = k.$schema, N !== void 0 && typeof N != "string")
          throw new Error("$schema must be a string");
        if (N = N || this.opts.defaultMeta || this.defaultMeta(), !N)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const _ = this.validate(N, k);
        if (!_ && z) {
          const $ = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error($);
          else
            throw new Error($);
        }
        return _;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(k) {
        let z;
        for (; typeof (z = h.call(this, k)) == "string"; )
          k = z;
        if (z === void 0) {
          const { schemaId: N } = this.opts, _ = new s.SchemaEnv({ schema: {}, schemaId: N });
          if (z = s.resolveSchema.call(this, _, k), !z)
            return;
          this.refs[k] = z;
        }
        return z.validate || this._compileSchemaEnv(z);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(k) {
        if (k instanceof RegExp)
          return this._removeAllSchemas(this.schemas, k), this._removeAllSchemas(this.refs, k), this;
        switch (typeof k) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const z = h.call(this, k);
            return typeof z == "object" && this._cache.delete(z.schema), delete this.schemas[k], delete this.refs[k], this;
          }
          case "object": {
            const z = k;
            this._cache.delete(z);
            let N = k[this.opts.schemaId];
            return N && (N = (0, o.normalizeId)(N), delete this.schemas[N], delete this.refs[N]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(k) {
        for (const z of k)
          this.addKeyword(z);
        return this;
      }
      addKeyword(k, z) {
        let N;
        if (typeof k == "string")
          N = k, typeof z == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), z.keyword = N);
        else if (typeof k == "object" && z === void 0) {
          if (z = k, N = z.keyword, Array.isArray(N) && !N.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (E.call(this, N, z), !z)
          return (0, m.eachItem)(N, ($) => D.call(this, $)), this;
        V.call(this, z);
        const _ = {
          ...z,
          type: (0, p.getJSONTypes)(z.type),
          schemaType: (0, p.getJSONTypes)(z.schemaType)
        };
        return (0, m.eachItem)(N, _.type.length === 0 ? ($) => D.call(this, $, _) : ($) => _.type.forEach((C) => D.call(this, $, _, C))), this;
      }
      getKeyword(k) {
        const z = this.RULES.all[k];
        return typeof z == "object" ? z.definition : !!z;
      }
      // Remove keyword
      removeKeyword(k) {
        const { RULES: z } = this;
        delete z.keywords[k], delete z.all[k];
        for (const N of z.rules) {
          const _ = N.rules.findIndex(($) => $.keyword === k);
          _ >= 0 && N.rules.splice(_, 1);
        }
        return this;
      }
      // Add format
      addFormat(k, z) {
        return typeof z == "string" && (z = new RegExp(z)), this.formats[k] = z, this;
      }
      errorsText(k = this.errors, { separator: z = ", ", dataVar: N = "data" } = {}) {
        return !k || k.length === 0 ? "No errors" : k.map((_) => `${N}${_.instancePath} ${_.message}`).reduce((_, $) => _ + z + $);
      }
      $dataMetaSchema(k, z) {
        const N = this.RULES.all;
        k = JSON.parse(JSON.stringify(k));
        for (const _ of z) {
          const $ = _.split("/").slice(1);
          let C = k;
          for (const L of $)
            C = C[L];
          for (const L in N) {
            const H = N[L];
            if (typeof H != "object")
              continue;
            const { $data: Q } = H.definition, Z = C[L];
            Q && Z && (C[L] = J(Z));
          }
        }
        return k;
      }
      _removeAllSchemas(k, z) {
        for (const N in k) {
          const _ = k[N];
          (!z || z.test(N)) && (typeof _ == "string" ? delete k[N] : _ && !_.meta && (this._cache.delete(_.schema), delete k[N]));
        }
      }
      _addSchema(k, z, N, _ = this.opts.validateSchema, $ = this.opts.addUsedSchema) {
        let C;
        const { schemaId: L } = this.opts;
        if (typeof k == "object")
          C = k[L];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof k != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let H = this._cache.get(k);
        if (H !== void 0)
          return H;
        N = (0, o.normalizeId)(C || N);
        const Q = o.getSchemaRefs.call(this, k, N);
        return H = new s.SchemaEnv({ schema: k, schemaId: L, meta: z, baseId: N, localRefs: Q }), this._cache.set(H.schema, H), $ && !N.startsWith("#") && (N && this._checkUnique(N), this.refs[N] = H), _ && this.validateSchema(k, !0), H;
      }
      _checkUnique(k) {
        if (this.schemas[k] || this.refs[k])
          throw new Error(`schema with key or id "${k}" already exists`);
      }
      _compileSchemaEnv(k) {
        if (k.meta ? this._compileMetaSchema(k) : s.compileSchema.call(this, k), !k.validate)
          throw new Error("ajv implementation error");
        return k.validate;
      }
      _compileMetaSchema(k) {
        const z = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, k);
        } finally {
          this.opts = z;
        }
      }
    }
    d.ValidationError = r.default, d.MissingRefError = c.default, e.default = d;
    function l(M, k, z, N = "error") {
      for (const _ in M) {
        const $ = _;
        $ in k && this.logger[N](`${z}: option ${_}. ${M[$]}`);
      }
    }
    function h(M) {
      return M = (0, o.normalizeId)(M), this.schemas[M] || this.refs[M];
    }
    function I() {
      const M = this.opts.schemas;
      if (M)
        if (Array.isArray(M))
          this.addSchema(M);
        else
          for (const k in M)
            this.addSchema(M[k], k);
    }
    function A() {
      for (const M in this.opts.formats) {
        const k = this.opts.formats[M];
        k && this.addFormat(M, k);
      }
    }
    function P(M) {
      if (Array.isArray(M)) {
        this.addVocabulary(M);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const k in M) {
        const z = M[k];
        z.keyword || (z.keyword = k), this.addKeyword(z);
      }
    }
    function T() {
      const M = { ...this.opts };
      for (const k of w)
        delete M[k];
      return M;
    }
    const j = { log() {
    }, warn() {
    }, error() {
    } };
    function O(M) {
      if (M === !1)
        return j;
      if (M === void 0)
        return console;
      if (M.log && M.warn && M.error)
        return M;
      throw new Error("logger must implement log, warn and error methods");
    }
    const R = /^[a-z_$][a-z0-9_$:-]*$/i;
    function E(M, k) {
      const { RULES: z } = this;
      if ((0, m.eachItem)(M, (N) => {
        if (z.keywords[N])
          throw new Error(`Keyword ${N} is already defined`);
        if (!R.test(N))
          throw new Error(`Keyword ${N} has invalid name`);
      }), !!k && k.$data && !("code" in k || "validate" in k))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function D(M, k, z) {
      var N;
      const _ = k?.post;
      if (z && _)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: $ } = this;
      let C = _ ? $.post : $.rules.find(({ type: H }) => H === z);
      if (C || (C = { type: z, rules: [] }, $.rules.push(C)), $.keywords[M] = !0, !k)
        return;
      const L = {
        keyword: M,
        definition: {
          ...k,
          type: (0, p.getJSONTypes)(k.type),
          schemaType: (0, p.getJSONTypes)(k.schemaType)
        }
      };
      k.before ? q.call(this, C, L, k.before) : C.rules.push(L), $.all[M] = L, (N = k.implements) === null || N === void 0 || N.forEach((H) => this.addKeyword(H));
    }
    function q(M, k, z) {
      const N = M.rules.findIndex((_) => _.keyword === z);
      N >= 0 ? M.rules.splice(N, 0, k) : (M.rules.push(k), this.logger.warn(`rule ${z} is not defined`));
    }
    function V(M) {
      let { metaSchema: k } = M;
      k !== void 0 && (M.$data && this.opts.$data && (k = J(k)), M.validateSchema = this.compile(k, !0));
    }
    const G = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function J(M) {
      return { anyOf: [M, G] };
    }
  })(cr)), cr;
}
var En = {}, Cn = {}, Tn = {}, Ea;
function Jl() {
  if (Ea) return Tn;
  Ea = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Tn.default = e, Tn;
}
var yt = {}, Ca;
function _s() {
  if (Ca) return yt;
  Ca = 1, Object.defineProperty(yt, "__esModule", { value: !0 }), yt.callRef = yt.getValidate = void 0;
  const e = /* @__PURE__ */ gn(), t = /* @__PURE__ */ Ke(), n = /* @__PURE__ */ te(), r = /* @__PURE__ */ Ze(), c = /* @__PURE__ */ Gi(), i = /* @__PURE__ */ ie(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(p) {
      const { gen: m, schema: g, it: u } = p, { baseId: f, schemaEnv: w, validateName: x, opts: v, self: S } = u, { root: b } = w;
      if ((g === "#" || g === "#/") && f === b.baseId)
        return d();
      const y = c.resolveRef.call(S, b, f, g);
      if (y === void 0)
        throw new e.default(u.opts.uriResolver, f, g);
      if (y instanceof c.SchemaEnv)
        return l(y);
      return h(y);
      function d() {
        if (w === b)
          return o(p, x, w, w.$async);
        const I = m.scopeValue("root", { ref: b });
        return o(p, (0, n._)`${I}.validate`, b, b.$async);
      }
      function l(I) {
        const A = a(p, I);
        o(p, A, I, I.$async);
      }
      function h(I) {
        const A = m.scopeValue("schema", v.code.source === !0 ? { ref: I, code: (0, n.stringify)(I) } : { ref: I }), P = m.name("valid"), T = p.subschema({
          schema: I,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: A,
          errSchemaPath: g
        }, P);
        p.mergeEvaluated(T), p.ok(P);
      }
    }
  };
  function a(p, m) {
    const { gen: g } = p;
    return m.validate ? g.scopeValue("validate", { ref: m.validate }) : (0, n._)`${g.scopeValue("wrapper", { ref: m })}.validate`;
  }
  yt.getValidate = a;
  function o(p, m, g, u) {
    const { gen: f, it: w } = p, { allErrors: x, schemaEnv: v, opts: S } = w, b = S.passContext ? r.default.this : n.nil;
    u ? y() : d();
    function y() {
      if (!v.$async)
        throw new Error("async schema referenced by sync schema");
      const I = f.let("valid");
      f.try(() => {
        f.code((0, n._)`await ${(0, t.callValidateCode)(p, m, b)}`), h(m), x || f.assign(I, !0);
      }, (A) => {
        f.if((0, n._)`!(${A} instanceof ${w.ValidationError})`, () => f.throw(A)), l(A), x || f.assign(I, !1);
      }), p.ok(I);
    }
    function d() {
      p.result((0, t.callValidateCode)(p, m, b), () => h(m), () => l(m));
    }
    function l(I) {
      const A = (0, n._)`${I}.errors`;
      f.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${A} : ${r.default.vErrors}.concat(${A})`), f.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
    }
    function h(I) {
      var A;
      if (!w.opts.unevaluated)
        return;
      const P = (A = g?.validate) === null || A === void 0 ? void 0 : A.evaluated;
      if (w.props !== !0)
        if (P && !P.dynamicProps)
          P.props !== void 0 && (w.props = i.mergeEvaluated.props(f, P.props, w.props));
        else {
          const T = f.var("props", (0, n._)`${I}.evaluated.props`);
          w.props = i.mergeEvaluated.props(f, T, w.props, n.Name);
        }
      if (w.items !== !0)
        if (P && !P.dynamicItems)
          P.items !== void 0 && (w.items = i.mergeEvaluated.items(f, P.items, w.items));
        else {
          const T = f.var("items", (0, n._)`${I}.evaluated.items`);
          w.items = i.mergeEvaluated.items(f, T, w.items, n.Name);
        }
    }
  }
  return yt.callRef = o, yt.default = s, yt;
}
var Ta;
function Zc() {
  if (Ta) return Cn;
  Ta = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Jl(), t = /* @__PURE__ */ _s(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Cn.default = n, Cn;
}
var Mn = {}, kn = {}, Ma;
function Hl() {
  if (Ma) return kn;
  Ma = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, r = {
    message: ({ keyword: i, schemaCode: s }) => (0, e.str)`must be ${n[i].okStr} ${s}`,
    params: ({ keyword: i, schemaCode: s }) => (0, e._)`{comparison: ${n[i].okStr}, limit: ${s}}`
  }, c = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: r,
    code(i) {
      const { keyword: s, data: a, schemaCode: o } = i;
      i.fail$data((0, e._)`${a} ${n[s].fail} ${o} || isNaN(${a})`);
    }
  };
  return kn.default = c, kn;
}
var On = {}, ka;
function Zl() {
  if (ka) return On;
  ka = 1, Object.defineProperty(On, "__esModule", { value: !0 });
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
      const { gen: c, data: i, schemaCode: s, it: a } = r, o = a.opts.multipleOfPrecision, p = c.let("res"), m = o ? (0, e._)`Math.abs(Math.round(${p}) - ${p}) > 1e-${o}` : (0, e._)`${p} !== parseInt(${p})`;
      r.fail$data((0, e._)`(${s} === 0 || (${p} = ${i}/${s}, ${m}))`);
    }
  };
  return On.default = n, On;
}
var Nn = {}, Ln = {}, Oa;
function Kl() {
  if (Oa) return Ln;
  Oa = 1, Object.defineProperty(Ln, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let r = 0, c = 0, i;
    for (; c < n; )
      r++, i = t.charCodeAt(c++), i >= 55296 && i <= 56319 && c < n && (i = t.charCodeAt(c), (i & 64512) === 56320 && c++);
    return r;
  }
  return Ln.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Ln;
}
var Na;
function Ql() {
  if (Na) return Nn;
  Na = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Kl(), c = {
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
      const { keyword: s, data: a, schemaCode: o, it: p } = i, m = s === "maxLength" ? e.operators.GT : e.operators.LT, g = p.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(i.gen, n.default)}(${a})`;
      i.fail$data((0, e._)`${g} ${m} ${o}`);
    }
  };
  return Nn.default = c, Nn;
}
var Dn = {}, La;
function Wl() {
  if (La) return Dn;
  La = 1, Object.defineProperty(Dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ke(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ te(), c = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, n.str)`must match pattern "${i}"`,
      params: ({ schemaCode: i }) => (0, n._)`{pattern: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: o, schema: p, schemaCode: m, it: g } = i, u = g.opts.unicodeRegExp ? "u" : "";
      if (o) {
        const { regExp: f } = g.opts.code, w = f.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, f), x = s.let("valid");
        s.try(() => s.assign(x, (0, n._)`${w}(${m}, ${u}).test(${a})`), () => s.assign(x, !1)), i.fail$data((0, n._)`!${x}`);
      } else {
        const f = (0, e.usePattern)(i, p);
        i.fail$data((0, n._)`!${f}.test(${a})`);
      }
    }
  };
  return Dn.default = c, Dn;
}
var zn = {}, Da;
function Xl() {
  if (Da) return zn;
  Da = 1, Object.defineProperty(zn, "__esModule", { value: !0 });
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
      const { keyword: c, data: i, schemaCode: s } = r, a = c === "maxProperties" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`Object.keys(${i}).length ${a} ${s}`);
    }
  };
  return zn.default = n, zn;
}
var Un = {}, za;
function Yl() {
  if (za) return Un;
  za = 1, Object.defineProperty(Un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ke(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), c = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: i } }) => (0, t.str)`must have required property '${i}'`,
      params: ({ params: { missingProperty: i } }) => (0, t._)`{missingProperty: ${i}}`
    },
    code(i) {
      const { gen: s, schema: a, schemaCode: o, data: p, $data: m, it: g } = i, { opts: u } = g;
      if (!m && a.length === 0)
        return;
      const f = a.length >= u.loopRequired;
      if (g.allErrors ? w() : x(), u.strictRequired) {
        const b = i.parentSchema.properties, { definedProperties: y } = i.it;
        for (const d of a)
          if (b?.[d] === void 0 && !y.has(d)) {
            const l = g.schemaEnv.baseId + g.errSchemaPath, h = `required property "${d}" is not defined at "${l}" (strictRequired)`;
            (0, n.checkStrictMode)(g, h, g.opts.strictRequired);
          }
      }
      function w() {
        if (f || m)
          i.block$data(t.nil, v);
        else
          for (const b of a)
            (0, e.checkReportMissingProp)(i, b);
      }
      function x() {
        const b = s.let("missing");
        if (f || m) {
          const y = s.let("valid", !0);
          i.block$data(y, () => S(b, y)), i.ok(y);
        } else
          s.if((0, e.checkMissingProp)(i, a, b)), (0, e.reportMissingProp)(i, b), s.else();
      }
      function v() {
        s.forOf("prop", o, (b) => {
          i.setParams({ missingProperty: b }), s.if((0, e.noPropertyInData)(s, p, b, u.ownProperties), () => i.error());
        });
      }
      function S(b, y) {
        i.setParams({ missingProperty: b }), s.forOf(b, o, () => {
          s.assign(y, (0, e.propertyInData)(s, p, b, u.ownProperties)), s.if((0, t.not)(y), () => {
            i.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return Un.default = c, Un;
}
var Vn = {}, Ua;
function eu() {
  if (Ua) return Vn;
  Ua = 1, Object.defineProperty(Vn, "__esModule", { value: !0 });
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
      const { keyword: c, data: i, schemaCode: s } = r, a = c === "maxItems" ? e.operators.GT : e.operators.LT;
      r.fail$data((0, e._)`${i}.length ${a} ${s}`);
    }
  };
  return Vn.default = n, Vn;
}
var Fn = {}, Gn = {}, Va;
function js() {
  if (Va) return Gn;
  Va = 1, Object.defineProperty(Gn, "__esModule", { value: !0 });
  const e = Bc();
  return e.code = 'require("ajv/dist/runtime/equal").default', Gn.default = e, Gn;
}
var Fa;
function tu() {
  if (Fa) return Fn;
  Fa = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ki(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ js(), i = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: o, $data: p, schema: m, parentSchema: g, schemaCode: u, it: f } = s;
      if (!p && !m)
        return;
      const w = a.let("valid"), x = g.items ? (0, e.getSchemaTypes)(g.items) : [];
      s.block$data(w, v, (0, t._)`${u} === false`), s.ok(w);
      function v() {
        const d = a.let("i", (0, t._)`${o}.length`), l = a.let("j");
        s.setParams({ i: d, j: l }), a.assign(w, !0), a.if((0, t._)`${d} > 1`, () => (S() ? b : y)(d, l));
      }
      function S() {
        return x.length > 0 && !x.some((d) => d === "object" || d === "array");
      }
      function b(d, l) {
        const h = a.name("item"), I = (0, e.checkDataTypes)(x, h, f.opts.strictNumbers, e.DataType.Wrong), A = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${d}--;`, () => {
          a.let(h, (0, t._)`${o}[${d}]`), a.if(I, (0, t._)`continue`), x.length > 1 && a.if((0, t._)`typeof ${h} == "string"`, (0, t._)`${h} += "_"`), a.if((0, t._)`typeof ${A}[${h}] == "number"`, () => {
            a.assign(l, (0, t._)`${A}[${h}]`), s.error(), a.assign(w, !1).break();
          }).code((0, t._)`${A}[${h}] = ${d}`);
        });
      }
      function y(d, l) {
        const h = (0, n.useFunc)(a, r.default), I = a.name("outer");
        a.label(I).for((0, t._)`;${d}--;`, () => a.for((0, t._)`${l} = ${d}; ${l}--;`, () => a.if((0, t._)`${h}(${o}[${d}], ${o}[${l}])`, () => {
          s.error(), a.assign(w, !1).break(I);
        })));
      }
    }
  };
  return Fn.default = i, Fn;
}
var Bn = {}, Ga;
function nu() {
  if (Ga) return Bn;
  Ga = 1, Object.defineProperty(Bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ js(), c = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValue: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: o, schemaCode: p, schema: m } = i;
      o || m && typeof m == "object" ? i.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${p})`) : i.fail((0, e._)`${m} !== ${a}`);
    }
  };
  return Bn.default = c, Bn;
}
var Jn = {}, Ba;
function iu() {
  if (Ba) return Jn;
  Ba = 1, Object.defineProperty(Jn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ js(), c = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: i }) => (0, e._)`{allowedValues: ${i}}`
    },
    code(i) {
      const { gen: s, data: a, $data: o, schema: p, schemaCode: m, it: g } = i;
      if (!o && p.length === 0)
        throw new Error("enum must have non-empty array");
      const u = p.length >= g.opts.loopEnum;
      let f;
      const w = () => f ?? (f = (0, t.useFunc)(s, n.default));
      let x;
      if (u || o)
        x = s.let("valid"), i.block$data(x, v);
      else {
        if (!Array.isArray(p))
          throw new Error("ajv implementation error");
        const b = s.const("vSchema", m);
        x = (0, e.or)(...p.map((y, d) => S(b, d)));
      }
      i.pass(x);
      function v() {
        s.assign(x, !1), s.forOf("v", m, (b) => s.if((0, e._)`${w()}(${a}, ${b})`, () => s.assign(x, !0).break()));
      }
      function S(b, y) {
        const d = p[y];
        return typeof d == "object" && d !== null ? (0, e._)`${w()}(${a}, ${b}[${y}])` : (0, e._)`${a} === ${d}`;
      }
    }
  };
  return Jn.default = c, Jn;
}
var Ja;
function Kc() {
  if (Ja) return Mn;
  Ja = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hl(), t = /* @__PURE__ */ Zl(), n = /* @__PURE__ */ Ql(), r = /* @__PURE__ */ Wl(), c = /* @__PURE__ */ Xl(), i = /* @__PURE__ */ Yl(), s = /* @__PURE__ */ eu(), a = /* @__PURE__ */ tu(), o = /* @__PURE__ */ nu(), p = /* @__PURE__ */ iu(), m = [
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
    s.default,
    a.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    o.default,
    p.default
  ];
  return Mn.default = m, Mn;
}
var Hn = {}, Nt = {}, Ha;
function Qc() {
  if (Ha) return Nt;
  Ha = 1, Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), r = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: i } }) => (0, e.str)`must NOT have more than ${i} items`,
      params: ({ params: { len: i } }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { parentSchema: s, it: a } = i, { items: o } = s;
      if (!Array.isArray(o)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      c(i, o);
    }
  };
  function c(i, s) {
    const { gen: a, schema: o, data: p, keyword: m, it: g } = i;
    g.items = !0;
    const u = a.const("len", (0, e._)`${p}.length`);
    if (o === !1)
      i.setParams({ len: s.length }), i.pass((0, e._)`${u} <= ${s.length}`);
    else if (typeof o == "object" && !(0, t.alwaysValidSchema)(g, o)) {
      const w = a.var("valid", (0, e._)`${u} <= ${s.length}`);
      a.if((0, e.not)(w), () => f(w)), i.ok(w);
    }
    function f(w) {
      a.forRange("i", s.length, u, (x) => {
        i.subschema({ keyword: m, dataProp: x, dataPropType: t.Type.Num }, w), g.allErrors || a.if((0, e.not)(w), () => a.break());
      });
    }
  }
  return Nt.validateAdditionalItems = c, Nt.default = r, Nt;
}
var Zn = {}, Lt = {}, Za;
function Wc() {
  if (Za) return Lt;
  Za = 1, Object.defineProperty(Lt, "__esModule", { value: !0 }), Lt.validateTuple = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Ke(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(i) {
      const { schema: s, it: a } = i;
      if (Array.isArray(s))
        return c(i, "additionalItems", s);
      a.items = !0, !(0, t.alwaysValidSchema)(a, s) && i.ok((0, n.validateArray)(i));
    }
  };
  function c(i, s, a = i.schema) {
    const { gen: o, parentSchema: p, data: m, keyword: g, it: u } = i;
    x(p), u.opts.unevaluated && a.length && u.items !== !0 && (u.items = t.mergeEvaluated.items(o, a.length, u.items));
    const f = o.name("valid"), w = o.const("len", (0, e._)`${m}.length`);
    a.forEach((v, S) => {
      (0, t.alwaysValidSchema)(u, v) || (o.if((0, e._)`${w} > ${S}`, () => i.subschema({
        keyword: g,
        schemaProp: S,
        dataProp: S
      }, f)), i.ok(f));
    });
    function x(v) {
      const { opts: S, errSchemaPath: b } = u, y = a.length, d = y === v.minItems && (y === v.maxItems || v[s] === !1);
      if (S.strictTuples && !d) {
        const l = `"${g}" is ${y}-tuple, but minItems or maxItems/${s} are not specified or different at path "${b}"`;
        (0, t.checkStrictMode)(u, l, S.strictTuples);
      }
    }
  }
  return Lt.validateTuple = c, Lt.default = r, Lt;
}
var Ka;
function ru() {
  if (Ka) return Zn;
  Ka = 1, Object.defineProperty(Zn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wc(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return Zn.default = t, Zn;
}
var Kn = {}, Qa;
function su() {
  if (Qa) return Kn;
  Qa = 1, Object.defineProperty(Kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Ke(), r = /* @__PURE__ */ Qc(), i = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: o, it: p } = s, { prefixItems: m } = o;
      p.items = !0, !(0, t.alwaysValidSchema)(p, a) && (m ? (0, r.validateAdditionalItems)(s, m) : s.ok((0, n.validateArray)(s)));
    }
  };
  return Kn.default = i, Kn;
}
var Qn = {}, Wa;
function au() {
  if (Wa) return Qn;
  Wa = 1, Object.defineProperty(Qn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), r = {
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
      const { gen: i, schema: s, parentSchema: a, data: o, it: p } = c;
      let m, g;
      const { minContains: u, maxContains: f } = a;
      p.opts.next ? (m = u === void 0 ? 1 : u, g = f) : m = 1;
      const w = i.const("len", (0, e._)`${o}.length`);
      if (c.setParams({ min: m, max: g }), g === void 0 && m === 0) {
        (0, t.checkStrictMode)(p, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (g !== void 0 && m > g) {
        (0, t.checkStrictMode)(p, '"minContains" > "maxContains" is always invalid'), c.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(p, s)) {
        let y = (0, e._)`${w} >= ${m}`;
        g !== void 0 && (y = (0, e._)`${y} && ${w} <= ${g}`), c.pass(y);
        return;
      }
      p.items = !0;
      const x = i.name("valid");
      g === void 0 && m === 1 ? S(x, () => i.if(x, () => i.break())) : m === 0 ? (i.let(x, !0), g !== void 0 && i.if((0, e._)`${o}.length > 0`, v)) : (i.let(x, !1), v()), c.result(x, () => c.reset());
      function v() {
        const y = i.name("_valid"), d = i.let("count", 0);
        S(y, () => i.if(y, () => b(d)));
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
      function b(y) {
        i.code((0, e._)`${y}++`), g === void 0 ? i.if((0, e._)`${y} >= ${m}`, () => i.assign(x, !0).break()) : (i.if((0, e._)`${y} > ${g}`, () => i.assign(x, !1).break()), m === 1 ? i.assign(x, !0) : i.if((0, e._)`${y} >= ${m}`, () => i.assign(x, !0)));
      }
    }
  };
  return Qn.default = r, Qn;
}
var gr = {}, Xa;
function Ps() {
  return Xa || (Xa = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Ke();
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
        const [p, m] = i(o);
        s(o, p), a(o, m);
      }
    };
    function i({ schema: o }) {
      const p = {}, m = {};
      for (const g in o) {
        if (g === "__proto__")
          continue;
        const u = Array.isArray(o[g]) ? p : m;
        u[g] = o[g];
      }
      return [p, m];
    }
    function s(o, p = o.schema) {
      const { gen: m, data: g, it: u } = o;
      if (Object.keys(p).length === 0)
        return;
      const f = m.let("missing");
      for (const w in p) {
        const x = p[w];
        if (x.length === 0)
          continue;
        const v = (0, r.propertyInData)(m, g, w, u.opts.ownProperties);
        o.setParams({
          property: w,
          depsCount: x.length,
          deps: x.join(", ")
        }), u.allErrors ? m.if(v, () => {
          for (const S of x)
            (0, r.checkReportMissingProp)(o, S);
        }) : (m.if((0, t._)`${v} && (${(0, r.checkMissingProp)(o, x, f)})`), (0, r.reportMissingProp)(o, f), m.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(o, p = o.schema) {
      const { gen: m, data: g, keyword: u, it: f } = o, w = m.name("valid");
      for (const x in p)
        (0, n.alwaysValidSchema)(f, p[x]) || (m.if(
          (0, r.propertyInData)(m, g, x, f.opts.ownProperties),
          () => {
            const v = o.subschema({ keyword: u, schemaProp: x }, w);
            o.mergeValidEvaluated(v, w);
          },
          () => m.var(w, !0)
          // TODO var
        ), o.ok(w));
    }
    e.validateSchemaDeps = a, e.default = c;
  })(gr)), gr;
}
var Wn = {}, Ya;
function ou() {
  if (Ya) return Wn;
  Ya = 1, Object.defineProperty(Wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), r = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: c }) => (0, e._)`{propertyName: ${c.propertyName}}`
    },
    code(c) {
      const { gen: i, schema: s, data: a, it: o } = c;
      if ((0, t.alwaysValidSchema)(o, s))
        return;
      const p = i.name("valid");
      i.forIn("key", a, (m) => {
        c.setParams({ propertyName: m }), c.subschema({
          keyword: "propertyNames",
          data: m,
          dataTypes: ["string"],
          propertyName: m,
          compositeRule: !0
        }, p), i.if((0, e.not)(p), () => {
          c.error(!0), o.allErrors || i.break();
        });
      }), c.ok(p);
    }
  };
  return Wn.default = r, Wn;
}
var Xn = {}, eo;
function Xc() {
  if (eo) return Xn;
  eo = 1, Object.defineProperty(Xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ke(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ Ze(), r = /* @__PURE__ */ ie(), i = {
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
      const { gen: a, schema: o, parentSchema: p, data: m, errsCount: g, it: u } = s;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: f, opts: w } = u;
      if (u.props = !0, w.removeAdditional !== "all" && (0, r.alwaysValidSchema)(u, o))
        return;
      const x = (0, e.allSchemaProperties)(p.properties), v = (0, e.allSchemaProperties)(p.patternProperties);
      S(), s.ok((0, t._)`${g} === ${n.default.errors}`);
      function S() {
        a.forIn("key", m, (h) => {
          !x.length && !v.length ? d(h) : a.if(b(h), () => d(h));
        });
      }
      function b(h) {
        let I;
        if (x.length > 8) {
          const A = (0, r.schemaRefOrVal)(u, p.properties, "properties");
          I = (0, e.isOwnProperty)(a, A, h);
        } else x.length ? I = (0, t.or)(...x.map((A) => (0, t._)`${h} === ${A}`)) : I = t.nil;
        return v.length && (I = (0, t.or)(I, ...v.map((A) => (0, t._)`${(0, e.usePattern)(s, A)}.test(${h})`))), (0, t.not)(I);
      }
      function y(h) {
        a.code((0, t._)`delete ${m}[${h}]`);
      }
      function d(h) {
        if (w.removeAdditional === "all" || w.removeAdditional && o === !1) {
          y(h);
          return;
        }
        if (o === !1) {
          s.setParams({ additionalProperty: h }), s.error(), f || a.break();
          return;
        }
        if (typeof o == "object" && !(0, r.alwaysValidSchema)(u, o)) {
          const I = a.name("valid");
          w.removeAdditional === "failing" ? (l(h, I, !1), a.if((0, t.not)(I), () => {
            s.reset(), y(h);
          })) : (l(h, I), f || a.if((0, t.not)(I), () => a.break()));
        }
      }
      function l(h, I, A) {
        const P = {
          keyword: "additionalProperties",
          dataProp: h,
          dataPropType: r.Type.Str
        };
        A === !1 && Object.assign(P, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(P, I);
      }
    }
  };
  return Xn.default = i, Xn;
}
var Yn = {}, to;
function cu() {
  if (to) return Yn;
  to = 1, Object.defineProperty(Yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ yn(), t = /* @__PURE__ */ Ke(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Xc(), c = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, parentSchema: o, data: p, it: m } = i;
      m.opts.removeAdditional === "all" && o.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(m, r.default, "additionalProperties"));
      const g = (0, t.allSchemaProperties)(a);
      for (const v of g)
        m.definedProperties.add(v);
      m.opts.unevaluated && g.length && m.props !== !0 && (m.props = n.mergeEvaluated.props(s, (0, n.toHash)(g), m.props));
      const u = g.filter((v) => !(0, n.alwaysValidSchema)(m, a[v]));
      if (u.length === 0)
        return;
      const f = s.name("valid");
      for (const v of u)
        w(v) ? x(v) : (s.if((0, t.propertyInData)(s, p, v, m.opts.ownProperties)), x(v), m.allErrors || s.else().var(f, !0), s.endIf()), i.it.definedProperties.add(v), i.ok(f);
      function w(v) {
        return m.opts.useDefaults && !m.compositeRule && a[v].default !== void 0;
      }
      function x(v) {
        i.subschema({
          keyword: "properties",
          schemaProp: v,
          dataProp: v
        }, f);
      }
    }
  };
  return Yn.default = c, Yn;
}
var ei = {}, no;
function du() {
  if (no) return ei;
  no = 1, Object.defineProperty(ei, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ke(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), r = /* @__PURE__ */ ie(), c = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(i) {
      const { gen: s, schema: a, data: o, parentSchema: p, it: m } = i, { opts: g } = m, u = (0, e.allSchemaProperties)(a), f = u.filter((d) => (0, n.alwaysValidSchema)(m, a[d]));
      if (u.length === 0 || f.length === u.length && (!m.opts.unevaluated || m.props === !0))
        return;
      const w = g.strictSchema && !g.allowMatchingProperties && p.properties, x = s.name("valid");
      m.props !== !0 && !(m.props instanceof t.Name) && (m.props = (0, r.evaluatedPropsToName)(s, m.props));
      const { props: v } = m;
      S();
      function S() {
        for (const d of u)
          w && b(d), m.allErrors ? y(d) : (s.var(x, !0), y(d), s.if(x));
      }
      function b(d) {
        for (const l in w)
          new RegExp(d).test(l) && (0, n.checkStrictMode)(m, `property ${l} matches pattern ${d} (use allowMatchingProperties)`);
      }
      function y(d) {
        s.forIn("key", o, (l) => {
          s.if((0, t._)`${(0, e.usePattern)(i, d)}.test(${l})`, () => {
            const h = f.includes(d);
            h || i.subschema({
              keyword: "patternProperties",
              schemaProp: d,
              dataProp: l,
              dataPropType: r.Type.Str
            }, x), m.opts.unevaluated && v !== !0 ? s.assign((0, t._)`${v}[${l}]`, !0) : !h && !m.allErrors && s.if((0, t.not)(x), () => s.break());
          });
        });
      }
    }
  };
  return ei.default = c, ei;
}
var ti = {}, io;
function lu() {
  if (io) return ti;
  io = 1, Object.defineProperty(ti, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: r, schema: c, it: i } = n;
      if ((0, e.alwaysValidSchema)(i, c)) {
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
  return ti.default = t, ti;
}
var ni = {}, ro;
function uu() {
  if (ro) return ni;
  ro = 1, Object.defineProperty(ni, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Ke()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return ni.default = t, ni;
}
var ii = {}, so;
function pu() {
  if (so) return ii;
  so = 1, Object.defineProperty(ii, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), r = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: c }) => (0, e._)`{passingSchemas: ${c.passing}}`
    },
    code(c) {
      const { gen: i, schema: s, parentSchema: a, it: o } = c;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      if (o.opts.discriminator && a.discriminator)
        return;
      const p = s, m = i.let("valid", !1), g = i.let("passing", null), u = i.name("_valid");
      c.setParams({ passing: g }), i.block(f), c.result(m, () => c.reset(), () => c.error(!0));
      function f() {
        p.forEach((w, x) => {
          let v;
          (0, t.alwaysValidSchema)(o, w) ? i.var(u, !0) : v = c.subschema({
            keyword: "oneOf",
            schemaProp: x,
            compositeRule: !0
          }, u), x > 0 && i.if((0, e._)`${u} && ${m}`).assign(m, !1).assign(g, (0, e._)`[${g}, ${x}]`).else(), i.if(u, () => {
            i.assign(m, !0), i.assign(g, x), v && c.mergeEvaluated(v, e.Name);
          });
        });
      }
    }
  };
  return ii.default = r, ii;
}
var ri = {}, ao;
function fu() {
  if (ao) return ri;
  ao = 1, Object.defineProperty(ri, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: r, schema: c, it: i } = n;
      if (!Array.isArray(c))
        throw new Error("ajv implementation error");
      const s = r.name("valid");
      c.forEach((a, o) => {
        if ((0, e.alwaysValidSchema)(i, a))
          return;
        const p = n.subschema({ keyword: "allOf", schemaProp: o }, s);
        n.ok(s), n.mergeEvaluated(p);
      });
    }
  };
  return ri.default = t, ri;
}
var si = {}, oo;
function hu() {
  if (oo) return si;
  oo = 1, Object.defineProperty(si, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), r = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: i }) => (0, e.str)`must match "${i.ifClause}" schema`,
      params: ({ params: i }) => (0, e._)`{failingKeyword: ${i.ifClause}}`
    },
    code(i) {
      const { gen: s, parentSchema: a, it: o } = i;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(o, '"if" without "then" and "else" is ignored');
      const p = c(o, "then"), m = c(o, "else");
      if (!p && !m)
        return;
      const g = s.let("valid", !0), u = s.name("_valid");
      if (f(), i.reset(), p && m) {
        const x = s.let("ifClause");
        i.setParams({ ifClause: x }), s.if(u, w("then", x), w("else", x));
      } else p ? s.if(u, w("then")) : s.if((0, e.not)(u), w("else"));
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
      function w(x, v) {
        return () => {
          const S = i.subschema({ keyword: x }, u);
          s.assign(g, u), i.mergeValidEvaluated(S, g), v ? s.assign(v, (0, e._)`${x}`) : i.setParams({ ifClause: x });
        };
      }
    }
  };
  function c(i, s) {
    const a = i.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(i, a);
  }
  return si.default = r, si;
}
var ai = {}, co;
function mu() {
  if (co) return ai;
  co = 1, Object.defineProperty(ai, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: r, it: c }) {
      r.if === void 0 && (0, e.checkStrictMode)(c, `"${n}" without "if" is ignored`);
    }
  };
  return ai.default = t, ai;
}
var lo;
function Yc() {
  if (lo) return Hn;
  lo = 1, Object.defineProperty(Hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qc(), t = /* @__PURE__ */ ru(), n = /* @__PURE__ */ Wc(), r = /* @__PURE__ */ su(), c = /* @__PURE__ */ au(), i = /* @__PURE__ */ Ps(), s = /* @__PURE__ */ ou(), a = /* @__PURE__ */ Xc(), o = /* @__PURE__ */ cu(), p = /* @__PURE__ */ du(), m = /* @__PURE__ */ lu(), g = /* @__PURE__ */ uu(), u = /* @__PURE__ */ pu(), f = /* @__PURE__ */ fu(), w = /* @__PURE__ */ hu(), x = /* @__PURE__ */ mu();
  function v(S = !1) {
    const b = [
      // any
      m.default,
      g.default,
      u.default,
      f.default,
      w.default,
      x.default,
      // object
      s.default,
      a.default,
      i.default,
      o.default,
      p.default
    ];
    return S ? b.push(t.default, r.default) : b.push(e.default, n.default), b.push(c.default), b;
  }
  return Hn.default = v, Hn;
}
var oi = {}, Dt = {}, uo;
function ed() {
  if (uo) return Dt;
  uo = 1, Object.defineProperty(Dt, "__esModule", { value: !0 }), Dt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Ze(), n = /* @__PURE__ */ Gi(), r = /* @__PURE__ */ _s(), c = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => i(a, a.schema)
  };
  function i(a, o) {
    const { gen: p, it: m } = a;
    m.schemaEnv.root.dynamicAnchors[o] = !0;
    const g = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(o)}`, u = m.errSchemaPath === "#" ? m.validateName : s(a);
    p.if((0, e._)`!${g}`, () => p.assign(g, u));
  }
  Dt.dynamicAnchor = i;
  function s(a) {
    const { schemaEnv: o, schema: p, self: m } = a.it, { root: g, baseId: u, localRefs: f, meta: w } = o.root, { schemaId: x } = m.opts, v = new n.SchemaEnv({ schema: p, schemaId: x, root: g, baseId: u, localRefs: f, meta: w });
    return n.compileSchema.call(m, v), (0, r.getValidate)(a, v);
  }
  return Dt.default = c, Dt;
}
var zt = {}, po;
function td() {
  if (po) return zt;
  po = 1, Object.defineProperty(zt, "__esModule", { value: !0 }), zt.dynamicRef = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Ze(), n = /* @__PURE__ */ _s(), r = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (i) => c(i, i.schema)
  };
  function c(i, s) {
    const { gen: a, keyword: o, it: p } = i;
    if (s[0] !== "#")
      throw new Error(`"${o}" only supports hash fragment reference`);
    const m = s.slice(1);
    if (p.allErrors)
      g();
    else {
      const f = a.let("valid", !1);
      g(f), i.ok(f);
    }
    function g(f) {
      if (p.schemaEnv.root.dynamicAnchors[m]) {
        const w = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(m)}`);
        a.if(w, u(w, f), u(p.validateName, f));
      } else
        u(p.validateName, f)();
    }
    function u(f, w) {
      return w ? () => a.block(() => {
        (0, n.callRef)(i, f), a.let(w, !0);
      }) : () => (0, n.callRef)(i, f);
    }
  }
  return zt.dynamicRef = c, zt.default = r, zt;
}
var ci = {}, fo;
function yu() {
  if (fo) return ci;
  fo = 1, Object.defineProperty(ci, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ed(), t = /* @__PURE__ */ ie(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(r) {
      r.schema ? (0, e.dynamicAnchor)(r, "") : (0, t.checkStrictMode)(r.it, "$recursiveAnchor: false is ignored");
    }
  };
  return ci.default = n, ci;
}
var di = {}, ho;
function gu() {
  if (ho) return di;
  ho = 1, Object.defineProperty(di, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ td(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return di.default = t, di;
}
var mo;
function vu() {
  if (mo) return oi;
  mo = 1, Object.defineProperty(oi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ed(), t = /* @__PURE__ */ td(), n = /* @__PURE__ */ yu(), r = /* @__PURE__ */ gu(), c = [e.default, t.default, n.default, r.default];
  return oi.default = c, oi;
}
var li = {}, ui = {}, yo;
function bu() {
  if (yo) return ui;
  yo = 1, Object.defineProperty(ui, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ps(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return ui.default = t, ui;
}
var pi = {}, go;
function wu() {
  if (go) return pi;
  go = 1, Object.defineProperty(pi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ps(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return pi.default = t, pi;
}
var fi = {}, vo;
function xu() {
  if (vo) return fi;
  vo = 1, Object.defineProperty(fi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: r, it: c }) {
      r.contains === void 0 && (0, e.checkStrictMode)(c, `"${n}" without "contains" is ignored`);
    }
  };
  return fi.default = t, fi;
}
var bo;
function Su() {
  if (bo) return li;
  bo = 1, Object.defineProperty(li, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ bu(), t = /* @__PURE__ */ wu(), n = /* @__PURE__ */ xu(), r = [e.default, t.default, n.default];
  return li.default = r, li;
}
var hi = {}, mi = {}, wo;
function Iu() {
  if (wo) return mi;
  wo = 1, Object.defineProperty(mi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Ze(), c = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: i }) => (0, e._)`{unevaluatedProperty: ${i.unevaluatedProperty}}`
    },
    code(i) {
      const { gen: s, schema: a, data: o, errsCount: p, it: m } = i;
      if (!p)
        throw new Error("ajv implementation error");
      const { allErrors: g, props: u } = m;
      u instanceof e.Name ? s.if((0, e._)`${u} !== true`, () => s.forIn("key", o, (v) => s.if(w(u, v), () => f(v)))) : u !== !0 && s.forIn("key", o, (v) => u === void 0 ? f(v) : s.if(x(u, v), () => f(v))), m.props = !0, i.ok((0, e._)`${p} === ${n.default.errors}`);
      function f(v) {
        if (a === !1) {
          i.setParams({ unevaluatedProperty: v }), i.error(), g || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(m, a)) {
          const S = s.name("valid");
          i.subschema({
            keyword: "unevaluatedProperties",
            dataProp: v,
            dataPropType: t.Type.Str
          }, S), g || s.if((0, e.not)(S), () => s.break());
        }
      }
      function w(v, S) {
        return (0, e._)`!${v} || !${v}[${S}]`;
      }
      function x(v, S) {
        const b = [];
        for (const y in v)
          v[y] === !0 && b.push((0, e._)`${S} !== ${y}`);
        return (0, e.and)(...b);
      }
    }
  };
  return mi.default = c, mi;
}
var yi = {}, xo;
function Au() {
  if (xo) return yi;
  xo = 1, Object.defineProperty(yi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), r = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: c } }) => (0, e.str)`must NOT have more than ${c} items`,
      params: ({ params: { len: c } }) => (0, e._)`{limit: ${c}}`
    },
    code(c) {
      const { gen: i, schema: s, data: a, it: o } = c, p = o.items || 0;
      if (p === !0)
        return;
      const m = i.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        c.setParams({ len: p }), c.fail((0, e._)`${m} > ${p}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(o, s)) {
        const u = i.var("valid", (0, e._)`${m} <= ${p}`);
        i.if((0, e.not)(u), () => g(u, p)), c.ok(u);
      }
      o.items = !0;
      function g(u, f) {
        i.forRange("i", f, m, (w) => {
          c.subschema({ keyword: "unevaluatedItems", dataProp: w, dataPropType: t.Type.Num }, u), o.allErrors || i.if((0, e.not)(u), () => i.break());
        });
      }
    }
  };
  return yi.default = r, yi;
}
var So;
function qu() {
  if (So) return hi;
  So = 1, Object.defineProperty(hi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Iu(), t = /* @__PURE__ */ Au(), n = [e.default, t.default];
  return hi.default = n, hi;
}
var gi = {}, vi = {}, Io;
function $u() {
  if (Io) return vi;
  Io = 1, Object.defineProperty(vi, "__esModule", { value: !0 });
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
      const { gen: i, data: s, $data: a, schema: o, schemaCode: p, it: m } = r, { opts: g, errSchemaPath: u, schemaEnv: f, self: w } = m;
      if (!g.validateFormats)
        return;
      a ? x() : v();
      function x() {
        const S = i.scopeValue("formats", {
          ref: w.formats,
          code: g.code.formats
        }), b = i.const("fDef", (0, e._)`${S}[${p}]`), y = i.let("fType"), d = i.let("format");
        i.if((0, e._)`typeof ${b} == "object" && !(${b} instanceof RegExp)`, () => i.assign(y, (0, e._)`${b}.type || "string"`).assign(d, (0, e._)`${b}.validate`), () => i.assign(y, (0, e._)`"string"`).assign(d, b)), r.fail$data((0, e.or)(l(), h()));
        function l() {
          return g.strictSchema === !1 ? e.nil : (0, e._)`${p} && !${d}`;
        }
        function h() {
          const I = f.$async ? (0, e._)`(${b}.async ? await ${d}(${s}) : ${d}(${s}))` : (0, e._)`${d}(${s})`, A = (0, e._)`(typeof ${d} == "function" ? ${I} : ${d}.test(${s}))`;
          return (0, e._)`${d} && ${d} !== true && ${y} === ${c} && !${A}`;
        }
      }
      function v() {
        const S = w.formats[o];
        if (!S) {
          l();
          return;
        }
        if (S === !0)
          return;
        const [b, y, d] = h(S);
        b === c && r.pass(I());
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
          const P = A instanceof RegExp ? (0, e.regexpCode)(A) : g.code.formats ? (0, e._)`${g.code.formats}${(0, e.getProperty)(o)}` : void 0, T = i.scopeValue("formats", { key: o, ref: A, code: P });
          return typeof A == "object" && !(A instanceof RegExp) ? [A.type || "string", A.validate, (0, e._)`${T}.validate`] : ["string", A, T];
        }
        function I() {
          if (typeof S == "object" && !(S instanceof RegExp) && S.async) {
            if (!f.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${d}(${s})`;
          }
          return typeof y == "function" ? (0, e._)`${d}(${s})` : (0, e._)`${d}.test(${s})`;
        }
      }
    }
  };
  return vi.default = n, vi;
}
var Ao;
function nd() {
  if (Ao) return gi;
  Ao = 1, Object.defineProperty(gi, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ $u()).default];
  return gi.default = t, gi;
}
var $t = {}, qo;
function id() {
  return qo || (qo = 1, Object.defineProperty($t, "__esModule", { value: !0 }), $t.contentVocabulary = $t.metadataVocabulary = void 0, $t.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], $t.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), $t;
}
var $o;
function Ru() {
  if ($o) return En;
  $o = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Zc(), t = /* @__PURE__ */ Kc(), n = /* @__PURE__ */ Yc(), r = /* @__PURE__ */ vu(), c = /* @__PURE__ */ Su(), i = /* @__PURE__ */ qu(), s = /* @__PURE__ */ nd(), a = /* @__PURE__ */ id(), o = [
    r.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    s.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    c.default,
    i.default
  ];
  return En.default = o, En;
}
var bi = {}, sn = {}, Ro;
function _u() {
  if (Ro) return sn;
  Ro = 1, Object.defineProperty(sn, "__esModule", { value: !0 }), sn.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (sn.DiscrError = e = {})), sn;
}
var _o;
function rd() {
  if (_o) return bi;
  _o = 1, Object.defineProperty(bi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ _u(), n = /* @__PURE__ */ Gi(), r = /* @__PURE__ */ gn(), c = /* @__PURE__ */ ie(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: o } }) => a === t.DiscrError.Tag ? `tag "${o}" must be string` : `value of tag "${o}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: o, tagName: p } }) => (0, e._)`{error: ${a}, tag: ${p}, tagValue: ${o}}`
    },
    code(a) {
      const { gen: o, data: p, schema: m, parentSchema: g, it: u } = a, { oneOf: f } = g;
      if (!u.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const w = m.propertyName;
      if (typeof w != "string")
        throw new Error("discriminator: requires propertyName");
      if (m.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!f)
        throw new Error("discriminator: requires oneOf keyword");
      const x = o.let("valid", !1), v = o.const("tag", (0, e._)`${p}${(0, e.getProperty)(w)}`);
      o.if((0, e._)`typeof ${v} == "string"`, () => S(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: v, tagName: w })), a.ok(x);
      function S() {
        const d = y();
        o.if(!1);
        for (const l in d)
          o.elseIf((0, e._)`${v} === ${l}`), o.assign(x, b(d[l]));
        o.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: v, tagName: w }), o.endIf();
      }
      function b(d) {
        const l = o.name("valid"), h = a.subschema({ keyword: "oneOf", schemaProp: d }, l);
        return a.mergeEvaluated(h, e.Name), l;
      }
      function y() {
        var d;
        const l = {}, h = A(g);
        let I = !0;
        for (let j = 0; j < f.length; j++) {
          let O = f[j];
          if (O?.$ref && !(0, c.schemaHasRulesButRef)(O, u.self.RULES)) {
            const E = O.$ref;
            if (O = n.resolveRef.call(u.self, u.schemaEnv.root, u.baseId, E), O instanceof n.SchemaEnv && (O = O.schema), O === void 0)
              throw new r.default(u.opts.uriResolver, u.baseId, E);
          }
          const R = (d = O?.properties) === null || d === void 0 ? void 0 : d[w];
          if (typeof R != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${w}"`);
          I = I && (h || A(O)), P(R, j);
        }
        if (!I)
          throw new Error(`discriminator: "${w}" must be required`);
        return l;
        function A({ required: j }) {
          return Array.isArray(j) && j.includes(w);
        }
        function P(j, O) {
          if (j.const)
            T(j.const, O);
          else if (j.enum)
            for (const R of j.enum)
              T(R, O);
          else
            throw new Error(`discriminator: "properties/${w}" must have "const" or "enum"`);
        }
        function T(j, O) {
          if (typeof j != "string" || j in l)
            throw new Error(`discriminator: "${w}" values must be unique strings`);
          l[j] = O;
        }
      }
    }
  };
  return bi.default = s, bi;
}
var wi = {};
const ju = "https://json-schema.org/draft/2020-12/schema", Pu = "https://json-schema.org/draft/2020-12/schema", Eu = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Cu = "meta", Tu = "Core and Validation specifications meta-schema", Mu = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], ku = ["object", "boolean"], Ou = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Nu = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Lu = {
  $schema: ju,
  $id: Pu,
  $vocabulary: Eu,
  $dynamicAnchor: Cu,
  title: Tu,
  allOf: Mu,
  type: ku,
  $comment: Ou,
  properties: Nu
}, Du = "https://json-schema.org/draft/2020-12/schema", zu = "https://json-schema.org/draft/2020-12/meta/applicator", Uu = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Vu = "meta", Fu = "Applicator vocabulary meta-schema", Gu = ["object", "boolean"], Bu = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Ju = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Hu = {
  $schema: Du,
  $id: zu,
  $vocabulary: Uu,
  $dynamicAnchor: Vu,
  title: Fu,
  type: Gu,
  properties: Bu,
  $defs: Ju
}, Zu = "https://json-schema.org/draft/2020-12/schema", Ku = "https://json-schema.org/draft/2020-12/meta/unevaluated", Qu = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Wu = "meta", Xu = "Unevaluated applicator vocabulary meta-schema", Yu = ["object", "boolean"], ep = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, tp = {
  $schema: Zu,
  $id: Ku,
  $vocabulary: Qu,
  $dynamicAnchor: Wu,
  title: Xu,
  type: Yu,
  properties: ep
}, np = "https://json-schema.org/draft/2020-12/schema", ip = "https://json-schema.org/draft/2020-12/meta/content", rp = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, sp = "meta", ap = "Content vocabulary meta-schema", op = ["object", "boolean"], cp = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, dp = {
  $schema: np,
  $id: ip,
  $vocabulary: rp,
  $dynamicAnchor: sp,
  title: ap,
  type: op,
  properties: cp
}, lp = "https://json-schema.org/draft/2020-12/schema", up = "https://json-schema.org/draft/2020-12/meta/core", pp = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, fp = "meta", hp = "Core vocabulary meta-schema", mp = ["object", "boolean"], yp = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, gp = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, vp = {
  $schema: lp,
  $id: up,
  $vocabulary: pp,
  $dynamicAnchor: fp,
  title: hp,
  type: mp,
  properties: yp,
  $defs: gp
}, bp = "https://json-schema.org/draft/2020-12/schema", wp = "https://json-schema.org/draft/2020-12/meta/format-annotation", xp = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Sp = "meta", Ip = "Format vocabulary meta-schema for annotation results", Ap = ["object", "boolean"], qp = { format: { type: "string" } }, $p = {
  $schema: bp,
  $id: wp,
  $vocabulary: xp,
  $dynamicAnchor: Sp,
  title: Ip,
  type: Ap,
  properties: qp
}, Rp = "https://json-schema.org/draft/2020-12/schema", _p = "https://json-schema.org/draft/2020-12/meta/meta-data", jp = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Pp = "meta", Ep = "Meta-data vocabulary meta-schema", Cp = ["object", "boolean"], Tp = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Mp = {
  $schema: Rp,
  $id: _p,
  $vocabulary: jp,
  $dynamicAnchor: Pp,
  title: Ep,
  type: Cp,
  properties: Tp
}, kp = "https://json-schema.org/draft/2020-12/schema", Op = "https://json-schema.org/draft/2020-12/meta/validation", Np = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Lp = "meta", Dp = "Validation vocabulary meta-schema", zp = ["object", "boolean"], Up = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Vp = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Fp = {
  $schema: kp,
  $id: Op,
  $vocabulary: Np,
  $dynamicAnchor: Lp,
  title: Dp,
  type: zp,
  properties: Up,
  $defs: Vp
};
var jo;
function Gp() {
  if (jo) return wi;
  jo = 1, Object.defineProperty(wi, "__esModule", { value: !0 });
  const e = Lu, t = Hu, n = tp, r = dp, c = vp, i = $p, s = Mp, a = Fp, o = ["/properties"];
  function p(m) {
    return [
      e,
      t,
      n,
      r,
      c,
      g(this, i),
      s,
      g(this, a)
    ].forEach((u) => this.addMetaSchema(u, void 0, !1)), this;
    function g(u, f) {
      return m ? u.$dataMetaSchema(f, o) : f;
    }
  }
  return wi.default = p, wi;
}
var Po;
function Bp() {
  return Po || (Po = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Hc(), r = /* @__PURE__ */ Ru(), c = /* @__PURE__ */ rd(), i = /* @__PURE__ */ Gp(), s = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
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
        w && (i.default.call(this, f), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var o = /* @__PURE__ */ yn();
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
    var m = /* @__PURE__ */ Fi();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return m.default;
    } });
    var g = /* @__PURE__ */ gn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return g.default;
    } });
  })($n, $n.exports)), $n.exports;
}
var Jp = /* @__PURE__ */ Bp();
const Hp = /* @__PURE__ */ Rs(Jp);
var xi = { exports: {} }, vr = {}, Eo;
function Zp() {
  return Eo || (Eo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(j, O) {
      return { validate: j, compare: O };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(i, s),
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
      regex: T,
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
      date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, s),
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
    function n(j) {
      return j % 4 === 0 && (j % 100 !== 0 || j % 400 === 0);
    }
    const r = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, c = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function i(j) {
      const O = r.exec(j);
      if (!O)
        return !1;
      const R = +O[1], E = +O[2], D = +O[3];
      return E >= 1 && E <= 12 && D >= 1 && D <= (E === 2 && n(R) ? 29 : c[E]);
    }
    function s(j, O) {
      if (j && O)
        return j > O ? 1 : j < O ? -1 : 0;
    }
    const a = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function o(j) {
      return function(R) {
        const E = a.exec(R);
        if (!E)
          return !1;
        const D = +E[1], q = +E[2], V = +E[3], G = E[4], J = E[5] === "-" ? -1 : 1, M = +(E[6] || 0), k = +(E[7] || 0);
        if (M > 23 || k > 59 || j && !G)
          return !1;
        if (D <= 23 && q <= 59 && V < 60)
          return !0;
        const z = q - k * J, N = D - M * J - (z < 0 ? 1 : 0);
        return (N === 23 || N === -1) && (z === 59 || z === -1) && V < 61;
      };
    }
    function p(j, O) {
      if (!(j && O))
        return;
      const R = (/* @__PURE__ */ new Date("2020-01-01T" + j)).valueOf(), E = (/* @__PURE__ */ new Date("2020-01-01T" + O)).valueOf();
      if (R && E)
        return R - E;
    }
    function m(j, O) {
      if (!(j && O))
        return;
      const R = a.exec(j), E = a.exec(O);
      if (R && E)
        return j = R[1] + R[2] + R[3], O = E[1] + E[2] + E[3], j > O ? 1 : j < O ? -1 : 0;
    }
    const g = /t|\s/i;
    function u(j) {
      const O = o(j);
      return function(E) {
        const D = E.split(g);
        return D.length === 2 && i(D[0]) && O(D[1]);
      };
    }
    function f(j, O) {
      if (!(j && O))
        return;
      const R = new Date(j).valueOf(), E = new Date(O).valueOf();
      if (R && E)
        return R - E;
    }
    function w(j, O) {
      if (!(j && O))
        return;
      const [R, E] = j.split(g), [D, q] = O.split(g), V = s(R, D);
      if (V !== void 0)
        return V || p(E, q);
    }
    const x = /\/|:/, v = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function S(j) {
      return x.test(j) && v.test(j);
    }
    const b = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function y(j) {
      return b.lastIndex = 0, b.test(j);
    }
    const d = -2147483648, l = 2 ** 31 - 1;
    function h(j) {
      return Number.isInteger(j) && j <= l && j >= d;
    }
    function I(j) {
      return Number.isInteger(j);
    }
    function A() {
      return !0;
    }
    const P = /[^\\]\\Z/;
    function T(j) {
      if (P.test(j))
        return !1;
      try {
        return new RegExp(j), !0;
      } catch {
        return !1;
      }
    }
  })(vr)), vr;
}
var br = {}, Si = { exports: {} }, Ii = {}, Co;
function Kp() {
  if (Co) return Ii;
  Co = 1, Object.defineProperty(Ii, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Zc(), t = /* @__PURE__ */ Kc(), n = /* @__PURE__ */ Yc(), r = /* @__PURE__ */ nd(), c = /* @__PURE__ */ id(), i = [
    e.default,
    t.default,
    (0, n.default)(),
    r.default,
    c.metadataVocabulary,
    c.contentVocabulary
  ];
  return Ii.default = i, Ii;
}
const Qp = "http://json-schema.org/draft-07/schema#", Wp = "http://json-schema.org/draft-07/schema#", Xp = "Core schema meta-schema", Yp = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, ef = ["object", "boolean"], tf = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, nf = {
  $schema: Qp,
  $id: Wp,
  title: Xp,
  definitions: Yp,
  type: ef,
  properties: tf,
  default: !0
};
var To;
function rf() {
  return To || (To = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const n = /* @__PURE__ */ Hc(), r = /* @__PURE__ */ Kp(), c = /* @__PURE__ */ rd(), i = nf, s = ["/properties"], a = "http://json-schema.org/draft-07/schema";
    class o extends n.default {
      _addVocabularies() {
        super._addVocabularies(), r.default.forEach((w) => this.addVocabulary(w)), this.opts.discriminator && this.addKeyword(c.default);
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
    t.Ajv = o, e.exports = t = o, e.exports.Ajv = o, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = o;
    var p = /* @__PURE__ */ yn();
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
    var g = /* @__PURE__ */ Fi();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return g.default;
    } });
    var u = /* @__PURE__ */ gn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return u.default;
    } });
  })(Si, Si.exports)), Si.exports;
}
var Mo;
function sf() {
  return Mo || (Mo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = /* @__PURE__ */ rf(), n = /* @__PURE__ */ te(), r = n.operators, c = {
      formatMaximum: { okStr: "<=", ok: r.LTE, fail: r.GT },
      formatMinimum: { okStr: ">=", ok: r.GTE, fail: r.LT },
      formatExclusiveMaximum: { okStr: "<", ok: r.LT, fail: r.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: r.GT, fail: r.LTE }
    }, i = {
      message: ({ keyword: a, schemaCode: o }) => (0, n.str)`should be ${c[a].okStr} ${o}`,
      params: ({ keyword: a, schemaCode: o }) => (0, n._)`{comparison: ${c[a].okStr}, limit: ${o}}`
    };
    e.formatLimitDefinition = {
      keyword: Object.keys(c),
      type: "string",
      schemaType: "string",
      $data: !0,
      error: i,
      code(a) {
        const { gen: o, data: p, schemaCode: m, keyword: g, it: u } = a, { opts: f, self: w } = u;
        if (!f.validateFormats)
          return;
        const x = new t.KeywordCxt(u, w.RULES.all.format.definition, "format");
        x.$data ? v() : S();
        function v() {
          const y = o.scopeValue("formats", {
            ref: w.formats,
            code: f.code.formats
          }), d = o.const("fmt", (0, n._)`${y}[${x.schemaCode}]`);
          a.fail$data((0, n.or)((0, n._)`typeof ${d} != "object"`, (0, n._)`${d} instanceof RegExp`, (0, n._)`typeof ${d}.compare != "function"`, b(d)));
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
          a.fail$data(b(l));
        }
        function b(y) {
          return (0, n._)`${y}.compare(${p}, ${m}) ${c[g].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const s = (a) => (a.addKeyword(e.formatLimitDefinition), a);
    e.default = s;
  })(br)), br;
}
var ko;
function af() {
  return ko || (ko = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const n = Zp(), r = sf(), c = /* @__PURE__ */ te(), i = new c.Name("fullFormats"), s = new c.Name("fastFormats"), a = (p, m = { keywords: !0 }) => {
      if (Array.isArray(m))
        return o(p, m, n.fullFormats, i), p;
      const [g, u] = m.mode === "fast" ? [n.fastFormats, s] : [n.fullFormats, i], f = m.formats || n.formatNames;
      return o(p, f, g, u), m.keywords && (0, r.default)(p), p;
    };
    a.get = (p, m = "full") => {
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
    e.exports = t = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
  })(xi, xi.exports)), xi.exports;
}
var of = af();
const cf = /* @__PURE__ */ Rs(of);
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const df = {
  p: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,
  n: 0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,
  a: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,
  d: 0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,
  Gx: 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,
  Gy: 0x6666666666666666666666666666666666666666666666666666666666666658n
}, { p: xe, n: _i, Gx: Oo, Gy: No, a: wr, d: xr } = df, lf = 8n, cn = 32, fs = 64, Ne = (e = "") => {
  throw new Error(e);
}, uf = (e) => typeof e == "bigint", sd = (e) => typeof e == "string", pf = (e) => e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array", Wt = (e, t) => !pf(e) || typeof t == "number" && t > 0 && e.length !== t ? Ne("Uint8Array expected") : e, Bi = (e) => new Uint8Array(e), Es = (e) => Uint8Array.from(e), ad = (e, t) => e.toString(16).padStart(t, "0"), Cs = (e) => Array.from(Wt(e)).map((t) => ad(t, 2)).join(""), dt = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 }, Lo = (e) => {
  if (e >= dt._0 && e <= dt._9)
    return e - dt._0;
  if (e >= dt.A && e <= dt.F)
    return e - (dt.A - 10);
  if (e >= dt.a && e <= dt.f)
    return e - (dt.a - 10);
}, Ts = (e) => {
  const t = "hex invalid";
  if (!sd(e))
    return Ne(t);
  const n = e.length, r = n / 2;
  if (n % 2)
    return Ne(t);
  const c = Bi(r);
  for (let i = 0, s = 0; i < r; i++, s += 2) {
    const a = Lo(e.charCodeAt(s)), o = Lo(e.charCodeAt(s + 1));
    if (a === void 0 || o === void 0)
      return Ne(t);
    c[i] = a * 16 + o;
  }
  return c;
}, ji = (e, t) => Wt(sd(e) ? Ts(e) : Es(Wt(e)), t), od = () => globalThis?.crypto, ff = () => od()?.subtle ?? Ne("crypto.subtle must be defined"), hs = (...e) => {
  const t = Bi(e.reduce((r, c) => r + Wt(c).length, 0));
  let n = 0;
  return e.forEach((r) => {
    t.set(r, n), n += r.length;
  }), t;
}, hf = (e = cn) => od().getRandomValues(Bi(e)), Oi = BigInt, jt = (e, t, n, r = "bad number: out of range") => uf(e) && t <= e && e < n ? e : Ne(r), X = (e, t = xe) => {
  const n = e % t;
  return n >= 0n ? n : t + n;
}, mf = (e) => X(e, _i), cd = (e, t) => {
  (e === 0n || t <= 0n) && Ne("no inverse n=" + e + " mod=" + t);
  let n = X(e, t), r = t, c = 0n, i = 1n;
  for (; n !== 0n; ) {
    const s = r / n, a = r % n, o = c - i * s;
    r = n, n = a, c = i, i = o;
  }
  return r === 1n ? X(c, t) : Ne("no inverse");
}, Do = (e) => e instanceof lt ? e : Ne("Point expected"), ms = 2n ** 256n, et = class et {
  constructor(t, n, r, c) {
    rt(this, "ex");
    rt(this, "ey");
    rt(this, "ez");
    rt(this, "et");
    const i = ms;
    this.ex = jt(t, 0n, i), this.ey = jt(n, 0n, i), this.ez = jt(r, 1n, i), this.et = jt(c, 0n, i), Object.freeze(this);
  }
  static fromAffine(t) {
    return new et(t.x, t.y, 1n, X(t.x * t.y));
  }
  /** RFC8032 5.1.3: Uint8Array to Point. */
  static fromBytes(t, n = !1) {
    const r = xr, c = Es(Wt(t, cn)), i = t[31];
    c[31] = i & -129;
    const s = Ms(c);
    jt(s, 0n, n ? ms : xe);
    const o = X(s * s), p = X(o - 1n), m = X(r * o + 1n);
    let { isValid: g, value: u } = vf(p, m);
    g || Ne("bad point: y not sqrt");
    const f = (u & 1n) === 1n, w = (i & 128) !== 0;
    return !n && u === 0n && w && Ne("bad point: x==0, isLastByteOdd"), w !== f && (u = X(-u)), new et(u, s, 1n, X(u * s));
  }
  /** Checks if the point is valid and on-curve. */
  assertValidity() {
    const t = wr, n = xr, r = this;
    if (r.is0())
      throw new Error("bad point: ZERO");
    const { ex: c, ey: i, ez: s, et: a } = r, o = X(c * c), p = X(i * i), m = X(s * s), g = X(m * m), u = X(o * t), f = X(m * X(u + p)), w = X(g + X(n * X(o * p)));
    if (f !== w)
      throw new Error("bad point: equation left != right (1)");
    const x = X(c * i), v = X(s * a);
    if (x !== v)
      throw new Error("bad point: equation left != right (2)");
    return this;
  }
  /** Equality check: compare points P&Q. */
  equals(t) {
    const { ex: n, ey: r, ez: c } = this, { ex: i, ey: s, ez: a } = Do(t), o = X(n * a), p = X(i * c), m = X(r * a), g = X(s * c);
    return o === p && m === g;
  }
  is0() {
    return this.equals(Gt);
  }
  /** Flip point over y coordinate. */
  negate() {
    return new et(X(-this.ex), this.ey, this.ez, X(-this.et));
  }
  /** Point doubling. Complete formula. Cost: `4M + 4S + 1*a + 6add + 1*2`. */
  double() {
    const { ex: t, ey: n, ez: r } = this, c = wr, i = X(t * t), s = X(n * n), a = X(2n * X(r * r)), o = X(c * i), p = t + n, m = X(X(p * p) - i - s), g = o + s, u = g - a, f = o - s, w = X(m * u), x = X(g * f), v = X(m * f), S = X(u * g);
    return new et(w, x, S, v);
  }
  /** Point addition. Complete formula. Cost: `8M + 1*k + 8add + 1*2`. */
  add(t) {
    const { ex: n, ey: r, ez: c, et: i } = this, { ex: s, ey: a, ez: o, et: p } = Do(t), m = wr, g = xr, u = X(n * s), f = X(r * a), w = X(i * g * p), x = X(c * o), v = X((n + r) * (s + a) - u - f), S = X(x - w), b = X(x + w), y = X(f - m * u), d = X(v * S), l = X(b * y), h = X(v * y), I = X(S * b);
    return new et(d, l, I, h);
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
    if (jt(t, 1n, _i), t === 1n)
      return this;
    if (this.equals(Xt))
      return Rf(t).p;
    let r = Gt, c = Xt;
    for (let i = this; t > 0n; i = i.double(), t >>= 1n)
      t & 1n ? r = r.add(i) : n && (c = c.add(i));
    return r;
  }
  /** Convert point to 2d xy affine point. (X, Y, Z) ∋ (x=X/Z, y=Y/Z) */
  toAffine() {
    const { ex: t, ey: n, ez: r } = this;
    if (this.equals(Gt))
      return { x: 0n, y: 1n };
    const c = cd(r, xe);
    return X(r * c) !== 1n && Ne("invalid inverse"), { x: X(t * c), y: X(n * c) };
  }
  toBytes() {
    const { x: t, y: n } = this.assertValidity().toAffine(), r = yf(n);
    return r[31] |= t & 1n ? 128 : 0, r;
  }
  toHex() {
    return Cs(this.toBytes());
  }
  // encode to hex string
  clearCofactor() {
    return this.multiply(Oi(lf), !1);
  }
  isSmallOrder() {
    return this.clearCofactor().is0();
  }
  isTorsionFree() {
    let t = this.multiply(_i / 2n, !1).double();
    return _i % 2n && (t = t.add(this)), t.is0();
  }
  static fromHex(t, n) {
    return et.fromBytes(ji(t), n);
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
rt(et, "BASE"), rt(et, "ZERO");
let lt = et;
const Xt = new lt(Oo, No, 1n, X(Oo * No)), Gt = new lt(0n, 1n, 1n, 0n);
lt.BASE = Xt;
lt.ZERO = Gt;
const yf = (e) => Ts(ad(jt(e, 0n, ms), fs)).reverse(), Ms = (e) => Oi("0x" + Cs(Es(Wt(e)).reverse())), Ye = (e, t) => {
  let n = e;
  for (; t-- > 0n; )
    n *= n, n %= xe;
  return n;
}, gf = (e) => {
  const n = e * e % xe * e % xe, r = Ye(n, 2n) * n % xe, c = Ye(r, 1n) * e % xe, i = Ye(c, 5n) * c % xe, s = Ye(i, 10n) * i % xe, a = Ye(s, 20n) * s % xe, o = Ye(a, 40n) * a % xe, p = Ye(o, 80n) * o % xe, m = Ye(p, 80n) * o % xe, g = Ye(m, 10n) * i % xe;
  return { pow_p_5_8: Ye(g, 2n) * e % xe, b2: n };
}, zo = 0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n, vf = (e, t) => {
  const n = X(t * t * t), r = X(n * n * t), c = gf(e * r).pow_p_5_8;
  let i = X(e * n * c);
  const s = X(t * i * i), a = i, o = X(i * zo), p = s === e, m = s === X(-e), g = s === X(-e * zo);
  return p && (i = a), (m || g) && (i = o), (X(i) & 1n) === 1n && (i = X(-i)), { isValid: p || m, value: i };
}, bf = (e) => mf(Ms(e)), wf = (...e) => Af.sha512Async(...e), xf = (e) => wf(e.hashable).then(e.finish), dd = { zip215: !0 }, Sf = (e, t, n, r = dd) => {
  e = ji(e, fs), t = ji(t), n = ji(n, cn);
  const { zip215: c } = r;
  let i, s, a, o, p = Uint8Array.of();
  try {
    i = lt.fromHex(n, c), s = lt.fromHex(e.slice(0, cn), c), a = Ms(e.slice(cn, fs)), o = Xt.multiply(a, !1), p = hs(s.toBytes(), i.toBytes(), t);
  } catch {
  }
  return { hashable: p, finish: (g) => {
    if (o == null || !c && i.isSmallOrder())
      return !1;
    const u = bf(g);
    return s.add(i.multiply(u, !1)).add(o.negate()).clearCofactor().is0();
  } };
}, If = async (e, t, n, r = dd) => xf(Sf(e, t, n, r)), Af = {
  sha512Async: async (...e) => {
    const t = ff(), n = hs(...e);
    return Bi(await t.digest("SHA-512", n.buffer));
  },
  sha512Sync: void 0,
  bytesToHex: Cs,
  hexToBytes: Ts,
  concatBytes: hs,
  mod: X,
  invert: cd,
  randomBytes: hf
}, Ni = 8, qf = 256, ld = Math.ceil(qf / Ni) + 1, ys = 2 ** (Ni - 1), $f = () => {
  const e = [];
  let t = Xt, n = t;
  for (let r = 0; r < ld; r++) {
    n = t, e.push(n);
    for (let c = 1; c < ys; c++)
      n = n.add(t), e.push(n);
    t = n.double();
  }
  return e;
};
let Uo;
const Vo = (e, t) => {
  const n = t.negate();
  return e ? n : t;
}, Rf = (e) => {
  const t = Uo || (Uo = $f());
  let n = Gt, r = Xt;
  const c = 2 ** Ni, i = c, s = Oi(c - 1), a = Oi(Ni);
  for (let o = 0; o < ld; o++) {
    let p = Number(e & s);
    e >>= a, p > ys && (p -= i, e += 1n);
    const m = o * ys, g = m, u = m + Math.abs(p) - 1, f = o % 2 !== 0, w = p < 0;
    p === 0 ? r = r.add(Vo(f, t[g])) : n = n.add(Vo(w, t[u]));
  }
  return { p: n, f: r };
};
var Sr = {}, Ir, Fo;
function ks() {
  return Fo || (Fo = 1, Ir = class ud {
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
      return new ud(t, new Map(n), r);
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
  }), Ir;
}
var Ar = {}, Go;
function _f() {
  return Go || (Go = 1, (function(e, t) {
    if (e.setImmediate)
      return;
    var n = 1, r = {}, c = !1, i = e.document, s;
    function a(b) {
      typeof b != "function" && (b = new Function("" + b));
      for (var y = new Array(arguments.length - 1), d = 0; d < y.length; d++)
        y[d] = arguments[d + 1];
      var l = { callback: b, args: y };
      return r[n] = l, s(n), n++;
    }
    function o(b) {
      delete r[b];
    }
    function p(b) {
      var y = b.callback, d = b.args;
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
    function m(b) {
      if (c)
        setTimeout(m, 0, b);
      else {
        var y = r[b];
        if (y) {
          c = !0;
          try {
            p(y);
          } finally {
            o(b), c = !1;
          }
        }
      }
    }
    function g() {
      s = function(b) {
        process.nextTick(function() {
          m(b);
        });
      };
    }
    function u() {
      if (e.postMessage && !e.importScripts) {
        var b = !0, y = e.onmessage;
        return e.onmessage = function() {
          b = !1;
        }, e.postMessage("", "*"), e.onmessage = y, b;
      }
    }
    function f() {
      var b = "setImmediate$" + Math.random() + "$", y = function(d) {
        d.source === e && typeof d.data == "string" && d.data.indexOf(b) === 0 && m(+d.data.slice(b.length));
      };
      e.addEventListener ? e.addEventListener("message", y, !1) : e.attachEvent("onmessage", y), s = function(d) {
        e.postMessage(b + d, "*");
      };
    }
    function w() {
      var b = new MessageChannel();
      b.port1.onmessage = function(y) {
        var d = y.data;
        m(d);
      }, s = function(y) {
        b.port2.postMessage(y);
      };
    }
    function x() {
      var b = i.documentElement;
      s = function(y) {
        var d = i.createElement("script");
        d.onreadystatechange = function() {
          m(y), d.onreadystatechange = null, b.removeChild(d), d = null;
        }, b.appendChild(d);
      };
    }
    function v() {
      s = function(b) {
        setTimeout(m, 0, b);
      };
    }
    var S = Object.getPrototypeOf && Object.getPrototypeOf(e);
    S = S && S.setTimeout ? S : e, {}.toString.call(e.process) === "[object process]" ? g() : u() ? f() : e.MessageChannel ? w() : i && "onreadystatechange" in i.createElement("script") ? x() : v(), S.setImmediate = a, S.clearImmediate = o;
  })(typeof self > "u" ? typeof ia > "u" ? Ar : ia : self)), Ar;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var qr, Bo;
function Ji() {
  if (Bo) return qr;
  Bo = 1, _f();
  const e = self.crypto || self.msCrypto;
  return qr = class {
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
  }, qr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var $r, Jo;
function pd() {
  return Jo || (Jo = 1, $r = class {
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
      const s = t.length;
      for (let a = 0; a < s; ++a) {
        const o = t[a], p = n.get(o);
        (c === null || o > c) && (p && a > 0 && o > t[a - 1] || !p && a < s - 1 && o > t[a + 1]) && (c = o, i = a);
      }
      if (c === null)
        this.done = !0;
      else {
        const a = n.get(c) ? i - 1 : i + 1;
        t[i] = t[a], t[a] = c;
        for (const o of t)
          o > c && n.set(o, !n.get(o));
      }
      return r;
    }
  }), $r;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Rr, Ho;
function Os() {
  if (Ho) return Rr;
  Ho = 1;
  const t = "http://www.w3.org/1999/02/22-rdf-syntax-ns#" + "langString", n = "http://www.w3.org/2001/XMLSchema#string", r = "NamedNode", c = "BlankNode", i = "Literal", s = "DefaultGraph", a = {};
  (() => {
    const f = "(?:<([^:]+:[^>]*)>)", x = "A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�" + "_", v = x + "0-9-·̀-ͯ‿-⁀", b = "(_:(?:[" + x + "0-9])(?:(?:[" + v + ".])*(?:[" + v + "]))?)", y = '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"', d = "(?:\\^\\^" + f + ")", h = "(?:" + y + "(?:" + d + "|" + "(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*))" + ")?)", I = "[ \\t]+", A = "[ \\t]*", P = "(?:" + f + "|" + b + ")" + I, T = f + I, j = "(?:" + f + "|" + b + "|" + h + ")" + A, O = "(?:\\.|(?:(?:" + f + "|" + b + ")" + A + "\\.))";
    a.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g, a.empty = new RegExp("^" + A + "$"), a.quad = new RegExp(
      "^" + A + P + T + j + O + A + "$"
    );
  })(), Rr = class Pi {
    /**
     * Parses RDF in the form of N-Quads.
     *
     * @param input the N-Quads input to parse.
     *
     * @return an RDF dataset (an array of quads per http://rdf.js.org/).
     */
    static parse(w) {
      const x = [], v = {}, S = w.split(a.eoln);
      let b = 0;
      for (const y of S) {
        if (b++, a.empty.test(y))
          continue;
        const d = y.match(a.quad);
        if (d === null)
          throw new Error("N-Quads parse error on line " + b + ".");
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
          termType: s,
          value: ""
        }, !(l.graph.value in v))
          v[l.graph.value] = [l], x.push(l);
        else {
          let h = !0;
          const I = v[l.graph.value];
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
      Array.isArray(w) || (w = Pi.legacyDatasetToQuads(w));
      const x = [];
      for (const v of w)
        x.push(Pi.serializeQuad(v));
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
    static serializeQuadComponents(w, x, v, S) {
      let b = "";
      return w.termType === r ? b += `<${w.value}>` : b += `${w.value}`, b += ` <${x.value}> `, v.termType === r ? b += `<${v.value}>` : v.termType === c ? b += v.value : (b += `"${m(v.value)}"`, v.datatype.value === t ? v.language && (b += `@${v.language}`) : v.datatype.value !== n && (b += `^^<${v.datatype.value}>`)), S.termType === r ? b += ` <${S.value}>` : S.termType === c && (b += ` ${S.value}`), b += ` .
`, b;
    }
    /**
     * Converts an RDF quad to an N-Quad string (a single quad).
     *
     * @param quad the RDF quad convert.
     *
     * @return the N-Quad string.
     */
    static serializeQuad(w) {
      return Pi.serializeQuadComponents(
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
      const x = [], v = {
        "blank node": c,
        IRI: r,
        literal: i
      };
      for (const S in w)
        w[S].forEach((y) => {
          const d = {};
          for (const l in y) {
            const h = y[l], I = {
              termType: v[h.type],
              value: h.value
            };
            I.termType === i && (I.datatype = {
              termType: r
            }, "datatype" in h && (I.datatype.value = h.datatype), "language" in h ? ("datatype" in h || (I.datatype.value = t), I.language = h.language) : "datatype" in h || (I.datatype.value = n)), d[l] = I;
          }
          S === "@default" ? d.graph = {
            termType: s,
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
    return f.replace(g, function(w, x, v, S) {
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
      if (v)
        return String.fromCharCode(parseInt(v, 16));
      if (S)
        throw new Error("Unsupported U escape");
    });
  }
  return Rr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var _r, Zo;
function fd() {
  if (Zo) return _r;
  Zo = 1;
  const e = ks(), t = Ji(), n = pd(), r = Os();
  _r = class {
    constructor({
      createMessageDigest: s = () => new t("sha256"),
      canonicalIdMap: a = /* @__PURE__ */ new Map(),
      maxDeepIterations: o = 1 / 0
    } = {}) {
      this.name = "URDNA2015", this.blankNodeInfo = /* @__PURE__ */ new Map(), this.canonicalIssuer = new e("_:c14n", a), this.createMessageDigest = s, this.maxDeepIterations = o, this.quads = null, this.deepIterations = null;
    }
    // 4.4) Normalization Algorithm
    async main(s) {
      this.deepIterations = /* @__PURE__ */ new Map(), this.quads = s;
      for (const f of s)
        this._addBlankNodeQuadInfo({ quad: f, component: f.subject }), this._addBlankNodeQuadInfo({ quad: f, component: f.object }), this._addBlankNodeQuadInfo({ quad: f, component: f.graph });
      const a = /* @__PURE__ */ new Map(), o = [...this.blankNodeInfo.keys()];
      let p = 0;
      for (const f of o)
        ++p % 100 === 0 && await this._yield(), await this._hashAndTrackBlankNode({ id: f, hashToBlankNodes: a });
      const m = [...a.keys()].sort(), g = [];
      for (const f of m) {
        const w = a.get(f);
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
          const v = new e("_:b");
          v.getId(x);
          const S = await this.hashNDegreeQuads(x, v);
          w.push(S);
        }
        w.sort(c);
        for (const x of w) {
          const v = x.issuer.getOldIds();
          for (const S of v)
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
    async hashFirstDegreeQuads(s) {
      const a = [], o = this.blankNodeInfo.get(s), p = o.quads;
      for (const g of p) {
        const u = {
          subject: null,
          predicate: g.predicate,
          object: null,
          graph: null
        };
        u.subject = this.modifyFirstDegreeComponent(
          s,
          g.subject,
          "subject"
        ), u.object = this.modifyFirstDegreeComponent(
          s,
          g.object,
          "object"
        ), u.graph = this.modifyFirstDegreeComponent(
          s,
          g.graph,
          "graph"
        ), a.push(r.serializeQuad(u));
      }
      a.sort();
      const m = this.createMessageDigest();
      for (const g of a)
        m.update(g);
      return o.hash = await m.digest(), o.hash;
    }
    // 4.7) Hash Related Blank Node
    async hashRelatedBlankNode(s, a, o, p) {
      let m;
      this.canonicalIssuer.hasId(s) ? m = this.canonicalIssuer.getId(s) : o.hasId(s) ? m = o.getId(s) : m = this.blankNodeInfo.get(s).hash;
      const g = this.createMessageDigest();
      return g.update(p), p !== "g" && g.update(this.getRelatedPredicate(a)), g.update(m), g.digest();
    }
    // 4.8) Hash N-Degree Quads
    async hashNDegreeQuads(s, a) {
      const o = this.deepIterations.get(s) || 0;
      if (o > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(s, o + 1);
      const p = this.createMessageDigest(), m = await this.createHashToRelated(s, a), g = [...m.keys()].sort();
      for (const u of g) {
        p.update(u);
        let f = "", w;
        const x = new n(m.get(u));
        let v = 0;
        for (; x.hasNext(); ) {
          const S = x.next();
          ++v % 3 === 0 && await this._yield();
          let b = a.clone(), y = "";
          const d = [];
          let l = !1;
          for (const h of S)
            if (this.canonicalIssuer.hasId(h) ? y += this.canonicalIssuer.getId(h) : (b.hasId(h) || d.push(h), y += b.getId(h)), f.length !== 0 && y > f) {
              l = !0;
              break;
            }
          if (!l) {
            for (const h of d) {
              const I = await this.hashNDegreeQuads(h, b);
              if (y += b.getId(h), y += `<${I.hash}>`, b = I.issuer, f.length !== 0 && y > f) {
                l = !0;
                break;
              }
            }
            l || (f.length === 0 || y < f) && (f = y, w = b);
          }
        }
        p.update(f), a = w;
      }
      return { hash: await p.digest(), issuer: a };
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
      const o = /* @__PURE__ */ new Map(), p = this.blankNodeInfo.get(s).quads;
      let m = 0;
      for (const g of p)
        ++m % 100 === 0 && await this._yield(), await Promise.all([
          this._addRelatedBlankNodeHash({
            quad: g,
            component: g.subject,
            position: "s",
            id: s,
            issuer: a,
            hashToRelated: o
          }),
          this._addRelatedBlankNodeHash({
            quad: g,
            component: g.object,
            position: "o",
            id: s,
            issuer: a,
            hashToRelated: o
          }),
          this._addRelatedBlankNodeHash({
            quad: g,
            component: g.graph,
            position: "g",
            id: s,
            issuer: a,
            hashToRelated: o
          })
        ]);
      return o;
    }
    async _hashAndTrackBlankNode({ id: s, hashToBlankNodes: a }) {
      const o = await this.hashFirstDegreeQuads(s), p = a.get(o);
      p ? p.push(s) : a.set(o, [s]);
    }
    _addBlankNodeQuadInfo({ quad: s, component: a }) {
      if (a.termType !== "BlankNode")
        return;
      const o = a.value, p = this.blankNodeInfo.get(o);
      p ? p.quads.add(s) : this.blankNodeInfo.set(o, { quads: /* @__PURE__ */ new Set([s]), hash: null });
    }
    async _addRelatedBlankNodeHash({ quad: s, component: a, position: o, id: p, issuer: m, hashToRelated: g }) {
      if (!(a.termType === "BlankNode" && a.value !== p))
        return;
      const u = a.value, f = await this.hashRelatedBlankNode(
        u,
        s,
        m,
        o
      ), w = g.get(f);
      w ? w.push(u) : g.set(f, [u]);
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
  function c(i, s) {
    return i.hash < s.hash ? -1 : i.hash > s.hash ? 1 : 0;
  }
  return _r;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var jr, Ko;
function jf() {
  if (Ko) return jr;
  Ko = 1;
  const e = Ji(), t = fd();
  return jr = class extends t {
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
      const i = /* @__PURE__ */ new Map(), s = this.blankNodeInfo.get(r).quads;
      let a = 0;
      for (const o of s) {
        let p, m;
        if (o.subject.termType === "BlankNode" && o.subject.value !== r)
          m = o.subject.value, p = "p";
        else if (o.object.termType === "BlankNode" && o.object.value !== r)
          m = o.object.value, p = "r";
        else
          continue;
        ++a % 100 === 0 && await this._yield();
        const g = await this.hashRelatedBlankNode(
          m,
          o,
          c,
          p
        ), u = i.get(g);
        u ? u.push(m) : i.set(g, [m]);
      }
      return i;
    }
  }, jr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Pr, Qo;
function hd() {
  if (Qo) return Pr;
  Qo = 1;
  const e = ks(), t = Ji(), n = pd(), r = Os();
  Pr = class {
    constructor({
      createMessageDigest: s = () => new t("sha256"),
      canonicalIdMap: a = /* @__PURE__ */ new Map(),
      maxDeepIterations: o = 1 / 0
    } = {}) {
      this.name = "URDNA2015", this.blankNodeInfo = /* @__PURE__ */ new Map(), this.canonicalIssuer = new e("_:c14n", a), this.createMessageDigest = s, this.maxDeepIterations = o, this.quads = null, this.deepIterations = null;
    }
    // 4.4) Normalization Algorithm
    main(s) {
      this.deepIterations = /* @__PURE__ */ new Map(), this.quads = s;
      for (const u of s)
        this._addBlankNodeQuadInfo({ quad: u, component: u.subject }), this._addBlankNodeQuadInfo({ quad: u, component: u.object }), this._addBlankNodeQuadInfo({ quad: u, component: u.graph });
      const a = /* @__PURE__ */ new Map(), o = [...this.blankNodeInfo.keys()];
      for (const u of o)
        this._hashAndTrackBlankNode({ id: u, hashToBlankNodes: a });
      const p = [...a.keys()].sort(), m = [];
      for (const u of p) {
        const f = a.get(u);
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
          const v = this.hashNDegreeQuads(w, x);
          f.push(v);
        }
        f.sort(c);
        for (const w of f) {
          const x = w.issuer.getOldIds();
          for (const v of x)
            this.canonicalIssuer.getId(v);
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
    hashFirstDegreeQuads(s) {
      const a = [], o = this.blankNodeInfo.get(s), p = o.quads;
      for (const g of p) {
        const u = {
          subject: null,
          predicate: g.predicate,
          object: null,
          graph: null
        };
        u.subject = this.modifyFirstDegreeComponent(
          s,
          g.subject,
          "subject"
        ), u.object = this.modifyFirstDegreeComponent(
          s,
          g.object,
          "object"
        ), u.graph = this.modifyFirstDegreeComponent(
          s,
          g.graph,
          "graph"
        ), a.push(r.serializeQuad(u));
      }
      a.sort();
      const m = this.createMessageDigest();
      for (const g of a)
        m.update(g);
      return o.hash = m.digest(), o.hash;
    }
    // 4.7) Hash Related Blank Node
    hashRelatedBlankNode(s, a, o, p) {
      let m;
      this.canonicalIssuer.hasId(s) ? m = this.canonicalIssuer.getId(s) : o.hasId(s) ? m = o.getId(s) : m = this.blankNodeInfo.get(s).hash;
      const g = this.createMessageDigest();
      return g.update(p), p !== "g" && g.update(this.getRelatedPredicate(a)), g.update(m), g.digest();
    }
    // 4.8) Hash N-Degree Quads
    hashNDegreeQuads(s, a) {
      const o = this.deepIterations.get(s) || 0;
      if (o > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(s, o + 1);
      const p = this.createMessageDigest(), m = this.createHashToRelated(s, a), g = [...m.keys()].sort();
      for (const u of g) {
        p.update(u);
        let f = "", w;
        const x = new n(m.get(u));
        for (; x.hasNext(); ) {
          const v = x.next();
          let S = a.clone(), b = "";
          const y = [];
          let d = !1;
          for (const l of v)
            if (this.canonicalIssuer.hasId(l) ? b += this.canonicalIssuer.getId(l) : (S.hasId(l) || y.push(l), b += S.getId(l)), f.length !== 0 && b > f) {
              d = !0;
              break;
            }
          if (!d) {
            for (const l of y) {
              const h = this.hashNDegreeQuads(l, S);
              if (b += S.getId(l), b += `<${h.hash}>`, S = h.issuer, f.length !== 0 && b > f) {
                d = !0;
                break;
              }
            }
            d || (f.length === 0 || b < f) && (f = b, w = S);
          }
        }
        p.update(f), a = w;
      }
      return { hash: p.digest(), issuer: a };
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
      const o = /* @__PURE__ */ new Map(), p = this.blankNodeInfo.get(s).quads;
      for (const m of p)
        this._addRelatedBlankNodeHash({
          quad: m,
          component: m.subject,
          position: "s",
          id: s,
          issuer: a,
          hashToRelated: o
        }), this._addRelatedBlankNodeHash({
          quad: m,
          component: m.object,
          position: "o",
          id: s,
          issuer: a,
          hashToRelated: o
        }), this._addRelatedBlankNodeHash({
          quad: m,
          component: m.graph,
          position: "g",
          id: s,
          issuer: a,
          hashToRelated: o
        });
      return o;
    }
    _hashAndTrackBlankNode({ id: s, hashToBlankNodes: a }) {
      const o = this.hashFirstDegreeQuads(s), p = a.get(o);
      p ? p.push(s) : a.set(o, [s]);
    }
    _addBlankNodeQuadInfo({ quad: s, component: a }) {
      if (a.termType !== "BlankNode")
        return;
      const o = a.value, p = this.blankNodeInfo.get(o);
      p ? p.quads.add(s) : this.blankNodeInfo.set(o, { quads: /* @__PURE__ */ new Set([s]), hash: null });
    }
    _addRelatedBlankNodeHash({ quad: s, component: a, position: o, id: p, issuer: m, hashToRelated: g }) {
      if (!(a.termType === "BlankNode" && a.value !== p))
        return;
      const u = a.value, f = this.hashRelatedBlankNode(u, s, m, o), w = g.get(f);
      w ? w.push(u) : g.set(f, [u]);
    }
    // canonical ids for 7.1
    _componentWithCanonicalId({ component: s }) {
      return s.termType === "BlankNode" && !s.value.startsWith(this.canonicalIssuer.prefix) ? {
        termType: "BlankNode",
        value: this.canonicalIssuer.getId(s.value)
      } : s;
    }
  };
  function c(i, s) {
    return i.hash < s.hash ? -1 : i.hash > s.hash ? 1 : 0;
  }
  return Pr;
}
/*!
 * Copyright (c) 2016-2021 Digital Bazaar, Inc. All rights reserved.
 */
var Er, Wo;
function Pf() {
  if (Wo) return Er;
  Wo = 1;
  const e = Ji(), t = hd();
  return Er = class extends t {
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
      const i = /* @__PURE__ */ new Map(), s = this.blankNodeInfo.get(r).quads;
      for (const a of s) {
        let o, p;
        if (a.subject.termType === "BlankNode" && a.subject.value !== r)
          p = a.subject.value, o = "p";
        else if (a.object.termType === "BlankNode" && a.object.value !== r)
          p = a.object.value, o = "r";
        else
          continue;
        const m = this.hashRelatedBlankNode(p, a, c, o), g = i.get(m);
        g ? g.push(p) : i.set(m, [p]);
      }
      return i;
    }
  }, Er;
}
const Ef = {}, Cf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ef
}, Symbol.toStringTag, { value: "Module" })), Tf = /* @__PURE__ */ Pl(Cf);
var Xo;
function Mf() {
  return Xo || (Xo = 1, (function(e) {
    const t = fd(), n = jf(), r = hd(), c = Pf();
    let i;
    try {
      i = Tf;
    } catch {
    }
    function s(a) {
      return Array.isArray(a) ? a : e.NQuads.legacyDatasetToQuads(a);
    }
    e.NQuads = Os(), e.IdentifierIssuer = ks(), e._rdfCanonizeNative = function(a) {
      return a && (i = a), i;
    }, e.canonize = async function(a, o) {
      const p = s(a);
      if (o.useNative) {
        if (!i)
          throw new Error("rdf-canonize-native not available");
        if (o.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return new Promise((m, g) => i.canonize(p, o, (u, f) => u ? g(u) : m(f)));
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
    }, e._canonizeSync = function(a, o) {
      const p = s(a);
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
  })(Sr)), Sr;
}
var Cr, Yo;
function Ns() {
  return Yo || (Yo = 1, Cr = Mf()), Cr;
}
var Tr, ec;
function Ce() {
  if (ec) return Tr;
  ec = 1;
  const e = {};
  return Tr = e, e.isArray = Array.isArray, e.isBoolean = (t) => typeof t == "boolean" || Object.prototype.toString.call(t) === "[object Boolean]", e.isDouble = (t) => e.isNumber(t) && (String(t).indexOf(".") !== -1 || Math.abs(t) >= 1e21), e.isEmptyObject = (t) => e.isObject(t) && Object.keys(t).length === 0, e.isNumber = (t) => typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]", e.isNumeric = (t) => !isNaN(parseFloat(t)) && isFinite(t), e.isObject = (t) => Object.prototype.toString.call(t) === "[object Object]", e.isString = (t) => typeof t == "string" || Object.prototype.toString.call(t) === "[object String]", e.isUndefined = (t) => typeof t > "u", Tr;
}
var Mr, tc;
function ut() {
  if (tc) return Mr;
  tc = 1;
  const e = Ce(), t = {};
  return Mr = t, t.isSubject = (n) => e.isObject(n) && !("@value" in n || "@set" in n || "@list" in n) ? Object.keys(n).length > 1 || !("@id" in n) : !1, t.isSubjectReference = (n) => (
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
  }, Mr;
}
var kr, nc;
function ze() {
  return nc || (nc = 1, kr = class extends Error {
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
  }), kr;
}
var Or, ic;
function De() {
  if (ic) return Or;
  ic = 1;
  const e = ut(), t = Ce(), n = Ns().IdentifierIssuer, r = ze(), c = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/, i = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g, s = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/, a = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g, o = /^@[a-zA-Z]+$/, p = {
    headers: {
      accept: "application/ld+json, application/json"
    }
  }, m = {};
  Or = m, m.IdentifierIssuer = n, m.REGEX_BCP47 = c, m.REGEX_KEYWORD = o, m.clone = function(u) {
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
    const f = {}, w = u.match(i);
    for (let x = 0; x < w.length; ++x) {
      let v = w[x].match(s);
      if (!v)
        continue;
      const S = { target: v[1] }, b = v[2];
      for (; v = a.exec(b); )
        S[v[1]] = v[2] === void 0 ? v[3] : v[2];
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
      throw new r(
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
      const v = e.isList(x);
      if (t.isArray(x) || v) {
        v && (x = x["@list"]);
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
      for (let v = 0; v < w.length; ++v)
        m.addValue(u, f, w[v], x);
    } else if (u.hasOwnProperty(f)) {
      const v = !x.allowDuplicate && m.hasValue(u, f, w);
      !t.isArray(u[f]) && (!v || x.propertyIsArray) && (u[f] = [u[f]]), v || (x.prependValue ? u[f].unshift(w) : u[f].push(w));
    } else
      u[f] = x.propertyIsArray ? [w] : w;
  }, m.getValues = (u, f) => [].concat(u[f] || []), m.removeProperty = (u, f) => {
    delete u[f];
  }, m.removeValue = (u, f, w, x) => {
    x = x || {}, "propertyIsArray" in x || (x.propertyIsArray = !1);
    const v = m.getValues(u, f).filter(
      (S) => !m.compareValues(S, w)
    );
    v.length === 0 ? m.removeProperty(u, f) : v.length === 1 && !x.propertyIsArray ? u[f] = v[0] : u[f] = v;
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
        const v = w[x];
        v !== "@id" && (f[v] = g(u, f[v]));
      }
    }
    return f;
  }
  return Or;
}
var Nr, rc;
function Ls() {
  if (rc) return Nr;
  rc = 1;
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
var Lr, sc;
function md() {
  return sc || (sc = 1, Lr = class {
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
  }), Lr;
}
var Dr, ac;
function xt() {
  if (ac) return Dr;
  ac = 1;
  const e = Ce(), t = {};
  Dr = t, t.parsers = {
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
    const i = {}, s = t.parsers[c || "full"], a = s.regex.exec(r);
    let o = s.keys.length;
    for (; o--; )
      i[s.keys[o]] = a[o] === void 0 ? null : a[o];
    return (i.scheme === "https" && i.port === "443" || i.scheme === "http" && i.port === "80") && (i.href = i.href.replace(":" + i.port, ""), i.authority = i.authority.replace(":" + i.port, ""), i.port = null), i.normalizedPath = t.removeDotSegments(i.path), i;
  }, t.prependBase = (r, c) => {
    if (r === null || t.isAbsolute(c))
      return c;
    (!r || e.isString(r)) && (r = t.parse(r || ""));
    const i = t.parse(c), s = {
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
        let o = r.path;
        o = o.substr(0, o.lastIndexOf("/") + 1), (o.length > 0 || r.authority) && o.substr(-1) !== "/" && (o += "/"), o += i.path, s.path = o;
      }
      s.query = i.query;
    }
    i.path !== "" && (s.path = t.removeDotSegments(s.path));
    let a = s.protocol;
    return s.authority !== null && (a += "//" + s.authority), a += s.path, s.query !== null && (a += "?" + s.query), i.fragment !== null && (a += "#" + i.fragment), a === "" && (a = "./"), a;
  }, t.removeBase = (r, c) => {
    if (r === null)
      return c;
    (!r || e.isString(r)) && (r = t.parse(r || ""));
    let i = "";
    if (r.href !== "" ? i += (r.protocol || "") + "//" + (r.authority || "") : c.indexOf("//") && (i += "//"), c.indexOf(i) !== 0)
      return c;
    const s = t.parse(c.substr(i.length)), a = r.normalizedPath.split("/"), o = s.normalizedPath.split("/"), p = s.fragment || s.query ? 0 : 1;
    for (; a.length > 0 && o.length > p && a[0] === o[0]; )
      a.shift(), o.shift();
    let m = "";
    if (a.length > 0) {
      a.pop();
      for (let g = 0; g < a.length; ++g)
        m += "../";
    }
    return m += o.join("/"), s.query !== null && (m += "?" + s.query), s.fragment !== null && (m += "#" + s.fragment), m === "" && (m = "./"), m;
  }, t.removeDotSegments = (r) => {
    if (r.length === 0)
      return "";
    const c = r.split("/"), i = [];
    for (; c.length > 0; ) {
      const s = c.shift(), a = c.length === 0;
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
  return t.isAbsolute = (r) => e.isString(r) && n.test(r), t.isRelative = (r) => e.isString(r), Dr;
}
var zr, oc;
function kf() {
  if (oc) return zr;
  oc = 1;
  const { parseLinkHeader: e, buildHeaders: t } = De(), { LINK_HEADER_CONTEXT: n } = Ls(), r = ze(), c = md(), { prependBase: i } = xt(), s = /(^|(\r\n))link:/i;
  zr = ({
    secure: o,
    headers: p = {},
    xhr: m
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
        w = await a(m, f, p);
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
      let x = { contextUrl: null, documentUrl: f, document: w.response }, v = null;
      const S = w.getResponseHeader("Content-Type");
      let b;
      if (s.test(w.getAllResponseHeaders()) && (b = w.getResponseHeader("Link")), b && S !== "application/ld+json") {
        const y = e(b), d = y[n];
        if (Array.isArray(d))
          throw new r(
            "URL could not be dereferenced, it has more than one associated HTTP Link Header.",
            "jsonld.InvalidUrl",
            { code: "multiple context link headers", url: f }
          );
        d && (x.contextUrl = d.target), v = y.alternate, v && v.type == "application/ld+json" && !(S || "").match(/^application\/(\w*\+)?json$/) && (x = await u(i(f, v.target)));
      }
      return x;
    }
  };
  function a(o, p, m) {
    o = o || XMLHttpRequest;
    const g = new o();
    return new Promise((u, f) => {
      g.onload = () => u(g), g.onerror = (w) => f(w), g.open("GET", p, !0);
      for (const w in m)
        g.setRequestHeader(w, m[w]);
      g.send();
    });
  }
  return zr;
}
var Ur, cc;
function Of() {
  if (cc) return Ur;
  cc = 1;
  const e = kf(), t = {};
  return Ur = t, t.setupDocumentLoaders = function(n) {
    typeof XMLHttpRequest < "u" && (n.documentLoaders.xhr = e, n.useDocumentLoader("xhr"));
  }, t.setupGlobals = function(n) {
    typeof globalThis.JsonLdProcessor > "u" && Object.defineProperty(globalThis, "JsonLdProcessor", {
      writable: !0,
      enumerable: !1,
      configurable: !0,
      value: n.JsonLdProcessor
    });
  }, Ur;
}
var Vr, dc;
function Nf() {
  return dc || (dc = 1, Vr = function(e) {
    e.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next)
        yield t.value;
    };
  }), Vr;
}
var Fr, lc;
function Lf() {
  if (lc) return Fr;
  lc = 1, Fr = e, e.Node = c, e.create = e;
  function e(i) {
    var s = this;
    if (s instanceof e || (s = new e()), s.tail = null, s.head = null, s.length = 0, i && typeof i.forEach == "function")
      i.forEach(function(p) {
        s.push(p);
      });
    else if (arguments.length > 0)
      for (var a = 0, o = arguments.length; a < o; a++)
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
    for (var a = this.head, o = 0; a !== null; o++)
      i.call(s, a.value, o, this), a = a.next;
  }, e.prototype.forEachReverse = function(i, s) {
    s = s || this;
    for (var a = this.tail, o = this.length - 1; a !== null; o--)
      i.call(s, a.value, o, this), a = a.prev;
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
    for (var a = new e(), o = this.head; o !== null; )
      a.push(i.call(s, o.value, this)), o = o.next;
    return a;
  }, e.prototype.mapReverse = function(i, s) {
    s = s || this;
    for (var a = new e(), o = this.tail; o !== null; )
      a.push(i.call(s, o.value, this)), o = o.prev;
    return a;
  }, e.prototype.reduce = function(i, s) {
    var a, o = this.head;
    if (arguments.length > 1)
      a = s;
    else if (this.head)
      o = this.head.next, a = this.head.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var p = 0; o !== null; p++)
      a = i(a, o.value, p), o = o.next;
    return a;
  }, e.prototype.reduceReverse = function(i, s) {
    var a, o = this.tail;
    if (arguments.length > 1)
      a = s;
    else if (this.tail)
      o = this.tail.prev, a = this.tail.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var p = this.length - 1; o !== null; p--)
      a = i(a, o.value, p), o = o.prev;
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
    for (var o = 0, p = this.head; p !== null && o < i; o++)
      p = p.next;
    for (; p !== null && o < s; o++, p = p.next)
      a.push(p.value);
    return a;
  }, e.prototype.sliceReverse = function(i, s) {
    s = s || this.length, s < 0 && (s += this.length), i = i || 0, i < 0 && (i += this.length);
    var a = new e();
    if (s < i || s < 0)
      return a;
    i < 0 && (i = 0), s > this.length && (s = this.length);
    for (var o = this.length, p = this.tail; p !== null && o > s; o--)
      p = p.prev;
    for (; p !== null && o > i; o--, p = p.prev)
      a.push(p.value);
    return a;
  }, e.prototype.splice = function(i, s, ...a) {
    i > this.length && (i = this.length - 1), i < 0 && (i = this.length + i);
    for (var o = 0, p = this.head; p !== null && o < i; o++)
      p = p.next;
    for (var m = [], o = 0; p && o < s; o++)
      m.push(p.value), p = this.removeNode(p);
    p === null && (p = this.tail), p !== this.head && p !== this.tail && (p = p.prev);
    for (var o = 0; o < a.length; o++)
      p = t(this, p, a[o]);
    return m;
  }, e.prototype.reverse = function() {
    for (var i = this.head, s = this.tail, a = i; a !== null; a = a.prev) {
      var o = a.prev;
      a.prev = a.next, a.next = o;
    }
    return this.head = s, this.tail = i, this;
  };
  function t(i, s, a) {
    var o = s === i.head ? new c(a, null, s, i) : new c(a, s, s.next, i);
    return o.next === null && (i.tail = o), o.prev === null && (i.head = o), i.length++, o;
  }
  function n(i, s) {
    i.tail = new c(s, i.tail, null, i), i.head || (i.head = i.tail), i.length++;
  }
  function r(i, s) {
    i.head = new c(s, null, i.head, i), i.tail || (i.tail = i.head), i.length++;
  }
  function c(i, s, a, o) {
    if (!(this instanceof c))
      return new c(i, s, a, o);
    this.list = o, this.value = i, s ? (s.next = this, this.prev = s) : this.prev = null, a ? (a.prev = this, this.next = a) : this.next = null;
  }
  try {
    Nf()(e);
  } catch {
  }
  return Fr;
}
var Gr, uc;
function yd() {
  if (uc) return Gr;
  uc = 1;
  const e = Lf(), t = Symbol("max"), n = Symbol("length"), r = Symbol("lengthCalculator"), c = Symbol("allowStale"), i = Symbol("maxAge"), s = Symbol("dispose"), a = Symbol("noDisposeOnSet"), o = Symbol("lruList"), p = Symbol("cache"), m = Symbol("updateAgeOnGet"), g = () => 1;
  class u {
    constructor(d) {
      if (typeof d == "number" && (d = { max: d }), d || (d = {}), d.max && (typeof d.max != "number" || d.max < 0))
        throw new TypeError("max must be a non-negative number");
      this[t] = d.max || 1 / 0;
      const l = d.length || g;
      if (this[r] = typeof l != "function" ? g : l, this[c] = d.stale || !1, d.maxAge && typeof d.maxAge != "number")
        throw new TypeError("maxAge must be a number");
      this[i] = d.maxAge || 0, this[s] = d.dispose, this[a] = d.noDisposeOnSet || !1, this[m] = d.updateAgeOnGet || !1, this.reset();
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
      for (let h = this[o].tail; h !== null; ) {
        const I = h.prev;
        b(this, d, h, l), h = I;
      }
    }
    forEach(d, l) {
      l = l || this;
      for (let h = this[o].head; h !== null; ) {
        const I = h.next;
        b(this, d, h, l), h = I;
      }
    }
    keys() {
      return this[o].toArray().map((d) => d.key);
    }
    values() {
      return this[o].toArray().map((d) => d.value);
    }
    reset() {
      this[s] && this[o] && this[o].length && this[o].forEach((d) => this[s](d.key, d.value)), this[p] = /* @__PURE__ */ new Map(), this[o] = new e(), this[n] = 0;
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
      if (h = h || this[i], h && typeof h != "number")
        throw new TypeError("maxAge must be a number");
      const I = h ? Date.now() : 0, A = this[r](l, d);
      if (this[p].has(d)) {
        if (A > this[t])
          return v(this, this[p].get(d)), !1;
        const j = this[p].get(d).value;
        return this[s] && (this[a] || this[s](d, j.value)), j.now = I, j.maxAge = h, j.value = l, this[n] += A - j.length, j.length = A, this.get(d), x(this), !0;
      }
      const P = new S(d, l, A, I, h);
      return P.length > this[t] ? (this[s] && this[s](d, l), !1) : (this[n] += P.length, this[o].unshift(P), this[p].set(d, this[o].head), x(this), !0);
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
      return d ? (v(this, d), d.value) : null;
    }
    del(d) {
      v(this, this[p].get(d));
    }
    load(d) {
      this.reset();
      const l = Date.now();
      for (let h = d.length - 1; h >= 0; h--) {
        const I = d[h], A = I.e || 0;
        if (A === 0)
          this.set(I.k, I.v);
        else {
          const P = A - l;
          P > 0 && this.set(I.k, I.v, P);
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
        if (v(y, h), !y[c])
          return;
      } else
        l && (y[m] && (h.value.now = Date.now()), y[o].unshiftNode(h));
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
        v(y, d), d = l;
      }
  }, v = (y, d) => {
    if (d) {
      const l = d.value;
      y[s] && y[s](l.key, l.value), y[n] -= l.length, y[p].delete(l.key), y[o].removeNode(d);
    }
  };
  class S {
    constructor(d, l, h, I, A) {
      this.key = d, this.value = l, this.length = h, this.now = I, this.maxAge = A || 0;
    }
  }
  const b = (y, d, l, h) => {
    let I = l.value;
    w(y, I) && (v(y, l), y[c] || (I = void 0)), I && d.call(h, I.value, I.key, y);
  };
  return Gr = u, Gr;
}
var Br, pc;
function Df() {
  if (pc) return Br;
  pc = 1;
  const e = yd(), t = 10;
  return Br = class {
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
  }, Br;
}
var Jr, fc;
function zf() {
  if (fc) return Jr;
  fc = 1;
  const {
    isArray: e,
    isObject: t,
    isString: n
  } = Ce(), {
    asArray: r
  } = De(), { prependBase: c } = xt(), i = ze(), s = Df(), a = 10;
  Jr = class {
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
      const v = [];
      for (const S of u) {
        if (n(S)) {
          let d = this._get(S);
          d || (d = await this._resolveRemoteContext(
            { activeCtx: g, url: S, documentLoader: f, base: w, cycles: x }
          )), e(d) ? v.push(...d) : v.push(d);
          continue;
        }
        if (S === null) {
          v.push(new s({ document: null }));
          continue;
        }
        t(S) || o(u);
        const b = JSON.stringify(S);
        let y = this._get(b);
        y || (y = new s({ document: S }), this._cacheResolvedContext({ key: b, resolved: y, tag: "static" })), v.push(y);
      }
      return v;
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
      const { context: v, remoteDoc: S } = await this._fetchContext(
        { activeCtx: g, url: u, documentLoader: f, cycles: x }
      );
      w = S.documentUrl || u, p({ context: v, base: w });
      const b = await this.resolve(
        { activeCtx: g, context: v, documentLoader: f, base: w, cycles: x }
      );
      return this._cacheResolvedContext({ key: u, resolved: b, tag: S.tag }), b;
    }
    async _fetchContext({ activeCtx: g, url: u, documentLoader: f, cycles: w }) {
      if (w.size > a)
        throw new i(
          "Maximum number of @context URLs exceeded.",
          "jsonld.ContextUrlError",
          {
            code: g.processingMode === "json-ld-1.0" ? "loading remote context failed" : "context overflow",
            max: a
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
      let x, v;
      try {
        v = await f(u), x = v.document || null, n(x) && (x = JSON.parse(x));
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
      return "@context" in x ? x = { "@context": x["@context"] } : x = { "@context": {} }, v.contextUrl && (e(x["@context"]) || (x["@context"] = [x["@context"]]), x["@context"].push(v.contextUrl)), { context: x, remoteDoc: v };
    }
  };
  function o(m) {
    throw new i(
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
  return Jr;
}
var Hr, hc;
function Uf() {
  return hc || (hc = 1, Hr = Ns().NQuads), Hr;
}
var Zr, mc;
function vn() {
  if (mc) return Zr;
  mc = 1;
  const e = ze(), {
    isArray: t
  } = Ce(), {
    asArray: n
  } = De(), r = {};
  Zr = r, r.defaultEventHandler = null, r.setupEventHandler = ({ options: s = {} }) => {
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
    c({ event: s, handlers: a.eventHandler });
  };
  function c({ event: s, handlers: a }) {
    let o = !0;
    for (let p = 0; o && p < a.length; ++p) {
      o = !1;
      const m = a[p];
      if (t(m))
        o = c({ event: s, handlers: m });
      else if (typeof m == "function")
        m({ event: s, next: () => {
          o = !0;
        } });
      else if (typeof m == "object")
        s.code in m ? m[s.code]({ event: s, next: () => {
          o = !0;
        } }) : o = !0;
      else
        throw new e(
          "Invalid event handler.",
          "jsonld.InvalidEventHandler",
          { event: s }
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
  return r.safeEventHandler = function({ event: a, next: o }) {
    if (a.level === "warning" && i.has(a.code))
      throw new e(
        "Safe mode validation error.",
        "jsonld.ValidationError",
        { event: a }
      );
    o();
  }, r.logEventHandler = function({ event: a, next: o }) {
    console.log(`EVENT: ${a.message}`, { event: a }), o();
  }, r.logWarningEventHandler = function({ event: a, next: o }) {
    a.level === "warning" && console.warn(`WARNING: ${a.message}`, { event: a }), o();
  }, r.unhandledEventHandler = function({ event: a }) {
    throw new e(
      "No handler for event.",
      "jsonld.UnhandledEvent",
      { event: a }
    );
  }, r.setDefaultEventHandler = function({ eventHandler: s } = {}) {
    r.defaultEventHandler = s ? n(s) : null;
  }, Zr;
}
var Kr, yc;
function Tt() {
  if (yc) return Kr;
  yc = 1;
  const e = De(), t = ze(), {
    isArray: n,
    isObject: r,
    isString: c,
    isUndefined: i
  } = Ce(), {
    isAbsolute: s,
    isRelative: a,
    prependBase: o
  } = xt(), {
    handleEvent: p
  } = vn(), {
    REGEX_BCP47: m,
    REGEX_KEYWORD: g,
    asArray: u,
    compareShortestLeast: f
  } = De(), w = /* @__PURE__ */ new Map(), x = 1e4, v = {};
  Kr = v, v.process = async ({
    activeCtx: y,
    localCtx: d,
    options: l,
    propagate: h = !0,
    overrideProtected: I = !1,
    cycles: A = /* @__PURE__ */ new Set()
  }) => {
    if (r(d) && "@context" in d && n(d["@context"]) && (d = d["@context"]), u(d).length === 0)
      return y;
    const T = [], j = [
      ({ event: D, next: q }) => {
        T.push(D), q();
      }
    ];
    l.eventHandler && j.push(l.eventHandler);
    const O = l;
    l = { ...l, eventHandler: j };
    const R = await l.contextResolver.resolve({
      activeCtx: y,
      context: d,
      documentLoader: l.documentLoader,
      base: l.base
    });
    r(R[0].document) && typeof R[0].document["@propagate"] == "boolean" && (h = R[0].document["@propagate"]);
    let E = y;
    !h && !E.previousContext && (E = E.clone(), E.previousContext = y);
    for (const D of R) {
      let { document: q } = D;
      if (y = E, q === null) {
        if (!I && Object.keys(y.protected).length !== 0)
          throw new t(
            "Tried to nullify a context with protected terms outside of a term definition.",
            "jsonld.SyntaxError",
            { code: "invalid context nullification" }
          );
        E = y = v.getInitialContext(l).clone();
        continue;
      }
      const V = D.getProcessed(y);
      if (V) {
        if (O.eventHandler)
          for (const J of V.events)
            p({ event: J, options: O });
        E = y = V.context;
        continue;
      }
      if (r(q) && "@context" in q && (q = q["@context"]), !r(q))
        throw new t(
          "Invalid JSON-LD syntax; @context must be an object.",
          "jsonld.SyntaxError",
          { code: "invalid local context", context: q }
        );
      E = E.clone();
      const G = /* @__PURE__ */ new Map();
      if ("@version" in q) {
        if (q["@version"] !== 1.1)
          throw new t(
            "Unsupported JSON-LD version: " + q["@version"],
            "jsonld.UnsupportedVersion",
            { code: "invalid @version value", context: q }
          );
        if (y.processingMode && y.processingMode === "json-ld-1.0")
          throw new t(
            "@version: " + q["@version"] + " not compatible with " + y.processingMode,
            "jsonld.ProcessingModeConflict",
            { code: "processing mode conflict", context: q }
          );
        E.processingMode = "json-ld-1.1", E["@version"] = q["@version"], G.set("@version", !0);
      }
      if (E.processingMode = E.processingMode || y.processingMode, "@base" in q) {
        let J = q["@base"];
        if (!(J === null || s(J))) if (a(J))
          J = o(E["@base"], J);
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.',
            "jsonld.SyntaxError",
            { code: "invalid base IRI", context: q }
          );
        E["@base"] = J, G.set("@base", !0);
      }
      if ("@vocab" in q) {
        const J = q["@vocab"];
        if (J === null)
          delete E["@vocab"];
        else if (c(J)) {
          if (!s(J) && v.processingMode(E, 1))
            throw new t(
              'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.',
              "jsonld.SyntaxError",
              { code: "invalid vocab mapping", context: q }
            );
          {
            const M = S(
              E,
              J,
              { vocab: !0, base: !0 },
              void 0,
              void 0,
              l
            );
            s(M) || l.eventHandler && p({
              event: {
                type: ["JsonLdEvent"],
                code: "relative @vocab reference",
                level: "warning",
                message: "Relative @vocab reference found.",
                details: {
                  vocab: M
                }
              },
              options: l
            }), E["@vocab"] = M;
          }
        } else throw new t(
          'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be a string or null.',
          "jsonld.SyntaxError",
          { code: "invalid vocab mapping", context: q }
        );
        G.set("@vocab", !0);
      }
      if ("@language" in q) {
        const J = q["@language"];
        if (J === null)
          delete E["@language"];
        else if (c(J))
          J.match(m) || l.eventHandler && p({
            event: {
              type: ["JsonLdEvent"],
              code: "invalid @language value",
              level: "warning",
              message: "@language value must be valid BCP47.",
              details: {
                language: J
              }
            },
            options: l
          }), E["@language"] = J.toLowerCase();
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@language" in a @context must be a string or null.',
            "jsonld.SyntaxError",
            { code: "invalid default language", context: q }
          );
        G.set("@language", !0);
      }
      if ("@direction" in q) {
        const J = q["@direction"];
        if (y.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @direction not compatible with " + y.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context member", context: q }
          );
        if (J === null)
          delete E["@direction"];
        else {
          if (J !== "ltr" && J !== "rtl")
            throw new t(
              'Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", context: q }
            );
          E["@direction"] = J;
        }
        G.set("@direction", !0);
      }
      if ("@propagate" in q) {
        const J = q["@propagate"];
        if (y.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @propagate not compatible with " + y.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: q }
          );
        if (typeof J != "boolean")
          throw new t(
            "Invalid JSON-LD syntax; @propagate value must be a boolean.",
            "jsonld.SyntaxError",
            { code: "invalid @propagate value", context: d }
          );
        G.set("@propagate", !0);
      }
      if ("@import" in q) {
        const J = q["@import"];
        if (y.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @import not compatible with " + y.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: q }
          );
        if (!c(J))
          throw new t(
            "Invalid JSON-LD syntax; @import must be a string.",
            "jsonld.SyntaxError",
            { code: "invalid @import value", context: d }
          );
        const M = await l.contextResolver.resolve({
          activeCtx: y,
          context: J,
          documentLoader: l.documentLoader,
          base: l.base
        });
        if (M.length !== 1)
          throw new t(
            "Invalid JSON-LD syntax; @import must reference a single context.",
            "jsonld.SyntaxError",
            { code: "invalid remote context", context: d }
          );
        const k = M[0].getProcessed(y);
        if (k)
          q = k;
        else {
          const z = M[0].document;
          if ("@import" in z)
            throw new t(
              "Invalid JSON-LD syntax: imported context must not include @import.",
              "jsonld.SyntaxError",
              { code: "invalid context entry", context: d }
            );
          for (const N in z)
            q.hasOwnProperty(N) || (q[N] = z[N]);
          M[0].setProcessed(y, q);
        }
        G.set("@import", !0);
      }
      G.set("@protected", q["@protected"] || !1);
      for (const J in q)
        if (v.createTermDefinition({
          activeCtx: E,
          localCtx: q,
          term: J,
          defined: G,
          options: l,
          overrideProtected: I
        }), r(q[J]) && "@context" in q[J]) {
          const M = q[J]["@context"];
          let k = !0;
          if (c(M)) {
            const z = o(l.base, M);
            A.has(z) ? k = !1 : A.add(z);
          }
          if (k)
            try {
              await v.process({
                activeCtx: E.clone(),
                localCtx: q[J]["@context"],
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
                  context: q[J]["@context"],
                  term: J
                }
              );
            }
        }
      D.setProcessed(y, {
        context: E,
        events: T
      });
    }
    return E;
  }, v.createTermDefinition = ({
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
    let P;
    if (d.hasOwnProperty(l) && (P = d[l]), l === "@type" && r(P) && (P["@container"] || "@set") === "@set" && v.processingMode(y, 1.1)) {
      const q = ["@container", "@id", "@protected"], V = Object.keys(P);
      if (V.length === 0 || V.some((G) => !q.includes(G)))
        throw new t(
          "Invalid JSON-LD syntax; keywords cannot be overridden.",
          "jsonld.SyntaxError",
          { code: "keyword redefinition", context: d, term: l }
        );
    } else {
      if (v.isKeyword(l))
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
    const T = y.mappings.get(l);
    y.mappings.has(l) && y.mappings.delete(l);
    let j = !1;
    if ((c(P) || P === null) && (j = !0, P = { "@id": P }), !r(P))
      throw new t(
        "Invalid JSON-LD syntax; @context term values must be strings or objects.",
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: d }
      );
    const O = {};
    y.mappings.set(l, O), O.reverse = !1;
    const R = ["@container", "@id", "@language", "@reverse", "@type"];
    v.processingMode(y, 1.1) && R.push(
      "@context",
      "@direction",
      "@index",
      "@nest",
      "@prefix",
      "@protected"
    );
    for (const q in P)
      if (!R.includes(q))
        throw new t(
          "Invalid JSON-LD syntax; a term definition must not contain " + q,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
    const E = l.indexOf(":");
    if (O._termHasColon = E > 0, "@reverse" in P) {
      if ("@id" in P)
        throw new t(
          "Invalid JSON-LD syntax; a @reverse term definition must not contain @id.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: d }
        );
      if ("@nest" in P)
        throw new t(
          "Invalid JSON-LD syntax; a @reverse term definition must not contain @nest.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: d }
        );
      const q = P["@reverse"];
      if (!c(q))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      if (q.match(g)) {
        I.eventHandler && p({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved @reverse value",
            level: "warning",
            message: '@reverse values beginning with "@" are reserved for future use and dropped.',
            details: {
              reverse: q
            }
          },
          options: I
        }), T ? y.mappings.set(l, T) : y.mappings.delete(l);
        return;
      }
      const V = S(
        y,
        q,
        { vocab: !0, base: !1 },
        d,
        h,
        I
      );
      if (!s(V))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      O["@id"] = V, O.reverse = !0;
    } else if ("@id" in P) {
      let q = P["@id"];
      if (q && !c(q))
        throw new t(
          "Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      if (q === null)
        O["@id"] = null;
      else if (!v.isKeyword(q) && q.match(g)) {
        I.eventHandler && p({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved @id value",
            level: "warning",
            message: '@id values beginning with "@" are reserved for future use and dropped.',
            details: {
              id: q
            }
          },
          options: I
        }), T ? y.mappings.set(l, T) : y.mappings.delete(l);
        return;
      } else if (q !== l) {
        if (q = S(
          y,
          q,
          { vocab: !0, base: !1 },
          d,
          h,
          I
        ), !s(q) && !v.isKeyword(q))
          throw new t(
            "Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: d }
          );
        if (l.match(/(?::[^:])|\//)) {
          const V = new Map(h).set(l, !0);
          if (S(
            y,
            l,
            { vocab: !0, base: !1 },
            d,
            V,
            I
          ) !== q)
            throw new t(
              "Invalid JSON-LD syntax; term in form of IRI must expand to definition.",
              "jsonld.SyntaxError",
              { code: "invalid IRI mapping", context: d }
            );
        }
        O["@id"] = q, O._prefix = j && !O._termHasColon && q.match(/[:\/\?#\[\]@]$/) !== null;
      }
    }
    if (!("@id" in O))
      if (O._termHasColon) {
        const q = l.substr(0, E);
        if (d.hasOwnProperty(q) && v.createTermDefinition({
          activeCtx: y,
          localCtx: d,
          term: q,
          defined: h,
          options: I
        }), y.mappings.has(q)) {
          const V = l.substr(E + 1);
          O["@id"] = y.mappings.get(q)["@id"] + V;
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
    if ((P["@protected"] === !0 || h.get("@protected") === !0 && P["@protected"] !== !1) && (y.protected[l] = !0, O.protected = !0), h.set(l, !0), "@type" in P) {
      let q = P["@type"];
      if (!c(q))
        throw new t(
          "Invalid JSON-LD syntax; an @context @type value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid type mapping", context: d }
        );
      if (q === "@json" || q === "@none") {
        if (v.processingMode(y, 1))
          throw new t(
            `Invalid JSON-LD syntax; an @context @type value must not be "${q}" in JSON-LD 1.0 mode.`,
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
      } else if (q !== "@id" && q !== "@vocab") {
        if (q = S(
          y,
          q,
          { vocab: !0, base: !1 },
          d,
          h,
          I
        ), !s(q))
          throw new t(
            "Invalid JSON-LD syntax; an @context @type value must be an absolute IRI.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
        if (q.indexOf("_:") === 0)
          throw new t(
            "Invalid JSON-LD syntax; an @context @type value must be an IRI, not a blank node identifier.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
      }
      O["@type"] = q;
    }
    if ("@container" in P) {
      const q = c(P["@container"]) ? [P["@container"]] : P["@container"] || [], V = ["@list", "@set", "@index", "@language"];
      let G = !0;
      const J = q.includes("@set");
      if (v.processingMode(y, 1.1)) {
        if (V.push("@graph", "@id", "@type"), q.includes("@list")) {
          if (q.length !== 1)
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @list must have no other values",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: d }
            );
        } else if (q.includes("@graph")) {
          if (q.some((M) => M !== "@graph" && M !== "@id" && M !== "@index" && M !== "@set"))
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: d }
            );
        } else
          G &= q.length <= (J ? 2 : 1);
        if (q.includes("@type") && (O["@type"] = O["@type"] || "@id", !["@id", "@vocab"].includes(O["@type"])))
          throw new t(
            "Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
      } else
        G &= !n(P["@container"]), G &= q.length <= 1;
      if (G &= q.every((M) => V.includes(M)), G &= !(J && q.includes("@list")), !G)
        throw new t(
          "Invalid JSON-LD syntax; @context @container value must be one of the following: " + V.join(", "),
          "jsonld.SyntaxError",
          { code: "invalid container mapping", context: d }
        );
      if (O.reverse && !q.every((M) => ["@index", "@set"].includes(M)))
        throw new t(
          "Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: d }
        );
      O["@container"] = q;
    }
    if ("@index" in P) {
      if (!("@container" in P) || !O["@container"].includes("@index"))
        throw new t(
          `Invalid JSON-LD syntax; @index without @index in @container: "${P["@index"]}" on term "${l}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (!c(P["@index"]) || P["@index"].indexOf("@") === 0)
        throw new t(
          `Invalid JSON-LD syntax; @index must expand to an IRI: "${P["@index"]}" on term "${l}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      O["@index"] = P["@index"];
    }
    if ("@context" in P && (O["@context"] = P["@context"]), "@language" in P && !("@type" in P)) {
      let q = P["@language"];
      if (q !== null && !c(q))
        throw new t(
          "Invalid JSON-LD syntax; @context @language value must be a string or null.",
          "jsonld.SyntaxError",
          { code: "invalid language mapping", context: d }
        );
      q !== null && (q = q.toLowerCase()), O["@language"] = q;
    }
    if ("@prefix" in P) {
      if (l.match(/:|\//))
        throw new t(
          "Invalid JSON-LD syntax; @context @prefix used on a compact IRI term",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (v.isKeyword(O["@id"]))
        throw new t(
          "Invalid JSON-LD syntax; keywords may not be used as prefixes",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (typeof P["@prefix"] == "boolean")
        O._prefix = P["@prefix"] === !0;
      else
        throw new t(
          "Invalid JSON-LD syntax; @context value for @prefix must be boolean",
          "jsonld.SyntaxError",
          { code: "invalid @prefix value", context: d }
        );
    }
    if ("@direction" in P) {
      const q = P["@direction"];
      if (q !== null && q !== "ltr" && q !== "rtl")
        throw new t(
          'Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".',
          "jsonld.SyntaxError",
          { code: "invalid base direction", context: d }
        );
      O["@direction"] = q;
    }
    if ("@nest" in P) {
      const q = P["@nest"];
      if (!c(q) || q !== "@nest" && q.indexOf("@") === 0)
        throw new t(
          "Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.",
          "jsonld.SyntaxError",
          { code: "invalid @nest value", context: d }
        );
      O["@nest"] = q;
    }
    // disallow aliasing @context and @preserve
    const D = O["@id"];
    if (D === "@context" || D === "@preserve")
      throw new t(
        "Invalid JSON-LD syntax; @context and @preserve cannot be aliased.",
        "jsonld.SyntaxError",
        { code: "invalid keyword alias", context: d }
      );
    if (T && T.protected && !A && (y.protected[l] = !0, O.protected = !0, !b(T, O)))
      throw new t(
        "Invalid JSON-LD syntax; tried to redefine a protected term.",
        "jsonld.SyntaxError",
        { code: "protected term redefinition", context: d, term: l }
      );
  }, v.expandIri = (y, d, l, h) => S(
    y,
    d,
    l,
    void 0,
    void 0,
    h
  );
  function S(y, d, l, h, I, A) {
    if (d === null || !c(d) || v.isKeyword(d))
      return d;
    if (d.match(g))
      return null;
    if (h && h.hasOwnProperty(d) && I.get(d) !== !0 && v.createTermDefinition({
      activeCtx: y,
      localCtx: h,
      term: d,
      defined: I,
      options: A
    }), l = l || {}, l.vocab) {
      const T = y.mappings.get(d);
      if (T === null)
        return null;
      if (r(T) && "@id" in T)
        return T["@id"];
    }
    const P = d.indexOf(":");
    if (P > 0) {
      const T = d.substr(0, P), j = d.substr(P + 1);
      if (T === "_" || j.indexOf("//") === 0)
        return d;
      h && h.hasOwnProperty(T) && v.createTermDefinition({
        activeCtx: y,
        localCtx: h,
        term: T,
        defined: I,
        options: A
      });
      const O = y.mappings.get(T);
      if (O && O._prefix)
        return O["@id"] + j;
      if (s(d))
        return d;
    }
    if (l.vocab && "@vocab" in y)
      d = y["@vocab"] + d;
    else if (l.base) {
      let T, j;
      "@base" in y ? y["@base"] ? (j = o(A.base, y["@base"]), T = o(j, d)) : (j = y["@base"], T = d) : (j = A.base, T = o(A.base, d)), d = T;
    }
    return d;
  }
  v.getInitialContext = (y) => {
    const d = JSON.stringify({ processingMode: y.processingMode }), l = w.get(d);
    if (l)
      return l;
    const h = {
      processingMode: y.processingMode,
      mappings: /* @__PURE__ */ new Map(),
      inverse: null,
      getInverse: I,
      clone: T,
      revertToPreviousContext: j,
      protected: {}
    };
    return w.size === x && w.clear(), w.set(d, h), h;
    function I() {
      const O = this;
      if (O.inverse)
        return O.inverse;
      const R = O.inverse = {}, E = O.fastCurieMap = {}, D = {}, q = (O["@language"] || "@none").toLowerCase(), V = O["@direction"], G = O.mappings, J = [...G.keys()].sort(f);
      for (const M of J) {
        const k = G.get(M);
        if (k === null)
          continue;
        let z = k["@container"] || "@none";
        if (z = [].concat(z).sort().join(""), k["@id"] === null)
          continue;
        const N = u(k["@id"]);
        for (const _ of N) {
          let $ = R[_];
          const C = v.isKeyword(_);
          if ($)
            !C && !k._termHasColon && D[_].push(M);
          else if (R[_] = $ = {}, !C && !k._termHasColon) {
            D[_] = [M];
            const L = { iri: _, terms: D[_] };
            _[0] in E ? E[_[0]].push(L) : E[_[0]] = [L];
          }
          if ($[z] || ($[z] = {
            "@language": {},
            "@type": {},
            "@any": {}
          }), $ = $[z], P(M, $["@any"], "@none"), k.reverse)
            P(M, $["@type"], "@reverse");
          else if (k["@type"] === "@none")
            P(M, $["@any"], "@none"), P(M, $["@language"], "@none"), P(M, $["@type"], "@none");
          else if ("@type" in k)
            P(M, $["@type"], k["@type"]);
          else if ("@language" in k && "@direction" in k) {
            const L = k["@language"], H = k["@direction"];
            L && H ? P(
              M,
              $["@language"],
              `${L}_${H}`.toLowerCase()
            ) : L ? P(M, $["@language"], L.toLowerCase()) : H ? P(M, $["@language"], `_${H}`) : P(M, $["@language"], "@null");
          } else "@language" in k ? P(
            M,
            $["@language"],
            (k["@language"] || "@null").toLowerCase()
          ) : "@direction" in k ? k["@direction"] ? P(
            M,
            $["@language"],
            `_${k["@direction"]}`
          ) : P(M, $["@language"], "@none") : V ? (P(M, $["@language"], `_${V}`), P(M, $["@language"], "@none"), P(M, $["@type"], "@none")) : (P(M, $["@language"], q), P(M, $["@language"], "@none"), P(M, $["@type"], "@none"));
        }
      }
      for (const M in E)
        A(E, M, 1);
      return R;
    }
    function A(O, R, E) {
      const D = O[R], q = O[R] = {};
      let V, G;
      for (const J of D)
        V = J.iri, E >= V.length ? G = "" : G = V[E], G in q ? q[G].push(J) : q[G] = [J];
      for (const J in q)
        J !== "" && A(q, J, E + 1);
    }
    function P(O, R, E) {
      R.hasOwnProperty(E) || (R[E] = O);
    }
    function T() {
      const O = {};
      return O.mappings = e.clone(this.mappings), O.clone = this.clone, O.inverse = null, O.getInverse = this.getInverse, O.protected = e.clone(this.protected), this.previousContext && (O.previousContext = this.previousContext.clone()), O.revertToPreviousContext = this.revertToPreviousContext, "@base" in this && (O["@base"] = this["@base"]), "@language" in this && (O["@language"] = this["@language"]), "@vocab" in this && (O["@vocab"] = this["@vocab"]), O;
    }
    function j() {
      return this.previousContext ? this.previousContext.clone() : this;
    }
  }, v.getContextValue = (y, d, l) => {
    if (d === null)
      return l === "@context" ? void 0 : null;
    if (y.mappings.has(d)) {
      const h = y.mappings.get(d);
      if (i(l))
        return h;
      if (h.hasOwnProperty(l))
        return h[l];
    }
    if (l === "@language" && l in y || l === "@direction" && l in y)
      return y[l];
    if (l !== "@context")
      return null;
  }, v.processingMode = (y, d) => d.toString() >= "1.1" ? !y.processingMode || y.processingMode >= "json-ld-" + d.toString() : y.processingMode === "json-ld-1.0", v.isKeyword = (y) => {
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
  function b(y, d) {
    if (!(y && typeof y == "object") || !(d && typeof d == "object"))
      return y === d;
    const l = Array.isArray(y);
    if (l !== Array.isArray(d))
      return !1;
    if (l) {
      if (y.length !== d.length)
        return !1;
      for (let A = 0; A < y.length; ++A)
        if (!b(y[A], d[A]))
          return !1;
      return !0;
    }
    const h = Object.keys(y), I = Object.keys(d);
    if (h.length !== I.length)
      return !1;
    for (const A in y) {
      let P = y[A], T = d[A];
      if (A === "@container" && Array.isArray(P) && Array.isArray(T) && (P = P.slice().sort(), T = T.slice().sort()), !b(P, T))
        return !1;
    }
    return !0;
  }
  return Kr;
}
var Qr, gc;
function Vf() {
  if (gc) return Qr;
  gc = 1;
  const e = ze(), {
    isArray: t,
    isObject: n,
    isEmptyObject: r,
    isString: c,
    isUndefined: i
  } = Ce(), {
    isList: s,
    isValue: a,
    isGraph: o,
    isSubject: p
  } = ut(), {
    expandIri: m,
    getContextValue: g,
    isKeyword: u,
    process: f,
    processingMode: w
  } = Tt(), {
    isAbsolute: x
  } = xt(), {
    REGEX_BCP47: v,
    REGEX_KEYWORD: S,
    addValue: b,
    asArray: y,
    getValues: d,
    validateTypeValue: l
  } = De(), {
    handleEvent: h
  } = vn(), I = {};
  Qr = I, I.expand = async ({
    activeCtx: R,
    activeProperty: E = null,
    element: D,
    options: q = {},
    insideList: V = !1,
    insideIndex: G = !1,
    typeScopedContext: J = null
  }) => {
    if (D == null)
      return null;
    if (E === "@default" && (q = Object.assign({}, q, { isFrame: !1 })), !t(D) && !n(D))
      return !V && (E === null || m(
        R,
        E,
        { vocab: !0 },
        q
      ) === "@graph") ? (q.eventHandler && h({
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
        options: q
      }), null) : T({ activeCtx: R, activeProperty: E, value: D, options: q });
    if (t(D)) {
      let L = [];
      const H = g(
        R,
        E,
        "@container"
      ) || [];
      V = V || H.includes("@list");
      for (let Q = 0; Q < D.length; ++Q) {
        let Z = await I.expand({
          activeCtx: R,
          activeProperty: E,
          element: D[Q],
          options: q,
          insideIndex: G,
          typeScopedContext: J
        });
        V && t(Z) && (Z = { "@list": Z }), Z !== null && (t(Z) ? L = L.concat(Z) : L.push(Z));
      }
      return L;
    }
    const M = m(
      R,
      E,
      { vocab: !0 },
      q
    ), k = g(R, E, "@context");
    J = J || (R.previousContext ? R : null);
    let z = Object.keys(D).sort(), N = !G;
    if (N && J && z.length <= 2 && !z.includes("@context"))
      for (const L of z) {
        const H = m(
          J,
          L,
          { vocab: !0 },
          q
        );
        if (H === "@value") {
          N = !1, R = J;
          break;
        }
        if (H === "@id" && z.length === 1) {
          N = !1;
          break;
        }
      }
    N && (R = R.revertToPreviousContext()), i(k) || (R = await f({
      activeCtx: R,
      localCtx: k,
      propagate: !0,
      overrideProtected: !0,
      options: q
    })), "@context" in D && (R = await f(
      { activeCtx: R, localCtx: D["@context"], options: q }
    )), J = R;
    let _ = null;
    for (const L of z)
      if (m(R, L, { vocab: !0 }, q) === "@type") {
        _ = _ || L;
        const Q = D[L], Z = Array.isArray(Q) ? Q.length > 1 ? Q.slice().sort() : Q : [Q];
        for (const U of Z) {
          const F = g(J, U, "@context");
          i(F) || (R = await f({
            activeCtx: R,
            localCtx: F,
            options: q,
            propagate: !1
          }));
        }
      }
    let $ = {};
    await P({
      activeCtx: R,
      activeProperty: E,
      expandedActiveProperty: M,
      element: D,
      expandedParent: $,
      options: q,
      insideList: V,
      typeKey: _,
      typeScopedContext: J
    }), z = Object.keys($);
    let C = z.length;
    if ("@value" in $) {
      if ("@type" in $ && ("@language" in $ || "@direction" in $))
        throw new e(
          'Invalid JSON-LD syntax; an element containing "@value" may not contain both "@type" and either "@language" or "@direction".',
          "jsonld.SyntaxError",
          { code: "invalid value object", element: $ }
        );
      let L = C - 1;
      if ("@type" in $ && (L -= 1), "@index" in $ && (L -= 1), "@language" in $ && (L -= 1), "@direction" in $ && (L -= 1), L !== 0)
        throw new e(
          'Invalid JSON-LD syntax; an element containing "@value" may only have an "@index" property and either "@type" or either or both "@language" or "@direction".',
          "jsonld.SyntaxError",
          { code: "invalid value object", element: $ }
        );
      const H = $["@value"] === null ? [] : y($["@value"]), Q = d($, "@type");
      if (!(w(R, 1.1) && Q.includes("@json") && Q.length === 1)) if (H.length === 0)
        q.eventHandler && h({
          event: {
            type: ["JsonLdEvent"],
            code: "null @value value",
            level: "warning",
            message: "Dropping null @value value.",
            details: {
              value: $
            }
          },
          options: q
        }), $ = null;
      else {
        if (!H.every((Z) => c(Z) || r(Z)) && "@language" in $)
          throw new e(
            "Invalid JSON-LD syntax; only strings may be language-tagged.",
            "jsonld.SyntaxError",
            { code: "invalid language-tagged value", element: $ }
          );
        if (!Q.every((Z) => x(Z) && !(c(Z) && Z.indexOf("_:") === 0) || r(Z)))
          throw new e(
            'Invalid JSON-LD syntax; an element containing "@value" and "@type" must have an absolute IRI for the value of "@type".',
            "jsonld.SyntaxError",
            { code: "invalid typed value", element: $ }
          );
      }
    } else if ("@type" in $ && !t($["@type"]))
      $["@type"] = [$["@type"]];
    else if ("@set" in $ || "@list" in $) {
      if (C > 1 && !(C === 2 && "@index" in $))
        throw new e(
          'Invalid JSON-LD syntax; if an element has the property "@set" or "@list", then it can have at most one other property that is "@index".',
          "jsonld.SyntaxError",
          { code: "invalid set or list object", element: $ }
        );
      "@set" in $ && ($ = $["@set"], z = Object.keys($), C = z.length);
    } else C === 1 && "@language" in $ && (q.eventHandler && h({
      event: {
        type: ["JsonLdEvent"],
        code: "object with only @language",
        level: "warning",
        message: "Dropping object with only @language.",
        details: {
          value: $
        }
      },
      options: q
    }), $ = null);
    return n($) && !q.keepFreeFloatingNodes && !V && (E === null || M === "@graph" || (g(R, E, "@container") || []).includes("@graph")) && ($ = A({ value: $, count: C, options: q })), $;
  };
  function A({
    value: R,
    count: E,
    options: D
  }) {
    if (E === 0 || "@value" in R || "@list" in R || E === 1 && "@id" in R) {
      if (D.eventHandler) {
        let q, V;
        E === 0 ? (q = "empty object", V = "Dropping empty object.") : "@value" in R ? (q = "object with only @value", V = "Dropping object with only @value.") : "@list" in R ? (q = "object with only @list", V = "Dropping object with only @list.") : E === 1 && "@id" in R && (q = "object with only @id", V = "Dropping object with only @id."), h({
          event: {
            type: ["JsonLdEvent"],
            code: q,
            level: "warning",
            message: V,
            details: {
              value: R
            }
          },
          options: D
        });
      }
      return null;
    }
    return R;
  }
  async function P({
    activeCtx: R,
    activeProperty: E,
    expandedActiveProperty: D,
    element: q,
    expandedParent: V,
    options: G = {},
    insideList: J,
    typeKey: M,
    typeScopedContext: k
  }) {
    const z = Object.keys(q).sort(), N = [];
    let _;
    const $ = q[M] && m(
      R,
      t(q[M]) ? q[M][0] : q[M],
      { vocab: !0 },
      {
        ...G,
        typeExpansion: !0
      }
    ) === "@json";
    for (const C of z) {
      let L = q[C], H;
      if (C === "@context")
        continue;
      const Q = m(R, C, { vocab: !0 }, G);
      if (Q === null || !(x(Q) || u(Q))) {
        G.eventHandler && h({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid property",
            level: "warning",
            message: "Dropping property that did not expand into an absolute IRI or keyword.",
            details: {
              property: C,
              expandedProperty: Q
            }
          },
          options: G
        });
        continue;
      }
      if (u(Q)) {
        if (D === "@reverse")
          throw new e(
            "Invalid JSON-LD syntax; a keyword cannot be used as a @reverse property.",
            "jsonld.SyntaxError",
            { code: "invalid reverse property map", value: L }
          );
        if (Q in V && Q !== "@included" && Q !== "@type")
          throw new e(
            "Invalid JSON-LD syntax; colliding keywords detected.",
            "jsonld.SyntaxError",
            { code: "colliding keywords", keyword: Q }
          );
      }
      if (Q === "@id") {
        if (!c(L)) {
          if (!G.isFrame)
            throw new e(
              'Invalid JSON-LD syntax; "@id" value must a string.',
              "jsonld.SyntaxError",
              { code: "invalid @id value", value: L }
            );
          if (n(L)) {
            if (!r(L))
              throw new e(
                'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
                "jsonld.SyntaxError",
                { code: "invalid @id value", value: L }
              );
          } else if (t(L)) {
            if (!L.every((B) => c(B)))
              throw new e(
                'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
                "jsonld.SyntaxError",
                { code: "invalid @id value", value: L }
              );
          } else
            throw new e(
              'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
              "jsonld.SyntaxError",
              { code: "invalid @id value", value: L }
            );
        }
        b(
          V,
          "@id",
          y(L).map((B) => {
            if (c(B)) {
              const K = m(R, B, { base: !0 }, G);
              return G.eventHandler && (K === null ? h(B === null ? {
                event: {
                  type: ["JsonLdEvent"],
                  code: "null @id value",
                  level: "warning",
                  message: "Null @id found.",
                  details: {
                    id: B
                  }
                },
                options: G
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
                options: G
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
                options: G
              })), K;
            }
            return B;
          }),
          { propertyIsArray: G.isFrame }
        );
        continue;
      }
      if (Q === "@type") {
        n(L) && (L = Object.fromEntries(Object.entries(L).map(([B, K]) => [
          m(k, B, { vocab: !0 }),
          y(K).map(
            (W) => m(
              k,
              W,
              { base: !0, vocab: !0 },
              { ...G, typeExpansion: !0 }
            )
          )
        ]))), l(L, G.isFrame), b(
          V,
          "@type",
          y(L).map((B) => {
            if (c(B)) {
              const K = m(
                k,
                B,
                { base: !0, vocab: !0 },
                { ...G, typeExpansion: !0 }
              );
              return K !== "@json" && !x(K) && G.eventHandler && h({
                event: {
                  type: ["JsonLdEvent"],
                  code: "relative @type reference",
                  level: "warning",
                  message: "Relative @type reference found.",
                  details: {
                    type: B
                  }
                },
                options: G
              }), K;
            }
            return B;
          }),
          { propertyIsArray: !!G.isFrame }
        );
        continue;
      }
      if (Q === "@included" && w(R, 1.1)) {
        const B = y(await I.expand({
          activeCtx: R,
          activeProperty: E,
          element: L,
          options: G
        }));
        if (!B.every((K) => p(K)))
          throw new e(
            "Invalid JSON-LD syntax; values of @included must expand to node objects.",
            "jsonld.SyntaxError",
            { code: "invalid @included value", value: L }
          );
        b(
          V,
          "@included",
          B,
          { propertyIsArray: !0 }
        );
        continue;
      }
      if (Q === "@graph" && !(n(L) || t(L)))
        throw new e(
          'Invalid JSON-LD syntax; "@graph" value must not be an object or an array.',
          "jsonld.SyntaxError",
          { code: "invalid @graph value", value: L }
        );
      if (Q === "@value") {
        _ = L, $ && w(R, 1.1) ? V["@value"] = L : b(
          V,
          "@value",
          L,
          { propertyIsArray: G.isFrame }
        );
        continue;
      }
      if (Q === "@language") {
        if (L === null)
          continue;
        if (!c(L) && !G.isFrame)
          throw new e(
            'Invalid JSON-LD syntax; "@language" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid language-tagged string", value: L }
          );
        L = y(L).map((B) => c(B) ? B.toLowerCase() : B);
        for (const B of L)
          c(B) && !B.match(v) && G.eventHandler && h({
            event: {
              type: ["JsonLdEvent"],
              code: "invalid @language value",
              level: "warning",
              message: "@language value must be valid BCP47.",
              details: {
                language: B
              }
            },
            options: G
          });
        b(
          V,
          "@language",
          L,
          { propertyIsArray: G.isFrame }
        );
        continue;
      }
      if (Q === "@direction") {
        if (!c(L) && !G.isFrame)
          throw new e(
            'Invalid JSON-LD syntax; "@direction" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid base direction", value: L }
          );
        L = y(L);
        for (const B of L)
          if (c(B) && B !== "ltr" && B !== "rtl")
            throw new e(
              'Invalid JSON-LD syntax; "@direction" must be "ltr" or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", value: L }
            );
        b(
          V,
          "@direction",
          L,
          { propertyIsArray: G.isFrame }
        );
        continue;
      }
      if (Q === "@index") {
        if (!c(L))
          throw new e(
            'Invalid JSON-LD syntax; "@index" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid @index value", value: L }
          );
        b(V, "@index", L);
        continue;
      }
      if (Q === "@reverse") {
        if (!n(L))
          throw new e(
            'Invalid JSON-LD syntax; "@reverse" value must be an object.',
            "jsonld.SyntaxError",
            { code: "invalid @reverse value", value: L }
          );
        if (H = await I.expand({
          activeCtx: R,
          activeProperty: "@reverse",
          element: L,
          options: G
        }), "@reverse" in H)
          for (const K in H["@reverse"])
            b(
              V,
              K,
              H["@reverse"][K],
              { propertyIsArray: !0 }
            );
        let B = V["@reverse"] || null;
        for (const K in H) {
          if (K === "@reverse")
            continue;
          B === null && (B = V["@reverse"] = {}), b(B, K, [], { propertyIsArray: !0 });
          const W = H[K];
          for (let Y = 0; Y < W.length; ++Y) {
            const re = W[Y];
            if (a(re) || s(re))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: H }
              );
            b(B, K, re, { propertyIsArray: !0 });
          }
        }
        continue;
      }
      if (Q === "@nest") {
        N.push(C);
        continue;
      }
      let Z = R;
      const U = g(R, C, "@context");
      i(U) || (Z = await f({
        activeCtx: R,
        localCtx: U,
        propagate: !0,
        overrideProtected: !0,
        options: G
      }));
      const F = g(R, C, "@container") || [];
      if (F.includes("@language") && n(L)) {
        const B = g(Z, C, "@direction");
        H = j(Z, L, B, G);
      } else if (F.includes("@index") && n(L)) {
        const B = F.includes("@graph"), K = g(Z, C, "@index") || "@index", W = K !== "@index" && m(R, K, { vocab: !0 }, G);
        H = await O({
          activeCtx: Z,
          options: G,
          activeProperty: C,
          value: L,
          asGraph: B,
          indexKey: K,
          propertyIndex: W
        });
      } else if (F.includes("@id") && n(L)) {
        const B = F.includes("@graph");
        H = await O({
          activeCtx: Z,
          options: G,
          activeProperty: C,
          value: L,
          asGraph: B,
          indexKey: "@id"
        });
      } else if (F.includes("@type") && n(L))
        H = await O({
          // since container is `@type`, revert type scoped context when expanding
          activeCtx: Z.revertToPreviousContext(),
          options: G,
          activeProperty: C,
          value: L,
          asGraph: !1,
          indexKey: "@type"
        });
      else {
        const B = Q === "@list";
        if (B || Q === "@set") {
          let K = E;
          B && D === "@graph" && (K = null), H = await I.expand({
            activeCtx: Z,
            activeProperty: K,
            element: L,
            options: G,
            insideList: B
          });
        } else g(R, C, "@type") === "@json" ? H = {
          "@type": "@json",
          "@value": L
        } : H = await I.expand({
          activeCtx: Z,
          activeProperty: C,
          element: L,
          options: G,
          insideList: !1
        });
      }
      if (!(H === null && Q !== "@value")) {
        if (Q !== "@list" && !s(H) && F.includes("@list") && (H = { "@list": y(H) }), F.includes("@graph") && !F.some((B) => B === "@id" || B === "@index")) {
          if (H = y(H), G.isFrame || (H = H.filter((B) => {
            const K = Object.keys(B).length;
            return A({ value: B, count: K, options: G }) !== null;
          })), H.length === 0)
            continue;
          H = H.map((B) => ({ "@graph": y(B) }));
        }
        if (Z.mappings.has(C) && Z.mappings.get(C).reverse) {
          const B = V["@reverse"] = V["@reverse"] || {};
          H = y(H);
          for (let K = 0; K < H.length; ++K) {
            const W = H[K];
            if (a(W) || s(W))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: H }
              );
            b(B, Q, W, { propertyIsArray: !0 });
          }
          continue;
        }
        b(V, Q, H, {
          propertyIsArray: !0
        });
      }
    }
    if ("@value" in V && !(V["@type"] === "@json" && w(R, 1.1))) {
      if ((n(_) || t(_)) && !G.isFrame)
        throw new e(
          'Invalid JSON-LD syntax; "@value" value must not be an object or an array.',
          "jsonld.SyntaxError",
          { code: "invalid value object value", value: _ }
        );
    }
    for (const C of N) {
      const L = t(q[C]) ? q[C] : [q[C]];
      for (const H of L) {
        if (!n(H) || Object.keys(H).some((Q) => m(R, Q, { vocab: !0 }, G) === "@value"))
          throw new e(
            "Invalid JSON-LD syntax; nested value must be a node object.",
            "jsonld.SyntaxError",
            { code: "invalid @nest value", value: H }
          );
        await P({
          activeCtx: R,
          activeProperty: E,
          expandedActiveProperty: D,
          element: H,
          expandedParent: V,
          options: G,
          insideList: J,
          typeScopedContext: k,
          typeKey: M
        });
      }
    }
  }
  function T({ activeCtx: R, activeProperty: E, value: D, options: q }) {
    if (D == null)
      return null;
    const V = m(
      R,
      E,
      { vocab: !0 },
      q
    );
    if (V === "@id")
      return m(R, D, { base: !0 }, q);
    if (V === "@type")
      return m(
        R,
        D,
        { vocab: !0, base: !0 },
        { ...q, typeExpansion: !0 }
      );
    const G = g(R, E, "@type");
    if ((G === "@id" || V === "@graph") && c(D)) {
      const M = m(R, D, { base: !0 }, q);
      return M === null && D.match(S) && q.eventHandler && h({
        event: {
          type: ["JsonLdEvent"],
          code: "reserved @id value",
          level: "warning",
          message: "Reserved @id found.",
          details: {
            id: E
          }
        },
        options: q
      }), { "@id": M };
    }
    if (G === "@vocab" && c(D))
      return {
        "@id": m(R, D, { vocab: !0, base: !0 }, q)
      };
    if (u(V))
      return D;
    const J = {};
    if (G && !["@id", "@vocab", "@none"].includes(G))
      J["@type"] = G;
    else if (c(D)) {
      const M = g(R, E, "@language");
      M !== null && (J["@language"] = M);
      const k = g(R, E, "@direction");
      k !== null && (J["@direction"] = k);
    }
    return ["boolean", "number", "string"].includes(typeof D) || (D = D.toString()), J["@value"] = D, J;
  }
  function j(R, E, D, q) {
    const V = [], G = Object.keys(E).sort();
    for (const J of G) {
      const M = m(R, J, { vocab: !0 }, q);
      let k = E[J];
      t(k) || (k = [k]);
      for (const z of k) {
        if (z === null)
          continue;
        if (!c(z))
          throw new e(
            "Invalid JSON-LD syntax; language map values must be strings.",
            "jsonld.SyntaxError",
            { code: "invalid language map value", languageMap: E }
          );
        const N = { "@value": z };
        M !== "@none" && (J.match(v) || q.eventHandler && h({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: J
            }
          },
          options: q
        }), N["@language"] = J.toLowerCase()), D && (N["@direction"] = D), V.push(N);
      }
    }
    return V;
  }
  async function O({
    activeCtx: R,
    options: E,
    activeProperty: D,
    value: q,
    asGraph: V,
    indexKey: G,
    propertyIndex: J
  }) {
    const M = [], k = Object.keys(q).sort(), z = G === "@type";
    for (let N of k) {
      if (z) {
        const C = g(R, N, "@context");
        i(C) || (R = await f({
          activeCtx: R,
          localCtx: C,
          propagate: !1,
          options: E
        }));
      }
      let _ = q[N];
      t(_) || (_ = [_]), _ = await I.expand({
        activeCtx: R,
        activeProperty: D,
        element: _,
        options: E,
        insideList: !1,
        insideIndex: !0
      });
      let $;
      J ? N === "@none" ? $ = "@none" : $ = T(
        { activeCtx: R, activeProperty: G, value: N, options: E }
      ) : $ = m(R, N, { vocab: !0 }, E), G === "@id" ? N = m(R, N, { base: !0 }, E) : z && (N = $);
      for (let C of _) {
        if (V && !o(C) && (C = { "@graph": [C] }), G === "@type")
          $ === "@none" || (C["@type"] ? C["@type"] = [N].concat(C["@type"]) : C["@type"] = [N]);
        else {
          if (a(C) && !["@language", "@type", "@index"].includes(G))
            throw new e(
              `Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${G}".`,
              "jsonld.SyntaxError",
              { code: "invalid value object", value: C }
            );
          J ? $ !== "@none" && b(C, J, $, {
            propertyIsArray: !0,
            prependValue: !0
          }) : $ !== "@none" && !(G in C) && (C[G] = N);
        }
        M.push(C);
      }
    }
    return M;
  }
  return Qr;
}
var Wr, vc;
function Hi() {
  if (vc) return Wr;
  vc = 1;
  const { isKeyword: e } = Tt(), t = ut(), n = Ce(), r = De(), c = ze(), i = {};
  return Wr = i, i.createMergedNodeMap = (s, a) => {
    a = a || {};
    const o = a.issuer || new r.IdentifierIssuer("_:b"), p = { "@default": {} };
    return i.createNodeMap(s, p, "@default", o), i.mergeNodeMaps(p);
  }, i.createNodeMap = (s, a, o, p, m, g) => {
    if (n.isArray(s)) {
      for (const x of s)
        i.createNodeMap(x, a, o, p, void 0, g);
      return;
    }
    if (!n.isObject(s)) {
      g && g.push(s);
      return;
    }
    if (t.isValue(s)) {
      if ("@type" in s) {
        let x = s["@type"];
        x.indexOf("_:") === 0 && (s["@type"] = x = p.getId(x));
      }
      g && g.push(s);
      return;
    } else if (g && t.isList(s)) {
      const x = [];
      i.createNodeMap(s["@list"], a, o, p, m, x), g.push({ "@list": x });
      return;
    }
    if ("@type" in s) {
      const x = s["@type"];
      for (const v of x)
        v.indexOf("_:") === 0 && p.getId(v);
    }
    n.isUndefined(m) && (m = t.isBlankNode(s) ? p.getId(s["@id"]) : s["@id"]), g && g.push({ "@id": m });
    const u = a[o], f = u[m] = u[m] || {};
    f["@id"] = m;
    const w = Object.keys(s).sort();
    for (let x of w) {
      if (x === "@id")
        continue;
      if (x === "@reverse") {
        const S = { "@id": m }, b = s["@reverse"];
        for (const y in b) {
          const d = b[y];
          for (const l of d) {
            let h = l["@id"];
            t.isBlankNode(l) && (h = p.getId(h)), i.createNodeMap(l, a, o, p, h), r.addValue(
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
        m in a || (a[m] = {}), i.createNodeMap(s[x], a, m, p);
        continue;
      }
      if (x === "@included") {
        i.createNodeMap(s[x], a, o, p);
        continue;
      }
      if (x !== "@type" && e(x)) {
        if (x === "@index" && x in f && (s[x] !== f[x] || s[x]["@id"] !== f[x]["@id"]))
          throw new c(
            "Invalid JSON-LD syntax; conflicting @index property detected.",
            "jsonld.SyntaxError",
            { code: "conflicting indexes", subject: f }
          );
        f[x] = s[x];
        continue;
      }
      const v = s[x];
      if (x.indexOf("_:") === 0 && (x = p.getId(x)), v.length === 0) {
        r.addValue(f, x, [], { propertyIsArray: !0 });
        continue;
      }
      for (let S of v)
        if (x === "@type" && (S = S.indexOf("_:") === 0 ? p.getId(S) : S), t.isSubject(S) || t.isSubjectReference(S)) {
          if ("@id" in S && !S["@id"])
            continue;
          const b = t.isBlankNode(S) ? p.getId(S["@id"]) : S["@id"];
          r.addValue(
            f,
            x,
            { "@id": b },
            { propertyIsArray: !0, allowDuplicate: !1 }
          ), i.createNodeMap(S, a, o, p, b);
        } else if (t.isValue(S))
          r.addValue(
            f,
            x,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        else if (t.isList(S)) {
          const b = [];
          i.createNodeMap(S["@list"], a, o, p, m, b), S = { "@list": b }, r.addValue(
            f,
            x,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        } else
          i.createNodeMap(S, a, o, p, m), r.addValue(
            f,
            x,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
    }
  }, i.mergeNodeMapGraphs = (s) => {
    const a = {};
    for (const o of Object.keys(s).sort())
      for (const p of Object.keys(s[o]).sort()) {
        const m = s[o][p];
        p in a || (a[p] = { "@id": p });
        const g = a[p];
        for (const u of Object.keys(m).sort())
          if (e(u) && u !== "@type")
            g[u] = r.clone(m[u]);
          else
            for (const f of m[u])
              r.addValue(
                g,
                u,
                r.clone(f),
                { propertyIsArray: !0, allowDuplicate: !1 }
              );
      }
    return a;
  }, i.mergeNodeMaps = (s) => {
    const a = s["@default"], o = Object.keys(s).sort();
    for (const p of o) {
      if (p === "@default")
        continue;
      const m = s[p];
      let g = a[p];
      g ? "@graph" in g || (g["@graph"] = []) : a[p] = g = {
        "@id": p,
        "@graph": []
      };
      const u = g["@graph"];
      for (const f of Object.keys(m).sort()) {
        const w = m[f];
        t.isSubjectReference(w) || u.push(w);
      }
    }
    return a;
  }, Wr;
}
var Xr, bc;
function Ff() {
  if (bc) return Xr;
  bc = 1;
  const {
    isSubjectReference: e
  } = ut(), {
    createMergedNodeMap: t
  } = Hi(), n = {};
  return Xr = n, n.flatten = (r) => {
    const c = t(r), i = [], s = Object.keys(c).sort();
    for (let a = 0; a < s.length; ++a) {
      const o = c[s[a]];
      e(o) || i.push(o);
    }
    return i;
  }, Xr;
}
var Yr, wc;
function Gf() {
  if (wc) return Yr;
  wc = 1;
  const e = ze(), t = ut(), n = Ce(), {
    REGEX_BCP47: r,
    addValue: c
  } = De(), {
    handleEvent: i
  } = vn(), {
    // RDF,
    RDF_LIST: s,
    RDF_FIRST: a,
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
  } = Ls(), v = {};
  Yr = v, v.fromRDF = async (b, y) => {
    const {
      useRdfType: d = !1,
      useNativeTypes: l = !1,
      rdfDirection: h = null
    } = y, I = {}, A = { "@default": I }, P = {};
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
    for (const O of b) {
      const R = O.graph.termType === "DefaultGraph" ? "@default" : O.graph.value;
      R in A || (A[R] = {}), R !== "@default" && !(R in I) && (I[R] = { "@id": R });
      const E = A[R], D = O.subject.value, q = O.predicate.value, V = O.object;
      D in E || (E[D] = { "@id": D });
      const G = E[D], J = V.termType.endsWith("Node");
      if (J && !(V.value in E) && (E[V.value] = { "@id": V.value }), q === m && !d && J) {
        c(G, "@type", V.value, { propertyIsArray: !0 });
        continue;
      }
      const M = S(V, l, h, y);
      if (c(G, q, M, { propertyIsArray: !0 }), J)
        if (V.value === p) {
          const k = E[V.value];
          "usages" in k || (k.usages = []), k.usages.push({
            node: G,
            property: q,
            value: M
          });
        } else V.value in P ? P[V.value] = !1 : P[V.value] = {
          node: G,
          property: q,
          value: M
        };
    }
    for (const O in A) {
      const R = A[O];
      if (!(p in R))
        continue;
      const E = R[p];
      if (E.usages) {
        for (let D of E.usages) {
          let q = D.node, V = D.property, G = D.value;
          const J = [], M = [];
          let k = Object.keys(q).length;
          for (; V === o && n.isObject(P[q["@id"]]) && n.isArray(q[a]) && q[a].length === 1 && n.isArray(q[o]) && q[o].length === 1 && (k === 3 || k === 4 && n.isArray(q["@type"]) && q["@type"].length === 1 && q["@type"][0] === s) && (J.push(q[a][0]), M.push(q["@id"]), D = P[q["@id"]], q = D.node, V = D.property, G = D.value, k = Object.keys(q).length, !!t.isBlankNode(q)); )
            ;
          delete G["@id"], G["@list"] = J.reverse();
          for (const z of M)
            delete R[z];
        }
        delete E.usages;
      }
    }
    const T = [], j = Object.keys(I).sort();
    for (const O of j) {
      const R = I[O];
      if (O in A) {
        const E = R["@graph"] = [], D = A[O], q = Object.keys(D).sort();
        for (const V of q) {
          const G = D[V];
          t.isSubjectReference(G) || E.push(G);
        }
      }
      t.isSubjectReference(R) || T.push(R);
    }
    return T;
  };
  function S(b, y, d, l) {
    if (b.termType.endsWith("Node"))
      return { "@id": b.value };
    const h = { "@value": b.value };
    if (b.language)
      b.language.match(r) || l.eventHandler && i({
        event: {
          type: ["JsonLdEvent"],
          code: "invalid @language value",
          level: "warning",
          message: "@language value must be valid BCP47.",
          details: {
            language: b.language
          }
        },
        options: l
      }), h["@language"] = b.language;
    else {
      let I = b.datatype.value;
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
        const [, A, P] = I.split(/[#_]/);
        A.length > 0 && (h["@language"] = A, A.match(r) || l.eventHandler && i({
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
        })), h["@direction"] = P;
      } else I !== x && (h["@type"] = I);
    }
    return h;
  }
  return Yr;
}
var es, xc;
function Bf() {
  return xc || (xc = 1, es = function e(t) {
    return t === null || typeof t != "object" || t.toJSON != null ? JSON.stringify(t) : Array.isArray(t) ? "[" + t.reduce((n, r, c) => {
      const i = c === 0 ? "" : ",", s = r === void 0 || typeof r == "symbol" ? null : r;
      return n + i + e(s);
    }, "") + "]" : "{" + Object.keys(t).sort().reduce((n, r, c) => {
      if (t[r] === void 0 || typeof t[r] == "symbol")
        return n;
      const i = n.length === 0 ? "" : ",";
      return n + i + e(r) + ":" + e(t[r]);
    }, "") + "}";
  }), es;
}
var ts, Sc;
function Jf() {
  if (Sc) return ts;
  Sc = 1;
  const { createNodeMap: e } = Hi(), { isKeyword: t } = Tt(), n = ut(), r = Bf(), c = ze(), i = Ce(), s = De(), {
    handleEvent: a
  } = vn(), {
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
    XSD_INTEGER: v,
    XSD_STRING: S
  } = Ls(), {
    isAbsolute: b
  } = xt(), y = {};
  ts = y, y.toRDF = (I, A) => {
    const P = new s.IdentifierIssuer("_:b"), T = { "@default": {} };
    e(I, T, "@default", P);
    const j = [], O = Object.keys(T).sort();
    for (const R of O) {
      let E;
      if (R === "@default")
        E = { termType: "DefaultGraph", value: "" };
      else if (b(R))
        R.startsWith("_:") ? E = { termType: "BlankNode" } : E = { termType: "NamedNode" }, E.value = R;
      else {
        A.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "relative graph reference",
            level: "warning",
            message: "Relative graph reference found.",
            details: {
              graph: R
            }
          },
          options: A
        });
        continue;
      }
      d(j, T[R], E, P, A);
    }
    return j;
  };
  function d(I, A, P, T, j) {
    const O = Object.keys(A).sort();
    for (const R of O) {
      const E = A[R], D = Object.keys(E).sort();
      for (let q of D) {
        const V = E[q];
        if (q === "@type")
          q = g;
        else if (t(q))
          continue;
        for (const G of V) {
          const J = {
            termType: R.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: R
          };
          if (!b(R)) {
            j.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "relative subject reference",
                level: "warning",
                message: "Relative subject reference found.",
                details: {
                  subject: R
                }
              },
              options: j
            });
            continue;
          }
          const M = {
            termType: q.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: q
          };
          if (!b(q)) {
            j.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "relative predicate reference",
                level: "warning",
                message: "Relative predicate reference found.",
                details: {
                  predicate: q
                }
              },
              options: j
            });
            continue;
          }
          if (M.termType === "BlankNode" && !j.produceGeneralizedRdf) {
            j.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "blank node predicate",
                level: "warning",
                message: "Dropping blank node predicate.",
                details: {
                  // FIXME: add better issuer API to get reverse mapping
                  property: T.getOldIds().find((z) => T.getId(z) === q)
                }
              },
              options: j
            });
            continue;
          }
          const k = h(
            G,
            T,
            I,
            P,
            j.rdfDirection,
            j
          );
          k && I.push({
            subject: J,
            predicate: M,
            object: k,
            graph: P
          });
        }
      }
    }
  }
  function l(I, A, P, T, j, O) {
    const R = { termType: "NamedNode", value: o }, E = { termType: "NamedNode", value: p }, D = { termType: "NamedNode", value: m }, q = I.pop(), V = q ? { termType: "BlankNode", value: A.getId() } : D;
    let G = V;
    for (const J of I) {
      const M = h(
        J,
        A,
        P,
        T,
        j,
        O
      ), k = { termType: "BlankNode", value: A.getId() };
      P.push({
        subject: G,
        predicate: R,
        object: M,
        graph: T
      }), P.push({
        subject: G,
        predicate: E,
        object: k,
        graph: T
      }), G = k;
    }
    if (q) {
      const J = h(
        q,
        A,
        P,
        T,
        j,
        O
      );
      P.push({
        subject: G,
        predicate: R,
        object: J,
        graph: T
      }), P.push({
        subject: G,
        predicate: E,
        object: D,
        graph: T
      });
    }
    return V;
  }
  function h(I, A, P, T, j, O) {
    const R = {};
    if (n.isValue(I)) {
      R.termType = "Literal", R.value = void 0, R.datatype = {
        termType: "NamedNode"
      };
      let E = I["@value"];
      const D = I["@type"] || null;
      if (D === "@json")
        R.value = r(E), R.datatype.value = u;
      else if (i.isBoolean(E))
        R.value = E.toString(), R.datatype.value = D || w;
      else if (i.isDouble(E) || D === x)
        i.isDouble(E) || (E = parseFloat(E)), R.value = E.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), R.datatype.value = D || x;
      else if (i.isNumber(E))
        R.value = E.toFixed(0), R.datatype.value = D || v;
      else if ("@direction" in I && j === "i18n-datatype") {
        const q = (I["@language"] || "").toLowerCase(), V = I["@direction"], G = `https://www.w3.org/ns/i18n#${q}_${V}`;
        R.datatype.value = G, R.value = E;
      } else {
        if ("@direction" in I && j === "compound-literal")
          throw new c(
            "Unsupported rdfDirection value.",
            "jsonld.InvalidRdfDirection",
            { value: j }
          );
        if ("@direction" in I && j)
          throw new c(
            "Unknown rdfDirection value.",
            "jsonld.InvalidRdfDirection",
            { value: j }
          );
        "@language" in I ? ("@direction" in I && !j && O.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: R.value
            }
          },
          options: O
        }), R.value = E, R.datatype.value = D || f, R.language = I["@language"]) : ("@direction" in I && !j && O.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: R.value
            }
          },
          options: O
        }), R.value = E, R.datatype.value = D || S);
      }
    } else if (n.isList(I)) {
      const E = l(
        I["@list"],
        A,
        P,
        T,
        j,
        O
      );
      R.termType = E.termType, R.value = E.value;
    } else {
      const E = i.isObject(I) ? I["@id"] : I;
      R.termType = E.startsWith("_:") ? "BlankNode" : "NamedNode", R.value = E;
    }
    return R.termType === "NamedNode" && !b(R.value) ? (O.eventHandler && a({
      event: {
        type: ["JsonLdEvent"],
        code: "relative object reference",
        level: "warning",
        message: "Relative object reference found.",
        details: {
          object: R.value
        }
      },
      options: O
    }), null) : R;
  }
  return ts;
}
var ns, Ic;
function Hf() {
  if (Ic) return ns;
  Ic = 1;
  const { isKeyword: e } = Tt(), t = ut(), n = Ce(), r = De(), c = xt(), i = ze(), {
    createNodeMap: s,
    mergeNodeMapGraphs: a
  } = Hi(), o = {};
  ns = o, o.frameMergedOrDefault = (d, l, h) => {
    const I = {
      options: h,
      embedded: !1,
      graph: "@default",
      graphMap: { "@default": {} },
      subjectStack: [],
      link: {},
      bnodeMap: {}
    }, A = new r.IdentifierIssuer("_:b");
    s(d, I.graphMap, "@default", A), h.merged && (I.graphMap["@merged"] = a(I.graphMap), I.graph = "@merged"), I.subjects = I.graphMap[I.graph];
    const P = [];
    o.frame(I, Object.keys(I.subjects).sort(), l, P), h.pruneBlankNodeIdentifiers && (h.bnodesToClear = Object.keys(I.bnodeMap).filter((T) => I.bnodeMap[T].length === 1));
    // remove @preserve from results
    return h.link = {}, v(P, h);
  }, o.frame = (d, l, h, I, A = null) => {
    u(h), h = h[0];
    const P = d.options, T = {
      embed: g(h, P, "embed"),
      explicit: g(h, P, "explicit"),
      requireAll: g(h, P, "requireAll")
    };
    d.link.hasOwnProperty(d.graph) || (d.link[d.graph] = {});
    const j = d.link[d.graph], O = f(d, l, h, T), R = Object.keys(O).sort();
    for (const E of R) {
      const D = O[E];
      if (A === null ? d.uniqueEmbeds = { [d.graph]: {} } : d.uniqueEmbeds[d.graph] = d.uniqueEmbeds[d.graph] || {}, T.embed === "@link" && E in j) {
        S(I, A, j[E]);
        continue;
      }
      const q = { "@id": E };
      if (E.indexOf("_:") === 0 && r.addValue(d.bnodeMap, E, q, { propertyIsArray: !0 }), j[E] = q, (T.embed === "@first" || T.embed === "@last") && d.is11)
        throw new i(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: h }
        );
      if (!(!d.embedded && d.uniqueEmbeds[d.graph].hasOwnProperty(E))) {
        if (d.embedded && (T.embed === "@never" || m(D, d.graph, d.subjectStack))) {
          S(I, A, q);
          continue;
        }
        if (d.embedded && (T.embed == "@first" || T.embed == "@once") && d.uniqueEmbeds[d.graph].hasOwnProperty(E)) {
          S(I, A, q);
          continue;
        }
        if (T.embed === "@last" && E in d.uniqueEmbeds[d.graph] && x(d, E), d.uniqueEmbeds[d.graph][E] = { parent: I, property: A }, d.subjectStack.push({ subject: D, graph: d.graph }), E in d.graphMap) {
          let V = !1, G = null;
          "@graph" in h ? (G = h["@graph"][0], V = !(E === "@merged" || E === "@default"), n.isObject(G) || (G = {})) : (V = d.graph !== "@merged", G = {}), V && o.frame(
            { ...d, graph: E, embedded: !1 },
            Object.keys(d.graphMap[E]).sort(),
            [G],
            q,
            "@graph"
          );
        }
        "@included" in h && o.frame(
          { ...d, embedded: !1 },
          l,
          h["@included"],
          q,
          "@included"
        );
        for (const V of Object.keys(D).sort()) {
          if (e(V)) {
            if (q[V] = r.clone(D[V]), V === "@type")
              for (const G of D["@type"])
                G.indexOf("_:") === 0 && r.addValue(
                  d.bnodeMap,
                  G,
                  q,
                  { propertyIsArray: !0 }
                );
            continue;
          }
          if (!(T.explicit && !(V in h)))
            for (const G of D[V]) {
              const J = V in h ? h[V] : p(T);
              if (t.isList(G)) {
                const M = h[V] && h[V][0] && h[V][0]["@list"] ? h[V][0]["@list"] : p(T), k = { "@list": [] };
                S(q, V, k);
                const z = G["@list"];
                for (const N of z)
                  t.isSubjectReference(N) ? o.frame(
                    { ...d, embedded: !0 },
                    [N["@id"]],
                    M,
                    k,
                    "@list"
                  ) : S(k, "@list", r.clone(N));
              } else t.isSubjectReference(G) ? o.frame(
                { ...d, embedded: !0 },
                [G["@id"]],
                J,
                q,
                V
              ) : y(J[0], G) && S(q, V, r.clone(G));
            }
        }
        for (const V of Object.keys(h).sort()) {
          if (V === "@type") {
            if (!n.isObject(h[V][0]) || !("@default" in h[V][0]))
              continue;
          } else if (e(V))
            continue;
          const G = h[V][0] || {};
          if (!g(G, P, "omitDefault") && !(V in q)) {
            let M = "@null";
            "@default" in G && (M = r.clone(G["@default"])), n.isArray(M) || (M = [M]), q[V] = [{ "@preserve": M }];
          }
        }
        for (const V of Object.keys(h["@reverse"] || {}).sort()) {
          const G = h["@reverse"][V];
          for (const J of Object.keys(d.subjects))
            r.getValues(d.subjects[J], V).some((k) => k["@id"] === E) && (q["@reverse"] = q["@reverse"] || {}, r.addValue(
              q["@reverse"],
              V,
              [],
              { propertyIsArray: !0 }
            ), o.frame(
              { ...d, embedded: !0 },
              [J],
              G,
              q["@reverse"][V],
              A
            ));
        }
        S(I, A, q), d.subjectStack.pop();
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
        throw new i(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: d }
        );
    }
    return A;
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
  function f(d, l, h, I) {
    const A = {};
    for (const P of l) {
      const T = d.graphMap[d.graph][P];
      w(d, T, h, I) && (A[P] = T);
    }
    return A;
  }
  function w(d, l, h, I) {
    let A = !0, P = !1;
    for (const T in h) {
      let j = !1;
      const O = r.getValues(l, T), R = r.getValues(h, T).length === 0;
      if (T === "@id") {
        if (n.isEmptyObject(h["@id"][0] || {}) ? j = !0 : h["@id"].length >= 0 && (j = h["@id"].includes(O[0])), !I.requireAll)
          return j;
      } else if (T === "@type") {
        if (A = !1, R) {
          if (O.length > 0)
            return !1;
          j = !0;
        } else if (h["@type"].length === 1 && n.isEmptyObject(h["@type"][0]))
          j = O.length > 0;
        else
          for (const E of h["@type"])
            n.isObject(E) && "@default" in E ? j = !0 : j = j || O.some((D) => D === E);
        if (!I.requireAll)
          return j;
      } else {
        if (e(T))
          continue;
        {
          const E = r.getValues(h, T)[0];
          let D = !1;
          if (E && (u([E]), D = "@default" in E), A = !1, O.length === 0 && D)
            continue;
          if (O.length > 0 && R)
            return !1;
          if (E === void 0) {
            if (O.length > 0)
              return !1;
            j = !0;
          } else if (t.isList(E)) {
            const q = E["@list"][0];
            if (t.isList(O[0])) {
              const V = O[0]["@list"];
              t.isValue(q) ? j = V.some((G) => y(q, G)) : (t.isSubject(q) || t.isSubjectReference(q)) && (j = V.some((G) => b(
                d,
                q,
                G,
                I
              )));
            }
          } else t.isValue(E) ? j = O.some((q) => y(E, q)) : t.isSubjectReference(E) ? j = O.some((q) => b(d, E, q, I)) : n.isObject(E) ? j = O.length > 0 : j = !1;
        }
      }
      if (!j && I.requireAll)
        return !1;
      P = P || j;
    }
    return A || P;
  }
  function x(d, l) {
    const h = d.uniqueEmbeds[d.graph], I = h[l], A = I.parent, P = I.property, T = { "@id": l };
    if (n.isArray(A)) {
      for (let O = 0; O < A.length; ++O)
        if (r.compareValues(A[O], T)) {
          A[O] = T;
          break;
        }
    } else {
      const O = n.isArray(A[P]);
      r.removeValue(A, P, T, { propertyIsArray: O }), r.addValue(A, P, T, { propertyIsArray: O });
    }
    const j = (O) => {
      const R = Object.keys(h);
      for (const E of R)
        E in h && n.isObject(h[E].parent) && h[E].parent["@id"] === O && (delete h[E], j(E));
    };
    j(l);
  }
  /**
   * Removes the @preserve keywords from expanded result of framing.
   *
   * @param input the framed, framed output.
   * @param options the framing options used.
   *
   * @return the resulting output.
   */
  function v(d, l) {
    if (n.isArray(d))
      return d.map((h) => v(h, l));
    if (n.isObject(d)) {
      // remove @preserve
      if ("@preserve" in d)
        return d["@preserve"][0];
      if (t.isValue(d))
        return d;
      if (t.isList(d))
        return d["@list"] = v(d["@list"], l), d;
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
        d[h] = v(d[h], l);
      }
    }
    return d;
  }
  function S(d, l, h) {
    n.isObject(d) ? r.addValue(d, l, h, { propertyIsArray: !0 }) : d.push(h);
  }
  function b(d, l, h, I) {
    if (!("@id" in h))
      return !1;
    const A = d.subjects[h["@id"]];
    return A && w(d, A, l, I);
  }
  function y(d, l) {
    const h = l["@value"], I = l["@type"], A = l["@language"], P = d["@value"] ? n.isArray(d["@value"]) ? d["@value"] : [d["@value"]] : [], T = d["@type"] ? n.isArray(d["@type"]) ? d["@type"] : [d["@type"]] : [], j = d["@language"] ? n.isArray(d["@language"]) ? d["@language"] : [d["@language"]] : [];
    return P.length === 0 && T.length === 0 && j.length === 0 ? !0 : !(!(P.includes(h) || n.isEmptyObject(P[0])) || !(!I && T.length === 0 || T.includes(I) || I && n.isEmptyObject(T[0])) || !(!A && j.length === 0 || j.includes(A) || A && n.isEmptyObject(j[0])));
  }
  return ns;
}
var is, Ac;
function Zf() {
  if (Ac) return is;
  Ac = 1;
  const e = ze(), {
    isArray: t,
    isObject: n,
    isString: r,
    isUndefined: c
  } = Ce(), {
    isList: i,
    isValue: s,
    isGraph: a,
    isSimpleGraph: o,
    isSubjectReference: p
  } = ut(), {
    expandIri: m,
    getContextValue: g,
    isKeyword: u,
    process: f,
    processingMode: w
  } = Tt(), {
    removeBase: x,
    prependBase: v
  } = xt(), {
    REGEX_KEYWORD: S,
    addValue: b,
    asArray: y,
    compareShortestLeast: d
  } = De(), l = {};
  is = l, l.compact = async ({
    activeCtx: A,
    activeProperty: P = null,
    element: T,
    options: j = {}
  }) => {
    if (t(T)) {
      let R = [];
      for (let E = 0; E < T.length; ++E) {
        const D = await l.compact({
          activeCtx: A,
          activeProperty: P,
          element: T[E],
          options: j
        });
        D !== null && R.push(D);
      }
      return j.compactArrays && R.length === 1 && (g(
        A,
        P,
        "@container"
      ) || []).length === 0 && (R = R[0]), R;
    }
    const O = g(A, P, "@context");
    if (c(O) || (A = await f({
      activeCtx: A,
      localCtx: O,
      propagate: !0,
      overrideProtected: !0,
      options: j
    })), n(T)) {
      if (j.link && "@id" in T && j.link.hasOwnProperty(T["@id"])) {
        const M = j.link[T["@id"]];
        for (let k = 0; k < M.length; ++k)
          if (M[k].expanded === T)
            return M[k].compacted;
      }
      if (s(T) || p(T)) {
        const M = l.compactValue({ activeCtx: A, activeProperty: P, value: T, options: j });
        return j.link && p(T) && (j.link.hasOwnProperty(T["@id"]) || (j.link[T["@id"]] = []), j.link[T["@id"]].push({ expanded: T, compacted: M })), M;
      }
      if (i(T) && (g(
        A,
        P,
        "@container"
      ) || []).includes("@list"))
        return l.compact({
          activeCtx: A,
          activeProperty: P,
          element: T["@list"],
          options: j
        });
      const R = P === "@reverse", E = {}, D = A;
      !s(T) && !p(T) && (A = A.revertToPreviousContext());
      const q = g(D, P, "@context");
      c(q) || (A = await f({
        activeCtx: A,
        localCtx: q,
        propagate: !0,
        overrideProtected: !0,
        options: j
      })), j.link && "@id" in T && (j.link.hasOwnProperty(T["@id"]) || (j.link[T["@id"]] = []), j.link[T["@id"]].push({ expanded: T, compacted: E }));
      let V = T["@type"] || [];
      V.length > 1 && (V = Array.from(V).sort());
      const G = A;
      for (const M of V) {
        const k = l.compactIri(
          { activeCtx: G, iri: M, relativeTo: { vocab: !0 } }
        ), z = g(D, k, "@context");
        c(z) || (A = await f({
          activeCtx: A,
          localCtx: z,
          options: j,
          propagate: !1
        }));
      }
      const J = Object.keys(T).sort();
      for (const M of J) {
        const k = T[M];
        if (M === "@id") {
          let z = y(k).map(
            (_) => l.compactIri({
              activeCtx: A,
              iri: _,
              relativeTo: { vocab: !1 },
              base: j.base
            })
          );
          z.length === 1 && (z = z[0]);
          const N = l.compactIri(
            { activeCtx: A, iri: "@id", relativeTo: { vocab: !0 } }
          );
          E[N] = z;
          continue;
        }
        if (M === "@type") {
          let z = y(k).map(
            (L) => l.compactIri({
              activeCtx: D,
              iri: L,
              relativeTo: { vocab: !0 }
            })
          );
          z.length === 1 && (z = z[0]);
          const N = l.compactIri(
            { activeCtx: A, iri: "@type", relativeTo: { vocab: !0 } }
          ), C = (g(
            A,
            N,
            "@container"
          ) || []).includes("@set") && w(A, 1.1) || t(z) && k.length === 0;
          b(E, N, z, { propertyIsArray: C });
          continue;
        }
        if (M === "@reverse") {
          const z = await l.compact({
            activeCtx: A,
            activeProperty: "@reverse",
            element: k,
            options: j
          });
          for (const N in z)
            if (A.mappings.has(N) && A.mappings.get(N).reverse) {
              const _ = z[N], C = (g(
                A,
                N,
                "@container"
              ) || []).includes("@set") || !j.compactArrays;
              b(
                E,
                N,
                _,
                { propertyIsArray: C }
              ), delete z[N];
            }
          if (Object.keys(z).length > 0) {
            const N = l.compactIri({
              activeCtx: A,
              iri: M,
              relativeTo: { vocab: !0 }
            });
            b(E, N, z);
          }
          continue;
        }
        if (M === "@preserve") {
          const z = await l.compact({
            activeCtx: A,
            activeProperty: P,
            element: k,
            options: j
          });
          t(z) && z.length === 0 || b(E, M, z);
          continue;
        }
        if (M === "@index") {
          if ((g(
            A,
            P,
            "@container"
          ) || []).includes("@index"))
            continue;
          const N = l.compactIri({
            activeCtx: A,
            iri: M,
            relativeTo: { vocab: !0 }
          });
          b(E, N, k);
          continue;
        }
        if (M !== "@graph" && M !== "@list" && M !== "@included" && u(M)) {
          const z = l.compactIri({
            activeCtx: A,
            iri: M,
            relativeTo: { vocab: !0 }
          });
          b(E, z, k);
          continue;
        }
        if (!t(k))
          throw new e(
            "JSON-LD expansion error; expanded value must be an array.",
            "jsonld.SyntaxError"
          );
        if (k.length === 0) {
          const z = l.compactIri({
            activeCtx: A,
            iri: M,
            value: k,
            relativeTo: { vocab: !0 },
            reverse: R
          }), N = A.mappings.has(z) ? A.mappings.get(z)["@nest"] : null;
          let _ = E;
          N && (I(A, N, j), n(E[N]) || (E[N] = {}), _ = E[N]), b(
            _,
            z,
            k,
            {
              propertyIsArray: !0
            }
          );
        }
        for (const z of k) {
          const N = l.compactIri({
            activeCtx: A,
            iri: M,
            value: z,
            relativeTo: { vocab: !0 },
            reverse: R
          }), _ = A.mappings.has(N) ? A.mappings.get(N)["@nest"] : null;
          let $ = E;
          _ && (I(A, _, j), n(E[_]) || (E[_] = {}), $ = E[_]);
          const C = g(
            A,
            N,
            "@container"
          ) || [], L = a(z), H = i(z);
          let Q;
          H ? Q = z["@list"] : L && (Q = z["@graph"]);
          let Z = await l.compact({
            activeCtx: A,
            activeProperty: N,
            element: H || L ? Q : z,
            options: j
          });
          if (H)
            if (t(Z) || (Z = [Z]), !C.includes("@list"))
              Z = {
                [l.compactIri({
                  activeCtx: A,
                  iri: "@list",
                  relativeTo: { vocab: !0 }
                })]: Z
              }, "@index" in z && (Z[l.compactIri({
                activeCtx: A,
                iri: "@index",
                relativeTo: { vocab: !0 }
              })] = z["@index"]);
            else {
              b($, N, Z, {
                valueIsArray: !0,
                allowDuplicate: !0
              });
              continue;
            }
          if (L)
            if (C.includes("@graph") && (C.includes("@id") || C.includes("@index") && o(z))) {
              let U;
              $.hasOwnProperty(N) ? U = $[N] : $[N] = U = {};
              const F = (C.includes("@id") ? z["@id"] : z["@index"]) || l.compactIri({
                activeCtx: A,
                iri: "@none",
                relativeTo: { vocab: !0 }
              });
              b(
                U,
                F,
                Z,
                {
                  propertyIsArray: !j.compactArrays || C.includes("@set")
                }
              );
            } else C.includes("@graph") && o(z) ? (t(Z) && Z.length > 1 && (Z = { "@included": Z }), b(
              $,
              N,
              Z,
              {
                propertyIsArray: !j.compactArrays || C.includes("@set")
              }
            )) : (t(Z) && Z.length === 1 && j.compactArrays && (Z = Z[0]), Z = {
              [l.compactIri({
                activeCtx: A,
                iri: "@graph",
                relativeTo: { vocab: !0 }
              })]: Z
            }, "@id" in z && (Z[l.compactIri({
              activeCtx: A,
              iri: "@id",
              relativeTo: { vocab: !0 }
            })] = z["@id"]), "@index" in z && (Z[l.compactIri({
              activeCtx: A,
              iri: "@index",
              relativeTo: { vocab: !0 }
            })] = z["@index"]), b(
              $,
              N,
              Z,
              {
                propertyIsArray: !j.compactArrays || C.includes("@set")
              }
            ));
          else if (C.includes("@language") || C.includes("@index") || C.includes("@id") || C.includes("@type")) {
            let U;
            $.hasOwnProperty(N) ? U = $[N] : $[N] = U = {};
            let F;
            if (C.includes("@language"))
              s(Z) && (Z = Z["@value"]), F = z["@language"];
            else if (C.includes("@index")) {
              const B = g(
                A,
                N,
                "@index"
              ) || "@index", K = l.compactIri(
                { activeCtx: A, iri: B, relativeTo: { vocab: !0 } }
              );
              if (B === "@index")
                F = z["@index"], delete Z[K];
              else {
                let W;
                if ([F, ...W] = y(Z[B] || []), !r(F))
                  F = null;
                else
                  switch (W.length) {
                    case 0:
                      delete Z[B];
                      break;
                    case 1:
                      Z[B] = W[0];
                      break;
                    default:
                      Z[B] = W;
                      break;
                  }
              }
            } else if (C.includes("@id")) {
              const B = l.compactIri({
                activeCtx: A,
                iri: "@id",
                relativeTo: { vocab: !0 }
              });
              F = Z[B], delete Z[B];
            } else if (C.includes("@type")) {
              const B = l.compactIri({
                activeCtx: A,
                iri: "@type",
                relativeTo: { vocab: !0 }
              });
              let K;
              switch ([F, ...K] = y(Z[B] || []), K.length) {
                case 0:
                  delete Z[B];
                  break;
                case 1:
                  Z[B] = K[0];
                  break;
                default:
                  Z[B] = K;
                  break;
              }
              Object.keys(Z).length === 1 && "@id" in z && (Z = await l.compact({
                activeCtx: A,
                activeProperty: N,
                element: { "@id": z["@id"] },
                options: j
              }));
            }
            F || (F = l.compactIri({
              activeCtx: A,
              iri: "@none",
              relativeTo: { vocab: !0 }
            })), b(
              U,
              F,
              Z,
              {
                propertyIsArray: C.includes("@set")
              }
            );
          } else {
            const U = !j.compactArrays || C.includes("@set") || C.includes("@list") || t(Z) && Z.length === 0 || M === "@list" || M === "@graph";
            b(
              $,
              N,
              Z,
              { propertyIsArray: U }
            );
          }
        }
      }
      return E;
    }
    return T;
  }, l.compactIri = ({
    activeCtx: A,
    iri: P,
    value: T = null,
    relativeTo: j = { vocab: !1 },
    reverse: O = !1,
    base: R = null
  }) => {
    if (P === null)
      return P;
    A.isPropertyTermScoped && A.previousContext && (A = A.previousContext);
    const E = A.getInverse();
    if (u(P) && P in E && "@none" in E[P] && "@type" in E[P]["@none"] && "@none" in E[P]["@none"]["@type"])
      return E[P]["@none"]["@type"]["@none"];
    if (j.vocab && P in E) {
      const J = A["@language"] || "@none", M = [];
      n(T) && "@index" in T && !("@graph" in T) && M.push("@index", "@index@set"), n(T) && "@preserve" in T && (T = T["@preserve"][0]), a(T) ? ("@index" in T && M.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in T && M.push(
        "@graph@id",
        "@graph@id@set"
      ), M.push("@graph", "@graph@set", "@set"), "@index" in T || M.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in T || M.push("@graph@id", "@graph@id@set")) : n(T) && !s(T) && M.push("@id", "@id@set", "@type", "@set@type");
      let k = "@language", z = "@null";
      if (O)
        k = "@type", z = "@reverse", M.push("@set");
      else if (i(T)) {
        "@index" in T || M.push("@list");
        const _ = T["@list"];
        if (_.length === 0)
          k = "@any", z = "@none";
        else {
          let $ = _.length === 0 ? J : null, C = null;
          for (let L = 0; L < _.length; ++L) {
            const H = _[L];
            let Q = "@none", Z = "@none";
            if (s(H))
              if ("@direction" in H) {
                const U = (H["@language"] || "").toLowerCase(), F = H["@direction"];
                Q = `${U}_${F}`;
              } else "@language" in H ? Q = H["@language"].toLowerCase() : "@type" in H ? Z = H["@type"] : Q = "@null";
            else
              Z = "@id";
            if ($ === null ? $ = Q : Q !== $ && s(H) && ($ = "@none"), C === null ? C = Z : Z !== C && (C = "@none"), $ === "@none" && C === "@none")
              break;
          }
          $ = $ || "@none", C = C || "@none", C !== "@none" ? (k = "@type", z = C) : z = $;
        }
      } else {
        if (s(T))
          if ("@language" in T && !("@index" in T)) {
            M.push("@language", "@language@set"), z = T["@language"];
            const _ = T["@direction"];
            _ && (z = `${z}_${_}`);
          } else "@direction" in T && !("@index" in T) ? z = `_${T["@direction"]}` : "@type" in T && (k = "@type", z = T["@type"]);
        else
          k = "@type", z = "@id";
        M.push("@set");
      }
      M.push("@none"), n(T) && !("@index" in T) && M.push("@index", "@index@set"), s(T) && Object.keys(T).length === 1 && M.push("@language", "@language@set");
      const N = h(
        A,
        P,
        T,
        M,
        k,
        z
      );
      if (N !== null)
        return N;
    }
    if (j.vocab && "@vocab" in A) {
      const J = A["@vocab"];
      if (P.indexOf(J) === 0 && P !== J) {
        const M = P.substr(J.length);
        if (!A.mappings.has(M))
          return M;
      }
    }
    let D = null;
    const q = [];
    let V = A.fastCurieMap;
    const G = P.length - 1;
    for (let J = 0; J < G && P[J] in V; ++J)
      V = V[P[J]], "" in V && q.push(V[""][0]);
    for (let J = q.length - 1; J >= 0; --J) {
      const M = q[J], k = M.terms;
      for (const z of k) {
        const N = z + ":" + P.substr(M.iri.length);
        A.mappings.get(z)._prefix && (!A.mappings.has(N) || T === null && A.mappings.get(N)["@id"] === P) && (D === null || d(N, D) < 0) && (D = N);
      }
    }
    if (D !== null)
      return D;
    for (const [J, M] of A.mappings)
      if (M && M._prefix && P.startsWith(J + ":"))
        throw new e(
          `Absolute IRI "${P}" confused with prefix "${J}".`,
          "jsonld.SyntaxError",
          { code: "IRI confused with prefix", context: A }
        );
    if (!j.vocab)
      if ("@base" in A)
        if (A["@base"]) {
          const J = x(v(R, A["@base"]), P);
          return S.test(J) ? `./${J}` : J;
        } else
          return P;
      else
        return x(R, P);
    return P;
  }, l.compactValue = ({ activeCtx: A, activeProperty: P, value: T, options: j }) => {
    if (s(T)) {
      const D = g(A, P, "@type"), q = g(A, P, "@language"), V = g(A, P, "@direction"), G = g(A, P, "@container") || [], J = "@index" in T && !G.includes("@index");
      if (!J && D !== "@none" && (T["@type"] === D || "@language" in T && T["@language"] === q && "@direction" in T && T["@direction"] === V || "@language" in T && T["@language"] === q || "@direction" in T && T["@direction"] === V))
        return T["@value"];
      const M = Object.keys(T).length, k = M === 1 || M === 2 && "@index" in T && !J, z = "@language" in A, N = r(T["@value"]), _ = A.mappings.has(P) && A.mappings.get(P)["@language"] === null;
      if (k && D !== "@none" && (!z || !N || _))
        return T["@value"];
      const $ = {};
      return J && ($[l.compactIri({
        activeCtx: A,
        iri: "@index",
        relativeTo: { vocab: !0 }
      })] = T["@index"]), "@type" in T ? $[l.compactIri({
        activeCtx: A,
        iri: "@type",
        relativeTo: { vocab: !0 }
      })] = l.compactIri(
        { activeCtx: A, iri: T["@type"], relativeTo: { vocab: !0 } }
      ) : "@language" in T && ($[l.compactIri({
        activeCtx: A,
        iri: "@language",
        relativeTo: { vocab: !0 }
      })] = T["@language"]), "@direction" in T && ($[l.compactIri({
        activeCtx: A,
        iri: "@direction",
        relativeTo: { vocab: !0 }
      })] = T["@direction"]), $[l.compactIri({
        activeCtx: A,
        iri: "@value",
        relativeTo: { vocab: !0 }
      })] = T["@value"], $;
    }
    const O = m(
      A,
      P,
      { vocab: !0 },
      j
    ), R = g(A, P, "@type"), E = l.compactIri({
      activeCtx: A,
      iri: T["@id"],
      relativeTo: { vocab: R === "@vocab" },
      base: j.base
    });
    return R === "@id" || R === "@vocab" || O === "@graph" ? E : {
      [l.compactIri({
        activeCtx: A,
        iri: "@id",
        relativeTo: { vocab: !0 }
      })]: E
    };
  };
  function h(A, P, T, j, O, R) {
    R === null && (R = "@null");
    const E = [];
    if ((R === "@id" || R === "@reverse") && n(T) && "@id" in T) {
      R === "@reverse" && E.push("@reverse");
      const q = l.compactIri(
        { activeCtx: A, iri: T["@id"], relativeTo: { vocab: !0 } }
      );
      A.mappings.has(q) && A.mappings.get(q) && A.mappings.get(q)["@id"] === T["@id"] ? E.push.apply(E, ["@vocab", "@id"]) : E.push.apply(E, ["@id", "@vocab"]);
    } else {
      E.push(R);
      const q = E.find((V) => V.includes("_"));
      q && E.push(q.replace(/^[^_]+_/, "_"));
    }
    E.push("@none");
    const D = A.inverse[P];
    for (const q of j) {
      if (!(q in D))
        continue;
      const V = D[q][O];
      for (const G of E)
        if (G in V)
          return V[G];
    }
    return null;
  }
  function I(A, P, T) {
    if (m(A, P, { vocab: !0 }, T) !== "@nest")
      throw new e(
        "JSON-LD compact error; nested property must have an @nest value resolving to @nest.",
        "jsonld.SyntaxError",
        { code: "invalid @nest value" }
      );
  }
  return is;
}
var rs, qc;
function Kf() {
  return qc || (qc = 1, rs = (e) => {
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
  }), rs;
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
var ss, $c;
function Qf() {
  if ($c) return ss;
  $c = 1;
  const e = Ns(), t = Of(), n = De(), r = zf(), c = n.IdentifierIssuer, i = ze(), s = yd(), a = Uf(), { expand: o } = Vf(), { flatten: p } = Ff(), { fromRDF: m } = Gf(), { toRDF: g } = Jf(), {
    frameMergedOrDefault: u,
    cleanupNull: f
  } = Hf(), {
    isArray: w,
    isObject: x,
    isString: v
  } = Ce(), {
    isSubjectReference: S
  } = ut(), {
    expandIri: b,
    getInitialContext: y,
    process: d,
    processingMode: l
  } = Tt(), {
    compact: h,
    compactIri: I
  } = Zf(), {
    createNodeMap: A,
    createMergedNodeMap: P,
    mergeNodeMaps: T
  } = Hi(), {
    logEventHandler: j,
    logWarningEventHandler: O,
    safeEventHandler: R,
    setDefaultEventHandler: E,
    setupEventHandler: D,
    strictEventHandler: q,
    unhandledEventHandler: V
  } = vn(), G = function(M) {
    const k = {}, N = new s({ max: 100 });
    M.compact = async function($, C, L) {
      if (arguments.length < 2)
        throw new TypeError("Could not compact, too few arguments.");
      if (C === null)
        throw new i(
          "The compaction context must not be null.",
          "jsonld.CompactError",
          { code: "invalid local context" }
        );
      if ($ === null)
        return null;
      L = _(L, {
        base: v($) ? $ : "",
        compactArrays: !0,
        compactToRelative: !0,
        graph: !1,
        skipExpansion: !1,
        link: !1,
        issuer: new c("_:b"),
        contextResolver: new r(
          { sharedCache: N }
        )
      }), L.link && (L.skipExpansion = !0), L.compactToRelative || delete L.base;
      let H;
      L.skipExpansion ? H = $ : H = await M.expand($, L);
      const Q = await M.processContext(
        y(L),
        C,
        L
      );
      let Z = await h({
        activeCtx: Q,
        element: H,
        options: L
      });
      L.compactArrays && !L.graph && w(Z) ? Z.length === 1 ? Z = Z[0] : Z.length === 0 && (Z = {}) : L.graph && x(Z) && (Z = [Z]), x(C) && "@context" in C && (C = C["@context"]), C = n.clone(C), w(C) || (C = [C]);
      const U = C;
      C = [];
      for (let B = 0; B < U.length; ++B)
        (!x(U[B]) || Object.keys(U[B]).length > 0) && C.push(U[B]);
      const F = C.length > 0;
      if (C.length === 1 && (C = C[0]), w(Z)) {
        const B = I({
          activeCtx: Q,
          iri: "@graph",
          relativeTo: { vocab: !0 }
        }), K = Z;
        Z = {}, F && (Z["@context"] = C), Z[B] = K;
      } else if (x(Z) && F) {
        const B = Z;
        Z = { "@context": C };
        for (const K in B)
          Z[K] = B[K];
      }
      return Z;
    }, M.expand = async function($, C) {
      if (arguments.length < 1)
        throw new TypeError("Could not expand, too few arguments.");
      C = _(C, {
        keepFreeFloatingNodes: !1,
        contextResolver: new r(
          { sharedCache: N }
        )
      });
      const L = {}, H = [];
      if ("expandContext" in C) {
        const F = n.clone(C.expandContext);
        x(F) && "@context" in F ? L.expandContext = F : L.expandContext = { "@context": F }, H.push(L.expandContext);
      }
      let Q;
      if (!v($))
        L.input = n.clone($);
      else {
        const F = await M.get($, C);
        Q = F.documentUrl, L.input = F.document, F.contextUrl && (L.remoteContext = { "@context": F.contextUrl }, H.push(L.remoteContext));
      }
      "base" in C || (C.base = Q || "");
      let Z = y(C);
      for (const F of H)
        Z = await d({ activeCtx: Z, localCtx: F, options: C });
      let U = await o({
        activeCtx: Z,
        element: L.input,
        options: C
      });
      return x(U) && "@graph" in U && Object.keys(U).length === 1 ? U = U["@graph"] : U === null && (U = []), w(U) || (U = [U]), U;
    }, M.flatten = async function($, C, L) {
      if (arguments.length < 1)
        return new TypeError("Could not flatten, too few arguments.");
      typeof C == "function" ? C = null : C = C || null, L = _(L, {
        base: v($) ? $ : "",
        contextResolver: new r(
          { sharedCache: N }
        )
      });
      const H = await M.expand($, L), Q = p(H);
      return C === null ? Q : (L.graph = !0, L.skipExpansion = !0, await M.compact(Q, C, L));
    }, M.frame = async function($, C, L) {
      if (arguments.length < 2)
        throw new TypeError("Could not frame, too few arguments.");
      if (L = _(L, {
        base: v($) ? $ : "",
        embed: "@once",
        explicit: !1,
        requireAll: !1,
        omitDefault: !1,
        bnodesToClear: [],
        contextResolver: new r(
          { sharedCache: N }
        )
      }), v(C)) {
        const Y = await M.get(C, L);
        if (C = Y.document, Y.contextUrl) {
          let re = C["@context"];
          re ? w(re) ? re.push(Y.contextUrl) : re = [re, Y.contextUrl] : re = Y.contextUrl, C["@context"] = re;
        }
      }
      const H = C ? C["@context"] || {} : {}, Q = await M.processContext(
        y(L),
        H,
        L
      );
      L.hasOwnProperty("omitGraph") || (L.omitGraph = l(Q, 1.1)), L.hasOwnProperty("pruneBlankNodeIdentifiers") || (L.pruneBlankNodeIdentifiers = l(Q, 1.1));
      const Z = await M.expand($, L), U = { ...L };
      U.isFrame = !0, U.keepFreeFloatingNodes = !0;
      const F = await M.expand(C, U), B = Object.keys(C).map((Y) => b(Q, Y, { vocab: !0 }));
      U.merged = !B.includes("@graph"), U.is11 = l(Q, 1.1);
      const K = u(Z, F, U);
      U.graph = !L.omitGraph, U.skipExpansion = !0, U.link = {}, U.framing = !0;
      let W = await M.compact(K, H, U);
      return U.link = {}, W = f(W, U), W;
    }, M.link = async function($, C, L) {
      const H = {};
      return C && (H["@context"] = C), H["@embed"] = "@link", M.frame($, H, L);
    }, M.normalize = M.canonize = async function($, C) {
      if (arguments.length < 1)
        throw new TypeError("Could not canonize, too few arguments.");
      if (C = _(C, {
        base: v($) ? $ : null,
        algorithm: "URDNA2015",
        skipExpansion: !1,
        safe: !0,
        contextResolver: new r(
          { sharedCache: N }
        )
      }), "inputFormat" in C) {
        if (C.inputFormat !== "application/n-quads" && C.inputFormat !== "application/nquads")
          throw new i(
            "Unknown canonicalization input format.",
            "jsonld.CanonizeError"
          );
        const Q = a.parse($);
        return e.canonize(Q, C);
      }
      const L = { ...C };
      delete L.format, L.produceGeneralizedRdf = !1;
      const H = await M.toRDF($, L);
      return e.canonize(H, C);
    }, M.fromRDF = async function($, C) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert from RDF, too few arguments.");
      C = _(C, {
        format: v($) ? "application/n-quads" : void 0
      });
      const { format: L } = C;
      let { rdfParser: H } = C;
      if (L) {
        if (H = H || k[L], !H)
          throw new i(
            "Unknown input format.",
            "jsonld.UnknownFormat",
            { format: L }
          );
      } else
        H = () => $;
      const Q = await H($);
      return m(Q, C);
    }, M.toRDF = async function($, C) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert to RDF, too few arguments.");
      C = _(C, {
        base: v($) ? $ : "",
        skipExpansion: !1,
        contextResolver: new r(
          { sharedCache: N }
        )
      });
      let L;
      C.skipExpansion ? L = $ : L = await M.expand($, C);
      const H = g(L, C);
      if (C.format) {
        if (C.format === "application/n-quads" || C.format === "application/nquads")
          return a.serialize(H);
        throw new i(
          "Unknown output format.",
          "jsonld.UnknownFormat",
          { format: C.format }
        );
      }
      return H;
    }, M.createNodeMap = async function($, C) {
      if (arguments.length < 1)
        throw new TypeError("Could not create node map, too few arguments.");
      C = _(C, {
        base: v($) ? $ : "",
        contextResolver: new r(
          { sharedCache: N }
        )
      });
      const L = await M.expand($, C);
      return P(L, C);
    }, M.merge = async function($, C, L) {
      if (arguments.length < 1)
        throw new TypeError("Could not merge, too few arguments.");
      if (!w($))
        throw new TypeError('Could not merge, "docs" must be an array.');
      typeof C == "function" ? C = null : C = C || null, L = _(L, {
        contextResolver: new r(
          { sharedCache: N }
        )
      });
      const H = await Promise.all($.map((Y) => {
        const re = { ...L };
        return M.expand(Y, re);
      }));
      let Q = !0;
      "mergeNodes" in L && (Q = L.mergeNodes);
      const Z = L.issuer || new c("_:b"), U = { "@default": {} };
      for (let Y = 0; Y < H.length; ++Y) {
        const re = n.relabelBlankNodes(H[Y], {
          issuer: new c("_:b" + Y + "-")
        }), ve = Q || Y === 0 ? U : { "@default": {} };
        if (A(re, ve, "@default", Z), ve !== U)
          for (const fe in ve) {
            const me = ve[fe];
            if (!(fe in U)) {
              U[fe] = me;
              continue;
            }
            const pe = U[fe];
            for (const Qe in me)
              Qe in pe || (pe[Qe] = me[Qe]);
          }
      }
      const F = T(U), B = [], K = Object.keys(F).sort();
      for (let Y = 0; Y < K.length; ++Y) {
        const re = F[K[Y]];
        S(re) || B.push(re);
      }
      return C === null ? B : (L.graph = !0, L.skipExpansion = !0, await M.compact(B, C, L));
    }, Object.defineProperty(M, "documentLoader", {
      get: () => M._documentLoader,
      set: ($) => M._documentLoader = $
    }), M.documentLoader = async ($) => {
      throw new i(
        "Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.",
        "jsonld.LoadDocumentError",
        { code: "loading document failed", url: $ }
      );
    }, M.get = async function($, C) {
      let L;
      typeof C.documentLoader == "function" ? L = C.documentLoader : L = M.documentLoader;
      const H = await L($);
      try {
        if (!H.document)
          throw new i(
            "No remote document found at the given URL.",
            "jsonld.NullRemoteDocument"
          );
        v(H.document) && (H.document = JSON.parse(H.document));
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
    }, M.processContext = async function($, C, L) {
      return L = _(L, {
        base: "",
        contextResolver: new r(
          { sharedCache: N }
        )
      }), C === null ? y(L) : (C = n.clone(C), x(C) && "@context" in C || (C = { "@context": C }), d({ activeCtx: $, localCtx: C, options: L }));
    }, M.getContextValue = Tt().getContextValue, M.documentLoaders = {}, M.useDocumentLoader = function($) {
      if (!($ in M.documentLoaders))
        throw new i(
          'Unknown document loader type: "' + $ + '"',
          "jsonld.UnknownDocumentLoader",
          { type: $ }
        );
      M.documentLoader = M.documentLoaders[$].apply(
        M,
        Array.prototype.slice.call(arguments, 1)
      );
    }, M.registerRDFParser = function($, C) {
      k[$] = C;
    }, M.unregisterRDFParser = function($) {
      delete k[$];
    }, M.registerRDFParser("application/n-quads", a.parse), M.registerRDFParser("application/nquads", a.parse), M.url = xt(), M.logEventHandler = j, M.logWarningEventHandler = O, M.safeEventHandler = R, M.setDefaultEventHandler = E, M.strictEventHandler = q, M.unhandledEventHandler = V, M.util = n, Object.assign(M, n), M.promises = M, M.RequestQueue = md(), M.JsonLdProcessor = Kf()(M), t.setupGlobals(M), t.setupDocumentLoaders(M);
    function _($, {
      documentLoader: C = M.documentLoader,
      ...L
    }) {
      if ($ && "compactionMap" in $)
        throw new i(
          '"compactionMap" not supported.',
          "jsonld.OptionsError"
        );
      if ($ && "expansionMap" in $)
        throw new i(
          '"expansionMap" not supported.',
          "jsonld.OptionsError"
        );
      return Object.assign(
        {},
        { documentLoader: C },
        L,
        $,
        { eventHandler: D({ options: $ }) }
      );
    }
    return M;
  }, J = function() {
    return G(function() {
      return J();
    });
  };
  return G(J), ss = J, ss;
}
var Wf = Qf();
const Xf = /* @__PURE__ */ Rs(Wf);
async function Rc(e, t, n = {}) {
  const r = {
    algorithm: "URDNA2015",
    format: "application/n-quads",
    safe: n.safe ?? !1
  };
  return t && (r.documentLoader = t), await Xf.normalize(e, r);
}
async function Yf(e, t, n, r = !1) {
  const [c, i] = await Promise.all([
    Rc(e, n, { safe: r }),
    Rc(t, n, { safe: r })
  ]), s = us("sha256").update(c, "utf8").digest(), a = us("sha256").update(i, "utf8").digest(), o = new Uint8Array(64);
  return o.set(a, 0), o.set(s, 32), o;
}
async function eh(e, t, n = {}) {
  const r = e.proof;
  if (!r) throw new Error("No proof found on credential");
  if (r.cryptosuite !== "eddsa-rdfc-2022")
    throw new Error(`Unsupported cryptosuite: ${r.cryptosuite}`);
  if (r.created === void 0)
    throw new Error('eddsa-rdfc-2022 proof is missing the required "created" property.');
  const c = ["type", "cryptosuite", "proofPurpose", "verificationMethod", "created", "proofValue"];
  if (r.type !== "DataIntegrityProof" || r.proofPurpose !== "assertionMethod" || Object.keys(r).some((g) => !c.includes(g)) || typeof r.verificationMethod != "string" || typeof r.created != "string" || typeof r.proofValue != "string") return !1;
  const { proof: i, ...s } = e, { proofValue: a, ...o } = r, p = { ...o, "@context": s["@context"] }, m = await Yf(
    s,
    p,
    n.documentLoader,
    n.safe ?? !1
  );
  try {
    const g = Uc(r.proofValue);
    return await If(g, m, t);
  } catch {
    return !1;
  }
}
const th = Hp, nh = cf, ih = Object.freeze({
  RmAccreditation: `${Ot}accreditation.json`,
  RmOperationalScope: `${Ot}operational-scope.json`,
  RmCertificate: `${Ot}certificate.json`,
  RmStudy: `${Ot}study.json`,
  RmLabAuthority: `${Ot}lab-authority.json`,
  BitstringStatusListCredential: `${Ot}status-list.json`
});
function rh(e) {
  return e === "BitstringStatusListCredential" ? [Qt] : [Qt, ml];
}
const sh = Object.freeze({
  name: "RM v1",
  schemas: ih,
  contexts: rh
}), ah = Object.freeze({
  resolve: 1,
  parse: 0,
  carrier: 0,
  type: 0,
  schema: 0,
  proof: 2,
  key: 2,
  signature: 2
});
function Zi(e, t, n, r) {
  return [
    e,
    t ?? "unresolved",
    n,
    r.purpose,
    `${r.profile.id}@${r.profile.version}`,
    r.evaluationTime
  ].join(" | ");
}
function Jt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const oh = (e) => e.replace(/~/g, "~0").replace(/\//g, "~1");
function ch(e, t) {
  if (!t.startsWith("/")) return [];
  let n = [{ pointer: "", value: e }];
  for (const r of t.slice(1).split("/")) {
    const c = [];
    for (const { pointer: i, value: s } of n)
      r === "*" ? Array.isArray(s) && s.forEach((a, o) => c.push({ pointer: `${i}/${o}`, value: a })) : Jt(s) && Object.hasOwn(s, r) && c.push({ pointer: `${i}/${oh(r)}`, value: s[r] });
    n = c;
  }
  return n;
}
function Yt(e, t) {
  if (t === "") return e;
  if (!t.startsWith("/")) return;
  let n = e;
  for (const r of t.slice(1).split("/")) {
    const c = r.replace(/~1/g, "/").replace(/~0/g, "~");
    if (Array.isArray(n) && /^(0|[1-9][0-9]*)$/.test(c)) n = n[Number(c)];
    else if (Jt(n) && Object.hasOwn(n, c)) n = n[c];
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
const en = (e) => oe("not_established", [e], [], "not_run");
function dh(e, t) {
  const n = Date.parse(t), r = typeof e.validFrom == "string" ? Date.parse(e.validFrom) : NaN, c = typeof e.validUntil == "string" ? Date.parse(e.validUntil) : NaN;
  if (!Number.isFinite(n) || !Number.isFinite(r) || !Number.isFinite(c))
    return oe("not_established", ["Validity period or evaluation time is missing or invalid."]);
  const i = ["/validFrom", "/validUntil"];
  return n < r ? oe("contradicted", [`Not yet valid at ${t}.`], i) : n > c ? oe("contradicted", [`Expired before ${t}.`], i) : oe("established", [`Valid at ${t}.`], i);
}
function lh(e, t) {
  return (Array.isArray(e.relatedResource) ? e.relatedResource : []).filter(Jt).map((r) => {
    const c = String(r.id);
    try {
      const i = Di(t.resolve(c).bytes);
      return i === r.digestSRI ? { id: c, state: "established", reason: "Digest matches the exact referenced bytes." } : { id: c, state: "contradicted", reason: `Digest mismatch: referenced bytes hash to ${i}.` };
    } catch (i) {
      const s = i instanceof _e ? i.code : "UNAVAILABLE";
      return { id: c, state: "not_established", reason: `Referenced resource unavailable: ${s}.` };
    }
  });
}
async function Ai(e, t, n) {
  const r = [], c = n.staticResolver ?? t, i = n.binding ?? sh, s = en("Not evaluated because protection is not established."), a = (l = {}) => {
    const h = Se(r.map((I) => I.state));
    return Object.freeze({
      artifactId: e,
      protection: Object.freeze({
        artifactId: e,
        ...oe(h, r.filter((I) => I.state !== "established").map((I) => `${I.check}: ${I.reason}`).concat(h === "established" ? ["Protection established from the original secured bytes."] : []))
      }),
      checks: Object.freeze(r.map((I) => Object.freeze(I))),
      validity: s,
      relatedResources: Object.freeze([]),
      facts: Object.freeze([]),
      ...l
    });
  }, o = (l, h, I, A = {}) => (r.push({ check: l, state: h, reason: I }), a(A));
  let p;
  try {
    p = t.resolve(e).bytes;
  } catch (l) {
    const h = l instanceof _e ? l.code : "UNAVAILABLE";
    return o("resolve", "not_established", `Artifact is not available: ${h}.`);
  }
  const m = Di(p);
  r.push({ check: "resolve", state: "established", reason: `Resolved ${p.byteLength} bytes.` });
  let g;
  try {
    g = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(p));
  } catch {
    return o("parse", "contradicted", "Artifact bytes are not valid UTF-8 JSON.", { digestSRI: m });
  }
  if (!Jt(g)) return o("parse", "contradicted", "Artifact is not a JSON object.", { digestSRI: m });
  r.push({ check: "parse", state: "established", reason: "Strict UTF-8 JSON object." });
  const u = g["@context"], f = i.contexts(Array.isArray(g.type) ? g.type[1] : void 0);
  if (!Array.isArray(u) || u.length !== f.length || f.some((l, h) => u[h] !== l))
    return o(
      "carrier",
      "not_established",
      "Only the exact supported context combination for this type is accepted.",
      { digestSRI: m }
    );
  r.push({ check: "carrier", state: "established", reason: "Exact supported context combination." });
  const w = Array.isArray(g.type) ? g.type : [], x = w.length === 2 && w[0] === "VerifiableCredential" ? String(w[1]) : void 0, v = x === void 0 ? void 0 : i.schemas[x];
  if (v === void 0)
    return o("type", "not_established", `Credential type is not a recognized ${i.name} artifact type.`, { digestSRI: m });
  if (Array.isArray(g.credentialSchema))
    return o(
      "type",
      "not_established",
      "Multiple credentialSchema declarations have no accepted composition in this binding.",
      { digestSRI: m, artifactType: x }
    );
  if ((Jt(g.credentialSchema) ? g.credentialSchema.id : void 0) !== v)
    return o("type", "contradicted", `${x} must declare schema ${v}.`, { digestSRI: m, artifactType: x });
  r.push({ check: "type", state: "established", reason: `${x} with its pinned schema.` });
  try {
    const l = new th({ allErrors: !0, strict: !0 });
    nh(l);
    const h = JSON.parse(new TextDecoder().decode(c.resolve(v).bytes)), I = l.compile(h);
    if (!I(g)) {
      const A = (I.errors ?? []).map((P) => `${P.instancePath || "/"} ${P.message ?? ""}`).join("; ");
      return o("schema", "contradicted", `Schema validation failed: ${A}`, { digestSRI: m, artifactType: x });
    }
  } catch (l) {
    const h = l instanceof _e ? l.code : "INVALID_SCHEMA";
    return o("schema", "not_established", `Pinned schema unavailable: ${h}.`, { digestSRI: m, artifactType: x });
  }
  r.push({ check: "schema", state: "established", reason: "Valid against the pinned schema." });
  const b = g.proof;
  if (Array.isArray(b))
    return o("proof", "not_established", "Proof sets and chains are unsupported in the initial slice.", { digestSRI: m, artifactType: x });
  if (!Jt(b))
    return o("proof", "not_established", "The artifact carries no proof.", { digestSRI: m, artifactType: x });
  r.push({ check: "proof", state: "established", reason: "One eddsa-rdfc-2022 assertionMethod proof." });
  const y = Il(g.issuer, b.verificationMethod, c);
  if (y.state !== "established" || y.publicKey === void 0)
    return o(
      "key",
      y.state === "established" ? "not_established" : y.state,
      `${y.code}: ${y.reason}`,
      { digestSRI: m, artifactType: x, keyAuthorization: y }
    );
  r.push({ check: "key", state: "established", reason: y.reason });
  try {
    const l = fl(c);
    if (!await eh(g, y.publicKey, {
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
  r.push({ check: "signature", state: "established", reason: "Ed25519 signature verifies (safe mode, offline catalog)." });
  const d = [];
  for (const l of n.manifest.factMappings) {
    const h = String(l.fact);
    for (const { pointer: I, value: A } of ch(g, String(l.nativePath)))
      d.push(Object.freeze({ fact: h, pointer: I, value: structuredClone(A) }));
  }
  return a({
    digestSRI: m,
    artifactType: x,
    keyAuthorization: y,
    validity: dh(g, n.evaluationTime),
    relatedResources: Object.freeze(lh(g, t).map((l) => Object.freeze(l))),
    facts: Object.freeze(d)
  });
}
var Ee = Uint8Array, Bt = Uint16Array, uh = Int32Array, gd = new Ee([
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
]), vd = new Ee([
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
]), ph = new Ee([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), bd = function(e, t) {
  for (var n = new Bt(31), r = 0; r < 31; ++r)
    n[r] = t += 1 << e[r - 1];
  for (var c = new uh(n[30]), r = 1; r < 30; ++r)
    for (var i = n[r]; i < n[r + 1]; ++i)
      c[i] = i - n[r] << 5 | r;
  return { b: n, r: c };
}, wd = bd(gd, 2), xd = wd.b, fh = wd.r;
xd[28] = 258, fh[258] = 28;
var hh = bd(vd, 0), mh = hh.b, gs = new Bt(32768);
for (var ce = 0; ce < 32768; ++ce) {
  var gt = (ce & 43690) >> 1 | (ce & 21845) << 1;
  gt = (gt & 52428) >> 2 | (gt & 13107) << 2, gt = (gt & 61680) >> 4 | (gt & 3855) << 4, gs[ce] = ((gt & 65280) >> 8 | (gt & 255) << 8) >> 1;
}
var dn = (function(e, t, n) {
  for (var r = e.length, c = 0, i = new Bt(t); c < r; ++c)
    e[c] && ++i[e[c] - 1];
  var s = new Bt(t);
  for (c = 1; c < t; ++c)
    s[c] = s[c - 1] + i[c - 1] << 1;
  var a;
  if (n) {
    a = new Bt(1 << t);
    var o = 15 - t;
    for (c = 0; c < r; ++c)
      if (e[c])
        for (var p = c << 4 | e[c], m = t - e[c], g = s[e[c] - 1]++ << m, u = g | (1 << m) - 1; g <= u; ++g)
          a[gs[g] >> o] = p;
  } else
    for (a = new Bt(r), c = 0; c < r; ++c)
      e[c] && (a[c] = gs[s[e[c] - 1]++] >> 15 - e[c]);
  return a;
}), bn = new Ee(288);
for (var ce = 0; ce < 144; ++ce)
  bn[ce] = 8;
for (var ce = 144; ce < 256; ++ce)
  bn[ce] = 9;
for (var ce = 256; ce < 280; ++ce)
  bn[ce] = 7;
for (var ce = 280; ce < 288; ++ce)
  bn[ce] = 8;
var Sd = new Ee(32);
for (var ce = 0; ce < 32; ++ce)
  Sd[ce] = 5;
var yh = /* @__PURE__ */ dn(bn, 9, 1), gh = /* @__PURE__ */ dn(Sd, 5, 1), as = function(e) {
  for (var t = e[0], n = 1; n < e.length; ++n)
    e[n] > t && (t = e[n]);
  return t;
}, Fe = function(e, t, n) {
  var r = t / 8 | 0;
  return (e[r] | e[r + 1] << 8) >> (t & 7) & n;
}, os = function(e, t) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (t & 7);
}, vh = function(e) {
  return (e + 7) / 8 | 0;
}, bh = function(e, t, n) {
  return (n == null || n > e.length) && (n = e.length), new Ee(e.subarray(t, n));
}, wh = [
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
], Ge = function(e, t, n) {
  var r = new Error(t || wh[e]);
  if (r.code = e, Error.captureStackTrace && Error.captureStackTrace(r, Ge), !n)
    throw r;
  return r;
}, xh = function(e, t, n, r) {
  var c = e.length, i = 0;
  if (!c || t.f && !t.l)
    return n || new Ee(0);
  var s = !n, a = s || t.i != 2, o = t.i;
  s && (n = new Ee(c * 3));
  var p = function(U) {
    var F = n.length;
    if (U > F) {
      var B = new Ee(Math.max(F * 2, U));
      B.set(n), n = B;
    }
  }, m = t.f || 0, g = t.p || 0, u = t.b || 0, f = t.l, w = t.d, x = t.m, v = t.n, S = c * 8;
  do {
    if (!f) {
      m = Fe(e, g, 1);
      var b = Fe(e, g + 1, 3);
      if (g += 3, b)
        if (b == 1)
          f = yh, w = gh, x = 9, v = 5;
        else if (b == 2) {
          var h = Fe(e, g, 31) + 257, I = Fe(e, g + 10, 15) + 4, A = h + Fe(e, g + 5, 31) + 1;
          g += 14;
          for (var P = new Ee(A), T = new Ee(19), j = 0; j < I; ++j)
            T[ph[j]] = Fe(e, g + j * 3, 7);
          g += I * 3;
          for (var O = as(T), R = (1 << O) - 1, E = dn(T, O, 1), j = 0; j < A; ) {
            var D = E[Fe(e, g, R)];
            g += D & 15;
            var y = D >> 4;
            if (y < 16)
              P[j++] = y;
            else {
              var q = 0, V = 0;
              for (y == 16 ? (V = 3 + Fe(e, g, 3), g += 2, q = P[j - 1]) : y == 17 ? (V = 3 + Fe(e, g, 7), g += 3) : y == 18 && (V = 11 + Fe(e, g, 127), g += 7); V--; )
                P[j++] = q;
            }
          }
          var G = P.subarray(0, h), J = P.subarray(h);
          x = as(G), v = as(J), f = dn(G, x, 1), w = dn(J, v, 1);
        } else
          Ge(1);
      else {
        var y = vh(g) + 4, d = e[y - 4] | e[y - 3] << 8, l = y + d;
        if (l > c) {
          o && Ge(0);
          break;
        }
        a && p(u + d), n.set(e.subarray(y, l), u), t.b = u += d, t.p = g = l * 8, t.f = m;
        continue;
      }
      if (g > S) {
        o && Ge(0);
        break;
      }
    }
    a && p(u + 131072);
    for (var M = (1 << x) - 1, k = (1 << v) - 1, z = g; ; z = g) {
      var q = f[os(e, g) & M], N = q >> 4;
      if (g += q & 15, g > S) {
        o && Ge(0);
        break;
      }
      if (q || Ge(2), N < 256)
        n[u++] = N;
      else if (N == 256) {
        z = g, f = null;
        break;
      } else {
        var _ = N - 254;
        if (N > 264) {
          var j = N - 257, $ = gd[j];
          _ = Fe(e, g, (1 << $) - 1) + xd[j], g += $;
        }
        var C = w[os(e, g) & k], L = C >> 4;
        C || Ge(3), g += C & 15;
        var J = mh[L];
        if (L > 3) {
          var $ = vd[L];
          J += os(e, g) & (1 << $) - 1, g += $;
        }
        if (g > S) {
          o && Ge(0);
          break;
        }
        a && p(u + 131072);
        var H = u + _;
        if (u < J) {
          var Q = i - J, Z = Math.min(J, H);
          for (Q + u < 0 && Ge(3); u < Z; ++u)
            n[u] = r[Q + u];
        }
        for (; u < H; ++u)
          n[u] = n[u - J];
      }
    }
    t.l = f, t.p = z, t.b = u, t.f = m, f && (m = 1, t.m = x, t.d = w, t.n = v);
  } while (!m);
  return u != n.length && s ? bh(n, 0, u) : n.subarray(0, u);
}, Sh = /* @__PURE__ */ new Ee(0), Ih = function(e) {
  (e[0] != 31 || e[1] != 139 || e[2] != 8) && Ge(6, "invalid gzip data");
  var t = e[3], n = 10;
  t & 4 && (n += (e[10] | e[11] << 8) + 2);
  for (var r = (t >> 3 & 1) + (t >> 4 & 1); r > 0; r -= !e[n++])
    ;
  return n + (t & 2);
}, Ah = function(e) {
  var t = e.length;
  return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
};
function qh(e, t) {
  var n = Ih(e);
  return n + 8 > e.length && Ge(6, "invalid gzip data"), xh(e.subarray(n, -8), { i: 2 }, new Ee(Ah(e)), t);
}
var $h = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Rh = 0;
try {
  $h.decode(Sh, { stream: !0 }), Rh = 1;
} catch {
}
function _c(e) {
  return Object.assign(new RangeError(`Cannot create a buffer larger than maxOutputLength ${e}.`), { code: "ERR_BUFFER_TOO_LARGE" });
}
function _h(e, t = {}) {
  const n = t.maxOutputLength ?? Number.MAX_SAFE_INTEGER;
  if (e.length >= 18) {
    const c = e.length - 4;
    if ((e[c] | e[c + 1] << 8 | e[c + 2] << 16 | e[c + 3] << 24) >>> 0 > n) throw _c(n);
  }
  const r = qh(e);
  if (r.length > n) throw _c(n);
  return r;
}
const jc = 131072, jh = 2 * 1024 * 1024;
class qi extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "StatusListError";
  }
}
function Ph(e, t = jh) {
  if (typeof e != "string" || !/^u[A-Za-z0-9_-]+$/.test(e))
    throw new qi("MALFORMED", 'encodedList must be multibase base64url (prefix "u").');
  let n;
  try {
    n = _h(Eh(e.slice(1)), { maxOutputLength: t });
  } catch (r) {
    throw r.code === "ERR_BUFFER_TOO_LARGE" || /maxOutputLength|buffer/i.test(String(r)) ? new qi("TOO_LARGE", `Decompressed status list exceeds ${t} bytes.`) : new qi("MALFORMED", "encodedList is not valid GZIP data.");
  }
  if (n.byteLength * 8 < jc)
    throw new qi("TOO_SHORT", `Status list has fewer than ${jc} bits.`);
  return new Uint8Array(n);
}
function Eh(e) {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", n = new Uint8Array(Math.floor(e.length * 6 / 8));
  let r = 0, c = 0, i = 0;
  for (const s of e)
    r = r << 6 | t.indexOf(s), c += 6, c >= 8 && (c -= 8, n[i++] = r >> c & 255);
  return n;
}
function Ch(e, t) {
  const n = e[Math.floor(t / 8)];
  if (n === void 0) throw new RangeError(`Status index ${t} is outside the list.`);
  return (n >> 7 - t % 8 & 1) === 1;
}
function Id(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function vs(e, t) {
  const n = e.credentialStatus;
  if (n === void 0) return {};
  const r = Array.isArray(n) ? n : [n];
  if (r.length === 0 || !r.every(Id)) return { reason: "Unsupported credentialStatus form." };
  const c = r.filter((i) => t.includes(String(i.statusPurpose)));
  return c.length > 1 ? { reason: `Several status entries for ${t.join("/")}.` } : c.length === 0 ? { reason: `No status entry has an accepted purpose (${t.join(", ")}); found ${r.map((i) => String(i.statusPurpose)).join(", ")}.` } : { entry: c[0] };
}
function Th(e, t, n, r, c, i = c) {
  const s = vs(e, r.purposes), a = s.entry;
  if (a === void 0 && s.reason === void 0)
    return r.required ? { state: "not_established", reason: "Status is required by the profile but the credential names none.", sources: [] } : { state: "established", reason: "The profile does not require status for this credential.", sources: [] };
  if (a === void 0) return { state: "not_established", reason: s.reason, sources: ["/credentialStatus"] };
  if (a.type !== "BitstringStatusListEntry" || typeof a.statusListCredential != "string" || typeof a.statusListIndex != "string")
    return { state: "not_established", reason: "Unsupported credentialStatus form.", sources: ["/credentialStatus"] };
  const o = a.statusListCredential, p = ["/credentialStatus", o];
  if (t === void 0)
    return { state: "not_established", reason: `Status list ${o} is unavailable.`, listUri: o, sources: p };
  if (n !== "established")
    return { state: "not_established", reason: `Status list ${o} is not protected and valid.`, listUri: o, sources: p };
  if (t.id !== o)
    return { state: "not_established", reason: `Resolved status list identifies itself as ${String(t.id)}.`, listUri: o, sources: p };
  if (t.issuer !== e.issuer)
    return { state: "not_established", reason: `Status list is signed by ${String(t.issuer)}, who may not state status for credentials of ${String(e.issuer)}.`, listUri: o, sources: p };
  const m = t.credentialSubject;
  if (!Id(m) || m.type !== "BitstringStatusList" || m.statusPurpose !== a.statusPurpose)
    return { state: "not_established", reason: "Status list purpose does not match the entry.", listUri: o, sources: p };
  const g = Date.parse(c), u = Date.parse(String(t.validFrom));
  if (!Number.isFinite(g) || !Number.isFinite(u) || (g - u) / 1e3 > r.maxAgeSeconds)
    return { state: "not_established", reason: `Status list is older than the profile's ${r.maxAgeSeconds} s freshness limit.`, listUri: o, sources: p };
  const f = Date.parse(i);
  if (!Number.isFinite(f) || f < u)
    return { state: "not_established", reason: `Status list observed at ${String(t.validFrom)} cannot establish status at the earlier activity time ${i}; historical status is unavailable.`, listUri: o, sources: p };
  if (!/^(0|[1-9][0-9]*)$/.test(a.statusListIndex))
    return { state: "not_established", reason: "statusListIndex is not a non-negative integer.", listUri: o, sources: p };
  let w;
  try {
    w = Ch(Ph(m.encodedList), Number(a.statusListIndex));
  } catch (S) {
    return { state: "not_established", reason: `Status list cannot be read: ${S.message}`, listUri: o, sources: p };
  }
  const [x, v] = a.statusPurpose === "suspension" ? ["Suspended", "Not suspended"] : ["Revoked", "Not revoked"];
  return w ? { state: "contradicted", reason: `${x}: bit ${a.statusListIndex} of ${o} is set.`, listUri: o, sources: p } : { state: "established", reason: `${v}: bit ${a.statusListIndex} of ${o} is clear.`, listUri: o, sources: p };
}
const Mh = Object.freeze({ maxResources: 1e3, maxBytes: 2e7 });
function Ds(e, t, n) {
  if (!(e.binding.id === t.id && e.binding.version === t.version && e.profile.id === n.id && e.profile.version === n.version))
    return `Requested ${e.profile.id}@${e.profile.version} with binding ${e.binding.id}@${e.binding.version} is not the verifier-selected profile ${n.id}@${n.version} for ${t.id}@${t.version}.`;
}
function zs(e, t) {
  const n = `${e.targetId} | plan`;
  return zi({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: [],
    authorization: e.selectedClaims.map((r) => ({
      claimId: r.id,
      routeWitnessIds: [],
      ...en("Not evaluated: the plan was refused at gate 0.")
    })),
    support: [],
    conformity: e.conformity ? { requested: !0, ...e.conformity, ...en("Not evaluated: the plan was refused at gate 0.") } : { requested: !1, execution: "not_run" },
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
async function Us(e, t, n, r, c) {
  const i = Ys(t.openSession({
    maxResources: e.resolverLimits.maxResources,
    maxBytes: e.resolverLimits.maxBytes
  })), s = Ys(t.openSession(Mh)), a = { manifest: n, evaluationTime: e.evaluationTime, staticResolver: s, ...c ? { binding: c } : {} }, o = (h) => JSON.parse(new TextDecoder().decode(i.resolve(h).bytes)), p = await Ai(e.targetId, i, a), m = [p], g = /* @__PURE__ */ new Map([[e.targetId, 0]]);
  for (const h of e.suppliedEvidence)
    g.has(h) || (g.set(h, 1), m.push(await Ai(h, i, a)));
  for (let h = 0; h < m.length; h++) {
    const I = m[h], A = g.get(I.artifactId);
    if (I.protection.state !== "established" || A + 1 > e.resolverLimits.maxDepth) continue;
    const P = o(I.artifactId), T = [
      ...(Array.isArray(P.termsOfUse) ? P.termsOfUse : []).map((j) => j?.authorizationCredential?.id),
      ...(Array.isArray(P.evidence) ? P.evidence : []).map((j) => j?.id)
    ].filter((j) => typeof j == "string");
    for (const j of T)
      g.has(j) || (g.set(j, A + 1), m.push(await Ai(j, i, a)));
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
    const P = g.get(h) + 1;
    if (P > e.resolverLimits.maxDepth)
      return {
        state: "not_established",
        sources: ["/credentialStatus"],
        reason: `Status list is at depth ${P}, beyond the request's maxDepth ${e.resolverLimits.maxDepth}.`
      };
    const T = vs(I, A.purposes).entry, j = typeof T?.statusListCredential == "string" ? T.statusListCredential : void 0;
    let O, R = "not_established";
    if (j !== void 0) {
      u.has(j) || u.set(j, await Ai(j, i, a));
      const E = u.get(j);
      E.digestSRI !== void 0 && E.protection.state === "established" ? (O = o(j), R = Se([E.protection.state, E.validity.state])) : E.digestSRI !== void 0 && (O = {}, R = E.protection.state);
    }
    return Th(I, O, R, A, e.evaluationTime, e.activityTime);
  }, v = { required: !0, purposes: ["suspension"], maxAgeSeconds: r.credentialStatus.maxAgeSeconds }, S = /* @__PURE__ */ new Map();
  for (const h of m) {
    if (h.protection.state !== "established") {
      f.set(h.artifactId, void 0);
      continue;
    }
    const I = o(h.artifactId);
    f.set(h.artifactId, await x(h.artifactId, I, r.credentialStatus)), vs(I, ["suspension"]).entry !== void 0 && S.set(h.artifactId, await x(h.artifactId, I, v));
  }
  const b = (h) => [
    h.protection,
    w.get(h.artifactId) ? {
      artifactId: h.artifactId,
      ...w.get(h.artifactId),
      reasons: w.get(h.artifactId).reasons.map((I) => `identity: ${I}`)
    } : { artifactId: h.artifactId, ...en("identity: Not evaluated because protection is not established.") },
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
      ...en("status: Not evaluated because protection is not established.")
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
    ], A = Se(I.map((T) => T[1])), P = S.get(h.artifactId);
    y.set(h.artifactId, {
      uri: h.artifactId,
      usable: A,
      reason: I.filter((T) => T[1] !== "established").map((T) => `${T[0]}: ${T[2]}`).join("; ") || "usable",
      ...A === "established" ? { document: o(h.artifactId) } : {},
      ...P ? { suspension: { state: P.state, reason: P.reason } } : {}
    });
  }
  const d = [], l = [];
  m.forEach((h, I) => {
    const A = I === 0 ? "target" : "supplied-evidence", P = Zi(h.artifactId, h.digestSRI, A, e);
    for (const O of h.checks)
      d.push({
        gate: ah[O.check],
        nodeUse: P,
        predicate: O.check,
        state: O.state,
        execution: "executed",
        reason: O.reason,
        sources: [h.artifactId]
      });
    for (const O of h.relatedResources)
      d.push({
        gate: 1,
        nodeUse: P,
        predicate: "related-resource-integrity",
        state: O.state,
        execution: "executed",
        reason: `${O.id}: ${O.reason}`,
        sources: ["/relatedResource", O.id]
      });
    const T = w.get(h.artifactId);
    d.push(T ? {
      gate: 1,
      nodeUse: P,
      predicate: "resource-identity",
      state: T.state,
      execution: "executed",
      reason: T.reasons.join(" "),
      sources: [...T.sourcePointers]
    } : {
      gate: 1,
      nodeUse: P,
      predicate: "resource-identity",
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated because protection is not established.",
      sources: []
    }), d.push({
      gate: 3,
      nodeUse: P,
      predicate: "validity-period",
      state: h.validity.state,
      execution: h.validity.execution,
      reason: h.validity.reasons.join(" ") || "Not evaluated.",
      sources: [...h.validity.sourcePointers]
    });
    const j = f.get(h.artifactId);
    d.push(j ? {
      gate: 3,
      nodeUse: P,
      predicate: "credential-status",
      state: j.state,
      execution: "executed",
      reason: j.reason,
      sources: [...j.sources]
    } : {
      gate: 3,
      nodeUse: P,
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
    verificationOf: b,
    artifactVerification: m.flatMap(b),
    trace: d,
    resources: l
  };
}
const kh = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/, Vs = Object.freeze({ "kg/kg": 0, "mg/kg": -6 });
function Ki(e) {
  if (typeof e != "string" || !kh.test(e)) return;
  const [t, n = ""] = e.split(".");
  return { n: BigInt(`${t}${n}`), scale: n.length };
}
function hn(e, t) {
  const n = Ki(e), r = typeof t == "string" ? Vs[t] : void 0;
  if (!(n === void 0 || r === void 0))
    return r <= 0 ? { n: n.n, scale: n.scale - r } : { n: n.n * 10n ** BigInt(r), scale: n.scale };
}
function $e(e, t) {
  const n = Math.max(e.scale, t.scale), r = e.n * 10n ** BigInt(n - e.scale), c = t.n * 10n ** BigInt(n - t.scale);
  return r < c ? -1 : r > c ? 1 : 0;
}
function Oh(e, t) {
  const n = Math.max(e.scale, t.scale);
  return { n: e.n * 10n ** BigInt(n - e.scale) + t.n * 10n ** BigInt(n - t.scale), scale: n };
}
function ln(e) {
  const t = e.n.toString().padStart(e.scale + 1, "0");
  if (e.scale === 0) return t;
  const n = t.slice(-e.scale).replace(/0+$/, "");
  return n.length === 0 ? t.slice(0, -e.scale) : `${t.slice(0, -e.scale)}.${n}`;
}
function bs(e) {
  const t = e.range;
  if (t === void 0) return "Scope record has no range.";
  const n = hn(t.from, t.unit), r = hn(t.to, t.unit);
  return n === void 0 || r === void 0 ? `Unsupported or malformed range ${String(t.from)}–${String(t.to)} ${String(t.unit)}.` : $e(n, r) > 0 ? "Scope record range is reversed." : { low: n, high: r };
}
const $i = (e) => Array.isArray(e) ? e.filter((t) => typeof t == "string") : [], Pc = (e, t) => e.length > 0 && e.every((n) => t.includes(n));
function Nh(e, t) {
  if (e.length === 0) return { state: "not_established", reason: "The projected scope has no records.", witnesses: [] };
  const n = [];
  for (const r of e) {
    const c = bs(r);
    if (typeof c == "string")
      return { state: /reversed/.test(c) ? "contradicted" : "not_established", reason: `${String(r.id)}: ${c}`, witnesses: n };
    const i = $i(r.allowedPropertyIris), s = $i(r.allowedMethodIris);
    if (i.length === 0 || s.length === 0 || typeof r.matrixIri != "string" || typeof r.formIri != "string" || typeof r.quantityKindIri != "string")
      return { state: "not_established", reason: `${String(r.id)}: a restricted dimension is missing or empty.`, witnesses: n };
    const a = t.find((o) => {
      const p = bs(o);
      return typeof p != "string" && o.matrixIri === r.matrixIri && o.formIri === r.formIri && o.quantityKindIri === r.quantityKindIri && Pc(i, $i(o.allowedPropertyIris)) && Pc(s, $i(o.allowedMethodIris)) && $e(c.low, p.low) >= 0 && $e(c.high, p.high) <= 0;
    });
    if (a === void 0)
      return { state: "contradicted", reason: `${String(r.id)} is not contained in any single parent record.`, witnesses: n };
    n.push({ child: String(r.id), parent: String(a.id) });
  }
  return { state: "established", reason: `Each projected record lies within one parent record (${n.map((r) => `${r.child} ⊆ ${r.parent}`).join("; ")}).`, witnesses: n };
}
const un = "https://vc4qi.example/bindings/rm/1#", pn = Object.freeze({
  issueRmCertificate: `${un}issueRmCertificate`,
  maintainRmScope: `${un}maintainRmScope`,
  issueRmStudy: `${un}issueRmStudy`
}), qe = (e, t, n = []) => ({ id: e, state: "established", reason: t, sources: n }), Oe = (e, t, n = []) => ({ id: e, state: "contradicted", reason: t, sources: n }), he = (e, t, n = []) => ({ id: e, state: "not_established", reason: t, sources: n }), wt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), ke = (e) => Array.isArray(e) ? e : [], Je = (e) => wt(e.credentialSubject) ? e.credentialSubject : {}, ws = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0, nt = (e, t) => ke(Je(e).permittedActivity).includes(t);
function Ad(e, t = "RmAuthorizationPolicy") {
  return ke(e.termsOfUse).filter(wt).filter((n) => n.type === t && wt(n.authorizationCredential)).map((n) => n.authorizationCredential).filter((n) => typeof n.id == "string").map((n) => ({ id: n.id, type: n.type }));
}
function He(e, t, n, r, c, i = "RmAuthorizationPolicy") {
  const s = Ad(t, i).filter((p) => p.type === n).map((p) => p.id);
  if (s.length === 0)
    return { basis: he(e, `No recognized authorization policy references a ${n}.`, ["/termsOfUse"]) };
  if (s.length > 1)
    return { basis: he(e, `Several ${n} references; this binding has no deterministic selection.`, ["/termsOfUse"]) };
  const a = s[0];
  if (c.includes(a))
    return { basis: he(e, `Circular authorization: ${a} is already on the evaluation path.`, ["/termsOfUse", a]) };
  const o = r(a);
  return o === void 0 ? { basis: he(e, `Referenced ${n} ${a} is unavailable.`, ["/termsOfUse", a]) } : o.usable !== "established" || o.document === void 0 ? { basis: {
    id: e,
    state: o.usable === "contradicted" ? "contradicted" : "not_established",
    reason: `Referenced ${n} ${a} is not usable: ${o.reason}`,
    sources: ["/termsOfUse", a]
  } } : ws(o.document) !== n ? { basis: Oe(e, `Reference declares ${n}, but ${a} is a ${String(ws(o.document))}.`, ["/termsOfUse", a]) } : { basis: qe(e, `References ${n} ${a}.`, ["/termsOfUse", a]), node: o };
}
function it(e, t, n, r) {
  const c = Je(t).id;
  return typeof c != "string" || typeof n != "string" ? he(e, `${r}: grantee or exercising actor is missing.`, ["/credentialSubject/id", "/issuer"]) : c === n ? qe(e, `${r}: grantee ${c} is the exercising actor.`, ["/credentialSubject/id", "/issuer"]) : Oe(e, `${r}: grantee ${c} is not the exercising actor ${n}.`, ["/credentialSubject/id", "/issuer"]);
}
function St(e, t, n, r) {
  const c = r.trustAnchors.find((i) => i.id === t.issuer);
  return c === void 0 ? he(e, `${String(t.issuer)} is not a configured trust anchor.`, ["/issuer"]) : c.purposes.includes(n) ? qe(e, `${String(t.issuer)} is a configured anchor for ${n}.`, ["/issuer"]) : he(e, `${String(t.issuer)} is an anchor, but not for ${n}.`, ["/issuer"]);
}
function It(e, t) {
  const n = "scope-in-force-at-activity", r = Je(e).activityTime, c = Date.parse(String(r));
  if (typeof r != "string" || !Number.isFinite(c))
    return he(n, "The certificate states no activity time.", ["/credentialSubject/activityTime"]);
  for (const [i, s] of t) {
    const a = Date.parse(String(s.validFrom)), o = Date.parse(String(s.validUntil));
    if (!Number.isFinite(a) || c < a)
      return he(n, `${i} is valid only from ${String(s.validFrom)}, after the activity at ${r}; a later scope cannot authorize it.`, ["/credentialSubject/activityTime", "/validFrom"]);
    if (Number.isFinite(o) && c > o)
      return he(n, `${i} expired at ${String(s.validUntil)}, before the activity at ${r}.`, ["/credentialSubject/activityTime", "/validUntil"]);
  }
  return qe(n, `${t.map((i) => i[0]).join(" and ")} ${t.length > 1 ? "were" : "was"} in force at the activity time ${r}.`, ["/credentialSubject/activityTime"]);
}
function ue(e, t, n, r) {
  return { id: e, state: Se(t.map((c) => c.state)), execution: "executed", bases: t, chain: n, ...r ? { scope: r } : {} };
}
function Lh(e, t, n, r) {
  const c = e.document, i = [], s = [e.uri], a = He("authorizing-reference", c, "RmOperationalScope", t, r);
  if (i.push(a.basis), !a.node) return ue("operational-scope", i, s);
  const o = a.node.document;
  s.push(a.node.uri), i.push(it("principal-binding", o, c.issuer, "Operational scope O")), i.push(o.issuer === Je(o).id ? qe("self-maintained-scope", "O is issued by its own grantee.", ["/issuer"]) : Oe("self-maintained-scope", "O is not issued by its own grantee.", ["/issuer"])), i.push(nt(o, pn.issueRmCertificate) ? qe("activity-permission", "O permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : Oe("activity-permission", "O does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"]));
  const p = He("maintenance-grant", o, "RmAccreditation", t, [...r, a.node.uri]);
  if (i.push(p.basis), !p.node) return ue("operational-scope", i, s);
  const m = p.node.document;
  s.push(p.node.uri), i.push(it("accreditation-grantee", m, o.issuer, "Accreditation A")), i.push(nt(m, pn.maintainRmScope) && nt(m, pn.issueRmCertificate) ? qe("projection-permission", "A permits maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]) : Oe("projection-permission", "A does not permit maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]));
  const g = Nh(ke(Je(o).scope).filter(wt), ke(Je(m).scope).filter(wt));
  return i.push({ id: "bounded-projection", state: g.state, reason: g.reason, sources: ["/credentialSubject/scope"] }), i.push(St("trust-anchor", m, "accredit-rm-producers", n)), i.push(It(c, [["O", o], ["A", m]])), ue("operational-scope", i, s, a.node.uri);
}
function Dh(e, t, n, r) {
  const c = e.document, i = [], s = [e.uri], a = He("authorizing-reference", c, "RmAccreditation", t, r);
  if (i.push(a.basis), !a.node) return ue("direct-accreditation", i, s);
  const o = a.node.document;
  return s.push(a.node.uri), i.push(it("principal-binding", o, c.issuer, "Accreditation A")), i.push(nt(o, pn.issueRmCertificate) ? qe("activity-permission", "A permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : Oe("activity-permission", "A does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"])), i.push(St("trust-anchor", o, "accredit-rm-producers", n)), i.push(It(c, [["A", o]])), ue("direct-accreditation", i, s, a.node.uri);
}
const zh = Object.freeze({
  "operational-scope": Lh,
  "direct-accreditation": Dh
});
function Uh(e, t, n) {
  const r = "restriction:accreditation-suspension", c = e.document.issuer, i = /* @__PURE__ */ new Set([e.uri]), s = [e.document], a = [];
  for (; s.length > 0; )
    for (const m of Ad(s.shift())) {
      if (i.has(m.id)) continue;
      i.add(m.id);
      const g = t(m.id);
      if (g?.usable !== "established" || g.document === void 0) continue;
      s.push(g.document);
      const u = g.document, f = n.trustAnchors.some((w) => w.id === u.issuer && w.purposes.includes("accredit-rm-producers"));
      ws(u) === "RmAccreditation" && f && Je(u).id === c && a.push(g);
    }
  if (a.length === 0)
    return he(r, `No accreditation of ${String(c)} is reached, so the absence of a suspension is not established.`);
  const o = a.map((m) => m.suspension === void 0 ? he(r, `${m.uri} carries no suspension status.`, [m.uri]) : { id: r, state: m.suspension.state, reason: `${m.uri}: ${m.suspension.reason}`, sources: [m.uri] }), p = Se(o.map((m) => m.state));
  return {
    id: r,
    state: p,
    reason: p === "contradicted" ? `The actor's certification activity is suspended. ${o.filter((m) => m.state === "contradicted").map((m) => m.reason).join(" ")}` : o.map((m) => m.reason).join(" "),
    sources: a.map((m) => m.uri)
  };
}
const Vh = Object.freeze({
  "accreditation-suspension": Uh
});
function wn(e, t, n) {
  const r = [
    ...t,
    ...n.map((p) => ({ id: p, state: "not_established", execution: "not_run", bases: [], chain: [] }))
  ], c = e.length === 0 ? "established" : Se(e.map((p) => p.state)), i = r.length === 0 ? "not_established" : mn(r.map((p) => p.state)), s = Se([c, i]), a = r.find((p) => p.state === "established"), o = s === "established" ? `Authorized through route ${a.id}; global restrictions hold.` : c === "contradicted" ? "An applicable global restriction applies to every route." : i === "contradicted" ? "Every permitted route is contradicted." : n.length > 0 ? "The route search stopped at its budget before every route was evaluated." : "No complete route is established.";
  return { state: s, reason: o, restrictions: e, routes: r };
}
function Qi(e, t) {
  const n = e.routes.filter((c) => c.execution === "executed").map((c) => {
    const s = (c.scope === void 0 ? void 0 : t(c)) ?? he("claim-coverage", "The route did not reach a scope credential.");
    return { ...c, bases: [...c.bases, s], state: Se([c.state, s.state]) };
  }), r = e.routes.filter((c) => c.execution === "not_run").map((c) => c.id);
  return wn(e.restrictions, n, r);
}
function Fh(e, t, n) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] };
  const r = e, c = n.authority.certificateRoutes, i = n.authority.maxRoutes, s = c.slice(0, i).map((o) => {
    const p = zh[o];
    return p === void 0 ? ue(o, [he("installed-evaluator", `Route ${o} has no installed evaluator.`)], [r.uri]) : p(r, t, n, [r.uri]);
  }), a = n.authority.globalRestrictions.map((o) => {
    const p = Vh[o];
    return p === void 0 ? he(`restriction:${o}`, `Global restriction ${o} has no installed evaluator.`) : p(r, t, n);
  });
  return wn(a, s, c.slice(i));
}
function Gh(e, t, n, r) {
  const c = e.document, i = [], s = [e.uri], a = He("laboratory-authority-reference", c, "RmLabAuthority", t, r);
  if (i.push(a.basis), !a.node) return ue("laboratory-authority", i, s);
  const o = a.node.document;
  s.push(a.node.uri), i.push(it("laboratory-binding", o, c.issuer, "Laboratory authority H")), i.push(nt(o, pn.issueRmStudy) ? qe("study-permission", "H permits issuing RM studies.", ["/credentialSubject/permittedActivity"]) : Oe("study-permission", "H does not permit issuing RM studies.", ["/credentialSubject/permittedActivity"]));
  const p = Je(c), m = ke(Je(o).scope).filter(wt).some((g) => g.matrixIri === p.matrixIri && ke(g.allowedPropertyIris).includes(p.propertyIri) && ke(g.studyTypeIris).includes(p.studyTypeIri));
  return i.push(m ? qe("study-scope", "H covers this matrix, property and study type.", ["/credentialSubject/scope"]) : Oe("study-scope", "H does not cover this matrix, property and study type.", ["/credentialSubject/scope"])), i.push(St("laboratory-anchor", o, "recognize-rm-laboratories", n)), ue("laboratory-authority", i, s);
}
function Bh(e, t, n) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const r = e.document, c = ke(r.evidence).filter(wt).filter((S) => S.type === "RmStudyReference").map((S) => String(S.id));
  if (c.length === 0)
    return { state: "not_established", reason: "D cites no required study.", bases: [he("study-reference", "No RmStudyReference in evidence.", ["/evidence"])], chain: [e.uri] };
  if (c.length > 1)
    return { state: "not_established", reason: "Several study references; this binding has no composition for them.", bases: [he("study-reference", "Ambiguous study references.", ["/evidence"])], chain: [e.uri] };
  const i = c[0], s = t(i);
  if (s === void 0) {
    const S = he("study-reference", `Required study ${i} is unavailable.`, ["/evidence", i]);
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
  const a = s.document, o = Je(a), p = Je(r), m = wt(ke(p.materialPropertiesList)[0]) ? ke(ke(p.materialPropertiesList)[0].results)[0] : void 0, g = ke(p.materials)[0], u = [qe("study-reference", `Cites study ${i}.`, ["/evidence", i])];
  u.push(o.id === p.id ? qe("same-batch", `S concerns batch ${String(o.id)}.`, ["/credentialSubject/id"]) : Oe("same-batch", `S concerns ${String(o.id)}, not batch ${String(p.id)}.`, ["/credentialSubject/id"])), u.push(o.propertyIri === m?.propertyIri && o.matrixIri === g?.matrixIri ? qe("same-property-and-matrix", "S concerns the certified property and matrix.", ["/credentialSubject/propertyIri"]) : Oe("same-property-and-matrix", "S concerns another property or matrix.", ["/credentialSubject/propertyIri"])), u.push(o.studyTypeIri === `${un}Homogeneity` && o.outcomeIri === `${un}Homogeneous` ? qe("study-outcome", "S reports the batch homogeneous.", ["/credentialSubject/outcomeIri"]) : Oe("study-outcome", "S does not report a homogeneous batch.", ["/credentialSubject/outcomeIri"]));
  const f = Date.parse(String(o.activityTime)), w = Date.parse(String(p.activityTime));
  u.push(Number.isFinite(f) && Number.isFinite(w) ? f <= w ? qe("study-precedes-certification", "The study precedes the certification activity.", ["/credentialSubject/activityTime"]) : Oe("study-precedes-certification", "The study postdates the certification activity.", ["/credentialSubject/activityTime"]) : he("study-precedes-certification", "An activity time is missing.", ["/credentialSubject/activityTime"]));
  const x = Gh(s, t, n, [e.uri, i]);
  u.push(...x.bases);
  const v = Se(u.map((S) => S.state));
  return {
    state: v,
    reason: v === "established" ? "Required study is applicable and independently authorized." : v === "contradicted" ? "Required study is contradicted." : "Required study is not established.",
    bases: u,
    chain: [e.uri, ...x.chain]
  };
}
const Rt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), qd = (e) => Array.isArray(e) ? e : [], Ec = (e) => qd(e).filter((t) => typeof t == "string"), de = (e) => String(e).split(/[#/]/).pop();
function Jh(e, t, n) {
  const r = [t], c = Rt(e.credentialSubject) ? e.credentialSubject : {}, i = qd(c.materials).filter(Rt);
  if (i.length !== 1) return { state: "not_established", reason: "The certificate must name exactly one material.", sources: ["/credentialSubject/materials"] };
  const s = i[0];
  if (!Rt(n)) return { state: "not_established", reason: `No result at ${t}.`, sources: r };
  const a = Rt(n.data) && Rt(n.data.quantity) ? n.data.quantity : void 0;
  if (a === void 0) return { state: "not_established", reason: "The result has no quantity.", sources: r };
  const o = Rt(a.unit) ? a.unit.ucumCode : void 0;
  if (typeof o != "string" || Vs[o] === void 0)
    return { state: "not_established", reason: `Unit ${String(o)} has no supported mapping (mg/kg, kg/kg).`, sources: [`${t}/data/quantity/unit`] };
  const p = Rt(a.uncertainty) ? a.uncertainty : void 0, m = Ki(p?.coverageFactor);
  if (m === void 0 || $e(m, { n: 2n, scale: 0 }) !== 0)
    return { state: "not_established", reason: `Coverage factor ${String(p?.coverageFactor)} is not the binding's k = 2.`, sources: [`${t}/data/quantity/uncertainty`] };
  const g = hn(a.value, o), u = hn(p?.expandedUncertainty, o);
  if (g === void 0 || u === void 0)
    return { state: "not_established", reason: "Value or expanded uncertainty is not a supported decimal.", sources: [`${t}/data/quantity`] };
  const f = {
    matrixIri: s.matrixIri,
    formIri: s.formIri,
    propertyIri: n.propertyIri,
    methodIri: n.methodIri,
    quantityKindIri: a.quantityKind
  }, w = Object.entries(f).filter(([, x]) => typeof x != "string").map(([x]) => x);
  return w.length > 0 ? { state: "not_established", reason: `Missing governed identifier: ${w.join(", ")}.`, sources: r } : {
    state: "established",
    reason: `Mapped ${de(f.propertyIri)} by ${de(f.methodIri)} in ${de(f.matrixIri)}: ${String(a.value)} ± ${String(p?.expandedUncertainty)} ${o} (k = 2).`,
    sources: r,
    coordinates: { ...f, value: g, uncertainty: u }
  };
}
function Hh(e, t, n, r) {
  if (t.includes(e)) return { state: "established", reason: `method ${de(e)}` };
  const c = n.find((s) => s.method === e && t.includes(s.revises));
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
function Zh(e, t, n, r) {
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: ["/credentialSubject/scope"] };
  const c = t.map((a) => {
    const o = String(a.id), p = bs(a);
    if (typeof p == "string")
      return { id: o, state: /reversed/.test(p) ? "contradicted" : "not_established", reason: `${de(o)}: ${p}` };
    const m = [];
    a.matrixIri !== e.matrixIri && m.push(`matrix ${de(e.matrixIri)} ≠ ${de(a.matrixIri)}`), a.formIri !== e.formIri && m.push(`form ${de(e.formIri)} ≠ ${de(a.formIri)}`), a.quantityKindIri !== e.quantityKindIri && m.push(`quantity kind ${de(e.quantityKindIri)} ≠ ${de(a.quantityKindIri)}`), Ec(a.allowedPropertyIris).includes(e.propertyIri) || m.push(`property ${de(e.propertyIri)} is not allowed`), $e(e.value, p.low) < 0 && m.push("value is below the range"), $e(e.value, p.high) > 0 && m.push("value is above the range");
    const g = Hh(e.methodIri, Ec(a.allowedMethodIris), n, r);
    if (m.length > 0 || g.state === "contradicted")
      return { id: o, state: "contradicted", reason: `${de(o)}: ${[...m, ...g.state === "contradicted" ? [g.reason] : []].join("; ")}` };
    if (g.state === "not_established") return { id: o, state: "not_established", reason: `${de(o)}: ${g.reason}` };
    const u = ln(Ei(p.low, "mg/kg")), f = ln(Ei(p.high, "mg/kg"));
    return {
      id: o,
      state: "established",
      reason: `${de(o)} covers ${de(e.propertyIri)}, ${g.reason}, ${de(e.matrixIri)}/${de(e.formIri)}, ${ln(Ei(e.value, "mg/kg"))} mg/kg within ${u}–${f} mg/kg`
    };
  }), i = mn(c.map((a) => a.state)), s = c.find((a) => a.state === "established");
  return {
    state: i,
    reason: s ? s.reason : `No single scope record covers the claim (${c.map((a) => a.reason).join(" | ")}).`,
    sources: ["/credentialSubject/scope"],
    ...s ? { record: s.id } : {}
  };
}
function Ei(e, t) {
  const n = Vs[t];
  return n >= 0 ? { n: e.n, scale: e.scale + n } : e.scale + n >= 0 ? { n: e.n, scale: e.scale + n } : { n: e.n * 10n ** BigInt(-(e.scale + n)), scale: 0 };
}
function Kh(e, t, n) {
  if (e.propertyIri !== t.propertyIri || e.quantityKindIri !== t.quantityKindIri)
    return { state: "not_established", reason: `Requirement ${t.id} does not apply to this claim's property and quantity kind.`, sources: [] };
  const r = hn(t.upperLimit.value, t.upperLimit.unit);
  if (r === void 0) return { state: "not_established", reason: `Requirement ${t.id} has an unsupported limit.`, sources: [] };
  const c = t.upperLimit.unit, i = (g) => ln(Ei(g, c)), s = n.acceptWhen === "value-plus-expanded-uncertainty-at-most-limit", a = s ? Oh(e.value, e.uncertainty) : e.value, o = $e(a, r) <= 0, m = `${s ? `${i(e.value)} + ${i(e.uncertainty)} = ${i(a)}` : i(e.value)} ${o ? "≤" : ">"} ${i(r)} ${c}`;
  return {
    state: o ? "established" : "contradicted",
    reason: `${o ? "Conforms" : "Does not conform"} under ${n.id}: ${m}.`,
    sources: [],
    arithmetic: m
  };
}
const Qh = /^\/credentialSubject\/materialPropertiesList\/(0|[1-9][0-9]*)\/results\/(0|[1-9][0-9]*)$/;
async function Wh(e, t, n, r) {
  if (n.id !== ea || r.binding.id !== n.id || r.binding.version !== n.version)
    throw new Error(`Profile ${r.id}@${r.version} is not configured for ${ea}@${n.version}.`);
  const c = Ds(e, n, r);
  if (c !== void 0) return Object.freeze({ result: zs(e, c), artifacts: Object.freeze([]) });
  const i = await Us(e, t, n, r), { target: s, artifacts: a, facts: o, verificationOf: p, artifactVerification: m } = i, g = (R) => o.get(R), u = Fh(o.get(e.targetId), g, r), f = Bh(o.get(e.targetId), g, r), w = u.routes.find((R) => R.state === "established"), x = o.get(e.targetId)?.document, v = (Array.isArray(n.scopeAndMapping.methodRevisions) ? n.scopeAndMapping.methodRevisions : []).filter((R) => typeof R?.method == "string" && typeof R?.revises == "string"), S = (R) => {
    const E = o.get(R)?.document?.credentialSubject;
    return Array.isArray(E?.scope) ? E.scope : [];
  }, b = e.selectedClaims.map((R) => {
    if (!(x !== void 0 && Qh.test(R.sourcePointer) && Yt(x, R.sourcePointer) !== void 0)) {
      const k = x === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${R.sourcePointer} is not a result in the usable target.`;
      return {
        claim: R,
        mapping: void 0,
        coverage: /* @__PURE__ */ new Map(),
        result: { claimId: R.id, routeWitnessIds: [], ...oe("not_established", [k]) }
      };
    }
    const D = Jh(x, R.sourcePointer, Yt(x, R.sourcePointer)), q = /* @__PURE__ */ new Map();
    if (D.coordinates === void 0)
      return { claim: R, mapping: D, coverage: q, result: {
        claimId: R.id,
        routeWitnessIds: [],
        ...oe(D.state, [`Gate 4: ${D.reason}`], [R.sourcePointer])
      } };
    const V = D.coordinates, G = Qi(u, (k) => {
      const z = Zh(V, S(k.scope), v, r.mapping.methodSuccession), N = [k.scope, ...z.sources];
      return q.set(k.id, { ...z, sources: N }), { id: "claim-coverage", state: z.state, reason: z.reason, sources: N };
    }), J = G.routes.find((k) => k.state === "established"), M = J ? q.get(J.id)?.record : void 0;
    return { claim: R, mapping: D, coverage: q, result: {
      claimId: R.id,
      routeWitnessIds: G.state === "established" && J ? [`route:${J.id}`, ...J.chain, `record:${M}`] : [],
      ...oe(G.state, [
        G.reason,
        ...J ? [q.get(J.id).reason] : [...q].map(([k, z]) => `${k}: ${z.reason}`)
      ], [R.sourcePointer])
    } };
  }), y = b.map((R) => R.result), d = [{
    obligationId: "rm-v1:required-study",
    witnessIds: f.state === "established" ? [...f.chain] : [],
    ...oe(f.state, [f.reason], ["/evidence"])
  }], l = (() => {
    if (!e.conformity) return { requested: !1, execution: "not_run" };
    const R = { requested: !0, ...e.conformity }, E = r.conformity.requirements.find((J) => J.id === e.conformity.requirementId), D = r.conformity.decisionRules.find((J) => J.id === e.conformity.decisionRuleId);
    if (!E || !D)
      return { ...R, ...oe("not_established", [`Requirement ${e.conformity.requirementId} or decision rule ${e.conformity.decisionRuleId} is not configured in the verifier profile.`]) };
    const q = b.filter((J) => J.mapping?.coordinates?.propertyIri === E.propertyIri && J.mapping.coordinates.quantityKindIri === E.quantityKindIri);
    if (q.length !== 1)
      return { ...R, ...oe("not_established", [`Requirement ${E.id} must apply to exactly one selected claim; ${q.length} match.`]) };
    const V = q[0];
    if (V.result.state !== "established")
      return { ...R, ...en(`Not evaluated: claim ${V.claim.id} is not authorized.`) };
    const G = Kh(V.mapping.coordinates, E, D);
    return { ...R, ...oe(G.state, [G.reason], [V.claim.sourcePointer]) };
  })(), h = /* @__PURE__ */ new Set([
    e.targetId,
    ...w?.chain ?? [],
    ...f.state === "established" ? f.chain : []
  ]), I = [
    ...a.filter((R) => h.has(R.artifactId)).flatMap(p).map((R) => R.state),
    ...y.map((R) => R.state),
    ...d.map((R) => R.state),
    ...l.requested ? [l.state] : []
  ], A = $s(I), P = [...i.trace], T = [...i.resources], j = Zi(s.artifactId, s.digestSRI, "target", e);
  for (const { claim: R, mapping: E, coverage: D } of b) {
    E && P.push({
      gate: 4,
      nodeUse: j,
      predicate: `claim-mapping:${R.id}`,
      state: E.state,
      execution: "executed",
      reason: E.reason,
      sources: [...E.sources]
    });
    for (const [q, V] of D)
      P.push({
        gate: 5,
        nodeUse: j,
        predicate: `claim-coverage:${R.id}:${q}`,
        state: V.state,
        execution: "executed",
        reason: V.reason,
        sources: [...V.sources]
      });
  }
  for (const R of y)
    P.push({
      gate: 5,
      nodeUse: j,
      predicate: `claim-authorization:${R.claimId}`,
      state: R.state,
      execution: R.execution,
      reason: R.reasons.join(" "),
      sources: [...R.sourcePointers]
    });
  for (const R of u.restrictions)
    P.push({
      gate: 5,
      nodeUse: j,
      predicate: R.id,
      state: R.state,
      execution: "executed",
      reason: R.reason,
      sources: [...R.sources]
    });
  P.push({
    gate: 5,
    nodeUse: j,
    predicate: "authority",
    state: u.state,
    execution: "executed",
    reason: u.reason,
    sources: w ? [...w.chain] : []
  });
  for (const R of u.routes) {
    P.push(R.execution === "not_run" ? {
      gate: 5,
      nodeUse: j,
      predicate: `route:${R.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: j,
      predicate: `route:${R.id}`,
      state: R.state,
      execution: "executed",
      reason: `Route ${R.id} is ${R.state}.`,
      sources: [...R.chain]
    });
    for (const E of R.bases)
      P.push({
        gate: 5,
        nodeUse: j,
        predicate: `route:${R.id}:${E.id}`,
        state: E.state,
        execution: "executed",
        reason: E.reason,
        sources: [...E.sources]
      });
  }
  for (const R of f.bases)
    P.push({
      gate: 6,
      nodeUse: j,
      predicate: `support:${R.id}`,
      state: R.state,
      execution: "executed",
      reason: R.reason,
      sources: [...R.sources]
    });
  for (const R of d)
    P.push({
      gate: 6,
      nodeUse: j,
      predicate: R.obligationId,
      state: R.state,
      execution: R.execution,
      reason: R.reasons.join(" "),
      sources: []
    });
  l.requested && P.push({
    gate: 6,
    nodeUse: j,
    predicate: `conformity:${l.requirementId}`,
    state: l.state,
    execution: l.execution,
    reason: l.reasons.join(" "),
    sources: []
  });
  const O = zi({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: m,
    authorization: y,
    support: d,
    conformity: l,
    decision: A,
    trace: P,
    resources: T,
    limitations: [
      "Verification failures of credentials outside the selected route and support chains are reported but do not decide the request."
    ]
  });
  return Object.freeze({ result: O, artifacts: Object.freeze(a) });
}
const xs = "https://vc4qi.example/bindings/cal/1", Xh = "https://vc4qi.example/contexts/cal/1", Ss = "https://vc4qi.example/bindings/cal/1#", Ut = "https://vc4qi.example/schemas/cal/1/", Yh = Object.freeze({
  name: "calibration v1",
  schemas: Object.freeze({
    CalAccreditation: `${Ut}accreditation.json`,
    CalOperationalScope: `${Ut}operational-scope.json`,
    CalLegalMandate: `${Ut}legal-mandate.json`,
    CalCertificate: `${Ut}certificate.json`,
    CalTestReport: `${Ut}test-report.json`,
    BitstringStatusListCredential: `${Ut}status-list.json`
  }),
  contexts: (e) => e === "BitstringStatusListCredential" ? [Qt] : [Qt, Xh]
}), Re = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Le = (e) => Array.isArray(e) ? e : [], se = (e) => String(e).split(/[#/]/).pop(), em = Object.freeze({ Pa: 0, kPa: 3, MPa: 6 });
function Be(e, t) {
  const n = Ki(e), r = typeof t == "string" ? em[t] : void 0;
  if (!(n === void 0 || r === void 0))
    return n.scale >= r ? { n: n.n, scale: n.scale - r } : { n: n.n * 10n ** BigInt(r - n.scale), scale: 0 };
}
const Ae = (e) => ln({ n: e.n, scale: e.scale + 3 });
function $d(e, t) {
  const n = [t];
  if (!Re(e) || typeof e.id != "string" || typeof e.quantityKindIri != "string")
    return { state: "not_established", reason: "The selected measurement group has no identifier or quantity kind.", sources: n };
  const r = [];
  for (const [i, s] of Le(e.results).entries()) {
    const a = Re(s) ? s : {}, o = Ki(a.coverageFactor);
    if (o === void 0 || $e(o, { n: 2n, scale: 0 }) !== 0)
      return { state: "not_established", reason: `Result ${i}: coverage factor ${String(a.coverageFactor)} is not the binding's k = 2.`, sources: n };
    const p = Be(a.value, a.unit), m = Be(a.expandedUncertainty, a.unit);
    if (p === void 0 || m === void 0)
      return { state: "not_established", reason: `Result ${i}: unit ${String(a.unit)} or a number has no supported mapping (Pa, kPa, MPa).`, sources: n };
    r.push({ value: p, uncertainty: m });
  }
  if (r.length === 0) return { state: "not_established", reason: "The measurement group has no results.", sources: n };
  const c = Le(e.methodIris).filter((i) => typeof i == "string");
  return {
    state: "established",
    reason: `Mapped ${se(e.id)}: ${se(e.quantityKindIri)}, ${r.length} result(s) in Pa, methods [${c.map(se).join(", ")}].`,
    sources: n,
    group: { id: e.id, quantityKindIri: e.quantityKindIri, methodIris: c, results: r }
  };
}
function Rd(e, t, n) {
  const r = ["/credentialSubject/scope"];
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: r };
  const c = t.map((a) => {
    const o = String(a.id), p = Re(a.range) ? a.range : {}, m = Be(p.from, p.unit), g = Be(p.to, p.unit);
    if (m === void 0 || g === void 0) return { id: o, state: "not_established", reason: `${se(o)}: unsupported or malformed range.` };
    if ($e(m, g) > 0) return { id: o, state: "contradicted", reason: `${se(o)}: range is reversed.` };
    const u = Re(a.cmcFloor) ? a.cmcFloor : void 0, f = u === void 0 ? void 0 : Be(u.value, u.unit);
    if (u !== void 0 && f === void 0) return { id: o, state: "not_established", reason: `${se(o)}: unsupported CMC floor.` };
    const w = [];
    a.quantityKindIri !== e.quantityKindIri && w.push(`quantity kind ${se(e.quantityKindIri)} ≠ ${se(a.quantityKindIri)}`);
    const x = Le(a.allowedMethodIris).filter((S) => typeof S == "string"), v = e.methodIris.filter((S) => !x.includes(S));
    return v.length > 0 && w.push(`method ${v.map(se).join(", ")} is not allowed`), e.results.forEach((S, b) => {
      ($e(S.value, m) < 0 || $e(S.value, g) > 0) && w.push(`result ${b} ${Ae(S.value)} kPa is outside ${Ae(m)}–${Ae(g)} kPa`), n && f !== void 0 && $e(S.uncertainty, f) < 0 && w.push(`result ${b} U = ${Ae(S.uncertainty)} kPa is below the admitted CMC ${Ae(f)} kPa`);
    }), w.length > 0 ? { id: o, state: "contradicted", reason: `${se(o)}: ${w.join("; ")}` } : e.methodIris.length === 0 && x.length > 0 ? {
      id: o,
      state: "not_established",
      reason: `${se(o)} restricts methods to [${x.map(se).join(", ")}], but the group names no governed method.`
    } : {
      id: o,
      state: "established",
      reason: `${se(o)} covers ${se(e.id)}: ${se(e.quantityKindIri)}, methods [${e.methodIris.map(se).join(", ")}], ${e.results.length} result(s) within ${Ae(m)}–${Ae(g)} kPa${n && f !== void 0 ? ` and not below the CMC ${Ae(f)} kPa` : ""}`
    };
  }), i = mn(c.map((a) => a.state)), s = c.find((a) => a.state === "established");
  return s ? { state: i, reason: s.reason, sources: r, record: s.id } : { state: i, reason: `No single scope record covers the group (${c.map((a) => a.reason).join(" | ")}).`, sources: r };
}
function tm(e, t, n) {
  const r = ["/credentialSubject/scope"];
  if (e.length === 0) return { state: "not_established", reason: "The operational scope has no records.", sources: r };
  const c = e.map((s) => {
    const a = Re(s.range) ? s.range : {}, o = Be(a.from, a.unit), p = Be(a.to, a.unit), m = Re(s.cmcFloor) ? s.cmcFloor : void 0, g = m === void 0 ? void 0 : Be(m.value, m.unit);
    if (o === void 0 || p === void 0 || m !== void 0 && g === void 0)
      return { state: "not_established", reason: `${se(s.id)}: unsupported or malformed range or CMC floor.` };
    const u = Le(s.allowedMethodIris), f = t.map((x) => {
      const v = Re(x.range) ? x.range : {}, S = Be(v.from, v.unit), b = Be(v.to, v.unit), y = Re(x.cmcFloor) ? x.cmcFloor : void 0, d = y === void 0 ? void 0 : Be(y.value, y.unit);
      if (S === void 0 || b === void 0 || y !== void 0 && d === void 0)
        return { state: "not_established", reason: `${se(x.id)}: unsupported or malformed range or CMC floor.` };
      const l = [];
      s.quantityKindIri !== x.quantityKindIri && l.push(`quantity kind ${se(s.quantityKindIri)} ≠ ${se(x.quantityKindIri)}`);
      const h = Le(x.allowedMethodIris), I = u.filter((A) => !h.includes(A));
      return u.length === 0 && h.length > 0 && l.push("the parent restricts methods, the child does not"), I.length > 0 && l.push(`method ${I.map(se).join(", ")} is not in ${se(x.id)}`), ($e(o, S) < 0 || $e(p, b) > 0) && l.push(`range ${Ae(o)}–${Ae(p)} kPa is not within ${Ae(S)}–${Ae(b)} kPa`), n && d !== void 0 && (g === void 0 ? l.push(`it states no CMC floor, but ${se(x.id)} admits only ${Ae(d)} kPa`) : $e(g, d) < 0 && l.push(`CMC ${Ae(g)} kPa is below the admitted ${Ae(d)} kPa`)), l.length > 0 ? { state: "contradicted", reason: `${se(s.id)} widens ${se(x.id)}: ${l.join("; ")}` } : { state: "established", reason: `${se(s.id)} lies within ${se(x.id)}` };
    });
    if (f.length === 0) return { state: "not_established", reason: "The parent grant has no records." };
    const w = mn(f.map((x) => x.state));
    return w === "established" ? f.find((x) => x.state === "established") : { state: w, reason: f.map((x) => x.reason).join(" | ") };
  }), i = Gs(c.map((s) => s.state));
  return { state: i, reason: `${i === "established" ? "Bounded projection holds" : "Bounded projection fails"}: ${c.map((s) => s.reason).join("; ")}.`, sources: r };
}
const Pt = (e) => Re(e.credentialSubject) ? e.credentialSubject : {}, Fs = (e, t, n, r, c) => nt(t, `${Ss}${n}`) ? { id: e, state: "established", reason: `${c} permits ${r}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: e, state: "contradicted", reason: `${c} does not permit ${r}.`, sources: ["/credentialSubject/permittedActivity"] }, nm = Object.freeze({
  CalCertificate: { activity: "issueCalibrationCertificate", what: "issuing calibration certificates", purpose: "accredit-calibration-laboratories" },
  CalTestReport: { activity: "issueTestReport", what: "issuing test reports", purpose: "accredit-testing-laboratories" }
}), Li = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0;
function im(e, t, n) {
  const r = e.document, c = [], i = [e.uri], s = nm[Li(r) ?? ""];
  if (s === void 0)
    return ue("direct-accreditation", [{
      id: "target-type",
      state: "not_established",
      reason: `No accreditation activity is installed for ${String(Li(r))}.`,
      sources: ["/type"]
    }], i);
  const a = He("authorizing-reference", r, "CalAccreditation", t, [e.uri], "CalAuthorizationPolicy");
  if (c.push(a.basis), !a.node) return ue("direct-accreditation", c, i);
  const o = a.node.document;
  return i.push(a.node.uri), c.push(it("principal-binding", o, r.issuer, "Accreditation CA")), c.push(Fs("activity-permission", o, s.activity, s.what, "CA")), c.push(St("trust-anchor", o, s.purpose, n)), c.push(It(r, [["CA", o]])), ue("direct-accreditation", c, i, a.node.uri);
}
function rm(e, t, n) {
  const r = e.document, c = [], i = [e.uri], s = He("authorizing-reference", r, "CalOperationalScope", t, [e.uri], "CalAuthorizationPolicy");
  if (c.push(s.basis), !s.node) return ue("operational-scope", c, i);
  const a = s.node.document;
  i.push(s.node.uri), c.push(it("principal-binding", a, r.issuer, "Operational scope O")), c.push(a.issuer === Pt(a).id ? { id: "self-maintained-scope", state: "established", reason: "O is issued by its own grantee.", sources: ["/issuer"] } : { id: "self-maintained-scope", state: "contradicted", reason: "O is not issued by its own grantee.", sources: ["/issuer"] }), c.push(Fs("activity-permission", a, "issueCalibrationCertificate", "issuing calibration certificates", "O"));
  const o = He("maintenance-grant", a, "CalAccreditation", t, [e.uri, s.node.uri], "CalAuthorizationPolicy");
  if (c.push(o.basis), !o.node) return ue("operational-scope", c, i);
  const p = o.node.document;
  i.push(o.node.uri), c.push(it("accreditation-grantee", p, a.issuer, "Accreditation CA")), c.push(nt(p, `${Ss}maintainCalibrationScope`) && nt(p, `${Ss}issueCalibrationCertificate`) ? { id: "projection-permission", state: "established", reason: "CA permits maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] } : { id: "projection-permission", state: "contradicted", reason: "CA does not permit maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] });
  const m = tm(
    Le(Pt(a).scope).filter(Re),
    Le(Pt(p).scope).filter(Re),
    n.bindingRules.applyCmcFloor === !0
  );
  return c.push({ id: "bounded-projection", state: m.state, reason: m.reason, sources: m.sources }), c.push(St("trust-anchor", p, "accredit-calibration-laboratories", n)), c.push(It(r, [["O", a], ["CA", p]])), ue("operational-scope", c, i, s.node.uri);
}
function sm(e, t, n) {
  const r = e.document, c = [], i = [e.uri], s = He("authorizing-reference", r, "CalLegalMandate", t, [e.uri], "CalAuthorizationPolicy");
  if (c.push(s.basis), !s.node) return ue("statutory-mandate", c, i);
  const a = s.node.document;
  return i.push(s.node.uri), c.push(it("principal-binding", a, r.issuer, "Mandate M")), c.push(Fs("activity-permission", a, "issueCalibrationCertificate", "issuing calibration certificates", "M")), c.push(St("trust-anchor", a, "designate-national-metrology-institutes", n)), c.push(It(r, [["M", a]])), ue("statutory-mandate", c, i, s.node.uri);
}
const _d = Object.freeze({
  "direct-accreditation": im,
  "operational-scope": rm,
  "statutory-mandate": sm
}), Gs = (e) => e.length === 0 ? "not_established" : Se(e);
function am(e, t, n, r) {
  const c = n.authority.certificateRoutes, i = c.slice(0, n.authority.maxRoutes).map((g) => {
    const u = _d[g];
    return u === void 0 ? ue(g, [{ id: "installed-evaluator", state: "not_established", reason: `Route ${g} has no installed evaluator.`, sources: [] }], [e.uri]) : u(e, t, n);
  }), s = wn([], i, c.slice(n.authority.maxRoutes)), a = Le(Pt(e.document).measurementGroups);
  if (a.length === 0)
    return { state: "not_established", reason: "The certificate has no measurement groups.", chain: [e.uri], bases: [] };
  const o = [];
  let p = [e.uri];
  a.forEach((g, u) => {
    const f = `/credentialSubject/measurementGroups/${u}`, w = $d(g, f);
    if (w.group === void 0) {
      o.push({ id: `group-${u}`, state: w.state, reason: `Group ${u}: ${w.reason}`, sources: [f] });
      return;
    }
    const x = w.group, v = Qi(s, (y) => {
      const d = Le(Pt(t(y.scope)?.document ?? {}).scope).filter(Re), l = Rd(x, d, r);
      return { id: "claim-coverage", state: l.state, reason: l.reason, sources: [y.scope, ...l.sources] };
    }), S = v.routes.find((y) => y.state === "established");
    S && (p = S.chain);
    const b = S ? `through ${S.id}` : v.routes.map((y) => `${y.id} ${y.state}: ${y.bases.filter((d) => d.state !== "established").map((d) => d.reason).join(" ")}`).join(" | ");
    o.push({ id: `group-${u}`, state: v.state, reason: `Group ${u} (${se(x.id)}) is ${v.state} ${b}`.trim(), sources: [f] });
  });
  const m = Gs(o.map((g) => g.state));
  return { state: m, reason: `The certificate's own authority is ${m}.`, chain: p, bases: o };
}
function om(e, t, n, r) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const c = e.document, i = (h) => ({ state: h.state, reason: h.reason, bases: [h], chain: [e.uri] }), s = Le(c.evidence).filter(Re).filter((h) => h.type === "CalCalibrationReference").map((h) => String(h.id));
  if (s.length === 0) return i({ id: "calibration-reference", state: "not_established", reason: "The report cites no calibration.", sources: ["/evidence"] });
  if (s.length > 1)
    return i({ id: "calibration-reference", state: "not_established", reason: "Several calibration references; this binding has no composition for them.", sources: ["/evidence"] });
  const a = s[0], o = t(a);
  if (o === void 0) return i({ id: "calibration-reference", state: "not_established", reason: `Calibration ${a} is unavailable.`, sources: ["/evidence", a] });
  if (o.usable !== "established" || o.document === void 0)
    return i({
      id: "calibration-reference",
      state: o.usable === "contradicted" ? "contradicted" : "not_established",
      reason: `Calibration ${a} is not usable: ${o.reason}`,
      sources: ["/evidence", a]
    });
  const p = o.document;
  if (Li(p) !== "CalCertificate")
    return i({ id: "calibration-reference", state: "contradicted", reason: `${a} is a ${String(Li(p))}, not a calibration certificate.`, sources: ["/evidence", a] });
  const m = Pt(c), g = Pt(p), u = [{ id: "calibration-reference", state: "established", reason: `Cites calibration ${a}.`, sources: ["/evidence", a] }];
  u.push(typeof m.instrumentIri != "string" ? { id: "same-instrument", state: "not_established", reason: "The report names no instrument.", sources: ["/credentialSubject/instrumentIri"] } : g.id === m.instrumentIri ? { id: "same-instrument", state: "established", reason: `The calibration concerns instrument ${String(m.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] } : { id: "same-instrument", state: "contradicted", reason: `The calibration concerns ${String(g.id)}, not instrument ${String(m.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] });
  const f = Le(m.measurementGroups).filter(Re).map((h) => h.quantityKindIri), w = Le(g.measurementGroups).filter(Re).map((h) => h.quantityKindIri), x = f.filter((h) => !w.includes(h));
  u.push(f.length > 0 && x.length === 0 ? { id: "same-quantity", state: "established", reason: `The calibration covers ${[...new Set(f.map(se))].join(", ")}.`, sources: ["/credentialSubject/measurementGroups"] } : {
    id: "same-quantity",
    state: f.length === 0 ? "not_established" : "contradicted",
    reason: f.length === 0 ? "The report has no measurement groups." : `The calibration does not cover ${x.map(se).join(", ")}.`,
    sources: ["/credentialSubject/measurementGroups"]
  });
  const v = Date.parse(String(m.activityTime)), S = Date.parse(String(g.activityTime)), b = Date.parse(String(p.validFrom)), y = Date.parse(String(p.validUntil));
  !Number.isFinite(v) || !Number.isFinite(S) ? u.push({ id: "calibration-precedes-use", state: "not_established", reason: "An activity time is missing.", sources: ["/credentialSubject/activityTime"] }) : (u.push(S <= v ? { id: "calibration-precedes-use", state: "established", reason: `Calibrated at ${String(g.activityTime)}, before the test at ${String(m.activityTime)}.`, sources: ["/credentialSubject/activityTime"] } : { id: "calibration-precedes-use", state: "contradicted", reason: `Calibrated at ${String(g.activityTime)}, after the test at ${String(m.activityTime)}.`, sources: ["/credentialSubject/activityTime"] }), u.push(Number.isFinite(b) && Number.isFinite(y) && b <= v && v <= y ? { id: "calibration-valid-at-use", state: "established", reason: "The calibration certificate was valid at the test.", sources: ["/validFrom", "/validUntil"] } : { id: "calibration-valid-at-use", state: "contradicted", reason: `The calibration certificate (valid ${String(p.validFrom)} to ${String(p.validUntil)}) was not valid at the test at ${String(m.activityTime)}.`, sources: ["/validFrom", "/validUntil"] }));
  const d = am(o, t, n, r);
  u.push({ id: "calibration-authority", state: d.state, reason: d.reason, sources: [a] }, ...d.bases.map((h) => ({ ...h, id: `calibration-authority:${h.id}` })));
  const l = Gs(u.map((h) => h.state));
  return {
    state: l,
    reason: l === "established" ? "The instrument calibration is applicable and independently authorized." : l === "contradicted" ? "The instrument calibration is contradicted." : "The instrument calibration is not established.",
    bases: u,
    chain: [e.uri, ...d.chain]
  };
}
const cm = /^\/credentialSubject\/measurementGroups\/(0|[1-9][0-9]*)$/;
function dm(e) {
  const t = e.bindingRules.applyCmcFloor;
  if (typeof t != "boolean")
    throw new Error(`Profile ${e.id}@${e.version} must state bindingRules.applyCmcFloor for ${xs}.`);
  return t;
}
async function lm(e, t, n, r) {
  if (n.id !== xs || r.binding.id !== n.id || r.binding.version !== n.version)
    throw new Error(`Profile ${r.id}@${r.version} is not configured for ${xs}@${n.version}.`);
  const c = dm(r), i = Ds(e, n, r);
  if (i !== void 0) return Object.freeze({ result: zs(e, i), artifacts: Object.freeze([]) });
  const s = await Us(e, t, n, r, Yh), { target: a, artifacts: o, facts: p, verificationOf: m, artifactVerification: g } = s, u = (D) => p.get(D), f = p.get(e.targetId), w = r.authority.certificateRoutes, x = f.document === void 0 ? [] : w.slice(0, r.authority.maxRoutes).map((D) => {
    const q = _d[D];
    return q === void 0 ? {
      id: D,
      state: "not_established",
      execution: "executed",
      chain: [f.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${D} has no installed evaluator.`, sources: [] }]
    } : q(f, u, r);
  }), v = f.document === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : wn([], x, w.slice(r.authority.maxRoutes)), S = v.routes.find((D) => D.state === "established"), b = (D) => {
    const q = p.get(D)?.document?.credentialSubject;
    return Array.isArray(q?.scope) ? q.scope : [];
  }, y = f.document, d = e.selectedClaims.map((D) => {
    const q = /* @__PURE__ */ new Map();
    if (y === void 0 || !cm.test(D.sourcePointer) || Yt(y, D.sourcePointer) === void 0) {
      const k = y === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${D.sourcePointer} is not a measurement group in the usable target.`;
      return { claim: D, mapping: void 0, coverage: q, result: { claimId: D.id, routeWitnessIds: [], ...oe("not_established", [k]) } };
    }
    const V = $d(Yt(y, D.sourcePointer), D.sourcePointer);
    if (V.group === void 0)
      return { claim: D, mapping: V, coverage: q, result: {
        claimId: D.id,
        routeWitnessIds: [],
        ...oe(V.state, [`Gate 4: ${V.reason}`], [D.sourcePointer])
      } };
    const G = V.group, J = Qi(v, (k) => {
      const z = Rd(G, b(k.scope), c), N = [k.scope, ...z.sources];
      return q.set(k.id, { ...z, sources: N }), { id: "claim-coverage", state: z.state, reason: z.reason, sources: N };
    }), M = J.routes.find((k) => k.state === "established");
    return { claim: D, mapping: V, coverage: q, result: {
      claimId: D.id,
      routeWitnessIds: J.state === "established" && M ? [`route:${M.id}`, ...M.chain, `record:${q.get(M.id)?.record}`] : [],
      ...oe(J.state, [
        J.reason,
        ...M ? [q.get(M.id).reason] : [...q].map(([k, z]) => `${k}: ${z.reason}`)
      ], [D.sourcePointer])
    } };
  }), l = d.map((D) => D.result), I = Array.isArray(y?.type) && y.type[1] === "CalTestReport" ? om(f, u, r, c) : void 0, A = I === void 0 ? [] : [{
    obligationId: "cal-v1:instrument-calibration",
    witnessIds: I.state === "established" ? [...I.chain] : [],
    ...oe(I.state, [I.reason], ["/evidence"])
  }], P = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...oe("not_established", ["The calibration v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, T = /* @__PURE__ */ new Set([
    e.targetId,
    ...S?.chain ?? [],
    ...I?.state === "established" ? I.chain : []
  ]), j = [
    ...o.filter((D) => T.has(D.artifactId)).flatMap(m).map((D) => D.state),
    ...l.map((D) => D.state),
    ...A.map((D) => D.state),
    ...P.requested ? [P.state] : []
  ], O = [...s.trace], R = Zi(a.artifactId, a.digestSRI, "target", e);
  for (const { claim: D, mapping: q, coverage: V } of d) {
    q && O.push({
      gate: 4,
      nodeUse: R,
      predicate: `claim-mapping:${D.id}`,
      state: q.state,
      execution: "executed",
      reason: q.reason,
      sources: [...q.sources]
    });
    for (const [G, J] of V)
      O.push({
        gate: 5,
        nodeUse: R,
        predicate: `claim-coverage:${D.id}:${G}`,
        state: J.state,
        execution: "executed",
        reason: J.reason,
        sources: [...J.sources]
      });
  }
  for (const D of l)
    O.push({
      gate: 5,
      nodeUse: R,
      predicate: `claim-authorization:${D.claimId}`,
      state: D.state,
      execution: D.execution,
      reason: D.reasons.join(" "),
      sources: [...D.sourcePointers]
    });
  O.push({
    gate: 5,
    nodeUse: R,
    predicate: "authority",
    state: v.state,
    execution: "executed",
    reason: v.reason,
    sources: S ? [...S.chain] : []
  });
  for (const D of v.routes) {
    O.push(D.execution === "not_run" ? {
      gate: 5,
      nodeUse: R,
      predicate: `route:${D.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: R,
      predicate: `route:${D.id}`,
      state: D.state,
      execution: "executed",
      reason: `Route ${D.id} is ${D.state}.`,
      sources: [...D.chain]
    });
    for (const q of D.bases)
      O.push({
        gate: 5,
        nodeUse: R,
        predicate: `route:${D.id}:${q.id}`,
        state: q.state,
        execution: "executed",
        reason: q.reason,
        sources: [...q.sources]
      });
  }
  for (const D of I?.bases ?? [])
    O.push({
      gate: 6,
      nodeUse: R,
      predicate: `support:${D.id}`,
      state: D.state,
      execution: "executed",
      reason: D.reason,
      sources: [...D.sources]
    });
  for (const D of A)
    O.push({
      gate: 6,
      nodeUse: R,
      predicate: D.obligationId,
      state: D.state,
      execution: D.execution,
      reason: D.reasons.join(" "),
      sources: []
    });
  P.requested && O.push({
    gate: 6,
    nodeUse: R,
    predicate: `conformity:${P.requirementId}`,
    state: P.state,
    execution: P.execution,
    reason: P.reasons.join(" "),
    sources: []
  });
  const E = zi({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: g,
    authorization: l,
    support: A,
    conformity: P,
    decision: $s(j),
    trace: O,
    resources: s.resources,
    limitations: [
      "Each selected measurement group is a separate required claim; the decision is their conjunction.",
      "Verification failures of credentials outside the selected route and support chains are reported but do not decide the request.",
      "The calibration v1 binding carries a JSON-LD simplification of DCC results, not native DCC XML.",
      "Fixture grants are fictional: an accreditation or statutory mandate here has no legal effect."
    ]
  });
  return Object.freeze({ result: E, artifacts: Object.freeze([...o]) });
}
const Cc = "https://vc4qi.example/bindings/gs/1", um = "https://vc4qi.example/contexts/gs/1", Wi = "https://vc4qi.example/bindings/gs/1#", _t = "https://vc4qi.example/schemas/gs/1/", pm = Object.freeze({
  name: "GS certification v1",
  schemas: Object.freeze({
    GsAccreditation: `${_t}accreditation.json`,
    GsSchemeAuthorization: `${_t}scheme-authorization.json`,
    GsCertificate: `${_t}certificate.json`,
    GsProductPassport: `${_t}product-passport.json`,
    GsTestReport: `${_t}test-report.json`,
    GsInspectionReport: `${_t}inspection-report.json`,
    BitstringStatusListCredential: `${_t}status-list.json`
  }),
  contexts: (e) => e === "BitstringStatusListCredential" ? [Qt] : [Qt, um]
}), Et = (e) => e !== null && typeof e == "object" && !Array.isArray(e), tt = (e) => Array.isArray(e) ? e : [], ee = (e) => String(e).split(/[#/]/).pop(), Ct = (e) => Et(e.credentialSubject) ? e.credentialSubject : {};
function jd(e, t) {
  const n = [t];
  if (!Et(e) || typeof e.productCategoryIri != "string")
    return { state: "not_established", reason: "The selected certification names no product category.", sources: n };
  const r = tt(e.standardIris).filter((c) => typeof c == "string");
  return {
    state: "established",
    reason: `Mapped certification of ${ee(e.productCategoryIri)} against [${r.map(ee).join(", ")}].`,
    sources: n,
    certification: { productCategoryIri: e.productCategoryIri, standardIris: r }
  };
}
function Pd(e, t, n) {
  const r = ["/credentialSubject/scope"], { productCategoryIri: c, standardIris: i } = e, s = t.map((u) => {
    const f = String(u.id), w = tt(u.standardIris);
    if (u.productCategoryIri !== c)
      return { id: f, state: "contradicted", reason: `${ee(f)}: category ${ee(c)} ≠ ${ee(u.productCategoryIri)}` };
    const x = i.filter((v) => !w.includes(v));
    return x.length > 0 ? { id: f, state: "contradicted", reason: `${ee(f)}: standard ${x.map(ee).join(", ")} is not in the accredited scope` } : i.length === 0 && w.length > 0 ? { id: f, state: "not_established", reason: `${ee(f)} restricts standards, but the certification names none` } : { id: f, state: "established", reason: `${ee(f)} covers ${ee(c)} against [${i.map(ee).join(", ")}]` };
  }), a = n.map((u) => {
    const f = String(u.id);
    return u.productCategoryIri === c ? { id: f, state: "established", reason: `${ee(f)} permits the GS mark for ${ee(c)}` } : { id: f, state: "contradicted", reason: `${ee(f)}: category ${ee(c)} ≠ ${ee(u.productCategoryIri)}` };
  }), o = (u, f) => {
    if (f.length === 0) return { state: "not_established", reason: `The ${u} scope has no records.`, record: void 0 };
    const w = f.find((x) => x.state === "established");
    return w ? { state: "established", reason: w.reason, record: w.id } : { state: mn(f.map((x) => x.state)), reason: `No single ${u} record covers it (${f.map((x) => x.reason).join(" | ")})`, record: void 0 };
  }, p = o("competence", s), m = o("scheme", a), g = Se([p.state, m.state]);
  return {
    state: g,
    reason: `Competence: ${p.reason}. Scheme: ${m.reason}.`,
    sources: r,
    ...g === "established" ? { records: [p.record, m.record] } : {}
  };
}
function Ed(e, t, n) {
  const r = e.document, c = [], i = [e.uri], s = (p, m, g, u, f, w) => {
    const x = He(`${p}-reference`, r, m, t, [e.uri], "GsAuthorizationPolicy");
    if (c.push(x.basis), !x.node) return;
    const v = x.node.document;
    return c.push(it(`${p}-grantee`, v, r.issuer, w)), c.push(nt(v, `${Wi}${g}`) ? { id: `${p}-permission`, state: "established", reason: `${w} permits ${u}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: `${p}-permission`, state: "contradicted", reason: `${w} does not permit ${u}.`, sources: ["/credentialSubject/permittedActivity"] }), c.push(St(`${p}-anchor`, v, f, n)), x.node;
  }, a = s("competence", "GsAccreditation", "certifyProducts", "certifying products", "accredit-certification-bodies", "Accreditation GS-A"), o = s("scheme", "GsSchemeAuthorization", "awardGsMark", "awarding the GS mark", "authorize-gs-certification", "Scheme authorization GS-S");
  return !a || !o ? ue("competence-and-scheme-permission", c, i) : (i.push(a.uri, o.uri), c.push(It(r, [["GS-A", a.document], ["GS-S", o.document]])), ue("competence-and-scheme-permission", c, i, a.uri));
}
function Cd(e, t) {
  const n = (r) => r === void 0 ? [] : tt(Ct(t(r)?.document ?? {}).scope).filter(Et);
  return { competence: n(e.scope), scheme: n(e.chain.length === 3 ? e.chain[2] : void 0) };
}
const fm = `${Wi}GsMark`;
function hm(e, t) {
  const n = [t];
  return !Et(e) || typeof e.markIri != "string" || typeof e.productModelIri != "string" ? { state: "not_established", reason: "The selected marking names no mark or product model.", sources: n } : e.markIri !== fm ? { state: "not_established", reason: `Mark ${ee(e.markIri)} has no interpretation in this binding.`, sources: n } : {
    state: "established",
    reason: `Mapped a GS-mark claim for model ${ee(e.productModelIri)}.`,
    sources: n,
    marking: { markIri: e.markIri, productModelIri: e.productModelIri }
  };
}
function mm(e, t) {
  const n = ["/credentialSubject/id"];
  if (t === void 0) return { state: "not_established", reason: "No certificate was reached.", sources: n };
  const r = Ct(t).id;
  return r === e.productModelIri ? { state: "established", reason: `${ee(t.id)} certifies model ${ee(r)}.`, sources: n, records: [String(t.id)] } : { state: "contradicted", reason: `${ee(t.id)} certifies ${ee(r)}, not model ${ee(e.productModelIri)}.`, sources: n };
}
function ym(e, t, n) {
  const r = e.document, c = [], i = [e.uri], s = He("certificate-reference", r, "GsCertificate", t, [e.uri], "GsAuthorizationPolicy");
  if (c.push(s.basis), !s.node) return ue("gs-certified-product", c, i);
  const a = s.node.document;
  i.push(s.node.uri);
  const o = Ct(a).manufacturerIri;
  c.push(typeof o != "string" ? { id: "manufacturer-binding", state: "not_established", reason: "The certificate names no manufacturer.", sources: ["/credentialSubject/manufacturerIri"] } : o === r.issuer ? { id: "manufacturer-binding", state: "established", reason: `The certificate names the passport issuer ${o} as manufacturer.`, sources: ["/credentialSubject/manufacturerIri", "/issuer"] } : { id: "manufacturer-binding", state: "contradicted", reason: `The certificate names ${o}, not the passport issuer ${String(r.issuer)}.`, sources: ["/credentialSubject/manufacturerIri", "/issuer"] }), c.push({ ...It(r, [["The certificate", a]]), id: "certificate-in-force" });
  const p = Ed(s.node, t, n);
  c.push(...p.bases.map((u) => ({ ...u, id: `certificate:${u.id}` })));
  const m = jd(Ct(a).certification, "/credentialSubject/certification"), g = m.certification === void 0 ? { state: m.state, reason: m.reason } : (() => {
    const { competence: u, scheme: f } = Cd(p, t);
    return Pd(m.certification, u, f);
  })();
  return c.push({ id: "certificate:claim-coverage", state: g.state, reason: g.reason, sources: ["/credentialSubject/certification"] }), i.push(...p.chain.slice(1)), ue("gs-certified-product", c, i, s.node.uri);
}
const gm = `${Wi}Pass`, vm = [
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
    activity: "inspectFactories",
    purpose: "accredit-certification-bodies",
    what: "factory inspection"
  }
], vt = (e, t, n, r, c) => t === void 0 ? { id: e, state: "not_established", reason: r, sources: c } : { id: e, state: t ? "established" : "contradicted", reason: t ? n : r, sources: c };
function bm(e, t, n) {
  const r = e.document, c = Ct(r), i = Et(c.certification) ? c.certification : {};
  return vm.map(({ obligationId: s, reference: a, type: o, activity: p, purpose: m, what: g }) => {
    const u = [], f = (A) => {
      const P = Se(u.map((j) => j.state)), T = u.find((j) => j.state === P && P !== "established");
      return {
        obligationId: s,
        state: P,
        bases: u,
        chain: A,
        reason: P === "established" ? `The ${g} applies and is independently authorized.` : `The ${g}: ${T?.reason ?? "not established"}`
      };
    }, w = tt(r.evidence).filter(Et).filter((A) => A.type === a).map((A) => String(A.id));
    if (w.length !== 1)
      return u.push({
        id: "reference",
        state: "not_established",
        sources: ["/evidence"],
        reason: w.length === 0 ? `The certificate cites no ${g}.` : `The certificate cites several ${g}s; none is chosen.`
      }), f([]);
    const x = w[0], v = t(x);
    if (v === void 0 || v.usable !== "established" || v.document === void 0)
      return u.push({
        id: "reference",
        state: v?.usable === "contradicted" ? "contradicted" : "not_established",
        sources: ["/evidence", x],
        reason: v === void 0 ? `${ee(x)} is unavailable.` : `${ee(x)} is not usable: ${v.reason}`
      }), f([]);
    const S = v.document, b = Ct(S), y = tt(S.type);
    if (u.push(vt("reference", y.includes(o), `Cites ${g} ${ee(x)}.`, `${ee(x)} is not a ${o}.`, ["/evidence", x])), s === "type-examination") {
      u.push(vt(
        "same-model",
        b.productModelIri === c.id,
        `${ee(x)} examined model ${ee(c.id)}.`,
        `${ee(x)} examined ${ee(b.productModelIri)}, not model ${ee(c.id)}.`,
        ["/credentialSubject/productModelIri"]
      ));
      const A = tt(b.standardIris), P = tt(i.standardIris), T = P.filter((j) => !A.includes(j));
      u.push(vt(
        "covers-certification",
        b.productCategoryIri === i.productCategoryIri && T.length === 0,
        `${ee(x)} covers ${ee(i.productCategoryIri)} against [${P.map(ee).join(", ")}].`,
        b.productCategoryIri !== i.productCategoryIri ? `${ee(x)} examined ${ee(b.productCategoryIri)}, not ${ee(i.productCategoryIri)}.` : `${ee(x)} did not examine ${T.map(ee).join(", ")}.`,
        ["/credentialSubject/standardIris"]
      ));
    } else
      u.push(vt(
        "same-manufacturer",
        typeof b.manufacturerIri == "string" && typeof c.manufacturerIri == "string" ? b.manufacturerIri === c.manufacturerIri : void 0,
        `${ee(x)} inspected the certificate's manufacturer.`,
        `${ee(x)} inspected ${String(b.manufacturerIri)}, not the certificate's manufacturer ${String(c.manufacturerIri)}.`,
        ["/credentialSubject/manufacturerIri"]
      ));
    u.push(vt("outcome", b.outcomeIri === gm, `${ee(x)} passed.`, `${ee(x)} did not pass (${ee(b.outcomeIri)}).`, ["/credentialSubject/outcomeIri"]));
    const d = Date.parse(String(b.activityTime)), l = Date.parse(String(c.activityTime));
    u.push(vt(
      "precedes-certification",
      Number.isFinite(d) && Number.isFinite(l) ? d <= l : void 0,
      `The ${g} (${String(b.activityTime)}) precedes the certification.`,
      Number.isFinite(d) && Number.isFinite(l) ? `The ${g} (${String(b.activityTime)}) follows the certification (${String(c.activityTime)}).` : "An activity time is missing.",
      ["/credentialSubject/activityTime"]
    ));
    const h = He("accreditation-reference", S, "GsAccreditation", t, [e.uri, x], "GsAuthorizationPolicy");
    if (u.push(h.basis), !h.node) return f([x]);
    const I = h.node.document;
    if (u.push(it("accreditation-grantee", I, S.issuer, `Accreditation ${ee(h.node.uri)}`)), u.push(vt(
      "accreditation-permission",
      nt(I, `${Wi}${p}`),
      `${ee(h.node.uri)} permits ${p}.`,
      `${ee(h.node.uri)} does not permit ${p}.`,
      ["/credentialSubject/permittedActivity"]
    )), u.push(St("accreditation-anchor", I, m, n)), u.push({ ...It(S, [[ee(h.node.uri), I]]), id: "accreditation-in-force" }), s === "type-examination") {
      const A = tt(b.standardIris), T = tt(Ct(I).scope).filter(Et).find((j) => j.productCategoryIri === b.productCategoryIri && A.every((O) => tt(j.standardIris).includes(O)));
      u.push(vt(
        "accreditation-scope",
        T !== void 0,
        `${ee(T?.id)} covers the examination.`,
        `No record of ${ee(h.node.uri)} covers ${ee(b.productCategoryIri)} against [${A.map(ee).join(", ")}].`,
        ["/credentialSubject/scope"]
      ));
    }
    return f([x, h.node.uri]);
  });
}
const wm = Object.freeze({
  "competence-and-scheme-permission": Ed,
  "gs-certified-product": ym
}), xm = "/credentialSubject/certification", Sm = "/credentialSubject/marking";
async function Im(e, t, n, r) {
  if (n.id !== Cc || r.binding.id !== n.id || r.binding.version !== n.version)
    throw new Error(`Profile ${r.id}@${r.version} is not configured for ${Cc}@${n.version}.`);
  const c = Ds(e, n, r);
  if (c !== void 0) return Object.freeze({ result: zs(e, c), artifacts: Object.freeze([]) });
  const i = await Us(e, t, n, r, pm), { target: s, artifacts: a, facts: o, verificationOf: p, artifactVerification: m } = i, g = (q) => o.get(q), u = o.get(e.targetId), f = u.document, w = r.authority.certificateRoutes, x = f === void 0 ? [] : w.slice(0, r.authority.maxRoutes).map((q) => {
    const V = wm[q];
    return V === void 0 ? {
      id: q,
      state: "not_established",
      execution: "executed",
      chain: [u.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${q} has no installed evaluator.`, sources: [] }]
    } : V(u, g, r);
  }), v = f === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : wn([], x, w.slice(r.authority.maxRoutes)), S = v.routes.find((q) => q.state === "established"), b = Array.isArray(f?.type) && f.type[1] === "GsProductPassport", y = b ? Sm : xm, d = e.selectedClaims.map((q) => {
    const V = /* @__PURE__ */ new Map();
    if (f === void 0 || q.sourcePointer !== y || Yt(f, q.sourcePointer) === void 0) {
      const $ = f === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${q.sourcePointer} is not the ${b ? "marking" : "certification statement"} of the usable target.`;
      return { claim: q, mapping: void 0, coverage: V, result: { claimId: q.id, routeWitnessIds: [], ...oe("not_established", [$]) } };
    }
    const G = Yt(f, q.sourcePointer), J = b ? hm(G, q.sourcePointer) : void 0, M = J ?? jd(G, q.sourcePointer), k = J?.marking, z = b ? void 0 : M.certification;
    if (k === void 0 && z === void 0)
      return { claim: q, mapping: M, coverage: V, result: {
        claimId: q.id,
        routeWitnessIds: [],
        ...oe(M.state, [`Gate 4: ${M.reason}`], [q.sourcePointer])
      } };
    const N = Qi(v, ($) => {
      const C = k !== void 0 ? mm(k, g($.scope)?.document) : (() => {
        const { competence: H, scheme: Q } = Cd($, g);
        return Pd(z, H, Q);
      })(), L = [...$.chain.slice(1), ...C.sources];
      return V.set($.id, { ...C, sources: L }), { id: "claim-coverage", state: C.state, reason: C.reason, sources: L };
    }), _ = N.routes.find(($) => $.state === "established");
    return { claim: q, mapping: M, coverage: V, result: {
      claimId: q.id,
      routeWitnessIds: N.state === "established" && _ ? [`route:${_.id}`, ..._.chain, ...(V.get(_.id)?.records ?? []).map(($) => `record:${$}`)] : [],
      ...oe(N.state, [
        N.reason,
        ..._ ? [V.get(_.id).reason] : [...V].map(([$, C]) => `${$}: ${C.reason}`)
      ], [q.sourcePointer])
    } };
  }), l = d.map((q) => q.result), h = f === void 0 ? void 0 : b ? x.find((q) => q.chain.length > 1)?.chain[1] : e.targetId, I = h === void 0 ? void 0 : g(h), A = f === void 0 ? [] : I?.usable === "established" && I.document !== void 0 ? bm(I, g, r) : ["type-examination", "factory-inspection"].map((q) => ({
    obligationId: q,
    state: "not_established",
    reason: "No usable GS certificate was reached, so its studies are not evaluated.",
    bases: [],
    chain: []
  })), P = A.map((q) => ({
    obligationId: `gs-v1:${q.obligationId}`,
    witnessIds: q.state === "established" ? [...q.chain] : [],
    ...oe(q.state, [q.reason], ["/evidence"])
  })), T = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...oe("not_established", ["The GS v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, j = /* @__PURE__ */ new Set([
    e.targetId,
    ...S?.chain ?? [],
    ...A.filter((q) => q.state === "established").flatMap((q) => q.chain)
  ]), O = [
    ...a.filter((q) => j.has(q.artifactId)).flatMap(p).map((q) => q.state),
    ...l.map((q) => q.state),
    ...P.map((q) => q.state),
    ...T.requested ? [T.state] : []
  ], R = [...i.trace], E = Zi(s.artifactId, s.digestSRI, "target", e);
  for (const { claim: q, mapping: V, coverage: G } of d) {
    V && R.push({
      gate: 4,
      nodeUse: E,
      predicate: `claim-mapping:${q.id}`,
      state: V.state,
      execution: "executed",
      reason: V.reason,
      sources: [...V.sources]
    });
    for (const [J, M] of G)
      R.push({
        gate: 5,
        nodeUse: E,
        predicate: `claim-coverage:${q.id}:${J}`,
        state: M.state,
        execution: "executed",
        reason: M.reason,
        sources: [...M.sources]
      });
  }
  for (const q of l)
    R.push({
      gate: 5,
      nodeUse: E,
      predicate: `claim-authorization:${q.claimId}`,
      state: q.state,
      execution: q.execution,
      reason: q.reasons.join(" "),
      sources: [...q.sourcePointers]
    });
  R.push({
    gate: 5,
    nodeUse: E,
    predicate: "authority",
    state: v.state,
    execution: "executed",
    reason: v.reason,
    sources: S ? [...S.chain] : []
  });
  for (const q of v.routes) {
    R.push(q.execution === "not_run" ? {
      gate: 5,
      nodeUse: E,
      predicate: `route:${q.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: E,
      predicate: `route:${q.id}`,
      state: q.state,
      execution: "executed",
      reason: `Route ${q.id} is ${q.state}.`,
      sources: [...q.chain]
    });
    for (const V of q.bases)
      R.push({
        gate: 5,
        nodeUse: E,
        predicate: `route:${q.id}:${V.id}`,
        state: V.state,
        execution: "executed",
        reason: V.reason,
        sources: [...V.sources]
      });
  }
  for (const q of A)
    for (const V of q.bases)
      R.push({
        gate: 6,
        nodeUse: E,
        predicate: `support:${q.obligationId}:${V.id}`,
        state: V.state,
        execution: "executed",
        reason: V.reason,
        sources: [...V.sources]
      });
  for (const q of P)
    R.push({
      gate: 6,
      nodeUse: E,
      predicate: q.obligationId,
      state: q.state,
      execution: q.execution,
      reason: q.reasons.join(" "),
      sources: []
    });
  T.requested && R.push({
    gate: 6,
    nodeUse: E,
    predicate: `conformity:${T.requirementId}`,
    state: T.state,
    execution: T.execution,
    reason: T.reasons.join(" "),
    sources: []
  });
  const D = zi({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: m,
    authorization: l,
    support: P,
    conformity: T,
    decision: $s(O),
    trace: R,
    resources: i.resources,
    limitations: [
      "The GS route is a fictional profile example (competence AND scheme permission), not a universal GS or legal rule.",
      ...b ? ["The product passport is an experimental credential in this binding, not EU Digital Product Passport conformance."] : [],
      "Verification failures of credentials outside the selected route and study chains are reported but do not decide the request.",
      "Fixture grants are fictional: an accreditation or scheme authorization here has no legal effect."
    ]
  });
  return Object.freeze({ result: D, artifacts: Object.freeze([...a]) });
}
const Is = "2026-09-25T12:00:00Z", Am = { rm: Wh, cal: lm, gs: Im }, Td = Object.fromEntries(["rm", "cal", "gs"].map((e) => [e, {
  manifest: hl(nr[e].manifest),
  profiles: Object.fromEntries(Object.entries(nr[e].profiles).map(([t, n]) => [t, $l(n)])),
  files: nr[e].files
}])), qm = (e) => String(e).split(/[#/:]/).pop() ?? "", cs = (e, t) => ({
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
}, an = (e) => ({ id: `g${e + 1}`, sourcePointer: `/credentialSubject/measurementGroups/${e}` }), $m = [
  {
    id: "direct",
    label: "Accredited lab",
    sublabel: "DCC-1",
    binding: "cal",
    profile: "cal-verifier-1",
    target: Pe.DCC1,
    claims: [an(0), an(1)],
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
    claims: [an(0)],
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
    claims: [an(0)],
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
    claims: [an(0)],
    supplied: [Pe.T],
    tamper: ['"value": "2"', '"value": "30"'],
    withhold: { uri: Pe.DCC1, label: "Withhold the instrument's calibration" }
  }
], Vt = {
  C1: "https://gs-body.vc4qi.example/credentials/GSC-1",
  TR1: "https://gs-body.vc4qi.example/credentials/TR-1",
  TR2: "https://testlab-gs.vc4qi.example/credentials/TR-2",
  TR3: "https://gs-body.vc4qi.example/credentials/TR-3"
}, Ft = (e, t, n, r, c) => ({
  id: e,
  label: t,
  sublabel: n,
  binding: "gs",
  profile: "gs-verifier-dpp-1",
  target: r,
  claims: [{ id: "mark", sourcePointer: "/credentialSubject/marking" }],
  supplied: [],
  tamper: ["-sn-", "-sn-9"],
  withhold: c
}), ds = (e) => ({ uri: e, label: "Withhold the type examination" }), ls = (e) => ({ uri: e, label: "Withhold the GS certificate" }), Tc = [
  {
    id: "rm",
    tab: "RM",
    title: "Certified reference material",
    intro: "BAM-M375a, leaded brass: may I rely on the certified arsenic value?",
    caseLabel: "Certified As mass fraction (mg/kg)",
    cases: [cs("178", "certificate"), cs("197", "hypothetical"), cs("520", "hypothetical")],
    choice: { label: "The verifier asks", options: [
      { id: "authorized", label: "Authorized?", sublabel: "no limit" },
      { id: "fit", label: "Fit for use?", sublabel: "As + U ≤ 200" }
    ] },
    note: "Certified values and material from the BAM-M375a DRMD. Accreditation body, producer, laboratory, scopes, methods and keys are fictional; BAM does not issue these credentials. 197 and 520 are hypothetical reissues."
  },
  {
    id: "dcc",
    tab: "DCC",
    title: "Calibration certificate",
    intro: "May I rely on each measurement group of this calibration?",
    caseLabel: "Issuer",
    cases: $m,
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
      Ft("in-house", "Hair dryer HD-01", "GS body tested", "https://maker.vc4qi.example/credentials/DPP-1", ds(Vt.TR1)),
      Ft("external", "Hair dryer HD-02", "external lab tested", "https://maker.vc4qi.example/credentials/DPP-3", ds(Vt.TR2)),
      Ft("toy", "Toy 001", "outside ZLS scope", "https://maker.vc4qi.example/credentials/DPP-2", ds(Vt.TR3))
    ],
    note: "Shaped like the legacy GS examples: mark → GS certificate → accreditation, ZLS-role scheme authorization, type examination and factory inspection. A fictional profile, not a legal GS rule; all parties and keys are fictional."
  },
  {
    id: "dpp",
    tab: "DPP",
    title: "Product passport",
    intro: "Is this unit really covered by the GS certificate it cites?",
    caseLabel: "Passport",
    cases: [
      Ft("unit", "Unit sn-0042", "on market after certification", "https://maker.vc4qi.example/credentials/DPP-1", ls(Vt.C1)),
      Ft("early", "Unit sn-0001", "on market before certification", "https://maker.vc4qi.example/credentials/DPP-4", ls(Vt.C1)),
      Ft("clone", "Unit sn-9999", "issued by another company", "https://clone.vc4qi.example/credentials/DPP-5", ls(Vt.C1))
    ],
    note: "An experimental passport in the GS binding, not EU Digital Product Passport (ESPR) conformance. All parties and keys are fictional."
  }
], Rm = {
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
}, Mc = (e) => {
  const t = /^https:\/\/([^./]+)\./.exec(String(e))?.[1];
  return t === void 0 ? String(e).split("#")[0].split(":").pop() : Rm[t] ?? t;
}, _m = {
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
  GsProductPassport: "GS mark · product"
};
function jm(e, t, n, r, c) {
  const i = /* @__PURE__ */ new Map();
  for (const [w, x] of Object.entries(t))
    try {
      i.set(w, JSON.parse(x));
    } catch {
    }
  const s = (w) => [
    ...(w?.termsOfUse ?? []).map((x) => x.authorizationCredential?.id).filter((x) => typeof x == "string").map((x) => ({ to: x, kind: "authority" })),
    ...(w?.evidence ?? []).map((x) => x.id).filter((x) => typeof x == "string").map((x) => ({ to: x, kind: "support" }))
  ], a = new Map(n.artifactVerification.map((w) => [w.artifactId, w.state])), o = /* @__PURE__ */ new Map([[e, 0]]), p = /* @__PURE__ */ new Set(), m = [], g = [[e, !1]], u = /* @__PURE__ */ new Set();
  for (; g.length > 0; ) {
    const [w, x] = g.shift();
    for (const { to: v, kind: S } of s(i.get(w))) {
      const b = `${w}>${v}`, y = x || S === "support";
      u.has(b) || (u.add(b), m.push({
        from: w,
        to: v,
        kind: S,
        state: y ? c : w === e ? r : a.get(v) ?? "not_established"
      }));
      const d = (o.get(w) ?? 0) + 1;
      (o.get(v) ?? -1) < d && d < 8 ? (o.set(v, d), g.push([v, y])) : y && !p.has(v) && p.add(v);
    }
  }
  return { nodes: [...o].map(([w, x]) => {
    const v = i.get(w), S = Array.isArray(v?.type) ? String(v.type[1]) : "", b = v?.credentialSubject ?? {};
    return {
      uri: w,
      name: qm(w),
      role: _m[S] ?? (S || "not supplied"),
      layer: x,
      present: v !== void 0,
      target: w === e,
      parties: v === void 0 ? "withheld" : `${Mc(v.issuer)} → ${Mc(b.id)}`,
      state: a.get(w) ?? "not_established"
    };
  }), edges: m };
}
const bt = (e) => e.length === 0 ? "not_established" : Se(e.map((t) => t.state)), kc = (e, t) => e.find((n) => n.state === t);
async function Um(e) {
  const t = Tc.find((j) => j.id === e.example) ?? Tc[0], n = t.cases.find((j) => j.id === e.caseId) ?? t.cases[0], r = Td[n.binding], c = t.id === "dcc" && e.choice === "direct-only" ? "cal-verifier-1" : n.profile, i = r.profiles[c], s = t.id === "rm" && e.choice !== "authorized" ? { requirementId: "as-mass-fraction-max-200-mg-per-kg", decisionRuleId: "guarded-acceptance-expanded-u" } : void 0, a = {}, o = r.files.filter((j) => !(e.withhold && j.uri === n.withhold.uri)).map((j) => {
    const O = e.tamper && j.uri === n.target ? j.text.replace(n.tamper[0], n.tamper[1]) : j.text, R = new TextEncoder().encode(O);
    return a[j.uri] = O, {
      uri: j.uri,
      mediaType: j.mediaType,
      origin: j.origin,
      version: j.version,
      bytes: R,
      digestSRI: O === j.text ? j.digestSRI : Di(R)
    };
  }), p = Rl({
    requestId: `urn:vc4qi:demonstrator:${t.id}:${n.id}`,
    targetId: n.target,
    selectedClaims: n.claims.map((j) => ({ ...j })),
    purpose: "demonstrator",
    binding: { id: r.manifest.id, version: r.manifest.version },
    profile: { id: i.id, version: i.version },
    trustConfigId: "https://vc4qi.example/trust/fixture-anchors",
    evaluationTime: Is,
    activityTime: Is,
    suppliedEvidence: n.supplied.filter((j) => !(e.withhold && j === n.withhold.uri)),
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5e6 },
    ...s ? { conformity: s } : {}
  }), { result: m } = await Am[n.binding](p, new ul(o), r.manifest, i), g = (j, O = () => !0) => m.trace.filter((R) => R.gate === j && O(R)), f = [...g(2), ...g(1)], w = g(3), x = [...g(0), ...g(4)], v = (j, O, R) => O === "established" ? R : (kc(j, O) ?? kc(j, "not_established"))?.reason ?? "Not evaluated.", S = m.authorization, b = S.length === 0 ? "not_established" : Se(S.map((j) => j.state)), y = b === "established" ? S.map((j) => j.reasons.at(-1)).join(" ") : S.filter((j) => j.state !== "established").map((j) => `${j.claimId}: ${j.reasons.join(" ")}`).join(" "), d = m.support, l = m.artifactVerification.find((j) => j.artifactId === n.target)?.state === "established", h = d.length > 0 ? Se(d.map((j) => j.state)) : l ? "not_required" : "not_established", I = g(6, (j) => j.predicate.startsWith("conformity:")), A = [
    {
      id: "authentic",
      state: bt(f),
      details: f,
      summary: v(f, bt(f), "Every credential is signed by its issuer's own key, and every reference matches the exact bytes.")
    },
    {
      id: "current",
      state: bt(w),
      details: w,
      summary: v(w, bt(w), "Every credential is within its validity period and not revoked.")
    },
    // "Understood" includes reading the claim itself (gate 4); a claim that was never
    // read, because its credential failed a lower gate, is not understood.
    g(4).length === 0 ? {
      id: "understood",
      state: bt(g(0)) === "contradicted" ? "contradicted" : "not_established",
      details: x,
      summary: v(g(0), bt(g(0)), "The claim was not read, because its credential did not pass the earlier checks.")
    } : {
      id: "understood",
      state: bt(x),
      details: x,
      summary: v(x, bt(x), g(4).map((j) => j.reason).join(" "))
    },
    {
      id: "authorized",
      state: b,
      summary: y,
      details: g(5, (j) => j.predicate.startsWith("claim-") || j.predicate.startsWith("restriction:") || j.predicate.startsWith("route:"))
    },
    {
      id: "supported",
      state: h,
      summary: d.length > 0 ? d.map((j) => j.reasons.join(" ")).join(" ") : l ? "This claim needs no supporting credential under the selected profile." : "Not evaluated: the credential did not pass the earlier checks.",
      details: g(6, (j) => j.predicate.startsWith("support:") || d.some((O) => O.obligationId === j.predicate))
    },
    m.conformity.requested ? {
      id: "fit",
      state: m.conformity.execution === "not_run" ? "not_asked" : m.conformity.state,
      details: I,
      summary: m.conformity.reasons.join(" ")
    } : {
      id: "fit",
      state: "not_asked",
      details: [],
      summary: t.id === "rm" ? "The verifier asked only whether the value is authorized; no limit was applied." : "This example asks only whether the claim is authorized; the binding installs no decision rule."
    }
  ], P = JSON.parse(a[n.target]), T = jm(n.target, a, m, b, h);
  return { options: e, example: t, spec: n, profile: c, result: m, questions: A, target: P, texts: a, graph: T };
}
const Vm = {
  evaluationTime: Is,
  bindings: Object.fromEntries(Object.entries(Td).map(([e, t]) => [e, `${t.manifest.id}@${t.manifest.version}`]))
};
export {
  Is as EVALUATION_TIME,
  Tc as EXAMPLES,
  Vm as buildInfo,
  Um as evaluateScenario
};
