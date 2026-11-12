var Dl = Object.defineProperty;
var Pa = (e) => {
  throw TypeError(e);
};
var zl = (e, t, n) => t in e ? Dl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ft = (e, t, n) => zl(e, typeof t != "symbol" ? t + "" : t, n), Ta = (e, t, n) => t.has(e) || Pa("Cannot " + n);
var it = (e, t, n) => (Ta(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Nn = (e, t, n) => t.has(e) ? Pa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ir = (e, t, n, i) => (Ta(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n);
const In = { rm: { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/rm/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/bindings.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Contexts, schemas, controller documents, signed A/H/O/S/D fixtures and status lists are pinned and verify in TypeScript and Python. The I1-I4 evaluators (protection, status, authority routes, support, claim mapping and coverage, conformity) and the current-reliance time rules are implemented, with a cross-language parity vector; an independent transformation vector is still required before selection.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/rm/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/rm/1#RmAccreditation", "https://vc4qi.example/bindings/rm/1#RmOperationalScope", "https://vc4qi.example/bindings/rm/1#RmCertificate", "https://vc4qi.example/bindings/rm/1#RmStudy", "https://vc4qi.example/bindings/rm/1#RmLabAuthority", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential", "https://www.w3.org/ns/credentials/recognized-entities#RecognizedEntityCredential"], schemaUris: ["https://vc4qi.example/schemas/rm/1/accreditation.json", "https://vc4qi.example/schemas/rm/1/operational-scope.json", "https://vc4qi.example/schemas/rm/1/certificate.json", "https://vc4qi.example/schemas/rm/1/study.json", "https://vc4qi.example/schemas/rm/1/lab-authority.json", "https://vc4qi.example/schemas/rm/1/authorization-policy.json", "https://vc4qi.example/schemas/rm/1/study-reference.json", "https://vc4qi.example/schemas/rm/1/status-list.json", "https://vc4qi.example/schemas/rm/1/recognized-entity.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", recognitionCarrier: "RecognizedEntityCredential with the VCDM 2.0 context and https://vc4qi.example/contexts/recognized-entities/draft-20261104, a stand-in for the unpublished W3C Recognized Entities context (Working Draft of 4 November 2026)", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/rm-v1/catalog.json", decimalEncoding: "JSON strings typed xsd:decimal for every quantity, bound and uncertainty", orderedCollections: ["materials", "materialPropertiesList", "results"] }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/rm/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/rm/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/bindings/rm/1#authorizationCredential" }, { fact: "requiredStudy", nativePath: "/evidence/*/id", expandedIri: "https://www.w3.org/2018/credentials#evidence" }, { fact: "validFrom", nativePath: "/validFrom", expandedIri: "https://www.w3.org/2018/credentials#validFrom" }, { fact: "validUntil", nativePath: "/validUntil", expandedIri: "https://www.w3.org/2018/credentials#validUntil" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/rm/1#activityTime" }, { fact: "selectedResult", nativePath: "/credentialSubject/materialPropertiesList/*/results/*", expandedIri: "https://vc4qi.example/bindings/rm/1#results" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, material: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 1 }, authorizingReferenceSelection: "by-declared-reference-type-per-route; resolved credential type must match (else contradicted); several of one type not_established", supportReferences: { minimum: 1 }, multipleRecognizedDeclarations: "unsupported-unless-exact-deterministic-composition-is-listed", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "evidence", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", recognitionReferences: "only a RecognizedEntityCredential that a grant references from its own termsOfUse (authorizationCredential of that type, pinned by digest); recognitions supplied by the holder but not referenced, issuer.recognizedIn and identifier-based discovery are unsupported", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse authorizationCredential references on the credential chain; an authenticated grant found by other means establishes nothing (not_established)" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/bindings/rm/1#RmAuthorizationPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], supportEvidence: "https://vc4qi.example/bindings/rm/1#RmStudyReference", supportEvidenceEstablishes: ["support-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "support-applicability", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { issueRmCertificate: "https://vc4qi.example/bindings/rm/1#issueRmCertificate", maintainRmScope: "https://vc4qi.example/bindings/rm/1#maintainRmScope", issueRmStudy: "https://vc4qi.example/bindings/rm/1#issueRmStudy" }, rules: ["A grantee equals the producer exercising certificate issuance and scope maintenance.", "O issuer and grantee equal that producer and O is contained by A.", "D issuer equals O grantee.", "S issuer equals H laboratory grantee.", "Commissioning a study grants no laboratory competence."] }, scopeAndMapping: { mappingVersion: "rm-experimental-mapping-1", recordEvaluator: "https://vc4qi.example/evaluators/rm-complete-record/1", quantityEvaluator: "https://vc4qi.example/evaluators/exact-mass-fraction/1", dimensions: ["matrixIri", "formIri", "propertyIri", "methodIri", "quantityKindIri", "range"], units: { "mg/kg": "1e-6", "kg/kg": "1" }, boundaries: "inclusive", missingOrEmptyRestrictedDimension: "not_established", recordCombination: "one-complete-record-per-claim-no-splicing", uncertainty: { requiredCoverageFactor: "2", nonnegative: !0, accreditationCeiling: "none" }, methodRevisions: [{ method: "https://vc4qi.example/bindings/rm/1#M2", revises: "https://vc4qi.example/bindings/rm/1#M1" }], methodSuccessionInterpretation: "verifier-profile mapping.methodSuccession: accept-successor | require-extension | none (none leaves a revised method not_established at gate 4)", claimCoverage: "the selected result, mapped at gate 4, must lie in one complete record of the route's own scope credential (O for operational-scope, A for direct-accreditation); no fallback to a parent grant", conformity: "verifier-profile requirements and decision rules, evaluated at gate 6 only after the claim is authorized; exact arithmetic reported in the requirement's unit", unsupported: ["asymmetric-uncertainty", "display-label-equality", "substring-matching", "implicit-method-succession"] }, routesAndRestrictions: { certificateRoute: ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A"], installedCertificateRoutes: { "operational-scope": ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A", "A-issuer-is-accreditation-anchor-or-recognized-for-main-scope"], "direct-accreditation": ["A-authorizes-D", "A-issuer-is-accreditation-anchor-or-recognized-for-main-scope"] }, recognition: "a grant issuer that is not a configured anchor for the purpose is accepted only through a usable, unsuspended recognition the grant references, whose issuer is an anchor for the recognizer purpose and whose subject is the grant issuer with the required action for the purpose's main scope (activity and normative document, exact), recognized by its issuer and in force at the activity time; a recognition of another body or another main scope contradicts; a missing recognition, entry or time is not_established; recognition never establishes QI scope", studyRoute: ["H-authorizes-S"], requiredSupport: ["S", "H"], globalRestrictions: ["applicable-suspension", "request-time-policy"], installedGlobalRestrictions: { "accreditation-suspension": "every usable anchor-issued RmAccreditation of the certificate issuer reached through the target's termsOfUse references, on any route, must carry a fresh issuer suspension status (Bitstring Status List, statusPurpose suspension) with its bit clear; missing or unreadable suspension status is not_established; unusable or unreferenced credentials are not restrictions" }, unusedAlternativeFailures: "diagnostic-only: only the target and the credentials on the selected route and support chains decide the request", routeComposition: "AND-within-route-OR-between-complete-routes", baselineAlternatives: 1, provenanceDoesNotEstablish: ["permission", "containment"] }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, proofCollections: "unsupported-in-initial-slice", status: "authenticated-current-revocation-status-required-for-A-O-D-S-H; suspension entries on accreditations are read only by the accreditation-suspension restriction", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], freshness: "verifier-profile maxAgeSeconds from the status list validFrom; no default", historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { objectApplicability: ["materialBatch", "activity", "method", "activityTime"], supportSubjectNeedNotEqualTargetIssuer: !0, mandatoryDisclosure: ["issuer", "credentialSubject/id", "activityTime", "selectedResult", "restrictions", "authorizingReference", "requiredStudy", "relatedResource", "proof"], missingMandatoryDisclosure: "not_established", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/acceptance-ledger.csv", testVectorRoots: ["testdata/regressions", "bindings/experimental/rm-v1/test-vectors"], unsupported: ["production-accreditation", "legal-effect", "physical-sample-truth", "public-example-namespace-resolution", "general-ontology-reasoning", "wallet-interoperability", "external-recognition-adapter", "timestamp-service"] } }, profiles: { "rm-verifier-1": { id: "https://vc4qi.example/profiles/rm-verifier", version: "1", status: "experimental", description: "Verifier-owned reliance profile for the experimental RM v1 binding. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "accredit-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } }, "rm-verifier-global-aci-1": { id: "https://vc4qi.example/profiles/rm-verifier-global-aci", version: "1", status: "experimental", description: "Fictional verifier abroad: its only trust anchor is a fictional stand-in for an arrangement anchor (Global ACI role), not the accreditation body. It accepts the accreditation body when an accreditation points up (termsOfUse) to that anchor's recognition of its issuer, a W3C Recognized Entities credential (Working Draft of 4 November 2026) with one subject, for the main scope each grant requires. It names no recognition itself. Otherwise identical to rm-verifier-1; not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://global-aci.vc4qi.example/controller", purposes: ["recognize-accreditation-bodies"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] }, bindingRules: { recognition: { recognizerPurpose: "recognize-accreditation-bodies", action: "accredit", purposes: { "accredit-rm-producers": { activity: "Reference material production", standardId: "urn:iso:std:iso:17034:ed-1" }, "accredit-rm-laboratories": { activity: "Testing", standardId: "urn:iso:std:iso-iec:17025:ed-3" } } } } }, "rm-verifier-two-routes-1": { id: "https://vc4qi.example/profiles/rm-verifier-two-routes", version: "1", status: "experimental", description: "Fictional verifier profile with two complete certificate routes, (operational scope within an accreditation) OR (direct accreditation), and the accreditation-suspension global restriction outside the OR. Exercises route composition (C01-C07); not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "accredit-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope", "direct-accreditation"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
}` }, { uri: "https://vc4qi.example/contexts/rm/1", mediaType: "application/ld+json", origin: "VC4QI experimental RM binding (repository-owned fictional fixture)", version: "1", digestSRI: "sha384-VwRpUQQrgMZ+CLiaB2pQfnaxgx8hPz+MGv0AhG9PAb0HwJPkkU1Zz5h+jlQ8cJQp", text: `{
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
    "RecognizedEntityCredential": "https://www.w3.org/ns/credentials/recognized-entities#RecognizedEntityCredential",

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
` }, { uri: "https://vc4qi.example/contexts/recognized-entities/draft-20261104", mediaType: "application/ld+json", origin: "VC4QI stand-in for the unpublished W3C Recognized Entities v1.0 context: terms expand to the draft vocabulary of w3c/vc-recognized-entities@3961cf6 (Working Draft of 4 November 2026); mainScope, activity and standard are RM binding extension terms", version: "draft-20261104", digestSRI: "sha384-pXFtmoWd7QX1pQQhUOo+tTKalbnl//y/XwGl9aZwEIJ9IRkOV0Iym/MPv8tR67cX", text: `{
  "@context": {
    "@version": 1.1,
    "@protected": true,
    "re": "https://www.w3.org/ns/credentials/recognized-entities#",
    "rm": "https://vc4qi.example/bindings/rm/1#",

    "RecognizedEntityCredential": "re:RecognizedEntityCredential",
    "RecognizedIssuer": "re:RecognizedIssuer",
    "RecognizedEntity": "re:RecognizedEntity",
    "ExternalEntityList": "re:ExternalEntityList",
    "RecognizedAction": {
      "@id": "re:RecognizedAction",
      "@context": {
        "@protected": true,
        "validFrom": {"@id": "https://www.w3.org/2018/credentials#validFrom", "@type": "http://www.w3.org/2001/XMLSchema#dateTime"},
        "validUntil": {"@id": "https://www.w3.org/2018/credentials#validUntil", "@type": "http://www.w3.org/2001/XMLSchema#dateTime"}
      }
    },

    "recognizedTo": {"@id": "re:recognizedTo", "@container": "@set"},
    "recognizedIn": "re:recognizedIn",
    "registration": {"@id": "re:registration", "@type": "@id"},
    "action": "re:action",
    "recognizedBy": {"@id": "re:recognizedBy", "@type": "@id"},
    "outputValidation": {"@id": "re:outputValidation", "@type": "@id"},

    "mainScope": "rm:mainScope",
    "activity": "rm:arrangementActivity",
    "standard": "rm:normativeDocument"
  }
}
` }, { uri: "https://vc4qi.example/schemas/rm/1/accreditation.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-bpFH6U6iG7GLw8MHMiXdCeuWV+FX7RT8bdz4yKVkVrwZRnCAxhp2XNmIDXeOXVVF", text: `{
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
                  "RmLabAuthority",
                  "RecognizedEntityCredential"
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
  "additionalProperties": false,
  "dependentRequired": {
    "termsOfUse": [
      "relatedResource"
    ]
  }
}
` }, { uri: "https://vc4qi.example/schemas/rm/1/operational-scope.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-srYzEor4PtPpFBJUNpNW9GWUai+TZ9NN7Y/9jnwES2rpmNDZpwGjxVm4srOrbBOx", text: `{
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
                  "RmLabAuthority",
                  "RecognizedEntityCredential"
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/certificate.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-Vt/pwNDFx9piUWVQflP4CmFc5waC1LlMHJARPR5u0BFgwOQkbcRGenV0B+pfDusd", text: `{
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
                  "RmLabAuthority",
                  "RecognizedEntityCredential"
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/study.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-sSv/sqUj2lLp3M1SPJb6T1ELSUbw2jbYu6A5Rai4LfCv2C4nLiNIX4QuHxpFFHFX", text: `{
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
                  "RmLabAuthority",
                  "RecognizedEntityCredential"
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/lab-authority.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-EP6XN0+pB6Ldsfr3NMN+5/DfZkA1LnjsutyUh4vNPkHLB9DdGZbuUPK+Pvm2RT+0", text: `{
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
                  "RmLabAuthority",
                  "RecognizedEntityCredential"
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
  "additionalProperties": false,
  "dependentRequired": {
    "termsOfUse": [
      "relatedResource"
    ]
  }
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/recognized-entity.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-HclROTVmfjrMlyMU7wNMToB3Kf3jURrmNTa3Hjs2csiyvWzrp3DfjsSiGB9qpW4P", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/rm/1/recognized-entity.json",
  "title": "Recognition of one accreditation body (W3C Recognized Entities credential)",
  "description": "Experimental VC4QI RM binding v1 fixture schema for a Recognized Entities credential. Not an external standard.",
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
        "https://vc4qi.example/contexts/recognized-entities/draft-20261104"
      ]
    },
    "id": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "const": [
        "VerifiableCredential",
        "RecognizedEntityCredential"
      ]
    },
    "issuer": {
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
          "const": "RecognizedIssuer"
        },
        "name": {
          "type": "string",
          "minLength": 1
        }
      },
      "additionalProperties": false
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
          "const": "https://vc4qi.example/schemas/rm/1/recognized-entity.json"
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
        "type"
      ],
      "properties": {
        "id": {
          "type": "string",
          "format": "uri"
        },
        "type": {
          "const": "RecognizedEntity"
        },
        "name": {
          "type": "string",
          "minLength": 1
        },
        "recognizedTo": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "type",
              "action"
            ],
            "properties": {
              "type": {
                "const": "RecognizedAction"
              },
              "action": {
                "type": "string",
                "minLength": 1
              },
              "recognizedBy": {
                "type": "string",
                "format": "uri"
              },
              "mainScope": {
                "type": "object",
                "required": [
                  "activity",
                  "standard"
                ],
                "properties": {
                  "activity": {
                    "type": "string",
                    "minLength": 1
                  },
                  "standard": {
                    "type": "object",
                    "required": [
                      "id",
                      "name"
                    ],
                    "properties": {
                      "id": {
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
                "additionalProperties": false
              },
              "validFrom": {
                "type": "string",
                "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
              },
              "validUntil": {
                "type": "string",
                "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,9})?(Z|[+-]\\\\d{2}:\\\\d{2})$"
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/authorization-policy.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-9VE7+HJC6b5K4FOjhVmdBLNseICiptrcBaHBhfa73hHW9viD6tkvZ37ETr9zZAC0", text: `{
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
            "RmLabAuthority",
            "RecognizedEntityCredential"
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
` }, { uri: "https://global-aci.vc4qi.example/controller", mediaType: "application/json", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-BkYMAHBjHdUrMoWBFnMBvKtcLE9o52MybyxC9SQ4MwSdQrWsoKETkIUT1mik+hkQ", text: `{
  "@context": "https://www.w3.org/ns/cid/v1",
  "id": "https://global-aci.vc4qi.example/controller",
  "verificationMethod": [
    {
      "id": "https://global-aci.vc4qi.example/controller#key-1",
      "type": "Multikey",
      "controller": "https://global-aci.vc4qi.example/controller",
      "publicKeyMultibase": "z6Mkfmx88o53XX7KZXNHSpMcghcJwZfJLv9ir93PNxexgHkp"
    }
  ],
  "assertionMethod": [
    "https://global-aci.vc4qi.example/controller#key-1"
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
` }, { uri: "https://global-aci.vc4qi.example/status/1", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-f4J1fT05eUoFiUS7OuO5VMjYh62eWAhE6TPKg935wPtH8YAk0De+UYYkATJVUyJE", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://global-aci.vc4qi.example/status/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://global-aci.vc4qi.example/controller",
  "validFrom": "2026-09-01T00:00:00Z",
  "validUntil": "2027-09-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/rm/1/status-list.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://global-aci.vc4qi.example/status/1#list",
    "type": "BitstringStatusList",
    "statusPurpose": "revocation",
    "encodedList": "uH4sIAAAAAAACA-3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAIC3AYbSVKsAQAAA"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://global-aci.vc4qi.example/controller#key-1",
    "created": "2026-09-01T00:00:00Z",
    "proofValue": "z3pG2D3ogdTvfawLR78m5zuG9KCeVKqEcMVGkzkN6eGgdj3YutVfjHiukitcSmYwXoJQ2po4fx3wqvggqmbKG3r1a"
  }
}
` }, { uri: "https://global-aci.vc4qi.example/status/suspension/1", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-MRvTZH9XhARmxi+FOMkMvCAVI0qbSxjJrKxBF5eibvCutqa5P6iVxPAnUaM4KxXZ", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://global-aci.vc4qi.example/status/suspension/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://global-aci.vc4qi.example/controller",
  "validFrom": "2026-09-01T00:00:00Z",
  "validUntil": "2027-09-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/rm/1/status-list.json",
    "type": "JsonSchema"
  },
  "credentialSubject": {
    "id": "https://global-aci.vc4qi.example/status/suspension/1#list",
    "type": "BitstringStatusList",
    "statusPurpose": "suspension",
    "encodedList": "uH4sIAAAAAAACA-3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAIC3AYbSVKsAQAAA"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://global-aci.vc4qi.example/controller#key-1",
    "created": "2026-09-01T00:00:00Z",
    "proofValue": "z664VM8J2kLbvocdhnouVbiwL92xnnYfH3oQE2CiersaxjJkj8iFuHfc8WBnGwj7p9CqBpKJ6ere6hk63k8sPRWBL"
  }
}
` }, { uri: "https://global-aci.vc4qi.example/credentials/R", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-Y5cnA4RvEj1gjiAwioFhsPSjIHl4ubIyYbujR8JFeB/ahXw82W3M3U6XGmEncX0R", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/recognized-entities/draft-20261104"
  ],
  "id": "https://global-aci.vc4qi.example/credentials/R",
  "type": [
    "VerifiableCredential",
    "RecognizedEntityCredential"
  ],
  "issuer": {
    "id": "https://global-aci.vc4qi.example/controller",
    "type": "RecognizedIssuer",
    "name": "Global ACI (fictional stand-in)"
  },
  "validFrom": "2024-01-01T00:00:00Z",
  "validUntil": "2028-01-01T00:00:00Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/rm/1/recognized-entity.json",
    "type": "JsonSchema"
  },
  "name": "Recognition of the national accreditation body (fictional fixture)",
  "description": "Fictional fixture in the shape of a W3C Recognized Entities credential. Not issued or endorsed by Global Accreditation Cooperation Incorporated or any accreditation body.",
  "credentialSubject": {
    "id": "https://nab.vc4qi.example/controller",
    "type": "RecognizedEntity",
    "name": "Fictional national accreditation body",
    "recognizedTo": [
      {
        "type": "RecognizedAction",
        "action": "accredit",
        "recognizedBy": "https://global-aci.vc4qi.example/controller",
        "mainScope": {
          "activity": "Reference material production",
          "standard": {
            "id": "urn:iso:std:iso:17034:ed-1",
            "name": "ISO 17034:2016"
          }
        }
      },
      {
        "type": "RecognizedAction",
        "action": "accredit",
        "recognizedBy": "https://global-aci.vc4qi.example/controller",
        "mainScope": {
          "activity": "Testing",
          "standard": {
            "id": "urn:iso:std:iso-iec:17025:ed-3",
            "name": "ISO/IEC 17025:2017"
          }
        }
      }
    ]
  },
  "credentialStatus": [
    {
      "id": "https://global-aci.vc4qi.example/status/1#0",
      "type": "BitstringStatusListEntry",
      "statusPurpose": "revocation",
      "statusListIndex": "0",
      "statusListCredential": "https://global-aci.vc4qi.example/status/1"
    },
    {
      "id": "https://global-aci.vc4qi.example/status/suspension/1#0",
      "type": "BitstringStatusListEntry",
      "statusPurpose": "suspension",
      "statusListIndex": "0",
      "statusListCredential": "https://global-aci.vc4qi.example/status/suspension/1"
    }
  ],
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://global-aci.vc4qi.example/controller#key-1",
    "created": "2024-01-01T00:00:00Z",
    "proofValue": "z2vJAEMjowMVq829aUFKdYTtzZs7yJZmnFbzCiDvVkRU9JvCfZEYuDzRWuG9gtxyc8n7LXYxrwDme866ZWmmEvw6v"
  }
}
` }, { uri: "https://nab.vc4qi.example/credentials/A", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-lpgR/+OTQRxExZghBsQDsX94D5dM+J1kUphaYHX1m6GYUKFZXTt3mjB+huNlwl5B", text: `{
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
  "termsOfUse": [
    {
      "type": "RmAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://global-aci.vc4qi.example/credentials/R",
        "type": "RecognizedEntityCredential"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://global-aci.vc4qi.example/credentials/R",
      "digestSRI": "sha384-Y5cnA4RvEj1gjiAwioFhsPSjIHl4ubIyYbujR8JFeB/ahXw82W3M3U6XGmEncX0R"
    }
  ],
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
    "proofValue": "z2a1sCMz1eYwUHG7wDWVhcu16L1Ga3qn5oA5ibXXVBWssmaqUk2JcjkuPc87HJVN5jDiHfkov9c4xuCpvghis7SUq"
  }
}
` }, { uri: "https://nab.vc4qi.example/credentials/A2", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-wJwfOPm8RZkmiBdw2LsGTd+Z68p3fvov1uFo56RjrNwMjVIYzEpsJhYFc2rAlGn9", text: `{
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
  "termsOfUse": [
    {
      "type": "RmAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://global-aci.vc4qi.example/credentials/R",
        "type": "RecognizedEntityCredential"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://global-aci.vc4qi.example/credentials/R",
      "digestSRI": "sha384-Y5cnA4RvEj1gjiAwioFhsPSjIHl4ubIyYbujR8JFeB/ahXw82W3M3U6XGmEncX0R"
    }
  ],
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
    "proofValue": "z5PWrpdqnjgZ2wfG6P8XxsmDGZKY2UpfDDYzj5hjX79E6A4kh28GPpqLXKRkkKod3J2TwU5mTrB328fhrSYWmCFUX"
  }
}
` }, { uri: "https://nab.vc4qi.example/credentials/H", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-ovdOT19QL40/C6mHEyBiMKefNVj1dVNd9oPW2KK9QBbM5m4VBHuekCu1RWUcUcCC", text: `{
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
  "termsOfUse": [
    {
      "type": "RmAuthorizationPolicy",
      "authorizationCredential": {
        "id": "https://global-aci.vc4qi.example/credentials/R",
        "type": "RecognizedEntityCredential"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://global-aci.vc4qi.example/credentials/R",
      "digestSRI": "sha384-Y5cnA4RvEj1gjiAwioFhsPSjIHl4ubIyYbujR8JFeB/ahXw82W3M3U6XGmEncX0R"
    }
  ],
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
    "proofValue": "zsgnjCz9AF9jNj244mgLEMBLuU2e7S4PqiPLZintmmJxKtak7MUh3niH7vH9zvSVfN93T62oUP6fzR6a3fuBfBPE"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/O", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-ei0hzTd+1S9h1I7SLQjiALtvThNCAEDCYQwW74PcHXa8kMlkS05NkvcP42EVQ7xK", text: `{
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
      "digestSRI": "sha384-lpgR/+OTQRxExZghBsQDsX94D5dM+J1kUphaYHX1m6GYUKFZXTt3mjB+huNlwl5B"
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
    "proofValue": "z4bJqrNweRnniR84wFv5U4dJQbT8wuFf3btr2o6KxLJ2RFEatAE8LN9fuxGJcCwgvMQ7cTTKu9D7P85GzWktbM6gP"
  }
}
` }, { uri: "https://lab.vc4qi.example/credentials/S", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-pdu64Cny1WeOJsqlO+My2iLtaEqm0JWfugvdQeOuAhk6exRWBlcPkxWXivXwlkby", text: `{
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
      "digestSRI": "sha384-ovdOT19QL40/C6mHEyBiMKefNVj1dVNd9oPW2KK9QBbM5m4VBHuekCu1RWUcUcCC"
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
    "proofValue": "z67TT54728GnG2Anbk5ncccByBZhSWJfNtwmNbz9BWw783PLmTTMqrKUh3rQpYx54hj1aEy2n1kGd5uhsqbHZfgEf"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D178", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-gBmQ6eVLJKXfFOsgkjQ/e6f/s80ZlK0FwhIFwRZBQbO8sSeo0mYzjA4AHrcMQBq+", text: `{
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
      "digestSRI": "sha384-ei0hzTd+1S9h1I7SLQjiALtvThNCAEDCYQwW74PcHXa8kMlkS05NkvcP42EVQ7xK"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "digestSRI": "sha384-pdu64Cny1WeOJsqlO+My2iLtaEqm0JWfugvdQeOuAhk6exRWBlcPkxWXivXwlkby"
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
    "proofValue": "z5mCSd4k7M64KEG7m2jBmY1FKoV3djPdSJvFBZFSG2TvvGq1k4qJsEKQK9jFvWxZvuh1C6cG41oi2gKAqMfDVQE1"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D197", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-nekYSIrVSfq9RYCKFZJOMI2sN2ANTC8JpMl9m+4ooJmPfDWEdz6MSUd1mFFqRBcF", text: `{
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
      "digestSRI": "sha384-ei0hzTd+1S9h1I7SLQjiALtvThNCAEDCYQwW74PcHXa8kMlkS05NkvcP42EVQ7xK"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "digestSRI": "sha384-pdu64Cny1WeOJsqlO+My2iLtaEqm0JWfugvdQeOuAhk6exRWBlcPkxWXivXwlkby"
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
    "proofValue": "z2asF5vMimE4dHD2b1FeBzLZ5h199mDwV59bvhBEbLBe6zbs2itkBHKPx1XMQByHYxZgMTiEKbD64TiR8XUuxXRnG"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D520", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-yPCH+Sc6OVUl9RX/jAFopXSHJA2Lla3IKDPFaouw29TxCxckPO7Rg7arTaRPN+f8", text: `{
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
      "digestSRI": "sha384-ei0hzTd+1S9h1I7SLQjiALtvThNCAEDCYQwW74PcHXa8kMlkS05NkvcP42EVQ7xK"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "digestSRI": "sha384-pdu64Cny1WeOJsqlO+My2iLtaEqm0JWfugvdQeOuAhk6exRWBlcPkxWXivXwlkby"
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
    "proofValue": "z3fhZt6xfE23KbyWLeULX1pb8pK35CRTBiizcUtk2iUDKBDiVSPwdvjQJo7scpzpLaLreDJffY2XzSamYok13Unxa"
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
function Ul(e) {
  return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function ea(e, ...t) {
  if (!Ul(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function Ca(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Vl(e, t) {
  ea(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error("digestInto() expects output buffer of length at least " + n);
}
function jn(...e) {
  for (let t = 0; t < e.length; t++)
    e[t].fill(0);
}
function Ar(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function rt(e, t) {
  return e << 32 - t | e >>> t;
}
function Gl(e) {
  if (typeof e != "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(e));
}
function Ad(e) {
  return typeof e == "string" && (e = Gl(e)), ea(e), e;
}
class Fl {
}
function ta(e) {
  const t = (i) => e().update(Ad(i)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
function Bl(e, t, n, i) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, i);
  const o = BigInt(32), r = BigInt(4294967295), s = Number(n >> o & r), a = Number(n & r), c = i ? 4 : 0, u = i ? 0 : 4;
  e.setUint32(t + c, s, i), e.setUint32(t + u, a, i);
}
function Zl(e, t, n) {
  return e & t ^ ~e & n;
}
function Hl(e, t, n) {
  return e & t ^ e & n ^ t & n;
}
class qd extends Fl {
  constructor(t, n, i, o) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = n, this.padOffset = i, this.isLE = o, this.buffer = new Uint8Array(t), this.view = Ar(this.buffer);
  }
  update(t) {
    Ca(this), t = Ad(t), ea(t);
    const { view: n, buffer: i, blockLen: o } = this, r = t.length;
    for (let s = 0; s < r; ) {
      const a = Math.min(o - this.pos, r - s);
      if (a === o) {
        const c = Ar(t);
        for (; o <= r - s; s += o)
          this.process(c, s);
        continue;
      }
      i.set(t.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === o && (this.process(n, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    Ca(this), Vl(t, this), this.finished = !0;
    const { buffer: n, view: i, blockLen: o, isLE: r } = this;
    let { pos: s } = this;
    n[s++] = 128, jn(this.buffer.subarray(s)), this.padOffset > o - s && (this.process(i, 0), s = 0);
    for (let g = s; g < o; g++)
      n[g] = 0;
    Bl(i, o - 8, BigInt(this.length * 8), r), this.process(i, 0);
    const a = Ar(t), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u = c / 4, f = this.get();
    if (u > f.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let g = 0; g < u; g++)
      a.setUint32(4 * g, f[g], r);
  }
  digest() {
    const { buffer: t, outputLen: n } = this;
    this.digestInto(t);
    const i = t.slice(0, n);
    return this.destroy(), i;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: n, buffer: i, length: o, finished: r, destroyed: s, pos: a } = this;
    return t.destroyed = s, t.finished = r, t.length = o, t.pos = a, o % n && t.buffer.set(i), t;
  }
  clone() {
    return this._cloneInto();
  }
}
const It = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), Ie = /* @__PURE__ */ Uint32Array.from([
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
]), Ae = /* @__PURE__ */ Uint32Array.from([
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
]), Dn = /* @__PURE__ */ BigInt(2 ** 32 - 1), Ea = /* @__PURE__ */ BigInt(32);
function Jl(e, t = !1) {
  return t ? { h: Number(e & Dn), l: Number(e >> Ea & Dn) } : { h: Number(e >> Ea & Dn) | 0, l: Number(e & Dn) | 0 };
}
function Kl(e, t = !1) {
  const n = e.length;
  let i = new Uint32Array(n), o = new Uint32Array(n);
  for (let r = 0; r < n; r++) {
    const { h: s, l: a } = Jl(e[r], t);
    [i[r], o[r]] = [s, a];
  }
  return [i, o];
}
const ka = (e, t, n) => e >>> n, Ma = (e, t, n) => e << 32 - n | t >>> n, Kt = (e, t, n) => e >>> n | t << 32 - n, Qt = (e, t, n) => e << 32 - n | t >>> n, zn = (e, t, n) => e << 64 - n | t >>> n - 32, Un = (e, t, n) => e >>> n - 32 | t << 64 - n;
function ht(e, t, n, i) {
  const o = (t >>> 0) + (i >>> 0);
  return { h: e + n + (o / 2 ** 32 | 0) | 0, l: o | 0 };
}
const Ql = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0), Wl = (e, t, n, i) => t + n + i + (e / 2 ** 32 | 0) | 0, Xl = (e, t, n, i) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (i >>> 0), Yl = (e, t, n, i, o) => t + n + i + o + (e / 2 ** 32 | 0) | 0, eu = (e, t, n, i, o) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (i >>> 0) + (o >>> 0), tu = (e, t, n, i, o, r) => t + n + i + o + r + (e / 2 ** 32 | 0) | 0, nu = /* @__PURE__ */ Uint32Array.from([
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
]), At = /* @__PURE__ */ new Uint32Array(64);
class iu extends qd {
  constructor(t = 32) {
    super(64, t, 8, !1), this.A = It[0] | 0, this.B = It[1] | 0, this.C = It[2] | 0, this.D = It[3] | 0, this.E = It[4] | 0, this.F = It[5] | 0, this.G = It[6] | 0, this.H = It[7] | 0;
  }
  get() {
    const { A: t, B: n, C: i, D: o, E: r, F: s, G: a, H: c } = this;
    return [t, n, i, o, r, s, a, c];
  }
  // prettier-ignore
  set(t, n, i, o, r, s, a, c) {
    this.A = t | 0, this.B = n | 0, this.C = i | 0, this.D = o | 0, this.E = r | 0, this.F = s | 0, this.G = a | 0, this.H = c | 0;
  }
  process(t, n) {
    for (let g = 0; g < 16; g++, n += 4)
      At[g] = t.getUint32(n, !1);
    for (let g = 16; g < 64; g++) {
      const p = At[g - 15], h = At[g - 2], x = rt(p, 7) ^ rt(p, 18) ^ p >>> 3, w = rt(h, 17) ^ rt(h, 19) ^ h >>> 10;
      At[g] = w + At[g - 7] + x + At[g - 16] | 0;
    }
    let { A: i, B: o, C: r, D: s, E: a, F: c, G: u, H: f } = this;
    for (let g = 0; g < 64; g++) {
      const p = rt(a, 6) ^ rt(a, 11) ^ rt(a, 25), h = f + p + Zl(a, c, u) + nu[g] + At[g] | 0, w = (rt(i, 2) ^ rt(i, 13) ^ rt(i, 22)) + Hl(i, o, r) | 0;
      f = u, u = c, c = a, a = s + h | 0, s = r, r = o, o = i, i = h + w | 0;
    }
    i = i + this.A | 0, o = o + this.B | 0, r = r + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, u = u + this.G | 0, f = f + this.H | 0, this.set(i, o, r, s, a, c, u, f);
  }
  roundClean() {
    jn(At);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), jn(this.buffer);
  }
}
const Rd = Kl([
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
].map((e) => BigInt(e))), ru = Rd[0], su = Rd[1], qt = /* @__PURE__ */ new Uint32Array(80), Rt = /* @__PURE__ */ new Uint32Array(80);
class jd extends qd {
  constructor(t = 64) {
    super(128, t, 16, !1), this.Ah = Ae[0] | 0, this.Al = Ae[1] | 0, this.Bh = Ae[2] | 0, this.Bl = Ae[3] | 0, this.Ch = Ae[4] | 0, this.Cl = Ae[5] | 0, this.Dh = Ae[6] | 0, this.Dl = Ae[7] | 0, this.Eh = Ae[8] | 0, this.El = Ae[9] | 0, this.Fh = Ae[10] | 0, this.Fl = Ae[11] | 0, this.Gh = Ae[12] | 0, this.Gl = Ae[13] | 0, this.Hh = Ae[14] | 0, this.Hl = Ae[15] | 0;
  }
  // prettier-ignore
  get() {
    const { Ah: t, Al: n, Bh: i, Bl: o, Ch: r, Cl: s, Dh: a, Dl: c, Eh: u, El: f, Fh: g, Fl: p, Gh: h, Gl: x, Hh: w, Hl: b } = this;
    return [t, n, i, o, r, s, a, c, u, f, g, p, h, x, w, b];
  }
  // prettier-ignore
  set(t, n, i, o, r, s, a, c, u, f, g, p, h, x, w, b) {
    this.Ah = t | 0, this.Al = n | 0, this.Bh = i | 0, this.Bl = o | 0, this.Ch = r | 0, this.Cl = s | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = u | 0, this.El = f | 0, this.Fh = g | 0, this.Fl = p | 0, this.Gh = h | 0, this.Gl = x | 0, this.Hh = w | 0, this.Hl = b | 0;
  }
  process(t, n) {
    for (let y = 0; y < 16; y++, n += 4)
      qt[y] = t.getUint32(n), Rt[y] = t.getUint32(n += 4);
    for (let y = 16; y < 80; y++) {
      const d = qt[y - 15] | 0, l = Rt[y - 15] | 0, m = Kt(d, l, 1) ^ Kt(d, l, 8) ^ ka(d, l, 7), I = Qt(d, l, 1) ^ Qt(d, l, 8) ^ Ma(d, l, 7), A = qt[y - 2] | 0, R = Rt[y - 2] | 0, j = Kt(A, R, 19) ^ zn(A, R, 61) ^ ka(A, R, 6), E = Qt(A, R, 19) ^ Un(A, R, 61) ^ Ma(A, R, 6), O = Xl(I, E, Rt[y - 7], Rt[y - 16]), P = Yl(O, m, j, qt[y - 7], qt[y - 16]);
      qt[y] = P | 0, Rt[y] = O | 0;
    }
    let { Ah: i, Al: o, Bh: r, Bl: s, Ch: a, Cl: c, Dh: u, Dl: f, Eh: g, El: p, Fh: h, Fl: x, Gh: w, Gl: b, Hh: S, Hl: v } = this;
    for (let y = 0; y < 80; y++) {
      const d = Kt(g, p, 14) ^ Kt(g, p, 18) ^ zn(g, p, 41), l = Qt(g, p, 14) ^ Qt(g, p, 18) ^ Un(g, p, 41), m = g & h ^ ~g & w, I = p & x ^ ~p & b, A = eu(v, l, I, su[y], Rt[y]), R = tu(A, S, d, m, ru[y], qt[y]), j = A | 0, E = Kt(i, o, 28) ^ zn(i, o, 34) ^ zn(i, o, 39), O = Qt(i, o, 28) ^ Un(i, o, 34) ^ Un(i, o, 39), P = i & r ^ i & a ^ r & a, C = o & s ^ o & c ^ s & c;
      S = w | 0, v = b | 0, w = h | 0, b = x | 0, h = g | 0, x = p | 0, { h: g, l: p } = ht(u | 0, f | 0, R | 0, j | 0), u = a | 0, f = c | 0, a = r | 0, c = s | 0, r = i | 0, s = o | 0;
      const D = Ql(j, O, C);
      i = Wl(D, R, E, P), o = D | 0;
    }
    ({ h: i, l: o } = ht(this.Ah | 0, this.Al | 0, i | 0, o | 0)), { h: r, l: s } = ht(this.Bh | 0, this.Bl | 0, r | 0, s | 0), { h: a, l: c } = ht(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: u, l: f } = ht(this.Dh | 0, this.Dl | 0, u | 0, f | 0), { h: g, l: p } = ht(this.Eh | 0, this.El | 0, g | 0, p | 0), { h, l: x } = ht(this.Fh | 0, this.Fl | 0, h | 0, x | 0), { h: w, l: b } = ht(this.Gh | 0, this.Gl | 0, w | 0, b | 0), { h: S, l: v } = ht(this.Hh | 0, this.Hl | 0, S | 0, v | 0), this.set(i, o, r, s, a, c, u, f, g, p, h, x, w, b, S, v);
  }
  roundClean() {
    jn(qt, Rt);
  }
  destroy() {
    jn(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class au extends jd {
  constructor() {
    super(48), this.Ah = Ie[0] | 0, this.Al = Ie[1] | 0, this.Bh = Ie[2] | 0, this.Bl = Ie[3] | 0, this.Ch = Ie[4] | 0, this.Cl = Ie[5] | 0, this.Dh = Ie[6] | 0, this.Dl = Ie[7] | 0, this.Eh = Ie[8] | 0, this.El = Ie[9] | 0, this.Fh = Ie[10] | 0, this.Fl = Ie[11] | 0, this.Gh = Ie[12] | 0, this.Gl = Ie[13] | 0, this.Hh = Ie[14] | 0, this.Hl = Ie[15] | 0;
  }
}
const ou = /* @__PURE__ */ ta(() => new iu()), cu = /* @__PURE__ */ ta(() => new jd()), du = /* @__PURE__ */ ta(() => new au()), $d = ou, lu = cu, uu = du;
class pu {
  constructor(t) {
    ft(this, "_chunks", []);
    ft(this, "_algo");
    this._algo = t === "sha384" ? "sha384" : t === "sha512" ? "sha512" : "sha256";
  }
  update(t, n) {
    const i = typeof t == "string" ? new TextEncoder().encode(t) : t;
    return this._chunks.push(i), this;
  }
  digest(t) {
    const n = this._chunks.reduce((s, a) => s + a.length, 0), i = new Uint8Array(n);
    let o = 0;
    for (const s of this._chunks)
      i.set(s, o), o += s.length;
    let r;
    return this._algo === "sha384" ? r = uu(i) : this._algo === "sha512" ? r = lu(i) : r = $d(i), t === "base64" ? btoa(String.fromCharCode(...r)) : t === "hex" ? Array.from(r).map((s) => s.toString(16).padStart(2, "0")).join("") : r;
  }
}
function ks(e) {
  return new pu(e);
}
class Ce extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "CatalogError";
  }
}
function fu(e, t) {
  if (e.trim().length === 0)
    throw new Ce("INVALID_RESOURCE", `${t} must be nonempty.`);
}
function rr(e) {
  return `sha384-${ks("sha384").update(e).digest("base64")}`;
}
function Oa(e) {
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
          if (!(o instanceof Ce)) throw o;
          t.set(n, o);
        }
      const i = t.get(n);
      if (i instanceof Ce) throw i;
      return { ...i, bytes: Uint8Array.from(i.bytes) };
    }
  };
}
var on;
class _d {
  constructor(t) {
    Nn(this, on, /* @__PURE__ */ new Map());
    for (const n of t) {
      for (const [o, r] of Object.entries({
        uri: n.uri,
        mediaType: n.mediaType,
        origin: n.origin,
        version: n.version
      })) fu(r, o);
      if (it(this, on).has(n.uri))
        throw new Ce("DUPLICATE_RESOURCE", `Duplicate static resource: ${n.uri}`);
      const i = rr(n.bytes);
      if (i !== n.digestSRI)
        throw new Ce(
          "INTEGRITY_MISMATCH",
          `Static resource ${n.uri} has ${i}; expected ${n.digestSRI}.`
        );
      it(this, on).set(n.uri, { ...n, bytes: Uint8Array.from(n.bytes) });
    }
  }
  openSession(t) {
    if (!Number.isSafeInteger(t.maxResources) || t.maxResources <= 0 || !Number.isSafeInteger(t.maxBytes) || t.maxBytes <= 0)
      throw new Ce("INVALID_RESOURCE", "Catalog budgets must be positive safe integers.");
    return new hu(it(this, on), Object.freeze({ ...t }));
  }
}
on = new WeakMap();
var cn, dn;
class hu {
  constructor(t, n) {
    Nn(this, cn, 0);
    Nn(this, dn, 0);
    this.resources = t, this.budget = n;
  }
  get usage() {
    return Object.freeze({ resources: it(this, cn), bytes: it(this, dn) });
  }
  resolve(t) {
    const n = this.resources.get(t);
    if (!n)
      throw new Ce("RESOURCE_NOT_FOUND", `Static resource is not installed: ${t}`);
    if (it(this, cn) + 1 > this.budget.maxResources || it(this, dn) + n.bytes.byteLength > this.budget.maxBytes)
      throw new Ce("RESOURCE_BUDGET_EXCEEDED", `Static resource budget exceeded at ${t}.`);
    return Ir(this, cn, it(this, cn) + 1), Ir(this, dn, it(this, dn) + n.bytes.byteLength), { ...n, bytes: Uint8Array.from(n.bytes) };
  }
}
cn = new WeakMap(), dn = new WeakMap();
function Pd(e) {
  return async (t) => {
    const n = e.resolve(t);
    if (n.mediaType !== "application/json" && n.mediaType !== "application/ld+json" && !n.mediaType.endsWith("+json"))
      throw new Ce(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} has unsupported media type ${n.mediaType}.`
      );
    let i;
    try {
      const o = new TextDecoder("utf-8", { fatal: !0 }).decode(n.bytes);
      i = JSON.parse(o);
    } catch (o) {
      throw new Ce(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} is not valid UTF-8 JSON: ${String(o)}.`
      );
    }
    return { contextUrl: null, document: i, documentUrl: t };
  };
}
const La = "https://vc4qi.example/bindings/rm/1", qr = [
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
function Td(e) {
  if (e !== null && typeof e == "object") {
    for (const t of Object.values(e)) Td(t);
    Object.freeze(e);
  }
  return e;
}
function mu(e) {
  if (!Vn(e)) throw new TypeError("Binding manifest must be an object.");
  if (Object.keys(e).length !== qr.length || qr.some((n) => !Object.hasOwn(e, n)))
    throw new TypeError("Binding manifest must contain exactly the supported top-level categories.");
  if (typeof e.id != "string" || e.id.length === 0 || typeof e.version != "string" || e.version.length === 0 || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Binding manifest identity, version, or status is invalid.");
  if (!Vn(e.installation) || e.installation.status !== "incomplete" && e.installation.status !== "installable" || typeof e.installation.reason != "string" || e.installation.reason.length === 0 || !Array.isArray(e.installation.pendingResources) || e.installation.pendingResources.some((n) => typeof n != "string" || n.length === 0))
    throw new TypeError("Binding manifest installation state is invalid.");
  if (!Array.isArray(e.factMappings) || e.factMappings.length === 0 || e.factMappings.some((n) => !Vn(n)))
    throw new TypeError("Binding manifest factMappings must be a nonempty object array.");
  for (const n of qr.slice(4))
    if (!(n === "installation" || n === "factMappings") && (!Vn(e[n]) || Object.keys(e[n]).length === 0))
      throw new TypeError(`Binding manifest ${n} must be a nonempty object.`);
  return Td(structuredClone(e));
}
const Ft = "https://www.w3.org/ns/credentials/v2", yu = "https://vc4qi.example/contexts/rm/1", Lt = "https://vc4qi.example/schemas/rm/1/", gu = "https://vc4qi.example/contexts/recognized-entities/draft-20261104", Cd = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", Ms = BigInt(58);
function vu(e) {
  if (e.length === 0) return "";
  let t = 0;
  for (const o of e) {
    if (o !== 0) break;
    t++;
  }
  let n = 0n;
  for (const o of e)
    n = n * 256n + BigInt(o);
  const i = [];
  for (; n > 0n; ) {
    const o = Number(n % Ms);
    n = n / Ms, i.unshift(o);
  }
  return "1".repeat(t) + i.map((o) => Cd[o]).join("");
}
function bu(e) {
  if (e.length === 0) return new Uint8Array(0);
  let t = 0;
  for (const s of e) {
    if (s !== "1") break;
    t++;
  }
  let n = 0n;
  for (const s of e) {
    const a = Cd.indexOf(s);
    if (a === -1) throw new Error(`Invalid base58btc character: '${s}'`);
    n = n * Ms + BigInt(a);
  }
  const i = [];
  for (; n > 0n; )
    i.push(Number(n & 0xffn)), n >>= 8n;
  i.reverse();
  const o = Uint8Array.from(i), r = new Uint8Array(t + o.length);
  return r.set(o, t), r;
}
function wu(e) {
  return "z" + vu(e);
}
function na(e) {
  if (!e.startsWith("z"))
    throw new Error(`Expected multibase base58btc prefix 'z', got '${e[0]}'`);
  return bu(e.slice(1));
}
const Na = [237, 1], xu = ["revoked", "expires"];
function ve(e, t, n, i = {}) {
  return Object.freeze({ state: e, code: t, reason: n, ...i });
}
function Fi(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Su(e) {
  if (typeof e == "string" && e.length > 0) return e;
  if (Fi(e) && typeof e.id == "string" && e.id.length > 0) return e.id;
}
function Iu(e) {
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
function Au(e) {
  if (typeof e != "string" || !e.startsWith("z")) return;
  let t;
  try {
    t = na(e);
  } catch {
    return;
  }
  if (!(t.length !== 34 || t[0] !== Na[0] || t[1] !== Na[1]))
    return t.slice(2);
}
function qu(e, t, n) {
  const i = Su(e);
  if (i === void 0)
    return ve("not_established", "ISSUER_MISSING", "The credential has no issuer identifier.");
  if (typeof t != "string")
    return ve("contradicted", "MALFORMED_METHOD", "The proof names no verification method.");
  const o = Iu(t);
  if (o === void 0)
    return ve(
      "contradicted",
      "MALFORMED_METHOD",
      `Verification method ${t} is not an absolute URL with a fragment.`
    );
  if (o !== i)
    return ve(
      "contradicted",
      "NOT_ISSUER_CONTROLLER",
      `Verification method ${t} is not in issuer ${i}'s controller document.`
    );
  let r, s;
  try {
    const p = n.resolve(o);
    s = p.digestSRI, r = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(p.bytes));
  } catch (p) {
    return p instanceof Ce ? ve(
      "not_established",
      "CONTROLLER_NOT_INSTALLED",
      `Controller document ${o} is not available: ${p.code}.`
    ) : ve(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${o} is not valid UTF-8 JSON.`
    );
  }
  if (!Fi(r))
    return ve(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${o} is not a JSON object.`
    );
  if (r.id !== o)
    return ve(
      "contradicted",
      "CONTROLLER_ID_MISMATCH",
      `Controller document at ${o} identifies itself as ${String(r.id)}.`
    );
  const c = (Array.isArray(r.verificationMethod) ? r.verificationMethod : []).filter((p) => Fi(p) && p.id === t);
  if (c.length === 0)
    return ve(
      "contradicted",
      "METHOD_NOT_FOUND",
      `${t} is not listed in its controller document.`
    );
  if (c.length > 1)
    return ve(
      "contradicted",
      "METHOD_AMBIGUOUS",
      `${t} is listed more than once in its controller document.`
    );
  const u = c[0];
  if (u.type !== "Multikey")
    return ve(
      "not_established",
      "METHOD_TYPE_UNSUPPORTED",
      `Verification method type ${String(u.type)} is not supported; Multikey is required.`
    );
  if (u.controller !== o)
    return ve(
      "contradicted",
      "METHOD_CONTROLLER_MISMATCH",
      `${t} is controlled by ${String(u.controller)}, not ${o}.`
    );
  if (xu.some((p) => Object.hasOwn(u, p)))
    return ve(
      "not_established",
      "METHOD_LIFECYCLE_UNSUPPORTED",
      "Key revocation/expiry metadata is not supported in the initial slice."
    );
  const f = Au(u.publicKeyMultibase);
  if (f === void 0)
    return ve(
      "contradicted",
      "INVALID_PUBLIC_KEY",
      `${t} does not carry an Ed25519 Multikey public key.`
    );
  const g = Array.isArray(r.assertionMethod) ? r.assertionMethod : [];
  return g.includes(t) ? ve(
    "established",
    "AUTHORIZED",
    `${t} is the issuer's Ed25519 assertion key.`,
    { publicKey: f, verificationMethod: t, controllerDocumentDigest: s }
  ) : g.some((p) => Fi(p) && p.id === t) ? ve(
    "not_established",
    "EMBEDDED_METHOD_UNSUPPORTED",
    "Embedded assertionMethod entries are not supported; a reference is required."
  ) : ve(
    "contradicted",
    "NOT_ASSERTION_METHOD",
    `${t} is not authorized for assertionMethod.`
  );
}
const Da = ["accept-successor", "require-extension", "none"], Ru = ["value-at-most-limit", "value-plus-expanded-uncertainty-at-most-limit"], ju = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/;
function Je(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const ze = (e) => typeof e == "string" && e.trim().length > 0, Rr = (e) => Array.isArray(e) && e.length > 0 && e.every(ze) && new Set(e).size === e.length;
function ia(e) {
  if (!Je(e) || !ze(e.id) || !ze(e.version) || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Reliance profile identity, version or status is invalid.");
  const t = e.binding;
  if (!Je(t) || !ze(t.id) || !ze(t.version))
    throw new TypeError("Reliance profile must name exactly one binding and version.");
  if (!Array.isArray(e.trustAnchors) || e.trustAnchors.some((u) => !Je(u) || !ze(u.id) || !Rr(u.purposes)))
    throw new TypeError("Reliance profile trustAnchors must list anchors with explicit purposes.");
  const n = e.authority;
  if (!Je(n) || !Rr(n.certificateRoutes) || !Array.isArray(n.globalRestrictions) || !n.globalRestrictions.every(ze) || !Number.isSafeInteger(n.maxRoutes) || n.maxRoutes <= 0)
    throw new TypeError("Reliance profile authority needs certificateRoutes, globalRestrictions and a positive maxRoutes.");
  const i = e.credentialStatus;
  if (!Je(i) || typeof i.required != "boolean" || !Rr(i.purposes) || !Number.isSafeInteger(i.maxAgeSeconds) || i.maxAgeSeconds <= 0)
    throw new TypeError("Reliance profile credentialStatus needs required, purposes and a positive maxAgeSeconds.");
  const o = e.mapping;
  if (!Je(o) || !Da.includes(o.methodSuccession))
    throw new TypeError(`Reliance profile mapping.methodSuccession must be one of ${Da.join(", ")}.`);
  const r = e.conformity;
  if (!Je(r) || !Array.isArray(r.requirements) || !Array.isArray(r.decisionRules) || r.requirements.some((u) => !Je(u) || !ze(u.id) || !ze(u.propertyIri) || !ze(u.quantityKindIri) || !Je(u.upperLimit) || typeof u.upperLimit.value != "string" || !ju.test(u.upperLimit.value) || !ze(u.upperLimit.unit)) || r.decisionRules.some((u) => !Je(u) || !ze(u.id) || !Ru.includes(u.acceptWhen)))
    throw new TypeError("Reliance profile conformity needs requirements (id, propertyIri, quantityKindIri, upperLimit) and decisionRules (id, acceptWhen).");
  if (e.bindingRules !== void 0 && !Je(e.bindingRules))
    throw new TypeError("Reliance profile bindingRules must be an object when present.");
  const s = r.requirements, a = r.decisionRules, c = [...s.map((u) => u.id), ...a.map((u) => u.id)];
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
      required: i.required,
      purposes: Object.freeze([...i.purposes]),
      maxAgeSeconds: i.maxAgeSeconds
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
function jr(e, t) {
  if (new Set(e).size !== e.length)
    throw new TypeError(`${t} must not contain duplicates.`);
}
function Os(e, t) {
  const n = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/.exec(e);
  if (!n)
    throw new TypeError(`${t} must be an ISO 8601 date-time with an explicit offset.`);
  const [, i, o, r, s, a, c] = n, u = n[7], f = Number(i), g = Number(o), p = Number(r), h = Number(s), x = Number(a), w = Number(c), b = /* @__PURE__ */ new Date(0);
  b.setUTCFullYear(f, g - 1, p), b.setUTCHours(0, 0, 0, 0);
  const S = b.getUTCFullYear() !== f || b.getUTCMonth() !== g - 1 || b.getUTCDate() !== p, v = u === "Z" ? null : /^([+-])(\d{2}):(\d{2})$/.exec(u), y = v !== null && (Number(v[2]) > 23 || Number(v[3]) > 59);
  if (f < 1 || S || h > 23 || x > 59 || w > 59 || y || !Number.isFinite(Date.parse(e)))
    throw new TypeError(`${t} must be a valid ISO 8601 date-time.`);
}
function $r(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0)
    throw new TypeError(`${t} must be a positive safe integer.`);
}
function Ki(e, t) {
  ue(e.id, `${t}.id`), ue(e.version, `${t}.version`);
}
function Qi(e) {
  return Object.freeze({ id: e.id, version: e.version });
}
function Sn(e) {
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
function $u(e) {
  if (ue(e.requestId, "requestId"), ue(e.targetId, "targetId"), ue(e.purpose, "purpose"), ue(e.trustConfigId, "trustConfigId"), Ki(e.binding, "binding"), Ki(e.profile, "profile"), Os(e.evaluationTime, "evaluationTime"), Os(e.activityTime, "activityTime"), e.selectedClaims.length === 0)
    throw new TypeError("selectedClaims must contain at least one claim.");
  for (const [r, s] of e.selectedClaims.entries())
    ue(s.id, `selectedClaims[${r}].id`), ue(s.sourcePointer, `selectedClaims[${r}].sourcePointer`);
  jr(e.selectedClaims.map((r) => r.id), "selected claim IDs"), jr(e.selectedClaims.map((r) => r.sourcePointer), "selected claim source pointers");
  for (const [r, s] of e.suppliedEvidence.entries())
    ue(s, `suppliedEvidence[${r}]`);
  jr(e.suppliedEvidence, "suppliedEvidence"), $r(e.resolverLimits.maxResources, "resolverLimits.maxResources"), $r(e.resolverLimits.maxDepth, "resolverLimits.maxDepth"), $r(e.resolverLimits.maxBytes, "resolverLimits.maxBytes"), e.conformity && (ue(e.conformity.requirementId, "conformity.requirementId"), ue(e.conformity.decisionRuleId, "conformity.decisionRuleId"));
  const t = Object.freeze(e.selectedClaims.map((r) => Object.freeze({
    id: r.id,
    sourcePointer: r.sourcePointer
  }))), n = Object.freeze([...e.suppliedEvidence]), i = Object.freeze({ ...e.resolverLimits }), o = e.conformity ? Object.freeze({ ...e.conformity }) : void 0;
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    selectedClaims: t,
    purpose: e.purpose,
    binding: Qi(e.binding),
    profile: Qi(e.profile),
    trustConfigId: e.trustConfigId,
    evaluationTime: e.evaluationTime,
    activityTime: e.activityTime,
    suppliedEvidence: n,
    resolverLimits: i,
    ...o ? { conformity: o } : {}
  });
}
function _u(e, t) {
  if (!Number.isInteger(e.gate) || e.gate < 0 || e.gate > 6)
    throw new TypeError(`trace[${t}].gate must be a canonical gate number 0-6.`);
  ue(e.nodeUse, `trace[${t}].nodeUse`), ue(e.predicate, `trace[${t}].predicate`), ue(e.reason, `trace[${t}].reason`);
  const n = Sn({
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
function Pu(e, t) {
  if (ue(e.uri, `resources[${t}].uri`), !/^sha384-[A-Za-z0-9+/]{64}$/.test(e.digestSRI))
    throw new TypeError(`resources[${t}].digestSRI must be a SHA-384 SRI value.`);
  if (!["static", "artifact", "status"].includes(e.kind) || !["catalog", "supplied"].includes(e.source))
    throw new TypeError(`resources[${t}] has an unsupported kind or source.`);
  return Os(e.observedAt, `resources[${t}].observedAt`), Object.freeze({ ...e });
}
function sr(e) {
  if (ue(e.requestId, "requestId"), ue(e.targetId, "targetId"), Ki(e.binding, "binding"), Ki(e.profile, "profile"), e.artifactVerification.forEach((t, n) => ue(t.artifactId, `artifactVerification[${n}].artifactId`)), e.authorization.forEach((t, n) => ue(t.claimId, `authorization[${n}].claimId`)), e.support.forEach((t, n) => ue(t.obligationId, `support[${n}].obligationId`)), e.conformity.requested)
    ue(e.conformity.requirementId, "conformity.requirementId"), ue(e.conformity.decisionRuleId, "conformity.decisionRuleId");
  else if (e.conformity.requested !== !1 || e.conformity.execution !== "not_run")
    throw new TypeError("Unrequested conformity must have execution state not_run.");
  if (!["accept", "reject", "not_established"].includes(e.decision))
    throw new TypeError(`Unsupported reliance decision: ${String(e.decision)}.`);
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: Qi(e.binding),
    profile: Qi(e.profile),
    artifactVerification: Object.freeze(e.artifactVerification.map((t) => Sn({
      ...t
    }))),
    authorization: Object.freeze(e.authorization.map((t) => Object.freeze({
      ...Sn(t),
      routeWitnessIds: Object.freeze([...t.routeWitnessIds])
    }))),
    support: Object.freeze(e.support.map((t) => Object.freeze({
      ...Sn(t),
      witnessIds: Object.freeze([...t.witnessIds])
    }))),
    conformity: e.conformity.requested ? Sn({ ...e.conformity }) : Object.freeze({ requested: !1, execution: "not_run" }),
    decision: e.decision,
    trace: Object.freeze((e.trace ?? []).map(_u)),
    resources: Object.freeze((e.resources ?? []).map(Pu)),
    limitations: Object.freeze([...e.limitations ?? []])
  });
}
function Ed(e, t) {
  if (e.length === 0)
    throw new TypeError(`${t} requires at least one semantic state.`);
  for (const n of e)
    if (!["established", "contradicted", "not_established"].includes(n))
      throw new TypeError(`${t} received unsupported semantic state: ${String(n)}.`);
}
function xe(e) {
  return Ed(e, "semanticAnd"), e.includes("contradicted") ? "contradicted" : e.every((t) => t === "established") ? "established" : "not_established";
}
function pn(e) {
  return Ed(e, "semanticOr"), e.includes("established") ? "established" : e.every((t) => t === "contradicted") ? "contradicted" : "not_established";
}
function ra(e) {
  const t = xe(e);
  return t === "established" ? "accept" : t === "contradicted" ? "reject" : "not_established";
}
var za = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Tu(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function i() {
      return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(i) {
    var o = Object.getOwnPropertyDescriptor(e, i);
    Object.defineProperty(n, i, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[i];
      }
    });
  }), n;
}
var Gn = { exports: {} }, _r = {}, mt = {}, Nt = {}, Pr = {}, Tr = {}, Cr = {}, Ua;
function Wi() {
  return Ua || (Ua = 1, (function(e) {
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
    function o(S, ...v) {
      const y = [S[0]];
      let d = 0;
      for (; d < v.length; )
        a(y, v[d]), y.push(S[++d]);
      return new i(y);
    }
    e._ = o;
    const r = new i("+");
    function s(S, ...v) {
      const y = [h(S[0])];
      let d = 0;
      for (; d < v.length; )
        y.push(r), a(y, v[d]), y.push(r, h(S[++d]));
      return c(y), new i(y);
    }
    e.str = s;
    function a(S, v) {
      v instanceof i ? S.push(...v._items) : v instanceof n ? S.push(v) : S.push(g(v));
    }
    e.addCodeArg = a;
    function c(S) {
      let v = 1;
      for (; v < S.length - 1; ) {
        if (S[v] === r) {
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
    function f(S, v) {
      return v.emptyStr() ? S : S.emptyStr() ? v : s`${S}${v}`;
    }
    e.strConcat = f;
    function g(S) {
      return typeof S == "number" || typeof S == "boolean" || S === null ? S : h(Array.isArray(S) ? S.join(",") : S);
    }
    function p(S) {
      return new i(h(S));
    }
    e.stringify = p;
    function h(S) {
      return JSON.stringify(S).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = h;
    function x(S) {
      return typeof S == "string" && e.IDENTIFIER.test(S) ? new i(`.${S}`) : o`[${S}]`;
    }
    e.getProperty = x;
    function w(S) {
      if (typeof S == "string" && e.IDENTIFIER.test(S))
        return new i(`${S}`);
      throw new Error(`CodeGen: invalid export name: ${S}, use explicit $id name mapping`);
    }
    e.getEsmExportName = w;
    function b(S) {
      return new i(S.toString());
    }
    e.regexpCode = b;
  })(Cr)), Cr;
}
var Er = {}, Va;
function Ga() {
  return Va || (Va = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Wi();
    class n extends Error {
      constructor(u) {
        super(`CodeGen: "code" for ${u} not defined`), this.value = u.value;
      }
    }
    var i;
    (function(c) {
      c[c.Started = 0] = "Started", c[c.Completed = 1] = "Completed";
    })(i || (e.UsedValueState = i = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class o {
      constructor({ prefixes: u, parent: f } = {}) {
        this._names = {}, this._prefixes = u, this._parent = f;
      }
      toName(u) {
        return u instanceof t.Name ? u : this.name(u);
      }
      name(u) {
        return new t.Name(this._newName(u));
      }
      _newName(u) {
        const f = this._names[u] || this._nameGroup(u);
        return `${u}${f.index++}`;
      }
      _nameGroup(u) {
        var f, g;
        if (!((g = (f = this._parent) === null || f === void 0 ? void 0 : f._prefixes) === null || g === void 0) && g.has(u) || this._prefixes && !this._prefixes.has(u))
          throw new Error(`CodeGen: prefix "${u}" is not allowed in this scope`);
        return this._names[u] = { prefix: u, index: 0 };
      }
    }
    e.Scope = o;
    class r extends t.Name {
      constructor(u, f) {
        super(f), this.prefix = u;
      }
      setValue(u, { property: f, itemIndex: g }) {
        this.value = u, this.scopePath = (0, t._)`.${new t.Name(f)}[${g}]`;
      }
    }
    e.ValueScopeName = r;
    const s = (0, t._)`\n`;
    class a extends o {
      constructor(u) {
        super(u), this._values = {}, this._scope = u.scope, this.opts = { ...u, _n: u.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(u) {
        return new r(u, this._newName(u));
      }
      value(u, f) {
        var g;
        if (f.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const p = this.toName(u), { prefix: h } = p, x = (g = f.key) !== null && g !== void 0 ? g : f.ref;
        let w = this._values[h];
        if (w) {
          const v = w.get(x);
          if (v)
            return v;
        } else
          w = this._values[h] = /* @__PURE__ */ new Map();
        w.set(x, p);
        const b = this._scope[h] || (this._scope[h] = []), S = b.length;
        return b[S] = f.ref, p.setValue(f, { property: h, itemIndex: S }), p;
      }
      getValue(u, f) {
        const g = this._values[u];
        if (g)
          return g.get(f);
      }
      scopeRefs(u, f = this._values) {
        return this._reduceValues(f, (g) => {
          if (g.scopePath === void 0)
            throw new Error(`CodeGen: name "${g}" has no value`);
          return (0, t._)`${u}${g.scopePath}`;
        });
      }
      scopeCode(u = this._values, f, g) {
        return this._reduceValues(u, (p) => {
          if (p.value === void 0)
            throw new Error(`CodeGen: name "${p}" has no value`);
          return p.value.code;
        }, f, g);
      }
      _reduceValues(u, f, g = {}, p) {
        let h = t.nil;
        for (const x in u) {
          const w = u[x];
          if (!w)
            continue;
          const b = g[x] = g[x] || /* @__PURE__ */ new Map();
          w.forEach((S) => {
            if (b.has(S))
              return;
            b.set(S, i.Started);
            let v = f(S);
            if (v) {
              const y = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              h = (0, t._)`${h}${y} ${S} = ${v};${this.opts._n}`;
            } else if (v = p?.(S))
              h = (0, t._)`${h}${v}${this.opts._n}`;
            else
              throw new n(S);
            b.set(S, i.Completed);
          });
        }
        return h;
      }
    }
    e.ValueScope = a;
  })(Er)), Er;
}
var Fa;
function te() {
  return Fa || (Fa = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Wi(), n = /* @__PURE__ */ Ga();
    var i = /* @__PURE__ */ Wi();
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
    var o = /* @__PURE__ */ Ga();
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
    class r {
      optimizeNodes() {
        return this;
      }
      optimizeNames($, q) {
        return this;
      }
    }
    class s extends r {
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
    class a extends r {
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
    class u extends r {
      constructor($) {
        super(), this.label = $, this.names = {};
      }
      render({ _n: $ }) {
        return `${this.label}:` + $;
      }
    }
    class f extends r {
      constructor($) {
        super(), this.label = $, this.names = {};
      }
      render({ _n: $ }) {
        return `break${this.label ? ` ${this.label}` : ""};` + $;
      }
    }
    class g extends r {
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
    class p extends r {
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
    class h extends r {
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
          const H = T[z];
          H.optimizeNames($, q) || (D($, H.names), T.splice(z, 1));
        }
        return T.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce(($, q) => O($, q.names), {});
      }
    }
    class x extends h {
      render($) {
        return "{" + $._n + super.render($) + "}" + $._n;
      }
    }
    class w extends h {
    }
    class b extends x {
    }
    b.kind = "else";
    class S extends x {
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
    class v extends x {
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
        const q = $.es5 ? n.varKinds.var : this.varKind, { name: T, from: z, to: H } = this;
        return `for(${q} ${T}=${z}; ${T}<${H}; ${T}++)` + super.render($);
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
    class m extends x {
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
    class A extends x {
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
    class R extends x {
      constructor($) {
        super(), this.error = $;
      }
      render($) {
        return `catch(${this.error})` + super.render($);
      }
    }
    R.kind = "catch";
    class j extends x {
      render($) {
        return "finally" + super.render($);
      }
    }
    j.kind = "finally";
    class E {
      constructor($, q = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...q, _n: q.lines ? `
` : "" }, this._extScope = $, this._scope = new n.Scope({ parent: $ }), this._nodes = [new w()];
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
        const H = this._scope.toName(q);
        return T !== void 0 && z && (this._constants[H.str] = T), this._leafNode(new s($, H, T)), H;
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
        return typeof $ == "function" ? $() : $ !== t.nil && this._leafNode(new p($)), this;
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
      forRange($, q, T, z, H = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Q = this._scope.toName($);
        return this._for(new d(H, Q, q, T), () => z(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf($, q, T, z = n.varKinds.const) {
        const H = this._scope.toName($);
        if (this.opts.es5) {
          const Q = q instanceof t.Name ? q : this.var("_arr", q);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (J) => {
            this.var(H, (0, t._)`${Q}[${J}]`), T(H);
          });
        }
        return this._for(new l("of", z, H, q), () => T(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn($, q, T, z = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf($, (0, t._)`Object.keys(${q})`, T);
        const H = this._scope.toName($);
        return this._for(new l("in", z, H, q), () => T(H));
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
        return this._leafNode(new f($));
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
          const H = this.name("e");
          this._currNode = z.catch = new R(H), q(H);
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
      return new t._Code(N._items.reduce((H, Q) => (Q instanceof t.Name && (Q = T(Q)), Q instanceof t._Code ? H.push(...Q._items) : H.push(Q), H), []));
      function T(H) {
        const Q = q[H.str];
        return Q === void 0 || $[H.str] !== 1 ? H : (delete $[H.str], Q);
      }
      function z(H) {
        return H instanceof t._Code && H._items.some((Q) => Q instanceof t.Name && $[Q.str] === 1 && q[Q.str] !== void 0);
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
  })(Tr)), Tr;
}
var ne = {}, Ba;
function ie() {
  if (Ba) return ne;
  Ba = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.checkStrictMode = ne.getErrorPath = ne.Type = ne.useFunc = ne.setEvaluated = ne.evaluatedPropsToName = ne.mergeEvaluated = ne.eachItem = ne.unescapeJsonPointer = ne.escapeJsonPointer = ne.escapeFragment = ne.unescapeFragment = ne.schemaRefOrVal = ne.schemaHasRulesButRef = ne.schemaHasRules = ne.checkUnknownRules = ne.alwaysValidSchema = ne.toHash = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Wi();
  function n(l) {
    const m = {};
    for (const I of l)
      m[I] = !0;
    return m;
  }
  ne.toHash = n;
  function i(l, m) {
    return typeof m == "boolean" ? m : Object.keys(m).length === 0 ? !0 : (o(l, m), !r(m, l.self.RULES.all));
  }
  ne.alwaysValidSchema = i;
  function o(l, m = l.schema) {
    const { opts: I, self: A } = l;
    if (!I.strictSchema || typeof m == "boolean")
      return;
    const R = A.RULES.keywords;
    for (const j in m)
      R[j] || d(l, `unknown keyword: "${j}"`);
  }
  ne.checkUnknownRules = o;
  function r(l, m) {
    if (typeof l == "boolean")
      return !l;
    for (const I in l)
      if (m[I])
        return !0;
    return !1;
  }
  ne.schemaHasRules = r;
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
    return encodeURIComponent(f(l));
  }
  ne.escapeFragment = u;
  function f(l) {
    return typeof l == "number" ? `${l}` : l.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ne.escapeJsonPointer = f;
  function g(l) {
    return l.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ne.unescapeJsonPointer = g;
  function p(l, m) {
    if (Array.isArray(l))
      for (const I of l)
        m(I);
    else
      m(l);
  }
  ne.eachItem = p;
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
        m === !0 ? l.assign(I, !0) : (l.assign(I, (0, e._)`${I} || {}`), w(l, I, m));
      }),
      mergeValues: (l, m) => l === !0 ? !0 : { ...l, ...m },
      resultToName: x
    }),
    items: h({
      mergeNames: (l, m, I) => l.if((0, e._)`${I} !== true && ${m} !== undefined`, () => l.assign(I, (0, e._)`${m} === true ? true : ${I} > ${m} ? ${I} : ${m}`)),
      mergeToName: (l, m, I) => l.if((0, e._)`${I} !== true`, () => l.assign(I, m === !0 ? !0 : (0, e._)`${I} > ${m} ? ${I} : ${m}`)),
      mergeValues: (l, m) => l === !0 ? !0 : Math.max(l, m),
      resultToName: (l, m) => l.var("items", m)
    })
  };
  function x(l, m) {
    if (m === !0)
      return l.var("props", !0);
    const I = l.var("props", (0, e._)`{}`);
    return m !== void 0 && w(l, I, m), I;
  }
  ne.evaluatedPropsToName = x;
  function w(l, m, I) {
    Object.keys(I).forEach((A) => l.assign((0, e._)`${m}${(0, e.getProperty)(A)}`, !0));
  }
  ne.setEvaluated = w;
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
    return I ? (0, e.getProperty)(l).toString() : "/" + f(l);
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
var Fn = {}, Za;
function et() {
  if (Za) return Fn;
  Za = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
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
var Ha;
function ar() {
  return Ha || (Ha = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ et();
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
    function r(b, S = e.keywordError, v) {
      const { it: y } = b, { gen: d, compositeRule: l, allErrors: m } = y, I = g(b, S, v);
      c(d, I), l || m || u(y, i.default.vErrors);
    }
    e.reportExtraError = r;
    function s(b, S) {
      b.assign(i.default.errors, S), b.if((0, t._)`${i.default.vErrors} !== null`, () => b.if(S, () => b.assign((0, t._)`${i.default.vErrors}.length`, S), () => b.assign(i.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: b, keyword: S, schemaValue: v, data: y, errsCount: d, it: l }) {
      if (d === void 0)
        throw new Error("ajv implementation error");
      const m = b.name("err");
      b.forRange("i", d, i.default.errors, (I) => {
        b.const(m, (0, t._)`${i.default.vErrors}[${I}]`), b.if((0, t._)`${m}.instancePath === undefined`, () => b.assign((0, t._)`${m}.instancePath`, (0, t.strConcat)(i.default.instancePath, l.errorPath))), b.assign((0, t._)`${m}.schemaPath`, (0, t.str)`${l.errSchemaPath}/${S}`), l.opts.verbose && (b.assign((0, t._)`${m}.schema`, v), b.assign((0, t._)`${m}.data`, y));
      });
    }
    e.extendErrors = a;
    function c(b, S) {
      const v = b.const("err", S);
      b.if((0, t._)`${i.default.vErrors} === null`, () => b.assign(i.default.vErrors, (0, t._)`[${v}]`), (0, t._)`${i.default.vErrors}.push(${v})`), b.code((0, t._)`${i.default.errors}++`);
    }
    function u(b, S) {
      const { gen: v, validateName: y, schemaEnv: d } = b;
      d.$async ? v.throw((0, t._)`new ${b.ValidationError}(${S})`) : (v.assign((0, t._)`${y}.errors`, S), v.return(!1));
    }
    const f = {
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
      return y === !1 ? (0, t._)`{}` : p(b, S, v);
    }
    function p(b, S, v = {}) {
      const { gen: y, it: d } = b, l = [
        h(d, v),
        x(b, v)
      ];
      return w(b, S, l), y.object(...l);
    }
    function h({ errorPath: b }, { instancePath: S }) {
      const v = S ? (0, t.str)`${b}${(0, n.getErrorPath)(S, n.Type.Str)}` : b;
      return [i.default.instancePath, (0, t.strConcat)(i.default.instancePath, v)];
    }
    function x({ keyword: b, it: { errSchemaPath: S } }, { schemaPath: v, parentSchema: y }) {
      let d = y ? S : (0, t.str)`${S}/${b}`;
      return v && (d = (0, t.str)`${d}${(0, n.getErrorPath)(v, n.Type.Str)}`), [f.schemaPath, d];
    }
    function w(b, { params: S, message: v }, y) {
      const { keyword: d, data: l, schemaValue: m, it: I } = b, { opts: A, propertyName: R, topSchemaRef: j, schemaPath: E } = I;
      y.push([f.keyword, d], [f.params, typeof S == "function" ? S(b) : S || (0, t._)`{}`]), A.messages && y.push([f.message, typeof v == "function" ? v(b) : v]), A.verbose && y.push([f.schema, m], [f.parentSchema, (0, t._)`${j}${E}`], [i.default.data, l]), R && y.push([f.propertyName, R]);
    }
  })(Pr)), Pr;
}
var Ja;
function Cu() {
  if (Ja) return Nt;
  Ja = 1, Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.boolOrEmptySchema = Nt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ ar(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ et(), i = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: c, schema: u, validateName: f } = a;
    u === !1 ? s(a, !1) : typeof u == "object" && u.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${f}.errors`, null), c.return(!0));
  }
  Nt.topBoolOrEmptySchema = o;
  function r(a, c) {
    const { gen: u, schema: f } = a;
    f === !1 ? (u.var(c, !1), s(a)) : u.var(c, !0);
  }
  Nt.boolOrEmptySchema = r;
  function s(a, c) {
    const { gen: u, data: f } = a, g = {
      gen: u,
      keyword: "false schema",
      data: f,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(g, i, void 0, c);
  }
  return Nt;
}
var be = {}, Dt = {}, Ka;
function kd() {
  if (Ka) return Dt;
  Ka = 1, Object.defineProperty(Dt, "__esModule", { value: !0 }), Dt.getRules = Dt.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(o) {
    return typeof o == "string" && t.has(o);
  }
  Dt.isJSONType = n;
  function i() {
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
  return Dt.getRules = i, Dt;
}
var yt = {}, Qa;
function Md() {
  if (Qa) return yt;
  Qa = 1, Object.defineProperty(yt, "__esModule", { value: !0 }), yt.shouldUseRule = yt.shouldUseGroup = yt.schemaHasRulesForType = void 0;
  function e({ schema: i, self: o }, r) {
    const s = o.RULES.types[r];
    return s && s !== !0 && t(i, s);
  }
  yt.schemaHasRulesForType = e;
  function t(i, o) {
    return o.rules.some((r) => n(i, r));
  }
  yt.shouldUseGroup = t;
  function n(i, o) {
    var r;
    return i[o.keyword] !== void 0 || ((r = o.definition.implements) === null || r === void 0 ? void 0 : r.some((s) => i[s] !== void 0));
  }
  return yt.shouldUseRule = n, yt;
}
var Wa;
function Xi() {
  if (Wa) return be;
  Wa = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.reportTypeError = be.checkDataTypes = be.checkDataType = be.coerceAndCheckDataType = be.getJSONTypes = be.getSchemaTypes = be.DataType = void 0;
  const e = /* @__PURE__ */ kd(), t = /* @__PURE__ */ Md(), n = /* @__PURE__ */ ar(), i = /* @__PURE__ */ te(), o = /* @__PURE__ */ ie();
  var r;
  (function(v) {
    v[v.Correct = 0] = "Correct", v[v.Wrong = 1] = "Wrong";
  })(r || (be.DataType = r = {}));
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
  be.getSchemaTypes = s;
  function a(v) {
    const y = Array.isArray(v) ? v : v ? [v] : [];
    if (y.every(e.isJSONType))
      return y;
    throw new Error("type must be JSONType or JSONType[]: " + y.join(","));
  }
  be.getJSONTypes = a;
  function c(v, y) {
    const { gen: d, data: l, opts: m } = v, I = f(y, m.coerceTypes), A = y.length > 0 && !(I.length === 0 && y.length === 1 && (0, t.schemaHasRulesForType)(v, y[0]));
    if (A) {
      const R = x(y, l, m.strictNumbers, r.Wrong);
      d.if(R, () => {
        I.length ? g(v, y, I) : b(v);
      });
    }
    return A;
  }
  be.coerceAndCheckDataType = c;
  const u = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function f(v, y) {
    return y ? v.filter((d) => u.has(d) || y === "array" && d === "array") : [];
  }
  function g(v, y, d) {
    const { gen: l, data: m, opts: I } = v, A = l.let("dataType", (0, i._)`typeof ${m}`), R = l.let("coerced", (0, i._)`undefined`);
    I.coerceTypes === "array" && l.if((0, i._)`${A} == 'object' && Array.isArray(${m}) && ${m}.length == 1`, () => l.assign(m, (0, i._)`${m}[0]`).assign(A, (0, i._)`typeof ${m}`).if(x(y, m, I.strictNumbers), () => l.assign(R, m))), l.if((0, i._)`${R} !== undefined`);
    for (const E of d)
      (u.has(E) || E === "array" && I.coerceTypes === "array") && j(E);
    l.else(), b(v), l.endIf(), l.if((0, i._)`${R} !== undefined`, () => {
      l.assign(m, R), p(v, R);
    });
    function j(E) {
      switch (E) {
        case "string":
          l.elseIf((0, i._)`${A} == "number" || ${A} == "boolean"`).assign(R, (0, i._)`"" + ${m}`).elseIf((0, i._)`${m} === null`).assign(R, (0, i._)`""`);
          return;
        case "number":
          l.elseIf((0, i._)`${A} == "boolean" || ${m} === null
              || (${A} == "string" && ${m} && ${m} == +${m})`).assign(R, (0, i._)`+${m}`);
          return;
        case "integer":
          l.elseIf((0, i._)`${A} === "boolean" || ${m} === null
              || (${A} === "string" && ${m} && ${m} == +${m} && !(${m} % 1))`).assign(R, (0, i._)`+${m}`);
          return;
        case "boolean":
          l.elseIf((0, i._)`${m} === "false" || ${m} === 0 || ${m} === null`).assign(R, !1).elseIf((0, i._)`${m} === "true" || ${m} === 1`).assign(R, !0);
          return;
        case "null":
          l.elseIf((0, i._)`${m} === "" || ${m} === 0 || ${m} === false`), l.assign(R, null);
          return;
        case "array":
          l.elseIf((0, i._)`${A} === "string" || ${A} === "number"
              || ${A} === "boolean" || ${m} === null`).assign(R, (0, i._)`[${m}]`);
      }
    }
  }
  function p({ gen: v, parentData: y, parentDataProperty: d }, l) {
    v.if((0, i._)`${y} !== undefined`, () => v.assign((0, i._)`${y}[${d}]`, l));
  }
  function h(v, y, d, l = r.Correct) {
    const m = l === r.Correct ? i.operators.EQ : i.operators.NEQ;
    let I;
    switch (v) {
      case "null":
        return (0, i._)`${y} ${m} null`;
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
        return (0, i._)`typeof ${y} ${m} ${v}`;
    }
    return l === r.Correct ? I : (0, i.not)(I);
    function A(R = i.nil) {
      return (0, i.and)((0, i._)`typeof ${y} == "number"`, R, d ? (0, i._)`isFinite(${y})` : i.nil);
    }
  }
  be.checkDataType = h;
  function x(v, y, d, l) {
    if (v.length === 1)
      return h(v[0], y, d, l);
    let m;
    const I = (0, o.toHash)(v);
    if (I.array && I.object) {
      const A = (0, i._)`typeof ${y} != "object"`;
      m = I.null ? A : (0, i._)`!${y} || ${A}`, delete I.null, delete I.array, delete I.object;
    } else
      m = i.nil;
    I.number && delete I.integer;
    for (const A in I)
      m = (0, i.and)(m, h(A, y, d, l));
    return m;
  }
  be.checkDataTypes = x;
  const w = {
    message: ({ schema: v }) => `must be ${v}`,
    params: ({ schema: v, schemaValue: y }) => typeof v == "string" ? (0, i._)`{type: ${v}}` : (0, i._)`{type: ${y}}`
  };
  function b(v) {
    const y = S(v);
    (0, n.reportError)(y, w);
  }
  be.reportTypeError = b;
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
  return be;
}
var hn = {}, Xa;
function Eu() {
  if (Xa) return hn;
  Xa = 1, Object.defineProperty(hn, "__esModule", { value: !0 }), hn.assignDefaults = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie();
  function n(o, r) {
    const { properties: s, items: a } = o.schema;
    if (r === "object" && s)
      for (const c in s)
        i(o, c, s[c].default);
    else r === "array" && Array.isArray(a) && a.forEach((c, u) => i(o, u, c.default));
  }
  hn.assignDefaults = n;
  function i(o, r, s) {
    const { gen: a, compositeRule: c, data: u, opts: f } = o;
    if (s === void 0)
      return;
    const g = (0, e._)`${u}${(0, e.getProperty)(r)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${g}`);
      return;
    }
    let p = (0, e._)`${g} === undefined`;
    f.useDefaults === "empty" && (p = (0, e._)`${p} || ${g} === null || ${g} === ""`), a.if(p, (0, e._)`${g} = ${(0, e.stringify)(s)}`);
  }
  return hn;
}
var Ke = {}, oe = {}, Ya;
function tt() {
  if (Ya) return oe;
  Ya = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.validateUnion = oe.validateArray = oe.usePattern = oe.callValidateCode = oe.schemaProperties = oe.allSchemaProperties = oe.noPropertyInData = oe.propertyInData = oe.isOwnProperty = oe.hasPropFunc = oe.reportMissingProp = oe.checkMissingProp = oe.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ et(), i = /* @__PURE__ */ ie();
  function o(v, y) {
    const { gen: d, data: l, it: m } = v;
    d.if(f(d, l, y, m.opts.ownProperties), () => {
      v.setParams({ missingProperty: (0, e._)`${y}` }, !0), v.error();
    });
  }
  oe.checkReportMissingProp = o;
  function r({ gen: v, data: y, it: { opts: d } }, l, m) {
    return (0, e.or)(...l.map((I) => (0, e.and)(f(v, y, I, d.ownProperties), (0, e._)`${m} = ${I}`)));
  }
  oe.checkMissingProp = r;
  function s(v, y) {
    v.setParams({ missingProperty: y }, !0), v.error();
  }
  oe.reportMissingProp = s;
  function a(v) {
    return v.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  oe.hasPropFunc = a;
  function c(v, y, d) {
    return (0, e._)`${a(v)}.call(${y}, ${d})`;
  }
  oe.isOwnProperty = c;
  function u(v, y, d, l) {
    const m = (0, e._)`${y}${(0, e.getProperty)(d)} !== undefined`;
    return l ? (0, e._)`${m} && ${c(v, y, d)}` : m;
  }
  oe.propertyInData = u;
  function f(v, y, d, l) {
    const m = (0, e._)`${y}${(0, e.getProperty)(d)} === undefined`;
    return l ? (0, e.or)(m, (0, e.not)(c(v, y, d))) : m;
  }
  oe.noPropertyInData = f;
  function g(v) {
    return v ? Object.keys(v).filter((y) => y !== "__proto__") : [];
  }
  oe.allSchemaProperties = g;
  function p(v, y) {
    return g(y).filter((d) => !(0, t.alwaysValidSchema)(v, y[d]));
  }
  oe.schemaProperties = p;
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
  oe.callValidateCode = h;
  const x = (0, e._)`new RegExp`;
  function w({ gen: v, it: { opts: y } }, d) {
    const l = y.unicodeRegExp ? "u" : "", { regExp: m } = y.code, I = m(d, l);
    return v.scopeValue("pattern", {
      key: I.toString(),
      ref: I,
      code: (0, e._)`${m.code === "new RegExp" ? x : (0, i.useFunc)(v, m)}(${d}, ${l})`
    });
  }
  oe.usePattern = w;
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
  oe.validateArray = b;
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
  return oe.validateUnion = S, oe;
}
var eo;
function ku() {
  if (eo) return Ke;
  eo = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.validateKeywordUsage = Ke.validSchemaType = Ke.funcKeywordCode = Ke.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ et(), n = /* @__PURE__ */ tt(), i = /* @__PURE__ */ ar();
  function o(p, h) {
    const { gen: x, keyword: w, schema: b, parentSchema: S, it: v } = p, y = h.macro.call(v.self, b, S, v), d = u(x, w, y);
    v.opts.validateSchema !== !1 && v.self.validateSchema(y, !0);
    const l = x.name("valid");
    p.subschema({
      schema: y,
      schemaPath: e.nil,
      errSchemaPath: `${v.errSchemaPath}/${w}`,
      topSchemaRef: d,
      compositeRule: !0
    }, l), p.pass(l, () => p.error(!0));
  }
  Ke.macroKeywordCode = o;
  function r(p, h) {
    var x;
    const { gen: w, keyword: b, schema: S, parentSchema: v, $data: y, it: d } = p;
    c(d, h);
    const l = !y && h.compile ? h.compile.call(d.self, S, v, d) : h.validate, m = u(w, b, l), I = w.let("valid");
    p.block$data(I, A), p.ok((x = h.valid) !== null && x !== void 0 ? x : I);
    function A() {
      if (h.errors === !1)
        E(), h.modifying && s(p), O(() => p.error());
      else {
        const P = h.async ? R() : j();
        h.modifying && s(p), O(() => a(p, P));
      }
    }
    function R() {
      const P = w.let("ruleErrs", null);
      return w.try(() => E((0, e._)`await `), (C) => w.assign(I, !1).if((0, e._)`${C} instanceof ${d.ValidationError}`, () => w.assign(P, (0, e._)`${C}.errors`), () => w.throw(C))), P;
    }
    function j() {
      const P = (0, e._)`${m}.errors`;
      return w.assign(P, null), E(e.nil), P;
    }
    function E(P = h.async ? (0, e._)`await ` : e.nil) {
      const C = d.opts.passContext ? t.default.this : t.default.self, D = !("compile" in h && !y || h.schema === !1);
      w.assign(I, (0, e._)`${P}${(0, n.callValidateCode)(p, m, C, D)}`, h.modifying);
    }
    function O(P) {
      var C;
      w.if((0, e.not)((C = h.valid) !== null && C !== void 0 ? C : I), P);
    }
  }
  Ke.funcKeywordCode = r;
  function s(p) {
    const { gen: h, data: x, it: w } = p;
    h.if(w.parentData, () => h.assign(x, (0, e._)`${w.parentData}[${w.parentDataProperty}]`));
  }
  function a(p, h) {
    const { gen: x } = p;
    x.if((0, e._)`Array.isArray(${h})`, () => {
      x.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${h} : ${t.default.vErrors}.concat(${h})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, i.extendErrors)(p);
    }, () => p.error());
  }
  function c({ schemaEnv: p }, h) {
    if (h.async && !p.$async)
      throw new Error("async keyword in sync schema");
  }
  function u(p, h, x) {
    if (x === void 0)
      throw new Error(`keyword "${h}" failed to compile`);
    return p.scopeValue("keyword", typeof x == "function" ? { ref: x } : { ref: x, code: (0, e.stringify)(x) });
  }
  function f(p, h, x = !1) {
    return !h.length || h.some((w) => w === "array" ? Array.isArray(p) : w === "object" ? p && typeof p == "object" && !Array.isArray(p) : typeof p == w || x && typeof p > "u");
  }
  Ke.validSchemaType = f;
  function g({ schema: p, opts: h, self: x, errSchemaPath: w }, b, S) {
    if (Array.isArray(b.keyword) ? !b.keyword.includes(S) : b.keyword !== S)
      throw new Error("ajv implementation error");
    const v = b.dependencies;
    if (v?.some((y) => !Object.prototype.hasOwnProperty.call(p, y)))
      throw new Error(`parent schema must have dependencies of ${S}: ${v.join(",")}`);
    if (b.validateSchema && !b.validateSchema(p[S])) {
      const d = `keyword "${S}" value is invalid at path "${w}": ` + x.errorsText(b.validateSchema.errors);
      if (h.validateSchema === "log")
        x.logger.error(d);
      else
        throw new Error(d);
    }
  }
  return Ke.validateKeywordUsage = g, Ke;
}
var gt = {}, to;
function Mu() {
  if (to) return gt;
  to = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.extendSubschemaMode = gt.extendSubschemaData = gt.getSubschema = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie();
  function n(r, { keyword: s, schemaProp: a, schema: c, schemaPath: u, errSchemaPath: f, topSchemaRef: g }) {
    if (s !== void 0 && c !== void 0)
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
    if (c !== void 0) {
      if (u === void 0 || f === void 0 || g === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: u,
        topSchemaRef: g,
        errSchemaPath: f
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  gt.getSubschema = n;
  function i(r, s, { dataProp: a, dataPropType: c, data: u, dataTypes: f, propertyName: g }) {
    if (u !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: p } = s;
    if (a !== void 0) {
      const { errorPath: x, dataPathArr: w, opts: b } = s, S = p.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      h(S), r.errorPath = (0, e.str)`${x}${(0, t.getErrorPath)(a, c, b.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${a}`, r.dataPathArr = [...w, r.parentDataProperty];
    }
    if (u !== void 0) {
      const x = u instanceof e.Name ? u : p.let("data", u, !0);
      h(x), g !== void 0 && (r.propertyName = g);
    }
    f && (r.dataTypes = f);
    function h(x) {
      r.data = x, r.dataLevel = s.dataLevel + 1, r.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), r.parentData = s.data, r.dataNames = [...s.dataNames, x];
    }
  }
  gt.extendSubschemaData = i;
  function o(r, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: c, createErrors: u, allErrors: f }) {
    c !== void 0 && (r.compositeRule = c), u !== void 0 && (r.createErrors = u), f !== void 0 && (r.allErrors = f), r.jtdDiscriminator = s, r.jtdMetadata = a;
  }
  return gt.extendSubschemaMode = o, gt;
}
var Re = {}, kr, no;
function Od() {
  return no || (no = 1, kr = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var i, o, r;
      if (Array.isArray(t)) {
        if (i = t.length, i != n.length) return !1;
        for (o = i; o-- !== 0; )
          if (!e(t[o], n[o])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (r = Object.keys(t), i = r.length, i !== Object.keys(n).length) return !1;
      for (o = i; o-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, r[o])) return !1;
      for (o = i; o-- !== 0; ) {
        var s = r[o];
        if (!e(t[s], n[s])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), kr;
}
var Mr = { exports: {} }, io;
function Ou() {
  if (io) return Mr.exports;
  io = 1;
  var e = Mr.exports = function(i, o, r) {
    typeof o == "function" && (r = o, o = {}), r = o.cb || r;
    var s = typeof r == "function" ? r : r.pre || function() {
    }, a = r.post || function() {
    };
    t(o, s, a, i, "", i);
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
  function t(i, o, r, s, a, c, u, f, g, p) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      o(s, a, c, u, f, g, p);
      for (var h in s) {
        var x = s[h];
        if (Array.isArray(x)) {
          if (h in e.arrayKeywords)
            for (var w = 0; w < x.length; w++)
              t(i, o, r, x[w], a + "/" + h + "/" + w, c, a, h, s, w);
        } else if (h in e.propsKeywords) {
          if (x && typeof x == "object")
            for (var b in x)
              t(i, o, r, x[b], a + "/" + h + "/" + n(b), c, a, h, s, b);
        } else (h in e.keywords || i.allKeys && !(h in e.skipKeywords)) && t(i, o, r, x, a + "/" + h, c, a, h, s);
      }
      r(s, a, c, u, f, g, p);
    }
  }
  function n(i) {
    return i.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Mr.exports;
}
var ro;
function or() {
  if (ro) return Re;
  ro = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.getSchemaRefs = Re.resolveUrl = Re.normalizeId = Re._getFullPath = Re.getFullPath = Re.inlineRef = void 0;
  const e = /* @__PURE__ */ ie(), t = Od(), n = Ou(), i = /* @__PURE__ */ new Set([
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
  function o(w, b = !0) {
    return typeof w == "boolean" ? !0 : b === !0 ? !s(w) : b ? a(w) <= b : !1;
  }
  Re.inlineRef = o;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(w) {
    for (const b in w) {
      if (r.has(b))
        return !0;
      const S = w[b];
      if (Array.isArray(S) && S.some(s) || typeof S == "object" && s(S))
        return !0;
    }
    return !1;
  }
  function a(w) {
    let b = 0;
    for (const S in w) {
      if (S === "$ref")
        return 1 / 0;
      if (b++, !i.has(S) && (typeof w[S] == "object" && (0, e.eachItem)(w[S], (v) => b += a(v)), b === 1 / 0))
        return 1 / 0;
    }
    return b;
  }
  function c(w, b = "", S) {
    S !== !1 && (b = g(b));
    const v = w.parse(b);
    return u(w, v);
  }
  Re.getFullPath = c;
  function u(w, b) {
    return w.serialize(b).split("#")[0] + "#";
  }
  Re._getFullPath = u;
  const f = /#\/?$/;
  function g(w) {
    return w ? w.replace(f, "") : "";
  }
  Re.normalizeId = g;
  function p(w, b, S) {
    return S = g(S), w.resolve(b, S);
  }
  Re.resolveUrl = p;
  const h = /^[a-z_][-a-z0-9._]*$/i;
  function x(w, b) {
    if (typeof w == "boolean")
      return {};
    const { schemaId: S, uriResolver: v } = this.opts, y = g(w[S] || b), d = { "": y }, l = c(v, y, !1), m = {}, I = /* @__PURE__ */ new Set();
    return n(w, { allKeys: !0 }, (j, E, O, P) => {
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
  return Re.getSchemaRefs = x, Re;
}
var so;
function En() {
  if (so) return mt;
  so = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.getData = mt.KeywordCxt = mt.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Cu(), t = /* @__PURE__ */ Xi(), n = /* @__PURE__ */ Md(), i = /* @__PURE__ */ Xi(), o = /* @__PURE__ */ Eu(), r = /* @__PURE__ */ ku(), s = /* @__PURE__ */ Mu(), a = /* @__PURE__ */ te(), c = /* @__PURE__ */ et(), u = /* @__PURE__ */ or(), f = /* @__PURE__ */ ie(), g = /* @__PURE__ */ ar();
  function p(V) {
    if (l(V) && (I(V), d(V))) {
      b(V);
      return;
    }
    h(V, () => (0, e.topBoolOrEmptySchema)(V));
  }
  mt.validateFunctionCode = p;
  function h({ gen: V, validateName: B, schema: Z, schemaEnv: K, opts: W }, ee) {
    W.code.es5 ? V.func(B, (0, a._)`${c.default.data}, ${c.default.valCxt}`, K.$async, () => {
      V.code((0, a._)`"use strict"; ${v(Z, W)}`), w(V, W), V.code(ee);
    }) : V.func(B, (0, a._)`${c.default.data}, ${x(W)}`, K.$async, () => V.code(v(Z, W)).code(ee));
  }
  function x(V) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${V.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function w(V, B) {
    V.if(c.default.valCxt, () => {
      V.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), V.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), V.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), V.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), B.dynamicRef && V.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      V.var(c.default.instancePath, (0, a._)`""`), V.var(c.default.parentData, (0, a._)`undefined`), V.var(c.default.parentDataProperty, (0, a._)`undefined`), V.var(c.default.rootData, c.default.data), B.dynamicRef && V.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function b(V) {
    const { schema: B, opts: Z, gen: K } = V;
    h(V, () => {
      Z.$comment && B.$comment && P(V), j(V), K.let(c.default.vErrors, null), K.let(c.default.errors, 0), Z.unevaluated && S(V), A(V), C(V);
    });
  }
  function S(V) {
    const { gen: B, validateName: Z } = V;
    V.evaluated = B.const("evaluated", (0, a._)`${Z}.evaluated`), B.if((0, a._)`${V.evaluated}.dynamicProps`, () => B.assign((0, a._)`${V.evaluated}.props`, (0, a._)`undefined`)), B.if((0, a._)`${V.evaluated}.dynamicItems`, () => B.assign((0, a._)`${V.evaluated}.items`, (0, a._)`undefined`));
  }
  function v(V, B) {
    const Z = typeof V == "object" && V[B.schemaId];
    return Z && (B.code.source || B.code.process) ? (0, a._)`/*# sourceURL=${Z} */` : a.nil;
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
    for (const Z in V)
      if (B.RULES.all[Z])
        return !0;
    return !1;
  }
  function l(V) {
    return typeof V.schema != "boolean";
  }
  function m(V, B) {
    const { schema: Z, gen: K, opts: W } = V;
    W.$comment && Z.$comment && P(V), E(V), O(V);
    const ee = K.const("_errs", c.default.errors);
    A(V, ee), K.var(B, (0, a._)`${ee} === ${c.default.errors}`);
  }
  function I(V) {
    (0, f.checkUnknownRules)(V), R(V);
  }
  function A(V, B) {
    if (V.opts.jtd)
      return _(V, [], !1, B);
    const Z = (0, t.getSchemaTypes)(V.schema), K = (0, t.coerceAndCheckDataType)(V, Z);
    _(V, Z, !K, B);
  }
  function R(V) {
    const { schema: B, errSchemaPath: Z, opts: K, self: W } = V;
    B.$ref && K.ignoreKeywordsWithRef && (0, f.schemaHasRulesButRef)(B, W.RULES) && W.logger.warn(`$ref: keywords ignored in schema at path "${Z}"`);
  }
  function j(V) {
    const { schema: B, opts: Z } = V;
    B.default !== void 0 && Z.useDefaults && Z.strictSchema && (0, f.checkStrictMode)(V, "default is ignored in the schema root");
  }
  function E(V) {
    const B = V.schema[V.opts.schemaId];
    B && (V.baseId = (0, u.resolveUrl)(V.opts.uriResolver, V.baseId, B));
  }
  function O(V) {
    if (V.schema.$async && !V.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function P({ gen: V, schemaEnv: B, schema: Z, errSchemaPath: K, opts: W }) {
    const ee = Z.$comment;
    if (W.$comment === !0)
      V.code((0, a._)`${c.default.self}.logger.log(${ee})`);
    else if (typeof W.$comment == "function") {
      const re = (0, a.str)`${K}/$comment`, Se = V.scopeValue("root", { ref: B.root });
      V.code((0, a._)`${c.default.self}.opts.$comment(${ee}, ${re}, ${Se}.schema)`);
    }
  }
  function C(V) {
    const { gen: B, schemaEnv: Z, validateName: K, ValidationError: W, opts: ee } = V;
    Z.$async ? B.if((0, a._)`${c.default.errors} === 0`, () => B.return(c.default.data), () => B.throw((0, a._)`new ${W}(${c.default.vErrors})`)) : (B.assign((0, a._)`${K}.errors`, c.default.vErrors), ee.unevaluated && D(V), B.return((0, a._)`${c.default.errors} === 0`));
  }
  function D({ gen: V, evaluated: B, props: Z, items: K }) {
    Z instanceof a.Name && V.assign((0, a._)`${B}.props`, Z), K instanceof a.Name && V.assign((0, a._)`${B}.items`, K);
  }
  function _(V, B, Z, K) {
    const { gen: W, schema: ee, data: re, allErrors: Se, opts: he, self: ye } = V, { RULES: fe } = ye;
    if (ee.$ref && (he.ignoreKeywordsWithRef || !(0, f.schemaHasRulesButRef)(ee, fe))) {
      W.block(() => z(V, "$ref", fe.all.$ref.definition));
      return;
    }
    he.jtd || L(V, B), W.block(() => {
      for (const De of fe.rules)
        nt(De);
      nt(fe.post);
    });
    function nt(De) {
      (0, n.shouldUseGroup)(ee, De) && (De.type ? (W.if((0, i.checkDataType)(De.type, re, he.strictNumbers)), F(V, De), B.length === 1 && B[0] === De.type && Z && (W.else(), (0, i.reportTypeError)(V)), W.endIf()) : F(V, De), Se || W.if((0, a._)`${c.default.errors} === ${K || 0}`));
    }
  }
  function F(V, B) {
    const { gen: Z, schema: K, opts: { useDefaults: W } } = V;
    W && (0, o.assignDefaults)(V, B.type), Z.block(() => {
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
      B.forEach((Z) => {
        N(V.dataTypes, Z) || q(V, `type "${Z}" not allowed by context "${V.dataTypes.join(",")}"`);
      }), $(V, B);
    }
  }
  function k(V, B) {
    B.length > 1 && !(B.length === 2 && B.includes("null")) && q(V, "use allowUnionTypes to allow union type keyword");
  }
  function M(V, B) {
    const Z = V.self.RULES.all;
    for (const K in Z) {
      const W = Z[K];
      if (typeof W == "object" && (0, n.shouldUseRule)(V.schema, W)) {
        const { type: ee } = W.definition;
        ee.length && !ee.some((re) => U(B, re)) && q(V, `missing type "${ee.join(",")}" for keyword "${K}"`);
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
    const Z = [];
    for (const K of V.dataTypes)
      N(B, K) ? Z.push(K) : B.includes("integer") && K === "number" && Z.push("integer");
    V.dataTypes = Z;
  }
  function q(V, B) {
    const Z = V.schemaEnv.baseId + V.errSchemaPath;
    B += ` at "${Z}" (strictTypes)`, (0, f.checkStrictMode)(V, B, V.opts.strictTypes);
  }
  class T {
    constructor(B, Z, K) {
      if ((0, r.validateKeywordUsage)(B, Z, K), this.gen = B.gen, this.allErrors = B.allErrors, this.keyword = K, this.data = B.data, this.schema = B.schema[K], this.$data = Z.$data && B.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, f.schemaRefOrVal)(B, this.schema, K, this.$data), this.schemaType = Z.schemaType, this.parentSchema = B.schema, this.params = {}, this.it = B, this.def = Z, this.$data)
        this.schemaCode = B.gen.const("vSchema", J(this.$data, B));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, Z.schemaType, Z.allowUndefined))
        throw new Error(`${K} value must be ${JSON.stringify(Z.schemaType)}`);
      ("code" in Z ? Z.trackErrors : Z.errors !== !1) && (this.errsCount = B.gen.const("_errs", c.default.errors));
    }
    result(B, Z, K) {
      this.failResult((0, a.not)(B), Z, K);
    }
    failResult(B, Z, K) {
      this.gen.if(B), K ? K() : this.error(), Z ? (this.gen.else(), Z(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(B, Z) {
      this.failResult((0, a.not)(B), void 0, Z);
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
      const { schemaCode: Z } = this;
      this.fail((0, a._)`${Z} !== undefined && (${(0, a.or)(this.invalid$data(), B)})`);
    }
    error(B, Z, K) {
      if (Z) {
        this.setParams(Z), this._error(B, K), this.setParams({});
        return;
      }
      this._error(B, K);
    }
    _error(B, Z) {
      (B ? g.reportExtraError : g.reportError)(this, this.def.error, Z);
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
    setParams(B, Z) {
      Z ? Object.assign(this.params, B) : this.params = B;
    }
    block$data(B, Z, K = a.nil) {
      this.gen.block(() => {
        this.check$data(B, K), Z();
      });
    }
    check$data(B = a.nil, Z = a.nil) {
      if (!this.$data)
        return;
      const { gen: K, schemaCode: W, schemaType: ee, def: re } = this;
      K.if((0, a.or)((0, a._)`${W} === undefined`, Z)), B !== a.nil && K.assign(B, !0), (ee.length || re.validateSchema) && (K.elseIf(this.invalid$data()), this.$dataError(), B !== a.nil && K.assign(B, !1)), K.else();
    }
    invalid$data() {
      const { gen: B, schemaCode: Z, schemaType: K, def: W, it: ee } = this;
      return (0, a.or)(re(), Se());
      function re() {
        if (K.length) {
          if (!(Z instanceof a.Name))
            throw new Error("ajv implementation error");
          const he = Array.isArray(K) ? K : [K];
          return (0, a._)`${(0, i.checkDataTypes)(he, Z, ee.opts.strictNumbers, i.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function Se() {
        if (W.validateSchema) {
          const he = B.scopeValue("validate$data", { ref: W.validateSchema });
          return (0, a._)`!${he}(${Z})`;
        }
        return a.nil;
      }
    }
    subschema(B, Z) {
      const K = (0, s.getSubschema)(this.it, B);
      (0, s.extendSubschemaData)(K, this.it, B), (0, s.extendSubschemaMode)(K, B);
      const W = { ...this.it, ...K, items: void 0, props: void 0 };
      return y(W, Z), W;
    }
    mergeEvaluated(B, Z) {
      const { it: K, gen: W } = this;
      K.opts.unevaluated && (K.props !== !0 && B.props !== void 0 && (K.props = f.mergeEvaluated.props(W, B.props, K.props, Z)), K.items !== !0 && B.items !== void 0 && (K.items = f.mergeEvaluated.items(W, B.items, K.items, Z)));
    }
    mergeValidEvaluated(B, Z) {
      const { it: K, gen: W } = this;
      if (K.opts.unevaluated && (K.props !== !0 || K.items !== !0))
        return W.if(Z, () => this.mergeEvaluated(B, a.Name)), !0;
    }
  }
  mt.KeywordCxt = T;
  function z(V, B, Z, K) {
    const W = new T(V, Z, B);
    "code" in Z ? Z.code(W, K) : W.$data && Z.validate ? (0, r.funcKeywordCode)(W, Z) : "macro" in Z ? (0, r.macroKeywordCode)(W, Z) : (Z.compile || Z.validate) && (0, r.funcKeywordCode)(W, Z);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function J(V, { dataLevel: B, dataNames: Z, dataPathArr: K }) {
    let W, ee;
    if (V === "")
      return c.default.rootData;
    if (V[0] === "/") {
      if (!H.test(V))
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
      if (ee = Z[B - fe], !W)
        return ee;
    }
    let re = ee;
    const Se = W.split("/");
    for (const ye of Se)
      ye && (ee = (0, a._)`${ee}${(0, a.getProperty)((0, f.unescapeJsonPointer)(ye))}`, re = (0, a._)`${re} && ${ee}`);
    return re;
    function he(ye, fe) {
      return `Cannot access ${ye} ${fe} levels up, current level is ${B}`;
    }
  }
  return mt.getData = J, mt;
}
var Bn = {}, ao;
function cr() {
  if (ao) return Bn;
  ao = 1, Object.defineProperty(Bn, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Bn.default = e, Bn;
}
var Zn = {}, oo;
function kn() {
  if (oo) return Zn;
  oo = 1, Object.defineProperty(Zn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ or();
  class t extends Error {
    constructor(i, o, r, s) {
      super(s || `can't resolve reference ${r} from id ${o}`), this.missingRef = (0, e.resolveUrl)(i, o, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(i, this.missingRef));
    }
  }
  return Zn.default = t, Zn;
}
var Ee = {}, co;
function dr() {
  if (co) return Ee;
  co = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.resolveSchema = Ee.getCompilingSchema = Ee.resolveRef = Ee.compileSchema = Ee.SchemaEnv = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ cr(), n = /* @__PURE__ */ et(), i = /* @__PURE__ */ or(), o = /* @__PURE__ */ ie(), r = /* @__PURE__ */ En();
  class s {
    constructor(S) {
      var v;
      this.refs = {}, this.dynamicAnchors = {};
      let y;
      typeof S.schema == "object" && (y = S.schema), this.schema = S.schema, this.schemaId = S.schemaId, this.root = S.root || this, this.baseId = (v = S.baseId) !== null && v !== void 0 ? v : (0, i.normalizeId)(y?.[S.schemaId || "$id"]), this.schemaPath = S.schemaPath, this.localRefs = S.localRefs, this.meta = S.meta, this.$async = y?.$async, this.refs = {};
    }
  }
  Ee.SchemaEnv = s;
  function a(b) {
    const S = f.call(this, b);
    if (S)
      return S;
    const v = (0, i.getFullPath)(this.opts.uriResolver, b.root.baseId), { es5: y, lines: d } = this.opts.code, { ownProperties: l } = this.opts, m = new e.CodeGen(this.scope, { es5: y, lines: d, ownProperties: l });
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
      this._compilations.add(b), (0, r.validateFunctionCode)(R), m.optimize(this.opts.code.optimize);
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
  Ee.compileSchema = a;
  function c(b, S, v) {
    var y;
    v = (0, i.resolveUrl)(this.opts.uriResolver, S, v);
    const d = b.refs[v];
    if (d)
      return d;
    let l = p.call(this, b, v);
    if (l === void 0) {
      const m = (y = b.localRefs) === null || y === void 0 ? void 0 : y[v], { schemaId: I } = this.opts;
      m && (l = new s({ schema: m, schemaId: I, root: b, baseId: S }));
    }
    if (l !== void 0)
      return b.refs[v] = u.call(this, l);
  }
  Ee.resolveRef = c;
  function u(b) {
    return (0, i.inlineRef)(b.schema, this.opts.inlineRefs) ? b.schema : b.validate ? b : a.call(this, b);
  }
  function f(b) {
    for (const S of this._compilations)
      if (g(S, b))
        return S;
  }
  Ee.getCompilingSchema = f;
  function g(b, S) {
    return b.schema === S.schema && b.root === S.root && b.baseId === S.baseId;
  }
  function p(b, S) {
    let v;
    for (; typeof (v = this.refs[S]) == "string"; )
      S = v;
    return v || this.schemas[S] || h.call(this, b, S);
  }
  function h(b, S) {
    const v = this.opts.uriResolver.parse(S), y = (0, i._getFullPath)(this.opts.uriResolver, v);
    let d = (0, i.getFullPath)(this.opts.uriResolver, b.baseId, void 0);
    if (Object.keys(b.schema).length > 0 && y === d)
      return w.call(this, v, b);
    const l = (0, i.normalizeId)(y), m = this.refs[l] || this.schemas[l];
    if (typeof m == "string") {
      const I = h.call(this, b, m);
      return typeof I?.schema != "object" ? void 0 : w.call(this, v, I);
    }
    if (typeof m?.schema == "object") {
      if (m.validate || a.call(this, m), l === (0, i.normalizeId)(S)) {
        const { schema: I } = m, { schemaId: A } = this.opts, R = I[A];
        return R && (d = (0, i.resolveUrl)(this.opts.uriResolver, d, R)), new s({ schema: I, schemaId: A, root: b, baseId: d });
      }
      return w.call(this, v, m);
    }
  }
  Ee.resolveSchema = h;
  const x = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function w(b, { baseId: S, schema: v, root: y }) {
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
      !x.has(I) && R && (S = (0, i.resolveUrl)(this.opts.uriResolver, S, R));
    }
    let l;
    if (typeof v != "boolean" && v.$ref && !(0, o.schemaHasRulesButRef)(v, this.RULES)) {
      const I = (0, i.resolveUrl)(this.opts.uriResolver, S, v.$ref);
      l = h.call(this, y, I);
    }
    const { schemaId: m } = this.opts;
    if (l = l || new s({ schema: v, schemaId: m, root: y, baseId: S }), l.schema !== l.root.schema)
      return l;
  }
  return Ee;
}
const Lu = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Nu = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Du = "object", zu = ["$data"], Uu = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Vu = !1, Gu = {
  $id: Lu,
  description: Nu,
  type: Du,
  required: zu,
  properties: Uu,
  additionalProperties: Vu
};
var Hn = {}, mn = { exports: {} }, Or, lo;
function Ld() {
  if (lo) return Or;
  lo = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function n(p) {
    let h = "", x = 0, w = 0;
    for (w = 0; w < p.length; w++)
      if (x = p[w].charCodeAt(0), x !== 48) {
        if (!(x >= 48 && x <= 57 || x >= 65 && x <= 70 || x >= 97 && x <= 102))
          return "";
        h += p[w];
        break;
      }
    for (w += 1; w < p.length; w++) {
      if (x = p[w].charCodeAt(0), !(x >= 48 && x <= 57 || x >= 65 && x <= 70 || x >= 97 && x <= 102))
        return "";
      h += p[w];
    }
    return h;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function o(p) {
    return p.length = 0, !0;
  }
  function r(p, h, x) {
    if (p.length) {
      const w = n(p);
      if (w !== "")
        h.push(w);
      else
        return x.error = !0, !1;
      p.length = 0;
    }
    return !0;
  }
  function s(p) {
    let h = 0;
    const x = { error: !1, address: "", zone: "" }, w = [], b = [];
    let S = !1, v = !1, y = r;
    for (let d = 0; d < p.length; d++) {
      const l = p[d];
      if (!(l === "[" || l === "]"))
        if (l === ":") {
          if (S === !0 && (v = !0), !y(b, w, x))
            break;
          if (++h > 7) {
            x.error = !0;
            break;
          }
          d > 0 && p[d - 1] === ":" && (S = !0), w.push(":");
          continue;
        } else if (l === "%") {
          if (!y(b, w, x))
            break;
          y = o;
        } else {
          b.push(l);
          continue;
        }
    }
    return b.length && (y === o ? x.zone = b.join("") : v ? w.push(b.join("")) : w.push(n(b))), x.address = w.join(""), x;
  }
  function a(p) {
    if (c(p, ":") < 2)
      return { host: p, isIPV6: !1 };
    const h = s(p);
    if (h.error)
      return { host: p, isIPV6: !1 };
    {
      let x = h.address, w = h.address;
      return h.zone && (x += "%" + h.zone, w += "%25" + h.zone), { host: x, isIPV6: !0, escapedHost: w };
    }
  }
  function c(p, h) {
    let x = 0;
    for (let w = 0; w < p.length; w++)
      p[w] === h && x++;
    return x;
  }
  function u(p) {
    let h = p;
    const x = [];
    let w = -1, b = 0;
    for (; b = h.length; ) {
      if (b === 1) {
        if (h === ".")
          break;
        if (h === "/") {
          x.push("/");
          break;
        } else {
          x.push(h);
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
          x.push("/");
          break;
        }
      } else if (b === 3 && h === "/..") {
        x.length !== 0 && x.pop(), x.push("/");
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
          h = h.slice(3), x.length !== 0 && x.pop();
          continue;
        }
      }
      if ((w = h.indexOf("/", 1)) === -1) {
        x.push(h);
        break;
      } else
        x.push(h.slice(0, w)), h = h.slice(w);
    }
    return x.join("");
  }
  function f(p, h) {
    const x = h !== !0 ? escape : unescape;
    return p.scheme !== void 0 && (p.scheme = x(p.scheme)), p.userinfo !== void 0 && (p.userinfo = x(p.userinfo)), p.host !== void 0 && (p.host = x(p.host)), p.path !== void 0 && (p.path = x(p.path)), p.query !== void 0 && (p.query = x(p.query)), p.fragment !== void 0 && (p.fragment = x(p.fragment)), p;
  }
  function g(p) {
    const h = [];
    if (p.userinfo !== void 0 && (h.push(p.userinfo), h.push("@")), p.host !== void 0) {
      let x = unescape(p.host);
      if (!t(x)) {
        const w = a(x);
        w.isIPV6 === !0 ? x = `[${w.escapedHost}]` : x = p.host;
      }
      h.push(x);
    }
    return (typeof p.port == "number" || typeof p.port == "string") && (h.push(":"), h.push(String(p.port))), h.length ? h.join("") : void 0;
  }
  return Or = {
    nonSimpleDomain: i,
    recomposeAuthority: g,
    normalizeComponentEncoding: f,
    removeDotSegments: u,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: a,
    stringArrayToHexStripped: n
  }, Or;
}
var Lr, uo;
function Fu() {
  if (uo) return Lr;
  uo = 1;
  const { isUUID: e } = Ld(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function o(l) {
    return l.secure === !0 ? !0 : l.secure === !1 ? !1 : l.scheme ? l.scheme.length === 3 && (l.scheme[0] === "w" || l.scheme[0] === "W") && (l.scheme[1] === "s" || l.scheme[1] === "S") && (l.scheme[2] === "s" || l.scheme[2] === "S") : !1;
  }
  function r(l) {
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
  function f(l, m) {
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
  function p(l) {
    const m = l;
    return m.nss = (l.uuid || "").toLowerCase(), m;
  }
  const h = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: r,
      serialize: s
    }
  ), x = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: h.domainHost,
      parse: r,
      serialize: s
    }
  ), w = (
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
      domainHost: w.domainHost,
      parse: w.parse,
      serialize: w.serialize
    }
  ), y = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: h,
      https: x,
      ws: w,
      wss: b,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: u,
          serialize: f,
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
  return Lr = {
    wsIsSecure: o,
    SCHEMES: y,
    isValidSchemeName: i,
    getSchemeHandler: d
  }, Lr;
}
var po;
function Bu() {
  if (po) return mn.exports;
  po = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizeComponentEncoding: i, isIPv4: o, nonSimpleDomain: r } = Ld(), { SCHEMES: s, getSchemeHandler: a } = Fu();
  function c(b, S) {
    return typeof b == "string" ? b = /** @type {T} */
    p(x(b, S), S) : typeof b == "object" && (b = /** @type {T} */
    x(p(b, S), S)), b;
  }
  function u(b, S, v) {
    const y = v ? Object.assign({ scheme: "null" }, v) : { scheme: "null" }, d = f(x(b, y), x(S, y), y, !0);
    return y.skipEscape = !0, p(d, y);
  }
  function f(b, S, v, y) {
    const d = {};
    return y || (b = x(p(b, v), v), S = x(p(S, v), v)), v = v || {}, !v.tolerant && S.scheme ? (d.scheme = S.scheme, d.userinfo = S.userinfo, d.host = S.host, d.port = S.port, d.path = t(S.path || ""), d.query = S.query) : (S.userinfo !== void 0 || S.host !== void 0 || S.port !== void 0 ? (d.userinfo = S.userinfo, d.host = S.host, d.port = S.port, d.path = t(S.path || ""), d.query = S.query) : (S.path ? (S.path[0] === "/" ? d.path = t(S.path) : ((b.userinfo !== void 0 || b.host !== void 0 || b.port !== void 0) && !b.path ? d.path = "/" + S.path : b.path ? d.path = b.path.slice(0, b.path.lastIndexOf("/") + 1) + S.path : d.path = S.path, d.path = t(d.path)), d.query = S.query) : (d.path = b.path, S.query !== void 0 ? d.query = S.query : d.query = b.query), d.userinfo = b.userinfo, d.host = b.host, d.port = b.port), d.scheme = b.scheme), d.fragment = S.fragment, d;
  }
  function g(b, S, v) {
    return typeof b == "string" ? (b = unescape(b), b = p(i(x(b, v), !0), { ...v, skipEscape: !0 })) : typeof b == "object" && (b = p(i(b, !0), { ...v, skipEscape: !0 })), typeof S == "string" ? (S = unescape(S), S = p(i(x(S, v), !0), { ...v, skipEscape: !0 })) : typeof S == "object" && (S = p(i(S, !0), { ...v, skipEscape: !0 })), b.toLowerCase() === S.toLowerCase();
  }
  function p(b, S) {
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
  function x(b, S) {
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
      if (!v.unicodeSupport && (!m || !m.unicodeSupport) && y.host && (v.domainHost || m && m.domainHost) && d === !1 && r(y.host))
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
  const w = {
    SCHEMES: s,
    normalize: c,
    resolve: u,
    resolveComponent: f,
    equal: g,
    serialize: p,
    parse: x
  };
  return mn.exports = w, mn.exports.default = w, mn.exports.fastUri = w, mn.exports;
}
var fo;
function Zu() {
  if (fo) return Hn;
  fo = 1, Object.defineProperty(Hn, "__esModule", { value: !0 });
  const e = Bu();
  return e.code = 'require("ajv/dist/runtime/uri").default', Hn.default = e, Hn;
}
var ho;
function Nd() {
  return ho || (ho = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ En();
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
    const i = /* @__PURE__ */ cr(), o = /* @__PURE__ */ kn(), r = /* @__PURE__ */ kd(), s = /* @__PURE__ */ dr(), a = /* @__PURE__ */ te(), c = /* @__PURE__ */ or(), u = /* @__PURE__ */ Xi(), f = /* @__PURE__ */ ie(), g = Gu, p = /* @__PURE__ */ Zu(), h = (k, M) => new RegExp(k, M);
    h.code = "new RegExp";
    const x = ["removeAdditional", "useDefaults", "coerceTypes"], w = /* @__PURE__ */ new Set([
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
      var M, U, N, $, q, T, z, H, Q, J, V, B, Z, K, W, ee, re, Se, he, ye, fe, nt, De, wr, xr;
      const fn = k.strict, Sr = (M = k.code) === null || M === void 0 ? void 0 : M.optimize, $a = Sr === !0 || Sr === void 0 ? 1 : Sr || 0, _a = (N = (U = k.code) === null || U === void 0 ? void 0 : U.regExp) !== null && N !== void 0 ? N : h, Nl = ($ = k.uriResolver) !== null && $ !== void 0 ? $ : p.default;
      return {
        strictSchema: (T = (q = k.strictSchema) !== null && q !== void 0 ? q : fn) !== null && T !== void 0 ? T : !0,
        strictNumbers: (H = (z = k.strictNumbers) !== null && z !== void 0 ? z : fn) !== null && H !== void 0 ? H : !0,
        strictTypes: (J = (Q = k.strictTypes) !== null && Q !== void 0 ? Q : fn) !== null && J !== void 0 ? J : "log",
        strictTuples: (B = (V = k.strictTuples) !== null && V !== void 0 ? V : fn) !== null && B !== void 0 ? B : "log",
        strictRequired: (K = (Z = k.strictRequired) !== null && Z !== void 0 ? Z : fn) !== null && K !== void 0 ? K : !1,
        code: k.code ? { ...k.code, optimize: $a, regExp: _a } : { optimize: $a, regExp: _a },
        loopRequired: (W = k.loopRequired) !== null && W !== void 0 ? W : v,
        loopEnum: (ee = k.loopEnum) !== null && ee !== void 0 ? ee : v,
        meta: (re = k.meta) !== null && re !== void 0 ? re : !0,
        messages: (Se = k.messages) !== null && Se !== void 0 ? Se : !0,
        inlineRefs: (he = k.inlineRefs) !== null && he !== void 0 ? he : !0,
        schemaId: (ye = k.schemaId) !== null && ye !== void 0 ? ye : "$id",
        addUsedSchema: (fe = k.addUsedSchema) !== null && fe !== void 0 ? fe : !0,
        validateSchema: (nt = k.validateSchema) !== null && nt !== void 0 ? nt : !0,
        validateFormats: (De = k.validateFormats) !== null && De !== void 0 ? De : !0,
        unicodeRegExp: (wr = k.unicodeRegExp) !== null && wr !== void 0 ? wr : !0,
        int32range: (xr = k.int32range) !== null && xr !== void 0 ? xr : !0,
        uriResolver: Nl
      };
    }
    class d {
      constructor(M = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), M = this.opts = { ...M, ...y(M) };
        const { es5: U, lines: N } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: w, es5: U, lines: N }), this.logger = O(M.logger);
        const $ = M.validateFormats;
        M.validateFormats = !1, this.RULES = (0, r.getRules)(), l.call(this, b, M, "NOT SUPPORTED"), l.call(this, S, M, "DEPRECATED", "warn"), this._metaOpts = j.call(this), M.formats && A.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), M.keywords && R.call(this, M.keywords), typeof M.meta == "object" && this.addMetaSchema(M.meta), I.call(this), M.validateFormats = $;
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
            return z.call(this, V), await H.call(this, V.missingSchema), T.call(this, J);
          }
        }
        function z({ missingSchema: J, missingRef: V }) {
          if (this.refs[J])
            throw new Error(`AnySchema ${J} is loaded but ${V} cannot be resolved`);
        }
        async function H(J) {
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
          return (0, f.eachItem)(N, (q) => D.call(this, q)), this;
        F.call(this, U);
        const $ = {
          ...U,
          type: (0, u.getJSONTypes)(U.type),
          schemaType: (0, u.getJSONTypes)(U.schemaType)
        };
        return (0, f.eachItem)(N, $.type.length === 0 ? (q) => D.call(this, q, $) : (q) => $.type.forEach((T) => D.call(this, q, $, T))), this;
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
            const H = N[z];
            if (typeof H != "object")
              continue;
            const { $data: Q } = H.definition, J = T[z];
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
        let H = this._cache.get(M);
        if (H !== void 0)
          return H;
        N = (0, c.normalizeId)(T || N);
        const Q = c.getSchemaRefs.call(this, M, N);
        return H = new s.SchemaEnv({ schema: M, schemaId: z, meta: U, baseId: N, localRefs: Q }), this._cache.set(H.schema, H), q && !N.startsWith("#") && (N && this._checkUnique(N), this.refs[N] = H), $ && this.validateSchema(M, !0), H;
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
    d.ValidationError = i.default, d.MissingRefError = o.default, e.default = d;
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
      for (const M of x)
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
      if ((0, f.eachItem)(k, (N) => {
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
      let T = $ ? q.post : q.rules.find(({ type: H }) => H === U);
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
      M.before ? _.call(this, T, z, M.before) : T.rules.push(z), q.all[k] = z, (N = M.implements) === null || N === void 0 || N.forEach((H) => this.addKeyword(H));
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
  })(_r)), _r;
}
var Jn = {}, Kn = {}, Qn = {}, mo;
function Hu() {
  if (mo) return Qn;
  mo = 1, Object.defineProperty(Qn, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Qn.default = e, Qn;
}
var jt = {}, yo;
function aa() {
  if (yo) return jt;
  yo = 1, Object.defineProperty(jt, "__esModule", { value: !0 }), jt.callRef = jt.getValidate = void 0;
  const e = /* @__PURE__ */ kn(), t = /* @__PURE__ */ tt(), n = /* @__PURE__ */ te(), i = /* @__PURE__ */ et(), o = /* @__PURE__ */ dr(), r = /* @__PURE__ */ ie(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(u) {
      const { gen: f, schema: g, it: p } = u, { baseId: h, schemaEnv: x, validateName: w, opts: b, self: S } = p, { root: v } = x;
      if ((g === "#" || g === "#/") && h === v.baseId)
        return d();
      const y = o.resolveRef.call(S, v, h, g);
      if (y === void 0)
        throw new e.default(p.opts.uriResolver, h, g);
      if (y instanceof o.SchemaEnv)
        return l(y);
      return m(y);
      function d() {
        if (x === v)
          return c(u, w, x, x.$async);
        const I = f.scopeValue("root", { ref: v });
        return c(u, (0, n._)`${I}.validate`, v, v.$async);
      }
      function l(I) {
        const A = a(u, I);
        c(u, A, I, I.$async);
      }
      function m(I) {
        const A = f.scopeValue("schema", b.code.source === !0 ? { ref: I, code: (0, n.stringify)(I) } : { ref: I }), R = f.name("valid"), j = u.subschema({
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
  function a(u, f) {
    const { gen: g } = u;
    return f.validate ? g.scopeValue("validate", { ref: f.validate }) : (0, n._)`${g.scopeValue("wrapper", { ref: f })}.validate`;
  }
  jt.getValidate = a;
  function c(u, f, g, p) {
    const { gen: h, it: x } = u, { allErrors: w, schemaEnv: b, opts: S } = x, v = S.passContext ? i.default.this : n.nil;
    p ? y() : d();
    function y() {
      if (!b.$async)
        throw new Error("async schema referenced by sync schema");
      const I = h.let("valid");
      h.try(() => {
        h.code((0, n._)`await ${(0, t.callValidateCode)(u, f, v)}`), m(f), w || h.assign(I, !0);
      }, (A) => {
        h.if((0, n._)`!(${A} instanceof ${x.ValidationError})`, () => h.throw(A)), l(A), w || h.assign(I, !1);
      }), u.ok(I);
    }
    function d() {
      u.result((0, t.callValidateCode)(u, f, v), () => m(f), () => l(f));
    }
    function l(I) {
      const A = (0, n._)`${I}.errors`;
      h.assign(i.default.vErrors, (0, n._)`${i.default.vErrors} === null ? ${A} : ${i.default.vErrors}.concat(${A})`), h.assign(i.default.errors, (0, n._)`${i.default.vErrors}.length`);
    }
    function m(I) {
      var A;
      if (!x.opts.unevaluated)
        return;
      const R = (A = g?.validate) === null || A === void 0 ? void 0 : A.evaluated;
      if (x.props !== !0)
        if (R && !R.dynamicProps)
          R.props !== void 0 && (x.props = r.mergeEvaluated.props(h, R.props, x.props));
        else {
          const j = h.var("props", (0, n._)`${I}.evaluated.props`);
          x.props = r.mergeEvaluated.props(h, j, x.props, n.Name);
        }
      if (x.items !== !0)
        if (R && !R.dynamicItems)
          R.items !== void 0 && (x.items = r.mergeEvaluated.items(h, R.items, x.items));
        else {
          const j = h.var("items", (0, n._)`${I}.evaluated.items`);
          x.items = r.mergeEvaluated.items(h, j, x.items, n.Name);
        }
    }
  }
  return jt.callRef = c, jt.default = s, jt;
}
var go;
function Dd() {
  if (go) return Kn;
  go = 1, Object.defineProperty(Kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hu(), t = /* @__PURE__ */ aa(), n = [
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
var Wn = {}, Xn = {}, vo;
function Ju() {
  if (vo) return Xn;
  vo = 1, Object.defineProperty(Xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, i = {
    message: ({ keyword: r, schemaCode: s }) => (0, e.str)`must be ${n[r].okStr} ${s}`,
    params: ({ keyword: r, schemaCode: s }) => (0, e._)`{comparison: ${n[r].okStr}, limit: ${s}}`
  }, o = {
    keyword: Object.keys(n),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: i,
    code(r) {
      const { keyword: s, data: a, schemaCode: c } = r;
      r.fail$data((0, e._)`${a} ${n[s].fail} ${c} || isNaN(${a})`);
    }
  };
  return Xn.default = o, Xn;
}
var Yn = {}, bo;
function Ku() {
  if (bo) return Yn;
  bo = 1, Object.defineProperty(Yn, "__esModule", { value: !0 });
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
      const { gen: o, data: r, schemaCode: s, it: a } = i, c = a.opts.multipleOfPrecision, u = o.let("res"), f = c ? (0, e._)`Math.abs(Math.round(${u}) - ${u}) > 1e-${c}` : (0, e._)`${u} !== parseInt(${u})`;
      i.fail$data((0, e._)`(${s} === 0 || (${u} = ${r}/${s}, ${f}))`);
    }
  };
  return Yn.default = n, Yn;
}
var ei = {}, ti = {}, wo;
function Qu() {
  if (wo) return ti;
  wo = 1, Object.defineProperty(ti, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let i = 0, o = 0, r;
    for (; o < n; )
      i++, r = t.charCodeAt(o++), r >= 55296 && r <= 56319 && o < n && (r = t.charCodeAt(o), (r & 64512) === 56320 && o++);
    return i;
  }
  return ti.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', ti;
}
var xo;
function Wu() {
  if (xo) return ei;
  xo = 1, Object.defineProperty(ei, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Qu(), o = {
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
      const { keyword: s, data: a, schemaCode: c, it: u } = r, f = s === "maxLength" ? e.operators.GT : e.operators.LT, g = u.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(r.gen, n.default)}(${a})`;
      r.fail$data((0, e._)`${g} ${f} ${c}`);
    }
  };
  return ei.default = o, ei;
}
var ni = {}, So;
function Xu() {
  if (So) return ni;
  So = 1, Object.defineProperty(ni, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tt(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ te(), o = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, n.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, n._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: c, schema: u, schemaCode: f, it: g } = r, p = g.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: h } = g.opts.code, x = h.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, h), w = s.let("valid");
        s.try(() => s.assign(w, (0, n._)`${x}(${f}, ${p}).test(${a})`), () => s.assign(w, !1)), r.fail$data((0, n._)`!${w}`);
      } else {
        const h = (0, e.usePattern)(r, u);
        r.fail$data((0, n._)`!${h}.test(${a})`);
      }
    }
  };
  return ni.default = o, ni;
}
var ii = {}, Io;
function Yu() {
  if (Io) return ii;
  Io = 1, Object.defineProperty(ii, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: i, schemaCode: o }) {
        const r = i === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${o} properties`;
      },
      params: ({ schemaCode: i }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { keyword: o, data: r, schemaCode: s } = i, a = o === "maxProperties" ? e.operators.GT : e.operators.LT;
      i.fail$data((0, e._)`Object.keys(${r}).length ${a} ${s}`);
    }
  };
  return ii.default = n, ii;
}
var ri = {}, Ao;
function ep() {
  if (Ao) return ri;
  Ao = 1, Object.defineProperty(ri, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tt(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: r } }) => (0, t.str)`must have required property '${r}'`,
      params: ({ params: { missingProperty: r } }) => (0, t._)`{missingProperty: ${r}}`
    },
    code(r) {
      const { gen: s, schema: a, schemaCode: c, data: u, $data: f, it: g } = r, { opts: p } = g;
      if (!f && a.length === 0)
        return;
      const h = a.length >= p.loopRequired;
      if (g.allErrors ? x() : w(), p.strictRequired) {
        const v = r.parentSchema.properties, { definedProperties: y } = r.it;
        for (const d of a)
          if (v?.[d] === void 0 && !y.has(d)) {
            const l = g.schemaEnv.baseId + g.errSchemaPath, m = `required property "${d}" is not defined at "${l}" (strictRequired)`;
            (0, n.checkStrictMode)(g, m, g.opts.strictRequired);
          }
      }
      function x() {
        if (h || f)
          r.block$data(t.nil, b);
        else
          for (const v of a)
            (0, e.checkReportMissingProp)(r, v);
      }
      function w() {
        const v = s.let("missing");
        if (h || f) {
          const y = s.let("valid", !0);
          r.block$data(y, () => S(v, y)), r.ok(y);
        } else
          s.if((0, e.checkMissingProp)(r, a, v)), (0, e.reportMissingProp)(r, v), s.else();
      }
      function b() {
        s.forOf("prop", c, (v) => {
          r.setParams({ missingProperty: v }), s.if((0, e.noPropertyInData)(s, u, v, p.ownProperties), () => r.error());
        });
      }
      function S(v, y) {
        r.setParams({ missingProperty: v }), s.forOf(v, c, () => {
          s.assign(y, (0, e.propertyInData)(s, u, v, p.ownProperties)), s.if((0, t.not)(y), () => {
            r.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return ri.default = o, ri;
}
var si = {}, qo;
function tp() {
  if (qo) return si;
  qo = 1, Object.defineProperty(si, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: i, schemaCode: o }) {
        const r = i === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${o} items`;
      },
      params: ({ schemaCode: i }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { keyword: o, data: r, schemaCode: s } = i, a = o === "maxItems" ? e.operators.GT : e.operators.LT;
      i.fail$data((0, e._)`${r}.length ${a} ${s}`);
    }
  };
  return si.default = n, si;
}
var ai = {}, oi = {}, Ro;
function oa() {
  if (Ro) return oi;
  Ro = 1, Object.defineProperty(oi, "__esModule", { value: !0 });
  const e = Od();
  return e.code = 'require("ajv/dist/runtime/equal").default', oi.default = e, oi;
}
var jo;
function np() {
  if (jo) return ai;
  jo = 1, Object.defineProperty(ai, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xi(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ oa(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: c, $data: u, schema: f, parentSchema: g, schemaCode: p, it: h } = s;
      if (!u && !f)
        return;
      const x = a.let("valid"), w = g.items ? (0, e.getSchemaTypes)(g.items) : [];
      s.block$data(x, b, (0, t._)`${p} === false`), s.ok(x);
      function b() {
        const d = a.let("i", (0, t._)`${c}.length`), l = a.let("j");
        s.setParams({ i: d, j: l }), a.assign(x, !0), a.if((0, t._)`${d} > 1`, () => (S() ? v : y)(d, l));
      }
      function S() {
        return w.length > 0 && !w.some((d) => d === "object" || d === "array");
      }
      function v(d, l) {
        const m = a.name("item"), I = (0, e.checkDataTypes)(w, m, h.opts.strictNumbers, e.DataType.Wrong), A = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${d}--;`, () => {
          a.let(m, (0, t._)`${c}[${d}]`), a.if(I, (0, t._)`continue`), w.length > 1 && a.if((0, t._)`typeof ${m} == "string"`, (0, t._)`${m} += "_"`), a.if((0, t._)`typeof ${A}[${m}] == "number"`, () => {
            a.assign(l, (0, t._)`${A}[${m}]`), s.error(), a.assign(x, !1).break();
          }).code((0, t._)`${A}[${m}] = ${d}`);
        });
      }
      function y(d, l) {
        const m = (0, n.useFunc)(a, i.default), I = a.name("outer");
        a.label(I).for((0, t._)`;${d}--;`, () => a.for((0, t._)`${l} = ${d}; ${l}--;`, () => a.if((0, t._)`${m}(${c}[${d}], ${c}[${l}])`, () => {
          s.error(), a.assign(x, !1).break(I);
        })));
      }
    }
  };
  return ai.default = r, ai;
}
var ci = {}, $o;
function ip() {
  if ($o) return ci;
  $o = 1, Object.defineProperty(ci, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ oa(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: c, schemaCode: u, schema: f } = r;
      c || f && typeof f == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${u})`) : r.fail((0, e._)`${f} !== ${a}`);
    }
  };
  return ci.default = o, ci;
}
var di = {}, _o;
function rp() {
  if (_o) return di;
  _o = 1, Object.defineProperty(di, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ oa(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: c, schema: u, schemaCode: f, it: g } = r;
      if (!c && u.length === 0)
        throw new Error("enum must have non-empty array");
      const p = u.length >= g.opts.loopEnum;
      let h;
      const x = () => h ?? (h = (0, t.useFunc)(s, n.default));
      let w;
      if (p || c)
        w = s.let("valid"), r.block$data(w, b);
      else {
        if (!Array.isArray(u))
          throw new Error("ajv implementation error");
        const v = s.const("vSchema", f);
        w = (0, e.or)(...u.map((y, d) => S(v, d)));
      }
      r.pass(w);
      function b() {
        s.assign(w, !1), s.forOf("v", f, (v) => s.if((0, e._)`${x()}(${a}, ${v})`, () => s.assign(w, !0).break()));
      }
      function S(v, y) {
        const d = u[y];
        return typeof d == "object" && d !== null ? (0, e._)`${x()}(${a}, ${v}[${y}])` : (0, e._)`${a} === ${d}`;
      }
    }
  };
  return di.default = o, di;
}
var Po;
function zd() {
  if (Po) return Wn;
  Po = 1, Object.defineProperty(Wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ju(), t = /* @__PURE__ */ Ku(), n = /* @__PURE__ */ Wu(), i = /* @__PURE__ */ Xu(), o = /* @__PURE__ */ Yu(), r = /* @__PURE__ */ ep(), s = /* @__PURE__ */ tp(), a = /* @__PURE__ */ np(), c = /* @__PURE__ */ ip(), u = /* @__PURE__ */ rp(), f = [
    // number
    e.default,
    t.default,
    // string
    n.default,
    i.default,
    // object
    o.default,
    r.default,
    // array
    s.default,
    a.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    c.default,
    u.default
  ];
  return Wn.default = f, Wn;
}
var li = {}, Wt = {}, To;
function Ud() {
  if (To) return Wt;
  To = 1, Object.defineProperty(Wt, "__esModule", { value: !0 }), Wt.validateAdditionalItems = void 0;
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
      const { parentSchema: s, it: a } = r, { items: c } = s;
      if (!Array.isArray(c)) {
        (0, t.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      o(r, c);
    }
  };
  function o(r, s) {
    const { gen: a, schema: c, data: u, keyword: f, it: g } = r;
    g.items = !0;
    const p = a.const("len", (0, e._)`${u}.length`);
    if (c === !1)
      r.setParams({ len: s.length }), r.pass((0, e._)`${p} <= ${s.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(g, c)) {
      const x = a.var("valid", (0, e._)`${p} <= ${s.length}`);
      a.if((0, e.not)(x), () => h(x)), r.ok(x);
    }
    function h(x) {
      a.forRange("i", s.length, p, (w) => {
        r.subschema({ keyword: f, dataProp: w, dataPropType: t.Type.Num }, x), g.allErrors || a.if((0, e.not)(x), () => a.break());
      });
    }
  }
  return Wt.validateAdditionalItems = o, Wt.default = i, Wt;
}
var ui = {}, Xt = {}, Co;
function Vd() {
  if (Co) return Xt;
  Co = 1, Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.validateTuple = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ tt(), i = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(r) {
      const { schema: s, it: a } = r;
      if (Array.isArray(s))
        return o(r, "additionalItems", s);
      a.items = !0, !(0, t.alwaysValidSchema)(a, s) && r.ok((0, n.validateArray)(r));
    }
  };
  function o(r, s, a = r.schema) {
    const { gen: c, parentSchema: u, data: f, keyword: g, it: p } = r;
    w(u), p.opts.unevaluated && a.length && p.items !== !0 && (p.items = t.mergeEvaluated.items(c, a.length, p.items));
    const h = c.name("valid"), x = c.const("len", (0, e._)`${f}.length`);
    a.forEach((b, S) => {
      (0, t.alwaysValidSchema)(p, b) || (c.if((0, e._)`${x} > ${S}`, () => r.subschema({
        keyword: g,
        schemaProp: S,
        dataProp: S
      }, h)), r.ok(h));
    });
    function w(b) {
      const { opts: S, errSchemaPath: v } = p, y = a.length, d = y === b.minItems && (y === b.maxItems || b[s] === !1);
      if (S.strictTuples && !d) {
        const l = `"${g}" is ${y}-tuple, but minItems or maxItems/${s} are not specified or different at path "${v}"`;
        (0, t.checkStrictMode)(p, l, S.strictTuples);
      }
    }
  }
  return Xt.validateTuple = o, Xt.default = i, Xt;
}
var Eo;
function sp() {
  if (Eo) return ui;
  Eo = 1, Object.defineProperty(ui, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Vd(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return ui.default = t, ui;
}
var pi = {}, ko;
function ap() {
  if (ko) return pi;
  ko = 1, Object.defineProperty(pi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ tt(), i = /* @__PURE__ */ Ud(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: c, it: u } = s, { prefixItems: f } = c;
      u.items = !0, !(0, t.alwaysValidSchema)(u, a) && (f ? (0, i.validateAdditionalItems)(s, f) : s.ok((0, n.validateArray)(s)));
    }
  };
  return pi.default = r, pi;
}
var fi = {}, Mo;
function op() {
  if (Mo) return fi;
  Mo = 1, Object.defineProperty(fi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), i = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: o, max: r } }) => r === void 0 ? (0, e.str)`must contain at least ${o} valid item(s)` : (0, e.str)`must contain at least ${o} and no more than ${r} valid item(s)`,
      params: ({ params: { min: o, max: r } }) => r === void 0 ? (0, e._)`{minContains: ${o}}` : (0, e._)`{minContains: ${o}, maxContains: ${r}}`
    },
    code(o) {
      const { gen: r, schema: s, parentSchema: a, data: c, it: u } = o;
      let f, g;
      const { minContains: p, maxContains: h } = a;
      u.opts.next ? (f = p === void 0 ? 1 : p, g = h) : f = 1;
      const x = r.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: f, max: g }), g === void 0 && f === 0) {
        (0, t.checkStrictMode)(u, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (g !== void 0 && f > g) {
        (0, t.checkStrictMode)(u, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(u, s)) {
        let y = (0, e._)`${x} >= ${f}`;
        g !== void 0 && (y = (0, e._)`${y} && ${x} <= ${g}`), o.pass(y);
        return;
      }
      u.items = !0;
      const w = r.name("valid");
      g === void 0 && f === 1 ? S(w, () => r.if(w, () => r.break())) : f === 0 ? (r.let(w, !0), g !== void 0 && r.if((0, e._)`${c}.length > 0`, b)) : (r.let(w, !1), b()), o.result(w, () => o.reset());
      function b() {
        const y = r.name("_valid"), d = r.let("count", 0);
        S(y, () => r.if(y, () => v(d)));
      }
      function S(y, d) {
        r.forRange("i", 0, x, (l) => {
          o.subschema({
            keyword: "contains",
            dataProp: l,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, y), d();
        });
      }
      function v(y) {
        r.code((0, e._)`${y}++`), g === void 0 ? r.if((0, e._)`${y} >= ${f}`, () => r.assign(w, !0).break()) : (r.if((0, e._)`${y} > ${g}`, () => r.assign(w, !1).break()), f === 1 ? r.assign(w, !0) : r.if((0, e._)`${y} >= ${f}`, () => r.assign(w, !0)));
      }
    }
  };
  return fi.default = i, fi;
}
var Nr = {}, Oo;
function ca() {
  return Oo || (Oo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ tt();
    e.error = {
      message: ({ params: { property: c, depsCount: u, deps: f } }) => {
        const g = u === 1 ? "property" : "properties";
        return (0, t.str)`must have ${g} ${f} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: u, deps: f, missingProperty: g } }) => (0, t._)`{property: ${c},
    missingProperty: ${g},
    depsCount: ${u},
    deps: ${f}}`
      // TODO change to reference
    };
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [u, f] = r(c);
        s(c, u), a(c, f);
      }
    };
    function r({ schema: c }) {
      const u = {}, f = {};
      for (const g in c) {
        if (g === "__proto__")
          continue;
        const p = Array.isArray(c[g]) ? u : f;
        p[g] = c[g];
      }
      return [u, f];
    }
    function s(c, u = c.schema) {
      const { gen: f, data: g, it: p } = c;
      if (Object.keys(u).length === 0)
        return;
      const h = f.let("missing");
      for (const x in u) {
        const w = u[x];
        if (w.length === 0)
          continue;
        const b = (0, i.propertyInData)(f, g, x, p.opts.ownProperties);
        c.setParams({
          property: x,
          depsCount: w.length,
          deps: w.join(", ")
        }), p.allErrors ? f.if(b, () => {
          for (const S of w)
            (0, i.checkReportMissingProp)(c, S);
        }) : (f.if((0, t._)`${b} && (${(0, i.checkMissingProp)(c, w, h)})`), (0, i.reportMissingProp)(c, h), f.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(c, u = c.schema) {
      const { gen: f, data: g, keyword: p, it: h } = c, x = f.name("valid");
      for (const w in u)
        (0, n.alwaysValidSchema)(h, u[w]) || (f.if(
          (0, i.propertyInData)(f, g, w, h.opts.ownProperties),
          () => {
            const b = c.subschema({ keyword: p, schemaProp: w }, x);
            c.mergeValidEvaluated(b, x);
          },
          () => f.var(x, !0)
          // TODO var
        ), c.ok(x));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(Nr)), Nr;
}
var hi = {}, Lo;
function cp() {
  if (Lo) return hi;
  Lo = 1, Object.defineProperty(hi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), i = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: o }) => (0, e._)`{propertyName: ${o.propertyName}}`
    },
    code(o) {
      const { gen: r, schema: s, data: a, it: c } = o;
      if ((0, t.alwaysValidSchema)(c, s))
        return;
      const u = r.name("valid");
      r.forIn("key", a, (f) => {
        o.setParams({ propertyName: f }), o.subschema({
          keyword: "propertyNames",
          data: f,
          dataTypes: ["string"],
          propertyName: f,
          compositeRule: !0
        }, u), r.if((0, e.not)(u), () => {
          o.error(!0), c.allErrors || r.break();
        });
      }), o.ok(u);
    }
  };
  return hi.default = i, hi;
}
var mi = {}, No;
function Gd() {
  if (No) return mi;
  No = 1, Object.defineProperty(mi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tt(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ et(), i = /* @__PURE__ */ ie(), r = {
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
      const { gen: a, schema: c, parentSchema: u, data: f, errsCount: g, it: p } = s;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: h, opts: x } = p;
      if (p.props = !0, x.removeAdditional !== "all" && (0, i.alwaysValidSchema)(p, c))
        return;
      const w = (0, e.allSchemaProperties)(u.properties), b = (0, e.allSchemaProperties)(u.patternProperties);
      S(), s.ok((0, t._)`${g} === ${n.default.errors}`);
      function S() {
        a.forIn("key", f, (m) => {
          !w.length && !b.length ? d(m) : a.if(v(m), () => d(m));
        });
      }
      function v(m) {
        let I;
        if (w.length > 8) {
          const A = (0, i.schemaRefOrVal)(p, u.properties, "properties");
          I = (0, e.isOwnProperty)(a, A, m);
        } else w.length ? I = (0, t.or)(...w.map((A) => (0, t._)`${m} === ${A}`)) : I = t.nil;
        return b.length && (I = (0, t.or)(I, ...b.map((A) => (0, t._)`${(0, e.usePattern)(s, A)}.test(${m})`))), (0, t.not)(I);
      }
      function y(m) {
        a.code((0, t._)`delete ${f}[${m}]`);
      }
      function d(m) {
        if (x.removeAdditional === "all" || x.removeAdditional && c === !1) {
          y(m);
          return;
        }
        if (c === !1) {
          s.setParams({ additionalProperty: m }), s.error(), h || a.break();
          return;
        }
        if (typeof c == "object" && !(0, i.alwaysValidSchema)(p, c)) {
          const I = a.name("valid");
          x.removeAdditional === "failing" ? (l(m, I, !1), a.if((0, t.not)(I), () => {
            s.reset(), y(m);
          })) : (l(m, I), h || a.if((0, t.not)(I), () => a.break()));
        }
      }
      function l(m, I, A) {
        const R = {
          keyword: "additionalProperties",
          dataProp: m,
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
  return mi.default = r, mi;
}
var yi = {}, Do;
function dp() {
  if (Do) return yi;
  Do = 1, Object.defineProperty(yi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ En(), t = /* @__PURE__ */ tt(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ Gd(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: a, parentSchema: c, data: u, it: f } = r;
      f.opts.removeAdditional === "all" && c.additionalProperties === void 0 && i.default.code(new e.KeywordCxt(f, i.default, "additionalProperties"));
      const g = (0, t.allSchemaProperties)(a);
      for (const b of g)
        f.definedProperties.add(b);
      f.opts.unevaluated && g.length && f.props !== !0 && (f.props = n.mergeEvaluated.props(s, (0, n.toHash)(g), f.props));
      const p = g.filter((b) => !(0, n.alwaysValidSchema)(f, a[b]));
      if (p.length === 0)
        return;
      const h = s.name("valid");
      for (const b of p)
        x(b) ? w(b) : (s.if((0, t.propertyInData)(s, u, b, f.opts.ownProperties)), w(b), f.allErrors || s.else().var(h, !0), s.endIf()), r.it.definedProperties.add(b), r.ok(h);
      function x(b) {
        return f.opts.useDefaults && !f.compositeRule && a[b].default !== void 0;
      }
      function w(b) {
        r.subschema({
          keyword: "properties",
          schemaProp: b,
          dataProp: b
        }, h);
      }
    }
  };
  return yi.default = o, yi;
}
var gi = {}, zo;
function lp() {
  if (zo) return gi;
  zo = 1, Object.defineProperty(gi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tt(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: a, data: c, parentSchema: u, it: f } = r, { opts: g } = f, p = (0, e.allSchemaProperties)(a), h = p.filter((d) => (0, n.alwaysValidSchema)(f, a[d]));
      if (p.length === 0 || h.length === p.length && (!f.opts.unevaluated || f.props === !0))
        return;
      const x = g.strictSchema && !g.allowMatchingProperties && u.properties, w = s.name("valid");
      f.props !== !0 && !(f.props instanceof t.Name) && (f.props = (0, i.evaluatedPropsToName)(s, f.props));
      const { props: b } = f;
      S();
      function S() {
        for (const d of p)
          x && v(d), f.allErrors ? y(d) : (s.var(w, !0), y(d), s.if(w));
      }
      function v(d) {
        for (const l in x)
          new RegExp(d).test(l) && (0, n.checkStrictMode)(f, `property ${l} matches pattern ${d} (use allowMatchingProperties)`);
      }
      function y(d) {
        s.forIn("key", c, (l) => {
          s.if((0, t._)`${(0, e.usePattern)(r, d)}.test(${l})`, () => {
            const m = h.includes(d);
            m || r.subschema({
              keyword: "patternProperties",
              schemaProp: d,
              dataProp: l,
              dataPropType: i.Type.Str
            }, w), f.opts.unevaluated && b !== !0 ? s.assign((0, t._)`${b}[${l}]`, !0) : !m && !f.allErrors && s.if((0, t.not)(w), () => s.break());
          });
        });
      }
    }
  };
  return gi.default = o, gi;
}
var vi = {}, Uo;
function up() {
  if (Uo) return vi;
  Uo = 1, Object.defineProperty(vi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: i, schema: o, it: r } = n;
      if ((0, e.alwaysValidSchema)(r, o)) {
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
  return vi.default = t, vi;
}
var bi = {}, Vo;
function pp() {
  if (Vo) return bi;
  Vo = 1, Object.defineProperty(bi, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ tt()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return bi.default = t, bi;
}
var wi = {}, Go;
function fp() {
  if (Go) return wi;
  Go = 1, Object.defineProperty(wi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), i = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: o }) => (0, e._)`{passingSchemas: ${o.passing}}`
    },
    code(o) {
      const { gen: r, schema: s, parentSchema: a, it: c } = o;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      if (c.opts.discriminator && a.discriminator)
        return;
      const u = s, f = r.let("valid", !1), g = r.let("passing", null), p = r.name("_valid");
      o.setParams({ passing: g }), r.block(h), o.result(f, () => o.reset(), () => o.error(!0));
      function h() {
        u.forEach((x, w) => {
          let b;
          (0, t.alwaysValidSchema)(c, x) ? r.var(p, !0) : b = o.subschema({
            keyword: "oneOf",
            schemaProp: w,
            compositeRule: !0
          }, p), w > 0 && r.if((0, e._)`${p} && ${f}`).assign(f, !1).assign(g, (0, e._)`[${g}, ${w}]`).else(), r.if(p, () => {
            r.assign(f, !0), r.assign(g, w), b && o.mergeEvaluated(b, e.Name);
          });
        });
      }
    }
  };
  return wi.default = i, wi;
}
var xi = {}, Fo;
function hp() {
  if (Fo) return xi;
  Fo = 1, Object.defineProperty(xi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: i, schema: o, it: r } = n;
      if (!Array.isArray(o))
        throw new Error("ajv implementation error");
      const s = i.name("valid");
      o.forEach((a, c) => {
        if ((0, e.alwaysValidSchema)(r, a))
          return;
        const u = n.subschema({ keyword: "allOf", schemaProp: c }, s);
        n.ok(s), n.mergeEvaluated(u);
      });
    }
  };
  return xi.default = t, xi;
}
var Si = {}, Bo;
function mp() {
  if (Bo) return Si;
  Bo = 1, Object.defineProperty(Si, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), i = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: r }) => (0, e.str)`must match "${r.ifClause}" schema`,
      params: ({ params: r }) => (0, e._)`{failingKeyword: ${r.ifClause}}`
    },
    code(r) {
      const { gen: s, parentSchema: a, it: c } = r;
      a.then === void 0 && a.else === void 0 && (0, t.checkStrictMode)(c, '"if" without "then" and "else" is ignored');
      const u = o(c, "then"), f = o(c, "else");
      if (!u && !f)
        return;
      const g = s.let("valid", !0), p = s.name("_valid");
      if (h(), r.reset(), u && f) {
        const w = s.let("ifClause");
        r.setParams({ ifClause: w }), s.if(p, x("then", w), x("else", w));
      } else u ? s.if(p, x("then")) : s.if((0, e.not)(p), x("else"));
      r.pass(g, () => r.error(!0));
      function h() {
        const w = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, p);
        r.mergeEvaluated(w);
      }
      function x(w, b) {
        return () => {
          const S = r.subschema({ keyword: w }, p);
          s.assign(g, p), r.mergeValidEvaluated(S, g), b ? s.assign(b, (0, e._)`${w}`) : r.setParams({ ifClause: w });
        };
      }
    }
  };
  function o(r, s) {
    const a = r.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(r, a);
  }
  return Si.default = i, Si;
}
var Ii = {}, Zo;
function yp() {
  if (Zo) return Ii;
  Zo = 1, Object.defineProperty(Ii, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: i, it: o }) {
      i.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return Ii.default = t, Ii;
}
var Ho;
function Fd() {
  if (Ho) return li;
  Ho = 1, Object.defineProperty(li, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ud(), t = /* @__PURE__ */ sp(), n = /* @__PURE__ */ Vd(), i = /* @__PURE__ */ ap(), o = /* @__PURE__ */ op(), r = /* @__PURE__ */ ca(), s = /* @__PURE__ */ cp(), a = /* @__PURE__ */ Gd(), c = /* @__PURE__ */ dp(), u = /* @__PURE__ */ lp(), f = /* @__PURE__ */ up(), g = /* @__PURE__ */ pp(), p = /* @__PURE__ */ fp(), h = /* @__PURE__ */ hp(), x = /* @__PURE__ */ mp(), w = /* @__PURE__ */ yp();
  function b(S = !1) {
    const v = [
      // any
      f.default,
      g.default,
      p.default,
      h.default,
      x.default,
      w.default,
      // object
      s.default,
      a.default,
      r.default,
      c.default,
      u.default
    ];
    return S ? v.push(t.default, i.default) : v.push(e.default, n.default), v.push(o.default), v;
  }
  return li.default = b, li;
}
var Ai = {}, Yt = {}, Jo;
function Bd() {
  if (Jo) return Yt;
  Jo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 }), Yt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ et(), n = /* @__PURE__ */ dr(), i = /* @__PURE__ */ aa(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => r(a, a.schema)
  };
  function r(a, c) {
    const { gen: u, it: f } = a;
    f.schemaEnv.root.dynamicAnchors[c] = !0;
    const g = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, p = f.errSchemaPath === "#" ? f.validateName : s(a);
    u.if((0, e._)`!${g}`, () => u.assign(g, p));
  }
  Yt.dynamicAnchor = r;
  function s(a) {
    const { schemaEnv: c, schema: u, self: f } = a.it, { root: g, baseId: p, localRefs: h, meta: x } = c.root, { schemaId: w } = f.opts, b = new n.SchemaEnv({ schema: u, schemaId: w, root: g, baseId: p, localRefs: h, meta: x });
    return n.compileSchema.call(f, b), (0, i.getValidate)(a, b);
  }
  return Yt.default = o, Yt;
}
var en = {}, Ko;
function Zd() {
  if (Ko) return en;
  Ko = 1, Object.defineProperty(en, "__esModule", { value: !0 }), en.dynamicRef = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ et(), n = /* @__PURE__ */ aa(), i = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => o(r, r.schema)
  };
  function o(r, s) {
    const { gen: a, keyword: c, it: u } = r;
    if (s[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const f = s.slice(1);
    if (u.allErrors)
      g();
    else {
      const h = a.let("valid", !1);
      g(h), r.ok(h);
    }
    function g(h) {
      if (u.schemaEnv.root.dynamicAnchors[f]) {
        const x = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(f)}`);
        a.if(x, p(x, h), p(u.validateName, h));
      } else
        p(u.validateName, h)();
    }
    function p(h, x) {
      return x ? () => a.block(() => {
        (0, n.callRef)(r, h), a.let(x, !0);
      }) : () => (0, n.callRef)(r, h);
    }
  }
  return en.dynamicRef = o, en.default = i, en;
}
var qi = {}, Qo;
function gp() {
  if (Qo) return qi;
  Qo = 1, Object.defineProperty(qi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bd(), t = /* @__PURE__ */ ie(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(i) {
      i.schema ? (0, e.dynamicAnchor)(i, "") : (0, t.checkStrictMode)(i.it, "$recursiveAnchor: false is ignored");
    }
  };
  return qi.default = n, qi;
}
var Ri = {}, Wo;
function vp() {
  if (Wo) return Ri;
  Wo = 1, Object.defineProperty(Ri, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Zd(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Ri.default = t, Ri;
}
var Xo;
function bp() {
  if (Xo) return Ai;
  Xo = 1, Object.defineProperty(Ai, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bd(), t = /* @__PURE__ */ Zd(), n = /* @__PURE__ */ gp(), i = /* @__PURE__ */ vp(), o = [e.default, t.default, n.default, i.default];
  return Ai.default = o, Ai;
}
var ji = {}, $i = {}, Yo;
function wp() {
  if (Yo) return $i;
  Yo = 1, Object.defineProperty($i, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ca(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return $i.default = t, $i;
}
var _i = {}, ec;
function xp() {
  if (ec) return _i;
  ec = 1, Object.defineProperty(_i, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ca(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return _i.default = t, _i;
}
var Pi = {}, tc;
function Sp() {
  if (tc) return Pi;
  tc = 1, Object.defineProperty(Pi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: i, it: o }) {
      i.contains === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "contains" is ignored`);
    }
  };
  return Pi.default = t, Pi;
}
var nc;
function Ip() {
  if (nc) return ji;
  nc = 1, Object.defineProperty(ji, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ wp(), t = /* @__PURE__ */ xp(), n = /* @__PURE__ */ Sp(), i = [e.default, t.default, n.default];
  return ji.default = i, ji;
}
var Ti = {}, Ci = {}, ic;
function Ap() {
  if (ic) return Ci;
  ic = 1, Object.defineProperty(Ci, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ et(), o = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: r }) => (0, e._)`{unevaluatedProperty: ${r.unevaluatedProperty}}`
    },
    code(r) {
      const { gen: s, schema: a, data: c, errsCount: u, it: f } = r;
      if (!u)
        throw new Error("ajv implementation error");
      const { allErrors: g, props: p } = f;
      p instanceof e.Name ? s.if((0, e._)`${p} !== true`, () => s.forIn("key", c, (b) => s.if(x(p, b), () => h(b)))) : p !== !0 && s.forIn("key", c, (b) => p === void 0 ? h(b) : s.if(w(p, b), () => h(b))), f.props = !0, r.ok((0, e._)`${u} === ${n.default.errors}`);
      function h(b) {
        if (a === !1) {
          r.setParams({ unevaluatedProperty: b }), r.error(), g || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(f, a)) {
          const S = s.name("valid");
          r.subschema({
            keyword: "unevaluatedProperties",
            dataProp: b,
            dataPropType: t.Type.Str
          }, S), g || s.if((0, e.not)(S), () => s.break());
        }
      }
      function x(b, S) {
        return (0, e._)`!${b} || !${b}[${S}]`;
      }
      function w(b, S) {
        const v = [];
        for (const y in b)
          b[y] === !0 && v.push((0, e._)`${S} !== ${y}`);
        return (0, e.and)(...v);
      }
    }
  };
  return Ci.default = o, Ci;
}
var Ei = {}, rc;
function qp() {
  if (rc) return Ei;
  rc = 1, Object.defineProperty(Ei, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), i = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { gen: r, schema: s, data: a, it: c } = o, u = c.items || 0;
      if (u === !0)
        return;
      const f = r.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        o.setParams({ len: u }), o.fail((0, e._)`${f} > ${u}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(c, s)) {
        const p = r.var("valid", (0, e._)`${f} <= ${u}`);
        r.if((0, e.not)(p), () => g(p, u)), o.ok(p);
      }
      c.items = !0;
      function g(p, h) {
        r.forRange("i", h, f, (x) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: x, dataPropType: t.Type.Num }, p), c.allErrors || r.if((0, e.not)(p), () => r.break());
        });
      }
    }
  };
  return Ei.default = i, Ei;
}
var sc;
function Rp() {
  if (sc) return Ti;
  sc = 1, Object.defineProperty(Ti, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ap(), t = /* @__PURE__ */ qp(), n = [e.default, t.default];
  return Ti.default = n, Ti;
}
var ki = {}, Mi = {}, ac;
function jp() {
  if (ac) return Mi;
  ac = 1, Object.defineProperty(Mi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, e.str)`must match format "${i}"`,
      params: ({ schemaCode: i }) => (0, e._)`{format: ${i}}`
    },
    code(i, o) {
      const { gen: r, data: s, $data: a, schema: c, schemaCode: u, it: f } = i, { opts: g, errSchemaPath: p, schemaEnv: h, self: x } = f;
      if (!g.validateFormats)
        return;
      a ? w() : b();
      function w() {
        const S = r.scopeValue("formats", {
          ref: x.formats,
          code: g.code.formats
        }), v = r.const("fDef", (0, e._)`${S}[${u}]`), y = r.let("fType"), d = r.let("format");
        r.if((0, e._)`typeof ${v} == "object" && !(${v} instanceof RegExp)`, () => r.assign(y, (0, e._)`${v}.type || "string"`).assign(d, (0, e._)`${v}.validate`), () => r.assign(y, (0, e._)`"string"`).assign(d, v)), i.fail$data((0, e.or)(l(), m()));
        function l() {
          return g.strictSchema === !1 ? e.nil : (0, e._)`${u} && !${d}`;
        }
        function m() {
          const I = h.$async ? (0, e._)`(${v}.async ? await ${d}(${s}) : ${d}(${s}))` : (0, e._)`${d}(${s})`, A = (0, e._)`(typeof ${d} == "function" ? ${I} : ${d}.test(${s}))`;
          return (0, e._)`${d} && ${d} !== true && ${y} === ${o} && !${A}`;
        }
      }
      function b() {
        const S = x.formats[c];
        if (!S) {
          l();
          return;
        }
        if (S === !0)
          return;
        const [v, y, d] = m(S);
        v === o && i.pass(I());
        function l() {
          if (g.strictSchema === !1) {
            x.logger.warn(A());
            return;
          }
          throw new Error(A());
          function A() {
            return `unknown format "${c}" ignored in schema at path "${p}"`;
          }
        }
        function m(A) {
          const R = A instanceof RegExp ? (0, e.regexpCode)(A) : g.code.formats ? (0, e._)`${g.code.formats}${(0, e.getProperty)(c)}` : void 0, j = r.scopeValue("formats", { key: c, ref: A, code: R });
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
  return Mi.default = n, Mi;
}
var oc;
function Hd() {
  if (oc) return ki;
  oc = 1, Object.defineProperty(ki, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ jp()).default];
  return ki.default = t, ki;
}
var zt = {}, cc;
function Jd() {
  return cc || (cc = 1, Object.defineProperty(zt, "__esModule", { value: !0 }), zt.contentVocabulary = zt.metadataVocabulary = void 0, zt.metadataVocabulary = [
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
var dc;
function $p() {
  if (dc) return Jn;
  dc = 1, Object.defineProperty(Jn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Dd(), t = /* @__PURE__ */ zd(), n = /* @__PURE__ */ Fd(), i = /* @__PURE__ */ bp(), o = /* @__PURE__ */ Ip(), r = /* @__PURE__ */ Rp(), s = /* @__PURE__ */ Hd(), a = /* @__PURE__ */ Jd(), c = [
    i.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    s.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    o.default,
    r.default
  ];
  return Jn.default = c, Jn;
}
var Oi = {}, yn = {}, lc;
function _p() {
  if (lc) return yn;
  lc = 1, Object.defineProperty(yn, "__esModule", { value: !0 }), yn.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (yn.DiscrError = e = {})), yn;
}
var uc;
function Kd() {
  if (uc) return Oi;
  uc = 1, Object.defineProperty(Oi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ _p(), n = /* @__PURE__ */ dr(), i = /* @__PURE__ */ kn(), o = /* @__PURE__ */ ie(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: u } }) => (0, e._)`{error: ${a}, tag: ${u}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: u, schema: f, parentSchema: g, it: p } = a, { oneOf: h } = g;
      if (!p.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const x = f.propertyName;
      if (typeof x != "string")
        throw new Error("discriminator: requires propertyName");
      if (f.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!h)
        throw new Error("discriminator: requires oneOf keyword");
      const w = c.let("valid", !1), b = c.const("tag", (0, e._)`${u}${(0, e.getProperty)(x)}`);
      c.if((0, e._)`typeof ${b} == "string"`, () => S(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: b, tagName: x })), a.ok(w);
      function S() {
        const d = y();
        c.if(!1);
        for (const l in d)
          c.elseIf((0, e._)`${b} === ${l}`), c.assign(w, v(d[l]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: b, tagName: x }), c.endIf();
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
          if (O?.$ref && !(0, o.schemaHasRulesButRef)(O, p.self.RULES)) {
            const C = O.$ref;
            if (O = n.resolveRef.call(p.self, p.schemaEnv.root, p.baseId, C), O instanceof n.SchemaEnv && (O = O.schema), O === void 0)
              throw new i.default(p.opts.uriResolver, p.baseId, C);
          }
          const P = (d = O?.properties) === null || d === void 0 ? void 0 : d[x];
          if (typeof P != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${x}"`);
          I = I && (m || A(O)), R(P, E);
        }
        if (!I)
          throw new Error(`discriminator: "${x}" must be required`);
        return l;
        function A({ required: E }) {
          return Array.isArray(E) && E.includes(x);
        }
        function R(E, O) {
          if (E.const)
            j(E.const, O);
          else if (E.enum)
            for (const P of E.enum)
              j(P, O);
          else
            throw new Error(`discriminator: "properties/${x}" must have "const" or "enum"`);
        }
        function j(E, O) {
          if (typeof E != "string" || E in l)
            throw new Error(`discriminator: "${x}" values must be unique strings`);
          l[E] = O;
        }
      }
    }
  };
  return Oi.default = s, Oi;
}
var Li = {};
const Pp = "https://json-schema.org/draft/2020-12/schema", Tp = "https://json-schema.org/draft/2020-12/schema", Cp = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Ep = "meta", kp = "Core and Validation specifications meta-schema", Mp = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Op = ["object", "boolean"], Lp = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Np = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Dp = {
  $schema: Pp,
  $id: Tp,
  $vocabulary: Cp,
  $dynamicAnchor: Ep,
  title: kp,
  allOf: Mp,
  type: Op,
  $comment: Lp,
  properties: Np
}, zp = "https://json-schema.org/draft/2020-12/schema", Up = "https://json-schema.org/draft/2020-12/meta/applicator", Vp = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Gp = "meta", Fp = "Applicator vocabulary meta-schema", Bp = ["object", "boolean"], Zp = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Hp = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Jp = {
  $schema: zp,
  $id: Up,
  $vocabulary: Vp,
  $dynamicAnchor: Gp,
  title: Fp,
  type: Bp,
  properties: Zp,
  $defs: Hp
}, Kp = "https://json-schema.org/draft/2020-12/schema", Qp = "https://json-schema.org/draft/2020-12/meta/unevaluated", Wp = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Xp = "meta", Yp = "Unevaluated applicator vocabulary meta-schema", ef = ["object", "boolean"], tf = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, nf = {
  $schema: Kp,
  $id: Qp,
  $vocabulary: Wp,
  $dynamicAnchor: Xp,
  title: Yp,
  type: ef,
  properties: tf
}, rf = "https://json-schema.org/draft/2020-12/schema", sf = "https://json-schema.org/draft/2020-12/meta/content", af = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, of = "meta", cf = "Content vocabulary meta-schema", df = ["object", "boolean"], lf = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, uf = {
  $schema: rf,
  $id: sf,
  $vocabulary: af,
  $dynamicAnchor: of,
  title: cf,
  type: df,
  properties: lf
}, pf = "https://json-schema.org/draft/2020-12/schema", ff = "https://json-schema.org/draft/2020-12/meta/core", hf = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, mf = "meta", yf = "Core vocabulary meta-schema", gf = ["object", "boolean"], vf = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, bf = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, wf = {
  $schema: pf,
  $id: ff,
  $vocabulary: hf,
  $dynamicAnchor: mf,
  title: yf,
  type: gf,
  properties: vf,
  $defs: bf
}, xf = "https://json-schema.org/draft/2020-12/schema", Sf = "https://json-schema.org/draft/2020-12/meta/format-annotation", If = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Af = "meta", qf = "Format vocabulary meta-schema for annotation results", Rf = ["object", "boolean"], jf = { format: { type: "string" } }, $f = {
  $schema: xf,
  $id: Sf,
  $vocabulary: If,
  $dynamicAnchor: Af,
  title: qf,
  type: Rf,
  properties: jf
}, _f = "https://json-schema.org/draft/2020-12/schema", Pf = "https://json-schema.org/draft/2020-12/meta/meta-data", Tf = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Cf = "meta", Ef = "Meta-data vocabulary meta-schema", kf = ["object", "boolean"], Mf = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Of = {
  $schema: _f,
  $id: Pf,
  $vocabulary: Tf,
  $dynamicAnchor: Cf,
  title: Ef,
  type: kf,
  properties: Mf
}, Lf = "https://json-schema.org/draft/2020-12/schema", Nf = "https://json-schema.org/draft/2020-12/meta/validation", Df = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, zf = "meta", Uf = "Validation vocabulary meta-schema", Vf = ["object", "boolean"], Gf = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Ff = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Bf = {
  $schema: Lf,
  $id: Nf,
  $vocabulary: Df,
  $dynamicAnchor: zf,
  title: Uf,
  type: Vf,
  properties: Gf,
  $defs: Ff
};
var pc;
function Zf() {
  if (pc) return Li;
  pc = 1, Object.defineProperty(Li, "__esModule", { value: !0 });
  const e = Dp, t = Jp, n = nf, i = uf, o = wf, r = $f, s = Of, a = Bf, c = ["/properties"];
  function u(f) {
    return [
      e,
      t,
      n,
      i,
      o,
      g(this, r),
      s,
      g(this, a)
    ].forEach((p) => this.addMetaSchema(p, void 0, !1)), this;
    function g(p, h) {
      return f ? p.$dataMetaSchema(h, c) : h;
    }
  }
  return Li.default = u, Li;
}
var fc;
function Hf() {
  return fc || (fc = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Nd(), i = /* @__PURE__ */ $p(), o = /* @__PURE__ */ Kd(), r = /* @__PURE__ */ Zf(), s = "https://json-schema.org/draft/2020-12/schema";
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
        super._addVocabularies(), i.default.forEach((h) => this.addVocabulary(h)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: h, meta: x } = this.opts;
        x && (r.default.call(this, h), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var c = /* @__PURE__ */ En();
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
    var f = /* @__PURE__ */ cr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return f.default;
    } });
    var g = /* @__PURE__ */ kn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return g.default;
    } });
  })(Gn, Gn.exports)), Gn.exports;
}
var Jf = /* @__PURE__ */ Hf();
const Kf = /* @__PURE__ */ sa(Jf);
var Ni = { exports: {} }, Dr = {}, hc;
function Qf() {
  return hc || (hc = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(E, O) {
      return { validate: E, compare: O };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(r, s),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: t(c(!0), u),
      "date-time": t(p(!0), h),
      "iso-time": t(c(), f),
      "iso-date-time": t(p(), x),
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
      "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, f),
      "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, x),
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
    const i = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, o = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function r(E) {
      const O = i.exec(E);
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
    function f(E, O) {
      if (!(E && O))
        return;
      const P = a.exec(E), C = a.exec(O);
      if (P && C)
        return E = P[1] + P[2] + P[3], O = C[1] + C[2] + C[3], E > O ? 1 : E < O ? -1 : 0;
    }
    const g = /t|\s/i;
    function p(E) {
      const O = c(E);
      return function(C) {
        const D = C.split(g);
        return D.length === 2 && r(D[0]) && O(D[1]);
      };
    }
    function h(E, O) {
      if (!(E && O))
        return;
      const P = new Date(E).valueOf(), C = new Date(O).valueOf();
      if (P && C)
        return P - C;
    }
    function x(E, O) {
      if (!(E && O))
        return;
      const [P, C] = E.split(g), [D, _] = O.split(g), F = s(P, D);
      if (F !== void 0)
        return F || u(C, _);
    }
    const w = /\/|:/, b = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function S(E) {
      return w.test(E) && b.test(E);
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
  })(Dr)), Dr;
}
var zr = {}, Di = { exports: {} }, zi = {}, mc;
function Wf() {
  if (mc) return zi;
  mc = 1, Object.defineProperty(zi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Dd(), t = /* @__PURE__ */ zd(), n = /* @__PURE__ */ Fd(), i = /* @__PURE__ */ Hd(), o = /* @__PURE__ */ Jd(), r = [
    e.default,
    t.default,
    (0, n.default)(),
    i.default,
    o.metadataVocabulary,
    o.contentVocabulary
  ];
  return zi.default = r, zi;
}
const Xf = "http://json-schema.org/draft-07/schema#", Yf = "http://json-schema.org/draft-07/schema#", eh = "Core schema meta-schema", th = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, nh = ["object", "boolean"], ih = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, rh = {
  $schema: Xf,
  $id: Yf,
  title: eh,
  definitions: th,
  type: nh,
  properties: ih,
  default: !0
};
var yc;
function sh() {
  return yc || (yc = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const n = /* @__PURE__ */ Nd(), i = /* @__PURE__ */ Wf(), o = /* @__PURE__ */ Kd(), r = rh, s = ["/properties"], a = "http://json-schema.org/draft-07/schema";
    class c extends n.default {
      _addVocabularies() {
        super._addVocabularies(), i.default.forEach((x) => this.addVocabulary(x)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta)
          return;
        const x = this.opts.$data ? this.$dataMetaSchema(r, s) : r;
        this.addMetaSchema(x, a, !1), this.refs["http://json-schema.org/schema"] = a;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(a) ? a : void 0);
      }
    }
    t.Ajv = c, e.exports = t = c, e.exports.Ajv = c, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = c;
    var u = /* @__PURE__ */ En();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return u.KeywordCxt;
    } });
    var f = /* @__PURE__ */ te();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return f._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return f.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return f.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return f.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return f.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return f.CodeGen;
    } });
    var g = /* @__PURE__ */ cr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return g.default;
    } });
    var p = /* @__PURE__ */ kn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return p.default;
    } });
  })(Di, Di.exports)), Di.exports;
}
var gc;
function ah() {
  return gc || (gc = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = /* @__PURE__ */ sh(), n = /* @__PURE__ */ te(), i = n.operators, o = {
      formatMaximum: { okStr: "<=", ok: i.LTE, fail: i.GT },
      formatMinimum: { okStr: ">=", ok: i.GTE, fail: i.LT },
      formatExclusiveMaximum: { okStr: "<", ok: i.LT, fail: i.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: i.GT, fail: i.LTE }
    }, r = {
      message: ({ keyword: a, schemaCode: c }) => (0, n.str)`should be ${o[a].okStr} ${c}`,
      params: ({ keyword: a, schemaCode: c }) => (0, n._)`{comparison: ${o[a].okStr}, limit: ${c}}`
    };
    e.formatLimitDefinition = {
      keyword: Object.keys(o),
      type: "string",
      schemaType: "string",
      $data: !0,
      error: r,
      code(a) {
        const { gen: c, data: u, schemaCode: f, keyword: g, it: p } = a, { opts: h, self: x } = p;
        if (!h.validateFormats)
          return;
        const w = new t.KeywordCxt(p, x.RULES.all.format.definition, "format");
        w.$data ? b() : S();
        function b() {
          const y = c.scopeValue("formats", {
            ref: x.formats,
            code: h.code.formats
          }), d = c.const("fmt", (0, n._)`${y}[${w.schemaCode}]`);
          a.fail$data((0, n.or)((0, n._)`typeof ${d} != "object"`, (0, n._)`${d} instanceof RegExp`, (0, n._)`typeof ${d}.compare != "function"`, v(d)));
        }
        function S() {
          const y = w.schema, d = x.formats[y];
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
          return (0, n._)`${y}.compare(${u}, ${f}) ${o[g].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const s = (a) => (a.addKeyword(e.formatLimitDefinition), a);
    e.default = s;
  })(zr)), zr;
}
var vc;
function oh() {
  return vc || (vc = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const n = Qf(), i = ah(), o = /* @__PURE__ */ te(), r = new o.Name("fullFormats"), s = new o.Name("fastFormats"), a = (u, f = { keywords: !0 }) => {
      if (Array.isArray(f))
        return c(u, f, n.fullFormats, r), u;
      const [g, p] = f.mode === "fast" ? [n.fastFormats, s] : [n.fullFormats, r], h = f.formats || n.formatNames;
      return c(u, h, g, p), f.keywords && (0, i.default)(u), u;
    };
    a.get = (u, f = "full") => {
      const p = (f === "fast" ? n.fastFormats : n.fullFormats)[u];
      if (!p)
        throw new Error(`Unknown format "${u}"`);
      return p;
    };
    function c(u, f, g, p) {
      var h, x;
      (h = (x = u.opts.code).formats) !== null && h !== void 0 || (x.formats = (0, o._)`require("ajv-formats/dist/formats").${p}`);
      for (const w of f)
        u.addFormat(w, g[w]);
    }
    e.exports = t = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
  })(Ni, Ni.exports)), Ni.exports;
}
var ch = oh();
const dh = /* @__PURE__ */ sa(ch);
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const lh = {
  p: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,
  n: 0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,
  a: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,
  d: 0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,
  Gx: 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,
  Gy: 0x6666666666666666666666666666666666666666666666666666666666666658n
}, { p: qe, n: Bi, Gx: bc, Gy: wc, a: Ur, d: Vr } = lh, uh = 8n, Tt = 32, $n = 64, Fe = (e = "") => {
  throw new Error(e);
}, ph = (e) => typeof e == "bigint", Qd = (e) => typeof e == "string", fh = (e) => e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array", Zt = (e, t) => !fh(e) || typeof t == "number" && t > 0 && e.length !== t ? Fe("Uint8Array expected") : e, lr = (e) => new Uint8Array(e), da = (e) => Uint8Array.from(e), Wd = (e, t) => e.toString(16).padStart(t, "0"), la = (e) => Array.from(Zt(e)).map((t) => Wd(t, 2)).join(""), vt = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 }, xc = (e) => {
  if (e >= vt._0 && e <= vt._9)
    return e - vt._0;
  if (e >= vt.A && e <= vt.F)
    return e - (vt.A - 10);
  if (e >= vt.a && e <= vt.f)
    return e - (vt.a - 10);
}, ua = (e) => {
  const t = "hex invalid";
  if (!Qd(e))
    return Fe(t);
  const n = e.length, i = n / 2;
  if (n % 2)
    return Fe(t);
  const o = lr(i);
  for (let r = 0, s = 0; r < i; r++, s += 2) {
    const a = xc(e.charCodeAt(s)), c = xc(e.charCodeAt(s + 1));
    if (a === void 0 || c === void 0)
      return Fe(t);
    o[r] = a * 16 + c;
  }
  return o;
}, rn = (e, t) => Zt(Qd(e) ? ua(e) : da(Zt(e)), t), Xd = () => globalThis?.crypto, hh = () => Xd()?.subtle ?? Fe("crypto.subtle must be defined"), _n = (...e) => {
  const t = lr(e.reduce((i, o) => i + Zt(o).length, 0));
  let n = 0;
  return e.forEach((i) => {
    t.set(i, n), n += i.length;
  }), t;
}, mh = (e = Tt) => Xd().getRandomValues(lr(e)), Yi = BigInt, Vt = (e, t, n, i = "bad number: out of range") => ph(e) && t <= e && e < n ? e : Fe(i), Y = (e, t = qe) => {
  const n = e % t;
  return n >= 0n ? n : t + n;
}, Yd = (e) => Y(e, Bi), el = (e, t) => {
  (e === 0n || t <= 0n) && Fe("no inverse n=" + e + " mod=" + t);
  let n = Y(e, t), i = t, o = 0n, r = 1n;
  for (; n !== 0n; ) {
    const s = i / n, a = i % n, c = o - r * s;
    i = n, n = a, o = r, r = c;
  }
  return i === 1n ? Y(o, t) : Fe("no inverse");
}, Sc = (e) => e instanceof xt ? e : Fe("Point expected"), Ls = 2n ** 256n, ot = class ot {
  constructor(t, n, i, o) {
    ft(this, "ex");
    ft(this, "ey");
    ft(this, "ez");
    ft(this, "et");
    const r = Ls;
    this.ex = Vt(t, 0n, r), this.ey = Vt(n, 0n, r), this.ez = Vt(i, 1n, r), this.et = Vt(o, 0n, r), Object.freeze(this);
  }
  static fromAffine(t) {
    return new ot(t.x, t.y, 1n, Y(t.x * t.y));
  }
  /** RFC8032 5.1.3: Uint8Array to Point. */
  static fromBytes(t, n = !1) {
    const i = Vr, o = da(Zt(t, Tt)), r = t[31];
    o[31] = r & -129;
    const s = pa(o);
    Vt(s, 0n, n ? Ls : qe);
    const c = Y(s * s), u = Y(c - 1n), f = Y(i * c + 1n);
    let { isValid: g, value: p } = gh(u, f);
    g || Fe("bad point: y not sqrt");
    const h = (p & 1n) === 1n, x = (r & 128) !== 0;
    return !n && p === 0n && x && Fe("bad point: x==0, isLastByteOdd"), x !== h && (p = Y(-p)), new ot(p, s, 1n, Y(p * s));
  }
  /** Checks if the point is valid and on-curve. */
  assertValidity() {
    const t = Ur, n = Vr, i = this;
    if (i.is0())
      throw new Error("bad point: ZERO");
    const { ex: o, ey: r, ez: s, et: a } = i, c = Y(o * o), u = Y(r * r), f = Y(s * s), g = Y(f * f), p = Y(c * t), h = Y(f * Y(p + u)), x = Y(g + Y(n * Y(c * u)));
    if (h !== x)
      throw new Error("bad point: equation left != right (1)");
    const w = Y(o * r), b = Y(s * a);
    if (w !== b)
      throw new Error("bad point: equation left != right (2)");
    return this;
  }
  /** Equality check: compare points P&Q. */
  equals(t) {
    const { ex: n, ey: i, ez: o } = this, { ex: r, ey: s, ez: a } = Sc(t), c = Y(n * a), u = Y(r * o), f = Y(i * a), g = Y(s * o);
    return c === u && f === g;
  }
  is0() {
    return this.equals(nn);
  }
  /** Flip point over y coordinate. */
  negate() {
    return new ot(Y(-this.ex), this.ey, this.ez, Y(-this.et));
  }
  /** Point doubling. Complete formula. Cost: `4M + 4S + 1*a + 6add + 1*2`. */
  double() {
    const { ex: t, ey: n, ez: i } = this, o = Ur, r = Y(t * t), s = Y(n * n), a = Y(2n * Y(i * i)), c = Y(o * r), u = t + n, f = Y(Y(u * u) - r - s), g = c + s, p = g - a, h = c - s, x = Y(f * p), w = Y(g * h), b = Y(f * h), S = Y(p * g);
    return new ot(x, w, S, b);
  }
  /** Point addition. Complete formula. Cost: `8M + 1*k + 8add + 1*2`. */
  add(t) {
    const { ex: n, ey: i, ez: o, et: r } = this, { ex: s, ey: a, ez: c, et: u } = Sc(t), f = Ur, g = Vr, p = Y(n * s), h = Y(i * a), x = Y(r * g * u), w = Y(o * c), b = Y((n + i) * (s + a) - p - h), S = Y(w - x), v = Y(w + x), y = Y(h - f * p), d = Y(b * S), l = Y(v * y), m = Y(b * y), I = Y(S * v);
    return new ot(d, l, I, m);
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
      return nn;
    if (Vt(t, 1n, Bi), t === 1n)
      return this;
    if (this.equals(Ct))
      return jh(t).p;
    let i = nn, o = Ct;
    for (let r = this; t > 0n; r = r.double(), t >>= 1n)
      t & 1n ? i = i.add(r) : n && (o = o.add(r));
    return i;
  }
  /** Convert point to 2d xy affine point. (X, Y, Z) ∋ (x=X/Z, y=Y/Z) */
  toAffine() {
    const { ex: t, ey: n, ez: i } = this;
    if (this.equals(nn))
      return { x: 0n, y: 1n };
    const o = el(i, qe);
    return Y(i * o) !== 1n && Fe("invalid inverse"), { x: Y(t * o), y: Y(n * o) };
  }
  toBytes() {
    const { x: t, y: n } = this.assertValidity().toAffine(), i = tl(n);
    return i[31] |= t & 1n ? 128 : 0, i;
  }
  toHex() {
    return la(this.toBytes());
  }
  // encode to hex string
  clearCofactor() {
    return this.multiply(Yi(uh), !1);
  }
  isSmallOrder() {
    return this.clearCofactor().is0();
  }
  isTorsionFree() {
    let t = this.multiply(Bi / 2n, !1).double();
    return Bi % 2n && (t = t.add(this)), t.is0();
  }
  static fromHex(t, n) {
    return ot.fromBytes(rn(t), n);
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
ft(ot, "BASE"), ft(ot, "ZERO");
let xt = ot;
const Ct = new xt(bc, wc, 1n, Y(bc * wc)), nn = new xt(0n, 1n, 1n, 0n);
xt.BASE = Ct;
xt.ZERO = nn;
const tl = (e) => ua(Wd(Vt(e, 0n, Ls), $n)).reverse(), pa = (e) => Yi("0x" + la(da(Zt(e)).reverse())), st = (e, t) => {
  let n = e;
  for (; t-- > 0n; )
    n *= n, n %= qe;
  return n;
}, yh = (e) => {
  const n = e * e % qe * e % qe, i = st(n, 2n) * n % qe, o = st(i, 1n) * e % qe, r = st(o, 5n) * o % qe, s = st(r, 10n) * r % qe, a = st(s, 20n) * s % qe, c = st(a, 40n) * a % qe, u = st(c, 80n) * c % qe, f = st(u, 80n) * c % qe, g = st(f, 10n) * r % qe;
  return { pow_p_5_8: st(g, 2n) * e % qe, b2: n };
}, Ic = 0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n, gh = (e, t) => {
  const n = Y(t * t * t), i = Y(n * n * t), o = yh(e * i).pow_p_5_8;
  let r = Y(e * n * o);
  const s = Y(t * r * r), a = r, c = Y(r * Ic), u = s === e, f = s === Y(-e), g = s === Y(-e * Ic);
  return u && (r = a), (f || g) && (r = c), (Y(r) & 1n) === 1n && (r = Y(-r)), { isValid: u || f, value: r };
}, er = (e) => Yd(pa(e)), fa = (...e) => Ah.sha512Async(...e), vh = (e) => {
  const t = e.slice(0, Tt);
  t[0] &= 248, t[31] &= 127, t[31] |= 64;
  const n = e.slice(Tt, $n), i = er(t), o = Ct.multiply(i), r = o.toBytes();
  return { head: t, prefix: n, scalar: i, point: o, pointBytes: r };
}, bh = (e) => fa(rn(e, Tt)).then(vh), nl = (e) => fa(e.hashable).then(e.finish), wh = (e, t, n) => {
  const { pointBytes: i, scalar: o } = e, r = er(t), s = Ct.multiply(r).toBytes();
  return { hashable: _n(s, i, n), finish: (u) => {
    const f = Yd(r + er(u) * o);
    return Zt(_n(s, tl(f)), $n);
  } };
}, xh = async (e, t) => {
  const n = rn(e), i = await bh(t), o = await fa(i.prefix, n);
  return nl(wh(i, o, n));
}, il = { zip215: !0 }, Sh = (e, t, n, i = il) => {
  e = rn(e, $n), t = rn(t), n = rn(n, Tt);
  const { zip215: o } = i;
  let r, s, a, c, u = Uint8Array.of();
  try {
    r = xt.fromHex(n, o), s = xt.fromHex(e.slice(0, Tt), o), a = pa(e.slice(Tt, $n)), c = Ct.multiply(a, !1), u = _n(s.toBytes(), r.toBytes(), t);
  } catch {
  }
  return { hashable: u, finish: (g) => {
    if (c == null || !o && r.isSmallOrder())
      return !1;
    const p = er(g);
    return s.add(r.multiply(p, !1)).add(c.negate()).clearCofactor().is0();
  } };
}, Ih = async (e, t, n, i = il) => nl(Sh(e, t, n, i)), Ah = {
  sha512Async: async (...e) => {
    const t = hh(), n = _n(...e);
    return lr(await t.digest("SHA-512", n.buffer));
  },
  sha512Sync: void 0,
  bytesToHex: la,
  hexToBytes: ua,
  concatBytes: _n,
  mod: Y,
  invert: el,
  randomBytes: mh
}, tr = 8, qh = 256, rl = Math.ceil(qh / tr) + 1, Ns = 2 ** (tr - 1), Rh = () => {
  const e = [];
  let t = Ct, n = t;
  for (let i = 0; i < rl; i++) {
    n = t, e.push(n);
    for (let o = 1; o < Ns; o++)
      n = n.add(t), e.push(n);
    t = n.double();
  }
  return e;
};
let Ac;
const qc = (e, t) => {
  const n = t.negate();
  return e ? n : t;
}, jh = (e) => {
  const t = Ac || (Ac = Rh());
  let n = nn, i = Ct;
  const o = 2 ** tr, r = o, s = Yi(o - 1), a = Yi(tr);
  for (let c = 0; c < rl; c++) {
    let u = Number(e & s);
    e >>= a, u > Ns && (u -= r, e += 1n);
    const f = c * Ns, g = f, p = f + Math.abs(u) - 1, h = c % 2 !== 0, x = u < 0;
    u === 0 ? i = i.add(qc(h, t[g])) : n = n.add(qc(x, t[p]));
  }
  return { p: n, f: i };
};
var Gr = {}, Fr, Rc;
function ha() {
  return Rc || (Rc = 1, Fr = class sl {
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
      return new sl(t, new Map(n), i);
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
  }), Fr;
}
var Br = {}, jc;
function $h() {
  return jc || (jc = 1, (function(e, t) {
    if (e.setImmediate)
      return;
    var n = 1, i = {}, o = !1, r = e.document, s;
    function a(v) {
      typeof v != "function" && (v = new Function("" + v));
      for (var y = new Array(arguments.length - 1), d = 0; d < y.length; d++)
        y[d] = arguments[d + 1];
      var l = { callback: v, args: y };
      return i[n] = l, s(n), n++;
    }
    function c(v) {
      delete i[v];
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
    function f(v) {
      if (o)
        setTimeout(f, 0, v);
      else {
        var y = i[v];
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
          f(v);
        });
      };
    }
    function p() {
      if (e.postMessage && !e.importScripts) {
        var v = !0, y = e.onmessage;
        return e.onmessage = function() {
          v = !1;
        }, e.postMessage("", "*"), e.onmessage = y, v;
      }
    }
    function h() {
      var v = "setImmediate$" + Math.random() + "$", y = function(d) {
        d.source === e && typeof d.data == "string" && d.data.indexOf(v) === 0 && f(+d.data.slice(v.length));
      };
      e.addEventListener ? e.addEventListener("message", y, !1) : e.attachEvent("onmessage", y), s = function(d) {
        e.postMessage(v + d, "*");
      };
    }
    function x() {
      var v = new MessageChannel();
      v.port1.onmessage = function(y) {
        var d = y.data;
        f(d);
      }, s = function(y) {
        v.port2.postMessage(y);
      };
    }
    function w() {
      var v = r.documentElement;
      s = function(y) {
        var d = r.createElement("script");
        d.onreadystatechange = function() {
          f(y), d.onreadystatechange = null, v.removeChild(d), d = null;
        }, v.appendChild(d);
      };
    }
    function b() {
      s = function(v) {
        setTimeout(f, 0, v);
      };
    }
    var S = Object.getPrototypeOf && Object.getPrototypeOf(e);
    S = S && S.setTimeout ? S : e, {}.toString.call(e.process) === "[object process]" ? g() : p() ? h() : e.MessageChannel ? x() : r && "onreadystatechange" in r.createElement("script") ? w() : b(), S.setImmediate = a, S.clearImmediate = c;
  })(typeof self > "u" ? typeof za > "u" ? Br : za : self)), Br;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Zr, $c;
function ur() {
  if ($c) return Zr;
  $c = 1, $h();
  const e = self.crypto || self.msCrypto;
  return Zr = class {
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
      let o = "";
      for (let r = 0; r < i.length; ++r)
        o += i[r].toString(16).padStart(2, "0");
      return o;
    }
  }, Zr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Hr, _c;
function al() {
  return _c || (_c = 1, Hr = class {
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
      let o = null, r = 0;
      const s = t.length;
      for (let a = 0; a < s; ++a) {
        const c = t[a], u = n.get(c);
        (o === null || c > o) && (u && a > 0 && c > t[a - 1] || !u && a < s - 1 && c > t[a + 1]) && (o = c, r = a);
      }
      if (o === null)
        this.done = !0;
      else {
        const a = n.get(o) ? r - 1 : r + 1;
        t[r] = t[a], t[a] = o;
        for (const c of t)
          c > o && n.set(c, !n.get(c));
      }
      return i;
    }
  }), Hr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Jr, Pc;
function ma() {
  if (Pc) return Jr;
  Pc = 1;
  const t = "http://www.w3.org/1999/02/22-rdf-syntax-ns#" + "langString", n = "http://www.w3.org/2001/XMLSchema#string", i = "NamedNode", o = "BlankNode", r = "Literal", s = "DefaultGraph", a = {};
  (() => {
    const h = "(?:<([^:]+:[^>]*)>)", w = "A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�" + "_", b = w + "0-9-·̀-ͯ‿-⁀", v = "(_:(?:[" + w + "0-9])(?:(?:[" + b + ".])*(?:[" + b + "]))?)", y = '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"', d = "(?:\\^\\^" + h + ")", m = "(?:" + y + "(?:" + d + "|" + "(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*))" + ")?)", I = "[ \\t]+", A = "[ \\t]*", R = "(?:" + h + "|" + v + ")" + I, j = h + I, E = "(?:" + h + "|" + v + "|" + m + ")" + A, O = "(?:\\.|(?:(?:" + h + "|" + v + ")" + A + "\\.))";
    a.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g, a.empty = new RegExp("^" + A + "$"), a.quad = new RegExp(
      "^" + A + R + j + E + O + A + "$"
    );
  })(), Jr = class Zi {
    /**
     * Parses RDF in the form of N-Quads.
     *
     * @param input the N-Quads input to parse.
     *
     * @return an RDF dataset (an array of quads per http://rdf.js.org/).
     */
    static parse(x) {
      const w = [], b = {}, S = x.split(a.eoln);
      let v = 0;
      for (const y of S) {
        if (v++, a.empty.test(y))
          continue;
        const d = y.match(a.quad);
        if (d === null)
          throw new Error("N-Quads parse error on line " + v + ".");
        const l = { subject: null, predicate: null, object: null, graph: null };
        if (d[1] !== void 0 ? l.subject = { termType: i, value: d[1] } : l.subject = { termType: o, value: d[2] }, l.predicate = { termType: i, value: d[3] }, d[4] !== void 0 ? l.object = { termType: i, value: d[4] } : d[5] !== void 0 ? l.object = { termType: o, value: d[5] } : (l.object = {
          termType: r,
          value: void 0,
          datatype: {
            termType: i
          }
        }, d[7] !== void 0 ? l.object.datatype.value = d[7] : d[8] !== void 0 ? (l.object.datatype.value = t, l.object.language = d[8]) : l.object.datatype.value = n, l.object.value = p(d[6])), d[9] !== void 0 ? l.graph = {
          termType: i,
          value: d[9]
        } : d[10] !== void 0 ? l.graph = {
          termType: o,
          value: d[10]
        } : l.graph = {
          termType: s,
          value: ""
        }, !(l.graph.value in b))
          b[l.graph.value] = [l], w.push(l);
        else {
          let m = !0;
          const I = b[l.graph.value];
          for (const A of I)
            if (c(A, l)) {
              m = !1;
              break;
            }
          m && (I.push(l), w.push(l));
        }
      }
      return w;
    }
    /**
     * Converts an RDF dataset to N-Quads.
     *
     * @param dataset (array of quads) the RDF dataset to convert.
     *
     * @return the N-Quads string.
     */
    static serialize(x) {
      Array.isArray(x) || (x = Zi.legacyDatasetToQuads(x));
      const w = [];
      for (const b of x)
        w.push(Zi.serializeQuad(b));
      return w.sort().join("");
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
    static serializeQuadComponents(x, w, b, S) {
      let v = "";
      return x.termType === i ? v += `<${x.value}>` : v += `${x.value}`, v += ` <${w.value}> `, b.termType === i ? v += `<${b.value}>` : b.termType === o ? v += b.value : (v += `"${f(b.value)}"`, b.datatype.value === t ? b.language && (v += `@${b.language}`) : b.datatype.value !== n && (v += `^^<${b.datatype.value}>`)), S.termType === i ? v += ` <${S.value}>` : S.termType === o && (v += ` ${S.value}`), v += ` .
`, v;
    }
    /**
     * Converts an RDF quad to an N-Quad string (a single quad).
     *
     * @param quad the RDF quad convert.
     *
     * @return the N-Quad string.
     */
    static serializeQuad(x) {
      return Zi.serializeQuadComponents(
        x.subject,
        x.predicate,
        x.object,
        x.graph
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
    static legacyDatasetToQuads(x) {
      const w = [], b = {
        "blank node": o,
        IRI: i,
        literal: r
      };
      for (const S in x)
        x[S].forEach((y) => {
          const d = {};
          for (const l in y) {
            const m = y[l], I = {
              termType: b[m.type],
              value: m.value
            };
            I.termType === r && (I.datatype = {
              termType: i
            }, "datatype" in m && (I.datatype.value = m.datatype), "language" in m ? ("datatype" in m || (I.datatype.value = t), I.language = m.language) : "datatype" in m || (I.datatype.value = n)), d[l] = I;
          }
          S === "@default" ? d.graph = {
            termType: s,
            value: ""
          } : d.graph = {
            termType: S.startsWith("_:") ? o : i,
            value: S
          }, w.push(d);
        });
      return w;
    }
  };
  function c(h, x) {
    return !(h.subject.termType === x.subject.termType && h.object.termType === x.object.termType) || !(h.subject.value === x.subject.value && h.predicate.value === x.predicate.value && h.object.value === x.object.value) ? !1 : h.object.termType !== r ? !0 : h.object.datatype.termType === x.object.datatype.termType && h.object.language === x.object.language && h.object.datatype.value === x.object.datatype.value;
  }
  const u = /["\\\n\r]/g;
  function f(h) {
    return h.replace(u, function(x) {
      switch (x) {
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
  function p(h) {
    return h.replace(g, function(x, w, b, S) {
      if (w)
        switch (w) {
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
  return Jr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Kr, Tc;
function ol() {
  if (Tc) return Kr;
  Tc = 1;
  const e = ha(), t = ur(), n = al(), i = ma();
  Kr = class {
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
      const f = [...a.keys()].sort(), g = [];
      for (const h of f) {
        const x = a.get(h);
        if (x.length > 1) {
          g.push(x);
          continue;
        }
        const w = x[0];
        this.canonicalIssuer.getId(w);
      }
      for (const h of g) {
        const x = [];
        for (const w of h) {
          if (this.canonicalIssuer.hasId(w))
            continue;
          const b = new e("_:b");
          b.getId(w);
          const S = await this.hashNDegreeQuads(w, b);
          x.push(S);
        }
        x.sort(o);
        for (const w of x) {
          const b = w.issuer.getOldIds();
          for (const S of b)
            this.canonicalIssuer.getId(S);
        }
      }
      const p = [];
      for (const h of this.quads) {
        const x = i.serializeQuadComponents(
          this._componentWithCanonicalId(h.subject),
          h.predicate,
          this._componentWithCanonicalId(h.object),
          this._componentWithCanonicalId(h.graph)
        );
        p.push(x);
      }
      return p.sort(), p.join("");
    }
    // 4.6) Hash First Degree Quads
    async hashFirstDegreeQuads(s) {
      const a = [], c = this.blankNodeInfo.get(s), u = c.quads;
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
      const f = this.createMessageDigest();
      for (const g of a)
        f.update(g);
      return c.hash = await f.digest(), c.hash;
    }
    // 4.7) Hash Related Blank Node
    async hashRelatedBlankNode(s, a, c, u) {
      let f;
      this.canonicalIssuer.hasId(s) ? f = this.canonicalIssuer.getId(s) : c.hasId(s) ? f = c.getId(s) : f = this.blankNodeInfo.get(s).hash;
      const g = this.createMessageDigest();
      return g.update(u), u !== "g" && g.update(this.getRelatedPredicate(a)), g.update(f), g.digest();
    }
    // 4.8) Hash N-Degree Quads
    async hashNDegreeQuads(s, a) {
      const c = this.deepIterations.get(s) || 0;
      if (c > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(s, c + 1);
      const u = this.createMessageDigest(), f = await this.createHashToRelated(s, a), g = [...f.keys()].sort();
      for (const p of g) {
        u.update(p);
        let h = "", x;
        const w = new n(f.get(p));
        let b = 0;
        for (; w.hasNext(); ) {
          const S = w.next();
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
            l || (h.length === 0 || y < h) && (h = y, x = v);
          }
        }
        u.update(h), a = x;
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
      let f = 0;
      for (const g of u)
        ++f % 100 === 0 && await this._yield(), await Promise.all([
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
    async _addRelatedBlankNodeHash({ quad: s, component: a, position: c, id: u, issuer: f, hashToRelated: g }) {
      if (!(a.termType === "BlankNode" && a.value !== u))
        return;
      const p = a.value, h = await this.hashRelatedBlankNode(
        p,
        s,
        f,
        c
      ), x = g.get(h);
      x ? x.push(p) : g.set(h, [p]);
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
  function o(r, s) {
    return r.hash < s.hash ? -1 : r.hash > s.hash ? 1 : 0;
  }
  return Kr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Qr, Cc;
function _h() {
  if (Cc) return Qr;
  Cc = 1;
  const e = ur(), t = ol();
  return Qr = class extends t {
    constructor() {
      super(), this.name = "URGNA2012", this.createMessageDigest = () => new e("sha1");
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(i, o, r) {
      return o.termType !== "BlankNode" ? o : r === "graph" ? {
        termType: "BlankNode",
        value: "_:g"
      } : {
        termType: "BlankNode",
        value: o.value === i ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(i) {
      return i.predicate.value;
    }
    // helper for creating hash to related blank nodes map
    async createHashToRelated(i, o) {
      const r = /* @__PURE__ */ new Map(), s = this.blankNodeInfo.get(i).quads;
      let a = 0;
      for (const c of s) {
        let u, f;
        if (c.subject.termType === "BlankNode" && c.subject.value !== i)
          f = c.subject.value, u = "p";
        else if (c.object.termType === "BlankNode" && c.object.value !== i)
          f = c.object.value, u = "r";
        else
          continue;
        ++a % 100 === 0 && await this._yield();
        const g = await this.hashRelatedBlankNode(
          f,
          c,
          o,
          u
        ), p = r.get(g);
        p ? p.push(f) : r.set(g, [f]);
      }
      return r;
    }
  }, Qr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Wr, Ec;
function cl() {
  if (Ec) return Wr;
  Ec = 1;
  const e = ha(), t = ur(), n = al(), i = ma();
  Wr = class {
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
      for (const p of s)
        this._addBlankNodeQuadInfo({ quad: p, component: p.subject }), this._addBlankNodeQuadInfo({ quad: p, component: p.object }), this._addBlankNodeQuadInfo({ quad: p, component: p.graph });
      const a = /* @__PURE__ */ new Map(), c = [...this.blankNodeInfo.keys()];
      for (const p of c)
        this._hashAndTrackBlankNode({ id: p, hashToBlankNodes: a });
      const u = [...a.keys()].sort(), f = [];
      for (const p of u) {
        const h = a.get(p);
        if (h.length > 1) {
          f.push(h);
          continue;
        }
        const x = h[0];
        this.canonicalIssuer.getId(x);
      }
      for (const p of f) {
        const h = [];
        for (const x of p) {
          if (this.canonicalIssuer.hasId(x))
            continue;
          const w = new e("_:b");
          w.getId(x);
          const b = this.hashNDegreeQuads(x, w);
          h.push(b);
        }
        h.sort(o);
        for (const x of h) {
          const w = x.issuer.getOldIds();
          for (const b of w)
            this.canonicalIssuer.getId(b);
        }
      }
      const g = [];
      for (const p of this.quads) {
        const h = i.serializeQuadComponents(
          this._componentWithCanonicalId({ component: p.subject }),
          p.predicate,
          this._componentWithCanonicalId({ component: p.object }),
          this._componentWithCanonicalId({ component: p.graph })
        );
        g.push(h);
      }
      return g.sort(), g.join("");
    }
    // 4.6) Hash First Degree Quads
    hashFirstDegreeQuads(s) {
      const a = [], c = this.blankNodeInfo.get(s), u = c.quads;
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
      const f = this.createMessageDigest();
      for (const g of a)
        f.update(g);
      return c.hash = f.digest(), c.hash;
    }
    // 4.7) Hash Related Blank Node
    hashRelatedBlankNode(s, a, c, u) {
      let f;
      this.canonicalIssuer.hasId(s) ? f = this.canonicalIssuer.getId(s) : c.hasId(s) ? f = c.getId(s) : f = this.blankNodeInfo.get(s).hash;
      const g = this.createMessageDigest();
      return g.update(u), u !== "g" && g.update(this.getRelatedPredicate(a)), g.update(f), g.digest();
    }
    // 4.8) Hash N-Degree Quads
    hashNDegreeQuads(s, a) {
      const c = this.deepIterations.get(s) || 0;
      if (c > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(s, c + 1);
      const u = this.createMessageDigest(), f = this.createHashToRelated(s, a), g = [...f.keys()].sort();
      for (const p of g) {
        u.update(p);
        let h = "", x;
        const w = new n(f.get(p));
        for (; w.hasNext(); ) {
          const b = w.next();
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
            d || (h.length === 0 || v < h) && (h = v, x = S);
          }
        }
        u.update(h), a = x;
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
      for (const f of u)
        this._addRelatedBlankNodeHash({
          quad: f,
          component: f.subject,
          position: "s",
          id: s,
          issuer: a,
          hashToRelated: c
        }), this._addRelatedBlankNodeHash({
          quad: f,
          component: f.object,
          position: "o",
          id: s,
          issuer: a,
          hashToRelated: c
        }), this._addRelatedBlankNodeHash({
          quad: f,
          component: f.graph,
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
    _addRelatedBlankNodeHash({ quad: s, component: a, position: c, id: u, issuer: f, hashToRelated: g }) {
      if (!(a.termType === "BlankNode" && a.value !== u))
        return;
      const p = a.value, h = this.hashRelatedBlankNode(p, s, f, c), x = g.get(h);
      x ? x.push(p) : g.set(h, [p]);
    }
    // canonical ids for 7.1
    _componentWithCanonicalId({ component: s }) {
      return s.termType === "BlankNode" && !s.value.startsWith(this.canonicalIssuer.prefix) ? {
        termType: "BlankNode",
        value: this.canonicalIssuer.getId(s.value)
      } : s;
    }
  };
  function o(r, s) {
    return r.hash < s.hash ? -1 : r.hash > s.hash ? 1 : 0;
  }
  return Wr;
}
/*!
 * Copyright (c) 2016-2021 Digital Bazaar, Inc. All rights reserved.
 */
var Xr, kc;
function Ph() {
  if (kc) return Xr;
  kc = 1;
  const e = ur(), t = cl();
  return Xr = class extends t {
    constructor() {
      super(), this.name = "URGNA2012", this.createMessageDigest = () => new e("sha1");
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(i, o, r) {
      return o.termType !== "BlankNode" ? o : r === "graph" ? {
        termType: "BlankNode",
        value: "_:g"
      } : {
        termType: "BlankNode",
        value: o.value === i ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(i) {
      return i.predicate.value;
    }
    // helper for creating hash to related blank nodes map
    createHashToRelated(i, o) {
      const r = /* @__PURE__ */ new Map(), s = this.blankNodeInfo.get(i).quads;
      for (const a of s) {
        let c, u;
        if (a.subject.termType === "BlankNode" && a.subject.value !== i)
          u = a.subject.value, c = "p";
        else if (a.object.termType === "BlankNode" && a.object.value !== i)
          u = a.object.value, c = "r";
        else
          continue;
        const f = this.hashRelatedBlankNode(u, a, o, c), g = r.get(f);
        g ? g.push(u) : r.set(f, [u]);
      }
      return r;
    }
  }, Xr;
}
const Th = {}, Ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Th
}, Symbol.toStringTag, { value: "Module" })), Eh = /* @__PURE__ */ Tu(Ch);
var Mc;
function kh() {
  return Mc || (Mc = 1, (function(e) {
    const t = ol(), n = _h(), i = cl(), o = Ph();
    let r;
    try {
      r = Eh;
    } catch {
    }
    function s(a) {
      return Array.isArray(a) ? a : e.NQuads.legacyDatasetToQuads(a);
    }
    e.NQuads = ma(), e.IdentifierIssuer = ha(), e._rdfCanonizeNative = function(a) {
      return a && (r = a), r;
    }, e.canonize = async function(a, c) {
      const u = s(a);
      if (c.useNative) {
        if (!r)
          throw new Error("rdf-canonize-native not available");
        if (c.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return new Promise((f, g) => r.canonize(u, c, (p, h) => p ? g(p) : f(h)));
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
        if (!r)
          throw new Error("rdf-canonize-native not available");
        if (c.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return r.canonizeSync(u, c);
      }
      if (c.algorithm === "URDNA2015")
        return new i(c).main(u);
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
  })(Gr)), Gr;
}
var Yr, Oc;
function ya() {
  return Oc || (Oc = 1, Yr = kh()), Yr;
}
var es, Lc;
function Ne() {
  if (Lc) return es;
  Lc = 1;
  const e = {};
  return es = e, e.isArray = Array.isArray, e.isBoolean = (t) => typeof t == "boolean" || Object.prototype.toString.call(t) === "[object Boolean]", e.isDouble = (t) => e.isNumber(t) && (String(t).indexOf(".") !== -1 || Math.abs(t) >= 1e21), e.isEmptyObject = (t) => e.isObject(t) && Object.keys(t).length === 0, e.isNumber = (t) => typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]", e.isNumeric = (t) => !isNaN(parseFloat(t)) && isFinite(t), e.isObject = (t) => Object.prototype.toString.call(t) === "[object Object]", e.isString = (t) => typeof t == "string" || Object.prototype.toString.call(t) === "[object String]", e.isUndefined = (t) => typeof t > "u", es;
}
var ts, Nc;
function St() {
  if (Nc) return ts;
  Nc = 1;
  const e = Ne(), t = {};
  return ts = t, t.isSubject = (n) => e.isObject(n) && !("@value" in n || "@set" in n || "@list" in n) ? Object.keys(n).length > 1 || !("@id" in n) : !1, t.isSubjectReference = (n) => (
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
  }, ts;
}
var ns, Dc;
function He() {
  return Dc || (Dc = 1, ns = class extends Error {
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
  }), ns;
}
var is, zc;
function Ze() {
  if (zc) return is;
  zc = 1;
  const e = St(), t = Ne(), n = ya().IdentifierIssuer, i = He(), o = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/, r = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g, s = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/, a = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g, c = /^@[a-zA-Z]+$/, u = {
    headers: {
      accept: "application/ld+json, application/json"
    }
  }, f = {};
  is = f, f.IdentifierIssuer = n, f.REGEX_BCP47 = o, f.REGEX_KEYWORD = c, f.clone = function(p) {
    if (p && typeof p == "object") {
      let h;
      if (t.isArray(p)) {
        h = [];
        for (let x = 0; x < p.length; ++x)
          h[x] = f.clone(p[x]);
      } else if (p instanceof Map) {
        h = /* @__PURE__ */ new Map();
        for (const [x, w] of p)
          h.set(x, f.clone(w));
      } else if (p instanceof Set) {
        h = /* @__PURE__ */ new Set();
        for (const x of p)
          h.add(f.clone(x));
      } else if (t.isObject(p)) {
        h = {};
        for (const x in p)
          h[x] = f.clone(p[x]);
      } else
        h = p.toString();
      return h;
    }
    return p;
  }, f.asArray = function(p) {
    return Array.isArray(p) ? p : [p];
  }, f.buildHeaders = (p = {}) => {
    if (Object.keys(p).some(
      (x) => x.toLowerCase() === "accept"
    ))
      throw new RangeError(
        'Accept header may not be specified; only "' + u.headers.accept + '" is supported.'
      );
    return Object.assign({ Accept: u.headers.accept }, p);
  }, f.parseLinkHeader = (p) => {
    const h = {}, x = p.match(r);
    for (let w = 0; w < x.length; ++w) {
      let b = x[w].match(s);
      if (!b)
        continue;
      const S = { target: b[1] }, v = b[2];
      for (; b = a.exec(v); )
        S[b[1]] = b[2] === void 0 ? b[3] : b[2];
      const y = S.rel || "";
      Array.isArray(h[y]) ? h[y].push(S) : h.hasOwnProperty(y) ? h[y] = [h[y], S] : h[y] = S;
    }
    return h;
  }, f.validateTypeValue = (p, h) => {
    if (!t.isString(p) && !(t.isArray(p) && p.every((x) => t.isString(x)))) {
      if (h && t.isObject(p))
        switch (Object.keys(p).length) {
          case 0:
            return;
          case 1:
            if ("@default" in p && f.asArray(p["@default"]).every((x) => t.isString(x)))
              return;
        }
      throw new i(
        'Invalid JSON-LD syntax; "@type" value must a string, an array of strings, an empty object, or a default object.',
        "jsonld.SyntaxError",
        { code: "invalid type value", value: p }
      );
    }
  }, f.hasProperty = (p, h) => {
    if (p.hasOwnProperty(h)) {
      const x = p[h];
      return !t.isArray(x) || x.length > 0;
    }
    return !1;
  }, f.hasValue = (p, h, x) => {
    if (f.hasProperty(p, h)) {
      let w = p[h];
      const b = e.isList(w);
      if (t.isArray(w) || b) {
        b && (w = w["@list"]);
        for (let S = 0; S < w.length; ++S)
          if (f.compareValues(x, w[S]))
            return !0;
      } else if (!t.isArray(x))
        return f.compareValues(x, w);
    }
    return !1;
  }, f.addValue = (p, h, x, w) => {
    if (w = w || {}, "propertyIsArray" in w || (w.propertyIsArray = !1), "valueIsArray" in w || (w.valueIsArray = !1), "allowDuplicate" in w || (w.allowDuplicate = !0), "prependValue" in w || (w.prependValue = !1), w.valueIsArray)
      p[h] = x;
    else if (t.isArray(x)) {
      x.length === 0 && w.propertyIsArray && !p.hasOwnProperty(h) && (p[h] = []), w.prependValue && (x = x.concat(p[h]), p[h] = []);
      for (let b = 0; b < x.length; ++b)
        f.addValue(p, h, x[b], w);
    } else if (p.hasOwnProperty(h)) {
      const b = !w.allowDuplicate && f.hasValue(p, h, x);
      !t.isArray(p[h]) && (!b || w.propertyIsArray) && (p[h] = [p[h]]), b || (w.prependValue ? p[h].unshift(x) : p[h].push(x));
    } else
      p[h] = w.propertyIsArray ? [x] : x;
  }, f.getValues = (p, h) => [].concat(p[h] || []), f.removeProperty = (p, h) => {
    delete p[h];
  }, f.removeValue = (p, h, x, w) => {
    w = w || {}, "propertyIsArray" in w || (w.propertyIsArray = !1);
    const b = f.getValues(p, h).filter(
      (S) => !f.compareValues(S, x)
    );
    b.length === 0 ? f.removeProperty(p, h) : b.length === 1 && !w.propertyIsArray ? p[h] = b[0] : p[h] = b;
  }, f.relabelBlankNodes = (p, h) => {
    h = h || {};
    const x = h.issuer || new n("_:b");
    return g(x, p);
  }, f.compareValues = (p, h) => p === h || e.isValue(p) && e.isValue(h) && p["@value"] === h["@value"] && p["@type"] === h["@type"] && p["@language"] === h["@language"] && p["@index"] === h["@index"] ? !0 : t.isObject(p) && "@id" in p && t.isObject(h) && "@id" in h ? p["@id"] === h["@id"] : !1, f.compareShortestLeast = (p, h) => p.length < h.length ? -1 : h.length < p.length ? 1 : p === h ? 0 : p < h ? -1 : 1;
  function g(p, h) {
    if (t.isArray(h))
      for (let x = 0; x < h.length; ++x)
        h[x] = g(p, h[x]);
    else if (e.isList(h))
      h["@list"] = g(p, h["@list"]);
    else if (t.isObject(h)) {
      e.isBlankNode(h) && (h["@id"] = p.getId(h["@id"]));
      const x = Object.keys(h).sort();
      for (let w = 0; w < x.length; ++w) {
        const b = x[w];
        b !== "@id" && (h[b] = g(p, h[b]));
      }
    }
    return h;
  }
  return is;
}
var rs, Uc;
function ga() {
  if (Uc) return rs;
  Uc = 1;
  const e = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", t = "http://www.w3.org/2001/XMLSchema#";
  return rs = {
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
  }, rs;
}
var ss, Vc;
function dl() {
  return Vc || (Vc = 1, ss = class {
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
  }), ss;
}
var as, Gc;
function Mt() {
  if (Gc) return as;
  Gc = 1;
  const e = Ne(), t = {};
  as = t, t.parsers = {
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
  }, t.parse = (i, o) => {
    const r = {}, s = t.parsers[o || "full"], a = s.regex.exec(i);
    let c = s.keys.length;
    for (; c--; )
      r[s.keys[c]] = a[c] === void 0 ? null : a[c];
    return (r.scheme === "https" && r.port === "443" || r.scheme === "http" && r.port === "80") && (r.href = r.href.replace(":" + r.port, ""), r.authority = r.authority.replace(":" + r.port, ""), r.port = null), r.normalizedPath = t.removeDotSegments(r.path), r;
  }, t.prependBase = (i, o) => {
    if (i === null || t.isAbsolute(o))
      return o;
    (!i || e.isString(i)) && (i = t.parse(i || ""));
    const r = t.parse(o), s = {
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
        let c = i.path;
        c = c.substr(0, c.lastIndexOf("/") + 1), (c.length > 0 || i.authority) && c.substr(-1) !== "/" && (c += "/"), c += r.path, s.path = c;
      }
      s.query = r.query;
    }
    r.path !== "" && (s.path = t.removeDotSegments(s.path));
    let a = s.protocol;
    return s.authority !== null && (a += "//" + s.authority), a += s.path, s.query !== null && (a += "?" + s.query), r.fragment !== null && (a += "#" + r.fragment), a === "" && (a = "./"), a;
  }, t.removeBase = (i, o) => {
    if (i === null)
      return o;
    (!i || e.isString(i)) && (i = t.parse(i || ""));
    let r = "";
    if (i.href !== "" ? r += (i.protocol || "") + "//" + (i.authority || "") : o.indexOf("//") && (r += "//"), o.indexOf(r) !== 0)
      return o;
    const s = t.parse(o.substr(r.length)), a = i.normalizedPath.split("/"), c = s.normalizedPath.split("/"), u = s.fragment || s.query ? 0 : 1;
    for (; a.length > 0 && c.length > u && a[0] === c[0]; )
      a.shift(), c.shift();
    let f = "";
    if (a.length > 0) {
      a.pop();
      for (let g = 0; g < a.length; ++g)
        f += "../";
    }
    return f += c.join("/"), s.query !== null && (f += "?" + s.query), s.fragment !== null && (f += "#" + s.fragment), f === "" && (f = "./"), f;
  }, t.removeDotSegments = (i) => {
    if (i.length === 0)
      return "";
    const o = i.split("/"), r = [];
    for (; o.length > 0; ) {
      const s = o.shift(), a = o.length === 0;
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
  return t.isAbsolute = (i) => e.isString(i) && n.test(i), t.isRelative = (i) => e.isString(i), as;
}
var os, Fc;
function Mh() {
  if (Fc) return os;
  Fc = 1;
  const { parseLinkHeader: e, buildHeaders: t } = Ze(), { LINK_HEADER_CONTEXT: n } = ga(), i = He(), o = dl(), { prependBase: r } = Mt(), s = /(^|(\r\n))link:/i;
  os = ({
    secure: c,
    headers: u = {},
    xhr: f
  } = { headers: {} }) => {
    return u = t(u), new o().wrapLoader(p);
    async function p(h) {
      if (h.indexOf("http:") !== 0 && h.indexOf("https:") !== 0)
        throw new i(
          'URL could not be dereferenced; only "http" and "https" URLs are supported.',
          "jsonld.InvalidUrl",
          { code: "loading document failed", url: h }
        );
      if (c && h.indexOf("https") !== 0)
        throw new i(
          `URL could not be dereferenced; secure mode is enabled and the URL's scheme is not "https".`,
          "jsonld.InvalidUrl",
          { code: "loading document failed", url: h }
        );
      let x;
      try {
        x = await a(f, h, u);
      } catch (y) {
        throw new i(
          "URL could not be dereferenced, an error occurred.",
          "jsonld.LoadDocumentError",
          { code: "loading document failed", url: h, cause: y }
        );
      }
      if (x.status >= 400)
        throw new i(
          "URL could not be dereferenced: " + x.statusText,
          "jsonld.LoadDocumentError",
          {
            code: "loading document failed",
            url: h,
            httpStatusCode: x.status
          }
        );
      let w = { contextUrl: null, documentUrl: h, document: x.response }, b = null;
      const S = x.getResponseHeader("Content-Type");
      let v;
      if (s.test(x.getAllResponseHeaders()) && (v = x.getResponseHeader("Link")), v && S !== "application/ld+json") {
        const y = e(v), d = y[n];
        if (Array.isArray(d))
          throw new i(
            "URL could not be dereferenced, it has more than one associated HTTP Link Header.",
            "jsonld.InvalidUrl",
            { code: "multiple context link headers", url: h }
          );
        d && (w.contextUrl = d.target), b = y.alternate, b && b.type == "application/ld+json" && !(S || "").match(/^application\/(\w*\+)?json$/) && (w = await p(r(h, b.target)));
      }
      return w;
    }
  };
  function a(c, u, f) {
    c = c || XMLHttpRequest;
    const g = new c();
    return new Promise((p, h) => {
      g.onload = () => p(g), g.onerror = (x) => h(x), g.open("GET", u, !0);
      for (const x in f)
        g.setRequestHeader(x, f[x]);
      g.send();
    });
  }
  return os;
}
var cs, Bc;
function Oh() {
  if (Bc) return cs;
  Bc = 1;
  const e = Mh(), t = {};
  return cs = t, t.setupDocumentLoaders = function(n) {
    typeof XMLHttpRequest < "u" && (n.documentLoaders.xhr = e, n.useDocumentLoader("xhr"));
  }, t.setupGlobals = function(n) {
    typeof globalThis.JsonLdProcessor > "u" && Object.defineProperty(globalThis, "JsonLdProcessor", {
      writable: !0,
      enumerable: !1,
      configurable: !0,
      value: n.JsonLdProcessor
    });
  }, cs;
}
var ds, Zc;
function Lh() {
  return Zc || (Zc = 1, ds = function(e) {
    e.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next)
        yield t.value;
    };
  }), ds;
}
var ls, Hc;
function Nh() {
  if (Hc) return ls;
  Hc = 1, ls = e, e.Node = o, e.create = e;
  function e(r) {
    var s = this;
    if (s instanceof e || (s = new e()), s.tail = null, s.head = null, s.length = 0, r && typeof r.forEach == "function")
      r.forEach(function(u) {
        s.push(u);
      });
    else if (arguments.length > 0)
      for (var a = 0, c = arguments.length; a < c; a++)
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
    for (var a = this.head, c = 0; a !== null; c++)
      r.call(s, a.value, c, this), a = a.next;
  }, e.prototype.forEachReverse = function(r, s) {
    s = s || this;
    for (var a = this.tail, c = this.length - 1; a !== null; c--)
      r.call(s, a.value, c, this), a = a.prev;
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
    for (var a = new e(), c = this.head; c !== null; )
      a.push(r.call(s, c.value, this)), c = c.next;
    return a;
  }, e.prototype.mapReverse = function(r, s) {
    s = s || this;
    for (var a = new e(), c = this.tail; c !== null; )
      a.push(r.call(s, c.value, this)), c = c.prev;
    return a;
  }, e.prototype.reduce = function(r, s) {
    var a, c = this.head;
    if (arguments.length > 1)
      a = s;
    else if (this.head)
      c = this.head.next, a = this.head.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var u = 0; c !== null; u++)
      a = r(a, c.value, u), c = c.next;
    return a;
  }, e.prototype.reduceReverse = function(r, s) {
    var a, c = this.tail;
    if (arguments.length > 1)
      a = s;
    else if (this.tail)
      c = this.tail.prev, a = this.tail.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var u = this.length - 1; c !== null; u--)
      a = r(a, c.value, u), c = c.prev;
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
    for (var c = 0, u = this.head; u !== null && c < r; c++)
      u = u.next;
    for (; u !== null && c < s; c++, u = u.next)
      a.push(u.value);
    return a;
  }, e.prototype.sliceReverse = function(r, s) {
    s = s || this.length, s < 0 && (s += this.length), r = r || 0, r < 0 && (r += this.length);
    var a = new e();
    if (s < r || s < 0)
      return a;
    r < 0 && (r = 0), s > this.length && (s = this.length);
    for (var c = this.length, u = this.tail; u !== null && c > s; c--)
      u = u.prev;
    for (; u !== null && c > r; c--, u = u.prev)
      a.push(u.value);
    return a;
  }, e.prototype.splice = function(r, s, ...a) {
    r > this.length && (r = this.length - 1), r < 0 && (r = this.length + r);
    for (var c = 0, u = this.head; u !== null && c < r; c++)
      u = u.next;
    for (var f = [], c = 0; u && c < s; c++)
      f.push(u.value), u = this.removeNode(u);
    u === null && (u = this.tail), u !== this.head && u !== this.tail && (u = u.prev);
    for (var c = 0; c < a.length; c++)
      u = t(this, u, a[c]);
    return f;
  }, e.prototype.reverse = function() {
    for (var r = this.head, s = this.tail, a = r; a !== null; a = a.prev) {
      var c = a.prev;
      a.prev = a.next, a.next = c;
    }
    return this.head = s, this.tail = r, this;
  };
  function t(r, s, a) {
    var c = s === r.head ? new o(a, null, s, r) : new o(a, s, s.next, r);
    return c.next === null && (r.tail = c), c.prev === null && (r.head = c), r.length++, c;
  }
  function n(r, s) {
    r.tail = new o(s, r.tail, null, r), r.head || (r.head = r.tail), r.length++;
  }
  function i(r, s) {
    r.head = new o(s, null, r.head, r), r.tail || (r.tail = r.head), r.length++;
  }
  function o(r, s, a, c) {
    if (!(this instanceof o))
      return new o(r, s, a, c);
    this.list = c, this.value = r, s ? (s.next = this, this.prev = s) : this.prev = null, a ? (a.prev = this, this.next = a) : this.next = null;
  }
  try {
    Lh()(e);
  } catch {
  }
  return ls;
}
var us, Jc;
function ll() {
  if (Jc) return us;
  Jc = 1;
  const e = Nh(), t = Symbol("max"), n = Symbol("length"), i = Symbol("lengthCalculator"), o = Symbol("allowStale"), r = Symbol("maxAge"), s = Symbol("dispose"), a = Symbol("noDisposeOnSet"), c = Symbol("lruList"), u = Symbol("cache"), f = Symbol("updateAgeOnGet"), g = () => 1;
  class p {
    constructor(d) {
      if (typeof d == "number" && (d = { max: d }), d || (d = {}), d.max && (typeof d.max != "number" || d.max < 0))
        throw new TypeError("max must be a non-negative number");
      this[t] = d.max || 1 / 0;
      const l = d.length || g;
      if (this[i] = typeof l != "function" ? g : l, this[o] = d.stale || !1, d.maxAge && typeof d.maxAge != "number")
        throw new TypeError("maxAge must be a number");
      this[r] = d.maxAge || 0, this[s] = d.dispose, this[a] = d.noDisposeOnSet || !1, this[f] = d.updateAgeOnGet || !1, this.reset();
    }
    // resize the cache when the max changes.
    set max(d) {
      if (typeof d != "number" || d < 0)
        throw new TypeError("max must be a non-negative number");
      this[t] = d || 1 / 0, w(this);
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
      this[r] = d, w(this);
    }
    get maxAge() {
      return this[r];
    }
    // resize the cache when the lengthCalculator changes.
    set lengthCalculator(d) {
      typeof d != "function" && (d = g), d !== this[i] && (this[i] = d, this[n] = 0, this[c].forEach((l) => {
        l.length = this[i](l.value, l.key), this[n] += l.length;
      })), w(this);
    }
    get lengthCalculator() {
      return this[i];
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
      return this[c].map((d) => x(this, d) ? !1 : {
        k: d.key,
        v: d.value,
        e: d.now + (d.maxAge || 0)
      }).toArray().filter((d) => d);
    }
    dumpLru() {
      return this[c];
    }
    set(d, l, m) {
      if (m = m || this[r], m && typeof m != "number")
        throw new TypeError("maxAge must be a number");
      const I = m ? Date.now() : 0, A = this[i](l, d);
      if (this[u].has(d)) {
        if (A > this[t])
          return b(this, this[u].get(d)), !1;
        const E = this[u].get(d).value;
        return this[s] && (this[a] || this[s](d, E.value)), E.now = I, E.maxAge = m, E.value = l, this[n] += A - E.length, E.length = A, this.get(d), w(this), !0;
      }
      const R = new S(d, l, A, I, m);
      return R.length > this[t] ? (this[s] && this[s](d, l), !1) : (this[n] += R.length, this[c].unshift(R), this[u].set(d, this[c].head), w(this), !0);
    }
    has(d) {
      if (!this[u].has(d)) return !1;
      const l = this[u].get(d).value;
      return !x(this, l);
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
      if (x(y, I)) {
        if (b(y, m), !y[o])
          return;
      } else
        l && (y[f] && (m.value.now = Date.now()), y[c].unshiftNode(m));
      return I.value;
    }
  }, x = (y, d) => {
    if (!d || !d.maxAge && !y[r])
      return !1;
    const l = Date.now() - d.now;
    return d.maxAge ? l > d.maxAge : y[r] && l > y[r];
  }, w = (y) => {
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
    x(y, I) && (b(y, l), y[o] || (I = void 0)), I && d.call(m, I.value, I.key, y);
  };
  return us = p, us;
}
var ps, Kc;
function Dh() {
  if (Kc) return ps;
  Kc = 1;
  const e = ll(), t = 10;
  return ps = class {
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
    setProcessed(i, o) {
      this.cache.set(i, o);
    }
  }, ps;
}
var fs, Qc;
function zh() {
  if (Qc) return fs;
  Qc = 1;
  const {
    isArray: e,
    isObject: t,
    isString: n
  } = Ne(), {
    asArray: i
  } = Ze(), { prependBase: o } = Mt(), r = He(), s = Dh(), a = 10;
  fs = class {
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
      documentLoader: h,
      base: x,
      cycles: w = /* @__PURE__ */ new Set()
    }) {
      p && t(p) && p["@context"] && (p = p["@context"]), p = i(p);
      const b = [];
      for (const S of p) {
        if (n(S)) {
          let d = this._get(S);
          d || (d = await this._resolveRemoteContext(
            { activeCtx: g, url: S, documentLoader: h, base: x, cycles: w }
          )), e(d) ? b.push(...d) : b.push(d);
          continue;
        }
        if (S === null) {
          b.push(new s({ document: null }));
          continue;
        }
        t(S) || c(p);
        const v = JSON.stringify(S);
        let y = this._get(v);
        y || (y = new s({ document: S }), this._cacheResolvedContext({ key: v, resolved: y, tag: "static" })), b.push(y);
      }
      return b;
    }
    _get(g) {
      let p = this.perOpCache.get(g);
      if (!p) {
        const h = this.sharedCache.get(g);
        h && (p = h.get("static"), p && this.perOpCache.set(g, p));
      }
      return p;
    }
    _cacheResolvedContext({ key: g, resolved: p, tag: h }) {
      if (this.perOpCache.set(g, p), h !== void 0) {
        let x = this.sharedCache.get(g);
        x || (x = /* @__PURE__ */ new Map(), this.sharedCache.set(g, x)), x.set(h, p);
      }
      return p;
    }
    async _resolveRemoteContext({ activeCtx: g, url: p, documentLoader: h, base: x, cycles: w }) {
      p = o(x, p);
      const { context: b, remoteDoc: S } = await this._fetchContext(
        { activeCtx: g, url: p, documentLoader: h, cycles: w }
      );
      x = S.documentUrl || p, u({ context: b, base: x });
      const v = await this.resolve(
        { activeCtx: g, context: b, documentLoader: h, base: x, cycles: w }
      );
      return this._cacheResolvedContext({ key: p, resolved: v, tag: S.tag }), v;
    }
    async _fetchContext({ activeCtx: g, url: p, documentLoader: h, cycles: x }) {
      if (x.size > a)
        throw new r(
          "Maximum number of @context URLs exceeded.",
          "jsonld.ContextUrlError",
          {
            code: g.processingMode === "json-ld-1.0" ? "loading remote context failed" : "context overflow",
            max: a
          }
        );
      if (x.has(p))
        throw new r(
          "Cyclical @context URLs detected.",
          "jsonld.ContextUrlError",
          {
            code: g.processingMode === "json-ld-1.0" ? "recursive context inclusion" : "context overflow",
            url: p
          }
        );
      x.add(p);
      let w, b;
      try {
        b = await h(p), w = b.document || null, n(w) && (w = JSON.parse(w));
      } catch (S) {
        throw new r(
          `Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context. URL: "${p}".`,
          "jsonld.InvalidUrl",
          { code: "loading remote context failed", url: p, cause: S }
        );
      }
      if (!t(w))
        throw new r(
          `Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object. URL: "${p}".`,
          "jsonld.InvalidUrl",
          { code: "invalid remote context", url: p }
        );
      return "@context" in w ? w = { "@context": w["@context"] } : w = { "@context": {} }, b.contextUrl && (e(w["@context"]) || (w["@context"] = [w["@context"]]), w["@context"].push(b.contextUrl)), { context: w, remoteDoc: b };
    }
  };
  function c(f) {
    throw new r(
      "Invalid JSON-LD syntax; @context must be an object.",
      "jsonld.SyntaxError",
      {
        code: "invalid local context",
        context: f
      }
    );
  }
  function u({ context: f, base: g }) {
    if (!f)
      return;
    const p = f["@context"];
    if (n(p)) {
      f["@context"] = o(g, p);
      return;
    }
    if (e(p)) {
      for (let h = 0; h < p.length; ++h) {
        const x = p[h];
        if (n(x)) {
          p[h] = o(g, x);
          continue;
        }
        t(x) && u({ context: { "@context": x }, base: g });
      }
      return;
    }
    if (t(p))
      for (const h in p)
        u({ context: p[h], base: g });
  }
  return fs;
}
var hs, Wc;
function Uh() {
  return Wc || (Wc = 1, hs = ya().NQuads), hs;
}
var ms, Xc;
function Mn() {
  if (Xc) return ms;
  Xc = 1;
  const e = He(), {
    isArray: t
  } = Ne(), {
    asArray: n
  } = Ze(), i = {};
  ms = i, i.defaultEventHandler = null, i.setupEventHandler = ({ options: s = {} }) => {
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
    o({ event: s, handlers: a.eventHandler });
  };
  function o({ event: s, handlers: a }) {
    let c = !0;
    for (let u = 0; c && u < a.length; ++u) {
      c = !1;
      const f = a[u];
      if (t(f))
        c = o({ event: s, handlers: f });
      else if (typeof f == "function")
        f({ event: s, next: () => {
          c = !0;
        } });
      else if (typeof f == "object")
        s.code in f ? f[s.code]({ event: s, next: () => {
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
  return i.safeEventHandler = function({ event: a, next: c }) {
    if (a.level === "warning" && r.has(a.code))
      throw new e(
        "Safe mode validation error.",
        "jsonld.ValidationError",
        { event: a }
      );
    c();
  }, i.logEventHandler = function({ event: a, next: c }) {
    console.log(`EVENT: ${a.message}`, { event: a }), c();
  }, i.logWarningEventHandler = function({ event: a, next: c }) {
    a.level === "warning" && console.warn(`WARNING: ${a.message}`, { event: a }), c();
  }, i.unhandledEventHandler = function({ event: a }) {
    throw new e(
      "No handler for event.",
      "jsonld.UnhandledEvent",
      { event: a }
    );
  }, i.setDefaultEventHandler = function({ eventHandler: s } = {}) {
    i.defaultEventHandler = s ? n(s) : null;
  }, ms;
}
var ys, Yc;
function Ht() {
  if (Yc) return ys;
  Yc = 1;
  const e = Ze(), t = He(), {
    isArray: n,
    isObject: i,
    isString: o,
    isUndefined: r
  } = Ne(), {
    isAbsolute: s,
    isRelative: a,
    prependBase: c
  } = Mt(), {
    handleEvent: u
  } = Mn(), {
    REGEX_BCP47: f,
    REGEX_KEYWORD: g,
    asArray: p,
    compareShortestLeast: h
  } = Ze(), x = /* @__PURE__ */ new Map(), w = 1e4, b = {};
  ys = b, b.process = async ({
    activeCtx: y,
    localCtx: d,
    options: l,
    propagate: m = !0,
    overrideProtected: I = !1,
    cycles: A = /* @__PURE__ */ new Set()
  }) => {
    if (i(d) && "@context" in d && n(d["@context"]) && (d = d["@context"]), p(d).length === 0)
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
    i(P[0].document) && typeof P[0].document["@propagate"] == "boolean" && (m = P[0].document["@propagate"]);
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
      if (i(_) && "@context" in _ && (_ = _["@context"]), !i(_))
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
          G.match(f) || l.eventHandler && u({
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
        }), i(_[G]) && "@context" in _[G]) {
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
    if (d.hasOwnProperty(l) && (R = d[l]), l === "@type" && i(R) && (R["@container"] || "@set") === "@set" && b.processingMode(y, 1.1)) {
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
    if ((o(R) || R === null) && (E = !0, R = { "@id": R }), !i(R))
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
      if (i(j) && "@id" in j)
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
    const d = JSON.stringify({ processingMode: y.processingMode }), l = x.get(d);
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
    return x.size === w && x.clear(), x.set(d, m), m;
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
        const N = p(M["@id"]);
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
            const z = M["@language"], H = M["@direction"];
            z && H ? R(
              k,
              q["@language"],
              `${z}_${H}`.toLowerCase()
            ) : z ? R(k, q["@language"], z.toLowerCase()) : H ? R(k, q["@language"], `_${H}`) : R(k, q["@language"], "@null");
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
      if (r(l))
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
  return ys;
}
var gs, ed;
function Vh() {
  if (ed) return gs;
  ed = 1;
  const e = He(), {
    isArray: t,
    isObject: n,
    isEmptyObject: i,
    isString: o,
    isUndefined: r
  } = Ne(), {
    isList: s,
    isValue: a,
    isGraph: c,
    isSubject: u
  } = St(), {
    expandIri: f,
    getContextValue: g,
    isKeyword: p,
    process: h,
    processingMode: x
  } = Ht(), {
    isAbsolute: w
  } = Mt(), {
    REGEX_BCP47: b,
    REGEX_KEYWORD: S,
    addValue: v,
    asArray: y,
    getValues: d,
    validateTypeValue: l
  } = Ze(), {
    handleEvent: m
  } = Mn(), I = {};
  gs = I, I.expand = async ({
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
      return !F && (C === null || f(
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
      const H = g(
        P,
        C,
        "@container"
      ) || [];
      F = F || H.includes("@list");
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
    const k = f(
      P,
      C,
      { vocab: !0 },
      _
    ), M = g(P, C, "@context");
    G = G || (P.previousContext ? P : null);
    let U = Object.keys(D).sort(), N = !L;
    if (N && G && U.length <= 2 && !U.includes("@context"))
      for (const z of U) {
        const H = f(
          G,
          z,
          { vocab: !0 },
          _
        );
        if (H === "@value") {
          N = !1, P = G;
          break;
        }
        if (H === "@id" && U.length === 1) {
          N = !1;
          break;
        }
      }
    N && (P = P.revertToPreviousContext()), r(M) || (P = await h({
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
      if (f(P, z, { vocab: !0 }, _) === "@type") {
        $ = $ || z;
        const Q = D[z], J = Array.isArray(Q) ? Q.length > 1 ? Q.slice().sort() : Q : [Q];
        for (const V of J) {
          const B = g(G, V, "@context");
          r(B) || (P = await h({
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
      const H = q["@value"] === null ? [] : y(q["@value"]), Q = d(q, "@type");
      if (!(x(P, 1.1) && Q.includes("@json") && Q.length === 1)) if (H.length === 0)
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
        if (!H.every((J) => o(J) || i(J)) && "@language" in q)
          throw new e(
            "Invalid JSON-LD syntax; only strings may be language-tagged.",
            "jsonld.SyntaxError",
            { code: "invalid language-tagged value", element: q }
          );
        if (!Q.every((J) => w(J) && !(o(J) && J.indexOf("_:") === 0) || i(J)))
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
    const q = _[k] && f(
      P,
      t(_[k]) ? _[k][0] : _[k],
      { vocab: !0 },
      {
        ...L,
        typeExpansion: !0
      }
    ) === "@json";
    for (const T of U) {
      let z = _[T], H;
      if (T === "@context")
        continue;
      const Q = f(P, T, { vocab: !0 }, L);
      if (Q === null || !(w(Q) || p(Q))) {
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
      if (p(Q)) {
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
            if (!i(z))
              throw new e(
                'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
                "jsonld.SyntaxError",
                { code: "invalid @id value", value: z }
              );
          } else if (t(z)) {
            if (!z.every((Z) => o(Z)))
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
          y(z).map((Z) => {
            if (o(Z)) {
              const K = f(P, Z, { base: !0 }, L);
              return L.eventHandler && (K === null ? m(Z === null ? {
                event: {
                  type: ["JsonLdEvent"],
                  code: "null @id value",
                  level: "warning",
                  message: "Null @id found.",
                  details: {
                    id: Z
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
                    id: Z
                  }
                },
                options: L
              }) : w(K) || m({
                event: {
                  type: ["JsonLdEvent"],
                  code: "relative @id reference",
                  level: "warning",
                  message: "Relative @id reference found.",
                  details: {
                    id: Z,
                    expandedId: K
                  }
                },
                options: L
              })), K;
            }
            return Z;
          }),
          { propertyIsArray: L.isFrame }
        );
        continue;
      }
      if (Q === "@type") {
        n(z) && (z = Object.fromEntries(Object.entries(z).map(([Z, K]) => [
          f(M, Z, { vocab: !0 }),
          y(K).map(
            (W) => f(
              M,
              W,
              { base: !0, vocab: !0 },
              { ...L, typeExpansion: !0 }
            )
          )
        ]))), l(z, L.isFrame), v(
          F,
          "@type",
          y(z).map((Z) => {
            if (o(Z)) {
              const K = f(
                M,
                Z,
                { base: !0, vocab: !0 },
                { ...L, typeExpansion: !0 }
              );
              return K !== "@json" && !w(K) && L.eventHandler && m({
                event: {
                  type: ["JsonLdEvent"],
                  code: "relative @type reference",
                  level: "warning",
                  message: "Relative @type reference found.",
                  details: {
                    type: Z
                  }
                },
                options: L
              }), K;
            }
            return Z;
          }),
          { propertyIsArray: !!L.isFrame }
        );
        continue;
      }
      if (Q === "@included" && x(P, 1.1)) {
        const Z = y(await I.expand({
          activeCtx: P,
          activeProperty: C,
          element: z,
          options: L
        }));
        if (!Z.every((K) => u(K)))
          throw new e(
            "Invalid JSON-LD syntax; values of @included must expand to node objects.",
            "jsonld.SyntaxError",
            { code: "invalid @included value", value: z }
          );
        v(
          F,
          "@included",
          Z,
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
        $ = z, q && x(P, 1.1) ? F["@value"] = z : v(
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
        z = y(z).map((Z) => o(Z) ? Z.toLowerCase() : Z);
        for (const Z of z)
          o(Z) && !Z.match(b) && L.eventHandler && m({
            event: {
              type: ["JsonLdEvent"],
              code: "invalid @language value",
              level: "warning",
              message: "@language value must be valid BCP47.",
              details: {
                language: Z
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
        for (const Z of z)
          if (o(Z) && Z !== "ltr" && Z !== "rtl")
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
        if (H = await I.expand({
          activeCtx: P,
          activeProperty: "@reverse",
          element: z,
          options: L
        }), "@reverse" in H)
          for (const K in H["@reverse"])
            v(
              F,
              K,
              H["@reverse"][K],
              { propertyIsArray: !0 }
            );
        let Z = F["@reverse"] || null;
        for (const K in H) {
          if (K === "@reverse")
            continue;
          Z === null && (Z = F["@reverse"] = {}), v(Z, K, [], { propertyIsArray: !0 });
          const W = H[K];
          for (let ee = 0; ee < W.length; ++ee) {
            const re = W[ee];
            if (a(re) || s(re))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: H }
              );
            v(Z, K, re, { propertyIsArray: !0 });
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
      r(V) || (J = await h({
        activeCtx: P,
        localCtx: V,
        propagate: !0,
        overrideProtected: !0,
        options: L
      }));
      const B = g(P, T, "@container") || [];
      if (B.includes("@language") && n(z)) {
        const Z = g(J, T, "@direction");
        H = E(J, z, Z, L);
      } else if (B.includes("@index") && n(z)) {
        const Z = B.includes("@graph"), K = g(J, T, "@index") || "@index", W = K !== "@index" && f(P, K, { vocab: !0 }, L);
        H = await O({
          activeCtx: J,
          options: L,
          activeProperty: T,
          value: z,
          asGraph: Z,
          indexKey: K,
          propertyIndex: W
        });
      } else if (B.includes("@id") && n(z)) {
        const Z = B.includes("@graph");
        H = await O({
          activeCtx: J,
          options: L,
          activeProperty: T,
          value: z,
          asGraph: Z,
          indexKey: "@id"
        });
      } else if (B.includes("@type") && n(z))
        H = await O({
          // since container is `@type`, revert type scoped context when expanding
          activeCtx: J.revertToPreviousContext(),
          options: L,
          activeProperty: T,
          value: z,
          asGraph: !1,
          indexKey: "@type"
        });
      else {
        const Z = Q === "@list";
        if (Z || Q === "@set") {
          let K = C;
          Z && D === "@graph" && (K = null), H = await I.expand({
            activeCtx: J,
            activeProperty: K,
            element: z,
            options: L,
            insideList: Z
          });
        } else g(P, T, "@type") === "@json" ? H = {
          "@type": "@json",
          "@value": z
        } : H = await I.expand({
          activeCtx: J,
          activeProperty: T,
          element: z,
          options: L,
          insideList: !1
        });
      }
      if (!(H === null && Q !== "@value")) {
        if (Q !== "@list" && !s(H) && B.includes("@list") && (H = { "@list": y(H) }), B.includes("@graph") && !B.some((Z) => Z === "@id" || Z === "@index")) {
          if (H = y(H), L.isFrame || (H = H.filter((Z) => {
            const K = Object.keys(Z).length;
            return A({ value: Z, count: K, options: L }) !== null;
          })), H.length === 0)
            continue;
          H = H.map((Z) => ({ "@graph": y(Z) }));
        }
        if (J.mappings.has(T) && J.mappings.get(T).reverse) {
          const Z = F["@reverse"] = F["@reverse"] || {};
          H = y(H);
          for (let K = 0; K < H.length; ++K) {
            const W = H[K];
            if (a(W) || s(W))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: H }
              );
            v(Z, Q, W, { propertyIsArray: !0 });
          }
          continue;
        }
        v(F, Q, H, {
          propertyIsArray: !0
        });
      }
    }
    if ("@value" in F && !(F["@type"] === "@json" && x(P, 1.1))) {
      if ((n($) || t($)) && !L.isFrame)
        throw new e(
          'Invalid JSON-LD syntax; "@value" value must not be an object or an array.',
          "jsonld.SyntaxError",
          { code: "invalid value object value", value: $ }
        );
    }
    for (const T of N) {
      const z = t(_[T]) ? _[T] : [_[T]];
      for (const H of z) {
        if (!n(H) || Object.keys(H).some((Q) => f(P, Q, { vocab: !0 }, L) === "@value"))
          throw new e(
            "Invalid JSON-LD syntax; nested value must be a node object.",
            "jsonld.SyntaxError",
            { code: "invalid @nest value", value: H }
          );
        await R({
          activeCtx: P,
          activeProperty: C,
          expandedActiveProperty: D,
          element: H,
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
    const F = f(
      P,
      C,
      { vocab: !0 },
      _
    );
    if (F === "@id")
      return f(P, D, { base: !0 }, _);
    if (F === "@type")
      return f(
        P,
        D,
        { vocab: !0, base: !0 },
        { ..._, typeExpansion: !0 }
      );
    const L = g(P, C, "@type");
    if ((L === "@id" || F === "@graph") && o(D)) {
      const k = f(P, D, { base: !0 }, _);
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
        "@id": f(P, D, { vocab: !0, base: !0 }, _)
      };
    if (p(F))
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
      const k = f(P, G, { vocab: !0 }, _);
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
        r(T) || (P = await h({
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
      ) : q = f(P, N, { vocab: !0 }, C), L === "@id" ? N = f(P, N, { base: !0 }, C) : U && (N = q);
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
  return gs;
}
var vs, td;
function pr() {
  if (td) return vs;
  td = 1;
  const { isKeyword: e } = Ht(), t = St(), n = Ne(), i = Ze(), o = He(), r = {};
  return vs = r, r.createMergedNodeMap = (s, a) => {
    a = a || {};
    const c = a.issuer || new i.IdentifierIssuer("_:b"), u = { "@default": {} };
    return r.createNodeMap(s, u, "@default", c), r.mergeNodeMaps(u);
  }, r.createNodeMap = (s, a, c, u, f, g) => {
    if (n.isArray(s)) {
      for (const w of s)
        r.createNodeMap(w, a, c, u, void 0, g);
      return;
    }
    if (!n.isObject(s)) {
      g && g.push(s);
      return;
    }
    if (t.isValue(s)) {
      if ("@type" in s) {
        let w = s["@type"];
        w.indexOf("_:") === 0 && (s["@type"] = w = u.getId(w));
      }
      g && g.push(s);
      return;
    } else if (g && t.isList(s)) {
      const w = [];
      r.createNodeMap(s["@list"], a, c, u, f, w), g.push({ "@list": w });
      return;
    }
    if ("@type" in s) {
      const w = s["@type"];
      for (const b of w)
        b.indexOf("_:") === 0 && u.getId(b);
    }
    n.isUndefined(f) && (f = t.isBlankNode(s) ? u.getId(s["@id"]) : s["@id"]), g && g.push({ "@id": f });
    const p = a[c], h = p[f] = p[f] || {};
    h["@id"] = f;
    const x = Object.keys(s).sort();
    for (let w of x) {
      if (w === "@id")
        continue;
      if (w === "@reverse") {
        const S = { "@id": f }, v = s["@reverse"];
        for (const y in v) {
          const d = v[y];
          for (const l of d) {
            let m = l["@id"];
            t.isBlankNode(l) && (m = u.getId(m)), r.createNodeMap(l, a, c, u, m), i.addValue(
              p[m],
              y,
              S,
              { propertyIsArray: !0, allowDuplicate: !1 }
            );
          }
        }
        continue;
      }
      if (w === "@graph") {
        f in a || (a[f] = {}), r.createNodeMap(s[w], a, f, u);
        continue;
      }
      if (w === "@included") {
        r.createNodeMap(s[w], a, c, u);
        continue;
      }
      if (w !== "@type" && e(w)) {
        if (w === "@index" && w in h && (s[w] !== h[w] || s[w]["@id"] !== h[w]["@id"]))
          throw new o(
            "Invalid JSON-LD syntax; conflicting @index property detected.",
            "jsonld.SyntaxError",
            { code: "conflicting indexes", subject: h }
          );
        h[w] = s[w];
        continue;
      }
      const b = s[w];
      if (w.indexOf("_:") === 0 && (w = u.getId(w)), b.length === 0) {
        i.addValue(h, w, [], { propertyIsArray: !0 });
        continue;
      }
      for (let S of b)
        if (w === "@type" && (S = S.indexOf("_:") === 0 ? u.getId(S) : S), t.isSubject(S) || t.isSubjectReference(S)) {
          if ("@id" in S && !S["@id"])
            continue;
          const v = t.isBlankNode(S) ? u.getId(S["@id"]) : S["@id"];
          i.addValue(
            h,
            w,
            { "@id": v },
            { propertyIsArray: !0, allowDuplicate: !1 }
          ), r.createNodeMap(S, a, c, u, v);
        } else if (t.isValue(S))
          i.addValue(
            h,
            w,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        else if (t.isList(S)) {
          const v = [];
          r.createNodeMap(S["@list"], a, c, u, f, v), S = { "@list": v }, i.addValue(
            h,
            w,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        } else
          r.createNodeMap(S, a, c, u, f), i.addValue(
            h,
            w,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
    }
  }, r.mergeNodeMapGraphs = (s) => {
    const a = {};
    for (const c of Object.keys(s).sort())
      for (const u of Object.keys(s[c]).sort()) {
        const f = s[c][u];
        u in a || (a[u] = { "@id": u });
        const g = a[u];
        for (const p of Object.keys(f).sort())
          if (e(p) && p !== "@type")
            g[p] = i.clone(f[p]);
          else
            for (const h of f[p])
              i.addValue(
                g,
                p,
                i.clone(h),
                { propertyIsArray: !0, allowDuplicate: !1 }
              );
      }
    return a;
  }, r.mergeNodeMaps = (s) => {
    const a = s["@default"], c = Object.keys(s).sort();
    for (const u of c) {
      if (u === "@default")
        continue;
      const f = s[u];
      let g = a[u];
      g ? "@graph" in g || (g["@graph"] = []) : a[u] = g = {
        "@id": u,
        "@graph": []
      };
      const p = g["@graph"];
      for (const h of Object.keys(f).sort()) {
        const x = f[h];
        t.isSubjectReference(x) || p.push(x);
      }
    }
    return a;
  }, vs;
}
var bs, nd;
function Gh() {
  if (nd) return bs;
  nd = 1;
  const {
    isSubjectReference: e
  } = St(), {
    createMergedNodeMap: t
  } = pr(), n = {};
  return bs = n, n.flatten = (i) => {
    const o = t(i), r = [], s = Object.keys(o).sort();
    for (let a = 0; a < s.length; ++a) {
      const c = o[s[a]];
      e(c) || r.push(c);
    }
    return r;
  }, bs;
}
var ws, id;
function Fh() {
  if (id) return ws;
  id = 1;
  const e = He(), t = St(), n = Ne(), {
    REGEX_BCP47: i,
    addValue: o
  } = Ze(), {
    handleEvent: r
  } = Mn(), {
    // RDF,
    RDF_LIST: s,
    RDF_FIRST: a,
    RDF_REST: c,
    RDF_NIL: u,
    RDF_TYPE: f,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: g,
    // RDF_OBJECT,
    // RDF_LANGSTRING,
    // XSD,
    XSD_BOOLEAN: p,
    XSD_DOUBLE: h,
    XSD_INTEGER: x,
    XSD_STRING: w
  } = ga(), b = {};
  ws = b, b.fromRDF = async (v, y) => {
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
      if (G && !(F.value in C) && (C[F.value] = { "@id": F.value }), _ === f && !d && G) {
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
      }), m["@language"] = v.language;
    else {
      let I = v.datatype.value;
      if (I || (I = w), I === g) {
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
        if (I === p)
          m["@value"] === "true" ? m["@value"] = !0 : m["@value"] === "false" && (m["@value"] = !1);
        else if (n.isNumeric(m["@value"]))
          if (I === x) {
            const A = parseInt(m["@value"], 10);
            A.toFixed(0) === m["@value"] && (m["@value"] = A);
          } else I === h && (m["@value"] = parseFloat(m["@value"]));
        [p, x, h, w].includes(I) || (m["@type"] = I);
      } else if (d === "i18n-datatype" && I.startsWith("https://www.w3.org/ns/i18n#")) {
        const [, A, R] = I.split(/[#_]/);
        A.length > 0 && (m["@language"] = A, A.match(i) || l.eventHandler && r({
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
      } else I !== w && (m["@type"] = I);
    }
    return m;
  }
  return ws;
}
var xs, rd;
function Bh() {
  return rd || (rd = 1, xs = function e(t) {
    return t === null || typeof t != "object" || t.toJSON != null ? JSON.stringify(t) : Array.isArray(t) ? "[" + t.reduce((n, i, o) => {
      const r = o === 0 ? "" : ",", s = i === void 0 || typeof i == "symbol" ? null : i;
      return n + r + e(s);
    }, "") + "]" : "{" + Object.keys(t).sort().reduce((n, i, o) => {
      if (t[i] === void 0 || typeof t[i] == "symbol")
        return n;
      const r = n.length === 0 ? "" : ",";
      return n + r + e(i) + ":" + e(t[i]);
    }, "") + "}";
  }), xs;
}
var Ss, sd;
function Zh() {
  if (sd) return Ss;
  sd = 1;
  const { createNodeMap: e } = pr(), { isKeyword: t } = Ht(), n = St(), i = Bh(), o = He(), r = Ne(), s = Ze(), {
    handleEvent: a
  } = Mn(), {
    // RDF,
    // RDF_LIST,
    RDF_FIRST: c,
    RDF_REST: u,
    RDF_NIL: f,
    RDF_TYPE: g,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: p,
    // RDF_OBJECT,
    RDF_LANGSTRING: h,
    // XSD,
    XSD_BOOLEAN: x,
    XSD_DOUBLE: w,
    XSD_INTEGER: b,
    XSD_STRING: S
  } = ga(), {
    isAbsolute: v
  } = Mt(), y = {};
  Ss = y, y.toRDF = (I, A) => {
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
    const P = { termType: "NamedNode", value: c }, C = { termType: "NamedNode", value: u }, D = { termType: "NamedNode", value: f }, _ = I.pop(), F = _ ? { termType: "BlankNode", value: A.getId() } : D;
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
        P.value = i(C), P.datatype.value = p;
      else if (r.isBoolean(C))
        P.value = C.toString(), P.datatype.value = D || x;
      else if (r.isDouble(C) || D === w)
        r.isDouble(C) || (C = parseFloat(C)), P.value = C.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), P.datatype.value = D || w;
      else if (r.isNumber(C))
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
      const C = r.isObject(I) ? I["@id"] : I;
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
  return Ss;
}
var Is, ad;
function Hh() {
  if (ad) return Is;
  ad = 1;
  const { isKeyword: e } = Ht(), t = St(), n = Ne(), i = Ze(), o = Mt(), r = He(), {
    createNodeMap: s,
    mergeNodeMapGraphs: a
  } = pr(), c = {};
  Is = c, c.frameMergedOrDefault = (d, l, m) => {
    const I = {
      options: m,
      embedded: !1,
      graph: "@default",
      graphMap: { "@default": {} },
      subjectStack: [],
      link: {},
      bnodeMap: {}
    }, A = new i.IdentifierIssuer("_:b");
    s(d, I.graphMap, "@default", A), m.merged && (I.graphMap["@merged"] = a(I.graphMap), I.graph = "@merged"), I.subjects = I.graphMap[I.graph];
    const R = [];
    c.frame(I, Object.keys(I.subjects).sort(), l, R), m.pruneBlankNodeIdentifiers && (m.bnodesToClear = Object.keys(I.bnodeMap).filter((j) => I.bnodeMap[j].length === 1));
    // remove @preserve from results
    return m.link = {}, b(R, m);
  }, c.frame = (d, l, m, I, A = null) => {
    p(m), m = m[0];
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
      if (C.indexOf("_:") === 0 && i.addValue(d.bnodeMap, C, _, { propertyIsArray: !0 }), E[C] = _, (j.embed === "@first" || j.embed === "@last") && d.is11)
        throw new r(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: m }
        );
      if (!(!d.embedded && d.uniqueEmbeds[d.graph].hasOwnProperty(C))) {
        if (d.embedded && (j.embed === "@never" || f(D, d.graph, d.subjectStack))) {
          S(I, A, _);
          continue;
        }
        if (d.embedded && (j.embed == "@first" || j.embed == "@once") && d.uniqueEmbeds[d.graph].hasOwnProperty(C)) {
          S(I, A, _);
          continue;
        }
        if (j.embed === "@last" && C in d.uniqueEmbeds[d.graph] && w(d, C), d.uniqueEmbeds[d.graph][C] = { parent: I, property: A }, d.subjectStack.push({ subject: D, graph: d.graph }), C in d.graphMap) {
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
            if (_[F] = i.clone(D[F]), F === "@type")
              for (const L of D["@type"])
                L.indexOf("_:") === 0 && i.addValue(
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
                  ) : S(M, "@list", i.clone(N));
              } else t.isSubjectReference(L) ? c.frame(
                { ...d, embedded: !0 },
                [L["@id"]],
                G,
                _,
                F
              ) : y(G[0], L) && S(_, F, i.clone(L));
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
            "@default" in L && (k = i.clone(L["@default"])), n.isArray(k) || (k = [k]), _[F] = [{ "@preserve": k }];
          }
        }
        for (const F of Object.keys(m["@reverse"] || {}).sort()) {
          const L = m["@reverse"][F];
          for (const G of Object.keys(d.subjects))
            i.getValues(d.subjects[G], F).some((M) => M["@id"] === C) && (_["@reverse"] = _["@reverse"] || {}, i.addValue(
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
  function f(d, l, m) {
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
        if (!(n.isObject(l) || o.isAbsolute(l)) || n.isString(l) && l.indexOf("_:") === 0)
          throw new r(
            "Invalid JSON-LD syntax; invalid @id in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: d }
          );
    }
    if ("@type" in d[0]) {
      for (const l of i.asArray(d[0]["@type"]))
        if (!(n.isObject(l) || o.isAbsolute(l) || l === "@json") || n.isString(l) && l.indexOf("_:") === 0)
          throw new r(
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
      x(d, j, m, I) && (A[R] = j);
    }
    return A;
  }
  function x(d, l, m, I) {
    let A = !0, R = !1;
    for (const j in m) {
      let E = !1;
      const O = i.getValues(l, j), P = i.getValues(m, j).length === 0;
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
          const C = i.getValues(m, j)[0];
          let D = !1;
          if (C && (p([C]), D = "@default" in C), A = !1, O.length === 0 && D)
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
  function w(d, l) {
    const m = d.uniqueEmbeds[d.graph], I = m[l], A = I.parent, R = I.property, j = { "@id": l };
    if (n.isArray(A)) {
      for (let O = 0; O < A.length; ++O)
        if (i.compareValues(A[O], j)) {
          A[O] = j;
          break;
        }
    } else {
      const O = n.isArray(A[R]);
      i.removeValue(A, R, j, { propertyIsArray: O }), i.addValue(A, R, j, { propertyIsArray: O });
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
    n.isObject(d) ? i.addValue(d, l, m, { propertyIsArray: !0 }) : d.push(m);
  }
  function v(d, l, m, I) {
    if (!("@id" in m))
      return !1;
    const A = d.subjects[m["@id"]];
    return A && x(d, A, l, I);
  }
  function y(d, l) {
    const m = l["@value"], I = l["@type"], A = l["@language"], R = d["@value"] ? n.isArray(d["@value"]) ? d["@value"] : [d["@value"]] : [], j = d["@type"] ? n.isArray(d["@type"]) ? d["@type"] : [d["@type"]] : [], E = d["@language"] ? n.isArray(d["@language"]) ? d["@language"] : [d["@language"]] : [];
    return R.length === 0 && j.length === 0 && E.length === 0 ? !0 : !(!(R.includes(m) || n.isEmptyObject(R[0])) || !(!I && j.length === 0 || j.includes(I) || I && n.isEmptyObject(j[0])) || !(!A && E.length === 0 || E.includes(A) || A && n.isEmptyObject(E[0])));
  }
  return Is;
}
var As, od;
function Jh() {
  if (od) return As;
  od = 1;
  const e = He(), {
    isArray: t,
    isObject: n,
    isString: i,
    isUndefined: o
  } = Ne(), {
    isList: r,
    isValue: s,
    isGraph: a,
    isSimpleGraph: c,
    isSubjectReference: u
  } = St(), {
    expandIri: f,
    getContextValue: g,
    isKeyword: p,
    process: h,
    processingMode: x
  } = Ht(), {
    removeBase: w,
    prependBase: b
  } = Mt(), {
    REGEX_KEYWORD: S,
    addValue: v,
    asArray: y,
    compareShortestLeast: d
  } = Ze(), l = {};
  As = l, l.compact = async ({
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
      if (r(j) && (g(
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
          ) || []).includes("@set") && x(A, 1.1) || t(U) && M.length === 0;
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
        if (k !== "@graph" && k !== "@list" && k !== "@included" && p(k)) {
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
          ) || [], z = a(U), H = r(U);
          let Q;
          H ? Q = U["@list"] : z && (Q = U["@graph"]);
          let J = await l.compact({
            activeCtx: A,
            activeProperty: N,
            element: H || z ? Q : U,
            options: E
          });
          if (H)
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
              const Z = g(
                A,
                N,
                "@index"
              ) || "@index", K = l.compactIri(
                { activeCtx: A, iri: Z, relativeTo: { vocab: !0 } }
              );
              if (Z === "@index")
                B = U["@index"], delete J[K];
              else {
                let W;
                if ([B, ...W] = y(J[Z] || []), !i(B))
                  B = null;
                else
                  switch (W.length) {
                    case 0:
                      delete J[Z];
                      break;
                    case 1:
                      J[Z] = W[0];
                      break;
                    default:
                      J[Z] = W;
                      break;
                  }
              }
            } else if (T.includes("@id")) {
              const Z = l.compactIri({
                activeCtx: A,
                iri: "@id",
                relativeTo: { vocab: !0 }
              });
              B = J[Z], delete J[Z];
            } else if (T.includes("@type")) {
              const Z = l.compactIri({
                activeCtx: A,
                iri: "@type",
                relativeTo: { vocab: !0 }
              });
              let K;
              switch ([B, ...K] = y(J[Z] || []), K.length) {
                case 0:
                  delete J[Z];
                  break;
                case 1:
                  J[Z] = K[0];
                  break;
                default:
                  J[Z] = K;
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
    if (p(R) && R in C && "@none" in C[R] && "@type" in C[R]["@none"] && "@none" in C[R]["@none"]["@type"])
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
      else if (r(j)) {
        "@index" in j || k.push("@list");
        const $ = j["@list"];
        if ($.length === 0)
          M = "@any", U = "@none";
        else {
          let q = $.length === 0 ? G : null, T = null;
          for (let z = 0; z < $.length; ++z) {
            const H = $[z];
            let Q = "@none", J = "@none";
            if (s(H))
              if ("@direction" in H) {
                const V = (H["@language"] || "").toLowerCase(), B = H["@direction"];
                Q = `${V}_${B}`;
              } else "@language" in H ? Q = H["@language"].toLowerCase() : "@type" in H ? J = H["@type"] : Q = "@null";
            else
              J = "@id";
            if (q === null ? q = Q : Q !== q && s(H) && (q = "@none"), T === null ? T = J : J !== T && (T = "@none"), q === "@none" && T === "@none")
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
          const G = w(b(P, A["@base"]), R);
          return S.test(G) ? `./${G}` : G;
        } else
          return R;
      else
        return w(P, R);
    return R;
  }, l.compactValue = ({ activeCtx: A, activeProperty: R, value: j, options: E }) => {
    if (s(j)) {
      const D = g(A, R, "@type"), _ = g(A, R, "@language"), F = g(A, R, "@direction"), L = g(A, R, "@container") || [], G = "@index" in j && !L.includes("@index");
      if (!G && D !== "@none" && (j["@type"] === D || "@language" in j && j["@language"] === _ && "@direction" in j && j["@direction"] === F || "@language" in j && j["@language"] === _ || "@direction" in j && j["@direction"] === F))
        return j["@value"];
      const k = Object.keys(j).length, M = k === 1 || k === 2 && "@index" in j && !G, U = "@language" in A, N = i(j["@value"]), $ = A.mappings.has(R) && A.mappings.get(R)["@language"] === null;
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
    const O = f(
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
    if (f(A, R, { vocab: !0 }, j) !== "@nest")
      throw new e(
        "JSON-LD compact error; nested property must have an @nest value resolving to @nest.",
        "jsonld.SyntaxError",
        { code: "invalid @nest value" }
      );
  }
  return As;
}
var qs, cd;
function Kh() {
  return cd || (cd = 1, qs = (e) => {
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
  }), qs;
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
var Rs, dd;
function Qh() {
  if (dd) return Rs;
  dd = 1;
  const e = ya(), t = Oh(), n = Ze(), i = zh(), o = n.IdentifierIssuer, r = He(), s = ll(), a = Uh(), { expand: c } = Vh(), { flatten: u } = Gh(), { fromRDF: f } = Fh(), { toRDF: g } = Zh(), {
    frameMergedOrDefault: p,
    cleanupNull: h
  } = Hh(), {
    isArray: x,
    isObject: w,
    isString: b
  } = Ne(), {
    isSubjectReference: S
  } = St(), {
    expandIri: v,
    getInitialContext: y,
    process: d,
    processingMode: l
  } = Ht(), {
    compact: m,
    compactIri: I
  } = Jh(), {
    createNodeMap: A,
    createMergedNodeMap: R,
    mergeNodeMaps: j
  } = pr(), {
    logEventHandler: E,
    logWarningEventHandler: O,
    safeEventHandler: P,
    setDefaultEventHandler: C,
    setupEventHandler: D,
    strictEventHandler: _,
    unhandledEventHandler: F
  } = Mn(), L = function(k) {
    const M = {}, N = new s({ max: 100 });
    k.compact = async function(q, T, z) {
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
      z = $(z, {
        base: b(q) ? q : "",
        compactArrays: !0,
        compactToRelative: !0,
        graph: !1,
        skipExpansion: !1,
        link: !1,
        issuer: new o("_:b"),
        contextResolver: new i(
          { sharedCache: N }
        )
      }), z.link && (z.skipExpansion = !0), z.compactToRelative || delete z.base;
      let H;
      z.skipExpansion ? H = q : H = await k.expand(q, z);
      const Q = await k.processContext(
        y(z),
        T,
        z
      );
      let J = await m({
        activeCtx: Q,
        element: H,
        options: z
      });
      z.compactArrays && !z.graph && x(J) ? J.length === 1 ? J = J[0] : J.length === 0 && (J = {}) : z.graph && w(J) && (J = [J]), w(T) && "@context" in T && (T = T["@context"]), T = n.clone(T), x(T) || (T = [T]);
      const V = T;
      T = [];
      for (let Z = 0; Z < V.length; ++Z)
        (!w(V[Z]) || Object.keys(V[Z]).length > 0) && T.push(V[Z]);
      const B = T.length > 0;
      if (T.length === 1 && (T = T[0]), x(J)) {
        const Z = I({
          activeCtx: Q,
          iri: "@graph",
          relativeTo: { vocab: !0 }
        }), K = J;
        J = {}, B && (J["@context"] = T), J[Z] = K;
      } else if (w(J) && B) {
        const Z = J;
        J = { "@context": T };
        for (const K in Z)
          J[K] = Z[K];
      }
      return J;
    }, k.expand = async function(q, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not expand, too few arguments.");
      T = $(T, {
        keepFreeFloatingNodes: !1,
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      const z = {}, H = [];
      if ("expandContext" in T) {
        const B = n.clone(T.expandContext);
        w(B) && "@context" in B ? z.expandContext = B : z.expandContext = { "@context": B }, H.push(z.expandContext);
      }
      let Q;
      if (!b(q))
        z.input = n.clone(q);
      else {
        const B = await k.get(q, T);
        Q = B.documentUrl, z.input = B.document, B.contextUrl && (z.remoteContext = { "@context": B.contextUrl }, H.push(z.remoteContext));
      }
      "base" in T || (T.base = Q || "");
      let J = y(T);
      for (const B of H)
        J = await d({ activeCtx: J, localCtx: B, options: T });
      let V = await c({
        activeCtx: J,
        element: z.input,
        options: T
      });
      return w(V) && "@graph" in V && Object.keys(V).length === 1 ? V = V["@graph"] : V === null && (V = []), x(V) || (V = [V]), V;
    }, k.flatten = async function(q, T, z) {
      if (arguments.length < 1)
        return new TypeError("Could not flatten, too few arguments.");
      typeof T == "function" ? T = null : T = T || null, z = $(z, {
        base: b(q) ? q : "",
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      const H = await k.expand(q, z), Q = u(H);
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
        contextResolver: new i(
          { sharedCache: N }
        )
      }), b(T)) {
        const ee = await k.get(T, z);
        if (T = ee.document, ee.contextUrl) {
          let re = T["@context"];
          re ? x(re) ? re.push(ee.contextUrl) : re = [re, ee.contextUrl] : re = ee.contextUrl, T["@context"] = re;
        }
      }
      const H = T ? T["@context"] || {} : {}, Q = await k.processContext(
        y(z),
        H,
        z
      );
      z.hasOwnProperty("omitGraph") || (z.omitGraph = l(Q, 1.1)), z.hasOwnProperty("pruneBlankNodeIdentifiers") || (z.pruneBlankNodeIdentifiers = l(Q, 1.1));
      const J = await k.expand(q, z), V = { ...z };
      V.isFrame = !0, V.keepFreeFloatingNodes = !0;
      const B = await k.expand(T, V), Z = Object.keys(T).map((ee) => v(Q, ee, { vocab: !0 }));
      V.merged = !Z.includes("@graph"), V.is11 = l(Q, 1.1);
      const K = p(J, B, V);
      V.graph = !z.omitGraph, V.skipExpansion = !0, V.link = {}, V.framing = !0;
      let W = await k.compact(K, H, V);
      return V.link = {}, W = h(W, V), W;
    }, k.link = async function(q, T, z) {
      const H = {};
      return T && (H["@context"] = T), H["@embed"] = "@link", k.frame(q, H, z);
    }, k.normalize = k.canonize = async function(q, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not canonize, too few arguments.");
      if (T = $(T, {
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
        const Q = a.parse(q);
        return e.canonize(Q, T);
      }
      const z = { ...T };
      delete z.format, z.produceGeneralizedRdf = !1;
      const H = await k.toRDF(q, z);
      return e.canonize(H, T);
    }, k.fromRDF = async function(q, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert from RDF, too few arguments.");
      T = $(T, {
        format: b(q) ? "application/n-quads" : void 0
      });
      const { format: z } = T;
      let { rdfParser: H } = T;
      if (z) {
        if (H = H || M[z], !H)
          throw new r(
            "Unknown input format.",
            "jsonld.UnknownFormat",
            { format: z }
          );
      } else
        H = () => q;
      const Q = await H(q);
      return f(Q, T);
    }, k.toRDF = async function(q, T) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert to RDF, too few arguments.");
      T = $(T, {
        base: b(q) ? q : "",
        skipExpansion: !1,
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      let z;
      T.skipExpansion ? z = q : z = await k.expand(q, T);
      const H = g(z, T);
      if (T.format) {
        if (T.format === "application/n-quads" || T.format === "application/nquads")
          return a.serialize(H);
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
      T = $(T, {
        base: b(q) ? q : "",
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      const z = await k.expand(q, T);
      return R(z, T);
    }, k.merge = async function(q, T, z) {
      if (arguments.length < 1)
        throw new TypeError("Could not merge, too few arguments.");
      if (!x(q))
        throw new TypeError('Could not merge, "docs" must be an array.');
      typeof T == "function" ? T = null : T = T || null, z = $(z, {
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      const H = await Promise.all(q.map((ee) => {
        const re = { ...z };
        return k.expand(ee, re);
      }));
      let Q = !0;
      "mergeNodes" in z && (Q = z.mergeNodes);
      const J = z.issuer || new o("_:b"), V = { "@default": {} };
      for (let ee = 0; ee < H.length; ++ee) {
        const re = n.relabelBlankNodes(H[ee], {
          issuer: new o("_:b" + ee + "-")
        }), Se = Q || ee === 0 ? V : { "@default": {} };
        if (A(re, Se, "@default", J), Se !== V)
          for (const he in Se) {
            const ye = Se[he];
            if (!(he in V)) {
              V[he] = ye;
              continue;
            }
            const fe = V[he];
            for (const nt in ye)
              nt in fe || (fe[nt] = ye[nt]);
          }
      }
      const B = j(V), Z = [], K = Object.keys(B).sort();
      for (let ee = 0; ee < K.length; ++ee) {
        const re = B[K[ee]];
        S(re) || Z.push(re);
      }
      return T === null ? Z : (z.graph = !0, z.skipExpansion = !0, await k.compact(Z, T, z));
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
      let z;
      typeof T.documentLoader == "function" ? z = T.documentLoader : z = k.documentLoader;
      const H = await z(q);
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
    }, k.processContext = async function(q, T, z) {
      return z = $(z, {
        base: "",
        contextResolver: new i(
          { sharedCache: N }
        )
      }), T === null ? y(z) : (T = n.clone(T), w(T) && "@context" in T || (T = { "@context": T }), d({ activeCtx: q, localCtx: T, options: z }));
    }, k.getContextValue = Ht().getContextValue, k.documentLoaders = {}, k.useDocumentLoader = function(q) {
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
      M[q] = T;
    }, k.unregisterRDFParser = function(q) {
      delete M[q];
    }, k.registerRDFParser("application/n-quads", a.parse), k.registerRDFParser("application/nquads", a.parse), k.url = Mt(), k.logEventHandler = E, k.logWarningEventHandler = O, k.safeEventHandler = P, k.setDefaultEventHandler = C, k.strictEventHandler = _, k.unhandledEventHandler = F, k.util = n, Object.assign(k, n), k.promises = k, k.RequestQueue = dl(), k.JsonLdProcessor = Kh()(k), t.setupGlobals(k), t.setupDocumentLoaders(k);
    function $(q, {
      documentLoader: T = k.documentLoader,
      ...z
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
  return L(G), Rs = G, Rs;
}
var Wh = Qh();
const Xh = /* @__PURE__ */ sa(Wh);
async function ld(e, t, n = {}) {
  const i = {
    algorithm: "URDNA2015",
    format: "application/n-quads",
    safe: n.safe ?? !1
  };
  return t && (i.documentLoader = t), await Xh.normalize(e, i);
}
function Yh(e, t, n) {
  return {
    "@context": e,
    type: "DataIntegrityProof",
    cryptosuite: "eddsa-rdfc-2022",
    proofPurpose: "assertionMethod",
    verificationMethod: t,
    created: n
  };
}
async function ul(e, t, n, i = !1) {
  const [o, r] = await Promise.all([
    ld(e, n, { safe: i }),
    ld(t, n, { safe: i })
  ]), s = ks("sha256").update(o, "utf8").digest(), a = ks("sha256").update(r, "utf8").digest(), c = new Uint8Array(64);
  return c.set(a, 0), c.set(s, 32), c;
}
async function em(e, t, n = {}) {
  const i = n.created ?? (/* @__PURE__ */ new Date()).toISOString(), o = Yh(
    e["@context"],
    t.id,
    i
  ), r = await ul(
    e,
    o,
    n.documentLoader,
    n.safe ?? !1
  ), s = await xh(r, t.privateKey), a = wu(s);
  return {
    type: "DataIntegrityProof",
    cryptosuite: "eddsa-rdfc-2022",
    proofPurpose: "assertionMethod",
    verificationMethod: t.id,
    created: i,
    proofValue: a
  };
}
async function tm(e, t, n = {}) {
  const i = e.proof;
  if (!i) throw new Error("No proof found on credential");
  if (i.cryptosuite !== "eddsa-rdfc-2022")
    throw new Error(`Unsupported cryptosuite: ${i.cryptosuite}`);
  if (i.created === void 0)
    throw new Error('eddsa-rdfc-2022 proof is missing the required "created" property.');
  const o = ["type", "cryptosuite", "proofPurpose", "verificationMethod", "created", "proofValue"];
  if (i.type !== "DataIntegrityProof" || i.proofPurpose !== "assertionMethod" || Object.keys(i).some((g) => !o.includes(g)) || typeof i.verificationMethod != "string" || typeof i.created != "string" || typeof i.proofValue != "string") return !1;
  const { proof: r, ...s } = e, { proofValue: a, ...c } = i, u = { ...c, "@context": s["@context"] }, f = await ul(
    s,
    u,
    n.documentLoader,
    n.safe ?? !1
  );
  try {
    const g = na(i.proofValue);
    return await Ih(g, f, t);
  } catch {
    return !1;
  }
}
const nm = Kf, im = dh, rm = Object.freeze({
  RmAccreditation: `${Lt}accreditation.json`,
  RmOperationalScope: `${Lt}operational-scope.json`,
  RmCertificate: `${Lt}certificate.json`,
  RmStudy: `${Lt}study.json`,
  RmLabAuthority: `${Lt}lab-authority.json`,
  BitstringStatusListCredential: `${Lt}status-list.json`,
  RecognizedEntityCredential: `${Lt}recognized-entity.json`
});
function sm(e) {
  return e === "BitstringStatusListCredential" ? [Ft] : e === "RecognizedEntityCredential" ? [Ft, gu] : [Ft, yu];
}
const am = Object.freeze({
  name: "RM v1",
  schemas: rm,
  contexts: sm
}), om = Object.freeze({
  resolve: 1,
  parse: 0,
  carrier: 0,
  type: 0,
  schema: 0,
  proof: 2,
  key: 2,
  signature: 2
});
function fr(e, t, n, i) {
  return [
    e,
    t ?? "unresolved",
    n,
    i.purpose,
    `${i.profile.id}@${i.profile.version}`,
    i.evaluationTime
  ].join(" | ");
}
function sn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const cm = (e) => e.replace(/~/g, "~0").replace(/\//g, "~1");
function dm(e, t) {
  if (!t.startsWith("/")) return [];
  let n = [{ pointer: "", value: e }];
  for (const i of t.slice(1).split("/")) {
    const o = [];
    for (const { pointer: r, value: s } of n)
      i === "*" ? Array.isArray(s) && s.forEach((a, c) => o.push({ pointer: `${r}/${c}`, value: a })) : sn(s) && Object.hasOwn(s, i) && o.push({ pointer: `${r}/${cm(i)}`, value: s[i] });
    n = o;
  }
  return n;
}
function ln(e, t) {
  if (t === "") return e;
  if (!t.startsWith("/")) return;
  let n = e;
  for (const i of t.slice(1).split("/")) {
    const o = i.replace(/~1/g, "/").replace(/~0/g, "~");
    if (Array.isArray(n) && /^(0|[1-9][0-9]*)$/.test(o)) n = n[Number(o)];
    else if (sn(n) && Object.hasOwn(n, o)) n = n[o];
    else return;
  }
  return n;
}
function ce(e, t, n = [], i = "executed") {
  return Object.freeze({
    state: e,
    execution: i,
    reasons: Object.freeze(t),
    sourcePointers: Object.freeze(n)
  });
}
const un = (e) => ce("not_established", [e], [], "not_run");
function lm(e, t) {
  const n = Date.parse(t), i = typeof e.validFrom == "string" ? Date.parse(e.validFrom) : NaN, o = typeof e.validUntil == "string" ? Date.parse(e.validUntil) : NaN;
  if (!Number.isFinite(n) || !Number.isFinite(i) || !Number.isFinite(o))
    return ce("not_established", ["Validity period or evaluation time is missing or invalid."]);
  const r = ["/validFrom", "/validUntil"];
  return n < i ? ce("contradicted", [`Not yet valid at ${t}.`], r) : n > o ? ce("contradicted", [`Expired before ${t}.`], r) : ce("established", [`Valid at ${t}.`], r);
}
function um(e, t) {
  return (Array.isArray(e.relatedResource) ? e.relatedResource : []).filter(sn).map((i) => {
    const o = String(i.id);
    try {
      const r = rr(t.resolve(o).bytes);
      return r === i.digestSRI ? { id: o, state: "established", reason: "Digest matches the exact referenced bytes." } : { id: o, state: "contradicted", reason: `Digest mismatch: referenced bytes hash to ${r}.` };
    } catch (r) {
      const s = r instanceof Ce ? r.code : "UNAVAILABLE";
      return { id: o, state: "not_established", reason: `Referenced resource unavailable: ${s}.` };
    }
  });
}
async function Ui(e, t, n) {
  const i = [], o = n.staticResolver ?? t, r = n.binding ?? am, s = un("Not evaluated because protection is not established."), a = (l = {}) => {
    const m = xe(i.map((I) => I.state));
    return Object.freeze({
      artifactId: e,
      protection: Object.freeze({
        artifactId: e,
        ...ce(m, i.filter((I) => I.state !== "established").map((I) => `${I.check}: ${I.reason}`).concat(m === "established" ? ["Protection established from the original secured bytes."] : []))
      }),
      checks: Object.freeze(i.map((I) => Object.freeze(I))),
      validity: s,
      relatedResources: Object.freeze([]),
      facts: Object.freeze([]),
      ...l
    });
  }, c = (l, m, I, A = {}) => (i.push({ check: l, state: m, reason: I }), a(A));
  let u;
  try {
    u = t.resolve(e).bytes;
  } catch (l) {
    const m = l instanceof Ce ? l.code : "UNAVAILABLE";
    return c("resolve", "not_established", `Artifact is not available: ${m}.`);
  }
  const f = rr(u);
  i.push({ check: "resolve", state: "established", reason: `Resolved ${u.byteLength} bytes.` });
  let g;
  try {
    g = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(u));
  } catch {
    return c("parse", "contradicted", "Artifact bytes are not valid UTF-8 JSON.", { digestSRI: f });
  }
  if (!sn(g)) return c("parse", "contradicted", "Artifact is not a JSON object.", { digestSRI: f });
  i.push({ check: "parse", state: "established", reason: "Strict UTF-8 JSON object." });
  const p = g["@context"], h = r.contexts(Array.isArray(g.type) ? g.type[1] : void 0);
  if (!Array.isArray(p) || p.length !== h.length || h.some((l, m) => p[m] !== l))
    return c(
      "carrier",
      "not_established",
      "Only the exact supported context combination for this type is accepted.",
      { digestSRI: f }
    );
  i.push({ check: "carrier", state: "established", reason: "Exact supported context combination." });
  const x = Array.isArray(g.type) ? g.type : [], w = x.length === 2 && x[0] === "VerifiableCredential" ? String(x[1]) : void 0, b = w === void 0 ? void 0 : r.schemas[w];
  if (b === void 0)
    return c("type", "not_established", `Credential type is not a recognized ${r.name} artifact type.`, { digestSRI: f });
  if (Array.isArray(g.credentialSchema))
    return c(
      "type",
      "not_established",
      "Multiple credentialSchema declarations have no accepted composition in this binding.",
      { digestSRI: f, artifactType: w }
    );
  if ((sn(g.credentialSchema) ? g.credentialSchema.id : void 0) !== b)
    return c("type", "contradicted", `${w} must declare schema ${b}.`, { digestSRI: f, artifactType: w });
  i.push({ check: "type", state: "established", reason: `${w} with its pinned schema.` });
  try {
    const l = new nm({ allErrors: !0, strict: !0 });
    im(l);
    const m = JSON.parse(new TextDecoder().decode(o.resolve(b).bytes)), I = l.compile(m);
    if (!I(g)) {
      const A = (I.errors ?? []).map((R) => `${R.instancePath || "/"} ${R.message ?? ""}`).join("; ");
      return c("schema", "contradicted", `Schema validation failed: ${A}`, { digestSRI: f, artifactType: w });
    }
  } catch (l) {
    const m = l instanceof Ce ? l.code : "INVALID_SCHEMA";
    return c("schema", "not_established", `Pinned schema unavailable: ${m}.`, { digestSRI: f, artifactType: w });
  }
  i.push({ check: "schema", state: "established", reason: "Valid against the pinned schema." });
  const v = g.proof;
  if (Array.isArray(v))
    return c("proof", "not_established", "Proof sets and chains are unsupported in the initial slice.", { digestSRI: f, artifactType: w });
  if (!sn(v))
    return c("proof", "not_established", "The artifact carries no proof.", { digestSRI: f, artifactType: w });
  i.push({ check: "proof", state: "established", reason: "One eddsa-rdfc-2022 assertionMethod proof." });
  const y = qu(g.issuer, v.verificationMethod, o);
  if (y.state !== "established" || y.publicKey === void 0)
    return c(
      "key",
      y.state === "established" ? "not_established" : y.state,
      `${y.code}: ${y.reason}`,
      { digestSRI: f, artifactType: w, keyAuthorization: y }
    );
  i.push({ check: "key", state: "established", reason: y.reason });
  try {
    const l = Pd(o);
    if (!await tm(g, y.publicKey, {
      documentLoader: l,
      safe: !0
    }))
      return c(
        "signature",
        "contradicted",
        "Signature does not verify over the safe canonical form.",
        { digestSRI: f, artifactType: w, keyAuthorization: y }
      );
  } catch (l) {
    const m = l instanceof Error ? l.message.split(`
`)[0] : String(l);
    return c(
      "signature",
      "contradicted",
      `Safe JSON-LD processing rejected the artifact: ${m}`,
      { digestSRI: f, artifactType: w, keyAuthorization: y }
    );
  }
  i.push({ check: "signature", state: "established", reason: "Ed25519 signature verifies (safe mode, offline catalog)." });
  const d = [];
  for (const l of n.manifest.factMappings) {
    const m = String(l.fact);
    for (const { pointer: I, value: A } of dm(g, String(l.nativePath)))
      d.push(Object.freeze({ fact: m, pointer: I, value: structuredClone(A) }));
  }
  return a({
    digestSRI: f,
    artifactType: w,
    keyAuthorization: y,
    validity: lm(g, n.evaluationTime),
    relatedResources: Object.freeze(um(g, t).map((l) => Object.freeze(l))),
    facts: Object.freeze(d)
  });
}
var we = Uint8Array, Oe = Uint16Array, va = Int32Array, hr = new we([
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
]), mr = new we([
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
]), Ds = new we([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), pl = function(e, t) {
  for (var n = new Oe(31), i = 0; i < 31; ++i)
    n[i] = t += 1 << e[i - 1];
  for (var o = new va(n[30]), i = 1; i < 30; ++i)
    for (var r = n[i]; r < n[i + 1]; ++r)
      o[r] = r - n[i] << 5 | i;
  return { b: n, r: o };
}, fl = pl(hr, 2), hl = fl.b, zs = fl.r;
hl[28] = 258, zs[258] = 28;
var ml = pl(mr, 0), pm = ml.b, ud = ml.r, Us = new Oe(32768);
for (var de = 0; de < 32768; ++de) {
  var $t = (de & 43690) >> 1 | (de & 21845) << 1;
  $t = ($t & 52428) >> 2 | ($t & 13107) << 2, $t = ($t & 61680) >> 4 | ($t & 3855) << 4, Us[de] = (($t & 65280) >> 8 | ($t & 255) << 8) >> 1;
}
var ct = (function(e, t, n) {
  for (var i = e.length, o = 0, r = new Oe(t); o < i; ++o)
    e[o] && ++r[e[o] - 1];
  var s = new Oe(t);
  for (o = 1; o < t; ++o)
    s[o] = s[o - 1] + r[o - 1] << 1;
  var a;
  if (n) {
    a = new Oe(1 << t);
    var c = 15 - t;
    for (o = 0; o < i; ++o)
      if (e[o])
        for (var u = o << 4 | e[o], f = t - e[o], g = s[e[o] - 1]++ << f, p = g | (1 << f) - 1; g <= p; ++g)
          a[Us[g] >> c] = u;
  } else
    for (a = new Oe(i), o = 0; o < i; ++o)
      e[o] && (a[o] = Us[s[e[o] - 1]++] >> 15 - e[o]);
  return a;
}), Et = new we(288);
for (var de = 0; de < 144; ++de)
  Et[de] = 8;
for (var de = 144; de < 256; ++de)
  Et[de] = 9;
for (var de = 256; de < 280; ++de)
  Et[de] = 7;
for (var de = 280; de < 288; ++de)
  Et[de] = 8;
var Pn = new we(32);
for (var de = 0; de < 32; ++de)
  Pn[de] = 5;
var fm = /* @__PURE__ */ ct(Et, 9, 0), hm = /* @__PURE__ */ ct(Et, 9, 1), mm = /* @__PURE__ */ ct(Pn, 5, 0), ym = /* @__PURE__ */ ct(Pn, 5, 1), js = function(e) {
  for (var t = e[0], n = 1; n < e.length; ++n)
    e[n] > t && (t = e[n]);
  return t;
}, Qe = function(e, t, n) {
  var i = t / 8 | 0;
  return (e[i] | e[i + 1] << 8) >> (t & 7) & n;
}, $s = function(e, t) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (t & 7);
}, ba = function(e) {
  return (e + 7) / 8 | 0;
}, yl = function(e, t, n) {
  return (n == null || n > e.length) && (n = e.length), new we(e.subarray(t, n));
}, gm = [
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
], We = function(e, t, n) {
  var i = new Error(t || gm[e]);
  if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, We), !n)
    throw i;
  return i;
}, vm = function(e, t, n, i) {
  var o = e.length, r = 0;
  if (!o || t.f && !t.l)
    return n || new we(0);
  var s = !n, a = s || t.i != 2, c = t.i;
  s && (n = new we(o * 3));
  var u = function(V) {
    var B = n.length;
    if (V > B) {
      var Z = new we(Math.max(B * 2, V));
      Z.set(n), n = Z;
    }
  }, f = t.f || 0, g = t.p || 0, p = t.b || 0, h = t.l, x = t.d, w = t.m, b = t.n, S = o * 8;
  do {
    if (!h) {
      f = Qe(e, g, 1);
      var v = Qe(e, g + 1, 3);
      if (g += 3, v)
        if (v == 1)
          h = hm, x = ym, w = 9, b = 5;
        else if (v == 2) {
          var m = Qe(e, g, 31) + 257, I = Qe(e, g + 10, 15) + 4, A = m + Qe(e, g + 5, 31) + 1;
          g += 14;
          for (var R = new we(A), j = new we(19), E = 0; E < I; ++E)
            j[Ds[E]] = Qe(e, g + E * 3, 7);
          g += I * 3;
          for (var O = js(j), P = (1 << O) - 1, C = ct(j, O, 1), E = 0; E < A; ) {
            var D = C[Qe(e, g, P)];
            g += D & 15;
            var y = D >> 4;
            if (y < 16)
              R[E++] = y;
            else {
              var _ = 0, F = 0;
              for (y == 16 ? (F = 3 + Qe(e, g, 3), g += 2, _ = R[E - 1]) : y == 17 ? (F = 3 + Qe(e, g, 7), g += 3) : y == 18 && (F = 11 + Qe(e, g, 127), g += 7); F--; )
                R[E++] = _;
            }
          }
          var L = R.subarray(0, m), G = R.subarray(m);
          w = js(L), b = js(G), h = ct(L, w, 1), x = ct(G, b, 1);
        } else
          We(1);
      else {
        var y = ba(g) + 4, d = e[y - 4] | e[y - 3] << 8, l = y + d;
        if (l > o) {
          c && We(0);
          break;
        }
        a && u(p + d), n.set(e.subarray(y, l), p), t.b = p += d, t.p = g = l * 8, t.f = f;
        continue;
      }
      if (g > S) {
        c && We(0);
        break;
      }
    }
    a && u(p + 131072);
    for (var k = (1 << w) - 1, M = (1 << b) - 1, U = g; ; U = g) {
      var _ = h[$s(e, g) & k], N = _ >> 4;
      if (g += _ & 15, g > S) {
        c && We(0);
        break;
      }
      if (_ || We(2), N < 256)
        n[p++] = N;
      else if (N == 256) {
        U = g, h = null;
        break;
      } else {
        var $ = N - 254;
        if (N > 264) {
          var E = N - 257, q = hr[E];
          $ = Qe(e, g, (1 << q) - 1) + hl[E], g += q;
        }
        var T = x[$s(e, g) & M], z = T >> 4;
        T || We(3), g += T & 15;
        var G = pm[z];
        if (z > 3) {
          var q = mr[z];
          G += $s(e, g) & (1 << q) - 1, g += q;
        }
        if (g > S) {
          c && We(0);
          break;
        }
        a && u(p + 131072);
        var H = p + $;
        if (p < G) {
          var Q = r - G, J = Math.min(G, H);
          for (Q + p < 0 && We(3); p < J; ++p)
            n[p] = i[Q + p];
        }
        for (; p < H; ++p)
          n[p] = n[p - G];
      }
    }
    t.l = h, t.p = U, t.b = p, t.f = f, h && (f = 1, t.m = w, t.d = x, t.n = b);
  } while (!f);
  return p != n.length && s ? yl(n, 0, p) : n.subarray(0, p);
}, bt = function(e, t, n) {
  n <<= t & 7;
  var i = t / 8 | 0;
  e[i] |= n, e[i + 1] |= n >> 8;
}, gn = function(e, t, n) {
  n <<= t & 7;
  var i = t / 8 | 0;
  e[i] |= n, e[i + 1] |= n >> 8, e[i + 2] |= n >> 16;
}, _s = function(e, t) {
  for (var n = [], i = 0; i < e.length; ++i)
    e[i] && n.push({ s: i, f: e[i] });
  var o = n.length, r = n.slice();
  if (!o)
    return { t: vl, l: 0 };
  if (o == 1) {
    var s = new we(n[0].s + 1);
    return s[n[0].s] = 1, { t: s, l: 1 };
  }
  n.sort(function(l, m) {
    return l.f - m.f;
  }), n.push({ s: -1, f: 25001 });
  var a = n[0], c = n[1], u = 0, f = 1, g = 2;
  for (n[0] = { s: -1, f: a.f + c.f, l: a, r: c }; f != o - 1; )
    a = n[n[u].f < n[g].f ? u++ : g++], c = n[u != f && n[u].f < n[g].f ? u++ : g++], n[f++] = { s: -1, f: a.f + c.f, l: a, r: c };
  for (var p = r[0].s, i = 1; i < o; ++i)
    r[i].s > p && (p = r[i].s);
  var h = new Oe(p + 1), x = Vs(n[f - 1], h, 0);
  if (x > t) {
    var i = 0, w = 0, b = x - t, S = 1 << b;
    for (r.sort(function(m, I) {
      return h[I.s] - h[m.s] || m.f - I.f;
    }); i < o; ++i) {
      var v = r[i].s;
      if (h[v] > t)
        w += S - (1 << x - h[v]), h[v] = t;
      else
        break;
    }
    for (w >>= b; w > 0; ) {
      var y = r[i].s;
      h[y] < t ? w -= 1 << t - h[y]++ - 1 : ++i;
    }
    for (; i >= 0 && w; --i) {
      var d = r[i].s;
      h[d] == t && (--h[d], ++w);
    }
    x = t;
  }
  return { t: new we(h), l: x };
}, Vs = function(e, t, n) {
  return e.s == -1 ? Math.max(Vs(e.l, t, n + 1), Vs(e.r, t, n + 1)) : t[e.s] = n;
}, pd = function(e) {
  for (var t = e.length; t && !e[--t]; )
    ;
  for (var n = new Oe(++t), i = 0, o = e[0], r = 1, s = function(c) {
    n[i++] = c;
  }, a = 1; a <= t; ++a)
    if (e[a] == o && a != t)
      ++r;
    else {
      if (!o && r > 2) {
        for (; r > 138; r -= 138)
          s(32754);
        r > 2 && (s(r > 10 ? r - 11 << 5 | 28690 : r - 3 << 5 | 12305), r = 0);
      } else if (r > 3) {
        for (s(o), --r; r > 6; r -= 6)
          s(8304);
        r > 2 && (s(r - 3 << 5 | 8208), r = 0);
      }
      for (; r--; )
        s(o);
      r = 1, o = e[a];
    }
  return { c: n.subarray(0, i), n: t };
}, vn = function(e, t) {
  for (var n = 0, i = 0; i < t.length; ++i)
    n += e[i] * t[i];
  return n;
}, gl = function(e, t, n) {
  var i = n.length, o = ba(t + 2);
  e[o] = i & 255, e[o + 1] = i >> 8, e[o + 2] = e[o] ^ 255, e[o + 3] = e[o + 1] ^ 255;
  for (var r = 0; r < i; ++r)
    e[o + r + 4] = n[r];
  return (o + 4 + i) * 8;
}, fd = function(e, t, n, i, o, r, s, a, c, u, f) {
  bt(t, f++, n), ++o[256];
  for (var g = _s(o, 15), p = g.t, h = g.l, x = _s(r, 15), w = x.t, b = x.l, S = pd(p), v = S.c, y = S.n, d = pd(w), l = d.c, m = d.n, I = new Oe(19), A = 0; A < v.length; ++A)
    ++I[v[A] & 31];
  for (var A = 0; A < l.length; ++A)
    ++I[l[A] & 31];
  for (var R = _s(I, 7), j = R.t, E = R.l, O = 19; O > 4 && !j[Ds[O - 1]]; --O)
    ;
  var P = u + 5 << 3, C = vn(o, Et) + vn(r, Pn) + s, D = vn(o, p) + vn(r, w) + s + 14 + 3 * O + vn(I, j) + 2 * I[16] + 3 * I[17] + 7 * I[18];
  if (c >= 0 && P <= C && P <= D)
    return gl(t, f, e.subarray(c, c + u));
  var _, F, L, G;
  if (bt(t, f, 1 + (D < C)), f += 2, D < C) {
    _ = ct(p, h, 0), F = p, L = ct(w, b, 0), G = w;
    var k = ct(j, E, 0);
    bt(t, f, y - 257), bt(t, f + 5, m - 1), bt(t, f + 10, O - 4), f += 14;
    for (var A = 0; A < O; ++A)
      bt(t, f + 3 * A, j[Ds[A]]);
    f += 3 * O;
    for (var M = [v, l], U = 0; U < 2; ++U)
      for (var N = M[U], A = 0; A < N.length; ++A) {
        var $ = N[A] & 31;
        bt(t, f, k[$]), f += j[$], $ > 15 && (bt(t, f, N[A] >> 5 & 127), f += N[A] >> 12);
      }
  } else
    _ = fm, F = Et, L = mm, G = Pn;
  for (var A = 0; A < a; ++A) {
    var q = i[A];
    if (q > 255) {
      var $ = q >> 18 & 31;
      gn(t, f, _[$ + 257]), f += F[$ + 257], $ > 7 && (bt(t, f, q >> 23 & 31), f += hr[$]);
      var T = q & 31;
      gn(t, f, L[T]), f += G[T], T > 3 && (gn(t, f, q >> 5 & 8191), f += mr[T]);
    } else
      gn(t, f, _[q]), f += F[q];
  }
  return gn(t, f, _[256]), f + F[256];
}, bm = /* @__PURE__ */ new va([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), vl = /* @__PURE__ */ new we(0), wm = function(e, t, n, i, o, r) {
  var s = r.z || e.length, a = new we(i + s + 5 * (1 + Math.ceil(s / 7e3)) + o), c = a.subarray(i, a.length - o), u = r.l, f = (r.r || 0) & 7;
  if (t) {
    f && (c[0] = r.r >> 3);
    for (var g = bm[t - 1], p = g >> 13, h = g & 8191, x = (1 << n) - 1, w = r.p || new Oe(32768), b = r.h || new Oe(x + 1), S = Math.ceil(n / 3), v = 2 * S, y = function(K) {
      return (e[K] ^ e[K + 1] << S ^ e[K + 2] << v) & x;
    }, d = new va(25e3), l = new Oe(288), m = new Oe(32), I = 0, A = 0, R = r.i || 0, j = 0, E = r.w || 0, O = 0; R + 2 < s; ++R) {
      var P = y(R), C = R & 32767, D = b[P];
      if (w[C] = D, b[P] = C, E <= R) {
        var _ = s - R;
        if ((I > 7e3 || j > 24576) && (_ > 423 || !u)) {
          f = fd(e, c, 0, d, l, m, A, j, O, R - O, f), j = I = A = 0, O = R;
          for (var F = 0; F < 286; ++F)
            l[F] = 0;
          for (var F = 0; F < 30; ++F)
            m[F] = 0;
        }
        var L = 2, G = 0, k = h, M = C - D & 32767;
        if (_ > 2 && P == y(R - M))
          for (var U = Math.min(p, _) - 1, N = Math.min(32767, R), $ = Math.min(258, _); M <= N && --k && C != D; ) {
            if (e[R + L] == e[R + L - M]) {
              for (var q = 0; q < $ && e[R + q] == e[R + q - M]; ++q)
                ;
              if (q > L) {
                if (L = q, G = M, q > U)
                  break;
                for (var T = Math.min(M, q - 2), z = 0, F = 0; F < T; ++F) {
                  var H = R - M + F & 32767, Q = w[H], J = H - Q & 32767;
                  J > z && (z = J, D = H);
                }
              }
            }
            C = D, D = w[C], M += C - D & 32767;
          }
        if (G) {
          d[j++] = 268435456 | zs[L] << 18 | ud[G];
          var V = zs[L] & 31, B = ud[G] & 31;
          A += hr[V] + mr[B], ++l[257 + V], ++m[B], E = R + L, ++I;
        } else
          d[j++] = e[R], ++l[e[R]];
      }
    }
    for (R = Math.max(R, E); R < s; ++R)
      d[j++] = e[R], ++l[e[R]];
    f = fd(e, c, u, d, l, m, A, j, O, R - O, f), u || (r.r = f & 7 | c[f / 8 | 0] << 3, f -= 7, r.h = b, r.p = w, r.i = R, r.w = E);
  } else {
    for (var R = r.w || 0; R < s + u; R += 65535) {
      var Z = R + 65535;
      Z >= s && (c[f / 8 | 0] = u, Z = s), f = gl(c, f + 1, e.subarray(R, Z));
    }
    r.i = s;
  }
  return yl(a, 0, i + ba(f) + o);
}, xm = /* @__PURE__ */ (function() {
  for (var e = new Int32Array(256), t = 0; t < 256; ++t) {
    for (var n = t, i = 9; --i; )
      n = (n & 1 && -306674912) ^ n >>> 1;
    e[t] = n;
  }
  return e;
})(), Sm = function() {
  var e = -1;
  return {
    p: function(t) {
      for (var n = e, i = 0; i < t.length; ++i)
        n = xm[n & 255 ^ t[i]] ^ n >>> 8;
      e = n;
    },
    d: function() {
      return ~e;
    }
  };
}, Im = function(e, t, n, i, o) {
  if (!o && (o = { l: 1 }, t.dictionary)) {
    var r = t.dictionary.subarray(-32768), s = new we(r.length + e.length);
    s.set(r), s.set(e, r.length), e = s, o.w = r.length;
  }
  return wm(e, t.level == null ? 6 : t.level, t.mem == null ? o.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + t.mem, n, i, o);
}, Gs = function(e, t, n) {
  for (; n; ++t)
    e[t] = n, n >>>= 8;
}, Am = function(e, t) {
  var n = t.filename;
  if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : t.level == 9 ? 2 : 0, e[9] = 3, t.mtime != 0 && Gs(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n) {
    e[3] = 8;
    for (var i = 0; i <= n.length; ++i)
      e[i + 10] = n.charCodeAt(i);
  }
}, qm = function(e) {
  (e[0] != 31 || e[1] != 139 || e[2] != 8) && We(6, "invalid gzip data");
  var t = e[3], n = 10;
  t & 4 && (n += (e[10] | e[11] << 8) + 2);
  for (var i = (t >> 3 & 1) + (t >> 4 & 1); i > 0; i -= !e[n++])
    ;
  return n + (t & 2);
}, Rm = function(e) {
  var t = e.length;
  return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
}, jm = function(e) {
  return 10 + (e.filename ? e.filename.length + 1 : 0);
};
function $m(e, t) {
  t || (t = {});
  var n = Sm(), i = e.length;
  n.p(e);
  var o = Im(e, t, jm(t), 8), r = o.length;
  return Am(o, t), Gs(o, r - 8, n.d()), Gs(o, r - 4, i), o;
}
function _m(e, t) {
  var n = qm(e);
  return n + 8 > e.length && We(6, "invalid gzip data"), vm(e.subarray(n, -8), { i: 2 }, new we(Rm(e)), t);
}
var Pm = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Tm = 0;
try {
  Pm.decode(vl, { stream: !0 }), Tm = 1;
} catch {
}
function hd(e) {
  return Object.assign(new RangeError(`Cannot create a buffer larger than maxOutputLength ${e}.`), { code: "ERR_BUFFER_TOO_LARGE" });
}
function Cm(e, t = {}) {
  const n = t.maxOutputLength ?? Number.MAX_SAFE_INTEGER;
  if (e.length >= 18) {
    const o = e.length - 4;
    if ((e[o] | e[o + 1] << 8 | e[o + 2] << 16 | e[o + 3] << 24) >>> 0 > n) throw hd(n);
  }
  const i = _m(e);
  if (i.length > n) throw hd(n);
  return i;
}
const Fs = 131072, Em = 2 * 1024 * 1024;
class Vi extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "StatusListError";
  }
}
function km(e, t = Em) {
  if (typeof e != "string" || !/^u[A-Za-z0-9_-]+$/.test(e))
    throw new Vi("MALFORMED", 'encodedList must be multibase base64url (prefix "u").');
  let n;
  try {
    n = Cm(Mm(e.slice(1)), { maxOutputLength: t });
  } catch (i) {
    throw i.code === "ERR_BUFFER_TOO_LARGE" || /maxOutputLength|buffer/i.test(String(i)) ? new Vi("TOO_LARGE", `Decompressed status list exceeds ${t} bytes.`) : new Vi("MALFORMED", "encodedList is not valid GZIP data.");
  }
  if (n.byteLength * 8 < Fs)
    throw new Vi("TOO_SHORT", `Status list has fewer than ${Fs} bits.`);
  return new Uint8Array(n);
}
function Mm(e) {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", n = new Uint8Array(Math.floor(e.length * 6 / 8));
  let i = 0, o = 0, r = 0;
  for (const s of e)
    i = i << 6 | t.indexOf(s), o += 6, o >= 8 && (o -= 8, n[r++] = i >> o & 255);
  return n;
}
function Om(e, t) {
  const n = e[Math.floor(t / 8)];
  if (n === void 0) throw new RangeError(`Status index ${t} is outside the list.`);
  return (n >> 7 - t % 8 & 1) === 1;
}
function Bs(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Zs(e, t) {
  const n = e.credentialStatus;
  if (n === void 0) return {};
  const i = Array.isArray(n) ? n : [n];
  if (i.length === 0 || !i.every(Bs)) return { reason: "Unsupported credentialStatus form." };
  const o = i.filter((r) => t.includes(String(r.statusPurpose)));
  return o.length > 1 ? { reason: `Several status entries for ${t.join("/")}.` } : o.length === 0 ? { reason: `No status entry has an accepted purpose (${t.join(", ")}); found ${i.map((r) => String(r.statusPurpose)).join(", ")}.` } : { entry: o[0] };
}
function Lm(e, t, n, i, o, r = o) {
  const s = Zs(e, i.purposes), a = s.entry;
  if (a === void 0 && s.reason === void 0)
    return i.required ? { state: "not_established", reason: "Status is required by the profile but the credential names none.", sources: [] } : { state: "established", reason: "The profile does not require status for this credential.", sources: [] };
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
  const f = (v) => Bs(v) ? v.id : v;
  if (typeof f(t.issuer) != "string" || f(t.issuer) !== f(e.issuer))
    return { state: "not_established", reason: `Status list is signed by ${String(f(t.issuer))}, who may not state status for credentials of ${String(f(e.issuer))}.`, listUri: c, sources: u };
  const g = t.credentialSubject;
  if (!Bs(g) || g.type !== "BitstringStatusList" || g.statusPurpose !== a.statusPurpose)
    return { state: "not_established", reason: "Status list purpose does not match the entry.", listUri: c, sources: u };
  const p = Date.parse(o), h = Date.parse(String(t.validFrom));
  if (!Number.isFinite(p) || !Number.isFinite(h) || (p - h) / 1e3 > i.maxAgeSeconds)
    return { state: "not_established", reason: `Status list is older than the profile's ${i.maxAgeSeconds} s freshness limit.`, listUri: c, sources: u };
  const x = Date.parse(r);
  if (!Number.isFinite(x) || x < h)
    return { state: "not_established", reason: `Status list observed at ${String(t.validFrom)} cannot establish status at the earlier activity time ${r}; historical status is unavailable.`, listUri: c, sources: u };
  if (!/^(0|[1-9][0-9]*)$/.test(a.statusListIndex))
    return { state: "not_established", reason: "statusListIndex is not a non-negative integer.", listUri: c, sources: u };
  let w;
  try {
    w = Om(km(g.encodedList), Number(a.statusListIndex));
  } catch (v) {
    return { state: "not_established", reason: `Status list cannot be read: ${v.message}`, listUri: c, sources: u };
  }
  const [b, S] = a.statusPurpose === "suspension" ? ["Suspended", "Not suspended"] : ["Revoked", "Not revoked"];
  return w ? { state: "contradicted", reason: `${b}: bit ${a.statusListIndex} of ${c} is set.`, listUri: c, sources: u } : { state: "established", reason: `${S}: bit ${a.statusListIndex} of ${c} is clear.`, listUri: c, sources: u };
}
const Nm = Object.freeze({ maxResources: 1e3, maxBytes: 2e7 });
function wa(e, t, n) {
  if (!(e.binding.id === t.id && e.binding.version === t.version && e.profile.id === n.id && e.profile.version === n.version))
    return `Requested ${e.profile.id}@${e.profile.version} with binding ${e.binding.id}@${e.binding.version} is not the verifier-selected profile ${n.id}@${n.version} for ${t.id}@${t.version}.`;
}
function xa(e, t) {
  const n = `${e.targetId} | plan`;
  return sr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: [],
    authorization: e.selectedClaims.map((i) => ({
      claimId: i.id,
      routeWitnessIds: [],
      ...un("Not evaluated: the plan was refused at gate 0.")
    })),
    support: [],
    conformity: e.conformity ? { requested: !0, ...e.conformity, ...un("Not evaluated: the plan was refused at gate 0.") } : { requested: !1, execution: "not_run" },
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
async function Sa(e, t, n, i, o) {
  const r = Oa(t.openSession({
    maxResources: e.resolverLimits.maxResources,
    maxBytes: e.resolverLimits.maxBytes
  })), s = Oa(t.openSession(Nm)), a = { manifest: n, evaluationTime: e.evaluationTime, staticResolver: s, ...o ? { binding: o } : {} }, c = (m) => JSON.parse(new TextDecoder().decode(r.resolve(m).bytes)), u = await Ui(e.targetId, r, a), f = [u], g = /* @__PURE__ */ new Map([[e.targetId, 0]]);
  for (const m of e.suppliedEvidence)
    g.has(m) || (g.set(m, 1), f.push(await Ui(m, r, a)));
  for (let m = 0; m < f.length; m++) {
    const I = f[m], A = g.get(I.artifactId);
    if (I.protection.state !== "established" || A + 1 > e.resolverLimits.maxDepth) continue;
    const R = c(I.artifactId), j = [
      ...(Array.isArray(R.termsOfUse) ? R.termsOfUse : []).map((E) => E?.authorizationCredential?.id),
      ...(Array.isArray(R.evidence) ? R.evidence : []).map((E) => E?.id)
    ].filter((E) => typeof E == "string");
    for (const E of j)
      g.has(E) || (g.set(E, A + 1), f.push(await Ui(E, r, a)));
  }
  const p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map();
  for (const m of f) {
    if (m.protection.state !== "established") {
      x.set(m.artifactId, void 0);
      continue;
    }
    const I = c(m.artifactId).id;
    x.set(m.artifactId, I === m.artifactId ? ce("established", ["Artifact identifies itself by its resolved identity."], ["/id"]) : ce("contradicted", [`Artifact resolved as ${m.artifactId} identifies itself as ${String(I)}.`], ["/id"]));
  }
  const w = async (m, I, A) => {
    const R = g.get(m) + 1;
    if (R > e.resolverLimits.maxDepth)
      return {
        state: "not_established",
        sources: ["/credentialStatus"],
        reason: `Status list is at depth ${R}, beyond the request's maxDepth ${e.resolverLimits.maxDepth}.`
      };
    const j = Zs(I, A.purposes).entry, E = typeof j?.statusListCredential == "string" ? j.statusListCredential : void 0;
    let O, P = "not_established";
    if (E !== void 0) {
      p.has(E) || p.set(E, await Ui(E, r, a));
      const C = p.get(E);
      C.digestSRI !== void 0 && C.protection.state === "established" ? (O = c(E), P = xe([C.protection.state, C.validity.state])) : C.digestSRI !== void 0 && (O = {}, P = C.protection.state);
    }
    return Lm(I, O, P, A, e.evaluationTime, e.activityTime);
  }, b = { required: !0, purposes: ["suspension"], maxAgeSeconds: i.credentialStatus.maxAgeSeconds }, S = /* @__PURE__ */ new Map();
  for (const m of f) {
    if (m.protection.state !== "established") {
      h.set(m.artifactId, void 0);
      continue;
    }
    const I = c(m.artifactId);
    h.set(m.artifactId, await w(m.artifactId, I, i.credentialStatus)), Zs(I, ["suspension"]).entry !== void 0 && S.set(m.artifactId, await w(m.artifactId, I, b));
  }
  const v = (m) => [
    m.protection,
    x.get(m.artifactId) ? {
      artifactId: m.artifactId,
      ...x.get(m.artifactId),
      reasons: x.get(m.artifactId).reasons.map((I) => `identity: ${I}`)
    } : { artifactId: m.artifactId, ...un("identity: Not evaluated because protection is not established.") },
    {
      artifactId: m.artifactId,
      ...m.validity,
      reasons: m.validity.reasons.map((I) => `validity: ${I}`)
    },
    ...h.get(m.artifactId) ? [{ artifactId: m.artifactId, ...ce(
      h.get(m.artifactId).state,
      [`status: ${h.get(m.artifactId).reason}`],
      [...h.get(m.artifactId).sources]
    ) }] : [{
      artifactId: m.artifactId,
      ...un("status: Not evaluated because protection is not established.")
    }],
    ...m.relatedResources.map((I) => ({
      artifactId: I.id,
      ...ce(I.state, [`integrity (from ${m.artifactId}): ${I.reason}`], ["/relatedResource"])
    }))
  ], y = /* @__PURE__ */ new Map();
  for (const m of f) {
    const I = [
      ["protection", m.protection.state, m.protection.reasons.join(" ")],
      ["identity", x.get(m.artifactId)?.state ?? "not_established", x.get(m.artifactId)?.reasons.join(" ") ?? "not evaluated"],
      ["validity", m.validity.state, m.validity.reasons.join(" ")],
      ["status", h.get(m.artifactId)?.state ?? "not_established", h.get(m.artifactId)?.reason ?? "not evaluated"]
    ], A = xe(I.map((j) => j[1])), R = S.get(m.artifactId);
    y.set(m.artifactId, {
      uri: m.artifactId,
      usable: A,
      reason: I.filter((j) => j[1] !== "established").map((j) => `${j[0]}: ${j[2]}`).join("; ") || "usable",
      ...A === "established" ? { document: c(m.artifactId) } : {},
      ...R ? { suspension: { state: R.state, reason: R.reason } } : {}
    });
  }
  const d = [], l = [];
  f.forEach((m, I) => {
    const A = I === 0 ? "target" : "supplied-evidence", R = fr(m.artifactId, m.digestSRI, A, e);
    for (const O of m.checks)
      d.push({
        gate: om[O.check],
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
    const j = x.get(m.artifactId);
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
  for (const [m, I] of p)
    I.digestSRI !== void 0 && l.push({ uri: m, digestSRI: I.digestSRI, kind: "status", source: "catalog", observedAt: e.evaluationTime });
  return {
    target: u,
    artifacts: f,
    facts: y,
    verificationOf: v,
    artifactVerification: f.flatMap(v),
    trace: d,
    resources: l
  };
}
const nr = "RecognizedEntityCredential", Le = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Gt = (e) => typeof e == "string" && e.trim().length > 0, Hi = (e) => Array.isArray(e) ? e : Le(e) ? [e] : [], bl = (e) => Gt(e) ? e : Le(e) && Gt(e.id) ? e.id : void 0;
function Dm(e) {
  const t = e.bindingRules.recognition;
  if (t === void 0) return;
  if (!Le(t) || !Gt(t.recognizerPurpose) || !Gt(t.action) || !Le(t.purposes)) return "invalid";
  const n = {};
  for (const [i, o] of Object.entries(t.purposes)) {
    if (!Le(o) || !Gt(o.activity) || !Gt(o.standardId)) return "invalid";
    n[i] = { activity: o.activity, standardId: o.standardId };
  }
  return { recognizerPurpose: t.recognizerPurpose, action: t.action, purposes: n };
}
function zm(e) {
  return Hi(e.termsOfUse).filter(Le).filter((t) => t.type === "RmAuthorizationPolicy" && Le(t.authorizationCredential) && t.authorizationCredential.type === nr).map((t) => t.authorizationCredential.id).filter(Gt);
}
const ge = (e, t, n, i) => ({ id: e, state: t, reason: n, sources: i }), md = (e) => {
  if (!Le(e)) return "no main scope";
  const t = Le(e.standard) ? e.standard : {};
  return `${String(e.activity)} under ${String(t.name ?? t.id)}`;
};
function Um(e, t, n, i, o, r, s, a) {
  const c = ["/termsOfUse", t], u = s(t);
  if (u === void 0) return ge(e, "not_established", `Recognition ${t} is unavailable.`, c);
  if (u.usable !== "established" || u.document === void 0)
    return ge(
      e,
      u.usable === "contradicted" ? "contradicted" : "not_established",
      `Recognition ${t} is not usable: ${u.reason}`,
      c
    );
  const f = u.document;
  if (!Hi(f.type).includes(nr))
    return ge(e, "contradicted", `${t} is not a ${nr}.`, c);
  const g = bl(f.issuer), p = a.trustAnchors.find((l) => l.id === g);
  if (p === void 0 || !p.purposes.includes(o.recognizerPurpose))
    return ge(e, "not_established", `${String(g)}, issuer of ${t}, is not a configured anchor for ${o.recognizerPurpose}.`, c);
  if (u.suspension !== void 0 && u.suspension.state !== "established")
    return ge(
      e,
      u.suspension.state,
      u.suspension.state === "contradicted" ? `${String(g)} has suspended its recognition ${t}. ${u.suspension.reason}` : `The suspension status of ${t} is not established: ${u.suspension.reason}`,
      c
    );
  const h = Hi(f.credentialSubject).filter(Le), x = h.find((l) => l.id === n);
  if (x === void 0)
    return ge(
      e,
      "contradicted",
      `${t} recognizes ${h.map((l) => String(l.id)).join(", ") || "no subject"}, not ${n}, the grant's issuer.`,
      c
    );
  const w = Hi(x.recognizedTo).filter(Le);
  if (w.length === 0)
    return ge(
      e,
      "not_established",
      `${t} recognizes ${n} without recognized actions; this profile does not accept recognition without stated actions.`,
      c
    );
  const b = `${i.activity} under ${i.standardId}`, S = w.filter((l) => l.action === o.action && Le(l.mainScope) && l.mainScope.activity === i.activity && Le(l.mainScope.standard) && l.mainScope.standard.id === i.standardId);
  if (S.length === 0) {
    const l = w.map((m) => `${String(m.action)} (${md(m.mainScope)})`).join(", ");
    return ge(
      e,
      "contradicted",
      `${t} recognizes ${n} for ${l}, not to ${o.action} for ${b}.`,
      c
    );
  }
  const v = S.filter((l) => l.recognizedBy === void 0 || l.recognizedBy === g);
  if (v.length === 0)
    return ge(e, "contradicted", `The matching action in ${t} names another recognizer than its issuer ${String(g)}.`, c);
  const y = Date.parse(String(r));
  if (typeof r != "string" || !Number.isFinite(y))
    return ge(e, "not_established", "No activity time is stated, so recognition at that time is not established.", c);
  const d = v.find((l) => {
    const m = Date.parse(String(l.validFrom ?? f.validFrom)), I = Date.parse(String(l.validUntil ?? f.validUntil));
    return Number.isFinite(m) && Number.isFinite(I) && m <= y && y <= I;
  });
  return d === void 0 ? ge(e, "not_established", `${String(g)} did not recognize ${n} for ${b} at the activity time ${r}.`, c) : ge(
    e,
    "established",
    `${n} is recognized by ${String(g)} (a configured anchor for ${o.recognizerPurpose}) to ${o.action} for ${md(d.mainScope)}, in force at ${r}, in ${t}.`,
    c
  );
}
function yr(e, t, n, i, o, r) {
  const s = bl(t.issuer), a = i.trustAnchors.find((x) => x.id === s);
  if (a?.purposes.includes(n))
    return { basis: ge(e, "established", `${String(s)} is a configured anchor for ${n}.`, ["/issuer"]) };
  const c = a === void 0 ? `${String(s)} is not a configured trust anchor.` : `${String(s)} is an anchor, but not for ${n}.`, u = Dm(i);
  if (u === void 0) return { basis: ge(e, "not_established", c, ["/issuer"]) };
  if (u === "invalid")
    return { basis: ge(e, "not_established", `${c} The profile's recognition rules are malformed.`, ["/issuer"]) };
  const f = u.purposes[n];
  if (f === void 0 || s === void 0)
    return { basis: ge(e, "not_established", `${c} The profile accepts no recognition for ${n}.`, ["/issuer"]) };
  const g = zm(t);
  if (g.length === 0)
    return { basis: ge(
      e,
      "not_established",
      `${c} The grant points up to no ${nr} in its termsOfUse.`,
      ["/issuer", "/termsOfUse"]
    ) };
  const p = g.map((x) => ({ uri: x, result: Um(e, x, s, f, u, r, o, i) })), h = p.find((x) => x.result.state === "established");
  return h ? { basis: h.result, recognition: h.uri } : {
    basis: ge(
      e,
      pn(p.map((x) => x.result.state)),
      `${c} ${p.map((x) => x.result.reason).join(" ")}`,
      ["/issuer", "/termsOfUse", ...p.map((x) => x.uri)]
    )
  };
}
const Vm = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/, Ia = Object.freeze({ "kg/kg": 0, "mg/kg": -6 });
function gr(e) {
  if (typeof e != "string" || !Vm.test(e)) return;
  const [t, n = ""] = e.split(".");
  return { n: BigInt(`${t}${n}`), scale: n.length };
}
function Tn(e, t) {
  const n = gr(e), i = typeof t == "string" ? Ia[t] : void 0;
  if (!(n === void 0 || i === void 0))
    return i <= 0 ? { n: n.n, scale: n.scale - i } : { n: n.n * 10n ** BigInt(i), scale: n.scale };
}
function _e(e, t) {
  const n = Math.max(e.scale, t.scale), i = e.n * 10n ** BigInt(n - e.scale), o = t.n * 10n ** BigInt(n - t.scale);
  return i < o ? -1 : i > o ? 1 : 0;
}
function Gm(e, t) {
  const n = Math.max(e.scale, t.scale);
  return { n: e.n * 10n ** BigInt(n - e.scale) + t.n * 10n ** BigInt(n - t.scale), scale: n };
}
function An(e) {
  const t = e.n.toString().padStart(e.scale + 1, "0");
  if (e.scale === 0) return t;
  const n = t.slice(-e.scale).replace(/0+$/, "");
  return n.length === 0 ? t.slice(0, -e.scale) : `${t.slice(0, -e.scale)}.${n}`;
}
function Hs(e) {
  const t = e.range;
  if (t === void 0) return "Scope record has no range.";
  const n = Tn(t.from, t.unit), i = Tn(t.to, t.unit);
  return n === void 0 || i === void 0 ? `Unsupported or malformed range ${String(t.from)}–${String(t.to)} ${String(t.unit)}.` : _e(n, i) > 0 ? "Scope record range is reversed." : { low: n, high: i };
}
const Gi = (e) => Array.isArray(e) ? e.filter((t) => typeof t == "string") : [], yd = (e, t) => e.length > 0 && e.every((n) => t.includes(n));
function Fm(e, t) {
  if (e.length === 0) return { state: "not_established", reason: "The projected scope has no records.", witnesses: [] };
  const n = [];
  for (const i of e) {
    const o = Hs(i);
    if (typeof o == "string")
      return { state: /reversed/.test(o) ? "contradicted" : "not_established", reason: `${String(i.id)}: ${o}`, witnesses: n };
    const r = Gi(i.allowedPropertyIris), s = Gi(i.allowedMethodIris);
    if (r.length === 0 || s.length === 0 || typeof i.matrixIri != "string" || typeof i.formIri != "string" || typeof i.quantityKindIri != "string")
      return { state: "not_established", reason: `${String(i.id)}: a restricted dimension is missing or empty.`, witnesses: n };
    const a = t.find((c) => {
      const u = Hs(c);
      return typeof u != "string" && c.matrixIri === i.matrixIri && c.formIri === i.formIri && c.quantityKindIri === i.quantityKindIri && yd(r, Gi(c.allowedPropertyIris)) && yd(s, Gi(c.allowedMethodIris)) && _e(o.low, u.low) >= 0 && _e(o.high, u.high) <= 0;
    });
    if (a === void 0)
      return { state: "contradicted", reason: `${String(i.id)} is not contained in any single parent record.`, witnesses: n };
    n.push({ child: String(i.id), parent: String(a.id) });
  }
  return { state: "established", reason: `Each projected record lies within one parent record (${n.map((i) => `${i.child} ⊆ ${i.parent}`).join("; ")}).`, witnesses: n };
}
const qn = "https://vc4qi.example/bindings/rm/1#", Rn = Object.freeze({
  issueRmCertificate: `${qn}issueRmCertificate`,
  maintainRmScope: `${qn}maintainRmScope`,
  issueRmStudy: `${qn}issueRmStudy`
}), $e = (e, t, n = []) => ({ id: e, state: "established", reason: t, sources: n }), Ge = (e, t, n = []) => ({ id: e, state: "contradicted", reason: t, sources: n }), me = (e, t, n = []) => ({ id: e, state: "not_established", reason: t, sources: n }), kt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Ve = (e) => Array.isArray(e) ? e : [], Te = (e) => kt(e.credentialSubject) ? e.credentialSubject : {}, Js = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0, dt = (e, t) => Ve(Te(e).permittedActivity).includes(t);
function wl(e, t = "RmAuthorizationPolicy") {
  return Ve(e.termsOfUse).filter(kt).filter((n) => n.type === t && kt(n.authorizationCredential)).map((n) => n.authorizationCredential).filter((n) => typeof n.id == "string").map((n) => ({ id: n.id, type: n.type }));
}
function Ye(e, t, n, i, o, r = "RmAuthorizationPolicy") {
  const s = wl(t, r).filter((u) => u.type === n).map((u) => u.id);
  if (s.length === 0)
    return { basis: me(e, `No recognized authorization policy references a ${n}.`, ["/termsOfUse"]) };
  if (s.length > 1)
    return { basis: me(e, `Several ${n} references; this binding has no deterministic selection.`, ["/termsOfUse"]) };
  const a = s[0];
  if (o.includes(a))
    return { basis: me(e, `Circular authorization: ${a} is already on the evaluation path.`, ["/termsOfUse", a]) };
  const c = i(a);
  return c === void 0 ? { basis: me(e, `Referenced ${n} ${a} is unavailable.`, ["/termsOfUse", a]) } : c.usable !== "established" || c.document === void 0 ? { basis: {
    id: e,
    state: c.usable === "contradicted" ? "contradicted" : "not_established",
    reason: `Referenced ${n} ${a} is not usable: ${c.reason}`,
    sources: ["/termsOfUse", a]
  } } : Js(c.document) !== n ? { basis: Ge(e, `Reference declares ${n}, but ${a} is a ${String(Js(c.document))}.`, ["/termsOfUse", a]) } : { basis: $e(e, `References ${n} ${a}.`, ["/termsOfUse", a]), node: c };
}
function pt(e, t, n, i) {
  const o = Te(t).id;
  return typeof o != "string" || typeof n != "string" ? me(e, `${i}: grantee or exercising actor is missing.`, ["/credentialSubject/id", "/issuer"]) : o === n ? $e(e, `${i}: grantee ${o} is the exercising actor.`, ["/credentialSubject/id", "/issuer"]) : Ge(e, `${i}: grantee ${o} is not the exercising actor ${n}.`, ["/credentialSubject/id", "/issuer"]);
}
function On(e, t, n, i) {
  const o = i.trustAnchors.find((r) => r.id === t.issuer);
  return o === void 0 ? me(e, `${String(t.issuer)} is not a configured trust anchor.`, ["/issuer"]) : o.purposes.includes(n) ? $e(e, `${String(t.issuer)} is a configured anchor for ${n}.`, ["/issuer"]) : me(e, `${String(t.issuer)} is an anchor, but not for ${n}.`, ["/issuer"]);
}
function Ot(e, t) {
  const n = "scope-in-force-at-activity", i = Te(e).activityTime, o = Date.parse(String(i));
  if (typeof i != "string" || !Number.isFinite(o))
    return me(n, "The certificate states no activity time.", ["/credentialSubject/activityTime"]);
  for (const [r, s] of t) {
    const a = Date.parse(String(s.validFrom)), c = Date.parse(String(s.validUntil));
    if (!Number.isFinite(a) || o < a)
      return me(n, `${r} is valid only from ${String(s.validFrom)}, after the activity at ${i}; a later scope cannot authorize it.`, ["/credentialSubject/activityTime", "/validFrom"]);
    if (Number.isFinite(c) && o > c)
      return me(n, `${r} expired at ${String(s.validUntil)}, before the activity at ${i}.`, ["/credentialSubject/activityTime", "/validUntil"]);
  }
  return $e(n, `${t.map((r) => r[0]).join(" and ")} ${t.length > 1 ? "were" : "was"} in force at the activity time ${i}.`, ["/credentialSubject/activityTime"]);
}
function pe(e, t, n, i) {
  return { id: e, state: xe(t.map((o) => o.state)), execution: "executed", bases: t, chain: n, ...i ? { scope: i } : {} };
}
function Bm(e, t, n, i) {
  const o = e.document, r = [], s = [e.uri], a = Ye("authorizing-reference", o, "RmOperationalScope", t, i);
  if (r.push(a.basis), !a.node) return pe("operational-scope", r, s);
  const c = a.node.document;
  s.push(a.node.uri), r.push(pt("principal-binding", c, o.issuer, "Operational scope O")), r.push(c.issuer === Te(c).id ? $e("self-maintained-scope", "O is issued by its own grantee.", ["/issuer"]) : Ge("self-maintained-scope", "O is not issued by its own grantee.", ["/issuer"])), r.push(dt(c, Rn.issueRmCertificate) ? $e("activity-permission", "O permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : Ge("activity-permission", "O does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"]));
  const u = Ye("maintenance-grant", c, "RmAccreditation", t, [...i, a.node.uri]);
  if (r.push(u.basis), !u.node) return pe("operational-scope", r, s);
  const f = u.node.document;
  s.push(u.node.uri), r.push(pt("accreditation-grantee", f, c.issuer, "Accreditation A")), r.push(dt(f, Rn.maintainRmScope) && dt(f, Rn.issueRmCertificate) ? $e("projection-permission", "A permits maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]) : Ge("projection-permission", "A does not permit maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]));
  const g = Fm(Ve(Te(c).scope).filter(kt), Ve(Te(f).scope).filter(kt));
  r.push({ id: "bounded-projection", state: g.state, reason: g.reason, sources: ["/credentialSubject/scope"] });
  const p = yr("trust-anchor", f, "accredit-rm-producers", n, t, Te(o).activityTime);
  return r.push(p.basis), p.recognition && s.push(p.recognition), r.push(Ot(o, [["O", c], ["A", f]])), pe("operational-scope", r, s, a.node.uri);
}
function Zm(e, t, n, i) {
  const o = e.document, r = [], s = [e.uri], a = Ye("authorizing-reference", o, "RmAccreditation", t, i);
  if (r.push(a.basis), !a.node) return pe("direct-accreditation", r, s);
  const c = a.node.document;
  s.push(a.node.uri), r.push(pt("principal-binding", c, o.issuer, "Accreditation A")), r.push(dt(c, Rn.issueRmCertificate) ? $e("activity-permission", "A permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : Ge("activity-permission", "A does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"]));
  const u = yr("trust-anchor", c, "accredit-rm-producers", n, t, Te(o).activityTime);
  return r.push(u.basis), u.recognition && s.push(u.recognition), r.push(Ot(o, [["A", c]])), pe("direct-accreditation", r, s, a.node.uri);
}
const Hm = Object.freeze({
  "operational-scope": Bm,
  "direct-accreditation": Zm
});
function Jm(e, t, n) {
  const i = "restriction:accreditation-suspension", o = e.document.issuer, r = /* @__PURE__ */ new Set([e.uri]), s = [e.document], a = [];
  for (; s.length > 0; )
    for (const f of wl(s.shift())) {
      if (r.has(f.id)) continue;
      r.add(f.id);
      const g = t(f.id);
      if (g?.usable !== "established" || g.document === void 0) continue;
      s.push(g.document);
      const p = g.document;
      Js(p) === "RmAccreditation" && Te(p).id === o && yr(
        "anchor",
        p,
        "accredit-rm-producers",
        n,
        t,
        Te(e.document).activityTime
      ).basis.state === "established" && a.push(g);
    }
  if (a.length === 0)
    return me(i, `No accreditation of ${String(o)} is reached, so the absence of a suspension is not established.`);
  const c = a.map((f) => f.suspension === void 0 ? me(i, `${f.uri} carries no suspension status.`, [f.uri]) : { id: i, state: f.suspension.state, reason: `${f.uri}: ${f.suspension.reason}`, sources: [f.uri] }), u = xe(c.map((f) => f.state));
  return {
    id: i,
    state: u,
    reason: u === "contradicted" ? `The actor's certification activity is suspended. ${c.filter((f) => f.state === "contradicted").map((f) => f.reason).join(" ")}` : c.map((f) => f.reason).join(" "),
    sources: a.map((f) => f.uri)
  };
}
const Km = Object.freeze({
  "accreditation-suspension": Jm
});
function Ln(e, t, n) {
  const i = [
    ...t,
    ...n.map((u) => ({ id: u, state: "not_established", execution: "not_run", bases: [], chain: [] }))
  ], o = e.length === 0 ? "established" : xe(e.map((u) => u.state)), r = i.length === 0 ? "not_established" : pn(i.map((u) => u.state)), s = xe([o, r]), a = i.find((u) => u.state === "established"), c = s === "established" ? `Authorized through route ${a.id}; global restrictions hold.` : o === "contradicted" ? "An applicable global restriction applies to every route." : r === "contradicted" ? "Every permitted route is contradicted." : n.length > 0 ? "The route search stopped at its budget before every route was evaluated." : "No complete route is established.";
  return { state: s, reason: c, restrictions: e, routes: i };
}
function vr(e, t) {
  const n = e.routes.filter((o) => o.execution === "executed").map((o) => {
    const s = (o.scope === void 0 ? void 0 : t(o)) ?? me("claim-coverage", "The route did not reach a scope credential.");
    return { ...o, bases: [...o.bases, s], state: xe([o.state, s.state]) };
  }), i = e.routes.filter((o) => o.execution === "not_run").map((o) => o.id);
  return Ln(e.restrictions, n, i);
}
function Qm(e, t, n) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] };
  const i = e, o = n.authority.certificateRoutes, r = n.authority.maxRoutes, s = o.slice(0, r).map((c) => {
    const u = Hm[c];
    return u === void 0 ? pe(c, [me("installed-evaluator", `Route ${c} has no installed evaluator.`)], [i.uri]) : u(i, t, n, [i.uri]);
  }), a = n.authority.globalRestrictions.map((c) => {
    const u = Km[c];
    return u === void 0 ? me(`restriction:${c}`, `Global restriction ${c} has no installed evaluator.`) : u(i, t, n);
  });
  return Ln(a, s, o.slice(r));
}
function Wm(e, t, n, i) {
  const o = e.document, r = [], s = [e.uri], a = Ye("laboratory-authority-reference", o, "RmLabAuthority", t, i);
  if (r.push(a.basis), !a.node) return pe("laboratory-authority", r, s);
  const c = a.node.document;
  s.push(a.node.uri), r.push(pt("laboratory-binding", c, o.issuer, "Laboratory authority H")), r.push(dt(c, Rn.issueRmStudy) ? $e("study-permission", "H permits issuing RM studies.", ["/credentialSubject/permittedActivity"]) : Ge("study-permission", "H does not permit issuing RM studies.", ["/credentialSubject/permittedActivity"]));
  const u = Te(o), f = Ve(Te(c).scope).filter(kt).some((p) => p.matrixIri === u.matrixIri && Ve(p.allowedPropertyIris).includes(u.propertyIri) && Ve(p.studyTypeIris).includes(u.studyTypeIri));
  r.push(f ? $e("study-scope", "H covers this matrix, property and study type.", ["/credentialSubject/scope"]) : Ge("study-scope", "H does not cover this matrix, property and study type.", ["/credentialSubject/scope"]));
  const g = yr("laboratory-anchor", c, "accredit-rm-laboratories", n, t, u.activityTime);
  return r.push(g.basis), g.recognition && s.push(g.recognition), pe("laboratory-authority", r, s);
}
function Xm(e, t, n) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const i = e.document, o = Ve(i.evidence).filter(kt).filter((S) => S.type === "RmStudyReference").map((S) => String(S.id));
  if (o.length === 0)
    return { state: "not_established", reason: "D cites no required study.", bases: [me("study-reference", "No RmStudyReference in evidence.", ["/evidence"])], chain: [e.uri] };
  if (o.length > 1)
    return { state: "not_established", reason: "Several study references; this binding has no composition for them.", bases: [me("study-reference", "Ambiguous study references.", ["/evidence"])], chain: [e.uri] };
  const r = o[0], s = t(r);
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
  const a = s.document, c = Te(a), u = Te(i), f = kt(Ve(u.materialPropertiesList)[0]) ? Ve(Ve(u.materialPropertiesList)[0].results)[0] : void 0, g = Ve(u.materials)[0], p = [$e("study-reference", `Cites study ${r}.`, ["/evidence", r])];
  p.push(c.id === u.id ? $e("same-batch", `S concerns batch ${String(c.id)}.`, ["/credentialSubject/id"]) : Ge("same-batch", `S concerns ${String(c.id)}, not batch ${String(u.id)}.`, ["/credentialSubject/id"])), p.push(c.propertyIri === f?.propertyIri && c.matrixIri === g?.matrixIri ? $e("same-property-and-matrix", "S concerns the certified property and matrix.", ["/credentialSubject/propertyIri"]) : Ge("same-property-and-matrix", "S concerns another property or matrix.", ["/credentialSubject/propertyIri"])), p.push(c.studyTypeIri === `${qn}Homogeneity` && c.outcomeIri === `${qn}Homogeneous` ? $e("study-outcome", "S reports the batch homogeneous.", ["/credentialSubject/outcomeIri"]) : Ge("study-outcome", "S does not report a homogeneous batch.", ["/credentialSubject/outcomeIri"]));
  const h = Date.parse(String(c.activityTime)), x = Date.parse(String(u.activityTime));
  p.push(Number.isFinite(h) && Number.isFinite(x) ? h <= x ? $e("study-precedes-certification", "The study precedes the certification activity.", ["/credentialSubject/activityTime"]) : Ge("study-precedes-certification", "The study postdates the certification activity.", ["/credentialSubject/activityTime"]) : me("study-precedes-certification", "An activity time is missing.", ["/credentialSubject/activityTime"]));
  const w = Wm(s, t, n, [e.uri, r]);
  p.push(...w.bases);
  const b = xe(p.map((S) => S.state));
  return {
    state: b,
    reason: b === "established" ? "Required study is applicable and independently authorized." : b === "contradicted" ? "Required study is contradicted." : "Required study is not established.",
    bases: p,
    chain: [e.uri, ...w.chain]
  };
}
const Ut = (e) => e !== null && typeof e == "object" && !Array.isArray(e), xl = (e) => Array.isArray(e) ? e : [], gd = (e) => xl(e).filter((t) => typeof t == "string"), le = (e) => String(e).split(/[#/]/).pop();
function Ym(e, t, n) {
  const i = [t], o = Ut(e.credentialSubject) ? e.credentialSubject : {}, r = xl(o.materials).filter(Ut);
  if (r.length !== 1) return { state: "not_established", reason: "The certificate must name exactly one material.", sources: ["/credentialSubject/materials"] };
  const s = r[0];
  if (!Ut(n)) return { state: "not_established", reason: `No result at ${t}.`, sources: i };
  const a = Ut(n.data) && Ut(n.data.quantity) ? n.data.quantity : void 0;
  if (a === void 0) return { state: "not_established", reason: "The result has no quantity.", sources: i };
  const c = Ut(a.unit) ? a.unit.ucumCode : void 0;
  if (typeof c != "string" || Ia[c] === void 0)
    return { state: "not_established", reason: `Unit ${String(c)} has no supported mapping (mg/kg, kg/kg).`, sources: [`${t}/data/quantity/unit`] };
  const u = Ut(a.uncertainty) ? a.uncertainty : void 0, f = gr(u?.coverageFactor);
  if (f === void 0 || _e(f, { n: 2n, scale: 0 }) !== 0)
    return { state: "not_established", reason: `Coverage factor ${String(u?.coverageFactor)} is not the binding's k = 2.`, sources: [`${t}/data/quantity/uncertainty`] };
  const g = Tn(a.value, c), p = Tn(u?.expandedUncertainty, c);
  if (g === void 0 || p === void 0)
    return { state: "not_established", reason: "Value or expanded uncertainty is not a supported decimal.", sources: [`${t}/data/quantity`] };
  const h = {
    matrixIri: s.matrixIri,
    formIri: s.formIri,
    propertyIri: n.propertyIri,
    methodIri: n.methodIri,
    quantityKindIri: a.quantityKind
  }, x = Object.entries(h).filter(([, w]) => typeof w != "string").map(([w]) => w);
  return x.length > 0 ? { state: "not_established", reason: `Missing governed identifier: ${x.join(", ")}.`, sources: i } : {
    state: "established",
    reason: `Mapped ${le(h.propertyIri)} by ${le(h.methodIri)} in ${le(h.matrixIri)}: ${String(a.value)} ± ${String(u?.expandedUncertainty)} ${c} (k = 2).`,
    sources: i,
    coordinates: { ...h, value: g, uncertainty: p }
  };
}
function ey(e, t, n, i) {
  if (t.includes(e)) return { state: "established", reason: `method ${le(e)}` };
  const o = n.find((s) => s.method === e && t.includes(s.revises));
  if (o === void 0) return { state: "contradicted", reason: `method ${le(e)} is not allowed` };
  const r = `${le(o.revises)} → ${le(e)}`;
  switch (i) {
    case "accept-successor":
      return { state: "established", reason: `method ${le(e)} as accepted successor (${r})` };
    case "require-extension":
      return { state: "contradicted", reason: `method ${le(e)} needs an explicit scope extension (${r})` };
    default:
      return { state: "not_established", reason: `no governed ${r} succession rule in the profile` };
  }
}
function ty(e, t, n, i) {
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: ["/credentialSubject/scope"] };
  const o = t.map((a) => {
    const c = String(a.id), u = Hs(a);
    if (typeof u == "string")
      return { id: c, state: /reversed/.test(u) ? "contradicted" : "not_established", reason: `${le(c)}: ${u}` };
    const f = [];
    a.matrixIri !== e.matrixIri && f.push(`matrix ${le(e.matrixIri)} ≠ ${le(a.matrixIri)}`), a.formIri !== e.formIri && f.push(`form ${le(e.formIri)} ≠ ${le(a.formIri)}`), a.quantityKindIri !== e.quantityKindIri && f.push(`quantity kind ${le(e.quantityKindIri)} ≠ ${le(a.quantityKindIri)}`), gd(a.allowedPropertyIris).includes(e.propertyIri) || f.push(`property ${le(e.propertyIri)} is not allowed`), _e(e.value, u.low) < 0 && f.push("value is below the range"), _e(e.value, u.high) > 0 && f.push("value is above the range");
    const g = ey(e.methodIri, gd(a.allowedMethodIris), n, i);
    if (f.length > 0 || g.state === "contradicted")
      return { id: c, state: "contradicted", reason: `${le(c)}: ${[...f, ...g.state === "contradicted" ? [g.reason] : []].join("; ")}` };
    if (g.state === "not_established") return { id: c, state: "not_established", reason: `${le(c)}: ${g.reason}` };
    const p = An(Ji(u.low, "mg/kg")), h = An(Ji(u.high, "mg/kg"));
    return {
      id: c,
      state: "established",
      reason: `${le(c)} covers ${le(e.propertyIri)}, ${g.reason}, ${le(e.matrixIri)}/${le(e.formIri)}, ${An(Ji(e.value, "mg/kg"))} mg/kg within ${p}–${h} mg/kg`
    };
  }), r = pn(o.map((a) => a.state)), s = o.find((a) => a.state === "established");
  return {
    state: r,
    reason: s ? s.reason : `No single scope record covers the claim (${o.map((a) => a.reason).join(" | ")}).`,
    sources: ["/credentialSubject/scope"],
    ...s ? { record: s.id } : {}
  };
}
function Ji(e, t) {
  const n = Ia[t];
  return n >= 0 ? { n: e.n, scale: e.scale + n } : e.scale + n >= 0 ? { n: e.n, scale: e.scale + n } : { n: e.n * 10n ** BigInt(-(e.scale + n)), scale: 0 };
}
function ny(e, t, n) {
  if (e.propertyIri !== t.propertyIri || e.quantityKindIri !== t.quantityKindIri)
    return { state: "not_established", reason: `Requirement ${t.id} does not apply to this claim's property and quantity kind.`, sources: [] };
  const i = Tn(t.upperLimit.value, t.upperLimit.unit);
  if (i === void 0) return { state: "not_established", reason: `Requirement ${t.id} has an unsupported limit.`, sources: [] };
  const o = t.upperLimit.unit, r = (g) => An(Ji(g, o)), s = n.acceptWhen === "value-plus-expanded-uncertainty-at-most-limit", a = s ? Gm(e.value, e.uncertainty) : e.value, c = _e(a, i) <= 0, f = `${s ? `${r(e.value)} + ${r(e.uncertainty)} = ${r(a)}` : r(e.value)} ${c ? "≤" : ">"} ${r(i)} ${o}`;
  return {
    state: c ? "established" : "contradicted",
    reason: `${c ? "Conforms" : "Does not conform"} under ${n.id}: ${f}.`,
    sources: [],
    arithmetic: f
  };
}
const iy = /^\/credentialSubject\/materialPropertiesList\/(0|[1-9][0-9]*)\/results\/(0|[1-9][0-9]*)$/;
async function ry(e, t, n, i) {
  if (n.id !== La || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${La}@${n.version}.`);
  const o = wa(e, n, i);
  if (o !== void 0) return Object.freeze({ result: xa(e, o), artifacts: Object.freeze([]) });
  const r = await Sa(e, t, n, i), { target: s, artifacts: a, facts: c, verificationOf: u, artifactVerification: f } = r, g = (P) => c.get(P), p = Qm(c.get(e.targetId), g, i), h = Xm(c.get(e.targetId), g, i), x = p.routes.find((P) => P.state === "established"), w = c.get(e.targetId)?.document, b = (Array.isArray(n.scopeAndMapping.methodRevisions) ? n.scopeAndMapping.methodRevisions : []).filter((P) => typeof P?.method == "string" && typeof P?.revises == "string"), S = (P) => {
    const C = c.get(P)?.document?.credentialSubject;
    return Array.isArray(C?.scope) ? C.scope : [];
  }, v = e.selectedClaims.map((P) => {
    if (!(w !== void 0 && iy.test(P.sourcePointer) && ln(w, P.sourcePointer) !== void 0)) {
      const M = w === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${P.sourcePointer} is not a result in the usable target.`;
      return {
        claim: P,
        mapping: void 0,
        coverage: /* @__PURE__ */ new Map(),
        result: { claimId: P.id, routeWitnessIds: [], ...ce("not_established", [M]) }
      };
    }
    const D = Ym(w, P.sourcePointer, ln(w, P.sourcePointer)), _ = /* @__PURE__ */ new Map();
    if (D.coordinates === void 0)
      return { claim: P, mapping: D, coverage: _, result: {
        claimId: P.id,
        routeWitnessIds: [],
        ...ce(D.state, [`Gate 4: ${D.reason}`], [P.sourcePointer])
      } };
    const F = D.coordinates, L = vr(p, (M) => {
      const U = ty(F, S(M.scope), b, i.mapping.methodSuccession), N = [M.scope, ...U.sources];
      return _.set(M.id, { ...U, sources: N }), { id: "claim-coverage", state: U.state, reason: U.reason, sources: N };
    }), G = L.routes.find((M) => M.state === "established"), k = G ? _.get(G.id)?.record : void 0;
    return { claim: P, mapping: D, coverage: _, result: {
      claimId: P.id,
      routeWitnessIds: L.state === "established" && G ? [`route:${G.id}`, ...G.chain, `record:${k}`] : [],
      ...ce(L.state, [
        L.reason,
        ...G ? [_.get(G.id).reason] : [..._].map(([M, U]) => `${M}: ${U.reason}`)
      ], [P.sourcePointer])
    } };
  }), y = v.map((P) => P.result), d = [{
    obligationId: "rm-v1:required-study",
    witnessIds: h.state === "established" ? [...h.chain] : [],
    ...ce(h.state, [h.reason], ["/evidence"])
  }], l = (() => {
    if (!e.conformity) return { requested: !1, execution: "not_run" };
    const P = { requested: !0, ...e.conformity }, C = i.conformity.requirements.find((G) => G.id === e.conformity.requirementId), D = i.conformity.decisionRules.find((G) => G.id === e.conformity.decisionRuleId);
    if (!C || !D)
      return { ...P, ...ce("not_established", [`Requirement ${e.conformity.requirementId} or decision rule ${e.conformity.decisionRuleId} is not configured in the verifier profile.`]) };
    const _ = v.filter((G) => G.mapping?.coordinates?.propertyIri === C.propertyIri && G.mapping.coordinates.quantityKindIri === C.quantityKindIri);
    if (_.length !== 1)
      return { ...P, ...ce("not_established", [`Requirement ${C.id} must apply to exactly one selected claim; ${_.length} match.`]) };
    const F = _[0];
    if (F.result.state !== "established")
      return { ...P, ...un(`Not evaluated: claim ${F.claim.id} is not authorized.`) };
    const L = ny(F.mapping.coordinates, C, D);
    return { ...P, ...ce(L.state, [L.reason], [F.claim.sourcePointer]) };
  })(), m = /* @__PURE__ */ new Set([
    e.targetId,
    ...x?.chain ?? [],
    ...h.state === "established" ? h.chain : []
  ]), I = [
    ...a.filter((P) => m.has(P.artifactId)).flatMap(u).filter((P) => m.has(P.artifactId)).map((P) => P.state),
    ...y.map((P) => P.state),
    ...d.map((P) => P.state),
    ...l.requested ? [l.state] : []
  ], A = ra(I), R = [...r.trace], j = [...r.resources], E = fr(s.artifactId, s.digestSRI, "target", e);
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
  for (const P of p.restrictions)
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
    state: p.state,
    execution: "executed",
    reason: p.reason,
    sources: x ? [...x.chain] : []
  });
  for (const P of p.routes) {
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
  const O = sr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: f,
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
const Ks = "https://vc4qi.example/bindings/cal/1", sy = "https://vc4qi.example/contexts/cal/1", Qs = "https://vc4qi.example/bindings/cal/1#", tn = "https://vc4qi.example/schemas/cal/1/", ay = Object.freeze({
  name: "calibration v1",
  schemas: Object.freeze({
    CalAccreditation: `${tn}accreditation.json`,
    CalOperationalScope: `${tn}operational-scope.json`,
    CalLegalMandate: `${tn}legal-mandate.json`,
    CalCertificate: `${tn}certificate.json`,
    CalTestReport: `${tn}test-report.json`,
    BitstringStatusListCredential: `${tn}status-list.json`
  }),
  contexts: (e) => e === "BitstringStatusListCredential" ? [Ft] : [Ft, sy]
}), Pe = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Be = (e) => Array.isArray(e) ? e : [], ae = (e) => String(e).split(/[#/]/).pop(), oy = Object.freeze({ Pa: 0, kPa: 3, MPa: 6 });
function Xe(e, t) {
  const n = gr(e), i = typeof t == "string" ? oy[t] : void 0;
  if (!(n === void 0 || i === void 0))
    return n.scale >= i ? { n: n.n, scale: n.scale - i } : { n: n.n * 10n ** BigInt(i - n.scale), scale: 0 };
}
const je = (e) => An({ n: e.n, scale: e.scale + 3 });
function Sl(e, t) {
  const n = [t];
  if (!Pe(e) || typeof e.id != "string" || typeof e.quantityKindIri != "string")
    return { state: "not_established", reason: "The selected measurement group has no identifier or quantity kind.", sources: n };
  const i = [];
  for (const [r, s] of Be(e.results).entries()) {
    const a = Pe(s) ? s : {}, c = gr(a.coverageFactor);
    if (c === void 0 || _e(c, { n: 2n, scale: 0 }) !== 0)
      return { state: "not_established", reason: `Result ${r}: coverage factor ${String(a.coverageFactor)} is not the binding's k = 2.`, sources: n };
    const u = Xe(a.value, a.unit), f = Xe(a.expandedUncertainty, a.unit);
    if (u === void 0 || f === void 0)
      return { state: "not_established", reason: `Result ${r}: unit ${String(a.unit)} or a number has no supported mapping (Pa, kPa, MPa).`, sources: n };
    i.push({ value: u, uncertainty: f });
  }
  if (i.length === 0) return { state: "not_established", reason: "The measurement group has no results.", sources: n };
  const o = Be(e.methodIris).filter((r) => typeof r == "string");
  return {
    state: "established",
    reason: `Mapped ${ae(e.id)}: ${ae(e.quantityKindIri)}, ${i.length} result(s) in Pa, methods [${o.map(ae).join(", ")}].`,
    sources: n,
    group: { id: e.id, quantityKindIri: e.quantityKindIri, methodIris: o, results: i }
  };
}
function Il(e, t, n) {
  const i = ["/credentialSubject/scope"];
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: i };
  const o = t.map((a) => {
    const c = String(a.id), u = Pe(a.range) ? a.range : {}, f = Xe(u.from, u.unit), g = Xe(u.to, u.unit);
    if (f === void 0 || g === void 0) return { id: c, state: "not_established", reason: `${ae(c)}: unsupported or malformed range.` };
    if (_e(f, g) > 0) return { id: c, state: "contradicted", reason: `${ae(c)}: range is reversed.` };
    const p = Pe(a.cmcFloor) ? a.cmcFloor : void 0, h = p === void 0 ? void 0 : Xe(p.value, p.unit);
    if (p !== void 0 && h === void 0) return { id: c, state: "not_established", reason: `${ae(c)}: unsupported CMC floor.` };
    const x = [];
    a.quantityKindIri !== e.quantityKindIri && x.push(`quantity kind ${ae(e.quantityKindIri)} ≠ ${ae(a.quantityKindIri)}`);
    const w = Be(a.allowedMethodIris).filter((S) => typeof S == "string"), b = e.methodIris.filter((S) => !w.includes(S));
    return b.length > 0 && x.push(`method ${b.map(ae).join(", ")} is not allowed`), e.results.forEach((S, v) => {
      (_e(S.value, f) < 0 || _e(S.value, g) > 0) && x.push(`result ${v} ${je(S.value)} kPa is outside ${je(f)}–${je(g)} kPa`), n && h !== void 0 && _e(S.uncertainty, h) < 0 && x.push(`result ${v} U = ${je(S.uncertainty)} kPa is below the admitted CMC ${je(h)} kPa`);
    }), x.length > 0 ? { id: c, state: "contradicted", reason: `${ae(c)}: ${x.join("; ")}` } : e.methodIris.length === 0 && w.length > 0 ? {
      id: c,
      state: "not_established",
      reason: `${ae(c)} restricts methods to [${w.map(ae).join(", ")}], but the group names no governed method.`
    } : {
      id: c,
      state: "established",
      reason: `${ae(c)} covers ${ae(e.id)}: ${ae(e.quantityKindIri)}, methods [${e.methodIris.map(ae).join(", ")}], ${e.results.length} result(s) within ${je(f)}–${je(g)} kPa${n && h !== void 0 ? ` and not below the CMC ${je(h)} kPa` : ""}`
    };
  }), r = pn(o.map((a) => a.state)), s = o.find((a) => a.state === "established");
  return s ? { state: r, reason: s.reason, sources: i, record: s.id } : { state: r, reason: `No single scope record covers the group (${o.map((a) => a.reason).join(" | ")}).`, sources: i };
}
function cy(e, t, n) {
  const i = ["/credentialSubject/scope"];
  if (e.length === 0) return { state: "not_established", reason: "The operational scope has no records.", sources: i };
  const o = e.map((s) => {
    const a = Pe(s.range) ? s.range : {}, c = Xe(a.from, a.unit), u = Xe(a.to, a.unit), f = Pe(s.cmcFloor) ? s.cmcFloor : void 0, g = f === void 0 ? void 0 : Xe(f.value, f.unit);
    if (c === void 0 || u === void 0 || f !== void 0 && g === void 0)
      return { state: "not_established", reason: `${ae(s.id)}: unsupported or malformed range or CMC floor.` };
    const p = Be(s.allowedMethodIris), h = t.map((w) => {
      const b = Pe(w.range) ? w.range : {}, S = Xe(b.from, b.unit), v = Xe(b.to, b.unit), y = Pe(w.cmcFloor) ? w.cmcFloor : void 0, d = y === void 0 ? void 0 : Xe(y.value, y.unit);
      if (S === void 0 || v === void 0 || y !== void 0 && d === void 0)
        return { state: "not_established", reason: `${ae(w.id)}: unsupported or malformed range or CMC floor.` };
      const l = [];
      s.quantityKindIri !== w.quantityKindIri && l.push(`quantity kind ${ae(s.quantityKindIri)} ≠ ${ae(w.quantityKindIri)}`);
      const m = Be(w.allowedMethodIris), I = p.filter((A) => !m.includes(A));
      return p.length === 0 && m.length > 0 && l.push("the parent restricts methods, the child does not"), I.length > 0 && l.push(`method ${I.map(ae).join(", ")} is not in ${ae(w.id)}`), (_e(c, S) < 0 || _e(u, v) > 0) && l.push(`range ${je(c)}–${je(u)} kPa is not within ${je(S)}–${je(v)} kPa`), n && d !== void 0 && (g === void 0 ? l.push(`it states no CMC floor, but ${ae(w.id)} admits only ${je(d)} kPa`) : _e(g, d) < 0 && l.push(`CMC ${je(g)} kPa is below the admitted ${je(d)} kPa`)), l.length > 0 ? { state: "contradicted", reason: `${ae(s.id)} widens ${ae(w.id)}: ${l.join("; ")}` } : { state: "established", reason: `${ae(s.id)} lies within ${ae(w.id)}` };
    });
    if (h.length === 0) return { state: "not_established", reason: "The parent grant has no records." };
    const x = pn(h.map((w) => w.state));
    return x === "established" ? h.find((w) => w.state === "established") : { state: x, reason: h.map((w) => w.reason).join(" | ") };
  }), r = qa(o.map((s) => s.state));
  return { state: r, reason: `${r === "established" ? "Bounded projection holds" : "Bounded projection fails"}: ${o.map((s) => s.reason).join("; ")}.`, sources: i };
}
const Bt = (e) => Pe(e.credentialSubject) ? e.credentialSubject : {}, Aa = (e, t, n, i, o) => dt(t, `${Qs}${n}`) ? { id: e, state: "established", reason: `${o} permits ${i}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: e, state: "contradicted", reason: `${o} does not permit ${i}.`, sources: ["/credentialSubject/permittedActivity"] }, dy = Object.freeze({
  CalCertificate: { activity: "issueCalibrationCertificate", what: "issuing calibration certificates", purpose: "accredit-calibration-laboratories" },
  CalTestReport: { activity: "issueTestReport", what: "issuing test reports", purpose: "accredit-testing-laboratories" }
}), ir = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0;
function ly(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = dy[ir(i) ?? ""];
  if (s === void 0)
    return pe("direct-accreditation", [{
      id: "target-type",
      state: "not_established",
      reason: `No accreditation activity is installed for ${String(ir(i))}.`,
      sources: ["/type"]
    }], r);
  const a = Ye("authorizing-reference", i, "CalAccreditation", t, [e.uri], "CalAuthorizationPolicy");
  if (o.push(a.basis), !a.node) return pe("direct-accreditation", o, r);
  const c = a.node.document;
  return r.push(a.node.uri), o.push(pt("principal-binding", c, i.issuer, "Accreditation CA")), o.push(Aa("activity-permission", c, s.activity, s.what, "CA")), o.push(On("trust-anchor", c, s.purpose, n)), o.push(Ot(i, [["CA", c]])), pe("direct-accreditation", o, r, a.node.uri);
}
function uy(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = Ye("authorizing-reference", i, "CalOperationalScope", t, [e.uri], "CalAuthorizationPolicy");
  if (o.push(s.basis), !s.node) return pe("operational-scope", o, r);
  const a = s.node.document;
  r.push(s.node.uri), o.push(pt("principal-binding", a, i.issuer, "Operational scope O")), o.push(a.issuer === Bt(a).id ? { id: "self-maintained-scope", state: "established", reason: "O is issued by its own grantee.", sources: ["/issuer"] } : { id: "self-maintained-scope", state: "contradicted", reason: "O is not issued by its own grantee.", sources: ["/issuer"] }), o.push(Aa("activity-permission", a, "issueCalibrationCertificate", "issuing calibration certificates", "O"));
  const c = Ye("maintenance-grant", a, "CalAccreditation", t, [e.uri, s.node.uri], "CalAuthorizationPolicy");
  if (o.push(c.basis), !c.node) return pe("operational-scope", o, r);
  const u = c.node.document;
  r.push(c.node.uri), o.push(pt("accreditation-grantee", u, a.issuer, "Accreditation CA")), o.push(dt(u, `${Qs}maintainCalibrationScope`) && dt(u, `${Qs}issueCalibrationCertificate`) ? { id: "projection-permission", state: "established", reason: "CA permits maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] } : { id: "projection-permission", state: "contradicted", reason: "CA does not permit maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] });
  const f = cy(
    Be(Bt(a).scope).filter(Pe),
    Be(Bt(u).scope).filter(Pe),
    n.bindingRules.applyCmcFloor === !0
  );
  return o.push({ id: "bounded-projection", state: f.state, reason: f.reason, sources: f.sources }), o.push(On("trust-anchor", u, "accredit-calibration-laboratories", n)), o.push(Ot(i, [["O", a], ["CA", u]])), pe("operational-scope", o, r, s.node.uri);
}
function py(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = Ye("authorizing-reference", i, "CalLegalMandate", t, [e.uri], "CalAuthorizationPolicy");
  if (o.push(s.basis), !s.node) return pe("statutory-mandate", o, r);
  const a = s.node.document;
  return r.push(s.node.uri), o.push(pt("principal-binding", a, i.issuer, "Mandate M")), o.push(Aa("activity-permission", a, "issueCalibrationCertificate", "issuing calibration certificates", "M")), o.push(On("trust-anchor", a, "designate-national-metrology-institutes", n)), o.push(Ot(i, [["M", a]])), pe("statutory-mandate", o, r, s.node.uri);
}
const Al = Object.freeze({
  "direct-accreditation": ly,
  "operational-scope": uy,
  "statutory-mandate": py
}), qa = (e) => e.length === 0 ? "not_established" : xe(e);
function fy(e, t, n, i) {
  const o = n.authority.certificateRoutes, r = o.slice(0, n.authority.maxRoutes).map((g) => {
    const p = Al[g];
    return p === void 0 ? pe(g, [{ id: "installed-evaluator", state: "not_established", reason: `Route ${g} has no installed evaluator.`, sources: [] }], [e.uri]) : p(e, t, n);
  }), s = Ln([], r, o.slice(n.authority.maxRoutes)), a = Be(Bt(e.document).measurementGroups);
  if (a.length === 0)
    return { state: "not_established", reason: "The certificate has no measurement groups.", chain: [e.uri], bases: [] };
  const c = [];
  let u = [e.uri];
  a.forEach((g, p) => {
    const h = `/credentialSubject/measurementGroups/${p}`, x = Sl(g, h);
    if (x.group === void 0) {
      c.push({ id: `group-${p}`, state: x.state, reason: `Group ${p}: ${x.reason}`, sources: [h] });
      return;
    }
    const w = x.group, b = vr(s, (y) => {
      const d = Be(Bt(t(y.scope)?.document ?? {}).scope).filter(Pe), l = Il(w, d, i);
      return { id: "claim-coverage", state: l.state, reason: l.reason, sources: [y.scope, ...l.sources] };
    }), S = b.routes.find((y) => y.state === "established");
    S && (u = S.chain);
    const v = S ? `through ${S.id}` : b.routes.map((y) => `${y.id} ${y.state}: ${y.bases.filter((d) => d.state !== "established").map((d) => d.reason).join(" ")}`).join(" | ");
    c.push({ id: `group-${p}`, state: b.state, reason: `Group ${p} (${ae(w.id)}) is ${b.state} ${v}`.trim(), sources: [h] });
  });
  const f = qa(c.map((g) => g.state));
  return { state: f, reason: `The certificate's own authority is ${f}.`, chain: u, bases: c };
}
function hy(e, t, n, i) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const o = e.document, r = (m) => ({ state: m.state, reason: m.reason, bases: [m], chain: [e.uri] }), s = Be(o.evidence).filter(Pe).filter((m) => m.type === "CalCalibrationReference").map((m) => String(m.id));
  if (s.length === 0) return r({ id: "calibration-reference", state: "not_established", reason: "The report cites no calibration.", sources: ["/evidence"] });
  if (s.length > 1)
    return r({ id: "calibration-reference", state: "not_established", reason: "Several calibration references; this binding has no composition for them.", sources: ["/evidence"] });
  const a = s[0], c = t(a);
  if (c === void 0) return r({ id: "calibration-reference", state: "not_established", reason: `Calibration ${a} is unavailable.`, sources: ["/evidence", a] });
  if (c.usable !== "established" || c.document === void 0)
    return r({
      id: "calibration-reference",
      state: c.usable === "contradicted" ? "contradicted" : "not_established",
      reason: `Calibration ${a} is not usable: ${c.reason}`,
      sources: ["/evidence", a]
    });
  const u = c.document;
  if (ir(u) !== "CalCertificate")
    return r({ id: "calibration-reference", state: "contradicted", reason: `${a} is a ${String(ir(u))}, not a calibration certificate.`, sources: ["/evidence", a] });
  const f = Bt(o), g = Bt(u), p = [{ id: "calibration-reference", state: "established", reason: `Cites calibration ${a}.`, sources: ["/evidence", a] }];
  p.push(typeof f.instrumentIri != "string" ? { id: "same-instrument", state: "not_established", reason: "The report names no instrument.", sources: ["/credentialSubject/instrumentIri"] } : g.id === f.instrumentIri ? { id: "same-instrument", state: "established", reason: `The calibration concerns instrument ${String(f.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] } : { id: "same-instrument", state: "contradicted", reason: `The calibration concerns ${String(g.id)}, not instrument ${String(f.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] });
  const h = Be(f.measurementGroups).filter(Pe).map((m) => m.quantityKindIri), x = Be(g.measurementGroups).filter(Pe).map((m) => m.quantityKindIri), w = h.filter((m) => !x.includes(m));
  p.push(h.length > 0 && w.length === 0 ? { id: "same-quantity", state: "established", reason: `The calibration covers ${[...new Set(h.map(ae))].join(", ")}.`, sources: ["/credentialSubject/measurementGroups"] } : {
    id: "same-quantity",
    state: h.length === 0 ? "not_established" : "contradicted",
    reason: h.length === 0 ? "The report has no measurement groups." : `The calibration does not cover ${w.map(ae).join(", ")}.`,
    sources: ["/credentialSubject/measurementGroups"]
  });
  const b = Date.parse(String(f.activityTime)), S = Date.parse(String(g.activityTime)), v = Date.parse(String(u.validFrom)), y = Date.parse(String(u.validUntil));
  !Number.isFinite(b) || !Number.isFinite(S) ? p.push({ id: "calibration-precedes-use", state: "not_established", reason: "An activity time is missing.", sources: ["/credentialSubject/activityTime"] }) : (p.push(S <= b ? { id: "calibration-precedes-use", state: "established", reason: `Calibrated at ${String(g.activityTime)}, before the test at ${String(f.activityTime)}.`, sources: ["/credentialSubject/activityTime"] } : { id: "calibration-precedes-use", state: "contradicted", reason: `Calibrated at ${String(g.activityTime)}, after the test at ${String(f.activityTime)}.`, sources: ["/credentialSubject/activityTime"] }), p.push(Number.isFinite(v) && Number.isFinite(y) && v <= b && b <= y ? { id: "calibration-valid-at-use", state: "established", reason: "The calibration certificate was valid at the test.", sources: ["/validFrom", "/validUntil"] } : { id: "calibration-valid-at-use", state: "contradicted", reason: `The calibration certificate (valid ${String(u.validFrom)} to ${String(u.validUntil)}) was not valid at the test at ${String(f.activityTime)}.`, sources: ["/validFrom", "/validUntil"] }));
  const d = fy(c, t, n, i);
  p.push({ id: "calibration-authority", state: d.state, reason: d.reason, sources: [a] }, ...d.bases.map((m) => ({ ...m, id: `calibration-authority:${m.id}` })));
  const l = qa(p.map((m) => m.state));
  return {
    state: l,
    reason: l === "established" ? "The instrument calibration is applicable and independently authorized." : l === "contradicted" ? "The instrument calibration is contradicted." : "The instrument calibration is not established.",
    bases: p,
    chain: [e.uri, ...d.chain]
  };
}
const my = /^\/credentialSubject\/measurementGroups\/(0|[1-9][0-9]*)$/;
function yy(e) {
  const t = e.bindingRules.applyCmcFloor;
  if (typeof t != "boolean")
    throw new Error(`Profile ${e.id}@${e.version} must state bindingRules.applyCmcFloor for ${Ks}.`);
  return t;
}
async function gy(e, t, n, i) {
  if (n.id !== Ks || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${Ks}@${n.version}.`);
  const o = yy(i), r = wa(e, n, i);
  if (r !== void 0) return Object.freeze({ result: xa(e, r), artifacts: Object.freeze([]) });
  const s = await Sa(e, t, n, i, ay), { target: a, artifacts: c, facts: u, verificationOf: f, artifactVerification: g } = s, p = (D) => u.get(D), h = u.get(e.targetId), x = i.authority.certificateRoutes, w = h.document === void 0 ? [] : x.slice(0, i.authority.maxRoutes).map((D) => {
    const _ = Al[D];
    return _ === void 0 ? {
      id: D,
      state: "not_established",
      execution: "executed",
      chain: [h.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${D} has no installed evaluator.`, sources: [] }]
    } : _(h, p, i);
  }), b = h.document === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : Ln([], w, x.slice(i.authority.maxRoutes)), S = b.routes.find((D) => D.state === "established"), v = (D) => {
    const _ = u.get(D)?.document?.credentialSubject;
    return Array.isArray(_?.scope) ? _.scope : [];
  }, y = h.document, d = e.selectedClaims.map((D) => {
    const _ = /* @__PURE__ */ new Map();
    if (y === void 0 || !my.test(D.sourcePointer) || ln(y, D.sourcePointer) === void 0) {
      const M = y === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${D.sourcePointer} is not a measurement group in the usable target.`;
      return { claim: D, mapping: void 0, coverage: _, result: { claimId: D.id, routeWitnessIds: [], ...ce("not_established", [M]) } };
    }
    const F = Sl(ln(y, D.sourcePointer), D.sourcePointer);
    if (F.group === void 0)
      return { claim: D, mapping: F, coverage: _, result: {
        claimId: D.id,
        routeWitnessIds: [],
        ...ce(F.state, [`Gate 4: ${F.reason}`], [D.sourcePointer])
      } };
    const L = F.group, G = vr(b, (M) => {
      const U = Il(L, v(M.scope), o), N = [M.scope, ...U.sources];
      return _.set(M.id, { ...U, sources: N }), { id: "claim-coverage", state: U.state, reason: U.reason, sources: N };
    }), k = G.routes.find((M) => M.state === "established");
    return { claim: D, mapping: F, coverage: _, result: {
      claimId: D.id,
      routeWitnessIds: G.state === "established" && k ? [`route:${k.id}`, ...k.chain, `record:${_.get(k.id)?.record}`] : [],
      ...ce(G.state, [
        G.reason,
        ...k ? [_.get(k.id).reason] : [..._].map(([M, U]) => `${M}: ${U.reason}`)
      ], [D.sourcePointer])
    } };
  }), l = d.map((D) => D.result), I = Array.isArray(y?.type) && y.type[1] === "CalTestReport" ? hy(h, p, i, o) : void 0, A = I === void 0 ? [] : [{
    obligationId: "cal-v1:instrument-calibration",
    witnessIds: I.state === "established" ? [...I.chain] : [],
    ...ce(I.state, [I.reason], ["/evidence"])
  }], R = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...ce("not_established", ["The calibration v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, j = /* @__PURE__ */ new Set([
    e.targetId,
    ...S?.chain ?? [],
    ...I?.state === "established" ? I.chain : []
  ]), E = [
    ...c.filter((D) => j.has(D.artifactId)).flatMap(f).map((D) => D.state),
    ...l.map((D) => D.state),
    ...A.map((D) => D.state),
    ...R.requested ? [R.state] : []
  ], O = [...s.trace], P = fr(a.artifactId, a.digestSRI, "target", e);
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
  const C = sr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: g,
    authorization: l,
    support: A,
    conformity: R,
    decision: ra(E),
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
const vd = "https://vc4qi.example/bindings/gs/1", vy = "https://vc4qi.example/contexts/gs/1", br = "https://vc4qi.example/bindings/gs/1#", _t = "https://vc4qi.example/schemas/gs/1/", by = Object.freeze({
  name: "GS certification v1",
  schemas: Object.freeze({
    GsAccreditation: `${_t}accreditation.json`,
    GsSchemeAuthorization: `${_t}scheme-authorization.json`,
    GsCertificate: `${_t}certificate.json`,
    GsMarkCredential: `${_t}mark-credential.json`,
    ProductPassport: `${_t}product-passport.json`,
    GsTestReport: `${_t}test-report.json`,
    GsInspectionReport: `${_t}inspection-report.json`,
    BitstringStatusListCredential: `${_t}status-list.json`
  }),
  contexts: (e) => e === "BitstringStatusListCredential" ? [Ft] : [Ft, vy]
}), lt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Ue = (e) => Array.isArray(e) ? e : [], X = (e) => String(e).split(/[#/]/).pop(), ut = (e) => lt(e.credentialSubject) ? e.credentialSubject : {};
function ql(e, t) {
  const n = [t];
  if (!lt(e) || typeof e.productCategoryIri != "string")
    return { state: "not_established", reason: "The selected certification names no product category.", sources: n };
  const i = Ue(e.standardIris).filter((o) => typeof o == "string");
  return {
    state: "established",
    reason: `Mapped certification of ${X(e.productCategoryIri)} against [${i.map(X).join(", ")}].`,
    sources: n,
    certification: { productCategoryIri: e.productCategoryIri, standardIris: i }
  };
}
function Rl(e, t, n) {
  const i = ["/credentialSubject/scope"], { productCategoryIri: o, standardIris: r } = e, s = t.map((p) => {
    const h = String(p.id), x = Ue(p.standardIris);
    if (p.productCategoryIri !== o)
      return { id: h, state: "contradicted", reason: `${X(h)}: category ${X(o)} ≠ ${X(p.productCategoryIri)}` };
    const w = r.filter((b) => !x.includes(b));
    return w.length > 0 ? { id: h, state: "contradicted", reason: `${X(h)}: standard ${w.map(X).join(", ")} is not in the accredited scope` } : r.length === 0 && x.length > 0 ? { id: h, state: "not_established", reason: `${X(h)} restricts standards, but the certification names none` } : { id: h, state: "established", reason: `${X(h)} covers ${X(o)} against [${r.map(X).join(", ")}]` };
  }), a = n.map((p) => {
    const h = String(p.id);
    return p.productCategoryIri === o ? { id: h, state: "established", reason: `${X(h)} permits the GS mark for ${X(o)}` } : { id: h, state: "contradicted", reason: `${X(h)}: category ${X(o)} ≠ ${X(p.productCategoryIri)}` };
  }), c = (p, h) => {
    if (h.length === 0) return { state: "not_established", reason: `The ${p} scope has no records.`, record: void 0 };
    const x = h.find((w) => w.state === "established");
    return x ? { state: "established", reason: x.reason, record: x.id } : { state: pn(h.map((w) => w.state)), reason: `No single ${p} record covers it (${h.map((w) => w.reason).join(" | ")})`, record: void 0 };
  }, u = c("competence", s), f = c("scheme", a), g = xe([u.state, f.state]);
  return {
    state: g,
    reason: `Competence: ${u.reason}. Scheme: ${f.reason}.`,
    sources: i,
    ...g === "established" ? { records: [u.record, f.record] } : {}
  };
}
function jl(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = (u, f, g, p, h, x) => {
    const w = Ye(`${u}-reference`, i, f, t, [e.uri], "GsAuthorizationPolicy");
    if (o.push(w.basis), !w.node) return;
    const b = w.node.document;
    return o.push(pt(`${u}-grantee`, b, i.issuer, x)), o.push(dt(b, `${br}${g}`) ? { id: `${u}-permission`, state: "established", reason: `${x} permits ${p}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: `${u}-permission`, state: "contradicted", reason: `${x} does not permit ${p}.`, sources: ["/credentialSubject/permittedActivity"] }), o.push(On(`${u}-anchor`, b, h, n)), w.node;
  }, a = s("competence", "GsAccreditation", "certifyProducts", "certifying products", "accredit-certification-bodies", "Accreditation GS-A"), c = s("scheme", "GsSchemeAuthorization", "awardGsMark", "awarding the GS mark", "authorize-gs-certification", "Scheme authorization GS-S");
  return !a || !c ? pe("competence-and-scheme-permission", o, r) : (r.push(a.uri, c.uri), o.push(Ot(i, [["GS-A", a.document], ["GS-S", c.document]])), pe("competence-and-scheme-permission", o, r, a.uri));
}
function $l(e, t) {
  const n = (i) => i === void 0 ? [] : Ue(ut(t(i)?.document ?? {}).scope).filter(lt);
  return { competence: n(e.scope), scheme: n(e.chain.length === 3 ? e.chain[2] : void 0) };
}
const wy = `${br}GsMark`;
function _l(e, t, n) {
  const i = [t];
  if (!lt(e) || typeof e.markIri != "string" || typeof e.productModelIri != "string")
    return { state: "not_established", reason: "The selected marking names no mark or product model.", sources: i };
  if (e.markIri !== wy)
    return { state: "not_established", reason: `Mark ${X(e.markIri)} has no interpretation in this binding.`, sources: i };
  const o = [t, "/credentialSubject/productModelIri"];
  return typeof n != "string" ? { state: "not_established", reason: "The credential names no product model.", sources: o } : n !== e.productModelIri ? {
    state: "contradicted",
    reason: `The marking claims the mark for model ${X(e.productModelIri)}, but the credential is for model ${X(n)}.`,
    sources: o
  } : {
    state: "established",
    reason: `Mapped a GS-mark claim for model ${X(e.productModelIri)}.`,
    sources: i,
    marking: { markIri: e.markIri, productModelIri: e.productModelIri }
  };
}
function Pl(e, t) {
  const n = ["/credentialSubject/id"];
  if (t === void 0) return { state: "not_established", reason: "No certificate was reached.", sources: n };
  const i = ut(t).id;
  return i === e.productModelIri ? { state: "established", reason: `${X(t.id)} certifies model ${X(i)}.`, sources: n, records: [String(t.id)] } : { state: "contradicted", reason: `${X(t.id)} certifies ${X(i)}, not model ${X(e.productModelIri)}.`, sources: n };
}
function Tl(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = Ye("certificate-reference", i, "GsCertificate", t, [e.uri], "GsAuthorizationPolicy");
  if (o.push(s.basis), !s.node) return pe("gs-certified-product", o, r);
  const a = s.node.document;
  r.push(s.node.uri);
  const c = ut(a).manufacturerIri;
  o.push(typeof c != "string" ? { id: "manufacturer-binding", state: "not_established", reason: "The certificate names no manufacturer.", sources: ["/credentialSubject/manufacturerIri"] } : c === i.issuer ? { id: "manufacturer-binding", state: "established", reason: `The certificate names the passport issuer ${c} as manufacturer.`, sources: ["/credentialSubject/manufacturerIri", "/issuer"] } : { id: "manufacturer-binding", state: "contradicted", reason: `The certificate names ${c}, not the passport issuer ${String(i.issuer)}.`, sources: ["/credentialSubject/manufacturerIri", "/issuer"] }), o.push({ ...Ot(i, [["The certificate", a]]), id: "certificate-in-force" });
  const u = jl(s.node, t, n);
  o.push(...u.bases.map((p) => ({ ...p, id: `certificate:${p.id}` })));
  const f = ql(ut(a).certification, "/credentialSubject/certification"), g = f.certification === void 0 ? { state: f.state, reason: f.reason } : (() => {
    const { competence: p, scheme: h } = $l(u, t);
    return Rl(f.certification, p, h);
  })();
  return o.push({ id: "certificate:claim-coverage", state: g.state, reason: g.reason, sources: ["/credentialSubject/certification"] }), r.push(...u.chain.slice(1)), pe("gs-certified-product", o, r, s.node.uri);
}
const xy = `${br}Pass`, Sy = [
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
], Me = (e, t, n, i, o) => t === void 0 ? { id: e, state: "not_established", reason: i, sources: o } : { id: e, state: t ? "established" : "contradicted", reason: t ? n : i, sources: o };
function Iy(e, t, n) {
  const i = e.document, o = ut(i), r = lt(o.certification) ? o.certification : {};
  return Sy.map(({ obligationId: s, reference: a, type: c, activity: u, purpose: f, what: g }) => {
    const p = [], h = (A) => {
      const R = xe(p.map((E) => E.state)), j = p.find((E) => E.state === R && R !== "established");
      return {
        obligationId: s,
        state: R,
        bases: p,
        chain: A,
        reason: R === "established" ? `The ${g} applies and is independently authorized.` : `The ${g}: ${j?.reason ?? "not established"}`
      };
    }, x = Ue(i.evidence).filter(lt).filter((A) => A.type === a).map((A) => String(A.id));
    if (x.length !== 1)
      return p.push({
        id: "reference",
        state: "not_established",
        sources: ["/evidence"],
        reason: x.length === 0 ? `The certificate cites no ${g}.` : `The certificate cites several ${g}s; none is chosen.`
      }), h([]);
    const w = x[0], b = t(w);
    if (b === void 0 || b.usable !== "established" || b.document === void 0)
      return p.push({
        id: "reference",
        state: b?.usable === "contradicted" ? "contradicted" : "not_established",
        sources: ["/evidence", w],
        reason: b === void 0 ? `${X(w)} is unavailable.` : `${X(w)} is not usable: ${b.reason}`
      }), h([]);
    const S = b.document, v = ut(S), y = Ue(S.type);
    if (p.push(Me("reference", y.includes(c), `Cites ${g} ${X(w)}.`, `${X(w)} is not a ${c}.`, ["/evidence", w])), s === "type-examination") {
      p.push(Me(
        "same-model",
        v.productModelIri === o.id,
        `${X(w)} examined model ${X(o.id)}.`,
        `${X(w)} examined ${X(v.productModelIri)}, not model ${X(o.id)}.`,
        ["/credentialSubject/productModelIri"]
      ));
      const A = Ue(v.standardIris), R = Ue(r.standardIris), j = R.filter((E) => !A.includes(E));
      p.push(Me(
        "covers-certification",
        v.productCategoryIri === r.productCategoryIri && j.length === 0,
        `${X(w)} covers ${X(r.productCategoryIri)} against [${R.map(X).join(", ")}].`,
        v.productCategoryIri !== r.productCategoryIri ? `${X(w)} examined ${X(v.productCategoryIri)}, not ${X(r.productCategoryIri)}.` : `${X(w)} did not examine ${j.map(X).join(", ")}.`,
        ["/credentialSubject/standardIris"]
      ));
    } else
      p.push(Me(
        "same-manufacturer",
        typeof v.manufacturerIri == "string" && typeof o.manufacturerIri == "string" ? v.manufacturerIri === o.manufacturerIri : void 0,
        `${X(w)} inspected the certificate's manufacturer.`,
        `${X(w)} inspected ${String(v.manufacturerIri)}, not the certificate's manufacturer ${String(o.manufacturerIri)}.`,
        ["/credentialSubject/manufacturerIri"]
      ));
    p.push(Me("outcome", v.outcomeIri === xy, `${X(w)} passed.`, `${X(w)} did not pass (${X(v.outcomeIri)}).`, ["/credentialSubject/outcomeIri"]));
    const d = Date.parse(String(v.activityTime)), l = Date.parse(String(o.activityTime));
    p.push(Me(
      "precedes-certification",
      Number.isFinite(d) && Number.isFinite(l) ? d <= l : void 0,
      `The ${g} (${String(v.activityTime)}) precedes the certification.`,
      Number.isFinite(d) && Number.isFinite(l) ? `The ${g} (${String(v.activityTime)}) follows the certification (${String(o.activityTime)}).` : "An activity time is missing.",
      ["/credentialSubject/activityTime"]
    ));
    const m = Ye("accreditation-reference", S, "GsAccreditation", t, [e.uri, w], "GsAuthorizationPolicy");
    if (p.push(m.basis), !m.node) return h([w]);
    const I = m.node.document;
    if (p.push(pt("accreditation-grantee", I, S.issuer, `Accreditation ${X(m.node.uri)}`)), p.push(Me(
      "accreditation-permission",
      dt(I, `${br}${u}`),
      `${X(m.node.uri)} permits ${u}.`,
      `${X(m.node.uri)} does not permit ${u}.`,
      ["/credentialSubject/permittedActivity"]
    )), p.push(On("accreditation-anchor", I, f, n)), p.push({ ...Ot(S, [[X(m.node.uri), I]]), id: "accreditation-in-force" }), s === "type-examination") {
      const A = Ue(v.standardIris), j = Ue(ut(I).scope).filter(lt).find((E) => E.productCategoryIri === v.productCategoryIri && A.every((O) => Ue(E.standardIris).includes(O)));
      p.push(Me(
        "accreditation-scope",
        j !== void 0,
        `${X(j?.id)} covers the examination.`,
        `No record of ${X(m.node.uri)} covers ${X(v.productCategoryIri)} against [${A.map(X).join(", ")}].`,
        ["/credentialSubject/scope"]
      ));
    }
    return h([w, m.node.uri]);
  });
}
function Ay(e, t, n) {
  const i = e.document, o = ut(i).economicOperatorIri, r = ["/credentialSubject/economicOperatorIri", "/issuer"];
  return pe(
    "responsible-economic-operator",
    [typeof o != "string" ? { id: "operator-is-issuer", state: "not_established", reason: "The passport names no responsible economic operator.", sources: r } : Me(
      "operator-is-issuer",
      o === i.issuer,
      `The passport is issued by its responsible economic operator ${o}.`,
      `The passport names ${o} as its responsible economic operator but is issued by ${String(i.issuer)}.`,
      r
    )],
    // The operator declares its own passport, so the passport is the scope of its entries.
    [e.uri],
    e.uri
  );
}
function qy(e, t, n) {
  const i = e.document, o = ut(i), r = lt(o.complianceInformation) ? o.complianceInformation : {}, s = lt(r.gsMark) ? r.gsMark : {}, a = [], c = (v, y) => {
    const d = xe(a.map((m) => m.state)), l = a.find((m) => m.state === d && d !== "established");
    return { ...y === void 0 ? {} : { certificateUri: y }, support: {
      obligationId: "gs-mark-credential",
      state: d,
      bases: a,
      chain: v,
      reason: d === "established" ? "The GS-mark credential applies to this unit and holds its own route." : `The GS-mark credential: ${l?.reason ?? "not established"}`
    } };
  }, u = Ue(i.evidence).filter(lt).filter((v) => v.type === "GsMarkCredentialReference").map((v) => String(v.id));
  if (u.length !== 1)
    return a.push({
      id: "reference",
      state: "not_established",
      sources: ["/evidence"],
      reason: u.length === 0 ? "The passport cites no GS-mark credential." : "The passport cites several GS-mark credentials; none is chosen."
    }), c([]);
  const f = u[0], g = t(f);
  if (g === void 0 || g.usable !== "established" || g.document === void 0)
    return a.push({
      id: "reference",
      state: g?.usable === "contradicted" ? "contradicted" : "not_established",
      sources: ["/evidence", f],
      reason: g === void 0 ? `${X(f)} is unavailable.` : `${X(f)} is not usable: ${g.reason}`
    }), c([]);
  const p = g.document, h = ut(p);
  a.push(Me(
    "reference",
    Ue(p.type).includes("GsMarkCredential"),
    `Cites GS-mark credential ${X(f)}.`,
    `${X(f)} is not a GsMarkCredential.`,
    ["/evidence", f]
  )), a.push(Me(
    "same-unit",
    h.id === o.id,
    `${X(f)} is for this unit ${X(o.id)}.`,
    `${X(f)} is for unit ${X(h.id)}, not this unit ${X(o.id)}.`,
    ["/credentialSubject/id"]
  )), a.push(Me(
    "same-operator",
    p.issuer === i.issuer,
    `${X(f)} is issued by the passport's issuer.`,
    `${X(f)} is issued by ${String(p.issuer)}, not the passport's issuer ${String(i.issuer)}.`,
    ["/issuer"]
  ));
  const x = _l(h.marking, "/credentialSubject/marking", h.productModelIri);
  a.push({ id: "mark-credential:mapping", state: x.state, reason: x.reason, sources: [...x.sources] }), a.push(Me(
    "same-model",
    x.marking === void 0 ? void 0 : x.marking.productModelIri === s.productModelIri && h.productModelIri === o.productModelIri,
    `${X(f)} claims the mark for the passport's model ${X(o.productModelIri)}.`,
    x.marking === void 0 ? `${X(f)} claims no mark for a model.` : `${X(f)} claims the mark for model ${X(x.marking.productModelIri)}, not the passport's model ${X(o.productModelIri)}.`,
    ["/credentialSubject/complianceInformation/gsMark/productModelIri", "/credentialSubject/productModelIri"]
  ));
  const w = Tl(g, t, n);
  a.push(...w.bases.map((v) => ({ ...v, id: `mark-credential:${v.id}` })));
  const b = w.scope === void 0 ? void 0 : t(w.scope)?.document, S = x.marking === void 0 ? { state: "not_established", reason: "No mark was mapped.", sources: [] } : Pl(x.marking, b);
  return a.push({ id: "mark-credential:claim-coverage", state: S.state, reason: S.reason, sources: [...S.sources] }), c([f, ...w.chain.slice(1)], w.scope);
}
const Ry = Object.freeze({
  "competence-and-scheme-permission": jl,
  "gs-certified-product": Tl,
  "responsible-economic-operator": Ay
}), jy = "/credentialSubject/certification", $y = "/credentialSubject/marking", Ws = "/credentialSubject/complianceInformation/gsMark", _y = { GsMarkCredential: "mark", ProductPassport: "passport" }, Py = { certificate: jy, mark: $y, passport: Ws };
async function Ty(e, t, n, i) {
  if (n.id !== vd || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${vd}@${n.version}.`);
  const o = wa(e, n, i);
  if (o !== void 0) return Object.freeze({ result: xa(e, o), artifacts: Object.freeze([]) });
  const r = await Sa(e, t, n, i, by), { target: s, artifacts: a, facts: c, verificationOf: u, artifactVerification: f } = r, g = (L) => c.get(L), p = c.get(e.targetId), h = p.document, x = i.authority.certificateRoutes, w = h === void 0 ? [] : x.slice(0, i.authority.maxRoutes).map((L) => {
    const G = Ry[L];
    return G === void 0 ? {
      id: L,
      state: "not_established",
      execution: "executed",
      chain: [p.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${L} has no installed evaluator.`, sources: [] }]
    } : G(p, g, i);
  }), b = h === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : Ln([], w, x.slice(i.authority.maxRoutes)), S = b.routes.find((L) => L.state === "established"), v = Array.isArray(h?.type) && _y[String(h.type[1])] || "certificate", y = Py[v], d = e.selectedClaims.map((L) => {
    const G = /* @__PURE__ */ new Map();
    if (h === void 0 || L.sourcePointer !== y || ln(h, L.sourcePointer) === void 0) {
      const z = h === void 0 ? "The target is not usable, so its claims are not read." : v === "passport" ? `This binding interprets only the GS-mark entry (${Ws}) of a product passport; ${L.sourcePointer} has no interpretation here.` : `Selected claim ${L.sourcePointer} is not the ${v === "mark" ? "marking" : "certification statement"} of the usable target.`;
      return { claim: L, mapping: void 0, coverage: G, result: { claimId: L.id, routeWitnessIds: [], ...ce("not_established", [z]) } };
    }
    const k = ln(h, L.sourcePointer), M = v === "certificate" ? void 0 : _l(k, L.sourcePointer, h.credentialSubject?.productModelIri), U = M ?? ql(k, L.sourcePointer), N = M?.marking, $ = v === "certificate" ? U.certification : void 0;
    if (N === void 0 && $ === void 0)
      return { claim: L, mapping: U, coverage: G, result: {
        claimId: L.id,
        routeWitnessIds: [],
        ...ce(U.state, [`Gate 4: ${U.reason}`], [L.sourcePointer])
      } };
    const q = vr(b, (z) => {
      const H = v === "passport" ? {
        state: "established",
        sources: [Ws],
        reason: "The entry is declared by the passport's responsible economic operator; it is relied on through the GS-mark credential it cites (gate 6)."
      } : N !== void 0 ? Pl(N, g(z.scope)?.document) : (() => {
        const { competence: J, scheme: V } = $l(z, g);
        return Rl($, J, V);
      })(), Q = [...z.chain.slice(1), ...H.sources];
      return G.set(z.id, { ...H, sources: Q }), { id: "claim-coverage", state: H.state, reason: H.reason, sources: Q };
    }), T = q.routes.find((z) => z.state === "established");
    return { claim: L, mapping: U, coverage: G, result: {
      claimId: L.id,
      routeWitnessIds: q.state === "established" && T ? [`route:${T.id}`, ...T.chain, ...(G.get(T.id)?.records ?? []).map((z) => `record:${z}`)] : [],
      ...ce(q.state, [
        q.reason,
        ...T ? [G.get(T.id).reason] : [...G].map(([z, H]) => `${z}: ${H.reason}`)
      ], [L.sourcePointer])
    } };
  }), l = d.map((L) => L.result), m = v === "passport" && h !== void 0 ? qy(p, g, i) : void 0, I = h === void 0 ? void 0 : v === "passport" ? m?.certificateUri : v === "mark" ? w.find((L) => L.chain.length > 1)?.chain[1] : e.targetId, A = I === void 0 ? void 0 : g(I), R = h === void 0 ? [] : A?.usable === "established" && A.document !== void 0 ? Iy(A, g, i) : ["type-examination", "factory-inspection"].map((L) => ({
    obligationId: L,
    state: "not_established",
    reason: "No usable GS certificate was reached, so its studies are not evaluated.",
    bases: [],
    chain: []
  })), j = [...m ? [m.support] : [], ...R], E = j.map((L) => ({
    obligationId: `gs-v1:${L.obligationId}`,
    witnessIds: L.state === "established" ? [...L.chain] : [],
    ...ce(L.state, [L.reason], ["/evidence"])
  })), O = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...ce("not_established", ["The GS v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, P = /* @__PURE__ */ new Set([
    e.targetId,
    ...S?.chain ?? [],
    ...j.filter((L) => L.state === "established").flatMap((L) => L.chain)
  ]), C = [
    ...a.filter((L) => P.has(L.artifactId)).flatMap(u).map((L) => L.state),
    ...l.map((L) => L.state),
    ...E.map((L) => L.state),
    ...O.requested ? [O.state] : []
  ], D = [...r.trace], _ = fr(s.artifactId, s.digestSRI, "target", e);
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
  const F = sr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: f,
    authorization: l,
    support: E,
    conformity: O,
    decision: ra(C),
    trace: D,
    resources: r.resources,
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
function Cy(e, t, n) {
  const i = JSON.parse(n), o = na(i.verificationMethod[0].publicKeyMultibase).slice(2), r = $d(new TextEncoder().encode(`vc4qi-rm-v1-insecure-fixture-key:${e}`));
  return { id: `${t}#key-1`, controller: t, privateKey: r, publicKey: o };
}
const Ey = (e) => `${JSON.stringify(e, null, 2)}
`;
async function Cl(e, t, n, i, o, r) {
  const s = Pd(new _d(o).openSession({ maxResources: 64, maxBytes: 1e6 })), a = await em(e, Cy(t, n, r), { created: i, documentLoader: s, safe: !0 });
  return Ey({ ...e, proof: a });
}
function ky(e) {
  const t = new Uint8Array(Fs / 8);
  for (const o of e) t[o >> 3] |= 128 >> (o & 7);
  const n = $m(t, { level: 9, mtime: 0 });
  let i = "";
  for (const o of n) i += String.fromCharCode(o);
  return `u${btoa(i).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")}`;
}
function My(e, t, n) {
  const { proof: i, ...o } = JSON.parse(e);
  return { ...o, validFrom: n, credentialSubject: { ...o.credentialSubject, encodedList: ky(t) } };
}
const Xs = "2026-09-25T12:00:00Z", Oy = { rm: ry, cal: gy, gs: Ty }, Jt = Object.fromEntries(["rm", "cal", "gs"].map((e) => [e, {
  manifest: mu(In[e].manifest),
  profiles: Object.fromEntries(Object.entries(In[e].profiles).map(([t, n]) => [t, ia(n)])),
  files: In[e].files
}])), Ra = "gs-verifier-dpp-accreditation-only (demonstrator)";
{
  const e = In.gs.profiles["gs-verifier-dpp-1"];
  Jt.gs.profiles[Ra] = ia({
    ...e,
    id: "https://vc4qi.example/profiles/gs-verifier-dpp-accreditation-only",
    description: "Demonstrator-only variant of gs-verifier-dpp-1 that configures the accreditation body as its only trust anchor. Fictional.",
    trustAnchors: e.trustAnchors.filter((t) => t.id !== "https://zls.vc4qi.example/controller")
  });
}
const Ly = (e) => String(e).split(/[#/:]/).pop() ?? "", Ps = (e, t) => ({
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
}), ke = {
  CA: "https://nab.vc4qi.example/credentials/CAL-A",
  DCC1: "https://lab.vc4qi.example/credentials/DCC-1",
  O: "https://lab.vc4qi.example/credentials/CAL-O",
  DCC2: "https://lab.vc4qi.example/credentials/DCC-2",
  M: "https://ministry.vc4qi.example/credentials/CAL-M",
  DCCN: "https://nmi.vc4qi.example/credentials/DCC-N",
  T: "https://nab.vc4qi.example/credentials/CAL-T",
  REPORT: "https://testlab.vc4qi.example/credentials/REPORT-1"
}, bn = (e) => ({ id: `g${e + 1}`, sourcePointer: `/credentialSubject/measurementGroups/${e}` }), Ny = [
  {
    id: "direct",
    label: "Accredited lab",
    sublabel: "DCC-1",
    binding: "cal",
    profile: "cal-verifier-1",
    target: ke.DCC1,
    claims: [bn(0), bn(1)],
    supplied: [ke.CA],
    tamper: ['"value": "1000"', '"value": "15000"'],
    withhold: { uri: ke.CA, label: "Withhold the accreditation" }
  },
  {
    id: "capability",
    label: "Capability scope",
    sublabel: "DCC-2",
    binding: "cal",
    profile: "cal-verifier-capability-1",
    target: ke.DCC2,
    claims: [bn(0)],
    supplied: [ke.O, ke.CA],
    tamper: ['"value": "1000"', '"value": "5000"'],
    withhold: { uri: ke.O, label: "Withhold the operational scope" }
  },
  {
    id: "nmi",
    label: "National institute",
    sublabel: "DCC-N",
    binding: "cal",
    profile: "cal-verifier-nmi-1",
    target: ke.DCCN,
    claims: [bn(0)],
    supplied: [ke.M],
    tamper: ['"value": "20"', '"value": "200"'],
    withhold: { uri: ke.M, label: "Withhold the mandate" }
  },
  {
    id: "report",
    label: "Test report",
    sublabel: "REPORT-1",
    binding: "cal",
    profile: "cal-verifier-test-report-1",
    target: ke.REPORT,
    claims: [bn(0)],
    supplied: [ke.T],
    tamper: ['"value": "2"', '"value": "30"'],
    withhold: { uri: ke.DCC1, label: "Withhold the instrument's calibration" }
  }
], at = {
  C1: "https://gs-body.vc4qi.example/credentials/GSC-1",
  TR1: "https://gs-body.vc4qi.example/credentials/TR-1",
  TR2: "https://testlab-gs.vc4qi.example/credentials/TR-2",
  TR3: "https://gs-body.vc4qi.example/credentials/TR-3",
  M1: "https://maker.vc4qi.example/credentials/GSM-1",
  M4: "https://maker.vc4qi.example/credentials/GSM-4"
}, wn = (e, t, n, i, o) => ({
  id: e,
  label: t,
  sublabel: n,
  binding: "gs",
  profile: "gs-verifier-mark-1",
  target: i,
  claims: [{ id: "mark", sourcePointer: "/credentialSubject/marking" }],
  supplied: [],
  tamper: ["-sn-", "-sn-9"],
  withhold: o
}), Ts = (e, t, n, i, o) => ({
  id: e,
  label: t,
  sublabel: n,
  binding: "gs",
  profile: "gs-verifier-dpp-1",
  target: i,
  claims: [{ id: "mark", sourcePointer: "/credentialSubject/complianceInformation/gsMark" }],
  supplied: [],
  tamper: ["-sn-", "-sn-9"],
  withhold: o
}), xn = (e) => ({ uri: e, label: "Withhold the type examination" }), Cs = (e) => ({ uri: e, label: "Withhold the GS-mark credential" }), bd = [
  {
    id: "rm",
    tab: "RM",
    title: "Certified reference material",
    intro: "M375a, leaded brass: may I rely on the certified arsenic value?",
    caseLabel: "Certified As mass fraction (mg/kg)",
    cases: [Ps("178", "certificate"), Ps("197", "hypothetical"), Ps("520", "hypothetical")],
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
    cases: Ny,
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
      wn("in-house", "Hair dryer HD-01", "GS body tested", "https://maker.vc4qi.example/credentials/GSM-1", xn(at.TR1)),
      wn("external", "Hair dryer HD-02", "external lab tested", "https://maker.vc4qi.example/credentials/GSM-3", xn(at.TR2)),
      wn("toy", "Toy 001", "outside ZLS scope", "https://maker.vc4qi.example/credentials/GSM-2", xn(at.TR3)),
      wn("clone", "Other company", "cites the HD-01 certificate", "https://clone.vc4qi.example/credentials/GSM-5", xn(at.TR1)),
      wn("mismatch", "HD-02 unit", "claims the HD-01 mark", "https://maker.vc4qi.example/credentials/GSM-6", xn(at.TR1))
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
      Ts("unit", "Unit sn-0042", "its own GS-mark credential", "https://maker.vc4qi.example/credentials/DPP-1", Cs(at.M1)),
      Ts("early", "Unit sn-0001", "on market before certification", "https://maker.vc4qi.example/credentials/DPP-2", Cs(at.M4)),
      Ts("borrowed", "Unit sn-0050", "cites another unit's credential", "https://maker.vc4qi.example/credentials/DPP-3", Cs(at.M1))
    ],
    choice: { label: "The verifier trusts", options: [
      { id: "both", label: "Accreditation body and scheme owner", sublabel: "gs-verifier-dpp-1" },
      { id: "accreditation-only", label: "Accreditation body only", sublabel: "no scheme-owner anchor" }
    ] },
    note: "An experimental product passport shaped after the EU Digital Product Passport (ESPR): unique product identifier, GTIN, commodity code, economic operator and facility, technical and sustainability data, and compliance information. Its GS-mark entry is supported by the unit's GS-mark credential, which keeps its own authority route. The GS binding evaluates only that entry. Not ESPR conformance; identifiers are fictional, and today's GS scheme has no per-unit credential. All parties and keys are fictional."
  }
], Dy = {
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
  clone: "Other company",
  "global-aci": "Global ACI (stand-in)"
}, wd = (e) => {
  const t = e !== null && typeof e == "object" ? e.id : e, n = /^https:\/\/([^./]+)\./.exec(String(t))?.[1];
  return n === void 0 ? String(t).split("#")[0].split(":").pop() : Dy[n] ?? n;
}, zy = {
  RmAccreditation: "Accreditation",
  RmLabAuthority: "Laboratory authority",
  RmOperationalScope: "Operational scope",
  RmStudy: "Homogeneity study",
  RmCertificate: "RM certificate (DRMD)",
  RecognizedEntityCredential: "Recognition",
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
function Uy(e, t, n, i, o) {
  const r = /* @__PURE__ */ new Map();
  for (const [w, b] of Object.entries(t))
    try {
      r.set(w, JSON.parse(b));
    } catch {
    }
  const s = (w) => [
    ...(w?.termsOfUse ?? []).map((b) => b.authorizationCredential?.id).filter((b) => typeof b == "string").map((b) => ({ to: b, kind: "authority" })),
    ...(w?.evidence ?? []).map((b) => b.id).filter((b) => typeof b == "string").map((b) => ({ to: b, kind: "support" }))
  ], a = new Map(n.artifactVerification.map((w) => [w.artifactId, w.state])), c = n.decision === "accept" ? /* @__PURE__ */ new Set([...n.authorization.flatMap((w) => w.routeWitnessIds), ...n.support.flatMap((w) => w.witnessIds)]) : void 0, u = /* @__PURE__ */ new Map([[e, 0]]), f = /* @__PURE__ */ new Set(), g = [], p = [[e, !1]], h = /* @__PURE__ */ new Set();
  for (; p.length > 0; ) {
    const [w, b] = p.shift();
    for (const { to: S, kind: v } of s(r.get(w))) {
      const y = `${w}>${S}`, d = b || v === "support";
      h.has(y) || (h.add(y), g.push({
        from: w,
        to: S,
        kind: v,
        state: w === e ? v === "support" ? o : i : c && !c.has(S) ? "unused" : a.get(S) ?? "not_established"
      }));
      const l = (u.get(w) ?? 0) + 1;
      (u.get(S) ?? -1) < l && l < 8 ? (u.set(S, l), p.push([S, d])) : d && !f.has(S) && f.add(S);
    }
  }
  return { nodes: [...u].map(([w, b]) => {
    const S = r.get(w), v = Array.isArray(S?.type) ? String(S.type[1]) : "", y = S?.credentialSubject ?? {};
    return {
      uri: w,
      name: Ly(w),
      role: zy[v] ?? (v || "not supplied"),
      layer: b,
      present: S !== void 0,
      target: w === e,
      parties: S === void 0 ? "withheld" : `${wd(S.issuer)} → ${wd(y.id)}`,
      state: a.get(w) ?? "not_established"
    };
  }), edges: g };
}
const Pt = (e) => e.length === 0 ? "not_established" : xe(e.map((t) => t.state)), xd = (e, t) => e.find((n) => n.state === t);
async function ja(e) {
  const t = Jt[e.binding], n = t.profiles[e.profileName], i = e.texts ?? {}, o = new Set(t.files.map((j) => j.uri)), r = t.files.find((j) => j.uri === e.target)?.origin ?? t.files.at(-1).origin, s = {}, a = [
    ...t.files,
    ...Object.entries(i).filter(([j]) => !o.has(j)).map(([j, E]) => ({ uri: j, mediaType: "application/vc", origin: r, version: "1", text: E, digestSRI: void 0 }))
  ].filter((j) => j.uri !== e.withheld).map((j) => {
    const E = i[j.uri] ?? j.text, O = new TextEncoder().encode(E);
    return s[j.uri] = E, {
      uri: j.uri,
      mediaType: j.mediaType,
      origin: j.origin,
      version: j.version,
      bytes: O,
      digestSRI: E === j.text && j.digestSRI ? j.digestSRI : rr(O)
    };
  }), c = $u({
    requestId: e.requestId,
    targetId: e.target,
    selectedClaims: e.claims.map((j) => ({ ...j })),
    purpose: "demonstrator",
    binding: { id: t.manifest.id, version: t.manifest.version },
    profile: { id: n.id, version: n.version },
    trustConfigId: "https://vc4qi.example/trust/fixture-anchors",
    evaluationTime: Xs,
    activityTime: Xs,
    suppliedEvidence: e.supplied.filter((j) => j !== e.withheld),
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5e6 },
    ...e.conformity ? { conformity: { ...e.conformity } } : {}
  }), { result: u } = await Oy[e.binding](c, new _d(a), t.manifest, n), f = (j, E = () => !0) => u.trace.filter((O) => O.gate === j && E(O)), p = [...f(2), ...f(1)], h = f(3), x = [...f(0), ...f(4)], w = (j, E, O) => E === "established" ? O : (xd(j, E) ?? xd(j, "not_established"))?.reason ?? "Not evaluated.", b = u.authorization, S = b.length === 0 ? "not_established" : xe(b.map((j) => j.state)), v = S === "established" ? b.map((j) => j.reasons.at(-1)).join(" ") : b.filter((j) => j.state !== "established").map((j) => `${j.claimId}: ${j.reasons.join(" ")}`).join(" "), y = u.support, d = u.artifactVerification.find((j) => j.artifactId === e.target)?.state === "established", l = y.length > 0 ? xe(y.map((j) => j.state)) : d ? "not_required" : "not_established", m = f(6, (j) => j.predicate.startsWith("conformity:")), I = [
    {
      id: "authentic",
      state: Pt(p),
      details: p,
      summary: w(p, Pt(p), "Every credential is signed by its issuer's own key, and every reference matches the exact bytes.")
    },
    {
      id: "current",
      state: Pt(h),
      details: h,
      summary: w(h, Pt(h), "Every credential is within its validity period and not revoked.")
    },
    // "Understood" includes reading the claim itself (gate 4); a claim that was never
    // read, because its credential failed a lower gate, is not understood.
    f(4).length === 0 ? {
      id: "understood",
      state: Pt(f(0)) === "contradicted" ? "contradicted" : "not_established",
      details: x,
      summary: w(f(0), Pt(f(0)), "The claim was not read, because its credential did not pass the earlier checks.")
    } : {
      id: "understood",
      state: Pt(x),
      details: x,
      summary: w(x, Pt(x), f(4).map((j) => j.reason).join(" "))
    },
    {
      id: "authorized",
      state: S,
      summary: v,
      details: f(5, (j) => j.predicate.startsWith("claim-") || j.predicate.startsWith("restriction:") || j.predicate.startsWith("route:"))
    },
    {
      id: "supported",
      state: l,
      summary: y.length > 0 ? y.map((j) => j.reasons.join(" ")).join(" ") : d ? "This claim needs no supporting credential under the selected profile." : "Not evaluated: the credential did not pass the earlier checks.",
      details: f(6, (j) => j.predicate.startsWith("support:") || y.some((E) => E.obligationId === j.predicate))
    },
    u.conformity.requested ? {
      id: "fit",
      state: u.conformity.execution === "not_run" ? "not_asked" : u.conformity.state,
      details: m,
      summary: u.conformity.reasons.join(" ")
    } : { id: "fit", state: "not_asked", details: [], summary: e.notAsked }
  ], A = JSON.parse(s[e.target]), R = Uy(e.target, s, u, S, l);
  return { profile: e.profileName, result: u, questions: I, target: A, texts: s, graph: R };
}
async function sg(e) {
  const t = bd.find((s) => s.id === e.example) ?? bd[0], n = t.cases.find((s) => s.id === e.caseId) ?? t.cases[0], i = Jt[n.binding].files.find((s) => s.uri === n.target), o = e.tamper ? { [n.target]: i.text.replace(n.tamper[0], n.tamper[1]) } : {}, r = await ja({
    binding: n.binding,
    profileName: t.id === "dcc" && e.choice === "direct-only" ? "cal-verifier-1" : t.id === "dpp" && e.choice === "accreditation-only" ? Ra : n.profile,
    requestId: `urn:vc4qi:demonstrator:${t.id}:${n.id}`,
    target: n.target,
    claims: n.claims,
    supplied: n.supplied,
    texts: o,
    withheld: e.withhold ? n.withhold.uri : void 0,
    ...t.id === "rm" && e.choice !== "authorized" ? { conformity: { requirementId: "as-mass-fraction-max-200-mg-per-kg", decisionRuleId: "guarded-acceptance-expanded-u" } } : {},
    notAsked: t.id === "rm" ? "The verifier asked only whether the value is authorized; no limit was applied." : "This example asks only whether the claim is authorized; the binding installs no decision rule."
  });
  return { options: e, example: t, spec: n, ...r };
}
const Sd = [
  { id: "build", label: "Build the chain" },
  { id: "verify", label: "Verify" },
  { id: "manipulate", label: "Manipulate" },
  { id: "decide", label: "The verifier decides" },
  { id: "present", label: "Present" },
  { id: "play", label: "Your turn" }
], Es = /* @__PURE__ */ new Map();
function El(e, t) {
  return Es.has(e) || Es.set(e, t()), Es.get(e);
}
const Id = "2026-09-20T00:00:00Z", Cn = (e, t) => Jt[e].files.find((n) => n.uri === t).text, kl = (e) => Jt[e].files.map((t) => ({
  uri: t.uri,
  mediaType: t.mediaType,
  origin: t.origin,
  version: t.version,
  bytes: new TextEncoder().encode(t.text),
  digestSRI: t.digestSRI
})), an = (e, t, n, i) => El(`${e}:list:${t}`, () => Cl(My(Cn(e, t), [0], Id), n, i, Id, kl(e), Cn(e, i))), Ml = (e, t, n) => e.replace(t, n), ag = [
  { id: "anatomy", label: "A credential" },
  ...Sd.slice(0, 4),
  { id: "proposal", label: "Proposal" },
  ...Sd.slice(4)
], se = {
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
  PRODUCER_STATUS: "https://producer.vc4qi.example/status/1",
  GACI: "https://global-aci.vc4qi.example/controller",
  GACI_SUSPENSION: "https://global-aci.vc4qi.example/status/suspension/1",
  GACI_STATUS: "https://global-aci.vc4qi.example/status/1",
  R: "https://global-aci.vc4qi.example/credentials/R"
}, og = [
  {
    id: "gaci",
    mono: "ACI",
    name: "Global ACI",
    does: "Recognizes accreditation bodies after peer evaluation. Can suspend one recognition. A fictional stand-in.",
    publishes: [{ label: "Key", uri: se.GACI }, { label: "Revocation list", uri: se.GACI_STATUS }, { label: "Suspension list", uri: se.GACI_SUSPENSION }]
  },
  {
    id: "ab",
    mono: "AB",
    name: "Accreditation body",
    does: "Accredits the producer and the laboratory. Can suspend.",
    publishes: [{ label: "Key", uri: se.NAB }, { label: "Revocation list", uri: se.NAB_STATUS }, { label: "Suspension list", uri: se.SUSPENSION }]
  },
  {
    id: "lab",
    mono: "LAB",
    name: "Laboratory",
    does: "Studies the batch under its accreditation. Can revoke its study.",
    publishes: [{ label: "Key", uri: se.LAB }, { label: "Revocation list", uri: se.LAB_STATUS }]
  },
  {
    id: "rmp",
    mono: "RMP",
    name: "RM producer",
    does: "Declares its scope, certifies the material and ships it.",
    publishes: [{ label: "Key", uri: se.PRODUCER }, { label: "Revocation list", uri: se.PRODUCER_STATUS }]
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
], cg = [
  { code: "R", label: "Recognition", tag: "proposal", kind: "grant", actor: "gaci", row: 1, about: "ab", heldBy: "ab" },
  { code: "A", label: "Accreditation", kind: "grant", actor: "ab", row: 1, about: "rmp", heldBy: "rmp" },
  { code: "H", label: "Laboratory accreditation", kind: "grant", actor: "ab", row: 2, about: "lab", heldBy: "lab" },
  { code: "O", label: "Operational scope", kind: "grant", actor: "rmp", row: 1, about: "rmp", heldBy: "rmp" },
  { code: "S", label: "Homogeneity study", kind: "evidence", actor: "lab", row: 2, about: "object", aboutLabel: "disc lot 1", heldBy: "rmp" },
  { code: "D", label: "RM certificate", kind: "claim", actor: "rmp", row: 2, about: "object", aboutLabel: "disc lot 1", heldBy: "holder" }
], Vy = {
  certificate: "178",
  value: "178",
  uncertainty: "5",
  method: "M1",
  suspendA: !1,
  revokeS: !1,
  tamper: !1,
  withholdS: !1,
  trust: "ab",
  suspendGaci: !1,
  ask: "fit",
  rule: "guarded"
}, dg = [
  {
    id: "anatomy",
    part: "anatomy",
    acts: ["rmp"],
    panel: "anatomy",
    title: "One credential, read by where it points",
    text: "Certificate D178 itself. The envelope is W3C Verifiable Credentials 2.0; only its content and a few link words are ours. Up points to the authority it acts under, down to what it is about, sideways to its evidence; status says whether it still holds, and the proof seals it. A chain is these links: issued downward, checked upward."
  },
  {
    id: "recognize",
    part: "build",
    acts: ["gaci", "ab"],
    joins: ["gaci", "ab"],
    issues: ["R"],
    title: "Global ACI recognizes the accreditation body",
    text: "Our proposal: one credential per recognized body. R is about this accreditation body only: it may accredit reference material producers (ISO 17034) and laboratories (ISO/IEC 17025). Global ACI can suspend R without touching any other body. Both publish a key and status lists first, so anyone can check what they sign."
  },
  {
    id: "accredit-lab",
    part: "build",
    acts: ["ab", "lab"],
    joins: ["lab"],
    issues: ["H"],
    title: "The accreditation body accredits the laboratory",
    text: "Accreditation H permits the laboratory to run homogeneity studies on brass. It points up to R, pinned by digest: the body acts under its recognition. The laboratory publishes its own key and status list."
  },
  {
    id: "accredit",
    part: "build",
    acts: ["ab", "rmp"],
    joins: ["rmp"],
    issues: ["A"],
    title: "The accreditation body accredits the RM producer",
    text: 'Accreditation A is broad, like a real annex row ("non-ferrous metals and alloys, element contents, 0.1 mg/kg – 997 g/kg"): here the element contents of this brass by methods M1 and M2. It is a flexible scope: the producer may add materials within it and keeps its own list. A points up to R; the body can suspend A.'
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
    text: "It knows none of the parties in advance and trusts one root: the accreditation body. It follows every reference from D178 up to that root and answers six questions; R lies beyond its root and does not decide for it. The last question is its own: is As + U at most 200 mg/kg? 178 + 5 = 183."
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
    state: { trust: "global-aci" },
    unlock: ["trust"],
    expect: "accept",
    title: "Verifier 3 trusts Global ACI, not this accreditation body",
    text: "A verifier abroad has configured only Global ACI as its root. It follows the same chain up to A and H, then one link further: both point up to R, Global ACI's recognition of this accreditation body for reference material production under ISO 17034 and for testing under ISO/IEC 17025. R is checked like any credential."
  },
  {
    id: "abroad-range",
    part: "decide",
    acts: ["rmp", "verifier"],
    state: { trust: "global-aci", certificate: "520" },
    unlock: ["certificate"],
    expect: "reject",
    title: "Recognized, and still out of scope",
    text: "The same verifier abroad, certificate D520. Global ACI recognizes the accreditation body, the accreditation body accredits the producer, and 520 mg/kg is still outside the producer's own scope. Recognition says who may accredit; it does not say whether this claim is covered."
  },
  {
    id: "aci-suspend",
    part: "decide",
    acts: ["verifier"],
    state: { trust: "global-aci", suspendGaci: !0 },
    unlock: ["suspendGaci"],
    expect: "reject",
    title: "Global ACI suspends its recognition of this body",
    text: "It sets the one bit for R in its suspension list and signs the list again, here in your browser. No other recognized body is touched, and nothing below R is re-issued. Verifier 3 may no longer rely on the chain; a verifier that trusts the accreditation body directly is not affected: which root a verifier trusts is its own policy."
  },
  {
    id: "proposal",
    part: "proposal",
    acts: ["gaci", "ab"],
    panel: "proposal",
    title: "Proposal: from recognized body to accreditation",
    text: "How we propose to use Recognized Entities in quality infrastructure: one recognition credential per body, which the body's accreditations point up to. It uses the Recognized Entities vocabulary as drafted; the per-recognition shape and the termsOfUse link are our proposal, for discussion."
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
    unlock: ["suspendGaci", "suspend", "revoke", "certificate", "tamper", "withhold", "trust", "ask", "rule"],
    title: "Your turn",
    text: "Every action is live. Certify another value, suspend or revoke, change or leave out a credential, or change what the verifier trusts and asks. Each change is evaluated at once."
  }
], Ol = "rm-verifier-1", Ll = "rm-verifier-other-anchor (demonstrator)", Gy = "rm-verifier-global-aci-1";
{
  const e = In.rm.profiles[Ol];
  Jt.rm.profiles[Ll] = ia({
    ...e,
    id: "https://vc4qi.example/profiles/rm-verifier-other-anchor",
    description: "Demonstrator-only variant of rm-verifier-1 whose only trust anchor is another, fictional accreditation body.",
    trustAnchors: e.trustAnchors.map((t) => ({ ...t, id: "https://other-ab.vc4qi.example/controller" }))
  });
}
const Ys = (e) => Cn("rm", e), Fy = (e) => e.certificate === "custom" ? se.LIVE : `https://producer.vc4qi.example/credentials/D${e.certificate}`;
function By(e) {
  return El(`rm:D:${e.value}:${e.uncertainty}:${e.method}`, () => {
    const { proof: t, ...n } = JSON.parse(Ys("https://producer.vc4qi.example/credentials/D178")), i = structuredClone(n.credentialSubject), o = i.materialPropertiesList[0].results[0];
    o.methodIri = o.methodIri.replace(/M1$/, e.method), o.data.quantity.value = e.value, o.data.quantity.uncertainty.expandedUncertainty = e.uncertainty;
    const r = { ...n.credentialStatus, id: `${se.PRODUCER_STATUS}#4`, statusListIndex: "4" };
    return Cl(
      {
        ...n,
        id: se.LIVE,
        name: "Reference material certificate, CuZn39Pb3 disc lot 1 (signed in this browser)",
        credentialSubject: i,
        credentialStatus: r
      },
      "producer",
      se.PRODUCER,
      n.validFrom,
      kl("rm"),
      Ys(se.PRODUCER)
    );
  });
}
async function lg(e = {}) {
  const t = { ...Vy, ...e }, n = Fy(t), i = {};
  t.certificate === "custom" && (i[n] = await By(t)), t.suspendA && (i[se.SUSPENSION] = await an("rm", se.SUSPENSION, "nab", se.NAB)), t.revokeS && (i[se.LAB_STATUS] = await an("rm", se.LAB_STATUS, "lab", se.LAB)), t.suspendGaci && (i[se.GACI_SUSPENSION] = await an("rm", se.GACI_SUSPENSION, "global-aci", se.GACI));
  const o = Object.keys(i);
  if (t.tamper) {
    const a = i[n] ?? Ys(n), c = JSON.parse(a).credentialSubject.materialPropertiesList[0].results[0].data.quantity.value;
    i[n] = Ml(a, `"value": "${c}"`, `"value": "${c === "150" ? "151" : "150"}"`);
  }
  const r = await ja({
    binding: "rm",
    profileName: t.trust === "ab" ? Ol : t.trust === "global-aci" ? Gy : Ll,
    requestId: "urn:vc4qi:demonstrator:rm-board",
    target: n,
    claims: [{ id: "as", sourcePointer: "/credentialSubject/materialPropertiesList/0/results/0" }],
    supplied: [],
    texts: i,
    withheld: t.withholdS ? se.S : void 0,
    ...t.ask === "fit" ? { conformity: {
      requirementId: "as-mass-fraction-max-200-mg-per-kg",
      decisionRuleId: t.rule === "simple" ? "simple-acceptance" : "guarded-acceptance-expanded-u"
    } } : {},
    notAsked: "The verifier asked only whether the value is authorized; no limit was applied."
  }), s = { R: se.R, A: se.A, H: se.H, O: se.O, S: se.S, D: n };
  return { ...r, state: t, certificate: n, uris: s, signedLive: o };
}
const wt = {
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
  TR: at.TR1,
  FI: "https://gs-body.vc4qi.example/credentials/FI-1",
  C: at.C1
}, ug = [
  {
    id: "ab",
    mono: "AB",
    name: "Accreditation body",
    does: "Accredits the GS body for testing and certifying. Can revoke.",
    publishes: [{ label: "Key", uri: wt.NAB }, { label: "Revocation list", uri: wt.NAB_STATUS }]
  },
  {
    id: "so",
    mono: "SO",
    name: "Scheme owner",
    does: "Permits a body to award the GS mark, in the role ZLS has. Can revoke.",
    publishes: [{ label: "Key", uri: wt.ZLS }, { label: "Revocation list", uri: wt.ZLS_STATUS }]
  },
  {
    id: "gsb",
    mono: "GSB",
    name: "GS body",
    does: "Examines, inspects and certifies. Can withdraw a certificate.",
    publishes: [{ label: "Key", uri: wt.BODY }, { label: "Revocation list", uri: wt.BODY_STATUS }]
  },
  {
    id: "mfr",
    mono: "MFR",
    name: "Manufacturer",
    does: "Makes hair dryer HD-01, marks each unit and issues its passport.",
    publishes: [{ label: "Key", uri: wt.MAKER }, { label: "Revocation list", uri: wt.MAKER_STATUS }]
  },
  {
    id: "verifier",
    mono: "V",
    name: "Verifier",
    does: "Relies on the passport's GS mark only as far as its own profile allows.",
    publishes: [{ label: "Profile" }]
  }
], pg = [
  { code: "GS-A", label: "Accreditation", kind: "grant", actor: "ab", row: 1, about: "gsb", heldBy: "gsb" },
  { code: "GS-S", label: "Scheme permission", kind: "grant", actor: "so", row: 3, about: "gsb", heldBy: "gsb" },
  { code: "TR-1", label: "Type examination", kind: "evidence", actor: "gsb", row: 1, about: "object", aboutLabel: "model HD-01", heldBy: "mfr" },
  { code: "GSC-1", label: "GS certificate", kind: "grant", actor: "gsb", row: 2, about: "object", aboutLabel: "model HD-01", heldBy: "mfr" },
  { code: "FI-1", label: "Factory inspection", kind: "evidence", actor: "gsb", row: 3, about: "mfr", heldBy: "mfr" },
  { code: "GSM", label: "GS-mark credential", kind: "evidence", actor: "mfr", row: 2, about: "object", aboutLabel: "the unit", heldBy: "mfr" },
  { code: "DPP", label: "Product passport", kind: "claim", actor: "mfr", row: 3, about: "object", aboutLabel: "the unit", heldBy: "mfr" }
], Zy = {
  unit: "sn-0042",
  revokeA: !1,
  revokeS: !1,
  revokeC: !1,
  tamper: !1,
  withholdTR: !1,
  trust: "both"
}, Hy = {
  "sn-0042": "https://maker.vc4qi.example/credentials/DPP-1",
  "sn-0050": "https://maker.vc4qi.example/credentials/DPP-3",
  "sn-0001": "https://maker.vc4qi.example/credentials/DPP-2"
}, fg = [
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
    text: "Its profile trusts the accreditation body and the scheme owner, so both halves of the authority, competence and permission, reach a root it trusts."
  },
  {
    id: "abroad",
    part: "decide",
    acts: ["verifier"],
    state: { trust: "accreditation-only" },
    unlock: ["trust"],
    expect: "not_established",
    title: "Verifier 2: a buyer abroad",
    text: "The same passport and the same bytes. This verifier trusts the accreditation body but not the scheme owner, so it cannot tell whether the mark was permitted. The verifier's policy decides, not the issuer's."
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
async function hg(e = {}) {
  const t = { ...Zy, ...e }, n = Hy[t.unit], i = wt, o = {};
  t.revokeA && (o[i.NAB_STATUS] = await an("gs", i.NAB_STATUS, "nab", i.NAB)), t.revokeS && (o[i.ZLS_STATUS] = await an("gs", i.ZLS_STATUS, "zls", i.ZLS)), t.revokeC && (o[i.BODY_STATUS] = await an("gs", i.BODY_STATUS, "gs-body", i.BODY));
  const r = Object.keys(o);
  t.tamper && (o[n] = Ml(Cn("gs", n), "-sn-", "-sn-9"));
  const s = await ja({
    binding: "gs",
    profileName: t.trust === "both" ? "gs-verifier-dpp-1" : Ra,
    requestId: "urn:vc4qi:demonstrator:gs-board",
    target: n,
    claims: [{ id: "mark", sourcePointer: "/credentialSubject/complianceInformation/gsMark" }],
    supplied: [],
    texts: o,
    withheld: t.withholdTR ? i.TR : void 0,
    notAsked: "The verifier asks only whether the GS-mark entry is authorized; the binding installs no decision rule."
  }), a = JSON.parse(Cn("gs", n)).evidence[0].id, c = { "GS-A": i.A, "GS-S": i.S, "TR-1": i.TR, "FI-1": i.FI, "GSC-1": i.C, GSM: a, DPP: n };
  return { ...s, state: t, certificate: n, uris: c, signedLive: r };
}
const mg = {
  evaluationTime: Xs,
  bindings: Object.fromEntries(Object.entries(Jt).map(([e, t]) => [e, `${t.manifest.id}@${t.manifest.version}`]))
};
export {
  Sd as BOARD_PARTS,
  Xs as EVALUATION_TIME,
  bd as EXAMPLES,
  ug as GS_ACTORS,
  pg as GS_ASSETS,
  Zy as GS_DEFAULT,
  fg as GS_STORY,
  og as RM_ACTORS,
  cg as RM_ASSETS,
  Vy as RM_DEFAULT,
  ag as RM_PARTS,
  dg as RM_STORY,
  mg as buildInfo,
  hg as evaluateGsBoard,
  lg as evaluateRmBoard,
  sg as evaluateScenario
};
