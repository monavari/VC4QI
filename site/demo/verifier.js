var Nl = Object.defineProperty;
var _a = (e) => {
  throw TypeError(e);
};
var Dl = (e, t, n) => t in e ? Nl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ft = (e, t, n) => Dl(e, typeof t != "symbol" ? t + "" : t, n), Pa = (e, t, n) => t.has(e) || _a("Cannot " + n);
var it = (e, t, n) => (Pa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Dn = (e, t, n) => t.has(e) ? _a("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), xr = (e, t, n, i) => (Pa(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n);
const An = { rm: { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/rm/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/bindings.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Contexts, schemas, controller documents, signed A/H/O/S/D fixtures and status lists are pinned and verify in TypeScript and Python. The I1-I4 evaluators (protection, status, authority routes, support, claim mapping and coverage, conformity) and the current-reliance time rules are implemented, with a cross-language parity vector; an independent transformation vector is still required before selection.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/rm/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/rm/1#RmAccreditation", "https://vc4qi.example/bindings/rm/1#RmOperationalScope", "https://vc4qi.example/bindings/rm/1#RmCertificate", "https://vc4qi.example/bindings/rm/1#RmStudy", "https://vc4qi.example/bindings/rm/1#RmLabAuthority", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential", "https://www.w3.org/ns/credentials/recognized-entities#RecognizedEntityCredential"], schemaUris: ["https://vc4qi.example/schemas/rm/1/accreditation.json", "https://vc4qi.example/schemas/rm/1/operational-scope.json", "https://vc4qi.example/schemas/rm/1/certificate.json", "https://vc4qi.example/schemas/rm/1/study.json", "https://vc4qi.example/schemas/rm/1/lab-authority.json", "https://vc4qi.example/schemas/rm/1/authorization-policy.json", "https://vc4qi.example/schemas/rm/1/study-reference.json", "https://vc4qi.example/schemas/rm/1/status-list.json", "https://vc4qi.example/schemas/rm/1/recognized-entity.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", recognitionCarrier: "RecognizedEntityCredential with the VCDM 2.0 context and https://vc4qi.example/contexts/recognized-entities/draft-20261104, a stand-in for the unpublished W3C Recognized Entities context (Working Draft of 4 November 2026)", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/rm-v1/catalog.json", decimalEncoding: "JSON strings typed xsd:decimal for every quantity, bound and uncertainty", orderedCollections: ["materials", "materialPropertiesList", "results"] }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/rm/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/rm/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/bindings/rm/1#authorizationCredential" }, { fact: "requiredStudy", nativePath: "/evidence/*/id", expandedIri: "https://www.w3.org/2018/credentials#evidence" }, { fact: "validFrom", nativePath: "/validFrom", expandedIri: "https://www.w3.org/2018/credentials#validFrom" }, { fact: "validUntil", nativePath: "/validUntil", expandedIri: "https://www.w3.org/2018/credentials#validUntil" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/rm/1#activityTime" }, { fact: "selectedResult", nativePath: "/credentialSubject/materialPropertiesList/*/results/*", expandedIri: "https://vc4qi.example/bindings/rm/1#results" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, material: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 1 }, authorizingReferenceSelection: "by-declared-reference-type-per-route; resolved credential type must match (else contradicted); several of one type not_established", supportReferences: { minimum: 1 }, multipleRecognizedDeclarations: "unsupported-unless-exact-deterministic-composition-is-listed", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "evidence", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", recognitionLists: "only the signatory lists a verifier profile names in bindingRules.recognition.lists; lists supplied by the holder, issuer.recognizedIn and identifier-based discovery are unsupported", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse authorizationCredential references on the credential chain; an authenticated grant found by other means establishes nothing (not_established)" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/bindings/rm/1#RmAuthorizationPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], supportEvidence: "https://vc4qi.example/bindings/rm/1#RmStudyReference", supportEvidenceEstablishes: ["support-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "support-applicability", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { issueRmCertificate: "https://vc4qi.example/bindings/rm/1#issueRmCertificate", maintainRmScope: "https://vc4qi.example/bindings/rm/1#maintainRmScope", issueRmStudy: "https://vc4qi.example/bindings/rm/1#issueRmStudy" }, rules: ["A grantee equals the producer exercising certificate issuance and scope maintenance.", "O issuer and grantee equal that producer and O is contained by A.", "D issuer equals O grantee.", "S issuer equals H laboratory grantee.", "Commissioning a study grants no laboratory competence."] }, scopeAndMapping: { mappingVersion: "rm-experimental-mapping-1", recordEvaluator: "https://vc4qi.example/evaluators/rm-complete-record/1", quantityEvaluator: "https://vc4qi.example/evaluators/exact-mass-fraction/1", dimensions: ["matrixIri", "formIri", "propertyIri", "methodIri", "quantityKindIri", "range"], units: { "mg/kg": "1e-6", "kg/kg": "1" }, boundaries: "inclusive", missingOrEmptyRestrictedDimension: "not_established", recordCombination: "one-complete-record-per-claim-no-splicing", uncertainty: { requiredCoverageFactor: "2", nonnegative: !0, accreditationCeiling: "none" }, methodRevisions: [{ method: "https://vc4qi.example/bindings/rm/1#M2", revises: "https://vc4qi.example/bindings/rm/1#M1" }], methodSuccessionInterpretation: "verifier-profile mapping.methodSuccession: accept-successor | require-extension | none (none leaves a revised method not_established at gate 4)", claimCoverage: "the selected result, mapped at gate 4, must lie in one complete record of the route's own scope credential (O for operational-scope, A for direct-accreditation); no fallback to a parent grant", conformity: "verifier-profile requirements and decision rules, evaluated at gate 6 only after the claim is authorized; exact arithmetic reported in the requirement's unit", unsupported: ["asymmetric-uncertainty", "display-label-equality", "substring-matching", "implicit-method-succession"] }, routesAndRestrictions: { certificateRoute: ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A"], installedCertificateRoutes: { "operational-scope": ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A", "A-issuer-is-accreditation-anchor-or-recognized-for-main-scope"], "direct-accreditation": ["A-authorizes-D", "A-issuer-is-accreditation-anchor-or-recognized-for-main-scope"] }, recognition: "a grant issuer that is not a configured anchor for the purpose is accepted only through a usable, unsuspended, profile-named signatory list whose issuer is an anchor for the list purpose and which names the grant issuer with the required action for the purpose's main scope (activity and normative document, exact), recognized by the list issuer and in force at the activity time; a main scope the list does not grant contradicts; a missing list, entry or time is not_established; recognition never establishes QI scope", studyRoute: ["H-authorizes-S"], requiredSupport: ["S", "H"], globalRestrictions: ["applicable-suspension", "request-time-policy"], installedGlobalRestrictions: { "accreditation-suspension": "every usable anchor-issued RmAccreditation of the certificate issuer reached through the target's termsOfUse references, on any route, must carry a fresh issuer suspension status (Bitstring Status List, statusPurpose suspension) with its bit clear; missing or unreadable suspension status is not_established; unusable or unreferenced credentials are not restrictions" }, unusedAlternativeFailures: "diagnostic-only: only the target and the credentials on the selected route and support chains decide the request", routeComposition: "AND-within-route-OR-between-complete-routes", baselineAlternatives: 1, provenanceDoesNotEstablish: ["permission", "containment"] }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, proofCollections: "unsupported-in-initial-slice", status: "authenticated-current-revocation-status-required-for-A-O-D-S-H; suspension entries on accreditations are read only by the accreditation-suspension restriction", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], freshness: "verifier-profile maxAgeSeconds from the status list validFrom; no default", historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { objectApplicability: ["materialBatch", "activity", "method", "activityTime"], supportSubjectNeedNotEqualTargetIssuer: !0, mandatoryDisclosure: ["issuer", "credentialSubject/id", "activityTime", "selectedResult", "restrictions", "authorizingReference", "requiredStudy", "relatedResource", "proof"], missingMandatoryDisclosure: "not_established", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/acceptance-ledger.csv", testVectorRoots: ["testdata/regressions", "bindings/experimental/rm-v1/test-vectors"], unsupported: ["production-accreditation", "legal-effect", "physical-sample-truth", "public-example-namespace-resolution", "general-ontology-reasoning", "wallet-interoperability", "external-recognition-adapter", "timestamp-service"] } }, profiles: { "rm-verifier-1": { id: "https://vc4qi.example/profiles/rm-verifier", version: "1", status: "experimental", description: "Verifier-owned reliance profile for the experimental RM v1 binding. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "accredit-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } }, "rm-verifier-global-aci-1": { id: "https://vc4qi.example/profiles/rm-verifier-global-aci", version: "1", status: "experimental", description: "Fictional verifier abroad: its only trust anchor is a fictional stand-in for an arrangement anchor (Global ACI role), not the accreditation body. The accreditation body is accepted through the anchor's signatory list, a W3C Recognized Entities credential (Working Draft of 4 November 2026), for the main scope each grant requires. Otherwise identical to rm-verifier-1; not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://global-aci.vc4qi.example/controller", purposes: ["recognize-accreditation-bodies"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] }, bindingRules: { recognition: { lists: ["https://global-aci.vc4qi.example/credentials/MRA-2026"], listPurpose: "recognize-accreditation-bodies", action: "accredit", purposes: { "accredit-rm-producers": { activity: "Reference material production", standardId: "urn:iso:std:iso:17034:ed-1" }, "accredit-rm-laboratories": { activity: "Testing", standardId: "urn:iso:std:iso-iec:17025:ed-3" } } } } }, "rm-verifier-two-routes-1": { id: "https://vc4qi.example/profiles/rm-verifier-two-routes", version: "1", status: "experimental", description: "Fictional verifier profile with two complete certificate routes, (operational scope within an accreditation) OR (direct accreditation), and the accreditation-suspension global restriction outside the OR. Exercises route composition (C01-C07); not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "accredit-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope", "direct-accreditation"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/recognized-entity.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-8J/9dzpSQVoGNZkIiea3N8w46rbXVKpFefcqiidEjtBZie9asls0EjScb8egD9O8", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/rm/1/recognized-entity.json",
  "title": "Arrangement signatory list (W3C Recognized Entities credential)",
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
` }, { uri: "https://global-aci.vc4qi.example/credentials/MRA-2026", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-aEsVzxnpjUOQ+vhvV2p/y2A8IDC6JAAQUHbXgaEmynb9pLHALJ21rKgmLhdDU4GN", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/recognized-entities/draft-20261104"
  ],
  "id": "https://global-aci.vc4qi.example/credentials/MRA-2026",
  "type": [
    "VerifiableCredential",
    "RecognizedEntityCredential"
  ],
  "issuer": {
    "id": "https://global-aci.vc4qi.example/controller",
    "type": "RecognizedIssuer",
    "name": "Global ACI (fictional stand-in)"
  },
  "validFrom": "2026-01-01T00:00:00Z",
  "validUntil": "2027-12-31T23:59:59Z",
  "credentialSchema": {
    "id": "https://vc4qi.example/schemas/rm/1/recognized-entity.json",
    "type": "JsonSchema"
  },
  "name": "Signatories of the arrangement (fictional fixture)",
  "description": "Fictional fixture in the shape of a W3C Recognized Entities credential. Not issued or endorsed by Global Accreditation Cooperation Incorporated or any accreditation body.",
  "credentialSubject": [
    {
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
          },
          "validFrom": "2026-01-01T00:00:00Z",
          "validUntil": "2027-12-31T23:59:59Z"
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
          },
          "validFrom": "2026-01-01T00:00:00Z",
          "validUntil": "2027-12-31T23:59:59Z"
        }
      ]
    }
  ],
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
    "created": "2026-01-01T00:00:00Z",
    "proofValue": "z3f8YUKHr7DhACY8R75KGyWyKieDXBqXqmy9NKjs7i7Ayaj1o9DtBCZoFffciJGFGSxQhSWirkPyRbJi7fEmnYEuB"
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
function zl(e) {
  return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function Ys(e, ...t) {
  if (!zl(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function Ta(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Vl(e, t) {
  Ys(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error("digestInto() expects output buffer of length at least " + n);
}
function $n(...e) {
  for (let t = 0; t < e.length; t++)
    e[t].fill(0);
}
function Sr(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function rt(e, t) {
  return e << 32 - t | e >>> t;
}
function Ul(e) {
  if (typeof e != "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(e));
}
function Sd(e) {
  return typeof e == "string" && (e = Ul(e)), Ys(e), e;
}
class Gl {
}
function ea(e) {
  const t = (i) => e().update(Sd(i)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
function Fl(e, t, n, i) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, i);
  const o = BigInt(32), r = BigInt(4294967295), s = Number(n >> o & r), a = Number(n & r), c = i ? 4 : 0, l = i ? 0 : 4;
  e.setUint32(t + c, s, i), e.setUint32(t + l, a, i);
}
function Bl(e, t, n) {
  return e & t ^ ~e & n;
}
function Zl(e, t, n) {
  return e & t ^ e & n ^ t & n;
}
class Id extends Gl {
  constructor(t, n, i, o) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = n, this.padOffset = i, this.isLE = o, this.buffer = new Uint8Array(t), this.view = Sr(this.buffer);
  }
  update(t) {
    Ta(this), t = Sd(t), Ys(t);
    const { view: n, buffer: i, blockLen: o } = this, r = t.length;
    for (let s = 0; s < r; ) {
      const a = Math.min(o - this.pos, r - s);
      if (a === o) {
        const c = Sr(t);
        for (; o <= r - s; s += o)
          this.process(c, s);
        continue;
      }
      i.set(t.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === o && (this.process(n, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    Ta(this), Vl(t, this), this.finished = !0;
    const { buffer: n, view: i, blockLen: o, isLE: r } = this;
    let { pos: s } = this;
    n[s++] = 128, $n(this.buffer.subarray(s)), this.padOffset > o - s && (this.process(i, 0), s = 0);
    for (let y = s; y < o; y++)
      n[y] = 0;
    Fl(i, o - 8, BigInt(this.length * 8), r), this.process(i, 0);
    const a = Sr(t), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const l = c / 4, p = this.get();
    if (l > p.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let y = 0; y < l; y++)
      a.setUint32(4 * y, p[y], r);
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
]), zn = /* @__PURE__ */ BigInt(2 ** 32 - 1), Ca = /* @__PURE__ */ BigInt(32);
function Hl(e, t = !1) {
  return t ? { h: Number(e & zn), l: Number(e >> Ca & zn) } : { h: Number(e >> Ca & zn) | 0, l: Number(e & zn) | 0 };
}
function Jl(e, t = !1) {
  const n = e.length;
  let i = new Uint32Array(n), o = new Uint32Array(n);
  for (let r = 0; r < n; r++) {
    const { h: s, l: a } = Hl(e[r], t);
    [i[r], o[r]] = [s, a];
  }
  return [i, o];
}
const Ea = (e, t, n) => e >>> n, ka = (e, t, n) => e << 32 - n | t >>> n, Kt = (e, t, n) => e >>> n | t << 32 - n, Qt = (e, t, n) => e << 32 - n | t >>> n, Vn = (e, t, n) => e << 64 - n | t >>> n - 32, Un = (e, t, n) => e >>> n - 32 | t << 64 - n;
function ht(e, t, n, i) {
  const o = (t >>> 0) + (i >>> 0);
  return { h: e + n + (o / 2 ** 32 | 0) | 0, l: o | 0 };
}
const Kl = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0), Ql = (e, t, n, i) => t + n + i + (e / 2 ** 32 | 0) | 0, Wl = (e, t, n, i) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (i >>> 0), Xl = (e, t, n, i, o) => t + n + i + o + (e / 2 ** 32 | 0) | 0, Yl = (e, t, n, i, o) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (i >>> 0) + (o >>> 0), eu = (e, t, n, i, o, r) => t + n + i + o + r + (e / 2 ** 32 | 0) | 0, tu = /* @__PURE__ */ Uint32Array.from([
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
class nu extends Id {
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
    for (let y = 0; y < 16; y++, n += 4)
      At[y] = t.getUint32(n, !1);
    for (let y = 16; y < 64; y++) {
      const f = At[y - 15], h = At[y - 2], v = rt(f, 7) ^ rt(f, 18) ^ f >>> 3, x = rt(h, 17) ^ rt(h, 19) ^ h >>> 10;
      At[y] = x + At[y - 7] + v + At[y - 16] | 0;
    }
    let { A: i, B: o, C: r, D: s, E: a, F: c, G: l, H: p } = this;
    for (let y = 0; y < 64; y++) {
      const f = rt(a, 6) ^ rt(a, 11) ^ rt(a, 25), h = p + f + Bl(a, c, l) + tu[y] + At[y] | 0, x = (rt(i, 2) ^ rt(i, 13) ^ rt(i, 22)) + Zl(i, o, r) | 0;
      p = l, l = c, c = a, a = s + h | 0, s = r, r = o, o = i, i = h + x | 0;
    }
    i = i + this.A | 0, o = o + this.B | 0, r = r + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, l = l + this.G | 0, p = p + this.H | 0, this.set(i, o, r, s, a, c, l, p);
  }
  roundClean() {
    $n(At);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), $n(this.buffer);
  }
}
const Ad = Jl([
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
].map((e) => BigInt(e))), iu = Ad[0], ru = Ad[1], qt = /* @__PURE__ */ new Uint32Array(80), Rt = /* @__PURE__ */ new Uint32Array(80);
class qd extends Id {
  constructor(t = 64) {
    super(128, t, 16, !1), this.Ah = Ae[0] | 0, this.Al = Ae[1] | 0, this.Bh = Ae[2] | 0, this.Bl = Ae[3] | 0, this.Ch = Ae[4] | 0, this.Cl = Ae[5] | 0, this.Dh = Ae[6] | 0, this.Dl = Ae[7] | 0, this.Eh = Ae[8] | 0, this.El = Ae[9] | 0, this.Fh = Ae[10] | 0, this.Fl = Ae[11] | 0, this.Gh = Ae[12] | 0, this.Gl = Ae[13] | 0, this.Hh = Ae[14] | 0, this.Hl = Ae[15] | 0;
  }
  // prettier-ignore
  get() {
    const { Ah: t, Al: n, Bh: i, Bl: o, Ch: r, Cl: s, Dh: a, Dl: c, Eh: l, El: p, Fh: y, Fl: f, Gh: h, Gl: v, Hh: x, Hl: b } = this;
    return [t, n, i, o, r, s, a, c, l, p, y, f, h, v, x, b];
  }
  // prettier-ignore
  set(t, n, i, o, r, s, a, c, l, p, y, f, h, v, x, b) {
    this.Ah = t | 0, this.Al = n | 0, this.Bh = i | 0, this.Bl = o | 0, this.Ch = r | 0, this.Cl = s | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = l | 0, this.El = p | 0, this.Fh = y | 0, this.Fl = f | 0, this.Gh = h | 0, this.Gl = v | 0, this.Hh = x | 0, this.Hl = b | 0;
  }
  process(t, n) {
    for (let m = 0; m < 16; m++, n += 4)
      qt[m] = t.getUint32(n), Rt[m] = t.getUint32(n += 4);
    for (let m = 16; m < 80; m++) {
      const d = qt[m - 15] | 0, u = Rt[m - 15] | 0, w = Kt(d, u, 1) ^ Kt(d, u, 8) ^ Ea(d, u, 7), S = Qt(d, u, 1) ^ Qt(d, u, 8) ^ ka(d, u, 7), A = qt[m - 2] | 0, j = Rt[m - 2] | 0, R = Kt(A, j, 19) ^ Vn(A, j, 61) ^ Ea(A, j, 6), E = Qt(A, j, 19) ^ Un(A, j, 61) ^ ka(A, j, 6), L = Wl(S, E, Rt[m - 7], Rt[m - 16]), _ = Xl(L, w, R, qt[m - 7], qt[m - 16]);
      qt[m] = _ | 0, Rt[m] = L | 0;
    }
    let { Ah: i, Al: o, Bh: r, Bl: s, Ch: a, Cl: c, Dh: l, Dl: p, Eh: y, El: f, Fh: h, Fl: v, Gh: x, Gl: b, Hh: I, Hl: g } = this;
    for (let m = 0; m < 80; m++) {
      const d = Kt(y, f, 14) ^ Kt(y, f, 18) ^ Vn(y, f, 41), u = Qt(y, f, 14) ^ Qt(y, f, 18) ^ Un(y, f, 41), w = y & h ^ ~y & x, S = f & v ^ ~f & b, A = Yl(g, u, S, ru[m], Rt[m]), j = eu(A, I, d, w, iu[m], qt[m]), R = A | 0, E = Kt(i, o, 28) ^ Vn(i, o, 34) ^ Vn(i, o, 39), L = Qt(i, o, 28) ^ Un(i, o, 34) ^ Un(i, o, 39), _ = i & r ^ i & a ^ r & a, C = o & s ^ o & c ^ s & c;
      I = x | 0, g = b | 0, x = h | 0, b = v | 0, h = y | 0, v = f | 0, { h: y, l: f } = ht(l | 0, p | 0, j | 0, R | 0), l = a | 0, p = c | 0, a = r | 0, c = s | 0, r = i | 0, s = o | 0;
      const D = Kl(R, L, C);
      i = Ql(D, j, E, _), o = D | 0;
    }
    ({ h: i, l: o } = ht(this.Ah | 0, this.Al | 0, i | 0, o | 0)), { h: r, l: s } = ht(this.Bh | 0, this.Bl | 0, r | 0, s | 0), { h: a, l: c } = ht(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: l, l: p } = ht(this.Dh | 0, this.Dl | 0, l | 0, p | 0), { h: y, l: f } = ht(this.Eh | 0, this.El | 0, y | 0, f | 0), { h, l: v } = ht(this.Fh | 0, this.Fl | 0, h | 0, v | 0), { h: x, l: b } = ht(this.Gh | 0, this.Gl | 0, x | 0, b | 0), { h: I, l: g } = ht(this.Hh | 0, this.Hl | 0, I | 0, g | 0), this.set(i, o, r, s, a, c, l, p, y, f, h, v, x, b, I, g);
  }
  roundClean() {
    $n(qt, Rt);
  }
  destroy() {
    $n(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class su extends qd {
  constructor() {
    super(48), this.Ah = Ie[0] | 0, this.Al = Ie[1] | 0, this.Bh = Ie[2] | 0, this.Bl = Ie[3] | 0, this.Ch = Ie[4] | 0, this.Cl = Ie[5] | 0, this.Dh = Ie[6] | 0, this.Dl = Ie[7] | 0, this.Eh = Ie[8] | 0, this.El = Ie[9] | 0, this.Fh = Ie[10] | 0, this.Fl = Ie[11] | 0, this.Gh = Ie[12] | 0, this.Gl = Ie[13] | 0, this.Hh = Ie[14] | 0, this.Hl = Ie[15] | 0;
  }
}
const au = /* @__PURE__ */ ea(() => new nu()), ou = /* @__PURE__ */ ea(() => new qd()), cu = /* @__PURE__ */ ea(() => new su()), Rd = au, du = ou, lu = cu;
class uu {
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
    return this._algo === "sha384" ? r = lu(i) : this._algo === "sha512" ? r = du(i) : r = Rd(i), t === "base64" ? btoa(String.fromCharCode(...r)) : t === "hex" ? Array.from(r).map((s) => s.toString(16).padStart(2, "0")).join("") : r;
  }
}
function Es(e) {
  return new uu(e);
}
class Ce extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "CatalogError";
  }
}
function pu(e, t) {
  if (e.trim().length === 0)
    throw new Ce("INVALID_RESOURCE", `${t} must be nonempty.`);
}
function nr(e) {
  return `sha384-${Es("sha384").update(e).digest("base64")}`;
}
function Ma(e) {
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
class jd {
  constructor(t) {
    Dn(this, on, /* @__PURE__ */ new Map());
    for (const n of t) {
      for (const [o, r] of Object.entries({
        uri: n.uri,
        mediaType: n.mediaType,
        origin: n.origin,
        version: n.version
      })) pu(r, o);
      if (it(this, on).has(n.uri))
        throw new Ce("DUPLICATE_RESOURCE", `Duplicate static resource: ${n.uri}`);
      const i = nr(n.bytes);
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
    return new fu(it(this, on), Object.freeze({ ...t }));
  }
}
on = new WeakMap();
var cn, dn;
class fu {
  constructor(t, n) {
    Dn(this, cn, 0);
    Dn(this, dn, 0);
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
    return xr(this, cn, it(this, cn) + 1), xr(this, dn, it(this, dn) + n.bytes.byteLength), { ...n, bytes: Uint8Array.from(n.bytes) };
  }
}
cn = new WeakMap(), dn = new WeakMap();
function $d(e) {
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
const La = "https://vc4qi.example/bindings/rm/1", Ir = [
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
function Gn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function _d(e) {
  if (e !== null && typeof e == "object") {
    for (const t of Object.values(e)) _d(t);
    Object.freeze(e);
  }
  return e;
}
function hu(e) {
  if (!Gn(e)) throw new TypeError("Binding manifest must be an object.");
  if (Object.keys(e).length !== Ir.length || Ir.some((n) => !Object.hasOwn(e, n)))
    throw new TypeError("Binding manifest must contain exactly the supported top-level categories.");
  if (typeof e.id != "string" || e.id.length === 0 || typeof e.version != "string" || e.version.length === 0 || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Binding manifest identity, version, or status is invalid.");
  if (!Gn(e.installation) || e.installation.status !== "incomplete" && e.installation.status !== "installable" || typeof e.installation.reason != "string" || e.installation.reason.length === 0 || !Array.isArray(e.installation.pendingResources) || e.installation.pendingResources.some((n) => typeof n != "string" || n.length === 0))
    throw new TypeError("Binding manifest installation state is invalid.");
  if (!Array.isArray(e.factMappings) || e.factMappings.length === 0 || e.factMappings.some((n) => !Gn(n)))
    throw new TypeError("Binding manifest factMappings must be a nonempty object array.");
  for (const n of Ir.slice(4))
    if (!(n === "installation" || n === "factMappings") && (!Gn(e[n]) || Object.keys(e[n]).length === 0))
      throw new TypeError(`Binding manifest ${n} must be a nonempty object.`);
  return _d(structuredClone(e));
}
const Ft = "https://www.w3.org/ns/credentials/v2", mu = "https://vc4qi.example/contexts/rm/1", Ot = "https://vc4qi.example/schemas/rm/1/", yu = "https://vc4qi.example/contexts/recognized-entities/draft-20261104", Pd = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", ks = BigInt(58);
function gu(e) {
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
    const o = Number(n % ks);
    n = n / ks, i.unshift(o);
  }
  return "1".repeat(t) + i.map((o) => Pd[o]).join("");
}
function vu(e) {
  if (e.length === 0) return new Uint8Array(0);
  let t = 0;
  for (const s of e) {
    if (s !== "1") break;
    t++;
  }
  let n = 0n;
  for (const s of e) {
    const a = Pd.indexOf(s);
    if (a === -1) throw new Error(`Invalid base58btc character: '${s}'`);
    n = n * ks + BigInt(a);
  }
  const i = [];
  for (; n > 0n; )
    i.push(Number(n & 0xffn)), n >>= 8n;
  i.reverse();
  const o = Uint8Array.from(i), r = new Uint8Array(t + o.length);
  return r.set(o, t), r;
}
function bu(e) {
  return "z" + gu(e);
}
function ta(e) {
  if (!e.startsWith("z"))
    throw new Error(`Expected multibase base58btc prefix 'z', got '${e[0]}'`);
  return vu(e.slice(1));
}
const Oa = [237, 1], wu = ["revoked", "expires"];
function ge(e, t, n, i = {}) {
  return Object.freeze({ state: e, code: t, reason: n, ...i });
}
function Fi(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function xu(e) {
  if (typeof e == "string" && e.length > 0) return e;
  if (Fi(e) && typeof e.id == "string" && e.id.length > 0) return e.id;
}
function Su(e) {
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
function Iu(e) {
  if (typeof e != "string" || !e.startsWith("z")) return;
  let t;
  try {
    t = ta(e);
  } catch {
    return;
  }
  if (!(t.length !== 34 || t[0] !== Oa[0] || t[1] !== Oa[1]))
    return t.slice(2);
}
function Au(e, t, n) {
  const i = xu(e);
  if (i === void 0)
    return ge("not_established", "ISSUER_MISSING", "The credential has no issuer identifier.");
  if (typeof t != "string")
    return ge("contradicted", "MALFORMED_METHOD", "The proof names no verification method.");
  const o = Su(t);
  if (o === void 0)
    return ge(
      "contradicted",
      "MALFORMED_METHOD",
      `Verification method ${t} is not an absolute URL with a fragment.`
    );
  if (o !== i)
    return ge(
      "contradicted",
      "NOT_ISSUER_CONTROLLER",
      `Verification method ${t} is not in issuer ${i}'s controller document.`
    );
  let r, s;
  try {
    const f = n.resolve(o);
    s = f.digestSRI, r = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(f.bytes));
  } catch (f) {
    return f instanceof Ce ? ge(
      "not_established",
      "CONTROLLER_NOT_INSTALLED",
      `Controller document ${o} is not available: ${f.code}.`
    ) : ge(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${o} is not valid UTF-8 JSON.`
    );
  }
  if (!Fi(r))
    return ge(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${o} is not a JSON object.`
    );
  if (r.id !== o)
    return ge(
      "contradicted",
      "CONTROLLER_ID_MISMATCH",
      `Controller document at ${o} identifies itself as ${String(r.id)}.`
    );
  const c = (Array.isArray(r.verificationMethod) ? r.verificationMethod : []).filter((f) => Fi(f) && f.id === t);
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
  const l = c[0];
  if (l.type !== "Multikey")
    return ge(
      "not_established",
      "METHOD_TYPE_UNSUPPORTED",
      `Verification method type ${String(l.type)} is not supported; Multikey is required.`
    );
  if (l.controller !== o)
    return ge(
      "contradicted",
      "METHOD_CONTROLLER_MISMATCH",
      `${t} is controlled by ${String(l.controller)}, not ${o}.`
    );
  if (wu.some((f) => Object.hasOwn(l, f)))
    return ge(
      "not_established",
      "METHOD_LIFECYCLE_UNSUPPORTED",
      "Key revocation/expiry metadata is not supported in the initial slice."
    );
  const p = Iu(l.publicKeyMultibase);
  if (p === void 0)
    return ge(
      "contradicted",
      "INVALID_PUBLIC_KEY",
      `${t} does not carry an Ed25519 Multikey public key.`
    );
  const y = Array.isArray(r.assertionMethod) ? r.assertionMethod : [];
  return y.includes(t) ? ge(
    "established",
    "AUTHORIZED",
    `${t} is the issuer's Ed25519 assertion key.`,
    { publicKey: p, verificationMethod: t, controllerDocumentDigest: s }
  ) : y.some((f) => Fi(f) && f.id === t) ? ge(
    "not_established",
    "EMBEDDED_METHOD_UNSUPPORTED",
    "Embedded assertionMethod entries are not supported; a reference is required."
  ) : ge(
    "contradicted",
    "NOT_ASSERTION_METHOD",
    `${t} is not authorized for assertionMethod.`
  );
}
const Na = ["accept-successor", "require-extension", "none"], qu = ["value-at-most-limit", "value-plus-expanded-uncertainty-at-most-limit"], Ru = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/;
function He(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const De = (e) => typeof e == "string" && e.trim().length > 0, Ar = (e) => Array.isArray(e) && e.length > 0 && e.every(De) && new Set(e).size === e.length;
function na(e) {
  if (!He(e) || !De(e.id) || !De(e.version) || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Reliance profile identity, version or status is invalid.");
  const t = e.binding;
  if (!He(t) || !De(t.id) || !De(t.version))
    throw new TypeError("Reliance profile must name exactly one binding and version.");
  if (!Array.isArray(e.trustAnchors) || e.trustAnchors.some((l) => !He(l) || !De(l.id) || !Ar(l.purposes)))
    throw new TypeError("Reliance profile trustAnchors must list anchors with explicit purposes.");
  const n = e.authority;
  if (!He(n) || !Ar(n.certificateRoutes) || !Array.isArray(n.globalRestrictions) || !n.globalRestrictions.every(De) || !Number.isSafeInteger(n.maxRoutes) || n.maxRoutes <= 0)
    throw new TypeError("Reliance profile authority needs certificateRoutes, globalRestrictions and a positive maxRoutes.");
  const i = e.credentialStatus;
  if (!He(i) || typeof i.required != "boolean" || !Ar(i.purposes) || !Number.isSafeInteger(i.maxAgeSeconds) || i.maxAgeSeconds <= 0)
    throw new TypeError("Reliance profile credentialStatus needs required, purposes and a positive maxAgeSeconds.");
  const o = e.mapping;
  if (!He(o) || !Na.includes(o.methodSuccession))
    throw new TypeError(`Reliance profile mapping.methodSuccession must be one of ${Na.join(", ")}.`);
  const r = e.conformity;
  if (!He(r) || !Array.isArray(r.requirements) || !Array.isArray(r.decisionRules) || r.requirements.some((l) => !He(l) || !De(l.id) || !De(l.propertyIri) || !De(l.quantityKindIri) || !He(l.upperLimit) || typeof l.upperLimit.value != "string" || !Ru.test(l.upperLimit.value) || !De(l.upperLimit.unit)) || r.decisionRules.some((l) => !He(l) || !De(l.id) || !qu.includes(l.acceptWhen)))
    throw new TypeError("Reliance profile conformity needs requirements (id, propertyIri, quantityKindIri, upperLimit) and decisionRules (id, acceptWhen).");
  if (e.bindingRules !== void 0 && !He(e.bindingRules))
    throw new TypeError("Reliance profile bindingRules must be an object when present.");
  const s = r.requirements, a = r.decisionRules, c = [...s.map((l) => l.id), ...a.map((l) => l.id)];
  if (new Set(c).size !== c.length) throw new TypeError("Reliance profile conformity ids must be unique.");
  return Object.freeze({
    id: e.id,
    version: e.version,
    status: e.status,
    binding: Object.freeze({ id: t.id, version: t.version }),
    trustAnchors: Object.freeze(e.trustAnchors.map((l) => Object.freeze({
      id: l.id,
      purposes: Object.freeze([...l.purposes])
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
      requirements: Object.freeze(s.map((l) => Object.freeze({
        id: l.id,
        propertyIri: l.propertyIri,
        quantityKindIri: l.quantityKindIri,
        upperLimit: Object.freeze({ value: l.upperLimit.value, unit: l.upperLimit.unit })
      }))),
      decisionRules: Object.freeze(a.map((l) => Object.freeze({ id: l.id, acceptWhen: l.acceptWhen })))
    }),
    bindingRules: Object.freeze({ ...e.bindingRules })
  });
}
function ue(e, t) {
  if (e.trim().length === 0)
    throw new TypeError(`${t} must be a non-empty string.`);
}
function qr(e, t) {
  if (new Set(e).size !== e.length)
    throw new TypeError(`${t} must not contain duplicates.`);
}
function Ms(e, t) {
  const n = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/.exec(e);
  if (!n)
    throw new TypeError(`${t} must be an ISO 8601 date-time with an explicit offset.`);
  const [, i, o, r, s, a, c] = n, l = n[7], p = Number(i), y = Number(o), f = Number(r), h = Number(s), v = Number(a), x = Number(c), b = /* @__PURE__ */ new Date(0);
  b.setUTCFullYear(p, y - 1, f), b.setUTCHours(0, 0, 0, 0);
  const I = b.getUTCFullYear() !== p || b.getUTCMonth() !== y - 1 || b.getUTCDate() !== f, g = l === "Z" ? null : /^([+-])(\d{2}):(\d{2})$/.exec(l), m = g !== null && (Number(g[2]) > 23 || Number(g[3]) > 59);
  if (p < 1 || I || h > 23 || v > 59 || x > 59 || m || !Number.isFinite(Date.parse(e)))
    throw new TypeError(`${t} must be a valid ISO 8601 date-time.`);
}
function Rr(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0)
    throw new TypeError(`${t} must be a positive safe integer.`);
}
function Ji(e, t) {
  ue(e.id, `${t}.id`), ue(e.version, `${t}.version`);
}
function Ki(e) {
  return Object.freeze({ id: e.id, version: e.version });
}
function In(e) {
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
function ju(e) {
  if (ue(e.requestId, "requestId"), ue(e.targetId, "targetId"), ue(e.purpose, "purpose"), ue(e.trustConfigId, "trustConfigId"), Ji(e.binding, "binding"), Ji(e.profile, "profile"), Ms(e.evaluationTime, "evaluationTime"), Ms(e.activityTime, "activityTime"), e.selectedClaims.length === 0)
    throw new TypeError("selectedClaims must contain at least one claim.");
  for (const [r, s] of e.selectedClaims.entries())
    ue(s.id, `selectedClaims[${r}].id`), ue(s.sourcePointer, `selectedClaims[${r}].sourcePointer`);
  qr(e.selectedClaims.map((r) => r.id), "selected claim IDs"), qr(e.selectedClaims.map((r) => r.sourcePointer), "selected claim source pointers");
  for (const [r, s] of e.suppliedEvidence.entries())
    ue(s, `suppliedEvidence[${r}]`);
  qr(e.suppliedEvidence, "suppliedEvidence"), Rr(e.resolverLimits.maxResources, "resolverLimits.maxResources"), Rr(e.resolverLimits.maxDepth, "resolverLimits.maxDepth"), Rr(e.resolverLimits.maxBytes, "resolverLimits.maxBytes"), e.conformity && (ue(e.conformity.requirementId, "conformity.requirementId"), ue(e.conformity.decisionRuleId, "conformity.decisionRuleId"));
  const t = Object.freeze(e.selectedClaims.map((r) => Object.freeze({
    id: r.id,
    sourcePointer: r.sourcePointer
  }))), n = Object.freeze([...e.suppliedEvidence]), i = Object.freeze({ ...e.resolverLimits }), o = e.conformity ? Object.freeze({ ...e.conformity }) : void 0;
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    selectedClaims: t,
    purpose: e.purpose,
    binding: Ki(e.binding),
    profile: Ki(e.profile),
    trustConfigId: e.trustConfigId,
    evaluationTime: e.evaluationTime,
    activityTime: e.activityTime,
    suppliedEvidence: n,
    resolverLimits: i,
    ...o ? { conformity: o } : {}
  });
}
function $u(e, t) {
  if (!Number.isInteger(e.gate) || e.gate < 0 || e.gate > 6)
    throw new TypeError(`trace[${t}].gate must be a canonical gate number 0-6.`);
  ue(e.nodeUse, `trace[${t}].nodeUse`), ue(e.predicate, `trace[${t}].predicate`), ue(e.reason, `trace[${t}].reason`);
  const n = In({
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
function _u(e, t) {
  if (ue(e.uri, `resources[${t}].uri`), !/^sha384-[A-Za-z0-9+/]{64}$/.test(e.digestSRI))
    throw new TypeError(`resources[${t}].digestSRI must be a SHA-384 SRI value.`);
  if (!["static", "artifact", "status"].includes(e.kind) || !["catalog", "supplied"].includes(e.source))
    throw new TypeError(`resources[${t}] has an unsupported kind or source.`);
  return Ms(e.observedAt, `resources[${t}].observedAt`), Object.freeze({ ...e });
}
function ir(e) {
  if (ue(e.requestId, "requestId"), ue(e.targetId, "targetId"), Ji(e.binding, "binding"), Ji(e.profile, "profile"), e.artifactVerification.forEach((t, n) => ue(t.artifactId, `artifactVerification[${n}].artifactId`)), e.authorization.forEach((t, n) => ue(t.claimId, `authorization[${n}].claimId`)), e.support.forEach((t, n) => ue(t.obligationId, `support[${n}].obligationId`)), e.conformity.requested)
    ue(e.conformity.requirementId, "conformity.requirementId"), ue(e.conformity.decisionRuleId, "conformity.decisionRuleId");
  else if (e.conformity.requested !== !1 || e.conformity.execution !== "not_run")
    throw new TypeError("Unrequested conformity must have execution state not_run.");
  if (!["accept", "reject", "not_established"].includes(e.decision))
    throw new TypeError(`Unsupported reliance decision: ${String(e.decision)}.`);
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: Ki(e.binding),
    profile: Ki(e.profile),
    artifactVerification: Object.freeze(e.artifactVerification.map((t) => In({
      ...t
    }))),
    authorization: Object.freeze(e.authorization.map((t) => Object.freeze({
      ...In(t),
      routeWitnessIds: Object.freeze([...t.routeWitnessIds])
    }))),
    support: Object.freeze(e.support.map((t) => Object.freeze({
      ...In(t),
      witnessIds: Object.freeze([...t.witnessIds])
    }))),
    conformity: e.conformity.requested ? In({ ...e.conformity }) : Object.freeze({ requested: !1, execution: "not_run" }),
    decision: e.decision,
    trace: Object.freeze((e.trace ?? []).map($u)),
    resources: Object.freeze((e.resources ?? []).map(_u)),
    limitations: Object.freeze([...e.limitations ?? []])
  });
}
function Td(e, t) {
  if (e.length === 0)
    throw new TypeError(`${t} requires at least one semantic state.`);
  for (const n of e)
    if (!["established", "contradicted", "not_established"].includes(n))
      throw new TypeError(`${t} received unsupported semantic state: ${String(n)}.`);
}
function xe(e) {
  return Td(e, "semanticAnd"), e.includes("contradicted") ? "contradicted" : e.every((t) => t === "established") ? "established" : "not_established";
}
function pn(e) {
  return Td(e, "semanticOr"), e.includes("established") ? "established" : e.every((t) => t === "contradicted") ? "contradicted" : "not_established";
}
function ia(e) {
  const t = xe(e);
  return t === "established" ? "accept" : t === "contradicted" ? "reject" : "not_established";
}
var Da = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ra(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Pu(e) {
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
var Fn = { exports: {} }, jr = {}, mt = {}, Nt = {}, $r = {}, _r = {}, Pr = {}, za;
function Qi() {
  return za || (za = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class n extends t {
      constructor(g) {
        if (super(), !e.IDENTIFIER.test(g))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = g;
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
      constructor(g) {
        super(), this._items = typeof g == "string" ? [g] : g;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const g = this._items[0];
        return g === "" || g === '""';
      }
      get str() {
        var g;
        return (g = this._str) !== null && g !== void 0 ? g : this._str = this._items.reduce((m, d) => `${m}${d}`, "");
      }
      get names() {
        var g;
        return (g = this._names) !== null && g !== void 0 ? g : this._names = this._items.reduce((m, d) => (d instanceof n && (m[d.str] = (m[d.str] || 0) + 1), m), {});
      }
    }
    e._Code = i, e.nil = new i("");
    function o(I, ...g) {
      const m = [I[0]];
      let d = 0;
      for (; d < g.length; )
        a(m, g[d]), m.push(I[++d]);
      return new i(m);
    }
    e._ = o;
    const r = new i("+");
    function s(I, ...g) {
      const m = [h(I[0])];
      let d = 0;
      for (; d < g.length; )
        m.push(r), a(m, g[d]), m.push(r, h(I[++d]));
      return c(m), new i(m);
    }
    e.str = s;
    function a(I, g) {
      g instanceof i ? I.push(...g._items) : g instanceof n ? I.push(g) : I.push(y(g));
    }
    e.addCodeArg = a;
    function c(I) {
      let g = 1;
      for (; g < I.length - 1; ) {
        if (I[g] === r) {
          const m = l(I[g - 1], I[g + 1]);
          if (m !== void 0) {
            I.splice(g - 1, 3, m);
            continue;
          }
          I[g++] = "+";
        }
        g++;
      }
    }
    function l(I, g) {
      if (g === '""')
        return I;
      if (I === '""')
        return g;
      if (typeof I == "string")
        return g instanceof n || I[I.length - 1] !== '"' ? void 0 : typeof g != "string" ? `${I.slice(0, -1)}${g}"` : g[0] === '"' ? I.slice(0, -1) + g.slice(1) : void 0;
      if (typeof g == "string" && g[0] === '"' && !(I instanceof n))
        return `"${I}${g.slice(1)}`;
    }
    function p(I, g) {
      return g.emptyStr() ? I : I.emptyStr() ? g : s`${I}${g}`;
    }
    e.strConcat = p;
    function y(I) {
      return typeof I == "number" || typeof I == "boolean" || I === null ? I : h(Array.isArray(I) ? I.join(",") : I);
    }
    function f(I) {
      return new i(h(I));
    }
    e.stringify = f;
    function h(I) {
      return JSON.stringify(I).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = h;
    function v(I) {
      return typeof I == "string" && e.IDENTIFIER.test(I) ? new i(`.${I}`) : o`[${I}]`;
    }
    e.getProperty = v;
    function x(I) {
      if (typeof I == "string" && e.IDENTIFIER.test(I))
        return new i(`${I}`);
      throw new Error(`CodeGen: invalid export name: ${I}, use explicit $id name mapping`);
    }
    e.getEsmExportName = x;
    function b(I) {
      return new i(I.toString());
    }
    e.regexpCode = b;
  })(Pr)), Pr;
}
var Tr = {}, Va;
function Ua() {
  return Va || (Va = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Qi();
    class n extends Error {
      constructor(l) {
        super(`CodeGen: "code" for ${l} not defined`), this.value = l.value;
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
      constructor({ prefixes: l, parent: p } = {}) {
        this._names = {}, this._prefixes = l, this._parent = p;
      }
      toName(l) {
        return l instanceof t.Name ? l : this.name(l);
      }
      name(l) {
        return new t.Name(this._newName(l));
      }
      _newName(l) {
        const p = this._names[l] || this._nameGroup(l);
        return `${l}${p.index++}`;
      }
      _nameGroup(l) {
        var p, y;
        if (!((y = (p = this._parent) === null || p === void 0 ? void 0 : p._prefixes) === null || y === void 0) && y.has(l) || this._prefixes && !this._prefixes.has(l))
          throw new Error(`CodeGen: prefix "${l}" is not allowed in this scope`);
        return this._names[l] = { prefix: l, index: 0 };
      }
    }
    e.Scope = o;
    class r extends t.Name {
      constructor(l, p) {
        super(p), this.prefix = l;
      }
      setValue(l, { property: p, itemIndex: y }) {
        this.value = l, this.scopePath = (0, t._)`.${new t.Name(p)}[${y}]`;
      }
    }
    e.ValueScopeName = r;
    const s = (0, t._)`\n`;
    class a extends o {
      constructor(l) {
        super(l), this._values = {}, this._scope = l.scope, this.opts = { ...l, _n: l.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(l) {
        return new r(l, this._newName(l));
      }
      value(l, p) {
        var y;
        if (p.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const f = this.toName(l), { prefix: h } = f, v = (y = p.key) !== null && y !== void 0 ? y : p.ref;
        let x = this._values[h];
        if (x) {
          const g = x.get(v);
          if (g)
            return g;
        } else
          x = this._values[h] = /* @__PURE__ */ new Map();
        x.set(v, f);
        const b = this._scope[h] || (this._scope[h] = []), I = b.length;
        return b[I] = p.ref, f.setValue(p, { property: h, itemIndex: I }), f;
      }
      getValue(l, p) {
        const y = this._values[l];
        if (y)
          return y.get(p);
      }
      scopeRefs(l, p = this._values) {
        return this._reduceValues(p, (y) => {
          if (y.scopePath === void 0)
            throw new Error(`CodeGen: name "${y}" has no value`);
          return (0, t._)`${l}${y.scopePath}`;
        });
      }
      scopeCode(l = this._values, p, y) {
        return this._reduceValues(l, (f) => {
          if (f.value === void 0)
            throw new Error(`CodeGen: name "${f}" has no value`);
          return f.value.code;
        }, p, y);
      }
      _reduceValues(l, p, y = {}, f) {
        let h = t.nil;
        for (const v in l) {
          const x = l[v];
          if (!x)
            continue;
          const b = y[v] = y[v] || /* @__PURE__ */ new Map();
          x.forEach((I) => {
            if (b.has(I))
              return;
            b.set(I, i.Started);
            let g = p(I);
            if (g) {
              const m = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              h = (0, t._)`${h}${m} ${I} = ${g};${this.opts._n}`;
            } else if (g = f?.(I))
              h = (0, t._)`${h}${g}${this.opts._n}`;
            else
              throw new n(I);
            b.set(I, i.Completed);
          });
        }
        return h;
      }
    }
    e.ValueScope = a;
  })(Tr)), Tr;
}
var Ga;
function te() {
  return Ga || (Ga = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Qi(), n = /* @__PURE__ */ Ua();
    var i = /* @__PURE__ */ Qi();
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
    var o = /* @__PURE__ */ Ua();
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
        return _($, this.rhs);
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
    class l extends r {
      constructor($) {
        super(), this.label = $, this.names = {};
      }
      render({ _n: $ }) {
        return `${this.label}:` + $;
      }
    }
    class p extends r {
      constructor($) {
        super(), this.label = $, this.names = {};
      }
      render({ _n: $ }) {
        return `break${this.label ? ` ${this.label}` : ""};` + $;
      }
    }
    class y extends r {
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
    class f extends r {
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
        return this.nodes.reduce(($, q) => L($, q.names), {});
      }
    }
    class v extends h {
      render($) {
        return "{" + $._n + super.render($) + "}" + $._n;
      }
    }
    class x extends h {
    }
    class b extends v {
    }
    b.kind = "else";
    class I extends v {
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
          return $ === !1 ? q instanceof I ? q : q.nodes : this.nodes.length ? this : new I(P($), q instanceof I ? [q] : q.nodes);
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
        return _($, this.condition), this.else && L($, this.else.names), $;
      }
    }
    I.kind = "if";
    class g extends v {
    }
    g.kind = "for";
    class m extends g {
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
        return L(super.names, this.iteration.names);
      }
    }
    class d extends g {
      constructor($, q, T, z) {
        super(), this.varKind = $, this.name = q, this.from = T, this.to = z;
      }
      render($) {
        const q = $.es5 ? n.varKinds.var : this.varKind, { name: T, from: z, to: H } = this;
        return `for(${q} ${T}=${z}; ${T}<${H}; ${T}++)` + super.render($);
      }
      get names() {
        const $ = _(super.names, this.from);
        return _($, this.to);
      }
    }
    class u extends g {
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
        return L(super.names, this.iterable.names);
      }
    }
    class w extends v {
      constructor($, q, T) {
        super(), this.name = $, this.args = q, this.async = T;
      }
      render($) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render($);
      }
    }
    w.kind = "func";
    class S extends h {
      render($) {
        return "return " + super.render($);
      }
    }
    S.kind = "return";
    class A extends v {
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
        return this.catch && L($, this.catch.names), this.finally && L($, this.finally.names), $;
      }
    }
    class j extends v {
      constructor($) {
        super(), this.error = $;
      }
      render($) {
        return `catch(${this.error})` + super.render($);
      }
    }
    j.kind = "catch";
    class R extends v {
      render($) {
        return "finally" + super.render($);
      }
    }
    R.kind = "finally";
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
        if (this._blockNode(new I($)), q && T)
          this.code(q).else().code(T).endIf();
        else if (q)
          this.code(q).endIf();
        else if (T)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf($) {
        return this._elseNode(new I($));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new b());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(I, b);
      }
      _for($, q) {
        return this._blockNode($), q && this.code(q).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for($, q) {
        return this._for(new m($), q);
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
        return this._for(new u("of", z, H, q), () => T(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn($, q, T, z = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf($, (0, t._)`Object.keys(${q})`, T);
        const H = this._scope.toName($);
        return this._for(new u("in", z, H, q), () => T(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(g);
      }
      // `label` statement
      label($) {
        return this._leafNode(new l($));
      }
      // `break` statement
      break($) {
        return this._leafNode(new p($));
      }
      // `return` statement
      return($) {
        const q = new S();
        if (this._blockNode(q), this.code($), q.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(S);
      }
      // `try` statement
      try($, q, T) {
        if (!q && !T)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const z = new A();
        if (this._blockNode(z), this.code($), q) {
          const H = this.name("e");
          this._currNode = z.catch = new j(H), q(H);
        }
        return T && (this._currNode = z.finally = new R(), this.code(T)), this._endBlockNode(j, R);
      }
      // `throw` statement
      throw($) {
        return this._leafNode(new y($));
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
        return this._blockNode(new w($, q, T)), z && this.code(z).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(w);
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
        if (!(q instanceof I))
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
    function L(N, $) {
      for (const q in $)
        N[q] = (N[q] || 0) + ($[q] || 0);
      return N;
    }
    function _(N, $) {
      return $ instanceof t._CodeOrName ? L(N, $.names) : N;
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
    function P(N) {
      return typeof N == "boolean" || typeof N == "number" || N === null ? !N : (0, t._)`!${V(N)}`;
    }
    e.not = P;
    const F = M(e.operators.AND);
    function O(...N) {
      return N.reduce(F);
    }
    e.and = O;
    const G = M(e.operators.OR);
    function k(...N) {
      return N.reduce(G);
    }
    e.or = k;
    function M(N) {
      return ($, q) => $ === t.nil ? q : q === t.nil ? $ : (0, t._)`${V($)} ${N} ${V(q)}`;
    }
    function V(N) {
      return N instanceof t.Name ? N : (0, t._)`(${N})`;
    }
  })(_r)), _r;
}
var ne = {}, Fa;
function ie() {
  if (Fa) return ne;
  Fa = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.checkStrictMode = ne.getErrorPath = ne.Type = ne.useFunc = ne.setEvaluated = ne.evaluatedPropsToName = ne.mergeEvaluated = ne.eachItem = ne.unescapeJsonPointer = ne.escapeJsonPointer = ne.escapeFragment = ne.unescapeFragment = ne.schemaRefOrVal = ne.schemaHasRulesButRef = ne.schemaHasRules = ne.checkUnknownRules = ne.alwaysValidSchema = ne.toHash = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Qi();
  function n(u) {
    const w = {};
    for (const S of u)
      w[S] = !0;
    return w;
  }
  ne.toHash = n;
  function i(u, w) {
    return typeof w == "boolean" ? w : Object.keys(w).length === 0 ? !0 : (o(u, w), !r(w, u.self.RULES.all));
  }
  ne.alwaysValidSchema = i;
  function o(u, w = u.schema) {
    const { opts: S, self: A } = u;
    if (!S.strictSchema || typeof w == "boolean")
      return;
    const j = A.RULES.keywords;
    for (const R in w)
      j[R] || d(u, `unknown keyword: "${R}"`);
  }
  ne.checkUnknownRules = o;
  function r(u, w) {
    if (typeof u == "boolean")
      return !u;
    for (const S in u)
      if (w[S])
        return !0;
    return !1;
  }
  ne.schemaHasRules = r;
  function s(u, w) {
    if (typeof u == "boolean")
      return !u;
    for (const S in u)
      if (S !== "$ref" && w.all[S])
        return !0;
    return !1;
  }
  ne.schemaHasRulesButRef = s;
  function a({ topSchemaRef: u, schemaPath: w }, S, A, j) {
    if (!j) {
      if (typeof S == "number" || typeof S == "boolean")
        return S;
      if (typeof S == "string")
        return (0, e._)`${S}`;
    }
    return (0, e._)`${u}${w}${(0, e.getProperty)(A)}`;
  }
  ne.schemaRefOrVal = a;
  function c(u) {
    return y(decodeURIComponent(u));
  }
  ne.unescapeFragment = c;
  function l(u) {
    return encodeURIComponent(p(u));
  }
  ne.escapeFragment = l;
  function p(u) {
    return typeof u == "number" ? `${u}` : u.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ne.escapeJsonPointer = p;
  function y(u) {
    return u.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ne.unescapeJsonPointer = y;
  function f(u, w) {
    if (Array.isArray(u))
      for (const S of u)
        w(S);
    else
      w(u);
  }
  ne.eachItem = f;
  function h({ mergeNames: u, mergeToName: w, mergeValues: S, resultToName: A }) {
    return (j, R, E, L) => {
      const _ = E === void 0 ? R : E instanceof e.Name ? (R instanceof e.Name ? u(j, R, E) : w(j, R, E), E) : R instanceof e.Name ? (w(j, E, R), R) : S(R, E);
      return L === e.Name && !(_ instanceof e.Name) ? A(j, _) : _;
    };
  }
  ne.mergeEvaluated = {
    props: h({
      mergeNames: (u, w, S) => u.if((0, e._)`${S} !== true && ${w} !== undefined`, () => {
        u.if((0, e._)`${w} === true`, () => u.assign(S, !0), () => u.assign(S, (0, e._)`${S} || {}`).code((0, e._)`Object.assign(${S}, ${w})`));
      }),
      mergeToName: (u, w, S) => u.if((0, e._)`${S} !== true`, () => {
        w === !0 ? u.assign(S, !0) : (u.assign(S, (0, e._)`${S} || {}`), x(u, S, w));
      }),
      mergeValues: (u, w) => u === !0 ? !0 : { ...u, ...w },
      resultToName: v
    }),
    items: h({
      mergeNames: (u, w, S) => u.if((0, e._)`${S} !== true && ${w} !== undefined`, () => u.assign(S, (0, e._)`${w} === true ? true : ${S} > ${w} ? ${S} : ${w}`)),
      mergeToName: (u, w, S) => u.if((0, e._)`${S} !== true`, () => u.assign(S, w === !0 ? !0 : (0, e._)`${S} > ${w} ? ${S} : ${w}`)),
      mergeValues: (u, w) => u === !0 ? !0 : Math.max(u, w),
      resultToName: (u, w) => u.var("items", w)
    })
  };
  function v(u, w) {
    if (w === !0)
      return u.var("props", !0);
    const S = u.var("props", (0, e._)`{}`);
    return w !== void 0 && x(u, S, w), S;
  }
  ne.evaluatedPropsToName = v;
  function x(u, w, S) {
    Object.keys(S).forEach((A) => u.assign((0, e._)`${w}${(0, e.getProperty)(A)}`, !0));
  }
  ne.setEvaluated = x;
  const b = {};
  function I(u, w) {
    return u.scopeValue("func", {
      ref: w,
      code: b[w.code] || (b[w.code] = new t._Code(w.code))
    });
  }
  ne.useFunc = I;
  var g;
  (function(u) {
    u[u.Num = 0] = "Num", u[u.Str = 1] = "Str";
  })(g || (ne.Type = g = {}));
  function m(u, w, S) {
    if (u instanceof e.Name) {
      const A = w === g.Num;
      return S ? A ? (0, e._)`"[" + ${u} + "]"` : (0, e._)`"['" + ${u} + "']"` : A ? (0, e._)`"/" + ${u}` : (0, e._)`"/" + ${u}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return S ? (0, e.getProperty)(u).toString() : "/" + p(u);
  }
  ne.getErrorPath = m;
  function d(u, w, S = u.opts.strictSchema) {
    if (S) {
      if (w = `strict mode: ${w}`, S === !0)
        throw new Error(w);
      u.self.logger.warn(w);
    }
  }
  return ne.checkStrictMode = d, ne;
}
var Bn = {}, Ba;
function et() {
  if (Ba) return Bn;
  Ba = 1, Object.defineProperty(Bn, "__esModule", { value: !0 });
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
  return Bn.default = t, Bn;
}
var Za;
function rr() {
  return Za || (Za = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ et();
    e.keywordError = {
      message: ({ keyword: b }) => (0, t.str)`must pass "${b}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: b, schemaType: I }) => I ? (0, t.str)`"${b}" keyword must be ${I} ($data)` : (0, t.str)`"${b}" keyword is invalid ($data)`
    };
    function o(b, I = e.keywordError, g, m) {
      const { it: d } = b, { gen: u, compositeRule: w, allErrors: S } = d, A = y(b, I, g);
      m ?? (w || S) ? c(u, A) : l(d, (0, t._)`[${A}]`);
    }
    e.reportError = o;
    function r(b, I = e.keywordError, g) {
      const { it: m } = b, { gen: d, compositeRule: u, allErrors: w } = m, S = y(b, I, g);
      c(d, S), u || w || l(m, i.default.vErrors);
    }
    e.reportExtraError = r;
    function s(b, I) {
      b.assign(i.default.errors, I), b.if((0, t._)`${i.default.vErrors} !== null`, () => b.if(I, () => b.assign((0, t._)`${i.default.vErrors}.length`, I), () => b.assign(i.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: b, keyword: I, schemaValue: g, data: m, errsCount: d, it: u }) {
      if (d === void 0)
        throw new Error("ajv implementation error");
      const w = b.name("err");
      b.forRange("i", d, i.default.errors, (S) => {
        b.const(w, (0, t._)`${i.default.vErrors}[${S}]`), b.if((0, t._)`${w}.instancePath === undefined`, () => b.assign((0, t._)`${w}.instancePath`, (0, t.strConcat)(i.default.instancePath, u.errorPath))), b.assign((0, t._)`${w}.schemaPath`, (0, t.str)`${u.errSchemaPath}/${I}`), u.opts.verbose && (b.assign((0, t._)`${w}.schema`, g), b.assign((0, t._)`${w}.data`, m));
      });
    }
    e.extendErrors = a;
    function c(b, I) {
      const g = b.const("err", I);
      b.if((0, t._)`${i.default.vErrors} === null`, () => b.assign(i.default.vErrors, (0, t._)`[${g}]`), (0, t._)`${i.default.vErrors}.push(${g})`), b.code((0, t._)`${i.default.errors}++`);
    }
    function l(b, I) {
      const { gen: g, validateName: m, schemaEnv: d } = b;
      d.$async ? g.throw((0, t._)`new ${b.ValidationError}(${I})`) : (g.assign((0, t._)`${m}.errors`, I), g.return(!1));
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
    function y(b, I, g) {
      const { createErrors: m } = b.it;
      return m === !1 ? (0, t._)`{}` : f(b, I, g);
    }
    function f(b, I, g = {}) {
      const { gen: m, it: d } = b, u = [
        h(d, g),
        v(b, g)
      ];
      return x(b, I, u), m.object(...u);
    }
    function h({ errorPath: b }, { instancePath: I }) {
      const g = I ? (0, t.str)`${b}${(0, n.getErrorPath)(I, n.Type.Str)}` : b;
      return [i.default.instancePath, (0, t.strConcat)(i.default.instancePath, g)];
    }
    function v({ keyword: b, it: { errSchemaPath: I } }, { schemaPath: g, parentSchema: m }) {
      let d = m ? I : (0, t.str)`${I}/${b}`;
      return g && (d = (0, t.str)`${d}${(0, n.getErrorPath)(g, n.Type.Str)}`), [p.schemaPath, d];
    }
    function x(b, { params: I, message: g }, m) {
      const { keyword: d, data: u, schemaValue: w, it: S } = b, { opts: A, propertyName: j, topSchemaRef: R, schemaPath: E } = S;
      m.push([p.keyword, d], [p.params, typeof I == "function" ? I(b) : I || (0, t._)`{}`]), A.messages && m.push([p.message, typeof g == "function" ? g(b) : g]), A.verbose && m.push([p.schema, w], [p.parentSchema, (0, t._)`${R}${E}`], [i.default.data, u]), j && m.push([p.propertyName, j]);
    }
  })($r)), $r;
}
var Ha;
function Tu() {
  if (Ha) return Nt;
  Ha = 1, Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.boolOrEmptySchema = Nt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ rr(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ et(), i = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: c, schema: l, validateName: p } = a;
    l === !1 ? s(a, !1) : typeof l == "object" && l.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${p}.errors`, null), c.return(!0));
  }
  Nt.topBoolOrEmptySchema = o;
  function r(a, c) {
    const { gen: l, schema: p } = a;
    p === !1 ? (l.var(c, !1), s(a)) : l.var(c, !0);
  }
  Nt.boolOrEmptySchema = r;
  function s(a, c) {
    const { gen: l, data: p } = a, y = {
      gen: l,
      keyword: "false schema",
      data: p,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(y, i, void 0, c);
  }
  return Nt;
}
var ve = {}, Dt = {}, Ja;
function Cd() {
  if (Ja) return Dt;
  Ja = 1, Object.defineProperty(Dt, "__esModule", { value: !0 }), Dt.getRules = Dt.isJSONType = void 0;
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
var yt = {}, Ka;
function Ed() {
  if (Ka) return yt;
  Ka = 1, Object.defineProperty(yt, "__esModule", { value: !0 }), yt.shouldUseRule = yt.shouldUseGroup = yt.schemaHasRulesForType = void 0;
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
var Qa;
function Wi() {
  if (Qa) return ve;
  Qa = 1, Object.defineProperty(ve, "__esModule", { value: !0 }), ve.reportTypeError = ve.checkDataTypes = ve.checkDataType = ve.coerceAndCheckDataType = ve.getJSONTypes = ve.getSchemaTypes = ve.DataType = void 0;
  const e = /* @__PURE__ */ Cd(), t = /* @__PURE__ */ Ed(), n = /* @__PURE__ */ rr(), i = /* @__PURE__ */ te(), o = /* @__PURE__ */ ie();
  var r;
  (function(g) {
    g[g.Correct = 0] = "Correct", g[g.Wrong = 1] = "Wrong";
  })(r || (ve.DataType = r = {}));
  function s(g) {
    const m = a(g.type);
    if (m.includes("null")) {
      if (g.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!m.length && g.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      g.nullable === !0 && m.push("null");
    }
    return m;
  }
  ve.getSchemaTypes = s;
  function a(g) {
    const m = Array.isArray(g) ? g : g ? [g] : [];
    if (m.every(e.isJSONType))
      return m;
    throw new Error("type must be JSONType or JSONType[]: " + m.join(","));
  }
  ve.getJSONTypes = a;
  function c(g, m) {
    const { gen: d, data: u, opts: w } = g, S = p(m, w.coerceTypes), A = m.length > 0 && !(S.length === 0 && m.length === 1 && (0, t.schemaHasRulesForType)(g, m[0]));
    if (A) {
      const j = v(m, u, w.strictNumbers, r.Wrong);
      d.if(j, () => {
        S.length ? y(g, m, S) : b(g);
      });
    }
    return A;
  }
  ve.coerceAndCheckDataType = c;
  const l = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function p(g, m) {
    return m ? g.filter((d) => l.has(d) || m === "array" && d === "array") : [];
  }
  function y(g, m, d) {
    const { gen: u, data: w, opts: S } = g, A = u.let("dataType", (0, i._)`typeof ${w}`), j = u.let("coerced", (0, i._)`undefined`);
    S.coerceTypes === "array" && u.if((0, i._)`${A} == 'object' && Array.isArray(${w}) && ${w}.length == 1`, () => u.assign(w, (0, i._)`${w}[0]`).assign(A, (0, i._)`typeof ${w}`).if(v(m, w, S.strictNumbers), () => u.assign(j, w))), u.if((0, i._)`${j} !== undefined`);
    for (const E of d)
      (l.has(E) || E === "array" && S.coerceTypes === "array") && R(E);
    u.else(), b(g), u.endIf(), u.if((0, i._)`${j} !== undefined`, () => {
      u.assign(w, j), f(g, j);
    });
    function R(E) {
      switch (E) {
        case "string":
          u.elseIf((0, i._)`${A} == "number" || ${A} == "boolean"`).assign(j, (0, i._)`"" + ${w}`).elseIf((0, i._)`${w} === null`).assign(j, (0, i._)`""`);
          return;
        case "number":
          u.elseIf((0, i._)`${A} == "boolean" || ${w} === null
              || (${A} == "string" && ${w} && ${w} == +${w})`).assign(j, (0, i._)`+${w}`);
          return;
        case "integer":
          u.elseIf((0, i._)`${A} === "boolean" || ${w} === null
              || (${A} === "string" && ${w} && ${w} == +${w} && !(${w} % 1))`).assign(j, (0, i._)`+${w}`);
          return;
        case "boolean":
          u.elseIf((0, i._)`${w} === "false" || ${w} === 0 || ${w} === null`).assign(j, !1).elseIf((0, i._)`${w} === "true" || ${w} === 1`).assign(j, !0);
          return;
        case "null":
          u.elseIf((0, i._)`${w} === "" || ${w} === 0 || ${w} === false`), u.assign(j, null);
          return;
        case "array":
          u.elseIf((0, i._)`${A} === "string" || ${A} === "number"
              || ${A} === "boolean" || ${w} === null`).assign(j, (0, i._)`[${w}]`);
      }
    }
  }
  function f({ gen: g, parentData: m, parentDataProperty: d }, u) {
    g.if((0, i._)`${m} !== undefined`, () => g.assign((0, i._)`${m}[${d}]`, u));
  }
  function h(g, m, d, u = r.Correct) {
    const w = u === r.Correct ? i.operators.EQ : i.operators.NEQ;
    let S;
    switch (g) {
      case "null":
        return (0, i._)`${m} ${w} null`;
      case "array":
        S = (0, i._)`Array.isArray(${m})`;
        break;
      case "object":
        S = (0, i._)`${m} && typeof ${m} == "object" && !Array.isArray(${m})`;
        break;
      case "integer":
        S = A((0, i._)`!(${m} % 1) && !isNaN(${m})`);
        break;
      case "number":
        S = A();
        break;
      default:
        return (0, i._)`typeof ${m} ${w} ${g}`;
    }
    return u === r.Correct ? S : (0, i.not)(S);
    function A(j = i.nil) {
      return (0, i.and)((0, i._)`typeof ${m} == "number"`, j, d ? (0, i._)`isFinite(${m})` : i.nil);
    }
  }
  ve.checkDataType = h;
  function v(g, m, d, u) {
    if (g.length === 1)
      return h(g[0], m, d, u);
    let w;
    const S = (0, o.toHash)(g);
    if (S.array && S.object) {
      const A = (0, i._)`typeof ${m} != "object"`;
      w = S.null ? A : (0, i._)`!${m} || ${A}`, delete S.null, delete S.array, delete S.object;
    } else
      w = i.nil;
    S.number && delete S.integer;
    for (const A in S)
      w = (0, i.and)(w, h(A, m, d, u));
    return w;
  }
  ve.checkDataTypes = v;
  const x = {
    message: ({ schema: g }) => `must be ${g}`,
    params: ({ schema: g, schemaValue: m }) => typeof g == "string" ? (0, i._)`{type: ${g}}` : (0, i._)`{type: ${m}}`
  };
  function b(g) {
    const m = I(g);
    (0, n.reportError)(m, x);
  }
  ve.reportTypeError = b;
  function I(g) {
    const { gen: m, data: d, schema: u } = g, w = (0, o.schemaRefOrVal)(g, u, "type");
    return {
      gen: m,
      keyword: "type",
      data: d,
      schema: u.type,
      schemaCode: w,
      schemaValue: w,
      parentSchema: u,
      params: {},
      it: g
    };
  }
  return ve;
}
var hn = {}, Wa;
function Cu() {
  if (Wa) return hn;
  Wa = 1, Object.defineProperty(hn, "__esModule", { value: !0 }), hn.assignDefaults = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie();
  function n(o, r) {
    const { properties: s, items: a } = o.schema;
    if (r === "object" && s)
      for (const c in s)
        i(o, c, s[c].default);
    else r === "array" && Array.isArray(a) && a.forEach((c, l) => i(o, l, c.default));
  }
  hn.assignDefaults = n;
  function i(o, r, s) {
    const { gen: a, compositeRule: c, data: l, opts: p } = o;
    if (s === void 0)
      return;
    const y = (0, e._)`${l}${(0, e.getProperty)(r)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${y}`);
      return;
    }
    let f = (0, e._)`${y} === undefined`;
    p.useDefaults === "empty" && (f = (0, e._)`${f} || ${y} === null || ${y} === ""`), a.if(f, (0, e._)`${y} = ${(0, e.stringify)(s)}`);
  }
  return hn;
}
var Je = {}, ae = {}, Xa;
function tt() {
  if (Xa) return ae;
  Xa = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.validateUnion = ae.validateArray = ae.usePattern = ae.callValidateCode = ae.schemaProperties = ae.allSchemaProperties = ae.noPropertyInData = ae.propertyInData = ae.isOwnProperty = ae.hasPropFunc = ae.reportMissingProp = ae.checkMissingProp = ae.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ et(), i = /* @__PURE__ */ ie();
  function o(g, m) {
    const { gen: d, data: u, it: w } = g;
    d.if(p(d, u, m, w.opts.ownProperties), () => {
      g.setParams({ missingProperty: (0, e._)`${m}` }, !0), g.error();
    });
  }
  ae.checkReportMissingProp = o;
  function r({ gen: g, data: m, it: { opts: d } }, u, w) {
    return (0, e.or)(...u.map((S) => (0, e.and)(p(g, m, S, d.ownProperties), (0, e._)`${w} = ${S}`)));
  }
  ae.checkMissingProp = r;
  function s(g, m) {
    g.setParams({ missingProperty: m }, !0), g.error();
  }
  ae.reportMissingProp = s;
  function a(g) {
    return g.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ae.hasPropFunc = a;
  function c(g, m, d) {
    return (0, e._)`${a(g)}.call(${m}, ${d})`;
  }
  ae.isOwnProperty = c;
  function l(g, m, d, u) {
    const w = (0, e._)`${m}${(0, e.getProperty)(d)} !== undefined`;
    return u ? (0, e._)`${w} && ${c(g, m, d)}` : w;
  }
  ae.propertyInData = l;
  function p(g, m, d, u) {
    const w = (0, e._)`${m}${(0, e.getProperty)(d)} === undefined`;
    return u ? (0, e.or)(w, (0, e.not)(c(g, m, d))) : w;
  }
  ae.noPropertyInData = p;
  function y(g) {
    return g ? Object.keys(g).filter((m) => m !== "__proto__") : [];
  }
  ae.allSchemaProperties = y;
  function f(g, m) {
    return y(m).filter((d) => !(0, t.alwaysValidSchema)(g, m[d]));
  }
  ae.schemaProperties = f;
  function h({ schemaCode: g, data: m, it: { gen: d, topSchemaRef: u, schemaPath: w, errorPath: S }, it: A }, j, R, E) {
    const L = E ? (0, e._)`${g}, ${m}, ${u}${w}` : m, _ = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, S)],
      [n.default.parentData, A.parentData],
      [n.default.parentDataProperty, A.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    A.opts.dynamicRef && _.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const C = (0, e._)`${L}, ${d.object(..._)}`;
    return R !== e.nil ? (0, e._)`${j}.call(${R}, ${C})` : (0, e._)`${j}(${C})`;
  }
  ae.callValidateCode = h;
  const v = (0, e._)`new RegExp`;
  function x({ gen: g, it: { opts: m } }, d) {
    const u = m.unicodeRegExp ? "u" : "", { regExp: w } = m.code, S = w(d, u);
    return g.scopeValue("pattern", {
      key: S.toString(),
      ref: S,
      code: (0, e._)`${w.code === "new RegExp" ? v : (0, i.useFunc)(g, w)}(${d}, ${u})`
    });
  }
  ae.usePattern = x;
  function b(g) {
    const { gen: m, data: d, keyword: u, it: w } = g, S = m.name("valid");
    if (w.allErrors) {
      const j = m.let("valid", !0);
      return A(() => m.assign(j, !1)), j;
    }
    return m.var(S, !0), A(() => m.break()), S;
    function A(j) {
      const R = m.const("len", (0, e._)`${d}.length`);
      m.forRange("i", 0, R, (E) => {
        g.subschema({
          keyword: u,
          dataProp: E,
          dataPropType: t.Type.Num
        }, S), m.if((0, e.not)(S), j);
      });
    }
  }
  ae.validateArray = b;
  function I(g) {
    const { gen: m, schema: d, keyword: u, it: w } = g;
    if (!Array.isArray(d))
      throw new Error("ajv implementation error");
    if (d.some((R) => (0, t.alwaysValidSchema)(w, R)) && !w.opts.unevaluated)
      return;
    const A = m.let("valid", !1), j = m.name("_valid");
    m.block(() => d.forEach((R, E) => {
      const L = g.subschema({
        keyword: u,
        schemaProp: E,
        compositeRule: !0
      }, j);
      m.assign(A, (0, e._)`${A} || ${j}`), g.mergeValidEvaluated(L, j) || m.if((0, e.not)(A));
    })), g.result(A, () => g.reset(), () => g.error(!0));
  }
  return ae.validateUnion = I, ae;
}
var Ya;
function Eu() {
  if (Ya) return Je;
  Ya = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.validateKeywordUsage = Je.validSchemaType = Je.funcKeywordCode = Je.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ et(), n = /* @__PURE__ */ tt(), i = /* @__PURE__ */ rr();
  function o(f, h) {
    const { gen: v, keyword: x, schema: b, parentSchema: I, it: g } = f, m = h.macro.call(g.self, b, I, g), d = l(v, x, m);
    g.opts.validateSchema !== !1 && g.self.validateSchema(m, !0);
    const u = v.name("valid");
    f.subschema({
      schema: m,
      schemaPath: e.nil,
      errSchemaPath: `${g.errSchemaPath}/${x}`,
      topSchemaRef: d,
      compositeRule: !0
    }, u), f.pass(u, () => f.error(!0));
  }
  Je.macroKeywordCode = o;
  function r(f, h) {
    var v;
    const { gen: x, keyword: b, schema: I, parentSchema: g, $data: m, it: d } = f;
    c(d, h);
    const u = !m && h.compile ? h.compile.call(d.self, I, g, d) : h.validate, w = l(x, b, u), S = x.let("valid");
    f.block$data(S, A), f.ok((v = h.valid) !== null && v !== void 0 ? v : S);
    function A() {
      if (h.errors === !1)
        E(), h.modifying && s(f), L(() => f.error());
      else {
        const _ = h.async ? j() : R();
        h.modifying && s(f), L(() => a(f, _));
      }
    }
    function j() {
      const _ = x.let("ruleErrs", null);
      return x.try(() => E((0, e._)`await `), (C) => x.assign(S, !1).if((0, e._)`${C} instanceof ${d.ValidationError}`, () => x.assign(_, (0, e._)`${C}.errors`), () => x.throw(C))), _;
    }
    function R() {
      const _ = (0, e._)`${w}.errors`;
      return x.assign(_, null), E(e.nil), _;
    }
    function E(_ = h.async ? (0, e._)`await ` : e.nil) {
      const C = d.opts.passContext ? t.default.this : t.default.self, D = !("compile" in h && !m || h.schema === !1);
      x.assign(S, (0, e._)`${_}${(0, n.callValidateCode)(f, w, C, D)}`, h.modifying);
    }
    function L(_) {
      var C;
      x.if((0, e.not)((C = h.valid) !== null && C !== void 0 ? C : S), _);
    }
  }
  Je.funcKeywordCode = r;
  function s(f) {
    const { gen: h, data: v, it: x } = f;
    h.if(x.parentData, () => h.assign(v, (0, e._)`${x.parentData}[${x.parentDataProperty}]`));
  }
  function a(f, h) {
    const { gen: v } = f;
    v.if((0, e._)`Array.isArray(${h})`, () => {
      v.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${h} : ${t.default.vErrors}.concat(${h})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, i.extendErrors)(f);
    }, () => f.error());
  }
  function c({ schemaEnv: f }, h) {
    if (h.async && !f.$async)
      throw new Error("async keyword in sync schema");
  }
  function l(f, h, v) {
    if (v === void 0)
      throw new Error(`keyword "${h}" failed to compile`);
    return f.scopeValue("keyword", typeof v == "function" ? { ref: v } : { ref: v, code: (0, e.stringify)(v) });
  }
  function p(f, h, v = !1) {
    return !h.length || h.some((x) => x === "array" ? Array.isArray(f) : x === "object" ? f && typeof f == "object" && !Array.isArray(f) : typeof f == x || v && typeof f > "u");
  }
  Je.validSchemaType = p;
  function y({ schema: f, opts: h, self: v, errSchemaPath: x }, b, I) {
    if (Array.isArray(b.keyword) ? !b.keyword.includes(I) : b.keyword !== I)
      throw new Error("ajv implementation error");
    const g = b.dependencies;
    if (g?.some((m) => !Object.prototype.hasOwnProperty.call(f, m)))
      throw new Error(`parent schema must have dependencies of ${I}: ${g.join(",")}`);
    if (b.validateSchema && !b.validateSchema(f[I])) {
      const d = `keyword "${I}" value is invalid at path "${x}": ` + v.errorsText(b.validateSchema.errors);
      if (h.validateSchema === "log")
        v.logger.error(d);
      else
        throw new Error(d);
    }
  }
  return Je.validateKeywordUsage = y, Je;
}
var gt = {}, eo;
function ku() {
  if (eo) return gt;
  eo = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.extendSubschemaMode = gt.extendSubschemaData = gt.getSubschema = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie();
  function n(r, { keyword: s, schemaProp: a, schema: c, schemaPath: l, errSchemaPath: p, topSchemaRef: y }) {
    if (s !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (s !== void 0) {
      const f = r.schema[s];
      return a === void 0 ? {
        schema: f,
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(s)}`,
        errSchemaPath: `${r.errSchemaPath}/${s}`
      } : {
        schema: f[a],
        schemaPath: (0, e._)`${r.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${r.errSchemaPath}/${s}/${(0, t.escapeFragment)(a)}`
      };
    }
    if (c !== void 0) {
      if (l === void 0 || p === void 0 || y === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: l,
        topSchemaRef: y,
        errSchemaPath: p
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  gt.getSubschema = n;
  function i(r, s, { dataProp: a, dataPropType: c, data: l, dataTypes: p, propertyName: y }) {
    if (l !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: f } = s;
    if (a !== void 0) {
      const { errorPath: v, dataPathArr: x, opts: b } = s, I = f.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      h(I), r.errorPath = (0, e.str)`${v}${(0, t.getErrorPath)(a, c, b.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${a}`, r.dataPathArr = [...x, r.parentDataProperty];
    }
    if (l !== void 0) {
      const v = l instanceof e.Name ? l : f.let("data", l, !0);
      h(v), y !== void 0 && (r.propertyName = y);
    }
    p && (r.dataTypes = p);
    function h(v) {
      r.data = v, r.dataLevel = s.dataLevel + 1, r.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), r.parentData = s.data, r.dataNames = [...s.dataNames, v];
    }
  }
  gt.extendSubschemaData = i;
  function o(r, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: c, createErrors: l, allErrors: p }) {
    c !== void 0 && (r.compositeRule = c), l !== void 0 && (r.createErrors = l), p !== void 0 && (r.allErrors = p), r.jtdDiscriminator = s, r.jtdMetadata = a;
  }
  return gt.extendSubschemaMode = o, gt;
}
var Re = {}, Cr, to;
function kd() {
  return to || (to = 1, Cr = function e(t, n) {
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
  }), Cr;
}
var Er = { exports: {} }, no;
function Mu() {
  if (no) return Er.exports;
  no = 1;
  var e = Er.exports = function(i, o, r) {
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
  function t(i, o, r, s, a, c, l, p, y, f) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      o(s, a, c, l, p, y, f);
      for (var h in s) {
        var v = s[h];
        if (Array.isArray(v)) {
          if (h in e.arrayKeywords)
            for (var x = 0; x < v.length; x++)
              t(i, o, r, v[x], a + "/" + h + "/" + x, c, a, h, s, x);
        } else if (h in e.propsKeywords) {
          if (v && typeof v == "object")
            for (var b in v)
              t(i, o, r, v[b], a + "/" + h + "/" + n(b), c, a, h, s, b);
        } else (h in e.keywords || i.allKeys && !(h in e.skipKeywords)) && t(i, o, r, v, a + "/" + h, c, a, h, s);
      }
      r(s, a, c, l, p, y, f);
    }
  }
  function n(i) {
    return i.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Er.exports;
}
var io;
function sr() {
  if (io) return Re;
  io = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.getSchemaRefs = Re.resolveUrl = Re.normalizeId = Re._getFullPath = Re.getFullPath = Re.inlineRef = void 0;
  const e = /* @__PURE__ */ ie(), t = kd(), n = Mu(), i = /* @__PURE__ */ new Set([
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
  Re.inlineRef = o;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(x) {
    for (const b in x) {
      if (r.has(b))
        return !0;
      const I = x[b];
      if (Array.isArray(I) && I.some(s) || typeof I == "object" && s(I))
        return !0;
    }
    return !1;
  }
  function a(x) {
    let b = 0;
    for (const I in x) {
      if (I === "$ref")
        return 1 / 0;
      if (b++, !i.has(I) && (typeof x[I] == "object" && (0, e.eachItem)(x[I], (g) => b += a(g)), b === 1 / 0))
        return 1 / 0;
    }
    return b;
  }
  function c(x, b = "", I) {
    I !== !1 && (b = y(b));
    const g = x.parse(b);
    return l(x, g);
  }
  Re.getFullPath = c;
  function l(x, b) {
    return x.serialize(b).split("#")[0] + "#";
  }
  Re._getFullPath = l;
  const p = /#\/?$/;
  function y(x) {
    return x ? x.replace(p, "") : "";
  }
  Re.normalizeId = y;
  function f(x, b, I) {
    return I = y(I), x.resolve(b, I);
  }
  Re.resolveUrl = f;
  const h = /^[a-z_][-a-z0-9._]*$/i;
  function v(x, b) {
    if (typeof x == "boolean")
      return {};
    const { schemaId: I, uriResolver: g } = this.opts, m = y(x[I] || b), d = { "": m }, u = c(g, m, !1), w = {}, S = /* @__PURE__ */ new Set();
    return n(x, { allKeys: !0 }, (R, E, L, _) => {
      if (_ === void 0)
        return;
      const C = u + E;
      let D = d[_];
      typeof R[I] == "string" && (D = P.call(this, R[I])), F.call(this, R.$anchor), F.call(this, R.$dynamicAnchor), d[E] = D;
      function P(O) {
        const G = this.opts.uriResolver.resolve;
        if (O = y(D ? G(D, O) : O), S.has(O))
          throw j(O);
        S.add(O);
        let k = this.refs[O];
        return typeof k == "string" && (k = this.refs[k]), typeof k == "object" ? A(R, k.schema, O) : O !== y(C) && (O[0] === "#" ? (A(R, w[O], O), w[O] = R) : this.refs[O] = C), O;
      }
      function F(O) {
        if (typeof O == "string") {
          if (!h.test(O))
            throw new Error(`invalid anchor "${O}"`);
          P.call(this, `#${O}`);
        }
      }
    }), w;
    function A(R, E, L) {
      if (E !== void 0 && !t(R, E))
        throw j(L);
    }
    function j(R) {
      return new Error(`reference "${R}" resolves to more than one schema`);
    }
  }
  return Re.getSchemaRefs = v, Re;
}
var ro;
function kn() {
  if (ro) return mt;
  ro = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.getData = mt.KeywordCxt = mt.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Tu(), t = /* @__PURE__ */ Wi(), n = /* @__PURE__ */ Ed(), i = /* @__PURE__ */ Wi(), o = /* @__PURE__ */ Cu(), r = /* @__PURE__ */ Eu(), s = /* @__PURE__ */ ku(), a = /* @__PURE__ */ te(), c = /* @__PURE__ */ et(), l = /* @__PURE__ */ sr(), p = /* @__PURE__ */ ie(), y = /* @__PURE__ */ rr();
  function f(U) {
    if (u(U) && (S(U), d(U))) {
      b(U);
      return;
    }
    h(U, () => (0, e.topBoolOrEmptySchema)(U));
  }
  mt.validateFunctionCode = f;
  function h({ gen: U, validateName: B, schema: Z, schemaEnv: K, opts: W }, ee) {
    W.code.es5 ? U.func(B, (0, a._)`${c.default.data}, ${c.default.valCxt}`, K.$async, () => {
      U.code((0, a._)`"use strict"; ${g(Z, W)}`), x(U, W), U.code(ee);
    }) : U.func(B, (0, a._)`${c.default.data}, ${v(W)}`, K.$async, () => U.code(g(Z, W)).code(ee));
  }
  function v(U) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${U.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function x(U, B) {
    U.if(c.default.valCxt, () => {
      U.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), U.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), U.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), U.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), B.dynamicRef && U.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      U.var(c.default.instancePath, (0, a._)`""`), U.var(c.default.parentData, (0, a._)`undefined`), U.var(c.default.parentDataProperty, (0, a._)`undefined`), U.var(c.default.rootData, c.default.data), B.dynamicRef && U.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function b(U) {
    const { schema: B, opts: Z, gen: K } = U;
    h(U, () => {
      Z.$comment && B.$comment && _(U), R(U), K.let(c.default.vErrors, null), K.let(c.default.errors, 0), Z.unevaluated && I(U), A(U), C(U);
    });
  }
  function I(U) {
    const { gen: B, validateName: Z } = U;
    U.evaluated = B.const("evaluated", (0, a._)`${Z}.evaluated`), B.if((0, a._)`${U.evaluated}.dynamicProps`, () => B.assign((0, a._)`${U.evaluated}.props`, (0, a._)`undefined`)), B.if((0, a._)`${U.evaluated}.dynamicItems`, () => B.assign((0, a._)`${U.evaluated}.items`, (0, a._)`undefined`));
  }
  function g(U, B) {
    const Z = typeof U == "object" && U[B.schemaId];
    return Z && (B.code.source || B.code.process) ? (0, a._)`/*# sourceURL=${Z} */` : a.nil;
  }
  function m(U, B) {
    if (u(U) && (S(U), d(U))) {
      w(U, B);
      return;
    }
    (0, e.boolOrEmptySchema)(U, B);
  }
  function d({ schema: U, self: B }) {
    if (typeof U == "boolean")
      return !U;
    for (const Z in U)
      if (B.RULES.all[Z])
        return !0;
    return !1;
  }
  function u(U) {
    return typeof U.schema != "boolean";
  }
  function w(U, B) {
    const { schema: Z, gen: K, opts: W } = U;
    W.$comment && Z.$comment && _(U), E(U), L(U);
    const ee = K.const("_errs", c.default.errors);
    A(U, ee), K.var(B, (0, a._)`${ee} === ${c.default.errors}`);
  }
  function S(U) {
    (0, p.checkUnknownRules)(U), j(U);
  }
  function A(U, B) {
    if (U.opts.jtd)
      return P(U, [], !1, B);
    const Z = (0, t.getSchemaTypes)(U.schema), K = (0, t.coerceAndCheckDataType)(U, Z);
    P(U, Z, !K, B);
  }
  function j(U) {
    const { schema: B, errSchemaPath: Z, opts: K, self: W } = U;
    B.$ref && K.ignoreKeywordsWithRef && (0, p.schemaHasRulesButRef)(B, W.RULES) && W.logger.warn(`$ref: keywords ignored in schema at path "${Z}"`);
  }
  function R(U) {
    const { schema: B, opts: Z } = U;
    B.default !== void 0 && Z.useDefaults && Z.strictSchema && (0, p.checkStrictMode)(U, "default is ignored in the schema root");
  }
  function E(U) {
    const B = U.schema[U.opts.schemaId];
    B && (U.baseId = (0, l.resolveUrl)(U.opts.uriResolver, U.baseId, B));
  }
  function L(U) {
    if (U.schema.$async && !U.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function _({ gen: U, schemaEnv: B, schema: Z, errSchemaPath: K, opts: W }) {
    const ee = Z.$comment;
    if (W.$comment === !0)
      U.code((0, a._)`${c.default.self}.logger.log(${ee})`);
    else if (typeof W.$comment == "function") {
      const re = (0, a.str)`${K}/$comment`, Se = U.scopeValue("root", { ref: B.root });
      U.code((0, a._)`${c.default.self}.opts.$comment(${ee}, ${re}, ${Se}.schema)`);
    }
  }
  function C(U) {
    const { gen: B, schemaEnv: Z, validateName: K, ValidationError: W, opts: ee } = U;
    Z.$async ? B.if((0, a._)`${c.default.errors} === 0`, () => B.return(c.default.data), () => B.throw((0, a._)`new ${W}(${c.default.vErrors})`)) : (B.assign((0, a._)`${K}.errors`, c.default.vErrors), ee.unevaluated && D(U), B.return((0, a._)`${c.default.errors} === 0`));
  }
  function D({ gen: U, evaluated: B, props: Z, items: K }) {
    Z instanceof a.Name && U.assign((0, a._)`${B}.props`, Z), K instanceof a.Name && U.assign((0, a._)`${B}.items`, K);
  }
  function P(U, B, Z, K) {
    const { gen: W, schema: ee, data: re, allErrors: Se, opts: he, self: ye } = U, { RULES: fe } = ye;
    if (ee.$ref && (he.ignoreKeywordsWithRef || !(0, p.schemaHasRulesButRef)(ee, fe))) {
      W.block(() => z(U, "$ref", fe.all.$ref.definition));
      return;
    }
    he.jtd || O(U, B), W.block(() => {
      for (const Ne of fe.rules)
        nt(Ne);
      nt(fe.post);
    });
    function nt(Ne) {
      (0, n.shouldUseGroup)(ee, Ne) && (Ne.type ? (W.if((0, i.checkDataType)(Ne.type, re, he.strictNumbers)), F(U, Ne), B.length === 1 && B[0] === Ne.type && Z && (W.else(), (0, i.reportTypeError)(U)), W.endIf()) : F(U, Ne), Se || W.if((0, a._)`${c.default.errors} === ${K || 0}`));
    }
  }
  function F(U, B) {
    const { gen: Z, schema: K, opts: { useDefaults: W } } = U;
    W && (0, o.assignDefaults)(U, B.type), Z.block(() => {
      for (const ee of B.rules)
        (0, n.shouldUseRule)(K, ee) && z(U, ee.keyword, ee.definition, B.type);
    });
  }
  function O(U, B) {
    U.schemaEnv.meta || !U.opts.strictTypes || (G(U, B), U.opts.allowUnionTypes || k(U, B), M(U, U.dataTypes));
  }
  function G(U, B) {
    if (B.length) {
      if (!U.dataTypes.length) {
        U.dataTypes = B;
        return;
      }
      B.forEach((Z) => {
        N(U.dataTypes, Z) || q(U, `type "${Z}" not allowed by context "${U.dataTypes.join(",")}"`);
      }), $(U, B);
    }
  }
  function k(U, B) {
    B.length > 1 && !(B.length === 2 && B.includes("null")) && q(U, "use allowUnionTypes to allow union type keyword");
  }
  function M(U, B) {
    const Z = U.self.RULES.all;
    for (const K in Z) {
      const W = Z[K];
      if (typeof W == "object" && (0, n.shouldUseRule)(U.schema, W)) {
        const { type: ee } = W.definition;
        ee.length && !ee.some((re) => V(B, re)) && q(U, `missing type "${ee.join(",")}" for keyword "${K}"`);
      }
    }
  }
  function V(U, B) {
    return U.includes(B) || B === "number" && U.includes("integer");
  }
  function N(U, B) {
    return U.includes(B) || B === "integer" && U.includes("number");
  }
  function $(U, B) {
    const Z = [];
    for (const K of U.dataTypes)
      N(B, K) ? Z.push(K) : B.includes("integer") && K === "number" && Z.push("integer");
    U.dataTypes = Z;
  }
  function q(U, B) {
    const Z = U.schemaEnv.baseId + U.errSchemaPath;
    B += ` at "${Z}" (strictTypes)`, (0, p.checkStrictMode)(U, B, U.opts.strictTypes);
  }
  class T {
    constructor(B, Z, K) {
      if ((0, r.validateKeywordUsage)(B, Z, K), this.gen = B.gen, this.allErrors = B.allErrors, this.keyword = K, this.data = B.data, this.schema = B.schema[K], this.$data = Z.$data && B.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, p.schemaRefOrVal)(B, this.schema, K, this.$data), this.schemaType = Z.schemaType, this.parentSchema = B.schema, this.params = {}, this.it = B, this.def = Z, this.$data)
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
      (B ? y.reportExtraError : y.reportError)(this, this.def.error, Z);
    }
    $dataError() {
      (0, y.reportError)(this, this.def.$dataError || y.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, y.resetErrorsCount)(this.gen, this.errsCount);
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
      return m(W, Z), W;
    }
    mergeEvaluated(B, Z) {
      const { it: K, gen: W } = this;
      K.opts.unevaluated && (K.props !== !0 && B.props !== void 0 && (K.props = p.mergeEvaluated.props(W, B.props, K.props, Z)), K.items !== !0 && B.items !== void 0 && (K.items = p.mergeEvaluated.items(W, B.items, K.items, Z)));
    }
    mergeValidEvaluated(B, Z) {
      const { it: K, gen: W } = this;
      if (K.opts.unevaluated && (K.props !== !0 || K.items !== !0))
        return W.if(Z, () => this.mergeEvaluated(B, a.Name)), !0;
    }
  }
  mt.KeywordCxt = T;
  function z(U, B, Z, K) {
    const W = new T(U, Z, B);
    "code" in Z ? Z.code(W, K) : W.$data && Z.validate ? (0, r.funcKeywordCode)(W, Z) : "macro" in Z ? (0, r.macroKeywordCode)(W, Z) : (Z.compile || Z.validate) && (0, r.funcKeywordCode)(W, Z);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function J(U, { dataLevel: B, dataNames: Z, dataPathArr: K }) {
    let W, ee;
    if (U === "")
      return c.default.rootData;
    if (U[0] === "/") {
      if (!H.test(U))
        throw new Error(`Invalid JSON-pointer: ${U}`);
      W = U, ee = c.default.rootData;
    } else {
      const ye = Q.exec(U);
      if (!ye)
        throw new Error(`Invalid JSON-pointer: ${U}`);
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
      ye && (ee = (0, a._)`${ee}${(0, a.getProperty)((0, p.unescapeJsonPointer)(ye))}`, re = (0, a._)`${re} && ${ee}`);
    return re;
    function he(ye, fe) {
      return `Cannot access ${ye} ${fe} levels up, current level is ${B}`;
    }
  }
  return mt.getData = J, mt;
}
var Zn = {}, so;
function ar() {
  if (so) return Zn;
  so = 1, Object.defineProperty(Zn, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Zn.default = e, Zn;
}
var Hn = {}, ao;
function Mn() {
  if (ao) return Hn;
  ao = 1, Object.defineProperty(Hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ sr();
  class t extends Error {
    constructor(i, o, r, s) {
      super(s || `can't resolve reference ${r} from id ${o}`), this.missingRef = (0, e.resolveUrl)(i, o, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(i, this.missingRef));
    }
  }
  return Hn.default = t, Hn;
}
var Ee = {}, oo;
function or() {
  if (oo) return Ee;
  oo = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.resolveSchema = Ee.getCompilingSchema = Ee.resolveRef = Ee.compileSchema = Ee.SchemaEnv = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ar(), n = /* @__PURE__ */ et(), i = /* @__PURE__ */ sr(), o = /* @__PURE__ */ ie(), r = /* @__PURE__ */ kn();
  class s {
    constructor(I) {
      var g;
      this.refs = {}, this.dynamicAnchors = {};
      let m;
      typeof I.schema == "object" && (m = I.schema), this.schema = I.schema, this.schemaId = I.schemaId, this.root = I.root || this, this.baseId = (g = I.baseId) !== null && g !== void 0 ? g : (0, i.normalizeId)(m?.[I.schemaId || "$id"]), this.schemaPath = I.schemaPath, this.localRefs = I.localRefs, this.meta = I.meta, this.$async = m?.$async, this.refs = {};
    }
  }
  Ee.SchemaEnv = s;
  function a(b) {
    const I = p.call(this, b);
    if (I)
      return I;
    const g = (0, i.getFullPath)(this.opts.uriResolver, b.root.baseId), { es5: m, lines: d } = this.opts.code, { ownProperties: u } = this.opts, w = new e.CodeGen(this.scope, { es5: m, lines: d, ownProperties: u });
    let S;
    b.$async && (S = w.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const A = w.scopeName("validate");
    b.validateName = A;
    const j = {
      gen: w,
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
      topSchemaRef: w.scopeValue("schema", this.opts.code.source === !0 ? { ref: b.schema, code: (0, e.stringify)(b.schema) } : { ref: b.schema }),
      validateName: A,
      ValidationError: S,
      schema: b.schema,
      schemaEnv: b,
      rootId: g,
      baseId: b.baseId || g,
      schemaPath: e.nil,
      errSchemaPath: b.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let R;
    try {
      this._compilations.add(b), (0, r.validateFunctionCode)(j), w.optimize(this.opts.code.optimize);
      const E = w.toString();
      R = `${w.scopeRefs(n.default.scope)}return ${E}`, this.opts.code.process && (R = this.opts.code.process(R, b));
      const _ = new Function(`${n.default.self}`, `${n.default.scope}`, R)(this, this.scope.get());
      if (this.scope.value(A, { ref: _ }), _.errors = null, _.schema = b.schema, _.schemaEnv = b, b.$async && (_.$async = !0), this.opts.code.source === !0 && (_.source = { validateName: A, validateCode: E, scopeValues: w._values }), this.opts.unevaluated) {
        const { props: C, items: D } = j;
        _.evaluated = {
          props: C instanceof e.Name ? void 0 : C,
          items: D instanceof e.Name ? void 0 : D,
          dynamicProps: C instanceof e.Name,
          dynamicItems: D instanceof e.Name
        }, _.source && (_.source.evaluated = (0, e.stringify)(_.evaluated));
      }
      return b.validate = _, b;
    } catch (E) {
      throw delete b.validate, delete b.validateName, R && this.logger.error("Error compiling schema, function code:", R), E;
    } finally {
      this._compilations.delete(b);
    }
  }
  Ee.compileSchema = a;
  function c(b, I, g) {
    var m;
    g = (0, i.resolveUrl)(this.opts.uriResolver, I, g);
    const d = b.refs[g];
    if (d)
      return d;
    let u = f.call(this, b, g);
    if (u === void 0) {
      const w = (m = b.localRefs) === null || m === void 0 ? void 0 : m[g], { schemaId: S } = this.opts;
      w && (u = new s({ schema: w, schemaId: S, root: b, baseId: I }));
    }
    if (u !== void 0)
      return b.refs[g] = l.call(this, u);
  }
  Ee.resolveRef = c;
  function l(b) {
    return (0, i.inlineRef)(b.schema, this.opts.inlineRefs) ? b.schema : b.validate ? b : a.call(this, b);
  }
  function p(b) {
    for (const I of this._compilations)
      if (y(I, b))
        return I;
  }
  Ee.getCompilingSchema = p;
  function y(b, I) {
    return b.schema === I.schema && b.root === I.root && b.baseId === I.baseId;
  }
  function f(b, I) {
    let g;
    for (; typeof (g = this.refs[I]) == "string"; )
      I = g;
    return g || this.schemas[I] || h.call(this, b, I);
  }
  function h(b, I) {
    const g = this.opts.uriResolver.parse(I), m = (0, i._getFullPath)(this.opts.uriResolver, g);
    let d = (0, i.getFullPath)(this.opts.uriResolver, b.baseId, void 0);
    if (Object.keys(b.schema).length > 0 && m === d)
      return x.call(this, g, b);
    const u = (0, i.normalizeId)(m), w = this.refs[u] || this.schemas[u];
    if (typeof w == "string") {
      const S = h.call(this, b, w);
      return typeof S?.schema != "object" ? void 0 : x.call(this, g, S);
    }
    if (typeof w?.schema == "object") {
      if (w.validate || a.call(this, w), u === (0, i.normalizeId)(I)) {
        const { schema: S } = w, { schemaId: A } = this.opts, j = S[A];
        return j && (d = (0, i.resolveUrl)(this.opts.uriResolver, d, j)), new s({ schema: S, schemaId: A, root: b, baseId: d });
      }
      return x.call(this, g, w);
    }
  }
  Ee.resolveSchema = h;
  const v = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function x(b, { baseId: I, schema: g, root: m }) {
    var d;
    if (((d = b.fragment) === null || d === void 0 ? void 0 : d[0]) !== "/")
      return;
    for (const S of b.fragment.slice(1).split("/")) {
      if (typeof g == "boolean")
        return;
      const A = g[(0, o.unescapeFragment)(S)];
      if (A === void 0)
        return;
      g = A;
      const j = typeof g == "object" && g[this.opts.schemaId];
      !v.has(S) && j && (I = (0, i.resolveUrl)(this.opts.uriResolver, I, j));
    }
    let u;
    if (typeof g != "boolean" && g.$ref && !(0, o.schemaHasRulesButRef)(g, this.RULES)) {
      const S = (0, i.resolveUrl)(this.opts.uriResolver, I, g.$ref);
      u = h.call(this, m, S);
    }
    const { schemaId: w } = this.opts;
    if (u = u || new s({ schema: g, schemaId: w, root: m, baseId: I }), u.schema !== u.root.schema)
      return u;
  }
  return Ee;
}
const Lu = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Ou = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Nu = "object", Du = ["$data"], zu = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Vu = !1, Uu = {
  $id: Lu,
  description: Ou,
  type: Nu,
  required: Du,
  properties: zu,
  additionalProperties: Vu
};
var Jn = {}, mn = { exports: {} }, kr, co;
function Md() {
  if (co) return kr;
  co = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function n(f) {
    let h = "", v = 0, x = 0;
    for (x = 0; x < f.length; x++)
      if (v = f[x].charCodeAt(0), v !== 48) {
        if (!(v >= 48 && v <= 57 || v >= 65 && v <= 70 || v >= 97 && v <= 102))
          return "";
        h += f[x];
        break;
      }
    for (x += 1; x < f.length; x++) {
      if (v = f[x].charCodeAt(0), !(v >= 48 && v <= 57 || v >= 65 && v <= 70 || v >= 97 && v <= 102))
        return "";
      h += f[x];
    }
    return h;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function o(f) {
    return f.length = 0, !0;
  }
  function r(f, h, v) {
    if (f.length) {
      const x = n(f);
      if (x !== "")
        h.push(x);
      else
        return v.error = !0, !1;
      f.length = 0;
    }
    return !0;
  }
  function s(f) {
    let h = 0;
    const v = { error: !1, address: "", zone: "" }, x = [], b = [];
    let I = !1, g = !1, m = r;
    for (let d = 0; d < f.length; d++) {
      const u = f[d];
      if (!(u === "[" || u === "]"))
        if (u === ":") {
          if (I === !0 && (g = !0), !m(b, x, v))
            break;
          if (++h > 7) {
            v.error = !0;
            break;
          }
          d > 0 && f[d - 1] === ":" && (I = !0), x.push(":");
          continue;
        } else if (u === "%") {
          if (!m(b, x, v))
            break;
          m = o;
        } else {
          b.push(u);
          continue;
        }
    }
    return b.length && (m === o ? v.zone = b.join("") : g ? x.push(b.join("")) : x.push(n(b))), v.address = x.join(""), v;
  }
  function a(f) {
    if (c(f, ":") < 2)
      return { host: f, isIPV6: !1 };
    const h = s(f);
    if (h.error)
      return { host: f, isIPV6: !1 };
    {
      let v = h.address, x = h.address;
      return h.zone && (v += "%" + h.zone, x += "%25" + h.zone), { host: v, isIPV6: !0, escapedHost: x };
    }
  }
  function c(f, h) {
    let v = 0;
    for (let x = 0; x < f.length; x++)
      f[x] === h && v++;
    return v;
  }
  function l(f) {
    let h = f;
    const v = [];
    let x = -1, b = 0;
    for (; b = h.length; ) {
      if (b === 1) {
        if (h === ".")
          break;
        if (h === "/") {
          v.push("/");
          break;
        } else {
          v.push(h);
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
          v.push("/");
          break;
        }
      } else if (b === 3 && h === "/..") {
        v.length !== 0 && v.pop(), v.push("/");
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
          h = h.slice(3), v.length !== 0 && v.pop();
          continue;
        }
      }
      if ((x = h.indexOf("/", 1)) === -1) {
        v.push(h);
        break;
      } else
        v.push(h.slice(0, x)), h = h.slice(x);
    }
    return v.join("");
  }
  function p(f, h) {
    const v = h !== !0 ? escape : unescape;
    return f.scheme !== void 0 && (f.scheme = v(f.scheme)), f.userinfo !== void 0 && (f.userinfo = v(f.userinfo)), f.host !== void 0 && (f.host = v(f.host)), f.path !== void 0 && (f.path = v(f.path)), f.query !== void 0 && (f.query = v(f.query)), f.fragment !== void 0 && (f.fragment = v(f.fragment)), f;
  }
  function y(f) {
    const h = [];
    if (f.userinfo !== void 0 && (h.push(f.userinfo), h.push("@")), f.host !== void 0) {
      let v = unescape(f.host);
      if (!t(v)) {
        const x = a(v);
        x.isIPV6 === !0 ? v = `[${x.escapedHost}]` : v = f.host;
      }
      h.push(v);
    }
    return (typeof f.port == "number" || typeof f.port == "string") && (h.push(":"), h.push(String(f.port))), h.length ? h.join("") : void 0;
  }
  return kr = {
    nonSimpleDomain: i,
    recomposeAuthority: y,
    normalizeComponentEncoding: p,
    removeDotSegments: l,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: a,
    stringArrayToHexStripped: n
  }, kr;
}
var Mr, lo;
function Gu() {
  if (lo) return Mr;
  lo = 1;
  const { isUUID: e } = Md(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function i(u) {
    return n.indexOf(
      /** @type {*} */
      u
    ) !== -1;
  }
  function o(u) {
    return u.secure === !0 ? !0 : u.secure === !1 ? !1 : u.scheme ? u.scheme.length === 3 && (u.scheme[0] === "w" || u.scheme[0] === "W") && (u.scheme[1] === "s" || u.scheme[1] === "S") && (u.scheme[2] === "s" || u.scheme[2] === "S") : !1;
  }
  function r(u) {
    return u.host || (u.error = u.error || "HTTP URIs must have a host."), u;
  }
  function s(u) {
    const w = String(u.scheme).toLowerCase() === "https";
    return (u.port === (w ? 443 : 80) || u.port === "") && (u.port = void 0), u.path || (u.path = "/"), u;
  }
  function a(u) {
    return u.secure = o(u), u.resourceName = (u.path || "/") + (u.query ? "?" + u.query : ""), u.path = void 0, u.query = void 0, u;
  }
  function c(u) {
    if ((u.port === (o(u) ? 443 : 80) || u.port === "") && (u.port = void 0), typeof u.secure == "boolean" && (u.scheme = u.secure ? "wss" : "ws", u.secure = void 0), u.resourceName) {
      const [w, S] = u.resourceName.split("?");
      u.path = w && w !== "/" ? w : void 0, u.query = S, u.resourceName = void 0;
    }
    return u.fragment = void 0, u;
  }
  function l(u, w) {
    if (!u.path)
      return u.error = "URN can not be parsed", u;
    const S = u.path.match(t);
    if (S) {
      const A = w.scheme || u.scheme || "urn";
      u.nid = S[1].toLowerCase(), u.nss = S[2];
      const j = `${A}:${w.nid || u.nid}`, R = d(j);
      u.path = void 0, R && (u = R.parse(u, w));
    } else
      u.error = u.error || "URN can not be parsed.";
    return u;
  }
  function p(u, w) {
    if (u.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const S = w.scheme || u.scheme || "urn", A = u.nid.toLowerCase(), j = `${S}:${w.nid || A}`, R = d(j);
    R && (u = R.serialize(u, w));
    const E = u, L = u.nss;
    return E.path = `${A || w.nid}:${L}`, w.skipEscape = !0, E;
  }
  function y(u, w) {
    const S = u;
    return S.uuid = S.nss, S.nss = void 0, !w.tolerant && (!S.uuid || !e(S.uuid)) && (S.error = S.error || "UUID is not valid."), S;
  }
  function f(u) {
    const w = u;
    return w.nss = (u.uuid || "").toLowerCase(), w;
  }
  const h = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: r,
      serialize: s
    }
  ), v = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: h.domainHost,
      parse: r,
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
  ), m = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: h,
      https: v,
      ws: x,
      wss: b,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: l,
          serialize: p,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: y,
          serialize: f,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(m, null);
  function d(u) {
    return u && (m[
      /** @type {SchemeName} */
      u
    ] || m[
      /** @type {SchemeName} */
      u.toLowerCase()
    ]) || void 0;
  }
  return Mr = {
    wsIsSecure: o,
    SCHEMES: m,
    isValidSchemeName: i,
    getSchemeHandler: d
  }, Mr;
}
var uo;
function Fu() {
  if (uo) return mn.exports;
  uo = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizeComponentEncoding: i, isIPv4: o, nonSimpleDomain: r } = Md(), { SCHEMES: s, getSchemeHandler: a } = Gu();
  function c(b, I) {
    return typeof b == "string" ? b = /** @type {T} */
    f(v(b, I), I) : typeof b == "object" && (b = /** @type {T} */
    v(f(b, I), I)), b;
  }
  function l(b, I, g) {
    const m = g ? Object.assign({ scheme: "null" }, g) : { scheme: "null" }, d = p(v(b, m), v(I, m), m, !0);
    return m.skipEscape = !0, f(d, m);
  }
  function p(b, I, g, m) {
    const d = {};
    return m || (b = v(f(b, g), g), I = v(f(I, g), g)), g = g || {}, !g.tolerant && I.scheme ? (d.scheme = I.scheme, d.userinfo = I.userinfo, d.host = I.host, d.port = I.port, d.path = t(I.path || ""), d.query = I.query) : (I.userinfo !== void 0 || I.host !== void 0 || I.port !== void 0 ? (d.userinfo = I.userinfo, d.host = I.host, d.port = I.port, d.path = t(I.path || ""), d.query = I.query) : (I.path ? (I.path[0] === "/" ? d.path = t(I.path) : ((b.userinfo !== void 0 || b.host !== void 0 || b.port !== void 0) && !b.path ? d.path = "/" + I.path : b.path ? d.path = b.path.slice(0, b.path.lastIndexOf("/") + 1) + I.path : d.path = I.path, d.path = t(d.path)), d.query = I.query) : (d.path = b.path, I.query !== void 0 ? d.query = I.query : d.query = b.query), d.userinfo = b.userinfo, d.host = b.host, d.port = b.port), d.scheme = b.scheme), d.fragment = I.fragment, d;
  }
  function y(b, I, g) {
    return typeof b == "string" ? (b = unescape(b), b = f(i(v(b, g), !0), { ...g, skipEscape: !0 })) : typeof b == "object" && (b = f(i(b, !0), { ...g, skipEscape: !0 })), typeof I == "string" ? (I = unescape(I), I = f(i(v(I, g), !0), { ...g, skipEscape: !0 })) : typeof I == "object" && (I = f(i(I, !0), { ...g, skipEscape: !0 })), b.toLowerCase() === I.toLowerCase();
  }
  function f(b, I) {
    const g = {
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
    }, m = Object.assign({}, I), d = [], u = a(m.scheme || g.scheme);
    u && u.serialize && u.serialize(g, m), g.path !== void 0 && (m.skipEscape ? g.path = unescape(g.path) : (g.path = escape(g.path), g.scheme !== void 0 && (g.path = g.path.split("%3A").join(":")))), m.reference !== "suffix" && g.scheme && d.push(g.scheme, ":");
    const w = n(g);
    if (w !== void 0 && (m.reference !== "suffix" && d.push("//"), d.push(w), g.path && g.path[0] !== "/" && d.push("/")), g.path !== void 0) {
      let S = g.path;
      !m.absolutePath && (!u || !u.absolutePath) && (S = t(S)), w === void 0 && S[0] === "/" && S[1] === "/" && (S = "/%2F" + S.slice(2)), d.push(S);
    }
    return g.query !== void 0 && d.push("?", g.query), g.fragment !== void 0 && d.push("#", g.fragment), d.join("");
  }
  const h = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function v(b, I) {
    const g = Object.assign({}, I), m = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let d = !1;
    g.reference === "suffix" && (g.scheme ? b = g.scheme + ":" + b : b = "//" + b);
    const u = b.match(h);
    if (u) {
      if (m.scheme = u[1], m.userinfo = u[3], m.host = u[4], m.port = parseInt(u[5], 10), m.path = u[6] || "", m.query = u[7], m.fragment = u[8], isNaN(m.port) && (m.port = u[5]), m.host)
        if (o(m.host) === !1) {
          const A = e(m.host);
          m.host = A.host.toLowerCase(), d = A.isIPV6;
        } else
          d = !0;
      m.scheme === void 0 && m.userinfo === void 0 && m.host === void 0 && m.port === void 0 && m.query === void 0 && !m.path ? m.reference = "same-document" : m.scheme === void 0 ? m.reference = "relative" : m.fragment === void 0 ? m.reference = "absolute" : m.reference = "uri", g.reference && g.reference !== "suffix" && g.reference !== m.reference && (m.error = m.error || "URI is not a " + g.reference + " reference.");
      const w = a(g.scheme || m.scheme);
      if (!g.unicodeSupport && (!w || !w.unicodeSupport) && m.host && (g.domainHost || w && w.domainHost) && d === !1 && r(m.host))
        try {
          m.host = URL.domainToASCII(m.host.toLowerCase());
        } catch (S) {
          m.error = m.error || "Host's domain name can not be converted to ASCII: " + S;
        }
      (!w || w && !w.skipNormalize) && (b.indexOf("%") !== -1 && (m.scheme !== void 0 && (m.scheme = unescape(m.scheme)), m.host !== void 0 && (m.host = unescape(m.host))), m.path && (m.path = escape(unescape(m.path))), m.fragment && (m.fragment = encodeURI(decodeURIComponent(m.fragment)))), w && w.parse && w.parse(m, g);
    } else
      m.error = m.error || "URI can not be parsed.";
    return m;
  }
  const x = {
    SCHEMES: s,
    normalize: c,
    resolve: l,
    resolveComponent: p,
    equal: y,
    serialize: f,
    parse: v
  };
  return mn.exports = x, mn.exports.default = x, mn.exports.fastUri = x, mn.exports;
}
var po;
function Bu() {
  if (po) return Jn;
  po = 1, Object.defineProperty(Jn, "__esModule", { value: !0 });
  const e = Fu();
  return e.code = 'require("ajv/dist/runtime/uri").default', Jn.default = e, Jn;
}
var fo;
function Ld() {
  return fo || (fo = 1, (function(e) {
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
    const i = /* @__PURE__ */ ar(), o = /* @__PURE__ */ Mn(), r = /* @__PURE__ */ Cd(), s = /* @__PURE__ */ or(), a = /* @__PURE__ */ te(), c = /* @__PURE__ */ sr(), l = /* @__PURE__ */ Wi(), p = /* @__PURE__ */ ie(), y = Uu, f = /* @__PURE__ */ Bu(), h = (k, M) => new RegExp(k, M);
    h.code = "new RegExp";
    const v = ["removeAdditional", "useDefaults", "coerceTypes"], x = /* @__PURE__ */ new Set([
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
    }, I = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, g = 200;
    function m(k) {
      var M, V, N, $, q, T, z, H, Q, J, U, B, Z, K, W, ee, re, Se, he, ye, fe, nt, Ne, vr, br;
      const fn = k.strict, wr = (M = k.code) === null || M === void 0 ? void 0 : M.optimize, ja = wr === !0 || wr === void 0 ? 1 : wr || 0, $a = (N = (V = k.code) === null || V === void 0 ? void 0 : V.regExp) !== null && N !== void 0 ? N : h, Ol = ($ = k.uriResolver) !== null && $ !== void 0 ? $ : f.default;
      return {
        strictSchema: (T = (q = k.strictSchema) !== null && q !== void 0 ? q : fn) !== null && T !== void 0 ? T : !0,
        strictNumbers: (H = (z = k.strictNumbers) !== null && z !== void 0 ? z : fn) !== null && H !== void 0 ? H : !0,
        strictTypes: (J = (Q = k.strictTypes) !== null && Q !== void 0 ? Q : fn) !== null && J !== void 0 ? J : "log",
        strictTuples: (B = (U = k.strictTuples) !== null && U !== void 0 ? U : fn) !== null && B !== void 0 ? B : "log",
        strictRequired: (K = (Z = k.strictRequired) !== null && Z !== void 0 ? Z : fn) !== null && K !== void 0 ? K : !1,
        code: k.code ? { ...k.code, optimize: ja, regExp: $a } : { optimize: ja, regExp: $a },
        loopRequired: (W = k.loopRequired) !== null && W !== void 0 ? W : g,
        loopEnum: (ee = k.loopEnum) !== null && ee !== void 0 ? ee : g,
        meta: (re = k.meta) !== null && re !== void 0 ? re : !0,
        messages: (Se = k.messages) !== null && Se !== void 0 ? Se : !0,
        inlineRefs: (he = k.inlineRefs) !== null && he !== void 0 ? he : !0,
        schemaId: (ye = k.schemaId) !== null && ye !== void 0 ? ye : "$id",
        addUsedSchema: (fe = k.addUsedSchema) !== null && fe !== void 0 ? fe : !0,
        validateSchema: (nt = k.validateSchema) !== null && nt !== void 0 ? nt : !0,
        validateFormats: (Ne = k.validateFormats) !== null && Ne !== void 0 ? Ne : !0,
        unicodeRegExp: (vr = k.unicodeRegExp) !== null && vr !== void 0 ? vr : !0,
        int32range: (br = k.int32range) !== null && br !== void 0 ? br : !0,
        uriResolver: Ol
      };
    }
    class d {
      constructor(M = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), M = this.opts = { ...M, ...m(M) };
        const { es5: V, lines: N } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: x, es5: V, lines: N }), this.logger = L(M.logger);
        const $ = M.validateFormats;
        M.validateFormats = !1, this.RULES = (0, r.getRules)(), u.call(this, b, M, "NOT SUPPORTED"), u.call(this, I, M, "DEPRECATED", "warn"), this._metaOpts = R.call(this), M.formats && A.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), M.keywords && j.call(this, M.keywords), typeof M.meta == "object" && this.addMetaSchema(M.meta), S.call(this), M.validateFormats = $;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: M, meta: V, schemaId: N } = this.opts;
        let $ = y;
        N === "id" && ($ = { ...y }, $.id = $.$id, delete $.$id), V && M && this.addMetaSchema($, $[N], !1);
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
        const $ = N(V);
        return "$async" in N || (this.errors = N.errors), $;
      }
      compile(M, V) {
        const N = this._addSchema(M, V);
        return N.validate || this._compileSchemaEnv(N);
      }
      compileAsync(M, V) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: N } = this.opts;
        return $.call(this, M, V);
        async function $(J, U) {
          await q.call(this, J.$schema);
          const B = this._addSchema(J, U);
          return B.validate || T.call(this, B);
        }
        async function q(J) {
          J && !this.getSchema(J) && await $.call(this, { $ref: J }, !0);
        }
        async function T(J) {
          try {
            return this._compileSchemaEnv(J);
          } catch (U) {
            if (!(U instanceof o.default))
              throw U;
            return z.call(this, U), await H.call(this, U.missingSchema), T.call(this, J);
          }
        }
        function z({ missingSchema: J, missingRef: U }) {
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
      addSchema(M, V, N, $ = this.opts.validateSchema) {
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
        return V = (0, c.normalizeId)(V || q), this._checkUnique(V), this.schemas[V] = this._addSchema(M, N, V, $, !0), this;
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
        const $ = this.validate(N, M);
        if (!$ && V) {
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
        let V;
        for (; typeof (V = w.call(this, M)) == "string"; )
          M = V;
        if (V === void 0) {
          const { schemaId: N } = this.opts, $ = new s.SchemaEnv({ schema: {}, schemaId: N });
          if (V = s.resolveSchema.call(this, $, M), !V)
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
            const V = w.call(this, M);
            return typeof V == "object" && this._cache.delete(V.schema), delete this.schemas[M], delete this.refs[M], this;
          }
          case "object": {
            const V = M;
            this._cache.delete(V);
            let N = M[this.opts.schemaId];
            return N && (N = (0, c.normalizeId)(N), delete this.schemas[N], delete this.refs[N]), this;
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
        if (C.call(this, N, V), !V)
          return (0, p.eachItem)(N, (q) => D.call(this, q)), this;
        F.call(this, V);
        const $ = {
          ...V,
          type: (0, l.getJSONTypes)(V.type),
          schemaType: (0, l.getJSONTypes)(V.schemaType)
        };
        return (0, p.eachItem)(N, $.type.length === 0 ? (q) => D.call(this, q, $) : (q) => $.type.forEach((T) => D.call(this, q, $, T))), this;
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
          const $ = N.rules.findIndex((q) => q.keyword === M);
          $ >= 0 && N.rules.splice($, 1);
        }
        return this;
      }
      // Add format
      addFormat(M, V) {
        return typeof V == "string" && (V = new RegExp(V)), this.formats[M] = V, this;
      }
      errorsText(M = this.errors, { separator: V = ", ", dataVar: N = "data" } = {}) {
        return !M || M.length === 0 ? "No errors" : M.map(($) => `${N}${$.instancePath} ${$.message}`).reduce(($, q) => $ + V + q);
      }
      $dataMetaSchema(M, V) {
        const N = this.RULES.all;
        M = JSON.parse(JSON.stringify(M));
        for (const $ of V) {
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
      _removeAllSchemas(M, V) {
        for (const N in M) {
          const $ = M[N];
          (!V || V.test(N)) && (typeof $ == "string" ? delete M[N] : $ && !$.meta && (this._cache.delete($.schema), delete M[N]));
        }
      }
      _addSchema(M, V, N, $ = this.opts.validateSchema, q = this.opts.addUsedSchema) {
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
        return H = new s.SchemaEnv({ schema: M, schemaId: z, meta: V, baseId: N, localRefs: Q }), this._cache.set(H.schema, H), q && !N.startsWith("#") && (N && this._checkUnique(N), this.refs[N] = H), $ && this.validateSchema(M, !0), H;
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
        const V = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, M);
        } finally {
          this.opts = V;
        }
      }
    }
    d.ValidationError = i.default, d.MissingRefError = o.default, e.default = d;
    function u(k, M, V, N = "error") {
      for (const $ in k) {
        const q = $;
        q in M && this.logger[N](`${V}: option ${$}. ${k[q]}`);
      }
    }
    function w(k) {
      return k = (0, c.normalizeId)(k), this.schemas[k] || this.refs[k];
    }
    function S() {
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
    function j(k) {
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
    function R() {
      const k = { ...this.opts };
      for (const M of v)
        delete k[M];
      return k;
    }
    const E = { log() {
    }, warn() {
    }, error() {
    } };
    function L(k) {
      if (k === !1)
        return E;
      if (k === void 0)
        return console;
      if (k.log && k.warn && k.error)
        return k;
      throw new Error("logger must implement log, warn and error methods");
    }
    const _ = /^[a-z_$][a-z0-9_$:-]*$/i;
    function C(k, M) {
      const { RULES: V } = this;
      if ((0, p.eachItem)(k, (N) => {
        if (V.keywords[N])
          throw new Error(`Keyword ${N} is already defined`);
        if (!_.test(N))
          throw new Error(`Keyword ${N} has invalid name`);
      }), !!M && M.$data && !("code" in M || "validate" in M))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function D(k, M, V) {
      var N;
      const $ = M?.post;
      if (V && $)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: q } = this;
      let T = $ ? q.post : q.rules.find(({ type: H }) => H === V);
      if (T || (T = { type: V, rules: [] }, q.rules.push(T)), q.keywords[k] = !0, !M)
        return;
      const z = {
        keyword: k,
        definition: {
          ...M,
          type: (0, l.getJSONTypes)(M.type),
          schemaType: (0, l.getJSONTypes)(M.schemaType)
        }
      };
      M.before ? P.call(this, T, z, M.before) : T.rules.push(z), q.all[k] = z, (N = M.implements) === null || N === void 0 || N.forEach((H) => this.addKeyword(H));
    }
    function P(k, M, V) {
      const N = k.rules.findIndex(($) => $.keyword === V);
      N >= 0 ? k.rules.splice(N, 0, M) : (k.rules.push(M), this.logger.warn(`rule ${V} is not defined`));
    }
    function F(k) {
      let { metaSchema: M } = k;
      M !== void 0 && (k.$data && this.opts.$data && (M = G(M)), k.validateSchema = this.compile(M, !0));
    }
    const O = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function G(k) {
      return { anyOf: [k, O] };
    }
  })(jr)), jr;
}
var Kn = {}, Qn = {}, Wn = {}, ho;
function Zu() {
  if (ho) return Wn;
  ho = 1, Object.defineProperty(Wn, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Wn.default = e, Wn;
}
var jt = {}, mo;
function sa() {
  if (mo) return jt;
  mo = 1, Object.defineProperty(jt, "__esModule", { value: !0 }), jt.callRef = jt.getValidate = void 0;
  const e = /* @__PURE__ */ Mn(), t = /* @__PURE__ */ tt(), n = /* @__PURE__ */ te(), i = /* @__PURE__ */ et(), o = /* @__PURE__ */ or(), r = /* @__PURE__ */ ie(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(l) {
      const { gen: p, schema: y, it: f } = l, { baseId: h, schemaEnv: v, validateName: x, opts: b, self: I } = f, { root: g } = v;
      if ((y === "#" || y === "#/") && h === g.baseId)
        return d();
      const m = o.resolveRef.call(I, g, h, y);
      if (m === void 0)
        throw new e.default(f.opts.uriResolver, h, y);
      if (m instanceof o.SchemaEnv)
        return u(m);
      return w(m);
      function d() {
        if (v === g)
          return c(l, x, v, v.$async);
        const S = p.scopeValue("root", { ref: g });
        return c(l, (0, n._)`${S}.validate`, g, g.$async);
      }
      function u(S) {
        const A = a(l, S);
        c(l, A, S, S.$async);
      }
      function w(S) {
        const A = p.scopeValue("schema", b.code.source === !0 ? { ref: S, code: (0, n.stringify)(S) } : { ref: S }), j = p.name("valid"), R = l.subschema({
          schema: S,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: A,
          errSchemaPath: y
        }, j);
        l.mergeEvaluated(R), l.ok(j);
      }
    }
  };
  function a(l, p) {
    const { gen: y } = l;
    return p.validate ? y.scopeValue("validate", { ref: p.validate }) : (0, n._)`${y.scopeValue("wrapper", { ref: p })}.validate`;
  }
  jt.getValidate = a;
  function c(l, p, y, f) {
    const { gen: h, it: v } = l, { allErrors: x, schemaEnv: b, opts: I } = v, g = I.passContext ? i.default.this : n.nil;
    f ? m() : d();
    function m() {
      if (!b.$async)
        throw new Error("async schema referenced by sync schema");
      const S = h.let("valid");
      h.try(() => {
        h.code((0, n._)`await ${(0, t.callValidateCode)(l, p, g)}`), w(p), x || h.assign(S, !0);
      }, (A) => {
        h.if((0, n._)`!(${A} instanceof ${v.ValidationError})`, () => h.throw(A)), u(A), x || h.assign(S, !1);
      }), l.ok(S);
    }
    function d() {
      l.result((0, t.callValidateCode)(l, p, g), () => w(p), () => u(p));
    }
    function u(S) {
      const A = (0, n._)`${S}.errors`;
      h.assign(i.default.vErrors, (0, n._)`${i.default.vErrors} === null ? ${A} : ${i.default.vErrors}.concat(${A})`), h.assign(i.default.errors, (0, n._)`${i.default.vErrors}.length`);
    }
    function w(S) {
      var A;
      if (!v.opts.unevaluated)
        return;
      const j = (A = y?.validate) === null || A === void 0 ? void 0 : A.evaluated;
      if (v.props !== !0)
        if (j && !j.dynamicProps)
          j.props !== void 0 && (v.props = r.mergeEvaluated.props(h, j.props, v.props));
        else {
          const R = h.var("props", (0, n._)`${S}.evaluated.props`);
          v.props = r.mergeEvaluated.props(h, R, v.props, n.Name);
        }
      if (v.items !== !0)
        if (j && !j.dynamicItems)
          j.items !== void 0 && (v.items = r.mergeEvaluated.items(h, j.items, v.items));
        else {
          const R = h.var("items", (0, n._)`${S}.evaluated.items`);
          v.items = r.mergeEvaluated.items(h, R, v.items, n.Name);
        }
    }
  }
  return jt.callRef = c, jt.default = s, jt;
}
var yo;
function Od() {
  if (yo) return Qn;
  yo = 1, Object.defineProperty(Qn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Zu(), t = /* @__PURE__ */ sa(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Qn.default = n, Qn;
}
var Xn = {}, Yn = {}, go;
function Hu() {
  if (go) return Yn;
  go = 1, Object.defineProperty(Yn, "__esModule", { value: !0 });
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
  return Yn.default = o, Yn;
}
var ei = {}, vo;
function Ju() {
  if (vo) return ei;
  vo = 1, Object.defineProperty(ei, "__esModule", { value: !0 });
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
      const { gen: o, data: r, schemaCode: s, it: a } = i, c = a.opts.multipleOfPrecision, l = o.let("res"), p = c ? (0, e._)`Math.abs(Math.round(${l}) - ${l}) > 1e-${c}` : (0, e._)`${l} !== parseInt(${l})`;
      i.fail$data((0, e._)`(${s} === 0 || (${l} = ${r}/${s}, ${p}))`);
    }
  };
  return ei.default = n, ei;
}
var ti = {}, ni = {}, bo;
function Ku() {
  if (bo) return ni;
  bo = 1, Object.defineProperty(ni, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let i = 0, o = 0, r;
    for (; o < n; )
      i++, r = t.charCodeAt(o++), r >= 55296 && r <= 56319 && o < n && (r = t.charCodeAt(o), (r & 64512) === 56320 && o++);
    return i;
  }
  return ni.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', ni;
}
var wo;
function Qu() {
  if (wo) return ti;
  wo = 1, Object.defineProperty(ti, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Ku(), o = {
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
      const { keyword: s, data: a, schemaCode: c, it: l } = r, p = s === "maxLength" ? e.operators.GT : e.operators.LT, y = l.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(r.gen, n.default)}(${a})`;
      r.fail$data((0, e._)`${y} ${p} ${c}`);
    }
  };
  return ti.default = o, ti;
}
var ii = {}, xo;
function Wu() {
  if (xo) return ii;
  xo = 1, Object.defineProperty(ii, "__esModule", { value: !0 });
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
      const { gen: s, data: a, $data: c, schema: l, schemaCode: p, it: y } = r, f = y.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: h } = y.opts.code, v = h.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, h), x = s.let("valid");
        s.try(() => s.assign(x, (0, n._)`${v}(${p}, ${f}).test(${a})`), () => s.assign(x, !1)), r.fail$data((0, n._)`!${x}`);
      } else {
        const h = (0, e.usePattern)(r, l);
        r.fail$data((0, n._)`!${h}.test(${a})`);
      }
    }
  };
  return ii.default = o, ii;
}
var ri = {}, So;
function Xu() {
  if (So) return ri;
  So = 1, Object.defineProperty(ri, "__esModule", { value: !0 });
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
  return ri.default = n, ri;
}
var si = {}, Io;
function Yu() {
  if (Io) return si;
  Io = 1, Object.defineProperty(si, "__esModule", { value: !0 });
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
      const { gen: s, schema: a, schemaCode: c, data: l, $data: p, it: y } = r, { opts: f } = y;
      if (!p && a.length === 0)
        return;
      const h = a.length >= f.loopRequired;
      if (y.allErrors ? v() : x(), f.strictRequired) {
        const g = r.parentSchema.properties, { definedProperties: m } = r.it;
        for (const d of a)
          if (g?.[d] === void 0 && !m.has(d)) {
            const u = y.schemaEnv.baseId + y.errSchemaPath, w = `required property "${d}" is not defined at "${u}" (strictRequired)`;
            (0, n.checkStrictMode)(y, w, y.opts.strictRequired);
          }
      }
      function v() {
        if (h || p)
          r.block$data(t.nil, b);
        else
          for (const g of a)
            (0, e.checkReportMissingProp)(r, g);
      }
      function x() {
        const g = s.let("missing");
        if (h || p) {
          const m = s.let("valid", !0);
          r.block$data(m, () => I(g, m)), r.ok(m);
        } else
          s.if((0, e.checkMissingProp)(r, a, g)), (0, e.reportMissingProp)(r, g), s.else();
      }
      function b() {
        s.forOf("prop", c, (g) => {
          r.setParams({ missingProperty: g }), s.if((0, e.noPropertyInData)(s, l, g, f.ownProperties), () => r.error());
        });
      }
      function I(g, m) {
        r.setParams({ missingProperty: g }), s.forOf(g, c, () => {
          s.assign(m, (0, e.propertyInData)(s, l, g, f.ownProperties)), s.if((0, t.not)(m), () => {
            r.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return si.default = o, si;
}
var ai = {}, Ao;
function ep() {
  if (Ao) return ai;
  Ao = 1, Object.defineProperty(ai, "__esModule", { value: !0 });
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
  return ai.default = n, ai;
}
var oi = {}, ci = {}, qo;
function aa() {
  if (qo) return ci;
  qo = 1, Object.defineProperty(ci, "__esModule", { value: !0 });
  const e = kd();
  return e.code = 'require("ajv/dist/runtime/equal").default', ci.default = e, ci;
}
var Ro;
function tp() {
  if (Ro) return oi;
  Ro = 1, Object.defineProperty(oi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wi(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ aa(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: c, $data: l, schema: p, parentSchema: y, schemaCode: f, it: h } = s;
      if (!l && !p)
        return;
      const v = a.let("valid"), x = y.items ? (0, e.getSchemaTypes)(y.items) : [];
      s.block$data(v, b, (0, t._)`${f} === false`), s.ok(v);
      function b() {
        const d = a.let("i", (0, t._)`${c}.length`), u = a.let("j");
        s.setParams({ i: d, j: u }), a.assign(v, !0), a.if((0, t._)`${d} > 1`, () => (I() ? g : m)(d, u));
      }
      function I() {
        return x.length > 0 && !x.some((d) => d === "object" || d === "array");
      }
      function g(d, u) {
        const w = a.name("item"), S = (0, e.checkDataTypes)(x, w, h.opts.strictNumbers, e.DataType.Wrong), A = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${d}--;`, () => {
          a.let(w, (0, t._)`${c}[${d}]`), a.if(S, (0, t._)`continue`), x.length > 1 && a.if((0, t._)`typeof ${w} == "string"`, (0, t._)`${w} += "_"`), a.if((0, t._)`typeof ${A}[${w}] == "number"`, () => {
            a.assign(u, (0, t._)`${A}[${w}]`), s.error(), a.assign(v, !1).break();
          }).code((0, t._)`${A}[${w}] = ${d}`);
        });
      }
      function m(d, u) {
        const w = (0, n.useFunc)(a, i.default), S = a.name("outer");
        a.label(S).for((0, t._)`;${d}--;`, () => a.for((0, t._)`${u} = ${d}; ${u}--;`, () => a.if((0, t._)`${w}(${c}[${d}], ${c}[${u}])`, () => {
          s.error(), a.assign(v, !1).break(S);
        })));
      }
    }
  };
  return oi.default = r, oi;
}
var di = {}, jo;
function np() {
  if (jo) return di;
  jo = 1, Object.defineProperty(di, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ aa(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: c, schemaCode: l, schema: p } = r;
      c || p && typeof p == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${l})`) : r.fail((0, e._)`${p} !== ${a}`);
    }
  };
  return di.default = o, di;
}
var li = {}, $o;
function ip() {
  if ($o) return li;
  $o = 1, Object.defineProperty(li, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ aa(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: c, schema: l, schemaCode: p, it: y } = r;
      if (!c && l.length === 0)
        throw new Error("enum must have non-empty array");
      const f = l.length >= y.opts.loopEnum;
      let h;
      const v = () => h ?? (h = (0, t.useFunc)(s, n.default));
      let x;
      if (f || c)
        x = s.let("valid"), r.block$data(x, b);
      else {
        if (!Array.isArray(l))
          throw new Error("ajv implementation error");
        const g = s.const("vSchema", p);
        x = (0, e.or)(...l.map((m, d) => I(g, d)));
      }
      r.pass(x);
      function b() {
        s.assign(x, !1), s.forOf("v", p, (g) => s.if((0, e._)`${v()}(${a}, ${g})`, () => s.assign(x, !0).break()));
      }
      function I(g, m) {
        const d = l[m];
        return typeof d == "object" && d !== null ? (0, e._)`${v()}(${a}, ${g}[${m}])` : (0, e._)`${a} === ${d}`;
      }
    }
  };
  return li.default = o, li;
}
var _o;
function Nd() {
  if (_o) return Xn;
  _o = 1, Object.defineProperty(Xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hu(), t = /* @__PURE__ */ Ju(), n = /* @__PURE__ */ Qu(), i = /* @__PURE__ */ Wu(), o = /* @__PURE__ */ Xu(), r = /* @__PURE__ */ Yu(), s = /* @__PURE__ */ ep(), a = /* @__PURE__ */ tp(), c = /* @__PURE__ */ np(), l = /* @__PURE__ */ ip(), p = [
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
    l.default
  ];
  return Xn.default = p, Xn;
}
var ui = {}, Wt = {}, Po;
function Dd() {
  if (Po) return Wt;
  Po = 1, Object.defineProperty(Wt, "__esModule", { value: !0 }), Wt.validateAdditionalItems = void 0;
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
    const { gen: a, schema: c, data: l, keyword: p, it: y } = r;
    y.items = !0;
    const f = a.const("len", (0, e._)`${l}.length`);
    if (c === !1)
      r.setParams({ len: s.length }), r.pass((0, e._)`${f} <= ${s.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(y, c)) {
      const v = a.var("valid", (0, e._)`${f} <= ${s.length}`);
      a.if((0, e.not)(v), () => h(v)), r.ok(v);
    }
    function h(v) {
      a.forRange("i", s.length, f, (x) => {
        r.subschema({ keyword: p, dataProp: x, dataPropType: t.Type.Num }, v), y.allErrors || a.if((0, e.not)(v), () => a.break());
      });
    }
  }
  return Wt.validateAdditionalItems = o, Wt.default = i, Wt;
}
var pi = {}, Xt = {}, To;
function zd() {
  if (To) return Xt;
  To = 1, Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.validateTuple = void 0;
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
    const { gen: c, parentSchema: l, data: p, keyword: y, it: f } = r;
    x(l), f.opts.unevaluated && a.length && f.items !== !0 && (f.items = t.mergeEvaluated.items(c, a.length, f.items));
    const h = c.name("valid"), v = c.const("len", (0, e._)`${p}.length`);
    a.forEach((b, I) => {
      (0, t.alwaysValidSchema)(f, b) || (c.if((0, e._)`${v} > ${I}`, () => r.subschema({
        keyword: y,
        schemaProp: I,
        dataProp: I
      }, h)), r.ok(h));
    });
    function x(b) {
      const { opts: I, errSchemaPath: g } = f, m = a.length, d = m === b.minItems && (m === b.maxItems || b[s] === !1);
      if (I.strictTuples && !d) {
        const u = `"${y}" is ${m}-tuple, but minItems or maxItems/${s} are not specified or different at path "${g}"`;
        (0, t.checkStrictMode)(f, u, I.strictTuples);
      }
    }
  }
  return Xt.validateTuple = o, Xt.default = i, Xt;
}
var Co;
function rp() {
  if (Co) return pi;
  Co = 1, Object.defineProperty(pi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zd(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return pi.default = t, pi;
}
var fi = {}, Eo;
function sp() {
  if (Eo) return fi;
  Eo = 1, Object.defineProperty(fi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ tt(), i = /* @__PURE__ */ Dd(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: c, it: l } = s, { prefixItems: p } = c;
      l.items = !0, !(0, t.alwaysValidSchema)(l, a) && (p ? (0, i.validateAdditionalItems)(s, p) : s.ok((0, n.validateArray)(s)));
    }
  };
  return fi.default = r, fi;
}
var hi = {}, ko;
function ap() {
  if (ko) return hi;
  ko = 1, Object.defineProperty(hi, "__esModule", { value: !0 });
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
      const { gen: r, schema: s, parentSchema: a, data: c, it: l } = o;
      let p, y;
      const { minContains: f, maxContains: h } = a;
      l.opts.next ? (p = f === void 0 ? 1 : f, y = h) : p = 1;
      const v = r.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: p, max: y }), y === void 0 && p === 0) {
        (0, t.checkStrictMode)(l, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (y !== void 0 && p > y) {
        (0, t.checkStrictMode)(l, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(l, s)) {
        let m = (0, e._)`${v} >= ${p}`;
        y !== void 0 && (m = (0, e._)`${m} && ${v} <= ${y}`), o.pass(m);
        return;
      }
      l.items = !0;
      const x = r.name("valid");
      y === void 0 && p === 1 ? I(x, () => r.if(x, () => r.break())) : p === 0 ? (r.let(x, !0), y !== void 0 && r.if((0, e._)`${c}.length > 0`, b)) : (r.let(x, !1), b()), o.result(x, () => o.reset());
      function b() {
        const m = r.name("_valid"), d = r.let("count", 0);
        I(m, () => r.if(m, () => g(d)));
      }
      function I(m, d) {
        r.forRange("i", 0, v, (u) => {
          o.subschema({
            keyword: "contains",
            dataProp: u,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, m), d();
        });
      }
      function g(m) {
        r.code((0, e._)`${m}++`), y === void 0 ? r.if((0, e._)`${m} >= ${p}`, () => r.assign(x, !0).break()) : (r.if((0, e._)`${m} > ${y}`, () => r.assign(x, !1).break()), p === 1 ? r.assign(x, !0) : r.if((0, e._)`${m} >= ${p}`, () => r.assign(x, !0)));
      }
    }
  };
  return hi.default = i, hi;
}
var Lr = {}, Mo;
function oa() {
  return Mo || (Mo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ tt();
    e.error = {
      message: ({ params: { property: c, depsCount: l, deps: p } }) => {
        const y = l === 1 ? "property" : "properties";
        return (0, t.str)`must have ${y} ${p} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: l, deps: p, missingProperty: y } }) => (0, t._)`{property: ${c},
    missingProperty: ${y},
    depsCount: ${l},
    deps: ${p}}`
      // TODO change to reference
    };
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [l, p] = r(c);
        s(c, l), a(c, p);
      }
    };
    function r({ schema: c }) {
      const l = {}, p = {};
      for (const y in c) {
        if (y === "__proto__")
          continue;
        const f = Array.isArray(c[y]) ? l : p;
        f[y] = c[y];
      }
      return [l, p];
    }
    function s(c, l = c.schema) {
      const { gen: p, data: y, it: f } = c;
      if (Object.keys(l).length === 0)
        return;
      const h = p.let("missing");
      for (const v in l) {
        const x = l[v];
        if (x.length === 0)
          continue;
        const b = (0, i.propertyInData)(p, y, v, f.opts.ownProperties);
        c.setParams({
          property: v,
          depsCount: x.length,
          deps: x.join(", ")
        }), f.allErrors ? p.if(b, () => {
          for (const I of x)
            (0, i.checkReportMissingProp)(c, I);
        }) : (p.if((0, t._)`${b} && (${(0, i.checkMissingProp)(c, x, h)})`), (0, i.reportMissingProp)(c, h), p.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(c, l = c.schema) {
      const { gen: p, data: y, keyword: f, it: h } = c, v = p.name("valid");
      for (const x in l)
        (0, n.alwaysValidSchema)(h, l[x]) || (p.if(
          (0, i.propertyInData)(p, y, x, h.opts.ownProperties),
          () => {
            const b = c.subschema({ keyword: f, schemaProp: x }, v);
            c.mergeValidEvaluated(b, v);
          },
          () => p.var(v, !0)
          // TODO var
        ), c.ok(v));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(Lr)), Lr;
}
var mi = {}, Lo;
function op() {
  if (Lo) return mi;
  Lo = 1, Object.defineProperty(mi, "__esModule", { value: !0 });
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
      const l = r.name("valid");
      r.forIn("key", a, (p) => {
        o.setParams({ propertyName: p }), o.subschema({
          keyword: "propertyNames",
          data: p,
          dataTypes: ["string"],
          propertyName: p,
          compositeRule: !0
        }, l), r.if((0, e.not)(l), () => {
          o.error(!0), c.allErrors || r.break();
        });
      }), o.ok(l);
    }
  };
  return mi.default = i, mi;
}
var yi = {}, Oo;
function Vd() {
  if (Oo) return yi;
  Oo = 1, Object.defineProperty(yi, "__esModule", { value: !0 });
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
      const { gen: a, schema: c, parentSchema: l, data: p, errsCount: y, it: f } = s;
      if (!y)
        throw new Error("ajv implementation error");
      const { allErrors: h, opts: v } = f;
      if (f.props = !0, v.removeAdditional !== "all" && (0, i.alwaysValidSchema)(f, c))
        return;
      const x = (0, e.allSchemaProperties)(l.properties), b = (0, e.allSchemaProperties)(l.patternProperties);
      I(), s.ok((0, t._)`${y} === ${n.default.errors}`);
      function I() {
        a.forIn("key", p, (w) => {
          !x.length && !b.length ? d(w) : a.if(g(w), () => d(w));
        });
      }
      function g(w) {
        let S;
        if (x.length > 8) {
          const A = (0, i.schemaRefOrVal)(f, l.properties, "properties");
          S = (0, e.isOwnProperty)(a, A, w);
        } else x.length ? S = (0, t.or)(...x.map((A) => (0, t._)`${w} === ${A}`)) : S = t.nil;
        return b.length && (S = (0, t.or)(S, ...b.map((A) => (0, t._)`${(0, e.usePattern)(s, A)}.test(${w})`))), (0, t.not)(S);
      }
      function m(w) {
        a.code((0, t._)`delete ${p}[${w}]`);
      }
      function d(w) {
        if (v.removeAdditional === "all" || v.removeAdditional && c === !1) {
          m(w);
          return;
        }
        if (c === !1) {
          s.setParams({ additionalProperty: w }), s.error(), h || a.break();
          return;
        }
        if (typeof c == "object" && !(0, i.alwaysValidSchema)(f, c)) {
          const S = a.name("valid");
          v.removeAdditional === "failing" ? (u(w, S, !1), a.if((0, t.not)(S), () => {
            s.reset(), m(w);
          })) : (u(w, S), h || a.if((0, t.not)(S), () => a.break()));
        }
      }
      function u(w, S, A) {
        const j = {
          keyword: "additionalProperties",
          dataProp: w,
          dataPropType: i.Type.Str
        };
        A === !1 && Object.assign(j, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(j, S);
      }
    }
  };
  return yi.default = r, yi;
}
var gi = {}, No;
function cp() {
  if (No) return gi;
  No = 1, Object.defineProperty(gi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ kn(), t = /* @__PURE__ */ tt(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ Vd(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: a, parentSchema: c, data: l, it: p } = r;
      p.opts.removeAdditional === "all" && c.additionalProperties === void 0 && i.default.code(new e.KeywordCxt(p, i.default, "additionalProperties"));
      const y = (0, t.allSchemaProperties)(a);
      for (const b of y)
        p.definedProperties.add(b);
      p.opts.unevaluated && y.length && p.props !== !0 && (p.props = n.mergeEvaluated.props(s, (0, n.toHash)(y), p.props));
      const f = y.filter((b) => !(0, n.alwaysValidSchema)(p, a[b]));
      if (f.length === 0)
        return;
      const h = s.name("valid");
      for (const b of f)
        v(b) ? x(b) : (s.if((0, t.propertyInData)(s, l, b, p.opts.ownProperties)), x(b), p.allErrors || s.else().var(h, !0), s.endIf()), r.it.definedProperties.add(b), r.ok(h);
      function v(b) {
        return p.opts.useDefaults && !p.compositeRule && a[b].default !== void 0;
      }
      function x(b) {
        r.subschema({
          keyword: "properties",
          schemaProp: b,
          dataProp: b
        }, h);
      }
    }
  };
  return gi.default = o, gi;
}
var vi = {}, Do;
function dp() {
  if (Do) return vi;
  Do = 1, Object.defineProperty(vi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tt(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: a, data: c, parentSchema: l, it: p } = r, { opts: y } = p, f = (0, e.allSchemaProperties)(a), h = f.filter((d) => (0, n.alwaysValidSchema)(p, a[d]));
      if (f.length === 0 || h.length === f.length && (!p.opts.unevaluated || p.props === !0))
        return;
      const v = y.strictSchema && !y.allowMatchingProperties && l.properties, x = s.name("valid");
      p.props !== !0 && !(p.props instanceof t.Name) && (p.props = (0, i.evaluatedPropsToName)(s, p.props));
      const { props: b } = p;
      I();
      function I() {
        for (const d of f)
          v && g(d), p.allErrors ? m(d) : (s.var(x, !0), m(d), s.if(x));
      }
      function g(d) {
        for (const u in v)
          new RegExp(d).test(u) && (0, n.checkStrictMode)(p, `property ${u} matches pattern ${d} (use allowMatchingProperties)`);
      }
      function m(d) {
        s.forIn("key", c, (u) => {
          s.if((0, t._)`${(0, e.usePattern)(r, d)}.test(${u})`, () => {
            const w = h.includes(d);
            w || r.subschema({
              keyword: "patternProperties",
              schemaProp: d,
              dataProp: u,
              dataPropType: i.Type.Str
            }, x), p.opts.unevaluated && b !== !0 ? s.assign((0, t._)`${b}[${u}]`, !0) : !w && !p.allErrors && s.if((0, t.not)(x), () => s.break());
          });
        });
      }
    }
  };
  return vi.default = o, vi;
}
var bi = {}, zo;
function lp() {
  if (zo) return bi;
  zo = 1, Object.defineProperty(bi, "__esModule", { value: !0 });
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
  return bi.default = t, bi;
}
var wi = {}, Vo;
function up() {
  if (Vo) return wi;
  Vo = 1, Object.defineProperty(wi, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ tt()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return wi.default = t, wi;
}
var xi = {}, Uo;
function pp() {
  if (Uo) return xi;
  Uo = 1, Object.defineProperty(xi, "__esModule", { value: !0 });
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
      const l = s, p = r.let("valid", !1), y = r.let("passing", null), f = r.name("_valid");
      o.setParams({ passing: y }), r.block(h), o.result(p, () => o.reset(), () => o.error(!0));
      function h() {
        l.forEach((v, x) => {
          let b;
          (0, t.alwaysValidSchema)(c, v) ? r.var(f, !0) : b = o.subschema({
            keyword: "oneOf",
            schemaProp: x,
            compositeRule: !0
          }, f), x > 0 && r.if((0, e._)`${f} && ${p}`).assign(p, !1).assign(y, (0, e._)`[${y}, ${x}]`).else(), r.if(f, () => {
            r.assign(p, !0), r.assign(y, x), b && o.mergeEvaluated(b, e.Name);
          });
        });
      }
    }
  };
  return xi.default = i, xi;
}
var Si = {}, Go;
function fp() {
  if (Go) return Si;
  Go = 1, Object.defineProperty(Si, "__esModule", { value: !0 });
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
        const l = n.subschema({ keyword: "allOf", schemaProp: c }, s);
        n.ok(s), n.mergeEvaluated(l);
      });
    }
  };
  return Si.default = t, Si;
}
var Ii = {}, Fo;
function hp() {
  if (Fo) return Ii;
  Fo = 1, Object.defineProperty(Ii, "__esModule", { value: !0 });
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
      const l = o(c, "then"), p = o(c, "else");
      if (!l && !p)
        return;
      const y = s.let("valid", !0), f = s.name("_valid");
      if (h(), r.reset(), l && p) {
        const x = s.let("ifClause");
        r.setParams({ ifClause: x }), s.if(f, v("then", x), v("else", x));
      } else l ? s.if(f, v("then")) : s.if((0, e.not)(f), v("else"));
      r.pass(y, () => r.error(!0));
      function h() {
        const x = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, f);
        r.mergeEvaluated(x);
      }
      function v(x, b) {
        return () => {
          const I = r.subschema({ keyword: x }, f);
          s.assign(y, f), r.mergeValidEvaluated(I, y), b ? s.assign(b, (0, e._)`${x}`) : r.setParams({ ifClause: x });
        };
      }
    }
  };
  function o(r, s) {
    const a = r.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(r, a);
  }
  return Ii.default = i, Ii;
}
var Ai = {}, Bo;
function mp() {
  if (Bo) return Ai;
  Bo = 1, Object.defineProperty(Ai, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: i, it: o }) {
      i.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return Ai.default = t, Ai;
}
var Zo;
function Ud() {
  if (Zo) return ui;
  Zo = 1, Object.defineProperty(ui, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Dd(), t = /* @__PURE__ */ rp(), n = /* @__PURE__ */ zd(), i = /* @__PURE__ */ sp(), o = /* @__PURE__ */ ap(), r = /* @__PURE__ */ oa(), s = /* @__PURE__ */ op(), a = /* @__PURE__ */ Vd(), c = /* @__PURE__ */ cp(), l = /* @__PURE__ */ dp(), p = /* @__PURE__ */ lp(), y = /* @__PURE__ */ up(), f = /* @__PURE__ */ pp(), h = /* @__PURE__ */ fp(), v = /* @__PURE__ */ hp(), x = /* @__PURE__ */ mp();
  function b(I = !1) {
    const g = [
      // any
      p.default,
      y.default,
      f.default,
      h.default,
      v.default,
      x.default,
      // object
      s.default,
      a.default,
      r.default,
      c.default,
      l.default
    ];
    return I ? g.push(t.default, i.default) : g.push(e.default, n.default), g.push(o.default), g;
  }
  return ui.default = b, ui;
}
var qi = {}, Yt = {}, Ho;
function Gd() {
  if (Ho) return Yt;
  Ho = 1, Object.defineProperty(Yt, "__esModule", { value: !0 }), Yt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ et(), n = /* @__PURE__ */ or(), i = /* @__PURE__ */ sa(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => r(a, a.schema)
  };
  function r(a, c) {
    const { gen: l, it: p } = a;
    p.schemaEnv.root.dynamicAnchors[c] = !0;
    const y = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, f = p.errSchemaPath === "#" ? p.validateName : s(a);
    l.if((0, e._)`!${y}`, () => l.assign(y, f));
  }
  Yt.dynamicAnchor = r;
  function s(a) {
    const { schemaEnv: c, schema: l, self: p } = a.it, { root: y, baseId: f, localRefs: h, meta: v } = c.root, { schemaId: x } = p.opts, b = new n.SchemaEnv({ schema: l, schemaId: x, root: y, baseId: f, localRefs: h, meta: v });
    return n.compileSchema.call(p, b), (0, i.getValidate)(a, b);
  }
  return Yt.default = o, Yt;
}
var en = {}, Jo;
function Fd() {
  if (Jo) return en;
  Jo = 1, Object.defineProperty(en, "__esModule", { value: !0 }), en.dynamicRef = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ et(), n = /* @__PURE__ */ sa(), i = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => o(r, r.schema)
  };
  function o(r, s) {
    const { gen: a, keyword: c, it: l } = r;
    if (s[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const p = s.slice(1);
    if (l.allErrors)
      y();
    else {
      const h = a.let("valid", !1);
      y(h), r.ok(h);
    }
    function y(h) {
      if (l.schemaEnv.root.dynamicAnchors[p]) {
        const v = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(p)}`);
        a.if(v, f(v, h), f(l.validateName, h));
      } else
        f(l.validateName, h)();
    }
    function f(h, v) {
      return v ? () => a.block(() => {
        (0, n.callRef)(r, h), a.let(v, !0);
      }) : () => (0, n.callRef)(r, h);
    }
  }
  return en.dynamicRef = o, en.default = i, en;
}
var Ri = {}, Ko;
function yp() {
  if (Ko) return Ri;
  Ko = 1, Object.defineProperty(Ri, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gd(), t = /* @__PURE__ */ ie(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(i) {
      i.schema ? (0, e.dynamicAnchor)(i, "") : (0, t.checkStrictMode)(i.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Ri.default = n, Ri;
}
var ji = {}, Qo;
function gp() {
  if (Qo) return ji;
  Qo = 1, Object.defineProperty(ji, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fd(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return ji.default = t, ji;
}
var Wo;
function vp() {
  if (Wo) return qi;
  Wo = 1, Object.defineProperty(qi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gd(), t = /* @__PURE__ */ Fd(), n = /* @__PURE__ */ yp(), i = /* @__PURE__ */ gp(), o = [e.default, t.default, n.default, i.default];
  return qi.default = o, qi;
}
var $i = {}, _i = {}, Xo;
function bp() {
  if (Xo) return _i;
  Xo = 1, Object.defineProperty(_i, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oa(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return _i.default = t, _i;
}
var Pi = {}, Yo;
function wp() {
  if (Yo) return Pi;
  Yo = 1, Object.defineProperty(Pi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oa(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return Pi.default = t, Pi;
}
var Ti = {}, ec;
function xp() {
  if (ec) return Ti;
  ec = 1, Object.defineProperty(Ti, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: i, it: o }) {
      i.contains === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "contains" is ignored`);
    }
  };
  return Ti.default = t, Ti;
}
var tc;
function Sp() {
  if (tc) return $i;
  tc = 1, Object.defineProperty($i, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ bp(), t = /* @__PURE__ */ wp(), n = /* @__PURE__ */ xp(), i = [e.default, t.default, n.default];
  return $i.default = i, $i;
}
var Ci = {}, Ei = {}, nc;
function Ip() {
  if (nc) return Ei;
  nc = 1, Object.defineProperty(Ei, "__esModule", { value: !0 });
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
      const { gen: s, schema: a, data: c, errsCount: l, it: p } = r;
      if (!l)
        throw new Error("ajv implementation error");
      const { allErrors: y, props: f } = p;
      f instanceof e.Name ? s.if((0, e._)`${f} !== true`, () => s.forIn("key", c, (b) => s.if(v(f, b), () => h(b)))) : f !== !0 && s.forIn("key", c, (b) => f === void 0 ? h(b) : s.if(x(f, b), () => h(b))), p.props = !0, r.ok((0, e._)`${l} === ${n.default.errors}`);
      function h(b) {
        if (a === !1) {
          r.setParams({ unevaluatedProperty: b }), r.error(), y || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(p, a)) {
          const I = s.name("valid");
          r.subschema({
            keyword: "unevaluatedProperties",
            dataProp: b,
            dataPropType: t.Type.Str
          }, I), y || s.if((0, e.not)(I), () => s.break());
        }
      }
      function v(b, I) {
        return (0, e._)`!${b} || !${b}[${I}]`;
      }
      function x(b, I) {
        const g = [];
        for (const m in b)
          b[m] === !0 && g.push((0, e._)`${I} !== ${m}`);
        return (0, e.and)(...g);
      }
    }
  };
  return Ei.default = o, Ei;
}
var ki = {}, ic;
function Ap() {
  if (ic) return ki;
  ic = 1, Object.defineProperty(ki, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), i = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { gen: r, schema: s, data: a, it: c } = o, l = c.items || 0;
      if (l === !0)
        return;
      const p = r.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        o.setParams({ len: l }), o.fail((0, e._)`${p} > ${l}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(c, s)) {
        const f = r.var("valid", (0, e._)`${p} <= ${l}`);
        r.if((0, e.not)(f), () => y(f, l)), o.ok(f);
      }
      c.items = !0;
      function y(f, h) {
        r.forRange("i", h, p, (v) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: v, dataPropType: t.Type.Num }, f), c.allErrors || r.if((0, e.not)(f), () => r.break());
        });
      }
    }
  };
  return ki.default = i, ki;
}
var rc;
function qp() {
  if (rc) return Ci;
  rc = 1, Object.defineProperty(Ci, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ip(), t = /* @__PURE__ */ Ap(), n = [e.default, t.default];
  return Ci.default = n, Ci;
}
var Mi = {}, Li = {}, sc;
function Rp() {
  if (sc) return Li;
  sc = 1, Object.defineProperty(Li, "__esModule", { value: !0 });
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
      const { gen: r, data: s, $data: a, schema: c, schemaCode: l, it: p } = i, { opts: y, errSchemaPath: f, schemaEnv: h, self: v } = p;
      if (!y.validateFormats)
        return;
      a ? x() : b();
      function x() {
        const I = r.scopeValue("formats", {
          ref: v.formats,
          code: y.code.formats
        }), g = r.const("fDef", (0, e._)`${I}[${l}]`), m = r.let("fType"), d = r.let("format");
        r.if((0, e._)`typeof ${g} == "object" && !(${g} instanceof RegExp)`, () => r.assign(m, (0, e._)`${g}.type || "string"`).assign(d, (0, e._)`${g}.validate`), () => r.assign(m, (0, e._)`"string"`).assign(d, g)), i.fail$data((0, e.or)(u(), w()));
        function u() {
          return y.strictSchema === !1 ? e.nil : (0, e._)`${l} && !${d}`;
        }
        function w() {
          const S = h.$async ? (0, e._)`(${g}.async ? await ${d}(${s}) : ${d}(${s}))` : (0, e._)`${d}(${s})`, A = (0, e._)`(typeof ${d} == "function" ? ${S} : ${d}.test(${s}))`;
          return (0, e._)`${d} && ${d} !== true && ${m} === ${o} && !${A}`;
        }
      }
      function b() {
        const I = v.formats[c];
        if (!I) {
          u();
          return;
        }
        if (I === !0)
          return;
        const [g, m, d] = w(I);
        g === o && i.pass(S());
        function u() {
          if (y.strictSchema === !1) {
            v.logger.warn(A());
            return;
          }
          throw new Error(A());
          function A() {
            return `unknown format "${c}" ignored in schema at path "${f}"`;
          }
        }
        function w(A) {
          const j = A instanceof RegExp ? (0, e.regexpCode)(A) : y.code.formats ? (0, e._)`${y.code.formats}${(0, e.getProperty)(c)}` : void 0, R = r.scopeValue("formats", { key: c, ref: A, code: j });
          return typeof A == "object" && !(A instanceof RegExp) ? [A.type || "string", A.validate, (0, e._)`${R}.validate`] : ["string", A, R];
        }
        function S() {
          if (typeof I == "object" && !(I instanceof RegExp) && I.async) {
            if (!h.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${d}(${s})`;
          }
          return typeof m == "function" ? (0, e._)`${d}(${s})` : (0, e._)`${d}.test(${s})`;
        }
      }
    }
  };
  return Li.default = n, Li;
}
var ac;
function Bd() {
  if (ac) return Mi;
  ac = 1, Object.defineProperty(Mi, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Rp()).default];
  return Mi.default = t, Mi;
}
var zt = {}, oc;
function Zd() {
  return oc || (oc = 1, Object.defineProperty(zt, "__esModule", { value: !0 }), zt.contentVocabulary = zt.metadataVocabulary = void 0, zt.metadataVocabulary = [
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
var cc;
function jp() {
  if (cc) return Kn;
  cc = 1, Object.defineProperty(Kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Od(), t = /* @__PURE__ */ Nd(), n = /* @__PURE__ */ Ud(), i = /* @__PURE__ */ vp(), o = /* @__PURE__ */ Sp(), r = /* @__PURE__ */ qp(), s = /* @__PURE__ */ Bd(), a = /* @__PURE__ */ Zd(), c = [
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
  return Kn.default = c, Kn;
}
var Oi = {}, yn = {}, dc;
function $p() {
  if (dc) return yn;
  dc = 1, Object.defineProperty(yn, "__esModule", { value: !0 }), yn.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (yn.DiscrError = e = {})), yn;
}
var lc;
function Hd() {
  if (lc) return Oi;
  lc = 1, Object.defineProperty(Oi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ $p(), n = /* @__PURE__ */ or(), i = /* @__PURE__ */ Mn(), o = /* @__PURE__ */ ie(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: l } }) => (0, e._)`{error: ${a}, tag: ${l}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: l, schema: p, parentSchema: y, it: f } = a, { oneOf: h } = y;
      if (!f.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const v = p.propertyName;
      if (typeof v != "string")
        throw new Error("discriminator: requires propertyName");
      if (p.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!h)
        throw new Error("discriminator: requires oneOf keyword");
      const x = c.let("valid", !1), b = c.const("tag", (0, e._)`${l}${(0, e.getProperty)(v)}`);
      c.if((0, e._)`typeof ${b} == "string"`, () => I(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: b, tagName: v })), a.ok(x);
      function I() {
        const d = m();
        c.if(!1);
        for (const u in d)
          c.elseIf((0, e._)`${b} === ${u}`), c.assign(x, g(d[u]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: b, tagName: v }), c.endIf();
      }
      function g(d) {
        const u = c.name("valid"), w = a.subschema({ keyword: "oneOf", schemaProp: d }, u);
        return a.mergeEvaluated(w, e.Name), u;
      }
      function m() {
        var d;
        const u = {}, w = A(y);
        let S = !0;
        for (let E = 0; E < h.length; E++) {
          let L = h[E];
          if (L?.$ref && !(0, o.schemaHasRulesButRef)(L, f.self.RULES)) {
            const C = L.$ref;
            if (L = n.resolveRef.call(f.self, f.schemaEnv.root, f.baseId, C), L instanceof n.SchemaEnv && (L = L.schema), L === void 0)
              throw new i.default(f.opts.uriResolver, f.baseId, C);
          }
          const _ = (d = L?.properties) === null || d === void 0 ? void 0 : d[v];
          if (typeof _ != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${v}"`);
          S = S && (w || A(L)), j(_, E);
        }
        if (!S)
          throw new Error(`discriminator: "${v}" must be required`);
        return u;
        function A({ required: E }) {
          return Array.isArray(E) && E.includes(v);
        }
        function j(E, L) {
          if (E.const)
            R(E.const, L);
          else if (E.enum)
            for (const _ of E.enum)
              R(_, L);
          else
            throw new Error(`discriminator: "properties/${v}" must have "const" or "enum"`);
        }
        function R(E, L) {
          if (typeof E != "string" || E in u)
            throw new Error(`discriminator: "${v}" values must be unique strings`);
          u[E] = L;
        }
      }
    }
  };
  return Oi.default = s, Oi;
}
var Ni = {};
const _p = "https://json-schema.org/draft/2020-12/schema", Pp = "https://json-schema.org/draft/2020-12/schema", Tp = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Cp = "meta", Ep = "Core and Validation specifications meta-schema", kp = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Mp = ["object", "boolean"], Lp = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Op = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Np = {
  $schema: _p,
  $id: Pp,
  $vocabulary: Tp,
  $dynamicAnchor: Cp,
  title: Ep,
  allOf: kp,
  type: Mp,
  $comment: Lp,
  properties: Op
}, Dp = "https://json-schema.org/draft/2020-12/schema", zp = "https://json-schema.org/draft/2020-12/meta/applicator", Vp = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Up = "meta", Gp = "Applicator vocabulary meta-schema", Fp = ["object", "boolean"], Bp = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Zp = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Hp = {
  $schema: Dp,
  $id: zp,
  $vocabulary: Vp,
  $dynamicAnchor: Up,
  title: Gp,
  type: Fp,
  properties: Bp,
  $defs: Zp
}, Jp = "https://json-schema.org/draft/2020-12/schema", Kp = "https://json-schema.org/draft/2020-12/meta/unevaluated", Qp = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Wp = "meta", Xp = "Unevaluated applicator vocabulary meta-schema", Yp = ["object", "boolean"], ef = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, tf = {
  $schema: Jp,
  $id: Kp,
  $vocabulary: Qp,
  $dynamicAnchor: Wp,
  title: Xp,
  type: Yp,
  properties: ef
}, nf = "https://json-schema.org/draft/2020-12/schema", rf = "https://json-schema.org/draft/2020-12/meta/content", sf = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, af = "meta", of = "Content vocabulary meta-schema", cf = ["object", "boolean"], df = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, lf = {
  $schema: nf,
  $id: rf,
  $vocabulary: sf,
  $dynamicAnchor: af,
  title: of,
  type: cf,
  properties: df
}, uf = "https://json-schema.org/draft/2020-12/schema", pf = "https://json-schema.org/draft/2020-12/meta/core", ff = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, hf = "meta", mf = "Core vocabulary meta-schema", yf = ["object", "boolean"], gf = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, vf = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, bf = {
  $schema: uf,
  $id: pf,
  $vocabulary: ff,
  $dynamicAnchor: hf,
  title: mf,
  type: yf,
  properties: gf,
  $defs: vf
}, wf = "https://json-schema.org/draft/2020-12/schema", xf = "https://json-schema.org/draft/2020-12/meta/format-annotation", Sf = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, If = "meta", Af = "Format vocabulary meta-schema for annotation results", qf = ["object", "boolean"], Rf = { format: { type: "string" } }, jf = {
  $schema: wf,
  $id: xf,
  $vocabulary: Sf,
  $dynamicAnchor: If,
  title: Af,
  type: qf,
  properties: Rf
}, $f = "https://json-schema.org/draft/2020-12/schema", _f = "https://json-schema.org/draft/2020-12/meta/meta-data", Pf = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Tf = "meta", Cf = "Meta-data vocabulary meta-schema", Ef = ["object", "boolean"], kf = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Mf = {
  $schema: $f,
  $id: _f,
  $vocabulary: Pf,
  $dynamicAnchor: Tf,
  title: Cf,
  type: Ef,
  properties: kf
}, Lf = "https://json-schema.org/draft/2020-12/schema", Of = "https://json-schema.org/draft/2020-12/meta/validation", Nf = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Df = "meta", zf = "Validation vocabulary meta-schema", Vf = ["object", "boolean"], Uf = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Gf = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Ff = {
  $schema: Lf,
  $id: Of,
  $vocabulary: Nf,
  $dynamicAnchor: Df,
  title: zf,
  type: Vf,
  properties: Uf,
  $defs: Gf
};
var uc;
function Bf() {
  if (uc) return Ni;
  uc = 1, Object.defineProperty(Ni, "__esModule", { value: !0 });
  const e = Np, t = Hp, n = tf, i = lf, o = bf, r = jf, s = Mf, a = Ff, c = ["/properties"];
  function l(p) {
    return [
      e,
      t,
      n,
      i,
      o,
      y(this, r),
      s,
      y(this, a)
    ].forEach((f) => this.addMetaSchema(f, void 0, !1)), this;
    function y(f, h) {
      return p ? f.$dataMetaSchema(h, c) : h;
    }
  }
  return Ni.default = l, Ni;
}
var pc;
function Zf() {
  return pc || (pc = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Ld(), i = /* @__PURE__ */ jp(), o = /* @__PURE__ */ Hd(), r = /* @__PURE__ */ Bf(), s = "https://json-schema.org/draft/2020-12/schema";
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
        const { $data: h, meta: v } = this.opts;
        v && (r.default.call(this, h), this.refs["http://json-schema.org/schema"] = s);
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
    var l = /* @__PURE__ */ te();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return l._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return l.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return l.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return l.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return l.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return l.CodeGen;
    } });
    var p = /* @__PURE__ */ ar();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return p.default;
    } });
    var y = /* @__PURE__ */ Mn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return y.default;
    } });
  })(Fn, Fn.exports)), Fn.exports;
}
var Hf = /* @__PURE__ */ Zf();
const Jf = /* @__PURE__ */ ra(Hf);
var Di = { exports: {} }, Or = {}, fc;
function Kf() {
  return fc || (fc = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(E, L) {
      return { validate: E, compare: L };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(r, s),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: t(c(!0), l),
      "date-time": t(f(!0), h),
      "iso-time": t(c(), p),
      "iso-date-time": t(f(), v),
      // duration: https://tools.ietf.org/html/rfc3339#appendix-A
      duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri: I,
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
      regex: R,
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
      byte: m,
      // signed 32 bit integer
      int32: { type: "number", validate: w },
      // signed 64 bit integer
      int64: { type: "number", validate: S },
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
      time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, l),
      "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, h),
      "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, p),
      "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, v),
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
      const L = i.exec(E);
      if (!L)
        return !1;
      const _ = +L[1], C = +L[2], D = +L[3];
      return C >= 1 && C <= 12 && D >= 1 && D <= (C === 2 && n(_) ? 29 : o[C]);
    }
    function s(E, L) {
      if (E && L)
        return E > L ? 1 : E < L ? -1 : 0;
    }
    const a = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function c(E) {
      return function(_) {
        const C = a.exec(_);
        if (!C)
          return !1;
        const D = +C[1], P = +C[2], F = +C[3], O = C[4], G = C[5] === "-" ? -1 : 1, k = +(C[6] || 0), M = +(C[7] || 0);
        if (k > 23 || M > 59 || E && !O)
          return !1;
        if (D <= 23 && P <= 59 && F < 60)
          return !0;
        const V = P - M * G, N = D - k * G - (V < 0 ? 1 : 0);
        return (N === 23 || N === -1) && (V === 59 || V === -1) && F < 61;
      };
    }
    function l(E, L) {
      if (!(E && L))
        return;
      const _ = (/* @__PURE__ */ new Date("2020-01-01T" + E)).valueOf(), C = (/* @__PURE__ */ new Date("2020-01-01T" + L)).valueOf();
      if (_ && C)
        return _ - C;
    }
    function p(E, L) {
      if (!(E && L))
        return;
      const _ = a.exec(E), C = a.exec(L);
      if (_ && C)
        return E = _[1] + _[2] + _[3], L = C[1] + C[2] + C[3], E > L ? 1 : E < L ? -1 : 0;
    }
    const y = /t|\s/i;
    function f(E) {
      const L = c(E);
      return function(C) {
        const D = C.split(y);
        return D.length === 2 && r(D[0]) && L(D[1]);
      };
    }
    function h(E, L) {
      if (!(E && L))
        return;
      const _ = new Date(E).valueOf(), C = new Date(L).valueOf();
      if (_ && C)
        return _ - C;
    }
    function v(E, L) {
      if (!(E && L))
        return;
      const [_, C] = E.split(y), [D, P] = L.split(y), F = s(_, D);
      if (F !== void 0)
        return F || l(C, P);
    }
    const x = /\/|:/, b = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function I(E) {
      return x.test(E) && b.test(E);
    }
    const g = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function m(E) {
      return g.lastIndex = 0, g.test(E);
    }
    const d = -2147483648, u = 2 ** 31 - 1;
    function w(E) {
      return Number.isInteger(E) && E <= u && E >= d;
    }
    function S(E) {
      return Number.isInteger(E);
    }
    function A() {
      return !0;
    }
    const j = /[^\\]\\Z/;
    function R(E) {
      if (j.test(E))
        return !1;
      try {
        return new RegExp(E), !0;
      } catch {
        return !1;
      }
    }
  })(Or)), Or;
}
var Nr = {}, zi = { exports: {} }, Vi = {}, hc;
function Qf() {
  if (hc) return Vi;
  hc = 1, Object.defineProperty(Vi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Od(), t = /* @__PURE__ */ Nd(), n = /* @__PURE__ */ Ud(), i = /* @__PURE__ */ Bd(), o = /* @__PURE__ */ Zd(), r = [
    e.default,
    t.default,
    (0, n.default)(),
    i.default,
    o.metadataVocabulary,
    o.contentVocabulary
  ];
  return Vi.default = r, Vi;
}
const Wf = "http://json-schema.org/draft-07/schema#", Xf = "http://json-schema.org/draft-07/schema#", Yf = "Core schema meta-schema", eh = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, th = ["object", "boolean"], nh = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, ih = {
  $schema: Wf,
  $id: Xf,
  title: Yf,
  definitions: eh,
  type: th,
  properties: nh,
  default: !0
};
var mc;
function rh() {
  return mc || (mc = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const n = /* @__PURE__ */ Ld(), i = /* @__PURE__ */ Qf(), o = /* @__PURE__ */ Hd(), r = ih, s = ["/properties"], a = "http://json-schema.org/draft-07/schema";
    class c extends n.default {
      _addVocabularies() {
        super._addVocabularies(), i.default.forEach((v) => this.addVocabulary(v)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta)
          return;
        const v = this.opts.$data ? this.$dataMetaSchema(r, s) : r;
        this.addMetaSchema(v, a, !1), this.refs["http://json-schema.org/schema"] = a;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(a) ? a : void 0);
      }
    }
    t.Ajv = c, e.exports = t = c, e.exports.Ajv = c, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = c;
    var l = /* @__PURE__ */ kn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return l.KeywordCxt;
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
    var y = /* @__PURE__ */ ar();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return y.default;
    } });
    var f = /* @__PURE__ */ Mn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return f.default;
    } });
  })(zi, zi.exports)), zi.exports;
}
var yc;
function sh() {
  return yc || (yc = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = /* @__PURE__ */ rh(), n = /* @__PURE__ */ te(), i = n.operators, o = {
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
        const { gen: c, data: l, schemaCode: p, keyword: y, it: f } = a, { opts: h, self: v } = f;
        if (!h.validateFormats)
          return;
        const x = new t.KeywordCxt(f, v.RULES.all.format.definition, "format");
        x.$data ? b() : I();
        function b() {
          const m = c.scopeValue("formats", {
            ref: v.formats,
            code: h.code.formats
          }), d = c.const("fmt", (0, n._)`${m}[${x.schemaCode}]`);
          a.fail$data((0, n.or)((0, n._)`typeof ${d} != "object"`, (0, n._)`${d} instanceof RegExp`, (0, n._)`typeof ${d}.compare != "function"`, g(d)));
        }
        function I() {
          const m = x.schema, d = v.formats[m];
          if (!d || d === !0)
            return;
          if (typeof d != "object" || d instanceof RegExp || typeof d.compare != "function")
            throw new Error(`"${y}": format "${m}" does not define "compare" function`);
          const u = c.scopeValue("formats", {
            key: m,
            ref: d,
            code: h.code.formats ? (0, n._)`${h.code.formats}${(0, n.getProperty)(m)}` : void 0
          });
          a.fail$data(g(u));
        }
        function g(m) {
          return (0, n._)`${m}.compare(${l}, ${p}) ${o[y].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const s = (a) => (a.addKeyword(e.formatLimitDefinition), a);
    e.default = s;
  })(Nr)), Nr;
}
var gc;
function ah() {
  return gc || (gc = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const n = Kf(), i = sh(), o = /* @__PURE__ */ te(), r = new o.Name("fullFormats"), s = new o.Name("fastFormats"), a = (l, p = { keywords: !0 }) => {
      if (Array.isArray(p))
        return c(l, p, n.fullFormats, r), l;
      const [y, f] = p.mode === "fast" ? [n.fastFormats, s] : [n.fullFormats, r], h = p.formats || n.formatNames;
      return c(l, h, y, f), p.keywords && (0, i.default)(l), l;
    };
    a.get = (l, p = "full") => {
      const f = (p === "fast" ? n.fastFormats : n.fullFormats)[l];
      if (!f)
        throw new Error(`Unknown format "${l}"`);
      return f;
    };
    function c(l, p, y, f) {
      var h, v;
      (h = (v = l.opts.code).formats) !== null && h !== void 0 || (v.formats = (0, o._)`require("ajv-formats/dist/formats").${f}`);
      for (const x of p)
        l.addFormat(x, y[x]);
    }
    e.exports = t = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
  })(Di, Di.exports)), Di.exports;
}
var oh = ah();
const ch = /* @__PURE__ */ ra(oh);
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const dh = {
  p: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,
  n: 0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,
  a: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,
  d: 0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,
  Gx: 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,
  Gy: 0x6666666666666666666666666666666666666666666666666666666666666658n
}, { p: qe, n: Bi, Gx: vc, Gy: bc, a: Dr, d: zr } = dh, lh = 8n, Tt = 32, _n = 64, Ge = (e = "") => {
  throw new Error(e);
}, uh = (e) => typeof e == "bigint", Jd = (e) => typeof e == "string", ph = (e) => e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array", Zt = (e, t) => !ph(e) || typeof t == "number" && t > 0 && e.length !== t ? Ge("Uint8Array expected") : e, cr = (e) => new Uint8Array(e), ca = (e) => Uint8Array.from(e), Kd = (e, t) => e.toString(16).padStart(t, "0"), da = (e) => Array.from(Zt(e)).map((t) => Kd(t, 2)).join(""), vt = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 }, wc = (e) => {
  if (e >= vt._0 && e <= vt._9)
    return e - vt._0;
  if (e >= vt.A && e <= vt.F)
    return e - (vt.A - 10);
  if (e >= vt.a && e <= vt.f)
    return e - (vt.a - 10);
}, la = (e) => {
  const t = "hex invalid";
  if (!Jd(e))
    return Ge(t);
  const n = e.length, i = n / 2;
  if (n % 2)
    return Ge(t);
  const o = cr(i);
  for (let r = 0, s = 0; r < i; r++, s += 2) {
    const a = wc(e.charCodeAt(s)), c = wc(e.charCodeAt(s + 1));
    if (a === void 0 || c === void 0)
      return Ge(t);
    o[r] = a * 16 + c;
  }
  return o;
}, rn = (e, t) => Zt(Jd(e) ? la(e) : ca(Zt(e)), t), Qd = () => globalThis?.crypto, fh = () => Qd()?.subtle ?? Ge("crypto.subtle must be defined"), Pn = (...e) => {
  const t = cr(e.reduce((i, o) => i + Zt(o).length, 0));
  let n = 0;
  return e.forEach((i) => {
    t.set(i, n), n += i.length;
  }), t;
}, hh = (e = Tt) => Qd().getRandomValues(cr(e)), Xi = BigInt, Ut = (e, t, n, i = "bad number: out of range") => uh(e) && t <= e && e < n ? e : Ge(i), Y = (e, t = qe) => {
  const n = e % t;
  return n >= 0n ? n : t + n;
}, Wd = (e) => Y(e, Bi), Xd = (e, t) => {
  (e === 0n || t <= 0n) && Ge("no inverse n=" + e + " mod=" + t);
  let n = Y(e, t), i = t, o = 0n, r = 1n;
  for (; n !== 0n; ) {
    const s = i / n, a = i % n, c = o - r * s;
    i = n, n = a, o = r, r = c;
  }
  return i === 1n ? Y(o, t) : Ge("no inverse");
}, xc = (e) => e instanceof xt ? e : Ge("Point expected"), Ls = 2n ** 256n, ot = class ot {
  constructor(t, n, i, o) {
    ft(this, "ex");
    ft(this, "ey");
    ft(this, "ez");
    ft(this, "et");
    const r = Ls;
    this.ex = Ut(t, 0n, r), this.ey = Ut(n, 0n, r), this.ez = Ut(i, 1n, r), this.et = Ut(o, 0n, r), Object.freeze(this);
  }
  static fromAffine(t) {
    return new ot(t.x, t.y, 1n, Y(t.x * t.y));
  }
  /** RFC8032 5.1.3: Uint8Array to Point. */
  static fromBytes(t, n = !1) {
    const i = zr, o = ca(Zt(t, Tt)), r = t[31];
    o[31] = r & -129;
    const s = ua(o);
    Ut(s, 0n, n ? Ls : qe);
    const c = Y(s * s), l = Y(c - 1n), p = Y(i * c + 1n);
    let { isValid: y, value: f } = yh(l, p);
    y || Ge("bad point: y not sqrt");
    const h = (f & 1n) === 1n, v = (r & 128) !== 0;
    return !n && f === 0n && v && Ge("bad point: x==0, isLastByteOdd"), v !== h && (f = Y(-f)), new ot(f, s, 1n, Y(f * s));
  }
  /** Checks if the point is valid and on-curve. */
  assertValidity() {
    const t = Dr, n = zr, i = this;
    if (i.is0())
      throw new Error("bad point: ZERO");
    const { ex: o, ey: r, ez: s, et: a } = i, c = Y(o * o), l = Y(r * r), p = Y(s * s), y = Y(p * p), f = Y(c * t), h = Y(p * Y(f + l)), v = Y(y + Y(n * Y(c * l)));
    if (h !== v)
      throw new Error("bad point: equation left != right (1)");
    const x = Y(o * r), b = Y(s * a);
    if (x !== b)
      throw new Error("bad point: equation left != right (2)");
    return this;
  }
  /** Equality check: compare points P&Q. */
  equals(t) {
    const { ex: n, ey: i, ez: o } = this, { ex: r, ey: s, ez: a } = xc(t), c = Y(n * a), l = Y(r * o), p = Y(i * a), y = Y(s * o);
    return c === l && p === y;
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
    const { ex: t, ey: n, ez: i } = this, o = Dr, r = Y(t * t), s = Y(n * n), a = Y(2n * Y(i * i)), c = Y(o * r), l = t + n, p = Y(Y(l * l) - r - s), y = c + s, f = y - a, h = c - s, v = Y(p * f), x = Y(y * h), b = Y(p * h), I = Y(f * y);
    return new ot(v, x, I, b);
  }
  /** Point addition. Complete formula. Cost: `8M + 1*k + 8add + 1*2`. */
  add(t) {
    const { ex: n, ey: i, ez: o, et: r } = this, { ex: s, ey: a, ez: c, et: l } = xc(t), p = Dr, y = zr, f = Y(n * s), h = Y(i * a), v = Y(r * y * l), x = Y(o * c), b = Y((n + i) * (s + a) - f - h), I = Y(x - v), g = Y(x + v), m = Y(h - p * f), d = Y(b * I), u = Y(g * m), w = Y(b * m), S = Y(I * g);
    return new ot(d, u, S, w);
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
    if (Ut(t, 1n, Bi), t === 1n)
      return this;
    if (this.equals(Ct))
      return Rh(t).p;
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
    const o = Xd(i, qe);
    return Y(i * o) !== 1n && Ge("invalid inverse"), { x: Y(t * o), y: Y(n * o) };
  }
  toBytes() {
    const { x: t, y: n } = this.assertValidity().toAffine(), i = Yd(n);
    return i[31] |= t & 1n ? 128 : 0, i;
  }
  toHex() {
    return da(this.toBytes());
  }
  // encode to hex string
  clearCofactor() {
    return this.multiply(Xi(lh), !1);
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
const Ct = new xt(vc, bc, 1n, Y(vc * bc)), nn = new xt(0n, 1n, 1n, 0n);
xt.BASE = Ct;
xt.ZERO = nn;
const Yd = (e) => la(Kd(Ut(e, 0n, Ls), _n)).reverse(), ua = (e) => Xi("0x" + da(ca(Zt(e)).reverse())), st = (e, t) => {
  let n = e;
  for (; t-- > 0n; )
    n *= n, n %= qe;
  return n;
}, mh = (e) => {
  const n = e * e % qe * e % qe, i = st(n, 2n) * n % qe, o = st(i, 1n) * e % qe, r = st(o, 5n) * o % qe, s = st(r, 10n) * r % qe, a = st(s, 20n) * s % qe, c = st(a, 40n) * a % qe, l = st(c, 80n) * c % qe, p = st(l, 80n) * c % qe, y = st(p, 10n) * r % qe;
  return { pow_p_5_8: st(y, 2n) * e % qe, b2: n };
}, Sc = 0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n, yh = (e, t) => {
  const n = Y(t * t * t), i = Y(n * n * t), o = mh(e * i).pow_p_5_8;
  let r = Y(e * n * o);
  const s = Y(t * r * r), a = r, c = Y(r * Sc), l = s === e, p = s === Y(-e), y = s === Y(-e * Sc);
  return l && (r = a), (p || y) && (r = c), (Y(r) & 1n) === 1n && (r = Y(-r)), { isValid: l || p, value: r };
}, Yi = (e) => Wd(ua(e)), pa = (...e) => Ih.sha512Async(...e), gh = (e) => {
  const t = e.slice(0, Tt);
  t[0] &= 248, t[31] &= 127, t[31] |= 64;
  const n = e.slice(Tt, _n), i = Yi(t), o = Ct.multiply(i), r = o.toBytes();
  return { head: t, prefix: n, scalar: i, point: o, pointBytes: r };
}, vh = (e) => pa(rn(e, Tt)).then(gh), el = (e) => pa(e.hashable).then(e.finish), bh = (e, t, n) => {
  const { pointBytes: i, scalar: o } = e, r = Yi(t), s = Ct.multiply(r).toBytes();
  return { hashable: Pn(s, i, n), finish: (l) => {
    const p = Wd(r + Yi(l) * o);
    return Zt(Pn(s, Yd(p)), _n);
  } };
}, wh = async (e, t) => {
  const n = rn(e), i = await vh(t), o = await pa(i.prefix, n);
  return el(bh(i, o, n));
}, tl = { zip215: !0 }, xh = (e, t, n, i = tl) => {
  e = rn(e, _n), t = rn(t), n = rn(n, Tt);
  const { zip215: o } = i;
  let r, s, a, c, l = Uint8Array.of();
  try {
    r = xt.fromHex(n, o), s = xt.fromHex(e.slice(0, Tt), o), a = ua(e.slice(Tt, _n)), c = Ct.multiply(a, !1), l = Pn(s.toBytes(), r.toBytes(), t);
  } catch {
  }
  return { hashable: l, finish: (y) => {
    if (c == null || !o && r.isSmallOrder())
      return !1;
    const f = Yi(y);
    return s.add(r.multiply(f, !1)).add(c.negate()).clearCofactor().is0();
  } };
}, Sh = async (e, t, n, i = tl) => el(xh(e, t, n, i)), Ih = {
  sha512Async: async (...e) => {
    const t = fh(), n = Pn(...e);
    return cr(await t.digest("SHA-512", n.buffer));
  },
  sha512Sync: void 0,
  bytesToHex: da,
  hexToBytes: la,
  concatBytes: Pn,
  mod: Y,
  invert: Xd,
  randomBytes: hh
}, er = 8, Ah = 256, nl = Math.ceil(Ah / er) + 1, Os = 2 ** (er - 1), qh = () => {
  const e = [];
  let t = Ct, n = t;
  for (let i = 0; i < nl; i++) {
    n = t, e.push(n);
    for (let o = 1; o < Os; o++)
      n = n.add(t), e.push(n);
    t = n.double();
  }
  return e;
};
let Ic;
const Ac = (e, t) => {
  const n = t.negate();
  return e ? n : t;
}, Rh = (e) => {
  const t = Ic || (Ic = qh());
  let n = nn, i = Ct;
  const o = 2 ** er, r = o, s = Xi(o - 1), a = Xi(er);
  for (let c = 0; c < nl; c++) {
    let l = Number(e & s);
    e >>= a, l > Os && (l -= r, e += 1n);
    const p = c * Os, y = p, f = p + Math.abs(l) - 1, h = c % 2 !== 0, v = l < 0;
    l === 0 ? i = i.add(Ac(h, t[y])) : n = n.add(Ac(v, t[f]));
  }
  return { p: n, f: i };
};
var Vr = {}, Ur, qc;
function fa() {
  return qc || (qc = 1, Ur = class il {
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
      return new il(t, new Map(n), i);
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
  }), Ur;
}
var Gr = {}, Rc;
function jh() {
  return Rc || (Rc = 1, (function(e, t) {
    if (e.setImmediate)
      return;
    var n = 1, i = {}, o = !1, r = e.document, s;
    function a(g) {
      typeof g != "function" && (g = new Function("" + g));
      for (var m = new Array(arguments.length - 1), d = 0; d < m.length; d++)
        m[d] = arguments[d + 1];
      var u = { callback: g, args: m };
      return i[n] = u, s(n), n++;
    }
    function c(g) {
      delete i[g];
    }
    function l(g) {
      var m = g.callback, d = g.args;
      switch (d.length) {
        case 0:
          m();
          break;
        case 1:
          m(d[0]);
          break;
        case 2:
          m(d[0], d[1]);
          break;
        case 3:
          m(d[0], d[1], d[2]);
          break;
        default:
          m.apply(t, d);
          break;
      }
    }
    function p(g) {
      if (o)
        setTimeout(p, 0, g);
      else {
        var m = i[g];
        if (m) {
          o = !0;
          try {
            l(m);
          } finally {
            c(g), o = !1;
          }
        }
      }
    }
    function y() {
      s = function(g) {
        process.nextTick(function() {
          p(g);
        });
      };
    }
    function f() {
      if (e.postMessage && !e.importScripts) {
        var g = !0, m = e.onmessage;
        return e.onmessage = function() {
          g = !1;
        }, e.postMessage("", "*"), e.onmessage = m, g;
      }
    }
    function h() {
      var g = "setImmediate$" + Math.random() + "$", m = function(d) {
        d.source === e && typeof d.data == "string" && d.data.indexOf(g) === 0 && p(+d.data.slice(g.length));
      };
      e.addEventListener ? e.addEventListener("message", m, !1) : e.attachEvent("onmessage", m), s = function(d) {
        e.postMessage(g + d, "*");
      };
    }
    function v() {
      var g = new MessageChannel();
      g.port1.onmessage = function(m) {
        var d = m.data;
        p(d);
      }, s = function(m) {
        g.port2.postMessage(m);
      };
    }
    function x() {
      var g = r.documentElement;
      s = function(m) {
        var d = r.createElement("script");
        d.onreadystatechange = function() {
          p(m), d.onreadystatechange = null, g.removeChild(d), d = null;
        }, g.appendChild(d);
      };
    }
    function b() {
      s = function(g) {
        setTimeout(p, 0, g);
      };
    }
    var I = Object.getPrototypeOf && Object.getPrototypeOf(e);
    I = I && I.setTimeout ? I : e, {}.toString.call(e.process) === "[object process]" ? y() : f() ? h() : e.MessageChannel ? v() : r && "onreadystatechange" in r.createElement("script") ? x() : b(), I.setImmediate = a, I.clearImmediate = c;
  })(typeof self > "u" ? typeof Da > "u" ? Gr : Da : self)), Gr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Fr, jc;
function dr() {
  if (jc) return Fr;
  jc = 1, jh();
  const e = self.crypto || self.msCrypto;
  return Fr = class {
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
  }, Fr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Br, $c;
function rl() {
  return $c || ($c = 1, Br = class {
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
        const c = t[a], l = n.get(c);
        (o === null || c > o) && (l && a > 0 && c > t[a - 1] || !l && a < s - 1 && c > t[a + 1]) && (o = c, r = a);
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
  }), Br;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Zr, _c;
function ha() {
  if (_c) return Zr;
  _c = 1;
  const t = "http://www.w3.org/1999/02/22-rdf-syntax-ns#" + "langString", n = "http://www.w3.org/2001/XMLSchema#string", i = "NamedNode", o = "BlankNode", r = "Literal", s = "DefaultGraph", a = {};
  (() => {
    const h = "(?:<([^:]+:[^>]*)>)", x = "A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�" + "_", b = x + "0-9-·̀-ͯ‿-⁀", g = "(_:(?:[" + x + "0-9])(?:(?:[" + b + ".])*(?:[" + b + "]))?)", m = '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"', d = "(?:\\^\\^" + h + ")", w = "(?:" + m + "(?:" + d + "|" + "(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*))" + ")?)", S = "[ \\t]+", A = "[ \\t]*", j = "(?:" + h + "|" + g + ")" + S, R = h + S, E = "(?:" + h + "|" + g + "|" + w + ")" + A, L = "(?:\\.|(?:(?:" + h + "|" + g + ")" + A + "\\.))";
    a.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g, a.empty = new RegExp("^" + A + "$"), a.quad = new RegExp(
      "^" + A + j + R + E + L + A + "$"
    );
  })(), Zr = class Zi {
    /**
     * Parses RDF in the form of N-Quads.
     *
     * @param input the N-Quads input to parse.
     *
     * @return an RDF dataset (an array of quads per http://rdf.js.org/).
     */
    static parse(v) {
      const x = [], b = {}, I = v.split(a.eoln);
      let g = 0;
      for (const m of I) {
        if (g++, a.empty.test(m))
          continue;
        const d = m.match(a.quad);
        if (d === null)
          throw new Error("N-Quads parse error on line " + g + ".");
        const u = { subject: null, predicate: null, object: null, graph: null };
        if (d[1] !== void 0 ? u.subject = { termType: i, value: d[1] } : u.subject = { termType: o, value: d[2] }, u.predicate = { termType: i, value: d[3] }, d[4] !== void 0 ? u.object = { termType: i, value: d[4] } : d[5] !== void 0 ? u.object = { termType: o, value: d[5] } : (u.object = {
          termType: r,
          value: void 0,
          datatype: {
            termType: i
          }
        }, d[7] !== void 0 ? u.object.datatype.value = d[7] : d[8] !== void 0 ? (u.object.datatype.value = t, u.object.language = d[8]) : u.object.datatype.value = n, u.object.value = f(d[6])), d[9] !== void 0 ? u.graph = {
          termType: i,
          value: d[9]
        } : d[10] !== void 0 ? u.graph = {
          termType: o,
          value: d[10]
        } : u.graph = {
          termType: s,
          value: ""
        }, !(u.graph.value in b))
          b[u.graph.value] = [u], x.push(u);
        else {
          let w = !0;
          const S = b[u.graph.value];
          for (const A of S)
            if (c(A, u)) {
              w = !1;
              break;
            }
          w && (S.push(u), x.push(u));
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
    static serialize(v) {
      Array.isArray(v) || (v = Zi.legacyDatasetToQuads(v));
      const x = [];
      for (const b of v)
        x.push(Zi.serializeQuad(b));
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
    static serializeQuadComponents(v, x, b, I) {
      let g = "";
      return v.termType === i ? g += `<${v.value}>` : g += `${v.value}`, g += ` <${x.value}> `, b.termType === i ? g += `<${b.value}>` : b.termType === o ? g += b.value : (g += `"${p(b.value)}"`, b.datatype.value === t ? b.language && (g += `@${b.language}`) : b.datatype.value !== n && (g += `^^<${b.datatype.value}>`)), I.termType === i ? g += ` <${I.value}>` : I.termType === o && (g += ` ${I.value}`), g += ` .
`, g;
    }
    /**
     * Converts an RDF quad to an N-Quad string (a single quad).
     *
     * @param quad the RDF quad convert.
     *
     * @return the N-Quad string.
     */
    static serializeQuad(v) {
      return Zi.serializeQuadComponents(
        v.subject,
        v.predicate,
        v.object,
        v.graph
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
    static legacyDatasetToQuads(v) {
      const x = [], b = {
        "blank node": o,
        IRI: i,
        literal: r
      };
      for (const I in v)
        v[I].forEach((m) => {
          const d = {};
          for (const u in m) {
            const w = m[u], S = {
              termType: b[w.type],
              value: w.value
            };
            S.termType === r && (S.datatype = {
              termType: i
            }, "datatype" in w && (S.datatype.value = w.datatype), "language" in w ? ("datatype" in w || (S.datatype.value = t), S.language = w.language) : "datatype" in w || (S.datatype.value = n)), d[u] = S;
          }
          I === "@default" ? d.graph = {
            termType: s,
            value: ""
          } : d.graph = {
            termType: I.startsWith("_:") ? o : i,
            value: I
          }, x.push(d);
        });
      return x;
    }
  };
  function c(h, v) {
    return !(h.subject.termType === v.subject.termType && h.object.termType === v.object.termType) || !(h.subject.value === v.subject.value && h.predicate.value === v.predicate.value && h.object.value === v.object.value) ? !1 : h.object.termType !== r ? !0 : h.object.datatype.termType === v.object.datatype.termType && h.object.language === v.object.language && h.object.datatype.value === v.object.datatype.value;
  }
  const l = /["\\\n\r]/g;
  function p(h) {
    return h.replace(l, function(v) {
      switch (v) {
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
  const y = /(?:\\([tbnrf"'\\]))|(?:\\u([0-9A-Fa-f]{4}))|(?:\\U([0-9A-Fa-f]{8}))/g;
  function f(h) {
    return h.replace(y, function(v, x, b, I) {
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
      if (I)
        throw new Error("Unsupported U escape");
    });
  }
  return Zr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Hr, Pc;
function sl() {
  if (Pc) return Hr;
  Pc = 1;
  const e = fa(), t = dr(), n = rl(), i = ha();
  Hr = class {
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
      let l = 0;
      for (const h of c)
        ++l % 100 === 0 && await this._yield(), await this._hashAndTrackBlankNode({ id: h, hashToBlankNodes: a });
      const p = [...a.keys()].sort(), y = [];
      for (const h of p) {
        const v = a.get(h);
        if (v.length > 1) {
          y.push(v);
          continue;
        }
        const x = v[0];
        this.canonicalIssuer.getId(x);
      }
      for (const h of y) {
        const v = [];
        for (const x of h) {
          if (this.canonicalIssuer.hasId(x))
            continue;
          const b = new e("_:b");
          b.getId(x);
          const I = await this.hashNDegreeQuads(x, b);
          v.push(I);
        }
        v.sort(o);
        for (const x of v) {
          const b = x.issuer.getOldIds();
          for (const I of b)
            this.canonicalIssuer.getId(I);
        }
      }
      const f = [];
      for (const h of this.quads) {
        const v = i.serializeQuadComponents(
          this._componentWithCanonicalId(h.subject),
          h.predicate,
          this._componentWithCanonicalId(h.object),
          this._componentWithCanonicalId(h.graph)
        );
        f.push(v);
      }
      return f.sort(), f.join("");
    }
    // 4.6) Hash First Degree Quads
    async hashFirstDegreeQuads(s) {
      const a = [], c = this.blankNodeInfo.get(s), l = c.quads;
      for (const y of l) {
        const f = {
          subject: null,
          predicate: y.predicate,
          object: null,
          graph: null
        };
        f.subject = this.modifyFirstDegreeComponent(
          s,
          y.subject,
          "subject"
        ), f.object = this.modifyFirstDegreeComponent(
          s,
          y.object,
          "object"
        ), f.graph = this.modifyFirstDegreeComponent(
          s,
          y.graph,
          "graph"
        ), a.push(i.serializeQuad(f));
      }
      a.sort();
      const p = this.createMessageDigest();
      for (const y of a)
        p.update(y);
      return c.hash = await p.digest(), c.hash;
    }
    // 4.7) Hash Related Blank Node
    async hashRelatedBlankNode(s, a, c, l) {
      let p;
      this.canonicalIssuer.hasId(s) ? p = this.canonicalIssuer.getId(s) : c.hasId(s) ? p = c.getId(s) : p = this.blankNodeInfo.get(s).hash;
      const y = this.createMessageDigest();
      return y.update(l), l !== "g" && y.update(this.getRelatedPredicate(a)), y.update(p), y.digest();
    }
    // 4.8) Hash N-Degree Quads
    async hashNDegreeQuads(s, a) {
      const c = this.deepIterations.get(s) || 0;
      if (c > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(s, c + 1);
      const l = this.createMessageDigest(), p = await this.createHashToRelated(s, a), y = [...p.keys()].sort();
      for (const f of y) {
        l.update(f);
        let h = "", v;
        const x = new n(p.get(f));
        let b = 0;
        for (; x.hasNext(); ) {
          const I = x.next();
          ++b % 3 === 0 && await this._yield();
          let g = a.clone(), m = "";
          const d = [];
          let u = !1;
          for (const w of I)
            if (this.canonicalIssuer.hasId(w) ? m += this.canonicalIssuer.getId(w) : (g.hasId(w) || d.push(w), m += g.getId(w)), h.length !== 0 && m > h) {
              u = !0;
              break;
            }
          if (!u) {
            for (const w of d) {
              const S = await this.hashNDegreeQuads(w, g);
              if (m += g.getId(w), m += `<${S.hash}>`, g = S.issuer, h.length !== 0 && m > h) {
                u = !0;
                break;
              }
            }
            u || (h.length === 0 || m < h) && (h = m, v = g);
          }
        }
        l.update(h), a = v;
      }
      return { hash: await l.digest(), issuer: a };
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
      const c = /* @__PURE__ */ new Map(), l = this.blankNodeInfo.get(s).quads;
      let p = 0;
      for (const y of l)
        ++p % 100 === 0 && await this._yield(), await Promise.all([
          this._addRelatedBlankNodeHash({
            quad: y,
            component: y.subject,
            position: "s",
            id: s,
            issuer: a,
            hashToRelated: c
          }),
          this._addRelatedBlankNodeHash({
            quad: y,
            component: y.object,
            position: "o",
            id: s,
            issuer: a,
            hashToRelated: c
          }),
          this._addRelatedBlankNodeHash({
            quad: y,
            component: y.graph,
            position: "g",
            id: s,
            issuer: a,
            hashToRelated: c
          })
        ]);
      return c;
    }
    async _hashAndTrackBlankNode({ id: s, hashToBlankNodes: a }) {
      const c = await this.hashFirstDegreeQuads(s), l = a.get(c);
      l ? l.push(s) : a.set(c, [s]);
    }
    _addBlankNodeQuadInfo({ quad: s, component: a }) {
      if (a.termType !== "BlankNode")
        return;
      const c = a.value, l = this.blankNodeInfo.get(c);
      l ? l.quads.add(s) : this.blankNodeInfo.set(c, { quads: /* @__PURE__ */ new Set([s]), hash: null });
    }
    async _addRelatedBlankNodeHash({ quad: s, component: a, position: c, id: l, issuer: p, hashToRelated: y }) {
      if (!(a.termType === "BlankNode" && a.value !== l))
        return;
      const f = a.value, h = await this.hashRelatedBlankNode(
        f,
        s,
        p,
        c
      ), v = y.get(h);
      v ? v.push(f) : y.set(h, [f]);
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
  return Hr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Jr, Tc;
function $h() {
  if (Tc) return Jr;
  Tc = 1;
  const e = dr(), t = sl();
  return Jr = class extends t {
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
        let l, p;
        if (c.subject.termType === "BlankNode" && c.subject.value !== i)
          p = c.subject.value, l = "p";
        else if (c.object.termType === "BlankNode" && c.object.value !== i)
          p = c.object.value, l = "r";
        else
          continue;
        ++a % 100 === 0 && await this._yield();
        const y = await this.hashRelatedBlankNode(
          p,
          c,
          o,
          l
        ), f = r.get(y);
        f ? f.push(p) : r.set(y, [p]);
      }
      return r;
    }
  }, Jr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Kr, Cc;
function al() {
  if (Cc) return Kr;
  Cc = 1;
  const e = fa(), t = dr(), n = rl(), i = ha();
  Kr = class {
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
      const l = [...a.keys()].sort(), p = [];
      for (const f of l) {
        const h = a.get(f);
        if (h.length > 1) {
          p.push(h);
          continue;
        }
        const v = h[0];
        this.canonicalIssuer.getId(v);
      }
      for (const f of p) {
        const h = [];
        for (const v of f) {
          if (this.canonicalIssuer.hasId(v))
            continue;
          const x = new e("_:b");
          x.getId(v);
          const b = this.hashNDegreeQuads(v, x);
          h.push(b);
        }
        h.sort(o);
        for (const v of h) {
          const x = v.issuer.getOldIds();
          for (const b of x)
            this.canonicalIssuer.getId(b);
        }
      }
      const y = [];
      for (const f of this.quads) {
        const h = i.serializeQuadComponents(
          this._componentWithCanonicalId({ component: f.subject }),
          f.predicate,
          this._componentWithCanonicalId({ component: f.object }),
          this._componentWithCanonicalId({ component: f.graph })
        );
        y.push(h);
      }
      return y.sort(), y.join("");
    }
    // 4.6) Hash First Degree Quads
    hashFirstDegreeQuads(s) {
      const a = [], c = this.blankNodeInfo.get(s), l = c.quads;
      for (const y of l) {
        const f = {
          subject: null,
          predicate: y.predicate,
          object: null,
          graph: null
        };
        f.subject = this.modifyFirstDegreeComponent(
          s,
          y.subject,
          "subject"
        ), f.object = this.modifyFirstDegreeComponent(
          s,
          y.object,
          "object"
        ), f.graph = this.modifyFirstDegreeComponent(
          s,
          y.graph,
          "graph"
        ), a.push(i.serializeQuad(f));
      }
      a.sort();
      const p = this.createMessageDigest();
      for (const y of a)
        p.update(y);
      return c.hash = p.digest(), c.hash;
    }
    // 4.7) Hash Related Blank Node
    hashRelatedBlankNode(s, a, c, l) {
      let p;
      this.canonicalIssuer.hasId(s) ? p = this.canonicalIssuer.getId(s) : c.hasId(s) ? p = c.getId(s) : p = this.blankNodeInfo.get(s).hash;
      const y = this.createMessageDigest();
      return y.update(l), l !== "g" && y.update(this.getRelatedPredicate(a)), y.update(p), y.digest();
    }
    // 4.8) Hash N-Degree Quads
    hashNDegreeQuads(s, a) {
      const c = this.deepIterations.get(s) || 0;
      if (c > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(s, c + 1);
      const l = this.createMessageDigest(), p = this.createHashToRelated(s, a), y = [...p.keys()].sort();
      for (const f of y) {
        l.update(f);
        let h = "", v;
        const x = new n(p.get(f));
        for (; x.hasNext(); ) {
          const b = x.next();
          let I = a.clone(), g = "";
          const m = [];
          let d = !1;
          for (const u of b)
            if (this.canonicalIssuer.hasId(u) ? g += this.canonicalIssuer.getId(u) : (I.hasId(u) || m.push(u), g += I.getId(u)), h.length !== 0 && g > h) {
              d = !0;
              break;
            }
          if (!d) {
            for (const u of m) {
              const w = this.hashNDegreeQuads(u, I);
              if (g += I.getId(u), g += `<${w.hash}>`, I = w.issuer, h.length !== 0 && g > h) {
                d = !0;
                break;
              }
            }
            d || (h.length === 0 || g < h) && (h = g, v = I);
          }
        }
        l.update(h), a = v;
      }
      return { hash: l.digest(), issuer: a };
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
      const c = /* @__PURE__ */ new Map(), l = this.blankNodeInfo.get(s).quads;
      for (const p of l)
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
      const c = this.hashFirstDegreeQuads(s), l = a.get(c);
      l ? l.push(s) : a.set(c, [s]);
    }
    _addBlankNodeQuadInfo({ quad: s, component: a }) {
      if (a.termType !== "BlankNode")
        return;
      const c = a.value, l = this.blankNodeInfo.get(c);
      l ? l.quads.add(s) : this.blankNodeInfo.set(c, { quads: /* @__PURE__ */ new Set([s]), hash: null });
    }
    _addRelatedBlankNodeHash({ quad: s, component: a, position: c, id: l, issuer: p, hashToRelated: y }) {
      if (!(a.termType === "BlankNode" && a.value !== l))
        return;
      const f = a.value, h = this.hashRelatedBlankNode(f, s, p, c), v = y.get(h);
      v ? v.push(f) : y.set(h, [f]);
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
  return Kr;
}
/*!
 * Copyright (c) 2016-2021 Digital Bazaar, Inc. All rights reserved.
 */
var Qr, Ec;
function _h() {
  if (Ec) return Qr;
  Ec = 1;
  const e = dr(), t = al();
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
    createHashToRelated(i, o) {
      const r = /* @__PURE__ */ new Map(), s = this.blankNodeInfo.get(i).quads;
      for (const a of s) {
        let c, l;
        if (a.subject.termType === "BlankNode" && a.subject.value !== i)
          l = a.subject.value, c = "p";
        else if (a.object.termType === "BlankNode" && a.object.value !== i)
          l = a.object.value, c = "r";
        else
          continue;
        const p = this.hashRelatedBlankNode(l, a, o, c), y = r.get(p);
        y ? y.push(l) : r.set(p, [l]);
      }
      return r;
    }
  }, Qr;
}
const Ph = {}, Th = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ph
}, Symbol.toStringTag, { value: "Module" })), Ch = /* @__PURE__ */ Pu(Th);
var kc;
function Eh() {
  return kc || (kc = 1, (function(e) {
    const t = sl(), n = $h(), i = al(), o = _h();
    let r;
    try {
      r = Ch;
    } catch {
    }
    function s(a) {
      return Array.isArray(a) ? a : e.NQuads.legacyDatasetToQuads(a);
    }
    e.NQuads = ha(), e.IdentifierIssuer = fa(), e._rdfCanonizeNative = function(a) {
      return a && (r = a), r;
    }, e.canonize = async function(a, c) {
      const l = s(a);
      if (c.useNative) {
        if (!r)
          throw new Error("rdf-canonize-native not available");
        if (c.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return new Promise((p, y) => r.canonize(l, c, (f, h) => f ? y(f) : p(h)));
      }
      if (c.algorithm === "URDNA2015")
        return new t(c).main(l);
      if (c.algorithm === "URGNA2012") {
        if (c.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "URGNA2012".'
          );
        return new n(c).main(l);
      }
      throw "algorithm" in c ? new Error(
        "Invalid RDF Dataset Canonicalization algorithm: " + c.algorithm
      ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
    }, e._canonizeSync = function(a, c) {
      const l = s(a);
      if (c.useNative) {
        if (!r)
          throw new Error("rdf-canonize-native not available");
        if (c.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return r.canonizeSync(l, c);
      }
      if (c.algorithm === "URDNA2015")
        return new i(c).main(l);
      if (c.algorithm === "URGNA2012") {
        if (c.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "URGNA2012".'
          );
        return new o(c).main(l);
      }
      throw "algorithm" in c ? new Error(
        "Invalid RDF Dataset Canonicalization algorithm: " + c.algorithm
      ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
    };
  })(Vr)), Vr;
}
var Wr, Mc;
function ma() {
  return Mc || (Mc = 1, Wr = Eh()), Wr;
}
var Xr, Lc;
function Oe() {
  if (Lc) return Xr;
  Lc = 1;
  const e = {};
  return Xr = e, e.isArray = Array.isArray, e.isBoolean = (t) => typeof t == "boolean" || Object.prototype.toString.call(t) === "[object Boolean]", e.isDouble = (t) => e.isNumber(t) && (String(t).indexOf(".") !== -1 || Math.abs(t) >= 1e21), e.isEmptyObject = (t) => e.isObject(t) && Object.keys(t).length === 0, e.isNumber = (t) => typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]", e.isNumeric = (t) => !isNaN(parseFloat(t)) && isFinite(t), e.isObject = (t) => Object.prototype.toString.call(t) === "[object Object]", e.isString = (t) => typeof t == "string" || Object.prototype.toString.call(t) === "[object String]", e.isUndefined = (t) => typeof t > "u", Xr;
}
var Yr, Oc;
function St() {
  if (Oc) return Yr;
  Oc = 1;
  const e = Oe(), t = {};
  return Yr = t, t.isSubject = (n) => e.isObject(n) && !("@value" in n || "@set" in n || "@list" in n) ? Object.keys(n).length > 1 || !("@id" in n) : !1, t.isSubjectReference = (n) => (
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
  }, Yr;
}
var es, Nc;
function Ze() {
  return Nc || (Nc = 1, es = class extends Error {
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
  }), es;
}
var ts, Dc;
function Be() {
  if (Dc) return ts;
  Dc = 1;
  const e = St(), t = Oe(), n = ma().IdentifierIssuer, i = Ze(), o = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/, r = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g, s = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/, a = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g, c = /^@[a-zA-Z]+$/, l = {
    headers: {
      accept: "application/ld+json, application/json"
    }
  }, p = {};
  ts = p, p.IdentifierIssuer = n, p.REGEX_BCP47 = o, p.REGEX_KEYWORD = c, p.clone = function(f) {
    if (f && typeof f == "object") {
      let h;
      if (t.isArray(f)) {
        h = [];
        for (let v = 0; v < f.length; ++v)
          h[v] = p.clone(f[v]);
      } else if (f instanceof Map) {
        h = /* @__PURE__ */ new Map();
        for (const [v, x] of f)
          h.set(v, p.clone(x));
      } else if (f instanceof Set) {
        h = /* @__PURE__ */ new Set();
        for (const v of f)
          h.add(p.clone(v));
      } else if (t.isObject(f)) {
        h = {};
        for (const v in f)
          h[v] = p.clone(f[v]);
      } else
        h = f.toString();
      return h;
    }
    return f;
  }, p.asArray = function(f) {
    return Array.isArray(f) ? f : [f];
  }, p.buildHeaders = (f = {}) => {
    if (Object.keys(f).some(
      (v) => v.toLowerCase() === "accept"
    ))
      throw new RangeError(
        'Accept header may not be specified; only "' + l.headers.accept + '" is supported.'
      );
    return Object.assign({ Accept: l.headers.accept }, f);
  }, p.parseLinkHeader = (f) => {
    const h = {}, v = f.match(r);
    for (let x = 0; x < v.length; ++x) {
      let b = v[x].match(s);
      if (!b)
        continue;
      const I = { target: b[1] }, g = b[2];
      for (; b = a.exec(g); )
        I[b[1]] = b[2] === void 0 ? b[3] : b[2];
      const m = I.rel || "";
      Array.isArray(h[m]) ? h[m].push(I) : h.hasOwnProperty(m) ? h[m] = [h[m], I] : h[m] = I;
    }
    return h;
  }, p.validateTypeValue = (f, h) => {
    if (!t.isString(f) && !(t.isArray(f) && f.every((v) => t.isString(v)))) {
      if (h && t.isObject(f))
        switch (Object.keys(f).length) {
          case 0:
            return;
          case 1:
            if ("@default" in f && p.asArray(f["@default"]).every((v) => t.isString(v)))
              return;
        }
      throw new i(
        'Invalid JSON-LD syntax; "@type" value must a string, an array of strings, an empty object, or a default object.',
        "jsonld.SyntaxError",
        { code: "invalid type value", value: f }
      );
    }
  }, p.hasProperty = (f, h) => {
    if (f.hasOwnProperty(h)) {
      const v = f[h];
      return !t.isArray(v) || v.length > 0;
    }
    return !1;
  }, p.hasValue = (f, h, v) => {
    if (p.hasProperty(f, h)) {
      let x = f[h];
      const b = e.isList(x);
      if (t.isArray(x) || b) {
        b && (x = x["@list"]);
        for (let I = 0; I < x.length; ++I)
          if (p.compareValues(v, x[I]))
            return !0;
      } else if (!t.isArray(v))
        return p.compareValues(v, x);
    }
    return !1;
  }, p.addValue = (f, h, v, x) => {
    if (x = x || {}, "propertyIsArray" in x || (x.propertyIsArray = !1), "valueIsArray" in x || (x.valueIsArray = !1), "allowDuplicate" in x || (x.allowDuplicate = !0), "prependValue" in x || (x.prependValue = !1), x.valueIsArray)
      f[h] = v;
    else if (t.isArray(v)) {
      v.length === 0 && x.propertyIsArray && !f.hasOwnProperty(h) && (f[h] = []), x.prependValue && (v = v.concat(f[h]), f[h] = []);
      for (let b = 0; b < v.length; ++b)
        p.addValue(f, h, v[b], x);
    } else if (f.hasOwnProperty(h)) {
      const b = !x.allowDuplicate && p.hasValue(f, h, v);
      !t.isArray(f[h]) && (!b || x.propertyIsArray) && (f[h] = [f[h]]), b || (x.prependValue ? f[h].unshift(v) : f[h].push(v));
    } else
      f[h] = x.propertyIsArray ? [v] : v;
  }, p.getValues = (f, h) => [].concat(f[h] || []), p.removeProperty = (f, h) => {
    delete f[h];
  }, p.removeValue = (f, h, v, x) => {
    x = x || {}, "propertyIsArray" in x || (x.propertyIsArray = !1);
    const b = p.getValues(f, h).filter(
      (I) => !p.compareValues(I, v)
    );
    b.length === 0 ? p.removeProperty(f, h) : b.length === 1 && !x.propertyIsArray ? f[h] = b[0] : f[h] = b;
  }, p.relabelBlankNodes = (f, h) => {
    h = h || {};
    const v = h.issuer || new n("_:b");
    return y(v, f);
  }, p.compareValues = (f, h) => f === h || e.isValue(f) && e.isValue(h) && f["@value"] === h["@value"] && f["@type"] === h["@type"] && f["@language"] === h["@language"] && f["@index"] === h["@index"] ? !0 : t.isObject(f) && "@id" in f && t.isObject(h) && "@id" in h ? f["@id"] === h["@id"] : !1, p.compareShortestLeast = (f, h) => f.length < h.length ? -1 : h.length < f.length ? 1 : f === h ? 0 : f < h ? -1 : 1;
  function y(f, h) {
    if (t.isArray(h))
      for (let v = 0; v < h.length; ++v)
        h[v] = y(f, h[v]);
    else if (e.isList(h))
      h["@list"] = y(f, h["@list"]);
    else if (t.isObject(h)) {
      e.isBlankNode(h) && (h["@id"] = f.getId(h["@id"]));
      const v = Object.keys(h).sort();
      for (let x = 0; x < v.length; ++x) {
        const b = v[x];
        b !== "@id" && (h[b] = y(f, h[b]));
      }
    }
    return h;
  }
  return ts;
}
var ns, zc;
function ya() {
  if (zc) return ns;
  zc = 1;
  const e = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", t = "http://www.w3.org/2001/XMLSchema#";
  return ns = {
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
  }, ns;
}
var is, Vc;
function ol() {
  return Vc || (Vc = 1, is = class {
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
  }), is;
}
var rs, Uc;
function Mt() {
  if (Uc) return rs;
  Uc = 1;
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
    const s = t.parse(o.substr(r.length)), a = i.normalizedPath.split("/"), c = s.normalizedPath.split("/"), l = s.fragment || s.query ? 0 : 1;
    for (; a.length > 0 && c.length > l && a[0] === c[0]; )
      a.shift(), c.shift();
    let p = "";
    if (a.length > 0) {
      a.pop();
      for (let y = 0; y < a.length; ++y)
        p += "../";
    }
    return p += c.join("/"), s.query !== null && (p += "?" + s.query), s.fragment !== null && (p += "#" + s.fragment), p === "" && (p = "./"), p;
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
  return t.isAbsolute = (i) => e.isString(i) && n.test(i), t.isRelative = (i) => e.isString(i), rs;
}
var ss, Gc;
function kh() {
  if (Gc) return ss;
  Gc = 1;
  const { parseLinkHeader: e, buildHeaders: t } = Be(), { LINK_HEADER_CONTEXT: n } = ya(), i = Ze(), o = ol(), { prependBase: r } = Mt(), s = /(^|(\r\n))link:/i;
  ss = ({
    secure: c,
    headers: l = {},
    xhr: p
  } = { headers: {} }) => {
    return l = t(l), new o().wrapLoader(f);
    async function f(h) {
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
      let v;
      try {
        v = await a(p, h, l);
      } catch (m) {
        throw new i(
          "URL could not be dereferenced, an error occurred.",
          "jsonld.LoadDocumentError",
          { code: "loading document failed", url: h, cause: m }
        );
      }
      if (v.status >= 400)
        throw new i(
          "URL could not be dereferenced: " + v.statusText,
          "jsonld.LoadDocumentError",
          {
            code: "loading document failed",
            url: h,
            httpStatusCode: v.status
          }
        );
      let x = { contextUrl: null, documentUrl: h, document: v.response }, b = null;
      const I = v.getResponseHeader("Content-Type");
      let g;
      if (s.test(v.getAllResponseHeaders()) && (g = v.getResponseHeader("Link")), g && I !== "application/ld+json") {
        const m = e(g), d = m[n];
        if (Array.isArray(d))
          throw new i(
            "URL could not be dereferenced, it has more than one associated HTTP Link Header.",
            "jsonld.InvalidUrl",
            { code: "multiple context link headers", url: h }
          );
        d && (x.contextUrl = d.target), b = m.alternate, b && b.type == "application/ld+json" && !(I || "").match(/^application\/(\w*\+)?json$/) && (x = await f(r(h, b.target)));
      }
      return x;
    }
  };
  function a(c, l, p) {
    c = c || XMLHttpRequest;
    const y = new c();
    return new Promise((f, h) => {
      y.onload = () => f(y), y.onerror = (v) => h(v), y.open("GET", l, !0);
      for (const v in p)
        y.setRequestHeader(v, p[v]);
      y.send();
    });
  }
  return ss;
}
var as, Fc;
function Mh() {
  if (Fc) return as;
  Fc = 1;
  const e = kh(), t = {};
  return as = t, t.setupDocumentLoaders = function(n) {
    typeof XMLHttpRequest < "u" && (n.documentLoaders.xhr = e, n.useDocumentLoader("xhr"));
  }, t.setupGlobals = function(n) {
    typeof globalThis.JsonLdProcessor > "u" && Object.defineProperty(globalThis, "JsonLdProcessor", {
      writable: !0,
      enumerable: !1,
      configurable: !0,
      value: n.JsonLdProcessor
    });
  }, as;
}
var os, Bc;
function Lh() {
  return Bc || (Bc = 1, os = function(e) {
    e.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next)
        yield t.value;
    };
  }), os;
}
var cs, Zc;
function Oh() {
  if (Zc) return cs;
  Zc = 1, cs = e, e.Node = o, e.create = e;
  function e(r) {
    var s = this;
    if (s instanceof e || (s = new e()), s.tail = null, s.head = null, s.length = 0, r && typeof r.forEach == "function")
      r.forEach(function(l) {
        s.push(l);
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
    for (var l = 0; c !== null; l++)
      a = r(a, c.value, l), c = c.next;
    return a;
  }, e.prototype.reduceReverse = function(r, s) {
    var a, c = this.tail;
    if (arguments.length > 1)
      a = s;
    else if (this.tail)
      c = this.tail.prev, a = this.tail.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var l = this.length - 1; c !== null; l--)
      a = r(a, c.value, l), c = c.prev;
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
    for (var c = 0, l = this.head; l !== null && c < r; c++)
      l = l.next;
    for (; l !== null && c < s; c++, l = l.next)
      a.push(l.value);
    return a;
  }, e.prototype.sliceReverse = function(r, s) {
    s = s || this.length, s < 0 && (s += this.length), r = r || 0, r < 0 && (r += this.length);
    var a = new e();
    if (s < r || s < 0)
      return a;
    r < 0 && (r = 0), s > this.length && (s = this.length);
    for (var c = this.length, l = this.tail; l !== null && c > s; c--)
      l = l.prev;
    for (; l !== null && c > r; c--, l = l.prev)
      a.push(l.value);
    return a;
  }, e.prototype.splice = function(r, s, ...a) {
    r > this.length && (r = this.length - 1), r < 0 && (r = this.length + r);
    for (var c = 0, l = this.head; l !== null && c < r; c++)
      l = l.next;
    for (var p = [], c = 0; l && c < s; c++)
      p.push(l.value), l = this.removeNode(l);
    l === null && (l = this.tail), l !== this.head && l !== this.tail && (l = l.prev);
    for (var c = 0; c < a.length; c++)
      l = t(this, l, a[c]);
    return p;
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
  return cs;
}
var ds, Hc;
function cl() {
  if (Hc) return ds;
  Hc = 1;
  const e = Oh(), t = Symbol("max"), n = Symbol("length"), i = Symbol("lengthCalculator"), o = Symbol("allowStale"), r = Symbol("maxAge"), s = Symbol("dispose"), a = Symbol("noDisposeOnSet"), c = Symbol("lruList"), l = Symbol("cache"), p = Symbol("updateAgeOnGet"), y = () => 1;
  class f {
    constructor(d) {
      if (typeof d == "number" && (d = { max: d }), d || (d = {}), d.max && (typeof d.max != "number" || d.max < 0))
        throw new TypeError("max must be a non-negative number");
      this[t] = d.max || 1 / 0;
      const u = d.length || y;
      if (this[i] = typeof u != "function" ? y : u, this[o] = d.stale || !1, d.maxAge && typeof d.maxAge != "number")
        throw new TypeError("maxAge must be a number");
      this[r] = d.maxAge || 0, this[s] = d.dispose, this[a] = d.noDisposeOnSet || !1, this[p] = d.updateAgeOnGet || !1, this.reset();
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
      this[r] = d, x(this);
    }
    get maxAge() {
      return this[r];
    }
    // resize the cache when the lengthCalculator changes.
    set lengthCalculator(d) {
      typeof d != "function" && (d = y), d !== this[i] && (this[i] = d, this[n] = 0, this[c].forEach((u) => {
        u.length = this[i](u.value, u.key), this[n] += u.length;
      })), x(this);
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
    rforEach(d, u) {
      u = u || this;
      for (let w = this[c].tail; w !== null; ) {
        const S = w.prev;
        g(this, d, w, u), w = S;
      }
    }
    forEach(d, u) {
      u = u || this;
      for (let w = this[c].head; w !== null; ) {
        const S = w.next;
        g(this, d, w, u), w = S;
      }
    }
    keys() {
      return this[c].toArray().map((d) => d.key);
    }
    values() {
      return this[c].toArray().map((d) => d.value);
    }
    reset() {
      this[s] && this[c] && this[c].length && this[c].forEach((d) => this[s](d.key, d.value)), this[l] = /* @__PURE__ */ new Map(), this[c] = new e(), this[n] = 0;
    }
    dump() {
      return this[c].map((d) => v(this, d) ? !1 : {
        k: d.key,
        v: d.value,
        e: d.now + (d.maxAge || 0)
      }).toArray().filter((d) => d);
    }
    dumpLru() {
      return this[c];
    }
    set(d, u, w) {
      if (w = w || this[r], w && typeof w != "number")
        throw new TypeError("maxAge must be a number");
      const S = w ? Date.now() : 0, A = this[i](u, d);
      if (this[l].has(d)) {
        if (A > this[t])
          return b(this, this[l].get(d)), !1;
        const E = this[l].get(d).value;
        return this[s] && (this[a] || this[s](d, E.value)), E.now = S, E.maxAge = w, E.value = u, this[n] += A - E.length, E.length = A, this.get(d), x(this), !0;
      }
      const j = new I(d, u, A, S, w);
      return j.length > this[t] ? (this[s] && this[s](d, u), !1) : (this[n] += j.length, this[c].unshift(j), this[l].set(d, this[c].head), x(this), !0);
    }
    has(d) {
      if (!this[l].has(d)) return !1;
      const u = this[l].get(d).value;
      return !v(this, u);
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
      b(this, this[l].get(d));
    }
    load(d) {
      this.reset();
      const u = Date.now();
      for (let w = d.length - 1; w >= 0; w--) {
        const S = d[w], A = S.e || 0;
        if (A === 0)
          this.set(S.k, S.v);
        else {
          const j = A - u;
          j > 0 && this.set(S.k, S.v, j);
        }
      }
    }
    prune() {
      this[l].forEach((d, u) => h(this, u, !1));
    }
  }
  const h = (m, d, u) => {
    const w = m[l].get(d);
    if (w) {
      const S = w.value;
      if (v(m, S)) {
        if (b(m, w), !m[o])
          return;
      } else
        u && (m[p] && (w.value.now = Date.now()), m[c].unshiftNode(w));
      return S.value;
    }
  }, v = (m, d) => {
    if (!d || !d.maxAge && !m[r])
      return !1;
    const u = Date.now() - d.now;
    return d.maxAge ? u > d.maxAge : m[r] && u > m[r];
  }, x = (m) => {
    if (m[n] > m[t])
      for (let d = m[c].tail; m[n] > m[t] && d !== null; ) {
        const u = d.prev;
        b(m, d), d = u;
      }
  }, b = (m, d) => {
    if (d) {
      const u = d.value;
      m[s] && m[s](u.key, u.value), m[n] -= u.length, m[l].delete(u.key), m[c].removeNode(d);
    }
  };
  class I {
    constructor(d, u, w, S, A) {
      this.key = d, this.value = u, this.length = w, this.now = S, this.maxAge = A || 0;
    }
  }
  const g = (m, d, u, w) => {
    let S = u.value;
    v(m, S) && (b(m, u), m[o] || (S = void 0)), S && d.call(w, S.value, S.key, m);
  };
  return ds = f, ds;
}
var ls, Jc;
function Nh() {
  if (Jc) return ls;
  Jc = 1;
  const e = cl(), t = 10;
  return ls = class {
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
  }, ls;
}
var us, Kc;
function Dh() {
  if (Kc) return us;
  Kc = 1;
  const {
    isArray: e,
    isObject: t,
    isString: n
  } = Oe(), {
    asArray: i
  } = Be(), { prependBase: o } = Mt(), r = Ze(), s = Nh(), a = 10;
  us = class {
    /**
     * Creates a ContextResolver.
     *
     * @param sharedCache a shared LRU cache with `get` and `set` APIs.
     */
    constructor({ sharedCache: y }) {
      this.perOpCache = /* @__PURE__ */ new Map(), this.sharedCache = y;
    }
    async resolve({
      activeCtx: y,
      context: f,
      documentLoader: h,
      base: v,
      cycles: x = /* @__PURE__ */ new Set()
    }) {
      f && t(f) && f["@context"] && (f = f["@context"]), f = i(f);
      const b = [];
      for (const I of f) {
        if (n(I)) {
          let d = this._get(I);
          d || (d = await this._resolveRemoteContext(
            { activeCtx: y, url: I, documentLoader: h, base: v, cycles: x }
          )), e(d) ? b.push(...d) : b.push(d);
          continue;
        }
        if (I === null) {
          b.push(new s({ document: null }));
          continue;
        }
        t(I) || c(f);
        const g = JSON.stringify(I);
        let m = this._get(g);
        m || (m = new s({ document: I }), this._cacheResolvedContext({ key: g, resolved: m, tag: "static" })), b.push(m);
      }
      return b;
    }
    _get(y) {
      let f = this.perOpCache.get(y);
      if (!f) {
        const h = this.sharedCache.get(y);
        h && (f = h.get("static"), f && this.perOpCache.set(y, f));
      }
      return f;
    }
    _cacheResolvedContext({ key: y, resolved: f, tag: h }) {
      if (this.perOpCache.set(y, f), h !== void 0) {
        let v = this.sharedCache.get(y);
        v || (v = /* @__PURE__ */ new Map(), this.sharedCache.set(y, v)), v.set(h, f);
      }
      return f;
    }
    async _resolveRemoteContext({ activeCtx: y, url: f, documentLoader: h, base: v, cycles: x }) {
      f = o(v, f);
      const { context: b, remoteDoc: I } = await this._fetchContext(
        { activeCtx: y, url: f, documentLoader: h, cycles: x }
      );
      v = I.documentUrl || f, l({ context: b, base: v });
      const g = await this.resolve(
        { activeCtx: y, context: b, documentLoader: h, base: v, cycles: x }
      );
      return this._cacheResolvedContext({ key: f, resolved: g, tag: I.tag }), g;
    }
    async _fetchContext({ activeCtx: y, url: f, documentLoader: h, cycles: v }) {
      if (v.size > a)
        throw new r(
          "Maximum number of @context URLs exceeded.",
          "jsonld.ContextUrlError",
          {
            code: y.processingMode === "json-ld-1.0" ? "loading remote context failed" : "context overflow",
            max: a
          }
        );
      if (v.has(f))
        throw new r(
          "Cyclical @context URLs detected.",
          "jsonld.ContextUrlError",
          {
            code: y.processingMode === "json-ld-1.0" ? "recursive context inclusion" : "context overflow",
            url: f
          }
        );
      v.add(f);
      let x, b;
      try {
        b = await h(f), x = b.document || null, n(x) && (x = JSON.parse(x));
      } catch (I) {
        throw new r(
          `Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context. URL: "${f}".`,
          "jsonld.InvalidUrl",
          { code: "loading remote context failed", url: f, cause: I }
        );
      }
      if (!t(x))
        throw new r(
          `Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object. URL: "${f}".`,
          "jsonld.InvalidUrl",
          { code: "invalid remote context", url: f }
        );
      return "@context" in x ? x = { "@context": x["@context"] } : x = { "@context": {} }, b.contextUrl && (e(x["@context"]) || (x["@context"] = [x["@context"]]), x["@context"].push(b.contextUrl)), { context: x, remoteDoc: b };
    }
  };
  function c(p) {
    throw new r(
      "Invalid JSON-LD syntax; @context must be an object.",
      "jsonld.SyntaxError",
      {
        code: "invalid local context",
        context: p
      }
    );
  }
  function l({ context: p, base: y }) {
    if (!p)
      return;
    const f = p["@context"];
    if (n(f)) {
      p["@context"] = o(y, f);
      return;
    }
    if (e(f)) {
      for (let h = 0; h < f.length; ++h) {
        const v = f[h];
        if (n(v)) {
          f[h] = o(y, v);
          continue;
        }
        t(v) && l({ context: { "@context": v }, base: y });
      }
      return;
    }
    if (t(f))
      for (const h in f)
        l({ context: f[h], base: y });
  }
  return us;
}
var ps, Qc;
function zh() {
  return Qc || (Qc = 1, ps = ma().NQuads), ps;
}
var fs, Wc;
function Ln() {
  if (Wc) return fs;
  Wc = 1;
  const e = Ze(), {
    isArray: t
  } = Oe(), {
    asArray: n
  } = Be(), i = {};
  fs = i, i.defaultEventHandler = null, i.setupEventHandler = ({ options: s = {} }) => {
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
    for (let l = 0; c && l < a.length; ++l) {
      c = !1;
      const p = a[l];
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
  }, fs;
}
var hs, Xc;
function Ht() {
  if (Xc) return hs;
  Xc = 1;
  const e = Be(), t = Ze(), {
    isArray: n,
    isObject: i,
    isString: o,
    isUndefined: r
  } = Oe(), {
    isAbsolute: s,
    isRelative: a,
    prependBase: c
  } = Mt(), {
    handleEvent: l
  } = Ln(), {
    REGEX_BCP47: p,
    REGEX_KEYWORD: y,
    asArray: f,
    compareShortestLeast: h
  } = Be(), v = /* @__PURE__ */ new Map(), x = 1e4, b = {};
  hs = b, b.process = async ({
    activeCtx: m,
    localCtx: d,
    options: u,
    propagate: w = !0,
    overrideProtected: S = !1,
    cycles: A = /* @__PURE__ */ new Set()
  }) => {
    if (i(d) && "@context" in d && n(d["@context"]) && (d = d["@context"]), f(d).length === 0)
      return m;
    const R = [], E = [
      ({ event: D, next: P }) => {
        R.push(D), P();
      }
    ];
    u.eventHandler && E.push(u.eventHandler);
    const L = u;
    u = { ...u, eventHandler: E };
    const _ = await u.contextResolver.resolve({
      activeCtx: m,
      context: d,
      documentLoader: u.documentLoader,
      base: u.base
    });
    i(_[0].document) && typeof _[0].document["@propagate"] == "boolean" && (w = _[0].document["@propagate"]);
    let C = m;
    !w && !C.previousContext && (C = C.clone(), C.previousContext = m);
    for (const D of _) {
      let { document: P } = D;
      if (m = C, P === null) {
        if (!S && Object.keys(m.protected).length !== 0)
          throw new t(
            "Tried to nullify a context with protected terms outside of a term definition.",
            "jsonld.SyntaxError",
            { code: "invalid context nullification" }
          );
        C = m = b.getInitialContext(u).clone();
        continue;
      }
      const F = D.getProcessed(m);
      if (F) {
        if (L.eventHandler)
          for (const G of F.events)
            l({ event: G, options: L });
        C = m = F.context;
        continue;
      }
      if (i(P) && "@context" in P && (P = P["@context"]), !i(P))
        throw new t(
          "Invalid JSON-LD syntax; @context must be an object.",
          "jsonld.SyntaxError",
          { code: "invalid local context", context: P }
        );
      C = C.clone();
      const O = /* @__PURE__ */ new Map();
      if ("@version" in P) {
        if (P["@version"] !== 1.1)
          throw new t(
            "Unsupported JSON-LD version: " + P["@version"],
            "jsonld.UnsupportedVersion",
            { code: "invalid @version value", context: P }
          );
        if (m.processingMode && m.processingMode === "json-ld-1.0")
          throw new t(
            "@version: " + P["@version"] + " not compatible with " + m.processingMode,
            "jsonld.ProcessingModeConflict",
            { code: "processing mode conflict", context: P }
          );
        C.processingMode = "json-ld-1.1", C["@version"] = P["@version"], O.set("@version", !0);
      }
      if (C.processingMode = C.processingMode || m.processingMode, "@base" in P) {
        let G = P["@base"];
        if (!(G === null || s(G))) if (a(G))
          G = c(C["@base"], G);
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.',
            "jsonld.SyntaxError",
            { code: "invalid base IRI", context: P }
          );
        C["@base"] = G, O.set("@base", !0);
      }
      if ("@vocab" in P) {
        const G = P["@vocab"];
        if (G === null)
          delete C["@vocab"];
        else if (o(G)) {
          if (!s(G) && b.processingMode(C, 1))
            throw new t(
              'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.',
              "jsonld.SyntaxError",
              { code: "invalid vocab mapping", context: P }
            );
          {
            const k = I(
              C,
              G,
              { vocab: !0, base: !0 },
              void 0,
              void 0,
              u
            );
            s(k) || u.eventHandler && l({
              event: {
                type: ["JsonLdEvent"],
                code: "relative @vocab reference",
                level: "warning",
                message: "Relative @vocab reference found.",
                details: {
                  vocab: k
                }
              },
              options: u
            }), C["@vocab"] = k;
          }
        } else throw new t(
          'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be a string or null.',
          "jsonld.SyntaxError",
          { code: "invalid vocab mapping", context: P }
        );
        O.set("@vocab", !0);
      }
      if ("@language" in P) {
        const G = P["@language"];
        if (G === null)
          delete C["@language"];
        else if (o(G))
          G.match(p) || u.eventHandler && l({
            event: {
              type: ["JsonLdEvent"],
              code: "invalid @language value",
              level: "warning",
              message: "@language value must be valid BCP47.",
              details: {
                language: G
              }
            },
            options: u
          }), C["@language"] = G.toLowerCase();
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@language" in a @context must be a string or null.',
            "jsonld.SyntaxError",
            { code: "invalid default language", context: P }
          );
        O.set("@language", !0);
      }
      if ("@direction" in P) {
        const G = P["@direction"];
        if (m.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @direction not compatible with " + m.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context member", context: P }
          );
        if (G === null)
          delete C["@direction"];
        else {
          if (G !== "ltr" && G !== "rtl")
            throw new t(
              'Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", context: P }
            );
          C["@direction"] = G;
        }
        O.set("@direction", !0);
      }
      if ("@propagate" in P) {
        const G = P["@propagate"];
        if (m.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @propagate not compatible with " + m.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: P }
          );
        if (typeof G != "boolean")
          throw new t(
            "Invalid JSON-LD syntax; @propagate value must be a boolean.",
            "jsonld.SyntaxError",
            { code: "invalid @propagate value", context: d }
          );
        O.set("@propagate", !0);
      }
      if ("@import" in P) {
        const G = P["@import"];
        if (m.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @import not compatible with " + m.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: P }
          );
        if (!o(G))
          throw new t(
            "Invalid JSON-LD syntax; @import must be a string.",
            "jsonld.SyntaxError",
            { code: "invalid @import value", context: d }
          );
        const k = await u.contextResolver.resolve({
          activeCtx: m,
          context: G,
          documentLoader: u.documentLoader,
          base: u.base
        });
        if (k.length !== 1)
          throw new t(
            "Invalid JSON-LD syntax; @import must reference a single context.",
            "jsonld.SyntaxError",
            { code: "invalid remote context", context: d }
          );
        const M = k[0].getProcessed(m);
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
          k[0].setProcessed(m, P);
        }
        O.set("@import", !0);
      }
      O.set("@protected", P["@protected"] || !1);
      for (const G in P)
        if (b.createTermDefinition({
          activeCtx: C,
          localCtx: P,
          term: G,
          defined: O,
          options: u,
          overrideProtected: S
        }), i(P[G]) && "@context" in P[G]) {
          const k = P[G]["@context"];
          let M = !0;
          if (o(k)) {
            const V = c(u.base, k);
            A.has(V) ? M = !1 : A.add(V);
          }
          if (M)
            try {
              await b.process({
                activeCtx: C.clone(),
                localCtx: P[G]["@context"],
                overrideProtected: !0,
                options: u,
                cycles: A
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
      D.setProcessed(m, {
        context: C,
        events: R
      });
    }
    return C;
  }, b.createTermDefinition = ({
    activeCtx: m,
    localCtx: d,
    term: u,
    defined: w,
    options: S,
    overrideProtected: A = !1
  }) => {
    if (w.has(u)) {
      if (w.get(u))
        return;
      throw new t(
        "Cyclical context definition detected.",
        "jsonld.CyclicalContext",
        { code: "cyclic IRI mapping", context: d, term: u }
      );
    }
    w.set(u, !1);
    let j;
    if (d.hasOwnProperty(u) && (j = d[u]), u === "@type" && i(j) && (j["@container"] || "@set") === "@set" && b.processingMode(m, 1.1)) {
      const P = ["@container", "@id", "@protected"], F = Object.keys(j);
      if (F.length === 0 || F.some((O) => !P.includes(O)))
        throw new t(
          "Invalid JSON-LD syntax; keywords cannot be overridden.",
          "jsonld.SyntaxError",
          { code: "keyword redefinition", context: d, term: u }
        );
    } else {
      if (b.isKeyword(u))
        throw new t(
          "Invalid JSON-LD syntax; keywords cannot be overridden.",
          "jsonld.SyntaxError",
          { code: "keyword redefinition", context: d, term: u }
        );
      if (u.match(y)) {
        S.eventHandler && l({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved term",
            level: "warning",
            message: 'Terms beginning with "@" are reserved for future use and dropped.',
            details: {
              term: u
            }
          },
          options: S
        });
        return;
      } else if (u === "")
        throw new t(
          "Invalid JSON-LD syntax; a term cannot be an empty string.",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
    }
    const R = m.mappings.get(u);
    m.mappings.has(u) && m.mappings.delete(u);
    let E = !1;
    if ((o(j) || j === null) && (E = !0, j = { "@id": j }), !i(j))
      throw new t(
        "Invalid JSON-LD syntax; @context term values must be strings or objects.",
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: d }
      );
    const L = {};
    m.mappings.set(u, L), L.reverse = !1;
    const _ = ["@container", "@id", "@language", "@reverse", "@type"];
    b.processingMode(m, 1.1) && _.push(
      "@context",
      "@direction",
      "@index",
      "@nest",
      "@prefix",
      "@protected"
    );
    for (const P in j)
      if (!_.includes(P))
        throw new t(
          "Invalid JSON-LD syntax; a term definition must not contain " + P,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
    const C = u.indexOf(":");
    if (L._termHasColon = C > 0, "@reverse" in j) {
      if ("@id" in j)
        throw new t(
          "Invalid JSON-LD syntax; a @reverse term definition must not contain @id.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: d }
        );
      if ("@nest" in j)
        throw new t(
          "Invalid JSON-LD syntax; a @reverse term definition must not contain @nest.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: d }
        );
      const P = j["@reverse"];
      if (!o(P))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      if (P.match(y)) {
        S.eventHandler && l({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved @reverse value",
            level: "warning",
            message: '@reverse values beginning with "@" are reserved for future use and dropped.',
            details: {
              reverse: P
            }
          },
          options: S
        }), R ? m.mappings.set(u, R) : m.mappings.delete(u);
        return;
      }
      const F = I(
        m,
        P,
        { vocab: !0, base: !1 },
        d,
        w,
        S
      );
      if (!s(F))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      L["@id"] = F, L.reverse = !0;
    } else if ("@id" in j) {
      let P = j["@id"];
      if (P && !o(P))
        throw new t(
          "Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      if (P === null)
        L["@id"] = null;
      else if (!b.isKeyword(P) && P.match(y)) {
        S.eventHandler && l({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved @id value",
            level: "warning",
            message: '@id values beginning with "@" are reserved for future use and dropped.',
            details: {
              id: P
            }
          },
          options: S
        }), R ? m.mappings.set(u, R) : m.mappings.delete(u);
        return;
      } else if (P !== u) {
        if (P = I(
          m,
          P,
          { vocab: !0, base: !1 },
          d,
          w,
          S
        ), !s(P) && !b.isKeyword(P))
          throw new t(
            "Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: d }
          );
        if (u.match(/(?::[^:])|\//)) {
          const F = new Map(w).set(u, !0);
          if (I(
            m,
            u,
            { vocab: !0, base: !1 },
            d,
            F,
            S
          ) !== P)
            throw new t(
              "Invalid JSON-LD syntax; term in form of IRI must expand to definition.",
              "jsonld.SyntaxError",
              { code: "invalid IRI mapping", context: d }
            );
        }
        L["@id"] = P, L._prefix = E && !L._termHasColon && P.match(/[:\/\?#\[\]@]$/) !== null;
      }
    }
    if (!("@id" in L))
      if (L._termHasColon) {
        const P = u.substr(0, C);
        if (d.hasOwnProperty(P) && b.createTermDefinition({
          activeCtx: m,
          localCtx: d,
          term: P,
          defined: w,
          options: S
        }), m.mappings.has(P)) {
          const F = u.substr(C + 1);
          L["@id"] = m.mappings.get(P)["@id"] + F;
        } else
          L["@id"] = u;
      } else if (u === "@type")
        L["@id"] = u;
      else {
        if (!("@vocab" in m))
          throw new t(
            "Invalid JSON-LD syntax; @context terms must define an @id.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: d, term: u }
          );
        L["@id"] = m["@vocab"] + u;
      }
    if ((j["@protected"] === !0 || w.get("@protected") === !0 && j["@protected"] !== !1) && (m.protected[u] = !0, L.protected = !0), w.set(u, !0), "@type" in j) {
      let P = j["@type"];
      if (!o(P))
        throw new t(
          "Invalid JSON-LD syntax; an @context @type value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid type mapping", context: d }
        );
      if (P === "@json" || P === "@none") {
        if (b.processingMode(m, 1))
          throw new t(
            `Invalid JSON-LD syntax; an @context @type value must not be "${P}" in JSON-LD 1.0 mode.`,
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
      } else if (P !== "@id" && P !== "@vocab") {
        if (P = I(
          m,
          P,
          { vocab: !0, base: !1 },
          d,
          w,
          S
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
      L["@type"] = P;
    }
    if ("@container" in j) {
      const P = o(j["@container"]) ? [j["@container"]] : j["@container"] || [], F = ["@list", "@set", "@index", "@language"];
      let O = !0;
      const G = P.includes("@set");
      if (b.processingMode(m, 1.1)) {
        if (F.push("@graph", "@id", "@type"), P.includes("@list")) {
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
          O &= P.length <= (G ? 2 : 1);
        if (P.includes("@type") && (L["@type"] = L["@type"] || "@id", !["@id", "@vocab"].includes(L["@type"])))
          throw new t(
            "Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
      } else
        O &= !n(j["@container"]), O &= P.length <= 1;
      if (O &= P.every((k) => F.includes(k)), O &= !(G && P.includes("@list")), !O)
        throw new t(
          "Invalid JSON-LD syntax; @context @container value must be one of the following: " + F.join(", "),
          "jsonld.SyntaxError",
          { code: "invalid container mapping", context: d }
        );
      if (L.reverse && !P.every((k) => ["@index", "@set"].includes(k)))
        throw new t(
          "Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: d }
        );
      L["@container"] = P;
    }
    if ("@index" in j) {
      if (!("@container" in j) || !L["@container"].includes("@index"))
        throw new t(
          `Invalid JSON-LD syntax; @index without @index in @container: "${j["@index"]}" on term "${u}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (!o(j["@index"]) || j["@index"].indexOf("@") === 0)
        throw new t(
          `Invalid JSON-LD syntax; @index must expand to an IRI: "${j["@index"]}" on term "${u}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      L["@index"] = j["@index"];
    }
    if ("@context" in j && (L["@context"] = j["@context"]), "@language" in j && !("@type" in j)) {
      let P = j["@language"];
      if (P !== null && !o(P))
        throw new t(
          "Invalid JSON-LD syntax; @context @language value must be a string or null.",
          "jsonld.SyntaxError",
          { code: "invalid language mapping", context: d }
        );
      P !== null && (P = P.toLowerCase()), L["@language"] = P;
    }
    if ("@prefix" in j) {
      if (u.match(/:|\//))
        throw new t(
          "Invalid JSON-LD syntax; @context @prefix used on a compact IRI term",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (b.isKeyword(L["@id"]))
        throw new t(
          "Invalid JSON-LD syntax; keywords may not be used as prefixes",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (typeof j["@prefix"] == "boolean")
        L._prefix = j["@prefix"] === !0;
      else
        throw new t(
          "Invalid JSON-LD syntax; @context value for @prefix must be boolean",
          "jsonld.SyntaxError",
          { code: "invalid @prefix value", context: d }
        );
    }
    if ("@direction" in j) {
      const P = j["@direction"];
      if (P !== null && P !== "ltr" && P !== "rtl")
        throw new t(
          'Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".',
          "jsonld.SyntaxError",
          { code: "invalid base direction", context: d }
        );
      L["@direction"] = P;
    }
    if ("@nest" in j) {
      const P = j["@nest"];
      if (!o(P) || P !== "@nest" && P.indexOf("@") === 0)
        throw new t(
          "Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.",
          "jsonld.SyntaxError",
          { code: "invalid @nest value", context: d }
        );
      L["@nest"] = P;
    }
    // disallow aliasing @context and @preserve
    const D = L["@id"];
    if (D === "@context" || D === "@preserve")
      throw new t(
        "Invalid JSON-LD syntax; @context and @preserve cannot be aliased.",
        "jsonld.SyntaxError",
        { code: "invalid keyword alias", context: d }
      );
    if (R && R.protected && !A && (m.protected[u] = !0, L.protected = !0, !g(R, L)))
      throw new t(
        "Invalid JSON-LD syntax; tried to redefine a protected term.",
        "jsonld.SyntaxError",
        { code: "protected term redefinition", context: d, term: u }
      );
  }, b.expandIri = (m, d, u, w) => I(
    m,
    d,
    u,
    void 0,
    void 0,
    w
  );
  function I(m, d, u, w, S, A) {
    if (d === null || !o(d) || b.isKeyword(d))
      return d;
    if (d.match(y))
      return null;
    if (w && w.hasOwnProperty(d) && S.get(d) !== !0 && b.createTermDefinition({
      activeCtx: m,
      localCtx: w,
      term: d,
      defined: S,
      options: A
    }), u = u || {}, u.vocab) {
      const R = m.mappings.get(d);
      if (R === null)
        return null;
      if (i(R) && "@id" in R)
        return R["@id"];
    }
    const j = d.indexOf(":");
    if (j > 0) {
      const R = d.substr(0, j), E = d.substr(j + 1);
      if (R === "_" || E.indexOf("//") === 0)
        return d;
      w && w.hasOwnProperty(R) && b.createTermDefinition({
        activeCtx: m,
        localCtx: w,
        term: R,
        defined: S,
        options: A
      });
      const L = m.mappings.get(R);
      if (L && L._prefix)
        return L["@id"] + E;
      if (s(d))
        return d;
    }
    if (u.vocab && "@vocab" in m)
      d = m["@vocab"] + d;
    else if (u.base) {
      let R, E;
      "@base" in m ? m["@base"] ? (E = c(A.base, m["@base"]), R = c(E, d)) : (E = m["@base"], R = d) : (E = A.base, R = c(A.base, d)), d = R;
    }
    return d;
  }
  b.getInitialContext = (m) => {
    const d = JSON.stringify({ processingMode: m.processingMode }), u = v.get(d);
    if (u)
      return u;
    const w = {
      processingMode: m.processingMode,
      mappings: /* @__PURE__ */ new Map(),
      inverse: null,
      getInverse: S,
      clone: R,
      revertToPreviousContext: E,
      protected: {}
    };
    return v.size === x && v.clear(), v.set(d, w), w;
    function S() {
      const L = this;
      if (L.inverse)
        return L.inverse;
      const _ = L.inverse = {}, C = L.fastCurieMap = {}, D = {}, P = (L["@language"] || "@none").toLowerCase(), F = L["@direction"], O = L.mappings, G = [...O.keys()].sort(h);
      for (const k of G) {
        const M = O.get(k);
        if (M === null)
          continue;
        let V = M["@container"] || "@none";
        if (V = [].concat(V).sort().join(""), M["@id"] === null)
          continue;
        const N = f(M["@id"]);
        for (const $ of N) {
          let q = _[$];
          const T = b.isKeyword($);
          if (q)
            !T && !M._termHasColon && D[$].push(k);
          else if (_[$] = q = {}, !T && !M._termHasColon) {
            D[$] = [k];
            const z = { iri: $, terms: D[$] };
            $[0] in C ? C[$[0]].push(z) : C[$[0]] = [z];
          }
          if (q[V] || (q[V] = {
            "@language": {},
            "@type": {},
            "@any": {}
          }), q = q[V], j(k, q["@any"], "@none"), M.reverse)
            j(k, q["@type"], "@reverse");
          else if (M["@type"] === "@none")
            j(k, q["@any"], "@none"), j(k, q["@language"], "@none"), j(k, q["@type"], "@none");
          else if ("@type" in M)
            j(k, q["@type"], M["@type"]);
          else if ("@language" in M && "@direction" in M) {
            const z = M["@language"], H = M["@direction"];
            z && H ? j(
              k,
              q["@language"],
              `${z}_${H}`.toLowerCase()
            ) : z ? j(k, q["@language"], z.toLowerCase()) : H ? j(k, q["@language"], `_${H}`) : j(k, q["@language"], "@null");
          } else "@language" in M ? j(
            k,
            q["@language"],
            (M["@language"] || "@null").toLowerCase()
          ) : "@direction" in M ? M["@direction"] ? j(
            k,
            q["@language"],
            `_${M["@direction"]}`
          ) : j(k, q["@language"], "@none") : F ? (j(k, q["@language"], `_${F}`), j(k, q["@language"], "@none"), j(k, q["@type"], "@none")) : (j(k, q["@language"], P), j(k, q["@language"], "@none"), j(k, q["@type"], "@none"));
        }
      }
      for (const k in C)
        A(C, k, 1);
      return _;
    }
    function A(L, _, C) {
      const D = L[_], P = L[_] = {};
      let F, O;
      for (const G of D)
        F = G.iri, C >= F.length ? O = "" : O = F[C], O in P ? P[O].push(G) : P[O] = [G];
      for (const G in P)
        G !== "" && A(P, G, C + 1);
    }
    function j(L, _, C) {
      _.hasOwnProperty(C) || (_[C] = L);
    }
    function R() {
      const L = {};
      return L.mappings = e.clone(this.mappings), L.clone = this.clone, L.inverse = null, L.getInverse = this.getInverse, L.protected = e.clone(this.protected), this.previousContext && (L.previousContext = this.previousContext.clone()), L.revertToPreviousContext = this.revertToPreviousContext, "@base" in this && (L["@base"] = this["@base"]), "@language" in this && (L["@language"] = this["@language"]), "@vocab" in this && (L["@vocab"] = this["@vocab"]), L;
    }
    function E() {
      return this.previousContext ? this.previousContext.clone() : this;
    }
  }, b.getContextValue = (m, d, u) => {
    if (d === null)
      return u === "@context" ? void 0 : null;
    if (m.mappings.has(d)) {
      const w = m.mappings.get(d);
      if (r(u))
        return w;
      if (w.hasOwnProperty(u))
        return w[u];
    }
    if (u === "@language" && u in m || u === "@direction" && u in m)
      return m[u];
    if (u !== "@context")
      return null;
  }, b.processingMode = (m, d) => d.toString() >= "1.1" ? !m.processingMode || m.processingMode >= "json-ld-" + d.toString() : m.processingMode === "json-ld-1.0", b.isKeyword = (m) => {
    if (!o(m) || m[0] !== "@")
      return !1;
    switch (m) {
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
  function g(m, d) {
    if (!(m && typeof m == "object") || !(d && typeof d == "object"))
      return m === d;
    const u = Array.isArray(m);
    if (u !== Array.isArray(d))
      return !1;
    if (u) {
      if (m.length !== d.length)
        return !1;
      for (let A = 0; A < m.length; ++A)
        if (!g(m[A], d[A]))
          return !1;
      return !0;
    }
    const w = Object.keys(m), S = Object.keys(d);
    if (w.length !== S.length)
      return !1;
    for (const A in m) {
      let j = m[A], R = d[A];
      if (A === "@container" && Array.isArray(j) && Array.isArray(R) && (j = j.slice().sort(), R = R.slice().sort()), !g(j, R))
        return !1;
    }
    return !0;
  }
  return hs;
}
var ms, Yc;
function Vh() {
  if (Yc) return ms;
  Yc = 1;
  const e = Ze(), {
    isArray: t,
    isObject: n,
    isEmptyObject: i,
    isString: o,
    isUndefined: r
  } = Oe(), {
    isList: s,
    isValue: a,
    isGraph: c,
    isSubject: l
  } = St(), {
    expandIri: p,
    getContextValue: y,
    isKeyword: f,
    process: h,
    processingMode: v
  } = Ht(), {
    isAbsolute: x
  } = Mt(), {
    REGEX_BCP47: b,
    REGEX_KEYWORD: I,
    addValue: g,
    asArray: m,
    getValues: d,
    validateTypeValue: u
  } = Be(), {
    handleEvent: w
  } = Ln(), S = {};
  ms = S, S.expand = async ({
    activeCtx: _,
    activeProperty: C = null,
    element: D,
    options: P = {},
    insideList: F = !1,
    insideIndex: O = !1,
    typeScopedContext: G = null
  }) => {
    if (D == null)
      return null;
    if (C === "@default" && (P = Object.assign({}, P, { isFrame: !1 })), !t(D) && !n(D))
      return !F && (C === null || p(
        _,
        C,
        { vocab: !0 },
        P
      ) === "@graph") ? (P.eventHandler && w({
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
      }), null) : R({ activeCtx: _, activeProperty: C, value: D, options: P });
    if (t(D)) {
      let z = [];
      const H = y(
        _,
        C,
        "@container"
      ) || [];
      F = F || H.includes("@list");
      for (let Q = 0; Q < D.length; ++Q) {
        let J = await S.expand({
          activeCtx: _,
          activeProperty: C,
          element: D[Q],
          options: P,
          insideIndex: O,
          typeScopedContext: G
        });
        F && t(J) && (J = { "@list": J }), J !== null && (t(J) ? z = z.concat(J) : z.push(J));
      }
      return z;
    }
    const k = p(
      _,
      C,
      { vocab: !0 },
      P
    ), M = y(_, C, "@context");
    G = G || (_.previousContext ? _ : null);
    let V = Object.keys(D).sort(), N = !O;
    if (N && G && V.length <= 2 && !V.includes("@context"))
      for (const z of V) {
        const H = p(
          G,
          z,
          { vocab: !0 },
          P
        );
        if (H === "@value") {
          N = !1, _ = G;
          break;
        }
        if (H === "@id" && V.length === 1) {
          N = !1;
          break;
        }
      }
    N && (_ = _.revertToPreviousContext()), r(M) || (_ = await h({
      activeCtx: _,
      localCtx: M,
      propagate: !0,
      overrideProtected: !0,
      options: P
    })), "@context" in D && (_ = await h(
      { activeCtx: _, localCtx: D["@context"], options: P }
    )), G = _;
    let $ = null;
    for (const z of V)
      if (p(_, z, { vocab: !0 }, P) === "@type") {
        $ = $ || z;
        const Q = D[z], J = Array.isArray(Q) ? Q.length > 1 ? Q.slice().sort() : Q : [Q];
        for (const U of J) {
          const B = y(G, U, "@context");
          r(B) || (_ = await h({
            activeCtx: _,
            localCtx: B,
            options: P,
            propagate: !1
          }));
        }
      }
    let q = {};
    await j({
      activeCtx: _,
      activeProperty: C,
      expandedActiveProperty: k,
      element: D,
      expandedParent: q,
      options: P,
      insideList: F,
      typeKey: $,
      typeScopedContext: G
    }), V = Object.keys(q);
    let T = V.length;
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
      const H = q["@value"] === null ? [] : m(q["@value"]), Q = d(q, "@type");
      if (!(v(_, 1.1) && Q.includes("@json") && Q.length === 1)) if (H.length === 0)
        P.eventHandler && w({
          event: {
            type: ["JsonLdEvent"],
            code: "null @value value",
            level: "warning",
            message: "Dropping null @value value.",
            details: {
              value: q
            }
          },
          options: P
        }), q = null;
      else {
        if (!H.every((J) => o(J) || i(J)) && "@language" in q)
          throw new e(
            "Invalid JSON-LD syntax; only strings may be language-tagged.",
            "jsonld.SyntaxError",
            { code: "invalid language-tagged value", element: q }
          );
        if (!Q.every((J) => x(J) && !(o(J) && J.indexOf("_:") === 0) || i(J)))
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
    } else T === 1 && "@language" in q && (P.eventHandler && w({
      event: {
        type: ["JsonLdEvent"],
        code: "object with only @language",
        level: "warning",
        message: "Dropping object with only @language.",
        details: {
          value: q
        }
      },
      options: P
    }), q = null);
    return n(q) && !P.keepFreeFloatingNodes && !F && (C === null || k === "@graph" || (y(_, C, "@container") || []).includes("@graph")) && (q = A({ value: q, count: T, options: P })), q;
  };
  function A({
    value: _,
    count: C,
    options: D
  }) {
    if (C === 0 || "@value" in _ || "@list" in _ || C === 1 && "@id" in _) {
      if (D.eventHandler) {
        let P, F;
        C === 0 ? (P = "empty object", F = "Dropping empty object.") : "@value" in _ ? (P = "object with only @value", F = "Dropping object with only @value.") : "@list" in _ ? (P = "object with only @list", F = "Dropping object with only @list.") : C === 1 && "@id" in _ && (P = "object with only @id", F = "Dropping object with only @id."), w({
          event: {
            type: ["JsonLdEvent"],
            code: P,
            level: "warning",
            message: F,
            details: {
              value: _
            }
          },
          options: D
        });
      }
      return null;
    }
    return _;
  }
  async function j({
    activeCtx: _,
    activeProperty: C,
    expandedActiveProperty: D,
    element: P,
    expandedParent: F,
    options: O = {},
    insideList: G,
    typeKey: k,
    typeScopedContext: M
  }) {
    const V = Object.keys(P).sort(), N = [];
    let $;
    const q = P[k] && p(
      _,
      t(P[k]) ? P[k][0] : P[k],
      { vocab: !0 },
      {
        ...O,
        typeExpansion: !0
      }
    ) === "@json";
    for (const T of V) {
      let z = P[T], H;
      if (T === "@context")
        continue;
      const Q = p(_, T, { vocab: !0 }, O);
      if (Q === null || !(x(Q) || f(Q))) {
        O.eventHandler && w({
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
          options: O
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
          if (!O.isFrame)
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
        g(
          F,
          "@id",
          m(z).map((Z) => {
            if (o(Z)) {
              const K = p(_, Z, { base: !0 }, O);
              return O.eventHandler && (K === null ? w(Z === null ? {
                event: {
                  type: ["JsonLdEvent"],
                  code: "null @id value",
                  level: "warning",
                  message: "Null @id found.",
                  details: {
                    id: Z
                  }
                },
                options: O
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
                options: O
              }) : x(K) || w({
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
                options: O
              })), K;
            }
            return Z;
          }),
          { propertyIsArray: O.isFrame }
        );
        continue;
      }
      if (Q === "@type") {
        n(z) && (z = Object.fromEntries(Object.entries(z).map(([Z, K]) => [
          p(M, Z, { vocab: !0 }),
          m(K).map(
            (W) => p(
              M,
              W,
              { base: !0, vocab: !0 },
              { ...O, typeExpansion: !0 }
            )
          )
        ]))), u(z, O.isFrame), g(
          F,
          "@type",
          m(z).map((Z) => {
            if (o(Z)) {
              const K = p(
                M,
                Z,
                { base: !0, vocab: !0 },
                { ...O, typeExpansion: !0 }
              );
              return K !== "@json" && !x(K) && O.eventHandler && w({
                event: {
                  type: ["JsonLdEvent"],
                  code: "relative @type reference",
                  level: "warning",
                  message: "Relative @type reference found.",
                  details: {
                    type: Z
                  }
                },
                options: O
              }), K;
            }
            return Z;
          }),
          { propertyIsArray: !!O.isFrame }
        );
        continue;
      }
      if (Q === "@included" && v(_, 1.1)) {
        const Z = m(await S.expand({
          activeCtx: _,
          activeProperty: C,
          element: z,
          options: O
        }));
        if (!Z.every((K) => l(K)))
          throw new e(
            "Invalid JSON-LD syntax; values of @included must expand to node objects.",
            "jsonld.SyntaxError",
            { code: "invalid @included value", value: z }
          );
        g(
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
        $ = z, q && v(_, 1.1) ? F["@value"] = z : g(
          F,
          "@value",
          z,
          { propertyIsArray: O.isFrame }
        );
        continue;
      }
      if (Q === "@language") {
        if (z === null)
          continue;
        if (!o(z) && !O.isFrame)
          throw new e(
            'Invalid JSON-LD syntax; "@language" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid language-tagged string", value: z }
          );
        z = m(z).map((Z) => o(Z) ? Z.toLowerCase() : Z);
        for (const Z of z)
          o(Z) && !Z.match(b) && O.eventHandler && w({
            event: {
              type: ["JsonLdEvent"],
              code: "invalid @language value",
              level: "warning",
              message: "@language value must be valid BCP47.",
              details: {
                language: Z
              }
            },
            options: O
          });
        g(
          F,
          "@language",
          z,
          { propertyIsArray: O.isFrame }
        );
        continue;
      }
      if (Q === "@direction") {
        if (!o(z) && !O.isFrame)
          throw new e(
            'Invalid JSON-LD syntax; "@direction" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid base direction", value: z }
          );
        z = m(z);
        for (const Z of z)
          if (o(Z) && Z !== "ltr" && Z !== "rtl")
            throw new e(
              'Invalid JSON-LD syntax; "@direction" must be "ltr" or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", value: z }
            );
        g(
          F,
          "@direction",
          z,
          { propertyIsArray: O.isFrame }
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
        g(F, "@index", z);
        continue;
      }
      if (Q === "@reverse") {
        if (!n(z))
          throw new e(
            'Invalid JSON-LD syntax; "@reverse" value must be an object.',
            "jsonld.SyntaxError",
            { code: "invalid @reverse value", value: z }
          );
        if (H = await S.expand({
          activeCtx: _,
          activeProperty: "@reverse",
          element: z,
          options: O
        }), "@reverse" in H)
          for (const K in H["@reverse"])
            g(
              F,
              K,
              H["@reverse"][K],
              { propertyIsArray: !0 }
            );
        let Z = F["@reverse"] || null;
        for (const K in H) {
          if (K === "@reverse")
            continue;
          Z === null && (Z = F["@reverse"] = {}), g(Z, K, [], { propertyIsArray: !0 });
          const W = H[K];
          for (let ee = 0; ee < W.length; ++ee) {
            const re = W[ee];
            if (a(re) || s(re))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: H }
              );
            g(Z, K, re, { propertyIsArray: !0 });
          }
        }
        continue;
      }
      if (Q === "@nest") {
        N.push(T);
        continue;
      }
      let J = _;
      const U = y(_, T, "@context");
      r(U) || (J = await h({
        activeCtx: _,
        localCtx: U,
        propagate: !0,
        overrideProtected: !0,
        options: O
      }));
      const B = y(_, T, "@container") || [];
      if (B.includes("@language") && n(z)) {
        const Z = y(J, T, "@direction");
        H = E(J, z, Z, O);
      } else if (B.includes("@index") && n(z)) {
        const Z = B.includes("@graph"), K = y(J, T, "@index") || "@index", W = K !== "@index" && p(_, K, { vocab: !0 }, O);
        H = await L({
          activeCtx: J,
          options: O,
          activeProperty: T,
          value: z,
          asGraph: Z,
          indexKey: K,
          propertyIndex: W
        });
      } else if (B.includes("@id") && n(z)) {
        const Z = B.includes("@graph");
        H = await L({
          activeCtx: J,
          options: O,
          activeProperty: T,
          value: z,
          asGraph: Z,
          indexKey: "@id"
        });
      } else if (B.includes("@type") && n(z))
        H = await L({
          // since container is `@type`, revert type scoped context when expanding
          activeCtx: J.revertToPreviousContext(),
          options: O,
          activeProperty: T,
          value: z,
          asGraph: !1,
          indexKey: "@type"
        });
      else {
        const Z = Q === "@list";
        if (Z || Q === "@set") {
          let K = C;
          Z && D === "@graph" && (K = null), H = await S.expand({
            activeCtx: J,
            activeProperty: K,
            element: z,
            options: O,
            insideList: Z
          });
        } else y(_, T, "@type") === "@json" ? H = {
          "@type": "@json",
          "@value": z
        } : H = await S.expand({
          activeCtx: J,
          activeProperty: T,
          element: z,
          options: O,
          insideList: !1
        });
      }
      if (!(H === null && Q !== "@value")) {
        if (Q !== "@list" && !s(H) && B.includes("@list") && (H = { "@list": m(H) }), B.includes("@graph") && !B.some((Z) => Z === "@id" || Z === "@index")) {
          if (H = m(H), O.isFrame || (H = H.filter((Z) => {
            const K = Object.keys(Z).length;
            return A({ value: Z, count: K, options: O }) !== null;
          })), H.length === 0)
            continue;
          H = H.map((Z) => ({ "@graph": m(Z) }));
        }
        if (J.mappings.has(T) && J.mappings.get(T).reverse) {
          const Z = F["@reverse"] = F["@reverse"] || {};
          H = m(H);
          for (let K = 0; K < H.length; ++K) {
            const W = H[K];
            if (a(W) || s(W))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: H }
              );
            g(Z, Q, W, { propertyIsArray: !0 });
          }
          continue;
        }
        g(F, Q, H, {
          propertyIsArray: !0
        });
      }
    }
    if ("@value" in F && !(F["@type"] === "@json" && v(_, 1.1))) {
      if ((n($) || t($)) && !O.isFrame)
        throw new e(
          'Invalid JSON-LD syntax; "@value" value must not be an object or an array.',
          "jsonld.SyntaxError",
          { code: "invalid value object value", value: $ }
        );
    }
    for (const T of N) {
      const z = t(P[T]) ? P[T] : [P[T]];
      for (const H of z) {
        if (!n(H) || Object.keys(H).some((Q) => p(_, Q, { vocab: !0 }, O) === "@value"))
          throw new e(
            "Invalid JSON-LD syntax; nested value must be a node object.",
            "jsonld.SyntaxError",
            { code: "invalid @nest value", value: H }
          );
        await j({
          activeCtx: _,
          activeProperty: C,
          expandedActiveProperty: D,
          element: H,
          expandedParent: F,
          options: O,
          insideList: G,
          typeScopedContext: M,
          typeKey: k
        });
      }
    }
  }
  function R({ activeCtx: _, activeProperty: C, value: D, options: P }) {
    if (D == null)
      return null;
    const F = p(
      _,
      C,
      { vocab: !0 },
      P
    );
    if (F === "@id")
      return p(_, D, { base: !0 }, P);
    if (F === "@type")
      return p(
        _,
        D,
        { vocab: !0, base: !0 },
        { ...P, typeExpansion: !0 }
      );
    const O = y(_, C, "@type");
    if ((O === "@id" || F === "@graph") && o(D)) {
      const k = p(_, D, { base: !0 }, P);
      return k === null && D.match(I) && P.eventHandler && w({
        event: {
          type: ["JsonLdEvent"],
          code: "reserved @id value",
          level: "warning",
          message: "Reserved @id found.",
          details: {
            id: C
          }
        },
        options: P
      }), { "@id": k };
    }
    if (O === "@vocab" && o(D))
      return {
        "@id": p(_, D, { vocab: !0, base: !0 }, P)
      };
    if (f(F))
      return D;
    const G = {};
    if (O && !["@id", "@vocab", "@none"].includes(O))
      G["@type"] = O;
    else if (o(D)) {
      const k = y(_, C, "@language");
      k !== null && (G["@language"] = k);
      const M = y(_, C, "@direction");
      M !== null && (G["@direction"] = M);
    }
    return ["boolean", "number", "string"].includes(typeof D) || (D = D.toString()), G["@value"] = D, G;
  }
  function E(_, C, D, P) {
    const F = [], O = Object.keys(C).sort();
    for (const G of O) {
      const k = p(_, G, { vocab: !0 }, P);
      let M = C[G];
      t(M) || (M = [M]);
      for (const V of M) {
        if (V === null)
          continue;
        if (!o(V))
          throw new e(
            "Invalid JSON-LD syntax; language map values must be strings.",
            "jsonld.SyntaxError",
            { code: "invalid language map value", languageMap: C }
          );
        const N = { "@value": V };
        k !== "@none" && (G.match(b) || P.eventHandler && w({
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
        }), N["@language"] = G.toLowerCase()), D && (N["@direction"] = D), F.push(N);
      }
    }
    return F;
  }
  async function L({
    activeCtx: _,
    options: C,
    activeProperty: D,
    value: P,
    asGraph: F,
    indexKey: O,
    propertyIndex: G
  }) {
    const k = [], M = Object.keys(P).sort(), V = O === "@type";
    for (let N of M) {
      if (V) {
        const T = y(_, N, "@context");
        r(T) || (_ = await h({
          activeCtx: _,
          localCtx: T,
          propagate: !1,
          options: C
        }));
      }
      let $ = P[N];
      t($) || ($ = [$]), $ = await S.expand({
        activeCtx: _,
        activeProperty: D,
        element: $,
        options: C,
        insideList: !1,
        insideIndex: !0
      });
      let q;
      G ? N === "@none" ? q = "@none" : q = R(
        { activeCtx: _, activeProperty: O, value: N, options: C }
      ) : q = p(_, N, { vocab: !0 }, C), O === "@id" ? N = p(_, N, { base: !0 }, C) : V && (N = q);
      for (let T of $) {
        if (F && !c(T) && (T = { "@graph": [T] }), O === "@type")
          q === "@none" || (T["@type"] ? T["@type"] = [N].concat(T["@type"]) : T["@type"] = [N]);
        else {
          if (a(T) && !["@language", "@type", "@index"].includes(O))
            throw new e(
              `Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${O}".`,
              "jsonld.SyntaxError",
              { code: "invalid value object", value: T }
            );
          G ? q !== "@none" && g(T, G, q, {
            propertyIsArray: !0,
            prependValue: !0
          }) : q !== "@none" && !(O in T) && (T[O] = N);
        }
        k.push(T);
      }
    }
    return k;
  }
  return ms;
}
var ys, ed;
function lr() {
  if (ed) return ys;
  ed = 1;
  const { isKeyword: e } = Ht(), t = St(), n = Oe(), i = Be(), o = Ze(), r = {};
  return ys = r, r.createMergedNodeMap = (s, a) => {
    a = a || {};
    const c = a.issuer || new i.IdentifierIssuer("_:b"), l = { "@default": {} };
    return r.createNodeMap(s, l, "@default", c), r.mergeNodeMaps(l);
  }, r.createNodeMap = (s, a, c, l, p, y) => {
    if (n.isArray(s)) {
      for (const x of s)
        r.createNodeMap(x, a, c, l, void 0, y);
      return;
    }
    if (!n.isObject(s)) {
      y && y.push(s);
      return;
    }
    if (t.isValue(s)) {
      if ("@type" in s) {
        let x = s["@type"];
        x.indexOf("_:") === 0 && (s["@type"] = x = l.getId(x));
      }
      y && y.push(s);
      return;
    } else if (y && t.isList(s)) {
      const x = [];
      r.createNodeMap(s["@list"], a, c, l, p, x), y.push({ "@list": x });
      return;
    }
    if ("@type" in s) {
      const x = s["@type"];
      for (const b of x)
        b.indexOf("_:") === 0 && l.getId(b);
    }
    n.isUndefined(p) && (p = t.isBlankNode(s) ? l.getId(s["@id"]) : s["@id"]), y && y.push({ "@id": p });
    const f = a[c], h = f[p] = f[p] || {};
    h["@id"] = p;
    const v = Object.keys(s).sort();
    for (let x of v) {
      if (x === "@id")
        continue;
      if (x === "@reverse") {
        const I = { "@id": p }, g = s["@reverse"];
        for (const m in g) {
          const d = g[m];
          for (const u of d) {
            let w = u["@id"];
            t.isBlankNode(u) && (w = l.getId(w)), r.createNodeMap(u, a, c, l, w), i.addValue(
              f[w],
              m,
              I,
              { propertyIsArray: !0, allowDuplicate: !1 }
            );
          }
        }
        continue;
      }
      if (x === "@graph") {
        p in a || (a[p] = {}), r.createNodeMap(s[x], a, p, l);
        continue;
      }
      if (x === "@included") {
        r.createNodeMap(s[x], a, c, l);
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
      if (x.indexOf("_:") === 0 && (x = l.getId(x)), b.length === 0) {
        i.addValue(h, x, [], { propertyIsArray: !0 });
        continue;
      }
      for (let I of b)
        if (x === "@type" && (I = I.indexOf("_:") === 0 ? l.getId(I) : I), t.isSubject(I) || t.isSubjectReference(I)) {
          if ("@id" in I && !I["@id"])
            continue;
          const g = t.isBlankNode(I) ? l.getId(I["@id"]) : I["@id"];
          i.addValue(
            h,
            x,
            { "@id": g },
            { propertyIsArray: !0, allowDuplicate: !1 }
          ), r.createNodeMap(I, a, c, l, g);
        } else if (t.isValue(I))
          i.addValue(
            h,
            x,
            I,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        else if (t.isList(I)) {
          const g = [];
          r.createNodeMap(I["@list"], a, c, l, p, g), I = { "@list": g }, i.addValue(
            h,
            x,
            I,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        } else
          r.createNodeMap(I, a, c, l, p), i.addValue(
            h,
            x,
            I,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
    }
  }, r.mergeNodeMapGraphs = (s) => {
    const a = {};
    for (const c of Object.keys(s).sort())
      for (const l of Object.keys(s[c]).sort()) {
        const p = s[c][l];
        l in a || (a[l] = { "@id": l });
        const y = a[l];
        for (const f of Object.keys(p).sort())
          if (e(f) && f !== "@type")
            y[f] = i.clone(p[f]);
          else
            for (const h of p[f])
              i.addValue(
                y,
                f,
                i.clone(h),
                { propertyIsArray: !0, allowDuplicate: !1 }
              );
      }
    return a;
  }, r.mergeNodeMaps = (s) => {
    const a = s["@default"], c = Object.keys(s).sort();
    for (const l of c) {
      if (l === "@default")
        continue;
      const p = s[l];
      let y = a[l];
      y ? "@graph" in y || (y["@graph"] = []) : a[l] = y = {
        "@id": l,
        "@graph": []
      };
      const f = y["@graph"];
      for (const h of Object.keys(p).sort()) {
        const v = p[h];
        t.isSubjectReference(v) || f.push(v);
      }
    }
    return a;
  }, ys;
}
var gs, td;
function Uh() {
  if (td) return gs;
  td = 1;
  const {
    isSubjectReference: e
  } = St(), {
    createMergedNodeMap: t
  } = lr(), n = {};
  return gs = n, n.flatten = (i) => {
    const o = t(i), r = [], s = Object.keys(o).sort();
    for (let a = 0; a < s.length; ++a) {
      const c = o[s[a]];
      e(c) || r.push(c);
    }
    return r;
  }, gs;
}
var vs, nd;
function Gh() {
  if (nd) return vs;
  nd = 1;
  const e = Ze(), t = St(), n = Oe(), {
    REGEX_BCP47: i,
    addValue: o
  } = Be(), {
    handleEvent: r
  } = Ln(), {
    // RDF,
    RDF_LIST: s,
    RDF_FIRST: a,
    RDF_REST: c,
    RDF_NIL: l,
    RDF_TYPE: p,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: y,
    // RDF_OBJECT,
    // RDF_LANGSTRING,
    // XSD,
    XSD_BOOLEAN: f,
    XSD_DOUBLE: h,
    XSD_INTEGER: v,
    XSD_STRING: x
  } = ya(), b = {};
  vs = b, b.fromRDF = async (g, m) => {
    const {
      useRdfType: d = !1,
      useNativeTypes: u = !1,
      rdfDirection: w = null
    } = m, S = {}, A = { "@default": S }, j = {};
    if (w) {
      if (w === "compound-literal")
        throw new e(
          "Unsupported rdfDirection value.",
          "jsonld.InvalidRdfDirection",
          { value: w }
        );
      if (w !== "i18n-datatype")
        throw new e(
          "Unknown rdfDirection value.",
          "jsonld.InvalidRdfDirection",
          { value: w }
        );
    }
    for (const L of g) {
      const _ = L.graph.termType === "DefaultGraph" ? "@default" : L.graph.value;
      _ in A || (A[_] = {}), _ !== "@default" && !(_ in S) && (S[_] = { "@id": _ });
      const C = A[_], D = L.subject.value, P = L.predicate.value, F = L.object;
      D in C || (C[D] = { "@id": D });
      const O = C[D], G = F.termType.endsWith("Node");
      if (G && !(F.value in C) && (C[F.value] = { "@id": F.value }), P === p && !d && G) {
        o(O, "@type", F.value, { propertyIsArray: !0 });
        continue;
      }
      const k = I(F, u, w, m);
      if (o(O, P, k, { propertyIsArray: !0 }), G)
        if (F.value === l) {
          const M = C[F.value];
          "usages" in M || (M.usages = []), M.usages.push({
            node: O,
            property: P,
            value: k
          });
        } else F.value in j ? j[F.value] = !1 : j[F.value] = {
          node: O,
          property: P,
          value: k
        };
    }
    for (const L in A) {
      const _ = A[L];
      if (!(l in _))
        continue;
      const C = _[l];
      if (C.usages) {
        for (let D of C.usages) {
          let P = D.node, F = D.property, O = D.value;
          const G = [], k = [];
          let M = Object.keys(P).length;
          for (; F === c && n.isObject(j[P["@id"]]) && n.isArray(P[a]) && P[a].length === 1 && n.isArray(P[c]) && P[c].length === 1 && (M === 3 || M === 4 && n.isArray(P["@type"]) && P["@type"].length === 1 && P["@type"][0] === s) && (G.push(P[a][0]), k.push(P["@id"]), D = j[P["@id"]], P = D.node, F = D.property, O = D.value, M = Object.keys(P).length, !!t.isBlankNode(P)); )
            ;
          delete O["@id"], O["@list"] = G.reverse();
          for (const V of k)
            delete _[V];
        }
        delete C.usages;
      }
    }
    const R = [], E = Object.keys(S).sort();
    for (const L of E) {
      const _ = S[L];
      if (L in A) {
        const C = _["@graph"] = [], D = A[L], P = Object.keys(D).sort();
        for (const F of P) {
          const O = D[F];
          t.isSubjectReference(O) || C.push(O);
        }
      }
      t.isSubjectReference(_) || R.push(_);
    }
    return R;
  };
  function I(g, m, d, u) {
    if (g.termType.endsWith("Node"))
      return { "@id": g.value };
    const w = { "@value": g.value };
    if (g.language)
      g.language.match(i) || u.eventHandler && r({
        event: {
          type: ["JsonLdEvent"],
          code: "invalid @language value",
          level: "warning",
          message: "@language value must be valid BCP47.",
          details: {
            language: g.language
          }
        },
        options: u
      }), w["@language"] = g.language;
    else {
      let S = g.datatype.value;
      if (S || (S = x), S === y) {
        S = "@json";
        try {
          w["@value"] = JSON.parse(w["@value"]);
        } catch (A) {
          throw new e(
            "JSON literal could not be parsed.",
            "jsonld.InvalidJsonLiteral",
            { code: "invalid JSON literal", value: w["@value"], cause: A }
          );
        }
      }
      if (m) {
        if (S === f)
          w["@value"] === "true" ? w["@value"] = !0 : w["@value"] === "false" && (w["@value"] = !1);
        else if (n.isNumeric(w["@value"]))
          if (S === v) {
            const A = parseInt(w["@value"], 10);
            A.toFixed(0) === w["@value"] && (w["@value"] = A);
          } else S === h && (w["@value"] = parseFloat(w["@value"]));
        [f, v, h, x].includes(S) || (w["@type"] = S);
      } else if (d === "i18n-datatype" && S.startsWith("https://www.w3.org/ns/i18n#")) {
        const [, A, j] = S.split(/[#_]/);
        A.length > 0 && (w["@language"] = A, A.match(i) || u.eventHandler && r({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: A
            }
          },
          options: u
        })), w["@direction"] = j;
      } else S !== x && (w["@type"] = S);
    }
    return w;
  }
  return vs;
}
var bs, id;
function Fh() {
  return id || (id = 1, bs = function e(t) {
    return t === null || typeof t != "object" || t.toJSON != null ? JSON.stringify(t) : Array.isArray(t) ? "[" + t.reduce((n, i, o) => {
      const r = o === 0 ? "" : ",", s = i === void 0 || typeof i == "symbol" ? null : i;
      return n + r + e(s);
    }, "") + "]" : "{" + Object.keys(t).sort().reduce((n, i, o) => {
      if (t[i] === void 0 || typeof t[i] == "symbol")
        return n;
      const r = n.length === 0 ? "" : ",";
      return n + r + e(i) + ":" + e(t[i]);
    }, "") + "}";
  }), bs;
}
var ws, rd;
function Bh() {
  if (rd) return ws;
  rd = 1;
  const { createNodeMap: e } = lr(), { isKeyword: t } = Ht(), n = St(), i = Fh(), o = Ze(), r = Oe(), s = Be(), {
    handleEvent: a
  } = Ln(), {
    // RDF,
    // RDF_LIST,
    RDF_FIRST: c,
    RDF_REST: l,
    RDF_NIL: p,
    RDF_TYPE: y,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: f,
    // RDF_OBJECT,
    RDF_LANGSTRING: h,
    // XSD,
    XSD_BOOLEAN: v,
    XSD_DOUBLE: x,
    XSD_INTEGER: b,
    XSD_STRING: I
  } = ya(), {
    isAbsolute: g
  } = Mt(), m = {};
  ws = m, m.toRDF = (S, A) => {
    const j = new s.IdentifierIssuer("_:b"), R = { "@default": {} };
    e(S, R, "@default", j);
    const E = [], L = Object.keys(R).sort();
    for (const _ of L) {
      let C;
      if (_ === "@default")
        C = { termType: "DefaultGraph", value: "" };
      else if (g(_))
        _.startsWith("_:") ? C = { termType: "BlankNode" } : C = { termType: "NamedNode" }, C.value = _;
      else {
        A.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "relative graph reference",
            level: "warning",
            message: "Relative graph reference found.",
            details: {
              graph: _
            }
          },
          options: A
        });
        continue;
      }
      d(E, R[_], C, j, A);
    }
    return E;
  };
  function d(S, A, j, R, E) {
    const L = Object.keys(A).sort();
    for (const _ of L) {
      const C = A[_], D = Object.keys(C).sort();
      for (let P of D) {
        const F = C[P];
        if (P === "@type")
          P = y;
        else if (t(P))
          continue;
        for (const O of F) {
          const G = {
            termType: _.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: _
          };
          if (!g(_)) {
            E.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "relative subject reference",
                level: "warning",
                message: "Relative subject reference found.",
                details: {
                  subject: _
                }
              },
              options: E
            });
            continue;
          }
          const k = {
            termType: P.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: P
          };
          if (!g(P)) {
            E.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "relative predicate reference",
                level: "warning",
                message: "Relative predicate reference found.",
                details: {
                  predicate: P
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
                  property: R.getOldIds().find((V) => R.getId(V) === P)
                }
              },
              options: E
            });
            continue;
          }
          const M = w(
            O,
            R,
            S,
            j,
            E.rdfDirection,
            E
          );
          M && S.push({
            subject: G,
            predicate: k,
            object: M,
            graph: j
          });
        }
      }
    }
  }
  function u(S, A, j, R, E, L) {
    const _ = { termType: "NamedNode", value: c }, C = { termType: "NamedNode", value: l }, D = { termType: "NamedNode", value: p }, P = S.pop(), F = P ? { termType: "BlankNode", value: A.getId() } : D;
    let O = F;
    for (const G of S) {
      const k = w(
        G,
        A,
        j,
        R,
        E,
        L
      ), M = { termType: "BlankNode", value: A.getId() };
      j.push({
        subject: O,
        predicate: _,
        object: k,
        graph: R
      }), j.push({
        subject: O,
        predicate: C,
        object: M,
        graph: R
      }), O = M;
    }
    if (P) {
      const G = w(
        P,
        A,
        j,
        R,
        E,
        L
      );
      j.push({
        subject: O,
        predicate: _,
        object: G,
        graph: R
      }), j.push({
        subject: O,
        predicate: C,
        object: D,
        graph: R
      });
    }
    return F;
  }
  function w(S, A, j, R, E, L) {
    const _ = {};
    if (n.isValue(S)) {
      _.termType = "Literal", _.value = void 0, _.datatype = {
        termType: "NamedNode"
      };
      let C = S["@value"];
      const D = S["@type"] || null;
      if (D === "@json")
        _.value = i(C), _.datatype.value = f;
      else if (r.isBoolean(C))
        _.value = C.toString(), _.datatype.value = D || v;
      else if (r.isDouble(C) || D === x)
        r.isDouble(C) || (C = parseFloat(C)), _.value = C.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), _.datatype.value = D || x;
      else if (r.isNumber(C))
        _.value = C.toFixed(0), _.datatype.value = D || b;
      else if ("@direction" in S && E === "i18n-datatype") {
        const P = (S["@language"] || "").toLowerCase(), F = S["@direction"], O = `https://www.w3.org/ns/i18n#${P}_${F}`;
        _.datatype.value = O, _.value = C;
      } else {
        if ("@direction" in S && E === "compound-literal")
          throw new o(
            "Unsupported rdfDirection value.",
            "jsonld.InvalidRdfDirection",
            { value: E }
          );
        if ("@direction" in S && E)
          throw new o(
            "Unknown rdfDirection value.",
            "jsonld.InvalidRdfDirection",
            { value: E }
          );
        "@language" in S ? ("@direction" in S && !E && L.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: _.value
            }
          },
          options: L
        }), _.value = C, _.datatype.value = D || h, _.language = S["@language"]) : ("@direction" in S && !E && L.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: _.value
            }
          },
          options: L
        }), _.value = C, _.datatype.value = D || I);
      }
    } else if (n.isList(S)) {
      const C = u(
        S["@list"],
        A,
        j,
        R,
        E,
        L
      );
      _.termType = C.termType, _.value = C.value;
    } else {
      const C = r.isObject(S) ? S["@id"] : S;
      _.termType = C.startsWith("_:") ? "BlankNode" : "NamedNode", _.value = C;
    }
    return _.termType === "NamedNode" && !g(_.value) ? (L.eventHandler && a({
      event: {
        type: ["JsonLdEvent"],
        code: "relative object reference",
        level: "warning",
        message: "Relative object reference found.",
        details: {
          object: _.value
        }
      },
      options: L
    }), null) : _;
  }
  return ws;
}
var xs, sd;
function Zh() {
  if (sd) return xs;
  sd = 1;
  const { isKeyword: e } = Ht(), t = St(), n = Oe(), i = Be(), o = Mt(), r = Ze(), {
    createNodeMap: s,
    mergeNodeMapGraphs: a
  } = lr(), c = {};
  xs = c, c.frameMergedOrDefault = (d, u, w) => {
    const S = {
      options: w,
      embedded: !1,
      graph: "@default",
      graphMap: { "@default": {} },
      subjectStack: [],
      link: {},
      bnodeMap: {}
    }, A = new i.IdentifierIssuer("_:b");
    s(d, S.graphMap, "@default", A), w.merged && (S.graphMap["@merged"] = a(S.graphMap), S.graph = "@merged"), S.subjects = S.graphMap[S.graph];
    const j = [];
    c.frame(S, Object.keys(S.subjects).sort(), u, j), w.pruneBlankNodeIdentifiers && (w.bnodesToClear = Object.keys(S.bnodeMap).filter((R) => S.bnodeMap[R].length === 1));
    // remove @preserve from results
    return w.link = {}, b(j, w);
  }, c.frame = (d, u, w, S, A = null) => {
    f(w), w = w[0];
    const j = d.options, R = {
      embed: y(w, j, "embed"),
      explicit: y(w, j, "explicit"),
      requireAll: y(w, j, "requireAll")
    };
    d.link.hasOwnProperty(d.graph) || (d.link[d.graph] = {});
    const E = d.link[d.graph], L = h(d, u, w, R), _ = Object.keys(L).sort();
    for (const C of _) {
      const D = L[C];
      if (A === null ? d.uniqueEmbeds = { [d.graph]: {} } : d.uniqueEmbeds[d.graph] = d.uniqueEmbeds[d.graph] || {}, R.embed === "@link" && C in E) {
        I(S, A, E[C]);
        continue;
      }
      const P = { "@id": C };
      if (C.indexOf("_:") === 0 && i.addValue(d.bnodeMap, C, P, { propertyIsArray: !0 }), E[C] = P, (R.embed === "@first" || R.embed === "@last") && d.is11)
        throw new r(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: w }
        );
      if (!(!d.embedded && d.uniqueEmbeds[d.graph].hasOwnProperty(C))) {
        if (d.embedded && (R.embed === "@never" || p(D, d.graph, d.subjectStack))) {
          I(S, A, P);
          continue;
        }
        if (d.embedded && (R.embed == "@first" || R.embed == "@once") && d.uniqueEmbeds[d.graph].hasOwnProperty(C)) {
          I(S, A, P);
          continue;
        }
        if (R.embed === "@last" && C in d.uniqueEmbeds[d.graph] && x(d, C), d.uniqueEmbeds[d.graph][C] = { parent: S, property: A }, d.subjectStack.push({ subject: D, graph: d.graph }), C in d.graphMap) {
          let F = !1, O = null;
          "@graph" in w ? (O = w["@graph"][0], F = !(C === "@merged" || C === "@default"), n.isObject(O) || (O = {})) : (F = d.graph !== "@merged", O = {}), F && c.frame(
            { ...d, graph: C, embedded: !1 },
            Object.keys(d.graphMap[C]).sort(),
            [O],
            P,
            "@graph"
          );
        }
        "@included" in w && c.frame(
          { ...d, embedded: !1 },
          u,
          w["@included"],
          P,
          "@included"
        );
        for (const F of Object.keys(D).sort()) {
          if (e(F)) {
            if (P[F] = i.clone(D[F]), F === "@type")
              for (const O of D["@type"])
                O.indexOf("_:") === 0 && i.addValue(
                  d.bnodeMap,
                  O,
                  P,
                  { propertyIsArray: !0 }
                );
            continue;
          }
          if (!(R.explicit && !(F in w)))
            for (const O of D[F]) {
              const G = F in w ? w[F] : l(R);
              if (t.isList(O)) {
                const k = w[F] && w[F][0] && w[F][0]["@list"] ? w[F][0]["@list"] : l(R), M = { "@list": [] };
                I(P, F, M);
                const V = O["@list"];
                for (const N of V)
                  t.isSubjectReference(N) ? c.frame(
                    { ...d, embedded: !0 },
                    [N["@id"]],
                    k,
                    M,
                    "@list"
                  ) : I(M, "@list", i.clone(N));
              } else t.isSubjectReference(O) ? c.frame(
                { ...d, embedded: !0 },
                [O["@id"]],
                G,
                P,
                F
              ) : m(G[0], O) && I(P, F, i.clone(O));
            }
        }
        for (const F of Object.keys(w).sort()) {
          if (F === "@type") {
            if (!n.isObject(w[F][0]) || !("@default" in w[F][0]))
              continue;
          } else if (e(F))
            continue;
          const O = w[F][0] || {};
          if (!y(O, j, "omitDefault") && !(F in P)) {
            let k = "@null";
            "@default" in O && (k = i.clone(O["@default"])), n.isArray(k) || (k = [k]), P[F] = [{ "@preserve": k }];
          }
        }
        for (const F of Object.keys(w["@reverse"] || {}).sort()) {
          const O = w["@reverse"][F];
          for (const G of Object.keys(d.subjects))
            i.getValues(d.subjects[G], F).some((M) => M["@id"] === C) && (P["@reverse"] = P["@reverse"] || {}, i.addValue(
              P["@reverse"],
              F,
              [],
              { propertyIsArray: !0 }
            ), c.frame(
              { ...d, embedded: !0 },
              [G],
              O,
              P["@reverse"][F],
              A
            ));
        }
        I(S, A, P), d.subjectStack.pop();
      }
    }
  }, c.cleanupNull = (d, u) => {
    if (n.isArray(d))
      return d.map((S) => c.cleanupNull(S, u)).filter((S) => S);
    if (d === "@null")
      return null;
    if (n.isObject(d)) {
      if ("@id" in d) {
        const w = d["@id"];
        if (u.link.hasOwnProperty(w)) {
          const S = u.link[w].indexOf(d);
          if (S !== -1)
            return u.link[w][S];
          u.link[w].push(d);
        } else
          u.link[w] = [d];
      }
      for (const w in d)
        d[w] = c.cleanupNull(d[w], u);
    }
    return d;
  };
  function l(d) {
    const u = {};
    for (const w in d)
      d[w] !== void 0 && (u["@" + w] = [d[w]]);
    return [u];
  }
  function p(d, u, w) {
    for (let S = w.length - 1; S >= 0; --S) {
      const A = w[S];
      if (A.graph === u && A.subject["@id"] === d["@id"])
        return !0;
    }
    return !1;
  }
  function y(d, u, w) {
    const S = "@" + w;
    let A = S in d ? d[S][0] : u[w];
    if (w === "embed") {
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
  function f(d) {
    if (!n.isArray(d) || d.length !== 1 || !n.isObject(d[0]))
      throw new r(
        "Invalid JSON-LD syntax; a JSON-LD frame must be a single object.",
        "jsonld.SyntaxError",
        { frame: d }
      );
    if ("@id" in d[0]) {
      for (const u of i.asArray(d[0]["@id"]))
        if (!(n.isObject(u) || o.isAbsolute(u)) || n.isString(u) && u.indexOf("_:") === 0)
          throw new r(
            "Invalid JSON-LD syntax; invalid @id in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: d }
          );
    }
    if ("@type" in d[0]) {
      for (const u of i.asArray(d[0]["@type"]))
        if (!(n.isObject(u) || o.isAbsolute(u) || u === "@json") || n.isString(u) && u.indexOf("_:") === 0)
          throw new r(
            "Invalid JSON-LD syntax; invalid @type in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: d }
          );
    }
  }
  function h(d, u, w, S) {
    const A = {};
    for (const j of u) {
      const R = d.graphMap[d.graph][j];
      v(d, R, w, S) && (A[j] = R);
    }
    return A;
  }
  function v(d, u, w, S) {
    let A = !0, j = !1;
    for (const R in w) {
      let E = !1;
      const L = i.getValues(u, R), _ = i.getValues(w, R).length === 0;
      if (R === "@id") {
        if (n.isEmptyObject(w["@id"][0] || {}) ? E = !0 : w["@id"].length >= 0 && (E = w["@id"].includes(L[0])), !S.requireAll)
          return E;
      } else if (R === "@type") {
        if (A = !1, _) {
          if (L.length > 0)
            return !1;
          E = !0;
        } else if (w["@type"].length === 1 && n.isEmptyObject(w["@type"][0]))
          E = L.length > 0;
        else
          for (const C of w["@type"])
            n.isObject(C) && "@default" in C ? E = !0 : E = E || L.some((D) => D === C);
        if (!S.requireAll)
          return E;
      } else {
        if (e(R))
          continue;
        {
          const C = i.getValues(w, R)[0];
          let D = !1;
          if (C && (f([C]), D = "@default" in C), A = !1, L.length === 0 && D)
            continue;
          if (L.length > 0 && _)
            return !1;
          if (C === void 0) {
            if (L.length > 0)
              return !1;
            E = !0;
          } else if (t.isList(C)) {
            const P = C["@list"][0];
            if (t.isList(L[0])) {
              const F = L[0]["@list"];
              t.isValue(P) ? E = F.some((O) => m(P, O)) : (t.isSubject(P) || t.isSubjectReference(P)) && (E = F.some((O) => g(
                d,
                P,
                O,
                S
              )));
            }
          } else t.isValue(C) ? E = L.some((P) => m(C, P)) : t.isSubjectReference(C) ? E = L.some((P) => g(d, C, P, S)) : n.isObject(C) ? E = L.length > 0 : E = !1;
        }
      }
      if (!E && S.requireAll)
        return !1;
      j = j || E;
    }
    return A || j;
  }
  function x(d, u) {
    const w = d.uniqueEmbeds[d.graph], S = w[u], A = S.parent, j = S.property, R = { "@id": u };
    if (n.isArray(A)) {
      for (let L = 0; L < A.length; ++L)
        if (i.compareValues(A[L], R)) {
          A[L] = R;
          break;
        }
    } else {
      const L = n.isArray(A[j]);
      i.removeValue(A, j, R, { propertyIsArray: L }), i.addValue(A, j, R, { propertyIsArray: L });
    }
    const E = (L) => {
      const _ = Object.keys(w);
      for (const C of _)
        C in w && n.isObject(w[C].parent) && w[C].parent["@id"] === L && (delete w[C], E(C));
    };
    E(u);
  }
  /**
   * Removes the @preserve keywords from expanded result of framing.
   *
   * @param input the framed, framed output.
   * @param options the framing options used.
   *
   * @return the resulting output.
   */
  function b(d, u) {
    if (n.isArray(d))
      return d.map((w) => b(w, u));
    if (n.isObject(d)) {
      // remove @preserve
      if ("@preserve" in d)
        return d["@preserve"][0];
      if (t.isValue(d))
        return d;
      if (t.isList(d))
        return d["@list"] = b(d["@list"], u), d;
      if ("@id" in d) {
        const w = d["@id"];
        if (u.link.hasOwnProperty(w)) {
          const S = u.link[w].indexOf(d);
          if (S !== -1)
            return u.link[w][S];
          u.link[w].push(d);
        } else
          u.link[w] = [d];
      }
      for (const w in d) {
        if (w === "@id" && u.bnodesToClear.includes(d[w])) {
          delete d["@id"];
          continue;
        }
        d[w] = b(d[w], u);
      }
    }
    return d;
  }
  function I(d, u, w) {
    n.isObject(d) ? i.addValue(d, u, w, { propertyIsArray: !0 }) : d.push(w);
  }
  function g(d, u, w, S) {
    if (!("@id" in w))
      return !1;
    const A = d.subjects[w["@id"]];
    return A && v(d, A, u, S);
  }
  function m(d, u) {
    const w = u["@value"], S = u["@type"], A = u["@language"], j = d["@value"] ? n.isArray(d["@value"]) ? d["@value"] : [d["@value"]] : [], R = d["@type"] ? n.isArray(d["@type"]) ? d["@type"] : [d["@type"]] : [], E = d["@language"] ? n.isArray(d["@language"]) ? d["@language"] : [d["@language"]] : [];
    return j.length === 0 && R.length === 0 && E.length === 0 ? !0 : !(!(j.includes(w) || n.isEmptyObject(j[0])) || !(!S && R.length === 0 || R.includes(S) || S && n.isEmptyObject(R[0])) || !(!A && E.length === 0 || E.includes(A) || A && n.isEmptyObject(E[0])));
  }
  return xs;
}
var Ss, ad;
function Hh() {
  if (ad) return Ss;
  ad = 1;
  const e = Ze(), {
    isArray: t,
    isObject: n,
    isString: i,
    isUndefined: o
  } = Oe(), {
    isList: r,
    isValue: s,
    isGraph: a,
    isSimpleGraph: c,
    isSubjectReference: l
  } = St(), {
    expandIri: p,
    getContextValue: y,
    isKeyword: f,
    process: h,
    processingMode: v
  } = Ht(), {
    removeBase: x,
    prependBase: b
  } = Mt(), {
    REGEX_KEYWORD: I,
    addValue: g,
    asArray: m,
    compareShortestLeast: d
  } = Be(), u = {};
  Ss = u, u.compact = async ({
    activeCtx: A,
    activeProperty: j = null,
    element: R,
    options: E = {}
  }) => {
    if (t(R)) {
      let _ = [];
      for (let C = 0; C < R.length; ++C) {
        const D = await u.compact({
          activeCtx: A,
          activeProperty: j,
          element: R[C],
          options: E
        });
        D !== null && _.push(D);
      }
      return E.compactArrays && _.length === 1 && (y(
        A,
        j,
        "@container"
      ) || []).length === 0 && (_ = _[0]), _;
    }
    const L = y(A, j, "@context");
    if (o(L) || (A = await h({
      activeCtx: A,
      localCtx: L,
      propagate: !0,
      overrideProtected: !0,
      options: E
    })), n(R)) {
      if (E.link && "@id" in R && E.link.hasOwnProperty(R["@id"])) {
        const k = E.link[R["@id"]];
        for (let M = 0; M < k.length; ++M)
          if (k[M].expanded === R)
            return k[M].compacted;
      }
      if (s(R) || l(R)) {
        const k = u.compactValue({ activeCtx: A, activeProperty: j, value: R, options: E });
        return E.link && l(R) && (E.link.hasOwnProperty(R["@id"]) || (E.link[R["@id"]] = []), E.link[R["@id"]].push({ expanded: R, compacted: k })), k;
      }
      if (r(R) && (y(
        A,
        j,
        "@container"
      ) || []).includes("@list"))
        return u.compact({
          activeCtx: A,
          activeProperty: j,
          element: R["@list"],
          options: E
        });
      const _ = j === "@reverse", C = {}, D = A;
      !s(R) && !l(R) && (A = A.revertToPreviousContext());
      const P = y(D, j, "@context");
      o(P) || (A = await h({
        activeCtx: A,
        localCtx: P,
        propagate: !0,
        overrideProtected: !0,
        options: E
      })), E.link && "@id" in R && (E.link.hasOwnProperty(R["@id"]) || (E.link[R["@id"]] = []), E.link[R["@id"]].push({ expanded: R, compacted: C }));
      let F = R["@type"] || [];
      F.length > 1 && (F = Array.from(F).sort());
      const O = A;
      for (const k of F) {
        const M = u.compactIri(
          { activeCtx: O, iri: k, relativeTo: { vocab: !0 } }
        ), V = y(D, M, "@context");
        o(V) || (A = await h({
          activeCtx: A,
          localCtx: V,
          options: E,
          propagate: !1
        }));
      }
      const G = Object.keys(R).sort();
      for (const k of G) {
        const M = R[k];
        if (k === "@id") {
          let V = m(M).map(
            ($) => u.compactIri({
              activeCtx: A,
              iri: $,
              relativeTo: { vocab: !1 },
              base: E.base
            })
          );
          V.length === 1 && (V = V[0]);
          const N = u.compactIri(
            { activeCtx: A, iri: "@id", relativeTo: { vocab: !0 } }
          );
          C[N] = V;
          continue;
        }
        if (k === "@type") {
          let V = m(M).map(
            (z) => u.compactIri({
              activeCtx: D,
              iri: z,
              relativeTo: { vocab: !0 }
            })
          );
          V.length === 1 && (V = V[0]);
          const N = u.compactIri(
            { activeCtx: A, iri: "@type", relativeTo: { vocab: !0 } }
          ), T = (y(
            A,
            N,
            "@container"
          ) || []).includes("@set") && v(A, 1.1) || t(V) && M.length === 0;
          g(C, N, V, { propertyIsArray: T });
          continue;
        }
        if (k === "@reverse") {
          const V = await u.compact({
            activeCtx: A,
            activeProperty: "@reverse",
            element: M,
            options: E
          });
          for (const N in V)
            if (A.mappings.has(N) && A.mappings.get(N).reverse) {
              const $ = V[N], T = (y(
                A,
                N,
                "@container"
              ) || []).includes("@set") || !E.compactArrays;
              g(
                C,
                N,
                $,
                { propertyIsArray: T }
              ), delete V[N];
            }
          if (Object.keys(V).length > 0) {
            const N = u.compactIri({
              activeCtx: A,
              iri: k,
              relativeTo: { vocab: !0 }
            });
            g(C, N, V);
          }
          continue;
        }
        if (k === "@preserve") {
          const V = await u.compact({
            activeCtx: A,
            activeProperty: j,
            element: M,
            options: E
          });
          t(V) && V.length === 0 || g(C, k, V);
          continue;
        }
        if (k === "@index") {
          if ((y(
            A,
            j,
            "@container"
          ) || []).includes("@index"))
            continue;
          const N = u.compactIri({
            activeCtx: A,
            iri: k,
            relativeTo: { vocab: !0 }
          });
          g(C, N, M);
          continue;
        }
        if (k !== "@graph" && k !== "@list" && k !== "@included" && f(k)) {
          const V = u.compactIri({
            activeCtx: A,
            iri: k,
            relativeTo: { vocab: !0 }
          });
          g(C, V, M);
          continue;
        }
        if (!t(M))
          throw new e(
            "JSON-LD expansion error; expanded value must be an array.",
            "jsonld.SyntaxError"
          );
        if (M.length === 0) {
          const V = u.compactIri({
            activeCtx: A,
            iri: k,
            value: M,
            relativeTo: { vocab: !0 },
            reverse: _
          }), N = A.mappings.has(V) ? A.mappings.get(V)["@nest"] : null;
          let $ = C;
          N && (S(A, N, E), n(C[N]) || (C[N] = {}), $ = C[N]), g(
            $,
            V,
            M,
            {
              propertyIsArray: !0
            }
          );
        }
        for (const V of M) {
          const N = u.compactIri({
            activeCtx: A,
            iri: k,
            value: V,
            relativeTo: { vocab: !0 },
            reverse: _
          }), $ = A.mappings.has(N) ? A.mappings.get(N)["@nest"] : null;
          let q = C;
          $ && (S(A, $, E), n(C[$]) || (C[$] = {}), q = C[$]);
          const T = y(
            A,
            N,
            "@container"
          ) || [], z = a(V), H = r(V);
          let Q;
          H ? Q = V["@list"] : z && (Q = V["@graph"]);
          let J = await u.compact({
            activeCtx: A,
            activeProperty: N,
            element: H || z ? Q : V,
            options: E
          });
          if (H)
            if (t(J) || (J = [J]), !T.includes("@list"))
              J = {
                [u.compactIri({
                  activeCtx: A,
                  iri: "@list",
                  relativeTo: { vocab: !0 }
                })]: J
              }, "@index" in V && (J[u.compactIri({
                activeCtx: A,
                iri: "@index",
                relativeTo: { vocab: !0 }
              })] = V["@index"]);
            else {
              g(q, N, J, {
                valueIsArray: !0,
                allowDuplicate: !0
              });
              continue;
            }
          if (z)
            if (T.includes("@graph") && (T.includes("@id") || T.includes("@index") && c(V))) {
              let U;
              q.hasOwnProperty(N) ? U = q[N] : q[N] = U = {};
              const B = (T.includes("@id") ? V["@id"] : V["@index"]) || u.compactIri({
                activeCtx: A,
                iri: "@none",
                relativeTo: { vocab: !0 }
              });
              g(
                U,
                B,
                J,
                {
                  propertyIsArray: !E.compactArrays || T.includes("@set")
                }
              );
            } else T.includes("@graph") && c(V) ? (t(J) && J.length > 1 && (J = { "@included": J }), g(
              q,
              N,
              J,
              {
                propertyIsArray: !E.compactArrays || T.includes("@set")
              }
            )) : (t(J) && J.length === 1 && E.compactArrays && (J = J[0]), J = {
              [u.compactIri({
                activeCtx: A,
                iri: "@graph",
                relativeTo: { vocab: !0 }
              })]: J
            }, "@id" in V && (J[u.compactIri({
              activeCtx: A,
              iri: "@id",
              relativeTo: { vocab: !0 }
            })] = V["@id"]), "@index" in V && (J[u.compactIri({
              activeCtx: A,
              iri: "@index",
              relativeTo: { vocab: !0 }
            })] = V["@index"]), g(
              q,
              N,
              J,
              {
                propertyIsArray: !E.compactArrays || T.includes("@set")
              }
            ));
          else if (T.includes("@language") || T.includes("@index") || T.includes("@id") || T.includes("@type")) {
            let U;
            q.hasOwnProperty(N) ? U = q[N] : q[N] = U = {};
            let B;
            if (T.includes("@language"))
              s(J) && (J = J["@value"]), B = V["@language"];
            else if (T.includes("@index")) {
              const Z = y(
                A,
                N,
                "@index"
              ) || "@index", K = u.compactIri(
                { activeCtx: A, iri: Z, relativeTo: { vocab: !0 } }
              );
              if (Z === "@index")
                B = V["@index"], delete J[K];
              else {
                let W;
                if ([B, ...W] = m(J[Z] || []), !i(B))
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
              const Z = u.compactIri({
                activeCtx: A,
                iri: "@id",
                relativeTo: { vocab: !0 }
              });
              B = J[Z], delete J[Z];
            } else if (T.includes("@type")) {
              const Z = u.compactIri({
                activeCtx: A,
                iri: "@type",
                relativeTo: { vocab: !0 }
              });
              let K;
              switch ([B, ...K] = m(J[Z] || []), K.length) {
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
              Object.keys(J).length === 1 && "@id" in V && (J = await u.compact({
                activeCtx: A,
                activeProperty: N,
                element: { "@id": V["@id"] },
                options: E
              }));
            }
            B || (B = u.compactIri({
              activeCtx: A,
              iri: "@none",
              relativeTo: { vocab: !0 }
            })), g(
              U,
              B,
              J,
              {
                propertyIsArray: T.includes("@set")
              }
            );
          } else {
            const U = !E.compactArrays || T.includes("@set") || T.includes("@list") || t(J) && J.length === 0 || k === "@list" || k === "@graph";
            g(
              q,
              N,
              J,
              { propertyIsArray: U }
            );
          }
        }
      }
      return C;
    }
    return R;
  }, u.compactIri = ({
    activeCtx: A,
    iri: j,
    value: R = null,
    relativeTo: E = { vocab: !1 },
    reverse: L = !1,
    base: _ = null
  }) => {
    if (j === null)
      return j;
    A.isPropertyTermScoped && A.previousContext && (A = A.previousContext);
    const C = A.getInverse();
    if (f(j) && j in C && "@none" in C[j] && "@type" in C[j]["@none"] && "@none" in C[j]["@none"]["@type"])
      return C[j]["@none"]["@type"]["@none"];
    if (E.vocab && j in C) {
      const G = A["@language"] || "@none", k = [];
      n(R) && "@index" in R && !("@graph" in R) && k.push("@index", "@index@set"), n(R) && "@preserve" in R && (R = R["@preserve"][0]), a(R) ? ("@index" in R && k.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in R && k.push(
        "@graph@id",
        "@graph@id@set"
      ), k.push("@graph", "@graph@set", "@set"), "@index" in R || k.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in R || k.push("@graph@id", "@graph@id@set")) : n(R) && !s(R) && k.push("@id", "@id@set", "@type", "@set@type");
      let M = "@language", V = "@null";
      if (L)
        M = "@type", V = "@reverse", k.push("@set");
      else if (r(R)) {
        "@index" in R || k.push("@list");
        const $ = R["@list"];
        if ($.length === 0)
          M = "@any", V = "@none";
        else {
          let q = $.length === 0 ? G : null, T = null;
          for (let z = 0; z < $.length; ++z) {
            const H = $[z];
            let Q = "@none", J = "@none";
            if (s(H))
              if ("@direction" in H) {
                const U = (H["@language"] || "").toLowerCase(), B = H["@direction"];
                Q = `${U}_${B}`;
              } else "@language" in H ? Q = H["@language"].toLowerCase() : "@type" in H ? J = H["@type"] : Q = "@null";
            else
              J = "@id";
            if (q === null ? q = Q : Q !== q && s(H) && (q = "@none"), T === null ? T = J : J !== T && (T = "@none"), q === "@none" && T === "@none")
              break;
          }
          q = q || "@none", T = T || "@none", T !== "@none" ? (M = "@type", V = T) : V = q;
        }
      } else {
        if (s(R))
          if ("@language" in R && !("@index" in R)) {
            k.push("@language", "@language@set"), V = R["@language"];
            const $ = R["@direction"];
            $ && (V = `${V}_${$}`);
          } else "@direction" in R && !("@index" in R) ? V = `_${R["@direction"]}` : "@type" in R && (M = "@type", V = R["@type"]);
        else
          M = "@type", V = "@id";
        k.push("@set");
      }
      k.push("@none"), n(R) && !("@index" in R) && k.push("@index", "@index@set"), s(R) && Object.keys(R).length === 1 && k.push("@language", "@language@set");
      const N = w(
        A,
        j,
        R,
        k,
        M,
        V
      );
      if (N !== null)
        return N;
    }
    if (E.vocab && "@vocab" in A) {
      const G = A["@vocab"];
      if (j.indexOf(G) === 0 && j !== G) {
        const k = j.substr(G.length);
        if (!A.mappings.has(k))
          return k;
      }
    }
    let D = null;
    const P = [];
    let F = A.fastCurieMap;
    const O = j.length - 1;
    for (let G = 0; G < O && j[G] in F; ++G)
      F = F[j[G]], "" in F && P.push(F[""][0]);
    for (let G = P.length - 1; G >= 0; --G) {
      const k = P[G], M = k.terms;
      for (const V of M) {
        const N = V + ":" + j.substr(k.iri.length);
        A.mappings.get(V)._prefix && (!A.mappings.has(N) || R === null && A.mappings.get(N)["@id"] === j) && (D === null || d(N, D) < 0) && (D = N);
      }
    }
    if (D !== null)
      return D;
    for (const [G, k] of A.mappings)
      if (k && k._prefix && j.startsWith(G + ":"))
        throw new e(
          `Absolute IRI "${j}" confused with prefix "${G}".`,
          "jsonld.SyntaxError",
          { code: "IRI confused with prefix", context: A }
        );
    if (!E.vocab)
      if ("@base" in A)
        if (A["@base"]) {
          const G = x(b(_, A["@base"]), j);
          return I.test(G) ? `./${G}` : G;
        } else
          return j;
      else
        return x(_, j);
    return j;
  }, u.compactValue = ({ activeCtx: A, activeProperty: j, value: R, options: E }) => {
    if (s(R)) {
      const D = y(A, j, "@type"), P = y(A, j, "@language"), F = y(A, j, "@direction"), O = y(A, j, "@container") || [], G = "@index" in R && !O.includes("@index");
      if (!G && D !== "@none" && (R["@type"] === D || "@language" in R && R["@language"] === P && "@direction" in R && R["@direction"] === F || "@language" in R && R["@language"] === P || "@direction" in R && R["@direction"] === F))
        return R["@value"];
      const k = Object.keys(R).length, M = k === 1 || k === 2 && "@index" in R && !G, V = "@language" in A, N = i(R["@value"]), $ = A.mappings.has(j) && A.mappings.get(j)["@language"] === null;
      if (M && D !== "@none" && (!V || !N || $))
        return R["@value"];
      const q = {};
      return G && (q[u.compactIri({
        activeCtx: A,
        iri: "@index",
        relativeTo: { vocab: !0 }
      })] = R["@index"]), "@type" in R ? q[u.compactIri({
        activeCtx: A,
        iri: "@type",
        relativeTo: { vocab: !0 }
      })] = u.compactIri(
        { activeCtx: A, iri: R["@type"], relativeTo: { vocab: !0 } }
      ) : "@language" in R && (q[u.compactIri({
        activeCtx: A,
        iri: "@language",
        relativeTo: { vocab: !0 }
      })] = R["@language"]), "@direction" in R && (q[u.compactIri({
        activeCtx: A,
        iri: "@direction",
        relativeTo: { vocab: !0 }
      })] = R["@direction"]), q[u.compactIri({
        activeCtx: A,
        iri: "@value",
        relativeTo: { vocab: !0 }
      })] = R["@value"], q;
    }
    const L = p(
      A,
      j,
      { vocab: !0 },
      E
    ), _ = y(A, j, "@type"), C = u.compactIri({
      activeCtx: A,
      iri: R["@id"],
      relativeTo: { vocab: _ === "@vocab" },
      base: E.base
    });
    return _ === "@id" || _ === "@vocab" || L === "@graph" ? C : {
      [u.compactIri({
        activeCtx: A,
        iri: "@id",
        relativeTo: { vocab: !0 }
      })]: C
    };
  };
  function w(A, j, R, E, L, _) {
    _ === null && (_ = "@null");
    const C = [];
    if ((_ === "@id" || _ === "@reverse") && n(R) && "@id" in R) {
      _ === "@reverse" && C.push("@reverse");
      const P = u.compactIri(
        { activeCtx: A, iri: R["@id"], relativeTo: { vocab: !0 } }
      );
      A.mappings.has(P) && A.mappings.get(P) && A.mappings.get(P)["@id"] === R["@id"] ? C.push.apply(C, ["@vocab", "@id"]) : C.push.apply(C, ["@id", "@vocab"]);
    } else {
      C.push(_);
      const P = C.find((F) => F.includes("_"));
      P && C.push(P.replace(/^[^_]+_/, "_"));
    }
    C.push("@none");
    const D = A.inverse[j];
    for (const P of E) {
      if (!(P in D))
        continue;
      const F = D[P][L];
      for (const O of C)
        if (O in F)
          return F[O];
    }
    return null;
  }
  function S(A, j, R) {
    if (p(A, j, { vocab: !0 }, R) !== "@nest")
      throw new e(
        "JSON-LD compact error; nested property must have an @nest value resolving to @nest.",
        "jsonld.SyntaxError",
        { code: "invalid @nest value" }
      );
  }
  return Ss;
}
var Is, od;
function Jh() {
  return od || (od = 1, Is = (e) => {
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
  }), Is;
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
var As, cd;
function Kh() {
  if (cd) return As;
  cd = 1;
  const e = ma(), t = Mh(), n = Be(), i = Dh(), o = n.IdentifierIssuer, r = Ze(), s = cl(), a = zh(), { expand: c } = Vh(), { flatten: l } = Uh(), { fromRDF: p } = Gh(), { toRDF: y } = Bh(), {
    frameMergedOrDefault: f,
    cleanupNull: h
  } = Zh(), {
    isArray: v,
    isObject: x,
    isString: b
  } = Oe(), {
    isSubjectReference: I
  } = St(), {
    expandIri: g,
    getInitialContext: m,
    process: d,
    processingMode: u
  } = Ht(), {
    compact: w,
    compactIri: S
  } = Hh(), {
    createNodeMap: A,
    createMergedNodeMap: j,
    mergeNodeMaps: R
  } = lr(), {
    logEventHandler: E,
    logWarningEventHandler: L,
    safeEventHandler: _,
    setDefaultEventHandler: C,
    setupEventHandler: D,
    strictEventHandler: P,
    unhandledEventHandler: F
  } = Ln(), O = function(k) {
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
        m(z),
        T,
        z
      );
      let J = await w({
        activeCtx: Q,
        element: H,
        options: z
      });
      z.compactArrays && !z.graph && v(J) ? J.length === 1 ? J = J[0] : J.length === 0 && (J = {}) : z.graph && x(J) && (J = [J]), x(T) && "@context" in T && (T = T["@context"]), T = n.clone(T), v(T) || (T = [T]);
      const U = T;
      T = [];
      for (let Z = 0; Z < U.length; ++Z)
        (!x(U[Z]) || Object.keys(U[Z]).length > 0) && T.push(U[Z]);
      const B = T.length > 0;
      if (T.length === 1 && (T = T[0]), v(J)) {
        const Z = S({
          activeCtx: Q,
          iri: "@graph",
          relativeTo: { vocab: !0 }
        }), K = J;
        J = {}, B && (J["@context"] = T), J[Z] = K;
      } else if (x(J) && B) {
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
        x(B) && "@context" in B ? z.expandContext = B : z.expandContext = { "@context": B }, H.push(z.expandContext);
      }
      let Q;
      if (!b(q))
        z.input = n.clone(q);
      else {
        const B = await k.get(q, T);
        Q = B.documentUrl, z.input = B.document, B.contextUrl && (z.remoteContext = { "@context": B.contextUrl }, H.push(z.remoteContext));
      }
      "base" in T || (T.base = Q || "");
      let J = m(T);
      for (const B of H)
        J = await d({ activeCtx: J, localCtx: B, options: T });
      let U = await c({
        activeCtx: J,
        element: z.input,
        options: T
      });
      return x(U) && "@graph" in U && Object.keys(U).length === 1 ? U = U["@graph"] : U === null && (U = []), v(U) || (U = [U]), U;
    }, k.flatten = async function(q, T, z) {
      if (arguments.length < 1)
        return new TypeError("Could not flatten, too few arguments.");
      typeof T == "function" ? T = null : T = T || null, z = $(z, {
        base: b(q) ? q : "",
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      const H = await k.expand(q, z), Q = l(H);
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
          re ? v(re) ? re.push(ee.contextUrl) : re = [re, ee.contextUrl] : re = ee.contextUrl, T["@context"] = re;
        }
      }
      const H = T ? T["@context"] || {} : {}, Q = await k.processContext(
        m(z),
        H,
        z
      );
      z.hasOwnProperty("omitGraph") || (z.omitGraph = u(Q, 1.1)), z.hasOwnProperty("pruneBlankNodeIdentifiers") || (z.pruneBlankNodeIdentifiers = u(Q, 1.1));
      const J = await k.expand(q, z), U = { ...z };
      U.isFrame = !0, U.keepFreeFloatingNodes = !0;
      const B = await k.expand(T, U), Z = Object.keys(T).map((ee) => g(Q, ee, { vocab: !0 }));
      U.merged = !Z.includes("@graph"), U.is11 = u(Q, 1.1);
      const K = f(J, B, U);
      U.graph = !z.omitGraph, U.skipExpansion = !0, U.link = {}, U.framing = !0;
      let W = await k.compact(K, H, U);
      return U.link = {}, W = h(W, U), W;
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
      return p(Q, T);
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
      const H = y(z, T);
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
      return j(z, T);
    }, k.merge = async function(q, T, z) {
      if (arguments.length < 1)
        throw new TypeError("Could not merge, too few arguments.");
      if (!v(q))
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
      const J = z.issuer || new o("_:b"), U = { "@default": {} };
      for (let ee = 0; ee < H.length; ++ee) {
        const re = n.relabelBlankNodes(H[ee], {
          issuer: new o("_:b" + ee + "-")
        }), Se = Q || ee === 0 ? U : { "@default": {} };
        if (A(re, Se, "@default", J), Se !== U)
          for (const he in Se) {
            const ye = Se[he];
            if (!(he in U)) {
              U[he] = ye;
              continue;
            }
            const fe = U[he];
            for (const nt in ye)
              nt in fe || (fe[nt] = ye[nt]);
          }
      }
      const B = R(U), Z = [], K = Object.keys(B).sort();
      for (let ee = 0; ee < K.length; ++ee) {
        const re = B[K[ee]];
        I(re) || Z.push(re);
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
      }), T === null ? m(z) : (T = n.clone(T), x(T) && "@context" in T || (T = { "@context": T }), d({ activeCtx: q, localCtx: T, options: z }));
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
    }, k.registerRDFParser("application/n-quads", a.parse), k.registerRDFParser("application/nquads", a.parse), k.url = Mt(), k.logEventHandler = E, k.logWarningEventHandler = L, k.safeEventHandler = _, k.setDefaultEventHandler = C, k.strictEventHandler = P, k.unhandledEventHandler = F, k.util = n, Object.assign(k, n), k.promises = k, k.RequestQueue = ol(), k.JsonLdProcessor = Jh()(k), t.setupGlobals(k), t.setupDocumentLoaders(k);
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
    return O(function() {
      return G();
    });
  };
  return O(G), As = G, As;
}
var Qh = Kh();
const Wh = /* @__PURE__ */ ra(Qh);
async function dd(e, t, n = {}) {
  const i = {
    algorithm: "URDNA2015",
    format: "application/n-quads",
    safe: n.safe ?? !1
  };
  return t && (i.documentLoader = t), await Wh.normalize(e, i);
}
function Xh(e, t, n) {
  return {
    "@context": e,
    type: "DataIntegrityProof",
    cryptosuite: "eddsa-rdfc-2022",
    proofPurpose: "assertionMethod",
    verificationMethod: t,
    created: n
  };
}
async function dl(e, t, n, i = !1) {
  const [o, r] = await Promise.all([
    dd(e, n, { safe: i }),
    dd(t, n, { safe: i })
  ]), s = Es("sha256").update(o, "utf8").digest(), a = Es("sha256").update(r, "utf8").digest(), c = new Uint8Array(64);
  return c.set(a, 0), c.set(s, 32), c;
}
async function Yh(e, t, n = {}) {
  const i = n.created ?? (/* @__PURE__ */ new Date()).toISOString(), o = Xh(
    e["@context"],
    t.id,
    i
  ), r = await dl(
    e,
    o,
    n.documentLoader,
    n.safe ?? !1
  ), s = await wh(r, t.privateKey), a = bu(s);
  return {
    type: "DataIntegrityProof",
    cryptosuite: "eddsa-rdfc-2022",
    proofPurpose: "assertionMethod",
    verificationMethod: t.id,
    created: i,
    proofValue: a
  };
}
async function em(e, t, n = {}) {
  const i = e.proof;
  if (!i) throw new Error("No proof found on credential");
  if (i.cryptosuite !== "eddsa-rdfc-2022")
    throw new Error(`Unsupported cryptosuite: ${i.cryptosuite}`);
  if (i.created === void 0)
    throw new Error('eddsa-rdfc-2022 proof is missing the required "created" property.');
  const o = ["type", "cryptosuite", "proofPurpose", "verificationMethod", "created", "proofValue"];
  if (i.type !== "DataIntegrityProof" || i.proofPurpose !== "assertionMethod" || Object.keys(i).some((y) => !o.includes(y)) || typeof i.verificationMethod != "string" || typeof i.created != "string" || typeof i.proofValue != "string") return !1;
  const { proof: r, ...s } = e, { proofValue: a, ...c } = i, l = { ...c, "@context": s["@context"] }, p = await dl(
    s,
    l,
    n.documentLoader,
    n.safe ?? !1
  );
  try {
    const y = ta(i.proofValue);
    return await Sh(y, p, t);
  } catch {
    return !1;
  }
}
const tm = Jf, nm = ch, im = Object.freeze({
  RmAccreditation: `${Ot}accreditation.json`,
  RmOperationalScope: `${Ot}operational-scope.json`,
  RmCertificate: `${Ot}certificate.json`,
  RmStudy: `${Ot}study.json`,
  RmLabAuthority: `${Ot}lab-authority.json`,
  BitstringStatusListCredential: `${Ot}status-list.json`,
  RecognizedEntityCredential: `${Ot}recognized-entity.json`
});
function rm(e) {
  return e === "BitstringStatusListCredential" ? [Ft] : e === "RecognizedEntityCredential" ? [Ft, yu] : [Ft, mu];
}
const sm = Object.freeze({
  name: "RM v1",
  schemas: im,
  contexts: rm
}), am = Object.freeze({
  resolve: 1,
  parse: 0,
  carrier: 0,
  type: 0,
  schema: 0,
  proof: 2,
  key: 2,
  signature: 2
});
function ur(e, t, n, i) {
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
const om = (e) => e.replace(/~/g, "~0").replace(/\//g, "~1");
function cm(e, t) {
  if (!t.startsWith("/")) return [];
  let n = [{ pointer: "", value: e }];
  for (const i of t.slice(1).split("/")) {
    const o = [];
    for (const { pointer: r, value: s } of n)
      i === "*" ? Array.isArray(s) && s.forEach((a, c) => o.push({ pointer: `${r}/${c}`, value: a })) : sn(s) && Object.hasOwn(s, i) && o.push({ pointer: `${r}/${om(i)}`, value: s[i] });
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
function oe(e, t, n = [], i = "executed") {
  return Object.freeze({
    state: e,
    execution: i,
    reasons: Object.freeze(t),
    sourcePointers: Object.freeze(n)
  });
}
const un = (e) => oe("not_established", [e], [], "not_run");
function dm(e, t) {
  const n = Date.parse(t), i = typeof e.validFrom == "string" ? Date.parse(e.validFrom) : NaN, o = typeof e.validUntil == "string" ? Date.parse(e.validUntil) : NaN;
  if (!Number.isFinite(n) || !Number.isFinite(i) || !Number.isFinite(o))
    return oe("not_established", ["Validity period or evaluation time is missing or invalid."]);
  const r = ["/validFrom", "/validUntil"];
  return n < i ? oe("contradicted", [`Not yet valid at ${t}.`], r) : n > o ? oe("contradicted", [`Expired before ${t}.`], r) : oe("established", [`Valid at ${t}.`], r);
}
function lm(e, t) {
  return (Array.isArray(e.relatedResource) ? e.relatedResource : []).filter(sn).map((i) => {
    const o = String(i.id);
    try {
      const r = nr(t.resolve(o).bytes);
      return r === i.digestSRI ? { id: o, state: "established", reason: "Digest matches the exact referenced bytes." } : { id: o, state: "contradicted", reason: `Digest mismatch: referenced bytes hash to ${r}.` };
    } catch (r) {
      const s = r instanceof Ce ? r.code : "UNAVAILABLE";
      return { id: o, state: "not_established", reason: `Referenced resource unavailable: ${s}.` };
    }
  });
}
async function gn(e, t, n) {
  const i = [], o = n.staticResolver ?? t, r = n.binding ?? sm, s = un("Not evaluated because protection is not established."), a = (u = {}) => {
    const w = xe(i.map((S) => S.state));
    return Object.freeze({
      artifactId: e,
      protection: Object.freeze({
        artifactId: e,
        ...oe(w, i.filter((S) => S.state !== "established").map((S) => `${S.check}: ${S.reason}`).concat(w === "established" ? ["Protection established from the original secured bytes."] : []))
      }),
      checks: Object.freeze(i.map((S) => Object.freeze(S))),
      validity: s,
      relatedResources: Object.freeze([]),
      facts: Object.freeze([]),
      ...u
    });
  }, c = (u, w, S, A = {}) => (i.push({ check: u, state: w, reason: S }), a(A));
  let l;
  try {
    l = t.resolve(e).bytes;
  } catch (u) {
    const w = u instanceof Ce ? u.code : "UNAVAILABLE";
    return c("resolve", "not_established", `Artifact is not available: ${w}.`);
  }
  const p = nr(l);
  i.push({ check: "resolve", state: "established", reason: `Resolved ${l.byteLength} bytes.` });
  let y;
  try {
    y = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(l));
  } catch {
    return c("parse", "contradicted", "Artifact bytes are not valid UTF-8 JSON.", { digestSRI: p });
  }
  if (!sn(y)) return c("parse", "contradicted", "Artifact is not a JSON object.", { digestSRI: p });
  i.push({ check: "parse", state: "established", reason: "Strict UTF-8 JSON object." });
  const f = y["@context"], h = r.contexts(Array.isArray(y.type) ? y.type[1] : void 0);
  if (!Array.isArray(f) || f.length !== h.length || h.some((u, w) => f[w] !== u))
    return c(
      "carrier",
      "not_established",
      "Only the exact supported context combination for this type is accepted.",
      { digestSRI: p }
    );
  i.push({ check: "carrier", state: "established", reason: "Exact supported context combination." });
  const v = Array.isArray(y.type) ? y.type : [], x = v.length === 2 && v[0] === "VerifiableCredential" ? String(v[1]) : void 0, b = x === void 0 ? void 0 : r.schemas[x];
  if (b === void 0)
    return c("type", "not_established", `Credential type is not a recognized ${r.name} artifact type.`, { digestSRI: p });
  if (Array.isArray(y.credentialSchema))
    return c(
      "type",
      "not_established",
      "Multiple credentialSchema declarations have no accepted composition in this binding.",
      { digestSRI: p, artifactType: x }
    );
  if ((sn(y.credentialSchema) ? y.credentialSchema.id : void 0) !== b)
    return c("type", "contradicted", `${x} must declare schema ${b}.`, { digestSRI: p, artifactType: x });
  i.push({ check: "type", state: "established", reason: `${x} with its pinned schema.` });
  try {
    const u = new tm({ allErrors: !0, strict: !0 });
    nm(u);
    const w = JSON.parse(new TextDecoder().decode(o.resolve(b).bytes)), S = u.compile(w);
    if (!S(y)) {
      const A = (S.errors ?? []).map((j) => `${j.instancePath || "/"} ${j.message ?? ""}`).join("; ");
      return c("schema", "contradicted", `Schema validation failed: ${A}`, { digestSRI: p, artifactType: x });
    }
  } catch (u) {
    const w = u instanceof Ce ? u.code : "INVALID_SCHEMA";
    return c("schema", "not_established", `Pinned schema unavailable: ${w}.`, { digestSRI: p, artifactType: x });
  }
  i.push({ check: "schema", state: "established", reason: "Valid against the pinned schema." });
  const g = y.proof;
  if (Array.isArray(g))
    return c("proof", "not_established", "Proof sets and chains are unsupported in the initial slice.", { digestSRI: p, artifactType: x });
  if (!sn(g))
    return c("proof", "not_established", "The artifact carries no proof.", { digestSRI: p, artifactType: x });
  i.push({ check: "proof", state: "established", reason: "One eddsa-rdfc-2022 assertionMethod proof." });
  const m = Au(y.issuer, g.verificationMethod, o);
  if (m.state !== "established" || m.publicKey === void 0)
    return c(
      "key",
      m.state === "established" ? "not_established" : m.state,
      `${m.code}: ${m.reason}`,
      { digestSRI: p, artifactType: x, keyAuthorization: m }
    );
  i.push({ check: "key", state: "established", reason: m.reason });
  try {
    const u = $d(o);
    if (!await em(y, m.publicKey, {
      documentLoader: u,
      safe: !0
    }))
      return c(
        "signature",
        "contradicted",
        "Signature does not verify over the safe canonical form.",
        { digestSRI: p, artifactType: x, keyAuthorization: m }
      );
  } catch (u) {
    const w = u instanceof Error ? u.message.split(`
`)[0] : String(u);
    return c(
      "signature",
      "contradicted",
      `Safe JSON-LD processing rejected the artifact: ${w}`,
      { digestSRI: p, artifactType: x, keyAuthorization: m }
    );
  }
  i.push({ check: "signature", state: "established", reason: "Ed25519 signature verifies (safe mode, offline catalog)." });
  const d = [];
  for (const u of n.manifest.factMappings) {
    const w = String(u.fact);
    for (const { pointer: S, value: A } of cm(y, String(u.nativePath)))
      d.push(Object.freeze({ fact: w, pointer: S, value: structuredClone(A) }));
  }
  return a({
    digestSRI: p,
    artifactType: x,
    keyAuthorization: m,
    validity: dm(y, n.evaluationTime),
    relatedResources: Object.freeze(lm(y, t).map((u) => Object.freeze(u))),
    facts: Object.freeze(d)
  });
}
const Xe = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Gt = (e) => typeof e == "string" && e.trim().length > 0, qs = (e) => Array.isArray(e) ? e : Xe(e) ? [e] : [], ll = (e) => Gt(e) ? e : Xe(e) && Gt(e.id) ? e.id : void 0;
function ul(e) {
  const t = e.bindingRules.recognition;
  if (t === void 0) return;
  if (!Xe(t) || !Array.isArray(t.lists) || t.lists.length === 0 || !t.lists.every(Gt) || !Gt(t.listPurpose) || !Gt(t.action) || !Xe(t.purposes)) return "invalid";
  const n = {};
  for (const [i, o] of Object.entries(t.purposes)) {
    if (!Xe(o) || !Gt(o.activity) || !Gt(o.standardId)) return "invalid";
    n[i] = { activity: o.activity, standardId: o.standardId };
  }
  return { lists: [...t.lists], listPurpose: t.listPurpose, action: t.action, purposes: n };
}
function um(e) {
  const t = ul(e);
  return t === void 0 || t === "invalid" ? [] : t.lists;
}
const be = (e, t, n, i) => ({ id: e, state: t, reason: n, sources: i }), ld = (e) => {
  if (!Xe(e)) return "no main scope";
  const t = Xe(e.standard) ? e.standard : {};
  return `${String(e.activity)} under ${String(t.name ?? t.id)}`;
};
function pm(e, t, n, i, o, r, s, a) {
  const c = ["/issuer", t], l = s(t);
  if (l === void 0) return be(e, "not_established", `Signatory list ${t} is unavailable.`, c);
  if (l.usable !== "established" || l.document === void 0)
    return be(
      e,
      l.usable === "contradicted" ? "contradicted" : "not_established",
      `Signatory list ${t} is not usable: ${l.reason}`,
      c
    );
  const p = l.document;
  if (!qs(p.type).includes("RecognizedEntityCredential"))
    return be(e, "contradicted", `${t} is not a RecognizedEntityCredential.`, c);
  const y = ll(p.issuer), f = a.trustAnchors.find((d) => d.id === y);
  if (f === void 0 || !f.purposes.includes(o.listPurpose))
    return be(e, "not_established", `${String(y)}, issuer of ${t}, is not a configured anchor for ${o.listPurpose}.`, c);
  if (l.suspension !== void 0 && l.suspension.state !== "established")
    return be(
      e,
      l.suspension.state,
      l.suspension.state === "contradicted" ? `${String(y)} has suspended its signatory list ${t}. ${l.suspension.reason}` : `The suspension status of ${t} is not established: ${l.suspension.reason}`,
      c
    );
  const h = qs(p.credentialSubject).filter(Xe).find((d) => d.id === n);
  if (h === void 0) return be(e, "not_established", `${t} does not list ${n}.`, c);
  const v = qs(h.recognizedTo).filter(Xe);
  if (v.length === 0)
    return be(
      e,
      "not_established",
      `${t} lists ${n} without recognized actions; this profile does not accept recognition without stated actions.`,
      c
    );
  const x = `${i.activity} under ${i.standardId}`, b = v.filter((d) => d.action === o.action && Xe(d.mainScope) && d.mainScope.activity === i.activity && Xe(d.mainScope.standard) && d.mainScope.standard.id === i.standardId);
  if (b.length === 0) {
    const d = v.map((u) => `${String(u.action)} (${ld(u.mainScope)})`).join(", ");
    return be(
      e,
      "contradicted",
      `${t} recognizes ${n} for ${d}, not to ${o.action} for ${x}.`,
      c
    );
  }
  const I = b.filter((d) => d.recognizedBy === void 0 || d.recognizedBy === y);
  if (I.length === 0)
    return be(e, "contradicted", `The matching action in ${t} names another recognizer than the list's issuer ${String(y)}.`, c);
  const g = Date.parse(String(r));
  if (typeof r != "string" || !Number.isFinite(g))
    return be(e, "not_established", "No activity time is stated, so recognition at that time is not established.", c);
  const m = I.find((d) => {
    const u = Date.parse(String(d.validFrom ?? p.validFrom)), w = Date.parse(String(d.validUntil ?? p.validUntil));
    return Number.isFinite(u) && Number.isFinite(w) && u <= g && g <= w;
  });
  return m === void 0 ? be(e, "not_established", `${String(y)} did not recognize ${n} for ${x} at the activity time ${r}.`, c) : be(
    e,
    "established",
    `${n} is recognized by ${String(y)} (a configured anchor for ${o.listPurpose}) to ${o.action} for ${ld(m.mainScope)}, in force at ${r}, in ${t}.`,
    c
  );
}
function pr(e, t, n, i, o, r) {
  const s = ll(t.issuer), a = i.trustAnchors.find((v) => v.id === s);
  if (a?.purposes.includes(n))
    return { basis: be(e, "established", `${String(s)} is a configured anchor for ${n}.`, ["/issuer"]) };
  const c = a === void 0 ? `${String(s)} is not a configured trust anchor.` : `${String(s)} is an anchor, but not for ${n}.`, l = ul(i);
  if (l === void 0) return { basis: be(e, "not_established", c, ["/issuer"]) };
  if (l === "invalid")
    return { basis: be(e, "not_established", `${c} The profile's recognition rules are malformed.`, ["/issuer"]) };
  const p = l.purposes[n];
  if (p === void 0 || s === void 0)
    return { basis: be(e, "not_established", `${c} The profile accepts no recognition for ${n}.`, ["/issuer"]) };
  const y = l.lists.map((v) => ({ uri: v, result: pm(e, v, s, p, l, r, o, i) })), f = pn(y.map((v) => v.result.state)), h = y.find((v) => v.result.state === "established");
  return h ? { basis: h.result, list: h.uri } : {
    basis: be(
      e,
      f,
      `${c} ${y.map((v) => v.result.reason).join(" ")}`,
      ["/issuer", ...y.map((v) => v.uri)]
    )
  };
}
var we = Uint8Array, Le = Uint16Array, ga = Int32Array, fr = new we([
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
]), hr = new we([
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
]), Ns = new we([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), pl = function(e, t) {
  for (var n = new Le(31), i = 0; i < 31; ++i)
    n[i] = t += 1 << e[i - 1];
  for (var o = new ga(n[30]), i = 1; i < 30; ++i)
    for (var r = n[i]; r < n[i + 1]; ++r)
      o[r] = r - n[i] << 5 | i;
  return { b: n, r: o };
}, fl = pl(fr, 2), hl = fl.b, Ds = fl.r;
hl[28] = 258, Ds[258] = 28;
var ml = pl(hr, 0), fm = ml.b, ud = ml.r, zs = new Le(32768);
for (var de = 0; de < 32768; ++de) {
  var $t = (de & 43690) >> 1 | (de & 21845) << 1;
  $t = ($t & 52428) >> 2 | ($t & 13107) << 2, $t = ($t & 61680) >> 4 | ($t & 3855) << 4, zs[de] = (($t & 65280) >> 8 | ($t & 255) << 8) >> 1;
}
var ct = (function(e, t, n) {
  for (var i = e.length, o = 0, r = new Le(t); o < i; ++o)
    e[o] && ++r[e[o] - 1];
  var s = new Le(t);
  for (o = 1; o < t; ++o)
    s[o] = s[o - 1] + r[o - 1] << 1;
  var a;
  if (n) {
    a = new Le(1 << t);
    var c = 15 - t;
    for (o = 0; o < i; ++o)
      if (e[o])
        for (var l = o << 4 | e[o], p = t - e[o], y = s[e[o] - 1]++ << p, f = y | (1 << p) - 1; y <= f; ++y)
          a[zs[y] >> c] = l;
  } else
    for (a = new Le(i), o = 0; o < i; ++o)
      e[o] && (a[o] = zs[s[e[o] - 1]++] >> 15 - e[o]);
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
var Tn = new we(32);
for (var de = 0; de < 32; ++de)
  Tn[de] = 5;
var hm = /* @__PURE__ */ ct(Et, 9, 0), mm = /* @__PURE__ */ ct(Et, 9, 1), ym = /* @__PURE__ */ ct(Tn, 5, 0), gm = /* @__PURE__ */ ct(Tn, 5, 1), Rs = function(e) {
  for (var t = e[0], n = 1; n < e.length; ++n)
    e[n] > t && (t = e[n]);
  return t;
}, Ke = function(e, t, n) {
  var i = t / 8 | 0;
  return (e[i] | e[i + 1] << 8) >> (t & 7) & n;
}, js = function(e, t) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (t & 7);
}, va = function(e) {
  return (e + 7) / 8 | 0;
}, yl = function(e, t, n) {
  return (n == null || n > e.length) && (n = e.length), new we(e.subarray(t, n));
}, vm = [
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
  var i = new Error(t || vm[e]);
  if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, Qe), !n)
    throw i;
  return i;
}, bm = function(e, t, n, i) {
  var o = e.length, r = 0;
  if (!o || t.f && !t.l)
    return n || new we(0);
  var s = !n, a = s || t.i != 2, c = t.i;
  s && (n = new we(o * 3));
  var l = function(U) {
    var B = n.length;
    if (U > B) {
      var Z = new we(Math.max(B * 2, U));
      Z.set(n), n = Z;
    }
  }, p = t.f || 0, y = t.p || 0, f = t.b || 0, h = t.l, v = t.d, x = t.m, b = t.n, I = o * 8;
  do {
    if (!h) {
      p = Ke(e, y, 1);
      var g = Ke(e, y + 1, 3);
      if (y += 3, g)
        if (g == 1)
          h = mm, v = gm, x = 9, b = 5;
        else if (g == 2) {
          var w = Ke(e, y, 31) + 257, S = Ke(e, y + 10, 15) + 4, A = w + Ke(e, y + 5, 31) + 1;
          y += 14;
          for (var j = new we(A), R = new we(19), E = 0; E < S; ++E)
            R[Ns[E]] = Ke(e, y + E * 3, 7);
          y += S * 3;
          for (var L = Rs(R), _ = (1 << L) - 1, C = ct(R, L, 1), E = 0; E < A; ) {
            var D = C[Ke(e, y, _)];
            y += D & 15;
            var m = D >> 4;
            if (m < 16)
              j[E++] = m;
            else {
              var P = 0, F = 0;
              for (m == 16 ? (F = 3 + Ke(e, y, 3), y += 2, P = j[E - 1]) : m == 17 ? (F = 3 + Ke(e, y, 7), y += 3) : m == 18 && (F = 11 + Ke(e, y, 127), y += 7); F--; )
                j[E++] = P;
            }
          }
          var O = j.subarray(0, w), G = j.subarray(w);
          x = Rs(O), b = Rs(G), h = ct(O, x, 1), v = ct(G, b, 1);
        } else
          Qe(1);
      else {
        var m = va(y) + 4, d = e[m - 4] | e[m - 3] << 8, u = m + d;
        if (u > o) {
          c && Qe(0);
          break;
        }
        a && l(f + d), n.set(e.subarray(m, u), f), t.b = f += d, t.p = y = u * 8, t.f = p;
        continue;
      }
      if (y > I) {
        c && Qe(0);
        break;
      }
    }
    a && l(f + 131072);
    for (var k = (1 << x) - 1, M = (1 << b) - 1, V = y; ; V = y) {
      var P = h[js(e, y) & k], N = P >> 4;
      if (y += P & 15, y > I) {
        c && Qe(0);
        break;
      }
      if (P || Qe(2), N < 256)
        n[f++] = N;
      else if (N == 256) {
        V = y, h = null;
        break;
      } else {
        var $ = N - 254;
        if (N > 264) {
          var E = N - 257, q = fr[E];
          $ = Ke(e, y, (1 << q) - 1) + hl[E], y += q;
        }
        var T = v[js(e, y) & M], z = T >> 4;
        T || Qe(3), y += T & 15;
        var G = fm[z];
        if (z > 3) {
          var q = hr[z];
          G += js(e, y) & (1 << q) - 1, y += q;
        }
        if (y > I) {
          c && Qe(0);
          break;
        }
        a && l(f + 131072);
        var H = f + $;
        if (f < G) {
          var Q = r - G, J = Math.min(G, H);
          for (Q + f < 0 && Qe(3); f < J; ++f)
            n[f] = i[Q + f];
        }
        for (; f < H; ++f)
          n[f] = n[f - G];
      }
    }
    t.l = h, t.p = V, t.b = f, t.f = p, h && (p = 1, t.m = x, t.d = v, t.n = b);
  } while (!p);
  return f != n.length && s ? yl(n, 0, f) : n.subarray(0, f);
}, bt = function(e, t, n) {
  n <<= t & 7;
  var i = t / 8 | 0;
  e[i] |= n, e[i + 1] |= n >> 8;
}, vn = function(e, t, n) {
  n <<= t & 7;
  var i = t / 8 | 0;
  e[i] |= n, e[i + 1] |= n >> 8, e[i + 2] |= n >> 16;
}, $s = function(e, t) {
  for (var n = [], i = 0; i < e.length; ++i)
    e[i] && n.push({ s: i, f: e[i] });
  var o = n.length, r = n.slice();
  if (!o)
    return { t: vl, l: 0 };
  if (o == 1) {
    var s = new we(n[0].s + 1);
    return s[n[0].s] = 1, { t: s, l: 1 };
  }
  n.sort(function(u, w) {
    return u.f - w.f;
  }), n.push({ s: -1, f: 25001 });
  var a = n[0], c = n[1], l = 0, p = 1, y = 2;
  for (n[0] = { s: -1, f: a.f + c.f, l: a, r: c }; p != o - 1; )
    a = n[n[l].f < n[y].f ? l++ : y++], c = n[l != p && n[l].f < n[y].f ? l++ : y++], n[p++] = { s: -1, f: a.f + c.f, l: a, r: c };
  for (var f = r[0].s, i = 1; i < o; ++i)
    r[i].s > f && (f = r[i].s);
  var h = new Le(f + 1), v = Vs(n[p - 1], h, 0);
  if (v > t) {
    var i = 0, x = 0, b = v - t, I = 1 << b;
    for (r.sort(function(w, S) {
      return h[S.s] - h[w.s] || w.f - S.f;
    }); i < o; ++i) {
      var g = r[i].s;
      if (h[g] > t)
        x += I - (1 << v - h[g]), h[g] = t;
      else
        break;
    }
    for (x >>= b; x > 0; ) {
      var m = r[i].s;
      h[m] < t ? x -= 1 << t - h[m]++ - 1 : ++i;
    }
    for (; i >= 0 && x; --i) {
      var d = r[i].s;
      h[d] == t && (--h[d], ++x);
    }
    v = t;
  }
  return { t: new we(h), l: v };
}, Vs = function(e, t, n) {
  return e.s == -1 ? Math.max(Vs(e.l, t, n + 1), Vs(e.r, t, n + 1)) : t[e.s] = n;
}, pd = function(e) {
  for (var t = e.length; t && !e[--t]; )
    ;
  for (var n = new Le(++t), i = 0, o = e[0], r = 1, s = function(c) {
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
}, bn = function(e, t) {
  for (var n = 0, i = 0; i < t.length; ++i)
    n += e[i] * t[i];
  return n;
}, gl = function(e, t, n) {
  var i = n.length, o = va(t + 2);
  e[o] = i & 255, e[o + 1] = i >> 8, e[o + 2] = e[o] ^ 255, e[o + 3] = e[o + 1] ^ 255;
  for (var r = 0; r < i; ++r)
    e[o + r + 4] = n[r];
  return (o + 4 + i) * 8;
}, fd = function(e, t, n, i, o, r, s, a, c, l, p) {
  bt(t, p++, n), ++o[256];
  for (var y = $s(o, 15), f = y.t, h = y.l, v = $s(r, 15), x = v.t, b = v.l, I = pd(f), g = I.c, m = I.n, d = pd(x), u = d.c, w = d.n, S = new Le(19), A = 0; A < g.length; ++A)
    ++S[g[A] & 31];
  for (var A = 0; A < u.length; ++A)
    ++S[u[A] & 31];
  for (var j = $s(S, 7), R = j.t, E = j.l, L = 19; L > 4 && !R[Ns[L - 1]]; --L)
    ;
  var _ = l + 5 << 3, C = bn(o, Et) + bn(r, Tn) + s, D = bn(o, f) + bn(r, x) + s + 14 + 3 * L + bn(S, R) + 2 * S[16] + 3 * S[17] + 7 * S[18];
  if (c >= 0 && _ <= C && _ <= D)
    return gl(t, p, e.subarray(c, c + l));
  var P, F, O, G;
  if (bt(t, p, 1 + (D < C)), p += 2, D < C) {
    P = ct(f, h, 0), F = f, O = ct(x, b, 0), G = x;
    var k = ct(R, E, 0);
    bt(t, p, m - 257), bt(t, p + 5, w - 1), bt(t, p + 10, L - 4), p += 14;
    for (var A = 0; A < L; ++A)
      bt(t, p + 3 * A, R[Ns[A]]);
    p += 3 * L;
    for (var M = [g, u], V = 0; V < 2; ++V)
      for (var N = M[V], A = 0; A < N.length; ++A) {
        var $ = N[A] & 31;
        bt(t, p, k[$]), p += R[$], $ > 15 && (bt(t, p, N[A] >> 5 & 127), p += N[A] >> 12);
      }
  } else
    P = hm, F = Et, O = ym, G = Tn;
  for (var A = 0; A < a; ++A) {
    var q = i[A];
    if (q > 255) {
      var $ = q >> 18 & 31;
      vn(t, p, P[$ + 257]), p += F[$ + 257], $ > 7 && (bt(t, p, q >> 23 & 31), p += fr[$]);
      var T = q & 31;
      vn(t, p, O[T]), p += G[T], T > 3 && (vn(t, p, q >> 5 & 8191), p += hr[T]);
    } else
      vn(t, p, P[q]), p += F[q];
  }
  return vn(t, p, P[256]), p + F[256];
}, wm = /* @__PURE__ */ new ga([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), vl = /* @__PURE__ */ new we(0), xm = function(e, t, n, i, o, r) {
  var s = r.z || e.length, a = new we(i + s + 5 * (1 + Math.ceil(s / 7e3)) + o), c = a.subarray(i, a.length - o), l = r.l, p = (r.r || 0) & 7;
  if (t) {
    p && (c[0] = r.r >> 3);
    for (var y = wm[t - 1], f = y >> 13, h = y & 8191, v = (1 << n) - 1, x = r.p || new Le(32768), b = r.h || new Le(v + 1), I = Math.ceil(n / 3), g = 2 * I, m = function(K) {
      return (e[K] ^ e[K + 1] << I ^ e[K + 2] << g) & v;
    }, d = new ga(25e3), u = new Le(288), w = new Le(32), S = 0, A = 0, j = r.i || 0, R = 0, E = r.w || 0, L = 0; j + 2 < s; ++j) {
      var _ = m(j), C = j & 32767, D = b[_];
      if (x[C] = D, b[_] = C, E <= j) {
        var P = s - j;
        if ((S > 7e3 || R > 24576) && (P > 423 || !l)) {
          p = fd(e, c, 0, d, u, w, A, R, L, j - L, p), R = S = A = 0, L = j;
          for (var F = 0; F < 286; ++F)
            u[F] = 0;
          for (var F = 0; F < 30; ++F)
            w[F] = 0;
        }
        var O = 2, G = 0, k = h, M = C - D & 32767;
        if (P > 2 && _ == m(j - M))
          for (var V = Math.min(f, P) - 1, N = Math.min(32767, j), $ = Math.min(258, P); M <= N && --k && C != D; ) {
            if (e[j + O] == e[j + O - M]) {
              for (var q = 0; q < $ && e[j + q] == e[j + q - M]; ++q)
                ;
              if (q > O) {
                if (O = q, G = M, q > V)
                  break;
                for (var T = Math.min(M, q - 2), z = 0, F = 0; F < T; ++F) {
                  var H = j - M + F & 32767, Q = x[H], J = H - Q & 32767;
                  J > z && (z = J, D = H);
                }
              }
            }
            C = D, D = x[C], M += C - D & 32767;
          }
        if (G) {
          d[R++] = 268435456 | Ds[O] << 18 | ud[G];
          var U = Ds[O] & 31, B = ud[G] & 31;
          A += fr[U] + hr[B], ++u[257 + U], ++w[B], E = j + O, ++S;
        } else
          d[R++] = e[j], ++u[e[j]];
      }
    }
    for (j = Math.max(j, E); j < s; ++j)
      d[R++] = e[j], ++u[e[j]];
    p = fd(e, c, l, d, u, w, A, R, L, j - L, p), l || (r.r = p & 7 | c[p / 8 | 0] << 3, p -= 7, r.h = b, r.p = x, r.i = j, r.w = E);
  } else {
    for (var j = r.w || 0; j < s + l; j += 65535) {
      var Z = j + 65535;
      Z >= s && (c[p / 8 | 0] = l, Z = s), p = gl(c, p + 1, e.subarray(j, Z));
    }
    r.i = s;
  }
  return yl(a, 0, i + va(p) + o);
}, Sm = /* @__PURE__ */ (function() {
  for (var e = new Int32Array(256), t = 0; t < 256; ++t) {
    for (var n = t, i = 9; --i; )
      n = (n & 1 && -306674912) ^ n >>> 1;
    e[t] = n;
  }
  return e;
})(), Im = function() {
  var e = -1;
  return {
    p: function(t) {
      for (var n = e, i = 0; i < t.length; ++i)
        n = Sm[n & 255 ^ t[i]] ^ n >>> 8;
      e = n;
    },
    d: function() {
      return ~e;
    }
  };
}, Am = function(e, t, n, i, o) {
  if (!o && (o = { l: 1 }, t.dictionary)) {
    var r = t.dictionary.subarray(-32768), s = new we(r.length + e.length);
    s.set(r), s.set(e, r.length), e = s, o.w = r.length;
  }
  return xm(e, t.level == null ? 6 : t.level, t.mem == null ? o.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + t.mem, n, i, o);
}, Us = function(e, t, n) {
  for (; n; ++t)
    e[t] = n, n >>>= 8;
}, qm = function(e, t) {
  var n = t.filename;
  if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : t.level == 9 ? 2 : 0, e[9] = 3, t.mtime != 0 && Us(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n) {
    e[3] = 8;
    for (var i = 0; i <= n.length; ++i)
      e[i + 10] = n.charCodeAt(i);
  }
}, Rm = function(e) {
  (e[0] != 31 || e[1] != 139 || e[2] != 8) && Qe(6, "invalid gzip data");
  var t = e[3], n = 10;
  t & 4 && (n += (e[10] | e[11] << 8) + 2);
  for (var i = (t >> 3 & 1) + (t >> 4 & 1); i > 0; i -= !e[n++])
    ;
  return n + (t & 2);
}, jm = function(e) {
  var t = e.length;
  return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
}, $m = function(e) {
  return 10 + (e.filename ? e.filename.length + 1 : 0);
};
function _m(e, t) {
  t || (t = {});
  var n = Im(), i = e.length;
  n.p(e);
  var o = Am(e, t, $m(t), 8), r = o.length;
  return qm(o, t), Us(o, r - 8, n.d()), Us(o, r - 4, i), o;
}
function Pm(e, t) {
  var n = Rm(e);
  return n + 8 > e.length && Qe(6, "invalid gzip data"), bm(e.subarray(n, -8), { i: 2 }, new we(jm(e)), t);
}
var Tm = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Cm = 0;
try {
  Tm.decode(vl, { stream: !0 }), Cm = 1;
} catch {
}
function hd(e) {
  return Object.assign(new RangeError(`Cannot create a buffer larger than maxOutputLength ${e}.`), { code: "ERR_BUFFER_TOO_LARGE" });
}
function Em(e, t = {}) {
  const n = t.maxOutputLength ?? Number.MAX_SAFE_INTEGER;
  if (e.length >= 18) {
    const o = e.length - 4;
    if ((e[o] | e[o + 1] << 8 | e[o + 2] << 16 | e[o + 3] << 24) >>> 0 > n) throw hd(n);
  }
  const i = Pm(e);
  if (i.length > n) throw hd(n);
  return i;
}
const Gs = 131072, km = 2 * 1024 * 1024;
class Ui extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "StatusListError";
  }
}
function Mm(e, t = km) {
  if (typeof e != "string" || !/^u[A-Za-z0-9_-]+$/.test(e))
    throw new Ui("MALFORMED", 'encodedList must be multibase base64url (prefix "u").');
  let n;
  try {
    n = Em(Lm(e.slice(1)), { maxOutputLength: t });
  } catch (i) {
    throw i.code === "ERR_BUFFER_TOO_LARGE" || /maxOutputLength|buffer/i.test(String(i)) ? new Ui("TOO_LARGE", `Decompressed status list exceeds ${t} bytes.`) : new Ui("MALFORMED", "encodedList is not valid GZIP data.");
  }
  if (n.byteLength * 8 < Gs)
    throw new Ui("TOO_SHORT", `Status list has fewer than ${Gs} bits.`);
  return new Uint8Array(n);
}
function Lm(e) {
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
function Fs(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Bs(e, t) {
  const n = e.credentialStatus;
  if (n === void 0) return {};
  const i = Array.isArray(n) ? n : [n];
  if (i.length === 0 || !i.every(Fs)) return { reason: "Unsupported credentialStatus form." };
  const o = i.filter((r) => t.includes(String(r.statusPurpose)));
  return o.length > 1 ? { reason: `Several status entries for ${t.join("/")}.` } : o.length === 0 ? { reason: `No status entry has an accepted purpose (${t.join(", ")}); found ${i.map((r) => String(r.statusPurpose)).join(", ")}.` } : { entry: o[0] };
}
function Nm(e, t, n, i, o, r = o) {
  const s = Bs(e, i.purposes), a = s.entry;
  if (a === void 0 && s.reason === void 0)
    return i.required ? { state: "not_established", reason: "Status is required by the profile but the credential names none.", sources: [] } : { state: "established", reason: "The profile does not require status for this credential.", sources: [] };
  if (a === void 0) return { state: "not_established", reason: s.reason, sources: ["/credentialStatus"] };
  if (a.type !== "BitstringStatusListEntry" || typeof a.statusListCredential != "string" || typeof a.statusListIndex != "string")
    return { state: "not_established", reason: "Unsupported credentialStatus form.", sources: ["/credentialStatus"] };
  const c = a.statusListCredential, l = ["/credentialStatus", c];
  if (t === void 0)
    return { state: "not_established", reason: `Status list ${c} is unavailable.`, listUri: c, sources: l };
  if (n !== "established")
    return { state: "not_established", reason: `Status list ${c} is not protected and valid.`, listUri: c, sources: l };
  if (t.id !== c)
    return { state: "not_established", reason: `Resolved status list identifies itself as ${String(t.id)}.`, listUri: c, sources: l };
  const p = (g) => Fs(g) ? g.id : g;
  if (typeof p(t.issuer) != "string" || p(t.issuer) !== p(e.issuer))
    return { state: "not_established", reason: `Status list is signed by ${String(p(t.issuer))}, who may not state status for credentials of ${String(p(e.issuer))}.`, listUri: c, sources: l };
  const y = t.credentialSubject;
  if (!Fs(y) || y.type !== "BitstringStatusList" || y.statusPurpose !== a.statusPurpose)
    return { state: "not_established", reason: "Status list purpose does not match the entry.", listUri: c, sources: l };
  const f = Date.parse(o), h = Date.parse(String(t.validFrom));
  if (!Number.isFinite(f) || !Number.isFinite(h) || (f - h) / 1e3 > i.maxAgeSeconds)
    return { state: "not_established", reason: `Status list is older than the profile's ${i.maxAgeSeconds} s freshness limit.`, listUri: c, sources: l };
  const v = Date.parse(r);
  if (!Number.isFinite(v) || v < h)
    return { state: "not_established", reason: `Status list observed at ${String(t.validFrom)} cannot establish status at the earlier activity time ${r}; historical status is unavailable.`, listUri: c, sources: l };
  if (!/^(0|[1-9][0-9]*)$/.test(a.statusListIndex))
    return { state: "not_established", reason: "statusListIndex is not a non-negative integer.", listUri: c, sources: l };
  let x;
  try {
    x = Om(Mm(y.encodedList), Number(a.statusListIndex));
  } catch (g) {
    return { state: "not_established", reason: `Status list cannot be read: ${g.message}`, listUri: c, sources: l };
  }
  const [b, I] = a.statusPurpose === "suspension" ? ["Suspended", "Not suspended"] : ["Revoked", "Not revoked"];
  return x ? { state: "contradicted", reason: `${b}: bit ${a.statusListIndex} of ${c} is set.`, listUri: c, sources: l } : { state: "established", reason: `${I}: bit ${a.statusListIndex} of ${c} is clear.`, listUri: c, sources: l };
}
const Dm = Object.freeze({ maxResources: 1e3, maxBytes: 2e7 });
function ba(e, t, n) {
  if (!(e.binding.id === t.id && e.binding.version === t.version && e.profile.id === n.id && e.profile.version === n.version))
    return `Requested ${e.profile.id}@${e.profile.version} with binding ${e.binding.id}@${e.binding.version} is not the verifier-selected profile ${n.id}@${n.version} for ${t.id}@${t.version}.`;
}
function wa(e, t) {
  const n = `${e.targetId} | plan`;
  return ir({
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
async function xa(e, t, n, i, o) {
  const r = Ma(t.openSession({
    maxResources: e.resolverLimits.maxResources,
    maxBytes: e.resolverLimits.maxBytes
  })), s = Ma(t.openSession(Dm)), a = { manifest: n, evaluationTime: e.evaluationTime, staticResolver: s, ...o ? { binding: o } : {} }, c = (S) => JSON.parse(new TextDecoder().decode(r.resolve(S).bytes)), l = await gn(e.targetId, r, a), p = [l], y = /* @__PURE__ */ new Map([[e.targetId, 0]]);
  for (const S of e.suppliedEvidence)
    y.has(S) || (y.set(S, 1), p.push(await gn(S, r, a)));
  const f = new Set(um(i));
  for (const S of f)
    y.has(S) || (y.set(S, 1), p.push(await gn(S, r, a)));
  for (let S = 0; S < p.length; S++) {
    const A = p[S], j = y.get(A.artifactId);
    if (A.protection.state !== "established" || j + 1 > e.resolverLimits.maxDepth) continue;
    const R = c(A.artifactId), E = [
      ...(Array.isArray(R.termsOfUse) ? R.termsOfUse : []).map((L) => L?.authorizationCredential?.id),
      ...(Array.isArray(R.evidence) ? R.evidence : []).map((L) => L?.id)
    ].filter((L) => typeof L == "string");
    for (const L of E)
      y.has(L) || (y.set(L, j + 1), p.push(await gn(L, r, a)));
  }
  const h = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map();
  for (const S of p) {
    if (S.protection.state !== "established") {
      x.set(S.artifactId, void 0);
      continue;
    }
    const A = c(S.artifactId).id;
    x.set(S.artifactId, A === S.artifactId ? oe("established", ["Artifact identifies itself by its resolved identity."], ["/id"]) : oe("contradicted", [`Artifact resolved as ${S.artifactId} identifies itself as ${String(A)}.`], ["/id"]));
  }
  const b = async (S, A, j) => {
    const R = y.get(S) + 1;
    if (R > e.resolverLimits.maxDepth)
      return {
        state: "not_established",
        sources: ["/credentialStatus"],
        reason: `Status list is at depth ${R}, beyond the request's maxDepth ${e.resolverLimits.maxDepth}.`
      };
    const E = Bs(A, j.purposes).entry, L = typeof E?.statusListCredential == "string" ? E.statusListCredential : void 0;
    let _, C = "not_established";
    if (L !== void 0) {
      h.has(L) || h.set(L, await gn(L, r, a));
      const D = h.get(L);
      D.digestSRI !== void 0 && D.protection.state === "established" ? (_ = c(L), C = xe([D.protection.state, D.validity.state])) : D.digestSRI !== void 0 && (_ = {}, C = D.protection.state);
    }
    return Nm(A, _, C, j, e.evaluationTime, e.activityTime);
  }, I = { required: !0, purposes: ["suspension"], maxAgeSeconds: i.credentialStatus.maxAgeSeconds }, g = /* @__PURE__ */ new Map();
  for (const S of p) {
    if (S.protection.state !== "established") {
      v.set(S.artifactId, void 0);
      continue;
    }
    const A = c(S.artifactId);
    v.set(S.artifactId, await b(S.artifactId, A, i.credentialStatus)), Bs(A, ["suspension"]).entry !== void 0 && g.set(S.artifactId, await b(S.artifactId, A, I));
  }
  const m = (S) => [
    S.protection,
    x.get(S.artifactId) ? {
      artifactId: S.artifactId,
      ...x.get(S.artifactId),
      reasons: x.get(S.artifactId).reasons.map((A) => `identity: ${A}`)
    } : { artifactId: S.artifactId, ...un("identity: Not evaluated because protection is not established.") },
    {
      artifactId: S.artifactId,
      ...S.validity,
      reasons: S.validity.reasons.map((A) => `validity: ${A}`)
    },
    ...v.get(S.artifactId) ? [{ artifactId: S.artifactId, ...oe(
      v.get(S.artifactId).state,
      [`status: ${v.get(S.artifactId).reason}`],
      [...v.get(S.artifactId).sources]
    ) }] : [{
      artifactId: S.artifactId,
      ...un("status: Not evaluated because protection is not established.")
    }],
    ...S.relatedResources.map((A) => ({
      artifactId: A.id,
      ...oe(A.state, [`integrity (from ${S.artifactId}): ${A.reason}`], ["/relatedResource"])
    }))
  ], d = /* @__PURE__ */ new Map();
  for (const S of p) {
    const A = [
      ["protection", S.protection.state, S.protection.reasons.join(" ")],
      ["identity", x.get(S.artifactId)?.state ?? "not_established", x.get(S.artifactId)?.reasons.join(" ") ?? "not evaluated"],
      ["validity", S.validity.state, S.validity.reasons.join(" ")],
      ["status", v.get(S.artifactId)?.state ?? "not_established", v.get(S.artifactId)?.reason ?? "not evaluated"]
    ], j = xe(A.map((E) => E[1])), R = g.get(S.artifactId);
    d.set(S.artifactId, {
      uri: S.artifactId,
      usable: j,
      reason: A.filter((E) => E[1] !== "established").map((E) => `${E[0]}: ${E[2]}`).join("; ") || "usable",
      ...j === "established" ? { document: c(S.artifactId) } : {},
      ...R ? { suspension: { state: R.state, reason: R.reason } } : {}
    });
  }
  const u = [], w = [];
  p.forEach((S, A) => {
    const j = A === 0 ? "target" : f.has(S.artifactId) ? "recognition-list" : "supplied-evidence", R = ur(S.artifactId, S.digestSRI, j, e);
    for (const _ of S.checks)
      u.push({
        gate: am[_.check],
        nodeUse: R,
        predicate: _.check,
        state: _.state,
        execution: "executed",
        reason: _.reason,
        sources: [S.artifactId]
      });
    for (const _ of S.relatedResources)
      u.push({
        gate: 1,
        nodeUse: R,
        predicate: "related-resource-integrity",
        state: _.state,
        execution: "executed",
        reason: `${_.id}: ${_.reason}`,
        sources: ["/relatedResource", _.id]
      });
    const E = x.get(S.artifactId);
    u.push(E ? {
      gate: 1,
      nodeUse: R,
      predicate: "resource-identity",
      state: E.state,
      execution: "executed",
      reason: E.reasons.join(" "),
      sources: [...E.sourcePointers]
    } : {
      gate: 1,
      nodeUse: R,
      predicate: "resource-identity",
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated because protection is not established.",
      sources: []
    }), u.push({
      gate: 3,
      nodeUse: R,
      predicate: "validity-period",
      state: S.validity.state,
      execution: S.validity.execution,
      reason: S.validity.reasons.join(" ") || "Not evaluated.",
      sources: [...S.validity.sourcePointers]
    });
    const L = v.get(S.artifactId);
    u.push(L ? {
      gate: 3,
      nodeUse: R,
      predicate: "credential-status",
      state: L.state,
      execution: "executed",
      reason: L.reason,
      sources: [...L.sources]
    } : {
      gate: 3,
      nodeUse: R,
      predicate: "credential-status",
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated because protection is not established.",
      sources: []
    }), S.digestSRI !== void 0 && w.push({
      uri: S.artifactId,
      digestSRI: S.digestSRI,
      kind: "artifact",
      source: "catalog",
      observedAt: e.evaluationTime
    });
  });
  for (const [S, A] of h)
    A.digestSRI !== void 0 && w.push({ uri: S, digestSRI: A.digestSRI, kind: "status", source: "catalog", observedAt: e.evaluationTime });
  return {
    target: l,
    artifacts: p,
    facts: d,
    verificationOf: m,
    artifactVerification: p.flatMap(m),
    trace: u,
    resources: w
  };
}
const zm = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/, Sa = Object.freeze({ "kg/kg": 0, "mg/kg": -6 });
function mr(e) {
  if (typeof e != "string" || !zm.test(e)) return;
  const [t, n = ""] = e.split(".");
  return { n: BigInt(`${t}${n}`), scale: n.length };
}
function Cn(e, t) {
  const n = mr(e), i = typeof t == "string" ? Sa[t] : void 0;
  if (!(n === void 0 || i === void 0))
    return i <= 0 ? { n: n.n, scale: n.scale - i } : { n: n.n * 10n ** BigInt(i), scale: n.scale };
}
function _e(e, t) {
  const n = Math.max(e.scale, t.scale), i = e.n * 10n ** BigInt(n - e.scale), o = t.n * 10n ** BigInt(n - t.scale);
  return i < o ? -1 : i > o ? 1 : 0;
}
function Vm(e, t) {
  const n = Math.max(e.scale, t.scale);
  return { n: e.n * 10n ** BigInt(n - e.scale) + t.n * 10n ** BigInt(n - t.scale), scale: n };
}
function qn(e) {
  const t = e.n.toString().padStart(e.scale + 1, "0");
  if (e.scale === 0) return t;
  const n = t.slice(-e.scale).replace(/0+$/, "");
  return n.length === 0 ? t.slice(0, -e.scale) : `${t.slice(0, -e.scale)}.${n}`;
}
function Zs(e) {
  const t = e.range;
  if (t === void 0) return "Scope record has no range.";
  const n = Cn(t.from, t.unit), i = Cn(t.to, t.unit);
  return n === void 0 || i === void 0 ? `Unsupported or malformed range ${String(t.from)}–${String(t.to)} ${String(t.unit)}.` : _e(n, i) > 0 ? "Scope record range is reversed." : { low: n, high: i };
}
const Gi = (e) => Array.isArray(e) ? e.filter((t) => typeof t == "string") : [], md = (e, t) => e.length > 0 && e.every((n) => t.includes(n));
function Um(e, t) {
  if (e.length === 0) return { state: "not_established", reason: "The projected scope has no records.", witnesses: [] };
  const n = [];
  for (const i of e) {
    const o = Zs(i);
    if (typeof o == "string")
      return { state: /reversed/.test(o) ? "contradicted" : "not_established", reason: `${String(i.id)}: ${o}`, witnesses: n };
    const r = Gi(i.allowedPropertyIris), s = Gi(i.allowedMethodIris);
    if (r.length === 0 || s.length === 0 || typeof i.matrixIri != "string" || typeof i.formIri != "string" || typeof i.quantityKindIri != "string")
      return { state: "not_established", reason: `${String(i.id)}: a restricted dimension is missing or empty.`, witnesses: n };
    const a = t.find((c) => {
      const l = Zs(c);
      return typeof l != "string" && c.matrixIri === i.matrixIri && c.formIri === i.formIri && c.quantityKindIri === i.quantityKindIri && md(r, Gi(c.allowedPropertyIris)) && md(s, Gi(c.allowedMethodIris)) && _e(o.low, l.low) >= 0 && _e(o.high, l.high) <= 0;
    });
    if (a === void 0)
      return { state: "contradicted", reason: `${String(i.id)} is not contained in any single parent record.`, witnesses: n };
    n.push({ child: String(i.id), parent: String(a.id) });
  }
  return { state: "established", reason: `Each projected record lies within one parent record (${n.map((i) => `${i.child} ⊆ ${i.parent}`).join("; ")}).`, witnesses: n };
}
const Rn = "https://vc4qi.example/bindings/rm/1#", jn = Object.freeze({
  issueRmCertificate: `${Rn}issueRmCertificate`,
  maintainRmScope: `${Rn}maintainRmScope`,
  issueRmStudy: `${Rn}issueRmStudy`
}), $e = (e, t, n = []) => ({ id: e, state: "established", reason: t, sources: n }), Ue = (e, t, n = []) => ({ id: e, state: "contradicted", reason: t, sources: n }), me = (e, t, n = []) => ({ id: e, state: "not_established", reason: t, sources: n }), kt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Ve = (e) => Array.isArray(e) ? e : [], Te = (e) => kt(e.credentialSubject) ? e.credentialSubject : {}, Hs = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0, dt = (e, t) => Ve(Te(e).permittedActivity).includes(t);
function bl(e, t = "RmAuthorizationPolicy") {
  return Ve(e.termsOfUse).filter(kt).filter((n) => n.type === t && kt(n.authorizationCredential)).map((n) => n.authorizationCredential).filter((n) => typeof n.id == "string").map((n) => ({ id: n.id, type: n.type }));
}
function Ye(e, t, n, i, o, r = "RmAuthorizationPolicy") {
  const s = bl(t, r).filter((l) => l.type === n).map((l) => l.id);
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
  } } : Hs(c.document) !== n ? { basis: Ue(e, `Reference declares ${n}, but ${a} is a ${String(Hs(c.document))}.`, ["/termsOfUse", a]) } : { basis: $e(e, `References ${n} ${a}.`, ["/termsOfUse", a]), node: c };
}
function pt(e, t, n, i) {
  const o = Te(t).id;
  return typeof o != "string" || typeof n != "string" ? me(e, `${i}: grantee or exercising actor is missing.`, ["/credentialSubject/id", "/issuer"]) : o === n ? $e(e, `${i}: grantee ${o} is the exercising actor.`, ["/credentialSubject/id", "/issuer"]) : Ue(e, `${i}: grantee ${o} is not the exercising actor ${n}.`, ["/credentialSubject/id", "/issuer"]);
}
function On(e, t, n, i) {
  const o = i.trustAnchors.find((r) => r.id === t.issuer);
  return o === void 0 ? me(e, `${String(t.issuer)} is not a configured trust anchor.`, ["/issuer"]) : o.purposes.includes(n) ? $e(e, `${String(t.issuer)} is a configured anchor for ${n}.`, ["/issuer"]) : me(e, `${String(t.issuer)} is an anchor, but not for ${n}.`, ["/issuer"]);
}
function Lt(e, t) {
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
function Gm(e, t, n, i) {
  const o = e.document, r = [], s = [e.uri], a = Ye("authorizing-reference", o, "RmOperationalScope", t, i);
  if (r.push(a.basis), !a.node) return pe("operational-scope", r, s);
  const c = a.node.document;
  s.push(a.node.uri), r.push(pt("principal-binding", c, o.issuer, "Operational scope O")), r.push(c.issuer === Te(c).id ? $e("self-maintained-scope", "O is issued by its own grantee.", ["/issuer"]) : Ue("self-maintained-scope", "O is not issued by its own grantee.", ["/issuer"])), r.push(dt(c, jn.issueRmCertificate) ? $e("activity-permission", "O permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : Ue("activity-permission", "O does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"]));
  const l = Ye("maintenance-grant", c, "RmAccreditation", t, [...i, a.node.uri]);
  if (r.push(l.basis), !l.node) return pe("operational-scope", r, s);
  const p = l.node.document;
  s.push(l.node.uri), r.push(pt("accreditation-grantee", p, c.issuer, "Accreditation A")), r.push(dt(p, jn.maintainRmScope) && dt(p, jn.issueRmCertificate) ? $e("projection-permission", "A permits maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]) : Ue("projection-permission", "A does not permit maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]));
  const y = Um(Ve(Te(c).scope).filter(kt), Ve(Te(p).scope).filter(kt));
  r.push({ id: "bounded-projection", state: y.state, reason: y.reason, sources: ["/credentialSubject/scope"] });
  const f = pr("trust-anchor", p, "accredit-rm-producers", n, t, Te(o).activityTime);
  return r.push(f.basis), f.list && s.push(f.list), r.push(Lt(o, [["O", c], ["A", p]])), pe("operational-scope", r, s, a.node.uri);
}
function Fm(e, t, n, i) {
  const o = e.document, r = [], s = [e.uri], a = Ye("authorizing-reference", o, "RmAccreditation", t, i);
  if (r.push(a.basis), !a.node) return pe("direct-accreditation", r, s);
  const c = a.node.document;
  s.push(a.node.uri), r.push(pt("principal-binding", c, o.issuer, "Accreditation A")), r.push(dt(c, jn.issueRmCertificate) ? $e("activity-permission", "A permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : Ue("activity-permission", "A does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"]));
  const l = pr("trust-anchor", c, "accredit-rm-producers", n, t, Te(o).activityTime);
  return r.push(l.basis), l.list && s.push(l.list), r.push(Lt(o, [["A", c]])), pe("direct-accreditation", r, s, a.node.uri);
}
const Bm = Object.freeze({
  "operational-scope": Gm,
  "direct-accreditation": Fm
});
function Zm(e, t, n) {
  const i = "restriction:accreditation-suspension", o = e.document.issuer, r = /* @__PURE__ */ new Set([e.uri]), s = [e.document], a = [];
  for (; s.length > 0; )
    for (const p of bl(s.shift())) {
      if (r.has(p.id)) continue;
      r.add(p.id);
      const y = t(p.id);
      if (y?.usable !== "established" || y.document === void 0) continue;
      s.push(y.document);
      const f = y.document;
      Hs(f) === "RmAccreditation" && Te(f).id === o && pr(
        "anchor",
        f,
        "accredit-rm-producers",
        n,
        t,
        Te(e.document).activityTime
      ).basis.state === "established" && a.push(y);
    }
  if (a.length === 0)
    return me(i, `No accreditation of ${String(o)} is reached, so the absence of a suspension is not established.`);
  const c = a.map((p) => p.suspension === void 0 ? me(i, `${p.uri} carries no suspension status.`, [p.uri]) : { id: i, state: p.suspension.state, reason: `${p.uri}: ${p.suspension.reason}`, sources: [p.uri] }), l = xe(c.map((p) => p.state));
  return {
    id: i,
    state: l,
    reason: l === "contradicted" ? `The actor's certification activity is suspended. ${c.filter((p) => p.state === "contradicted").map((p) => p.reason).join(" ")}` : c.map((p) => p.reason).join(" "),
    sources: a.map((p) => p.uri)
  };
}
const Hm = Object.freeze({
  "accreditation-suspension": Zm
});
function Nn(e, t, n) {
  const i = [
    ...t,
    ...n.map((l) => ({ id: l, state: "not_established", execution: "not_run", bases: [], chain: [] }))
  ], o = e.length === 0 ? "established" : xe(e.map((l) => l.state)), r = i.length === 0 ? "not_established" : pn(i.map((l) => l.state)), s = xe([o, r]), a = i.find((l) => l.state === "established"), c = s === "established" ? `Authorized through route ${a.id}; global restrictions hold.` : o === "contradicted" ? "An applicable global restriction applies to every route." : r === "contradicted" ? "Every permitted route is contradicted." : n.length > 0 ? "The route search stopped at its budget before every route was evaluated." : "No complete route is established.";
  return { state: s, reason: c, restrictions: e, routes: i };
}
function yr(e, t) {
  const n = e.routes.filter((o) => o.execution === "executed").map((o) => {
    const s = (o.scope === void 0 ? void 0 : t(o)) ?? me("claim-coverage", "The route did not reach a scope credential.");
    return { ...o, bases: [...o.bases, s], state: xe([o.state, s.state]) };
  }), i = e.routes.filter((o) => o.execution === "not_run").map((o) => o.id);
  return Nn(e.restrictions, n, i);
}
function Jm(e, t, n) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] };
  const i = e, o = n.authority.certificateRoutes, r = n.authority.maxRoutes, s = o.slice(0, r).map((c) => {
    const l = Bm[c];
    return l === void 0 ? pe(c, [me("installed-evaluator", `Route ${c} has no installed evaluator.`)], [i.uri]) : l(i, t, n, [i.uri]);
  }), a = n.authority.globalRestrictions.map((c) => {
    const l = Hm[c];
    return l === void 0 ? me(`restriction:${c}`, `Global restriction ${c} has no installed evaluator.`) : l(i, t, n);
  });
  return Nn(a, s, o.slice(r));
}
function Km(e, t, n, i) {
  const o = e.document, r = [], s = [e.uri], a = Ye("laboratory-authority-reference", o, "RmLabAuthority", t, i);
  if (r.push(a.basis), !a.node) return pe("laboratory-authority", r, s);
  const c = a.node.document;
  s.push(a.node.uri), r.push(pt("laboratory-binding", c, o.issuer, "Laboratory authority H")), r.push(dt(c, jn.issueRmStudy) ? $e("study-permission", "H permits issuing RM studies.", ["/credentialSubject/permittedActivity"]) : Ue("study-permission", "H does not permit issuing RM studies.", ["/credentialSubject/permittedActivity"]));
  const l = Te(o), p = Ve(Te(c).scope).filter(kt).some((f) => f.matrixIri === l.matrixIri && Ve(f.allowedPropertyIris).includes(l.propertyIri) && Ve(f.studyTypeIris).includes(l.studyTypeIri));
  r.push(p ? $e("study-scope", "H covers this matrix, property and study type.", ["/credentialSubject/scope"]) : Ue("study-scope", "H does not cover this matrix, property and study type.", ["/credentialSubject/scope"]));
  const y = pr("laboratory-anchor", c, "accredit-rm-laboratories", n, t, l.activityTime);
  return r.push(y.basis), y.list && s.push(y.list), pe("laboratory-authority", r, s);
}
function Qm(e, t, n) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const i = e.document, o = Ve(i.evidence).filter(kt).filter((I) => I.type === "RmStudyReference").map((I) => String(I.id));
  if (o.length === 0)
    return { state: "not_established", reason: "D cites no required study.", bases: [me("study-reference", "No RmStudyReference in evidence.", ["/evidence"])], chain: [e.uri] };
  if (o.length > 1)
    return { state: "not_established", reason: "Several study references; this binding has no composition for them.", bases: [me("study-reference", "Ambiguous study references.", ["/evidence"])], chain: [e.uri] };
  const r = o[0], s = t(r);
  if (s === void 0) {
    const I = me("study-reference", `Required study ${r} is unavailable.`, ["/evidence", r]);
    return { state: "not_established", reason: I.reason, bases: [I], chain: [e.uri] };
  }
  if (s.usable !== "established" || s.document === void 0) {
    const I = {
      id: "study-reference",
      state: s.usable === "contradicted" ? "contradicted" : "not_established",
      reason: `Required study ${r} is not usable: ${s.reason}`,
      sources: ["/evidence", r]
    };
    return { state: I.state, reason: I.reason, bases: [I], chain: [e.uri] };
  }
  const a = s.document, c = Te(a), l = Te(i), p = kt(Ve(l.materialPropertiesList)[0]) ? Ve(Ve(l.materialPropertiesList)[0].results)[0] : void 0, y = Ve(l.materials)[0], f = [$e("study-reference", `Cites study ${r}.`, ["/evidence", r])];
  f.push(c.id === l.id ? $e("same-batch", `S concerns batch ${String(c.id)}.`, ["/credentialSubject/id"]) : Ue("same-batch", `S concerns ${String(c.id)}, not batch ${String(l.id)}.`, ["/credentialSubject/id"])), f.push(c.propertyIri === p?.propertyIri && c.matrixIri === y?.matrixIri ? $e("same-property-and-matrix", "S concerns the certified property and matrix.", ["/credentialSubject/propertyIri"]) : Ue("same-property-and-matrix", "S concerns another property or matrix.", ["/credentialSubject/propertyIri"])), f.push(c.studyTypeIri === `${Rn}Homogeneity` && c.outcomeIri === `${Rn}Homogeneous` ? $e("study-outcome", "S reports the batch homogeneous.", ["/credentialSubject/outcomeIri"]) : Ue("study-outcome", "S does not report a homogeneous batch.", ["/credentialSubject/outcomeIri"]));
  const h = Date.parse(String(c.activityTime)), v = Date.parse(String(l.activityTime));
  f.push(Number.isFinite(h) && Number.isFinite(v) ? h <= v ? $e("study-precedes-certification", "The study precedes the certification activity.", ["/credentialSubject/activityTime"]) : Ue("study-precedes-certification", "The study postdates the certification activity.", ["/credentialSubject/activityTime"]) : me("study-precedes-certification", "An activity time is missing.", ["/credentialSubject/activityTime"]));
  const x = Km(s, t, n, [e.uri, r]);
  f.push(...x.bases);
  const b = xe(f.map((I) => I.state));
  return {
    state: b,
    reason: b === "established" ? "Required study is applicable and independently authorized." : b === "contradicted" ? "Required study is contradicted." : "Required study is not established.",
    bases: f,
    chain: [e.uri, ...x.chain]
  };
}
const Vt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), wl = (e) => Array.isArray(e) ? e : [], yd = (e) => wl(e).filter((t) => typeof t == "string"), le = (e) => String(e).split(/[#/]/).pop();
function Wm(e, t, n) {
  const i = [t], o = Vt(e.credentialSubject) ? e.credentialSubject : {}, r = wl(o.materials).filter(Vt);
  if (r.length !== 1) return { state: "not_established", reason: "The certificate must name exactly one material.", sources: ["/credentialSubject/materials"] };
  const s = r[0];
  if (!Vt(n)) return { state: "not_established", reason: `No result at ${t}.`, sources: i };
  const a = Vt(n.data) && Vt(n.data.quantity) ? n.data.quantity : void 0;
  if (a === void 0) return { state: "not_established", reason: "The result has no quantity.", sources: i };
  const c = Vt(a.unit) ? a.unit.ucumCode : void 0;
  if (typeof c != "string" || Sa[c] === void 0)
    return { state: "not_established", reason: `Unit ${String(c)} has no supported mapping (mg/kg, kg/kg).`, sources: [`${t}/data/quantity/unit`] };
  const l = Vt(a.uncertainty) ? a.uncertainty : void 0, p = mr(l?.coverageFactor);
  if (p === void 0 || _e(p, { n: 2n, scale: 0 }) !== 0)
    return { state: "not_established", reason: `Coverage factor ${String(l?.coverageFactor)} is not the binding's k = 2.`, sources: [`${t}/data/quantity/uncertainty`] };
  const y = Cn(a.value, c), f = Cn(l?.expandedUncertainty, c);
  if (y === void 0 || f === void 0)
    return { state: "not_established", reason: "Value or expanded uncertainty is not a supported decimal.", sources: [`${t}/data/quantity`] };
  const h = {
    matrixIri: s.matrixIri,
    formIri: s.formIri,
    propertyIri: n.propertyIri,
    methodIri: n.methodIri,
    quantityKindIri: a.quantityKind
  }, v = Object.entries(h).filter(([, x]) => typeof x != "string").map(([x]) => x);
  return v.length > 0 ? { state: "not_established", reason: `Missing governed identifier: ${v.join(", ")}.`, sources: i } : {
    state: "established",
    reason: `Mapped ${le(h.propertyIri)} by ${le(h.methodIri)} in ${le(h.matrixIri)}: ${String(a.value)} ± ${String(l?.expandedUncertainty)} ${c} (k = 2).`,
    sources: i,
    coordinates: { ...h, value: y, uncertainty: f }
  };
}
function Xm(e, t, n, i) {
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
function Ym(e, t, n, i) {
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: ["/credentialSubject/scope"] };
  const o = t.map((a) => {
    const c = String(a.id), l = Zs(a);
    if (typeof l == "string")
      return { id: c, state: /reversed/.test(l) ? "contradicted" : "not_established", reason: `${le(c)}: ${l}` };
    const p = [];
    a.matrixIri !== e.matrixIri && p.push(`matrix ${le(e.matrixIri)} ≠ ${le(a.matrixIri)}`), a.formIri !== e.formIri && p.push(`form ${le(e.formIri)} ≠ ${le(a.formIri)}`), a.quantityKindIri !== e.quantityKindIri && p.push(`quantity kind ${le(e.quantityKindIri)} ≠ ${le(a.quantityKindIri)}`), yd(a.allowedPropertyIris).includes(e.propertyIri) || p.push(`property ${le(e.propertyIri)} is not allowed`), _e(e.value, l.low) < 0 && p.push("value is below the range"), _e(e.value, l.high) > 0 && p.push("value is above the range");
    const y = Xm(e.methodIri, yd(a.allowedMethodIris), n, i);
    if (p.length > 0 || y.state === "contradicted")
      return { id: c, state: "contradicted", reason: `${le(c)}: ${[...p, ...y.state === "contradicted" ? [y.reason] : []].join("; ")}` };
    if (y.state === "not_established") return { id: c, state: "not_established", reason: `${le(c)}: ${y.reason}` };
    const f = qn(Hi(l.low, "mg/kg")), h = qn(Hi(l.high, "mg/kg"));
    return {
      id: c,
      state: "established",
      reason: `${le(c)} covers ${le(e.propertyIri)}, ${y.reason}, ${le(e.matrixIri)}/${le(e.formIri)}, ${qn(Hi(e.value, "mg/kg"))} mg/kg within ${f}–${h} mg/kg`
    };
  }), r = pn(o.map((a) => a.state)), s = o.find((a) => a.state === "established");
  return {
    state: r,
    reason: s ? s.reason : `No single scope record covers the claim (${o.map((a) => a.reason).join(" | ")}).`,
    sources: ["/credentialSubject/scope"],
    ...s ? { record: s.id } : {}
  };
}
function Hi(e, t) {
  const n = Sa[t];
  return n >= 0 ? { n: e.n, scale: e.scale + n } : e.scale + n >= 0 ? { n: e.n, scale: e.scale + n } : { n: e.n * 10n ** BigInt(-(e.scale + n)), scale: 0 };
}
function ey(e, t, n) {
  if (e.propertyIri !== t.propertyIri || e.quantityKindIri !== t.quantityKindIri)
    return { state: "not_established", reason: `Requirement ${t.id} does not apply to this claim's property and quantity kind.`, sources: [] };
  const i = Cn(t.upperLimit.value, t.upperLimit.unit);
  if (i === void 0) return { state: "not_established", reason: `Requirement ${t.id} has an unsupported limit.`, sources: [] };
  const o = t.upperLimit.unit, r = (y) => qn(Hi(y, o)), s = n.acceptWhen === "value-plus-expanded-uncertainty-at-most-limit", a = s ? Vm(e.value, e.uncertainty) : e.value, c = _e(a, i) <= 0, p = `${s ? `${r(e.value)} + ${r(e.uncertainty)} = ${r(a)}` : r(e.value)} ${c ? "≤" : ">"} ${r(i)} ${o}`;
  return {
    state: c ? "established" : "contradicted",
    reason: `${c ? "Conforms" : "Does not conform"} under ${n.id}: ${p}.`,
    sources: [],
    arithmetic: p
  };
}
const ty = /^\/credentialSubject\/materialPropertiesList\/(0|[1-9][0-9]*)\/results\/(0|[1-9][0-9]*)$/;
async function ny(e, t, n, i) {
  if (n.id !== La || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${La}@${n.version}.`);
  const o = ba(e, n, i);
  if (o !== void 0) return Object.freeze({ result: wa(e, o), artifacts: Object.freeze([]) });
  const r = await xa(e, t, n, i), { target: s, artifacts: a, facts: c, verificationOf: l, artifactVerification: p } = r, y = (_) => c.get(_), f = Jm(c.get(e.targetId), y, i), h = Qm(c.get(e.targetId), y, i), v = f.routes.find((_) => _.state === "established"), x = c.get(e.targetId)?.document, b = (Array.isArray(n.scopeAndMapping.methodRevisions) ? n.scopeAndMapping.methodRevisions : []).filter((_) => typeof _?.method == "string" && typeof _?.revises == "string"), I = (_) => {
    const C = c.get(_)?.document?.credentialSubject;
    return Array.isArray(C?.scope) ? C.scope : [];
  }, g = e.selectedClaims.map((_) => {
    if (!(x !== void 0 && ty.test(_.sourcePointer) && ln(x, _.sourcePointer) !== void 0)) {
      const M = x === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${_.sourcePointer} is not a result in the usable target.`;
      return {
        claim: _,
        mapping: void 0,
        coverage: /* @__PURE__ */ new Map(),
        result: { claimId: _.id, routeWitnessIds: [], ...oe("not_established", [M]) }
      };
    }
    const D = Wm(x, _.sourcePointer, ln(x, _.sourcePointer)), P = /* @__PURE__ */ new Map();
    if (D.coordinates === void 0)
      return { claim: _, mapping: D, coverage: P, result: {
        claimId: _.id,
        routeWitnessIds: [],
        ...oe(D.state, [`Gate 4: ${D.reason}`], [_.sourcePointer])
      } };
    const F = D.coordinates, O = yr(f, (M) => {
      const V = Ym(F, I(M.scope), b, i.mapping.methodSuccession), N = [M.scope, ...V.sources];
      return P.set(M.id, { ...V, sources: N }), { id: "claim-coverage", state: V.state, reason: V.reason, sources: N };
    }), G = O.routes.find((M) => M.state === "established"), k = G ? P.get(G.id)?.record : void 0;
    return { claim: _, mapping: D, coverage: P, result: {
      claimId: _.id,
      routeWitnessIds: O.state === "established" && G ? [`route:${G.id}`, ...G.chain, `record:${k}`] : [],
      ...oe(O.state, [
        O.reason,
        ...G ? [P.get(G.id).reason] : [...P].map(([M, V]) => `${M}: ${V.reason}`)
      ], [_.sourcePointer])
    } };
  }), m = g.map((_) => _.result), d = [{
    obligationId: "rm-v1:required-study",
    witnessIds: h.state === "established" ? [...h.chain] : [],
    ...oe(h.state, [h.reason], ["/evidence"])
  }], u = (() => {
    if (!e.conformity) return { requested: !1, execution: "not_run" };
    const _ = { requested: !0, ...e.conformity }, C = i.conformity.requirements.find((G) => G.id === e.conformity.requirementId), D = i.conformity.decisionRules.find((G) => G.id === e.conformity.decisionRuleId);
    if (!C || !D)
      return { ..._, ...oe("not_established", [`Requirement ${e.conformity.requirementId} or decision rule ${e.conformity.decisionRuleId} is not configured in the verifier profile.`]) };
    const P = g.filter((G) => G.mapping?.coordinates?.propertyIri === C.propertyIri && G.mapping.coordinates.quantityKindIri === C.quantityKindIri);
    if (P.length !== 1)
      return { ..._, ...oe("not_established", [`Requirement ${C.id} must apply to exactly one selected claim; ${P.length} match.`]) };
    const F = P[0];
    if (F.result.state !== "established")
      return { ..._, ...un(`Not evaluated: claim ${F.claim.id} is not authorized.`) };
    const O = ey(F.mapping.coordinates, C, D);
    return { ..._, ...oe(O.state, [O.reason], [F.claim.sourcePointer]) };
  })(), w = /* @__PURE__ */ new Set([
    e.targetId,
    ...v?.chain ?? [],
    ...h.state === "established" ? h.chain : []
  ]), S = [
    ...a.filter((_) => w.has(_.artifactId)).flatMap(l).map((_) => _.state),
    ...m.map((_) => _.state),
    ...d.map((_) => _.state),
    ...u.requested ? [u.state] : []
  ], A = ia(S), j = [...r.trace], R = [...r.resources], E = ur(s.artifactId, s.digestSRI, "target", e);
  for (const { claim: _, mapping: C, coverage: D } of g) {
    C && j.push({
      gate: 4,
      nodeUse: E,
      predicate: `claim-mapping:${_.id}`,
      state: C.state,
      execution: "executed",
      reason: C.reason,
      sources: [...C.sources]
    });
    for (const [P, F] of D)
      j.push({
        gate: 5,
        nodeUse: E,
        predicate: `claim-coverage:${_.id}:${P}`,
        state: F.state,
        execution: "executed",
        reason: F.reason,
        sources: [...F.sources]
      });
  }
  for (const _ of m)
    j.push({
      gate: 5,
      nodeUse: E,
      predicate: `claim-authorization:${_.claimId}`,
      state: _.state,
      execution: _.execution,
      reason: _.reasons.join(" "),
      sources: [..._.sourcePointers]
    });
  for (const _ of f.restrictions)
    j.push({
      gate: 5,
      nodeUse: E,
      predicate: _.id,
      state: _.state,
      execution: "executed",
      reason: _.reason,
      sources: [..._.sources]
    });
  j.push({
    gate: 5,
    nodeUse: E,
    predicate: "authority",
    state: f.state,
    execution: "executed",
    reason: f.reason,
    sources: v ? [...v.chain] : []
  });
  for (const _ of f.routes) {
    j.push(_.execution === "not_run" ? {
      gate: 5,
      nodeUse: E,
      predicate: `route:${_.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: E,
      predicate: `route:${_.id}`,
      state: _.state,
      execution: "executed",
      reason: `Route ${_.id} is ${_.state}.`,
      sources: [..._.chain]
    });
    for (const C of _.bases)
      j.push({
        gate: 5,
        nodeUse: E,
        predicate: `route:${_.id}:${C.id}`,
        state: C.state,
        execution: "executed",
        reason: C.reason,
        sources: [...C.sources]
      });
  }
  for (const _ of h.bases)
    j.push({
      gate: 6,
      nodeUse: E,
      predicate: `support:${_.id}`,
      state: _.state,
      execution: "executed",
      reason: _.reason,
      sources: [..._.sources]
    });
  for (const _ of d)
    j.push({
      gate: 6,
      nodeUse: E,
      predicate: _.obligationId,
      state: _.state,
      execution: _.execution,
      reason: _.reasons.join(" "),
      sources: []
    });
  u.requested && j.push({
    gate: 6,
    nodeUse: E,
    predicate: `conformity:${u.requirementId}`,
    state: u.state,
    execution: u.execution,
    reason: u.reasons.join(" "),
    sources: []
  });
  const L = ir({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: p,
    authorization: m,
    support: d,
    conformity: u,
    decision: A,
    trace: j,
    resources: R,
    limitations: [
      "Verification failures of credentials outside the selected route and support chains are reported but do not decide the request."
    ]
  });
  return Object.freeze({ result: L, artifacts: Object.freeze(a) });
}
const Js = "https://vc4qi.example/bindings/cal/1", iy = "https://vc4qi.example/contexts/cal/1", Ks = "https://vc4qi.example/bindings/cal/1#", tn = "https://vc4qi.example/schemas/cal/1/", ry = Object.freeze({
  name: "calibration v1",
  schemas: Object.freeze({
    CalAccreditation: `${tn}accreditation.json`,
    CalOperationalScope: `${tn}operational-scope.json`,
    CalLegalMandate: `${tn}legal-mandate.json`,
    CalCertificate: `${tn}certificate.json`,
    CalTestReport: `${tn}test-report.json`,
    BitstringStatusListCredential: `${tn}status-list.json`
  }),
  contexts: (e) => e === "BitstringStatusListCredential" ? [Ft] : [Ft, iy]
}), Pe = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Fe = (e) => Array.isArray(e) ? e : [], se = (e) => String(e).split(/[#/]/).pop(), sy = Object.freeze({ Pa: 0, kPa: 3, MPa: 6 });
function We(e, t) {
  const n = mr(e), i = typeof t == "string" ? sy[t] : void 0;
  if (!(n === void 0 || i === void 0))
    return n.scale >= i ? { n: n.n, scale: n.scale - i } : { n: n.n * 10n ** BigInt(i - n.scale), scale: 0 };
}
const je = (e) => qn({ n: e.n, scale: e.scale + 3 });
function xl(e, t) {
  const n = [t];
  if (!Pe(e) || typeof e.id != "string" || typeof e.quantityKindIri != "string")
    return { state: "not_established", reason: "The selected measurement group has no identifier or quantity kind.", sources: n };
  const i = [];
  for (const [r, s] of Fe(e.results).entries()) {
    const a = Pe(s) ? s : {}, c = mr(a.coverageFactor);
    if (c === void 0 || _e(c, { n: 2n, scale: 0 }) !== 0)
      return { state: "not_established", reason: `Result ${r}: coverage factor ${String(a.coverageFactor)} is not the binding's k = 2.`, sources: n };
    const l = We(a.value, a.unit), p = We(a.expandedUncertainty, a.unit);
    if (l === void 0 || p === void 0)
      return { state: "not_established", reason: `Result ${r}: unit ${String(a.unit)} or a number has no supported mapping (Pa, kPa, MPa).`, sources: n };
    i.push({ value: l, uncertainty: p });
  }
  if (i.length === 0) return { state: "not_established", reason: "The measurement group has no results.", sources: n };
  const o = Fe(e.methodIris).filter((r) => typeof r == "string");
  return {
    state: "established",
    reason: `Mapped ${se(e.id)}: ${se(e.quantityKindIri)}, ${i.length} result(s) in Pa, methods [${o.map(se).join(", ")}].`,
    sources: n,
    group: { id: e.id, quantityKindIri: e.quantityKindIri, methodIris: o, results: i }
  };
}
function Sl(e, t, n) {
  const i = ["/credentialSubject/scope"];
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: i };
  const o = t.map((a) => {
    const c = String(a.id), l = Pe(a.range) ? a.range : {}, p = We(l.from, l.unit), y = We(l.to, l.unit);
    if (p === void 0 || y === void 0) return { id: c, state: "not_established", reason: `${se(c)}: unsupported or malformed range.` };
    if (_e(p, y) > 0) return { id: c, state: "contradicted", reason: `${se(c)}: range is reversed.` };
    const f = Pe(a.cmcFloor) ? a.cmcFloor : void 0, h = f === void 0 ? void 0 : We(f.value, f.unit);
    if (f !== void 0 && h === void 0) return { id: c, state: "not_established", reason: `${se(c)}: unsupported CMC floor.` };
    const v = [];
    a.quantityKindIri !== e.quantityKindIri && v.push(`quantity kind ${se(e.quantityKindIri)} ≠ ${se(a.quantityKindIri)}`);
    const x = Fe(a.allowedMethodIris).filter((I) => typeof I == "string"), b = e.methodIris.filter((I) => !x.includes(I));
    return b.length > 0 && v.push(`method ${b.map(se).join(", ")} is not allowed`), e.results.forEach((I, g) => {
      (_e(I.value, p) < 0 || _e(I.value, y) > 0) && v.push(`result ${g} ${je(I.value)} kPa is outside ${je(p)}–${je(y)} kPa`), n && h !== void 0 && _e(I.uncertainty, h) < 0 && v.push(`result ${g} U = ${je(I.uncertainty)} kPa is below the admitted CMC ${je(h)} kPa`);
    }), v.length > 0 ? { id: c, state: "contradicted", reason: `${se(c)}: ${v.join("; ")}` } : e.methodIris.length === 0 && x.length > 0 ? {
      id: c,
      state: "not_established",
      reason: `${se(c)} restricts methods to [${x.map(se).join(", ")}], but the group names no governed method.`
    } : {
      id: c,
      state: "established",
      reason: `${se(c)} covers ${se(e.id)}: ${se(e.quantityKindIri)}, methods [${e.methodIris.map(se).join(", ")}], ${e.results.length} result(s) within ${je(p)}–${je(y)} kPa${n && h !== void 0 ? ` and not below the CMC ${je(h)} kPa` : ""}`
    };
  }), r = pn(o.map((a) => a.state)), s = o.find((a) => a.state === "established");
  return s ? { state: r, reason: s.reason, sources: i, record: s.id } : { state: r, reason: `No single scope record covers the group (${o.map((a) => a.reason).join(" | ")}).`, sources: i };
}
function ay(e, t, n) {
  const i = ["/credentialSubject/scope"];
  if (e.length === 0) return { state: "not_established", reason: "The operational scope has no records.", sources: i };
  const o = e.map((s) => {
    const a = Pe(s.range) ? s.range : {}, c = We(a.from, a.unit), l = We(a.to, a.unit), p = Pe(s.cmcFloor) ? s.cmcFloor : void 0, y = p === void 0 ? void 0 : We(p.value, p.unit);
    if (c === void 0 || l === void 0 || p !== void 0 && y === void 0)
      return { state: "not_established", reason: `${se(s.id)}: unsupported or malformed range or CMC floor.` };
    const f = Fe(s.allowedMethodIris), h = t.map((x) => {
      const b = Pe(x.range) ? x.range : {}, I = We(b.from, b.unit), g = We(b.to, b.unit), m = Pe(x.cmcFloor) ? x.cmcFloor : void 0, d = m === void 0 ? void 0 : We(m.value, m.unit);
      if (I === void 0 || g === void 0 || m !== void 0 && d === void 0)
        return { state: "not_established", reason: `${se(x.id)}: unsupported or malformed range or CMC floor.` };
      const u = [];
      s.quantityKindIri !== x.quantityKindIri && u.push(`quantity kind ${se(s.quantityKindIri)} ≠ ${se(x.quantityKindIri)}`);
      const w = Fe(x.allowedMethodIris), S = f.filter((A) => !w.includes(A));
      return f.length === 0 && w.length > 0 && u.push("the parent restricts methods, the child does not"), S.length > 0 && u.push(`method ${S.map(se).join(", ")} is not in ${se(x.id)}`), (_e(c, I) < 0 || _e(l, g) > 0) && u.push(`range ${je(c)}–${je(l)} kPa is not within ${je(I)}–${je(g)} kPa`), n && d !== void 0 && (y === void 0 ? u.push(`it states no CMC floor, but ${se(x.id)} admits only ${je(d)} kPa`) : _e(y, d) < 0 && u.push(`CMC ${je(y)} kPa is below the admitted ${je(d)} kPa`)), u.length > 0 ? { state: "contradicted", reason: `${se(s.id)} widens ${se(x.id)}: ${u.join("; ")}` } : { state: "established", reason: `${se(s.id)} lies within ${se(x.id)}` };
    });
    if (h.length === 0) return { state: "not_established", reason: "The parent grant has no records." };
    const v = pn(h.map((x) => x.state));
    return v === "established" ? h.find((x) => x.state === "established") : { state: v, reason: h.map((x) => x.reason).join(" | ") };
  }), r = Aa(o.map((s) => s.state));
  return { state: r, reason: `${r === "established" ? "Bounded projection holds" : "Bounded projection fails"}: ${o.map((s) => s.reason).join("; ")}.`, sources: i };
}
const Bt = (e) => Pe(e.credentialSubject) ? e.credentialSubject : {}, Ia = (e, t, n, i, o) => dt(t, `${Ks}${n}`) ? { id: e, state: "established", reason: `${o} permits ${i}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: e, state: "contradicted", reason: `${o} does not permit ${i}.`, sources: ["/credentialSubject/permittedActivity"] }, oy = Object.freeze({
  CalCertificate: { activity: "issueCalibrationCertificate", what: "issuing calibration certificates", purpose: "accredit-calibration-laboratories" },
  CalTestReport: { activity: "issueTestReport", what: "issuing test reports", purpose: "accredit-testing-laboratories" }
}), tr = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0;
function cy(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = oy[tr(i) ?? ""];
  if (s === void 0)
    return pe("direct-accreditation", [{
      id: "target-type",
      state: "not_established",
      reason: `No accreditation activity is installed for ${String(tr(i))}.`,
      sources: ["/type"]
    }], r);
  const a = Ye("authorizing-reference", i, "CalAccreditation", t, [e.uri], "CalAuthorizationPolicy");
  if (o.push(a.basis), !a.node) return pe("direct-accreditation", o, r);
  const c = a.node.document;
  return r.push(a.node.uri), o.push(pt("principal-binding", c, i.issuer, "Accreditation CA")), o.push(Ia("activity-permission", c, s.activity, s.what, "CA")), o.push(On("trust-anchor", c, s.purpose, n)), o.push(Lt(i, [["CA", c]])), pe("direct-accreditation", o, r, a.node.uri);
}
function dy(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = Ye("authorizing-reference", i, "CalOperationalScope", t, [e.uri], "CalAuthorizationPolicy");
  if (o.push(s.basis), !s.node) return pe("operational-scope", o, r);
  const a = s.node.document;
  r.push(s.node.uri), o.push(pt("principal-binding", a, i.issuer, "Operational scope O")), o.push(a.issuer === Bt(a).id ? { id: "self-maintained-scope", state: "established", reason: "O is issued by its own grantee.", sources: ["/issuer"] } : { id: "self-maintained-scope", state: "contradicted", reason: "O is not issued by its own grantee.", sources: ["/issuer"] }), o.push(Ia("activity-permission", a, "issueCalibrationCertificate", "issuing calibration certificates", "O"));
  const c = Ye("maintenance-grant", a, "CalAccreditation", t, [e.uri, s.node.uri], "CalAuthorizationPolicy");
  if (o.push(c.basis), !c.node) return pe("operational-scope", o, r);
  const l = c.node.document;
  r.push(c.node.uri), o.push(pt("accreditation-grantee", l, a.issuer, "Accreditation CA")), o.push(dt(l, `${Ks}maintainCalibrationScope`) && dt(l, `${Ks}issueCalibrationCertificate`) ? { id: "projection-permission", state: "established", reason: "CA permits maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] } : { id: "projection-permission", state: "contradicted", reason: "CA does not permit maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] });
  const p = ay(
    Fe(Bt(a).scope).filter(Pe),
    Fe(Bt(l).scope).filter(Pe),
    n.bindingRules.applyCmcFloor === !0
  );
  return o.push({ id: "bounded-projection", state: p.state, reason: p.reason, sources: p.sources }), o.push(On("trust-anchor", l, "accredit-calibration-laboratories", n)), o.push(Lt(i, [["O", a], ["CA", l]])), pe("operational-scope", o, r, s.node.uri);
}
function ly(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = Ye("authorizing-reference", i, "CalLegalMandate", t, [e.uri], "CalAuthorizationPolicy");
  if (o.push(s.basis), !s.node) return pe("statutory-mandate", o, r);
  const a = s.node.document;
  return r.push(s.node.uri), o.push(pt("principal-binding", a, i.issuer, "Mandate M")), o.push(Ia("activity-permission", a, "issueCalibrationCertificate", "issuing calibration certificates", "M")), o.push(On("trust-anchor", a, "designate-national-metrology-institutes", n)), o.push(Lt(i, [["M", a]])), pe("statutory-mandate", o, r, s.node.uri);
}
const Il = Object.freeze({
  "direct-accreditation": cy,
  "operational-scope": dy,
  "statutory-mandate": ly
}), Aa = (e) => e.length === 0 ? "not_established" : xe(e);
function uy(e, t, n, i) {
  const o = n.authority.certificateRoutes, r = o.slice(0, n.authority.maxRoutes).map((y) => {
    const f = Il[y];
    return f === void 0 ? pe(y, [{ id: "installed-evaluator", state: "not_established", reason: `Route ${y} has no installed evaluator.`, sources: [] }], [e.uri]) : f(e, t, n);
  }), s = Nn([], r, o.slice(n.authority.maxRoutes)), a = Fe(Bt(e.document).measurementGroups);
  if (a.length === 0)
    return { state: "not_established", reason: "The certificate has no measurement groups.", chain: [e.uri], bases: [] };
  const c = [];
  let l = [e.uri];
  a.forEach((y, f) => {
    const h = `/credentialSubject/measurementGroups/${f}`, v = xl(y, h);
    if (v.group === void 0) {
      c.push({ id: `group-${f}`, state: v.state, reason: `Group ${f}: ${v.reason}`, sources: [h] });
      return;
    }
    const x = v.group, b = yr(s, (m) => {
      const d = Fe(Bt(t(m.scope)?.document ?? {}).scope).filter(Pe), u = Sl(x, d, i);
      return { id: "claim-coverage", state: u.state, reason: u.reason, sources: [m.scope, ...u.sources] };
    }), I = b.routes.find((m) => m.state === "established");
    I && (l = I.chain);
    const g = I ? `through ${I.id}` : b.routes.map((m) => `${m.id} ${m.state}: ${m.bases.filter((d) => d.state !== "established").map((d) => d.reason).join(" ")}`).join(" | ");
    c.push({ id: `group-${f}`, state: b.state, reason: `Group ${f} (${se(x.id)}) is ${b.state} ${g}`.trim(), sources: [h] });
  });
  const p = Aa(c.map((y) => y.state));
  return { state: p, reason: `The certificate's own authority is ${p}.`, chain: l, bases: c };
}
function py(e, t, n, i) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const o = e.document, r = (w) => ({ state: w.state, reason: w.reason, bases: [w], chain: [e.uri] }), s = Fe(o.evidence).filter(Pe).filter((w) => w.type === "CalCalibrationReference").map((w) => String(w.id));
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
  const l = c.document;
  if (tr(l) !== "CalCertificate")
    return r({ id: "calibration-reference", state: "contradicted", reason: `${a} is a ${String(tr(l))}, not a calibration certificate.`, sources: ["/evidence", a] });
  const p = Bt(o), y = Bt(l), f = [{ id: "calibration-reference", state: "established", reason: `Cites calibration ${a}.`, sources: ["/evidence", a] }];
  f.push(typeof p.instrumentIri != "string" ? { id: "same-instrument", state: "not_established", reason: "The report names no instrument.", sources: ["/credentialSubject/instrumentIri"] } : y.id === p.instrumentIri ? { id: "same-instrument", state: "established", reason: `The calibration concerns instrument ${String(p.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] } : { id: "same-instrument", state: "contradicted", reason: `The calibration concerns ${String(y.id)}, not instrument ${String(p.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] });
  const h = Fe(p.measurementGroups).filter(Pe).map((w) => w.quantityKindIri), v = Fe(y.measurementGroups).filter(Pe).map((w) => w.quantityKindIri), x = h.filter((w) => !v.includes(w));
  f.push(h.length > 0 && x.length === 0 ? { id: "same-quantity", state: "established", reason: `The calibration covers ${[...new Set(h.map(se))].join(", ")}.`, sources: ["/credentialSubject/measurementGroups"] } : {
    id: "same-quantity",
    state: h.length === 0 ? "not_established" : "contradicted",
    reason: h.length === 0 ? "The report has no measurement groups." : `The calibration does not cover ${x.map(se).join(", ")}.`,
    sources: ["/credentialSubject/measurementGroups"]
  });
  const b = Date.parse(String(p.activityTime)), I = Date.parse(String(y.activityTime)), g = Date.parse(String(l.validFrom)), m = Date.parse(String(l.validUntil));
  !Number.isFinite(b) || !Number.isFinite(I) ? f.push({ id: "calibration-precedes-use", state: "not_established", reason: "An activity time is missing.", sources: ["/credentialSubject/activityTime"] }) : (f.push(I <= b ? { id: "calibration-precedes-use", state: "established", reason: `Calibrated at ${String(y.activityTime)}, before the test at ${String(p.activityTime)}.`, sources: ["/credentialSubject/activityTime"] } : { id: "calibration-precedes-use", state: "contradicted", reason: `Calibrated at ${String(y.activityTime)}, after the test at ${String(p.activityTime)}.`, sources: ["/credentialSubject/activityTime"] }), f.push(Number.isFinite(g) && Number.isFinite(m) && g <= b && b <= m ? { id: "calibration-valid-at-use", state: "established", reason: "The calibration certificate was valid at the test.", sources: ["/validFrom", "/validUntil"] } : { id: "calibration-valid-at-use", state: "contradicted", reason: `The calibration certificate (valid ${String(l.validFrom)} to ${String(l.validUntil)}) was not valid at the test at ${String(p.activityTime)}.`, sources: ["/validFrom", "/validUntil"] }));
  const d = uy(c, t, n, i);
  f.push({ id: "calibration-authority", state: d.state, reason: d.reason, sources: [a] }, ...d.bases.map((w) => ({ ...w, id: `calibration-authority:${w.id}` })));
  const u = Aa(f.map((w) => w.state));
  return {
    state: u,
    reason: u === "established" ? "The instrument calibration is applicable and independently authorized." : u === "contradicted" ? "The instrument calibration is contradicted." : "The instrument calibration is not established.",
    bases: f,
    chain: [e.uri, ...d.chain]
  };
}
const fy = /^\/credentialSubject\/measurementGroups\/(0|[1-9][0-9]*)$/;
function hy(e) {
  const t = e.bindingRules.applyCmcFloor;
  if (typeof t != "boolean")
    throw new Error(`Profile ${e.id}@${e.version} must state bindingRules.applyCmcFloor for ${Js}.`);
  return t;
}
async function my(e, t, n, i) {
  if (n.id !== Js || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${Js}@${n.version}.`);
  const o = hy(i), r = ba(e, n, i);
  if (r !== void 0) return Object.freeze({ result: wa(e, r), artifacts: Object.freeze([]) });
  const s = await xa(e, t, n, i, ry), { target: a, artifacts: c, facts: l, verificationOf: p, artifactVerification: y } = s, f = (D) => l.get(D), h = l.get(e.targetId), v = i.authority.certificateRoutes, x = h.document === void 0 ? [] : v.slice(0, i.authority.maxRoutes).map((D) => {
    const P = Il[D];
    return P === void 0 ? {
      id: D,
      state: "not_established",
      execution: "executed",
      chain: [h.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${D} has no installed evaluator.`, sources: [] }]
    } : P(h, f, i);
  }), b = h.document === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : Nn([], x, v.slice(i.authority.maxRoutes)), I = b.routes.find((D) => D.state === "established"), g = (D) => {
    const P = l.get(D)?.document?.credentialSubject;
    return Array.isArray(P?.scope) ? P.scope : [];
  }, m = h.document, d = e.selectedClaims.map((D) => {
    const P = /* @__PURE__ */ new Map();
    if (m === void 0 || !fy.test(D.sourcePointer) || ln(m, D.sourcePointer) === void 0) {
      const M = m === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${D.sourcePointer} is not a measurement group in the usable target.`;
      return { claim: D, mapping: void 0, coverage: P, result: { claimId: D.id, routeWitnessIds: [], ...oe("not_established", [M]) } };
    }
    const F = xl(ln(m, D.sourcePointer), D.sourcePointer);
    if (F.group === void 0)
      return { claim: D, mapping: F, coverage: P, result: {
        claimId: D.id,
        routeWitnessIds: [],
        ...oe(F.state, [`Gate 4: ${F.reason}`], [D.sourcePointer])
      } };
    const O = F.group, G = yr(b, (M) => {
      const V = Sl(O, g(M.scope), o), N = [M.scope, ...V.sources];
      return P.set(M.id, { ...V, sources: N }), { id: "claim-coverage", state: V.state, reason: V.reason, sources: N };
    }), k = G.routes.find((M) => M.state === "established");
    return { claim: D, mapping: F, coverage: P, result: {
      claimId: D.id,
      routeWitnessIds: G.state === "established" && k ? [`route:${k.id}`, ...k.chain, `record:${P.get(k.id)?.record}`] : [],
      ...oe(G.state, [
        G.reason,
        ...k ? [P.get(k.id).reason] : [...P].map(([M, V]) => `${M}: ${V.reason}`)
      ], [D.sourcePointer])
    } };
  }), u = d.map((D) => D.result), S = Array.isArray(m?.type) && m.type[1] === "CalTestReport" ? py(h, f, i, o) : void 0, A = S === void 0 ? [] : [{
    obligationId: "cal-v1:instrument-calibration",
    witnessIds: S.state === "established" ? [...S.chain] : [],
    ...oe(S.state, [S.reason], ["/evidence"])
  }], j = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...oe("not_established", ["The calibration v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, R = /* @__PURE__ */ new Set([
    e.targetId,
    ...I?.chain ?? [],
    ...S?.state === "established" ? S.chain : []
  ]), E = [
    ...c.filter((D) => R.has(D.artifactId)).flatMap(p).map((D) => D.state),
    ...u.map((D) => D.state),
    ...A.map((D) => D.state),
    ...j.requested ? [j.state] : []
  ], L = [...s.trace], _ = ur(a.artifactId, a.digestSRI, "target", e);
  for (const { claim: D, mapping: P, coverage: F } of d) {
    P && L.push({
      gate: 4,
      nodeUse: _,
      predicate: `claim-mapping:${D.id}`,
      state: P.state,
      execution: "executed",
      reason: P.reason,
      sources: [...P.sources]
    });
    for (const [O, G] of F)
      L.push({
        gate: 5,
        nodeUse: _,
        predicate: `claim-coverage:${D.id}:${O}`,
        state: G.state,
        execution: "executed",
        reason: G.reason,
        sources: [...G.sources]
      });
  }
  for (const D of u)
    L.push({
      gate: 5,
      nodeUse: _,
      predicate: `claim-authorization:${D.claimId}`,
      state: D.state,
      execution: D.execution,
      reason: D.reasons.join(" "),
      sources: [...D.sourcePointers]
    });
  L.push({
    gate: 5,
    nodeUse: _,
    predicate: "authority",
    state: b.state,
    execution: "executed",
    reason: b.reason,
    sources: I ? [...I.chain] : []
  });
  for (const D of b.routes) {
    L.push(D.execution === "not_run" ? {
      gate: 5,
      nodeUse: _,
      predicate: `route:${D.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: _,
      predicate: `route:${D.id}`,
      state: D.state,
      execution: "executed",
      reason: `Route ${D.id} is ${D.state}.`,
      sources: [...D.chain]
    });
    for (const P of D.bases)
      L.push({
        gate: 5,
        nodeUse: _,
        predicate: `route:${D.id}:${P.id}`,
        state: P.state,
        execution: "executed",
        reason: P.reason,
        sources: [...P.sources]
      });
  }
  for (const D of S?.bases ?? [])
    L.push({
      gate: 6,
      nodeUse: _,
      predicate: `support:${D.id}`,
      state: D.state,
      execution: "executed",
      reason: D.reason,
      sources: [...D.sources]
    });
  for (const D of A)
    L.push({
      gate: 6,
      nodeUse: _,
      predicate: D.obligationId,
      state: D.state,
      execution: D.execution,
      reason: D.reasons.join(" "),
      sources: []
    });
  j.requested && L.push({
    gate: 6,
    nodeUse: _,
    predicate: `conformity:${j.requirementId}`,
    state: j.state,
    execution: j.execution,
    reason: j.reasons.join(" "),
    sources: []
  });
  const C = ir({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: y,
    authorization: u,
    support: A,
    conformity: j,
    decision: ia(E),
    trace: L,
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
const gd = "https://vc4qi.example/bindings/gs/1", yy = "https://vc4qi.example/contexts/gs/1", gr = "https://vc4qi.example/bindings/gs/1#", _t = "https://vc4qi.example/schemas/gs/1/", gy = Object.freeze({
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
  contexts: (e) => e === "BitstringStatusListCredential" ? [Ft] : [Ft, yy]
}), lt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), ze = (e) => Array.isArray(e) ? e : [], X = (e) => String(e).split(/[#/]/).pop(), ut = (e) => lt(e.credentialSubject) ? e.credentialSubject : {};
function Al(e, t) {
  const n = [t];
  if (!lt(e) || typeof e.productCategoryIri != "string")
    return { state: "not_established", reason: "The selected certification names no product category.", sources: n };
  const i = ze(e.standardIris).filter((o) => typeof o == "string");
  return {
    state: "established",
    reason: `Mapped certification of ${X(e.productCategoryIri)} against [${i.map(X).join(", ")}].`,
    sources: n,
    certification: { productCategoryIri: e.productCategoryIri, standardIris: i }
  };
}
function ql(e, t, n) {
  const i = ["/credentialSubject/scope"], { productCategoryIri: o, standardIris: r } = e, s = t.map((f) => {
    const h = String(f.id), v = ze(f.standardIris);
    if (f.productCategoryIri !== o)
      return { id: h, state: "contradicted", reason: `${X(h)}: category ${X(o)} ≠ ${X(f.productCategoryIri)}` };
    const x = r.filter((b) => !v.includes(b));
    return x.length > 0 ? { id: h, state: "contradicted", reason: `${X(h)}: standard ${x.map(X).join(", ")} is not in the accredited scope` } : r.length === 0 && v.length > 0 ? { id: h, state: "not_established", reason: `${X(h)} restricts standards, but the certification names none` } : { id: h, state: "established", reason: `${X(h)} covers ${X(o)} against [${r.map(X).join(", ")}]` };
  }), a = n.map((f) => {
    const h = String(f.id);
    return f.productCategoryIri === o ? { id: h, state: "established", reason: `${X(h)} permits the GS mark for ${X(o)}` } : { id: h, state: "contradicted", reason: `${X(h)}: category ${X(o)} ≠ ${X(f.productCategoryIri)}` };
  }), c = (f, h) => {
    if (h.length === 0) return { state: "not_established", reason: `The ${f} scope has no records.`, record: void 0 };
    const v = h.find((x) => x.state === "established");
    return v ? { state: "established", reason: v.reason, record: v.id } : { state: pn(h.map((x) => x.state)), reason: `No single ${f} record covers it (${h.map((x) => x.reason).join(" | ")})`, record: void 0 };
  }, l = c("competence", s), p = c("scheme", a), y = xe([l.state, p.state]);
  return {
    state: y,
    reason: `Competence: ${l.reason}. Scheme: ${p.reason}.`,
    sources: i,
    ...y === "established" ? { records: [l.record, p.record] } : {}
  };
}
function Rl(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = (l, p, y, f, h, v) => {
    const x = Ye(`${l}-reference`, i, p, t, [e.uri], "GsAuthorizationPolicy");
    if (o.push(x.basis), !x.node) return;
    const b = x.node.document;
    return o.push(pt(`${l}-grantee`, b, i.issuer, v)), o.push(dt(b, `${gr}${y}`) ? { id: `${l}-permission`, state: "established", reason: `${v} permits ${f}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: `${l}-permission`, state: "contradicted", reason: `${v} does not permit ${f}.`, sources: ["/credentialSubject/permittedActivity"] }), o.push(On(`${l}-anchor`, b, h, n)), x.node;
  }, a = s("competence", "GsAccreditation", "certifyProducts", "certifying products", "accredit-certification-bodies", "Accreditation GS-A"), c = s("scheme", "GsSchemeAuthorization", "awardGsMark", "awarding the GS mark", "authorize-gs-certification", "Scheme authorization GS-S");
  return !a || !c ? pe("competence-and-scheme-permission", o, r) : (r.push(a.uri, c.uri), o.push(Lt(i, [["GS-A", a.document], ["GS-S", c.document]])), pe("competence-and-scheme-permission", o, r, a.uri));
}
function jl(e, t) {
  const n = (i) => i === void 0 ? [] : ze(ut(t(i)?.document ?? {}).scope).filter(lt);
  return { competence: n(e.scope), scheme: n(e.chain.length === 3 ? e.chain[2] : void 0) };
}
const vy = `${gr}GsMark`;
function $l(e, t, n) {
  const i = [t];
  if (!lt(e) || typeof e.markIri != "string" || typeof e.productModelIri != "string")
    return { state: "not_established", reason: "The selected marking names no mark or product model.", sources: i };
  if (e.markIri !== vy)
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
function _l(e, t) {
  const n = ["/credentialSubject/id"];
  if (t === void 0) return { state: "not_established", reason: "No certificate was reached.", sources: n };
  const i = ut(t).id;
  return i === e.productModelIri ? { state: "established", reason: `${X(t.id)} certifies model ${X(i)}.`, sources: n, records: [String(t.id)] } : { state: "contradicted", reason: `${X(t.id)} certifies ${X(i)}, not model ${X(e.productModelIri)}.`, sources: n };
}
function Pl(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = Ye("certificate-reference", i, "GsCertificate", t, [e.uri], "GsAuthorizationPolicy");
  if (o.push(s.basis), !s.node) return pe("gs-certified-product", o, r);
  const a = s.node.document;
  r.push(s.node.uri);
  const c = ut(a).manufacturerIri;
  o.push(typeof c != "string" ? { id: "manufacturer-binding", state: "not_established", reason: "The certificate names no manufacturer.", sources: ["/credentialSubject/manufacturerIri"] } : c === i.issuer ? { id: "manufacturer-binding", state: "established", reason: `The certificate names the passport issuer ${c} as manufacturer.`, sources: ["/credentialSubject/manufacturerIri", "/issuer"] } : { id: "manufacturer-binding", state: "contradicted", reason: `The certificate names ${c}, not the passport issuer ${String(i.issuer)}.`, sources: ["/credentialSubject/manufacturerIri", "/issuer"] }), o.push({ ...Lt(i, [["The certificate", a]]), id: "certificate-in-force" });
  const l = Rl(s.node, t, n);
  o.push(...l.bases.map((f) => ({ ...f, id: `certificate:${f.id}` })));
  const p = Al(ut(a).certification, "/credentialSubject/certification"), y = p.certification === void 0 ? { state: p.state, reason: p.reason } : (() => {
    const { competence: f, scheme: h } = jl(l, t);
    return ql(p.certification, f, h);
  })();
  return o.push({ id: "certificate:claim-coverage", state: y.state, reason: y.reason, sources: ["/credentialSubject/certification"] }), r.push(...l.chain.slice(1)), pe("gs-certified-product", o, r, s.node.uri);
}
const by = `${gr}Pass`, wy = [
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
function xy(e, t, n) {
  const i = e.document, o = ut(i), r = lt(o.certification) ? o.certification : {};
  return wy.map(({ obligationId: s, reference: a, type: c, activity: l, purpose: p, what: y }) => {
    const f = [], h = (A) => {
      const j = xe(f.map((E) => E.state)), R = f.find((E) => E.state === j && j !== "established");
      return {
        obligationId: s,
        state: j,
        bases: f,
        chain: A,
        reason: j === "established" ? `The ${y} applies and is independently authorized.` : `The ${y}: ${R?.reason ?? "not established"}`
      };
    }, v = ze(i.evidence).filter(lt).filter((A) => A.type === a).map((A) => String(A.id));
    if (v.length !== 1)
      return f.push({
        id: "reference",
        state: "not_established",
        sources: ["/evidence"],
        reason: v.length === 0 ? `The certificate cites no ${y}.` : `The certificate cites several ${y}s; none is chosen.`
      }), h([]);
    const x = v[0], b = t(x);
    if (b === void 0 || b.usable !== "established" || b.document === void 0)
      return f.push({
        id: "reference",
        state: b?.usable === "contradicted" ? "contradicted" : "not_established",
        sources: ["/evidence", x],
        reason: b === void 0 ? `${X(x)} is unavailable.` : `${X(x)} is not usable: ${b.reason}`
      }), h([]);
    const I = b.document, g = ut(I), m = ze(I.type);
    if (f.push(Me("reference", m.includes(c), `Cites ${y} ${X(x)}.`, `${X(x)} is not a ${c}.`, ["/evidence", x])), s === "type-examination") {
      f.push(Me(
        "same-model",
        g.productModelIri === o.id,
        `${X(x)} examined model ${X(o.id)}.`,
        `${X(x)} examined ${X(g.productModelIri)}, not model ${X(o.id)}.`,
        ["/credentialSubject/productModelIri"]
      ));
      const A = ze(g.standardIris), j = ze(r.standardIris), R = j.filter((E) => !A.includes(E));
      f.push(Me(
        "covers-certification",
        g.productCategoryIri === r.productCategoryIri && R.length === 0,
        `${X(x)} covers ${X(r.productCategoryIri)} against [${j.map(X).join(", ")}].`,
        g.productCategoryIri !== r.productCategoryIri ? `${X(x)} examined ${X(g.productCategoryIri)}, not ${X(r.productCategoryIri)}.` : `${X(x)} did not examine ${R.map(X).join(", ")}.`,
        ["/credentialSubject/standardIris"]
      ));
    } else
      f.push(Me(
        "same-manufacturer",
        typeof g.manufacturerIri == "string" && typeof o.manufacturerIri == "string" ? g.manufacturerIri === o.manufacturerIri : void 0,
        `${X(x)} inspected the certificate's manufacturer.`,
        `${X(x)} inspected ${String(g.manufacturerIri)}, not the certificate's manufacturer ${String(o.manufacturerIri)}.`,
        ["/credentialSubject/manufacturerIri"]
      ));
    f.push(Me("outcome", g.outcomeIri === by, `${X(x)} passed.`, `${X(x)} did not pass (${X(g.outcomeIri)}).`, ["/credentialSubject/outcomeIri"]));
    const d = Date.parse(String(g.activityTime)), u = Date.parse(String(o.activityTime));
    f.push(Me(
      "precedes-certification",
      Number.isFinite(d) && Number.isFinite(u) ? d <= u : void 0,
      `The ${y} (${String(g.activityTime)}) precedes the certification.`,
      Number.isFinite(d) && Number.isFinite(u) ? `The ${y} (${String(g.activityTime)}) follows the certification (${String(o.activityTime)}).` : "An activity time is missing.",
      ["/credentialSubject/activityTime"]
    ));
    const w = Ye("accreditation-reference", I, "GsAccreditation", t, [e.uri, x], "GsAuthorizationPolicy");
    if (f.push(w.basis), !w.node) return h([x]);
    const S = w.node.document;
    if (f.push(pt("accreditation-grantee", S, I.issuer, `Accreditation ${X(w.node.uri)}`)), f.push(Me(
      "accreditation-permission",
      dt(S, `${gr}${l}`),
      `${X(w.node.uri)} permits ${l}.`,
      `${X(w.node.uri)} does not permit ${l}.`,
      ["/credentialSubject/permittedActivity"]
    )), f.push(On("accreditation-anchor", S, p, n)), f.push({ ...Lt(I, [[X(w.node.uri), S]]), id: "accreditation-in-force" }), s === "type-examination") {
      const A = ze(g.standardIris), R = ze(ut(S).scope).filter(lt).find((E) => E.productCategoryIri === g.productCategoryIri && A.every((L) => ze(E.standardIris).includes(L)));
      f.push(Me(
        "accreditation-scope",
        R !== void 0,
        `${X(R?.id)} covers the examination.`,
        `No record of ${X(w.node.uri)} covers ${X(g.productCategoryIri)} against [${A.map(X).join(", ")}].`,
        ["/credentialSubject/scope"]
      ));
    }
    return h([x, w.node.uri]);
  });
}
function Sy(e, t, n) {
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
function Iy(e, t, n) {
  const i = e.document, o = ut(i), r = lt(o.complianceInformation) ? o.complianceInformation : {}, s = lt(r.gsMark) ? r.gsMark : {}, a = [], c = (g, m) => {
    const d = xe(a.map((w) => w.state)), u = a.find((w) => w.state === d && d !== "established");
    return { ...m === void 0 ? {} : { certificateUri: m }, support: {
      obligationId: "gs-mark-credential",
      state: d,
      bases: a,
      chain: g,
      reason: d === "established" ? "The GS-mark credential applies to this unit and holds its own route." : `The GS-mark credential: ${u?.reason ?? "not established"}`
    } };
  }, l = ze(i.evidence).filter(lt).filter((g) => g.type === "GsMarkCredentialReference").map((g) => String(g.id));
  if (l.length !== 1)
    return a.push({
      id: "reference",
      state: "not_established",
      sources: ["/evidence"],
      reason: l.length === 0 ? "The passport cites no GS-mark credential." : "The passport cites several GS-mark credentials; none is chosen."
    }), c([]);
  const p = l[0], y = t(p);
  if (y === void 0 || y.usable !== "established" || y.document === void 0)
    return a.push({
      id: "reference",
      state: y?.usable === "contradicted" ? "contradicted" : "not_established",
      sources: ["/evidence", p],
      reason: y === void 0 ? `${X(p)} is unavailable.` : `${X(p)} is not usable: ${y.reason}`
    }), c([]);
  const f = y.document, h = ut(f);
  a.push(Me(
    "reference",
    ze(f.type).includes("GsMarkCredential"),
    `Cites GS-mark credential ${X(p)}.`,
    `${X(p)} is not a GsMarkCredential.`,
    ["/evidence", p]
  )), a.push(Me(
    "same-unit",
    h.id === o.id,
    `${X(p)} is for this unit ${X(o.id)}.`,
    `${X(p)} is for unit ${X(h.id)}, not this unit ${X(o.id)}.`,
    ["/credentialSubject/id"]
  )), a.push(Me(
    "same-operator",
    f.issuer === i.issuer,
    `${X(p)} is issued by the passport's issuer.`,
    `${X(p)} is issued by ${String(f.issuer)}, not the passport's issuer ${String(i.issuer)}.`,
    ["/issuer"]
  ));
  const v = $l(h.marking, "/credentialSubject/marking", h.productModelIri);
  a.push({ id: "mark-credential:mapping", state: v.state, reason: v.reason, sources: [...v.sources] }), a.push(Me(
    "same-model",
    v.marking === void 0 ? void 0 : v.marking.productModelIri === s.productModelIri && h.productModelIri === o.productModelIri,
    `${X(p)} claims the mark for the passport's model ${X(o.productModelIri)}.`,
    v.marking === void 0 ? `${X(p)} claims no mark for a model.` : `${X(p)} claims the mark for model ${X(v.marking.productModelIri)}, not the passport's model ${X(o.productModelIri)}.`,
    ["/credentialSubject/complianceInformation/gsMark/productModelIri", "/credentialSubject/productModelIri"]
  ));
  const x = Pl(y, t, n);
  a.push(...x.bases.map((g) => ({ ...g, id: `mark-credential:${g.id}` })));
  const b = x.scope === void 0 ? void 0 : t(x.scope)?.document, I = v.marking === void 0 ? { state: "not_established", reason: "No mark was mapped.", sources: [] } : _l(v.marking, b);
  return a.push({ id: "mark-credential:claim-coverage", state: I.state, reason: I.reason, sources: [...I.sources] }), c([p, ...x.chain.slice(1)], x.scope);
}
const Ay = Object.freeze({
  "competence-and-scheme-permission": Rl,
  "gs-certified-product": Pl,
  "responsible-economic-operator": Sy
}), qy = "/credentialSubject/certification", Ry = "/credentialSubject/marking", Qs = "/credentialSubject/complianceInformation/gsMark", jy = { GsMarkCredential: "mark", ProductPassport: "passport" }, $y = { certificate: qy, mark: Ry, passport: Qs };
async function _y(e, t, n, i) {
  if (n.id !== gd || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${gd}@${n.version}.`);
  const o = ba(e, n, i);
  if (o !== void 0) return Object.freeze({ result: wa(e, o), artifacts: Object.freeze([]) });
  const r = await xa(e, t, n, i, gy), { target: s, artifacts: a, facts: c, verificationOf: l, artifactVerification: p } = r, y = (O) => c.get(O), f = c.get(e.targetId), h = f.document, v = i.authority.certificateRoutes, x = h === void 0 ? [] : v.slice(0, i.authority.maxRoutes).map((O) => {
    const G = Ay[O];
    return G === void 0 ? {
      id: O,
      state: "not_established",
      execution: "executed",
      chain: [f.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${O} has no installed evaluator.`, sources: [] }]
    } : G(f, y, i);
  }), b = h === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : Nn([], x, v.slice(i.authority.maxRoutes)), I = b.routes.find((O) => O.state === "established"), g = Array.isArray(h?.type) && jy[String(h.type[1])] || "certificate", m = $y[g], d = e.selectedClaims.map((O) => {
    const G = /* @__PURE__ */ new Map();
    if (h === void 0 || O.sourcePointer !== m || ln(h, O.sourcePointer) === void 0) {
      const z = h === void 0 ? "The target is not usable, so its claims are not read." : g === "passport" ? `This binding interprets only the GS-mark entry (${Qs}) of a product passport; ${O.sourcePointer} has no interpretation here.` : `Selected claim ${O.sourcePointer} is not the ${g === "mark" ? "marking" : "certification statement"} of the usable target.`;
      return { claim: O, mapping: void 0, coverage: G, result: { claimId: O.id, routeWitnessIds: [], ...oe("not_established", [z]) } };
    }
    const k = ln(h, O.sourcePointer), M = g === "certificate" ? void 0 : $l(k, O.sourcePointer, h.credentialSubject?.productModelIri), V = M ?? Al(k, O.sourcePointer), N = M?.marking, $ = g === "certificate" ? V.certification : void 0;
    if (N === void 0 && $ === void 0)
      return { claim: O, mapping: V, coverage: G, result: {
        claimId: O.id,
        routeWitnessIds: [],
        ...oe(V.state, [`Gate 4: ${V.reason}`], [O.sourcePointer])
      } };
    const q = yr(b, (z) => {
      const H = g === "passport" ? {
        state: "established",
        sources: [Qs],
        reason: "The entry is declared by the passport's responsible economic operator; it is relied on through the GS-mark credential it cites (gate 6)."
      } : N !== void 0 ? _l(N, y(z.scope)?.document) : (() => {
        const { competence: J, scheme: U } = jl(z, y);
        return ql($, J, U);
      })(), Q = [...z.chain.slice(1), ...H.sources];
      return G.set(z.id, { ...H, sources: Q }), { id: "claim-coverage", state: H.state, reason: H.reason, sources: Q };
    }), T = q.routes.find((z) => z.state === "established");
    return { claim: O, mapping: V, coverage: G, result: {
      claimId: O.id,
      routeWitnessIds: q.state === "established" && T ? [`route:${T.id}`, ...T.chain, ...(G.get(T.id)?.records ?? []).map((z) => `record:${z}`)] : [],
      ...oe(q.state, [
        q.reason,
        ...T ? [G.get(T.id).reason] : [...G].map(([z, H]) => `${z}: ${H.reason}`)
      ], [O.sourcePointer])
    } };
  }), u = d.map((O) => O.result), w = g === "passport" && h !== void 0 ? Iy(f, y, i) : void 0, S = h === void 0 ? void 0 : g === "passport" ? w?.certificateUri : g === "mark" ? x.find((O) => O.chain.length > 1)?.chain[1] : e.targetId, A = S === void 0 ? void 0 : y(S), j = h === void 0 ? [] : A?.usable === "established" && A.document !== void 0 ? xy(A, y, i) : ["type-examination", "factory-inspection"].map((O) => ({
    obligationId: O,
    state: "not_established",
    reason: "No usable GS certificate was reached, so its studies are not evaluated.",
    bases: [],
    chain: []
  })), R = [...w ? [w.support] : [], ...j], E = R.map((O) => ({
    obligationId: `gs-v1:${O.obligationId}`,
    witnessIds: O.state === "established" ? [...O.chain] : [],
    ...oe(O.state, [O.reason], ["/evidence"])
  })), L = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...oe("not_established", ["The GS v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, _ = /* @__PURE__ */ new Set([
    e.targetId,
    ...I?.chain ?? [],
    ...R.filter((O) => O.state === "established").flatMap((O) => O.chain)
  ]), C = [
    ...a.filter((O) => _.has(O.artifactId)).flatMap(l).map((O) => O.state),
    ...u.map((O) => O.state),
    ...E.map((O) => O.state),
    ...L.requested ? [L.state] : []
  ], D = [...r.trace], P = ur(s.artifactId, s.digestSRI, "target", e);
  for (const { claim: O, mapping: G, coverage: k } of d) {
    G && D.push({
      gate: 4,
      nodeUse: P,
      predicate: `claim-mapping:${O.id}`,
      state: G.state,
      execution: "executed",
      reason: G.reason,
      sources: [...G.sources]
    });
    for (const [M, V] of k)
      D.push({
        gate: 5,
        nodeUse: P,
        predicate: `claim-coverage:${O.id}:${M}`,
        state: V.state,
        execution: "executed",
        reason: V.reason,
        sources: [...V.sources]
      });
  }
  for (const O of u)
    D.push({
      gate: 5,
      nodeUse: P,
      predicate: `claim-authorization:${O.claimId}`,
      state: O.state,
      execution: O.execution,
      reason: O.reasons.join(" "),
      sources: [...O.sourcePointers]
    });
  D.push({
    gate: 5,
    nodeUse: P,
    predicate: "authority",
    state: b.state,
    execution: "executed",
    reason: b.reason,
    sources: I ? [...I.chain] : []
  });
  for (const O of b.routes) {
    D.push(O.execution === "not_run" ? {
      gate: 5,
      nodeUse: P,
      predicate: `route:${O.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: P,
      predicate: `route:${O.id}`,
      state: O.state,
      execution: "executed",
      reason: `Route ${O.id} is ${O.state}.`,
      sources: [...O.chain]
    });
    for (const G of O.bases)
      D.push({
        gate: 5,
        nodeUse: P,
        predicate: `route:${O.id}:${G.id}`,
        state: G.state,
        execution: "executed",
        reason: G.reason,
        sources: [...G.sources]
      });
  }
  for (const O of R)
    for (const G of O.bases)
      D.push({
        gate: 6,
        nodeUse: P,
        predicate: `support:${O.obligationId}:${G.id}`,
        state: G.state,
        execution: "executed",
        reason: G.reason,
        sources: [...G.sources]
      });
  for (const O of E)
    D.push({
      gate: 6,
      nodeUse: P,
      predicate: O.obligationId,
      state: O.state,
      execution: O.execution,
      reason: O.reasons.join(" "),
      sources: []
    });
  L.requested && D.push({
    gate: 6,
    nodeUse: P,
    predicate: `conformity:${L.requirementId}`,
    state: L.state,
    execution: L.execution,
    reason: L.reasons.join(" "),
    sources: []
  });
  const F = ir({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: p,
    authorization: u,
    support: E,
    conformity: L,
    decision: ia(C),
    trace: D,
    resources: r.resources,
    limitations: [
      "The GS route is a fictional profile example (competence AND scheme permission), not a universal GS or legal rule.",
      ...g === "passport" ? ["The product passport is an experimental credential shaped after the EU Digital Product Passport (ESPR), not ESPR conformance; this binding interprets only its GS-mark entry."] : [],
      ...g === "mark" ? ["The GS-mark credential is an experimental manufacturer credential; today's GS scheme has no per-unit credential."] : [],
      "Verification failures of credentials outside the selected route and study chains are reported but do not decide the request.",
      "Fixture grants are fictional: an accreditation or scheme authorization here has no legal effect."
    ]
  });
  return Object.freeze({ result: F, artifacts: Object.freeze([...a]) });
}
function Py(e, t, n) {
  const i = JSON.parse(n), o = ta(i.verificationMethod[0].publicKeyMultibase).slice(2), r = Rd(new TextEncoder().encode(`vc4qi-rm-v1-insecure-fixture-key:${e}`));
  return { id: `${t}#key-1`, controller: t, privateKey: r, publicKey: o };
}
const Ty = (e) => `${JSON.stringify(e, null, 2)}
`;
async function Tl(e, t, n, i, o, r) {
  const s = $d(new jd(o).openSession({ maxResources: 64, maxBytes: 1e6 })), a = await Yh(e, Py(t, n, r), { created: i, documentLoader: s, safe: !0 });
  return Ty({ ...e, proof: a });
}
function Cy(e) {
  const t = new Uint8Array(Gs / 8);
  for (const o of e) t[o >> 3] |= 128 >> (o & 7);
  const n = _m(t, { level: 9, mtime: 0 });
  let i = "";
  for (const o of n) i += String.fromCharCode(o);
  return `u${btoa(i).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")}`;
}
function Ey(e, t, n) {
  const { proof: i, ...o } = JSON.parse(e);
  return { ...o, validFrom: n, credentialSubject: { ...o.credentialSubject, encodedList: Cy(t) } };
}
const Ws = "2026-09-25T12:00:00Z", ky = { rm: ny, cal: my, gs: _y }, Jt = Object.fromEntries(["rm", "cal", "gs"].map((e) => [e, {
  manifest: hu(An[e].manifest),
  profiles: Object.fromEntries(Object.entries(An[e].profiles).map(([t, n]) => [t, na(n)])),
  files: An[e].files
}])), qa = "gs-verifier-dpp-accreditation-only (demonstrator)";
{
  const e = An.gs.profiles["gs-verifier-dpp-1"];
  Jt.gs.profiles[qa] = na({
    ...e,
    id: "https://vc4qi.example/profiles/gs-verifier-dpp-accreditation-only",
    description: "Demonstrator-only variant of gs-verifier-dpp-1 that configures the accreditation body as its only trust anchor. Fictional.",
    trustAnchors: e.trustAnchors.filter((t) => t.id !== "https://zls.vc4qi.example/controller")
  });
}
const My = (e) => String(e).split(/[#/:]/).pop() ?? "", _s = (e, t) => ({
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
}, wn = (e) => ({ id: `g${e + 1}`, sourcePointer: `/credentialSubject/measurementGroups/${e}` }), Ly = [
  {
    id: "direct",
    label: "Accredited lab",
    sublabel: "DCC-1",
    binding: "cal",
    profile: "cal-verifier-1",
    target: ke.DCC1,
    claims: [wn(0), wn(1)],
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
    claims: [wn(0)],
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
    claims: [wn(0)],
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
    claims: [wn(0)],
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
}, xn = (e, t, n, i, o) => ({
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
}), Ps = (e, t, n, i, o) => ({
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
}), Sn = (e) => ({ uri: e, label: "Withhold the type examination" }), Ts = (e) => ({ uri: e, label: "Withhold the GS-mark credential" }), vd = [
  {
    id: "rm",
    tab: "RM",
    title: "Certified reference material",
    intro: "M375a, leaded brass: may I rely on the certified arsenic value?",
    caseLabel: "Certified As mass fraction (mg/kg)",
    cases: [_s("178", "certificate"), _s("197", "hypothetical"), _s("520", "hypothetical")],
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
    cases: Ly,
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
      xn("in-house", "Hair dryer HD-01", "GS body tested", "https://maker.vc4qi.example/credentials/GSM-1", Sn(at.TR1)),
      xn("external", "Hair dryer HD-02", "external lab tested", "https://maker.vc4qi.example/credentials/GSM-3", Sn(at.TR2)),
      xn("toy", "Toy 001", "outside ZLS scope", "https://maker.vc4qi.example/credentials/GSM-2", Sn(at.TR3)),
      xn("clone", "Other company", "cites the HD-01 certificate", "https://clone.vc4qi.example/credentials/GSM-5", Sn(at.TR1)),
      xn("mismatch", "HD-02 unit", "claims the HD-01 mark", "https://maker.vc4qi.example/credentials/GSM-6", Sn(at.TR1))
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
      Ps("unit", "Unit sn-0042", "its own GS-mark credential", "https://maker.vc4qi.example/credentials/DPP-1", Ts(at.M1)),
      Ps("early", "Unit sn-0001", "on market before certification", "https://maker.vc4qi.example/credentials/DPP-2", Ts(at.M4)),
      Ps("borrowed", "Unit sn-0050", "cites another unit's credential", "https://maker.vc4qi.example/credentials/DPP-3", Ts(at.M1))
    ],
    choice: { label: "The verifier trusts", options: [
      { id: "both", label: "Accreditation body and scheme owner", sublabel: "gs-verifier-dpp-1" },
      { id: "accreditation-only", label: "Accreditation body only", sublabel: "no scheme-owner anchor" }
    ] },
    note: "An experimental product passport shaped after the EU Digital Product Passport (ESPR): unique product identifier, GTIN, commodity code, economic operator and facility, technical and sustainability data, and compliance information. Its GS-mark entry is supported by the unit's GS-mark credential, which keeps its own authority route. The GS binding evaluates only that entry. Not ESPR conformance; identifiers are fictional, and today's GS scheme has no per-unit credential. All parties and keys are fictional."
  }
], Oy = {
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
}, bd = (e) => {
  const t = /^https:\/\/([^./]+)\./.exec(String(e))?.[1];
  return t === void 0 ? String(e).split("#")[0].split(":").pop() : Oy[t] ?? t;
}, Ny = {
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
function Dy(e, t, n, i, o) {
  const r = /* @__PURE__ */ new Map();
  for (const [v, x] of Object.entries(t))
    try {
      r.set(v, JSON.parse(x));
    } catch {
    }
  const s = (v) => [
    ...(v?.termsOfUse ?? []).map((x) => x.authorizationCredential?.id).filter((x) => typeof x == "string").map((x) => ({ to: x, kind: "authority" })),
    ...(v?.evidence ?? []).map((x) => x.id).filter((x) => typeof x == "string").map((x) => ({ to: x, kind: "support" }))
  ], a = new Map(n.artifactVerification.map((v) => [v.artifactId, v.state])), c = /* @__PURE__ */ new Map([[e, 0]]), l = /* @__PURE__ */ new Set(), p = [], y = [[e, !1]], f = /* @__PURE__ */ new Set();
  for (; y.length > 0; ) {
    const [v, x] = y.shift();
    for (const { to: b, kind: I } of s(r.get(v))) {
      const g = `${v}>${b}`, m = x || I === "support";
      f.has(g) || (f.add(g), p.push({
        from: v,
        to: b,
        kind: I,
        state: v === e ? I === "support" ? o : i : a.get(b) ?? "not_established"
      }));
      const d = (c.get(v) ?? 0) + 1;
      (c.get(b) ?? -1) < d && d < 8 ? (c.set(b, d), y.push([b, m])) : m && !l.has(b) && l.add(b);
    }
  }
  return { nodes: [...c].map(([v, x]) => {
    const b = r.get(v), I = Array.isArray(b?.type) ? String(b.type[1]) : "", g = b?.credentialSubject ?? {};
    return {
      uri: v,
      name: My(v),
      role: Ny[I] ?? (I || "not supplied"),
      layer: x,
      present: b !== void 0,
      target: v === e,
      parties: b === void 0 ? "withheld" : `${bd(b.issuer)} → ${bd(g.id)}`,
      state: a.get(v) ?? "not_established"
    };
  }), edges: p };
}
const Pt = (e) => e.length === 0 ? "not_established" : xe(e.map((t) => t.state)), wd = (e, t) => e.find((n) => n.state === t);
async function Ra(e) {
  const t = Jt[e.binding], n = t.profiles[e.profileName], i = e.texts ?? {}, o = new Set(t.files.map((R) => R.uri)), r = t.files.find((R) => R.uri === e.target)?.origin ?? t.files.at(-1).origin, s = {}, a = [
    ...t.files,
    ...Object.entries(i).filter(([R]) => !o.has(R)).map(([R, E]) => ({ uri: R, mediaType: "application/vc", origin: r, version: "1", text: E, digestSRI: void 0 }))
  ].filter((R) => R.uri !== e.withheld).map((R) => {
    const E = i[R.uri] ?? R.text, L = new TextEncoder().encode(E);
    return s[R.uri] = E, {
      uri: R.uri,
      mediaType: R.mediaType,
      origin: R.origin,
      version: R.version,
      bytes: L,
      digestSRI: E === R.text && R.digestSRI ? R.digestSRI : nr(L)
    };
  }), c = ju({
    requestId: e.requestId,
    targetId: e.target,
    selectedClaims: e.claims.map((R) => ({ ...R })),
    purpose: "demonstrator",
    binding: { id: t.manifest.id, version: t.manifest.version },
    profile: { id: n.id, version: n.version },
    trustConfigId: "https://vc4qi.example/trust/fixture-anchors",
    evaluationTime: Ws,
    activityTime: Ws,
    suppliedEvidence: e.supplied.filter((R) => R !== e.withheld),
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5e6 },
    ...e.conformity ? { conformity: { ...e.conformity } } : {}
  }), { result: l } = await ky[e.binding](c, new jd(a), t.manifest, n), p = (R, E = () => !0) => l.trace.filter((L) => L.gate === R && E(L)), f = [...p(2), ...p(1)], h = p(3), v = [...p(0), ...p(4)], x = (R, E, L) => E === "established" ? L : (wd(R, E) ?? wd(R, "not_established"))?.reason ?? "Not evaluated.", b = l.authorization, I = b.length === 0 ? "not_established" : xe(b.map((R) => R.state)), g = I === "established" ? b.map((R) => R.reasons.at(-1)).join(" ") : b.filter((R) => R.state !== "established").map((R) => `${R.claimId}: ${R.reasons.join(" ")}`).join(" "), m = l.support, d = l.artifactVerification.find((R) => R.artifactId === e.target)?.state === "established", u = m.length > 0 ? xe(m.map((R) => R.state)) : d ? "not_required" : "not_established", w = p(6, (R) => R.predicate.startsWith("conformity:")), S = [
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
      details: v,
      summary: x(p(0), Pt(p(0)), "The claim was not read, because its credential did not pass the earlier checks.")
    } : {
      id: "understood",
      state: Pt(v),
      details: v,
      summary: x(v, Pt(v), p(4).map((R) => R.reason).join(" "))
    },
    {
      id: "authorized",
      state: I,
      summary: g,
      details: p(5, (R) => R.predicate.startsWith("claim-") || R.predicate.startsWith("restriction:") || R.predicate.startsWith("route:"))
    },
    {
      id: "supported",
      state: u,
      summary: m.length > 0 ? m.map((R) => R.reasons.join(" ")).join(" ") : d ? "This claim needs no supporting credential under the selected profile." : "Not evaluated: the credential did not pass the earlier checks.",
      details: p(6, (R) => R.predicate.startsWith("support:") || m.some((E) => E.obligationId === R.predicate))
    },
    l.conformity.requested ? {
      id: "fit",
      state: l.conformity.execution === "not_run" ? "not_asked" : l.conformity.state,
      details: w,
      summary: l.conformity.reasons.join(" ")
    } : { id: "fit", state: "not_asked", details: [], summary: e.notAsked }
  ], A = JSON.parse(s[e.target]), j = Dy(e.target, s, l, I, u);
  return { profile: e.profileName, result: l, questions: S, target: A, texts: s, graph: j };
}
async function rg(e) {
  const t = vd.find((s) => s.id === e.example) ?? vd[0], n = t.cases.find((s) => s.id === e.caseId) ?? t.cases[0], i = Jt[n.binding].files.find((s) => s.uri === n.target), o = e.tamper ? { [n.target]: i.text.replace(n.tamper[0], n.tamper[1]) } : {}, r = await Ra({
    binding: n.binding,
    profileName: t.id === "dcc" && e.choice === "direct-only" ? "cal-verifier-1" : t.id === "dpp" && e.choice === "accreditation-only" ? qa : n.profile,
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
const zy = [
  { id: "build", label: "Build the chain" },
  { id: "verify", label: "Verify" },
  { id: "manipulate", label: "Manipulate" },
  { id: "decide", label: "The verifier decides" },
  { id: "present", label: "Present" },
  { id: "play", label: "Your turn" }
], Cs = /* @__PURE__ */ new Map();
function Cl(e, t) {
  return Cs.has(e) || Cs.set(e, t()), Cs.get(e);
}
const xd = "2026-09-20T00:00:00Z", En = (e, t) => Jt[e].files.find((n) => n.uri === t).text, El = (e) => Jt[e].files.map((t) => ({
  uri: t.uri,
  mediaType: t.mediaType,
  origin: t.origin,
  version: t.version,
  bytes: new TextEncoder().encode(t.text),
  digestSRI: t.digestSRI
})), an = (e, t, n, i) => Cl(`${e}:list:${t}`, () => Tl(Ey(En(e, t), [0], xd), n, i, xd, El(e), En(e, i))), kl = (e, t, n) => e.replace(t, n), sg = zy, ce = {
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
  GACI_SUSPENSION: "https://global-aci.vc4qi.example/status/suspension/1"
}, ag = [
  {
    id: "ab",
    mono: "AB",
    name: "Accreditation body",
    does: "Accredits the producer and the laboratory. Can suspend.",
    publishes: [{ label: "Key", uri: ce.NAB }, { label: "Revocation list", uri: ce.NAB_STATUS }, { label: "Suspension list", uri: ce.SUSPENSION }]
  },
  {
    id: "lab",
    mono: "LAB",
    name: "Laboratory",
    does: "Studies the batch under its accreditation. Can revoke its study.",
    publishes: [{ label: "Key", uri: ce.LAB }, { label: "Revocation list", uri: ce.LAB_STATUS }]
  },
  {
    id: "rmp",
    mono: "RMP",
    name: "RM producer",
    does: "Declares its scope, certifies the material and ships it.",
    publishes: [{ label: "Key", uri: ce.PRODUCER }, { label: "Revocation list", uri: ce.PRODUCER_STATUS }]
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
], og = [
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
}, cg = [
  {
    id: "join",
    part: "build",
    acts: ["ab"],
    joins: ["ab"],
    title: "The accreditation body is the first party",
    text: "Before anything is signed it publishes a key, so that anyone can check what it signs, and two status lists, so that it can later revoke or suspend what it issued."
  },
  {
    id: "accredit-lab",
    part: "build",
    acts: ["ab", "lab"],
    joins: ["lab"],
    issues: ["H"],
    title: "The accreditation body accredits the laboratory",
    text: "Accreditation H permits the laboratory to run homogeneity studies on brass. The laboratory publishes its own key and status list."
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
    state: { trust: "global-aci" },
    unlock: ["trust"],
    expect: "accept",
    title: "Verifier 3 trusts Global ACI, not this accreditation body",
    text: "A verifier abroad has configured only Global ACI as its root. Global ACI's signatory list, a W3C Recognized Entities credential, names this accreditation body for reference material production under ISO 17034 and for testing under ISO/IEC 17025. The verifier checks the list like any credential, then follows the same chain as Verifier 1."
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
    title: "Global ACI suspends its signatory list",
    text: "It sets one bit in its suspension list and signs the list again, here in your browser. Verifier 3 may no longer rely on the chain. A verifier that trusts the accreditation body directly is not affected: which root a verifier trusts is its own policy."
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
    unlock: ["suspend", "revoke", "certificate", "tamper", "withhold", "trust", "suspendGaci", "ask", "rule"],
    title: "Your turn",
    text: "Every action is live. Certify another value, suspend or revoke, change or leave out a credential, or change what the verifier trusts and asks. Each change is evaluated at once."
  }
], Ml = "rm-verifier-1", Ll = "rm-verifier-other-anchor (demonstrator)", Uy = "rm-verifier-global-aci-1";
{
  const e = An.rm.profiles[Ml];
  Jt.rm.profiles[Ll] = na({
    ...e,
    id: "https://vc4qi.example/profiles/rm-verifier-other-anchor",
    description: "Demonstrator-only variant of rm-verifier-1 whose only trust anchor is another, fictional accreditation body.",
    trustAnchors: e.trustAnchors.map((t) => ({ ...t, id: "https://other-ab.vc4qi.example/controller" }))
  });
}
const Xs = (e) => En("rm", e), Gy = (e) => e.certificate === "custom" ? ce.LIVE : `https://producer.vc4qi.example/credentials/D${e.certificate}`;
function Fy(e) {
  return Cl(`rm:D:${e.value}:${e.uncertainty}:${e.method}`, () => {
    const { proof: t, ...n } = JSON.parse(Xs("https://producer.vc4qi.example/credentials/D178")), i = structuredClone(n.credentialSubject), o = i.materialPropertiesList[0].results[0];
    o.methodIri = o.methodIri.replace(/M1$/, e.method), o.data.quantity.value = e.value, o.data.quantity.uncertainty.expandedUncertainty = e.uncertainty;
    const r = { ...n.credentialStatus, id: `${ce.PRODUCER_STATUS}#4`, statusListIndex: "4" };
    return Tl(
      {
        ...n,
        id: ce.LIVE,
        name: "Reference material certificate, CuZn39Pb3 disc lot 1 (signed in this browser)",
        credentialSubject: i,
        credentialStatus: r
      },
      "producer",
      ce.PRODUCER,
      n.validFrom,
      El("rm"),
      Xs(ce.PRODUCER)
    );
  });
}
async function dg(e = {}) {
  const t = { ...Vy, ...e }, n = Gy(t), i = {};
  t.certificate === "custom" && (i[n] = await Fy(t)), t.suspendA && (i[ce.SUSPENSION] = await an("rm", ce.SUSPENSION, "nab", ce.NAB)), t.revokeS && (i[ce.LAB_STATUS] = await an("rm", ce.LAB_STATUS, "lab", ce.LAB)), t.suspendGaci && (i[ce.GACI_SUSPENSION] = await an("rm", ce.GACI_SUSPENSION, "global-aci", ce.GACI));
  const o = Object.keys(i);
  if (t.tamper) {
    const a = i[n] ?? Xs(n), c = JSON.parse(a).credentialSubject.materialPropertiesList[0].results[0].data.quantity.value;
    i[n] = kl(a, `"value": "${c}"`, `"value": "${c === "150" ? "151" : "150"}"`);
  }
  const r = await Ra({
    binding: "rm",
    profileName: t.trust === "ab" ? Ml : t.trust === "global-aci" ? Uy : Ll,
    requestId: "urn:vc4qi:demonstrator:rm-board",
    target: n,
    claims: [{ id: "as", sourcePointer: "/credentialSubject/materialPropertiesList/0/results/0" }],
    supplied: [],
    texts: i,
    withheld: t.withholdS ? ce.S : void 0,
    ...t.ask === "fit" ? { conformity: {
      requirementId: "as-mass-fraction-max-200-mg-per-kg",
      decisionRuleId: t.rule === "simple" ? "simple-acceptance" : "guarded-acceptance-expanded-u"
    } } : {},
    notAsked: "The verifier asked only whether the value is authorized; no limit was applied."
  }), s = { A: ce.A, H: ce.H, O: ce.O, S: ce.S, D: n };
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
}, lg = [
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
], ug = [
  { code: "GS-A", label: "Accreditation", kind: "grant", actor: "ab", row: 1, about: "gsb", heldBy: "gsb" },
  { code: "GS-S", label: "Scheme permission", kind: "grant", actor: "so", row: 3, about: "gsb", heldBy: "gsb" },
  { code: "TR-1", label: "Type examination", kind: "evidence", actor: "gsb", row: 1, about: "object", aboutLabel: "model HD-01", heldBy: "mfr" },
  { code: "GSC-1", label: "GS certificate", kind: "grant", actor: "gsb", row: 2, about: "object", aboutLabel: "model HD-01", heldBy: "mfr" },
  { code: "FI-1", label: "Factory inspection", kind: "evidence", actor: "gsb", row: 3, about: "mfr", heldBy: "mfr" },
  { code: "GSM", label: "GS-mark credential", kind: "evidence", actor: "mfr", row: 2, about: "object", aboutLabel: "the unit", heldBy: "mfr" },
  { code: "DPP", label: "Product passport", kind: "claim", actor: "mfr", row: 3, about: "object", aboutLabel: "the unit", heldBy: "mfr" }
], By = {
  unit: "sn-0042",
  revokeA: !1,
  revokeS: !1,
  revokeC: !1,
  tamper: !1,
  withholdTR: !1,
  trust: "both"
}, Zy = {
  "sn-0042": "https://maker.vc4qi.example/credentials/DPP-1",
  "sn-0050": "https://maker.vc4qi.example/credentials/DPP-3",
  "sn-0001": "https://maker.vc4qi.example/credentials/DPP-2"
}, pg = [
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
async function fg(e = {}) {
  const t = { ...By, ...e }, n = Zy[t.unit], i = wt, o = {};
  t.revokeA && (o[i.NAB_STATUS] = await an("gs", i.NAB_STATUS, "nab", i.NAB)), t.revokeS && (o[i.ZLS_STATUS] = await an("gs", i.ZLS_STATUS, "zls", i.ZLS)), t.revokeC && (o[i.BODY_STATUS] = await an("gs", i.BODY_STATUS, "gs-body", i.BODY));
  const r = Object.keys(o);
  t.tamper && (o[n] = kl(En("gs", n), "-sn-", "-sn-9"));
  const s = await Ra({
    binding: "gs",
    profileName: t.trust === "both" ? "gs-verifier-dpp-1" : qa,
    requestId: "urn:vc4qi:demonstrator:gs-board",
    target: n,
    claims: [{ id: "mark", sourcePointer: "/credentialSubject/complianceInformation/gsMark" }],
    supplied: [],
    texts: o,
    withheld: t.withholdTR ? i.TR : void 0,
    notAsked: "The verifier asks only whether the GS-mark entry is authorized; the binding installs no decision rule."
  }), a = JSON.parse(En("gs", n)).evidence[0].id, c = { "GS-A": i.A, "GS-S": i.S, "TR-1": i.TR, "FI-1": i.FI, "GSC-1": i.C, GSM: a, DPP: n };
  return { ...s, state: t, certificate: n, uris: c, signedLive: r };
}
const hg = {
  evaluationTime: Ws,
  bindings: Object.fromEntries(Object.entries(Jt).map(([e, t]) => [e, `${t.manifest.id}@${t.manifest.version}`]))
};
export {
  zy as BOARD_PARTS,
  Ws as EVALUATION_TIME,
  vd as EXAMPLES,
  lg as GS_ACTORS,
  ug as GS_ASSETS,
  By as GS_DEFAULT,
  pg as GS_STORY,
  ag as RM_ACTORS,
  og as RM_ASSETS,
  Vy as RM_DEFAULT,
  sg as RM_PARTS,
  cg as RM_STORY,
  hg as buildInfo,
  fg as evaluateGsBoard,
  dg as evaluateRmBoard,
  rg as evaluateScenario
};
