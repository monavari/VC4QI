var Dl = Object.defineProperty;
var Ta = (e) => {
  throw TypeError(e);
};
var zl = (e, t, n) => t in e ? Dl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ft = (e, t, n) => zl(e, typeof t != "symbol" ? t + "" : t, n), Ca = (e, t, n) => t.has(e) || Ta("Cannot " + n);
var it = (e, t, n) => (Ca(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Dn = (e, t, n) => t.has(e) ? Ta("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ar = (e, t, n, i) => (Ca(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n);
const In = { rm: { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/rm/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/bindings.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Contexts, schemas, controller documents, signed A/H/O/S/D fixtures and status lists are pinned and verify in TypeScript and Python. The I1-I4 evaluators (protection, status, authority routes, support, claim mapping and coverage, conformity) and the current-reliance time rules are implemented, with a cross-language parity vector; an independent transformation vector is still required before selection.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/rm/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/rm/1#RmAccreditation", "https://vc4qi.example/bindings/rm/1#RmOperationalScope", "https://vc4qi.example/bindings/rm/1#RmCertificate", "https://vc4qi.example/bindings/rm/1#RmStudy", "https://vc4qi.example/bindings/rm/1#RmLabAuthority", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential", "https://www.w3.org/ns/credentials/recognized-entities#RecognizedEntityCredential"], schemaUris: ["https://vc4qi.example/schemas/rm/1/accreditation.json", "https://vc4qi.example/schemas/rm/1/operational-scope.json", "https://vc4qi.example/schemas/rm/1/certificate.json", "https://vc4qi.example/schemas/rm/1/study.json", "https://vc4qi.example/schemas/rm/1/lab-authority.json", "https://vc4qi.example/schemas/rm/1/authorization-policy.json", "https://vc4qi.example/schemas/rm/1/study-reference.json", "https://vc4qi.example/schemas/rm/1/status-list.json", "https://vc4qi.example/schemas/rm/1/recognized-entity.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", recognitionCarrier: "RecognizedEntityCredential with the VCDM 2.0 context and https://vc4qi.example/contexts/recognized-entities/draft-20261104, a stand-in for the unpublished W3C Recognized Entities context (Working Draft of 4 November 2026)", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/rm-v1/catalog.json", decimalEncoding: "JSON strings typed xsd:decimal for every quantity, bound and uncertainty", orderedCollections: ["materials", "materialPropertiesList", "results"] }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/rm/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/rm/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/bindings/rm/1#authorizationCredential" }, { fact: "requiredStudy", nativePath: "/evidence/*/id", expandedIri: "https://www.w3.org/2018/credentials#evidence" }, { fact: "validFrom", nativePath: "/validFrom", expandedIri: "https://www.w3.org/2018/credentials#validFrom" }, { fact: "validUntil", nativePath: "/validUntil", expandedIri: "https://www.w3.org/2018/credentials#validUntil" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/rm/1#activityTime" }, { fact: "selectedResult", nativePath: "/credentialSubject/materialPropertiesList/*/results/*", expandedIri: "https://vc4qi.example/bindings/rm/1#results" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, material: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 1 }, authorizingReferenceSelection: "by-declared-reference-type-per-route; resolved credential type must match (else contradicted); several of one type not_established", supportReferences: { minimum: 1 }, multipleRecognizedDeclarations: "unsupported-unless-exact-deterministic-composition-is-listed", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "evidence", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", recognitionReferences: "only a RecognizedEntityCredential that a grant references from its own termsOfUse (authorizationCredential of that type, pinned by digest); recognitions supplied by the holder but not referenced, issuer.recognizedIn and identifier-based discovery are unsupported", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse authorizationCredential references on the credential chain; an authenticated grant found by other means establishes nothing (not_established)" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/bindings/rm/1#RmAuthorizationPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], supportEvidence: "https://vc4qi.example/bindings/rm/1#RmStudyReference", supportEvidenceEstablishes: ["support-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "support-applicability", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { issueRmCertificate: "https://vc4qi.example/bindings/rm/1#issueRmCertificate", maintainRmScope: "https://vc4qi.example/bindings/rm/1#maintainRmScope", issueRmStudy: "https://vc4qi.example/bindings/rm/1#issueRmStudy" }, rules: ["A grantee equals the producer exercising certificate issuance and scope maintenance.", "O issuer and grantee equal that producer and O is contained by A.", "D issuer equals O grantee.", "S issuer equals H laboratory grantee.", "Commissioning a study grants no laboratory competence."] }, scopeAndMapping: { mappingVersion: "rm-experimental-mapping-1", recordEvaluator: "https://vc4qi.example/evaluators/rm-complete-record/1", quantityEvaluator: "https://vc4qi.example/evaluators/exact-mass-fraction/1", dimensions: ["matrixIri", "formIri", "propertyIri", "methodIri", "quantityKindIri", "range"], units: { "mg/kg": "1e-6", "kg/kg": "1" }, boundaries: "inclusive", missingOrEmptyRestrictedDimension: "not_established", recordCombination: "one-complete-record-per-claim-no-splicing", uncertainty: { requiredCoverageFactor: "2", nonnegative: !0, accreditationCeiling: "none" }, broader: [{ narrower: "https://vc4qi.example/bindings/rm/1#CuZn39Pb3", broader: "https://vc4qi.example/bindings/rm/1#CopperAlloys" }, { narrower: "https://vc4qi.example/bindings/rm/1#CopperAlloys", broader: "https://vc4qi.example/bindings/rm/1#NonFerrousMetalsAndAlloys" }, { narrower: "https://vc4qi.example/bindings/rm/1#Disc", broader: "https://vc4qi.example/bindings/rm/1#SolidForms" }, { narrower: "https://vc4qi.example/bindings/rm/1#As", broader: "https://vc4qi.example/bindings/rm/1#ElementContents" }, { narrower: "https://vc4qi.example/bindings/rm/1#Cu", broader: "https://vc4qi.example/bindings/rm/1#ElementContents" }, { narrower: "https://vc4qi.example/bindings/rm/1#Zn", broader: "https://vc4qi.example/bindings/rm/1#ElementContents" }, { narrower: "https://vc4qi.example/bindings/rm/1#Pb", broader: "https://vc4qi.example/bindings/rm/1#ElementContents" }], conceptHierarchy: "skos:broader assertions in broader, applied transitively: a scope record's matrix, form or property covers every narrower concept (an accreditation for non-ferrous metals and alloys and element contents contains arsenic in CuZn39Pb3 discs); methods and quantity kinds are exact; labels are never compared; malformed entries are ignored and never widen a scope", methodRevisions: [{ method: "https://vc4qi.example/bindings/rm/1#M2", revises: "https://vc4qi.example/bindings/rm/1#M1" }], methodSuccessionInterpretation: "verifier-profile mapping.methodSuccession: accept-successor | require-extension | none (none leaves a revised method not_established at gate 4)", claimCoverage: "the selected result, mapped at gate 4, must lie in one complete record of the route's own scope credential (O for operational-scope, A for direct-accreditation); no fallback to a parent grant", conformity: "verifier-profile requirements and decision rules, evaluated at gate 6 only after the claim is authorized; exact arithmetic reported in the requirement's unit", unsupported: ["asymmetric-uncertainty", "display-label-equality", "substring-matching", "implicit-method-succession"] }, routesAndRestrictions: { certificateRoute: ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A"], installedCertificateRoutes: { "operational-scope": ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A", "A-issuer-is-accreditation-anchor-or-recognized-for-main-scope"], "direct-accreditation": ["A-authorizes-D", "A-issuer-is-accreditation-anchor-or-recognized-for-main-scope"] }, recognition: "a grant issuer that is not a configured anchor for the purpose is accepted only through a usable, unsuspended recognition the grant references, whose issuer is an anchor for the recognizer purpose and whose subject is the grant issuer with the required action for the purpose's main scope (activity and normative document, exact), recognized by its issuer and in force at the activity time; a recognition of another body or another main scope contradicts; a missing recognition, entry or time is not_established; recognition never establishes QI scope", studyRoute: ["H-authorizes-S"], requiredSupport: ["S", "H"], globalRestrictions: ["applicable-suspension", "request-time-policy"], installedGlobalRestrictions: { "accreditation-suspension": "every usable anchor-issued RmAccreditation of the certificate issuer reached through the target's termsOfUse references, on any route, must carry a fresh issuer suspension status (Bitstring Status List, statusPurpose suspension) with its bit clear; missing or unreadable suspension status is not_established; unusable or unreferenced credentials are not restrictions" }, unusedAlternativeFailures: "diagnostic-only: only the target and the credentials on the selected route and support chains decide the request", routeComposition: "AND-within-route-OR-between-complete-routes", baselineAlternatives: 1, provenanceDoesNotEstablish: ["permission", "containment"] }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, proofCollections: "unsupported-in-initial-slice", status: "authenticated-current-revocation-status-required-for-A-O-D-S-H; suspension entries on accreditations are read only by the accreditation-suspension restriction", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], freshness: "verifier-profile maxAgeSeconds from the status list validFrom; no default", historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { objectApplicability: ["materialBatch", "activity", "method", "activityTime"], supportSubjectNeedNotEqualTargetIssuer: !0, mandatoryDisclosure: ["issuer", "credentialSubject/id", "activityTime", "selectedResult", "restrictions", "authorizingReference", "requiredStudy", "relatedResource", "proof"], missingMandatoryDisclosure: "not_established", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/acceptance-ledger.csv", testVectorRoots: ["testdata/regressions", "bindings/experimental/rm-v1/test-vectors"], unsupported: ["production-accreditation", "legal-effect", "physical-sample-truth", "public-example-namespace-resolution", "general-ontology-reasoning", "wallet-interoperability", "external-recognition-adapter", "timestamp-service"] } }, profiles: { "rm-verifier-1": { id: "https://vc4qi.example/profiles/rm-verifier", version: "1", status: "experimental", description: "Verifier-owned reliance profile for the experimental RM v1 binding. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "accredit-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } }, "rm-verifier-global-aci-1": { id: "https://vc4qi.example/profiles/rm-verifier-global-aci", version: "1", status: "experimental", description: "Fictional verifier abroad: its only trust anchor is a fictional stand-in for an arrangement anchor (Global ACI role), not the accreditation body. It accepts the accreditation body when an accreditation points up (termsOfUse) to that anchor's recognition of its issuer, a W3C Recognized Entities credential (Working Draft of 4 November 2026) with one subject, for the main scope each grant requires. It names no recognition itself. Otherwise identical to rm-verifier-1; not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://global-aci.vc4qi.example/controller", purposes: ["recognize-accreditation-bodies"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] }, bindingRules: { recognition: { recognizerPurpose: "recognize-accreditation-bodies", action: "accredit", purposes: { "accredit-rm-producers": { activity: "Reference material production", standardId: "urn:iso:std:iso:17034:ed-1" }, "accredit-rm-laboratories": { activity: "Testing", standardId: "urn:iso:std:iso-iec:17025:ed-3" } } } } }, "rm-verifier-two-routes-1": { id: "https://vc4qi.example/profiles/rm-verifier-two-routes", version: "1", status: "experimental", description: "Fictional verifier profile with two complete certificate routes, (operational scope within an accreditation) OR (direct accreditation), and the accreditation-suspension global restriction outside the OR. Exercises route composition (C01-C07); not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "accredit-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope", "direct-accreditation"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
` }, { uri: "https://nab.vc4qi.example/credentials/A", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-FzTvma4Juny0IB/FVNGxqmVEE5BP0czNgDVI/6Mp3P0KAikxgc/rbcyoKtqC2DoN", text: `{
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
        "id": "https://nab.vc4qi.example/credentials/A#scope-non-ferrous",
        "matrixIri": "https://vc4qi.example/bindings/rm/1#NonFerrousMetalsAndAlloys",
        "formIri": "https://vc4qi.example/bindings/rm/1#SolidForms",
        "allowedPropertyIris": [
          "https://vc4qi.example/bindings/rm/1#ElementContents"
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
    "proofValue": "z2FgeRMxPsC7kCTWs3rjQLBBZbYYCekQBhiJY1M3vkogbNp6DajttbhfiivRZdKcLoW8Bvh9NaFnqnZwF7XmYGfns"
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
` }, { uri: "https://nab.vc4qi.example/credentials/H", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-hWT3XPQG2SsEaSG8F3X8QRfkIApHzkXDe0ZZqmmnwAhly4878s3ZEknCKLMhjvDc", text: `{
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
        "matrixIri": "https://vc4qi.example/bindings/rm/1#NonFerrousMetalsAndAlloys",
        "allowedPropertyIris": [
          "https://vc4qi.example/bindings/rm/1#ElementContents"
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
    "proofValue": "z2zB9EbSBdLGxEoyB9MzDCQ3osgPCmActrM1UEeiznGY3Ehanw27cSFGXWfTcCs29mzoKtJ9jxNLiLu1nCHJzPnRk"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/O", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-SjmPo88jkHhXyRRTpW96K9A9nDOqOMz02RmqF5buMA0uGpp517HZjyqG3yje2yLc", text: `{
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
      "digestSRI": "sha384-FzTvma4Juny0IB/FVNGxqmVEE5BP0czNgDVI/6Mp3P0KAikxgc/rbcyoKtqC2DoN"
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
    "proofValue": "z2KD7JTekY2Wi4Nha86zSsZxHJS6hWSYExrKW2wmGZdbrsierMQZADcXQw7gWyw8vBdv533RfBukd11tU5UMavJY6"
  }
}
` }, { uri: "https://lab.vc4qi.example/credentials/S", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-6CI7/7PCp9w2yiVvGQglb2ETi9YxZ9pIsYaSqaBA2CbeVuB9TUXu3s7K6aW8XF1x", text: `{
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
      "digestSRI": "sha384-hWT3XPQG2SsEaSG8F3X8QRfkIApHzkXDe0ZZqmmnwAhly4878s3ZEknCKLMhjvDc"
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
    "proofValue": "znpc7fVKob4A3DYufVcFRuyfa3gE9XmJYsPuWnHmQiGdNGMFjHVKjqeGMkKqBc9EzNQ1boALGhUyDbfAozeM1iMS"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D178", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-G/s6nJbIX7CgrLjpX1pidIX2lMtk4djSBQozutszMi5pPb5qkyA7wl0kLQ99dOGj", text: `{
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
      "digestSRI": "sha384-SjmPo88jkHhXyRRTpW96K9A9nDOqOMz02RmqF5buMA0uGpp517HZjyqG3yje2yLc"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "digestSRI": "sha384-6CI7/7PCp9w2yiVvGQglb2ETi9YxZ9pIsYaSqaBA2CbeVuB9TUXu3s7K6aW8XF1x"
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
    "proofValue": "z5NQqzMufC5ccE2UG4fp4SahJWXMHcrMWYcLGN9eggZmz1iGyPjaEJs8PAmkpegEbtA2HUiRgsdrzyNMiqeQaSsLX"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D197", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-b6Me/nldSs5s4mLGnPPkSx4nHvYl2oHecsP+UZrLWWGPJPN6tODlJrqKKN1pKQ82", text: `{
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
      "digestSRI": "sha384-SjmPo88jkHhXyRRTpW96K9A9nDOqOMz02RmqF5buMA0uGpp517HZjyqG3yje2yLc"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "digestSRI": "sha384-6CI7/7PCp9w2yiVvGQglb2ETi9YxZ9pIsYaSqaBA2CbeVuB9TUXu3s7K6aW8XF1x"
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
    "proofValue": "z4rDAih2DaDbbNRA1xK3Mbk8xBYKb4vH4pD5HaFq5VaTDbwxaLNJBvonCWRDiFRbs6MEkQ6VzaNKqEAcGnkpZ2L84"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D520", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-40yjRi3PZzEc3aedGkWxmuH5SyrQePAUAPT3F71q6I17+tVm8atwsM9hAU+DCelc", text: `{
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
      "digestSRI": "sha384-SjmPo88jkHhXyRRTpW96K9A9nDOqOMz02RmqF5buMA0uGpp517HZjyqG3yje2yLc"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "digestSRI": "sha384-6CI7/7PCp9w2yiVvGQglb2ETi9YxZ9pIsYaSqaBA2CbeVuB9TUXu3s7K6aW8XF1x"
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
    "proofValue": "z3r1vP4qEzVbbxg66aPExwxGA9zxm4Qi4xArETiV9mdH5vJ9aArxCqVA5xP5PBTJCyacn1vVPqN4RjWxN48csew7H"
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
function ta(e, ...t) {
  if (!Ul(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function Ea(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Vl(e, t) {
  ta(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error("digestInto() expects output buffer of length at least " + n);
}
function jn(...e) {
  for (let t = 0; t < e.length; t++)
    e[t].fill(0);
}
function qr(e) {
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
  return typeof e == "string" && (e = Gl(e)), ta(e), e;
}
class Fl {
}
function na(e) {
  const t = (i) => e().update(Ad(i)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
function Bl(e, t, n, i) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, i);
  const o = BigInt(32), r = BigInt(4294967295), s = Number(n >> o & r), a = Number(n & r), c = i ? 4 : 0, l = i ? 0 : 4;
  e.setUint32(t + c, s, i), e.setUint32(t + l, a, i);
}
function Zl(e, t, n) {
  return e & t ^ ~e & n;
}
function Hl(e, t, n) {
  return e & t ^ e & n ^ t & n;
}
class qd extends Fl {
  constructor(t, n, i, o) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = n, this.padOffset = i, this.isLE = o, this.buffer = new Uint8Array(t), this.view = qr(this.buffer);
  }
  update(t) {
    Ea(this), t = Ad(t), ta(t);
    const { view: n, buffer: i, blockLen: o } = this, r = t.length;
    for (let s = 0; s < r; ) {
      const a = Math.min(o - this.pos, r - s);
      if (a === o) {
        const c = qr(t);
        for (; o <= r - s; s += o)
          this.process(c, s);
        continue;
      }
      i.set(t.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === o && (this.process(n, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    Ea(this), Vl(t, this), this.finished = !0;
    const { buffer: n, view: i, blockLen: o, isLE: r } = this;
    let { pos: s } = this;
    n[s++] = 128, jn(this.buffer.subarray(s)), this.padOffset > o - s && (this.process(i, 0), s = 0);
    for (let g = s; g < o; g++)
      n[g] = 0;
    Bl(i, o - 8, BigInt(this.length * 8), r), this.process(i, 0);
    const a = qr(t), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const l = c / 4, p = this.get();
    if (l > p.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let g = 0; g < l; g++)
      a.setUint32(4 * g, p[g], r);
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
]), zn = /* @__PURE__ */ BigInt(2 ** 32 - 1), ka = /* @__PURE__ */ BigInt(32);
function Jl(e, t = !1) {
  return t ? { h: Number(e & zn), l: Number(e >> ka & zn) } : { h: Number(e >> ka & zn) | 0, l: Number(e & zn) | 0 };
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
const Ma = (e, t, n) => e >>> n, Oa = (e, t, n) => e << 32 - n | t >>> n, Kt = (e, t, n) => e >>> n | t << 32 - n, Qt = (e, t, n) => e << 32 - n | t >>> n, Un = (e, t, n) => e << 64 - n | t >>> n - 32, Vn = (e, t, n) => e >>> n - 32 | t << 64 - n;
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
      const f = At[g - 15], h = At[g - 2], w = rt(f, 7) ^ rt(f, 18) ^ f >>> 3, x = rt(h, 17) ^ rt(h, 19) ^ h >>> 10;
      At[g] = x + At[g - 7] + w + At[g - 16] | 0;
    }
    let { A: i, B: o, C: r, D: s, E: a, F: c, G: l, H: p } = this;
    for (let g = 0; g < 64; g++) {
      const f = rt(a, 6) ^ rt(a, 11) ^ rt(a, 25), h = p + f + Zl(a, c, l) + nu[g] + At[g] | 0, x = (rt(i, 2) ^ rt(i, 13) ^ rt(i, 22)) + Hl(i, o, r) | 0;
      p = l, l = c, c = a, a = s + h | 0, s = r, r = o, o = i, i = h + x | 0;
    }
    i = i + this.A | 0, o = o + this.B | 0, r = r + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, l = l + this.G | 0, p = p + this.H | 0, this.set(i, o, r, s, a, c, l, p);
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
    const { Ah: t, Al: n, Bh: i, Bl: o, Ch: r, Cl: s, Dh: a, Dl: c, Eh: l, El: p, Fh: g, Fl: f, Gh: h, Gl: w, Hh: x, Hl: b } = this;
    return [t, n, i, o, r, s, a, c, l, p, g, f, h, w, x, b];
  }
  // prettier-ignore
  set(t, n, i, o, r, s, a, c, l, p, g, f, h, w, x, b) {
    this.Ah = t | 0, this.Al = n | 0, this.Bh = i | 0, this.Bl = o | 0, this.Ch = r | 0, this.Cl = s | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = l | 0, this.El = p | 0, this.Fh = g | 0, this.Fl = f | 0, this.Gh = h | 0, this.Gl = w | 0, this.Hh = x | 0, this.Hl = b | 0;
  }
  process(t, n) {
    for (let y = 0; y < 16; y++, n += 4)
      qt[y] = t.getUint32(n), Rt[y] = t.getUint32(n += 4);
    for (let y = 16; y < 80; y++) {
      const d = qt[y - 15] | 0, u = Rt[y - 15] | 0, m = Kt(d, u, 1) ^ Kt(d, u, 8) ^ Ma(d, u, 7), I = Qt(d, u, 1) ^ Qt(d, u, 8) ^ Oa(d, u, 7), A = qt[y - 2] | 0, $ = Rt[y - 2] | 0, R = Kt(A, $, 19) ^ Un(A, $, 61) ^ Ma(A, $, 6), E = Qt(A, $, 19) ^ Vn(A, $, 61) ^ Oa(A, $, 6), k = Xl(I, E, Rt[y - 7], Rt[y - 16]), L = Yl(k, m, R, qt[y - 7], qt[y - 16]);
      qt[y] = L | 0, Rt[y] = k | 0;
    }
    let { Ah: i, Al: o, Bh: r, Bl: s, Ch: a, Cl: c, Dh: l, Dl: p, Eh: g, El: f, Fh: h, Fl: w, Gh: x, Gl: b, Hh: S, Hl: v } = this;
    for (let y = 0; y < 80; y++) {
      const d = Kt(g, f, 14) ^ Kt(g, f, 18) ^ Un(g, f, 41), u = Qt(g, f, 14) ^ Qt(g, f, 18) ^ Vn(g, f, 41), m = g & h ^ ~g & x, I = f & w ^ ~f & b, A = eu(v, u, I, su[y], Rt[y]), $ = tu(A, S, d, m, ru[y], qt[y]), R = A | 0, E = Kt(i, o, 28) ^ Un(i, o, 34) ^ Un(i, o, 39), k = Qt(i, o, 28) ^ Vn(i, o, 34) ^ Vn(i, o, 39), L = i & r ^ i & a ^ r & a, j = o & s ^ o & c ^ s & c;
      S = x | 0, v = b | 0, x = h | 0, b = w | 0, h = g | 0, w = f | 0, { h: g, l: f } = ht(l | 0, p | 0, $ | 0, R | 0), l = a | 0, p = c | 0, a = r | 0, c = s | 0, r = i | 0, s = o | 0;
      const D = Ql(R, k, j);
      i = Wl(D, $, E, L), o = D | 0;
    }
    ({ h: i, l: o } = ht(this.Ah | 0, this.Al | 0, i | 0, o | 0)), { h: r, l: s } = ht(this.Bh | 0, this.Bl | 0, r | 0, s | 0), { h: a, l: c } = ht(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: l, l: p } = ht(this.Dh | 0, this.Dl | 0, l | 0, p | 0), { h: g, l: f } = ht(this.Eh | 0, this.El | 0, g | 0, f | 0), { h, l: w } = ht(this.Fh | 0, this.Fl | 0, h | 0, w | 0), { h: x, l: b } = ht(this.Gh | 0, this.Gl | 0, x | 0, b | 0), { h: S, l: v } = ht(this.Hh | 0, this.Hl | 0, S | 0, v | 0), this.set(i, o, r, s, a, c, l, p, g, f, h, w, x, b, S, v);
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
const ou = /* @__PURE__ */ na(() => new iu()), cu = /* @__PURE__ */ na(() => new jd()), du = /* @__PURE__ */ na(() => new au()), $d = ou, lu = cu, uu = du;
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
function Ms(e) {
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
function sr(e) {
  return `sha384-${Ms("sha384").update(e).digest("base64")}`;
}
function La(e) {
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
    Dn(this, on, /* @__PURE__ */ new Map());
    for (const n of t) {
      for (const [o, r] of Object.entries({
        uri: n.uri,
        mediaType: n.mediaType,
        origin: n.origin,
        version: n.version
      })) fu(r, o);
      if (it(this, on).has(n.uri))
        throw new Ce("DUPLICATE_RESOURCE", `Duplicate static resource: ${n.uri}`);
      const i = sr(n.bytes);
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
    return Ar(this, cn, it(this, cn) + 1), Ar(this, dn, it(this, dn) + n.bytes.byteLength), { ...n, bytes: Uint8Array.from(n.bytes) };
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
const Na = "https://vc4qi.example/bindings/rm/1", Rr = [
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
function Td(e) {
  if (e !== null && typeof e == "object") {
    for (const t of Object.values(e)) Td(t);
    Object.freeze(e);
  }
  return e;
}
function mu(e) {
  if (!Gn(e)) throw new TypeError("Binding manifest must be an object.");
  if (Object.keys(e).length !== Rr.length || Rr.some((n) => !Object.hasOwn(e, n)))
    throw new TypeError("Binding manifest must contain exactly the supported top-level categories.");
  if (typeof e.id != "string" || e.id.length === 0 || typeof e.version != "string" || e.version.length === 0 || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Binding manifest identity, version, or status is invalid.");
  if (!Gn(e.installation) || e.installation.status !== "incomplete" && e.installation.status !== "installable" || typeof e.installation.reason != "string" || e.installation.reason.length === 0 || !Array.isArray(e.installation.pendingResources) || e.installation.pendingResources.some((n) => typeof n != "string" || n.length === 0))
    throw new TypeError("Binding manifest installation state is invalid.");
  if (!Array.isArray(e.factMappings) || e.factMappings.length === 0 || e.factMappings.some((n) => !Gn(n)))
    throw new TypeError("Binding manifest factMappings must be a nonempty object array.");
  for (const n of Rr.slice(4))
    if (!(n === "installation" || n === "factMappings") && (!Gn(e[n]) || Object.keys(e[n]).length === 0))
      throw new TypeError(`Binding manifest ${n} must be a nonempty object.`);
  return Td(structuredClone(e));
}
const Ft = "https://www.w3.org/ns/credentials/v2", yu = "https://vc4qi.example/contexts/rm/1", Lt = "https://vc4qi.example/schemas/rm/1/", gu = "https://vc4qi.example/contexts/recognized-entities/draft-20261104", Cd = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", Os = BigInt(58);
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
    const o = Number(n % Os);
    n = n / Os, i.unshift(o);
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
    n = n * Os + BigInt(a);
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
function ia(e) {
  if (!e.startsWith("z"))
    throw new Error(`Expected multibase base58btc prefix 'z', got '${e[0]}'`);
  return bu(e.slice(1));
}
const Da = [237, 1], xu = ["revoked", "expires"];
function ve(e, t, n, i = {}) {
  return Object.freeze({ state: e, code: t, reason: n, ...i });
}
function Bi(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Su(e) {
  if (typeof e == "string" && e.length > 0) return e;
  if (Bi(e) && typeof e.id == "string" && e.id.length > 0) return e.id;
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
    t = ia(e);
  } catch {
    return;
  }
  if (!(t.length !== 34 || t[0] !== Da[0] || t[1] !== Da[1]))
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
    const f = n.resolve(o);
    s = f.digestSRI, r = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(f.bytes));
  } catch (f) {
    return f instanceof Ce ? ve(
      "not_established",
      "CONTROLLER_NOT_INSTALLED",
      `Controller document ${o} is not available: ${f.code}.`
    ) : ve(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${o} is not valid UTF-8 JSON.`
    );
  }
  if (!Bi(r))
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
  const c = (Array.isArray(r.verificationMethod) ? r.verificationMethod : []).filter((f) => Bi(f) && f.id === t);
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
  const l = c[0];
  if (l.type !== "Multikey")
    return ve(
      "not_established",
      "METHOD_TYPE_UNSUPPORTED",
      `Verification method type ${String(l.type)} is not supported; Multikey is required.`
    );
  if (l.controller !== o)
    return ve(
      "contradicted",
      "METHOD_CONTROLLER_MISMATCH",
      `${t} is controlled by ${String(l.controller)}, not ${o}.`
    );
  if (xu.some((f) => Object.hasOwn(l, f)))
    return ve(
      "not_established",
      "METHOD_LIFECYCLE_UNSUPPORTED",
      "Key revocation/expiry metadata is not supported in the initial slice."
    );
  const p = Au(l.publicKeyMultibase);
  if (p === void 0)
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
    { publicKey: p, verificationMethod: t, controllerDocumentDigest: s }
  ) : g.some((f) => Bi(f) && f.id === t) ? ve(
    "not_established",
    "EMBEDDED_METHOD_UNSUPPORTED",
    "Embedded assertionMethod entries are not supported; a reference is required."
  ) : ve(
    "contradicted",
    "NOT_ASSERTION_METHOD",
    `${t} is not authorized for assertionMethod.`
  );
}
const za = ["accept-successor", "require-extension", "none"], Ru = ["value-at-most-limit", "value-plus-expanded-uncertainty-at-most-limit"], ju = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/;
function Je(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const ze = (e) => typeof e == "string" && e.trim().length > 0, jr = (e) => Array.isArray(e) && e.length > 0 && e.every(ze) && new Set(e).size === e.length;
function ra(e) {
  if (!Je(e) || !ze(e.id) || !ze(e.version) || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Reliance profile identity, version or status is invalid.");
  const t = e.binding;
  if (!Je(t) || !ze(t.id) || !ze(t.version))
    throw new TypeError("Reliance profile must name exactly one binding and version.");
  if (!Array.isArray(e.trustAnchors) || e.trustAnchors.some((l) => !Je(l) || !ze(l.id) || !jr(l.purposes)))
    throw new TypeError("Reliance profile trustAnchors must list anchors with explicit purposes.");
  const n = e.authority;
  if (!Je(n) || !jr(n.certificateRoutes) || !Array.isArray(n.globalRestrictions) || !n.globalRestrictions.every(ze) || !Number.isSafeInteger(n.maxRoutes) || n.maxRoutes <= 0)
    throw new TypeError("Reliance profile authority needs certificateRoutes, globalRestrictions and a positive maxRoutes.");
  const i = e.credentialStatus;
  if (!Je(i) || typeof i.required != "boolean" || !jr(i.purposes) || !Number.isSafeInteger(i.maxAgeSeconds) || i.maxAgeSeconds <= 0)
    throw new TypeError("Reliance profile credentialStatus needs required, purposes and a positive maxAgeSeconds.");
  const o = e.mapping;
  if (!Je(o) || !za.includes(o.methodSuccession))
    throw new TypeError(`Reliance profile mapping.methodSuccession must be one of ${za.join(", ")}.`);
  const r = e.conformity;
  if (!Je(r) || !Array.isArray(r.requirements) || !Array.isArray(r.decisionRules) || r.requirements.some((l) => !Je(l) || !ze(l.id) || !ze(l.propertyIri) || !ze(l.quantityKindIri) || !Je(l.upperLimit) || typeof l.upperLimit.value != "string" || !ju.test(l.upperLimit.value) || !ze(l.upperLimit.unit)) || r.decisionRules.some((l) => !Je(l) || !ze(l.id) || !Ru.includes(l.acceptWhen)))
    throw new TypeError("Reliance profile conformity needs requirements (id, propertyIri, quantityKindIri, upperLimit) and decisionRules (id, acceptWhen).");
  if (e.bindingRules !== void 0 && !Je(e.bindingRules))
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
function $r(e, t) {
  if (new Set(e).size !== e.length)
    throw new TypeError(`${t} must not contain duplicates.`);
}
function Ls(e, t) {
  const n = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/.exec(e);
  if (!n)
    throw new TypeError(`${t} must be an ISO 8601 date-time with an explicit offset.`);
  const [, i, o, r, s, a, c] = n, l = n[7], p = Number(i), g = Number(o), f = Number(r), h = Number(s), w = Number(a), x = Number(c), b = /* @__PURE__ */ new Date(0);
  b.setUTCFullYear(p, g - 1, f), b.setUTCHours(0, 0, 0, 0);
  const S = b.getUTCFullYear() !== p || b.getUTCMonth() !== g - 1 || b.getUTCDate() !== f, v = l === "Z" ? null : /^([+-])(\d{2}):(\d{2})$/.exec(l), y = v !== null && (Number(v[2]) > 23 || Number(v[3]) > 59);
  if (p < 1 || S || h > 23 || w > 59 || x > 59 || y || !Number.isFinite(Date.parse(e)))
    throw new TypeError(`${t} must be a valid ISO 8601 date-time.`);
}
function _r(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0)
    throw new TypeError(`${t} must be a positive safe integer.`);
}
function Qi(e, t) {
  ue(e.id, `${t}.id`), ue(e.version, `${t}.version`);
}
function Wi(e) {
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
  if (ue(e.requestId, "requestId"), ue(e.targetId, "targetId"), ue(e.purpose, "purpose"), ue(e.trustConfigId, "trustConfigId"), Qi(e.binding, "binding"), Qi(e.profile, "profile"), Ls(e.evaluationTime, "evaluationTime"), Ls(e.activityTime, "activityTime"), e.selectedClaims.length === 0)
    throw new TypeError("selectedClaims must contain at least one claim.");
  for (const [r, s] of e.selectedClaims.entries())
    ue(s.id, `selectedClaims[${r}].id`), ue(s.sourcePointer, `selectedClaims[${r}].sourcePointer`);
  $r(e.selectedClaims.map((r) => r.id), "selected claim IDs"), $r(e.selectedClaims.map((r) => r.sourcePointer), "selected claim source pointers");
  for (const [r, s] of e.suppliedEvidence.entries())
    ue(s, `suppliedEvidence[${r}]`);
  $r(e.suppliedEvidence, "suppliedEvidence"), _r(e.resolverLimits.maxResources, "resolverLimits.maxResources"), _r(e.resolverLimits.maxDepth, "resolverLimits.maxDepth"), _r(e.resolverLimits.maxBytes, "resolverLimits.maxBytes"), e.conformity && (ue(e.conformity.requirementId, "conformity.requirementId"), ue(e.conformity.decisionRuleId, "conformity.decisionRuleId"));
  const t = Object.freeze(e.selectedClaims.map((r) => Object.freeze({
    id: r.id,
    sourcePointer: r.sourcePointer
  }))), n = Object.freeze([...e.suppliedEvidence]), i = Object.freeze({ ...e.resolverLimits }), o = e.conformity ? Object.freeze({ ...e.conformity }) : void 0;
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    selectedClaims: t,
    purpose: e.purpose,
    binding: Wi(e.binding),
    profile: Wi(e.profile),
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
  return Ls(e.observedAt, `resources[${t}].observedAt`), Object.freeze({ ...e });
}
function ar(e) {
  if (ue(e.requestId, "requestId"), ue(e.targetId, "targetId"), Qi(e.binding, "binding"), Qi(e.profile, "profile"), e.artifactVerification.forEach((t, n) => ue(t.artifactId, `artifactVerification[${n}].artifactId`)), e.authorization.forEach((t, n) => ue(t.claimId, `authorization[${n}].claimId`)), e.support.forEach((t, n) => ue(t.obligationId, `support[${n}].obligationId`)), e.conformity.requested)
    ue(e.conformity.requirementId, "conformity.requirementId"), ue(e.conformity.decisionRuleId, "conformity.decisionRuleId");
  else if (e.conformity.requested !== !1 || e.conformity.execution !== "not_run")
    throw new TypeError("Unrequested conformity must have execution state not_run.");
  if (!["accept", "reject", "not_established"].includes(e.decision))
    throw new TypeError(`Unsupported reliance decision: ${String(e.decision)}.`);
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: Wi(e.binding),
    profile: Wi(e.profile),
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
function sa(e) {
  const t = xe(e);
  return t === "established" ? "accept" : t === "contradicted" ? "reject" : "not_established";
}
var Ua = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function aa(e) {
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
var Fn = { exports: {} }, Pr = {}, mt = {}, Nt = {}, Tr = {}, Cr = {}, Er = {}, Va;
function Xi() {
  return Va || (Va = 1, (function(e) {
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
          const y = l(S[v - 1], S[v + 1]);
          if (y !== void 0) {
            S.splice(v - 1, 3, y);
            continue;
          }
          S[v++] = "+";
        }
        v++;
      }
    }
    function l(S, v) {
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
      return new i(h(S));
    }
    e.stringify = f;
    function h(S) {
      return JSON.stringify(S).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = h;
    function w(S) {
      return typeof S == "string" && e.IDENTIFIER.test(S) ? new i(`.${S}`) : o`[${S}]`;
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
  })(Er)), Er;
}
var kr = {}, Ga;
function Fa() {
  return Ga || (Ga = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Xi();
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
        var p, g;
        if (!((g = (p = this._parent) === null || p === void 0 ? void 0 : p._prefixes) === null || g === void 0) && g.has(l) || this._prefixes && !this._prefixes.has(l))
          throw new Error(`CodeGen: prefix "${l}" is not allowed in this scope`);
        return this._names[l] = { prefix: l, index: 0 };
      }
    }
    e.Scope = o;
    class r extends t.Name {
      constructor(l, p) {
        super(p), this.prefix = l;
      }
      setValue(l, { property: p, itemIndex: g }) {
        this.value = l, this.scopePath = (0, t._)`.${new t.Name(p)}[${g}]`;
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
        var g;
        if (p.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const f = this.toName(l), { prefix: h } = f, w = (g = p.key) !== null && g !== void 0 ? g : p.ref;
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
      getValue(l, p) {
        const g = this._values[l];
        if (g)
          return g.get(p);
      }
      scopeRefs(l, p = this._values) {
        return this._reduceValues(p, (g) => {
          if (g.scopePath === void 0)
            throw new Error(`CodeGen: name "${g}" has no value`);
          return (0, t._)`${l}${g.scopePath}`;
        });
      }
      scopeCode(l = this._values, p, g) {
        return this._reduceValues(l, (f) => {
          if (f.value === void 0)
            throw new Error(`CodeGen: name "${f}" has no value`);
          return f.value.code;
        }, p, g);
      }
      _reduceValues(l, p, g = {}, f) {
        let h = t.nil;
        for (const w in l) {
          const x = l[w];
          if (!x)
            continue;
          const b = g[w] = g[w] || /* @__PURE__ */ new Map();
          x.forEach((S) => {
            if (b.has(S))
              return;
            b.set(S, i.Started);
            let v = p(S);
            if (v) {
              const y = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              h = (0, t._)`${h}${y} ${S} = ${v};${this.opts._n}`;
            } else if (v = f?.(S))
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
  })(kr)), kr;
}
var Ba;
function te() {
  return Ba || (Ba = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Xi(), n = /* @__PURE__ */ Fa();
    var i = /* @__PURE__ */ Xi();
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
    var o = /* @__PURE__ */ Fa();
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
      optimizeNames(_, q) {
        return this;
      }
    }
    class s extends r {
      constructor(_, q, C) {
        super(), this.varKind = _, this.name = q, this.rhs = C;
      }
      render({ es5: _, _n: q }) {
        const C = _ ? n.varKinds.var : this.varKind, z = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${C} ${this.name}${z};` + q;
      }
      optimizeNames(_, q) {
        if (_[this.name.str])
          return this.rhs && (this.rhs = j(this.rhs, _, q)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends r {
      constructor(_, q, C) {
        super(), this.lhs = _, this.rhs = q, this.sideEffects = C;
      }
      render({ _n: _ }) {
        return `${this.lhs} = ${this.rhs};` + _;
      }
      optimizeNames(_, q) {
        if (!(this.lhs instanceof t.Name && !_[this.lhs.str] && !this.sideEffects))
          return this.rhs = j(this.rhs, _, q), this;
      }
      get names() {
        const _ = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return L(_, this.rhs);
      }
    }
    class c extends a {
      constructor(_, q, C, z) {
        super(_, C, z), this.op = q;
      }
      render({ _n: _ }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + _;
      }
    }
    class l extends r {
      constructor(_) {
        super(), this.label = _, this.names = {};
      }
      render({ _n: _ }) {
        return `${this.label}:` + _;
      }
    }
    class p extends r {
      constructor(_) {
        super(), this.label = _, this.names = {};
      }
      render({ _n: _ }) {
        return `break${this.label ? ` ${this.label}` : ""};` + _;
      }
    }
    class g extends r {
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
    class f extends r {
      constructor(_) {
        super(), this.code = _;
      }
      render({ _n: _ }) {
        return `${this.code};` + _;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(_, q) {
        return this.code = j(this.code, _, q), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class h extends r {
      constructor(_ = []) {
        super(), this.nodes = _;
      }
      render(_) {
        return this.nodes.reduce((q, C) => q + C.render(_), "");
      }
      optimizeNodes() {
        const { nodes: _ } = this;
        let q = _.length;
        for (; q--; ) {
          const C = _[q].optimizeNodes();
          Array.isArray(C) ? _.splice(q, 1, ...C) : C ? _[q] = C : _.splice(q, 1);
        }
        return _.length > 0 ? this : void 0;
      }
      optimizeNames(_, q) {
        const { nodes: C } = this;
        let z = C.length;
        for (; z--; ) {
          const H = C[z];
          H.optimizeNames(_, q) || (D(_, H.names), C.splice(z, 1));
        }
        return C.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((_, q) => k(_, q.names), {});
      }
    }
    class w extends h {
      render(_) {
        return "{" + _._n + super.render(_) + "}" + _._n;
      }
    }
    class x extends h {
    }
    class b extends w {
    }
    b.kind = "else";
    class S extends w {
      constructor(_, q) {
        super(q), this.condition = _;
      }
      render(_) {
        let q = `if(${this.condition})` + super.render(_);
        return this.else && (q += "else " + this.else.render(_)), q;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const _ = this.condition;
        if (_ === !0)
          return this.nodes;
        let q = this.else;
        if (q) {
          const C = q.optimizeNodes();
          q = this.else = Array.isArray(C) ? new b(C) : C;
        }
        if (q)
          return _ === !1 ? q instanceof S ? q : q.nodes : this.nodes.length ? this : new S(P(_), q instanceof S ? [q] : q.nodes);
        if (!(_ === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(_, q) {
        var C;
        if (this.else = (C = this.else) === null || C === void 0 ? void 0 : C.optimizeNames(_, q), !!(super.optimizeNames(_, q) || this.else))
          return this.condition = j(this.condition, _, q), this;
      }
      get names() {
        const _ = super.names;
        return L(_, this.condition), this.else && k(_, this.else.names), _;
      }
    }
    S.kind = "if";
    class v extends w {
    }
    v.kind = "for";
    class y extends v {
      constructor(_) {
        super(), this.iteration = _;
      }
      render(_) {
        return `for(${this.iteration})` + super.render(_);
      }
      optimizeNames(_, q) {
        if (super.optimizeNames(_, q))
          return this.iteration = j(this.iteration, _, q), this;
      }
      get names() {
        return k(super.names, this.iteration.names);
      }
    }
    class d extends v {
      constructor(_, q, C, z) {
        super(), this.varKind = _, this.name = q, this.from = C, this.to = z;
      }
      render(_) {
        const q = _.es5 ? n.varKinds.var : this.varKind, { name: C, from: z, to: H } = this;
        return `for(${q} ${C}=${z}; ${C}<${H}; ${C}++)` + super.render(_);
      }
      get names() {
        const _ = L(super.names, this.from);
        return L(_, this.to);
      }
    }
    class u extends v {
      constructor(_, q, C, z) {
        super(), this.loop = _, this.varKind = q, this.name = C, this.iterable = z;
      }
      render(_) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(_);
      }
      optimizeNames(_, q) {
        if (super.optimizeNames(_, q))
          return this.iterable = j(this.iterable, _, q), this;
      }
      get names() {
        return k(super.names, this.iterable.names);
      }
    }
    class m extends w {
      constructor(_, q, C) {
        super(), this.name = _, this.args = q, this.async = C;
      }
      render(_) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(_);
      }
    }
    m.kind = "func";
    class I extends h {
      render(_) {
        return "return " + super.render(_);
      }
    }
    I.kind = "return";
    class A extends w {
      render(_) {
        let q = "try" + super.render(_);
        return this.catch && (q += this.catch.render(_)), this.finally && (q += this.finally.render(_)), q;
      }
      optimizeNodes() {
        var _, q;
        return super.optimizeNodes(), (_ = this.catch) === null || _ === void 0 || _.optimizeNodes(), (q = this.finally) === null || q === void 0 || q.optimizeNodes(), this;
      }
      optimizeNames(_, q) {
        var C, z;
        return super.optimizeNames(_, q), (C = this.catch) === null || C === void 0 || C.optimizeNames(_, q), (z = this.finally) === null || z === void 0 || z.optimizeNames(_, q), this;
      }
      get names() {
        const _ = super.names;
        return this.catch && k(_, this.catch.names), this.finally && k(_, this.finally.names), _;
      }
    }
    class $ extends w {
      constructor(_) {
        super(), this.error = _;
      }
      render(_) {
        return `catch(${this.error})` + super.render(_);
      }
    }
    $.kind = "catch";
    class R extends w {
      render(_) {
        return "finally" + super.render(_);
      }
    }
    R.kind = "finally";
    class E {
      constructor(_, q = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...q, _n: q.lines ? `
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
      scopeValue(_, q) {
        const C = this._extScope.value(_, q);
        return (this._values[C.prefix] || (this._values[C.prefix] = /* @__PURE__ */ new Set())).add(C), C;
      }
      getScopeValue(_, q) {
        return this._extScope.getValue(_, q);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(_) {
        return this._extScope.scopeRefs(_, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(_, q, C, z) {
        const H = this._scope.toName(q);
        return C !== void 0 && z && (this._constants[H.str] = C), this._leafNode(new s(_, H, C)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(_, q, C) {
        return this._def(n.varKinds.const, _, q, C);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(_, q, C) {
        return this._def(n.varKinds.let, _, q, C);
      }
      // `var` declaration with optional assignment
      var(_, q, C) {
        return this._def(n.varKinds.var, _, q, C);
      }
      // assignment code
      assign(_, q, C) {
        return this._leafNode(new a(_, q, C));
      }
      // `+=` code
      add(_, q) {
        return this._leafNode(new c(_, e.operators.ADD, q));
      }
      // appends passed SafeExpr to code or executes Block
      code(_) {
        return typeof _ == "function" ? _() : _ !== t.nil && this._leafNode(new f(_)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(..._) {
        const q = ["{"];
        for (const [C, z] of _)
          q.length > 1 && q.push(","), q.push(C), (C !== z || this.opts.es5) && (q.push(":"), (0, t.addCodeArg)(q, z));
        return q.push("}"), new t._Code(q);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(_, q, C) {
        if (this._blockNode(new S(_)), q && C)
          this.code(q).else().code(C).endIf();
        else if (q)
          this.code(q).endIf();
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
        return this._elseNode(new b());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(S, b);
      }
      _for(_, q) {
        return this._blockNode(_), q && this.code(q).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(_, q) {
        return this._for(new y(_), q);
      }
      // `for` statement for a range of values
      forRange(_, q, C, z, H = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Q = this._scope.toName(_);
        return this._for(new d(H, Q, q, C), () => z(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(_, q, C, z = n.varKinds.const) {
        const H = this._scope.toName(_);
        if (this.opts.es5) {
          const Q = q instanceof t.Name ? q : this.var("_arr", q);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (J) => {
            this.var(H, (0, t._)`${Q}[${J}]`), C(H);
          });
        }
        return this._for(new u("of", z, H, q), () => C(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(_, q, C, z = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(_, (0, t._)`Object.keys(${q})`, C);
        const H = this._scope.toName(_);
        return this._for(new u("in", z, H, q), () => C(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(v);
      }
      // `label` statement
      label(_) {
        return this._leafNode(new l(_));
      }
      // `break` statement
      break(_) {
        return this._leafNode(new p(_));
      }
      // `return` statement
      return(_) {
        const q = new I();
        if (this._blockNode(q), this.code(_), q.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(I);
      }
      // `try` statement
      try(_, q, C) {
        if (!q && !C)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const z = new A();
        if (this._blockNode(z), this.code(_), q) {
          const H = this.name("e");
          this._currNode = z.catch = new $(H), q(H);
        }
        return C && (this._currNode = z.finally = new R(), this.code(C)), this._endBlockNode($, R);
      }
      // `throw` statement
      throw(_) {
        return this._leafNode(new g(_));
      }
      // start self-balancing block
      block(_, q) {
        return this._blockStarts.push(this._nodes.length), _ && this.code(_).endBlock(q), this;
      }
      // end the current self-balancing block
      endBlock(_) {
        const q = this._blockStarts.pop();
        if (q === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const C = this._nodes.length - q;
        if (C < 0 || _ !== void 0 && C !== _)
          throw new Error(`CodeGen: wrong number of nodes: ${C} vs ${_} expected`);
        return this._nodes.length = q, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(_, q = t.nil, C, z) {
        return this._blockNode(new m(_, q, C)), z && this.code(z).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(m);
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
      _endBlockNode(_, q) {
        const C = this._currNode;
        if (C instanceof _ || q && C instanceof q)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${q ? `${_.kind}/${q.kind}` : _.kind}"`);
      }
      _elseNode(_) {
        const q = this._currNode;
        if (!(q instanceof S))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = q.else = _, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const _ = this._nodes;
        return _[_.length - 1];
      }
      set _currNode(_) {
        const q = this._nodes;
        q[q.length - 1] = _;
      }
    }
    e.CodeGen = E;
    function k(N, _) {
      for (const q in _)
        N[q] = (N[q] || 0) + (_[q] || 0);
      return N;
    }
    function L(N, _) {
      return _ instanceof t._CodeOrName ? k(N, _.names) : N;
    }
    function j(N, _, q) {
      if (N instanceof t.Name)
        return C(N);
      if (!z(N))
        return N;
      return new t._Code(N._items.reduce((H, Q) => (Q instanceof t.Name && (Q = C(Q)), Q instanceof t._Code ? H.push(...Q._items) : H.push(Q), H), []));
      function C(H) {
        const Q = q[H.str];
        return Q === void 0 || _[H.str] !== 1 ? H : (delete _[H.str], Q);
      }
      function z(H) {
        return H instanceof t._Code && H._items.some((Q) => Q instanceof t.Name && _[Q.str] === 1 && q[Q.str] !== void 0);
      }
    }
    function D(N, _) {
      for (const q in _)
        N[q] = (N[q] || 0) - (_[q] || 0);
    }
    function P(N) {
      return typeof N == "boolean" || typeof N == "number" || N === null ? !N : (0, t._)`!${U(N)}`;
    }
    e.not = P;
    const G = M(e.operators.AND);
    function O(...N) {
      return N.reduce(G);
    }
    e.and = O;
    const B = M(e.operators.OR);
    function T(...N) {
      return N.reduce(B);
    }
    e.or = T;
    function M(N) {
      return (_, q) => _ === t.nil ? q : q === t.nil ? _ : (0, t._)`${U(_)} ${N} ${U(q)}`;
    }
    function U(N) {
      return N instanceof t.Name ? N : (0, t._)`(${N})`;
    }
  })(Cr)), Cr;
}
var ne = {}, Za;
function ie() {
  if (Za) return ne;
  Za = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.checkStrictMode = ne.getErrorPath = ne.Type = ne.useFunc = ne.setEvaluated = ne.evaluatedPropsToName = ne.mergeEvaluated = ne.eachItem = ne.unescapeJsonPointer = ne.escapeJsonPointer = ne.escapeFragment = ne.unescapeFragment = ne.schemaRefOrVal = ne.schemaHasRulesButRef = ne.schemaHasRules = ne.checkUnknownRules = ne.alwaysValidSchema = ne.toHash = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Xi();
  function n(u) {
    const m = {};
    for (const I of u)
      m[I] = !0;
    return m;
  }
  ne.toHash = n;
  function i(u, m) {
    return typeof m == "boolean" ? m : Object.keys(m).length === 0 ? !0 : (o(u, m), !r(m, u.self.RULES.all));
  }
  ne.alwaysValidSchema = i;
  function o(u, m = u.schema) {
    const { opts: I, self: A } = u;
    if (!I.strictSchema || typeof m == "boolean")
      return;
    const $ = A.RULES.keywords;
    for (const R in m)
      $[R] || d(u, `unknown keyword: "${R}"`);
  }
  ne.checkUnknownRules = o;
  function r(u, m) {
    if (typeof u == "boolean")
      return !u;
    for (const I in u)
      if (m[I])
        return !0;
    return !1;
  }
  ne.schemaHasRules = r;
  function s(u, m) {
    if (typeof u == "boolean")
      return !u;
    for (const I in u)
      if (I !== "$ref" && m.all[I])
        return !0;
    return !1;
  }
  ne.schemaHasRulesButRef = s;
  function a({ topSchemaRef: u, schemaPath: m }, I, A, $) {
    if (!$) {
      if (typeof I == "number" || typeof I == "boolean")
        return I;
      if (typeof I == "string")
        return (0, e._)`${I}`;
    }
    return (0, e._)`${u}${m}${(0, e.getProperty)(A)}`;
  }
  ne.schemaRefOrVal = a;
  function c(u) {
    return g(decodeURIComponent(u));
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
  function g(u) {
    return u.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ne.unescapeJsonPointer = g;
  function f(u, m) {
    if (Array.isArray(u))
      for (const I of u)
        m(I);
    else
      m(u);
  }
  ne.eachItem = f;
  function h({ mergeNames: u, mergeToName: m, mergeValues: I, resultToName: A }) {
    return ($, R, E, k) => {
      const L = E === void 0 ? R : E instanceof e.Name ? (R instanceof e.Name ? u($, R, E) : m($, R, E), E) : R instanceof e.Name ? (m($, E, R), R) : I(R, E);
      return k === e.Name && !(L instanceof e.Name) ? A($, L) : L;
    };
  }
  ne.mergeEvaluated = {
    props: h({
      mergeNames: (u, m, I) => u.if((0, e._)`${I} !== true && ${m} !== undefined`, () => {
        u.if((0, e._)`${m} === true`, () => u.assign(I, !0), () => u.assign(I, (0, e._)`${I} || {}`).code((0, e._)`Object.assign(${I}, ${m})`));
      }),
      mergeToName: (u, m, I) => u.if((0, e._)`${I} !== true`, () => {
        m === !0 ? u.assign(I, !0) : (u.assign(I, (0, e._)`${I} || {}`), x(u, I, m));
      }),
      mergeValues: (u, m) => u === !0 ? !0 : { ...u, ...m },
      resultToName: w
    }),
    items: h({
      mergeNames: (u, m, I) => u.if((0, e._)`${I} !== true && ${m} !== undefined`, () => u.assign(I, (0, e._)`${m} === true ? true : ${I} > ${m} ? ${I} : ${m}`)),
      mergeToName: (u, m, I) => u.if((0, e._)`${I} !== true`, () => u.assign(I, m === !0 ? !0 : (0, e._)`${I} > ${m} ? ${I} : ${m}`)),
      mergeValues: (u, m) => u === !0 ? !0 : Math.max(u, m),
      resultToName: (u, m) => u.var("items", m)
    })
  };
  function w(u, m) {
    if (m === !0)
      return u.var("props", !0);
    const I = u.var("props", (0, e._)`{}`);
    return m !== void 0 && x(u, I, m), I;
  }
  ne.evaluatedPropsToName = w;
  function x(u, m, I) {
    Object.keys(I).forEach((A) => u.assign((0, e._)`${m}${(0, e.getProperty)(A)}`, !0));
  }
  ne.setEvaluated = x;
  const b = {};
  function S(u, m) {
    return u.scopeValue("func", {
      ref: m,
      code: b[m.code] || (b[m.code] = new t._Code(m.code))
    });
  }
  ne.useFunc = S;
  var v;
  (function(u) {
    u[u.Num = 0] = "Num", u[u.Str = 1] = "Str";
  })(v || (ne.Type = v = {}));
  function y(u, m, I) {
    if (u instanceof e.Name) {
      const A = m === v.Num;
      return I ? A ? (0, e._)`"[" + ${u} + "]"` : (0, e._)`"['" + ${u} + "']"` : A ? (0, e._)`"/" + ${u}` : (0, e._)`"/" + ${u}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return I ? (0, e.getProperty)(u).toString() : "/" + p(u);
  }
  ne.getErrorPath = y;
  function d(u, m, I = u.opts.strictSchema) {
    if (I) {
      if (m = `strict mode: ${m}`, I === !0)
        throw new Error(m);
      u.self.logger.warn(m);
    }
  }
  return ne.checkStrictMode = d, ne;
}
var Bn = {}, Ha;
function et() {
  if (Ha) return Bn;
  Ha = 1, Object.defineProperty(Bn, "__esModule", { value: !0 });
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
var Ja;
function or() {
  return Ja || (Ja = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ et();
    e.keywordError = {
      message: ({ keyword: b }) => (0, t.str)`must pass "${b}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: b, schemaType: S }) => S ? (0, t.str)`"${b}" keyword must be ${S} ($data)` : (0, t.str)`"${b}" keyword is invalid ($data)`
    };
    function o(b, S = e.keywordError, v, y) {
      const { it: d } = b, { gen: u, compositeRule: m, allErrors: I } = d, A = g(b, S, v);
      y ?? (m || I) ? c(u, A) : l(d, (0, t._)`[${A}]`);
    }
    e.reportError = o;
    function r(b, S = e.keywordError, v) {
      const { it: y } = b, { gen: d, compositeRule: u, allErrors: m } = y, I = g(b, S, v);
      c(d, I), u || m || l(y, i.default.vErrors);
    }
    e.reportExtraError = r;
    function s(b, S) {
      b.assign(i.default.errors, S), b.if((0, t._)`${i.default.vErrors} !== null`, () => b.if(S, () => b.assign((0, t._)`${i.default.vErrors}.length`, S), () => b.assign(i.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: b, keyword: S, schemaValue: v, data: y, errsCount: d, it: u }) {
      if (d === void 0)
        throw new Error("ajv implementation error");
      const m = b.name("err");
      b.forRange("i", d, i.default.errors, (I) => {
        b.const(m, (0, t._)`${i.default.vErrors}[${I}]`), b.if((0, t._)`${m}.instancePath === undefined`, () => b.assign((0, t._)`${m}.instancePath`, (0, t.strConcat)(i.default.instancePath, u.errorPath))), b.assign((0, t._)`${m}.schemaPath`, (0, t.str)`${u.errSchemaPath}/${S}`), u.opts.verbose && (b.assign((0, t._)`${m}.schema`, v), b.assign((0, t._)`${m}.data`, y));
      });
    }
    e.extendErrors = a;
    function c(b, S) {
      const v = b.const("err", S);
      b.if((0, t._)`${i.default.vErrors} === null`, () => b.assign(i.default.vErrors, (0, t._)`[${v}]`), (0, t._)`${i.default.vErrors}.push(${v})`), b.code((0, t._)`${i.default.errors}++`);
    }
    function l(b, S) {
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
      const { gen: y, it: d } = b, u = [
        h(d, v),
        w(b, v)
      ];
      return x(b, S, u), y.object(...u);
    }
    function h({ errorPath: b }, { instancePath: S }) {
      const v = S ? (0, t.str)`${b}${(0, n.getErrorPath)(S, n.Type.Str)}` : b;
      return [i.default.instancePath, (0, t.strConcat)(i.default.instancePath, v)];
    }
    function w({ keyword: b, it: { errSchemaPath: S } }, { schemaPath: v, parentSchema: y }) {
      let d = y ? S : (0, t.str)`${S}/${b}`;
      return v && (d = (0, t.str)`${d}${(0, n.getErrorPath)(v, n.Type.Str)}`), [p.schemaPath, d];
    }
    function x(b, { params: S, message: v }, y) {
      const { keyword: d, data: u, schemaValue: m, it: I } = b, { opts: A, propertyName: $, topSchemaRef: R, schemaPath: E } = I;
      y.push([p.keyword, d], [p.params, typeof S == "function" ? S(b) : S || (0, t._)`{}`]), A.messages && y.push([p.message, typeof v == "function" ? v(b) : v]), A.verbose && y.push([p.schema, m], [p.parentSchema, (0, t._)`${R}${E}`], [i.default.data, u]), $ && y.push([p.propertyName, $]);
    }
  })(Tr)), Tr;
}
var Ka;
function Cu() {
  if (Ka) return Nt;
  Ka = 1, Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.boolOrEmptySchema = Nt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ or(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ et(), i = {
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
    const { gen: l, data: p } = a, g = {
      gen: l,
      keyword: "false schema",
      data: p,
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
var be = {}, Dt = {}, Qa;
function kd() {
  if (Qa) return Dt;
  Qa = 1, Object.defineProperty(Dt, "__esModule", { value: !0 }), Dt.getRules = Dt.isJSONType = void 0;
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
var yt = {}, Wa;
function Md() {
  if (Wa) return yt;
  Wa = 1, Object.defineProperty(yt, "__esModule", { value: !0 }), yt.shouldUseRule = yt.shouldUseGroup = yt.schemaHasRulesForType = void 0;
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
var Xa;
function Yi() {
  if (Xa) return be;
  Xa = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.reportTypeError = be.checkDataTypes = be.checkDataType = be.coerceAndCheckDataType = be.getJSONTypes = be.getSchemaTypes = be.DataType = void 0;
  const e = /* @__PURE__ */ kd(), t = /* @__PURE__ */ Md(), n = /* @__PURE__ */ or(), i = /* @__PURE__ */ te(), o = /* @__PURE__ */ ie();
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
    const { gen: d, data: u, opts: m } = v, I = p(y, m.coerceTypes), A = y.length > 0 && !(I.length === 0 && y.length === 1 && (0, t.schemaHasRulesForType)(v, y[0]));
    if (A) {
      const $ = w(y, u, m.strictNumbers, r.Wrong);
      d.if($, () => {
        I.length ? g(v, y, I) : b(v);
      });
    }
    return A;
  }
  be.coerceAndCheckDataType = c;
  const l = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function p(v, y) {
    return y ? v.filter((d) => l.has(d) || y === "array" && d === "array") : [];
  }
  function g(v, y, d) {
    const { gen: u, data: m, opts: I } = v, A = u.let("dataType", (0, i._)`typeof ${m}`), $ = u.let("coerced", (0, i._)`undefined`);
    I.coerceTypes === "array" && u.if((0, i._)`${A} == 'object' && Array.isArray(${m}) && ${m}.length == 1`, () => u.assign(m, (0, i._)`${m}[0]`).assign(A, (0, i._)`typeof ${m}`).if(w(y, m, I.strictNumbers), () => u.assign($, m))), u.if((0, i._)`${$} !== undefined`);
    for (const E of d)
      (l.has(E) || E === "array" && I.coerceTypes === "array") && R(E);
    u.else(), b(v), u.endIf(), u.if((0, i._)`${$} !== undefined`, () => {
      u.assign(m, $), f(v, $);
    });
    function R(E) {
      switch (E) {
        case "string":
          u.elseIf((0, i._)`${A} == "number" || ${A} == "boolean"`).assign($, (0, i._)`"" + ${m}`).elseIf((0, i._)`${m} === null`).assign($, (0, i._)`""`);
          return;
        case "number":
          u.elseIf((0, i._)`${A} == "boolean" || ${m} === null
              || (${A} == "string" && ${m} && ${m} == +${m})`).assign($, (0, i._)`+${m}`);
          return;
        case "integer":
          u.elseIf((0, i._)`${A} === "boolean" || ${m} === null
              || (${A} === "string" && ${m} && ${m} == +${m} && !(${m} % 1))`).assign($, (0, i._)`+${m}`);
          return;
        case "boolean":
          u.elseIf((0, i._)`${m} === "false" || ${m} === 0 || ${m} === null`).assign($, !1).elseIf((0, i._)`${m} === "true" || ${m} === 1`).assign($, !0);
          return;
        case "null":
          u.elseIf((0, i._)`${m} === "" || ${m} === 0 || ${m} === false`), u.assign($, null);
          return;
        case "array":
          u.elseIf((0, i._)`${A} === "string" || ${A} === "number"
              || ${A} === "boolean" || ${m} === null`).assign($, (0, i._)`[${m}]`);
      }
    }
  }
  function f({ gen: v, parentData: y, parentDataProperty: d }, u) {
    v.if((0, i._)`${y} !== undefined`, () => v.assign((0, i._)`${y}[${d}]`, u));
  }
  function h(v, y, d, u = r.Correct) {
    const m = u === r.Correct ? i.operators.EQ : i.operators.NEQ;
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
    return u === r.Correct ? I : (0, i.not)(I);
    function A($ = i.nil) {
      return (0, i.and)((0, i._)`typeof ${y} == "number"`, $, d ? (0, i._)`isFinite(${y})` : i.nil);
    }
  }
  be.checkDataType = h;
  function w(v, y, d, u) {
    if (v.length === 1)
      return h(v[0], y, d, u);
    let m;
    const I = (0, o.toHash)(v);
    if (I.array && I.object) {
      const A = (0, i._)`typeof ${y} != "object"`;
      m = I.null ? A : (0, i._)`!${y} || ${A}`, delete I.null, delete I.array, delete I.object;
    } else
      m = i.nil;
    I.number && delete I.integer;
    for (const A in I)
      m = (0, i.and)(m, h(A, y, d, u));
    return m;
  }
  be.checkDataTypes = w;
  const x = {
    message: ({ schema: v }) => `must be ${v}`,
    params: ({ schema: v, schemaValue: y }) => typeof v == "string" ? (0, i._)`{type: ${v}}` : (0, i._)`{type: ${y}}`
  };
  function b(v) {
    const y = S(v);
    (0, n.reportError)(y, x);
  }
  be.reportTypeError = b;
  function S(v) {
    const { gen: y, data: d, schema: u } = v, m = (0, o.schemaRefOrVal)(v, u, "type");
    return {
      gen: y,
      keyword: "type",
      data: d,
      schema: u.type,
      schemaCode: m,
      schemaValue: m,
      parentSchema: u,
      params: {},
      it: v
    };
  }
  return be;
}
var hn = {}, Ya;
function Eu() {
  if (Ya) return hn;
  Ya = 1, Object.defineProperty(hn, "__esModule", { value: !0 }), hn.assignDefaults = void 0;
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
    const g = (0, e._)`${l}${(0, e.getProperty)(r)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${g}`);
      return;
    }
    let f = (0, e._)`${g} === undefined`;
    p.useDefaults === "empty" && (f = (0, e._)`${f} || ${g} === null || ${g} === ""`), a.if(f, (0, e._)`${g} = ${(0, e.stringify)(s)}`);
  }
  return hn;
}
var Ke = {}, oe = {}, eo;
function tt() {
  if (eo) return oe;
  eo = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.validateUnion = oe.validateArray = oe.usePattern = oe.callValidateCode = oe.schemaProperties = oe.allSchemaProperties = oe.noPropertyInData = oe.propertyInData = oe.isOwnProperty = oe.hasPropFunc = oe.reportMissingProp = oe.checkMissingProp = oe.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ et(), i = /* @__PURE__ */ ie();
  function o(v, y) {
    const { gen: d, data: u, it: m } = v;
    d.if(p(d, u, y, m.opts.ownProperties), () => {
      v.setParams({ missingProperty: (0, e._)`${y}` }, !0), v.error();
    });
  }
  oe.checkReportMissingProp = o;
  function r({ gen: v, data: y, it: { opts: d } }, u, m) {
    return (0, e.or)(...u.map((I) => (0, e.and)(p(v, y, I, d.ownProperties), (0, e._)`${m} = ${I}`)));
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
  function l(v, y, d, u) {
    const m = (0, e._)`${y}${(0, e.getProperty)(d)} !== undefined`;
    return u ? (0, e._)`${m} && ${c(v, y, d)}` : m;
  }
  oe.propertyInData = l;
  function p(v, y, d, u) {
    const m = (0, e._)`${y}${(0, e.getProperty)(d)} === undefined`;
    return u ? (0, e.or)(m, (0, e.not)(c(v, y, d))) : m;
  }
  oe.noPropertyInData = p;
  function g(v) {
    return v ? Object.keys(v).filter((y) => y !== "__proto__") : [];
  }
  oe.allSchemaProperties = g;
  function f(v, y) {
    return g(y).filter((d) => !(0, t.alwaysValidSchema)(v, y[d]));
  }
  oe.schemaProperties = f;
  function h({ schemaCode: v, data: y, it: { gen: d, topSchemaRef: u, schemaPath: m, errorPath: I }, it: A }, $, R, E) {
    const k = E ? (0, e._)`${v}, ${y}, ${u}${m}` : y, L = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, I)],
      [n.default.parentData, A.parentData],
      [n.default.parentDataProperty, A.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    A.opts.dynamicRef && L.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const j = (0, e._)`${k}, ${d.object(...L)}`;
    return R !== e.nil ? (0, e._)`${$}.call(${R}, ${j})` : (0, e._)`${$}(${j})`;
  }
  oe.callValidateCode = h;
  const w = (0, e._)`new RegExp`;
  function x({ gen: v, it: { opts: y } }, d) {
    const u = y.unicodeRegExp ? "u" : "", { regExp: m } = y.code, I = m(d, u);
    return v.scopeValue("pattern", {
      key: I.toString(),
      ref: I,
      code: (0, e._)`${m.code === "new RegExp" ? w : (0, i.useFunc)(v, m)}(${d}, ${u})`
    });
  }
  oe.usePattern = x;
  function b(v) {
    const { gen: y, data: d, keyword: u, it: m } = v, I = y.name("valid");
    if (m.allErrors) {
      const $ = y.let("valid", !0);
      return A(() => y.assign($, !1)), $;
    }
    return y.var(I, !0), A(() => y.break()), I;
    function A($) {
      const R = y.const("len", (0, e._)`${d}.length`);
      y.forRange("i", 0, R, (E) => {
        v.subschema({
          keyword: u,
          dataProp: E,
          dataPropType: t.Type.Num
        }, I), y.if((0, e.not)(I), $);
      });
    }
  }
  oe.validateArray = b;
  function S(v) {
    const { gen: y, schema: d, keyword: u, it: m } = v;
    if (!Array.isArray(d))
      throw new Error("ajv implementation error");
    if (d.some((R) => (0, t.alwaysValidSchema)(m, R)) && !m.opts.unevaluated)
      return;
    const A = y.let("valid", !1), $ = y.name("_valid");
    y.block(() => d.forEach((R, E) => {
      const k = v.subschema({
        keyword: u,
        schemaProp: E,
        compositeRule: !0
      }, $);
      y.assign(A, (0, e._)`${A} || ${$}`), v.mergeValidEvaluated(k, $) || y.if((0, e.not)(A));
    })), v.result(A, () => v.reset(), () => v.error(!0));
  }
  return oe.validateUnion = S, oe;
}
var to;
function ku() {
  if (to) return Ke;
  to = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.validateKeywordUsage = Ke.validSchemaType = Ke.funcKeywordCode = Ke.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ et(), n = /* @__PURE__ */ tt(), i = /* @__PURE__ */ or();
  function o(f, h) {
    const { gen: w, keyword: x, schema: b, parentSchema: S, it: v } = f, y = h.macro.call(v.self, b, S, v), d = l(w, x, y);
    v.opts.validateSchema !== !1 && v.self.validateSchema(y, !0);
    const u = w.name("valid");
    f.subschema({
      schema: y,
      schemaPath: e.nil,
      errSchemaPath: `${v.errSchemaPath}/${x}`,
      topSchemaRef: d,
      compositeRule: !0
    }, u), f.pass(u, () => f.error(!0));
  }
  Ke.macroKeywordCode = o;
  function r(f, h) {
    var w;
    const { gen: x, keyword: b, schema: S, parentSchema: v, $data: y, it: d } = f;
    c(d, h);
    const u = !y && h.compile ? h.compile.call(d.self, S, v, d) : h.validate, m = l(x, b, u), I = x.let("valid");
    f.block$data(I, A), f.ok((w = h.valid) !== null && w !== void 0 ? w : I);
    function A() {
      if (h.errors === !1)
        E(), h.modifying && s(f), k(() => f.error());
      else {
        const L = h.async ? $() : R();
        h.modifying && s(f), k(() => a(f, L));
      }
    }
    function $() {
      const L = x.let("ruleErrs", null);
      return x.try(() => E((0, e._)`await `), (j) => x.assign(I, !1).if((0, e._)`${j} instanceof ${d.ValidationError}`, () => x.assign(L, (0, e._)`${j}.errors`), () => x.throw(j))), L;
    }
    function R() {
      const L = (0, e._)`${m}.errors`;
      return x.assign(L, null), E(e.nil), L;
    }
    function E(L = h.async ? (0, e._)`await ` : e.nil) {
      const j = d.opts.passContext ? t.default.this : t.default.self, D = !("compile" in h && !y || h.schema === !1);
      x.assign(I, (0, e._)`${L}${(0, n.callValidateCode)(f, m, j, D)}`, h.modifying);
    }
    function k(L) {
      var j;
      x.if((0, e.not)((j = h.valid) !== null && j !== void 0 ? j : I), L);
    }
  }
  Ke.funcKeywordCode = r;
  function s(f) {
    const { gen: h, data: w, it: x } = f;
    h.if(x.parentData, () => h.assign(w, (0, e._)`${x.parentData}[${x.parentDataProperty}]`));
  }
  function a(f, h) {
    const { gen: w } = f;
    w.if((0, e._)`Array.isArray(${h})`, () => {
      w.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${h} : ${t.default.vErrors}.concat(${h})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, i.extendErrors)(f);
    }, () => f.error());
  }
  function c({ schemaEnv: f }, h) {
    if (h.async && !f.$async)
      throw new Error("async keyword in sync schema");
  }
  function l(f, h, w) {
    if (w === void 0)
      throw new Error(`keyword "${h}" failed to compile`);
    return f.scopeValue("keyword", typeof w == "function" ? { ref: w } : { ref: w, code: (0, e.stringify)(w) });
  }
  function p(f, h, w = !1) {
    return !h.length || h.some((x) => x === "array" ? Array.isArray(f) : x === "object" ? f && typeof f == "object" && !Array.isArray(f) : typeof f == x || w && typeof f > "u");
  }
  Ke.validSchemaType = p;
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
  return Ke.validateKeywordUsage = g, Ke;
}
var gt = {}, no;
function Mu() {
  if (no) return gt;
  no = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.extendSubschemaMode = gt.extendSubschemaData = gt.getSubschema = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie();
  function n(r, { keyword: s, schemaProp: a, schema: c, schemaPath: l, errSchemaPath: p, topSchemaRef: g }) {
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
      if (l === void 0 || p === void 0 || g === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: l,
        topSchemaRef: g,
        errSchemaPath: p
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  gt.getSubschema = n;
  function i(r, s, { dataProp: a, dataPropType: c, data: l, dataTypes: p, propertyName: g }) {
    if (l !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: f } = s;
    if (a !== void 0) {
      const { errorPath: w, dataPathArr: x, opts: b } = s, S = f.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      h(S), r.errorPath = (0, e.str)`${w}${(0, t.getErrorPath)(a, c, b.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${a}`, r.dataPathArr = [...x, r.parentDataProperty];
    }
    if (l !== void 0) {
      const w = l instanceof e.Name ? l : f.let("data", l, !0);
      h(w), g !== void 0 && (r.propertyName = g);
    }
    p && (r.dataTypes = p);
    function h(w) {
      r.data = w, r.dataLevel = s.dataLevel + 1, r.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), r.parentData = s.data, r.dataNames = [...s.dataNames, w];
    }
  }
  gt.extendSubschemaData = i;
  function o(r, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: c, createErrors: l, allErrors: p }) {
    c !== void 0 && (r.compositeRule = c), l !== void 0 && (r.createErrors = l), p !== void 0 && (r.allErrors = p), r.jtdDiscriminator = s, r.jtdMetadata = a;
  }
  return gt.extendSubschemaMode = o, gt;
}
var Re = {}, Mr, io;
function Od() {
  return io || (io = 1, Mr = function e(t, n) {
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
  }), Mr;
}
var Or = { exports: {} }, ro;
function Ou() {
  if (ro) return Or.exports;
  ro = 1;
  var e = Or.exports = function(i, o, r) {
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
  function t(i, o, r, s, a, c, l, p, g, f) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      o(s, a, c, l, p, g, f);
      for (var h in s) {
        var w = s[h];
        if (Array.isArray(w)) {
          if (h in e.arrayKeywords)
            for (var x = 0; x < w.length; x++)
              t(i, o, r, w[x], a + "/" + h + "/" + x, c, a, h, s, x);
        } else if (h in e.propsKeywords) {
          if (w && typeof w == "object")
            for (var b in w)
              t(i, o, r, w[b], a + "/" + h + "/" + n(b), c, a, h, s, b);
        } else (h in e.keywords || i.allKeys && !(h in e.skipKeywords)) && t(i, o, r, w, a + "/" + h, c, a, h, s);
      }
      r(s, a, c, l, p, g, f);
    }
  }
  function n(i) {
    return i.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Or.exports;
}
var so;
function cr() {
  if (so) return Re;
  so = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.getSchemaRefs = Re.resolveUrl = Re.normalizeId = Re._getFullPath = Re.getFullPath = Re.inlineRef = void 0;
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
      if (b++, !i.has(S) && (typeof x[S] == "object" && (0, e.eachItem)(x[S], (v) => b += a(v)), b === 1 / 0))
        return 1 / 0;
    }
    return b;
  }
  function c(x, b = "", S) {
    S !== !1 && (b = g(b));
    const v = x.parse(b);
    return l(x, v);
  }
  Re.getFullPath = c;
  function l(x, b) {
    return x.serialize(b).split("#")[0] + "#";
  }
  Re._getFullPath = l;
  const p = /#\/?$/;
  function g(x) {
    return x ? x.replace(p, "") : "";
  }
  Re.normalizeId = g;
  function f(x, b, S) {
    return S = g(S), x.resolve(b, S);
  }
  Re.resolveUrl = f;
  const h = /^[a-z_][-a-z0-9._]*$/i;
  function w(x, b) {
    if (typeof x == "boolean")
      return {};
    const { schemaId: S, uriResolver: v } = this.opts, y = g(x[S] || b), d = { "": y }, u = c(v, y, !1), m = {}, I = /* @__PURE__ */ new Set();
    return n(x, { allKeys: !0 }, (R, E, k, L) => {
      if (L === void 0)
        return;
      const j = u + E;
      let D = d[L];
      typeof R[S] == "string" && (D = P.call(this, R[S])), G.call(this, R.$anchor), G.call(this, R.$dynamicAnchor), d[E] = D;
      function P(O) {
        const B = this.opts.uriResolver.resolve;
        if (O = g(D ? B(D, O) : O), I.has(O))
          throw $(O);
        I.add(O);
        let T = this.refs[O];
        return typeof T == "string" && (T = this.refs[T]), typeof T == "object" ? A(R, T.schema, O) : O !== g(j) && (O[0] === "#" ? (A(R, m[O], O), m[O] = R) : this.refs[O] = j), O;
      }
      function G(O) {
        if (typeof O == "string") {
          if (!h.test(O))
            throw new Error(`invalid anchor "${O}"`);
          P.call(this, `#${O}`);
        }
      }
    }), m;
    function A(R, E, k) {
      if (E !== void 0 && !t(R, E))
        throw $(k);
    }
    function $(R) {
      return new Error(`reference "${R}" resolves to more than one schema`);
    }
  }
  return Re.getSchemaRefs = w, Re;
}
var ao;
function En() {
  if (ao) return mt;
  ao = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.getData = mt.KeywordCxt = mt.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Cu(), t = /* @__PURE__ */ Yi(), n = /* @__PURE__ */ Md(), i = /* @__PURE__ */ Yi(), o = /* @__PURE__ */ Eu(), r = /* @__PURE__ */ ku(), s = /* @__PURE__ */ Mu(), a = /* @__PURE__ */ te(), c = /* @__PURE__ */ et(), l = /* @__PURE__ */ cr(), p = /* @__PURE__ */ ie(), g = /* @__PURE__ */ or();
  function f(V) {
    if (u(V) && (I(V), d(V))) {
      b(V);
      return;
    }
    h(V, () => (0, e.topBoolOrEmptySchema)(V));
  }
  mt.validateFunctionCode = f;
  function h({ gen: V, validateName: F, schema: Z, schemaEnv: K, opts: W }, ee) {
    W.code.es5 ? V.func(F, (0, a._)`${c.default.data}, ${c.default.valCxt}`, K.$async, () => {
      V.code((0, a._)`"use strict"; ${v(Z, W)}`), x(V, W), V.code(ee);
    }) : V.func(F, (0, a._)`${c.default.data}, ${w(W)}`, K.$async, () => V.code(v(Z, W)).code(ee));
  }
  function w(V) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${V.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function x(V, F) {
    V.if(c.default.valCxt, () => {
      V.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), V.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), V.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), V.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), F.dynamicRef && V.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      V.var(c.default.instancePath, (0, a._)`""`), V.var(c.default.parentData, (0, a._)`undefined`), V.var(c.default.parentDataProperty, (0, a._)`undefined`), V.var(c.default.rootData, c.default.data), F.dynamicRef && V.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function b(V) {
    const { schema: F, opts: Z, gen: K } = V;
    h(V, () => {
      Z.$comment && F.$comment && L(V), R(V), K.let(c.default.vErrors, null), K.let(c.default.errors, 0), Z.unevaluated && S(V), A(V), j(V);
    });
  }
  function S(V) {
    const { gen: F, validateName: Z } = V;
    V.evaluated = F.const("evaluated", (0, a._)`${Z}.evaluated`), F.if((0, a._)`${V.evaluated}.dynamicProps`, () => F.assign((0, a._)`${V.evaluated}.props`, (0, a._)`undefined`)), F.if((0, a._)`${V.evaluated}.dynamicItems`, () => F.assign((0, a._)`${V.evaluated}.items`, (0, a._)`undefined`));
  }
  function v(V, F) {
    const Z = typeof V == "object" && V[F.schemaId];
    return Z && (F.code.source || F.code.process) ? (0, a._)`/*# sourceURL=${Z} */` : a.nil;
  }
  function y(V, F) {
    if (u(V) && (I(V), d(V))) {
      m(V, F);
      return;
    }
    (0, e.boolOrEmptySchema)(V, F);
  }
  function d({ schema: V, self: F }) {
    if (typeof V == "boolean")
      return !V;
    for (const Z in V)
      if (F.RULES.all[Z])
        return !0;
    return !1;
  }
  function u(V) {
    return typeof V.schema != "boolean";
  }
  function m(V, F) {
    const { schema: Z, gen: K, opts: W } = V;
    W.$comment && Z.$comment && L(V), E(V), k(V);
    const ee = K.const("_errs", c.default.errors);
    A(V, ee), K.var(F, (0, a._)`${ee} === ${c.default.errors}`);
  }
  function I(V) {
    (0, p.checkUnknownRules)(V), $(V);
  }
  function A(V, F) {
    if (V.opts.jtd)
      return P(V, [], !1, F);
    const Z = (0, t.getSchemaTypes)(V.schema), K = (0, t.coerceAndCheckDataType)(V, Z);
    P(V, Z, !K, F);
  }
  function $(V) {
    const { schema: F, errSchemaPath: Z, opts: K, self: W } = V;
    F.$ref && K.ignoreKeywordsWithRef && (0, p.schemaHasRulesButRef)(F, W.RULES) && W.logger.warn(`$ref: keywords ignored in schema at path "${Z}"`);
  }
  function R(V) {
    const { schema: F, opts: Z } = V;
    F.default !== void 0 && Z.useDefaults && Z.strictSchema && (0, p.checkStrictMode)(V, "default is ignored in the schema root");
  }
  function E(V) {
    const F = V.schema[V.opts.schemaId];
    F && (V.baseId = (0, l.resolveUrl)(V.opts.uriResolver, V.baseId, F));
  }
  function k(V) {
    if (V.schema.$async && !V.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function L({ gen: V, schemaEnv: F, schema: Z, errSchemaPath: K, opts: W }) {
    const ee = Z.$comment;
    if (W.$comment === !0)
      V.code((0, a._)`${c.default.self}.logger.log(${ee})`);
    else if (typeof W.$comment == "function") {
      const re = (0, a.str)`${K}/$comment`, Se = V.scopeValue("root", { ref: F.root });
      V.code((0, a._)`${c.default.self}.opts.$comment(${ee}, ${re}, ${Se}.schema)`);
    }
  }
  function j(V) {
    const { gen: F, schemaEnv: Z, validateName: K, ValidationError: W, opts: ee } = V;
    Z.$async ? F.if((0, a._)`${c.default.errors} === 0`, () => F.return(c.default.data), () => F.throw((0, a._)`new ${W}(${c.default.vErrors})`)) : (F.assign((0, a._)`${K}.errors`, c.default.vErrors), ee.unevaluated && D(V), F.return((0, a._)`${c.default.errors} === 0`));
  }
  function D({ gen: V, evaluated: F, props: Z, items: K }) {
    Z instanceof a.Name && V.assign((0, a._)`${F}.props`, Z), K instanceof a.Name && V.assign((0, a._)`${F}.items`, K);
  }
  function P(V, F, Z, K) {
    const { gen: W, schema: ee, data: re, allErrors: Se, opts: he, self: ye } = V, { RULES: fe } = ye;
    if (ee.$ref && (he.ignoreKeywordsWithRef || !(0, p.schemaHasRulesButRef)(ee, fe))) {
      W.block(() => z(V, "$ref", fe.all.$ref.definition));
      return;
    }
    he.jtd || O(V, F), W.block(() => {
      for (const De of fe.rules)
        nt(De);
      nt(fe.post);
    });
    function nt(De) {
      (0, n.shouldUseGroup)(ee, De) && (De.type ? (W.if((0, i.checkDataType)(De.type, re, he.strictNumbers)), G(V, De), F.length === 1 && F[0] === De.type && Z && (W.else(), (0, i.reportTypeError)(V)), W.endIf()) : G(V, De), Se || W.if((0, a._)`${c.default.errors} === ${K || 0}`));
    }
  }
  function G(V, F) {
    const { gen: Z, schema: K, opts: { useDefaults: W } } = V;
    W && (0, o.assignDefaults)(V, F.type), Z.block(() => {
      for (const ee of F.rules)
        (0, n.shouldUseRule)(K, ee) && z(V, ee.keyword, ee.definition, F.type);
    });
  }
  function O(V, F) {
    V.schemaEnv.meta || !V.opts.strictTypes || (B(V, F), V.opts.allowUnionTypes || T(V, F), M(V, V.dataTypes));
  }
  function B(V, F) {
    if (F.length) {
      if (!V.dataTypes.length) {
        V.dataTypes = F;
        return;
      }
      F.forEach((Z) => {
        N(V.dataTypes, Z) || q(V, `type "${Z}" not allowed by context "${V.dataTypes.join(",")}"`);
      }), _(V, F);
    }
  }
  function T(V, F) {
    F.length > 1 && !(F.length === 2 && F.includes("null")) && q(V, "use allowUnionTypes to allow union type keyword");
  }
  function M(V, F) {
    const Z = V.self.RULES.all;
    for (const K in Z) {
      const W = Z[K];
      if (typeof W == "object" && (0, n.shouldUseRule)(V.schema, W)) {
        const { type: ee } = W.definition;
        ee.length && !ee.some((re) => U(F, re)) && q(V, `missing type "${ee.join(",")}" for keyword "${K}"`);
      }
    }
  }
  function U(V, F) {
    return V.includes(F) || F === "number" && V.includes("integer");
  }
  function N(V, F) {
    return V.includes(F) || F === "integer" && V.includes("number");
  }
  function _(V, F) {
    const Z = [];
    for (const K of V.dataTypes)
      N(F, K) ? Z.push(K) : F.includes("integer") && K === "number" && Z.push("integer");
    V.dataTypes = Z;
  }
  function q(V, F) {
    const Z = V.schemaEnv.baseId + V.errSchemaPath;
    F += ` at "${Z}" (strictTypes)`, (0, p.checkStrictMode)(V, F, V.opts.strictTypes);
  }
  class C {
    constructor(F, Z, K) {
      if ((0, r.validateKeywordUsage)(F, Z, K), this.gen = F.gen, this.allErrors = F.allErrors, this.keyword = K, this.data = F.data, this.schema = F.schema[K], this.$data = Z.$data && F.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, p.schemaRefOrVal)(F, this.schema, K, this.$data), this.schemaType = Z.schemaType, this.parentSchema = F.schema, this.params = {}, this.it = F, this.def = Z, this.$data)
        this.schemaCode = F.gen.const("vSchema", J(this.$data, F));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, Z.schemaType, Z.allowUndefined))
        throw new Error(`${K} value must be ${JSON.stringify(Z.schemaType)}`);
      ("code" in Z ? Z.trackErrors : Z.errors !== !1) && (this.errsCount = F.gen.const("_errs", c.default.errors));
    }
    result(F, Z, K) {
      this.failResult((0, a.not)(F), Z, K);
    }
    failResult(F, Z, K) {
      this.gen.if(F), K ? K() : this.error(), Z ? (this.gen.else(), Z(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(F, Z) {
      this.failResult((0, a.not)(F), void 0, Z);
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
      const { schemaCode: Z } = this;
      this.fail((0, a._)`${Z} !== undefined && (${(0, a.or)(this.invalid$data(), F)})`);
    }
    error(F, Z, K) {
      if (Z) {
        this.setParams(Z), this._error(F, K), this.setParams({});
        return;
      }
      this._error(F, K);
    }
    _error(F, Z) {
      (F ? g.reportExtraError : g.reportError)(this, this.def.error, Z);
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
    setParams(F, Z) {
      Z ? Object.assign(this.params, F) : this.params = F;
    }
    block$data(F, Z, K = a.nil) {
      this.gen.block(() => {
        this.check$data(F, K), Z();
      });
    }
    check$data(F = a.nil, Z = a.nil) {
      if (!this.$data)
        return;
      const { gen: K, schemaCode: W, schemaType: ee, def: re } = this;
      K.if((0, a.or)((0, a._)`${W} === undefined`, Z)), F !== a.nil && K.assign(F, !0), (ee.length || re.validateSchema) && (K.elseIf(this.invalid$data()), this.$dataError(), F !== a.nil && K.assign(F, !1)), K.else();
    }
    invalid$data() {
      const { gen: F, schemaCode: Z, schemaType: K, def: W, it: ee } = this;
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
          const he = F.scopeValue("validate$data", { ref: W.validateSchema });
          return (0, a._)`!${he}(${Z})`;
        }
        return a.nil;
      }
    }
    subschema(F, Z) {
      const K = (0, s.getSubschema)(this.it, F);
      (0, s.extendSubschemaData)(K, this.it, F), (0, s.extendSubschemaMode)(K, F);
      const W = { ...this.it, ...K, items: void 0, props: void 0 };
      return y(W, Z), W;
    }
    mergeEvaluated(F, Z) {
      const { it: K, gen: W } = this;
      K.opts.unevaluated && (K.props !== !0 && F.props !== void 0 && (K.props = p.mergeEvaluated.props(W, F.props, K.props, Z)), K.items !== !0 && F.items !== void 0 && (K.items = p.mergeEvaluated.items(W, F.items, K.items, Z)));
    }
    mergeValidEvaluated(F, Z) {
      const { it: K, gen: W } = this;
      if (K.opts.unevaluated && (K.props !== !0 || K.items !== !0))
        return W.if(Z, () => this.mergeEvaluated(F, a.Name)), !0;
    }
  }
  mt.KeywordCxt = C;
  function z(V, F, Z, K) {
    const W = new C(V, Z, F);
    "code" in Z ? Z.code(W, K) : W.$data && Z.validate ? (0, r.funcKeywordCode)(W, Z) : "macro" in Z ? (0, r.macroKeywordCode)(W, Z) : (Z.compile || Z.validate) && (0, r.funcKeywordCode)(W, Z);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function J(V, { dataLevel: F, dataNames: Z, dataPathArr: K }) {
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
        if (fe >= F)
          throw new Error(he("property/index", fe));
        return K[F - fe];
      }
      if (fe > F)
        throw new Error(he("data", fe));
      if (ee = Z[F - fe], !W)
        return ee;
    }
    let re = ee;
    const Se = W.split("/");
    for (const ye of Se)
      ye && (ee = (0, a._)`${ee}${(0, a.getProperty)((0, p.unescapeJsonPointer)(ye))}`, re = (0, a._)`${re} && ${ee}`);
    return re;
    function he(ye, fe) {
      return `Cannot access ${ye} ${fe} levels up, current level is ${F}`;
    }
  }
  return mt.getData = J, mt;
}
var Zn = {}, oo;
function dr() {
  if (oo) return Zn;
  oo = 1, Object.defineProperty(Zn, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Zn.default = e, Zn;
}
var Hn = {}, co;
function kn() {
  if (co) return Hn;
  co = 1, Object.defineProperty(Hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ cr();
  class t extends Error {
    constructor(i, o, r, s) {
      super(s || `can't resolve reference ${r} from id ${o}`), this.missingRef = (0, e.resolveUrl)(i, o, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(i, this.missingRef));
    }
  }
  return Hn.default = t, Hn;
}
var Ee = {}, lo;
function lr() {
  if (lo) return Ee;
  lo = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.resolveSchema = Ee.getCompilingSchema = Ee.resolveRef = Ee.compileSchema = Ee.SchemaEnv = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ dr(), n = /* @__PURE__ */ et(), i = /* @__PURE__ */ cr(), o = /* @__PURE__ */ ie(), r = /* @__PURE__ */ En();
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
    const S = p.call(this, b);
    if (S)
      return S;
    const v = (0, i.getFullPath)(this.opts.uriResolver, b.root.baseId), { es5: y, lines: d } = this.opts.code, { ownProperties: u } = this.opts, m = new e.CodeGen(this.scope, { es5: y, lines: d, ownProperties: u });
    let I;
    b.$async && (I = m.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const A = m.scopeName("validate");
    b.validateName = A;
    const $ = {
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
    let R;
    try {
      this._compilations.add(b), (0, r.validateFunctionCode)($), m.optimize(this.opts.code.optimize);
      const E = m.toString();
      R = `${m.scopeRefs(n.default.scope)}return ${E}`, this.opts.code.process && (R = this.opts.code.process(R, b));
      const L = new Function(`${n.default.self}`, `${n.default.scope}`, R)(this, this.scope.get());
      if (this.scope.value(A, { ref: L }), L.errors = null, L.schema = b.schema, L.schemaEnv = b, b.$async && (L.$async = !0), this.opts.code.source === !0 && (L.source = { validateName: A, validateCode: E, scopeValues: m._values }), this.opts.unevaluated) {
        const { props: j, items: D } = $;
        L.evaluated = {
          props: j instanceof e.Name ? void 0 : j,
          items: D instanceof e.Name ? void 0 : D,
          dynamicProps: j instanceof e.Name,
          dynamicItems: D instanceof e.Name
        }, L.source && (L.source.evaluated = (0, e.stringify)(L.evaluated));
      }
      return b.validate = L, b;
    } catch (E) {
      throw delete b.validate, delete b.validateName, R && this.logger.error("Error compiling schema, function code:", R), E;
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
    let u = f.call(this, b, v);
    if (u === void 0) {
      const m = (y = b.localRefs) === null || y === void 0 ? void 0 : y[v], { schemaId: I } = this.opts;
      m && (u = new s({ schema: m, schemaId: I, root: b, baseId: S }));
    }
    if (u !== void 0)
      return b.refs[v] = l.call(this, u);
  }
  Ee.resolveRef = c;
  function l(b) {
    return (0, i.inlineRef)(b.schema, this.opts.inlineRefs) ? b.schema : b.validate ? b : a.call(this, b);
  }
  function p(b) {
    for (const S of this._compilations)
      if (g(S, b))
        return S;
  }
  Ee.getCompilingSchema = p;
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
    const v = this.opts.uriResolver.parse(S), y = (0, i._getFullPath)(this.opts.uriResolver, v);
    let d = (0, i.getFullPath)(this.opts.uriResolver, b.baseId, void 0);
    if (Object.keys(b.schema).length > 0 && y === d)
      return x.call(this, v, b);
    const u = (0, i.normalizeId)(y), m = this.refs[u] || this.schemas[u];
    if (typeof m == "string") {
      const I = h.call(this, b, m);
      return typeof I?.schema != "object" ? void 0 : x.call(this, v, I);
    }
    if (typeof m?.schema == "object") {
      if (m.validate || a.call(this, m), u === (0, i.normalizeId)(S)) {
        const { schema: I } = m, { schemaId: A } = this.opts, $ = I[A];
        return $ && (d = (0, i.resolveUrl)(this.opts.uriResolver, d, $)), new s({ schema: I, schemaId: A, root: b, baseId: d });
      }
      return x.call(this, v, m);
    }
  }
  Ee.resolveSchema = h;
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
      const $ = typeof v == "object" && v[this.opts.schemaId];
      !w.has(I) && $ && (S = (0, i.resolveUrl)(this.opts.uriResolver, S, $));
    }
    let u;
    if (typeof v != "boolean" && v.$ref && !(0, o.schemaHasRulesButRef)(v, this.RULES)) {
      const I = (0, i.resolveUrl)(this.opts.uriResolver, S, v.$ref);
      u = h.call(this, y, I);
    }
    const { schemaId: m } = this.opts;
    if (u = u || new s({ schema: v, schemaId: m, root: y, baseId: S }), u.schema !== u.root.schema)
      return u;
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
var Jn = {}, mn = { exports: {} }, Lr, uo;
function Ld() {
  if (uo) return Lr;
  uo = 1;
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
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function o(f) {
    return f.length = 0, !0;
  }
  function r(f, h, w) {
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
    let S = !1, v = !1, y = r;
    for (let d = 0; d < f.length; d++) {
      const u = f[d];
      if (!(u === "[" || u === "]"))
        if (u === ":") {
          if (S === !0 && (v = !0), !y(b, x, w))
            break;
          if (++h > 7) {
            w.error = !0;
            break;
          }
          d > 0 && f[d - 1] === ":" && (S = !0), x.push(":");
          continue;
        } else if (u === "%") {
          if (!y(b, x, w))
            break;
          y = o;
        } else {
          b.push(u);
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
  function l(f) {
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
  return Lr = {
    nonSimpleDomain: i,
    recomposeAuthority: g,
    normalizeComponentEncoding: p,
    removeDotSegments: l,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: a,
    stringArrayToHexStripped: n
  }, Lr;
}
var Nr, po;
function Fu() {
  if (po) return Nr;
  po = 1;
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
    const m = String(u.scheme).toLowerCase() === "https";
    return (u.port === (m ? 443 : 80) || u.port === "") && (u.port = void 0), u.path || (u.path = "/"), u;
  }
  function a(u) {
    return u.secure = o(u), u.resourceName = (u.path || "/") + (u.query ? "?" + u.query : ""), u.path = void 0, u.query = void 0, u;
  }
  function c(u) {
    if ((u.port === (o(u) ? 443 : 80) || u.port === "") && (u.port = void 0), typeof u.secure == "boolean" && (u.scheme = u.secure ? "wss" : "ws", u.secure = void 0), u.resourceName) {
      const [m, I] = u.resourceName.split("?");
      u.path = m && m !== "/" ? m : void 0, u.query = I, u.resourceName = void 0;
    }
    return u.fragment = void 0, u;
  }
  function l(u, m) {
    if (!u.path)
      return u.error = "URN can not be parsed", u;
    const I = u.path.match(t);
    if (I) {
      const A = m.scheme || u.scheme || "urn";
      u.nid = I[1].toLowerCase(), u.nss = I[2];
      const $ = `${A}:${m.nid || u.nid}`, R = d($);
      u.path = void 0, R && (u = R.parse(u, m));
    } else
      u.error = u.error || "URN can not be parsed.";
    return u;
  }
  function p(u, m) {
    if (u.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const I = m.scheme || u.scheme || "urn", A = u.nid.toLowerCase(), $ = `${I}:${m.nid || A}`, R = d($);
    R && (u = R.serialize(u, m));
    const E = u, k = u.nss;
    return E.path = `${A || m.nid}:${k}`, m.skipEscape = !0, E;
  }
  function g(u, m) {
    const I = u;
    return I.uuid = I.nss, I.nss = void 0, !m.tolerant && (!I.uuid || !e(I.uuid)) && (I.error = I.error || "UUID is not valid."), I;
  }
  function f(u) {
    const m = u;
    return m.nss = (u.uuid || "").toLowerCase(), m;
  }
  const h = (
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
          parse: l,
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
  function d(u) {
    return u && (y[
      /** @type {SchemeName} */
      u
    ] || y[
      /** @type {SchemeName} */
      u.toLowerCase()
    ]) || void 0;
  }
  return Nr = {
    wsIsSecure: o,
    SCHEMES: y,
    isValidSchemeName: i,
    getSchemeHandler: d
  }, Nr;
}
var fo;
function Bu() {
  if (fo) return mn.exports;
  fo = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizeComponentEncoding: i, isIPv4: o, nonSimpleDomain: r } = Ld(), { SCHEMES: s, getSchemeHandler: a } = Fu();
  function c(b, S) {
    return typeof b == "string" ? b = /** @type {T} */
    f(w(b, S), S) : typeof b == "object" && (b = /** @type {T} */
    w(f(b, S), S)), b;
  }
  function l(b, S, v) {
    const y = v ? Object.assign({ scheme: "null" }, v) : { scheme: "null" }, d = p(w(b, y), w(S, y), y, !0);
    return y.skipEscape = !0, f(d, y);
  }
  function p(b, S, v, y) {
    const d = {};
    return y || (b = w(f(b, v), v), S = w(f(S, v), v)), v = v || {}, !v.tolerant && S.scheme ? (d.scheme = S.scheme, d.userinfo = S.userinfo, d.host = S.host, d.port = S.port, d.path = t(S.path || ""), d.query = S.query) : (S.userinfo !== void 0 || S.host !== void 0 || S.port !== void 0 ? (d.userinfo = S.userinfo, d.host = S.host, d.port = S.port, d.path = t(S.path || ""), d.query = S.query) : (S.path ? (S.path[0] === "/" ? d.path = t(S.path) : ((b.userinfo !== void 0 || b.host !== void 0 || b.port !== void 0) && !b.path ? d.path = "/" + S.path : b.path ? d.path = b.path.slice(0, b.path.lastIndexOf("/") + 1) + S.path : d.path = S.path, d.path = t(d.path)), d.query = S.query) : (d.path = b.path, S.query !== void 0 ? d.query = S.query : d.query = b.query), d.userinfo = b.userinfo, d.host = b.host, d.port = b.port), d.scheme = b.scheme), d.fragment = S.fragment, d;
  }
  function g(b, S, v) {
    return typeof b == "string" ? (b = unescape(b), b = f(i(w(b, v), !0), { ...v, skipEscape: !0 })) : typeof b == "object" && (b = f(i(b, !0), { ...v, skipEscape: !0 })), typeof S == "string" ? (S = unescape(S), S = f(i(w(S, v), !0), { ...v, skipEscape: !0 })) : typeof S == "object" && (S = f(i(S, !0), { ...v, skipEscape: !0 })), b.toLowerCase() === S.toLowerCase();
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
    }, y = Object.assign({}, S), d = [], u = a(y.scheme || v.scheme);
    u && u.serialize && u.serialize(v, y), v.path !== void 0 && (y.skipEscape ? v.path = unescape(v.path) : (v.path = escape(v.path), v.scheme !== void 0 && (v.path = v.path.split("%3A").join(":")))), y.reference !== "suffix" && v.scheme && d.push(v.scheme, ":");
    const m = n(v);
    if (m !== void 0 && (y.reference !== "suffix" && d.push("//"), d.push(m), v.path && v.path[0] !== "/" && d.push("/")), v.path !== void 0) {
      let I = v.path;
      !y.absolutePath && (!u || !u.absolutePath) && (I = t(I)), m === void 0 && I[0] === "/" && I[1] === "/" && (I = "/%2F" + I.slice(2)), d.push(I);
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
    const u = b.match(h);
    if (u) {
      if (y.scheme = u[1], y.userinfo = u[3], y.host = u[4], y.port = parseInt(u[5], 10), y.path = u[6] || "", y.query = u[7], y.fragment = u[8], isNaN(y.port) && (y.port = u[5]), y.host)
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
  const x = {
    SCHEMES: s,
    normalize: c,
    resolve: l,
    resolveComponent: p,
    equal: g,
    serialize: f,
    parse: w
  };
  return mn.exports = x, mn.exports.default = x, mn.exports.fastUri = x, mn.exports;
}
var ho;
function Zu() {
  if (ho) return Jn;
  ho = 1, Object.defineProperty(Jn, "__esModule", { value: !0 });
  const e = Bu();
  return e.code = 'require("ajv/dist/runtime/uri").default', Jn.default = e, Jn;
}
var mo;
function Nd() {
  return mo || (mo = 1, (function(e) {
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
    const i = /* @__PURE__ */ dr(), o = /* @__PURE__ */ kn(), r = /* @__PURE__ */ kd(), s = /* @__PURE__ */ lr(), a = /* @__PURE__ */ te(), c = /* @__PURE__ */ cr(), l = /* @__PURE__ */ Yi(), p = /* @__PURE__ */ ie(), g = Gu, f = /* @__PURE__ */ Zu(), h = (T, M) => new RegExp(T, M);
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
    function y(T) {
      var M, U, N, _, q, C, z, H, Q, J, V, F, Z, K, W, ee, re, Se, he, ye, fe, nt, De, xr, Sr;
      const fn = T.strict, Ir = (M = T.code) === null || M === void 0 ? void 0 : M.optimize, _a = Ir === !0 || Ir === void 0 ? 1 : Ir || 0, Pa = (N = (U = T.code) === null || U === void 0 ? void 0 : U.regExp) !== null && N !== void 0 ? N : h, Nl = (_ = T.uriResolver) !== null && _ !== void 0 ? _ : f.default;
      return {
        strictSchema: (C = (q = T.strictSchema) !== null && q !== void 0 ? q : fn) !== null && C !== void 0 ? C : !0,
        strictNumbers: (H = (z = T.strictNumbers) !== null && z !== void 0 ? z : fn) !== null && H !== void 0 ? H : !0,
        strictTypes: (J = (Q = T.strictTypes) !== null && Q !== void 0 ? Q : fn) !== null && J !== void 0 ? J : "log",
        strictTuples: (F = (V = T.strictTuples) !== null && V !== void 0 ? V : fn) !== null && F !== void 0 ? F : "log",
        strictRequired: (K = (Z = T.strictRequired) !== null && Z !== void 0 ? Z : fn) !== null && K !== void 0 ? K : !1,
        code: T.code ? { ...T.code, optimize: _a, regExp: Pa } : { optimize: _a, regExp: Pa },
        loopRequired: (W = T.loopRequired) !== null && W !== void 0 ? W : v,
        loopEnum: (ee = T.loopEnum) !== null && ee !== void 0 ? ee : v,
        meta: (re = T.meta) !== null && re !== void 0 ? re : !0,
        messages: (Se = T.messages) !== null && Se !== void 0 ? Se : !0,
        inlineRefs: (he = T.inlineRefs) !== null && he !== void 0 ? he : !0,
        schemaId: (ye = T.schemaId) !== null && ye !== void 0 ? ye : "$id",
        addUsedSchema: (fe = T.addUsedSchema) !== null && fe !== void 0 ? fe : !0,
        validateSchema: (nt = T.validateSchema) !== null && nt !== void 0 ? nt : !0,
        validateFormats: (De = T.validateFormats) !== null && De !== void 0 ? De : !0,
        unicodeRegExp: (xr = T.unicodeRegExp) !== null && xr !== void 0 ? xr : !0,
        int32range: (Sr = T.int32range) !== null && Sr !== void 0 ? Sr : !0,
        uriResolver: Nl
      };
    }
    class d {
      constructor(M = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), M = this.opts = { ...M, ...y(M) };
        const { es5: U, lines: N } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: x, es5: U, lines: N }), this.logger = k(M.logger);
        const _ = M.validateFormats;
        M.validateFormats = !1, this.RULES = (0, r.getRules)(), u.call(this, b, M, "NOT SUPPORTED"), u.call(this, S, M, "DEPRECATED", "warn"), this._metaOpts = R.call(this), M.formats && A.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), M.keywords && $.call(this, M.keywords), typeof M.meta == "object" && this.addMetaSchema(M.meta), I.call(this), M.validateFormats = _;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: M, meta: U, schemaId: N } = this.opts;
        let _ = g;
        N === "id" && (_ = { ...g }, _.id = _.$id, delete _.$id), U && M && this.addMetaSchema(_, _[N], !1);
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
        const _ = N(U);
        return "$async" in N || (this.errors = N.errors), _;
      }
      compile(M, U) {
        const N = this._addSchema(M, U);
        return N.validate || this._compileSchemaEnv(N);
      }
      compileAsync(M, U) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: N } = this.opts;
        return _.call(this, M, U);
        async function _(J, V) {
          await q.call(this, J.$schema);
          const F = this._addSchema(J, V);
          return F.validate || C.call(this, F);
        }
        async function q(J) {
          J && !this.getSchema(J) && await _.call(this, { $ref: J }, !0);
        }
        async function C(J) {
          try {
            return this._compileSchemaEnv(J);
          } catch (V) {
            if (!(V instanceof o.default))
              throw V;
            return z.call(this, V), await H.call(this, V.missingSchema), C.call(this, J);
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
      addSchema(M, U, N, _ = this.opts.validateSchema) {
        if (Array.isArray(M)) {
          for (const C of M)
            this.addSchema(C, void 0, N, _);
          return this;
        }
        let q;
        if (typeof M == "object") {
          const { schemaId: C } = this.opts;
          if (q = M[C], q !== void 0 && typeof q != "string")
            throw new Error(`schema ${C} must be string`);
        }
        return U = (0, c.normalizeId)(U || q), this._checkUnique(U), this.schemas[U] = this._addSchema(M, N, U, _, !0), this;
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
        const _ = this.validate(N, M);
        if (!_ && U) {
          const q = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(q);
          else
            throw new Error(q);
        }
        return _;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(M) {
        let U;
        for (; typeof (U = m.call(this, M)) == "string"; )
          M = U;
        if (U === void 0) {
          const { schemaId: N } = this.opts, _ = new s.SchemaEnv({ schema: {}, schemaId: N });
          if (U = s.resolveSchema.call(this, _, M), !U)
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
        if (j.call(this, N, U), !U)
          return (0, p.eachItem)(N, (q) => D.call(this, q)), this;
        G.call(this, U);
        const _ = {
          ...U,
          type: (0, l.getJSONTypes)(U.type),
          schemaType: (0, l.getJSONTypes)(U.schemaType)
        };
        return (0, p.eachItem)(N, _.type.length === 0 ? (q) => D.call(this, q, _) : (q) => _.type.forEach((C) => D.call(this, q, _, C))), this;
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
          const _ = N.rules.findIndex((q) => q.keyword === M);
          _ >= 0 && N.rules.splice(_, 1);
        }
        return this;
      }
      // Add format
      addFormat(M, U) {
        return typeof U == "string" && (U = new RegExp(U)), this.formats[M] = U, this;
      }
      errorsText(M = this.errors, { separator: U = ", ", dataVar: N = "data" } = {}) {
        return !M || M.length === 0 ? "No errors" : M.map((_) => `${N}${_.instancePath} ${_.message}`).reduce((_, q) => _ + U + q);
      }
      $dataMetaSchema(M, U) {
        const N = this.RULES.all;
        M = JSON.parse(JSON.stringify(M));
        for (const _ of U) {
          const q = _.split("/").slice(1);
          let C = M;
          for (const z of q)
            C = C[z];
          for (const z in N) {
            const H = N[z];
            if (typeof H != "object")
              continue;
            const { $data: Q } = H.definition, J = C[z];
            Q && J && (C[z] = B(J));
          }
        }
        return M;
      }
      _removeAllSchemas(M, U) {
        for (const N in M) {
          const _ = M[N];
          (!U || U.test(N)) && (typeof _ == "string" ? delete M[N] : _ && !_.meta && (this._cache.delete(_.schema), delete M[N]));
        }
      }
      _addSchema(M, U, N, _ = this.opts.validateSchema, q = this.opts.addUsedSchema) {
        let C;
        const { schemaId: z } = this.opts;
        if (typeof M == "object")
          C = M[z];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof M != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let H = this._cache.get(M);
        if (H !== void 0)
          return H;
        N = (0, c.normalizeId)(C || N);
        const Q = c.getSchemaRefs.call(this, M, N);
        return H = new s.SchemaEnv({ schema: M, schemaId: z, meta: U, baseId: N, localRefs: Q }), this._cache.set(H.schema, H), q && !N.startsWith("#") && (N && this._checkUnique(N), this.refs[N] = H), _ && this.validateSchema(M, !0), H;
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
    function u(T, M, U, N = "error") {
      for (const _ in T) {
        const q = _;
        q in M && this.logger[N](`${U}: option ${_}. ${T[q]}`);
      }
    }
    function m(T) {
      return T = (0, c.normalizeId)(T), this.schemas[T] || this.refs[T];
    }
    function I() {
      const T = this.opts.schemas;
      if (T)
        if (Array.isArray(T))
          this.addSchema(T);
        else
          for (const M in T)
            this.addSchema(T[M], M);
    }
    function A() {
      for (const T in this.opts.formats) {
        const M = this.opts.formats[T];
        M && this.addFormat(T, M);
      }
    }
    function $(T) {
      if (Array.isArray(T)) {
        this.addVocabulary(T);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const M in T) {
        const U = T[M];
        U.keyword || (U.keyword = M), this.addKeyword(U);
      }
    }
    function R() {
      const T = { ...this.opts };
      for (const M of w)
        delete T[M];
      return T;
    }
    const E = { log() {
    }, warn() {
    }, error() {
    } };
    function k(T) {
      if (T === !1)
        return E;
      if (T === void 0)
        return console;
      if (T.log && T.warn && T.error)
        return T;
      throw new Error("logger must implement log, warn and error methods");
    }
    const L = /^[a-z_$][a-z0-9_$:-]*$/i;
    function j(T, M) {
      const { RULES: U } = this;
      if ((0, p.eachItem)(T, (N) => {
        if (U.keywords[N])
          throw new Error(`Keyword ${N} is already defined`);
        if (!L.test(N))
          throw new Error(`Keyword ${N} has invalid name`);
      }), !!M && M.$data && !("code" in M || "validate" in M))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function D(T, M, U) {
      var N;
      const _ = M?.post;
      if (U && _)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: q } = this;
      let C = _ ? q.post : q.rules.find(({ type: H }) => H === U);
      if (C || (C = { type: U, rules: [] }, q.rules.push(C)), q.keywords[T] = !0, !M)
        return;
      const z = {
        keyword: T,
        definition: {
          ...M,
          type: (0, l.getJSONTypes)(M.type),
          schemaType: (0, l.getJSONTypes)(M.schemaType)
        }
      };
      M.before ? P.call(this, C, z, M.before) : C.rules.push(z), q.all[T] = z, (N = M.implements) === null || N === void 0 || N.forEach((H) => this.addKeyword(H));
    }
    function P(T, M, U) {
      const N = T.rules.findIndex((_) => _.keyword === U);
      N >= 0 ? T.rules.splice(N, 0, M) : (T.rules.push(M), this.logger.warn(`rule ${U} is not defined`));
    }
    function G(T) {
      let { metaSchema: M } = T;
      M !== void 0 && (T.$data && this.opts.$data && (M = B(M)), T.validateSchema = this.compile(M, !0));
    }
    const O = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function B(T) {
      return { anyOf: [T, O] };
    }
  })(Pr)), Pr;
}
var Kn = {}, Qn = {}, Wn = {}, yo;
function Hu() {
  if (yo) return Wn;
  yo = 1, Object.defineProperty(Wn, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Wn.default = e, Wn;
}
var jt = {}, go;
function oa() {
  if (go) return jt;
  go = 1, Object.defineProperty(jt, "__esModule", { value: !0 }), jt.callRef = jt.getValidate = void 0;
  const e = /* @__PURE__ */ kn(), t = /* @__PURE__ */ tt(), n = /* @__PURE__ */ te(), i = /* @__PURE__ */ et(), o = /* @__PURE__ */ lr(), r = /* @__PURE__ */ ie(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(l) {
      const { gen: p, schema: g, it: f } = l, { baseId: h, schemaEnv: w, validateName: x, opts: b, self: S } = f, { root: v } = w;
      if ((g === "#" || g === "#/") && h === v.baseId)
        return d();
      const y = o.resolveRef.call(S, v, h, g);
      if (y === void 0)
        throw new e.default(f.opts.uriResolver, h, g);
      if (y instanceof o.SchemaEnv)
        return u(y);
      return m(y);
      function d() {
        if (w === v)
          return c(l, x, w, w.$async);
        const I = p.scopeValue("root", { ref: v });
        return c(l, (0, n._)`${I}.validate`, v, v.$async);
      }
      function u(I) {
        const A = a(l, I);
        c(l, A, I, I.$async);
      }
      function m(I) {
        const A = p.scopeValue("schema", b.code.source === !0 ? { ref: I, code: (0, n.stringify)(I) } : { ref: I }), $ = p.name("valid"), R = l.subschema({
          schema: I,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: A,
          errSchemaPath: g
        }, $);
        l.mergeEvaluated(R), l.ok($);
      }
    }
  };
  function a(l, p) {
    const { gen: g } = l;
    return p.validate ? g.scopeValue("validate", { ref: p.validate }) : (0, n._)`${g.scopeValue("wrapper", { ref: p })}.validate`;
  }
  jt.getValidate = a;
  function c(l, p, g, f) {
    const { gen: h, it: w } = l, { allErrors: x, schemaEnv: b, opts: S } = w, v = S.passContext ? i.default.this : n.nil;
    f ? y() : d();
    function y() {
      if (!b.$async)
        throw new Error("async schema referenced by sync schema");
      const I = h.let("valid");
      h.try(() => {
        h.code((0, n._)`await ${(0, t.callValidateCode)(l, p, v)}`), m(p), x || h.assign(I, !0);
      }, (A) => {
        h.if((0, n._)`!(${A} instanceof ${w.ValidationError})`, () => h.throw(A)), u(A), x || h.assign(I, !1);
      }), l.ok(I);
    }
    function d() {
      l.result((0, t.callValidateCode)(l, p, v), () => m(p), () => u(p));
    }
    function u(I) {
      const A = (0, n._)`${I}.errors`;
      h.assign(i.default.vErrors, (0, n._)`${i.default.vErrors} === null ? ${A} : ${i.default.vErrors}.concat(${A})`), h.assign(i.default.errors, (0, n._)`${i.default.vErrors}.length`);
    }
    function m(I) {
      var A;
      if (!w.opts.unevaluated)
        return;
      const $ = (A = g?.validate) === null || A === void 0 ? void 0 : A.evaluated;
      if (w.props !== !0)
        if ($ && !$.dynamicProps)
          $.props !== void 0 && (w.props = r.mergeEvaluated.props(h, $.props, w.props));
        else {
          const R = h.var("props", (0, n._)`${I}.evaluated.props`);
          w.props = r.mergeEvaluated.props(h, R, w.props, n.Name);
        }
      if (w.items !== !0)
        if ($ && !$.dynamicItems)
          $.items !== void 0 && (w.items = r.mergeEvaluated.items(h, $.items, w.items));
        else {
          const R = h.var("items", (0, n._)`${I}.evaluated.items`);
          w.items = r.mergeEvaluated.items(h, R, w.items, n.Name);
        }
    }
  }
  return jt.callRef = c, jt.default = s, jt;
}
var vo;
function Dd() {
  if (vo) return Qn;
  vo = 1, Object.defineProperty(Qn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hu(), t = /* @__PURE__ */ oa(), n = [
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
var Xn = {}, Yn = {}, bo;
function Ju() {
  if (bo) return Yn;
  bo = 1, Object.defineProperty(Yn, "__esModule", { value: !0 });
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
var ei = {}, wo;
function Ku() {
  if (wo) return ei;
  wo = 1, Object.defineProperty(ei, "__esModule", { value: !0 });
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
var ti = {}, ni = {}, xo;
function Qu() {
  if (xo) return ni;
  xo = 1, Object.defineProperty(ni, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let i = 0, o = 0, r;
    for (; o < n; )
      i++, r = t.charCodeAt(o++), r >= 55296 && r <= 56319 && o < n && (r = t.charCodeAt(o), (r & 64512) === 56320 && o++);
    return i;
  }
  return ni.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', ni;
}
var So;
function Wu() {
  if (So) return ti;
  So = 1, Object.defineProperty(ti, "__esModule", { value: !0 });
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
      const { keyword: s, data: a, schemaCode: c, it: l } = r, p = s === "maxLength" ? e.operators.GT : e.operators.LT, g = l.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(r.gen, n.default)}(${a})`;
      r.fail$data((0, e._)`${g} ${p} ${c}`);
    }
  };
  return ti.default = o, ti;
}
var ii = {}, Io;
function Xu() {
  if (Io) return ii;
  Io = 1, Object.defineProperty(ii, "__esModule", { value: !0 });
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
      const { gen: s, data: a, $data: c, schema: l, schemaCode: p, it: g } = r, f = g.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: h } = g.opts.code, w = h.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, h), x = s.let("valid");
        s.try(() => s.assign(x, (0, n._)`${w}(${p}, ${f}).test(${a})`), () => s.assign(x, !1)), r.fail$data((0, n._)`!${x}`);
      } else {
        const h = (0, e.usePattern)(r, l);
        r.fail$data((0, n._)`!${h}.test(${a})`);
      }
    }
  };
  return ii.default = o, ii;
}
var ri = {}, Ao;
function Yu() {
  if (Ao) return ri;
  Ao = 1, Object.defineProperty(ri, "__esModule", { value: !0 });
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
var si = {}, qo;
function ep() {
  if (qo) return si;
  qo = 1, Object.defineProperty(si, "__esModule", { value: !0 });
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
      const { gen: s, schema: a, schemaCode: c, data: l, $data: p, it: g } = r, { opts: f } = g;
      if (!p && a.length === 0)
        return;
      const h = a.length >= f.loopRequired;
      if (g.allErrors ? w() : x(), f.strictRequired) {
        const v = r.parentSchema.properties, { definedProperties: y } = r.it;
        for (const d of a)
          if (v?.[d] === void 0 && !y.has(d)) {
            const u = g.schemaEnv.baseId + g.errSchemaPath, m = `required property "${d}" is not defined at "${u}" (strictRequired)`;
            (0, n.checkStrictMode)(g, m, g.opts.strictRequired);
          }
      }
      function w() {
        if (h || p)
          r.block$data(t.nil, b);
        else
          for (const v of a)
            (0, e.checkReportMissingProp)(r, v);
      }
      function x() {
        const v = s.let("missing");
        if (h || p) {
          const y = s.let("valid", !0);
          r.block$data(y, () => S(v, y)), r.ok(y);
        } else
          s.if((0, e.checkMissingProp)(r, a, v)), (0, e.reportMissingProp)(r, v), s.else();
      }
      function b() {
        s.forOf("prop", c, (v) => {
          r.setParams({ missingProperty: v }), s.if((0, e.noPropertyInData)(s, l, v, f.ownProperties), () => r.error());
        });
      }
      function S(v, y) {
        r.setParams({ missingProperty: v }), s.forOf(v, c, () => {
          s.assign(y, (0, e.propertyInData)(s, l, v, f.ownProperties)), s.if((0, t.not)(y), () => {
            r.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return si.default = o, si;
}
var ai = {}, Ro;
function tp() {
  if (Ro) return ai;
  Ro = 1, Object.defineProperty(ai, "__esModule", { value: !0 });
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
var oi = {}, ci = {}, jo;
function ca() {
  if (jo) return ci;
  jo = 1, Object.defineProperty(ci, "__esModule", { value: !0 });
  const e = Od();
  return e.code = 'require("ajv/dist/runtime/equal").default', ci.default = e, ci;
}
var $o;
function np() {
  if ($o) return oi;
  $o = 1, Object.defineProperty(oi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yi(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ca(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: c, $data: l, schema: p, parentSchema: g, schemaCode: f, it: h } = s;
      if (!l && !p)
        return;
      const w = a.let("valid"), x = g.items ? (0, e.getSchemaTypes)(g.items) : [];
      s.block$data(w, b, (0, t._)`${f} === false`), s.ok(w);
      function b() {
        const d = a.let("i", (0, t._)`${c}.length`), u = a.let("j");
        s.setParams({ i: d, j: u }), a.assign(w, !0), a.if((0, t._)`${d} > 1`, () => (S() ? v : y)(d, u));
      }
      function S() {
        return x.length > 0 && !x.some((d) => d === "object" || d === "array");
      }
      function v(d, u) {
        const m = a.name("item"), I = (0, e.checkDataTypes)(x, m, h.opts.strictNumbers, e.DataType.Wrong), A = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${d}--;`, () => {
          a.let(m, (0, t._)`${c}[${d}]`), a.if(I, (0, t._)`continue`), x.length > 1 && a.if((0, t._)`typeof ${m} == "string"`, (0, t._)`${m} += "_"`), a.if((0, t._)`typeof ${A}[${m}] == "number"`, () => {
            a.assign(u, (0, t._)`${A}[${m}]`), s.error(), a.assign(w, !1).break();
          }).code((0, t._)`${A}[${m}] = ${d}`);
        });
      }
      function y(d, u) {
        const m = (0, n.useFunc)(a, i.default), I = a.name("outer");
        a.label(I).for((0, t._)`;${d}--;`, () => a.for((0, t._)`${u} = ${d}; ${u}--;`, () => a.if((0, t._)`${m}(${c}[${d}], ${c}[${u}])`, () => {
          s.error(), a.assign(w, !1).break(I);
        })));
      }
    }
  };
  return oi.default = r, oi;
}
var di = {}, _o;
function ip() {
  if (_o) return di;
  _o = 1, Object.defineProperty(di, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ca(), o = {
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
var li = {}, Po;
function rp() {
  if (Po) return li;
  Po = 1, Object.defineProperty(li, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ca(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: c, schema: l, schemaCode: p, it: g } = r;
      if (!c && l.length === 0)
        throw new Error("enum must have non-empty array");
      const f = l.length >= g.opts.loopEnum;
      let h;
      const w = () => h ?? (h = (0, t.useFunc)(s, n.default));
      let x;
      if (f || c)
        x = s.let("valid"), r.block$data(x, b);
      else {
        if (!Array.isArray(l))
          throw new Error("ajv implementation error");
        const v = s.const("vSchema", p);
        x = (0, e.or)(...l.map((y, d) => S(v, d)));
      }
      r.pass(x);
      function b() {
        s.assign(x, !1), s.forOf("v", p, (v) => s.if((0, e._)`${w()}(${a}, ${v})`, () => s.assign(x, !0).break()));
      }
      function S(v, y) {
        const d = l[y];
        return typeof d == "object" && d !== null ? (0, e._)`${w()}(${a}, ${v}[${y}])` : (0, e._)`${a} === ${d}`;
      }
    }
  };
  return li.default = o, li;
}
var To;
function zd() {
  if (To) return Xn;
  To = 1, Object.defineProperty(Xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ju(), t = /* @__PURE__ */ Ku(), n = /* @__PURE__ */ Wu(), i = /* @__PURE__ */ Xu(), o = /* @__PURE__ */ Yu(), r = /* @__PURE__ */ ep(), s = /* @__PURE__ */ tp(), a = /* @__PURE__ */ np(), c = /* @__PURE__ */ ip(), l = /* @__PURE__ */ rp(), p = [
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
var ui = {}, Wt = {}, Co;
function Ud() {
  if (Co) return Wt;
  Co = 1, Object.defineProperty(Wt, "__esModule", { value: !0 }), Wt.validateAdditionalItems = void 0;
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
    const { gen: a, schema: c, data: l, keyword: p, it: g } = r;
    g.items = !0;
    const f = a.const("len", (0, e._)`${l}.length`);
    if (c === !1)
      r.setParams({ len: s.length }), r.pass((0, e._)`${f} <= ${s.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(g, c)) {
      const w = a.var("valid", (0, e._)`${f} <= ${s.length}`);
      a.if((0, e.not)(w), () => h(w)), r.ok(w);
    }
    function h(w) {
      a.forRange("i", s.length, f, (x) => {
        r.subschema({ keyword: p, dataProp: x, dataPropType: t.Type.Num }, w), g.allErrors || a.if((0, e.not)(w), () => a.break());
      });
    }
  }
  return Wt.validateAdditionalItems = o, Wt.default = i, Wt;
}
var pi = {}, Xt = {}, Eo;
function Vd() {
  if (Eo) return Xt;
  Eo = 1, Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.validateTuple = void 0;
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
    const { gen: c, parentSchema: l, data: p, keyword: g, it: f } = r;
    x(l), f.opts.unevaluated && a.length && f.items !== !0 && (f.items = t.mergeEvaluated.items(c, a.length, f.items));
    const h = c.name("valid"), w = c.const("len", (0, e._)`${p}.length`);
    a.forEach((b, S) => {
      (0, t.alwaysValidSchema)(f, b) || (c.if((0, e._)`${w} > ${S}`, () => r.subschema({
        keyword: g,
        schemaProp: S,
        dataProp: S
      }, h)), r.ok(h));
    });
    function x(b) {
      const { opts: S, errSchemaPath: v } = f, y = a.length, d = y === b.minItems && (y === b.maxItems || b[s] === !1);
      if (S.strictTuples && !d) {
        const u = `"${g}" is ${y}-tuple, but minItems or maxItems/${s} are not specified or different at path "${v}"`;
        (0, t.checkStrictMode)(f, u, S.strictTuples);
      }
    }
  }
  return Xt.validateTuple = o, Xt.default = i, Xt;
}
var ko;
function sp() {
  if (ko) return pi;
  ko = 1, Object.defineProperty(pi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Vd(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return pi.default = t, pi;
}
var fi = {}, Mo;
function ap() {
  if (Mo) return fi;
  Mo = 1, Object.defineProperty(fi, "__esModule", { value: !0 });
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
      const { schema: a, parentSchema: c, it: l } = s, { prefixItems: p } = c;
      l.items = !0, !(0, t.alwaysValidSchema)(l, a) && (p ? (0, i.validateAdditionalItems)(s, p) : s.ok((0, n.validateArray)(s)));
    }
  };
  return fi.default = r, fi;
}
var hi = {}, Oo;
function op() {
  if (Oo) return hi;
  Oo = 1, Object.defineProperty(hi, "__esModule", { value: !0 });
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
      let p, g;
      const { minContains: f, maxContains: h } = a;
      l.opts.next ? (p = f === void 0 ? 1 : f, g = h) : p = 1;
      const w = r.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: p, max: g }), g === void 0 && p === 0) {
        (0, t.checkStrictMode)(l, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (g !== void 0 && p > g) {
        (0, t.checkStrictMode)(l, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(l, s)) {
        let y = (0, e._)`${w} >= ${p}`;
        g !== void 0 && (y = (0, e._)`${y} && ${w} <= ${g}`), o.pass(y);
        return;
      }
      l.items = !0;
      const x = r.name("valid");
      g === void 0 && p === 1 ? S(x, () => r.if(x, () => r.break())) : p === 0 ? (r.let(x, !0), g !== void 0 && r.if((0, e._)`${c}.length > 0`, b)) : (r.let(x, !1), b()), o.result(x, () => o.reset());
      function b() {
        const y = r.name("_valid"), d = r.let("count", 0);
        S(y, () => r.if(y, () => v(d)));
      }
      function S(y, d) {
        r.forRange("i", 0, w, (u) => {
          o.subschema({
            keyword: "contains",
            dataProp: u,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, y), d();
        });
      }
      function v(y) {
        r.code((0, e._)`${y}++`), g === void 0 ? r.if((0, e._)`${y} >= ${p}`, () => r.assign(x, !0).break()) : (r.if((0, e._)`${y} > ${g}`, () => r.assign(x, !1).break()), p === 1 ? r.assign(x, !0) : r.if((0, e._)`${y} >= ${p}`, () => r.assign(x, !0)));
      }
    }
  };
  return hi.default = i, hi;
}
var Dr = {}, Lo;
function da() {
  return Lo || (Lo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ tt();
    e.error = {
      message: ({ params: { property: c, depsCount: l, deps: p } }) => {
        const g = l === 1 ? "property" : "properties";
        return (0, t.str)`must have ${g} ${p} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: l, deps: p, missingProperty: g } }) => (0, t._)`{property: ${c},
    missingProperty: ${g},
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
      for (const g in c) {
        if (g === "__proto__")
          continue;
        const f = Array.isArray(c[g]) ? l : p;
        f[g] = c[g];
      }
      return [l, p];
    }
    function s(c, l = c.schema) {
      const { gen: p, data: g, it: f } = c;
      if (Object.keys(l).length === 0)
        return;
      const h = p.let("missing");
      for (const w in l) {
        const x = l[w];
        if (x.length === 0)
          continue;
        const b = (0, i.propertyInData)(p, g, w, f.opts.ownProperties);
        c.setParams({
          property: w,
          depsCount: x.length,
          deps: x.join(", ")
        }), f.allErrors ? p.if(b, () => {
          for (const S of x)
            (0, i.checkReportMissingProp)(c, S);
        }) : (p.if((0, t._)`${b} && (${(0, i.checkMissingProp)(c, x, h)})`), (0, i.reportMissingProp)(c, h), p.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(c, l = c.schema) {
      const { gen: p, data: g, keyword: f, it: h } = c, w = p.name("valid");
      for (const x in l)
        (0, n.alwaysValidSchema)(h, l[x]) || (p.if(
          (0, i.propertyInData)(p, g, x, h.opts.ownProperties),
          () => {
            const b = c.subschema({ keyword: f, schemaProp: x }, w);
            c.mergeValidEvaluated(b, w);
          },
          () => p.var(w, !0)
          // TODO var
        ), c.ok(w));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(Dr)), Dr;
}
var mi = {}, No;
function cp() {
  if (No) return mi;
  No = 1, Object.defineProperty(mi, "__esModule", { value: !0 });
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
var yi = {}, Do;
function Gd() {
  if (Do) return yi;
  Do = 1, Object.defineProperty(yi, "__esModule", { value: !0 });
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
      const { gen: a, schema: c, parentSchema: l, data: p, errsCount: g, it: f } = s;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: h, opts: w } = f;
      if (f.props = !0, w.removeAdditional !== "all" && (0, i.alwaysValidSchema)(f, c))
        return;
      const x = (0, e.allSchemaProperties)(l.properties), b = (0, e.allSchemaProperties)(l.patternProperties);
      S(), s.ok((0, t._)`${g} === ${n.default.errors}`);
      function S() {
        a.forIn("key", p, (m) => {
          !x.length && !b.length ? d(m) : a.if(v(m), () => d(m));
        });
      }
      function v(m) {
        let I;
        if (x.length > 8) {
          const A = (0, i.schemaRefOrVal)(f, l.properties, "properties");
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
        if (typeof c == "object" && !(0, i.alwaysValidSchema)(f, c)) {
          const I = a.name("valid");
          w.removeAdditional === "failing" ? (u(m, I, !1), a.if((0, t.not)(I), () => {
            s.reset(), y(m);
          })) : (u(m, I), h || a.if((0, t.not)(I), () => a.break()));
        }
      }
      function u(m, I, A) {
        const $ = {
          keyword: "additionalProperties",
          dataProp: m,
          dataPropType: i.Type.Str
        };
        A === !1 && Object.assign($, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema($, I);
      }
    }
  };
  return yi.default = r, yi;
}
var gi = {}, zo;
function dp() {
  if (zo) return gi;
  zo = 1, Object.defineProperty(gi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ En(), t = /* @__PURE__ */ tt(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ Gd(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: a, parentSchema: c, data: l, it: p } = r;
      p.opts.removeAdditional === "all" && c.additionalProperties === void 0 && i.default.code(new e.KeywordCxt(p, i.default, "additionalProperties"));
      const g = (0, t.allSchemaProperties)(a);
      for (const b of g)
        p.definedProperties.add(b);
      p.opts.unevaluated && g.length && p.props !== !0 && (p.props = n.mergeEvaluated.props(s, (0, n.toHash)(g), p.props));
      const f = g.filter((b) => !(0, n.alwaysValidSchema)(p, a[b]));
      if (f.length === 0)
        return;
      const h = s.name("valid");
      for (const b of f)
        w(b) ? x(b) : (s.if((0, t.propertyInData)(s, l, b, p.opts.ownProperties)), x(b), p.allErrors || s.else().var(h, !0), s.endIf()), r.it.definedProperties.add(b), r.ok(h);
      function w(b) {
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
var vi = {}, Uo;
function lp() {
  if (Uo) return vi;
  Uo = 1, Object.defineProperty(vi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tt(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: a, data: c, parentSchema: l, it: p } = r, { opts: g } = p, f = (0, e.allSchemaProperties)(a), h = f.filter((d) => (0, n.alwaysValidSchema)(p, a[d]));
      if (f.length === 0 || h.length === f.length && (!p.opts.unevaluated || p.props === !0))
        return;
      const w = g.strictSchema && !g.allowMatchingProperties && l.properties, x = s.name("valid");
      p.props !== !0 && !(p.props instanceof t.Name) && (p.props = (0, i.evaluatedPropsToName)(s, p.props));
      const { props: b } = p;
      S();
      function S() {
        for (const d of f)
          w && v(d), p.allErrors ? y(d) : (s.var(x, !0), y(d), s.if(x));
      }
      function v(d) {
        for (const u in w)
          new RegExp(d).test(u) && (0, n.checkStrictMode)(p, `property ${u} matches pattern ${d} (use allowMatchingProperties)`);
      }
      function y(d) {
        s.forIn("key", c, (u) => {
          s.if((0, t._)`${(0, e.usePattern)(r, d)}.test(${u})`, () => {
            const m = h.includes(d);
            m || r.subschema({
              keyword: "patternProperties",
              schemaProp: d,
              dataProp: u,
              dataPropType: i.Type.Str
            }, x), p.opts.unevaluated && b !== !0 ? s.assign((0, t._)`${b}[${u}]`, !0) : !m && !p.allErrors && s.if((0, t.not)(x), () => s.break());
          });
        });
      }
    }
  };
  return vi.default = o, vi;
}
var bi = {}, Vo;
function up() {
  if (Vo) return bi;
  Vo = 1, Object.defineProperty(bi, "__esModule", { value: !0 });
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
var wi = {}, Go;
function pp() {
  if (Go) return wi;
  Go = 1, Object.defineProperty(wi, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ tt()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return wi.default = t, wi;
}
var xi = {}, Fo;
function fp() {
  if (Fo) return xi;
  Fo = 1, Object.defineProperty(xi, "__esModule", { value: !0 });
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
      const l = s, p = r.let("valid", !1), g = r.let("passing", null), f = r.name("_valid");
      o.setParams({ passing: g }), r.block(h), o.result(p, () => o.reset(), () => o.error(!0));
      function h() {
        l.forEach((w, x) => {
          let b;
          (0, t.alwaysValidSchema)(c, w) ? r.var(f, !0) : b = o.subschema({
            keyword: "oneOf",
            schemaProp: x,
            compositeRule: !0
          }, f), x > 0 && r.if((0, e._)`${f} && ${p}`).assign(p, !1).assign(g, (0, e._)`[${g}, ${x}]`).else(), r.if(f, () => {
            r.assign(p, !0), r.assign(g, x), b && o.mergeEvaluated(b, e.Name);
          });
        });
      }
    }
  };
  return xi.default = i, xi;
}
var Si = {}, Bo;
function hp() {
  if (Bo) return Si;
  Bo = 1, Object.defineProperty(Si, "__esModule", { value: !0 });
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
var Ii = {}, Zo;
function mp() {
  if (Zo) return Ii;
  Zo = 1, Object.defineProperty(Ii, "__esModule", { value: !0 });
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
      const g = s.let("valid", !0), f = s.name("_valid");
      if (h(), r.reset(), l && p) {
        const x = s.let("ifClause");
        r.setParams({ ifClause: x }), s.if(f, w("then", x), w("else", x));
      } else l ? s.if(f, w("then")) : s.if((0, e.not)(f), w("else"));
      r.pass(g, () => r.error(!0));
      function h() {
        const x = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, f);
        r.mergeEvaluated(x);
      }
      function w(x, b) {
        return () => {
          const S = r.subschema({ keyword: x }, f);
          s.assign(g, f), r.mergeValidEvaluated(S, g), b ? s.assign(b, (0, e._)`${x}`) : r.setParams({ ifClause: x });
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
var Ai = {}, Ho;
function yp() {
  if (Ho) return Ai;
  Ho = 1, Object.defineProperty(Ai, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: i, it: o }) {
      i.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return Ai.default = t, Ai;
}
var Jo;
function Fd() {
  if (Jo) return ui;
  Jo = 1, Object.defineProperty(ui, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ud(), t = /* @__PURE__ */ sp(), n = /* @__PURE__ */ Vd(), i = /* @__PURE__ */ ap(), o = /* @__PURE__ */ op(), r = /* @__PURE__ */ da(), s = /* @__PURE__ */ cp(), a = /* @__PURE__ */ Gd(), c = /* @__PURE__ */ dp(), l = /* @__PURE__ */ lp(), p = /* @__PURE__ */ up(), g = /* @__PURE__ */ pp(), f = /* @__PURE__ */ fp(), h = /* @__PURE__ */ hp(), w = /* @__PURE__ */ mp(), x = /* @__PURE__ */ yp();
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
      r.default,
      c.default,
      l.default
    ];
    return S ? v.push(t.default, i.default) : v.push(e.default, n.default), v.push(o.default), v;
  }
  return ui.default = b, ui;
}
var qi = {}, Yt = {}, Ko;
function Bd() {
  if (Ko) return Yt;
  Ko = 1, Object.defineProperty(Yt, "__esModule", { value: !0 }), Yt.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ et(), n = /* @__PURE__ */ lr(), i = /* @__PURE__ */ oa(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => r(a, a.schema)
  };
  function r(a, c) {
    const { gen: l, it: p } = a;
    p.schemaEnv.root.dynamicAnchors[c] = !0;
    const g = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, f = p.errSchemaPath === "#" ? p.validateName : s(a);
    l.if((0, e._)`!${g}`, () => l.assign(g, f));
  }
  Yt.dynamicAnchor = r;
  function s(a) {
    const { schemaEnv: c, schema: l, self: p } = a.it, { root: g, baseId: f, localRefs: h, meta: w } = c.root, { schemaId: x } = p.opts, b = new n.SchemaEnv({ schema: l, schemaId: x, root: g, baseId: f, localRefs: h, meta: w });
    return n.compileSchema.call(p, b), (0, i.getValidate)(a, b);
  }
  return Yt.default = o, Yt;
}
var en = {}, Qo;
function Zd() {
  if (Qo) return en;
  Qo = 1, Object.defineProperty(en, "__esModule", { value: !0 }), en.dynamicRef = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ et(), n = /* @__PURE__ */ oa(), i = {
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
      g();
    else {
      const h = a.let("valid", !1);
      g(h), r.ok(h);
    }
    function g(h) {
      if (l.schemaEnv.root.dynamicAnchors[p]) {
        const w = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(p)}`);
        a.if(w, f(w, h), f(l.validateName, h));
      } else
        f(l.validateName, h)();
    }
    function f(h, w) {
      return w ? () => a.block(() => {
        (0, n.callRef)(r, h), a.let(w, !0);
      }) : () => (0, n.callRef)(r, h);
    }
  }
  return en.dynamicRef = o, en.default = i, en;
}
var Ri = {}, Wo;
function gp() {
  if (Wo) return Ri;
  Wo = 1, Object.defineProperty(Ri, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bd(), t = /* @__PURE__ */ ie(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(i) {
      i.schema ? (0, e.dynamicAnchor)(i, "") : (0, t.checkStrictMode)(i.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Ri.default = n, Ri;
}
var ji = {}, Xo;
function vp() {
  if (Xo) return ji;
  Xo = 1, Object.defineProperty(ji, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Zd(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return ji.default = t, ji;
}
var Yo;
function bp() {
  if (Yo) return qi;
  Yo = 1, Object.defineProperty(qi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bd(), t = /* @__PURE__ */ Zd(), n = /* @__PURE__ */ gp(), i = /* @__PURE__ */ vp(), o = [e.default, t.default, n.default, i.default];
  return qi.default = o, qi;
}
var $i = {}, _i = {}, ec;
function wp() {
  if (ec) return _i;
  ec = 1, Object.defineProperty(_i, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ da(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return _i.default = t, _i;
}
var Pi = {}, tc;
function xp() {
  if (tc) return Pi;
  tc = 1, Object.defineProperty(Pi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ da(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return Pi.default = t, Pi;
}
var Ti = {}, nc;
function Sp() {
  if (nc) return Ti;
  nc = 1, Object.defineProperty(Ti, "__esModule", { value: !0 });
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
var ic;
function Ip() {
  if (ic) return $i;
  ic = 1, Object.defineProperty($i, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ wp(), t = /* @__PURE__ */ xp(), n = /* @__PURE__ */ Sp(), i = [e.default, t.default, n.default];
  return $i.default = i, $i;
}
var Ci = {}, Ei = {}, rc;
function Ap() {
  if (rc) return Ei;
  rc = 1, Object.defineProperty(Ei, "__esModule", { value: !0 });
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
      const { allErrors: g, props: f } = p;
      f instanceof e.Name ? s.if((0, e._)`${f} !== true`, () => s.forIn("key", c, (b) => s.if(w(f, b), () => h(b)))) : f !== !0 && s.forIn("key", c, (b) => f === void 0 ? h(b) : s.if(x(f, b), () => h(b))), p.props = !0, r.ok((0, e._)`${l} === ${n.default.errors}`);
      function h(b) {
        if (a === !1) {
          r.setParams({ unevaluatedProperty: b }), r.error(), g || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(p, a)) {
          const S = s.name("valid");
          r.subschema({
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
  return Ei.default = o, Ei;
}
var ki = {}, sc;
function qp() {
  if (sc) return ki;
  sc = 1, Object.defineProperty(ki, "__esModule", { value: !0 });
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
        r.if((0, e.not)(f), () => g(f, l)), o.ok(f);
      }
      c.items = !0;
      function g(f, h) {
        r.forRange("i", h, p, (w) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: w, dataPropType: t.Type.Num }, f), c.allErrors || r.if((0, e.not)(f), () => r.break());
        });
      }
    }
  };
  return ki.default = i, ki;
}
var ac;
function Rp() {
  if (ac) return Ci;
  ac = 1, Object.defineProperty(Ci, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ap(), t = /* @__PURE__ */ qp(), n = [e.default, t.default];
  return Ci.default = n, Ci;
}
var Mi = {}, Oi = {}, oc;
function jp() {
  if (oc) return Oi;
  oc = 1, Object.defineProperty(Oi, "__esModule", { value: !0 });
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
      const { gen: r, data: s, $data: a, schema: c, schemaCode: l, it: p } = i, { opts: g, errSchemaPath: f, schemaEnv: h, self: w } = p;
      if (!g.validateFormats)
        return;
      a ? x() : b();
      function x() {
        const S = r.scopeValue("formats", {
          ref: w.formats,
          code: g.code.formats
        }), v = r.const("fDef", (0, e._)`${S}[${l}]`), y = r.let("fType"), d = r.let("format");
        r.if((0, e._)`typeof ${v} == "object" && !(${v} instanceof RegExp)`, () => r.assign(y, (0, e._)`${v}.type || "string"`).assign(d, (0, e._)`${v}.validate`), () => r.assign(y, (0, e._)`"string"`).assign(d, v)), i.fail$data((0, e.or)(u(), m()));
        function u() {
          return g.strictSchema === !1 ? e.nil : (0, e._)`${l} && !${d}`;
        }
        function m() {
          const I = h.$async ? (0, e._)`(${v}.async ? await ${d}(${s}) : ${d}(${s}))` : (0, e._)`${d}(${s})`, A = (0, e._)`(typeof ${d} == "function" ? ${I} : ${d}.test(${s}))`;
          return (0, e._)`${d} && ${d} !== true && ${y} === ${o} && !${A}`;
        }
      }
      function b() {
        const S = w.formats[c];
        if (!S) {
          u();
          return;
        }
        if (S === !0)
          return;
        const [v, y, d] = m(S);
        v === o && i.pass(I());
        function u() {
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
          const $ = A instanceof RegExp ? (0, e.regexpCode)(A) : g.code.formats ? (0, e._)`${g.code.formats}${(0, e.getProperty)(c)}` : void 0, R = r.scopeValue("formats", { key: c, ref: A, code: $ });
          return typeof A == "object" && !(A instanceof RegExp) ? [A.type || "string", A.validate, (0, e._)`${R}.validate`] : ["string", A, R];
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
  return Oi.default = n, Oi;
}
var cc;
function Hd() {
  if (cc) return Mi;
  cc = 1, Object.defineProperty(Mi, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ jp()).default];
  return Mi.default = t, Mi;
}
var zt = {}, dc;
function Jd() {
  return dc || (dc = 1, Object.defineProperty(zt, "__esModule", { value: !0 }), zt.contentVocabulary = zt.metadataVocabulary = void 0, zt.metadataVocabulary = [
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
var lc;
function $p() {
  if (lc) return Kn;
  lc = 1, Object.defineProperty(Kn, "__esModule", { value: !0 });
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
  return Kn.default = c, Kn;
}
var Li = {}, yn = {}, uc;
function _p() {
  if (uc) return yn;
  uc = 1, Object.defineProperty(yn, "__esModule", { value: !0 }), yn.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (yn.DiscrError = e = {})), yn;
}
var pc;
function Kd() {
  if (pc) return Li;
  pc = 1, Object.defineProperty(Li, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ _p(), n = /* @__PURE__ */ lr(), i = /* @__PURE__ */ kn(), o = /* @__PURE__ */ ie(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: l } }) => (0, e._)`{error: ${a}, tag: ${l}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: l, schema: p, parentSchema: g, it: f } = a, { oneOf: h } = g;
      if (!f.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const w = p.propertyName;
      if (typeof w != "string")
        throw new Error("discriminator: requires propertyName");
      if (p.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!h)
        throw new Error("discriminator: requires oneOf keyword");
      const x = c.let("valid", !1), b = c.const("tag", (0, e._)`${l}${(0, e.getProperty)(w)}`);
      c.if((0, e._)`typeof ${b} == "string"`, () => S(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: b, tagName: w })), a.ok(x);
      function S() {
        const d = y();
        c.if(!1);
        for (const u in d)
          c.elseIf((0, e._)`${b} === ${u}`), c.assign(x, v(d[u]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: b, tagName: w }), c.endIf();
      }
      function v(d) {
        const u = c.name("valid"), m = a.subschema({ keyword: "oneOf", schemaProp: d }, u);
        return a.mergeEvaluated(m, e.Name), u;
      }
      function y() {
        var d;
        const u = {}, m = A(g);
        let I = !0;
        for (let E = 0; E < h.length; E++) {
          let k = h[E];
          if (k?.$ref && !(0, o.schemaHasRulesButRef)(k, f.self.RULES)) {
            const j = k.$ref;
            if (k = n.resolveRef.call(f.self, f.schemaEnv.root, f.baseId, j), k instanceof n.SchemaEnv && (k = k.schema), k === void 0)
              throw new i.default(f.opts.uriResolver, f.baseId, j);
          }
          const L = (d = k?.properties) === null || d === void 0 ? void 0 : d[w];
          if (typeof L != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${w}"`);
          I = I && (m || A(k)), $(L, E);
        }
        if (!I)
          throw new Error(`discriminator: "${w}" must be required`);
        return u;
        function A({ required: E }) {
          return Array.isArray(E) && E.includes(w);
        }
        function $(E, k) {
          if (E.const)
            R(E.const, k);
          else if (E.enum)
            for (const L of E.enum)
              R(L, k);
          else
            throw new Error(`discriminator: "properties/${w}" must have "const" or "enum"`);
        }
        function R(E, k) {
          if (typeof E != "string" || E in u)
            throw new Error(`discriminator: "${w}" values must be unique strings`);
          u[E] = k;
        }
      }
    }
  };
  return Li.default = s, Li;
}
var Ni = {};
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
var fc;
function Zf() {
  if (fc) return Ni;
  fc = 1, Object.defineProperty(Ni, "__esModule", { value: !0 });
  const e = Dp, t = Jp, n = nf, i = uf, o = wf, r = $f, s = Of, a = Bf, c = ["/properties"];
  function l(p) {
    return [
      e,
      t,
      n,
      i,
      o,
      g(this, r),
      s,
      g(this, a)
    ].forEach((f) => this.addMetaSchema(f, void 0, !1)), this;
    function g(f, h) {
      return p ? f.$dataMetaSchema(h, c) : h;
    }
  }
  return Ni.default = l, Ni;
}
var hc;
function Hf() {
  return hc || (hc = 1, (function(e, t) {
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
        const { $data: h, meta: w } = this.opts;
        w && (r.default.call(this, h), this.refs["http://json-schema.org/schema"] = s);
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
    var p = /* @__PURE__ */ dr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return p.default;
    } });
    var g = /* @__PURE__ */ kn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return g.default;
    } });
  })(Fn, Fn.exports)), Fn.exports;
}
var Jf = /* @__PURE__ */ Hf();
const Kf = /* @__PURE__ */ aa(Jf);
var Di = { exports: {} }, zr = {}, mc;
function Qf() {
  return mc || (mc = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(E, k) {
      return { validate: E, compare: k };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(r, s),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: t(c(!0), l),
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
      time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, l),
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
    const i = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, o = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function r(E) {
      const k = i.exec(E);
      if (!k)
        return !1;
      const L = +k[1], j = +k[2], D = +k[3];
      return j >= 1 && j <= 12 && D >= 1 && D <= (j === 2 && n(L) ? 29 : o[j]);
    }
    function s(E, k) {
      if (E && k)
        return E > k ? 1 : E < k ? -1 : 0;
    }
    const a = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function c(E) {
      return function(L) {
        const j = a.exec(L);
        if (!j)
          return !1;
        const D = +j[1], P = +j[2], G = +j[3], O = j[4], B = j[5] === "-" ? -1 : 1, T = +(j[6] || 0), M = +(j[7] || 0);
        if (T > 23 || M > 59 || E && !O)
          return !1;
        if (D <= 23 && P <= 59 && G < 60)
          return !0;
        const U = P - M * B, N = D - T * B - (U < 0 ? 1 : 0);
        return (N === 23 || N === -1) && (U === 59 || U === -1) && G < 61;
      };
    }
    function l(E, k) {
      if (!(E && k))
        return;
      const L = (/* @__PURE__ */ new Date("2020-01-01T" + E)).valueOf(), j = (/* @__PURE__ */ new Date("2020-01-01T" + k)).valueOf();
      if (L && j)
        return L - j;
    }
    function p(E, k) {
      if (!(E && k))
        return;
      const L = a.exec(E), j = a.exec(k);
      if (L && j)
        return E = L[1] + L[2] + L[3], k = j[1] + j[2] + j[3], E > k ? 1 : E < k ? -1 : 0;
    }
    const g = /t|\s/i;
    function f(E) {
      const k = c(E);
      return function(j) {
        const D = j.split(g);
        return D.length === 2 && r(D[0]) && k(D[1]);
      };
    }
    function h(E, k) {
      if (!(E && k))
        return;
      const L = new Date(E).valueOf(), j = new Date(k).valueOf();
      if (L && j)
        return L - j;
    }
    function w(E, k) {
      if (!(E && k))
        return;
      const [L, j] = E.split(g), [D, P] = k.split(g), G = s(L, D);
      if (G !== void 0)
        return G || l(j, P);
    }
    const x = /\/|:/, b = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function S(E) {
      return x.test(E) && b.test(E);
    }
    const v = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function y(E) {
      return v.lastIndex = 0, v.test(E);
    }
    const d = -2147483648, u = 2 ** 31 - 1;
    function m(E) {
      return Number.isInteger(E) && E <= u && E >= d;
    }
    function I(E) {
      return Number.isInteger(E);
    }
    function A() {
      return !0;
    }
    const $ = /[^\\]\\Z/;
    function R(E) {
      if ($.test(E))
        return !1;
      try {
        return new RegExp(E), !0;
      } catch {
        return !1;
      }
    }
  })(zr)), zr;
}
var Ur = {}, zi = { exports: {} }, Ui = {}, yc;
function Wf() {
  if (yc) return Ui;
  yc = 1, Object.defineProperty(Ui, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Dd(), t = /* @__PURE__ */ zd(), n = /* @__PURE__ */ Fd(), i = /* @__PURE__ */ Hd(), o = /* @__PURE__ */ Jd(), r = [
    e.default,
    t.default,
    (0, n.default)(),
    i.default,
    o.metadataVocabulary,
    o.contentVocabulary
  ];
  return Ui.default = r, Ui;
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
var gc;
function sh() {
  return gc || (gc = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const n = /* @__PURE__ */ Nd(), i = /* @__PURE__ */ Wf(), o = /* @__PURE__ */ Kd(), r = rh, s = ["/properties"], a = "http://json-schema.org/draft-07/schema";
    class c extends n.default {
      _addVocabularies() {
        super._addVocabularies(), i.default.forEach((w) => this.addVocabulary(w)), this.opts.discriminator && this.addKeyword(o.default);
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
    t.Ajv = c, e.exports = t = c, e.exports.Ajv = c, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = c;
    var l = /* @__PURE__ */ En();
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
    var g = /* @__PURE__ */ dr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return g.default;
    } });
    var f = /* @__PURE__ */ kn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return f.default;
    } });
  })(zi, zi.exports)), zi.exports;
}
var vc;
function ah() {
  return vc || (vc = 1, (function(e) {
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
        const { gen: c, data: l, schemaCode: p, keyword: g, it: f } = a, { opts: h, self: w } = f;
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
          const u = c.scopeValue("formats", {
            key: y,
            ref: d,
            code: h.code.formats ? (0, n._)`${h.code.formats}${(0, n.getProperty)(y)}` : void 0
          });
          a.fail$data(v(u));
        }
        function v(y) {
          return (0, n._)`${y}.compare(${l}, ${p}) ${o[g].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const s = (a) => (a.addKeyword(e.formatLimitDefinition), a);
    e.default = s;
  })(Ur)), Ur;
}
var bc;
function oh() {
  return bc || (bc = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const n = Qf(), i = ah(), o = /* @__PURE__ */ te(), r = new o.Name("fullFormats"), s = new o.Name("fastFormats"), a = (l, p = { keywords: !0 }) => {
      if (Array.isArray(p))
        return c(l, p, n.fullFormats, r), l;
      const [g, f] = p.mode === "fast" ? [n.fastFormats, s] : [n.fullFormats, r], h = p.formats || n.formatNames;
      return c(l, h, g, f), p.keywords && (0, i.default)(l), l;
    };
    a.get = (l, p = "full") => {
      const f = (p === "fast" ? n.fastFormats : n.fullFormats)[l];
      if (!f)
        throw new Error(`Unknown format "${l}"`);
      return f;
    };
    function c(l, p, g, f) {
      var h, w;
      (h = (w = l.opts.code).formats) !== null && h !== void 0 || (w.formats = (0, o._)`require("ajv-formats/dist/formats").${f}`);
      for (const x of p)
        l.addFormat(x, g[x]);
    }
    e.exports = t = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
  })(Di, Di.exports)), Di.exports;
}
var ch = oh();
const dh = /* @__PURE__ */ aa(ch);
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const lh = {
  p: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,
  n: 0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,
  a: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,
  d: 0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,
  Gx: 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,
  Gy: 0x6666666666666666666666666666666666666666666666666666666666666658n
}, { p: qe, n: Zi, Gx: wc, Gy: xc, a: Vr, d: Gr } = lh, uh = 8n, Tt = 32, $n = 64, Fe = (e = "") => {
  throw new Error(e);
}, ph = (e) => typeof e == "bigint", Qd = (e) => typeof e == "string", fh = (e) => e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array", Zt = (e, t) => !fh(e) || typeof t == "number" && t > 0 && e.length !== t ? Fe("Uint8Array expected") : e, ur = (e) => new Uint8Array(e), la = (e) => Uint8Array.from(e), Wd = (e, t) => e.toString(16).padStart(t, "0"), ua = (e) => Array.from(Zt(e)).map((t) => Wd(t, 2)).join(""), vt = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 }, Sc = (e) => {
  if (e >= vt._0 && e <= vt._9)
    return e - vt._0;
  if (e >= vt.A && e <= vt.F)
    return e - (vt.A - 10);
  if (e >= vt.a && e <= vt.f)
    return e - (vt.a - 10);
}, pa = (e) => {
  const t = "hex invalid";
  if (!Qd(e))
    return Fe(t);
  const n = e.length, i = n / 2;
  if (n % 2)
    return Fe(t);
  const o = ur(i);
  for (let r = 0, s = 0; r < i; r++, s += 2) {
    const a = Sc(e.charCodeAt(s)), c = Sc(e.charCodeAt(s + 1));
    if (a === void 0 || c === void 0)
      return Fe(t);
    o[r] = a * 16 + c;
  }
  return o;
}, rn = (e, t) => Zt(Qd(e) ? pa(e) : la(Zt(e)), t), Xd = () => globalThis?.crypto, hh = () => Xd()?.subtle ?? Fe("crypto.subtle must be defined"), _n = (...e) => {
  const t = ur(e.reduce((i, o) => i + Zt(o).length, 0));
  let n = 0;
  return e.forEach((i) => {
    t.set(i, n), n += i.length;
  }), t;
}, mh = (e = Tt) => Xd().getRandomValues(ur(e)), er = BigInt, Vt = (e, t, n, i = "bad number: out of range") => ph(e) && t <= e && e < n ? e : Fe(i), Y = (e, t = qe) => {
  const n = e % t;
  return n >= 0n ? n : t + n;
}, Yd = (e) => Y(e, Zi), el = (e, t) => {
  (e === 0n || t <= 0n) && Fe("no inverse n=" + e + " mod=" + t);
  let n = Y(e, t), i = t, o = 0n, r = 1n;
  for (; n !== 0n; ) {
    const s = i / n, a = i % n, c = o - r * s;
    i = n, n = a, o = r, r = c;
  }
  return i === 1n ? Y(o, t) : Fe("no inverse");
}, Ic = (e) => e instanceof xt ? e : Fe("Point expected"), Ns = 2n ** 256n, ot = class ot {
  constructor(t, n, i, o) {
    ft(this, "ex");
    ft(this, "ey");
    ft(this, "ez");
    ft(this, "et");
    const r = Ns;
    this.ex = Vt(t, 0n, r), this.ey = Vt(n, 0n, r), this.ez = Vt(i, 1n, r), this.et = Vt(o, 0n, r), Object.freeze(this);
  }
  static fromAffine(t) {
    return new ot(t.x, t.y, 1n, Y(t.x * t.y));
  }
  /** RFC8032 5.1.3: Uint8Array to Point. */
  static fromBytes(t, n = !1) {
    const i = Gr, o = la(Zt(t, Tt)), r = t[31];
    o[31] = r & -129;
    const s = fa(o);
    Vt(s, 0n, n ? Ns : qe);
    const c = Y(s * s), l = Y(c - 1n), p = Y(i * c + 1n);
    let { isValid: g, value: f } = gh(l, p);
    g || Fe("bad point: y not sqrt");
    const h = (f & 1n) === 1n, w = (r & 128) !== 0;
    return !n && f === 0n && w && Fe("bad point: x==0, isLastByteOdd"), w !== h && (f = Y(-f)), new ot(f, s, 1n, Y(f * s));
  }
  /** Checks if the point is valid and on-curve. */
  assertValidity() {
    const t = Vr, n = Gr, i = this;
    if (i.is0())
      throw new Error("bad point: ZERO");
    const { ex: o, ey: r, ez: s, et: a } = i, c = Y(o * o), l = Y(r * r), p = Y(s * s), g = Y(p * p), f = Y(c * t), h = Y(p * Y(f + l)), w = Y(g + Y(n * Y(c * l)));
    if (h !== w)
      throw new Error("bad point: equation left != right (1)");
    const x = Y(o * r), b = Y(s * a);
    if (x !== b)
      throw new Error("bad point: equation left != right (2)");
    return this;
  }
  /** Equality check: compare points P&Q. */
  equals(t) {
    const { ex: n, ey: i, ez: o } = this, { ex: r, ey: s, ez: a } = Ic(t), c = Y(n * a), l = Y(r * o), p = Y(i * a), g = Y(s * o);
    return c === l && p === g;
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
    const { ex: t, ey: n, ez: i } = this, o = Vr, r = Y(t * t), s = Y(n * n), a = Y(2n * Y(i * i)), c = Y(o * r), l = t + n, p = Y(Y(l * l) - r - s), g = c + s, f = g - a, h = c - s, w = Y(p * f), x = Y(g * h), b = Y(p * h), S = Y(f * g);
    return new ot(w, x, S, b);
  }
  /** Point addition. Complete formula. Cost: `8M + 1*k + 8add + 1*2`. */
  add(t) {
    const { ex: n, ey: i, ez: o, et: r } = this, { ex: s, ey: a, ez: c, et: l } = Ic(t), p = Vr, g = Gr, f = Y(n * s), h = Y(i * a), w = Y(r * g * l), x = Y(o * c), b = Y((n + i) * (s + a) - f - h), S = Y(x - w), v = Y(x + w), y = Y(h - p * f), d = Y(b * S), u = Y(v * y), m = Y(b * y), I = Y(S * v);
    return new ot(d, u, I, m);
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
    if (Vt(t, 1n, Zi), t === 1n)
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
    return ua(this.toBytes());
  }
  // encode to hex string
  clearCofactor() {
    return this.multiply(er(uh), !1);
  }
  isSmallOrder() {
    return this.clearCofactor().is0();
  }
  isTorsionFree() {
    let t = this.multiply(Zi / 2n, !1).double();
    return Zi % 2n && (t = t.add(this)), t.is0();
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
const Ct = new xt(wc, xc, 1n, Y(wc * xc)), nn = new xt(0n, 1n, 1n, 0n);
xt.BASE = Ct;
xt.ZERO = nn;
const tl = (e) => pa(Wd(Vt(e, 0n, Ns), $n)).reverse(), fa = (e) => er("0x" + ua(la(Zt(e)).reverse())), st = (e, t) => {
  let n = e;
  for (; t-- > 0n; )
    n *= n, n %= qe;
  return n;
}, yh = (e) => {
  const n = e * e % qe * e % qe, i = st(n, 2n) * n % qe, o = st(i, 1n) * e % qe, r = st(o, 5n) * o % qe, s = st(r, 10n) * r % qe, a = st(s, 20n) * s % qe, c = st(a, 40n) * a % qe, l = st(c, 80n) * c % qe, p = st(l, 80n) * c % qe, g = st(p, 10n) * r % qe;
  return { pow_p_5_8: st(g, 2n) * e % qe, b2: n };
}, Ac = 0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n, gh = (e, t) => {
  const n = Y(t * t * t), i = Y(n * n * t), o = yh(e * i).pow_p_5_8;
  let r = Y(e * n * o);
  const s = Y(t * r * r), a = r, c = Y(r * Ac), l = s === e, p = s === Y(-e), g = s === Y(-e * Ac);
  return l && (r = a), (p || g) && (r = c), (Y(r) & 1n) === 1n && (r = Y(-r)), { isValid: l || p, value: r };
}, tr = (e) => Yd(fa(e)), ha = (...e) => Ah.sha512Async(...e), vh = (e) => {
  const t = e.slice(0, Tt);
  t[0] &= 248, t[31] &= 127, t[31] |= 64;
  const n = e.slice(Tt, $n), i = tr(t), o = Ct.multiply(i), r = o.toBytes();
  return { head: t, prefix: n, scalar: i, point: o, pointBytes: r };
}, bh = (e) => ha(rn(e, Tt)).then(vh), nl = (e) => ha(e.hashable).then(e.finish), wh = (e, t, n) => {
  const { pointBytes: i, scalar: o } = e, r = tr(t), s = Ct.multiply(r).toBytes();
  return { hashable: _n(s, i, n), finish: (l) => {
    const p = Yd(r + tr(l) * o);
    return Zt(_n(s, tl(p)), $n);
  } };
}, xh = async (e, t) => {
  const n = rn(e), i = await bh(t), o = await ha(i.prefix, n);
  return nl(wh(i, o, n));
}, il = { zip215: !0 }, Sh = (e, t, n, i = il) => {
  e = rn(e, $n), t = rn(t), n = rn(n, Tt);
  const { zip215: o } = i;
  let r, s, a, c, l = Uint8Array.of();
  try {
    r = xt.fromHex(n, o), s = xt.fromHex(e.slice(0, Tt), o), a = fa(e.slice(Tt, $n)), c = Ct.multiply(a, !1), l = _n(s.toBytes(), r.toBytes(), t);
  } catch {
  }
  return { hashable: l, finish: (g) => {
    if (c == null || !o && r.isSmallOrder())
      return !1;
    const f = tr(g);
    return s.add(r.multiply(f, !1)).add(c.negate()).clearCofactor().is0();
  } };
}, Ih = async (e, t, n, i = il) => nl(Sh(e, t, n, i)), Ah = {
  sha512Async: async (...e) => {
    const t = hh(), n = _n(...e);
    return ur(await t.digest("SHA-512", n.buffer));
  },
  sha512Sync: void 0,
  bytesToHex: ua,
  hexToBytes: pa,
  concatBytes: _n,
  mod: Y,
  invert: el,
  randomBytes: mh
}, nr = 8, qh = 256, rl = Math.ceil(qh / nr) + 1, Ds = 2 ** (nr - 1), Rh = () => {
  const e = [];
  let t = Ct, n = t;
  for (let i = 0; i < rl; i++) {
    n = t, e.push(n);
    for (let o = 1; o < Ds; o++)
      n = n.add(t), e.push(n);
    t = n.double();
  }
  return e;
};
let qc;
const Rc = (e, t) => {
  const n = t.negate();
  return e ? n : t;
}, jh = (e) => {
  const t = qc || (qc = Rh());
  let n = nn, i = Ct;
  const o = 2 ** nr, r = o, s = er(o - 1), a = er(nr);
  for (let c = 0; c < rl; c++) {
    let l = Number(e & s);
    e >>= a, l > Ds && (l -= r, e += 1n);
    const p = c * Ds, g = p, f = p + Math.abs(l) - 1, h = c % 2 !== 0, w = l < 0;
    l === 0 ? i = i.add(Rc(h, t[g])) : n = n.add(Rc(w, t[f]));
  }
  return { p: n, f: i };
};
var Fr = {}, Br, jc;
function ma() {
  return jc || (jc = 1, Br = class sl {
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
  }), Br;
}
var Zr = {}, $c;
function $h() {
  return $c || ($c = 1, (function(e, t) {
    if (e.setImmediate)
      return;
    var n = 1, i = {}, o = !1, r = e.document, s;
    function a(v) {
      typeof v != "function" && (v = new Function("" + v));
      for (var y = new Array(arguments.length - 1), d = 0; d < y.length; d++)
        y[d] = arguments[d + 1];
      var u = { callback: v, args: y };
      return i[n] = u, s(n), n++;
    }
    function c(v) {
      delete i[v];
    }
    function l(v) {
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
        var y = i[v];
        if (y) {
          o = !0;
          try {
            l(y);
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
      var v = r.documentElement;
      s = function(y) {
        var d = r.createElement("script");
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
    S = S && S.setTimeout ? S : e, {}.toString.call(e.process) === "[object process]" ? g() : f() ? h() : e.MessageChannel ? w() : r && "onreadystatechange" in r.createElement("script") ? x() : b(), S.setImmediate = a, S.clearImmediate = c;
  })(typeof self > "u" ? typeof Ua > "u" ? Zr : Ua : self)), Zr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Hr, _c;
function pr() {
  if (_c) return Hr;
  _c = 1, $h();
  const e = self.crypto || self.msCrypto;
  return Hr = class {
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
  }, Hr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Jr, Pc;
function al() {
  return Pc || (Pc = 1, Jr = class {
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
  }), Jr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Kr, Tc;
function ya() {
  if (Tc) return Kr;
  Tc = 1;
  const t = "http://www.w3.org/1999/02/22-rdf-syntax-ns#" + "langString", n = "http://www.w3.org/2001/XMLSchema#string", i = "NamedNode", o = "BlankNode", r = "Literal", s = "DefaultGraph", a = {};
  (() => {
    const h = "(?:<([^:]+:[^>]*)>)", x = "A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�" + "_", b = x + "0-9-·̀-ͯ‿-⁀", v = "(_:(?:[" + x + "0-9])(?:(?:[" + b + ".])*(?:[" + b + "]))?)", y = '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"', d = "(?:\\^\\^" + h + ")", m = "(?:" + y + "(?:" + d + "|" + "(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*))" + ")?)", I = "[ \\t]+", A = "[ \\t]*", $ = "(?:" + h + "|" + v + ")" + I, R = h + I, E = "(?:" + h + "|" + v + "|" + m + ")" + A, k = "(?:\\.|(?:(?:" + h + "|" + v + ")" + A + "\\.))";
    a.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g, a.empty = new RegExp("^" + A + "$"), a.quad = new RegExp(
      "^" + A + $ + R + E + k + A + "$"
    );
  })(), Kr = class Hi {
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
          let m = !0;
          const I = b[u.graph.value];
          for (const A of I)
            if (c(A, u)) {
              m = !1;
              break;
            }
          m && (I.push(u), x.push(u));
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
      Array.isArray(w) || (w = Hi.legacyDatasetToQuads(w));
      const x = [];
      for (const b of w)
        x.push(Hi.serializeQuad(b));
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
      return w.termType === i ? v += `<${w.value}>` : v += `${w.value}`, v += ` <${x.value}> `, b.termType === i ? v += `<${b.value}>` : b.termType === o ? v += b.value : (v += `"${p(b.value)}"`, b.datatype.value === t ? b.language && (v += `@${b.language}`) : b.datatype.value !== n && (v += `^^<${b.datatype.value}>`)), S.termType === i ? v += ` <${S.value}>` : S.termType === o && (v += ` ${S.value}`), v += ` .
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
      return Hi.serializeQuadComponents(
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
        IRI: i,
        literal: r
      };
      for (const S in w)
        w[S].forEach((y) => {
          const d = {};
          for (const u in y) {
            const m = y[u], I = {
              termType: b[m.type],
              value: m.value
            };
            I.termType === r && (I.datatype = {
              termType: i
            }, "datatype" in m && (I.datatype.value = m.datatype), "language" in m ? ("datatype" in m || (I.datatype.value = t), I.language = m.language) : "datatype" in m || (I.datatype.value = n)), d[u] = I;
          }
          S === "@default" ? d.graph = {
            termType: s,
            value: ""
          } : d.graph = {
            termType: S.startsWith("_:") ? o : i,
            value: S
          }, x.push(d);
        });
      return x;
    }
  };
  function c(h, w) {
    return !(h.subject.termType === w.subject.termType && h.object.termType === w.object.termType) || !(h.subject.value === w.subject.value && h.predicate.value === w.predicate.value && h.object.value === w.object.value) ? !1 : h.object.termType !== r ? !0 : h.object.datatype.termType === w.object.datatype.termType && h.object.language === w.object.language && h.object.datatype.value === w.object.datatype.value;
  }
  const l = /["\\\n\r]/g;
  function p(h) {
    return h.replace(l, function(w) {
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
  return Kr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Qr, Cc;
function ol() {
  if (Cc) return Qr;
  Cc = 1;
  const e = ma(), t = pr(), n = al(), i = ya();
  Qr = class {
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
        const w = i.serializeQuadComponents(
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
      const a = [], c = this.blankNodeInfo.get(s), l = c.quads;
      for (const g of l) {
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
        ), a.push(i.serializeQuad(f));
      }
      a.sort();
      const p = this.createMessageDigest();
      for (const g of a)
        p.update(g);
      return c.hash = await p.digest(), c.hash;
    }
    // 4.7) Hash Related Blank Node
    async hashRelatedBlankNode(s, a, c, l) {
      let p;
      this.canonicalIssuer.hasId(s) ? p = this.canonicalIssuer.getId(s) : c.hasId(s) ? p = c.getId(s) : p = this.blankNodeInfo.get(s).hash;
      const g = this.createMessageDigest();
      return g.update(l), l !== "g" && g.update(this.getRelatedPredicate(a)), g.update(p), g.digest();
    }
    // 4.8) Hash N-Degree Quads
    async hashNDegreeQuads(s, a) {
      const c = this.deepIterations.get(s) || 0;
      if (c > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(s, c + 1);
      const l = this.createMessageDigest(), p = await this.createHashToRelated(s, a), g = [...p.keys()].sort();
      for (const f of g) {
        l.update(f);
        let h = "", w;
        const x = new n(p.get(f));
        let b = 0;
        for (; x.hasNext(); ) {
          const S = x.next();
          ++b % 3 === 0 && await this._yield();
          let v = a.clone(), y = "";
          const d = [];
          let u = !1;
          for (const m of S)
            if (this.canonicalIssuer.hasId(m) ? y += this.canonicalIssuer.getId(m) : (v.hasId(m) || d.push(m), y += v.getId(m)), h.length !== 0 && y > h) {
              u = !0;
              break;
            }
          if (!u) {
            for (const m of d) {
              const I = await this.hashNDegreeQuads(m, v);
              if (y += v.getId(m), y += `<${I.hash}>`, v = I.issuer, h.length !== 0 && y > h) {
                u = !0;
                break;
              }
            }
            u || (h.length === 0 || y < h) && (h = y, w = v);
          }
        }
        l.update(h), a = w;
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
      for (const g of l)
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
      const c = await this.hashFirstDegreeQuads(s), l = a.get(c);
      l ? l.push(s) : a.set(c, [s]);
    }
    _addBlankNodeQuadInfo({ quad: s, component: a }) {
      if (a.termType !== "BlankNode")
        return;
      const c = a.value, l = this.blankNodeInfo.get(c);
      l ? l.quads.add(s) : this.blankNodeInfo.set(c, { quads: /* @__PURE__ */ new Set([s]), hash: null });
    }
    async _addRelatedBlankNodeHash({ quad: s, component: a, position: c, id: l, issuer: p, hashToRelated: g }) {
      if (!(a.termType === "BlankNode" && a.value !== l))
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
  function o(r, s) {
    return r.hash < s.hash ? -1 : r.hash > s.hash ? 1 : 0;
  }
  return Qr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Wr, Ec;
function _h() {
  if (Ec) return Wr;
  Ec = 1;
  const e = pr(), t = ol();
  return Wr = class extends t {
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
        const g = await this.hashRelatedBlankNode(
          p,
          c,
          o,
          l
        ), f = r.get(g);
        f ? f.push(p) : r.set(g, [p]);
      }
      return r;
    }
  }, Wr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Xr, kc;
function cl() {
  if (kc) return Xr;
  kc = 1;
  const e = ma(), t = pr(), n = al(), i = ya();
  Xr = class {
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
        const h = i.serializeQuadComponents(
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
      const a = [], c = this.blankNodeInfo.get(s), l = c.quads;
      for (const g of l) {
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
        ), a.push(i.serializeQuad(f));
      }
      a.sort();
      const p = this.createMessageDigest();
      for (const g of a)
        p.update(g);
      return c.hash = p.digest(), c.hash;
    }
    // 4.7) Hash Related Blank Node
    hashRelatedBlankNode(s, a, c, l) {
      let p;
      this.canonicalIssuer.hasId(s) ? p = this.canonicalIssuer.getId(s) : c.hasId(s) ? p = c.getId(s) : p = this.blankNodeInfo.get(s).hash;
      const g = this.createMessageDigest();
      return g.update(l), l !== "g" && g.update(this.getRelatedPredicate(a)), g.update(p), g.digest();
    }
    // 4.8) Hash N-Degree Quads
    hashNDegreeQuads(s, a) {
      const c = this.deepIterations.get(s) || 0;
      if (c > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(s, c + 1);
      const l = this.createMessageDigest(), p = this.createHashToRelated(s, a), g = [...p.keys()].sort();
      for (const f of g) {
        l.update(f);
        let h = "", w;
        const x = new n(p.get(f));
        for (; x.hasNext(); ) {
          const b = x.next();
          let S = a.clone(), v = "";
          const y = [];
          let d = !1;
          for (const u of b)
            if (this.canonicalIssuer.hasId(u) ? v += this.canonicalIssuer.getId(u) : (S.hasId(u) || y.push(u), v += S.getId(u)), h.length !== 0 && v > h) {
              d = !0;
              break;
            }
          if (!d) {
            for (const u of y) {
              const m = this.hashNDegreeQuads(u, S);
              if (v += S.getId(u), v += `<${m.hash}>`, S = m.issuer, h.length !== 0 && v > h) {
                d = !0;
                break;
              }
            }
            d || (h.length === 0 || v < h) && (h = v, w = S);
          }
        }
        l.update(h), a = w;
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
    _addRelatedBlankNodeHash({ quad: s, component: a, position: c, id: l, issuer: p, hashToRelated: g }) {
      if (!(a.termType === "BlankNode" && a.value !== l))
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
  function o(r, s) {
    return r.hash < s.hash ? -1 : r.hash > s.hash ? 1 : 0;
  }
  return Xr;
}
/*!
 * Copyright (c) 2016-2021 Digital Bazaar, Inc. All rights reserved.
 */
var Yr, Mc;
function Ph() {
  if (Mc) return Yr;
  Mc = 1;
  const e = pr(), t = cl();
  return Yr = class extends t {
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
        const p = this.hashRelatedBlankNode(l, a, o, c), g = r.get(p);
        g ? g.push(l) : r.set(p, [l]);
      }
      return r;
    }
  }, Yr;
}
const Th = {}, Ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Th
}, Symbol.toStringTag, { value: "Module" })), Eh = /* @__PURE__ */ Tu(Ch);
var Oc;
function kh() {
  return Oc || (Oc = 1, (function(e) {
    const t = ol(), n = _h(), i = cl(), o = Ph();
    let r;
    try {
      r = Eh;
    } catch {
    }
    function s(a) {
      return Array.isArray(a) ? a : e.NQuads.legacyDatasetToQuads(a);
    }
    e.NQuads = ya(), e.IdentifierIssuer = ma(), e._rdfCanonizeNative = function(a) {
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
        return new Promise((p, g) => r.canonize(l, c, (f, h) => f ? g(f) : p(h)));
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
  })(Fr)), Fr;
}
var es, Lc;
function ga() {
  return Lc || (Lc = 1, es = kh()), es;
}
var ts, Nc;
function Ne() {
  if (Nc) return ts;
  Nc = 1;
  const e = {};
  return ts = e, e.isArray = Array.isArray, e.isBoolean = (t) => typeof t == "boolean" || Object.prototype.toString.call(t) === "[object Boolean]", e.isDouble = (t) => e.isNumber(t) && (String(t).indexOf(".") !== -1 || Math.abs(t) >= 1e21), e.isEmptyObject = (t) => e.isObject(t) && Object.keys(t).length === 0, e.isNumber = (t) => typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]", e.isNumeric = (t) => !isNaN(parseFloat(t)) && isFinite(t), e.isObject = (t) => Object.prototype.toString.call(t) === "[object Object]", e.isString = (t) => typeof t == "string" || Object.prototype.toString.call(t) === "[object String]", e.isUndefined = (t) => typeof t > "u", ts;
}
var ns, Dc;
function St() {
  if (Dc) return ns;
  Dc = 1;
  const e = Ne(), t = {};
  return ns = t, t.isSubject = (n) => e.isObject(n) && !("@value" in n || "@set" in n || "@list" in n) ? Object.keys(n).length > 1 || !("@id" in n) : !1, t.isSubjectReference = (n) => (
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
  }, ns;
}
var is, zc;
function He() {
  return zc || (zc = 1, is = class extends Error {
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
  }), is;
}
var rs, Uc;
function Ze() {
  if (Uc) return rs;
  Uc = 1;
  const e = St(), t = Ne(), n = ga().IdentifierIssuer, i = He(), o = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/, r = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g, s = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/, a = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g, c = /^@[a-zA-Z]+$/, l = {
    headers: {
      accept: "application/ld+json, application/json"
    }
  }, p = {};
  rs = p, p.IdentifierIssuer = n, p.REGEX_BCP47 = o, p.REGEX_KEYWORD = c, p.clone = function(f) {
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
        'Accept header may not be specified; only "' + l.headers.accept + '" is supported.'
      );
    return Object.assign({ Accept: l.headers.accept }, f);
  }, p.parseLinkHeader = (f) => {
    const h = {}, w = f.match(r);
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
      throw new i(
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
  return rs;
}
var ss, Vc;
function va() {
  if (Vc) return ss;
  Vc = 1;
  const e = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", t = "http://www.w3.org/2001/XMLSchema#";
  return ss = {
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
  }, ss;
}
var as, Gc;
function dl() {
  return Gc || (Gc = 1, as = class {
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
  }), as;
}
var os, Fc;
function Mt() {
  if (Fc) return os;
  Fc = 1;
  const e = Ne(), t = {};
  os = t, t.parsers = {
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
      for (let g = 0; g < a.length; ++g)
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
  return t.isAbsolute = (i) => e.isString(i) && n.test(i), t.isRelative = (i) => e.isString(i), os;
}
var cs, Bc;
function Mh() {
  if (Bc) return cs;
  Bc = 1;
  const { parseLinkHeader: e, buildHeaders: t } = Ze(), { LINK_HEADER_CONTEXT: n } = va(), i = He(), o = dl(), { prependBase: r } = Mt(), s = /(^|(\r\n))link:/i;
  cs = ({
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
      let w;
      try {
        w = await a(p, h, l);
      } catch (y) {
        throw new i(
          "URL could not be dereferenced, an error occurred.",
          "jsonld.LoadDocumentError",
          { code: "loading document failed", url: h, cause: y }
        );
      }
      if (w.status >= 400)
        throw new i(
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
          throw new i(
            "URL could not be dereferenced, it has more than one associated HTTP Link Header.",
            "jsonld.InvalidUrl",
            { code: "multiple context link headers", url: h }
          );
        d && (x.contextUrl = d.target), b = y.alternate, b && b.type == "application/ld+json" && !(S || "").match(/^application\/(\w*\+)?json$/) && (x = await f(r(h, b.target)));
      }
      return x;
    }
  };
  function a(c, l, p) {
    c = c || XMLHttpRequest;
    const g = new c();
    return new Promise((f, h) => {
      g.onload = () => f(g), g.onerror = (w) => h(w), g.open("GET", l, !0);
      for (const w in p)
        g.setRequestHeader(w, p[w]);
      g.send();
    });
  }
  return cs;
}
var ds, Zc;
function Oh() {
  if (Zc) return ds;
  Zc = 1;
  const e = Mh(), t = {};
  return ds = t, t.setupDocumentLoaders = function(n) {
    typeof XMLHttpRequest < "u" && (n.documentLoaders.xhr = e, n.useDocumentLoader("xhr"));
  }, t.setupGlobals = function(n) {
    typeof globalThis.JsonLdProcessor > "u" && Object.defineProperty(globalThis, "JsonLdProcessor", {
      writable: !0,
      enumerable: !1,
      configurable: !0,
      value: n.JsonLdProcessor
    });
  }, ds;
}
var ls, Hc;
function Lh() {
  return Hc || (Hc = 1, ls = function(e) {
    e.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next)
        yield t.value;
    };
  }), ls;
}
var us, Jc;
function Nh() {
  if (Jc) return us;
  Jc = 1, us = e, e.Node = o, e.create = e;
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
  return us;
}
var ps, Kc;
function ll() {
  if (Kc) return ps;
  Kc = 1;
  const e = Nh(), t = Symbol("max"), n = Symbol("length"), i = Symbol("lengthCalculator"), o = Symbol("allowStale"), r = Symbol("maxAge"), s = Symbol("dispose"), a = Symbol("noDisposeOnSet"), c = Symbol("lruList"), l = Symbol("cache"), p = Symbol("updateAgeOnGet"), g = () => 1;
  class f {
    constructor(d) {
      if (typeof d == "number" && (d = { max: d }), d || (d = {}), d.max && (typeof d.max != "number" || d.max < 0))
        throw new TypeError("max must be a non-negative number");
      this[t] = d.max || 1 / 0;
      const u = d.length || g;
      if (this[i] = typeof u != "function" ? g : u, this[o] = d.stale || !1, d.maxAge && typeof d.maxAge != "number")
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
      typeof d != "function" && (d = g), d !== this[i] && (this[i] = d, this[n] = 0, this[c].forEach((u) => {
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
      for (let m = this[c].tail; m !== null; ) {
        const I = m.prev;
        v(this, d, m, u), m = I;
      }
    }
    forEach(d, u) {
      u = u || this;
      for (let m = this[c].head; m !== null; ) {
        const I = m.next;
        v(this, d, m, u), m = I;
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
      return this[c].map((d) => w(this, d) ? !1 : {
        k: d.key,
        v: d.value,
        e: d.now + (d.maxAge || 0)
      }).toArray().filter((d) => d);
    }
    dumpLru() {
      return this[c];
    }
    set(d, u, m) {
      if (m = m || this[r], m && typeof m != "number")
        throw new TypeError("maxAge must be a number");
      const I = m ? Date.now() : 0, A = this[i](u, d);
      if (this[l].has(d)) {
        if (A > this[t])
          return b(this, this[l].get(d)), !1;
        const E = this[l].get(d).value;
        return this[s] && (this[a] || this[s](d, E.value)), E.now = I, E.maxAge = m, E.value = u, this[n] += A - E.length, E.length = A, this.get(d), x(this), !0;
      }
      const $ = new S(d, u, A, I, m);
      return $.length > this[t] ? (this[s] && this[s](d, u), !1) : (this[n] += $.length, this[c].unshift($), this[l].set(d, this[c].head), x(this), !0);
    }
    has(d) {
      if (!this[l].has(d)) return !1;
      const u = this[l].get(d).value;
      return !w(this, u);
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
      for (let m = d.length - 1; m >= 0; m--) {
        const I = d[m], A = I.e || 0;
        if (A === 0)
          this.set(I.k, I.v);
        else {
          const $ = A - u;
          $ > 0 && this.set(I.k, I.v, $);
        }
      }
    }
    prune() {
      this[l].forEach((d, u) => h(this, u, !1));
    }
  }
  const h = (y, d, u) => {
    const m = y[l].get(d);
    if (m) {
      const I = m.value;
      if (w(y, I)) {
        if (b(y, m), !y[o])
          return;
      } else
        u && (y[p] && (m.value.now = Date.now()), y[c].unshiftNode(m));
      return I.value;
    }
  }, w = (y, d) => {
    if (!d || !d.maxAge && !y[r])
      return !1;
    const u = Date.now() - d.now;
    return d.maxAge ? u > d.maxAge : y[r] && u > y[r];
  }, x = (y) => {
    if (y[n] > y[t])
      for (let d = y[c].tail; y[n] > y[t] && d !== null; ) {
        const u = d.prev;
        b(y, d), d = u;
      }
  }, b = (y, d) => {
    if (d) {
      const u = d.value;
      y[s] && y[s](u.key, u.value), y[n] -= u.length, y[l].delete(u.key), y[c].removeNode(d);
    }
  };
  class S {
    constructor(d, u, m, I, A) {
      this.key = d, this.value = u, this.length = m, this.now = I, this.maxAge = A || 0;
    }
  }
  const v = (y, d, u, m) => {
    let I = u.value;
    w(y, I) && (b(y, u), y[o] || (I = void 0)), I && d.call(m, I.value, I.key, y);
  };
  return ps = f, ps;
}
var fs, Qc;
function Dh() {
  if (Qc) return fs;
  Qc = 1;
  const e = ll(), t = 10;
  return fs = class {
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
  }, fs;
}
var hs, Wc;
function zh() {
  if (Wc) return hs;
  Wc = 1;
  const {
    isArray: e,
    isObject: t,
    isString: n
  } = Ne(), {
    asArray: i
  } = Ze(), { prependBase: o } = Mt(), r = He(), s = Dh(), a = 10;
  hs = class {
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
      f && t(f) && f["@context"] && (f = f["@context"]), f = i(f);
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
      w = S.documentUrl || f, l({ context: b, base: w });
      const v = await this.resolve(
        { activeCtx: g, context: b, documentLoader: h, base: w, cycles: x }
      );
      return this._cacheResolvedContext({ key: f, resolved: v, tag: S.tag }), v;
    }
    async _fetchContext({ activeCtx: g, url: f, documentLoader: h, cycles: w }) {
      if (w.size > a)
        throw new r(
          "Maximum number of @context URLs exceeded.",
          "jsonld.ContextUrlError",
          {
            code: g.processingMode === "json-ld-1.0" ? "loading remote context failed" : "context overflow",
            max: a
          }
        );
      if (w.has(f))
        throw new r(
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
        throw new r(
          `Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context. URL: "${f}".`,
          "jsonld.InvalidUrl",
          { code: "loading remote context failed", url: f, cause: S }
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
  function l({ context: p, base: g }) {
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
        t(w) && l({ context: { "@context": w }, base: g });
      }
      return;
    }
    if (t(f))
      for (const h in f)
        l({ context: f[h], base: g });
  }
  return hs;
}
var ms, Xc;
function Uh() {
  return Xc || (Xc = 1, ms = ga().NQuads), ms;
}
var ys, Yc;
function Mn() {
  if (Yc) return ys;
  Yc = 1;
  const e = He(), {
    isArray: t
  } = Ne(), {
    asArray: n
  } = Ze(), i = {};
  ys = i, i.defaultEventHandler = null, i.setupEventHandler = ({ options: s = {} }) => {
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
  }, ys;
}
var gs, ed;
function Ht() {
  if (ed) return gs;
  ed = 1;
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
    handleEvent: l
  } = Mn(), {
    REGEX_BCP47: p,
    REGEX_KEYWORD: g,
    asArray: f,
    compareShortestLeast: h
  } = Ze(), w = /* @__PURE__ */ new Map(), x = 1e4, b = {};
  gs = b, b.process = async ({
    activeCtx: y,
    localCtx: d,
    options: u,
    propagate: m = !0,
    overrideProtected: I = !1,
    cycles: A = /* @__PURE__ */ new Set()
  }) => {
    if (i(d) && "@context" in d && n(d["@context"]) && (d = d["@context"]), f(d).length === 0)
      return y;
    const R = [], E = [
      ({ event: D, next: P }) => {
        R.push(D), P();
      }
    ];
    u.eventHandler && E.push(u.eventHandler);
    const k = u;
    u = { ...u, eventHandler: E };
    const L = await u.contextResolver.resolve({
      activeCtx: y,
      context: d,
      documentLoader: u.documentLoader,
      base: u.base
    });
    i(L[0].document) && typeof L[0].document["@propagate"] == "boolean" && (m = L[0].document["@propagate"]);
    let j = y;
    !m && !j.previousContext && (j = j.clone(), j.previousContext = y);
    for (const D of L) {
      let { document: P } = D;
      if (y = j, P === null) {
        if (!I && Object.keys(y.protected).length !== 0)
          throw new t(
            "Tried to nullify a context with protected terms outside of a term definition.",
            "jsonld.SyntaxError",
            { code: "invalid context nullification" }
          );
        j = y = b.getInitialContext(u).clone();
        continue;
      }
      const G = D.getProcessed(y);
      if (G) {
        if (k.eventHandler)
          for (const B of G.events)
            l({ event: B, options: k });
        j = y = G.context;
        continue;
      }
      if (i(P) && "@context" in P && (P = P["@context"]), !i(P))
        throw new t(
          "Invalid JSON-LD syntax; @context must be an object.",
          "jsonld.SyntaxError",
          { code: "invalid local context", context: P }
        );
      j = j.clone();
      const O = /* @__PURE__ */ new Map();
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
        j.processingMode = "json-ld-1.1", j["@version"] = P["@version"], O.set("@version", !0);
      }
      if (j.processingMode = j.processingMode || y.processingMode, "@base" in P) {
        let B = P["@base"];
        if (!(B === null || s(B))) if (a(B))
          B = c(j["@base"], B);
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.',
            "jsonld.SyntaxError",
            { code: "invalid base IRI", context: P }
          );
        j["@base"] = B, O.set("@base", !0);
      }
      if ("@vocab" in P) {
        const B = P["@vocab"];
        if (B === null)
          delete j["@vocab"];
        else if (o(B)) {
          if (!s(B) && b.processingMode(j, 1))
            throw new t(
              'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.',
              "jsonld.SyntaxError",
              { code: "invalid vocab mapping", context: P }
            );
          {
            const T = S(
              j,
              B,
              { vocab: !0, base: !0 },
              void 0,
              void 0,
              u
            );
            s(T) || u.eventHandler && l({
              event: {
                type: ["JsonLdEvent"],
                code: "relative @vocab reference",
                level: "warning",
                message: "Relative @vocab reference found.",
                details: {
                  vocab: T
                }
              },
              options: u
            }), j["@vocab"] = T;
          }
        } else throw new t(
          'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be a string or null.',
          "jsonld.SyntaxError",
          { code: "invalid vocab mapping", context: P }
        );
        O.set("@vocab", !0);
      }
      if ("@language" in P) {
        const B = P["@language"];
        if (B === null)
          delete j["@language"];
        else if (o(B))
          B.match(p) || u.eventHandler && l({
            event: {
              type: ["JsonLdEvent"],
              code: "invalid @language value",
              level: "warning",
              message: "@language value must be valid BCP47.",
              details: {
                language: B
              }
            },
            options: u
          }), j["@language"] = B.toLowerCase();
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@language" in a @context must be a string or null.',
            "jsonld.SyntaxError",
            { code: "invalid default language", context: P }
          );
        O.set("@language", !0);
      }
      if ("@direction" in P) {
        const B = P["@direction"];
        if (y.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @direction not compatible with " + y.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context member", context: P }
          );
        if (B === null)
          delete j["@direction"];
        else {
          if (B !== "ltr" && B !== "rtl")
            throw new t(
              'Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", context: P }
            );
          j["@direction"] = B;
        }
        O.set("@direction", !0);
      }
      if ("@propagate" in P) {
        const B = P["@propagate"];
        if (y.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @propagate not compatible with " + y.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: P }
          );
        if (typeof B != "boolean")
          throw new t(
            "Invalid JSON-LD syntax; @propagate value must be a boolean.",
            "jsonld.SyntaxError",
            { code: "invalid @propagate value", context: d }
          );
        O.set("@propagate", !0);
      }
      if ("@import" in P) {
        const B = P["@import"];
        if (y.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @import not compatible with " + y.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: P }
          );
        if (!o(B))
          throw new t(
            "Invalid JSON-LD syntax; @import must be a string.",
            "jsonld.SyntaxError",
            { code: "invalid @import value", context: d }
          );
        const T = await u.contextResolver.resolve({
          activeCtx: y,
          context: B,
          documentLoader: u.documentLoader,
          base: u.base
        });
        if (T.length !== 1)
          throw new t(
            "Invalid JSON-LD syntax; @import must reference a single context.",
            "jsonld.SyntaxError",
            { code: "invalid remote context", context: d }
          );
        const M = T[0].getProcessed(y);
        if (M)
          P = M;
        else {
          const U = T[0].document;
          if ("@import" in U)
            throw new t(
              "Invalid JSON-LD syntax: imported context must not include @import.",
              "jsonld.SyntaxError",
              { code: "invalid context entry", context: d }
            );
          for (const N in U)
            P.hasOwnProperty(N) || (P[N] = U[N]);
          T[0].setProcessed(y, P);
        }
        O.set("@import", !0);
      }
      O.set("@protected", P["@protected"] || !1);
      for (const B in P)
        if (b.createTermDefinition({
          activeCtx: j,
          localCtx: P,
          term: B,
          defined: O,
          options: u,
          overrideProtected: I
        }), i(P[B]) && "@context" in P[B]) {
          const T = P[B]["@context"];
          let M = !0;
          if (o(T)) {
            const U = c(u.base, T);
            A.has(U) ? M = !1 : A.add(U);
          }
          if (M)
            try {
              await b.process({
                activeCtx: j.clone(),
                localCtx: P[B]["@context"],
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
                  context: P[B]["@context"],
                  term: B
                }
              );
            }
        }
      D.setProcessed(y, {
        context: j,
        events: R
      });
    }
    return j;
  }, b.createTermDefinition = ({
    activeCtx: y,
    localCtx: d,
    term: u,
    defined: m,
    options: I,
    overrideProtected: A = !1
  }) => {
    if (m.has(u)) {
      if (m.get(u))
        return;
      throw new t(
        "Cyclical context definition detected.",
        "jsonld.CyclicalContext",
        { code: "cyclic IRI mapping", context: d, term: u }
      );
    }
    m.set(u, !1);
    let $;
    if (d.hasOwnProperty(u) && ($ = d[u]), u === "@type" && i($) && ($["@container"] || "@set") === "@set" && b.processingMode(y, 1.1)) {
      const P = ["@container", "@id", "@protected"], G = Object.keys($);
      if (G.length === 0 || G.some((O) => !P.includes(O)))
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
      if (u.match(g)) {
        I.eventHandler && l({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved term",
            level: "warning",
            message: 'Terms beginning with "@" are reserved for future use and dropped.',
            details: {
              term: u
            }
          },
          options: I
        });
        return;
      } else if (u === "")
        throw new t(
          "Invalid JSON-LD syntax; a term cannot be an empty string.",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
    }
    const R = y.mappings.get(u);
    y.mappings.has(u) && y.mappings.delete(u);
    let E = !1;
    if ((o($) || $ === null) && (E = !0, $ = { "@id": $ }), !i($))
      throw new t(
        "Invalid JSON-LD syntax; @context term values must be strings or objects.",
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: d }
      );
    const k = {};
    y.mappings.set(u, k), k.reverse = !1;
    const L = ["@container", "@id", "@language", "@reverse", "@type"];
    b.processingMode(y, 1.1) && L.push(
      "@context",
      "@direction",
      "@index",
      "@nest",
      "@prefix",
      "@protected"
    );
    for (const P in $)
      if (!L.includes(P))
        throw new t(
          "Invalid JSON-LD syntax; a term definition must not contain " + P,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
    const j = u.indexOf(":");
    if (k._termHasColon = j > 0, "@reverse" in $) {
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
      const P = $["@reverse"];
      if (!o(P))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      if (P.match(g)) {
        I.eventHandler && l({
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
        }), R ? y.mappings.set(u, R) : y.mappings.delete(u);
        return;
      }
      const G = S(
        y,
        P,
        { vocab: !0, base: !1 },
        d,
        m,
        I
      );
      if (!s(G))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      k["@id"] = G, k.reverse = !0;
    } else if ("@id" in $) {
      let P = $["@id"];
      if (P && !o(P))
        throw new t(
          "Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      if (P === null)
        k["@id"] = null;
      else if (!b.isKeyword(P) && P.match(g)) {
        I.eventHandler && l({
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
        }), R ? y.mappings.set(u, R) : y.mappings.delete(u);
        return;
      } else if (P !== u) {
        if (P = S(
          y,
          P,
          { vocab: !0, base: !1 },
          d,
          m,
          I
        ), !s(P) && !b.isKeyword(P))
          throw new t(
            "Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: d }
          );
        if (u.match(/(?::[^:])|\//)) {
          const G = new Map(m).set(u, !0);
          if (S(
            y,
            u,
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
        k["@id"] = P, k._prefix = E && !k._termHasColon && P.match(/[:\/\?#\[\]@]$/) !== null;
      }
    }
    if (!("@id" in k))
      if (k._termHasColon) {
        const P = u.substr(0, j);
        if (d.hasOwnProperty(P) && b.createTermDefinition({
          activeCtx: y,
          localCtx: d,
          term: P,
          defined: m,
          options: I
        }), y.mappings.has(P)) {
          const G = u.substr(j + 1);
          k["@id"] = y.mappings.get(P)["@id"] + G;
        } else
          k["@id"] = u;
      } else if (u === "@type")
        k["@id"] = u;
      else {
        if (!("@vocab" in y))
          throw new t(
            "Invalid JSON-LD syntax; @context terms must define an @id.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: d, term: u }
          );
        k["@id"] = y["@vocab"] + u;
      }
    if (($["@protected"] === !0 || m.get("@protected") === !0 && $["@protected"] !== !1) && (y.protected[u] = !0, k.protected = !0), m.set(u, !0), "@type" in $) {
      let P = $["@type"];
      if (!o(P))
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
      k["@type"] = P;
    }
    if ("@container" in $) {
      const P = o($["@container"]) ? [$["@container"]] : $["@container"] || [], G = ["@list", "@set", "@index", "@language"];
      let O = !0;
      const B = P.includes("@set");
      if (b.processingMode(y, 1.1)) {
        if (G.push("@graph", "@id", "@type"), P.includes("@list")) {
          if (P.length !== 1)
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @list must have no other values",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: d }
            );
        } else if (P.includes("@graph")) {
          if (P.some((T) => T !== "@graph" && T !== "@id" && T !== "@index" && T !== "@set"))
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: d }
            );
        } else
          O &= P.length <= (B ? 2 : 1);
        if (P.includes("@type") && (k["@type"] = k["@type"] || "@id", !["@id", "@vocab"].includes(k["@type"])))
          throw new t(
            "Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
      } else
        O &= !n($["@container"]), O &= P.length <= 1;
      if (O &= P.every((T) => G.includes(T)), O &= !(B && P.includes("@list")), !O)
        throw new t(
          "Invalid JSON-LD syntax; @context @container value must be one of the following: " + G.join(", "),
          "jsonld.SyntaxError",
          { code: "invalid container mapping", context: d }
        );
      if (k.reverse && !P.every((T) => ["@index", "@set"].includes(T)))
        throw new t(
          "Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: d }
        );
      k["@container"] = P;
    }
    if ("@index" in $) {
      if (!("@container" in $) || !k["@container"].includes("@index"))
        throw new t(
          `Invalid JSON-LD syntax; @index without @index in @container: "${$["@index"]}" on term "${u}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (!o($["@index"]) || $["@index"].indexOf("@") === 0)
        throw new t(
          `Invalid JSON-LD syntax; @index must expand to an IRI: "${$["@index"]}" on term "${u}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      k["@index"] = $["@index"];
    }
    if ("@context" in $ && (k["@context"] = $["@context"]), "@language" in $ && !("@type" in $)) {
      let P = $["@language"];
      if (P !== null && !o(P))
        throw new t(
          "Invalid JSON-LD syntax; @context @language value must be a string or null.",
          "jsonld.SyntaxError",
          { code: "invalid language mapping", context: d }
        );
      P !== null && (P = P.toLowerCase()), k["@language"] = P;
    }
    if ("@prefix" in $) {
      if (u.match(/:|\//))
        throw new t(
          "Invalid JSON-LD syntax; @context @prefix used on a compact IRI term",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (b.isKeyword(k["@id"]))
        throw new t(
          "Invalid JSON-LD syntax; keywords may not be used as prefixes",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (typeof $["@prefix"] == "boolean")
        k._prefix = $["@prefix"] === !0;
      else
        throw new t(
          "Invalid JSON-LD syntax; @context value for @prefix must be boolean",
          "jsonld.SyntaxError",
          { code: "invalid @prefix value", context: d }
        );
    }
    if ("@direction" in $) {
      const P = $["@direction"];
      if (P !== null && P !== "ltr" && P !== "rtl")
        throw new t(
          'Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".',
          "jsonld.SyntaxError",
          { code: "invalid base direction", context: d }
        );
      k["@direction"] = P;
    }
    if ("@nest" in $) {
      const P = $["@nest"];
      if (!o(P) || P !== "@nest" && P.indexOf("@") === 0)
        throw new t(
          "Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.",
          "jsonld.SyntaxError",
          { code: "invalid @nest value", context: d }
        );
      k["@nest"] = P;
    }
    // disallow aliasing @context and @preserve
    const D = k["@id"];
    if (D === "@context" || D === "@preserve")
      throw new t(
        "Invalid JSON-LD syntax; @context and @preserve cannot be aliased.",
        "jsonld.SyntaxError",
        { code: "invalid keyword alias", context: d }
      );
    if (R && R.protected && !A && (y.protected[u] = !0, k.protected = !0, !v(R, k)))
      throw new t(
        "Invalid JSON-LD syntax; tried to redefine a protected term.",
        "jsonld.SyntaxError",
        { code: "protected term redefinition", context: d, term: u }
      );
  }, b.expandIri = (y, d, u, m) => S(
    y,
    d,
    u,
    void 0,
    void 0,
    m
  );
  function S(y, d, u, m, I, A) {
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
    }), u = u || {}, u.vocab) {
      const R = y.mappings.get(d);
      if (R === null)
        return null;
      if (i(R) && "@id" in R)
        return R["@id"];
    }
    const $ = d.indexOf(":");
    if ($ > 0) {
      const R = d.substr(0, $), E = d.substr($ + 1);
      if (R === "_" || E.indexOf("//") === 0)
        return d;
      m && m.hasOwnProperty(R) && b.createTermDefinition({
        activeCtx: y,
        localCtx: m,
        term: R,
        defined: I,
        options: A
      });
      const k = y.mappings.get(R);
      if (k && k._prefix)
        return k["@id"] + E;
      if (s(d))
        return d;
    }
    if (u.vocab && "@vocab" in y)
      d = y["@vocab"] + d;
    else if (u.base) {
      let R, E;
      "@base" in y ? y["@base"] ? (E = c(A.base, y["@base"]), R = c(E, d)) : (E = y["@base"], R = d) : (E = A.base, R = c(A.base, d)), d = R;
    }
    return d;
  }
  b.getInitialContext = (y) => {
    const d = JSON.stringify({ processingMode: y.processingMode }), u = w.get(d);
    if (u)
      return u;
    const m = {
      processingMode: y.processingMode,
      mappings: /* @__PURE__ */ new Map(),
      inverse: null,
      getInverse: I,
      clone: R,
      revertToPreviousContext: E,
      protected: {}
    };
    return w.size === x && w.clear(), w.set(d, m), m;
    function I() {
      const k = this;
      if (k.inverse)
        return k.inverse;
      const L = k.inverse = {}, j = k.fastCurieMap = {}, D = {}, P = (k["@language"] || "@none").toLowerCase(), G = k["@direction"], O = k.mappings, B = [...O.keys()].sort(h);
      for (const T of B) {
        const M = O.get(T);
        if (M === null)
          continue;
        let U = M["@container"] || "@none";
        if (U = [].concat(U).sort().join(""), M["@id"] === null)
          continue;
        const N = f(M["@id"]);
        for (const _ of N) {
          let q = L[_];
          const C = b.isKeyword(_);
          if (q)
            !C && !M._termHasColon && D[_].push(T);
          else if (L[_] = q = {}, !C && !M._termHasColon) {
            D[_] = [T];
            const z = { iri: _, terms: D[_] };
            _[0] in j ? j[_[0]].push(z) : j[_[0]] = [z];
          }
          if (q[U] || (q[U] = {
            "@language": {},
            "@type": {},
            "@any": {}
          }), q = q[U], $(T, q["@any"], "@none"), M.reverse)
            $(T, q["@type"], "@reverse");
          else if (M["@type"] === "@none")
            $(T, q["@any"], "@none"), $(T, q["@language"], "@none"), $(T, q["@type"], "@none");
          else if ("@type" in M)
            $(T, q["@type"], M["@type"]);
          else if ("@language" in M && "@direction" in M) {
            const z = M["@language"], H = M["@direction"];
            z && H ? $(
              T,
              q["@language"],
              `${z}_${H}`.toLowerCase()
            ) : z ? $(T, q["@language"], z.toLowerCase()) : H ? $(T, q["@language"], `_${H}`) : $(T, q["@language"], "@null");
          } else "@language" in M ? $(
            T,
            q["@language"],
            (M["@language"] || "@null").toLowerCase()
          ) : "@direction" in M ? M["@direction"] ? $(
            T,
            q["@language"],
            `_${M["@direction"]}`
          ) : $(T, q["@language"], "@none") : G ? ($(T, q["@language"], `_${G}`), $(T, q["@language"], "@none"), $(T, q["@type"], "@none")) : ($(T, q["@language"], P), $(T, q["@language"], "@none"), $(T, q["@type"], "@none"));
        }
      }
      for (const T in j)
        A(j, T, 1);
      return L;
    }
    function A(k, L, j) {
      const D = k[L], P = k[L] = {};
      let G, O;
      for (const B of D)
        G = B.iri, j >= G.length ? O = "" : O = G[j], O in P ? P[O].push(B) : P[O] = [B];
      for (const B in P)
        B !== "" && A(P, B, j + 1);
    }
    function $(k, L, j) {
      L.hasOwnProperty(j) || (L[j] = k);
    }
    function R() {
      const k = {};
      return k.mappings = e.clone(this.mappings), k.clone = this.clone, k.inverse = null, k.getInverse = this.getInverse, k.protected = e.clone(this.protected), this.previousContext && (k.previousContext = this.previousContext.clone()), k.revertToPreviousContext = this.revertToPreviousContext, "@base" in this && (k["@base"] = this["@base"]), "@language" in this && (k["@language"] = this["@language"]), "@vocab" in this && (k["@vocab"] = this["@vocab"]), k;
    }
    function E() {
      return this.previousContext ? this.previousContext.clone() : this;
    }
  }, b.getContextValue = (y, d, u) => {
    if (d === null)
      return u === "@context" ? void 0 : null;
    if (y.mappings.has(d)) {
      const m = y.mappings.get(d);
      if (r(u))
        return m;
      if (m.hasOwnProperty(u))
        return m[u];
    }
    if (u === "@language" && u in y || u === "@direction" && u in y)
      return y[u];
    if (u !== "@context")
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
    const u = Array.isArray(y);
    if (u !== Array.isArray(d))
      return !1;
    if (u) {
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
      let $ = y[A], R = d[A];
      if (A === "@container" && Array.isArray($) && Array.isArray(R) && ($ = $.slice().sort(), R = R.slice().sort()), !v($, R))
        return !1;
    }
    return !0;
  }
  return gs;
}
var vs, td;
function Vh() {
  if (td) return vs;
  td = 1;
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
    isSubject: l
  } = St(), {
    expandIri: p,
    getContextValue: g,
    isKeyword: f,
    process: h,
    processingMode: w
  } = Ht(), {
    isAbsolute: x
  } = Mt(), {
    REGEX_BCP47: b,
    REGEX_KEYWORD: S,
    addValue: v,
    asArray: y,
    getValues: d,
    validateTypeValue: u
  } = Ze(), {
    handleEvent: m
  } = Mn(), I = {};
  vs = I, I.expand = async ({
    activeCtx: L,
    activeProperty: j = null,
    element: D,
    options: P = {},
    insideList: G = !1,
    insideIndex: O = !1,
    typeScopedContext: B = null
  }) => {
    if (D == null)
      return null;
    if (j === "@default" && (P = Object.assign({}, P, { isFrame: !1 })), !t(D) && !n(D))
      return !G && (j === null || p(
        L,
        j,
        { vocab: !0 },
        P
      ) === "@graph") ? (P.eventHandler && m({
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
      }), null) : R({ activeCtx: L, activeProperty: j, value: D, options: P });
    if (t(D)) {
      let z = [];
      const H = g(
        L,
        j,
        "@container"
      ) || [];
      G = G || H.includes("@list");
      for (let Q = 0; Q < D.length; ++Q) {
        let J = await I.expand({
          activeCtx: L,
          activeProperty: j,
          element: D[Q],
          options: P,
          insideIndex: O,
          typeScopedContext: B
        });
        G && t(J) && (J = { "@list": J }), J !== null && (t(J) ? z = z.concat(J) : z.push(J));
      }
      return z;
    }
    const T = p(
      L,
      j,
      { vocab: !0 },
      P
    ), M = g(L, j, "@context");
    B = B || (L.previousContext ? L : null);
    let U = Object.keys(D).sort(), N = !O;
    if (N && B && U.length <= 2 && !U.includes("@context"))
      for (const z of U) {
        const H = p(
          B,
          z,
          { vocab: !0 },
          P
        );
        if (H === "@value") {
          N = !1, L = B;
          break;
        }
        if (H === "@id" && U.length === 1) {
          N = !1;
          break;
        }
      }
    N && (L = L.revertToPreviousContext()), r(M) || (L = await h({
      activeCtx: L,
      localCtx: M,
      propagate: !0,
      overrideProtected: !0,
      options: P
    })), "@context" in D && (L = await h(
      { activeCtx: L, localCtx: D["@context"], options: P }
    )), B = L;
    let _ = null;
    for (const z of U)
      if (p(L, z, { vocab: !0 }, P) === "@type") {
        _ = _ || z;
        const Q = D[z], J = Array.isArray(Q) ? Q.length > 1 ? Q.slice().sort() : Q : [Q];
        for (const V of J) {
          const F = g(B, V, "@context");
          r(F) || (L = await h({
            activeCtx: L,
            localCtx: F,
            options: P,
            propagate: !1
          }));
        }
      }
    let q = {};
    await $({
      activeCtx: L,
      activeProperty: j,
      expandedActiveProperty: T,
      element: D,
      expandedParent: q,
      options: P,
      insideList: G,
      typeKey: _,
      typeScopedContext: B
    }), U = Object.keys(q);
    let C = U.length;
    if ("@value" in q) {
      if ("@type" in q && ("@language" in q || "@direction" in q))
        throw new e(
          'Invalid JSON-LD syntax; an element containing "@value" may not contain both "@type" and either "@language" or "@direction".',
          "jsonld.SyntaxError",
          { code: "invalid value object", element: q }
        );
      let z = C - 1;
      if ("@type" in q && (z -= 1), "@index" in q && (z -= 1), "@language" in q && (z -= 1), "@direction" in q && (z -= 1), z !== 0)
        throw new e(
          'Invalid JSON-LD syntax; an element containing "@value" may only have an "@index" property and either "@type" or either or both "@language" or "@direction".',
          "jsonld.SyntaxError",
          { code: "invalid value object", element: q }
        );
      const H = q["@value"] === null ? [] : y(q["@value"]), Q = d(q, "@type");
      if (!(w(L, 1.1) && Q.includes("@json") && Q.length === 1)) if (H.length === 0)
        P.eventHandler && m({
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
      if (C > 1 && !(C === 2 && "@index" in q))
        throw new e(
          'Invalid JSON-LD syntax; if an element has the property "@set" or "@list", then it can have at most one other property that is "@index".',
          "jsonld.SyntaxError",
          { code: "invalid set or list object", element: q }
        );
      "@set" in q && (q = q["@set"], U = Object.keys(q), C = U.length);
    } else C === 1 && "@language" in q && (P.eventHandler && m({
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
    return n(q) && !P.keepFreeFloatingNodes && !G && (j === null || T === "@graph" || (g(L, j, "@container") || []).includes("@graph")) && (q = A({ value: q, count: C, options: P })), q;
  };
  function A({
    value: L,
    count: j,
    options: D
  }) {
    if (j === 0 || "@value" in L || "@list" in L || j === 1 && "@id" in L) {
      if (D.eventHandler) {
        let P, G;
        j === 0 ? (P = "empty object", G = "Dropping empty object.") : "@value" in L ? (P = "object with only @value", G = "Dropping object with only @value.") : "@list" in L ? (P = "object with only @list", G = "Dropping object with only @list.") : j === 1 && "@id" in L && (P = "object with only @id", G = "Dropping object with only @id."), m({
          event: {
            type: ["JsonLdEvent"],
            code: P,
            level: "warning",
            message: G,
            details: {
              value: L
            }
          },
          options: D
        });
      }
      return null;
    }
    return L;
  }
  async function $({
    activeCtx: L,
    activeProperty: j,
    expandedActiveProperty: D,
    element: P,
    expandedParent: G,
    options: O = {},
    insideList: B,
    typeKey: T,
    typeScopedContext: M
  }) {
    const U = Object.keys(P).sort(), N = [];
    let _;
    const q = P[T] && p(
      L,
      t(P[T]) ? P[T][0] : P[T],
      { vocab: !0 },
      {
        ...O,
        typeExpansion: !0
      }
    ) === "@json";
    for (const C of U) {
      let z = P[C], H;
      if (C === "@context")
        continue;
      const Q = p(L, C, { vocab: !0 }, O);
      if (Q === null || !(x(Q) || f(Q))) {
        O.eventHandler && m({
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
        if (Q in G && Q !== "@included" && Q !== "@type")
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
        v(
          G,
          "@id",
          y(z).map((Z) => {
            if (o(Z)) {
              const K = p(L, Z, { base: !0 }, O);
              return O.eventHandler && (K === null ? m(Z === null ? {
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
              }) : x(K) || m({
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
          y(K).map(
            (W) => p(
              M,
              W,
              { base: !0, vocab: !0 },
              { ...O, typeExpansion: !0 }
            )
          )
        ]))), u(z, O.isFrame), v(
          G,
          "@type",
          y(z).map((Z) => {
            if (o(Z)) {
              const K = p(
                M,
                Z,
                { base: !0, vocab: !0 },
                { ...O, typeExpansion: !0 }
              );
              return K !== "@json" && !x(K) && O.eventHandler && m({
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
      if (Q === "@included" && w(L, 1.1)) {
        const Z = y(await I.expand({
          activeCtx: L,
          activeProperty: j,
          element: z,
          options: O
        }));
        if (!Z.every((K) => l(K)))
          throw new e(
            "Invalid JSON-LD syntax; values of @included must expand to node objects.",
            "jsonld.SyntaxError",
            { code: "invalid @included value", value: z }
          );
        v(
          G,
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
        _ = z, q && w(L, 1.1) ? G["@value"] = z : v(
          G,
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
        z = y(z).map((Z) => o(Z) ? Z.toLowerCase() : Z);
        for (const Z of z)
          o(Z) && !Z.match(b) && O.eventHandler && m({
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
        v(
          G,
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
        z = y(z);
        for (const Z of z)
          if (o(Z) && Z !== "ltr" && Z !== "rtl")
            throw new e(
              'Invalid JSON-LD syntax; "@direction" must be "ltr" or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", value: z }
            );
        v(
          G,
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
        v(G, "@index", z);
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
          activeCtx: L,
          activeProperty: "@reverse",
          element: z,
          options: O
        }), "@reverse" in H)
          for (const K in H["@reverse"])
            v(
              G,
              K,
              H["@reverse"][K],
              { propertyIsArray: !0 }
            );
        let Z = G["@reverse"] || null;
        for (const K in H) {
          if (K === "@reverse")
            continue;
          Z === null && (Z = G["@reverse"] = {}), v(Z, K, [], { propertyIsArray: !0 });
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
        N.push(C);
        continue;
      }
      let J = L;
      const V = g(L, C, "@context");
      r(V) || (J = await h({
        activeCtx: L,
        localCtx: V,
        propagate: !0,
        overrideProtected: !0,
        options: O
      }));
      const F = g(L, C, "@container") || [];
      if (F.includes("@language") && n(z)) {
        const Z = g(J, C, "@direction");
        H = E(J, z, Z, O);
      } else if (F.includes("@index") && n(z)) {
        const Z = F.includes("@graph"), K = g(J, C, "@index") || "@index", W = K !== "@index" && p(L, K, { vocab: !0 }, O);
        H = await k({
          activeCtx: J,
          options: O,
          activeProperty: C,
          value: z,
          asGraph: Z,
          indexKey: K,
          propertyIndex: W
        });
      } else if (F.includes("@id") && n(z)) {
        const Z = F.includes("@graph");
        H = await k({
          activeCtx: J,
          options: O,
          activeProperty: C,
          value: z,
          asGraph: Z,
          indexKey: "@id"
        });
      } else if (F.includes("@type") && n(z))
        H = await k({
          // since container is `@type`, revert type scoped context when expanding
          activeCtx: J.revertToPreviousContext(),
          options: O,
          activeProperty: C,
          value: z,
          asGraph: !1,
          indexKey: "@type"
        });
      else {
        const Z = Q === "@list";
        if (Z || Q === "@set") {
          let K = j;
          Z && D === "@graph" && (K = null), H = await I.expand({
            activeCtx: J,
            activeProperty: K,
            element: z,
            options: O,
            insideList: Z
          });
        } else g(L, C, "@type") === "@json" ? H = {
          "@type": "@json",
          "@value": z
        } : H = await I.expand({
          activeCtx: J,
          activeProperty: C,
          element: z,
          options: O,
          insideList: !1
        });
      }
      if (!(H === null && Q !== "@value")) {
        if (Q !== "@list" && !s(H) && F.includes("@list") && (H = { "@list": y(H) }), F.includes("@graph") && !F.some((Z) => Z === "@id" || Z === "@index")) {
          if (H = y(H), O.isFrame || (H = H.filter((Z) => {
            const K = Object.keys(Z).length;
            return A({ value: Z, count: K, options: O }) !== null;
          })), H.length === 0)
            continue;
          H = H.map((Z) => ({ "@graph": y(Z) }));
        }
        if (J.mappings.has(C) && J.mappings.get(C).reverse) {
          const Z = G["@reverse"] = G["@reverse"] || {};
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
        v(G, Q, H, {
          propertyIsArray: !0
        });
      }
    }
    if ("@value" in G && !(G["@type"] === "@json" && w(L, 1.1))) {
      if ((n(_) || t(_)) && !O.isFrame)
        throw new e(
          'Invalid JSON-LD syntax; "@value" value must not be an object or an array.',
          "jsonld.SyntaxError",
          { code: "invalid value object value", value: _ }
        );
    }
    for (const C of N) {
      const z = t(P[C]) ? P[C] : [P[C]];
      for (const H of z) {
        if (!n(H) || Object.keys(H).some((Q) => p(L, Q, { vocab: !0 }, O) === "@value"))
          throw new e(
            "Invalid JSON-LD syntax; nested value must be a node object.",
            "jsonld.SyntaxError",
            { code: "invalid @nest value", value: H }
          );
        await $({
          activeCtx: L,
          activeProperty: j,
          expandedActiveProperty: D,
          element: H,
          expandedParent: G,
          options: O,
          insideList: B,
          typeScopedContext: M,
          typeKey: T
        });
      }
    }
  }
  function R({ activeCtx: L, activeProperty: j, value: D, options: P }) {
    if (D == null)
      return null;
    const G = p(
      L,
      j,
      { vocab: !0 },
      P
    );
    if (G === "@id")
      return p(L, D, { base: !0 }, P);
    if (G === "@type")
      return p(
        L,
        D,
        { vocab: !0, base: !0 },
        { ...P, typeExpansion: !0 }
      );
    const O = g(L, j, "@type");
    if ((O === "@id" || G === "@graph") && o(D)) {
      const T = p(L, D, { base: !0 }, P);
      return T === null && D.match(S) && P.eventHandler && m({
        event: {
          type: ["JsonLdEvent"],
          code: "reserved @id value",
          level: "warning",
          message: "Reserved @id found.",
          details: {
            id: j
          }
        },
        options: P
      }), { "@id": T };
    }
    if (O === "@vocab" && o(D))
      return {
        "@id": p(L, D, { vocab: !0, base: !0 }, P)
      };
    if (f(G))
      return D;
    const B = {};
    if (O && !["@id", "@vocab", "@none"].includes(O))
      B["@type"] = O;
    else if (o(D)) {
      const T = g(L, j, "@language");
      T !== null && (B["@language"] = T);
      const M = g(L, j, "@direction");
      M !== null && (B["@direction"] = M);
    }
    return ["boolean", "number", "string"].includes(typeof D) || (D = D.toString()), B["@value"] = D, B;
  }
  function E(L, j, D, P) {
    const G = [], O = Object.keys(j).sort();
    for (const B of O) {
      const T = p(L, B, { vocab: !0 }, P);
      let M = j[B];
      t(M) || (M = [M]);
      for (const U of M) {
        if (U === null)
          continue;
        if (!o(U))
          throw new e(
            "Invalid JSON-LD syntax; language map values must be strings.",
            "jsonld.SyntaxError",
            { code: "invalid language map value", languageMap: j }
          );
        const N = { "@value": U };
        T !== "@none" && (B.match(b) || P.eventHandler && m({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: B
            }
          },
          options: P
        }), N["@language"] = B.toLowerCase()), D && (N["@direction"] = D), G.push(N);
      }
    }
    return G;
  }
  async function k({
    activeCtx: L,
    options: j,
    activeProperty: D,
    value: P,
    asGraph: G,
    indexKey: O,
    propertyIndex: B
  }) {
    const T = [], M = Object.keys(P).sort(), U = O === "@type";
    for (let N of M) {
      if (U) {
        const C = g(L, N, "@context");
        r(C) || (L = await h({
          activeCtx: L,
          localCtx: C,
          propagate: !1,
          options: j
        }));
      }
      let _ = P[N];
      t(_) || (_ = [_]), _ = await I.expand({
        activeCtx: L,
        activeProperty: D,
        element: _,
        options: j,
        insideList: !1,
        insideIndex: !0
      });
      let q;
      B ? N === "@none" ? q = "@none" : q = R(
        { activeCtx: L, activeProperty: O, value: N, options: j }
      ) : q = p(L, N, { vocab: !0 }, j), O === "@id" ? N = p(L, N, { base: !0 }, j) : U && (N = q);
      for (let C of _) {
        if (G && !c(C) && (C = { "@graph": [C] }), O === "@type")
          q === "@none" || (C["@type"] ? C["@type"] = [N].concat(C["@type"]) : C["@type"] = [N]);
        else {
          if (a(C) && !["@language", "@type", "@index"].includes(O))
            throw new e(
              `Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${O}".`,
              "jsonld.SyntaxError",
              { code: "invalid value object", value: C }
            );
          B ? q !== "@none" && v(C, B, q, {
            propertyIsArray: !0,
            prependValue: !0
          }) : q !== "@none" && !(O in C) && (C[O] = N);
        }
        T.push(C);
      }
    }
    return T;
  }
  return vs;
}
var bs, nd;
function fr() {
  if (nd) return bs;
  nd = 1;
  const { isKeyword: e } = Ht(), t = St(), n = Ne(), i = Ze(), o = He(), r = {};
  return bs = r, r.createMergedNodeMap = (s, a) => {
    a = a || {};
    const c = a.issuer || new i.IdentifierIssuer("_:b"), l = { "@default": {} };
    return r.createNodeMap(s, l, "@default", c), r.mergeNodeMaps(l);
  }, r.createNodeMap = (s, a, c, l, p, g) => {
    if (n.isArray(s)) {
      for (const x of s)
        r.createNodeMap(x, a, c, l, void 0, g);
      return;
    }
    if (!n.isObject(s)) {
      g && g.push(s);
      return;
    }
    if (t.isValue(s)) {
      if ("@type" in s) {
        let x = s["@type"];
        x.indexOf("_:") === 0 && (s["@type"] = x = l.getId(x));
      }
      g && g.push(s);
      return;
    } else if (g && t.isList(s)) {
      const x = [];
      r.createNodeMap(s["@list"], a, c, l, p, x), g.push({ "@list": x });
      return;
    }
    if ("@type" in s) {
      const x = s["@type"];
      for (const b of x)
        b.indexOf("_:") === 0 && l.getId(b);
    }
    n.isUndefined(p) && (p = t.isBlankNode(s) ? l.getId(s["@id"]) : s["@id"]), g && g.push({ "@id": p });
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
          for (const u of d) {
            let m = u["@id"];
            t.isBlankNode(u) && (m = l.getId(m)), r.createNodeMap(u, a, c, l, m), i.addValue(
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
      for (let S of b)
        if (x === "@type" && (S = S.indexOf("_:") === 0 ? l.getId(S) : S), t.isSubject(S) || t.isSubjectReference(S)) {
          if ("@id" in S && !S["@id"])
            continue;
          const v = t.isBlankNode(S) ? l.getId(S["@id"]) : S["@id"];
          i.addValue(
            h,
            x,
            { "@id": v },
            { propertyIsArray: !0, allowDuplicate: !1 }
          ), r.createNodeMap(S, a, c, l, v);
        } else if (t.isValue(S))
          i.addValue(
            h,
            x,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        else if (t.isList(S)) {
          const v = [];
          r.createNodeMap(S["@list"], a, c, l, p, v), S = { "@list": v }, i.addValue(
            h,
            x,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        } else
          r.createNodeMap(S, a, c, l, p), i.addValue(
            h,
            x,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
    }
  }, r.mergeNodeMapGraphs = (s) => {
    const a = {};
    for (const c of Object.keys(s).sort())
      for (const l of Object.keys(s[c]).sort()) {
        const p = s[c][l];
        l in a || (a[l] = { "@id": l });
        const g = a[l];
        for (const f of Object.keys(p).sort())
          if (e(f) && f !== "@type")
            g[f] = i.clone(p[f]);
          else
            for (const h of p[f])
              i.addValue(
                g,
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
      let g = a[l];
      g ? "@graph" in g || (g["@graph"] = []) : a[l] = g = {
        "@id": l,
        "@graph": []
      };
      const f = g["@graph"];
      for (const h of Object.keys(p).sort()) {
        const w = p[h];
        t.isSubjectReference(w) || f.push(w);
      }
    }
    return a;
  }, bs;
}
var ws, id;
function Gh() {
  if (id) return ws;
  id = 1;
  const {
    isSubjectReference: e
  } = St(), {
    createMergedNodeMap: t
  } = fr(), n = {};
  return ws = n, n.flatten = (i) => {
    const o = t(i), r = [], s = Object.keys(o).sort();
    for (let a = 0; a < s.length; ++a) {
      const c = o[s[a]];
      e(c) || r.push(c);
    }
    return r;
  }, ws;
}
var xs, rd;
function Fh() {
  if (rd) return xs;
  rd = 1;
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
    RDF_NIL: l,
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
  } = va(), b = {};
  xs = b, b.fromRDF = async (v, y) => {
    const {
      useRdfType: d = !1,
      useNativeTypes: u = !1,
      rdfDirection: m = null
    } = y, I = {}, A = { "@default": I }, $ = {};
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
    for (const k of v) {
      const L = k.graph.termType === "DefaultGraph" ? "@default" : k.graph.value;
      L in A || (A[L] = {}), L !== "@default" && !(L in I) && (I[L] = { "@id": L });
      const j = A[L], D = k.subject.value, P = k.predicate.value, G = k.object;
      D in j || (j[D] = { "@id": D });
      const O = j[D], B = G.termType.endsWith("Node");
      if (B && !(G.value in j) && (j[G.value] = { "@id": G.value }), P === p && !d && B) {
        o(O, "@type", G.value, { propertyIsArray: !0 });
        continue;
      }
      const T = S(G, u, m, y);
      if (o(O, P, T, { propertyIsArray: !0 }), B)
        if (G.value === l) {
          const M = j[G.value];
          "usages" in M || (M.usages = []), M.usages.push({
            node: O,
            property: P,
            value: T
          });
        } else G.value in $ ? $[G.value] = !1 : $[G.value] = {
          node: O,
          property: P,
          value: T
        };
    }
    for (const k in A) {
      const L = A[k];
      if (!(l in L))
        continue;
      const j = L[l];
      if (j.usages) {
        for (let D of j.usages) {
          let P = D.node, G = D.property, O = D.value;
          const B = [], T = [];
          let M = Object.keys(P).length;
          for (; G === c && n.isObject($[P["@id"]]) && n.isArray(P[a]) && P[a].length === 1 && n.isArray(P[c]) && P[c].length === 1 && (M === 3 || M === 4 && n.isArray(P["@type"]) && P["@type"].length === 1 && P["@type"][0] === s) && (B.push(P[a][0]), T.push(P["@id"]), D = $[P["@id"]], P = D.node, G = D.property, O = D.value, M = Object.keys(P).length, !!t.isBlankNode(P)); )
            ;
          delete O["@id"], O["@list"] = B.reverse();
          for (const U of T)
            delete L[U];
        }
        delete j.usages;
      }
    }
    const R = [], E = Object.keys(I).sort();
    for (const k of E) {
      const L = I[k];
      if (k in A) {
        const j = L["@graph"] = [], D = A[k], P = Object.keys(D).sort();
        for (const G of P) {
          const O = D[G];
          t.isSubjectReference(O) || j.push(O);
        }
      }
      t.isSubjectReference(L) || R.push(L);
    }
    return R;
  };
  function S(v, y, d, u) {
    if (v.termType.endsWith("Node"))
      return { "@id": v.value };
    const m = { "@value": v.value };
    if (v.language)
      v.language.match(i) || u.eventHandler && r({
        event: {
          type: ["JsonLdEvent"],
          code: "invalid @language value",
          level: "warning",
          message: "@language value must be valid BCP47.",
          details: {
            language: v.language
          }
        },
        options: u
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
        const [, A, $] = I.split(/[#_]/);
        A.length > 0 && (m["@language"] = A, A.match(i) || u.eventHandler && r({
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
        })), m["@direction"] = $;
      } else I !== x && (m["@type"] = I);
    }
    return m;
  }
  return xs;
}
var Ss, sd;
function Bh() {
  return sd || (sd = 1, Ss = function e(t) {
    return t === null || typeof t != "object" || t.toJSON != null ? JSON.stringify(t) : Array.isArray(t) ? "[" + t.reduce((n, i, o) => {
      const r = o === 0 ? "" : ",", s = i === void 0 || typeof i == "symbol" ? null : i;
      return n + r + e(s);
    }, "") + "]" : "{" + Object.keys(t).sort().reduce((n, i, o) => {
      if (t[i] === void 0 || typeof t[i] == "symbol")
        return n;
      const r = n.length === 0 ? "" : ",";
      return n + r + e(i) + ":" + e(t[i]);
    }, "") + "}";
  }), Ss;
}
var Is, ad;
function Zh() {
  if (ad) return Is;
  ad = 1;
  const { createNodeMap: e } = fr(), { isKeyword: t } = Ht(), n = St(), i = Bh(), o = He(), r = Ne(), s = Ze(), {
    handleEvent: a
  } = Mn(), {
    // RDF,
    // RDF_LIST,
    RDF_FIRST: c,
    RDF_REST: l,
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
  } = va(), {
    isAbsolute: v
  } = Mt(), y = {};
  Is = y, y.toRDF = (I, A) => {
    const $ = new s.IdentifierIssuer("_:b"), R = { "@default": {} };
    e(I, R, "@default", $);
    const E = [], k = Object.keys(R).sort();
    for (const L of k) {
      let j;
      if (L === "@default")
        j = { termType: "DefaultGraph", value: "" };
      else if (v(L))
        L.startsWith("_:") ? j = { termType: "BlankNode" } : j = { termType: "NamedNode" }, j.value = L;
      else {
        A.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "relative graph reference",
            level: "warning",
            message: "Relative graph reference found.",
            details: {
              graph: L
            }
          },
          options: A
        });
        continue;
      }
      d(E, R[L], j, $, A);
    }
    return E;
  };
  function d(I, A, $, R, E) {
    const k = Object.keys(A).sort();
    for (const L of k) {
      const j = A[L], D = Object.keys(j).sort();
      for (let P of D) {
        const G = j[P];
        if (P === "@type")
          P = g;
        else if (t(P))
          continue;
        for (const O of G) {
          const B = {
            termType: L.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: L
          };
          if (!v(L)) {
            E.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "relative subject reference",
                level: "warning",
                message: "Relative subject reference found.",
                details: {
                  subject: L
                }
              },
              options: E
            });
            continue;
          }
          const T = {
            termType: P.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: P
          };
          if (!v(P)) {
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
          if (T.termType === "BlankNode" && !E.produceGeneralizedRdf) {
            E.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "blank node predicate",
                level: "warning",
                message: "Dropping blank node predicate.",
                details: {
                  // FIXME: add better issuer API to get reverse mapping
                  property: R.getOldIds().find((U) => R.getId(U) === P)
                }
              },
              options: E
            });
            continue;
          }
          const M = m(
            O,
            R,
            I,
            $,
            E.rdfDirection,
            E
          );
          M && I.push({
            subject: B,
            predicate: T,
            object: M,
            graph: $
          });
        }
      }
    }
  }
  function u(I, A, $, R, E, k) {
    const L = { termType: "NamedNode", value: c }, j = { termType: "NamedNode", value: l }, D = { termType: "NamedNode", value: p }, P = I.pop(), G = P ? { termType: "BlankNode", value: A.getId() } : D;
    let O = G;
    for (const B of I) {
      const T = m(
        B,
        A,
        $,
        R,
        E,
        k
      ), M = { termType: "BlankNode", value: A.getId() };
      $.push({
        subject: O,
        predicate: L,
        object: T,
        graph: R
      }), $.push({
        subject: O,
        predicate: j,
        object: M,
        graph: R
      }), O = M;
    }
    if (P) {
      const B = m(
        P,
        A,
        $,
        R,
        E,
        k
      );
      $.push({
        subject: O,
        predicate: L,
        object: B,
        graph: R
      }), $.push({
        subject: O,
        predicate: j,
        object: D,
        graph: R
      });
    }
    return G;
  }
  function m(I, A, $, R, E, k) {
    const L = {};
    if (n.isValue(I)) {
      L.termType = "Literal", L.value = void 0, L.datatype = {
        termType: "NamedNode"
      };
      let j = I["@value"];
      const D = I["@type"] || null;
      if (D === "@json")
        L.value = i(j), L.datatype.value = f;
      else if (r.isBoolean(j))
        L.value = j.toString(), L.datatype.value = D || w;
      else if (r.isDouble(j) || D === x)
        r.isDouble(j) || (j = parseFloat(j)), L.value = j.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), L.datatype.value = D || x;
      else if (r.isNumber(j))
        L.value = j.toFixed(0), L.datatype.value = D || b;
      else if ("@direction" in I && E === "i18n-datatype") {
        const P = (I["@language"] || "").toLowerCase(), G = I["@direction"], O = `https://www.w3.org/ns/i18n#${P}_${G}`;
        L.datatype.value = O, L.value = j;
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
        "@language" in I ? ("@direction" in I && !E && k.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: L.value
            }
          },
          options: k
        }), L.value = j, L.datatype.value = D || h, L.language = I["@language"]) : ("@direction" in I && !E && k.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: L.value
            }
          },
          options: k
        }), L.value = j, L.datatype.value = D || S);
      }
    } else if (n.isList(I)) {
      const j = u(
        I["@list"],
        A,
        $,
        R,
        E,
        k
      );
      L.termType = j.termType, L.value = j.value;
    } else {
      const j = r.isObject(I) ? I["@id"] : I;
      L.termType = j.startsWith("_:") ? "BlankNode" : "NamedNode", L.value = j;
    }
    return L.termType === "NamedNode" && !v(L.value) ? (k.eventHandler && a({
      event: {
        type: ["JsonLdEvent"],
        code: "relative object reference",
        level: "warning",
        message: "Relative object reference found.",
        details: {
          object: L.value
        }
      },
      options: k
    }), null) : L;
  }
  return Is;
}
var As, od;
function Hh() {
  if (od) return As;
  od = 1;
  const { isKeyword: e } = Ht(), t = St(), n = Ne(), i = Ze(), o = Mt(), r = He(), {
    createNodeMap: s,
    mergeNodeMapGraphs: a
  } = fr(), c = {};
  As = c, c.frameMergedOrDefault = (d, u, m) => {
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
    const $ = [];
    c.frame(I, Object.keys(I.subjects).sort(), u, $), m.pruneBlankNodeIdentifiers && (m.bnodesToClear = Object.keys(I.bnodeMap).filter((R) => I.bnodeMap[R].length === 1));
    // remove @preserve from results
    return m.link = {}, b($, m);
  }, c.frame = (d, u, m, I, A = null) => {
    f(m), m = m[0];
    const $ = d.options, R = {
      embed: g(m, $, "embed"),
      explicit: g(m, $, "explicit"),
      requireAll: g(m, $, "requireAll")
    };
    d.link.hasOwnProperty(d.graph) || (d.link[d.graph] = {});
    const E = d.link[d.graph], k = h(d, u, m, R), L = Object.keys(k).sort();
    for (const j of L) {
      const D = k[j];
      if (A === null ? d.uniqueEmbeds = { [d.graph]: {} } : d.uniqueEmbeds[d.graph] = d.uniqueEmbeds[d.graph] || {}, R.embed === "@link" && j in E) {
        S(I, A, E[j]);
        continue;
      }
      const P = { "@id": j };
      if (j.indexOf("_:") === 0 && i.addValue(d.bnodeMap, j, P, { propertyIsArray: !0 }), E[j] = P, (R.embed === "@first" || R.embed === "@last") && d.is11)
        throw new r(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: m }
        );
      if (!(!d.embedded && d.uniqueEmbeds[d.graph].hasOwnProperty(j))) {
        if (d.embedded && (R.embed === "@never" || p(D, d.graph, d.subjectStack))) {
          S(I, A, P);
          continue;
        }
        if (d.embedded && (R.embed == "@first" || R.embed == "@once") && d.uniqueEmbeds[d.graph].hasOwnProperty(j)) {
          S(I, A, P);
          continue;
        }
        if (R.embed === "@last" && j in d.uniqueEmbeds[d.graph] && x(d, j), d.uniqueEmbeds[d.graph][j] = { parent: I, property: A }, d.subjectStack.push({ subject: D, graph: d.graph }), j in d.graphMap) {
          let G = !1, O = null;
          "@graph" in m ? (O = m["@graph"][0], G = !(j === "@merged" || j === "@default"), n.isObject(O) || (O = {})) : (G = d.graph !== "@merged", O = {}), G && c.frame(
            { ...d, graph: j, embedded: !1 },
            Object.keys(d.graphMap[j]).sort(),
            [O],
            P,
            "@graph"
          );
        }
        "@included" in m && c.frame(
          { ...d, embedded: !1 },
          u,
          m["@included"],
          P,
          "@included"
        );
        for (const G of Object.keys(D).sort()) {
          if (e(G)) {
            if (P[G] = i.clone(D[G]), G === "@type")
              for (const O of D["@type"])
                O.indexOf("_:") === 0 && i.addValue(
                  d.bnodeMap,
                  O,
                  P,
                  { propertyIsArray: !0 }
                );
            continue;
          }
          if (!(R.explicit && !(G in m)))
            for (const O of D[G]) {
              const B = G in m ? m[G] : l(R);
              if (t.isList(O)) {
                const T = m[G] && m[G][0] && m[G][0]["@list"] ? m[G][0]["@list"] : l(R), M = { "@list": [] };
                S(P, G, M);
                const U = O["@list"];
                for (const N of U)
                  t.isSubjectReference(N) ? c.frame(
                    { ...d, embedded: !0 },
                    [N["@id"]],
                    T,
                    M,
                    "@list"
                  ) : S(M, "@list", i.clone(N));
              } else t.isSubjectReference(O) ? c.frame(
                { ...d, embedded: !0 },
                [O["@id"]],
                B,
                P,
                G
              ) : y(B[0], O) && S(P, G, i.clone(O));
            }
        }
        for (const G of Object.keys(m).sort()) {
          if (G === "@type") {
            if (!n.isObject(m[G][0]) || !("@default" in m[G][0]))
              continue;
          } else if (e(G))
            continue;
          const O = m[G][0] || {};
          if (!g(O, $, "omitDefault") && !(G in P)) {
            let T = "@null";
            "@default" in O && (T = i.clone(O["@default"])), n.isArray(T) || (T = [T]), P[G] = [{ "@preserve": T }];
          }
        }
        for (const G of Object.keys(m["@reverse"] || {}).sort()) {
          const O = m["@reverse"][G];
          for (const B of Object.keys(d.subjects))
            i.getValues(d.subjects[B], G).some((M) => M["@id"] === j) && (P["@reverse"] = P["@reverse"] || {}, i.addValue(
              P["@reverse"],
              G,
              [],
              { propertyIsArray: !0 }
            ), c.frame(
              { ...d, embedded: !0 },
              [B],
              O,
              P["@reverse"][G],
              A
            ));
        }
        S(I, A, P), d.subjectStack.pop();
      }
    }
  }, c.cleanupNull = (d, u) => {
    if (n.isArray(d))
      return d.map((I) => c.cleanupNull(I, u)).filter((I) => I);
    if (d === "@null")
      return null;
    if (n.isObject(d)) {
      if ("@id" in d) {
        const m = d["@id"];
        if (u.link.hasOwnProperty(m)) {
          const I = u.link[m].indexOf(d);
          if (I !== -1)
            return u.link[m][I];
          u.link[m].push(d);
        } else
          u.link[m] = [d];
      }
      for (const m in d)
        d[m] = c.cleanupNull(d[m], u);
    }
    return d;
  };
  function l(d) {
    const u = {};
    for (const m in d)
      d[m] !== void 0 && (u["@" + m] = [d[m]]);
    return [u];
  }
  function p(d, u, m) {
    for (let I = m.length - 1; I >= 0; --I) {
      const A = m[I];
      if (A.graph === u && A.subject["@id"] === d["@id"])
        return !0;
    }
    return !1;
  }
  function g(d, u, m) {
    const I = "@" + m;
    let A = I in d ? d[I][0] : u[m];
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
  function h(d, u, m, I) {
    const A = {};
    for (const $ of u) {
      const R = d.graphMap[d.graph][$];
      w(d, R, m, I) && (A[$] = R);
    }
    return A;
  }
  function w(d, u, m, I) {
    let A = !0, $ = !1;
    for (const R in m) {
      let E = !1;
      const k = i.getValues(u, R), L = i.getValues(m, R).length === 0;
      if (R === "@id") {
        if (n.isEmptyObject(m["@id"][0] || {}) ? E = !0 : m["@id"].length >= 0 && (E = m["@id"].includes(k[0])), !I.requireAll)
          return E;
      } else if (R === "@type") {
        if (A = !1, L) {
          if (k.length > 0)
            return !1;
          E = !0;
        } else if (m["@type"].length === 1 && n.isEmptyObject(m["@type"][0]))
          E = k.length > 0;
        else
          for (const j of m["@type"])
            n.isObject(j) && "@default" in j ? E = !0 : E = E || k.some((D) => D === j);
        if (!I.requireAll)
          return E;
      } else {
        if (e(R))
          continue;
        {
          const j = i.getValues(m, R)[0];
          let D = !1;
          if (j && (f([j]), D = "@default" in j), A = !1, k.length === 0 && D)
            continue;
          if (k.length > 0 && L)
            return !1;
          if (j === void 0) {
            if (k.length > 0)
              return !1;
            E = !0;
          } else if (t.isList(j)) {
            const P = j["@list"][0];
            if (t.isList(k[0])) {
              const G = k[0]["@list"];
              t.isValue(P) ? E = G.some((O) => y(P, O)) : (t.isSubject(P) || t.isSubjectReference(P)) && (E = G.some((O) => v(
                d,
                P,
                O,
                I
              )));
            }
          } else t.isValue(j) ? E = k.some((P) => y(j, P)) : t.isSubjectReference(j) ? E = k.some((P) => v(d, j, P, I)) : n.isObject(j) ? E = k.length > 0 : E = !1;
        }
      }
      if (!E && I.requireAll)
        return !1;
      $ = $ || E;
    }
    return A || $;
  }
  function x(d, u) {
    const m = d.uniqueEmbeds[d.graph], I = m[u], A = I.parent, $ = I.property, R = { "@id": u };
    if (n.isArray(A)) {
      for (let k = 0; k < A.length; ++k)
        if (i.compareValues(A[k], R)) {
          A[k] = R;
          break;
        }
    } else {
      const k = n.isArray(A[$]);
      i.removeValue(A, $, R, { propertyIsArray: k }), i.addValue(A, $, R, { propertyIsArray: k });
    }
    const E = (k) => {
      const L = Object.keys(m);
      for (const j of L)
        j in m && n.isObject(m[j].parent) && m[j].parent["@id"] === k && (delete m[j], E(j));
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
      return d.map((m) => b(m, u));
    if (n.isObject(d)) {
      // remove @preserve
      if ("@preserve" in d)
        return d["@preserve"][0];
      if (t.isValue(d))
        return d;
      if (t.isList(d))
        return d["@list"] = b(d["@list"], u), d;
      if ("@id" in d) {
        const m = d["@id"];
        if (u.link.hasOwnProperty(m)) {
          const I = u.link[m].indexOf(d);
          if (I !== -1)
            return u.link[m][I];
          u.link[m].push(d);
        } else
          u.link[m] = [d];
      }
      for (const m in d) {
        if (m === "@id" && u.bnodesToClear.includes(d[m])) {
          delete d["@id"];
          continue;
        }
        d[m] = b(d[m], u);
      }
    }
    return d;
  }
  function S(d, u, m) {
    n.isObject(d) ? i.addValue(d, u, m, { propertyIsArray: !0 }) : d.push(m);
  }
  function v(d, u, m, I) {
    if (!("@id" in m))
      return !1;
    const A = d.subjects[m["@id"]];
    return A && w(d, A, u, I);
  }
  function y(d, u) {
    const m = u["@value"], I = u["@type"], A = u["@language"], $ = d["@value"] ? n.isArray(d["@value"]) ? d["@value"] : [d["@value"]] : [], R = d["@type"] ? n.isArray(d["@type"]) ? d["@type"] : [d["@type"]] : [], E = d["@language"] ? n.isArray(d["@language"]) ? d["@language"] : [d["@language"]] : [];
    return $.length === 0 && R.length === 0 && E.length === 0 ? !0 : !(!($.includes(m) || n.isEmptyObject($[0])) || !(!I && R.length === 0 || R.includes(I) || I && n.isEmptyObject(R[0])) || !(!A && E.length === 0 || E.includes(A) || A && n.isEmptyObject(E[0])));
  }
  return As;
}
var qs, cd;
function Jh() {
  if (cd) return qs;
  cd = 1;
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
    isSubjectReference: l
  } = St(), {
    expandIri: p,
    getContextValue: g,
    isKeyword: f,
    process: h,
    processingMode: w
  } = Ht(), {
    removeBase: x,
    prependBase: b
  } = Mt(), {
    REGEX_KEYWORD: S,
    addValue: v,
    asArray: y,
    compareShortestLeast: d
  } = Ze(), u = {};
  qs = u, u.compact = async ({
    activeCtx: A,
    activeProperty: $ = null,
    element: R,
    options: E = {}
  }) => {
    if (t(R)) {
      let L = [];
      for (let j = 0; j < R.length; ++j) {
        const D = await u.compact({
          activeCtx: A,
          activeProperty: $,
          element: R[j],
          options: E
        });
        D !== null && L.push(D);
      }
      return E.compactArrays && L.length === 1 && (g(
        A,
        $,
        "@container"
      ) || []).length === 0 && (L = L[0]), L;
    }
    const k = g(A, $, "@context");
    if (o(k) || (A = await h({
      activeCtx: A,
      localCtx: k,
      propagate: !0,
      overrideProtected: !0,
      options: E
    })), n(R)) {
      if (E.link && "@id" in R && E.link.hasOwnProperty(R["@id"])) {
        const T = E.link[R["@id"]];
        for (let M = 0; M < T.length; ++M)
          if (T[M].expanded === R)
            return T[M].compacted;
      }
      if (s(R) || l(R)) {
        const T = u.compactValue({ activeCtx: A, activeProperty: $, value: R, options: E });
        return E.link && l(R) && (E.link.hasOwnProperty(R["@id"]) || (E.link[R["@id"]] = []), E.link[R["@id"]].push({ expanded: R, compacted: T })), T;
      }
      if (r(R) && (g(
        A,
        $,
        "@container"
      ) || []).includes("@list"))
        return u.compact({
          activeCtx: A,
          activeProperty: $,
          element: R["@list"],
          options: E
        });
      const L = $ === "@reverse", j = {}, D = A;
      !s(R) && !l(R) && (A = A.revertToPreviousContext());
      const P = g(D, $, "@context");
      o(P) || (A = await h({
        activeCtx: A,
        localCtx: P,
        propagate: !0,
        overrideProtected: !0,
        options: E
      })), E.link && "@id" in R && (E.link.hasOwnProperty(R["@id"]) || (E.link[R["@id"]] = []), E.link[R["@id"]].push({ expanded: R, compacted: j }));
      let G = R["@type"] || [];
      G.length > 1 && (G = Array.from(G).sort());
      const O = A;
      for (const T of G) {
        const M = u.compactIri(
          { activeCtx: O, iri: T, relativeTo: { vocab: !0 } }
        ), U = g(D, M, "@context");
        o(U) || (A = await h({
          activeCtx: A,
          localCtx: U,
          options: E,
          propagate: !1
        }));
      }
      const B = Object.keys(R).sort();
      for (const T of B) {
        const M = R[T];
        if (T === "@id") {
          let U = y(M).map(
            (_) => u.compactIri({
              activeCtx: A,
              iri: _,
              relativeTo: { vocab: !1 },
              base: E.base
            })
          );
          U.length === 1 && (U = U[0]);
          const N = u.compactIri(
            { activeCtx: A, iri: "@id", relativeTo: { vocab: !0 } }
          );
          j[N] = U;
          continue;
        }
        if (T === "@type") {
          let U = y(M).map(
            (z) => u.compactIri({
              activeCtx: D,
              iri: z,
              relativeTo: { vocab: !0 }
            })
          );
          U.length === 1 && (U = U[0]);
          const N = u.compactIri(
            { activeCtx: A, iri: "@type", relativeTo: { vocab: !0 } }
          ), C = (g(
            A,
            N,
            "@container"
          ) || []).includes("@set") && w(A, 1.1) || t(U) && M.length === 0;
          v(j, N, U, { propertyIsArray: C });
          continue;
        }
        if (T === "@reverse") {
          const U = await u.compact({
            activeCtx: A,
            activeProperty: "@reverse",
            element: M,
            options: E
          });
          for (const N in U)
            if (A.mappings.has(N) && A.mappings.get(N).reverse) {
              const _ = U[N], C = (g(
                A,
                N,
                "@container"
              ) || []).includes("@set") || !E.compactArrays;
              v(
                j,
                N,
                _,
                { propertyIsArray: C }
              ), delete U[N];
            }
          if (Object.keys(U).length > 0) {
            const N = u.compactIri({
              activeCtx: A,
              iri: T,
              relativeTo: { vocab: !0 }
            });
            v(j, N, U);
          }
          continue;
        }
        if (T === "@preserve") {
          const U = await u.compact({
            activeCtx: A,
            activeProperty: $,
            element: M,
            options: E
          });
          t(U) && U.length === 0 || v(j, T, U);
          continue;
        }
        if (T === "@index") {
          if ((g(
            A,
            $,
            "@container"
          ) || []).includes("@index"))
            continue;
          const N = u.compactIri({
            activeCtx: A,
            iri: T,
            relativeTo: { vocab: !0 }
          });
          v(j, N, M);
          continue;
        }
        if (T !== "@graph" && T !== "@list" && T !== "@included" && f(T)) {
          const U = u.compactIri({
            activeCtx: A,
            iri: T,
            relativeTo: { vocab: !0 }
          });
          v(j, U, M);
          continue;
        }
        if (!t(M))
          throw new e(
            "JSON-LD expansion error; expanded value must be an array.",
            "jsonld.SyntaxError"
          );
        if (M.length === 0) {
          const U = u.compactIri({
            activeCtx: A,
            iri: T,
            value: M,
            relativeTo: { vocab: !0 },
            reverse: L
          }), N = A.mappings.has(U) ? A.mappings.get(U)["@nest"] : null;
          let _ = j;
          N && (I(A, N, E), n(j[N]) || (j[N] = {}), _ = j[N]), v(
            _,
            U,
            M,
            {
              propertyIsArray: !0
            }
          );
        }
        for (const U of M) {
          const N = u.compactIri({
            activeCtx: A,
            iri: T,
            value: U,
            relativeTo: { vocab: !0 },
            reverse: L
          }), _ = A.mappings.has(N) ? A.mappings.get(N)["@nest"] : null;
          let q = j;
          _ && (I(A, _, E), n(j[_]) || (j[_] = {}), q = j[_]);
          const C = g(
            A,
            N,
            "@container"
          ) || [], z = a(U), H = r(U);
          let Q;
          H ? Q = U["@list"] : z && (Q = U["@graph"]);
          let J = await u.compact({
            activeCtx: A,
            activeProperty: N,
            element: H || z ? Q : U,
            options: E
          });
          if (H)
            if (t(J) || (J = [J]), !C.includes("@list"))
              J = {
                [u.compactIri({
                  activeCtx: A,
                  iri: "@list",
                  relativeTo: { vocab: !0 }
                })]: J
              }, "@index" in U && (J[u.compactIri({
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
            if (C.includes("@graph") && (C.includes("@id") || C.includes("@index") && c(U))) {
              let V;
              q.hasOwnProperty(N) ? V = q[N] : q[N] = V = {};
              const F = (C.includes("@id") ? U["@id"] : U["@index"]) || u.compactIri({
                activeCtx: A,
                iri: "@none",
                relativeTo: { vocab: !0 }
              });
              v(
                V,
                F,
                J,
                {
                  propertyIsArray: !E.compactArrays || C.includes("@set")
                }
              );
            } else C.includes("@graph") && c(U) ? (t(J) && J.length > 1 && (J = { "@included": J }), v(
              q,
              N,
              J,
              {
                propertyIsArray: !E.compactArrays || C.includes("@set")
              }
            )) : (t(J) && J.length === 1 && E.compactArrays && (J = J[0]), J = {
              [u.compactIri({
                activeCtx: A,
                iri: "@graph",
                relativeTo: { vocab: !0 }
              })]: J
            }, "@id" in U && (J[u.compactIri({
              activeCtx: A,
              iri: "@id",
              relativeTo: { vocab: !0 }
            })] = U["@id"]), "@index" in U && (J[u.compactIri({
              activeCtx: A,
              iri: "@index",
              relativeTo: { vocab: !0 }
            })] = U["@index"]), v(
              q,
              N,
              J,
              {
                propertyIsArray: !E.compactArrays || C.includes("@set")
              }
            ));
          else if (C.includes("@language") || C.includes("@index") || C.includes("@id") || C.includes("@type")) {
            let V;
            q.hasOwnProperty(N) ? V = q[N] : q[N] = V = {};
            let F;
            if (C.includes("@language"))
              s(J) && (J = J["@value"]), F = U["@language"];
            else if (C.includes("@index")) {
              const Z = g(
                A,
                N,
                "@index"
              ) || "@index", K = u.compactIri(
                { activeCtx: A, iri: Z, relativeTo: { vocab: !0 } }
              );
              if (Z === "@index")
                F = U["@index"], delete J[K];
              else {
                let W;
                if ([F, ...W] = y(J[Z] || []), !i(F))
                  F = null;
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
            } else if (C.includes("@id")) {
              const Z = u.compactIri({
                activeCtx: A,
                iri: "@id",
                relativeTo: { vocab: !0 }
              });
              F = J[Z], delete J[Z];
            } else if (C.includes("@type")) {
              const Z = u.compactIri({
                activeCtx: A,
                iri: "@type",
                relativeTo: { vocab: !0 }
              });
              let K;
              switch ([F, ...K] = y(J[Z] || []), K.length) {
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
              Object.keys(J).length === 1 && "@id" in U && (J = await u.compact({
                activeCtx: A,
                activeProperty: N,
                element: { "@id": U["@id"] },
                options: E
              }));
            }
            F || (F = u.compactIri({
              activeCtx: A,
              iri: "@none",
              relativeTo: { vocab: !0 }
            })), v(
              V,
              F,
              J,
              {
                propertyIsArray: C.includes("@set")
              }
            );
          } else {
            const V = !E.compactArrays || C.includes("@set") || C.includes("@list") || t(J) && J.length === 0 || T === "@list" || T === "@graph";
            v(
              q,
              N,
              J,
              { propertyIsArray: V }
            );
          }
        }
      }
      return j;
    }
    return R;
  }, u.compactIri = ({
    activeCtx: A,
    iri: $,
    value: R = null,
    relativeTo: E = { vocab: !1 },
    reverse: k = !1,
    base: L = null
  }) => {
    if ($ === null)
      return $;
    A.isPropertyTermScoped && A.previousContext && (A = A.previousContext);
    const j = A.getInverse();
    if (f($) && $ in j && "@none" in j[$] && "@type" in j[$]["@none"] && "@none" in j[$]["@none"]["@type"])
      return j[$]["@none"]["@type"]["@none"];
    if (E.vocab && $ in j) {
      const B = A["@language"] || "@none", T = [];
      n(R) && "@index" in R && !("@graph" in R) && T.push("@index", "@index@set"), n(R) && "@preserve" in R && (R = R["@preserve"][0]), a(R) ? ("@index" in R && T.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in R && T.push(
        "@graph@id",
        "@graph@id@set"
      ), T.push("@graph", "@graph@set", "@set"), "@index" in R || T.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in R || T.push("@graph@id", "@graph@id@set")) : n(R) && !s(R) && T.push("@id", "@id@set", "@type", "@set@type");
      let M = "@language", U = "@null";
      if (k)
        M = "@type", U = "@reverse", T.push("@set");
      else if (r(R)) {
        "@index" in R || T.push("@list");
        const _ = R["@list"];
        if (_.length === 0)
          M = "@any", U = "@none";
        else {
          let q = _.length === 0 ? B : null, C = null;
          for (let z = 0; z < _.length; ++z) {
            const H = _[z];
            let Q = "@none", J = "@none";
            if (s(H))
              if ("@direction" in H) {
                const V = (H["@language"] || "").toLowerCase(), F = H["@direction"];
                Q = `${V}_${F}`;
              } else "@language" in H ? Q = H["@language"].toLowerCase() : "@type" in H ? J = H["@type"] : Q = "@null";
            else
              J = "@id";
            if (q === null ? q = Q : Q !== q && s(H) && (q = "@none"), C === null ? C = J : J !== C && (C = "@none"), q === "@none" && C === "@none")
              break;
          }
          q = q || "@none", C = C || "@none", C !== "@none" ? (M = "@type", U = C) : U = q;
        }
      } else {
        if (s(R))
          if ("@language" in R && !("@index" in R)) {
            T.push("@language", "@language@set"), U = R["@language"];
            const _ = R["@direction"];
            _ && (U = `${U}_${_}`);
          } else "@direction" in R && !("@index" in R) ? U = `_${R["@direction"]}` : "@type" in R && (M = "@type", U = R["@type"]);
        else
          M = "@type", U = "@id";
        T.push("@set");
      }
      T.push("@none"), n(R) && !("@index" in R) && T.push("@index", "@index@set"), s(R) && Object.keys(R).length === 1 && T.push("@language", "@language@set");
      const N = m(
        A,
        $,
        R,
        T,
        M,
        U
      );
      if (N !== null)
        return N;
    }
    if (E.vocab && "@vocab" in A) {
      const B = A["@vocab"];
      if ($.indexOf(B) === 0 && $ !== B) {
        const T = $.substr(B.length);
        if (!A.mappings.has(T))
          return T;
      }
    }
    let D = null;
    const P = [];
    let G = A.fastCurieMap;
    const O = $.length - 1;
    for (let B = 0; B < O && $[B] in G; ++B)
      G = G[$[B]], "" in G && P.push(G[""][0]);
    for (let B = P.length - 1; B >= 0; --B) {
      const T = P[B], M = T.terms;
      for (const U of M) {
        const N = U + ":" + $.substr(T.iri.length);
        A.mappings.get(U)._prefix && (!A.mappings.has(N) || R === null && A.mappings.get(N)["@id"] === $) && (D === null || d(N, D) < 0) && (D = N);
      }
    }
    if (D !== null)
      return D;
    for (const [B, T] of A.mappings)
      if (T && T._prefix && $.startsWith(B + ":"))
        throw new e(
          `Absolute IRI "${$}" confused with prefix "${B}".`,
          "jsonld.SyntaxError",
          { code: "IRI confused with prefix", context: A }
        );
    if (!E.vocab)
      if ("@base" in A)
        if (A["@base"]) {
          const B = x(b(L, A["@base"]), $);
          return S.test(B) ? `./${B}` : B;
        } else
          return $;
      else
        return x(L, $);
    return $;
  }, u.compactValue = ({ activeCtx: A, activeProperty: $, value: R, options: E }) => {
    if (s(R)) {
      const D = g(A, $, "@type"), P = g(A, $, "@language"), G = g(A, $, "@direction"), O = g(A, $, "@container") || [], B = "@index" in R && !O.includes("@index");
      if (!B && D !== "@none" && (R["@type"] === D || "@language" in R && R["@language"] === P && "@direction" in R && R["@direction"] === G || "@language" in R && R["@language"] === P || "@direction" in R && R["@direction"] === G))
        return R["@value"];
      const T = Object.keys(R).length, M = T === 1 || T === 2 && "@index" in R && !B, U = "@language" in A, N = i(R["@value"]), _ = A.mappings.has($) && A.mappings.get($)["@language"] === null;
      if (M && D !== "@none" && (!U || !N || _))
        return R["@value"];
      const q = {};
      return B && (q[u.compactIri({
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
    const k = p(
      A,
      $,
      { vocab: !0 },
      E
    ), L = g(A, $, "@type"), j = u.compactIri({
      activeCtx: A,
      iri: R["@id"],
      relativeTo: { vocab: L === "@vocab" },
      base: E.base
    });
    return L === "@id" || L === "@vocab" || k === "@graph" ? j : {
      [u.compactIri({
        activeCtx: A,
        iri: "@id",
        relativeTo: { vocab: !0 }
      })]: j
    };
  };
  function m(A, $, R, E, k, L) {
    L === null && (L = "@null");
    const j = [];
    if ((L === "@id" || L === "@reverse") && n(R) && "@id" in R) {
      L === "@reverse" && j.push("@reverse");
      const P = u.compactIri(
        { activeCtx: A, iri: R["@id"], relativeTo: { vocab: !0 } }
      );
      A.mappings.has(P) && A.mappings.get(P) && A.mappings.get(P)["@id"] === R["@id"] ? j.push.apply(j, ["@vocab", "@id"]) : j.push.apply(j, ["@id", "@vocab"]);
    } else {
      j.push(L);
      const P = j.find((G) => G.includes("_"));
      P && j.push(P.replace(/^[^_]+_/, "_"));
    }
    j.push("@none");
    const D = A.inverse[$];
    for (const P of E) {
      if (!(P in D))
        continue;
      const G = D[P][k];
      for (const O of j)
        if (O in G)
          return G[O];
    }
    return null;
  }
  function I(A, $, R) {
    if (p(A, $, { vocab: !0 }, R) !== "@nest")
      throw new e(
        "JSON-LD compact error; nested property must have an @nest value resolving to @nest.",
        "jsonld.SyntaxError",
        { code: "invalid @nest value" }
      );
  }
  return qs;
}
var Rs, dd;
function Kh() {
  return dd || (dd = 1, Rs = (e) => {
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
  }), Rs;
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
var js, ld;
function Qh() {
  if (ld) return js;
  ld = 1;
  const e = ga(), t = Oh(), n = Ze(), i = zh(), o = n.IdentifierIssuer, r = He(), s = ll(), a = Uh(), { expand: c } = Vh(), { flatten: l } = Gh(), { fromRDF: p } = Fh(), { toRDF: g } = Zh(), {
    frameMergedOrDefault: f,
    cleanupNull: h
  } = Hh(), {
    isArray: w,
    isObject: x,
    isString: b
  } = Ne(), {
    isSubjectReference: S
  } = St(), {
    expandIri: v,
    getInitialContext: y,
    process: d,
    processingMode: u
  } = Ht(), {
    compact: m,
    compactIri: I
  } = Jh(), {
    createNodeMap: A,
    createMergedNodeMap: $,
    mergeNodeMaps: R
  } = fr(), {
    logEventHandler: E,
    logWarningEventHandler: k,
    safeEventHandler: L,
    setDefaultEventHandler: j,
    setupEventHandler: D,
    strictEventHandler: P,
    unhandledEventHandler: G
  } = Mn(), O = function(T) {
    const M = {}, N = new s({ max: 100 });
    T.compact = async function(q, C, z) {
      if (arguments.length < 2)
        throw new TypeError("Could not compact, too few arguments.");
      if (C === null)
        throw new r(
          "The compaction context must not be null.",
          "jsonld.CompactError",
          { code: "invalid local context" }
        );
      if (q === null)
        return null;
      z = _(z, {
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
      z.skipExpansion ? H = q : H = await T.expand(q, z);
      const Q = await T.processContext(
        y(z),
        C,
        z
      );
      let J = await m({
        activeCtx: Q,
        element: H,
        options: z
      });
      z.compactArrays && !z.graph && w(J) ? J.length === 1 ? J = J[0] : J.length === 0 && (J = {}) : z.graph && x(J) && (J = [J]), x(C) && "@context" in C && (C = C["@context"]), C = n.clone(C), w(C) || (C = [C]);
      const V = C;
      C = [];
      for (let Z = 0; Z < V.length; ++Z)
        (!x(V[Z]) || Object.keys(V[Z]).length > 0) && C.push(V[Z]);
      const F = C.length > 0;
      if (C.length === 1 && (C = C[0]), w(J)) {
        const Z = I({
          activeCtx: Q,
          iri: "@graph",
          relativeTo: { vocab: !0 }
        }), K = J;
        J = {}, F && (J["@context"] = C), J[Z] = K;
      } else if (x(J) && F) {
        const Z = J;
        J = { "@context": C };
        for (const K in Z)
          J[K] = Z[K];
      }
      return J;
    }, T.expand = async function(q, C) {
      if (arguments.length < 1)
        throw new TypeError("Could not expand, too few arguments.");
      C = _(C, {
        keepFreeFloatingNodes: !1,
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      const z = {}, H = [];
      if ("expandContext" in C) {
        const F = n.clone(C.expandContext);
        x(F) && "@context" in F ? z.expandContext = F : z.expandContext = { "@context": F }, H.push(z.expandContext);
      }
      let Q;
      if (!b(q))
        z.input = n.clone(q);
      else {
        const F = await T.get(q, C);
        Q = F.documentUrl, z.input = F.document, F.contextUrl && (z.remoteContext = { "@context": F.contextUrl }, H.push(z.remoteContext));
      }
      "base" in C || (C.base = Q || "");
      let J = y(C);
      for (const F of H)
        J = await d({ activeCtx: J, localCtx: F, options: C });
      let V = await c({
        activeCtx: J,
        element: z.input,
        options: C
      });
      return x(V) && "@graph" in V && Object.keys(V).length === 1 ? V = V["@graph"] : V === null && (V = []), w(V) || (V = [V]), V;
    }, T.flatten = async function(q, C, z) {
      if (arguments.length < 1)
        return new TypeError("Could not flatten, too few arguments.");
      typeof C == "function" ? C = null : C = C || null, z = _(z, {
        base: b(q) ? q : "",
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      const H = await T.expand(q, z), Q = l(H);
      return C === null ? Q : (z.graph = !0, z.skipExpansion = !0, await T.compact(Q, C, z));
    }, T.frame = async function(q, C, z) {
      if (arguments.length < 2)
        throw new TypeError("Could not frame, too few arguments.");
      if (z = _(z, {
        base: b(q) ? q : "",
        embed: "@once",
        explicit: !1,
        requireAll: !1,
        omitDefault: !1,
        bnodesToClear: [],
        contextResolver: new i(
          { sharedCache: N }
        )
      }), b(C)) {
        const ee = await T.get(C, z);
        if (C = ee.document, ee.contextUrl) {
          let re = C["@context"];
          re ? w(re) ? re.push(ee.contextUrl) : re = [re, ee.contextUrl] : re = ee.contextUrl, C["@context"] = re;
        }
      }
      const H = C ? C["@context"] || {} : {}, Q = await T.processContext(
        y(z),
        H,
        z
      );
      z.hasOwnProperty("omitGraph") || (z.omitGraph = u(Q, 1.1)), z.hasOwnProperty("pruneBlankNodeIdentifiers") || (z.pruneBlankNodeIdentifiers = u(Q, 1.1));
      const J = await T.expand(q, z), V = { ...z };
      V.isFrame = !0, V.keepFreeFloatingNodes = !0;
      const F = await T.expand(C, V), Z = Object.keys(C).map((ee) => v(Q, ee, { vocab: !0 }));
      V.merged = !Z.includes("@graph"), V.is11 = u(Q, 1.1);
      const K = f(J, F, V);
      V.graph = !z.omitGraph, V.skipExpansion = !0, V.link = {}, V.framing = !0;
      let W = await T.compact(K, H, V);
      return V.link = {}, W = h(W, V), W;
    }, T.link = async function(q, C, z) {
      const H = {};
      return C && (H["@context"] = C), H["@embed"] = "@link", T.frame(q, H, z);
    }, T.normalize = T.canonize = async function(q, C) {
      if (arguments.length < 1)
        throw new TypeError("Could not canonize, too few arguments.");
      if (C = _(C, {
        base: b(q) ? q : null,
        algorithm: "URDNA2015",
        skipExpansion: !1,
        safe: !0,
        contextResolver: new i(
          { sharedCache: N }
        )
      }), "inputFormat" in C) {
        if (C.inputFormat !== "application/n-quads" && C.inputFormat !== "application/nquads")
          throw new r(
            "Unknown canonicalization input format.",
            "jsonld.CanonizeError"
          );
        const Q = a.parse(q);
        return e.canonize(Q, C);
      }
      const z = { ...C };
      delete z.format, z.produceGeneralizedRdf = !1;
      const H = await T.toRDF(q, z);
      return e.canonize(H, C);
    }, T.fromRDF = async function(q, C) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert from RDF, too few arguments.");
      C = _(C, {
        format: b(q) ? "application/n-quads" : void 0
      });
      const { format: z } = C;
      let { rdfParser: H } = C;
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
      return p(Q, C);
    }, T.toRDF = async function(q, C) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert to RDF, too few arguments.");
      C = _(C, {
        base: b(q) ? q : "",
        skipExpansion: !1,
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      let z;
      C.skipExpansion ? z = q : z = await T.expand(q, C);
      const H = g(z, C);
      if (C.format) {
        if (C.format === "application/n-quads" || C.format === "application/nquads")
          return a.serialize(H);
        throw new r(
          "Unknown output format.",
          "jsonld.UnknownFormat",
          { format: C.format }
        );
      }
      return H;
    }, T.createNodeMap = async function(q, C) {
      if (arguments.length < 1)
        throw new TypeError("Could not create node map, too few arguments.");
      C = _(C, {
        base: b(q) ? q : "",
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      const z = await T.expand(q, C);
      return $(z, C);
    }, T.merge = async function(q, C, z) {
      if (arguments.length < 1)
        throw new TypeError("Could not merge, too few arguments.");
      if (!w(q))
        throw new TypeError('Could not merge, "docs" must be an array.');
      typeof C == "function" ? C = null : C = C || null, z = _(z, {
        contextResolver: new i(
          { sharedCache: N }
        )
      });
      const H = await Promise.all(q.map((ee) => {
        const re = { ...z };
        return T.expand(ee, re);
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
      const F = R(V), Z = [], K = Object.keys(F).sort();
      for (let ee = 0; ee < K.length; ++ee) {
        const re = F[K[ee]];
        S(re) || Z.push(re);
      }
      return C === null ? Z : (z.graph = !0, z.skipExpansion = !0, await T.compact(Z, C, z));
    }, Object.defineProperty(T, "documentLoader", {
      get: () => T._documentLoader,
      set: (q) => T._documentLoader = q
    }), T.documentLoader = async (q) => {
      throw new r(
        "Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.",
        "jsonld.LoadDocumentError",
        { code: "loading document failed", url: q }
      );
    }, T.get = async function(q, C) {
      let z;
      typeof C.documentLoader == "function" ? z = C.documentLoader : z = T.documentLoader;
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
    }, T.processContext = async function(q, C, z) {
      return z = _(z, {
        base: "",
        contextResolver: new i(
          { sharedCache: N }
        )
      }), C === null ? y(z) : (C = n.clone(C), x(C) && "@context" in C || (C = { "@context": C }), d({ activeCtx: q, localCtx: C, options: z }));
    }, T.getContextValue = Ht().getContextValue, T.documentLoaders = {}, T.useDocumentLoader = function(q) {
      if (!(q in T.documentLoaders))
        throw new r(
          'Unknown document loader type: "' + q + '"',
          "jsonld.UnknownDocumentLoader",
          { type: q }
        );
      T.documentLoader = T.documentLoaders[q].apply(
        T,
        Array.prototype.slice.call(arguments, 1)
      );
    }, T.registerRDFParser = function(q, C) {
      M[q] = C;
    }, T.unregisterRDFParser = function(q) {
      delete M[q];
    }, T.registerRDFParser("application/n-quads", a.parse), T.registerRDFParser("application/nquads", a.parse), T.url = Mt(), T.logEventHandler = E, T.logWarningEventHandler = k, T.safeEventHandler = L, T.setDefaultEventHandler = j, T.strictEventHandler = P, T.unhandledEventHandler = G, T.util = n, Object.assign(T, n), T.promises = T, T.RequestQueue = dl(), T.JsonLdProcessor = Kh()(T), t.setupGlobals(T), t.setupDocumentLoaders(T);
    function _(q, {
      documentLoader: C = T.documentLoader,
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
        { documentLoader: C },
        z,
        q,
        { eventHandler: D({ options: q }) }
      );
    }
    return T;
  }, B = function() {
    return O(function() {
      return B();
    });
  };
  return O(B), js = B, js;
}
var Wh = Qh();
const Xh = /* @__PURE__ */ aa(Wh);
async function ud(e, t, n = {}) {
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
    ud(e, n, { safe: i }),
    ud(t, n, { safe: i })
  ]), s = Ms("sha256").update(o, "utf8").digest(), a = Ms("sha256").update(r, "utf8").digest(), c = new Uint8Array(64);
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
  const { proof: r, ...s } = e, { proofValue: a, ...c } = i, l = { ...c, "@context": s["@context"] }, p = await ul(
    s,
    l,
    n.documentLoader,
    n.safe ?? !1
  );
  try {
    const g = ia(i.proofValue);
    return await Ih(g, p, t);
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
function hr(e, t, n, i) {
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
      const r = sr(t.resolve(o).bytes);
      return r === i.digestSRI ? { id: o, state: "established", reason: "Digest matches the exact referenced bytes." } : { id: o, state: "contradicted", reason: `Digest mismatch: referenced bytes hash to ${r}.` };
    } catch (r) {
      const s = r instanceof Ce ? r.code : "UNAVAILABLE";
      return { id: o, state: "not_established", reason: `Referenced resource unavailable: ${s}.` };
    }
  });
}
async function Vi(e, t, n) {
  const i = [], o = n.staticResolver ?? t, r = n.binding ?? am, s = un("Not evaluated because protection is not established."), a = (u = {}) => {
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
      ...u
    });
  }, c = (u, m, I, A = {}) => (i.push({ check: u, state: m, reason: I }), a(A));
  let l;
  try {
    l = t.resolve(e).bytes;
  } catch (u) {
    const m = u instanceof Ce ? u.code : "UNAVAILABLE";
    return c("resolve", "not_established", `Artifact is not available: ${m}.`);
  }
  const p = sr(l);
  i.push({ check: "resolve", state: "established", reason: `Resolved ${l.byteLength} bytes.` });
  let g;
  try {
    g = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(l));
  } catch {
    return c("parse", "contradicted", "Artifact bytes are not valid UTF-8 JSON.", { digestSRI: p });
  }
  if (!sn(g)) return c("parse", "contradicted", "Artifact is not a JSON object.", { digestSRI: p });
  i.push({ check: "parse", state: "established", reason: "Strict UTF-8 JSON object." });
  const f = g["@context"], h = r.contexts(Array.isArray(g.type) ? g.type[1] : void 0);
  if (!Array.isArray(f) || f.length !== h.length || h.some((u, m) => f[m] !== u))
    return c(
      "carrier",
      "not_established",
      "Only the exact supported context combination for this type is accepted.",
      { digestSRI: p }
    );
  i.push({ check: "carrier", state: "established", reason: "Exact supported context combination." });
  const w = Array.isArray(g.type) ? g.type : [], x = w.length === 2 && w[0] === "VerifiableCredential" ? String(w[1]) : void 0, b = x === void 0 ? void 0 : r.schemas[x];
  if (b === void 0)
    return c("type", "not_established", `Credential type is not a recognized ${r.name} artifact type.`, { digestSRI: p });
  if (Array.isArray(g.credentialSchema))
    return c(
      "type",
      "not_established",
      "Multiple credentialSchema declarations have no accepted composition in this binding.",
      { digestSRI: p, artifactType: x }
    );
  if ((sn(g.credentialSchema) ? g.credentialSchema.id : void 0) !== b)
    return c("type", "contradicted", `${x} must declare schema ${b}.`, { digestSRI: p, artifactType: x });
  i.push({ check: "type", state: "established", reason: `${x} with its pinned schema.` });
  try {
    const u = new nm({ allErrors: !0, strict: !0 });
    im(u);
    const m = JSON.parse(new TextDecoder().decode(o.resolve(b).bytes)), I = u.compile(m);
    if (!I(g)) {
      const A = (I.errors ?? []).map(($) => `${$.instancePath || "/"} ${$.message ?? ""}`).join("; ");
      return c("schema", "contradicted", `Schema validation failed: ${A}`, { digestSRI: p, artifactType: x });
    }
  } catch (u) {
    const m = u instanceof Ce ? u.code : "INVALID_SCHEMA";
    return c("schema", "not_established", `Pinned schema unavailable: ${m}.`, { digestSRI: p, artifactType: x });
  }
  i.push({ check: "schema", state: "established", reason: "Valid against the pinned schema." });
  const v = g.proof;
  if (Array.isArray(v))
    return c("proof", "not_established", "Proof sets and chains are unsupported in the initial slice.", { digestSRI: p, artifactType: x });
  if (!sn(v))
    return c("proof", "not_established", "The artifact carries no proof.", { digestSRI: p, artifactType: x });
  i.push({ check: "proof", state: "established", reason: "One eddsa-rdfc-2022 assertionMethod proof." });
  const y = qu(g.issuer, v.verificationMethod, o);
  if (y.state !== "established" || y.publicKey === void 0)
    return c(
      "key",
      y.state === "established" ? "not_established" : y.state,
      `${y.code}: ${y.reason}`,
      { digestSRI: p, artifactType: x, keyAuthorization: y }
    );
  i.push({ check: "key", state: "established", reason: y.reason });
  try {
    const u = Pd(o);
    if (!await tm(g, y.publicKey, {
      documentLoader: u,
      safe: !0
    }))
      return c(
        "signature",
        "contradicted",
        "Signature does not verify over the safe canonical form.",
        { digestSRI: p, artifactType: x, keyAuthorization: y }
      );
  } catch (u) {
    const m = u instanceof Error ? u.message.split(`
`)[0] : String(u);
    return c(
      "signature",
      "contradicted",
      `Safe JSON-LD processing rejected the artifact: ${m}`,
      { digestSRI: p, artifactType: x, keyAuthorization: y }
    );
  }
  i.push({ check: "signature", state: "established", reason: "Ed25519 signature verifies (safe mode, offline catalog)." });
  const d = [];
  for (const u of n.manifest.factMappings) {
    const m = String(u.fact);
    for (const { pointer: I, value: A } of dm(g, String(u.nativePath)))
      d.push(Object.freeze({ fact: m, pointer: I, value: structuredClone(A) }));
  }
  return a({
    digestSRI: p,
    artifactType: x,
    keyAuthorization: y,
    validity: lm(g, n.evaluationTime),
    relatedResources: Object.freeze(um(g, t).map((u) => Object.freeze(u))),
    facts: Object.freeze(d)
  });
}
var we = Uint8Array, Oe = Uint16Array, ba = Int32Array, mr = new we([
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
]), yr = new we([
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
]), zs = new we([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), pl = function(e, t) {
  for (var n = new Oe(31), i = 0; i < 31; ++i)
    n[i] = t += 1 << e[i - 1];
  for (var o = new ba(n[30]), i = 1; i < 30; ++i)
    for (var r = n[i]; r < n[i + 1]; ++r)
      o[r] = r - n[i] << 5 | i;
  return { b: n, r: o };
}, fl = pl(mr, 2), hl = fl.b, Us = fl.r;
hl[28] = 258, Us[258] = 28;
var ml = pl(yr, 0), pm = ml.b, pd = ml.r, Vs = new Oe(32768);
for (var de = 0; de < 32768; ++de) {
  var $t = (de & 43690) >> 1 | (de & 21845) << 1;
  $t = ($t & 52428) >> 2 | ($t & 13107) << 2, $t = ($t & 61680) >> 4 | ($t & 3855) << 4, Vs[de] = (($t & 65280) >> 8 | ($t & 255) << 8) >> 1;
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
        for (var l = o << 4 | e[o], p = t - e[o], g = s[e[o] - 1]++ << p, f = g | (1 << p) - 1; g <= f; ++g)
          a[Vs[g] >> c] = l;
  } else
    for (a = new Oe(i), o = 0; o < i; ++o)
      e[o] && (a[o] = Vs[s[e[o] - 1]++] >> 15 - e[o]);
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
var fm = /* @__PURE__ */ ct(Et, 9, 0), hm = /* @__PURE__ */ ct(Et, 9, 1), mm = /* @__PURE__ */ ct(Pn, 5, 0), ym = /* @__PURE__ */ ct(Pn, 5, 1), $s = function(e) {
  for (var t = e[0], n = 1; n < e.length; ++n)
    e[n] > t && (t = e[n]);
  return t;
}, Qe = function(e, t, n) {
  var i = t / 8 | 0;
  return (e[i] | e[i + 1] << 8) >> (t & 7) & n;
}, _s = function(e, t) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (t & 7);
}, wa = function(e) {
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
  var l = function(V) {
    var F = n.length;
    if (V > F) {
      var Z = new we(Math.max(F * 2, V));
      Z.set(n), n = Z;
    }
  }, p = t.f || 0, g = t.p || 0, f = t.b || 0, h = t.l, w = t.d, x = t.m, b = t.n, S = o * 8;
  do {
    if (!h) {
      p = Qe(e, g, 1);
      var v = Qe(e, g + 1, 3);
      if (g += 3, v)
        if (v == 1)
          h = hm, w = ym, x = 9, b = 5;
        else if (v == 2) {
          var m = Qe(e, g, 31) + 257, I = Qe(e, g + 10, 15) + 4, A = m + Qe(e, g + 5, 31) + 1;
          g += 14;
          for (var $ = new we(A), R = new we(19), E = 0; E < I; ++E)
            R[zs[E]] = Qe(e, g + E * 3, 7);
          g += I * 3;
          for (var k = $s(R), L = (1 << k) - 1, j = ct(R, k, 1), E = 0; E < A; ) {
            var D = j[Qe(e, g, L)];
            g += D & 15;
            var y = D >> 4;
            if (y < 16)
              $[E++] = y;
            else {
              var P = 0, G = 0;
              for (y == 16 ? (G = 3 + Qe(e, g, 3), g += 2, P = $[E - 1]) : y == 17 ? (G = 3 + Qe(e, g, 7), g += 3) : y == 18 && (G = 11 + Qe(e, g, 127), g += 7); G--; )
                $[E++] = P;
            }
          }
          var O = $.subarray(0, m), B = $.subarray(m);
          x = $s(O), b = $s(B), h = ct(O, x, 1), w = ct(B, b, 1);
        } else
          We(1);
      else {
        var y = wa(g) + 4, d = e[y - 4] | e[y - 3] << 8, u = y + d;
        if (u > o) {
          c && We(0);
          break;
        }
        a && l(f + d), n.set(e.subarray(y, u), f), t.b = f += d, t.p = g = u * 8, t.f = p;
        continue;
      }
      if (g > S) {
        c && We(0);
        break;
      }
    }
    a && l(f + 131072);
    for (var T = (1 << x) - 1, M = (1 << b) - 1, U = g; ; U = g) {
      var P = h[_s(e, g) & T], N = P >> 4;
      if (g += P & 15, g > S) {
        c && We(0);
        break;
      }
      if (P || We(2), N < 256)
        n[f++] = N;
      else if (N == 256) {
        U = g, h = null;
        break;
      } else {
        var _ = N - 254;
        if (N > 264) {
          var E = N - 257, q = mr[E];
          _ = Qe(e, g, (1 << q) - 1) + hl[E], g += q;
        }
        var C = w[_s(e, g) & M], z = C >> 4;
        C || We(3), g += C & 15;
        var B = pm[z];
        if (z > 3) {
          var q = yr[z];
          B += _s(e, g) & (1 << q) - 1, g += q;
        }
        if (g > S) {
          c && We(0);
          break;
        }
        a && l(f + 131072);
        var H = f + _;
        if (f < B) {
          var Q = r - B, J = Math.min(B, H);
          for (Q + f < 0 && We(3); f < J; ++f)
            n[f] = i[Q + f];
        }
        for (; f < H; ++f)
          n[f] = n[f - B];
      }
    }
    t.l = h, t.p = U, t.b = f, t.f = p, h && (p = 1, t.m = x, t.d = w, t.n = b);
  } while (!p);
  return f != n.length && s ? yl(n, 0, f) : n.subarray(0, f);
}, bt = function(e, t, n) {
  n <<= t & 7;
  var i = t / 8 | 0;
  e[i] |= n, e[i + 1] |= n >> 8;
}, gn = function(e, t, n) {
  n <<= t & 7;
  var i = t / 8 | 0;
  e[i] |= n, e[i + 1] |= n >> 8, e[i + 2] |= n >> 16;
}, Ps = function(e, t) {
  for (var n = [], i = 0; i < e.length; ++i)
    e[i] && n.push({ s: i, f: e[i] });
  var o = n.length, r = n.slice();
  if (!o)
    return { t: vl, l: 0 };
  if (o == 1) {
    var s = new we(n[0].s + 1);
    return s[n[0].s] = 1, { t: s, l: 1 };
  }
  n.sort(function(u, m) {
    return u.f - m.f;
  }), n.push({ s: -1, f: 25001 });
  var a = n[0], c = n[1], l = 0, p = 1, g = 2;
  for (n[0] = { s: -1, f: a.f + c.f, l: a, r: c }; p != o - 1; )
    a = n[n[l].f < n[g].f ? l++ : g++], c = n[l != p && n[l].f < n[g].f ? l++ : g++], n[p++] = { s: -1, f: a.f + c.f, l: a, r: c };
  for (var f = r[0].s, i = 1; i < o; ++i)
    r[i].s > f && (f = r[i].s);
  var h = new Oe(f + 1), w = Gs(n[p - 1], h, 0);
  if (w > t) {
    var i = 0, x = 0, b = w - t, S = 1 << b;
    for (r.sort(function(m, I) {
      return h[I.s] - h[m.s] || m.f - I.f;
    }); i < o; ++i) {
      var v = r[i].s;
      if (h[v] > t)
        x += S - (1 << w - h[v]), h[v] = t;
      else
        break;
    }
    for (x >>= b; x > 0; ) {
      var y = r[i].s;
      h[y] < t ? x -= 1 << t - h[y]++ - 1 : ++i;
    }
    for (; i >= 0 && x; --i) {
      var d = r[i].s;
      h[d] == t && (--h[d], ++x);
    }
    w = t;
  }
  return { t: new we(h), l: w };
}, Gs = function(e, t, n) {
  return e.s == -1 ? Math.max(Gs(e.l, t, n + 1), Gs(e.r, t, n + 1)) : t[e.s] = n;
}, fd = function(e) {
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
  var i = n.length, o = wa(t + 2);
  e[o] = i & 255, e[o + 1] = i >> 8, e[o + 2] = e[o] ^ 255, e[o + 3] = e[o + 1] ^ 255;
  for (var r = 0; r < i; ++r)
    e[o + r + 4] = n[r];
  return (o + 4 + i) * 8;
}, hd = function(e, t, n, i, o, r, s, a, c, l, p) {
  bt(t, p++, n), ++o[256];
  for (var g = Ps(o, 15), f = g.t, h = g.l, w = Ps(r, 15), x = w.t, b = w.l, S = fd(f), v = S.c, y = S.n, d = fd(x), u = d.c, m = d.n, I = new Oe(19), A = 0; A < v.length; ++A)
    ++I[v[A] & 31];
  for (var A = 0; A < u.length; ++A)
    ++I[u[A] & 31];
  for (var $ = Ps(I, 7), R = $.t, E = $.l, k = 19; k > 4 && !R[zs[k - 1]]; --k)
    ;
  var L = l + 5 << 3, j = vn(o, Et) + vn(r, Pn) + s, D = vn(o, f) + vn(r, x) + s + 14 + 3 * k + vn(I, R) + 2 * I[16] + 3 * I[17] + 7 * I[18];
  if (c >= 0 && L <= j && L <= D)
    return gl(t, p, e.subarray(c, c + l));
  var P, G, O, B;
  if (bt(t, p, 1 + (D < j)), p += 2, D < j) {
    P = ct(f, h, 0), G = f, O = ct(x, b, 0), B = x;
    var T = ct(R, E, 0);
    bt(t, p, y - 257), bt(t, p + 5, m - 1), bt(t, p + 10, k - 4), p += 14;
    for (var A = 0; A < k; ++A)
      bt(t, p + 3 * A, R[zs[A]]);
    p += 3 * k;
    for (var M = [v, u], U = 0; U < 2; ++U)
      for (var N = M[U], A = 0; A < N.length; ++A) {
        var _ = N[A] & 31;
        bt(t, p, T[_]), p += R[_], _ > 15 && (bt(t, p, N[A] >> 5 & 127), p += N[A] >> 12);
      }
  } else
    P = fm, G = Et, O = mm, B = Pn;
  for (var A = 0; A < a; ++A) {
    var q = i[A];
    if (q > 255) {
      var _ = q >> 18 & 31;
      gn(t, p, P[_ + 257]), p += G[_ + 257], _ > 7 && (bt(t, p, q >> 23 & 31), p += mr[_]);
      var C = q & 31;
      gn(t, p, O[C]), p += B[C], C > 3 && (gn(t, p, q >> 5 & 8191), p += yr[C]);
    } else
      gn(t, p, P[q]), p += G[q];
  }
  return gn(t, p, P[256]), p + G[256];
}, bm = /* @__PURE__ */ new ba([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), vl = /* @__PURE__ */ new we(0), wm = function(e, t, n, i, o, r) {
  var s = r.z || e.length, a = new we(i + s + 5 * (1 + Math.ceil(s / 7e3)) + o), c = a.subarray(i, a.length - o), l = r.l, p = (r.r || 0) & 7;
  if (t) {
    p && (c[0] = r.r >> 3);
    for (var g = bm[t - 1], f = g >> 13, h = g & 8191, w = (1 << n) - 1, x = r.p || new Oe(32768), b = r.h || new Oe(w + 1), S = Math.ceil(n / 3), v = 2 * S, y = function(K) {
      return (e[K] ^ e[K + 1] << S ^ e[K + 2] << v) & w;
    }, d = new ba(25e3), u = new Oe(288), m = new Oe(32), I = 0, A = 0, $ = r.i || 0, R = 0, E = r.w || 0, k = 0; $ + 2 < s; ++$) {
      var L = y($), j = $ & 32767, D = b[L];
      if (x[j] = D, b[L] = j, E <= $) {
        var P = s - $;
        if ((I > 7e3 || R > 24576) && (P > 423 || !l)) {
          p = hd(e, c, 0, d, u, m, A, R, k, $ - k, p), R = I = A = 0, k = $;
          for (var G = 0; G < 286; ++G)
            u[G] = 0;
          for (var G = 0; G < 30; ++G)
            m[G] = 0;
        }
        var O = 2, B = 0, T = h, M = j - D & 32767;
        if (P > 2 && L == y($ - M))
          for (var U = Math.min(f, P) - 1, N = Math.min(32767, $), _ = Math.min(258, P); M <= N && --T && j != D; ) {
            if (e[$ + O] == e[$ + O - M]) {
              for (var q = 0; q < _ && e[$ + q] == e[$ + q - M]; ++q)
                ;
              if (q > O) {
                if (O = q, B = M, q > U)
                  break;
                for (var C = Math.min(M, q - 2), z = 0, G = 0; G < C; ++G) {
                  var H = $ - M + G & 32767, Q = x[H], J = H - Q & 32767;
                  J > z && (z = J, D = H);
                }
              }
            }
            j = D, D = x[j], M += j - D & 32767;
          }
        if (B) {
          d[R++] = 268435456 | Us[O] << 18 | pd[B];
          var V = Us[O] & 31, F = pd[B] & 31;
          A += mr[V] + yr[F], ++u[257 + V], ++m[F], E = $ + O, ++I;
        } else
          d[R++] = e[$], ++u[e[$]];
      }
    }
    for ($ = Math.max($, E); $ < s; ++$)
      d[R++] = e[$], ++u[e[$]];
    p = hd(e, c, l, d, u, m, A, R, k, $ - k, p), l || (r.r = p & 7 | c[p / 8 | 0] << 3, p -= 7, r.h = b, r.p = x, r.i = $, r.w = E);
  } else {
    for (var $ = r.w || 0; $ < s + l; $ += 65535) {
      var Z = $ + 65535;
      Z >= s && (c[p / 8 | 0] = l, Z = s), p = gl(c, p + 1, e.subarray($, Z));
    }
    r.i = s;
  }
  return yl(a, 0, i + wa(p) + o);
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
}, Fs = function(e, t, n) {
  for (; n; ++t)
    e[t] = n, n >>>= 8;
}, Am = function(e, t) {
  var n = t.filename;
  if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : t.level == 9 ? 2 : 0, e[9] = 3, t.mtime != 0 && Fs(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n) {
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
  return Am(o, t), Fs(o, r - 8, n.d()), Fs(o, r - 4, i), o;
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
function md(e) {
  return Object.assign(new RangeError(`Cannot create a buffer larger than maxOutputLength ${e}.`), { code: "ERR_BUFFER_TOO_LARGE" });
}
function Cm(e, t = {}) {
  const n = t.maxOutputLength ?? Number.MAX_SAFE_INTEGER;
  if (e.length >= 18) {
    const o = e.length - 4;
    if ((e[o] | e[o + 1] << 8 | e[o + 2] << 16 | e[o + 3] << 24) >>> 0 > n) throw md(n);
  }
  const i = _m(e);
  if (i.length > n) throw md(n);
  return i;
}
const Bs = 131072, Em = 2 * 1024 * 1024;
class Gi extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "StatusListError";
  }
}
function km(e, t = Em) {
  if (typeof e != "string" || !/^u[A-Za-z0-9_-]+$/.test(e))
    throw new Gi("MALFORMED", 'encodedList must be multibase base64url (prefix "u").');
  let n;
  try {
    n = Cm(Mm(e.slice(1)), { maxOutputLength: t });
  } catch (i) {
    throw i.code === "ERR_BUFFER_TOO_LARGE" || /maxOutputLength|buffer/i.test(String(i)) ? new Gi("TOO_LARGE", `Decompressed status list exceeds ${t} bytes.`) : new Gi("MALFORMED", "encodedList is not valid GZIP data.");
  }
  if (n.byteLength * 8 < Bs)
    throw new Gi("TOO_SHORT", `Status list has fewer than ${Bs} bits.`);
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
function Zs(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Hs(e, t) {
  const n = e.credentialStatus;
  if (n === void 0) return {};
  const i = Array.isArray(n) ? n : [n];
  if (i.length === 0 || !i.every(Zs)) return { reason: "Unsupported credentialStatus form." };
  const o = i.filter((r) => t.includes(String(r.statusPurpose)));
  return o.length > 1 ? { reason: `Several status entries for ${t.join("/")}.` } : o.length === 0 ? { reason: `No status entry has an accepted purpose (${t.join(", ")}); found ${i.map((r) => String(r.statusPurpose)).join(", ")}.` } : { entry: o[0] };
}
function Lm(e, t, n, i, o, r = o) {
  const s = Hs(e, i.purposes), a = s.entry;
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
  const p = (v) => Zs(v) ? v.id : v;
  if (typeof p(t.issuer) != "string" || p(t.issuer) !== p(e.issuer))
    return { state: "not_established", reason: `Status list is signed by ${String(p(t.issuer))}, who may not state status for credentials of ${String(p(e.issuer))}.`, listUri: c, sources: l };
  const g = t.credentialSubject;
  if (!Zs(g) || g.type !== "BitstringStatusList" || g.statusPurpose !== a.statusPurpose)
    return { state: "not_established", reason: "Status list purpose does not match the entry.", listUri: c, sources: l };
  const f = Date.parse(o), h = Date.parse(String(t.validFrom));
  if (!Number.isFinite(f) || !Number.isFinite(h) || (f - h) / 1e3 > i.maxAgeSeconds)
    return { state: "not_established", reason: `Status list is older than the profile's ${i.maxAgeSeconds} s freshness limit.`, listUri: c, sources: l };
  const w = Date.parse(r);
  if (!Number.isFinite(w) || w < h)
    return { state: "not_established", reason: `Status list observed at ${String(t.validFrom)} cannot establish status at the earlier activity time ${r}; historical status is unavailable.`, listUri: c, sources: l };
  if (!/^(0|[1-9][0-9]*)$/.test(a.statusListIndex))
    return { state: "not_established", reason: "statusListIndex is not a non-negative integer.", listUri: c, sources: l };
  let x;
  try {
    x = Om(km(g.encodedList), Number(a.statusListIndex));
  } catch (v) {
    return { state: "not_established", reason: `Status list cannot be read: ${v.message}`, listUri: c, sources: l };
  }
  const [b, S] = a.statusPurpose === "suspension" ? ["Suspended", "Not suspended"] : ["Revoked", "Not revoked"];
  return x ? { state: "contradicted", reason: `${b}: bit ${a.statusListIndex} of ${c} is set.`, listUri: c, sources: l } : { state: "established", reason: `${S}: bit ${a.statusListIndex} of ${c} is clear.`, listUri: c, sources: l };
}
const Nm = Object.freeze({ maxResources: 1e3, maxBytes: 2e7 });
function xa(e, t, n) {
  if (!(e.binding.id === t.id && e.binding.version === t.version && e.profile.id === n.id && e.profile.version === n.version))
    return `Requested ${e.profile.id}@${e.profile.version} with binding ${e.binding.id}@${e.binding.version} is not the verifier-selected profile ${n.id}@${n.version} for ${t.id}@${t.version}.`;
}
function Sa(e, t) {
  const n = `${e.targetId} | plan`;
  return ar({
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
async function Ia(e, t, n, i, o) {
  const r = La(t.openSession({
    maxResources: e.resolverLimits.maxResources,
    maxBytes: e.resolverLimits.maxBytes
  })), s = La(t.openSession(Nm)), a = { manifest: n, evaluationTime: e.evaluationTime, staticResolver: s, ...o ? { binding: o } : {} }, c = (m) => JSON.parse(new TextDecoder().decode(r.resolve(m).bytes)), l = await Vi(e.targetId, r, a), p = [l], g = /* @__PURE__ */ new Map([[e.targetId, 0]]);
  for (const m of e.suppliedEvidence)
    g.has(m) || (g.set(m, 1), p.push(await Vi(m, r, a)));
  for (let m = 0; m < p.length; m++) {
    const I = p[m], A = g.get(I.artifactId);
    if (I.protection.state !== "established" || A + 1 > e.resolverLimits.maxDepth) continue;
    const $ = c(I.artifactId), R = [
      ...(Array.isArray($.termsOfUse) ? $.termsOfUse : []).map((E) => E?.authorizationCredential?.id),
      ...(Array.isArray($.evidence) ? $.evidence : []).map((E) => E?.id)
    ].filter((E) => typeof E == "string");
    for (const E of R)
      g.has(E) || (g.set(E, A + 1), p.push(await Vi(E, r, a)));
  }
  const f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  for (const m of p) {
    if (m.protection.state !== "established") {
      w.set(m.artifactId, void 0);
      continue;
    }
    const I = c(m.artifactId).id;
    w.set(m.artifactId, I === m.artifactId ? ce("established", ["Artifact identifies itself by its resolved identity."], ["/id"]) : ce("contradicted", [`Artifact resolved as ${m.artifactId} identifies itself as ${String(I)}.`], ["/id"]));
  }
  const x = async (m, I, A) => {
    const $ = g.get(m) + 1;
    if ($ > e.resolverLimits.maxDepth)
      return {
        state: "not_established",
        sources: ["/credentialStatus"],
        reason: `Status list is at depth ${$}, beyond the request's maxDepth ${e.resolverLimits.maxDepth}.`
      };
    const R = Hs(I, A.purposes).entry, E = typeof R?.statusListCredential == "string" ? R.statusListCredential : void 0;
    let k, L = "not_established";
    if (E !== void 0) {
      f.has(E) || f.set(E, await Vi(E, r, a));
      const j = f.get(E);
      j.digestSRI !== void 0 && j.protection.state === "established" ? (k = c(E), L = xe([j.protection.state, j.validity.state])) : j.digestSRI !== void 0 && (k = {}, L = j.protection.state);
    }
    return Lm(I, k, L, A, e.evaluationTime, e.activityTime);
  }, b = { required: !0, purposes: ["suspension"], maxAgeSeconds: i.credentialStatus.maxAgeSeconds }, S = /* @__PURE__ */ new Map();
  for (const m of p) {
    if (m.protection.state !== "established") {
      h.set(m.artifactId, void 0);
      continue;
    }
    const I = c(m.artifactId);
    h.set(m.artifactId, await x(m.artifactId, I, i.credentialStatus)), Hs(I, ["suspension"]).entry !== void 0 && S.set(m.artifactId, await x(m.artifactId, I, b));
  }
  const v = (m) => [
    m.protection,
    w.get(m.artifactId) ? {
      artifactId: m.artifactId,
      ...w.get(m.artifactId),
      reasons: w.get(m.artifactId).reasons.map((I) => `identity: ${I}`)
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
  for (const m of p) {
    const I = [
      ["protection", m.protection.state, m.protection.reasons.join(" ")],
      ["identity", w.get(m.artifactId)?.state ?? "not_established", w.get(m.artifactId)?.reasons.join(" ") ?? "not evaluated"],
      ["validity", m.validity.state, m.validity.reasons.join(" ")],
      ["status", h.get(m.artifactId)?.state ?? "not_established", h.get(m.artifactId)?.reason ?? "not evaluated"]
    ], A = xe(I.map((R) => R[1])), $ = S.get(m.artifactId);
    y.set(m.artifactId, {
      uri: m.artifactId,
      usable: A,
      reason: I.filter((R) => R[1] !== "established").map((R) => `${R[0]}: ${R[2]}`).join("; ") || "usable",
      ...A === "established" ? { document: c(m.artifactId) } : {},
      ...$ ? { suspension: { state: $.state, reason: $.reason } } : {}
    });
  }
  const d = [], u = [];
  p.forEach((m, I) => {
    const A = I === 0 ? "target" : "supplied-evidence", $ = hr(m.artifactId, m.digestSRI, A, e);
    for (const k of m.checks)
      d.push({
        gate: om[k.check],
        nodeUse: $,
        predicate: k.check,
        state: k.state,
        execution: "executed",
        reason: k.reason,
        sources: [m.artifactId]
      });
    for (const k of m.relatedResources)
      d.push({
        gate: 1,
        nodeUse: $,
        predicate: "related-resource-integrity",
        state: k.state,
        execution: "executed",
        reason: `${k.id}: ${k.reason}`,
        sources: ["/relatedResource", k.id]
      });
    const R = w.get(m.artifactId);
    d.push(R ? {
      gate: 1,
      nodeUse: $,
      predicate: "resource-identity",
      state: R.state,
      execution: "executed",
      reason: R.reasons.join(" "),
      sources: [...R.sourcePointers]
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
      state: m.validity.state,
      execution: m.validity.execution,
      reason: m.validity.reasons.join(" ") || "Not evaluated.",
      sources: [...m.validity.sourcePointers]
    });
    const E = h.get(m.artifactId);
    d.push(E ? {
      gate: 3,
      nodeUse: $,
      predicate: "credential-status",
      state: E.state,
      execution: "executed",
      reason: E.reason,
      sources: [...E.sources]
    } : {
      gate: 3,
      nodeUse: $,
      predicate: "credential-status",
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated because protection is not established.",
      sources: []
    }), m.digestSRI !== void 0 && u.push({
      uri: m.artifactId,
      digestSRI: m.digestSRI,
      kind: "artifact",
      source: "catalog",
      observedAt: e.evaluationTime
    });
  });
  for (const [m, I] of f)
    I.digestSRI !== void 0 && u.push({ uri: m, digestSRI: I.digestSRI, kind: "status", source: "catalog", observedAt: e.evaluationTime });
  return {
    target: l,
    artifacts: p,
    facts: y,
    verificationOf: v,
    artifactVerification: p.flatMap(v),
    trace: d,
    resources: u
  };
}
const ir = "RecognizedEntityCredential", Le = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Gt = (e) => typeof e == "string" && e.trim().length > 0, Ji = (e) => Array.isArray(e) ? e : Le(e) ? [e] : [], bl = (e) => Gt(e) ? e : Le(e) && Gt(e.id) ? e.id : void 0;
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
  return Ji(e.termsOfUse).filter(Le).filter((t) => t.type === "RmAuthorizationPolicy" && Le(t.authorizationCredential) && t.authorizationCredential.type === ir).map((t) => t.authorizationCredential.id).filter(Gt);
}
const ge = (e, t, n, i) => ({ id: e, state: t, reason: n, sources: i }), yd = (e) => {
  if (!Le(e)) return "no main scope";
  const t = Le(e.standard) ? e.standard : {};
  return `${String(e.activity)} under ${String(t.name ?? t.id)}`;
};
function Um(e, t, n, i, o, r, s, a) {
  const c = ["/termsOfUse", t], l = s(t);
  if (l === void 0) return ge(e, "not_established", `Recognition ${t} is unavailable.`, c);
  if (l.usable !== "established" || l.document === void 0)
    return ge(
      e,
      l.usable === "contradicted" ? "contradicted" : "not_established",
      `Recognition ${t} is not usable: ${l.reason}`,
      c
    );
  const p = l.document;
  if (!Ji(p.type).includes(ir))
    return ge(e, "contradicted", `${t} is not a ${ir}.`, c);
  const g = bl(p.issuer), f = a.trustAnchors.find((u) => u.id === g);
  if (f === void 0 || !f.purposes.includes(o.recognizerPurpose))
    return ge(e, "not_established", `${String(g)}, issuer of ${t}, is not a configured anchor for ${o.recognizerPurpose}.`, c);
  if (l.suspension !== void 0 && l.suspension.state !== "established")
    return ge(
      e,
      l.suspension.state,
      l.suspension.state === "contradicted" ? `${String(g)} has suspended its recognition ${t}. ${l.suspension.reason}` : `The suspension status of ${t} is not established: ${l.suspension.reason}`,
      c
    );
  const h = Ji(p.credentialSubject).filter(Le), w = h.find((u) => u.id === n);
  if (w === void 0)
    return ge(
      e,
      "contradicted",
      `${t} recognizes ${h.map((u) => String(u.id)).join(", ") || "no subject"}, not ${n}, the grant's issuer.`,
      c
    );
  const x = Ji(w.recognizedTo).filter(Le);
  if (x.length === 0)
    return ge(
      e,
      "not_established",
      `${t} recognizes ${n} without recognized actions; this profile does not accept recognition without stated actions.`,
      c
    );
  const b = `${i.activity} under ${i.standardId}`, S = x.filter((u) => u.action === o.action && Le(u.mainScope) && u.mainScope.activity === i.activity && Le(u.mainScope.standard) && u.mainScope.standard.id === i.standardId);
  if (S.length === 0) {
    const u = x.map((m) => `${String(m.action)} (${yd(m.mainScope)})`).join(", ");
    return ge(
      e,
      "contradicted",
      `${t} recognizes ${n} for ${u}, not to ${o.action} for ${b}.`,
      c
    );
  }
  const v = S.filter((u) => u.recognizedBy === void 0 || u.recognizedBy === g);
  if (v.length === 0)
    return ge(e, "contradicted", `The matching action in ${t} names another recognizer than its issuer ${String(g)}.`, c);
  const y = Date.parse(String(r));
  if (typeof r != "string" || !Number.isFinite(y))
    return ge(e, "not_established", "No activity time is stated, so recognition at that time is not established.", c);
  const d = v.find((u) => {
    const m = Date.parse(String(u.validFrom ?? p.validFrom)), I = Date.parse(String(u.validUntil ?? p.validUntil));
    return Number.isFinite(m) && Number.isFinite(I) && m <= y && y <= I;
  });
  return d === void 0 ? ge(e, "not_established", `${String(g)} did not recognize ${n} for ${b} at the activity time ${r}.`, c) : ge(
    e,
    "established",
    `${n} is recognized by ${String(g)} (a configured anchor for ${o.recognizerPurpose}) to ${o.action} for ${yd(d.mainScope)}, in force at ${r}, in ${t}.`,
    c
  );
}
function gr(e, t, n, i, o, r) {
  const s = bl(t.issuer), a = i.trustAnchors.find((w) => w.id === s);
  if (a?.purposes.includes(n))
    return { basis: ge(e, "established", `${String(s)} is a configured anchor for ${n}.`, ["/issuer"]) };
  const c = a === void 0 ? `${String(s)} is not a configured trust anchor.` : `${String(s)} is an anchor, but not for ${n}.`, l = Dm(i);
  if (l === void 0) return { basis: ge(e, "not_established", c, ["/issuer"]) };
  if (l === "invalid")
    return { basis: ge(e, "not_established", `${c} The profile's recognition rules are malformed.`, ["/issuer"]) };
  const p = l.purposes[n];
  if (p === void 0 || s === void 0)
    return { basis: ge(e, "not_established", `${c} The profile accepts no recognition for ${n}.`, ["/issuer"]) };
  const g = zm(t);
  if (g.length === 0)
    return { basis: ge(
      e,
      "not_established",
      `${c} The grant points up to no ${ir} in its termsOfUse.`,
      ["/issuer", "/termsOfUse"]
    ) };
  const f = g.map((w) => ({ uri: w, result: Um(e, w, s, p, l, r, o, i) })), h = f.find((w) => w.result.state === "established");
  return h ? { basis: h.result, recognition: h.uri } : {
    basis: ge(
      e,
      pn(f.map((w) => w.result.state)),
      `${c} ${f.map((w) => w.result.reason).join(" ")}`,
      ["/issuer", "/termsOfUse", ...f.map((w) => w.uri)]
    )
  };
}
const On = Object.freeze({ within: (e, t) => typeof e == "string" && e === t });
function Vm(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of Array.isArray(e.broader) ? e.broader : []) {
    const { narrower: i, broader: o } = n ?? {};
    typeof i == "string" && typeof o == "string" && i !== o && t.set(i, [...t.get(i) ?? [], o]);
  }
  return Object.freeze({
    within(n, i) {
      if (typeof n != "string" || typeof i != "string") return !1;
      const o = /* @__PURE__ */ new Set([n]), r = [n];
      for (; r.length > 0; ) {
        const s = r.shift();
        if (s === i) return !0;
        for (const a of t.get(s) ?? []) o.has(a) || (o.add(a), r.push(a));
      }
      return !1;
    }
  });
}
const Gm = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/, Aa = Object.freeze({ "kg/kg": 0, "mg/kg": -6 });
function vr(e) {
  if (typeof e != "string" || !Gm.test(e)) return;
  const [t, n = ""] = e.split(".");
  return { n: BigInt(`${t}${n}`), scale: n.length };
}
function Tn(e, t) {
  const n = vr(e), i = typeof t == "string" ? Aa[t] : void 0;
  if (!(n === void 0 || i === void 0))
    return i <= 0 ? { n: n.n, scale: n.scale - i } : { n: n.n * 10n ** BigInt(i), scale: n.scale };
}
function _e(e, t) {
  const n = Math.max(e.scale, t.scale), i = e.n * 10n ** BigInt(n - e.scale), o = t.n * 10n ** BigInt(n - t.scale);
  return i < o ? -1 : i > o ? 1 : 0;
}
function Fm(e, t) {
  const n = Math.max(e.scale, t.scale);
  return { n: e.n * 10n ** BigInt(n - e.scale) + t.n * 10n ** BigInt(n - t.scale), scale: n };
}
function An(e) {
  const t = e.n.toString().padStart(e.scale + 1, "0");
  if (e.scale === 0) return t;
  const n = t.slice(-e.scale).replace(/0+$/, "");
  return n.length === 0 ? t.slice(0, -e.scale) : `${t.slice(0, -e.scale)}.${n}`;
}
function Js(e) {
  const t = e.range;
  if (t === void 0) return "Scope record has no range.";
  const n = Tn(t.from, t.unit), i = Tn(t.to, t.unit);
  return n === void 0 || i === void 0 ? `Unsupported or malformed range ${String(t.from)}–${String(t.to)} ${String(t.unit)}.` : _e(n, i) > 0 ? "Scope record range is reversed." : { low: n, high: i };
}
const Fi = (e) => Array.isArray(e) ? e.filter((t) => typeof t == "string") : [], Bm = (e, t) => e.length > 0 && e.every((n) => t.includes(n)), Zm = (e, t, n) => e.length > 0 && e.every((i) => t.some((o) => n.within(i, o)));
function Hm(e, t, n = On) {
  if (e.length === 0) return { state: "not_established", reason: "The projected scope has no records.", witnesses: [] };
  const i = [];
  for (const o of e) {
    const r = Js(o);
    if (typeof r == "string")
      return { state: /reversed/.test(r) ? "contradicted" : "not_established", reason: `${String(o.id)}: ${r}`, witnesses: i };
    const s = Fi(o.allowedPropertyIris), a = Fi(o.allowedMethodIris);
    if (s.length === 0 || a.length === 0 || typeof o.matrixIri != "string" || typeof o.formIri != "string" || typeof o.quantityKindIri != "string")
      return { state: "not_established", reason: `${String(o.id)}: a restricted dimension is missing or empty.`, witnesses: i };
    const c = t.find((l) => {
      const p = Js(l);
      return typeof p != "string" && n.within(o.matrixIri, l.matrixIri) && n.within(o.formIri, l.formIri) && l.quantityKindIri === o.quantityKindIri && Zm(s, Fi(l.allowedPropertyIris), n) && Bm(a, Fi(l.allowedMethodIris)) && _e(r.low, p.low) >= 0 && _e(r.high, p.high) <= 0;
    });
    if (c === void 0)
      return { state: "contradicted", reason: `${String(o.id)} is not contained in any single parent record.`, witnesses: i };
    i.push({ child: String(o.id), parent: String(c.id) });
  }
  return { state: "established", reason: `Each projected record lies within one parent record (${i.map((o) => `${o.child} ⊆ ${o.parent}`).join("; ")}).`, witnesses: i };
}
const qn = "https://vc4qi.example/bindings/rm/1#", Rn = Object.freeze({
  issueRmCertificate: `${qn}issueRmCertificate`,
  maintainRmScope: `${qn}maintainRmScope`,
  issueRmStudy: `${qn}issueRmStudy`
}), $e = (e, t, n = []) => ({ id: e, state: "established", reason: t, sources: n }), Ge = (e, t, n = []) => ({ id: e, state: "contradicted", reason: t, sources: n }), me = (e, t, n = []) => ({ id: e, state: "not_established", reason: t, sources: n }), kt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Ve = (e) => Array.isArray(e) ? e : [], Te = (e) => kt(e.credentialSubject) ? e.credentialSubject : {}, Ks = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0, dt = (e, t) => Ve(Te(e).permittedActivity).includes(t);
function wl(e, t = "RmAuthorizationPolicy") {
  return Ve(e.termsOfUse).filter(kt).filter((n) => n.type === t && kt(n.authorizationCredential)).map((n) => n.authorizationCredential).filter((n) => typeof n.id == "string").map((n) => ({ id: n.id, type: n.type }));
}
function Ye(e, t, n, i, o, r = "RmAuthorizationPolicy") {
  const s = wl(t, r).filter((l) => l.type === n).map((l) => l.id);
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
  } } : Ks(c.document) !== n ? { basis: Ge(e, `Reference declares ${n}, but ${a} is a ${String(Ks(c.document))}.`, ["/termsOfUse", a]) } : { basis: $e(e, `References ${n} ${a}.`, ["/termsOfUse", a]), node: c };
}
function pt(e, t, n, i) {
  const o = Te(t).id;
  return typeof o != "string" || typeof n != "string" ? me(e, `${i}: grantee or exercising actor is missing.`, ["/credentialSubject/id", "/issuer"]) : o === n ? $e(e, `${i}: grantee ${o} is the exercising actor.`, ["/credentialSubject/id", "/issuer"]) : Ge(e, `${i}: grantee ${o} is not the exercising actor ${n}.`, ["/credentialSubject/id", "/issuer"]);
}
function Ln(e, t, n, i) {
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
function Jm(e, t, n, i, o) {
  const r = e.document, s = [], a = [e.uri], c = Ye("authorizing-reference", r, "RmOperationalScope", t, i);
  if (s.push(c.basis), !c.node) return pe("operational-scope", s, a);
  const l = c.node.document;
  a.push(c.node.uri), s.push(pt("principal-binding", l, r.issuer, "Operational scope O")), s.push(l.issuer === Te(l).id ? $e("self-maintained-scope", "O is issued by its own grantee.", ["/issuer"]) : Ge("self-maintained-scope", "O is not issued by its own grantee.", ["/issuer"])), s.push(dt(l, Rn.issueRmCertificate) ? $e("activity-permission", "O permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : Ge("activity-permission", "O does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"]));
  const p = Ye("maintenance-grant", l, "RmAccreditation", t, [...i, c.node.uri]);
  if (s.push(p.basis), !p.node) return pe("operational-scope", s, a);
  const g = p.node.document;
  a.push(p.node.uri), s.push(pt("accreditation-grantee", g, l.issuer, "Accreditation A")), s.push(dt(g, Rn.maintainRmScope) && dt(g, Rn.issueRmCertificate) ? $e("projection-permission", "A permits maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]) : Ge("projection-permission", "A does not permit maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]));
  const f = Hm(Ve(Te(l).scope).filter(kt), Ve(Te(g).scope).filter(kt), o);
  s.push({ id: "bounded-projection", state: f.state, reason: f.reason, sources: ["/credentialSubject/scope"] });
  const h = gr("trust-anchor", g, "accredit-rm-producers", n, t, Te(r).activityTime);
  return s.push(h.basis), h.recognition && a.push(h.recognition), s.push(Ot(r, [["O", l], ["A", g]])), pe("operational-scope", s, a, c.node.uri);
}
function Km(e, t, n, i, o) {
  const r = e.document, s = [], a = [e.uri], c = Ye("authorizing-reference", r, "RmAccreditation", t, i);
  if (s.push(c.basis), !c.node) return pe("direct-accreditation", s, a);
  const l = c.node.document;
  a.push(c.node.uri), s.push(pt("principal-binding", l, r.issuer, "Accreditation A")), s.push(dt(l, Rn.issueRmCertificate) ? $e("activity-permission", "A permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : Ge("activity-permission", "A does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"]));
  const p = gr("trust-anchor", l, "accredit-rm-producers", n, t, Te(r).activityTime);
  return s.push(p.basis), p.recognition && a.push(p.recognition), s.push(Ot(r, [["A", l]])), pe("direct-accreditation", s, a, c.node.uri);
}
const Qm = Object.freeze({
  "operational-scope": Jm,
  "direct-accreditation": Km
});
function Wm(e, t, n) {
  const i = "restriction:accreditation-suspension", o = e.document.issuer, r = /* @__PURE__ */ new Set([e.uri]), s = [e.document], a = [];
  for (; s.length > 0; )
    for (const p of wl(s.shift())) {
      if (r.has(p.id)) continue;
      r.add(p.id);
      const g = t(p.id);
      if (g?.usable !== "established" || g.document === void 0) continue;
      s.push(g.document);
      const f = g.document;
      Ks(f) === "RmAccreditation" && Te(f).id === o && gr(
        "anchor",
        f,
        "accredit-rm-producers",
        n,
        t,
        Te(e.document).activityTime
      ).basis.state === "established" && a.push(g);
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
const Xm = Object.freeze({
  "accreditation-suspension": Wm
});
function Nn(e, t, n) {
  const i = [
    ...t,
    ...n.map((l) => ({ id: l, state: "not_established", execution: "not_run", bases: [], chain: [] }))
  ], o = e.length === 0 ? "established" : xe(e.map((l) => l.state)), r = i.length === 0 ? "not_established" : pn(i.map((l) => l.state)), s = xe([o, r]), a = i.find((l) => l.state === "established"), c = s === "established" ? `Authorized through route ${a.id}; global restrictions hold.` : o === "contradicted" ? "An applicable global restriction applies to every route." : r === "contradicted" ? "Every permitted route is contradicted." : n.length > 0 ? "The route search stopped at its budget before every route was evaluated." : "No complete route is established.";
  return { state: s, reason: c, restrictions: e, routes: i };
}
function br(e, t) {
  const n = e.routes.filter((o) => o.execution === "executed").map((o) => {
    const s = (o.scope === void 0 ? void 0 : t(o)) ?? me("claim-coverage", "The route did not reach a scope credential.");
    return { ...o, bases: [...o.bases, s], state: xe([o.state, s.state]) };
  }), i = e.routes.filter((o) => o.execution === "not_run").map((o) => o.id);
  return Nn(e.restrictions, n, i);
}
function Ym(e, t, n, i = On) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] };
  const o = e, r = n.authority.certificateRoutes, s = n.authority.maxRoutes, a = r.slice(0, s).map((l) => {
    const p = Qm[l];
    return p === void 0 ? pe(l, [me("installed-evaluator", `Route ${l} has no installed evaluator.`)], [o.uri]) : p(o, t, n, [o.uri], i);
  }), c = n.authority.globalRestrictions.map((l) => {
    const p = Xm[l];
    return p === void 0 ? me(`restriction:${l}`, `Global restriction ${l} has no installed evaluator.`) : p(o, t, n);
  });
  return Nn(c, a, r.slice(s));
}
function ey(e, t, n, i, o = On) {
  const r = e.document, s = [], a = [e.uri], c = Ye("laboratory-authority-reference", r, "RmLabAuthority", t, i);
  if (s.push(c.basis), !c.node) return pe("laboratory-authority", s, a);
  const l = c.node.document;
  a.push(c.node.uri), s.push(pt("laboratory-binding", l, r.issuer, "Laboratory authority H")), s.push(dt(l, Rn.issueRmStudy) ? $e("study-permission", "H permits issuing RM studies.", ["/credentialSubject/permittedActivity"]) : Ge("study-permission", "H does not permit issuing RM studies.", ["/credentialSubject/permittedActivity"]));
  const p = Te(r), g = Ve(Te(l).scope).filter(kt).some((h) => o.within(p.matrixIri, h.matrixIri) && Ve(h.allowedPropertyIris).some((w) => o.within(p.propertyIri, w)) && Ve(h.studyTypeIris).includes(p.studyTypeIri));
  s.push(g ? $e("study-scope", "H covers this matrix, property and study type.", ["/credentialSubject/scope"]) : Ge("study-scope", "H does not cover this matrix, property and study type.", ["/credentialSubject/scope"]));
  const f = gr("laboratory-anchor", l, "accredit-rm-laboratories", n, t, p.activityTime);
  return s.push(f.basis), f.recognition && a.push(f.recognition), pe("laboratory-authority", s, a);
}
function ty(e, t, n, i = On) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const o = e.document, r = Ve(o.evidence).filter(kt).filter((v) => v.type === "RmStudyReference").map((v) => String(v.id));
  if (r.length === 0)
    return { state: "not_established", reason: "D cites no required study.", bases: [me("study-reference", "No RmStudyReference in evidence.", ["/evidence"])], chain: [e.uri] };
  if (r.length > 1)
    return { state: "not_established", reason: "Several study references; this binding has no composition for them.", bases: [me("study-reference", "Ambiguous study references.", ["/evidence"])], chain: [e.uri] };
  const s = r[0], a = t(s);
  if (a === void 0) {
    const v = me("study-reference", `Required study ${s} is unavailable.`, ["/evidence", s]);
    return { state: "not_established", reason: v.reason, bases: [v], chain: [e.uri] };
  }
  if (a.usable !== "established" || a.document === void 0) {
    const v = {
      id: "study-reference",
      state: a.usable === "contradicted" ? "contradicted" : "not_established",
      reason: `Required study ${s} is not usable: ${a.reason}`,
      sources: ["/evidence", s]
    };
    return { state: v.state, reason: v.reason, bases: [v], chain: [e.uri] };
  }
  const c = a.document, l = Te(c), p = Te(o), g = kt(Ve(p.materialPropertiesList)[0]) ? Ve(Ve(p.materialPropertiesList)[0].results)[0] : void 0, f = Ve(p.materials)[0], h = [$e("study-reference", `Cites study ${s}.`, ["/evidence", s])];
  h.push(l.id === p.id ? $e("same-batch", `S concerns batch ${String(l.id)}.`, ["/credentialSubject/id"]) : Ge("same-batch", `S concerns ${String(l.id)}, not batch ${String(p.id)}.`, ["/credentialSubject/id"])), h.push(l.propertyIri === g?.propertyIri && l.matrixIri === f?.matrixIri ? $e("same-property-and-matrix", "S concerns the certified property and matrix.", ["/credentialSubject/propertyIri"]) : Ge("same-property-and-matrix", "S concerns another property or matrix.", ["/credentialSubject/propertyIri"])), h.push(l.studyTypeIri === `${qn}Homogeneity` && l.outcomeIri === `${qn}Homogeneous` ? $e("study-outcome", "S reports the batch homogeneous.", ["/credentialSubject/outcomeIri"]) : Ge("study-outcome", "S does not report a homogeneous batch.", ["/credentialSubject/outcomeIri"]));
  const w = Date.parse(String(l.activityTime)), x = Date.parse(String(p.activityTime));
  h.push(Number.isFinite(w) && Number.isFinite(x) ? w <= x ? $e("study-precedes-certification", "The study precedes the certification activity.", ["/credentialSubject/activityTime"]) : Ge("study-precedes-certification", "The study postdates the certification activity.", ["/credentialSubject/activityTime"]) : me("study-precedes-certification", "An activity time is missing.", ["/credentialSubject/activityTime"]));
  const b = ey(a, t, n, [e.uri, s], i);
  h.push(...b.bases);
  const S = xe(h.map((v) => v.state));
  return {
    state: S,
    reason: S === "established" ? "Required study is applicable and independently authorized." : S === "contradicted" ? "Required study is contradicted." : "Required study is not established.",
    bases: h,
    chain: [e.uri, ...b.chain]
  };
}
const Ut = (e) => e !== null && typeof e == "object" && !Array.isArray(e), xl = (e) => Array.isArray(e) ? e : [], gd = (e) => xl(e).filter((t) => typeof t == "string"), le = (e) => String(e).split(/[#/]/).pop();
function ny(e, t, n) {
  const i = [t], o = Ut(e.credentialSubject) ? e.credentialSubject : {}, r = xl(o.materials).filter(Ut);
  if (r.length !== 1) return { state: "not_established", reason: "The certificate must name exactly one material.", sources: ["/credentialSubject/materials"] };
  const s = r[0];
  if (!Ut(n)) return { state: "not_established", reason: `No result at ${t}.`, sources: i };
  const a = Ut(n.data) && Ut(n.data.quantity) ? n.data.quantity : void 0;
  if (a === void 0) return { state: "not_established", reason: "The result has no quantity.", sources: i };
  const c = Ut(a.unit) ? a.unit.ucumCode : void 0;
  if (typeof c != "string" || Aa[c] === void 0)
    return { state: "not_established", reason: `Unit ${String(c)} has no supported mapping (mg/kg, kg/kg).`, sources: [`${t}/data/quantity/unit`] };
  const l = Ut(a.uncertainty) ? a.uncertainty : void 0, p = vr(l?.coverageFactor);
  if (p === void 0 || _e(p, { n: 2n, scale: 0 }) !== 0)
    return { state: "not_established", reason: `Coverage factor ${String(l?.coverageFactor)} is not the binding's k = 2.`, sources: [`${t}/data/quantity/uncertainty`] };
  const g = Tn(a.value, c), f = Tn(l?.expandedUncertainty, c);
  if (g === void 0 || f === void 0)
    return { state: "not_established", reason: "Value or expanded uncertainty is not a supported decimal.", sources: [`${t}/data/quantity`] };
  const h = {
    matrixIri: s.matrixIri,
    formIri: s.formIri,
    propertyIri: n.propertyIri,
    methodIri: n.methodIri,
    quantityKindIri: a.quantityKind
  }, w = Object.entries(h).filter(([, x]) => typeof x != "string").map(([x]) => x);
  return w.length > 0 ? { state: "not_established", reason: `Missing governed identifier: ${w.join(", ")}.`, sources: i } : {
    state: "established",
    reason: `Mapped ${le(h.propertyIri)} by ${le(h.methodIri)} in ${le(h.matrixIri)}: ${String(a.value)} ± ${String(l?.expandedUncertainty)} ${c} (k = 2).`,
    sources: i,
    coordinates: { ...h, value: g, uncertainty: f }
  };
}
function iy(e, t, n, i) {
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
function ry(e, t, n, i, o = On) {
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: ["/credentialSubject/scope"] };
  const r = t.map((c) => {
    const l = String(c.id), p = Js(c);
    if (typeof p == "string")
      return { id: l, state: /reversed/.test(p) ? "contradicted" : "not_established", reason: `${le(l)}: ${p}` };
    const g = [];
    o.within(e.matrixIri, c.matrixIri) || g.push(`matrix ${le(e.matrixIri)} ≠ ${le(c.matrixIri)}`), o.within(e.formIri, c.formIri) || g.push(`form ${le(e.formIri)} ≠ ${le(c.formIri)}`), c.quantityKindIri !== e.quantityKindIri && g.push(`quantity kind ${le(e.quantityKindIri)} ≠ ${le(c.quantityKindIri)}`), gd(c.allowedPropertyIris).some((x) => o.within(e.propertyIri, x)) || g.push(`property ${le(e.propertyIri)} is not allowed`), _e(e.value, p.low) < 0 && g.push("value is below the range"), _e(e.value, p.high) > 0 && g.push("value is above the range");
    const f = iy(e.methodIri, gd(c.allowedMethodIris), n, i);
    if (g.length > 0 || f.state === "contradicted")
      return { id: l, state: "contradicted", reason: `${le(l)}: ${[...g, ...f.state === "contradicted" ? [f.reason] : []].join("; ")}` };
    if (f.state === "not_established") return { id: l, state: "not_established", reason: `${le(l)}: ${f.reason}` };
    const h = An(Ki(p.low, "mg/kg")), w = An(Ki(p.high, "mg/kg"));
    return {
      id: l,
      state: "established",
      reason: `${le(l)} covers ${le(e.propertyIri)}, ${f.reason}, ${le(e.matrixIri)}/${le(e.formIri)}, ${An(Ki(e.value, "mg/kg"))} mg/kg within ${h}–${w} mg/kg`
    };
  }), s = pn(r.map((c) => c.state)), a = r.find((c) => c.state === "established");
  return {
    state: s,
    reason: a ? a.reason : `No single scope record covers the claim (${r.map((c) => c.reason).join(" | ")}).`,
    sources: ["/credentialSubject/scope"],
    ...a ? { record: a.id } : {}
  };
}
function Ki(e, t) {
  const n = Aa[t];
  return n >= 0 ? { n: e.n, scale: e.scale + n } : e.scale + n >= 0 ? { n: e.n, scale: e.scale + n } : { n: e.n * 10n ** BigInt(-(e.scale + n)), scale: 0 };
}
function sy(e, t, n) {
  if (e.propertyIri !== t.propertyIri || e.quantityKindIri !== t.quantityKindIri)
    return { state: "not_established", reason: `Requirement ${t.id} does not apply to this claim's property and quantity kind.`, sources: [] };
  const i = Tn(t.upperLimit.value, t.upperLimit.unit);
  if (i === void 0) return { state: "not_established", reason: `Requirement ${t.id} has an unsupported limit.`, sources: [] };
  const o = t.upperLimit.unit, r = (g) => An(Ki(g, o)), s = n.acceptWhen === "value-plus-expanded-uncertainty-at-most-limit", a = s ? Fm(e.value, e.uncertainty) : e.value, c = _e(a, i) <= 0, p = `${s ? `${r(e.value)} + ${r(e.uncertainty)} = ${r(a)}` : r(e.value)} ${c ? "≤" : ">"} ${r(i)} ${o}`;
  return {
    state: c ? "established" : "contradicted",
    reason: `${c ? "Conforms" : "Does not conform"} under ${n.id}: ${p}.`,
    sources: [],
    arithmetic: p
  };
}
const ay = /^\/credentialSubject\/materialPropertiesList\/(0|[1-9][0-9]*)\/results\/(0|[1-9][0-9]*)$/;
async function oy(e, t, n, i) {
  if (n.id !== Na || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${Na}@${n.version}.`);
  const o = xa(e, n, i);
  if (o !== void 0) return Object.freeze({ result: Sa(e, o), artifacts: Object.freeze([]) });
  const r = await Ia(e, t, n, i), { target: s, artifacts: a, facts: c, verificationOf: l, artifactVerification: p } = r, g = (j) => c.get(j), f = Vm(n.scopeAndMapping), h = Ym(c.get(e.targetId), g, i, f), w = ty(c.get(e.targetId), g, i, f), x = h.routes.find((j) => j.state === "established"), b = c.get(e.targetId)?.document, S = (Array.isArray(n.scopeAndMapping.methodRevisions) ? n.scopeAndMapping.methodRevisions : []).filter((j) => typeof j?.method == "string" && typeof j?.revises == "string"), v = (j) => {
    const D = c.get(j)?.document?.credentialSubject;
    return Array.isArray(D?.scope) ? D.scope : [];
  }, y = e.selectedClaims.map((j) => {
    if (!(b !== void 0 && ay.test(j.sourcePointer) && ln(b, j.sourcePointer) !== void 0)) {
      const U = b === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${j.sourcePointer} is not a result in the usable target.`;
      return {
        claim: j,
        mapping: void 0,
        coverage: /* @__PURE__ */ new Map(),
        result: { claimId: j.id, routeWitnessIds: [], ...ce("not_established", [U]) }
      };
    }
    const P = ny(b, j.sourcePointer, ln(b, j.sourcePointer)), G = /* @__PURE__ */ new Map();
    if (P.coordinates === void 0)
      return { claim: j, mapping: P, coverage: G, result: {
        claimId: j.id,
        routeWitnessIds: [],
        ...ce(P.state, [`Gate 4: ${P.reason}`], [j.sourcePointer])
      } };
    const O = P.coordinates, B = br(h, (U) => {
      const N = ry(O, v(U.scope), S, i.mapping.methodSuccession, f), _ = [U.scope, ...N.sources];
      return G.set(U.id, { ...N, sources: _ }), { id: "claim-coverage", state: N.state, reason: N.reason, sources: _ };
    }), T = B.routes.find((U) => U.state === "established"), M = T ? G.get(T.id)?.record : void 0;
    return { claim: j, mapping: P, coverage: G, result: {
      claimId: j.id,
      routeWitnessIds: B.state === "established" && T ? [`route:${T.id}`, ...T.chain, `record:${M}`] : [],
      ...ce(B.state, [
        B.reason,
        ...T ? [G.get(T.id).reason] : [...G].map(([U, N]) => `${U}: ${N.reason}`)
      ], [j.sourcePointer])
    } };
  }), d = y.map((j) => j.result), u = [{
    obligationId: "rm-v1:required-study",
    witnessIds: w.state === "established" ? [...w.chain] : [],
    ...ce(w.state, [w.reason], ["/evidence"])
  }], m = (() => {
    if (!e.conformity) return { requested: !1, execution: "not_run" };
    const j = { requested: !0, ...e.conformity }, D = i.conformity.requirements.find((T) => T.id === e.conformity.requirementId), P = i.conformity.decisionRules.find((T) => T.id === e.conformity.decisionRuleId);
    if (!D || !P)
      return { ...j, ...ce("not_established", [`Requirement ${e.conformity.requirementId} or decision rule ${e.conformity.decisionRuleId} is not configured in the verifier profile.`]) };
    const G = y.filter((T) => T.mapping?.coordinates?.propertyIri === D.propertyIri && T.mapping.coordinates.quantityKindIri === D.quantityKindIri);
    if (G.length !== 1)
      return { ...j, ...ce("not_established", [`Requirement ${D.id} must apply to exactly one selected claim; ${G.length} match.`]) };
    const O = G[0];
    if (O.result.state !== "established")
      return { ...j, ...un(`Not evaluated: claim ${O.claim.id} is not authorized.`) };
    const B = sy(O.mapping.coordinates, D, P);
    return { ...j, ...ce(B.state, [B.reason], [O.claim.sourcePointer]) };
  })(), I = /* @__PURE__ */ new Set([
    e.targetId,
    ...x?.chain ?? [],
    ...w.state === "established" ? w.chain : []
  ]), A = [
    ...a.filter((j) => I.has(j.artifactId)).flatMap(l).filter((j) => I.has(j.artifactId)).map((j) => j.state),
    ...d.map((j) => j.state),
    ...u.map((j) => j.state),
    ...m.requested ? [m.state] : []
  ], $ = sa(A), R = [...r.trace], E = [...r.resources], k = hr(s.artifactId, s.digestSRI, "target", e);
  for (const { claim: j, mapping: D, coverage: P } of y) {
    D && R.push({
      gate: 4,
      nodeUse: k,
      predicate: `claim-mapping:${j.id}`,
      state: D.state,
      execution: "executed",
      reason: D.reason,
      sources: [...D.sources]
    });
    for (const [G, O] of P)
      R.push({
        gate: 5,
        nodeUse: k,
        predicate: `claim-coverage:${j.id}:${G}`,
        state: O.state,
        execution: "executed",
        reason: O.reason,
        sources: [...O.sources]
      });
  }
  for (const j of d)
    R.push({
      gate: 5,
      nodeUse: k,
      predicate: `claim-authorization:${j.claimId}`,
      state: j.state,
      execution: j.execution,
      reason: j.reasons.join(" "),
      sources: [...j.sourcePointers]
    });
  for (const j of h.restrictions)
    R.push({
      gate: 5,
      nodeUse: k,
      predicate: j.id,
      state: j.state,
      execution: "executed",
      reason: j.reason,
      sources: [...j.sources]
    });
  R.push({
    gate: 5,
    nodeUse: k,
    predicate: "authority",
    state: h.state,
    execution: "executed",
    reason: h.reason,
    sources: x ? [...x.chain] : []
  });
  for (const j of h.routes) {
    R.push(j.execution === "not_run" ? {
      gate: 5,
      nodeUse: k,
      predicate: `route:${j.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: k,
      predicate: `route:${j.id}`,
      state: j.state,
      execution: "executed",
      reason: `Route ${j.id} is ${j.state}.`,
      sources: [...j.chain]
    });
    for (const D of j.bases)
      R.push({
        gate: 5,
        nodeUse: k,
        predicate: `route:${j.id}:${D.id}`,
        state: D.state,
        execution: "executed",
        reason: D.reason,
        sources: [...D.sources]
      });
  }
  for (const j of w.bases)
    R.push({
      gate: 6,
      nodeUse: k,
      predicate: `support:${j.id}`,
      state: j.state,
      execution: "executed",
      reason: j.reason,
      sources: [...j.sources]
    });
  for (const j of u)
    R.push({
      gate: 6,
      nodeUse: k,
      predicate: j.obligationId,
      state: j.state,
      execution: j.execution,
      reason: j.reasons.join(" "),
      sources: []
    });
  m.requested && R.push({
    gate: 6,
    nodeUse: k,
    predicate: `conformity:${m.requirementId}`,
    state: m.state,
    execution: m.execution,
    reason: m.reasons.join(" "),
    sources: []
  });
  const L = ar({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: p,
    authorization: d,
    support: u,
    conformity: m,
    decision: $,
    trace: R,
    resources: E,
    limitations: [
      "Verification failures of credentials outside the selected route and support chains are reported but do not decide the request."
    ]
  });
  return Object.freeze({ result: L, artifacts: Object.freeze(a) });
}
const Qs = "https://vc4qi.example/bindings/cal/1", cy = "https://vc4qi.example/contexts/cal/1", Ws = "https://vc4qi.example/bindings/cal/1#", tn = "https://vc4qi.example/schemas/cal/1/", dy = Object.freeze({
  name: "calibration v1",
  schemas: Object.freeze({
    CalAccreditation: `${tn}accreditation.json`,
    CalOperationalScope: `${tn}operational-scope.json`,
    CalLegalMandate: `${tn}legal-mandate.json`,
    CalCertificate: `${tn}certificate.json`,
    CalTestReport: `${tn}test-report.json`,
    BitstringStatusListCredential: `${tn}status-list.json`
  }),
  contexts: (e) => e === "BitstringStatusListCredential" ? [Ft] : [Ft, cy]
}), Pe = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Be = (e) => Array.isArray(e) ? e : [], ae = (e) => String(e).split(/[#/]/).pop(), ly = Object.freeze({ Pa: 0, kPa: 3, MPa: 6 });
function Xe(e, t) {
  const n = vr(e), i = typeof t == "string" ? ly[t] : void 0;
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
    const a = Pe(s) ? s : {}, c = vr(a.coverageFactor);
    if (c === void 0 || _e(c, { n: 2n, scale: 0 }) !== 0)
      return { state: "not_established", reason: `Result ${r}: coverage factor ${String(a.coverageFactor)} is not the binding's k = 2.`, sources: n };
    const l = Xe(a.value, a.unit), p = Xe(a.expandedUncertainty, a.unit);
    if (l === void 0 || p === void 0)
      return { state: "not_established", reason: `Result ${r}: unit ${String(a.unit)} or a number has no supported mapping (Pa, kPa, MPa).`, sources: n };
    i.push({ value: l, uncertainty: p });
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
    const c = String(a.id), l = Pe(a.range) ? a.range : {}, p = Xe(l.from, l.unit), g = Xe(l.to, l.unit);
    if (p === void 0 || g === void 0) return { id: c, state: "not_established", reason: `${ae(c)}: unsupported or malformed range.` };
    if (_e(p, g) > 0) return { id: c, state: "contradicted", reason: `${ae(c)}: range is reversed.` };
    const f = Pe(a.cmcFloor) ? a.cmcFloor : void 0, h = f === void 0 ? void 0 : Xe(f.value, f.unit);
    if (f !== void 0 && h === void 0) return { id: c, state: "not_established", reason: `${ae(c)}: unsupported CMC floor.` };
    const w = [];
    a.quantityKindIri !== e.quantityKindIri && w.push(`quantity kind ${ae(e.quantityKindIri)} ≠ ${ae(a.quantityKindIri)}`);
    const x = Be(a.allowedMethodIris).filter((S) => typeof S == "string"), b = e.methodIris.filter((S) => !x.includes(S));
    return b.length > 0 && w.push(`method ${b.map(ae).join(", ")} is not allowed`), e.results.forEach((S, v) => {
      (_e(S.value, p) < 0 || _e(S.value, g) > 0) && w.push(`result ${v} ${je(S.value)} kPa is outside ${je(p)}–${je(g)} kPa`), n && h !== void 0 && _e(S.uncertainty, h) < 0 && w.push(`result ${v} U = ${je(S.uncertainty)} kPa is below the admitted CMC ${je(h)} kPa`);
    }), w.length > 0 ? { id: c, state: "contradicted", reason: `${ae(c)}: ${w.join("; ")}` } : e.methodIris.length === 0 && x.length > 0 ? {
      id: c,
      state: "not_established",
      reason: `${ae(c)} restricts methods to [${x.map(ae).join(", ")}], but the group names no governed method.`
    } : {
      id: c,
      state: "established",
      reason: `${ae(c)} covers ${ae(e.id)}: ${ae(e.quantityKindIri)}, methods [${e.methodIris.map(ae).join(", ")}], ${e.results.length} result(s) within ${je(p)}–${je(g)} kPa${n && h !== void 0 ? ` and not below the CMC ${je(h)} kPa` : ""}`
    };
  }), r = pn(o.map((a) => a.state)), s = o.find((a) => a.state === "established");
  return s ? { state: r, reason: s.reason, sources: i, record: s.id } : { state: r, reason: `No single scope record covers the group (${o.map((a) => a.reason).join(" | ")}).`, sources: i };
}
function uy(e, t, n) {
  const i = ["/credentialSubject/scope"];
  if (e.length === 0) return { state: "not_established", reason: "The operational scope has no records.", sources: i };
  const o = e.map((s) => {
    const a = Pe(s.range) ? s.range : {}, c = Xe(a.from, a.unit), l = Xe(a.to, a.unit), p = Pe(s.cmcFloor) ? s.cmcFloor : void 0, g = p === void 0 ? void 0 : Xe(p.value, p.unit);
    if (c === void 0 || l === void 0 || p !== void 0 && g === void 0)
      return { state: "not_established", reason: `${ae(s.id)}: unsupported or malformed range or CMC floor.` };
    const f = Be(s.allowedMethodIris), h = t.map((x) => {
      const b = Pe(x.range) ? x.range : {}, S = Xe(b.from, b.unit), v = Xe(b.to, b.unit), y = Pe(x.cmcFloor) ? x.cmcFloor : void 0, d = y === void 0 ? void 0 : Xe(y.value, y.unit);
      if (S === void 0 || v === void 0 || y !== void 0 && d === void 0)
        return { state: "not_established", reason: `${ae(x.id)}: unsupported or malformed range or CMC floor.` };
      const u = [];
      s.quantityKindIri !== x.quantityKindIri && u.push(`quantity kind ${ae(s.quantityKindIri)} ≠ ${ae(x.quantityKindIri)}`);
      const m = Be(x.allowedMethodIris), I = f.filter((A) => !m.includes(A));
      return f.length === 0 && m.length > 0 && u.push("the parent restricts methods, the child does not"), I.length > 0 && u.push(`method ${I.map(ae).join(", ")} is not in ${ae(x.id)}`), (_e(c, S) < 0 || _e(l, v) > 0) && u.push(`range ${je(c)}–${je(l)} kPa is not within ${je(S)}–${je(v)} kPa`), n && d !== void 0 && (g === void 0 ? u.push(`it states no CMC floor, but ${ae(x.id)} admits only ${je(d)} kPa`) : _e(g, d) < 0 && u.push(`CMC ${je(g)} kPa is below the admitted ${je(d)} kPa`)), u.length > 0 ? { state: "contradicted", reason: `${ae(s.id)} widens ${ae(x.id)}: ${u.join("; ")}` } : { state: "established", reason: `${ae(s.id)} lies within ${ae(x.id)}` };
    });
    if (h.length === 0) return { state: "not_established", reason: "The parent grant has no records." };
    const w = pn(h.map((x) => x.state));
    return w === "established" ? h.find((x) => x.state === "established") : { state: w, reason: h.map((x) => x.reason).join(" | ") };
  }), r = Ra(o.map((s) => s.state));
  return { state: r, reason: `${r === "established" ? "Bounded projection holds" : "Bounded projection fails"}: ${o.map((s) => s.reason).join("; ")}.`, sources: i };
}
const Bt = (e) => Pe(e.credentialSubject) ? e.credentialSubject : {}, qa = (e, t, n, i, o) => dt(t, `${Ws}${n}`) ? { id: e, state: "established", reason: `${o} permits ${i}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: e, state: "contradicted", reason: `${o} does not permit ${i}.`, sources: ["/credentialSubject/permittedActivity"] }, py = Object.freeze({
  CalCertificate: { activity: "issueCalibrationCertificate", what: "issuing calibration certificates", purpose: "accredit-calibration-laboratories" },
  CalTestReport: { activity: "issueTestReport", what: "issuing test reports", purpose: "accredit-testing-laboratories" }
}), rr = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0;
function fy(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = py[rr(i) ?? ""];
  if (s === void 0)
    return pe("direct-accreditation", [{
      id: "target-type",
      state: "not_established",
      reason: `No accreditation activity is installed for ${String(rr(i))}.`,
      sources: ["/type"]
    }], r);
  const a = Ye("authorizing-reference", i, "CalAccreditation", t, [e.uri], "CalAuthorizationPolicy");
  if (o.push(a.basis), !a.node) return pe("direct-accreditation", o, r);
  const c = a.node.document;
  return r.push(a.node.uri), o.push(pt("principal-binding", c, i.issuer, "Accreditation CA")), o.push(qa("activity-permission", c, s.activity, s.what, "CA")), o.push(Ln("trust-anchor", c, s.purpose, n)), o.push(Ot(i, [["CA", c]])), pe("direct-accreditation", o, r, a.node.uri);
}
function hy(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = Ye("authorizing-reference", i, "CalOperationalScope", t, [e.uri], "CalAuthorizationPolicy");
  if (o.push(s.basis), !s.node) return pe("operational-scope", o, r);
  const a = s.node.document;
  r.push(s.node.uri), o.push(pt("principal-binding", a, i.issuer, "Operational scope O")), o.push(a.issuer === Bt(a).id ? { id: "self-maintained-scope", state: "established", reason: "O is issued by its own grantee.", sources: ["/issuer"] } : { id: "self-maintained-scope", state: "contradicted", reason: "O is not issued by its own grantee.", sources: ["/issuer"] }), o.push(qa("activity-permission", a, "issueCalibrationCertificate", "issuing calibration certificates", "O"));
  const c = Ye("maintenance-grant", a, "CalAccreditation", t, [e.uri, s.node.uri], "CalAuthorizationPolicy");
  if (o.push(c.basis), !c.node) return pe("operational-scope", o, r);
  const l = c.node.document;
  r.push(c.node.uri), o.push(pt("accreditation-grantee", l, a.issuer, "Accreditation CA")), o.push(dt(l, `${Ws}maintainCalibrationScope`) && dt(l, `${Ws}issueCalibrationCertificate`) ? { id: "projection-permission", state: "established", reason: "CA permits maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] } : { id: "projection-permission", state: "contradicted", reason: "CA does not permit maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] });
  const p = uy(
    Be(Bt(a).scope).filter(Pe),
    Be(Bt(l).scope).filter(Pe),
    n.bindingRules.applyCmcFloor === !0
  );
  return o.push({ id: "bounded-projection", state: p.state, reason: p.reason, sources: p.sources }), o.push(Ln("trust-anchor", l, "accredit-calibration-laboratories", n)), o.push(Ot(i, [["O", a], ["CA", l]])), pe("operational-scope", o, r, s.node.uri);
}
function my(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = Ye("authorizing-reference", i, "CalLegalMandate", t, [e.uri], "CalAuthorizationPolicy");
  if (o.push(s.basis), !s.node) return pe("statutory-mandate", o, r);
  const a = s.node.document;
  return r.push(s.node.uri), o.push(pt("principal-binding", a, i.issuer, "Mandate M")), o.push(qa("activity-permission", a, "issueCalibrationCertificate", "issuing calibration certificates", "M")), o.push(Ln("trust-anchor", a, "designate-national-metrology-institutes", n)), o.push(Ot(i, [["M", a]])), pe("statutory-mandate", o, r, s.node.uri);
}
const Al = Object.freeze({
  "direct-accreditation": fy,
  "operational-scope": hy,
  "statutory-mandate": my
}), Ra = (e) => e.length === 0 ? "not_established" : xe(e);
function yy(e, t, n, i) {
  const o = n.authority.certificateRoutes, r = o.slice(0, n.authority.maxRoutes).map((g) => {
    const f = Al[g];
    return f === void 0 ? pe(g, [{ id: "installed-evaluator", state: "not_established", reason: `Route ${g} has no installed evaluator.`, sources: [] }], [e.uri]) : f(e, t, n);
  }), s = Nn([], r, o.slice(n.authority.maxRoutes)), a = Be(Bt(e.document).measurementGroups);
  if (a.length === 0)
    return { state: "not_established", reason: "The certificate has no measurement groups.", chain: [e.uri], bases: [] };
  const c = [];
  let l = [e.uri];
  a.forEach((g, f) => {
    const h = `/credentialSubject/measurementGroups/${f}`, w = Sl(g, h);
    if (w.group === void 0) {
      c.push({ id: `group-${f}`, state: w.state, reason: `Group ${f}: ${w.reason}`, sources: [h] });
      return;
    }
    const x = w.group, b = br(s, (y) => {
      const d = Be(Bt(t(y.scope)?.document ?? {}).scope).filter(Pe), u = Il(x, d, i);
      return { id: "claim-coverage", state: u.state, reason: u.reason, sources: [y.scope, ...u.sources] };
    }), S = b.routes.find((y) => y.state === "established");
    S && (l = S.chain);
    const v = S ? `through ${S.id}` : b.routes.map((y) => `${y.id} ${y.state}: ${y.bases.filter((d) => d.state !== "established").map((d) => d.reason).join(" ")}`).join(" | ");
    c.push({ id: `group-${f}`, state: b.state, reason: `Group ${f} (${ae(x.id)}) is ${b.state} ${v}`.trim(), sources: [h] });
  });
  const p = Ra(c.map((g) => g.state));
  return { state: p, reason: `The certificate's own authority is ${p}.`, chain: l, bases: c };
}
function gy(e, t, n, i) {
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
  const l = c.document;
  if (rr(l) !== "CalCertificate")
    return r({ id: "calibration-reference", state: "contradicted", reason: `${a} is a ${String(rr(l))}, not a calibration certificate.`, sources: ["/evidence", a] });
  const p = Bt(o), g = Bt(l), f = [{ id: "calibration-reference", state: "established", reason: `Cites calibration ${a}.`, sources: ["/evidence", a] }];
  f.push(typeof p.instrumentIri != "string" ? { id: "same-instrument", state: "not_established", reason: "The report names no instrument.", sources: ["/credentialSubject/instrumentIri"] } : g.id === p.instrumentIri ? { id: "same-instrument", state: "established", reason: `The calibration concerns instrument ${String(p.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] } : { id: "same-instrument", state: "contradicted", reason: `The calibration concerns ${String(g.id)}, not instrument ${String(p.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] });
  const h = Be(p.measurementGroups).filter(Pe).map((m) => m.quantityKindIri), w = Be(g.measurementGroups).filter(Pe).map((m) => m.quantityKindIri), x = h.filter((m) => !w.includes(m));
  f.push(h.length > 0 && x.length === 0 ? { id: "same-quantity", state: "established", reason: `The calibration covers ${[...new Set(h.map(ae))].join(", ")}.`, sources: ["/credentialSubject/measurementGroups"] } : {
    id: "same-quantity",
    state: h.length === 0 ? "not_established" : "contradicted",
    reason: h.length === 0 ? "The report has no measurement groups." : `The calibration does not cover ${x.map(ae).join(", ")}.`,
    sources: ["/credentialSubject/measurementGroups"]
  });
  const b = Date.parse(String(p.activityTime)), S = Date.parse(String(g.activityTime)), v = Date.parse(String(l.validFrom)), y = Date.parse(String(l.validUntil));
  !Number.isFinite(b) || !Number.isFinite(S) ? f.push({ id: "calibration-precedes-use", state: "not_established", reason: "An activity time is missing.", sources: ["/credentialSubject/activityTime"] }) : (f.push(S <= b ? { id: "calibration-precedes-use", state: "established", reason: `Calibrated at ${String(g.activityTime)}, before the test at ${String(p.activityTime)}.`, sources: ["/credentialSubject/activityTime"] } : { id: "calibration-precedes-use", state: "contradicted", reason: `Calibrated at ${String(g.activityTime)}, after the test at ${String(p.activityTime)}.`, sources: ["/credentialSubject/activityTime"] }), f.push(Number.isFinite(v) && Number.isFinite(y) && v <= b && b <= y ? { id: "calibration-valid-at-use", state: "established", reason: "The calibration certificate was valid at the test.", sources: ["/validFrom", "/validUntil"] } : { id: "calibration-valid-at-use", state: "contradicted", reason: `The calibration certificate (valid ${String(l.validFrom)} to ${String(l.validUntil)}) was not valid at the test at ${String(p.activityTime)}.`, sources: ["/validFrom", "/validUntil"] }));
  const d = yy(c, t, n, i);
  f.push({ id: "calibration-authority", state: d.state, reason: d.reason, sources: [a] }, ...d.bases.map((m) => ({ ...m, id: `calibration-authority:${m.id}` })));
  const u = Ra(f.map((m) => m.state));
  return {
    state: u,
    reason: u === "established" ? "The instrument calibration is applicable and independently authorized." : u === "contradicted" ? "The instrument calibration is contradicted." : "The instrument calibration is not established.",
    bases: f,
    chain: [e.uri, ...d.chain]
  };
}
const vy = /^\/credentialSubject\/measurementGroups\/(0|[1-9][0-9]*)$/;
function by(e) {
  const t = e.bindingRules.applyCmcFloor;
  if (typeof t != "boolean")
    throw new Error(`Profile ${e.id}@${e.version} must state bindingRules.applyCmcFloor for ${Qs}.`);
  return t;
}
async function wy(e, t, n, i) {
  if (n.id !== Qs || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${Qs}@${n.version}.`);
  const o = by(i), r = xa(e, n, i);
  if (r !== void 0) return Object.freeze({ result: Sa(e, r), artifacts: Object.freeze([]) });
  const s = await Ia(e, t, n, i, dy), { target: a, artifacts: c, facts: l, verificationOf: p, artifactVerification: g } = s, f = (D) => l.get(D), h = l.get(e.targetId), w = i.authority.certificateRoutes, x = h.document === void 0 ? [] : w.slice(0, i.authority.maxRoutes).map((D) => {
    const P = Al[D];
    return P === void 0 ? {
      id: D,
      state: "not_established",
      execution: "executed",
      chain: [h.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${D} has no installed evaluator.`, sources: [] }]
    } : P(h, f, i);
  }), b = h.document === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : Nn([], x, w.slice(i.authority.maxRoutes)), S = b.routes.find((D) => D.state === "established"), v = (D) => {
    const P = l.get(D)?.document?.credentialSubject;
    return Array.isArray(P?.scope) ? P.scope : [];
  }, y = h.document, d = e.selectedClaims.map((D) => {
    const P = /* @__PURE__ */ new Map();
    if (y === void 0 || !vy.test(D.sourcePointer) || ln(y, D.sourcePointer) === void 0) {
      const M = y === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${D.sourcePointer} is not a measurement group in the usable target.`;
      return { claim: D, mapping: void 0, coverage: P, result: { claimId: D.id, routeWitnessIds: [], ...ce("not_established", [M]) } };
    }
    const G = Sl(ln(y, D.sourcePointer), D.sourcePointer);
    if (G.group === void 0)
      return { claim: D, mapping: G, coverage: P, result: {
        claimId: D.id,
        routeWitnessIds: [],
        ...ce(G.state, [`Gate 4: ${G.reason}`], [D.sourcePointer])
      } };
    const O = G.group, B = br(b, (M) => {
      const U = Il(O, v(M.scope), o), N = [M.scope, ...U.sources];
      return P.set(M.id, { ...U, sources: N }), { id: "claim-coverage", state: U.state, reason: U.reason, sources: N };
    }), T = B.routes.find((M) => M.state === "established");
    return { claim: D, mapping: G, coverage: P, result: {
      claimId: D.id,
      routeWitnessIds: B.state === "established" && T ? [`route:${T.id}`, ...T.chain, `record:${P.get(T.id)?.record}`] : [],
      ...ce(B.state, [
        B.reason,
        ...T ? [P.get(T.id).reason] : [...P].map(([M, U]) => `${M}: ${U.reason}`)
      ], [D.sourcePointer])
    } };
  }), u = d.map((D) => D.result), I = Array.isArray(y?.type) && y.type[1] === "CalTestReport" ? gy(h, f, i, o) : void 0, A = I === void 0 ? [] : [{
    obligationId: "cal-v1:instrument-calibration",
    witnessIds: I.state === "established" ? [...I.chain] : [],
    ...ce(I.state, [I.reason], ["/evidence"])
  }], $ = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...ce("not_established", ["The calibration v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, R = /* @__PURE__ */ new Set([
    e.targetId,
    ...S?.chain ?? [],
    ...I?.state === "established" ? I.chain : []
  ]), E = [
    ...c.filter((D) => R.has(D.artifactId)).flatMap(p).map((D) => D.state),
    ...u.map((D) => D.state),
    ...A.map((D) => D.state),
    ...$.requested ? [$.state] : []
  ], k = [...s.trace], L = hr(a.artifactId, a.digestSRI, "target", e);
  for (const { claim: D, mapping: P, coverage: G } of d) {
    P && k.push({
      gate: 4,
      nodeUse: L,
      predicate: `claim-mapping:${D.id}`,
      state: P.state,
      execution: "executed",
      reason: P.reason,
      sources: [...P.sources]
    });
    for (const [O, B] of G)
      k.push({
        gate: 5,
        nodeUse: L,
        predicate: `claim-coverage:${D.id}:${O}`,
        state: B.state,
        execution: "executed",
        reason: B.reason,
        sources: [...B.sources]
      });
  }
  for (const D of u)
    k.push({
      gate: 5,
      nodeUse: L,
      predicate: `claim-authorization:${D.claimId}`,
      state: D.state,
      execution: D.execution,
      reason: D.reasons.join(" "),
      sources: [...D.sourcePointers]
    });
  k.push({
    gate: 5,
    nodeUse: L,
    predicate: "authority",
    state: b.state,
    execution: "executed",
    reason: b.reason,
    sources: S ? [...S.chain] : []
  });
  for (const D of b.routes) {
    k.push(D.execution === "not_run" ? {
      gate: 5,
      nodeUse: L,
      predicate: `route:${D.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: L,
      predicate: `route:${D.id}`,
      state: D.state,
      execution: "executed",
      reason: `Route ${D.id} is ${D.state}.`,
      sources: [...D.chain]
    });
    for (const P of D.bases)
      k.push({
        gate: 5,
        nodeUse: L,
        predicate: `route:${D.id}:${P.id}`,
        state: P.state,
        execution: "executed",
        reason: P.reason,
        sources: [...P.sources]
      });
  }
  for (const D of I?.bases ?? [])
    k.push({
      gate: 6,
      nodeUse: L,
      predicate: `support:${D.id}`,
      state: D.state,
      execution: "executed",
      reason: D.reason,
      sources: [...D.sources]
    });
  for (const D of A)
    k.push({
      gate: 6,
      nodeUse: L,
      predicate: D.obligationId,
      state: D.state,
      execution: D.execution,
      reason: D.reasons.join(" "),
      sources: []
    });
  $.requested && k.push({
    gate: 6,
    nodeUse: L,
    predicate: `conformity:${$.requirementId}`,
    state: $.state,
    execution: $.execution,
    reason: $.reasons.join(" "),
    sources: []
  });
  const j = ar({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: g,
    authorization: u,
    support: A,
    conformity: $,
    decision: sa(E),
    trace: k,
    resources: s.resources,
    limitations: [
      "Each selected measurement group is a separate required claim; the decision is their conjunction.",
      "Verification failures of credentials outside the selected route and support chains are reported but do not decide the request.",
      "The calibration v1 binding carries a JSON-LD simplification of DCC results, not native DCC XML.",
      "Fixture grants are fictional: an accreditation or statutory mandate here has no legal effect."
    ]
  });
  return Object.freeze({ result: j, artifacts: Object.freeze([...c]) });
}
const vd = "https://vc4qi.example/bindings/gs/1", xy = "https://vc4qi.example/contexts/gs/1", wr = "https://vc4qi.example/bindings/gs/1#", _t = "https://vc4qi.example/schemas/gs/1/", Sy = Object.freeze({
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
  contexts: (e) => e === "BitstringStatusListCredential" ? [Ft] : [Ft, xy]
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
  const i = ["/credentialSubject/scope"], { productCategoryIri: o, standardIris: r } = e, s = t.map((f) => {
    const h = String(f.id), w = Ue(f.standardIris);
    if (f.productCategoryIri !== o)
      return { id: h, state: "contradicted", reason: `${X(h)}: category ${X(o)} ≠ ${X(f.productCategoryIri)}` };
    const x = r.filter((b) => !w.includes(b));
    return x.length > 0 ? { id: h, state: "contradicted", reason: `${X(h)}: standard ${x.map(X).join(", ")} is not in the accredited scope` } : r.length === 0 && w.length > 0 ? { id: h, state: "not_established", reason: `${X(h)} restricts standards, but the certification names none` } : { id: h, state: "established", reason: `${X(h)} covers ${X(o)} against [${r.map(X).join(", ")}]` };
  }), a = n.map((f) => {
    const h = String(f.id);
    return f.productCategoryIri === o ? { id: h, state: "established", reason: `${X(h)} permits the GS mark for ${X(o)}` } : { id: h, state: "contradicted", reason: `${X(h)}: category ${X(o)} ≠ ${X(f.productCategoryIri)}` };
  }), c = (f, h) => {
    if (h.length === 0) return { state: "not_established", reason: `The ${f} scope has no records.`, record: void 0 };
    const w = h.find((x) => x.state === "established");
    return w ? { state: "established", reason: w.reason, record: w.id } : { state: pn(h.map((x) => x.state)), reason: `No single ${f} record covers it (${h.map((x) => x.reason).join(" | ")})`, record: void 0 };
  }, l = c("competence", s), p = c("scheme", a), g = xe([l.state, p.state]);
  return {
    state: g,
    reason: `Competence: ${l.reason}. Scheme: ${p.reason}.`,
    sources: i,
    ...g === "established" ? { records: [l.record, p.record] } : {}
  };
}
function jl(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = (l, p, g, f, h, w) => {
    const x = Ye(`${l}-reference`, i, p, t, [e.uri], "GsAuthorizationPolicy");
    if (o.push(x.basis), !x.node) return;
    const b = x.node.document;
    return o.push(pt(`${l}-grantee`, b, i.issuer, w)), o.push(dt(b, `${wr}${g}`) ? { id: `${l}-permission`, state: "established", reason: `${w} permits ${f}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: `${l}-permission`, state: "contradicted", reason: `${w} does not permit ${f}.`, sources: ["/credentialSubject/permittedActivity"] }), o.push(Ln(`${l}-anchor`, b, h, n)), x.node;
  }, a = s("competence", "GsAccreditation", "certifyProducts", "certifying products", "accredit-certification-bodies", "Accreditation GS-A"), c = s("scheme", "GsSchemeAuthorization", "awardGsMark", "awarding the GS mark", "authorize-gs-certification", "Scheme authorization GS-S");
  return !a || !c ? pe("competence-and-scheme-permission", o, r) : (r.push(a.uri, c.uri), o.push(Ot(i, [["GS-A", a.document], ["GS-S", c.document]])), pe("competence-and-scheme-permission", o, r, a.uri));
}
function $l(e, t) {
  const n = (i) => i === void 0 ? [] : Ue(ut(t(i)?.document ?? {}).scope).filter(lt);
  return { competence: n(e.scope), scheme: n(e.chain.length === 3 ? e.chain[2] : void 0) };
}
const Iy = `${wr}GsMark`;
function _l(e, t, n) {
  const i = [t];
  if (!lt(e) || typeof e.markIri != "string" || typeof e.productModelIri != "string")
    return { state: "not_established", reason: "The selected marking names no mark or product model.", sources: i };
  if (e.markIri !== Iy)
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
  const l = jl(s.node, t, n);
  o.push(...l.bases.map((f) => ({ ...f, id: `certificate:${f.id}` })));
  const p = ql(ut(a).certification, "/credentialSubject/certification"), g = p.certification === void 0 ? { state: p.state, reason: p.reason } : (() => {
    const { competence: f, scheme: h } = $l(l, t);
    return Rl(p.certification, f, h);
  })();
  return o.push({ id: "certificate:claim-coverage", state: g.state, reason: g.reason, sources: ["/credentialSubject/certification"] }), r.push(...l.chain.slice(1)), pe("gs-certified-product", o, r, s.node.uri);
}
const Ay = `${wr}Pass`, qy = [
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
function Ry(e, t, n) {
  const i = e.document, o = ut(i), r = lt(o.certification) ? o.certification : {};
  return qy.map(({ obligationId: s, reference: a, type: c, activity: l, purpose: p, what: g }) => {
    const f = [], h = (A) => {
      const $ = xe(f.map((E) => E.state)), R = f.find((E) => E.state === $ && $ !== "established");
      return {
        obligationId: s,
        state: $,
        bases: f,
        chain: A,
        reason: $ === "established" ? `The ${g} applies and is independently authorized.` : `The ${g}: ${R?.reason ?? "not established"}`
      };
    }, w = Ue(i.evidence).filter(lt).filter((A) => A.type === a).map((A) => String(A.id));
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
    const S = b.document, v = ut(S), y = Ue(S.type);
    if (f.push(Me("reference", y.includes(c), `Cites ${g} ${X(x)}.`, `${X(x)} is not a ${c}.`, ["/evidence", x])), s === "type-examination") {
      f.push(Me(
        "same-model",
        v.productModelIri === o.id,
        `${X(x)} examined model ${X(o.id)}.`,
        `${X(x)} examined ${X(v.productModelIri)}, not model ${X(o.id)}.`,
        ["/credentialSubject/productModelIri"]
      ));
      const A = Ue(v.standardIris), $ = Ue(r.standardIris), R = $.filter((E) => !A.includes(E));
      f.push(Me(
        "covers-certification",
        v.productCategoryIri === r.productCategoryIri && R.length === 0,
        `${X(x)} covers ${X(r.productCategoryIri)} against [${$.map(X).join(", ")}].`,
        v.productCategoryIri !== r.productCategoryIri ? `${X(x)} examined ${X(v.productCategoryIri)}, not ${X(r.productCategoryIri)}.` : `${X(x)} did not examine ${R.map(X).join(", ")}.`,
        ["/credentialSubject/standardIris"]
      ));
    } else
      f.push(Me(
        "same-manufacturer",
        typeof v.manufacturerIri == "string" && typeof o.manufacturerIri == "string" ? v.manufacturerIri === o.manufacturerIri : void 0,
        `${X(x)} inspected the certificate's manufacturer.`,
        `${X(x)} inspected ${String(v.manufacturerIri)}, not the certificate's manufacturer ${String(o.manufacturerIri)}.`,
        ["/credentialSubject/manufacturerIri"]
      ));
    f.push(Me("outcome", v.outcomeIri === Ay, `${X(x)} passed.`, `${X(x)} did not pass (${X(v.outcomeIri)}).`, ["/credentialSubject/outcomeIri"]));
    const d = Date.parse(String(v.activityTime)), u = Date.parse(String(o.activityTime));
    f.push(Me(
      "precedes-certification",
      Number.isFinite(d) && Number.isFinite(u) ? d <= u : void 0,
      `The ${g} (${String(v.activityTime)}) precedes the certification.`,
      Number.isFinite(d) && Number.isFinite(u) ? `The ${g} (${String(v.activityTime)}) follows the certification (${String(o.activityTime)}).` : "An activity time is missing.",
      ["/credentialSubject/activityTime"]
    ));
    const m = Ye("accreditation-reference", S, "GsAccreditation", t, [e.uri, x], "GsAuthorizationPolicy");
    if (f.push(m.basis), !m.node) return h([x]);
    const I = m.node.document;
    if (f.push(pt("accreditation-grantee", I, S.issuer, `Accreditation ${X(m.node.uri)}`)), f.push(Me(
      "accreditation-permission",
      dt(I, `${wr}${l}`),
      `${X(m.node.uri)} permits ${l}.`,
      `${X(m.node.uri)} does not permit ${l}.`,
      ["/credentialSubject/permittedActivity"]
    )), f.push(Ln("accreditation-anchor", I, p, n)), f.push({ ...Ot(S, [[X(m.node.uri), I]]), id: "accreditation-in-force" }), s === "type-examination") {
      const A = Ue(v.standardIris), R = Ue(ut(I).scope).filter(lt).find((E) => E.productCategoryIri === v.productCategoryIri && A.every((k) => Ue(E.standardIris).includes(k)));
      f.push(Me(
        "accreditation-scope",
        R !== void 0,
        `${X(R?.id)} covers the examination.`,
        `No record of ${X(m.node.uri)} covers ${X(v.productCategoryIri)} against [${A.map(X).join(", ")}].`,
        ["/credentialSubject/scope"]
      ));
    }
    return h([x, m.node.uri]);
  });
}
function jy(e, t, n) {
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
function $y(e, t, n) {
  const i = e.document, o = ut(i), r = lt(o.complianceInformation) ? o.complianceInformation : {}, s = lt(r.gsMark) ? r.gsMark : {}, a = [], c = (v, y) => {
    const d = xe(a.map((m) => m.state)), u = a.find((m) => m.state === d && d !== "established");
    return { ...y === void 0 ? {} : { certificateUri: y }, support: {
      obligationId: "gs-mark-credential",
      state: d,
      bases: a,
      chain: v,
      reason: d === "established" ? "The GS-mark credential applies to this unit and holds its own route." : `The GS-mark credential: ${u?.reason ?? "not established"}`
    } };
  }, l = Ue(i.evidence).filter(lt).filter((v) => v.type === "GsMarkCredentialReference").map((v) => String(v.id));
  if (l.length !== 1)
    return a.push({
      id: "reference",
      state: "not_established",
      sources: ["/evidence"],
      reason: l.length === 0 ? "The passport cites no GS-mark credential." : "The passport cites several GS-mark credentials; none is chosen."
    }), c([]);
  const p = l[0], g = t(p);
  if (g === void 0 || g.usable !== "established" || g.document === void 0)
    return a.push({
      id: "reference",
      state: g?.usable === "contradicted" ? "contradicted" : "not_established",
      sources: ["/evidence", p],
      reason: g === void 0 ? `${X(p)} is unavailable.` : `${X(p)} is not usable: ${g.reason}`
    }), c([]);
  const f = g.document, h = ut(f);
  a.push(Me(
    "reference",
    Ue(f.type).includes("GsMarkCredential"),
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
  const w = _l(h.marking, "/credentialSubject/marking", h.productModelIri);
  a.push({ id: "mark-credential:mapping", state: w.state, reason: w.reason, sources: [...w.sources] }), a.push(Me(
    "same-model",
    w.marking === void 0 ? void 0 : w.marking.productModelIri === s.productModelIri && h.productModelIri === o.productModelIri,
    `${X(p)} claims the mark for the passport's model ${X(o.productModelIri)}.`,
    w.marking === void 0 ? `${X(p)} claims no mark for a model.` : `${X(p)} claims the mark for model ${X(w.marking.productModelIri)}, not the passport's model ${X(o.productModelIri)}.`,
    ["/credentialSubject/complianceInformation/gsMark/productModelIri", "/credentialSubject/productModelIri"]
  ));
  const x = Tl(g, t, n);
  a.push(...x.bases.map((v) => ({ ...v, id: `mark-credential:${v.id}` })));
  const b = x.scope === void 0 ? void 0 : t(x.scope)?.document, S = w.marking === void 0 ? { state: "not_established", reason: "No mark was mapped.", sources: [] } : Pl(w.marking, b);
  return a.push({ id: "mark-credential:claim-coverage", state: S.state, reason: S.reason, sources: [...S.sources] }), c([p, ...x.chain.slice(1)], x.scope);
}
const _y = Object.freeze({
  "competence-and-scheme-permission": jl,
  "gs-certified-product": Tl,
  "responsible-economic-operator": jy
}), Py = "/credentialSubject/certification", Ty = "/credentialSubject/marking", Xs = "/credentialSubject/complianceInformation/gsMark", Cy = { GsMarkCredential: "mark", ProductPassport: "passport" }, Ey = { certificate: Py, mark: Ty, passport: Xs };
async function ky(e, t, n, i) {
  if (n.id !== vd || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${vd}@${n.version}.`);
  const o = xa(e, n, i);
  if (o !== void 0) return Object.freeze({ result: Sa(e, o), artifacts: Object.freeze([]) });
  const r = await Ia(e, t, n, i, Sy), { target: s, artifacts: a, facts: c, verificationOf: l, artifactVerification: p } = r, g = (O) => c.get(O), f = c.get(e.targetId), h = f.document, w = i.authority.certificateRoutes, x = h === void 0 ? [] : w.slice(0, i.authority.maxRoutes).map((O) => {
    const B = _y[O];
    return B === void 0 ? {
      id: O,
      state: "not_established",
      execution: "executed",
      chain: [f.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${O} has no installed evaluator.`, sources: [] }]
    } : B(f, g, i);
  }), b = h === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : Nn([], x, w.slice(i.authority.maxRoutes)), S = b.routes.find((O) => O.state === "established"), v = Array.isArray(h?.type) && Cy[String(h.type[1])] || "certificate", y = Ey[v], d = e.selectedClaims.map((O) => {
    const B = /* @__PURE__ */ new Map();
    if (h === void 0 || O.sourcePointer !== y || ln(h, O.sourcePointer) === void 0) {
      const z = h === void 0 ? "The target is not usable, so its claims are not read." : v === "passport" ? `This binding interprets only the GS-mark entry (${Xs}) of a product passport; ${O.sourcePointer} has no interpretation here.` : `Selected claim ${O.sourcePointer} is not the ${v === "mark" ? "marking" : "certification statement"} of the usable target.`;
      return { claim: O, mapping: void 0, coverage: B, result: { claimId: O.id, routeWitnessIds: [], ...ce("not_established", [z]) } };
    }
    const T = ln(h, O.sourcePointer), M = v === "certificate" ? void 0 : _l(T, O.sourcePointer, h.credentialSubject?.productModelIri), U = M ?? ql(T, O.sourcePointer), N = M?.marking, _ = v === "certificate" ? U.certification : void 0;
    if (N === void 0 && _ === void 0)
      return { claim: O, mapping: U, coverage: B, result: {
        claimId: O.id,
        routeWitnessIds: [],
        ...ce(U.state, [`Gate 4: ${U.reason}`], [O.sourcePointer])
      } };
    const q = br(b, (z) => {
      const H = v === "passport" ? {
        state: "established",
        sources: [Xs],
        reason: "The entry is declared by the passport's responsible economic operator; it is relied on through the GS-mark credential it cites (gate 6)."
      } : N !== void 0 ? Pl(N, g(z.scope)?.document) : (() => {
        const { competence: J, scheme: V } = $l(z, g);
        return Rl(_, J, V);
      })(), Q = [...z.chain.slice(1), ...H.sources];
      return B.set(z.id, { ...H, sources: Q }), { id: "claim-coverage", state: H.state, reason: H.reason, sources: Q };
    }), C = q.routes.find((z) => z.state === "established");
    return { claim: O, mapping: U, coverage: B, result: {
      claimId: O.id,
      routeWitnessIds: q.state === "established" && C ? [`route:${C.id}`, ...C.chain, ...(B.get(C.id)?.records ?? []).map((z) => `record:${z}`)] : [],
      ...ce(q.state, [
        q.reason,
        ...C ? [B.get(C.id).reason] : [...B].map(([z, H]) => `${z}: ${H.reason}`)
      ], [O.sourcePointer])
    } };
  }), u = d.map((O) => O.result), m = v === "passport" && h !== void 0 ? $y(f, g, i) : void 0, I = h === void 0 ? void 0 : v === "passport" ? m?.certificateUri : v === "mark" ? x.find((O) => O.chain.length > 1)?.chain[1] : e.targetId, A = I === void 0 ? void 0 : g(I), $ = h === void 0 ? [] : A?.usable === "established" && A.document !== void 0 ? Ry(A, g, i) : ["type-examination", "factory-inspection"].map((O) => ({
    obligationId: O,
    state: "not_established",
    reason: "No usable GS certificate was reached, so its studies are not evaluated.",
    bases: [],
    chain: []
  })), R = [...m ? [m.support] : [], ...$], E = R.map((O) => ({
    obligationId: `gs-v1:${O.obligationId}`,
    witnessIds: O.state === "established" ? [...O.chain] : [],
    ...ce(O.state, [O.reason], ["/evidence"])
  })), k = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...ce("not_established", ["The GS v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, L = /* @__PURE__ */ new Set([
    e.targetId,
    ...S?.chain ?? [],
    ...R.filter((O) => O.state === "established").flatMap((O) => O.chain)
  ]), j = [
    ...a.filter((O) => L.has(O.artifactId)).flatMap(l).map((O) => O.state),
    ...u.map((O) => O.state),
    ...E.map((O) => O.state),
    ...k.requested ? [k.state] : []
  ], D = [...r.trace], P = hr(s.artifactId, s.digestSRI, "target", e);
  for (const { claim: O, mapping: B, coverage: T } of d) {
    B && D.push({
      gate: 4,
      nodeUse: P,
      predicate: `claim-mapping:${O.id}`,
      state: B.state,
      execution: "executed",
      reason: B.reason,
      sources: [...B.sources]
    });
    for (const [M, U] of T)
      D.push({
        gate: 5,
        nodeUse: P,
        predicate: `claim-coverage:${O.id}:${M}`,
        state: U.state,
        execution: "executed",
        reason: U.reason,
        sources: [...U.sources]
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
    sources: S ? [...S.chain] : []
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
    for (const B of O.bases)
      D.push({
        gate: 5,
        nodeUse: P,
        predicate: `route:${O.id}:${B.id}`,
        state: B.state,
        execution: "executed",
        reason: B.reason,
        sources: [...B.sources]
      });
  }
  for (const O of R)
    for (const B of O.bases)
      D.push({
        gate: 6,
        nodeUse: P,
        predicate: `support:${O.obligationId}:${B.id}`,
        state: B.state,
        execution: "executed",
        reason: B.reason,
        sources: [...B.sources]
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
  k.requested && D.push({
    gate: 6,
    nodeUse: P,
    predicate: `conformity:${k.requirementId}`,
    state: k.state,
    execution: k.execution,
    reason: k.reasons.join(" "),
    sources: []
  });
  const G = ar({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: p,
    authorization: u,
    support: E,
    conformity: k,
    decision: sa(j),
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
  return Object.freeze({ result: G, artifacts: Object.freeze([...a]) });
}
function My(e, t, n) {
  const i = JSON.parse(n), o = ia(i.verificationMethod[0].publicKeyMultibase).slice(2), r = $d(new TextEncoder().encode(`vc4qi-rm-v1-insecure-fixture-key:${e}`));
  return { id: `${t}#key-1`, controller: t, privateKey: r, publicKey: o };
}
const Oy = (e) => `${JSON.stringify(e, null, 2)}
`;
async function Cl(e, t, n, i, o, r) {
  const s = Pd(new _d(o).openSession({ maxResources: 64, maxBytes: 1e6 })), a = await em(e, My(t, n, r), { created: i, documentLoader: s, safe: !0 });
  return Oy({ ...e, proof: a });
}
function Ly(e) {
  const t = new Uint8Array(Bs / 8);
  for (const o of e) t[o >> 3] |= 128 >> (o & 7);
  const n = $m(t, { level: 9, mtime: 0 });
  let i = "";
  for (const o of n) i += String.fromCharCode(o);
  return `u${btoa(i).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")}`;
}
function Ny(e, t, n) {
  const { proof: i, ...o } = JSON.parse(e);
  return { ...o, validFrom: n, credentialSubject: { ...o.credentialSubject, encodedList: Ly(t) } };
}
const Ys = "2026-09-25T12:00:00Z", Dy = { rm: oy, cal: wy, gs: ky }, Jt = Object.fromEntries(["rm", "cal", "gs"].map((e) => [e, {
  manifest: mu(In[e].manifest),
  profiles: Object.fromEntries(Object.entries(In[e].profiles).map(([t, n]) => [t, ra(n)])),
  files: In[e].files
}])), ja = "gs-verifier-dpp-accreditation-only (demonstrator)";
{
  const e = In.gs.profiles["gs-verifier-dpp-1"];
  Jt.gs.profiles[ja] = ra({
    ...e,
    id: "https://vc4qi.example/profiles/gs-verifier-dpp-accreditation-only",
    description: "Demonstrator-only variant of gs-verifier-dpp-1 that configures the accreditation body as its only trust anchor. Fictional.",
    trustAnchors: e.trustAnchors.filter((t) => t.id !== "https://zls.vc4qi.example/controller")
  });
}
const zy = (e) => String(e).split(/[#/:]/).pop() ?? "", Ts = (e, t) => ({
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
}, bn = (e) => ({ id: `g${e + 1}`, sourcePointer: `/credentialSubject/measurementGroups/${e}` }), Uy = [
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
}), Cs = (e, t, n, i, o) => ({
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
}), xn = (e) => ({ uri: e, label: "Withhold the type examination" }), Es = (e) => ({ uri: e, label: "Withhold the GS-mark credential" }), bd = [
  {
    id: "rm",
    tab: "RM",
    title: "Certified reference material",
    intro: "M375a, leaded brass: may I rely on the certified arsenic value?",
    caseLabel: "Certified As mass fraction (mg/kg)",
    cases: [Ts("178", "certificate"), Ts("197", "hypothetical"), Ts("520", "hypothetical")],
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
    cases: Uy,
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
      Cs("unit", "Unit sn-0042", "its own GS-mark credential", "https://maker.vc4qi.example/credentials/DPP-1", Es(at.M1)),
      Cs("early", "Unit sn-0001", "on market before certification", "https://maker.vc4qi.example/credentials/DPP-2", Es(at.M4)),
      Cs("borrowed", "Unit sn-0050", "cites another unit's credential", "https://maker.vc4qi.example/credentials/DPP-3", Es(at.M1))
    ],
    choice: { label: "The verifier trusts", options: [
      { id: "both", label: "Accreditation body and scheme owner", sublabel: "gs-verifier-dpp-1" },
      { id: "accreditation-only", label: "Accreditation body only", sublabel: "no scheme-owner anchor" }
    ] },
    note: "An experimental product passport shaped after the EU Digital Product Passport (ESPR): unique product identifier, GTIN, commodity code, economic operator and facility, technical and sustainability data, and compliance information. Its GS-mark entry is supported by the unit's GS-mark credential, which keeps its own authority route. The GS binding evaluates only that entry. Not ESPR conformance; identifiers are fictional, and today's GS scheme has no per-unit credential. All parties and keys are fictional."
  }
], Vy = {
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
  return n === void 0 ? String(t).split("#")[0].split(":").pop() : Vy[n] ?? n;
}, Gy = {
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
function Fy(e, t, n, i, o) {
  const r = /* @__PURE__ */ new Map();
  for (const [x, b] of Object.entries(t))
    try {
      r.set(x, JSON.parse(b));
    } catch {
    }
  const s = (x) => [
    ...(x?.termsOfUse ?? []).map((b) => b.authorizationCredential?.id).filter((b) => typeof b == "string").map((b) => ({ to: b, kind: "authority" })),
    ...(x?.evidence ?? []).map((b) => b.id).filter((b) => typeof b == "string").map((b) => ({ to: b, kind: "support" }))
  ], a = new Map(n.artifactVerification.map((x) => [x.artifactId, x.state])), c = n.decision === "accept" ? /* @__PURE__ */ new Set([...n.authorization.flatMap((x) => x.routeWitnessIds), ...n.support.flatMap((x) => x.witnessIds)]) : void 0, l = /* @__PURE__ */ new Map([[e, 0]]), p = /* @__PURE__ */ new Set(), g = [], f = [[e, !1]], h = /* @__PURE__ */ new Set();
  for (; f.length > 0; ) {
    const [x, b] = f.shift();
    for (const { to: S, kind: v } of s(r.get(x))) {
      const y = `${x}>${S}`, d = b || v === "support";
      h.has(y) || (h.add(y), g.push({
        from: x,
        to: S,
        kind: v,
        state: x === e ? v === "support" ? o : i : c && !c.has(S) ? "unused" : a.get(S) ?? "not_established"
      }));
      const u = (l.get(x) ?? 0) + 1;
      (l.get(S) ?? -1) < u && u < 8 ? (l.set(S, u), f.push([S, d])) : d && !p.has(S) && p.add(S);
    }
  }
  return { nodes: [...l].map(([x, b]) => {
    const S = r.get(x), v = Array.isArray(S?.type) ? String(S.type[1]) : "", y = S?.credentialSubject ?? {};
    return {
      uri: x,
      name: zy(x),
      role: Gy[v] ?? (v || "not supplied"),
      layer: b,
      present: S !== void 0,
      target: x === e,
      parties: S === void 0 ? "withheld" : `${wd(S.issuer)} → ${wd(y.id)}`,
      state: a.get(x) ?? "not_established"
    };
  }), edges: g };
}
const Pt = (e) => e.length === 0 ? "not_established" : xe(e.map((t) => t.state)), xd = (e, t) => e.find((n) => n.state === t);
async function $a(e) {
  const t = Jt[e.binding], n = t.profiles[e.profileName], i = e.texts ?? {}, o = new Set(t.files.map((R) => R.uri)), r = t.files.find((R) => R.uri === e.target)?.origin ?? t.files.at(-1).origin, s = {}, a = [
    ...t.files,
    ...Object.entries(i).filter(([R]) => !o.has(R)).map(([R, E]) => ({ uri: R, mediaType: "application/vc", origin: r, version: "1", text: E, digestSRI: void 0 }))
  ].filter((R) => R.uri !== e.withheld).map((R) => {
    const E = i[R.uri] ?? R.text, k = new TextEncoder().encode(E);
    return s[R.uri] = E, {
      uri: R.uri,
      mediaType: R.mediaType,
      origin: R.origin,
      version: R.version,
      bytes: k,
      digestSRI: E === R.text && R.digestSRI ? R.digestSRI : sr(k)
    };
  }), c = $u({
    requestId: e.requestId,
    targetId: e.target,
    selectedClaims: e.claims.map((R) => ({ ...R })),
    purpose: "demonstrator",
    binding: { id: t.manifest.id, version: t.manifest.version },
    profile: { id: n.id, version: n.version },
    trustConfigId: "https://vc4qi.example/trust/fixture-anchors",
    evaluationTime: Ys,
    activityTime: Ys,
    suppliedEvidence: e.supplied.filter((R) => R !== e.withheld),
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5e6 },
    ...e.conformity ? { conformity: { ...e.conformity } } : {}
  }), { result: l } = await Dy[e.binding](c, new _d(a), t.manifest, n), p = (R, E = () => !0) => l.trace.filter((k) => k.gate === R && E(k)), f = [...p(2), ...p(1)], h = p(3), w = [...p(0), ...p(4)], x = (R, E, k) => E === "established" ? k : (xd(R, E) ?? xd(R, "not_established"))?.reason ?? "Not evaluated.", b = l.authorization, S = b.length === 0 ? "not_established" : xe(b.map((R) => R.state)), v = S === "established" ? b.map((R) => R.reasons.at(-1)).join(" ") : b.filter((R) => R.state !== "established").map((R) => `${R.claimId}: ${R.reasons.join(" ")}`).join(" "), y = l.support, d = l.artifactVerification.find((R) => R.artifactId === e.target)?.state === "established", u = y.length > 0 ? xe(y.map((R) => R.state)) : d ? "not_required" : "not_established", m = p(6, (R) => R.predicate.startsWith("conformity:")), I = [
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
      summary: x(w, Pt(w), p(4).map((R) => R.reason).join(" "))
    },
    {
      id: "authorized",
      state: S,
      summary: v,
      details: p(5, (R) => R.predicate.startsWith("claim-") || R.predicate.startsWith("restriction:") || R.predicate.startsWith("route:"))
    },
    {
      id: "supported",
      state: u,
      summary: y.length > 0 ? y.map((R) => R.reasons.join(" ")).join(" ") : d ? "This claim needs no supporting credential under the selected profile." : "Not evaluated: the credential did not pass the earlier checks.",
      details: p(6, (R) => R.predicate.startsWith("support:") || y.some((E) => E.obligationId === R.predicate))
    },
    l.conformity.requested ? {
      id: "fit",
      state: l.conformity.execution === "not_run" ? "not_asked" : l.conformity.state,
      details: m,
      summary: l.conformity.reasons.join(" ")
    } : { id: "fit", state: "not_asked", details: [], summary: e.notAsked }
  ], A = JSON.parse(s[e.target]), $ = Fy(e.target, s, l, S, u);
  return { profile: e.profileName, result: l, questions: I, target: A, texts: s, graph: $ };
}
async function cg(e) {
  const t = bd.find((s) => s.id === e.example) ?? bd[0], n = t.cases.find((s) => s.id === e.caseId) ?? t.cases[0], i = Jt[n.binding].files.find((s) => s.uri === n.target), o = e.tamper ? { [n.target]: i.text.replace(n.tamper[0], n.tamper[1]) } : {}, r = await $a({
    binding: n.binding,
    profileName: t.id === "dcc" && e.choice === "direct-only" ? "cal-verifier-1" : t.id === "dpp" && e.choice === "accreditation-only" ? ja : n.profile,
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
], ks = /* @__PURE__ */ new Map();
function El(e, t) {
  return ks.has(e) || ks.set(e, t()), ks.get(e);
}
const Id = "2026-09-20T00:00:00Z", Cn = (e, t) => Jt[e].files.find((n) => n.uri === t).text, kl = (e) => Jt[e].files.map((t) => ({
  uri: t.uri,
  mediaType: t.mediaType,
  origin: t.origin,
  version: t.version,
  bytes: new TextEncoder().encode(t.text),
  digestSRI: t.digestSRI
})), an = (e, t, n, i) => El(`${e}:list:${t}`, () => Cl(Ny(Cn(e, t), [0], Id), n, i, Id, kl(e), Cn(e, i))), Ml = (e, t, n) => e.replace(t, n), dg = [
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
}, lg = [
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
], ug = [
  { code: "R", label: "Recognition", tag: "proposal", kind: "grant", actor: "gaci", row: 1, about: "ab", heldBy: "ab" },
  { code: "A", label: "Accreditation", kind: "grant", actor: "ab", row: 1, about: "rmp", heldBy: "rmp" },
  { code: "H", label: "Laboratory accreditation", kind: "grant", actor: "ab", row: 2, about: "lab", heldBy: "lab" },
  { code: "O", label: "Operational scope", kind: "grant", actor: "rmp", row: 1, about: "rmp", heldBy: "rmp" },
  { code: "S", label: "Homogeneity study", kind: "evidence", actor: "lab", row: 2, about: "object", aboutLabel: "disc lot 1", heldBy: "rmp" },
  { code: "D", label: "RM certificate", kind: "claim", actor: "rmp", row: 2, about: "object", aboutLabel: "disc lot 1", heldBy: "holder" }
], By = {
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
}, pg = [
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
    text: "Accreditation H names a set, as an annex does: homogeneity studies of element contents in non-ferrous metals and alloys. It points up to R, pinned by digest: the body acts under its recognition. The laboratory publishes its own key and status list."
  },
  {
    id: "accredit",
    part: "build",
    acts: ["ab", "rmp"],
    joins: ["rmp"],
    issues: ["A"],
    title: "The accreditation body accredits the RM producer",
    text: "Accreditation A names sets, as a real annex row does: non-ferrous metals and alloys, element contents, 0.1 mg/kg – 997 g/kg, by methods M1 and M2. It is a flexible scope: the producer keeps its own, narrower list. A points up to R; the body can suspend A."
  },
  {
    id: "scope",
    part: "build",
    acts: ["rmp"],
    issues: ["O"],
    title: "The producer declares its operational scope",
    text: "Scope O is the producer's own list within that flexible scope: arsenic in CuZn39Pb3 discs, method M1, 50 to 500 mg/kg. It cites A, so it can be no wider than A. That this brass is a non-ferrous alloy and arsenic an element content is not a guess: the binding's governed vocabulary says so (skos:broader)."
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
], Ol = "rm-verifier-1", Ll = "rm-verifier-other-anchor (demonstrator)", Zy = "rm-verifier-global-aci-1";
{
  const e = In.rm.profiles[Ol];
  Jt.rm.profiles[Ll] = ra({
    ...e,
    id: "https://vc4qi.example/profiles/rm-verifier-other-anchor",
    description: "Demonstrator-only variant of rm-verifier-1 whose only trust anchor is another, fictional accreditation body.",
    trustAnchors: e.trustAnchors.map((t) => ({ ...t, id: "https://other-ab.vc4qi.example/controller" }))
  });
}
const ea = (e) => Cn("rm", e), Hy = (e) => e.certificate === "custom" ? se.LIVE : `https://producer.vc4qi.example/credentials/D${e.certificate}`;
function Jy(e) {
  return El(`rm:D:${e.value}:${e.uncertainty}:${e.method}`, () => {
    const { proof: t, ...n } = JSON.parse(ea("https://producer.vc4qi.example/credentials/D178")), i = structuredClone(n.credentialSubject), o = i.materialPropertiesList[0].results[0];
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
      ea(se.PRODUCER)
    );
  });
}
async function fg(e = {}) {
  const t = { ...By, ...e }, n = Hy(t), i = {};
  t.certificate === "custom" && (i[n] = await Jy(t)), t.suspendA && (i[se.SUSPENSION] = await an("rm", se.SUSPENSION, "nab", se.NAB)), t.revokeS && (i[se.LAB_STATUS] = await an("rm", se.LAB_STATUS, "lab", se.LAB)), t.suspendGaci && (i[se.GACI_SUSPENSION] = await an("rm", se.GACI_SUSPENSION, "global-aci", se.GACI));
  const o = Object.keys(i);
  if (t.tamper) {
    const a = i[n] ?? ea(n), c = JSON.parse(a).credentialSubject.materialPropertiesList[0].results[0].data.quantity.value;
    i[n] = Ml(a, `"value": "${c}"`, `"value": "${c === "150" ? "151" : "150"}"`);
  }
  const r = await $a({
    binding: "rm",
    profileName: t.trust === "ab" ? Ol : t.trust === "global-aci" ? Zy : Ll,
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
}, hg = [
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
], mg = [
  { code: "GS-A", label: "Accreditation", kind: "grant", actor: "ab", row: 1, about: "gsb", heldBy: "gsb" },
  { code: "GS-S", label: "Scheme permission", kind: "grant", actor: "so", row: 3, about: "gsb", heldBy: "gsb" },
  { code: "TR-1", label: "Type examination", kind: "evidence", actor: "gsb", row: 1, about: "object", aboutLabel: "model HD-01", heldBy: "mfr" },
  { code: "GSC-1", label: "GS certificate", kind: "grant", actor: "gsb", row: 2, about: "object", aboutLabel: "model HD-01", heldBy: "mfr" },
  { code: "FI-1", label: "Factory inspection", kind: "evidence", actor: "gsb", row: 3, about: "mfr", heldBy: "mfr" },
  { code: "GSM", label: "GS-mark credential", kind: "evidence", actor: "mfr", row: 2, about: "object", aboutLabel: "the unit", heldBy: "mfr" },
  { code: "DPP", label: "Product passport", kind: "claim", actor: "mfr", row: 3, about: "object", aboutLabel: "the unit", heldBy: "mfr" }
], Ky = {
  unit: "sn-0042",
  revokeA: !1,
  revokeS: !1,
  revokeC: !1,
  tamper: !1,
  withholdTR: !1,
  trust: "both"
}, Qy = {
  "sn-0042": "https://maker.vc4qi.example/credentials/DPP-1",
  "sn-0050": "https://maker.vc4qi.example/credentials/DPP-3",
  "sn-0001": "https://maker.vc4qi.example/credentials/DPP-2"
}, yg = [
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
    text: "It knows none of the parties in advance and trusts two roots: the accreditation body and the scheme owner. It follows every reference from the passport up to them before it relies on the GS mark."
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
async function gg(e = {}) {
  const t = { ...Ky, ...e }, n = Qy[t.unit], i = wt, o = {};
  t.revokeA && (o[i.NAB_STATUS] = await an("gs", i.NAB_STATUS, "nab", i.NAB)), t.revokeS && (o[i.ZLS_STATUS] = await an("gs", i.ZLS_STATUS, "zls", i.ZLS)), t.revokeC && (o[i.BODY_STATUS] = await an("gs", i.BODY_STATUS, "gs-body", i.BODY));
  const r = Object.keys(o);
  t.tamper && (o[n] = Ml(Cn("gs", n), "-sn-", "-sn-9"));
  const s = await $a({
    binding: "gs",
    profileName: t.trust === "both" ? "gs-verifier-dpp-1" : ja,
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
const vg = {
  evaluationTime: Ys,
  bindings: Object.fromEntries(Object.entries(Jt).map(([e, t]) => [e, `${t.manifest.id}@${t.manifest.version}`]))
};
export {
  Sd as BOARD_PARTS,
  Ys as EVALUATION_TIME,
  bd as EXAMPLES,
  hg as GS_ACTORS,
  mg as GS_ASSETS,
  Ky as GS_DEFAULT,
  yg as GS_STORY,
  lg as RM_ACTORS,
  ug as RM_ASSETS,
  By as RM_DEFAULT,
  dg as RM_PARTS,
  pg as RM_STORY,
  vg as buildInfo,
  gg as evaluateGsBoard,
  fg as evaluateRmBoard,
  cg as evaluateScenario
};
