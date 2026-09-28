var zd = Object.defineProperty;
var Zs = (e) => {
  throw TypeError(e);
};
var Ud = (e, t, n) => t in e ? zd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var tt = (e, t, n) => Ud(e, typeof t != "symbol" ? t + "" : t, n), Ks = (e, t, n) => t.has(e) || Zs("Cannot " + n);
var Qe = (e, t, n) => (Ks(e, t, "read from private field"), n ? n.call(e) : t.get(e)), bn = (e, t, n) => t.has(e) ? Zs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ti = (e, t, n, i) => (Ks(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n);
const ni = { rm: { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/rm/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/bindings.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Contexts, schemas, controller documents, signed A/H/O/S/D fixtures and status lists are pinned and verify in TypeScript and Python. The I1-I4 evaluators (protection, status, authority routes, support, claim mapping and coverage, conformity) and the current-reliance time rules are implemented, with a cross-language parity vector; an independent transformation vector is still required before selection.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/rm/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/rm/1#RmAccreditation", "https://vc4qi.example/bindings/rm/1#RmOperationalScope", "https://vc4qi.example/bindings/rm/1#RmCertificate", "https://vc4qi.example/bindings/rm/1#RmStudy", "https://vc4qi.example/bindings/rm/1#RmLabAuthority", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential"], schemaUris: ["https://vc4qi.example/schemas/rm/1/accreditation.json", "https://vc4qi.example/schemas/rm/1/operational-scope.json", "https://vc4qi.example/schemas/rm/1/certificate.json", "https://vc4qi.example/schemas/rm/1/study.json", "https://vc4qi.example/schemas/rm/1/lab-authority.json", "https://vc4qi.example/schemas/rm/1/authorization-policy.json", "https://vc4qi.example/schemas/rm/1/study-reference.json", "https://vc4qi.example/schemas/rm/1/status-list.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/rm-v1/catalog.json", decimalEncoding: "JSON strings typed xsd:decimal for every quantity, bound and uncertainty", orderedCollections: ["materials", "materialPropertiesList", "results"] }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/rm/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/rm/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/bindings/rm/1#authorizationCredential" }, { fact: "requiredStudy", nativePath: "/evidence/*/id", expandedIri: "https://www.w3.org/2018/credentials#evidence" }, { fact: "validFrom", nativePath: "/validFrom", expandedIri: "https://www.w3.org/2018/credentials#validFrom" }, { fact: "validUntil", nativePath: "/validUntil", expandedIri: "https://www.w3.org/2018/credentials#validUntil" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/rm/1#activityTime" }, { fact: "selectedResult", nativePath: "/credentialSubject/materialPropertiesList/*/results/*", expandedIri: "https://vc4qi.example/bindings/rm/1#results" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, material: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 1 }, authorizingReferenceSelection: "by-declared-reference-type-per-route; resolved credential type must match (else contradicted); several of one type not_established", supportReferences: { minimum: 1 }, multipleRecognizedDeclarations: "unsupported-unless-exact-deterministic-composition-is-listed", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "evidence", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse authorizationCredential references on the credential chain; an authenticated grant found by other means establishes nothing (not_established)" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/bindings/rm/1#RmAuthorizationPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], supportEvidence: "https://vc4qi.example/bindings/rm/1#RmStudyReference", supportEvidenceEstablishes: ["support-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "support-applicability", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { issueRmCertificate: "https://vc4qi.example/bindings/rm/1#issueRmCertificate", maintainRmScope: "https://vc4qi.example/bindings/rm/1#maintainRmScope", issueRmStudy: "https://vc4qi.example/bindings/rm/1#issueRmStudy" }, rules: ["A grantee equals the producer exercising certificate issuance and scope maintenance.", "O issuer and grantee equal that producer and O is contained by A.", "D issuer equals O grantee.", "S issuer equals H laboratory grantee.", "Commissioning a study grants no laboratory competence."] }, scopeAndMapping: { mappingVersion: "rm-experimental-mapping-1", recordEvaluator: "https://vc4qi.example/evaluators/rm-complete-record/1", quantityEvaluator: "https://vc4qi.example/evaluators/exact-mass-fraction/1", dimensions: ["matrixIri", "formIri", "propertyIri", "methodIri", "quantityKindIri", "range"], units: { "mg/kg": "1e-6", "kg/kg": "1" }, boundaries: "inclusive", missingOrEmptyRestrictedDimension: "not_established", recordCombination: "one-complete-record-per-claim-no-splicing", uncertainty: { requiredCoverageFactor: "2", nonnegative: !0, accreditationCeiling: "none" }, methodRevisions: [{ method: "https://vc4qi.example/bindings/rm/1#M2", revises: "https://vc4qi.example/bindings/rm/1#M1" }], methodSuccessionInterpretation: "verifier-profile mapping.methodSuccession: accept-successor | require-extension | none (none leaves a revised method not_established at gate 4)", claimCoverage: "the selected result, mapped at gate 4, must lie in one complete record of the route's own scope credential (O for operational-scope, A for direct-accreditation); no fallback to a parent grant", conformity: "verifier-profile requirements and decision rules, evaluated at gate 6 only after the claim is authorized; exact arithmetic reported in the requirement's unit", unsupported: ["asymmetric-uncertainty", "display-label-equality", "substring-matching", "implicit-method-succession"] }, routesAndRestrictions: { certificateRoute: ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A"], installedCertificateRoutes: { "operational-scope": ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A", "A-issuer-is-accreditation-anchor"], "direct-accreditation": ["A-authorizes-D", "A-issuer-is-accreditation-anchor"] }, studyRoute: ["H-authorizes-S"], requiredSupport: ["S", "H"], globalRestrictions: ["applicable-suspension", "request-time-policy"], installedGlobalRestrictions: { "accreditation-suspension": "every usable anchor-issued RmAccreditation of the certificate issuer reached through the target's termsOfUse references, on any route, must carry a fresh issuer suspension status (Bitstring Status List, statusPurpose suspension) with its bit clear; missing or unreadable suspension status is not_established; unusable or unreferenced credentials are not restrictions" }, unusedAlternativeFailures: "diagnostic-only: only the target and the credentials on the selected route and support chains decide the request", routeComposition: "AND-within-route-OR-between-complete-routes", baselineAlternatives: 1, provenanceDoesNotEstablish: ["permission", "containment"] }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, proofCollections: "unsupported-in-initial-slice", status: "authenticated-current-revocation-status-required-for-A-O-D-S-H; suspension entries on accreditations are read only by the accreditation-suspension restriction", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], freshness: "verifier-profile maxAgeSeconds from the status list validFrom; no default", historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { objectApplicability: ["materialBatch", "activity", "method", "activityTime"], supportSubjectNeedNotEqualTargetIssuer: !0, mandatoryDisclosure: ["issuer", "credentialSubject/id", "activityTime", "selectedResult", "restrictions", "authorizingReference", "requiredStudy", "relatedResource", "proof"], missingMandatoryDisclosure: "not_established", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/plans/standards-first-acceptance.csv", testVectorRoots: ["testdata/regressions", "bindings/experimental/rm-v1/test-vectors"], implementationEvidence: "docs/plans/evidence.md", unsupported: ["production-accreditation", "legal-effect", "physical-sample-truth", "public-example-namespace-resolution", "general-ontology-reasoning", "wallet-interoperability", "external-recognition-adapter", "timestamp-service"] } }, profiles: { "rm-verifier-1": { id: "https://vc4qi.example/profiles/rm-verifier", version: "1", status: "experimental", description: "Verifier-owned reliance profile for the experimental RM v1 binding. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "recognize-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } }, "rm-verifier-two-routes-1": { id: "https://vc4qi.example/profiles/rm-verifier-two-routes", version: "1", status: "experimental", description: "Fictional verifier profile with two complete certificate routes, (operational scope within an accreditation) OR (direct accreditation), and the accreditation-suspension global restriction outside the OR. Exercises route composition (C01-C07); not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "recognize-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope", "direct-accreditation"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
` }] }, gs: { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/gs/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/bindings.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Migrated GS certification binding for the gs-scheme-authorization use case, plus an experimental product passport (not EU DPP conformance). The gate 0-6 evaluators for the competence-and-scheme-permission and gs-certified-product routes and their coverage are implemented; statutory GS routes, test-report support, application assessments and conformity rules are not.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/gs/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/gs/1#GsAccreditation", "https://vc4qi.example/bindings/gs/1#GsSchemeAuthorization", "https://vc4qi.example/bindings/gs/1#GsCertificate", "https://vc4qi.example/bindings/gs/1#GsProductPassport", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential"], schemaUris: ["https://vc4qi.example/schemas/gs/1/accreditation.json", "https://vc4qi.example/schemas/gs/1/scheme-authorization.json", "https://vc4qi.example/schemas/gs/1/certificate.json", "https://vc4qi.example/schemas/gs/1/product-passport.json", "https://vc4qi.example/schemas/gs/1/status-list.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/gs-v1/catalog.json", orderedCollections: [], nativeRepresentation: "A JSON-LD simplification of a GS certificate; no native scheme document is carried" }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/gs/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/gs/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/bindings/gs/1#authorizationCredential" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/gs/1#activityTime" }, { fact: "certification", nativePath: "/credentialSubject/certification", expandedIri: "https://vc4qi.example/bindings/gs/1#certification" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 2 }, authorizingReferenceSelection: "by-declared-reference-type-per-route-half; resolved credential type must match (else contradicted); several of one type not_established", selectedClaims: "the certification statement at /credentialSubject/certification", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse authorizationCredential references on the credential chain" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/bindings/gs/1#GsAuthorizationPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { certifyProducts: "https://vc4qi.example/bindings/gs/1#certifyProducts", awardGsMark: "https://vc4qi.example/bindings/gs/1#awardGsMark" }, rules: ["The accreditation (competence) and the scheme authorization each name the certification body issuing the certificate.", "The accreditation permits certifying products; the scheme authorization permits awarding the GS mark.", "The accreditation issuer is anchored for accrediting certification bodies; the scheme authorization issuer for authorizing GS certification.", "Both grants were in force at the certificate's activity time.", "A product passport's GS-mark claim needs a GS certificate that names the passport issuer as manufacturer, certifies the passport's model, was in force when the unit was placed on the market and itself holds the complete route."] }, scopeAndMapping: { mappingVersion: "gs-experimental-mapping-1", dimensions: ["productCategoryIri", "standardIris"], standardRule: "one competence record must cover the category and every certified standard; a record listing standards against a certification naming none is not_established (no empty-array bypass)", schemeRule: "one scheme record must cover the category", unsupported: ["display-label-equality", "standard-edition-succession", "product-variant-inheritance"] }, routesAndRestrictions: { installedCertificateRoutes: { "competence-and-scheme-permission": ["A-referenced", "A-grantee-is-issuer", "A-permits-certification", "A-issuer-is-accreditation-anchor", "S-referenced", "S-grantee-is-issuer", "S-permits-GS-mark", "S-issuer-is-scheme-anchor", "A-and-S-in-force-at-activity", "claim-covered-by-A-and-S"], "gs-certified-product": ["C-referenced", "C-names-passport-issuer-as-manufacturer", "C-in-force-at-passport-activity", "C-holds-competence-and-scheme-permission", "C-certification-covered", "C-certifies-the-passport-model"] }, globalRestrictions: [], routeComposition: "AND-within-route-OR-between-complete-routes" }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, status: "authenticated-current-revocation-status-required", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { requiredSupport: "none in this binding", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/plans/standards-first-acceptance.csv", testVectorRoots: ["bindings/experimental/gs-v1/test-vectors"], implementationEvidence: "docs/plans/evidence.md", unsupported: ["production-accreditation", "real-gs-scheme-rules", "legal-effect", "application-assessments", "public-example-namespace-resolution", "wallet-interoperability", "timestamp-service"] } }, profiles: { "gs-verifier-1": { id: "https://vc4qi.example/profiles/gs-verifier", version: "1", status: "experimental", description: "Verifier-owned reliance profile for gs-scheme-authorization under the experimental GS certification v1 binding: the GS mark is relied on only through competence AND scheme permission. A fictional profile example, not a universal GS or legal rule.", binding: { id: "https://vc4qi.example/bindings/gs/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-certification-bodies"] }, { id: "https://scheme.vc4qi.example/controller", purposes: ["authorize-gs-certification"] }], authority: { certificateRoutes: ["competence-and-scheme-permission"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] } }, "gs-verifier-dpp-1": { id: "https://vc4qi.example/profiles/gs-verifier-dpp", version: "1", status: "experimental", description: "Verifier-owned reliance profile for experimental product passports under the GS certification v1 binding: a unit's GS-mark claim is relied on only through a GS certificate for its model that names the manufacturer and itself holds competence AND scheme permission. Fictional; not EU Digital Product Passport conformance.", binding: { id: "https://vc4qi.example/bindings/gs/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-certification-bodies"] }, { id: "https://scheme.vc4qi.example/controller", purposes: ["authorize-gs-certification"] }], authority: { certificateRoutes: ["gs-certified-product"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] } } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
}` }, { uri: "https://vc4qi.example/contexts/gs/1", mediaType: "application/ld+json", origin: "VC4QI experimental GS certification binding (repository-owned fictional fixture)", version: "1", digestSRI: "sha384-KKqa9OrMg7V/8BRJVMAozGBTMwltR1eAjJNDrYWq6514mclOsxAXX29yrNsluzYp", text: `{
  "@context": {
    "@version": 1.1,
    "@protected": true,
    "gs": "https://vc4qi.example/bindings/gs/1#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",

    "GsAccreditation": "gs:GsAccreditation",
    "GsSchemeAuthorization": "gs:GsSchemeAuthorization",
    "GsCertificate": "gs:GsCertificate",
    "GsProductPassport": "gs:GsProductPassport",
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
    "markIri": {"@id": "gs:mark", "@type": "@id"}
  }
}
` }, { uri: "https://vc4qi.example/schemas/gs/1/accreditation.json", mediaType: "application/schema+json", origin: "VC4QI experimental GS certification binding (generated by scripts/gs-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-C9bI253mf3mqHadGfDf16UF1KIetto8pTJcyiinxFvA9Ok3Xjp0tBSZZkeT5RraF", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/gs/1/accreditation.json",
  "title": "Certification body accreditation (competence)",
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
              "https://vc4qi.example/bindings/gs/1#certifyProducts"
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
` }, { uri: "https://vc4qi.example/schemas/gs/1/certificate.json", mediaType: "application/schema+json", origin: "VC4QI experimental GS certification binding (generated by scripts/gs-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-ByCI/4xE1L9IWQN4BnvcWOcvh15Tw3h9cpuDlKTFSwgNDMgBzuTdbpyeQ6j6yB+N", text: `{
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
` }, { uri: "https://scheme.vc4qi.example/controller", mediaType: "application/json", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-Hil2WbuJwLesZ8p1XC967wDzuZ661x7js5KInpzI8KoHStm0Y8M3/YIdg2lL+k0d", text: `{
  "@context": "https://www.w3.org/ns/cid/v1",
  "id": "https://scheme.vc4qi.example/controller",
  "verificationMethod": [
    {
      "id": "https://scheme.vc4qi.example/controller#key-1",
      "type": "Multikey",
      "controller": "https://scheme.vc4qi.example/controller",
      "publicKeyMultibase": "z6MkhBzP9XULargvAs8LfZXA3PWaL6Q4eHka1pQWSB9T2yUW"
    }
  ],
  "assertionMethod": [
    "https://scheme.vc4qi.example/controller#key-1"
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
` }, { uri: "https://scheme.vc4qi.example/status/gs/1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-CYQ2zqEb7KUnH3/nw07F0yaq44e5A8/Coj4Jxw4QbihaMXUa+j1zsGbsMkb4jM5C", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://scheme.vc4qi.example/status/gs/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://scheme.vc4qi.example/controller",
  "validFrom": "2026-09-01T00:00:00Z",
  "validUntil": "2027-09-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/status-list.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://scheme.vc4qi.example/status/gs/1#list",
    "type": "BitstringStatusList",
    "statusPurpose": "revocation",
    "encodedList": "uH4sIAAAAAAACA-3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAIC3AYbSVKsAQAAA"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://scheme.vc4qi.example/controller#key-1",
    "created": "2026-09-01T00:00:00Z",
    "proofValue": "z5QJ1YfB7pNmwJ93UUvtjehRypFTP3KwEvHXADLxVmfKKg2e2axE4zFjeyTnTK9d2KDYXoQNoX1anBYR5uHYbjtHr"
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
` }, { uri: "https://nab.vc4qi.example/credentials/GS-A", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-FHCV0ZQ1UNgdlsF+gnC2FiwMcrJAR7B7i1/dKsCZy/rvlBUb8kBvmaS4iGu1apJJ", text: `{
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
  "credentialSubject": {
    "id": "https://gs-body.vc4qi.example/controller",
    "permittedActivity": [
      "https://vc4qi.example/bindings/gs/1#certifyProducts"
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
    "proofValue": "z4CVMZsccqCu2u5yTNLCwLgc5VAR8XMVTwGGTq8wxwBm4qYyNntDAxAiYquBCjkGUESd5KftNEpFBzhYBCwb1q5HL"
  }
}
` }, { uri: "https://scheme.vc4qi.example/credentials/GS-S", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-sVUOHyQrdI95Wl86C37ZAOgTDBO427+pBvRCUzf1g6clBY20Ha9OsXGElwQSbash", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/gs/1"
  ],
  "id": "https://scheme.vc4qi.example/credentials/GS-S",
  "type": [
    "VerifiableCredential",
    "GsSchemeAuthorization"
  ],
  "issuer": "https://scheme.vc4qi.example/controller",
  "validFrom": "2025-01-01T00:00:00Z",
  "validUntil": "2027-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/scheme-authorization.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://gs-body.vc4qi.example/controller",
    "permittedActivity": [
      "https://vc4qi.example/bindings/gs/1#awardGsMark"
    ],
    "scope": [
      {
        "id": "https://scheme.vc4qi.example/credentials/GS-S#scope-toys",
        "productCategoryIri": "https://vc4qi.example/bindings/gs/1#Toy"
      }
    ]
  },
  "credentialStatus": {
    "id": "https://scheme.vc4qi.example/status/gs/1#0",
    "type": "BitstringStatusListEntry",
    "statusPurpose": "revocation",
    "statusListIndex": "0",
    "statusListCredential": "https://scheme.vc4qi.example/status/gs/1"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://scheme.vc4qi.example/controller#key-1",
    "created": "2025-01-01T00:00:00Z",
    "proofValue": "z4gVM5CXFzAHTyoDjzmMTobpvG73v3X63Ng1GGddjcSe4kYGHEzkPn4hSDfVDkq9c1b3FoWbnmdLiotubDUmzVKZD"
  }
}
` }, { uri: "https://gs-body.vc4qi.example/credentials/GSC-1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-uYa0WFhnYW34eDqxJMomL2qwWRNNpDu8NrbRq/1mWZRlfDsMn7qfmgIXwoMNYE+q", text: `{
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
  "credentialSubject": {
    "id": "urn:vc4qi-example:product:toy-001",
    "activityTime": "2026-02-27T10:00:00Z",
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
        "id": "https://scheme.vc4qi.example/credentials/GS-S",
        "type": "GsSchemeAuthorization"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://nab.vc4qi.example/credentials/GS-A",
      "digestSRI": "sha384-FHCV0ZQ1UNgdlsF+gnC2FiwMcrJAR7B7i1/dKsCZy/rvlBUb8kBvmaS4iGu1apJJ"
    },
    {
      "id": "https://scheme.vc4qi.example/credentials/GS-S",
      "digestSRI": "sha384-sVUOHyQrdI95Wl86C37ZAOgTDBO427+pBvRCUzf1g6clBY20Ha9OsXGElwQSbash"
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
    "proofValue": "z2Ai4fyvYsmGSF2K2B8PmKnqjhxVRVxewDZoenX64k67b4GoKRf3WA9PLUBkdeL9ewP8JnNpmEyHPRCEeVMkVAt4n"
  }
}
` }, { uri: "https://gs-body.vc4qi.example/credentials/GSC-2", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-OJJ5KiJhMYD9qTNXs8qF3y2FU8dX+JBQ3caCntz5853qRqrvZRfpIIr+syKh2SEO", text: `{
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
  "validFrom": "2026-04-01T00:00:00Z",
  "validUntil": "2031-04-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/gs/1/certificate.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "urn:vc4qi-example:product:hair-dryer-001",
    "activityTime": "2026-03-30T10:00:00Z",
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
        "id": "https://scheme.vc4qi.example/credentials/GS-S",
        "type": "GsSchemeAuthorization"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://nab.vc4qi.example/credentials/GS-A",
      "digestSRI": "sha384-FHCV0ZQ1UNgdlsF+gnC2FiwMcrJAR7B7i1/dKsCZy/rvlBUb8kBvmaS4iGu1apJJ"
    },
    {
      "id": "https://scheme.vc4qi.example/credentials/GS-S",
      "digestSRI": "sha384-sVUOHyQrdI95Wl86C37ZAOgTDBO427+pBvRCUzf1g6clBY20Ha9OsXGElwQSbash"
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
    "created": "2026-04-01T00:00:00Z",
    "proofValue": "z2tAGJaJgEDuZfLeT9g3XvZXgp2Dx3SQtaydL3kjmXfmsRGJ1S69dHAqjuWMo3P1aWyU41WzQ1K2WaXUBTUsafNhB"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/DPP-1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-zzyP6xagiT8he9OLeP66Yfcrkx9OXYJsKx1HqcIJylgeEz6OLU0CE5QFQsmqewg7", text: `{
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
  "credentialSubject": {
    "id": "urn:vc4qi-example:unit:toy-001-sn-0042",
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
        "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
        "type": "GsCertificate"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
      "digestSRI": "sha384-uYa0WFhnYW34eDqxJMomL2qwWRNNpDu8NrbRq/1mWZRlfDsMn7qfmgIXwoMNYE+q"
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
    "proofValue": "z5CRZmx3LuLtCx9ikox8H1wYsVyLq2PCYpkS1GgwJb1HQ99Pg17F7Ps27whdZnkSxbnTbXB85ZGA5vYfjGbh4CFYT"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/DPP-2", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-MB2ylQus0XmfZYGpljaMByTGyu2ZxFgrRLalXuZ7EHuS0jinnGS265zeEcBzpQWk", text: `{
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
  "credentialSubject": {
    "id": "urn:vc4qi-example:unit:hair-dryer-001-sn-0007",
    "activityTime": "2026-05-10T00:00:00Z",
    "productModelIri": "urn:vc4qi-example:product:hair-dryer-001",
    "marking": {
      "markIri": "https://vc4qi.example/bindings/gs/1#GsMark",
      "productModelIri": "urn:vc4qi-example:product:hair-dryer-001"
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
      "digestSRI": "sha384-OJJ5KiJhMYD9qTNXs8qF3y2FU8dX+JBQ3caCntz5853qRqrvZRfpIIr+syKh2SEO"
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
    "proofValue": "z529VGWQzrgoBBB1t5reuEs3ztDpjxK73BW7wwhPkJud1PwkN7hzPFTkGLyQZSrbfe9Pn1Y5YyEq4wKvoctZACKga"
  }
}
` }] } };
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Vd(e) {
  return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function As(e, ...t) {
  if (!Vd(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function Qs(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Fd(e, t) {
  As(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error("digestInto() expects output buffer of length at least " + n);
}
function ln(...e) {
  for (let t = 0; t < e.length; t++)
    e[t].fill(0);
}
function ri(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Xe(e, t) {
  return e << 32 - t | e >>> t;
}
function Bd(e) {
  if (typeof e != "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(e));
}
function zc(e) {
  return typeof e == "string" && (e = Bd(e)), As(e), e;
}
class Gd {
}
function _s(e) {
  const t = (i) => e().update(zc(i)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
function Hd(e, t, n, i) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, i);
  const c = BigInt(32), r = BigInt(4294967295), s = Number(n >> c & r), a = Number(n & r), o = i ? 4 : 0, u = i ? 0 : 4;
  e.setUint32(t + o, s, i), e.setUint32(t + u, a, i);
}
function Jd(e, t, n) {
  return e & t ^ ~e & n;
}
function Zd(e, t, n) {
  return e & t ^ e & n ^ t & n;
}
class Uc extends Gd {
  constructor(t, n, i, c) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = n, this.padOffset = i, this.isLE = c, this.buffer = new Uint8Array(t), this.view = ri(this.buffer);
  }
  update(t) {
    Qs(this), t = zc(t), As(t);
    const { view: n, buffer: i, blockLen: c } = this, r = t.length;
    for (let s = 0; s < r; ) {
      const a = Math.min(c - this.pos, r - s);
      if (a === c) {
        const o = ri(t);
        for (; c <= r - s; s += c)
          this.process(o, s);
        continue;
      }
      i.set(t.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === c && (this.process(n, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    Qs(this), Fd(t, this), this.finished = !0;
    const { buffer: n, view: i, blockLen: c, isLE: r } = this;
    let { pos: s } = this;
    n[s++] = 128, ln(this.buffer.subarray(s)), this.padOffset > c - s && (this.process(i, 0), s = 0);
    for (let g = s; g < c; g++)
      n[g] = 0;
    Hd(i, c - 8, BigInt(this.length * 8), r), this.process(i, 0);
    const a = ri(t), o = this.outputLen;
    if (o % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u = o / 4, m = this.get();
    if (u > m.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let g = 0; g < u; g++)
      a.setUint32(4 * g, m[g], r);
  }
  digest() {
    const { buffer: t, outputLen: n } = this;
    this.digestInto(t);
    const i = t.slice(0, n);
    return this.destroy(), i;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: n, buffer: i, length: c, finished: r, destroyed: s, pos: a } = this;
    return t.destroyed = s, t.finished = r, t.length = c, t.pos = a, c % n && t.buffer.set(i), t;
  }
  clone() {
    return this._cloneInto();
  }
}
const ft = /* @__PURE__ */ Uint32Array.from([
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
]), wn = /* @__PURE__ */ BigInt(2 ** 32 - 1), Xs = /* @__PURE__ */ BigInt(32);
function Kd(e, t = !1) {
  return t ? { h: Number(e & wn), l: Number(e >> Xs & wn) } : { h: Number(e >> Xs & wn) | 0, l: Number(e & wn) | 0 };
}
function Qd(e, t = !1) {
  const n = e.length;
  let i = new Uint32Array(n), c = new Uint32Array(n);
  for (let r = 0; r < n; r++) {
    const { h: s, l: a } = Kd(e[r], t);
    [i[r], c[r]] = [s, a];
  }
  return [i, c];
}
const Ws = (e, t, n) => e >>> n, Ys = (e, t, n) => e << 32 - n | t >>> n, Et = (e, t, n) => e >>> n | t << 32 - n, Ct = (e, t, n) => e << 32 - n | t >>> n, xn = (e, t, n) => e << 64 - n | t >>> n - 32, Sn = (e, t, n) => e >>> n - 32 | t << 64 - n;
function nt(e, t, n, i) {
  const c = (t >>> 0) + (i >>> 0);
  return { h: e + n + (c / 2 ** 32 | 0) | 0, l: c | 0 };
}
const Xd = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0), Wd = (e, t, n, i) => t + n + i + (e / 2 ** 32 | 0) | 0, Yd = (e, t, n, i) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (i >>> 0), el = (e, t, n, i, c) => t + n + i + c + (e / 2 ** 32 | 0) | 0, tl = (e, t, n, i, c) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (i >>> 0) + (c >>> 0), nl = (e, t, n, i, c, r) => t + n + i + c + r + (e / 2 ** 32 | 0) | 0, rl = /* @__PURE__ */ Uint32Array.from([
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
]), ht = /* @__PURE__ */ new Uint32Array(64);
class il extends Uc {
  constructor(t = 32) {
    super(64, t, 8, !1), this.A = ft[0] | 0, this.B = ft[1] | 0, this.C = ft[2] | 0, this.D = ft[3] | 0, this.E = ft[4] | 0, this.F = ft[5] | 0, this.G = ft[6] | 0, this.H = ft[7] | 0;
  }
  get() {
    const { A: t, B: n, C: i, D: c, E: r, F: s, G: a, H: o } = this;
    return [t, n, i, c, r, s, a, o];
  }
  // prettier-ignore
  set(t, n, i, c, r, s, a, o) {
    this.A = t | 0, this.B = n | 0, this.C = i | 0, this.D = c | 0, this.E = r | 0, this.F = s | 0, this.G = a | 0, this.H = o | 0;
  }
  process(t, n) {
    for (let g = 0; g < 16; g++, n += 4)
      ht[g] = t.getUint32(n, !1);
    for (let g = 16; g < 64; g++) {
      const p = ht[g - 15], f = ht[g - 2], w = Xe(p, 7) ^ Xe(p, 18) ^ p >>> 3, x = Xe(f, 17) ^ Xe(f, 19) ^ f >>> 10;
      ht[g] = x + ht[g - 7] + w + ht[g - 16] | 0;
    }
    let { A: i, B: c, C: r, D: s, E: a, F: o, G: u, H: m } = this;
    for (let g = 0; g < 64; g++) {
      const p = Xe(a, 6) ^ Xe(a, 11) ^ Xe(a, 25), f = m + p + Jd(a, o, u) + rl[g] + ht[g] | 0, x = (Xe(i, 2) ^ Xe(i, 13) ^ Xe(i, 22)) + Zd(i, c, r) | 0;
      m = u, u = o, o = a, a = s + f | 0, s = r, r = c, c = i, i = f + x | 0;
    }
    i = i + this.A | 0, c = c + this.B | 0, r = r + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, o = o + this.F | 0, u = u + this.G | 0, m = m + this.H | 0, this.set(i, c, r, s, a, o, u, m);
  }
  roundClean() {
    ln(ht);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), ln(this.buffer);
  }
}
const Vc = Qd([
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
].map((e) => BigInt(e))), sl = Vc[0], al = Vc[1], mt = /* @__PURE__ */ new Uint32Array(80), yt = /* @__PURE__ */ new Uint32Array(80);
class Fc extends Uc {
  constructor(t = 64) {
    super(128, t, 16, !1), this.Ah = xe[0] | 0, this.Al = xe[1] | 0, this.Bh = xe[2] | 0, this.Bl = xe[3] | 0, this.Ch = xe[4] | 0, this.Cl = xe[5] | 0, this.Dh = xe[6] | 0, this.Dl = xe[7] | 0, this.Eh = xe[8] | 0, this.El = xe[9] | 0, this.Fh = xe[10] | 0, this.Fl = xe[11] | 0, this.Gh = xe[12] | 0, this.Gl = xe[13] | 0, this.Hh = xe[14] | 0, this.Hl = xe[15] | 0;
  }
  // prettier-ignore
  get() {
    const { Ah: t, Al: n, Bh: i, Bl: c, Ch: r, Cl: s, Dh: a, Dl: o, Eh: u, El: m, Fh: g, Fl: p, Gh: f, Gl: w, Hh: x, Hl: v } = this;
    return [t, n, i, c, r, s, a, o, u, m, g, p, f, w, x, v];
  }
  // prettier-ignore
  set(t, n, i, c, r, s, a, o, u, m, g, p, f, w, x, v) {
    this.Ah = t | 0, this.Al = n | 0, this.Bh = i | 0, this.Bl = c | 0, this.Ch = r | 0, this.Cl = s | 0, this.Dh = a | 0, this.Dl = o | 0, this.Eh = u | 0, this.El = m | 0, this.Fh = g | 0, this.Fl = p | 0, this.Gh = f | 0, this.Gl = w | 0, this.Hh = x | 0, this.Hl = v | 0;
  }
  process(t, n) {
    for (let y = 0; y < 16; y++, n += 4)
      mt[y] = t.getUint32(n), yt[y] = t.getUint32(n += 4);
    for (let y = 16; y < 80; y++) {
      const d = mt[y - 15] | 0, l = yt[y - 15] | 0, h = Et(d, l, 1) ^ Et(d, l, 8) ^ Ws(d, l, 7), I = Ct(d, l, 1) ^ Ct(d, l, 8) ^ Ys(d, l, 7), A = mt[y - 2] | 0, R = yt[y - 2] | 0, O = Et(A, R, 19) ^ xn(A, R, 61) ^ Ws(A, R, 6), M = Ct(A, R, 19) ^ Sn(A, R, 61) ^ Ys(A, R, 6), q = Yd(I, M, yt[y - 7], yt[y - 16]), $ = el(q, h, O, mt[y - 7], mt[y - 16]);
      mt[y] = $ | 0, yt[y] = q | 0;
    }
    let { Ah: i, Al: c, Bh: r, Bl: s, Ch: a, Cl: o, Dh: u, Dl: m, Eh: g, El: p, Fh: f, Fl: w, Gh: x, Gl: v, Hh: S, Hl: b } = this;
    for (let y = 0; y < 80; y++) {
      const d = Et(g, p, 14) ^ Et(g, p, 18) ^ xn(g, p, 41), l = Ct(g, p, 14) ^ Ct(g, p, 18) ^ Sn(g, p, 41), h = g & f ^ ~g & x, I = p & w ^ ~p & v, A = tl(b, l, I, al[y], yt[y]), R = nl(A, S, d, h, sl[y], mt[y]), O = A | 0, M = Et(i, c, 28) ^ xn(i, c, 34) ^ xn(i, c, 39), q = Ct(i, c, 28) ^ Sn(i, c, 34) ^ Sn(i, c, 39), $ = i & r ^ i & a ^ r & a, E = c & s ^ c & o ^ s & o;
      S = x | 0, b = v | 0, x = f | 0, v = w | 0, f = g | 0, w = p | 0, { h: g, l: p } = nt(u | 0, m | 0, R | 0, O | 0), u = a | 0, m = o | 0, a = r | 0, o = s | 0, r = i | 0, s = c | 0;
      const D = Xd(O, q, E);
      i = Wd(D, R, M, $), c = D | 0;
    }
    ({ h: i, l: c } = nt(this.Ah | 0, this.Al | 0, i | 0, c | 0)), { h: r, l: s } = nt(this.Bh | 0, this.Bl | 0, r | 0, s | 0), { h: a, l: o } = nt(this.Ch | 0, this.Cl | 0, a | 0, o | 0), { h: u, l: m } = nt(this.Dh | 0, this.Dl | 0, u | 0, m | 0), { h: g, l: p } = nt(this.Eh | 0, this.El | 0, g | 0, p | 0), { h: f, l: w } = nt(this.Fh | 0, this.Fl | 0, f | 0, w | 0), { h: x, l: v } = nt(this.Gh | 0, this.Gl | 0, x | 0, v | 0), { h: S, l: b } = nt(this.Hh | 0, this.Hl | 0, S | 0, b | 0), this.set(i, c, r, s, a, o, u, m, g, p, f, w, x, v, S, b);
  }
  roundClean() {
    ln(mt, yt);
  }
  destroy() {
    ln(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class ol extends Fc {
  constructor() {
    super(48), this.Ah = we[0] | 0, this.Al = we[1] | 0, this.Bh = we[2] | 0, this.Bl = we[3] | 0, this.Ch = we[4] | 0, this.Cl = we[5] | 0, this.Dh = we[6] | 0, this.Dl = we[7] | 0, this.Eh = we[8] | 0, this.El = we[9] | 0, this.Fh = we[10] | 0, this.Fl = we[11] | 0, this.Gh = we[12] | 0, this.Gl = we[13] | 0, this.Hh = we[14] | 0, this.Hl = we[15] | 0;
  }
}
const cl = /* @__PURE__ */ _s(() => new il()), dl = /* @__PURE__ */ _s(() => new Fc()), ll = /* @__PURE__ */ _s(() => new ol()), ul = cl, pl = dl, fl = ll;
class hl {
  constructor(t) {
    tt(this, "_chunks", []);
    tt(this, "_algo");
    this._algo = t === "sha384" ? "sha384" : t === "sha512" ? "sha512" : "sha256";
  }
  update(t, n) {
    const i = typeof t == "string" ? new TextEncoder().encode(t) : t;
    return this._chunks.push(i), this;
  }
  digest(t) {
    const n = this._chunks.reduce((s, a) => s + a.length, 0), i = new Uint8Array(n);
    let c = 0;
    for (const s of this._chunks)
      i.set(s, c), c += s.length;
    let r;
    return this._algo === "sha384" ? r = fl(i) : this._algo === "sha512" ? r = pl(i) : r = ul(i), t === "base64" ? btoa(String.fromCharCode(...r)) : t === "hex" ? Array.from(r).map((s) => s.toString(16).padStart(2, "0")).join("") : r;
  }
}
function ls(e) {
  return new hl(e);
}
class Re extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "CatalogError";
  }
}
function ml(e, t) {
  if (e.trim().length === 0)
    throw new Re("INVALID_RESOURCE", `${t} must be nonempty.`);
}
function Dr(e) {
  return `sha384-${ls("sha384").update(e).digest("base64")}`;
}
function ea(e) {
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
          if (!(c instanceof Re)) throw c;
          t.set(n, c);
        }
      const i = t.get(n);
      if (i instanceof Re) throw i;
      return { ...i, bytes: Uint8Array.from(i.bytes) };
    }
  };
}
var Vt;
class yl {
  constructor(t) {
    bn(this, Vt, /* @__PURE__ */ new Map());
    for (const n of t) {
      for (const [c, r] of Object.entries({
        uri: n.uri,
        mediaType: n.mediaType,
        origin: n.origin,
        version: n.version
      })) ml(r, c);
      if (Qe(this, Vt).has(n.uri))
        throw new Re("DUPLICATE_RESOURCE", `Duplicate static resource: ${n.uri}`);
      const i = Dr(n.bytes);
      if (i !== n.digestSRI)
        throw new Re(
          "INTEGRITY_MISMATCH",
          `Static resource ${n.uri} has ${i}; expected ${n.digestSRI}.`
        );
      Qe(this, Vt).set(n.uri, { ...n, bytes: Uint8Array.from(n.bytes) });
    }
  }
  openSession(t) {
    if (!Number.isSafeInteger(t.maxResources) || t.maxResources <= 0 || !Number.isSafeInteger(t.maxBytes) || t.maxBytes <= 0)
      throw new Re("INVALID_RESOURCE", "Catalog budgets must be positive safe integers.");
    return new gl(Qe(this, Vt), Object.freeze({ ...t }));
  }
}
Vt = new WeakMap();
var Ft, Bt;
class gl {
  constructor(t, n) {
    bn(this, Ft, 0);
    bn(this, Bt, 0);
    this.resources = t, this.budget = n;
  }
  get usage() {
    return Object.freeze({ resources: Qe(this, Ft), bytes: Qe(this, Bt) });
  }
  resolve(t) {
    const n = this.resources.get(t);
    if (!n)
      throw new Re("RESOURCE_NOT_FOUND", `Static resource is not installed: ${t}`);
    if (Qe(this, Ft) + 1 > this.budget.maxResources || Qe(this, Bt) + n.bytes.byteLength > this.budget.maxBytes)
      throw new Re("RESOURCE_BUDGET_EXCEEDED", `Static resource budget exceeded at ${t}.`);
    return ti(this, Ft, Qe(this, Ft) + 1), ti(this, Bt, Qe(this, Bt) + n.bytes.byteLength), { ...n, bytes: Uint8Array.from(n.bytes) };
  }
}
Ft = new WeakMap(), Bt = new WeakMap();
function vl(e) {
  return async (t) => {
    const n = e.resolve(t);
    if (n.mediaType !== "application/json" && n.mediaType !== "application/ld+json" && !n.mediaType.endsWith("+json"))
      throw new Re(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} has unsupported media type ${n.mediaType}.`
      );
    let i;
    try {
      const c = new TextDecoder("utf-8", { fatal: !0 }).decode(n.bytes);
      i = JSON.parse(c);
    } catch (c) {
      throw new Re(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} is not valid UTF-8 JSON: ${String(c)}.`
      );
    }
    return { contextUrl: null, document: i, documentUrl: t };
  };
}
const ta = "https://vc4qi.example/bindings/rm/1", ii = [
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
function In(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Bc(e) {
  if (e !== null && typeof e == "object") {
    for (const t of Object.values(e)) Bc(t);
    Object.freeze(e);
  }
  return e;
}
function bl(e) {
  if (!In(e)) throw new TypeError("Binding manifest must be an object.");
  if (Object.keys(e).length !== ii.length || ii.some((n) => !Object.hasOwn(e, n)))
    throw new TypeError("Binding manifest must contain exactly the supported top-level categories.");
  if (typeof e.id != "string" || e.id.length === 0 || typeof e.version != "string" || e.version.length === 0 || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Binding manifest identity, version, or status is invalid.");
  if (!In(e.installation) || e.installation.status !== "incomplete" && e.installation.status !== "installable" || typeof e.installation.reason != "string" || e.installation.reason.length === 0 || !Array.isArray(e.installation.pendingResources) || e.installation.pendingResources.some((n) => typeof n != "string" || n.length === 0))
    throw new TypeError("Binding manifest installation state is invalid.");
  if (!Array.isArray(e.factMappings) || e.factMappings.length === 0 || e.factMappings.some((n) => !In(n)))
    throw new TypeError("Binding manifest factMappings must be a nonempty object array.");
  for (const n of ii.slice(4))
    if (!(n === "installation" || n === "factMappings") && (!In(e[n]) || Object.keys(e[n]).length === 0))
      throw new TypeError(`Binding manifest ${n} must be a nonempty object.`);
  return Bc(structuredClone(e));
}
const Gt = "https://www.w3.org/ns/credentials/v2", wl = "https://vc4qi.example/contexts/rm/1", Tt = "https://vc4qi.example/schemas/rm/1/", xl = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", Sl = BigInt(58);
function Il(e) {
  if (e.length === 0) return new Uint8Array(0);
  let t = 0;
  for (const s of e) {
    if (s !== "1") break;
    t++;
  }
  let n = 0n;
  for (const s of e) {
    const a = xl.indexOf(s);
    if (a === -1) throw new Error(`Invalid base58btc character: '${s}'`);
    n = n * Sl + BigInt(a);
  }
  const i = [];
  for (; n > 0n; )
    i.push(Number(n & 0xffn)), n >>= 8n;
  i.reverse();
  const c = Uint8Array.from(i), r = new Uint8Array(t + c.length);
  return r.set(c, t), r;
}
function Gc(e) {
  if (!e.startsWith("z"))
    throw new Error(`Expected multibase base58btc prefix 'z', got '${e[0]}'`);
  return Il(e.slice(1));
}
const na = [237, 1], Al = ["revoked", "expires"];
function ge(e, t, n, i = {}) {
  return Object.freeze({ state: e, code: t, reason: n, ...i });
}
function $r(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function _l(e) {
  if (typeof e == "string" && e.length > 0) return e;
  if ($r(e) && typeof e.id == "string" && e.id.length > 0) return e.id;
}
function $l(e) {
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
function ql(e) {
  if (typeof e != "string" || !e.startsWith("z")) return;
  let t;
  try {
    t = Gc(e);
  } catch {
    return;
  }
  if (!(t.length !== 34 || t[0] !== na[0] || t[1] !== na[1]))
    return t.slice(2);
}
function jl(e, t, n) {
  const i = _l(e);
  if (i === void 0)
    return ge("not_established", "ISSUER_MISSING", "The credential has no issuer identifier.");
  if (typeof t != "string")
    return ge("contradicted", "MALFORMED_METHOD", "The proof names no verification method.");
  const c = $l(t);
  if (c === void 0)
    return ge(
      "contradicted",
      "MALFORMED_METHOD",
      `Verification method ${t} is not an absolute URL with a fragment.`
    );
  if (c !== i)
    return ge(
      "contradicted",
      "NOT_ISSUER_CONTROLLER",
      `Verification method ${t} is not in issuer ${i}'s controller document.`
    );
  let r, s;
  try {
    const p = n.resolve(c);
    s = p.digestSRI, r = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(p.bytes));
  } catch (p) {
    return p instanceof Re ? ge(
      "not_established",
      "CONTROLLER_NOT_INSTALLED",
      `Controller document ${c} is not available: ${p.code}.`
    ) : ge(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${c} is not valid UTF-8 JSON.`
    );
  }
  if (!$r(r))
    return ge(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${c} is not a JSON object.`
    );
  if (r.id !== c)
    return ge(
      "contradicted",
      "CONTROLLER_ID_MISMATCH",
      `Controller document at ${c} identifies itself as ${String(r.id)}.`
    );
  const o = (Array.isArray(r.verificationMethod) ? r.verificationMethod : []).filter((p) => $r(p) && p.id === t);
  if (o.length === 0)
    return ge(
      "contradicted",
      "METHOD_NOT_FOUND",
      `${t} is not listed in its controller document.`
    );
  if (o.length > 1)
    return ge(
      "contradicted",
      "METHOD_AMBIGUOUS",
      `${t} is listed more than once in its controller document.`
    );
  const u = o[0];
  if (u.type !== "Multikey")
    return ge(
      "not_established",
      "METHOD_TYPE_UNSUPPORTED",
      `Verification method type ${String(u.type)} is not supported; Multikey is required.`
    );
  if (u.controller !== c)
    return ge(
      "contradicted",
      "METHOD_CONTROLLER_MISMATCH",
      `${t} is controlled by ${String(u.controller)}, not ${c}.`
    );
  if (Al.some((p) => Object.hasOwn(u, p)))
    return ge(
      "not_established",
      "METHOD_LIFECYCLE_UNSUPPORTED",
      "Key revocation/expiry metadata is not supported in the initial slice."
    );
  const m = ql(u.publicKeyMultibase);
  if (m === void 0)
    return ge(
      "contradicted",
      "INVALID_PUBLIC_KEY",
      `${t} does not carry an Ed25519 Multikey public key.`
    );
  const g = Array.isArray(r.assertionMethod) ? r.assertionMethod : [];
  return g.includes(t) ? ge(
    "established",
    "AUTHORIZED",
    `${t} is the issuer's Ed25519 assertion key.`,
    { publicKey: m, verificationMethod: t, controllerDocumentDigest: s }
  ) : g.some((p) => $r(p) && p.id === t) ? ge(
    "not_established",
    "EMBEDDED_METHOD_UNSUPPORTED",
    "Embedded assertionMethod entries are not supported; a reference is required."
  ) : ge(
    "contradicted",
    "NOT_ASSERTION_METHOD",
    `${t} is not authorized for assertionMethod.`
  );
}
const ra = ["accept-successor", "require-extension", "none"], Rl = ["value-at-most-limit", "value-plus-expanded-uncertainty-at-most-limit"], Pl = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/;
function Ue(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const Oe = (e) => typeof e == "string" && e.trim().length > 0, si = (e) => Array.isArray(e) && e.length > 0 && e.every(Oe) && new Set(e).size === e.length;
function El(e) {
  if (!Ue(e) || !Oe(e.id) || !Oe(e.version) || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Reliance profile identity, version or status is invalid.");
  const t = e.binding;
  if (!Ue(t) || !Oe(t.id) || !Oe(t.version))
    throw new TypeError("Reliance profile must name exactly one binding and version.");
  if (!Array.isArray(e.trustAnchors) || e.trustAnchors.some((u) => !Ue(u) || !Oe(u.id) || !si(u.purposes)))
    throw new TypeError("Reliance profile trustAnchors must list anchors with explicit purposes.");
  const n = e.authority;
  if (!Ue(n) || !si(n.certificateRoutes) || !Array.isArray(n.globalRestrictions) || !n.globalRestrictions.every(Oe) || !Number.isSafeInteger(n.maxRoutes) || n.maxRoutes <= 0)
    throw new TypeError("Reliance profile authority needs certificateRoutes, globalRestrictions and a positive maxRoutes.");
  const i = e.credentialStatus;
  if (!Ue(i) || typeof i.required != "boolean" || !si(i.purposes) || !Number.isSafeInteger(i.maxAgeSeconds) || i.maxAgeSeconds <= 0)
    throw new TypeError("Reliance profile credentialStatus needs required, purposes and a positive maxAgeSeconds.");
  const c = e.mapping;
  if (!Ue(c) || !ra.includes(c.methodSuccession))
    throw new TypeError(`Reliance profile mapping.methodSuccession must be one of ${ra.join(", ")}.`);
  const r = e.conformity;
  if (!Ue(r) || !Array.isArray(r.requirements) || !Array.isArray(r.decisionRules) || r.requirements.some((u) => !Ue(u) || !Oe(u.id) || !Oe(u.propertyIri) || !Oe(u.quantityKindIri) || !Ue(u.upperLimit) || typeof u.upperLimit.value != "string" || !Pl.test(u.upperLimit.value) || !Oe(u.upperLimit.unit)) || r.decisionRules.some((u) => !Ue(u) || !Oe(u.id) || !Rl.includes(u.acceptWhen)))
    throw new TypeError("Reliance profile conformity needs requirements (id, propertyIri, quantityKindIri, upperLimit) and decisionRules (id, acceptWhen).");
  if (e.bindingRules !== void 0 && !Ue(e.bindingRules))
    throw new TypeError("Reliance profile bindingRules must be an object when present.");
  const s = r.requirements, a = r.decisionRules, o = [...s.map((u) => u.id), ...a.map((u) => u.id)];
  if (new Set(o).size !== o.length) throw new TypeError("Reliance profile conformity ids must be unique.");
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
      required: i.required,
      purposes: Object.freeze([...i.purposes]),
      maxAgeSeconds: i.maxAgeSeconds
    }),
    mapping: Object.freeze({ methodSuccession: c.methodSuccession }),
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
function ai(e, t) {
  if (new Set(e).size !== e.length)
    throw new TypeError(`${t} must not contain duplicates.`);
}
function us(e, t) {
  const n = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/.exec(e);
  if (!n)
    throw new TypeError(`${t} must be an ISO 8601 date-time with an explicit offset.`);
  const [, i, c, r, s, a, o] = n, u = n[7], m = Number(i), g = Number(c), p = Number(r), f = Number(s), w = Number(a), x = Number(o), v = /* @__PURE__ */ new Date(0);
  v.setUTCFullYear(m, g - 1, p), v.setUTCHours(0, 0, 0, 0);
  const S = v.getUTCFullYear() !== m || v.getUTCMonth() !== g - 1 || v.getUTCDate() !== p, b = u === "Z" ? null : /^([+-])(\d{2}):(\d{2})$/.exec(u), y = b !== null && (Number(b[2]) > 23 || Number(b[3]) > 59);
  if (m < 1 || S || f > 23 || w > 59 || x > 59 || y || !Number.isFinite(Date.parse(e)))
    throw new TypeError(`${t} must be a valid ISO 8601 date-time.`);
}
function oi(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0)
    throw new TypeError(`${t} must be a positive safe integer.`);
}
function Er(e, t) {
  ue(e.id, `${t}.id`), ue(e.version, `${t}.version`);
}
function Cr(e) {
  return Object.freeze({ id: e.id, version: e.version });
}
function nn(e) {
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
  if (ue(e.requestId, "requestId"), ue(e.targetId, "targetId"), ue(e.purpose, "purpose"), ue(e.trustConfigId, "trustConfigId"), Er(e.binding, "binding"), Er(e.profile, "profile"), us(e.evaluationTime, "evaluationTime"), us(e.activityTime, "activityTime"), e.selectedClaims.length === 0)
    throw new TypeError("selectedClaims must contain at least one claim.");
  for (const [r, s] of e.selectedClaims.entries())
    ue(s.id, `selectedClaims[${r}].id`), ue(s.sourcePointer, `selectedClaims[${r}].sourcePointer`);
  ai(e.selectedClaims.map((r) => r.id), "selected claim IDs"), ai(e.selectedClaims.map((r) => r.sourcePointer), "selected claim source pointers");
  for (const [r, s] of e.suppliedEvidence.entries())
    ue(s, `suppliedEvidence[${r}]`);
  ai(e.suppliedEvidence, "suppliedEvidence"), oi(e.resolverLimits.maxResources, "resolverLimits.maxResources"), oi(e.resolverLimits.maxDepth, "resolverLimits.maxDepth"), oi(e.resolverLimits.maxBytes, "resolverLimits.maxBytes"), e.conformity && (ue(e.conformity.requirementId, "conformity.requirementId"), ue(e.conformity.decisionRuleId, "conformity.decisionRuleId"));
  const t = Object.freeze(e.selectedClaims.map((r) => Object.freeze({
    id: r.id,
    sourcePointer: r.sourcePointer
  }))), n = Object.freeze([...e.suppliedEvidence]), i = Object.freeze({ ...e.resolverLimits }), c = e.conformity ? Object.freeze({ ...e.conformity }) : void 0;
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    selectedClaims: t,
    purpose: e.purpose,
    binding: Cr(e.binding),
    profile: Cr(e.profile),
    trustConfigId: e.trustConfigId,
    evaluationTime: e.evaluationTime,
    activityTime: e.activityTime,
    suppliedEvidence: n,
    resolverLimits: i,
    ...c ? { conformity: c } : {}
  });
}
function Tl(e, t) {
  if (!Number.isInteger(e.gate) || e.gate < 0 || e.gate > 6)
    throw new TypeError(`trace[${t}].gate must be a canonical gate number 0-6.`);
  ue(e.nodeUse, `trace[${t}].nodeUse`), ue(e.predicate, `trace[${t}].predicate`), ue(e.reason, `trace[${t}].reason`);
  const n = nn({
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
function Ol(e, t) {
  if (ue(e.uri, `resources[${t}].uri`), !/^sha384-[A-Za-z0-9+/]{64}$/.test(e.digestSRI))
    throw new TypeError(`resources[${t}].digestSRI must be a SHA-384 SRI value.`);
  if (!["static", "artifact", "status"].includes(e.kind) || !["catalog", "supplied"].includes(e.source))
    throw new TypeError(`resources[${t}] has an unsupported kind or source.`);
  return us(e.observedAt, `resources[${t}].observedAt`), Object.freeze({ ...e });
}
function zr(e) {
  if (ue(e.requestId, "requestId"), ue(e.targetId, "targetId"), Er(e.binding, "binding"), Er(e.profile, "profile"), e.artifactVerification.forEach((t, n) => ue(t.artifactId, `artifactVerification[${n}].artifactId`)), e.authorization.forEach((t, n) => ue(t.claimId, `authorization[${n}].claimId`)), e.support.forEach((t, n) => ue(t.obligationId, `support[${n}].obligationId`)), e.conformity.requested)
    ue(e.conformity.requirementId, "conformity.requirementId"), ue(e.conformity.decisionRuleId, "conformity.decisionRuleId");
  else if (e.conformity.requested !== !1 || e.conformity.execution !== "not_run")
    throw new TypeError("Unrequested conformity must have execution state not_run.");
  if (!["accept", "reject", "not_established"].includes(e.decision))
    throw new TypeError(`Unsupported reliance decision: ${String(e.decision)}.`);
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: Cr(e.binding),
    profile: Cr(e.profile),
    artifactVerification: Object.freeze(e.artifactVerification.map((t) => nn({
      ...t
    }))),
    authorization: Object.freeze(e.authorization.map((t) => Object.freeze({
      ...nn(t),
      routeWitnessIds: Object.freeze([...t.routeWitnessIds])
    }))),
    support: Object.freeze(e.support.map((t) => Object.freeze({
      ...nn(t),
      witnessIds: Object.freeze([...t.witnessIds])
    }))),
    conformity: e.conformity.requested ? nn({ ...e.conformity }) : Object.freeze({ requested: !1, execution: "not_run" }),
    decision: e.decision,
    trace: Object.freeze((e.trace ?? []).map(Tl)),
    resources: Object.freeze((e.resources ?? []).map(Ol)),
    limitations: Object.freeze([...e.limitations ?? []])
  });
}
function Hc(e, t) {
  if (e.length === 0)
    throw new TypeError(`${t} requires at least one semantic state.`);
  for (const n of e)
    if (!["established", "contradicted", "not_established"].includes(n))
      throw new TypeError(`${t} received unsupported semantic state: ${String(n)}.`);
}
function je(e) {
  return Hc(e, "semanticAnd"), e.includes("contradicted") ? "contradicted" : e.every((t) => t === "established") ? "established" : "not_established";
}
function fn(e) {
  return Hc(e, "semanticOr"), e.includes("established") ? "established" : e.every((t) => t === "contradicted") ? "contradicted" : "not_established";
}
function $s(e) {
  const t = je(e);
  return t === "established" ? "accept" : t === "contradicted" ? "reject" : "not_established";
}
var ia = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ml(e) {
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
var An = { exports: {} }, ci = {}, rt = {}, St = {}, di = {}, li = {}, ui = {}, sa;
function Tr() {
  return sa || (sa = 1, (function(e) {
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
    class i extends t {
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
    e._Code = i, e.nil = new i("");
    function c(S, ...b) {
      const y = [S[0]];
      let d = 0;
      for (; d < b.length; )
        a(y, b[d]), y.push(S[++d]);
      return new i(y);
    }
    e._ = c;
    const r = new i("+");
    function s(S, ...b) {
      const y = [f(S[0])];
      let d = 0;
      for (; d < b.length; )
        y.push(r), a(y, b[d]), y.push(r, f(S[++d]));
      return o(y), new i(y);
    }
    e.str = s;
    function a(S, b) {
      b instanceof i ? S.push(...b._items) : b instanceof n ? S.push(b) : S.push(g(b));
    }
    e.addCodeArg = a;
    function o(S) {
      let b = 1;
      for (; b < S.length - 1; ) {
        if (S[b] === r) {
          const y = u(S[b - 1], S[b + 1]);
          if (y !== void 0) {
            S.splice(b - 1, 3, y);
            continue;
          }
          S[b++] = "+";
        }
        b++;
      }
    }
    function u(S, b) {
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
    function p(S) {
      return new i(f(S));
    }
    e.stringify = p;
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
    function v(S) {
      return new i(S.toString());
    }
    e.regexpCode = v;
  })(ui)), ui;
}
var pi = {}, aa;
function oa() {
  return aa || (aa = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Tr();
    class n extends Error {
      constructor(u) {
        super(`CodeGen: "code" for ${u} not defined`), this.value = u.value;
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
      constructor({ prefixes: u, parent: m } = {}) {
        this._names = {}, this._prefixes = u, this._parent = m;
      }
      toName(u) {
        return u instanceof t.Name ? u : this.name(u);
      }
      name(u) {
        return new t.Name(this._newName(u));
      }
      _newName(u) {
        const m = this._names[u] || this._nameGroup(u);
        return `${u}${m.index++}`;
      }
      _nameGroup(u) {
        var m, g;
        if (!((g = (m = this._parent) === null || m === void 0 ? void 0 : m._prefixes) === null || g === void 0) && g.has(u) || this._prefixes && !this._prefixes.has(u))
          throw new Error(`CodeGen: prefix "${u}" is not allowed in this scope`);
        return this._names[u] = { prefix: u, index: 0 };
      }
    }
    e.Scope = c;
    class r extends t.Name {
      constructor(u, m) {
        super(m), this.prefix = u;
      }
      setValue(u, { property: m, itemIndex: g }) {
        this.value = u, this.scopePath = (0, t._)`.${new t.Name(m)}[${g}]`;
      }
    }
    e.ValueScopeName = r;
    const s = (0, t._)`\n`;
    class a extends c {
      constructor(u) {
        super(u), this._values = {}, this._scope = u.scope, this.opts = { ...u, _n: u.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(u) {
        return new r(u, this._newName(u));
      }
      value(u, m) {
        var g;
        if (m.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const p = this.toName(u), { prefix: f } = p, w = (g = m.key) !== null && g !== void 0 ? g : m.ref;
        let x = this._values[f];
        if (x) {
          const b = x.get(w);
          if (b)
            return b;
        } else
          x = this._values[f] = /* @__PURE__ */ new Map();
        x.set(w, p);
        const v = this._scope[f] || (this._scope[f] = []), S = v.length;
        return v[S] = m.ref, p.setValue(m, { property: f, itemIndex: S }), p;
      }
      getValue(u, m) {
        const g = this._values[u];
        if (g)
          return g.get(m);
      }
      scopeRefs(u, m = this._values) {
        return this._reduceValues(m, (g) => {
          if (g.scopePath === void 0)
            throw new Error(`CodeGen: name "${g}" has no value`);
          return (0, t._)`${u}${g.scopePath}`;
        });
      }
      scopeCode(u = this._values, m, g) {
        return this._reduceValues(u, (p) => {
          if (p.value === void 0)
            throw new Error(`CodeGen: name "${p}" has no value`);
          return p.value.code;
        }, m, g);
      }
      _reduceValues(u, m, g = {}, p) {
        let f = t.nil;
        for (const w in u) {
          const x = u[w];
          if (!x)
            continue;
          const v = g[w] = g[w] || /* @__PURE__ */ new Map();
          x.forEach((S) => {
            if (v.has(S))
              return;
            v.set(S, i.Started);
            let b = m(S);
            if (b) {
              const y = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              f = (0, t._)`${f}${y} ${S} = ${b};${this.opts._n}`;
            } else if (b = p?.(S))
              f = (0, t._)`${f}${b}${this.opts._n}`;
            else
              throw new n(S);
            v.set(S, i.Completed);
          });
        }
        return f;
      }
    }
    e.ValueScope = a;
  })(pi)), pi;
}
var ca;
function ee() {
  return ca || (ca = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Tr(), n = /* @__PURE__ */ oa();
    var i = /* @__PURE__ */ Tr();
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
    var c = /* @__PURE__ */ oa();
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
      optimizeNames(j, _) {
        return this;
      }
    }
    class s extends r {
      constructor(j, _, T) {
        super(), this.varKind = j, this.name = _, this.rhs = T;
      }
      render({ es5: j, _n: _ }) {
        const T = j ? n.varKinds.var : this.varKind, L = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${T} ${this.name}${L};` + _;
      }
      optimizeNames(j, _) {
        if (j[this.name.str])
          return this.rhs && (this.rhs = E(this.rhs, j, _)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends r {
      constructor(j, _, T) {
        super(), this.lhs = j, this.rhs = _, this.sideEffects = T;
      }
      render({ _n: j }) {
        return `${this.lhs} = ${this.rhs};` + j;
      }
      optimizeNames(j, _) {
        if (!(this.lhs instanceof t.Name && !j[this.lhs.str] && !this.sideEffects))
          return this.rhs = E(this.rhs, j, _), this;
      }
      get names() {
        const j = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return $(j, this.rhs);
      }
    }
    class o extends a {
      constructor(j, _, T, L) {
        super(j, T, L), this.op = _;
      }
      render({ _n: j }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + j;
      }
    }
    class u extends r {
      constructor(j) {
        super(), this.label = j, this.names = {};
      }
      render({ _n: j }) {
        return `${this.label}:` + j;
      }
    }
    class m extends r {
      constructor(j) {
        super(), this.label = j, this.names = {};
      }
      render({ _n: j }) {
        return `break${this.label ? ` ${this.label}` : ""};` + j;
      }
    }
    class g extends r {
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
    class p extends r {
      constructor(j) {
        super(), this.code = j;
      }
      render({ _n: j }) {
        return `${this.code};` + j;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(j, _) {
        return this.code = E(this.code, j, _), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class f extends r {
      constructor(j = []) {
        super(), this.nodes = j;
      }
      render(j) {
        return this.nodes.reduce((_, T) => _ + T.render(j), "");
      }
      optimizeNodes() {
        const { nodes: j } = this;
        let _ = j.length;
        for (; _--; ) {
          const T = j[_].optimizeNodes();
          Array.isArray(T) ? j.splice(_, 1, ...T) : T ? j[_] = T : j.splice(_, 1);
        }
        return j.length > 0 ? this : void 0;
      }
      optimizeNames(j, _) {
        const { nodes: T } = this;
        let L = T.length;
        for (; L--; ) {
          const J = T[L];
          J.optimizeNames(j, _) || (D(j, J.names), T.splice(L, 1));
        }
        return T.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((j, _) => q(j, _.names), {});
      }
    }
    class w extends f {
      render(j) {
        return "{" + j._n + super.render(j) + "}" + j._n;
      }
    }
    class x extends f {
    }
    class v extends w {
    }
    v.kind = "else";
    class S extends w {
      constructor(j, _) {
        super(_), this.condition = j;
      }
      render(j) {
        let _ = `if(${this.condition})` + super.render(j);
        return this.else && (_ += "else " + this.else.render(j)), _;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const j = this.condition;
        if (j === !0)
          return this.nodes;
        let _ = this.else;
        if (_) {
          const T = _.optimizeNodes();
          _ = this.else = Array.isArray(T) ? new v(T) : T;
        }
        if (_)
          return j === !1 ? _ instanceof S ? _ : _.nodes : this.nodes.length ? this : new S(P(j), _ instanceof S ? [_] : _.nodes);
        if (!(j === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(j, _) {
        var T;
        if (this.else = (T = this.else) === null || T === void 0 ? void 0 : T.optimizeNames(j, _), !!(super.optimizeNames(j, _) || this.else))
          return this.condition = E(this.condition, j, _), this;
      }
      get names() {
        const j = super.names;
        return $(j, this.condition), this.else && q(j, this.else.names), j;
      }
    }
    S.kind = "if";
    class b extends w {
    }
    b.kind = "for";
    class y extends b {
      constructor(j) {
        super(), this.iteration = j;
      }
      render(j) {
        return `for(${this.iteration})` + super.render(j);
      }
      optimizeNames(j, _) {
        if (super.optimizeNames(j, _))
          return this.iteration = E(this.iteration, j, _), this;
      }
      get names() {
        return q(super.names, this.iteration.names);
      }
    }
    class d extends b {
      constructor(j, _, T, L) {
        super(), this.varKind = j, this.name = _, this.from = T, this.to = L;
      }
      render(j) {
        const _ = j.es5 ? n.varKinds.var : this.varKind, { name: T, from: L, to: J } = this;
        return `for(${_} ${T}=${L}; ${T}<${J}; ${T}++)` + super.render(j);
      }
      get names() {
        const j = $(super.names, this.from);
        return $(j, this.to);
      }
    }
    class l extends b {
      constructor(j, _, T, L) {
        super(), this.loop = j, this.varKind = _, this.name = T, this.iterable = L;
      }
      render(j) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(j);
      }
      optimizeNames(j, _) {
        if (super.optimizeNames(j, _))
          return this.iterable = E(this.iterable, j, _), this;
      }
      get names() {
        return q(super.names, this.iterable.names);
      }
    }
    class h extends w {
      constructor(j, _, T) {
        super(), this.name = j, this.args = _, this.async = T;
      }
      render(j) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(j);
      }
    }
    h.kind = "func";
    class I extends f {
      render(j) {
        return "return " + super.render(j);
      }
    }
    I.kind = "return";
    class A extends w {
      render(j) {
        let _ = "try" + super.render(j);
        return this.catch && (_ += this.catch.render(j)), this.finally && (_ += this.finally.render(j)), _;
      }
      optimizeNodes() {
        var j, _;
        return super.optimizeNodes(), (j = this.catch) === null || j === void 0 || j.optimizeNodes(), (_ = this.finally) === null || _ === void 0 || _.optimizeNodes(), this;
      }
      optimizeNames(j, _) {
        var T, L;
        return super.optimizeNames(j, _), (T = this.catch) === null || T === void 0 || T.optimizeNames(j, _), (L = this.finally) === null || L === void 0 || L.optimizeNames(j, _), this;
      }
      get names() {
        const j = super.names;
        return this.catch && q(j, this.catch.names), this.finally && q(j, this.finally.names), j;
      }
    }
    class R extends w {
      constructor(j) {
        super(), this.error = j;
      }
      render(j) {
        return `catch(${this.error})` + super.render(j);
      }
    }
    R.kind = "catch";
    class O extends w {
      render(j) {
        return "finally" + super.render(j);
      }
    }
    O.kind = "finally";
    class M {
      constructor(j, _ = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ..._, _n: _.lines ? `
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
      scopeValue(j, _) {
        const T = this._extScope.value(j, _);
        return (this._values[T.prefix] || (this._values[T.prefix] = /* @__PURE__ */ new Set())).add(T), T;
      }
      getScopeValue(j, _) {
        return this._extScope.getValue(j, _);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(j) {
        return this._extScope.scopeRefs(j, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(j, _, T, L) {
        const J = this._scope.toName(_);
        return T !== void 0 && L && (this._constants[J.str] = T), this._leafNode(new s(j, J, T)), J;
      }
      // `const` declaration (`var` in es5 mode)
      const(j, _, T) {
        return this._def(n.varKinds.const, j, _, T);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(j, _, T) {
        return this._def(n.varKinds.let, j, _, T);
      }
      // `var` declaration with optional assignment
      var(j, _, T) {
        return this._def(n.varKinds.var, j, _, T);
      }
      // assignment code
      assign(j, _, T) {
        return this._leafNode(new a(j, _, T));
      }
      // `+=` code
      add(j, _) {
        return this._leafNode(new o(j, e.operators.ADD, _));
      }
      // appends passed SafeExpr to code or executes Block
      code(j) {
        return typeof j == "function" ? j() : j !== t.nil && this._leafNode(new p(j)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...j) {
        const _ = ["{"];
        for (const [T, L] of j)
          _.length > 1 && _.push(","), _.push(T), (T !== L || this.opts.es5) && (_.push(":"), (0, t.addCodeArg)(_, L));
        return _.push("}"), new t._Code(_);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(j, _, T) {
        if (this._blockNode(new S(j)), _ && T)
          this.code(_).else().code(T).endIf();
        else if (_)
          this.code(_).endIf();
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
        return this._elseNode(new v());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(S, v);
      }
      _for(j, _) {
        return this._blockNode(j), _ && this.code(_).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(j, _) {
        return this._for(new y(j), _);
      }
      // `for` statement for a range of values
      forRange(j, _, T, L, J = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Q = this._scope.toName(j);
        return this._for(new d(J, Q, _, T), () => L(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(j, _, T, L = n.varKinds.const) {
        const J = this._scope.toName(j);
        if (this.opts.es5) {
          const Q = _ instanceof t.Name ? _ : this.var("_arr", _);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (Z) => {
            this.var(J, (0, t._)`${Q}[${Z}]`), T(J);
          });
        }
        return this._for(new l("of", L, J, _), () => T(J));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(j, _, T, L = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(j, (0, t._)`Object.keys(${_})`, T);
        const J = this._scope.toName(j);
        return this._for(new l("in", L, J, _), () => T(J));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(b);
      }
      // `label` statement
      label(j) {
        return this._leafNode(new u(j));
      }
      // `break` statement
      break(j) {
        return this._leafNode(new m(j));
      }
      // `return` statement
      return(j) {
        const _ = new I();
        if (this._blockNode(_), this.code(j), _.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(I);
      }
      // `try` statement
      try(j, _, T) {
        if (!_ && !T)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const L = new A();
        if (this._blockNode(L), this.code(j), _) {
          const J = this.name("e");
          this._currNode = L.catch = new R(J), _(J);
        }
        return T && (this._currNode = L.finally = new O(), this.code(T)), this._endBlockNode(R, O);
      }
      // `throw` statement
      throw(j) {
        return this._leafNode(new g(j));
      }
      // start self-balancing block
      block(j, _) {
        return this._blockStarts.push(this._nodes.length), j && this.code(j).endBlock(_), this;
      }
      // end the current self-balancing block
      endBlock(j) {
        const _ = this._blockStarts.pop();
        if (_ === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const T = this._nodes.length - _;
        if (T < 0 || j !== void 0 && T !== j)
          throw new Error(`CodeGen: wrong number of nodes: ${T} vs ${j} expected`);
        return this._nodes.length = _, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(j, _ = t.nil, T, L) {
        return this._blockNode(new h(j, _, T)), L && this.code(L).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(h);
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
      _endBlockNode(j, _) {
        const T = this._currNode;
        if (T instanceof j || _ && T instanceof _)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${_ ? `${j.kind}/${_.kind}` : j.kind}"`);
      }
      _elseNode(j) {
        const _ = this._currNode;
        if (!(_ instanceof S))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = _.else = j, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const j = this._nodes;
        return j[j.length - 1];
      }
      set _currNode(j) {
        const _ = this._nodes;
        _[_.length - 1] = j;
      }
    }
    e.CodeGen = M;
    function q(N, j) {
      for (const _ in j)
        N[_] = (N[_] || 0) + (j[_] || 0);
      return N;
    }
    function $(N, j) {
      return j instanceof t._CodeOrName ? q(N, j.names) : N;
    }
    function E(N, j, _) {
      if (N instanceof t.Name)
        return T(N);
      if (!L(N))
        return N;
      return new t._Code(N._items.reduce((J, Q) => (Q instanceof t.Name && (Q = T(Q)), Q instanceof t._Code ? J.push(...Q._items) : J.push(Q), J), []));
      function T(J) {
        const Q = _[J.str];
        return Q === void 0 || j[J.str] !== 1 ? J : (delete j[J.str], Q);
      }
      function L(J) {
        return J instanceof t._Code && J._items.some((Q) => Q instanceof t.Name && j[Q.str] === 1 && _[Q.str] !== void 0);
      }
    }
    function D(N, j) {
      for (const _ in j)
        N[_] = (N[_] || 0) - (j[_] || 0);
    }
    function P(N) {
      return typeof N == "boolean" || typeof N == "number" || N === null ? !N : (0, t._)`!${z(N)}`;
    }
    e.not = P;
    const G = k(e.operators.AND);
    function B(...N) {
      return N.reduce(G);
    }
    e.and = B;
    const H = k(e.operators.OR);
    function C(...N) {
      return N.reduce(H);
    }
    e.or = C;
    function k(N) {
      return (j, _) => j === t.nil ? _ : _ === t.nil ? j : (0, t._)`${z(j)} ${N} ${z(_)}`;
    }
    function z(N) {
      return N instanceof t.Name ? N : (0, t._)`(${N})`;
    }
  })(li)), li;
}
var te = {}, da;
function ne() {
  if (da) return te;
  da = 1, Object.defineProperty(te, "__esModule", { value: !0 }), te.checkStrictMode = te.getErrorPath = te.Type = te.useFunc = te.setEvaluated = te.evaluatedPropsToName = te.mergeEvaluated = te.eachItem = te.unescapeJsonPointer = te.escapeJsonPointer = te.escapeFragment = te.unescapeFragment = te.schemaRefOrVal = te.schemaHasRulesButRef = te.schemaHasRules = te.checkUnknownRules = te.alwaysValidSchema = te.toHash = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Tr();
  function n(l) {
    const h = {};
    for (const I of l)
      h[I] = !0;
    return h;
  }
  te.toHash = n;
  function i(l, h) {
    return typeof h == "boolean" ? h : Object.keys(h).length === 0 ? !0 : (c(l, h), !r(h, l.self.RULES.all));
  }
  te.alwaysValidSchema = i;
  function c(l, h = l.schema) {
    const { opts: I, self: A } = l;
    if (!I.strictSchema || typeof h == "boolean")
      return;
    const R = A.RULES.keywords;
    for (const O in h)
      R[O] || d(l, `unknown keyword: "${O}"`);
  }
  te.checkUnknownRules = c;
  function r(l, h) {
    if (typeof l == "boolean")
      return !l;
    for (const I in l)
      if (h[I])
        return !0;
    return !1;
  }
  te.schemaHasRules = r;
  function s(l, h) {
    if (typeof l == "boolean")
      return !l;
    for (const I in l)
      if (I !== "$ref" && h.all[I])
        return !0;
    return !1;
  }
  te.schemaHasRulesButRef = s;
  function a({ topSchemaRef: l, schemaPath: h }, I, A, R) {
    if (!R) {
      if (typeof I == "number" || typeof I == "boolean")
        return I;
      if (typeof I == "string")
        return (0, e._)`${I}`;
    }
    return (0, e._)`${l}${h}${(0, e.getProperty)(A)}`;
  }
  te.schemaRefOrVal = a;
  function o(l) {
    return g(decodeURIComponent(l));
  }
  te.unescapeFragment = o;
  function u(l) {
    return encodeURIComponent(m(l));
  }
  te.escapeFragment = u;
  function m(l) {
    return typeof l == "number" ? `${l}` : l.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  te.escapeJsonPointer = m;
  function g(l) {
    return l.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  te.unescapeJsonPointer = g;
  function p(l, h) {
    if (Array.isArray(l))
      for (const I of l)
        h(I);
    else
      h(l);
  }
  te.eachItem = p;
  function f({ mergeNames: l, mergeToName: h, mergeValues: I, resultToName: A }) {
    return (R, O, M, q) => {
      const $ = M === void 0 ? O : M instanceof e.Name ? (O instanceof e.Name ? l(R, O, M) : h(R, O, M), M) : O instanceof e.Name ? (h(R, M, O), O) : I(O, M);
      return q === e.Name && !($ instanceof e.Name) ? A(R, $) : $;
    };
  }
  te.mergeEvaluated = {
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
  te.evaluatedPropsToName = w;
  function x(l, h, I) {
    Object.keys(I).forEach((A) => l.assign((0, e._)`${h}${(0, e.getProperty)(A)}`, !0));
  }
  te.setEvaluated = x;
  const v = {};
  function S(l, h) {
    return l.scopeValue("func", {
      ref: h,
      code: v[h.code] || (v[h.code] = new t._Code(h.code))
    });
  }
  te.useFunc = S;
  var b;
  (function(l) {
    l[l.Num = 0] = "Num", l[l.Str = 1] = "Str";
  })(b || (te.Type = b = {}));
  function y(l, h, I) {
    if (l instanceof e.Name) {
      const A = h === b.Num;
      return I ? A ? (0, e._)`"[" + ${l} + "]"` : (0, e._)`"['" + ${l} + "']"` : A ? (0, e._)`"/" + ${l}` : (0, e._)`"/" + ${l}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return I ? (0, e.getProperty)(l).toString() : "/" + m(l);
  }
  te.getErrorPath = y;
  function d(l, h, I = l.opts.strictSchema) {
    if (I) {
      if (h = `strict mode: ${h}`, I === !0)
        throw new Error(h);
      l.self.logger.warn(h);
    }
  }
  return te.checkStrictMode = d, te;
}
var _n = {}, la;
function Je() {
  if (la) return _n;
  la = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
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
  return _n.default = t, _n;
}
var ua;
function Ur() {
  return ua || (ua = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ ne(), i = /* @__PURE__ */ Je();
    e.keywordError = {
      message: ({ keyword: v }) => (0, t.str)`must pass "${v}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: v, schemaType: S }) => S ? (0, t.str)`"${v}" keyword must be ${S} ($data)` : (0, t.str)`"${v}" keyword is invalid ($data)`
    };
    function c(v, S = e.keywordError, b, y) {
      const { it: d } = v, { gen: l, compositeRule: h, allErrors: I } = d, A = g(v, S, b);
      y ?? (h || I) ? o(l, A) : u(d, (0, t._)`[${A}]`);
    }
    e.reportError = c;
    function r(v, S = e.keywordError, b) {
      const { it: y } = v, { gen: d, compositeRule: l, allErrors: h } = y, I = g(v, S, b);
      o(d, I), l || h || u(y, i.default.vErrors);
    }
    e.reportExtraError = r;
    function s(v, S) {
      v.assign(i.default.errors, S), v.if((0, t._)`${i.default.vErrors} !== null`, () => v.if(S, () => v.assign((0, t._)`${i.default.vErrors}.length`, S), () => v.assign(i.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: v, keyword: S, schemaValue: b, data: y, errsCount: d, it: l }) {
      if (d === void 0)
        throw new Error("ajv implementation error");
      const h = v.name("err");
      v.forRange("i", d, i.default.errors, (I) => {
        v.const(h, (0, t._)`${i.default.vErrors}[${I}]`), v.if((0, t._)`${h}.instancePath === undefined`, () => v.assign((0, t._)`${h}.instancePath`, (0, t.strConcat)(i.default.instancePath, l.errorPath))), v.assign((0, t._)`${h}.schemaPath`, (0, t.str)`${l.errSchemaPath}/${S}`), l.opts.verbose && (v.assign((0, t._)`${h}.schema`, b), v.assign((0, t._)`${h}.data`, y));
      });
    }
    e.extendErrors = a;
    function o(v, S) {
      const b = v.const("err", S);
      v.if((0, t._)`${i.default.vErrors} === null`, () => v.assign(i.default.vErrors, (0, t._)`[${b}]`), (0, t._)`${i.default.vErrors}.push(${b})`), v.code((0, t._)`${i.default.errors}++`);
    }
    function u(v, S) {
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
      return y === !1 ? (0, t._)`{}` : p(v, S, b);
    }
    function p(v, S, b = {}) {
      const { gen: y, it: d } = v, l = [
        f(d, b),
        w(v, b)
      ];
      return x(v, S, l), y.object(...l);
    }
    function f({ errorPath: v }, { instancePath: S }) {
      const b = S ? (0, t.str)`${v}${(0, n.getErrorPath)(S, n.Type.Str)}` : v;
      return [i.default.instancePath, (0, t.strConcat)(i.default.instancePath, b)];
    }
    function w({ keyword: v, it: { errSchemaPath: S } }, { schemaPath: b, parentSchema: y }) {
      let d = y ? S : (0, t.str)`${S}/${v}`;
      return b && (d = (0, t.str)`${d}${(0, n.getErrorPath)(b, n.Type.Str)}`), [m.schemaPath, d];
    }
    function x(v, { params: S, message: b }, y) {
      const { keyword: d, data: l, schemaValue: h, it: I } = v, { opts: A, propertyName: R, topSchemaRef: O, schemaPath: M } = I;
      y.push([m.keyword, d], [m.params, typeof S == "function" ? S(v) : S || (0, t._)`{}`]), A.messages && y.push([m.message, typeof b == "function" ? b(v) : b]), A.verbose && y.push([m.schema, h], [m.parentSchema, (0, t._)`${O}${M}`], [i.default.data, l]), R && y.push([m.propertyName, R]);
    }
  })(di)), di;
}
var pa;
function kl() {
  if (pa) return St;
  pa = 1, Object.defineProperty(St, "__esModule", { value: !0 }), St.boolOrEmptySchema = St.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Ur(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Je(), i = {
    message: "boolean schema is false"
  };
  function c(a) {
    const { gen: o, schema: u, validateName: m } = a;
    u === !1 ? s(a, !1) : typeof u == "object" && u.$async === !0 ? o.return(n.default.data) : (o.assign((0, t._)`${m}.errors`, null), o.return(!0));
  }
  St.topBoolOrEmptySchema = c;
  function r(a, o) {
    const { gen: u, schema: m } = a;
    m === !1 ? (u.var(o, !1), s(a)) : u.var(o, !0);
  }
  St.boolOrEmptySchema = r;
  function s(a, o) {
    const { gen: u, data: m } = a, g = {
      gen: u,
      keyword: "false schema",
      data: m,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(g, i, void 0, o);
  }
  return St;
}
var ve = {}, It = {}, fa;
function Jc() {
  if (fa) return It;
  fa = 1, Object.defineProperty(It, "__esModule", { value: !0 }), It.getRules = It.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(c) {
    return typeof c == "string" && t.has(c);
  }
  It.isJSONType = n;
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
  return It.getRules = i, It;
}
var it = {}, ha;
function Zc() {
  if (ha) return it;
  ha = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.shouldUseRule = it.shouldUseGroup = it.schemaHasRulesForType = void 0;
  function e({ schema: i, self: c }, r) {
    const s = c.RULES.types[r];
    return s && s !== !0 && t(i, s);
  }
  it.schemaHasRulesForType = e;
  function t(i, c) {
    return c.rules.some((r) => n(i, r));
  }
  it.shouldUseGroup = t;
  function n(i, c) {
    var r;
    return i[c.keyword] !== void 0 || ((r = c.definition.implements) === null || r === void 0 ? void 0 : r.some((s) => i[s] !== void 0));
  }
  return it.shouldUseRule = n, it;
}
var ma;
function Or() {
  if (ma) return ve;
  ma = 1, Object.defineProperty(ve, "__esModule", { value: !0 }), ve.reportTypeError = ve.checkDataTypes = ve.checkDataType = ve.coerceAndCheckDataType = ve.getJSONTypes = ve.getSchemaTypes = ve.DataType = void 0;
  const e = /* @__PURE__ */ Jc(), t = /* @__PURE__ */ Zc(), n = /* @__PURE__ */ Ur(), i = /* @__PURE__ */ ee(), c = /* @__PURE__ */ ne();
  var r;
  (function(b) {
    b[b.Correct = 0] = "Correct", b[b.Wrong = 1] = "Wrong";
  })(r || (ve.DataType = r = {}));
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
  ve.getSchemaTypes = s;
  function a(b) {
    const y = Array.isArray(b) ? b : b ? [b] : [];
    if (y.every(e.isJSONType))
      return y;
    throw new Error("type must be JSONType or JSONType[]: " + y.join(","));
  }
  ve.getJSONTypes = a;
  function o(b, y) {
    const { gen: d, data: l, opts: h } = b, I = m(y, h.coerceTypes), A = y.length > 0 && !(I.length === 0 && y.length === 1 && (0, t.schemaHasRulesForType)(b, y[0]));
    if (A) {
      const R = w(y, l, h.strictNumbers, r.Wrong);
      d.if(R, () => {
        I.length ? g(b, y, I) : v(b);
      });
    }
    return A;
  }
  ve.coerceAndCheckDataType = o;
  const u = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function m(b, y) {
    return y ? b.filter((d) => u.has(d) || y === "array" && d === "array") : [];
  }
  function g(b, y, d) {
    const { gen: l, data: h, opts: I } = b, A = l.let("dataType", (0, i._)`typeof ${h}`), R = l.let("coerced", (0, i._)`undefined`);
    I.coerceTypes === "array" && l.if((0, i._)`${A} == 'object' && Array.isArray(${h}) && ${h}.length == 1`, () => l.assign(h, (0, i._)`${h}[0]`).assign(A, (0, i._)`typeof ${h}`).if(w(y, h, I.strictNumbers), () => l.assign(R, h))), l.if((0, i._)`${R} !== undefined`);
    for (const M of d)
      (u.has(M) || M === "array" && I.coerceTypes === "array") && O(M);
    l.else(), v(b), l.endIf(), l.if((0, i._)`${R} !== undefined`, () => {
      l.assign(h, R), p(b, R);
    });
    function O(M) {
      switch (M) {
        case "string":
          l.elseIf((0, i._)`${A} == "number" || ${A} == "boolean"`).assign(R, (0, i._)`"" + ${h}`).elseIf((0, i._)`${h} === null`).assign(R, (0, i._)`""`);
          return;
        case "number":
          l.elseIf((0, i._)`${A} == "boolean" || ${h} === null
              || (${A} == "string" && ${h} && ${h} == +${h})`).assign(R, (0, i._)`+${h}`);
          return;
        case "integer":
          l.elseIf((0, i._)`${A} === "boolean" || ${h} === null
              || (${A} === "string" && ${h} && ${h} == +${h} && !(${h} % 1))`).assign(R, (0, i._)`+${h}`);
          return;
        case "boolean":
          l.elseIf((0, i._)`${h} === "false" || ${h} === 0 || ${h} === null`).assign(R, !1).elseIf((0, i._)`${h} === "true" || ${h} === 1`).assign(R, !0);
          return;
        case "null":
          l.elseIf((0, i._)`${h} === "" || ${h} === 0 || ${h} === false`), l.assign(R, null);
          return;
        case "array":
          l.elseIf((0, i._)`${A} === "string" || ${A} === "number"
              || ${A} === "boolean" || ${h} === null`).assign(R, (0, i._)`[${h}]`);
      }
    }
  }
  function p({ gen: b, parentData: y, parentDataProperty: d }, l) {
    b.if((0, i._)`${y} !== undefined`, () => b.assign((0, i._)`${y}[${d}]`, l));
  }
  function f(b, y, d, l = r.Correct) {
    const h = l === r.Correct ? i.operators.EQ : i.operators.NEQ;
    let I;
    switch (b) {
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
        return (0, i._)`typeof ${y} ${h} ${b}`;
    }
    return l === r.Correct ? I : (0, i.not)(I);
    function A(R = i.nil) {
      return (0, i.and)((0, i._)`typeof ${y} == "number"`, R, d ? (0, i._)`isFinite(${y})` : i.nil);
    }
  }
  ve.checkDataType = f;
  function w(b, y, d, l) {
    if (b.length === 1)
      return f(b[0], y, d, l);
    let h;
    const I = (0, c.toHash)(b);
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
  ve.checkDataTypes = w;
  const x = {
    message: ({ schema: b }) => `must be ${b}`,
    params: ({ schema: b, schemaValue: y }) => typeof b == "string" ? (0, i._)`{type: ${b}}` : (0, i._)`{type: ${y}}`
  };
  function v(b) {
    const y = S(b);
    (0, n.reportError)(y, x);
  }
  ve.reportTypeError = v;
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
  return ve;
}
var Xt = {}, ya;
function Nl() {
  if (ya) return Xt;
  ya = 1, Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.assignDefaults = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne();
  function n(c, r) {
    const { properties: s, items: a } = c.schema;
    if (r === "object" && s)
      for (const o in s)
        i(c, o, s[o].default);
    else r === "array" && Array.isArray(a) && a.forEach((o, u) => i(c, u, o.default));
  }
  Xt.assignDefaults = n;
  function i(c, r, s) {
    const { gen: a, compositeRule: o, data: u, opts: m } = c;
    if (s === void 0)
      return;
    const g = (0, e._)`${u}${(0, e.getProperty)(r)}`;
    if (o) {
      (0, t.checkStrictMode)(c, `default is ignored for: ${g}`);
      return;
    }
    let p = (0, e._)`${g} === undefined`;
    m.useDefaults === "empty" && (p = (0, e._)`${p} || ${g} === null || ${g} === ""`), a.if(p, (0, e._)`${g} = ${(0, e.stringify)(s)}`);
  }
  return Xt;
}
var Ve = {}, se = {}, ga;
function Ze() {
  if (ga) return se;
  ga = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.validateUnion = se.validateArray = se.usePattern = se.callValidateCode = se.schemaProperties = se.allSchemaProperties = se.noPropertyInData = se.propertyInData = se.isOwnProperty = se.hasPropFunc = se.reportMissingProp = se.checkMissingProp = se.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Je(), i = /* @__PURE__ */ ne();
  function c(b, y) {
    const { gen: d, data: l, it: h } = b;
    d.if(m(d, l, y, h.opts.ownProperties), () => {
      b.setParams({ missingProperty: (0, e._)`${y}` }, !0), b.error();
    });
  }
  se.checkReportMissingProp = c;
  function r({ gen: b, data: y, it: { opts: d } }, l, h) {
    return (0, e.or)(...l.map((I) => (0, e.and)(m(b, y, I, d.ownProperties), (0, e._)`${h} = ${I}`)));
  }
  se.checkMissingProp = r;
  function s(b, y) {
    b.setParams({ missingProperty: y }, !0), b.error();
  }
  se.reportMissingProp = s;
  function a(b) {
    return b.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  se.hasPropFunc = a;
  function o(b, y, d) {
    return (0, e._)`${a(b)}.call(${y}, ${d})`;
  }
  se.isOwnProperty = o;
  function u(b, y, d, l) {
    const h = (0, e._)`${y}${(0, e.getProperty)(d)} !== undefined`;
    return l ? (0, e._)`${h} && ${o(b, y, d)}` : h;
  }
  se.propertyInData = u;
  function m(b, y, d, l) {
    const h = (0, e._)`${y}${(0, e.getProperty)(d)} === undefined`;
    return l ? (0, e.or)(h, (0, e.not)(o(b, y, d))) : h;
  }
  se.noPropertyInData = m;
  function g(b) {
    return b ? Object.keys(b).filter((y) => y !== "__proto__") : [];
  }
  se.allSchemaProperties = g;
  function p(b, y) {
    return g(y).filter((d) => !(0, t.alwaysValidSchema)(b, y[d]));
  }
  se.schemaProperties = p;
  function f({ schemaCode: b, data: y, it: { gen: d, topSchemaRef: l, schemaPath: h, errorPath: I }, it: A }, R, O, M) {
    const q = M ? (0, e._)`${b}, ${y}, ${l}${h}` : y, $ = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, I)],
      [n.default.parentData, A.parentData],
      [n.default.parentDataProperty, A.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    A.opts.dynamicRef && $.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const E = (0, e._)`${q}, ${d.object(...$)}`;
    return O !== e.nil ? (0, e._)`${R}.call(${O}, ${E})` : (0, e._)`${R}(${E})`;
  }
  se.callValidateCode = f;
  const w = (0, e._)`new RegExp`;
  function x({ gen: b, it: { opts: y } }, d) {
    const l = y.unicodeRegExp ? "u" : "", { regExp: h } = y.code, I = h(d, l);
    return b.scopeValue("pattern", {
      key: I.toString(),
      ref: I,
      code: (0, e._)`${h.code === "new RegExp" ? w : (0, i.useFunc)(b, h)}(${d}, ${l})`
    });
  }
  se.usePattern = x;
  function v(b) {
    const { gen: y, data: d, keyword: l, it: h } = b, I = y.name("valid");
    if (h.allErrors) {
      const R = y.let("valid", !0);
      return A(() => y.assign(R, !1)), R;
    }
    return y.var(I, !0), A(() => y.break()), I;
    function A(R) {
      const O = y.const("len", (0, e._)`${d}.length`);
      y.forRange("i", 0, O, (M) => {
        b.subschema({
          keyword: l,
          dataProp: M,
          dataPropType: t.Type.Num
        }, I), y.if((0, e.not)(I), R);
      });
    }
  }
  se.validateArray = v;
  function S(b) {
    const { gen: y, schema: d, keyword: l, it: h } = b;
    if (!Array.isArray(d))
      throw new Error("ajv implementation error");
    if (d.some((O) => (0, t.alwaysValidSchema)(h, O)) && !h.opts.unevaluated)
      return;
    const A = y.let("valid", !1), R = y.name("_valid");
    y.block(() => d.forEach((O, M) => {
      const q = b.subschema({
        keyword: l,
        schemaProp: M,
        compositeRule: !0
      }, R);
      y.assign(A, (0, e._)`${A} || ${R}`), b.mergeValidEvaluated(q, R) || y.if((0, e.not)(A));
    })), b.result(A, () => b.reset(), () => b.error(!0));
  }
  return se.validateUnion = S, se;
}
var va;
function Ll() {
  if (va) return Ve;
  va = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.validateKeywordUsage = Ve.validSchemaType = Ve.funcKeywordCode = Ve.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Je(), n = /* @__PURE__ */ Ze(), i = /* @__PURE__ */ Ur();
  function c(p, f) {
    const { gen: w, keyword: x, schema: v, parentSchema: S, it: b } = p, y = f.macro.call(b.self, v, S, b), d = u(w, x, y);
    b.opts.validateSchema !== !1 && b.self.validateSchema(y, !0);
    const l = w.name("valid");
    p.subschema({
      schema: y,
      schemaPath: e.nil,
      errSchemaPath: `${b.errSchemaPath}/${x}`,
      topSchemaRef: d,
      compositeRule: !0
    }, l), p.pass(l, () => p.error(!0));
  }
  Ve.macroKeywordCode = c;
  function r(p, f) {
    var w;
    const { gen: x, keyword: v, schema: S, parentSchema: b, $data: y, it: d } = p;
    o(d, f);
    const l = !y && f.compile ? f.compile.call(d.self, S, b, d) : f.validate, h = u(x, v, l), I = x.let("valid");
    p.block$data(I, A), p.ok((w = f.valid) !== null && w !== void 0 ? w : I);
    function A() {
      if (f.errors === !1)
        M(), f.modifying && s(p), q(() => p.error());
      else {
        const $ = f.async ? R() : O();
        f.modifying && s(p), q(() => a(p, $));
      }
    }
    function R() {
      const $ = x.let("ruleErrs", null);
      return x.try(() => M((0, e._)`await `), (E) => x.assign(I, !1).if((0, e._)`${E} instanceof ${d.ValidationError}`, () => x.assign($, (0, e._)`${E}.errors`), () => x.throw(E))), $;
    }
    function O() {
      const $ = (0, e._)`${h}.errors`;
      return x.assign($, null), M(e.nil), $;
    }
    function M($ = f.async ? (0, e._)`await ` : e.nil) {
      const E = d.opts.passContext ? t.default.this : t.default.self, D = !("compile" in f && !y || f.schema === !1);
      x.assign(I, (0, e._)`${$}${(0, n.callValidateCode)(p, h, E, D)}`, f.modifying);
    }
    function q($) {
      var E;
      x.if((0, e.not)((E = f.valid) !== null && E !== void 0 ? E : I), $);
    }
  }
  Ve.funcKeywordCode = r;
  function s(p) {
    const { gen: f, data: w, it: x } = p;
    f.if(x.parentData, () => f.assign(w, (0, e._)`${x.parentData}[${x.parentDataProperty}]`));
  }
  function a(p, f) {
    const { gen: w } = p;
    w.if((0, e._)`Array.isArray(${f})`, () => {
      w.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${f} : ${t.default.vErrors}.concat(${f})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, i.extendErrors)(p);
    }, () => p.error());
  }
  function o({ schemaEnv: p }, f) {
    if (f.async && !p.$async)
      throw new Error("async keyword in sync schema");
  }
  function u(p, f, w) {
    if (w === void 0)
      throw new Error(`keyword "${f}" failed to compile`);
    return p.scopeValue("keyword", typeof w == "function" ? { ref: w } : { ref: w, code: (0, e.stringify)(w) });
  }
  function m(p, f, w = !1) {
    return !f.length || f.some((x) => x === "array" ? Array.isArray(p) : x === "object" ? p && typeof p == "object" && !Array.isArray(p) : typeof p == x || w && typeof p > "u");
  }
  Ve.validSchemaType = m;
  function g({ schema: p, opts: f, self: w, errSchemaPath: x }, v, S) {
    if (Array.isArray(v.keyword) ? !v.keyword.includes(S) : v.keyword !== S)
      throw new Error("ajv implementation error");
    const b = v.dependencies;
    if (b?.some((y) => !Object.prototype.hasOwnProperty.call(p, y)))
      throw new Error(`parent schema must have dependencies of ${S}: ${b.join(",")}`);
    if (v.validateSchema && !v.validateSchema(p[S])) {
      const d = `keyword "${S}" value is invalid at path "${x}": ` + w.errorsText(v.validateSchema.errors);
      if (f.validateSchema === "log")
        w.logger.error(d);
      else
        throw new Error(d);
    }
  }
  return Ve.validateKeywordUsage = g, Ve;
}
var st = {}, ba;
function Dl() {
  if (ba) return st;
  ba = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.extendSubschemaMode = st.extendSubschemaData = st.getSubschema = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne();
  function n(r, { keyword: s, schemaProp: a, schema: o, schemaPath: u, errSchemaPath: m, topSchemaRef: g }) {
    if (s !== void 0 && o !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const p = r.schema[s];
      return a === void 0 ? {
        schema: p,
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${r.errSchemaPath}/${s}`
      } : {
        schema: p[a],
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${r.errSchemaPath}/${s}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (o !== void 0) {
      if (u === void 0 || m === void 0 || g === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: o,
        schemaPath: u,
        topSchemaRef: g,
        errSchemaPath: m
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  st.getSubschema = n;
  function i(r, s, { dataProp: a, dataPropType: o, data: u, dataTypes: m, propertyName: g }) {
    if (u !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: p } = s;
    if (a !== void 0) {
      const { errorPath: w, dataPathArr: x, opts: v } = s, S = p.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      f(S), r.errorPath = (0, e.str)`${w}${(0, t.getErrorPath)(a, o, v.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${a}`, r.dataPathArr = [...x, r.parentDataProperty];
    }
    if (u !== void 0) {
      const w = u instanceof e.Name ? u : p.let("data", u, !0);
      f(w), g !== void 0 && (r.propertyName = g);
    }
    m && (r.dataTypes = m);
    function f(w) {
      r.data = w, r.dataLevel = s.dataLevel + 1, r.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), r.parentData = s.data, r.dataNames = [...s.dataNames, w];
    }
  }
  st.extendSubschemaData = i;
  function c(r, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: o, createErrors: u, allErrors: m }) {
    o !== void 0 && (r.compositeRule = o), u !== void 0 && (r.createErrors = u), m !== void 0 && (r.allErrors = m), r.jtdDiscriminator = s, r.jtdMetadata = a;
  }
  return st.extendSubschemaMode = c, st;
}
var Ie = {}, fi, wa;
function Kc() {
  return wa || (wa = 1, fi = function e(t, n) {
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
        var s = r[c];
        if (!e(t[s], n[s])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), fi;
}
var hi = { exports: {} }, xa;
function zl() {
  if (xa) return hi.exports;
  xa = 1;
  var e = hi.exports = function(i, c, r) {
    typeof c == "function" && (r = c, c = {}), r = c.cb || r;
    var s = typeof r == "function" ? r : r.pre || function() {
    }, a = r.post || function() {
    };
    t(c, s, a, i, "", i);
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
  function t(i, c, r, s, a, o, u, m, g, p) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      c(s, a, o, u, m, g, p);
      for (var f in s) {
        var w = s[f];
        if (Array.isArray(w)) {
          if (f in e.arrayKeywords)
            for (var x = 0; x < w.length; x++)
              t(i, c, r, w[x], a + "/" + f + "/" + x, o, a, f, s, x);
        } else if (f in e.propsKeywords) {
          if (w && typeof w == "object")
            for (var v in w)
              t(i, c, r, w[v], a + "/" + f + "/" + n(v), o, a, f, s, v);
        } else (f in e.keywords || i.allKeys && !(f in e.skipKeywords)) && t(i, c, r, w, a + "/" + f, o, a, f, s);
      }
      r(s, a, o, u, m, g, p);
    }
  }
  function n(i) {
    return i.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return hi.exports;
}
var Sa;
function Vr() {
  if (Sa) return Ie;
  Sa = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.getSchemaRefs = Ie.resolveUrl = Ie.normalizeId = Ie._getFullPath = Ie.getFullPath = Ie.inlineRef = void 0;
  const e = /* @__PURE__ */ ne(), t = Kc(), n = zl(), i = /* @__PURE__ */ new Set([
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
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(x) {
    for (const v in x) {
      if (r.has(v))
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
      if (v++, !i.has(S) && (typeof x[S] == "object" && (0, e.eachItem)(x[S], (b) => v += a(b)), v === 1 / 0))
        return 1 / 0;
    }
    return v;
  }
  function o(x, v = "", S) {
    S !== !1 && (v = g(v));
    const b = x.parse(v);
    return u(x, b);
  }
  Ie.getFullPath = o;
  function u(x, v) {
    return x.serialize(v).split("#")[0] + "#";
  }
  Ie._getFullPath = u;
  const m = /#\/?$/;
  function g(x) {
    return x ? x.replace(m, "") : "";
  }
  Ie.normalizeId = g;
  function p(x, v, S) {
    return S = g(S), x.resolve(v, S);
  }
  Ie.resolveUrl = p;
  const f = /^[a-z_][-a-z0-9._]*$/i;
  function w(x, v) {
    if (typeof x == "boolean")
      return {};
    const { schemaId: S, uriResolver: b } = this.opts, y = g(x[S] || v), d = { "": y }, l = o(b, y, !1), h = {}, I = /* @__PURE__ */ new Set();
    return n(x, { allKeys: !0 }, (O, M, q, $) => {
      if ($ === void 0)
        return;
      const E = l + M;
      let D = d[$];
      typeof O[S] == "string" && (D = P.call(this, O[S])), G.call(this, O.$anchor), G.call(this, O.$dynamicAnchor), d[M] = D;
      function P(B) {
        const H = this.opts.uriResolver.resolve;
        if (B = g(D ? H(D, B) : B), I.has(B))
          throw R(B);
        I.add(B);
        let C = this.refs[B];
        return typeof C == "string" && (C = this.refs[C]), typeof C == "object" ? A(O, C.schema, B) : B !== g(E) && (B[0] === "#" ? (A(O, h[B], B), h[B] = O) : this.refs[B] = E), B;
      }
      function G(B) {
        if (typeof B == "string") {
          if (!f.test(B))
            throw new Error(`invalid anchor "${B}"`);
          P.call(this, `#${B}`);
        }
      }
    }), h;
    function A(O, M, q) {
      if (M !== void 0 && !t(O, M))
        throw R(q);
    }
    function R(O) {
      return new Error(`reference "${O}" resolves to more than one schema`);
    }
  }
  return Ie.getSchemaRefs = w, Ie;
}
var Ia;
function hn() {
  if (Ia) return rt;
  Ia = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.getData = rt.KeywordCxt = rt.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ kl(), t = /* @__PURE__ */ Or(), n = /* @__PURE__ */ Zc(), i = /* @__PURE__ */ Or(), c = /* @__PURE__ */ Nl(), r = /* @__PURE__ */ Ll(), s = /* @__PURE__ */ Dl(), a = /* @__PURE__ */ ee(), o = /* @__PURE__ */ Je(), u = /* @__PURE__ */ Vr(), m = /* @__PURE__ */ ne(), g = /* @__PURE__ */ Ur();
  function p(U) {
    if (l(U) && (I(U), d(U))) {
      v(U);
      return;
    }
    f(U, () => (0, e.topBoolOrEmptySchema)(U));
  }
  rt.validateFunctionCode = p;
  function f({ gen: U, validateName: V, schema: F, schemaEnv: K, opts: X }, Y) {
    X.code.es5 ? U.func(V, (0, a._)`${o.default.data}, ${o.default.valCxt}`, K.$async, () => {
      U.code((0, a._)`"use strict"; ${b(F, X)}`), x(U, X), U.code(Y);
    }) : U.func(V, (0, a._)`${o.default.data}, ${w(X)}`, K.$async, () => U.code(b(F, X)).code(Y));
  }
  function w(U) {
    return (0, a._)`{${o.default.instancePath}="", ${o.default.parentData}, ${o.default.parentDataProperty}, ${o.default.rootData}=${o.default.data}${U.dynamicRef ? (0, a._)`, ${o.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function x(U, V) {
    U.if(o.default.valCxt, () => {
      U.var(o.default.instancePath, (0, a._)`${o.default.valCxt}.${o.default.instancePath}`), U.var(o.default.parentData, (0, a._)`${o.default.valCxt}.${o.default.parentData}`), U.var(o.default.parentDataProperty, (0, a._)`${o.default.valCxt}.${o.default.parentDataProperty}`), U.var(o.default.rootData, (0, a._)`${o.default.valCxt}.${o.default.rootData}`), V.dynamicRef && U.var(o.default.dynamicAnchors, (0, a._)`${o.default.valCxt}.${o.default.dynamicAnchors}`);
    }, () => {
      U.var(o.default.instancePath, (0, a._)`""`), U.var(o.default.parentData, (0, a._)`undefined`), U.var(o.default.parentDataProperty, (0, a._)`undefined`), U.var(o.default.rootData, o.default.data), V.dynamicRef && U.var(o.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function v(U) {
    const { schema: V, opts: F, gen: K } = U;
    f(U, () => {
      F.$comment && V.$comment && $(U), O(U), K.let(o.default.vErrors, null), K.let(o.default.errors, 0), F.unevaluated && S(U), A(U), E(U);
    });
  }
  function S(U) {
    const { gen: V, validateName: F } = U;
    U.evaluated = V.const("evaluated", (0, a._)`${F}.evaluated`), V.if((0, a._)`${U.evaluated}.dynamicProps`, () => V.assign((0, a._)`${U.evaluated}.props`, (0, a._)`undefined`)), V.if((0, a._)`${U.evaluated}.dynamicItems`, () => V.assign((0, a._)`${U.evaluated}.items`, (0, a._)`undefined`));
  }
  function b(U, V) {
    const F = typeof U == "object" && U[V.schemaId];
    return F && (V.code.source || V.code.process) ? (0, a._)`/*# sourceURL=${F} */` : a.nil;
  }
  function y(U, V) {
    if (l(U) && (I(U), d(U))) {
      h(U, V);
      return;
    }
    (0, e.boolOrEmptySchema)(U, V);
  }
  function d({ schema: U, self: V }) {
    if (typeof U == "boolean")
      return !U;
    for (const F in U)
      if (V.RULES.all[F])
        return !0;
    return !1;
  }
  function l(U) {
    return typeof U.schema != "boolean";
  }
  function h(U, V) {
    const { schema: F, gen: K, opts: X } = U;
    X.$comment && F.$comment && $(U), M(U), q(U);
    const Y = K.const("_errs", o.default.errors);
    A(U, Y), K.var(V, (0, a._)`${Y} === ${o.default.errors}`);
  }
  function I(U) {
    (0, m.checkUnknownRules)(U), R(U);
  }
  function A(U, V) {
    if (U.opts.jtd)
      return P(U, [], !1, V);
    const F = (0, t.getSchemaTypes)(U.schema), K = (0, t.coerceAndCheckDataType)(U, F);
    P(U, F, !K, V);
  }
  function R(U) {
    const { schema: V, errSchemaPath: F, opts: K, self: X } = U;
    V.$ref && K.ignoreKeywordsWithRef && (0, m.schemaHasRulesButRef)(V, X.RULES) && X.logger.warn(`$ref: keywords ignored in schema at path "${F}"`);
  }
  function O(U) {
    const { schema: V, opts: F } = U;
    V.default !== void 0 && F.useDefaults && F.strictSchema && (0, m.checkStrictMode)(U, "default is ignored in the schema root");
  }
  function M(U) {
    const V = U.schema[U.opts.schemaId];
    V && (U.baseId = (0, u.resolveUrl)(U.opts.uriResolver, U.baseId, V));
  }
  function q(U) {
    if (U.schema.$async && !U.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function $({ gen: U, schemaEnv: V, schema: F, errSchemaPath: K, opts: X }) {
    const Y = F.$comment;
    if (X.$comment === !0)
      U.code((0, a._)`${o.default.self}.logger.log(${Y})`);
    else if (typeof X.$comment == "function") {
      const re = (0, a.str)`${K}/$comment`, be = U.scopeValue("root", { ref: V.root });
      U.code((0, a._)`${o.default.self}.opts.$comment(${Y}, ${re}, ${be}.schema)`);
    }
  }
  function E(U) {
    const { gen: V, schemaEnv: F, validateName: K, ValidationError: X, opts: Y } = U;
    F.$async ? V.if((0, a._)`${o.default.errors} === 0`, () => V.return(o.default.data), () => V.throw((0, a._)`new ${X}(${o.default.vErrors})`)) : (V.assign((0, a._)`${K}.errors`, o.default.vErrors), Y.unevaluated && D(U), V.return((0, a._)`${o.default.errors} === 0`));
  }
  function D({ gen: U, evaluated: V, props: F, items: K }) {
    F instanceof a.Name && U.assign((0, a._)`${V}.props`, F), K instanceof a.Name && U.assign((0, a._)`${V}.items`, K);
  }
  function P(U, V, F, K) {
    const { gen: X, schema: Y, data: re, allErrors: be, opts: he, self: ye } = U, { RULES: fe } = ye;
    if (Y.$ref && (he.ignoreKeywordsWithRef || !(0, m.schemaHasRulesButRef)(Y, fe))) {
      X.block(() => L(U, "$ref", fe.all.$ref.definition));
      return;
    }
    he.jtd || B(U, V), X.block(() => {
      for (const Te of fe.rules)
        Ke(Te);
      Ke(fe.post);
    });
    function Ke(Te) {
      (0, n.shouldUseGroup)(Y, Te) && (Te.type ? (X.if((0, i.checkDataType)(Te.type, re, he.strictNumbers)), G(U, Te), V.length === 1 && V[0] === Te.type && F && (X.else(), (0, i.reportTypeError)(U)), X.endIf()) : G(U, Te), be || X.if((0, a._)`${o.default.errors} === ${K || 0}`));
    }
  }
  function G(U, V) {
    const { gen: F, schema: K, opts: { useDefaults: X } } = U;
    X && (0, c.assignDefaults)(U, V.type), F.block(() => {
      for (const Y of V.rules)
        (0, n.shouldUseRule)(K, Y) && L(U, Y.keyword, Y.definition, V.type);
    });
  }
  function B(U, V) {
    U.schemaEnv.meta || !U.opts.strictTypes || (H(U, V), U.opts.allowUnionTypes || C(U, V), k(U, U.dataTypes));
  }
  function H(U, V) {
    if (V.length) {
      if (!U.dataTypes.length) {
        U.dataTypes = V;
        return;
      }
      V.forEach((F) => {
        N(U.dataTypes, F) || _(U, `type "${F}" not allowed by context "${U.dataTypes.join(",")}"`);
      }), j(U, V);
    }
  }
  function C(U, V) {
    V.length > 1 && !(V.length === 2 && V.includes("null")) && _(U, "use allowUnionTypes to allow union type keyword");
  }
  function k(U, V) {
    const F = U.self.RULES.all;
    for (const K in F) {
      const X = F[K];
      if (typeof X == "object" && (0, n.shouldUseRule)(U.schema, X)) {
        const { type: Y } = X.definition;
        Y.length && !Y.some((re) => z(V, re)) && _(U, `missing type "${Y.join(",")}" for keyword "${K}"`);
      }
    }
  }
  function z(U, V) {
    return U.includes(V) || V === "number" && U.includes("integer");
  }
  function N(U, V) {
    return U.includes(V) || V === "integer" && U.includes("number");
  }
  function j(U, V) {
    const F = [];
    for (const K of U.dataTypes)
      N(V, K) ? F.push(K) : V.includes("integer") && K === "number" && F.push("integer");
    U.dataTypes = F;
  }
  function _(U, V) {
    const F = U.schemaEnv.baseId + U.errSchemaPath;
    V += ` at "${F}" (strictTypes)`, (0, m.checkStrictMode)(U, V, U.opts.strictTypes);
  }
  class T {
    constructor(V, F, K) {
      if ((0, r.validateKeywordUsage)(V, F, K), this.gen = V.gen, this.allErrors = V.allErrors, this.keyword = K, this.data = V.data, this.schema = V.schema[K], this.$data = F.$data && V.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, m.schemaRefOrVal)(V, this.schema, K, this.$data), this.schemaType = F.schemaType, this.parentSchema = V.schema, this.params = {}, this.it = V, this.def = F, this.$data)
        this.schemaCode = V.gen.const("vSchema", Z(this.$data, V));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, F.schemaType, F.allowUndefined))
        throw new Error(`${K} value must be ${JSON.stringify(F.schemaType)}`);
      ("code" in F ? F.trackErrors : F.errors !== !1) && (this.errsCount = V.gen.const("_errs", o.default.errors));
    }
    result(V, F, K) {
      this.failResult((0, a.not)(V), F, K);
    }
    failResult(V, F, K) {
      this.gen.if(V), K ? K() : this.error(), F ? (this.gen.else(), F(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(V, F) {
      this.failResult((0, a.not)(V), void 0, F);
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
      const { schemaCode: F } = this;
      this.fail((0, a._)`${F} !== undefined && (${(0, a.or)(this.invalid$data(), V)})`);
    }
    error(V, F, K) {
      if (F) {
        this.setParams(F), this._error(V, K), this.setParams({});
        return;
      }
      this._error(V, K);
    }
    _error(V, F) {
      (V ? g.reportExtraError : g.reportError)(this, this.def.error, F);
    }
    $dataError() {
      (0, g.reportError)(this, this.def.$dataError || g.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, g.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(V) {
      this.allErrors || this.gen.if(V);
    }
    setParams(V, F) {
      F ? Object.assign(this.params, V) : this.params = V;
    }
    block$data(V, F, K = a.nil) {
      this.gen.block(() => {
        this.check$data(V, K), F();
      });
    }
    check$data(V = a.nil, F = a.nil) {
      if (!this.$data)
        return;
      const { gen: K, schemaCode: X, schemaType: Y, def: re } = this;
      K.if((0, a.or)((0, a._)`${X} === undefined`, F)), V !== a.nil && K.assign(V, !0), (Y.length || re.validateSchema) && (K.elseIf(this.invalid$data()), this.$dataError(), V !== a.nil && K.assign(V, !1)), K.else();
    }
    invalid$data() {
      const { gen: V, schemaCode: F, schemaType: K, def: X, it: Y } = this;
      return (0, a.or)(re(), be());
      function re() {
        if (K.length) {
          if (!(F instanceof a.Name))
            throw new Error("ajv implementation error");
          const he = Array.isArray(K) ? K : [K];
          return (0, a._)`${(0, i.checkDataTypes)(he, F, Y.opts.strictNumbers, i.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function be() {
        if (X.validateSchema) {
          const he = V.scopeValue("validate$data", { ref: X.validateSchema });
          return (0, a._)`!${he}(${F})`;
        }
        return a.nil;
      }
    }
    subschema(V, F) {
      const K = (0, s.getSubschema)(this.it, V);
      (0, s.extendSubschemaData)(K, this.it, V), (0, s.extendSubschemaMode)(K, V);
      const X = { ...this.it, ...K, items: void 0, props: void 0 };
      return y(X, F), X;
    }
    mergeEvaluated(V, F) {
      const { it: K, gen: X } = this;
      K.opts.unevaluated && (K.props !== !0 && V.props !== void 0 && (K.props = m.mergeEvaluated.props(X, V.props, K.props, F)), K.items !== !0 && V.items !== void 0 && (K.items = m.mergeEvaluated.items(X, V.items, K.items, F)));
    }
    mergeValidEvaluated(V, F) {
      const { it: K, gen: X } = this;
      if (K.opts.unevaluated && (K.props !== !0 || K.items !== !0))
        return X.if(F, () => this.mergeEvaluated(V, a.Name)), !0;
    }
  }
  rt.KeywordCxt = T;
  function L(U, V, F, K) {
    const X = new T(U, F, V);
    "code" in F ? F.code(X, K) : X.$data && F.validate ? (0, r.funcKeywordCode)(X, F) : "macro" in F ? (0, r.macroKeywordCode)(X, F) : (F.compile || F.validate) && (0, r.funcKeywordCode)(X, F);
  }
  const J = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Z(U, { dataLevel: V, dataNames: F, dataPathArr: K }) {
    let X, Y;
    if (U === "")
      return o.default.rootData;
    if (U[0] === "/") {
      if (!J.test(U))
        throw new Error(`Invalid JSON-pointer: ${U}`);
      X = U, Y = o.default.rootData;
    } else {
      const ye = Q.exec(U);
      if (!ye)
        throw new Error(`Invalid JSON-pointer: ${U}`);
      const fe = +ye[1];
      if (X = ye[2], X === "#") {
        if (fe >= V)
          throw new Error(he("property/index", fe));
        return K[V - fe];
      }
      if (fe > V)
        throw new Error(he("data", fe));
      if (Y = F[V - fe], !X)
        return Y;
    }
    let re = Y;
    const be = X.split("/");
    for (const ye of be)
      ye && (Y = (0, a._)`${Y}${(0, a.getProperty)((0, m.unescapeJsonPointer)(ye))}`, re = (0, a._)`${re} && ${Y}`);
    return re;
    function he(ye, fe) {
      return `Cannot access ${ye} ${fe} levels up, current level is ${V}`;
    }
  }
  return rt.getData = Z, rt;
}
var $n = {}, Aa;
function Fr() {
  if (Aa) return $n;
  Aa = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return $n.default = e, $n;
}
var qn = {}, _a;
function mn() {
  if (_a) return qn;
  _a = 1, Object.defineProperty(qn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Vr();
  class t extends Error {
    constructor(i, c, r, s) {
      super(s || `can't resolve reference ${r} from id ${c}`), this.missingRef = (0, e.resolveUrl)(i, c, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(i, this.missingRef));
    }
  }
  return qn.default = t, qn;
}
var Pe = {}, $a;
function Br() {
  if ($a) return Pe;
  $a = 1, Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.resolveSchema = Pe.getCompilingSchema = Pe.resolveRef = Pe.compileSchema = Pe.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Fr(), n = /* @__PURE__ */ Je(), i = /* @__PURE__ */ Vr(), c = /* @__PURE__ */ ne(), r = /* @__PURE__ */ hn();
  class s {
    constructor(S) {
      var b;
      this.refs = {}, this.dynamicAnchors = {};
      let y;
      typeof S.schema == "object" && (y = S.schema), this.schema = S.schema, this.schemaId = S.schemaId, this.root = S.root || this, this.baseId = (b = S.baseId) !== null && b !== void 0 ? b : (0, i.normalizeId)(y?.[S.schemaId || "$id"]), this.schemaPath = S.schemaPath, this.localRefs = S.localRefs, this.meta = S.meta, this.$async = y?.$async, this.refs = {};
    }
  }
  Pe.SchemaEnv = s;
  function a(v) {
    const S = m.call(this, v);
    if (S)
      return S;
    const b = (0, i.getFullPath)(this.opts.uriResolver, v.root.baseId), { es5: y, lines: d } = this.opts.code, { ownProperties: l } = this.opts, h = new e.CodeGen(this.scope, { es5: y, lines: d, ownProperties: l });
    let I;
    v.$async && (I = h.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const A = h.scopeName("validate");
    v.validateName = A;
    const R = {
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
    let O;
    try {
      this._compilations.add(v), (0, r.validateFunctionCode)(R), h.optimize(this.opts.code.optimize);
      const M = h.toString();
      O = `${h.scopeRefs(n.default.scope)}return ${M}`, this.opts.code.process && (O = this.opts.code.process(O, v));
      const $ = new Function(`${n.default.self}`, `${n.default.scope}`, O)(this, this.scope.get());
      if (this.scope.value(A, { ref: $ }), $.errors = null, $.schema = v.schema, $.schemaEnv = v, v.$async && ($.$async = !0), this.opts.code.source === !0 && ($.source = { validateName: A, validateCode: M, scopeValues: h._values }), this.opts.unevaluated) {
        const { props: E, items: D } = R;
        $.evaluated = {
          props: E instanceof e.Name ? void 0 : E,
          items: D instanceof e.Name ? void 0 : D,
          dynamicProps: E instanceof e.Name,
          dynamicItems: D instanceof e.Name
        }, $.source && ($.source.evaluated = (0, e.stringify)($.evaluated));
      }
      return v.validate = $, v;
    } catch (M) {
      throw delete v.validate, delete v.validateName, O && this.logger.error("Error compiling schema, function code:", O), M;
    } finally {
      this._compilations.delete(v);
    }
  }
  Pe.compileSchema = a;
  function o(v, S, b) {
    var y;
    b = (0, i.resolveUrl)(this.opts.uriResolver, S, b);
    const d = v.refs[b];
    if (d)
      return d;
    let l = p.call(this, v, b);
    if (l === void 0) {
      const h = (y = v.localRefs) === null || y === void 0 ? void 0 : y[b], { schemaId: I } = this.opts;
      h && (l = new s({ schema: h, schemaId: I, root: v, baseId: S }));
    }
    if (l !== void 0)
      return v.refs[b] = u.call(this, l);
  }
  Pe.resolveRef = o;
  function u(v) {
    return (0, i.inlineRef)(v.schema, this.opts.inlineRefs) ? v.schema : v.validate ? v : a.call(this, v);
  }
  function m(v) {
    for (const S of this._compilations)
      if (g(S, v))
        return S;
  }
  Pe.getCompilingSchema = m;
  function g(v, S) {
    return v.schema === S.schema && v.root === S.root && v.baseId === S.baseId;
  }
  function p(v, S) {
    let b;
    for (; typeof (b = this.refs[S]) == "string"; )
      S = b;
    return b || this.schemas[S] || f.call(this, v, S);
  }
  function f(v, S) {
    const b = this.opts.uriResolver.parse(S), y = (0, i._getFullPath)(this.opts.uriResolver, b);
    let d = (0, i.getFullPath)(this.opts.uriResolver, v.baseId, void 0);
    if (Object.keys(v.schema).length > 0 && y === d)
      return x.call(this, b, v);
    const l = (0, i.normalizeId)(y), h = this.refs[l] || this.schemas[l];
    if (typeof h == "string") {
      const I = f.call(this, v, h);
      return typeof I?.schema != "object" ? void 0 : x.call(this, b, I);
    }
    if (typeof h?.schema == "object") {
      if (h.validate || a.call(this, h), l === (0, i.normalizeId)(S)) {
        const { schema: I } = h, { schemaId: A } = this.opts, R = I[A];
        return R && (d = (0, i.resolveUrl)(this.opts.uriResolver, d, R)), new s({ schema: I, schemaId: A, root: v, baseId: d });
      }
      return x.call(this, b, h);
    }
  }
  Pe.resolveSchema = f;
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
      const R = typeof b == "object" && b[this.opts.schemaId];
      !w.has(I) && R && (S = (0, i.resolveUrl)(this.opts.uriResolver, S, R));
    }
    let l;
    if (typeof b != "boolean" && b.$ref && !(0, c.schemaHasRulesButRef)(b, this.RULES)) {
      const I = (0, i.resolveUrl)(this.opts.uriResolver, S, b.$ref);
      l = f.call(this, y, I);
    }
    const { schemaId: h } = this.opts;
    if (l = l || new s({ schema: b, schemaId: h, root: y, baseId: S }), l.schema !== l.root.schema)
      return l;
  }
  return Pe;
}
const Ul = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Vl = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Fl = "object", Bl = ["$data"], Gl = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Hl = !1, Jl = {
  $id: Ul,
  description: Vl,
  type: Fl,
  required: Bl,
  properties: Gl,
  additionalProperties: Hl
};
var jn = {}, Wt = { exports: {} }, mi, qa;
function Qc() {
  if (qa) return mi;
  qa = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function n(p) {
    let f = "", w = 0, x = 0;
    for (x = 0; x < p.length; x++)
      if (w = p[x].charCodeAt(0), w !== 48) {
        if (!(w >= 48 && w <= 57 || w >= 65 && w <= 70 || w >= 97 && w <= 102))
          return "";
        f += p[x];
        break;
      }
    for (x += 1; x < p.length; x++) {
      if (w = p[x].charCodeAt(0), !(w >= 48 && w <= 57 || w >= 65 && w <= 70 || w >= 97 && w <= 102))
        return "";
      f += p[x];
    }
    return f;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function c(p) {
    return p.length = 0, !0;
  }
  function r(p, f, w) {
    if (p.length) {
      const x = n(p);
      if (x !== "")
        f.push(x);
      else
        return w.error = !0, !1;
      p.length = 0;
    }
    return !0;
  }
  function s(p) {
    let f = 0;
    const w = { error: !1, address: "", zone: "" }, x = [], v = [];
    let S = !1, b = !1, y = r;
    for (let d = 0; d < p.length; d++) {
      const l = p[d];
      if (!(l === "[" || l === "]"))
        if (l === ":") {
          if (S === !0 && (b = !0), !y(v, x, w))
            break;
          if (++f > 7) {
            w.error = !0;
            break;
          }
          d > 0 && p[d - 1] === ":" && (S = !0), x.push(":");
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
  function a(p) {
    if (o(p, ":") < 2)
      return { host: p, isIPV6: !1 };
    const f = s(p);
    if (f.error)
      return { host: p, isIPV6: !1 };
    {
      let w = f.address, x = f.address;
      return f.zone && (w += "%" + f.zone, x += "%25" + f.zone), { host: w, isIPV6: !0, escapedHost: x };
    }
  }
  function o(p, f) {
    let w = 0;
    for (let x = 0; x < p.length; x++)
      p[x] === f && w++;
    return w;
  }
  function u(p) {
    let f = p;
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
  function m(p, f) {
    const w = f !== !0 ? escape : unescape;
    return p.scheme !== void 0 && (p.scheme = w(p.scheme)), p.userinfo !== void 0 && (p.userinfo = w(p.userinfo)), p.host !== void 0 && (p.host = w(p.host)), p.path !== void 0 && (p.path = w(p.path)), p.query !== void 0 && (p.query = w(p.query)), p.fragment !== void 0 && (p.fragment = w(p.fragment)), p;
  }
  function g(p) {
    const f = [];
    if (p.userinfo !== void 0 && (f.push(p.userinfo), f.push("@")), p.host !== void 0) {
      let w = unescape(p.host);
      if (!t(w)) {
        const x = a(w);
        x.isIPV6 === !0 ? w = `[${x.escapedHost}]` : w = p.host;
      }
      f.push(w);
    }
    return (typeof p.port == "number" || typeof p.port == "string") && (f.push(":"), f.push(String(p.port))), f.length ? f.join("") : void 0;
  }
  return mi = {
    nonSimpleDomain: i,
    recomposeAuthority: g,
    normalizeComponentEncoding: m,
    removeDotSegments: u,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: a,
    stringArrayToHexStripped: n
  }, mi;
}
var yi, ja;
function Zl() {
  if (ja) return yi;
  ja = 1;
  const { isUUID: e } = Qc(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function u(l, h) {
    if (!l.path)
      return l.error = "URN can not be parsed", l;
    const I = l.path.match(t);
    if (I) {
      const A = h.scheme || l.scheme || "urn";
      l.nid = I[1].toLowerCase(), l.nss = I[2];
      const R = `${A}:${h.nid || l.nid}`, O = d(R);
      l.path = void 0, O && (l = O.parse(l, h));
    } else
      l.error = l.error || "URN can not be parsed.";
    return l;
  }
  function m(l, h) {
    if (l.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const I = h.scheme || l.scheme || "urn", A = l.nid.toLowerCase(), R = `${I}:${h.nid || A}`, O = d(R);
    O && (l = O.serialize(l, h));
    const M = l, q = l.nss;
    return M.path = `${A || h.nid}:${q}`, h.skipEscape = !0, M;
  }
  function g(l, h) {
    const I = l;
    return I.uuid = I.nss, I.nss = void 0, !h.tolerant && (!I.uuid || !e(I.uuid)) && (I.error = I.error || "UUID is not valid."), I;
  }
  function p(l) {
    const h = l;
    return h.nss = (l.uuid || "").toLowerCase(), h;
  }
  const f = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: r,
      serialize: s
    }
  ), w = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: f.domainHost,
      parse: r,
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
          parse: u,
          serialize: m,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: g,
          serialize: p,
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
  return yi = {
    wsIsSecure: c,
    SCHEMES: y,
    isValidSchemeName: i,
    getSchemeHandler: d
  }, yi;
}
var Ra;
function Kl() {
  if (Ra) return Wt.exports;
  Ra = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizeComponentEncoding: i, isIPv4: c, nonSimpleDomain: r } = Qc(), { SCHEMES: s, getSchemeHandler: a } = Zl();
  function o(v, S) {
    return typeof v == "string" ? v = /** @type {T} */
    p(w(v, S), S) : typeof v == "object" && (v = /** @type {T} */
    w(p(v, S), S)), v;
  }
  function u(v, S, b) {
    const y = b ? Object.assign({ scheme: "null" }, b) : { scheme: "null" }, d = m(w(v, y), w(S, y), y, !0);
    return y.skipEscape = !0, p(d, y);
  }
  function m(v, S, b, y) {
    const d = {};
    return y || (v = w(p(v, b), b), S = w(p(S, b), b)), b = b || {}, !b.tolerant && S.scheme ? (d.scheme = S.scheme, d.userinfo = S.userinfo, d.host = S.host, d.port = S.port, d.path = t(S.path || ""), d.query = S.query) : (S.userinfo !== void 0 || S.host !== void 0 || S.port !== void 0 ? (d.userinfo = S.userinfo, d.host = S.host, d.port = S.port, d.path = t(S.path || ""), d.query = S.query) : (S.path ? (S.path[0] === "/" ? d.path = t(S.path) : ((v.userinfo !== void 0 || v.host !== void 0 || v.port !== void 0) && !v.path ? d.path = "/" + S.path : v.path ? d.path = v.path.slice(0, v.path.lastIndexOf("/") + 1) + S.path : d.path = S.path, d.path = t(d.path)), d.query = S.query) : (d.path = v.path, S.query !== void 0 ? d.query = S.query : d.query = v.query), d.userinfo = v.userinfo, d.host = v.host, d.port = v.port), d.scheme = v.scheme), d.fragment = S.fragment, d;
  }
  function g(v, S, b) {
    return typeof v == "string" ? (v = unescape(v), v = p(i(w(v, b), !0), { ...b, skipEscape: !0 })) : typeof v == "object" && (v = p(i(v, !0), { ...b, skipEscape: !0 })), typeof S == "string" ? (S = unescape(S), S = p(i(w(S, b), !0), { ...b, skipEscape: !0 })) : typeof S == "object" && (S = p(i(S, !0), { ...b, skipEscape: !0 })), v.toLowerCase() === S.toLowerCase();
  }
  function p(v, S) {
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
      if (!b.unicodeSupport && (!h || !h.unicodeSupport) && y.host && (b.domainHost || h && h.domainHost) && d === !1 && r(y.host))
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
    resolve: u,
    resolveComponent: m,
    equal: g,
    serialize: p,
    parse: w
  };
  return Wt.exports = x, Wt.exports.default = x, Wt.exports.fastUri = x, Wt.exports;
}
var Pa;
function Ql() {
  if (Pa) return jn;
  Pa = 1, Object.defineProperty(jn, "__esModule", { value: !0 });
  const e = Kl();
  return e.code = 'require("ajv/dist/runtime/uri").default', jn.default = e, jn;
}
var Ea;
function Xc() {
  return Ea || (Ea = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ hn();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var n = /* @__PURE__ */ ee();
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
    const i = /* @__PURE__ */ Fr(), c = /* @__PURE__ */ mn(), r = /* @__PURE__ */ Jc(), s = /* @__PURE__ */ Br(), a = /* @__PURE__ */ ee(), o = /* @__PURE__ */ Vr(), u = /* @__PURE__ */ Or(), m = /* @__PURE__ */ ne(), g = Jl, p = /* @__PURE__ */ Ql(), f = (C, k) => new RegExp(C, k);
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
    function y(C) {
      var k, z, N, j, _, T, L, J, Q, Z, U, V, F, K, X, Y, re, be, he, ye, fe, Ke, Te, Wr, Yr;
      const Qt = C.strict, ei = (k = C.code) === null || k === void 0 ? void 0 : k.optimize, Hs = ei === !0 || ei === void 0 ? 1 : ei || 0, Js = (N = (z = C.code) === null || z === void 0 ? void 0 : z.regExp) !== null && N !== void 0 ? N : f, Dd = (j = C.uriResolver) !== null && j !== void 0 ? j : p.default;
      return {
        strictSchema: (T = (_ = C.strictSchema) !== null && _ !== void 0 ? _ : Qt) !== null && T !== void 0 ? T : !0,
        strictNumbers: (J = (L = C.strictNumbers) !== null && L !== void 0 ? L : Qt) !== null && J !== void 0 ? J : !0,
        strictTypes: (Z = (Q = C.strictTypes) !== null && Q !== void 0 ? Q : Qt) !== null && Z !== void 0 ? Z : "log",
        strictTuples: (V = (U = C.strictTuples) !== null && U !== void 0 ? U : Qt) !== null && V !== void 0 ? V : "log",
        strictRequired: (K = (F = C.strictRequired) !== null && F !== void 0 ? F : Qt) !== null && K !== void 0 ? K : !1,
        code: C.code ? { ...C.code, optimize: Hs, regExp: Js } : { optimize: Hs, regExp: Js },
        loopRequired: (X = C.loopRequired) !== null && X !== void 0 ? X : b,
        loopEnum: (Y = C.loopEnum) !== null && Y !== void 0 ? Y : b,
        meta: (re = C.meta) !== null && re !== void 0 ? re : !0,
        messages: (be = C.messages) !== null && be !== void 0 ? be : !0,
        inlineRefs: (he = C.inlineRefs) !== null && he !== void 0 ? he : !0,
        schemaId: (ye = C.schemaId) !== null && ye !== void 0 ? ye : "$id",
        addUsedSchema: (fe = C.addUsedSchema) !== null && fe !== void 0 ? fe : !0,
        validateSchema: (Ke = C.validateSchema) !== null && Ke !== void 0 ? Ke : !0,
        validateFormats: (Te = C.validateFormats) !== null && Te !== void 0 ? Te : !0,
        unicodeRegExp: (Wr = C.unicodeRegExp) !== null && Wr !== void 0 ? Wr : !0,
        int32range: (Yr = C.int32range) !== null && Yr !== void 0 ? Yr : !0,
        uriResolver: Dd
      };
    }
    class d {
      constructor(k = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), k = this.opts = { ...k, ...y(k) };
        const { es5: z, lines: N } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: x, es5: z, lines: N }), this.logger = q(k.logger);
        const j = k.validateFormats;
        k.validateFormats = !1, this.RULES = (0, r.getRules)(), l.call(this, v, k, "NOT SUPPORTED"), l.call(this, S, k, "DEPRECATED", "warn"), this._metaOpts = O.call(this), k.formats && A.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), k.keywords && R.call(this, k.keywords), typeof k.meta == "object" && this.addMetaSchema(k.meta), I.call(this), k.validateFormats = j;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: k, meta: z, schemaId: N } = this.opts;
        let j = g;
        N === "id" && (j = { ...g }, j.id = j.$id, delete j.$id), z && k && this.addMetaSchema(j, j[N], !1);
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
        const j = N(z);
        return "$async" in N || (this.errors = N.errors), j;
      }
      compile(k, z) {
        const N = this._addSchema(k, z);
        return N.validate || this._compileSchemaEnv(N);
      }
      compileAsync(k, z) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: N } = this.opts;
        return j.call(this, k, z);
        async function j(Z, U) {
          await _.call(this, Z.$schema);
          const V = this._addSchema(Z, U);
          return V.validate || T.call(this, V);
        }
        async function _(Z) {
          Z && !this.getSchema(Z) && await j.call(this, { $ref: Z }, !0);
        }
        async function T(Z) {
          try {
            return this._compileSchemaEnv(Z);
          } catch (U) {
            if (!(U instanceof c.default))
              throw U;
            return L.call(this, U), await J.call(this, U.missingSchema), T.call(this, Z);
          }
        }
        function L({ missingSchema: Z, missingRef: U }) {
          if (this.refs[Z])
            throw new Error(`AnySchema ${Z} is loaded but ${U} cannot be resolved`);
        }
        async function J(Z) {
          const U = await Q.call(this, Z);
          this.refs[Z] || await _.call(this, U.$schema), this.refs[Z] || this.addSchema(U, Z, z);
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
      addSchema(k, z, N, j = this.opts.validateSchema) {
        if (Array.isArray(k)) {
          for (const T of k)
            this.addSchema(T, void 0, N, j);
          return this;
        }
        let _;
        if (typeof k == "object") {
          const { schemaId: T } = this.opts;
          if (_ = k[T], _ !== void 0 && typeof _ != "string")
            throw new Error(`schema ${T} must be string`);
        }
        return z = (0, o.normalizeId)(z || _), this._checkUnique(z), this.schemas[z] = this._addSchema(k, N, z, j, !0), this;
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
        const j = this.validate(N, k);
        if (!j && z) {
          const _ = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(_);
          else
            throw new Error(_);
        }
        return j;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(k) {
        let z;
        for (; typeof (z = h.call(this, k)) == "string"; )
          k = z;
        if (z === void 0) {
          const { schemaId: N } = this.opts, j = new s.SchemaEnv({ schema: {}, schemaId: N });
          if (z = s.resolveSchema.call(this, j, k), !z)
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
          return (0, m.eachItem)(N, (_) => D.call(this, _)), this;
        G.call(this, z);
        const j = {
          ...z,
          type: (0, u.getJSONTypes)(z.type),
          schemaType: (0, u.getJSONTypes)(z.schemaType)
        };
        return (0, m.eachItem)(N, j.type.length === 0 ? (_) => D.call(this, _, j) : (_) => j.type.forEach((T) => D.call(this, _, j, T))), this;
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
          const j = N.rules.findIndex((_) => _.keyword === k);
          j >= 0 && N.rules.splice(j, 1);
        }
        return this;
      }
      // Add format
      addFormat(k, z) {
        return typeof z == "string" && (z = new RegExp(z)), this.formats[k] = z, this;
      }
      errorsText(k = this.errors, { separator: z = ", ", dataVar: N = "data" } = {}) {
        return !k || k.length === 0 ? "No errors" : k.map((j) => `${N}${j.instancePath} ${j.message}`).reduce((j, _) => j + z + _);
      }
      $dataMetaSchema(k, z) {
        const N = this.RULES.all;
        k = JSON.parse(JSON.stringify(k));
        for (const j of z) {
          const _ = j.split("/").slice(1);
          let T = k;
          for (const L of _)
            T = T[L];
          for (const L in N) {
            const J = N[L];
            if (typeof J != "object")
              continue;
            const { $data: Q } = J.definition, Z = T[L];
            Q && Z && (T[L] = H(Z));
          }
        }
        return k;
      }
      _removeAllSchemas(k, z) {
        for (const N in k) {
          const j = k[N];
          (!z || z.test(N)) && (typeof j == "string" ? delete k[N] : j && !j.meta && (this._cache.delete(j.schema), delete k[N]));
        }
      }
      _addSchema(k, z, N, j = this.opts.validateSchema, _ = this.opts.addUsedSchema) {
        let T;
        const { schemaId: L } = this.opts;
        if (typeof k == "object")
          T = k[L];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof k != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let J = this._cache.get(k);
        if (J !== void 0)
          return J;
        N = (0, o.normalizeId)(T || N);
        const Q = o.getSchemaRefs.call(this, k, N);
        return J = new s.SchemaEnv({ schema: k, schemaId: L, meta: z, baseId: N, localRefs: Q }), this._cache.set(J.schema, J), _ && !N.startsWith("#") && (N && this._checkUnique(N), this.refs[N] = J), j && this.validateSchema(k, !0), J;
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
    d.ValidationError = i.default, d.MissingRefError = c.default, e.default = d;
    function l(C, k, z, N = "error") {
      for (const j in C) {
        const _ = j;
        _ in k && this.logger[N](`${z}: option ${j}. ${C[_]}`);
      }
    }
    function h(C) {
      return C = (0, o.normalizeId)(C), this.schemas[C] || this.refs[C];
    }
    function I() {
      const C = this.opts.schemas;
      if (C)
        if (Array.isArray(C))
          this.addSchema(C);
        else
          for (const k in C)
            this.addSchema(C[k], k);
    }
    function A() {
      for (const C in this.opts.formats) {
        const k = this.opts.formats[C];
        k && this.addFormat(C, k);
      }
    }
    function R(C) {
      if (Array.isArray(C)) {
        this.addVocabulary(C);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const k in C) {
        const z = C[k];
        z.keyword || (z.keyword = k), this.addKeyword(z);
      }
    }
    function O() {
      const C = { ...this.opts };
      for (const k of w)
        delete C[k];
      return C;
    }
    const M = { log() {
    }, warn() {
    }, error() {
    } };
    function q(C) {
      if (C === !1)
        return M;
      if (C === void 0)
        return console;
      if (C.log && C.warn && C.error)
        return C;
      throw new Error("logger must implement log, warn and error methods");
    }
    const $ = /^[a-z_$][a-z0-9_$:-]*$/i;
    function E(C, k) {
      const { RULES: z } = this;
      if ((0, m.eachItem)(C, (N) => {
        if (z.keywords[N])
          throw new Error(`Keyword ${N} is already defined`);
        if (!$.test(N))
          throw new Error(`Keyword ${N} has invalid name`);
      }), !!k && k.$data && !("code" in k || "validate" in k))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function D(C, k, z) {
      var N;
      const j = k?.post;
      if (z && j)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: _ } = this;
      let T = j ? _.post : _.rules.find(({ type: J }) => J === z);
      if (T || (T = { type: z, rules: [] }, _.rules.push(T)), _.keywords[C] = !0, !k)
        return;
      const L = {
        keyword: C,
        definition: {
          ...k,
          type: (0, u.getJSONTypes)(k.type),
          schemaType: (0, u.getJSONTypes)(k.schemaType)
        }
      };
      k.before ? P.call(this, T, L, k.before) : T.rules.push(L), _.all[C] = L, (N = k.implements) === null || N === void 0 || N.forEach((J) => this.addKeyword(J));
    }
    function P(C, k, z) {
      const N = C.rules.findIndex((j) => j.keyword === z);
      N >= 0 ? C.rules.splice(N, 0, k) : (C.rules.push(k), this.logger.warn(`rule ${z} is not defined`));
    }
    function G(C) {
      let { metaSchema: k } = C;
      k !== void 0 && (C.$data && this.opts.$data && (k = H(k)), C.validateSchema = this.compile(k, !0));
    }
    const B = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function H(C) {
      return { anyOf: [C, B] };
    }
  })(ci)), ci;
}
var Rn = {}, Pn = {}, En = {}, Ca;
function Xl() {
  if (Ca) return En;
  Ca = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return En.default = e, En;
}
var gt = {}, Ta;
function js() {
  if (Ta) return gt;
  Ta = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.callRef = gt.getValidate = void 0;
  const e = /* @__PURE__ */ mn(), t = /* @__PURE__ */ Ze(), n = /* @__PURE__ */ ee(), i = /* @__PURE__ */ Je(), c = /* @__PURE__ */ Br(), r = /* @__PURE__ */ ne(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(u) {
      const { gen: m, schema: g, it: p } = u, { baseId: f, schemaEnv: w, validateName: x, opts: v, self: S } = p, { root: b } = w;
      if ((g === "#" || g === "#/") && f === b.baseId)
        return d();
      const y = c.resolveRef.call(S, b, f, g);
      if (y === void 0)
        throw new e.default(p.opts.uriResolver, f, g);
      if (y instanceof c.SchemaEnv)
        return l(y);
      return h(y);
      function d() {
        if (w === b)
          return o(u, x, w, w.$async);
        const I = m.scopeValue("root", { ref: b });
        return o(u, (0, n._)`${I}.validate`, b, b.$async);
      }
      function l(I) {
        const A = a(u, I);
        o(u, A, I, I.$async);
      }
      function h(I) {
        const A = m.scopeValue("schema", v.code.source === !0 ? { ref: I, code: (0, n.stringify)(I) } : { ref: I }), R = m.name("valid"), O = u.subschema({
          schema: I,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: A,
          errSchemaPath: g
        }, R);
        u.mergeEvaluated(O), u.ok(R);
      }
    }
  };
  function a(u, m) {
    const { gen: g } = u;
    return m.validate ? g.scopeValue("validate", { ref: m.validate }) : (0, n._)`${g.scopeValue("wrapper", { ref: m })}.validate`;
  }
  gt.getValidate = a;
  function o(u, m, g, p) {
    const { gen: f, it: w } = u, { allErrors: x, schemaEnv: v, opts: S } = w, b = S.passContext ? i.default.this : n.nil;
    p ? y() : d();
    function y() {
      if (!v.$async)
        throw new Error("async schema referenced by sync schema");
      const I = f.let("valid");
      f.try(() => {
        f.code((0, n._)`await ${(0, t.callValidateCode)(u, m, b)}`), h(m), x || f.assign(I, !0);
      }, (A) => {
        f.if((0, n._)`!(${A} instanceof ${w.ValidationError})`, () => f.throw(A)), l(A), x || f.assign(I, !1);
      }), u.ok(I);
    }
    function d() {
      u.result((0, t.callValidateCode)(u, m, b), () => h(m), () => l(m));
    }
    function l(I) {
      const A = (0, n._)`${I}.errors`;
      f.assign(i.default.vErrors, (0, n._)`${i.default.vErrors} === null ? ${A} : ${i.default.vErrors}.concat(${A})`), f.assign(i.default.errors, (0, n._)`${i.default.vErrors}.length`);
    }
    function h(I) {
      var A;
      if (!w.opts.unevaluated)
        return;
      const R = (A = g?.validate) === null || A === void 0 ? void 0 : A.evaluated;
      if (w.props !== !0)
        if (R && !R.dynamicProps)
          R.props !== void 0 && (w.props = r.mergeEvaluated.props(f, R.props, w.props));
        else {
          const O = f.var("props", (0, n._)`${I}.evaluated.props`);
          w.props = r.mergeEvaluated.props(f, O, w.props, n.Name);
        }
      if (w.items !== !0)
        if (R && !R.dynamicItems)
          R.items !== void 0 && (w.items = r.mergeEvaluated.items(f, R.items, w.items));
        else {
          const O = f.var("items", (0, n._)`${I}.evaluated.items`);
          w.items = r.mergeEvaluated.items(f, O, w.items, n.Name);
        }
    }
  }
  return gt.callRef = o, gt.default = s, gt;
}
var Oa;
function Wc() {
  if (Oa) return Pn;
  Oa = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xl(), t = /* @__PURE__ */ js(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Pn.default = n, Pn;
}
var Cn = {}, Tn = {}, Ma;
function Wl() {
  if (Ma) return Tn;
  Ma = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, i = {
    message: ({ keyword: r, schemaCode: s }) => (0, e.str)`must be ${n[r].okStr} ${s}`,
    params: ({ keyword: r, schemaCode: s }) => (0, e._)`{comparison: ${n[r].okStr}, limit: ${s}}`
  }, c = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: i,
    code(r) {
      const { keyword: s, data: a, schemaCode: o } = r;
      r.fail$data((0, e._)`${a} ${n[s].fail} ${o} || isNaN(${a})`);
    }
  };
  return Tn.default = c, Tn;
}
var On = {}, ka;
function Yl() {
  if (ka) return On;
  ka = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, e.str)`must be multiple of ${i}`,
      params: ({ schemaCode: i }) => (0, e._)`{multipleOf: ${i}}`
    },
    code(i) {
      const { gen: c, data: r, schemaCode: s, it: a } = i, o = a.opts.multipleOfPrecision, u = c.let("res"), m = o ? (0, e._)`Math.abs(Math.round(${u}) - ${u}) > 1e-${o}` : (0, e._)`${u} !== parseInt(${u})`;
      i.fail$data((0, e._)`(${s} === 0 || (${u} = ${r}/${s}, ${m}))`);
    }
  };
  return On.default = n, On;
}
var Mn = {}, kn = {}, Na;
function eu() {
  if (Na) return kn;
  Na = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let i = 0, c = 0, r;
    for (; c < n; )
      i++, r = t.charCodeAt(c++), r >= 55296 && r <= 56319 && c < n && (r = t.charCodeAt(c), (r & 64512) === 56320 && c++);
    return i;
  }
  return kn.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', kn;
}
var La;
function tu() {
  if (La) return Mn;
  La = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ eu(), c = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: r, schemaCode: s }) {
        const a = r === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${a} than ${s} characters`;
      },
      params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { keyword: s, data: a, schemaCode: o, it: u } = r, m = s === "maxLength" ? e.operators.GT : e.operators.LT, g = u.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(r.gen, n.default)}(${a})`;
      r.fail$data((0, e._)`${g} ${m} ${o}`);
    }
  };
  return Mn.default = c, Mn;
}
var Nn = {}, Da;
function nu() {
  if (Da) return Nn;
  Da = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ze(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ ee(), c = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, n.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, n._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: o, schema: u, schemaCode: m, it: g } = r, p = g.opts.unicodeRegExp ? "u" : "";
      if (o) {
        const { regExp: f } = g.opts.code, w = f.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, f), x = s.let("valid");
        s.try(() => s.assign(x, (0, n._)`${w}(${m}, ${p}).test(${a})`), () => s.assign(x, !1)), r.fail$data((0, n._)`!${x}`);
      } else {
        const f = (0, e.usePattern)(r, u);
        r.fail$data((0, n._)`!${f}.test(${a})`);
      }
    }
  };
  return Nn.default = c, Nn;
}
var Ln = {}, za;
function ru() {
  if (za) return Ln;
  za = 1, Object.defineProperty(Ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), n = {
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
      const { keyword: c, data: r, schemaCode: s } = i, a = c === "maxProperties" ? e.operators.GT : e.operators.LT;
      i.fail$data((0, e._)`Object.keys(${r}).length ${a} ${s}`);
    }
  };
  return Ln.default = n, Ln;
}
var Dn = {}, Ua;
function iu() {
  if (Ua) return Dn;
  Ua = 1, Object.defineProperty(Dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ze(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ ne(), c = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: r } }) => (0, t.str)`must have required property '${r}'`,
      params: ({ params: { missingProperty: r } }) => (0, t._)`{missingProperty: ${r}}`
    },
    code(r) {
      const { gen: s, schema: a, schemaCode: o, data: u, $data: m, it: g } = r, { opts: p } = g;
      if (!m && a.length === 0)
        return;
      const f = a.length >= p.loopRequired;
      if (g.allErrors ? w() : x(), p.strictRequired) {
        const b = r.parentSchema.properties, { definedProperties: y } = r.it;
        for (const d of a)
          if (b?.[d] === void 0 && !y.has(d)) {
            const l = g.schemaEnv.baseId + g.errSchemaPath, h = `required property "${d}" is not defined at "${l}" (strictRequired)`;
            (0, n.checkStrictMode)(g, h, g.opts.strictRequired);
          }
      }
      function w() {
        if (f || m)
          r.block$data(t.nil, v);
        else
          for (const b of a)
            (0, e.checkReportMissingProp)(r, b);
      }
      function x() {
        const b = s.let("missing");
        if (f || m) {
          const y = s.let("valid", !0);
          r.block$data(y, () => S(b, y)), r.ok(y);
        } else
          s.if((0, e.checkMissingProp)(r, a, b)), (0, e.reportMissingProp)(r, b), s.else();
      }
      function v() {
        s.forOf("prop", o, (b) => {
          r.setParams({ missingProperty: b }), s.if((0, e.noPropertyInData)(s, u, b, p.ownProperties), () => r.error());
        });
      }
      function S(b, y) {
        r.setParams({ missingProperty: b }), s.forOf(b, o, () => {
          s.assign(y, (0, e.propertyInData)(s, u, b, p.ownProperties)), s.if((0, t.not)(y), () => {
            r.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return Dn.default = c, Dn;
}
var zn = {}, Va;
function su() {
  if (Va) return zn;
  Va = 1, Object.defineProperty(zn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), n = {
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
      const { keyword: c, data: r, schemaCode: s } = i, a = c === "maxItems" ? e.operators.GT : e.operators.LT;
      i.fail$data((0, e._)`${r}.length ${a} ${s}`);
    }
  };
  return zn.default = n, zn;
}
var Un = {}, Vn = {}, Fa;
function Rs() {
  if (Fa) return Vn;
  Fa = 1, Object.defineProperty(Vn, "__esModule", { value: !0 });
  const e = Kc();
  return e.code = 'require("ajv/dist/runtime/equal").default', Vn.default = e, Vn;
}
var Ba;
function au() {
  if (Ba) return Un;
  Ba = 1, Object.defineProperty(Un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Or(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ ne(), i = /* @__PURE__ */ Rs(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: o, $data: u, schema: m, parentSchema: g, schemaCode: p, it: f } = s;
      if (!u && !m)
        return;
      const w = a.let("valid"), x = g.items ? (0, e.getSchemaTypes)(g.items) : [];
      s.block$data(w, v, (0, t._)`${p} === false`), s.ok(w);
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
        const h = (0, n.useFunc)(a, i.default), I = a.name("outer");
        a.label(I).for((0, t._)`;${d}--;`, () => a.for((0, t._)`${l} = ${d}; ${l}--;`, () => a.if((0, t._)`${h}(${o}[${d}], ${o}[${l}])`, () => {
          s.error(), a.assign(w, !1).break(I);
        })));
      }
    }
  };
  return Un.default = r, Un;
}
var Fn = {}, Ga;
function ou() {
  if (Ga) return Fn;
  Ga = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Rs(), c = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: o, schemaCode: u, schema: m } = r;
      o || m && typeof m == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${u})`) : r.fail((0, e._)`${m} !== ${a}`);
    }
  };
  return Fn.default = c, Fn;
}
var Bn = {}, Ha;
function cu() {
  if (Ha) return Bn;
  Ha = 1, Object.defineProperty(Bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Rs(), c = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: o, schema: u, schemaCode: m, it: g } = r;
      if (!o && u.length === 0)
        throw new Error("enum must have non-empty array");
      const p = u.length >= g.opts.loopEnum;
      let f;
      const w = () => f ?? (f = (0, t.useFunc)(s, n.default));
      let x;
      if (p || o)
        x = s.let("valid"), r.block$data(x, v);
      else {
        if (!Array.isArray(u))
          throw new Error("ajv implementation error");
        const b = s.const("vSchema", m);
        x = (0, e.or)(...u.map((y, d) => S(b, d)));
      }
      r.pass(x);
      function v() {
        s.assign(x, !1), s.forOf("v", m, (b) => s.if((0, e._)`${w()}(${a}, ${b})`, () => s.assign(x, !0).break()));
      }
      function S(b, y) {
        const d = u[y];
        return typeof d == "object" && d !== null ? (0, e._)`${w()}(${a}, ${b}[${y}])` : (0, e._)`${a} === ${d}`;
      }
    }
  };
  return Bn.default = c, Bn;
}
var Ja;
function Yc() {
  if (Ja) return Cn;
  Ja = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wl(), t = /* @__PURE__ */ Yl(), n = /* @__PURE__ */ tu(), i = /* @__PURE__ */ nu(), c = /* @__PURE__ */ ru(), r = /* @__PURE__ */ iu(), s = /* @__PURE__ */ su(), a = /* @__PURE__ */ au(), o = /* @__PURE__ */ ou(), u = /* @__PURE__ */ cu(), m = [
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
    s.default,
    a.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    o.default,
    u.default
  ];
  return Cn.default = m, Cn;
}
var Gn = {}, Ot = {}, Za;
function ed() {
  if (Za) return Ot;
  Za = 1, Object.defineProperty(Ot, "__esModule", { value: !0 }), Ot.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), i = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: r } }) => (0, e.str)`must NOT have more than ${r} items`,
      params: ({ params: { len: r } }) => (0, e._)`{limit: ${r}}`
    },
    code(r) {
      const { parentSchema: s, it: a } = r, { items: o } = s;
      if (!Array.isArray(o)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      c(r, o);
    }
  };
  function c(r, s) {
    const { gen: a, schema: o, data: u, keyword: m, it: g } = r;
    g.items = !0;
    const p = a.const("len", (0, e._)`${u}.length`);
    if (o === !1)
      r.setParams({ len: s.length }), r.pass((0, e._)`${p} <= ${s.length}`);
    else if (typeof o == "object" && !(0, t.alwaysValidSchema)(g, o)) {
      const w = a.var("valid", (0, e._)`${p} <= ${s.length}`);
      a.if((0, e.not)(w), () => f(w)), r.ok(w);
    }
    function f(w) {
      a.forRange("i", s.length, p, (x) => {
        r.subschema({ keyword: m, dataProp: x, dataPropType: t.Type.Num }, w), g.allErrors || a.if((0, e.not)(w), () => a.break());
      });
    }
  }
  return Ot.validateAdditionalItems = c, Ot.default = i, Ot;
}
var Hn = {}, Mt = {}, Ka;
function td() {
  if (Ka) return Mt;
  Ka = 1, Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.validateTuple = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Ze(), i = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(r) {
      const { schema: s, it: a } = r;
      if (Array.isArray(s))
        return c(r, "additionalItems", s);
      a.items = !0, !(0, t.alwaysValidSchema)(a, s) && r.ok((0, n.validateArray)(r));
    }
  };
  function c(r, s, a = r.schema) {
    const { gen: o, parentSchema: u, data: m, keyword: g, it: p } = r;
    x(u), p.opts.unevaluated && a.length && p.items !== !0 && (p.items = t.mergeEvaluated.items(o, a.length, p.items));
    const f = o.name("valid"), w = o.const("len", (0, e._)`${m}.length`);
    a.forEach((v, S) => {
      (0, t.alwaysValidSchema)(p, v) || (o.if((0, e._)`${w} > ${S}`, () => r.subschema({
        keyword: g,
        schemaProp: S,
        dataProp: S
      }, f)), r.ok(f));
    });
    function x(v) {
      const { opts: S, errSchemaPath: b } = p, y = a.length, d = y === v.minItems && (y === v.maxItems || v[s] === !1);
      if (S.strictTuples && !d) {
        const l = `"${g}" is ${y}-tuple, but minItems or maxItems/${s} are not specified or different at path "${b}"`;
        (0, t.checkStrictMode)(p, l, S.strictTuples);
      }
    }
  }
  return Mt.validateTuple = c, Mt.default = i, Mt;
}
var Qa;
function du() {
  if (Qa) return Hn;
  Qa = 1, Object.defineProperty(Hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ td(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return Hn.default = t, Hn;
}
var Jn = {}, Xa;
function lu() {
  if (Xa) return Jn;
  Xa = 1, Object.defineProperty(Jn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Ze(), i = /* @__PURE__ */ ed(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: o, it: u } = s, { prefixItems: m } = o;
      u.items = !0, !(0, t.alwaysValidSchema)(u, a) && (m ? (0, i.validateAdditionalItems)(s, m) : s.ok((0, n.validateArray)(s)));
    }
  };
  return Jn.default = r, Jn;
}
var Zn = {}, Wa;
function uu() {
  if (Wa) return Zn;
  Wa = 1, Object.defineProperty(Zn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), i = {
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
      const { gen: r, schema: s, parentSchema: a, data: o, it: u } = c;
      let m, g;
      const { minContains: p, maxContains: f } = a;
      u.opts.next ? (m = p === void 0 ? 1 : p, g = f) : m = 1;
      const w = r.const("len", (0, e._)`${o}.length`);
      if (c.setParams({ min: m, max: g }), g === void 0 && m === 0) {
        (0, t.checkStrictMode)(u, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (g !== void 0 && m > g) {
        (0, t.checkStrictMode)(u, '"minContains" > "maxContains" is always invalid'), c.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(u, s)) {
        let y = (0, e._)`${w} >= ${m}`;
        g !== void 0 && (y = (0, e._)`${y} && ${w} <= ${g}`), c.pass(y);
        return;
      }
      u.items = !0;
      const x = r.name("valid");
      g === void 0 && m === 1 ? S(x, () => r.if(x, () => r.break())) : m === 0 ? (r.let(x, !0), g !== void 0 && r.if((0, e._)`${o}.length > 0`, v)) : (r.let(x, !1), v()), c.result(x, () => c.reset());
      function v() {
        const y = r.name("_valid"), d = r.let("count", 0);
        S(y, () => r.if(y, () => b(d)));
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
      function b(y) {
        r.code((0, e._)`${y}++`), g === void 0 ? r.if((0, e._)`${y} >= ${m}`, () => r.assign(x, !0).break()) : (r.if((0, e._)`${y} > ${g}`, () => r.assign(x, !1).break()), m === 1 ? r.assign(x, !0) : r.if((0, e._)`${y} >= ${m}`, () => r.assign(x, !0)));
      }
    }
  };
  return Zn.default = i, Zn;
}
var gi = {}, Ya;
function Ps() {
  return Ya || (Ya = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ ne(), i = /* @__PURE__ */ Ze();
    e.error = {
      message: ({ params: { property: o, depsCount: u, deps: m } }) => {
        const g = u === 1 ? "property" : "properties";
        return (0, t.str)`must have ${g} ${m} when property ${o} is present`;
      },
      params: ({ params: { property: o, depsCount: u, deps: m, missingProperty: g } }) => (0, t._)`{property: ${o},
    missingProperty: ${g},
    depsCount: ${u},
    deps: ${m}}`
      // TODO change to reference
    };
    const c = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(o) {
        const [u, m] = r(o);
        s(o, u), a(o, m);
      }
    };
    function r({ schema: o }) {
      const u = {}, m = {};
      for (const g in o) {
        if (g === "__proto__")
          continue;
        const p = Array.isArray(o[g]) ? u : m;
        p[g] = o[g];
      }
      return [u, m];
    }
    function s(o, u = o.schema) {
      const { gen: m, data: g, it: p } = o;
      if (Object.keys(u).length === 0)
        return;
      const f = m.let("missing");
      for (const w in u) {
        const x = u[w];
        if (x.length === 0)
          continue;
        const v = (0, i.propertyInData)(m, g, w, p.opts.ownProperties);
        o.setParams({
          property: w,
          depsCount: x.length,
          deps: x.join(", ")
        }), p.allErrors ? m.if(v, () => {
          for (const S of x)
            (0, i.checkReportMissingProp)(o, S);
        }) : (m.if((0, t._)`${v} && (${(0, i.checkMissingProp)(o, x, f)})`), (0, i.reportMissingProp)(o, f), m.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(o, u = o.schema) {
      const { gen: m, data: g, keyword: p, it: f } = o, w = m.name("valid");
      for (const x in u)
        (0, n.alwaysValidSchema)(f, u[x]) || (m.if(
          (0, i.propertyInData)(m, g, x, f.opts.ownProperties),
          () => {
            const v = o.subschema({ keyword: p, schemaProp: x }, w);
            o.mergeValidEvaluated(v, w);
          },
          () => m.var(w, !0)
          // TODO var
        ), o.ok(w));
    }
    e.validateSchemaDeps = a, e.default = c;
  })(gi)), gi;
}
var Kn = {}, eo;
function pu() {
  if (eo) return Kn;
  eo = 1, Object.defineProperty(Kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), i = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: c }) => (0, e._)`{propertyName: ${c.propertyName}}`
    },
    code(c) {
      const { gen: r, schema: s, data: a, it: o } = c;
      if ((0, t.alwaysValidSchema)(o, s))
        return;
      const u = r.name("valid");
      r.forIn("key", a, (m) => {
        c.setParams({ propertyName: m }), c.subschema({
          keyword: "propertyNames",
          data: m,
          dataTypes: ["string"],
          propertyName: m,
          compositeRule: !0
        }, u), r.if((0, e.not)(u), () => {
          c.error(!0), o.allErrors || r.break();
        });
      }), c.ok(u);
    }
  };
  return Kn.default = i, Kn;
}
var Qn = {}, to;
function nd() {
  if (to) return Qn;
  to = 1, Object.defineProperty(Qn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ze(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Je(), i = /* @__PURE__ */ ne(), r = {
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
      const { gen: a, schema: o, parentSchema: u, data: m, errsCount: g, it: p } = s;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: f, opts: w } = p;
      if (p.props = !0, w.removeAdditional !== "all" && (0, i.alwaysValidSchema)(p, o))
        return;
      const x = (0, e.allSchemaProperties)(u.properties), v = (0, e.allSchemaProperties)(u.patternProperties);
      S(), s.ok((0, t._)`${g} === ${n.default.errors}`);
      function S() {
        a.forIn("key", m, (h) => {
          !x.length && !v.length ? d(h) : a.if(b(h), () => d(h));
        });
      }
      function b(h) {
        let I;
        if (x.length > 8) {
          const A = (0, i.schemaRefOrVal)(p, u.properties, "properties");
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
        if (typeof o == "object" && !(0, i.alwaysValidSchema)(p, o)) {
          const I = a.name("valid");
          w.removeAdditional === "failing" ? (l(h, I, !1), a.if((0, t.not)(I), () => {
            s.reset(), y(h);
          })) : (l(h, I), f || a.if((0, t.not)(I), () => a.break()));
        }
      }
      function l(h, I, A) {
        const R = {
          keyword: "additionalProperties",
          dataProp: h,
          dataPropType: i.Type.Str
        };
        A === !1 && Object.assign(R, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(R, I);
      }
    }
  };
  return Qn.default = r, Qn;
}
var Xn = {}, no;
function fu() {
  if (no) return Xn;
  no = 1, Object.defineProperty(Xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ hn(), t = /* @__PURE__ */ Ze(), n = /* @__PURE__ */ ne(), i = /* @__PURE__ */ nd(), c = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: a, parentSchema: o, data: u, it: m } = r;
      m.opts.removeAdditional === "all" && o.additionalProperties === void 0 && i.default.code(new e.KeywordCxt(m, i.default, "additionalProperties"));
      const g = (0, t.allSchemaProperties)(a);
      for (const v of g)
        m.definedProperties.add(v);
      m.opts.unevaluated && g.length && m.props !== !0 && (m.props = n.mergeEvaluated.props(s, (0, n.toHash)(g), m.props));
      const p = g.filter((v) => !(0, n.alwaysValidSchema)(m, a[v]));
      if (p.length === 0)
        return;
      const f = s.name("valid");
      for (const v of p)
        w(v) ? x(v) : (s.if((0, t.propertyInData)(s, u, v, m.opts.ownProperties)), x(v), m.allErrors || s.else().var(f, !0), s.endIf()), r.it.definedProperties.add(v), r.ok(f);
      function w(v) {
        return m.opts.useDefaults && !m.compositeRule && a[v].default !== void 0;
      }
      function x(v) {
        r.subschema({
          keyword: "properties",
          schemaProp: v,
          dataProp: v
        }, f);
      }
    }
  };
  return Xn.default = c, Xn;
}
var Wn = {}, ro;
function hu() {
  if (ro) return Wn;
  ro = 1, Object.defineProperty(Wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ze(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne(), c = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: a, data: o, parentSchema: u, it: m } = r, { opts: g } = m, p = (0, e.allSchemaProperties)(a), f = p.filter((d) => (0, n.alwaysValidSchema)(m, a[d]));
      if (p.length === 0 || f.length === p.length && (!m.opts.unevaluated || m.props === !0))
        return;
      const w = g.strictSchema && !g.allowMatchingProperties && u.properties, x = s.name("valid");
      m.props !== !0 && !(m.props instanceof t.Name) && (m.props = (0, i.evaluatedPropsToName)(s, m.props));
      const { props: v } = m;
      S();
      function S() {
        for (const d of p)
          w && b(d), m.allErrors ? y(d) : (s.var(x, !0), y(d), s.if(x));
      }
      function b(d) {
        for (const l in w)
          new RegExp(d).test(l) && (0, n.checkStrictMode)(m, `property ${l} matches pattern ${d} (use allowMatchingProperties)`);
      }
      function y(d) {
        s.forIn("key", o, (l) => {
          s.if((0, t._)`${(0, e.usePattern)(r, d)}.test(${l})`, () => {
            const h = f.includes(d);
            h || r.subschema({
              keyword: "patternProperties",
              schemaProp: d,
              dataProp: l,
              dataPropType: i.Type.Str
            }, x), m.opts.unevaluated && v !== !0 ? s.assign((0, t._)`${v}[${l}]`, !0) : !h && !m.allErrors && s.if((0, t.not)(x), () => s.break());
          });
        });
      }
    }
  };
  return Wn.default = c, Wn;
}
var Yn = {}, io;
function mu() {
  if (io) return Yn;
  io = 1, Object.defineProperty(Yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: i, schema: c, it: r } = n;
      if ((0, e.alwaysValidSchema)(r, c)) {
        n.fail();
        return;
      }
      const s = i.name("valid");
      n.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, s), n.failResult(s, () => n.reset(), () => n.error());
    },
    error: { message: "must NOT be valid" }
  };
  return Yn.default = t, Yn;
}
var er = {}, so;
function yu() {
  if (so) return er;
  so = 1, Object.defineProperty(er, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Ze()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return er.default = t, er;
}
var tr = {}, ao;
function gu() {
  if (ao) return tr;
  ao = 1, Object.defineProperty(tr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), i = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: c }) => (0, e._)`{passingSchemas: ${c.passing}}`
    },
    code(c) {
      const { gen: r, schema: s, parentSchema: a, it: o } = c;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      if (o.opts.discriminator && a.discriminator)
        return;
      const u = s, m = r.let("valid", !1), g = r.let("passing", null), p = r.name("_valid");
      c.setParams({ passing: g }), r.block(f), c.result(m, () => c.reset(), () => c.error(!0));
      function f() {
        u.forEach((w, x) => {
          let v;
          (0, t.alwaysValidSchema)(o, w) ? r.var(p, !0) : v = c.subschema({
            keyword: "oneOf",
            schemaProp: x,
            compositeRule: !0
          }, p), x > 0 && r.if((0, e._)`${p} && ${m}`).assign(m, !1).assign(g, (0, e._)`[${g}, ${x}]`).else(), r.if(p, () => {
            r.assign(m, !0), r.assign(g, x), v && c.mergeEvaluated(v, e.Name);
          });
        });
      }
    }
  };
  return tr.default = i, tr;
}
var nr = {}, oo;
function vu() {
  if (oo) return nr;
  oo = 1, Object.defineProperty(nr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: i, schema: c, it: r } = n;
      if (!Array.isArray(c))
        throw new Error("ajv implementation error");
      const s = i.name("valid");
      c.forEach((a, o) => {
        if ((0, e.alwaysValidSchema)(r, a))
          return;
        const u = n.subschema({ keyword: "allOf", schemaProp: o }, s);
        n.ok(s), n.mergeEvaluated(u);
      });
    }
  };
  return nr.default = t, nr;
}
var rr = {}, co;
function bu() {
  if (co) return rr;
  co = 1, Object.defineProperty(rr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), i = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: r }) => (0, e.str)`must match "${r.ifClause}" schema`,
      params: ({ params: r }) => (0, e._)`{failingKeyword: ${r.ifClause}}`
    },
    code(r) {
      const { gen: s, parentSchema: a, it: o } = r;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(o, '"if" without "then" and "else" is ignored');
      const u = c(o, "then"), m = c(o, "else");
      if (!u && !m)
        return;
      const g = s.let("valid", !0), p = s.name("_valid");
      if (f(), r.reset(), u && m) {
        const x = s.let("ifClause");
        r.setParams({ ifClause: x }), s.if(p, w("then", x), w("else", x));
      } else u ? s.if(p, w("then")) : s.if((0, e.not)(p), w("else"));
      r.pass(g, () => r.error(!0));
      function f() {
        const x = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, p);
        r.mergeEvaluated(x);
      }
      function w(x, v) {
        return () => {
          const S = r.subschema({ keyword: x }, p);
          s.assign(g, p), r.mergeValidEvaluated(S, g), v ? s.assign(v, (0, e._)`${x}`) : r.setParams({ ifClause: x });
        };
      }
    }
  };
  function c(r, s) {
    const a = r.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(r, a);
  }
  return rr.default = i, rr;
}
var ir = {}, lo;
function wu() {
  if (lo) return ir;
  lo = 1, Object.defineProperty(ir, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: i, it: c }) {
      i.if === void 0 && (0, e.checkStrictMode)(c, `"${n}" without "if" is ignored`);
    }
  };
  return ir.default = t, ir;
}
var uo;
function rd() {
  if (uo) return Gn;
  uo = 1, Object.defineProperty(Gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ed(), t = /* @__PURE__ */ du(), n = /* @__PURE__ */ td(), i = /* @__PURE__ */ lu(), c = /* @__PURE__ */ uu(), r = /* @__PURE__ */ Ps(), s = /* @__PURE__ */ pu(), a = /* @__PURE__ */ nd(), o = /* @__PURE__ */ fu(), u = /* @__PURE__ */ hu(), m = /* @__PURE__ */ mu(), g = /* @__PURE__ */ yu(), p = /* @__PURE__ */ gu(), f = /* @__PURE__ */ vu(), w = /* @__PURE__ */ bu(), x = /* @__PURE__ */ wu();
  function v(S = !1) {
    const b = [
      // any
      m.default,
      g.default,
      p.default,
      f.default,
      w.default,
      x.default,
      // object
      s.default,
      a.default,
      r.default,
      o.default,
      u.default
    ];
    return S ? b.push(t.default, i.default) : b.push(e.default, n.default), b.push(c.default), b;
  }
  return Gn.default = v, Gn;
}
var sr = {}, kt = {}, po;
function id() {
  if (po) return kt;
  po = 1, Object.defineProperty(kt, "__esModule", { value: !0 }), kt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Je(), n = /* @__PURE__ */ Br(), i = /* @__PURE__ */ js(), c = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => r(a, a.schema)
  };
  function r(a, o) {
    const { gen: u, it: m } = a;
    m.schemaEnv.root.dynamicAnchors[o] = !0;
    const g = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(o)}`, p = m.errSchemaPath === "#" ? m.validateName : s(a);
    u.if((0, e._)`!${g}`, () => u.assign(g, p));
  }
  kt.dynamicAnchor = r;
  function s(a) {
    const { schemaEnv: o, schema: u, self: m } = a.it, { root: g, baseId: p, localRefs: f, meta: w } = o.root, { schemaId: x } = m.opts, v = new n.SchemaEnv({ schema: u, schemaId: x, root: g, baseId: p, localRefs: f, meta: w });
    return n.compileSchema.call(m, v), (0, i.getValidate)(a, v);
  }
  return kt.default = c, kt;
}
var Nt = {}, fo;
function sd() {
  if (fo) return Nt;
  fo = 1, Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.dynamicRef = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Je(), n = /* @__PURE__ */ js(), i = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => c(r, r.schema)
  };
  function c(r, s) {
    const { gen: a, keyword: o, it: u } = r;
    if (s[0] !== "#")
      throw new Error(`"${o}" only supports hash fragment reference`);
    const m = s.slice(1);
    if (u.allErrors)
      g();
    else {
      const f = a.let("valid", !1);
      g(f), r.ok(f);
    }
    function g(f) {
      if (u.schemaEnv.root.dynamicAnchors[m]) {
        const w = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(m)}`);
        a.if(w, p(w, f), p(u.validateName, f));
      } else
        p(u.validateName, f)();
    }
    function p(f, w) {
      return w ? () => a.block(() => {
        (0, n.callRef)(r, f), a.let(w, !0);
      }) : () => (0, n.callRef)(r, f);
    }
  }
  return Nt.dynamicRef = c, Nt.default = i, Nt;
}
var ar = {}, ho;
function xu() {
  if (ho) return ar;
  ho = 1, Object.defineProperty(ar, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ id(), t = /* @__PURE__ */ ne(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(i) {
      i.schema ? (0, e.dynamicAnchor)(i, "") : (0, t.checkStrictMode)(i.it, "$recursiveAnchor: false is ignored");
    }
  };
  return ar.default = n, ar;
}
var or = {}, mo;
function Su() {
  if (mo) return or;
  mo = 1, Object.defineProperty(or, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ sd(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return or.default = t, or;
}
var yo;
function Iu() {
  if (yo) return sr;
  yo = 1, Object.defineProperty(sr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ id(), t = /* @__PURE__ */ sd(), n = /* @__PURE__ */ xu(), i = /* @__PURE__ */ Su(), c = [e.default, t.default, n.default, i.default];
  return sr.default = c, sr;
}
var cr = {}, dr = {}, go;
function Au() {
  if (go) return dr;
  go = 1, Object.defineProperty(dr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ps(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return dr.default = t, dr;
}
var lr = {}, vo;
function _u() {
  if (vo) return lr;
  vo = 1, Object.defineProperty(lr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ps(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return lr.default = t, lr;
}
var ur = {}, bo;
function $u() {
  if (bo) return ur;
  bo = 1, Object.defineProperty(ur, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: i, it: c }) {
      i.contains === void 0 && (0, e.checkStrictMode)(c, `"${n}" without "contains" is ignored`);
    }
  };
  return ur.default = t, ur;
}
var wo;
function qu() {
  if (wo) return cr;
  wo = 1, Object.defineProperty(cr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Au(), t = /* @__PURE__ */ _u(), n = /* @__PURE__ */ $u(), i = [e.default, t.default, n.default];
  return cr.default = i, cr;
}
var pr = {}, fr = {}, xo;
function ju() {
  if (xo) return fr;
  xo = 1, Object.defineProperty(fr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Je(), c = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: r }) => (0, e._)`{unevaluatedProperty: ${r.unevaluatedProperty}}`
    },
    code(r) {
      const { gen: s, schema: a, data: o, errsCount: u, it: m } = r;
      if (!u)
        throw new Error("ajv implementation error");
      const { allErrors: g, props: p } = m;
      p instanceof e.Name ? s.if((0, e._)`${p} !== true`, () => s.forIn("key", o, (v) => s.if(w(p, v), () => f(v)))) : p !== !0 && s.forIn("key", o, (v) => p === void 0 ? f(v) : s.if(x(p, v), () => f(v))), m.props = !0, r.ok((0, e._)`${u} === ${n.default.errors}`);
      function f(v) {
        if (a === !1) {
          r.setParams({ unevaluatedProperty: v }), r.error(), g || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(m, a)) {
          const S = s.name("valid");
          r.subschema({
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
  return fr.default = c, fr;
}
var hr = {}, So;
function Ru() {
  if (So) return hr;
  So = 1, Object.defineProperty(hr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), i = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: c } }) => (0, e.str)`must NOT have more than ${c} items`,
      params: ({ params: { len: c } }) => (0, e._)`{limit: ${c}}`
    },
    code(c) {
      const { gen: r, schema: s, data: a, it: o } = c, u = o.items || 0;
      if (u === !0)
        return;
      const m = r.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        c.setParams({ len: u }), c.fail((0, e._)`${m} > ${u}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(o, s)) {
        const p = r.var("valid", (0, e._)`${m} <= ${u}`);
        r.if((0, e.not)(p), () => g(p, u)), c.ok(p);
      }
      o.items = !0;
      function g(p, f) {
        r.forRange("i", f, m, (w) => {
          c.subschema({ keyword: "unevaluatedItems", dataProp: w, dataPropType: t.Type.Num }, p), o.allErrors || r.if((0, e.not)(p), () => r.break());
        });
      }
    }
  };
  return hr.default = i, hr;
}
var Io;
function Pu() {
  if (Io) return pr;
  Io = 1, Object.defineProperty(pr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ju(), t = /* @__PURE__ */ Ru(), n = [e.default, t.default];
  return pr.default = n, pr;
}
var mr = {}, yr = {}, Ao;
function Eu() {
  if (Ao) return yr;
  Ao = 1, Object.defineProperty(yr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, e.str)`must match format "${i}"`,
      params: ({ schemaCode: i }) => (0, e._)`{format: ${i}}`
    },
    code(i, c) {
      const { gen: r, data: s, $data: a, schema: o, schemaCode: u, it: m } = i, { opts: g, errSchemaPath: p, schemaEnv: f, self: w } = m;
      if (!g.validateFormats)
        return;
      a ? x() : v();
      function x() {
        const S = r.scopeValue("formats", {
          ref: w.formats,
          code: g.code.formats
        }), b = r.const("fDef", (0, e._)`${S}[${u}]`), y = r.let("fType"), d = r.let("format");
        r.if((0, e._)`typeof ${b} == "object" && !(${b} instanceof RegExp)`, () => r.assign(y, (0, e._)`${b}.type || "string"`).assign(d, (0, e._)`${b}.validate`), () => r.assign(y, (0, e._)`"string"`).assign(d, b)), i.fail$data((0, e.or)(l(), h()));
        function l() {
          return g.strictSchema === !1 ? e.nil : (0, e._)`${u} && !${d}`;
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
        b === c && i.pass(I());
        function l() {
          if (g.strictSchema === !1) {
            w.logger.warn(A());
            return;
          }
          throw new Error(A());
          function A() {
            return `unknown format "${o}" ignored in schema at path "${p}"`;
          }
        }
        function h(A) {
          const R = A instanceof RegExp ? (0, e.regexpCode)(A) : g.code.formats ? (0, e._)`${g.code.formats}${(0, e.getProperty)(o)}` : void 0, O = r.scopeValue("formats", { key: o, ref: A, code: R });
          return typeof A == "object" && !(A instanceof RegExp) ? [A.type || "string", A.validate, (0, e._)`${O}.validate`] : ["string", A, O];
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
  return yr.default = n, yr;
}
var _o;
function ad() {
  if (_o) return mr;
  _o = 1, Object.defineProperty(mr, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Eu()).default];
  return mr.default = t, mr;
}
var At = {}, $o;
function od() {
  return $o || ($o = 1, Object.defineProperty(At, "__esModule", { value: !0 }), At.contentVocabulary = At.metadataVocabulary = void 0, At.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], At.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), At;
}
var qo;
function Cu() {
  if (qo) return Rn;
  qo = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wc(), t = /* @__PURE__ */ Yc(), n = /* @__PURE__ */ rd(), i = /* @__PURE__ */ Iu(), c = /* @__PURE__ */ qu(), r = /* @__PURE__ */ Pu(), s = /* @__PURE__ */ ad(), a = /* @__PURE__ */ od(), o = [
    i.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    s.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    c.default,
    r.default
  ];
  return Rn.default = o, Rn;
}
var gr = {}, Yt = {}, jo;
function Tu() {
  if (jo) return Yt;
  jo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 }), Yt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Yt.DiscrError = e = {})), Yt;
}
var Ro;
function cd() {
  if (Ro) return gr;
  Ro = 1, Object.defineProperty(gr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Tu(), n = /* @__PURE__ */ Br(), i = /* @__PURE__ */ mn(), c = /* @__PURE__ */ ne(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: o } }) => a === t.DiscrError.Tag ? `tag "${o}" must be string` : `value of tag "${o}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: o, tagName: u } }) => (0, e._)`{error: ${a}, tag: ${u}, tagValue: ${o}}`
    },
    code(a) {
      const { gen: o, data: u, schema: m, parentSchema: g, it: p } = a, { oneOf: f } = g;
      if (!p.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const w = m.propertyName;
      if (typeof w != "string")
        throw new Error("discriminator: requires propertyName");
      if (m.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!f)
        throw new Error("discriminator: requires oneOf keyword");
      const x = o.let("valid", !1), v = o.const("tag", (0, e._)`${u}${(0, e.getProperty)(w)}`);
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
        for (let M = 0; M < f.length; M++) {
          let q = f[M];
          if (q?.$ref && !(0, c.schemaHasRulesButRef)(q, p.self.RULES)) {
            const E = q.$ref;
            if (q = n.resolveRef.call(p.self, p.schemaEnv.root, p.baseId, E), q instanceof n.SchemaEnv && (q = q.schema), q === void 0)
              throw new i.default(p.opts.uriResolver, p.baseId, E);
          }
          const $ = (d = q?.properties) === null || d === void 0 ? void 0 : d[w];
          if (typeof $ != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${w}"`);
          I = I && (h || A(q)), R($, M);
        }
        if (!I)
          throw new Error(`discriminator: "${w}" must be required`);
        return l;
        function A({ required: M }) {
          return Array.isArray(M) && M.includes(w);
        }
        function R(M, q) {
          if (M.const)
            O(M.const, q);
          else if (M.enum)
            for (const $ of M.enum)
              O($, q);
          else
            throw new Error(`discriminator: "properties/${w}" must have "const" or "enum"`);
        }
        function O(M, q) {
          if (typeof M != "string" || M in l)
            throw new Error(`discriminator: "${w}" values must be unique strings`);
          l[M] = q;
        }
      }
    }
  };
  return gr.default = s, gr;
}
var vr = {};
const Ou = "https://json-schema.org/draft/2020-12/schema", Mu = "https://json-schema.org/draft/2020-12/schema", ku = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Nu = "meta", Lu = "Core and Validation specifications meta-schema", Du = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], zu = ["object", "boolean"], Uu = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Vu = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Fu = {
  $schema: Ou,
  $id: Mu,
  $vocabulary: ku,
  $dynamicAnchor: Nu,
  title: Lu,
  allOf: Du,
  type: zu,
  $comment: Uu,
  properties: Vu
}, Bu = "https://json-schema.org/draft/2020-12/schema", Gu = "https://json-schema.org/draft/2020-12/meta/applicator", Hu = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Ju = "meta", Zu = "Applicator vocabulary meta-schema", Ku = ["object", "boolean"], Qu = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Xu = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Wu = {
  $schema: Bu,
  $id: Gu,
  $vocabulary: Hu,
  $dynamicAnchor: Ju,
  title: Zu,
  type: Ku,
  properties: Qu,
  $defs: Xu
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
}, Ap = "https://json-schema.org/draft/2020-12/schema", _p = "https://json-schema.org/draft/2020-12/meta/format-annotation", $p = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, qp = "meta", jp = "Format vocabulary meta-schema for annotation results", Rp = ["object", "boolean"], Pp = { format: { type: "string" } }, Ep = {
  $schema: Ap,
  $id: _p,
  $vocabulary: $p,
  $dynamicAnchor: qp,
  title: jp,
  type: Rp,
  properties: Pp
}, Cp = "https://json-schema.org/draft/2020-12/schema", Tp = "https://json-schema.org/draft/2020-12/meta/meta-data", Op = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Mp = "meta", kp = "Meta-data vocabulary meta-schema", Np = ["object", "boolean"], Lp = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Dp = {
  $schema: Cp,
  $id: Tp,
  $vocabulary: Op,
  $dynamicAnchor: Mp,
  title: kp,
  type: Np,
  properties: Lp
}, zp = "https://json-schema.org/draft/2020-12/schema", Up = "https://json-schema.org/draft/2020-12/meta/validation", Vp = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Fp = "meta", Bp = "Validation vocabulary meta-schema", Gp = ["object", "boolean"], Hp = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Jp = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Zp = {
  $schema: zp,
  $id: Up,
  $vocabulary: Vp,
  $dynamicAnchor: Fp,
  title: Bp,
  type: Gp,
  properties: Hp,
  $defs: Jp
};
var Po;
function Kp() {
  if (Po) return vr;
  Po = 1, Object.defineProperty(vr, "__esModule", { value: !0 });
  const e = Fu, t = Wu, n = ap, i = hp, c = Ip, r = Ep, s = Dp, a = Zp, o = ["/properties"];
  function u(m) {
    return [
      e,
      t,
      n,
      i,
      c,
      g(this, r),
      s,
      g(this, a)
    ].forEach((p) => this.addMetaSchema(p, void 0, !1)), this;
    function g(p, f) {
      return m ? p.$dataMetaSchema(f, o) : f;
    }
  }
  return vr.default = u, vr;
}
var Eo;
function Qp() {
  return Eo || (Eo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Xc(), i = /* @__PURE__ */ Cu(), c = /* @__PURE__ */ cd(), r = /* @__PURE__ */ Kp(), s = "https://json-schema.org/draft/2020-12/schema";
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
        super._addVocabularies(), i.default.forEach((f) => this.addVocabulary(f)), this.opts.discriminator && this.addKeyword(c.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: f, meta: w } = this.opts;
        w && (r.default.call(this, f), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var o = /* @__PURE__ */ hn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return o.KeywordCxt;
    } });
    var u = /* @__PURE__ */ ee();
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
    var m = /* @__PURE__ */ Fr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return m.default;
    } });
    var g = /* @__PURE__ */ mn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return g.default;
    } });
  })(An, An.exports)), An.exports;
}
var Xp = /* @__PURE__ */ Qp();
const Wp = /* @__PURE__ */ qs(Xp);
var br = { exports: {} }, vi = {}, Co;
function Yp() {
  return Co || (Co = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(M, q) {
      return { validate: M, compare: q };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(r, s),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: t(o(!0), u),
      "date-time": t(p(!0), f),
      "iso-time": t(o(), m),
      "iso-date-time": t(p(), w),
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
      time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, u),
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
      const q = i.exec(M);
      if (!q)
        return !1;
      const $ = +q[1], E = +q[2], D = +q[3];
      return E >= 1 && E <= 12 && D >= 1 && D <= (E === 2 && n($) ? 29 : c[E]);
    }
    function s(M, q) {
      if (M && q)
        return M > q ? 1 : M < q ? -1 : 0;
    }
    const a = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function o(M) {
      return function($) {
        const E = a.exec($);
        if (!E)
          return !1;
        const D = +E[1], P = +E[2], G = +E[3], B = E[4], H = E[5] === "-" ? -1 : 1, C = +(E[6] || 0), k = +(E[7] || 0);
        if (C > 23 || k > 59 || M && !B)
          return !1;
        if (D <= 23 && P <= 59 && G < 60)
          return !0;
        const z = P - k * H, N = D - C * H - (z < 0 ? 1 : 0);
        return (N === 23 || N === -1) && (z === 59 || z === -1) && G < 61;
      };
    }
    function u(M, q) {
      if (!(M && q))
        return;
      const $ = (/* @__PURE__ */ new Date("2020-01-01T" + M)).valueOf(), E = (/* @__PURE__ */ new Date("2020-01-01T" + q)).valueOf();
      if ($ && E)
        return $ - E;
    }
    function m(M, q) {
      if (!(M && q))
        return;
      const $ = a.exec(M), E = a.exec(q);
      if ($ && E)
        return M = $[1] + $[2] + $[3], q = E[1] + E[2] + E[3], M > q ? 1 : M < q ? -1 : 0;
    }
    const g = /t|\s/i;
    function p(M) {
      const q = o(M);
      return function(E) {
        const D = E.split(g);
        return D.length === 2 && r(D[0]) && q(D[1]);
      };
    }
    function f(M, q) {
      if (!(M && q))
        return;
      const $ = new Date(M).valueOf(), E = new Date(q).valueOf();
      if ($ && E)
        return $ - E;
    }
    function w(M, q) {
      if (!(M && q))
        return;
      const [$, E] = M.split(g), [D, P] = q.split(g), G = s($, D);
      if (G !== void 0)
        return G || u(E, P);
    }
    const x = /\/|:/, v = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function S(M) {
      return x.test(M) && v.test(M);
    }
    const b = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function y(M) {
      return b.lastIndex = 0, b.test(M);
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
    const R = /[^\\]\\Z/;
    function O(M) {
      if (R.test(M))
        return !1;
      try {
        return new RegExp(M), !0;
      } catch {
        return !1;
      }
    }
  })(vi)), vi;
}
var bi = {}, wr = { exports: {} }, xr = {}, To;
function ef() {
  if (To) return xr;
  To = 1, Object.defineProperty(xr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wc(), t = /* @__PURE__ */ Yc(), n = /* @__PURE__ */ rd(), i = /* @__PURE__ */ ad(), c = /* @__PURE__ */ od(), r = [
    e.default,
    t.default,
    (0, n.default)(),
    i.default,
    c.metadataVocabulary,
    c.contentVocabulary
  ];
  return xr.default = r, xr;
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
var Oo;
function df() {
  return Oo || (Oo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const n = /* @__PURE__ */ Xc(), i = /* @__PURE__ */ ef(), c = /* @__PURE__ */ cd(), r = cf, s = ["/properties"], a = "http://json-schema.org/draft-07/schema";
    class o extends n.default {
      _addVocabularies() {
        super._addVocabularies(), i.default.forEach((w) => this.addVocabulary(w)), this.opts.discriminator && this.addKeyword(c.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta)
          return;
        const w = this.opts.$data ? this.$dataMetaSchema(r, s) : r;
        this.addMetaSchema(w, a, !1), this.refs["http://json-schema.org/schema"] = a;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(a) ? a : void 0);
      }
    }
    t.Ajv = o, e.exports = t = o, e.exports.Ajv = o, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = o;
    var u = /* @__PURE__ */ hn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return u.KeywordCxt;
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
    var g = /* @__PURE__ */ Fr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return g.default;
    } });
    var p = /* @__PURE__ */ mn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return p.default;
    } });
  })(wr, wr.exports)), wr.exports;
}
var Mo;
function lf() {
  return Mo || (Mo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = /* @__PURE__ */ df(), n = /* @__PURE__ */ ee(), i = n.operators, c = {
      formatMaximum: { okStr: "<=", ok: i.LTE, fail: i.GT },
      formatMinimum: { okStr: ">=", ok: i.GTE, fail: i.LT },
      formatExclusiveMaximum: { okStr: "<", ok: i.LT, fail: i.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: i.GT, fail: i.LTE }
    }, r = {
      message: ({ keyword: a, schemaCode: o }) => (0, n.str)`should be ${c[a].okStr} ${o}`,
      params: ({ keyword: a, schemaCode: o }) => (0, n._)`{comparison: ${c[a].okStr}, limit: ${o}}`
    };
    e.formatLimitDefinition = {
      keyword: Object.keys(c),
      type: "string",
      schemaType: "string",
      $data: !0,
      error: r,
      code(a) {
        const { gen: o, data: u, schemaCode: m, keyword: g, it: p } = a, { opts: f, self: w } = p;
        if (!f.validateFormats)
          return;
        const x = new t.KeywordCxt(p, w.RULES.all.format.definition, "format");
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
          return (0, n._)`${y}.compare(${u}, ${m}) ${c[g].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const s = (a) => (a.addKeyword(e.formatLimitDefinition), a);
    e.default = s;
  })(bi)), bi;
}
var ko;
function uf() {
  return ko || (ko = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const n = Yp(), i = lf(), c = /* @__PURE__ */ ee(), r = new c.Name("fullFormats"), s = new c.Name("fastFormats"), a = (u, m = { keywords: !0 }) => {
      if (Array.isArray(m))
        return o(u, m, n.fullFormats, r), u;
      const [g, p] = m.mode === "fast" ? [n.fastFormats, s] : [n.fullFormats, r], f = m.formats || n.formatNames;
      return o(u, f, g, p), m.keywords && (0, i.default)(u), u;
    };
    a.get = (u, m = "full") => {
      const p = (m === "fast" ? n.fastFormats : n.fullFormats)[u];
      if (!p)
        throw new Error(`Unknown format "${u}"`);
      return p;
    };
    function o(u, m, g, p) {
      var f, w;
      (f = (w = u.opts.code).formats) !== null && f !== void 0 || (w.formats = (0, c._)`require("ajv-formats/dist/formats").${p}`);
      for (const x of m)
        u.addFormat(x, g[x]);
    }
    e.exports = t = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
  })(br, br.exports)), br.exports;
}
var pf = uf();
const ff = /* @__PURE__ */ qs(pf);
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const hf = {
  p: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,
  n: 0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,
  a: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,
  d: 0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,
  Gx: 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,
  Gy: 0x6666666666666666666666666666666666666666666666666666666666666658n
}, { p: Se, n: qr, Gx: No, Gy: Lo, a: wi, d: xi } = hf, mf = 8n, sn = 32, ps = 64, Ne = (e = "") => {
  throw new Error(e);
}, yf = (e) => typeof e == "bigint", dd = (e) => typeof e == "string", gf = (e) => e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array", Ht = (e, t) => !gf(e) || typeof t == "number" && t > 0 && e.length !== t ? Ne("Uint8Array expected") : e, Gr = (e) => new Uint8Array(e), Es = (e) => Uint8Array.from(e), ld = (e, t) => e.toString(16).padStart(t, "0"), Cs = (e) => Array.from(Ht(e)).map((t) => ld(t, 2)).join(""), at = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 }, Do = (e) => {
  if (e >= at._0 && e <= at._9)
    return e - at._0;
  if (e >= at.A && e <= at.F)
    return e - (at.A - 10);
  if (e >= at.a && e <= at.f)
    return e - (at.a - 10);
}, Ts = (e) => {
  const t = "hex invalid";
  if (!dd(e))
    return Ne(t);
  const n = e.length, i = n / 2;
  if (n % 2)
    return Ne(t);
  const c = Gr(i);
  for (let r = 0, s = 0; r < i; r++, s += 2) {
    const a = Do(e.charCodeAt(s)), o = Do(e.charCodeAt(s + 1));
    if (a === void 0 || o === void 0)
      return Ne(t);
    c[r] = a * 16 + o;
  }
  return c;
}, jr = (e, t) => Ht(dd(e) ? Ts(e) : Es(Ht(e)), t), ud = () => globalThis?.crypto, vf = () => ud()?.subtle ?? Ne("crypto.subtle must be defined"), fs = (...e) => {
  const t = Gr(e.reduce((i, c) => i + Ht(c).length, 0));
  let n = 0;
  return e.forEach((i) => {
    t.set(i, n), n += i.length;
  }), t;
}, bf = (e = sn) => ud().getRandomValues(Gr(e)), Mr = BigInt, $t = (e, t, n, i = "bad number: out of range") => yf(e) && t <= e && e < n ? e : Ne(i), W = (e, t = Se) => {
  const n = e % t;
  return n >= 0n ? n : t + n;
}, wf = (e) => W(e, qr), pd = (e, t) => {
  (e === 0n || t <= 0n) && Ne("no inverse n=" + e + " mod=" + t);
  let n = W(e, t), i = t, c = 0n, r = 1n;
  for (; n !== 0n; ) {
    const s = i / n, a = i % n, o = c - r * s;
    i = n, n = a, c = r, r = o;
  }
  return i === 1n ? W(c, t) : Ne("no inverse");
}, zo = (e) => e instanceof lt ? e : Ne("Point expected"), hs = 2n ** 256n, Ye = class Ye {
  constructor(t, n, i, c) {
    tt(this, "ex");
    tt(this, "ey");
    tt(this, "ez");
    tt(this, "et");
    const r = hs;
    this.ex = $t(t, 0n, r), this.ey = $t(n, 0n, r), this.ez = $t(i, 1n, r), this.et = $t(c, 0n, r), Object.freeze(this);
  }
  static fromAffine(t) {
    return new Ye(t.x, t.y, 1n, W(t.x * t.y));
  }
  /** RFC8032 5.1.3: Uint8Array to Point. */
  static fromBytes(t, n = !1) {
    const i = xi, c = Es(Ht(t, sn)), r = t[31];
    c[31] = r & -129;
    const s = Os(c);
    $t(s, 0n, n ? hs : Se);
    const o = W(s * s), u = W(o - 1n), m = W(i * o + 1n);
    let { isValid: g, value: p } = If(u, m);
    g || Ne("bad point: y not sqrt");
    const f = (p & 1n) === 1n, w = (r & 128) !== 0;
    return !n && p === 0n && w && Ne("bad point: x==0, isLastByteOdd"), w !== f && (p = W(-p)), new Ye(p, s, 1n, W(p * s));
  }
  /** Checks if the point is valid and on-curve. */
  assertValidity() {
    const t = wi, n = xi, i = this;
    if (i.is0())
      throw new Error("bad point: ZERO");
    const { ex: c, ey: r, ez: s, et: a } = i, o = W(c * c), u = W(r * r), m = W(s * s), g = W(m * m), p = W(o * t), f = W(m * W(p + u)), w = W(g + W(n * W(o * u)));
    if (f !== w)
      throw new Error("bad point: equation left != right (1)");
    const x = W(c * r), v = W(s * a);
    if (x !== v)
      throw new Error("bad point: equation left != right (2)");
    return this;
  }
  /** Equality check: compare points P&Q. */
  equals(t) {
    const { ex: n, ey: i, ez: c } = this, { ex: r, ey: s, ez: a } = zo(t), o = W(n * a), u = W(r * c), m = W(i * a), g = W(s * c);
    return o === u && m === g;
  }
  is0() {
    return this.equals(Dt);
  }
  /** Flip point over y coordinate. */
  negate() {
    return new Ye(W(-this.ex), this.ey, this.ez, W(-this.et));
  }
  /** Point doubling. Complete formula. Cost: `4M + 4S + 1*a + 6add + 1*2`. */
  double() {
    const { ex: t, ey: n, ez: i } = this, c = wi, r = W(t * t), s = W(n * n), a = W(2n * W(i * i)), o = W(c * r), u = t + n, m = W(W(u * u) - r - s), g = o + s, p = g - a, f = o - s, w = W(m * p), x = W(g * f), v = W(m * f), S = W(p * g);
    return new Ye(w, x, S, v);
  }
  /** Point addition. Complete formula. Cost: `8M + 1*k + 8add + 1*2`. */
  add(t) {
    const { ex: n, ey: i, ez: c, et: r } = this, { ex: s, ey: a, ez: o, et: u } = zo(t), m = wi, g = xi, p = W(n * s), f = W(i * a), w = W(r * g * u), x = W(c * o), v = W((n + i) * (s + a) - p - f), S = W(x - w), b = W(x + w), y = W(f - m * p), d = W(v * S), l = W(b * y), h = W(v * y), I = W(S * b);
    return new Ye(d, l, I, h);
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
      return Dt;
    if ($t(t, 1n, qr), t === 1n)
      return this;
    if (this.equals(Jt))
      return Cf(t).p;
    let i = Dt, c = Jt;
    for (let r = this; t > 0n; r = r.double(), t >>= 1n)
      t & 1n ? i = i.add(r) : n && (c = c.add(r));
    return i;
  }
  /** Convert point to 2d xy affine point. (X, Y, Z) ∋ (x=X/Z, y=Y/Z) */
  toAffine() {
    const { ex: t, ey: n, ez: i } = this;
    if (this.equals(Dt))
      return { x: 0n, y: 1n };
    const c = pd(i, Se);
    return W(i * c) !== 1n && Ne("invalid inverse"), { x: W(t * c), y: W(n * c) };
  }
  toBytes() {
    const { x: t, y: n } = this.assertValidity().toAffine(), i = xf(n);
    return i[31] |= t & 1n ? 128 : 0, i;
  }
  toHex() {
    return Cs(this.toBytes());
  }
  // encode to hex string
  clearCofactor() {
    return this.multiply(Mr(mf), !1);
  }
  isSmallOrder() {
    return this.clearCofactor().is0();
  }
  isTorsionFree() {
    let t = this.multiply(qr / 2n, !1).double();
    return qr % 2n && (t = t.add(this)), t.is0();
  }
  static fromHex(t, n) {
    return Ye.fromBytes(jr(t), n);
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
tt(Ye, "BASE"), tt(Ye, "ZERO");
let lt = Ye;
const Jt = new lt(No, Lo, 1n, W(No * Lo)), Dt = new lt(0n, 1n, 1n, 0n);
lt.BASE = Jt;
lt.ZERO = Dt;
const xf = (e) => Ts(ld($t(e, 0n, hs), ps)).reverse(), Os = (e) => Mr("0x" + Cs(Es(Ht(e)).reverse())), We = (e, t) => {
  let n = e;
  for (; t-- > 0n; )
    n *= n, n %= Se;
  return n;
}, Sf = (e) => {
  const n = e * e % Se * e % Se, i = We(n, 2n) * n % Se, c = We(i, 1n) * e % Se, r = We(c, 5n) * c % Se, s = We(r, 10n) * r % Se, a = We(s, 20n) * s % Se, o = We(a, 40n) * a % Se, u = We(o, 80n) * o % Se, m = We(u, 80n) * o % Se, g = We(m, 10n) * r % Se;
  return { pow_p_5_8: We(g, 2n) * e % Se, b2: n };
}, Uo = 0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n, If = (e, t) => {
  const n = W(t * t * t), i = W(n * n * t), c = Sf(e * i).pow_p_5_8;
  let r = W(e * n * c);
  const s = W(t * r * r), a = r, o = W(r * Uo), u = s === e, m = s === W(-e), g = s === W(-e * Uo);
  return u && (r = a), (m || g) && (r = o), (W(r) & 1n) === 1n && (r = W(-r)), { isValid: u || m, value: r };
}, Af = (e) => wf(Os(e)), _f = (...e) => Rf.sha512Async(...e), $f = (e) => _f(e.hashable).then(e.finish), fd = { zip215: !0 }, qf = (e, t, n, i = fd) => {
  e = jr(e, ps), t = jr(t), n = jr(n, sn);
  const { zip215: c } = i;
  let r, s, a, o, u = Uint8Array.of();
  try {
    r = lt.fromHex(n, c), s = lt.fromHex(e.slice(0, sn), c), a = Os(e.slice(sn, ps)), o = Jt.multiply(a, !1), u = fs(s.toBytes(), r.toBytes(), t);
  } catch {
  }
  return { hashable: u, finish: (g) => {
    if (o == null || !c && r.isSmallOrder())
      return !1;
    const p = Af(g);
    return s.add(r.multiply(p, !1)).add(o.negate()).clearCofactor().is0();
  } };
}, jf = async (e, t, n, i = fd) => $f(qf(e, t, n, i)), Rf = {
  sha512Async: async (...e) => {
    const t = vf(), n = fs(...e);
    return Gr(await t.digest("SHA-512", n.buffer));
  },
  sha512Sync: void 0,
  bytesToHex: Cs,
  hexToBytes: Ts,
  concatBytes: fs,
  mod: W,
  invert: pd,
  randomBytes: bf
}, kr = 8, Pf = 256, hd = Math.ceil(Pf / kr) + 1, ms = 2 ** (kr - 1), Ef = () => {
  const e = [];
  let t = Jt, n = t;
  for (let i = 0; i < hd; i++) {
    n = t, e.push(n);
    for (let c = 1; c < ms; c++)
      n = n.add(t), e.push(n);
    t = n.double();
  }
  return e;
};
let Vo;
const Fo = (e, t) => {
  const n = t.negate();
  return e ? n : t;
}, Cf = (e) => {
  const t = Vo || (Vo = Ef());
  let n = Dt, i = Jt;
  const c = 2 ** kr, r = c, s = Mr(c - 1), a = Mr(kr);
  for (let o = 0; o < hd; o++) {
    let u = Number(e & s);
    e >>= a, u > ms && (u -= r, e += 1n);
    const m = o * ms, g = m, p = m + Math.abs(u) - 1, f = o % 2 !== 0, w = u < 0;
    u === 0 ? i = i.add(Fo(f, t[g])) : n = n.add(Fo(w, t[p]));
  }
  return { p: n, f: i };
};
var Si = {}, Ii, Bo;
function Ms() {
  return Bo || (Bo = 1, Ii = class md {
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
      return new md(t, new Map(n), i);
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
  }), Ii;
}
var Ai = {}, Go;
function Tf() {
  return Go || (Go = 1, (function(e, t) {
    if (e.setImmediate)
      return;
    var n = 1, i = {}, c = !1, r = e.document, s;
    function a(b) {
      typeof b != "function" && (b = new Function("" + b));
      for (var y = new Array(arguments.length - 1), d = 0; d < y.length; d++)
        y[d] = arguments[d + 1];
      var l = { callback: b, args: y };
      return i[n] = l, s(n), n++;
    }
    function o(b) {
      delete i[b];
    }
    function u(b) {
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
        var y = i[b];
        if (y) {
          c = !0;
          try {
            u(y);
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
    function p() {
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
      var b = r.documentElement;
      s = function(y) {
        var d = r.createElement("script");
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
    S = S && S.setTimeout ? S : e, {}.toString.call(e.process) === "[object process]" ? g() : p() ? f() : e.MessageChannel ? w() : r && "onreadystatechange" in r.createElement("script") ? x() : v(), S.setImmediate = a, S.clearImmediate = o;
  })(typeof self > "u" ? typeof ia > "u" ? Ai : ia : self)), Ai;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var _i, Ho;
function Hr() {
  if (Ho) return _i;
  Ho = 1, Tf();
  const e = self.crypto || self.msCrypto;
  return _i = class {
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
  }, _i;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var $i, Jo;
function yd() {
  return Jo || (Jo = 1, $i = class {
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
      const s = t.length;
      for (let a = 0; a < s; ++a) {
        const o = t[a], u = n.get(o);
        (c === null || o > c) && (u && a > 0 && o > t[a - 1] || !u && a < s - 1 && o > t[a + 1]) && (c = o, r = a);
      }
      if (c === null)
        this.done = !0;
      else {
        const a = n.get(c) ? r - 1 : r + 1;
        t[r] = t[a], t[a] = c;
        for (const o of t)
          o > c && n.set(o, !n.get(o));
      }
      return i;
    }
  }), $i;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var qi, Zo;
function ks() {
  if (Zo) return qi;
  Zo = 1;
  const t = "http://www.w3.org/1999/02/22-rdf-syntax-ns#" + "langString", n = "http://www.w3.org/2001/XMLSchema#string", i = "NamedNode", c = "BlankNode", r = "Literal", s = "DefaultGraph", a = {};
  (() => {
    const f = "(?:<([^:]+:[^>]*)>)", x = "A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�" + "_", v = x + "0-9-·̀-ͯ‿-⁀", b = "(_:(?:[" + x + "0-9])(?:(?:[" + v + ".])*(?:[" + v + "]))?)", y = '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"', d = "(?:\\^\\^" + f + ")", h = "(?:" + y + "(?:" + d + "|" + "(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*))" + ")?)", I = "[ \\t]+", A = "[ \\t]*", R = "(?:" + f + "|" + b + ")" + I, O = f + I, M = "(?:" + f + "|" + b + "|" + h + ")" + A, q = "(?:\\.|(?:(?:" + f + "|" + b + ")" + A + "\\.))";
    a.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g, a.empty = new RegExp("^" + A + "$"), a.quad = new RegExp(
      "^" + A + R + O + M + q + A + "$"
    );
  })(), qi = class Rr {
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
        if (d[1] !== void 0 ? l.subject = { termType: i, value: d[1] } : l.subject = { termType: c, value: d[2] }, l.predicate = { termType: i, value: d[3] }, d[4] !== void 0 ? l.object = { termType: i, value: d[4] } : d[5] !== void 0 ? l.object = { termType: c, value: d[5] } : (l.object = {
          termType: r,
          value: void 0,
          datatype: {
            termType: i
          }
        }, d[7] !== void 0 ? l.object.datatype.value = d[7] : d[8] !== void 0 ? (l.object.datatype.value = t, l.object.language = d[8]) : l.object.datatype.value = n, l.object.value = p(d[6])), d[9] !== void 0 ? l.graph = {
          termType: i,
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
      Array.isArray(w) || (w = Rr.legacyDatasetToQuads(w));
      const x = [];
      for (const v of w)
        x.push(Rr.serializeQuad(v));
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
      return w.termType === i ? b += `<${w.value}>` : b += `${w.value}`, b += ` <${x.value}> `, v.termType === i ? b += `<${v.value}>` : v.termType === c ? b += v.value : (b += `"${m(v.value)}"`, v.datatype.value === t ? v.language && (b += `@${v.language}`) : v.datatype.value !== n && (b += `^^<${v.datatype.value}>`)), S.termType === i ? b += ` <${S.value}>` : S.termType === c && (b += ` ${S.value}`), b += ` .
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
      return Rr.serializeQuadComponents(
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
        IRI: i,
        literal: r
      };
      for (const S in w)
        w[S].forEach((y) => {
          const d = {};
          for (const l in y) {
            const h = y[l], I = {
              termType: v[h.type],
              value: h.value
            };
            I.termType === r && (I.datatype = {
              termType: i
            }, "datatype" in h && (I.datatype.value = h.datatype), "language" in h ? ("datatype" in h || (I.datatype.value = t), I.language = h.language) : "datatype" in h || (I.datatype.value = n)), d[l] = I;
          }
          S === "@default" ? d.graph = {
            termType: s,
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
  const u = /["\\\n\r]/g;
  function m(f) {
    return f.replace(u, function(w) {
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
  function p(f) {
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
  return qi;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var ji, Ko;
function gd() {
  if (Ko) return ji;
  Ko = 1;
  const e = Ms(), t = Hr(), n = yd(), i = ks();
  ji = class {
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
      let u = 0;
      for (const f of o)
        ++u % 100 === 0 && await this._yield(), await this._hashAndTrackBlankNode({ id: f, hashToBlankNodes: a });
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
      const p = [];
      for (const f of this.quads) {
        const w = i.serializeQuadComponents(
          this._componentWithCanonicalId(f.subject),
          f.predicate,
          this._componentWithCanonicalId(f.object),
          this._componentWithCanonicalId(f.graph)
        );
        p.push(w);
      }
      return p.sort(), p.join("");
    }
    // 4.6) Hash First Degree Quads
    async hashFirstDegreeQuads(s) {
      const a = [], o = this.blankNodeInfo.get(s), u = o.quads;
      for (const g of u) {
        const p = {
          subject: null,
          predicate: g.predicate,
          object: null,
          graph: null
        };
        p.subject = this.modifyFirstDegreeComponent(
          s,
          g.subject,
          "subject"
        ), p.object = this.modifyFirstDegreeComponent(
          s,
          g.object,
          "object"
        ), p.graph = this.modifyFirstDegreeComponent(
          s,
          g.graph,
          "graph"
        ), a.push(i.serializeQuad(p));
      }
      a.sort();
      const m = this.createMessageDigest();
      for (const g of a)
        m.update(g);
      return o.hash = await m.digest(), o.hash;
    }
    // 4.7) Hash Related Blank Node
    async hashRelatedBlankNode(s, a, o, u) {
      let m;
      this.canonicalIssuer.hasId(s) ? m = this.canonicalIssuer.getId(s) : o.hasId(s) ? m = o.getId(s) : m = this.blankNodeInfo.get(s).hash;
      const g = this.createMessageDigest();
      return g.update(u), u !== "g" && g.update(this.getRelatedPredicate(a)), g.update(m), g.digest();
    }
    // 4.8) Hash N-Degree Quads
    async hashNDegreeQuads(s, a) {
      const o = this.deepIterations.get(s) || 0;
      if (o > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(s, o + 1);
      const u = this.createMessageDigest(), m = await this.createHashToRelated(s, a), g = [...m.keys()].sort();
      for (const p of g) {
        u.update(p);
        let f = "", w;
        const x = new n(m.get(p));
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
        u.update(f), a = w;
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
      const o = /* @__PURE__ */ new Map(), u = this.blankNodeInfo.get(s).quads;
      let m = 0;
      for (const g of u)
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
      const o = await this.hashFirstDegreeQuads(s), u = a.get(o);
      u ? u.push(s) : a.set(o, [s]);
    }
    _addBlankNodeQuadInfo({ quad: s, component: a }) {
      if (a.termType !== "BlankNode")
        return;
      const o = a.value, u = this.blankNodeInfo.get(o);
      u ? u.quads.add(s) : this.blankNodeInfo.set(o, { quads: /* @__PURE__ */ new Set([s]), hash: null });
    }
    async _addRelatedBlankNodeHash({ quad: s, component: a, position: o, id: u, issuer: m, hashToRelated: g }) {
      if (!(a.termType === "BlankNode" && a.value !== u))
        return;
      const p = a.value, f = await this.hashRelatedBlankNode(
        p,
        s,
        m,
        o
      ), w = g.get(f);
      w ? w.push(p) : g.set(f, [p]);
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
  function c(r, s) {
    return r.hash < s.hash ? -1 : r.hash > s.hash ? 1 : 0;
  }
  return ji;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Ri, Qo;
function Of() {
  if (Qo) return Ri;
  Qo = 1;
  const e = Hr(), t = gd();
  return Ri = class extends t {
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
      const r = /* @__PURE__ */ new Map(), s = this.blankNodeInfo.get(i).quads;
      let a = 0;
      for (const o of s) {
        let u, m;
        if (o.subject.termType === "BlankNode" && o.subject.value !== i)
          m = o.subject.value, u = "p";
        else if (o.object.termType === "BlankNode" && o.object.value !== i)
          m = o.object.value, u = "r";
        else
          continue;
        ++a % 100 === 0 && await this._yield();
        const g = await this.hashRelatedBlankNode(
          m,
          o,
          c,
          u
        ), p = r.get(g);
        p ? p.push(m) : r.set(g, [m]);
      }
      return r;
    }
  }, Ri;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Pi, Xo;
function vd() {
  if (Xo) return Pi;
  Xo = 1;
  const e = Ms(), t = Hr(), n = yd(), i = ks();
  Pi = class {
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
      for (const p of s)
        this._addBlankNodeQuadInfo({ quad: p, component: p.subject }), this._addBlankNodeQuadInfo({ quad: p, component: p.object }), this._addBlankNodeQuadInfo({ quad: p, component: p.graph });
      const a = /* @__PURE__ */ new Map(), o = [...this.blankNodeInfo.keys()];
      for (const p of o)
        this._hashAndTrackBlankNode({ id: p, hashToBlankNodes: a });
      const u = [...a.keys()].sort(), m = [];
      for (const p of u) {
        const f = a.get(p);
        if (f.length > 1) {
          m.push(f);
          continue;
        }
        const w = f[0];
        this.canonicalIssuer.getId(w);
      }
      for (const p of m) {
        const f = [];
        for (const w of p) {
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
      for (const p of this.quads) {
        const f = i.serializeQuadComponents(
          this._componentWithCanonicalId({ component: p.subject }),
          p.predicate,
          this._componentWithCanonicalId({ component: p.object }),
          this._componentWithCanonicalId({ component: p.graph })
        );
        g.push(f);
      }
      return g.sort(), g.join("");
    }
    // 4.6) Hash First Degree Quads
    hashFirstDegreeQuads(s) {
      const a = [], o = this.blankNodeInfo.get(s), u = o.quads;
      for (const g of u) {
        const p = {
          subject: null,
          predicate: g.predicate,
          object: null,
          graph: null
        };
        p.subject = this.modifyFirstDegreeComponent(
          s,
          g.subject,
          "subject"
        ), p.object = this.modifyFirstDegreeComponent(
          s,
          g.object,
          "object"
        ), p.graph = this.modifyFirstDegreeComponent(
          s,
          g.graph,
          "graph"
        ), a.push(i.serializeQuad(p));
      }
      a.sort();
      const m = this.createMessageDigest();
      for (const g of a)
        m.update(g);
      return o.hash = m.digest(), o.hash;
    }
    // 4.7) Hash Related Blank Node
    hashRelatedBlankNode(s, a, o, u) {
      let m;
      this.canonicalIssuer.hasId(s) ? m = this.canonicalIssuer.getId(s) : o.hasId(s) ? m = o.getId(s) : m = this.blankNodeInfo.get(s).hash;
      const g = this.createMessageDigest();
      return g.update(u), u !== "g" && g.update(this.getRelatedPredicate(a)), g.update(m), g.digest();
    }
    // 4.8) Hash N-Degree Quads
    hashNDegreeQuads(s, a) {
      const o = this.deepIterations.get(s) || 0;
      if (o > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(s, o + 1);
      const u = this.createMessageDigest(), m = this.createHashToRelated(s, a), g = [...m.keys()].sort();
      for (const p of g) {
        u.update(p);
        let f = "", w;
        const x = new n(m.get(p));
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
        u.update(f), a = w;
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
      const o = /* @__PURE__ */ new Map(), u = this.blankNodeInfo.get(s).quads;
      for (const m of u)
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
      const o = this.hashFirstDegreeQuads(s), u = a.get(o);
      u ? u.push(s) : a.set(o, [s]);
    }
    _addBlankNodeQuadInfo({ quad: s, component: a }) {
      if (a.termType !== "BlankNode")
        return;
      const o = a.value, u = this.blankNodeInfo.get(o);
      u ? u.quads.add(s) : this.blankNodeInfo.set(o, { quads: /* @__PURE__ */ new Set([s]), hash: null });
    }
    _addRelatedBlankNodeHash({ quad: s, component: a, position: o, id: u, issuer: m, hashToRelated: g }) {
      if (!(a.termType === "BlankNode" && a.value !== u))
        return;
      const p = a.value, f = this.hashRelatedBlankNode(p, s, m, o), w = g.get(f);
      w ? w.push(p) : g.set(f, [p]);
    }
    // canonical ids for 7.1
    _componentWithCanonicalId({ component: s }) {
      return s.termType === "BlankNode" && !s.value.startsWith(this.canonicalIssuer.prefix) ? {
        termType: "BlankNode",
        value: this.canonicalIssuer.getId(s.value)
      } : s;
    }
  };
  function c(r, s) {
    return r.hash < s.hash ? -1 : r.hash > s.hash ? 1 : 0;
  }
  return Pi;
}
/*!
 * Copyright (c) 2016-2021 Digital Bazaar, Inc. All rights reserved.
 */
var Ei, Wo;
function Mf() {
  if (Wo) return Ei;
  Wo = 1;
  const e = Hr(), t = vd();
  return Ei = class extends t {
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
      const r = /* @__PURE__ */ new Map(), s = this.blankNodeInfo.get(i).quads;
      for (const a of s) {
        let o, u;
        if (a.subject.termType === "BlankNode" && a.subject.value !== i)
          u = a.subject.value, o = "p";
        else if (a.object.termType === "BlankNode" && a.object.value !== i)
          u = a.object.value, o = "r";
        else
          continue;
        const m = this.hashRelatedBlankNode(u, a, c, o), g = r.get(m);
        g ? g.push(u) : r.set(m, [u]);
      }
      return r;
    }
  }, Ei;
}
const kf = {}, Nf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kf
}, Symbol.toStringTag, { value: "Module" })), Lf = /* @__PURE__ */ Ml(Nf);
var Yo;
function Df() {
  return Yo || (Yo = 1, (function(e) {
    const t = gd(), n = Of(), i = vd(), c = Mf();
    let r;
    try {
      r = Lf;
    } catch {
    }
    function s(a) {
      return Array.isArray(a) ? a : e.NQuads.legacyDatasetToQuads(a);
    }
    e.NQuads = ks(), e.IdentifierIssuer = Ms(), e._rdfCanonizeNative = function(a) {
      return a && (r = a), r;
    }, e.canonize = async function(a, o) {
      const u = s(a);
      if (o.useNative) {
        if (!r)
          throw new Error("rdf-canonize-native not available");
        if (o.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return new Promise((m, g) => r.canonize(u, o, (p, f) => p ? g(p) : m(f)));
      }
      if (o.algorithm === "URDNA2015")
        return new t(o).main(u);
      if (o.algorithm === "URGNA2012") {
        if (o.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "URGNA2012".'
          );
        return new n(o).main(u);
      }
      throw "algorithm" in o ? new Error(
        "Invalid RDF Dataset Canonicalization algorithm: " + o.algorithm
      ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
    }, e._canonizeSync = function(a, o) {
      const u = s(a);
      if (o.useNative) {
        if (!r)
          throw new Error("rdf-canonize-native not available");
        if (o.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return r.canonizeSync(u, o);
      }
      if (o.algorithm === "URDNA2015")
        return new i(o).main(u);
      if (o.algorithm === "URGNA2012") {
        if (o.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "URGNA2012".'
          );
        return new c(o).main(u);
      }
      throw "algorithm" in o ? new Error(
        "Invalid RDF Dataset Canonicalization algorithm: " + o.algorithm
      ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
    };
  })(Si)), Si;
}
var Ci, ec;
function Ns() {
  return ec || (ec = 1, Ci = Df()), Ci;
}
var Ti, tc;
function Ce() {
  if (tc) return Ti;
  tc = 1;
  const e = {};
  return Ti = e, e.isArray = Array.isArray, e.isBoolean = (t) => typeof t == "boolean" || Object.prototype.toString.call(t) === "[object Boolean]", e.isDouble = (t) => e.isNumber(t) && (String(t).indexOf(".") !== -1 || Math.abs(t) >= 1e21), e.isEmptyObject = (t) => e.isObject(t) && Object.keys(t).length === 0, e.isNumber = (t) => typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]", e.isNumeric = (t) => !isNaN(parseFloat(t)) && isFinite(t), e.isObject = (t) => Object.prototype.toString.call(t) === "[object Object]", e.isString = (t) => typeof t == "string" || Object.prototype.toString.call(t) === "[object String]", e.isUndefined = (t) => typeof t > "u", Ti;
}
var Oi, nc;
function pt() {
  if (nc) return Oi;
  nc = 1;
  const e = Ce(), t = {};
  return Oi = t, t.isSubject = (n) => e.isObject(n) && !("@value" in n || "@set" in n || "@list" in n) ? Object.keys(n).length > 1 || !("@id" in n) : !1, t.isSubjectReference = (n) => (
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
  }, Oi;
}
var Mi, rc;
function ze() {
  return rc || (rc = 1, Mi = class extends Error {
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
  }), Mi;
}
var ki, ic;
function De() {
  if (ic) return ki;
  ic = 1;
  const e = pt(), t = Ce(), n = Ns().IdentifierIssuer, i = ze(), c = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/, r = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g, s = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/, a = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g, o = /^@[a-zA-Z]+$/, u = {
    headers: {
      accept: "application/ld+json, application/json"
    }
  }, m = {};
  ki = m, m.IdentifierIssuer = n, m.REGEX_BCP47 = c, m.REGEX_KEYWORD = o, m.clone = function(p) {
    if (p && typeof p == "object") {
      let f;
      if (t.isArray(p)) {
        f = [];
        for (let w = 0; w < p.length; ++w)
          f[w] = m.clone(p[w]);
      } else if (p instanceof Map) {
        f = /* @__PURE__ */ new Map();
        for (const [w, x] of p)
          f.set(w, m.clone(x));
      } else if (p instanceof Set) {
        f = /* @__PURE__ */ new Set();
        for (const w of p)
          f.add(m.clone(w));
      } else if (t.isObject(p)) {
        f = {};
        for (const w in p)
          f[w] = m.clone(p[w]);
      } else
        f = p.toString();
      return f;
    }
    return p;
  }, m.asArray = function(p) {
    return Array.isArray(p) ? p : [p];
  }, m.buildHeaders = (p = {}) => {
    if (Object.keys(p).some(
      (w) => w.toLowerCase() === "accept"
    ))
      throw new RangeError(
        'Accept header may not be specified; only "' + u.headers.accept + '" is supported.'
      );
    return Object.assign({ Accept: u.headers.accept }, p);
  }, m.parseLinkHeader = (p) => {
    const f = {}, w = p.match(r);
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
  }, m.validateTypeValue = (p, f) => {
    if (!t.isString(p) && !(t.isArray(p) && p.every((w) => t.isString(w)))) {
      if (f && t.isObject(p))
        switch (Object.keys(p).length) {
          case 0:
            return;
          case 1:
            if ("@default" in p && m.asArray(p["@default"]).every((w) => t.isString(w)))
              return;
        }
      throw new i(
        'Invalid JSON-LD syntax; "@type" value must a string, an array of strings, an empty object, or a default object.',
        "jsonld.SyntaxError",
        { code: "invalid type value", value: p }
      );
    }
  }, m.hasProperty = (p, f) => {
    if (p.hasOwnProperty(f)) {
      const w = p[f];
      return !t.isArray(w) || w.length > 0;
    }
    return !1;
  }, m.hasValue = (p, f, w) => {
    if (m.hasProperty(p, f)) {
      let x = p[f];
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
  }, m.addValue = (p, f, w, x) => {
    if (x = x || {}, "propertyIsArray" in x || (x.propertyIsArray = !1), "valueIsArray" in x || (x.valueIsArray = !1), "allowDuplicate" in x || (x.allowDuplicate = !0), "prependValue" in x || (x.prependValue = !1), x.valueIsArray)
      p[f] = w;
    else if (t.isArray(w)) {
      w.length === 0 && x.propertyIsArray && !p.hasOwnProperty(f) && (p[f] = []), x.prependValue && (w = w.concat(p[f]), p[f] = []);
      for (let v = 0; v < w.length; ++v)
        m.addValue(p, f, w[v], x);
    } else if (p.hasOwnProperty(f)) {
      const v = !x.allowDuplicate && m.hasValue(p, f, w);
      !t.isArray(p[f]) && (!v || x.propertyIsArray) && (p[f] = [p[f]]), v || (x.prependValue ? p[f].unshift(w) : p[f].push(w));
    } else
      p[f] = x.propertyIsArray ? [w] : w;
  }, m.getValues = (p, f) => [].concat(p[f] || []), m.removeProperty = (p, f) => {
    delete p[f];
  }, m.removeValue = (p, f, w, x) => {
    x = x || {}, "propertyIsArray" in x || (x.propertyIsArray = !1);
    const v = m.getValues(p, f).filter(
      (S) => !m.compareValues(S, w)
    );
    v.length === 0 ? m.removeProperty(p, f) : v.length === 1 && !x.propertyIsArray ? p[f] = v[0] : p[f] = v;
  }, m.relabelBlankNodes = (p, f) => {
    f = f || {};
    const w = f.issuer || new n("_:b");
    return g(w, p);
  }, m.compareValues = (p, f) => p === f || e.isValue(p) && e.isValue(f) && p["@value"] === f["@value"] && p["@type"] === f["@type"] && p["@language"] === f["@language"] && p["@index"] === f["@index"] ? !0 : t.isObject(p) && "@id" in p && t.isObject(f) && "@id" in f ? p["@id"] === f["@id"] : !1, m.compareShortestLeast = (p, f) => p.length < f.length ? -1 : f.length < p.length ? 1 : p === f ? 0 : p < f ? -1 : 1;
  function g(p, f) {
    if (t.isArray(f))
      for (let w = 0; w < f.length; ++w)
        f[w] = g(p, f[w]);
    else if (e.isList(f))
      f["@list"] = g(p, f["@list"]);
    else if (t.isObject(f)) {
      e.isBlankNode(f) && (f["@id"] = p.getId(f["@id"]));
      const w = Object.keys(f).sort();
      for (let x = 0; x < w.length; ++x) {
        const v = w[x];
        v !== "@id" && (f[v] = g(p, f[v]));
      }
    }
    return f;
  }
  return ki;
}
var Ni, sc;
function Ls() {
  if (sc) return Ni;
  sc = 1;
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
var Li, ac;
function bd() {
  return ac || (ac = 1, Li = class {
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
  }), Li;
}
var Di, oc;
function xt() {
  if (oc) return Di;
  oc = 1;
  const e = Ce(), t = {};
  Di = t, t.parsers = {
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
    const r = {}, s = t.parsers[c || "full"], a = s.regex.exec(i);
    let o = s.keys.length;
    for (; o--; )
      r[s.keys[o]] = a[o] === void 0 ? null : a[o];
    return (r.scheme === "https" && r.port === "443" || r.scheme === "http" && r.port === "80") && (r.href = r.href.replace(":" + r.port, ""), r.authority = r.authority.replace(":" + r.port, ""), r.port = null), r.normalizedPath = t.removeDotSegments(r.path), r;
  }, t.prependBase = (i, c) => {
    if (i === null || t.isAbsolute(c))
      return c;
    (!i || e.isString(i)) && (i = t.parse(i || ""));
    const r = t.parse(c), s = {
      protocol: i.protocol || ""
    };
    if (r.authority !== null)
      s.authority = r.authority, s.path = r.path, s.query = r.query;
    else if (s.authority = i.authority, r.path === "")
      s.path = i.path, r.query !== null ? s.query = r.query : s.query = i.query;
    else {
      if (r.path.indexOf("/") === 0)
        s.path = r.path;
      else {
        let o = i.path;
        o = o.substr(0, o.lastIndexOf("/") + 1), (o.length > 0 || i.authority) && o.substr(-1) !== "/" && (o += "/"), o += r.path, s.path = o;
      }
      s.query = r.query;
    }
    r.path !== "" && (s.path = t.removeDotSegments(s.path));
    let a = s.protocol;
    return s.authority !== null && (a += "//" + s.authority), a += s.path, s.query !== null && (a += "?" + s.query), r.fragment !== null && (a += "#" + r.fragment), a === "" && (a = "./"), a;
  }, t.removeBase = (i, c) => {
    if (i === null)
      return c;
    (!i || e.isString(i)) && (i = t.parse(i || ""));
    let r = "";
    if (i.href !== "" ? r += (i.protocol || "") + "//" + (i.authority || "") : c.indexOf("//") && (r += "//"), c.indexOf(r) !== 0)
      return c;
    const s = t.parse(c.substr(r.length)), a = i.normalizedPath.split("/"), o = s.normalizedPath.split("/"), u = s.fragment || s.query ? 0 : 1;
    for (; a.length > 0 && o.length > u && a[0] === o[0]; )
      a.shift(), o.shift();
    let m = "";
    if (a.length > 0) {
      a.pop();
      for (let g = 0; g < a.length; ++g)
        m += "../";
    }
    return m += o.join("/"), s.query !== null && (m += "?" + s.query), s.fragment !== null && (m += "#" + s.fragment), m === "" && (m = "./"), m;
  }, t.removeDotSegments = (i) => {
    if (i.length === 0)
      return "";
    const c = i.split("/"), r = [];
    for (; c.length > 0; ) {
      const s = c.shift(), a = c.length === 0;
      if (s === ".") {
        a && r.push("");
        continue;
      }
      if (s === "..") {
        r.pop(), a && r.push("");
        continue;
      }
      r.push(s);
    }
    return i[0] === "/" && r.length > 0 && r[0] !== "" && r.unshift(""), r.length === 1 && r[0] === "" ? "/" : r.join("/");
  };
  const n = /^([A-Za-z][A-Za-z0-9+-.]*|_):[^\s]*$/;
  return t.isAbsolute = (i) => e.isString(i) && n.test(i), t.isRelative = (i) => e.isString(i), Di;
}
var zi, cc;
function zf() {
  if (cc) return zi;
  cc = 1;
  const { parseLinkHeader: e, buildHeaders: t } = De(), { LINK_HEADER_CONTEXT: n } = Ls(), i = ze(), c = bd(), { prependBase: r } = xt(), s = /(^|(\r\n))link:/i;
  zi = ({
    secure: o,
    headers: u = {},
    xhr: m
  } = { headers: {} }) => {
    return u = t(u), new c().wrapLoader(p);
    async function p(f) {
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
        w = await a(m, f, u);
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
      let x = { contextUrl: null, documentUrl: f, document: w.response }, v = null;
      const S = w.getResponseHeader("Content-Type");
      let b;
      if (s.test(w.getAllResponseHeaders()) && (b = w.getResponseHeader("Link")), b && S !== "application/ld+json") {
        const y = e(b), d = y[n];
        if (Array.isArray(d))
          throw new i(
            "URL could not be dereferenced, it has more than one associated HTTP Link Header.",
            "jsonld.InvalidUrl",
            { code: "multiple context link headers", url: f }
          );
        d && (x.contextUrl = d.target), v = y.alternate, v && v.type == "application/ld+json" && !(S || "").match(/^application\/(\w*\+)?json$/) && (x = await p(r(f, v.target)));
      }
      return x;
    }
  };
  function a(o, u, m) {
    o = o || XMLHttpRequest;
    const g = new o();
    return new Promise((p, f) => {
      g.onload = () => p(g), g.onerror = (w) => f(w), g.open("GET", u, !0);
      for (const w in m)
        g.setRequestHeader(w, m[w]);
      g.send();
    });
  }
  return zi;
}
var Ui, dc;
function Uf() {
  if (dc) return Ui;
  dc = 1;
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
var Vi, lc;
function Vf() {
  return lc || (lc = 1, Vi = function(e) {
    e.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next)
        yield t.value;
    };
  }), Vi;
}
var Fi, uc;
function Ff() {
  if (uc) return Fi;
  uc = 1, Fi = e, e.Node = c, e.create = e;
  function e(r) {
    var s = this;
    if (s instanceof e || (s = new e()), s.tail = null, s.head = null, s.length = 0, r && typeof r.forEach == "function")
      r.forEach(function(u) {
        s.push(u);
      });
    else if (arguments.length > 0)
      for (var a = 0, o = arguments.length; a < o; a++)
        s.push(arguments[a]);
    return s;
  }
  e.prototype.removeNode = function(r) {
    if (r.list !== this)
      throw new Error("removing node which does not belong to this list");
    var s = r.next, a = r.prev;
    return s && (s.prev = a), a && (a.next = s), r === this.head && (this.head = s), r === this.tail && (this.tail = a), r.list.length--, r.next = null, r.prev = null, r.list = null, s;
  }, e.prototype.unshiftNode = function(r) {
    if (r !== this.head) {
      r.list && r.list.removeNode(r);
      var s = this.head;
      r.list = this, r.next = s, s && (s.prev = r), this.head = r, this.tail || (this.tail = r), this.length++;
    }
  }, e.prototype.pushNode = function(r) {
    if (r !== this.tail) {
      r.list && r.list.removeNode(r);
      var s = this.tail;
      r.list = this, r.prev = s, s && (s.next = r), this.tail = r, this.head || (this.head = r), this.length++;
    }
  }, e.prototype.push = function() {
    for (var r = 0, s = arguments.length; r < s; r++)
      n(this, arguments[r]);
    return this.length;
  }, e.prototype.unshift = function() {
    for (var r = 0, s = arguments.length; r < s; r++)
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
  }, e.prototype.forEach = function(r, s) {
    s = s || this;
    for (var a = this.head, o = 0; a !== null; o++)
      r.call(s, a.value, o, this), a = a.next;
  }, e.prototype.forEachReverse = function(r, s) {
    s = s || this;
    for (var a = this.tail, o = this.length - 1; a !== null; o--)
      r.call(s, a.value, o, this), a = a.prev;
  }, e.prototype.get = function(r) {
    for (var s = 0, a = this.head; a !== null && s < r; s++)
      a = a.next;
    if (s === r && a !== null)
      return a.value;
  }, e.prototype.getReverse = function(r) {
    for (var s = 0, a = this.tail; a !== null && s < r; s++)
      a = a.prev;
    if (s === r && a !== null)
      return a.value;
  }, e.prototype.map = function(r, s) {
    s = s || this;
    for (var a = new e(), o = this.head; o !== null; )
      a.push(r.call(s, o.value, this)), o = o.next;
    return a;
  }, e.prototype.mapReverse = function(r, s) {
    s = s || this;
    for (var a = new e(), o = this.tail; o !== null; )
      a.push(r.call(s, o.value, this)), o = o.prev;
    return a;
  }, e.prototype.reduce = function(r, s) {
    var a, o = this.head;
    if (arguments.length > 1)
      a = s;
    else if (this.head)
      o = this.head.next, a = this.head.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var u = 0; o !== null; u++)
      a = r(a, o.value, u), o = o.next;
    return a;
  }, e.prototype.reduceReverse = function(r, s) {
    var a, o = this.tail;
    if (arguments.length > 1)
      a = s;
    else if (this.tail)
      o = this.tail.prev, a = this.tail.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var u = this.length - 1; o !== null; u--)
      a = r(a, o.value, u), o = o.prev;
    return a;
  }, e.prototype.toArray = function() {
    for (var r = new Array(this.length), s = 0, a = this.head; a !== null; s++)
      r[s] = a.value, a = a.next;
    return r;
  }, e.prototype.toArrayReverse = function() {
    for (var r = new Array(this.length), s = 0, a = this.tail; a !== null; s++)
      r[s] = a.value, a = a.prev;
    return r;
  }, e.prototype.slice = function(r, s) {
    s = s || this.length, s < 0 && (s += this.length), r = r || 0, r < 0 && (r += this.length);
    var a = new e();
    if (s < r || s < 0)
      return a;
    r < 0 && (r = 0), s > this.length && (s = this.length);
    for (var o = 0, u = this.head; u !== null && o < r; o++)
      u = u.next;
    for (; u !== null && o < s; o++, u = u.next)
      a.push(u.value);
    return a;
  }, e.prototype.sliceReverse = function(r, s) {
    s = s || this.length, s < 0 && (s += this.length), r = r || 0, r < 0 && (r += this.length);
    var a = new e();
    if (s < r || s < 0)
      return a;
    r < 0 && (r = 0), s > this.length && (s = this.length);
    for (var o = this.length, u = this.tail; u !== null && o > s; o--)
      u = u.prev;
    for (; u !== null && o > r; o--, u = u.prev)
      a.push(u.value);
    return a;
  }, e.prototype.splice = function(r, s, ...a) {
    r > this.length && (r = this.length - 1), r < 0 && (r = this.length + r);
    for (var o = 0, u = this.head; u !== null && o < r; o++)
      u = u.next;
    for (var m = [], o = 0; u && o < s; o++)
      m.push(u.value), u = this.removeNode(u);
    u === null && (u = this.tail), u !== this.head && u !== this.tail && (u = u.prev);
    for (var o = 0; o < a.length; o++)
      u = t(this, u, a[o]);
    return m;
  }, e.prototype.reverse = function() {
    for (var r = this.head, s = this.tail, a = r; a !== null; a = a.prev) {
      var o = a.prev;
      a.prev = a.next, a.next = o;
    }
    return this.head = s, this.tail = r, this;
  };
  function t(r, s, a) {
    var o = s === r.head ? new c(a, null, s, r) : new c(a, s, s.next, r);
    return o.next === null && (r.tail = o), o.prev === null && (r.head = o), r.length++, o;
  }
  function n(r, s) {
    r.tail = new c(s, r.tail, null, r), r.head || (r.head = r.tail), r.length++;
  }
  function i(r, s) {
    r.head = new c(s, null, r.head, r), r.tail || (r.tail = r.head), r.length++;
  }
  function c(r, s, a, o) {
    if (!(this instanceof c))
      return new c(r, s, a, o);
    this.list = o, this.value = r, s ? (s.next = this, this.prev = s) : this.prev = null, a ? (a.prev = this, this.next = a) : this.next = null;
  }
  try {
    Vf()(e);
  } catch {
  }
  return Fi;
}
var Bi, pc;
function wd() {
  if (pc) return Bi;
  pc = 1;
  const e = Ff(), t = Symbol("max"), n = Symbol("length"), i = Symbol("lengthCalculator"), c = Symbol("allowStale"), r = Symbol("maxAge"), s = Symbol("dispose"), a = Symbol("noDisposeOnSet"), o = Symbol("lruList"), u = Symbol("cache"), m = Symbol("updateAgeOnGet"), g = () => 1;
  class p {
    constructor(d) {
      if (typeof d == "number" && (d = { max: d }), d || (d = {}), d.max && (typeof d.max != "number" || d.max < 0))
        throw new TypeError("max must be a non-negative number");
      this[t] = d.max || 1 / 0;
      const l = d.length || g;
      if (this[i] = typeof l != "function" ? g : l, this[c] = d.stale || !1, d.maxAge && typeof d.maxAge != "number")
        throw new TypeError("maxAge must be a number");
      this[r] = d.maxAge || 0, this[s] = d.dispose, this[a] = d.noDisposeOnSet || !1, this[m] = d.updateAgeOnGet || !1, this.reset();
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
      this[s] && this[o] && this[o].length && this[o].forEach((d) => this[s](d.key, d.value)), this[u] = /* @__PURE__ */ new Map(), this[o] = new e(), this[n] = 0;
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
      if (this[u].has(d)) {
        if (A > this[t])
          return v(this, this[u].get(d)), !1;
        const M = this[u].get(d).value;
        return this[s] && (this[a] || this[s](d, M.value)), M.now = I, M.maxAge = h, M.value = l, this[n] += A - M.length, M.length = A, this.get(d), x(this), !0;
      }
      const R = new S(d, l, A, I, h);
      return R.length > this[t] ? (this[s] && this[s](d, l), !1) : (this[n] += R.length, this[o].unshift(R), this[u].set(d, this[o].head), x(this), !0);
    }
    has(d) {
      if (!this[u].has(d)) return !1;
      const l = this[u].get(d).value;
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
      v(this, this[u].get(d));
    }
    load(d) {
      this.reset();
      const l = Date.now();
      for (let h = d.length - 1; h >= 0; h--) {
        const I = d[h], A = I.e || 0;
        if (A === 0)
          this.set(I.k, I.v);
        else {
          const R = A - l;
          R > 0 && this.set(I.k, I.v, R);
        }
      }
    }
    prune() {
      this[u].forEach((d, l) => f(this, l, !1));
    }
  }
  const f = (y, d, l) => {
    const h = y[u].get(d);
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
    if (!d || !d.maxAge && !y[r])
      return !1;
    const l = Date.now() - d.now;
    return d.maxAge ? l > d.maxAge : y[r] && l > y[r];
  }, x = (y) => {
    if (y[n] > y[t])
      for (let d = y[o].tail; y[n] > y[t] && d !== null; ) {
        const l = d.prev;
        v(y, d), d = l;
      }
  }, v = (y, d) => {
    if (d) {
      const l = d.value;
      y[s] && y[s](l.key, l.value), y[n] -= l.length, y[u].delete(l.key), y[o].removeNode(d);
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
  return Bi = p, Bi;
}
var Gi, fc;
function Bf() {
  if (fc) return Gi;
  fc = 1;
  const e = wd(), t = 10;
  return Gi = class {
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
  }, Gi;
}
var Hi, hc;
function Gf() {
  if (hc) return Hi;
  hc = 1;
  const {
    isArray: e,
    isObject: t,
    isString: n
  } = Ce(), {
    asArray: i
  } = De(), { prependBase: c } = xt(), r = ze(), s = Bf(), a = 10;
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
      context: p,
      documentLoader: f,
      base: w,
      cycles: x = /* @__PURE__ */ new Set()
    }) {
      p && t(p) && p["@context"] && (p = p["@context"]), p = i(p);
      const v = [];
      for (const S of p) {
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
        t(S) || o(p);
        const b = JSON.stringify(S);
        let y = this._get(b);
        y || (y = new s({ document: S }), this._cacheResolvedContext({ key: b, resolved: y, tag: "static" })), v.push(y);
      }
      return v;
    }
    _get(g) {
      let p = this.perOpCache.get(g);
      if (!p) {
        const f = this.sharedCache.get(g);
        f && (p = f.get("static"), p && this.perOpCache.set(g, p));
      }
      return p;
    }
    _cacheResolvedContext({ key: g, resolved: p, tag: f }) {
      if (this.perOpCache.set(g, p), f !== void 0) {
        let w = this.sharedCache.get(g);
        w || (w = /* @__PURE__ */ new Map(), this.sharedCache.set(g, w)), w.set(f, p);
      }
      return p;
    }
    async _resolveRemoteContext({ activeCtx: g, url: p, documentLoader: f, base: w, cycles: x }) {
      p = c(w, p);
      const { context: v, remoteDoc: S } = await this._fetchContext(
        { activeCtx: g, url: p, documentLoader: f, cycles: x }
      );
      w = S.documentUrl || p, u({ context: v, base: w });
      const b = await this.resolve(
        { activeCtx: g, context: v, documentLoader: f, base: w, cycles: x }
      );
      return this._cacheResolvedContext({ key: p, resolved: b, tag: S.tag }), b;
    }
    async _fetchContext({ activeCtx: g, url: p, documentLoader: f, cycles: w }) {
      if (w.size > a)
        throw new r(
          "Maximum number of @context URLs exceeded.",
          "jsonld.ContextUrlError",
          {
            code: g.processingMode === "json-ld-1.0" ? "loading remote context failed" : "context overflow",
            max: a
          }
        );
      if (w.has(p))
        throw new r(
          "Cyclical @context URLs detected.",
          "jsonld.ContextUrlError",
          {
            code: g.processingMode === "json-ld-1.0" ? "recursive context inclusion" : "context overflow",
            url: p
          }
        );
      w.add(p);
      let x, v;
      try {
        v = await f(p), x = v.document || null, n(x) && (x = JSON.parse(x));
      } catch (S) {
        throw new r(
          `Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context. URL: "${p}".`,
          "jsonld.InvalidUrl",
          { code: "loading remote context failed", url: p, cause: S }
        );
      }
      if (!t(x))
        throw new r(
          `Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object. URL: "${p}".`,
          "jsonld.InvalidUrl",
          { code: "invalid remote context", url: p }
        );
      return "@context" in x ? x = { "@context": x["@context"] } : x = { "@context": {} }, v.contextUrl && (e(x["@context"]) || (x["@context"] = [x["@context"]]), x["@context"].push(v.contextUrl)), { context: x, remoteDoc: v };
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
  function u({ context: m, base: g }) {
    if (!m)
      return;
    const p = m["@context"];
    if (n(p)) {
      m["@context"] = c(g, p);
      return;
    }
    if (e(p)) {
      for (let f = 0; f < p.length; ++f) {
        const w = p[f];
        if (n(w)) {
          p[f] = c(g, w);
          continue;
        }
        t(w) && u({ context: { "@context": w }, base: g });
      }
      return;
    }
    if (t(p))
      for (const f in p)
        u({ context: p[f], base: g });
  }
  return Hi;
}
var Ji, mc;
function Hf() {
  return mc || (mc = 1, Ji = Ns().NQuads), Ji;
}
var Zi, yc;
function yn() {
  if (yc) return Zi;
  yc = 1;
  const e = ze(), {
    isArray: t
  } = Ce(), {
    asArray: n
  } = De(), i = {};
  Zi = i, i.defaultEventHandler = null, i.setupEventHandler = ({ options: s = {} }) => {
    const a = [].concat(
      s.safe ? i.safeEventHandler : [],
      s.eventHandler ? n(s.eventHandler) : [],
      i.defaultEventHandler ? i.defaultEventHandler : []
    );
    return a.length === 0 ? null : a;
  }, i.handleEvent = ({
    event: s,
    options: a
  }) => {
    c({ event: s, handlers: a.eventHandler });
  };
  function c({ event: s, handlers: a }) {
    let o = !0;
    for (let u = 0; o && u < a.length; ++u) {
      o = !1;
      const m = a[u];
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
  return i.safeEventHandler = function({ event: a, next: o }) {
    if (a.level === "warning" && r.has(a.code))
      throw new e(
        "Safe mode validation error.",
        "jsonld.ValidationError",
        { event: a }
      );
    o();
  }, i.logEventHandler = function({ event: a, next: o }) {
    console.log(`EVENT: ${a.message}`, { event: a }), o();
  }, i.logWarningEventHandler = function({ event: a, next: o }) {
    a.level === "warning" && console.warn(`WARNING: ${a.message}`, { event: a }), o();
  }, i.unhandledEventHandler = function({ event: a }) {
    throw new e(
      "No handler for event.",
      "jsonld.UnhandledEvent",
      { event: a }
    );
  }, i.setDefaultEventHandler = function({ eventHandler: s } = {}) {
    i.defaultEventHandler = s ? n(s) : null;
  }, Zi;
}
var Ki, gc;
function jt() {
  if (gc) return Ki;
  gc = 1;
  const e = De(), t = ze(), {
    isArray: n,
    isObject: i,
    isString: c,
    isUndefined: r
  } = Ce(), {
    isAbsolute: s,
    isRelative: a,
    prependBase: o
  } = xt(), {
    handleEvent: u
  } = yn(), {
    REGEX_BCP47: m,
    REGEX_KEYWORD: g,
    asArray: p,
    compareShortestLeast: f
  } = De(), w = /* @__PURE__ */ new Map(), x = 1e4, v = {};
  Ki = v, v.process = async ({
    activeCtx: y,
    localCtx: d,
    options: l,
    propagate: h = !0,
    overrideProtected: I = !1,
    cycles: A = /* @__PURE__ */ new Set()
  }) => {
    if (i(d) && "@context" in d && n(d["@context"]) && (d = d["@context"]), p(d).length === 0)
      return y;
    const O = [], M = [
      ({ event: D, next: P }) => {
        O.push(D), P();
      }
    ];
    l.eventHandler && M.push(l.eventHandler);
    const q = l;
    l = { ...l, eventHandler: M };
    const $ = await l.contextResolver.resolve({
      activeCtx: y,
      context: d,
      documentLoader: l.documentLoader,
      base: l.base
    });
    i($[0].document) && typeof $[0].document["@propagate"] == "boolean" && (h = $[0].document["@propagate"]);
    let E = y;
    !h && !E.previousContext && (E = E.clone(), E.previousContext = y);
    for (const D of $) {
      let { document: P } = D;
      if (y = E, P === null) {
        if (!I && Object.keys(y.protected).length !== 0)
          throw new t(
            "Tried to nullify a context with protected terms outside of a term definition.",
            "jsonld.SyntaxError",
            { code: "invalid context nullification" }
          );
        E = y = v.getInitialContext(l).clone();
        continue;
      }
      const G = D.getProcessed(y);
      if (G) {
        if (q.eventHandler)
          for (const H of G.events)
            u({ event: H, options: q });
        E = y = G.context;
        continue;
      }
      if (i(P) && "@context" in P && (P = P["@context"]), !i(P))
        throw new t(
          "Invalid JSON-LD syntax; @context must be an object.",
          "jsonld.SyntaxError",
          { code: "invalid local context", context: P }
        );
      E = E.clone();
      const B = /* @__PURE__ */ new Map();
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
        E.processingMode = "json-ld-1.1", E["@version"] = P["@version"], B.set("@version", !0);
      }
      if (E.processingMode = E.processingMode || y.processingMode, "@base" in P) {
        let H = P["@base"];
        if (!(H === null || s(H))) if (a(H))
          H = o(E["@base"], H);
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.',
            "jsonld.SyntaxError",
            { code: "invalid base IRI", context: P }
          );
        E["@base"] = H, B.set("@base", !0);
      }
      if ("@vocab" in P) {
        const H = P["@vocab"];
        if (H === null)
          delete E["@vocab"];
        else if (c(H)) {
          if (!s(H) && v.processingMode(E, 1))
            throw new t(
              'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.',
              "jsonld.SyntaxError",
              { code: "invalid vocab mapping", context: P }
            );
          {
            const C = S(
              E,
              H,
              { vocab: !0, base: !0 },
              void 0,
              void 0,
              l
            );
            s(C) || l.eventHandler && u({
              event: {
                type: ["JsonLdEvent"],
                code: "relative @vocab reference",
                level: "warning",
                message: "Relative @vocab reference found.",
                details: {
                  vocab: C
                }
              },
              options: l
            }), E["@vocab"] = C;
          }
        } else throw new t(
          'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be a string or null.',
          "jsonld.SyntaxError",
          { code: "invalid vocab mapping", context: P }
        );
        B.set("@vocab", !0);
      }
      if ("@language" in P) {
        const H = P["@language"];
        if (H === null)
          delete E["@language"];
        else if (c(H))
          H.match(m) || l.eventHandler && u({
            event: {
              type: ["JsonLdEvent"],
              code: "invalid @language value",
              level: "warning",
              message: "@language value must be valid BCP47.",
              details: {
                language: H
              }
            },
            options: l
          }), E["@language"] = H.toLowerCase();
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@language" in a @context must be a string or null.',
            "jsonld.SyntaxError",
            { code: "invalid default language", context: P }
          );
        B.set("@language", !0);
      }
      if ("@direction" in P) {
        const H = P["@direction"];
        if (y.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @direction not compatible with " + y.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context member", context: P }
          );
        if (H === null)
          delete E["@direction"];
        else {
          if (H !== "ltr" && H !== "rtl")
            throw new t(
              'Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", context: P }
            );
          E["@direction"] = H;
        }
        B.set("@direction", !0);
      }
      if ("@propagate" in P) {
        const H = P["@propagate"];
        if (y.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @propagate not compatible with " + y.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: P }
          );
        if (typeof H != "boolean")
          throw new t(
            "Invalid JSON-LD syntax; @propagate value must be a boolean.",
            "jsonld.SyntaxError",
            { code: "invalid @propagate value", context: d }
          );
        B.set("@propagate", !0);
      }
      if ("@import" in P) {
        const H = P["@import"];
        if (y.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @import not compatible with " + y.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: P }
          );
        if (!c(H))
          throw new t(
            "Invalid JSON-LD syntax; @import must be a string.",
            "jsonld.SyntaxError",
            { code: "invalid @import value", context: d }
          );
        const C = await l.contextResolver.resolve({
          activeCtx: y,
          context: H,
          documentLoader: l.documentLoader,
          base: l.base
        });
        if (C.length !== 1)
          throw new t(
            "Invalid JSON-LD syntax; @import must reference a single context.",
            "jsonld.SyntaxError",
            { code: "invalid remote context", context: d }
          );
        const k = C[0].getProcessed(y);
        if (k)
          P = k;
        else {
          const z = C[0].document;
          if ("@import" in z)
            throw new t(
              "Invalid JSON-LD syntax: imported context must not include @import.",
              "jsonld.SyntaxError",
              { code: "invalid context entry", context: d }
            );
          for (const N in z)
            P.hasOwnProperty(N) || (P[N] = z[N]);
          C[0].setProcessed(y, P);
        }
        B.set("@import", !0);
      }
      B.set("@protected", P["@protected"] || !1);
      for (const H in P)
        if (v.createTermDefinition({
          activeCtx: E,
          localCtx: P,
          term: H,
          defined: B,
          options: l,
          overrideProtected: I
        }), i(P[H]) && "@context" in P[H]) {
          const C = P[H]["@context"];
          let k = !0;
          if (c(C)) {
            const z = o(l.base, C);
            A.has(z) ? k = !1 : A.add(z);
          }
          if (k)
            try {
              await v.process({
                activeCtx: E.clone(),
                localCtx: P[H]["@context"],
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
                  context: P[H]["@context"],
                  term: H
                }
              );
            }
        }
      D.setProcessed(y, {
        context: E,
        events: O
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
    let R;
    if (d.hasOwnProperty(l) && (R = d[l]), l === "@type" && i(R) && (R["@container"] || "@set") === "@set" && v.processingMode(y, 1.1)) {
      const P = ["@container", "@id", "@protected"], G = Object.keys(R);
      if (G.length === 0 || G.some((B) => !P.includes(B)))
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
    const O = y.mappings.get(l);
    y.mappings.has(l) && y.mappings.delete(l);
    let M = !1;
    if ((c(R) || R === null) && (M = !0, R = { "@id": R }), !i(R))
      throw new t(
        "Invalid JSON-LD syntax; @context term values must be strings or objects.",
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: d }
      );
    const q = {};
    y.mappings.set(l, q), q.reverse = !1;
    const $ = ["@container", "@id", "@language", "@reverse", "@type"];
    v.processingMode(y, 1.1) && $.push(
      "@context",
      "@direction",
      "@index",
      "@nest",
      "@prefix",
      "@protected"
    );
    for (const P in R)
      if (!$.includes(P))
        throw new t(
          "Invalid JSON-LD syntax; a term definition must not contain " + P,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
    const E = l.indexOf(":");
    if (q._termHasColon = E > 0, "@reverse" in R) {
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
      const P = R["@reverse"];
      if (!c(P))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      if (P.match(g)) {
        I.eventHandler && u({
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
        }), O ? y.mappings.set(l, O) : y.mappings.delete(l);
        return;
      }
      const G = S(
        y,
        P,
        { vocab: !0, base: !1 },
        d,
        h,
        I
      );
      if (!s(G))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      q["@id"] = G, q.reverse = !0;
    } else if ("@id" in R) {
      let P = R["@id"];
      if (P && !c(P))
        throw new t(
          "Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      if (P === null)
        q["@id"] = null;
      else if (!v.isKeyword(P) && P.match(g)) {
        I.eventHandler && u({
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
        }), O ? y.mappings.set(l, O) : y.mappings.delete(l);
        return;
      } else if (P !== l) {
        if (P = S(
          y,
          P,
          { vocab: !0, base: !1 },
          d,
          h,
          I
        ), !s(P) && !v.isKeyword(P))
          throw new t(
            "Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: d }
          );
        if (l.match(/(?::[^:])|\//)) {
          const G = new Map(h).set(l, !0);
          if (S(
            y,
            l,
            { vocab: !0, base: !1 },
            d,
            G,
            I
          ) !== P)
            throw new t(
              "Invalid JSON-LD syntax; term in form of IRI must expand to definition.",
              "jsonld.SyntaxError",
              { code: "invalid IRI mapping", context: d }
            );
        }
        q["@id"] = P, q._prefix = M && !q._termHasColon && P.match(/[:\/\?#\[\]@]$/) !== null;
      }
    }
    if (!("@id" in q))
      if (q._termHasColon) {
        const P = l.substr(0, E);
        if (d.hasOwnProperty(P) && v.createTermDefinition({
          activeCtx: y,
          localCtx: d,
          term: P,
          defined: h,
          options: I
        }), y.mappings.has(P)) {
          const G = l.substr(E + 1);
          q["@id"] = y.mappings.get(P)["@id"] + G;
        } else
          q["@id"] = l;
      } else if (l === "@type")
        q["@id"] = l;
      else {
        if (!("@vocab" in y))
          throw new t(
            "Invalid JSON-LD syntax; @context terms must define an @id.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: d, term: l }
          );
        q["@id"] = y["@vocab"] + l;
      }
    if ((R["@protected"] === !0 || h.get("@protected") === !0 && R["@protected"] !== !1) && (y.protected[l] = !0, q.protected = !0), h.set(l, !0), "@type" in R) {
      let P = R["@type"];
      if (!c(P))
        throw new t(
          "Invalid JSON-LD syntax; an @context @type value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid type mapping", context: d }
        );
      if (P === "@json" || P === "@none") {
        if (v.processingMode(y, 1))
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
          h,
          I
        ), !s(P))
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
      q["@type"] = P;
    }
    if ("@container" in R) {
      const P = c(R["@container"]) ? [R["@container"]] : R["@container"] || [], G = ["@list", "@set", "@index", "@language"];
      let B = !0;
      const H = P.includes("@set");
      if (v.processingMode(y, 1.1)) {
        if (G.push("@graph", "@id", "@type"), P.includes("@list")) {
          if (P.length !== 1)
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @list must have no other values",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: d }
            );
        } else if (P.includes("@graph")) {
          if (P.some((C) => C !== "@graph" && C !== "@id" && C !== "@index" && C !== "@set"))
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: d }
            );
        } else
          B &= P.length <= (H ? 2 : 1);
        if (P.includes("@type") && (q["@type"] = q["@type"] || "@id", !["@id", "@vocab"].includes(q["@type"])))
          throw new t(
            "Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
      } else
        B &= !n(R["@container"]), B &= P.length <= 1;
      if (B &= P.every((C) => G.includes(C)), B &= !(H && P.includes("@list")), !B)
        throw new t(
          "Invalid JSON-LD syntax; @context @container value must be one of the following: " + G.join(", "),
          "jsonld.SyntaxError",
          { code: "invalid container mapping", context: d }
        );
      if (q.reverse && !P.every((C) => ["@index", "@set"].includes(C)))
        throw new t(
          "Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: d }
        );
      q["@container"] = P;
    }
    if ("@index" in R) {
      if (!("@container" in R) || !q["@container"].includes("@index"))
        throw new t(
          `Invalid JSON-LD syntax; @index without @index in @container: "${R["@index"]}" on term "${l}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (!c(R["@index"]) || R["@index"].indexOf("@") === 0)
        throw new t(
          `Invalid JSON-LD syntax; @index must expand to an IRI: "${R["@index"]}" on term "${l}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      q["@index"] = R["@index"];
    }
    if ("@context" in R && (q["@context"] = R["@context"]), "@language" in R && !("@type" in R)) {
      let P = R["@language"];
      if (P !== null && !c(P))
        throw new t(
          "Invalid JSON-LD syntax; @context @language value must be a string or null.",
          "jsonld.SyntaxError",
          { code: "invalid language mapping", context: d }
        );
      P !== null && (P = P.toLowerCase()), q["@language"] = P;
    }
    if ("@prefix" in R) {
      if (l.match(/:|\//))
        throw new t(
          "Invalid JSON-LD syntax; @context @prefix used on a compact IRI term",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (v.isKeyword(q["@id"]))
        throw new t(
          "Invalid JSON-LD syntax; keywords may not be used as prefixes",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (typeof R["@prefix"] == "boolean")
        q._prefix = R["@prefix"] === !0;
      else
        throw new t(
          "Invalid JSON-LD syntax; @context value for @prefix must be boolean",
          "jsonld.SyntaxError",
          { code: "invalid @prefix value", context: d }
        );
    }
    if ("@direction" in R) {
      const P = R["@direction"];
      if (P !== null && P !== "ltr" && P !== "rtl")
        throw new t(
          'Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".',
          "jsonld.SyntaxError",
          { code: "invalid base direction", context: d }
        );
      q["@direction"] = P;
    }
    if ("@nest" in R) {
      const P = R["@nest"];
      if (!c(P) || P !== "@nest" && P.indexOf("@") === 0)
        throw new t(
          "Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.",
          "jsonld.SyntaxError",
          { code: "invalid @nest value", context: d }
        );
      q["@nest"] = P;
    }
    // disallow aliasing @context and @preserve
    const D = q["@id"];
    if (D === "@context" || D === "@preserve")
      throw new t(
        "Invalid JSON-LD syntax; @context and @preserve cannot be aliased.",
        "jsonld.SyntaxError",
        { code: "invalid keyword alias", context: d }
      );
    if (O && O.protected && !A && (y.protected[l] = !0, q.protected = !0, !b(O, q)))
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
      const O = y.mappings.get(d);
      if (O === null)
        return null;
      if (i(O) && "@id" in O)
        return O["@id"];
    }
    const R = d.indexOf(":");
    if (R > 0) {
      const O = d.substr(0, R), M = d.substr(R + 1);
      if (O === "_" || M.indexOf("//") === 0)
        return d;
      h && h.hasOwnProperty(O) && v.createTermDefinition({
        activeCtx: y,
        localCtx: h,
        term: O,
        defined: I,
        options: A
      });
      const q = y.mappings.get(O);
      if (q && q._prefix)
        return q["@id"] + M;
      if (s(d))
        return d;
    }
    if (l.vocab && "@vocab" in y)
      d = y["@vocab"] + d;
    else if (l.base) {
      let O, M;
      "@base" in y ? y["@base"] ? (M = o(A.base, y["@base"]), O = o(M, d)) : (M = y["@base"], O = d) : (M = A.base, O = o(A.base, d)), d = O;
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
      clone: O,
      revertToPreviousContext: M,
      protected: {}
    };
    return w.size === x && w.clear(), w.set(d, h), h;
    function I() {
      const q = this;
      if (q.inverse)
        return q.inverse;
      const $ = q.inverse = {}, E = q.fastCurieMap = {}, D = {}, P = (q["@language"] || "@none").toLowerCase(), G = q["@direction"], B = q.mappings, H = [...B.keys()].sort(f);
      for (const C of H) {
        const k = B.get(C);
        if (k === null)
          continue;
        let z = k["@container"] || "@none";
        if (z = [].concat(z).sort().join(""), k["@id"] === null)
          continue;
        const N = p(k["@id"]);
        for (const j of N) {
          let _ = $[j];
          const T = v.isKeyword(j);
          if (_)
            !T && !k._termHasColon && D[j].push(C);
          else if ($[j] = _ = {}, !T && !k._termHasColon) {
            D[j] = [C];
            const L = { iri: j, terms: D[j] };
            j[0] in E ? E[j[0]].push(L) : E[j[0]] = [L];
          }
          if (_[z] || (_[z] = {
            "@language": {},
            "@type": {},
            "@any": {}
          }), _ = _[z], R(C, _["@any"], "@none"), k.reverse)
            R(C, _["@type"], "@reverse");
          else if (k["@type"] === "@none")
            R(C, _["@any"], "@none"), R(C, _["@language"], "@none"), R(C, _["@type"], "@none");
          else if ("@type" in k)
            R(C, _["@type"], k["@type"]);
          else if ("@language" in k && "@direction" in k) {
            const L = k["@language"], J = k["@direction"];
            L && J ? R(
              C,
              _["@language"],
              `${L}_${J}`.toLowerCase()
            ) : L ? R(C, _["@language"], L.toLowerCase()) : J ? R(C, _["@language"], `_${J}`) : R(C, _["@language"], "@null");
          } else "@language" in k ? R(
            C,
            _["@language"],
            (k["@language"] || "@null").toLowerCase()
          ) : "@direction" in k ? k["@direction"] ? R(
            C,
            _["@language"],
            `_${k["@direction"]}`
          ) : R(C, _["@language"], "@none") : G ? (R(C, _["@language"], `_${G}`), R(C, _["@language"], "@none"), R(C, _["@type"], "@none")) : (R(C, _["@language"], P), R(C, _["@language"], "@none"), R(C, _["@type"], "@none"));
        }
      }
      for (const C in E)
        A(E, C, 1);
      return $;
    }
    function A(q, $, E) {
      const D = q[$], P = q[$] = {};
      let G, B;
      for (const H of D)
        G = H.iri, E >= G.length ? B = "" : B = G[E], B in P ? P[B].push(H) : P[B] = [H];
      for (const H in P)
        H !== "" && A(P, H, E + 1);
    }
    function R(q, $, E) {
      $.hasOwnProperty(E) || ($[E] = q);
    }
    function O() {
      const q = {};
      return q.mappings = e.clone(this.mappings), q.clone = this.clone, q.inverse = null, q.getInverse = this.getInverse, q.protected = e.clone(this.protected), this.previousContext && (q.previousContext = this.previousContext.clone()), q.revertToPreviousContext = this.revertToPreviousContext, "@base" in this && (q["@base"] = this["@base"]), "@language" in this && (q["@language"] = this["@language"]), "@vocab" in this && (q["@vocab"] = this["@vocab"]), q;
    }
    function M() {
      return this.previousContext ? this.previousContext.clone() : this;
    }
  }, v.getContextValue = (y, d, l) => {
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
      let R = y[A], O = d[A];
      if (A === "@container" && Array.isArray(R) && Array.isArray(O) && (R = R.slice().sort(), O = O.slice().sort()), !b(R, O))
        return !1;
    }
    return !0;
  }
  return Ki;
}
var Qi, vc;
function Jf() {
  if (vc) return Qi;
  vc = 1;
  const e = ze(), {
    isArray: t,
    isObject: n,
    isEmptyObject: i,
    isString: c,
    isUndefined: r
  } = Ce(), {
    isList: s,
    isValue: a,
    isGraph: o,
    isSubject: u
  } = pt(), {
    expandIri: m,
    getContextValue: g,
    isKeyword: p,
    process: f,
    processingMode: w
  } = jt(), {
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
  } = yn(), I = {};
  Qi = I, I.expand = async ({
    activeCtx: $,
    activeProperty: E = null,
    element: D,
    options: P = {},
    insideList: G = !1,
    insideIndex: B = !1,
    typeScopedContext: H = null
  }) => {
    if (D == null)
      return null;
    if (E === "@default" && (P = Object.assign({}, P, { isFrame: !1 })), !t(D) && !n(D))
      return !G && (E === null || m(
        $,
        E,
        { vocab: !0 },
        P
      ) === "@graph") ? (P.eventHandler && h({
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
        options: P
      }), null) : O({ activeCtx: $, activeProperty: E, value: D, options: P });
    if (t(D)) {
      let L = [];
      const J = g(
        $,
        E,
        "@container"
      ) || [];
      G = G || J.includes("@list");
      for (let Q = 0; Q < D.length; ++Q) {
        let Z = await I.expand({
          activeCtx: $,
          activeProperty: E,
          element: D[Q],
          options: P,
          insideIndex: B,
          typeScopedContext: H
        });
        G && t(Z) && (Z = { "@list": Z }), Z !== null && (t(Z) ? L = L.concat(Z) : L.push(Z));
      }
      return L;
    }
    const C = m(
      $,
      E,
      { vocab: !0 },
      P
    ), k = g($, E, "@context");
    H = H || ($.previousContext ? $ : null);
    let z = Object.keys(D).sort(), N = !B;
    if (N && H && z.length <= 2 && !z.includes("@context"))
      for (const L of z) {
        const J = m(
          H,
          L,
          { vocab: !0 },
          P
        );
        if (J === "@value") {
          N = !1, $ = H;
          break;
        }
        if (J === "@id" && z.length === 1) {
          N = !1;
          break;
        }
      }
    N && ($ = $.revertToPreviousContext()), r(k) || ($ = await f({
      activeCtx: $,
      localCtx: k,
      propagate: !0,
      overrideProtected: !0,
      options: P
    })), "@context" in D && ($ = await f(
      { activeCtx: $, localCtx: D["@context"], options: P }
    )), H = $;
    let j = null;
    for (const L of z)
      if (m($, L, { vocab: !0 }, P) === "@type") {
        j = j || L;
        const Q = D[L], Z = Array.isArray(Q) ? Q.length > 1 ? Q.slice().sort() : Q : [Q];
        for (const U of Z) {
          const V = g(H, U, "@context");
          r(V) || ($ = await f({
            activeCtx: $,
            localCtx: V,
            options: P,
            propagate: !1
          }));
        }
      }
    let _ = {};
    await R({
      activeCtx: $,
      activeProperty: E,
      expandedActiveProperty: C,
      element: D,
      expandedParent: _,
      options: P,
      insideList: G,
      typeKey: j,
      typeScopedContext: H
    }), z = Object.keys(_);
    let T = z.length;
    if ("@value" in _) {
      if ("@type" in _ && ("@language" in _ || "@direction" in _))
        throw new e(
          'Invalid JSON-LD syntax; an element containing "@value" may not contain both "@type" and either "@language" or "@direction".',
          "jsonld.SyntaxError",
          { code: "invalid value object", element: _ }
        );
      let L = T - 1;
      if ("@type" in _ && (L -= 1), "@index" in _ && (L -= 1), "@language" in _ && (L -= 1), "@direction" in _ && (L -= 1), L !== 0)
        throw new e(
          'Invalid JSON-LD syntax; an element containing "@value" may only have an "@index" property and either "@type" or either or both "@language" or "@direction".',
          "jsonld.SyntaxError",
          { code: "invalid value object", element: _ }
        );
      const J = _["@value"] === null ? [] : y(_["@value"]), Q = d(_, "@type");
      if (!(w($, 1.1) && Q.includes("@json") && Q.length === 1)) if (J.length === 0)
        P.eventHandler && h({
          event: {
            type: ["JsonLdEvent"],
            code: "null @value value",
            level: "warning",
            message: "Dropping null @value value.",
            details: {
              value: _
            }
          },
          options: P
        }), _ = null;
      else {
        if (!J.every((Z) => c(Z) || i(Z)) && "@language" in _)
          throw new e(
            "Invalid JSON-LD syntax; only strings may be language-tagged.",
            "jsonld.SyntaxError",
            { code: "invalid language-tagged value", element: _ }
          );
        if (!Q.every((Z) => x(Z) && !(c(Z) && Z.indexOf("_:") === 0) || i(Z)))
          throw new e(
            'Invalid JSON-LD syntax; an element containing "@value" and "@type" must have an absolute IRI for the value of "@type".',
            "jsonld.SyntaxError",
            { code: "invalid typed value", element: _ }
          );
      }
    } else if ("@type" in _ && !t(_["@type"]))
      _["@type"] = [_["@type"]];
    else if ("@set" in _ || "@list" in _) {
      if (T > 1 && !(T === 2 && "@index" in _))
        throw new e(
          'Invalid JSON-LD syntax; if an element has the property "@set" or "@list", then it can have at most one other property that is "@index".',
          "jsonld.SyntaxError",
          { code: "invalid set or list object", element: _ }
        );
      "@set" in _ && (_ = _["@set"], z = Object.keys(_), T = z.length);
    } else T === 1 && "@language" in _ && (P.eventHandler && h({
      event: {
        type: ["JsonLdEvent"],
        code: "object with only @language",
        level: "warning",
        message: "Dropping object with only @language.",
        details: {
          value: _
        }
      },
      options: P
    }), _ = null);
    return n(_) && !P.keepFreeFloatingNodes && !G && (E === null || C === "@graph" || (g($, E, "@container") || []).includes("@graph")) && (_ = A({ value: _, count: T, options: P })), _;
  };
  function A({
    value: $,
    count: E,
    options: D
  }) {
    if (E === 0 || "@value" in $ || "@list" in $ || E === 1 && "@id" in $) {
      if (D.eventHandler) {
        let P, G;
        E === 0 ? (P = "empty object", G = "Dropping empty object.") : "@value" in $ ? (P = "object with only @value", G = "Dropping object with only @value.") : "@list" in $ ? (P = "object with only @list", G = "Dropping object with only @list.") : E === 1 && "@id" in $ && (P = "object with only @id", G = "Dropping object with only @id."), h({
          event: {
            type: ["JsonLdEvent"],
            code: P,
            level: "warning",
            message: G,
            details: {
              value: $
            }
          },
          options: D
        });
      }
      return null;
    }
    return $;
  }
  async function R({
    activeCtx: $,
    activeProperty: E,
    expandedActiveProperty: D,
    element: P,
    expandedParent: G,
    options: B = {},
    insideList: H,
    typeKey: C,
    typeScopedContext: k
  }) {
    const z = Object.keys(P).sort(), N = [];
    let j;
    const _ = P[C] && m(
      $,
      t(P[C]) ? P[C][0] : P[C],
      { vocab: !0 },
      {
        ...B,
        typeExpansion: !0
      }
    ) === "@json";
    for (const T of z) {
      let L = P[T], J;
      if (T === "@context")
        continue;
      const Q = m($, T, { vocab: !0 }, B);
      if (Q === null || !(x(Q) || p(Q))) {
        B.eventHandler && h({
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
          options: B
        });
        continue;
      }
      if (p(Q)) {
        if (D === "@reverse")
          throw new e(
            "Invalid JSON-LD syntax; a keyword cannot be used as a @reverse property.",
            "jsonld.SyntaxError",
            { code: "invalid reverse property map", value: L }
          );
        if (Q in G && Q !== "@included" && Q !== "@type")
          throw new e(
            "Invalid JSON-LD syntax; colliding keywords detected.",
            "jsonld.SyntaxError",
            { code: "colliding keywords", keyword: Q }
          );
      }
      if (Q === "@id") {
        if (!c(L)) {
          if (!B.isFrame)
            throw new e(
              'Invalid JSON-LD syntax; "@id" value must a string.',
              "jsonld.SyntaxError",
              { code: "invalid @id value", value: L }
            );
          if (n(L)) {
            if (!i(L))
              throw new e(
                'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
                "jsonld.SyntaxError",
                { code: "invalid @id value", value: L }
              );
          } else if (t(L)) {
            if (!L.every((F) => c(F)))
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
          G,
          "@id",
          y(L).map((F) => {
            if (c(F)) {
              const K = m($, F, { base: !0 }, B);
              return B.eventHandler && (K === null ? h(F === null ? {
                event: {
                  type: ["JsonLdEvent"],
                  code: "null @id value",
                  level: "warning",
                  message: "Null @id found.",
                  details: {
                    id: F
                  }
                },
                options: B
              } : {
                event: {
                  type: ["JsonLdEvent"],
                  code: "reserved @id value",
                  level: "warning",
                  message: "Reserved @id found.",
                  details: {
                    id: F
                  }
                },
                options: B
              }) : x(K) || h({
                event: {
                  type: ["JsonLdEvent"],
                  code: "relative @id reference",
                  level: "warning",
                  message: "Relative @id reference found.",
                  details: {
                    id: F,
                    expandedId: K
                  }
                },
                options: B
              })), K;
            }
            return F;
          }),
          { propertyIsArray: B.isFrame }
        );
        continue;
      }
      if (Q === "@type") {
        n(L) && (L = Object.fromEntries(Object.entries(L).map(([F, K]) => [
          m(k, F, { vocab: !0 }),
          y(K).map(
            (X) => m(
              k,
              X,
              { base: !0, vocab: !0 },
              { ...B, typeExpansion: !0 }
            )
          )
        ]))), l(L, B.isFrame), b(
          G,
          "@type",
          y(L).map((F) => {
            if (c(F)) {
              const K = m(
                k,
                F,
                { base: !0, vocab: !0 },
                { ...B, typeExpansion: !0 }
              );
              return K !== "@json" && !x(K) && B.eventHandler && h({
                event: {
                  type: ["JsonLdEvent"],
                  code: "relative @type reference",
                  level: "warning",
                  message: "Relative @type reference found.",
                  details: {
                    type: F
                  }
                },
                options: B
              }), K;
            }
            return F;
          }),
          { propertyIsArray: !!B.isFrame }
        );
        continue;
      }
      if (Q === "@included" && w($, 1.1)) {
        const F = y(await I.expand({
          activeCtx: $,
          activeProperty: E,
          element: L,
          options: B
        }));
        if (!F.every((K) => u(K)))
          throw new e(
            "Invalid JSON-LD syntax; values of @included must expand to node objects.",
            "jsonld.SyntaxError",
            { code: "invalid @included value", value: L }
          );
        b(
          G,
          "@included",
          F,
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
        j = L, _ && w($, 1.1) ? G["@value"] = L : b(
          G,
          "@value",
          L,
          { propertyIsArray: B.isFrame }
        );
        continue;
      }
      if (Q === "@language") {
        if (L === null)
          continue;
        if (!c(L) && !B.isFrame)
          throw new e(
            'Invalid JSON-LD syntax; "@language" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid language-tagged string", value: L }
          );
        L = y(L).map((F) => c(F) ? F.toLowerCase() : F);
        for (const F of L)
          c(F) && !F.match(v) && B.eventHandler && h({
            event: {
              type: ["JsonLdEvent"],
              code: "invalid @language value",
              level: "warning",
              message: "@language value must be valid BCP47.",
              details: {
                language: F
              }
            },
            options: B
          });
        b(
          G,
          "@language",
          L,
          { propertyIsArray: B.isFrame }
        );
        continue;
      }
      if (Q === "@direction") {
        if (!c(L) && !B.isFrame)
          throw new e(
            'Invalid JSON-LD syntax; "@direction" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid base direction", value: L }
          );
        L = y(L);
        for (const F of L)
          if (c(F) && F !== "ltr" && F !== "rtl")
            throw new e(
              'Invalid JSON-LD syntax; "@direction" must be "ltr" or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", value: L }
            );
        b(
          G,
          "@direction",
          L,
          { propertyIsArray: B.isFrame }
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
        b(G, "@index", L);
        continue;
      }
      if (Q === "@reverse") {
        if (!n(L))
          throw new e(
            'Invalid JSON-LD syntax; "@reverse" value must be an object.',
            "jsonld.SyntaxError",
            { code: "invalid @reverse value", value: L }
          );
        if (J = await I.expand({
          activeCtx: $,
          activeProperty: "@reverse",
          element: L,
          options: B
        }), "@reverse" in J)
          for (const K in J["@reverse"])
            b(
              G,
              K,
              J["@reverse"][K],
              { propertyIsArray: !0 }
            );
        let F = G["@reverse"] || null;
        for (const K in J) {
          if (K === "@reverse")
            continue;
          F === null && (F = G["@reverse"] = {}), b(F, K, [], { propertyIsArray: !0 });
          const X = J[K];
          for (let Y = 0; Y < X.length; ++Y) {
            const re = X[Y];
            if (a(re) || s(re))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: J }
              );
            b(F, K, re, { propertyIsArray: !0 });
          }
        }
        continue;
      }
      if (Q === "@nest") {
        N.push(T);
        continue;
      }
      let Z = $;
      const U = g($, T, "@context");
      r(U) || (Z = await f({
        activeCtx: $,
        localCtx: U,
        propagate: !0,
        overrideProtected: !0,
        options: B
      }));
      const V = g($, T, "@container") || [];
      if (V.includes("@language") && n(L)) {
        const F = g(Z, T, "@direction");
        J = M(Z, L, F, B);
      } else if (V.includes("@index") && n(L)) {
        const F = V.includes("@graph"), K = g(Z, T, "@index") || "@index", X = K !== "@index" && m($, K, { vocab: !0 }, B);
        J = await q({
          activeCtx: Z,
          options: B,
          activeProperty: T,
          value: L,
          asGraph: F,
          indexKey: K,
          propertyIndex: X
        });
      } else if (V.includes("@id") && n(L)) {
        const F = V.includes("@graph");
        J = await q({
          activeCtx: Z,
          options: B,
          activeProperty: T,
          value: L,
          asGraph: F,
          indexKey: "@id"
        });
      } else if (V.includes("@type") && n(L))
        J = await q({
          // since container is `@type`, revert type scoped context when expanding
          activeCtx: Z.revertToPreviousContext(),
          options: B,
          activeProperty: T,
          value: L,
          asGraph: !1,
          indexKey: "@type"
        });
      else {
        const F = Q === "@list";
        if (F || Q === "@set") {
          let K = E;
          F && D === "@graph" && (K = null), J = await I.expand({
            activeCtx: Z,
            activeProperty: K,
            element: L,
            options: B,
            insideList: F
          });
        } else g($, T, "@type") === "@json" ? J = {
          "@type": "@json",
          "@value": L
        } : J = await I.expand({
          activeCtx: Z,
          activeProperty: T,
          element: L,
          options: B,
          insideList: !1
        });
      }
      if (!(J === null && Q !== "@value")) {
        if (Q !== "@list" && !s(J) && V.includes("@list") && (J = { "@list": y(J) }), V.includes("@graph") && !V.some((F) => F === "@id" || F === "@index")) {
          if (J = y(J), B.isFrame || (J = J.filter((F) => {
            const K = Object.keys(F).length;
            return A({ value: F, count: K, options: B }) !== null;
          })), J.length === 0)
            continue;
          J = J.map((F) => ({ "@graph": y(F) }));
        }
        if (Z.mappings.has(T) && Z.mappings.get(T).reverse) {
          const F = G["@reverse"] = G["@reverse"] || {};
          J = y(J);
          for (let K = 0; K < J.length; ++K) {
            const X = J[K];
            if (a(X) || s(X))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: J }
              );
            b(F, Q, X, { propertyIsArray: !0 });
          }
          continue;
        }
        b(G, Q, J, {
          propertyIsArray: !0
        });
      }
    }
    if ("@value" in G && !(G["@type"] === "@json" && w($, 1.1))) {
      if ((n(j) || t(j)) && !B.isFrame)
        throw new e(
          'Invalid JSON-LD syntax; "@value" value must not be an object or an array.',
          "jsonld.SyntaxError",
          { code: "invalid value object value", value: j }
        );
    }
    for (const T of N) {
      const L = t(P[T]) ? P[T] : [P[T]];
      for (const J of L) {
        if (!n(J) || Object.keys(J).some((Q) => m($, Q, { vocab: !0 }, B) === "@value"))
          throw new e(
            "Invalid JSON-LD syntax; nested value must be a node object.",
            "jsonld.SyntaxError",
            { code: "invalid @nest value", value: J }
          );
        await R({
          activeCtx: $,
          activeProperty: E,
          expandedActiveProperty: D,
          element: J,
          expandedParent: G,
          options: B,
          insideList: H,
          typeScopedContext: k,
          typeKey: C
        });
      }
    }
  }
  function O({ activeCtx: $, activeProperty: E, value: D, options: P }) {
    if (D == null)
      return null;
    const G = m(
      $,
      E,
      { vocab: !0 },
      P
    );
    if (G === "@id")
      return m($, D, { base: !0 }, P);
    if (G === "@type")
      return m(
        $,
        D,
        { vocab: !0, base: !0 },
        { ...P, typeExpansion: !0 }
      );
    const B = g($, E, "@type");
    if ((B === "@id" || G === "@graph") && c(D)) {
      const C = m($, D, { base: !0 }, P);
      return C === null && D.match(S) && P.eventHandler && h({
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
      }), { "@id": C };
    }
    if (B === "@vocab" && c(D))
      return {
        "@id": m($, D, { vocab: !0, base: !0 }, P)
      };
    if (p(G))
      return D;
    const H = {};
    if (B && !["@id", "@vocab", "@none"].includes(B))
      H["@type"] = B;
    else if (c(D)) {
      const C = g($, E, "@language");
      C !== null && (H["@language"] = C);
      const k = g($, E, "@direction");
      k !== null && (H["@direction"] = k);
    }
    return ["boolean", "number", "string"].includes(typeof D) || (D = D.toString()), H["@value"] = D, H;
  }
  function M($, E, D, P) {
    const G = [], B = Object.keys(E).sort();
    for (const H of B) {
      const C = m($, H, { vocab: !0 }, P);
      let k = E[H];
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
        C !== "@none" && (H.match(v) || P.eventHandler && h({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: H
            }
          },
          options: P
        }), N["@language"] = H.toLowerCase()), D && (N["@direction"] = D), G.push(N);
      }
    }
    return G;
  }
  async function q({
    activeCtx: $,
    options: E,
    activeProperty: D,
    value: P,
    asGraph: G,
    indexKey: B,
    propertyIndex: H
  }) {
    const C = [], k = Object.keys(P).sort(), z = B === "@type";
    for (let N of k) {
      if (z) {
        const T = g($, N, "@context");
        r(T) || ($ = await f({
          activeCtx: $,
          localCtx: T,
          propagate: !1,
          options: E
        }));
      }
      let j = P[N];
      t(j) || (j = [j]), j = await I.expand({
        activeCtx: $,
        activeProperty: D,
        element: j,
        options: E,
        insideList: !1,
        insideIndex: !0
      });
      let _;
      H ? N === "@none" ? _ = "@none" : _ = O(
        { activeCtx: $, activeProperty: B, value: N, options: E }
      ) : _ = m($, N, { vocab: !0 }, E), B === "@id" ? N = m($, N, { base: !0 }, E) : z && (N = _);
      for (let T of j) {
        if (G && !o(T) && (T = { "@graph": [T] }), B === "@type")
          _ === "@none" || (T["@type"] ? T["@type"] = [N].concat(T["@type"]) : T["@type"] = [N]);
        else {
          if (a(T) && !["@language", "@type", "@index"].includes(B))
            throw new e(
              `Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${B}".`,
              "jsonld.SyntaxError",
              { code: "invalid value object", value: T }
            );
          H ? _ !== "@none" && b(T, H, _, {
            propertyIsArray: !0,
            prependValue: !0
          }) : _ !== "@none" && !(B in T) && (T[B] = N);
        }
        C.push(T);
      }
    }
    return C;
  }
  return Qi;
}
var Xi, bc;
function Jr() {
  if (bc) return Xi;
  bc = 1;
  const { isKeyword: e } = jt(), t = pt(), n = Ce(), i = De(), c = ze(), r = {};
  return Xi = r, r.createMergedNodeMap = (s, a) => {
    a = a || {};
    const o = a.issuer || new i.IdentifierIssuer("_:b"), u = { "@default": {} };
    return r.createNodeMap(s, u, "@default", o), r.mergeNodeMaps(u);
  }, r.createNodeMap = (s, a, o, u, m, g) => {
    if (n.isArray(s)) {
      for (const x of s)
        r.createNodeMap(x, a, o, u, void 0, g);
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
      r.createNodeMap(s["@list"], a, o, u, m, x), g.push({ "@list": x });
      return;
    }
    if ("@type" in s) {
      const x = s["@type"];
      for (const v of x)
        v.indexOf("_:") === 0 && u.getId(v);
    }
    n.isUndefined(m) && (m = t.isBlankNode(s) ? u.getId(s["@id"]) : s["@id"]), g && g.push({ "@id": m });
    const p = a[o], f = p[m] = p[m] || {};
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
            t.isBlankNode(l) && (h = u.getId(h)), r.createNodeMap(l, a, o, u, h), i.addValue(
              p[h],
              y,
              S,
              { propertyIsArray: !0, allowDuplicate: !1 }
            );
          }
        }
        continue;
      }
      if (x === "@graph") {
        m in a || (a[m] = {}), r.createNodeMap(s[x], a, m, u);
        continue;
      }
      if (x === "@included") {
        r.createNodeMap(s[x], a, o, u);
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
      if (x.indexOf("_:") === 0 && (x = u.getId(x)), v.length === 0) {
        i.addValue(f, x, [], { propertyIsArray: !0 });
        continue;
      }
      for (let S of v)
        if (x === "@type" && (S = S.indexOf("_:") === 0 ? u.getId(S) : S), t.isSubject(S) || t.isSubjectReference(S)) {
          if ("@id" in S && !S["@id"])
            continue;
          const b = t.isBlankNode(S) ? u.getId(S["@id"]) : S["@id"];
          i.addValue(
            f,
            x,
            { "@id": b },
            { propertyIsArray: !0, allowDuplicate: !1 }
          ), r.createNodeMap(S, a, o, u, b);
        } else if (t.isValue(S))
          i.addValue(
            f,
            x,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        else if (t.isList(S)) {
          const b = [];
          r.createNodeMap(S["@list"], a, o, u, m, b), S = { "@list": b }, i.addValue(
            f,
            x,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        } else
          r.createNodeMap(S, a, o, u, m), i.addValue(
            f,
            x,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
    }
  }, r.mergeNodeMapGraphs = (s) => {
    const a = {};
    for (const o of Object.keys(s).sort())
      for (const u of Object.keys(s[o]).sort()) {
        const m = s[o][u];
        u in a || (a[u] = { "@id": u });
        const g = a[u];
        for (const p of Object.keys(m).sort())
          if (e(p) && p !== "@type")
            g[p] = i.clone(m[p]);
          else
            for (const f of m[p])
              i.addValue(
                g,
                p,
                i.clone(f),
                { propertyIsArray: !0, allowDuplicate: !1 }
              );
      }
    return a;
  }, r.mergeNodeMaps = (s) => {
    const a = s["@default"], o = Object.keys(s).sort();
    for (const u of o) {
      if (u === "@default")
        continue;
      const m = s[u];
      let g = a[u];
      g ? "@graph" in g || (g["@graph"] = []) : a[u] = g = {
        "@id": u,
        "@graph": []
      };
      const p = g["@graph"];
      for (const f of Object.keys(m).sort()) {
        const w = m[f];
        t.isSubjectReference(w) || p.push(w);
      }
    }
    return a;
  }, Xi;
}
var Wi, wc;
function Zf() {
  if (wc) return Wi;
  wc = 1;
  const {
    isSubjectReference: e
  } = pt(), {
    createMergedNodeMap: t
  } = Jr(), n = {};
  return Wi = n, n.flatten = (i) => {
    const c = t(i), r = [], s = Object.keys(c).sort();
    for (let a = 0; a < s.length; ++a) {
      const o = c[s[a]];
      e(o) || r.push(o);
    }
    return r;
  }, Wi;
}
var Yi, xc;
function Kf() {
  if (xc) return Yi;
  xc = 1;
  const e = ze(), t = pt(), n = Ce(), {
    REGEX_BCP47: i,
    addValue: c
  } = De(), {
    handleEvent: r
  } = yn(), {
    // RDF,
    RDF_LIST: s,
    RDF_FIRST: a,
    RDF_REST: o,
    RDF_NIL: u,
    RDF_TYPE: m,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: g,
    // RDF_OBJECT,
    // RDF_LANGSTRING,
    // XSD,
    XSD_BOOLEAN: p,
    XSD_DOUBLE: f,
    XSD_INTEGER: w,
    XSD_STRING: x
  } = Ls(), v = {};
  Yi = v, v.fromRDF = async (b, y) => {
    const {
      useRdfType: d = !1,
      useNativeTypes: l = !1,
      rdfDirection: h = null
    } = y, I = {}, A = { "@default": I }, R = {};
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
    for (const q of b) {
      const $ = q.graph.termType === "DefaultGraph" ? "@default" : q.graph.value;
      $ in A || (A[$] = {}), $ !== "@default" && !($ in I) && (I[$] = { "@id": $ });
      const E = A[$], D = q.subject.value, P = q.predicate.value, G = q.object;
      D in E || (E[D] = { "@id": D });
      const B = E[D], H = G.termType.endsWith("Node");
      if (H && !(G.value in E) && (E[G.value] = { "@id": G.value }), P === m && !d && H) {
        c(B, "@type", G.value, { propertyIsArray: !0 });
        continue;
      }
      const C = S(G, l, h, y);
      if (c(B, P, C, { propertyIsArray: !0 }), H)
        if (G.value === u) {
          const k = E[G.value];
          "usages" in k || (k.usages = []), k.usages.push({
            node: B,
            property: P,
            value: C
          });
        } else G.value in R ? R[G.value] = !1 : R[G.value] = {
          node: B,
          property: P,
          value: C
        };
    }
    for (const q in A) {
      const $ = A[q];
      if (!(u in $))
        continue;
      const E = $[u];
      if (E.usages) {
        for (let D of E.usages) {
          let P = D.node, G = D.property, B = D.value;
          const H = [], C = [];
          let k = Object.keys(P).length;
          for (; G === o && n.isObject(R[P["@id"]]) && n.isArray(P[a]) && P[a].length === 1 && n.isArray(P[o]) && P[o].length === 1 && (k === 3 || k === 4 && n.isArray(P["@type"]) && P["@type"].length === 1 && P["@type"][0] === s) && (H.push(P[a][0]), C.push(P["@id"]), D = R[P["@id"]], P = D.node, G = D.property, B = D.value, k = Object.keys(P).length, !!t.isBlankNode(P)); )
            ;
          delete B["@id"], B["@list"] = H.reverse();
          for (const z of C)
            delete $[z];
        }
        delete E.usages;
      }
    }
    const O = [], M = Object.keys(I).sort();
    for (const q of M) {
      const $ = I[q];
      if (q in A) {
        const E = $["@graph"] = [], D = A[q], P = Object.keys(D).sort();
        for (const G of P) {
          const B = D[G];
          t.isSubjectReference(B) || E.push(B);
        }
      }
      t.isSubjectReference($) || O.push($);
    }
    return O;
  };
  function S(b, y, d, l) {
    if (b.termType.endsWith("Node"))
      return { "@id": b.value };
    const h = { "@value": b.value };
    if (b.language)
      b.language.match(i) || l.eventHandler && r({
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
        if (I === p)
          h["@value"] === "true" ? h["@value"] = !0 : h["@value"] === "false" && (h["@value"] = !1);
        else if (n.isNumeric(h["@value"]))
          if (I === w) {
            const A = parseInt(h["@value"], 10);
            A.toFixed(0) === h["@value"] && (h["@value"] = A);
          } else I === f && (h["@value"] = parseFloat(h["@value"]));
        [p, w, f, x].includes(I) || (h["@type"] = I);
      } else if (d === "i18n-datatype" && I.startsWith("https://www.w3.org/ns/i18n#")) {
        const [, A, R] = I.split(/[#_]/);
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
        })), h["@direction"] = R;
      } else I !== x && (h["@type"] = I);
    }
    return h;
  }
  return Yi;
}
var es, Sc;
function Qf() {
  return Sc || (Sc = 1, es = function e(t) {
    return t === null || typeof t != "object" || t.toJSON != null ? JSON.stringify(t) : Array.isArray(t) ? "[" + t.reduce((n, i, c) => {
      const r = c === 0 ? "" : ",", s = i === void 0 || typeof i == "symbol" ? null : i;
      return n + r + e(s);
    }, "") + "]" : "{" + Object.keys(t).sort().reduce((n, i, c) => {
      if (t[i] === void 0 || typeof t[i] == "symbol")
        return n;
      const r = n.length === 0 ? "" : ",";
      return n + r + e(i) + ":" + e(t[i]);
    }, "") + "}";
  }), es;
}
var ts, Ic;
function Xf() {
  if (Ic) return ts;
  Ic = 1;
  const { createNodeMap: e } = Jr(), { isKeyword: t } = jt(), n = pt(), i = Qf(), c = ze(), r = Ce(), s = De(), {
    handleEvent: a
  } = yn(), {
    // RDF,
    // RDF_LIST,
    RDF_FIRST: o,
    RDF_REST: u,
    RDF_NIL: m,
    RDF_TYPE: g,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: p,
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
    const R = new s.IdentifierIssuer("_:b"), O = { "@default": {} };
    e(I, O, "@default", R);
    const M = [], q = Object.keys(O).sort();
    for (const $ of q) {
      let E;
      if ($ === "@default")
        E = { termType: "DefaultGraph", value: "" };
      else if (b($))
        $.startsWith("_:") ? E = { termType: "BlankNode" } : E = { termType: "NamedNode" }, E.value = $;
      else {
        A.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "relative graph reference",
            level: "warning",
            message: "Relative graph reference found.",
            details: {
              graph: $
            }
          },
          options: A
        });
        continue;
      }
      d(M, O[$], E, R, A);
    }
    return M;
  };
  function d(I, A, R, O, M) {
    const q = Object.keys(A).sort();
    for (const $ of q) {
      const E = A[$], D = Object.keys(E).sort();
      for (let P of D) {
        const G = E[P];
        if (P === "@type")
          P = g;
        else if (t(P))
          continue;
        for (const B of G) {
          const H = {
            termType: $.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: $
          };
          if (!b($)) {
            M.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "relative subject reference",
                level: "warning",
                message: "Relative subject reference found.",
                details: {
                  subject: $
                }
              },
              options: M
            });
            continue;
          }
          const C = {
            termType: P.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: P
          };
          if (!b(P)) {
            M.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "relative predicate reference",
                level: "warning",
                message: "Relative predicate reference found.",
                details: {
                  predicate: P
                }
              },
              options: M
            });
            continue;
          }
          if (C.termType === "BlankNode" && !M.produceGeneralizedRdf) {
            M.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "blank node predicate",
                level: "warning",
                message: "Dropping blank node predicate.",
                details: {
                  // FIXME: add better issuer API to get reverse mapping
                  property: O.getOldIds().find((z) => O.getId(z) === P)
                }
              },
              options: M
            });
            continue;
          }
          const k = h(
            B,
            O,
            I,
            R,
            M.rdfDirection,
            M
          );
          k && I.push({
            subject: H,
            predicate: C,
            object: k,
            graph: R
          });
        }
      }
    }
  }
  function l(I, A, R, O, M, q) {
    const $ = { termType: "NamedNode", value: o }, E = { termType: "NamedNode", value: u }, D = { termType: "NamedNode", value: m }, P = I.pop(), G = P ? { termType: "BlankNode", value: A.getId() } : D;
    let B = G;
    for (const H of I) {
      const C = h(
        H,
        A,
        R,
        O,
        M,
        q
      ), k = { termType: "BlankNode", value: A.getId() };
      R.push({
        subject: B,
        predicate: $,
        object: C,
        graph: O
      }), R.push({
        subject: B,
        predicate: E,
        object: k,
        graph: O
      }), B = k;
    }
    if (P) {
      const H = h(
        P,
        A,
        R,
        O,
        M,
        q
      );
      R.push({
        subject: B,
        predicate: $,
        object: H,
        graph: O
      }), R.push({
        subject: B,
        predicate: E,
        object: D,
        graph: O
      });
    }
    return G;
  }
  function h(I, A, R, O, M, q) {
    const $ = {};
    if (n.isValue(I)) {
      $.termType = "Literal", $.value = void 0, $.datatype = {
        termType: "NamedNode"
      };
      let E = I["@value"];
      const D = I["@type"] || null;
      if (D === "@json")
        $.value = i(E), $.datatype.value = p;
      else if (r.isBoolean(E))
        $.value = E.toString(), $.datatype.value = D || w;
      else if (r.isDouble(E) || D === x)
        r.isDouble(E) || (E = parseFloat(E)), $.value = E.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), $.datatype.value = D || x;
      else if (r.isNumber(E))
        $.value = E.toFixed(0), $.datatype.value = D || v;
      else if ("@direction" in I && M === "i18n-datatype") {
        const P = (I["@language"] || "").toLowerCase(), G = I["@direction"], B = `https://www.w3.org/ns/i18n#${P}_${G}`;
        $.datatype.value = B, $.value = E;
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
        "@language" in I ? ("@direction" in I && !M && q.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: $.value
            }
          },
          options: q
        }), $.value = E, $.datatype.value = D || f, $.language = I["@language"]) : ("@direction" in I && !M && q.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: $.value
            }
          },
          options: q
        }), $.value = E, $.datatype.value = D || S);
      }
    } else if (n.isList(I)) {
      const E = l(
        I["@list"],
        A,
        R,
        O,
        M,
        q
      );
      $.termType = E.termType, $.value = E.value;
    } else {
      const E = r.isObject(I) ? I["@id"] : I;
      $.termType = E.startsWith("_:") ? "BlankNode" : "NamedNode", $.value = E;
    }
    return $.termType === "NamedNode" && !b($.value) ? (q.eventHandler && a({
      event: {
        type: ["JsonLdEvent"],
        code: "relative object reference",
        level: "warning",
        message: "Relative object reference found.",
        details: {
          object: $.value
        }
      },
      options: q
    }), null) : $;
  }
  return ts;
}
var ns, Ac;
function Wf() {
  if (Ac) return ns;
  Ac = 1;
  const { isKeyword: e } = jt(), t = pt(), n = Ce(), i = De(), c = xt(), r = ze(), {
    createNodeMap: s,
    mergeNodeMapGraphs: a
  } = Jr(), o = {};
  ns = o, o.frameMergedOrDefault = (d, l, h) => {
    const I = {
      options: h,
      embedded: !1,
      graph: "@default",
      graphMap: { "@default": {} },
      subjectStack: [],
      link: {},
      bnodeMap: {}
    }, A = new i.IdentifierIssuer("_:b");
    s(d, I.graphMap, "@default", A), h.merged && (I.graphMap["@merged"] = a(I.graphMap), I.graph = "@merged"), I.subjects = I.graphMap[I.graph];
    const R = [];
    o.frame(I, Object.keys(I.subjects).sort(), l, R), h.pruneBlankNodeIdentifiers && (h.bnodesToClear = Object.keys(I.bnodeMap).filter((O) => I.bnodeMap[O].length === 1));
    // remove @preserve from results
    return h.link = {}, v(R, h);
  }, o.frame = (d, l, h, I, A = null) => {
    p(h), h = h[0];
    const R = d.options, O = {
      embed: g(h, R, "embed"),
      explicit: g(h, R, "explicit"),
      requireAll: g(h, R, "requireAll")
    };
    d.link.hasOwnProperty(d.graph) || (d.link[d.graph] = {});
    const M = d.link[d.graph], q = f(d, l, h, O), $ = Object.keys(q).sort();
    for (const E of $) {
      const D = q[E];
      if (A === null ? d.uniqueEmbeds = { [d.graph]: {} } : d.uniqueEmbeds[d.graph] = d.uniqueEmbeds[d.graph] || {}, O.embed === "@link" && E in M) {
        S(I, A, M[E]);
        continue;
      }
      const P = { "@id": E };
      if (E.indexOf("_:") === 0 && i.addValue(d.bnodeMap, E, P, { propertyIsArray: !0 }), M[E] = P, (O.embed === "@first" || O.embed === "@last") && d.is11)
        throw new r(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: h }
        );
      if (!(!d.embedded && d.uniqueEmbeds[d.graph].hasOwnProperty(E))) {
        if (d.embedded && (O.embed === "@never" || m(D, d.graph, d.subjectStack))) {
          S(I, A, P);
          continue;
        }
        if (d.embedded && (O.embed == "@first" || O.embed == "@once") && d.uniqueEmbeds[d.graph].hasOwnProperty(E)) {
          S(I, A, P);
          continue;
        }
        if (O.embed === "@last" && E in d.uniqueEmbeds[d.graph] && x(d, E), d.uniqueEmbeds[d.graph][E] = { parent: I, property: A }, d.subjectStack.push({ subject: D, graph: d.graph }), E in d.graphMap) {
          let G = !1, B = null;
          "@graph" in h ? (B = h["@graph"][0], G = !(E === "@merged" || E === "@default"), n.isObject(B) || (B = {})) : (G = d.graph !== "@merged", B = {}), G && o.frame(
            { ...d, graph: E, embedded: !1 },
            Object.keys(d.graphMap[E]).sort(),
            [B],
            P,
            "@graph"
          );
        }
        "@included" in h && o.frame(
          { ...d, embedded: !1 },
          l,
          h["@included"],
          P,
          "@included"
        );
        for (const G of Object.keys(D).sort()) {
          if (e(G)) {
            if (P[G] = i.clone(D[G]), G === "@type")
              for (const B of D["@type"])
                B.indexOf("_:") === 0 && i.addValue(
                  d.bnodeMap,
                  B,
                  P,
                  { propertyIsArray: !0 }
                );
            continue;
          }
          if (!(O.explicit && !(G in h)))
            for (const B of D[G]) {
              const H = G in h ? h[G] : u(O);
              if (t.isList(B)) {
                const C = h[G] && h[G][0] && h[G][0]["@list"] ? h[G][0]["@list"] : u(O), k = { "@list": [] };
                S(P, G, k);
                const z = B["@list"];
                for (const N of z)
                  t.isSubjectReference(N) ? o.frame(
                    { ...d, embedded: !0 },
                    [N["@id"]],
                    C,
                    k,
                    "@list"
                  ) : S(k, "@list", i.clone(N));
              } else t.isSubjectReference(B) ? o.frame(
                { ...d, embedded: !0 },
                [B["@id"]],
                H,
                P,
                G
              ) : y(H[0], B) && S(P, G, i.clone(B));
            }
        }
        for (const G of Object.keys(h).sort()) {
          if (G === "@type") {
            if (!n.isObject(h[G][0]) || !("@default" in h[G][0]))
              continue;
          } else if (e(G))
            continue;
          const B = h[G][0] || {};
          if (!g(B, R, "omitDefault") && !(G in P)) {
            let C = "@null";
            "@default" in B && (C = i.clone(B["@default"])), n.isArray(C) || (C = [C]), P[G] = [{ "@preserve": C }];
          }
        }
        for (const G of Object.keys(h["@reverse"] || {}).sort()) {
          const B = h["@reverse"][G];
          for (const H of Object.keys(d.subjects))
            i.getValues(d.subjects[H], G).some((k) => k["@id"] === E) && (P["@reverse"] = P["@reverse"] || {}, i.addValue(
              P["@reverse"],
              G,
              [],
              { propertyIsArray: !0 }
            ), o.frame(
              { ...d, embedded: !0 },
              [H],
              B,
              P["@reverse"][G],
              A
            ));
        }
        S(I, A, P), d.subjectStack.pop();
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
  function u(d) {
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
  function p(d) {
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
    for (const R of l) {
      const O = d.graphMap[d.graph][R];
      w(d, O, h, I) && (A[R] = O);
    }
    return A;
  }
  function w(d, l, h, I) {
    let A = !0, R = !1;
    for (const O in h) {
      let M = !1;
      const q = i.getValues(l, O), $ = i.getValues(h, O).length === 0;
      if (O === "@id") {
        if (n.isEmptyObject(h["@id"][0] || {}) ? M = !0 : h["@id"].length >= 0 && (M = h["@id"].includes(q[0])), !I.requireAll)
          return M;
      } else if (O === "@type") {
        if (A = !1, $) {
          if (q.length > 0)
            return !1;
          M = !0;
        } else if (h["@type"].length === 1 && n.isEmptyObject(h["@type"][0]))
          M = q.length > 0;
        else
          for (const E of h["@type"])
            n.isObject(E) && "@default" in E ? M = !0 : M = M || q.some((D) => D === E);
        if (!I.requireAll)
          return M;
      } else {
        if (e(O))
          continue;
        {
          const E = i.getValues(h, O)[0];
          let D = !1;
          if (E && (p([E]), D = "@default" in E), A = !1, q.length === 0 && D)
            continue;
          if (q.length > 0 && $)
            return !1;
          if (E === void 0) {
            if (q.length > 0)
              return !1;
            M = !0;
          } else if (t.isList(E)) {
            const P = E["@list"][0];
            if (t.isList(q[0])) {
              const G = q[0]["@list"];
              t.isValue(P) ? M = G.some((B) => y(P, B)) : (t.isSubject(P) || t.isSubjectReference(P)) && (M = G.some((B) => b(
                d,
                P,
                B,
                I
              )));
            }
          } else t.isValue(E) ? M = q.some((P) => y(E, P)) : t.isSubjectReference(E) ? M = q.some((P) => b(d, E, P, I)) : n.isObject(E) ? M = q.length > 0 : M = !1;
        }
      }
      if (!M && I.requireAll)
        return !1;
      R = R || M;
    }
    return A || R;
  }
  function x(d, l) {
    const h = d.uniqueEmbeds[d.graph], I = h[l], A = I.parent, R = I.property, O = { "@id": l };
    if (n.isArray(A)) {
      for (let q = 0; q < A.length; ++q)
        if (i.compareValues(A[q], O)) {
          A[q] = O;
          break;
        }
    } else {
      const q = n.isArray(A[R]);
      i.removeValue(A, R, O, { propertyIsArray: q }), i.addValue(A, R, O, { propertyIsArray: q });
    }
    const M = (q) => {
      const $ = Object.keys(h);
      for (const E of $)
        E in h && n.isObject(h[E].parent) && h[E].parent["@id"] === q && (delete h[E], M(E));
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
    n.isObject(d) ? i.addValue(d, l, h, { propertyIsArray: !0 }) : d.push(h);
  }
  function b(d, l, h, I) {
    if (!("@id" in h))
      return !1;
    const A = d.subjects[h["@id"]];
    return A && w(d, A, l, I);
  }
  function y(d, l) {
    const h = l["@value"], I = l["@type"], A = l["@language"], R = d["@value"] ? n.isArray(d["@value"]) ? d["@value"] : [d["@value"]] : [], O = d["@type"] ? n.isArray(d["@type"]) ? d["@type"] : [d["@type"]] : [], M = d["@language"] ? n.isArray(d["@language"]) ? d["@language"] : [d["@language"]] : [];
    return R.length === 0 && O.length === 0 && M.length === 0 ? !0 : !(!(R.includes(h) || n.isEmptyObject(R[0])) || !(!I && O.length === 0 || O.includes(I) || I && n.isEmptyObject(O[0])) || !(!A && M.length === 0 || M.includes(A) || A && n.isEmptyObject(M[0])));
  }
  return ns;
}
var rs, _c;
function Yf() {
  if (_c) return rs;
  _c = 1;
  const e = ze(), {
    isArray: t,
    isObject: n,
    isString: i,
    isUndefined: c
  } = Ce(), {
    isList: r,
    isValue: s,
    isGraph: a,
    isSimpleGraph: o,
    isSubjectReference: u
  } = pt(), {
    expandIri: m,
    getContextValue: g,
    isKeyword: p,
    process: f,
    processingMode: w
  } = jt(), {
    removeBase: x,
    prependBase: v
  } = xt(), {
    REGEX_KEYWORD: S,
    addValue: b,
    asArray: y,
    compareShortestLeast: d
  } = De(), l = {};
  rs = l, l.compact = async ({
    activeCtx: A,
    activeProperty: R = null,
    element: O,
    options: M = {}
  }) => {
    if (t(O)) {
      let $ = [];
      for (let E = 0; E < O.length; ++E) {
        const D = await l.compact({
          activeCtx: A,
          activeProperty: R,
          element: O[E],
          options: M
        });
        D !== null && $.push(D);
      }
      return M.compactArrays && $.length === 1 && (g(
        A,
        R,
        "@container"
      ) || []).length === 0 && ($ = $[0]), $;
    }
    const q = g(A, R, "@context");
    if (c(q) || (A = await f({
      activeCtx: A,
      localCtx: q,
      propagate: !0,
      overrideProtected: !0,
      options: M
    })), n(O)) {
      if (M.link && "@id" in O && M.link.hasOwnProperty(O["@id"])) {
        const C = M.link[O["@id"]];
        for (let k = 0; k < C.length; ++k)
          if (C[k].expanded === O)
            return C[k].compacted;
      }
      if (s(O) || u(O)) {
        const C = l.compactValue({ activeCtx: A, activeProperty: R, value: O, options: M });
        return M.link && u(O) && (M.link.hasOwnProperty(O["@id"]) || (M.link[O["@id"]] = []), M.link[O["@id"]].push({ expanded: O, compacted: C })), C;
      }
      if (r(O) && (g(
        A,
        R,
        "@container"
      ) || []).includes("@list"))
        return l.compact({
          activeCtx: A,
          activeProperty: R,
          element: O["@list"],
          options: M
        });
      const $ = R === "@reverse", E = {}, D = A;
      !s(O) && !u(O) && (A = A.revertToPreviousContext());
      const P = g(D, R, "@context");
      c(P) || (A = await f({
        activeCtx: A,
        localCtx: P,
        propagate: !0,
        overrideProtected: !0,
        options: M
      })), M.link && "@id" in O && (M.link.hasOwnProperty(O["@id"]) || (M.link[O["@id"]] = []), M.link[O["@id"]].push({ expanded: O, compacted: E }));
      let G = O["@type"] || [];
      G.length > 1 && (G = Array.from(G).sort());
      const B = A;
      for (const C of G) {
        const k = l.compactIri(
          { activeCtx: B, iri: C, relativeTo: { vocab: !0 } }
        ), z = g(D, k, "@context");
        c(z) || (A = await f({
          activeCtx: A,
          localCtx: z,
          options: M,
          propagate: !1
        }));
      }
      const H = Object.keys(O).sort();
      for (const C of H) {
        const k = O[C];
        if (C === "@id") {
          let z = y(k).map(
            (j) => l.compactIri({
              activeCtx: A,
              iri: j,
              relativeTo: { vocab: !1 },
              base: M.base
            })
          );
          z.length === 1 && (z = z[0]);
          const N = l.compactIri(
            { activeCtx: A, iri: "@id", relativeTo: { vocab: !0 } }
          );
          E[N] = z;
          continue;
        }
        if (C === "@type") {
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
          ), T = (g(
            A,
            N,
            "@container"
          ) || []).includes("@set") && w(A, 1.1) || t(z) && k.length === 0;
          b(E, N, z, { propertyIsArray: T });
          continue;
        }
        if (C === "@reverse") {
          const z = await l.compact({
            activeCtx: A,
            activeProperty: "@reverse",
            element: k,
            options: M
          });
          for (const N in z)
            if (A.mappings.has(N) && A.mappings.get(N).reverse) {
              const j = z[N], T = (g(
                A,
                N,
                "@container"
              ) || []).includes("@set") || !M.compactArrays;
              b(
                E,
                N,
                j,
                { propertyIsArray: T }
              ), delete z[N];
            }
          if (Object.keys(z).length > 0) {
            const N = l.compactIri({
              activeCtx: A,
              iri: C,
              relativeTo: { vocab: !0 }
            });
            b(E, N, z);
          }
          continue;
        }
        if (C === "@preserve") {
          const z = await l.compact({
            activeCtx: A,
            activeProperty: R,
            element: k,
            options: M
          });
          t(z) && z.length === 0 || b(E, C, z);
          continue;
        }
        if (C === "@index") {
          if ((g(
            A,
            R,
            "@container"
          ) || []).includes("@index"))
            continue;
          const N = l.compactIri({
            activeCtx: A,
            iri: C,
            relativeTo: { vocab: !0 }
          });
          b(E, N, k);
          continue;
        }
        if (C !== "@graph" && C !== "@list" && C !== "@included" && p(C)) {
          const z = l.compactIri({
            activeCtx: A,
            iri: C,
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
            iri: C,
            value: k,
            relativeTo: { vocab: !0 },
            reverse: $
          }), N = A.mappings.has(z) ? A.mappings.get(z)["@nest"] : null;
          let j = E;
          N && (I(A, N, M), n(E[N]) || (E[N] = {}), j = E[N]), b(
            j,
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
            iri: C,
            value: z,
            relativeTo: { vocab: !0 },
            reverse: $
          }), j = A.mappings.has(N) ? A.mappings.get(N)["@nest"] : null;
          let _ = E;
          j && (I(A, j, M), n(E[j]) || (E[j] = {}), _ = E[j]);
          const T = g(
            A,
            N,
            "@container"
          ) || [], L = a(z), J = r(z);
          let Q;
          J ? Q = z["@list"] : L && (Q = z["@graph"]);
          let Z = await l.compact({
            activeCtx: A,
            activeProperty: N,
            element: J || L ? Q : z,
            options: M
          });
          if (J)
            if (t(Z) || (Z = [Z]), !T.includes("@list"))
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
              b(_, N, Z, {
                valueIsArray: !0,
                allowDuplicate: !0
              });
              continue;
            }
          if (L)
            if (T.includes("@graph") && (T.includes("@id") || T.includes("@index") && o(z))) {
              let U;
              _.hasOwnProperty(N) ? U = _[N] : _[N] = U = {};
              const V = (T.includes("@id") ? z["@id"] : z["@index"]) || l.compactIri({
                activeCtx: A,
                iri: "@none",
                relativeTo: { vocab: !0 }
              });
              b(
                U,
                V,
                Z,
                {
                  propertyIsArray: !M.compactArrays || T.includes("@set")
                }
              );
            } else T.includes("@graph") && o(z) ? (t(Z) && Z.length > 1 && (Z = { "@included": Z }), b(
              _,
              N,
              Z,
              {
                propertyIsArray: !M.compactArrays || T.includes("@set")
              }
            )) : (t(Z) && Z.length === 1 && M.compactArrays && (Z = Z[0]), Z = {
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
              _,
              N,
              Z,
              {
                propertyIsArray: !M.compactArrays || T.includes("@set")
              }
            ));
          else if (T.includes("@language") || T.includes("@index") || T.includes("@id") || T.includes("@type")) {
            let U;
            _.hasOwnProperty(N) ? U = _[N] : _[N] = U = {};
            let V;
            if (T.includes("@language"))
              s(Z) && (Z = Z["@value"]), V = z["@language"];
            else if (T.includes("@index")) {
              const F = g(
                A,
                N,
                "@index"
              ) || "@index", K = l.compactIri(
                { activeCtx: A, iri: F, relativeTo: { vocab: !0 } }
              );
              if (F === "@index")
                V = z["@index"], delete Z[K];
              else {
                let X;
                if ([V, ...X] = y(Z[F] || []), !i(V))
                  V = null;
                else
                  switch (X.length) {
                    case 0:
                      delete Z[F];
                      break;
                    case 1:
                      Z[F] = X[0];
                      break;
                    default:
                      Z[F] = X;
                      break;
                  }
              }
            } else if (T.includes("@id")) {
              const F = l.compactIri({
                activeCtx: A,
                iri: "@id",
                relativeTo: { vocab: !0 }
              });
              V = Z[F], delete Z[F];
            } else if (T.includes("@type")) {
              const F = l.compactIri({
                activeCtx: A,
                iri: "@type",
                relativeTo: { vocab: !0 }
              });
              let K;
              switch ([V, ...K] = y(Z[F] || []), K.length) {
                case 0:
                  delete Z[F];
                  break;
                case 1:
                  Z[F] = K[0];
                  break;
                default:
                  Z[F] = K;
                  break;
              }
              Object.keys(Z).length === 1 && "@id" in z && (Z = await l.compact({
                activeCtx: A,
                activeProperty: N,
                element: { "@id": z["@id"] },
                options: M
              }));
            }
            V || (V = l.compactIri({
              activeCtx: A,
              iri: "@none",
              relativeTo: { vocab: !0 }
            })), b(
              U,
              V,
              Z,
              {
                propertyIsArray: T.includes("@set")
              }
            );
          } else {
            const U = !M.compactArrays || T.includes("@set") || T.includes("@list") || t(Z) && Z.length === 0 || C === "@list" || C === "@graph";
            b(
              _,
              N,
              Z,
              { propertyIsArray: U }
            );
          }
        }
      }
      return E;
    }
    return O;
  }, l.compactIri = ({
    activeCtx: A,
    iri: R,
    value: O = null,
    relativeTo: M = { vocab: !1 },
    reverse: q = !1,
    base: $ = null
  }) => {
    if (R === null)
      return R;
    A.isPropertyTermScoped && A.previousContext && (A = A.previousContext);
    const E = A.getInverse();
    if (p(R) && R in E && "@none" in E[R] && "@type" in E[R]["@none"] && "@none" in E[R]["@none"]["@type"])
      return E[R]["@none"]["@type"]["@none"];
    if (M.vocab && R in E) {
      const H = A["@language"] || "@none", C = [];
      n(O) && "@index" in O && !("@graph" in O) && C.push("@index", "@index@set"), n(O) && "@preserve" in O && (O = O["@preserve"][0]), a(O) ? ("@index" in O && C.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in O && C.push(
        "@graph@id",
        "@graph@id@set"
      ), C.push("@graph", "@graph@set", "@set"), "@index" in O || C.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in O || C.push("@graph@id", "@graph@id@set")) : n(O) && !s(O) && C.push("@id", "@id@set", "@type", "@set@type");
      let k = "@language", z = "@null";
      if (q)
        k = "@type", z = "@reverse", C.push("@set");
      else if (r(O)) {
        "@index" in O || C.push("@list");
        const j = O["@list"];
        if (j.length === 0)
          k = "@any", z = "@none";
        else {
          let _ = j.length === 0 ? H : null, T = null;
          for (let L = 0; L < j.length; ++L) {
            const J = j[L];
            let Q = "@none", Z = "@none";
            if (s(J))
              if ("@direction" in J) {
                const U = (J["@language"] || "").toLowerCase(), V = J["@direction"];
                Q = `${U}_${V}`;
              } else "@language" in J ? Q = J["@language"].toLowerCase() : "@type" in J ? Z = J["@type"] : Q = "@null";
            else
              Z = "@id";
            if (_ === null ? _ = Q : Q !== _ && s(J) && (_ = "@none"), T === null ? T = Z : Z !== T && (T = "@none"), _ === "@none" && T === "@none")
              break;
          }
          _ = _ || "@none", T = T || "@none", T !== "@none" ? (k = "@type", z = T) : z = _;
        }
      } else {
        if (s(O))
          if ("@language" in O && !("@index" in O)) {
            C.push("@language", "@language@set"), z = O["@language"];
            const j = O["@direction"];
            j && (z = `${z}_${j}`);
          } else "@direction" in O && !("@index" in O) ? z = `_${O["@direction"]}` : "@type" in O && (k = "@type", z = O["@type"]);
        else
          k = "@type", z = "@id";
        C.push("@set");
      }
      C.push("@none"), n(O) && !("@index" in O) && C.push("@index", "@index@set"), s(O) && Object.keys(O).length === 1 && C.push("@language", "@language@set");
      const N = h(
        A,
        R,
        O,
        C,
        k,
        z
      );
      if (N !== null)
        return N;
    }
    if (M.vocab && "@vocab" in A) {
      const H = A["@vocab"];
      if (R.indexOf(H) === 0 && R !== H) {
        const C = R.substr(H.length);
        if (!A.mappings.has(C))
          return C;
      }
    }
    let D = null;
    const P = [];
    let G = A.fastCurieMap;
    const B = R.length - 1;
    for (let H = 0; H < B && R[H] in G; ++H)
      G = G[R[H]], "" in G && P.push(G[""][0]);
    for (let H = P.length - 1; H >= 0; --H) {
      const C = P[H], k = C.terms;
      for (const z of k) {
        const N = z + ":" + R.substr(C.iri.length);
        A.mappings.get(z)._prefix && (!A.mappings.has(N) || O === null && A.mappings.get(N)["@id"] === R) && (D === null || d(N, D) < 0) && (D = N);
      }
    }
    if (D !== null)
      return D;
    for (const [H, C] of A.mappings)
      if (C && C._prefix && R.startsWith(H + ":"))
        throw new e(
          `Absolute IRI "${R}" confused with prefix "${H}".`,
          "jsonld.SyntaxError",
          { code: "IRI confused with prefix", context: A }
        );
    if (!M.vocab)
      if ("@base" in A)
        if (A["@base"]) {
          const H = x(v($, A["@base"]), R);
          return S.test(H) ? `./${H}` : H;
        } else
          return R;
      else
        return x($, R);
    return R;
  }, l.compactValue = ({ activeCtx: A, activeProperty: R, value: O, options: M }) => {
    if (s(O)) {
      const D = g(A, R, "@type"), P = g(A, R, "@language"), G = g(A, R, "@direction"), B = g(A, R, "@container") || [], H = "@index" in O && !B.includes("@index");
      if (!H && D !== "@none" && (O["@type"] === D || "@language" in O && O["@language"] === P && "@direction" in O && O["@direction"] === G || "@language" in O && O["@language"] === P || "@direction" in O && O["@direction"] === G))
        return O["@value"];
      const C = Object.keys(O).length, k = C === 1 || C === 2 && "@index" in O && !H, z = "@language" in A, N = i(O["@value"]), j = A.mappings.has(R) && A.mappings.get(R)["@language"] === null;
      if (k && D !== "@none" && (!z || !N || j))
        return O["@value"];
      const _ = {};
      return H && (_[l.compactIri({
        activeCtx: A,
        iri: "@index",
        relativeTo: { vocab: !0 }
      })] = O["@index"]), "@type" in O ? _[l.compactIri({
        activeCtx: A,
        iri: "@type",
        relativeTo: { vocab: !0 }
      })] = l.compactIri(
        { activeCtx: A, iri: O["@type"], relativeTo: { vocab: !0 } }
      ) : "@language" in O && (_[l.compactIri({
        activeCtx: A,
        iri: "@language",
        relativeTo: { vocab: !0 }
      })] = O["@language"]), "@direction" in O && (_[l.compactIri({
        activeCtx: A,
        iri: "@direction",
        relativeTo: { vocab: !0 }
      })] = O["@direction"]), _[l.compactIri({
        activeCtx: A,
        iri: "@value",
        relativeTo: { vocab: !0 }
      })] = O["@value"], _;
    }
    const q = m(
      A,
      R,
      { vocab: !0 },
      M
    ), $ = g(A, R, "@type"), E = l.compactIri({
      activeCtx: A,
      iri: O["@id"],
      relativeTo: { vocab: $ === "@vocab" },
      base: M.base
    });
    return $ === "@id" || $ === "@vocab" || q === "@graph" ? E : {
      [l.compactIri({
        activeCtx: A,
        iri: "@id",
        relativeTo: { vocab: !0 }
      })]: E
    };
  };
  function h(A, R, O, M, q, $) {
    $ === null && ($ = "@null");
    const E = [];
    if (($ === "@id" || $ === "@reverse") && n(O) && "@id" in O) {
      $ === "@reverse" && E.push("@reverse");
      const P = l.compactIri(
        { activeCtx: A, iri: O["@id"], relativeTo: { vocab: !0 } }
      );
      A.mappings.has(P) && A.mappings.get(P) && A.mappings.get(P)["@id"] === O["@id"] ? E.push.apply(E, ["@vocab", "@id"]) : E.push.apply(E, ["@id", "@vocab"]);
    } else {
      E.push($);
      const P = E.find((G) => G.includes("_"));
      P && E.push(P.replace(/^[^_]+_/, "_"));
    }
    E.push("@none");
    const D = A.inverse[R];
    for (const P of M) {
      if (!(P in D))
        continue;
      const G = D[P][q];
      for (const B of E)
        if (B in G)
          return G[B];
    }
    return null;
  }
  function I(A, R, O) {
    if (m(A, R, { vocab: !0 }, O) !== "@nest")
      throw new e(
        "JSON-LD compact error; nested property must have an @nest value resolving to @nest.",
        "jsonld.SyntaxError",
        { code: "invalid @nest value" }
      );
  }
  return rs;
}
var is, $c;
function eh() {
  return $c || ($c = 1, is = (e) => {
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
  }), is;
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
var ss, qc;
function th() {
  if (qc) return ss;
  qc = 1;
  const e = Ns(), t = Uf(), n = De(), i = Gf(), c = n.IdentifierIssuer, r = ze(), s = wd(), a = Hf(), { expand: o } = Jf(), { flatten: u } = Zf(), { fromRDF: m } = Kf(), { toRDF: g } = Xf(), {
    frameMergedOrDefault: p,
    cleanupNull: f
  } = Wf(), {
    isArray: w,
    isObject: x,
    isString: v
  } = Ce(), {
    isSubjectReference: S
  } = pt(), {
    expandIri: b,
    getInitialContext: y,
    process: d,
    processingMode: l
  } = jt(), {
    compact: h,
    compactIri: I
  } = Yf(), {
    createNodeMap: A,
    createMergedNodeMap: R,
    mergeNodeMaps: O
  } = Jr(), {
    logEventHandler: M,
    logWarningEventHandler: q,
    safeEventHandler: $,
    setDefaultEventHandler: E,
    setupEventHandler: D,
    strictEventHandler: P,
    unhandledEventHandler: G
  } = yn(), B = function(C) {
    const k = {}, N = new s({ max: 100 });
    C.compact = async function(_, T, L) {
      if (arguments.length < 2)
        throw new TypeError("Could not compact, too few arguments.");
      if (T === null)
        throw new r(
          "The compaction context must not be null.",
          "jsonld.CompactError",
          { code: "invalid local context" }
        );
      if (_ === null)
        return null;
      L = j(L, {
        base: v(_) ? _ : "",
        compactArrays: !0,
        compactToRelative: !0,
        graph: !1,
        skipExpansion: !1,
        link: !1,
        issuer: new c("_:b"),
        contextResolver: new i(
          { sharedCache: N }
        )
      }), L.link && (L.skipExpansion = !0), L.compactToRelative || delete L.base;
      let J;
      L.skipExpansion ? J = _ : J = await C.expand(_, L);
      const Q = await C.processContext(
        y(L),
        T,
        L
      );
      let Z = await h({
        activeCtx: Q,
        element: J,
        options: L
      });
      L.compactArrays && !L.graph && w(Z) ? Z.length === 1 ? Z = Z[0] : Z.length === 0 && (Z = {}) : L.graph && x(Z) && (Z = [Z]), x(T) && "@context" in T && (T = T["@context"]), T = n.clone(T), w(T) || (T = [T]);
      const U = T;
      T = [];
      for (let F = 0; F < U.length; ++F)
        (!x(U[F]) || Object.keys(U[F]).length > 0) && T.push(U[F]);
      const V = T.length > 0;
      if (T.length === 1 && (T = T[0]), w(Z)) {
        const F = I({
          activeCtx: Q,
          iri: "@graph",
          relativeTo: { vocab: !0 }
        }), K = Z;
        Z = {}, V && (Z["@context"] = T), Z[F] = K;
      } else if (x(Z) && V) {
        const F = Z;
        Z = { "@context": T };
        for (const K in F)
          Z[K] = F[K];
      }
      return Z;
    }, C.expand = async function(_, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not expand, too few arguments.");
      T = j(T, {
        keepFreeFloatingNodes: !1,
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      const L = {}, J = [];
      if ("expandContext" in T) {
        const V = n.clone(T.expandContext);
        x(V) && "@context" in V ? L.expandContext = V : L.expandContext = { "@context": V }, J.push(L.expandContext);
      }
      let Q;
      if (!v(_))
        L.input = n.clone(_);
      else {
        const V = await C.get(_, T);
        Q = V.documentUrl, L.input = V.document, V.contextUrl && (L.remoteContext = { "@context": V.contextUrl }, J.push(L.remoteContext));
      }
      "base" in T || (T.base = Q || "");
      let Z = y(T);
      for (const V of J)
        Z = await d({ activeCtx: Z, localCtx: V, options: T });
      let U = await o({
        activeCtx: Z,
        element: L.input,
        options: T
      });
      return x(U) && "@graph" in U && Object.keys(U).length === 1 ? U = U["@graph"] : U === null && (U = []), w(U) || (U = [U]), U;
    }, C.flatten = async function(_, T, L) {
      if (arguments.length < 1)
        return new TypeError("Could not flatten, too few arguments.");
      typeof T == "function" ? T = null : T = T || null, L = j(L, {
        base: v(_) ? _ : "",
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      const J = await C.expand(_, L), Q = u(J);
      return T === null ? Q : (L.graph = !0, L.skipExpansion = !0, await C.compact(Q, T, L));
    }, C.frame = async function(_, T, L) {
      if (arguments.length < 2)
        throw new TypeError("Could not frame, too few arguments.");
      if (L = j(L, {
        base: v(_) ? _ : "",
        embed: "@once",
        explicit: !1,
        requireAll: !1,
        omitDefault: !1,
        bnodesToClear: [],
        contextResolver: new i(
          { sharedCache: N }
        )
      }), v(T)) {
        const Y = await C.get(T, L);
        if (T = Y.document, Y.contextUrl) {
          let re = T["@context"];
          re ? w(re) ? re.push(Y.contextUrl) : re = [re, Y.contextUrl] : re = Y.contextUrl, T["@context"] = re;
        }
      }
      const J = T ? T["@context"] || {} : {}, Q = await C.processContext(
        y(L),
        J,
        L
      );
      L.hasOwnProperty("omitGraph") || (L.omitGraph = l(Q, 1.1)), L.hasOwnProperty("pruneBlankNodeIdentifiers") || (L.pruneBlankNodeIdentifiers = l(Q, 1.1));
      const Z = await C.expand(_, L), U = { ...L };
      U.isFrame = !0, U.keepFreeFloatingNodes = !0;
      const V = await C.expand(T, U), F = Object.keys(T).map((Y) => b(Q, Y, { vocab: !0 }));
      U.merged = !F.includes("@graph"), U.is11 = l(Q, 1.1);
      const K = p(Z, V, U);
      U.graph = !L.omitGraph, U.skipExpansion = !0, U.link = {}, U.framing = !0;
      let X = await C.compact(K, J, U);
      return U.link = {}, X = f(X, U), X;
    }, C.link = async function(_, T, L) {
      const J = {};
      return T && (J["@context"] = T), J["@embed"] = "@link", C.frame(_, J, L);
    }, C.normalize = C.canonize = async function(_, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not canonize, too few arguments.");
      if (T = j(T, {
        base: v(_) ? _ : null,
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
        const Q = a.parse(_);
        return e.canonize(Q, T);
      }
      const L = { ...T };
      delete L.format, L.produceGeneralizedRdf = !1;
      const J = await C.toRDF(_, L);
      return e.canonize(J, T);
    }, C.fromRDF = async function(_, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert from RDF, too few arguments.");
      T = j(T, {
        format: v(_) ? "application/n-quads" : void 0
      });
      const { format: L } = T;
      let { rdfParser: J } = T;
      if (L) {
        if (J = J || k[L], !J)
          throw new r(
            "Unknown input format.",
            "jsonld.UnknownFormat",
            { format: L }
          );
      } else
        J = () => _;
      const Q = await J(_);
      return m(Q, T);
    }, C.toRDF = async function(_, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert to RDF, too few arguments.");
      T = j(T, {
        base: v(_) ? _ : "",
        skipExpansion: !1,
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      let L;
      T.skipExpansion ? L = _ : L = await C.expand(_, T);
      const J = g(L, T);
      if (T.format) {
        if (T.format === "application/n-quads" || T.format === "application/nquads")
          return a.serialize(J);
        throw new r(
          "Unknown output format.",
          "jsonld.UnknownFormat",
          { format: T.format }
        );
      }
      return J;
    }, C.createNodeMap = async function(_, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not create node map, too few arguments.");
      T = j(T, {
        base: v(_) ? _ : "",
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      const L = await C.expand(_, T);
      return R(L, T);
    }, C.merge = async function(_, T, L) {
      if (arguments.length < 1)
        throw new TypeError("Could not merge, too few arguments.");
      if (!w(_))
        throw new TypeError('Could not merge, "docs" must be an array.');
      typeof T == "function" ? T = null : T = T || null, L = j(L, {
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      const J = await Promise.all(_.map((Y) => {
        const re = { ...L };
        return C.expand(Y, re);
      }));
      let Q = !0;
      "mergeNodes" in L && (Q = L.mergeNodes);
      const Z = L.issuer || new c("_:b"), U = { "@default": {} };
      for (let Y = 0; Y < J.length; ++Y) {
        const re = n.relabelBlankNodes(J[Y], {
          issuer: new c("_:b" + Y + "-")
        }), be = Q || Y === 0 ? U : { "@default": {} };
        if (A(re, be, "@default", Z), be !== U)
          for (const he in be) {
            const ye = be[he];
            if (!(he in U)) {
              U[he] = ye;
              continue;
            }
            const fe = U[he];
            for (const Ke in ye)
              Ke in fe || (fe[Ke] = ye[Ke]);
          }
      }
      const V = O(U), F = [], K = Object.keys(V).sort();
      for (let Y = 0; Y < K.length; ++Y) {
        const re = V[K[Y]];
        S(re) || F.push(re);
      }
      return T === null ? F : (L.graph = !0, L.skipExpansion = !0, await C.compact(F, T, L));
    }, Object.defineProperty(C, "documentLoader", {
      get: () => C._documentLoader,
      set: (_) => C._documentLoader = _
    }), C.documentLoader = async (_) => {
      throw new r(
        "Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.",
        "jsonld.LoadDocumentError",
        { code: "loading document failed", url: _ }
      );
    }, C.get = async function(_, T) {
      let L;
      typeof T.documentLoader == "function" ? L = T.documentLoader : L = C.documentLoader;
      const J = await L(_);
      try {
        if (!J.document)
          throw new r(
            "No remote document found at the given URL.",
            "jsonld.NullRemoteDocument"
          );
        v(J.document) && (J.document = JSON.parse(J.document));
      } catch (Q) {
        throw new r(
          "Could not retrieve a JSON-LD document from the URL.",
          "jsonld.LoadDocumentError",
          {
            code: "loading document failed",
            cause: Q,
            remoteDoc: J
          }
        );
      }
      return J;
    }, C.processContext = async function(_, T, L) {
      return L = j(L, {
        base: "",
        contextResolver: new i(
          { sharedCache: N }
        )
      }), T === null ? y(L) : (T = n.clone(T), x(T) && "@context" in T || (T = { "@context": T }), d({ activeCtx: _, localCtx: T, options: L }));
    }, C.getContextValue = jt().getContextValue, C.documentLoaders = {}, C.useDocumentLoader = function(_) {
      if (!(_ in C.documentLoaders))
        throw new r(
          'Unknown document loader type: "' + _ + '"',
          "jsonld.UnknownDocumentLoader",
          { type: _ }
        );
      C.documentLoader = C.documentLoaders[_].apply(
        C,
        Array.prototype.slice.call(arguments, 1)
      );
    }, C.registerRDFParser = function(_, T) {
      k[_] = T;
    }, C.unregisterRDFParser = function(_) {
      delete k[_];
    }, C.registerRDFParser("application/n-quads", a.parse), C.registerRDFParser("application/nquads", a.parse), C.url = xt(), C.logEventHandler = M, C.logWarningEventHandler = q, C.safeEventHandler = $, C.setDefaultEventHandler = E, C.strictEventHandler = P, C.unhandledEventHandler = G, C.util = n, Object.assign(C, n), C.promises = C, C.RequestQueue = bd(), C.JsonLdProcessor = eh()(C), t.setupGlobals(C), t.setupDocumentLoaders(C);
    function j(_, {
      documentLoader: T = C.documentLoader,
      ...L
    }) {
      if (_ && "compactionMap" in _)
        throw new r(
          '"compactionMap" not supported.',
          "jsonld.OptionsError"
        );
      if (_ && "expansionMap" in _)
        throw new r(
          '"expansionMap" not supported.',
          "jsonld.OptionsError"
        );
      return Object.assign(
        {},
        { documentLoader: T },
        L,
        _,
        { eventHandler: D({ options: _ }) }
      );
    }
    return C;
  }, H = function() {
    return B(function() {
      return H();
    });
  };
  return B(H), ss = H, ss;
}
var nh = th();
const rh = /* @__PURE__ */ qs(nh);
async function jc(e, t, n = {}) {
  const i = {
    algorithm: "URDNA2015",
    format: "application/n-quads",
    safe: n.safe ?? !1
  };
  return t && (i.documentLoader = t), await rh.normalize(e, i);
}
async function ih(e, t, n, i = !1) {
  const [c, r] = await Promise.all([
    jc(e, n, { safe: i }),
    jc(t, n, { safe: i })
  ]), s = ls("sha256").update(c, "utf8").digest(), a = ls("sha256").update(r, "utf8").digest(), o = new Uint8Array(64);
  return o.set(a, 0), o.set(s, 32), o;
}
async function sh(e, t, n = {}) {
  const i = e.proof;
  if (!i) throw new Error("No proof found on credential");
  if (i.cryptosuite !== "eddsa-rdfc-2022")
    throw new Error(`Unsupported cryptosuite: ${i.cryptosuite}`);
  if (i.created === void 0)
    throw new Error('eddsa-rdfc-2022 proof is missing the required "created" property.');
  const c = ["type", "cryptosuite", "proofPurpose", "verificationMethod", "created", "proofValue"];
  if (i.type !== "DataIntegrityProof" || i.proofPurpose !== "assertionMethod" || Object.keys(i).some((g) => !c.includes(g)) || typeof i.verificationMethod != "string" || typeof i.created != "string" || typeof i.proofValue != "string") return !1;
  const { proof: r, ...s } = e, { proofValue: a, ...o } = i, u = { ...o, "@context": s["@context"] }, m = await ih(
    s,
    u,
    n.documentLoader,
    n.safe ?? !1
  );
  try {
    const g = Gc(i.proofValue);
    return await jf(g, m, t);
  } catch {
    return !1;
  }
}
const ah = Wp, oh = ff, ch = Object.freeze({
  RmAccreditation: `${Tt}accreditation.json`,
  RmOperationalScope: `${Tt}operational-scope.json`,
  RmCertificate: `${Tt}certificate.json`,
  RmStudy: `${Tt}study.json`,
  RmLabAuthority: `${Tt}lab-authority.json`,
  BitstringStatusListCredential: `${Tt}status-list.json`
});
function dh(e) {
  return e === "BitstringStatusListCredential" ? [Gt] : [Gt, wl];
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
function Zr(e, t, n, i) {
  return [
    e,
    t ?? "unresolved",
    n,
    i.purpose,
    `${i.profile.id}@${i.profile.version}`,
    i.evaluationTime
  ].join(" | ");
}
function Ut(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const ph = (e) => e.replace(/~/g, "~0").replace(/\//g, "~1");
function fh(e, t) {
  if (!t.startsWith("/")) return [];
  let n = [{ pointer: "", value: e }];
  for (const i of t.slice(1).split("/")) {
    const c = [];
    for (const { pointer: r, value: s } of n)
      i === "*" ? Array.isArray(s) && s.forEach((a, o) => c.push({ pointer: `${r}/${o}`, value: a })) : Ut(s) && Object.hasOwn(s, i) && c.push({ pointer: `${r}/${ph(i)}`, value: s[i] });
    n = c;
  }
  return n;
}
function Zt(e, t) {
  if (t === "") return e;
  if (!t.startsWith("/")) return;
  let n = e;
  for (const i of t.slice(1).split("/")) {
    const c = i.replace(/~1/g, "/").replace(/~0/g, "~");
    if (Array.isArray(n) && /^(0|[1-9][0-9]*)$/.test(c)) n = n[Number(c)];
    else if (Ut(n) && Object.hasOwn(n, c)) n = n[c];
    else return;
  }
  return n;
}
function ae(e, t, n = [], i = "executed") {
  return Object.freeze({
    state: e,
    execution: i,
    reasons: Object.freeze(t),
    sourcePointers: Object.freeze(n)
  });
}
const Kt = (e) => ae("not_established", [e], [], "not_run");
function hh(e, t) {
  const n = Date.parse(t), i = typeof e.validFrom == "string" ? Date.parse(e.validFrom) : NaN, c = typeof e.validUntil == "string" ? Date.parse(e.validUntil) : NaN;
  if (!Number.isFinite(n) || !Number.isFinite(i) || !Number.isFinite(c))
    return ae("not_established", ["Validity period or evaluation time is missing or invalid."]);
  const r = ["/validFrom", "/validUntil"];
  return n < i ? ae("contradicted", [`Not yet valid at ${t}.`], r) : n > c ? ae("contradicted", [`Expired before ${t}.`], r) : ae("established", [`Valid at ${t}.`], r);
}
function mh(e, t) {
  return (Array.isArray(e.relatedResource) ? e.relatedResource : []).filter(Ut).map((i) => {
    const c = String(i.id);
    try {
      const r = Dr(t.resolve(c).bytes);
      return r === i.digestSRI ? { id: c, state: "established", reason: "Digest matches the exact referenced bytes." } : { id: c, state: "contradicted", reason: `Digest mismatch: referenced bytes hash to ${r}.` };
    } catch (r) {
      const s = r instanceof Re ? r.code : "UNAVAILABLE";
      return { id: c, state: "not_established", reason: `Referenced resource unavailable: ${s}.` };
    }
  });
}
async function Sr(e, t, n) {
  const i = [], c = n.staticResolver ?? t, r = n.binding ?? lh, s = Kt("Not evaluated because protection is not established."), a = (l = {}) => {
    const h = je(i.map((I) => I.state));
    return Object.freeze({
      artifactId: e,
      protection: Object.freeze({
        artifactId: e,
        ...ae(h, i.filter((I) => I.state !== "established").map((I) => `${I.check}: ${I.reason}`).concat(h === "established" ? ["Protection established from the original secured bytes."] : []))
      }),
      checks: Object.freeze(i.map((I) => Object.freeze(I))),
      validity: s,
      relatedResources: Object.freeze([]),
      facts: Object.freeze([]),
      ...l
    });
  }, o = (l, h, I, A = {}) => (i.push({ check: l, state: h, reason: I }), a(A));
  let u;
  try {
    u = t.resolve(e).bytes;
  } catch (l) {
    const h = l instanceof Re ? l.code : "UNAVAILABLE";
    return o("resolve", "not_established", `Artifact is not available: ${h}.`);
  }
  const m = Dr(u);
  i.push({ check: "resolve", state: "established", reason: `Resolved ${u.byteLength} bytes.` });
  let g;
  try {
    g = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(u));
  } catch {
    return o("parse", "contradicted", "Artifact bytes are not valid UTF-8 JSON.", { digestSRI: m });
  }
  if (!Ut(g)) return o("parse", "contradicted", "Artifact is not a JSON object.", { digestSRI: m });
  i.push({ check: "parse", state: "established", reason: "Strict UTF-8 JSON object." });
  const p = g["@context"], f = r.contexts(Array.isArray(g.type) ? g.type[1] : void 0);
  if (!Array.isArray(p) || p.length !== f.length || f.some((l, h) => p[h] !== l))
    return o(
      "carrier",
      "not_established",
      "Only the exact supported context combination for this type is accepted.",
      { digestSRI: m }
    );
  i.push({ check: "carrier", state: "established", reason: "Exact supported context combination." });
  const w = Array.isArray(g.type) ? g.type : [], x = w.length === 2 && w[0] === "VerifiableCredential" ? String(w[1]) : void 0, v = x === void 0 ? void 0 : r.schemas[x];
  if (v === void 0)
    return o("type", "not_established", `Credential type is not a recognized ${r.name} artifact type.`, { digestSRI: m });
  if (Array.isArray(g.credentialSchema))
    return o(
      "type",
      "not_established",
      "Multiple credentialSchema declarations have no accepted composition in this binding.",
      { digestSRI: m, artifactType: x }
    );
  if ((Ut(g.credentialSchema) ? g.credentialSchema.id : void 0) !== v)
    return o("type", "contradicted", `${x} must declare schema ${v}.`, { digestSRI: m, artifactType: x });
  i.push({ check: "type", state: "established", reason: `${x} with its pinned schema.` });
  try {
    const l = new ah({ allErrors: !0, strict: !0 });
    oh(l);
    const h = JSON.parse(new TextDecoder().decode(c.resolve(v).bytes)), I = l.compile(h);
    if (!I(g)) {
      const A = (I.errors ?? []).map((R) => `${R.instancePath || "/"} ${R.message ?? ""}`).join("; ");
      return o("schema", "contradicted", `Schema validation failed: ${A}`, { digestSRI: m, artifactType: x });
    }
  } catch (l) {
    const h = l instanceof Re ? l.code : "INVALID_SCHEMA";
    return o("schema", "not_established", `Pinned schema unavailable: ${h}.`, { digestSRI: m, artifactType: x });
  }
  i.push({ check: "schema", state: "established", reason: "Valid against the pinned schema." });
  const b = g.proof;
  if (Array.isArray(b))
    return o("proof", "not_established", "Proof sets and chains are unsupported in the initial slice.", { digestSRI: m, artifactType: x });
  if (!Ut(b))
    return o("proof", "not_established", "The artifact carries no proof.", { digestSRI: m, artifactType: x });
  i.push({ check: "proof", state: "established", reason: "One eddsa-rdfc-2022 assertionMethod proof." });
  const y = jl(g.issuer, b.verificationMethod, c);
  if (y.state !== "established" || y.publicKey === void 0)
    return o(
      "key",
      y.state === "established" ? "not_established" : y.state,
      `${y.code}: ${y.reason}`,
      { digestSRI: m, artifactType: x, keyAuthorization: y }
    );
  i.push({ check: "key", state: "established", reason: y.reason });
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
    for (const { pointer: I, value: A } of fh(g, String(l.nativePath)))
      d.push(Object.freeze({ fact: h, pointer: I, value: structuredClone(A) }));
  }
  return a({
    digestSRI: m,
    artifactType: x,
    keyAuthorization: y,
    validity: hh(g, n.evaluationTime),
    relatedResources: Object.freeze(mh(g, t).map((l) => Object.freeze(l))),
    facts: Object.freeze(d)
  });
}
var Ee = Uint8Array, zt = Uint16Array, yh = Int32Array, xd = new Ee([
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
]), Sd = new Ee([
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
]), gh = new Ee([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Id = function(e, t) {
  for (var n = new zt(31), i = 0; i < 31; ++i)
    n[i] = t += 1 << e[i - 1];
  for (var c = new yh(n[30]), i = 1; i < 30; ++i)
    for (var r = n[i]; r < n[i + 1]; ++r)
      c[r] = r - n[i] << 5 | i;
  return { b: n, r: c };
}, Ad = Id(xd, 2), _d = Ad.b, vh = Ad.r;
_d[28] = 258, vh[258] = 28;
var bh = Id(Sd, 0), wh = bh.b, ys = new zt(32768);
for (var oe = 0; oe < 32768; ++oe) {
  var vt = (oe & 43690) >> 1 | (oe & 21845) << 1;
  vt = (vt & 52428) >> 2 | (vt & 13107) << 2, vt = (vt & 61680) >> 4 | (vt & 3855) << 4, ys[oe] = ((vt & 65280) >> 8 | (vt & 255) << 8) >> 1;
}
var an = (function(e, t, n) {
  for (var i = e.length, c = 0, r = new zt(t); c < i; ++c)
    e[c] && ++r[e[c] - 1];
  var s = new zt(t);
  for (c = 1; c < t; ++c)
    s[c] = s[c - 1] + r[c - 1] << 1;
  var a;
  if (n) {
    a = new zt(1 << t);
    var o = 15 - t;
    for (c = 0; c < i; ++c)
      if (e[c])
        for (var u = c << 4 | e[c], m = t - e[c], g = s[e[c] - 1]++ << m, p = g | (1 << m) - 1; g <= p; ++g)
          a[ys[g] >> o] = u;
  } else
    for (a = new zt(i), c = 0; c < i; ++c)
      e[c] && (a[c] = ys[s[e[c] - 1]++] >> 15 - e[c]);
  return a;
}), gn = new Ee(288);
for (var oe = 0; oe < 144; ++oe)
  gn[oe] = 8;
for (var oe = 144; oe < 256; ++oe)
  gn[oe] = 9;
for (var oe = 256; oe < 280; ++oe)
  gn[oe] = 7;
for (var oe = 280; oe < 288; ++oe)
  gn[oe] = 8;
var $d = new Ee(32);
for (var oe = 0; oe < 32; ++oe)
  $d[oe] = 5;
var xh = /* @__PURE__ */ an(gn, 9, 1), Sh = /* @__PURE__ */ an($d, 5, 1), as = function(e) {
  for (var t = e[0], n = 1; n < e.length; ++n)
    e[n] > t && (t = e[n]);
  return t;
}, Fe = function(e, t, n) {
  var i = t / 8 | 0;
  return (e[i] | e[i + 1] << 8) >> (t & 7) & n;
}, os = function(e, t) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (t & 7);
}, Ih = function(e) {
  return (e + 7) / 8 | 0;
}, Ah = function(e, t, n) {
  return (n == null || n > e.length) && (n = e.length), new Ee(e.subarray(t, n));
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
], Be = function(e, t, n) {
  var i = new Error(t || _h[e]);
  if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, Be), !n)
    throw i;
  return i;
}, $h = function(e, t, n, i) {
  var c = e.length, r = 0;
  if (!c || t.f && !t.l)
    return n || new Ee(0);
  var s = !n, a = s || t.i != 2, o = t.i;
  s && (n = new Ee(c * 3));
  var u = function(U) {
    var V = n.length;
    if (U > V) {
      var F = new Ee(Math.max(V * 2, U));
      F.set(n), n = F;
    }
  }, m = t.f || 0, g = t.p || 0, p = t.b || 0, f = t.l, w = t.d, x = t.m, v = t.n, S = c * 8;
  do {
    if (!f) {
      m = Fe(e, g, 1);
      var b = Fe(e, g + 1, 3);
      if (g += 3, b)
        if (b == 1)
          f = xh, w = Sh, x = 9, v = 5;
        else if (b == 2) {
          var h = Fe(e, g, 31) + 257, I = Fe(e, g + 10, 15) + 4, A = h + Fe(e, g + 5, 31) + 1;
          g += 14;
          for (var R = new Ee(A), O = new Ee(19), M = 0; M < I; ++M)
            O[gh[M]] = Fe(e, g + M * 3, 7);
          g += I * 3;
          for (var q = as(O), $ = (1 << q) - 1, E = an(O, q, 1), M = 0; M < A; ) {
            var D = E[Fe(e, g, $)];
            g += D & 15;
            var y = D >> 4;
            if (y < 16)
              R[M++] = y;
            else {
              var P = 0, G = 0;
              for (y == 16 ? (G = 3 + Fe(e, g, 3), g += 2, P = R[M - 1]) : y == 17 ? (G = 3 + Fe(e, g, 7), g += 3) : y == 18 && (G = 11 + Fe(e, g, 127), g += 7); G--; )
                R[M++] = P;
            }
          }
          var B = R.subarray(0, h), H = R.subarray(h);
          x = as(B), v = as(H), f = an(B, x, 1), w = an(H, v, 1);
        } else
          Be(1);
      else {
        var y = Ih(g) + 4, d = e[y - 4] | e[y - 3] << 8, l = y + d;
        if (l > c) {
          o && Be(0);
          break;
        }
        a && u(p + d), n.set(e.subarray(y, l), p), t.b = p += d, t.p = g = l * 8, t.f = m;
        continue;
      }
      if (g > S) {
        o && Be(0);
        break;
      }
    }
    a && u(p + 131072);
    for (var C = (1 << x) - 1, k = (1 << v) - 1, z = g; ; z = g) {
      var P = f[os(e, g) & C], N = P >> 4;
      if (g += P & 15, g > S) {
        o && Be(0);
        break;
      }
      if (P || Be(2), N < 256)
        n[p++] = N;
      else if (N == 256) {
        z = g, f = null;
        break;
      } else {
        var j = N - 254;
        if (N > 264) {
          var M = N - 257, _ = xd[M];
          j = Fe(e, g, (1 << _) - 1) + _d[M], g += _;
        }
        var T = w[os(e, g) & k], L = T >> 4;
        T || Be(3), g += T & 15;
        var H = wh[L];
        if (L > 3) {
          var _ = Sd[L];
          H += os(e, g) & (1 << _) - 1, g += _;
        }
        if (g > S) {
          o && Be(0);
          break;
        }
        a && u(p + 131072);
        var J = p + j;
        if (p < H) {
          var Q = r - H, Z = Math.min(H, J);
          for (Q + p < 0 && Be(3); p < Z; ++p)
            n[p] = i[Q + p];
        }
        for (; p < J; ++p)
          n[p] = n[p - H];
      }
    }
    t.l = f, t.p = z, t.b = p, t.f = m, f && (m = 1, t.m = x, t.d = w, t.n = v);
  } while (!m);
  return p != n.length && s ? Ah(n, 0, p) : n.subarray(0, p);
}, qh = /* @__PURE__ */ new Ee(0), jh = function(e) {
  (e[0] != 31 || e[1] != 139 || e[2] != 8) && Be(6, "invalid gzip data");
  var t = e[3], n = 10;
  t & 4 && (n += (e[10] | e[11] << 8) + 2);
  for (var i = (t >> 3 & 1) + (t >> 4 & 1); i > 0; i -= !e[n++])
    ;
  return n + (t & 2);
}, Rh = function(e) {
  var t = e.length;
  return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
};
function Ph(e, t) {
  var n = jh(e);
  return n + 8 > e.length && Be(6, "invalid gzip data"), $h(e.subarray(n, -8), { i: 2 }, new Ee(Rh(e)), t);
}
var Eh = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Ch = 0;
try {
  Eh.decode(qh, { stream: !0 }), Ch = 1;
} catch {
}
function Rc(e) {
  return Object.assign(new RangeError(`Cannot create a buffer larger than maxOutputLength ${e}.`), { code: "ERR_BUFFER_TOO_LARGE" });
}
function Th(e, t = {}) {
  const n = t.maxOutputLength ?? Number.MAX_SAFE_INTEGER;
  if (e.length >= 18) {
    const c = e.length - 4;
    if ((e[c] | e[c + 1] << 8 | e[c + 2] << 16 | e[c + 3] << 24) >>> 0 > n) throw Rc(n);
  }
  const i = Ph(e);
  if (i.length > n) throw Rc(n);
  return i;
}
const Pc = 131072, Oh = 2 * 1024 * 1024;
class Ir extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "StatusListError";
  }
}
function Mh(e, t = Oh) {
  if (typeof e != "string" || !/^u[A-Za-z0-9_-]+$/.test(e))
    throw new Ir("MALFORMED", 'encodedList must be multibase base64url (prefix "u").');
  let n;
  try {
    n = Th(kh(e.slice(1)), { maxOutputLength: t });
  } catch (i) {
    throw i.code === "ERR_BUFFER_TOO_LARGE" || /maxOutputLength|buffer/i.test(String(i)) ? new Ir("TOO_LARGE", `Decompressed status list exceeds ${t} bytes.`) : new Ir("MALFORMED", "encodedList is not valid GZIP data.");
  }
  if (n.byteLength * 8 < Pc)
    throw new Ir("TOO_SHORT", `Status list has fewer than ${Pc} bits.`);
  return new Uint8Array(n);
}
function kh(e) {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", n = new Uint8Array(Math.floor(e.length * 6 / 8));
  let i = 0, c = 0, r = 0;
  for (const s of e)
    i = i << 6 | t.indexOf(s), c += 6, c >= 8 && (c -= 8, n[r++] = i >> c & 255);
  return n;
}
function Nh(e, t) {
  const n = e[Math.floor(t / 8)];
  if (n === void 0) throw new RangeError(`Status index ${t} is outside the list.`);
  return (n >> 7 - t % 8 & 1) === 1;
}
function qd(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function gs(e, t) {
  const n = e.credentialStatus;
  if (n === void 0) return {};
  const i = Array.isArray(n) ? n : [n];
  if (i.length === 0 || !i.every(qd)) return { reason: "Unsupported credentialStatus form." };
  const c = i.filter((r) => t.includes(String(r.statusPurpose)));
  return c.length > 1 ? { reason: `Several status entries for ${t.join("/")}.` } : c.length === 0 ? { reason: `No status entry has an accepted purpose (${t.join(", ")}); found ${i.map((r) => String(r.statusPurpose)).join(", ")}.` } : { entry: c[0] };
}
function Lh(e, t, n, i, c, r = c) {
  const s = gs(e, i.purposes), a = s.entry;
  if (a === void 0 && s.reason === void 0)
    return i.required ? { state: "not_established", reason: "Status is required by the profile but the credential names none.", sources: [] } : { state: "established", reason: "The profile does not require status for this credential.", sources: [] };
  if (a === void 0) return { state: "not_established", reason: s.reason, sources: ["/credentialStatus"] };
  if (a.type !== "BitstringStatusListEntry" || typeof a.statusListCredential != "string" || typeof a.statusListIndex != "string")
    return { state: "not_established", reason: "Unsupported credentialStatus form.", sources: ["/credentialStatus"] };
  const o = a.statusListCredential, u = ["/credentialStatus", o];
  if (t === void 0)
    return { state: "not_established", reason: `Status list ${o} is unavailable.`, listUri: o, sources: u };
  if (n !== "established")
    return { state: "not_established", reason: `Status list ${o} is not protected and valid.`, listUri: o, sources: u };
  if (t.id !== o)
    return { state: "not_established", reason: `Resolved status list identifies itself as ${String(t.id)}.`, listUri: o, sources: u };
  if (t.issuer !== e.issuer)
    return { state: "not_established", reason: `Status list is signed by ${String(t.issuer)}, who may not state status for credentials of ${String(e.issuer)}.`, listUri: o, sources: u };
  const m = t.credentialSubject;
  if (!qd(m) || m.type !== "BitstringStatusList" || m.statusPurpose !== a.statusPurpose)
    return { state: "not_established", reason: "Status list purpose does not match the entry.", listUri: o, sources: u };
  const g = Date.parse(c), p = Date.parse(String(t.validFrom));
  if (!Number.isFinite(g) || !Number.isFinite(p) || (g - p) / 1e3 > i.maxAgeSeconds)
    return { state: "not_established", reason: `Status list is older than the profile's ${i.maxAgeSeconds} s freshness limit.`, listUri: o, sources: u };
  const f = Date.parse(r);
  if (!Number.isFinite(f) || f < p)
    return { state: "not_established", reason: `Status list observed at ${String(t.validFrom)} cannot establish status at the earlier activity time ${r}; historical status is unavailable.`, listUri: o, sources: u };
  if (!/^(0|[1-9][0-9]*)$/.test(a.statusListIndex))
    return { state: "not_established", reason: "statusListIndex is not a non-negative integer.", listUri: o, sources: u };
  let w;
  try {
    w = Nh(Mh(m.encodedList), Number(a.statusListIndex));
  } catch (S) {
    return { state: "not_established", reason: `Status list cannot be read: ${S.message}`, listUri: o, sources: u };
  }
  const [x, v] = a.statusPurpose === "suspension" ? ["Suspended", "Not suspended"] : ["Revoked", "Not revoked"];
  return w ? { state: "contradicted", reason: `${x}: bit ${a.statusListIndex} of ${o} is set.`, listUri: o, sources: u } : { state: "established", reason: `${v}: bit ${a.statusListIndex} of ${o} is clear.`, listUri: o, sources: u };
}
const Dh = Object.freeze({ maxResources: 1e3, maxBytes: 2e7 });
function Ds(e, t, n) {
  if (!(e.binding.id === t.id && e.binding.version === t.version && e.profile.id === n.id && e.profile.version === n.version))
    return `Requested ${e.profile.id}@${e.profile.version} with binding ${e.binding.id}@${e.binding.version} is not the verifier-selected profile ${n.id}@${n.version} for ${t.id}@${t.version}.`;
}
function zs(e, t) {
  const n = `${e.targetId} | plan`;
  return zr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: [],
    authorization: e.selectedClaims.map((i) => ({
      claimId: i.id,
      routeWitnessIds: [],
      ...Kt("Not evaluated: the plan was refused at gate 0.")
    })),
    support: [],
    conformity: e.conformity ? { requested: !0, ...e.conformity, ...Kt("Not evaluated: the plan was refused at gate 0.") } : { requested: !1, execution: "not_run" },
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
async function Us(e, t, n, i, c) {
  const r = ea(t.openSession({
    maxResources: e.resolverLimits.maxResources,
    maxBytes: e.resolverLimits.maxBytes
  })), s = ea(t.openSession(Dh)), a = { manifest: n, evaluationTime: e.evaluationTime, staticResolver: s, ...c ? { binding: c } : {} }, o = (h) => JSON.parse(new TextDecoder().decode(r.resolve(h).bytes)), u = await Sr(e.targetId, r, a), m = [u], g = /* @__PURE__ */ new Map([[e.targetId, 0]]);
  for (const h of e.suppliedEvidence)
    g.has(h) || (g.set(h, 1), m.push(await Sr(h, r, a)));
  for (let h = 0; h < m.length; h++) {
    const I = m[h], A = g.get(I.artifactId);
    if (I.protection.state !== "established" || A + 1 > e.resolverLimits.maxDepth) continue;
    const R = o(I.artifactId), O = [
      ...(Array.isArray(R.termsOfUse) ? R.termsOfUse : []).map((M) => M?.authorizationCredential?.id),
      ...(Array.isArray(R.evidence) ? R.evidence : []).map((M) => M?.id)
    ].filter((M) => typeof M == "string");
    for (const M of O)
      g.has(M) || (g.set(M, A + 1), m.push(await Sr(M, r, a)));
  }
  const p = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  for (const h of m) {
    if (h.protection.state !== "established") {
      w.set(h.artifactId, void 0);
      continue;
    }
    const I = o(h.artifactId).id;
    w.set(h.artifactId, I === h.artifactId ? ae("established", ["Artifact identifies itself by its resolved identity."], ["/id"]) : ae("contradicted", [`Artifact resolved as ${h.artifactId} identifies itself as ${String(I)}.`], ["/id"]));
  }
  const x = async (h, I, A) => {
    const R = g.get(h) + 1;
    if (R > e.resolverLimits.maxDepth)
      return {
        state: "not_established",
        sources: ["/credentialStatus"],
        reason: `Status list is at depth ${R}, beyond the request's maxDepth ${e.resolverLimits.maxDepth}.`
      };
    const O = gs(I, A.purposes).entry, M = typeof O?.statusListCredential == "string" ? O.statusListCredential : void 0;
    let q, $ = "not_established";
    if (M !== void 0) {
      p.has(M) || p.set(M, await Sr(M, r, a));
      const E = p.get(M);
      E.digestSRI !== void 0 && E.protection.state === "established" ? (q = o(M), $ = je([E.protection.state, E.validity.state])) : E.digestSRI !== void 0 && (q = {}, $ = E.protection.state);
    }
    return Lh(I, q, $, A, e.evaluationTime, e.activityTime);
  }, v = { required: !0, purposes: ["suspension"], maxAgeSeconds: i.credentialStatus.maxAgeSeconds }, S = /* @__PURE__ */ new Map();
  for (const h of m) {
    if (h.protection.state !== "established") {
      f.set(h.artifactId, void 0);
      continue;
    }
    const I = o(h.artifactId);
    f.set(h.artifactId, await x(h.artifactId, I, i.credentialStatus)), gs(I, ["suspension"]).entry !== void 0 && S.set(h.artifactId, await x(h.artifactId, I, v));
  }
  const b = (h) => [
    h.protection,
    w.get(h.artifactId) ? {
      artifactId: h.artifactId,
      ...w.get(h.artifactId),
      reasons: w.get(h.artifactId).reasons.map((I) => `identity: ${I}`)
    } : { artifactId: h.artifactId, ...Kt("identity: Not evaluated because protection is not established.") },
    {
      artifactId: h.artifactId,
      ...h.validity,
      reasons: h.validity.reasons.map((I) => `validity: ${I}`)
    },
    ...f.get(h.artifactId) ? [{ artifactId: h.artifactId, ...ae(
      f.get(h.artifactId).state,
      [`status: ${f.get(h.artifactId).reason}`],
      [...f.get(h.artifactId).sources]
    ) }] : [{
      artifactId: h.artifactId,
      ...Kt("status: Not evaluated because protection is not established.")
    }],
    ...h.relatedResources.map((I) => ({
      artifactId: I.id,
      ...ae(I.state, [`integrity (from ${h.artifactId}): ${I.reason}`], ["/relatedResource"])
    }))
  ], y = /* @__PURE__ */ new Map();
  for (const h of m) {
    const I = [
      ["protection", h.protection.state, h.protection.reasons.join(" ")],
      ["identity", w.get(h.artifactId)?.state ?? "not_established", w.get(h.artifactId)?.reasons.join(" ") ?? "not evaluated"],
      ["validity", h.validity.state, h.validity.reasons.join(" ")],
      ["status", f.get(h.artifactId)?.state ?? "not_established", f.get(h.artifactId)?.reason ?? "not evaluated"]
    ], A = je(I.map((O) => O[1])), R = S.get(h.artifactId);
    y.set(h.artifactId, {
      uri: h.artifactId,
      usable: A,
      reason: I.filter((O) => O[1] !== "established").map((O) => `${O[0]}: ${O[2]}`).join("; ") || "usable",
      ...A === "established" ? { document: o(h.artifactId) } : {},
      ...R ? { suspension: { state: R.state, reason: R.reason } } : {}
    });
  }
  const d = [], l = [];
  m.forEach((h, I) => {
    const A = I === 0 ? "target" : "supplied-evidence", R = Zr(h.artifactId, h.digestSRI, A, e);
    for (const q of h.checks)
      d.push({
        gate: uh[q.check],
        nodeUse: R,
        predicate: q.check,
        state: q.state,
        execution: "executed",
        reason: q.reason,
        sources: [h.artifactId]
      });
    for (const q of h.relatedResources)
      d.push({
        gate: 1,
        nodeUse: R,
        predicate: "related-resource-integrity",
        state: q.state,
        execution: "executed",
        reason: `${q.id}: ${q.reason}`,
        sources: ["/relatedResource", q.id]
      });
    const O = w.get(h.artifactId);
    d.push(O ? {
      gate: 1,
      nodeUse: R,
      predicate: "resource-identity",
      state: O.state,
      execution: "executed",
      reason: O.reasons.join(" "),
      sources: [...O.sourcePointers]
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
      state: h.validity.state,
      execution: h.validity.execution,
      reason: h.validity.reasons.join(" ") || "Not evaluated.",
      sources: [...h.validity.sourcePointers]
    });
    const M = f.get(h.artifactId);
    d.push(M ? {
      gate: 3,
      nodeUse: R,
      predicate: "credential-status",
      state: M.state,
      execution: "executed",
      reason: M.reason,
      sources: [...M.sources]
    } : {
      gate: 3,
      nodeUse: R,
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
  for (const [h, I] of p)
    I.digestSRI !== void 0 && l.push({ uri: h, digestSRI: I.digestSRI, kind: "status", source: "catalog", observedAt: e.evaluationTime });
  return {
    target: u,
    artifacts: m,
    facts: y,
    verificationOf: b,
    artifactVerification: m.flatMap(b),
    trace: d,
    resources: l
  };
}
const zh = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/, Vs = Object.freeze({ "kg/kg": 0, "mg/kg": -6 });
function Kr(e) {
  if (typeof e != "string" || !zh.test(e)) return;
  const [t, n = ""] = e.split(".");
  return { n: BigInt(`${t}${n}`), scale: n.length };
}
function un(e, t) {
  const n = Kr(e), i = typeof t == "string" ? Vs[t] : void 0;
  if (!(n === void 0 || i === void 0))
    return i <= 0 ? { n: n.n, scale: n.scale - i } : { n: n.n * 10n ** BigInt(i), scale: n.scale };
}
function $e(e, t) {
  const n = Math.max(e.scale, t.scale), i = e.n * 10n ** BigInt(n - e.scale), c = t.n * 10n ** BigInt(n - t.scale);
  return i < c ? -1 : i > c ? 1 : 0;
}
function Uh(e, t) {
  const n = Math.max(e.scale, t.scale);
  return { n: e.n * 10n ** BigInt(n - e.scale) + t.n * 10n ** BigInt(n - t.scale), scale: n };
}
function on(e) {
  const t = e.n.toString().padStart(e.scale + 1, "0");
  if (e.scale === 0) return t;
  const n = t.slice(-e.scale).replace(/0+$/, "");
  return n.length === 0 ? t.slice(0, -e.scale) : `${t.slice(0, -e.scale)}.${n}`;
}
function vs(e) {
  const t = e.range;
  if (t === void 0) return "Scope record has no range.";
  const n = un(t.from, t.unit), i = un(t.to, t.unit);
  return n === void 0 || i === void 0 ? `Unsupported or malformed range ${String(t.from)}–${String(t.to)} ${String(t.unit)}.` : $e(n, i) > 0 ? "Scope record range is reversed." : { low: n, high: i };
}
const Ar = (e) => Array.isArray(e) ? e.filter((t) => typeof t == "string") : [], Ec = (e, t) => e.length > 0 && e.every((n) => t.includes(n));
function Vh(e, t) {
  if (e.length === 0) return { state: "not_established", reason: "The projected scope has no records.", witnesses: [] };
  const n = [];
  for (const i of e) {
    const c = vs(i);
    if (typeof c == "string")
      return { state: /reversed/.test(c) ? "contradicted" : "not_established", reason: `${String(i.id)}: ${c}`, witnesses: n };
    const r = Ar(i.allowedPropertyIris), s = Ar(i.allowedMethodIris);
    if (r.length === 0 || s.length === 0 || typeof i.matrixIri != "string" || typeof i.formIri != "string" || typeof i.quantityKindIri != "string")
      return { state: "not_established", reason: `${String(i.id)}: a restricted dimension is missing or empty.`, witnesses: n };
    const a = t.find((o) => {
      const u = vs(o);
      return typeof u != "string" && o.matrixIri === i.matrixIri && o.formIri === i.formIri && o.quantityKindIri === i.quantityKindIri && Ec(r, Ar(o.allowedPropertyIris)) && Ec(s, Ar(o.allowedMethodIris)) && $e(c.low, u.low) >= 0 && $e(c.high, u.high) <= 0;
    });
    if (a === void 0)
      return { state: "contradicted", reason: `${String(i.id)} is not contained in any single parent record.`, witnesses: n };
    n.push({ child: String(i.id), parent: String(a.id) });
  }
  return { state: "established", reason: `Each projected record lies within one parent record (${n.map((i) => `${i.child} ⊆ ${i.parent}`).join("; ")}).`, witnesses: n };
}
const cn = "https://vc4qi.example/bindings/rm/1#", dn = Object.freeze({
  issueRmCertificate: `${cn}issueRmCertificate`,
  maintainRmScope: `${cn}maintainRmScope`,
  issueRmStudy: `${cn}issueRmStudy`
}), _e = (e, t, n = []) => ({ id: e, state: "established", reason: t, sources: n }), ke = (e, t, n = []) => ({ id: e, state: "contradicted", reason: t, sources: n }), me = (e, t, n = []) => ({ id: e, state: "not_established", reason: t, sources: n }), wt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Me = (e) => Array.isArray(e) ? e : [], He = (e) => wt(e.credentialSubject) ? e.credentialSubject : {}, bs = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0, dt = (e, t) => Me(He(e).permittedActivity).includes(t);
function jd(e, t = "RmAuthorizationPolicy") {
  return Me(e.termsOfUse).filter(wt).filter((n) => n.type === t && wt(n.authorizationCredential)).map((n) => n.authorizationCredential).filter((n) => typeof n.id == "string").map((n) => ({ id: n.id, type: n.type }));
}
function et(e, t, n, i, c, r = "RmAuthorizationPolicy") {
  const s = jd(t, r).filter((u) => u.type === n).map((u) => u.id);
  if (s.length === 0)
    return { basis: me(e, `No recognized authorization policy references a ${n}.`, ["/termsOfUse"]) };
  if (s.length > 1)
    return { basis: me(e, `Several ${n} references; this binding has no deterministic selection.`, ["/termsOfUse"]) };
  const a = s[0];
  if (c.includes(a))
    return { basis: me(e, `Circular authorization: ${a} is already on the evaluation path.`, ["/termsOfUse", a]) };
  const o = i(a);
  return o === void 0 ? { basis: me(e, `Referenced ${n} ${a} is unavailable.`, ["/termsOfUse", a]) } : o.usable !== "established" || o.document === void 0 ? { basis: {
    id: e,
    state: o.usable === "contradicted" ? "contradicted" : "not_established",
    reason: `Referenced ${n} ${a} is not usable: ${o.reason}`,
    sources: ["/termsOfUse", a]
  } } : bs(o.document) !== n ? { basis: ke(e, `Reference declares ${n}, but ${a} is a ${String(bs(o.document))}.`, ["/termsOfUse", a]) } : { basis: _e(e, `References ${n} ${a}.`, ["/termsOfUse", a]), node: o };
}
function ut(e, t, n, i) {
  const c = He(t).id;
  return typeof c != "string" || typeof n != "string" ? me(e, `${i}: grantee or exercising actor is missing.`, ["/credentialSubject/id", "/issuer"]) : c === n ? _e(e, `${i}: grantee ${c} is the exercising actor.`, ["/credentialSubject/id", "/issuer"]) : ke(e, `${i}: grantee ${c} is not the exercising actor ${n}.`, ["/credentialSubject/id", "/issuer"]);
}
function Rt(e, t, n, i) {
  const c = i.trustAnchors.find((r) => r.id === t.issuer);
  return c === void 0 ? me(e, `${String(t.issuer)} is not a configured trust anchor.`, ["/issuer"]) : c.purposes.includes(n) ? _e(e, `${String(t.issuer)} is a configured anchor for ${n}.`, ["/issuer"]) : me(e, `${String(t.issuer)} is an anchor, but not for ${n}.`, ["/issuer"]);
}
function Pt(e, t) {
  const n = "scope-in-force-at-activity", i = He(e).activityTime, c = Date.parse(String(i));
  if (typeof i != "string" || !Number.isFinite(c))
    return me(n, "The certificate states no activity time.", ["/credentialSubject/activityTime"]);
  for (const [r, s] of t) {
    const a = Date.parse(String(s.validFrom)), o = Date.parse(String(s.validUntil));
    if (!Number.isFinite(a) || c < a)
      return me(n, `${r} is valid only from ${String(s.validFrom)}, after the activity at ${i}; a later scope cannot authorize it.`, ["/credentialSubject/activityTime", "/validFrom"]);
    if (Number.isFinite(o) && c > o)
      return me(n, `${r} expired at ${String(s.validUntil)}, before the activity at ${i}.`, ["/credentialSubject/activityTime", "/validUntil"]);
  }
  return _e(n, `${t.map((r) => r[0]).join(" and ")} ${t.length > 1 ? "were" : "was"} in force at the activity time ${i}.`, ["/credentialSubject/activityTime"]);
}
function pe(e, t, n, i) {
  return { id: e, state: je(t.map((c) => c.state)), execution: "executed", bases: t, chain: n, ...i ? { scope: i } : {} };
}
function Fh(e, t, n, i) {
  const c = e.document, r = [], s = [e.uri], a = et("authorizing-reference", c, "RmOperationalScope", t, i);
  if (r.push(a.basis), !a.node) return pe("operational-scope", r, s);
  const o = a.node.document;
  s.push(a.node.uri), r.push(ut("principal-binding", o, c.issuer, "Operational scope O")), r.push(o.issuer === He(o).id ? _e("self-maintained-scope", "O is issued by its own grantee.", ["/issuer"]) : ke("self-maintained-scope", "O is not issued by its own grantee.", ["/issuer"])), r.push(dt(o, dn.issueRmCertificate) ? _e("activity-permission", "O permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : ke("activity-permission", "O does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"]));
  const u = et("maintenance-grant", o, "RmAccreditation", t, [...i, a.node.uri]);
  if (r.push(u.basis), !u.node) return pe("operational-scope", r, s);
  const m = u.node.document;
  s.push(u.node.uri), r.push(ut("accreditation-grantee", m, o.issuer, "Accreditation A")), r.push(dt(m, dn.maintainRmScope) && dt(m, dn.issueRmCertificate) ? _e("projection-permission", "A permits maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]) : ke("projection-permission", "A does not permit maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]));
  const g = Vh(Me(He(o).scope).filter(wt), Me(He(m).scope).filter(wt));
  return r.push({ id: "bounded-projection", state: g.state, reason: g.reason, sources: ["/credentialSubject/scope"] }), r.push(Rt("trust-anchor", m, "accredit-rm-producers", n)), r.push(Pt(c, [["O", o], ["A", m]])), pe("operational-scope", r, s, a.node.uri);
}
function Bh(e, t, n, i) {
  const c = e.document, r = [], s = [e.uri], a = et("authorizing-reference", c, "RmAccreditation", t, i);
  if (r.push(a.basis), !a.node) return pe("direct-accreditation", r, s);
  const o = a.node.document;
  return s.push(a.node.uri), r.push(ut("principal-binding", o, c.issuer, "Accreditation A")), r.push(dt(o, dn.issueRmCertificate) ? _e("activity-permission", "A permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : ke("activity-permission", "A does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"])), r.push(Rt("trust-anchor", o, "accredit-rm-producers", n)), r.push(Pt(c, [["A", o]])), pe("direct-accreditation", r, s, a.node.uri);
}
const Gh = Object.freeze({
  "operational-scope": Fh,
  "direct-accreditation": Bh
});
function Hh(e, t, n) {
  const i = "restriction:accreditation-suspension", c = e.document.issuer, r = /* @__PURE__ */ new Set([e.uri]), s = [e.document], a = [];
  for (; s.length > 0; )
    for (const m of jd(s.shift())) {
      if (r.has(m.id)) continue;
      r.add(m.id);
      const g = t(m.id);
      if (g?.usable !== "established" || g.document === void 0) continue;
      s.push(g.document);
      const p = g.document, f = n.trustAnchors.some((w) => w.id === p.issuer && w.purposes.includes("accredit-rm-producers"));
      bs(p) === "RmAccreditation" && f && He(p).id === c && a.push(g);
    }
  if (a.length === 0)
    return me(i, `No accreditation of ${String(c)} is reached, so the absence of a suspension is not established.`);
  const o = a.map((m) => m.suspension === void 0 ? me(i, `${m.uri} carries no suspension status.`, [m.uri]) : { id: i, state: m.suspension.state, reason: `${m.uri}: ${m.suspension.reason}`, sources: [m.uri] }), u = je(o.map((m) => m.state));
  return {
    id: i,
    state: u,
    reason: u === "contradicted" ? `The actor's certification activity is suspended. ${o.filter((m) => m.state === "contradicted").map((m) => m.reason).join(" ")}` : o.map((m) => m.reason).join(" "),
    sources: a.map((m) => m.uri)
  };
}
const Jh = Object.freeze({
  "accreditation-suspension": Hh
});
function vn(e, t, n) {
  const i = [
    ...t,
    ...n.map((u) => ({ id: u, state: "not_established", execution: "not_run", bases: [], chain: [] }))
  ], c = e.length === 0 ? "established" : je(e.map((u) => u.state)), r = i.length === 0 ? "not_established" : fn(i.map((u) => u.state)), s = je([c, r]), a = i.find((u) => u.state === "established"), o = s === "established" ? `Authorized through route ${a.id}; global restrictions hold.` : c === "contradicted" ? "An applicable global restriction applies to every route." : r === "contradicted" ? "Every permitted route is contradicted." : n.length > 0 ? "The route search stopped at its budget before every route was evaluated." : "No complete route is established.";
  return { state: s, reason: o, restrictions: e, routes: i };
}
function Qr(e, t) {
  const n = e.routes.filter((c) => c.execution === "executed").map((c) => {
    const s = (c.scope === void 0 ? void 0 : t(c)) ?? me("claim-coverage", "The route did not reach a scope credential.");
    return { ...c, bases: [...c.bases, s], state: je([c.state, s.state]) };
  }), i = e.routes.filter((c) => c.execution === "not_run").map((c) => c.id);
  return vn(e.restrictions, n, i);
}
function Zh(e, t, n) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] };
  const i = e, c = n.authority.certificateRoutes, r = n.authority.maxRoutes, s = c.slice(0, r).map((o) => {
    const u = Gh[o];
    return u === void 0 ? pe(o, [me("installed-evaluator", `Route ${o} has no installed evaluator.`)], [i.uri]) : u(i, t, n, [i.uri]);
  }), a = n.authority.globalRestrictions.map((o) => {
    const u = Jh[o];
    return u === void 0 ? me(`restriction:${o}`, `Global restriction ${o} has no installed evaluator.`) : u(i, t, n);
  });
  return vn(a, s, c.slice(r));
}
function Kh(e, t, n, i) {
  const c = e.document, r = [], s = [e.uri], a = et("laboratory-authority-reference", c, "RmLabAuthority", t, i);
  if (r.push(a.basis), !a.node) return pe("laboratory-authority", r, s);
  const o = a.node.document;
  s.push(a.node.uri), r.push(ut("laboratory-binding", o, c.issuer, "Laboratory authority H")), r.push(dt(o, dn.issueRmStudy) ? _e("study-permission", "H permits issuing RM studies.", ["/credentialSubject/permittedActivity"]) : ke("study-permission", "H does not permit issuing RM studies.", ["/credentialSubject/permittedActivity"]));
  const u = He(c), m = Me(He(o).scope).filter(wt).some((g) => g.matrixIri === u.matrixIri && Me(g.allowedPropertyIris).includes(u.propertyIri) && Me(g.studyTypeIris).includes(u.studyTypeIri));
  return r.push(m ? _e("study-scope", "H covers this matrix, property and study type.", ["/credentialSubject/scope"]) : ke("study-scope", "H does not cover this matrix, property and study type.", ["/credentialSubject/scope"])), r.push(Rt("laboratory-anchor", o, "recognize-rm-laboratories", n)), pe("laboratory-authority", r, s);
}
function Qh(e, t, n) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const i = e.document, c = Me(i.evidence).filter(wt).filter((S) => S.type === "RmStudyReference").map((S) => String(S.id));
  if (c.length === 0)
    return { state: "not_established", reason: "D cites no required study.", bases: [me("study-reference", "No RmStudyReference in evidence.", ["/evidence"])], chain: [e.uri] };
  if (c.length > 1)
    return { state: "not_established", reason: "Several study references; this binding has no composition for them.", bases: [me("study-reference", "Ambiguous study references.", ["/evidence"])], chain: [e.uri] };
  const r = c[0], s = t(r);
  if (s === void 0) {
    const S = me("study-reference", `Required study ${r} is unavailable.`, ["/evidence", r]);
    return { state: "not_established", reason: S.reason, bases: [S], chain: [e.uri] };
  }
  if (s.usable !== "established" || s.document === void 0) {
    const S = {
      id: "study-reference",
      state: s.usable === "contradicted" ? "contradicted" : "not_established",
      reason: `Required study ${r} is not usable: ${s.reason}`,
      sources: ["/evidence", r]
    };
    return { state: S.state, reason: S.reason, bases: [S], chain: [e.uri] };
  }
  const a = s.document, o = He(a), u = He(i), m = wt(Me(u.materialPropertiesList)[0]) ? Me(Me(u.materialPropertiesList)[0].results)[0] : void 0, g = Me(u.materials)[0], p = [_e("study-reference", `Cites study ${r}.`, ["/evidence", r])];
  p.push(o.id === u.id ? _e("same-batch", `S concerns batch ${String(o.id)}.`, ["/credentialSubject/id"]) : ke("same-batch", `S concerns ${String(o.id)}, not batch ${String(u.id)}.`, ["/credentialSubject/id"])), p.push(o.propertyIri === m?.propertyIri && o.matrixIri === g?.matrixIri ? _e("same-property-and-matrix", "S concerns the certified property and matrix.", ["/credentialSubject/propertyIri"]) : ke("same-property-and-matrix", "S concerns another property or matrix.", ["/credentialSubject/propertyIri"])), p.push(o.studyTypeIri === `${cn}Homogeneity` && o.outcomeIri === `${cn}Homogeneous` ? _e("study-outcome", "S reports the batch homogeneous.", ["/credentialSubject/outcomeIri"]) : ke("study-outcome", "S does not report a homogeneous batch.", ["/credentialSubject/outcomeIri"]));
  const f = Date.parse(String(o.activityTime)), w = Date.parse(String(u.activityTime));
  p.push(Number.isFinite(f) && Number.isFinite(w) ? f <= w ? _e("study-precedes-certification", "The study precedes the certification activity.", ["/credentialSubject/activityTime"]) : ke("study-precedes-certification", "The study postdates the certification activity.", ["/credentialSubject/activityTime"]) : me("study-precedes-certification", "An activity time is missing.", ["/credentialSubject/activityTime"]));
  const x = Kh(s, t, n, [e.uri, r]);
  p.push(...x.bases);
  const v = je(p.map((S) => S.state));
  return {
    state: v,
    reason: v === "established" ? "Required study is applicable and independently authorized." : v === "contradicted" ? "Required study is contradicted." : "Required study is not established.",
    bases: p,
    chain: [e.uri, ...x.chain]
  };
}
const _t = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Rd = (e) => Array.isArray(e) ? e : [], Cc = (e) => Rd(e).filter((t) => typeof t == "string"), ce = (e) => String(e).split(/[#/]/).pop();
function Xh(e, t, n) {
  const i = [t], c = _t(e.credentialSubject) ? e.credentialSubject : {}, r = Rd(c.materials).filter(_t);
  if (r.length !== 1) return { state: "not_established", reason: "The certificate must name exactly one material.", sources: ["/credentialSubject/materials"] };
  const s = r[0];
  if (!_t(n)) return { state: "not_established", reason: `No result at ${t}.`, sources: i };
  const a = _t(n.data) && _t(n.data.quantity) ? n.data.quantity : void 0;
  if (a === void 0) return { state: "not_established", reason: "The result has no quantity.", sources: i };
  const o = _t(a.unit) ? a.unit.ucumCode : void 0;
  if (typeof o != "string" || Vs[o] === void 0)
    return { state: "not_established", reason: `Unit ${String(o)} has no supported mapping (mg/kg, kg/kg).`, sources: [`${t}/data/quantity/unit`] };
  const u = _t(a.uncertainty) ? a.uncertainty : void 0, m = Kr(u?.coverageFactor);
  if (m === void 0 || $e(m, { n: 2n, scale: 0 }) !== 0)
    return { state: "not_established", reason: `Coverage factor ${String(u?.coverageFactor)} is not the binding's k = 2.`, sources: [`${t}/data/quantity/uncertainty`] };
  const g = un(a.value, o), p = un(u?.expandedUncertainty, o);
  if (g === void 0 || p === void 0)
    return { state: "not_established", reason: "Value or expanded uncertainty is not a supported decimal.", sources: [`${t}/data/quantity`] };
  const f = {
    matrixIri: s.matrixIri,
    formIri: s.formIri,
    propertyIri: n.propertyIri,
    methodIri: n.methodIri,
    quantityKindIri: a.quantityKind
  }, w = Object.entries(f).filter(([, x]) => typeof x != "string").map(([x]) => x);
  return w.length > 0 ? { state: "not_established", reason: `Missing governed identifier: ${w.join(", ")}.`, sources: i } : {
    state: "established",
    reason: `Mapped ${ce(f.propertyIri)} by ${ce(f.methodIri)} in ${ce(f.matrixIri)}: ${String(a.value)} ± ${String(u?.expandedUncertainty)} ${o} (k = 2).`,
    sources: i,
    coordinates: { ...f, value: g, uncertainty: p }
  };
}
function Wh(e, t, n, i) {
  if (t.includes(e)) return { state: "established", reason: `method ${ce(e)}` };
  const c = n.find((s) => s.method === e && t.includes(s.revises));
  if (c === void 0) return { state: "contradicted", reason: `method ${ce(e)} is not allowed` };
  const r = `${ce(c.revises)} → ${ce(e)}`;
  switch (i) {
    case "accept-successor":
      return { state: "established", reason: `method ${ce(e)} as accepted successor (${r})` };
    case "require-extension":
      return { state: "contradicted", reason: `method ${ce(e)} needs an explicit scope extension (${r})` };
    default:
      return { state: "not_established", reason: `no governed ${r} succession rule in the profile` };
  }
}
function Yh(e, t, n, i) {
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: ["/credentialSubject/scope"] };
  const c = t.map((a) => {
    const o = String(a.id), u = vs(a);
    if (typeof u == "string")
      return { id: o, state: /reversed/.test(u) ? "contradicted" : "not_established", reason: `${ce(o)}: ${u}` };
    const m = [];
    a.matrixIri !== e.matrixIri && m.push(`matrix ${ce(e.matrixIri)} ≠ ${ce(a.matrixIri)}`), a.formIri !== e.formIri && m.push(`form ${ce(e.formIri)} ≠ ${ce(a.formIri)}`), a.quantityKindIri !== e.quantityKindIri && m.push(`quantity kind ${ce(e.quantityKindIri)} ≠ ${ce(a.quantityKindIri)}`), Cc(a.allowedPropertyIris).includes(e.propertyIri) || m.push(`property ${ce(e.propertyIri)} is not allowed`), $e(e.value, u.low) < 0 && m.push("value is below the range"), $e(e.value, u.high) > 0 && m.push("value is above the range");
    const g = Wh(e.methodIri, Cc(a.allowedMethodIris), n, i);
    if (m.length > 0 || g.state === "contradicted")
      return { id: o, state: "contradicted", reason: `${ce(o)}: ${[...m, ...g.state === "contradicted" ? [g.reason] : []].join("; ")}` };
    if (g.state === "not_established") return { id: o, state: "not_established", reason: `${ce(o)}: ${g.reason}` };
    const p = on(Pr(u.low, "mg/kg")), f = on(Pr(u.high, "mg/kg"));
    return {
      id: o,
      state: "established",
      reason: `${ce(o)} covers ${ce(e.propertyIri)}, ${g.reason}, ${ce(e.matrixIri)}/${ce(e.formIri)}, ${on(Pr(e.value, "mg/kg"))} mg/kg within ${p}–${f} mg/kg`
    };
  }), r = fn(c.map((a) => a.state)), s = c.find((a) => a.state === "established");
  return {
    state: r,
    reason: s ? s.reason : `No single scope record covers the claim (${c.map((a) => a.reason).join(" | ")}).`,
    sources: ["/credentialSubject/scope"],
    ...s ? { record: s.id } : {}
  };
}
function Pr(e, t) {
  const n = Vs[t];
  return n >= 0 ? { n: e.n, scale: e.scale + n } : e.scale + n >= 0 ? { n: e.n, scale: e.scale + n } : { n: e.n * 10n ** BigInt(-(e.scale + n)), scale: 0 };
}
function em(e, t, n) {
  if (e.propertyIri !== t.propertyIri || e.quantityKindIri !== t.quantityKindIri)
    return { state: "not_established", reason: `Requirement ${t.id} does not apply to this claim's property and quantity kind.`, sources: [] };
  const i = un(t.upperLimit.value, t.upperLimit.unit);
  if (i === void 0) return { state: "not_established", reason: `Requirement ${t.id} has an unsupported limit.`, sources: [] };
  const c = t.upperLimit.unit, r = (g) => on(Pr(g, c)), s = n.acceptWhen === "value-plus-expanded-uncertainty-at-most-limit", a = s ? Uh(e.value, e.uncertainty) : e.value, o = $e(a, i) <= 0, m = `${s ? `${r(e.value)} + ${r(e.uncertainty)} = ${r(a)}` : r(e.value)} ${o ? "≤" : ">"} ${r(i)} ${c}`;
  return {
    state: o ? "established" : "contradicted",
    reason: `${o ? "Conforms" : "Does not conform"} under ${n.id}: ${m}.`,
    sources: [],
    arithmetic: m
  };
}
const tm = /^\/credentialSubject\/materialPropertiesList\/(0|[1-9][0-9]*)\/results\/(0|[1-9][0-9]*)$/;
async function nm(e, t, n, i) {
  if (n.id !== ta || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${ta}@${n.version}.`);
  const c = Ds(e, n, i);
  if (c !== void 0) return Object.freeze({ result: zs(e, c), artifacts: Object.freeze([]) });
  const r = await Us(e, t, n, i), { target: s, artifacts: a, facts: o, verificationOf: u, artifactVerification: m } = r, g = ($) => o.get($), p = Zh(o.get(e.targetId), g, i), f = Qh(o.get(e.targetId), g, i), w = p.routes.find(($) => $.state === "established"), x = o.get(e.targetId)?.document, v = (Array.isArray(n.scopeAndMapping.methodRevisions) ? n.scopeAndMapping.methodRevisions : []).filter(($) => typeof $?.method == "string" && typeof $?.revises == "string"), S = ($) => {
    const E = o.get($)?.document?.credentialSubject;
    return Array.isArray(E?.scope) ? E.scope : [];
  }, b = e.selectedClaims.map(($) => {
    if (!(x !== void 0 && tm.test($.sourcePointer) && Zt(x, $.sourcePointer) !== void 0)) {
      const k = x === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${$.sourcePointer} is not a result in the usable target.`;
      return {
        claim: $,
        mapping: void 0,
        coverage: /* @__PURE__ */ new Map(),
        result: { claimId: $.id, routeWitnessIds: [], ...ae("not_established", [k]) }
      };
    }
    const D = Xh(x, $.sourcePointer, Zt(x, $.sourcePointer)), P = /* @__PURE__ */ new Map();
    if (D.coordinates === void 0)
      return { claim: $, mapping: D, coverage: P, result: {
        claimId: $.id,
        routeWitnessIds: [],
        ...ae(D.state, [`Gate 4: ${D.reason}`], [$.sourcePointer])
      } };
    const G = D.coordinates, B = Qr(p, (k) => {
      const z = Yh(G, S(k.scope), v, i.mapping.methodSuccession), N = [k.scope, ...z.sources];
      return P.set(k.id, { ...z, sources: N }), { id: "claim-coverage", state: z.state, reason: z.reason, sources: N };
    }), H = B.routes.find((k) => k.state === "established"), C = H ? P.get(H.id)?.record : void 0;
    return { claim: $, mapping: D, coverage: P, result: {
      claimId: $.id,
      routeWitnessIds: B.state === "established" && H ? [`route:${H.id}`, ...H.chain, `record:${C}`] : [],
      ...ae(B.state, [
        B.reason,
        ...H ? [P.get(H.id).reason] : [...P].map(([k, z]) => `${k}: ${z.reason}`)
      ], [$.sourcePointer])
    } };
  }), y = b.map(($) => $.result), d = [{
    obligationId: "rm-v1:required-study",
    witnessIds: f.state === "established" ? [...f.chain] : [],
    ...ae(f.state, [f.reason], ["/evidence"])
  }], l = (() => {
    if (!e.conformity) return { requested: !1, execution: "not_run" };
    const $ = { requested: !0, ...e.conformity }, E = i.conformity.requirements.find((H) => H.id === e.conformity.requirementId), D = i.conformity.decisionRules.find((H) => H.id === e.conformity.decisionRuleId);
    if (!E || !D)
      return { ...$, ...ae("not_established", [`Requirement ${e.conformity.requirementId} or decision rule ${e.conformity.decisionRuleId} is not configured in the verifier profile.`]) };
    const P = b.filter((H) => H.mapping?.coordinates?.propertyIri === E.propertyIri && H.mapping.coordinates.quantityKindIri === E.quantityKindIri);
    if (P.length !== 1)
      return { ...$, ...ae("not_established", [`Requirement ${E.id} must apply to exactly one selected claim; ${P.length} match.`]) };
    const G = P[0];
    if (G.result.state !== "established")
      return { ...$, ...Kt(`Not evaluated: claim ${G.claim.id} is not authorized.`) };
    const B = em(G.mapping.coordinates, E, D);
    return { ...$, ...ae(B.state, [B.reason], [G.claim.sourcePointer]) };
  })(), h = /* @__PURE__ */ new Set([
    e.targetId,
    ...w?.chain ?? [],
    ...f.state === "established" ? f.chain : []
  ]), I = [
    ...a.filter(($) => h.has($.artifactId)).flatMap(u).map(($) => $.state),
    ...y.map(($) => $.state),
    ...d.map(($) => $.state),
    ...l.requested ? [l.state] : []
  ], A = $s(I), R = [...r.trace], O = [...r.resources], M = Zr(s.artifactId, s.digestSRI, "target", e);
  for (const { claim: $, mapping: E, coverage: D } of b) {
    E && R.push({
      gate: 4,
      nodeUse: M,
      predicate: `claim-mapping:${$.id}`,
      state: E.state,
      execution: "executed",
      reason: E.reason,
      sources: [...E.sources]
    });
    for (const [P, G] of D)
      R.push({
        gate: 5,
        nodeUse: M,
        predicate: `claim-coverage:${$.id}:${P}`,
        state: G.state,
        execution: "executed",
        reason: G.reason,
        sources: [...G.sources]
      });
  }
  for (const $ of y)
    R.push({
      gate: 5,
      nodeUse: M,
      predicate: `claim-authorization:${$.claimId}`,
      state: $.state,
      execution: $.execution,
      reason: $.reasons.join(" "),
      sources: [...$.sourcePointers]
    });
  for (const $ of p.restrictions)
    R.push({
      gate: 5,
      nodeUse: M,
      predicate: $.id,
      state: $.state,
      execution: "executed",
      reason: $.reason,
      sources: [...$.sources]
    });
  R.push({
    gate: 5,
    nodeUse: M,
    predicate: "authority",
    state: p.state,
    execution: "executed",
    reason: p.reason,
    sources: w ? [...w.chain] : []
  });
  for (const $ of p.routes) {
    R.push($.execution === "not_run" ? {
      gate: 5,
      nodeUse: M,
      predicate: `route:${$.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: M,
      predicate: `route:${$.id}`,
      state: $.state,
      execution: "executed",
      reason: `Route ${$.id} is ${$.state}.`,
      sources: [...$.chain]
    });
    for (const E of $.bases)
      R.push({
        gate: 5,
        nodeUse: M,
        predicate: `route:${$.id}:${E.id}`,
        state: E.state,
        execution: "executed",
        reason: E.reason,
        sources: [...E.sources]
      });
  }
  for (const $ of f.bases)
    R.push({
      gate: 6,
      nodeUse: M,
      predicate: `support:${$.id}`,
      state: $.state,
      execution: "executed",
      reason: $.reason,
      sources: [...$.sources]
    });
  for (const $ of d)
    R.push({
      gate: 6,
      nodeUse: M,
      predicate: $.obligationId,
      state: $.state,
      execution: $.execution,
      reason: $.reasons.join(" "),
      sources: []
    });
  l.requested && R.push({
    gate: 6,
    nodeUse: M,
    predicate: `conformity:${l.requirementId}`,
    state: l.state,
    execution: l.execution,
    reason: l.reasons.join(" "),
    sources: []
  });
  const q = zr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: m,
    authorization: y,
    support: d,
    conformity: l,
    decision: A,
    trace: R,
    resources: O,
    limitations: [
      "Verification failures of credentials outside the selected route and support chains are reported but do not decide the request."
    ]
  });
  return Object.freeze({ result: q, artifacts: Object.freeze(a) });
}
const ws = "https://vc4qi.example/bindings/cal/1", rm = "https://vc4qi.example/contexts/cal/1", xs = "https://vc4qi.example/bindings/cal/1#", Lt = "https://vc4qi.example/schemas/cal/1/", im = Object.freeze({
  name: "calibration v1",
  schemas: Object.freeze({
    CalAccreditation: `${Lt}accreditation.json`,
    CalOperationalScope: `${Lt}operational-scope.json`,
    CalLegalMandate: `${Lt}legal-mandate.json`,
    CalCertificate: `${Lt}certificate.json`,
    CalTestReport: `${Lt}test-report.json`,
    BitstringStatusListCredential: `${Lt}status-list.json`
  }),
  contexts: (e) => e === "BitstringStatusListCredential" ? [Gt] : [Gt, rm]
}), qe = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Le = (e) => Array.isArray(e) ? e : [], ie = (e) => String(e).split(/[#/]/).pop(), sm = Object.freeze({ Pa: 0, kPa: 3, MPa: 6 });
function Ge(e, t) {
  const n = Kr(e), i = typeof t == "string" ? sm[t] : void 0;
  if (!(n === void 0 || i === void 0))
    return n.scale >= i ? { n: n.n, scale: n.scale - i } : { n: n.n * 10n ** BigInt(i - n.scale), scale: 0 };
}
const Ae = (e) => on({ n: e.n, scale: e.scale + 3 });
function Pd(e, t) {
  const n = [t];
  if (!qe(e) || typeof e.id != "string" || typeof e.quantityKindIri != "string")
    return { state: "not_established", reason: "The selected measurement group has no identifier or quantity kind.", sources: n };
  const i = [];
  for (const [r, s] of Le(e.results).entries()) {
    const a = qe(s) ? s : {}, o = Kr(a.coverageFactor);
    if (o === void 0 || $e(o, { n: 2n, scale: 0 }) !== 0)
      return { state: "not_established", reason: `Result ${r}: coverage factor ${String(a.coverageFactor)} is not the binding's k = 2.`, sources: n };
    const u = Ge(a.value, a.unit), m = Ge(a.expandedUncertainty, a.unit);
    if (u === void 0 || m === void 0)
      return { state: "not_established", reason: `Result ${r}: unit ${String(a.unit)} or a number has no supported mapping (Pa, kPa, MPa).`, sources: n };
    i.push({ value: u, uncertainty: m });
  }
  if (i.length === 0) return { state: "not_established", reason: "The measurement group has no results.", sources: n };
  const c = Le(e.methodIris).filter((r) => typeof r == "string");
  return {
    state: "established",
    reason: `Mapped ${ie(e.id)}: ${ie(e.quantityKindIri)}, ${i.length} result(s) in Pa, methods [${c.map(ie).join(", ")}].`,
    sources: n,
    group: { id: e.id, quantityKindIri: e.quantityKindIri, methodIris: c, results: i }
  };
}
function Ed(e, t, n) {
  const i = ["/credentialSubject/scope"];
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: i };
  const c = t.map((a) => {
    const o = String(a.id), u = qe(a.range) ? a.range : {}, m = Ge(u.from, u.unit), g = Ge(u.to, u.unit);
    if (m === void 0 || g === void 0) return { id: o, state: "not_established", reason: `${ie(o)}: unsupported or malformed range.` };
    if ($e(m, g) > 0) return { id: o, state: "contradicted", reason: `${ie(o)}: range is reversed.` };
    const p = qe(a.cmcFloor) ? a.cmcFloor : void 0, f = p === void 0 ? void 0 : Ge(p.value, p.unit);
    if (p !== void 0 && f === void 0) return { id: o, state: "not_established", reason: `${ie(o)}: unsupported CMC floor.` };
    const w = [];
    a.quantityKindIri !== e.quantityKindIri && w.push(`quantity kind ${ie(e.quantityKindIri)} ≠ ${ie(a.quantityKindIri)}`);
    const x = Le(a.allowedMethodIris).filter((S) => typeof S == "string"), v = e.methodIris.filter((S) => !x.includes(S));
    return v.length > 0 && w.push(`method ${v.map(ie).join(", ")} is not allowed`), e.results.forEach((S, b) => {
      ($e(S.value, m) < 0 || $e(S.value, g) > 0) && w.push(`result ${b} ${Ae(S.value)} kPa is outside ${Ae(m)}–${Ae(g)} kPa`), n && f !== void 0 && $e(S.uncertainty, f) < 0 && w.push(`result ${b} U = ${Ae(S.uncertainty)} kPa is below the admitted CMC ${Ae(f)} kPa`);
    }), w.length > 0 ? { id: o, state: "contradicted", reason: `${ie(o)}: ${w.join("; ")}` } : e.methodIris.length === 0 && x.length > 0 ? {
      id: o,
      state: "not_established",
      reason: `${ie(o)} restricts methods to [${x.map(ie).join(", ")}], but the group names no governed method.`
    } : {
      id: o,
      state: "established",
      reason: `${ie(o)} covers ${ie(e.id)}: ${ie(e.quantityKindIri)}, methods [${e.methodIris.map(ie).join(", ")}], ${e.results.length} result(s) within ${Ae(m)}–${Ae(g)} kPa${n && f !== void 0 ? ` and not below the CMC ${Ae(f)} kPa` : ""}`
    };
  }), r = fn(c.map((a) => a.state)), s = c.find((a) => a.state === "established");
  return s ? { state: r, reason: s.reason, sources: i, record: s.id } : { state: r, reason: `No single scope record covers the group (${c.map((a) => a.reason).join(" | ")}).`, sources: i };
}
function am(e, t, n) {
  const i = ["/credentialSubject/scope"];
  if (e.length === 0) return { state: "not_established", reason: "The operational scope has no records.", sources: i };
  const c = e.map((s) => {
    const a = qe(s.range) ? s.range : {}, o = Ge(a.from, a.unit), u = Ge(a.to, a.unit), m = qe(s.cmcFloor) ? s.cmcFloor : void 0, g = m === void 0 ? void 0 : Ge(m.value, m.unit);
    if (o === void 0 || u === void 0 || m !== void 0 && g === void 0)
      return { state: "not_established", reason: `${ie(s.id)}: unsupported or malformed range or CMC floor.` };
    const p = Le(s.allowedMethodIris), f = t.map((x) => {
      const v = qe(x.range) ? x.range : {}, S = Ge(v.from, v.unit), b = Ge(v.to, v.unit), y = qe(x.cmcFloor) ? x.cmcFloor : void 0, d = y === void 0 ? void 0 : Ge(y.value, y.unit);
      if (S === void 0 || b === void 0 || y !== void 0 && d === void 0)
        return { state: "not_established", reason: `${ie(x.id)}: unsupported or malformed range or CMC floor.` };
      const l = [];
      s.quantityKindIri !== x.quantityKindIri && l.push(`quantity kind ${ie(s.quantityKindIri)} ≠ ${ie(x.quantityKindIri)}`);
      const h = Le(x.allowedMethodIris), I = p.filter((A) => !h.includes(A));
      return p.length === 0 && h.length > 0 && l.push("the parent restricts methods, the child does not"), I.length > 0 && l.push(`method ${I.map(ie).join(", ")} is not in ${ie(x.id)}`), ($e(o, S) < 0 || $e(u, b) > 0) && l.push(`range ${Ae(o)}–${Ae(u)} kPa is not within ${Ae(S)}–${Ae(b)} kPa`), n && d !== void 0 && (g === void 0 ? l.push(`it states no CMC floor, but ${ie(x.id)} admits only ${Ae(d)} kPa`) : $e(g, d) < 0 && l.push(`CMC ${Ae(g)} kPa is below the admitted ${Ae(d)} kPa`)), l.length > 0 ? { state: "contradicted", reason: `${ie(s.id)} widens ${ie(x.id)}: ${l.join("; ")}` } : { state: "established", reason: `${ie(s.id)} lies within ${ie(x.id)}` };
    });
    if (f.length === 0) return { state: "not_established", reason: "The parent grant has no records." };
    const w = fn(f.map((x) => x.state));
    return w === "established" ? f.find((x) => x.state === "established") : { state: w, reason: f.map((x) => x.reason).join(" | ") };
  }), r = Bs(c.map((s) => s.state));
  return { state: r, reason: `${r === "established" ? "Bounded projection holds" : "Bounded projection fails"}: ${c.map((s) => s.reason).join("; ")}.`, sources: i };
}
const qt = (e) => qe(e.credentialSubject) ? e.credentialSubject : {}, Fs = (e, t, n, i, c) => dt(t, `${xs}${n}`) ? { id: e, state: "established", reason: `${c} permits ${i}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: e, state: "contradicted", reason: `${c} does not permit ${i}.`, sources: ["/credentialSubject/permittedActivity"] }, om = Object.freeze({
  CalCertificate: { activity: "issueCalibrationCertificate", what: "issuing calibration certificates", purpose: "accredit-calibration-laboratories" },
  CalTestReport: { activity: "issueTestReport", what: "issuing test reports", purpose: "accredit-testing-laboratories" }
}), Nr = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0;
function cm(e, t, n) {
  const i = e.document, c = [], r = [e.uri], s = om[Nr(i) ?? ""];
  if (s === void 0)
    return pe("direct-accreditation", [{
      id: "target-type",
      state: "not_established",
      reason: `No accreditation activity is installed for ${String(Nr(i))}.`,
      sources: ["/type"]
    }], r);
  const a = et("authorizing-reference", i, "CalAccreditation", t, [e.uri], "CalAuthorizationPolicy");
  if (c.push(a.basis), !a.node) return pe("direct-accreditation", c, r);
  const o = a.node.document;
  return r.push(a.node.uri), c.push(ut("principal-binding", o, i.issuer, "Accreditation CA")), c.push(Fs("activity-permission", o, s.activity, s.what, "CA")), c.push(Rt("trust-anchor", o, s.purpose, n)), c.push(Pt(i, [["CA", o]])), pe("direct-accreditation", c, r, a.node.uri);
}
function dm(e, t, n) {
  const i = e.document, c = [], r = [e.uri], s = et("authorizing-reference", i, "CalOperationalScope", t, [e.uri], "CalAuthorizationPolicy");
  if (c.push(s.basis), !s.node) return pe("operational-scope", c, r);
  const a = s.node.document;
  r.push(s.node.uri), c.push(ut("principal-binding", a, i.issuer, "Operational scope O")), c.push(a.issuer === qt(a).id ? { id: "self-maintained-scope", state: "established", reason: "O is issued by its own grantee.", sources: ["/issuer"] } : { id: "self-maintained-scope", state: "contradicted", reason: "O is not issued by its own grantee.", sources: ["/issuer"] }), c.push(Fs("activity-permission", a, "issueCalibrationCertificate", "issuing calibration certificates", "O"));
  const o = et("maintenance-grant", a, "CalAccreditation", t, [e.uri, s.node.uri], "CalAuthorizationPolicy");
  if (c.push(o.basis), !o.node) return pe("operational-scope", c, r);
  const u = o.node.document;
  r.push(o.node.uri), c.push(ut("accreditation-grantee", u, a.issuer, "Accreditation CA")), c.push(dt(u, `${xs}maintainCalibrationScope`) && dt(u, `${xs}issueCalibrationCertificate`) ? { id: "projection-permission", state: "established", reason: "CA permits maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] } : { id: "projection-permission", state: "contradicted", reason: "CA does not permit maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] });
  const m = am(
    Le(qt(a).scope).filter(qe),
    Le(qt(u).scope).filter(qe),
    n.bindingRules.applyCmcFloor === !0
  );
  return c.push({ id: "bounded-projection", state: m.state, reason: m.reason, sources: m.sources }), c.push(Rt("trust-anchor", u, "accredit-calibration-laboratories", n)), c.push(Pt(i, [["O", a], ["CA", u]])), pe("operational-scope", c, r, s.node.uri);
}
function lm(e, t, n) {
  const i = e.document, c = [], r = [e.uri], s = et("authorizing-reference", i, "CalLegalMandate", t, [e.uri], "CalAuthorizationPolicy");
  if (c.push(s.basis), !s.node) return pe("statutory-mandate", c, r);
  const a = s.node.document;
  return r.push(s.node.uri), c.push(ut("principal-binding", a, i.issuer, "Mandate M")), c.push(Fs("activity-permission", a, "issueCalibrationCertificate", "issuing calibration certificates", "M")), c.push(Rt("trust-anchor", a, "designate-national-metrology-institutes", n)), c.push(Pt(i, [["M", a]])), pe("statutory-mandate", c, r, s.node.uri);
}
const Cd = Object.freeze({
  "direct-accreditation": cm,
  "operational-scope": dm,
  "statutory-mandate": lm
}), Bs = (e) => e.length === 0 ? "not_established" : je(e);
function um(e, t, n, i) {
  const c = n.authority.certificateRoutes, r = c.slice(0, n.authority.maxRoutes).map((g) => {
    const p = Cd[g];
    return p === void 0 ? pe(g, [{ id: "installed-evaluator", state: "not_established", reason: `Route ${g} has no installed evaluator.`, sources: [] }], [e.uri]) : p(e, t, n);
  }), s = vn([], r, c.slice(n.authority.maxRoutes)), a = Le(qt(e.document).measurementGroups);
  if (a.length === 0)
    return { state: "not_established", reason: "The certificate has no measurement groups.", chain: [e.uri], bases: [] };
  const o = [];
  let u = [e.uri];
  a.forEach((g, p) => {
    const f = `/credentialSubject/measurementGroups/${p}`, w = Pd(g, f);
    if (w.group === void 0) {
      o.push({ id: `group-${p}`, state: w.state, reason: `Group ${p}: ${w.reason}`, sources: [f] });
      return;
    }
    const x = w.group, v = Qr(s, (y) => {
      const d = Le(qt(t(y.scope)?.document ?? {}).scope).filter(qe), l = Ed(x, d, i);
      return { id: "claim-coverage", state: l.state, reason: l.reason, sources: [y.scope, ...l.sources] };
    }), S = v.routes.find((y) => y.state === "established");
    S && (u = S.chain);
    const b = S ? `through ${S.id}` : v.routes.map((y) => `${y.id} ${y.state}: ${y.bases.filter((d) => d.state !== "established").map((d) => d.reason).join(" ")}`).join(" | ");
    o.push({ id: `group-${p}`, state: v.state, reason: `Group ${p} (${ie(x.id)}) is ${v.state} ${b}`.trim(), sources: [f] });
  });
  const m = Bs(o.map((g) => g.state));
  return { state: m, reason: `The certificate's own authority is ${m}.`, chain: u, bases: o };
}
function pm(e, t, n, i) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const c = e.document, r = (h) => ({ state: h.state, reason: h.reason, bases: [h], chain: [e.uri] }), s = Le(c.evidence).filter(qe).filter((h) => h.type === "CalCalibrationReference").map((h) => String(h.id));
  if (s.length === 0) return r({ id: "calibration-reference", state: "not_established", reason: "The report cites no calibration.", sources: ["/evidence"] });
  if (s.length > 1)
    return r({ id: "calibration-reference", state: "not_established", reason: "Several calibration references; this binding has no composition for them.", sources: ["/evidence"] });
  const a = s[0], o = t(a);
  if (o === void 0) return r({ id: "calibration-reference", state: "not_established", reason: `Calibration ${a} is unavailable.`, sources: ["/evidence", a] });
  if (o.usable !== "established" || o.document === void 0)
    return r({
      id: "calibration-reference",
      state: o.usable === "contradicted" ? "contradicted" : "not_established",
      reason: `Calibration ${a} is not usable: ${o.reason}`,
      sources: ["/evidence", a]
    });
  const u = o.document;
  if (Nr(u) !== "CalCertificate")
    return r({ id: "calibration-reference", state: "contradicted", reason: `${a} is a ${String(Nr(u))}, not a calibration certificate.`, sources: ["/evidence", a] });
  const m = qt(c), g = qt(u), p = [{ id: "calibration-reference", state: "established", reason: `Cites calibration ${a}.`, sources: ["/evidence", a] }];
  p.push(typeof m.instrumentIri != "string" ? { id: "same-instrument", state: "not_established", reason: "The report names no instrument.", sources: ["/credentialSubject/instrumentIri"] } : g.id === m.instrumentIri ? { id: "same-instrument", state: "established", reason: `The calibration concerns instrument ${String(m.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] } : { id: "same-instrument", state: "contradicted", reason: `The calibration concerns ${String(g.id)}, not instrument ${String(m.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] });
  const f = Le(m.measurementGroups).filter(qe).map((h) => h.quantityKindIri), w = Le(g.measurementGroups).filter(qe).map((h) => h.quantityKindIri), x = f.filter((h) => !w.includes(h));
  p.push(f.length > 0 && x.length === 0 ? { id: "same-quantity", state: "established", reason: `The calibration covers ${[...new Set(f.map(ie))].join(", ")}.`, sources: ["/credentialSubject/measurementGroups"] } : {
    id: "same-quantity",
    state: f.length === 0 ? "not_established" : "contradicted",
    reason: f.length === 0 ? "The report has no measurement groups." : `The calibration does not cover ${x.map(ie).join(", ")}.`,
    sources: ["/credentialSubject/measurementGroups"]
  });
  const v = Date.parse(String(m.activityTime)), S = Date.parse(String(g.activityTime)), b = Date.parse(String(u.validFrom)), y = Date.parse(String(u.validUntil));
  !Number.isFinite(v) || !Number.isFinite(S) ? p.push({ id: "calibration-precedes-use", state: "not_established", reason: "An activity time is missing.", sources: ["/credentialSubject/activityTime"] }) : (p.push(S <= v ? { id: "calibration-precedes-use", state: "established", reason: `Calibrated at ${String(g.activityTime)}, before the test at ${String(m.activityTime)}.`, sources: ["/credentialSubject/activityTime"] } : { id: "calibration-precedes-use", state: "contradicted", reason: `Calibrated at ${String(g.activityTime)}, after the test at ${String(m.activityTime)}.`, sources: ["/credentialSubject/activityTime"] }), p.push(Number.isFinite(b) && Number.isFinite(y) && b <= v && v <= y ? { id: "calibration-valid-at-use", state: "established", reason: "The calibration certificate was valid at the test.", sources: ["/validFrom", "/validUntil"] } : { id: "calibration-valid-at-use", state: "contradicted", reason: `The calibration certificate (valid ${String(u.validFrom)} to ${String(u.validUntil)}) was not valid at the test at ${String(m.activityTime)}.`, sources: ["/validFrom", "/validUntil"] }));
  const d = um(o, t, n, i);
  p.push({ id: "calibration-authority", state: d.state, reason: d.reason, sources: [a] }, ...d.bases.map((h) => ({ ...h, id: `calibration-authority:${h.id}` })));
  const l = Bs(p.map((h) => h.state));
  return {
    state: l,
    reason: l === "established" ? "The instrument calibration is applicable and independently authorized." : l === "contradicted" ? "The instrument calibration is contradicted." : "The instrument calibration is not established.",
    bases: p,
    chain: [e.uri, ...d.chain]
  };
}
const fm = /^\/credentialSubject\/measurementGroups\/(0|[1-9][0-9]*)$/;
function hm(e) {
  const t = e.bindingRules.applyCmcFloor;
  if (typeof t != "boolean")
    throw new Error(`Profile ${e.id}@${e.version} must state bindingRules.applyCmcFloor for ${ws}.`);
  return t;
}
async function mm(e, t, n, i) {
  if (n.id !== ws || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${ws}@${n.version}.`);
  const c = hm(i), r = Ds(e, n, i);
  if (r !== void 0) return Object.freeze({ result: zs(e, r), artifacts: Object.freeze([]) });
  const s = await Us(e, t, n, i, im), { target: a, artifacts: o, facts: u, verificationOf: m, artifactVerification: g } = s, p = (D) => u.get(D), f = u.get(e.targetId), w = i.authority.certificateRoutes, x = f.document === void 0 ? [] : w.slice(0, i.authority.maxRoutes).map((D) => {
    const P = Cd[D];
    return P === void 0 ? {
      id: D,
      state: "not_established",
      execution: "executed",
      chain: [f.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${D} has no installed evaluator.`, sources: [] }]
    } : P(f, p, i);
  }), v = f.document === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : vn([], x, w.slice(i.authority.maxRoutes)), S = v.routes.find((D) => D.state === "established"), b = (D) => {
    const P = u.get(D)?.document?.credentialSubject;
    return Array.isArray(P?.scope) ? P.scope : [];
  }, y = f.document, d = e.selectedClaims.map((D) => {
    const P = /* @__PURE__ */ new Map();
    if (y === void 0 || !fm.test(D.sourcePointer) || Zt(y, D.sourcePointer) === void 0) {
      const k = y === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${D.sourcePointer} is not a measurement group in the usable target.`;
      return { claim: D, mapping: void 0, coverage: P, result: { claimId: D.id, routeWitnessIds: [], ...ae("not_established", [k]) } };
    }
    const G = Pd(Zt(y, D.sourcePointer), D.sourcePointer);
    if (G.group === void 0)
      return { claim: D, mapping: G, coverage: P, result: {
        claimId: D.id,
        routeWitnessIds: [],
        ...ae(G.state, [`Gate 4: ${G.reason}`], [D.sourcePointer])
      } };
    const B = G.group, H = Qr(v, (k) => {
      const z = Ed(B, b(k.scope), c), N = [k.scope, ...z.sources];
      return P.set(k.id, { ...z, sources: N }), { id: "claim-coverage", state: z.state, reason: z.reason, sources: N };
    }), C = H.routes.find((k) => k.state === "established");
    return { claim: D, mapping: G, coverage: P, result: {
      claimId: D.id,
      routeWitnessIds: H.state === "established" && C ? [`route:${C.id}`, ...C.chain, `record:${P.get(C.id)?.record}`] : [],
      ...ae(H.state, [
        H.reason,
        ...C ? [P.get(C.id).reason] : [...P].map(([k, z]) => `${k}: ${z.reason}`)
      ], [D.sourcePointer])
    } };
  }), l = d.map((D) => D.result), I = Array.isArray(y?.type) && y.type[1] === "CalTestReport" ? pm(f, p, i, c) : void 0, A = I === void 0 ? [] : [{
    obligationId: "cal-v1:instrument-calibration",
    witnessIds: I.state === "established" ? [...I.chain] : [],
    ...ae(I.state, [I.reason], ["/evidence"])
  }], R = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...ae("not_established", ["The calibration v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, O = /* @__PURE__ */ new Set([
    e.targetId,
    ...S?.chain ?? [],
    ...I?.state === "established" ? I.chain : []
  ]), M = [
    ...o.filter((D) => O.has(D.artifactId)).flatMap(m).map((D) => D.state),
    ...l.map((D) => D.state),
    ...A.map((D) => D.state),
    ...R.requested ? [R.state] : []
  ], q = [...s.trace], $ = Zr(a.artifactId, a.digestSRI, "target", e);
  for (const { claim: D, mapping: P, coverage: G } of d) {
    P && q.push({
      gate: 4,
      nodeUse: $,
      predicate: `claim-mapping:${D.id}`,
      state: P.state,
      execution: "executed",
      reason: P.reason,
      sources: [...P.sources]
    });
    for (const [B, H] of G)
      q.push({
        gate: 5,
        nodeUse: $,
        predicate: `claim-coverage:${D.id}:${B}`,
        state: H.state,
        execution: "executed",
        reason: H.reason,
        sources: [...H.sources]
      });
  }
  for (const D of l)
    q.push({
      gate: 5,
      nodeUse: $,
      predicate: `claim-authorization:${D.claimId}`,
      state: D.state,
      execution: D.execution,
      reason: D.reasons.join(" "),
      sources: [...D.sourcePointers]
    });
  q.push({
    gate: 5,
    nodeUse: $,
    predicate: "authority",
    state: v.state,
    execution: "executed",
    reason: v.reason,
    sources: S ? [...S.chain] : []
  });
  for (const D of v.routes) {
    q.push(D.execution === "not_run" ? {
      gate: 5,
      nodeUse: $,
      predicate: `route:${D.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: $,
      predicate: `route:${D.id}`,
      state: D.state,
      execution: "executed",
      reason: `Route ${D.id} is ${D.state}.`,
      sources: [...D.chain]
    });
    for (const P of D.bases)
      q.push({
        gate: 5,
        nodeUse: $,
        predicate: `route:${D.id}:${P.id}`,
        state: P.state,
        execution: "executed",
        reason: P.reason,
        sources: [...P.sources]
      });
  }
  for (const D of I?.bases ?? [])
    q.push({
      gate: 6,
      nodeUse: $,
      predicate: `support:${D.id}`,
      state: D.state,
      execution: "executed",
      reason: D.reason,
      sources: [...D.sources]
    });
  for (const D of A)
    q.push({
      gate: 6,
      nodeUse: $,
      predicate: D.obligationId,
      state: D.state,
      execution: D.execution,
      reason: D.reasons.join(" "),
      sources: []
    });
  R.requested && q.push({
    gate: 6,
    nodeUse: $,
    predicate: `conformity:${R.requirementId}`,
    state: R.state,
    execution: R.execution,
    reason: R.reasons.join(" "),
    sources: []
  });
  const E = zr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: g,
    authorization: l,
    support: A,
    conformity: R,
    decision: $s(M),
    trace: q,
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
const Tc = "https://vc4qi.example/bindings/gs/1", ym = "https://vc4qi.example/contexts/gs/1", Td = "https://vc4qi.example/bindings/gs/1#", en = "https://vc4qi.example/schemas/gs/1/", gm = Object.freeze({
  name: "GS certification v1",
  schemas: Object.freeze({
    GsAccreditation: `${en}accreditation.json`,
    GsSchemeAuthorization: `${en}scheme-authorization.json`,
    GsCertificate: `${en}certificate.json`,
    GsProductPassport: `${en}product-passport.json`,
    BitstringStatusListCredential: `${en}status-list.json`
  }),
  contexts: (e) => e === "BitstringStatusListCredential" ? [Gt] : [Gt, ym]
}), Xr = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Gs = (e) => Array.isArray(e) ? e : [], de = (e) => String(e).split(/[#/]/).pop(), Lr = (e) => Xr(e.credentialSubject) ? e.credentialSubject : {};
function Od(e, t) {
  const n = [t];
  if (!Xr(e) || typeof e.productCategoryIri != "string")
    return { state: "not_established", reason: "The selected certification names no product category.", sources: n };
  const i = Gs(e.standardIris).filter((c) => typeof c == "string");
  return {
    state: "established",
    reason: `Mapped certification of ${de(e.productCategoryIri)} against [${i.map(de).join(", ")}].`,
    sources: n,
    certification: { productCategoryIri: e.productCategoryIri, standardIris: i }
  };
}
function Md(e, t, n) {
  const i = ["/credentialSubject/scope"], { productCategoryIri: c, standardIris: r } = e, s = t.map((p) => {
    const f = String(p.id), w = Gs(p.standardIris);
    if (p.productCategoryIri !== c)
      return { id: f, state: "contradicted", reason: `${de(f)}: category ${de(c)} ≠ ${de(p.productCategoryIri)}` };
    const x = r.filter((v) => !w.includes(v));
    return x.length > 0 ? { id: f, state: "contradicted", reason: `${de(f)}: standard ${x.map(de).join(", ")} is not in the accredited scope` } : r.length === 0 && w.length > 0 ? { id: f, state: "not_established", reason: `${de(f)} restricts standards, but the certification names none` } : { id: f, state: "established", reason: `${de(f)} covers ${de(c)} against [${r.map(de).join(", ")}]` };
  }), a = n.map((p) => {
    const f = String(p.id);
    return p.productCategoryIri === c ? { id: f, state: "established", reason: `${de(f)} permits the GS mark for ${de(c)}` } : { id: f, state: "contradicted", reason: `${de(f)}: category ${de(c)} ≠ ${de(p.productCategoryIri)}` };
  }), o = (p, f) => {
    if (f.length === 0) return { state: "not_established", reason: `The ${p} scope has no records.`, record: void 0 };
    const w = f.find((x) => x.state === "established");
    return w ? { state: "established", reason: w.reason, record: w.id } : { state: fn(f.map((x) => x.state)), reason: `No single ${p} record covers it (${f.map((x) => x.reason).join(" | ")})`, record: void 0 };
  }, u = o("competence", s), m = o("scheme", a), g = je([u.state, m.state]);
  return {
    state: g,
    reason: `Competence: ${u.reason}. Scheme: ${m.reason}.`,
    sources: i,
    ...g === "established" ? { records: [u.record, m.record] } : {}
  };
}
function kd(e, t, n) {
  const i = e.document, c = [], r = [e.uri], s = (u, m, g, p, f, w) => {
    const x = et(`${u}-reference`, i, m, t, [e.uri], "GsAuthorizationPolicy");
    if (c.push(x.basis), !x.node) return;
    const v = x.node.document;
    return c.push(ut(`${u}-grantee`, v, i.issuer, w)), c.push(dt(v, `${Td}${g}`) ? { id: `${u}-permission`, state: "established", reason: `${w} permits ${p}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: `${u}-permission`, state: "contradicted", reason: `${w} does not permit ${p}.`, sources: ["/credentialSubject/permittedActivity"] }), c.push(Rt(`${u}-anchor`, v, f, n)), x.node;
  }, a = s("competence", "GsAccreditation", "certifyProducts", "certifying products", "accredit-certification-bodies", "Accreditation GS-A"), o = s("scheme", "GsSchemeAuthorization", "awardGsMark", "awarding the GS mark", "authorize-gs-certification", "Scheme authorization GS-S");
  return !a || !o ? pe("competence-and-scheme-permission", c, r) : (r.push(a.uri, o.uri), c.push(Pt(i, [["GS-A", a.document], ["GS-S", o.document]])), pe("competence-and-scheme-permission", c, r, a.uri));
}
function Nd(e, t) {
  const n = (i) => i === void 0 ? [] : Gs(Lr(t(i)?.document ?? {}).scope).filter(Xr);
  return { competence: n(e.scope), scheme: n(e.chain.length === 3 ? e.chain[2] : void 0) };
}
const vm = `${Td}GsMark`;
function bm(e, t) {
  const n = [t];
  return !Xr(e) || typeof e.markIri != "string" || typeof e.productModelIri != "string" ? { state: "not_established", reason: "The selected marking names no mark or product model.", sources: n } : e.markIri !== vm ? { state: "not_established", reason: `Mark ${de(e.markIri)} has no interpretation in this binding.`, sources: n } : {
    state: "established",
    reason: `Mapped a GS-mark claim for model ${de(e.productModelIri)}.`,
    sources: n,
    marking: { markIri: e.markIri, productModelIri: e.productModelIri }
  };
}
function wm(e, t) {
  const n = ["/credentialSubject/id"];
  if (t === void 0) return { state: "not_established", reason: "No certificate was reached.", sources: n };
  const i = Lr(t).id;
  return i === e.productModelIri ? { state: "established", reason: `${de(t.id)} certifies model ${de(i)}.`, sources: n, records: [String(t.id)] } : { state: "contradicted", reason: `${de(t.id)} certifies ${de(i)}, not model ${de(e.productModelIri)}.`, sources: n };
}
function xm(e, t, n) {
  const i = e.document, c = [], r = [e.uri], s = et("certificate-reference", i, "GsCertificate", t, [e.uri], "GsAuthorizationPolicy");
  if (c.push(s.basis), !s.node) return pe("gs-certified-product", c, r);
  const a = s.node.document;
  r.push(s.node.uri);
  const o = Lr(a).manufacturerIri;
  c.push(typeof o != "string" ? { id: "manufacturer-binding", state: "not_established", reason: "The certificate names no manufacturer.", sources: ["/credentialSubject/manufacturerIri"] } : o === i.issuer ? { id: "manufacturer-binding", state: "established", reason: `The certificate names the passport issuer ${o} as manufacturer.`, sources: ["/credentialSubject/manufacturerIri", "/issuer"] } : { id: "manufacturer-binding", state: "contradicted", reason: `The certificate names ${o}, not the passport issuer ${String(i.issuer)}.`, sources: ["/credentialSubject/manufacturerIri", "/issuer"] }), c.push({ ...Pt(i, [["The certificate", a]]), id: "certificate-in-force" });
  const u = kd(s.node, t, n);
  c.push(...u.bases.map((p) => ({ ...p, id: `certificate:${p.id}` })));
  const m = Od(Lr(a).certification, "/credentialSubject/certification"), g = m.certification === void 0 ? { state: m.state, reason: m.reason } : (() => {
    const { competence: p, scheme: f } = Nd(u, t);
    return Md(m.certification, p, f);
  })();
  return c.push({ id: "certificate:claim-coverage", state: g.state, reason: g.reason, sources: ["/credentialSubject/certification"] }), r.push(...u.chain.slice(1)), pe("gs-certified-product", c, r, s.node.uri);
}
const Sm = Object.freeze({
  "competence-and-scheme-permission": kd,
  "gs-certified-product": xm
}), Im = "/credentialSubject/certification", Am = "/credentialSubject/marking";
async function _m(e, t, n, i) {
  if (n.id !== Tc || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${Tc}@${n.version}.`);
  const c = Ds(e, n, i);
  if (c !== void 0) return Object.freeze({ result: zs(e, c), artifacts: Object.freeze([]) });
  const r = await Us(e, t, n, i, gm), { target: s, artifacts: a, facts: o, verificationOf: u, artifactVerification: m } = r, g = (q) => o.get(q), p = o.get(e.targetId), f = p.document, w = i.authority.certificateRoutes, x = f === void 0 ? [] : w.slice(0, i.authority.maxRoutes).map((q) => {
    const $ = Sm[q];
    return $ === void 0 ? {
      id: q,
      state: "not_established",
      execution: "executed",
      chain: [p.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${q} has no installed evaluator.`, sources: [] }]
    } : $(p, g, i);
  }), v = f === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : vn([], x, w.slice(i.authority.maxRoutes)), S = v.routes.find((q) => q.state === "established"), b = Array.isArray(f?.type) && f.type[1] === "GsProductPassport", y = b ? Am : Im, d = e.selectedClaims.map((q) => {
    const $ = /* @__PURE__ */ new Map();
    if (f === void 0 || q.sourcePointer !== y || Zt(f, q.sourcePointer) === void 0) {
      const k = f === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${q.sourcePointer} is not the ${b ? "marking" : "certification statement"} of the usable target.`;
      return { claim: q, mapping: void 0, coverage: $, result: { claimId: q.id, routeWitnessIds: [], ...ae("not_established", [k]) } };
    }
    const E = Zt(f, q.sourcePointer), D = b ? bm(E, q.sourcePointer) : void 0, P = D ?? Od(E, q.sourcePointer), G = D?.marking, B = b ? void 0 : P.certification;
    if (G === void 0 && B === void 0)
      return { claim: q, mapping: P, coverage: $, result: {
        claimId: q.id,
        routeWitnessIds: [],
        ...ae(P.state, [`Gate 4: ${P.reason}`], [q.sourcePointer])
      } };
    const H = Qr(v, (k) => {
      const z = G !== void 0 ? wm(G, g(k.scope)?.document) : (() => {
        const { competence: j, scheme: _ } = Nd(k, g);
        return Md(B, j, _);
      })(), N = [...k.chain.slice(1), ...z.sources];
      return $.set(k.id, { ...z, sources: N }), { id: "claim-coverage", state: z.state, reason: z.reason, sources: N };
    }), C = H.routes.find((k) => k.state === "established");
    return { claim: q, mapping: P, coverage: $, result: {
      claimId: q.id,
      routeWitnessIds: H.state === "established" && C ? [`route:${C.id}`, ...C.chain, ...($.get(C.id)?.records ?? []).map((k) => `record:${k}`)] : [],
      ...ae(H.state, [
        H.reason,
        ...C ? [$.get(C.id).reason] : [...$].map(([k, z]) => `${k}: ${z.reason}`)
      ], [q.sourcePointer])
    } };
  }), l = d.map((q) => q.result), h = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...ae("not_established", ["The GS v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, I = /* @__PURE__ */ new Set([e.targetId, ...S?.chain ?? []]), A = [
    ...a.filter((q) => I.has(q.artifactId)).flatMap(u).map((q) => q.state),
    ...l.map((q) => q.state),
    ...h.requested ? [h.state] : []
  ], R = [...r.trace], O = Zr(s.artifactId, s.digestSRI, "target", e);
  for (const { claim: q, mapping: $, coverage: E } of d) {
    $ && R.push({
      gate: 4,
      nodeUse: O,
      predicate: `claim-mapping:${q.id}`,
      state: $.state,
      execution: "executed",
      reason: $.reason,
      sources: [...$.sources]
    });
    for (const [D, P] of E)
      R.push({
        gate: 5,
        nodeUse: O,
        predicate: `claim-coverage:${q.id}:${D}`,
        state: P.state,
        execution: "executed",
        reason: P.reason,
        sources: [...P.sources]
      });
  }
  for (const q of l)
    R.push({
      gate: 5,
      nodeUse: O,
      predicate: `claim-authorization:${q.claimId}`,
      state: q.state,
      execution: q.execution,
      reason: q.reasons.join(" "),
      sources: [...q.sourcePointers]
    });
  R.push({
    gate: 5,
    nodeUse: O,
    predicate: "authority",
    state: v.state,
    execution: "executed",
    reason: v.reason,
    sources: S ? [...S.chain] : []
  });
  for (const q of v.routes) {
    R.push(q.execution === "not_run" ? {
      gate: 5,
      nodeUse: O,
      predicate: `route:${q.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: O,
      predicate: `route:${q.id}`,
      state: q.state,
      execution: "executed",
      reason: `Route ${q.id} is ${q.state}.`,
      sources: [...q.chain]
    });
    for (const $ of q.bases)
      R.push({
        gate: 5,
        nodeUse: O,
        predicate: `route:${q.id}:${$.id}`,
        state: $.state,
        execution: "executed",
        reason: $.reason,
        sources: [...$.sources]
      });
  }
  h.requested && R.push({
    gate: 6,
    nodeUse: O,
    predicate: `conformity:${h.requirementId}`,
    state: h.state,
    execution: h.execution,
    reason: h.reasons.join(" "),
    sources: []
  });
  const M = zr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: m,
    authorization: l,
    support: [],
    conformity: h,
    decision: $s(A),
    trace: R,
    resources: r.resources,
    limitations: [
      "The GS route is a fictional profile example (competence AND scheme permission), not a universal GS or legal rule.",
      ...b ? ["The product passport is an experimental credential in this binding, not EU Digital Product Passport conformance."] : [],
      "Verification failures of credentials outside the selected route are reported but do not decide the request.",
      "Fixture grants are fictional: an accreditation or scheme authorization here has no legal effect."
    ]
  });
  return Object.freeze({ result: M, artifacts: Object.freeze([...a]) });
}
const Ss = "2026-09-25T12:00:00Z", $m = { rm: nm, cal: mm, gs: _m }, Ld = Object.fromEntries(["rm", "cal", "gs"].map((e) => [e, {
  manifest: bl(ni[e].manifest),
  profiles: Object.fromEntries(Object.entries(ni[e].profiles).map(([t, n]) => [t, El(n)])),
  files: ni[e].files
}])), Oc = "https://vc4qi.example/bindings/gs/1#", bt = (e) => String(e).split(/[#/:]/).pop() ?? "", pn = (e) => e.credentialSubject ?? {}, qm = (e) => pn(e).measurementGroups ?? [], jm = (e) => e.results.map((t) => `${t.value} ${t.unit} ± ${t.expandedUncertainty} ${t.unit}`).join(", "), rn = {
  A: "https://nab.vc4qi.example/credentials/A",
  H: "https://nab.vc4qi.example/credentials/H",
  O: "https://producer.vc4qi.example/credentials/O",
  S: "https://lab.vc4qi.example/credentials/S"
}, Rm = (e) => ({
  A: { uri: rn.A, kind: "acc", title: "A  Accreditation", subtitle: "NAB → producer · M1, M2 · 50–500 mg/kg" },
  H: { uri: rn.H, kind: "acc", title: "H  Lab authority", subtitle: "NAB → laboratory · homogeneity studies" },
  O: { uri: rn.O, kind: "ops", title: "O  Operational scope", subtitle: "producer-issued · M1 only · 50–500 mg/kg" },
  S: { uri: rn.S, kind: "sup", title: "S  Homogeneity study", subtitle: "same batch · homogeneous" },
  D: { uri: `https://producer.vc4qi.example/credentials/D${e}`, kind: "dom", title: "D  RM certificate", subtitle: `As = ${e} ± 5 mg/kg · M1` }
}), Pm = [
  { nodes: ["A", "H"] },
  { edges: [
    { label: "bounded projection", carrier: "termsOfUse · O within A", style: "", state: "authorized" },
    { label: "laboratory authority", carrier: "termsOfUse", style: "dash", state: "supported" }
  ] },
  { nodes: ["O", "S"] },
  { edges: [
    { label: "authority use", carrier: "termsOfUse · claim in scope", style: "dash", state: "authorized" },
    { label: "support", carrier: "evidence · same batch", style: "dot", state: "supported" }
  ] },
  { nodes: ["D", null] }
], cs = (e, t) => ({
  id: e,
  label: `${e} mg/kg`,
  sublabel: t,
  binding: "rm",
  profile: "rm-verifier-1",
  target: `https://producer.vc4qi.example/credentials/D${e}`,
  claims: [{ id: "as", sourcePointer: "/credentialSubject/materialPropertiesList/0/results/0" }],
  supplied: [],
  tamper: [`"value": "${e}"`, '"value": "150"'],
  withhold: { uri: rn.S, label: "Withhold the homogeneity study" },
  headline: (n) => {
    const i = pn(n).materialPropertiesList[0].results[0].data.quantity;
    return `As = ${i.value} ± ${i.uncertainty.expandedUncertainty} mg/kg`;
  },
  nodes: Rm(e),
  graph: Pm
}), le = {
  CA: "https://nab.vc4qi.example/credentials/CAL-A",
  DCC1: "https://lab.vc4qi.example/credentials/DCC-1",
  O: "https://lab.vc4qi.example/credentials/CAL-O",
  DCC2: "https://lab.vc4qi.example/credentials/DCC-2",
  M: "https://ministry.vc4qi.example/credentials/CAL-M",
  DCCN: "https://nmi.vc4qi.example/credentials/DCC-N",
  T: "https://nab.vc4qi.example/credentials/CAL-T",
  REPORT: "https://testlab.vc4qi.example/credentials/REPORT-1"
}, tn = (e) => ({ id: `g${e + 1}`, sourcePointer: `/credentialSubject/measurementGroups/${e}` }), _r = (e) => qm(e).map((t, n) => `g${n + 1}: ${bt(t.quantityKindIri)} ${jm(t)}`).join(" · "), ds = { uri: le.CA, kind: "acc", title: "CAL-A  Accreditation", subtitle: "NAB → lab · pressure 0–10 MPa · CMC 0.5 kPa" }, Em = [
  {
    id: "direct",
    label: "Accredited lab",
    sublabel: "DCC-1, two groups",
    binding: "cal",
    profile: "cal-verifier-1",
    target: le.DCC1,
    claims: [tn(0), tn(1)],
    supplied: [le.CA],
    tamper: ['"value": "1000"', '"value": "15000"'],
    withhold: { uri: le.CA, label: "Withhold the accreditation" },
    headline: _r,
    nodes: { CA: ds, D: { uri: le.DCC1, kind: "dom", title: "DCC-1  Calibration certificate", subtitle: "pressure transmitter · 2 groups" } },
    graph: [{ nodes: ["CA"] }, { edges: [{ label: "authority use", carrier: "termsOfUse · every group in scope", style: "dash", state: "authorized" }] }, { nodes: ["D"] }]
  },
  {
    id: "capability",
    label: "Capability scope",
    sublabel: "DCC-2 under CAL-O",
    binding: "cal",
    profile: "cal-verifier-capability-1",
    target: le.DCC2,
    claims: [tn(0)],
    supplied: [le.O, le.CA],
    tamper: ['"value": "1000"', '"value": "5000"'],
    withhold: { uri: le.O, label: "Withhold the operational scope" },
    headline: _r,
    nodes: {
      CA: ds,
      O: { uri: le.O, kind: "ops", title: "CAL-O  Operational scope", subtitle: "lab-issued · 0–2 MPa · CMC 0.8 kPa" },
      D: { uri: le.DCC2, kind: "dom", title: "DCC-2  Calibration certificate", subtitle: "pressure gauge" }
    },
    graph: [
      { nodes: ["CA"] },
      { edges: [{ label: "bounded projection", carrier: "termsOfUse · O within CA, no widening", style: "", state: "authorized" }] },
      { nodes: ["O"] },
      { edges: [{ label: "authority use", carrier: "termsOfUse · claim in O", style: "dash", state: "authorized" }] },
      { nodes: ["D"] }
    ]
  },
  {
    id: "nmi",
    label: "National institute",
    sublabel: "DCC-N, statutory mandate",
    binding: "cal",
    profile: "cal-verifier-nmi-1",
    target: le.DCCN,
    claims: [tn(0)],
    supplied: [le.M],
    tamper: ['"value": "20"', '"value": "200"'],
    withhold: { uri: le.M, label: "Withhold the mandate" },
    headline: _r,
    nodes: {
      M: { uri: le.M, kind: "acc", title: "CAL-M  Statutory mandate", subtitle: "ministry → NMI · 0–100 MPa · no accreditation" },
      D: { uri: le.DCCN, kind: "dom", title: "DCC-N  Calibration certificate", subtitle: "transfer standard" }
    },
    graph: [{ nodes: ["M"] }, { edges: [{ label: "statutory authority", carrier: "termsOfUse · claim in mandate", style: "dash", state: "authorized" }] }, { nodes: ["D"] }]
  },
  {
    id: "report",
    label: "Test report",
    sublabel: "REPORT-1 needs DCC-1",
    binding: "cal",
    profile: "cal-verifier-test-report-1",
    target: le.REPORT,
    claims: [tn(0)],
    supplied: [le.T],
    tamper: ['"value": "2"', '"value": "30"'],
    withhold: { uri: le.DCC1, label: "Withhold the instrument's calibration" },
    headline: _r,
    nodes: {
      T: { uri: le.T, kind: "acc", title: "CAL-T  Testing accreditation", subtitle: "NAB → test lab · 0–25 MPa" },
      CA: ds,
      C: { uri: le.DCC1, kind: "sup", title: "DCC-1  Instrument calibration", subtitle: "pressure transmitter used in the test" },
      D: { uri: le.REPORT, kind: "dom", title: "REPORT-1  Test report", subtitle: "valve pressure test" }
    },
    graph: [
      { nodes: [null, "CA"] },
      { edges: [null, { label: "calibration authority", carrier: "termsOfUse · every group in scope", style: "dash", state: "supported" }] },
      { nodes: ["T", "C"] },
      { edges: [{ label: "authority use", carrier: "termsOfUse · claim in scope", style: "dash", state: "authorized" }, { label: "support", carrier: "evidence · same instrument, before the test", style: "dot", state: "supported" }] },
      { nodes: ["D", null] }
    ]
  }
], ct = {
  A: "https://nab.vc4qi.example/credentials/GS-A",
  S: "https://scheme.vc4qi.example/credentials/GS-S",
  C1: "https://gs-body.vc4qi.example/credentials/GSC-1",
  C2: "https://gs-body.vc4qi.example/credentials/GSC-2"
}, Is = (e, t) => ({
  A: { uri: ct.A, kind: "acc", title: "GS-A  Accreditation", subtitle: "NAB → GS body · toys, household appliances" },
  S: { uri: ct.S, kind: "acc", title: "GS-S  Scheme authorization", subtitle: "scheme owner → GS body · toys only" },
  D: { uri: e, kind: "dom", title: `${bt(e)}  GS certificate`, subtitle: t }
}), Cm = [
  { nodes: ["A", "S"] },
  { edges: [
    { label: "competence", carrier: "termsOfUse · category and standards", style: "dash", state: "authorized" },
    { label: "scheme permission", carrier: "termsOfUse · category", style: "dash", state: "authorized" }
  ] },
  { nodes: ["D", null] }
], Tm = (e) => {
  const t = pn(e).certification;
  return `GS mark: ${bt(t.productCategoryIri)} against ${(t.standardIris ?? []).map(bt).join(", ") || "no standard"}`;
}, Mc = (e, t, n, i, c) => ({
  id: e,
  label: t,
  sublabel: n,
  binding: "gs",
  profile: "gs-verifier-1",
  target: i,
  claims: [{ id: "gs", sourcePointer: "/credentialSubject/certification" }],
  supplied: [ct.A, ct.S],
  tamper: [`${Oc}${c}"`, `${Oc}EN-71-3"`],
  withhold: { uri: ct.S, label: "Withhold the scheme authorization" },
  headline: Tm,
  nodes: Is(i, n),
  graph: Cm
}), kc = { P1: "https://maker.vc4qi.example/credentials/DPP-1", P2: "https://maker.vc4qi.example/credentials/DPP-2" }, Nc = (e, t, n, i, c, r) => ({
  id: e,
  label: t,
  sublabel: n,
  binding: "gs",
  profile: "gs-verifier-dpp-1",
  target: i,
  claims: [{ id: "mark", sourcePointer: "/credentialSubject/marking" }],
  supplied: [],
  tamper: ["-sn-", "-sn-9"],
  withhold: { uri: c, label: "Withhold the GS certificate" },
  headline: (s) => `GS mark on unit ${bt(pn(s).id)} of model ${bt(pn(s).productModelIri)}`,
  nodes: {
    A: Is(c, "").A,
    S: Is(c, "").S,
    C: { uri: c, kind: "ops", title: `${bt(c)}  GS certificate`, subtitle: `model ${r} · names the manufacturer` },
    D: { uri: i, kind: "dom", title: `${bt(i)}  Product passport`, subtitle: "manufacturer-issued · one serialized unit" }
  },
  graph: [
    { nodes: ["A", "S"] },
    { edges: [
      { label: "competence", carrier: "termsOfUse · category and standards", style: "dash", state: "authorized" },
      { label: "scheme permission", carrier: "termsOfUse · category", style: "dash", state: "authorized" }
    ] },
    { nodes: ["C", null] },
    { edges: [{ label: "certified product", carrier: "termsOfUse · same model, same manufacturer", style: "dash", state: "authorized" }, null] },
    { nodes: ["D", null] }
  ]
}), Lc = [
  {
    id: "rm",
    tab: "RM",
    title: "A reference material you can verify",
    badge: ["BAM-M375a", "CuZn39Pb3"],
    intro: "A certified reference material (arsenic in leaded brass) under an accreditation, the producer's operational scope and an independent homogeneity study.",
    caseLabel: "Certified arsenic mass fraction",
    cases: [cs("178", "certificate"), cs("197", "hypothetical reissue"), cs("520", "hypothetical reissue")],
    choice: { label: "What the verifier asks", options: [
      { id: "authorized", label: "Is it authorized?", sublabel: "no limit applied" },
      { id: "fit", label: "Is it fit for my use?", sublabel: "As + U ≤ 200 mg/kg" }
    ] },
    note: "Certified value and material from BAM-M375a. The accreditation body, producer, laboratory, operational scope, methods M1 and M2 and all keys are fictional; BAM does not issue these credentials. The 197 and 520 certificates are hypothetical reissues with their own valid signatures."
  },
  {
    id: "dcc",
    tab: "DCC",
    title: "A calibration certificate you can verify",
    badge: ["DCC", "pressure"],
    intro: "Digital calibration certificates and a test report. Each measurement group is a separate claim, covered by one complete scope record, and a reported uncertainty may not be better than the admitted capability.",
    caseLabel: "Who issued the certificate",
    cases: Em,
    choice: { label: "The verifier's profile", options: [
      { id: "own", label: "Accepts this route", sublabel: "the case's own profile" },
      { id: "direct-only", label: "Direct accreditation only", sublabel: "cal-verifier-1" }
    ] },
    note: "A JSON-LD simplification of DCC measurement results, not native DCC XML. The accreditation bodies, laboratories, ministry, institute and all keys are fictional; a mandate here has no legal effect."
  },
  {
    id: "gs",
    tab: "GS",
    title: "A GS certificate you can verify",
    badge: ["GS", "certification"],
    intro: "The GS mark relies on two independent grants: the certification body's accreditation (competence) AND the scheme owner's permission. Neither alone is enough, and both must cover the product.",
    caseLabel: "Certified product",
    cases: [Mc("toy", "Toy", "GSC-1 · EN 71-1", ct.C1, "EN-71-1"), Mc("appliance", "Hair dryer", "GSC-2 · EN 60335", ct.C2, "EN-60335-1")],
    note: "(Competence AND scheme permission) is a fictional profile example, not a universal GS or legal rule. The accreditation body, scheme owner, GS body and all keys are fictional."
  },
  {
    id: "dpp",
    tab: "DPP",
    title: "A product passport you can verify",
    badge: ["DPP", "one unit"],
    intro: "A manufacturer's passport for one serialized product claims the GS mark. The claim holds only through a GS certificate for that model which names the manufacturer, was in force when the unit was placed on the market, and is itself authorized.",
    caseLabel: "Product unit",
    cases: [
      Nc("toy", "Toy unit", "DPP-1 via GSC-1", kc.P1, ct.C1, "toy-001"),
      Nc("appliance", "Hair dryer unit", "DPP-2 via GSC-2", kc.P2, ct.C2, "hair-dryer-001")
    ],
    note: "An experimental product passport inside the GS binding, to show reliance on a passport claim; it is not EU Digital Product Passport (ESPR) conformance. The manufacturer, GS body, accreditation body, scheme owner and all keys are fictional."
  }
], Om = (e) => (e.nodeUse.split("|")[0] ?? "").trim(), ot = (e) => e.length === 0 ? "not_established" : je(e.map((t) => t.state)), Dc = (e, t) => e.find((n) => n.state === t);
async function Hm(e) {
  const t = Lc.find((q) => q.id === e.example) ?? Lc[0], n = t.cases.find((q) => q.id === e.caseId) ?? t.cases[0], i = Ld[n.binding], c = t.id === "dcc" && e.choice === "direct-only" ? "cal-verifier-1" : n.profile, r = i.profiles[c], s = t.id === "rm" && e.choice !== "authorized" ? { requirementId: "as-mass-fraction-max-200-mg-per-kg", decisionRuleId: "guarded-acceptance-expanded-u" } : void 0, a = {}, o = i.files.filter((q) => !(e.withhold && q.uri === n.withhold.uri)).map((q) => {
    const $ = e.tamper && q.uri === n.target ? q.text.replace(n.tamper[0], n.tamper[1]) : q.text, E = new TextEncoder().encode($);
    return a[q.uri] = $, {
      uri: q.uri,
      mediaType: q.mediaType,
      origin: q.origin,
      version: q.version,
      bytes: E,
      digestSRI: $ === q.text ? q.digestSRI : Dr(E)
    };
  }), u = Cl({
    requestId: `urn:vc4qi:demonstrator:${t.id}:${n.id}`,
    targetId: n.target,
    selectedClaims: n.claims.map((q) => ({ ...q })),
    purpose: "demonstrator",
    binding: { id: i.manifest.id, version: i.manifest.version },
    profile: { id: r.id, version: r.version },
    trustConfigId: "https://vc4qi.example/trust/fixture-anchors",
    evaluationTime: Ss,
    activityTime: Ss,
    suppliedEvidence: n.supplied.filter((q) => !(e.withhold && q === n.withhold.uri)),
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5e6 },
    ...s ? { conformity: s } : {}
  }), { result: m } = await $m[n.binding](u, new yl(o), i.manifest, r), g = (q, $ = () => !0) => m.trace.filter((E) => E.gate === q && $(E)), p = g(2), f = [...p, ...g(1)], w = g(3), x = [...g(0), ...g(4)], v = (q, $, E) => $ === "established" ? E : (Dc(q, $) ?? Dc(q, "not_established"))?.reason ?? "Not evaluated.", S = m.authorization, b = S.length === 0 ? "not_established" : je(S.map((q) => q.state)), y = b === "established" ? S.map((q) => q.reasons.at(-1)).join(" ") : S.filter((q) => q.state !== "established").map((q) => `${q.claimId}: ${q.reasons.join(" ")}`).join(" "), d = m.support, l = m.artifactVerification.find((q) => q.artifactId === n.target)?.state === "established", h = d.length > 0 ? je(d.map((q) => q.state)) : l ? "not_required" : "not_established", I = g(6, (q) => q.predicate.startsWith("conformity:")), A = [
    {
      id: "authentic",
      state: ot(f),
      details: f,
      summary: v(f, ot(f), "Every credential is signed by its issuer's own key, and every reference matches the exact bytes.")
    },
    {
      id: "current",
      state: ot(w),
      details: w,
      summary: v(w, ot(w), "Every credential is within its validity period and not revoked.")
    },
    // "Understood" includes reading the claim itself (gate 4); a claim that was never
    // read, because its credential failed a lower gate, is not understood.
    g(4).length === 0 ? {
      id: "understood",
      state: ot(g(0)) === "contradicted" ? "contradicted" : "not_established",
      details: x,
      summary: v(g(0), ot(g(0)), "The claim was not read, because its credential did not pass the earlier checks.")
    } : {
      id: "understood",
      state: ot(x),
      details: x,
      summary: v(x, ot(x), g(4).map((q) => q.reason).join(" "))
    },
    {
      id: "authorized",
      state: b,
      summary: y,
      details: g(5, (q) => q.predicate.startsWith("claim-") || q.predicate.startsWith("restriction:") || q.predicate.startsWith("route:"))
    },
    {
      id: "supported",
      state: h,
      summary: d.length > 0 ? d.map((q) => q.reasons.join(" ")).join(" ") : l ? "This claim needs no supporting credential under the selected profile." : "Not evaluated: the credential did not pass the earlier checks.",
      details: g(6, (q) => q.predicate.startsWith("support:") || d.some(($) => $.obligationId === q.predicate))
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
  ], R = {}, O = {};
  for (const q of Object.values(n.nodes)) {
    R[q.uri] = o.some((E) => E.uri === q.uri);
    const $ = p.filter((E) => Om(E) === q.uri);
    O[q.uri] = $.length ? ot($) : "not_established";
  }
  const M = JSON.parse(a[n.target]);
  return {
    options: e,
    example: t,
    spec: n,
    profile: c,
    result: m,
    questions: A,
    headline: n.headline(M),
    target: M,
    texts: a,
    present: R,
    protection: O
  };
}
const Jm = {
  evaluationTime: Ss,
  bindings: Object.fromEntries(Object.entries(Ld).map(([e, t]) => [e, `${t.manifest.id}@${t.manifest.version}`]))
};
export {
  Ss as EVALUATION_TIME,
  Lc as EXAMPLES,
  Jm as buildInfo,
  Hm as evaluateScenario
};
